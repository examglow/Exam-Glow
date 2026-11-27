import type { SubjectNotes } from "./types";
import { FOOD_AND_NUTRITION_PART1 } from "./food-and-nutrition-1";
import { FOOD_AND_NUTRITION_PART2 } from "./food-and-nutrition-2";

/**
 * Cambridge IGCSE Food & Nutrition (0648) 2026–2028 Syllabus Notes
 * Complete comprehensive text-only notes across all 6 official syllabus sections:
 * - Chapter 1: Nutrients and the Science of Nutrition
 * - Chapter 2: Nutritive Value of Foods & Food Tests
 * - Chapter 3: Digestion and Absorption
 * - Chapter 4: Meal Planning, Dietary Guidelines and Special Needs
 * - Chapter 5: Food Spoilage, Hygiene and Food Preservation
 * - Chapter 6: Cooking Methods, Kitchen Equipment and Food Science Reactions
 */
export const FOOD_AND_NUTRITION: SubjectNotes = {
  id: "food-and-nutrition",
  name: "Food & Nutrition",
  code: "0648",
  color: "bg-yellow-500",
  chapters: [...FOOD_AND_NUTRITION_PART1, ...FOOD_AND_NUTRITION_PART2],
};
