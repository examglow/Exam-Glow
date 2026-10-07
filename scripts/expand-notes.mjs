/**
 * expand-notes.mjs
 * Reads biology.ts and chemistry.ts, finds all `body:` template literal strings,
 * and logs their lengths so we can assess which ones need expanding.
 */
import { readFile } from "fs/promises";

const files = [
  "src/lib/notes/biology.ts",
  "src/lib/notes/chemistry.ts",
];

for (const f of files) {
  const src = await readFile(f, "utf8");
  // Count total characters in template literals after body:
  const matches = [...src.matchAll(/body:\s*`([\s\S]*?)`/g)];
  const lengths = matches.map((m, i) => ({ i, len: m[1].length }));
  const total = lengths.reduce((s, x) => s + x.len, 0);
  const avg = Math.round(total / lengths.length);
  const min = Math.min(...lengths.map(x => x.len));
  const max = Math.max(...lengths.map(x => x.len));
  console.log(`\n${f}:`);
  console.log(`  Sections: ${lengths.length}, Total chars: ${total}, Avg: ${avg}, Min: ${min}, Max: ${max}`);
  lengths.filter(x => x.len < 600).forEach(x => console.log(`  SHORT section #${x.i}: ${x.len} chars`));
}
