import type { SubjectNotes } from "./types";
import { FRENCH_PART1 } from "./french-1";
import { FRENCH_PART2 } from "./french-2";

/**
 * Cambridge IGCSE French (0520 / 7156 & First Language French 0501) Syllabus Notes
 * Complete comprehensive text-only notes across all 7 syllabus chapters:
 * - Chapter 1: Listening and Reading Comprehension Strategies (Papers 1 & 2 / 0520 & 0501)
 * - Chapter 2: Master Grammar: Verb Conjugations, Tenses and Moods
 * - Chapter 3: Syntax, Pronouns, Agreements and Negation
 * - Chapter 4: Spoken Communication and Oral Examination Skills (Paper 3 / 0520)
 * - Chapter 5: Writing Techniques: Discursive, Creative and Formal Registers (Paper 4 / 0520 & Paper 2 / 0501)
 * - Chapter 6: Core Thematic Lexicon across the 5 Cambridge Topic Areas
 * - Chapter 7: Cultural Contexts, The Francophone World and Stylistic Register
 */
export const FRENCH: SubjectNotes = {
  id: "french",
  name: "French",
  code: "0520 / 0501",
  color: "bg-blue-600",
  chapters: [...FRENCH_PART1, ...FRENCH_PART2],
};
