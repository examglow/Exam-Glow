import { useState, useEffect, useRef } from "react";
import {
  Castle,
  Heart,
  Shield,
  HelpCircle,
  Lightbulb,
  Sparkles,
  Trophy,
  Skull,
  ArrowRight,
  RefreshCw,
  Volume2,
  VolumeX,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Flame,
} from "lucide-react";
import { QUEST_TRACKS, type QuestScenario } from "@/lib/arcade-data";
import { sound } from "./sound-fx";

interface ExamQuestProps {
  onBack: () => void;
  onFinish: (xpGained: number, score: number) => void;
}

export function ExamQuest({ onBack, onFinish }: ExamQuestProps) {
  const [selectedTrackKey, setSelectedTrackKey] = useState<string>("physics");
  const [gameState, setGameState] = useState<"select" | "climbing" | "victory" | "gameover">("select");
  const [currentFloor, setCurrentFloor] = useState(1);
  const [hp, setHp] = useState(3);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  // Lifelines
  const [used5050, setUsed5050] = useState(false);
  const [usedHint, setUsedHint] = useState(false);
  const [usedShield, setUsedShield] = useState(false);
  const [shieldActive, setShieldActive] = useState(false);
  const [showHintModal, setShowHintModal] = useState(false);
  const [eliminatedIndices, setEliminatedIndices] = useState<number[]>([]);

  // History log
  const [questLog, setQuestLog] = useState<Array<{ floor: number; scenario: QuestScenario; correct: boolean }>>([]);

  const track = (QUEST_TRACKS[selectedTrackKey] ?? QUEST_TRACKS["physics"])!;
  const currentScenario = (track.scenarios.find((s) => s.floor === currentFloor) ?? track.scenarios[0])!;

  const startQuest = (trackKey: string) => {
    setSelectedTrackKey(trackKey);
    setCurrentFloor(1);
    setHp(3);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUsed5050(false);
    setUsedHint(false);
    setUsedShield(false);
    setShieldActive(false);
    setShowHintModal(false);
    setEliminatedIndices([]);
    setQuestLog([]);
    setGameState("climbing");
  };

  const handleUse5050 = () => {
    if (used5050 || isAnswered || !currentScenario) return;
    setUsed5050(true);
    sound.playPowerup();

    const wrongIndices = currentScenario.options
      .map((_, idx) => idx)
      .filter((idx) => idx !== currentScenario.correctIndex);

    // Pick 2 random wrong options to eliminate
    const shuffledWrong = [...wrongIndices].sort(() => Math.random() - 0.5);
    setEliminatedIndices(shuffledWrong.slice(0, 2));
  };

  const handleUseHint = () => {
    if (usedHint || isAnswered) return;
    setUsedHint(true);
    sound.playPowerup();
    setShowHintModal(true);
  };

  const handleUseShield = () => {
    if (usedShield || isAnswered) return;
    setUsedShield(true);
    setShieldActive(true);
    sound.playPowerup();
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered || eliminatedIndices.includes(index) || !currentScenario) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentScenario.correctIndex;
    if (isCorrect) {
      sound.playCorrect();
      const points = (currentScenario.isBoss ? 300 : 150) + currentFloor * 20;
      setScore((s) => s + points);
      setQuestLog((prev) => [...prev, { floor: currentFloor, scenario: currentScenario, correct: true }]);
    } else {
      sound.playWrong();
      if (!shieldActive) {
        setHp((prev) => {
          const newHp = prev - 1;
          if (newHp <= 0) {
            setTimeout(() => setGameState("gameover"), 600);
          }
          return newHp;
        });
      } else {
        setShieldActive(false); // Shield absorbed the hit!
      }
      setQuestLog((prev) => [...prev, { floor: currentFloor, scenario: currentScenario, correct: false }]);
    }
  };

  const advanceFloor = () => {
    if (currentFloor >= track.scenarios.length) {
      sound.playVictory();
      setGameState("victory");
      return;
    }

    setCurrentFloor((f) => f + 1);
    setSelectedOption(null);
    setIsAnswered(false);
    setEliminatedIndices([]);
    setShowHintModal(false);
  };

  const xpGained = Math.round(score / 3) + (gameState === "victory" ? 250 : 0);

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

      {/* TRACK SELECTION SCREEN */}
      {gameState === "select" && (
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 space-y-8 shadow-sm text-center">
          <div className="size-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto text-indigo-500">
            <Castle className="size-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Exam Quest: Syllabus Tower</h2>
            <p className="text-sm text-muted-foreground">
              Climb 10 challenging floors of Cambridge exam scenarios. Face Mid-Boss & Final Examiner Boss challenges, use tactical lifelines, and guard your 3 hearts!
            </p>
          </div>

          {/* Track Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {[
              {
                id: "physics",
                name: "Physics Tower",
                code: "CIE 0625",
                desc: "Mechanics, Circuit Laws, Induction, Nuclear Decay & Transformers.",
                color: "from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-500",
              },
              {
                id: "chemistry",
                name: "Chemistry Tower",
                code: "CIE 0620",
                desc: "Stoichiometry, Electrolysis, Enthalpy, Haber Process & Hall-Héroult.",
                color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-500",
              },
              {
                id: "biology",
                name: "Biology Tower",
                code: "CIE 0610",
                desc: "Osmosis, Enzyme Kinetics, Homeostasis, Genetics & Natural Selection.",
                color: "from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-500",
              },
            ].map((t) => (
              <div
                key={t.id}
                onClick={() => startQuest(t.id)}
                className={`p-5 rounded-2xl border bg-gradient-to-b ${t.color} hover:scale-[1.02] cursor-pointer transition-all flex flex-col justify-between space-y-4`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">{t.code}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-background/80 border border-border">
                      10 Floors
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mt-2">{t.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-3">{t.desc}</p>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-foreground text-background text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm">
                  <span>Enter Tower</span>
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CLIMBING GAMEPLAY */}
      {gameState === "climbing" && currentScenario && (
        <div className="space-y-4">
          {/* Floor & Stats Banner */}
          <div className="rounded-2xl border border-border bg-card p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              {/* Floor Badge */}
              <div className="flex items-center gap-2">
                <div
                  className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                    currentScenario.isBoss
                      ? "bg-red-500/15 border border-red-500/30 text-red-600 dark:text-red-400 animate-pulse"
                      : "bg-primary/10 border border-primary/20 text-primary"
                  }`}
                >
                  {currentScenario.isBoss ? <Skull className="size-3.5" /> : <Castle className="size-3.5" />}
                  <span>Floor {currentFloor} / 10 {currentScenario.isBoss ? "• BOSS FLOOR" : ""}</span>
                </div>
              </div>

              {/* Hearts HP */}
              <div className="flex items-center gap-1">
                {[1, 2, 3].map((heartIndex) => (
                  <Heart
                    key={heartIndex}
                    className={`size-5 transition-all ${
                      heartIndex <= hp ? "fill-red-500 text-red-500 scale-105" : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Score */}
              <div className="text-right">
                <span className="text-xs text-muted-foreground font-medium">Score: </span>
                <span className="text-base font-black text-foreground">{score}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-primary transition-all duration-300"
                style={{ width: `${(currentFloor / 10) * 100}%` }}
              />
            </div>
          </div>

          {/* Lifelines Bar */}
          <div className="flex items-center justify-between gap-2 p-2 rounded-2xl border border-border bg-card/60">
            <span className="text-[11px] font-bold text-muted-foreground pl-2 uppercase tracking-wider">Lifelines:</span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleUse5050}
                disabled={used5050 || isAnswered}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                  used5050
                    ? "opacity-40 line-through border-border bg-muted text-muted-foreground cursor-not-allowed"
                    : "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/20"
                }`}
              >
                <span>50:50</span>
              </button>

              <button
                onClick={handleUseHint}
                disabled={usedHint || isAnswered}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                  usedHint
                    ? "opacity-40 line-through border-border bg-muted text-muted-foreground cursor-not-allowed"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20"
                }`}
              >
                <Lightbulb className="size-3.5" />
                <span>Yumna Hint</span>
              </button>

              <button
                onClick={handleUseShield}
                disabled={usedShield || isAnswered}
                className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                  usedShield
                    ? "opacity-40 line-through border-border bg-muted text-muted-foreground cursor-not-allowed"
                    : shieldActive
                    ? "border-emerald-500 bg-emerald-500 text-white animate-pulse"
                    : "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20"
                }`}
              >
                <Shield className="size-3.5" />
                <span>{shieldActive ? "Shield Active" : "Shield"}</span>
              </button>
            </div>
          </div>

          {/* Hint Card Modal if active */}
          {showHintModal && (
            <div className="p-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200 text-xs space-y-1 animate-in fade-in slide-in-from-top-2">
              <p className="font-bold flex items-center gap-1.5">
                <Sparkles className="size-4 text-amber-500" />
                <span>Yumna's Examiner Hint:</span>
              </p>
              <p>{currentScenario.hint}</p>
            </div>
          )}

          {/* Question & Scenario Box */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8 space-y-5 shadow-sm">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-bold uppercase tracking-wider text-primary">{currentScenario.topic}</span>
                <span className="font-mono">{currentScenario.syllabusCode}</span>
              </div>

              {/* Scenario Narrative */}
              <div className="p-4 rounded-2xl bg-muted/50 border border-border text-xs md:text-sm text-foreground/90 leading-relaxed italic">
                "{currentScenario.scenario}"
              </div>

              {/* Question Text */}
              <h3 className="text-base md:text-lg font-bold text-foreground pt-2">
                {currentScenario.question}
              </h3>
            </div>

            {/* Multiple Choice Options */}
            <div className="space-y-2.5 pt-2">
              {currentScenario.options.map((opt, idx) => {
                const isEliminated = eliminatedIndices.includes(idx);
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentScenario.correctIndex;

                let optStyle = "border-border bg-card hover:bg-muted text-foreground";
                if (isEliminated) {
                  optStyle = "opacity-30 line-through border-border cursor-not-allowed bg-muted";
                } else if (isAnswered) {
                  if (isCorrect) {
                    optStyle = "border-emerald-500 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold";
                  } else if (isSelected) {
                    optStyle = "border-red-500 bg-red-500/15 text-red-700 dark:text-red-300 font-bold";
                  } else {
                    optStyle = "border-border opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered || isEliminated}
                    className={`w-full p-4 rounded-2xl border text-left text-xs md:text-sm transition-all flex items-start gap-3 ${optStyle}`}
                  >
                    <span className="size-5 rounded-full border border-border/80 bg-muted/60 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1">{opt}</span>
                    {isAnswered && isCorrect && <CheckCircle2 className="size-5 text-emerald-500 shrink-0" />}
                    {isAnswered && isSelected && !isCorrect && <XCircle className="size-5 text-red-500 shrink-0" />}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation & Next Floor Button */}
            {isAnswered && (
              <div className="pt-4 border-t border-border space-y-4 animate-in fade-in">
                <div
                  className={`p-4 rounded-2xl text-xs space-y-1 ${
                    selectedOption === currentScenario.correctIndex
                      ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200"
                      : "border border-red-500/30 bg-red-500/10 text-red-900 dark:text-red-200"
                  }`}
                >
                  <p className="font-bold">
                    {selectedOption === currentScenario.correctIndex ? "✓ Correct!" : "✗ Examiner Correction:"}
                  </p>
                  <p>{currentScenario.explanation}</p>
                </div>

                {hp > 0 && (
                  <button
                    onClick={advanceFloor}
                    className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <span>{currentFloor < 10 ? `Ascend to Floor ${currentFloor + 1}` : "Claim Tower Victory"}</span>
                    <ArrowRight className="size-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* VICTORY SCREEN */}
      {gameState === "victory" && (
        <div className="rounded-3xl border border-border bg-card p-6 md:p-10 space-y-6 shadow-sm text-center">
          <div className="size-20 rounded-3xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-500 animate-bounce">
            <Trophy className="size-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Tower Conquered
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-foreground">Syllabus Master Certificate</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              You cleared all 10 floors including the Examiner Bosses! Your subject mastery has been recorded.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            <div className="p-3 rounded-2xl bg-muted/60 border border-border">
              <p className="text-[11px] text-muted-foreground">Final Score</p>
              <p className="text-xl font-black text-foreground mt-0.5">{score}</p>
            </div>
            <div className="p-3 rounded-2xl bg-muted/60 border border-border">
              <p className="text-[11px] text-muted-foreground">Hearts Left</p>
              <p className="text-xl font-black text-red-500 mt-0.5">{hp} / 3</p>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">XP Reward</p>
              <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-0.5">+{xpGained}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setGameState("select")}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-secondary hover:bg-muted font-semibold text-sm transition-all"
            >
              Choose Another Tower
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

      {/* GAME OVER SCREEN */}
      {gameState === "gameover" && (
        <div className="rounded-3xl border border-red-500/30 bg-card p-6 md:p-10 space-y-6 shadow-sm text-center">
          <div className="size-16 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center mx-auto text-red-500">
            <Skull className="size-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-foreground">Out of Hearts!</h2>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              You were defeated on Floor {currentFloor}. Review the examiner notes and try again with tactical lifelines!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => startQuest(selectedTrackKey)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-md"
            >
              <RefreshCw className="size-4" />
              Retry Tower
            </button>
            <button
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-secondary hover:bg-muted font-semibold text-sm"
            >
              Back to Arcade
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
