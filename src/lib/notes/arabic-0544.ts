import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Arabic (Foreign Language) (0544) 2028–2030 Syllabus Notes
 * Covers Topics A–E (Everyday activities, Personal/social life, The world around us,
 * The world of work, The international world) + Ch 6 Grammar, Morphology & Papers 1–4 Mastery.
 * Strictly text-only with zero figures.
 */
export const ARABIC_0544: SubjectNotes = {
  id: "arabic-0544",
  name: "Arabic (Foreign Language) (0544)",
  code: "0544",
  color: "bg-emerald-600",
  chapters: [
    {
      number: 1,
      title: "الأنشطة اليومية والروتين (Topic Area A: Everyday Activities)",
      section: "Communication Across Contexts",
      topic: "Daily Routine, Food & Drink, Time, Shopping, and Directions",
      intro:
        "Topic Area A establishes essential communicative competence in Modern Standard Arabic (فصحى العصر) for daily living. Candidates learn to navigate domestic life, describe morning and evening routines, order food and beverages in restaurants, inquire about prices in markets, tell time, and give clear geographical directions.",
      subheadings: [
        {
          title: "الروتين اليومي والحياة المنزلية (Daily Routine and Home Life)",
          body: "Describing everyday habits requires mastery of present tense verbs (الفعل المضارع), reflexive actions, time expressions, and domestic vocabulary.",
          groups: [
            {
              subTitle: "الأفعال الشائعة والروتين (Common Routine Verbs)",
              bullets: [
                "**أستيقظ وأنهض (Waking up)**: أستيقظ مبكراً في الساعة السادسة صباحاً (I wake up early at 6:00 AM).",
                "**النظافة والاستعداد (Personal Care)**: أغسل وجهي وأفرش أسناني بالفرشاة والمعجون، ثم أرتدي ملابسي المدرسية (I wash my face, brush my teeth, and wear my uniform).",
                "**تناول الوجبات (Meals)**: أتناول وجبة الفطور مع عائلتي في غرفة الطعام (I eat breakfast with my family in the dining room).",
                "**أوقات الفراغ والمساء (Evening Routine)**: أراجع دروسي وأؤدي واجباتي المدرسية قبل النوم (I review lessons and do homework before sleeping).",
              ],
            },
            {
              subTitle: "ظروف الزمان والتكرار (Time & Frequency Adverbs)",
              bullets: [
                "**التكرار (Frequency)**: دائماً (always), عادةً (usually), غالباً (often), أحياناً (sometimes), نادراً (rarely), أبداً لا (never).",
                "**الأوقات (Parts of Day)**: في الصباح الباكر (early morning), بعد الظهر (afternoon), في المساء (evening), في منتصف الليل (midnight).",
              ],
            },
          ],
          examinerTips: [
            "Use precise temporal connectives such as 'بعد ذلك' (after that), 'ثمّ' (then), and 'قبل أن' (before doing) to create smooth, paragraph-level cohesion in Paper 4 writing.",
            "Remember that verbs preceding plural subjects in standard VSO sentence order remain singular in form (e.g. يذهب الطلاب وليس يذهبون الطلاب).",
          ],
          commonMistakes: [
            "Confusing the dual and plural verb conjugations or omitting the hamza on present first-person verbs (e.g., writing استيقظ instead of أستيقظ).",
            "Using colloquial/dialect words like 'بدّي' or 'عايز' instead of standard Modern Standard Arabic 'أريد' or 'أرغب في'.",
          ],
          recap: [
            "Accurate present-tense conjugation paired with varied frequency adverbs forms the bedrock of discussing personal routines in spoken and written Arabic.",
          ],
        },
        {
          title: "المأكولات والمشروبات والتسوق (Food, Drink, and Shopping)",
          body: "Navigating culinary culture and commerce involves food vocabulary, transactional dialogues, expressing preferences, and currency arithmetic.",
          groups: [
            {
              subTitle: "في المطعم والمطبخ العربي (At the Restaurant & Arabic Cuisine)",
              bullets: [
                "**الوجبات التقليدية (Traditional Dishes)**: الحمص والفلافل (hummus and falafel), الكبسة والمقلوبة (kabsa and maqluba), التبولة والفتوش (tabbouleh and fattoush).",
                "**طلب الطعام والشراب (Ordering)**: هل يمكنني الحصول على قائمة الطعام من فضلك؟ أريد طبقاً رئيسياً مع سلطة طازجة (May I have the menu please? I would like a main dish with fresh salad).",
                "**الحساب ودفع الفاتورة (Paying the Bill)**: كم الحساب الإجمالي؟ أريد الفاتورة من فضلك، وهل تقبلون الدفع ببطاقة الائتمان؟ (How much is the total? The bill please, and do you accept credit card?).",
              ],
            },
            {
              subTitle: "التسوق والمساومة في السوق (Shopping & Market Bargaining)",
              bullets: [
                "**الأسعار والعملات (Prices & Currencies)**: كم يكلف هذا القميص؟ هذا السعر مرتفع جداً، هل هناك تخفيض؟ (How much is this shirt? This price is too high, is there a discount?).",
                "**الأوزان والكميات (Weights & Measures)**: كيلوغرام من البرتقال (a kilo of oranges), لتر من الحليب (a liter of milk), علبة من الشاي (a box of tea).",
              ],
            },
          ],
          examinerTips: [
            "In Paper 2 reading questions, watch out for antonyms in promotional texts such as رخيص (cheap) versus باهظ الثمن / مكلف (expensive).",
            "When writing roleplay dialogues for Paper 3, incorporate polite particles like 'لو سمحت' (excuse me) and 'من فضلك' (please) to attain maximum marks for communicative effectiveness.",
          ],
          commonMistakes: [
            "Failing to match the gender of nouns with food adjectives (e.g. سلطة لذيذة feminine vs طعام لذيذ masculine).",
            "Translating the English idiom 'I am full' literally; use 'شبعت' or 'أنا شبعان' rather than incorrect literal phrases.",
          ],
          recap: [
            "Mastery of commercial vocabulary, polite transactional phrasing, and gender agreement enables authentic interaction in Arabic hospitality and markets.",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "الحياة الشخصية والاجتماعية (Topic Area B: Personal and Social Life)",
      section: "Communication Across Contexts",
      topic: "Family, Physical Description, Hobbies, Friends, and Celebrations",
      intro:
        "Topic Area B enables candidates to articulate details of family lineage, personal character, friendships, recreational interests, and religious and national celebrations. Learners develop expressive descriptions of appearances, emotions, and cultural festivities across the Arab world.",
      subheadings: [
        {
          title: "الأسرة والأصدقاء والصفات (Family, Friends, and Descriptions)",
          body: "Expressing interpersonal relationships requires descriptive adjectives, nominal sentences (الجملة الاسمية), and genitive constructs (الإضافة).",
          groups: [
            {
              subTitle: "شجرة العائلة والقرابة (Family Hierarchy)",
              bullets: [
                "**أفراد العائلة المباشرة (Immediate Family)**: الوالدان (أبي وأمي), الإخوة والأخوات (brothers and sisters).",
                "**العائلة الممتدة (Extended Family)**: العم والعمة (paternal uncle/aunt), الخال والخالة (maternal uncle/aunt), الأجداد والأحفاد (grandparents and grandchildren).",
              ],
            },
            {
              subTitle: "الوصف الجسدي والشخصي (Physical & Personality Traits)",
              bullets: [
                "**الملامح الخارجية (Physical Features)**: طويل القامة (tall), قصير (short), عيون عسلية (hazel eyes), شعر مجعد/ناعم (curly/straight hair).",
                "**السمات الشخصية (Personality)**: كريم ومعطاء (generous), صبور (patient), مرح ولديه حس دعابة (cheerful with humor), مخلص ووفي (loyal).",
              ],
            },
          ],
          examinerTips: [
            "Ensure adjectives agree with the noun they qualify in four areas: definiteness (معرفة/نكرة), gender (تذكير/تأنيث), number (إفراد/تثنية/جمع), and case (حالة إعرابية).",
            "Remember that irrational plural nouns (جمع غير العاقل) take singular feminine adjectives: كتب مفيدة وليس كتب مفيدون.",
          ],
          commonMistakes: [
            "Applying masculine plural adjectives to non-human plural nouns (e.g., سيارات سريعون instead of سيارات سريعة).",
            "Using English possessive 'of' literally instead of the concise Arabic Idafa construct (e.g., بيت الأب not بيت من الأب).",
          ],
          recap: [
            "Comprehensive physical and moral descriptions rely on precise Idafa constructions and accurate non-human plural adjective rules.",
          ],
        },
        {
          title: "الهوايات والأعياد والمناسبات (Hobbies and Cultural Celebrations)",
          body: "Discussing recreation and seasonal festivals highlights cultural understanding and active leisure vocabulary.",
          groups: [
            {
              subTitle: "الهوايات والرياضة (Hobbies & Sports)",
              bullets: [
                "**الأنشطة البدنية (Physical Activities)**: ممارسة كرة القدم، السباحة، الركض في الهواء الطلق، ركوب الخيل (playing football, swimming, outdoor running, horseback riding).",
                "**الهوايات الفنية والذهنية (Creative Hobbies)**: قراءة الروايات والقصص، العزف على الآلات الموسيقية، الرسم بالألوان الزيتية، الشطرنج (reading novels, musical instruments, painting, chess).",
              ],
            },
            {
              subTitle: "الأعياد والاحتفالات في الوطن العربي (Festivals & Holidays)",
              bullets: [
                "**المناسبات الدينية (Religious Holidays)**: عيد الفطر المبارك وعيد الأضحى، صيام شهر رمضان المبارك، تبادل التهاني والزيارات العائلية (Eid al-Fitr, Eid al-Adha, Ramadan, exchanging greetings and visits).",
                "**المناسبات الاجتماعية والوطنية (Social & National Events)**: اليوم الوطني، حفلات الزفاف والخطوبة، أعياد الميلاد (National day, weddings, birthday parties).",
              ],
            },
          ],
          examinerTips: [
            "In Paper 4 writing essays about an ideal weekend or celebration, use past tense verbs with 'كان' (e.g., كنا نحتفل) to narrate past events before switching to future intentions with 'سوف' or 'سـ'.",
            "Incorporate cultural celebration phrases like 'كل عام وأنتم بخير' and 'تقبل الله منا ومنكم' to demonstrate high cultural authenticity.",
          ],
          commonMistakes: [
            "Overusing 'أنا أحب' repeatedly; vary with 'أفضل' (I prefer), 'أستمتع بـ' (I enjoy), and 'شغفي هو' (my passion is).",
            "Forgetting that prepositions require the following noun to be in the genitive case (مجرور بالكسرة).",
          ],
          recap: [
            "Narrating recreational pastimes and Arab festive traditions enriches written essays and spoken conversational depth.",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "العالم من حولنا والبيئة (Topic Area C: The World Around Us)",
      section: "Communication Across Contexts",
      topic: "Hometown, Geography, Weather, Transport, and Environment",
      intro:
        "Topic Area C broadens the candidate's communicative scope to physical environments, regional geography across Arab countries, metropolitan versus rural lifestyles, weather systems, and pressing ecological issues like desertification, water conservation, and recycling.",
      subheadings: [
        {
          title: "المدينة والريف ووسائل النقل (Urban vs Rural Life and Transport)",
          body: "Contrasting living environments requires comparative adjectives, spatial prepositions, and transportation terminology.",
          groups: [
            {
              subTitle: "المدينة مقابل القرية (City vs Countryside)",
              bullets: [
                "**الحياة في المدينة (City Life)**: مبانٍ شاهقة وناطحات سحاب، مراكز تسوق ضخمة، ازدحام مروري، وفرة الخدمات والمستشفيات (skyscrapers, mega malls, traffic congestion, abundant services).",
                "**الحياة في القرية (Village Life)**: هدوء وسكينة، هواء نقي منعش، مساحات خضراء واسعة، علاقات اجتماعية مترابطة (calm tranquility, fresh air, green spaces, tight social bonds).",
              ],
            },
            {
              subTitle: "وسائل المواصلات والتنقل (Public & Private Transport)",
              bullets: [
                "**المركبات (Vehicles)**: المترو والقطار السريع، الحافلة العامة، سيارة الأجرة، الطائرة، الدراجة الهوائية (metro, high-speed rail, public bus, taxi, airplane, bicycle).",
                "**السفر والحجوزات (Travel Bookings)**: حجز تذكرة ذهاب وإياب، محطة القطار، رصيف المغادرة، تأخر الرحلة (booking round-trip ticket, railway station, departure platform, flight delay).",
              ],
            },
          ],
          examinerTips: [
            "Formulate comparative adjectives using the 'أفعل من' pattern (e.g., المدينة أكثر ازدحاماً من القرية، وهواء الريف أنقى من هواء المدينة).",
            "When interpreting train schedules or airport announcements in Paper 1 listening, listen carefully for flight or train cancellations (إلغاء) versus delays (تأخير).",
          ],
          commonMistakes: [
            "Writing comparative adjectives with wrong gender agreements; remember the 'أفعل' pattern does not inflect for gender in standard comparative constructs with 'من'.",
            "Confusing 'مطار' (airport) with 'قطار' (train) due to visual phonetic similarity in written questions.",
          ],
          recap: [
            "Comparative structures and transportation vocabulary allow detailed analysis of urban convenience versus rural serenity.",
          ],
        },
        {
          title: "الطقس وحماية البيئة (Weather, Climate, and Ecology)",
          body: "Describing meteorological conditions and environmental conservation initiatives requires scientific terminology and conditional clauses.",
          groups: [
            {
              subTitle: "حالة الطقس وفصول السنة (Weather & Seasons)",
              bullets: [
                "**الفصول الأربعة (Four Seasons)**: الربيع المزهر (flowering spring), الصيف الحار (hot summer), الخريف المتقلب (autumn), الشتاء البارد الممطر (rainy winter).",
                "**الظواهر الجوية (Weather Phenomena)**: درجات الحرارة المرتفعة، تساقط الثلوج، عواصف رملية، رطوبة عالية، رياح عاتية (high temperatures, snowfall, sandstorms, high humidity, strong winds).",
              ],
            },
            {
              subTitle: "القضايا البيئية والاستدامة (Environmental Issues & Green Living)",
              bullets: [
                "**التحديات البيئية (Ecology Challenges)**: الاحتباس الحراري، التلوث الهوائي والمائي، التصحر، إزالة الغابات، استنزاف الموارد الطبيعية (global warming, pollution, desertification, deforestation, resource depletion).",
                "**الحلول والمبادرات (Ecological Solutions)**: إعادة التدوير، ترشيد استهلاك المياه والكهرباء، زراعة الأشجار، استخدام الطاقة الشمسية والمتجددة (recycling, conserving water/power, afforestation, solar energy).",
              ],
            },
          ],
          examinerTips: [
            "Use modal obligation verbs like 'يجب علينا أن نحمي البيئة' (we must protect the environment) and 'ينبغي الحد من التلوث' (it is necessary to curb pollution) in argumentative writing.",
            "Demonstrate understanding of conditional sentences: 'إذا حافظنا على بيئتنا، فستصبح مدننا أجمل وأكثر صحة'.",
          ],
          commonMistakes: [
            "Using incorrect plural forms for weather words (e.g. أمطار is plural, مطر is singular; use appropriate agreement).",
            "Translating 'in the summer' as 'في الصيف' without noting that adverbial accusative 'صيفاً' is preferred in formal Arabic prose.",
          ],
          recap: [
            "Environmental vocabulary and modal structures empower candidates to discuss global sustainability challenges persuasively.",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "عالم العمل والتعليم (Topic Area D: The World of Work)",
      section: "Communication Across Contexts",
      topic: "School Subjects, Daily School Life, Occupations, and Career Ambitions",
      intro:
        "Topic Area D equips students to discuss their educational pathway, school environment, academic disciplines, future occupational plans, professional qualifications, part-time student employment, and the essential skills required in the modern international workplace.",
      subheadings: [
        {
          title: "المدرسة والمناهج الدراسية (School Life and Academic Subjects)",
          body: "Evaluating academic routines, teacher relations, school rules, and disciplinary preferences requires nuanced opinion structures.",
          groups: [
            {
              subTitle: "المواد الدراسية والجدول المدرسي (Academic Curriculum)",
              bullets: [
                "**المواد العلمية والأدبية (Subjects)**: الرياضيات، العلوم، الفيزياء، الكيمياء، الأحياء، التاريخ، الجغرافيا، الأدب العربي، اللغات الأجنبية (maths, sciences, physics, chemistry, biology, history, geography, literature, languages).",
                "**مرافق المدرسة (School Facilities)**: المختبرات العلمية، المكتبة العامة، الملاعب الرياضية، المسرح المدرسي، المقصف (science labs, library, sports fields, school theatre, canteen).",
              ],
            },
            {
              subTitle: "الآراء والمبررات الأكاديمية (Academic Opinions & Justifications)",
              bullets: [
                "**إبداء الرأي (Expressing Opinions)**: في رأيي الشخصي، أعتقد أن مادة الرياضيات مفيدة جداً ولكنها تتطلب الكثير من التركيز (In my opinion, mathematics is very useful but requires immense focus).",
                "**المقارنة والتفضيل (Subject Preferences)**: أجد دراسة اللغات أكثر متعة من دراسة العلوم لأنها تفتح آفاقاً للتواصل مع الثقافات الأخرى (I find studying languages more enjoyable than sciences as it opens communicative horizons).",
              ],
            },
          ],
          examinerTips: [
            "In Paper 4 essays comparing school subjects, always provide balanced arguments: explain why a subject is challenging despite being rewarding.",
            "Utilize cohesive causal linkers like 'لأنّ' (because), 'نظراً لـ' (in view of), and 'بسبب' (due to) followed by nouns or pronouns.",
          ],
          commonMistakes: [
            "Confusing 'أستاذ' (teacher/professor) with 'طالب' (student) or using colloquial 'معلم' incorrectly in formal essay openings.",
            "Omitting the subjunctive marker 'أن' after preference verbs like 'أفضل أن أدرس' (I prefer to study).",
          ],
          recap: [
            "Nuanced academic vocabulary and clear opinion justifications elevate discussions of school life in IGCSE Arabic.",
          ],
        },
        {
          title: "المهن وخطط المستقبل وسوق العمل (Careers and Future Ambitions)",
          body: "Formulating professional goals and discussing employment demands future tense markers, occupational nouns, and work experience vocabulary.",
          groups: [
            {
              subTitle: "المهن والوظائف (Professions & Careers)",
              bullets: [
                "**القطاعات المهنية (Career Sectors)**: الطب والتمريض (medicine & nursing), الهندسة المعمارية (architecture), تكنولوجيا المعلومات والبرمجة (IT & programming), التعليم والتدريس (teaching), الصحافة والإعلام (journalism & media).",
                "**المهارات المطلوبة (Workplace Skills)**: العمل الجماعي وروح الفريق، حل المشكلات المعقدة، إتقان اللغات الأجنبية، إدارة الوقت بكفاءة (teamwork, problem solving, language mastery, time management).",
              ],
            },
            {
              subTitle: "التطلعات المستقبلية (Future Ambitions & Intentions)",
              bullets: [
                "**التخطيط الجامعي (University Planning)**: بعد التخرج من المدرسة، أنوي الالتحاق بالجامعة لدراسة الهندسة المدنية (After graduation, I intend to enroll in university to study civil engineering).",
                "**العمل الجزئي والتدريب (Part-Time Work & Internships)**: اكتساب الخبرة العملية من خلال التدريب الصيفي يساعد الشباب في تحديد مسارهم المهني (Gaining practical experience through summer training helps youth define career paths).",
              ],
            },
          ],
          examinerTips: [
            "Differentiate between future affirmative using 'سوف' or the prefix 'سـ' and future negative using 'لن' followed by the subjunctive verb (e.g. لن أعمل في وظيفة مكتبية مملة).",
            "When writing a formal CV or job application email, utilize established formal closings such as 'وتفضلوا بقبول فائق الاحترام والتقدير'.",
          ],
          commonMistakes: [
            "Placing future particle 'سوف' before a past tense verb; it must exclusively precede imperfective present tense verbs (الفعل المضارع).",
            "Using the noun 'شغل' instead of formal MSA 'عمل' or 'مهنة' or 'وظيفة'.",
          ],
          recap: [
            "Articulating career trajectories with future markers and workplace competencies is crucial for advanced writing and speaking tasks.",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "العالم الدولي والتبادل الثقافي (Topic Area E: The International World)",
      section: "Communication Across Contexts",
      topic: "Countries, Nationalities, Tourism, Cultural Traditions, and Global Events",
      intro:
        "Topic Area E broadens linguistic skills to global frontiers: exploring diverse nations, geographic landmarks, international tourism, cross-cultural heritage, international sports competitions like the Olympic Games and FIFA World Cup, and global solidarity initiatives.",
      subheadings: [
        {
          title: "الدول والجنسيات والسياحة العالمية (Countries, Nationalities, and Tourism)",
          body: "Discussing international destinations requires nationality adjectives (ياء النسب), geographic features, and travel narratives.",
          groups: [
            {
              subTitle: "ياء النسب والجنسيات (Nisba Adjectives & Nationalities)",
              bullets: [
                "**صياغة ياء النسب (Forming Nisba)**: مصر -> مصري/مصرية (Egypt -> Egyptian), الأردن -> أردني/أردنية (Jordan -> Jordanian), بريطانيا -> بريطاني/بريطانية (Britain -> British).",
                "**العواصم والمعالم التاريخية (Capitals & Monuments)**: زيارة الأهرامات في الجيزة، استكشاف مدينة البتراء الوردية، برج خليفة في دبي (visiting Giza Pyramids, exploring Petra, Burj Khalifa).",
              ],
            },
            {
              subTitle: "السياحة المستدامة والمغامرات (Tourism & Travel Experiences)",
              bullets: [
                "**أنواع السياحة (Types of Tourism)**: السياحة الثقافية والتاريخية، السياحة العلاجية، سياحة المغامرات والتخييم في الصحراء (cultural tourism, wellness tourism, adventure & desert camping).",
                "**فوائد السفر (Benefits of Travel)**: السفر يوسع المدارك الفكرية ويعزز التسامح والانفتاح على الثقافات العالمية (Travel broadens horizons and promotes intercultural tolerance).",
              ],
            },
          ],
          examinerTips: [
            "Remember that country names in Arabic are generally treated as feminine nouns, requiring feminine verbs and adjectives (e.g. عاصمة فرنسا هي باريس الجميلة).",
            "In Paper 2 reading passages, pay careful attention to geographic prepositions indicating cardinal directions: شمال (north), جنوب (south), شرق (east), غرب (west).",
          ],
          commonMistakes: [
            "Forgetting to double the final yaa (ياء مشددة) in pronunciation and spelling when forming nationality adjectives.",
            "Translating names of international cities literally rather than using accepted Arabic standard orthography (e.g. لندن، باريس، طوكيو).",
          ],
          recap: [
            "Accurate Nisba inflection and tourism vocabulary enable insightful essays on international travel and cultural exchange.",
          ],
        },
        {
          title: "العادات الثقافية والمناسبات الدولية (Cultural Customs and Global Events)",
          body: "Appreciating cross-cultural heritage and global sporting or humanitarian gatherings encourages international perspective.",
          groups: [
            {
              subTitle: "التنوع الثقافي والتراث الإنساني (Cultural Heritage & Customs)",
              bullets: [
                "**الضيافة والكرم العربي (Arab Hospitality)**: تقديم القهوة العربية الأصيلة مع التمر للضيوف يعكس قيم الكرم والترحاب المتوارثة (Serving authentic Arabic coffee with dates reflects hospitality).",
                "**الفلكلور والملابس التقليدية (Folklore & Traditional Attire)**: ارتداء الثوب التقليدي، التطريز اليدوي، إحياء الرقصات الشعبية كالدبكة (traditional robes, hand embroidery, folk dances like Dabke).",
              ],
            },
            {
              subTitle: "المناسبات والمسابقات العالمية (Global Events & Competitions)",
              bullets: [
                "**الأحداث الرياضية الكبرى (Major Sporting Events)**: تنظيم بطولات كأس العالم، الألعاب الأولمبية، ودورها في تعزيز السلام بين الشعوب (hosting World Cup, Olympic Games, fostering global peace).",
                "**المعارض والمؤتمرات الدولية (International Expos & Conferences)**: إكسبو الدولي، مؤتمرات حماية المناخ، المبادرات الإنسانية العالمية (World Expo, climate summits, humanitarian initiatives).",
              ],
            },
          ],
          examinerTips: [
            "Use evocative evaluative adjectives when discussing international events, such as 'حدث تاريخي استثنائي' (an extraordinary historic event) and 'تجربة لا تُنسى' (an unforgettable experience).",
            "Structure discursive paragraphs using contrastive connectors: 'من ناحية... ومن ناحية أخرى' (on one hand... on the other hand).",
          ],
          commonMistakes: [
            "Treating collective concepts like 'الشعوب' or 'الدول' as masculine plural nouns; they govern singular feminine agreement.",
            "Neglecting the dual form when discussing two entities (e.g. البلدان الشقيقان not البلدين الشقيقين in nominative subject position).",
          ],
          recap: [
            "Evaluating cultural heritage, global sporting events, and international cooperation enriches writing and oral presentations.",
          ],
        },
      ],
    },
    {
      number: 6,
      title: "قواعد اللغة واستراتيجيات الأوراق 1–4 (Grammar & Exam Papers 1–4)",
      section: "Grammatical Competence & Exam Mastery",
      topic: "Verb Forms, Idafa, Numbers, Plurals, and Papers 1–4 Examination Skills",
      intro:
        "Chapter 6 synthesizes essential grammatical systems of Modern Standard Arabic with dedicated strategies for Cambridge IGCSE 0544 examination papers: Paper 1 Listening, Paper 2 Reading, Paper 3 Speaking, and Paper 4 Writing. Mastering grammatical accuracy and systematic exam technique guarantees top marks.",
      subheadings: [
        {
          title: "أنظمة قواعد الفصحى الأساسية (Core Grammatical Foundations)",
          body: "High marks across all papers demand rigorous command of verb forms, noun morphology, numbers, and case syntax.",
          groups: [
            {
              subTitle: "الأوزان الصرفية ومشتقات الفعل (Verb Forms I–X & Derivations)",
              bullets: [
                "**الأوزان العشرة الشائعة (Forms I–X)**: فَعَلَ (Form I basic), فَعَّلَ (Form II intensive/causative), فاعَلَ (Form III mutual), أَفْعَلَ (Form IV causative), تَفَعَّلَ (Form V reflexive), تَفاعَلَ (Form VI reciprocity), اِنْفَعَلَ (Form VII passive), اِفْتَعَلَ (Form VIII participatory), اِسْتَفْعَلَ (Form X seeking).",
                "**اسم الفاعل والمفعول والمصدر (Participles & Verbal Nouns)**: كاتب/مكتوب/كتابة (writer/written/writing), معلّم/معلَّم/تعليم (teacher/taught/teaching), مستكشف/مستكشَف/استكشاف (explorer/explored/exploration).",
              ],
            },
            {
              subTitle: "الأعداد والتمييز والإعراب (Numbers & Syntactic Agreement)",
              bullets: [
                "**قواعد الأعداد 3–10 (Numbers 3–10)**: The number opposes the counted noun in gender, and the counted noun is plural genitive (مجرور بالإضافة): ثلاثة كتب، خمس طالبات.",
                "**قواعد الأعداد 11–99 (Numbers 11–99)**: The counted noun is singular accusative (مفرد منصوب على التمييز): خمسة عشر طالباً، عشرون يوماً.",
                "**الإضافة غير المنونة (Idafa Rules)**: The first term (المضاف) drops nunation (التنوين) and dual/plural final 'noon' (معلمو المدرسة وليس معلمون المدرسة).",
              ],
            },
          ],
          examinerTips: [
            "In Paper 4, candidates who intentionally use a variety of derived verb forms (especially Forms II, V, and X) consistently score in the highest mark band for range of language.",
            "Double-check number-gender polarity (مخالفة العدد للمعدود) for numbers 3–10; examiners frequently test this in reading gap-fills and written sentences.",
          ],
          commonMistakes: [
            "Retaining the final 'nun' of sound masculine plurals in an Idafa construct (e.g. مهندسون المشروع instead of correct مهندسو المشروع).",
            "Matching numbers 3–10 to the gender of the plural form rather than looking at the singular masculine/feminine root of the noun.",
          ],
          recap: [
            "Mastery of Forms I–X, correct number-noun polarity, and strict Idafa constraints ensures top-band grammatical accuracy.",
          ],
        },
        {
          title: "استراتيجيات التفوق في الأوراق الامتحانية 1–4 (Mastering Papers 1–4)",
          body: "Strategic time management, focused skimming, roleplay confidence, and structured essay writing ensure total examination success.",
          groups: [
            {
              subTitle: "الأوراق 1 و 2: الاستماع والقراءة (Paper 1 Listening & Paper 2 Reading)",
              bullets: [
                "**ورقة الاستماع (Paper 1 - 50 mins)**: Read questions thoroughly during pre-listening pauses; identify keywords; ignore minor distractors and listen for exact meaning rather than acoustic echoes.",
                "**ورقة القراءة (Paper 2 - 1 hr)**: Skim headings and first sentences for general gist; scan for synonyms rather than word-for-word repetition; answer short-answer questions concisely without copying irrelevant context.",
              ],
            },
            {
              subTitle: "الأوراق 3 و 4: التحدث والكتابة (Paper 3 Speaking & Paper 4 Writing)",
              bullets: [
                "**ورقة التحدث (Paper 3 - 10 mins)**: Roleplay task and topic conversations; answer promptly in complete sentences; use fillers like 'في الحقيقة' or 'من وجهة نظري' to maintain fluency without pauses.",
                "**ورقة الكتابة (Paper 4 - 1 hr)**: Task 1 form/short response (20 words), Task 2 everyday email/letter (80–90 words), Task 3 structured article/narrative (130–140 words); plan paragraphs beforehand and verify verb agreements.",
              ],
            },
          ],
          examinerTips: [
            "In Paper 4 Task 3, ensure every single bullet point from the examination prompt is explicitly developed; omitting even one bullet point severely restricts the Content mark.",
            "Reserve 5 minutes at the end of Paper 4 exclusively for a proofreading sweep: check taa marbuta dots, hamza placement, and singular feminine agreement on plural objects.",
          ],
          commonMistakes: [
            "Writing significantly under the required word count in Paper 4, leading to lost marks for range and development.",
            "Directly translating English idioms into Arabic instead of using idiomatic Arabic phrasing.",
          ],
          recap: [
            "Systematic examination technique across all four papers maximizes marks through targeted listening, strategic reading, fluent speaking, and rigorously planned writing.",
          ],
        },
      ],
    },
  ],
};
