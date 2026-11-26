import type { SubjectNotes } from "./types";
import { ECONOMICS_PART1 } from "./economics-1";
import { ECONOMICS_PART2 } from "./economics-2";
import { ECONOMICS_PART3 } from "./economics-3";
import { ECONOMICS_PART4 } from "./economics-4";

/**
 * Cambridge IGCSE Economics (0455) 2027–2029 Syllabus Notes
 * Complete 24 chapters covering all 6 official Cambridge sections:
 * 1. The Basic Economic Problem (Ch 1–4)
 * 2. The Allocation of Resources (Ch 5–9)
 * 3. Microeconomic Decision-Makers (Ch 10–13)
 * 4. Government and the Macroeconomy (Ch 14–18)
 * 5. Economic Development (Ch 19–20)
 * 6. International Trade and Globalisation (Ch 21–24)
 */
export const ECONOMICS: SubjectNotes = {
  id: "economics",
  name: "Economics",
  code: "0455",
  color: "bg-amber-500",
  chapters: [
    ...ECONOMICS_PART1,
    ...ECONOMICS_PART2,
    ...ECONOMICS_PART3,
    ...ECONOMICS_PART4,
  ],
};
