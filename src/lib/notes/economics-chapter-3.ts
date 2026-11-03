import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelMoney = imagePanel(IMG, [
  {
    src: "econ3-money-coins.webp",
    alt: "Banknotes and coins of several different denominations arranged on a shop counter beside a cash register, in warm indoor light",
    caption: "Anything widely accepted, if it holds its value",
  },
  {
    src: "econ3-central-bank.webp",
    alt: "The tall stone columns and heavy bronze doors of a grand central bank building on a quiet city street, seen from below",
    caption: "One bank runs the money supply",
  },
]);

const panelHousehold = imagePanel(IMG, [
  {
    src: "econ3-household-budget.webp",
    alt: "A kitchen table with an open budget notebook, a pile of receipts, a calculator and envelopes for different household spending categories",
    caption: "Income, interest, confidence, age, culture",
  },
]);

const panelLabour = imagePanel(IMG, [
  {
    src: "econ3-job-board.webp",
    alt: "A wall of printed vacancy cards at a jobs fair, with several people standing reading them and one holding a folder of applications",
    caption: "Wages are set where labour demand meets labour supply",
  },
]);

const panelProduction = imagePanel(IMG, [
  {
    src: "econ3-assembly-line.webp",
    alt: "A factory assembly line where each worker performs one small repeated task along a moving belt, machines and tools arranged in a long row",
    caption: "Specialisation lifts output per worker",
  },
]);

const panelMonopoly = imagePanel(IMG, [
  {
    src: "econ3-utility-office.webp",
    alt: "A single long queue of customers at the counter of a large public utility office, with one uniformed clerk serving and a waiting bench behind",
    caption: "One supplier means no rival on price",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Microeconomic Decision-makers",
  intro: `The syllabus teaches the microeconomy through the people who make it run: **banks, households, workers and firms**. Every sub-topic is a decision, so the reliable answer structure is *who decides, on what grounds, and what happens next*.\n\nCosts and revenue here are the only place in the paper where a wrong arithmetic step is unarguable — so learn the formulas exactly.`,
  subheadings: [
    {
      title: "3.1 Money and banking",
      body: `### What Money Does

**Money** is anything **generally accepted as a means of payment**. Its four **functions** are **medium of exchange** (it buys things), **unit of account** (it measures value so prices can be compared), **store of value** (it holds purchasing power over time), and **standard of deferred payment** (it settles debts).

Its **characteristics**: generally accepted, **divisible**, **portable**, **durable**, **limited in supply**, and **stable in value**.

Its **forms** changed with trust: **commodity money** such as gold, silver or shells; then **coins and paper currency**, whose value comes from legal acceptance rather than the metal; and finally **bank deposits** — the electronic balances moved by cards and transfers, which are most of the money people actually spend.

**Barter** fails because it needs a **double coincidence of wants** — each side must want what the other has. That one sentence answers most barter questions.`,
      figure: panelMoney,
      groups: [
        {
          subTitle: "The two kinds of bank",
          bullets: [
            "The **central bank** issues currency, **banks the banks**, sets monetary policy, holds the country's foreign exchange reserves, and manages the government's finances. Its importance is control of the money supply and stability of the banking system.",
            "**Commercial banks** take deposits from households and firms, lend those deposits out at higher rates, and provide payment services. Their importance is that they **channel savings into investment**.",
            "**Deposit-taking plus lending** is how a commercial bank earns: the gap between the interest it pays and the interest it charges is its margin.",
            "**Trap:** the central bank is not anyone's ordinary bank. A question about your savings account means a **commercial** bank.",
          ],
        },
      ],
    },
    {
      title: "3.2 Households",
      body: `### Spend It, Save It, Borrow It

A **household** is a consumer, a saver, a borrower and a worker all at once, so one change in the economy hits it from several directions.

**Spending** rises with income; the extra amount spent from an extra dollar of income is the **marginal propensity to consume**. **Saving** is income not spent, and **borrowing** is spending paid for out of future income.`,
      figure: panelHousehold,
      groups: [
        {
          subTitle: "The five influences the syllabus names",
          bullets: [
            "**Income** — higher disposable income raises spending and usually saving; a fall cuts both, and saving can turn negative.",
            "**Rate of interest** — a rise **encourages saving** and **discourages borrowing**, so spending falls; a fall does the reverse.",
            "**Confidence** — if households expect jobs and incomes to be safe they spend and borrow; fear of unemployment raises **precautionary saving**.",
            "**Age** — younger households borrow, middle-aged households save most for pensions and housing, and retirees draw savings down.",
            "**Culture** — habits, religion and family structure change the saving rate, and some cultures avoid interest-based borrowing altogether.",
            "Interest-rate sensitivity differs by position: a household in **debt** gains from a fall, a household with **savings** loses, and most households hold both.",
          ],
        },
      ],
    },
    {
      title: "3.3 Workers",
      body: `### Choosing and Pricing Labour

Choice of **occupation** depends on **wage factors** (pay, bonuses, overtime, fringe benefits, job security) and **non-wage factors** (working conditions, hours, location, training on offer, job satisfaction, prestige, dress, risk and the commute).

**Wage determination** is the demand for labour meeting the supply of labour. Labour demand is a **derived demand** — firms want workers only because customers want the firm's output — so anything that raises product demand raises labour demand.

**Trade unions** raise the bargaining power of workers, and **government policy**, including the **national minimum wage (NMW)**, sets a floor under the outcome.`,
      figure: panelLabour,
      groups: [
        {
          subTitle: "Wage diagrams, wage differences and mobility",
          bullets: [
            "On the labour-market diagram, the **NMW drawn above equilibrium creates unemployment**; drawn **below** equilibrium it has no effect at all. That single sentence decides several marks.",
            "Higher product demand, better labour productivity, or a rise in the price of a substitute factor shifts **labour demand right** and raises wages and employment.",
            "Reasons wages differ: **demand for and supply of that type of labour**, **relative bargaining strength**, **skill level**, **sector worked in** (primary, secondary, tertiary), **public versus private employment**, **discrimination** such as the male-female pay gap, and **government policy**.",
            "**Occupational mobility** is moving between jobs; **geographical mobility** is moving between places. Training, vacancy information, affordable housing and cheap travel raise them; specialised skills, high local house prices, family ties and language barriers lower them.",
            "High mobility lets labour respond to wage signals, so supply adjusts quickly and wage gaps narrow. Low mobility keeps **structural unemployment** alive — the link into Topic 4.",
            "**Division of labour** is splitting production into separate tasks, each done by a different worker. **Advantages**: higher output per worker, faster production, greater dexterity, machinery easier to design. **Disadvantages**: boredom, loss of craft variety, dependence on others in the chain, and workers who are easily replaced.",
          ],
        },
      ],
    },
    {
      title: "3.4 Firms",
      body: `### Size, Sectors and Mergers

Firms sit in the **primary sector** (extracting raw materials: farming, fishing, mining), the **secondary sector** (manufacturing and construction) or the **tertiary sector** (services: retail, banking, transport, tourism). They belong to the **private sector** (owned by individuals for profit) or the **public sector** (owned by the state to serve the public).

A **merger** is two firms combining: **horizontal** (same stage, two rivals), **vertical forward** (towards the customer), **vertical backward** (towards the supplier), and **conglomerate** (unrelated industries).`,
      groups: [
        {
          subTitle: "Small firms, large firms and scale",
          bullets: [
            "**Small firms**: owner independence, close customer contact, low start-up cost and quick adaptation. Their limits are **higher average costs**, hard borrowing, no spare staff for illness, and one person carrying the risk.",
            "**Large firms**: fixed costs spread over huge output, cheaper borrowing, specialists on staff, and a bad year absorbed. Their limits are **bureaucracy**, slow decisions, communication problems and diseconomies of scale.",
            "**Merger advantages**: growth, economies of scale, market power, security of supply. **Disadvantages**: less competition, job losses, a possible monopoly, and integration problems.",
            "**Internal economies of scale** belong to the firm: purchasing, technical, financial, marketing, managerial and risk-bearing. **External economies** belong to the industry: a skilled local labour pool, better infrastructure, supplier clusters.",
            "**Diseconomies of scale** raise average cost when a firm grows too big: poor communication, bureaucracy, coordination problems, low morale and alienation.",
            "The **average total cost (ATC) diagram is required** here: output on the horizontal axis, cost per unit on the vertical, one U-shaped curve, with the falling part labelled economies of scale and the rising part diseconomies.",
            "**Trap:** size is not efficiency. The examinable question is **which costs fall and which rise** as output grows.",
          ],
        },
      ],
    },
    {
      title: "3.5 Firms and production",
      body: `### Labour, Machines and Output per Worker

The **demand for a factor of production** depends on the **demand for the product**, the **price of the other factors**, their **availability**, and their **productivity**. It is derived demand again: a boom in coffee sells more pickers.

**Labour-intensive** production uses more workers than machines. **Capital-intensive** production uses more machines than workers.`,
      figure: panelProduction,
      groups: [
        {
          subTitle: "Choosing a method, and what productivity means",
          bullets: [
            "Choose **labour-intensive** when labour is cheap, flexible or highly skilled, output is bespoke, and capital is scarce or expensive.",
            "**Advantages**: low start-up cost, jobs created, personal service and easy flexibility in volume. **Disadvantages**: slower output, human error, and wages rising with the minimum wage.",
            "Choose **capital-intensive** when labour is scarce or costly, quality must be identical every time, or the volume needed is enormous.",
            "**Advantages**: huge output, consistency, no shifts or breaks, and safety in dangerous work. **Disadvantages**: heavy up-front cost, redundancy of workers, and inflexibility if demand shifts.",
            "**Production** is total output. **Productivity** is output per unit of input, usually **output per worker per hour**. A firm that doubles its workers and doubles its output has flat productivity.",
            "**Influences on productivity**: training, health, better machines, technology, motivation and the division of labour.",
            "**Investment** in new machinery and training raises productivity and shifts the PPC outward; **depreciation** and neglected maintenance pull it back.",
          ],
        },
      ],
    },
    {
      title: "3.6 Firms' costs, revenue and objectives",
      body: `### The Arithmetic of a Firm

**Fixed costs (FC)** do not vary with output — rent, salaried wages, insurance. **Variable costs (VC)** do — raw materials, hourly labour, energy. **Total cost** is **TC = FC + VC**.

**AFC = FC / output**, **AVC = VC / output**, **ATC = TC / output**, and **ATC = AFC + AVC**.

On the revenue side, **total revenue is TR = price x quantity**, and **average revenue is AR = TR / output**, which is simply the price. Profit is **TR minus TC**.`,
      groups: [
        {
          subTitle: "Worked figures, diagrams and objectives",
          bullets: [
            "Work one, in dollars: fixed costs **1200**, variable cost **800** at **100 units**. Then **TC = 2000, AFC = 12, AVC = 8, ATC = 20**.",
            "At **200 units** variable cost is 1400, so **TC = 2600, AFC = 6, AVC = 7, ATC = 13** — the same fixed cost spread over twice the output.",
            "Selling 200 units at 15 dollars gives **TR = 3000** against TC 2600, so profit is **400** and AR is **15**, equal to the price.",
            "Rising sales raise TR only while demand is not perfectly elastic; a price cut grows TR only when demand is elastic, which is the Topic 2 link.",
            "The cost diagrams: **AFC keeps falling** as output rises, **AVC and ATC are U-shaped**, and the gap between ATC and AVC narrows because AFC shrinks.",
            "**Objectives of firms**: **survival** (short run, during a slump or new entry), **profit maximisation** (the usual assumption), **growth** (market share), and **social welfare** (co-operatives and community businesses). The objective chosen changes the price set.",
          ],
        },
      ],
    },
    {
      title: "3.7 Types of markets",
      body: `### Many Sellers, or One

A **competitive market** has **many firms**, **low barriers to entry**, and rivalry on price and quality — think of clothing shops or fruit vendors. A **monopoly** is a market supplied by **one dominant firm**, usually protected by high barriers such as ownership of a resource, a patent, or control of a network like a water supply.

Neither needs a diagram: the syllabus states that **perfect and imperfect competition theory is not required**. Characteristics and effects are what score.`,
      figure: panelMonopoly,
      groups: [
        {
          subTitle: "The effect of the number of firms on price, quality, choice and profit",
          bullets: [
            "**Many firms — price**: rivalry pushes price towards cost, so it stays low.",
            "**Many firms — quality**: firms compete on quality and service to stand out, so it rises.",
            "**Many firms — choice**: many brands and variants, since each firm tries to differentiate.",
            "**Many firms — profit**: thin margins and only normal profit in the long run, which can starve research of funds.",
            "**One firm — price**: it can raise price above cost because buyers have nowhere else to go.",
            "**One firm — quality**: it may fall, with no rival to punish bad service, or rise if the monopoly is regulated on standards.",
            "**One firm — choice**: none, apart from substitutes in other markets.",
            "**One firm — profit**: supernormal profit is possible and can fund large research programmes — but the incentive to be efficient weakens.",
            "**Trap:** monopoly is not simply being big. The test is **market power over price** and **barriers to entry**.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_3 = chapterThree;
