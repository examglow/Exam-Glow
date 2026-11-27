import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE English as a Second Language (9–1) (0993) 2027–2029 Syllabus Notes
 * Covers Reading (AO1), Writing (AO2), Listening (AO3), and Speaking (AO4).
 */
export const ENGLISH_SECOND_LANGUAGE_9_1: SubjectNotes = {
  id: "english-second-language-9-1",
  name: "English as a Second Language (9–1)",
  code: "0993",
  color: "bg-blue-600",
  chapters: [
    {
      number: 1,
      title: "Reading Comprehension & Factual Analysis (Exercise 1)",
      section: "Paper 1: Reading & Writing",
      topic: "Skimming, Scanning, Fact Retrieval, Synonyms, and Accurate Answers",
      intro:
        "Paper 1 Exercise 1 assesses your ability to read authentic informational texts (such as articles, travel brochures, blogs, and reports) and extract precise factual details. Scoring top marks demands rapid scanning for keywords, recognizing vocabulary paraphrasing, and providing concise, direct answers without unnecessary copying.",
      subheadings: [
        {
          title: "Skimming and Scanning Techniques for Factual Retrieval",
          body:
            "**1. Core Reading Strategies:**\n" +
            "- **Skimming (General Gist):** Spend 40–50 seconds glancing over the title, sub-headings, first paragraph, and concluding sentence to grasp the text's overall domain before reading questions.\n" +
            "- **Scanning (Specific Fact-Finding):** Identify the key 'question word' (*Who, When, Where, Why, How much, Which*) and circle essential content words. Search the text rapidly for these words or their synonyms.\n" +
            "- **Short, Focused Answers:** Marks are awarded for factual accuracy, not grammatical complexity. A single phrase (e.g. 'in the city center') is safer and faster than copying a multi-clause sentence.\n\n" +
            "**2. Recognizing Paraphrasing and Synonyms:**\n" +
            "- Examiners deliberately use different phrasing in the question than appears in the text.\n" +
            "- *Example:* If the question asks for 'annual visitor numbers', the text might state 'over half a million tourists flock here each year'.",
          examinerTips: [
            "Keep answers concise; write only the requested factual piece of information.",
            "Always include measurement units, currencies, or timeframes where relevant (e.g. write '15 km' or '$200', not just '15' or '200')."
          ],
          commonMistakes: [
            "Copying entire paragraphs in the hope that the examiner will locate the correct detail.",
            "Writing two contradictory answers when only one fact was requested."
          ],
          recap: [
            "Skim for gist, then scan for question keywords.",
            "Match synonyms between questions and passage text.",
            "Write brief, accurate, unit-inclusive answers."
          ]
        },
        {
          title: "Navigating Structural Signposts and Conditions",
          body:
            "**1. Chronological and Sequencing Markers:**\n" +
            "- Pay close attention to time markers (*initially, subsequently, prior to, eventually, simultaneously*) to ensure you don't confuse past facts with future intentions.\n\n" +
            "**2. Conditional and Restrictive Words:**\n" +
            "- Words like *unless, except, exclusively, prohibited, provided that* often qualify the fact being tested in the question.",
          examinerTips: [
            "Check whether the question asks for 'one' or 'two' details. If two are required, place them on separate answer lines.",
            "Be wary of 'distractor' details located right beside the correct fact."
          ],
          commonMistakes: [
            "Confusing an initial prototype date with the final commercial launch date.",
            "Ignoring qualifying words like 'only on weekdays'."
          ],
          recap: [
            "Sequence words anchor factual chronologies.",
            "Conditional markers pinpoint restrictions and exceptions.",
            "Separate multi-point answers onto designated lines."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Multiple Matching, Viewpoints & Attitude (Exercise 2)",
      section: "Paper 1: Reading & Writing",
      topic: "Implicit Meaning, Opinions vs Facts, Distractors, and Multiple Text Analysis",
      intro:
        "Exercise 2 features four or five short texts (or one continuous text divided into sections A–D/E) describing different people's experiences, attitudes, or reviews. Candidates must match specific statements to the correct person or section by identifying nuance, emotion, and implicit meaning.",
      subheadings: [
        {
          title: "Distinguishing Objective Facts from Subjective Attitudes",
          body:
            "**1. Objective Facts:**\n" +
            "- Statements verifiable by empirical observation, dates, or measurements (e.g. 'The course lasts three weeks').\n\n" +
            "**2. Subjective Attitudes and Opinions:**\n" +
            "- Expressing personal feelings, evaluations, or recommendations.\n" +
            "- Signpost adjectives and adverbs: *disappointing, surprisingly rewarding, tedious, exceeded expectations, questionable, reluctantly*.\n\n" +
            "**3. Detecting Underlying Tone:**\n" +
            "- Tone can be enthusiastic, skeptical, nostalgic, critical, or pragmatic. Identify the writer's attitude by examining word connotations.",
          examinerTips: [
            "Underline emotional and evaluative adjectives in the text as you read.",
            "Watch out for texts where a speaker starts with one view but shifts their opinion by the end."
          ],
          commonMistakes: [
            "Matching a section based on a single identical word that actually refers to a different context (distractor trap).",
            "Failing to read to the end of the speaker's paragraph where the true reflection is revealed."
          ],
          recap: [
            "Facts are verifiable; attitudes reveal subjective values.",
            "Tone is communicated through loaded adjectives and adverbs.",
            "Look for opinion shifts across paragraphs."
          ]
        },
        {
          title: "Systematic Matching Method and Distractor Elimination",
          body:
            "**1. The 3-Step Matching Process:**\n" +
            "- **Step 1:** Read the statements first and underline key criteria (e.g. 'felt unprepared', 'regretted spending money').\n" +
            "- **Step 2:** Read text A thoroughly, identifying any statements it matches, then proceed sequentially through B, C, and D.\n" +
            "- **Step 3:** Where two texts seem similar, compare their exact wording against the statement to spot which one is an exact match versus an incomplete distractor.",
          examinerTips: [
            "Write the letter (A, B, C, D) clearly in the designated box; do not write full names.",
            "Every statement has only one correct corresponding letter."
          ],
          commonMistakes: [
            "Guessing without re-reading the specific sentences in the text.",
            "Leaving blanks when unsure; always make an educated elimination."
          ],
          recap: [
            "Read question criteria before diving into the paragraphs.",
            "Work methodically text by text.",
            "Eliminate partial-match distractors."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Note-Making & Technical Synthesis (Exercise 3)",
      section: "Paper 1: Reading & Writing",
      topic: "Categorisation, Bullet Point Form, Relevance, and Content Selection",
      intro:
        "Exercise 3 requires candidates to read a detailed informational or technical text and extract key points under two specified headings (e.g. 'Benefits of the new initiative' and 'Challenges encountered'). Success depends on precise categorization, omitting background anecdotes, and writing concise bullet points.",
      subheadings: [
        {
          title: "Categorising Information under Headings",
          body:
            "**1. Heading Discipline:**\n" +
            "- Carefully analyze the wording of each heading before scanning the text.\n" +
            "- A point placed under the wrong heading receives zero marks, even if it is factually true.\n" +
            "- *Example:* If Heading 1 is 'Advantages for students' and Heading 2 is 'Advantages for teachers', ensure points are strictly sorted by beneficiary.\n\n" +
            "**2. Filtering Out Background Details:**\n" +
            "- Exclude personal names, historical background, rhetorical questions, and repetitive statistics.",
          examinerTips: [
            "Put only one distinct point per bullet line. If you combine two points on one line, examiners can only award one mark.",
            "Write in clear note form; full complete sentences with complex clauses are unnecessary."
          ],
          commonMistakes: [
            "Writing points under Heading A that belong under Heading B.",
            "Repeating the same point using slightly different words across two separate bullets."
          ],
          recap: [
            "Sort facts strictly by the requested headings.",
            "One clear, distinct point per bullet line.",
            "Eliminate anecdotes and illustrative examples."
          ]
        },
        {
          title: "Crafting Clear, Concise Notes",
          body:
            "**1. Formulating High-Scoring Notes:**\n" +
            "- Start with an action verb, gerund, or concise noun phrase (e.g. 'Reduces carbon emissions', 'Low installation cost', 'Requires skilled technicians').\n" +
            "- Ensure the note makes grammatical and logical sense on its own.\n\n" +
            "**2. Verification:**\n" +
            "- Count your points to ensure you have filled every available bullet without exceeding the line limit.",
          examinerTips: [
            "Ensure the note contains enough detail to be meaningful; writing just 'costs' is too vague, write 'high maintenance costs'.",
            "Check that your notes accurately reflect the text's findings."
          ],
          commonMistakes: [
            "Writing overly cryptic one-word notes that lack necessary context.",
            "Copying unnecessary parenthetical remarks from the text."
          ],
          recap: [
            "Use clear, informative noun or verb phrases.",
            "Avoid overly vague single-word bullets.",
            "Verify that every required bullet line is utilized."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Summary Writing & Paraphrasing Mastery (Exercise 4)",
      section: "Paper 1: Reading & Writing",
      topic: "Word Limit Discipline (100–120 words), Own Words, Connectives, and Synthesis",
      intro:
        "Exercise 4 requires students to write a continuous summary of 100–120 words synthesizing specific points from a passage. Marks are awarded for both content (relevant facts identified) and language (paraphrasing in your own words, cohesion, and grammatical accuracy).",
      subheadings: [
        {
          title: "The Content Selection and Paraphrasing Process",
          body:
            "**1. Step-by-Step Summary Pipeline:**\n" +
            "- **Step 1 (Underlining):** Read the prompt carefully (e.g. 'Summarise why electric aviation is developing and what hurdles remain'). Underline 8–10 relevant facts in the passage.\n" +
            "- **Step 2 (Paraphrasing):** Rephrase the points using synonyms, changing word classes (e.g. convert 'they decided to expand' to 'their expansion decision'), and condensing clauses.\n" +
            "- **Step 3 (Drafting & Word Count):** Combine points into one or two coherent paragraphs totaling 100–120 words.\n\n" +
            "**2. Own Words Demonstration:**\n" +
            "- *Original:* 'Due to the steep price of batteries and the sluggish charging speeds, many airlines hesitated.'\n" +
            "- *Summary Version:* 'Adoption was delayed by expensive power cells and slow replenishment rates.'",
          examinerTips: [
            "Never write a summary in bullet points; it must be continuous prose.",
            "Stay strictly within the 100–120 word boundary. Anything written beyond the word limit is ignored by examiners, which may cost you content points."
          ],
          commonMistakes: [
            "Lifting whole sentences verbatim from the text (loss of language marks).",
            "Adding personal opinions, commentary, or extraneous information not in the passage."
          ],
          recap: [
            "Select 8–10 factual points directly addressing the prompt.",
            "Paraphrase using synonyms and structural reorganization.",
            "Enforce strict 100–120 word limits in continuous prose."
          ]
        },
        {
          title: "Cohesion, Connectives, and Structural Flow",
          body:
            "**1. Sophisticated Connectives for Flow:**\n" +
            "- *Addition:* Furthermore, In addition, Moreover, Alongside this.\n" +
            "- *Contrast:* However, Conversely, Despite these advantages, On the other hand.\n" +
            "- *Cause and Effect:* Consequently, As a result, Leading to, Therefore.\n\n" +
            "**2. Proofreading Checklist:**\n" +
            "- Subject-verb agreement, singular/plural consistency, and correct tense throughout.",
          examinerTips: [
            "Vary your sentence lengths: blend short punchy statements with well-linked complex sentences.",
            "Group similar points together so the summary develops logically rather than jumping back and forth."
          ],
          commonMistakes: [
            "Overusing 'And', 'Also', or 'Besides' at the start of every sentence.",
            "Writing one giant 80-word run-on sentence without punctuation."
          ],
          recap: [
            "Use formal transition words to link ideas smoothly.",
            "Group related pros and cons together.",
            "Proofread grammar and punctuation systematically."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Informal Writing: Emails & Personal Correspondence (Exercise 5)",
      section: "Paper 1: Reading & Writing",
      topic: "Friendly Tone, Informal Register, 3 Bullet Coverage, and Natural Phrasing",
      intro:
        "Exercise 5 tests your creative and communicative writing by asking you to compose an email or letter to a friend or relative (120–160 words). You are provided with a scenario and three bullet points that must all be thoroughly developed with natural, informal expression.",
      subheadings: [
        {
          title: "Informal Email Structure and Formatting",
          body:
            "**1. Standard Layout:**\n" +
            "- **Greeting:** *Dear [Name],* or *Hi [Name],*\n" +
            "- **Opening Paragraph:** Warm opening expressing personal connection (*Hope you're doing well! Sorry I haven't written in a while, but I've been so busy with...*).\n" +
            "- **Body Paragraphs:** 2–3 paragraphs addressing each bullet point in depth with lively descriptions and anecdotes.\n" +
            "- **Concluding Paragraph:** Future-focused sign-off (*Can't wait to catch up soon! Write back when you get a chance.*).\n" +
            "- **Sign-off:** *Best wishes,* / *Take care,* / *All the best,* followed by your first name.\n\n" +
            "**2. Addressing All Three Bullets:**\n" +
            "- Bullet 1: Describe the event or situation.\n" +
            "- Bullet 2: Explain your personal reaction or emotions.\n" +
            "- Bullet 3: Propose a plan, invitation, or future activity.",
          examinerTips: [
            "Devote roughly equal attention to all three prompt bullets; missing one caps your Content mark.",
            "Adopt an authentic conversational tone, but avoid modern SMS slang or emoji drawings."
          ],
          commonMistakes: [
            "Using stiff formal phrases like 'I am writing to inform you' in a casual letter to a close friend.",
            "Leaving the third bullet point to a rushed single sentence at the very end."
          ],
          recap: [
            "Open warmly and close with an invitation to reply.",
            "Cover all 3 prompt bullets with balanced detail.",
            "Use informal, friendly phrasing while maintaining grammatical accuracy."
          ]
        },
        {
          title: "Injecting Personality, Idioms, and Descriptive Flair",
          body:
            "**1. Engaging Stylistic Techniques:**\n" +
            "- Rhetorical questions to the reader: *'Can you believe what happened next?'*, *'You know how much I love... right?'*\n" +
            "- Natural conversational idioms: *over the moon, out of the blue, caught me off guard, once in a blue moon*.\n" +
            "- Sensory imagery and lively adjectives: *deafening, breathtaking, mouth-watering, packed to the rafters*.\n\n" +
            "**2. Tense Consistency:**\n" +
            "- Keep recount events in consistent past tenses (Past Simple, Past Continuous) and future plans in future constructions (*we're planning to*, *I'd love you to*).",
          examinerTips: [
            "Use contractions naturally (*I'm, wasn't, didn't, couldn't*) to reinforce the informal register.",
            "Aim for 140–155 words; this comfortably fulfills all requirements without risking excessive errors."
          ],
          commonMistakes: [
            "Overloading the text with forced idioms that sound unnatural or misapplied.",
            "Switching erratically between past and present tenses during narrative recounts."
          ],
          recap: [
            "Engage the reader with conversational questions.",
            "Use natural contractions and lively descriptive vocabulary.",
            "Maintain consistent tense across narrative sections."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Formal Writing: Reports, Articles & Reviews (Exercise 6)",
      section: "Paper 1: Reading & Writing",
      topic: "Formal Register, Discursive Arguments, Structured Layout, and Recommendation",
      intro:
        "Exercise 6 requires a formal piece of writing (120–160 words) for a wider audience, such as a school magazine article, a report for a principal, or a balanced review. Candidates must structure coherent paragraphs, balance opposing viewpoints, and present reasoned recommendations.",
      subheadings: [
        {
          title: "Formal Article, Report, and Review Frameworks",
          body:
            "**1. Magazine Article Structure:**\n" +
            "- **Catchy Title:** Thought-provoking headline summarizing the debate.\n" +
            "- **Introduction:** Hook the reader and frame the contemporary issue.\n" +
            "- **Body:** Balanced discussion of pros and cons, integrating quotes or surveyed viewpoints.\n" +
            "- **Conclusion:** Forward-looking final verdict and call to action.\n\n" +
            "**2. Formal Report Structure:**\n" +
            "- **Clear Headings:** *Introduction, Current Situation, Key Findings, Recommendations*.\n" +
            "- Objective, professional tone using passive constructions (*It was observed that...*, *Feedback indicated that...*).\n\n" +
            "**3. Balanced Review Structure:**\n" +
            "- Overview of service/product, positive features, shortcomings, final star rating or verdict.",
          examinerTips: [
            "Never use slang, abbreviations, or conversational contractions (*don't, can't*) in formal Exercise 6 writing.",
            "Ensure you evaluate both sides of the topic before stating your concluding stance."
          ],
          commonMistakes: [
            "Writing a one-sided polemic that ignores counter-arguments.",
            "Forgetting to provide a clear concluding recommendation in a report."
          ],
          recap: [
            "Choose a clear layout matching the requested format (article vs report).",
            "Maintain an objective, academic register without contractions.",
            "Present balanced arguments before drawing your final conclusion."
          ]
        },
        {
          title: "Advanced Formal Vocabulary and Listening/Speaking Synergy",
          body:
            "**1. High-Band Formal Lexis:**\n" +
            "- *Substantial, unprecedented, detriment, advantageous, prospective, implemented, paramount, consensus, feasible*.\n\n" +
            "**2. Listening (Paper 2) and Speaking (Paper 3) Exam Mastery:**\n" +
            "- **Listening:** Anticipate answers during the 30-second preparation window; check spelling during the second broadcast.\n" +
            "- **Speaking:** Expand answers using the 'PREP' method (Point, Reason, Example, Point re-stated); speak fluently and invite dialogue.",
          examinerTips: [
            "Spend the last 5 minutes of Paper 1 checking spelling, punctuation, and capital letters.",
            "In speaking, don't just say 'Yes' or 'No'; elaborate with reasons and personal experiences."
          ],
          commonMistakes: [
            "Spelling errors in key listening words that change the meaning (e.g. writing 'quite' instead of 'quiet').",
            "Speaking in a monotone whisper; project your voice clearly."
          ],
          recap: [
            "Incorporate advanced formal vocabulary and varied syntax.",
            "Anticipate answers during listening pauses.",
            "Expand speaking answers using reasons and real-life examples."
          ]
        }
      ]
    }
  ]
};
