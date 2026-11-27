import type { Chapter } from "./types";

/**
 * Cambridge IGCSE History (0470) 2027–2028 Syllabus Notes
 * Part 2: Chapters 4–6 (Core Content Option B: The Cold War & Soviet Control 1945–1989)
 */
export const HISTORY_PART2: Chapter[] = [
  {
    number: 4,
    title: "The Origins of the Cold War (1945–1949)",
    section: "Option B: The 20th century: international relations since 1919",
    topic: "Key Question 4: Who was to blame for the Cold War?",
    intro:
      "As World War II ended, the wartime Grand Alliance between the USA, Britain, and the Soviet Union dissolved into profound ideological hostility, mutual suspicion, and global rivalry. This chapter examines the wartime summits at Yalta and Potsdam, Soviet expansion in Eastern Europe, the Truman Doctrine, the Marshall Plan, and the first major crisis: the Berlin Blockade.",
    subheadings: [
      {
        title: "Ideological Clash & Wartime Summits: Yalta and Potsdam (1945)",
        body:
          "**The Fundamental Ideological Divide:**\n" +
          "- **Western Capitalism & Democracy (USA & Britain):** Multi-party parliamentary democracy, free speech, private enterprise, and individual liberty.\n" +
          "- **Soviet Communism (USSR):** One-party Marxist-Leninist dictatorship, state ownership of all industry and land, censorship, and world proletarian revolution.\n" +
          "- These systems were inherently incompatible; only their common mortal enemy (Nazi Germany) had kept them united between 1941 and 1945.\n\n" +
          "**The Yalta Conference (February 1945, Crimea):**\n" +
          "- **Attended by:** Franklin D. Roosevelt (USA), Winston Churchill (Britain), Joseph Stalin (USSR).\n" +
          "- **Agreements:**\n" +
          "  - Germany to be divided into **four occupation zones** (US, British, French, and Soviet). Berlin, deep inside the Soviet zone, also divided into four zones.\n" +
          "  - Nazi war criminals to be tried before an international tribunal (Nuremberg).\n" +
          "  - **Declaration on Liberated Europe:** Free democratic elections promised to all liberated European nations.\n" +
          "  - **United Nations:** Agreement to establish the UN, with permanent Security Council vetoes for the Great Powers.\n" +
          "  - Stalin promised to enter the war against Japan within three months of Germany's defeat.\n" +
          "- **Tensions:** The Polish border: Stalin insisted on moving the Polish border west into Germany (the Curzon and Oder-Neisse lines) and establishing a pro-Soviet Polish government.\n\n" +
          "**The Potsdam Conference (July–August 1945, near Berlin):**\n" +
          "- **Changed Leadership & Rising Mistrust:**\n" +
          "  - Roosevelt had died in April; **Harry S. Truman** became US President. Truman was fiercely anti-communist and determined to adopt a 'get tough' policy against Stalin.\n" +
          "  - Churchill was replaced midway through the conference by Labour Prime Minister **Clement Attlee** after losing the British general election.\n" +
          "- **Sources of Discord:**\n" +
          "  - **The Atomic Bomb:** On the eve of the summit, Truman successfully tested the first atomic bomb in the New Mexico desert (Manhattan Project) and informed Stalin casually; Stalin was deeply alarmed by US atomic monopoly.\n" +
          "  - **Soviet Occupation:** The Red Army had occupied Eastern Europe and installed puppet communist regimes, directly violating the Yalta pledge of free elections.\n" +
          "  - **Reparations Dispute:** Stalin demanded massive German reparations to rebuild the USSR; Truman resisted, fearing a repeat of 1919.",
        examinerTips: [
          "Contrast the mood of cautious optimism at Yalta (Feb 1945) with the open suspicion and hostility at Potsdam (July 1945).",
          "Identify the three major changes between Yalta and Potsdam: Roosevelt's death/Truman's arrival, the successful Trinity atomic bomb test, and Soviet military occupation of Eastern Europe.",
        ],
        commonMistakes: [
          "Assuming Churchill attended the entire Potsdam Conference. Churchill was defeated in the British election and replaced by Attlee halfway through.",
        ],
        recap: [
          "Identify two key agreements reached at the Yalta Conference in February 1945.",
          "Why did relations between the USA and the USSR deteriorate between Yalta and Potsdam?",
        ],
      },
      {
        title: "Soviet Expansion in Eastern Europe & The Iron Curtain",
        body:
          "**Soviet Takeover of Eastern Europe (1945–1948):**\n" +
          "Stalin systematically transformed the nations liberated by the Red Army into Soviet satellite states using **'Salami Tactics'** (slicing away democratic opposition bit by bit):\n" +
          "- **Poland:** Non-communist coalition leaders were arrested, exiled, or murdered; rigged elections in 1947 placed Polish communists in total control.\n" +
          "- **Romania & Bulgaria:** Monarchies abolished, non-communist politicians executed, and single-party communist rule enforced.\n" +
          "- **Hungary:** Communist leader Mátyás Rákosi used the secret police (AVH) to arrest opposition leaders and take over by 1947.\n" +
          "- **Czechoslovakia (February 1948):** The last remaining democracy in Eastern Europe. When non-communist ministers resigned in protest, communists seized power, and Foreign Minister Jan Masaryk was found dead under suspicious circumstances ('defenestration of Prague').\n\n" +
          "**Two Conflicting Interpretations:**\n" +
          "- **The Western Perspective:** Stalin was a ruthless expansionist dictator hell-bent on spreading totalitarian world communism across Western Europe.\n" +
          "- **The Soviet Perspective:** The USSR had lost **27 million citizens** and had its western lands devastated by Nazi invasion. Stalin was creating a defensive **'buffer zone'** of friendly states to safeguard Russia against future Western aggression.\n\n" +
          "**Churchill's 'Iron Curtain' Speech (Fulton, Missouri, March 1946):**\n" +
          "- Invited by President Truman, Winston Churchill declared:\n" +
          "  *\"From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended across the Continent. Behind that line lie all the capitals of the ancient states of Central and Eastern Europe... subject not only to Soviet influence, but to a very high and increasing measure of control from Moscow.\"*\n" +
          "- Stalin reacted furiously, comparing Churchill to Adolf Hitler and claiming the speech was a call to war.",
        examinerTips: [
          "Always balance the Western view of Soviet expansion (aggressive imperialism) with the Soviet view (legitimate defensive buffer zone after 27 million war deaths).",
          "Memorize the key phrase from Churchill's Fulton speech: 'From Stettin in the Baltic to Trieste in the Adriatic, an iron curtain has descended'.",
        ],
        commonMistakes: [
          "Claiming Churchill was British Prime Minister when he gave the Iron Curtain speech. He was Leader of the Opposition in March 1946.",
        ],
        recap: [
          "Explain what Stalin meant by creating a 'buffer zone' in Eastern Europe.",
          "What was the historical significance of Winston Churchill's 1946 'Iron Curtain' speech?",
        ],
      },
      {
        title: "The Truman Doctrine, Marshall Plan & The Berlin Blockade",
        body:
          "**1. The Truman Doctrine (March 1947):**\n" +
          "- **Trigger:** Britain announced it could no longer afford to provide military aid to royalist forces fighting communist guerrillas in the Greek Civil War.\n" +
          "- **The Policy:** Truman asked Congress for $\\$400$ million in aid for Greece and Turkey, announcing a radical departure from traditional American isolationism:\n" +
          "  *\"It must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures.\"*\n" +
          "- This established the global policy of **Containment**: resisting the expansion of communism anywhere in the world.\n\n" +
          "**2. The Marshall Plan (European Recovery Program, June 1947):**\n" +
          "- US Secretary of State George Marshall believed poverty, hunger, and devastation in post-war Europe provided fertile breeding grounds for communist subversion.\n" +
          "- The US poured over **$\\$13$ billion** in economic grants, machinery, and food into Western Europe between 1948 and 1952.\n" +
          "- **Soviet Response:** Stalin denounced the Marshall Plan as 'dollar imperialism'—a US plot to dominate European economies. He banned all Eastern bloc satellites from accepting aid, and established **Cominform** (1947, to coordinate international communist parties) and **Comecon** (1949, for socialist economic integration).\n\n" +
          "**3. The Berlin Blockade & Airlift (June 1948 – May 1949):**\n" +
          "- **The Causes:**\n" +
          "  - Western allies unified their occupation zones into **Bizonia** (US + UK) and then **Trizonia** (adding France) to rebuild Germany.\n" +
          "  - In June 1948, the West introduced a new stable currency, the **Deutschmark**, into West Germany and West Berlin without Soviet approval.\n" +
          "- **The Blockade (24 June 1948):**\n" +
          "  - Stalin retaliated by cutting off all road, rail, and canal routes connecting West Berlin to the Western zones of Germany, aiming to starve West Berlin's 2 million citizens into submission and force the Western powers out.\n" +
          "- **The Western Response (Operation Plainfare / The Berlin Airlift):**\n" +
          "  - Refusing to abandon Berlin or provoke WWIII by forcing a military tank convoy through, Truman ordered a massive humanitarian airlift.\n" +
          "  - For 11 months, British and American transport planes flew 24 hours a day, landing every 90 seconds, delivering over **2.3 million tonnes** of food, coal, medicines, and supplies.\n" +
          "- **The Outcome:**\n" +
          "  - Realizing the West would not budge and facing an Allied counter-blockade on industrial shipments to the Soviet zone, Stalin lifted the blockade on **12 May 1949**.\n\n" +
          "**Consequences of the Berlin Crisis:**\n" +
          "1. **Permanent Division of Germany:** In May 1949, the Western zones became the **Federal Republic of Germany (FRG / West Germany)**; in October 1949, the Soviet zone became the **German Democratic Republic (GDR / East Germany)**.\n" +
          "2. **Military Alliances Formed:** In April 1949, the Western democracies established **NATO (North Atlantic Treaty Organisation)**, a military alliance based on collective mutual defense. In 1955, following West Germany's entry into NATO, the USSR formed the **Warsaw Pact**.",
        examinerTips: [
          "Connect the Truman Doctrine (military/political containment) directly with the Marshall Plan (economic containment).",
          "Identify the Berlin Blockade as the climax of early Cold War tensions that permanently divided Germany into two separate nations and birthed NATO.",
        ],
        commonMistakes: [
          "Confusing the Berlin Blockade (1948–49) with the construction of the Berlin Wall (1961). The blockade involved closed road/rail links; the wall was a physical barrier built 12 years later.",
        ],
        recap: [
          "State the core purpose of the Truman Doctrine (1947).",
          "Explain how the Western allies responded to the Soviet blockade of Berlin in 1948–1949.",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "American Containment: Korea, Cuba & Vietnam",
    section: "Option B: The 20th century: international relations since 1919",
    topic: "Key Question 5: How effectively did the USA contain the spread of Communism?",
    intro:
      "During the Cold War, the superpower conflict played out through surrogate proxy wars and regional flashpoints across Asia and the Caribbean. This chapter evaluates American efforts to contain communism through three critical case studies: Korea, Cuba, and Vietnam.",
    subheadings: [
      {
        title: "The Korean War (1950–1953): UN Intervention & Stalemate",
        body:
          "**Background to the War:**\n" +
          "- At the end of WWII, Korea was liberated from Japanese occupation and partitioned along the **38th parallel** into:\n" +
          "  - **North Korea (DPRK):** Communist dictatorship led by **Kim Il-sung**, supported by the USSR.\n" +
          "  - **South Korea (ROK):** Anti-communist authoritarian republic led by **Syngman Rhee**, backed by the USA.\n" +
          "- Both leaders claimed sovereignty over the entire peninsula.\n\n" +
          "**The Outbreak & Course of the War:**\n" +
          "1. **North Korean Invasion (25 June 1950):** 90,000 North Korean troops equipped with Soviet T-34 tanks invaded the South, swiftly capturing Seoul and pushing South Korean forces to the **Pusan Perimeter** in the extreme south.\n" +
          "2. **UN Intervention:** Truman immediately brought the crisis to the UN Security Council. Because the Soviet delegate was **boycotting the UN** in protest over Taiwan holding the Chinese seat, the USSR could not use its veto. The UN passed Resolution 83 calling on member states to assist South Korea; troops from 16 nations (mostly American, led by **General Douglas MacArthur**) were dispatched.\n" +
          "3. **MacArthur's Inchon Landings (Sept 1950):** A daring amphibious landing behind North Korean lines at Inchon recaptured Seoul and routed the North Korean army.\n" +
          "4. **Crossing the 38th Parallel (Oct 1950):** Shifting policy from 'containment' to 'rollback', UN forces crossed into North Korea and advanced toward the **Yalu River** on the Chinese border.\n" +
          "5. **Chinese Intervention (Oct–Nov 1950):** Mao Zedong sent 300,000 Chinese 'People's Volunteers' across the frozen Yalu River. Using human-wave attacks in freezing winter conditions, Chinese troops drove UN forces back in headlong retreat south of the 38th parallel.\n" +
          "6. **MacArthur's Sacking (April 1951):** MacArthur publicly advocated using nuclear weapons against Chinese cities and invading mainland China. Truman, fearing a catastrophic WWIII with the USSR, dismissed MacArthur for insubordination.\n" +
          "7. **Stalemate & Armistice (1951–1953):** Two years of bloody trench warfare along the 38th parallel ended with the **Panmunjom Armistice (July 1953)**. A 4-km-wide Demilitarised Zone (DMZ) was established; Korea remained divided.\n\n" +
          "**Evaluating US Containment in Korea:**\n" +
          "- *Success:* Prevented communist takeover of South Korea; demonstrated that the UN could act decisively against aggression (unlike the League of Nations).\n" +
          "- *Failure:* High human cost (over 3 million Koreans dead, 36,000 US soldiers); failed to liberate North Korea; pushed China and the USSR into a closer alliance.",
        examinerTips: [
          "Explain why the UN was able to authorize military action: the Soviet delegate was boycotting the Security Council over the representation of communist China.",
          "Distinguish clearly between 'containment' (defending South Korea) and 'rollback' (invading North Korea to destroy communism), noting how rollback provoked Chinese intervention.",
        ],
        commonMistakes: [
          "Claiming MacArthur was killed in the war. MacArthur was sacked / dismissed by President Truman for insubordination.",
        ],
        recap: [
          "Why was the UN Security Council able to pass a resolution authorizing military force in Korea in June 1950?",
          "Explain why General Douglas MacArthur was dismissed by President Truman in April 1951.",
        ],
      },
      {
        title: "The Cuban Missile Crisis (1962): Thirteen Days on the Brink",
        body:
          "**Origins of the Crisis (1959–1962):**\n" +
          "- **Cuban Revolution (1959):** **Fidel Castro** overthrew the corrupt, pro-American dictator Fulgencio Batista. Castro nationalised American sugar plantations, banks, and oil refineries.\n" +
          "- **US Retaliation & Soviet Alliance:** The US broke diplomatic ties and imposed a trade embargo. Castro turned to Soviet Premier **Nikita Khrushchev**, who agreed to buy Cuban sugar and provide economic and military aid.\n" +
          "- **The Bay of Pigs Invasion (April 1961):** The CIA trained 1,400 anti-Castro Cuban exiles to invade Cuba and spark a counter-revolution. The invasion was a disaster: Kennedy cancelled US air support; the exiles were crushed within 72 hours by Castro's 20,000 troops. Massively humiliated Kennedy and convinced Castro that a full-scale US invasion was imminent.\n\n" +
          "**The Missile Crisis (October 1962):**\n" +
          "- **Discovery (14 Oct 1962):** A US U-2 spy plane photographed Soviet medium-range nuclear ballistic missile launch pads under construction in Cuba (just 90 miles from Florida).\n" +
          "- **Why Khrushchev Placed Missiles in Cuba:**\n" +
          "  - To defend Cuba from another US invasion.\n" +
          "  - To bridge the 'missile gap' (the US had 10 times more ICBMs and had stationed nuclear Jupiter missiles in Turkey, on Russia's southern border).\n" +
          "  - To test young President Kennedy's resolve and gain leverage over West Berlin.\n" +
          "- **Kennedy's Response (ExComm Options):**\n" +
          "  - Military hawks demanded immediate air strikes and invasion.\n" +
          "  - Kennedy chose a **Naval Quarantine (Blockade)**: surrounding Cuba with US warships to turn back Soviet cargo vessels carrying missiles, giving Khrushchev time to reconsider without firing the first shot.\n" +
          "- **The Thirteen Days of Crisis (16–28 October 1962):**\n" +
          "  - Soviet ships approached the quarantine line; at the last minute, ships carrying missile parts halted or turned back.\n" +
          "  - On 26 October, Khrushchev sent a conciliatory letter offering to dismantle the missiles if the US promised never to invade Cuba.\n" +
          "  - On 27 October (Black Saturday), a second, harsher letter arrived demanding the removal of US Jupiter missiles from Turkey. On the same day, an American U-2 plane was shot down over Cuba.\n" +
          "  - **The Resolution:** Kennedy publicly accepted the first letter (promising not to invade Cuba) and sent his brother Robert Kennedy to privately promise Soviet Ambassador Dobrynin that US Jupiter missiles would be removed from Turkey within months.\n\n" +
          "**Consequences of the Crisis:**\n" +
          "- Khrushchev claimed victory for saving Cuba, but Soviet military hardliners viewed the withdrawal as a humiliating surrender, contributing to his ouster in 1964.\n" +
          "- Kennedy's reputation soared as a calm, decisive leader.\n" +
          "- Realizing how close they had come to thermonuclear annihilation, the superpowers established the direct **White House–Kremlin telephone hotline** (1963) and signed the **Partial Nuclear Test Ban Treaty** (1963).",
        examinerTips: [
          "Memorize the sequence of the secret deal: public pledge not to invade Cuba, secret agreement to remove US Jupiter missiles from Turkey.",
          "Identify the three reasons Khrushchev placed missiles in Cuba: protect Cuba, equalize nuclear missile balance (countering US missiles in Turkey), and gain leverage over Berlin.",
        ],
        commonMistakes: [
          "Thinking Kennedy used the word 'blockade'. Kennedy deliberately called it a 'quarantine' because a blockade is legally an act of war under international law.",
        ],
        recap: [
          "State two reasons why Nikita Khrushchev placed nuclear missiles in Cuba in 1962.",
          "How was the Cuban Missile Crisis resolved on 28 October 1962?",
        ],
      },
      {
        title: "The Vietnam War (1954–1975): Escalation & Failure",
        body:
          "**Origins & American Escalation:**\n" +
          "- Following France's crushing defeat at **Dien Bien Phu (1954)**, Vietnam was divided at the **17th parallel** into communist North Vietnam (led by **Ho Chi Minh**) and anti-communist South Vietnam (led by **Ngo Dinh Diem**).\n" +
          "- **The Domino Theory:** President Eisenhower warned that if South Vietnam fell to communism, neighbouring states (Laos, Cambodia, Thailand) would fall like a row of dominoes.\n" +
          "- **Gulf of Tonkin Resolution (August 1964):** After alleged North Vietnamese torpedo boat attacks on the USS *Maddox*, Congress gave President Lyndon B. Johnson authorization to 'take all necessary measures' without a formal declaration of war.\n" +
          "- By 1968, over **500,000 US combat troops** were fighting in Vietnam alongside massive aerial bombing campaigns (**Operation Rolling Thunder**).\n\n" +
          "**Military Tactics Compared:**\n" +
          "- **Viet Cong Guerrilla Warfare:**\n" +
          "  - Disguised as ordinary peasant farmers; lived in extensive underground tunnel complexes (e.g. Cu Chi).\n" +
          "  - Used booby traps (punji bamboo stakes, tripwires) that inflicted massive psychological terror.\n" +
          "  - Fought close to US troops ('hanging onto the belts') to prevent US aircraft from dropping bombs.\n" +
          "  - Resupplied via the **Ho Chi Minh Trail**, a jungle supply corridor running through neutral Laos and Cambodia.\n" +
          "- **US Conventional Military Tactics:**\n" +
          "  - **Search-and-Destroy Missions:** Helicopters dropped troops into villages to find and kill Viet Cong, burning villages ('Zippo raids') and alienating local civilians.\n" +
          "  - **Chemical Warfare:** Dropped millions of gallons of **Agent Orange** (toxic defoliant to destroy jungle canopy) and **Napalm** (jellied petroleum that burned through skin and bone).\n\n" +
          "**The Turning Points:**\n" +
          "- **The Tet Offensive (January 1968):** During the lunar new year truce, 84,000 Viet Cong and North Vietnamese troops launched simultaneous surprise assaults on over 100 South Vietnamese towns and cities, including the US Embassy in Saigon. Militarily, the Viet Cong suffered catastrophic losses; psychologically, it shattered US public belief that the war was being won.\n" +
          "- **The Anti-War Movement:** Vietnam was the first televised 'living room war'. Graphic footage of atrocities (e.g. **My Lai Massacre**, March 1968, where US soldiers murdered over 400 unarmed villagers) sparked massive student protests across America (e.g. Kent State University shootings, 1970).\n" +
          "- **Vietnamisation & Withdrawal (1969–1973):** President Richard Nixon withdrew US ground troops while intensifying bombing, handing over fighting to the South Vietnamese army (ARVN). The **Paris Peace Accords** were signed in January 1973; the last US troops left.\n" +
          "- **The Fall of Saigon (April 1975):** North Vietnamese forces launched a final offensive, capturing Saigon and reuniting Vietnam under communist rule. The Domino Theory materialized in part as neighbouring Laos and Cambodia also fell to communist regimes (Khmer Rouge).\n\n" +
          "**Why Did the USA Fail to Contain Communism in Vietnam?**\n" +
          "1. Ineffective military tactics against an elusive guerrilla enemy with superior morale and local knowledge.\n" +
          "2. Unpopularity and corruption of the South Vietnamese government.\n" +
          "3. Collapse of public and political support on the American home front.",
        examinerTips: [
          "Explain why the Tet Offensive was a military defeat for the Viet Cong but a massive political/propaganda victory that broke US will to fight.",
          "Structure evaluation of US failure into three categories: military factors (guerrilla tactics), political factors (corrupt Diem regime), and domestic factors (media, anti-war protests).",
        ],
        commonMistakes: [
          "Assuming the US won or lost on the battlefield. The US never lost a major set-piece battle, but lost the war politically and psychologically.",
        ],
        recap: [
          "Define President Eisenhower's 'Domino Theory'.",
          "Explain two reasons why the Viet Cong's guerrilla tactics proved so effective against the US military.",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Soviet Control Over Eastern Europe (1948–1989)",
    section: "Option B: The 20th century: international relations since 1919",
    topic: "Key Question 6: How secure was the USSR's control over Eastern Europe, 1948–c.1989?",
    intro:
      "For four decades, the Soviet Union maintained an iron grip over its Eastern European satellites through political purges, secret police terror, economic integration, and the Red Army. This chapter explores resistance to Soviet hegemony—from the Hungarian Uprising and the Berlin Wall to the Prague Spring, Solidarity, and the collapse of the Soviet empire in 1989.",
    subheadings: [
      {
        title: "The Hungarian Uprising (1956) & The Berlin Wall (1961)",
        body:
          "**The Hungarian Uprising (October–November 1956):**\n" +
          "- **Causes:**\n" +
          "  - Hatred of hardline Stalinist dictator Mátyás Rákosi and the dreaded secret police (AVH).\n" +
          "  - Economic misery: grain and industrial goods exported to the USSR while Hungarians suffered food shortages.\n" +
          "  - **De-Stalinisation:** Nikita Khrushchev's 'Secret Speech' in Feb 1956 denouncing Stalin's crimes encouraged reformers across the Eastern bloc.\n" +
          "- **The Uprising:** In October 1956, student demonstrations in Budapest escalated into armed revolution; a giant statue of Stalin was pulled down.\n" +
          "- **Imre Nagy's Reforms:** Moderate communist **Imre Nagy** was appointed Prime Minister. Nagy announced revolutionary reforms: multi-party democracy, freedom of speech, release of political prisoners, and the withdrawal of Hungary from the **Warsaw Pact**.\n" +
          "- **The Soviet Response:** Renouncing the Warsaw Pact crossed a red line for Moscow. On **4 November 1956**, 200,000 Soviet troops and 4,000 tanks rolled into Budapest. Furious street fighting erupted; over 20,000 Hungarians were killed, and 200,000 fled as refugees to the West. Nagy was arrested and later executed; hardliner **János Kádár** was installed.\n" +
          "- **Western Inaction:** Britain and France were preoccupied with invading Egypt during the **Suez Crisis**; the USA would not risk nuclear war to intervene behind the Iron Curtain.\n\n" +
          "**The Berlin Wall Crisis (August 1961):**\n" +
          "- **The Brain Drain:** Between 1949 and 1961, over **2.7 million East Germans** (predominantly young, highly educated professionals, engineers, and doctors) fled from communist East Germany into capitalist West Berlin. East Germany was bleeding talent and facing economic collapse.\n" +
          "- **Khrushchev's Ultimatum:** Khrushchev demanded that the Western powers withdraw from West Berlin. At the Vienna Summit (June 1961), new President Kennedy stood firm.\n" +
          "- **Construction of the Wall (13 August 1961):**\n" +
          "  - In the dead of night, East German troops laid barbed wire barricades separating East and West Berlin, rapidly reinforced with a 3.6-metre concrete wall, armed guard towers, and a 'death strip' with guard dogs and minefields.\n" +
          "  - Families were torn apart overnight. Border guards were ordered to shoot anyone attempting to escape ('Shoot-to-kill' order).\n" +
          "- **Consequences:**\n" +
          "  - Stopped the refugee flow, stabilizing East Germany's economy.\n" +
          "  - Immense propaganda disaster for the Soviet Union: showed that communism had to build a prison wall to keep its own citizens from escaping.\n" +
          "  - President Kennedy visited West Berlin in June 1963, declaring: *'Ich bin ein Berliner'* (I am a Berliner) to reassure West Germans of American protection.",
        examinerTips: [
          "Explain why Khrushchev tolerated Nagy's domestic reforms initially, but sent tanks the moment Nagy announced Hungary would leave the Warsaw Pact.",
          "Identify the Suez Crisis as the primary reason the Western powers could not intervene to help Hungary in 1956.",
        ],
        commonMistakes: [
          "Stating that the Berlin Wall was built across the entire border of East and West Germany. The wall was built SPECIFICALLY around West Berlin to seal off the escape hatch within East Germany.",
        ],
        recap: [
          "Why did Soviet troops crush the Hungarian Uprising in November 1956?",
          "Explain why the East German government constructed the Berlin Wall in August 1961.",
        ],
      },
      {
        title: "The Prague Spring (1968) & The Brezhnev Doctrine",
        body:
          "**The Prague Spring (Czechoslovakia, 1968):**\n" +
          "- **Background:** In January 1968, unpopular Stalinist Antonín Novotný was replaced as Communist Party leader by reformer **Alexander Dubček**.\n" +
          "- **'Socialism with a Human Face':** Dubček sought to revitalize communism by granting basic civil freedoms without overthrowing the socialist system:\n" +
          "  - Abolition of state press censorship and legalization of free speech.\n" +
          "  - Freedom to form non-communist political clubs and trade unions.\n" +
          "  - Increased trade with Western nations and greater autonomy for Slovakia.\n" +
          "- **Crucial Difference from Hungary 1956:** Dubček explicitly assured Moscow that Czechoslovakia had **no intention of leaving the Warsaw Pact** or breaking alliances with the USSR.\n\n" +
          "**The Soviet Reaction:**\n" +
          "- Soviet leader **Leonid Brezhnev** and other Eastern bloc hardliners (e.g. Walter Ulbricht in East Germany) feared that free speech and democratic ideas would spread across Poland and the USSR like wildfire.\n" +
          "- On the night of **20–21 August 1968**, **500,000 Warsaw Pact troops** and tanks invaded Czechoslovakia.\n" +
          "- Dubček ordered the Czech military not to resist to avoid a massacre. Citizens engaged in passive resistance (standing in front of tanks, painting over street signs to confuse invaders, placing flowers in soldiers' rifle barrels).\n" +
          "- Dubček was arrested, flown to Moscow, forced to sign an agreement cancelling his reforms, and later demoted to a forest inspector. Hardliner **Gustáv Husák** carried out a ruthless 'normalization' purge.\n\n" +
          "**The Brezhnev Doctrine (1968):**\n" +
          "- Following the invasion, Brezhnev proclaimed that the sovereignty of individual socialist countries was limited by the interests of the international communist movement:\n" +
          "  *If any communist state attempted to introduce capitalism or move away from communism, it was the duty of all other socialist states to intervene militarily to crush the threat.*\n" +
          "- Enshrined Soviet military domination over Eastern Europe for the next two decades.",
        examinerTips: [
          "Contrast Hungary 1956 with Prague 1968: Hungary had violent armed fighting and left the Warsaw Pact; Czechoslovakia engaged in peaceful resistance and never attempted to leave the Warsaw Pact.",
          "Memorize the Brezhnev Doctrine: Soviet right to intervene militarily in any Warsaw Pact state to protect communism.",
        ],
        commonMistakes: [
          "Thinking Czechoslovakia fought back with tanks and guns. Dubček ordered non-violent passive resistance to avoid a bloodbath like Budapest in 1956.",
        ],
        recap: [
          "What did Alexander Dubček mean by 'socialism with a human face'?",
          "Explain the core principle of the Brezhnev Doctrine.",
        ],
      },
      {
        title: "Solidarity in Poland, Gorbachev & Collapse of Communism (1980–1989)",
        body:
          "**The Rise of Solidarity in Poland (1980–1981):**\n" +
          "- **Context:** By 1980, Poland's economy was crippled by foreign debt, food price spikes, and severe shortages.\n" +
          "- **Gdansk Shipyard Strike (August 1980):** Electrician **Lech Wałęsa** led a general strike at the Lenin Shipyard, issuing 21 demands including the right to form independent trade unions and the right to strike.\n" +
          "- The Polish government capitulated and signed the **Gdansk Agreement**; **Solidarność (Solidarity)** became the first free, independent trade union in the communist bloc, rapidly swelling to **10 million members** (one-third of Poland's adult population).\n" +
          "- **Moral Support:** The election of Polish Cardinal Karol Wojtyła as **Pope John Paul II** in 1978 provided immense moral and spiritual courage to Polish Catholics against the atheist communist regime.\n" +
          "- **Martial Law (December 1981):** Fearing a Soviet military invasion under the Brezhnev Doctrine, General **Wojciech Jaruzelski** staged a military coup, proclaimed martial law, suspended Solidarity, and arrested Wałęsa and thousands of activists. Solidarity went underground.\n\n" +
          "**Mikhail Gorbachev's Revolutionary Reforms (1985–1989):**\n" +
          "- In March 1985, **Mikhail Gorbachev** became General Secretary of the CPSU. Confronted with a stagnant Soviet economy, astronomical military spending ($25\\%$ of GDP), technological backwardness, and a disastrous war in Afghanistan, Gorbachev introduced radical reforms:\n" +
          "  1. **Glasnost (Openness):** Freedom of speech, press transparency, and open public debate about state corruption and historical atrocities.\n" +
          "  2. **Perestroika (Restructuring):** Introducing elements of private enterprise and market mechanisms to revitalize the collapsing economy.\n" +
          "- **The 'Sinatra Doctrine' (1989):** Gorbachev publicly announced that the USSR would **no longer use military force to prop up communist regimes** in Eastern Europe (repudiating the Brezhnev Doctrine). Eastern European states could do it 'their way' (referencing Frank Sinatra's song *My Way*).\n\n" +
          "**The Chain Reaction of 1989 Revolutions:**\n" +
          "1. **Poland (June 1989):** Solidarity was legalised; in semi-free elections, Solidarity won 99 out of 100 Senate seats. Tadeusz Mazowiecki became the first non-communist Prime Minister in the Soviet bloc.\n" +
          "2. **Hungary (May–Sept 1989):** Communist government dismantled the barbed wire fence on the border with Austria, creating an escape corridor to the West for tens of thousands of East Germans.\n" +
          "3. **East Germany & The Fall of the Berlin Wall (9 November 1989):** Massive peaceful protests in Leipzig and East Berlin. When spokesman Günter Schabowski mistakenly announced in a live press conference that border restrictions were lifted 'immediately', tens of thousands of East Berliners surged to the checkpoints. Bewildered guards stood down, and jubilant citizens tore down the wall with sledgehammers.\n" +
          "4. **Czechoslovakia (Nov–Dec 1989):** The **Velvet Revolution** peacefully ousted the communist regime; playwright Václav Havel became President.\n" +
          "5. **Romania (December 1989):** The only violent revolution: dictator Nicolae Ceaușescu and his wife were overthrown by the military and executed by firing squad.\n" +
          "- **The Final Collapse:** In October 1990, Germany was officially reunified. On **25 December 1991**, Gorbachev resigned and the Soviet Union formally dissolved into 15 independent republics. The Cold War was over.",
        examinerTips: [
          "Identify the crucial turning point: Gorbachev's refusal to use the Red Army to enforce the Brezhnev Doctrine in 1989.",
          "Distinguish clearly between Glasnost (openness/free speech) and Perestroika (economic restructuring).",
        ],
        commonMistakes: [
          "Assuming Gorbachev wanted to destroy the USSR. Gorbachev wanted to reform and save communism, but his reforms inadvertently unleashed uncontrollable democratic forces that destroyed it.",
        ],
        recap: [
          "Define Mikhail Gorbachev's twin policies of Glasnost and Perestroika.",
          "Why did the fall of the Berlin Wall in November 1989 happen so suddenly and peacefully?",
        ],
      },
    ],
  },
];
