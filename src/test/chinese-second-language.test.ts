import { describe, expect, it } from "bun:test";
import { CHINESE_SECOND_LANGUAGE } from "../lib/notes/chinese-second-language";

describe("Cambridge IGCSE Chinese as a Second Language (0523) 2028–2029 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(CHINESE_SECOND_LANGUAGE.id).toBe("chinese-second-language");
    expect(CHINESE_SECOND_LANGUAGE.code).toBe("0523");
    expect(CHINESE_SECOND_LANGUAGE.chapters.length).toBe(6);
  });

  it("should have all 6 syllabus chapters numbered 1 to 6 in sequence", () => {
    CHINESE_SECOND_LANGUAGE.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title).toBeTruthy();
      expect(ch.intro).toBeTruthy();
      expect(ch.subheadings.length).toBeGreaterThan(0);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    for (const ch of CHINESE_SECOND_LANGUAGE.chapters) {
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
    for (const ch of CHINESE_SECOND_LANGUAGE.chapters) {
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
