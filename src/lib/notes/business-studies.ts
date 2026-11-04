import type { SubjectNotes } from "./types";
import { BUSINESS_STUDIES_CHAPTER_1 } from "./business-studies-chapter-1";
import { BUSINESS_STUDIES_CHAPTER_2 } from "./business-studies-chapter-2";
import { BUSINESS_STUDIES_CHAPTER_3 } from "./business-studies-chapter-3";
import { BUSINESS_STUDIES_CHAPTER_4 } from "./business-studies-chapter-4";
import { BUSINESS_STUDIES_CHAPTER_5 } from "./business-studies-chapter-5";
import { BUSINESS_STUDIES_CHAPTER_6 } from "./business-studies-chapter-6";

// One chapter per syllabus topic of the 0264 2027-2029 syllabus, with 6 plates each.
export const BUSINESS_STUDIES: SubjectNotes = {
  id: "business-studies",
  name: "Business Studies",
  code: "0264",
  color: "bg-yellow-500",
  chapters: [
    BUSINESS_STUDIES_CHAPTER_1,
    BUSINESS_STUDIES_CHAPTER_2,
    BUSINESS_STUDIES_CHAPTER_3,
    BUSINESS_STUDIES_CHAPTER_4,
    BUSINESS_STUDIES_CHAPTER_5,
    BUSINESS_STUDIES_CHAPTER_6,
  ],
};
