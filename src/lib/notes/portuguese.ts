import type { SubjectNotes } from "./types";
import { PORTUGUESE_PART1 } from "./portuguese-1";
import { PORTUGUESE_PART2 } from "./portuguese-2";

/**
 * Cambridge IGCSE First Language Portuguese (0504) 2028–2029 Syllabus Notes
 * Complete comprehensive text-only notes across all 6 syllabus chapters:
 * - Chapter 1: Compreensão e Análise Textual (Reading Comprehension)
 * - Chapter 2: Análise de Linguagem e Efeitos Estilísticos (Language & Style)
 * - Chapter 3: Redação Dirigida e Síntese (Directed Writing & Summary)
 * - Chapter 4: Composição Dissertativa e Argumentativa (Discursive & Argumentative Writing)
 * - Chapter 5: Composição Narrativa e Descritiva (Narrative & Descriptive Composition)
 * - Chapter 6: Gramática, Ortografia e Variações Lusófonas (Grammar, Orthography & Lusophone Contexts)
 */
export const PORTUGUESE: SubjectNotes = {
  id: "portuguese",
  name: "First Language Portuguese",
  code: "0504",
  color: "bg-green-700",
  chapters: [...PORTUGUESE_PART1, ...PORTUGUESE_PART2],
};
