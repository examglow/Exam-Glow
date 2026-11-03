import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelA = imagePanel(IMG, [
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

const panelB = imagePanel(IMG, [
  {
    src: "econ3-household-budget.webp",
    alt: "A kitchen table with an open budget notebook, a pile of receipts, a calculator and envelopes for different household spending categories",
    caption: "Income, interest, confidence, age, culture",
  },
  {
    src: "econ3-job-board.webp",
    alt: "A wall of printed vacancy cards at a jobs fair, with several people standing reading them and one holding a folder of applications",
    caption: "Wages are set where labour demand meets labour supply",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "econ3-assembly-line.webp",
    alt: "A factory assembly line where each worker performs one small repeated task along a moving belt, machines and tools arranged in a long row",
    caption: "Specialisation lifts output per worker",
  },
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
      title: "Money, Banking and Households",
      body: `### What Money Does

**Money** is anything **generally accepted as a means of payment**. It has four **functions**: **medium of exchange** (it buys things), **unit of account** (it measures value so prices can be compared), **store of value** (it holds purchasing power over time), and **standard of deferred payment** (it settles debts). Its **characteristics**: generally accepted, **divisible**, **portable**, **durable**, **limited in supply**, and **stable in value**.

Its **forms** have changed with trust: **commodity money** such as gold, silver or shells, then **coins and paper currency** whose value comes from legal acceptance rather than the metal, and finally **bank deposits** — the electronic balances moved by cards and transfers, which make up most of the money people actually spend.

**Barter** fails because it needs a **double coincidence of wants** — each side must want what the other has. That single sentence is the answer to most barter questions.

Money is created and controlled by two kinds of bank. The **central bank** issues currency, **banks the banks**, sets monetary policy, holds foreign reserves and looks after the government's finances. **Commercial banks** take deposits from the public, lend them out at higher rates, and provide payment services — their importance is that they **channel savings into investment**.`,
      figure: panelA,
      groups: [
        {
          subTitle: "What moves household spending, saving and borrowing",
          bullets: [
            "**Income** — higher disposable income raises spending and usually saving; the extra amount spent is the **marginal propensity to consume**.",
            "**Rate of interest** — a rise **encourages saving** and **discourages borrowing**, so spending falls; a fall does the reverse.",
            "**Confidence** — if households expect jobs and incomes to be safe they spend and borrow; fear of unemployment raises precautionary saving.",
            "**Age** — younger households borrow, middle-aged save most, retirees draw savings down. **Culture** — habits and religion change the saving rate; some cultures avoid interest-based borrowing.",
            "Households are **consumers, savers, borrowers and workers** at once, so an interest-rate change hits them from several directions — the link into Topic 4.",
          ],
        },
      ],
    },
    {
      title: "Workers, Wages and Mobility",
      body: `### Choosing and Pricing Labour

Choice of occupation depends on **wage factors** (pay, bonus, overtime, fringe benefits, job security) and **non-wage factors** (working conditions, hours, location, training on offer, job satisfaction, prestige, dress, risk, and how far you must commute).

**Wage determination** is demand for labour meeting supply of labour. Labour demand is a **derived demand** — firms want workers only because customers want the firm's output, so anything that raises product demand raises labour demand. Bargaining power of **trade unions**, and government policy including the **national minimum wage (NMW)**, both shift the outcome; a diagram with the NMW drawn **above** the equilibrium wage shows unemployment, and **below** it shows no effect at all.

**Division of labour** is the splitting of production into separate tasks, each done by a different worker.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Why wages differ, and what mobility means",
          bullets: [
            "Wage differences come from **demand for and supply of that type of labour**, **relative bargaining strength**, **skill level** (a doctor against a shelf-stacker), **sector** (primary, secondary, tertiary), **public versus private employment**, **discrimination** such as male/female pay gaps, and **government policy**.",
            "**Occupational mobility** = moving between occupations; **geographical mobility** = moving between places. Training, vacancy information, housing and cheap travel raise them; specialised skills, high local house prices, family ties and language barriers lower them.",
            "High mobility lets labour respond to wage signals, so supply shifts faster and wage gaps narrow; low mobility keeps structural unemployment alive.",
            "**Division of labour advantages**: higher output per worker, faster production, greater dexterity, and machinery easier to design. **Disadvantages**: boredom, loss of craft variety, dependence on others in the chain, and workers easily replaced.",
          ],
        },
      ],
    },
    {
      title: "Firms, Production, Costs and Markets",
      body: `### From Sector to Scale

Firms sit in the **primary** sector (extracting raw materials: farming, fishing, mining), **secondary** (manufacturing and construction) or **tertiary** (services: retail, banking, transport, tourism). They belong to the **private sector** (owned by individuals for profit) or the **public sector** (owned by the state to serve the public).

**Mergers**: **horizontal** (same stage, e.g. two similar firms), **vertical forward** (towards the customer) or **vertical backward** (towards the supplier), and **conglomerate** (unrelated industries). Advantages: growth, economies of scale, market power, security of supply. Disadvantages: less competition, job losses, possible monopoly, and integration problems.

**Economies of scale** cut average cost as the firm grows — **internal** ones (purchasing, technical, financial, marketing, managerial, risk-bearing) belong to the firm; **external** ones (skilled local labour pools, better infrastructure, supplier clusters) belong to the industry. **Diseconomies of scale** raise average cost when a firm gets too big: **poor communication, bureaucracy, coordination problems, low morale and alienation**.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Small firms versus large firms",
          bullets: [
            "**Small firms** give the owner independence and close customer contact, start with little capital and adapt quickly. Their limits: **higher average costs**, difficulty borrowing, no spare staff for illness, and the owner carrying the risk alone.",
            "**Large firms** spread fixed costs over huge output, borrow more cheaply, employ specialists and can absorb a bad year. Their limits: **bureaucracy**, slow decisions, communication problems and the risk of diseconomies of scale.",
            "Size is not the same as efficiency. The examinable question is **which costs fall and which rise** as the firm grows, and that is the ATC curve in Topic 2 terms.",
          ],
        },
        {
          subTitle: "Production, costs, revenue and objectives",
          bullets: [
            "The **demand for a factor of production** depends on the **demand for the product**, the **price of other factors**, their **availability** and their **productivity** — again, derived demand.",
            "**Labour-intensive** production uses more workers than machines — chosen when labour is cheap, flexible or skilled and output is bespoke. **Capital-intensive** uses more machines — chosen when labour is scarce or expensive, quality must be consistent, or volume is huge.",
            "**Production** is total output; **productivity** is output per unit of input, usually **output per worker per hour**. Investment in better machines and training raises productivity.",
            "**TC = FC + VC.** **AFC = FC / output**, **AVC = VC / output**, **ATC = TC / output**, and **ATC = AFC + AVC**. Fixed costs (rent, salaries, insurance) do not vary with output; variable costs (raw materials, hourly wages, energy) do.",
            "Work one, in dollars: fixed costs **1200**, variable cost **800** at **100 units**. Then **TC = 2000, AFC = 12, AVC = 8, ATC = 20**. At **200 units** variable cost is 1400, so **TC = 2600, AFC = 6, AVC = 7, ATC = 13** — the same fixed cost spread over twice the output.",
            "**TR = price x quantity**, and **AR = TR / output**, which equals the price. Profit is **TR minus TC**. Selling 200 units at 15 dollars gives TR 3000 against TC 2600, so the firm makes a **profit of 400**. Rising sales raise TR only if demand is not perfectly elastic.",
            "Firm **objectives**: **survival** (short-run, during a slump), **profit maximisation**, **growth** (market share), and **social welfare** (co-operatives, community businesses). The objective chosen changes the pricing decision.",
            "**Competitive markets** have many firms, low barriers to entry, and rivalry on price and quality: consumers gain choice and lower prices, but firms earn thin profits and may lack funds for research. **Monopoly** is one dominant supplier that can raise price and restrict output, earning supernormal profit with less incentive to innovate. The syllabus does **not** require perfect-competition diagrams for either.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "**AFC keeps falling** as output rises — it never turns back up. ATC falls then rises; that U-shape is economies then diseconomies of scale.",
            "The **ATC diagram is required** for economies and diseconomies of scale: output on the horizontal axis, cost per unit on the vertical, one U-shaped curve, and the falling part labelled economies of scale.",
            "A minimum wage drawn **below** equilibrium causes **no** unemployment. Only a binding wage set **above** equilibrium does.",
            "Productivity is a **ratio**, not total output. A firm that doubles workers and doubles output has flat productivity.",
            "Economies of scale reduce **average** cost, not necessarily total cost — a bigger firm spends more in total while paying less per unit.",
            "\u201cDerived demand\u201d is the phrase that earns the mark for labour questions; write it, do not paraphrase it.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_3 = chapterThree;
