import type { Chapter } from "./types";

/**
 * Cambridge IGCSE French (0520 / 7156 & First Language 0501) Syllabus Notes
 * Part 2: Chapters 5–7
 * - Chapter 5: Writing Techniques: Discursive, Creative and Formal Registers (Paper 4 / 0520 & Paper 2 / 0501)
 * - Chapter 6: Core Thematic Lexicon across the 5 Cambridge Topic Areas
 * - Chapter 7: Cultural Contexts, The Francophone World and Stylistic Register
 */
export const FRENCH_PART2: Chapter[] = [
  {
    number: 5,
    title: "Writing Techniques: Discursive, Creative and Formal Registers",
    section: "Section 5: Written Composition and Stylistic Expression",
    topic: "Directed Writing, Discursive Essays, Narrative Composition, and Register Adaptation",
    intro:
      "Writing is the primary productive medium in Cambridge IGCSE French examinations (Paper 4 in 0520/7156 and Paper 2 in First Language 0501). Candidates must demonstrate structural coherence, idiomatic fluency, lexical variety, and grammatical precision across a range of registers, from informal emails and blog articles to formal discursive essays and creative narratives.",
    subheadings: [
      {
        title: "Informal and Semi-Formal Written Communication",
        body:
          "**Target Formats for Paper 4 (0520/7156):**\n" +
          "Short communicative tasks (80–90 words) or extended directed pieces (130–140 words) in the form of an informal email to a French penfriend (*correspondant*), a postcard, a diary entry, or a contribution to an online student forum.\n\n" +
          "**Standard Conventions of Informal Correspondence:**\n" +
          "1. **Salutations / Opening Greetings:**\n" +
          "   - *Cher Thomas / Chère Camille* (Dear Thomas / Dear Camille).\n" +
          "   - *Salut Lucas / Bonjour à tous* (Hi Lucas / Hello everyone).\n" +
          "2. **Conversational Social Openings:**\n" +
          "   - *Comment vas-tu ? J'espère que tu vas bien ainsi que ta famille.* (How are you? I hope you and your family are well.)\n" +
          "   - *Merci pour ton dernier courriel qui m'a fait très plaisir.* (Thank you for your last email which gave me great pleasure.)\n" +
          "   - *Je t'écris pour te raconter mes vacances incroyables en Provence.* (I am writing to tell you about my incredible holiday in Provence.)\n" +
          "3. **Closing Formulas (Pre-sign off):**\n" +
          "   - *Écris-moi vite et donne-moi de tes nouvelles.* (Write back soon and give me your news.)\n" +
          "   - *J'ai hâte de te revoir bientôt.* (I can't wait to see you soon.)\n" +
          "   - *Dis bonjour à tes parents de ma part.* (Say hello to your parents for me.)\n" +
          "4. **Sign-offs:**\n" +
          "   - *À bientôt / À plus tard* (See you soon / Later).\n" +
          "   - *Amitiés / Grosses bises / Bises* (Best wishes / Big kisses / Warmly).\n\n" +
          "**Addressing the 4–5 Bullet Points in the Prompt:**\n" +
          "- Cambridge mark schemes award content marks strictly for addressing each specific bullet point listed in the examination paper.\n" +
          "- Dedicate at least one clear, developed sentence with a justification to every single bullet point:\n" +
          "  - *Bullet 1 (Past experience):* State what you did, who with, and your reaction.\n" +
          "  - *Bullet 2 (Preferences/Opinions):* State what you liked or disliked and why (*'Ce que j'ai apprécié le plus, c'était... parce que...'*).\n" +
          "  - *Bullet 3 (Future intentions):* State what you plan to do next (*'L'année prochaine, j'ai l'intention de...'*).",
        examinerTips: [
          "Tick off each bullet point in the question paper as you address it in your draft to guarantee you do not miss any required element and sacrifice content marks.",
          "Keep your word count within the recommended range (130–140 words for 0520); writing substantially too much increases the likelihood of grammatical errors without earning extra marks."
        ],
        commonMistakes: [
          "Forgetting to include both a proper greeting and closing formula in an email or letter.",
          "Using formal 'vous' when writing to a teenage friend or penpal instead of informal 'tu'."
        ],
        recap: [
          "Use authentic informal openings (Cher/Chère, Salut) and closings (À bientôt, Amitiés).",
          "Address every single bullet point in the rubric with justifications and varied tenses.",
          "Maintain consistent informal register ('tu') throughout."
        ]
      },
      {
        title: "Discursive and Argumentative Essay Writing",
        body:
          "**Structure of an Academic Discursive Essay:**\n" +
          "An argumentative essay presents a balanced, analytical exploration of a contentious topic (e.g. social media, school uniforms, renewable energy, tourism impacts) before arriving at a justified personal conclusion.\n\n" +
          "**The Four-Stage Essay Architecture:**\n" +
          "1. **Introduction (L'Introduction):**\n" +
          "   - **Context Hook (L'amorce):** Introduce the broad societal topic (*De nos jours, l'impact des réseaux sociaux sur la jeunesse suscite de vifs débats...*).\n" +
          "   - **Problematic (La problématique):** State the central question (*Est-ce un progrès technologique indispensable ou un danger pour la vie privée ?*).\n" +
          "   - **Outline (L'annonce du plan):** Indicate the two perspectives to be examined (*Après avoir examiné les avantages indéniables, nous analyserons les risques potentiels.*).\n" +
          "2. **First Argumentative Axis (Les Arguments Pour):**\n" +
          "   - Present 2 or 3 supporting arguments with concrete evidence or examples.\n" +
          "   - Connectors: *D'une part...*, *En premier lieu...*, *Il est indéniable que...*, *Par exemple...*\n" +
          "3. **Second Argumentative Axis (Les Arguments Contre):**\n" +
          "   - Contrast with opposing viewpoints, demonstrating critical evaluation.\n" +
          "   - Connectors: *D'autre part...*, *Néanmoins...*, *En revanche...*, *Toutefois, certains critiques soulignent que...*\n" +
          "4. **Conclusion (La Conclusion):**\n" +
          "   - Synthesize the opposing points without introducing new arguments.\n" +
          "   - Deliver a clear, nuanced personal verdict.\n" +
          "   - Connectors: *En conclusion...*, *Tout bien considéré...*, *Pour ma part, j'estime que...*\n\n" +
          "**High-Scoring Discursive Structures:**\n" +
          "- Rhetorical Questions: *Comment peut-on ignorer une telle urgence climatique ?*\n" +
          "- Inversion with adverbs: *Peut-être devrions-nous reconsidérer nos priorités.* / *Aussi faut-il souligner l'importance de l'éducation.*\n" +
          "- Balanced syntax: *Non seulement cette mesure est coûteuse, mais elle s'avère également inefficace.*",
        examinerTips: [
          "Avoid one-sided polemics; Cambridge examiners reward balanced arguments that weigh both perspectives before drawing a personal conclusion.",
          "Use varied transitional phrases between paragraphs (*Il convient maintenant d'aborder...*, *Ayant analysé les bénéfices, penchons-nous sur...*) to demonstrate seamless cohesion."
        ],
        commonMistakes: [
          "Introducing brand new arguments in the concluding paragraph instead of summarizing already presented points.",
          "Repeating the simplistic connector 'et puis' or 'mais aussi' instead of diverse transitional linkers."
        ],
        recap: [
          "Structure discursive essays with Introduction (hook, question, plan), Arguments For, Arguments Against, and a Synthesized Conclusion.",
          "Balance opposing viewpoints objectively before stating your nuanced verdict.",
          "Employ advanced connective phrasing (D'une part / D'autre part, Néanmoins, Non seulement... mais aussi)."
        ]
      },
      {
        title: "Creative and Narrative Writing (0501 Composition)",
        body:
          "**First Language French (0501) Composition Options:**\n" +
          "In Paper 2, candidates choose between argumentative, discursive, descriptive, or narrative tasks (350–500 words). High marks demand stylistic flair, atmospheric world-building, psychological insight, and sophisticated literary vocabulary.\n\n" +
          "**Narrative Architecture:**\n" +
          "1. **Exposition (Situation Initiale):** Setting the scene in the imperfect (*imparfait*); sensory details, time, location, mood (*Le brouillard épais enveloppait la ruelle déserte, tandis qu'une pluie glaciale cinglait les vitres*).\n" +
          "2. **Inciting Incident (Élément Déclencheur):** Sudden event in the *passé composé* or *passé simple*; disruption of equilibrium (*Soudain, un cri strident déchira le silence nocturne*).\n" +
          "3. **Rising Action & Complications (Péripéties):** Series of obstacles, suspense, escalating tension, inner emotional conflict.\n" +
          "4. **Climax (Point Culminant):** The emotional or dramatic pinnacle of the narrative.\n" +
          "5. **Falling Action & Resolution (Dénouement):** Restoration of order or twist ending; lingering reflection.\n\n" +
          "**Descriptive Writing Techniques:**\n" +
          "- **Sensory Engagement (Les Cinq Sens):**\n" +
          "  - Visual: *Des teintes chatoyantes d'ambre et d'or*, *l'obscurité oppressante*.\n" +
          "  - Auditory: *Le crépitement du feu*, *le murmure indistinct de la foule*, *un grondement sourd*.\n" +
          "  - Olfactory & Gustatory: *L'odeur âcre de la fumée*, *le parfum entêtant de la lavande*.\n" +
          "  - Tactile: *L'écorce rugueuse du chêne*, *la brise tiède et caressante*.\n" +
          "- **Literary Tropes and Figurative Language:**\n" +
          "  - **Simile (La Comparaison):** *Elle tremblait comme une feuille.* / *Ses yeux brillaient comme deux braises ardentes.*\n" +
          "  - **Metaphor (La Métaphore):** *Le temps est un voleur insaisissable.* / *Cette ville était un gouffre insatiable.*\n" +
          "  - **Personification (La Personnification):** *Le vent hurlait sa colère à travers les branches nues.*\n" +
          "  - **Oxymoron (L'Oxymore):** *Une obscure clarté*, *un silence assourdissant*.",
        examinerTips: [
          "For descriptive writing, ensure there is static visual immersion rather than an action-heavy plot; descriptive writing should read like a camera panning across a rich canvas.",
          "In narrative essays, avoid overly complex plots with too many characters; focus on one tightly controlled incident with deep sensory atmosphere and psychological resonance."
        ],
        commonMistakes: [
          "Turning a descriptive essay into an action story where plot events overpower sensory atmosphere.",
          "Over-relying on basic adjectives like 'beau', 'bon', and 'grand' instead of evocative vocabulary like 'somptueux', 'lugubre', 'étincelant', 'immense'."
        ],
        recap: [
          "Narrative writing follows: exposition, inciting incident, complications, climax, and dénouement.",
          "Descriptive writing engages all five senses and uses figurative devices (similes, metaphors, personification).",
          "Use the imperfect for background description and passé composé/passé simple for plot events.",
          "Employ rich literary adjectives and avoid simplistic vocabulary."
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Core Thematic Lexicon across the 5 Cambridge Topic Areas",
    section: "Section 6: Thematic Vocabulary and Topic Mastery",
    topic: "Everyday Life, Health, Social Life, Local Area, Education, Careers, Environment, and Technology",
    intro:
      "Cambridge IGCSE French syllabuses (0520, 7156, and 0501) organize reading, listening, speaking, and writing tasks around 5 comprehensive topic areas. This chapter provides the core high-frequency lexicon, idiomatic collocations, and contextual vocabulary needed to discuss everyday routines, personal relationships, schooling, careers, environmental challenges, and the digital era.",
    subheadings: [
      {
        title: "Everyday Life, Food, Health and Well-being",
        body:
          "**1. Daily Routines and Home Life (La Vie Quotidienne):**\n" +
          "- Verbs of routine: *se réveiller* (to wake up), *se lever* (to get up), *se brosser les dents* (to brush teeth), *prendre une douche* (to take a shower), *s'habiller* (to get dressed), *prendre son petit-déjeuner* (to have breakfast), *partir pour l'école* (to leave for school), *rentrer à la maison* (to return home), *se coucher* (to go to bed).\n" +
          "- Domestic chores: *faire le ménage* (to do housework), *mettre / débarrasser la table* (to set / clear table), *faire la vaisselle* (to wash dishes), *passer l'aspirateur* (to vacuum), *faire la lessive* (to do laundry).\n\n" +
          "**2. Food, Gastronomy and Healthy Eating (L'Alimentation et la Santé):**\n" +
          "- Meals: *le petit-déjeuner* (breakfast), *le déjeuner* (lunch), *le goûter* (afternoon snack), *le dîner* (dinner).\n" +
          "- Nutritional vocabulary: *un régime équilibré* (a balanced diet), *les produits laitiers* (dairy products), *les matières grasses* (fats/lipids), *les glucides* (carbohydrates), *les protéines* (proteins), *les fruits et légumes de saison* (seasonal produce), *les aliments biologiques / bio* (organic food), *la nourriture industrielle / les plats préparés* (processed food/ready meals), *la malbouffe* (junk food).\n" +
          "- French culinary tradition: *le repas gastronomique des Français* (recognized by UNESCO), *déguster* (to savour/taste), *les spécialités régionales* (regional specialities: crêpes, ratatouille, boeuf bourguignon).\n\n" +
          "**3. Health, Fitness and Illnesses (La Santé et les Maladies):**\n" +
          "- Expressing pain: *avoir mal à + def. article* (*J'ai mal à la tête / au ventre / aux dents*).\n" +
          "- Symptoms: *avoir de la fièvre* (to have a fever), *tousser* (to cough), *éternuer* (to sneeze), *avoir des vertiges* (to feel dizzy), *être enrhumé(e)* (to have a cold), *une ordonnance* (a prescription), *des comprimés / des médicaments* (tablets/medicines).\n" +
          "- Well-being: *garder la forme* (to stay fit), *faire de l'exercice régulièrement* (to exercise regularly), *gérer le stress* (to manage stress), *le manque de sommeil* (lack of sleep).",
        examinerTips: [
          "Use reflexive verbs accurately when discussing daily routines in oral exams (e.g. 'je me lève à sept heures et je m'habille immédiatement').",
          "When asked about healthy eating, use nuanced verbs like 'consommer avec modération' (consume in moderation) and 'éviter les excès de sucre et de sel'."
        ],
        commonMistakes: [
          "Writing 'j'ai mal la tête' instead of 'j'ai mal **à la** tête'.",
          "Confusing 'le repas' (the meal) with 'la nourriture' (the food) or 'l'alimentation' (diet/nutrition)."
        ],
        recap: [
          "Master reflexive daily routine verbs and domestic chore collocations.",
          "Describe diets with precision: un régime équilibré, les produits bio, la malbouffe.",
          "Express symptoms accurately using 'avoir mal à...' and medical vocabulary."
        ]
      },
      {
        title: "Personal, Social and Local Environment",
        body:
          "**1. Family, Friendships and Relationships (La Famille et les Amis):**\n" +
          "- Family structures: *la famille nucléaire* (nuclear family), *la famille monoparentale* (single-parent family), *la famille recomposée* (blended family), *les membres de la fratrie* (siblings).\n" +
          "- Interpersonal relationships: *s'entendre bien avec* (to get on well with — e.g. *Je m'entends à merveille avec mon frère*), *se disputer avec* (to argue with), *avoir des points communs* (to have common interests), *faire confiance à* (to trust), *partager des secrets* (to share secrets), *un ami fidèle / loyal* (a loyal friend).\n\n" +
          "**2. Housing and Living Spaces (Le Logement):**\n" +
          "- Dwelling types: *une maison individuelle* (detached house), *une maison mitoyenne* (semi-detached / terraced house), *un appartement au troisième étage* (a third-floor flat), *un studio en centre-ville* (a downtown studio).\n" +
          "- Rooms: *le salon / la salle de séjour* (living room), *la cuisine équipée* (fitted kitchen), *la chambre à coucher* (bedroom), *la salle de bains* (bathroom), *le grenier* (attic), *la cave / le sous-sol* (basement), *un jardin arboré* (a tree-lined garden).\n\n" +
          "**3. Local Community, Town and Countryside (La Ville et la Campagne):**\n" +
          "- Urban amenities: *le réseau de transports en commun* (public transport network), *les pistes cyclables* (bike lanes), *le centre commercial* (shopping mall), *les installations sportives* (sports facilities), *la bibliothèque municipale* (public library), *l'animation nocturne* (nightlife).\n" +
          "- Rural environment: *la tranquillité / le calme* (peace and quiet), *le grand air* (fresh air), *les espaces verts* (green spaces), *le paysage champêtre* (rural landscape).\n" +
          "- Evaluating living environments:\n" +
          "  - Pros of city: *Tout est à portée de main, il y a une abondance d'activités culturelles et de commerces.*\n" +
          "  - Cons of city: *La pollution atmosphérique, les embouteillages incessants, le coût élevé de la vie et le bruit.*\n" +
          "  - Pros of countryside: *Le calme absolu, le contact avec la nature, le rythme de vie paisible.*\n" +
          "  - Cons of countryside: *L'isolement géographique, le manque de transports, l'éloignement des services médicaux et des écoles.*",
        examinerTips: [
          "Use the comparative when contrasting town and country living (e.g. 'La vie à la campagne est nettement plus calme que la vie urbaine, mais les transports y sont beaucoup moins fréquents').",
          "Remember that 'visiter' is strictly for places, monuments, and cities; for people, use 'rendre visite à quelqu'un' (*J'ai rendu visite à mes grands-parents*, NOT *j'ai visité mes grands-parents*)."
        ],
        commonMistakes: [
          "Using 'visiter mes amis' instead of 'rendre visite à mes amis'.",
          "Describing a home using 'il y a' repeatedly instead of varying with 'ma maison comprend', 'se compose de', 'dispose de'."
        ],
        recap: [
          "Express relationships using 's'entendre bien avec', 'se disputer avec', and 'faire confiance à'.",
          "Rendre visite à is used for people; visiter is used for places.",
          "Compare urban and rural life using comparative structures and balanced pros and cons."
        ]
      },
      {
        title: "Education, Careers, Global Issues and Technology",
        body:
          "**1. School, Education and Higher Studies (L'Éducation et les Études):**\n" +
          "- School stages in France: *l'école primaire* (primary school, 6–11 yrs), *le collège* (lower secondary, 11–15 yrs, *sixième* to *troisième*), *le lycée* (upper secondary, 15–18 yrs, *seconde* to *terminale*), *le baccalauréat (le bac)* (school leaving diploma), *l'université / les grandes écoles* (higher education).\n" +
          "- School subjects: *les langues vivantes* (modern foreign languages), *les mathématiques*, *la physique-chimie*, *les sciences de la vie et de la Terre (SVT)* (biology/geology), *l'histoire-géographie*, *la philosophie*.\n" +
          "- School life: *l'emploi du temps* (timetable), *les devoirs* (homework), *un contrôle / une épreuve* (test/exam), *la cour de récréation* (playground), *la cantine* (school cafeteria), *le règlement scolaire* (school rules), *le port de l'uniforme* (wearing school uniform).\n\n" +
          "**2. Future Ambitions, Employment and Careers (Le Monde du Travail):**\n" +
          "- Employment vocabulary: *un emploi / un travail / un boulot* (job), *un stage en entreprise* (work placement / internship), *postuler un emploi* (to apply for a job), *un CV et une lettre de motivation* (resume and cover letter), *un entretien d'embauche* (job interview), *le salaire / la rémunération* (salary/pay), *les débouchés* (career prospects), *le télétravail* (remote work).\n" +
          "- Professional goals: *Dans l'avenir, j'envisage de devenir médecin car je souhaite venir en aide aux malades.* / *Mon rêve serait de travailler dans l'ingénierie spatiale.*\n\n" +
          "**3. The Environment and Climate Change (L'Environnement et le Climat):**\n" +
          "- Ecological threats: *le réchauffement climatique* (global warming), *l'effet de serre* (greenhouse effect), *la fonte des glaciers* (melting of glaciers), *la montée des eaux* (sea level rise), *la déforestation* (deforestation), *la pollution plastique des océans* (marine plastic pollution), *la disparition des espèces menacées* (extinction of endangered species).\n" +
          "- Sustainable solutions: *le tri sélectif et le recyclage* (waste sorting and recycling), *les énergies renouvelables* (solar, wind, hydroelectric), *les transports durables / les véhicules électriques* (sustainable transport), *réduire son empreinte carbone* (to reduce one's carbon footprint), *consommer de manière responsable* (to consume responsibly).\n\n" +
          "**4. Digital Technology and Social Media (La Technologie et les Réseaux):**\n" +
          "- Digital devices and actions: *un smartphone / un téléphone portable*, *une tablette tactile*, *télécharger une application* (to download an app), *mettre en ligne / publier* (to upload/post), *sauvegarder ses données* (to back up data), *l'intelligence artificielle (IA)* (artificial intelligence).\n" +
          "- Benefits: *faciliter la communication instantanée*, *accéder à une source inépuisable de connaissances*, *collaborer à distance*.\n" +
          "- Dangers: *la cyberintimidation / le cyberharcèlement* (cyberbullying), *la dépendance aux écrans* (screen addiction), *la propagation de fausses nouvelles (infox)* (fake news), *la sédentarité* (sedentary lifestyle).",
        examinerTips: [
          "In environmental essays, use modal verbs with the conditional to suggest policy recommendations: 'Les gouvernements devraient investir massivement dans les énergies propres et interdire les plastiques à usage unique'.",
          "Distinguish clearly between 'travailler' (verb: to work) and 'le travail' (noun: work/job); never say 'j'ai beaucoup de travailler'."
        ],
        commonMistakes: [
          "Using 'les énergies renouvelables' as singular; it is feminine plural.",
          "Confusing 'le collège' (middle school for 11–15 year olds) with university college."
        ],
        recap: [
          "Understand French educational milestones: collège, lycée, baccalauréat.",
          "Describe career ambitions using 'envisager de + inf' and 'un entretien d'embauche'.",
          "Analyze environmental challenges: réchauffement climatique, énergies renouvelables, empreinte carbone.",
          "Weigh technological impacts: communication vs cyberharcèlement and screen addiction."
        ]
      }
    ]
  },
  {
    number: 7,
    title: "Cultural Contexts, The Francophone World and Stylistic Register",
    section: "Section 7: Francophone Culture, Sociolinguistics and Idiomatic Fluency",
    topic: "La Francophonie, Language Registers (Argot to Soutenu), and Authentic Idiomatic Expressions",
    intro:
      "French is spoken by over 320 million people across 5 continents. Understanding the geographical, cultural, and linguistic breadth of La Francophonie—along with commanding nuanced stylistic registers from colloquial French (*familier*) to formal academic French (*soutenu*) and wielding authentic idiomatic expressions—elevates a candidate from competent learner to master communicator.",
    subheadings: [
      {
        title: "The Francophone World (La Francophonie)",
        body:
          "**1. What is La Francophonie?**\n" +
          "The Organisation Internationale de la Francophonie (OIF) unites 88 member states and governments sharing the French language and universal values of cultural diversity, democracy, and education.\n\n" +
          "**2. Key Francophone Regions and Cultural Specificities:**\n" +
          "- **Europe:**\n" +
          "  - **Belgium (Wallonia & Brussels):** Number system uses *septante* (70) and *nonante* (90) instead of *soixante-dix* and *quatre-vingt-dix*; meals called *déjeuner* (breakfast), *dîner* (lunch), and *souper* (dinner).\n" +
          "  - **Switzerland (Suisse romande):** Also uses *septante* (70), *huitante* (80), and *nonante* (90).\n" +
          "- **North America (Quebec & Canada):**\n" +
          "  - French is the sole official language of the province of Quebec (*Loi 101*).\n" +
          "  - Distinct vocabulary: *le traversier* (ferry), *le char* (car), *le magasinage* (shopping), *la fin de semaine* (weekend instead of le week-end), *le courriel* (email).\n" +
          "- **West & Central Africa:**\n" +
          "  - Countries such as **Senegal, Ivory Coast, Cameroon, Democratic Republic of Congo**.\n" +
          "  - French serves as an official language of administration, higher education, and inter-ethnic commerce alongside national indigenous languages (e.g. Wolof in Senegal, Lingala in DRC).\n" +
          "  - Vibrant literary and cinematic heritage (e.g. Léopold Sédar Senghor, pioneer of the *Négritude* movement).\n" +
          "- **The Maghreb (North Africa):**\n" +
          "  - **Morocco, Algeria, Tunisia:** French holds a privileged non-official status (*langue véhiculaire*) in business, science, medicine, and diplomacy, interweaving with Arabic and Berber.\n" +
          "- **The Caribbean & Indian Ocean (DOM-TOM / DROM-COM):**\n" +
          "  - **Guadeloupe, Martinique, Réunion, Mayotte:** French overseas departments where standard French coexists with vibrant French-lexifier Creoles.",
        examinerTips: [
          "Referring to Francophone cultures beyond mainland France in oral or written exams (e.g. referencing Quebec or Senegalese traditions) displays sophisticated intercultural awareness that impresses senior examiners.",
          "Be aware of numbering variations in Belgium and Switzerland (septante, nonante) in listening comprehension recordings."
        ],
        commonMistakes: [
          "Assuming French is spoken only in France; Africa hosts the fastest-growing French-speaking population in the world.",
          "Using Quebec slang in formal French exams; standard French orthography and vocabulary remain the grading baseline."
        ],
        recap: [
          "La Francophonie encompasses 88 states across Europe, North America, Africa, the Caribbean, and Indian Ocean.",
          "Belgium and Switzerland use septante (70) and nonante (90); Quebec uses fin de semaine and char.",
          "In West/Central Africa and the Maghreb, French is pivotal in administration, business, and literature."
        ]
      },
      {
        title: "Register Control: Argot, Familier, Courant and Soutenu",
        body:
          "French possesses clearly demarcated linguistic registers (*les registres de langue*). Choosing the appropriate register for a given communicative task is essential for authenticity and examination success.\n\n" +
          "**1. Le Registre Familier / Populaire (Colloquial / Slang):**\n" +
          "- Characteristics: Grammatical omissions (dropping *ne* in negation: *'Je sais pas'* instead of *'Je ne sais pas'*), truncation of words (*le prof*, *le bac*, *la télé*, *l'apéro*), colloquial idioms, and verlan (back-slang: *ouf* for fou, *meuf* for femme, *keum* for mec).\n" +
          "- Usage: Informal chats with close peers; **NEVER acceptable in formal essays or summary writing**.\n\n" +
          "**2. Le Registre Courant (Standard / Everyday Language):**\n" +
          "- Characteristics: Complete grammatical sentences, correct negation (*ne... pas*), standard vocabulary without pretentious or vulgar terms.\n" +
          "- Usage: Classroom interactions, newspaper journalism, Cambridge Paper 3 oral exams, and Paper 4 letters/emails.\n\n" +
          "**3. Le Registre Soutenu (Formal / Academic / Literary):**\n" +
          "- Characteristics: Complex subordinating syntax, inversion of subject-verb in questions, rare tenses (passé simple, subjonctif imparfait), nominalization, refined vocabulary.\n" +
          "- Usage: Cambridge 0501 First Language dissertations, official administrative letters, literary essays.\n\n" +
          "**Comparative Register Equivalence Table:**\n" +
          "- *Familier / Argot:* **un pote / un mec** | *Courant:* **un ami** | *Soutenu:* **un compagnon / un confrère**\n" +
          "- *Familier / Argot:* **le boulot / le taf** | *Courant:* **le travail / l'emploi** | *Soutenu:* **la profession / la vocation**\n" +
          "- *Familier / Argot:* **la bagnole / la caisse** | *Courant:* **la voiture** | *Soutenu:* **le véhicule / l'automobile**\n" +
          "- *Familier / Argot:* **bouffer / la bouffe** | *Courant:* **manger / la nourriture** | *Soutenu:* **se restaurer / les mets**\n" +
          "- *Familier / Argot:* **les fringues** | *Courant:* **les vêtements** | *Soutenu:* **les habits / la tenue vestimentaire**\n" +
          "- *Familier / Argot:* **avoir la trouille** | *Courant:* **avoir peur** | *Soutenu:* **éprouver de l'appréhension**\n" +
          "- *Familier / Argot:* **piquer / faucher** | *Courant:* **voler** | *Soutenu:* **dérober / subtiliser**",
        examinerTips: [
          "Never drop the 'ne' in written exams (writing 'j'ai pas' instead of 'je n'ai pas' is penalized as a grammatical error even if common in casual speech).",
          "Aim for 'registre courant' in 0520/7156 and 'registre soutenu' in 0501 compositions."
        ],
        commonMistakes: [
          "Using slang words like 'boulot', 'fringues', or 'bouffer' in formal examination compositions.",
          "Using 'tu' and colloquial phrasing in formal letters addressed to headteachers, employers, or mayors."
        ],
        recap: [
          "Master three registers: familier (casual speech), courant (standard everyday communication), and soutenu (formal academic writing).",
          "Always maintain 'ne' in written negation.",
          "Use register equivalence tables to elevate informal vocabulary to formal alternatives."
        ]
      },
      {
        title: "Idiomatic French Expressions and Proverbial Fluency",
        body:
          "Idiomatic expressions (*les expressions idiomatiques*) cannot be translated word-for-word into English. Incorporating authentic idioms appropriately in speech and essays immediately elevates a candidate into the highest grade boundary.\n\n" +
          "**Top 18 Authentic French Idioms for Cambridge Examinations:**\n" +
          "1. **Avoir le cafard:** To feel down / depressed (*Quand il pleut, j'ai souvent le cafard*).\n" +
          "2. **Coûter les yeux de la tête:** To cost an arm and a leg / to be exorbitant (*Cette voiture de sport coûte les yeux de la tête*).\n" +
          "3. **Poser un lapin à quelqu'un:** To stand someone up (*J'ai attendu Thomas une heure au café, mais il m'a posé un lapin*).\n" +
          "4. **Mettre les points sur les i:** To clarify things firmly / to set the record straight (*Il est temps de mettre les points sur les i*).\n" +
          "5. **Avoir d'autres chats à fouetter:** To have bigger fish to fry / other urgent matters (*Je ne peux pas m'en occuper maintenant, j'ai d'autres chats à fouetter*).\n" +
          "6. **Avoir le coup de foudre:** To fall in love at first sight (*Dès qu'il l'a vue, ce fut le coup de foudre*).\n" +
          "7. **Être dans de beaux draps:** To be in a terrible mess / hot water (*J'ai perdu mes clés et mon portefeuille, je suis dans de beaux draps*).\n" +
          "8. **Faire d'une pierre deux coups:** To kill two birds with one stone (*En faisant du vélo jusqu'à l'école, je fais de l'exercice et je protège l'environnement : je fais d'une pierre deux coups*).\n" +
          "9. **Se creuser la tête:** To rack one's brains (*Je me suis creusé la tête pendant tout l'examen de maths*).\n" +
          "10. **Avoir du pain sur la planche:** To have a lot on one's plate / much work to do (*Avec les examens qui approchent, nous avons du pain sur la planche*).\n" +
          "11. **Raconter des salades:** To tell tall tales / lies (*Ne le crois pas, il raconte toujours des salades*).\n" +
          "12. **Tomber dans les pommes:** To faint / pass out (*Il faisait tellement chaud dans la salle qu'une élève est tombée dans les pommes*).\n" +
          "13. **Donner un coup de main:** To lend a helping hand (*Mes voisins m'ont donné un coup de main pour déménager*).\n" +
          "14. **Prendre ses jambes à son cou:** To take to one's heels / run away rapidly (*En voyant le chien enragé, il a pris ses jambes à son cou*).\n" +
          "15. **Ne pas être dans son assiette:** To not feel quite oneself / under the weather (*Aujourd'hui, je ne suis pas dans mon assiette*).\n\n" +
          "**High-Value French Proverbs (Les Proverbes):**\n" +
          "- *Quand on veut, on peut* (Where there's a will, there's a way — resilience in studies).\n" +
          "- *Il ne faut pas mettre la charrue avant les bœufs* (Don't put the cart before the horse — planning methodology).\n" +
          "- *Mieux vaut prévenir que guérir* (Prevention is better than cure — health and environmental preservation).\n" +
          "- *L'habit ne fait pas le moine* (Don't judge a book by its cover — social perceptions).\n" +
          "- *Petit à petit, l'oiseau fait son nid* (Little by little, one achieves great things — gradual academic revision).",
        examinerTips: [
          "Deploy idioms judiciously; 1 or 2 well-placed idioms per essay feel natural, whereas cramming 10 idioms into a short paragraph feels forced and artificial.",
          "Ensure idioms match the surrounding register; 'coûter les yeux de la tête' fits personal blogs or spoken role-plays, while 'mieux vaut prévenir que guérir' fits formal environmental essays."
        ],
        commonMistakes: [
          "Translating English idioms literally into French (e.g. translating 'it's raining cats and dogs' literally instead of using 'il pleut des cordes').",
          "Mixing up prepositions in idioms (e.g. saying 'avoir mal de tête' instead of 'avoir mal à la tête', or 'donner la main' instead of 'donner un coup de main')."
        ],
        recap: [
          "Authentic idioms demonstrate natural fluency: avoir le cafard, coûter les yeux de la tête, faire d'une pierre deux coups, avoir du pain sur la planche.",
          "Use famous French proverbs to add philosophical weight: Mieux vaut prévenir que guérir; Quand on veut, on peut.",
          "Deploy idioms naturally and avoid literal word-for-word translations from English."
        ]
      }
    ]
  }
];
