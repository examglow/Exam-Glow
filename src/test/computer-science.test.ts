import { describe, expect, it } from "bun:test";
import { COMPUTER_SCIENCE } from "../lib/notes/computer-science";

describe("Cambridge IGCSE Computer Science (0478) 2026-2028 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(COMPUTER_SCIENCE.id).toBe("computer-science");
    expect(COMPUTER_SCIENCE.code).toBe("0478");
    expect(COMPUTER_SCIENCE.chapters.length).toBe(10);
  });

  it("should have all 10 syllabus chapters numbered 1 to 10 in sequence", () => {
    COMPUTER_SCIENCE.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title).toBeTruthy();
      expect(ch.intro).toBeTruthy();
      expect(ch.subheadings.length).toBeGreaterThan(0);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    for (const ch of COMPUTER_SCIENCE.chapters) {
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
    for (const ch of COMPUTER_SCIENCE.chapters) {
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
