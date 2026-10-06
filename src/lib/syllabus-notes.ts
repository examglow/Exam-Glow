// Syllabus Notes — full document-style notes matching Cambridge IGCSE syllabus
// Re-exports all subjects from modular note collections

export * from "./notes/types";
import { BIOLOGY } from "./notes/biology";
import { CHEMISTRY } from "./notes/chemistry";
import { PHYSICS } from "./notes/physics";
import { ENVIRONMENTAL_MANAGEMENT } from "./notes/environmental-management";
import { MATHEMATICS } from "./notes/mathematics";
import { ADDITIONAL_MATHEMATICS } from "./notes/additional-mathematics";
import { FIRST_LANGUAGE_ENGLISH } from "./notes/first-language-english";
import { ENGLISH_SECOND_LANGUAGE } from "./notes/english-second-language";
import { LITERATURE_IN_ENGLISH } from "./notes/literature-in-english";
import { ACCOUNTING } from "./notes/accounting";
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
import { ARABIC_SECOND_LANGUAGE } from "./notes/arabic-second-language";
import { LATIN } from "./notes/latin";
import { WORLD_LITERATURE } from "./notes/world-literature";
import type { SubjectNotes } from "./notes/types";

export {
  BIOLOGY,
  CHEMISTRY,
  PHYSICS,
  ENVIRONMENTAL_MANAGEMENT,
  MATHEMATICS,
  ADDITIONAL_MATHEMATICS,
  FIRST_LANGUAGE_ENGLISH,
  ENGLISH_SECOND_LANGUAGE,
  LITERATURE_IN_ENGLISH,
  ACCOUNTING,
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
  ARABIC_SECOND_LANGUAGE,
  LATIN,
  WORLD_LITERATURE,
};

export const SYLLABUS_NOTES: SubjectNotes[] = [
  BIOLOGY,
  CHEMISTRY,
  PHYSICS,
  ENVIRONMENTAL_MANAGEMENT,
  CO_ORDINATED_SCIENCES,
  MATHEMATICS,
  ADDITIONAL_MATHEMATICS,
  FIRST_LANGUAGE_ENGLISH,
  ENGLISH_SECOND_LANGUAGE,
  LITERATURE_IN_ENGLISH,
  FRENCH,
  SPANISH,
  PORTUGUESE,
  ACCOUNTING,
  BUSINESS_STUDIES,
  ECONOMICS,
  ENTERPRISE,
  HISTORY,
  GEOGRAPHY,
  SOCIOLOGY,
  DEVELOPMENT_STUDIES,
  RELIGIOUS_STUDIES,
  COMPUTER_SCIENCE,
  ICT,
  // Arts & Creative subjects
  ART_AND_DESIGN,
  MUSIC,
  DRAMA,
  // Applied / Technical subjects
  DESIGN_AND_TECHNOLOGY,
  FOOD_AND_NUTRITION,
  PHYSICAL_EDUCATION,
  // Social Sciences & Humanities
  TRAVEL_AND_TOURISM,
  PSYCHOLOGY,
  GLOBAL_PERSPECTIVES,
  // Sciences
  MARINE_SCIENCE,
  // Media
  MEDIA_STUDIES,
  // New additions
  ASTRONOMY,
  GERMAN,
  ARABIC_SECOND_LANGUAGE,
  LATIN,
  WORLD_LITERATURE,
];
