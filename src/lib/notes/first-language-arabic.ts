import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE First Language Arabic (9–1) (7184) 2026 Syllabus Notes
 * Advanced native/first-language specification. Covers Paper 1 Reading & Directed Writing,
 * Summary Skills, Balagha (Rhetoric), Argumentative/Discursive Writing, Descriptive/Narrative Writing,
 * and Advanced Syntax & Exam Mastery. Strictly text-only with zero figures.
 */
export const FIRST_LANGUAGE_ARABIC: SubjectNotes = {
  id: "first-language-arabic",
  name: "First Language Arabic (9–1) (7184)",
  code: "7184",
  color: "bg-emerald-800",
  chapters: [
    {
      number: 1,
      title: "مهارات القراءة والتحليل النصي المتقدم (Paper 1: Advanced Reading)",
      section: "Reading & Critical Analysis",
      topic: "Comprehension, Implicit Meaning, Authorial Stance, and Textual Analysis",
      intro:
        "Paper 1 tests first-language candidates on sophisticated textual analysis of contemporary and classical literary, discursive, and argumentative texts. Candidates must discern subtle undertones, analyze how stylistic and lexical choices generate atmosphere, and evaluate the author's underlying thesis and communicative intent.",
      subheadings: [
        {
          title: "استيعاب المعاني الصريحة والضمنية (Explicit & Implicit Understanding)",
          body: "Distinguishing between direct textual statements and subtextual connotations is fundamental to first-language reading comprehension.",
          groups: [
            {
              subTitle: "قراءة ما وراء السطور (Reading Between the Lines)",
              bullets: [
                "**المعنى المباشر مقابل الدلالي (Denotation vs Connotation)**: إدراك المعنى المعجمي للكلمة ومقارنته بالظلال الدلالية والعاطفية التي يضفيها السياق (Comparing literal dictionary definitions with contextual emotional nuances).",
                "**استنباط مواقف الكاتب الخفية (Inferring Authorial Bias)**: تفكيك النبرة (تهكمية، مشفقة، حماسية، حيادية) من خلال انتقاء الكاتب لأفعال وظروف ومترادفات معينة (Unpacking satirical, empathetic, or enthusiastic tone through word choice).",
              ],
            },
            {
              subTitle: "تفكيك بنية النص وحججه (Deconstructing Textual Architecture)",
              bullets: [
                "**تدرج الأفكار وتسلسلها (Logical Progression)**: تتبع كيفية بناء الفكرة المحورية من المقدمة الاستهلالية عبر الأدلة التوضيحية وصولاً إلى الخاتمة (Tracking thesis evolution through illustrative evidence).",
                "**الروابط المنطقية والتحول الفكري (Discourse Markers)**: رصد أدوات الاستدراك (لكن، بيد أن، غير أن) والمفارقة لإبراز التحول في زاوية النظر (Identifying qualifying conjunctions that shift perspectives).",
              ],
            },
          ],
          examinerTips: [
            "When asked to explain the effect of a specific phrase, do not merely paraphrase its meaning; explain the precise emotional and intellectual impact it creates in the reader's mind.",
            "Direct textual quotes must be integrated smoothly into your analytical sentences rather than isolated as freestanding sentences.",
          ],
          commonMistakes: [
            "Simply lifting long quotations from the passage without offering analytical commentary in your own words.",
            "Misinterpreting satirical or ironic tones as literal factual statements.",
          ],
          recap: [
            "Advanced comprehension requires interrogating subtext, authorial bias, and stylistic impacts beyond surface paraphrase.",
          ],
        },
        {
          title: "تحليل الأساليب اللغوية وأثرها البلاغي (Stylistic & Tonal Analysis)",
          body: "Candidates must articulate how syntactic constructions, lexical density, and imagery evoke sensory and psychological responses.",
          groups: [
            {
              subTitle: "الأثر النفسي والجمالي للمفردات (Sensory & Lexical Impact)",
              bullets: [
                "**الحقول الدلالية (Semantic Fields)**: تصنيف المفردات في حقول دلالية (مثل حقل الموت، حقل الأمل، حقل العزلة) لبيان المناخ النفسي العام (Grouping vocabulary into semantic fields to reveal mood).",
                "**المفردات الموحية (Evocative Lexis)**: تفكيك قوة الأفعال الحركية والأوصاف الحسية المجردة في رسم المشهد (Analyzing active verbs and sensory adjectives in painting scenes).",
              ],
            },
            {
              subTitle: "بنية الجمل والتنوع الأسلوبي (Sentence Variety & Rhythm)",
              bullets: [
                "**الجمل القصيرة الخاطفة (Staccato Sentences)**: استخدام جمل مقتضبة لبث التوتر، المفاجأة، والتسارع الدرامي (Short sentences creating suspense and dramatic urgency).",
                "**الجمل الطويلة المتشعبة (Periodic Sentences)**: توظيف الجمل المركبة ذات الإيقاع الهادئ لإبراز التأمل العميق والتحليل الفلسفي (Complex periodic clauses reflecting contemplation).",
              ],
            },
          ],
          examinerTips: [
            "Structure your stylistic analysis using the three-step framework: Name the technique -> Quote the exact evidence -> Explain its psychological impact on the reader.",
            "Use formal critical terminology: 'يضفي على المشهد هيبة'، 'يوحي بالقلق والاضطراب'، 'يجسد المعاناة الإنسانية'.",
          ],
          commonMistakes: [
            "Vaguely stating that a phrase 'makes the text interesting' without specifying what emotions or visual thoughts it evokes.",
            "Confusing grammatical categories with stylistic figures.",
          ],
          recap: [
            "Rigorous stylistic analysis connects syntactic rhythms and semantic fields directly to reader psychology and textual theme.",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "التلخيص الدقيق والدمج المعلوماتي (Summary Writing & Synthesis)",
      section: "Summary & Directed Writing",
      topic: "Information Extraction, Synthesis of Two Passages, and Concise Rephrasing",
      intro:
        "Summary writing in Cambridge First Language Arabic demands rigorous informational discipline. Candidates must extract specific target points from two dense stimulus texts, synthesize complementary and contrasting arguments, eliminate redundant examples and figurative flourishes, and write a concise, fluent continuous text in their own words within strict word limits.",
      subheadings: [
        {
          title: "استخراج الأفكار الرئيسة والتصفية (Extracting & Filtering Key Points)",
          body: "Filtering essential arguments requires active marginal notation and discarding extraneous decorative verbiage.",
          groups: [
            {
              subTitle: "معايير اختيار النقاط المستهدفة (Target Point Criteria)",
              bullets: [
                "**الالتزام بالمحور المطلوب (Answering Prompt Focus)**: التركيز الحصري على السؤال المحدد (مثل: أسباب المشكلة، أو الحلول المقترحة) وتجاهل ما سواه (Focusing solely on requested aspects).",
                "**التخلص من الحشو والاستطراد (Eliminating Padding)**: شطب التكرار اللفظي، الأمثلة الفرعية، الأقوال المأثورة، والشواهد الإحصائية المفصلة (Eliminating sub-examples, quotes, and detailed statistics).",
              ],
            },
            {
              subTitle: "قراءة النصين المتكاملين (Reading Dual Stimulus Texts)",
              bullets: [
                "**المقارنة والدمج (Comparative Mapping)**: تصنيف النقاط المشتركة بين النصين لتجنب تكرارها ودمج النقاط المتكاملة في سياق منطقي واحد (Synthesizing overlapping points into unified thematic units).",
                "**التنظيم الهيكلي (Structural Tabulation)**: وضع مخطط نقطي مرقم يجمع بين 12 إلى 15 فكرة محورية قبل البدء بالصياغة النهائية (Formulating a numbered 12–15 point outline prior to writing).",
              ],
            },
          ],
          examinerTips: [
            "Underline keywords directly in the question prompt before reading the texts, so your search for summary points remains sharply focused.",
            "Count your distinct points on scrap paper to ensure you have extracted enough content points to earn maximum marks before drafting.",
          ],
          commonMistakes: [
            "Summarizing the entire text chronologically rather than selectively answering the specific focus question.",
            "Copying complete verbatim sentences directly from the passage, which results in zero marks for style and quality of language.",
          ],
          recap: [
            "Effective summary filtering extracts core arguments while purging decorative examples, quotes, and statistical padding.",
          ],
        },
        {
          title: "الصياغة بأسلوبك الخاص والإيجاز البلاغي (Paraphrasing & Word Count Precision)",
          body: "Drafting the final summary requires exceptional linguistic conciseness, original sentence structures, and disciplined word counts.",
          groups: [
            {
              subTitle: "إعادة الصياغة اللغوية الأصيلة (Linguistic Paraphrasing)",
              bullets: [
                "**التحويل من الفعلي إلى الاسمي (Nominalization)**: استخدام المصادر الصريحة لاختزال الجمل الطويلة في عبارات مركزة (Using verbal nouns to condense lengthy dependent clauses).",
                "**الاستبدال المعجمي المتقن (Synonym Substitution)**: استبدال كلمات النص بمرادفات فصحى مكافئة مع الحفاظ الدقيق على المعنى الأصلي (Employing precise synonyms while preserving fidelity).",
              ],
            },
            {
              subTitle: "الانسيابية والروابط الإيجازية (Cohesion & Word Limit Discipline)",
              bullets: [
                "**الروابط المختصرة (Concise Connectors)**: استخدام حروف العطف وأدوات الربط الجامعة (علاوة على ذلك، فضلاً عن، وفي المقابل) لبناء نص متماسك (Using linking devices for smooth continuous prose).",
                "**الانضباط بالعدد المحدد للكلمات (Strict Word Count)**: الالتزام الصارم بالمدى المطلوب (حوالي 200–250 كلمة)؛ فالزيادة المفرطة تؤدي إلى شطب النقاط الأخيرة وعدم احتسابها (Staying strictly within word bounds).",
              ],
            },
          ],
          examinerTips: [
            "Write in continuous paragraphs rather than bullet points; examiners require a unified, flowing piece of prose.",
            "Perform a strict word count check; text extending far beyond the upper limit is ignored by examiners.",
          ],
          commonMistakes: [
            "Including personal opinions, editorial comments, or outside knowledge not present in the original source texts.",
            "Writing a series of fragmented disconnected sentences without logical paragraph transitions.",
          ],
          recap: [
            "Top-band summaries fuse dense content points into original, concise, and cohesive continuous prose within exact word boundaries.",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "علوم البلاغة والأساليب الأدبية (Rhetoric & Stylistics: Balagha)",
      section: "Literary Rhetoric & Aesthetics",
      topic: "Ilm al-Bayan, Ilm al-Badi', Ilm al-Ma'ani, and Stylistic Impact",
      intro:
        "A mastery of traditional Arabic rhetoric (علوم البلاغة الثلاثة: البيان، والبديع، والمعاني) distinguishes exceptional first-language writing. Candidates must identify, analyze, and deploy rhetorical devices purposefully to enhance literary beauty, persuasion, and intellectual depth in their analytical and creative essays.",
      subheadings: [
        {
          title: "علم البيان: التشبيه والاستعارة والكناية (Ilm al-Bayan: Imagery)",
          body: "Ilm al-Bayan examines the art of conveying meaning through imagery, comparison, and symbolic representation.",
          groups: [
            {
              subTitle: "التشبيه وأركانه وأقسامه (Simile & Its Typologies)",
              bullets: [
                "**أركان التشبيه (Pillars of Tashbih)**: المشبه، المشبه به، أداة التشبيه، ووجه الشبه (Tenor, vehicle, particle, and point of resemblance).",
                "**التشبيه البليغ (Eloquent Simile)**: حذف الأداة ووجه الشبه معاً لإضفاء التماهي المطلق بين الطرفين: 'العلم نور'، 'الأم مدرسة' (Deleting particle and ground to equate tenor and vehicle).",
                "**التشبيه التمثيلي والضمني (Epic & Implicit Simile)**: تشبيه صورة مركبة بصورة مركبة، أو إيحاء الشبه ضمنياً في ثنايا المعنى دون تصريح (Complex tableau comparisons or implicit contextual metaphors).",
              ],
            },
            {
              subTitle: "الاستعارة والكناية (Metaphor & Metonymy)",
              bullets: [
                "**الاستعارة التصريحية والمكنية (Metaphor Types)**: التصريحية (صُرح فيها بلفظ المشبه به وحُذف المشبه) مقابل المكنية (حُذف فيها المشبه به ورُمز له بشيء من لوازمه، مثل: 'افترس اليأسُ آماله') (Explicit vs implicit metaphors).",
                "**الكناية وأسرارها البلاغية (Metonymy & Allegory)**: إطلاق اللفظ وإرادة لازم معناه مع جواز إرادة المعنى الأصلي؛ كناية عن صفة، أو موصوف، أو نسبة (e.g. 'فلان نظيف اليد' كناية عن الأمانة والنزاهة).",
              ],
            },
          ],
          examinerTips: [
            "In your analysis of an Isti'ara (metaphor), clearly identify: The tenor, the vehicle, the borrowed attribute, and the aesthetic contribution (تشخيص/تجسيم) to the text.",
            "Avoid ornamental imagery in argumentative writing; use rhetoric exclusively to sharpen intellectual persuasion.",
          ],
          commonMistakes: [
            "Confusing an implicit metaphor (استعارة مكنية) with personification (تشخيص) without explaining the underlying linguistic deletion.",
            "Over-saturating narrative pieces with cliché similes (e.g. 'كالبرق الخاطف', 'كالقمر المنير') instead of inventing fresh, original imagery.",
          ],
          recap: [
            "Mastering Tashbih, Isti'ara, and Kinaya provides the figurative toolkit to dissect literature and craft evocative creative prose.",
          ],
        },
        {
          title: "علم البديع والمعاني: المحسنات والإيقاع (Ilm al-Badi' & Ma'ani)",
          body: "Mastering verbal harmonies, conceptual antitheses, declarative styles, and emotive expressions enriches Arabic discourse.",
          groups: [
            {
              subTitle: "المحسنات المعنوية واللفظية (Semantic & Verbal Embellishments)",
              bullets: [
                "**الطباق والمقابلة (Antithesis & Parallelism)**: إيراد اللفظ وضده (طباق إيجاب/سلب)، أو إيراد معنيين متوافقين ثم ما يقابلهما على الترتيب (مقابلة تبرز المعنى بالضد وتوضح الفوارق).",
                "**الجناس والسجع (Paronomasia & Rhymed Cadence)**: الجناس التام والناقص لإحداث نغمة موسيقية محببة تطرب الأذن دون تكلف؛ والسجع المتوازن في نهايات الفواصل (Rhythmical resonance).",
                "**التورية وحسن التعليل (Double Entendre & Phantasy)**: إيراد كلمة ذات معنيين قريب وبعيد، وصرف الذهن إلى المعنى البعيد الخفي (Subtle double meanings).",
              ],
            },
            {
              subTitle: "علم المعاني: الإنشاء والخبر (Declarative vs Non-Declarative)",
              bullets: [
                "**الأساليب الإنشائية الطلبية (Performative Styles)**: الأمر، النهي، الاستفهام، النداء، التمني، وأغراضها البلاغية التعبيرية كالحسرة، التعجب، والالتماس (Imperatives, interrogatives, vocatives).",
                "**أسلوب القصر والحصر (Restriction & Emphasis)**: القصر بالنفي والاستثناء (ما... إلا)، أو بـ (إنما)، أو بتقديم ما حقه التأخير لتأكيد المعنى وحصره (Restrictive emphatic syntax).",
              ],
            },
          ],
          examinerTips: [
            "When analyzing an interrogative (استفهام), state its rhetorical intent: is it for rebuke (توبيخ), denial (إنكار), or confession (تقرير)?",
            "Ensure that any rhyming or rhythmic cadence (سجع) used in your writing flows naturally and does not sacrifice semantic accuracy for sound.",
          ],
          commonMistakes: [
            "Artificial, forced use of rhyme (سجع متكلف) that produces hollow sentences lacking real substance.",
            "Treating grammatical questions as mere information requests without recognizing their underlying rhetorical purpose.",
          ],
          recap: [
            "Badi' embellishments and Ma'ani structures control sentence rhythm, contrast ideas, and channel emotional emphasis.",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "الكتابة الجدلية والنقاشية (Argumentative & Discursive Writing)",
      section: "Paper 2 Directed & Essay Writing",
      topic: "Thesis Articulation, Dialectical Synthesis, and Logical Progression",
      intro:
        "Paper 2 Section 1 requires candidates to craft sophisticated argumentative (جدلية) or discursive (نقاشية) essays on complex societal, intellectual, or ethical dilemmas. Candidates must establish clear thesis statements, weigh multifaceted evidence, refute opposing counter-arguments logically, and maintain objective rhetorical authority.",
      subheadings: [
        {
          title: "بناء الأطروحة وهندسة المقال الجدلي (Thesis Construction & Argument Architecture)",
          body: "A compelling discursive essay is constructed upon an intellectual thesis supported by structured syllogisms and balanced argumentation.",
          groups: [
            {
              subTitle: "المقدمة الاستهلالية وتحديد الإشكالية (The Dialectical Introduction)",
              bullets: [
                "**مدخل عام للإشكالية (Contextual Hook)**: استهلال المقال بملاحظة فلسفية أو واقعية تجذب القارئ دون الدخول في تفاصيل مبتذلة (A thought-provoking conceptual hook).",
                "**طرح الأطروحة بوضوح (Formulating Thesis)**: تحديد موقف الكاتب أو بيان طبيعة الجدل الفكري القائم بين مؤيد ومعارض بصياغة محكمة (Articulating the core thesis and tension).",
              ],
            },
            {
              subTitle: "بنية الفقرات الحجاجية (The Architecture of Persuasive Paragraphs)",
              bullets: [
                "**جملة الموضوع (Topic Sentence)**: تصدير كل فقرة بفكرة رئيسة حاسمة تخدم القضية المحورية (A decisive topic sentence heading each paragraph).",
                "**الدليل والبرهان (Evidence & Demonstration)**: تدعيم الفكرة بشواهد منطقية، حقائق تاريخية، أو حجج عقلية مقنعة (Substantiating with logical syllogisms and historical facts).",
                "**التحليل والتعقيب (Critical Commentary)**: تفكيك الحجة وبيان دلالاتها وأثرها في ترجيح كفة الموقف (Analyzing implications and evaluating outcomes).",
              ],
            },
          ],
          examinerTips: [
            "Differentiate clearly between a biased argumentative essay (which passionately champions one side) and an objective discursive essay (which impartially weighs both sides before concluding).",
            "Use formal dialectical phrasing: 'يثير هذا الموضوع جدلاً واسعاً في الأوساط الثقافية'، 'تتباين وجهات النظر تبايناً حاداً حول...'.",
          ],
          commonMistakes: [
            "Relying on emotional rants or preaching rather than constructing rigorous logical arguments.",
            "Writing a one-sided essay when the question explicitly requires evaluating opposing perspectives.",
          ],
          recap: [
            "Structured discursive essays begin with a provocative intellectual hook, develop evidence-backed topic sentences, and evaluate opposing views.",
          ],
        },
        {
          title: "دحض الحجج المعارضة والخاتمة التركيبية (Refutation & Synthetic Conclusion)",
          body: "Mastering the refutation of counter-arguments and crafting a synthetic philosophical conclusion are marks of superior writing.",
          groups: [
            {
              subTitle: "أساليب التفنيد والدحض (Techniques of Counter-Argumentation)",
              bullets: [
                "**عرض موقف الخصم بنزاهة (Fair Presentation of Counter-Claims)**: بيان وجهة النظر المعارضة بأقوى براهينها قبل البدء في تفنيدها (Presenting opposition views fairly before refuting).",
                "**تفكيك المنطق المعارض (Exposing Logical Fallacies)**: الكشف عن أوجه القصور أو التناقض أو النتائج السلبية المترتبة على رأي المعارضين (Exposing contradictions, weaknesses, and flawed premises).",
              ],
            },
            {
              subTitle: "الخاتمة التركيبية والرؤية المستقبلية (The Synthetic Synthesis)",
              bullets: [
                "**تجاوز الثنائيات الضيقة (Transcending Binary Oppositions)**: صياغة موقف تركيبي يوفق بين إيجابيات الطرفين ويقدم رؤية شمولية ناضجة (Reconciling valid points into a mature synthesis).",
                "**الأفق المستقبلي (Visionary Horizons)**: إنهاء المقال بفتح آفاق جديدة للتأمل والعمل المجتمعي الرشيد (Concluding with a resonant forward-looking philosophical reflection).",
              ],
            },
          ],
          examinerTips: [
            "Transition smoothly between conflicting arguments using contrastive connective phrases: 'وعلى النقيض من ذلك تماماً'، 'ومع وجاهة هذا الطرح، إلا أنه يغفل جانباً جوهرياً'.",
            "Never introduce entirely new arguments into your final concluding paragraph; the conclusion serves solely to synthesize and elevate preceding points.",
          ],
          commonMistakes: [
            "Merely repeating the introduction verbatim in the conclusion rather than synthesizing insights gained through the essay.",
            "Attacking opposing advocates personally rather than logically refuting their arguments.",
          ],
          recap: [
            "Effective refutation of counter-arguments and a mature synthetic conclusion elevate discursive writing to the highest Cambridge mark band.",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "الكتابة الوصفية والسردية (Descriptive & Narrative Writing)",
      section: "Paper 2 Section 2 Creative Composition",
      topic: "Atmospheric Worldbuilding, Sensory Imagery, Narrative Arcs, and Characterization",
      intro:
        "Paper 2 Section 2 offers candidates the opportunity to showcase creative brilliance through descriptive (وصفية) or narrative (سردية) writing. Descriptive writing demands static temporal suspension and sensory worldbuilding, whereas narrative writing requires dynamic plot progression, compelling character arcs, conflict escalation, and psychological authenticity.",
      subheadings: [
        {
          title: "الكتابة الوصفية وتجسيد الأجواء (Descriptive Writing & Atmospheric Worldbuilding)",
          body: "Descriptive writing freezes time to immerse the reader in tactile, acoustic, olfactory, and visual landscapes.",
          groups: [
            {
              subTitle: "التصوير الحسي المتكامل (Sensory Immersion)",
              bullets: [
                "**تفعيل الحواس الخمس (Engaging All Senses)**: رسم المشهد عبر الألوان والظلال (بصر)، وقع الخطوات وصرير الأبواب (سمع)، رائحة التراب المبلل والبارود (شم)، ملمس الصخور الخشنة والحرير (لمس) (Activating sight, sound, smell, touch, and taste).",
                "**من الكل إلى الجزء والتدرج المكاني (Spatial Progression)**: تحريك عين القارئ كعدسة سينمائية من الأفق الواسع إلى التفاصيل المجهرية الدقيقة (Directing the camera eye from panorama to macro detail).",
              ],
            },
            {
              subTitle: "خلق المناخ النفسي والمجازي (Psychological Mood & Metaphor)",
              bullets: [
                "**التناغم بين البيئة والحالة الشعورية (Objective Correlative)**: توظيف عناصر الطقس والمكان لتعكس الاضطراب الداخلي أو السكينة النفسية للشخصية (Aligning external weather with internal psychology).",
                "**تجنب السرد والحدث الزمني (Suspending Narrative Drive)**: الامتناع عن سرد الأحداث المتتابعة والتركيز المطلق على سبر أغوار اللحظة الحاضرة وتفاصيلها (Freezing chronology to focus on present atmosphere).",
              ],
            },
          ],
          examinerTips: [
            "The cardinal rule of descriptive writing is: Do not tell a story! If your descriptive piece turns into an action-packed chase, it fails the descriptive brief.",
            "Use precise, evocative color adjectives: replace generic 'أزرق' with 'لازوردي' (azure), 'سماوي' (celestial), or 'نيلي' (indigo).",
          ],
          commonMistakes: [
            "Accidentally slipping into a narrative plot driven by events rather than staying suspended in observational description.",
            "Providing a mechanical catalogue list of objects without exploring their atmospheric, emotional resonance.",
          ],
          recap: [
            "Superior descriptive writing freezes temporal motion, orchestrates multi-sensory immersion, and builds atmospheric resonance.",
          ],
        },
        {
          title: "الكتابة السردية وحبكة القصة (Narrative Architecture & Plot Dynamics)",
          body: "Mastering narrative craft requires structured conflict, compelling character development, and controlled narrative pacing.",
          groups: [
            {
              subTitle: "عناصر البنية السردية (The Classic Narrative Arc)",
              bullets: [
                "**الاستهلال وبناء الشخصية (Exposition & Setup)**: تقديم الشخصية الرئيسة في سياق بيئتها الواقعية وبث بذور الصراع بهدوء (Introducing characters and sowing seeds of tension).",
                "**العقدة وتصاعد التأزم (Inciting Incident & Rising Action)**: وقوع حدث مفصلي يخل بالتوازن ويدفع الشخصية نحو مواجهة عقبات متتالية (An inciting incident escalating toward crisis).",
                "**ذروة التأزم والتحول (The Climax & Epiphany)**: اللحظة الحاسمة التي تصل فيها التوترات إلى أقصاها وتتخذ الشخصية قراراً مصيرياً (The supreme climax and irrevocable turning point).",
                "**الحل والانفراج (Resolution & Denouement)**: تهدئة وتيرة الأحداث وإبراز الأثر النفسي النهائي للرحلة دون اللجوء لنهايات مبتذلة (A resonant psychological resolution avoiding clichés).",
              ],
            },
            {
              subTitle: "تقنيات السرد المتقدمة (Advanced Storytelling Devices)",
              bullets: [
                "**الاسترجاع والاستباق (Flashbacks & Foreshadowing)**: كسر الرتابة الزمنية بالعودة إلى ذكريات ماضية تفسر دوافع الشخصية أو الإشارة لحدث قادم (Disrupting linear chronology for psychological depth).",
                "**الحوار الدال والمقتضب (Meaningful Dialogue)**: توظيف حوارات فصحى مكثفة تكشف طبقات الشخصية وتدفع الحبكة للأمام دون استطراد سطحي (Concise dialogue illuminating character and motive).",
              ],
            },
          ],
          examinerTips: [
            "Avoid catastrophic or unrealistic plotlines (such as plane crashes, alien invasions, or waking up to find 'it was all a dream'); examiners look for realistic, emotionally authentic human experiences.",
            "Vary narrative pacing: linger with sensory details during tense moments, and accelerate pacing during decisive actions.",
          ],
          commonMistakes: [
            "Ending the narrative abruptly with the cliché cop-out 'ثم استيقظتُ من النوم وعلمتُ أنه حلم'.",
            "Cramming too many characters and sprawling events into a short exam story instead of focusing deeply on one key protagonist.",
          ],
          recap: [
            "Compelling narrative writing balances character psychology, escalating tension, organic climax, and believable human resonance.",
          ],
        },
      ],
    },
    {
      number: 6,
      title: "الضبط الإعرابي والدقة اللغوية واستراتيجيات الامتحان (Syntax, Grammar & Exam Mastery)",
      section: "Grammatical Accuracy & Exam Strategy",
      topic: "Advanced Syntax, Hamza Rules, Morphological Precision, and Time Management",
      intro:
        "Chapter 6 bridges rigorous grammatical perfection with examination strategy for Cambridge IGCSE First Language Arabic 7184. Candidates master advanced classical syntax (النحو والصرف), orthographic precision (قواعد الهمزة ورسم الحروف), and strategic time management across Papers 1 and 2 to guarantee top Grade 9 scores.",
      subheadings: [
        {
          title: "النحو المتقدم والصرف ودقة الرسم الإملائي (Advanced Syntax & Orthography)",
          body: "Top grades require immaculate spelling, accurate case endings, and mastery of orthographic rules.",
          groups: [
            {
              subTitle: "قواعد رسم الهمزات (Rules of Hamza Placement)",
              bullets: [
                "**همزة الوصل والقطع (Hamzat al-Wasl vs al-Qat')**: التمييز في الأفعال الخماسية والسداسية ومصادرها (استخراج، انطلاق) بالوصل، والرباعية (إكرام، أرسل) وحروف المعاني بالقطع (Distinguishing Wasl and Qat').",
                "**الهمزة المتوسطة والمتطرفة (Medial & Final Hamza)**: ضبط الهمزة المتوسطة بحسب قوة الحركات (الكسرة أقوى، فالضمة، فالفتحة، فالسكون): فِئَة، سُؤال، مَسْأَلة؛ والهمزة المتطرفة بحسب حركة ما قبلها (قواعد الحركات).",
              ],
            },
            {
              subTitle: "الممنوع من الصرف ودقائق الإعراب (Diptotes & Syntactic Precision)",
              bullets: [
                "**الممنوع من الصرف (Diptotes)**: إدراك الأسماء والصفات التي تجر بالفتحة نيابة عن الكسرة (مساجد، علماء، غضبان) إلا إذا عُرفت بأل أو أضيفت (Diptotes taking fatha in genitive unless definite).",
                "**التوابع الأربعة (The Four Appositives)**: النعت، التوكيد، العطف، والبدل، وضبط مطابقتها الإعرابية التامة للمتبوع في الرفع والنصب والجر (Absolute concord in case across appositives).",
              ],
            },
          ],
          examinerTips: [
            "Always vocalize the final letters of ambiguous words (شكل أواخر الكلمات المشتبهة) to demonstrate grammatical mastery to examiners.",
            "Take immense care with defective nouns (الأسماء المنقوصة): write 'قاضٍ عادلٌ' in nominative/genitive indefinite contexts, and 'قاضياً' in the accusative.",
          ],
          commonMistakes: [
            "Adding a taa marbuta to verbs (e.g. writing ذهبتُ as ذهبة), or omitting the two dots of taa marbuta on feminine nouns.",
            "Writing the accusative alif on words ending with hamza preceded by alif (write جزاءً not جزاءاً).",
          ],
          recap: [
            "Impeccable hamza orthography, diptote constraints, and syntactic concord are hallmarks of a native-level First Language script.",
          ],
        },
        {
          title: "استراتيجيات إدارة الوقت والتفوق في الورقتين 1 و 2 (Mastering Papers 1 & 2)",
          body: "Strategic time allocation and methodical proofreading ensure flawless execution under examination pressure.",
          groups: [
            {
              subTitle: "استراتيجية الورقة 1: القراءة والكتابة الموجهة (Paper 1 - 2 Hours)",
              bullets: [
                "**السؤال الأول (Comprehension & Language Analysis - 50 mins)**: Allocate 15 mins to active reading and text annotation; answer comprehension concisely; spend 20 mins developing full stylistic analysis.",
                "**السؤال الثاني (Directed Summary Writing - 50 mins)**: Allocate 15 mins for point extraction from both texts; plan continuous synthesis outline; write within 200–250 words; verify point coverage.",
                "**المراجعة اللغوية النهائية (20 mins)**: Thorough grammatical scan for case endings, subject-verb concord, and spelling.",
              ],
            },
            {
              subTitle: "استراتيجية الورقة 2: الكتابة الإنشائية (Paper 2 - 2 Hours)",
              bullets: [
                "**القسم الأول: المقال الجدلي/النقاشي (Section 1 - 1 Hour)**: 10 mins planning dialectical structure and counter-arguments; 40 mins writing structured formal essay (350–450 words); 10 mins proofreading.",
                "**القسم الثاني: الكتابة الوصفية/السردية (Section 2 - 1 Hour)**: 10 mins crafting sensory map or narrative arc; 40 mins crafting evocative creative prose; 10 mins refining stylistic phrasing.",
              ],
            },
          ],
          examinerTips: [
            "Never begin writing without a comprehensive 5–10 minute bulleted structural plan; planned essays score far higher in organization and coherence.",
            "Keep handwriting exceptionally neat and legible; a polished presentation instantly predisposes examiners toward higher mark bands.",
          ],
          commonMistakes: [
            "Misallocating time by over-writing the first question and leaving inadequate time for the high-tariff directed writing or essay tasks.",
            "Failing to review the completed script for easily preventable orthographic and grammatical slips.",
          ],
          recap: [
            "Methodical time allocation, disciplined planning, neat presentation, and dedicated proofreading guarantee top-band Grade 9 success across Papers 1 and 2.",
          ],
        },
      ],
    },
  ],
};
