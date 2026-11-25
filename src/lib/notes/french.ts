import type { SubjectNotes } from "./types";

export const FRENCH: SubjectNotes = {
  id: "french",
  name: "French",
  code: "0520",
  color: "bg-blue-600",
  chapters: [
    {
      number: 1,
      title: "Listening and Reading Comprehension",
      intro:
        "Listening and reading are the receptive skills tested in IGCSE French Papers 1 and 2. In both skills, candidates must extract specific information, identify the main idea, and infer meaning from context. Accuracy in understanding authentic spoken and written French is essential for high marks.",
      subheadings: [
        {
          title: "Listening Strategies",
          body: "Effective listening requires active engagement with the spoken text before, during, and after hearing it. Candidates should read questions carefully before the recording begins to anticipate the type of information required. Listening for gist (general meaning) and then for specific detail is the standard two-stage approach.",
          groups: [
            {
              subTitle: "Core Techniques",
              bullets: [
                "Pre-listening: read all questions and highlight key words to know what information to listen for before the track plays.",
                "During listening: focus on numbers, names, places, times, and negatives — these are the details most frequently tested.",
                "Post-listening: if a second hearing is provided, use it to verify and complete uncertain answers rather than re-doing already confident ones.",
                "Context clues: use surrounding sentences to infer the meaning of unfamiliar vocabulary — do not leave a question blank.",
                "False friends: beware of words that sound like English equivalents but have different meanings (e.g. 'actuellement' means 'currently', not 'actually').",
              ],
            },
          ],
        },
        {
          title: "Reading Comprehension Strategies",
          body: "IGCSE French reading texts are drawn from authentic sources such as magazine articles, emails, advertisements, and short stories. Questions test both literal understanding and the ability to infer attitude or purpose. Candidates must read carefully and not import assumptions from outside the text.",
          groups: [
            {
              subTitle: "Key Approaches",
              bullets: [
                "Skim the whole text first for gist before reading questions — this builds a mental map of where information is located.",
                "Scan for specific details once questions are read — locate names, dates, quantities, and adjectives precisely.",
                "Negative constructions: 'ne...pas', 'ne...jamais', 'ne...rien', and 'ne...plus' completely reverse meaning and are frequently tested.",
                "Questions requiring opinions: look for subjective language such as 'je pense que', 'il est certain que', 'malheureusement'.",
                "Multiple-choice questions: eliminate obviously wrong options first; the correct answer is never based on a word appearing in the text alone — the meaning must match.",
              ],
            },
          ],
        },
        {
          title: "Vocabulary for Comprehension",
          body: "A broad vocabulary of approximately 1500–2000 words is expected at IGCSE level. Topic-specific vocabulary across all seven core themes must be learned alongside general discourse markers that signal time, contrast, addition, and cause.",
          groups: [
            {
              subTitle: "Essential Discourse Markers",
              bullets: [
                "Contrast: 'cependant' (however), 'pourtant' (yet), 'par contre' (on the other hand), 'néanmoins' (nevertheless).",
                "Addition: 'de plus' (furthermore), 'en outre' (moreover), 'également' (also), 'd'ailleurs' (besides).",
                "Cause and consequence: 'donc' (therefore), 'ainsi' (thus), 'c'est pourquoi' (that is why), 'par conséquent' (as a result).",
                "Time: 'autrefois' (formerly), 'désormais' (henceforth), 'auparavant' (previously), 'dorénavant' (from now on).",
                "Concession: 'bien que + subjunctive' (although), 'même si' (even if), 'quoique + subjunctive' (even though).",
              ],
            },
          ],
        },
        {
          title: "Dealing with Unknown Words",
          body: "Encountering unfamiliar vocabulary is inevitable in examination conditions. A systematic approach to decoding unknown words significantly reduces the impact on comprehension scores. Candidates should use morphological knowledge (prefixes, suffixes, roots) alongside contextual inference.",
          groups: [
            {
              subTitle: "Decoding Strategies",
              bullets: [
                "Prefixes: 'dé-/des-' often negates (défaire = undo), 're-' indicates repetition (recommencer = start again), 'im-/in-' negates adjectives (impoli = impolite).",
                "Suffixes: '-ment' usually forms adverbs from adjectives (lentement = slowly), '-tion' forms nouns from verbs (organisation), '-eur/-euse' indicates a person performing an action (vendeur = seller).",
                "Cognates with English: many French words of Latin origin closely resemble English words (nécessaire = necessary, important = important, difficile = difficult).",
                "Word families: knowing 'vendre' (to sell) helps decode 'vendeur' (seller), 'vente' (sale), 'revendre' (to resell).",
                "Context: if a word is preceded by a list of similar items, its meaning likely belongs to the same category.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Grammar Foundations",
      intro:
        "French grammar at IGCSE level covers a structured set of verb tenses, noun-adjective agreement, pronoun use, and sentence construction patterns. Grammatical accuracy is assessed in the writing and speaking components and indirectly tested through gap-fill exercises in reading. A thorough command of the core grammatical structures is essential for achieving the highest grades.",
      subheadings: [
        {
          title: "Verb Tenses and Their Uses",
          body: "IGCSE French requires confident production and recognition of eight verb tenses: present, perfect (passé composé), imperfect, future, conditional, pluperfect, subjunctive, and imperative. Each tense carries a specific grammatical and communicative function that must be applied accurately.",
          groups: [
            {
              subTitle: "Tense Guide",
              bullets: [
                "Present (présent): describes current actions, habitual actions, and general truths. Regular -er verbs: stem + e, es, e, ons, ez, ent.",
                "Passé composé: describes completed past actions with a definite endpoint. Formed with avoir or être as auxiliary + past participle. Être verbs include all reflexives and the DR MRS VANDERTRAMP verbs.",
                "Imparfait: describes ongoing past states, habitual past actions, and background descriptions. Formed from the nous present stem + ais, ais, ait, ions, iez, aient.",
                "Futur simple: describes future events. Formed from the infinitive (drop final -e for -re verbs) + ai, as, a, ons, ez, ont. Irregular stems: aller → ir-, avoir → aur-, être → ser-, faire → fer-.",
                "Conditionnel présent: expresses what would happen under certain conditions. Formed from futur stem + imparfait endings: ais, ais, ait, ions, iez, aient.",
                "Subjonctif présent: required after expressions of wish, doubt, emotion, obligation (vouloir que, douter que, regretter que, il faut que). Formed from the ils present stem + e, es, e, ions, iez, ent.",
              ],
            },
          ],
        },
        {
          title: "Noun, Article, and Adjective Agreement",
          body: "In French, adjectives must agree in gender (masculine/feminine) and number (singular/plural) with the nouns they modify. Articles must also be selected correctly according to gender, number, and context (definite, indefinite, partitive). Errors in agreement are among the most penalised in written production.",
          groups: [
            {
              subTitle: "Agreement Rules",
              bullets: [
                "Most adjectives form the feminine by adding -e (grand → grande) and the plural by adding -s (grand → grands; grande → grandes).",
                "Adjectives ending in -eux change to -euse (heureux → heureuse); adjectives in -el double the 'l' (actuel → actuelle).",
                "Definite articles: le (masc. sing.), la (fem. sing.), l' (before vowel/h muet), les (plural). Used for specific nouns and general categories.",
                "Indefinite articles: un (masc.), une (fem.), des (plural). Become de/d' after a negative: 'Je n'ai pas de voiture'.",
                "Partitive articles: du (de + le), de la, de l', des — used to express 'some' with uncountable nouns. Also become de/d' after negatives.",
                "BAGS adjectives (Beauty, Age, Goodness, Size) typically precede the noun: beau, joli, vieux, jeune, bon, mauvais, grand, petit.",
              ],
            },
          ],
        },
        {
          title: "Pronouns",
          body: "French pronoun use covers subject, direct object, indirect object, reflexive, disjunctive (stressed), relative, and demonstrative pronouns. Accurate pronoun placement — before the verb in most tenses — is tested in both writing and reading gap-fills.",
          groups: [
            {
              subTitle: "Pronoun Types and Placement",
              bullets: [
                "Subject pronouns: je, tu, il/elle/on, nous, vous, ils/elles — always precede the conjugated verb.",
                "Direct object pronouns: me, te, le/la, nous, vous, les — replace the direct object noun and precede the verb. In the passé composé, the past participle agrees in gender/number with a preceding direct object pronoun.",
                "Indirect object pronouns: me, te, lui, nous, vous, leur — replace 'à + person' and precede the verb. No past participle agreement.",
                "Reflexive pronouns: me, te, se, nous, vous, se — used with pronominal verbs (se lever, se coucher). In passé composé with être, past participle agrees with subject unless a direct object follows.",
                "Disjunctive pronouns: moi, toi, lui/elle, nous, vous, eux/elles — used after prepositions, in comparisons, for emphasis, and in compound subjects.",
                "Relative pronouns: qui (subject), que (direct object), dont (of which/whose), où (where/when) — used to join clauses and must agree with their antecedent where required.",
              ],
            },
          ],
        },
        {
          title: "Sentence Structure and Negation",
          body: "French sentence structure follows Subject-Verb-Object order in main clauses, but subordinate clauses, questions, and inverted structures require careful attention. Negation wraps around the conjugated verb and must be applied consistently across all tenses.",
          groups: [
            {
              subTitle: "Negation and Question Forms",
              bullets: [
                "Basic negation: ne...pas wraps around the conjugated verb. In compound tenses, ne precedes the auxiliary and pas follows it: 'Je n'ai pas mangé'.",
                "Extended negatives: ne...jamais (never), ne...rien (nothing), ne...personne (nobody), ne...plus (no longer), ne...que (only), ne...ni...ni (neither...nor).",
                "Question formation: three methods — intonation (rising voice), est-ce que + statement order, or inversion (verb-subject hyphenated: Parlez-vous français?).",
                "Inversion with compound tenses: the subject pronoun inverts with the auxiliary: 'A-t-il mangé?' (Has he eaten?).",
                "Subordinate clauses: conjunctions such as 'parce que', 'quand', 'si', 'bien que' introduce clauses that follow the main clause or precede it for emphasis.",
                "Si clauses for conditions: present + future (real condition), imparfait + conditionnel (hypothetical), plus-que-parfait + conditionnel passé (past hypothetical).",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Speaking and Conversation",
      intro:
        "The IGCSE French speaking assessment (Paper 3 or the internally assessed component) tests the candidate's ability to communicate accurately and fluently in a range of everyday contexts. Candidates are assessed on fluency, range of vocabulary, accuracy of grammar, and pronunciation. Thorough preparation across all topic areas is essential.",
      subheadings: [
        {
          title: "Role-Play Preparation",
          body: "Role-plays require candidates to respond appropriately to cues in a given scenario. Common scenarios include shopping, booking travel, making complaints, and discussing plans. Candidates must use the correct register (formal or informal) and respond to unexpected prompts from the examiner.",
          groups: [
            {
              subTitle: "Role-Play Strategies",
              bullets: [
                "Identify the register immediately: 'tu' for informal (friend, family member), 'vous' for formal (shopkeeper, hotel receptionist, doctor).",
                "Learn standard transactional phrases: 'Je voudrais...' (I would like), 'Pourriez-vous...?' (Could you...?), 'C'est combien?' (How much is it?).",
                "Responding to unexpected questions: use bridging phrases such as 'C'est une bonne question', 'Je dirais que...', 'À mon avis...' to buy thinking time.",
                "Demonstrate range: avoid repeating the same structure. If you have already used 'je veux', switch to 'j'aimerais', 'j'ai l'intention de', or 'je souhaite'.",
                "Numbers and quantities: practise cardinal and ordinal numbers, prices, quantities, times, and dates fluently as these frequently appear in role-plays.",
              ],
            },
          ],
        },
        {
          title: "General Conversation Topics",
          body: "The conversation section of the speaking assessment tests the candidate's ability to discuss familiar topics in depth. Topics are drawn from the seven IGCSE core themes: home and daily life, personal relationships, school and work, the wider world, leisure and lifestyle, health and wellbeing, travel and tourism.",
          groups: [
            {
              subTitle: "Topic Development Techniques",
              bullets: [
                "Extend every answer: never give a one-word or one-clause response. Follow each statement with a reason ('parce que'), an example, or a contrast.",
                "Use a range of tenses: demonstrate control of past, present, and future in every conversation. For example: 'Quand j'étais petit(e)...maintenant...à l'avenir...'.",
                "Express opinions and justify them: use 'je pense que', 'je crois que', 'selon moi', 'à mon avis', 'je suis convaincu(e) que' followed by a substantiated view.",
                "Use connectives to link ideas: 'par exemple', 'de plus', 'cependant', 'en revanche', 'd'un côté...de l'autre' (on one hand...on the other).",
                "Anticipate follow-up questions on every topic: if discussing school, be ready to compare your school to an ideal school, discuss future plans, and express opinions on the education system.",
              ],
            },
          ],
        },
        {
          title: "Pronunciation and Intonation",
          body: "French pronunciation follows systematic rules that, once learned, allow consistent and accurate speech. Key features include nasal vowels, liaison (linking consonants), elision (dropping vowels), and the consistent stress pattern of French syllables.",
          groups: [
            {
              subTitle: "Pronunciation Rules",
              bullets: [
                "Nasal vowels: 'un/in/ain/ein' = /ɛ̃/, 'an/en/am/em' = /ɑ̃/, 'on/om' = /ɔ̃/. These are produced with air flowing through the nose; the following consonant is not pronounced when forming the nasal.",
                "Liaison: the final silent consonant of a word is pronounced when the next word begins with a vowel or silent h: 'les amis' = /lez ami/, 'nous avons' = /nuz avɔ̃/.",
                "Elision: 'le', 'la', 'je', 'me', 'te', 'se', 'de', 'ne', 'que' drop their final vowel before a word beginning with a vowel or silent h: 'l'ami', 'j'aime'.",
                "Silent final consonants: in French, most final consonants are silent — exceptions are C, R, F, L (CaReFuL): 'avec', 'bonjour', 'neuf', 'sel'.",
                "Stress: French has relatively even syllable stress with a slight lengthening on the final syllable of a breath group — unlike English which has strong lexical stress patterns.",
              ],
            },
          ],
        },
        {
          title: "Improving Spoken Fluency",
          body: "Fluency in speaking is developed through regular practice of production in meaningful contexts. Candidates should build a repertoire of learned phrases, topic-specific vocabulary banks, and grammatical structures that can be deployed flexibly in the examination.",
          groups: [
            {
              subTitle: "Fluency Building Techniques",
              bullets: [
                "Learn 'chunks' of language rather than isolated words: memorise set phrases such as 'il y a longtemps que je...', 'depuis que j'ai commencé à...', 'c'est pour cette raison que...'.",
                "Record yourself: listen back for pronunciation errors, overuse of certain structures, hesitations, and missing agreements.",
                "Practise with a partner using exam-style prompts: simulate the role-play and general conversation sections under timed conditions.",
                "Expand topic vocabulary systematically: create themed vocabulary banks for each of the seven core topics with at least 30 words and 10 useful phrases per topic.",
                "Read French texts aloud: reading authentic French material such as news websites, lyrics, or short stories aloud improves both pronunciation and vocabulary simultaneously.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Writing Skills",
      intro:
        "IGCSE French Writing (Paper 4 or the written production component) assesses the candidate's ability to produce accurate, relevant, and coherent written French across different task types and registers. Tasks range from informal emails and messages to formal letters, reports, and discursive essays. Quality of communication, grammatical accuracy, range of vocabulary, and appropriate register are all assessed.",
      subheadings: [
        {
          title: "Informal Writing",
          body: "Informal writing tasks include personal emails, text messages, notes, diary entries, and informal letters to friends or family members. The register requires the use of 'tu' forms, contractions, colloquial expressions, and a conversational tone. Content must be fully relevant to the task prompt.",
          groups: [
            {
              subTitle: "Informal Writing Conventions",
              bullets: [
                "Opening: 'Cher/Chère [prénom],' or 'Salut [prénom],' — use the person's first name, never their surname in an informal context.",
                "Body: address all bullet points in the task; each point should be developed with at least two sentences of explanation or detail.",
                "Closing: 'Grosses bises', 'Amitiés', 'À bientôt', 'Cordialement' (slightly more formal), signed with a French first name or your own.",
                "Conversational markers: use 'tu sais...', 'eh bien...', 'franchement...', 'en tout cas...' to give the text an authentic informal register.",
                "Informal negation: in spoken and informal written French, 'ne' is often dropped: 'Je sais pas', 'C'est pas grave' — use sparingly and only in genuinely informal tasks.",
              ],
            },
          ],
        },
        {
          title: "Formal Writing",
          body: "Formal writing tasks include letters of complaint, formal applications, reports, and articles. A formal register requires the use of 'vous', polite conditional forms, formal vocabulary, and a structured presentation. Errors in register in formal writing carry significant mark penalties.",
          groups: [
            {
              subTitle: "Formal Writing Conventions",
              bullets: [
                "Opening: 'Monsieur/Madame,' (without a name if unknown) or 'Monsieur le Directeur/Madame la Directrice,'.",
                "Purpose statement: establish the reason for writing immediately: 'Je me permets de vous écrire au sujet de...', 'Suite à votre annonce...'.",
                "Polite conditionals: use 'je voudrais', 'je souhaiterais', 'pourriez-vous', 'serait-il possible de' rather than 'je veux' or 'donnez-moi'.",
                "Closing: 'Veuillez agréer, Monsieur/Madame, l'expression de mes salutations distinguées.' (formal letter closing formula — must be learned exactly).",
                "Formal vocabulary: replace informal words with precise equivalents — 'maintenant' → 'actuellement', 'beaucoup' → 'un grand nombre de', 'très bien' → 'excellent'.",
              ],
            },
          ],
        },
        {
          title: "Discursive and Creative Writing",
          body: "Extended writing tasks such as discursive essays, articles, and narratives require structured paragraphing, a clear argument or storyline, and consistent use of a range of grammatical structures. Planning before writing is essential for producing coherent extended text.",
          groups: [
            {
              subTitle: "Planning and Structuring",
              bullets: [
                "Before writing: spend 3–5 minutes creating a brief plan — introduction point, 3 body paragraph topics with supporting detail, and a conclusion position.",
                "Introduction: introduce the topic and state your overall position or the aspect you will explore. Do not simply rewrite the task prompt.",
                "Body paragraphs: each paragraph should contain one main point (topic sentence), developed with evidence, explanation, or example, and connected to the next paragraph with a transition.",
                "Conclusion: summarise your main points briefly and state a final evaluative judgment — do not introduce new information.",
                "Range: deliberately vary sentence length (mix short punchy sentences with longer complex ones), tense (past, present, future), and vocabulary to demonstrate linguistic range.",
              ],
            },
          ],
        },
        {
          title: "Accuracy and Editing",
          body: "Grammatical accuracy is one of the most heavily weighted assessment objectives in IGCSE French writing. Candidates should build in time at the end of every writing task to proofread systematically for the most common error types.",
          groups: [
            {
              subTitle: "Proofreading Checklist",
              bullets: [
                "Verb agreement: check every verb is correctly conjugated for its subject — especially irregular verbs (être, avoir, aller, faire, vouloir, pouvoir, devoir, savoir, venir, prendre).",
                "Past participle agreement: in the passé composé with avoir, agree the past participle with a preceding direct object pronoun. With être, agree with the subject.",
                "Adjective agreement: every adjective must agree in gender and number with its noun — re-read noun by noun.",
                "Negation: ensure 'ne' is present (do not omit it in formal written French) and that the second negative element is correctly placed.",
                "Accents: acute (é), grave (è, à, ù), circumflex (â, ê, î, ô, û), cedilla (ç), and tréma (ë, ï) — missing or wrong accents in written work are penalised.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Vocabulary and Core Themes",
      intro:
        "The IGCSE French syllabus is organised around seven core topic areas which form the basis of all four skills assessments. Systematic vocabulary learning across these themes, combined with the ability to use learned vocabulary in new contexts, is a key differentiator between grades. A thematic vocabulary bank of approximately 2000 words is expected.",
      subheadings: [
        {
          title: "Home, Family, and Daily Life",
          body: "This theme covers personal identity, family relationships, daily routines, household tasks, living arrangements, and local environment. Candidates should be able to describe their home and family, discuss relationships, and compare lifestyles.",
          groups: [
            {
              subTitle: "Key Vocabulary",
              bullets: [
                "Family members: le/la grand-parent, le/la beau-parent, le demi-frère/la demi-soeur, le/la cousin(e), le/la voisin(e).",
                "Housing: un appartement, une maison individuelle, un immeuble, un lotissement, en banlieue, en ville, à la campagne.",
                "Daily routine verbs: se réveiller, se lever, se doucher, s'habiller, prendre le petit-déjeuner, se dépêcher, rentrer, se coucher.",
                "Household tasks: faire la vaisselle, passer l'aspirateur, faire le ménage, faire les courses, mettre la table, sortir la poubelle.",
                "Describing relationships: s'entendre bien avec, se disputer avec, avoir confiance en, soutenir, se soucier de.",
              ],
            },
          ],
        },
        {
          title: "School, Work, and Future Plans",
          body: "This theme encompasses school subjects, school life, part-time work, career aspirations, and further education. Candidates must discuss their current studies, compare school systems, and express ambitions for the future using a range of tenses.",
          groups: [
            {
              subTitle: "Key Vocabulary",
              bullets: [
                "School subjects: les sciences, les maths, l'histoire-géo, l'informatique, l'EPS (éducation physique et sportive), les langues vivantes, les arts plastiques.",
                "School life: le proviseur, le/la prof principal(e), l'emploi du temps, la récréation, la cantine, le règlement scolaire, les résultats, le redoublement.",
                "Work vocabulary: un stage, un emploi à temps partiel, un contrat, un salaire, un employeur, un collègue, une carrière, une formation professionnelle.",
                "Future expressions: j'ai l'intention de + infinitive, j'envisage de + infinitive, je compte + infinitive, j'espère + infinitive, il est prévu que + subjunctive.",
                "Career vocabulary: un médecin, un ingénieur, un(e) informaticien(ne), un(e) comptable, un(e) fonctionnaire, un(e) entrepreneur(e), un(e) artisan(e).",
              ],
            },
          ],
        },
        {
          title: "Leisure, Lifestyle, and Health",
          body: "This theme covers hobbies, sport, entertainment, healthy living, diet, and wellbeing. Candidates should be able to describe leisure activities in detail, discuss the importance of a healthy lifestyle, and express preferences and opinions.",
          groups: [
            {
              subTitle: "Key Vocabulary",
              bullets: [
                "Leisure activities: faire du sport, jouer d'un instrument, lire, surfer sur Internet, sortir avec des amis, faire du bénévolat, aller au cinéma/théâtre/concert.",
                "Sport vocabulary: un match, s'entraîner, une compétition, un champion, battre, marquer un but, une équipe, un arbitre.",
                "Health and diet: une alimentation équilibrée, les protéines, les glucides, les lipides, éviter, consommer, être en forme, garder la ligne.",
                "Unhealthy habits: fumer, boire de l'alcool, manger trop de sucre, ne pas faire assez d'exercice, être sédentaire, stressant.",
                "Wellbeing: le bien-être, dormir suffisamment, réduire le stress, pratiquer la pleine conscience, prendre soin de soi.",
              ],
            },
          ],
        },
        {
          title: "Environment, Travel, and the Wider World",
          body: "This theme addresses environmental issues, travel experiences, global problems, and cultural diversity. Candidates must discuss causes and effects of environmental problems, describe travel plans and experiences, and engage with wider social and global issues.",
          groups: [
            {
              subTitle: "Key Vocabulary",
              bullets: [
                "Environmental issues: le changement climatique, la pollution atmosphérique, les déchets, le recyclage, les énergies renouvelables, la déforestation, la biodiversité.",
                "Solutions: économiser l'énergie, réduire les émissions de CO2, utiliser les transports en commun, favoriser les circuits courts, protéger les espèces menacées.",
                "Travel vocabulary: réserver, un vol, un billet aller-retour, une chambre d'hôtel, un séjour, l'hébergement, les attractions touristiques, un guide.",
                "Global issues: la pauvreté, les inégalités, la migration, les droits de l'homme, le commerce équitable, l'aide humanitaire, la mondialisation.",
                "Opinions on global issues: il est indispensable de, on a le devoir de, il serait injuste de, chaque individu devrait, les gouvernements ont la responsabilité de.",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Cultural Contexts and Authentic Language",
      intro:
        "Knowledge of Francophone culture, literature, media, and social contexts enhances a candidate's performance across all four skills. Understanding cultural references in texts, using culturally appropriate language, and engaging with authentic French-language media deepens linguistic competence and communicative effectiveness.",
      subheadings: [
        {
          title: "Francophone World",
          body: "French is spoken by approximately 300 million people across five continents. The Francophone world encompasses France, Belgium, Switzerland, Canada (especially Quebec), West and Central Africa, North Africa, the Caribbean, and parts of Southeast Asia. Understanding this diversity enriches reading and listening comprehension.",
          groups: [
            {
              subTitle: "Key Regions and Variations",
              bullets: [
                "France: standard French (français standard) is the official language and the basis of IGCSE assessment. Regional accents and dialects exist but are not tested.",
                "Belgium: Belgian French uses 'septante' (70), 'nonante' (90) instead of 'soixante-dix' and 'quatre-vingt-dix'. 'Déjeuner' means breakfast in Belgium, not lunch.",
                "Switzerland: similar to Belgian French in using 'septante' and 'nonante'. 'Huitante' (80) is also used in some cantons.",
                "Canada/Quebec: Quebec French has distinct vocabulary (un char = a car, magasiner = to go shopping) and pronunciation features.",
                "Africa: Francophone Africa covers over 30 countries. French is often the official language of government and education, coexisting with local languages.",
              ],
            },
          ],
        },
        {
          title: "French Media and Current Affairs",
          body: "Exposure to authentic French media — news websites, podcasts, films, and social media — accelerates vocabulary acquisition and develops natural comprehension speed. Candidates who engage with French-language media perform better in listening and reading assessments.",
          groups: [
            {
              subTitle: "Recommended Resources",
              bullets: [
                "News websites: Le Monde (lemonde.fr), Le Figaro (lefigaro.fr), RFI Savoirs (rfi.fr/fr/savoirs) — RFI offers simplified French news articles ideal for IGCSE level.",
                "Radio/podcast: France Inter, RFI Afrique, '1 jour 1 actu' podcast (simplified news for young people in clear French).",
                "Films: French-language films with French subtitles (not English) are highly effective for improving listening comprehension and natural speech patterns.",
                "YouTube channels: 'Français Authentique', 'InnerFrench', 'TV5MONDE' — provide comprehensible input at various levels.",
                "Social media: following French public figures, news accounts, or cultural institutions on platforms in French provides daily authentic language exposure.",
              ],
            },
          ],
        },
        {
          title: "Formal Register and Register Switching",
          body: "French has a clearly defined distinction between formal and informal registers, and candidates must demonstrate the ability to switch register appropriately based on audience and purpose. This is assessed in both writing (Paper 4) and speaking (Paper 3).",
          groups: [
            {
              subTitle: "Register Comparison",
              bullets: [
                "Informal: 'tu', contracted negation (j'sais pas), colloquial vocabulary (sympa, chouette, boulot, fric), direct questions (Tu viens?).",
                "Formal: 'vous', full negation (je ne sais pas), formal vocabulary (agréable, travail, argent), inverted questions (Viendrez-vous?).",
                "Letters: informal → 'Salut Claire, ... Grosses bises, Marc'; formal → 'Madame, ... Veuillez agréer l'expression de mes salutations distinguées.'",
                "Emails: informal emails resemble text messages in register; formal emails follow letter conventions with subject line and full closing formula.",
                "Oral register: in role-plays requiring formal interaction, candidates must sustain the 'vous' register throughout even under pressure.",
              ],
            },
          ],
        },
        {
          title: "Translation and Transfer Skills",
          body: "Translation exercises, where included in the syllabus variant, test the ability to transfer meaning accurately between French and English while preserving register, nuance, and grammatical structure. They also develop precision in understanding and producing both languages.",
          groups: [
            {
              subTitle: "Translation Strategies",
              bullets: [
                "Read the whole passage before translating: understanding the overall meaning and tone prevents literal word-by-word translation that sounds unnatural.",
                "Identify idioms: French idioms do not translate literally — 'avoir le cafard' (to be depressed, literally 'to have the cockroach'), 'casser les pieds' (to annoy someone).",
                "Grammar transfer: French passive voice uses être + past participle; tense correspondences must be maintained (imparfait → past continuous, passé composé → past simple).",
                "False friends: avoid translating words based on their resemblance to English — 'sensible' means 'sensitive', 'librairie' means 'bookshop', 'rester' means 'to stay'.",
                "Check for register consistency: a formal source text requires a formal English translation and vice versa — do not introduce colloquialisms where the original is formal.",
              ],
            },
          ],
        },
      ],
    },
  ],
};
