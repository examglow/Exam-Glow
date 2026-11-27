import { describe, expect, it } from "bun:test";
import { ENVIRONMENTAL_MANAGEMENT } from "../lib/notes/environmental-management";

describe("Cambridge IGCSE Environmental Management (0680) 2027-2029 Syllabus Notes", () => {
  it("should have correct subject metadata", () => {
    expect(ENVIRONMENTAL_MANAGEMENT.id).toBe("environmental-management");
    expect(ENVIRONMENTAL_MANAGEMENT.code).toBe("0680");
    expect(ENVIRONMENTAL_MANAGEMENT.chapters.length).toBe(9);
  });

  it("should have all 9 syllabus chapters numbered 1 to 9 in sequence", () => {
    ENVIRONMENTAL_MANAGEMENT.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
      expect(ch.title).toBeTruthy();
      expect(ch.intro).toBeTruthy();
      expect(ch.subheadings.length).toBeGreaterThan(0);
    });
  });

  it("should be strictly text-only with NO figures or image links", () => {
    for (const ch of ENVIRONMENTAL_MANAGEMENT.chapters) {
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
    for (const ch of ENVIRONMENTAL_MANAGEMENT.chapters) {
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
