import { describe, expect, it } from "vitest";
import { ADDITIONAL_MATHEMATICS } from "@/lib/notes/additional-mathematics";
import { getSyllabusSubject, SYLLABUS_NOTES } from "@/lib/syllabus-notes";

describe("Cambridge IGCSE Additional Mathematics (0606) 2028–2030 syllabus notes", () => {
  const EXPECTED_SECTIONS = [
    "1. Functions",
    "2. Quadratic functions",
    "3. Factors of polynomials",
    "4. Equations, inequalities and graphs",
    "5. Simultaneous equations",
    "6. Logarithmic and exponential functions",
    "7. Straight-line graphs",
    "8. Coordinate geometry of the circle",
    "9. Circular measure",
    "10. Trigonometry",
    "11. Permutations and combinations",
    "12. Series",
    "13. Vectors in two dimensions",
    "14. Calculus",
  ];

  it("registers Additional Mathematics in SYLLABUS_NOTES with code 0606", () => {
    const matches = SYLLABUS_NOTES.filter((s) => s.id === "additional-mathematics");
    expect(matches).toHaveLength(1);
    expect(matches[0].code).toBe("0606");
  });

  it("correctly resolves in getSyllabusSubject", () => {
    expect(getSyllabusSubject("additional-mathematics")).toBe(ADDITIONAL_MATHEMATICS);
    expect(getSyllabusSubject("additional-mathematics", "core")).toBe(ADDITIONAL_MATHEMATICS);
    expect(getSyllabusSubject("additional-mathematics", "extended")).toBe(ADDITIONAL_MATHEMATICS);
  });

  it("has exactly 14 chapters covering all 14 official Cambridge syllabus sections", () => {
    expect(ADDITIONAL_MATHEMATICS.chapters).toHaveLength(14);
    const sections = Array.from(new Set(ADDITIONAL_MATHEMATICS.chapters.map((ch) => ch.section)));
    expect(sections).toEqual(EXPECTED_SECTIONS);
  });

  it("contains no image figures in any subheading (text-only constraint)", () => {
    for (const chapter of ADDITIONAL_MATHEMATICS.chapters) {
      for (const sub of chapter.subheadings) {
        expect((sub as Record<string, unknown>).figure).toBeUndefined();
      }
    }
  });

  it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
    for (const chapter of ADDITIONAL_MATHEMATICS.chapters) {
      expect(chapter.title).toBeTruthy();
      expect(chapter.intro).toBeTruthy();
      expect(chapter.subheadings.length).toBeGreaterThan(0);
      for (const sub of chapter.subheadings) {
        expect(sub.title).toBeTruthy();
        expect(sub.body).toBeTruthy();
        expect(sub.examinerTips?.length).toBeGreaterThan(0);
        expect(sub.commonMistakes?.length).toBeGreaterThan(0);
        expect(sub.recap?.length).toBeGreaterThan(0);
      }
    }
  });

  it("contains essential Cambridge 0606 syllabus topics", () => {
    const titles = ADDITIONAL_MATHEMATICS.chapters.map((ch) => ch.title);
    expect(titles).toContain("Functions");
    expect(titles).toContain("Quadratic Functions");
    expect(titles).toContain("Factors of Polynomials");
    expect(titles).toContain("Equations, Inequalities and Graphs");
    expect(titles).toContain("Simultaneous Equations");
    expect(titles).toContain("Logarithmic and Exponential Functions");
    expect(titles).toContain("Straight-Line Graphs");
    expect(titles).toContain("Coordinate Geometry of the Circle");
    expect(titles).toContain("Circular Measure");
    expect(titles).toContain("Trigonometry");
    expect(titles).toContain("Permutations and Combinations");
    expect(titles).toContain("Series");
    expect(titles).toContain("Vectors in Two Dimensions");
    expect(titles).toContain("Calculus");
  });
});
