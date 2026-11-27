import type { SubjectNotes } from "./types";
import { BUSINESS_STUDIES_PART1 } from "./business-studies-1";
import { BUSINESS_STUDIES_PART2 } from "./business-studies-2";

export const BUSINESS_STUDIES: SubjectNotes = {
  id: "business-studies",
  name: "Business Studies",
  code: "0450",
  color: "bg-amber-600",
  chapters: [...BUSINESS_STUDIES_PART1, ...BUSINESS_STUDIES_PART2],
};
