import katex from "katex";
import { DIAGRAM_MAP } from "./diagrams";

// ─── Emoji stripper ───────────────────────────────────────────────────────────
function stripEmoji(str: string): string {
  return str
    .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")
    .replace(/[\u{2600}-\u{27BF}]/gu, "")
    .replace(/[\uFE00-\uFE0F\u200D]/gu, "")
    .replace(/[\u{1F000}-\u{1F02F}\u{1F0A0}-\u{1F0FF}]/gu, "")
    .replace(/ {2,}/g, " ")
    .trim();
}

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function renderSvgBlock(title: string, svgContent: string): string {
  return `<figure class="my-6 not-prose">
    <div class="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
      <div class="flex items-center gap-2 border-b border-border/60 bg-muted/30 px-4 py-2.5">
        <svg class="size-3.5 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="1" y="1" width="14" height="14" rx="2"/>
          <path d="M4 8h8M8 4v8"/>
        </svg>
        <span class="text-xs font-semibold text-foreground">${title}</span>
      </div>
      <div class="flex justify-center items-center p-4 overflow-x-auto bg-background/60">
        ${svgContent.trim()}
      </div>
    </div>
  </figure>`;
}

// ─── Formula typesetting ──────────────────────────────────────────────────────
// Notes carry equations as plain text ("**I = A × M**", "M = I ÷ A"). Rendered as
// bold prose they read like a typo in the middle of a sentence, so short equations
// are promoted to KaTeX. The validators are deliberately strict because prose must
// not be caught: "A = the actual size" stays as text, "A = 2 µm" becomes maths.
const KNOWN_UNITS = [
  "µm", "mm", "cm", "nm", "km", "dm", "kg", "mg", "mol", "kPa", "Pa",
  "mL", "min", "max", "h", "dm3", "cm3", "m3", "°C", "yr",
];

const MAX_FORMULA_LEN = 56;

function isUnit(token: string) {
  return KNOWN_UNITS.includes(token) || KNOWN_UNITS.includes(token.toLowerCase());
}

function alphabeticTokens(s: string) {
  return s.match(/[A-Za-zµ°]+/g) ?? [];
}

function looksLikeMath(clean: string, bare: boolean): boolean {
  if (!/^[A-Za-z0-9µ°²³=\s×÷+\-/.(),]+$/.test(clean)) return false;
  for (const token of alphabeticTokens(clean)) {
    if (isUnit(token)) continue;
    if (token.length === 1) continue;
    // In bare mode only single-letter variables are allowed, so sentence words
    // ("So", "the") can never be pulled into the maths run.
    if (bare) return false;
    if (token.length > 2) return false;
  }
  return true;
}

function formulaToTex(raw: string, bare = false): string | null {
  const clean = raw.replace(/\*/g, "").replace(/\s+/g, " ").trim();
  if (!clean.includes("=") || clean.length > MAX_FORMULA_LEN) return null;
  if (!looksLikeMath(clean, bare)) return null;

  let tex = clean
    // cubed units before the plain ones, so "cm3" is not read as "cm" + "3"
    .replace(/(dm|cm|m)(3)(?![A-Za-z0-9µ°])/g, "\\text{$1}^{3}")
    .replace(
      /(µm|°C|kPa|Pa|mm|cm|nm|km|dm|kg|mg|mol|mL|min|max|yr)(?![A-Za-zµ°0-9])/g,
      (_m, u: string) =>
        u.startsWith("µ")
          ? `\\mu\\text{${u.slice(1)}}`
          : `\\text{${u.replace("°", "^{\\circ}")}}`,
    )
    .replace(/[²³]/g, (c) => `^{${c === "²" ? 2 : 3}}`)
    .replace(/×/g, "\\times ")
    .replace(/÷/g, "\\div ")
    .replace(/−/g, "-");

  // Math mode drops the spaces between numbers, so rebuild the ones that carry
  // meaning: thousands separators and the gap before a unit.
  tex = tex
    .replace(/(\d)\s+(?=\d{3}(\D|$))/g, "$1\\,")
    .replace(/(?<=[}\d)])\s+(?=\\(?:text|mu))/g, "\\ ")
    .replace(/\s+(?=\\(?:text|mu))/g, "\\ ")
    .trim();

  tex = tex.replace(/[=\s]+$/, "").replace(/^[=\s]+/, "");
  if (!tex.includes("=") || tex.length > MAX_FORMULA_LEN + 12) return null;

  return tex;
}

function typesetFormulas(text: string, mathBlocks: string[]): string {
  const stash = (tex: string) => {
    mathBlocks.push(`$${tex}$`);
    return `\x00MATH${mathBlocks.length - 1}\x00`;
  };

  return text
    // Bold-wrapped equations: **I = A × M**
    .replace(/\*\*([^*\n]{3,60})\*\*/g, (full, body) => {
      const tex = formulaToTex(body);
      return tex ? stash(tex) : full;
    })
    // Bare equations left unbolded by the note author: "…formula:** M = I ÷ A"
    .replace(
      /(?<![A-Za-z0-9*_$=.])([A-Za-z]{1,4})\s*=\s*([A-Za-z0-9µ°²³\s=×÷+\-/()]{1,44})(?![A-Za-z0-9µ°*_$=])/g,
      (full, lhs, rhs) => {
        if (isUnit(lhs)) return full;
        const tex = formulaToTex(`${lhs} = ${rhs}`, true);
        return tex ? stash(tex) : full;
      },
    );
}

// ─── Inline span-level formatting (bold, italic, highlight, code, math) ──────
function formatInline(raw: string, mathBlocks: string[]): string {
  let text = raw;

  // Highlight key terms ==term==
  text = text.replace(/==(.+?)==/g,
    `<mark class="rounded px-0.5 bg-yellow-200/70 dark:bg-yellow-900/40 text-foreground font-semibold not-italic">$1</mark>`);

  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g, `<strong class="font-semibold text-foreground">$1</strong>`);

  // Italic (single asterisk, not part of **)
  text = text.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, `<em>$1</em>`);

  // Inline code
  text = text.replace(/`([^`\n]+?)`/g,
    `<code class="inline-block rounded-md bg-muted px-1.5 py-0.5 font-mono text-[12.5px] text-foreground/90">$1</code>`);

  // Restore inline math placeholders
  text = text.replace(/\x00MATH(\d+)\x00/g, (_, idx) => {
    const original = mathBlocks[Number(idx)] ?? "";
    const isDisplay = original.startsWith("$$");
    const eq = original.replace(/^\$\$?|\$\$?$/g, "").trim();
    try {
      const rendered = katex.renderToString(eq, { displayMode: false, throwOnError: false });
      return isDisplay ? `<span class="inline-block">${rendered}</span>` : rendered;
    } catch {
      return `<code class="font-mono text-sm">${eq}</code>`;
    }
  });

  return text;
}

// ─── Render a display-math block on its own line ─────────────────────────────
function renderDisplayMath(eq: string): string {
  try {
    const rendered = katex.renderToString(eq.trim(), { displayMode: true, throwOnError: false });
    return `<div class="my-4 overflow-x-auto text-center not-prose">${rendered}</div>`;
  } catch {
    return `<code>${eq}</code>`;
  }
}

/**
 * Block-level markdown-to-HTML renderer.
 * Processes the text line-by-line, grouping into blocks (paragraphs, lists,
 * headings, tables, callouts, code fences, svg diagrams) so block boundaries
 * are never ambiguous — this prevents list items or paragraphs from being
 * merged together incorrectly.
 */
const renderCache = new Map<string, string>();

export function formatMathAndMarkdown(text: string): string {
  const cached = renderCache.get(text);
  if (cached !== undefined) return cached;
  const html = renderMarkdown(text);
  // Static note content is re-rendered on every reader interaction; memoising
  // keeps a KaTeX-heavy chapter from costing CPU each time.
  if (renderCache.size > 4000) renderCache.clear();
  renderCache.set(text, html);
  return html;
}

function renderMarkdown(text: string): string {
  if (!text) return "";

  text = stripEmoji(text);

  // Protect $$...$$ and $...$ from line-splitting / inline processing until the end
  const mathBlocks: string[] = [];
  text = text.replace(/\$\$[\s\S]+?\$\$/g, (m) => {
    mathBlocks.push(m);
    return `\x00MATH${mathBlocks.length - 1}\x00`;
  });
  text = text.replace(/\$[^$\n]+?\$/g, (m) => {
    mathBlocks.push(m);
    return `\x00MATH${mathBlocks.length - 1}\x00`;
  });

  // Extract and protect fenced SVG diagram blocks and code fences first,
  // since they may contain content that looks like markdown.
  const rawBlocks: string[] = [];
  text = text.replace(/:::svg\[([^\]]*)\]\n([\s\S]*?):::/g, (_, title, body) => {
    rawBlocks.push(renderSvgBlock(title, body));
    return `\x00BLOCK${rawBlocks.length - 1}\x00`;
  });
  text = text.replace(/```(?:\w+)?\n?([\s\S]+?)```/g, (_, code) => {
    rawBlocks.push(
      `<div class="my-4 not-prose overflow-x-auto rounded-xl border border-border/60 bg-muted/40">
        <pre class="p-4 font-mono text-[12px] leading-relaxed text-foreground whitespace-pre">${code.trim()}</pre>
      </div>`
    );
    return `\x00BLOCK${rawBlocks.length - 1}\x00`;
  });
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, (_, alt, src) => {
    const filename = src.split("/").pop() || "";
    const directSvg = DIAGRAM_MAP[filename];
    const inner = directSvg
      ? directSvg
      : `<img src="${src}" alt="${alt}" class="w-full max-w-2xl rounded-xl object-contain" loading="lazy" />`;
    rawBlocks.push(renderSvgBlock(alt || "Diagram", inner));
    return `\x00BLOCK${rawBlocks.length - 1}\x00`;
  });

  // Promote plain-text equations to KaTeX once fenced blocks are out of the way
  text = typesetFormulas(text, mathBlocks);

  const lines = text.split("\n");
  const html: string[] = [];
  let i = 0;

  const isBlockPlaceholder = (line: string) => /^\x00BLOCK\d+\x00$/.test(line.trim());
  const isTableRow = (line: string) => /^\s*\|.+\|\s*$/.test(line);
  const isOrderedItem = (line: string) => /^\s*\d+\.\s+/.test(line);
  const isUnorderedItem = (line: string) => /^\s*[-•]\s+/.test(line);
  const isHeading = (line: string) => /^\s*#{1,4}\s+/.test(line);
  const isHr = (line: string) => /^\s*---\s*$/.test(line);
  const isQuote = (line: string) => /^\s*>\s?/.test(line);
  const isBlank = (line: string) => line.trim() === "";

  while (i < lines.length) {
    const line = lines[i]!;

    if (isBlank(line)) {
      i++;
      continue;
    }

    // Block placeholder (SVG diagram / code fence / image) — emit directly
    if (isBlockPlaceholder(line)) {
      const idx = Number(line.trim().match(/\d+/)![0]);
      html.push(rawBlocks[idx] ?? "");
      i++;
      continue;
    }

    // Heading
    if (isHeading(line)) {
      const m = line.match(/^\s*(#{1,4})\s+(.*)$/)!;
      const level = m[1]!.length;
      const content = formatInline(m[2]!, mathBlocks);
      if (level === 1) html.push(`<h2 class="mt-7 mb-2 text-[21px] font-black text-foreground">${content}</h2>`);
      else if (level === 2) html.push(`<h3 class="mt-7 mb-2.5 text-[18px] font-bold text-foreground border-b border-border/40 pb-1.5">${content}</h3>`);
      else if (level === 3) html.push(`<h4 class="mt-5 mb-1.5 text-[15.5px] font-bold text-foreground">${content}</h4>`);
      else html.push(`<h5 class="mt-4 mb-1 text-[14px] font-bold text-foreground">${content}</h5>`);
      i++;
      continue;
    }

    // Horizontal rule
    if (isHr(line)) {
      html.push(`<hr class="my-5 border-border/50" />`);
      i++;
      continue;
    }

    // Table block
    if (isTableRow(line)) {
      const tableLines: string[] = [];
      while (i < lines.length && isTableRow(lines[i]!)) {
        tableLines.push(lines[i]!);
        i++;
      }
      const isSep = (r: string) => /^\|[\s|:-]+\|$/.test(r.trim());
      const parse = (r: string) =>
        r.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

      let t = `<div class="my-5 not-prose overflow-x-auto rounded-xl border border-border"><table class="w-full text-sm border-collapse">`;
      let headerDone = false;
      for (const row of tableLines) {
        if (isSep(row)) continue;
        const cells = parse(row);
        if (!headerDone) {
          t += `<thead class="bg-muted/60"><tr>` +
            cells.map((c) => `<th class="px-3 py-2 text-left font-semibold text-foreground text-xs uppercase tracking-wide border-b border-border">${formatInline(escHtml(c), mathBlocks)}</th>`).join("") +
            `</tr></thead><tbody>`;
          headerDone = true;
        } else {
          t += `<tr class="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">` +
            cells.map((c) => `<td class="px-3 py-2 text-foreground/85 text-sm align-top">${formatInline(escHtml(c), mathBlocks)}</td>`).join("") +
            `</tr>`;
        }
      }
      t += `</tbody></table></div>`;
      html.push(t);
      continue;
    }

    // Blockquote / callout
    if (isQuote(line)) {
      const quoteLines: string[] = [];
      while (i < lines.length && isQuote(lines[i]!)) {
        quoteLines.push(lines[i]!.replace(/^\s*>\s?/, ""));
        i++;
      }
      const inner = formatInline(quoteLines.join(" "), mathBlocks);
      html.push(`<div class="my-4 not-prose flex gap-3 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3">
        <div class="mt-0.5 shrink-0 size-4 rounded-full bg-primary/20 flex items-center justify-center">
          <div class="size-1.5 rounded-full bg-primary"></div>
        </div>
        <p class="text-sm leading-relaxed text-foreground/90 m-0">${inner}</p>
      </div>`);
      continue;
    }

    // Ordered list
    if (isOrderedItem(line)) {
      const items: string[] = [];
      while (i < lines.length && isOrderedItem(lines[i]!)) {
        items.push(lines[i]!.replace(/^\s*\d+\.\s*/, ""));
        i++;
      }
      const itemsHtml = items.map((it) =>
        `<li class="pl-1.5 text-[14.5px] leading-7 text-foreground/85">${formatInline(it, mathBlocks)}</li>`
      ).join("");
      html.push(`<ol class="my-3 ml-5 list-decimal space-y-2 not-prose">${itemsHtml}</ol>`);
      continue;
    }

    // Unordered list
    if (isUnorderedItem(line)) {
      const items: string[] = [];
      while (i < lines.length && isUnorderedItem(lines[i]!)) {
        items.push(lines[i]!.replace(/^\s*[-•]\s*/, ""));
        i++;
      }
      const itemsHtml = items.map((it) =>
        `<li class="pl-1.5 text-[14.5px] leading-7 text-foreground/85">${formatInline(it, mathBlocks)}</li>`
      ).join("");
      html.push(`<ul class="my-3 ml-5 list-disc space-y-2 not-prose">${itemsHtml}</ul>`);
      continue;
    }

    // Display math on its own line (after placeholder substitution it's \x00MATH n\x00)
    const mathOnlyMatch = line.trim().match(/^\x00MATH(\d+)\x00$/);
    if (mathOnlyMatch) {
      const original = mathBlocks[Number(mathOnlyMatch[1])] ?? "";
      if (original.startsWith("$$")) {
        html.push(renderDisplayMath(original.replace(/^\$\$|\$\$$/g, "")));
        i++;
        continue;
      }
    }

    // Default: paragraph — collect consecutive non-blank, non-block lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      !isBlank(lines[i]!) &&
      !isBlockPlaceholder(lines[i]!) &&
      !isTableRow(lines[i]!) &&
      !isOrderedItem(lines[i]!) &&
      !isUnorderedItem(lines[i]!) &&
      !isHeading(lines[i]!) &&
      !isHr(lines[i]!) &&
      !isQuote(lines[i]!)
    ) {
      paraLines.push(lines[i]!);
      i++;
    }
    const paraText = formatInline(paraLines.join(" "), mathBlocks);
    html.push(`<p class="mb-3 leading-7 text-[15px] text-foreground/88">${paraText}</p>`);
  }

  return html.join("\n");
}
