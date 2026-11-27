import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Core English as a Second Language (0465) 2027–2029 Syllabus Notes
 * Core tier (Grades C to G).
 * Covers Reading (AO1), Writing (AO2), and Listening comprehension strategies.
 */
export const CORE_ENGLISH: SubjectNotes = {
  id: "core-english",
  name: "Core English as a Second Language",
  code: "0465 (Core)",
  color: "bg-sky-600",
  chapters: [
    {
      number: 1,
      title: "Reading Comprehension and Factual Information (AO1 R1)",
      section: "Paper 1: Reading Skills",
      topic: "Skimming, Scanning, Factual Retrieval, and Vocabulary in Context",
      intro:
        "Paper 1 Exercise 1 assesses your ability to retrieve specific factual information from non-fiction texts (leaflets, blogs, travel articles, informational notices). Core candidates must be able to scan quickly for keywords, understand numbers and dates, recognize synonyms, and extract accurate answers without copying unnecessary surrounding text.",
      subheadings: [
        {
          title: "Skimming, Scanning, and Keyword Highlighting",
          body:
            "**1. Core Reading Strategies:**\n" +
            "- **Skimming (Reading for Gist):** Read the title, subheadings, first paragraph, and topic sentences within 45 seconds to understand what the text is about before looking at questions.\n" +
            "- **Scanning for Target Keywords:** In the question prompt, circle the question words (*Where, When, Who, Why, How many, Which*) and key content nouns/verbs. Move your eyes across the text looking specifically for those keywords or their direct synonyms.\n" +
            "- **Short, Direct Answers:** In Exercise 1, Cambridge awards marks for factual accuracy, not full prose sentences. A short 2-to-5 word phrase containing the key fact is safer than copying long sentences that risk including conflicting information.\n\n" +
            "**2. Dealing with Synonyms and Paraphrasing:**\n" +
            "- Cambridge exam questions rarely use the exact words from the passage.\n" +
            "- *Examples:* If the question asks about *'annual visitors'*, the passage might say *'thousands arrive each year'*; if the question asks about *'financial cost'*, the passage might state *'tickets are priced at £15'*.\n" +
            "- Train yourself to match meanings rather than just searching for identical letter sequences.",
          examinerTips: [
            "Keep your answers short and precise. If the question asks 'Where was the exhibition held?', write 'City Art Gallery' rather than copying three full lines of description.",
            "Never give two conflicting answers when only one is requested. Writing 'in London or Paris' scores zero if the text only supports London."
          ],
          commonMistakes: [
            "Over-copying entire paragraphs hoping the examiner finds the correct fact; extraneous incorrect material invalidates the correct answer.",
            "Changing the meaning of numbers or units (e.g. omitting 'km' or writing '100' instead of '100,000')."
          ],
          recap: [
            "Skim first for general meaning, then scan for question keywords.",
            "Look for synonyms and paraphrased expressions in the text.",
            "Write concise, factually accurate answers without unnecessary clutter."
          ]
        },
        {
          title: "Understanding Instructions, Notices, and Informational Text Types",
          body:
            "**1. Text Structures and Formatting Clues:**\n" +
            "- Informational texts use bullet points, bold headings, sidebars, and captions to organize data.\n" +
            "- Use section headings to locate which part of the text contains the answer instead of re-reading from start to finish.\n\n" +
            "**2. Chronological vs Thematic Sequencing:**\n" +
            "- Biography and event texts follow a chronological order (past to present).\n" +
            "- Guides and reviews organize by theme (amenities, location, pricing, seasonal advice). Pay close attention to qualifying time words (*initially, subsequently, currently, formerly*).",
          examinerTips: [
            "Pay close attention to restrictive conditions like 'except', 'only on weekdays', or 'excluding holidays'.",
            "Check whether the question asks for a single reason or two separate reasons; if two are required, make sure each is written on its designated answer line."
          ],
          commonMistakes: [
            "Overlooking negative qualifiers such as 'seldom', 'hardly', or 'unlikely'.",
            "Writing down an initial plan mentioned in the text instead of the final implemented decision."
          ],
          recap: [
            "Use headings and bullet points as navigational signposts.",
            "Watch out for sequence adverbs indicating changes of plan.",
            "Answer all parts of multi-point questions on separate lines."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Multiple Matching, Opinions, and Implied Meaning (AO1 R2, R4)",
      section: "Paper 1: Reading Skills",
      topic: "Deducing Attitude, Identifying Distractors, and Multiple Matching Across Texts",
      intro:
        "Paper 1 Exercise 2 presents four people (A, B, C, D) writing about a shared experience or theme (e.g. learning an instrument, volunteer work, hobbies). Candidates match statements to the correct person. This chapter develops skills in spotting distractors, analyzing attitudes and tone, and understanding implied meaning.",
      subheadings: [
        {
          title: "Multiple Matching Strategy and Distractor Elimination",
          body:
            "**1. Systematic Method for Multiple Matching:**\n" +
            "- Step 1: Read the questions first and underline key focus words in each statement.\n" +
            "- Step 2: Read Person A carefully. Check each question against Person A. If there is a clear, unambiguous match, mark 'A'.\n" +
            "- Step 3: Repeat for Person B, C, and D.\n" +
            "- Step 4: Re-check any unanswered questions by comparing remaining candidate texts.\n\n" +
            "**2. Unmasking Distractors:**\n" +
            "- A **distractor** occurs when a passage uses the exact keyword from a question, but the actual meaning contradicts or fails to satisfy the prompt.\n" +
            "- *Example:* If the statement says *'was surprised by the heavy physical demand'*, Person B might mention *'physical exercise'*, but only Person D expresses surprise (*'I had no idea how exhausting it would be'*). Person D is the correct answer.",
          examinerTips: [
            "Never choose a letter just because it shares a single word with the question. Match the complete underlying thought.",
            "Ensure every question has one clear letter marked (A, B, C, or D). If you change your mind, cross out your old answer clearly."
          ],
          commonMistakes: [
            "Falling for word-spotting traps where a passage repeats a prompt keyword in a completely different context.",
            "Leaving blank answers; multiple matching has four options, so always make an informed deduction."
          ],
          recap: [
            "Underline statement requirements before reading the four texts.",
            "Distractors borrow prompt words without matching the core sentiment.",
            "Match the attitude or idea, not isolated words."
          ]
        },
        {
          title: "Identifying Opinions, Attitudes, and Tone",
          body:
            "**1. Distinguishing Fact from Opinion:**\n" +
            "- **Fact:** Objective, verifiable information supported by empirical evidence, measurements, or historical record (*'The train departs at 08:30'*).\n" +
            "- **Opinion:** Subjective viewpoint, value judgment, or personal belief (*'The early train journey is deeply peaceful'*).\n\n" +
            "**2. Analyzing Tone and Stance:**\n" +
            "- Authors reveal attitude through choice of adjectives, modal verbs, and emotive vocabulary:\n" +
            "  - *Enthusiastic:* 'thrilling', 'breathtaking', 'an absolute privilege'.\n" +
            "  - *Skeptical / Critical:* 'questionable', 'overrated', 'doubtful', 'failed to live up to expectations'.\n" +
            "  - *Cautious:* 'might suggest', 'tends to indicate', 'provisional'.",
          examinerTips: [
            "Look for modal verbs like 'must', 'should', 'might' which often signal personal judgments rather than settled facts.",
            "Note the use of contrast conjunctions like 'however', 'nonetheless', and 'on the other hand' which indicate a shift in the speaker's viewpoint."
          ],
          commonMistakes: [
            "Treating a strong assertion by a speaker as a verified fact.",
            "Ignoring qualifying words like 'partially' or 'somewhat' that soften an opinion."
          ],
          recap: [
            "Facts are verifiable; opinions express subjective judgments.",
            "Attitude is conveyed through adjectives, adverbs, and modal verbs.",
            "Contrast conjunctions signal reversals in the author's argument."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Note-Making and Information Selection (AO1 R3)",
      section: "Paper 1: Reading Skills",
      topic: "Selecting Points Under Headings, Brevity, and Eliminating Repetition",
      intro:
        "Paper 1 Exercise 3 requires candidates to make brief notes under two given headings based on a passage of 400–500 words. This exercise tests your ability to identify and select relevant details for a specific purpose without writing unnecessary prose.",
      subheadings: [
        {
          title: "Selecting Relevant Information Under Given Headings",
          body:
            "**1. The Mechanics of Exercise 3:**\n" +
            "- You will be provided with two separate headings (e.g. *'Reasons why the project was started'* and *'Problems encountered during construction'*).\n" +
            "- Beneath each heading are numbered bullet lines (e.g. 3 lines under heading 1, 4 lines under heading 2).\n" +
            "- Each valid, distinct point scores 1 mark. Maximum marks range from 7 to 9.\n\n" +
            "**2. Golden Rules for Note-Making:**\n" +
            "- **Strict Relevance:** Make sure every point matches the exact heading it is placed under. Writing a 'problem' under the 'reasons' heading scores zero.\n" +
            "- **One Idea per Bullet:** Never write two different points on one bullet line; only the first idea is credited, wasting the second.\n" +
            "- **Brevity:** Notes do not require full sentences. Use short phrases starting with action verbs or nouns.\n" +
            "- **Omit Repetition:** Do not write the same point twice using different words.",
          examinerTips: [
            "Review your completed notes to ensure you have not written the same point in two slightly different ways under the same heading.",
            "Write directly on the printed lines. Never cram an extra point between lines; examiners mark only one point per designated line."
          ],
          commonMistakes: [
            "Writing long, complete grammatical paragraphs instead of concise notes.",
            "Putting a correct point under the wrong heading, losing the mark completely."
          ],
          recap: [
            "Read the two headings carefully before searching the text.",
            "Write exactly one distinct factual point per bullet line.",
            "Use brief, clear phrases; avoid repetition and misplaced points."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Summary Writing and Information Synthesis (AO2 W1–W4)",
      section: "Paper 1: Writing Skills",
      topic: "Summarizing Key Points, Paraphrasing, Word Limits, and Cohesion",
      intro:
        "Paper 1 Exercise 4 requires writing a concise summary of roughly 80 to 90 words based on points extracted from the text. This task tests your ability to communicate key factual information clearly using your own words where possible, with smooth logical linking and accurate grammar.",
      subheadings: [
        {
          title: "Structuring and Paraphrasing a Summary",
          body:
            "**1. Step-by-Step Summary Construction:**\n" +
            "- **Step 1 — Identify the Focus:** Read the summary question prompt carefully (e.g. *'Write a summary outlining the benefits of community gardens and how volunteers maintain them'*).\n" +
            "- **Step 2 — Underline 6 to 8 Key Points:** Mark distinct factual points in the passage addressing the prompt.\n" +
            "- **Step 3 — Paraphrase:** Express each point using synonyms and altered grammatical structures (e.g. changing active verbs to nouns).\n" +
            "- **Step 4 — Connect with Transition Words:** Use cohesive linking devices (*In addition, furthermore, moreover, consequently, however*) to join points into a smooth paragraph.\n" +
            "- **Step 5 — Word Count Check:** Target 80–90 words. Do not exceed the word limit; writing over the limit wastes time and invites grammatical errors.",
          examinerTips: [
            "Do not include personal opinions, introductory throat-clearing ('In this text the author explains...'), or concluding summaries. Dive straight into the factual points.",
            "Paraphrase where natural, but do not replace technical or specialist terms with awkward synonyms."
          ],
          commonMistakes: [
            "Lifting whole sentences verbatim from the passage, which severely penalizes language and style marks.",
            "Including irrelevant background details or examples that are not asked for in the summary prompt."
          ],
          recap: [
            "Identify 6–8 distinct points directly matching the prompt.",
            "Paraphrase using own words and connect with cohesive linkers.",
            "Stay strictly within the word limit (80–90 words) and omit personal opinions."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Informal Communication: Letters and Emails (AO2 W1–W5)",
      section: "Paper 1: Writing Skills",
      topic: "Informal Tone, Three Bullet Points, Paragraphing, and Varied Vocabulary",
      intro:
        "Paper 1 Exercise 5 requires writing an informal email or letter to a friend or relative of approximately 100 to 120 words. Cambridge provides three specific bullet points that must all be addressed, along with visual picture cues. This chapter covers appropriate informal registers, natural conversational openings/closings, and narrative development.",
      subheadings: [
        {
          title: "Addressing Bullet Points and Informal Register",
          body:
            "**1. The Three Mandatory Bullet Points:**\n" +
            "- Cambridge prompts always feature three explicit prompts (e.g. *1. describe the place you visited; 2. explain what happened; 3. invite your friend to join you next time*).\n" +
            "- **Rule:** You must address all three bullet points with balanced expansion. Omitting even one bullet limits your content mark.\n\n" +
            "**2. Informal Tone and Register:**\n" +
            "- The audience is a friend or family member. Use warm, natural, conversational English:\n" +
            "  - *Friendly Openings:* 'Hi Sam, I hope you are doing well!', 'It was great to hear from you last week.'\n" +
            "  - *Natural Informal Devices:* Contractions (*I'm, couldn't, we'd*), exclamation marks for excitement, informal idioms (*having a blast, out of this world*).\n" +
            "  - *Friendly Closings:* 'Write back soon,', 'Can't wait to see you,', followed by your first name.\n\n" +
            "**3. Suggested Paragraph Structure:**\n" +
            "- **Paragraph 1:** Friendly greeting + opening pleasantry + introduction of the topic.\n" +
            "- **Paragraph 2:** Fully address Bullet 1 (describe the event/setting with vivid sensory detail).\n" +
            "- **Paragraph 3:** Fully address Bullet 2 (narrate what happened or explain a problem/highlight).\n" +
            "- **Paragraph 4:** Fully address Bullet 3 (future invitation/plans) + warm sign-off.",
          examinerTips: [
            "Tick off each of the three bullet points as you address it in your draft to guarantee none are forgotten.",
            "Avoid overly formal phrases like 'Dear Sir/Madam' or 'In conclusion' in an informal email to a friend."
          ],
          commonMistakes: [
            "Writing in a stilted, overly formal academic tone when writing to a friend.",
            "Spending 80 words on bullet 1 and only a single hurried sentence on bullets 2 and 3."
          ],
          recap: [
            "Address all three bullet points with balanced expansion.",
            "Use natural informal language, contractions, and friendly greetings/sign-offs.",
            "Structure into 4 neat paragraphs matching the prompts."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Discursive and Argumentative Writing: Articles and Reviews (AO2 W1–W5)",
      section: "Paper 1: Writing Skills",
      topic: "Formal and Semi-Formal Articles, Persuasive Rhetoric, Balanced Arguments, and School Magazine Reviews",
      intro:
        "Paper 1 Exercise 6 requires writing a formal or semi-formal article, review, or report of roughly 100 to 120 words for a school magazine, local newspaper, or website. Candidates are given two contrasting speech bubbles with opposing opinions to stimulate their ideas. This chapter examines article headlines, balanced discursive structures, and persuasive language.",
      subheadings: [
        {
          title: "Crafting Discursive Articles and Reviews",
          body:
            "**1. Discursive Article Structure:**\n" +
            "- **Catchy Headline:** A short, engaging title summarizing the debate (e.g. *'Are Smartphones Ruining School Life?'*).\n" +
            "- **Introduction:** Hook the reader with a rhetorical question or thought-provoking statement, introducing both sides of the issue.\n" +
            "- **Body Paragraph 1 (Arguments For):** Present arguments supporting the proposition, drawing inspiration from speech bubble 1 and expanding with real-life examples.\n" +
            "- **Body Paragraph 2 (Arguments Against):** Present counter-arguments, using speech bubble 2 and your own insights (*'On the other hand, critics argue that...'*).\n" +
            "- **Conclusion:** Provide a clear, reasoned personal verdict balancing both perspectives.\n\n" +
            "**2. Formal and Semi-Formal Register:**\n" +
            "- Avoid slang and excessive contractions (*write 'do not' instead of 'don't'*).\n" +
            "- Use sophisticated rhetorical techniques: rhetorical questions, rule of three, emotive vocabulary, and varied sentence lengths (compound and complex sentences).",
          examinerTips: [
            "Never copy the exact text from the speech bubbles into your article. Use the speech bubbles as inspiration, then rephrase the ideas in your own words with extra reasoning.",
            "Always include a snappy headline at the top of an article."
          ],
          commonMistakes: [
            "Writing a one-sided essay without acknowledging the opposing viewpoint.",
            "Copying words straight out of the stimulus bubbles."
          ],
          recap: [
            "Include an engaging headline and hook the reader early.",
            "Provide balanced arguments for and against before stating your verdict.",
            "Maintain a formal/semi-formal register and rephrase stimulus speech bubbles."
          ]
        }
      ]
    }
  ]
};
