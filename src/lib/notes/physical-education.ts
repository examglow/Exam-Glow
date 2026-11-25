import type { SubjectNotes } from "./types";
import { PE_CHAPTER_1 } from "./physical-education-chapter-1";
import { PE_CHAPTER_2 } from "./physical-education-chapter-2";
import { PE_CHAPTER_3 } from "./physical-education-chapter-3";
import { PE_CHAPTER_4 } from "./physical-education-chapter-4";
import { PE_CHAPTER_5 } from "./pe-history";

// Chapters 1-4 follow the Cambridge 0413 "Content overview" exactly, in order.
// Chapter 5 is a PE-specific closing history chapter.
export const PHYSICAL_EDUCATION: SubjectNotes = {
  id: "physical-education",
  name: "Physical Education",
  code: "0413",
  color: "bg-green-600",
  chapters: [PE_CHAPTER_1, PE_CHAPTER_2, PE_CHAPTER_3, PE_CHAPTER_4, PE_CHAPTER_5],
};
