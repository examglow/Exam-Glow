import type { SubjectNotes } from "./types";
import { CHEMISTRY_CORE } from "./chemistry-core";
import { CHEMISTRY_EXTENDED } from "./chemistry-extended";

/**
 * Cambridge IGCSE Chemistry (0620)
 * Default export points to Extended (most comprehensive).
 */
export const CHEMISTRY: SubjectNotes = {
  ...CHEMISTRY_EXTENDED,
  code: "0620",
};

export { CHEMISTRY_CORE, CHEMISTRY_EXTENDED };
