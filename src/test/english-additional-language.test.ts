import { describe, expect, it } from "bun:test";
import { ENGLISH_ADDITIONAL_LANGUAGE } from "../lib/notes/english-additional-language";

describe("Cambridge IGCSE English as an Additional Language (0772) 2029–2030 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(ENGLISH_ADDITIONAL_LANGUAGE.id).toBe("english-additional-language");
    expect(ENGLISH_ADDITIONAL_LANGUAGE.code).toBe("0772");
    expect(ENGLISH_ADDITIONAL_LANGUAGE.chapters.length).toBe(6);
  });

  it("should have all 6 syllabus chapters numbered 1 to 6 in sequence", () => {
    ENGLISH_ADDITIONAL_LANGUAGE.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title).toBeTruthy();
      expect(ch.intro).toBeTruthy();
      expect(ch.subheadings.length).toBeGreaterThan(0);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    for (const ch of ENGLISH_ADDITIONAL_LANGUAGE.chapters) {
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
    for (const ch of ENGLISH_ADDITIONAL_LANGUAGE.chapters) {
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
