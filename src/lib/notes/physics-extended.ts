import type { SubjectNotes } from "./types";
import { PHYSICS_EXTENDED_PART1 } from "./physics-extended-1";
import { PHYSICS_EXTENDED_PART2 } from "./physics-extended-2";
import { PHYSICS_EXTENDED_PART3 } from "./physics-extended-3";
import { PHYSICS_EXTENDED_PART4 } from "./physics-extended-4";

/**
 * Cambridge IGCSE Physics (0625) Extended Syllabus Notes
 * Complete 26-chapter course covering all 6 official Cambridge syllabus sections with full Supplement:
 * 1. Motion, forces and energy (Chapters 1–7)
 * 2. Thermal physics (Chapters 8–11)
 * 3. Waves (Chapters 12–16)
 * 4. Electricity and magnetism (Chapters 17–21)
 * 5. Nuclear physics (Chapters 22–23)
 * 6. Space physics (Chapters 24–26)
 */
export const PHYSICS_EXTENDED: SubjectNotes = {
  id: "physics",
  name: "Physics",
  code: "0625 Extended",
  color: "bg-purple-600",
  chapters: [
    ...PHYSICS_EXTENDED_PART1,
    ...PHYSICS_EXTENDED_PART2,
    ...PHYSICS_EXTENDED_PART3,
    ...PHYSICS_EXTENDED_PART4,
  ],
};
