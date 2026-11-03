import type { SubjectNotes } from "./types";
import { ECONOMICS_CHAPTER_1 } from "./economics-chapter-1";
import { ECONOMICS_CHAPTER_2 } from "./economics-chapter-2";
import { ECONOMICS_CHAPTER_3 } from "./economics-chapter-3";
import { ECONOMICS_CHAPTER_4 } from "./economics-chapter-4";
import { ECONOMICS_CHAPTER_5 } from "./economics-chapter-5";
import { ECONOMICS_CHAPTER_6 } from "./economics-chapter-6";

// One chapter per syllabus topic of the 0455 2027-2029 syllabus, with 6 plates each.
export const ECONOMICS: SubjectNotes = {
  id: "economics",
  name: "Economics",
  code: "0455",
  color: "bg-amber-500",
  chapters: [
    ECONOMICS_CHAPTER_1,
    ECONOMICS_CHAPTER_2,
    ECONOMICS_CHAPTER_3,
    ECONOMICS_CHAPTER_4,
    ECONOMICS_CHAPTER_5,
    ECONOMICS_CHAPTER_6,
  ],
};
