import { describe, expect, it } from "vitest";
import { ICT } from "@/lib/notes/ict";
import { getSyllabusSubject, SYLLABUS_NOTES } from "@/lib/syllabus-notes";

describe("Cambridge IGCSE ICT (0417) 2026–2028 syllabus notes", () => {
  it("registers ICT in SYLLABUS_NOTES with code 0417", () => {
    const matches = SYLLABUS_NOTES.filter((s) => s.id === "ict");
    expect(matches).toHaveLength(1);
    expect(matches[0].code).toBe("0417");
    expect(matches[0].name).toBe("Information and Communication Technology");
  });

  it("correctly resolves in getSyllabusSubject for single-tier syllabus", () => {
    expect(getSyllabusSubject("ict")).toBe(ICT);
    expect(getSyllabusSubject("ict", "core")).toBe(ICT);
    expect(getSyllabusSubject("ict", "extended")).toBe(ICT);
  });

  it("has exactly 21 chapters covering all 21 official Cambridge syllabus sections", () => {
    expect(ICT.chapters).toHaveLength(21);
  });

  it("numbers chapters sequentially from 1 to 21", () => {
    ICT.chapters.forEach((ch, idx) => {
      expect(ch.number).toBe(idx + 1);
    });
  });

  it("contains no image figures in any subheading (strictly text-only constraint)", () => {
    for (const chapter of ICT.chapters) {
      for (const sub of chapter.subheadings) {
        expect((sub as Record<string, unknown>).figure).toBeUndefined();
      }
    }
  });

  it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
    for (const chapter of ICT.chapters) {
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
