import type { SubjectNotes } from "./types";
import { MATHEMATICS_CHAPTER_1 } from "./mathematics-chapter-1";
import { MATHEMATICS_CHAPTER_2 } from "./mathematics-chapter-2";
import { MATHEMATICS_CHAPTER_3 } from "./mathematics-chapter-3";
import { MATHEMATICS_CHAPTER_4 } from "./mathematics-chapter-4";
import { MATHEMATICS_CHAPTER_5 } from "./mathematics-chapter-5";
import { MATHEMATICS_CHAPTER_6 } from "./mathematics-chapter-6";
import { MATHEMATICS_CHAPTER_7 } from "./mathematics-chapter-7";
import { MATHEMATICS_CHAPTER_8 } from "./mathematics-chapter-8";
import { MATHEMATICS_CHAPTER_9 } from "./mathematics-chapter-9";

// One chapter per syllabus topic of the 0580 2028-2030 syllabus, with 6 plates each.
export const MATHEMATICS: SubjectNotes = {
  id: "mathematics",
  name: "Mathematics",
  code: "0580",
  color: "bg-blue-600",
  chapters: [
    MATHEMATICS_CHAPTER_1,
    MATHEMATICS_CHAPTER_2,
    MATHEMATICS_CHAPTER_3,
    MATHEMATICS_CHAPTER_4,
    MATHEMATICS_CHAPTER_5,
    MATHEMATICS_CHAPTER_6,
    MATHEMATICS_CHAPTER_7,
    MATHEMATICS_CHAPTER_8,
    MATHEMATICS_CHAPTER_9,
  ],
};
