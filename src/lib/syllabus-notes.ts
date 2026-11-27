// Syllabus Notes — full document-style notes matching IGCSE syllabus
// Re-exports all subjects from modular note collections

export * from "./notes/types";
import { BIOLOGY } from "./notes/biology";
import { BIOLOGY_CORE } from "./notes/biology-core";
import { CHEMISTRY, CHEMISTRY_CORE, CHEMISTRY_EXTENDED } from "./notes/chemistry";
import { PHYSICS, PHYSICS_CORE, PHYSICS_EXTENDED } from "./notes/physics";
import { ENVIRONMENTAL_MANAGEMENT } from "./notes/environmental-management";
import { MATHEMATICS, MATHEMATICS_CORE, MATHEMATICS_EXTENDED } from "./notes/mathematics";
import { ADDITIONAL_MATHEMATICS } from "./notes/additional-mathematics";
import { FIRST_LANGUAGE_ENGLISH } from "./notes/first-language-english";
import { ENGLISH_SECOND_LANGUAGE } from "./notes/english-second-language";
import { CORE_ENGLISH } from "./notes/core-english";
import { LITERATURE_IN_ENGLISH } from "./notes/literature-in-english";
import { ACCOUNTING } from "./notes/accounting";
import { AGRICULTURE } from "./notes/agriculture";
import { ART_DESIGN } from "./notes/art-design";
import { BUSINESS_STUDIES } from "./notes/business-studies";
import { ECONOMICS } from "./notes/economics";
import { HISTORY } from "./notes/history";
import { GEOGRAPHY } from "./notes/geography";
import { SOCIOLOGY } from "./notes/sociology";
import { RELIGIOUS_STUDIES } from "./notes/religious-studies";
import { COMPUTER_SCIENCE } from "./notes/computer-science";
import { ICT } from "./notes/ict";
import { ART_AND_DESIGN } from "./notes/art-and-design";
import { MUSIC } from "./notes/music";
import { DESIGN_AND_TECHNOLOGY } from "./notes/design-and-technology";
import { FOOD_AND_NUTRITION } from "./notes/food-and-nutrition";
import { PHYSICAL_EDUCATION } from "./notes/physical-education";
import { TRAVEL_AND_TOURISM } from "./notes/travel-and-tourism";
import { PSYCHOLOGY } from "./notes/psychology";
import { MARINE_SCIENCE } from "./notes/marine-science";
import { GLOBAL_PERSPECTIVES } from "./notes/global-perspectives";
import { MEDIA_STUDIES } from "./notes/media-studies";
import { DRAMA } from "./notes/drama";
import { BUSINESS } from "./notes/business";
import { COMMERCE } from "./notes/commerce";
// New subjects — 5 additional IGCSE syllabuses
import { FRENCH } from "./notes/french";
import { SPANISH } from "./notes/spanish";
import { PORTUGUESE } from "./notes/portuguese";
import { DEVELOPMENT_STUDIES } from "./notes/development-studies";
import { ENTERPRISE } from "./notes/enterprise";
import { CO_ORDINATED_SCIENCES } from "./notes/co-ordinated-sciences";
// 5 more new subjects
import { ASTRONOMY } from "./notes/astronomy";
import { GERMAN } from "./notes/german";
import { JAPANESE } from "./notes/japanese";
import { ITALIAN } from "./notes/italian";
import { ISIZULU } from "./notes/isizulu";
import { HINDI } from "./notes/hindi";
import { ENGLISH_SECOND_LANGUAGE_9_1 } from "./notes/english-second-language-9-1";
import { ENGLISH_ADDITIONAL_LANGUAGE } from "./notes/english-additional-language";
import { ARABIC_SECOND_LANGUAGE } from "./notes/arabic-second-language";
import { LATIN } from "./notes/latin";
import { WORLD_LITERATURE } from "./notes/world-literature";
import { CHINESE_SECOND_LANGUAGE } from "./notes/chinese-second-language";
import { FIRST_LANGUAGE_CHINESE } from "./notes/first-language-chinese";
import { MANDARIN_CHINESE } from "./notes/mandarin-chinese";
import { BAHASA_INDONESIA } from "./notes/bahasa-indonesia";
import type { SubjectNotes } from "./notes/types";
export * from "./notes/definitions-store";

export {
  BIOLOGY,
  BIOLOGY_CORE,
  CHEMISTRY,
  CHEMISTRY_CORE,
  CHEMISTRY_EXTENDED,
  PHYSICS,
  PHYSICS_CORE,
  PHYSICS_EXTENDED,
  ENVIRONMENTAL_MANAGEMENT,
  MATHEMATICS,
  MATHEMATICS_CORE,
  MATHEMATICS_EXTENDED,
  ADDITIONAL_MATHEMATICS,
  FIRST_LANGUAGE_ENGLISH,
  ENGLISH_SECOND_LANGUAGE,
  LITERATURE_IN_ENGLISH,
  ACCOUNTING,
  AGRICULTURE,
  ART_DESIGN,
  BUSINESS_STUDIES,
  ECONOMICS,
  HISTORY,
  GEOGRAPHY,
  SOCIOLOGY,
  RELIGIOUS_STUDIES,
  COMPUTER_SCIENCE,
  ICT,
  ART_AND_DESIGN,
  MUSIC,
  DESIGN_AND_TECHNOLOGY,
  FOOD_AND_NUTRITION,
  PHYSICAL_EDUCATION,
  TRAVEL_AND_TOURISM,
  PSYCHOLOGY,
  MARINE_SCIENCE,
  GLOBAL_PERSPECTIVES,
  MEDIA_STUDIES,
  DRAMA,
  FRENCH,
  SPANISH,
  PORTUGUESE,
  DEVELOPMENT_STUDIES,
  ENTERPRISE,
  CO_ORDINATED_SCIENCES,
  ASTRONOMY,
  GERMAN,
  JAPANESE,
  ITALIAN,
  ISIZULU,
  HINDI,
  ENGLISH_SECOND_LANGUAGE_9_1,
  ENGLISH_ADDITIONAL_LANGUAGE,
  ARABIC_SECOND_LANGUAGE,
  LATIN,
  WORLD_LITERATURE,
  BUSINESS,
  COMMERCE,
  CORE_ENGLISH,
  CHINESE_SECOND_LANGUAGE,
  FIRST_LANGUAGE_CHINESE,
  MANDARIN_CHINESE,
  BAHASA_INDONESIA,
};

const RAW_NOTES: SubjectNotes[] = [
  BIOLOGY,
  CHEMISTRY,
  MATHEMATICS,
  ADDITIONAL_MATHEMATICS,
  PHYSICS,
  ECONOMICS,
  HISTORY,
  ICT,
  GEOGRAPHY,
  FOOD_AND_NUTRITION,
  FRENCH,
  ENVIRONMENTAL_MANAGEMENT,
  COMPUTER_SCIENCE,
  COMMERCE,
  PORTUGUESE,
  BUSINESS,
  BUSINESS_STUDIES,
  AGRICULTURE,
  CORE_ENGLISH,
  JAPANESE,
  ITALIAN,
  GERMAN,
  ISIZULU,
  HINDI,
  ENTERPRISE,
  ENGLISH_SECOND_LANGUAGE_9_1,
  ENGLISH_ADDITIONAL_LANGUAGE,
  LITERATURE_IN_ENGLISH,
  DRAMA,
  DESIGN_AND_TECHNOLOGY,
  CHINESE_SECOND_LANGUAGE,
  FIRST_LANGUAGE_CHINESE,
  MANDARIN_CHINESE,
  BAHASA_INDONESIA,
];

// All subjects with written syllabus chapters are published and accessible.
export const SYLLABUS_NOTES: SubjectNotes[] = RAW_NOTES.filter(
  (s) => s.chapters && s.chapters.length > 0,
);

/** Core vs Extended level support for subjects with multi-tier curricula. */
export function getSyllabusSubject(subjectId?: string, level?: string): SubjectNotes | null {
  if (subjectId === "biology" && level === "core") return BIOLOGY_CORE;
  if (subjectId === "chemistry" && level === "core") return CHEMISTRY_CORE;
  if (subjectId === "chemistry" && level === "extended") return CHEMISTRY_EXTENDED;
  if (subjectId === "mathematics" && level === "core") return MATHEMATICS_CORE;
  if (subjectId === "mathematics" && level === "extended") return MATHEMATICS_EXTENDED;
  if (subjectId === "physics" && level === "core") return PHYSICS_CORE;
  if (subjectId === "physics" && level === "extended") return PHYSICS_EXTENDED;
  if (subjectId === "core-english") return CORE_ENGLISH;
  if (subjectId === "english-second-language" && level === "core") return CORE_ENGLISH;
  if (subjectId === "additional-mathematics") return ADDITIONAL_MATHEMATICS;
  if (subjectId === "economics") return ECONOMICS;
  if (subjectId === "history") return HISTORY;
  if (subjectId === "ict") return ICT;
  if (subjectId === "geography") return GEOGRAPHY;
  if (subjectId === "food-and-nutrition") return FOOD_AND_NUTRITION;
  if (subjectId === "french") return FRENCH;
  if (subjectId === "environmental-management") return ENVIRONMENTAL_MANAGEMENT;
  if (subjectId === "computer-science") return COMPUTER_SCIENCE;
  if (subjectId === "commerce") return COMMERCE;
  if (subjectId === "portuguese") return PORTUGUESE;
  if (subjectId === "business") return BUSINESS;
  if (subjectId === "business-studies") return BUSINESS_STUDIES;
  if (subjectId === "agriculture") return AGRICULTURE;
  if (subjectId === "japanese") return JAPANESE;
  if (subjectId === "italian") return ITALIAN;
  if (subjectId === "german") return GERMAN;
  if (subjectId === "isizulu") return ISIZULU;
  if (subjectId === "hindi") return HINDI;
  if (subjectId === "enterprise") return ENTERPRISE;
  if (subjectId === "english-second-language-9-1") return ENGLISH_SECOND_LANGUAGE_9_1;
  if (subjectId === "english-additional-language") return ENGLISH_ADDITIONAL_LANGUAGE;
  if (subjectId === "literature-in-english") return LITERATURE_IN_ENGLISH;
  if (subjectId === "drama") return DRAMA;
  if (subjectId === "design-technology" || subjectId === "design-and-technology") return DESIGN_AND_TECHNOLOGY;
  if (subjectId === "chinese-second-language") return CHINESE_SECOND_LANGUAGE;
  if (subjectId === "first-language-chinese") return FIRST_LANGUAGE_CHINESE;
  if (subjectId === "chinese" || subjectId === "mandarin-chinese") return MANDARIN_CHINESE;
  if (subjectId === "bahasa-indonesia") return BAHASA_INDONESIA;
  return SYLLABUS_NOTES.find((subject) => subject.id === subjectId) ?? null;
}
