import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ArrowLeft, Volume2, VolumeX, Sparkles, Scale, Check, RefreshCw, Trophy } from "lucide-react";
import { sound } from "../sound-fx";

interface PhysicsBalance3DProps {
  onBack: () => void;
  onFinish: (xp: number, score: number) => void;
}

interface BalanceLevel {
  id: string;
  title: string;
  scenario: string;
  leftWeights: Array<{ massN: number; distanceM: number }>;
  availableBlocks: number[]; // N weights available for the right side
  targetDistanceSlots: number[]; // distance positions on right side
  targetDistance: number;
  correctWeight: number;
  explanation: string;
}

const BALANCE_LEVELS: BalanceLevel[] = [
  {
    id: "lvl-1",
    title: "Level 1: Single Pivot Equilibrium",
    scenario: "A 40 N weight is placed 3 m to the left of the fulcrum. Total anticlockwise moment = 120 N·m.",
    leftWeights: [{ massN: 40, distanceM: 3 }],
    availableBlocks: [20, 30, 40, 60],
    targetDistanceSlots: [2, 3, 4],
    targetDistance: 4,
    correctWeight: 30, // 30 N * 4 m = 120 N*m
    explanation: "Anticlockwise Moment = 40 N × 3 m = 120 N·m. For equilibrium, Clockwise Moment must equal 120 N·m. At distance 4 m: Weight = 120 / 4 = 30 N.",
  },
  {
    id: "lvl-2",
    title: "Level 2: Heavy Mass Close to Pivot",
    scenario: "A 100 N engine is placed 1 m left of the pivot. Total anticlockwise moment = 100 N·m.",
    leftWeights: [{ massN: 100, distanceM: 1 }],
    availableBlocks: [20, 25, 50, 75],
    targetDistanceSlots: [2, 4, 5],
    targetDistance: 4,
    correctWeight: 25, // 25 N * 4 m = 100 N*m
    explanation: "Principle of moments: 100 N × 1 m = 100 N·m. At 4 m distance on the right, required load = 100 / 4 = 25 N.",
  },
  {
    id: "lvl-3",
    title: "Level 3: Multi-Load Compound Balance",
    scenario: "Two masses are on the left: 20 N at 4 m and 30 N at 2 m. Total anticlockwise moment = (20×4) + (30×2) = 140 N·m.",
    leftWeights: [{ massN: 20, distanceM: 4 }, { massN: 30, distanceM: 2 }],
    availableBlocks: [28, 35, 45, 70],
    targetDistanceSlots: [2, 4, 5],
    targetDistance: 5,
    correctWeight: 28, // 28 N * 5 m = 140 N*m
    explanation: "Total Anticlockwise Moment = 80 + 60 = 140 N·m. Required load at 5 m = 140 / 5 = 28 N.",
  },
];

export function PhysicsBalance3D({ onBack, onFinish }: PhysicsBalance3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [levelIndex, setLevelIndex] = useState(0);
  const [chosenWeight, setChosenWeight] = useState<number | null>(null);
  const [chosenDistance, setChosenDistance] = useState<number>(4);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; balanced: boolean } | null>(null);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const currentLevel = BALANCE_LEVELS[levelIndex] ?? BALANCE_LEVELS[0]!;

  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    beamGroup: THREE.Group;
    rightWeightMesh: THREE.Mesh | null;
  } | null>(null);

  // Initialize Three.js physics laboratory
  const initThree = useCallback(() => {
    if (!containerRef.current) return () => {};

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.02);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 3.5, 12);
    camera.lookAt(0, 1.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0f172a);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Laboratory Floor Grid
    const floorGeo = new THREE.PlaneGeometry(30, 30);
    floorGeo.rotateX(-Math.PI / 2);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x020617,
      roughness: 0.8,
      metalness: 0.2,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -1.5;
    scene.add(floor);

    // Fulcrum Pivot (Triangle Cone)
    const fulcrumGeo = new THREE.ConeGeometry(0.8, 1.6, 4);
    fulcrumGeo.rotateY(Math.PI / 4);
    const fulcrumMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.8,
      roughness: 0.2,
    });
    const fulcrum = new THREE.Mesh(fulcrumGeo, fulcrumMat);
    fulcrum.position.set(0, -0.7, 0);
    scene.add(fulcrum);

    // Balance Beam Group (Pivots at origin)
    const beamGroup = new THREE.Group();
    beamGroup.position.set(0, 0.1, 0);

    // Wooden Beam
    const beamGeo = new THREE.BoxGeometry(11, 0.25, 0.8);
    const beamMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      roughness: 0.6,
      metalness: 0.1,
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamGroup.add(beamMesh);

    // Meter Tick Marks
    for (let m = -5; m <= 5; m++) {
      if (m === 0) continue;
      const tickGeo = new THREE.BoxGeometry(0.04, 0.28, 0.82);
      const tickMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const tick = new THREE.Mesh(tickGeo, tickMat);
      tick.position.set(m, 0, 0);
      beamGroup.add(tick);
    }

    scene.add(beamGroup);

    threeRef.current = {
      scene,
      camera,
      renderer,
      beamGroup,
      rightWeightMesh: null,
    };

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const cleanup = initThree();
    return cleanup;
  }, [initThree]);

  // Update Left Weights and Right Weight meshes on level or selection change
  useEffect(() => {
    if (!threeRef.current) return;
    const { beamGroup } = threeRef.current;

    // Remove existing mass meshes (keep beam and ticks)
    for (let i = beamGroup.children.length - 1; i >= 11; i--) {
      beamGroup.remove(beamGroup.children[i]!);
    }

    // Add Left Weights (Brass Cylinders)
    currentLevel.leftWeights.forEach((w) => {
      const h = Math.max(0.4, w.massN * 0.015);
      const massGeo = new THREE.CylinderGeometry(0.35, 0.35, h, 16);
      const massMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.8,
        roughness: 0.2,
      });
      const mesh = new THREE.Mesh(massGeo, massMat);
      mesh.position.set(-w.distanceM, h / 2 + 0.125, 0);
      beamGroup.add(mesh);
    });

    // Add Right Weight if chosen
    if (chosenWeight !== null) {
      const h = Math.max(0.4, chosenWeight * 0.015);
      const massGeo = new THREE.CylinderGeometry(0.35, 0.35, h, 16);
      const massMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        metalness: 0.8,
        roughness: 0.2,
      });
      const rightMesh = new THREE.Mesh(massGeo, massMat);
      rightMesh.position.set(chosenDistance, h / 2 + 0.125, 0);
      beamGroup.add(rightMesh);
    }
  }, [currentLevel, chosenWeight, chosenDistance]);

  // Calculate beam tilt and moments
  const calculateEquilibrium = () => {
    if (chosenWeight === null) return;

    const totalAnticlockwise = currentLevel.leftWeights.reduce(
      (sum, w) => sum + w.massN * w.distanceM,
      0
    );
    const clockwise = chosenWeight * chosenDistance;
    const netTorque = clockwise - totalAnticlockwise;

    // Tilt Beam in 3D
    if (threeRef.current) {
      const maxTilt = Math.PI / 12; // 15 degrees max
      let targetAngle = 0;
      if (netTorque > 0) targetAngle = -maxTilt; // right down
      else if (netTorque < 0) targetAngle = maxTilt; // left down
      else targetAngle = 0; // balanced!

      // Smooth tilt animation
      threeRef.current.beamGroup.rotation.z = targetAngle;
    }

    if (netTorque === 0) {
      sound.playVictory();
      setScore((s) => s + 300);
      setFeedback({
        text: `✓ PERFECT EQUILIBRIUM! Anticlockwise (${totalAnticlockwise} N·m) = Clockwise (${clockwise} N·m).`,
        balanced: true,
      });

      setTimeout(() => {
        if (levelIndex + 1 < BALANCE_LEVELS.length) {
          setLevelIndex((l) => l + 1);
          setChosenWeight(null);
          setFeedback(null);
          if (threeRef.current) threeRef.current.beamGroup.rotation.z = 0;
        } else {
          setFeedback({
            text: "🏆 ALL 3D MOMENTS & EQUILIBRIUM LABS MASTERED!",
            balanced: true,
          });
        }
      }, 2000);
    } else {
      sound.playWrong();
      setFeedback({
        text: `✗ UNBALANCED! Net Torque = ${Math.abs(netTorque)} N·m (${netTorque > 0 ? "Tilted Right" : "Tilted Left"}). Adjust load.`,
        balanced: false,
      });
    }
  };

  return (
    <div className="relative w-full h-[650px] md:h-[720px] rounded-3xl overflow-hidden border border-border/80 bg-slate-950 shadow-2xl flex flex-col justify-between">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />

      {/* Top HUD */}
      <div className="relative z-10 p-4 md:p-6 flex items-center justify-between pointer-events-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white hover:bg-slate-800 transition-all"
        >
          <ArrowLeft className="size-3.5" />
          <span>Exit Lab</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs text-white font-mono flex items-center gap-2">
            <span className="text-slate-400">XP:</span>
            <strong className="text-emerald-400 text-sm">{score}</strong>
          </div>

          <button
            onClick={() => setIsMuted(sound.toggleMute())}
            className="p-2.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 hover:text-white"
          >
            {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4 text-emerald-400" />}
          </button>
        </div>
      </div>

      {/* Center Scenario Card */}
      <div className="relative z-10 max-w-xl mx-auto px-4 pointer-events-none">
        <div className="p-4 md:p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-amber-500/30 shadow-2xl text-center space-y-2">
          <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
            <span>{currentLevel.title}</span>
            <span>Principle of Moments</span>
          </div>

          <p className="text-sm md:text-base font-semibold text-white">{currentLevel.scenario}</p>
          <p className="text-xs text-slate-300">
            Target position: Place weight at <strong>{chosenDistance} m</strong> to the right.
          </p>
        </div>

        {feedback && (
          <div
            className={`mt-2 py-1.5 px-4 rounded-full text-xs font-bold text-center mx-auto max-w-md animate-in fade-in ${
              feedback.balanced
                ? "bg-emerald-500/20 border border-emerald-400/50 text-emerald-300"
                : "bg-red-500/20 border border-red-400/50 text-red-300"
            }`}
          >
            {feedback.text}
          </div>
        )}
      </div>

      {/* Bottom Weight Placement Controls */}
      <div className="relative z-10 p-4 md:p-6 max-w-xl mx-auto w-full space-y-3 pointer-events-auto">
        {/* Choose Distance Slot */}
        <div className="flex items-center justify-center gap-2 p-2 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-2">Slot:</span>
          {currentLevel.targetDistanceSlots.map((d) => (
            <button
              key={d}
              onClick={() => {
                setChosenDistance(d);
                sound.playFlip();
              }}
              className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                chosenDistance === d ? "bg-amber-500 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              +{d} m Right
            </button>
          ))}
        </div>

        {/* Calibrated Weight Blocks Selection */}
        <div className="grid grid-cols-4 gap-2">
          {currentLevel.availableBlocks.map((mass) => (
            <button
              key={mass}
              onClick={() => {
                setChosenWeight(mass);
                sound.playFlip();
              }}
              className={`py-3 rounded-2xl font-mono text-xs font-bold transition-all border ${
                chosenWeight === mass
                  ? "bg-sky-500 text-white border-sky-400 scale-105 shadow-lg shadow-sky-500/30"
                  : "bg-slate-900/80 backdrop-blur-md border-slate-700 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {mass} N Load
            </button>
          ))}
        </div>

        {/* Test Equilibrium Button */}
        <button
          onClick={calculateEquilibrium}
          disabled={chosenWeight === null}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-40"
        >
          <Scale className="size-4" />
          <span>Release Pivot & Test Equilibrium</span>
        </button>
      </div>
    </div>
  );
}
