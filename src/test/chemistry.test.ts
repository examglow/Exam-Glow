import { describe, expect, it } from "vitest";
import { CHEMISTRY, CHEMISTRY_CORE, CHEMISTRY_EXTENDED } from "@/lib/notes/chemistry";
import { getSyllabusSubject, SYLLABUS_NOTES } from "@/lib/syllabus-notes";

describe("Cambridge IGCSE Chemistry (0620) syllabus notes", () => {
  const EXPECTED_SECTIONS = [
    "1. States of matter",
    "2. Atoms, elements and compounds",
    "3. Stoichiometry",
    "4. Electrochemistry",
    "5. Chemical energetics",
    "6. Chemical reactions",
    "7. Acids, bases and salts",
    "8. The Periodic Table",
    "9. Metals",
    "10. Chemistry of the environment",
    "11. Organic chemistry",
    "12. Experimental techniques and chemical analysis",
  ];

  it("registers Chemistry as a single course in SYLLABUS_NOTES", () => {
    const chemMatches = SYLLABUS_NOTES.filter((s) => s.id === "chemistry");
    expect(chemMatches).toHaveLength(1);
    expect(chemMatches[0].code).toBe("0620");
  });

  it("correctly resolves Core and Extended levels in getSyllabusSubject", () => {
    expect(getSyllabusSubject("chemistry", "core")).toBe(CHEMISTRY_CORE);
    expect(getSyllabusSubject("chemistry", "extended")).toBe(CHEMISTRY_EXTENDED);
    expect(getSyllabusSubject("chemistry")).toBe(CHEMISTRY);
  });

  describe("Chemistry Core", () => {
    it("has 27 Core chapters covering all 12 sections", () => {
      expect(CHEMISTRY_CORE.chapters).toHaveLength(27);
      const sections = Array.from(new Set(CHEMISTRY_CORE.chapters.map((ch) => ch.section)));
      expect(sections).toEqual(EXPECTED_SECTIONS);
    });

    it("has no figures in any subheading (text-only constraint)", () => {
      for (const chapter of CHEMISTRY_CORE.chapters) {
        for (const sub of chapter.subheadings) {
          expect((sub as Record<string, unknown>).figure).toBeUndefined();
        }
      }
    });

    it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
      for (const chapter of CHEMISTRY_CORE.chapters) {
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

  describe("Chemistry Extended", () => {
    it("has 29 Extended chapters covering all 12 sections", () => {
      expect(CHEMISTRY_EXTENDED.chapters).toHaveLength(29);
      const sections = Array.from(new Set(CHEMISTRY_EXTENDED.chapters.map((ch) => ch.section)));
      expect(sections).toEqual(EXPECTED_SECTIONS);
    });

    it("has no figures in any subheading (text-only constraint)", () => {
      for (const chapter of CHEMISTRY_EXTENDED.chapters) {
        for (const sub of chapter.subheadings) {
          expect((sub as Record<string, unknown>).figure).toBeUndefined();
        }
      }
    });

    it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
      for (const chapter of CHEMISTRY_EXTENDED.chapters) {
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

    it("includes required Cambridge 0620 Extended supplement topics", () => {
      const titles = CHEMISTRY_EXTENDED.chapters.map((ch) => ch.title);
      expect(titles).toContain("The Mole Concept and Quantitative Chemistry");
      expect(titles).toContain("Chemical Energetics & Bond Energy Calculations");
      expect(titles).toContain("Collision Theory & Reaction Rates");
      expect(titles).toContain("Equilibrium & Industrial Processes");
      expect(titles).toContain("Redox: Electron Transfer & Oxidation Numbers");
      expect(titles).toContain("Acids, Bases & Proton Transfer");
      expect(titles).toContain("Oxides & Salt Preparation");
      expect(titles).toContain("Extraction of Metals (Iron & Aluminium)");
      expect(titles).toContain("Polymers & Condensation Polymerisation");
      expect(titles).toContain("Experimental Design & Acid-Base Titrations");
    });
  });
});
