import type { SubjectNotes } from "./types";
import { BUSINESS_PART1 } from "./business-1";
import { BUSINESS_PART2 } from "./business-2";

/**
 * Cambridge IGCSE (9–1) Business (0774) 2027–2029 Syllabus Notes
 * Complete comprehensive text-only notes across all 6 official syllabus topics:
 * - Chapter 1: Understanding Business Activity
 * - Chapter 2: People in Business
 * - Chapter 3: Marketing
 * - Chapter 4: Operations Management
 * - Chapter 5: Financial Information and Decisions
 * - Chapter 6: External Influences on Business Activity
 */
export const BUSINESS: SubjectNotes = {
  id: "business",
  name: "Business",
  code: "0774",
  color: "bg-amber-600",
  chapters: [...BUSINESS_PART1, ...BUSINESS_PART2],
};
