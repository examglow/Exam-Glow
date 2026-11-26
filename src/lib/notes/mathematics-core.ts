import type { SubjectNotes } from "./types";
import { MATHEMATICS_CORE_NUMBER } from "./mathematics-core-1-number";
import { MATHEMATICS_CORE_ALGEBRA } from "./mathematics-core-2-algebra";
import { MATHEMATICS_CORE_GRAPHS } from "./mathematics-core-3-graphs";
import { MATHEMATICS_CORE_GEOMETRY } from "./mathematics-core-4-geometry";
import { MATHEMATICS_CORE_MEASURES } from "./mathematics-core-5-measures";
import { MATHEMATICS_CORE_TRIG } from "./mathematics-core-6-trig";
import { MATHEMATICS_CORE_TRANSFORMATIONS } from "./mathematics-core-7-transformations";
import { MATHEMATICS_CORE_PROBABILITY } from "./mathematics-core-8-probability";
import { MATHEMATICS_CORE_STATISTICS } from "./mathematics-core-9-statistics";

/**
 * Cambridge IGCSE Mathematics (0580) Core Syllabus Notes
 * Complete 44-chapter course across all 9 syllabus sections:
 * 1. Number (Chapters 1–16)
 * 2. Algebra & Sequences (Chapters 17–24)
 * 3. Coordinate Geometry & Graphs (Chapters 25–27)
 * 4. Geometry (Chapters 28–32)
 * 5. Lengths, Areas & Volumes (Chapters 33–36)
 * 6. Pythagoras & Trigonometry (Chapters 37–38)
 * 7. Transformations (Chapter 39)
 * 8. Probability (Chapters 40–41)
 * 9. Statistics (Chapters 42–44)
 */
export const MATHEMATICS_CORE: SubjectNotes = {
  id: "mathematics",
  name: "Mathematics",
  code: "0580 Core",
  color: "bg-blue-600",
  chapters: [
    ...MATHEMATICS_CORE_NUMBER,
    ...MATHEMATICS_CORE_ALGEBRA,
    ...MATHEMATICS_CORE_GRAPHS,
    ...MATHEMATICS_CORE_GEOMETRY,
    ...MATHEMATICS_CORE_MEASURES,
    ...MATHEMATICS_CORE_TRIG,
    ...MATHEMATICS_CORE_TRANSFORMATIONS,
    ...MATHEMATICS_CORE_PROBABILITY,
    ...MATHEMATICS_CORE_STATISTICS,
  ],
};
