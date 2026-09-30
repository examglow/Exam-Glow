import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Gamepad2,
  Zap,
  Castle,
  KeyRound,
  BrainCircuit,
  Trophy,
  Flame,
  Star,
  Award,
  ArrowRight,
  Sparkles,
  Volume2,
  VolumeX,
  Clock,
  RotateCcw,
} from "lucide-react";

import { DashboardLayout, PageHeading } from "@/components/dashboard-page";
import { FormulaSprint } from "@/components/arcade/formula-sprint";
import { ExamQuest } from "@/components/arcade/exam-quest";
import { WordBlast } from "@/components/arcade/word-blast";
import { MemoryMatrix } from "@/components/arcade/memory-matrix";
import { sound } from "@/components/arcade/sound-fx";

export const Route = createFileRoute("/arcade")({
  head: () => ({
    meta: [
      { title: "Study Games & Arcade — Interactive Cambridge Revision | ExamGlow" },
      {
        name: "description",
        content:
          "Sharpen your exam recall with 4 realistic study games: Formula Sprint, Exam Quest Tower, Term Decrypter, and Memory Matrix.",
      },
      { property: "og:title", content: "Study Games & Arcade | ExamGlow" },
      {
        property: "og:description",
        content: "Master Cambridge IGCSE and GCSE syllabus concepts with interactive revision games.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArcadePage,
});

type ActiveGame = "lobby" | "formula-sprint" | "exam-quest" | "word-blast" | "memory-matrix";

interface ArcadeStats {
  totalXp: number;
  gamesPlayed: number;
  bestStreak: number;
  formulaHighScore: number;
  questHighFloor: number;
  wordBlastHighScore: number;
  matrixBestTime: number;
}

const DEFAULT_STATS: ArcadeStats = {
  totalXp: 450,
  gamesPlayed: 3,
  bestStreak: 5,
  formulaHighScore: 820,
  questHighFloor: 7,
  wordBlastHighScore: 650,
  matrixBestTime: 28,
};

function getRankTitle(xp: number): { title: string; badge: string; color: string } {
  if (xp >= 3000) return { title: "Cambridge Grandmaster", badge: "🌟 Grade 9 Elite", color: "text-amber-500" };
  if (xp >= 1800) return { title: "Syllabus Champion", badge: "🏆 Master Scholar", color: "text-purple-500" };
  if (xp >= 1000) return { title: "Exam Strategist", badge: "⚡ High Achiever", color: "text-indigo-500" };
  if (xp >= 500) return { title: "Concept Explorer", badge: "🎯 Rising Star", color: "text-emerald-500" };
  return { title: "Apprentice Scholar", badge: "🌱 Novice", color: "text-blue-500" };
}

function ArcadePage() {
  const [activeGame, setActiveGame] = useState<ActiveGame>("lobby");
  const [stats, setStats] = useState<ArcadeStats>(() => {
    if (typeof window === "undefined") return DEFAULT_STATS;
    try {
      const saved = localStorage.getItem("examglow_arcade_stats");
      return saved ? JSON.parse(saved) : DEFAULT_STATS;
    } catch {
      return DEFAULT_STATS;
    }
  });
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("examglow_arcade_stats", JSON.stringify(stats));
    }
  }, [stats]);

  const handleGameFinish = (xpGained: number, score: number) => {
    setStats((prev) => ({
      ...prev,
      totalXp: prev.totalXp + xpGained,
      gamesPlayed: prev.gamesPlayed + 1,
    }));
  };

  const rank = getRankTitle(stats.totalXp);

  return (
    <DashboardLayout crumbs={[{ label: "Practice & Activities" }, { label: "Study Games" }]}>
      <PageHeading
        icon={<Gamepad2 className="size-5" aria-hidden />}
        title="Study Games & Arcade"
        subtitle="Turn high-yield Cambridge syllabus revision into realistic, engaging, and competitive practice challenges."
      />

      <div className="mt-6">
        {/* GAME 1: FORMULA SPRINT */}
        {activeGame === "formula-sprint" && (
          <FormulaSprint
            onBack={() => setActiveGame("lobby")}
            onFinish={(xp, score) => {
              handleGameFinish(xp, score);
              if (score > stats.formulaHighScore) {
                setStats((s) => ({ ...s, formulaHighScore: score }));
              }
            }}
          />
        )}

        {/* GAME 2: EXAM QUEST */}
        {activeGame === "exam-quest" && (
          <ExamQuest
            onBack={() => setActiveGame("lobby")}
            onFinish={(xp, score) => {
              handleGameFinish(xp, score);
            }}
          />
        )}

        {/* GAME 3: WORD BLAST */}
        {activeGame === "word-blast" && (
          <WordBlast
            onBack={() => setActiveGame("lobby")}
            onFinish={(xp, score) => {
              handleGameFinish(xp, score);
              if (score > stats.wordBlastHighScore) {
                setStats((s) => ({ ...s, wordBlastHighScore: score }));
              }
            }}
          />
        )}

        {/* GAME 4: MEMORY MATRIX */}
        {activeGame === "memory-matrix" && (
          <MemoryMatrix
            onBack={() => setActiveGame("lobby")}
            onFinish={(xp, score) => {
              handleGameFinish(xp, score);
            }}
          />
        )}

        {/* MAIN LOBBY */}
        {activeGame === "lobby" && (
          <div className="space-y-8">
            {/* Stats & Rank Banner */}
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted/40 p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Left: Player Level */}
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                    <Trophy className="size-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Arcade Profile
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold">
                        {rank.badge}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-foreground">{rank.title}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {stats.totalXp} XP accumulated across {stats.gamesPlayed} study game sessions
                    </p>
                  </div>
                </div>

                {/* Right: Quick Stats & Audio Toggle */}
                <div className="flex items-center gap-3 self-end md:self-center">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-2xl border border-border bg-card">
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Total XP</p>
                      <p className="text-base font-black text-emerald-600 dark:text-emerald-400">{stats.totalXp}</p>
                    </div>
                    <div className="w-px h-6 bg-border" />
                    <div className="text-center">
                      <p className="text-[10px] text-muted-foreground uppercase font-semibold">Games</p>
                      <p className="text-base font-black text-foreground">{stats.gamesPlayed}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsMuted(sound.toggleMute())}
                    title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
                    className="p-3 rounded-2xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4 text-emerald-500" />}
                  </button>
                </div>
              </div>
            </div>

            {/* 4 Study Games Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Featured Study Games</h3>
                  <p className="text-xs text-muted-foreground">
                    Select a game mode to test speed, scenario analysis, keyword precision, or concept pairing.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* 1. FORMULA SPEED SPRINT */}
                <div
                  onClick={() => {
                    sound.playPowerup();
                    setActiveGame("formula-sprint");
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="size-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                      <Zap className="size-6 fill-amber-500" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                      <Clock className="size-3" />
                      60s Speed Run
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      Formula Speed Sprint
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Race against the 60-second clock to fill in missing variables, solve SI units, and calculate relationships in Physics, Chemistry & Math.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs">
                    <span className="text-muted-foreground font-medium">
                      High Score: <strong className="text-foreground">{stats.formulaHighScore} pts</strong>
                    </span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Play Sprint <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>

                {/* 2. EXAM QUEST TOWER */}
                <div
                  onClick={() => {
                    sound.playPowerup();
                    setActiveGame("exam-quest");
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="size-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                      <Castle className="size-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                      10 Floors • Boss Battles
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Exam Quest: Syllabus Tower
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Tactical exam dungeon crawler. Ascend 10 floors of Cambridge past question scenarios with 3 hearts, 50/50, and Yumna hint lifelines.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs">
                    <span className="text-muted-foreground font-medium">
                      Best Ascent: <strong className="text-foreground">Floor 10 (Master)</strong>
                    </span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Enter Tower <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>

                {/* 3. TERM DECRYPTER & WORD BLAST */}
                <div
                  onClick={() => {
                    sound.playPowerup();
                    setActiveGame("word-blast");
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="size-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 group-hover:scale-110 transition-transform">
                      <KeyRound className="size-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      Vocabulary & Keywords
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      Term Decrypter & Word Blast
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Master the exact technical keywords Cambridge mark schemes look for. Read official definitions and blast the letters with limited attempts.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs">
                    <span className="text-muted-foreground font-medium">
                      High Score: <strong className="text-foreground">{stats.wordBlastHighScore} pts</strong>
                    </span>
                    <span className="font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Decrypt Words <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>

                {/* 4. MEMORY MATRIX */}
                <div
                  onClick={() => {
                    sound.playPowerup();
                    setActiveGame("memory-matrix");
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="size-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                      <BrainCircuit className="size-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      Cognitive Recall
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Memory Matrix: Concept Grid
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Flip and pair educational concepts: Organelles to functions, chemical reactants to products, circuit symbols to laws, and logic gates.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs">
                    <span className="text-muted-foreground font-medium">
                      3-Star Mastery Challenge
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Solve Matrix <ArrowRight className="size-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Study Tip Card */}
            <div className="p-5 rounded-3xl border border-border bg-muted/30 flex items-start gap-4">
              <div className="size-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                <Sparkles className="size-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-foreground">Why Study Games Work for Cambridge Exams</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Gamified active recall and interleaved practice have been proven to increase long-term memory retention by up to 40% compared to passive re-reading. Use <strong>Formula Sprint</strong> before solving calculation papers and <strong>Word Blast</strong> before paper 2/4 definition questions.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
