import { describe, expect, it } from "bun:test";
import { getSyllabusSubject, SYLLABUS_NOTES } from "../lib/syllabus-notes";

describe("Six Cambridge Subjects Registration & Completeness", () => {
  const EXPECTED_SUBJECTS = [
    { id: "computer-science", code: "0478", name: "Computer Science", minChapters: 10 },
    { id: "commerce", code: "0715", name: "Commerce", minChapters: 6 },
    { id: "portuguese", code: "0504", name: "Portuguese", minChapters: 6 },
    { id: "business", code: "0774", name: "Business", minChapters: 6 },
    { id: "business-studies", code: "0450", name: "Business Studies", minChapters: 6 },
    { id: "agriculture", code: "0600", name: "Agriculture", minChapters: 10 },
  ];

  it("should have all 6 subjects registered in SYLLABUS_NOTES", () => {
    for (const expected of EXPECTED_SUBJECTS) {
      const found = SYLLABUS_NOTES.find((s) => s.id === expected.id);
      expect(found).toBeDefined();
      expect(found!.code).toBe(expected.code);
      expect(found!.chapters.length).toBe(expected.minChapters);
    }
  });

  it("should retrieve all 6 subjects via getSyllabusSubject", () => {
    for (const expected of EXPECTED_SUBJECTS) {
      const sub = getSyllabusSubject(expected.id);
      expect(sub).not.toBeNull();
      expect(sub!.id).toBe(expected.id);
      expect(sub!.code).toBe(expected.code);
      expect(sub!.chapters.length).toBe(expected.minChapters);
    }
  });

  it("must keep business (0774) and business-studies (0450) as separate subjects", () => {
    const biz = getSyllabusSubject("business");
    const bizStudies = getSyllabusSubject("business-studies");

    expect(biz).not.toBeNull();
    expect(bizStudies).not.toBeNull();
    expect(biz!.id).not.toBe(bizStudies!.id);
    expect(biz!.code).toBe("0774");
    expect(bizStudies!.code).toBe("0450");
  });

  it("every subject must have contiguous chapter numbers starting at 1 with rich text-only subheadings", () => {
    for (const expected of EXPECTED_SUBJECTS) {
      const sub = getSyllabusSubject(expected.id)!;
      sub.chapters.forEach((ch, idx) => {
        expect(ch.number).toBe(idx + 1);
        expect(ch.title.length).toBeGreaterThan(0);
        expect(ch.intro.length).toBeGreaterThan(0);
        expect(ch.subheadings.length).toBeGreaterThan(0);

        for (const sh of ch.subheadings) {
          expect((sh as any).figure).toBeUndefined();
          expect(sh.body).not.toContain("/diagrams/");
          expect(sh.body).not.toContain("<figure");
          expect(sh.body).not.toContain("<img");
          expect(sh.examinerTips).toBeDefined();
          expect(sh.examinerTips!.length).toBeGreaterThanOrEqual(1);
          expect(sh.commonMistakes).toBeDefined();
          expect(sh.commonMistakes!.length).toBeGreaterThanOrEqual(1);
          expect(sh.recap).toBeDefined();
          expect(sh.recap!.length).toBeGreaterThanOrEqual(1);
        }
      });
    }
  });
});
