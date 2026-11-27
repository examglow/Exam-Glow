import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE English as an Additional Language (0772) 2029–2030 Syllabus Notes
 * Covers Topics A–E (Everyday activities, Personal/social, World around us, World of work, International world)
 * plus Chapter 6 Grammar, Communication & Exam Mastery. Strictly text-only.
 */
export const ENGLISH_ADDITIONAL_LANGUAGE: SubjectNotes = {
  id: "english-additional-language",
  name: "English as an Additional Language",
  code: "0772",
  color: "bg-teal-600",
  chapters: [
    {
      number: 1,
      title: "Everyday Activities & Routines (Topic Area A)",
      section: "Communication Across Contexts",
      topic: "Daily Routine, Food and Drink, Shopping, Transport, and Directions",
      intro:
        "Topic Area A focuses on practical language required for daily life. Candidates must master present routines, telling time, navigating public transit, purchasing provisions, asking for directions, and describing simple meals and health habits in English.",
      subheadings: [
        {
          title: "Daily Life, Telling Time, and School Routines",
          body:
            "**1. Routine Vocabulary and Expressions:**\n" +
            "- Daily schedule verbs: *wake up, get dressed, catch the bus, attend lessons, review notes, participate in sports, prepare dinner, go to bed*.\n" +
            "- Time expressions: *at half past seven, a quarter to eight, twice a week, on weekdays, during the lunch break, regularly, seldom*.\n\n" +
            "**2. Present Simple for Habitual Actions:**\n" +
            "- Remember the third-person singular '-s' / '-es' rule (*He catches the train at 08:15*, *She finishes class at 15:30*).\n" +
            "- Adverbs of frequency placement: between subject and main verb (*I usually walk to school*) or after auxiliary verbs (*They are always punctual*).",
          examinerTips: [
            "Do not omit the third-person '-s' in writing; examiners heavily penalize basic subject-verb errors.",
            "In speaking and writing, use a variety of sequence connectors (*First, Then, Afterwards, Later on*) rather than repeating 'and then'."
          ],
          commonMistakes: [
            "Writing 'She go to school' instead of 'She goes to school'.",
            "Confusing 12-hour AM/PM with 24-hour schedules in reading timetables."
          ],
          recap: [
            "Present Simple conveys routines and habits.",
            "Remember third-person singular '-s'.",
            "Sequence markers link daily actions logically."
          ]
        },
        {
          title: "Food, Dining, Shopping, and Getting Around",
          body:
            "**1. Food and Meal Exchanges:**\n" +
            "- Countable vs. Uncountable: *a cup of tea, a bottle of water, many apples, much sugar, a few carrots, a little milk*.\n" +
            "- Polite ordering phrases: *'Could I please have...?', 'I would like to order...', 'What do you recommend?'*.\n\n" +
            "**2. Asking for Directions and Transport:**\n" +
            "- Spatial prepositions: *opposite the post office, next to the library, turn left at the crossroads, walk along the avenue, cross over the bridge*.\n" +
            "- Transport modes: *by train, on foot, by ferry, catch a flight, purchase a return ticket*.",
          examinerTips: [
            "Use 'would like' instead of 'want' to maintain politeness in dialogue questions.",
            "Double-check street direction prepositions (e.g. 'on the corner of', 'opposite to' vs 'opposite')."
          ],
          commonMistakes: [
            "Using 'many' with uncountable nouns (e.g. saying 'many bread' instead of 'a lot of bread').",
            "Writing 'go by foot' instead of the standard idiom 'on foot'."
          ],
          recap: [
            "Countable nouns take 'many/few'; uncountable take 'much/little'.",
            "Polite requests use 'Could I have' and 'I would like'.",
            "Travel is expressed as 'by bus/train' or 'on foot'."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Personal and Social Life (Topic Area B)",
      section: "Communication Across Contexts",
      topic: "Self, Family, Friends, Interests, Hobbies, Celebrations, and Wellbeing",
      intro:
        "Topic Area B enables candidates to communicate about their personal identity, relationships, leisure pursuits, cultural celebrations, and personal health. Developing expressive vocabulary for personal feelings and shared events is central to scoring high marks.",
      subheadings: [
        {
          title: "Family, Relationships, and Physical/Character Descriptions",
          body:
            "**1. Family and Relationship Terms:**\n" +
            "- Nuclear and extended relations: *siblings, cousins, in-laws, stepparents, guardians, close companions, acquaintances*.\n\n" +
            "**2. Descriptive Adjectives (Appearance & Personality):**\n" +
            "- Appearance: *tall, slender, well-built, curly hair, fair complexion, casually dressed*.\n" +
            "- Character: *reliable, considerate, extroverted, conscientious, witty, supportive, patient*.\n\n" +
            "**3. Comparative and Superlative Structures:**\n" +
            "- Regular: *taller / the tallest*, *more thoughtful / the most thoughtful*.\n" +
            "- Irregular: *better / best*, *worse / worst*, *further / furthest*.",
          examinerTips: [
            "Avoid repetitive basic adjectives (like 'nice' or 'good'); use precise alternatives like 'compassionate' or 'dependable'.",
            "Remember that adjectives in English do not change for gender or plural nouns."
          ],
          commonMistakes: [
            "Using double comparatives like 'more taller' or 'most best'.",
            "Confusing 'sensitive' (easily hurt or perceptive) with 'sensible' (practical and wise)."
          ],
          recap: [
            "Build a varied store of character adjectives.",
            "Use standard comparative and superlative patterns.",
            "English adjectives never take plural endings."
          ]
        },
        {
          title: "Hobbies, Leisure, Festivals, and Healthy Living",
          body:
            "**1. Hobbies and Interests:**\n" +
            "- Expressing preferences: *be fond of, be keen on, take up photography, prefer team sports to solo workouts, enjoy playing musical instruments*.\n\n" +
            "**2. Celebrations and Festivals:**\n" +
            "- Vocabulary: *annual festival, traditional feast, exchange gifts, fireworks display, carnival parade, decorate the venue, family reunion*.\n\n" +
            "**3. Physical Wellbeing and Ailments:**\n" +
            "- Health phrases: *suffer from a sore throat, recover from a sprained ankle, balance study with exercise, maintain a nutritious diet, consult a physician*.",
          examinerTips: [
            "Gerunds follow prepositions when discussing hobbies (*I am interested in painting*, *She is good at swimming*).",
            "Be prepared to describe a memorable cultural festival in writing and speaking."
          ],
          commonMistakes: [
            "Writing 'I am interested to paint' instead of 'I am interested in painting'.",
            "Misspelling health terms like 'cough', 'headache', and 'prescription'."
          ],
          recap: [
            "Use gerunds (-ing) after prepositions of interest.",
            "Incorporate cultural vocabulary for festivals.",
            "Describe symptoms accurately using modal health phrases."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "The World Around Us (Topic Area C)",
      section: "Communication Across Contexts",
      topic: "Urban and Rural Environments, Weather, Climate, Nature, and Conservation",
      intro:
        "Topic Area C equips learners to describe geography, neighborhood facilities, weather phenomena, natural habitats, and urgent environmental issues like recycling, clean energy, and wildlife conservation.",
      subheadings: [
        {
          title: "Town, Countryside, and Community Amenities",
          body:
            "**1. Urban vs. Rural Life:**\n" +
            "- Urban: *bustling metropolis, high-rise apartments, public transport grid, commercial hub, pedestrian zones, heavy traffic, vibrant nightlife*.\n" +
            "- Rural: *tranquil village, rolling hills, scenic countryside, agricultural fields, fresh air, remote community, close-knit neighborhood*.\n\n" +
            "**2. Local Infrastructure:**\n" +
            "- Facilities: *community recreation center, municipal library, medical clinic, sports pavilion, shopping mall, parkland*.",
          examinerTips: [
            "Use sensory adjectives (*noisy, fragrant, peaceful, overcrowded, polluted*) to bring environmental descriptions to life.",
            "Compare advantages and disadvantages of city living versus village life using contrasting linkers (*whereas, in contrast*)."
          ],
          commonMistakes: [
            "Saying 'too much people' instead of 'too many people' (people is a countable plural).",
            "Confusing 'quiet' (silent) with 'quite' (fairly/very)."
          ],
          recap: [
            "Balance urban amenities against rural tranquillity.",
            "Employ contrasting connectives for comparative questions.",
            "Remember that 'people' is countable."
          ]
        },
        {
          title: "Weather, Climate Change, and Environmental Protection",
          body:
            "**1. Weather and Climate Lexis:**\n" +
            "- Conditions: *mild breeze, scorching heatwave, torrential downpour, dense fog, sub-zero temperatures, overcast sky*.\n\n" +
            "**2. Sustainability and Eco-Action:**\n" +
            "- Environmental challenges: *deforestation, greenhouse gas emissions, rising sea levels, plastic accumulation, habitat destruction*.\n" +
            "- Sustainable solutions: *renewable solar/wind power, energy conservation, reforestation, waste recycling, public transit adoption*.",
          examinerTips: [
            "Use modal verbs of obligation (*must, should, ought to, have to*) when proposing environmental solutions.",
            "Distinguish between short-term 'weather' and long-term regional 'climate'."
          ],
          commonMistakes: [
            "Using 'weather' as a countable noun (e.g. saying 'a bad weather' instead of 'bad weather').",
            "Confusing 'affect' (verb) with 'effect' (noun)."
          ],
          recap: [
            "Weather is uncountable in English.",
            "Modals express conservation recommendations.",
            "Differentiate immediate weather from broader climate trends."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "The World of Work (Topic Area D)",
      section: "Communication Across Contexts",
      topic: "Professions, Employment, Job Seeking, Workplace Skills, and Career Aspirations",
      intro:
        "Topic Area D prepares students for professional communication, exploring career paths, part-time student employment, job advertisements, interview preparations, CV drafting, and future university ambitions.",
      subheadings: [
        {
          title: "Occupations, Workplaces, and Job Responsibilities",
          body:
            "**1. Diverse Career Fields:**\n" +
            "- Engineering, healthcare, education, software development, graphic design, hospitality, entrepreneurship, legal professions.\n\n" +
            "**2. Workplace Terminology:**\n" +
            "- *Salary, overtime wages, employment contract, flexible shifts, teamwork, professional development, deadlines, client meetings*.\n\n" +
            "**3. Job Duties and Routines:**\n" +
            "- Expressing obligations: *'As a nurse, she is responsible for administering medication'*, *'Engineers are required to inspect structural safety'*.",
          examinerTips: [
            "Use 'responsible for + gerund' (*responsible for organizing files*) or 'in charge of + gerund'.",
            "Learn spelling of common professions (e.g. *architect, electrician, pharmacist, journalist*)."
          ],
          commonMistakes: [
            "Saying 'I am work as a teacher' instead of 'I work as a teacher'.",
            "Using 'job' and 'work' interchangeably; 'job' is countable (*a job, three jobs*), but 'work' is uncountable."
          ],
          recap: [
            "Use 'responsible for + -ing' to describe workplace duties.",
            "'Job' is countable; 'work' is an uncountable noun.",
            "Master key professional titles and workplace terms."
          ]
        },
        {
          title: "Job Applications, Interviews, and Future Ambitions",
          body:
            "**1. Applying for a Position:**\n" +
            "- Formal letter phrases: *'I am writing to express my interest in the position of...', 'Please find attached my curriculum vitae (CV)...', 'I have substantial experience in customer service'*.\n\n" +
            "**2. Future Ambitions and Conditional Goals:**\n" +
            "- Future continuous and intention forms: *'I intend to study computer science'*, *'I hope to qualify as an architect'*, *'If I achieve high grades, I will attend university'*.\n\n" +
            "**3. Professional Soft Skills:**\n" +
            "- Punctuality, problem-solving, digital fluency, active communication, adaptability under pressure.",
          examinerTips: [
            "Use First Conditional (*If + present, will + infinitive*) to discuss career plans linked to exam results.",
            "Maintain formal language without contractions in written job applications."
          ],
          commonMistakes: [
            "Using 'will' in the 'if'-clause (e.g. writing 'If I will pass' instead of 'If I pass').",
            "Signing off a formal letter starting with 'Dear Mr. Smith' with 'Yours faithfully' instead of 'Yours sincerely'."
          ],
          recap: [
            "Formal applications require polished, polite phrasing.",
            "Conditional 1 links academic success to career opportunities.",
            "Remember: 'Dear Name' takes 'Yours sincerely'."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "The International World (Topic Area E)",
      section: "Communication Across Contexts",
      topic: "Travel, Tourism, International Culture, Global Issues, and Languages",
      intro:
        "Topic Area E embraces global citizenship, international travel, tourism, cross-cultural appreciation, learning foreign languages, and international cooperation across borders.",
      subheadings: [
        {
          title: "International Travel, Tourism, and Accommodation",
          body:
            "**1. Travel Logistics:**\n" +
            "- Airports and transit: *check-in desk, boarding pass, customs clearance, luggage allowance, delayed departure, passport control*.\n" +
            "- Accommodation: *youth hostel, luxury resort, self-catering chalet, reserve a double room, complimentary breakfast, check out before noon*.\n\n" +
            "**2. Narrative Tenses for Travel Recounts:**\n" +
            "- Combining Past Simple, Past Continuous, and Past Perfect (*'While we were boarding the coach, the guide announced that the flight had been postponed'*).",
          examinerTips: [
            "Use Past Continuous for setting background scenes (*The sun was shining as we landed*) and Past Simple for sequential actions.",
            "Remember that 'luggage' and 'baggage' are uncountable nouns in English."
          ],
          commonMistakes: [
            "Writing 'two luggages' instead of 'two pieces of luggage' or 'two bags'.",
            "Mixing up 'travel' (verb/uncountable), 'trip' (short journey, countable), and 'journey' (travel from A to B)."
          ],
          recap: [
            "Blend past narrative tenses to recount holiday experiences.",
            "'Luggage' and 'baggage' are uncountable.",
            "Distinguish between 'trip', 'journey', and 'travel'."
          ]
        },
        {
          title: "Cultural Diversity, Global Exchange, and Languages",
          body:
            "**1. Cultural Appreciation:**\n" +
            "- Cross-cultural experiences: *exchange programs, international cuisine, bilingual education, customs and traditions, celebrating heritage*.\n\n" +
            "**2. Global Cooperation:**\n" +
            "- International organizations, scientific collaborations, youth summits, volunteer initiatives across borders.\n\n" +
            "**3. Value of Multilingualism:**\n" +
            "- *'Speaking multiple languages breaks cultural barriers and opens international career horizons.'*",
          examinerTips: [
            "Express complex opinions using introductory clauses (*In my view, From an international perspective, It is widely acknowledged that*).",
            "Demonstrate understanding of how modern technology connects people across time zones."
          ],
          commonMistakes: [
            "Writing generalizations without concrete examples.",
            "Using informal contractions in formal discursive essays."
          ],
          recap: [
            "Multilingualism enriches cross-cultural understanding.",
            "Use formal viewpoint openers for global topics.",
            "Support arguments with concrete international examples."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Grammar, Communication & Exam Mastery (Topic Area F)",
      section: "Language Systems & Assessment",
      topic: "Tenses, Modals, Passive Voice, Relative Clauses, and Papers 1–4 Preparation",
      intro:
        "Mastering grammatical precision, syntax variety, and systematic assessment techniques across Reading (Paper 1), Writing (Paper 2), Listening (Paper 3), and Speaking (Paper 4) ensures the highest Cambridge grades.",
      subheadings: [
        {
          title: "Core Grammar Systems: Tenses, Modals, and Passive Voice",
          body:
            "**1. Tense Matrix:**\n" +
            "- **Present Perfect vs. Past Simple:** Use Past Simple for completed actions at specific times (*'I visited London in 2024'*); use Present Perfect for past actions with present relevance or unspecified times (*'I have visited three countries so far'*).\n\n" +
            "**2. Modal Verbs:**\n" +
            "- Ability: *can, could, be able to*.\n" +
            "- Permission / Possibility: *may, might, could*.\n" +
            "- Obligation / Advice: *must (internal obligation), have to (external rule), should (recommendation)*.\n\n" +
            "**3. Passive Voice Formations:**\n" +
            "- Object + appropriate tense of 'be' + Past Participle (*'The reports are examined by experts'*, *'The new railway was constructed last year'*).",
          examinerTips: [
            "Use passive constructions in formal reports and scientific descriptions to maintain objective distance.",
            "Remember that modal verbs are followed by the bare infinitive without 'to' (except *ought to, have to*)."
          ],
          commonMistakes: [
            "Writing 'I have visited him yesterday' (Past Simple must be used with specific past times).",
            "Adding 'to' after modals (e.g. 'He must to go')."
          ],
          recap: [
            "Past Simple specifies exact past times; Present Perfect links past to now.",
            "Modals take bare infinitives.",
            "Passive voice emphasizes actions over actors."
          ]
        },
        {
          title: "Complex Sentences and Papers 1–4 Exam Strategies",
          body:
            "**1. Relative Clauses:**\n" +
            "- Defining: essential information, no commas (*'The student who won the award is my classmate'*).\n" +
            "- Non-defining: extra information, surrounded by commas, cannot use 'that' (*'My uncle, who lives in Sydney, is visiting next month'*).\n\n" +
            "**2. Papers 1–4 Exam Techniques:**\n" +
            "- **Paper 1 (Reading):** Skim questions first, locate textual synonyms, keep answers direct.\n" +
            "- **Paper 2 (Writing):** Plan 3 minutes, maintain appropriate register, check spelling and punctuation.\n" +
            "- **Paper 3 (Listening):** Underline question keywords in the preview window; write numbers as digits.\n" +
            "- **Paper 4 (Speaking):** Speak in full sentences, use linking expressions, maintain comfortable eye contact.",
          examinerTips: [
            "In non-defining relative clauses, never use 'that'; use 'who' for people and 'which' for objects.",
            "Reserve 5 minutes at the end of written exams to check agreement, tense consistency, and punctuation."
          ],
          commonMistakes: [
            "Putting commas in defining relative clauses.",
            "Writing one-word answers in speaking examinations."
          ],
          recap: [
            "Non-defining relative clauses take commas and 'which/who'.",
            "Follow tailored strategies across Papers 1 to 4.",
            "Proofreading eliminates avoidable grammar slips."
          ]
        }
      ]
    }
  ]
};
