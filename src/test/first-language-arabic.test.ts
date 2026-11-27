import { describe, it, expect } from "bun:test";
import { FIRST_LANGUAGE_ARABIC } from "../lib/notes/first-language-arabic";

describe("Cambridge IGCSE First Language Arabic (9–1) (7184) 2026 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(FIRST_LANGUAGE_ARABIC.id).toBe("first-language-arabic");
    expect(FIRST_LANGUAGE_ARABIC.code).toBe("7184");
    expect(FIRST_LANGUAGE_ARABIC.chapters.length).toBe(6);
  });

  it("should have all 6 syllabus chapters numbered 1 to 6 in sequence", () => {
    FIRST_LANGUAGE_ARABIC.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title.length).toBeGreaterThan(5);
      expect(ch.intro.length).toBeGreaterThan(20);
      expect(ch.subheadings.length).toBeGreaterThanOrEqual(2);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    FIRST_LANGUAGE_ARABIC.chapters.forEach((ch) => {
      ch.subheadings.forEach((sub) => {
        expect((sub as any).figure).toBeUndefined();
        expect(sub.body).not.toContain("/diagrams/");
        expect(sub.body).not.toContain(".svg");
        expect(sub.body).not.toContain(".png");
        expect(sub.body).not.toContain(".jpg");
        expect(sub.body).not.toContain(".webp");
      });
    });
  });

  it("every subheading must have rich academic examinerTips, commonMistakes, and recap", () => {
    FIRST_LANGUAGE_ARABIC.chapters.forEach((ch) => {
      ch.subheadings.forEach((sub) => {
        expect(sub.examinerTips).toBeDefined();
        expect(sub.examinerTips!.length).toBeGreaterThanOrEqual(1);
        sub.examinerTips!.forEach((tip) => expect(tip.length).toBeGreaterThan(15));

        expect(sub.commonMistakes).toBeDefined();
        expect(sub.commonMistakes!.length).toBeGreaterThanOrEqual(1);
        sub.commonMistakes!.forEach((m) => expect(m.length).toBeGreaterThan(15));

        expect(sub.recap).toBeDefined();
        expect(sub.recap!.length).toBeGreaterThanOrEqual(1);
        sub.recap!.forEach((r) => expect(r.length).toBeGreaterThan(15));
      });
    });
  });
});
