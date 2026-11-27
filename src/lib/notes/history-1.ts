import type { Chapter } from "./types";

/**
 * Cambridge IGCSE History (0470) 2027–2028 Syllabus Notes
 * Part 1: Chapters 1–3 (Core Content Option B: 20th Century International Relations 1919–1939)
 */
export const HISTORY_PART1: Chapter[] = [
  {
    number: 1,
    title: "The Peace Treaties of 1919–1923",
    section: "Option B: The 20th century: international relations since 1919",
    topic: "Key Question 1: Were the peace treaties of 1919–23 fair?",
    intro:
      "Following the armistice of November 1918, the victorious Allied leaders convened at Paris to draft settlements that redrew the map of Europe and the Middle East. This chapter analyzes the conflicting motives of the 'Big Three', the harsh terms and consequences of the Treaty of Versailles, the other treaties (St Germain, Neuilly, Trianon, Sèvres, Lausanne), and assesses whether the settlements were justifiable or fatally flawed.",
    subheadings: [
      {
        title: "Motives and Aims of the 'Big Three' at Paris",
        body:
          "The Paris Peace Conference opened in January 1919 at Versailles. The negotiations were dominated by the leaders of Britain, France, and the United States, who held sharply conflicting aims:\n\n" +
          "**1. Georges Clemenceau (Prime Minister of France — 'The Tiger'):**\n" +
          "- **Context:** France had suffered massive devastation: 1.4 million military deaths, vast areas of agricultural and industrial land destroyed in northern France, and two German invasions within 50 years (1870 and 1914).\n" +
          "- **Aims:**\n" +
          "  - **Security & Revenge:** Permanently weaken Germany to make another invasion impossible.\n" +
          "  - **Disarmament:** Dismantle the German armed forces and create an independent buffer state in the Rhineland.\n" +
          "  - **Reparations:** Impose enormous financial reparations to pay for war damage and cripple the German economy.\n" +
          "  - **Territory:** Regain Alsace-Lorraine and annex the coal-rich Saarland.\n\n" +
          "**2. Woodrow Wilson (President of the United States — The Idealist):**\n" +
          "- **Context:** The USA entered the war in April 1917; suffered relatively few casualties (approx. 116,000) and no domestic mainland destruction. Wilson believed European imperialism and secretive diplomacy caused the war.\n" +
          "- **Aims (Based on his Fourteen Points, Jan 1918):**\n" +
          "  - **League of Nations:** Establish an international peacekeeping organisation based on collective security.\n" +
          "  - **Self-Determination:** Allow ethnic nationalities in Europe to govern themselves in sovereign nation-states.\n" +
          "  - **Disarmament:** Mutual global disarmament to prevent future arms races.\n" +
          "  - **No Revenge:** Avoid punishing Germany so harshly that it would breed resentment and future wars.\n\n" +
          "**3. David Lloyd George (Prime Minister of Great Britain — The Pragmatist):**\n" +
          "- **Context:** Faced intense public and press pressure at home to 'Hang the Kaiser' and 'Squeeze Germany until the pips squeak' after the December 1918 'Khaki Election'.\n" +
          "- **Aims:**\n" +
          "  - **Imperial & Naval Dominance:** Confiscate German colonies and eliminate the German High Seas Fleet to secure British maritime supremacy.\n" +
          "  - **Economic Pragmatism:** Maintain Germany as a viable trading partner for Britain; Lloyd George recognized that a ruined Germany would drag down European recovery.\n" +
          "  - **Barrier Against Communism:** Prevent Germany from becoming destitute and falling to Bolshevik communist revolution (following Russia's 1917 revolution).",
        examinerTips: [
          "Never treat the 'Big Three' as having identical goals. Highlight the sharp personal clashes: Clemenceau thought Wilson was a naïve preacher, while Wilson thought Clemenceau was vindictive.",
          "Remember that Lloyd George was trapped between anti-German British public opinion and his own private desire to preserve Germany as an economic buffer.",
        ],
        commonMistakes: [
          "Claiming Wilson wanted to punish Germany heavily. Wilson wanted peace without victory and was against punitive reparations.",
        ],
        recap: [
          "Explain two reasons why Georges Clemenceau demanded severe terms against Germany in 1919.",
          "Identify two key principles in Woodrow Wilson's Fourteen Points.",
        ],
      },
      {
        title: "Terms of the Treaty of Versailles (GARGLE)",
        body:
          "Signed on **28 June 1919** in the Hall of Mirrors at Versailles, the treaty imposed strict terms on Germany, summarized by the mnemonic **GARGLE**:\n\n" +
          "**1. Guilt for the War (Article 231 - War Guilt Clause):**\n" +
          "- Germany was forced to accept sole legal and moral responsibility for causing all loss and damage of the war:\n" +
          "  *\"The Allied and Associated Governments affirm and Germany accepts the responsibility of Germany and her allies for causing all the loss and damage...\"*\n" +
          "- This clause provided the legal justification for demanding reparations.\n\n" +
          "**2. Armed Forces Disarmament:**\n" +
          "- Army limited strictly to **100,000 men**, all volunteers (conscription abolished).\n" +
          "- Navy restricted to **6 battleships**, 6 light cruisers, 12 destroyers, and 12 torpedo boats; **zero submarines** allowed.\n" +
          "- **Zero military aircraft** (air force abolished).\n" +
          "- **No tanks, heavy artillery, or poison gas** permitted.\n" +
          "- The **Rhineland** was permanently demilitarised: no German troops or fortifications permitted within 50 km east of the Rhine, and occupied by Allied troops for 15 years.\n\n" +
          "**3. Reparations:**\n" +
          "- In 1921, the Inter-Allied Reparations Commission set the final figure at **£6.6 billion** (132 billion gold marks), payable in annual installments in cash and commodities (coal, timber).\n\n" +
          "**4. German Territories Lost (13% of European land, 10% of population):**\n" +
          "- **Alsace-Lorraine** returned to France.\n" +
          "- **Eupen and Malmedy** transferred to Belgium following plebiscites.\n" +
          "- **Northern Schleswig** transferred to Denmark following a plebiscite.\n" +
          "- **West Prussia and Posen (The Polish Corridor)** given to newly recreated Poland to provide access to the Baltic Sea, cutting off East Prussia from the rest of Germany.\n" +
          "- **Danzig** made a Free City under League of Nations mandate.\n" +
          "- **Memel** ceded to Allied control (later annexed by Lithuania).\n" +
          "- **Saarland** placed under League of Nations administration for 15 years (its coal mines given to France); a plebiscite was scheduled for 1935.\n" +
          "- **Anschluss** (union) between Germany and Austria was strictly forbidden.\n\n" +
          "**5. League of Nations:**\n" +
          "- Germany was initially excluded from joining the League until it proved itself a peaceful nation.\n\n" +
          "**6. Extra-European Empire Lost:**\n" +
          "- All of Germany's African and Pacific colonies were confiscated and transferred as **mandates** to the League of Nations (governed predominantly by Britain, France, South Africa, Australia, and Japan).",
        examinerTips: [
          "Memorize the exact figures: 100,000 soldiers, 6 battleships, zero submarines/aircraft, £6.6 billion reparations, 13% land loss.",
          "Distinguish clearly between the Polish Corridor (land given to Poland) and Danzig (a Free City run by the League).",
        ],
        commonMistakes: [
          "Stating that the Rhineland was given to France. The Rhineland remained part of Germany, but was demilitarised and temporarily occupied by Allied troops.",
        ],
        recap: [
          "State three military restrictions placed on Germany by the Treaty of Versailles.",
          "What was the significance of Article 231 (the War Guilt Clause)?",
        ],
      },
      {
        title: "German Reaction, Diktat & The 1923 Crisis",
        body:
          "**The German Reaction:**\n" +
          "- **Diktat (Dictated Peace):** German delegates were refused admittance to the drafting negotiations. They were given a three-week deadline to sign the finished treaty under threat of immediate Allied naval blockade and invasion. Germans felt it was a dictated peace, not a negotiated settlement.\n" +
          "- **Dolchstosslegende (The 'Stab in the Back' Myth):** Nationalists and military commanders (e.g. Ludendorff and Hindenburg) claimed the German army had not been defeated on the battlefield, but had been 'stabbed in the back' by socialist, liberal, and Jewish politicians who founded the Weimar Republic ('The November Criminals').\n" +
          "- **Resentment of Article 231:** Germans believed that all European powers were equally responsible for the outbreak of war in 1914; accepting sole guilt felt deeply unjust.\n" +
          "- **Isolation of Millions of Germans:** Self-determination was applied to Poles and Czechs, but denied to Germans: millions of ethnic Germans found themselves living under foreign rule in Poland (the Corridor) and Czechoslovakia (the Sudetenland).\n\n" +
          "**The 1923 Ruhr Crisis and Hyperinflation:**\n" +
          "- In 1922, the struggling Weimar government defaulted on its scheduled timber and coal reparations payments.\n" +
          "- In **January 1923**, French and Belgian troops marched into the **Ruhr industrial heartland** to seize raw materials and manufactured goods directly.\n" +
          "- The German government ordered **passive resistance** (workers went on general strike, refusing to mine coal or run railways).\n" +
          "- To pay the striking workers and fund government expenditures, the Weimar government printed colossal amounts of paper currency.\n" +
          "- This triggered catastrophic **hyperinflation**: by late 1923, a loaf of bread cost over 200 billion marks. Middle-class savings, pensions, and war bonds were wiped out, permanently alienating the German middle class from democratic institutions.",
        examinerTips: [
          "Trace the direct causal chain: defaulting on reparations $\\to$ French invasion of Ruhr $\\to$ passive resistance $\\to$ money printing $\\to$ hyperinflation.",
          "Note that hyperinflation had winners (debtors, industrialists paying off loans with worthless marks) and losers (savers, pensioners, fixed-income workers).",
        ],
        commonMistakes: [
          "Confusing the 1923 Hyperinflation crisis with the 1929 Great Depression. Hyperinflation happened in 1923 due to money printing over the Ruhr crisis; the Great Depression happened after the 1929 Wall Street Crash.",
        ],
        recap: [
          "Why did Germans refer to the Treaty of Versailles as a 'Diktat'?",
          "Explain how the French invasion of the Ruhr in 1923 triggered hyperinflation in Germany.",
        ],
      },
      {
        title: "The Other Peace Treaties (1919–1923)",
        body:
          "The Paris Peace Conference also concluded four separate peace treaties with Germany's wartime allies, which completely dismantled the Austro-Hungarian and Ottoman Empires:\n\n" +
          "| Treaty | Defeated Nation | Date | Key Terms & Territorial Changes |\n" +
          "| :--- | :--- | :--- | :--- |\n" +
          "| **Treaty of Saint-Germain** | Austria | Sept 1919 | Dissolved Austro-Hungarian Empire; army limited to 30,000; reparations set; Bohemia and Moravia given to Czechoslovakia; Dalmatia, Bosnia, Herzegovina to Yugoslavia; Galicia to Poland; South Tyrol and Istria to Italy; *Anschluss* with Germany explicitly forbidden. Austria became a small, landlocked German-speaking republic. |\n" +
          "| **Treaty of Neuilly** | Bulgaria | Nov 1919 | Army limited to 20,000; reparations of £100 million; lost Western Thrace to Greece (cutting off Aegean sea access); lands ceded to Yugoslavia and Romania. Considered a national catastrophe in Bulgaria. |\n" +
          "| **Treaty of Trianon** | Hungary | June 1920 | Army limited to 35,000; lost **two-thirds of its territory** and 60% of population; Transylvania ceded to Romania; Slovakia and Ruthenia ceded to Czechoslovakia; Croatia and Slovenia to Yugoslavia. Over 3 million ethnic Hungarians were stranded under foreign rule. |\n" +
          "| **Treaty of Sèvres** | Ottoman Empire (Turkey) | Aug 1920 | Dismantled Ottoman Empire: Syrian mandate to France; Palestine, Transjordan, and Iraq mandates to Britain; Smyrna and Thrace to Greece; straits internationalised. Highly humiliating; triggered Turkish nationalist revolution led by **Mustafa Kemal Atatürk**, who drove Greek forces out. |\n" +
          "| **Treaty of Lausanne** | Turkey (Revised) | July 1923 | Replaced Sèvres after Atatürk's military victories: Turkey regained eastern Thrace, Smyrna, and full control over the Dardanelles and Bosporus straits; foreign troops departed; reparations abolished. Demonstrated that determined resistance could overturn Paris treaties. |",
        examinerTips: [
          "Memorize which treaty dealt with which defeated power: Versailles (Germany), St Germain (Austria), Neuilly (Bulgaria), Trianon (Hungary), Sèvres/Lausanne (Turkey).",
          "Highlight that the Treaty of Lausanne was the first treaty to overturn a Paris settlement, proving to other revisionsists that force could succeed.",
        ],
        commonMistakes: [
          "Confusing the Treaty of Saint-Germain (Austria) with the Treaty of Trianon (Hungary).",
        ],
        recap: [
          "State two terms of the Treaty of Saint-Germain (1919).",
          "Why was the Treaty of Sèvres replaced by the Treaty of Lausanne in 1923?",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "The League of Nations in the 1920s and 1930s",
    section: "Option B: The 20th century: international relations since 1919",
    topic: "Key Question 2: To what extent was the League of Nations a success?",
    intro:
      "Established as an instrument of collective security and global cooperation, the League of Nations was Woodrow Wilson's flagship vision. This chapter examines its structure, early achievements in border disputes and humanitarian work, and the fatal crises in Manchuria and Abyssinia that destroyed its authority.",
    subheadings: [
      {
        title: "Aims, Structure & Membership Weaknesses of the League",
        body:
          "**Aims of the League of Nations (The Covenant):**\n" +
          "- **Collective Security:** An attack on any member state would be treated as an attack on all members; nations would unite militarily or economically to repel aggression.\n" +
          "- **Disarmament:** Reduce national armaments to the lowest point consistent with domestic safety.\n" +
          "- **Arbitration:** Settle international disputes peacefully through mediation or the International Court.\n" +
          "- **Improve Global Living & Working Conditions:** Eradicate diseases, end human trafficking, improve labour standards, and assist refugees.\n\n" +
          "**Structure of the League (Based in Geneva, Switzerland):**\n" +
          "- **The Assembly:** Met once a year; all member states had one vote. Decisions had to be **unanimous**.\n" +
          "- **The Council:** Smaller executive body meeting 4–5 times a year. Consisted of **permanent members** (Britain, France, Italy, Japan, and later Germany) and temporary rotating members. Permanent members held an absolute **veto**.\n" +
          "- **The Secretariat:** Civil service handling administrative documentation, translations, and agendas.\n" +
          "- **Permanent Court of International Justice (The Hague):** Provided legal rulings on border disputes, but had no enforcement powers.\n" +
          "- **Special Commissions & Agencies:** Mandates Commission, Refugees Committee, International Labour Organisation (ILO), Health Organisation, Slavery Commission.\n\n" +
          "**Fatal Membership Weaknesses:**\n" +
          "- **Absence of the United States:** The US Senate voted against ratifying the Treaty of Versailles in Nov 1919 and March 1920; the US adopted an **isolationist** policy. The League lost the economic, financial, and military backing of the world's greatest superpower.\n" +
          "- **Absence of Russia / USSR:** Excluded because of Western fear of Bolshevism; only joined in 1934 (expelled in 1939 after invading Finland).\n" +
          "- **Absence of Germany:** Excluded as a defeated aggressor until joining under Stresemann in 1926 (left in 1933 under Hitler).\n" +
          "- **Reluctant Leadership of Britain and France:** Both powers were economically drained by WWI and prioritized their own imperial self-interests over League duties.",
        examinerTips: [
          "Explain why the requirement for unanimity in the Assembly crippled decision-making.",
          "Emphasize that without the USA, economic sanctions were ineffective because aggressor nations could simply continue trading with the US.",
        ],
        commonMistakes: [
          "Assuming the League had its own permanent international army. The League possessed NO standing armed forces; it relied on member states volunteering troops, which Britain and France rarely did.",
        ],
        recap: [
          "State two main aims of the League of Nations.",
          "Explain why the absence of the USA severely weakened the League from the outset.",
        ],
      },
      {
        title: "Successes and Failures in the 1920s & Humanitarian Agencies",
        body:
          "During the 1920s, the League handled several territorial disputes with mixed results:\n\n" +
          "**1. Peacekeeping Successes in the 1920s:**\n" +
          "- **Aaland Islands (1921):** Dispute between Sweden and Finland. The League investigated and awarded the islands to Finland with safeguards for the Swedish-speaking population. Both accepted.\n" +
          "- **Upper Silesia (1921):** Industrial region disputed between Germany and Poland. A plebiscite produced an inconclusive result; the League partitioned the region peacefully, and both nations accepted.\n" +
          "- **Mosul (1924):** Dispute between Turkey and British-mandated Iraq over the oil-rich Mosul region. The League awarded it to Iraq; Turkey accepted.\n" +
          "- **Greek-Bulgarian Border Incident ('War of the Stray Dog', 1925):** Greek troops invaded Bulgaria after border skirmishes. The League ordered Greece to withdraw and pay compensation; Greece obeyed.\n\n" +
          "**2. Peacekeeping Failures in the 1920s:**\n" +
          "- **Vilna (1920):** Polish troops seized the Lithuanian capital city of Vilna. Lithuania appealed to the League; Poland ignored League instructions. Britain and France refused to act because France wanted Poland as an ally against Germany.\n" +
          "- **Corfu Crisis (1923):** Italian general Tellini was murdered on Greek soil. Italian fascist dictator Benito Mussolini bombarded and occupied the Greek island of Corfu. Greece appealed to the League, which initially condemned Italy. Mussolini bypassed the League, took the dispute to the Conference of Ambassadors, and forced Greece to pay massive compensation. Showed that the League could be bullied by powerful permanent Council members.\n\n" +
          "**3. Remarkable Success of the Humanitarian Agencies:**\n" +
          "- **Refugees Committee (led by Fridtjof Nansen):** Repatriated over 400,000 prisoners of war and created the 'Nansen Passport' for stateless refugees.\n" +
          "- **Health Organisation:** Spearheaded global vaccination campaigns against malaria, leprosy, and yellow fever; established international epidemic warning centres.\n" +
          "- **International Labour Organisation (ILO):** Banned poisonous white lead in paint; limited child labour hours; campaigned successfully for an 8-hour working day and 48-hour week.\n" +
          "- **Slavery Commission:** Freed over 200,000 slaves in British Sierra Leone and raided slave-trading networks in Burma.",
        examinerTips: [
          "In 8-mark or 10-mark questions evaluating the League in the 1920s, use the humanitarian agencies as strong counter-evidence of success.",
          "Corfu (1923) is the primary case study showing the League's weakness against major European powers in the 1920s.",
        ],
        commonMistakes: [
          "Claiming the League was a complete failure in the 1920s. It was reasonably successful with minor disputes and very successful in humanitarian work.",
        ],
        recap: [
          "Describe how the League resolved the Upper Silesia dispute in 1921.",
          "Identify two successes of the League's humanitarian agencies.",
        ],
      },
      {
        title: "The Fatal Blows: Manchurian & Abyssinian Crises",
        body:
          "The Great Depression of 1929 destroyed international goodwill and triggered militarist aggression that the League proved completely powerless to stop:\n\n" +
          "**1. The Manchurian Crisis (1931–1933):**\n" +
          "- **Context:** Japan was an island nation dependent on imports. The Great Depression collapsed its silk exports; military leaders sought an empire in mainland China.\n" +
          "- **The Event:** In September 1931, the Japanese army staged the **Mukden Railway incident** (accusing Chinese bandits of bombing a Japanese-owned railway) and invaded Chinese Manchuria, establishing the puppet state of **Manchukuo**.\n" +
          "- **League Action:** China appealed to the League. The League appointed Lord Lytton to lead a commission of inquiry. It took a full year for the **Lytton Report** (Sept 1932) to be published, which condemned Japan as the aggressor and ruled Manchuria should be returned to China.\n" +
          "- **Outcome:** In Feb 1933, the League Assembly voted 42–1 to accept the report. Japan's delegate walked out of the League. Japan resigned in March 1933. The League imposed no economic sanctions (Britain and France feared losing trade and entering a Pacific war with Japan; USA would not join sanctions). Showed that an aggressor could seize territory with total impunity.\n\n" +
          "**2. The Abyssinian Crisis (1935–1936):**\n" +
          "- **Context:** Mussolini wanted an Italian African empire, revenge for the humiliating Italian defeat at Adowa (1896), and diversion from domestic economic depression.\n" +
          "- **The Event:** In **October 1935**, Italy invaded independent Abyssinia (modern Ethiopia) with 250,000 troops using modern tanks, bombers, and poison mustard gas against poorly armed tribesmen.\n" +
          "- **League Action:** Abyssinian Emperor Haile Selassie made a desperate personal appeal to the League in Geneva. The League condemned Italy and imposed economic sanctions.\n" +
          "- **Why Sanctions Failed:**\n" +
          "  - **Crucial commodities excluded:** Oil, coal, and steel were NOT banned because Britain and France feared it would bankrupt British coalminers or provoke Mussolini into declaring war.\n" +
          "  - **Suez Canal kept open:** Britain refused to close the British-controlled Suez Canal to Italian military transports, allowing Italian warships to resupply easily.\n" +
          "  - **The Secret Hoare-Laval Pact (Dec 1935):** British Foreign Secretary Samuel Hoare and French Prime Minister Pierre Laval drafted a secret plan to hand over two-thirds of Abyssinia to Mussolini if he halted fighting. When leaked to the press, the public outcry was deafening; both politicians were forced to resign, and the League's moral credibility was completely shattered.\n" +
          "- **Consequence:** In May 1936, Italian forces captured the capital Addis Ababa. Mussolini annexed Abyssinia, left the League in 1937, and signed the Rome-Berlin Axis with Hitler. Collective security was dead.",
        examinerTips: [
          "Explain why Britain and France appeased Mussolini over Abyssinia: they wanted Italy as an ally against Hitler (the Stresa Front).",
          "Identify the three key reasons sanctions failed in Abyssinia: oil not banned, Suez Canal not closed, Hoare-Laval Pact betrayal.",
        ],
        commonMistakes: [
          "Saying the League didn't impose any sanctions against Italy. The League DID impose sanctions on weapons and finance, but excluded OIL and left the SUEZ CANAL open.",
        ],
        recap: [
          "Why did it take the League a full year to respond to Japan's invasion of Manchuria?",
          "What was the Hoare-Laval Pact, and why did it destroy the credibility of the League of Nations?",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "The Collapse of Peace & Outbreak of WWII (1933–1939)",
    section: "Option B: The 20th century: international relations since 1919",
    topic: "Key Question 3: How far was Hitler's foreign policy to blame for the outbreak of war in Europe in 1939?",
    intro:
      "Following his appointment as Chancellor in January 1933, Adolf Hitler embarked on an aggressive foreign policy designed to overturn the Treaty of Versailles and establish a German empire in Europe. This chapter analyzes Hitler's steps to war, evaluates the British policy of Appeasement, and examines the Nazi-Soviet Pact.",
    subheadings: [
      {
        title: "Hitler's Foreign Policy Aims & Early Revisionism (1933–1937)",
        body:
          "**Hitler's Core Foreign Policy Aims (as laid out in *Mein Kampf*):**\n" +
          "1. **Abolish the Treaty of Versailles:** Reverse territorial losses, rearm Germany, and eliminate the military restrictions and war guilt.\n" +
          "2. **Grossdeutschland (Greater Germany):** Unite all German-speaking peoples into a single unified Reich (including Austria, the Sudetenland in Czechoslovakia, and the Polish Corridor).\n" +
          "3. **Lebensraum (Living Space):** Conquer fertile agricultural territory in Eastern Europe and European Russia to provide food and raw materials for the German Master Race (*Herrenvolk*).\n" +
          "4. **Destroy Communism:** Defeat Soviet Bolshevism, which Hitler viewed as a Jewish-communist conspiracy.\n\n" +
          "**Chronological Steps of Aggression (1933–1937):**\n" +
          "- **Withdrawal from Disarmament Conference & League of Nations (Oct 1933):** Hitler demanded military equality with France; when refused, he stormed out of the conference and left the League.\n" +
          "- **Non-Aggression Pact with Poland (Jan 1934):** 10-year neutrality treaty that neutralized Poland and divided the anti-German coalition.\n" +
          "- **Attempted Austrian Putsch (July 1934):** Austrian Nazis assassinated Chancellor Dollfuss, but Mussolini mobilised Italian troops on the Brenner Pass to block German annexation; Hitler backed down.\n" +
          "- **Saar Plebiscite (Jan 1935):** Over 90% of Saarland voters chose to return to Germany under League supervision.\n" +
          "- **Rearmament & Conscription (March 1935):** Hitler publicly unveiled the Luftwaffe and reintroduced compulsory military conscription, expanding the army to 550,000 men. Britain, France, and Italy formed the short-lived **Stresa Front** in response.\n" +
          "- **Anglo-German Naval Agreement (June 1935):** Britain undermined the Stresa Front by signing a bilateral naval treaty allowing Germany a navy 35% the size of Britain's and equal submarine tonnage. Legalized German rearmament without consulting France.\n" +
          "- **Remilitarisation of the Rhineland (March 1936):**\n" +
          "  - Taking advantage of Allied distraction over Abyssinia, Hitler marched 22,000 troops into the demilitarised Rhineland.\n" +
          "  - German generals carried secret orders to retreat immediately if French troops mobilised.\n" +
          "  - France was in political paralysis and Britain believed Germany was only 'walking into its own back garden'. Neither power intervened. Massively boosted Hitler's prestige at home.\n" +
          "- **Spanish Civil War & Anti-Comintern Pact (1936):** Germany tested the Luftwaffe's Condor Legion in Spain (e.g. bombing of Guernica); signed the Rome-Berlin Axis with Italy and the Anti-Comintern Pact with Japan.",
        examinerTips: [
          "Identify the Anglo-German Naval Agreement (1935) as proof that Britain was already appeasing Hitler and breaching the Treaty of Versailles.",
          "Emphasize the Rhineland gamble: had France mobilised even a single division, Hitler would have suffered a catastrophic military humiliation and likely been ousted by the German military.",
        ],
        commonMistakes: [
          "Thinking Hitler conquered the Saarland by military force. The Saar returned to Germany via a legal, democratic plebiscite under League supervision.",
        ],
        recap: [
          "State three fundamental foreign policy aims of Adolf Hitler.",
          "Why was the remilitarisation of the Rhineland in 1936 such a critical gamble for Hitler?",
        ],
      },
      {
        title: "Anschluss, The Sudetenland & The Policy of Appeasement",
        body:
          "**Anschluss with Austria (March 1938):**\n" +
          "- With Mussolini now an ally in the Rome-Berlin Axis, Hitler targeted his birthplace, Austria.\n" +
          "- Austrian Chancellor Schuschnigg tried to resist Nazi intimidation by calling a national plebiscite on independence.\n" +
          "- Hitler threatened immediate military invasion; Schuschnigg resigned and was replaced by Austrian Nazi Arthur Seyss-Inquart, who invited German troops into Austria on 12 March 1938.\n" +
          "- A rigged plebiscite reported 99.75% approval for union with Germany. Britain and France protested verbally but took zero military action.\n\n" +
          "**The Sudetenland Crisis & Munich Agreement (Sept 1938):**\n" +
          "- **Context:** The Sudetenland, the mountainous western border of Czechoslovakia, contained 3 million German speakers, vital heavy industry (Skoda works), and extensive border fortifications.\n" +
          "- **The Agitation:** Nazi agent Konrad Henlein stirred up riots demanding self-determination. Hitler threatened invasion by 1 October 1938.\n" +
          "- **The Munich Conference (29 Sept 1938):**\n" +
          "  - Attended by **Neville Chamberlain (Britain), Édouard Daladier (France), Adolf Hitler (Germany), and Benito Mussolini (Italy)**.\n" +
          "  - **Neither Czechoslovakia nor the USSR was invited!**\n" +
          "  - The powers agreed that Germany would annex the entire Sudetenland between 1–10 October without war.\n" +
          "  - Chamberlain returned to London waving his famous piece of paper ('peace for our time').\n\n" +
          "**The Debate Over Appeasement:**\n" +
          "- **Arguments FOR Appeasement:**\n" +
          "  - *Britain was militarily unready:* The RAF needed time to build modern Spitfire fighters and radar networks (Chain Home).\n" +
          "  - *Fear of Aerial Bombardment:* Memory of WWI slaughter and belief that bomber fleets would destroy major cities.\n" +
          "  - *Versailles Guilt:* Many British politicians believed Germany had genuine grievances that deserved peaceful revision.\n" +
          "  - *Empire and Public Opinion:* Neither the British public nor the Dominions (Canada, Australia) supported war over distant European borders.\n" +
          "  - *Buffer against Communism:* A strong Germany was viewed as a bulwark against Stalin's Soviet Union.\n" +
          "- **Arguments AGAINST Appeasement:**\n" +
          "  - *Encouraged Aggression:* Each concession convinced Hitler that the Western democracies were weak and cowardly.\n" +
          "  - *Lost Strategic Allies:* Abandoned Czechoslovakia's 34 modern divisions and impregnable mountain fortifications.\n" +
          "  - *Alienated the USSR:* Convinced Stalin that Britain and France were deliberately pushing Hitler eastward to attack Russia.",
        examinerTips: [
          "In 10-mark evaluate questions on Appeasement, present a balanced case: evaluate the strategic military necessity of buying time (Spitfires/radar) alongside the strategic folly of abandoning Czech defences.",
          "Note who was NOT present at Munich: Czechoslovakia (the country being carved up) and the USSR.",
        ],
        commonMistakes: [
          "Portraying Chamberlain as a coward. Chamberlain had broad British public support in 1938, and appeasement gave Britain crucial months to build Spitfires and radar defences.",
        ],
        recap: [
          "Describe how Hitler achieved Anschluss with Austria in March 1938.",
          "State two arguments in defence of Neville Chamberlain's policy of Appeasement.",
        ],
      },
      {
        title: "The Collapse of Appeasement & The Nazi-Soviet Pact (1939)",
        body:
          "**The Invasions that Triggered World War II:**\n\n" +
          "**1. The Destruction of Czechoslovakia (15 March 1939):**\n" +
          "- German troops marched into the rest of Czechoslovakia, occupying Prague and creating the Protectorate of Bohemia and Moravia.\n" +
          "- **Significance:** This was the **death of Appeasement**. For the first time, Hitler was not uniting German speakers or correcting Versailles; he was brazenly conquering a non-German Slavic nation. Chamberlain realized Hitler's promises were worthless.\n" +
          "- On 31 March 1939, Britain and France issued a **guarantee to Poland**, promising military assistance if attacked.\n\n" +
          "**2. The Nazi-Soviet Non-Aggression Pact (Molotov-Ribbentrop Pact, 23 August 1939):**\n" +
          "- **The Shock:** Fascist Nazi Germany and Communist Soviet Union were sworn ideological enemies, yet they signed a 10-year non-aggression treaty.\n" +
          "- **Why Hitler Signed:**\n" +
          "  - Avoided a two-front war when attacking Poland.\n" +
          "  - Secured Soviet raw materials and oil for the German war machine.\n" +
          "- **Why Stalin Signed:**\n" +
          "  - British and French delegations to Moscow moved with insulting slowness and had no power to make military commitments.\n" +
          "  - Convinced the West was encouraging Germany to attack the USSR.\n" +
          "  - Bought crucial time (almost two years) to rearm and industrialize the Red Army.\n" +
          "- **Secret Protocol:** The pact contained a secret clause agreeing to carve up Poland between Germany and the USSR, and giving the Baltic states (Estonia, Latvia, Lithuania) and Finland to the Soviet sphere of influence.\n\n" +
          "**3. The Outbreak of War (1 September 1939):**\n" +
          "- Believing Britain and France would back down again over Poland, Hitler launched the Blitzkrieg invasion of Poland on **1 September 1939**.\n" +
          "- Britain and France issued an ultimatum demanding immediate German withdrawal.\n" +
          "- When the ultimatum expired at 11:00 am on **3 September 1939**, Britain and France declared war on Germany. World War II in Europe had begun.",
        examinerTips: [
          "Identify March 1939 (invasion of the rest of Czechoslovakia) as the moment Appeasement ended, NOT September 1939.",
          "Explain the mutual cynicism of the Nazi-Soviet Pact: neither Hitler nor Stalin expected peace to last; both were using each other to buy time and territory.",
        ],
        commonMistakes: [
          "Assuming Britain and France declared war to save Czechoslovakia. They protested over Czechoslovakia; they went to war over Poland.",
        ],
        recap: [
          "Why was Hitler's occupation of Prague in March 1939 the turning point that ended Appeasement?",
          "Explain two reasons why Joseph Stalin signed the Nazi-Soviet Pact in August 1939.",
        ],
      },
    ],
  },
];
