import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Plus,
  Trash2,
} from "lucide-react";

import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { ProfileAvatar } from "@/components/dashboard-page";

export const Route = createFileRoute("/study-plan")({
  head: () => ({
    meta: [
      { title: "Study Plan — set your own study sessions | ExamGlow" },
      {
        name: "description",
        content: "Plan your revision your way: add study sessions with dates, times and durations, then tick them off as you go.",
      },
      { property: "og:title", content: "Study Plan | ExamGlow" },
      { property: "og:description", content: "Set your own study sessions and track them as you go." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudyPlanPage,
});

type Session = {
  id: string;
  title: string;
  date: string;
  time: string;
  minutes: number;
  done: boolean;
};

const KEY = "examglow.study-plan";
const minutesOptions = [15, 30, 45, 60, 90, 120];

function loadSessions(): Session[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session[]) : [];
  } catch {
    return [];
  }
}

function prettyDate(iso: string) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" });
}

function StudyPlanPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState(60);

  useEffect(() => setSessions(loadSessions()), []);

  function persist(next: Session[]) {
    setSessions(next);
    try {
      window.localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* storage unavailable */
    }
  }

  function addSession() {
    const trimmed = title.trim();
    if (!trimmed || !date) return;
    const next = [
      ...sessions,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        title: trimmed,
        date,
        time,
        minutes,
        done: false,
      },
    ].sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
    persist(next);
    setTitle("");
    setDate("");
    setTime("");
  }

  const completed = sessions.filter((s) => s.done).length;
  const upcoming = sessions.filter((s) => !s.done);

  const todayFormatted = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const fieldLabel =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground";
  const fieldInput =
    "w-full border-b border-border bg-transparent pb-2 text-[15px] text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors";

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
            Set your <span className="display-italic">study plan</span>
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            You decide what to study and when — add sessions and tick them off as you go.
          </p>

          {/* Composer */}
          <section className="mt-12">
            <div className="flex items-center gap-5">
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                New session
              </p>
              <span className="h-px min-w-0 flex-1 bg-border" aria-hidden />
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className={fieldLabel}>What are you studying?</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Revise cardiac cycle"
                  className={fieldInput}
                />
              </label>
              <label className="block">
                <span className={`${fieldLabel} flex items-center gap-2`}>
                  <CalendarDays className="size-3.5" aria-hidden /> Date
                </span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={fieldInput}
                />
              </label>
              <label className="block">
                <span className={`${fieldLabel} flex items-center gap-2`}>
                  <Clock3 className="size-3.5" aria-hidden /> Start time
                </span>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={fieldInput}
                />
              </label>
              <div className="sm:col-span-2">
                <span className={fieldLabel}>How long?</span>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {minutesOptions.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setMinutes(value)}
                      className={`border-b pb-1 text-sm tabular-nums transition-colors ${
                        minutes === value
                          ? "border-foreground font-semibold text-foreground"
                          : "border-border text-muted-foreground hover:border-foreground/50"
                      }`}
                    >
                      {value}m
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={addSession}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-90"
              >
                <Plus className="size-4" aria-hidden /> Add to my plan
              </button>
              {(!title.trim() || !date) && (
                <p className="text-sm text-muted-foreground">Give the session a name and a date.</p>
              )}
            </div>
          </section>

          {/* The plan */}
          <section className="mt-16">
            <div className="flex items-center gap-5">
              <p className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Your plan
              </p>
              <span className="h-px min-w-0 flex-1 bg-border" aria-hidden />
              {sessions.length > 0 && (
                <span className="shrink-0 text-sm text-muted-foreground">
                  {completed} of {sessions.length} complete
                </span>
              )}
            </div>

            {sessions.length === 0 ? (
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Nothing planned yet — add your first session above.
              </p>
            ) : (
              <ol className="mt-2">
                {sessions.map((session, i) => (
                  <li
                    key={session.id}
                    className="group grid grid-cols-[2.5rem_auto_minmax(0,1fr)_auto_auto] items-center gap-3 border-t border-border/70 py-5 sm:gap-5"
                  >
                    <span className="text-xs font-semibold tabular-nums tracking-[0.18em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        persist(sessions.map((s) => (s.id === session.id ? { ...s, done: !s.done } : s)))
                      }
                      aria-label={session.done ? "Mark session as not done" : "Mark session as done"}
                      className={`flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        session.done ? "border-lavender bg-lavender text-ink-foreground" : "border-muted-foreground/50 hover:border-foreground"
                      }`}
                    >
                      {session.done && <Check className="size-3.5" aria-hidden />}
                    </button>
                    <span className="min-w-0">
                      <span
                        className={`block truncate font-display text-[clamp(1.25rem,2.4vw,1.6rem)] leading-tight ${
                          session.done ? "text-muted-foreground line-through" : "text-foreground"
                        }`}
                      >
                        {session.title}
                      </span>
                      <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {prettyDate(session.date)}
                        {session.time ? ` · ${session.time}` : ""}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock3 className="size-3.5" aria-hidden />
                      {session.minutes}m
                    </span>
                    <button
                      type="button"
                      onClick={() => persist(sessions.filter((s) => s.id !== session.id))}
                      aria-label={`Delete ${session.title}`}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground opacity-0 transition-opacity hover:text-foreground focus:opacity-100 group-hover:opacity-100"
                    >
                      <Trash2 className="size-4" aria-hidden />
                    </button>
                  </li>
                ))}
                <span className="block h-px bg-border/70" aria-hidden />
              </ol>
            )}

            {upcoming.length > 0 && (
              <Link
                to="/calendar"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border decoration-1 underline-offset-8 transition-colors hover:decoration-foreground"
              >
                Full revision calendar <ArrowRight className="size-4" />
              </Link>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
