import { describe, it, expect } from "bun:test";
import { MATHEMATICS_EXTENDED } from "../lib/notes/mathematics-extended";

describe("MATHEMATICS_EXTENDED", () => {
  it("should have chapters", () => {
    expect(MATHEMATICS_EXTENDED.chapters.length).toBeGreaterThan(30);
  });

  it("should cover all 9 sections", () => {
    const sections = new Set(
      MATHEMATICS_EXTENDED.chapters.map((c) => c.section)
    );
    expect(sections.has("1. Number")).toBe(true);
    expect(sections.has("2. Algebra & Sequences")).toBe(true);
    expect(sections.has("3. Coordinate Geometry & Graphs")).toBe(true);
    expect(sections.has("4. Geometry")).toBe(true);
    expect(sections.has("5. Lengths, Areas & Volumes")).toBe(true);
    expect(sections.has("6. Pythagoras & Trigonometry")).toBe(true);
    expect(sections.has("7. Vectors & Transformations")).toBe(true);
    expect(sections.has("8. Probability")).toBe(true);
    expect(sections.has("9. Statistics")).toBe(true);
  });

  it("should have no figure fields in any subheading", () => {
    for (const chapter of MATHEMATICS_EXTENDED.chapters) {
      for (const sub of chapter.subheadings) {
        expect((sub as Record<string, unknown>).figure).toBeUndefined();
      }
    }
  });

  it("should have all subheadings with required fields", () => {
    for (const chapter of MATHEMATICS_EXTENDED.chapters) {
      expect(chapter.title).toBeTruthy();
      expect(chapter.section).toBeTruthy();
      expect(chapter.subheadings.length).toBeGreaterThan(0);
      for (const sub of chapter.subheadings) {
        expect(sub.title).toBeTruthy();
        expect(sub.body).toBeTruthy();
        expect(sub.examinerTips?.length ?? 0).toBeGreaterThan(0);
        expect(sub.commonMistakes?.length ?? 0).toBeGreaterThan(0);
        expect(sub.recap?.length ?? 0).toBeGreaterThan(0);
      }
    }
  });

  it("should have more chapters than core", () => {
    const { MATHEMATICS_CORE } = require("../lib/notes/mathematics-core");
    expect(MATHEMATICS_EXTENDED.chapters.length).toBeGreaterThan(
      MATHEMATICS_CORE.chapters.length
    );
  });

  it("should have Extended-only topics", () => {
    const titles = MATHEMATICS_EXTENDED.chapters.map((c) => c.title);
    expect(titles).toContain("Surds");
    expect(titles).toContain("Quadratics");
    expect(titles).toContain("Functions");
    expect(titles).toContain("Sine & Cosine Rules");
    expect(titles).toContain("Histograms");
    expect(titles).toContain("Cumulative Frequency");
  });
});
