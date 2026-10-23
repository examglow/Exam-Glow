import type { SubjectNotes } from "./types";

export const HISTORY: SubjectNotes = {
  id: "history",
  name: "History",
  code: "0470",
  color: "bg-orange-600",
  chapters: [
    {
      number: 1,
      title: "Exam Technique and Source Skills",
      intro: "IGCSE History (0470) tests two very different skills: the ability to write structured, judgement-driven essays from your own knowledge (Paper 1 core content and Paper 4 depth studies), and the ability to extract, compare and evaluate information from historical sources (Paper 2 source-based questions). Most marks are lost not through lack of knowledge but through poor technique: students narrate instead of arguing, describe sources instead of evaluating them, and never reach a verdict. This chapter teaches you the answer architectures that examiners reward — PEEL paragraphs for essays, and utility-versus-reliability analysis for sources — before you apply them to real content in later chapters.",
      subheadings: [
        {
          title: "Structured Essay Questions and the PEEL Paragraph",
          body: "Paper 1 structured questions are built from three parts: ==part (a) Describe== (usually 4 marks) rewards four accurate, developed points of knowledge; ==part (b) Explain== (usually 6 marks) rewards chains of causation — because, therefore, which led to; ==part (c) Assess== (usually 10 marks) rewards a balanced argument that reaches a supported judgement. The engine of every high-mark answer is the ==PEEL paragraph==: Point, Evidence, Explanation, Link. Each paragraph makes one analytical claim, supports it with precise evidence (a named event, date, statistic or person), explains why that evidence proves the claim, and links back to the exact wording of the question.\n\n## Worked example — a PEEL paragraph in full\n\nQuestion: Why was the Treaty of Versailles unpopular in Germany? [6]\n> Point: The Treaty of Versailles was bitterly resented above all because it was imposed without negotiation. Evidence: Signed in June 1919, the treaty stripped Germany of 13 per cent of its territory, all of its colonies and most of its armed forces, and Article 231 — the war guilt clause — forced Germany to accept sole blame for the First World War. Explanation: Because the settlement was never discussed with German representatives, nationalists could present it as a dictated peace (a diktat), and the choice of the Hall of Mirrors at Versailles — where Germany had proclaimed its empire in 1871 — made the humiliation deliberate and symbolic. Link: This imposed, humiliating character explains why Germans of every political party united in condemning the treaty, creating the grievances Hitler later exploited.\n\nNotice what makes this score: it does not list terms — it argues that ==imposition== caused ==resentment==, and every fact serves that argument.",
          groups: [
            {
              subTitle: "Know what each question type rewards",
              bullets: [
                "**Part (a) Describe [4]**: Give four distinct, accurate points — no explanation needed. One mark per correct point, so breadth beats depth. Spend roughly four to five minutes.",
                "**Part (b) Explain [6]**: Give two to three developed reasons, each with because/therefore reasoning and a supporting fact. Explanation language is what separates a 4 from a 6.",
                "**Part (c) Assess [10]**: Write a mini-essay — judgement in the introduction, two to three PEEL paragraphs covering both sides, and a weighed conclusion. Aim for three paragraphs in 15 minutes.",
                "**Command words decode everything**: Describe = say what happened. Explain = say why. Assess / How far = judge the importance of factors. Circle the command word before you write."
              ]
            },
            {
              subTitle: "The anatomy of a PEEL paragraph",
              bullets: [
                "**Point**: One sentence answering the question directly, using its key words. Never open with background narrative — open with your argument.",
                "**Evidence**: Specific, checkable facts: a treaty and its date, a statistic, a named person and action. Evidence should be the shortest part of the paragraph, not the longest.",
                "**Explanation**: The highest-marked section. Use connectives (because, this meant that, as a result) to show how the evidence causes the outcome in the question.",
                "**Link**: A final sentence tying the paragraph back to the question wording, which keeps every paragraph on-task and signals structure to the examiner.",
                "**Precision beats coverage**: Two fully explained paragraphs with exact facts outscore four paragraphs of vague generalisation every time."
              ]
            },
            {
              subTitle: "Facts that earn marks — build a fact bank",
              bullets: [
                "**Dates as evidence**: 28 June 1919 (Versailles), 7 November 1917 (October Revolution), 30 January 1933 (Hitler appointed Chancellor), 1 September 1939 (invasion of Poland) — a correct date converts a weak point into a credited one.",
                "**Statistics as evidence**: Germany's army cut to 100,000; unemployment of about 6 million in Germany by 1932; roughly 60,000 British casualties on the first day of the Somme — numbers prove scale.",
                "**Named people as evidence**: Bismarck, Garibaldi, Stresemann, Cavour — attach an action to each name (Stresemann called off passive resistance in the Ruhr, 1923).",
                "**Named places and events**: Kronstadt, Plombieres, Sedan, the Ruhr — depth study answers without named specifics rarely rise above the middle bands."
              ]
            }
          ],
          examinerTips: [
            "**Start every answer with a one-sentence judgement**: For part (c), your introduction should answer the question in one line (for example, The Treaty of Versailles was the most important cause of German resentment in the 1920s, though economic crisis also played a major role). Examiners read introductions first and it anchors your whole argument.",
            "**Write one point per paragraph and label your thinking mentally**: A paragraph should contain one idea, one piece of evidence, one explanation. If you find yourself listing, stop and start a new paragraph.",
            "**Use the mark count to budget points**: Four marks means four points; six marks means two or three explained reasons; ten marks means at least two paragraphs each side. Never write three lines for a ten-mark question.",
            "**Spend time in proportion to marks**: A ten-mark part (c) deserves roughly a third of the question's time; part (a) should take under five minutes. Check the clock after each section.",
            "**Learn facts attached to arguments, not in isolation**: Mark schemes credit accurate, relevant supporting detail. A fact that is true but does not support your point earns nothing.",
            "**Leave two minutes to check names and dates**: Misremembered details (Versailles signed in 1919, not 1918) are the most common way students throw away secure marks."
          ],
          commonMistakes: [
            "**Narrating instead of arguing**: Students retell the story (Then Hitler did this... then he did that...) because storytelling feels safe. The fix: begin every paragraph with an analytical point that contains the word because or shows a link to the question.",
            "**Evidence with no explanation**: Listing three facts after a point and moving on caps you near half marks. The fix: after each fact ask yourself so what? — and write the answer.",
            "**Generic evidence**: Writing Germany lost land and money could describe any treaty. The fix: use the specific (13 per cent of territory, 6.6 billion pounds of reparations) — specificity is what distinguishes top-band answers.",
            "**Ignoring the second half of the question**: A question asking how far requires considering the other side. The fix: plan at least one paragraph that argues against your own judgement before the conclusion.",
            "**Writing everything you know**: Dumping all revision onto the page buries the relevant points. The fix: plan three or four PEEL points in the margin before writing, and stick to them.",
            "**Mismanaging time so part (c) is rushed**: Students over-write part (b) and leave eight minutes for a ten-mark essay. The fix: decide your time split when you read the paper and move on when time is up, even mid-thought."
          ],
          recap: [
            "Describe the terms of the Treaty of Versailles that caused most resentment in Germany. [4]",
            "Explain why the Provisional Government struggled to hold onto power in Russia in 1917. [6]",
            "Assess the reasons why Hitler was able to become Chancellor of Germany in January 1933. [10]",
            "Explain why the policy of appeasement was adopted by Britain in the 1930s. [6]",
            "Describe the events of the Long March and explain its significance for the Chinese Communist Party. [6]"
          ]
        },
        {
          title: "'How Far Do You Agree?' — Balanced Judgements and Conclusions",
          body: "The highest-value question type in IGCSE History is the ==weighed judgement== question: How far do you agree that..., How important was X compared to Y..., or Assess the view that.... These questions are marked in levels, and the level descriptors all contain the same three ideas: ==a supported overall judgement==, ==coverage of both sides==, and ==a conclusion that weighs the evidence==. The winning structure is: introduction with your line of argument; two to three PEEL paragraphs arguing the side you will eventually reject or qualify; one to two strong PEEL paragraphs for your preferred side; and a conclusion that does genuine weighing.\n\n## The weighing formula for conclusions\nA top-band conclusion does three things in three to four sentences: it acknowledges the strongest point on the other side (On the one hand...), restates your strongest point with fresh precise evidence (However...), and then explains why yours outweighs it using a criterion — long-term versus short-term impact, breadth of effect, or timing (Ultimately... because it...). Verbs like outweighed, was more decisive than, and on balance signal weighing; verbs like also and furthermore merely add.\n\n## Model conclusion\nQuestion: How far was the Great Depression responsible for Hitler's rise to power? [10]\n> On the one hand, the Depression was clearly decisive in timing: unemployment of about 6 million by 1932 destroyed middle-class savings and made Hitler's promise of work credible, producing the Nazi surge from 12 seats in 1928 to 230 in July 1932. However, the Depression alone cannot explain why voters chose the Nazis rather than the communists, who also gained; that requires Hitler's propaganda, funded by big business, and his appointment as Chancellor on 30 January 1933 through backstairs intrigue, neither of which was caused by unemployment. Ultimately, therefore, I agree with the statement to a large extent: the Depression created the crisis, but Hitler's exploitation of it through propaganda and political manoeuvring converted crisis into power — without those, 1933 does not happen.",
          groups: [
            {
              subTitle: "Essay structure that reaches the top band",
              bullets: [
                "**Introduction (2-3 sentences)**: Define the issue, give one anchor fact, and state your line of argument with a qualified position (largely agree / agree to a limited extent).",
                "**Against paragraphs (1-2)**: Present the opposing evidence honestly and explain it properly — examiners penalise straw-man arguments that are set up only to be knocked down.",
                "**For paragraphs (2)**: Your strongest, best-evidenced points come here, each explained with chains of causation, not just assertion.",
                "**Conclusion (3-4 sentences)**: Weigh both sides against each other using a stated criterion (duration, scale, timing, inevitability) and deliver a clear verdict that answers the exact question asked."
              ]
            },
            {
              subTitle: "Verdict language — phrases that signal weighing",
              bullets: [
                "**Strong agreement**: On balance, the evidence strongly supports the view that... primarily because of its lasting consequences.",
                "**Qualified agreement**: The statement is largely valid in the short term; however, in the longer term its importance was overtaken by...",
                "**Balanced judgement**: While X was necessary, it was not sufficient; without Y, X alone would not have produced the outcome.",
                "**Disagreement with respect**: Although X contributed, it was a symptom rather than a cause; the deeper cause was Y, which determined...",
                "**Criteria to weigh with**: compare time-span (immediate trigger versus long-term condition), scale (how many people affected), and whether the factor acted through others."
              ]
            },
            {
              subTitle: "Planning in four minutes",
              bullets: [
                "**Underline the judgement demanded**: circle How far and the factor named — every paragraph must compare that factor against alternatives, not just describe it.",
                "**T-chart in the margin**: jot two points for, two points against, each with one key fact — this guarantees balance before you start writing.",
                "**Decide your verdict before writing**: a conclusion cannot weigh if you only make up your mind at the end; the introduction verdict and conclusion verdict must match.",
                "**Sequence for effect**: put your second-strongest point first and your strongest last so the essay ends at full strength before the conclusion."
              ]
            }
          ],
          examinerTips: [
            "**Answer the exact comparative in the question**: If the question asks whether X was more important than Y, you must discuss Y in real depth — a paragraph that only covers X caps you at the middle levels.",
            "**Make your criterion of judgement explicit**: Write phrases like What makes this the more important factor is its longer-lasting effect — examiners can then see deliberate weighing rather than gut feeling.",
            "**Keep the same verdict from introduction to conclusion**: Contradicting yourself between the start and end is the fastest route out of the top band; plan your position first.",
            "**Use precise evidence in the conclusion itself**: A fresh, specific fact in the final paragraph (230 Nazi seats in July 1932) proves the conclusion is evidence-based, not a vague summary.",
            "**Practise conclusions as a standalone skill**: Take past questions and write only the introduction and conclusion in four minutes each; the middle is revision, the ends are technique.",
            "**Watch the level descriptors language**: Top levels require sustained analysis and a well-supported judgement — adjectives like significant, decisive and fundamental belong in your argument, never it was very important."
          ],
          commonMistakes: [
            "**A conclusion that merely repeats**: Students restate their paragraphs because they run out of time or ideas. The fix: the conclusion must compare (however, outweighs) not summarise (also, furthermore).",
            "**One-sided answers**: Writing only the side you agree with happens when you plan after starting. The fix: the T-chart plan forces both sides onto paper before paragraph one.",
            "**No verdict at all**: Ending with a question mark or on the other hand... and stopping leaves the examiner to decide for you. The fix: always finish with Therefore, I agree to a large extent because...",
            "**Treating all factors as equal**: Listing five causes with equal weight signals no judgement. The fix: rank them explicitly — the most important, secondly, of lesser importance.",
            "**Extreme verdicts without support**: Claiming totally agree or completely disagree with only moderate evidence is discounted. The fix: use calibrated verdicts — largely, to a significant extent, only to a limited extent.",
            "**Straw-man opposing arguments**: Presenting the other side weakly is spotted instantly. The fix: give the opposing side its best evidence, then explain why yours still outweighs it."
          ],
          recap: [
            "How far do you agree that the Treaty of Versailles was the main cause of the Second World War? Explain your answer. [10]",
            "Assess the view that the Bolsheviks won the Russian Civil War because of the weaknesses of the Whites rather than the strengths of the Reds. [10]",
            "How far was the Wall Street Crash responsible for the collapse of the Weimar Republic? [10]",
            "How far do you agree that the League of Nations was doomed to failure from the moment it was created? [10]",
            "How important was the Nazi-Soviet Pact of August 1939 in causing the outbreak of the Second World War? [10]"
          ]
        },
        {
          title: "Source Evaluation: Utility, Reliability, Limitations and Comparison",
          body: "Paper 2 is built around unseen sources and tests four distinct skills. ==Comprehension== (What is the message of this source? / What does the cartoon suggest?) rewards accurate reading and inference. ==Comparison== (How far do these sources agree?) rewards identifying agreement and disagreement on specific points. ==Cross-referencing== (Which source is more useful for the historian studying...?) rewards judging support against your own knowledge. ==Evaluation== (How useful / how reliable?) rewards analysing ==nature, origin and purpose== — the so-called NOP test — and applying it to the source's value for a specific enquiry.\n\n## Utility versus reliability — the distinction that wins marks\nStudents lose most marks by treating these as the same question. A source can be ==reliable== (honest, accurate, corroborated) yet of ==limited utility== for a particular question, and a source can be ==biased== yet highly ==useful==, because bias tells us about the attitudes of the people who produced it. Reliability asks: can I trust what this says? Utility asks: how much does this help me answer THIS question? Always answer the question asked, then add the other dimension as development.\n\n## Model evaluation paragraph\nQuestion: How useful is this source (a German newsreel of cheering crowds at the 1936 Berlin Olympics) for an enquiry into the standard of living in Nazi Germany?\n> This source is of limited utility for the enquiry, though useful in other ways. In terms of origin, it was produced by the Nazi regime's propaganda ministry, which since March 1933 had controlled all media under Goebbels; its purpose was to present the regime as successful and popular to domestic and foreign audiences. This means the cheering crowds cannot be taken as reliable evidence of living standards, because attendance was stage-managed, dissenters were excluded, and footage was censored. However, the source remains useful as evidence of how the regime wished to be seen, and its images of full employment and order corroborate that unemployment had genuinely fallen from about 6 million in 1932 to under 1 million by 1936. Overall, it is useful for studying Nazi propaganda and presentation, but not as direct evidence of ordinary Germans' lives — for that, a source such as Sopade reports or worker diaries would be more reliable.",
          groups: [
            {
              subTitle: "The NOP test — your evaluation toolkit",
              bullets: [
                "**Nature**: What kind of source is it — speech, cartoon, private letter, official statistics, photograph? Private sources are usually more candid; public or published sources perform for an audience.",
                "**Origin**: Who produced it, when, and in what circumstances? A British government poster of 1916 was produced under the Defence of the Realm Act, which censored the press — that origin shapes everything it can say.",
                "**Purpose**: Why was it created — to inform, persuade, justify, console, mock? Purpose predicts slant: wartime posters demonise the enemy; victory speeches claim unearned credit.",
                "**Apply NOP to a verdict**: never list nature, origin and purpose mechanically; use each to reach a judgement about usefulness or reliability for the specific enquiry.",
                "**Corroborate**: Check the source against your own knowledge and other sources — a claim that matches the agreed historical record (for example, that rationing tightened in Germany after 1942) is corroborated; a lone claim is not."
              ]
            },
            {
              subTitle: "Question types on Paper 2 and how to attack them",
              bullets: [
                "**Message questions (4-5 marks)**: State the message in one sentence, then support it with two or three details from the source — a cartoon's labels, symbols, caption and caption omissions all carry marks.",
                "**Comparison questions (5-7 marks)**: Find two or three specific points of agreement or disagreement — source A blames X while source B blames Y — and quote or closely paraphrase each side.",
                "**Usefulness questions (6-8 marks)**: Judge usefulness for the stated enquiry using NOP, cover both content value and limitations, and end with an overall judgement about how far it helps.",
                "**Reliability / do you trust questions (6-8 marks)**: Assess origin and purpose, check against your own knowledge for accuracy, and conclude with a qualified verdict (reliable for X, but not for Y).",
                "**Cross-reference questions (7-8 marks)**: Say which source is better supported by your own knowledge, giving the factual evidence that confirms one and undermines the other."
              ]
            },
            {
              subTitle: "Example comparison and cross-reference moves",
              bullets: [
                "**Agreement sentence frame**: Both sources agree that...; source A shows this when it says..., and source B supports it by....",
                "**Disagreement sentence frame**: However, they disagree about...; source A, produced by..., emphasises..., whereas source B, written by..., stresses... — the difference reflecting their different origins.",
                "**Own-knowledge cross-check**: Source A claims that reparations were paid on time; however, Germany defaulted in 1922, leading to the Franco-Belgian occupation of the Ruhr in January 1923, so source A's claim is inaccurate.",
                "**Silence as evidence**: Note what a source leaves out — a 1916 recruitment poster praising heroism says nothing about casualty rates, which limits its utility for studying conditions on the Western Front.",
                "**Attitude evidence**: Even propaganda is primary evidence of attitudes — a Soviet poster mocking capitalism tells the historian what the regime wanted citizens to believe, which is itself historically valuable."
              ]
            }
          ],
          examinerTips: [
            "**Anchor every judgement to the exact enquiry**: How useful is this source for studying the impact of the Depression? — mention the Depression in your first and last sentence; generic utility answers score half marks.",
            "**Open evaluation answers with a clear overall judgement**: This source is useful to a limited extent because... — then justify. Mark schemes reward conclusions that are reached and defended, not implied.",
            "**Use your own knowledge as the referee**: In reliability and cross-reference answers, your knowledge decides which source wins; name the specific fact (the Ruhr occupation, the Lytton Report) that settles it.",
            "**Quote briefly, then analyse**: A short quoted phrase proves you read the source; spending the rest of the sentence on NOP analysis converts description into evaluation.",
            "**Tie value to audience and timing**: A source published before an event differs from one written after with hindsight; a private diary entry written during a crisis usually outranks a memoir written decades later.",
            "**Compare content AND provenance in comparison answers**: Top-band answers explain disagreement through origin and purpose (Source B was written by a defeated general defending his reputation), not just content."
          ],
          commonMistakes: [
            "**Treating evaluation as comprehension**: Retelling what the source says without judging it is the single most common Paper 2 error. The fix: after every observation, add so it is useful because... or this limits its reliability because...",
            "**Saying a source is biased so useless**: All sources have a perspective; bias is a fact about origin, not a reason to discard. The fix: bias makes a source unreliable for what it claims, but valuable evidence of the attitudes of its producer.",
            "**Answering reliability when asked utility**: They are different questions with different mark schemes. The fix: utility = value for this specific enquiry (both content and limitations); reliability = trustworthiness (accuracy and honesty).",
            "**Ignoring provenance details printed on the paper**: The caption under a source (who, when, why) is a gift — students who skip it write content-only answers. The fix: build the first sentence of every evaluation from the provenance.",
            "**Contradicting the source with your knowledge by mistake**: Misreading a source and then correcting it wrongly destroys credibility. The fix: re-read the source after writing your answer and check every claim you attributed to it.",
            "**Comparing topics instead of viewpoints**: Saying one source is about economics and the other about politics misses the point. The fix: compare what each says about the same issue, and explain differences through NOP."
          ],
          recap: [
            "Study a wartime propaganda poster. What is its message? Support your answer with details from the source. [5]",
            "How far do Sources A and B agree about the reasons for German resentment of the Treaty of Versailles? [6]",
            "How useful is a private letter from a German citizen, written in 1923, for an enquiry into the effects of hyperinflation in Germany? Explain your answer using details of the source and your own knowledge. [8]",
            "Source C was written by a British general in 1919 defending the tactics used on the Western Front. How reliable is this source for a historian studying conditions in the trenches? [8]",
            "Which of Sources D and E is better supported by your own knowledge of the reasons for the failure of the League of Nations in the 1930s? Explain your answer. [7]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "The Nineteenth Century Core Content",
      intro: "The nineteenth-century core of Paper 1 examines the development of modern nation states between 1848 and 1914: the wave of revolutions that swept Europe in 1848, the industrial transformation that began in Britain, and the nationalist movements that created unified Germany and Italy. These topics are among the most reliably examined on Paper 1, and they reward precisely the skills practised in Chapter 1 — argued paragraphs built from named events, dates and people. Master the chronology below and you can answer almost any question on this section from the revolutions to the eve of the First World War.",
      subheadings: [
        {
          title: "The Revolutions of 1848",
          body: "In 1848 revolution swept across Europe — the ==springtime of the peoples== — the only genuinely continent-wide revolutionary wave between 1789 and 1989. Its causes combined economic misery and political ideals: harvest failures in 1845–47, including the potato blight, caused food prices to rocket and unemployment to spread; industrial recession hit the towns; and middle-class liberals demanded constitutions, parliaments and national independence, while workers demanded work and bread. The first and most contagious revolution came in Paris: in February 1848 King Louis Philippe of France abdicated after street fighting, and the Second Republic was proclaimed — its example electrified every capital in Europe.\n\n## The revolutions spread — and were crushed\nWithin weeks, risings forced concessions across the German and Austrian lands: in Vienna the veteran statesman Metternich, the symbol of the conservative order since 1815, fled in March 1848; Hungary, led by Lajos Kossuth, demanded autonomy from the Habsburg Empire; Czechs, Poles and Italians all revolted. In the German states, a national parliament — the ==Frankfurt Assembly== — met from May 1848 to draft a constitution for a united Germany. Yet by the end of 1849 almost every revolution had been defeated. The Frankfurt Assembly offered the German crown to the King of Prussia, Frederick William IV, in April 1849 — he contemptuously refused a crown from the gutter. Divisions between moderate middle-class liberals and radical workers (bloody June Days in Paris), the loyalty of regular armies to their monarchs, and Russian military intervention that crushed the Hungarian revolution in August 1849 ensured conservative victory. The revolutions nonetheless proved decisive in the long run: nationalism and liberalism survived as forces, the Habsburg Empire was permanently weakened, and the stage was set for the later unifications of Italy and Germany achieved from above by statesmen and armies rather than crowds.",
          groups: [
            {
              subTitle: "Causes of the 1848 revolutions",
              bullets: [
                "**Economic crisis**: Harvest failures in 1845–47 — including potato blight — doubled grain prices and caused hunger riots; a trade recession then threw urban workers out of work, so desperation met idealism on the barricades.",
                "**Liberalism**: The middle classes demanded written constitutions, elected parliaments, the rule of law and careers open to talent rather than birth — grievances against the conservative order established in 1815.",
                "**Nationalism**: Germans wanted national unity; Hungarians, Poles, Czechs and Italians wanted independence or autonomy from the multi-national Austrian (Habsburg) Empire, so every uprising also fed on national grievance.",
                "**Weakness of the old order**: Habsburg Austria, ruled by the ageing Emperor Ferdinand and guided by the hated Metternich, was overstretched and financially exhausted, and could only suppress revolt one region at a time.",
                "**The French example**: The February 1848 revolution in Paris, which toppled Louis Philippe within days, demonstrated that even long-entrenched monarchies could fall — news travelled fast and模仿 uprisings followed within weeks."
              ]
            },
            {
              subTitle: "The revolutions region by region",
              bullets: [
                "**France**: Louis Philippe abdicated in February 1848 and the Second Republic was proclaimed; the brutal June Days — when workers' rising in Paris was crushed by the army — terrified the propertied classes; in December 1848 Louis Napoleon (Napoleon III) won the presidential election and later made himself emperor.",
                "**Austria**: The March 1848 Vienna rising forced Metternich to flee and produced a short-lived liberal government; the imperial court retreated and regrouped, and by late 1848 the army under Windischgratz had bombarded Prague and Vienna back into submission.",
                "**Hungary**: Led by Kossuth, the Hungarian Diet demanded self-government; the rebellion was finally crushed in August 1849 only by Russian troops invited in by the Habsburgs — proof the old order needed foreign help to survive.",
                "**The German states**: Rulers hurriedly granted constitutions under pressure; the Frankfurt Assembly of 1848–49 debated German unity at length but controlled no army and no money; its refusal of the crown by Prussia's king in 1849 discredited liberal parliamentarism.",
                "**Italy**: Revolts broke out in Milan, Venice and Rome; Mazzini briefly headed a Roman Republic in 1849 before French troops restored the Pope — a rehearsal of the issues Italian unification would later resolve."
              ]
            },
            {
              subTitle: "Consequences and historical significance",
              bullets: [
                "**Conservative victory, liberal lesson**: The old monarchies survived 1848–49, but rulers learned they must manage change — several kept the constitutions they had granted under duress.",
                "**Nationalism confirmed as the driving force**: The failure of liberal unity in 1848 pushed nationalists towards the conclusion that unification must be achieved from above by strong states — the path Cavour and Bismarck would take within twenty years.",
                "**Habsburg Austria weakened permanently**: The empire survived, but only with Russian help, and it remained internally divided — a weakness that shaped European politics until 1914.",
                "**Revolutionary exile**: Thousands of defeated revolutionaries, including many Germans, fled to the USA, carrying liberal and radical ideas with them.",
                "**A model for historians**: 1848 demonstrates how economic crisis ignites political demands, and how divided opposition (middle class against workers) throws away victory — a pattern repeated in 1917–18 and 1989."
              ]
            }
          ],
          examinerTips: [
            "**Build answers on causes, events, results**: The three classic part (b) questions on 1848 are causes, why they spread, and why they failed — prepare two explained points for each and you cover every likely question.",
            "**Anchor every cause to a place and date**: Mark schemes reward specific illustration — Vienna in March 1848, the June Days in Paris, Kossuth's Hungary — rather than a generic essay about poverty and nationalism.",
            "**Use 1848 as a turning point in arguments**: For questions on German or Italian unification, present 1848 as the failure of revolution from below that made unification from above possible — this shows high-level analytical linking.",
            "**Practise the Frankfurt Assembly as a judgement question**: Why did the Frankfurt Assembly fail? (No army, no money, Prussian refusal of the crown, divisions) is a favourite assess question — rehearse a weighed verdict.",
            "**Keep the chronology straight in one line**: February 1848 Paris; March 1848 Vienna and Berlin; May 1848 Frankfurt Assembly opens; June 1848 June Days; spring 1849 counter-revolutions complete. A one-line timeline in your plan prevents date chaos.",
            "**Explain why armies stayed loyal**: A top-band explanation of failure always notes that professional armies obeyed their monarchs while revolutionaries had no military force — the decisive imbalance."
          ],
          commonMistakes: [
            "**Confusing the two French revolutions of the century**: Students mix up 1830 (July Revolution, Louis Philippe comes to power), 1848 (February Revolution, he falls) and 1851 (Louis Napoleon's coup). The fix: learn one fact per date — 1830 in, 1848 out, 1851 Napoleon III.",
            "**Treating 1848 as a single coordinated revolution**: It was a chain of separate national revolts with different aims — the fix: always specify which revolution you mean, and note they aided each other mainly by example, not organisation.",
            "**Narrating the Frankfurt Assembly without judgement**: Listing its debates misses the point. The fix: frame it as a symbol of liberal weakness — an assembly without an army.",
            "**Claiming the revolutions achieved nothing**: That verdict ignores their long-term legacy. The fix: distinguish short-term failure (all suppressed by 1849) from long-term significance (nationalism, weakened Austria, lesson of change from above).",
            "**Omitting the June Days**: Students forget that the Paris workers' rising was crushed by the Republic itself. The fix: remember June 1848 — the moment middle-class liberals chose order over workers' demands, a fatal division repeated across Europe.",
            "**Vague references to Metternich**: Writing Metternich fell without context loses the mark. The fix: name him as the Austrian chancellor, architect of the 1815 conservative settlement, forced to flee Vienna in March 1848."
          ],
          recap: [
            "Describe the events of the February 1848 revolution in Paris. [4]",
            "Explain why revolutions broke out across Europe in 1848. [6]",
            "Why did the revolutions of 1848 fail? Explain your answer. [6]",
            "Assess the view that the revolutions of 1848 achieved nothing of lasting significance. [10]",
            "Explain why the Frankfurt Assembly failed to unify Germany. [6]"
          ]
        },
        {
          title: "The Industrial Revolution in Britain",
          body: "The Industrial Revolution — the transformation from hand production in homes to machine production in factories, powered first by water and then by steam — began in Britain in the eighteenth century and made Britain the ==workshop of the world== by 1850. Britain led because several advantages combined: abundant coal and iron ore close together; a large empire providing raw materials and captive markets; profits from trade (including the slave trade) supplying investment capital; a stable government and patent law protecting inventors; an agricultural revolution that freed labour from the land; and a population growing from about 5.5 million in 1700 to over 9 million by 1801, supplying workers and consumers.\n\n## Inventions and power — the chronology that scores marks\nThe textile industry led the way: John Kay's flying shuttle (1733) doubled weaving speed and created demand for yarn; James Hargreaves' spinning jenny (c. 1764) spun multiple threads at once; Richard Arkwright's water frame (1769) used water power to spin strong thread, and his Cromford mill became the model factory; Samuel Crompton's mule (1779) combined the jenny and water frame; Edmund Cartwright's power loom (1785) mechanised weaving. Steam converted industry to coal: Thomas Newcomen's atmospheric engine (1712) pumped water from mines, and James Watt's improved steam engine (patented 1769, commercialised from 1776) powered mills, mines and eventually transport. Abraham Darby's coke-smelting (1709) turned iron production from charcoal to coal. Railways then revolutionised transport: George Stephenson's Stockton and Darlington line opened in 1825 and the Liverpool and Manchester Railway — the first inter-city passenger line — opened in 1830 with Stephenson's Rocket. Canals such as the Bridgewater Canal (1761) had already halved the price of coal in Manchester.\n\n## Consequences — the social revolution\nIndustrialisation created the factory system, with disciplined hours, child labour and dangerous machinery, and drew workers into mushrooming towns: Manchester's population roughly doubled between 1801 and 1851 while its death rate exceeded its birth rate — growth came entirely from migration, and conditions were notoriously foul. Reform came slowly and only under pressure: the Factory Act of 1833 limited children's working hours and appointed inspectors; the Ten Hours Act of 1847 capped the working day for women and young people; the Poor Law Amendment Act of 1834 herded the destitute into workhouses deliberately made harsh to deter claimants; and after cholera epidemics, Edwin Chadwick's sanitary report of 1842 and the Public Health Act of 1848 began to tackle disease. Industrialisation also forged new class structures — an industrial middle class and an urban working class — whose demands for the vote dominated the rest of the century and produced the Reform Acts of 1832, 1867 and 1884.",
          groups: [
            {
              subTitle: "Why Britain industrialised first",
              bullets: [
                "**Raw materials on the doorstep**: Coal and iron ore were abundant and often close together (South Wales, the Black Country, South Yorkshire), cutting transport costs for fuel and building the machines themselves.",
                "**Empire and trade**: Colonies supplied cotton and other raw materials and bought finished goods; profits from Atlantic trade and slavery provided capital for investment in machines and mines.",
                "**Agricultural revolution**: Enclosure and new techniques raised food output while releasing labour from the villages to the towns — an internal migration that fed the factories.",
                "**Money, law and stability**: A national bank, a stock exchange, patent law rewarding inventors, and no invasions after 1688 made long-term investment safe in ways continental rivals could not match.",
                "**Population and markets**: A rising population at home and captive imperial markets abroad guaranteed demand for cheap factory-made textiles, the industry's first great product."
              ]
            },
            {
              subTitle: "Key inventions and dates — learn this table",
              bullets: [
                "**1733 flying shuttle (John Kay)**: Doubled weaving speed, creating yarn shortage — each invention in textiles solved one bottleneck and created the next, which is why innovation came in clusters.",
                "**1764 spinning jenny (James Hargreaves)**: One worker could spin eight, then eighty, threads at once — hand spinners threatened the inventor's house in protest.",
                "**1769 water frame (Richard Arkwright)**: Water-powered spinning of strong cotton thread; Arkwright's Cromford mill (1771) pioneered the factory system with disciplined shift work.",
                "**1779 mule (Samuel Crompton)**: Combined jenny and water frame to produce fine, strong yarn cheaply — made Lancashire the world's cotton capital.",
                "**1785 power loom (Edmund Cartwright)**: Mechanised weaving; by 1815 there were over 100,000 power looms in Britain, destroying the hand-loom weavers' livelihood.",
                "**1769 Watt steam engine; 1825 Stockton–Darlington; 1830 Liverpool–Manchester**: Steam power freed factories from rivers, and railways slashed freight costs and created a national market."
              ]
            },
            {
              subTitle: "Social consequences and government responses",
              bullets: [
                "**Urbanisation without planning**: Towns such as Manchester and Leeds doubled within decades; overcrowded cellars, open sewers and contaminated water produced cholera outbreaks in 1831–32 and 1848 — reform came only when disease threatened the middle class too.",
                "**Factory conditions and child labour**: Children as young as five worked 12–14 hour shifts in dust and noise; the Factory Act of 1833 banned work for under-nines and capped hours at nine for under-thirteens, with inspectors — the first enforceable factory regulation.",
                "**The 1834 Poor Law**: The Poor Law Amendment Act established workhouses with deliberately harsh regimes (families separated, diet monotonous) based on the principle of less eligibility — deterrence, not relief; it provoked riots and the famous protests of the Tolpuddle Martyrs era.",
                "**Public health reform**: Edwin Chadwick's 1842 Report on the Sanitary Condition of the Labouring Population linked dirt to disease; the Public Health Act of 1848 created local boards with powers over drainage and water supply.",
                "**Political transformation**: The new industrial middle class won the vote in 1832, urban workers (partly) in 1867, and farm workers in 1884 — industrialisation reshaped politics as well as landscapes."
              ]
            }
          ],
          examinerTips: [
            "**Answer the why, not just the what**: Explain questions ask why Britain led, why towns grew so fast, why reform came slowly — always push causes (profit, fear of revolution, disease) beyond description.",
            "**Use the invention cluster as evidence, not as the answer**: Listing inventions scores on describe questions; on explain questions, show how each invention caused the next (shuttle created yarn shortage, jenny solved it, factory system followed).",
            "**Link industrialisation to political reform in conclusions**: A top-band answer to any consequence question can note that industrial wealth shifted power to the middle class, forcing the 1832 Reform Act — this connects economy and politics analytically.",
            "**Memorise five anchor dates**: 1733, 1769 (Watt and Arkwright), 1825, 1830, 1834 — these five dates alone can evidence almost any Industrial Revolution paragraph.",
            "**Handle the standard assess question**: How far was the Industrial Revolution beneficial for the British people? — prepare both sides (cheap goods, jobs, eventual reform versus exploitation, slums, child labour) and weigh living standards against later gains.",
            "**Name reformers and reports**: Chadwick's 1842 report, the 1833 Factory Act, the 1847 Ten Hours Act — named legislation with dates is what separates level-3 from level-4 answers."
          ],
          commonMistakes: [
            "**Calling every invention a spinning machine**: Students confuse the jenny, the water frame and the mule. The fix: jenny = home use, many threads; water frame = water power, strong thread; mule = combination; power loom = weaving, not spinning.",
            "**Writing that steam engines powered the first factories**: Early factories were water-powered (hence their river valleys); Watt's engines spread after 1776 and dominated from the 1790s. The fix: remember Arkwright's mill ran on water.",
            "**Assuming government protected workers early**: Regulation came only after scandal and rebellion — 1833, 1842, 1847. The fix: frame reform as reluctant, driven by evidence of suffering and fear of disease and revolution.",
            "**Ignoring the human cost in 'benefit' questions**: Celebrating cheap cloth while skipping slums and child labour produces a one-sided answer. The fix: for at least one paragraph, argue the workers' case with housing and mortality evidence.",
            "**Muddling the reform acts**: 1832 enfranchised middle-class men (and redistributed seats), 1867 urban working men, 1884 rural workers; women waited until 1918. The fix: learn the sequence as a ladder of expanding votes.",
            "**Treating industrialisation as an event not a process**: Saying Britain industrialised in 1760 is meaningless. The fix: describe stages — textiles (1760s–1780s), steam and iron (1780s–1820s), railways (1825–1850)."
          ],
          recap: [
            "Describe the main features of the factory system that developed in Britain after 1770. [4]",
            "Explain why the Industrial Revolution began in Britain rather than in other European countries. [6]",
            "Explain how the inventions of the eighteenth century changed the textile industry. [6]",
            "Assess the view that the Industrial Revolution brought more harm than good to the people of Britain. [10]",
            "Explain why governments were forced to pass factory and public health reforms in the nineteenth century. [6]"
          ]
        },
        {
          title: "Nationalism and the Unification of Italy",
          body: "In 1848 Italy was not a state but a ==geographical expression==, as Metternich contemptuously called it: a patchwork under Austrian rule in the north (Lombardy and Venetia), under the Pope in the centre (the Papal States), under the Bourbon King of Naples in the south, with only the Kingdom of Piedmont-Sardinia independent and Italian-ruled. Italian unification, the Risorgimento, was achieved between 1852 and 1870 through an alliance of idealism and realpolitik — the revolutionary nationalism of Mazzini, the diplomatic cunning of Cavour, and the military charisma of Garibaldi, summarised in the classic division of Mazzini as the soul, Cavour the brain and Garibaldi the sword.\n\n## Cavour's diplomacy, 1852–1861\nCount Camillo Cavour, Prime Minister of Piedmont from 1852, believed only foreign help could expel Austria. At ==Plombieres== in July 1858 he secretly agreed with Napoleon III of France: France would aid Piedmont against Austria, and in reward receive Nice and Savoy. War followed in 1859: French and Piedmontese victories at Magenta and Solferino drove Austria from Lombardy, while nationalist risings overthrew the dukes of the central states (Parma, Modena, Tuscany), which voted by plebiscite to join Piedmont in 1860. Garibaldi then transformed the south: in May 1860 he landed at Marsala in Sicily with about a thousand volunteers — the ==Expedition of the Thousand==, the redshirts — won Sicily at the Battle of Calatafimi, crossed to the mainland, and took Naples virtually without a fight. Crucially, Garibaldi handed his conquests to King Victor Emmanuel II instead of pressing his own republican cause, and in March 1861 the ==Kingdom of Italy== was proclaimed, excluding only Venetia and Rome. The process completed by foreign wars: Venetia was gained from Austria as the prize of alliance with Prussia in the Austro-Prussian War of 1866, and Rome in 1870, when French troops guarding the Pope were withdrawn for the Franco-Prussian War and Italian troops entered the city on 20 September 1870.",
          groups: [
            {
              subTitle: "The three architects of unification",
              bullets: [
                "**Giuseppe Mazzini — the soul**: Founded Young Italy in 1831 to fight for a united, republican Italy through revolution; his ideas inspired a generation, and he briefly led the Roman Republic of 1849, but his failed insurrections proved revolution alone could not unify Italy.",
                "**Count Cavour — the brain**: Piedmont's prime minister from 1852; a realist who modernised the economy and army, then used diplomacy — the 1858 Plombieres agreement with France — to make Piedmont the legitimate leader of the nationalist cause.",
                "**Giuseppe Garibaldi — the sword**: Veteran of guerrilla wars; his Expedition of the Thousand (1860) conquered the Kingdom of the Two Sicilies in months with minimal bloodshed; his self-denial in handing the south to Victor Emmanuel made the monarchy, not his republic, the vehicle of unity.",
                "**Victor Emmanuel II — the figurehead**: King of Piedmont-Sardinia whose crown became the crown of Italy in 1861; his acceptance of the south gave unification a legal monarchist framework acceptable to European powers.",
                "**Napoleon III — the necessary foreigner**: Without French arms in 1859, Piedmont could never have beaten Austria; his price was Nice and Savoy, surrendered in 1860."
              ]
            },
            {
              subTitle: "Stages of unification — a dated timeline",
              bullets: [
                "**1848–49 failure**: Revolts in Milan, Venice and Rome crushed — proof that revolutionary enthusiasm without armies and allies could not defeat Austria or the Pope.",
                "**July 1858 Plombieres**: Secret pact — France fights Austria alongside Piedmont; France receives Nice and Savoy; Italy gains Lombardy and pushes Austria towards the Alps.",
                "**1859 war against Austria**: Victories at Magenta (June) and Solferino (June) free Lombardy; revolutions in the central duchies topple pro-Austrian rulers, and plebiscites in 1860 bring central Italy into Piedmont.",
                "**May–November 1860 Garibaldi's campaign**: The Thousand land at Marsala, win Sicily, cross to Naples; Garibaldi meets Victor Emmanuel and surrenders the south; March 1861 the Kingdom of Italy is proclaimed with Turin as capital.",
                "**1866 Venetia**: Italy joins Prussia against Austria; although its own armies lose at Custozza and Lissa, Prussian victory delivers Venetia by treaty.",
                "**1870 Rome**: With French troops withdrawn for the war against Prussia, Italian forces breach the walls on 20 September 1870; Rome becomes the capital in 1871 — unification complete except for the irredentist Trentino and Trieste, which would be claimed in 1915 and gained only in 1918."
              ]
            },
            {
              subTitle: "Why unification succeeded after 1852 — the analysis",
              bullets: [
                "**Foreign intervention was decisive**: Austria could only be beaten by France (1859) and Prussia (1866); Rome could only be taken when France was defeated in 1870 — unification was made abroad as much as in Italy.",
                "**Piedmont provided the state machine**: Unlike Mazzini's talk, Cavour had a real army, a constitution (the Statuto of 1848), railways and credit — the institutions into which Italy could be absorbed.",
                "**Plebiscites gave legitimacy**: Popular votes in the central states and the south let Cavour claim unification expressed the will of the people, converting conquest into national consent.",
                "**Garibaldi's restraint**: Had the republican Garibaldi marched on Rome in 1860, France would have intervened and civil war might have followed; his submission to the king kept the movement united.",
                "**Austria's relative decline**: After 1848 Austria was overstretched and, after defeat by Prussia in 1866, definitively excluded from Italy — the obstacle to unity was removed by another's victory."
              ]
            }
          ],
          examinerTips: [
            "**Personality questions are really process questions**: Who contributed most to Italian unification? — argue the case (Mazzini inspired, Cavour delivered, Garibaldi conquered) but conclude by weighing necessity against timing.",
            "**Never describe Plombieres without its bargain**: Name what each side got — French help for Piedmont, Nice and Savoy for France — the exchange proves Cavour's skill and scores the explanation marks.",
            "**Use the 1860 plebiscites as evidence of consent**: When explaining why unification was relatively peaceful after 1859, the plebiscites in central Italy and the south show popular endorsement — a subtle, high-level point.",
            "**Keep the two foreign acquisitions distinct**: Venetia came in 1866 via Prussia; Rome in 1870 after French withdrawal — students who merge them lose two separate marks.",
            "**Practise the 1848 versus 1852 contrast**: A favourite assess angle is why nationalist movements succeeded after 1852 when they failed in 1848 — the answer: state power, foreign alliances and leadership replaced spontaneous revolution.",
            "**Mention what was missing**: The new Italy excluded Rome until 1870 and the Trentino until 1918 — noting the incompleteness demonstrates precise knowledge and sets up links to the First World War (Italy joined the Allies in 1915 partly to claim these lands)."
          ],
          commonMistakes: [
            "**Crediting Garibaldi with the whole unification**: His thousand volunteers could never have beaten Austria. The fix: always pair the heroic southern conquest with Cavour's northern diplomacy — both were necessary, neither sufficient.",
            "**Reversing Plombieres**: Students muddle who got Nice and Savoy or who fought Austria. The fix: France got the territories; Piedmont got Lombardy and the war.",
            "**Forgetting the Pope's position**: Rome only fell in 1870 because French troops left. The fix: remember the Pope held Rome with French protection from 1849 to 1870 — no French war, no Italian Rome.",
            "**Treating the 1861 kingdom as complete Italy**: The proclamation of 1861 excluded Venetia and Rome. The fix: describe 1861 as the kingdom proclaimed, 1870/71 as unification completed.",
            "**Confusing the leaders' ideologies**: Mazzini was republican, Cavour monarchist, Garibaldi republican but pragmatic. The fix: learn the ideology-motive table (Mazzini = faith, Cavour = state interest, Garibaldi = adventure and unity).",
            "**Omitting Austria's role in the question**: Questions asking about obstacles must feature Austria, the power holding Lombardy-Venetia and dominating the peninsula through garrisons until 1859."
          ],
          recap: [
            "Describe the political divisions of Italy in 1848. [4]",
            "Explain the aims and methods of Cavour in the unification of Italy. [6]",
            "How significant was Garibaldi's expedition of 1860 in the unification of Italy? Explain your answer. [6]",
            "Assess the view that Italian unification owed more to foreign intervention than to Italian leadership. [10]",
            "Explain why Rome became the capital of Italy only in 1871. [6]"
          ]
        },
        {
          title: "The Unification of Germany",
          body: "Germany before 1848 was a patchwork of 39 states bound loosely in the German Confederation of 1815, with Austria and Prussia competing for leadership. Two long-term forces prepared unification: the ==Zollverein==, the customs union founded in 1834 under Prussian leadership which abolished tariffs between member states and — critically — excluded Austria, so Prussia gradually became Germany's economic heart; and Prussian military and administrative strength. The revolutions of 1848–49 showed that neither liberal talk (the Frankfurt Assembly) nor popular nationalism could unify Germany: the task required a powerful state willing to use war.\n\n## Bismarck's wars of unification, 1864–1871\nOtto von Bismarck became Prussian minister-president in September 1862 with a programme expressed in his blood and iron speech: German unity would be achieved not by speeches and majorities but by force. He then fought three carefully engineered wars. The ==Danish War of 1864==, fought jointly with Austria, seized Schleswig and Holstein from Denmark — and set up the quarrel over their administration that Bismarck used against Austria. The ==Austro-Prussian War of 1866== (the Seven Weeks' War) ended at the decisive battle of Königgrätz (Sadowa) on 3 July 1866; Prussia expelled Austria from German affairs, annexed several small states, and created the ==North German Confederation== under its own presidency in 1867. The ==Franco-Prussian War of 1870–71== completed the work: Bismarck edited the Ems Dispatch in July 1870 so that it seemed King William I had insulted the French ambassador, provoking France to declare war (19 July 1870). Prussian victories at Sedan on 1–2 September 1870, where Napoleon III was captured, and the siege of Paris followed. While the war still raged, on 18 January 1871 the German Empire was proclaimed in the Hall of Mirrors at Versailles. France ceded Alsace-Lorraine and paid an indemnity of five billion francs. The seeds of 1914 were already sown: France now sought revenge (revanchism), and the new empire's annexations and harsh peace left Europe's greatest questions unresolved.",
          groups: [
            {
              subTitle: "Long-term foundations of German unity",
              bullets: [
                "**Zollverein (1834)**: The customs union of most German states, directed by Prussia, created a free-trade zone of some 33 million people — railways and common tariffs bound the economies before politics followed, and Austria's exclusion weakened its German influence fatally.",
                "**Prussian military reform**: From 1860, War Minister Roon and Chief of Staff Moltke modernised the army — breech-loading needle gun, a general staff and a rail network for rapid mobilisation — giving Prussia a force no German rival could match.",
                "**Economic growth**: Coal and steel in the Ruhr, plus the banks and rail mileage to exploit them, made Prussia the natural industrial centre of any German state.",
                "**Liberal nationalism**: The 1848 revolutions failed, but the ideal of national unity survived and could be harnessed — Bismarck later wrapped conquest in the flag, presenting war against France as national defence against foreign bullying.",
                "**Austrian decline**: Defeat in Italy in 1859 and exclusion from the Zollverein left Austria financially and militarily overstretched — the old rival was weakening just as Prussia consolidated."
              ]
            },
            {
              subTitle: "The three wars — dates, methods, results",
              bullets: [
                "**Danish War, 1864**: Bismarck allied with Austria against Denmark over Schleswig-Holstein, won quickly, then engineered disputes over the spoils to isolate Austria — war used as a diplomatic tool, not an end.",
                "**Austro-Prussian War, 1866**: Seven weeks, decided in one afternoon at Königgrätz (3 July 1866) by Prussian firepower and Moltke's railway mobilisation; Bismarck was lenient (no annexations of Austrian land) to keep Austria out of future conflicts — a calculated moderation.",
                "**North German Confederation, 1867**: Prussia annexed Hanover, Hesse-Cassel, Nassau and Frankfurt; the remaining north German states joined a confederation dominated by the Prussian king and chancellor — the institutional skeleton of the empire.",
                "**Franco-Prussian War, 1870–71**: The edited Ems Dispatch baited France into declaring war, uniting all German states behind Prussia; victories at Sedan (Napoleon III captured) and the siege of Paris brought the south German states in by treaty.",
                "**Proclamation, 18 January 1871**: In the Hall of Mirrors at Versailles, William I became German Emperor; France ceded Alsace-Lorraine and paid five billion francs — a peace so harsh it made Franco-German reconciliation impossible before 1914."
              ]
            },
            {
              subTitle: "Explaining Bismarck's success — the analysis",
              bullets: [
                "**Realpolitik**: Bismarck judged every policy by power, not principle — ally with Austria against Denmark, then against Austria, then court Austria afterwards; morality never constrained him.",
                "**Control of the agenda**: Each war was provoked so that the other side appeared the aggressor — Denmark, Austria and above all France declared war on terms and timing that suited Prussia, isolating each victim diplomatically.",
                "**Isolation of the enemy**: Before 1866 Bismarck secured French neutrality (hinting at compensation); before 1870 he negotiated Russia's neutrality and Italy's alliance, so France faced Germany alone.",
                "**Military and technological superiority**: Conscription, the general staff, railways and the needle gun converted Prussian plans into victories measured in weeks.",
                "**Nationalist packaging**: Bismarck presented Prussian expansion as the will of the German nation — the wars of unification became people's wars, and southern Catholics and northern Protestants marched under one flag against France."
              ]
            }
          ],
          examinerTips: [
            "**Learn the war table cold**: Dates, opponent, decisive battle, result for each of 1864, 1866, 1870–71 — this table alone answers most describe and explain questions on German unification.",
            "**Explain the Ems Dispatch as a method, not a myth**: Saying Bismarck edited a telegram sounds trivial; explain that by releasing a shortened, provocative version he made France declare war — which united Germany and isolated France. That is the analysis that scores.",
            "**Answer Bismarck versus other factors with precision**: Assess questions (How far was Bismarck responsible?) should credit the Zollverein, the army and nationalism, then argue whether the same man in different circumstances could have done it — conclude with a clear weighing.",
            "**Link 1871 to 1914 for top-band conclusions**: Mentioning Alsace-Lorraine and French revanchism shows you understand consequences — a classic discriminator between level 3 and level 4.",
            "**Contrast the two unifications when asked**: Italy needed French and Prussian help against Austria and France removed the last obstacle; Germany needed only to defeat Austria and France. Comparing the dependence on foreigners is a favourite assess angle.",
            "**Do not forget the south German states**: Bavaria, Württemberg, Baden and Hesse-Darmstadt joined through the 1870–71 war, not the North German Confederation — students who say unification happened in 1867 lose the mark for 1871."
          ],
          commonMistakes: [
            "**Writing that Bismarck created nationalism**: He exploited and directed it; the Zollverein, the 1848 ideal and economic integration predated him. The fix: distinguish creating conditions (others) from exploiting conditions (Bismarck).",
            "**Claiming Prussia annexed Austria in 1866**: It did not — Austria was excluded from German affairs but kept its empire. The fix: 1866 = Austria expelled; 1871 = France defeated and empire proclaimed.",
            "**Muddling the battles**: Königgrätz decided 1866; Sedan decided 1870. The fix: remember Sedan captured an emperor (Napoleon III), Königgrätz humbled an empire.",
            "**Omitting the indemnity and annexations of 1871**: The five billion franc indemnity and Alsace-Lorraine are crucial consequences. The fix: any 1871 paragraph should end with what France lost.",
            "**Treating the Ems Dispatch as the cause of the war**: It was the trigger Bismarck manufactured; deeper causes were rivalry over the Spanish throne candidacy and French fear of a united Germany. The fix: separate trigger from cause in your answer.",
            "**Forgetting that 1871 united only some Germans**: Austria's Germans were excluded — the grossdeutsch versus kleindeutsch question was settled kleindeutsch (little German, without Austria). The fix: note this explicitly in assess answers for precision marks."
          ],
          recap: [
            "Describe how the Zollverein contributed to German unification. [4]",
            "Explain Bismarck's role in the unification of Germany between 1862 and 1871. [6]",
            "Why did Prussia defeat Austria so quickly in 1866? Explain your answer. [6]",
            "How far was Bismarck responsible for the unification of Germany? Explain your answer. [10]",
            "Explain why the Franco-Prussian War of 1870–71 completed German unification, and assess its consequences for France. [8]"
          ]
        }
      ]
    }
  ]
};
