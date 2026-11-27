import type { SubjectNotes } from "./types";
import { ICT_PART1 } from "./ict-1";
import { ICT_PART2 } from "./ict-2";
import { ICT_PART3 } from "./ict-3";

/**
 * Cambridge IGCSE Information and Communication Technology (0417) 2026–2028 Syllabus Notes
 * Complete, authoritative coverage of all 21 official syllabus sections:
 * - Part 1: Chapters 1–7 (Theory & Core System Concepts)
 * - Part 2: Chapters 8–14 (Security, Audience, Communication & Document Foundation)
 * - Part 3: Chapters 15–21 (Proofing, Charts, Practical Applications - Docs, Databases, Presentations, Spreadsheets, Website Authoring)
 */
export const ICT: SubjectNotes = {
  id: "ict",
  name: "Information and Communication Technology",
  code: "0417",
  color: "bg-cyan-600",
  chapters: [
    ...ICT_PART1,
    ...ICT_PART2,
    ...ICT_PART3,
  ],
};
