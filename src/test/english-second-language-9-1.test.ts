import { describe, expect, it } from "bun:test";
import { ENGLISH_SECOND_LANGUAGE_9_1 } from "../lib/notes/english-second-language-9-1";

describe("Cambridge IGCSE English as a Second Language (9–1) (0993) 2027–2029 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(ENGLISH_SECOND_LANGUAGE_9_1.id).toBe("english-second-language-9-1");
    expect(ENGLISH_SECOND_LANGUAGE_9_1.code).toBe("0993");
    expect(ENGLISH_SECOND_LANGUAGE_9_1.chapters.length).toBe(6);
  });

  it("should have all 6 syllabus chapters numbered 1 to 6 in sequence", () => {
    ENGLISH_SECOND_LANGUAGE_9_1.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title).toBeTruthy();
      expect(ch.intro).toBeTruthy();
      expect(ch.subheadings.length).toBeGreaterThan(0);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    for (const ch of ENGLISH_SECOND_LANGUAGE_9_1.chapters) {
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
    for (const ch of ENGLISH_SECOND_LANGUAGE_9_1.chapters) {
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
