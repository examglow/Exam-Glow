import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelFiscal = imagePanel(IMG, [
  {
    src: "econ4-budget-box.webp",
    alt: "A stack of official documents and a heavy dispatch box with straps on a polished wooden desk, photographed in a grand government corridor",
    caption: "Taxing and spending is fiscal policy",
  },
]);

const panelMonetary = imagePanel(IMG, [
  {
    src: "econ4-bank-rate-board.webp",
    alt: "A large electronic interest rate display board in a bank branch lobby, glowing digits set at an angle, with a customer seated nearby reading a leaflet",
    caption: "One rate change ripples through borrowing",
  },
]);

const panelSupplySide = imagePanel(IMG, [
  {
    src: "econ4-apprentice-workshop.webp",
    alt: "Young apprentices in protective goggles being shown a machine by an instructor in a bright training workshop, tools laid out on the bench",
    caption: "Train the workforce, shift capacity right",
  },
]);

const panelGrowth = imagePanel(IMG, [
  {
    src: "econ4-crane-skyline.webp",
    alt: "Tower cranes rising above a half-built skyline of new flats and offices at golden hour, scaffolding and a concrete mixer on the site below",
    caption: "More output every year is the growth aim",
  },
]);

const panelUnemployment = imagePanel(IMG, [
  {
    src: "econ4-unemployment-office.webp",
    alt: "People waiting on chairs in the queue area of a government employment office, one holding a folder of papers and a clerk visible behind a counter",
    caption: "Unemployment is counted inside the labour force",
  },
]);

const panelInflation = imagePanel(IMG, [
  {
    src: "econ4-price-shelf.webp",
    alt: "A supermarket shelf of everyday groceries with bright new price labels, one shelf edge showing a higher figure than the ticket below it",
    caption: "CPI tracks this basket month by month",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Government and the Macroeconomy",
  intro: `Paper 2 loves this chapter because every question has two sides: a policy helps one aim and damages another. That tension is exactly what the **10-mark evaluation** and the part (d) levels-of-response question are looking for.\n\nSix aims, three policies, three problems. Learn them in that order.`,
  subheadings: [
    {
      title: "4.1 Government macroeconomic intervention",
      body: `### Six Targets, Never All at Once

Governments intervene to reach **macroeconomic aims**, and the syllabus names six: **economic growth**, **full employment or low unemployment**, **stable prices or low inflation**, **balance of payments stability**, **redistribution of income**, and **environmental sustainability**.

Each aim needs a **reason** (why it matters to the people living under it) and a **criterion** (the target figure a government sets, such as inflation of 2% a year).

The aims **conflict**, and naming a conflict is the easiest analysis mark in the paper: policies that chase one aim usually damage another.`,
      groups: [
        {
          subTitle: "Reason and criterion for every aim",
          bullets: [
            "**Economic growth** — reason: rising incomes and jobs without sacrifice. Criterion: real GDP up **3% a year**.",
            "**Full employment** — reason: income, skills and self-respect for workers, plus output for the economy. Criterion: unemployment **at or below the natural rate**, commonly under 5%.",
            "**Stable prices** — reason: savings keep their value and firms can plan. Criterion: **CPI inflation of 2% a year**.",
            "**Balance of payments stability** — reason: a currency that holds and no need to borrow abroad. Criterion: **current account within a small share of GDP**, either way.",
            "**Redistribution of income** — reason: poverty and inequality are wasted potential. Criterion: the **top-fifth to bottom-fifth income ratio narrowed**.",
            "**Environmental sustainability** — reason: growth that burns resources cannot continue. Criterion: **carbon emissions or waste falling year on year**.",
            "**Conflicts to quote**: full employment against stable prices (more jobs mean more spending mean demand-pull inflation); growth against sustainability (more output means more pollution and resource use); full employment against balance of payments stability (employed workers buy more imports).",
            "**Trap:** full employment is **not zero unemployment**. Frictional and seasonal unemployment remain even at the target.",
          ],
        },
      ],
    },
    {
      title: "4.2 Fiscal policy",
      body: `### The Tax-and-Spend Lever

**Fiscal policy** is the use of **government spending and taxation** to influence the level of economic activity. It is set by the government, not the central bank.

The **government budget** is the annual plan of spending and revenue. A **budget deficit** is spending exceeding revenue in a year; a **budget surplus** is revenue exceeding spending; the **national debt** is the stock of past deficits accumulated.`,
      figure: panelFiscal,
      groups: [
        {
          subTitle: "Spending, taxation and the arithmetic",
          bullets: [
            "**Budget arithmetic** is examinable: spending **520** against revenue **470** is a **deficit of 50**; revenue 520 against spending 480 is a **surplus of 40** (billions of dollars either way).",
            "The **deficit is a flow**, measured over a year; the **debt is a stock**, measured at a date. Mixing them costs the definition mark.",
            "Government spends to **provide public goods**, **fund merit goods** such as health and education, **protect the vulnerable** with benefits, **build infrastructure**, **support industries and regions**, and **correct market failure**.",
            "Tax exists to **raise revenue**, **discourage consumption of demerit goods**, **reduce imports**, **redistribute income**, **influence total demand**, and **encourage environmental sustainability**.",
            "Two classifications, both tested: **progressive** (average rate rises with income), **regressive** (falls with income), **proportional** (a constant share); and **direct** (on income or wealth, such as income tax and corporation tax) versus **indirect** (on expenditure, such as VAT, excise duty and tariffs).",
            "Impact of taxation: **consumers** pay more and buy less, **workers** keep less of each extra dollar, **firms** face higher costs and lower demand, **government** gains revenue, and the **economy** may slow or become more equal.",
          ],
        },
        {
          subTitle: "Expansionary and contractionary fiscal policy",
          bullets: [
            "**Expansionary** — spending up or taxes down: raises demand, output and jobs, helps growth and unemployment aims, but risks inflation, a bigger deficit and a worse current account.",
            "**Contractionary** — spending down or taxes up: cools demand, protects prices and the current account, but risks unemployment and slower growth.",
            "**Effectiveness depends on** the size of the multiplier, which part of income is taxed, the state of the economy, time lags, and whether the policy is reversed at the right moment.",
          ],
        },
      ],
    },
    {
      title: "4.3 Monetary policy",
      body: `### The Interest-Rate Lever

The **money supply** is the total quantity of money available in an economy at a time — currency in circulation plus bank deposits. **Monetary policy** is the use of the **rate of interest**, the **money supply** and the **exchange rate** to influence economic activity, and it is run by the **central bank**.

It works through decisions rather than orders. Nobody is told to spend less; borrowing simply becomes dearer, and spending follows.`,
      figure: panelMonetary,
      groups: [
        {
          subTitle: "The three measures and where they land",
          bullets: [
            "**Interest rate up**: saving is rewarded, borrowing is punished, consumption and investment fall, inflation eases and imports cheapen — but growth and jobs suffer, and indebted households and firms hurt.",
            "**Interest rate down**: the reverse, with a **lag** of months before spending responds.",
            "**Money supply up**: credit is easier to obtain, so spending and demand rise; **money supply down** restricts credit and cools demand.",
            "**Exchange rate** changes alter the price of exports and imports, so they feed directly into the inflation and current-account aims (Topic 6 explains the mechanism).",
            "Tighter monetary policy helps **stable prices** and **balance of payments stability**; looser policy helps **growth** and **employment**. Neither version is kind to redistribution or to borrowers.",
            "**Trap:** monetary policy is set by the **central bank**, not the government. Confusing them costs the definition mark.",
          ],
        },
      ],
    },
    {
      title: "4.4 Supply-side policy",
      body: `### Growing the Pie, Not the Demand

**Supply-side policy** is policy that **increases the productive capacity and efficiency of the economy**, shifting potential output outward instead of stimulating spending on what already exists.

It is the only policy family that can ease inflation **and** raise output at the same time, because it moves supply rather than demand. That is why exam answers rate it highly — and why its costs are rated honestly too.`,
      figure: panelSupplySide,
      groups: [
        {
          subTitle: "Seven measures and their effects",
          bullets: [
            "**Education and training** raise labour quality and productivity, cutting structural unemployment.",
            "**Infrastructure spending** — roads, ports, broadband, energy — lowers business costs and raises capacity.",
            "**Labour market reforms** — union rule changes, benefit conditions, periodic NMW review — make hiring and moving between jobs easier.",
            "**Lower direct taxes** raise the reward from working and investing, so labour supply and saving increase.",
            "**Deregulation** cuts compliance costs and encourages entry, at the risk of weaker protections.",
            "**Incentives to work and invest** — tax relief on capital, grants for research — pull resources towards productive uses.",
            "**Privatisation** transfers state firms to private owners, aiming for profit-driven efficiency.",
            "**Effects on the aims**: higher **growth**, lower **structural unemployment**, lower **unit costs** so gentler **cost-push inflation**, and better export competitiveness for the **current account**. The costs: **expensive**, **years of lag**, and lower direct taxes cut revenue at first.",
          ],
        },
      ],
    },
    {
      title: "4.5 Economic growth",
      body: `### More Output, at What Price?

**Economic growth** is an increase in an economy's **output of goods and services over time**. It is measured by **real GDP** — output valued at constant prices, so inflation is stripped out — and the growth rate is the percentage change in real GDP a year.

Growth is caused by **an increase in total demand**, **an increase in the quantity of resources**, or **an increase in the quality of resources**. The first moves an economy towards its PPC; the other two push the PPC outward.

A **recession** is a prolonged fall in real GDP, commonly two consecutive quarters of negative growth, caused by the reverse of the same three sources.`,
      figure: panelGrowth,
      groups: [
        {
          subTitle: "Worked measurement, and both sides of growth",
          bullets: [
            "Real GDP rising from **600 to 624** (billions of dollars) is growth of **24 / 600 x 100 = 4%**.",
            "**GDP per head**: **600 billion dollars** split between **30 million** people is **20,000 dollars each** — the figure living-standard questions need.",
            "**Advantages of growth**: rising incomes, more jobs, extra tax revenue without raising any rate, poverty eased, and confidence that attracts investment.",
            "**Disadvantages of growth**: pollution and resource depletion, congestion, longer working hours, inequality if the gains are uneven, and a boom that pulls in imports and re-ignites inflation.",
            "**Consequences of a recession**: **consumers** face unemployment and buy less; **workers** meet redundancy and wage freezes; **firms** lose revenue, cancel investment and may fail; **government** collects less tax while paying more in benefits, so the deficit widens.",
            "**Policies to promote growth**: supply-side measures (education and training, infrastructure, technology, lower business taxes), stable macroeconomic conditions (low inflation, steady interest rates), sound institutions and rule of law, openness to trade and investment, and a skilled, mobile workforce. Effectiveness is judged on **time lag and cost**, since capacity policies take years while demand stimulus works quickly but fades.",
            "**Trap:** **real** GDP is adjusted for inflation; **nominal** GDP is not. Quoting nominal growth as real growth is an instant mark loss.",
          ],
        },
      ],
    },
    {
      title: "4.6 Employment and unemployment",
      body: `### Counting the People Without Work

**Employment** is workers in paid jobs. **Unemployment** is people in the **labour force** who are **willing, able and available to work but cannot find a job**. **Full employment** is the absence of **cyclical** unemployment, with frictional and seasonal unemployment remaining.

The **labour force** is employed plus unemployed people of working age. People **not** looking for work — full-time students who are not seeking jobs, retirees, unpaid carers — are outside it and are not counted as unemployed.

Unemployment is measured by the **labour force survey**, and the rate is a formula you must be able to apply.`,
      figure: panelUnemployment,
      groups: [
        {
          subTitle: "Formula, four types, costs and cures",
          bullets: [
            "**Unemployment rate = (number unemployed / labour force) x 100**. A labour force of **25 million** with **2 million** out of work gives **2 / 25 x 100 = 8%**.",
            "**Frictional** — between jobs, while searching; short and partly healthy.",
            "**Structural** — skills or places no longer match the jobs available, as an industry or region declines.",
            "**Cyclical** — caused by a fall in total demand during a recession.",
            "**Seasonal** — determined by the time of year, such as tourism, harvesting and fishing.",
            "**Consequences**: the **individual** loses income, skills and self-respect; **firms** lose demand and the staff they trained; **government** loses tax and pays benefits; the **economy** loses output that is gone for good, sitting inside its PPC.",
            "**Policies**: expansionary fiscal and monetary policy for **cyclical**; education, retraining, relocation help and labour-market reform for **structural**; job-centres and vacancy information for **frictional**; diversification of the local economy for **seasonal**.",
            "**Trap:** the denominator is the **labour force**, not the population. Using population understates the rate.",
          ],
        },
      ],
    },
    {
      title: "4.7 Inflation",
      body: `### When the Whole Price Level Moves

**Inflation** is a **persistent rise in the general price level**; **deflation** is a persistent fall. One price rising is not inflation — the movement must be **general and sustained**.

Inflation is measured with the **Consumer Prices Index (CPI)**: a fixed **basket** of goods, prices collected and weighted by importance, with the base year set to **100**.

**Demand-pull** inflation comes from total demand rising faster than output. **Cost-push** inflation comes from rising production costs being passed on as higher prices.`,
      figure: panelInflation,
      groups: [
        {
          subTitle: "Calculation, consequences and controls",
          bullets: [
            "**Inflation rate = (this year CPI - last year CPI) / last year CPI x 100**. A basket costing **100** in the base year and **108** this year means **8%** inflation.",
            "Inflation punishes **savers** and **lenders**, whose money buys less when it is repaid, and rewards **borrowers**, who repay in cheaper money.",
            "**Consumers** pay more, especially on food and fuel; **workers** gain only if wages keep pace; **firms** face uncertainty, higher costs and shrinking export competitiveness; the **economy** loses output to price-signalling noise and the poorest households suffer most.",
            "**Deflation** looks like good news for shoppers but delays spending, raises the real value of debt and cuts output.",
            "**Policies for demand-pull**: tighter monetary policy (higher rates), contractionary fiscal policy (less spending or higher taxes), and income policies on wages.",
            "**Policies for cost-push**: supply-side measures to cut business costs, cheaper imported inputs, and lower indirect taxes on essentials — since raising rates would deepen the slump that caused it.",
            "**Effectiveness**: tight policy works with a lag and sacrifices jobs; supply-side policy is slow; wage controls distort the labour market. Say which aim is being traded away.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_4 = chapterFour;
