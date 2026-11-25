export type TutorReview = {
  id: string;
  studentName: string;
  rating: number; // 1-5
  date: string;
  comment: string;
  verifiedBooking: boolean;
};

export type TutorProfile = {
  id: string;
  name: string;
  headline: string;
  subject: string;
  syllabus: string; // e.g. "Cambridge Mathematics"
  level: string; // e.g. "IGCSE & O-Level", "A-Level"
  isOnlineOnly: boolean; // strictly online for safety
  identityVerified: boolean;
  qualificationsChecked: boolean;
  hourlyRate: number; // e.g. 35
  currency: string; // e.g. "$"
  avatarUrl?: string;
  avatarColor?: string;
  qualifications: string;
  certificateDetails?: string;
  availability: string;
  availableDays: string[];
  timeSlots: string[];
  bio: string;
  rating: number; // average rating
  reviewCount: number;
  reviews: TutorReview[];
  location?: string;
  safeguardingTrained: boolean;
  dbsChecked: boolean;
  email?: string;
  password?: string;
};

export type GuardianInfo = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  relation: "Parent" | "Legal Guardian";
  verified: boolean;
  consentGiven: boolean;
  consentDate: string;
  allowDirectBooking: boolean;
  requireApprovalUnder16: boolean;
  paymentApproved: boolean;
  linkedStudentId: string;
  linkCode: string;
};

export type StudentSafetyProfile = {
  studentName: string;
  studentEmail: string;
  studentAge: number;
  guardian: GuardianInfo | null;
};

export type LessonBooking = {
  id: string;
  tutorId: string;
  tutorName: string;
  tutorAvatarColor?: string;
  subject: string;
  studentName: string;
  studentEmail: string;
  studentAge: number;
  date: string;
  timeSlot: string;
  topicNotes: string;
  hourlyRate: number;
  currency: string;
  status: "confirmed" | "completed" | "cancelled" | "pending_guardian_approval" | "refund_requested";
  meetingLink: string;
  createdAt: string;
  requiresGuardianApproval: boolean;
  guardianApproved: boolean;
  guardianApprovedAt?: string;
  cancellationReason?: string;
  refundStatus?: "none" | "requested" | "refunded";
  refundAmount?: number;
};

export type SafeguardingReport = {
  id: string;
  reporterRole: "student" | "guardian";
  reporterName: string;
  reporterEmail: string;
  tutorId: string;
  tutorName: string;
  reason: string;
  details: string;
  date: string;
  status: "under_investigation" | "resolved" | "tutor_suspended";
};

const TUTORS_STORAGE_KEY = "examglow_tutors_list_v3";
const BOOKINGS_STORAGE_KEY = "examglow_tutor_bookings_v3";
const SAFETY_PROFILE_KEY = "examglow_safety_profile_v3";
const REPORTS_STORAGE_KEY = "examglow_safeguarding_reports_v3";

export function getTutors(): TutorProfile[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(TUTORS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Filter out any legacy dummy mock seed IDs
    return parsed.filter((t: TutorProfile) => !t.id.startsWith("tutor-1") && !t.id.startsWith("tutor-2") && !t.id.startsWith("tutor-3") && !t.id.startsWith("tutor-4") && !t.id.startsWith("tutor-5") && !t.id.startsWith("tutor-6"));
  } catch {
    return [];
  }
}

export function saveTutorProfile(profile: Partial<TutorProfile> & { name: string; subject: string; hourlyRate: number }): TutorProfile {
  const current = getTutors();
  const existingIdx = current.findIndex((t) => t.id === profile.id || (profile.email && t.email === profile.email));

  const newProfile: TutorProfile = {
    id: profile.id || `tutor-${Date.now()}`,
    name: profile.name,
    headline: profile.headline || `Cambridge ${profile.subject} Online Tutor`,
    subject: profile.subject,
    syllabus: profile.syllabus || `Cambridge ${profile.subject}`,
    level: profile.level || "IGCSE & O-Level",
    isOnlineOnly: true, // Strictly online
    identityVerified: Boolean(profile.identityVerified ?? true),
    qualificationsChecked: Boolean(profile.qualificationsChecked ?? true),
    safeguardingTrained: Boolean(profile.safeguardingTrained ?? true),
    dbsChecked: Boolean(profile.dbsChecked ?? true),
    hourlyRate: Number(profile.hourlyRate) || 30,
    currency: profile.currency || "$",
    avatarColor: profile.avatarColor || "bg-neutral-800",
    qualifications: profile.qualifications || "",
    certificateDetails: profile.certificateDetails || "",
    availability: profile.availability || "Online Sessions Available",
    availableDays: profile.availableDays || ["Monday", "Wednesday", "Friday"],
    timeSlots: profile.timeSlots || ["10:00 AM", "2:00 PM", "4:30 PM", "6:00 PM"],
    bio: profile.bio || "",
    rating: profile.rating || 0,
    reviewCount: profile.reviewCount || 0,
    reviews: profile.reviews || [],
    email: profile.email || "",
    password: profile.password || "",
  };

  let updated: TutorProfile[];
  if (existingIdx >= 0) {
    updated = [...current];
    updated[existingIdx] = newProfile;
  } else {
    updated = [newProfile, ...current];
  }

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(TUTORS_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  }
  return newProfile;
}

export function addTutorReview(tutorId: string, review: { studentName: string; rating: number; comment: string }): void {
  const tutors = getTutors();
  const idx = tutors.findIndex((t) => t.id === tutorId);
  if (idx < 0) return;

  const tutor = tutors[idx]!;
  const newRev: TutorReview = {
    id: `rev-${Date.now()}`,
    studentName: review.studentName || "Anonymous Student",
    rating: Math.max(1, Math.min(5, review.rating)),
    date: "Just now",
    comment: review.comment,
    verifiedBooking: true,
  };

  const updatedReviews = [newRev, ...tutor.reviews];
  const newCount = updatedReviews.length;
  const newRating = Number((updatedReviews.reduce((acc, r) => acc + r.rating, 0) / newCount).toFixed(1));

  const updatedTutor: TutorProfile = {
    ...tutor,
    reviews: updatedReviews,
    reviewCount: newCount,
    rating: newRating,
  };

  tutors[idx] = updatedTutor;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(TUTORS_STORAGE_KEY, JSON.stringify(tutors));
    } catch {}
  }
}

// ─── Safety & Guardian Profile Store ──────────────────────────────────────────

export function getSafetyProfile(): StudentSafetyProfile {
  let defaultName = "";
  let defaultEmail = "";
  try {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("examglow.profile");
      if (raw) {
        const p = JSON.parse(raw);
        if (p.name) defaultName = p.name;
        if (p.email) defaultEmail = p.email;
      }
    }
  } catch {}

  const defaultProfile: StudentSafetyProfile = {
    studentName: defaultName || "Student",
    studentEmail: defaultEmail,
    studentAge: 16,
    guardian: null,
  };

  if (typeof window === "undefined") return defaultProfile;
  try {
    const raw = localStorage.getItem(SAFETY_PROFILE_KEY);
    if (!raw) return defaultProfile;
    const parsed = JSON.parse(raw);
    // Discard any old mock data
    if (parsed.studentName === "Alex Carter" && parsed.guardian?.name === "Sarah Carter") {
      localStorage.removeItem(SAFETY_PROFILE_KEY);
      return defaultProfile;
    }
    return {
      ...defaultProfile,
      ...parsed,
      studentName: parsed.studentName || defaultProfile.studentName,
      studentEmail: parsed.studentEmail || defaultProfile.studentEmail,
    };
  } catch {
    return defaultProfile;
  }
}

export function updateSafetyProfile(updates: Partial<StudentSafetyProfile>): StudentSafetyProfile {
  const current = getSafetyProfile();
  const updated: StudentSafetyProfile = {
    ...current,
    ...updates,
  };
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(SAFETY_PROFILE_KEY, JSON.stringify(updated));
    } catch {}
  }
  return updated;
}

export function linkGuardian(data: {
  name: string;
  email: string;
  relation: "Parent" | "Legal Guardian";
  requireApprovalUnder16: boolean;
}): GuardianInfo {
  const guardian: GuardianInfo = {
    id: `guard-${Date.now()}`,
    name: data.name,
    email: data.email,
    relation: data.relation,
    verified: true,
    consentGiven: true,
    consentDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    allowDirectBooking: true,
    requireApprovalUnder16: data.requireApprovalUnder16,
    paymentApproved: true,
    linkedStudentId: `student-${Date.now().toString(36)}`,
    linkCode: `GUARD-${Math.floor(1000 + Math.random() * 9000)}`,
  };

  updateSafetyProfile({ guardian });
  return guardian;
}

// ─── Bookings Store with Guardian Approval & Refunds ──────────────────────────

export function getBookings(): LessonBooking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function createBooking(data: {
  tutorId: string;
  tutorName: string;
  tutorAvatarColor?: string;
  subject: string;
  studentName: string;
  studentEmail: string;
  studentAge: number;
  date: string;
  timeSlot: string;
  topicNotes: string;
  hourlyRate: number;
  currency: string;
}): LessonBooking {
  const safety = getSafetyProfile();
  const age = data.studentAge || safety.studentAge;

  // Age-appropriate rules:
  // Under 14: Mandatory guardian approval required
  // 14-17: Guardian approval required if guardian has enabled requireApprovalUnder16
  const requiresGuardianApproval =
    age < 14 || (age < 18 && safety.guardian?.requireApprovalUnder16 === true);

  const initialStatus: LessonBooking["status"] = requiresGuardianApproval
    ? "pending_guardian_approval"
    : "confirmed";

  const booking: LessonBooking = {
    id: `book-${Date.now()}`,
    ...data,
    studentAge: age,
    status: initialStatus,
    requiresGuardianApproval,
    guardianApproved: !requiresGuardianApproval,
    meetingLink: `https://meet.examglow.com/session-${Date.now().toString(36)}`,
    createdAt: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    refundStatus: "none",
  };

  const existing = getBookings();
  const updated = [booking, ...existing];

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  }

  return booking;
}

export function approveBooking(bookingId: string): void {
  const bookings = getBookings();
  const idx = bookings.findIndex((b) => b.id === bookingId);
  if (idx < 0) return;

  const current = bookings[idx]!;
  bookings[idx] = {
    ...current,
    status: "confirmed",
    guardianApproved: true,
    guardianApprovedAt: new Date().toLocaleString(),
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
    } catch {}
  }
}

export function cancelBooking(bookingId: string, reason?: string): void {
  const bookings = getBookings();
  const idx = bookings.findIndex((b) => b.id === bookingId);
  if (idx < 0) return;

  const current = bookings[idx]!;
  bookings[idx] = {
    ...current,
    status: "cancelled",
    cancellationReason: reason || "Cancelled by guardian or student",
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
    } catch {}
  }
}

export function requestRefund(bookingId: string, reason: string): void {
  const bookings = getBookings();
  const idx = bookings.findIndex((b) => b.id === bookingId);
  if (idx < 0) return;

  const current = bookings[idx]!;
  bookings[idx] = {
    ...current,
    status: "refund_requested",
    refundStatus: "requested",
    cancellationReason: reason,
    refundAmount: current.hourlyRate,
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
    } catch {}
  }
}

// ─── Safeguarding Reports Store ────────────────────────────────────────────────

export function getSafeguardingReports(): SafeguardingReport[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(REPORTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function createSafeguardingReport(data: {
  reporterRole: "student" | "guardian";
  reporterName: string;
  reporterEmail: string;
  tutorId: string;
  tutorName: string;
  reason: string;
  details: string;
}): SafeguardingReport {
  const report: SafeguardingReport = {
    id: `report-${Date.now()}`,
    ...data,
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    status: "under_investigation",
  };

  const existing = getSafeguardingReports();
  const updated = [report, ...existing];

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(REPORTS_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  }

  return report;
}
