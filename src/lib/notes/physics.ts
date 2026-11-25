import type { SubjectNotes } from "./types";
import { PHYSICS_CHAPTER_1 } from "./physics-chapter-1";
import { PHYSICS_CHAPTER_2 } from "./physics-chapter-2";
import { PHYSICS_CHAPTER_3 } from "./physics-chapter-3";
import { PHYSICS_CHAPTER_4 } from "./physics-chapter-4";
import { PHYSICS_CHAPTER_5 } from "./physics-chapter-5";
import { PHYSICS_CHAPTER_6 } from "./physics-chapter-6";
import { PHYSICS_CHAPTER_7 } from "./physics-history";

// Chapters 1-6 follow the Cambridge 0625 "Content overview" exactly, in order.
// Chapter 7 is the closing history chapter, physics-specific.
export const PHYSICS: SubjectNotes = {
  id: "physics",
  name: "Physics",
  code: "0625",
  color: "bg-purple-500",
  chapters: [
    PHYSICS_CHAPTER_1,
    PHYSICS_CHAPTER_2,
    PHYSICS_CHAPTER_3,
    PHYSICS_CHAPTER_4,
    PHYSICS_CHAPTER_5,
    PHYSICS_CHAPTER_6,
    PHYSICS_CHAPTER_7,
  ],
};
