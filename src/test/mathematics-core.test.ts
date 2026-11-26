import { describe, expect, it } from "vitest";

import { MATHEMATICS, MATHEMATICS_CORE } from "@/lib/notes/mathematics";
import { getSyllabusSubject } from "@/lib/syllabus-notes";

describe("Mathematics Core syllabus", () => {
  it("has exactly 44 Core chapters across all 9 sections", () => {
    expect(MATHEMATICS_CORE.chapters).toHaveLength(44);
    expect(getSyllabusSubject("mathematics", "core")).toBe(MATHEMATICS_CORE);
    expect(getSyllabusSubject("mathematics")).toBe(MATHEMATICS);
  });

  it("covers all 9 Cambridge syllabus sections", () => {
    const sections = Array.from(new Set(MATHEMATICS_CORE.chapters.map((ch) => ch.section)));
    expect(sections).toEqual([
      "1. Number",
      "2. Algebra & Sequences",
      "3. Coordinate Geometry & Graphs",
      "4. Geometry",
      "5. Lengths, Areas & Volumes",
      "6. Pythagoras & Trigonometry",
      "7. Transformations",
      "8. Probability",
      "9. Statistics",
    ]);
  });

  it("contains no image figures per user instruction", () => {
    const figures = MATHEMATICS_CORE.chapters.flatMap((chapter) =>
      chapter.subheadings.flatMap((sub) => sub.figure ?? []),
    );
    expect(figures).toHaveLength(0);
  });

  it("ensures every chapter has valid subheadings and questions", () => {
    for (const chapter of MATHEMATICS_CORE.chapters) {
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
});
