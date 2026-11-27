import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Literature in English (9–1) (0992) / (0475) 2028–2030 Syllabus Notes
 * Covers Poetry, Prose, Drama, Unseen Analysis, Thematic Essays, and Exam Technique.
 * Strictly text-only with zero figures.
 */
export const LITERATURE_IN_ENGLISH: SubjectNotes = {
  id: "literature-in-english",
  name: "Literature in English (9–1)",
  code: "0992",
  color: "bg-fuchsia-600",
  chapters: [
    {
      number: 1,
      title: "Critical Analysis of Poetry (Paper 1 Section A)",
      section: "Set Texts: Poetry and Prose",
      topic: "Poetic Form, Meter, Figurative Language, Sound Devices, and Tone",
      intro:
        "Poetry analysis requires close critical reading of how poets craft form, meter, rhyme, figurative imagery, sound devices, and tone to convey complex emotional and thematic meanings. Success in Cambridge Literature requires moving beyond feature-spotting to analyzing the precise effect of literary devices on the reader.",
      subheadings: [
        {
          title: "Poetic Form, Meter, and Structural Craft",
          body:
            "**1. Traditional and Contemporary Forms:**\n" +
            "- **Sonnet (14 lines in iambic pentameter):** Petrarchan (Octave abbaabba presenting a conflict + Volta at line 9 + Sestet cdecde resolving it) vs. Shakespearean (three quatrains abab cdcd efef + heroic rhyming couplet gg delivering a punchy conclusion).\n" +
            "- **Ballad:** Narrative verse in 4-line stanzas (quatrains) with alternating lines of four and three stresses (abcb or abab), creating a rhythmic, song-like cadence.\n" +
            "- **Dramatic Monologue:** A single fictional speaker revealing their inner psychology and moral flaws to a silent listener (e.g. Robert Browning).\n" +
            "- **Free Verse & Blank Verse:** Blank verse is unrhymed iambic pentameter mirroring natural spoken English; Free verse abandons regular meter and rhyme to convey emotional spontaneity.\n\n" +
            "**2. Structural Mechanics:**\n" +
            "- **Enjambment:** Running a sentence over a line break without terminal punctuation, accelerating rhythm, mirroring breathless excitement or chaotic movement.\n" +
            "- **Caesura:** A sharp pause within a poetic line (; or . or —), disrupting the cadence to create hesitation, suspense, or shock.\n" +
            "- **End-Stopping:** Punctuation at the line end creating calm, deliberate finality.",
          examinerTips: [
            "Never feature-spot without analysis; stating 'there is a caesura in line 4' earns zero marks unless you explain how it dramatizes the speaker's sudden hesitation.",
            "Discuss the poem's trajectory from opening stanza to closing lines to demonstrate holistic understanding."
          ],
          commonMistakes: [
            "Confusing Shakespearean and Petrarchan sonnet structures.",
            "Treating rhyme schemes as purely decorative rather than analyzing how rhymed words reinforce thematic connections."
          ],
          recap: [
            "Sonnets turn at the volta; ballads tell rhythmic tales.",
            "Enjambment accelerates; caesura creates dramatic pauses.",
            "Always link structural devices to emotional effects."
          ]
        },
        {
          title: "Imagery, Auditory Devices, and Shifts in Tone",
          body:
            "**1. Figurative Imagery:**\n" +
            "- **Metaphor and Simile:** Establishing direct identity (*'Life is a broken-winged bird'*) or comparative resemblance (*'like a patient etherized upon a table'*).\n" +
            "- **Personification & Anthropomorphism:** Imbuing inanimate forces with human volition or emotional temperament.\n" +
            "- **Synesthesia & Tactile Imagery:** Blending sensory modalities (e.g. 'cold bright light') to evoke vivid visceral responses.\n\n" +
            "**2. Sound and Auditory Texture:**\n" +
            "- **Alliteration:** Repeating initial consonants (e.g. harsh plosives *b, p, d, t* vs. soft sibilant *s, sh* creating hushed menace).\n" +
            "- **Assonance and Consonance:** Internal vowel repetition adding melodic resonance; internal consonant repetition reinforcing texture.\n" +
            "- **Onomatopoeia:** Words echoing real acoustic phenomena (*hiss, whisper, clang*).\n\n" +
            "**3. Tone and Speaker Persona:**\n" +
            "- Tracking changes in vocal register: melancholic, indignant, satirical, celebratory, or resigned.",
          examinerTips: [
            "Quote concise snippets (1–3 words) embedded directly into your sentences rather than copying multi-line blocks.",
            "Analyze the connotations of specific word choices (diction) rather than merely summarizing the story of the poem."
          ],
          commonMistakes: [
            "Confusing the speaker of the poem with the biographical poet.",
            "Calling every repeated 's' sound 'alliteration'; it is specifically 'sibilance'."
          ],
          recap: [
            "Examine imagery through sensory connotations.",
            "Plosives create harshness; sibilance creates whisper or menace.",
            "Track shifts in the speaker's emotional register."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Prose Fiction Analysis (Paper 1 Section B)",
      section: "Set Texts: Poetry and Prose",
      topic: "Narrative Perspective, Characterisation, Setting, Thematic Conflict, and Symbolism",
      intro:
        "Prose fiction demands close textual exploration of narrative craft, character evolution, atmospheric setting, and underlying social themes. Whether writing on a passage-based question or an essay question, candidates must sustain focused analytical engagement with the author's literary methods.",
      subheadings: [
        {
          title: "Narrative Voice, Perspective, and Character Arc",
          body:
            "**1. Narrative Points of View:**\n" +
            "- **First-Person Protagonist/Witness:** Intimate subjective view, creating immediate empathy but bounded by unreliable memory and personal bias.\n" +
            "- **Third-Person Omniscient:** All-knowing narrator revealing multiple characters' interior thoughts and external historical context.\n" +
            "- **Third-Person Limited (Free Indirect Discourse):** Filtering events through one character's perspective while maintaining third-person pronouns, seamlessly blending narrator and character thought.\n\n" +
            "**2. Methods of Characterisation:**\n" +
            "- Direct exposition vs. indirect revelation through dialogue, habitual gestures, physical contrast, and moral choices under pressure.\n" +
            "- **Protagonist vs. Antagonist:** Foils whose contrasting values highlight the text's central ethical dilemma.",
          examinerTips: [
            "Consider whether a first-person narrator is reliable or self-delusional.",
            "Track character transformation (bildungsroman) from opening innocence to climactic realization."
          ],
          commonMistakes: [
            "Retelling the plot instead of analyzing the author's construction of character.",
            "Writing about characters as if they were real living people rather than literary constructs crafted by a writer."
          ],
          recap: [
            "Identify narrative voice and degree of reliability.",
            "Examine character revelation through action and dialogue.",
            "Analyze character foils to illuminate core themes."
          ]
        },
        {
          title: "Setting as Symbolism and Thematic Conflict",
          body:
            "**1. Functions of Setting:**\n" +
            "- Setting is rarely mere backdrop; it acts as an active symbolic force mirroring psychological states (**pathetic fallacy**).\n" +
            "- Contrasting settings (e.g. oppressive domestic interiors vs. wild uncultivated moors) symbolize societal confinement versus spiritual freedom.\n\n" +
            "**2. Motif and Recurring Symbolism:**\n" +
            "- Tracing recurring objects, colors, weather patterns, or physical barriers that carry layered figurative weight throughout the novel.\n\n" +
            "**3. Central Thematic Conflicts:**\n" +
            "- Individual freedom vs. societal expectation, class mobility vs. entrenched privilege, innocence vs. harsh experience.",
          examinerTips: [
            "In passage-based questions, explore how the author uses descriptive setting to establish atmospheric tension in the opening lines.",
            "Connect local symbolic motifs to the overarching moral or political message of the novel."
          ],
          commonMistakes: [
            "Dismissing descriptive paragraphs as unimportant filler.",
            "Failing to tie physical settings to internal character crises."
          ],
          recap: [
            "Settings reflect psychological and ideological tensions.",
            "Pathetic fallacy aligns weather with character emotional crises.",
            "Motifs unify the novel's thematic architecture."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Dramatic Texts and Performance (Paper 2 Drama)",
      section: "Set Texts: Drama",
      topic: "Stagecraft, Dramatic Irony, Subtext, Soliloquy, and Performance Context",
      intro:
        "Plays are written to be seen and heard in performance, not read in silent isolation. Studying drama requires visualising stage movement, pacing, voice inflection, lighting, props, and the dynamic tension between performer and audience.",
      subheadings: [
        {
          title: "Theatrical Devices: Dramatic Irony, Soliloquy, and Aside",
          body:
            "**1. Core Theatrical Mechanisms:**\n" +
            "- **Dramatic Irony:** When the audience knows critical information that characters on stage are ignorant of, producing intense suspense, foreboding, or dark humor.\n" +
            "- **Soliloquy:** A character speaking their private thoughts aloud while alone on stage, revealing hidden motives, moral conflict, or deceitful plots (e.g. Shakespearean tragedies).\n" +
            "- **Aside:** A brief remark spoken directly to the audience or to one character, unheard by others on stage, creating intimacy and complicity.\n\n" +
            "**2. Tension and Pacing:**\n" +
            "- Managing conflict through stichomythia (rapid alternating one-line dialogue), pregnant silences, explosive confrontations, and anticlimax.",
          examinerTips: [
            "Always discuss the audience's emotional and intellectual reaction to dramatic irony.",
            "Refer explicitly to performance elements: voice pitch, pauses, physical positioning (proxemics), and facial expression."
          ],
          commonMistakes: [
            "Analyzing a drama script as if it were a novel, omitting staging and audience response.",
            "Calling a speech a soliloquy when other characters are present on stage (that is a monologue)."
          ],
          recap: [
            "Dramatic irony exploits knowledge gaps between audience and characters.",
            "Soliloquies reveal raw psychological subtext.",
            "Stage dynamics depend on dialogue pacing and proxemics."
          ]
        },
        {
          title: "Stagecraft, Proxemics, and Visual Symbolism",
          body:
            "**1. Proxemics and Spatial Relationships:**\n" +
            "- The physical distance between characters on stage communicates dominance, emotional estrangement, intimacy, or intimidation.\n" +
            "- Levels: elevated positions (balcony, rostra) represent power, moral superiority, or divine judgment.\n\n" +
            "**2. Props and Costume as Symbolic Anchors:**\n" +
            "- Hand props (weapons, letters, tokens of affection) carry immense dramatic weight when passed, dropped, or destroyed.\n" +
            "- Costume changes mark psychological transformations or deceitful disguise.\n\n" +
            "**3. Stage Directions:**\n" +
            "- Authors (e.g. Arthur Miller, J.B. Priestley) use detailed stage directions to prescribe lighting (e.g. 'pink and intimate' shifting to 'brighter and harder'), sound effects, and character entrances.",
          examinerTips: [
            "In passage-based questions, pay equal attention to stage directions and dialogue.",
            "Explain how lighting shifts alter the psychological mood in the theatre auditorium."
          ],
          commonMistakes: [
            "Ignoring stage directions entirely when analyzing dramatic passages.",
            "Failing to explain how an actor would deliver a line to convey subtext."
          ],
          recap: [
            "Proxemics visualizes power and emotional distance.",
            "Props and costume changes anchor thematic transformations.",
            "Stage directions dictate lighting, pace, and symbolic atmosphere."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Unseen Text Analysis (Paper 3 / Paper 4)",
      section: "Unseen Texts",
      topic: "Unseen Poetry and Prose, First-Impression Reading, Annotation, and Rapid Analysis",
      intro:
        "The Unseen paper assesses pure literary critical ability. Without the benefit of prior revision notes, candidates must read, decode, and analytically critique an unfamiliar poem or prose excerpt within strict time limits.",
      subheadings: [
        {
          title: "First-Reading Strategies and Active Annotation",
          body:
            "**1. The 15-Minute Unseen Method:**\n" +
            "- **Reading 1 (Global Gist):** Read straight through without writing to grasp the basic narrative situation, speaker, and emotional arc.\n" +
            "- **Reading 2 (Guiding Question Focus):** Re-read with the exam prompt in mind, highlighting pivotal lines, surprising word choices, and shifts in feeling.\n" +
            "- **Reading 3 (Form & Craft):** Note structural turns (voltas, stanza transitions, narrative pacing shifts) and sound effects.\n\n" +
            "**2. Active Annotation Coding:**\n" +
            "- Underline high-potency verbs and adjectives.\n" +
            "- Mark tonal shifts with arrows and marginal emotion labels (e.g. *nostalgia -> dread -> acceptance*).",
          examinerTips: [
            "The exam question always contains a guiding prompt (e.g. 'How does the writer vividly convey the speaker's experience of loneliness?'). Make this the backbone of your thesis.",
            "Write a brief 3-point plan before drafting your response."
          ],
          commonMistakes: [
            "Panicking and writing immediately without spending 10–15 minutes planning and annotating.",
            "Paraphrasing the story of the poem line by line instead of grouping points by analytical argument."
          ],
          recap: [
            "Read three times: gist, question focus, and detailed craft.",
            "Annotate imagery, tone shifts, and diction.",
            "Structure your essay around the guiding question prompt."
          ]
        },
        {
          title: "Structuring the Unseen Essay",
          body:
            "**1. High-Scoring Essay Architecture:**\n" +
            "- **Introduction:** One clear sentence defining the text's central concern, the speaker/narrator's perspective, and the overall progression of tone.\n" +
            "- **Body Paragraphs (3–4 Chronological or Thematic Sections):** Point -> Evidence (embedded quote) -> Analysis of word level connotations -> Structural/sound craft -> Audience effect.\n" +
            "- **Conclusion:** Synthesize how the opening tension is resolved or magnified by the final lines without merely repeating previous points.",
          examinerTips: [
            "Explore ambiguity; high-band candidates recognize that literary texts often contain conflicting emotions (e.g. love mixed with resentment).",
            "Keep quotations short: 2–5 words integrated syntactically into your own sentences."
          ],
          commonMistakes: [
            "Writing a lengthy biographical or historical introduction for an unseen text.",
            "Claiming the writer 'rhymes to make the poem sound musical' (vacuous comment)."
          ],
          recap: [
            "Craft a concise thesis defining the text's emotional trajectory.",
            "Follow the PEEL structure with embedded micro-quotes.",
            "Acknowledge nuanced emotional ambiguities in the conclusion."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Thematic Essay Writing & Critical Arguments",
      section: "Essay Construction",
      topic: "Thesis Statements, Evidence Integration, Critical Vocabulary, and Evaluative Conclusions",
      intro:
        "General essay questions on set texts require sustained, coherent argument rather than passage-dependent line-by-line reading. You must select relevant moments from throughout the entire work to construct an insightful literary critique.",
      subheadings: [
        {
          title: "Formulating a Literary Thesis and Evidence Selection",
          body:
            "**1. Developing a Complex Thesis:**\n" +
            "- Move beyond simple agreement with the prompt. Add nuance: *'While on the surface Macbeth is driven by external ambition, Shakespeare presents his downfall as rooted primarily in psychological guilt and moral paralysis.'*\n\n" +
            "**2. Selective Textual Evidence:**\n" +
            "- Choose 4–6 key scenes/moments from across the text that illustrate the progression of your thesis.\n" +
            "- Commit key quotes to memory (aim for 20–30 high-impact short quotes per set text).",
          examinerTips: [
            "Spend 5 minutes planning the progression of your argument across beginning, middle, and end of the text.",
            "Ensure each body paragraph begins with a strong conceptual topic sentence, not a plot summary statement."
          ],
          commonMistakes: [
            "Selecting evidence only from the first act or opening chapters.",
            "Quoting huge 4-line blocks of text that consume writing time without adding analytical value."
          ],
          recap: [
            "Formulate a nuanced, multi-dimensional thesis.",
            "Select evidence spanning the text's entire narrative arc.",
            "Open body paragraphs with conceptual argument statements."
          ]
        },
        {
          title: "Critical Vocabulary and Nuanced Evaluation",
          body:
            "**1. Analytical Literary Verbs:**\n" +
            "- *Exposes, subverts, foregrounds, encapsulates, crystallizes, epitomizes, interrogates, foreshadows, heightens, mirrors*.\n\n" +
            "**2. Evaluative Words and Transition Signposts:**\n" +
            "- *Inevitably, profoundly, ostensibly, subtly, paradoxically, fundamentally, poignant, evocative*.\n\n" +
            "**3. Concluding with Insight:**\n" +
            "- Connect the text's internal conflicts to the universal human condition or the author's philosophical worldview.",
          examinerTips: [
            "Use phrases like 'The author invites the reader to interrogate...' rather than 'The author says...'.",
            "Proofread for correct set text character spellings and capitalization of titles."
          ],
          commonMistakes: [
            "Ending the essay with 'In conclusion, as I have said above...' followed by verbatim repetition.",
            "Using casual modern colloquialisms when evaluating classic texts."
          ],
          recap: [
            "Elevate analytical vocabulary with precise literary verbs.",
            "Embed micro-quotes smoothly into critical prose.",
            "Conclude with universal thematic synthesis."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Exam Mastery, Timings & Assessment Objectives",
      section: "Examination Strategy",
      topic: "Assessment Objectives (AO1–AO4), Time Management, Rubrics, and Grade 9 Criteria",
      intro:
        "Understanding how Cambridge examiners grade your responses is the ultimate key to achieving Grade 9 (A*). This chapter breaks down Assessment Objectives AO1 to AO4, timing breakdowns, and common pitfalls to avoid under examination conditions.",
      subheadings: [
        {
          title: "Deconstructing Cambridge Assessment Objectives (AO1–AO4)",
          body:
            "**1. The Four Assessment Objectives:**\n" +
            "- **AO1 (Knowledge & Understanding):** Demonstrating comprehensive textual familiarity through accurate textual detail, recall, and intelligent context.\n" +
            "- **AO2 (Analysis of Language, Structure, & Form):** Dissecting the effects of writer's craft, literary devices, verse form, staging, and stylistic choices.\n" +
            "- **AO3 (Informed Personal Response):** Articulating an original, critical, and independent evaluation of texts with supporting reasoning.\n" +
            "- **AO4 (Contextual Appreciation):** Understanding how historical, cultural, and social contexts shape meaning and reception.",
          examinerTips: [
            "Grade 9 essays integrate AO1, AO2, and AO3 seamlessly in every paragraph; do not write separate 'language' or 'plot' sections.",
            "Use 'informed personal response' to present unique interpretations supported by textual evidence."
          ],
          commonMistakes: [
            "Dumping biographical history that is disconnected from the specific question asked.",
            "Omitting language analysis in general essay questions."
          ],
          recap: [
            "AO1 is textual recall; AO2 is craft analysis; AO3 is personal critical response.",
            "Weave all objectives together in every body paragraph.",
            "Avoid irrelevant biographical or historical context."
          ]
        },
        {
          title: "Exam Timing Strategy and Final Checklist",
          body:
            "**1. Time Allocation per Question (Paper 1 & Paper 2 - 45 mins each):**\n" +
            "- 5 mins: Read question, formulate thesis, plan 3–4 paragraph trajectory.\n" +
            "- 35 mins: Focused, analytical drafting with embedded quotations.\n" +
            "- 5 mins: Proofreading spelling of character names, punctuation, and closing conclusions.\n\n" +
            "**2. Final Exam Checklist:**\n" +
            "- Did I answer the specific question asked in the prompt?\n" +
            "- Did I analyze the effect of words, not just identify techniques?\n" +
            "- Are all quotations short, embedded, and accurately cited?",
          examinerTips: [
            "Strictly follow time limits; spending 60 minutes on Question 1 leaves insufficient time for Question 2 and destroys your overall grade.",
            "Underline key words in the prompt before writing a single word of your essay."
          ],
          commonMistakes: [
            "Writing on two questions from the same text section when rubric permits only one.",
            "Running out of time and leaving the second question half-finished."
          ],
          recap: [
            "Allocate 45 minutes strictly per question: 5 plan, 35 write, 5 check.",
            "Address every nuance of the exam question prompt.",
            "Rigorous time management secures balanced high marks across all papers."
          ]
        }
      ]
    }
  ]
};
