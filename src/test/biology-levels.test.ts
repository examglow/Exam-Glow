import { describe, expect, it } from "vitest";

import { BIOLOGY } from "@/lib/notes/biology";
import { BIOLOGY_CORE } from "@/lib/notes/biology-core";
import { getSyllabusSubject } from "@/lib/syllabus-notes";

describe("Biology course levels", () => {
  it("keeps all 161 Extended chapters", () => {
    expect(BIOLOGY.chapters).toHaveLength(161);
    expect(getSyllabusSubject("biology", "extended")).toBe(BIOLOGY);
    expect(getSyllabusSubject("biology")).toBe(BIOLOGY);
  });

  it("selects exactly the twenty-one Core chapters", () => {
    expect(getSyllabusSubject("biology", "core")).toBe(BIOLOGY_CORE);
    expect(BIOLOGY_CORE.chapters.map((chapter) => chapter.title)).toEqual([
      "Characteristics and Classification of Living Organisms",
      "Organisation of the Organism",
      "Movement In and Out of Cells",
      "Biological Molecules",
      "Enzymes",
      "Plant Nutrition",
      "Human Nutrition",
      "Transport in Plants",
      "Transport in Animals",
      "Diseases and Immunity",
      "Gas Exchange in Humans",
      "Respiration",
      "Excretion in Humans",
      "Coordination and Response",
      "Drugs",
      "Reproduction",
      "Inheritance",
      "Variation and Selection",
      "Organisms and their Environment",
      "Human Influences on Ecosystems",
      "Biotechnology and Genetic Modification",
    ]);
  });

  it("gives all 21 Core chapters their own labelled PNG diagrams", () => {
    const figures = BIOLOGY_CORE.chapters.map((chapter) =>
      chapter.subheadings.flatMap((section) => section.figure ?? []).join(""),
    );

    expect(figures).toHaveLength(21);
    expect(new Set(figures).size).toBe(21);
    figures.forEach((figure, index) => {
      const num = String(index + 1).padStart(2, "0");
      expect(figure).toContain(`/notes/biology-core/core-${num}-`);
      expect(figure).toMatch(/^!\[.+\]\(\/notes\/biology-core\/core-\d{2}-.+\.png\)$/);
    });
  });
});
