import type { SubjectNotes } from "./types";
import { COMPUTER_SCIENCE_PART1 } from "./computer-science-1";
import { COMPUTER_SCIENCE_PART2 } from "./computer-science-2";

/**
 * Cambridge IGCSE Computer Science (0478) 2026–2028 Syllabus Notes
 * Complete comprehensive text-only notes across all 10 official syllabus topics:
 * - Chapter 1: Data Representation
 * - Chapter 2: Data Transmission
 * - Chapter 3: Hardware
 * - Chapter 4: Software
 * - Chapter 5: The Internet and its Uses
 * - Chapter 6: Automated and Emerging Technologies
 * - Chapter 7: Algorithm Design and Problem-Solving
 * - Chapter 8: Programming
 * - Chapter 9: Databases
 * - Chapter 10: Boolean Logic
 */
export const COMPUTER_SCIENCE: SubjectNotes = {
  id: "computer-science",
  name: "Computer Science",
  code: "0478",
  color: "bg-cyan-600",
  chapters: [...COMPUTER_SCIENCE_PART1, ...COMPUTER_SCIENCE_PART2],
};
