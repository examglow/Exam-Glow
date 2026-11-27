import { describe, expect, it } from "bun:test";
import { CORE_ENGLISH } from "../lib/notes/core-english";
import { getSyllabusSubject, SYLLABUS_NOTES } from "../lib/syllabus-notes";

describe("Cambridge IGCSE Core English as a Second Language (0465) 2027–2029 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(CORE_ENGLISH.id).toBe("core-english");
    expect(CORE_ENGLISH.code).toContain("0465");
    expect(CORE_ENGLISH.chapters.length).toBe(6);
  });

  it("should resolve via getSyllabusSubject for both core-english and english-second-language core", () => {
    const direct = getSyllabusSubject("core-english");
    expect(direct).not.toBeNull();
    expect(direct!.id).toBe("core-english");

    const eslCore = getSyllabusSubject("english-second-language", "core");
    expect(eslCore).not.toBeNull();
    expect(eslCore!.id).toBe("core-english");
  });

  it("should be registered in SYLLABUS_NOTES", () => {
    const found = SYLLABUS_NOTES.find((s) => s.id === "core-english");
    expect(found).toBeDefined();
    expect(found!.chapters.length).toBe(6);
  });

  it("should have all 6 syllabus chapters numbered 1 to 6 in sequence", () => {
    CORE_ENGLISH.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title).toBeTruthy();
      expect(ch.intro).toBeTruthy();
      expect(ch.subheadings.length).toBeGreaterThan(0);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    for (const ch of CORE_ENGLISH.chapters) {
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
    for (const ch of CORE_ENGLISH.chapters) {
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
