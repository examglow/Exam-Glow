import { useState, useEffect, useCallback } from "react";
import {
  KeyRound,
  Lightbulb,
  Sparkles,
  Trophy,
  RefreshCw,
  ArrowRight,
  Volume2,
  VolumeX,
  Flame,
  CheckCircle2,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import { WORD_BLAST_DATA, type WordBlastTerm } from "@/lib/arcade-data";
import { sound } from "./sound-fx";

interface WordBlastProps {
  onBack: () => void;
  onFinish: (xpGained: number, score: number) => void;
}

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

export function WordBlast({ onBack, onFinish }: WordBlastProps) {
  const [gameState, setGameState] = useState<"ready" | "playing" | "finished">("ready");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [maxWrong] = useState(6);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [hintRevealed, setHintRevealed] = useState(false);
  const [terms, setTerms] = useState<WordBlastTerm[]>([]);
  const [history, setHistory] = useState<Array<{ term: WordBlastTerm; solved: boolean }>>([]);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const startBlast = useCallback(() => {
    const shuffled = [...WORD_BLAST_DATA].sort(() => Math.random() - 0.5);
    setTerms(shuffled);
    setCurrentIndex(0);
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setHintRevealed(false);
    setHistory([]);
    setGameState("playing");
  }, []);

  const currentTerm = terms[currentIndex];

  // Check if current word is solved
  const isWordSolved = currentTerm
    ? currentTerm.term
        .split("")
        .filter((c) => c !== " ")
        .every((char) => guessedLetters.has(char))
    : false;

  const isWordFailed = wrongGuesses >= maxWrong;

  const handleGuess = useCallback(
    (letter: string) => {
      if (gameState !== "playing" || !currentTerm || isWordSolved || isWordFailed) return;

      const upper = letter.toUpperCase();
      if (guessedLetters.has(upper)) return;

      setGuessedLetters((prev) => new Set([...prev, upper]));

      if (currentTerm.term.includes(upper)) {
        sound.playCorrect();
      } else {
        sound.playWrong();
        setWrongGuesses((w) => w + 1);
      }
    },
    [gameState, currentTerm, isWordSolved, isWordFailed, guessedLetters]
  );

  // Handle word completion
  useEffect(() => {
    if (isWordSolved && currentTerm) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      const points = 150 + Math.max(0, (maxWrong - wrongGuesses) * 20) + (hintRevealed ? 0 : 50);
      setScore((s) => s + points);
      sound.playVictory();
      setHistory((prev) => [...prev, { term: currentTerm, solved: true }]);
    } else if (isWordFailed && currentTerm) {
      setStreak(0);
      setHistory((prev) => [...prev, { term: currentTerm, solved: false }]);
    }
  }, [isWordSolved, isWordFailed]);

  // Physical keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[a-zA-Z]$/.test(e.key)) {
        handleGuess(e.key.toUpperCase());
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleGuess]);

  const nextWord = () => {
    if (currentIndex + 1 >= terms.length || currentIndex >= 7) {
      // Complete after 8 words
      sound.playVictory();
      setGameState("finished");
    } else {
      setCurrentIndex((i) => i + 1);
      setGuessedLetters(new Set());
      setWrongGuesses(0);
      setHintRevealed(false);
    }
  };

  const handleRevealHint = () => {
    if (!currentTerm || hintRevealed || isWordSolved || isWordFailed) return;
    setHintRevealed(true);
    sound.playPowerup();

    // Also reveal the first unrevealed letter as a bonus help
    const unrevealed = currentTerm.term
      .split("")
      .filter((c) => c !== " " && !guessedLetters.has(c));
    const firstUnrevealed = unrevealed[0];
    if (firstUnrevealed) {
      setGuessedLetters((prev) => new Set([...prev, firstUnrevealed]));
    }
  };

  const xpGained = Math.round(score / 4);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {/* Top Bar */}
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
        </div>
      </div>

      {/* READY SCREEN */}
      {gameState === "ready" && (
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 space-y-6 shadow-sm text-center">
          <div className="size-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-500">
            <KeyRound className="size-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Term Decrypter & Word Blast</h2>
            <p className="text-sm text-muted-foreground">
              Cambridge mark schemes demand exact technical vocabulary. Read the official definition, deduce the term, and blast the letters before your attempts run out!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-left pt-2">
            <div className="p-3.5 rounded-2xl bg-muted/60 border border-border">
              <span className="text-xs font-bold text-foreground">1. Read Definition</span>
              <p className="text-[11px] text-muted-foreground mt-1">Official Cambridge syllabus definition</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-muted/60 border border-border">
              <span className="text-xs font-bold text-foreground">2. Blast Letters</span>
              <p className="text-[11px] text-muted-foreground mt-1">Type on keyboard or tap letter tiles</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-muted/60 border border-border">
              <span className="text-xs font-bold text-foreground">3. Earn Marks</span>
              <p className="text-[11px] text-muted-foreground mt-1">Master examiner keywords</p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={startBlast}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="size-5 fill-white" />
              Start Word Blast
            </button>
          </div>
        </div>
      )}

      {/* PLAYING SCREEN */}
      {gameState === "playing" && currentTerm && (
        <div className="space-y-4">
          {/* Stats Bar */}
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-semibold">Score</p>
              <p className="text-xl font-black text-foreground">{score}</p>
            </div>

            {/* Guesses Remaining Gauge */}
            <div className="text-center">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Attempts Left</p>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: maxWrong }).map((_, i) => (
                  <span
                    key={i}
                    className={`size-2.5 rounded-full transition-all ${
                      i < maxWrong - wrongGuesses ? "bg-cyan-500 scale-100" : "bg-red-500/30 scale-75"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Streak */}
            <div className="text-right">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Streak</p>
              <p className="text-xl font-black text-cyan-600 dark:text-cyan-400 flex items-center justify-end gap-1">
                {streak > 1 && <Flame className="size-4 fill-cyan-500 text-cyan-500 animate-bounce" />}
                <span>{streak}x</span>
              </p>
            </div>
          </div>

          {/* Main Word Card */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border/50 pb-3">
              <span className="font-bold text-primary uppercase tracking-wider">{currentTerm.subject} • {currentTerm.category}</span>
              <span>Word {currentIndex + 1} of 8</span>
            </div>

            {/* Definition Prompt */}
            <div className="p-4 rounded-2xl bg-muted/60 border border-border text-center space-y-2">
              <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                Cambridge Mark Scheme Definition:
              </span>
              <p className="text-sm md:text-base font-medium text-foreground leading-relaxed">
                "{currentTerm.definition}"
              </p>
            </div>

            {/* Letter Tiles Display */}
            <div className="flex flex-wrap items-center justify-center gap-2 py-4">
              {currentTerm.term.split("").map((char, index) => {
                if (char === " ") {
                  return <span key={index} className="w-4" />;
                }
                const isGuessed = guessedLetters.has(char);
                return (
                  <div
                    key={index}
                    className={`size-11 md:size-13 rounded-xl border flex items-center justify-center text-lg md:text-xl font-mono font-black transition-all ${
                      isGuessed
                        ? "border-cyan-500 bg-cyan-500/15 text-cyan-600 dark:text-cyan-300 scale-105"
                        : isWordFailed
                        ? "border-red-500/50 bg-red-500/10 text-red-500"
                        : "border-border bg-muted/40 text-transparent"
                    }`}
                  >
                    {isGuessed || isWordFailed ? char : ""}
                  </div>
                );
              })}
            </div>

            {/* Hint Button if active */}
            {!isWordSolved && !isWordFailed && (
              <div className="flex justify-center">
                <button
                  onClick={handleRevealHint}
                  disabled={hintRevealed}
                  className={`text-xs px-4 py-2 rounded-full border transition-all flex items-center gap-1.5 ${
                    hintRevealed
                      ? "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      : "border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Lightbulb className="size-3.5" />
                  <span>{hintRevealed ? `Clue: ${currentTerm.hint}` : "Reveal Clue & 1 Letter"}</span>
                </button>
              </div>
            )}

            {/* Interactive Keyboard */}
            {!isWordSolved && !isWordFailed && (
              <div className="space-y-1.5 pt-2 max-w-lg mx-auto">
                {KEYBOARD_ROWS.map((row, rIdx) => (
                  <div key={rIdx} className="flex justify-center gap-1.5">
                    {row.map((char) => {
                      const isUsed = guessedLetters.has(char);
                      const isCorrect = isUsed && currentTerm.term.includes(char);
                      const isWrong = isUsed && !currentTerm.term.includes(char);

                      let keyStyle = "border-border bg-card hover:bg-muted text-foreground";
                      if (isCorrect) {
                        keyStyle = "border-cyan-500 bg-cyan-500 text-white font-bold";
                      } else if (isWrong) {
                        keyStyle = "border-border bg-muted/30 text-muted-foreground/30 opacity-40";
                      }

                      return (
                        <button
                          key={char}
                          onClick={() => handleGuess(char)}
                          disabled={isUsed}
                          className={`size-8 md:size-10 rounded-lg border font-mono font-bold text-xs md:text-sm flex items-center justify-center transition-all ${keyStyle}`}
                        >
                          {char}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {/* Result Breakdown Card when solved or failed */}
            {(isWordSolved || isWordFailed) && (
              <div className="space-y-4 pt-4 border-t border-border animate-in fade-in">
                <div
                  className={`p-4 rounded-2xl border text-xs space-y-1.5 ${
                    isWordSolved
                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200"
                      : "border-red-500/30 bg-red-500/10 text-red-900 dark:text-red-200"
                  }`}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>{isWordSolved ? "✓ Term Decrypted!" : "✗ Word Missed"}</span>
                    <span className="font-mono text-sm">{currentTerm.term}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    <strong>Examiner Note:</strong> {currentTerm.examinerNote}
                  </p>
                </div>

                <button
                  onClick={nextWord}
                  className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <span>{currentIndex + 1 < 8 ? "Next Term" : "Finish Word Blast"}</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FINISHED SCREEN */}
      {gameState === "finished" && (
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 space-y-6 shadow-sm text-center">
          <div className="size-16 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-500">
            <Trophy className="size-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-foreground">Vocabulary Forge Complete!</h2>
            <p className="text-sm text-muted-foreground">
              You reviewed high-frequency examinable definitions across Cambridge curricula.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto text-center">
            <div className="p-3 rounded-2xl bg-muted/60 border border-border">
              <p className="text-xs text-muted-foreground">Final Score</p>
              <p className="text-xl font-black text-foreground mt-0.5">{score}</p>
            </div>
            <div className="p-3 rounded-2xl bg-muted/60 border border-border">
              <p className="text-xs text-muted-foreground">Best Streak</p>
              <p className="text-xl font-black text-cyan-500 mt-0.5">{maxStreak}x</p>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">XP Reward</p>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">+{xpGained}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={startBlast}
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
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md transition-all"
            >
              Collect XP & Back to Hub
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
