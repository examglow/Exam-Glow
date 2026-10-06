import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ArrowLeft, Volume2, VolumeX, Sparkles, Trophy, Dna, CheckCircle2, Crosshair, Search } from "lucide-react";
import { sound } from "../sound-fx";

interface CellularOdyssey3DProps {
  onBack: () => void;
  onFinish: (xp: number, score: number) => void;
}

interface CellMission {
  id: string;
  targetOrganelle: string;
  prompt: string;
  functionDesc: string;
  examinerTip: string;
}

const CELL_MISSIONS: CellMission[] = [
  {
    id: "m-1",
    targetOrganelle: "mitochondria",
    prompt: "Identify the organelle responsible for AEROBIC RESPIRATION and ATP synthesis.",
    functionDesc: "Folded inner cristae provide large surface area for electron transport chain.",
    examinerTip: "Cambridge examiners require mentioning 'aerobic respiration' and 'ATP release'.",
  },
  {
    id: "m-2",
    targetOrganelle: "ribosome",
    prompt: "Locate the non-membrane bound complex that synthesizes PROTEINS from mRNA.",
    functionDesc: "Translates genetic codons into linear polypeptide chains.",
    examinerTip: "Found free in cytoplasm or attached to Rough Endoplasmic Reticulum (RER).",
  },
  {
    id: "m-3",
    targetOrganelle: "chloroplast",
    prompt: "Find the photosynthetic organelle containing CHLOROPHYLL and thylakoid stacks.",
    functionDesc: "Absorbs light energy to convert CO₂ and H₂O into glucose and oxygen.",
    examinerTip: "Only found in photosynthetic plant cells and green algae.",
  },
  {
    id: "m-4",
    targetOrganelle: "nucleus",
    prompt: "Target the control center storing CHROMATIN (DNA) and directing transcription.",
    functionDesc: "Double-membrane nuclear envelope with pores for mRNA export.",
    examinerTip: "Contains the nucleolus which manufactures ribosomal subunits.",
  },
];

export function CellularOdyssey3D({ onBack, onFinish }: CellularOdyssey3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [missionIndex, setMissionIndex] = useState(0);
  const [selectedOrganelle, setSelectedOrganelle] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ text: string; success: boolean } | null>(null);
  const [isMuted, setIsMuted] = useState(sound.isMuted);

  const currentMission = CELL_MISSIONS[missionIndex] ?? CELL_MISSIONS[0]!;

  const threeRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    cellGroup: THREE.Group;
    organelles: Map<string, THREE.Object3D>;
  } | null>(null);

  const initThree = useCallback(() => {
    if (!containerRef.current) return () => {};

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.02);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 4, 14);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x030712);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x38bdf8, 3, 25);
    pointLight.position.set(4, 6, 6);
    scene.add(pointLight);

    const cellGroup = new THREE.Group();
    scene.add(cellGroup);

    const organelles = new Map<string, THREE.Object3D>();

    // 1. Outer Translucent Cell Membrane (Lipid Bilayer)
    const membraneGeo = new THREE.SphereGeometry(6, 32, 32);
    const membraneMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.15,
      roughness: 0.1,
      transmission: 0.6,
      thickness: 1.2,
      wireframe: false,
    });
    const membrane = new THREE.Mesh(membraneGeo, membraneMat);
    cellGroup.add(membrane);

    // 2. Nucleus (Large Central Sphere)
    const nucleusGeo = new THREE.SphereGeometry(2.0, 24, 24);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      emissive: 0x312e81,
      roughness: 0.3,
    });
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    nucleus.position.set(0, 0, 0);
    nucleus.name = "nucleus";
    cellGroup.add(nucleus);
    organelles.set("nucleus", nucleus);

    // 3. Mitochondria (Oval Sausage with internal glow)
    const mitoGeo = new THREE.CapsuleGeometry(0.7, 1.8, 8, 16);
    mitoGeo.rotateZ(Math.PI / 3);
    const mitoMat = new THREE.MeshStandardMaterial({
      color: 0xf43f5e,
      emissive: 0x881337,
      roughness: 0.2,
    });
    const mito = new THREE.Mesh(mitoGeo, mitoMat);
    mito.position.set(3.2, 1.5, 1.2);
    mito.name = "mitochondria";
    cellGroup.add(mito);
    organelles.set("mitochondria", mito);

    // 4. Chloroplast (Green Disc Capsule)
    const chlorGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.6, 16);
    chlorGeo.rotateX(Math.PI / 4);
    const chlorMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x064e3b,
      roughness: 0.3,
    });
    const chlor = new THREE.Mesh(chlorGeo, chlorMat);
    chlor.position.set(-3.2, -1.2, 1.5);
    chlor.name = "chloroplast";
    cellGroup.add(chlor);
    organelles.set("chloroplast", chlor);

    // 5. Ribosomes (Clusters of tiny dense spheres)
    const riboGroup = new THREE.Group();
    const riboGeo = new THREE.SphereGeometry(0.18, 8, 8);
    const riboMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });

    for (let i = 0; i < 16; i++) {
      const ribo = new THREE.Mesh(riboGeo, riboMat);
      ribo.position.set(
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 1.8,
        (Math.random() - 0.5) * 1.8
      );
      riboGroup.add(ribo);
    }
    riboGroup.position.set(1.5, -2.8, -1.0);
    riboGroup.name = "ribosome";
    cellGroup.add(riboGroup);
    organelles.set("ribosome", riboGroup);

    // 6. Cytoplasm Cytoskeleton Particles
    const cytoGeo = new THREE.BufferGeometry();
    const cytoPos = new Float32Array(150 * 3);
    for (let i = 0; i < 150 * 3; i += 3) {
      cytoPos[i] = (Math.random() - 0.5) * 8;
      cytoPos[i + 1] = (Math.random() - 0.5) * 8;
      cytoPos[i + 2] = (Math.random() - 0.5) * 8;
    }
    cytoGeo.setAttribute("position", new THREE.BufferAttribute(cytoPos, 3));
    const cytoMat = new THREE.PointsMaterial({ size: 0.15, color: 0x38bdf8, transparent: true, opacity: 0.5 });
    const cytoParticles = new THREE.Points(cytoGeo, cytoMat);
    cellGroup.add(cytoParticles);

    threeRef.current = {
      scene,
      camera,
      renderer,
      cellGroup,
      organelles,
    };

    // Orbit Drag Controls
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;

      cellGroup.rotation.y += dx * 0.008;
      cellGroup.rotation.x += dy * 0.008;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isDragging) {
        cellGroup.rotation.y += 0.003;
      }

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

  // Handle probe targeting an organelle
  const handleTargetOrganelle = (organelleKey: string) => {
    setSelectedOrganelle(organelleKey);
    sound.playFlip();

    const isMatch = organelleKey === currentMission.targetOrganelle;
    if (isMatch) {
      sound.playVictory();
      setScore((s) => s + 250);
      setFeedback({
        text: `✓ ULTRASTRUCTURE CONFIRMED! ${currentMission.targetOrganelle.toUpperCase()} accurately targeted.`,
        success: true,
      });

      setTimeout(() => {
        if (missionIndex + 1 < CELL_MISSIONS.length) {
          setMissionIndex((m) => m + 1);
          setSelectedOrganelle(null);
          setFeedback(null);
        } else {
          setFeedback({
            text: "🌟 ALL CELLULAR MISSIONS MASTERED!",
            success: true,
          });
        }
      }, 1800);
    } else {
      sound.playWrong();
      setFeedback({
        text: `✗ INCORRECT ORGANELLE. Examine the 3D ultrastructure and function description.`,
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
          <span>Exit Explorer</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs text-white font-mono flex items-center gap-2">
            <span className="text-slate-400">SCORE:</span>
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

      {/* Center Mission Card */}
      <div className="relative z-10 max-w-xl mx-auto px-4 pointer-events-none">
        <div className="p-4 md:p-5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 shadow-2xl text-center space-y-2">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
            <span>Mission {missionIndex + 1} of {CELL_MISSIONS.length}</span>
            <span>Eukaryotic Cell Ultrastructure</span>
          </div>

          <p className="text-sm md:text-base font-semibold text-white">{currentMission.prompt}</p>
          <p className="text-xs text-slate-300">{currentMission.functionDesc}</p>
          <p className="text-[11px] text-emerald-300/80 italic font-mono">{currentMission.examinerTip}</p>
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

      {/* Bottom Organelle Probe Raycast Targeting Grid */}
      <div className="relative z-10 p-4 md:p-6 max-w-xl mx-auto w-full space-y-2 pointer-events-auto">
        <div className="text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
            Select 3D Target Organelle:
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {[
            { id: "mitochondria", label: "Mitochondria", color: "border-rose-500/40 text-rose-300" },
            { id: "chloroplast", label: "Chloroplast", color: "border-emerald-500/40 text-emerald-300" },
            { id: "nucleus", label: "Nucleus", color: "border-indigo-500/40 text-indigo-300" },
            { id: "ribosome", label: "Ribosomes", color: "border-amber-500/40 text-amber-300" },
          ].map((org) => (
            <button
              key={org.id}
              onClick={() => handleTargetOrganelle(org.id)}
              className={`p-3 rounded-2xl font-mono text-xs font-bold transition-all border flex flex-col items-center gap-1.5 ${
                selectedOrganelle === org.id
                  ? "bg-emerald-500 text-white border-emerald-400 scale-105 shadow-lg shadow-emerald-500/30"
                  : `bg-slate-900/80 backdrop-blur-md ${org.color} hover:bg-slate-800`
              }`}
            >
              <Crosshair className="size-4" />
              <span>{org.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
