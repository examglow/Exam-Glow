import type { SubjectNotes } from "./types";
import { ACCOUNTING_CHAPTER_1 } from "./accounting-chapter-1";
import { ACCOUNTING_CHAPTER_2 } from "./accounting-chapter-2";
import { ACCOUNTING_CHAPTER_3 } from "./accounting-chapter-3";
import { ACCOUNTING_CHAPTER_4 } from "./accounting-chapter-4";
import { ACCOUNTING_CHAPTER_5 } from "./accounting-chapter-5";
import { ACCOUNTING_CHAPTER_6 } from "./accounting-chapter-6";
import { ACCOUNTING_CHAPTER_7 } from "./accounting-chapter-7";
import { ACCOUNTING_CHAPTER_8 } from "./accounting-history";

// Chapters 1-7 follow the Cambridge 0452 "Content overview" exactly, in order.
// Chapter 8 is the closing history chapter, accounting-specific.
export const ACCOUNTING: SubjectNotes = {
  id: "accounting",
  name: "Accounting",
  code: "0452",
  color: "bg-emerald-600",
  chapters: [
    ACCOUNTING_CHAPTER_1,
    ACCOUNTING_CHAPTER_2,
    ACCOUNTING_CHAPTER_3,
    ACCOUNTING_CHAPTER_4,
    ACCOUNTING_CHAPTER_5,
    ACCOUNTING_CHAPTER_6,
    ACCOUNTING_CHAPTER_7,
    ACCOUNTING_CHAPTER_8,
  ],
};
