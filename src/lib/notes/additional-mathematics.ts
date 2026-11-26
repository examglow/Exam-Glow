import type { SubjectNotes } from "./types";
import { ADDITIONAL_MATHEMATICS_PART1 } from "./additional-mathematics-1";
import { ADDITIONAL_MATHEMATICS_PART2 } from "./additional-mathematics-2";
import { ADDITIONAL_MATHEMATICS_PART3 } from "./additional-mathematics-3";
import { ADDITIONAL_MATHEMATICS_PART4 } from "./additional-mathematics-4";

/**
 * Cambridge IGCSE Additional Mathematics (0606) 2028–2030 Syllabus Notes
 * Complete 14-chapter course covering all 14 official Cambridge syllabus topics:
 * 1. Functions (Chapter 1)
 * 2. Quadratic functions (Chapter 2)
 * 3. Factors of polynomials (Chapter 3)
 * 4. Equations, inequalities and graphs (Chapter 4)
 * 5. Simultaneous equations (Chapter 5)
 * 6. Logarithmic and exponential functions (Chapter 6)
 * 7. Straight-line graphs (Chapter 7)
 * 8. Coordinate geometry of the circle (Chapter 8)
 * 9. Circular measure (Chapter 9)
 * 10. Trigonometry (Chapter 10)
 * 11. Permutations and combinations (Chapter 11)
 * 12. Series (Chapter 12)
 * 13. Vectors in two dimensions (Chapter 13)
 * 14. Calculus (Chapter 14)
 */
export const ADDITIONAL_MATHEMATICS: SubjectNotes = {
  id: "additional-mathematics",
  name: "Additional Mathematics",
  code: "0606",
  color: "bg-violet-600",
  chapters: [
    ...ADDITIONAL_MATHEMATICS_PART1,
    ...ADDITIONAL_MATHEMATICS_PART2,
    ...ADDITIONAL_MATHEMATICS_PART3,
    ...ADDITIONAL_MATHEMATICS_PART4,
  ],
};
