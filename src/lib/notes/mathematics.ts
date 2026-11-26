import type { SubjectNotes } from "./types";
import { MATHEMATICS_CORE } from "./mathematics-core";
import { MATHEMATICS_EXTENDED } from "./mathematics-extended";

/**
 * Cambridge IGCSE Mathematics (0580)
 * Default export points to Extended (most comprehensive).
 */
export const MATHEMATICS: SubjectNotes = {
  ...MATHEMATICS_EXTENDED,
  code: "0580",
};

export { MATHEMATICS_CORE, MATHEMATICS_EXTENDED };
