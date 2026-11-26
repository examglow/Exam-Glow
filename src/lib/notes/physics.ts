import type { SubjectNotes } from "./types";
import { PHYSICS_CORE } from "./physics-core";
import { PHYSICS_EXTENDED } from "./physics-extended";

/**
 * Cambridge IGCSE Physics (0625)
 * Default export points to Extended (most comprehensive).
 */
export const PHYSICS: SubjectNotes = {
  ...PHYSICS_EXTENDED,
  code: "0625",
};

export { PHYSICS_CORE, PHYSICS_EXTENDED };
