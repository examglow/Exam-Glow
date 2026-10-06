import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ArrowLeft, Volume2, VolumeX, Sparkles, Trophy, RotateCcw, Zap, Compass } from "lucide-react";
import { sound } from "../sound-fx";
import { FORMULA_SPRINT_DATA, type FormulaSprintQuestion } from "@/lib/arcade-data";

interface FormulaFlight3DProps {
  onBack: () => void;
  onFinish: (xp: number, score: number) => void;
}

export function FormulaFlight3D({ onBack, onFinish }: FormulaFlight3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gameState, setGameState] = useState<"intro" | "playing" | "gameover">("intro");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [speed, setSpeed] = useState(1.0);
  const [currentQuestion, setCurrentQuestion] = useState<FormulaSprintQuestion | null>(null);
  const [activeLane, setActiveLane] = useState<number>(1); // 0 = Left, 1 = Center-Left, 2 = Center-Right, 3 = Right
  const [feedback, setFeedback] = useState<{ text: string; type: "good" | "bad" } | null>(null);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  // Mutable game state refs for 60fps render loop
  const stateRef = useRef({
    playing: false,
    score: 0,
    streak: 0,
    shipX: 0,
    targetShipX: 0,
    speed: 0.8,
    gates: [] as Array<{
      group: THREE.Group;
      z: number;
      question: FormulaSprintQuestion;
      options: string[];
      correctIndex: number;
      passed: boolean;
    }>,
    particles: null as THREE.Points | null,
    tunnelMesh: null as THREE.Mesh | null,
    shipMesh: null as THREE.Group | null,
    questionIndex: 0,
  });

  const LANE_X_POSITIONS = [-6, -2, 2, 6];

  const initThree = useCallback(() => {
    if (!containerRef.current) return () => {};

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050814, 0.015);

    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 300);
    camera.position.set(0, 3, 10);
    camera.lookAt(0, 1.5, -20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x050814);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 2.0);
    dirLight.position.set(0, 10, 5);
    scene.add(dirLight);

    // Tunnel / Synthwave Road grid
    const tunnelGeo = new THREE.CylinderGeometry(14, 14, 400, 24, 40, true);
    tunnelGeo.rotateX(Math.PI / 2);
    const tunnelMat = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const tunnelMesh = new THREE.Mesh(tunnelGeo, tunnelMat);
    scene.add(tunnelMesh);
    stateRef.current.tunnelMesh = tunnelMesh;

    // Floating Starfield Particles
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 40;
      posArray[i + 1] = (Math.random() - 0.5) * 30;
      posArray[i + 2] = -Math.random() * 200;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.4,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    stateRef.current.particles = particles;

    // 3D Player Starship
    const shipGroup = new THREE.Group();

    // Fuselage
    const bodyGeo = new THREE.ConeGeometry(0.8, 2.8, 6);
    bodyGeo.rotateX(-Math.PI / 2);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x0369a1,
      roughness: 0.2,
      metalness: 0.8,
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    shipGroup.add(bodyMesh);

    // Wings
    const wingGeo = new THREE.BoxGeometry(3.6, 0.08, 1.2);
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.9,
      roughness: 0.1,
    });
    const wingMesh = new THREE.Mesh(wingGeo, wingMat);
    wingMesh.position.set(0, -0.1, 0.2);
    shipGroup.add(wingMesh);

    // Thruster glow
    const thrusterGeo = new THREE.SphereGeometry(0.3, 8, 8);
    const thrusterMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const thruster = new THREE.Mesh(thrusterGeo, thrusterMat);
    thruster.position.set(0, 0, 1.4);
    shipGroup.add(thruster);

    shipGroup.position.set(0, 0.8, 0);
    scene.add(shipGroup);
    stateRef.current.shipMesh = shipGroup;

    // Helper: Create 3D Text Canvas Texture for Portals
    const createPortalTexture = (text: string, isCorrectOption: boolean) => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
        ctx.beginPath();
        ctx.roundRect(10, 10, 236, 236, 24);
        ctx.fill();

        ctx.strokeStyle = isCorrectOption ? "#38bdf8" : "#94a3b8";
        ctx.lineWidth = 8;
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 38px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, 128, 128);
      }
      return new THREE.CanvasTexture(canvas);
    };

    // Helper: Spawn a gate wave with 4 lanes
    const spawnGateWave = (zDistance: number, q: FormulaSprintQuestion) => {
      const gateGroup = new THREE.Group();
      const options = [...q.options];
      const correctIdx = options.indexOf(q.correct);

      LANE_X_POSITIONS.forEach((xPos, idx) => {
        const optionText = options[idx] || "";
        const isCorrect = idx === correctIdx;

        // Arch Frame
        const archGeo = new THREE.TorusGeometry(1.6, 0.12, 12, 24);
        const archMat = new THREE.MeshStandardMaterial({
          color: isCorrect ? 0x0284c7 : 0x64748b,
          emissive: isCorrect ? 0x0369a1 : 0x1e293b,
          roughness: 0.3,
        });
        const arch = new THREE.Mesh(archGeo, archMat);
        arch.position.set(xPos, 1.5, 0);
        gateGroup.add(arch);

        // Hologram Canvas Banner
        const bannerGeo = new THREE.PlaneGeometry(2.4, 2.4);
        const bannerMat = new THREE.MeshBasicMaterial({
          map: createPortalTexture(optionText, isCorrect),
          transparent: true,
          side: THREE.DoubleSide,
        });
        const banner = new THREE.Mesh(bannerGeo, bannerMat);
        banner.position.set(xPos, 1.5, 0);
        gateGroup.add(banner);
      });

      gateGroup.position.z = zDistance;
      scene.add(gateGroup);

      stateRef.current.gates.push({
        group: gateGroup,
        z: zDistance,
        question: q,
        options,
        correctIndex: correctIdx,
        passed: false,
      });
    };

    // Pre-spawn initial waves
    const shuffledQuestions = [...FORMULA_SPRINT_DATA].sort(() => Math.random() - 0.5);
    setCurrentQuestion(shuffledQuestions[0] || null);

    shuffledQuestions.slice(0, 8).forEach((q, idx) => {
      spawnGateWave(-50 - idx * 60, q);
    });

    // Resize Handler
    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const st = stateRef.current;

      // Animate starfield
      if (st.particles) {
        const posAttr = st.particles.geometry.getAttribute("position");
        if (posAttr) {
          const positions = posAttr.array as Float32Array;
          for (let i = 2; i < positions.length; i += 3) {
            const currentZ = positions[i] ?? -50;
            const newZ = currentZ + st.speed * 40 * delta;
            positions[i] = newZ > 20 ? -180 : newZ;
          }
          posAttr.needsUpdate = true;
        }
      }

      // Rotate tunnel
      if (st.tunnelMesh) {
        st.tunnelMesh.rotation.z += 0.15 * delta;
      }

      // Smooth ship movement & banking tilt
      if (st.shipMesh) {
        st.shipX += (st.targetShipX - st.shipX) * 12 * delta;
        st.shipMesh.position.x = st.shipX;
        st.shipMesh.rotation.z = (st.shipX - st.targetShipX) * 0.25;
        st.shipMesh.rotation.x = Math.sin(clock.getElapsedTime() * 4) * 0.05;
      }

      // Move gates towards player
      if (st.playing) {
        for (let i = st.gates.length - 1; i >= 0; i--) {
          const gate = st.gates[i];
          if (!gate) continue;

          gate.z += st.speed * 35 * delta;
          gate.group.position.z = gate.z;

          // Gate collision with ship at z ≈ 0
          if (!gate.passed && gate.z > -2 && gate.z < 3) {
            gate.passed = true;

            // Determine which lane the ship is closest to
            let closestLane = 0;
            let minDistance = 999;
            LANE_X_POSITIONS.forEach((lx, lIdx) => {
              const d = Math.abs(st.shipX - lx);
              if (d < minDistance) {
                minDistance = d;
                closestLane = lIdx;
              }
            });

            if (closestLane === gate.correctIndex) {
              // SUCCESS
              sound.playCorrect();
              st.streak += 1;
              const gain = 100 + st.streak * 30;
              st.score += gain;
              st.speed = Math.min(1.8, st.speed + 0.05);

              setScore(st.score);
              setStreak(st.streak);
              setSpeed(st.speed);
              setFeedback({ text: `+${gain} PERFECT BOOST!`, type: "good" });
            } else {
              // MISSED
              sound.playWrong();
              st.streak = 0;
              st.speed = Math.max(0.7, st.speed - 0.2);

              setStreak(0);
              setSpeed(st.speed);
              setFeedback({ text: `MISSED! (Correct: ${gate.question.correct})`, type: "bad" });
            }

            // Update upcoming question UI
            const nextGate = st.gates[i + 1];
            if (nextGate) {
              setCurrentQuestion(nextGate.question);
            }
          }

          // Recycle gates that passed behind camera
          if (gate.z > 25) {
            scene.remove(gate.group);
            st.gates.splice(i, 1);

            // Spawn fresh gate ahead
            const furthestZ = st.gates.length > 0 ? Math.min(...st.gates.map((g) => g.z)) : -50;
            const nextQ = FORMULA_SPRINT_DATA[Math.floor(Math.random() * FORMULA_SPRINT_DATA.length)]!;
            spawnGateWave(furthestZ - 60, nextQ);
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const cleanup = initThree();
    return cleanup;
  }, [initThree]);

  // Steer to Lane
  const steerToLane = (laneIndex: number) => {
    setActiveLane(laneIndex);
    const targetX = LANE_X_POSITIONS[laneIndex] ?? 0;
    stateRef.current.targetShipX = targetX;
    sound.playFlip();
  };

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (gameState !== "playing") return;
      if (e.key === "ArrowLeft" || e.key === "a") {
        setActiveLane((prev) => {
          const next = Math.max(0, prev - 1);
          stateRef.current.targetShipX = LANE_X_POSITIONS[next] ?? 0;
          return next;
        });
      } else if (e.key === "ArrowRight" || e.key === "d") {
        setActiveLane((prev) => {
          const next = Math.min(3, prev + 1);
          stateRef.current.targetShipX = LANE_X_POSITIONS[next] ?? 0;
          return next;
        });
      } else if (e.key === "1") steerToLane(0);
      else if (e.key === "2") steerToLane(1);
      else if (e.key === "3") steerToLane(2);
      else if (e.key === "4") steerToLane(3);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gameState]);

  const startGame = () => {
    stateRef.current.playing = true;
    stateRef.current.score = 0;
    stateRef.current.streak = 0;
    stateRef.current.speed = 0.85;
    setScore(0);
    setStreak(0);
    setSpeed(0.85);
    setFeedback(null);
    setGameState("playing");
    sound.playPowerup();
  };

  return (
    <div className="relative w-full h-[650px] md:h-[720px] rounded-3xl overflow-hidden border border-border/80 bg-slate-950 shadow-2xl flex flex-col justify-between">
      {/* 3D WebGL Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Top HUD Overlay */}
      <div className="relative z-10 p-4 md:p-6 flex items-center justify-between pointer-events-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white hover:bg-slate-800 transition-all"
        >
          <ArrowLeft className="size-3.5" />
          <span>Exit Flight</span>
        </button>

        {/* Minimal Score & Multiplier HUD */}
        {gameState === "playing" && (
          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs text-white font-mono flex items-center gap-2">
              <span className="text-slate-400">SCORE:</span>
              <strong className="text-emerald-400 text-sm">{score}</strong>
            </div>

            {streak > 1 && (
              <div className="px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/50 text-xs text-sky-300 font-bold flex items-center gap-1.5 animate-pulse">
                <Zap className="size-3.5 fill-sky-400" />
                <span>{streak}x HYPERBOOST</span>
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => setIsMuted(sound.toggleMute())}
          className="p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white"
        >
          {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4 text-emerald-400" />}
        </button>
      </div>

      {/* Center Formula Prompt HUD (During Flight) */}
      {gameState === "playing" && currentQuestion && (
        <div className="relative z-10 max-w-xl mx-auto px-4 pointer-events-none">
          <div className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-sky-500/40 shadow-2xl text-center space-y-2">
            <div className="flex items-center justify-between text-[11px] text-sky-400 font-mono">
              <span className="uppercase font-bold tracking-wider">{currentQuestion.subject}</span>
              <span>Steer into matching gate</span>
            </div>

            <p className="text-sm md:text-base font-semibold text-white">{currentQuestion.prompt}</p>

            <div className="inline-block px-4 py-1.5 rounded-xl bg-slate-950 border border-slate-700 font-mono text-xl md:text-2xl font-black text-sky-300">
              {currentQuestion.missingPart}
            </div>
          </div>

          {/* Real-time Feedback Banner */}
          {feedback && (
            <div
              className={`mt-2 py-1 px-3 rounded-full text-xs font-bold text-center mx-auto max-w-xs transition-all animate-bounce ${
                feedback.type === "good"
                  ? "bg-emerald-500/20 border border-emerald-400/50 text-emerald-300"
                  : "bg-red-500/20 border border-red-400/50 text-red-300"
              }`}
            >
              {feedback.text}
            </div>
          )}
        </div>
      )}

      {/* INTRO SCREEN */}
      {gameState === "intro" && (
        <div className="relative z-10 m-auto max-w-md p-6 md:p-8 rounded-3xl bg-slate-900/90 backdrop-blur-2xl border border-slate-700/80 text-center space-y-5 shadow-2xl pointer-events-auto">
          <div className="size-16 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center mx-auto text-sky-400">
            <Compass className="size-8" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-2xl font-black text-white tracking-tight">Formula Flight 3D</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Steer your pod through 3D hyperspace energy gates. Match missing variables and equations across Cambridge Physics, Chemistry & Math.
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 text-left space-y-1">
            <p className="font-semibold text-slate-200">Flight Controls:</p>
            <p>• Use <strong>A / D</strong> or <strong>Left / Right Arrows</strong> to switch flight lanes.</p>
            <p>• Or tap the 4 touch lane buttons at the bottom of the screen.</p>
          </div>

          <button
            onClick={startGame}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="size-4" />
            <span>Launch 3D Flight</span>
          </button>
        </div>
      )}

      {/* Bottom 4 Touch Steering Buttons */}
      {gameState === "playing" && (
        <div className="relative z-10 p-4 md:p-6 max-w-lg mx-auto w-full grid grid-cols-4 gap-2 pointer-events-auto">
          {["Lane 1", "Lane 2", "Lane 3", "Lane 4"].map((label, idx) => (
            <button
              key={idx}
              onClick={() => steerToLane(idx)}
              className={`py-3 rounded-2xl font-mono text-xs font-bold transition-all border ${
                activeLane === idx
                  ? "bg-sky-500 text-white border-sky-400 scale-105 shadow-lg shadow-sky-500/30"
                  : "bg-slate-900/80 backdrop-blur-md border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {currentQuestion?.options[idx] || `${idx + 1}`}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
