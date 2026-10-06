import type { SubjectNotes } from "./types";

export const LATIN: SubjectNotes = {
  id: "latin",
  name: "Latin",
  code: "0480",
  color: "bg-stone-600",
  chapters: [
    {
      number: 1,
      title: "Nouns: The Five Declensions",
      intro: "Latin is a fully inflected language: every noun changes its ending (inflection) to show its grammatical function in the sentence. These sets of endings are called declensions, and Latin has five. Every noun belongs to exactly one declension, and each declension has distinct endings for six cases (Nominative, Vocative, Accusative, Genitive, Dative, Ablative) in both singular and plural. Learning the declension paradigms accurately is the single most fundamental skill in Latin.",
      subheadings: [
        {
          title: "The Cases and Their Functions",
          body: "Latin has six cases. Unlike modern European languages where word order signals grammatical function, Latin uses case endings — so the order of words in a sentence can vary for emphasis without changing the core meaning.",
          groups: [
            {
              subTitle: "Case Functions",
              bullets: [
                "**Nominative**: Subject of the sentence — who/what performs the action. *puella* (the girl [is/does]).",
                "**Vocative**: Direct address — calling or naming someone. *o puella* (O girl!). Usually identical to Nominative except 2nd declension masculine singulars (-e) and proper nouns (-i).",
                "**Accusative**: Direct object — who/what the verb directly affects. *puellam videt* (he sees the girl). Also used after many prepositions (ad, in [motion toward], per, trans).",
                "**Genitive**: Possession and description — 'of'. *filia puellae* (the daughter of the girl). Also used after certain adjectives meaning 'full of', 'desirous of'.",
                "**Dative**: Indirect object — to/for whom. *puellae donum dat* (he gives a gift to the girl). Also used with verbs of trusting, believing, commanding, pleasing.",
                "**Ablative**: Extremely versatile — from, by, with, at, in. Used after prepositions (a/ab, cum, de, e/ex, in [location], pro, sine) and in ablative absolute constructions."
              ]
            }
          ]
        },
        {
          title: "First and Second Declension Paradigms",
          body: "The First Declension is predominantly feminine nouns ending in -a (like puella, girl). The Second Declension includes masculine nouns in -us and neuter nouns in -um. These two declensions account for the majority of Latin vocabulary and must be known perfectly.",
          groups: [
            {
              subTitle: "First Declension (-a, mostly feminine)",
              bullets: [
                "**Singular**: Nom. puell**a** | Voc. puell**a** | Acc. puell**am** | Gen. puell**ae** | Dat. puell**ae** | Abl. puell**a**",
                "**Plural**: Nom. puell**ae** | Voc. puell**ae** | Acc. puell**as** | Gen. puell**arum** | Dat. puell**is** | Abl. puell**is**",
                "**Key alert**: Nominative singular and Ablative singular are both -a (identical). The Nominative plural and Genitive singular are both -ae (identical). Context and verb agreement resolve ambiguity.",
                "**Common first declension nouns**: puella (girl), femina (woman), aqua (water), terra (land), via (road/way), nauta (sailor — exceptional masculine), poeta (poet — masculine)."
              ]
            },
            {
              subTitle: "Second Declension — Masculine (-us) and Neuter (-um)",
              bullets: [
                "**Masculine singular**: Nom. serv**us** | Voc. serv**e** | Acc. serv**um** | Gen. serv**i** | Dat. serv**o** | Abl. serv**o**",
                "**Masculine plural**: Nom. serv**i** | Voc. serv**i** | Acc. serv**os** | Gen. serv**orum** | Dat. serv**is** | Abl. serv**is**",
                "**Neuter rule**: Neuter nouns are identical in Nominative, Vocative, and Accusative. Neuter singular: bell**um** in all three; Neuter plural: bell**a** in all three.",
                "**Common 2nd declension nouns**: servus (slave), dominus (master/lord), filius (son), deus (god), bellum (war), templum (temple), verbum (word).",
                "**-er nouns (2nd declension)**: Some drop the -e in all cases except Nominative: puer, puer**i**, puer**o**... Others keep the -e: magister, magistr**i**... Check the genitive to confirm."
              ]
            }
          ]
        },
        {
          title: "Verbs: The Four Conjugations — Present, Imperfect, Future",
          body: "Latin verbs are conjugated (change their endings) to show person (1st/2nd/3rd), number (singular/plural), tense (present/imperfect/perfect etc.), voice (active/passive), and mood (indicative/subjunctive/imperative). All Latin verbs belong to one of four conjugations, identified by the vowel before -re in the infinitive. The present, imperfect, and future active tenses are the most commonly tested at IGCSE level.",
          groups: [
            {
              subTitle: "Present Active Indicative",
              bullets: [
                "**1st Conjugation (-are)**: amo (I love), amas (you love), amat (he/she/it loves), amamus (we love), amatis (you all love), amant (they love). Stem: am-.",
                "**2nd Conjugation (-ere, long e)**: moneo (I warn), mones, monet, monemus, monetis, monent. Stem: mon-.",
                "**3rd Conjugation (-ere, short e)**: rego (I rule), regis, regit, regimus, regitis, regunt. Note the vowel shifts: -i- in 2nd person, -u- in 3rd plural.",
                "**4th Conjugation (-ire)**: audio (I hear), audis, audit, audimus, auditis, audiunt.",
                "**Irregular esse (to be)**: sum, es, est, sumus, estis, sunt — must be memorised; essential for passive constructions and linking sentences."
              ]
            },
            {
              subTitle: "Imperfect and Future Active",
              bullets: [
                "**Imperfect Active (continuous/habitual past)**: Insert -ba- before personal endings. 1st/2nd conj.: amabam, amabas, amabat, amabamus, amabatis, amabant. 3rd conj.: regebam... 4th conj.: audiebam...",
                "**Future Active (1st/2nd conj.)**: Insert -bi- (except 1st person -bo and 3rd plural -bunt): amabo, amabis, amabit, amabimus, amabitis, amabunt.",
                "**Future Active (3rd/4th conj.)**: Use -a-/-e- infix: regam, reges, reget, regemus, regetis, regent.",
                "**Distinguishing tenses**: In 1st/2nd conjugation, amabimus (imperfect, we were loving) vs amabimus (future, we will love) — the -bi- appears in both! Context, vocabulary, and surrounding verbs resolve this. The 3rd/4th future is unambiguous."
              ]
            }
          ]
        },
        {
          title: "Translation Technique and Prose Comprehension",
          body: "IGCSE Latin translation requires finding the verb first, then identifying the subject (Nominative) and working outward to objects and modifiers. Latin word order is flexible, but Subject-Object-Verb (SOV) is the default pattern. Comprehension questions require identification of specific grammatical forms and understanding of meaning in context.",
          groups: [
            {
              subTitle: "Translation Method",
              bullets: [
                "**Step 1 — Find the finite verb**: Identify person and number from the ending; this tells you who the subject is (even if the subject noun is omitted).",
                "**Step 2 — Find the Nominative subject**: Match number and gender with the verb.",
                "**Step 3 — Find the Accusative object**: If the verb is transitive, look for the noun in the Accusative.",
                "**Step 4 — Add modifiers**: Adjectives agree with their nouns in case, number, and gender — match them up even if they are separated in the sentence.",
                "**Step 5 — Handle ablatives and genitives**: Decide whether an ablative is time, instrument, manner, accompaniment, or part of an ablative absolute.",
                "**Common examiner trap**: Latin adjectives often appear far from their nouns. *magna cum laude* — magna (f. Abl. with large) modifies laude (f. Abl. praise) despite the preposition between them."
              ]
            },
            {
              subTitle: "Comprehension Question Technique",
              bullets: [
                "**'How do you know?'**: These questions require you to quote the Latin and explain it — e.g., 'The verb *cucurrit* is 3rd person singular perfect, meaning he ran, showing...'",
                "**Identifying grammatical forms**: Give case, number, and gender for nouns; person, number, tense, and mood for verbs.",
                "**Inference questions**: Use the Latin as evidence — quote directly and explain what it implies.",
                "**Vocabulary in context**: Use known roots and surrounding words. Latin roots underlie most English scientific and academic vocabulary — *aqua*, *terra*, *porta*, *bellum* all have obvious English cognates."
              ]
            }
          ]
        }
      ]
    }
  ]
};
