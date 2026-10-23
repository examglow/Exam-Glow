import type { SubjectNotes } from "./types";

export const ARABIC_SECOND_LANGUAGE: SubjectNotes = {
  id: "arabic-second-language",
  name: "Arabic (Second Language)",
  code: "0508",
  color: "bg-green-700",
  chapters: [
    {
      number: 1,
      title: "Reading Comprehension: Strategies and Question Types",
      intro: "The IGCSE Arabic Second Language reading paper presents a range of texts — informational, descriptive, and argumentative — drawn from newspapers, magazines, and online sources. Questions test global understanding, specific detail, inference, and vocabulary in context. A systematic approach to each question type maximises marks and prevents common errors such as copying irrelevant sections of text.",
      subheadings: [
        {
          title: "Approaching Reading Texts",
          body: "Effective reading strategy at IGCSE level involves reading for gist first, then returning to specific sections for detail. Arabic text structure differs from English — the main idea often appears within the first sentence of each paragraph, but evidence and elaboration follow. Understanding Modern Standard Arabic (MSA) register is essential, as texts use formal vocabulary distinct from spoken dialects.",
          groups: [
            {
              subTitle: "Reading Strategy",
              bullets: [
                "**Skim first**: Read the title, any headings, and the first sentence of each paragraph to establish the overall topic and structure before attempting questions.",
                "**Locate question keywords**: Identify the key noun or concept in each question, then scan the text for that exact word or a synonym.",
                "**Answer in the correct register**: Questions ask for answers in MSA; avoid dialect vocabulary. Verb forms should be in the correct tense as implied by the question.",
                "**Length matching**: For questions worth 1 mark, give one clear point. For 2 marks, give two distinct points — copying a long paragraph rarely earns full marks.",
                "**Inference questions**: The answer will not be stated word-for-word; draw a logical conclusion from what the text implies. Use phrases like يتضح من النص أن... (It is clear from the text that...)"
              ]
            },
            {
              subTitle: "Question Types and How to Answer Them",
              bullets: [
                "**Multiple choice (اختيار من متعدد)**: Eliminate distractors that are mentioned in the text but do not answer the specific question asked.",
                "**True/False/Not mentioned**: 'Not mentioned' means the text neither confirms nor denies the statement — do not confuse with 'false'.",
                "**Summary writing (تلخيص)**: Identify the main point of each paragraph; write one sentence per paragraph in your own words where possible; do not quote full sentences.",
                "**Vocabulary in context (معنى الكلمة)**: Use the surrounding sentence to infer meaning; consider word roots (جذور) — Arabic root-based morphology means a known root can unlock an unfamiliar word.",
                "**Gap-fill tasks**: Read the whole sentence before choosing; the word must be grammatically correct (right gender, case, verb agreement) as well as semantically appropriate."
              ]
            }
          ]
        },
        {
          title: "Writing: Formal and Informal Register",
          body: "The IGCSE Arabic Second Language writing paper requires producing texts of different types and registers: informal letters or emails to friends, formal letters to officials or companies, reports, and discursive essays. Each text type has distinct structural and linguistic conventions that examiners reward when correctly applied.",
          groups: [
            {
              subTitle: "Formal Letter Structure",
              bullets: [
                "**Opening salutation**: Use السيد/السيدة المحترم/ة (Dear respected Sir/Madam) for official correspondence.",
                "**Introduction sentence**: State clearly the purpose of writing in the first paragraph: أكتب إليكم بشأن... (I am writing to you regarding...)",
                "**Paragraphing**: Each paragraph should address one point only — problem, explanation, proposed solution, or request.",
                "**Closing formulae**: تفضلوا بقبول فائق الاحترام والتقدير (Please accept the highest respect and appreciation) — a conventional formal close.",
                "**Avoid colloquial vocabulary**: In all formal writing, use MSA verb forms and avoid dialect words."
              ]
            },
            {
              subTitle: "Discursive Essay Structure",
              bullets: [
                "**Introduction**: Define the topic and state your position or the two sides of the argument clearly.",
                "**Body paragraphs**: Present each argument with مثلاً/على سبيل المثال (for example) and supporting detail. Use connectives: علاوة على ذلك (moreover), من ناحية أخرى (on the other hand), بالإضافة إلى ذلك (in addition to that).",
                "**Counter-argument**: Acknowledge the opposing view with رغم أن... (although...) or على الرغم من... (in spite of...) before refuting it.",
                "**Conclusion**: Summarise the main points and restate your position using في الختام (in conclusion) or خلاصة القول (to sum up).",
                "**Accuracy mark**: Examiners award separate marks for grammar, spelling, and punctuation — proofreading for verb agreement and hamza/ta marbuta accuracy is essential."
              ]
            }
          ]
        },
        {
          title: "Grammar in Context: Verb Conjugation and Agreement",
          body: "Arabic grammar requires precise agreement between subject, verb, and object in gender and number. The IGCSE syllabus does not require mastery of every rare form, but the core patterns of present (المضارع), past (الماضي), and future tenses, along with noun-adjective agreement and dual/plural forms, are tested in both reading comprehension and writing.",
          groups: [
            {
              subTitle: "Verb Tenses",
              bullets: [
                "**Past tense (الماضي)**: Base form used for completed actions. Conjugated by adding suffixes to the root: كَتَبَ (he wrote), كَتَبَت (she wrote), كَتَبوا (they [m] wrote), كَتَبنَ (they [f] wrote).",
                "**Present/imperfect (المضارع)**: Prefixes and suffixes added to the root: يَكتُب (he writes/is writing), تَكتُب (she writes), نَكتُب (we write), يَكتُبون (they write).",
                "**Future (المستقبل)**: Formed by adding سَـ or سَوف before the present tense form: سيكتب (he will write), سوف نذهب (we will go).",
                "**Verb-subject agreement**: When the verb comes before the subject, it takes singular form even if the subject is plural — this is the standard VSO word order: ذهبَ الطلابُ (The students went — verb is singular masculine).",
                "**Dual form**: Used for exactly two — يذهبان (they two go), كتبا (they two wrote). IGCSE examiners expect recognition and basic production of dual forms."
              ]
            },
            {
              subTitle: "Noun-Adjective Agreement",
              bullets: [
                "**Gender agreement**: Adjective must match noun in gender — كتاب جميل (a beautiful book [m]), مدينة جميلة (a beautiful city [f]).",
                "**Definite article agreement**: Both noun and adjective take الـ in a definite noun phrase — الكتابُ الجميلُ (the beautiful book).",
                "**Broken plurals (جمع التكسير)**: Many Arabic nouns form their plural by changing the internal vowel pattern — not by adding a suffix. These must be memorised: كتاب → كتب, طالب → طلاب.",
                "**Non-human plurals take feminine singular adjective**: A key rule — الكتبُ الجديدةُ (the new books) — 'books' is plural but takes جديدة (feminine singular adjective)."
              ]
            }
          ]
        }
      ]
    }
  ]
};
