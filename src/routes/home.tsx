import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Flame,
  Layers,
  MessageCircle,
  Bot,
  Plus,
  FileText,
} from "lucide-react";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ProfileAvatar } from "@/components/dashboard-page";
import {
  readProfile,
  type OnboardingProfile,
} from "@/lib/onboarding";
import logoMark from "@/assets/logo-mark.png";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Study dashboard | ExamGlow" },
      {
        name: "description",
        content:
          "Plan your studies, review your progress and prepare for every exam in one focused ExamGlow workspace.",
      },
      { property: "og:title", content: "Study dashboard | ExamGlow" },
      {
        property: "og:description",
        content: "Your focused workspace for notes, assignments, quizzes and exam preparation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const quickActions = [
  { title: "Ask the tutor", meta: "Instant explanations & quiz", to: "/chat", Icon: MessageCircle, tone: "bg-lilac" },
  { title: "My Notes", meta: "Write & edit rich notes", to: "/notes", Icon: FileText, tone: "bg-mint" },
  { title: "Syllabus Notes", meta: "Full syllabus chapters", to: "/syllabus-notes", Icon: BookOpen, tone: "bg-surface" },
] as const;

type StudyTask = {
  id: string;
  title: string;
  time: string;
  done: boolean;
};

const TASKS_KEY = "examglow.home_study_tasks";

export function HomePage() {
  const [profile, setProfile] = useState<OnboardingProfile>({});
  const [tasks, setTasks] = useState<StudyTask[]>([]);
  const [newTask, setNewTask] = useState("");
  const [notesCount, setNotesCount] = useState(0);

  useEffect(() => {
    setProfile(readProfile());

    try {
      const savedTasks = window.localStorage.getItem(TASKS_KEY);
      if (savedTasks) setTasks(JSON.parse(savedTasks));

      const rawNotes = window.localStorage.getItem("examglow.student_notes");
      if (rawNotes) {
        const list = JSON.parse(rawNotes);
        if (Array.isArray(list)) setNotesCount(list.length);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const toggleTask = (id: string) => {
    setTasks((prev) => {
      const next = prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
      try {
        window.localStorage.setItem(TASKS_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const addTask = () => {
    const title = newTask.trim();
    if (!title) return;
    setTasks((prev) => {
      const next = [
        ...prev,
        { id: crypto.randomUUID(), title, time: "15 min", done: false },
      ];
      try {
        window.localStorage.setItem(TASKS_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
    setNewTask("");
  };

  const firstName = profile.name?.split(" ")[0] ?? "there";
  const completedTasks = tasks.filter((t) => t.done).length;

  // Real dynamic date
  const todayFormatted = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // Dynamic next upcoming deadline day
  const nextTargetDay = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
    weekday: "long",
  });

  const focusTitle = profile.goal
    ? `${profile.goal} Focused Revision`
    : "IGCSE Curriculum Review";

  return (
    <div className="flex h-dvh overflow-hidden bg-background">
      <DashboardSidebar />
      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1180px] px-5 pb-24 pt-20 md:px-8 md:pt-10 lg:px-12">
          <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
            <div className="min-w-0">
              <p className="text-sm font-medium text-muted-foreground">{todayFormatted}</p>
              <h1 className="mt-1 truncate text-[clamp(2rem,4vw,3.25rem)] leading-tight">
                Good to see you, <span className="display-italic">{firstName}</span>
              </h1>
            </div>
            <ProfileAvatar className="mt-1" />
          </header>

          <section className="mt-7 grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <div className="relative overflow-hidden rounded-[28px] bg-ink px-7 py-8 text-ink-foreground">
              <img
                src={logoMark}
                alt=""
                width={512}
                height={512}
                className="pointer-events-none absolute -right-8 -top-10 size-52 opacity-10 invert"
              />
              <span className="inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-3 py-1 text-xs font-semibold">
                Today's focus
              </span>
              <h2 className="mt-4 max-w-md text-[clamp(1.7rem,3vw,2.4rem)] leading-tight font-bold">
                {focusTitle}
              </h2>
              <p className="mt-3 max-w-md text-sm text-ink-foreground/75 leading-relaxed">
                All chapters, notes, diagrams, and unlimited AI tutoring — 100% free, no subscription needed.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  to="/syllabus-notes"
                  className="inline-flex items-center gap-2 rounded-full bg-ink-foreground px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
                >
                  Continue syllabus notes <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  to="/notes"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-5 py-3 text-sm font-medium hover:bg-ink-foreground/10"
                >
                  Open my notes
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Stat
                value="All Open"
                label="Syllabus Access"
              />
              <Stat
                value={notesCount.toString()}
                label="Personal Notes"
                icon={<FileText className="size-4 text-lavender" />}
              />
              <Stat
                value={profile.streakDays ? `${profile.streakDays}d` : "Active"}
                label="Study Consistency"
                icon={<Flame className="size-4 text-lavender" aria-hidden />}
              />
              <Stat
                value="Unlimited"
                label="AI Tutor"
                icon={<Bot className="size-4 text-emerald-500" />}
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quick actions</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {quickActions.map(({ title, meta, to, Icon, tone }) => (
                <Link
                  key={title}
                  to={to}
                  className={`group rounded-3xl ${tone} p-5 transition-transform hover:-translate-y-1`}
                >
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-card">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  <strong className="mt-4 flex items-center gap-1.5 text-[15px] font-semibold">
                    <span className="min-w-0 truncate">{title}</span>
                    <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                  </strong>
                  <span className="mt-1 block text-sm text-foreground/60">{meta}</span>
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
            <section>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Today's Goals</p>
                  <h2 className="mt-1 text-3xl font-bold">Your study checklist</h2>
                </div>
                {tasks.length > 0 && (
                  <span className="text-sm font-medium text-muted-foreground">
                    {completedTasks} of {tasks.length} completed
                  </span>
                )}
              </div>
              {tasks.length > 0 && (
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-lavender transition-all duration-300"
                    style={{ width: `${(completedTasks / tasks.length) * 100}%` }}
                  />
                </div>
              )}

              {/* Add task */}
              <div className="mt-4 flex items-center gap-2 rounded-3xl border border-border bg-card px-3 py-2.5">
                <Plus className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTask()}
                  placeholder="Add a study goal…"
                  className="min-w-0 flex-1 bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="button"
                  onClick={addTask}
                  disabled={!newTask.trim()}
                  className="shrink-0 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-ink-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
                >
                  Add
                </button>
              </div>

              {tasks.length === 0 ? (
                <div className="mt-4 rounded-3xl border border-dashed border-border px-6 py-10 text-center">
                  <p className="text-sm font-medium text-foreground">No goals yet</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add your first study goal above and start tracking today's progress.
                  </p>
                </div>
              ) : (
                <div className="mt-4 divide-y divide-border rounded-3xl border border-border px-5 bg-card">
                  {tasks.map((task) => (
                    <button
                      key={task.id}
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4 text-left hover:bg-secondary/40 rounded-2xl px-2 transition-colors"
                    >
                      {task.done ? (
                        <CheckCircle2 className="size-5 shrink-0 text-lavender" />
                      ) : (
                        <span className="size-5 shrink-0 rounded-full border-2 border-muted-foreground/40" />
                      )}
                      <span
                        className={`min-w-0 truncate text-[15px] ${
                          task.done ? "text-muted-foreground line-through" : "font-medium text-foreground"
                        }`}
                      >
                        {task.title}
                      </span>
                      <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock3 className="size-3.5" />
                        {task.time}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </section>

            <section>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Upcoming Milestone</p>
              <h2 className="mt-1 text-3xl font-bold">Next checkpoint</h2>
              <div className="mt-4 rounded-3xl border border-border p-6 bg-card">
                <div className="flex items-center gap-3">
                  <CalendarDays className="size-5 text-lavender" />
                  <span className="text-sm font-semibold">{nextTargetDay}</span>
                </div>
                <p className="mt-3 font-semibold text-foreground">
                  {profile.goal ? `${profile.goal} Mock Assessment` : "IGCSE Mock Test"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Prepare by testing past questions and reviewing your formula flashcards.
                </p>
                <Link
                  to="/test"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-ink-foreground transition-transform hover:-translate-y-0.5"
                >
                  Start practice quiz <ArrowRight className="size-3.5" />
                </Link>
              </div>
              <Link
                to="/calendar"
                className="mt-3 flex items-center justify-between rounded-3xl bg-surface px-5 py-4 text-sm font-medium hover:bg-secondary transition-colors"
              >
                View full revision calendar <ArrowRight className="size-4" />
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Stat({ value, label, icon }: { value: string; label: string; icon?: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-card px-5 py-6">
      <div className="flex items-center gap-2">
        <strong className="font-display text-2xl font-normal text-foreground sm:text-3xl">{value}</strong>
        {icon}
      </div>
      <span className="mt-1 block text-xs text-muted-foreground sm:text-sm">{label}</span>
    </div>
  );
}
