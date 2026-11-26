import type { SubjectNotes } from "./types";
import { MATHEMATICS_CORE } from "./mathematics-core";

/**
 * Cambridge IGCSE Mathematics (0580)
 * Currently points to MATHEMATICS_CORE (44 topics).
 * Extended topics will be added when provided.
 */
export const MATHEMATICS: SubjectNotes = {
  ...MATHEMATICS_CORE,
  code: "0580",
};

export { MATHEMATICS_CORE };
