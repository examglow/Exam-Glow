import type { SubjectNotes } from "./types";
import { CHEMISTRY_CORE_PART1 } from "./chemistry-core-1";
import { CHEMISTRY_CORE_PART2 } from "./chemistry-core-2";
import { CHEMISTRY_CORE_PART3 } from "./chemistry-core-3";
import { CHEMISTRY_CORE_PART4 } from "./chemistry-core-4";

/**
 * Cambridge IGCSE Chemistry (0620) Core Syllabus Notes
 * Complete 27-chapter course covering all 12 official syllabus sections:
 * 1. States of matter (Chapter 1)
 * 2. Atoms, elements and compounds (Chapters 2–7)
 * 3. Stoichiometry (Chapters 8–9)
 * 4. Electrochemistry (Chapter 10)
 * 5. Chemical energetics (Chapter 11)
 * 6. Chemical reactions (Chapters 12–14)
 * 7. Acids, bases and salts (Chapters 15–16)
 * 8. The Periodic Table (Chapter 17)
 * 9. Metals (Chapters 18–20)
 * 10. Chemistry of the environment (Chapter 21)
 * 11. Organic chemistry (Chapters 22–25)
 * 12. Experimental techniques and chemical analysis (Chapters 26–27)
 */
export const CHEMISTRY_CORE: SubjectNotes = {
  id: "chemistry",
  name: "Chemistry",
  code: "0620 Core",
  color: "bg-teal-600",
  chapters: [
    ...CHEMISTRY_CORE_PART1,
    ...CHEMISTRY_CORE_PART2,
    ...CHEMISTRY_CORE_PART3,
    ...CHEMISTRY_CORE_PART4,
  ],
};
