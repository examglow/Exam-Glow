import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Atom,
  CircleCheck,
  CircleX,
  Dna,
  Gamepad2,
  GraduationCap,
  Heart,
  Play,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { DashboardLayout, PageHeading } from "@/components/dashboard-page";

export const Route = createFileRoute("/arcade")({
  head: () => ({
    meta: [
      { title: "Study Games | ExamGlow" },
      { name: "description", content: "Play three immersive 3D educational games." },
    ],
  }),
  component: ArcadePage,
});

type GameId = "cat-run" | "atom-lab" | "force-range";
type Mission = {
  id: GameId;
  title: string;
  subject: string;
  tagline: string;
  description: string;
  tint: string;
  icon: typeof Dna;
  badge: string;
};
const MISSIONS: Mission[] = [
  {
    id: "cat-run",
    title: "Whisker Express",
    subject: "Biology + Maths",
    tagline: "Race the park. Learn on the run.",
    description:
      "Run a sunny park road as a four-legged cat. Read each question and pick the correct answer gate.",
    tint: "#ffb45f",
    icon: Dna,
    badge: "ENDLESS RUNNER",
  },
  {
    id: "atom-lab",
    title: "Atom Lab: Rescue",
    subject: "Chemistry",
    tagline: "Build it. Balance it. Save the lab.",
    description:
      "Explore a first-person 3D lab, collect the right particles, and assemble atoms and ions from their subatomic parts.",
    tint: "#a78bfa",
    icon: Atom,
    badge: "3D EXPLORATION",
  },
  {
    id: "force-range",
    title: "Force Range",
    subject: "Physics",
    tagline: "Predict the path. Make the shot.",
    description:
      "Set the launch angle, reason about forces and motion, then fire a 3D projectile at moving targets.",
    tint: "#51d5f1",
    icon: Target,
    badge: "PHYSICS CHALLENGE",
  },
];

function ArcadePage() {
  const [active, setActive] = useState<GameId | null>(null);
  const [xp, setXp] = useState(0);
  useEffect(() => {
    const saved = localStorage.getItem("arcade_total_xp");
    if (saved) setXp(Number(saved));
  }, []);
  const addXp = useCallback(
    (points: number) =>
      setXp((value) => {
        const next = value + points;
        localStorage.setItem("arcade_total_xp", String(next));
        return next;
      }),
    [],
  );
  const selected = MISSIONS.find((game) => game.id === active);
  return (
    <DashboardLayout crumbs={[{ label: "Practice & Activities" }, { label: "Study Games" }]}>
      <PageHeading icon={<Gamepad2 className="size-5" aria-hidden />} title="Study Games" />
      <div className="mt-6">
        {selected ? (
          <FullScreenGame
            key={selected.id}
            mission={selected}
            onClose={() => setActive(null)}
            onScore={addXp}
          />
        ) : (
          <Lobby xp={xp} onStart={setActive} />
        )}
      </div>
    </DashboardLayout>
  );
}

function Lobby({ xp, onStart }: { xp: number; onStart: (id: GameId) => void }) {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[#07121e] p-7 text-white md:p-10">
        <div className="pointer-events-none absolute -right-20 -top-44 size-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Pick a world.
              <br />
              <span className="text-cyan-200">Jump right in.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
              Choose a world and jump into a hands-on challenge. Learn by moving, building, and
              experimenting.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Your XP
              </div>
              <div className="mt-1 flex items-center gap-2 text-2xl font-black text-cyan-100">
                <Trophy className="size-5" />
                {xp}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-xs font-bold uppercase tracking-[.2em] text-muted-foreground">
            The game room
          </div>
          <h3 className="mt-1 text-2xl font-black tracking-tight">Choose your game</h3>
        </div>
        <span className="hidden text-xs text-muted-foreground sm:block">
          Click a card to launch full screen
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {MISSIONS.map((game, i) => {
          const Icon = game.icon;
          return (
            <button
              type="button"
              key={game.id}
              onClick={() => onStart(game.id)}
              className="group relative isolate flex min-h-[370px] w-full flex-col overflow-hidden rounded-[1.8rem] border bg-[#091522] p-6 text-left text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:p-7"
              style={{ borderColor: `${game.tint}55` }}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full opacity-[.12] blur-3xl transition-opacity group-hover:opacity-25"
                style={{ background: game.tint }}
              />
              <div className="relative flex items-center justify-between">
                <span
                  className="rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[.16em]"
                  style={{
                    borderColor: `${game.tint}66`,
                    color: game.tint,
                    background: `${game.tint}12`,
                  }}
                >
                  {game.badge}
                </span>
                <span className="font-mono text-xs font-bold tracking-[.18em] text-white/40">
                  0{i + 1} / 03
                </span>
              </div>
              <div
                className="relative mt-8 grid size-[4.5rem] place-items-center rounded-2xl border shadow-lg transition-transform duration-300 group-hover:scale-105"
                style={{
                  color: game.tint,
                  borderColor: `${game.tint}55`,
                  background: `${game.tint}18`,
                  boxShadow: `0 12px 36px ${game.tint}18`,
                }}
              >
                <Icon className="size-9" strokeWidth={1.8} />
              </div>
              <div className="relative mt-6 flex-1">
                <div className="mb-2 text-[10px] font-extrabold uppercase tracking-[.2em] text-slate-400">
                  {game.subject}
                </div>
                <h4 className="text-2xl font-black tracking-tight sm:text-3xl">{game.title}</h4>
                <p className="mt-2 text-sm font-bold" style={{ color: game.tint }}>
                  {game.tagline}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{game.description}</p>
              </div>
              <div className="relative mt-7 flex w-full items-center justify-between gap-3 border-t border-white/10 pt-5">
                <span className="text-[11px] font-semibold leading-5 text-slate-400">
                  {game.id === "cat-run"
                    ? "← → lanes · Space jump · ↓ slide"
                    : game.id === "atom-lab"
                      ? "Explore · collect · build"
                      : "Set angle · fire · learn"}
                </span>
                <span
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-black text-slate-950 shadow-lg transition-all group-hover:translate-x-0.5"
                  style={{ background: game.tint }}
                >
                  <Play className="size-3.5 fill-current" /> Play
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FullScreenGame({
  mission,
  onClose,
  onScore,
}: {
  mission: Mission;
  onClose: () => void;
  onScore: (n: number) => void;
}) {
  const [tutorial, setTutorial] = useState(true);
  const [gameKey, setGameKey] = useState(0);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);
  const restart = () => setGameKey((v) => v + 1);
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      document.exitPointerLock?.();
    };
  }, []);
  return (
    <div className="fixed inset-0 z-[100] h-[100dvh] w-screen overflow-hidden bg-[#050912] text-white">
      <div className="absolute inset-0">
        {mission.id === "cat-run" ? (
          <CatRunner key={gameKey} onScore={onScore} running={!tutorial} />
        ) : mission.id === "atom-lab" ? (
          <AtomLab key={gameKey} onScore={onScore} />
        ) : (
          <ForceRange key={gameKey} onScore={onScore} />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(2,6,14,.35)_100%)]" />
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-3 md:p-5">
        <button
          onClick={onClose}
          className="pointer-events-auto inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/70 px-3 py-2 text-xs font-bold backdrop-blur"
        >
          <X className="size-4" />
          Exit
        </button>
        <div className="rounded-xl border border-white/10 bg-slate-950/65 px-4 py-2 text-center backdrop-blur">
          <div className="text-[9px] font-bold uppercase tracking-[.2em] text-slate-400">
            {mission.subject}
          </div>
          <div className="text-sm font-black">{mission.title}</div>
        </div>
        <button
          onClick={restart}
          aria-label="Restart game"
          className="pointer-events-auto rounded-xl border border-white/15 bg-slate-950/70 p-2.5 backdrop-blur"
        >
          <RotateCcw className="size-4" />
        </button>
      </header>
      {tutorial && (
        <div className="absolute inset-0 z-30 grid place-items-center bg-black/55 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-[#0a1423]/95 p-6 text-center shadow-2xl md:p-8">
            <div className="mx-auto mb-4 grid size-14 place-items-center rounded-2xl bg-white/10">
              <GraduationCap className="size-7" style={{ color: mission.tint }} />
            </div>
            <div
              className="text-[10px] font-black uppercase tracking-[.22em]"
              style={{ color: mission.tint }}
            >
              Quick tutorial
            </div>
            <h2 className="mt-2 text-2xl font-black">{mission.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{mission.description}</p>
            <TutorialControls game={mission.id} />
            <button
              onClick={() => setTutorial(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-black text-slate-950"
              style={{ background: mission.tint }}
            >
              <Play className="size-4" />
              Start playing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function TutorialControls({ game }: { game: GameId }) {
  return game === "cat-run" ? (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
        Keyboard · or swipe on mobile
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
        <span className="flex items-center gap-2">
          <ArrowLeft className="size-4 text-amber-300" />
          Left arrow / swipe left
        </span>
        <span className="flex items-center gap-2">
          <ArrowRight className="size-4 text-amber-300" />
          Right arrow / swipe right
        </span>
        <span className="flex items-center gap-2">
          <ArrowUp className="size-4 text-amber-300" />
          Space / swipe up to jump
        </span>
        <span className="flex items-center gap-2">
          <ArrowDown className="size-4 text-amber-300" />
          Down / swipe down to slide
        </span>
      </div>
    </div>
  ) : game === "atom-lab" ? (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-xs leading-6 text-slate-300">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
        Controls
      </div>
      <p>
        <b className="text-white">WASD / arrows</b> move · <b className="text-white">Mouse</b> look
        · <b className="text-white">Click a particle</b> collect it · touch buttons appear on mobile
      </p>
      <p className="mt-2">
        Read the atom mission, then collect the required protons, neutrons or electrons.
      </p>
    </div>
  ) : (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-xs leading-6 text-slate-300">
      <div className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
        Controls
      </div>
      <p>
        Set the <b className="text-white">angle slider</b> to predict projectile motion, then press{" "}
        <b className="text-white">FIRE</b>. Aim for the moving target and use the formula feedback
        to improve.
      </p>
    </div>
  );
}
type RunProps = { onScore: (n: number) => void };
type RunnerQuestion = {
  prompt: string;
  answers: [string, string, string];
  correct: string;
  explain: string;
};
const RUN_QUESTIONS: RunnerQuestion[] = [
  {
    prompt: "Which organelle releases energy in aerobic respiration?",
    answers: ["Ribosome", "Mitochondria", "Vacuole"],
    correct: "Mitochondria",
    explain: "Mitochondria are where aerobic respiration releases energy.",
  },
  {
    prompt: "What is 7 × 8?",
    answers: ["54", "56", "48"],
    correct: "56",
    explain: "7 × 8 = 56.",
  },
  {
    prompt: "Which structure controls what enters and leaves a cell?",
    answers: ["Cell membrane", "Nucleus", "Cytoplasm"],
    correct: "Cell membrane",
    explain: "The cell membrane controls movement into and out of the cell.",
  },
  {
    prompt: "What is the unit of force?",
    answers: ["Joule", "Newton", "Watt"],
    correct: "Newton",
    explain: "Force is measured in newtons (N).",
  },
  {
    prompt: "What do plants absorb for photosynthesis?",
    answers: ["Oxygen", "Carbon dioxide", "Nitrogen"],
    correct: "Carbon dioxide",
    explain: "Plants take in carbon dioxide and water to make glucose using light.",
  },
];

function CatRunner({ onScore, running }: RunProps & { running: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  const world = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    cat: THREE.Group;
    lanes: THREE.Group[];
    raf: number;
    runnerZ: number;
    lane: number;
    vy: number;
    physicsAccumulator: number;
    gaitPhase: number;
    jumping: boolean;
    sliding: number;
    speed: number;
    distance: number;
    objects: Array<{
      mesh: THREE.Group;
      lane: number;
      z: number;
      type: "answer";
      label?: string;
      questionIndex?: number;
      correct?: boolean;
      hit: boolean;
    }>;
    spawn: number;
    running: boolean;
    waveIndex: number;
    waveSpawned: boolean;
    waveAnswered: boolean;
  } | null>(null);
  const [lane, setLane] = useState(1);
  const [distance, setDistance] = useState(0);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [message, setMessage] = useState(
    "Read the question, then pass through the right answer gate.",
  );
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [feedbackAnswer, setFeedbackAnswer] = useState("");
  const [ended, setEnded] = useState(false);
  const [won, setWon] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const laneRef = useRef(1);
  const scoreRef = useRef(0);
  const heartsRef = useRef(3);
  const questionRef = useRef(0);
  const displayedDistanceRef = useRef(0);
  const endedRef = useRef(false);
  const runningRef = useRef(running);
  useEffect(() => {
    runningRef.current = running;
    if (world.current) world.current.running = running;
  }, [running]);
  const act = useCallback((move: "left" | "right" | "jump" | "slide") => {
    const w = world.current;
    if (!w || endedRef.current) return;
    if (move === "left") w.lane = Math.max(0, w.lane - 1);
    if (move === "right") w.lane = Math.min(2, w.lane + 1);
    if (move === "jump" && !w.jumping) {
      w.jumping = true;
      w.cat.position.y = 0;
      w.vy = 8.1;
    }
    if (move === "slide") w.sliding = 0.8;
    laneRef.current = w.lane;
    setLane(w.lane);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp", " "].includes(e.key))
        e.preventDefault();
      if (e.key === "ArrowLeft") act("left");
      if (e.key === "ArrowRight") act("right");
      if (e.key === "ArrowDown") act("slide");
      if (e.key === "ArrowUp" || e.key === " ") act("jump");
    };
    window.addEventListener("keydown", onKey, { passive: false });
    return () => window.removeEventListener("keydown", onKey);
  }, [act]);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.shadowMap.enabled = false;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x91d8ff);
    scene.fog = new THREE.Fog(0xb5e2c4, 58, 155);
    const camera = new THREE.PerspectiveCamera(65, el.clientWidth / el.clientHeight, 0.1, 160);
    camera.position.set(0, 4.5, 10);
    camera.lookAt(0, 1.1, -6);
    scene.add(new THREE.HemisphereLight(0xe5f8ff, 0x527044, 2.25));
    const sun = new THREE.DirectionalLight(0xfff1cf, 3.2);
    sun.position.set(-12, 18, 9);
    sun.castShadow = false;
    scene.add(sun);
    const mat = (c: number, e = 0) =>
      new THREE.MeshStandardMaterial({
        color: c,
        roughness: 0.88,
        metalness: 0,
        emissive: e,
        emissiveIntensity: e ? 0.32 : 0,
      });
    // A sunny park setting: broad grassy verges, rolling hills, soft clouds, and
    // a textured three-lane road. The answer gates remain the gameplay focus.
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(120, 190), mat(0x70b85d));
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, -0.2, -62);
    floor.receiveShadow = true;
    scene.add(floor);
    const shoulder = new THREE.Mesh(new THREE.PlaneGeometry(8.8, 170), mat(0xc8ad76));
    shoulder.rotation.x = -Math.PI / 2;
    shoulder.position.set(0, -0.115, -62);
    shoulder.receiveShadow = true;
    scene.add(shoulder);
    const road = new THREE.Mesh(new THREE.PlaneGeometry(7.4, 170), mat(0x555b5d));
    road.rotation.x = -Math.PI / 2;
    road.position.set(0, -0.06, -62);
    road.receiveShadow = true;
    scene.add(road);
    // Subtle road grain and fine aggregate catch the sunlight without becoming noisy.
    const gritMat = mat(0x747778);
    const grit = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 5), gritMat, 220);
    const gritTransform = new THREE.Object3D();
    for (let i = 0; i < 220; i++) {
      const x = (Math.random() - 0.5) * 7.1;
      const z = 15 - Math.random() * 160;
      gritTransform.position.set(x, -0.045, z);
      gritTransform.rotation.x = -Math.PI / 2;
      gritTransform.scale.setScalar(0.012 + Math.random() * 0.018);
      gritTransform.updateMatrix();
      grit.setMatrixAt(i, gritTransform.matrix);
    }
    scene.add(grit);
    const edgePaint = mat(0xfff0c8);
    for (const x of [-3.35, 3.35]) {
      const line = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.012, 170), edgePaint);
      line.position.set(x, -0.045, -62);
      scene.add(line);
    }
    const roadDashes: THREE.Mesh[] = [];
    for (const x of [-1.12, 1.12]) {
      for (let z = 13; z > -150; z -= 7.2) {
        const dash = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.014, 3.2), edgePaint);
        dash.position.set(x, -0.04, z);
        scene.add(dash);
        roadDashes.push(dash);
      }
    }
    // Distant rounded hills anchor the park horizon.
    const hillColors = [0x75b86c, 0x88c675, 0x9ad081];
    for (let i = 0; i < 9; i++) {
      const hill = new THREE.Mesh(
        new THREE.SphereGeometry(1, 18, 12),
        mat(hillColors[i % hillColors.length]!),
      );
      hill.scale.set(12 + (i % 3) * 3, 5 + (i % 2) * 2, 3.5);
      hill.position.set(-42 + i * 10.5, 1.2, -112 - (i % 3) * 4);
      scene.add(hill);
    }
    // Stylized, fully colored trees with layered crowns make the environment read as a place.
    const treeCount = 58;
    const trunkColors = [0x805235, 0x96613c, 0x70472f];
    const crownColors = [0x288a55, 0x369a5c, 0x57ae63, 0x78bd67];
    const canopyShapes = [
      [0, 2.8, 0, 1.05],
      [-0.6, 2.45, 0.1, 0.78],
      [0.55, 2.5, -0.12, 0.82],
      [0.05, 3.55, 0.02, 0.75],
    ] as const;
    const trunks = new THREE.InstancedMesh(
      new THREE.CylinderGeometry(0.16, 0.28, 2.7, 8),
      mat(0xffffff),
      treeCount,
    );
    const crowns = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 12, 10),
      mat(0xffffff),
      treeCount * canopyShapes.length,
    );
    trunks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    crowns.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    trunks.castShadow = true;
    crowns.castShadow = true;
    const treeTransform = new THREE.Object3D();
    const roadsideTrees: { x: number; z: number; scale: number }[] = [];
    for (let i = 0; i < treeCount; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const z = 13 - Math.floor(i / 2) * 5.3 - Math.random() * 3;
      const x = side * (6.3 + Math.random() * 8.5);
      const scale = 0.78 + Math.random() * 0.65;
      roadsideTrees.push({ x, z, scale });
      treeTransform.position.set(x, 1.35 * scale, z);
      treeTransform.scale.setScalar(scale);
      treeTransform.updateMatrix();
      trunks.setMatrixAt(i, treeTransform.matrix);
      trunks.setColorAt(i, new THREE.Color(trunkColors[i % trunkColors.length]!));
      canopyShapes.forEach(([cx, cy, cz, radius], shapeIndex) => {
        const instance = i * canopyShapes.length + shapeIndex;
        treeTransform.position.set(x + cx * scale, cy * scale, z + cz * scale);
        treeTransform.scale.setScalar(radius * scale);
        treeTransform.updateMatrix();
        crowns.setMatrixAt(instance, treeTransform.matrix);
        crowns.setColorAt(instance, new THREE.Color(crownColors[i % crownColors.length]!));
      });
    }
    scene.add(trunks, crowns);
    // Puffy clouds stay above the tree line and are visible through the blue sky.
    const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1 });
    for (let i = 0; i < 8; i++) {
      const cloud = new THREE.Group();
      for (let j = 0; j < 4; j++) {
        const puff = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 10), cloudMat);
        puff.scale.set(1.6, 0.65 + (j % 2) * 0.18, 0.75);
        puff.position.set(j * 1.15 - 1.7, j % 2 ? 0.25 : 0, 0);
        cloud.add(puff);
      }
      cloud.position.set(-28 + i * 8, 16 + (i % 3) * 2, -48 - (i % 4) * 13);
      scene.add(cloud);
    }
    const lanes: THREE.Group[] = [];
    for (let i = 0; i < 3; i++) {
      const g = new THREE.Group();
      g.position.x = (i - 1) * 2.15;
      scene.add(g);
      lanes.push(g);
    }
    const cat = new THREE.Group();
    const fur = mat(0xf6f5f1);
    const lightFur = mat(0xe6e6eb);
    const cream = mat(0xfffdf8);
    const earPink = mat(0xe996a5);
    const dark = mat(0x252332);
    const collarBlue = mat(0x268bf2, 0x073a8b);
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.56, 28, 22), fur);
    body.scale.set(0.8, 1.05, 1.22);
    body.position.y = 1.02;
    body.castShadow = true;
    cat.add(body);
    const chest = new THREE.Mesh(new THREE.SphereGeometry(0.4, 20, 16), cream);
    chest.scale.set(0.82, 1, 0.72);
    chest.position.set(0, 0.99, -0.33);
    cat.add(chest);
    for (const x of [-0.34, 0.34]) {
      const haunch = new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 14), fur);
      haunch.scale.set(0.78, 1.02, 1.04);
      haunch.position.set(x, 0.91, 0.3);
      cat.add(haunch);
    }
    const bib = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 16), cream);
    bib.scale.set(0.8, 1.05, 0.3);
    bib.position.set(0, 1.02, -0.57);
    cat.add(bib);
    const head = new THREE.Group();
    const headBall = new THREE.Mesh(new THREE.SphereGeometry(0.47, 24, 20), lightFur);
    headBall.scale.set(1.05, 0.92, 0.94);
    head.add(headBall);
    const faceMask = new THREE.Mesh(new THREE.SphereGeometry(0.36, 20, 14), dark);
    faceMask.scale.set(1.08, 0.67, 0.27);
    faceMask.position.set(0, 0, -0.35);
    head.add(faceMask);
    for (const x of [-0.29, 0.29]) {
      const ear = new THREE.Mesh(new THREE.ConeGeometry(0.19, 0.48, 7), dark);
      ear.position.set(x, 0.38, 0);
      ear.rotation.z = x < 0 ? 0.16 : -0.16;
      head.add(ear);
      const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.105, 0.27, 7), earPink);
      innerEar.position.set(x, 0.39, -0.095);
      head.add(innerEar);
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.078, 14, 10), mat(0xa1da72));
      eye.position.set(x * 0.62, 0.01, -0.445);
      head.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.031, 10, 8), dark);
      pupil.position.set(x * 0.62, 0.01, -0.5);
      head.add(pupil);
      const glint = new THREE.Mesh(new THREE.SphereGeometry(0.023, 8, 6), cream);
      glint.position.set(x * 0.62 - 0.015, 0.035, -0.535);
      head.add(glint);
    }
    const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), cream);
    muzzle.scale.set(1.3, 0.65, 0.8);
    muzzle.position.set(0, -0.12, -0.43);
    head.add(muzzle);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(0.055, 10, 8), earPink);
    nose.position.set(0, -0.08, -0.57);
    head.add(nose);
    for (const side of [-1, 1]) {
      const whiskers = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const whisker = new THREE.Mesh(
          new THREE.CylinderGeometry(0.008, 0.008, 0.4, 6),
          mat(0xd6d8df),
        );
        whisker.position.set(side * (0.31 + i * 0.015), -0.14 - i * 0.035, -0.44);
        whisker.rotation.z = side * -0.2;
        whiskers.add(whisker);
      }
      head.add(whiskers);
    }
    head.position.set(0, 1.75, -0.37);
    cat.add(head);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.075, 10, 32), collarBlue);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(0, 1.4, -0.16);
    cat.add(collar);
    const collarTag = new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), collarBlue);
    collarTag.position.set(0, 1.31, -0.51);
    cat.add(collarTag);
    const legs: THREE.Group[] = [];
    for (const x of [-0.31, 0.31]) {
      for (const z of [-0.36, 0.4]) {
        const leg = new THREE.Group();
        leg.position.set(x < 0 ? (z < 0 ? -0.34 : -0.39) : z < 0 ? 0.34 : 0.39, 0.83, z);
        const shoulder = new THREE.Mesh(new THREE.SphereGeometry(z < 0 ? 0.13 : 0.15, 16, 12), fur);
        shoulder.scale.set(0.92, 1.05, 0.9);
        leg.add(shoulder);
        const upper = new THREE.Mesh(
          new THREE.CapsuleGeometry(z < 0 ? 0.115 : 0.14, 0.32, 6, 12),
          fur,
        );
        upper.position.y = -0.2;
        leg.add(upper);
        if (z > 0) {
          const thigh = new THREE.Mesh(new THREE.SphereGeometry(0.155, 16, 12), fur);
          thigh.scale.set(1.05, 1.22, 0.98);
          thigh.position.set(0, -0.12, 0.015);
          leg.add(thigh);
        }
        const knee = new THREE.Group();
        knee.position.set(z < 0 ? (x < 0 ? -0.14 : 0.14) : x < 0 ? -0.035 : 0.035, -0.38, 0);
        const kneeJoint = new THREE.Mesh(new THREE.SphereGeometry(0.078, 14, 10), fur);
        knee.add(kneeJoint);
        const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.078, 0.26, 6, 10), fur);
        shin.position.y = -0.13;
        knee.add(shin);
        const paw = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 12), cream);
        paw.scale.set(1.08, 0.6, 1.4);
        paw.position.set(0, -0.4, -0.06);
        knee.add(paw);
        leg.add(knee);
        leg.userData["knee"] = knee;
        leg.userData["phase"] = (z < 0 ? 0 : Math.PI) + (x < 0 ? 0 : Math.PI / 2);
        legs.push(leg);
        cat.add(leg);
      }
    }
    const tail = new THREE.Group();
    tail.position.set(0.18, 0.92, 0.43);
    const tailCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0.12, -0.06, 0.08),
      new THREE.Vector3(0.24, -0.02, 0.18),
      new THREE.Vector3(0.28, 0.16, 0.3),
      new THREE.Vector3(0.16, 0.3, 0.32),
    ]);
    tail.add(new THREE.Mesh(new THREE.TubeGeometry(tailCurve, 24, 0.065, 10, false), fur));
    cat.add(tail);
    cat.userData["head"] = head;
    cat.userData["legs"] = legs;
    cat.userData["tail"] = tail;
    cat.position.set(0, 0, 2);
    cat.scale.setScalar(1.18);
    // The imported cat faces down local +X; this quarter turn aligns it exactly
    // with the road's -Z direction. Keep the runner root unbanked for straight travel.
    cat.rotation.y = 0;
    scene.add(cat);
    const objects: NonNullable<typeof world.current>["objects"] = [];
    let spawn = 0;
    let t0 = performance.now();
    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);
    const w = {
      scene,
      camera,
      renderer,
      cat,
      lanes,
      raf: 0,
      runnerZ: 2,
      lane: laneRef.current,
      vy: 0,
      physicsAccumulator: 0,
      gaitPhase: 0,
      jumping: false,
      sliding: 0,
      speed: 12,
      distance: 0,
      objects,
      spawn: 0,
      running: runningRef.current,
      waveIndex: 0,
      waveSpawned: false,
      waveAnswered: false,
    };
    world.current = w;
    const addAnswerWave = (z: number) => {
      const question = RUN_QUESTIONS[w.waveIndex];
      if (!question) return;
      question.answers.forEach((answer, laneIndex) => {
        const group = new THREE.Group();
        const color = [0xffbd59, 0x56e0d0, 0xb294ff][laneIndex]!;
        const frameMaterial = new THREE.MeshStandardMaterial({
          color,
          emissive: color,
          emissiveIntensity: 0.6,
          metalness: 0.35,
          roughness: 0.28,
        });
        const upright = new THREE.Mesh(new THREE.BoxGeometry(0.13, 3.65, 0.16), frameMaterial);
        upright.position.set(-1.03, 1.82, 0);
        group.add(upright);
        const rightUpright = upright.clone();
        rightUpright.position.x = 1.03;
        group.add(rightUpright);
        const lintel = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.16, 0.18), frameMaterial);
        lintel.position.y = 3.65;
        group.add(lintel);
        const boardMaterial = new THREE.MeshStandardMaterial({
          color: 0x15253a,
          emissive: color,
          emissiveIntensity: 0.14,
          metalness: 0.4,
          roughness: 0.3,
        });
        const board = new THREE.Mesh(new THREE.BoxGeometry(1.96, 1.55, 0.22), boardMaterial);
        board.position.set(0, 2.52, 0.02);
        group.add(board);
        const labelCanvas = document.createElement("canvas");
        labelCanvas.width = 768;
        labelCanvas.height = 512;
        const context = labelCanvas.getContext("2d");
        if (context) {
          context.fillStyle = "#102137";
          context.fillRect(0, 0, labelCanvas.width, labelCanvas.height);
          context.strokeStyle = `#${color.toString(16).padStart(6, "0")}`;
          context.lineWidth = 18;
          context.strokeRect(9, 9, labelCanvas.width - 18, labelCanvas.height - 18);
          context.fillStyle = "#f8fbff";
          context.textAlign = "center";
          context.textBaseline = "middle";
          const words = answer.split(" ");
          const lines: string[] = [];
          let line = "";
          for (const word of words) {
            const next = line ? `${line} ${word}` : word;
            if (next.length > 20 && line) {
              lines.push(line);
              line = word;
            } else line = next;
          }
          if (line) lines.push(line);
          const fontSize = lines.length > 2 ? 70 : lines.length > 1 ? 88 : 110;
          context.font = `900 ${fontSize}px Arial, sans-serif`;
          const lineHeight = fontSize * 1.12;
          const startY = labelCanvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;
          lines.forEach((text, lineIndex) =>
            context.fillText(text, labelCanvas.width / 2, startY + lineIndex * lineHeight, 690),
          );
        }
        const label = new THREE.Mesh(
          new THREE.PlaneGeometry(1.86, 1.24),
          new THREE.MeshBasicMaterial({
            map: new THREE.CanvasTexture(labelCanvas),
            side: THREE.DoubleSide,
          }),
        );
        label.position.set(0, 2.52, -0.105);
        group.add(label);
        const laneMarker = new THREE.Mesh(
          new THREE.PlaneGeometry(1.8, 0.18),
          new THREE.MeshBasicMaterial({ color }),
        );
        laneMarker.rotation.x = -Math.PI / 2;
        laneMarker.position.set(0, 0.025, 0.25);
        group.add(laneMarker);
        group.position.set((laneIndex - 1) * 2.15, 0, z);
        group.userData["waveIndex"] = w.waveIndex;
        scene.add(group);
        objects.push({
          mesh: group,
          lane: laneIndex,
          z,
          type: "answer",
          label: answer,
          questionIndex: w.waveIndex,
          correct: answer === question.correct,
          hit: false,
        });
      });
    };
    const draw = (now: number) => {
      if (endedRef.current) {
        renderer.render(scene, camera);
        w.raf = requestAnimationFrame(draw);
        return;
      }
      if (!w.running) {
        t0 = now;
        renderer.render(scene, camera);
        w.raf = requestAnimationFrame(draw);
        return;
      }
      const dt = Math.min((now - t0) / 1000, 0.05);
      t0 = now;
      w.speed = Math.min(21, 12 + Math.floor(w.distance / 180) * 0.7);
      w.distance += w.speed * dt;
      // Each stride is tied to distance traveled, so foot timing speeds up with the road.
      w.gaitPhase += Math.PI * 2 * (2 + w.speed * 0.1) * dt;
      roadDashes.forEach((dash) => {
        dash.position.z += w.speed * dt;
        if (dash.position.z > 14) dash.position.z -= 164;
      });
      roadsideTrees.forEach((tree) => {
        tree.z += w.speed * dt * 0.72;
        if (tree.z > 18) tree.z -= 160;
      });
      roadsideTrees.forEach((tree, index) => {
        treeTransform.position.set(tree.x, 1.35 * tree.scale, tree.z);
        treeTransform.scale.setScalar(tree.scale);
        treeTransform.updateMatrix();
        trunks.setMatrixAt(index, treeTransform.matrix);
        canopyShapes.forEach(([cx, cy, cz, radius], shapeIndex) => {
          treeTransform.position.set(
            tree.x + cx * tree.scale,
            cy * tree.scale,
            tree.z + cz * tree.scale,
          );
          treeTransform.scale.setScalar(radius * tree.scale);
          treeTransform.updateMatrix();
          crowns.setMatrixAt(index * canopyShapes.length + shapeIndex, treeTransform.matrix);
        });
      });
      trunks.instanceMatrix.needsUpdate = true;
      crowns.instanceMatrix.needsUpdate = true;
      if (Math.floor(w.distance / 10) > displayedDistanceRef.current) {
        displayedDistanceRef.current = Math.floor(w.distance / 10);
        setDistance(displayedDistanceRef.current * 10);
      }
      spawn += dt;
      if (!w.waveSpawned && spawn > 1.1) {
        spawn = 0;
        w.waveSpawned = true;
        w.waveAnswered = false;
        addAnswerWave(-48);
      }
      w.cat.position.x = THREE.MathUtils.damp(w.cat.position.x, (w.lane - 1) * 2.15, 14, dt);
      const phase = w.gaitPhase;
      const catLegs = w.cat.userData["legs"] as THREE.Group[];
      catLegs.forEach((leg, index) => {
        const legPhase = phase + (leg.userData["phase"] as number) + (index % 2) * 0.14;
        const runSwing = Math.sin(legPhase) * 0.62;
        const jumpPose = THREE.MathUtils.clamp(w.vy / 8.1, -1, 1);
        const jumpSwing = index < 2 ? -0.5 * jumpPose : 0.42 * jumpPose;
        leg.rotation.x = THREE.MathUtils.lerp(runSwing, jumpSwing, w.jumping ? 0.82 : 0);
        const knee = leg.userData["knee"] as THREE.Group;
        const runKnee = Math.max(0, Math.cos(legPhase + 0.7)) * 0.72;
        knee.rotation.x = THREE.MathUtils.lerp(
          runKnee,
          0.58 * Math.abs(jumpPose),
          w.jumping ? 0.82 : 0,
        );
      });
      const catHead = w.cat.userData["head"] as THREE.Group;
      catHead.rotation.x = Math.sin(phase * 2) * 0.035;
      const catTail = w.cat.userData["tail"] as THREE.Group;
      catTail.rotation.y = Math.sin(phase * 0.7) * 0.45;
      if (w.jumping) {
        const fixedStep = 1 / 120;
        const gravity = 19.6;
        w.physicsAccumulator += dt;
        while (w.physicsAccumulator >= fixedStep) {
          w.cat.position.y += w.vy * fixedStep;
          w.vy -= gravity * fixedStep;
          w.physicsAccumulator -= fixedStep;
        }
        if (w.cat.position.y <= 0 && w.vy < 0) {
          w.cat.position.y = 0;
          w.jumping = false;
          w.vy = 0;
          w.physicsAccumulator = 0;
        }
      } else if (w.sliding <= 0) w.cat.position.y = Math.sin(phase * 2) * 0.018;
      if (w.sliding > 0) {
        w.sliding -= dt;
        w.cat.rotation.x = 0.15;
      } else if (w.jumping) w.cat.rotation.x = THREE.MathUtils.clamp(w.vy * 0.035, -0.18, 0.18);
      else w.cat.rotation.x = 0;
      for (let i = objects.length - 1; i >= 0; i--) {
        const obj = objects[i]!;
        obj.z += w.speed * dt;
        obj.mesh.position.z = obj.z;
        obj.mesh.rotation.y = Math.sin(now * 0.001 + obj.lane) * 0.035;
        if (!obj.hit && obj.z > 0.8 && obj.z < 3.15 && obj.lane === w.lane) {
          obj.hit = true;
          if (!w.waveAnswered && obj.questionIndex === w.waveIndex) {
            w.waveAnswered = true;
            const question = RUN_QUESTIONS[w.waveIndex]!;
            if (obj.correct) {
              scoreRef.current += 100;
              setScore(scoreRef.current);
              setFeedback("correct");
              setFeedbackAnswer("");
              setMessage(question.explain);
              window.setTimeout(() => setFeedback(null), 2600);
              onScore(100);
            } else {
              heartsRef.current = Math.max(0, heartsRef.current - 1);
              setHearts(heartsRef.current);
              setFeedback("incorrect");
              setFeedbackAnswer(question.correct);
              setMessage(question.explain);
              window.setTimeout(() => setFeedback(null), 3200);
            }
            for (let otherIndex = objects.length - 1; otherIndex >= 0; otherIndex--) {
              const other = objects[otherIndex]!;
              if (other.questionIndex === obj.questionIndex && other !== obj) {
                scene.remove(other.mesh);
                objects.splice(otherIndex, 1);
              }
            }
            w.waveIndex++;
            questionRef.current = w.waveIndex;
            setQuestionIndex(w.waveIndex);
            if (w.waveIndex >= RUN_QUESTIONS.length) {
              endedRef.current = true;
              setWon(true);
              setEnded(true);
            } else if (heartsRef.current <= 0) {
              endedRef.current = true;
              setEnded(true);
            }
          }
        }
        if (obj.z > 12) {
          scene.remove(obj.mesh);
          objects.splice(i, 1);
        }
      }
      if (w.waveSpawned && objects.length === 0 && !endedRef.current) {
        w.waveSpawned = false;
        spawn = 0;
      }
      renderer.render(scene, camera);
      w.raf = requestAnimationFrame(draw);
    };
    w.raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(w.raf);
      renderer.dispose();
      el.replaceChildren();
      world.current = null;
    };
  }, [onScore]);
  const touchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0]!.clientX, y: e.touches[0]!.clientY };
  };
  const touchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0]!.clientX - touch.current.x;
    const dy = e.changedTouches[0]!.clientY - touch.current.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) > 22) {
      if (Math.abs(dx) > Math.abs(dy)) act(dx < 0 ? "left" : "right");
      else act(dy < 0 ? "jump" : "slide");
    }
    touch.current = null;
  };
  const restart = () => {
    endedRef.current = false;
    heartsRef.current = 3;
    scoreRef.current = 0;
    questionRef.current = 0;
    displayedDistanceRef.current = 0;
    setHearts(3);
    setScore(0);
    setQuestionIndex(0);
    setDistance(0);
    setEnded(false);
    setFeedback(null);
    setFeedbackAnswer("");
    setMessage("Read the question, then pass through the right answer gate.");
    setWon(false);
    const w = world.current;
    if (w) {
      w.objects.forEach((object) => w.scene.remove(object.mesh));
      w.objects.length = 0;
      w.distance = 0;
      w.gaitPhase = 0;
      w.speed = 12;
      w.waveIndex = 0;
      w.waveSpawned = false;
      w.waveAnswered = false;
      w.spawn = 0;
      w.lane = 1;
      w.cat.position.set(0, 0, 2);
      w.jumping = false;
      w.vy = 0;
      w.physicsAccumulator = 0;
      w.sliding = 0;
      laneRef.current = 1;
      setLane(1);
    }
  };
  return (
    <div className="absolute inset-0 select-none" onTouchStart={touchStart} onTouchEnd={touchEnd}>
      <div ref={host} className="absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-20 z-10 mx-auto max-w-2xl px-4">
        <div className="rounded-2xl border border-white/20 bg-slate-950/85 p-3 text-center shadow-xl backdrop-blur-md md:p-4">
          <div className="text-[10px] font-black uppercase tracking-[.2em] text-amber-200">
            QUESTION {Math.min(questionIndex + 1, RUN_QUESTIONS.length)} / {RUN_QUESTIONS.length} ·
            CHOOSE A GATE
          </div>
          <div className="mt-1 text-sm font-extrabold md:text-lg">
            {RUN_QUESTIONS[questionIndex % RUN_QUESTIONS.length]!.prompt}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-left md:gap-3">
            {RUN_QUESTIONS[questionIndex % RUN_QUESTIONS.length]!.answers.map((answer, index) => (
              <div
                key={answer}
                className="min-h-14 rounded-lg border border-white/20 bg-slate-900/95 px-2 py-2 text-center shadow-inner md:px-3"
              >
                <div
                  className="text-[9px] font-black uppercase tracking-widest"
                  style={{ color: ["#ffbd59", "#56e0d0", "#b294ff"][index] }}
                >
                  {["LEFT GATE", "CENTER GATE", "RIGHT GATE"][index]}
                </div>
                <div className="mt-1 text-[11px] font-extrabold leading-4 text-white md:text-sm">
                  {answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        {!feedback && (
          <div className="mt-2 text-center text-xs font-semibold text-amber-100">{message}</div>
        )}
      </div>
      {feedback && (
        <div
          role="status"
          aria-live="assertive"
          className={`pointer-events-none absolute left-1/2 top-[36%] z-20 w-[min(92vw,36rem)] -translate-x-1/2 rounded-3xl border-2 p-5 text-center shadow-2xl backdrop-blur-md md:p-7 ${
            feedback === "correct"
              ? "border-emerald-200 bg-emerald-950/95 text-emerald-50 shadow-emerald-950/50"
              : "border-rose-200 bg-rose-950/95 text-rose-50 shadow-rose-950/50"
          }`}
        >
          <div className="flex items-center justify-center gap-3">
            {feedback === "correct" ? (
              <CircleCheck className="size-9 shrink-0 text-emerald-300 md:size-11" />
            ) : (
              <CircleX className="size-9 shrink-0 text-rose-300 md:size-11" />
            )}
            <div className="text-2xl font-black uppercase tracking-wide md:text-4xl">
              {feedback === "correct" ? "Correct! +100 XP" : "Wrong gate"}
            </div>
          </div>
          <p className="mt-3 text-base font-extrabold md:text-xl">
            {feedback === "incorrect" && `Correct answer: ${feedbackAnswer}`}
          </p>
          <p className="mt-2 text-sm font-semibold leading-6 md:text-base">{message}</p>
        </div>
      )}
      <div className="pointer-events-none absolute bottom-6 left-4 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur">
        <span className="flex items-center gap-1 text-rose-300">
          <Heart className="size-4 fill-rose-300" />×{hearts}
        </span>
        <span className="text-xs font-bold text-white">{Math.floor(distance)} m</span>
        <span className="text-xs font-bold text-amber-200">{score} XP</span>
      </div>
      <div className="pointer-events-none absolute bottom-6 right-4 z-10 hidden gap-1 sm:flex">
        <div className="grid grid-cols-3 gap-1">
          <span />
          <KeyPill>↑</KeyPill>
          <span />
          <KeyPill>←</KeyPill>
          <KeyPill>↓</KeyPill>
          <KeyPill>→</KeyPill>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:hidden">
        {(
          [
            ["left", "←"],
            ["jump", "↑"],
            ["slide", "↓"],
            ["right", "→"],
          ] as const
        ).map(([move, label]) => (
          <button
            key={move}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={() => act(move)}
            className="grid size-12 place-items-center rounded-xl border border-white/20 bg-slate-950/70 text-xl font-black backdrop-blur"
          >
            {label}
          </button>
        ))}
      </div>
      {ended && (
        <EndCard
          title={won ? "Run complete!" : "The run is over"}
          body={
            won
              ? `You answered all ${RUN_QUESTIONS.length} questions and earned ${score} XP.`
              : `You made it ${Math.floor(distance)} metres and earned ${score} XP.`
          }
          onRestart={restart}
        />
      )}
    </div>
  );
}
function KeyPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-7 place-items-center rounded border border-white/20 bg-slate-950/70 text-xs font-bold">
      {children}
    </span>
  );
}

function AtomLab({ onScore }: RunProps) {
  const host = useRef<HTMLDivElement>(null);
  const world = useRef<{
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    objects: THREE.Mesh[];
    keys: Set<string>;
    raf: number;
  } | null>(null);
  const [round, setRound] = useState(0);
  const [inventory, setInventory] = useState({ p: 0, n: 0, e: 0 });
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);
  const targets = [
    { name: "Carbon-12", p: 6, n: 6, e: 6 },
    { name: "Sodium ion Na⁺", p: 11, n: 12, e: 10 },
    { name: "Oxygen-16", p: 8, n: 8, e: 8 },
  ];
  const target = targets[round % targets.length]!;
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.shadowMap.enabled = false;
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111026);
    scene.fog = new THREE.Fog(0x111026, 12, 36);
    const camera = new THREE.PerspectiveCamera(70, el.clientWidth / el.clientHeight, 0.1, 80);
    camera.position.set(0, 1.7, 7);
    camera.rotation.order = "YXZ";
    scene.add(camera);
    scene.add(new THREE.HemisphereLight(0xd9dbff, 0x29203b, 2));
    const l = new THREE.PointLight(0xb195ff, 40, 35);
    l.position.set(0, 5, -5);
    scene.add(l);
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 45),
      new THREE.MeshStandardMaterial({ color: 0x28243b, metalness: 0.55 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.z = -10;
    scene.add(floor);
    scene.add(new THREE.GridHelper(30, 24, 0x8870dd, 0x3d3553));
    for (const x of [-7, 7]) {
      const wall = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 5, 28),
        new THREE.MeshStandardMaterial({ color: 0x302b48, metalness: 0.4 }),
      );
      wall.position.set(x, 2.5, -9);
      scene.add(wall);
    }
    const objects: THREE.Mesh[] = [];
    const types: [number, number, string][] = [
      [0xff647d, 0, "p"],
      [0xa6b1c2, 0, "n"],
      [0x56dfff, 0, "e"],
    ];
    for (let i = 0; i < 42; i++) {
      const [color] = types[i % 3]!;
      const geo =
        i % 3 === 0
          ? new THREE.SphereGeometry(0.34, 16, 12)
          : i % 3 === 1
            ? new THREE.DodecahedronGeometry(0.34)
            : new THREE.SphereGeometry(0.18, 12, 10);
      const mesh = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({
          color,
          emissive: color,
          emissiveIntensity: 0.45,
          metalness: 0.3,
        }),
      );
      mesh.position.set(
        (Math.random() - 0.5) * 11,
        0.7 + Math.random() * 3,
        -3 - Math.random() * 20,
      );
      mesh.userData["kind"] = types[i % 3]![2];
      scene.add(mesh);
      const labelCanvas = document.createElement("canvas");
      labelCanvas.width = 256;
      labelCanvas.height = 96;
      const labelContext = labelCanvas.getContext("2d");
      if (labelContext) {
        labelContext.fillStyle = "rgba(3, 8, 18, .84)";
        labelContext.fillRect(0, 0, labelCanvas.width, labelCanvas.height);
        labelContext.fillStyle = i % 3 === 0 ? "#ff9cad" : i % 3 === 1 ? "#e2e8f0" : "#67e8f9";
        labelContext.font = "bold 40px sans-serif";
        labelContext.textAlign = "center";
        labelContext.fillText(
          i % 3 === 0 ? "PROTON" : i % 3 === 1 ? "NEUTRON" : "ELECTRON",
          128,
          60,
        );
      }
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(labelCanvas), depthTest: false }),
      );
      sprite.scale.set(1.4, 0.52, 1);
      sprite.position.set(0, 0.65, 0);
      mesh.add(sprite);
      objects.push(mesh);
    }
    const keys = new Set<string>();
    world.current = { camera, renderer, scene, objects, keys, raf: 0 };
    let yaw = 0,
      pitch = 0;
    const keydown = (e: KeyboardEvent) => keys.add(e.key.toLowerCase());
    const keyup = (e: KeyboardEvent) => keys.delete(e.key.toLowerCase());
    const move = (e: MouseEvent) => {
      if (document.pointerLockElement !== renderer.domElement) return;
      yaw -= e.movementX * 0.002;
      pitch = THREE.MathUtils.clamp(pitch - e.movementY * 0.002, -0.5, 0.5);
      camera.rotation.set(pitch, yaw, 0);
    };
    const resize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    window.addEventListener("mousemove", move);
    window.addEventListener("resize", resize);
    let prev = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - prev) / 1000, 0.05);
      prev = now;
      if (keys.has("w") || keys.has("arrowup")) camera.translateZ(-dt * 4);
      if (keys.has("s") || keys.has("arrowdown")) camera.translateZ(dt * 4);
      if (keys.has("a") || keys.has("arrowleft")) camera.translateX(-dt * 4);
      if (keys.has("d") || keys.has("arrowright")) camera.translateX(dt * 4);
      camera.position.x = THREE.MathUtils.clamp(camera.position.x, -6, 6);
      camera.position.z = THREE.MathUtils.clamp(camera.position.z, -1, 7);
      objects.forEach((o, i) => {
        o.rotation.x += dt * (i % 2 ? 1 : -1);
        o.rotation.y += dt;
      });
      renderer.render(scene, camera);
      if (world.current) world.current.raf = requestAnimationFrame(tick);
    };
    world.current.raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", resize);
      document.exitPointerLock?.();
      renderer.dispose();
      el.replaceChildren();
      world.current = null;
    };
  }, []);
  const collect = () => {
    const w = world.current;
    if (!w) return;
    if (document.pointerLockElement !== w.renderer.domElement) {
      void w.renderer.domElement.requestPointerLock?.();
    }
    const ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(0, 0), w.camera);
    const hit = ray.intersectObjects(w.objects, false)[0];
    if (!hit) {
      setMsg("Aim at a floating particle and click to collect it.");
      return;
    }
    const obj = hit.object as THREE.Mesh;
    const kind = obj.userData["kind"] as "p" | "n" | "e";
    setInventory((v) => ({ ...v, [kind]: v[kind] + 1 }));
    w.scene.remove(obj);
    w.objects.splice(w.objects.indexOf(obj), 1);
    setMsg(
      `Collected ${kind === "p" ? "a proton" : kind === "n" ? "a neutron" : "an electron"}. Check the atom requirements.`,
    );
  };
  const finish = () => {
    if (inventory.p < target.p || inventory.n < target.n || inventory.e < target.e) {
      setMsg(
        `Still need ${Math.max(0, target.p - inventory.p)} protons, ${Math.max(0, target.n - inventory.n)} neutrons and ${Math.max(0, target.e - inventory.e)} electrons.`,
      );
      return;
    }
    onScore(100);
    if (round >= 2) setDone(true);
    else {
      setRound((r) => r + 1);
      setInventory({ p: 0, n: 0, e: 0 });
      setMsg("Atom stable! New build request received.");
    }
  };
  return (
    <div className="absolute inset-0" onClick={collect}>
      <div ref={host} className="absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-[49%] z-10 size-5 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 h-5 w-px bg-white" />
        <span className="absolute top-1/2 h-px w-5 bg-white" />
      </div>
      <div className="absolute left-4 top-20 z-10 max-w-sm rounded-2xl border border-violet-200/20 bg-slate-950/75 p-4 backdrop-blur">
        <div className="text-[9px] font-black uppercase tracking-[.2em] text-violet-200">
          Build request {round + 1}/3
        </div>
        <div className="mt-1 text-lg font-black">{target.name}</div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-xs font-bold">
          <span className="text-rose-300">
            p⁺ {inventory.p}/{target.p}
          </span>
          <span className="text-slate-200">
            n⁰ {inventory.n}/{target.n}
          </span>
          <span className="text-sky-300">
            e⁻ {inventory.e}/{target.e}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            finish();
          }}
          className="pointer-events-auto mt-3 rounded-lg bg-violet-300 px-3 py-2 text-xs font-black text-slate-950"
        >
          Assemble atom
        </button>
        {msg && <p className="mt-2 text-xs leading-5 text-violet-100">{msg}</p>}
      </div>
      <div className="pointer-events-auto absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:hidden">
        {[
          ["↑", "forward"],
          ["←", "left"],
          ["↓", "back"],
          ["→", "right"],
        ].map(([label, dir]) => (
          <button
            key={dir}
            onTouchStart={(e) => {
              e.stopPropagation();
              e.preventDefault();
              const w = world.current;
              if (!w) return;
              if (dir === "forward") w.keys.add("arrowup");
              if (dir === "back") w.keys.add("arrowdown");
              if (dir === "left") w.keys.add("arrowleft");
              if (dir === "right") w.keys.add("arrowright");
            }}
            onTouchEnd={(e) => {
              e.stopPropagation();
              const w = world.current;
              if (!w) return;
              if (dir === "forward") w.keys.delete("arrowup");
              if (dir === "back") w.keys.delete("arrowdown");
              if (dir === "left") w.keys.delete("arrowleft");
              if (dir === "right") w.keys.delete("arrowright");
            }}
            className="grid size-11 place-items-center rounded-xl border border-white/20 bg-slate-950/80 font-bold"
          >
            {label}
          </button>
        ))}
      </div>
      {done && (
        <EndCard
          title="Lab mission complete"
          body="You assembled three atoms and ions from their subatomic particles."
          onRestart={() => {
            setRound(0);
            setInventory({ p: 0, n: 0, e: 0 });
            setDone(false);
          }}
        />
      )}
    </div>
  );
}

function ForceRange({ onScore }: RunProps) {
  const host = useRef<HTMLDivElement>(null);
  const world = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    projectile: THREE.Mesh;
    raf: number;
    time: number;
  } | null>(null);
  const [angle, setAngle] = useState(45);
  const [shots, setShots] = useState(0);
  const [hits, setHits] = useState(0);
  const [msg, setMsg] = useState("Set an angle, calculate the path, and fire.");
  const [done, setDone] = useState(false);
  const angleRef = useRef(angle);
  angleRef.current = angle;
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.shadowMap.enabled = false;
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x081520);
    scene.fog = new THREE.Fog(0x081520, 18, 70);
    const camera = new THREE.PerspectiveCamera(55, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.set(0, 9, 19);
    camera.lookAt(0, 2, -10);
    scene.add(new THREE.HemisphereLight(0xc8f5ff, 0x26303a, 2));
    const sun = new THREE.DirectionalLight(0xffffff, 3);
    sun.position.set(-5, 14, 9);
    sun.castShadow = false;
    scene.add(sun);
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 100),
      new THREE.MeshStandardMaterial({ color: 0x172b35, roughness: 0.86 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.z = -25;
    floor.receiveShadow = true;
    scene.add(floor);
    scene.add(new THREE.GridHelper(40, 24, 0x33bdd8, 0x27434c));
    const cannon = new THREE.Group();
    cannon.position.set(0, 0.65, 8);
    scene.add(cannon);
    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.95, 0.35, 24),
      new THREE.MeshStandardMaterial({ color: 0x455967, metalness: 0.7 }),
    );
    base.position.y = 0.2;
    cannon.add(base);
    const barrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.28, 2.3, 16),
      new THREE.MeshStandardMaterial({ color: 0x9bb4bc, metalness: 0.8, roughness: 0.24 }),
    );
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(0, 0.7, -0.65);
    cannon.add(barrel);
    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(0.24, 16, 12),
      new THREE.MeshStandardMaterial({
        color: 0x42ddf3,
        emissive: 0x108398,
        emissiveIntensity: 0.7,
        metalness: 0.5,
      }),
    );
    ball.position.set(0, 0.9, 7);
    scene.add(ball);
    const projectile = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 18, 14),
      new THREE.MeshStandardMaterial({
        color: 0xffd166,
        emissive: 0xff9728,
        emissiveIntensity: 0.9,
      }),
    );
    projectile.visible = false;
    scene.add(projectile);
    for (let i = 0; i < 5; i++) {
      const stand = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 1.8, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x4c6770 }),
      );
      stand.position.set((i - 2) * 5, 0, -16 - Math.random() * 30);
      scene.add(stand);
      const target = new THREE.Mesh(
        new THREE.TorusGeometry(0.85, 0.13, 12, 32),
        new THREE.MeshStandardMaterial({
          color: i % 2 ? 0x62eead : 0x45d8f0,
          emissive: i % 2 ? 0x1cbe7b : 0x117b98,
          emissiveIntensity: 0.6,
        }),
      );
      target.position.set((i - 2) * 5, 2, -16 - i * 5);
      target.userData["target"] = true;
      scene.add(target);
    }
    world.current = { scene, camera, renderer, projectile, raf: 0, time: 0 };
    let last = performance.now();
    const targets = scene.children.filter((o) => o.userData["target"]);
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      world.current!.time += dt;
      targets.forEach((t, i) => {
        t.position.x = (i - 2) * 5 + Math.sin(world.current!.time * 1.2 + i) * 1.7;
        t.rotation.z = world.current!.time * 0.65;
      });
      renderer.render(scene, camera);
      if (world.current) world.current.raf = requestAnimationFrame(tick);
    };
    world.current.raf = requestAnimationFrame(tick);
    const resize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(world.current?.raf ?? 0);
      renderer.dispose();
      el.replaceChildren();
      world.current = null;
    };
  }, []);
  const fire = () => {
    const w = world.current;
    if (!w || done) return;
    const a = (angleRef.current * Math.PI) / 180;
    const v = 17;
    let x = 0,
      y = 1,
      z = 7,
      vy = v * Math.sin(a),
      hit = false;
    const vx = 0;
    const vz = -v * Math.cos(a);
    const targets = w.scene.children.filter((o) => o.userData["target"]);
    for (let n = 0; n < 160; n++) {
      const dt = 0.045;
      vy -= 9.81 * dt;
      x += vx * dt;
      y += vy * dt;
      z += vz * dt;
      if (y <= 0) break;
      for (const t of targets) {
        if (Math.hypot(x - t.position.x, y - t.position.y, z - t.position.z) < 1.1) {
          hit = true;
          break;
        }
      }
      if (hit) break;
    }
    setShots((s) => s + 1);
    if (hit) {
      setHits((h) => h + 1);
      onScore(50);
      setMsg(
        `Bullseye! ${angle}° arc reached a moving target. Projectile motion uses horizontal velocity and vertical acceleration g = 9.81 m/s².`,
      );
    } else {
      setMsg(
        `Miss at ${angle}°. Range estimate: ${((v * v * Math.sin(2 * a)) / 9.81).toFixed(1)} m. Adjust the angle and account for target movement.`,
      );
    }
    w.projectile.visible = true;
    w.projectile.position.set(0, 1, 7);
    w.projectile.userData["velocity"] = { x: 0, y: v * Math.sin(a), z: -v * Math.cos(a) };
    if (shots >= 4) {
      setDone(true);
      if (hits + (hit ? 1 : 0) >= 3)
        setMsg("Range cleared! You consistently predicted projectile motion.");
    }
  };
  useEffect(() => {
    const w = world.current;
    if (!w) return;
    const ball = w.projectile;
    const v = ball.userData["velocity"] as { x: number; y: number; z: number } | undefined;
    if (!v) return;
    let raf = 0;
    const begin = performance.now();
    const animate = (now: number) => {
      const t = (now - begin) / 1000;
      ball.position.x = v.x * t;
      ball.position.y = 1 + v.y * t - 4.905 * t * t;
      ball.position.z = 7 + v.z * t;
      if (ball.position.y <= 0 || t > 3) {
        ball.visible = false;
        delete ball.userData["velocity"];
        return;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [shots]);
  return (
    <div className="absolute inset-0">
      <div ref={host} className="absolute inset-0" />
      <div className="absolute left-4 top-20 z-10 w-[min(90%,340px)] rounded-2xl border border-cyan-100/20 bg-slate-950/75 p-4 backdrop-blur">
        <div className="text-[9px] font-black uppercase tracking-[.2em] text-cyan-200">
          Launch computer
        </div>
        <div className="mt-1 text-xl font-black">Set the angle</div>
        <div className="mt-4 flex items-center gap-3">
          <input
            aria-label="Launch angle"
            type="range"
            min="15"
            max="75"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
            className="w-full accent-cyan-300"
          />
          <span className="w-12 text-right text-lg font-black text-cyan-200">{angle}°</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
          <span>
            Initial speed <b className="text-white">17 m/s</b>
          </span>
          <span>
            Gravity <b className="text-white">9.81 m/s²</b>
          </span>
          <span>
            Shots <b className="text-white">{Math.min(shots, 5)}/5</b>
          </span>
          <span>
            Hits <b className="text-emerald-300">{hits}</b>
          </span>
        </div>
        <button
          onClick={fire}
          disabled={done}
          className="mt-4 w-full rounded-xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950 hover:bg-cyan-200 disabled:opacity-50"
        >
          <Zap className="mr-2 inline size-4" />
          FIRE
        </button>
        <p className="mt-3 text-xs leading-5 text-cyan-100">{msg}</p>
      </div>
      <div className="pointer-events-none absolute bottom-5 right-5 rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs font-bold text-slate-200">
        Range score: {hits} / 3
      </div>
      {done && (
        <EndCard
          title="Range complete"
          body={`You hit ${hits} moving target${hits === 1 ? "" : "s"} in ${shots} shots.`}
          onRestart={() => {
            setShots(0);
            setHits(0);
            setDone(false);
            setMsg("Set an angle, calculate the path, and fire.");
          }}
        />
      )}
    </div>
  );
}

function EndCard({
  title,
  body,
  onRestart,
}: {
  title: string;
  body: string;
  onRestart: () => void;
}) {
  return (
    <div className="absolute inset-0 z-20 grid place-items-center bg-slate-950/65 p-4 backdrop-blur-sm">
      <div className="max-w-sm rounded-3xl border border-white/15 bg-[#0a1423] p-7 text-center">
        <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-amber-200/10 text-amber-200">
          <Trophy className="size-7" />
        </div>
        <h2 className="mt-4 text-2xl font-black">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
        <button
          onClick={onRestart}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-black text-slate-950"
        >
          <RotateCcw className="size-4" />
          Run it back
        </button>
      </div>
    </div>
  );
}
