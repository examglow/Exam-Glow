import type { SubjectNotes } from "./types";
import { CHEMISTRY_CHAPTER_1 } from "./chemistry-chapter-1";
import { CHEMISTRY_CHAPTER_2 } from "./chemistry-chapter-2";
import { CHEMISTRY_CHAPTER_3 } from "./chemistry-chapter-3";
import { CHEMISTRY_CHAPTER_4 } from "./chemistry-chapter-4";
import { CHEMISTRY_CHAPTER_5 } from "./chemistry-chapter-5";
import { CHEMISTRY_CHAPTER_6 } from "./chemistry-chapter-6";
import { CHEMISTRY_CHAPTER_7 } from "./chemistry-chapter-7";
import { CHEMISTRY_CHAPTER_8 } from "./chemistry-chapter-8";
import { CHEMISTRY_CHAPTER_9 } from "./chemistry-chapter-9";
import { CHEMISTRY_CHAPTER_10 } from "./chemistry-chapter-10";
import { CHEMISTRY_CHAPTER_11 } from "./chemistry-chapter-11";
import { CHEMISTRY_CHAPTER_12 } from "./chemistry-chapter-12";
import { CHEMISTRY_CHAPTER_13 } from "./science-origins";

// Chapters 1-12 follow the Cambridge 0620 "Content overview" exactly, in order.
// Chapter 13 is the shared closing history chapter, also appended to biology.
export const CHEMISTRY: SubjectNotes = {
  id: "chemistry",
  name: "Chemistry",
  code: "0620",
  color: "bg-blue-500",
  chapters: [
    CHEMISTRY_CHAPTER_1,
    CHEMISTRY_CHAPTER_2,
    CHEMISTRY_CHAPTER_3,
    CHEMISTRY_CHAPTER_4,
    CHEMISTRY_CHAPTER_5,
    CHEMISTRY_CHAPTER_6,
    CHEMISTRY_CHAPTER_7,
    CHEMISTRY_CHAPTER_8,
    CHEMISTRY_CHAPTER_9,
    CHEMISTRY_CHAPTER_10,
    CHEMISTRY_CHAPTER_11,
    CHEMISTRY_CHAPTER_12,
    CHEMISTRY_CHAPTER_13,
  ],
};
