import type { SubjectNotes } from "./types";
import { ENVIRONMENTAL_MANAGEMENT_PART1 } from "./environmental-management-1";
import { ENVIRONMENTAL_MANAGEMENT_PART2 } from "./environmental-management-2";

/**
 * Cambridge IGCSE Environmental Management (0680) 2027–2029 Syllabus Notes
 * Complete comprehensive text-only notes across all 9 official syllabus topics:
 * - Chapter 1: Rocks and Minerals and their Exploitation
 * - Chapter 2: Energy and the Environment
 * - Chapter 3: Agriculture and the Environment
 * - Chapter 4: Water and its Management
 * - Chapter 5: Oceans and Fisheries
 * - Chapter 6: Managing Natural Hazards
 * - Chapter 7: The Atmosphere and Human Activities
 * - Chapter 8: Human Population
 * - Chapter 9: Natural Ecosystems and Human Activities
 */
export const ENVIRONMENTAL_MANAGEMENT: SubjectNotes = {
  id: "environmental-management",
  name: "Environmental Management",
  code: "0680",
  color: "bg-teal-600",
  chapters: [...ENVIRONMENTAL_MANAGEMENT_PART1, ...ENVIRONMENTAL_MANAGEMENT_PART2],
};
