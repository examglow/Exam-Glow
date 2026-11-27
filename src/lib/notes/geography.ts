import type { SubjectNotes } from "./types";
import { GEOGRAPHY_PART1 } from "./geography-1";
import { GEOGRAPHY_PART2 } from "./geography-2";
import { GEOGRAPHY_PART3 } from "./geography-3";

/**
 * Cambridge IGCSE Geography (0460) 2027–2029 Syllabus Notes
 * Complete, authoritative coverage of:
 * - Theme 1: Population and Settlement (Chapters 1–2)
 * - Theme 2: The Natural Environment (Chapters 3–6)
 * - Theme 3: Economic Development (Chapters 7–9)
 * - Paper 2 & Paper 4: Geographical Skills and Fieldwork Enquiry (Chapter 10)
 */
export const GEOGRAPHY: SubjectNotes = {
  id: "geography",
  name: "Geography",
  code: "0460",
  color: "bg-green-600",
  chapters: [
    ...GEOGRAPHY_PART1,
    ...GEOGRAPHY_PART2,
    ...GEOGRAPHY_PART3,
  ],
};
