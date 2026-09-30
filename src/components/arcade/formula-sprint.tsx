import { useState, useEffect, useRef, useCallback } from "react";
import { Zap, Timer, Flame, RefreshCw, CheckCircle2, XCircle, ArrowRight, Trophy, BookOpen, Volume2, VolumeX } from "lucide-react";
import { FORMULA_SPRINT_DATA, type FormulaSprintQuestion } from "@/lib/arcade-data";
import { sound } from "./sound-fx";

interface FormulaSprintProps {
  onBack: () => void;
  onFinish: (xpGained: number, score: number) => void;
}

export function FormulaSprint({ onBack, onFinish }: FormulaSprintProps) {
  const [gameState, setGameState] = useState<"ready" | "playing" | "finished">("ready");
  const [subjectFilter, setSubjectFilter] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [questions, setQuestions] = useState<FormulaSprintQuestion[]>([]);
  const [history, setHistory] = useState<Array<{ q: FormulaSprintQuestion; chosen: string; isCorrect: boolean }>>([]);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startSprint = useCallback(() => {
    let pool = [...FORMULA_SPRINT_DATA];
    if (subjectFilter !== "all") {
      pool = pool.filter((q) => q.subject === subjectFilter);
    }
    // Shuffle
    pool.sort(() => Math.random() - 0.5);
    setQuestions(pool);
    setCurrentIndex(0);
    setScore(0);
    setCombo(0);
    setMaxCombo(0);
    setTimeLeft(60);
    setSelectedOption(null);
    setFeedback(null);
    setHistory([]);
    setGameState("playing");
  }, [subjectFilter]);

  // Timer countdown
  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            sound.playVictory();
            setGameState("finished");
            return 0;
          }
          if (prev <= 5) {
            sound.playTick();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [gameState, timeLeft]);

  // Handle Answer Selection
  const handleAnswer = (option: string) => {
    if (selectedOption !== null || gameState !== "playing") return;

    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    setSelectedOption(option);
    const isCorrect = option === currentQ.correct;

    if (isCorrect) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);
      const points = 100 + Math.min(newCombo * 25, 150);
      setScore((s) => s + points);
      setFeedback("correct");
      if (newCombo >= 3) {
        sound.playCombo(newCombo);
      } else {
        sound.playCorrect();
      }
    } else {
      setCombo(0);
      setFeedback("wrong");
      sound.playWrong();
    }

    setHistory((prev) => [...prev, { q: currentQ, chosen: option, isCorrect }]);

    // Move to next question after brief delay
    setTimeout(() => {
      setSelectedOption(null);
      setFeedback(null);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((i) => i + 1);
      } else {
        // Recycle shuffled questions if player clears deck before timer
        setQuestions((prev) => [...prev].sort(() => Math.random() - 0.5));
        setCurrentIndex(0);
      }
    }, 450);
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== "playing" || selectedOption !== null) return;
      const currentQ = questions[currentIndex];
      if (!currentQ) return;

      if (e.key === "1" && currentQ.options[0]) handleAnswer(currentQ.options[0]);
      if (e.key === "2" && currentQ.options[1]) handleAnswer(currentQ.options[1]);
      if (e.key === "3" && currentQ.options[2]) handleAnswer(currentQ.options[2]);
      if (e.key === "4" && currentQ.options[3]) handleAnswer(currentQ.options[3]);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, selectedOption, currentIndex, questions]);

  const currentQ = questions[currentIndex];
  const xpGained = Math.round(score / 5);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to Arcade
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMuted(sound.toggleMute())}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4 text-emerald-500" />}
          </button>

          {gameState === "playing" && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-sm">
              <Timer className="size-4 animate-pulse" />
              <span>{timeLeft}s</span>
            </div>
          )}
        </div>
      </div>

      {/* READY SCREEN */}
      {gameState === "ready" && (
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 text-center space-y-6 shadow-sm">
          <div className="size-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-500">
            <Zap className="size-8 fill-amber-500" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Formula Speed Sprint</h2>
            <p className="text-sm text-muted-foreground">
              60 seconds on the clock. Fill in missing variables, match SI units, and calculate relationships across Cambridge Physics, Chemistry, Maths, and Biology. Build combos for bonus XP!
            </p>
          </div>

          {/* Subject Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "all", label: "All Subjects" },
              { id: "physics", label: "Physics" },
              { id: "chemistry", label: "Chemistry" },
              { id: "maths", label: "Mathematics" },
              { id: "biology", label: "Biology" },
            ].map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSubjectFilter(sub.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                  subjectFilter === sub.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/70 text-muted-foreground hover:text-foreground"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={startSprint}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-base shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Zap className="size-5 fill-white" />
              Start 60s Sprint
            </button>
          </div>
        </div>
      )}

      {/* PLAYING SCREEN */}
      {gameState === "playing" && currentQ && (
        <div className="space-y-4">
          {/* Header Stats Bar */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Score</p>
              <p className="text-2xl font-black text-foreground">{score}</p>
            </div>

            <div className="flex items-center gap-2">
              {combo > 1 && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-black animate-bounce">
                  <Flame className="size-3.5 fill-orange-500" />
                  <span>{combo}x COMBO</span>
                </div>
              )}
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Subject</p>
              <p className="text-sm font-bold text-foreground capitalize">{currentQ.subject}</p>
            </div>
          </div>

          {/* Question Card */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 space-y-6 shadow-md transition-all">
            <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/50 pb-3">
              <span>Question {currentIndex + 1}</span>
              <span className="font-mono">{currentQ.unitOrRule}</span>
            </div>

            <p className="text-lg md:text-xl font-semibold text-foreground text-center">
              {currentQ.prompt}
            </p>

            {/* Formula Missing Part Spotlight Box */}
            <div className="py-6 px-4 rounded-2xl bg-muted/60 border border-border text-center">
              <span className="font-mono text-2xl md:text-3xl font-black tracking-wide text-foreground">
                {currentQ.missingPart.split("?").map((part, idx, arr) => (
                  <span key={idx}>
                    {part}
                    {idx < arr.length - 1 && (
                      <span className="inline-block px-3 py-0.5 mx-1 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/40 animate-pulse font-mono">
                        ?
                      </span>
                    )}
                  </span>
                ))}
              </span>
            </div>

            {/* 4 Quick Options */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((opt, index) => {
                const isSelected = selectedOption === opt;
                let btnStyle = "border-border bg-card hover:bg-muted text-foreground";

                if (selectedOption !== null) {
                  if (opt === currentQ.correct) {
                    btnStyle = "border-emerald-500 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold scale-[1.02]";
                  } else if (isSelected) {
                    btnStyle = "border-red-500 bg-red-500/15 text-red-600 dark:text-red-400 font-bold";
                  } else {
                    btnStyle = "border-border opacity-50";
                  }
                }

                return (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    disabled={selectedOption !== null}
                    className={`relative p-4 md:p-5 rounded-2xl border text-base md:text-lg font-mono font-bold transition-all text-center flex items-center justify-center gap-3 ${btnStyle}`}
                  >
                    <span className="absolute left-3 top-3 text-[10px] text-muted-foreground font-sans px-1.5 py-0.5 rounded bg-muted/80">
                      {index + 1}
                    </span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* FINISHED SCREEN */}
      {gameState === "finished" && (
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 space-y-6 shadow-sm">
          <div className="text-center space-y-3">
            <div className="size-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-500">
              <Trophy className="size-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black">Sprint Completed!</h2>
            <p className="text-sm text-muted-foreground">Great recall under pressure. Here is your final breakdown:</p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-4 rounded-2xl bg-muted/60 border border-border">
              <p className="text-xs text-muted-foreground font-medium">Final Score</p>
              <p className="text-2xl font-black text-foreground mt-1">{score}</p>
            </div>
            <div className="p-4 rounded-2xl bg-muted/60 border border-border">
              <p className="text-xs text-muted-foreground font-medium">Max Streak</p>
              <p className="text-2xl font-black text-orange-500 mt-1">{maxCombo}x</p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">XP Earned</p>
              <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">+{xpGained}</p>
            </div>
          </div>

          {/* Examiner Recap List */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <BookOpen className="size-4 text-primary" />
              <span>Examiner Formula Recap ({history.length} attempted)</span>
            </h3>

            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {history.map(({ q, chosen, isCorrect }, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl border text-xs flex items-start gap-3 ${
                    isCorrect ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"
                  }`}
                >
                  {isCorrect ? (
                    <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="size-4 text-red-500 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1 space-y-1">
                    <p className="font-semibold text-foreground">{q.prompt}</p>
                    <p className="text-muted-foreground font-mono">
                      Answer: <span className="font-bold text-emerald-600 dark:text-emerald-400">{q.correct}</span>
                      {!isCorrect && <span className="text-red-500 line-through ml-2">(You picked: {chosen})</span>}
                    </p>
                    <p className="text-muted-foreground text-[11px]">{q.explanation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-border">
            <button
              onClick={startSprint}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-muted font-semibold text-sm transition-all"
            >
              <RefreshCw className="size-4" />
              Play Again
            </button>

            <button
              onClick={() => {
                onFinish(xpGained, score);
                onBack();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Collect XP & Back to Hub</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
