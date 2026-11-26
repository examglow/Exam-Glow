import type { SubjectNotes } from "./types";
import { PHYSICS_CORE_PART1 } from "./physics-core-1";
import { PHYSICS_CORE_PART2 } from "./physics-core-2";
import { PHYSICS_CORE_PART3 } from "./physics-core-3";
import { PHYSICS_CORE_PART4 } from "./physics-core-4";

/**
 * Cambridge IGCSE Physics (0625) Core Syllabus Notes
 * Complete 24-chapter course covering all 6 official Cambridge syllabus sections:
 * 1. Motion, forces and energy (Chapters 1–7)
 * 2. Thermal physics (Chapters 8–11)
 * 3. Waves (Chapters 12–15)
 * 4. Electricity and magnetism (Chapters 16–20)
 * 5. Nuclear physics (Chapters 21–22)
 * 6. Space physics (Chapters 23–24)
 */
export const PHYSICS_CORE: SubjectNotes = {
  id: "physics",
  name: "Physics",
  code: "0625 Core",
  color: "bg-purple-600",
  chapters: [
    ...PHYSICS_CORE_PART1,
    ...PHYSICS_CORE_PART2,
    ...PHYSICS_CORE_PART3,
    ...PHYSICS_CORE_PART4,
  ],
};
