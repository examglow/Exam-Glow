import type { SubjectNotes } from "./types";
import { CHEMISTRY_EXTENDED_PART1 } from "./chemistry-extended-1";
import { CHEMISTRY_EXTENDED_PART2 } from "./chemistry-extended-2";
import { CHEMISTRY_EXTENDED_PART3 } from "./chemistry-extended-3";
import { CHEMISTRY_EXTENDED_PART4 } from "./chemistry-extended-4";

/**
 * Cambridge IGCSE Chemistry (0620) Extended Syllabus Notes
 * Complete 29-chapter course covering all 12 official syllabus sections with full Supplement material:
 * 1. States of matter (Chapter 1)
 * 2. Atoms, elements and compounds (Chapters 2–7)
 * 3. Stoichiometry (Chapters 8–9)
 * 4. Electrochemistry (Chapters 10, 15)
 * 5. Chemical energetics (Chapter 11)
 * 6. Chemical reactions (Chapters 12–14)
 * 7. Acids, bases and salts (Chapters 16–17)
 * 8. The Periodic Table (Chapter 18)
 * 9. Metals (Chapters 19–21)
 * 10. Chemistry of the environment (Chapter 22)
 * 11. Organic chemistry (Chapters 23–27)
 * 12. Experimental techniques and chemical analysis (Chapters 28–29)
 */
export const CHEMISTRY_EXTENDED: SubjectNotes = {
  id: "chemistry",
  name: "Chemistry",
  code: "0620 Extended",
  color: "bg-teal-600",
  chapters: [
    ...CHEMISTRY_EXTENDED_PART1,
    ...CHEMISTRY_EXTENDED_PART2,
    ...CHEMISTRY_EXTENDED_PART3,
    ...CHEMISTRY_EXTENDED_PART4,
  ],
};
