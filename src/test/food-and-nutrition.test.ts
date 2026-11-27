import { describe, expect, it } from "bun:test";
import { FOOD_AND_NUTRITION } from "../lib/notes/food-and-nutrition";

describe("Cambridge IGCSE Food & Nutrition (0648) 2026-2028 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(FOOD_AND_NUTRITION.id).toBe("food-and-nutrition");
    expect(FOOD_AND_NUTRITION.code).toBe("0648");
    expect(FOOD_AND_NUTRITION.chapters.length).toBe(6);
  });

  it("should have all 6 syllabus chapters numbered 1 to 6 in sequence", () => {
    FOOD_AND_NUTRITION.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title).toBeTruthy();
      expect(ch.intro).toBeTruthy();
      expect(ch.subheadings.length).toBeGreaterThan(0);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    for (const ch of FOOD_AND_NUTRITION.chapters) {
      for (const sh of ch.subheadings) {
        expect((sh as any).figure).toBeUndefined();
        expect(sh.body).not.toContain("/diagrams/");
        expect(sh.body).not.toContain(".svg");
        expect(sh.body).not.toContain(".png");
        expect(sh.body).not.toContain(".jpg");
      }
    }
  });

  it("every subheading must have rich academic examinerTips, commonMistakes, and recap", () => {
    for (const ch of FOOD_AND_NUTRITION.chapters) {
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
