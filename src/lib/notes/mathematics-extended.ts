import type { SubjectNotes } from "./types";
import { MATHEMATICS_EXTENDED_NUMBER } from "./mathematics-extended-1-number";
import { MATHEMATICS_EXTENDED_ALGEBRA } from "./mathematics-extended-2-algebra";
import { MATHEMATICS_EXTENDED_GRAPHS } from "./mathematics-extended-3-graphs";
import { MATHEMATICS_EXTENDED_GEOMETRY } from "./mathematics-extended-4-geometry";
import { MATHEMATICS_EXTENDED_MEASURES } from "./mathematics-extended-5-measures";
import { MATHEMATICS_EXTENDED_TRIG } from "./mathematics-extended-6-trig";
import { MATHEMATICS_EXTENDED_VECTORS } from "./mathematics-extended-7-vectors";
import { MATHEMATICS_EXTENDED_PROBABILITY } from "./mathematics-extended-8-probability";
import { MATHEMATICS_EXTENDED_STATISTICS } from "./mathematics-extended-9-statistics";

/**
 * Cambridge IGCSE Mathematics (0580) Extended Syllabus Notes
 * Complete 37-chapter course across all 9 syllabus sections:
 * 1. Number (Chapters 1–14: Types, Sets, Primes, Powers, Fractions, Percentages, Interest, Surds, FDP, Ratios, Measures, Time, Rounding, Calculator)
 * 2. Algebra & Sequences (Chapters 15–25: Intro, Indices, Expanding, Alg Fractions, Linear Eq, Quadratics, Functions, Inequalities, Rearranging, Simultaneous, Sequences)
 * 3. Coordinate Geometry & Graphs (Chapters 26–29: Linear Graphs, Further Graphs, Gradients/Area, Real-Life)
 * 4. Geometry (Chapters 30–33: Symmetry, Angles, Bearings, Circle Theorems)
 * 5. Lengths, Areas & Volumes (Chapters 34–37: Area/Perimeter, Circles, Volume, Similarity)
 * 6. Pythagoras & Trigonometry (Chapters 38–41: Pythagoras, Right-angle Trig, Sine/Cosine Rules, 3D Trig)
 * 7. Vectors & Transformations (Chapters 42–43: Vectors, Transformations)
 * 8. Probability (Chapters 44–46: Basic, Diagrams, Conditional)
 * 9. Statistics (Chapters 47–51: Averages, Diagrams, Histograms, Cumulative Frequency, Scatter)
 */
export const MATHEMATICS_EXTENDED: SubjectNotes = {
  id: "mathematics",
  name: "Mathematics",
  code: "0580 Extended",
  color: "bg-blue-600",
  chapters: [
    ...MATHEMATICS_EXTENDED_NUMBER,
    ...MATHEMATICS_EXTENDED_ALGEBRA,
    ...MATHEMATICS_EXTENDED_GRAPHS,
    ...MATHEMATICS_EXTENDED_GEOMETRY,
    ...MATHEMATICS_EXTENDED_MEASURES,
    ...MATHEMATICS_EXTENDED_TRIG,
    ...MATHEMATICS_EXTENDED_VECTORS,
    ...MATHEMATICS_EXTENDED_PROBABILITY,
    ...MATHEMATICS_EXTENDED_STATISTICS,
  ],
};
