import { describe, expect, it } from "bun:test";
import { AGRICULTURE } from "../lib/notes/agriculture";

describe("Cambridge IGCSE Agriculture (0600) 2027–2028 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(AGRICULTURE.id).toBe("agriculture");
    expect(AGRICULTURE.code).toBe("0600");
    expect(AGRICULTURE.chapters.length).toBe(10);
  });

  it("should have all 10 syllabus chapters numbered 1 to 10 in sequence", () => {
    AGRICULTURE.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title).toBeTruthy();
      expect(ch.intro).toBeTruthy();
      expect(ch.subheadings.length).toBeGreaterThan(0);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    for (const ch of AGRICULTURE.chapters) {
      for (const sh of ch.subheadings) {
        expect((sh as any).figure).toBeUndefined();
        expect(sh.body).not.toContain("/diagrams/");
        expect(sh.body).not.toContain("<figure");
        expect(sh.body).not.toContain("<img");
        expect(sh.body).not.toContain(".webp");
        expect(sh.body).not.toContain(".svg");
        expect(sh.body).not.toContain(".png");
        expect(sh.body).not.toContain(".jpg");
      }
    }
  });

  it("every subheading must have rich academic examinerTips, commonMistakes, and recap", () => {
    for (const ch of AGRICULTURE.chapters) {
      for (const sh of ch.subheadings) {
        expect(sh.examinerTips).toBeDefined();
        expect(sh.examinerTips!.length).toBeGreaterThanOrEqual(1);
        expect(sh.commonMistakes).toBeDefined();
        expect(sh.commonMistakes!.length).toBeGreaterThanOrEqual(1);
        expect(sh.recap).toBeDefined();
        expect(sh.recap!.length).toBeGreaterThanOrEqual(1);
      }
    }
  });
});
