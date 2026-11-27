import type { SubjectNotes } from "./types";
import { AGRICULTURE_PART1 } from "./agriculture-1";
import { AGRICULTURE_PART2 } from "./agriculture-2";

/**
 * Cambridge IGCSE Agriculture (0600) 2027–2028 Syllabus Notes
 * Exactly 10 syllabus topics, each with its own dedicated chapter.
 */
export const AGRICULTURE: SubjectNotes = {
  id: "agriculture",
  name: "Agriculture",
  code: "0600",
  color: "bg-lime-600",
  chapters: [...AGRICULTURE_PART1, ...AGRICULTURE_PART2],
};
