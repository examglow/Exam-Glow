import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Italian (0535) 2028–2030 Syllabus Notes
 * Covers the 5 official Cambridge Topic Areas (A–E) plus Grammar, Syntax, and Exam Mastery.
 */
export const ITALIAN: SubjectNotes = {
  id: "italian",
  name: "Italian",
  code: "0535",
  color: "bg-emerald-600",
  chapters: [
    {
      number: 1,
      title: "Everyday Activities (Topic Area A)",
      section: "Topic Area A: Everyday Activities",
      topic: "Time Expressions, Daily Routine, Food and Drink, and Physical Environment",
      intro:
        "Topic Area A establishes foundational vocabulary and communicative structures for daily life in Italy. Candidates learn to tell time and describe daily schedules, master reflexive routine verbs (svegliarsi, alzarsi, prepararsi), explore Italian cuisine and dining culture (al bar, al ristorante, cibi e bevande), and describe their home and local neighbourhood.",
      subheadings: [
        {
          title: "Telling Time, Daily Routine, and Reflexive Verbs",
          body:
            "**1. Telling Time in Italian:**\n" +
            "- **Asking the Time:** *Che ora è?* or *Che ore sono?*\n" +
            "- **Stating the Hour:**\n" +
            "  - Singular (1:00, midday, midnight): *È l'una* (It's 1:00), *È mezzogiorno* (It's midday), *È mezzanotte* (It's midnight).\n" +
            "  - Plural (all other hours): *Sono le due* (2:00), *Sono le sette e un quarto* (7:15), *Sono le otto e mezza* (8:30), *Sono le nove meno un quarto* (8:45).\n" +
            "- **Preposition for Time:** Use `alle` (+ hour): *Il treno parte alle otto* (The train departs at 8:00); *all'una* (at 1:00).\n\n" +
            "**2. Daily Routine with Reflexive Verbs (I Verbi Riflessivi):**\n" +
            "- Routine actions where the subject acts upon itself require reflexive pronouns (*mi, ti, si, ci, vi, si*):\n" +
            "  - **Svegliarsi** (to wake up): *io mi sveglio, tu ti svegli, lui/lei si sveglia, noi ci svegliamo, voi vi svegliate, loro si svegliano*.\n" +
            "  - **Alzarsi** (to get out of bed), **lavarsi** (to wash oneself), **vestirsi** (to get dressed), **addormentarsi** (to fall asleep).\n" +
            "- **In the Passato Prossimo:** All reflexive verbs MUST take the auxiliary verb **essere**, and the past participle must agree in gender and number with the subject:\n" +
            "  - *Marco si è alzato alle sette* (Marco got up at seven).\n" +
            "  - *Giulia si è alzata alle sette* (Giulia got up at seven).\n" +
            "  - *Ci siamo svegliati presto* (We woke up early).",
          examinerTips: [
            "In past tense narratives, always remember: reflexive verbs use ESSERE and the past participle must agree (e.g. *mi sono svegliata* for a female speaker).",
            "Use *alle* before plural hours (e.g. *alle dieci*), but *all'una* before 1:00."
          ],
          commonMistakes: [
            "Using *avere* with reflexive verbs (e.g. writing *ho svegliato* instead of *mi sono svegliato*).",
            "Saying *sono le una*; the number one is feminine singular (*è l'una*)."
          ],
          recap: [
            "Time: È l'una (1:00); Sono le [ore] for 2:00–12:00; use alle for 'at X o'clock'.",
            "Reflexive pronouns: mi, ti, si, ci, vi, si.",
            "Passato prossimo of reflexives: always with essere and agreeing participle (si è alzata)."
          ]
        },
        {
          title: "Italian Food Culture, Meals, and Ordering at the Bar",
          body:
            "**1. Meals and Daily Food Habits:**\n" +
            "- **Meals:** La prima colazione (breakfast - usually sweet: *caffè, cornetto, biscotti*), il pranzo (lunch - historically the main meal: *primo, secondo, contorno*), la merenda (afternoon snack), la cena (dinner).\n" +
            "- **Courses:** Gli antipasti (starters), i primi piatti (pasta, risotto, gnocchi, zuppa), i secondi piatti (carne, pesce), i contorni (verdure, insalata), il dolce (dessert).\n\n" +
            "**2. Communicative Phrases for Ordering:**\n" +
            "- **Al Bar / Al Ristorante:**\n" +
            "  - *Vorrei un caffè macchiato e un cornetto, per favore.* (I would like a macchiato and a croissant, please.)\n" +
            "  - *Prendo la pizza margherita.* (I'll take the margherita pizza.)\n" +
            "  - *Il conto, per favore.* (The bill, please.)\n" +
            "  - *Quant'è?* (How much is it?)\n" +
            "- **Dietary Preferences:** *Sono vegetariano/a* (I am vegetarian); *Sono celiaco/a* (I have celiac disease / gluten-free); *Sono allergico/a ai crostacei* (I am allergic to shellfish).",
          examinerTips: [
            "Use the polite conditional *vorrei* (I would like) rather than the blunt *voglio* (I want) when ordering in role-play speaking exams.",
            "Know the difference between *un caffè* (an espresso in Italy) and *caffè latte* or *cappuccino*."
          ],
          commonMistakes: [
            "Asking for *peperoni* expecting meat sausage; in Italian *peperoni* means bell peppers. Spicy salami is *salame piccante*.",
            "Using *prendere* without the direct article (*prendo la pasta*, not *prendo pasta*)."
          ],
          recap: [
            "Meals: la colazione, il pranzo, la cena.",
            "Ordering: Vorrei... per favore; Prendo...; Il conto, per favore.",
            "Dietary: Sono vegetariano/a; Sono allergico/a a..."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Personal and Social Life (Topic Area B)",
      section: "Topic Area B: Personal and Social Life",
      topic: "Family Relationships, Physical and Character Descriptions, Clothing, and Leisure",
      intro:
        "Topic Area B centers on personal identity, family dynamics, friendships, home life, and leisure pursuits. Candidates learn possessive adjectives (mio, tuo, suo), physical and psychological character descriptions, clothing styles and shopping dialogues, and discussing weekend hobbies and youth sports culture.",
      subheadings: [
        {
          title: "Family Members, Possessive Adjectives, and Descriptions",
          body:
            "**1. Family Vocabulary:**\n" +
            "- I genitori (parents), il padre / papà (father), la madre / mamma (mother), il fratello (brother), la sorella (sister), i nonni (grandparents), lo zio / la zia (uncle/aunt), il cugino / la cugina (cousin), il figlio / la figlia (son/daughter).\n\n" +
            "**2. The Golden Rule of Possessive Adjectives in Italian:**\n" +
            "- In Italian, possessives take the definite article (*il mio cane, la mia casa, i miei amici, le mie scarpe*).\n" +
            "- **Exception for Singular Family Members:** Do NOT use the definite article with a singular, unmodified family member:\n" +
            "  - Correct: *mio padre*, *mia madre*, *mio fratello*, *mia nonna*.\n" +
            "  - Incorrect: *il mio padre* (WRONG).\n" +
            "- **Exceptions to the Exception:**\n" +
            "  1. Plural family members TAKE the article: *i miei fratelli*, *le mie sorelle*.\n" +
            "  2. Modified/affectionate family terms TAKE the article: *il mio papà*, *la mia sorellina*.\n" +
            "  3. *Loro* ALWAYS takes the article: *il loro padre*, *la loro madre*.\n\n" +
            "**3. Physical Appearance and Personality Adjectives:**\n" +
            "- **Appearance:** *Ha gli occhi azzurri / marroni / verdi* (has blue/brown/green eyes); *ha i capelli lisci / ricci / biondi / castani* (has straight/curly/blonde/brown hair); *è alto/basso, magro/robusto*.\n" +
            "- **Personality:** Simpatico (nice/friendly), gentile (kind), divertente (funny), estroverso (outgoing), timido (shy), pigro (lazy), lavoratore (hardworking).",
          examinerTips: [
            "Master the possessive rule with family: *mio fratello* has NO article, but *i miei fratelli* (plural) and *il mio fratellino* (diminutive) DO take the article.",
            "Adjectives ending in -o change to -a (fem sing), -i (masc pl), -e (fem pl). Adjectives ending in -e (gentile, intelligente) change only to -i in the plural."
          ],
          commonMistakes: [
            "Writing *il mio fratello* in essays; singular unmodified family members never take the definite article.",
            "Describing hair with *essere* (e.g. *sono castano*); use *avere*: *ho i capelli castani*."
          ],
          recap: [
            "Family: il padre, la madre, il fratello, la sorella, i genitori.",
            "Possessive rule: mio padre (no article), but i miei genitori and il loro padre.",
            "Descriptions: Ho i capelli ricci; È simpatico/a e intelligente."
          ]
        },
        {
          title: "Clothing, Shopping, and Leisure Activities",
          body:
            "**1. Clothing (L'abbigliamento) and Materials:**\n" +
            "- Una camicia (shirt), una maglietta (t-shirt), una giacca (jacket), i pantaloni (trousers), i jeans (jeans), una gonna (skirt), un vestito (dress), le scarpe (shoes), gli stivali (boots), un cappotto (coat).\n" +
            "- **Colours and Agreements:** Nero, bianco, rosso, giallo, verde, azzurro change for gender and number. Invariable colours (*blu, rosa, marrone, arancione, viola*) do not change for masculine/feminine.\n" +
            "- **Shopping Expressions:**\n" +
            "  - *Che taglia porta?* (What size do you wear?)\n" +
            "  - *Posso provarlo/a?* (Can I try it on?)\n" +
            "  - *Dov'è il camerino?* (Where is the fitting room?)\n" +
            "  - *È troppo stretto / largo.* (It's too tight / loose.)\n\n" +
            "**2. Free Time and Hobbies:**\n" +
            "- **Verbs with Hobbies:**\n" +
            "  - **Giocare a** (+ ball games/sports): *giocare a calcio, a tennis, a pallavolo*.\n  - **Suonare** (+ musical instruments): *suonare il pianoforte, la chitarra, la batteria* (no preposition).\n  - **Fare** (+ activities): *fare sport, fare una passeggiata, fare nuoto*.\n" +
            "- **Expressing Preference:** *Mi piace molto...* (singular / infinitive); *Mi piacciono...* (plural nouns): *Mi piace ascoltare la musica; Mi piacciono i videogiochi*.",
          examinerTips: [
            "Never confuse *giocare* (playing sports/games) with *suonare* (playing musical instruments). Writing *giocare il piano* loses vocabulary marks immediately.",
            "Use *mi piace* with singular nouns and verbs (*mi piace nuotare*), but *mi piacciono* with plural nouns (*mi piacciono le scarpe*)."
          ],
          commonMistakes: [
            "Using *giocare* with musical instruments (*suono la chitarra*, not *gioco*).",
            "Writing *mi piace i libri*; before a plural noun you must use *mi piacciono*."
          ],
          recap: [
            "Clothing: una camicia, una gonna, i pantaloni, le scarpe.",
            "Music vs Sports: suonare la chitarra (instrument) vs giocare a calcio (sport).",
            "Mi piace + infinitive/singular noun; Mi piacciono + plural nouns."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "The World Around Us (Topic Area C)",
      section: "Topic Area C: The World Around Us",
      topic: "Places in Town, Asking Directions, Climate, Weather, and Public Transport",
      intro:
        "Topic Area C expands communication to public urban and rural environments. Candidates learn to navigate towns and cities, ask for and follow directions, discuss climate and seasonal weather conditions, and book train, bus, and plane travel in Italy.",
      subheadings: [
        {
          title: "Town Facilities, Services, and Giving Directions",
          body:
            "**1. Public Buildings and Services:**\n" +
            "- La piazza (town square), il municipio / comune (town hall), l'ufficio postale (post office), la farmacia (pharmacy), la chiesa (church), la stazione ferroviaria (train station), la biblioteca (library), il mercato (market).\n\n" +
            "**2. Directions and Spatial Prepositions:**\n" +
            "- **Asking for Directions:** *Scusi, per andare alla stazione?* (Excuse me, how do I get to the station?) or *Dov'è la farmacia più vicina?* (Where is the nearest pharmacy?).\n" +
            "- **Giving Directions:**\n" +
            "  - *Vada dritto* (Go straight ahead - formal) / *Va' dritto* (informal).\n" +
            "  - *Giri a destra / a sinistra* (Turn right / left).\n" +
            "  - *Prenda la prima / seconda strada* (Take the first / second street).\n" +
            "  - *Attraversi la piazza / il ponte* (Cross the square / bridge).\n" +
            "- **Location Prepositions:** Davanti a (in front of), dietro (behind), accanto a (next to), di fronte a (opposite), tra / fra (between).",
          examinerTips: [
            "In role plays, use formal imperative when speaking to an adult stranger (*giri a destra, prenda la prima strada*).",
            "Combine prepositions with definite articles (*davanti alla scuola, accanto al cinema*)."
          ],
          commonMistakes: [
            "Confusing *destra* (right) with *dritto* (straight ahead). *Vada dritto* means straight; *giri a destra* means turn right.",
            "Forgetting prepositions required by locative phrases (*di fronte a*, not just *di fronte*)."
          ],
          recap: [
            "Places: la piazza, la farmacia, la stazione, l'ufficio postale.",
            "Directions: Vada dritto, giri a destra/sinistra, prenda la seconda traversa.",
            "Locatives: di fronte a (opposite), accanto a (next to), dietro (behind)."
          ]
        },
        {
          title: "Weather, Seasons, and Travelling by Transport",
          body:
            "**1. Weather Expressions (Il tempo atmosferico):**\n" +
            "- **With Fare:** *Che tempo fa?* (What's the weather like?); *Fa bel tempo* (The weather is nice); *Fa brutto tempo* (The weather is bad); *Fa caldo* (It's hot); *Fa freddo* (It's cold).\n" +
            "- **Verbs and Adjectives:**\n" +
            "  - *Piove* (It's raining) / *La pioggia* (the rain).\n" +
            "  - *Nevica* (It's snowing) / *La neve* (the snow).\n" +
            "  - *C'è il sole* (It's sunny) / *C'è la nebbia* (It's foggy) / *C'è vento* (It's windy).\n" +
            "  - *Il cielo è nuvoloso* (The sky is cloudy).\n\n" +
            "**2. Transport and Travel in Italy:**\n" +
            "- **Modes of Transport:** In treno (by train), in autobus (by bus), in aereo (by plane), in macchina / automobile (by car), in bicicletta (by bike), a piedi (on foot).\n" +
            "- **At the Train Station (Alla stazione):**\n" +
            "  - *Un biglietto di andata e ritorno per Firenze, per favore.* (A return ticket to Florence, please.)\n" +
            "  - *Di sola andata* (One way / single).\n" +
            "  - *Da quale binario parte il treno?* (Which platform does the train depart from?)\n" +
            "  - *Il treno è in ritardo / in orario.* (The train is delayed / on time.)",
          examinerTips: [
            "Remember prepositions of transport: use **in** for vehicles (*in treno, in macchina, in aereo*), but **a** for walking (*a piedi*) or horses (*a cavallo*).",
            "In weather descriptions, use *fa caldo/freddo*, never *è caldo* for atmospheric temperature."
          ],
          commonMistakes: [
            "Saying *il tempo è caldo*; in Italian weather uses *fare* (*fa caldo*).",
            "Confusing *binario* (train track/platform) with *piattaforma*."
          ],
          recap: [
            "Weather: Che tempo fa? Fa caldo/freddo; Piove; Nevica; C'è il sole.",
            "Transport: in treno, in aereo, in macchina, but a piedi (on foot).",
            "Train terms: biglietto di andata e ritorno, binario (platform), in ritardo."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "The World of Work (Topic Area D)",
      section: "Topic Area D: The World of Work",
      topic: "School Life, Academic Subjects, Jobs, Careers, and Modern Technology",
      intro:
        "Topic Area D prepares learners to discuss education, professions, career goals, and digital communication. Candidates learn to compare school systems (il liceo, l'istituto tecnico), discuss academic strengths and weaknesses, talk about part-time jobs and future plans, and describe the role of technology in work and study.",
      subheadings: [
        {
          title: "School Life, Subjects, and the Italian Education System",
          body:
            "**1. School Stages in Italy:**\n" +
            "- La scuola primaria / elementare (primary school: ages 6–11).\n" +
            "- La scuola secondaria di primo grado / media (middle school: ages 11–14).\n" +
            "- La scuola secondaria di secondo grado / superiore (high school: ages 14–19):\n" +
            "  - *Il Liceo:* Academic focus (Classico: Latin/Greek; Scientifico: sciences/maths; Linguistico: modern languages).\n" +
            "  - *L'Istituto Tecnico:* Technical/practical vocational training (economy, engineering, tourism).\n\n" +
            "**2. Subjects and Expressing Opinions:**\n" +
            "- **Materia scolastica:** La matematica, le scienze, la storia, la geografia, l'inglese, l'italiano, l'educazione fisica, l'arte, la musica, l'informatica.\n" +
            "- **Expressing Opinions with Reasons:**\n" +
            "  - *Trovo la storia affascinante perché...* (I find history fascinating because...).\n" +
            "  - *La matematica è impegnativa ma utile.* (Maths is demanding but useful.)\n" +
            "  - *Vado bene / male in...* (I do well / poorly in [subject]).",
          examinerTips: [
            "Use connectives like *perché* (because), *poiché* (since), and *sebbene* (although) to build complex sentences in writing.",
            "Use the idiom *andare bene/male in* to express subject performance: *vado molto bene in matematica*."
          ],
          commonMistakes: [
            "Translating 'I am good at' as *sono buono a*; in Italian you say *sono bravo/a in* or *vado bene in*.",
            "Forgetting that school subjects take the definite article (*mi piace la storia*, not *mi piace storia*)."
          ],
          recap: [
            "Italian schools: la scuola media, il liceo (scientifico, classico, linguistico).",
            "Performance: Vado bene in matematica; Sono bravo/a in scienze.",
            "Connectives: perché (because), ma (but), quindi (therefore)."
          ]
        },
        {
          title: "Professions, Future Plans, and Modern Technology",
          body:
            "**1. Occupations and Workplaces:**\n" +
            "- L'insegnante / il professore (teacher), il medico / dottore (doctor), l'ingegnere (engineer), l'avvocato (lawyer), l'impiegato (office worker), il commesso (shop assistant), il cuoco (chef), il giornalista (journalist).\n" +
            "- **Workplaces:** Un ufficio (office), un ospedale (hospital), una scuola (school), un negozio (shop), un'azienda / fabbrica (company/factory).\n\n" +
            "**2. Future Ambitions and Career Intentions:**\n" +
            "- **Da grande:** *Da grande vorrei fare il medico* (When I grow up I would like to be a doctor).\n" +
            "- **Structures for Future Intent:**\n" +
            "  - *Ho intenzione di studiare all'università.* (I intend to study at university.)\n" +
            "  - *Spero di trovare un lavoro gratificante.* (I hope to find a rewarding job.)\n" +
            "  - *Dopo gli esami, farò un anno sabbatico.* (After the exams, I will take a gap year.)\n\n" +
            "**3. Technology in Modern Communication:**\n" +
            "- Il computer / portatile (laptop), lo smartphone (smartphone), i social network (social networks), scaricare file (download files), navigare su internet (surf the internet).",
          examinerTips: [
            "Notice the Italian pattern: *fare il medico / fare l'ingegnere* (to work as a doctor/engineer) uses the verb *fare* + definite article.",
            "In essays, demonstrate future tense (*studierò, lavorerò, viaggerò*) alongside conditional wishes (*vorrei, mi piacerebbe*)."
          ],
          commonMistakes: [
            "Saying *voglio essere un medico*; native Italian phrasing uses *vorrei fare il medico*.",
            "Confusing *il lavoro* (the job/work itself) with *il posto di lavoro* (the workplace/position)."
          ],
          recap: [
            "Occupations: fare il medico, l'ingegnere, l'insegnante, l'avvocato.",
            "Ambition: Da grande vorrei fare...; Spero di + infinitive.",
            "Technology: scaricare app, navigare su internet, mandare messaggi."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "The International World (Topic Area E)",
      section: "Topic Area E: The International World",
      topic: "Countries, Nationalities, Italian Traditions, Festivals, and Cultural Heritage",
      intro:
        "Topic Area E connects language to Italian history, geography, regional diversity, and international outlook. Candidates learn country names and nationalities, explore Italy's 20 distinct regions and culinary traditions, study major festivals (Carnevale, Natale, Pasqua, Ferragosto), and discuss environmental challenges.",
      subheadings: [
        {
          title: "Countries, Nationalities, and Regional Italy",
          body:
            "**1. Countries and Nationalities:**\n" +
            "- L'Italia (italiano/a), la Francia (francese), la Germania (tedesco/a), la Spagna (spagnolo/a), il Regno Unito / l'Inghilterra (inglese), gli Stati Uniti (americano/a), la Cina (cinese), il Giappone (giapponese).\n" +
            "- **Prepositions with Countries and Cities:**\n" +
            "  - Use **in** with countries and regions: *Vado in Italia, vivo in Toscana*.\n" +
            "  - Use **a** with cities and small islands: *Vado a Roma, vivo a Venezia, a Capri*.\n" +
            "  - Coming from: *Vengo dall'Italia (country with da + article)* vs *Vengo da Roma (city with bare da)*.\n\n" +
            "**2. Italy's Regional Diversity and Heritage:**\n" +
            "- 20 regions divided into North (Nord: Lombardia, Piemonte, Veneto), Central (Centro: Toscana, Lazio, Umbria), and South and Islands (Sud e Isole: Campania, Puglia, Sicilia, Sardegna).\n" +
            "- Famous landmarks: Il Colosseo a Roma, la Torre di Pisa in Toscana, i canali di Venezia in Veneto, gli scavi di Pompei in Campania.",
          examinerTips: [
            "Always remember: **in** + country (*in Italia, in Francia*), but **a** + city (*a Roma, a Milano, a Napoli*). This is tested constantly in writing and reading.",
            "Remember that nationalities in Italian are NOT capitalized in lowercase when used as adjectives: *un ragazzo italiano*."
          ],
          commonMistakes: [
            "Writing *vado a Italia*; countries require *in* (*in Italia*).",
            "Capitalizing nationalities like English (*sono Italiano* is incorrect; write *sono italiano*)."
          ],
          recap: [
            "Prepositions: in Italia (country), a Roma (city), da Firenze (from a city).",
            "Nationalities: italiano, francese, tedesco, spagnolo, inglese (lowercase).",
            "Regional geography: 20 regions with distinct monuments and culinary specialties."
          ]
        },
        {
          title: "Italian Festivals, Cultural Traditions, and Celebrations",
          body:
            "**1. Major Italian Holidays and Festivities:**\n" +
            "- **Il Natale (25 dicembre):** Family celebration, midnight mass, panettone and pandoro cakes, gifts on Christmas Day or *La Vigilia* (Christmas Eve).\n" +
            "- **L'Epifania (6 gennaio):** *La Befana* (the friendly witch) flies on her broomstick leaving sweets in stockings for good children and coal (*carbone di zucchero*) for naughty ones.\n" +
            "- **Il Carnevale (febbraio):** Elaborate historical masks and costumes in Venice (*Venezia*), allegorical parade floats in Viareggio, fried sweets (*chiacchiere / frappe*).\n" +
            "- **La Pasqua (marzo/aprile) e Pasquetta:** Easter lunch with lamb and chocolate eggs with surprises inside; *Pasquetta* (Easter Monday) is traditionally celebrated with picnics and friends in the countryside (*scampagnata*).\n" +
            "- **Il Ferragosto (15 agosto):** Peak summer national holiday celebrating the assumption of Mary; Italians flock to beaches and mountains for feasts and fireworks.\n\n" +
            "**2. Environmental Awareness and the Planet:**\n" +
            "- Il riscaldamento globale (global warming), l'inquinamento (pollution), la raccolta differenziata (waste sorting / recycling), proteggere l'ambiente (protecting the environment), risparmiare energia e acqua (saving energy and water).",
          examinerTips: [
            "Mentioning authentic Italian traditions like *La Befana* or *Pasquetta* in speaking or writing shows sophisticated cultural knowledge.",
            "Use modal verbs to discuss the environment: *dobbiamo riciclare di più* (we must recycle more)."
          ],
          commonMistakes: [
            "Confusing *La Befana* with Christmas; La Befana arrives on the night of January 5th for Epiphany.",
            "Using *festeggiare* without a direct object (*festeggiamo il Natale*, not *festeggiamo a Natale*)."
          ],
          recap: [
            "Festivals: Il Natale (panettone), La Befana (6 gennaio), Carnevale (maschere), Ferragosto (15 agosto).",
            "Pasquetta: Easter Monday countryside picnic tradition.",
            "Environment: raccolta differenziata (recycling), proteggere l'ambiente."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Italian Grammar, Syntax, and Exam Mastery",
      section: "Language Systems & Assessment Skills",
      topic: "Tenses (Passato Prossimo vs Imperfetto, Futuro, Condizionale), Pronouns, and Papers 1–4 Strategy",
      intro:
        "Top performance in Cambridge IGCSE Italian demands syntactic accuracy and command of past narrative tenses. This chapter details the crucial distinction between Passato Prossimo and Imperfetto, future and conditional forms, direct and indirect object pronouns, and tactical preparation for Papers 1 (Listening), 2 (Reading), 3 (Speaking), and 4 (Writing).",
      subheadings: [
        {
          title: "Tenses: Passato Prossimo vs Imperfetto, Futuro, and Condizionale",
          body:
            "**1. The Great Divide: Passato Prossimo vs Imperfetto:**\n" +
            "- **Passato Prossimo (Completed Past Action):** Specific, completed actions that took place at a definite moment in the past, or an event in a sequence:\n" +
            "  - *Ieri ho comprato un libro e sono andato a casa.* (Yesterday I bought a book and went home.)\n" +
            "- **Imperfetto (Continuous, Habitual, or Descriptive Past):**\n" +
            "  - Ongoing past actions interrupted by something else: *Mentre studiavo, è squillato il telefono.* (While I was studying, the phone rang.)\n" +
            "  - Habitual past actions ('used to'): *Da bambino andavo sempre al mare.* (As a child I always used to go to the seaside.)\n" +
            "  - Background descriptions (weather, feelings, age): *Faceva bel tempo e avevo fame.* (The weather was fine and I was hungry).\n\n" +
            "**2. The Future (Il Futuro Semplice) and Conditional (Il Condizionale):**\n" +
            "- **Futuro Semplice:** Add *-ò, -ai, -à, -emo, -ete, -anno* to verb stems (*parlerò, prenderò, partirò*). Used for future plans and predictions.\n" +
            "- **Condizionale Presente:** Add *-ei, -esti, -ebbe, -emmo, -este, -ebbero* to verb stems (*vorrei, mi piacerebbe, potrei*). Used for polite requests and hypothetical desires.",
          examinerTips: [
            "The classic story narrative formula: use the **imperfetto** for setting the scene (*faceva freddo ed era buio*), and the **passato prossimo** for the sudden action that happened (*improvvisamente ho sentito un rumore*).",
            "Check auxiliary agreement with essere: *siamo andati/andate*, *è arrivato/arrivata*."
          ],
          commonMistakes: [
            "Using the passato prossimo to describe age or weather in the past (*ho avuto dieci anni* is wrong; write *avevo dieci anni*).",
            "Confusing the conditional ending for 'we' (*-emmo*) with the future ending (*-emo*)."
          ],
          recap: [
            "Passato Prossimo = completed specific events; Imperfetto = habits, descriptions, interrupted actions.",
            "Interruption formula: Mentre [imperfetto], [passato prossimo].",
            "Futuro (-ò, -ai, -à) vs Condizionale (-ei, -esti, -ebbe)."
          ]
        },
        {
          title: "Direct, Indirect, and Combined Pronouns",
          body:
            "**1. Direct Object Pronouns (I Pronomi Diretti):**\n" +
            "- Answer 'whom?' or 'what?':\n" +
            "  - *mi, ti, lo/la, ci, vi, li/le*.\n" +
            "  - Position: Placed directly before the conjugated verb (*Lo compro* - I buy it; *Li vedo* - I see them).\n" +
            "  - In passato prossimo: When using *lo, la, li, le* with *avere*, the past participle must agree with the pronoun: *Hai visto Giulia? Sì, l'ho vist**a**; Hai comprato le mele? Sì, le ho comprat**e**.*\n\n" +
            "**2. Indirect Object Pronouns (I Pronomi Indiretti):**\n" +
            "- Answer 'to whom?':\n" +
            "  - *mi, ti, gli (to him), le (to her), ci, vi, gli / loro (to them)*.\n" +
            "  - *Gli ho parlato* (I spoke to him); *Le ho telefonato* (I called her).\n" +
            "  - Indirect pronouns do NOT cause agreement on past participles with avere.\n\n" +
            "**3. The Particle CI and NE:**\n" +
            "- **CI:** Replaces a place previously mentioned (*Vai a Roma? Sì, ci vado* - Yes, I'm going there).\n" +
            "- **NE:** Replaces a quantity or 'of it/them' (*Quante mele vuoi? Ne voglio due* - I want two of them).",
          examinerTips: [
            "Remember that direct pronouns *lo, la, li, le* force participle agreement in past tense with avere (*l'ho mangiata, li ho visti*).",
            "Use *ci* to avoid repeating locations: *sei stato in Italia? Sì, ci sono stato l'anno scorso*."
          ],
          commonMistakes: [
            "Forgetting to make participle agreements when using direct object pronouns with avere (*le ho comprato* instead of *le ho comprate*).",
            "Using *gli* for female recipients; use *le* for 'to her' (*le ho dato il libro*)."
          ],
          recap: [
            "Direct pronouns (mi, ti, lo, la, ci, vi, li, le) agree with past participle (*l'ho vista*).",
            "Indirect pronouns (mi, ti, gli, le, ci, vi, gli) mean 'to X'.",
            "CI replaces place; NE replaces quantity."
          ]
        },
        {
          title: "Cambridge Papers 1 to 4 Assessment Strategy",
          body:
            "**1. Paper 1 Listening (~50 min, 40 marks):**\n" +
            "- Read questions during the silence before tracks play; circle key question words (*chi, dove, quando, perché, quanto*).\n" +
            "- Watch out for qualifiers and last-minute changes of mind by speakers.\n\n" +
            "**2. Paper 2 Reading (1 hour, 45 marks):**\n" +
            "- Answer questions in Italian using direct facts from the text. Keep answers brief and accurate.\n" +
            "- Avoid lifting huge irrelevant paragraphs that may contain contradictory information.\n\n" +
            "**3. Paper 3 Speaking (~10 min, 40 marks):**\n" +
            "- Role Plays (10 marks) and Conversation (30 marks).\n" +
            "- Extend your answers with justifications (*perché, secondo me, dal mio punto di vista*).\n\n" +
            "**4. Paper 4 Writing (1 hour, 45 marks):**\n" +
            "- Exercise 1 (Form filling), Exercise 2 (80–90 word email/letter), Exercise 3 (130–140 word essay/article from a choice of two).\n" +
            "- You must address all given bullet points in balanced detail.\n" +
            "- Show off your grammatical range: past (passato prossimo + imperfetto), present, future, and conditional.",
          examinerTips: [
            "In Paper 4 Exercise 3, tick off each bullet point as you write. Unaddressed bullets directly limit your content score.",
            "Include varied time frames: what you did yesterday (past), what you do normally (present), and what you will do next summer (future)."
          ],
          commonMistakes: [
            "Writing only in the present tense in the 130-word essay, capping your language mark at a lower band.",
            "Exceeding the word limit significantly, which wastes time and increases grammatical slip-ups."
          ],
          recap: [
            "Paper 1: focus on key question words and distractors.",
            "Paper 2: answer concisely without over-copying.",
            "Paper 4: cover all bullet points and showcase past, present, and future tenses."
          ]
        }
      ]
    }
  ]
};
