import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  MessageCircle,
  Plus,
} from "lucide-react";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ProfileAvatar } from "@/components/dashboard-page";
import {
  readProfile,
  type OnboardingProfile,
} from "@/lib/onboarding";

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
  { title: "Ask the tutor", meta: "Instant explanations & quiz", to: "/chat", Icon: MessageCircle },
  { title: "Quizzes & Tests", meta: "Topical practice & mocks", to: "/test", Icon: ClipboardCheck },
  { title: "My Notes", meta: "Write & edit rich notes", to: "/notes", Icon: FileText },
  { title: "Syllabus Notes", meta: "Full syllabus chapters", to: "/syllabus-notes", Icon: BookOpen },
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
          {/* Dateline */}
          <header className="flex items-center gap-5">
            <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {todayFormatted}
            </p>
            <span className="h-px min-w-0 flex-1 bg-border" aria-hidden />
            <ProfileAvatar className="shrink-0" />
          </header>

          {/* Masthead */}
          <h1 className="mt-7 max-w-4xl text-[clamp(2.6rem,6.5vw,4.5rem)] leading-[1.02]">
            Good to see you, <span className="display-italic">{firstName}</span>
          </h1>

          {/* Hero band */}
          <section className="mt-9 overflow-hidden rounded-[30px] bg-ink px-7 py-10 text-ink-foreground sm:px-11 sm:py-12">
            <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-foreground/60">
              <span className="size-1.5 rounded-full bg-lavender" aria-hidden />
              Today&apos;s focus
            </p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.04]">
              {focusTitle}
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-foreground/65">
              All chapters, notes, diagrams, and unlimited AI tutoring — free, no subscription needed.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/syllabus-notes"
                className="inline-flex items-center gap-2 rounded-full bg-ink-foreground px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Continue syllabus notes <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/notes"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3 text-sm font-medium hover:bg-ink-foreground/10"
              >
                Open my notes
              </Link>
            </div>

            {/* Typographic stat line */}
            <div className="mt-11 grid grid-cols-2 gap-y-8 border-t border-ink-foreground/15 pt-8 sm:grid-cols-4">
              <BandStat value="All Open" label="Syllabus Access" />
              <BandStat value={notesCount.toString()} label="Personal Notes" divider />
              <BandStat
                value={profile.streakDays ? `${profile.streakDays} days` : "Active"}
                label="Study Consistency"
                divider
              />
              <BandStat value="Unlimited" label="AI Tutor" divider />
            </div>
          </section>

          {/* The index */}
          <section className="mt-16">
            <div className="flex items-center gap-5">
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Quick actions
              </p>
              <span className="h-px min-w-0 flex-1 bg-border" aria-hidden />
            </div>

            <div className="mt-2">
              {quickActions.map(({ title, meta, to }, i) => (
                <Link
                  key={title}
                  to={to}
                  className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 border-t border-border/70 py-6 sm:gap-6"
                >
                  <span className="text-xs font-semibold tabular-nums tracking-[0.18em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 truncate font-display text-[clamp(1.4rem,2.8vw,1.9rem)] leading-none">
                    {title}
                  </span>
                  <span className="hidden min-w-0 text-right text-sm text-muted-foreground md:block">
                    {meta}
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" aria-hidden />
                </Link>
              ))}
              <span className="block h-px bg-border/70" aria-hidden />
            </div>
          </section>

          {/* Goals + milestone */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
            <section>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    Today&apos;s goals
                  </p>
                  <h2 className="mt-2 text-[clamp(1.8rem,3vw,2.3rem)] leading-tight">Your study checklist</h2>
                </div>
                {tasks.length > 0 && (
                  <span className="text-sm text-muted-foreground">
                    {completedTasks} of {tasks.length}
                  </span>
                )}
              </div>
              {tasks.length > 0 && (
                <div className="mt-4 h-px bg-border">
                  <div
                    className="h-px bg-ink transition-all duration-300"
                    style={{ width: `${(completedTasks / tasks.length) * 100}%` }}
                  />
                </div>
              )}

              {/* Add task */}
              <div className="mt-6 flex items-center gap-3 border-b border-border pb-2.5">
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
                  className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-opacity hover:opacity-60 disabled:opacity-30"
                >
                  Add
                </button>
              </div>

              {tasks.length === 0 ? (
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  No goals yet — add your first study goal above and start tracking today&apos;s progress.
                </p>
              ) : (
                <div>
                  {tasks.map((task) => (
                    <button
                      key={task.id}
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 border-b border-border/70 py-4 text-left"
                    >
                      {task.done ? (
                        <CheckCircle2 className="size-5 shrink-0 text-lavender" />
                      ) : (
                        <span className="size-4 shrink-0 rounded-full border border-muted-foreground/50" />
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Upcoming milestone
              </p>
              <h2 className="mt-2 text-[clamp(1.8rem,3vw,2.3rem)] leading-tight">Next checkpoint</h2>
              <div className="mt-5 border-t border-border pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {nextTargetDay}
                </p>
                <p className="mt-2.5 font-display text-xl leading-snug">
                  {profile.goal ? `${profile.goal} Mock Assessment` : "IGCSE Mock Test"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Prepare by testing past questions and reviewing your formula flashcards.
                </p>
                <Link
                  to="/test"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border decoration-1 underline-offset-8 transition-colors hover:decoration-foreground"
                >
                  Open Quizzes &amp; Tests <ArrowRight className="size-4" />
                </Link>
              </div>
              <Link
                to="/calendar"
                className="mt-6 flex items-center justify-between border-t border-border pt-5 text-sm font-medium hover:text-foreground/70"
              >
                Full revision calendar <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function BandStat({ value, label, divider }: { value: string; label: string; divider?: boolean }) {
  return (
    <div className={divider ? "sm:border-l sm:border-ink-foreground/15 sm:pl-6" : ""}>
      <strong className="block font-display text-[clamp(1.5rem,2.4vw,1.9rem)] font-normal leading-none">{value}</strong>
      <span className="mt-2 block text-[11px] uppercase tracking-[0.16em] text-ink-foreground/55">{label}</span>
    </div>
  );
}
