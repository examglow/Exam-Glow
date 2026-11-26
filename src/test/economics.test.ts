import { describe, expect, it } from "vitest";
import { ECONOMICS } from "@/lib/notes/economics";
import { getSyllabusSubject, SYLLABUS_NOTES } from "@/lib/syllabus-notes";

describe("Cambridge IGCSE Economics (0455) 2027–2029 syllabus notes", () => {
  const EXPECTED_SECTIONS = [
    "1. The Basic Economic Problem",
    "2. The Allocation of Resources",
    "3. Microeconomic Decision-Makers",
    "4. Government and the Macroeconomy",
    "5. Economic Development",
    "6. International Trade and Globalisation",
  ];

  it("registers Economics in SYLLABUS_NOTES with code 0455", () => {
    const matches = SYLLABUS_NOTES.filter((s) => s.id === "economics");
    expect(matches).toHaveLength(1);
    expect(matches[0].code).toBe("0455");
  });

  it("correctly resolves in getSyllabusSubject for single-tier syllabus", () => {
    expect(getSyllabusSubject("economics")).toBe(ECONOMICS);
    expect(getSyllabusSubject("economics", "core")).toBe(ECONOMICS);
    expect(getSyllabusSubject("economics", "extended")).toBe(ECONOMICS);
  });

  it("has exactly 24 chapters covering all 6 official Cambridge syllabus sections", () => {
    expect(ECONOMICS.chapters).toHaveLength(24);
    const sections = Array.from(new Set(ECONOMICS.chapters.map((ch) => ch.section)));
    expect(sections).toEqual(EXPECTED_SECTIONS);
  });

  it("numbers chapters sequentially from 1 to 24", () => {
    ECONOMICS.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
    });
  });

  it("contains no image figures in any subheading (strictly text-only constraint)", () => {
    for (const chapter of ECONOMICS.chapters) {
      for (const sub of chapter.subheadings) {
        expect((sub as Record<string, unknown>).figure).toBeUndefined();
      }
    }
  });

  it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
    for (const chapter of ECONOMICS.chapters) {
      expect(chapter.title).toBeTruthy();
      expect(chapter.intro).toBeTruthy();
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
