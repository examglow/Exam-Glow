import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE (9–1) German (7159) / (0525) 2028–2030 Syllabus Notes
 * Covers the 5 official Cambridge Topic Areas (A–E) plus German Grammar, Syntax, and Exam Mastery.
 */
export const GERMAN: SubjectNotes = {
  id: "german",
  name: "German",
  code: "7159",
  color: "bg-amber-600",
  chapters: [
    {
      number: 1,
      title: "Everyday Activities (Topic Area A)",
      section: "Topic Area A: Everyday Activities",
      topic: "Time Expressions, Daily Routine, Food and Drink, and Physical Environment",
      intro:
        "Topic Area A establishes essential communicative structures for everyday life in German-speaking countries. Candidates learn to tell the time and schedule appointments, master separable daily routine verbs (aufstehen, frühstücken, anziehen), discuss meals, groceries, and dining out (im Restaurant, im Supermarkt), and describe their home and local neighbourhood.",
      subheadings: [
        {
          title: "Telling the Time, Daily Routine, and Separable Verbs",
          body:
            "**1. Time Expressions in German:**\n" +
            "- **Asking the Time:** *Wie spät ist es?* or *Wie viel Uhr ist es?*\n" +
            "- **Clock Time Conventions:**\n" +
            "  - *Es ist acht Uhr* (It's 8:00).\n" +
            "  - *Es ist Viertel nach acht* (8:15) / *Viertel vor neun* (8:45).\n" +
            "  - *Es ist halb neun* (**Crucial:** In German, *halb neun* means half-way TO nine, i.e., 8:30!).\n" +
            "- **Prepositions of Time:** Use **um** for specific hours (*um acht Uhr*), **am** for days and parts of days (*am Montag, am Morgen*), and **im** for months and seasons (*im Juli, im Sommer*).\n\n" +
            "**2. Daily Routine and Separable Verbs (Trennbare Verben):**\n" +
            "- In present and simple past, prefixes detach and move to the very end of the main clause:\n" +
            "  - **Aufstehen** (to get up): *Ich stehe jeden Morgen um sieben Uhr **auf**.*\n" +
            "  - **Frühstücken** (to eat breakfast), **sich anziehen** (to get dressed), **fernsehen** (to watch TV: *Ich sehe abends **fern**.*), **einschlafen** (to fall asleep: *Er schläft um elf Uhr **ein**.*).\n" +
            "- In subordinate clauses with conjunctions like *weil* or *dass*, the verb stays together at the end: *...weil ich immer früh **aufstehe**.*",
          examinerTips: [
            "Beware of the *halb* trap: *halb acht* is 7:30, NOT 8:30. This is tested repeatedly in listening and reading comprehension.",
            "Remember that separable verb prefixes (auf, an, aus, mit, ein, fern) must always sit at the very end of the main clause in the present tense."
          ],
          commonMistakes: [
            "Translating 'at 8:30' as *um halb neun* thinking it means 9:30; *halb neun* is 8:30.",
            "Leaving the separable prefix attached to the verb in the main clause (*ich aufstehe* is ungrammatical; it must be *ich stehe auf*)."
          ],
          recap: [
            "Time: um [Uhrzeit] for clock time; halb zehn = 9:30.",
            "Prepositions: um (hours), am (days/parts of day), im (months/seasons).",
            "Separable verbs: prefix moves to the end of main clause (Ich stehe um 7 Uhr auf)."
          ]
        },
        {
          title: "Food, Drink, Groceries, and Eating Out",
          body:
            "**1. Meals and Food Vocabulary:**\n" +
            "- Das Frühstück (breakfast), das Mittagessen (lunch), das Abendessen / Abendbrot (dinner).\n" +
            "- **Staples:** Das Brot / die Brötchen (bread/rolls), der Käse (cheese), die Wurst (sausage/cold cuts), das Fleisch (meat), der Fisch (fish), das Obst (fruit), das Gemüse (vegetables).\n" +
            "- **Beverages:** Der Kaffee (coffee), der Tee (tea), das Wasser (water), der Saft (juice), die Milch (milk).\n\n" +
            "**2. Ordering in Cafés and Restaurants:**\n" +
            "- *Ich möchte bitte ein Schnitzel mit Pommes.* (I would like a schnitzel with chips, please.)\n" +
            "- *Ich hätte gern eine Apfelschorle.* (I'd like an apple spritzer.)\n" +
            "- *Haben Sie vegetarische Gerichte?* (Do you have vegetarian dishes?)\n" +
            "- *Zahlen, bitte! / Die Rechnung, bitte.* (The bill, please.)\n" +
            "- *Stimmt so.* (Keep the change - customary when rounding up tips in Germany).",
          examinerTips: [
            "Use the polite subjunctive *ich möchte* or *ich hätte gern* when ordering in speaking role plays rather than *ich will*.",
            "Remember that *die Schorle* (juice mixed with sparkling mineral water) is a ubiquitous cultural beverage in Germany."
          ],
          commonMistakes: [
            "Using *bekommen* to mean 'become'; *bekommen* means 'to receive/get'. *Ich bekomme ein Eis* means 'I am getting an ice cream', not becoming one!",
            "Confusing *das Essen* (food/meal) with the verb *essen* (to eat)."
          ],
          recap: [
            "Meals: das Frühstück, das Mittagessen, das Abendessen.",
            "Ordering: Ich möchte / Ich hätte gern...; Die Rechnung, bitte.",
            "False friend: bekommen = to receive/get (never 'to become')."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Personal and Social Life (Topic Area B)",
      section: "Topic Area B: Personal and Social Life",
      topic: "Self, Family, Appearance, Relationships, Clothing, and Leisure Pursuits",
      intro:
        "Topic Area B centers on personal identity, family life, friendships, and leisure pursuits. Candidates learn possessive determiners (mein, dein, sein, ihr), physical appearance and personality descriptions, clothing shopping vocabulary, and discussing sports, musical instruments, and weekend youth hobbies.",
      subheadings: [
        {
          title: "Family Members, Possessives, and Descriptions",
          body:
            "**1. Family Vocabulary:**\n" +
            "- Die Eltern (parents), der Vater (father), die Mutter (mother), der Bruder (brother), die Schwester (sister), die Großeltern (grandparents), der Onkel (uncle), die Tante (aunt), der Cousin / die Cousine (cousin).\n\n" +
            "**2. Possessive Determiners (mein, dein, sein, ihr, unser, euer, ihr/Ihr):**\n" +
            "- Possessives follow the pattern of indefinite articles (*ein, eine, ein*):\n" +
            "  - Masculine Nominative: *mein Vater* / Accusative: *mein**en** Vater*.\n" +
            "  - Feminine Nominative/Accusative: *mein**e** Mutter*.\n" +
            "  - Neuter Nominative/Accusative: *mein Kind*.\n" +
            "  - Plural Nominative/Accusative: *mein**e** Geschwister*.\n\n" +
            "**3. Physical Appearance and Character Adjectives:**\n" +
            "- **Appearance:** *Er hat blaue / braune / grüne Augen*; *sie hat lange, blonde / kurze, dunkle Haare*; *er ist groß / klein, schlank / sportlich*.\n" +
            "- **Personality:** Freundlich (friendly), hilfsbereit (helpful), lustig (funny), ehrlich (honest), fleißig (hardworking), faul (lazy), streng (strict).",
          examinerTips: [
            "Remember that hair (*die Haare*) is treated as plural in German: *Meine Haare sind braun* (not *ist braun*).",
            "Be sure to decline masculine possessives in the accusative direct object: *Ich besuche meinen Großvater* (with *-en*)."
          ],
          commonMistakes: [
            "Treating *Haare* as singular like English 'hair' (*mein Haar ist* instead of *meine Haare sind*).",
            "Forgetting the accusative ending *-en* on masculine possessives (*ich mag mein Vater* instead of *meinen Vater*)."
          ],
          recap: [
            "Family: die Eltern, der Vater, die Mutter, der Bruder, die Schwester.",
            "Possessive endings: mein, meine, mein; Accusative masculine = meinen.",
            "Hair is plural in German: Meine Haare sind blond."
          ]
        },
        {
          title: "Clothing, Shopping, and Youth Leisure Activities",
          body:
            "**1. Clothing (Die Kleidung):**\n" +
            "- Das Hemd (shirt), das T-Shirt (t-shirt), der Pullover / Pulli (jumper), die Hose (trousers - singular in German!), die Jeans (jeans), das Kleid (dress), der Rock (skirt), die Jacke (jacket), die Schuhe (shoes), die Stiefel (boots).\n" +
            "- **Shopping Phrases:**\n" +
            "  - *Welche Größe haben Sie?* (What size are you?)\n" +
            "  - *Kann ich das anprobieren?* (Can I try this on?)\n" +
            "  - *Wo sind die Umkleidekabinen?* (Where are the changing rooms?)\n" +
            "  - *Das passt mir gut / nicht.* (That fits me well / doesn't fit).\n\n" +
            "**2. Hobbies, Sports, and Free Time:**\n" +
            "- **Sports:** Fußball spielen (to play football), schwimmen gehen (to go swimming), Rad fahren (to cycle), Ski fahren (to ski).\n" +
            "- **Musical Instruments:** Ein Instrument spielen (*Klavier spielen, Gitarre spielen* - no preposition in German!).\n" +
            "- **Expressing Preference with GERN:**\n" +
            "  - In German, 'to like doing something' is expressed by adding the adverb **gern(e)** after the verb:\n" +
            "  - *Ich spiele gern Tennis* (I like playing tennis).\n" +
            "  - *Ich schwimme lieber* (I prefer swimming - comparative *lieber*).\n" +
            "  - *Am liebsten lese ich* (Most of all I like reading - superlative *am liebsten*).",
          examinerTips: [
            "Never translate 'I like playing' as *ich mag spielen*; use the natural German structure: `[Verb] + gern` (*Ich spiele gern Fußball*).",
            "Notice that *die Hose* (trousers) is feminine singular in German: *Meine Hose ist blau* (not *sind*)."
          ],
          commonMistakes: [
            "Saying *meine Hosen sind neu* when referring to a single pair of trousers; in German it is *meine Hose ist neu*.",
            "Using *spielen* with prepositions for instruments (*ich spiele auf der Gitarre* is wrong; write *ich spiele Gitarre*)."
          ],
          recap: [
            "Clothing: die Hose is singular in German; der Pullover, das Hemd, die Schuhe.",
            "Preferences: gern (like), lieber (prefer), am liebsten (like most of all).",
            "Sports & instruments: Fußball spielen, Gitarre spielen (no prepositions)."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "The World Around Us (Topic Area C)",
      section: "Topic Area C: The World Around Us",
      topic: "Places in Town, Giving Directions, Climate, Weather, and Public Transport",
      intro:
        "Topic Area C equips learners to describe towns and cities, ask for and give directions, discuss climatic and weather conditions, and navigate public transport systems (die Deutsche Bahn, die U-Bahn, die Straßenbahn) in German-speaking nations.",
      subheadings: [
        {
          title: "Town Facilities, Directions, and Two-Way Prepositions",
          body:
            "**1. Places in Town (Orte in der Stadt):**\n" +
            "- Der Bahnhof (train station), das Rathaus (town hall), die Post (post office), die Apotheke (pharmacy), die Kirche (church), die Bibliothek (library), das Kino (cinema), der Supermarkt (supermarket), das Krankenhaus (hospital).\n\n" +
            "**2. Asking and Giving Directions:**\n" +
            "- *Entschuldigung, wie komme ich zum Bahnhof?* (Excuse me, how do I get to the station?)\n" +
            "- *Gehen Sie geradeaus* (Go straight ahead - formal).\n" +
            "- *Biegen Sie links / rechts ab* (Turn left / right).\n" +
            "- *Nehmen Sie die erste / zweite Straße links* (Take the first / second street on the left).\n" +
            "- *Gehen Sie über die Brücke / den Platz* (Go across the bridge / square).\n\n" +
            "**3. Two-Way Prepositions (Wechselpräpositionen):**\n" +
            "- *an, auf, hinter, in, neben, über, unter, vor, zwischen*:\n" +
            "  - **Movement / Direction (Wohin? - Where to?):** Takes the **ACCUSATIVE** case.\n" +
            "    - *Ich gehe in **die** Stadt* (I am going into the town).\n" +
            "  - **Static Location (Wo? - Where at?):** Takes the **DATIVE** case.\n" +
            "    - *Ich bin in **der** Stadt* (I am in the town).",
          examinerTips: [
            "Master the Wo (Dative: position) vs Wohin (Accusative: movement) rule. *Ich gehe ins Kino* (in das = Accusative); *Ich bin im Kino* (in dem = Dative).",
            "When giving directions to adults, use the polite imperative: *Gehen Sie...*, *Biegen Sie ab...*"
          ],
          commonMistakes: [
            "Mixing up *nach Hause* (going home: motion) and *zu Hause* (at home: stationary).",
            "Using Dative with *wohin* questions (e.g. *ich gehe in dem Park* is wrong; motion requires Accusative: *in den Park*)."
          ],
          recap: [
            "Places: der Bahnhof, das Rathaus, die Apotheke, das Krankenhaus.",
            "Directions: geradeaus gehen, links/rechts abbiegen, über die Straße gehen.",
            "Two-way prepositions: Wo? = Dative (location); Wohin? = Accusative (motion)."
          ]
        },
        {
          title: "Weather, Seasons, and Public Transport",
          body:
            "**1. Weather Expressions (Das Wetter):**\n" +
            "- *Wie ist das Wetter heute?* (What's the weather like today?)\n" +
            "- *Es ist sonnig / wolkig / windig / neblig.* (It's sunny / cloudy / windy / foggy.)\n" +
            "- *Es regnet* (It's raining) / *Es schneit* (It's snowing) / *Es friert* (It's freezing).\n" +
            "- *Es ist warm / heiß / kalt / kühl.* (It's warm / hot / cold / cool.)\n" +
            "- **The Four Seasons:** Der Frühling (spring), der Sommer (summer), der Herbst (autumn), der Winter (winter) — all take the preposition **im** (*im Sommer*).\n\n" +
            "**2. Travelling by Transport (Die Verkehrsmittel):**\n" +
            "- **Transport Modes with MIT + Dative:**\n" +
            "  - *mit dem Zug / Bus / Auto / Fahrrad* (by train / bus / car / bike).\n" +
            "  - *mit der U-Bahn / Straßenbahn* (by underground / tram).\n" +
            "  - *zu Fuß gehen* (to walk on foot - no *mit*!).\n" +
            "- **At the Train Station:**\n" +
            "  - *Eine Fahrkarte nach München, bitte.* (A ticket to Munich, please.)\n" +
            "  - *Einfach oder hin und zurück?* (Single or return?)\n" +
            "  - *Von welchem Gleis fährt der Zug ab?* (Which platform/track does the train leave from?)\n" +
            "  - *Der Zug hat zehn Minuten Verspätung.* (The train has a 10-minute delay.)",
          examinerTips: [
            "The preposition **mit** ALWAYS takes the Dative case (*mit dem Zug, mit der Bahn*). This is tested constantly in writing and grammar.",
            "Remember that train tracks/platforms in Germany are called **das Gleis** (*auf Gleis 4*), not *der Bahnsteig* when referring to track numbers."
          ],
          commonMistakes: [
            "Saying *mit dem Fuß*; walking on foot is strictly *zu Fuß gehen*.",
            "Using *nach* for hours of delay; delay is expressed as *zehn Minuten Verspätung haben*."
          ],
          recap: [
            "Weather: Es regnet, es schneit; es ist sonnig/kalt; im Frühling/Sommer.",
            "Transport uses MIT + Dative: mit dem Zug, mit der U-Bahn, but zu Fuß.",
            "Train tickets: einfach (single), hin und zurück (return), Gleis (platform track)."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "The World of Work (Topic Area D)",
      section: "Topic Area D: The World of Work",
      topic: "The German School System, Subjects, Career Aspirations, and Technology",
      intro:
        "Topic Area D prepares candidates to discuss education, vocational training, future professions, and digital tools. Candidates explore the tripartite German secondary school system (Gymnasium, Realschule, Hauptschule), discuss academic likes and dislikes with reasons, talk about part-time jobs (Nebenjobs), and describe modern technology in study and employment.",
      subheadings: [
        {
          title: "The German School System, Subjects, and Opinions",
          body:
            "**1. The Secondary School System in Germany:**\n" +
            "- **Grundschule:** Primary school (grades 1–4).\n" +
            "- **Secondary Pathways (ab Klasse 5):**\n" +
            "  - *Das Gymnasium:* Academic secondary school culminating in the **Abitur** (university entrance qualification).\n" +
            "  - *Die Realschule:* Intermediate general secondary school leading to the *Mittlere Reife*.\n" +
            "  - *Die Hauptschule:* Basic secondary school preparing for vocational apprenticeships (*die Lehre / die Ausbildung*).\n" +
            "  - *Die Gesamtschule:* Comprehensive school combining all three tracks under one roof.\n\n" +
            "**2. School Subjects and Expressing Justified Opinions:**\n" +
            "- **Schulfächer:** Deutsch, Englisch, Mathe(matik), Biologie, Chemie, Physik, Geschichte, Erdkunde / Geografie, Kunst, Musik, Sport, Informatik.\n" +
            "- **Giving Reasons with WEIL (Subordinating Conjunction):**\n" +
            "  - *Weil* pushes the conjugated verb to the very end of the clause:\n" +
            "  - *Ich lerne gern Erdkunde, **weil** der Lehrer sehr nett **ist**.*\n" +
            "  - *Mathe gefällt mir nicht, **weil** es zu kompliziert **ist**.*",
          examinerTips: [
            "In speaking and writing, always justify opinions using *weil* (because) or *da* (since), and make sure the conjugated verb lands at the absolute end of the clause.",
            "German grades are numbered 1 to 6, where **1 is very good (sehr gut)** and **6 is failing (ungenügend)**. Knowing this avoids confusion in reading texts!"
          ],
          commonMistakes: [
            "Keeping normal word order after *weil* (*weil der Lehrer ist nett* is ungrammatical; must be *weil der Lehrer nett ist*).",
            "Assuming grade 1 is bad in Germany; 1 (*sehr gut*) is the highest possible grade."
          ],
          recap: [
            "School types: Gymnasium (leads to Abitur), Realschule, Hauptschule, Gesamtschule.",
            "Subordinate clause word order: weil... [Verb at the end].",
            "German grading scale: 1 is best (*sehr gut*), 6 is failing (*ungenügend*)."
          ]
        },
        {
          title: "Professions, Future Plans, and Modern Technology",
          body:
            "**1. Professions (Berufe) and Gender Suffixes:**\n" +
            "- Der Lehrer / die Lehrerin (teacher), der Arzt / die Ärztin (doctor), der Ingenieur / die Ingenieurin (engineer), der Verkäufer / die Verkäuferin (shop assistant), der Koch / die Köchin (chef), der Krankenpfleger / die Krankenschwester (nurse).\n" +
            "- **Rule:** Female professional titles add **-in** (and often an umlaut on root vowels: *Arzt* -> *Ärztin*).\n\n" +
            "**2. Expressing Future Plans and Ambitions:**\n" +
            "- **Becoming a Profession:** *Ich möchte Arzt werden* (I would like to become a doctor - note: NO indefinite article before profession!).\n" +
            "- **Future Intentions:**\n" +
            "  - *Nach der Schule will ich an der Universität studieren.* (After school I want to study at university.)\n" +
            "  - *Ich habe vor, eine Lehre als Mechaniker zu machen.* (I plan to do an apprenticeship as a mechanic.)\n" +
            "  - *Ich möchte die Welt bereisen.* (I would like to travel the world.)\n\n" +
            "**3. Technology and Media:**\n" +
            "- Das Handy / Smartphone, der Computer / Laptop, das Internet, soziale Medien (social media), Nachrichten schicken (send messages), recherchieren (research).",
          examinerTips: [
            "When stating a job title in German, omit the article: say *Ich bin Student* or *Ich möchte Ingenieur werden* (do NOT say *ein Ingenieur*).",
            "Use the structure `haben vor, ... zu [Infinitive]` (*Ich habe vor, Medizin zu studieren*) to score high marks for sophisticated syntax."
          ],
          commonMistakes: [
            "Adding 'a' before professions (*ich möchte ein Lehrer werden* is English phrasing; write *ich möchte Lehrer werden*).",
            "Forgetting the female suffix *-in* when writing about female professionals."
          ],
          recap: [
            "Professions: der Arzt / die Ärztin (female takes -in); omit 'ein' before jobs.",
            "Becoming: [Beruf] werden (Ich möchte Tierarzt werden).",
            "Future intention: Ich habe vor, ... zu studieren."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "The International World (Topic Area E)",
      section: "Topic Area E: The International World",
      topic: "Countries, Nationalities, German Traditions, Festivals, and Environmental Protection",
      intro:
        "Topic Area E connects linguistic skills to the geography, culture, traditions, and festivals of the DACH countries (Deutschland, Österreich, Schweiz). Candidates learn country names and nationalities, explore cultural celebrations (Oktoberfest, Karneval, Weihnachten, Ostern), and discuss global environmental initiatives.",
      subheadings: [
        {
          title: "The DACH Countries, Nationalities, and Traditions",
          body:
            "**1. The German-Speaking Nations (DACH-Länder):**\n" +
            "- **D**eutschland (Germany - capital: Berlin).\n" +
            "- **A** (Österreich - Austria - capital: Wien / Vienna).\n" +
            "- **CH** (Die Schweiz / Confoederatio Helvetica - Switzerland - capital: Bern).\n" +
            "- **Prepositions with Countries:**\n" +
            "  - Most countries are neuter and take **nach** for direction and **in** for location (*Ich fahre nach Deutschland; Ich wohne in Deutschland*).\n" +
            "  - **Exceptions (Feminine countries):** *Die Schweiz, die Türkei* take **in die** for motion and **in der** for location (*Ich fahre in die Schweiz; Ich wohne in der Schweiz*).\n\n" +
            "**2. Nationalities and Languages:**\n" +
            "- Deutschland -> der Deutsche / die Deutsche; Deutsch.\n" +
            "- Frankreich -> der Franzose / die Französin; Französisch.\n" +
            "- England / Großbritannien -> der Engländer / der Brite; Englisch.",
          examinerTips: [
            "Watch out for feminine countries: never say *nach Schweiz*; it MUST be *in die Schweiz* (accusative motion) or *in der Schweiz* (dative location).",
            "In German, both languages (*Deutsch, Englisch*) and nationalities (*der Deutsche*) are CAPITALIZED as nouns."
          ],
          commonMistakes: [
            "Writing *nach Schweiz*; Switzerland is feminine and requires *in die Schweiz*.",
            "Writing nationalities in lowercase like English adjectives; all German nouns are capitalized."
          ],
          recap: [
            "DACH: Deutschland (D), Österreich (A), die Schweiz (CH).",
            "Prepositions: nach Deutschland (neuter), but in die Schweiz (feminine motion).",
            "Languages and nationalities are always capitalized nouns in German."
          ]
        },
        {
          title: "Major Festivals, Celebrations, and Environmental Protection",
          body:
            "**1. German Cultural Celebrations and Festivals:**\n" +
            "- **Weihnachten (Christmas):**\n" +
            "  - *Der Advent:* Advent calendar (der Adventskalender) and wreath with four candles (der Adventskranz).\n" +
            "  - *Der Nikolaustag (6. Dezember):* St. Nikolaus puts sweets and nuts in cleaned boots.\n" +
            "  - *Der Weihnachtsmarkt:* Traditional festive markets with wooden stalls selling crafts and *Glühwein*.\n" +
            "  - *Heiligabend (24. Dezember):* Gifts are exchanged on Christmas Eve under the Tannenbaum.\n" +
            "- **Karneval / Fasching / Fastnacht:** The 'fifth season' in February with street parades and elaborate costumes, especially in Cologne (Köln) and Mainz.\n" +
            "- **Das Oktoberfest:** Held in Munich (München) from late September to early October; traditional Bavarian dirndls and lederhosen.\n\n" +
            "**2. Environmental Protection (Der Umweltschutz):**\n" +
            "- Der Klimawandel (climate change), die erneuerbaren Energien (renewable energies: *Solar- und Windenergie*), Energie sparen (to save energy), Müll trennen (to sort rubbish), das Pfandsystem (bottle deposit return system in supermarkets).",
          examinerTips: [
            "Referring to German-specific cultural concepts like *der Weihnachtsmarkt*, *der Nikolaustag*, or *das Pfandsystem* demonstrates cultural enrichment.",
            "Use modal verbs to discuss the environment: *Wir müssen Energie sparen und Müll trennen*."
          ],
          commonMistakes: [
            "Thinking Christmas gifts are opened on December 25th in Germany; the main gift-giving (*Bescherung*) happens on Christmas Eve, December 24th (*Heiligabend*).",
            "Writing *Oktoberfest* in November; it begins in September and ends in the first days of October."
          ],
          recap: [
            "Festivals: Weihnachten (Heiligabend is 24 Dec), Nikolaus (6 Dec), Karneval/Fasching, Oktoberfest in Munich.",
            "Environmental terms: der Klimawandel, erneuerbare Energien, Müll trennen.",
            "The Pfandsystem returns monetary deposits on recyclable drink containers."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "German Grammar, Syntax, and Exam Mastery",
      section: "Language Systems & Assessment Skills",
      topic: "Word Order (TMP, V2, Subordination), Cases, and Papers 1–4 Strategy",
      intro:
        "Mastering German syntax and word order rules is the definitive hallmark of top grades in Cambridge IGCSE German. This chapter covers the Verb-Second rule (V2), Time-Manner-Place (TMP), the four cases (Nominative, Accusative, Dative, Genitive), subordinate clause verb kickers, and targeted strategies for Papers 1 (Listening), 2 (Reading), 3 (Speaking), and 4 (Writing).",
      subheadings: [
        {
          title: "German Word Order: V2, TMP, and Subordination",
          body:
            "**1. The Verb-Second Rule (V2) in Main Clauses:**\n" +
            "- In a standard main clause, the finite conjugated verb MUST always occupy **position two**:\n" +
            "  - Standard: *Ich [1] **gehe** [2] heute ins Kino.*\n" +
            "  - Inverted (Starting with time/place): *Heute [1] **gehe** [2] ich ins Kino.*\n" +
            "- If you start a sentence with anything other than the subject, the subject flips to position three right after the verb!\n\n" +
            "**2. Time - Manner - Place (TMP):**\n" +
            "- When multiple adverbs/adverbial phrases occur in a sentence, follow the strict TMP sequence:\n" +
            "  1. **Time (Wann?):** *heute, um 8 Uhr, am Wochenende*.\n" +
            "  2. **Manner (Wie?):** *mit dem Bus, gern, schnell, allein*.\n" +
            "  3. **Place (Wo/Wohin?):** *nach Berlin, in die Schule, nach Hause*.\n" +
            "  - *Example:* Ich fahre **morgen** [Time] **mit dem Zug** [Manner] **nach Köln** [Place].\n\n" +
            "**3. Subordinate Clause Conjunctions (Verb Kicking):**\n" +
            "- Subordinating conjunctions send the conjugated verb to the very end of the clause:\n" +
            "  - *weil* (because), *dass* (that), *obwohl* (although), *wenn* (if/when), *als* (when - single past event), *da* (since).\n" +
            "  - *Example:* Obwohl das Wetter schlecht **war**, sind wir spazieren gegangen.",
          examinerTips: [
            "Check position two: if you begin a sentence with *Gestern*, the verb MUST come immediately next: *Gestern **ging** ich*, NEVER *Gestern ich ging*.",
            "Apply TMP: remember Time before Manner before Place. This earns immediate credit for sophisticated syntax."
          ],
          commonMistakes: [
            "Writing English word order after a time phrase (*Gestern ich habe gespielt* is a major grammatical blunder; write *Gestern habe ich gespielt*).",
            "Leaving the verb in the middle after *weil* or *obwohl*."
          ],
          recap: [
            "Main clause: Finite verb must be in Position 2 (V2 rule).",
            "Adverb sequence: Time - Manner - Place (TMP).",
            "Subordinating conjunctions (weil, dass, obwohl, wenn) kick the verb to the end."
          ]
        },
        {
          title: "The Four Cases: Articles, Pronouns, and Prepositions",
          body:
            "**1. Case Functions and Definite Article Changes:**\n" +
            "- **Nominative (Subject):** der, die, das, die.\n" +
            "- **Accusative (Direct Object / Motion):** **den**, die, das, die (Only masculine changes: *der -> den*!).\n" +
            "- **Dative (Indirect Object / Static location):** **dem**, **der**, **dem**, **den (+n)**.\n" +
            "- **Genitive (Possession):** des (+s), der, des (+s), der.\n\n" +
            "**2. Preposition Case Triggers:**\n" +
            "- **Accusative Only Prepositions:** *durch, für, gegen, ohne, um* (Mnemonic: **DOGFU**).\n" +
            "  - *Das Geschenk ist für **meinen** Bruder.*\n" +
            "- **Dative Only Prepositions:** *aus, bei, mit, nach, seit, von, zu*.\n" +
            "  - *Ich fahre mit **dem** Bus; Ich wohne bei **meiner** Tante.*\n" +
            "- **Two-Way Prepositions (Accusative/Dative):** *an, auf, hinter, in, neben, über, unter, vor, zwischen*.",
          examinerTips: [
            "Memorize the Dative prepositions: *aus, bei, mit, nach, seit, von, zu*. Any noun following these prepositions MUST take Dative endings.",
            "Remember that *seit* (since/for) takes the present tense in German: *Ich lerne seit drei Jahren Deutsch* (I have been learning German for 3 years)."
          ],
          commonMistakes: [
            "Using past tense with *seit*; German uses present tense because the action is still continuing.",
            "Using Accusative after *mit* (*mit den Zug* is wrong; must be Dative *mit dem Zug*)."
          ],
          recap: [
            "Cases: Nominative (subject), Accusative (object/motion), Dative (recipient/location).",
            "Accusative prepositions: durch, für, gegen, ohne, um.",
            "Dative prepositions: aus, bei, mit, nach, seit, von, zu."
          ]
        },
        {
          title: "Cambridge Papers 1 to 4 Assessment Strategy",
          body:
            "**1. Paper 1 Listening (~50 min, 40 marks):**\n" +
            "- Read questions during introductory pauses; underline question words (*Wer, Wo, Wann, Warum, Wie viel*).\n" +
            "- Watch out for negations (*nicht, kein, nie*) and contrast words (*aber, jedoch, trotzdem*).\n\n" +
            "**2. Paper 2 Reading (1 hour, 45 marks):**\n" +
            "- Multiple-choice, matching, and short German answers. Keep answers brief and factual.\n" +
            "- Ensure your pronouns and verb endings match if adapting phrases from the passage.\n\n" +
            "**3. Paper 3 Speaking (~10 min, 40 marks):**\n" +
            "- Two role plays (10 marks) and conversation (30 marks).\n" +
            "- Develop your answers using connectives (*weil, obwohl, außerdem*) and give reasons for preferences.\n\n" +
            "**4. Paper 4 Writing (1 hour, 45 marks):**\n" +
            "- Form-filling, 80–90 word guided letter, and 130–140 word structured essay.\n" +
            "- You must address all bullet points in the prompt.\n" +
            "- Demonstrate past tense (Perfekt: *Ich habe gegessen, Ich bin gefahren*), future (werden + infinitive), modal verbs, and subordinate clauses.",
          examinerTips: [
            "In Paper 4 Writing, tick off every bullet point as you address it. Omitting one bullet directly penalizes your task completion mark.",
            "Always include at least one past tense (*Perfekt*), one future plan (*Ich werde...*), and one justified opinion (*weil...*) in your 130-word essay."
          ],
          commonMistakes: [
            "Forgetting that verbs of motion take *sein* in the perfect tense (*ich bin gefahren*, not *ich habe gefahren*).",
            "Writing *weil* without moving the verb to the end in writing exams."
          ],
          recap: [
            "Paper 1: listen for negations and mind changes.",
            "Paper 2: answer factually without over-lifting.",
            "Paper 4: address all bullet points and showcase past, present, future, and 'weil' subordinate clauses."
          ]
        }
      ]
    }
  ]
};
