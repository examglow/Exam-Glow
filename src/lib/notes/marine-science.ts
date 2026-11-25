import type { SubjectNotes } from "./types";
import { MARINE_SCIENCE_CHAPTER_1 } from "./marine-science-chapter-1";
import { MARINE_SCIENCE_CHAPTER_2 } from "./marine-science-chapter-2";
import { MARINE_SCIENCE_CHAPTER_3 } from "./marine-science-chapter-3";
import { MARINE_SCIENCE_CHAPTER_4 } from "./marine-science-chapter-4";
import { MARINE_SCIENCE_CHAPTER_5 } from "./marine-science-chapter-5";
import { MARINE_SCIENCE_CHAPTER_6 } from "./marine-science-chapter-6";

// One chapter per syllabus topic of the 0697 2027-2029 syllabus, with 6 plates each.
export const MARINE_SCIENCE: SubjectNotes = {
  id: "marine-science",
  name: "Marine Science",
  code: "0697",
  color: "bg-teal-500",
  chapters: [
    MARINE_SCIENCE_CHAPTER_1,
    MARINE_SCIENCE_CHAPTER_2,
    MARINE_SCIENCE_CHAPTER_3,
    MARINE_SCIENCE_CHAPTER_4,
    MARINE_SCIENCE_CHAPTER_5,
    MARINE_SCIENCE_CHAPTER_6,
  ],
};
