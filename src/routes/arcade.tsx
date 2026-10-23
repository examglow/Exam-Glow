import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Gamepad2,
  Sparkles,
  Zap,
  Atom,
  Scale,
  Dna,
  ArrowRight,
  Volume2,
  VolumeX,
  Trophy,
  Flame,
  Star,
  Compass,
} from "lucide-react";

import { DashboardLayout, PageHeading } from "@/components/dashboard-page";
import { FormulaFlight3D } from "@/components/arcade/3d/formula-flight-3d";
import { OrbitalCore3D } from "@/components/arcade/3d/orbital-core-3d";
import { PhysicsBalance3D } from "@/components/arcade/3d/physics-balance-3d";
import { CellularOdyssey3D } from "@/components/arcade/3d/cellular-odyssey-3d";
import { sound } from "@/components/arcade/sound-fx";

export const Route = createFileRoute("/arcade")({
  head: () => ({
    meta: [
      { title: "3D Study Games & Labs | ExamGlow" },
      {
        name: "description",
        content:
          "Interactive 3D simulation games for IGCSE & GCSE: Formula Flight 3D, Orbital Core, Torque Balance, and Cellular Odyssey.",
      },
      { property: "og:title", content: "3D Study Games | ExamGlow" },
      {
        property: "og:description",
        content: "Master Physics, Chemistry & Biology with real-time 3D interactive simulations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArcadePage,
});

type Active3DGame = "lobby" | "flight" | "orbital" | "balance" | "cell";

function ArcadePage() {
  const [activeGame, setActiveGame] = useState<Active3DGame>("lobby");
  const [isMuted, setIsMuted] = useState(sound.isMuted);
  const [xp, setXp] = useState(620);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("arcade_total_xp");
      if (saved) setXp(Number(saved));
    }
  }, []);

  const handleFinish = (gainedXp: number) => {
    const updated = xp + gainedXp;
    setXp(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("arcade_total_xp", String(updated));
    }
  };

  return (
    <DashboardLayout crumbs={[{ label: "Practice & Activities" }, { label: "3D Study Games" }]}>
      <PageHeading
        icon={<Gamepad2 className="size-5" aria-hidden />}
        title="3D Study Games"
        subtitle="Tactile, interactive 3D simulations designed to build deep conceptual intuition for IGCSE Sciences and Mathematics."
      />

      <div className="mt-6">
        {/* ACTIVE 3D GAME SCREEN */}
        {activeGame === "flight" && (
          <FormulaFlight3D
            onBack={() => setActiveGame("lobby")}
            onFinish={(gained) => handleFinish(gained)}
          />
        )}

        {activeGame === "orbital" && (
          <OrbitalCore3D
            onBack={() => setActiveGame("lobby")}
            onFinish={(gained) => handleFinish(gained)}
          />
        )}

        {activeGame === "balance" && (
          <PhysicsBalance3D
            onBack={() => setActiveGame("lobby")}
            onFinish={(gained) => handleFinish(gained)}
          />
        )}

        {activeGame === "cell" && (
          <CellularOdyssey3D
            onBack={() => setActiveGame("lobby")}
            onFinish={(gained) => handleFinish(gained)}
          />
        )}

        {/* LOBBY / HUB VIEW */}
        {activeGame === "lobby" && (
          <div className="space-y-8">
            {/* Humanized Clean Hero Banner */}
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5" />
                  <span>Real-Time 3D WebGL Engines</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Learn through 3D play & physical intuition
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Step inside real-time 3D environments. Steer through hyperspace equation gates, assemble subatomic nuclei, balance laboratory fulcrums, and explore living cell ultrastructures.
                </p>
              </div>

              {/* Sound & Total XP Badge */}
              <div className="flex items-center gap-3">
                <div className="px-5 py-3 rounded-2xl border border-border bg-muted/40 text-center">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Total XP</p>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{xp}</p>
                </div>

                <button
                  onClick={() => setIsMuted(sound.toggleMute())}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="p-3.5 rounded-2xl border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isMuted ? <VolumeX className="size-5" /> : <Volume2 className="size-5 text-emerald-500" />}
                </button>
              </div>
            </div>

            {/* 4 3D Game Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 1. Formula Flight 3D */}
              <div
                onClick={() => {
                  sound.playPowerup();
                  setActiveGame("flight");
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="flex items-start justify-between">
                  <div className="size-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 group-hover:scale-110 transition-transform">
                    <Compass className="size-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    3D Tunnel Runner
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    Formula Flight 3D
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Pilot a 3D starship through glowing hyperspace tunnels. Dodge obstacles and fly through the correct equation gates across IGCSE Physics, Chemistry & Math.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs">
                  <span className="text-muted-foreground font-medium">Physics & Math Formulas</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                    Launch 3D Game <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>

              {/* 2. Orbital Core 3D */}
              <div
                onClick={() => {
                  sound.playPowerup();
                  setActiveGame("orbital");
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 hover:border-rose-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="flex items-start justify-between">
                  <div className="size-14 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform">
                    <Atom className="size-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                    3D Atomic Simulator
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    Orbital Core 3D
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Rotate an interactive 3D atom with live electron shells and nuclear packing. Synthesize radioisotopes and ions while learning subatomic stability rules.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs">
                  <span className="text-muted-foreground font-medium">Atomic Chemistry & Nuclear</span>
                  <span className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                    Enter 3D Core <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>

              {/* 3. Torque Balance 3D */}
              <div
                onClick={() => {
                  sound.playPowerup();
                  setActiveGame("balance");
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="flex items-start justify-between">
                  <div className="size-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <Scale className="size-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    3D Physics Laboratory
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    Torque Balance 3D
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Test the Principle of Moments and Torque on a real 3D pivot fulcrum. Place calibrated weights at precise meter distances to achieve perfect equilibrium.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs">
                  <span className="text-muted-foreground font-medium">Moments & Equilibrium</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                    Open 3D Lab <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>

              {/* 4. Cellular Odyssey 3D */}
              <div
                onClick={() => {
                  sound.playPowerup();
                  setActiveGame("cell");
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="flex items-start justify-between">
                  <div className="size-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <Dna className="size-7" />
                  </div>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    3D Cell Explorer
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Cellular Odyssey 3D
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Explore inside a 3D transparent living cell. Rotate the microscopic view, locate mitochondria, chloroplasts, ribosomes, and learn organelle functions.
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border/60 text-xs">
                  <span className="text-muted-foreground font-medium">Cell Biology & Ultrastructure</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1.5 transition-transform">
                    Explore 3D Cell <ArrowRight className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
