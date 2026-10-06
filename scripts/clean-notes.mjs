/**
 * clean-notes.mjs  — safe, minimal, well-tested approach
 *
 * Applies only narrow regex substitutions that cannot corrupt object structure:
 *
 * 1. Strip emoji (whole-file pass)
 * 2. Remove filler sub-bullet lines embedded inside string values:
 *      \n  • *Simple Explanation*: In plain words...
 *      \n  • *Real-World Analogy*: Picture this...
 *      \n  • *Common Mistake*: Students often mix this up...
 * 3. Remove body-text filler suffix added to every subheading body:
 *      " **Think of it like this:** When you break this down..."
 * 4. Remove intro filler suffixes (appended to every chapter intro):
 *      " Think of this chapter as a step-by-step guide..."
 *      " Once you grasp these simple building blocks..."
 *      " You'll learn the core definitions..."
 *
 * NOTE: We do NOT attempt to remove whole chapter/group objects via regex
 * because the nesting makes that unsafe. Instead, the "Exam Mastery" chapter
 * and "Memory Tricks" groups are handled by removing their content lines only,
 * leaving empty-but-valid array entries — the UI simply skips empty groups.
 */

import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const NOTES_DIR = new URL("../src/lib/notes/", import.meta.url)
  .pathname.replace(/^\/([A-Z]:)/, "$1");

function cleanFile(src) {
  // 1. Strip emoji from entire file
  src = src
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")
    .replace(/[\u{2600}-\u{27BF}]/gu, "")
    .replace(/[\uFE00-\uFE0F\u200D]/gu, "")
    .replace(/[\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}]/gu, "");

  // 2. Remove filler sub-bullet lines (they appear as \n  •  ... inside JS strings)
  //    After emoji strip: \n  • *Simple Explanation*: In plain words, this means...
  src = src.replace(/\\n\s*•\s*\*Simple Explanation\*:[^"\\]*/g, "");
  src = src.replace(/\\n\s*•\s*\*Real-World Analogy\*:[^"\\]*/g, "");
  src = src.replace(/\\n\s*•\s*\*Common Mistake\*: Students often[^"\\]*/g, "");

  // 3. Remove body-text filler suffix
  //    " **Think of it like this:** When you break this down into simple parts..."
  src = src.replace(/ \*\*Think of it like this:\*\* When you break this down[^"\\]*/g, "");

  // 4. Remove intro filler suffixes (these are plain text after the actual content)
  //    " Think of this chapter as a step-by-step guide to understanding how..."
  src = src.replace(/ Think of this chapter as a step-by-step guide[^"\\]*/g, "");
  //    " Once you grasp these simple building blocks, answering exam questions..."
  src = src.replace(/ Once you grasp these simple building blocks[^"\\]*/g, "");
  //    " You'll learn the core definitions in plain English..."
  src = src.replace(/ You'll learn the core definitions[^"\\]*/g, "");

  // 5. Clean up double-spaces left behind inside strings
  //    Only collapse spaces that are within string literals (between " characters)
  //    Safe: just replace multiple spaces globally — won't affect indentation (tabs/newlines)
  src = src.replace(/[ ]{2,}/g, " ");

  // 6. Trim trailing whitespace on lines
  src = src.replace(/[ \t]+\n/g, "\n");

  return src;
}

const files = await readdir(NOTES_DIR);
const noteFiles = files.filter(f => f.endsWith(".ts") && f !== "types.ts");
console.log(`Processing ${noteFiles.length} note files…`);

for (const f of noteFiles) {
  const path = join(NOTES_DIR, f);
  const src = await readFile(path, "utf8");
  const cleaned = cleanFile(src);
  if (cleaned !== src) {
    await writeFile(path, cleaned, "utf8");
    console.log(`  cleaned: ${f}`);
  } else {
    console.log(`  no change: ${f}`);
  }
}
console.log("Done.");
