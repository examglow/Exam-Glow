import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  Plus,
  Trash2,
  X,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Filter,
  Layers,
  Sparkles,
} from "lucide-react";

import { DashboardLayout } from "@/components/dashboard-page";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Study & Exam Calendar | ExamGlow" },
      {
        name: "description",
        content: "Plan your revision schedule, track exam deadlines and optimize your weekly study hours.",
      },
      { property: "og:title", content: "Calendar | ExamGlow" },
      { property: "og:description", content: "Plan exams and study sessions week by week." },
    ],
  }),
  component: CalendarPage,
});

type CalendarEvent = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  startTime: string; // "09:00"
  durationHours: number;
  type: "exam" | "study" | "assignment" | "lecture";
  subject: string;
  notes?: string | undefined;
};

const STORAGE_KEY = "examglow.calendar_events";

const DEFAULT_EVENTS: CalendarEvent[] = [
  {
    id: "evt-1",
    title: "Cambridge IGCSE Biology Mock Test",
    date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]!,
    startTime: "09:00",
    durationHours: 2,
    type: "exam",
    subject: "Biology",
    notes: "Paper 2 Multiple Choice & Paper 4 Theory",
  },
  {
    id: "evt-2",
    title: "Physics Kinematics Revision & Past Papers",
    date: new Date().toISOString().split("T")[0]!,
    startTime: "11:00",
    durationHours: 1.5,
    type: "study",
    subject: "Physics",
    notes: "Review formulas and complete 10 past questions",
  },
  {
    id: "evt-3",
    title: "Organic Chemistry Mechanism Assignment",
    date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]!,
    startTime: "14:00",
    durationHours: 1,
    type: "assignment",
    subject: "Chemistry",
    notes: "Submit diagrams to teacher portal",
  },
  {
    id: "evt-4",
    title: "Mathematics Calculus & Trig Deep Work",
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]!,
    startTime: "16:00",
    durationHours: 2,
    type: "study",
    subject: "Mathematics",
    notes: "Solve exercise 4B & 4C",
  },
  {
    id: "evt-5",
    title: "Economics Past Paper 1 Review",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]!,
    startTime: "10:00",
    durationHours: 1.5,
    type: "exam",
    subject: "Economics",
    notes: "Section A data response questions",
  },
];

const SUBJECT_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Biology: { bg: "bg-emerald-50 dark:bg-emerald-950/40", text: "text-emerald-700 dark:text-emerald-300", border: "border-emerald-300" },
  Physics: { bg: "bg-blue-50 dark:bg-blue-950/40", text: "text-blue-700 dark:text-blue-300", border: "border-blue-300" },
  Chemistry: { bg: "bg-amber-50 dark:bg-amber-950/40", text: "text-amber-700 dark:text-amber-300", border: "border-amber-300" },
  Mathematics: { bg: "bg-purple-50 dark:bg-purple-950/40", text: "text-purple-700 dark:text-purple-300", border: "border-purple-300" },
  Economics: { bg: "bg-rose-50 dark:bg-rose-950/40", text: "text-rose-700 dark:text-rose-300", border: "border-rose-300" },
  General: { bg: "bg-gray-50 dark:bg-gray-900", text: "text-gray-700 dark:text-gray-300", border: "border-gray-300" },
};

function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"week" | "month" | "day">("week");
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<string>("All");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newEventDate, setNewEventDate] = useState(new Date().toISOString().split("T")[0]!);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventType, setNewEventType] = useState<CalendarEvent["type"]>("study");
  const [newEventSubject, setNewEventSubject] = useState("Biology");
  const [newEventTime, setNewEventTime] = useState("10:00");
  const [newEventDuration, setNewEventDuration] = useState("1.5");
  const [newEventNotes, setNewEventNotes] = useState("");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setEvents(JSON.parse(saved));
      } else {
        setEvents(DEFAULT_EVENTS);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_EVENTS));
      }
    } catch {
      setEvents(DEFAULT_EVENTS);
    }
  }, []);

  const saveEventsList = (updated: CalendarEvent[]) => {
    setEvents(updated);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEventTitle.trim()) return;

    const newEvt: CalendarEvent = {
      id: `evt-${Date.now()}`,
      title: newEventTitle.trim(),
      date: newEventDate,
      startTime: newEventTime,
      durationHours: parseFloat(newEventDuration) || 1,
      type: newEventType,
      subject: newEventSubject,
      notes: newEventNotes.trim() || undefined,
    };

    const next = [...events, newEvt];
    saveEventsList(next);
    setNewEventTitle("");
    setNewEventNotes("");
    setAddModalOpen(false);
  };

  const handleDeleteEvent = (id: string) => {
    const next = events.filter((e) => e.id !== id);
    saveEventsList(next);
  };

  // Date Navigation Helpers
  const navigateDate = (step: number) => {
    const next = new Date(currentDate);
    if (viewMode === "month") {
      next.setMonth(next.getMonth() + step);
    } else if (viewMode === "week") {
      next.setDate(next.getDate() + step * 7);
    } else {
      next.setDate(next.getDate() + step);
    }
    setCurrentDate(next);
  };

  const jumpToToday = () => {
    setCurrentDate(new Date());
  };

  // Compute week dates
  const startOfWeek = new Date(currentDate);
  const dayOfWeek = startOfWeek.getDay();
  startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek);

  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(d.getDate() + i);
    const dateStr = d.toISOString().split("T")[0]!;
    const isToday = new Date().toISOString().split("T")[0] === dateStr;
    const isSelected = currentDate.toISOString().split("T")[0] === dateStr;
    return {
      name: d.toLocaleDateString("en-US", { weekday: "short" }),
      dateNum: d.getDate(),
      fullDate: d,
      dateStr,
      isToday,
      isSelected,
    };
  });

  // Hours for timetable
  const hours = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  const filteredEvents = events.filter((e) =>
    selectedSubject === "All" ? true : e.subject === selectedSubject
  );

  const upcomingExams = events
    .filter((e) => e.type === "exam")
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <DashboardLayout crumbs={[{ label: "Calendar & Schedule" }]}>
      <div className="space-y-6">
        {/* ================= CALENDAR TOP HEADER ================= */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl bg-white p-5 border border-border/70 shadow-xs">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={jumpToToday}
              className="rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-semibold text-gray-800 hover:bg-gray-100 transition cursor-pointer"
            >
              Today
            </button>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => navigateDate(-1)}
                className="size-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 transition cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => navigateDate(1)}
                className="size-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center text-gray-600 hover:bg-gray-50 transition cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="flex rounded-xl bg-gray-100 p-1 text-xs font-semibold text-gray-600">
              <button
                type="button"
                onClick={() => setViewMode("day")}
                className={`rounded-lg px-3 py-1.5 transition cursor-pointer ${
                  viewMode === "day" ? "bg-white text-black shadow-xs" : "hover:text-black"
                }`}
              >
                Day
              </button>
              <button
                type="button"
                onClick={() => setViewMode("week")}
                className={`rounded-lg px-3 py-1.5 transition cursor-pointer ${
                  viewMode === "week" ? "bg-white text-black shadow-xs" : "hover:text-black"
                }`}
              >
                Week
              </button>
              <button
                type="button"
                onClick={() => setViewMode("month")}
                className={`rounded-lg px-3 py-1.5 transition cursor-pointer ${
                  viewMode === "month" ? "bg-white text-black shadow-xs" : "hover:text-black"
                }`}
              >
                Month
              </button>
            </div>

            {/* Subject Filter */}
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none"
            >
              <option value="All">All Subjects</option>
              <option value="Biology">Biology</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Economics">Economics</option>
            </select>

            {/* Add Event Button */}
            <button
              type="button"
              onClick={() => {
                setNewEventDate(currentDate.toISOString().split("T")[0]!);
                setAddModalOpen(true);
              }}
              className="flex items-center gap-1.5 rounded-xl bg-black px-4 py-2 text-xs font-semibold text-white hover:bg-gray-800 transition cursor-pointer shadow-xs"
            >
              <Plus className="size-4" />
              <span>Schedule</span>
            </button>
          </div>
        </header>

        {/* ================= CALENDAR MAIN CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Mini Overview & Deadlines (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Stats Tile */}
            <div className="rounded-3xl border border-border/80 bg-white p-5 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Weekly Study Summary
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-gray-50 p-3.5">
                  <span className="text-2xl font-bold text-gray-900 block leading-tight">
                    {events.length}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">Scheduled Sessions</span>
                </div>
                <div className="rounded-2xl bg-gray-50 p-3.5">
                  <span className="text-2xl font-bold text-gray-900 block leading-tight">
                    {upcomingExams.length}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">Active Exams</span>
                </div>
              </div>
            </div>

            {/* Upcoming Exams & Checkpoints */}
            <div className="rounded-3xl border border-border/80 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  <GraduationCap className="size-4 text-rose-500" />
                  Upcoming Exams
                </h3>
                <span className="text-[11px] font-semibold text-gray-400">{upcomingExams.length} Total</span>
              </div>

              <div className="mt-3 space-y-2.5">
                {upcomingExams.length === 0 ? (
                  <p className="py-4 text-center text-xs text-gray-400">No exams scheduled yet.</p>
                ) : (
                  upcomingExams.map((exam) => {
                    const daysUntil = Math.ceil(
                      (new Date(exam.date).getTime() - new Date().setHours(0, 0, 0, 0)) /
                        (1000 * 60 * 60 * 24)
                    );
                    return (
                      <div
                        key={exam.id}
                        className="rounded-2xl border border-gray-100 p-3 bg-gray-50/60 flex items-start justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <span className="inline-block rounded-md bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-700">
                            {daysUntil === 0
                              ? "Today!"
                              : daysUntil > 0
                              ? `In ${daysUntil} days`
                              : "Passed"}
                          </span>
                          <h4 className="mt-1 text-xs font-bold text-gray-900 truncate">{exam.title}</h4>
                          <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                            <Clock className="size-3 text-gray-400" /> {exam.date} at {exam.startTime}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleDeleteEvent(exam.id)}
                          className="text-gray-300 hover:text-rose-500 p-1"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Revision Technique Tip */}
            <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-[#FFD634]/15 to-amber-500/5 p-5 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                <Sparkles className="size-4 text-amber-600" />
                <span>Spaced Repetition Tip</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-gray-700">
                Schedule short 25-minute study intervals separated by 5-minute rest breaks. Reviewing newly learned formulas after 24 hours increases retention up to 80%.
              </p>
            </div>
          </aside>

          {/* Right Main Calendar View (8 cols) */}
          <main className="lg:col-span-8 rounded-3xl border border-border/80 bg-white p-5 shadow-xs min-h-[600px] flex flex-col justify-between">
            {/* WEEK VIEW */}
            {viewMode === "week" && (
              <div className="flex-1 overflow-x-auto">
                {/* Day Header Row */}
                <div className="grid grid-cols-7 border-b border-gray-200 pb-3 min-w-[600px] text-center">
                  {weekDays.map((day) => (
                    <div
                      key={day.dateStr}
                      onClick={() => {
                        setCurrentDate(day.fullDate);
                      }}
                      className="cursor-pointer group"
                    >
                      <span className="block text-xs font-bold uppercase text-gray-400 group-hover:text-black">
                        {day.name}
                      </span>
                      <span
                        className={`mx-auto mt-1 flex size-8 items-center justify-center rounded-full text-sm font-semibold transition ${
                          day.isToday
                            ? "bg-black text-white"
                            : day.isSelected
                            ? "bg-gray-200 text-black"
                            : "text-gray-700 group-hover:bg-gray-100"
                        }`}
                      >
                        {day.dateNum}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Day Event Columns */}
                <div className="grid grid-cols-7 min-w-[600px] divide-x divide-gray-100 min-h-[480px] pt-3">
                  {weekDays.map((day) => {
                    const dayEvents = filteredEvents.filter((e) => e.date === day.dateStr);
                    return (
                      <div
                        key={day.dateStr}
                        onClick={() => {
                          setNewEventDate(day.dateStr);
                          setAddModalOpen(true);
                        }}
                        className="px-1.5 py-1 min-h-[420px] hover:bg-gray-50/50 transition cursor-pointer space-y-2"
                      >
                        {dayEvents.map((evt) => {
                          const style = (SUBJECT_COLORS[evt.subject] ?? SUBJECT_COLORS["General"])!;
                          return (
                            <div
                              key={evt.id}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className={`p-2 rounded-xl border text-xs shadow-xs transition relative group ${style.bg} ${style.border}`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-[10px] font-bold uppercase ${style.text}`}>
                                  {evt.subject}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteEvent(evt.id)}
                                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-rose-500"
                                >
                                  <X className="size-3" />
                                </button>
                              </div>
                              <h5 className="font-bold text-gray-900 leading-snug line-clamp-2 mt-0.5">
                                {evt.title}
                              </h5>
                              <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
                                <Clock className="size-3" />
                                <span>{evt.startTime} ({evt.durationHours}h)</span>
                              </div>
                            </div>
                          );
                        })}
                        {dayEvents.length === 0 && (
                          <div className="h-full flex items-center justify-center opacity-0 hover:opacity-100 text-[10px] text-gray-400">
                            + Add
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* MONTH VIEW */}
            {viewMode === "month" && (
              <div className="flex-1">
                <div className="grid grid-cols-7 border-b border-gray-200 pb-2 text-center text-xs font-bold text-gray-400 uppercase">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                <div className="grid grid-cols-7 border-l border-t border-gray-100 min-h-[480px]">
                  {Array.from({ length: 35 }).map((_, idx) => {
                    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
                    const dayNum = idx - firstDay + 1;
                    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
                    const isCurrentMonth = dayNum > 0 && dayNum <= daysInMonth;

                    const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNum);
                    const dateStr = dateObj.toISOString().split("T")[0]!;
                    const dayEvents = isCurrentMonth
                      ? filteredEvents.filter((e) => e.date === dateStr)
                      : [];
                    const isToday =
                      isCurrentMonth && new Date().toISOString().split("T")[0] === dateStr;

                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          if (isCurrentMonth) {
                            setNewEventDate(dateStr);
                            setAddModalOpen(true);
                          }
                        }}
                        className={`min-h-[90px] p-1.5 border-r border-b border-gray-100 transition cursor-pointer ${
                          isCurrentMonth ? "bg-white hover:bg-gray-50" : "bg-gray-50/50 text-gray-300"
                        }`}
                      >
                        {isCurrentMonth && (
                          <>
                            <span
                              className={`flex size-6 items-center justify-center rounded-full text-xs font-semibold ${
                                isToday ? "bg-black text-white" : "text-gray-700"
                              }`}
                            >
                              {dayNum}
                            </span>
                            <div className="mt-1 space-y-1">
                              {dayEvents.slice(0, 2).map((evt) => (
                                <div
                                  key={evt.id}
                                  className="truncate rounded px-1 py-0.5 text-[10px] font-medium bg-gray-100 text-gray-800"
                                >
                                  {evt.title}
                                </div>
                              ))}
                              {dayEvents.length > 2 && (
                                <span className="text-[9px] text-gray-400 block">
                                  +{dayEvents.length - 2} more
                                </span>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* DAY VIEW */}
            {viewMode === "day" && (
              <div className="flex-1 space-y-4">
                <div className="p-3 bg-gray-50 rounded-2xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">
                      {currentDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {filteredEvents.filter((e) => e.date === currentDate.toISOString().split("T")[0]).length} sessions scheduled today
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setNewEventDate(currentDate.toISOString().split("T")[0]!);
                      setAddModalOpen(true);
                    }}
                    className="flex items-center gap-1 rounded-xl bg-black px-3 py-1.5 text-xs font-semibold text-white cursor-pointer"
                  >
                    <Plus className="size-3.5" /> Add to Today
                  </button>
                </div>

                <div className="divide-y divide-gray-100 space-y-2">
                  {hours.map((hour) => {
                    const hourEvents = filteredEvents.filter(
                      (e) =>
                        e.date === currentDate.toISOString().split("T")[0] &&
                        e.startTime.startsWith(hour.slice(0, 2))
                    );
                    return (
                      <div key={hour} className="flex gap-4 py-3">
                        <span className="w-14 shrink-0 text-xs font-bold text-gray-400 font-mono">
                          {hour}
                        </span>
                        <div className="flex-1">
                          {hourEvents.length === 0 ? (
                            <span className="text-xs text-gray-300 italic">Free study window</span>
                          ) : (
                            hourEvents.map((evt) => (
                              <div
                                key={evt.id}
                                className="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-between"
                              >
                                <div>
                                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-black text-white">
                                    {evt.subject}
                                  </span>
                                  <h4 className="font-bold text-sm text-gray-900 mt-1">{evt.title}</h4>
                                  {evt.notes && <p className="text-xs text-gray-500 mt-0.5">{evt.notes}</p>}
                                </div>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteEvent(evt.id)}
                                  className="text-gray-400 hover:text-rose-500 p-1"
                                >
                                  <Trash2 className="size-4" />
                                </button>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ================= ADD EVENT MODAL ================= */}
      {addModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-gray-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">Schedule Study or Exam</h3>
              <button
                type="button"
                onClick={() => setAddModalOpen(false)}
                className="size-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={handleAddEvent} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Session / Exam Title</label>
                <input
                  type="text"
                  required
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  placeholder="e.g., Biology Past Paper Review"
                  className="w-full rounded-xl border border-gray-200 px-3.5 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                  <select
                    value={newEventSubject}
                    onChange={(e) => setNewEventSubject(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
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
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Type</label>
                  <select
                    value={newEventType}
                    onChange={(e) => setNewEventType(e.target.value as any)}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                  >
                    <option value="study">Study Session</option>
                    <option value="exam">Official Exam / Test</option>
                    <option value="assignment">Assignment Deadline</option>
                    <option value="lecture">Class / Lecture</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    required
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Start Time</label>
                  <input
                    type="time"
                    required
                    value={newEventTime}
                    onChange={(e) => setNewEventTime(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Preparation Notes / Syllabus Chapters</label>
                <textarea
                  rows={2}
                  value={newEventNotes}
                  onChange={(e) => setNewEventNotes(e.target.value)}
                  placeholder="e.g., Focus on Chapter 3 & 4. Review formula sheet beforehand."
                  className="w-full rounded-xl border border-gray-200 p-2.5 text-xs text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setAddModalOpen(false)}
                  className="rounded-xl px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-black px-5 py-2 text-xs font-semibold text-white hover:bg-gray-800 transition shadow-xs cursor-pointer"
                >
                  Save to Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
