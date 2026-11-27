import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Japanese (0716) 2027–2029 Syllabus Notes
 * Covers the 5 official Cambridge Topic Areas (A–E) plus Grammar, Kanji, and Exam Mastery.
 */
export const JAPANESE: SubjectNotes = {
  id: "japanese",
  name: "Japanese",
  code: "0716",
  color: "bg-red-600",
  chapters: [
    {
      number: 1,
      title: "Everyday Activities (Topic Area A)",
      section: "Topic Area A: Everyday Activities",
      topic: "Time Expressions, Daily Routine, Food and Drink, and Physical Environment",
      intro:
        "Topic Area A establishes essential vocabulary and sentence patterns for daily life in Japan. Candidates must master time expressions (days, dates, clock time, frequency adverbs), talking about daily habits and schedules (okiru, neru, iku), navigating food and dining customs (ordering in restaurants, dietary preferences), and describing the home and immediate physical environment.",
      subheadings: [
        {
          title: "Time Expressions, Daily Schedules, and Frequency Adverbs",
          body:
            "**1. Time Telling and Temporal Particles:**\n" +
            "- **Hours and Minutes:** Expressed using `~ji` (時) for hours and `~fun / ~pun` (分) for minutes.\n" +
            "  - *Irregular hours:* 4 o'clock is `yoji` (not *yonji*), 7 o'clock is `shichiji` (not *nanaji*), 9 o'clock is `kuji` (not *kyuuji*).\n" +
            "  - *Half past:* `~ji han` (時半).\n" +
            "- **Particle に (ni) with Specific Times:** Used for points in time (*shichiji ni okimasu* - I wake up at 7:00). Not used with relative time words like *kyou* (today), *ashita* (tomorrow), *mainichi* (every day).\n" +
            "- **Span of Time: から (kara) ... まで (made):** Indicating start and end (*kuji kara goji made hatarakimasu* - I work from 9 to 5).\n\n" +
            "**2. Daily Routine Verbs and Frequency:**\n" +
            "- **Core Routine Verbs:** 起きる (*okiru* - to wake up), 朝ご飯を食べる (*asagohan o taberu* - to eat breakfast), 学校へ行く (*gakkou e iku* - to go to school), 勉強する (*benkyou suru* - to study), お風呂に入る (*ofuro ni hairu* - to take a bath), 寝る (*neru* - to sleep).\n" +
            "- **Frequency Hierarchy:** いつも (*itsumo* - always) > たいてい (*taitei* - usually) > よく (*yoku* - often) > ときどき (*tokidoki* - sometimes) > あまり (*amari* + negative - rarely) > ぜんぜん (*zenzen* + negative - never).",
          examinerTips: [
            "Remember that `amari` and `zenzen` must always pair with negative verbs (e.g., *zenzen tabemasen* - I never eat it).",
            "Do not attach the particle に to relative time words such as *kinou* (yesterday), *kyou* (today), or *maiasa* (every morning)."
          ],
          commonMistakes: [
            "Saying *nanaji* or *kyuuji* for clock time; the correct pronunciations are strictly *shichiji* (7:00) and *kuji* (9:00).",
            "Forgetting that frequency adverbs like *tokidoki* or *yoku* precede the object-verb clause rather than ending the sentence."
          ],
          recap: [
            "Specific time points take に; relative times (kyou, ashita) do not.",
            "Irregular hours: 4 (yoji), 7 (shichiji), 9 (kuji).",
            "Amari and zenzen require negative verb endings."
          ]
        },
        {
          title: "Food, Drink, and Dining Customs in Japan",
          body:
            "**1. Food Vocabulary and Tastes:**\n" +
            "- **Meals:** 朝ご飯 (*asagohan* - breakfast), 昼ご飯 (*hirugohan* - lunch), 晩ご飯 (*bangohan* - dinner).\n" +
            "- **Flavour Descriptions:** おいしい (*oishii* - delicious), まずい (*mazui* - unpalatable), あまい (*amai* - sweet), からい (*karai* - spicy), しょっぱい (*shoppai* - salty), すっぱい (*suppai* - sour).\n" +
            "- **Beverages:** お茶 (*ocha* - green tea), 水 (*mizu* - water), 牛乳 (*gyuunyuu* - milk), ジュース (*juusu* - juice).\n\n" +
            "**2. Restaurant Phrases and Cultural Etiquette:**\n" +
            "- **Ordering:** `[Item] を お願いします` (*[Item] o onegaishimasu*) or `[Item] を ください` (*[Item] o kudasai*).\n" +
            "- **Counter Suffix for Items:** ひとつ (*hitotsu* - 1), ふたつ (*futatsu* - 2), みっつ (*mittsu* - 3).\n" +
            "- **Etiquette Phrases:**\n" +
            "  - *Itadakimasu* (いただきます) said before meals expressing gratitude for ingredients and preparation.\n" +
            "  - *Gochisousama deshita* (ごちそうさまでした) said after finishing the meal.",
          examinerTips: [
            "In speaking exams, using culturally appropriate greetings like *itadakimasu* and *gochisousama deshita* demonstrates high cultural competence.",
            "Use general counters (*hitotsu, futatsu*) when ordering food dishes in shops or casual restaurants."
          ],
          commonMistakes: [
            "Using *desu* with i-adjectives in past tense incorrectly (e.g. saying *oishii deshita* instead of *oishikatta desu*).",
            "Using regular numbers (ichi, ni, san) without appropriate counters when ordering items."
          ],
          recap: [
            "Adjectives: oishikatta desu (was delicious); karaikatta desu (was spicy).",
            "Ordering: [Item] o kudasai / onegaishimasu using native counters (hitotsu, futatsu).",
            "Cultural dining greetings: Itadakimasu (before) and Gochisousama deshita (after)."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Personal and Social Life (Topic Area B)",
      section: "Topic Area B: Personal and Social Life",
      topic: "Self, Family, Home Environment, Clothing, Colours, and Leisure Time",
      intro:
        "Topic Area B focuses on personal identity and relationships. Candidates learn to introduce themselves, describe physical appearance and personality traits, discuss family members using humble and respectful terms, describe domestic rooms and furniture, and talk about hobbies, sports, and weekend leisure activities.",
      subheadings: [
        {
          title: "Self, Family Terms, and Personal Descriptions",
          body:
            "**1. Humble (Uchi) vs Respectful (Soto) Family Terms:**\n" +
            "- Japanese strictly distinguishes between referring to your own family (humble) and someone else's family (respectful/polite):\n" +
            "  - **Father:** Own: 父 (*chichi*); Other's: お父さん (*otousan*).\n" +
            "  - **Mother:** Own: 母 (*haha*); Other's: お母さん (*okaasan*).\n" +
            "  - **Older Brother:** Own: 兄 (*ani*); Other's: お兄さん (*oniisan*).\n" +
            "  - **Older Sister:** Own: 姉 (*ane*); Other's: お姉さん (*oneesan*).\n" +
            "  - **Younger Sibling:** Own: 弟 (*otouto*) / 妹 (*imouto*); Other's: *otoutosan* / *imoutosan*.\n\n" +
            "**2. Describing Physical Appearance and Character:**\n" +
            "- **Appearance Structure:** `[Body Part] が [Adjective] です` (e.g. *me ga ookii desu* - has big eyes; *se ga takai desu* - is tall).\n" +
            "- **Personality Adjectives:** 親切な (*shinsetsu na* - kind), 優しい (*yasashii* - gentle/nice), 面白い (*omoshiroi* - interesting/funny), まじめな (*majime na* - serious/diligent).",
          examinerTips: [
            "Never refer to your own parents as *otousan* or *okaasan* in formal writing or speaking; always use *chichi* and *haha*.",
            "Remember that *na-adjectives* require *na* before a noun (e.g. *shinsetsu na hito*) and *desu* at the end of a sentence (*ano hito wa shinsetsu desu*)."
          ],
          commonMistakes: [
            "Saying *watashi no otousan*; using respectful terms for your own family is a major register error.",
            "Confusing *se ga takai* (tall person) with *takai* alone (which means expensive or high altitude)."
          ],
          recap: [
            "Own family: chichi, haha, ani, ane; Other's family: otousan, okaasan, oniisan, oneesan.",
            "Body feature description: [Body Part] ga [Adjective] desu (e.g. se ga takai).",
            "Na-adjectives take na before nouns and drop na before desu."
          ]
        },
        {
          title: "Hobbies, Leisure Activities, and Free Time",
          body:
            "**1. Expressing Likes, Dislikes, and Abilities:**\n" +
            "- **Like / Dislike:** `[Noun / Activity] が 好き / きらい です` (*[Noun] ga suki / kirai desu*).\n" +
            "- **Stating Ability:** `[Dictionary Form Verb] ことが できます` (*[Verb] koto ga dekimasu* - I can do [activity]).\n" +
            "  - *Example:* ピアノを弾くことができます (*piano o hiku koto ga dekimasu* - I can play the piano).\n\n" +
            "**2. Leisure Activities and Sports:**\n" +
            "- **Sports:** サッカー (*sakkaa* - football), テニス (*tenisu* - tennis), 水泳 (*suiei* - swimming).\n" +
            "- **Creative & Entertainment:** 読書 (*dokusho* - reading), 映画鑑賞 (*eiga kanshou* - watching films), 音楽を聞くこと (*ongaku o kiku koto* - listening to music), 旅行 (*ryokou* - travel).\n" +
            "- **Invitations:** `~ませんか` (*~masen ka* - won't you...?) and `~ましょう` (*~mashou* - let's...).\n" +
            "  - *Example:* 一緒に映画を見に行きませんか (*issho ni eiga o mi ni ikimasen ka* - Won't you come watch a movie with me?).",
          examinerTips: [
            "Use the destination purpose structure `[Verb Stem] に 行きます` (*mi ni ikimasu* - go in order to see) to demonstrate varied sentence structure in writing.",
            "Remember that *suki* and *jouzu* take the particle **が** (ga), not を (o)."
          ],
          commonMistakes: [
            "Using *o suki desu* instead of *ga suki desu*.",
            "Using *koto ga dekimasu* with a polite masu-form verb; it must take the plain dictionary form (*miru koto ga dekimasu*, not *mimasu koto*)."
          ],
          recap: [
            "Preferences: [Noun] ga suki / kirai desu.",
            "Ability: [Plain Verb] koto ga dekimasu.",
            "Purpose of movement: [Verb Stem] ni ikimasu (go to do X)."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "The World Around Us (Topic Area C)",
      section: "Topic Area C: The World Around Us",
      topic: "Places and Buildings, Weather, Natural Environment, Travel, and Public Transport",
      intro:
        "Topic Area C equips learners to describe towns, geographical features, climatic conditions, and transport systems. Candidates learn to give and ask for directions, report seasonal weather patterns, discuss environmental issues, and make travel arrangements using trains (shinkansen), buses, and planes.",
      subheadings: [
        {
          title: "Town Facilities, Directions, and Giving Locations",
          body:
            "**1. Town Facilities and Buildings:**\n" +
            "- 銀行 (*ginkou* - bank), 郵便局 (*yuubinkyoku* - post office), 図書館 (*toshokan* - library), 病院 (*byouin* - hospital), 駅 (*eki* - station), 公園 (*kouen* - park), 店 (*mise* - shop).\n" +
            "- **Existence Verbs (あります vs います):**\n" +
            "  - **あります (arimasu):** Inanimate objects, plants, buildings (*Eki no chikaku ni toshokan ga arimasu* - There is a library near the station).\n" +
            "  - **います (imasu):** Living, animate beings (people, animals) (*Kouen ni inu ga imasu* - There is a dog in the park).\n\n" +
            "**2. Relative Location Words and Giving Directions:**\n" +
            "- 前 (*mae* - in front), 後ろ (*ushiro* - behind), となり (*tonari* - next door, same category), 近く (*chikaku* - nearby), 上 (*ue* - on/above), 下 (*shita* - under/below).\n" +
            "- **Asking Directions:** `すみません、[Place] は どこ ですか` (*Sumimasen, [Place] wa doko desu ka*).\n" +
            "- **Directional Expressions:** 右に曲がります (*migi ni magarimasu* - turn right), まっすぐ行きます (*massugu ikimasu* - go straight), 道を渡ります (*michi o watarimasu* - cross the street).",
          examinerTips: [
            "Never mix up *arimasu* (buildings/objects) and *imasu* (people/animals). Writing *toshokan ga imasu* is an immediate grammatical penalty.",
            "Remember that *tonari* implies side-by-side proximity of similar objects, whereas *chikaku* is general neighbourhood proximity."
          ],
          commonMistakes: [
            "Using *ni* instead of *de* for actions occurring at a place (*Toshokan de benkyou shimasu*, not *ni*).",
            "Confusing *byouin* (hospital) with *biyouin* (hair salon)."
          ],
          recap: [
            "Inanimate existence: あります (arimasu); Animate existence: います (imasu).",
            "Directions: massugu iku (go straight), migi/hidari ni magaru (turn right/left).",
            "Location pattern: [Place A] no [Direction] ni [Place B] ga arimasu."
          ]
        },
        {
          title: "Weather, Seasons, and Public Transport",
          body:
            "**1. Seasons and Weather Terms:**\n" +
            "- **Four Seasons:** 春 (*haru* - spring), 夏 (*natsu* - summer), 秋 (*aki* - autumn), 冬 (*fuyu* - winter).\n" +
            "- **Weather Phenomena:**\n" +
            "  - 天気 (*tenki* - weather), 雨 (*ame* - rain), 雪 (*yuki* - snow), 風 (*kaze* - wind), 晴れ (*hare* - clear/sunny), くもり (*kumori* - cloudy).\n" +
            "  - **Climate Adjectives:** あたたかい (*atatakai* - pleasantly warm), すずしい (*suzushii* - pleasantly cool), あつい (*atsui* - hot), さむい (*samui* - cold).\n\n" +
            "**2. Transport and Travel Patterns:**\n" +
            "- **Modes of Transport:** 新幹線 (*shinkansen* - bullet train), 電車 (*densha* - train), 地下鉄 (*chikatetsu* - subway), バス (*basu* - bus), 飛行機 (*hikouki* - aeroplane), 自転車 (*jitensha* - bicycle), 徒歩 (*toho / aruite* - on foot).\n" +
            "- **Means Particle で (de):** Indicates means or method of travel (*densha de ikimasu* - go by train; *aruite ikimasu* - go on foot, no *de*).\n" +
            "- **Duration Expressions:** `[Place A] から [Place B] まで [Transport] で [Time] かかります` (e.g. *Toukyou kara Kyouto made shinkansen de niji-kan kakarimasu* - It takes 2 hours from Tokyo to Kyoto by bullet train).",
          examinerTips: [
            "Note that *aruite* (on foot) does not take the transport particle *de* (*aruite ikimasu*, not *aruite de ikimasu*).",
            "Distinguish *atsui* (hot weather: 暑い) from *atsui* (hot objects/drinks: 熱い); in speaking both sound the same, but the kanji differ."
          ],
          commonMistakes: [
            "Using *kakarimasu* for monetary price instead of time duration; *kakarimasu* refers to time taken, while price uses *shimasu* or *desu*.",
            "Forgetting to conjugate weather adjectives into past tense for diary/letter entries (*kinou wa samukatta desu*)."
          ],
          recap: [
            "Four seasons: haru, natsu, aki, fuyu.",
            "Means of travel takes で (densha de); walking takes aruite (no de).",
            "Travel duration formula: [A] kara [B] made [Transport] de [Time] kakarimasu."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "The World of Work (Topic Area D)",
      section: "Topic Area D: The World of Work",
      topic: "School Life, Academic Subjects, Occupations, and Modern Technology",
      intro:
        "Topic Area D explores education, professional careers, and technology. Candidates learn to discuss school routines, favorite and difficult academic subjects, future career aspirations, part-time jobs (arubaito), and digital communication tools used in modern studies and workplaces.",
      subheadings: [
        {
          title: "School Life, Timetables, and Academic Subjects",
          body:
            "**1. School Environment and Facilities:**\n" +
            "- 小学校 (*shougakkou* - primary school), 中学校 (*chuugakkou* - junior high), 高校 (*koukou* - senior high), 大学 (*daigaku* - university).\n" +
            "- 教室 (*kyoushitsu* - classroom), 体育館 (*taiikukan* - gymnasium), 図書室 (*toshoshitsu* - library room), 校庭 (*koutei* - school playground).\n\n" +
            "**2. Subjects and Expressing Opinions:**\n" +
            "- **Academic Subjects:** 数学 (*suugaku* - maths), 英語 (*eigo* - English), 理科 (*rika* - science), 歴史 (*rekishi* - history), 地理 (*chiri* - geography), 音楽 (*ongaku* - music), 体育 (*taiiku* - PE).\n" +
            "- **Evaluating Subjects:**\n" +
            "  - `[Subject] は [Reason] から、[Adjective] です` (*Suugaku wa omoshiroi kara, suki desu* - Because maths is interesting, I like it).\n" +
            "  - 難しい (*muzukashii* - difficult), 易しい (*yasashii* - easy), つまらない (*tsumaranai* - boring), 役に立つ (*yaku ni tatsu* - useful).",
          examinerTips: [
            "Use the connective *kara* (because) to justify preferences in speaking and writing: state the reason before *kara*, followed by your opinion.",
            "In Japanese school culture, remember that club activities (bukatsu) are central to daily life; mentioning sports or cultural clubs enriches exam answers."
          ],
          commonMistakes: [
            "Placing *kara* at the beginning of the sentence like English 'because'; *kara* comes immediately after the reason clause.",
            "Confusing *yasashii* (easy/simple: 易しい) with *yasashii* (kind/gentle: 優しい)."
          ],
          recap: [
            "School subjects: suugaku, eigo, rika, rekishi, taiiku.",
            "Justification: [Reason] kara, [Opinion] desu.",
            "Evaluating adjectives: muzukashii (difficult), yaku ni tatsu (useful), omoshiroi (interesting)."
          ]
        },
        {
          title: "Occupations, Part-Time Jobs, and Technology",
          body:
            "**1. Professions and Future Ambitions:**\n" +
            "- 先生 / 教師 (*sensei / kyoushi* - teacher), 医者 (*isha* - doctor), 会社員 (*kaishain* - company employee), エンジニア (*enjinia* - engineer), 弁護士 (*bengoshi* - lawyer).\n" +
            "- **Expressing Future Ambition:** `[Profession] に なりたい です` (*[Profession] ni naritai desu* - I want to become a [profession]).\n" +
            "- **Part-Time Work:** アルバイト (*arubaito* - part-time job), 働く (*hataraku* - to work), 給料 (*kyuuryou* - salary/wage).\n\n" +
            "**2. Technology and Communication:**\n" +
            "- パソコン (*pasokon* - PC/laptop), スマホ (*sumaho* - smartphone), インターネット (*intaanetto* - internet), メール (*meeru* - email).\n" +
            "- **Using Devices for Tasks:** `スマホで 情報を 調べます` (*sumaho de jouhou o shirabemasu* - look up information using a smartphone).",
          examinerTips: [
            "Remember that *naritai* takes the particle **に** (ni), not を (o): *isha ni naritai desu*.",
            "When describing technology usage, use the tool particle **で** (de): *intaanetto de shiraberu* (search via internet)."
          ],
          commonMistakes: [
            "Saying *sensei* when stating your own job; use the humble term *kyoushi* for yourself and *sensei* to address others.",
            "Using *naritai* with *o*: writing *isha o naritai* is grammatically incorrect."
          ],
          recap: [
            "Ambition formula: [Profession] ni naritai desu (I want to become X).",
            "Tool/technology particle: [Device] de [Action] (sumaho de miru).",
            "Humble vs polite occupation: kyoushi (self) vs sensei (other)."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "The International World (Topic Area E)",
      section: "Topic Area E: The International World",
      topic: "Countries, Nationalities, Languages, Traditional Culture, and Japanese Festivals",
      intro:
        "Topic Area E broadens the candidate's linguistic and cultural horizons. Candidates learn country names, nationalities, and languages, and explore Japanese cultural traditions, seasonal festivals (matsuri), historical sightseeing destinations (Kyoto, Nara), and contemporary popular culture (anime, manga).",
      subheadings: [
        {
          title: "Countries, Nationalities, Languages, and Cultural Traditions",
          body:
            "**1. Nationalities and Languages Suffixes:**\n" +
            "- **Country:** 日本 (*Nihon* - Japan), イギリス (*Igirisu* - UK), アメリカ (*Amerika* - USA), 中国 (*Chuugoku* - China), フランス (*Furansu* - France), オーストラリア (*Oosutoraria* - Australia).\n" +
            "- **Nationality:** Country + **人 (jin)** (e.g. *Nihonjin*, *Igirisujin*).\n" +
            "- **Language:** Country + **語 (go)** (e.g. *Nihongo*, *Eigo*, *Furansugo*).\n\n" +
            "**2. Japanese Traditional Culture and Customs:**\n" +
            "- **Traditional Arts & Customs:**\n" +
            "  - 茶道 (*sadou / chadou* - tea ceremony), 着物 (*kimono* - traditional clothing), 浴衣 (*yukata* - summer cotton kimono), 温泉 (*onsen* - hot spring bath), たたみ (*tatami* - straw mat flooring).\n" +
            "- **Removing Shoes:** Taking off footwear at the *genkan* (entrance) and switching to indoor slippers is an essential cultural norm reflected in reading dialogues.\n" +
            "- **Gift Giving (Omiyage):** Souvenirs and edible gifts bought for friends and colleagues when returning from trips.",
          examinerTips: [
            "In reading comprehension, questions often test your knowledge of Japanese domestic customs like taking off shoes at the *genkan*.",
            "Remember that country language exceptions exist: English is *Eigo* (not *Igirisugo*)."
          ],
          commonMistakes: [
            "Saying *Amerikago* or *Igirisugo*; English is always *Eigo*.",
            "Confusing *kimono* (formal silk attire) with *yukata* (lightweight casual cotton summer robe)."
          ],
          recap: [
            "Suffixes: [Country] + jin = person; [Country] + go = language.",
            "English language is Eigo (not Igirisugo).",
            "Traditional customs: removing shoes at genkan, tea ceremony (sadou), onsen etiquette."
          ]
        },
        {
          title: "Annual Festivals, Celebrations, and Sightseeing",
          body:
            "**1. Major Annual Events and Festivals (年中行事):**\n" +
            "- **お正月 (*Oshougatsu* - New Year):** Most important Japanese holiday; eating *osechi ryouri*, drinking *otoso*, visiting shrines for *hatsumoude*, children receiving *otoshidama* (monetary gifts).\n" +
            "- **花見 (*Hanami* - Cherry Blossom Viewing):** In spring (April), picnicking under blooming sakura trees with family and friends.\n" +
            "- **お盆 (*Obon* - Mid-August):** Buddhist festival honoring ancestral spirits; performing *bon odori* folk dances.\n\n" +
            "**2. Famous Sightseeing and Expressing Experiences:**\n" +
            "- **Sightseeing Spots:** お寺 (*otera* - Buddhist temple), 神社 (*jinja* - Shinto shrine), 富士山 (*Fujisan* - Mount Fuji).\n" +
            "- **Past Experience Structure:** `[Ta-form Verb] ことが あります` (*[Verb] koto ga arimasu* - I have had the experience of doing...).\n" +
            "  - *Example:* 日本へ行ったことがあります (*Nihon e itta koto ga arimasu* - I have been to Japan before).\n" +
            "  - *Negative:* まだ行ったことがありません (*Mada itta koto ga arimasen* - I haven't been there yet).",
          examinerTips: [
            "Use the experience grammar *[Ta-form] koto ga arimasu* when discussing past travel experiences in the speaking and writing papers.",
            "Distinguish *otera* (temple: Buddhist, has pagoda/incense) from *jinja* (shrine: Shinto, has torii gate)."
          ],
          commonMistakes: [
            "Using *koto ga arimasu* with dictionary form instead of past plain Ta-form (*itta koto ga arimasu*, not *iku koto*).",
            "Calling Mount Fuji *Fujiyama*; the correct cultural reading is strictly *Fujisan*."
          ],
          recap: [
            "Annual events: Oshougatsu (New Year), Hanami (cherry blossoms), Obon (ancestor festival).",
            "Religious sites: otera (Buddhist temple) vs jinja (Shinto shrine with torii gate).",
            "Past experience formula: [Ta-form Verb] koto ga arimasu."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Grammar, Kanji, and Exam Mastery",
      section: "Paper Skills & Language Systems",
      topic: "Kanji Radicals, Verb Conjugations, Essential Particles, and Paper 1–4 Strategy",
      intro:
        "Success in Cambridge IGCSE Japanese requires mastering essential grammar structures, high-frequency Kanji characters, and targeted exam techniques. This chapter reviews the core verb conjugations (Te-form, Ta-form, Nai-form, Plain/Polite), particle accuracy, reading strategies, and writing compositions for Papers 1 to 4.",
      subheadings: [
        {
          title: "Core Verb Conjugations and Essential Particles",
          body:
            "**1. The Three Verb Groups:**\n" +
            "- **Group 1 (Godan / u-verbs):** Verbs ending in -u, -ku, -gu, -su, -tsu, -nu, -bu, -mu, -ru.\n" +
            "  - *Te-form rules:* -u, -tsu, -ru -> -tte; -mu, -bu, -nu -> -nde; -ku -> -ite (exception: *iku* -> *itte*); -gu -> -ide; -su -> -shite.\n" +
            "- **Group 2 (Ichidan / ru-verbs):** Verbs ending in -iru or -eru preceded by single consonant sound (e.g. *taberu, miru, neru*).\n" +
            "  - *Te-form:* Drop *-ru*, add *-te* (*taberu* -> *tabete*).\n" +
            "- **Group 3 (Irregular verbs):**\n" +
            "  - する (*suru* - to do) -> して (*shite*), した (*shita*), しない (*shinai*).\n" +
            "  - 来る (*kuru* - to come) -> 来て (*kite*), 来た (*kita*), 来ない (*konai*).\n\n" +
            "**2. Essential Cambridge Japanese Particles:**\n" +
            "- **は (wa):** Topic marker ('as for X').\n" +
            "- **が (ga):** Subject marker; marks target of *suki, kirai, jouzu, heta, wakarimasu, arimasu/imasu*.\n" +
            "- **を (o):** Direct object marker of transitive actions (*hon o yomu*).\n" +
            "- **に (ni):** Specific time (*hachiji ni*), indirect object (*tomodachi ni ageru*), purpose of movement (*tabe ni iku*), destination (*Nihon ni iku*).\n" +
            "- **で (de):** Location of action (*ie de taberu*), means/tool (*densha de iku, hashi de taberu*).\n" +
            "- **へ (e):** Direction of movement (*Toukyou e iku*).\n" +
            "- **と (to):** 'And' linking nouns (*pan to miruku*); 'with' a companion (*tomodachi to iku*).",
          examinerTips: [
            "Double-check particle selection: *ni* marks location of existence (*toshokan ni arimasu*), while *de* marks location where active events take place (*toshokan de benkyou shimasu*).",
            "In writing, maintain consistency in your register: use *desu/masu* polite forms throughout Paper 4."
          ],
          commonMistakes: [
            "Writing the particle *wa* with the hiragana わ instead of the correct は.",
            "Writing the particle *e* with the hiragana え instead of the correct へ.",
            "Writing the particle *o* with the hiragana お instead of the direct object particle を."
          ],
          recap: [
            "Te-form: connects sequential actions and pairs with kudasai / imasu.",
            "Location difference: に for existence (arimasu), で for active events (suru).",
            "Particles written with historical kana: は (pronounced wa), へ (pronounced e), を (pronounced o)."
          ]
        },
        {
          title: "Cambridge Assessment Papers 1 to 4 Strategy",
          body:
            "**1. Paper 1 (Listening - ~50 min, 40 marks):**\n" +
            "- Use the preparation time before each track plays to read questions and underline expected numbers, locations, or items.\n" +
            "- Beware of distractors where a speaker changes their mind (*'I thought about buying the blue shirt, but the green one was cheaper so I took that'*).\n\n" +
            "**2. Paper 2 (Reading - 1 hour, 45 marks):**\n" +
            "- Scan for question keywords, but read the complete sentence before writing your answer.\n" +
            "- Ensure your written answers in Japanese are grammatically sound and directly address the question word (*dare, doko, itsu, naze*).\n\n" +
            "**3. Paper 3 (Speaking - ~10 min, 40 marks):**\n" +
            "- Two role plays (10 marks) and a topic conversation followed by general conversation (30 marks).\n" +
            "- Extend answers using connectives (*soshite, dakara, demo*) and give reasons (*~kara*) rather than giving simple one-word replies.\n\n" +
            "**4. Paper 4 (Writing - 1 hour, 45 marks):**\n" +
            "- Form-filling / short note, 80–90 word guided message, and 130–140 word structured composition.\n" +
            "- Address every single bullet point in the prompt.\n" +
            "- Demonstrate variety by including past tense (*-mashita*), desires (*-tai desu*), intentions (*-tsumori desu*), and reasons (*-kara*).",
          examinerTips: [
            "In Paper 4 Writing, plan your paragraphs around the bullet points provided. Omitting even one bullet caps your communication mark.",
            "Showcase a range of time frames: past experience, present habit, and future plan in your 130-word essay."
          ],
          commonMistakes: [
            "Writing in romaji; Cambridge IGCSE Japanese requires answers in appropriate script (hiragana, katakana, and required kanji).",
            "Running out of time on Paper 4 by writing excessively long drafts."
          ],
          recap: [
            "Listening: underline keywords during preview time and listen for mind-changes.",
            "Speaking: expand answers with reasons (-kara) and conjunctions (dakara, soshite).",
            "Writing: address all bullet points, vary grammar structures, and write in proper Japanese script."
          ]
        }
      ]
    }
  ]
};
