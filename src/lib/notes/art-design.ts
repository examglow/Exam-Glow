import type { SubjectNotes } from "./types";
import { ART_DESIGN_CHAPTER_1 } from "./art-design-chapter-1";
import { ART_DESIGN_CHAPTER_2 } from "./art-design-chapter-2";
import { ART_DESIGN_CHAPTER_3 } from "./art-design-chapter-3";
import { ART_DESIGN_CHAPTER_4 } from "./art-design-chapter-4";
import { ART_DESIGN_CHAPTER_5 } from "./art-design-chapter-5";
import { ART_DESIGN_CHAPTER_6 } from "./art-design-chapter-6";
import { ART_DESIGN_CHAPTER_7 } from "./art-design-chapter-7";
import { ART_DESIGN_CHAPTER_8 } from "./art-design-chapter-8";
import { ART_DESIGN_CHAPTER_9 } from "./art-design-chapter-9";

// Chapters 1-8 follow the 2027 0400 syllabus; chapter 9 is the closing history chapter.
export const ART_DESIGN: SubjectNotes = {
  id: "art-design",
  name: "Art & Design",
  code: "0400",
  color: "bg-rose-500",
  chapters: [
    ART_DESIGN_CHAPTER_1,
    ART_DESIGN_CHAPTER_2,
    ART_DESIGN_CHAPTER_3,
    ART_DESIGN_CHAPTER_4,
    ART_DESIGN_CHAPTER_5,
    ART_DESIGN_CHAPTER_6,
    ART_DESIGN_CHAPTER_7,
    ART_DESIGN_CHAPTER_8,
    ART_DESIGN_CHAPTER_9,
  ],
};
