import { describe, expect, it } from "vitest";
import { HISTORY } from "@/lib/notes/history";
import { getSyllabusSubject, SYLLABUS_NOTES } from "@/lib/syllabus-notes";

describe("Cambridge IGCSE History (0470) 2027–2028 syllabus notes", () => {
  it("registers History in SYLLABUS_NOTES with code 0470", () => {
    const matches = SYLLABUS_NOTES.filter((s) => s.id === "history");
    expect(matches).toHaveLength(1);
    expect(matches[0].code).toBe("0470");
    expect(matches[0].name).toBe("History");
  });

  it("correctly resolves in getSyllabusSubject for single-tier syllabus", () => {
    expect(getSyllabusSubject("history")).toBe(HISTORY);
    expect(getSyllabusSubject("history", "core")).toBe(HISTORY);
    expect(getSyllabusSubject("history", "extended")).toBe(HISTORY);
  });

  it("has exactly 12 chapters covering Core Option B, Depth Studies B & C, and Exam Skills", () => {
    expect(HISTORY.chapters).toHaveLength(12);
  });

  it("numbers chapters sequentially from 1 to 12", () => {
    HISTORY.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
    });
  });

  it("contains no image figures in any subheading (strictly text-only constraint)", () => {
    for (const chapter of HISTORY.chapters) {
      for (const sub of chapter.subheadings) {
        expect((sub as Record<string, unknown>).figure).toBeUndefined();
      }
    }
  });

  it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
    for (const chapter of HISTORY.chapters) {
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
