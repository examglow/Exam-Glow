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

// ─── Escape HTML in table cells ───────────────────────────────────────────────
function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ─── Inline SVG diagrams by keyword ──────────────────────────────────────────
// Diagrams are authored as  :::svg[title]\n<svg…>\n:::
// They render as a labelled figure card.
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

// ─── Main formatter ───────────────────────────────────────────────────────────
export function formatMathAndMarkdown(text: string): string {
  if (!text) return "";

  text = stripEmoji(text);

  // ── 0. Protect KaTeX blocks from further processing ──────────────────────
  const mathBlocks: string[] = [];
  text = text.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, (m) => {
    mathBlocks.push(m);
    return `\x00MATH${mathBlocks.length - 1}\x00`;
  });

  // ── 1. Inline SVG diagram blocks  :::svg[Title]\n<svg>…</svg>\n::: ──────
  text = text.replace(/:::svg\[([^\]]*)\]\n([\s\S]*?):::/g, (_, title, body) => {
    return renderSvgBlock(title, body);
  });

  // ── 2. Image references  ![alt](url) ─────────────────────────────────────
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, (_, alt, src) => {
    const filename = src.split("/").pop() || "";
    const directSvg = DIAGRAM_MAP[filename];
    const inner = directSvg
      ? directSvg
      : `<img src="${src}" alt="${alt}" class="w-full max-w-2xl rounded-xl object-contain" loading="lazy" />`;
    return renderSvgBlock(alt || "Diagram", inner);
  });

  // ── 3. Tables  | col | col | … ───────────────────────────────────────────
  text = text.replace(/((?:\|.+\|\n?)+)/g, (block) => {
    const rows = block.trim().split("\n").filter(Boolean);
    if (rows.length < 2) return block;
    const isSep = (r: string) => /^\|[\s|:-]+\|$/.test(r.trim());
    const parse = (r: string) =>
      r
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim());

    let html =
      `<div class="my-5 not-prose overflow-x-auto rounded-xl border border-border">` +
      `<table class="w-full text-sm border-collapse">`;

    let headerDone = false;
    for (let i = 0; i < rows.length; i++) {
      if (isSep(rows[i]!)) continue;
      const cells = parse(rows[i]!);
      if (!headerDone) {
        html += `<thead class="bg-muted/60"><tr>` +
          cells.map((c) => `<th class="px-3 py-2 text-left font-semibold text-foreground text-xs uppercase tracking-wide border-b border-border">${escHtml(c)}</th>`).join("") +
          `</tr></thead><tbody>`;
        headerDone = true;
      } else {
        html +=
          `<tr class="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">` +
          cells.map((c) => `<td class="px-3 py-2 text-foreground/85 text-sm">${escHtml(c)}</td>`).join("") +
          `</tr>`;
      }
    }
    html += `</tbody></table></div>`;
    return html;
  });

  // ── 4. Callout / blockquote  > text ──────────────────────────────────────
  text = text.replace(/((?:^>[ \t]*.+\n?)+)/gm, (block) => {
    const inner = block
      .split("\n")
      .filter(Boolean)
      .map((l) => l.replace(/^>\s?/, ""))
      .join(" ");
    return `<div class="my-4 not-prose flex gap-3 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3">
      <div class="mt-0.5 shrink-0 size-4 rounded-full bg-primary/20 flex items-center justify-center">
        <div class="size-1.5 rounded-full bg-primary"></div>
      </div>
      <p class="text-sm leading-relaxed text-foreground/90 m-0">${inner}</p>
    </div>`;
  });

  // ── 5. Code blocks  ``` … ``` ────────────────────────────────────────────
  text = text.replace(/```(?:\w+)?\n?([\s\S]+?)```/g, (_, code) => {
    return `<div class="my-4 not-prose overflow-x-auto rounded-xl border border-border/60 bg-muted/40">
      <pre class="p-4 font-mono text-[12px] leading-relaxed text-foreground whitespace-pre">${code.trim()}</pre>
    </div>`;
  });

  // ── 6. Headings  ### ## # ────────────────────────────────────────────────
  text = text.replace(/^### (.+)$/gm, (_, t) =>
    `<h4 class="mt-5 mb-1.5 text-[15px] font-bold text-foreground">${t}</h4>`);
  text = text.replace(/^## (.+)$/gm, (_, t) =>
    `<h3 class="mt-6 mb-2 text-[17px] font-bold text-foreground border-b border-border/40 pb-1">${t}</h3>`);
  text = text.replace(/^# (.+)$/gm, (_, t) =>
    `<h2 class="mt-7 mb-2 text-[20px] font-black text-foreground">${t}</h2>`);

  // ── 7. Horizontal rule  --- ───────────────────────────────────────────────
  text = text.replace(/^---$/gm, `<hr class="my-5 border-border/50" />`);

  // ── 8. Ordered list  1. … ────────────────────────────────────────────────
  text = text.replace(/((?:^\d+\. .+\n?)+)/gm, (block) => {
    const items = block.trim().split("\n").filter(Boolean).map((l) =>
      `<li class="pl-1 text-[14.5px] leading-relaxed text-foreground/85">${l.replace(/^\d+\.\s*/, "")}</li>`
    ).join("");
    return `<ol class="my-3 ml-5 list-decimal space-y-1 not-prose">${items}</ol>`;
  });

  // ── 9. Unordered list  - … ────────────────────────────────────────────────
  text = text.replace(/((?:^[-•] .+\n?)+)/gm, (block) => {
    const items = block.trim().split("\n").filter(Boolean).map((l) =>
      `<li class="pl-1 text-[14.5px] leading-relaxed text-foreground/85">${l.replace(/^[-•]\s*/, "")}</li>`
    ).join("");
    return `<ul class="my-3 ml-5 list-disc space-y-1 not-prose">${items}</ul>`;
  });

  // ── 10. Restore math placeholders and render ─────────────────────────────
  text = text.replace(/\x00MATH(\d+)\x00/g, (_, idx) => {
    const original = mathBlocks[Number(idx)] ?? "";
    const isDisplay = original.startsWith("$$");
    const eq = original.replace(/^\$\$?|\$\$?$/g, "").trim();
    try {
      const rendered = katex.renderToString(eq, { displayMode: isDisplay, throwOnError: false });
      return isDisplay
        ? `<div class="my-4 overflow-x-auto text-center not-prose">${rendered}</div>`
        : rendered;
    } catch {
      return `<code class="font-mono text-sm">${eq}</code>`;
    }
  });

  // ── 11. Inline formatting ────────────────────────────────────────────────
  // ==highlighted== key term
  text = text.replace(/==(.+?)==/g,
    `<mark class="rounded px-0.5 bg-yellow-200/70 dark:bg-yellow-900/40 text-foreground font-semibold not-italic">$1</mark>`);

  // Bold
  text = text.replace(/\*\*(.+?)\*\*/g,
    `<strong class="font-semibold text-foreground">$1</strong>`);

  // Italic
  text = text.replace(/(?<!\*)\*([^*\n]+?)\*(?!\*)/g, `<em>$1</em>`);

  // Inline code / key term with backtick
  text = text.replace(/`([^`\n]+?)`/g,
    `<code class="inline-block rounded-md bg-muted px-1.5 py-0.5 font-mono text-[12.5px] text-foreground/90">$1</code>`);

  // ── 12. Paragraph breaks ─────────────────────────────────────────────────
  // Convert double newlines that are not already inside HTML tags to paragraphs
  text = text.replace(/\n{2,}/g, "</p><p class=\"mb-3 leading-7 text-[15px] text-foreground/88\">");
  // Wrap if it doesn't start with a block element
  if (!text.trimStart().startsWith("<")) {
    text = `<p class="mb-3 leading-7 text-[15px] text-foreground/88">${text}</p>`;
  }

  return text;
}
