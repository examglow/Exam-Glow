import { describe, expect, it } from "vitest";
import { PHYSICS, PHYSICS_CORE, PHYSICS_EXTENDED } from "@/lib/notes/physics";
import { getSyllabusSubject, SYLLABUS_NOTES } from "@/lib/syllabus-notes";

describe("Cambridge IGCSE Physics (0625) 2026–2028 syllabus notes", () => {
  const EXPECTED_SECTIONS = [
    "1. Motion, forces and energy",
    "2. Thermal physics",
    "3. Waves",
    "4. Electricity and magnetism",
    "5. Nuclear physics",
    "6. Space physics",
  ];

  it("registers Physics as a single course in SYLLABUS_NOTES with code 0625", () => {
    const physicsMatches = SYLLABUS_NOTES.filter((s) => s.id === "physics");
    expect(physicsMatches).toHaveLength(1);
    expect(physicsMatches[0].code).toBe("0625");
  });

  it("correctly resolves Core and Extended levels in getSyllabusSubject", () => {
    expect(getSyllabusSubject("physics", "core")).toBe(PHYSICS_CORE);
    expect(getSyllabusSubject("physics", "extended")).toBe(PHYSICS_EXTENDED);
    expect(getSyllabusSubject("physics")).toBe(PHYSICS);
  });

  describe("Physics Core", () => {
    it("has 24 Core chapters covering all 6 sections", () => {
      expect(PHYSICS_CORE.chapters).toHaveLength(24);
      const sections = Array.from(new Set(PHYSICS_CORE.chapters.map((ch) => ch.section)));
      expect(sections).toEqual(EXPECTED_SECTIONS);
    });

    it("has no figures in any subheading (text-only constraint)", () => {
      for (const chapter of PHYSICS_CORE.chapters) {
        for (const sub of chapter.subheadings) {
          expect((sub as Record<string, unknown>).figure).toBeUndefined();
        }
      }
    });

    it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
      for (const chapter of PHYSICS_CORE.chapters) {
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

  describe("Physics Extended", () => {
    it("has 26 Extended chapters covering all 6 sections", () => {
      expect(PHYSICS_EXTENDED.chapters).toHaveLength(26);
      const sections = Array.from(new Set(PHYSICS_EXTENDED.chapters.map((ch) => ch.section)));
      expect(sections).toEqual(EXPECTED_SECTIONS);
    });

    it("has no figures in any subheading (text-only constraint)", () => {
      for (const chapter of PHYSICS_EXTENDED.chapters) {
        for (const sub of chapter.subheadings) {
          expect((sub as Record<string, unknown>).figure).toBeUndefined();
        }
      }
    });

    it("ensures every subheading has examiner tips, common mistakes, and recap", () => {
      for (const chapter of PHYSICS_EXTENDED.chapters) {
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

    it("includes required Cambridge 0625 Extended supplement topics", () => {
      const titles = PHYSICS_EXTENDED.chapters.map((ch) => ch.title);
      expect(titles).toContain("Physical Quantities, Units & Vectors");
      expect(titles).toContain("Motion, Acceleration & Terminal Velocity");
      expect(titles).toContain("Forces, Elasticity & Circular Motion");
      expect(titles).toContain("Momentum & Impulse");
      expect(titles).toContain("Pressure & Liquid Column Derivations");
      expect(titles).toContain("Kinetic Particle Model & Internal Energy");
      expect(titles).toContain("Gas Laws & Absolute Temperature");
      expect(titles).toContain("Specific Heat Capacity & Latent Heat");
      expect(titles).toContain("Refraction, Snell's Law & Total Internal Reflection");
      expect(titles).toContain("Thin Lenses & Ray Diagrams");
      expect(titles).toContain("Resistance, Resistivity & I-V Characteristics");
      expect(titles).toContain("Electromagnetic Induction & Transformers");
      expect(titles).toContain("Atomic Structure & The Rutherford Scattering Experiment");
      expect(titles).toContain("Nuclear Decay Equations, Radiation & Half-Life");
      expect(titles).toContain("The Expanding Universe & Hubble's Law");
    });
  });
});
