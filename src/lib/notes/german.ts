import type { SubjectNotes } from "./types";

export const GERMAN: SubjectNotes = {
  id: "german",
  name: "German",
  code: "0525",
  color: "bg-yellow-600",
  chapters: [
    {
      number: 1,
      title: "Grammar Foundations: Cases, Articles and Noun Gender",
      intro: "German is an inflected language with four grammatical cases — Nominative, Accusative, Dative, and Genitive — and three noun genders (masculine, feminine, neuter). Every German noun has a grammatical gender that must be learned with the noun, as it determines the form of articles, adjectives, and pronouns. Case endings signal the grammatical function of each noun phrase in the sentence. Mastery of cases and gender is the single most important grammar foundation for all IGCSE German writing and reading tasks.",
      subheadings: [
        {
          title: "Grammatical Gender and Definite Articles",
          body: "German nouns are masculine (der), feminine (die), or neuter (das). The plural article for all genders is die. Gender must generally be memorised with each noun, but certain suffixes reliably indicate gender.",
          groups: [
            {
              subTitle: "Gender Patterns",
              bullets: [
                "**Masculine suffixes**: -er (der Lehrer, teacher), -ling (der Frühling, spring), -ismus (der Tourismus). Male persons/animals are almost always masculine.",
                "**Feminine suffixes**: -ung (die Zeitung, newspaper), -heit/-keit (die Freiheit, freedom), -schaft (die Mannschaft, team), -tion (die Nation). Female persons are always feminine.",
                "**Neuter suffixes**: -chen/-lein (diminutives: das Mädchen, girl), -um (das Zentrum), -ment (das Dokument). Infinitives used as nouns are neuter: das Essen (eating/food).",
                "**Compound nouns**: Always take the gender of the final component — die Haustür (die Tür) = the front door."
              ]
            },
            {
              subTitle: "The Four Cases",
              bullets: [
                "**Nominative**: The subject of the sentence (who performs the action). Der Mann kauft Brot. (The man buys bread.)",
                "**Accusative**: The direct object (what is directly affected). Ich kaufe **den** Wein. (I buy the wine.) — masculine changes der → den.",
                "**Dative**: The indirect object (to/for whom). Ich gebe **dem** Mann das Buch. (I give the man the book.) — masculine/neuter: dem; feminine: der; plural: den + -n on noun.",
                "**Genitive**: Possession/relationship. Das Buch **des Mannes**. (The book of the man.) — used more in writing; often replaced by von + Dative in spoken German.",
                "**Case trigger verbs (Dative)**: helfen (to help), danken (to thank), gehören (to belong to), glauben (to believe) — these always take a Dative object, not Accusative."
              ]
            }
          ]
        },
        {
          title: "Verb Tenses: Present, Perfect and Imperfect",
          body: "The IGCSE German syllabus requires active use of present, perfect (Perfekt), and imperfect (Präteritum) tenses for speaking and writing, and recognition of future, conditional, and pluperfect tenses for reading comprehension. The perfect tense is standard in spoken German for past events; the imperfect is primarily used in written narrative and with haben/sein/modal verbs.",
          groups: [
            {
              subTitle: "Present Tense (Präsens)",
              bullets: [
                "**Regular -en verbs**: stem + endings: -e, -st, -t, -en, -t, -en. kauf-en → ich kaufe, du kaufst, er/sie/es kauft, wir kaufen, ihr kauft, sie/Sie kaufen.",
                "**Stem-vowel change verbs**: e → ie: sehen (ich sehe, du siehst, er sieht). e → i: sprechen (du sprichst, er spricht). a → ä: fahren (du fährst, er fährt).",
                "**Separable verbs**: Prefix detaches and moves to end of clause: aufstehen → Ich stehe um 7 Uhr auf."
              ]
            },
            {
              subTitle: "Perfect Tense (Perfekt)",
              bullets: [
                "**Formation**: present tense of haben or sein + past participle (Partizip II) at the end of the clause.",
                "**haben verbs**: Transitive verbs and most others. Ich habe ein Buch **gelesen**. (I have read / I read a book.)",
                "**sein verbs**: Verbs of movement/change of state with no direct object, plus sein, bleiben, werden. Ich bin nach Berlin **gefahren**. (I went to Berlin.)",
                "**Partizip II formation**: Regular weak verbs: ge- + stem + -t (gekauft, gemacht). Strong verbs: ge- + stem (often with vowel change) + -en (geschrieben, gesprochen). Verbs ending in -ieren: no ge- prefix (studiert, telefoniert).",
                "**Inseparable prefixes** (be-, er-, ver-, zer-, emp-, ent-, ge-, miss-): No ge- in Partizip II — er hat **besucht**, sie hat **verkauft**."
              ]
            },
            {
              subTitle: "Imperfect Tense (Präteritum)",
              bullets: [
                "**Essential imperfect forms**: sein (war), haben (hatte), können (konnte), müssen (musste), wollen (wollte), dürfen (durfte), sollen (sollte) — these are used in conversation too.",
                "**Weak verbs in Präteritum**: stem + -te endings: kaufen → ich kaufte, du kauftest, er kaufte.",
                "**Strong verbs**: Stem vowel change + no ending in 1st/3rd person singular: gehen → ich ging, schreiben → ich schrieb."
              ]
            }
          ]
        },
        {
          title: "Word Order and Subordinate Clauses",
          body: "German word order is determined by strict rules: the finite verb occupies the second position in a main clause (V2 rule). In subordinate clauses introduced by conjunctions, the finite verb moves to the very end. Understanding and applying these rules correctly is heavily tested in IGCSE writing tasks.",
          groups: [
            {
              subTitle: "Main Clause Word Order",
              bullets: [
                "**V2 rule**: The conjugated verb is always second in a main clause. Any element can come first (subject, time, place), but the verb stays second: Morgen **fahre** ich nach Hamburg.",
                "**Time-Manner-Place (TMP)**: Adverbials generally follow the order: time first, then manner, then place: Ich fahre morgen mit dem Zug nach Berlin.",
                "**Coordinating conjunctions** (und, aber, oder, denn, sondern): Join two main clauses; word order in both clauses unchanged."
              ]
            },
            {
              subTitle: "Subordinating Conjunctions — Verb to End",
              bullets: [
                "**Common subordinating conjunctions**: weil (because), dass (that), wenn (when/if), obwohl (although), damit (so that), bevor (before), nachdem (after), als (when — single past event).",
                "**Rule**: In a subordinate clause, the conjugated verb goes to the very end: Ich komme nicht, weil ich krank **bin**.",
                "**Separable verbs in subordinate clauses**: The prefix does NOT separate; the whole verb goes to the end: ..., weil er früh **aufsteht**.",
                "**Perfect tense in subordinate clause**: auxiliary goes last, after the participle: ..., weil er das Buch **gelesen hat**.",
                "**Modal verbs in subordinate clause**: Both the modal and infinitive go to the end, modal last: ..., weil er nicht kommen **kann**."
              ]
            }
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Themes and Vocabulary: Daily Life, Environment and Society",
      intro: "The Cambridge IGCSE German syllabus is organised around core topics: home and family, school, work, leisure, travel, the environment, health, shopping, and social issues. Examiners test the ability to communicate about these themes in listening, reading, speaking, and writing tasks. Strong thematic vocabulary combined with accurate grammar structures is the key to achieving top marks.",
      subheadings: [
        {
          title: "Home, Family and Daily Routine",
          body: "Questions about home life appear in every section of the exam. You need vocabulary for rooms and furniture, family relationships, daily routines with reflexive verbs, and describing where you live.",
          groups: [
            {
              subTitle: "Key Vocabulary",
              bullets: [
                "**Rooms**: das Wohnzimmer (living room), das Schlafzimmer (bedroom), die Küche (kitchen), das Badezimmer (bathroom), der Keller (cellar/basement), der Dachboden (attic).",
                "**Daily routine reflexive verbs**: sich waschen (to wash oneself), sich anziehen (to get dressed), sich kämmen (to comb one's hair), sich beeilen (to hurry), sich entspannen (to relax).",
                "**Family**: der Vater/die Mutter, der Bruder/die Schwester, der Großvater/die Großmutter, der Onkel/die Tante, der Cousin/die Cousine (male/female cousin).",
                "**Describing home**: Das Haus hat drei Stockwerke. (The house has three floors.) Die Wohnung liegt im zweiten Stock. (The flat is on the second floor.) Es gibt einen Garten. (There is a garden.)"
              ]
            }
          ]
        },
        {
          title: "Environment and Global Issues",
          body: "Environmental topics are consistently tested at IGCSE level. You must be able to discuss problems such as climate change, pollution, and recycling, and propose solutions using modal verbs and conditional structures.",
          groups: [
            {
              subTitle: "Environment Vocabulary",
              bullets: [
                "**Problems**: die Luftverschmutzung (air pollution), der Treibhauseffekt (greenhouse effect), der Klimawandel (climate change), die Überschwemmung (flood), der Müll (rubbish/waste), das Abholzen (deforestation).",
                "**Solutions**: recyceln (to recycle), Energie sparen (to save energy), öffentliche Verkehrsmittel benutzen (to use public transport), erneuerbare Energien (renewable energies), die Solarenergie, die Windenergie.",
                "**Opinion phrases**: Ich bin der Meinung, dass... (I am of the opinion that...). Meiner Meinung nach... (In my opinion...). Es ist wichtig, dass wir... (It is important that we...). Man sollte... (One should...).",
                "**Conditional for suggestions**: Man könnte mehr Rad fahren. (One could cycle more.) Die Regierung müsste strengere Gesetze einführen. (The government would need to introduce stricter laws.)"
              ]
            }
          ]
        }
      ]
    }
  ]
};
