import type { SubjectNotes } from "./types";

export const WORLD_LITERATURE: SubjectNotes = {
  id: "world-literature",
  name: "World Literature",
  code: "0408",
  color: "bg-rose-600",
  chapters: [
    {
      number: 1,
      title: "Reading Literary Texts: Analysis and Interpretation",
      intro: "IGCSE World Literature (0408) focuses on the study of literary texts from a wide range of world cultures and traditions. Students develop skills in close reading, textual analysis, and written response for prose fiction, poetry, and drama. The syllabus rewards evidence-based interpretations that engage with both the literal meaning of a text and its deeper implications — theme, character, structure, language choice, and cultural context.",
      subheadings: [
        {
          title: "Close Reading: What to Look For",
          body: "Close reading means analysing how a writer has crafted meaning through specific choices of language, structure, and form. At IGCSE level, every point in an analytical essay should be supported by a quotation and followed by a comment that explains what the quoted language does and why the writer might have chosen it.",
          groups: [
            {
              subTitle: "Language Techniques to Analyse",
              bullets: [
                "**Imagery (simile and metaphor)**: Identify the comparison; explain what qualities are being transferred and why those qualities are significant to theme or character.",
                "**Personification**: Non-human things given human qualities; consider what the writer implies about the relationship between humans and the non-human subject.",
                "**Repetition and anaphora**: Repeated words or sentence openings create emphasis and rhythm; comment on the cumulative effect and emotional intensity.",
                "**Diction (word choice)**: Single-word choices carry connotations beyond their denotative meaning — dark/gloomy/shadowy are near-synonyms but have different resonances.",
                "**Tone**: The narrator's or speaker's attitude toward subject and audience, revealed through word choice, sentence structure, and imagery — ironic, melancholic, celebratory, bitter.",
                "**Sentence structure**: Short sentences create pace or shock; long complex sentences mirror complexity of thought; fragments can suggest fragmentation of self or certainty."
              ]
            },
            {
              subTitle: "Structural and Formal Features",
              bullets: [
                "**Narrative perspective (prose)**: First person (I) creates intimacy and unreliability; third person limited reveals only one character's consciousness; omniscient third person offers wider scope.",
                "**Dramatic irony**: The reader/audience knows something a character does not; creates tension, sympathy, or dark humour.",
                "**Foreshadowing**: Early hints at later events; consider how this shapes the reader's experience of the text retrospectively.",
                "**In medias res**: Beginning in the middle of action; creates immediate engagement; backstory is revealed gradually.",
                "**Stanza form (poetry)**: Regular stanzas suggest control or order; irregular or fragmented stanzas suggest disruption; volta (turn in argument) usually signals a shift in perspective."
              ]
            }
          ]
        },
        {
          title: "Essay Writing: Structure and Argumentation",
          body: "World Literature essays are marked on the quality of argument, the relevance and selection of textual evidence, the depth of analysis, and the quality of written expression. A well-structured response moves efficiently from a clear thesis through well-developed supporting points to a conclusion that adds insight rather than merely summarising.",
          groups: [
            {
              subTitle: "Essay Structure",
              bullets: [
                "**Introduction**: State your argument (thesis) clearly in 2–3 sentences. Do not re-tell the plot. Name the text and author, and indicate what your essay will argue.",
                "**Body paragraphs — PEEL structure**: **P**oint (topic sentence stating the argument of the paragraph), **E**vidence (brief, precise quotation), **E**xplain (analyse specific words or techniques), **L**ink (connect back to the main thesis or to the next paragraph).",
                "**Embedding quotations**: Weave quotations into your own sentences grammatically — 'The narrator describes the village as a wound on the land, suggesting...' rather than block-quoting.",
                "**Development**: After your initial explanation, push further — 'this is further complicated by...', 'however, it is also possible to read this as...', 'this connects to the broader theme of...'",
                "**Conclusion**: Synthesise your arguments; offer a final interpretive insight or connect the text to its wider cultural or historical context. Avoid beginning with 'In conclusion, I have shown that...'"
              ]
            },
            {
              subTitle: "Handling Theme and Context",
              bullets: [
                "**Theme is not plot**: Theme is an abstract idea the text explores — identity, belonging, power, loss, justice. Always express themes as concepts, not as story summaries.",
                "**Cultural context**: World Literature specifically asks you to consider how texts reflect or challenge the values and conditions of the culture in which they were written. Avoid reducing a text to a simple cultural generalisation.",
                "**Authorial intention vs reader response**: It is valid to write 'the writer presents...' (authorial intention) or 'the reader is made to feel...' (reader response) — both approaches are acceptable at IGCSE level.",
                "**Comparative essays**: When comparing two texts, organise by theme not by text (avoid block structure); use connective phrases: 'similarly', 'in contrast', 'both writers...', 'whereas X uses... Y chooses instead to...'"
              ]
            }
          ]
        },
        {
          title: "Poetry: Reading, Analysing, and Comparing",
          body: "Poetry analysis requires attention to every word and every formal choice. Unlike prose, poems rarely have redundant language — form and meaning are inseparable. The IGCSE World Literature syllabus includes poems from diverse traditions, and students must show awareness of how cultural context shapes meaning.",
          groups: [
            {
              subTitle: "Approaching an Unseen Poem",
              bullets: [
                "**Read twice before writing**: First reading for overall impression and emotional effect; second reading to identify specific techniques.",
                "**Identify the speaker and situation**: Who is speaking, to whom, about what, and in what emotional state? Is the speaker reliable?",
                "**Track the volta**: Many poems pivot at a specific moment — identify where the shift occurs and how it changes the poem's meaning.",
                "**Sound devices**: Alliteration (same initial consonant), assonance (repeated vowel sounds), onomatopoeia (words that sound like what they describe), sibilance (repeated s/sh sounds — often sinister or soothing).",
                "**Rhythm and metre**: Iambic pentameter (5 iambs per line: da-DUM x5) is associated with formal, controlled expression. Disruptions to regular metre create emphasis — a spondee (two stresses) slows the reading and signals importance."
              ]
            },
            {
              subTitle: "Cross-Cultural Poetic Voices",
              bullets: [
                "**Post-colonial voice**: Many World Literature poems engage with themes of colonial legacy, displacement, hybrid identity, and language itself as a site of power.",
                "**Nature and place**: Many traditions use natural landscape as metaphor for inner states, cultural memory, or political condition.",
                "**Oral tradition**: Some poems are written to be spoken aloud; rhythm, repetition, and direct address are features of oral-traditional poetry. Consider how the poem sounds as well as how it reads on the page.",
                "**Silence and what is unsaid**: What a poem omits can be as significant as what it includes — white space, incomplete lines, and broken syntax can all signal what cannot be spoken directly."
              ]
            }
          ]
        }
      ]
    }
  ]
};
