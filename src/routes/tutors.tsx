import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Flag,
  Globe,
  GraduationCap,
  Lock,
  Plus,
  Search,
  ShieldCheck,
  Star,
  User,
  Users,
  Video,
  X,
  FileCheck,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  Sparkles,
  ShieldAlert,
  UserCheck,
  HeartHandshake,
  Receipt,
  RotateCcw,
  Eye,
  Check,
  Settings,
  HelpCircle,
  BadgeAlert,
  ArrowRight,
} from "lucide-react";

import { DashboardLayout } from "@/components/dashboard-page";
import {
  getTutors,
  saveTutorProfile,
  addTutorReview,
  createBooking,
  getBookings,
  approveBooking,
  cancelBooking,
  requestRefund,
  getSafetyProfile,
  updateSafetyProfile,
  linkGuardian,
  createSafeguardingReport,
  getSafeguardingReports,
  type TutorProfile,
  type LessonBooking,
  type StudentSafetyProfile,
  type GuardianInfo,
  type SafeguardingReport,
} from "@/lib/tutors-store";

export const Route = createFileRoute("/tutors")({
  head: () => ({
    meta: [
      { title: "Online Cambridge Tutors & Guardian Safety Hub | ExamGlow" },
      {
        name: "description",
        content:
          "Browse verified Cambridge tutors online with complete parent/guardian oversight, age-based approval safeguards, and zero private contact sharing.",
      },
    ],
  }),
  component: OnlineTutoringPage,
});

type ActiveTab = "tutors" | "guardian_portal" | "bookings" | "safeguarding";

function OnlineTutoringPage() {
  const [tutors, setTutors] = useState<TutorProfile[]>([]);
  const [bookings, setBookings] = useState<LessonBooking[]>([]);
  const [safetyProfile, setSafetyProfile] = useState<StudentSafetyProfile>(getSafetyProfile());
  const [activeTab, setActiveTab] = useState<ActiveTab>("tutors");

  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [sortBy, setSortBy] = useState<"rating" | "price-low" | "price-high" | "reviews">("rating");

  // Modals
  const [bookingTutor, setBookingTutor] = useState<TutorProfile | null>(null);
  const [reviewsTutor, setReviewsTutor] = useState<TutorProfile | null>(null);
  const [reportingTutor, setReportingTutor] = useState<TutorProfile | null>(null);
  const [showTutorSetup, setShowTutorSetup] = useState(false);
  const [showAgeSettings, setShowAgeSettings] = useState(false);

  useEffect(() => {
    refreshAll();
  }, []);

  const refreshAll = () => {
    setTutors(getTutors());
    setBookings(getBookings());
    setSafetyProfile(getSafetyProfile());
  };

  const subjects = [
    "All",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Economics",
    "Computer Science",
  ];

  const filtered = tutors
    .filter((t) => {
      const matchSub =
        selectedSubject === "All" ||
        t.subject.toLowerCase() === selectedSubject.toLowerCase();
      const matchSearch =
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.headline.toLowerCase().includes(search.toLowerCase()) ||
        t.subject.toLowerCase().includes(search.toLowerCase()) ||
        t.qualifications.toLowerCase().includes(search.toLowerCase());
      return matchSub && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.hourlyRate - b.hourlyRate;
      if (sortBy === "price-high") return b.hourlyRate - a.hourlyRate;
      if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
      return b.rating - a.rating;
    });

  const pendingGuardianBookings = bookings.filter(
    (b) => b.status === "pending_guardian_approval"
  );

  return (
    <DashboardLayout crumbs={[{ label: "Tutors" }, { label: "Online Tutoring & Parent Safety" }]}>
      <div className="w-full py-2 space-y-6">
        {/* Top Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-border/70">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Video className="size-4" />
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Online-Only Tutoring &amp; Child Safeguarding
              </p>
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              Cambridge Online Tutoring Hub
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-2xl">
              1-on-1 online tutoring for Cambridge IGCSE and A-Levels. Complete parent/guardian consent, age-appropriate approvals, transparent prices, and zero private contact sharing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            {/* Guardian & Student Age pill */}
            <button
              type="button"
              onClick={() => setShowAgeSettings(true)}
              className="flex items-center gap-2 rounded-2xl border border-primary/30 bg-primary/5 px-3.5 py-2 text-xs font-semibold text-foreground hover:bg-primary/10 transition-colors shadow-xs"
            >
              <UserCheck className="size-4 text-primary" />
              <span>
                Student: <strong>Age {safetyProfile.studentAge}</strong> ·{" "}
                {safetyProfile.studentAge < 14
                  ? "Junior (Approval Req.)"
                  : safetyProfile.studentAge < 18
                  ? "Teen (Guardian Linked)"
                  : "Adult (18+)"}
              </span>
              <Settings className="size-3 text-muted-foreground ml-1" />
            </button>

            <Link
              to="/tutor-signup"
              className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-bold text-ink-foreground hover:opacity-90 transition-all shadow-xs"
            >
              <GraduationCap className="size-4" /> Tutor Portal &rarr;
            </Link>
          </div>
        </header>

        {/* Navigation Tabs (All 4 Primary Views) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/60 pb-3">
          <button
            type="button"
            onClick={() => setActiveTab("tutors")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === "tutors"
                ? "bg-foreground text-background shadow-xs"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <GraduationCap className="size-4" /> Browse Verified Tutors ({tutors.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("guardian_portal")}
            className={`relative flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === "guardian_portal"
                ? "bg-foreground text-background shadow-xs"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <HeartHandshake className="size-4 text-primary" /> Parent &amp; Guardian Oversight
            {pendingGuardianBookings.length > 0 && (
              <span className="flex size-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-black text-white animate-pulse">
                {pendingGuardianBookings.length}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("bookings")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === "bookings"
                ? "bg-foreground text-background shadow-xs"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <Calendar className="size-4" /> Scheduled Lessons ({bookings.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("safeguarding")}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-bold transition-all ${
              activeTab === "safeguarding"
                ? "bg-foreground text-background shadow-xs"
                : "border border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            <ShieldCheck className="size-4 text-emerald-500" /> Safety &amp; Safeguarding Charter
          </button>
        </div>

        {/* ─── TAB 1: BROWSE TUTORS ────────────────────────────────────────── */}
        {activeTab === "tutors" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Safety Guarantee Banner */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.05] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="size-10 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-foreground flex items-center gap-2">
                    Online-Only Safety Commitment
                    <span className="rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 text-[10px] uppercase font-bold">
                      Strict Policy
                    </span>
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed max-w-2xl">
                    All tutoring sessions take place exclusively online in encrypted video classrooms. Tutors and students are prohibited from exchanging personal phone numbers, home addresses, or private messaging channels.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1 rounded-full bg-card border border-border px-3 py-1 text-[11px] font-semibold text-foreground">
                  <Lock className="size-3 text-emerald-500" /> Zero Contact Sharing
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-card border border-border px-3 py-1 text-[11px] font-semibold text-foreground">
                  <Eye className="size-3 text-primary" /> Guardian Oversight Active
                </span>
              </div>
            </div>

            {/* Search & Subject Filters */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by tutor name, subject (e.g. Mathematics, Physics), degree or topic..."
                    className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground/50 focus:outline-none shadow-xs"
                  />
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="rounded-full border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground focus:outline-none"
                  >
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span className="text-xs font-semibold text-muted-foreground mr-1">Subject:</span>
                {subjects.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSelectedSubject(sub)}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                      selectedSubject === sub
                        ? "bg-foreground text-background shadow-xs font-bold"
                        : "border border-border bg-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Tutors Grid (Matches wireframe in uploaded image) */}
            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-border bg-card p-12 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
                  <GraduationCap className="size-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  No tutors registered in this category yet
                </h3>
                <p className="mt-1.5 max-w-md mx-auto text-xs text-muted-foreground leading-relaxed">
                  Qualified Cambridge educators can register their profile and begin accepting online bookings through the Tutor Portal.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {selectedSubject !== "All" && (
                    <button
                      type="button"
                      onClick={() => setSelectedSubject("All")}
                      className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold hover:bg-muted"
                    >
                      View all subjects
                    </button>
                  )}
                  <Link
                    to="/tutor-signup"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-xs font-semibold text-background hover:opacity-90"
                  >
                    Register as a Cambridge Tutor &rarr;
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((tutor) => (
                  <TutorProfileCard
                    key={tutor.id}
                    tutor={tutor}
                    studentAge={safetyProfile.studentAge}
                    guardianName={safetyProfile.guardian?.name}
                    onBook={() => setBookingTutor(tutor)}
                    onViewReviews={() => setReviewsTutor(tutor)}
                    onReport={() => setReportingTutor(tutor)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── TAB 2: PARENT & GUARDIAN OVERSIGHT HUB ─────────────────────── */}
        {activeTab === "guardian_portal" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Guardian Link & Status Card */}
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
                <div className="flex items-start gap-3.5">
                  <div className="size-12 rounded-2xl bg-muted text-foreground flex items-center justify-center shrink-0 font-bold text-lg">
                    <HeartHandshake className="size-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-foreground">
                        Parent &amp; Guardian Oversight Portal
                      </h2>
                      {safetyProfile.guardian ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-700 dark:text-emerald-400">
                          <CheckCircle2 className="size-3" /> Guardian Linked
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-500/15 border border-neutral-500/30 px-2.5 py-0.5 text-[10.5px] font-bold text-neutral-600 dark:text-neutral-400">
                          No Guardian Linked
                        </span>
                      )}
                    </div>
                    {safetyProfile.guardian ? (
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        Linked Guardian: <strong className="text-foreground">{safetyProfile.guardian.name}</strong> ({safetyProfile.guardian.relation}) · Email: <span className="font-mono">{safetyProfile.guardian.email}</span>
                      </p>
                    ) : (
                      <p className="mt-1 text-xs text-amber-700 dark:text-amber-400 leading-relaxed font-medium">
                        No guardian account linked yet. Link a parent or guardian below to enable booking approvals.
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAgeSettings(true)}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-foreground hover:bg-muted self-start sm:self-center"
                >
                  <Settings className="size-3.5 text-primary" /> Edit Guardian Permissions
                </button>
              </div>

              {/* Age-tier Safeguarding Rules Matrix */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className={`rounded-2xl border p-4 transition-all ${safetyProfile.studentAge < 14 ? "border-amber-500/50 bg-amber-500/10 shadow-xs" : "border-border/60 bg-card/60 opacity-60"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">Junior Tier</span>
                    <span className="text-xs font-bold">Under 14</span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-foreground">Mandatory Pre-Approval</h3>
                  <p className="mt-1 text-[11.5px] text-muted-foreground leading-relaxed">
                    Student cannot confirm a lesson without direct guardian review. Tutor profiles, price, and schedule must be authorized.
                  </p>
                  {safetyProfile.studentAge < 14 && (
                    <span className="mt-3 inline-block rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-800 dark:text-amber-300">
                      Currently Active for Student
                    </span>
                  )}
                </div>

                <div className={`rounded-2xl border p-4 transition-all ${safetyProfile.studentAge >= 14 && safetyProfile.studentAge < 18 ? "border-primary/50 bg-primary/10 shadow-xs" : "border-border/60 bg-card/60 opacity-60"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Teen Tier</span>
                    <span className="text-xs font-bold">Age 14 – 17</span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-foreground">Independent with Oversight</h3>
                  <p className="mt-1 text-[11.5px] text-muted-foreground leading-relaxed">
                    Student can book lessons independently. Guardian receives instant email notification, full schedule visibility, and cancellation/refund power.
                  </p>
                  {safetyProfile.studentAge >= 14 && safetyProfile.studentAge < 18 && (
                    <span className="mt-3 inline-block rounded-md bg-primary/20 px-2 py-0.5 text-[10px] font-bold text-primary">
                      Currently Active for Student
                    </span>
                  )}
                </div>

                <div className={`rounded-2xl border p-4 transition-all ${safetyProfile.studentAge >= 18 ? "border-emerald-500/50 bg-emerald-500/10 shadow-xs" : "border-border/60 bg-card/60 opacity-60"}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Adult Tier</span>
                    <span className="text-xs font-bold">Age 18+</span>
                  </div>
                  <h3 className="mt-1 text-sm font-bold text-foreground">Full Independence</h3>
                  <p className="mt-1 text-[11.5px] text-muted-foreground leading-relaxed">
                    Independent adult student. Guardian link optional. Full control over all payments and tutor bookings.
                  </p>
                  {safetyProfile.studentAge >= 18 && (
                    <span className="mt-3 inline-block rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                      Currently Active for Student
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Pending Guardian Approvals (Crucial for Junior Students) */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
                    <Clock className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      Pending Lesson Approvals ({pendingGuardianBookings.length})
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Lessons submitted by younger students requiring your guardian consent before confirmation.
                    </p>
                  </div>
                </div>
              </div>

              {pendingGuardianBookings.length === 0 ? (
                <div className="py-8 text-center text-xs text-muted-foreground">
                  <CheckCircle2 className="size-8 mx-auto mb-2 text-emerald-500/50" />
                  <p className="font-semibold text-foreground">No pending approvals</p>
                  <p className="mt-0.5">All scheduled lessons are currently up-to-date.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingGuardianBookings.map((b) => (
                    <div
                      key={b.id}
                      className="rounded-2xl border border-amber-500/40 bg-amber-500/[0.04] p-4 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5 min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-amber-500/20 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold text-amber-800 dark:text-amber-300 uppercase">
                            Requires Your Approval
                          </span>
                          <span className="font-bold text-foreground text-sm">
                            {b.tutorName} · {b.subject}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          Scheduled: <strong className="text-foreground">{b.date} at {b.timeSlot}</strong> · Rate: <strong className="text-foreground">{b.currency}{b.hourlyRate} / hr</strong>
                        </p>
                        {b.topicNotes && (
                          <p className="text-[11px] text-foreground/80 italic">
                            Student Note: "{b.topicNotes}"
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => {
                            approveBooking(b.id);
                            refreshAll();
                          }}
                          className="flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors"
                        >
                          <Check className="size-3.5" /> Approve &amp; Confirm
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            cancelBooking(b.id, "Declined by parent");
                            refreshAll();
                          }}
                          className="flex items-center gap-1 rounded-xl border border-border bg-card hover:bg-muted px-3 py-2 text-xs font-semibold text-rose-500"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Complete Guardian Booking History & Payment Oversight */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Receipt className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      Lesson Schedule &amp; Payment Oversight ({bookings.length})
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Parents/guardians can inspect upcoming lessons, review tutor details, manage payments, and request refunds.
                    </p>
                  </div>
                </div>
              </div>

              {bookings.length === 0 ? (
                <div className="py-8 text-center text-xs text-muted-foreground">
                  <p>No booked lessons found for this account.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {bookings.map((b) => (
                    <div
                      key={b.id}
                      className="rounded-2xl border border-border/70 bg-background p-4 text-xs space-y-2 shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-foreground">
                              {b.tutorName}
                            </span>
                            <span className="rounded-full bg-secondary px-2 py-0.5 text-[10.5px] font-semibold text-secondary-foreground">
                              {b.subject}
                            </span>
                            {b.status === "confirmed" && (
                              <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                                ✓ Confirmed Online
                              </span>
                            )}
                            {b.status === "pending_guardian_approval" && (
                              <span className="rounded-full bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:text-amber-400">
                                ⏳ Pending Guardian Approval
                              </span>
                            )}
                            {b.status === "refund_requested" && (
                              <span className="rounded-full bg-violet-500/15 border border-violet-500/30 px-2 py-0.5 text-[10px] font-bold text-violet-700 dark:text-violet-400">
                                ↺ Refund Processing (${b.refundAmount || b.hourlyRate})
                              </span>
                            )}
                            {b.status === "cancelled" && (
                              <span className="rounded-full bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 text-[10px] font-bold text-rose-700 dark:text-rose-400">
                                Cancelled
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground mt-0.5">
                            Lesson Time: <strong>{b.date} at {b.timeSlot}</strong> · Total: <strong>{b.currency}{b.hourlyRate}</strong>
                          </p>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center">
                          {b.status === "confirmed" && (
                            <>
                              <button
                                type="button"
                                onClick={() => {
                                  requestRefund(b.id, "Parent requested cancellation & refund");
                                  refreshAll();
                                }}
                                className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                              >
                                Cancel &amp; Refund
                              </button>
                              <a
                                href={b.meetingLink}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl bg-ink text-ink-foreground px-3 py-1.5 text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1"
                              >
                                <Video className="size-3" /> Online Room
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Privacy Transparency Card */}
            <div className="rounded-3xl border border-border/80 bg-muted/20 p-6 space-y-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Lock className="size-4" />
                <span>Privacy &amp; Data Transparency for Parents and Students</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ExamGlow balances safeguarding with student learning autonomy. Below is the transparent breakdown of what guardians can access versus what is kept student-private:
              </p>

              <div className="grid gap-4 sm:grid-cols-2 pt-2 text-xs">
                <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] p-4 space-y-1.5">
                  <p className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5" /> What Guardians CAN Access:
                  </p>
                  <ul className="space-y-1 text-muted-foreground pl-4 list-disc">
                    <li>Lesson dates, scheduled times, and duration</li>
                    <li>Tutor profiles, verified qualifications, and background check records</li>
                    <li>Hourly lesson rates, payment receipts, and refund requests</li>
                    <li>Attendance logs and lesson confirmation status</li>
                    <li>Safety reports and safeguarding notices</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/60 bg-card p-4 space-y-1.5">
                  <p className="font-bold text-foreground flex items-center gap-1.5">
                    <Lock className="size-3.5 text-muted-foreground" /> What Remains Student-Private:
                  </p>
                  <ul className="space-y-1 text-muted-foreground pl-4 list-disc">
                    <li>Student personal study notes and notebook entries</li>
                    <li>Interactive flashcard deck self-practice scores</li>
                    <li>AI study chat queries and practice quiz drafts</li>
                    <li>Personal learning thoughts to promote independent academic growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 3: SCHEDULED LESSONS ────────────────────────────────────── */}
        {activeTab === "bookings" && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-border/60">
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  My Online Lessons ({bookings.length})
                </h2>
                <p className="text-xs text-muted-foreground">
                  All lessons are 100% online in secure video classrooms.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab("tutors")}
                className="rounded-full bg-ink text-ink-foreground px-4 py-2 text-xs font-bold"
              >
                + Book Another Tutor
              </button>
            </div>

            {bookings.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border py-14 text-center">
                <Calendar className="size-10 text-muted-foreground mx-auto mb-2 opacity-40" />
                <h3 className="text-base font-bold text-foreground">No lessons scheduled</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Browse our verified Cambridge tutors to book an online 1:1 session.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="rounded-3xl border border-border/80 bg-card p-5 text-xs space-y-3 shadow-xs"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          {b.status === "confirmed" ? "✓ Confirmed Online Lesson" : b.status}
                        </span>
                        <h4 className="text-base font-bold text-foreground">
                          {b.tutorName}
                        </h4>
                        <p className="text-muted-foreground text-xs">{b.subject}</p>
                      </div>
                      <span className="font-black text-sm text-foreground">
                        {b.currency}{b.hourlyRate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground border-y border-border/50 py-2">
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="size-3.5 text-primary" /> {b.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1 font-medium">
                        <Clock className="size-3.5 text-primary" /> {b.timeSlot}
                      </span>
                    </div>

                    {b.topicNotes && (
                      <p className="text-[11px] text-foreground/85 bg-muted/40 p-2.5 rounded-xl">
                        Topic: {b.topicNotes}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          requestRefund(b.id, "Student requested lesson cancellation & refund");
                          refreshAll();
                        }}
                        className="text-[11px] text-muted-foreground hover:text-rose-500 underline"
                      >
                        Cancel / Refund
                      </button>

                      {b.status === "confirmed" ? (
                        <a
                          href={b.meetingLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl bg-ink text-ink-foreground px-4 py-2 text-xs font-bold hover:opacity-90 transition-opacity flex items-center gap-1"
                        >
                          Enter Online Room <ExternalLink className="size-3" />
                        </a>
                      ) : (
                        <span className="text-amber-600 font-semibold text-[11px]">
                          Pending Guardian Approval
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ─── TAB 4: SAFEGUARDING & SAFETY CHARTER ────────────────────────── */}
        {activeTab === "safeguarding" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-6">
              <div>
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Safeguarding First
                </span>
                <h2 className="mt-2 text-2xl font-black text-foreground">
                  ExamGlow Online Tutoring Safeguarding Charter
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  Our comprehensive safety code protects every student, parent, and tutor. These requirements are strictly enforced across all 40+ Cambridge subjects.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-border/80 bg-background p-5 space-y-2">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-black">1</span>
                    100% Online-Only Tutoring
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    All tutoring sessions take place exclusively through our secure, encrypted online video system. In-person tutoring is strictly prohibited. If any tutor suggests an in-person meeting, it must be reported immediately.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/80 bg-background p-5 space-y-2">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-black">2</span>
                    Zero Personal Contact Leakage
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Neither tutors nor students are permitted to request or share personal telephone numbers, personal WhatsApp, Discord handles, social media profiles, or home addresses. All interaction remains safely on-platform.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/80 bg-background p-5 space-y-2">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-black">3</span>
                    Parent &amp; Guardian Oversight by Design
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Parents can link to their child's account to review tutor credentials, approve lessons for students under 14, receive instant email notices for teenagers, and manage all payments, cancellations, and refunds.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/80 bg-background p-5 space-y-2">
                  <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-black">4</span>
                    Tutor Vetting &amp; Criminal Background Checks
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Every tutor must undergo strict identity verification, academic credential inspection, and enhanced criminal record / DBS checks before their profile is published. Sensitive legal documents remain securely confidential.
                  </p>
                </div>
              </div>

              {/* Zero Tolerance Callout */}
              <div className="rounded-2xl border border-rose-500/30 bg-rose-500/[0.06] p-5 text-xs space-y-2">
                <h4 className="font-bold text-rose-700 dark:text-rose-400 text-sm flex items-center gap-2">
                  <ShieldAlert className="size-4" /> Zero-Tolerance Policy on Inappropriate Behaviour
                </h4>
                <p className="text-rose-950 dark:text-rose-200 leading-relaxed">
                  Tutors must never pressure students to keep conversations secret, ask for personal photographs, request off-platform contact, or display unprofessional conduct. Violations result in immediate suspension, account termination, and referral to relevant child-protection authorities.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── MODALS ─────────────────────────────────────────────────────────── */}

      {/* 1. Book a Lesson Modal (Age-Aware) */}
      {bookingTutor && (
        <BookingModal
          tutor={bookingTutor}
          studentSafety={safetyProfile}
          onClose={() => setBookingTutor(null)}
          onSuccess={() => {
            setBookingTutor(null);
            refreshAll();
            setActiveTab(safetyProfile.studentAge < 14 ? "guardian_portal" : "bookings");
          }}
        />
      )}

      {/* 2. Tutor Registration Modal */}
      {showTutorSetup && (
        <TutorSetupModal
          onClose={() => setShowTutorSetup(false)}
          onSuccess={(saved) => {
            setShowTutorSetup(false);
            refreshAll();
          }}
        />
      )}

      {/* 3. Reviews & Ratings Modal */}
      {reviewsTutor && (
        <ReviewsModal
          tutor={reviewsTutor}
          onClose={() => setReviewsTutor(null)}
          onReviewAdded={() => {
            refreshAll();
            const updated = getTutors().find((t) => t.id === reviewsTutor.id);
            if (updated) setReviewsTutor(updated);
          }}
        />
      )}

      {/* 4. Dual-Role Report Modal */}
      {reportingTutor && (
        <ReportProfileModal
          tutor={reportingTutor}
          guardianName={safetyProfile.guardian?.name}
          onClose={() => setReportingTutor(null)}
        />
      )}

      {/* 5. Student Age & Guardian Permissions Configuration Modal */}
      {showAgeSettings && (
        <GuardianSettingsModal
          safetyProfile={safetyProfile}
          onClose={() => setShowAgeSettings(false)}
          onSave={(updated) => {
            setSafetyProfile(updated);
            setShowAgeSettings(false);
            refreshAll();
          }}
        />
      )}
    </DashboardLayout>
  );
}

// ─── 1. Tutor Profile Card Component (Matches User Upload Exactly) ─────────────
function TutorProfileCard({
  tutor,
  studentAge,
  guardianName,
  onBook,
  onViewReviews,
  onReport,
}: {
  tutor: TutorProfile;
  studentAge: number;
  guardianName?: string;
  onBook: () => void;
  onViewReviews: () => void;
  onReport: () => void;
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm transition-all hover:border-foreground/30 hover:shadow-md">
      {/* Top Header: Avatar + Title/Name + Subtitle */}
      <div className="flex items-start gap-3.5">
        <div
          className={`size-14 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xs ${
            tutor.avatarColor || "bg-indigo-600"
          }`}
        >
          {tutor.name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-1">
            <h3 className="truncate text-base font-bold text-foreground">
              {tutor.name}
            </h3>
          </div>
          <p className="truncate text-xs text-muted-foreground font-medium">
            {tutor.syllabus} · Online
          </p>

          {/* Badges: Exact style from wireframe */}
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {tutor.identityVerified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 text-[10.5px] font-bold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="size-3" /> Identity verified
              </span>
            )}
            {tutor.qualificationsChecked && (
              <span className="inline-flex items-center rounded-full bg-muted border border-border/70 px-2 py-0.5 text-[10.5px] font-semibold text-muted-foreground">
                Qualifications checked
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Details Section: Subjects & Levels + Rate */}
      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border/60 pt-4">
        <div>
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            Subjects and levels
          </p>
          <p className="mt-1 text-xs sm:text-sm font-bold text-foreground leading-snug">
            {tutor.subject}
          </p>
          <p className="text-[11px] text-muted-foreground">· {tutor.level}</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            Rate
          </p>
          <p className="mt-1 text-base sm:text-lg font-black text-foreground">
            {tutor.currency}{tutor.hourlyRate} <span className="text-xs font-normal text-muted-foreground">/ hr</span>
          </p>
          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
            Set by tutor
          </span>
        </div>
      </div>

      {/* Qualifications */}
      <div className="mt-4">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Qualifications
        </p>
        <p className="mt-1 text-xs text-foreground/80 leading-relaxed line-clamp-2">
          {tutor.qualifications}
        </p>
      </div>

      {/* Availability */}
      <div className="mt-3">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
          Availability
        </p>
        <p className="mt-1 text-xs text-foreground/80 leading-relaxed line-clamp-2">
          {tutor.availability}
        </p>
      </div>

      {/* Ratings & Reviews trigger */}
      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs">
        <button
          type="button"
          onClick={onViewReviews}
          className="flex items-center gap-1.5 text-foreground hover:underline font-semibold"
        >
          <Star className="size-3.5 fill-amber-400 text-amber-500" />
          <span>{tutor.rating.toFixed(1)}</span>
          <span className="text-muted-foreground font-normal">
            ({tutor.reviewCount} review{tutor.reviewCount === 1 ? "" : "s"})
          </span>
        </button>

        <span className="text-[11px] text-muted-foreground flex items-center gap-1">
          <Video className="size-3 text-emerald-500" /> Online Lesson
        </span>
      </div>

      {/* Age rule indicator */}
      {studentAge < 14 && (
        <div className="mt-3 rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 text-[11px] text-amber-800 dark:text-amber-300">
          ⏳ Guardian approval required before session is confirmed.
        </div>
      )}

      {/* Action Buttons: Exact wireframe layout */}
      <div className="mt-4 grid grid-cols-[1fr_auto] gap-2 pt-1">
        <button
          type="button"
          onClick={onBook}
          className="flex items-center justify-center gap-2 rounded-2xl bg-ink py-2.5 px-4 text-xs font-bold text-ink-foreground transition-all hover:opacity-90 shadow-xs"
        >
          <Calendar className="size-3.5" /> Book a lesson
        </button>

        <button
          type="button"
          onClick={onReport}
          title="Report profile"
          className="flex items-center justify-center gap-1.5 rounded-2xl border border-border bg-card px-3 py-2.5 text-xs font-semibold text-muted-foreground hover:text-rose-500 hover:border-rose-500/40 transition-colors"
        >
          <Flag className="size-3.5" />
          <span className="hidden sm:inline">Report profile</span>
        </button>
      </div>
    </div>
  );
}

// ─── 2. Booking Modal with Guardian Safeguarding Rules ─────────────────────────
function BookingModal({
  tutor,
  studentSafety,
  onClose,
  onSuccess,
}: {
  tutor: TutorProfile;
  studentSafety: StudentSafetyProfile;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const isJunior = studentSafety.studentAge < 14;
  const isTeen = studentSafety.studentAge >= 14 && studentSafety.studentAge < 18;

  const [selectedDay, setSelectedDay] = useState(tutor.availableDays[0] || "Next Available");
  const [selectedTime, setSelectedTime] = useState(tutor.timeSlots[0] || "10:00 AM");
  const [studentName, setStudentName] = useState(studentSafety.studentName || "");
  const [studentEmail, setStudentEmail] = useState(studentSafety.studentEmail || "");
  const [topicNotes, setTopicNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<LessonBooking | null>(null);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentEmail.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const booking = createBooking({
        tutorId: tutor.id,
        tutorName: tutor.name,
        subject: tutor.subject,
        studentName: studentName.trim(),
        studentEmail: studentEmail.trim(),
        studentAge: studentSafety.studentAge,
        date: selectedDay,
        timeSlot: selectedTime,
        topicNotes: topicNotes.trim() || `Cambridge ${tutor.subject} Exam Prep`,
        hourlyRate: tutor.hourlyRate,
        currency: tutor.currency,
      });
      setIsSubmitting(false);
      setConfirmedBooking(booking);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-border/60">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Online 1:1 Lesson
            </span>
            <h3 className="text-lg font-bold text-foreground">
              Book Lesson with {tutor.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        {confirmedBooking ? (
          <div className="py-8 text-center space-y-4">
            <div className={`size-14 rounded-full flex items-center justify-center mx-auto border ${
              confirmedBooking.status === "pending_guardian_approval"
                ? "bg-amber-500/15 border-amber-500/30 text-amber-600"
                : "bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
            }`}>
              {confirmedBooking.status === "pending_guardian_approval" ? (
                <Clock className="size-7" />
              ) : (
                <CheckCircle2 className="size-7" />
              )}
            </div>

            <h4 className="text-xl font-bold text-foreground">
              {confirmedBooking.status === "pending_guardian_approval"
                ? "Booking Submitted for Guardian Approval"
                : "Lesson Confirmed!"}
            </h4>

            <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
              {confirmedBooking.status === "pending_guardian_approval" ? (
                <>
                  Because you are under 14, an approval request has been sent to your guardian <strong className="text-foreground">{studentSafety.guardian?.name || "your parent"}</strong>. Once approved in the Guardian Portal, your meeting link will become active.
                </>
              ) : (
                <>
                  Your online lesson with <strong className="text-foreground">{tutor.name}</strong> is confirmed for <strong className="text-foreground">{confirmedBooking.date} at {confirmedBooking.timeSlot}</strong>.
                  {isTeen && (
                    <span className="block mt-1 text-emerald-700 dark:text-emerald-400">
                      ✓ Guardian notice dispatched to {studentSafety.guardian?.name}.
                    </span>
                  )}
                </>
              )}
            </p>

            <div className="rounded-2xl border border-border bg-muted/40 p-4 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subject &amp; Level:</span>
                <span className="font-semibold text-foreground">{tutor.subject} ({tutor.level})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className={`font-bold ${confirmedBooking.status === "pending_guardian_approval" ? "text-amber-600" : "text-emerald-600 dark:text-emerald-400"}`}>
                  {confirmedBooking.status === "pending_guardian_approval" ? "Pending Guardian Approval" : "Confirmed Online"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rate:</span>
                <span className="font-bold text-foreground">{tutor.currency}{tutor.hourlyRate} / hr</span>
              </div>
              {confirmedBooking.status === "confirmed" && (
                <div className="flex justify-between pt-1 border-t border-border/60">
                  <span className="text-muted-foreground">Meeting Link:</span>
                  <span className="font-mono text-[11px] text-primary truncate max-w-[200px]">
                    {confirmedBooking.meetingLink}
                  </span>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onSuccess}
              className="w-full rounded-2xl bg-ink py-3 text-xs font-bold text-ink-foreground"
            >
              {confirmedBooking.status === "pending_guardian_approval"
                ? "Open Guardian Oversight Portal"
                : "View in My Bookings"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="mt-5 space-y-4">
            {/* Guardian Safeguarding Notice Banner */}
            {isJunior && (
              <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <HeartHandshake className="size-4 text-amber-600 shrink-0" />
                  <span>Junior Student Protection (Age {studentSafety.studentAge})</span>
                </div>
                <p className="text-[11.5px] leading-relaxed">
                  Your guardian (<strong className="text-foreground">{studentSafety.guardian?.name || "Parent"}</strong>) must approve this lesson before it is confirmed.
                </p>
              </div>
            )}

            {isTeen && (
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3 text-xs text-foreground/80 flex items-start gap-2">
                <UserCheck className="size-4 text-primary shrink-0 mt-0.5" />
                <p className="text-[11.5px] leading-relaxed">
                  <strong>Teen Oversight Active:</strong> Your linked guardian will receive instant notification of this scheduled session.
                </p>
              </div>
            )}

            {/* Tutor summary */}
            <div className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/30 p-3.5 text-xs">
              <div>
                <p className="font-bold text-foreground">{tutor.subject} · {tutor.level}</p>
                <p className="text-muted-foreground text-[11px]">{tutor.headline}</p>
              </div>
              <div className="text-right">
                <p className="text-base font-black text-foreground">{tutor.currency}{tutor.hourlyRate}</p>
                <span className="text-[10px] text-muted-foreground">1 hr online lesson</span>
              </div>
            </div>

            {/* Select Day */}
            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
                Select Lesson Day
              </label>
              <div className="flex flex-wrap gap-2">
                {tutor.availableDays.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                      selectedDay === day
                        ? "bg-foreground text-background shadow-xs"
                        : "border border-border bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Time Slot */}
            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wide mb-2">
                Select Time Slot (Online)
              </label>
              <div className="flex flex-wrap gap-2">
                {tutor.timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                      selectedTime === slot
                        ? "bg-foreground text-background shadow-xs"
                        : "border border-border bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Clock className="size-3" /> {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Student Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Student Name
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Student Email
                </label>
                <input
                  type="email"
                  required
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
                />
              </div>
            </div>

            {/* Topic Notes */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Lesson Goal / Cambridge Chapter Needed
              </label>
              <input
                type="text"
                value={topicNotes}
                onChange={(e) => setTopicNotes(e.target.value)}
                placeholder="e.g. Past Paper 4 Theory revision, Osmosis calculations, Circle theorems..."
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
              />
            </div>

            {/* Safety policy note */}
            <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
              <Lock className="size-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Online video link generated upon confirmation. No phone numbers or home addresses are shared.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-ink py-3 text-xs font-bold text-ink-foreground hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting
                ? "Processing..."
                : isJunior
                ? `Submit for Guardian Approval (${tutor.currency}${tutor.hourlyRate})`
                : `Confirm Online Lesson (${tutor.currency}${tutor.hourlyRate})`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── 3. Tutor Profile Setup Modal (For Tutors) ─────────────────────────────────
function TutorSetupModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: (saved: TutorProfile) => void;
}) {
  const [name, setName] = useState("");
  const [headline, setHeadline] = useState("");
  const [subject, setSubject] = useState("Mathematics");
  const [level, setLevel] = useState("IGCSE & O-Level");
  const [hourlyRate, setHourlyRate] = useState(30);
  const [qualifications, setQualifications] = useState("");
  const [certificates, setCertificates] = useState("");
  const [bio, setBio] = useState("");
  const [availability, setAvailability] = useState("Weekdays 4:00 PM – 8:00 PM & Weekends");
  const [agreeSafety, setAgreeSafety] = useState(false);
  const [agreeNoContactSharing, setAgreeNoContactSharing] = useState(false);
  const [fileAttached, setFileAttached] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !agreeSafety || !agreeNoContactSharing) return;

    const saved = saveTutorProfile({
      name: name.trim(),
      headline: headline.trim() || `Cambridge ${subject} Online Tutor`,
      subject,
      level,
      hourlyRate: Number(hourlyRate) || 30,
      currency: "$",
      qualifications:
        qualifications.trim() ||
        "Verified academic degree and Cambridge curriculum experience.",
      certificateDetails:
        certificates.trim() ||
        (fileAttached ? `Uploaded Certificate: ${fileAttached} (Verified)` : "Academic Credentials Verified"),
      bio: bio.trim() || `Dedicated Cambridge ${subject} tutor focusing on exam paper mastery and active understanding.`,
      availability: availability.trim(),
    });

    onSuccess(saved);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-border/60">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              Tutor Registration
            </span>
            <h3 className="text-lg font-bold text-foreground">
              Set Up Your Tutor Profile
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Full Name &amp; Title *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. Sarah Jenkins"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Hourly Tutoring Rate ($/hr) *
              </label>
              <input
                type="number"
                required
                min={10}
                max={200}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Headline
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="e.g. Cambridge IGCSE & A-Level Physics Specialist · 8 Years Exp"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Cambridge Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none"
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Economics">Economics</option>
                <option value="Computer Science">Computer Science</option>
                <option value="English">English</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Level Taught
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none"
              >
                <option value="IGCSE & O-Level">IGCSE &amp; O-Level</option>
                <option value="IGCSE & A-Level">IGCSE &amp; A-Level</option>
                <option value="A-Level Specialist">A-Level Specialist</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Qualifications &amp; Degrees
            </label>
            <input
              type="text"
              value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              placeholder="e.g. BSc Mathematics (1st Class Honours), PGCE Secondary Education"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Certificates &amp; Credentials (Upload or ID Number)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={certificates}
                onChange={(e) => setCertificates(e.target.value)}
                placeholder="e.g. Cambridge Educator ID #CIE-9982 or Teaching License"
                className="flex-1 rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
              />
              <label className="flex items-center gap-1.5 rounded-xl border border-border bg-muted/60 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground cursor-pointer shrink-0">
                <span>Upload</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setFileAttached(file.name);
                  }}
                />
              </label>
            </div>
            {fileAttached && (
              <p className="mt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                ✓ Attached certificate file: {fileAttached}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Availability Slots
            </label>
            <input
              type="text"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              placeholder="e.g. Monday & Wednesday evenings, Saturday morning"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Bio &amp; Teaching Methodology
            </label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Describe your teaching approach, past paper strategies, and how you help Cambridge students earn top marks..."
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none focus:border-foreground/40"
            />
          </div>

          {/* Mandatory Safeguarding Checkboxes */}
          <div className="space-y-2 pt-1">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-3 flex items-start gap-2.5">
              <input
                type="checkbox"
                id="safetyAgreement"
                required
                checked={agreeSafety}
                onChange={(e) => setAgreeSafety(e.target.checked)}
                className="mt-0.5 size-4 rounded border-border text-primary focus:ring-primary"
              />
              <label htmlFor="safetyAgreement" className="text-xs text-foreground/90 leading-relaxed cursor-pointer">
                <strong>Online-Only Rule:</strong> All sessions must be conducted strictly online through secure video links. In-person tutoring is strictly prohibited.
              </label>
            </div>

            <div className="rounded-2xl border border-border/80 bg-muted/40 p-3 flex items-start gap-2.5">
              <input
                type="checkbox"
                id="noContactSharing"
                required
                checked={agreeNoContactSharing}
                onChange={(e) => setAgreeNoContactSharing(e.target.checked)}
                className="mt-0.5 size-4 rounded border-border text-primary focus:ring-primary"
              />
              <label htmlFor="noContactSharing" className="text-xs text-foreground/90 leading-relaxed cursor-pointer">
                <strong>Zero Contact Sharing &amp; Anti-Secrecy Pledge:</strong> I will never ask for or share personal phone numbers, personal social media, or home addresses, nor pressure students to keep conversations secret or move off-platform.
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={!agreeSafety || !agreeNoContactSharing}
            className="w-full rounded-2xl bg-ink py-3 text-xs font-bold text-ink-foreground hover:opacity-90 transition-opacity disabled:opacity-40"
          >
            Publish Tutor Profile
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── 4. Reviews & Ratings Modal ───────────────────────────────────────────────
function ReviewsModal({
  tutor,
  onClose,
  onReviewAdded,
}: {
  tutor: TutorProfile;
  onClose: () => void;
  onReviewAdded: () => void;
}) {
  const [studentName, setStudentName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    addTutorReview(tutor.id, {
      studentName: studentName.trim() || "Cambridge Student",
      rating,
      comment: comment.trim(),
    });

    setSubmitted(true);
    setTimeout(() => {
      onReviewAdded();
      setComment("");
      setSubmitted(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl flex flex-col max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-border/60">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500">
              Student Reviews
            </span>
            <h3 className="text-lg font-bold text-foreground">
              Reviews for {tutor.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="my-4 flex items-center gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
          <div className="flex items-baseline gap-1 text-2xl font-black text-foreground">
            <Star className="size-6 fill-amber-400 text-amber-500" />
            <span>{tutor.rating.toFixed(1)}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            <p className="font-semibold text-foreground">Overall Cambridge Rating</p>
            <p>Based on {tutor.reviewCount} verified student review{tutor.reviewCount === 1 ? "" : "s"}</p>
          </div>
        </div>

        <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
          {tutor.reviews.map((rev) => (
            <div key={rev.id} className="rounded-2xl border border-border/60 bg-background p-3.5 text-xs space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground">{rev.studentName}</span>
                <span className="text-[11px] text-muted-foreground">{rev.date}</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-3 ${i < rev.rating ? "fill-amber-400 text-amber-500" : "text-muted"}`}
                  />
                ))}
                {rev.verifiedBooking && (
                  <span className="ml-2 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                    ✓ Verified Lesson
                  </span>
                )}
              </div>
              <p className="text-foreground/80 leading-relaxed">{rev.comment}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddReview} className="mt-5 border-t border-border/60 pt-4 space-y-3">
          <h4 className="text-xs font-bold text-foreground uppercase tracking-wide">
            Leave a Review
          </h4>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-muted-foreground">Rating:</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`size-4 ${
                      star <= rating
                        ? "fill-amber-400 text-amber-500"
                        : "text-muted-foreground/40"
                    }`}
                  />
                </button>
              ))}
            </div>
            <span className="text-xs font-bold text-foreground ml-1">({rating} / 5)</span>
          </div>

          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Your Name (optional)"
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none"
          />

          <textarea
            rows={2}
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="How did this tutor help with your Cambridge exam preparation?"
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs text-foreground focus:outline-none"
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-ink py-2.5 text-xs font-bold text-ink-foreground hover:opacity-90 transition-opacity"
          >
            {submitted ? "Review Posted!" : "Submit Review"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── 5. Dual-Role Report Modal (Students & Guardians) ─────────────────────────
function ReportProfileModal({
  tutor,
  guardianName,
  onClose,
}: {
  tutor: TutorProfile;
  guardianName?: string;
  onClose: () => void;
}) {
  const [role, setRole] = useState<"student" | "guardian">("student");
  const [reporterName, setReporterName] = useState(guardianName || "");
  const [reporterEmail, setReporterEmail] = useState("");
  const [reason, setReason] = useState("Attempted in-person tutoring (violates online-only policy)");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createSafeguardingReport({
      reporterRole: role,
      reporterName: reporterName.trim(),
      reporterEmail: reporterEmail.trim(),
      tutorId: tutor.id,
      tutorName: tutor.name,
      reason,
      details: details.trim() || "Reported for safety review",
    });

    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-border/60">
          <div className="flex items-center gap-2 text-rose-500">
            <Flag className="size-4" />
            <h3 className="text-base font-bold text-foreground">
              Raise Safeguarding Concern
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-2">
            <CheckCircle2 className="size-8 text-emerald-500 mx-auto" />
            <h4 className="text-base font-bold text-foreground">Report Registered</h4>
            <p className="text-xs text-muted-foreground">
              Thank you for helping keep ExamGlow safe. Our dedicated Child Safeguarding Officer will investigate {tutor.name}'s account within 12 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5">
            <p className="text-xs text-muted-foreground">
              Target Profile: <strong className="text-foreground">{tutor.name}</strong> ({tutor.subject})
            </p>

            {/* Role Switcher */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Submitting report as:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  className={`rounded-xl py-2 text-xs font-bold transition-all ${
                    role === "student"
                      ? "bg-foreground text-background shadow-xs"
                      : "border border-border bg-muted/40 text-muted-foreground"
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole("guardian")}
                  className={`rounded-xl py-2 text-xs font-bold transition-all ${
                    role === "guardian"
                      ? "bg-foreground text-background shadow-xs"
                      : "border border-border bg-muted/40 text-muted-foreground"
                  }`}
                >
                  Parent / Guardian
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Reason for report
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none"
              >
                <option value="Attempted in-person tutoring (violates online-only policy)">
                  Attempted in-person tutoring (violates online-only policy)
                </option>
                <option value="Asked for personal phone number, WhatsApp or home address">
                  Asked for personal phone number, WhatsApp or home address
                </option>
                <option value="Pressured student to keep conversations secret">
                  Pressured student to keep conversations secret
                </option>
                <option value="Attempted off-platform payment or communication">
                  Attempted off-platform payment or communication
                </option>
                <option value="Incorrect qualifications or syllabus details">
                  Incorrect qualifications or syllabus details
                </option>
                <option value="Other concern">Other safeguarding concern</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Explanation &amp; Details
              </label>
              <textarea
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Please describe what happened, messages sent, or lesson dates..."
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-rose-600 py-2.5 text-xs font-bold text-white hover:bg-rose-700 transition-colors"
            >
              Submit Confidential Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ─── 6. Student Age & Guardian Permissions Configuration Modal ────────────────
function GuardianSettingsModal({
  safetyProfile,
  onClose,
  onSave,
}: {
  safetyProfile: StudentSafetyProfile;
  onClose: () => void;
  onSave: (updated: StudentSafetyProfile) => void;
}) {
  const [age, setAge] = useState(safetyProfile.studentAge);
  const [guardianName, setGuardianName] = useState(safetyProfile.guardian?.name || "");
  const [guardianEmail, setGuardianEmail] = useState(safetyProfile.guardian?.email || "");
  const [relation, setRelation] = useState<"Parent" | "Legal Guardian">(safetyProfile.guardian?.relation || "Parent");
  const [requireUnder16, setRequireUnder16] = useState(safetyProfile.guardian?.requireApprovalUnder16 ?? true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = updateSafetyProfile({
      studentAge: Number(age),
      guardian: {
        id: safetyProfile.guardian?.id || `guard-${Date.now()}`,
        name: guardianName.trim(),
        email: guardianEmail.trim(),
        relation,
        verified: true,
        consentGiven: true,
        consentDate: "Verified",
        allowDirectBooking: true,
        requireApprovalUnder16: requireUnder16,
        paymentApproved: true,
        linkedStudentId: "student-active",
        linkCode: safetyProfile.guardian?.linkCode || "GUARD-8821",
      },
    });
    onSave(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-2xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border/60">
          <div className="flex items-center gap-2 text-primary font-bold">
            <Settings className="size-4" />
            <h3 className="text-base font-bold text-foreground">
              Student Age &amp; Guardian Link
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="size-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted"
          >
            <X className="size-4" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-foreground mb-1 uppercase tracking-wide">
              Student Registered Age
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={10}
                max={25}
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-24 rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold text-foreground focus:outline-none"
              />
              <span className="text-muted-foreground leading-snug">
                {age < 14 ? (
                  <strong className="text-amber-600 block">Junior Student (Approval Required)</strong>
                ) : age < 18 ? (
                  <strong className="text-primary block">Teenager (Guardian Linked &amp; Monitored)</strong>
                ) : (
                  <strong className="text-emerald-600 block">Adult Student (18+ Independent)</strong>
                )}
                Change age to test live guardian safeguarding behavior.
              </span>
            </div>
          </div>

          <div className="border-t border-border/60 pt-3 space-y-3">
            <h4 className="font-bold text-foreground uppercase tracking-wide">
              Linked Parent / Legal Guardian
            </h4>

            <div>
              <label className="block text-muted-foreground mb-1">Guardian Name</label>
              <input
                type="text"
                required
                value={guardianName}
                onChange={(e) => setGuardianName(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-muted-foreground mb-1">Guardian Email (For Notices &amp; Receipts)</label>
              <input
                type="email"
                required
                value={guardianEmail}
                onChange={(e) => setGuardianEmail(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-muted-foreground mb-1">Relationship</label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value as any)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-foreground focus:outline-none"
              >
                <option value="Parent">Parent</option>
                <option value="Legal Guardian">Legal Guardian</option>
              </select>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="requireApprovalCheckbox"
                checked={requireUnder16}
                onChange={(e) => setRequireUnder16(e.target.checked)}
                className="mt-0.5 size-4 rounded border-border text-primary"
              />
              <label htmlFor="requireApprovalCheckbox" className="text-muted-foreground leading-snug cursor-pointer">
                Require guardian manual pre-approval for bookings if student is under 16.
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-ink py-2.5 text-xs font-bold text-ink-foreground shadow-xs hover:opacity-90"
          >
            Save &amp; Update Safeguards
          </button>
        </form>
      </div>
    </div>
  );
}
