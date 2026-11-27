import { describe, expect, it } from "vitest";
import { GEOGRAPHY } from "@/lib/notes/geography";
import { getSyllabusSubject, SYLLABUS_NOTES } from "@/lib/syllabus-notes";

describe("Cambridge IGCSE Geography (0460) 2027–2029 syllabus notes", () => {
  it("registers Geography in SYLLABUS_NOTES with code 0460", () => {
    const matches = SYLLABUS_NOTES.filter((s) => s.id === "geography");
    expect(matches).toHaveLength(1);
    expect(matches[0].code).toBe("0460");
    expect(matches[0].name).toBe("Geography");
  });

  it("correctly resolves in getSyllabusSubject for single-tier syllabus", () => {
    expect(getSyllabusSubject("geography")).toBe(GEOGRAPHY);
    expect(getSyllabusSubject("geography", "core")).toBe(GEOGRAPHY);
    expect(getSyllabusSubject("geography", "extended")).toBe(GEOGRAPHY);
  });

  it("has exactly 10 chapters covering all 3 Themes and Skills", () => {
    expect(GEOGRAPHY.chapters).toHaveLength(10);
  });

  it("numbers chapters sequentially from 1 to 10", () => {
    GEOGRAPHY.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
    });
  });

  it("contains no image figures in any subheading (strictly text-only constraint)", () => {
    for (const chapter of GEOGRAPHY.chapters) {
      for (const sub of chapter.subheadings) {
        expect((sub as Record<string, unknown>).figure).toBeUndefined();
      }
    }
  });

  it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
    for (const chapter of GEOGRAPHY.chapters) {
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
