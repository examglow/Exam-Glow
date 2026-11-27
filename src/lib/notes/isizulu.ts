import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE IsiZulu as a Second Language (0531) 2028–2029 Syllabus Notes
 * Covers Reading (AO1), Writing (AO2), Listening (AO3), and IsiZulu grammatical systems.
 */
export const ISIZULU: SubjectNotes = {
  id: "isizulu",
  name: "IsiZulu as a Second Language",
  code: "0531",
  color: "bg-amber-600",
  chapters: [
    {
      number: 1,
      title: "Ukuqonda Umbhalo Nokukhetha Ulwazi (Reading Comprehension & Factual Information)",
      section: "Paper 1: Amakhono Okufunda (Reading Skills)",
      topic: "Factual Retrieval, Keyword Scanning, Synonyms, and Text Analysis",
      intro:
        "Paper 1 Exercise 1 ihlola ikhono lomfundi lokuqonda imibhalo ehlukahlukene (izikhangiso, izindaba zamaphephandaba, ama-athikili, amapheshana) nokukhetha ulwazi oluqondile. Abafundi kumele bafunde ukuhlonza amagama asemqoka, ukuqonda amagama amqondofana, nokubhala izimpendulo ezimfushane nezinembile ngaphandle kokukopisha imisho emide engenasidingo.",
      subheadings: [
        {
          title: "Amasu Okufunda Umbhalo Nokuthola Ulwazi Oluyiqiniso (Scanning and Skimming)",
          body:
            "**1. Amasu Asemqoka Okufunda Umbhalo:**\n" +
            "- **Ukufunda Ukuthola Umqondo Obalulekile (Skimming):** Funda isihloko sombhalo, izihlokwana ezincane, nesigaba sokuqala ngokushesha (imizuzwana engama-45) ukuze uqonde ingikithi ngaphambi kokuphendula imibuzo.\n" +
            "- **Ukufunda Ukuhlola Amagama Asemqoka (Scanning):** Bheka amagama abalulekile embuzweni (*Ubani, Nini, Kuphi, Kungani, Kangaki, Imalini*). Gijimisa amehlo embhalweni ufune lawo magama noma amanye anomqondo ofanayo (**omqondofana**).\n" +
            "- **Izimpendulo Ezimfushane:** Ku-Exercise 1, amamaki anikezwa ngolwazi oluyiqiniso, hhayi ngobude bomusho. Impendulo emfushane enamagama afanele iphephile kakhulu kunokukopisha isigaba sonke.\n\n" +
            "**2. Ukuqonda Omqondofana (Synonyms) Nokuphikisa (Antonyms):**\n" +
            "- Abahloli bavame ukusebenzisa amagama ahlukile embuzweni kunesitayela esisembhalweni.\n" +
            "- *Isibonelo:* Uma umbuzo ubuza *'ngenani labantu abafikayo ngonyaka'*, umbhalo ungase uthi *'izinkulungwane zivakashela le ndawo njalo ngonyaka'*; uma umbuzo ubuza *'ngemali ekhokhwayo'*, umbhalo ungase uthi *'amathikithi abiza u-R50 umuntu emunye'*.",
          examinerTips: [
            "Phendula kafushane ngokucacile. Uma umbuzo ubuza ukuthi 'Kwenzekaphi?', bhala indawo kuphela (isib. 'EMthethweni') kunokubhala umusho wonke.",
            "Ungalokothi unikeze izimpendulo ezimbili eziphikisanayo uma kucelwe eyodwa kuphela."
          ],
          commonMistakes: [
            "Ukukopisha isigaba sonke wethemba ukuthi umhloli uzozitholela impendulo efanele.",
            "Ukulahlekelwa amamaki ngenxa yokushiya amayunithi (isib. ukubhala '50' esikhundleni sika-'R50' noma '50 km')."
          ],
          recap: [
            "Funda isihloko kuqala ukuze uthole ingikithi.",
            "Sebenzisa scanning ukuthola amagama asemqoka embuzweni.",
            "Bhala izimpendulo ezimfushane nezinembile."
          ]
        },
        {
          title: "Izinhlobo Zemibhalo Nezakhiwo Zayo (Text Types and Structures)",
          body:
            "**1. Izinhlobo Zemibhalo Ejwayelekile:**\n" +
            "- **Izikhangiso Namapheshana:** Imibhalo enolwazi olufingqiwe, amanani ezimpahla, izinsuku nezikhathi zokuvula.\n" +
            "- **Izindaba Zamaphephandaba Nezibuyekezo:** Imibhalo elandisa ngezehlakalo, echaza imibono yabantu abahlukene, noma enikeza izeluleko zokuvakasha.\n\n" +
            "**2. Amagama Akhombisa Ukulandelana Kwezehlakalo:**\n" +
            "- Qaphela amagama anjengokuthi: *ekuqaleni, emva kwalokho, ngokulandelayo, ekugcineni, ngaleso sikhathi* ukuze uqonde kahle ukuthi isiphi isenzakalo esaqala nesagcina.",
          examinerTips: [
            "Naka amagama anjengokuthi 'ngaphandle kwalapho', 'kuphela', noma 'akuvunyelwe'. Lawa magama avame ukuqukatha izimpendulo zemibuzo eqondile.",
            "Hlola ukuthi umbuzo ucela iphuzu elilodwa noma amabili; uma eceliwe amabili, wabhale emigqeni eyahlukene."
          ],
          commonMistakes: [
            "Ukudida usuku lokuqala komcimbi nosuku lokuphela kwawo.",
            "Ukungawanaki amagama aphikayo anjengokuthi *akukho, lutho, akavunyelwe*."
          ],
          recap: [
            "Izikhangiso namapheshana anikeza ulwazi oluqondile ngamanani nezinsuku.",
            "Amagama okuhlela alandisa ngokulandelana kwezenzakalo.",
            "Qaphela amagama afana nokuthi 'ngaphandle' noma 'kuphela'."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Imibono, Izimo Zengqondo Nezincazelo Ezifihlekile (Opinions & Implied Meaning)",
      section: "Paper 1: Amakhono Okufunda (Reading Skills)",
      topic: "Multiple Matching, Fact vs Opinion, Distractors, and Author Tone",
      intro:
        "Paper 1 Exercise 2 idinga ukuthi umfundi ahlaziye imibhalo yabantu abehlukene ababhalile ngesihloko esisodwa. Umfundi kumele aqonde umahluko phakathi kweqiniso nombono, abone izingibe zamagama (distractors), futhi aqonde izimo zengqondo nezinhloso zababhali ngaphandle kokubheka amagama aphindaphindiwe kuphela.",
      subheadings: [
        {
          title: "Multiple Matching Nokuxilonga Izingibe Zamagama (Matching & Distractors)",
          body:
            "**1. Indlela Yokubhekana Ne-Exercise 2:**\n" +
            "- Funda imibuzo kuqala bese udwebela amagama aqavile kuleso naleso sitatimende.\n" +
            "- Funda umuntu wokuqala (A) ngokucophelela. Qhathanisa lokho akushoyo nezitatimende. Uma kukhona okuhambisana ngqo nalokho akushoyo, maka u-'A'.\n" +
            "- Qhubekela kumuntu (B), (C), no-(D).\n\n" +
            "**2. Izingibe Zamagama (Distractors):**\n" +
            "- Izingibe zenzeka lapho umbhalo usebenzisa igama elifana ncamashi nelisembuzweni, kodwa umqondo ophelele ungahambisani nento ebuziwe.\n" +
            "- *Isibonelo:* Uma umbuzo uthi *'wayenesizungu ngesikhathi esohambweni'*, umuntu oyedwa angase asho igama elithi *'uhambo'*, kodwa omunye abe nguye okhuluma ngesizungu ngqo (*'ngangizizwa ngingedwa ngingenamuntu engikhuluma naye'*).",
          examinerTips: [
            "Ungakhethi uhlamvu ngenxa yokuthi ubona igama elilodwa elifanayo embuzweni nasembhalweni. Qonda umqondo ophelele.",
            "Qiniseka ukuthi unikeza impendulo eyodwa ecacile (A, B, C, noma D) embuzweni ngamunye."
          ],
          commonMistakes: [
            "Ukuwela ogibeni lwamagama aphindaphindiwe kodwa enomqondo ohlukile.",
            "Ukushiya imibuzo ingaphendulwanga; njengoba kunokukhetha, sebenzisa ukucabangisisa ukuze uphendule yonke."
          ],
          recap: [
            "Dwebela amagama aqavile ezitatimendeni ngaphambi kokufunda abantu abane.",
            "Izingibe zamagama zisebenzisa amagama afanayo kodwa ehluke ngomqondo.",
            "Qondanisa umqondo nombono womuntu, hhayi amagama angawodwana."
          ]
        },
        {
          title: "Ukwehlukanisa Iqiniso Nombono Kanye Nesimo Sengqondo (Fact, Opinion & Tone)",
          body:
            "**1. Iqiniso (Fact) vs Umbono (Opinion):**\n" +
            "- **Iqiniso:** Ulwazi oluqondile olungafakazelwa, olunobufakazi obubambekayo noma izibalo (*'Isikole saqala ngo-1980'*, *'Kukhona abafundi abangama-500'*).\n" +
            "- **Umbono:** Indlela umuntu azizwa ngayo noma acabanga ngayo ngento ethile (*'Ukudla kwalesi sikole kumnandi kakhulu'*, *'Lesi yisona sifundo esibaluleke kunazo zonke'*).\n\n" +
            "**2. Isimo Sengqondo Nesitayela Sombhali (Tone and Attitude):**\n" +
            "- Umbhali ubonisa isimo sengqondo ngokusebenzisa iziphawulo nezandiso ezithile:\n" +
            "  - *Ukujabula / Ukutusa:* 'kuyancomeka', 'kuyamangaza ngobuhle', 'kuyisibusiso esikhulu'.\n" +
            "  - *Ukugxeka / Ukukhononda:* 'kuyadumaza', 'kuyacasula', 'akuhambisani nalokho okwakuthenjisiwe'.\n" +
            "  - *Ukungabaza:* 'mhlawumbe', 'kungaba njalo', 'akukacaci kahle'.",
          examinerTips: [
            "Bheka amagama anjengokuthi 'ngicabanga ukuthi', 'ngokwami ukubona', noma 'ngokubona kwami' — lawa akhombisa umbono wombhali.",
            "Qaphela iziphawulo ezichaza imizwa ngoba zikusiza ukuqonda isimo sengqondo somlingiswa."
          ],
          commonMistakes: [
            "Ukuthatha umbono womuntu oqinile uwubize ngeqiniso elingafakazelwa.",
            "Ukungawunaki umqondo ojulile lapho umbhali ekhuluma ngokubhuqa noma ngokugxeka okufihlekile."
          ],
          recap: [
            "Iqiniso linobufakazi obuqondile; umbono yimizwa nokucabanga komuntu.",
            "Isimo sengqondo sibonakala ngeziphawulo (kuyancomeka vs kuyadumaza).",
            "Amagama afana nokuthi 'ngokwami ukubona' akhombisa imibono."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Ukubhala Amanothi Nesifinyezo (Note-Making & Summary Writing)",
      section: "Paper 1: Amakhono Okufunda Nokubhala",
      topic: "Information Extraction Under Headings, Paraphrasing, Synthesis, and Word Limits",
      intro:
        "Paper 1 Exercise 3 idinga ukukhetha amaphuzu abalulekile ngaphansi kwezihlokwana ezimbili ezinikeziwe, kanti i-Exercise 4 idinga ukubhala isifinyezo esihlanganisa lawo maphuzu sibe ngamagama angama-80 kuya kwangama-90. Lolu cwaningo luhlola amakhono okukhetha ulwazi olufanele, ukusebenzisa amagama akho, nokuxhumanisa imicabango ngokunembile.",
      subheadings: [
        {
          title: "Ukukhetha Ulwazi Ngaphansi Kwezihlokwana (Exercise 3: Note-Making)",
          body:
            "**1. Imithetho Yegolide Yokubhala Amanothi:**\n" +
            "- **Ukuhambisana Nesihlokwana:** Qinisekisa ukuthi iphuzu ngalinye olibhalayo lingena ngqo ngaphansi kwesihlokwana esifanele (isib. *'Izinzuzo zokutshala izihlahla'* vs *'Izinkinga ababhekana nazo'*).\n" +
            "- **Iphuzu Elilodwa Emgqeni Omunye:** Ungalokothi ubhale amaphuzu amabili ahlukene emgqeni owodwa. Umhloli umaka iphuzu lokuqala kuphela.\n" +
            "- **Ubufushane Nokucaca:** Amanothi awadingi ukuba yimisho emide enohlelo oluphelele; kudingeka amagama acacile aqondisa ngqo olwazini olufunekayo.\n" +
            "- **Ukungaphindi Amaphuzu:** Ungalibhali iphuzu elifanayo usebenzisa amagama ahlukile.",
          examinerTips: [
            "Hlola ukuthi awuphindanga yini iphuzu elifanayo ngamagama ahlukile ngaphansi kwesihlokwana esisodwa.",
            "Bhala ngqo emigqeni ephrintiwe yephepha lokuhlolwa; ungafaki amaphuzu athe xaxa phakathi kwemigqa."
          ],
          commonMistakes: [
            "Ukubhala izindatshana ezinde esikhundleni samanothi amafushane.",
            "Ukufaka iphuzu elifanele ngaphansi kwesihlokwana esingesona, okwenza ulahlekelwe yimaki."
          ],
          recap: [
            "Funda izihlokwana ezimbili ngokucophelela ngaphambi kokukhetha amaphuzu.",
            "Bhala iphuzu elilodwa elicacile emgqeni ngamunye.",
            "Gwema ukufaka iphuzu ngaphansi kwesihlokwana esingafanele."
          ]
        },
        {
          title: "Ukubhala Isifinyezo Esicacile (Exercise 4: Summary Writing)",
          body:
            "**1. Izinyathelo Zokubhala Isifinyezo:**\n" +
            "- **Isinyathelo 1:** Funda umbuzo wesifinyezo uqonde ukuthi yiziphi izinto okumele ugxile kuzo.\n" +
            "- **Isinyathelo 2:** Dwebela amaphuzu angama-6 kuya kwayisi-8 embhalweni ahambisana nalokho okubuziwe.\n" +
            "- **Isinyathelo 3:** Guqula lawo maphuzu abe ngamagama akho (**paraphrasing**) usebenzisa omqondofana nezakhiwo ezintsha zemisho.\n" +
            "- **Isinyathelo 4:** Xhumanisa amaphuzu usebenzisa izihlanganiso ezifanele (*ngaphezu kwalokho, kanti futhi, ngenxa yalokho, nokho*).\n" +
            "- **Isinyathelo 5:** Bala amagama akho ukuze aqondane nomkhawulo wamagama angama-80 kuya kwangama-90.\n\n" +
            "**2. Izinto Okufanele Zigwenywe Esifinyezweni:**\n" +
            "- Ungafaki imibono yakho siqu.\n" +
            "- Ungakopishi imisho yonke njengoba injalo embhalweni.",
          examinerTips: [
            "Gxila ngqo emaphuzwini afunekayo ngaphandle kokuqala ngesethulo eside njengokuthi 'Kulo mbhalo umbhali uchaza...'. Qala ngamaphuzu ngqo.",
            "Qikelela umkhawulo wamagama: ukubhala amagama athe xaxa kudala amaphutha ohlelo lolimi futhi kuthatha isikhathi sakho."
          ],
          commonMistakes: [
            "Ukukopisha imisho yonke embhalweni (lifting), okwehlisa amamaki olimi nesitayela.",
            "Ukufaka imininingwane engabalulekile noma izibonelo ezingabuziwe."
          ],
          recap: [
            "Khomba amaphuzu angama-6 kuya kwayisi-8 afunekayo.",
            "Sebenzisa amagama akho nezihlanganiso ezifanele.",
            "Hlala ngaphakathi komkhawulo wamagama (80–90 amagama)."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Ukubhala Izincwadi Ne-imeyili Engahlelekile (Informal Letters & Emails)",
      section: "Paper 1: Amakhono Okubhala (Writing Skills)",
      topic: "Informal Tone, Three Bullet Points, Email Format, and Paragraphing",
      intro:
        "Paper 1 Exercise 5 idinga ukuthi umfundi abhale incwadi noma i-imeyili engahlelekile eya kumngane noma esihlotsheni, enobude obungamagama ayi-100 kuya kwayi-120. Abahloli banikeza amaphuzu amathathu aqondile okumele kukhulunywe ngawo ngokuphelele kanye nezithombe eziwumhlahlandlela. Lolu cwaningo lufundisa ukubingelela okufanele, isitayela sobudlelwane, nokuhlelwa kwezigaba.",
      subheadings: [
        {
          title: "Ukwakheka Kwe-imeyili Engahlelekile Namaphuzu Amathathu",
          body:
            "**1. Amaphuzu Amathathu Omyalelo (The Three Bullet Points):**\n" +
            "- Umbuzo we-Cambridge uhlala unamaphuzu amathathu agcizelelwe (isib. *1. chaza indawo ovakashele kuyo; 2. landisa ngokwenzekile; 3. mmeme umngane wakho ukuthi nihambe naye ngokuzayo*).\n" +
            "- **Umthetho:** Kumele uphendule womathathu la maphuzu ngokulinganayo. Ukweqa iphuzu elilodwa kwehlisa amamaki akho okuqukethwe.\n\n" +
            "**2. Isitayela Sengxoxo Engahlelekile (Informal Register):**\n" +
            "- Bhalela umngane usebenzisa ulimi olukhululekile nolusondelene:\n" +
            "  - *Ukubingelela:* Sawubona Sipho, / Sanibonani bangani bami, / Kunjani mngani wami?\n" +
            "  - *Isingeniso:* Ngiyethemba ukuthi uphilile lapho ukhona. Bengilokhu ngifuna ukukubhalela ngikuxoxele ngohambo lwami...\n" +
            "  - *Isiphetho:* Ngizojabula kakhulu ukuzwa okuvela kuwe maduze. Sala kahle, / Ozithobayo umngani wakho, [Igama lakho].\n\n" +
            "**3. Ukuhlelwa Kwezigaba (Paragraph Structure):**\n" +
            "- **Isigaba 1:** Ukubingelela + Isingeniso sombhalo.\n" +
            "- **Isigaba 2:** Ukucacisa iphuzu lokuqala (incazelo enembile yendawo noma yomcimbi).\n" +
            "- **Isigaba 3:** Ukucacisa iphuzu lesibili (ukulandisa ngesehlakalo noma okuhle okwenzekile).\n" +
            "- **Isigaba 4:** Ukucacisa iphuzu lesithathu (isimemo noma izinhlelo zesikhathi esizayo) + ukuvalelisa.",
          examinerTips: [
            "Bala amaphuzu amathathu womyalelo ukuze uqiniseke ukuthi uwabhale wonke ngaphambi kokuqedela.",
            "Gwema ukusebenzisa ulimi oluhleleke ngokweqile (njengokuthi 'Ngibhala le ncwadi ukubika...') uma ubhalela umngane wakho."
          ],
          commonMistakes: [
            "Ukugxila kakhulu ephuzwini lokuqala bese ushiya amaphuzu amabili okugcina engenaminingwane eyanele.",
            "Ukukhohlwa ukufaka ukubingelela nokugcina ngokusayina igama lakho."
          ],
          recap: [
            "Phendula wonke amaphuzu amathathu anikeziwe ngokugcwele.",
            "Sebenzisa isitayela sengxoxo esifudumele nesinobungane.",
            "Hlela umbhalo ube yizigaba ezine ezicacile."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Ukubhala Okuhlelekile: Imibiko, Izihloko Zamaphephandaba Nokubukeza",
      section: "Paper 1: Amakhono Okubhala (Writing Skills)",
      topic: "Formal Articles, School Magazine Reports, Reviews, and Discursive Reasoning",
      intro:
        "Paper 1 Exercise 6 idinga ukubhala i-athikili, umbiko, noma isibuyekezo esihlelekile sephephandaba lesikole noma iwebhusayithi, sinobude obungamagama ayi-100 kuya kwayi-120. Abafundi banikezwa imicabango emibili ephikisanayo evela kubantu ababili ukuze ibavuselele imiqondo. Lolu cwaningo luhlaziya izihloko ezihehayo, ukwakha izimpikiswano ezizwakalayo, nokusebenzisa ulimi oluhlelekile.",
      subheadings: [
        {
          title: "Ukwakha I-athikili Nombiko Ohlelekile (Articles & Reports)",
          body:
            "**1. Isakhiwo Se-Athikili Yesikole:**\n" +
            "- **Isihloko Esidonsa Amehlo (Catchy Headline):** Isihloko esifushane nesicacile esenza umfundi afise ukufunda (isib. *'Ingabe Omakhalekhukhwini Bayasiza Noma Bayaphazamisa Esikoleni?'*).\n" +
            "- **Isingeniso:** Vula ngombuzo oshukumisa ingqondo noma ngesitatimende esibalulekile esichaza izinhlangothi zombili zendaba.\n" +
            "- **Isigaba Sokusekela (Arguments For):** Chaza amaphuzu asekela isihloko, usebenzise imicabango esuka enkulumweni yokuqala kodwa uyibhale ngamagama akho.\n" +
            "- **Isigaba Sokuphikisa (Arguments Against):** Chaza amaphuzu aphikisayo, ubheke nohlangothi lwesibili lwendaba.\n" +
            "- **Isiphetho:** Nikeza umbono wakho wokugcina owakhayo, ochaza ukuthi yisiphi isixazululo esingcono kakhulu.\n\n" +
            "**2. Ulimi Oluhlelekile (Formal Register):**\n" +
            "- Sebenzisa izakhiwo zolimi ezicacile nezihloniphekile, izaga ezifanele nezisho zesiZulu ezihambisana nesihloko.",
          examinerTips: [
            "Ungawukopishi umbhalo osenkulumweni yabantu abakuboniswe esithombeni; sebenzisa lawo maphuzu njengesisusa, bese uwachaza ngamagama akho.",
            "Faka njalo isihloko ekuqaleni kwe-athikili yakho."
          ],
          commonMistakes: [
            "Ukubhala uhlangothi olulodwa kuphela ngaphandle kokubheka olunye uhlangothi lwendaba.",
            "Ukusebenzisa ulimi lwasemgwaqweni noma izifinyezo ezingamukelekile ekubhaleni okusemthethweni."
          ],
          recap: [
            "Faka isihloko esihehayo ekuqaleni kwe-athikili.",
            "Nikeza amaphuzu asekela naphikisayo ngaphambi kokwenza isiphetho.",
            "Sebenzisa ulimi oluhlelekile nezakhiwo zemisho ezihlukahlukene."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Uhlelo Lolimi LwesiZulu Nokulungiselela Ukuhlolwa (Grammar & Exam Mastery)",
      section: "Language Systems & Assessment Skills",
      topic: "Noun Classes (Izigaba Zamabizo), Subject Concords, Verb Tenses, and Papers 1–2 Strategy",
      intro:
        "Ukuphumelela ebangeni le-Cambridge IGCSE IsiZulu kudinga ukuqonda ngokugcwele uhlelo lwezigaba zamabizo, izivumelwano zikamenzi, izinkathi zesenzo (inkathi yamanje, eyadlula, neyokusasa), izandiso, kanye namasu okubhekana namaphepha okuhlolwa (Paper 1 no-Paper 2).",
      subheadings: [
        {
          title: "Izigaba Zamabizo Nezivumelwano Zikamenzi (Noun Classes and Concords)",
          body:
            "**1. Uhlelo Lwezigaba Zamabizo EsiZulwini:**\n" +
            "- IsiZulu sihleleke ngezigaba zamabizo ezilawula izivumelwano zomgomo wonke emushweni:\n" +
            "  - **Isigaba 1/2 (Abantu):** umuntu / abantu (isivumelwano: *u- / ba-*).\n" +
            "  - **Isigaba 1a/2a (Amagama abantu/izihlobo):** ubaba / obaba; ugogo / ogogo (isivumelwano: *u- / ba-*).\n" +
            "  - **Isigaba 3/4 (Imithi/Imifula):** umuthi / imithi (isivumelwano: *u- / i-*).\n" +
            "  - **Isigaba 5/6 (Izinto ezihlangene):** ilitshe / amatshe; idada / amadada (isivumelwano: *li- / a-*).\n" +
            "  - **Isigaba 7/8 (Izitsha/Izinto):** isitsha / izitsha; isikole / izikole (isivumelwano: *si- / zi-*).\n" +
            "  - **Isigaba 9/10 (Izilwane):** inja / izinja; imoto / izimoto (isivumelwano: *i- / zi-*).\n" +
            "  - **Isigaba 11 (Uphawu):** uphondo / izimpondo (isivumelwano: *lu- / zi-*).\n" +
            "  - **Isigaba 14 (Ubuqotho):** ubuntu / utshwala (isivumelwano: *bu-*).\n" +
            "  - **Isigaba 15 (Ukufunda):** ukudla / ukuhamba (isivumelwano: *ku-*).\n\n" +
            "**2. Izinkathi Zesenzo (Verb Tenses):**\n" +
            "- **Inkathi Yamanje (Present Tense):**\n" +
            "  - Eside: *ngi-ya-funda* (uma ingekho into elandelayo).\n" +
            "  - Esinqamule: *ngi-funda incwadi* (uma kukhona into elandelayo).\n" +
            "- **Inkathi Eyadlula (Past / Perfect Tense):**\n" +
            "  - Eseduze: *ngi-fund-ile* / *ngi-fund-e incwadi*.\n" +
            "  - Ekude: *nga-funda*.\n" +
            "- **Inkathi Yokusasa (Future Tense):**\n" +
            "  - *ngi-zo-funda* (near future) / *ngi-yo-funda* (remote future).",
          examinerTips: [
            "Qaphela ukuhambisana kwesivumelwano sikamenzi nebizo: *isikole sihle*, hhayi *isikole lihle*.",
            "Khumbula umahluko phakathi kwenkathi yamanje ende (*ngiyafunda*) nenkathi emfishane (*ngifunda isiZulu*)."
          ],
          commonMistakes: [
            "Ukusebenzisa isakhi sika-ya- lapho kukhona into elandela isenzo (isib. *ngiyafunda incwadi* akulungile; kumele kube ngu-*ngifunda incwadi*).",
            "Ukudida izivumelwano zesigaba 5 (li-) nesigaba 7 (si-)."
          ],
          recap: [
            "Amabizo esiZulu ahlelwe ngezigaba ezilawula izivumelwano zomgomo.",
            "Inkathi yamanje: ngiyafunda (yodwa) vs ngifunda incwadi (kukhona okuvelayo).",
            "Inkathi yokusasa: ngizofunda; inkathi eyadlula: ngifundile / ngafunda."
          ]
        },
        {
          title: "Amasu Okuhlolwa Kwamaphepha 1 no-2 (Exam Strategy for Papers 1 & 2)",
          body:
            "**1. Paper 1: Ukufunda Nokubhala (Reading & Writing - amahora ama-2, amamaki angama-60):**\n" +
            "- Lawula isikhathi sakho ngokucophelela:\n" +
            "  - Imizuzu engama-45 yezivivinyo zokufunda (Exercises 1, 2, no-3).\n" +
            "  - Imizuzu engama-25 yesifinyezo (Exercise 4).\n" +
            "  - Imizuzu engama-25 ye-imeyili engahlelekile (Exercise 5).\n" +
            "  - Imizuzu engama-25 ye-athikili/yombiko (Exercise 6).\n\n" +
            "**2. Paper 2: Ukulalela (Listening - cishe imizuzu engama-45, amamaki angama-30):**\n" +
            "- Sebenzisa imizuzwana enikezwa ngaphambi kokudlala komsindo ukuze ufunde imibuzo.\n" +
            "- Lalela ngokucophelela ngoba amaphuzu abalulekile angase abekwe ngamagama ahlukile kunezinketho ezibhaliwe.",
          examinerTips: [
            "Qeda imibuzo yonke ye-Paper 1 bese uzinika imizuzu emi-5 yokuhlola isipelingi nohlelo lolimi lwakho.",
            "Ku-Paper 2, ungethuki uma ungayitholi impendulo ekudlaleni kokuqala; umsindo uphindwa kabili."
          ],
          commonMistakes: [
            "Ukuchitha isikhathi esiningi emibuzweni yokuqala bese usilela ngesikhathi se-Exercise 5 no-6.",
            "Ukungawafundi ngokugcwele amagama asemqoka emibuzweni yokulalela ngaphambi kokuthi umsindo uqale."
          ],
          recap: [
            "Lawula isikhathi ku-Paper 1: imizuzu engama-45 yokufunda, imizuzu engama-75 yokubhala.",
            "Ku-Paper 2: funda imibuzo ngaphambi kokudlala komsindo bese ulalelisisa okushoyo.",
            "Zinike isikhathi sokuhlola izipelingi nezivumelwano ngaphambi kokuletha iphepha."
          ]
        }
      ]
    }
  ]
};
