import type { SubjectNotes } from "./types";
import { COMMERCE_PART1 } from "./commerce-1";
import { COMMERCE_PART2 } from "./commerce-2";

/**
 * Cambridge IGCSE Commerce (0715) 2029 Syllabus Notes
 * Complete comprehensive text-only notes across all 6 official syllabus topics:
 * - Chapter 1: Commerce and Production
 * - Chapter 2: Commercial Operations
 * - Chapter 3: Globalisation of Trade
 * - Chapter 4: Logistics in Commerce
 * - Chapter 5: Aids to Trade that Support Commerce
 * - Chapter 6: Sustainability and Ethics
 */
export const COMMERCE: SubjectNotes = {
  id: "commerce",
  name: "Commerce",
  code: "0715",
  color: "bg-emerald-600",
  chapters: [...COMMERCE_PART1, ...COMMERCE_PART2],
};
