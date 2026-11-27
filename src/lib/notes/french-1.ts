import type { Chapter } from "./types";

/**
 * Cambridge IGCSE French (0520 / 7156 & First Language 0501) Syllabus Notes
 * Part 1: Chapters 1–4
 * - Chapter 1: Listening and Reading Comprehension Strategies (Papers 1 & 2 / 0520 & 0501)
 * - Chapter 2: Master Grammar: Verb Conjugations, Tenses and Moods
 * - Chapter 3: Syntax, Pronouns, Agreements and Negation
 * - Chapter 4: Spoken Communication and Oral Examination Skills (Paper 3 / 0520)
 */
export const FRENCH_PART1: Chapter[] = [
  {
    number: 1,
    title: "Listening and Reading Comprehension Strategies",
    section: "Section 1: Receptive Skills and Textual Analysis",
    topic: "Auditory Decoding, Reading Comprehension, False Friends, and First Language Summary Techniques",
    intro:
      "Listening and reading are the receptive cornerstones of Cambridge IGCSE French (Papers 1 and 2 in 0520/7156 and Paper 1 in First Language French 0501). Candidates must demonstrate the ability to extract specific details, distinguish main ideas from subsidiary information, infer implicit attitudes and emotions, analyze journalistic and literary registers, and summarize complex texts under strict word limits.",
    subheadings: [
      {
        title: "Listening Comprehension and Auditory Decoding",
        body:
          "**The Nature of Cambridge IGCSE French Paper 1 (Listening):**\n" +
          "Candidates listen to recorded native speakers across a variety of realistic scenarios: public announcements, phone messages, interviews, weather forecasts, and informal conversations.\n\n" +
          "**Three-Phase Listening Strategy:**\n" +
          "1. **Pre-Listening (The 5-Minute Reading Window):**\n" +
          "   - Read every question and underline target keywords (interrogative adverbs: *qui*, *quand*, *où*, *pourquoi*, *combien*, *comment*).\n" +
          "   - Predict likely answers, semantic fields, and part of speech required (noun, numeral, adjective, time, location).\n" +
          "   - Anticipate distractors and synonyms (e.g. if the question asks about *la pluie*, listen also for *le mauvais temps*, *les averses*, or *le ciel couvert*).\n" +
          "2. **First Hearing (Global Understanding and Tracking):**\n" +
          "   - Listen for gist and the overarching narrative flow.\n" +
          "   - Note provisional answers in pencil; do not panic if an unfamiliar word occurs—continue tracking the speaker.\n" +
          "3. **Second Hearing (Verification and Granular Detail):**\n" +
          "   - Confirm exact numbers, dates, times, and negative constructions.\n" +
          "   - Resolve ambiguities; ensure answers directly match the question asked rather than simply echoing words heard in the audio.\n\n" +
          "**Key Auditory Traps and Phonetic Distinctions:**\n" +
          "- **Phonetic Minimal Pairs:**\n" +
          "  - Distinguishing $/y/$ (as in *tu*, *vu*, *su*) from $/u/$ (as in *tout*, *vous*, *sous*).\n" +
          "  - Distinguishing nasal vowels: $/\\tilde{\\varepsilon}/$ (*vin*, *plein*), $/\\tilde{\\alpha}/$ (*vent*, *temps*, *blanc*), and $/\\tilde{\\jmath}/$ (*bon*, *pont*, *maison*).\n" +
          "- **Negative Constructions:** Speakers frequently use subtle negations that invert sentence meaning:\n" +
          "  - *ne... pas* (not), *ne... plus* (no longer / no more), *ne... jamais* (never).\n" +
          "  - *ne... rien* (nothing), *ne... personne* (nobody), *ne... aucun(e)* (none / no).\n" +
          "  - *ne... que* (**Restriction / Only** — e.g. *Il n'a que quinze ans* means 'He is only fifteen years old', NOT that he is not fifteen).\n" +
          "- **Numerical and Temporal Traps:**\n" +
          "  - Distinguishing 70–99 counting in standard French: *soixante-dix* (70), *quatre-vingts* (80), *quatre-vingt-dix* (90), *quatre-vingt-onze* (91).\n" +
          "  - Clock times: *midi et quart* (12:15 PM), *midi et demi* (12:30 PM), *une heure moins le quart* (12:45 PM), *minuit* (midnight).",
        examinerTips: [
          "In short-answer questions, write concise answers containing ONLY the targeted factual detail; writing long transcribed sentences increases the risk of grammatical errors or conflicting invalidating statements.",
          "Beware of 'distractor dialogues' where a speaker mentions a planned activity (e.g. 'J'avais l'intention d'aller au cinéma'), rejects it ('mais il n'y avait plus de places'), and settles on the actual activity ('alors j'ai visité le musée'). The correct answer is the final chosen activity."
        ],
        commonMistakes: [
          "Mistaking 'ne... que' for a negative meaning 'never' or 'not', when it strictly functions as a restrictive marker meaning 'only'.",
          "Leaving multiple-choice bubbles blank; there is no negative marking, so an educated guess based on elimination must always be recorded."
        ],
        recap: [
          "Use the pre-listening window to underline interrogatives (qui, quand, où, etc.) and predict vocabulary.",
          "Beware of phonetic minimal pairs (/y/ vs /u/, nasals) and numerical patterns (soixante-dix, quatre-vingt-dix).",
          "Watch out for speaker pivots and distractors where an initial idea is rejected in favor of a final decision.",
          "Remember that 'ne... que' means 'only'."
        ]
      },
      {
        title: "Reading Comprehension and Textual Analysis",
        body:
          "**Structure of Cambridge IGCSE Reading Papers:**\n" +
          "Texts range from everyday public notices, brochures, blogs, and letters to extended journalistic articles and literary excerpts.\n\n" +
          "**Skimming and Scanning Techniques:**\n" +
          "- **Skimming (Lecture rapide globale):** Read title, subheadings, first and last sentences of paragraphs to capture overall theme, authorial stance, and register.\n" +
          "- **Scanning (Recherche ciblée d'informations):** Search text specifically for proper nouns, dates, statistics, quotes, and specific adjectives corresponding to question stems.\n\n" +
          "**False Friends (Faux Amis) — The Top 15 Examination Hazards:**\n" +
          "English speakers frequently make incorrect inferences based on orthographic similarity with English words:\n" +
          "1. **Actuellement:** Means *currently / at present* (NOT *actually* / en fait).\n" +
          "2. **Assister à:** Means *to attend / be present at* (NOT *to assist* / aider).\n" +
          "3. **Attendre:** Means *to wait for* (NOT *to attend* / assister à).\n" +
          "4. **Blessé:** Means *injured / wounded* (NOT *blessed* / béni).\n" +
          "5. **Demander:** Means *to ask* (NOT *to demand* / exiger).\n" +
          "6. **Éventuellement:** Means *possibly / if necessary* (NOT *eventually* / finalement, à la fin).\n" +
          "7. **Formidable:** Means *wonderful / tremendous* (NOT *formidable / frightening* / redoutable).\n" +
          "8. **Journée:** Means *day / daytime duration* (NOT *journey* / voyage, trajet).\n" +
          "9. **Librairie:** Means *bookshop* (NOT *library* / bibliothèque).\n" +
          "10. **Monnaie:** Means *loose change / currency* (NOT *money in general* / argent).\n" +
          "11. **Opportunité:** Traditionally means *suitability / appropriateness*; *occasion* means *opportunity*.\n" +
          "12. **Passer un examen:** Means *to sit / take an examination* (NOT *to pass* / réussir un examen).\n" +
          "13. **Rester:** Means *to stay / remain* (NOT *to rest* / se reposer).\n" +
          "14. **Sensible:** Means *sensitive* (NOT *sensible* / raisonnable, sensé).\n" +
          "15. **Sympathique (sympa):** Means *friendly / pleasant* (NOT *sympathetic* / compatissant).\n\n" +
          "**Analyzing Authorial Tone and Subtext:**\n" +
          "- **Irony and Nuance:** Modals such as *prétendre* (to claim without proof), *sembler* / *paraître* (to seem), and adverbs like *soi-disant* (supposedly) signal skepticism.\n" +
          "- **Concessive and Adversative Linkers:**\n" +
          "  - *Cependant*, *néanmoins*, *toutefois* (however / nevertheless).\n" +
          "  - *En revanche*, *par contre* (on the other hand / in contrast).\n" +
          "  - *Certes... mais* (Admittedly... but).",
        examinerTips: [
          "Never quote entire chunks of text when the question asks you to answer in your own words (dans vos propres mots); paraphrase by substituting synonyms or altering grammatical structures (e.g. change a verb into a noun: 'il voyageait beaucoup' -> 'ses nombreux voyages').",
          "Ensure that subject pronouns in your answers match the question; if the question asks 'Pourquoi Sophie est-elle triste ?', begin your answer with 'Elle...' or an infinitive/noun phrase, never 'Je'."
        ],
        commonMistakes: [
          "Translating 'passer un examen' as 'passing an exam' when it strictly means 'taking/sitting an exam'.",
          "Confusing 'sensible' (sensitive) with 'raisonnable' (sensible)."
        ],
        recap: [
          "Skim for global gist and scan for precise nouns, figures, and dates.",
          "Master key false friends: actuellement (currently), assister à (attend), blessé (injured), librairie (bookshop), passer un examen (to sit an exam), sensible (sensitive).",
          "Paraphrase accurately when answering in your own words using nominalization and synonyms."
        ]
      },
      {
        title: "Advanced First Language (0501) Textual Synthesis and Summary Writing",
        body:
          "**Cambridge IGCSE First Language French (0501) Requirements:**\n" +
          "Candidates taking 0501 are native or near-native speakers tested on literary comprehension, rhetorical analysis, directed writing, and rigorous summary synthesis (*résumé de texte*).\n\n" +
          "**Methodology for the Résumé de Texte (Summary Writing):**\n" +
          "1. **Deconstruct the Rubric:** Highlight the exact 2 or 3 thematic axes demanded by the prompt (e.g. 'Résumez les causes du déclin de la biodiversité et les solutions proposées par les auteurs').\n" +
          "2. **Grid Extraction (Prise de notes ciblée):**\n" +
          "   - Read both stimulus texts and extract only points relevant to the prompt (target: 10–15 distinct content points).\n" +
          "   - Discard all ornamental rhetorical flourishes, metaphors, historical anecdotes, quotes, and specific numerical illustrations.\n" +
          "3. **Synthesis and Logical Re-grouping:**\n" +
          "   - Do not summarize Text A and then Text B sequentially; merge overlapping ideas into cohesive conceptual categories.\n" +
          "   - Group complementary arguments under thematic paragraphs using precise logical connectors (*Premièrement*, *En outre*, *Parallèlement*, *Sur le plan écologique*).\n" +
          "4. **Strict Word Count Management (Target: 200–250 words):**\n" +
          "   - Examiners stop reading beyond the upper word count limit; content points located after the limit receive zero credit.\n" +
          "   - Condense phrasing via **Nominalization (La nominalisation):** Transform entire subordinate clauses into concise noun phrases:\n" +
          "     - *Parce que les forêts sont détruites à un rythme alarmant* $\\rightarrow$ *La déforestation massive*.\n" +
          "     - *Pour que les citoyens consomment moins d'énergie fossile* $\\rightarrow$ *La réduction de la consommation fossile*.\n" +
          "5. **Total Prohibition of Direct Lifting (L'emprunt de phrases):**\n" +
          "   - Copying full phrases verbatim from the source texts incurs severe penalties in the Style/Language mark.\n" +
          "   - Paraphrase by varying syntax, using antonyms with negation (*ne cesse de croître* $\\rightarrow$ *augmente continuellement*), and employing precise academic synonyms.",
        examinerTips: [
          "For 0501 summary tasks, adopt an impersonal, objective, academic tone: never write in the first person ('Je pense que...') and never offer personal opinions or extra outside knowledge not present in the texts.",
          "Count your words accurately before finishing; aim exactly within the recommended window to maximize content marks without losing language points."
        ],
        commonMistakes: [
          "Including personal opinions, introductions, or rhetorical conclusions in a summary.",
          "Copying verbatim sentence segments from the source texts instead of synthesizing in your own words."
        ],
        recap: [
          "0501 summary demands strict adherence to the prompt's thematic axes, extracting 10–15 factual points.",
          "Synthesize points across both texts instead of summarizing them separately.",
          "Use nominalization to condense clauses into concise noun phrases.",
          "Never copy verbatim; maintain an impersonal, objective tone within word limits."
        ]
      }
    ]
  },
  {
    number: 2,
    title: "Master Grammar: Verb Conjugations, Tenses and Moods",
    section: "Section 2: Grammatical Accuracy and Verb Mechanics",
    topic: "Indicative Tenses, Passé Composé vs Imparfait, Conditionnel, Subjonctif, and Voice",
    intro:
      "Grammatical accuracy is the foundation of high marks in both foreign language (0520/7156) and first language (0501) French examinations. A candidate who displays command over regular and irregular verb conjugations, complex tense alternation (imparfait vs passé composé), the conditional mood, and the subjunctive mood immediately accesses the highest mark bands.",
    subheadings: [
      {
        title: "Indicative Tenses: Present, Imperfect, Passé Composé and Future",
        body:
          "**1. Le Présent de l'Indicatif:**\n" +
          "- **Regular Endings:**\n" +
          "  - *-ER* verbs (e.g. *parler*): *-e, -es, -e, -ons, -ez, -ent*.\n" +
          "  - *-IR* verbs (e.g. *finir*): *-is, -is, -it, -issons, -issez, -issent*.\n" +
          "  - *-RE* verbs (e.g. *vendre*): *-s, -s, -(nothing), -ons, -ez, -ent*.\n" +
          "- **Essential Irregular Auxiliaries & Models:**\n" +
          "  - *Être:* suis, es, est, sommes, êtes, sont.\n" +
          "  - *Avoir:* ai, as, a, avons, avez, ont.\n" +
          "  - *Faire:* fais, fais, fait, faisons, faites, font.\n" +
          "  - *Aller:* vais, vas, va, allons, allez, vont.\n" +
          "  - *Pouvoir:* peux, peux, peut, pouvons, pouvez, peuvent.\n" +
          "  - *Vouloir:* veux, veux, veut, voulons, voulez, veulent.\n" +
          "  - *Devoir:* dois, dois, doit, devons, devez, doivent.\n\n" +
          "**2. Le Passé Composé vs L'Imparfait (The Core Narrative Dynamic):**\n" +
          "- **Le Passé Composé (Specific, Completed, Sequential Actions):**\n" +
          "  - Structure: Auxiliary (*Avoir* or *Être* in present) + Participe Passé.\n" +
          "  - Verbs conjugated with *Être*:\n" +
          "    1. The 14/16 movement/state verbs (DR & MRS VANDERTRAMP: *Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Rentrer, Tomber, Retourner, Arriver, Mourir, Partir*).\n" +
          "    2. All pronominal / reflexive verbs (*se lever, se souvenir, se dépêcher*).\n" +
          "  - **Agreement Rule with Être:** Past participle must agree in gender (add *-e*) and number (add *-s*) with the subject (e.g. *Elle est partie*, *Ils se sont lavés*).\n" +
          "  - **Agreement Rule with Avoir:** Past participle remains invariable EXCEPT when a **Direct Object (COD)** precedes the verb (e.g. *J'ai vu la fille* $\\rightarrow$ *La fille que j'ai vu**e***; *Ces pommes ? Je les ai mangé**es***).\n" +
          "- **L'Imparfait (Continuous, Habitual, Descriptive Past):**\n" +
          "  - Formation: Take the *nous* form of the present tense, drop *-ons*, and add:\n" +
          "    - *-ais, -ais, -ait, -ions, -iez, -aient*.\n" +
          "    - Irregular stem: *Être* $\\rightarrow$ *ét-* (*j'étais*).\n" +
          "  - Functions: Habitual repeated actions ('used to' / *Quand j'étais petit, je jouais*), background descriptions (weather, emotions, scenery: *Il faisait froid et le vent soufflait*), ongoing continuous actions interrupted by a sudden event in passé composé (*Je dormais quand le téléphone a sonné*).\n\n" +
          "**3. Future Forms:**\n" +
          "- **Le Futur Proche (Immediate Future):** *Aller* (present) + Infinitive (e.g. *Je vais étudier* — conversational, immediate intention).\n" +
          "- **Le Futur Simple (Formal / Long-term Future):**\n" +
          "  - Formation: Full infinitive (drop *-e* for *-re* verbs) + endings:\n" +
          "    - *-ai, -as, -a, -ons, -ez, -ont*.\n" +
          "  - Irregular Stems: *être* $\\rightarrow$ *ser-*, *avoir* $\\rightarrow$ *aur-*, *faire* $\\rightarrow$ *fer-*, *aller* $\\rightarrow$ *ir-*, *pouvoir* $\\rightarrow$ *pourr-*, *voir* $\\rightarrow$ *verr-*, *venir* $\\rightarrow$ *viendr-*.",
        examinerTips: [
          "When narrating a past event in essays, blend the passé composé and imparfait: set the scene in the imparfait ('Le soleil brillait et la mer était calme') before introducing plot actions in the passé composé ('Soudain, nous avons aperçu un dauphin').",
          "Never forget the preceding direct object agreement rule with avoir: whenever 'que' or a pronoun like 'les' or 'la' appears before avoir, check the past participle ending!"
        ],
        commonMistakes: [
          "Using 'avoir' instead of 'être' for reflexive verbs (e.g. writing 'j'ai me réveillé' instead of 'je me suis réveillé').",
          "Confusing the future simple endings (-ai, -as, -a) with the conditional endings (-ais, -ais, -ait)."
        ],
        recap: [
          "Passé composé expresses completed, bounded events; imparfait expresses ongoing habits, descriptions, and background.",
          "Verbs with être agree in gender and number with the subject.",
          "Verbs with avoir agree only with a preceding direct object (COD).",
          "Futur simple uses infinitive stem + -ai, -as, -a, -ons, -ez, -ont."
        ]
      },
      {
        title: "Conditional and Subjunctive Moods",
        body:
          "**1. Le Conditionnel (Présent et Passé):**\n" +
          "- **Le Conditionnel Présent:**\n" +
          "  - Formation: Futur simple stem + Imparfait endings (*-ais, -ais, -ait, -ions, -iez, -aient*).\n" +
          "  - *Examples:* *Je voudrais* (polite request), *Il aimerait voyager* (wishes), *Si j'avais de l'argent, j'achèterais une maison* (hypothetical).\n" +
          "- **Le Conditionnel Passé:**\n" +
          "  - Formation: Conditional present of auxiliary (*avoir* or *être*) + past participle (*j'aurais fait*, *elle serait venue*).\n" +
          "  - Expresses past regrets or unfulfilled past conditions: *J'aurais dû réviser davantage* (I should have revised more).\n\n" +
          "**The Master 'Si' Clause Formulas (Hypothèses):**\n" +
          "1. **Potential / Real Condition:** $\\text{Si} + \\text{Présent} \\rightarrow \\text{Futur Simple / Présent / Impératif}$\n" +
          "   - *Si j'ai le temps demain, je t'aiderai.*\n" +
          "2. **Hypothetical / Unreal Present:** $\\text{Si} + \\text{Imparfait} \\rightarrow \\text{Conditionnel Présent}$\n" +
          "   - *Si j'étais riche, je ferais le tour du monde.*\n" +
          "3. **Unfulfilled Past Condition:** $\\text{Si} + \\text{Plus-que-parfait} \\rightarrow \\text{Conditionnel Passé}$\n" +
          "   - *Si tu m'avais prévenu, je serais venu à la fête.*\n\n" +
          "**2. Le Subjonctif Présent:**\n" +
          "- The subjunctive is a grammatical mood used to express subjectivity, necessity, obligation, emotion, desire, doubt, and uncertainty. It is introduced by *que*.\n" +
          "- **Regular Formation:**\n" +
          "  - Take the 3rd person plural (*ils/elles*) of the present indicative, drop *-ent*, and add:\n" +
          "    - *-e, -es, -e, -ions, -iez, -ent*.\n" +
          "  - *Example (Finir):* ils finiss-ent $\\rightarrow$ *que je finisse, que tu finisses, qu'il finisse, que nous finissions, que vous finissiez, qu'ils finissent*.\n" +
          "- **Essential Irregular Subjunctive Stems:**\n" +
          "  - *Être:* sois, sois, soit, soyons, soyez, soient.\n" +
          "  - *Avoir:* aie, aies, ait, ayons, ayez, aient.\n" +
          "  - *Faire:* fass- (*que je fasse*).\n" +
          "  - *Aller:* aill- / all- (*que j'aille, que nous allions*).\n" +
          "  - *Pouvoir:* puiss- (*que je puisse*).\n" +
          "  - *Savoir:* sach- (*que je sache*).\n" +
          "  - *Vouloir:* veuill- / voul- (*que je veuille, que nous voulions*).\n\n" +
          "**High-Scoring Subjunctive Triggers for IGCSE Essays:**\n" +
          "- **Obligation / Necessity:** *Il faut que* (e.g. *Il faut que nous protégions l'environnement*), *Il est nécessaire que*.\n" +
          "- **Emotion & Reaction:** *Je suis content que*, *Il est surprenant que*, *J'ai peur que*.\n" +
          "- **Doubt & Uncertainty:** *Je doute que* (e.g. *Je doute que ce soit vrai*), *Il est peu probable que*.\n" +
          "- **Conjunctions requiring Subjunctive:**\n" +
          "  - *Bien que* / *Quoique* (Although — e.g. *Bien que ce soit difficile, je réussirai*).\n" +
          "  - *Pour que* / *Afin que* (In order that — e.g. *Pour que tout le monde puisse participer*).\n" +
          "  - *Avant que* (Before — e.g. *Avant qu'il ne soit trop tard*).\n" +
          "  - *À condition que* (Provided that).",
        examinerTips: [
          "Embedding 2 or 3 well-formed subjunctive structures into your writing (e.g. 'Bien que ce soit difficile...' and 'Il faut que le gouvernement prenne des mesures...') automatically signals top-band linguistic competence to examiners.",
          "Remember that 'espérer que' takes the INDICATIVE future (e.g. 'J'espère qu'il fera beau'), whereas 'vouloir que' or 'souhaiter que' takes the SUBJUNCTIVE ('Je veux qu'il fasse beau')."
        ],
        commonMistakes: [
          "Putting a future or conditional tense directly after 'si' in an if-clause (e.g. writing 'si j'aurais' or 'si je serai'; 'si' NEVER takes the conditional!).",
          "Using the subjunctive after 'penser que' or 'croire que' in affirmative sentences; only their negative or interrogative forms trigger the subjunctive."
        ],
        recap: [
          "Conditionnel uses future stem + imparfait endings for politeness and hypothetical conditions.",
          "Master the 3 Si formulas: Si + présent -> futur; Si + imparfait -> conditionnel présent; Si + plus-que-parfait -> conditionnel passé.",
          "Subjunctive follows triggers of necessity (il faut que), emotion, doubt, and conjunctions (bien que, pour que, avant que).",
          "Never put the conditional directly after 'si'."
        ]
      },
      {
        title: "Complex Sentence Structures, Passive Voice and Participles",
        body:
          "**1. La Voix Passive (The Passive Voice):**\n" +
          "- **Structure:** Subject + *Être* (conjugated in any tense) + Past Participle + *par* (or *de*) + Agent.\n" +
          "- *Example:* *Le rapport a été rédigé par le ministre* (The report was written by the minister).\n" +
          "- **Participle Agreement:** The past participle in passive constructions ALWAYS agrees with the subject in gender and number (*Les décisions ont été pris**es***).\n" +
          "- **Stylistic Alternative with 'On':** In natural French discourse, the passive is frequently avoided by using the active pronoun **'on'**:\n" +
          "  - Passive: *L'anglais est parlé partout.* $\\rightarrow$ Active with 'on': *On parle anglais partout.*\n\n" +
          "**2. Le Participe Présent and Le Gérondif:**\n" +
          "- **Formation:** Take the *nous* form of the present indicative, drop *-ons*, and add **-ant** (*parl-ant*, *finiss-ant*, *fais-ant*).\n" +
          "  - Irregular stems: *être* $\\rightarrow$ *étant*, *avoir* $\\rightarrow$ *ayant*, *savoir* $\\rightarrow$ *sachant*.\n" +
          "- **Le Gérondif (Preceded by 'en'):**\n" +
          "  - Expresses simultaneous actions: *Il étudie tout en écoutant de la musique* (He studies while listening to music).\n" +
          "  - Expresses cause or manner: *En travaillant régulièrement, on réussit ses examens* (By working regularly, one passes one's exams).\n\n" +
          "**3. Le Discours Rapporté (Reported Speech) and Concordance des Temps:**\n" +
          "- When the reporting verb is in the past (*Il a dit que...*), subordinate verb tenses shift:\n" +
          "  - Présent $\\rightarrow$ **Imparfait** (*'Je suis fatigué' $\\rightarrow$ Il a dit qu'il était fatigué*).\n" +
          "  - Passé Composé $\\rightarrow$ **Plus-que-parfait** (*'J'ai fini' $\\rightarrow$ Il a dit qu'il avait fini*).\n" +
          "  - Futur Simple $\\rightarrow$ **Conditionnel Présent** (*'Je viendrai' $\\rightarrow$ Il a dit qu'il viendrait*).\n" +
          "- Temporal markers shift accordingly:\n" +
          "  - *Aujourd'hui* $\\rightarrow$ *ce jour-là*\n" +
          "  - *Demain* $\\rightarrow$ *le lendemain*\n" +
          "  - *Hier* $\\rightarrow$ *la veille*.",
        examinerTips: [
          "Use the gérondif with 'en' to link causes and actions elegantly without overusing 'parce que' (e.g. 'En réduisant nos déchets, nous protégeons la planète').",
          "Ensure past tense sequence in reported speech: shifted tenses reflect the temporal perspective of the reporting speaker."
        ],
        commonMistakes: [
          "Failing to make past participles agree with the subject in passive constructions.",
          "Confusing the present participle used as an adjective (which agrees) with the invariable verbal participle or gérondif."
        ],
        recap: [
          "Passive voice uses être + past participle (agreed with subject) + par; often replaced by 'on'.",
          "Gérondif uses 'en' + verb stem + -ant to express simultaneous action, cause, or manner.",
          "Reported speech shifts present to imperfect, passé composé to plus-que-parfait, and future to conditional."
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Syntax, Pronouns, Agreements and Negation",
    section: "Section 3: Structural Accuracy and Syntax",
    topic: "Direct and Indirect Pronouns, Adverbials Y and En, Adjective Placement, and Complex Negation",
    intro:
      "Precision in sentence construction distinguishes good language learners from outstanding candidates. Mastery of French object pronouns (COD and COI), adverbial pronouns ('y' and 'en'), adjective positioning (BANGS rules), relative clauses, and multi-element negative structures allows students to produce sophisticated, authentic prose without repetitive noun phrases.",
    subheadings: [
      {
        title: "Pronouns: Direct, Indirect, Disjunctive, and Adverbials (Y and En)",
        body:
          "**1. Direct Object Pronouns (Pronoms Compléments d'Objet Direct - COD):**\n" +
          "- Replace nouns directly affected by the verb without a preposition (answer *qui ?* or *quoi ?*).\n" +
          "- Forms: *me, te, le / la / l', nous, vous, les*.\n" +
          "- *Example:* *Je regarde le film* $\\rightarrow$ *Je le regarde*.\n" +
          "- *Past Participle Agreement Rule:* When COD precedes a compound tense with *avoir*, the participle agrees with the COD (*Ces lettres ? Je les ai écrites*).\n\n" +
          "**2. Indirect Object Pronouns (Pronoms Compléments d'Objet Indirect - COI):**\n" +
          "- Replace persons preceded by the preposition **à** (answer *à qui ?*).\n" +
          "- Forms: *me, te, lui (to him/her), nous, vous, leur (to them)*.\n" +
          "- *Example:* *J'écris à mon ami* $\\rightarrow$ *Je lui écris*; *Je parle à mes parents* $\\rightarrow$ *Je leur parle*.\n" +
          "- *Note:* COI pronouns NEVER trigger past participle agreement (*Je leur ai parlé* — no agreement).\n\n" +
          "**3. Adverbial Pronouns 'Y' and 'En':**\n" +
          "- **The Pronoun 'Y':**\n" +
          "  - Replaces a place or location introduced by any preposition except *de* (*à, dans, chez, sur, sous*): *Tu vas à Paris ? Oui, j'y vais.* / *Il est dans sa chambre ? Oui, il y est.*\n" +
          "  - Replaces non-human things preceded by **à**: *Je pense à mon avenir* $\\rightarrow$ *J'y pense*.\n" +
          "- **The Pronoun 'En':**\n" +
          "  - Replaces quantities or indefinite articles (*un, une, des, du, de la, de l'*): *Tu veux du gâteau ? Oui, j'en veux.*\n" +
          "  - Replaces phrases introduced by **de**: *Tu viens de la gare ? Oui, j'en viens.* / *Tu as peur des chiens ? Oui, j'en ai peur.*\n" +
          "  - Retains specific numbers/quantities at the end: *Tu as des frères ? Oui, j'en ai deux.*\n\n" +
          "**4. Pronoun Placement and Order:**\n" +
          "- **Before the Verb:** In all normal statements, pronouns precede the conjugated verb (or auxiliary in compound tenses):\n" +
          "  - $\\text{Order: } [me, te, se, nous, vous] \\prec [le, la, l', les] \\prec [lui, leur] \\prec [y] \\prec [en] \\prec \\text{VERBE}$\n" +
          "  - *Example:* *Il me le donne.* / *Je lui en ai parlé.* / *Elle nous y a emmenés.*\n" +
          "- **With Two Verbs (Conjugated + Infinitive):** The pronoun sits directly **before the infinitive**:\n" +
          "  - *Je veux le voir.* / *Je vais y aller.*",
        examinerTips: [
          "In writing tasks, replacing repeated nouns with 'y' or 'en' elevates your syntax score (e.g. instead of repeating 'je vais souvent au club de sport', write 'j'y vais trois fois par semaine').",
          "Remember that 'leur' as an indirect object pronoun is INVARIABLE (it never takes an -s: 'je leur parle', NOT 'je leurs parle')."
        ],
        commonMistakes: [
          "Adding an 's' to 'leur' when used as an indirect object pronoun; 'leurs' is only used as a possessive determiner before plural nouns (e.g. 'leurs livres').",
          "Placing the pronoun before the conjugated verb when an infinitive follows (writing 'je le peux voir' instead of 'je peux le voir')."
        ],
        recap: [
          "COD (me, te, le, la, nous, vous, les) replaces direct objects; triggers agreement with preceding avoir.",
          "COI (me, te, lui, nous, vous, leur) replaces à + person; does not trigger agreement.",
          "Pronoun 'y' replaces locations and à + things; pronoun 'en' replaces quantities and de + nouns.",
          "Pronouns go directly before the verb, or before the infinitive if present."
        ]
      },
      {
        title: "Noun, Adjective and Determiner Agreements",
        body:
          "**1. Gender and Plural Agreements of Adjectives:**\n" +
          "- **General Rule:** Add **-e** for feminine, **-s** for plural, **-es** for feminine plural.\n" +
          "- **Spelling Changes in Feminine Forms:**\n" +
          "  - *-eux $\\rightarrow$ -euse* (*heureux $\\rightarrow$ heureuse*)\n" +
          "  - *-er $\\rightarrow$ -ère* (*cher $\\rightarrow$ chère*)\n" +
          "  - *-if $\\rightarrow$ -ive* (*actif $\\rightarrow$ active*)\n" +
          "  - Double consonant: *-el $\\rightarrow$ -elle* (*naturel $\\rightarrow$ naturelle*), *-on $\\rightarrow$ -onne* (*bon $\\rightarrow$ bonne*), *-en $\\rightarrow$ -enne* (*ancien $\\rightarrow$ ancienne*).\n" +
          "- **Irregular Adjectives (Beau, Nouveau, Vieux):**\n" +
          "  - Masculine before consonant: *un beau livre, un nouveau vélo, un vieux château*.\n" +
          "  - Masculine before vowel/mute 'h': *un bel homme, un nouvel appartement, un vieil ami*.\n" +
          "  - Feminine: *une belle maison, une nouvelle voiture, une vieille ville*.\n\n" +
          "**2. Adjective Placement Rules (BANGS):**\n" +
          "- **Normal Rule:** In French, the vast majority of descriptive adjectives are placed **AFTER the noun** (colours, nationalities, shapes, religion, factual descriptions: *un film passionnant, une table ronde, une voiture bleue*).\n" +
          "- **The BANGS Exception:** A short group of common adjectives precedes the noun:\n" +
          "  - **B (Beauty):** *beau, joli*\n" +
          "  - **A (Age):** *jeune, vieux, nouveau*\n" +
          "  - **N (Number):** *premier, deuxième, un, deux*\n" +
          "  - **G (Goodness):** *bon, mauvais, meilleur*\n" +
          "  - **S (Size):** *grand, petit, gros, long, court*\n\n" +
          "**3. Comparatives and Superlatives:**\n" +
          "- **Comparatives:** *plus... que* (more... than), *moins... que* (less... than), *aussi... que* (as... as).\n" +
          "- **Superlatives:** *le/la/les plus + adj* (the most), *le/la/les moins + adj* (the least).\n" +
          "- **Irregular Comparison:**\n" +
          "  - Adjective *bon* $\\rightarrow$ comparative *meilleur* (better) $\\rightarrow$ superlative *le meilleur* (the best).\n" +
          "  - Adverb *bien* $\\rightarrow$ comparative *mieux* (better) $\\rightarrow$ superlative *le mieux* (the best).",
        examinerTips: [
          "Double-check adjective agreements across your whole essay during the final 5 minutes: check gender and plural for every adjective used.",
          "Distinguish clearly between 'meilleur' (better, modifying a noun: 'cette pizza est meilleure') and 'mieux' (better, modifying a verb: 'il chante mieux')."
        ],
        commonMistakes: [
          "Writing 'plus bon' instead of 'meilleur' or 'plus bien' instead of 'mieux'.",
          "Placing colour adjectives before the noun (writing 'une bleue robe' instead of 'une robe bleue')."
        ],
        recap: [
          "Adjectives agree in gender and number with the noun they modify.",
          "Most descriptive adjectives follow the noun; BANGS adjectives (Beauty, Age, Number, Goodness, Size) precede.",
          "Use 'bel', 'nouvel', 'vieil' before masculine singular nouns starting with a vowel or mute h.",
          "Comparative of bon is meilleur; comparative of bien is mieux."
        ]
      },
      {
        title: "Negation and Complex Logical Connectors",
        body:
          "**1. Negative Structures in French:**\n" +
          "Negative expressions surround the conjugated verb in simple tenses (*ne + VERB + negative word*) and the auxiliary in compound tenses (*ne + AUX + negative word + past participle*):\n" +
          "- *ne... pas* (not): *Je ne mange pas de viande*.\n" +
          "- *ne... plus* (no longer / no more): *Je ne fume plus*.\n" +
          "- *ne... jamais* (never): *Il n'est jamais allé en France*.\n" +
          "- *ne... rien* (nothing): *Je n'ai rien vu* (note: *rien* sits before the past participle).\n" +
          "- *ne... personne* (nobody): *Je n'ai vu personne* (note: *personne* sits **after** the past participle).\n" +
          "- *ne... aucun(e)* (no / not any + noun): *Elle n'a aucune idée*.\n" +
          "- *ne... que* (only / restriction): *Il n'a acheté que deux livres*.\n" +
          "- *ne... ni... ni* (neither... nor): *Je n'aime ni le café ni le thé*.\n" +
          "- **Indefinite Article Rule with Negatives:** Articles *un, une, des, du, de la, de l'* become simply **de / d'** after a negative verb (*J'ai des stylos $\\rightarrow$ Je n'ai pas **de** stylos*), except after the verb *être* (*Ce n'est pas un problème*).\n\n" +
          "**2. Essential Discourse Markers and Connectors:**\n" +
          "- **Cause / Origin:** *car*, *parce que*, *puisque* (since), *en raison de + noun* (due to), *grâce à + noun* (thanks to — positive outcome), *à cause de + noun* (because of — negative outcome).\n" +
          "- **Consequence / Result:** *donc* (therefore), *par conséquent* (consequently), *c'est pourquoi* (that is why), *ainsi* (thus).\n" +
          "- **Opposition & Contrast:** *cependant* (however), *pourtant* (yet), *néanmoins* (nevertheless), *en revanche* (on the other hand), *alors que* / *tandis que* (whereas / while).\n" +
          "- **Addition & Progression:** *de plus* (furthermore), *en outre* (moreover), *non seulement... mais aussi* (not only... but also).\n" +
          "- **Conclusion / Summary:** *en conclusion*, *pour conclure*, *en fin de compte* (ultimately), *tout bien considéré* (all things considered).",
        examinerTips: [
          "Use 'grâce à' exclusively for positive causes ('Grâce à mes efforts, j'ai réussi') and 'à cause de' exclusively for negative causes ('À cause de la pluie, le match a été annulé').",
          "Elevate your essays by replacing simple words like 'mais' and 'et' with sophisticated connectors like 'néanmoins', 'en revanche', and 'de surcroît'."
        ],
        commonMistakes: [
          "Placing 'personne' between the auxiliary and past participle in compound tenses (writing 'je n'ai personne vu' instead of 'je n'ai vu personne').",
          "Forgetting that indefinite and partitive articles change to 'de' in negative sentences (writing 'je n'ai pas des amis' instead of 'je n'ai pas d'amis')."
        ],
        recap: [
          "Negative structures surround the verb: ne...plus, ne...jamais, ne...rien, ne...personne, ne...que.",
          "Articles un, une, des, du become 'de' after negatives (except with être).",
          "Distinguish positive cause (grâce à) from negative cause (à cause de).",
          "Use sophisticated discourse markers (néanmoins, par conséquent, en revanche) to build coherent arguments."
        ]
      }
    ]
  },
  {
    number: 4,
    title: "Spoken Communication and Oral Examination Skills",
    section: "Section 4: Speaking Proficiency and Pronunciation",
    topic: "Role-Play Strategies, Topic Discussion, Spontaneous Conversation, and French Phonetics",
    intro:
      "The Cambridge IGCSE French Speaking examination (Paper 3 in 0520/7156) assesses a candidate's communicative competence, phonetic clarity, grammatical range, and spontaneous interaction across transactional role-plays and open topic conversations. Candidates must demonstrate conversational confidence without reliance on memorized scripts.",
    subheadings: [
      {
        title: "Role-Play Mastery and Situational Interactions",
        body:
          "**Structure of the Role-Play (approx. 2–3 minutes):**\n" +
          "Candidates receive a role-play card detailing a specific transactional scenario in a Francophone context (e.g. at a hotel reception, train station ticket counter, doctor's office, restaurant, clothing shop, or lost-property desk).\n\n" +
          "**Key Interaction Strategies:**\n" +
          "1. **Formulating Precise Questions:**\n" +
          "   - Questions with inversion (formal): *Pourriez-vous m'indiquer l'horaire du prochain train ?*\n" +
          "   - Questions with *Est-ce que*: *Est-ce qu'il y a une réduction pour les étudiants ?*\n" +
          "   - Question words: *À quelle heure... ?*, *Combien coûte... ?*, *Où se trouve... ?*\n" +
          "2. **Expressing Polite Requests and Preferences:**\n" +
          "   - Use the conditional of politeness: *Je voudrais réserver une chambre simple avec vue sur mer* (never use blunt *je veux*).\n" +
          "   - State preferences: *Je préférerais une table en terrasse s'il vous plaît*.\n" +
          "3. **Responding to Unexpected Prompts or Queries:**\n" +
          "   - If the examiner introduces an unscripted complication (e.g. 'Nous n'avons plus de chambres simples'), adapt calmly: *Dans ce cas, avez-vous une chambre double disponible ? Quel est le tarif ?*\n" +
          "   - If you do not hear or understand, ask politely for clarification:\n" +
          "     - *Pourriez-vous répéter s'il vous plaît ?*\n" +
          "     - *Pardon, je n'ai pas bien compris.*",
        examinerTips: [
          "Always use the formal 'vous' when addressing the examiner during the role-play; never address the examiner as 'tu'.",
          "Listen carefully to the examiner's greeting before launching into your first point: respond naturally with 'Bonjour Madame/Monsieur' to set a professional conversational tone."
        ],
        commonMistakes: [
          "Using the present indicative 'je veux' instead of the polite conditional 'je voudrais'.",
          "Freezing when an examiner asks an unexpected question instead of using a standard clarification phrase."
        ],
        recap: [
          "Role-plays test real-life transactional fluency: hotel, station, restaurant, shops.",
          "Use polite conditional requests (je voudrais, pourriez-vous) and formal 'vous'.",
          "Ask for repetition politely (Pourriez-vous répéter s'il vous plaît ?) when needed."
        ]
      },
      {
        title: "Topic Presentation and Spontaneous Conversation",
        body:
          "**Structure of the General Conversation (approx. 8–10 minutes):**\n" +
          "The conversation covers two distinct syllabus topic areas (chosen by the centre from the 5 core themes). Candidates must demonstrate an ability to express opinions, provide justifications, narrate past events, and hypothesize about future plans.\n\n" +
          "**The Tense Triangle Strategy:**\n" +
          "To access top marks, a candidate must demonstrate communicative command across at least three temporal frames in each topic section:\n" +
          "1. **Present Frame:** *Actuellement, je passe beaucoup de temps à réviser pour mes examens...*\n" +
          "2. **Past Frame (Passé Composé & Imparfait):** *Le week-end dernier, je suis allé en ville avec mes amis et nous avons regardé un film...*\n" +
          "3. **Future / Conditional Frame:** *À l'avenir, si j'en ai l'occasion, j'aimerais voyager en Afrique pour découvrir de nouvelles cultures...*\n\n" +
          "**Expressing Nuanced Opinions and Justifications:**\n" +
          "- *À mon avis / Selon moi / D'après moi* (In my opinion).\n" +
          "- *Il me semble que* / *J'estime que* (It seems to me that / I consider that).\n" +
          "- *Je suis fermement convaincu(e) que* (I am firmly convinced that).\n" +
          "- *Ce qui me plaît le plus, c'est...* (What I like most is...).\n" +
          "- *Ce qui m'inquiète, c'est...* (What worries me is...).\n\n" +
          "**Stalling and Discourse Fillers (Les Mots Charnières):**\n" +
          "Native speakers use fillers to buy cognitive processing time without creating dead silence:\n" +
          "- *Eh bien...* (Well...)\n" +
          "- *C'est une question intéressante...* (That's an interesting question...)\n" +
          "- *Pour être tout à fait honnête...* (To be completely honest...)\n" +
          "- *En fait...* / *Disons que...* (Actually... / Let's say that...)",
        examinerTips: [
          "Never answer with a monosyllabic 'Oui' or 'Non'; expand every answer by adding a reason ('parce que...'), an example, or an opinion.",
          "Deliberately steer your answers toward the past or future if the examiner has only asked present-tense questions, ensuring you show your full grammatical range."
        ],
        commonMistakes: [
          "Reciting an obvious pre-memorized speech that does not engage naturally with the examiner's specific prompt.",
          "Panicking when corrected; if you make a slip, calmly self-correct (*'Pardon, je voulais dire...'*)."
        ],
        recap: [
          "Speaking tests require evidence of three temporal frames: present, past, and future/conditional.",
          "Expand every answer beyond yes/no with justifications and personal perspectives.",
          "Use authentic French filler phrases (Eh bien, En fait, C'est une question intéressante) to maintain conversational flow."
        ]
      },
      {
        title: "Phonetics, Elision, Liaison and French Intonation",
        body:
          "**1. French Vowel Phonetics and Articulation:**\n" +
          "- French vowels are tense and monophthongal (they do not glide like English vowels).\n" +
          "- **The 'u' vs 'ou' Distinction:**\n" +
          "  - $/y/$ (orthographic *u*): Lips rounded tightly, tongue pushed forward against lower incisors (e.g. *tu, rue, vu, du*).\n" +
          "  - $/u/$ (orthographic *ou*): Lips rounded and protruded, tongue retracted back (e.g. *tout, roue, vous, doux*).\n" +
          "- **Nasal Vowels:** Air flows simultaneously through oral and nasal cavities without pronouncing terminal 'n' or 'm':\n" +
          "  - $/\\tilde{\\varepsilon}/$: *vin, pain, plein, train*\n" +
          "  - $/\\tilde{\\alpha}/$: *banc, temps, enfant, manger*\n" +
          "  - $/\\tilde{\\jmath}/$: *bon, maison, monde, ombre*\n\n" +
          "**2. Silent Final Consonants (Les Consonnes Muettes):**\n" +
          "- General Rule: Final consonants **-d, -p, -s, -t, -x, -z** are silent:\n" +
          "  - *grand* (pronounce 'gran'), *beaucoup* ('beaucou'), *temps* ('tan'), *chat* ('cha'), *deux* ('deu').\n" +
          "- **The 'CaReFuL' Rule (CRFL):** Final consonants **-c, -r, -f, -l** are usually pronounced (*sac, car, neuf, sel*), with notable exceptions like *-er* verb infinitives (*parler* pronounced /e/).\n\n" +
          "**3. Elision and Liaison:**\n" +
          "- **Élision:** Dropping a final vowel before a word starting with a vowel or mute 'h': *le ami $\\rightarrow$ l'ami*, *je aime $\\rightarrow$ j'aime*, *la heure $\\rightarrow$ l'heure*.\n" +
          "- **Liaison:** Pronouncing a normally silent final consonant before a word beginning with a vowel or mute 'h':\n" +
          "  - **Obligatory Liaisons:**\n" +
          "    - Determiner + Noun: *les_amis* (pronounced /lezami/), *un_homme* (/unom/), *mon_enfant* (/monanfan/).\n" +
          "    - Pronoun + Verb: *nous_avons* (/nouzavon/), *ils_étaient* (/ilzetai/).\n" +
          "    - Adjective + Noun: *petit_enfant* (/petit-anfan/), *beaux_yeux* (/boz-yeu/).\n" +
          "  - **Forbidden Liaisons (Liaisons Interdites):**\n" +
          "    - After **et** (NEVER link *et*: *un garçon et une fille* — NO liaison after *et*).\n" +
          "    - Before an **aspirated 'h'** (*h aspiré*): *les héros* (/le ero/, NOT /lezero/; *le héros*, NOT *l'héros*).\n" +
          "    - After a singular noun: *le train // arrivait* (no liaison).\n\n" +
          "**4. Sentence Intonation and Cadence:**\n" +
          "- French is syllable-timed (each syllable has roughly equal duration) with tonic stress falling naturally on the final syllable of a rhythmic group.\n" +
          "- Rising intonation at the end of clauses signals a question or continuation; falling intonation signals a completed statement.",
        examinerTips: [
          "Never pronounce the final 's' or 't' in common words like 'les', 'des', 'est', or 'sont' unless making an obligatory liaison before a vowel.",
          "Distinguish clearly between 'les héros' (no liaison, /le ero/) and 'les zéros' (/le zero/) — pronouncing a liaison after 'les héros' changes the meaning to zeroes!"
        ],
        commonMistakes: [
          "Making a liaison after the word 'et'; liaison after 'et' is strictly forbidden in standard French.",
          "Pronouncing the silent '-ent' third-person plural verb ending (e.g. pronouncing 'ils parlent' as 'ils parl-ent' instead of /il parl/)."
        ],
        recap: [
          "Master key phonetic distinctions: /y/ (tu) vs /u/ (tout), and nasal vowels.",
          "Final consonants d, p, s, t, x, z are silent; CRFL consonants are usually pronounced.",
          "Obligatory liaisons occur between determiner and noun, pronoun and verb.",
          "Never link after 'et' or before an aspirated h (les héros)."
        ]
      }
    ]
  }
];
