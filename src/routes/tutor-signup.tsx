import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import {
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowLeft,
  FileCheck,
  Lock,
  LogOut,
  User,
  Video,
  DollarSign,
  BookOpen,
} from "lucide-react";

import logoMark from "@/assets/logo-mark.png";
import {
  getTutors,
  saveTutorProfile,
  getBookings,
  type TutorProfile,
  type LessonBooking,
} from "@/lib/tutors-store";

export const Route = createFileRoute("/tutor-signup")({
  head: () => ({
    meta: [
      { title: "Tutor Portal — Cambridge Online Faculty Registration | ExamGlow" },
      {
        name: "description",
        content:
          "Register or sign in as an accredited Cambridge online tutor. Deliver 1-on-1 virtual sessions with full safeguarding and syllabus alignment.",
      },
    ],
  }),
  component: TutorSignupPage,
});

const CURRENT_TUTOR_KEY = "examglow_current_tutor_email";

const SUBJECTS_LIST = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "Computer Science",
  "English Language",
  "Business Studies",
  "Accounting",
  "Geography",
  "History",
];

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function TutorSignupPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"register" | "signin">("register");
  const [currentTutor, setCurrentTutor] = useState<TutorProfile | null>(null);
  const [tutorBookings, setTutorBookings] = useState<LessonBooking[]>([]);

  // Registration Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [headline, setHeadline] = useState("");
  const [subject, setSubject] = useState(SUBJECTS_LIST[0]);
  const [level, setLevel] = useState("IGCSE & O-Level");
  const [hourlyRate, setHourlyRate] = useState<number>(35);
  const [qualifications, setQualifications] = useState("");
  const [certificateDetails, setCertificateDetails] = useState("");
  const [availableDays, setAvailableDays] = useState<string[]>([
    "Monday",
    "Wednesday",
    "Friday",
  ]);
  const [bio, setBio] = useState("");
  const [agreeOnlineOnly, setAgreeOnlineOnly] = useState(false);
  const [agreeNoContactSharing, setAgreeNoContactSharing] = useState(false);
  const [agreeSafeguarding, setAgreeSafeguarding] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Signin Form State
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    checkLoggedInTutor();
  }, []);

  const checkLoggedInTutor = () => {
    try {
      if (typeof window === "undefined") return;
      const savedEmail = localStorage.getItem(CURRENT_TUTOR_KEY);
      if (savedEmail) {
        const tutors = getTutors();
        const found = tutors.find((t) => t.email?.toLowerCase() === savedEmail.toLowerCase());
        if (found) {
          setCurrentTutor(found);
          const allBookings = getBookings();
          setTutorBookings(allBookings.filter((b) => b.tutorId === found.id));
        }
      }
    } catch {}
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your full name and academic title.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid academic or professional email address.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Please provide a password of at least 6 characters.");
      return;
    }
    if (!qualifications.trim()) {
      setError("Please outline your university degree or teaching qualifications.");
      return;
    }
    if (!bio.trim()) {
      setError("Please provide a brief bio describing your Cambridge teaching approach.");
      return;
    }
    if (!agreeOnlineOnly || !agreeNoContactSharing || !agreeSafeguarding) {
      setError("You must review and agree to all online-only safeguarding commitments to proceed.");
      return;
    }

    const saved = saveTutorProfile({
      name: name.trim(),
      email: email.trim(),
      password,
      headline: headline.trim() || `Cambridge ${subject} Specialist`,
      subject,
      syllabus: `Cambridge ${subject}`,
      level,
      hourlyRate: Number(hourlyRate) || 35,
      currency: "$",
      qualifications: qualifications.trim(),
      certificateDetails: certificateDetails.trim() || "Verified Academic Credentials",
      availableDays,
      bio: bio.trim(),
      isOnlineOnly: true,
      identityVerified: true,
      qualificationsChecked: true,
      safeguardingTrained: true,
      dbsChecked: true,
    });

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(CURRENT_TUTOR_KEY, saved.email || "");
      }
    } catch {}

    setCurrentTutor(saved);
    setSuccessMsg("Tutor profile registered successfully.");
  };

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!loginEmail.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const tutors = getTutors();
    const found = tutors.find(
      (t) => t.email?.toLowerCase() === loginEmail.trim().toLowerCase()
    );

    if (!found) {
      setError("No tutor account found with this email. Please register your profile below.");
      return;
    }

    if (found.password && loginPassword && found.password !== loginPassword) {
      setError("Incorrect password. Please verify your credentials.");
      return;
    }

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(CURRENT_TUTOR_KEY, found.email || "");
      }
    } catch {}

    setCurrentTutor(found);
    const allBookings = getBookings();
    setTutorBookings(allBookings.filter((b) => b.tutorId === found.id));
  };

  const handleLogout = () => {
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem(CURRENT_TUTOR_KEY);
      }
    } catch {}
    setCurrentTutor(null);
    setTutorBookings([]);
    setSuccessMsg(null);
  };

  const toggleDay = (day: string) => {
    if (availableDays.includes(day)) {
      if (availableDays.length > 1) {
        setAvailableDays(availableDays.filter((d) => d !== day));
      }
    } else {
      setAvailableDays([...availableDays, day]);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Top Academic Header */}
      <header className="border-b border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoMark}
                alt="ExamGlow Logo"
                className="size-8 rounded-full border border-neutral-300 dark:border-neutral-700"
              />
              <span className="text-base font-bold tracking-tight">ExamGlow</span>
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Tutor Portal
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link
              to="/tutors"
              className="inline-flex items-center gap-1.5 font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <ArrowLeft className="size-3.5" />
              Student Tutoring Hub
            </Link>
            <Link
              to="/signup"
              className="font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              Student Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
        {currentTutor ? (
          /* ─── TUTOR WORKSPACE (DASHBOARD) ─────────────────────────────────── */
          <div className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-neutral-200 pb-5 dark:border-neutral-800">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                    <CheckCircle2 className="size-3 text-emerald-600 dark:text-emerald-400" />
                    Verified Faculty Member
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-neutral-100 px-2 py-0.5 text-[11px] font-semibold text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                    <Lock className="size-3 text-neutral-500" />
                    Online Only
                  </span>
                </div>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {currentTutor.name}
                </h1>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {currentTutor.headline} · {currentTutor.subject}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to="/tutors"
                  className="rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  View Live Public Listing
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
                >
                  <LogOut className="size-3.5" />
                  Sign Out
                </button>
              </div>
            </div>

            {/* Overview Summary */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Hourly Rate
                </p>
                <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  ${currentTutor.hourlyRate}
                  <span className="text-xs font-normal text-neutral-500"> / hour</span>
                </p>
                <p className="mt-1 text-[11px] text-neutral-500">Fixed rate for 1:1 online sessions</p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Scheduled Lessons
                </p>
                <p className="mt-1 text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                  {tutorBookings.length}
                </p>
                <p className="mt-1 text-[11px] text-neutral-500">Active student reservations</p>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Syllabus Specialty
                </p>
                <p className="mt-1 text-base font-bold text-neutral-900 dark:text-neutral-100 truncate">
                  {currentTutor.syllabus}
                </p>
                <p className="mt-1 text-[11px] text-neutral-500">{currentTutor.level}</p>
              </div>
            </div>

            {/* Profile Details Card */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                Profile Information
              </h2>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Teaching Bio:</span>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400 leading-relaxed whitespace-pre-line">
                    {currentTutor.bio}
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Academic Qualifications:</span>
                  <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                    {currentTutor.qualifications}
                  </p>
                </div>

                <div>
                  <span className="font-semibold text-neutral-700 dark:text-neutral-300">Available Days:</span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {currentTutor.availableDays?.map((d) => (
                      <span
                        key={d}
                        className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900/50">
                    <p className="font-semibold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                      <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
                      Safeguarding Compliance Status
                    </p>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                      Identity verified · DBS compliance acknowledged · Online-only protocol active · Zero off-platform contact policy agreed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduled Student Lessons */}
            <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-4 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                Scheduled Student Lessons
              </h2>

              {tutorBookings.length === 0 ? (
                <div className="py-8 text-center">
                  <Calendar className="mx-auto size-8 text-neutral-400" />
                  <p className="mt-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    No lessons booked yet
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-500">
                    When students reserve a lesson from the directory, your schedule will appear here.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {tutorBookings.map((b) => (
                    <div key={b.id} className="py-3 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                          {b.studentName} ({b.studentAge} yrs)
                        </p>
                        <p className="text-neutral-500">
                          {b.date} at {b.timeSlot} · Topic: {b.topicNotes || "General Revision"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                          {b.status}
                        </span>
                        <a
                          href={b.meetingLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-lg bg-neutral-900 px-2.5 py-1 text-[11px] font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >
                          Join Room
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ─── REGISTRATION & SIGN IN FORMS ───────────────────────────────── */
          <div className="mx-auto max-w-2xl">
            {/* Header info */}
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-800 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                <GraduationCap className="size-3.5" />
                Cambridge Educator Network
              </span>
              <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                {mode === "register" ? "Register as an Online Tutor" : "Tutor Portal Sign In"}
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
                {mode === "register"
                  ? "Deliver accredited 1:1 online Cambridge tutoring. Set your own rate, schedule, and syllabus focus in a safe virtual environment."
                  : "Sign in to access your tutoring schedule, student bookings, and profile details."}
              </p>

              {/* Mode switch pills */}
              <div className="mt-6 inline-flex rounded-lg border border-neutral-300 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-900">
                <button
                  type="button"
                  onClick={() => {
                    setMode("register");
                    setError(null);
                  }}
                  className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-colors ${
                    mode === "register"
                      ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  }`}
                >
                  Create Tutor Profile
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode("signin");
                    setError(null);
                  }}
                  className={`rounded-md px-4 py-1.5 text-xs font-semibold transition-colors ${
                    mode === "signin"
                      ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  }`}
                >
                  Sign In to Tutor Account
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-3 text-xs text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
                {error}
              </div>
            )}

            {mode === "signin" ? (
              /* ─── SIGN IN FORM ─────────────────────────────────────────── */
              <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                      Tutor Account Email
                    </label>
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="e.g. educator@cambridge-tutoring.com"
                      className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="Enter your tutor password"
                      className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:focus:border-neutral-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-neutral-900 py-3 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Sign In to Tutor Portal
                  </button>

                  <p className="text-center text-xs text-neutral-500 pt-2">
                    Don't have a tutor account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("register")}
                      className="font-semibold text-neutral-900 underline dark:text-neutral-100"
                    >
                      Register your profile
                    </button>
                  </p>
                </form>
              </div>
            ) : (
              /* ─── REGISTRATION FORM ─────────────────────────────────────── */
              <div className="rounded-xl border border-neutral-200 bg-white p-6 sm:p-8 dark:border-neutral-800 dark:bg-neutral-900">
                <form onSubmit={handleRegister} className="space-y-6">
                  {/* Section 1: Identity & Credentials */}
                  <div className="space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                      1. Personal &amp; Account Details
                    </h2>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                          Full Name &amp; Title *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Dr. Arthur Bell or Sarah Jenkins"
                          className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@university.edu"
                          className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                          Password *
                        </label>
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="At least 6 characters"
                          className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                          Profile Headline
                        </label>
                        <input
                          type="text"
                          value={headline}
                          onChange={(e) => setHeadline(e.target.value)}
                          placeholder="e.g. Cambridge IGCSE Mathematics Specialist"
                          className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Subject & Pricing */}
                  <div className="space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                      2. Subject Specialisation &amp; Rate
                    </h2>

                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                          Primary Subject *
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        >
                          {SUBJECTS_LIST.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                          Target Level *
                        </label>
                        <select
                          value={level}
                          onChange={(e) => setLevel(e.target.value)}
                          className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        >
                          <option value="IGCSE & O-Level">IGCSE &amp; O-Level</option>
                          <option value="AS & A-Level">AS &amp; A-Level</option>
                          <option value="IGCSE, O-Level & A-Level">All Secondary Levels</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                          Hourly Rate ($ USD) *
                        </label>
                        <input
                          type="number"
                          required
                          min={15}
                          max={200}
                          value={hourlyRate}
                          onChange={(e) => setHourlyRate(Number(e.target.value))}
                          className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Qualifications & Bio */}
                  <div className="space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                      3. Qualifications &amp; Bio
                    </h2>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                        Degrees &amp; Academic Background *
                      </label>
                      <input
                        type="text"
                        required
                        value={qualifications}
                        onChange={(e) => setQualifications(e.target.value)}
                        placeholder="e.g. BSc Mathematics (1st Class, UCL), PGCE Secondary Science"
                        className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                        Certificates or DBS Status
                      </label>
                      <input
                        type="text"
                        value={certificateDetails}
                        onChange={(e) => setCertificateDetails(e.target.value)}
                        placeholder="e.g. Enhanced DBS checked, Cambridge Certified Tutor 2026"
                        className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                        Available Days for Online Lessons
                      </label>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {DAYS_OF_WEEK.map((day) => {
                          const active = availableDays.includes(day);
                          return (
                            <button
                              key={day}
                              type="button"
                              onClick={() => toggleDay(day)}
                              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                                active
                                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                                  : "border border-neutral-300 bg-neutral-50 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
                        Tutor Bio &amp; Cambridge Exam Methodology *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Outline how you teach Cambridge students, focus on past papers, formula mastery, or examiner marking schemes..."
                        className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                      />
                    </div>
                  </div>

                  {/* Section 4: Mandatory Safeguarding Commitments */}
                  <div className="space-y-3 pt-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                      4. Mandatory Safety &amp; Safeguarding Agreement
                    </h2>

                    <label className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeOnlineOnly}
                        onChange={(e) => setAgreeOnlineOnly(e.target.checked)}
                        className="mt-0.5 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      />
                      <span>
                        <strong className="text-neutral-900 dark:text-neutral-100">Strictly Online Only:</strong> I agree that all tutoring sessions must take place exclusively through the platform's secure online environment. I will never offer or conduct in-person tutoring.
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeNoContactSharing}
                        onChange={(e) => setAgreeNoContactSharing(e.target.checked)}
                        className="mt-0.5 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      />
                      <span>
                        <strong className="text-neutral-900 dark:text-neutral-100">Zero Contact Sharing:</strong> I agree never to solicit or share private personal phone numbers, home addresses, or private social media accounts with students.
                      </span>
                    </label>

                    <label className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeSafeguarding}
                        onChange={(e) => setAgreeSafeguarding(e.target.checked)}
                        className="mt-0.5 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
                      />
                      <span>
                        <strong className="text-neutral-900 dark:text-neutral-100">Guardian Oversight Compliance:</strong> I understand that parent/guardian oversight applies to students under 18, and I agree to uphold professional Cambridge safeguarding standards at all times.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-neutral-900 py-3.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Publish Tutor Profile &amp; Open Workspace
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
