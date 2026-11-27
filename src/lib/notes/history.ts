import type { SubjectNotes } from "./types";
import { HISTORY_PART1 } from "./history-1";
import { HISTORY_PART2 } from "./history-2";
import { HISTORY_PART3 } from "./history-3";
import { HISTORY_PART4 } from "./history-4";

/**
 * Cambridge IGCSE History (0470) 2027–2028 Syllabus Notes
 * Complete, authoritative coverage of:
 * - Option B: The 20th Century: International Relations since 1919 (Chapters 1–6)
 * - Depth Study B: Germany, 1918–1945 (Chapters 7–9)
 * - Depth Study C: Russia, 1905–1941 (Chapter 10)
 * - Paper 2: Source Skills Mastery (Chapter 11)
 * - Paper 1 & Paper 4: Structured Writing and Extended Essays (Chapter 12)
 */
export const HISTORY: SubjectNotes = {
  id: "history",
  name: "History",
  code: "0470",
  color: "bg-orange-600",
  chapters: [
    ...HISTORY_PART1,
    ...HISTORY_PART2,
    ...HISTORY_PART3,
    ...HISTORY_PART4,
  ],
};
