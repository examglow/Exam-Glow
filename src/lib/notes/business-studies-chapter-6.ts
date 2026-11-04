import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/business-studies";

const panelCycle = imagePanel(IMG, [
  {
    src: "bus6-business-cycle-board.webp",
    alt: "A lecture hall whiteboard showing one hand-drawn wavy line rising to a peak, falling through a trough and rising again, with the four stages labelled growth, boom, recession and slump in coloured marker",
    caption: "The cycle repeats; businesses plan across it, not around it",
  },
  {
    src: "bus6-recession-empty-cafe.webp",
    alt: "A quiet cafe with many empty tables and folded chairs, one worker wiping a counter near a window displaying a reduced-price board on a grey afternoon",
    caption: "In a recession demand, jobs and credit all tighten together",
  },
]);

const panelGlobal = imagePanel(IMG, [
  {
    src: "bus6-customs-tariff.webp",
    alt: "A customs officer in a hi-vis vest checking sealed cartons and paperwork at a bonded warehouse dock, stacked containers and a gantry crane behind",
    caption: "A tariff raises the price; a quota caps the quantity",
  },
  {
    src: "bus6-mnc-plant.webp",
    alt: "A large foreign-owned factory with several national flags at the gate, workers entering in the morning light and delivery trucks on a wide new access road",
    caption: "An MNC brings jobs and capital — and competition",
  },
]);

const panelEnvironment = imagePanel(IMG, [
  {
    src: "bus6-river-pollution.webp",
    alt: "A discharge pipe from an industrial site releasing murky water into a river, discoloured bank sediment and reeds, a warning sign on the towpath",
    caption: "External costs are paid by other people, which is why law and pressure groups push them back onto the firm",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "External Influences on Business Activity",
  intro: `This topic is where the **evaluation marks** live, because every external change has winners and losers inside the same business. The standard answer shape is: **what changed → effect on costs → effect on demand → what the firm should do**.\n\nCase-study questions love interest rates, exchange rates and recession. Learn the chains of reasoning below and reuse them.`,
  subheadings: [
    {
      title: "6.1 Economic issues",
      body: `### The Business Cycle and Government Policy

The **business cycle** is the pattern of **expansion and contraction** that an economy moves through over time. Its four stages are **growth**, **boom**, **recession** and **slump**.`,
      figure: panelCycle,
      groups: [
        {
          subTitle: "Each stage and what it does to a business",
          bullets: [
            "**Growth** — national output and incomes rise, so **demand and sales increase**, profits improve, firms **invest and hire**, and credit is easy; the risk is that costs and prices begin to rise and new competitors enter.",
            "**Boom** — the peak of the cycle: demand is at its **highest**, often above what firms can supply, so **inflation, labour shortages and stretched capacity** appear; sales are strong but consumers are over-committed and confidence is fragile.",
            "**Recession** — output **falls** for a period: **unemployment rises, demand and prices weaken**, inventories build up, profits fall, credit tightens, and firms cut costs, postpone investment and lay off staff. Demand for **inferior and essential goods** holds up best; luxury and big-ticket purchases fall first.",
            "**Slump (depression)** — a **prolonged, deep decline** with high unemployment and very weak demand; many businesses **fail**, prices and wages fall, and only firms with **low costs, strong cash and essential products** survive comfortably.",
            "**Effects of the three measured changes**: rising **employment** means more incomes and more spending; rising **inflation** means higher costs and uncertain prices, and customers' real incomes fall; rising **economic growth** means higher sales, higher tax revenue and tougher competition.",
          ],
        },
        {
          subTitle: "Effects of changes in government policy",
          bullets: [
            "**Taxes on business profit** — a **higher corporation tax** rate leaves less profit after tax, cutting funds for reinvestment and dividends; a **cut** does the opposite and can attract foreign firms.",
            "**Taxes on people's income** — higher income tax reduces **disposable income**, so consumers buy less, especially discretionary goods; a cut raises demand. Either way, higher tax can also push workers to seek better pay.",
            "**Changes in government spending** — more spending on **public services and infrastructure** creates orders for suppliers, jobs and demand; **cuts** reduce contracts, employment and spending in the local economy. Spending on benefits supports the demand of lower-income households.",
            "**Changes in interest rates** — a **rise** makes borrowing dearer and saving more attractive, so **investment and consumer credit fall**, demand softens, and firms with variable-rate debt see profits squeezed; it also tends to **appreciate the currency**, hurting exporters. A **fall** does the reverse: cheap credit, more spending and investment, but possible inflation.",
            "**Indirect and corporation taxes** also matter: a **VAT or excise rise** raises the shelf price and usually cuts volume, so firms either absorb it in margin, pass it on, or reduce costs.",
            "**How businesses may respond**: **postpone or cancel investment** when rates rise, **cut costs and reduce prices**, **diversify products** or move to a **niche**, cut borrowing and rebuild cash, **delay hiring**, renegotiate debt terms, and **relocate** where tax and regulation are lower.",
          ],
        },
      ],
    },
    {
      title: "6.2 Business and the international economy",
      body: `### Globalisation, MNCs, External Costs and Exchange Rates

**Globalisation** is the increasing **integration of national economies** through growing trade, investment, and the movement of people, technology and information.`,
      figure: panelGlobal,
      groups: [
        {
          subTitle: "Why globalisation happened, and what it gives and takes",
          bullets: [
            "**Reasons for globalisation**: **improved transport links** (container shipping, air freight, refrigeration) cut delivery cost and time; **technological change in communication** (internet, mobile, video calls) made coordination and marketing cheap and instant; **free trade agreements** removed tariffs between member countries; and **newly industrialised countries** offered low-cost labour, new capacity and new customers.",
            "**Opportunities for business**: access to **larger markets and more customers**, **cheaper or better inputs and labour** abroad, **economies of scale**, new technology and ideas to copy, **spread risk** across economies, and cheaper imports that reduce production costs.",
            "**Threats**: **worldwide competition** including low-cost producers, price pressure from imports and online rivals, dependence on **long supply chains** that can break, cultural and legal differences, exchange-rate movements, and the risk of **reputational damage** from overseas practices.",
            "**An import tariff** is a **tax on imported goods**, which raises their price so domestic products look relatively cheaper and the government earns revenue. **An import quota** is a **physical limit on the quantity** that may be imported, which restricts supply and raises the price without earning the government anything unless licences are sold.",
            "**Effects on businesses**: importers and manufacturers using imported components face **higher costs and prices**; protected domestic producers gain **sales, profit and time to grow**, but may become **less efficient**; export-oriented firms risk **retaliation** from other countries; consumers pay more and choose less.",
          ],
        },
        {
          subTitle: "Multinational companies (MNCs)",
          bullets: [
            "An **MNC** is a business that **operates in more than one country**, usually with a head office in a **home country** and production or sales in **host countries**.",
            "**Advantages to the business**: **larger sales and market share**, **lower production costs** from cheaper labour and materials, **spread risk** across economies, easier access to raw materials and skills, **economies of scale**, avoidance of some trade barriers by producing inside the market, and influence over governments and suppliers.",
            "**Advantages for the host country**: **jobs and training**, **investment** in factories and infrastructure, **extra exports and tax revenue**, **technology and management skills** transferred, greater **consumer choice**, and pressure on local firms to become more efficient.",
            "**Disadvantages for the host country**: **increased competition** that closes local businesses, **environmental damage** and resource depletion, **exploitation of cheap labour** and weak conditions, **repatriation of profits** to the home country, decisions made **abroad with no local voice**, tax avoidance, and danger that the whole plant **relocates** if costs rise.",
          ],
        },
        {
          subTitle: "External costs and benefits, and exchange rates",
          bullets: [
            "An **external cost** is a cost of a business decision **borne by a third party who is not paid for it** — river pollution damaging fishermen, traffic and noise lowering nearby property values, carbon driving climate damage, or ill-health from a poor diet raising public health costs.",
            "An **external benefit** is a gain received by a third party for free — a new factory road also used by villagers, a training centre raising the local skill pool, a shop bringing footfall to neighbouring businesses, or R&D whose ideas spread.",
            "**Why it matters in an answer**: because the business does **not pay for external costs, it produces too much of them**. Laws, taxes, fines and pressure groups force those costs back onto the firm, which is why **legal controls raise private costs**.",
            "An **exchange rate** is the price of one currency in terms of another. **Appreciation** is a rise in its value, so it buys **more** foreign currency; **depreciation** is a fall, so it buys **less**.",
            "**A domestic currency appreciating**: imports and overseas components become **cheaper**, so importers' costs fall and consumers gain; but **export prices rise in foreign currency**, so export volumes, competitiveness and export profit fall, and overseas earnings are worth less at home.",
            "**A domestic currency depreciating**: **exports become cheaper** and more competitive, raising volume, profit and overseas earnings; inbound tourism gains; but **imported raw materials, fuel and machinery cost more**, squeezing firms that depend on them and pushing up prices. **Trap:** no calculations are required — describe the **direction and the consequence**, never a number.",
          ],
        },
      ],
    },
    {
      title: "6.3 Business and the environment",
      body: `### Damage, Response and Regulation

Business activity affects the environment through **pollution of air, water and land**, **depletion of finite resources** such as forests, fish stocks, minerals and fresh water, **waste and packaging**, **greenhouse gas emissions and climate change**, and **habitat loss and noise**.`,
      figure: panelEnvironment,
      groups: [
        {
          subTitle: "Why businesses respond, how they respond, and what legal controls do",
          bullets: [
            "**Why respond**: to **improve reputation and brand image**, which raises **sales and customer loyalty**; to **comply with the law** and avoid fines, closures or prosecutions; to **cut costs** through less energy, material and waste; to satisfy **investors, banks and insurers** who now screen environmental performance; and to answer **employees, customers and pressure groups**.",
            "**How respond**: use **renewable energy** and improve energy efficiency; **reduce resource use and waste** through lean methods and careful dosing; **reuse and recycle** materials and packaging; **develop environmentally friendly products** that last, repair and use less energy; use **recyclable, compostable or minimal packaging**; **clean emissions** with filters and treatment before discharge; source **responsibly certified** materials; and measure, report and set **reduction targets**.",
            "**Effects of legal controls over environmental damage** — on **how** a business produces: it must install filters, treatment plant and safer storage, changing process design and raising **costs and the need for training**. On **what** it produces: banned substances, single-use plastics or inefficient appliances are removed from the range and replaced, sometimes forcing a full redesign.",
            "On **where** it produces or sells: emission zones, protected habitats and waste rules can block a site or a market, push a firm to a country with **laxer rules** (or with **stricter** ones and a better image), and require permits and monitoring that delay opening.",
            "On **costs**: compliance brings **equipment, licences, monitoring, fines and legal advice**, plus a possible **waste disposal charge**; those costs either reduce profit, raise price, or drive efficiency savings that end up **lowering cost per unit**.",
          ],
        },
      ],
    },
    {
      title: "6.4 Business and ethical issues",
      body: `### Doing What Is Right When the Law Does Not Require It

**Ethical issues** are questions about what a business **ought** to do, where the law is silent but customers, staff and the community still judge it. Unethical behaviour is often **legal and still loses business**.`,
      groups: [
        {
          subTitle: "The issues, the responses, and both sides",
          bullets: [
            "**Issues that affect businesses**: **child labour** in the supply chain, **paying fair wages** to employees, **paying fair prices to suppliers**, **using suppliers who do not damage the environment**, unsafe working conditions and long hours, **bribery and corruption** to win contracts, misleading or targeted advertising, testing on animals, exploiting customer **data**, tax avoidance, and dumping cheap goods that destroy local producers.",
            "**How businesses may respond**: publish a **code of conduct and ethical policy**; **audit suppliers** and visit sites or require certification (Fairtrade, forestry, labour standards); **pay at or above the legal minimum** and publish wage ranges; buy **locally and ethically sourced** materials; refuse orders or markets that conflict with the policy; **train and protect whistleblowers**; report progress publicly; and set up an **ethics committee** with real power to stop a project.",
            "**Advantages of being ethical**: a **stronger brand and reputation**, more **customer loyalty and willingness to pay**, **better staff recruitment and retention**, **fewer lawsuits, fines and protests**, preferential access to **ethical investors and public contracts**, and a **healthier long-term supply chain** because suppliers survive.",
            "**Disadvantages**: **higher costs** from fair pay, audits and certified inputs; **price disadvantage** against less-scrupulous rivals; **lost contracts** where bribery or the cheapest bid wins; time and administration spent on monitoring; **less flexibility** to switch suppliers; and the risk of **criticism anyway** if the standards are judged insufficient or are not delivered — so any claim has to be provable.",
          ],
        },
      ],
    },
    {
      title: "6.5 Pressure groups",
      body: `### Organised Influence Without Voting

A **pressure group** is an organised group of people who campaign to **influence business or government decisions** on a cause, without seeking election itself. Examples include environmental, consumer-rights, human-rights, animal-welfare and community groups.`,
      groups: [
        {
          subTitle: "How they influence business decisions",
          bullets: [
            "**Public campaigns and petitions** raise awareness and put the firm's name next to the issue.",
            "**Media and social media exposure** — investigative stories, viral posts and online video can damage a brand within hours, long before any law changes.",
            "**Boycotts and buy-nothing campaigns** cut sales directly, which is the signal management and shareholders cannot ignore.",
            "**Protests and direct action** outside shops, headquarters or a delivery site — picketing, blockades and stunts that raise the cost and reputation risk of proceeding.",
            "**Lobbying government** to introduce laws, bans, labelling rules or taxes, which converts the campaign into a **legal requirement** for the whole industry.",
            "**Shareholder action** — buying a stake to raise a resolution, or pressuring institutional investors to divest.",
            "**Negotiation and partnership** — meeting the firm, agreeing standards, certification schemes or timelines, and then publicly monitoring the deal.",
            "**Legal action and complaints** to regulators, using consumer-protection or environmental law to force compliance or disclosure.",
            "**Effect on the business**: products reformulated or withdrawn, **suppliers changed or audited**, animal testing or child labour excluded, pay and conditions improved, packaging reduced, sites relocated, emissions cut — and often a **higher cost base**, which pressure groups and the firm then argue over who pays.",
            "**How to answer**: name the **group and its method**, say **which decision it targets**, then judge whether the business should **concede, negotiate or resist**, giving a cost, a time limit and a reputational risk.",
          ],
        },
      ],
    },
  ],
};

export const BUSINESS_STUDIES_CHAPTER_6 = chapterSix;
