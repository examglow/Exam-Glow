import type { SubjectNotes } from "./types";
import { AGRICULTURE_CHAPTER_1 } from "./agriculture-chapter-1";
import { AGRICULTURE_CHAPTER_2 } from "./agriculture-chapter-2";
import { AGRICULTURE_CHAPTER_3 } from "./agriculture-chapter-3";
import { AGRICULTURE_CHAPTER_4 } from "./agriculture-chapter-4";
import { AGRICULTURE_CHAPTER_5 } from "./agriculture-chapter-5";
import { AGRICULTURE_CHAPTER_6 } from "./agriculture-chapter-6";
import { AGRICULTURE_CHAPTER_7 } from "./agriculture-chapter-7";
import { AGRICULTURE_CHAPTER_8 } from "./agriculture-chapter-8";
import { AGRICULTURE_CHAPTER_9 } from "./agriculture-chapter-9";
import { AGRICULTURE_CHAPTER_10 } from "./agriculture-chapter-10";
import { AGRICULTURE_CHAPTER_11 } from "./agriculture-history";

// Chapters 1-10 follow the Cambridge 0600 "Content overview" exactly, in order.
// Chapter 11 is the closing history chapter, agriculture-specific.
export const AGRICULTURE: SubjectNotes = {
  id: "agriculture",
  name: "Agriculture",
  code: "0600",
  color: "bg-lime-600",
  chapters: [
    AGRICULTURE_CHAPTER_1,
    AGRICULTURE_CHAPTER_2,
    AGRICULTURE_CHAPTER_3,
    AGRICULTURE_CHAPTER_4,
    AGRICULTURE_CHAPTER_5,
    AGRICULTURE_CHAPTER_6,
    AGRICULTURE_CHAPTER_7,
    AGRICULTURE_CHAPTER_8,
    AGRICULTURE_CHAPTER_9,
    AGRICULTURE_CHAPTER_10,
    AGRICULTURE_CHAPTER_11,
  ],
};
