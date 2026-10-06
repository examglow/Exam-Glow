import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ArrowLeft, Volume2, VolumeX, Sparkles, Trophy, Atom, Plus, Minus, Check, RefreshCw } from "lucide-react";
import { sound } from "../sound-fx";

interface OrbitalCore3DProps {
  onBack: () => void;
  onFinish: (xp: number, score: number) => void;
}

interface AtomChallenge {
  id: string;
  name: string;
  symbol: string;
  targetProtons: number;
  targetNeutrons: number;
  targetElectrons: number;
  description: string;
  syllabusHint: string;
}

const ATOM_CHALLENGES: AtomChallenge[] = [
  {
    id: "c-14",
    name: "Carbon-14 Isotope",
    symbol: "¹⁴C",
    targetProtons: 6,
    targetNeutrons: 8,
    targetElectrons: 6,
    description: "Build the unstable radiocarbon isotope used in archaeological carbon dating.",
    syllabusHint: "Carbon always has 6 protons (Atomic #6). Mass number 14 = 6 protons + 8 neutrons.",
  },
  {
    id: "cl-37",
    name: "Chlorine-37 Isotope",
    symbol: "³⁷Cl",
    targetProtons: 17,
    targetNeutrons: 20,
    targetElectrons: 17,
    description: "Configure the stable isotope making up ~24% of natural chlorine gas.",
    syllabusHint: "Chlorine is Group 7 (17 protons). Neutrons = 37 - 17 = 20.",
  },
  {
    id: "na-ion",
    name: "Sodium Cation (Na⁺)",
    symbol: "Na⁺",
    targetProtons: 11,
    targetNeutrons: 12,
    targetElectrons: 10,
    description: "Create a stable Sodium ion that has lost its single outer valence electron.",
    syllabusHint: "Na loses 1 electron (11 - 1 = 10 e⁻) to achieve a stable Neon noble gas octet.",
  },
  {
    id: "o-ion",
    name: "Oxide Anion (O²⁻)",
    symbol: "O²⁻",
    targetProtons: 8,
    targetNeutrons: 8,
    targetElectrons: 10,
    description: "Synthesize an Oxide anion that has gained 2 electrons into its outer shell.",
    syllabusHint: "Oxygen (8p, 8e) gains 2 valence electrons -> 10 electrons for a full 2,8 octet.",
  },
];

export function OrbitalCore3D({ onBack, onFinish }: OrbitalCore3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [challengeIndex, setChallengeIndex] = useState(0);
  const [protons, setProtons] = useState(6);
  const [neutrons, setNeutrons] = useState(6);
  const [electrons, setElectrons] = useState(6);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; success: boolean } | null>(null);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const currentChallenge = ATOM_CHALLENGES[challengeIndex] ?? ATOM_CHALLENGES[0]!;

  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    nucleusGroup: THREE.Group;
    electronGroup: THREE.Group;
    ringMeshes: THREE.Mesh[];
  } | null>(null);

  const initThree = useCallback(() => {
    if (!containerRef.current) return () => {};

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f1d, 0.02);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 4, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0f1d);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const pLight1 = new THREE.PointLight(0x38bdf8, 3, 20);
    pLight1.position.set(5, 5, 5);
    scene.add(pLight1);

    const pLight2 = new THREE.PointLight(0xf43f5e, 2, 20);
    pLight2.position.set(-5, -3, -5);
    scene.add(pLight2);

    // Nucleus Group
    const nucleusGroup = new THREE.Group();
    scene.add(nucleusGroup);

    // Electron Orbit Rings Group
    const electronGroup = new THREE.Group();
    scene.add(electronGroup);

    // 3D Orbital Rings
    const ringRadii = [3.2, 5.0, 6.8];
    const ringMeshes: THREE.Mesh[] = [];

    ringRadii.forEach((r, idx) => {
      const ringGeo = new THREE.TorusGeometry(r, 0.03, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.35,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2 + (idx * Math.PI) / 6;
      ring.rotation.y = (idx * Math.PI) / 4;
      scene.add(ring);
      ringMeshes.push(ring);
    });

    threeRef.current = {
      scene,
      camera,
      renderer,
      nucleusGroup,
      electronGroup,
      ringMeshes,
    };

    // Orbit mouse interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      nucleusGroup.rotation.y += deltaX * 0.01;
      nucleusGroup.rotation.x += deltaY * 0.01;
      electronGroup.rotation.y += deltaX * 0.01;
      electronGroup.rotation.x += deltaY * 0.01;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animation Loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Slow idle rotation
      if (!isDragging) {
        nucleusGroup.rotation.y += 0.005;
        electronGroup.rotation.y += 0.02;
        electronGroup.rotation.z += 0.01;
      }

      ringMeshes.forEach((ring, idx) => {
        ring.rotation.z += 0.003 * (idx + 1);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const cleanup = initThree();
    return cleanup;
  }, [initThree]);

  // Update 3D Nucleus & Electron spheres when particle counts change
  useEffect(() => {
    if (!threeRef.current) return;
    const { nucleusGroup, electronGroup } = threeRef.current;

    // Clear old 3D particles
    while (nucleusGroup.children.length > 0) {
      nucleusGroup.remove(nucleusGroup.children[0]!);
    }
    while (electronGroup.children.length > 0) {
      electronGroup.remove(electronGroup.children[0]!);
    }

    // Spawn Protons (Red spheres) and Neutrons (Gray spheres) in nucleus
    const protonGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const protonMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0x881337,
      roughness: 0.2,
      metalness: 0.5,
    });

    const neutronGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const neutronMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.4,
      metalness: 0.3,
    });

    const totalNucleons = Math.min(protons + neutrons, 40);
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < totalNucleons; i++) {
      const isProton = i < protons;
      const mesh = new THREE.Mesh(isProton ? protonGeo : neutronGeo, isProton ? protonMat : neutronMat);

      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / totalNucleons);
      const r = 0.8 + Math.cbrt(i / totalNucleons) * 0.7;

      mesh.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
      nucleusGroup.add(mesh);
    }

    // Spawn Electrons (Glowing Cyan spheres) in orbitals
    const electronGeo = new THREE.SphereGeometry(0.2, 12, 12);
    const electronMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    const eCount = Math.min(electrons, 20);
    for (let i = 0; i < eCount; i++) {
      const eMesh = new THREE.Mesh(electronGeo, electronMat);
      const orbitRadius = i < 2 ? 3.2 : i < 10 ? 5.0 : 6.8;
      const angle = (i * 2 * Math.PI) / (i < 2 ? 2 : i < 10 ? 8 : 10);

      eMesh.position.set(
        orbitRadius * Math.cos(angle),
        (Math.sin(angle * 2) * orbitRadius) / 3,
        orbitRadius * Math.sin(angle)
      );
      electronGroup.add(eMesh);
    }
  }, [protons, neutrons, electrons]);

  // Check Solution
  const handleVerify = () => {
    const isProtonMatch = protons === currentChallenge.targetProtons;
    const isNeutronMatch = neutrons === currentChallenge.targetNeutrons;
    const isElectronMatch = electrons === currentChallenge.targetElectrons;

    if (isProtonMatch && isNeutronMatch && isElectronMatch) {
      sound.playVictory();
      setScore((s) => s + 250);
      setFeedback({
        text: `✓ STABLE ATOM ACHIEVED! ${currentChallenge.name} accurately synthesized.`,
        success: true,
      });

      setTimeout(() => {
        if (challengeIndex + 1 < ATOM_CHALLENGES.length) {
          const nextIdx = challengeIndex + 1;
          setChallengeIndex(nextIdx);
          const nextC = ATOM_CHALLENGES[nextIdx]!;
          setProtons(nextC.targetProtons - 1);
          setNeutrons(nextC.targetNeutrons - 2);
          setElectrons(nextC.targetElectrons + 1);
          setFeedback(null);
        } else {
          setFeedback({
            text: `🌟 ALL 3D ATOMIC SYNTHESIS CHALLENGES COMPLETED!`,
            success: true,
          });
        }
      }, 1600);
    } else {
      sound.playWrong();
      setFeedback({
        text: `✗ UNSTABLE ISOTOPE / ION. Check target mass & atomic configuration.`,
        success: false,
      });
    }
  };

  return (
    <div className="relative w-full h-[650px] md:h-[720px] rounded-3xl overflow-hidden border border-border/80 bg-slate-950 shadow-2xl flex flex-col justify-between">
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top HUD */}
      <div className="relative z-10 p-4 md:p-6 flex items-center justify-between pointer-events-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white hover:bg-slate-800 transition-all"
        >
          <ArrowLeft className="size-3.5" />
          <span>Exit Core</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs text-white font-mono flex items-center gap-2">
            <span className="text-slate-400">XP SCORE:</span>
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

      {/* Center Challenge Mission Card */}
      <div className="relative z-10 max-w-lg mx-auto px-4 pointer-events-none">
        <div className="p-4 md:p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700 shadow-2xl text-center space-y-2">
          <div className="flex items-center justify-between text-xs text-sky-400 font-mono">
            <span>Mission {challengeIndex + 1} of {ATOM_CHALLENGES.length}</span>
            <span className="font-bold">{currentChallenge.symbol}</span>
          </div>

          <h3 className="text-lg font-bold text-white">{currentChallenge.name}</h3>
          <p className="text-xs text-slate-300 leading-relaxed">{currentChallenge.description}</p>
          <p className="text-[11px] text-sky-300/80 italic font-mono">{currentChallenge.syllabusHint}</p>
        </div>

        {feedback && (
          <div
            className={`mt-2 py-1.5 px-4 rounded-full text-xs font-bold text-center mx-auto max-w-md animate-in fade-in ${
              feedback.success
                ? "bg-emerald-500/20 border border-emerald-400/50 text-emerald-300"
                : "bg-red-500/20 border border-red-400/50 text-red-300"
            }`}
          >
            {feedback.text}
          </div>
        )}
      </div>

      {/* Bottom Particle Controller Grid */}
      <div className="relative z-10 p-4 md:p-6 max-w-xl mx-auto w-full space-y-3 pointer-events-auto">
        <div className="grid grid-cols-3 gap-2">
          {/* Protons Control */}
          <div className="p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-rose-500/40 text-center space-y-2">
            <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
              Protons (p⁺): {protons}
            </span>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => {
                  setProtons((p) => Math.max(1, p - 1));
                  sound.playFlip();
                }}
                className="size-7 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700 flex items-center justify-center"
              >
                <Minus className="size-3" />
              </button>
              <button
                onClick={() => {
                  setProtons((p) => Math.min(30, p + 1));
                  sound.playFlip();
                }}
                className="size-7 rounded-lg bg-rose-600 text-white font-bold hover:bg-rose-500 flex items-center justify-center"
              >
                <Plus className="size-3" />
              </button>
            </div>
          </div>

          {/* Neutrons Control */}
          <div className="p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-600 text-center space-y-2">
            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
              Neutrons (n⁰): {neutrons}
            </span>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => {
                  setNeutrons((n) => Math.max(0, n - 1));
                  sound.playFlip();
                }}
                className="size-7 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700 flex items-center justify-center"
              >
                <Minus className="size-3" />
              </button>
              <button
                onClick={() => {
                  setNeutrons((n) => Math.min(40, n + 1));
                  sound.playFlip();
                }}
                className="size-7 rounded-lg bg-slate-600 text-white font-bold hover:bg-slate-500 flex items-center justify-center"
              >
                <Plus className="size-3" />
              </button>
            </div>
          </div>

          {/* Electrons Control */}
          <div className="p-3 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-sky-500/40 text-center space-y-2">
            <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
              Electrons (e⁻): {electrons}
            </span>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => {
                  setElectrons((e) => Math.max(0, e - 1));
                  sound.playFlip();
                }}
                className="size-7 rounded-lg bg-slate-800 text-white font-bold hover:bg-slate-700 flex items-center justify-center"
              >
                <Minus className="size-3" />
              </button>
              <button
                onClick={() => {
                  setElectrons((e) => Math.min(30, e + 1));
                  sound.playFlip();
                }}
                className="size-7 rounded-lg bg-sky-500 text-white font-bold hover:bg-sky-400 flex items-center justify-center"
              >
                <Plus className="size-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Verify & Synthesize Button */}
        <button
          onClick={handleVerify}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <Check className="size-4" />
          <span>Synthesize & Test Stability</span>
        </button>
      </div>
    </div>
  );
}
