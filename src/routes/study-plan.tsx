import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Clock3,
  Filter,
  Flame,
  GraduationCap,
  Layers,
  Plus,
  Sparkles,
  Tag,
  Target,
  Trash2,
  Trophy,
  Zap,
} from "lucide-react";

import { DashboardLayout } from "@/components/dashboard-page";

export const Route = createFileRoute("/study-plan")({
  head: () => ({
    meta: [
      { title: "Study Plan & Revision Roadmap | ExamGlow" },
      {
        name: "description",
        content: "Plan your revision syllabus, set targeted study blocks, and track your weekly completion goals.",
      },
      { property: "og:title", content: "Study Plan | ExamGlow" },
      { property: "og:description", content: "Personalized syllabus study sessions and progress tracking." },
    ],
  }),
  component: StudyPlanPage,
});

type StudySession = {
  id: string;
  title: string;
  subject: string;
  date: string;
  time: string;
  minutes: number;
  priority: "high" | "medium" | "normal";
  done: boolean;
  notes?: string | undefined;
};

const STORAGE_KEY = "examglow.study_plan_sessions";

const DEFAULT_SESSIONS: StudySession[] = [
  {
    id: "s-1",
    title: "Revise Cardiac Cycle & Blood Vessels (Ch. 9)",
    subject: "Biology",
    date: new Date().toISOString().split("T")[0]!,
    time: "10:00",
    minutes: 45,
    priority: "high",
    done: true,
    notes: "Review pressure-volume graphs and double circulation",
  },
  {
    id: "s-2",
    title: "Kinematics & Newton's 2nd Law Past Paper Questions",
    subject: "Physics",
    date: new Date().toISOString().split("T")[0]!,
    time: "14:30",
    minutes: 60,
    priority: "high",
    done: false,
    notes: "Paper 4 structured questions 1 to 5",
  },
  {
    id: "s-3",
    title: "Stoichiometry & Mole Calculations Drill",
    subject: "Chemistry",
    date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]!,
    time: "11:00",
    minutes: 45,
    priority: "medium",
    done: false,
    notes: "Limiting reagent problems and percentage yields",
  },
  {
    id: "s-4",
    title: "Trigonometric Identities & Functions",
    subject: "Mathematics",
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]!,
    time: "16:00",
    minutes: 90,
    priority: "high",
    done: false,
    notes: "Exercise 5C and graph sketching",
  },
  {
    id: "s-5",
    title: "Market Failure & Government Intervention",
    subject: "Economics",
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]!,
    time: "09:30",
    minutes: 30,
    priority: "normal",
    done: false,
    notes: "Negative externalities diagrams and subsidies",
  },
];

const SUBJECT_THEMES: Record<string, { badge: string; text: string }> = {
  Biology: { badge: "bg-emerald-50 text-emerald-700 border-emerald-200", text: "text-emerald-700" },
  Physics: { badge: "bg-blue-50 text-blue-700 border-blue-200", text: "text-blue-700" },
  Chemistry: { badge: "bg-amber-50 text-amber-700 border-amber-200", text: "text-amber-700" },
  Mathematics: { badge: "bg-purple-50 text-purple-700 border-purple-200", text: "text-purple-700" },
  Economics: { badge: "bg-rose-50 text-rose-700 border-rose-200", text: "text-rose-700" },
  General: { badge: "bg-gray-50 text-gray-700 border-gray-200", text: "text-gray-700" },
};

function StudyPlanPage() {
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Biology");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]!);
  const [time, setTime] = useState("10:00");
  const [minutes, setMinutes] = useState(45);
  const [priority, setPriority] = useState<StudySession["priority"]>("medium");
  const [notes, setNotes] = useState("");

  const [filterSubject, setFilterSubject] = useState("All");
  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "completed">("all");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSessions(JSON.parse(saved));
      } else {
        setSessions(DEFAULT_SESSIONS);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_SESSIONS));
      }
    } catch {
      setSessions(DEFAULT_SESSIONS);
    }
  }, []);

  const saveSessions = (updated: StudySession[]) => {
    setSessions(updated);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const addSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !date) return;

    const newSession: StudySession = {
      id: `session-${Date.now()}`,
      title: title.trim(),
      subject,
      date,
      time,
      minutes,
      priority,
      done: false,
      notes: notes.trim() || undefined,
    };

    const next = [newSession, ...sessions].sort((a, b) =>
      `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)
    );
    saveSessions(next);
    setTitle("");
    setNotes("");
  };

  const toggleDone = (id: string) => {
    const next = sessions.map((s) => (s.id === id ? { ...s, done: !s.done } : s));
    saveSessions(next);
  };

  const deleteSession = (id: string) => {
    const next = sessions.filter((s) => s.id !== id);
    saveSessions(next);
  };

  const completedCount = sessions.filter((s) => s.done).length;
  const totalMinutes = sessions.reduce((acc, s) => acc + (s.done ? s.minutes : 0), 0);
  const plannedMinutes = sessions.reduce((acc, s) => acc + s.minutes, 0);
  const progressPercent = sessions.length > 0 ? Math.round((completedCount / sessions.length) * 100) : 0;

  const filteredSessions = sessions.filter((s) => {
    if (filterSubject !== "All" && s.subject !== filterSubject) return false;
    if (filterStatus === "pending" && s.done) return false;
    if (filterStatus === "completed" && !s.done) return false;
    return true;
  });

  return (
    <DashboardLayout crumbs={[{ label: "Study Plan" }]}>
      <div className="mx-auto max-w-[1240px] py-1">
        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Personalized Roadmap
              </span>
              <span className="size-1 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-emerald-600">Active Syllabus</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-1">
              Study Plan &amp; Revision Goals
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-700">
              <Flame className="size-4 text-amber-600 fill-amber-500" />
              <span>5 Day Streak</span>
            </div>
          </div>
        </header>

        {/* Goal Progress Bar & Metrics */}
        <section className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-3xl border border-border/80 bg-card p-5 shadow-xs">
            <span className="text-xs font-semibold text-muted-foreground block">Weekly Completion</span>
            <div className="mt-2 flex items-baseline justify-between">
              <strong className="text-3xl font-extrabold text-foreground">{progressPercent}%</strong>
              <span className="text-xs font-semibold text-muted-foreground">{completedCount}/{sessions.length} Sessions</span>
            </div>
            <div className="mt-3 h-2 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-foreground transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card p-5 shadow-xs">
            <span className="text-xs font-semibold text-muted-foreground block">Study Time Logged</span>
            <div className="mt-2 flex items-baseline justify-between">
              <strong className="text-3xl font-extrabold text-foreground">
                {(totalMinutes / 60).toFixed(1)}h
              </strong>
              <span className="text-xs font-semibold text-muted-foreground">of {(plannedMinutes / 60).toFixed(1)}h planned</span>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground flex items-center gap-1">
              <Clock className="size-3 text-emerald-600" />
              On track for 15h weekly goal
            </p>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card p-5 shadow-xs">
            <span className="text-xs font-semibold text-muted-foreground block">Upcoming Checkpoint</span>
            <div className="mt-2">
              <strong className="text-lg font-bold text-foreground block truncate">
                Cambridge IGCSE Mock
              </strong>
              <span className="text-xs font-semibold text-rose-600 block mt-0.5">Paper 2 &bull; In 4 Days</span>
            </div>
            <Link
              to="/calendar"
              className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:underline"
            >
              View in Calendar <ArrowRight className="size-3" />
            </Link>
          </div>

          <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-[#FFD634]/20 to-amber-500/10 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                <Sparkles className="size-3.5 text-amber-600" /> Exam Strategy
              </span>
              <p className="mt-1 text-xs text-amber-950 leading-snug">
                Active recall + 45-minute spaced intervals improve exam scores by 2.3 letter grades.
              </p>
            </div>
            <Link
              to="/test"
              className="inline-flex items-center gap-1 text-xs font-bold text-foreground underline underline-offset-4"
            >
              Practice Exam Questions <ArrowRight className="size-3" />
            </Link>
          </div>
        </section>

        {/* Main 2-Column: Composer + Session List */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Left: Schedule New Session (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl border border-border/80 bg-card p-6 shadow-xs h-fit">
            <div className="flex items-center justify-between pb-3 border-b border-border/70">
              <h3 className="text-base font-bold text-foreground">Add Study Session</h3>
              <span className="text-[11px] font-semibold text-muted-foreground">Set topic &amp; time</span>
            </div>

            <form onSubmit={addSession} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  What topic are you studying?
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Photosynthesis & Light Reactions"
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-border"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-border"
                  >
                    <option value="Biology">Biology</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Economics">Economics</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Priority</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-border"
                  >
                    <option value="high">🔥 High Priority</option>
                    <option value="medium">⚡ Medium</option>
                    <option value="normal">Normal</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-border"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1">Start Time</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">
                  Session Duration
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[25, 45, 60, 90].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMinutes(m)}
                      className={`rounded-xl py-2 text-xs font-bold transition cursor-pointer border ${
                        minutes === m
                          ? "bg-foreground text-background border-foreground shadow-xs"
                          : "border-border bg-card text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {m} min
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Key Revision Notes / Goals
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Memorize formulas and solve 5 past paper questions."
                  className="w-full rounded-xl border border-border bg-background p-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-border"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-foreground py-2.5 text-xs font-bold text-background hover:opacity-90 transition shadow-xs cursor-pointer"
              >
                <Plus className="size-4" /> Add to Study Schedule
              </button>
            </form>
          </div>

          {/* Right: Active Sessions Timeline (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-border/80 bg-card p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/70">
                <div>
                  <h3 className="text-base font-bold text-foreground">Scheduled Sessions</h3>
                  <p className="text-xs text-muted-foreground">Tick off topics as you finish them</p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setFilterStatus("all")}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                      filterStatus === "all" ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterStatus("pending")}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                      filterStatus === "pending" ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Pending ({sessions.filter((s) => !s.done).length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterStatus("completed")}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                      filterStatus === "completed" ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Done ({completedCount})
                  </button>
                </div>
              </div>

              {/* Session List */}
              <div className="mt-4 space-y-3 max-h-[580px] overflow-y-auto pr-1">
                {filteredSessions.length === 0 ? (
                  <div className="py-12 text-center text-xs text-muted-foreground">
                    No study sessions match the filter. Add your next topic on the left!
                  </div>
                ) : (
                  filteredSessions.map((session) => {
                    const theme = (SUBJECT_THEMES[session.subject] ?? SUBJECT_THEMES["General"])!;
                    return (
                      <div
                        key={session.id}
                        className={`group flex items-start gap-3.5 p-3.5 rounded-2xl border transition ${
                          session.done
                            ? "bg-muted/40 border-border/50 opacity-75"
                            : "bg-card border-border/80 shadow-xs hover:border-border"
                        }`}
                      >
                        {/* Checkbox */}
                        <button
                          type="button"
                          onClick={() => toggleDone(session.id)}
                          className={`size-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition cursor-pointer ${
                            session.done
                              ? "bg-foreground border-foreground text-background"
                              : "border-border hover:border-foreground text-transparent"
                          }`}
                        >
                          <Check className="size-3.5" />
                        </button>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-md px-2 py-0.5 text-[10px] font-bold border ${theme.badge}`}
                            >
                              {session.subject}
                            </span>
                            {session.priority === "high" && !session.done && (
                              <span className="rounded-md bg-rose-500/10 border border-rose-500/30 px-1.5 py-0.5 text-[10px] font-bold text-rose-500">
                                High Priority
                              </span>
                            )}
                            <span className="text-[11px] font-medium text-muted-foreground ml-auto flex items-center gap-1">
                              <Clock className="size-3" />
                              {session.minutes} mins
                            </span>
                          </div>

                          <h4
                            className={`text-sm font-bold mt-1 leading-snug ${
                              session.done ? "line-through text-muted-foreground" : "text-foreground"
                            }`}
                          >
                            {session.title}
                          </h4>

                          {session.notes && (
                            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{session.notes}</p>
                          )}

                          <div className="mt-2 flex items-center gap-3 text-[11px] text-muted-foreground">
                            <span>📅 {session.date} at {session.time}</span>
                          </div>
                        </div>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => deleteSession(session.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-rose-500 transition cursor-pointer"
                          title="Delete session"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-border/70 flex items-center justify-between text-xs text-muted-foreground">
              <span>Tip: Completing 3 sessions daily maintains a distinction trajectory.</span>
              <Link to="/calendar" className="font-semibold text-foreground hover:underline flex items-center gap-1">
                Open Calendar <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
