/**
 * Shared scaffolding for the SVG diagrams embedded in the note chapters.
 * Diagrams are authored as strings inside the note data files and passed
 * through the markdown renderer's `:::svg[…]` block, so everything here is
 * plain string composition rather than React.
 */

const PALETTE = {
  bg: "#20262d",
  panel: "#272f38",
  panelStroke: "#3d4854",
  line: "#aab5c1",
  title: "#f5f7fa",
  label: "#eef2f6",
  small: "#c2ccd5",
  muted: "#9eabb8",
  green: "#42c99a",
  blue: "#54c6e8",
  pink: "#ee7fa3",
  gold: "#efc263",
  purple: "#aa91f5",
};

const STYLES = `
  <style>
    .bg{fill:${PALETTE.bg}}
    .panel{fill:${PALETTE.panel};stroke:${PALETTE.panelStroke};stroke-width:2}
    .main{fill:#172f2d;stroke:${PALETTE.green};stroke-width:3}
    .blue{fill:#172d3b;stroke:${PALETTE.blue};stroke-width:3}
    .pink{fill:#382631;stroke:${PALETTE.pink};stroke-width:3}
    .gold{fill:#393323;stroke:${PALETTE.gold};stroke-width:3}
    .purple{fill:#302a40;stroke:${PALETTE.purple};stroke-width:3}
    .line{stroke:${PALETTE.line};stroke-width:3;fill:none}
    .arrow{stroke:${PALETTE.line};stroke-width:3;fill:none;marker-end:url(#ah)}
    .title{fill:${PALETTE.title};font:700 23px system-ui,sans-serif}
    .label{fill:${PALETTE.label};font:700 17px system-ui,sans-serif}
    .small{fill:${PALETTE.small};font:14px system-ui,sans-serif}
    .muted{fill:${PALETTE.muted};font:13px system-ui,sans-serif}
    .accent{fill:${PALETTE.green};font:700 16px system-ui,sans-serif}
  </style>`;

export const colors = PALETTE;

export function svgDiagram(title: string, content: string, width = 900, height = 320) {
  const safe = title.replace(/"/g, "&quot;");
  // Text inside these diagrams is sized in viewBox units, so a 900-wide canvas
  // squeezed into a 360px phone screen would render 14px labels at ~6px. Holding a
  // floor width keeps them legible; the figure wrapper scrolls sideways instead.
  const floor = Math.min(width, 620);
  return `:::svg[${safe}]\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${safe}" style="width:100%;min-width:${floor}px;height:auto">${STYLES}<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" fill="${PALETTE.line}"/></marker></defs><rect class="bg" width="${width}" height="${height}" rx="22"/>${content}</svg>\n:::`;
}

/** Centred box with a single line of text — the building block of flow charts. */
export function box(
  x: number,
  y: number,
  w: number,
  h: number,
  text: string,
  cls = "panel",
  textCls = "label",
) {
  return `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/><text class="${textCls}" x="${x + w / 2}" y="${y + h / 2 + 6}" text-anchor="middle">${text}</text>`;
}

/** Two-column label list, handy for annotated parts of a structure. */
export function labelledRows(items: [string, string][], x: number, y: number, gap = 34) {
  return items
    .map(
      ([key, value], i) =>
        `<text class="accent" x="${x}" y="${y + i * gap}">${key}</text><text class="small" x="${x + 150}" y="${y + i * gap}">${value}</text>`,
    )
    .join("");
}

/** A row of equal-width tiles — used for comparison tables drawn as diagrams. */
export function tileRow(
  tiles: { title: string; body: string; cls?: string }[],
  y: number,
  { x = 24, w = 852, h = 150, gap = 12 } = {},
) {
  const tileW = (w - gap * (tiles.length - 1)) / tiles.length;
  return tiles
    .map((t, i) => {
      const tx = x + i * (tileW + gap);
      const lines = t.body
        .split("\n")
        .map(
          (line, li) =>
            `<text class="small" x="${tx + tileW / 2}" y="${y + 62 + li * 20}" text-anchor="middle">${line}</text>`,
        )
        .join("");
      return `<g><rect class="${t.cls ?? "panel"}" x="${tx}" y="${y}" width="${tileW}" height="${h}" rx="14"/><text class="label" x="${tx + tileW / 2}" y="${y + 32}" text-anchor="middle">${t.title}</text>${lines}</g>`;
    })
    .join("");
}
