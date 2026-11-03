import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelA = imagePanel(IMG, [
  {
    src: "econ4-budget-box.webp",
    alt: "A stack of official documents and a heavy dispatch box with straps on a polished wooden desk, photographed in a grand government corridor",
    caption: "Taxing and spending is fiscal policy",
  },
  {
    src: "econ4-crane-skyline.webp",
    alt: "Tower cranes rising above a half-built skyline of new flats and offices at golden hour, scaffolding and a concrete mixer on the site below",
    caption: "More output every year is the growth aim",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "econ4-bank-rate-board.webp",
    alt: "A large electronic interest rate display board in a bank branch lobby, glowing digits set at an angle, with a customer seated nearby reading a leaflet",
    caption: "One rate change ripples through borrowing",
  },
  {
    src: "econ4-apprentice-workshop.webp",
    alt: "Young apprentices in protective goggles being shown a machine by an instructor in a bright training workshop, tools laid out on the bench",
    caption: "Train the workforce, shift supply right",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "econ4-unemployment-office.webp",
    alt: "People waiting on chairs in the queue area of a government employment office, one holding a folder of papers and a clerk visible behind a counter",
    caption: "Unemployment is measured in the labour force",
  },
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
      title: "Macroeconomic Aims and Fiscal Policy",
      body: `### Six Targets, Never All at Once

The government's **macroeconomic aims**: **economic growth**, **full employment / low unemployment**, **stable prices / low inflation**, **balance of payments stability**, **redistribution of income**, and **environmental sustainability**. Each needs a **reason** (why it matters) and a **criterion** (the target figure, such as an inflation rate of 2% a year).

The aims conflict, and naming a conflict is an easy analysis mark:
- **Full employment versus stable prices** — more jobs means more spending means demand-pull inflation.
- **Economic growth versus environmental sustainability** — more output means more pollution and resource use.
- **Full employment versus balance of payments stability** — employed workers buy more imports, worsening the current account.

**Fiscal policy** is the use of **government spending and taxation** to influence the economy. The **government budget** is the annual plan of spending and revenue; a **deficit** is spending exceeding revenue, a **surplus** is revenue exceeding spending, and the **national debt** is the accumulated deficits.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Spending and taxation you must be able to classify",
          bullets: [
            "Government spends to **provide public goods**, **fund merit goods** (health, education), **protect the vulnerable** through benefits, **build infrastructure**, **support industries and regions**, and **correct market failure**. Spending on demerit goods control is also examinable.",
            "Tax exists to **raise revenue**, **discourage consumption of demerit goods**, **reduce imports**, **redistribute income**, **influence total demand**, and **encourage environmental sustainability**.",
            "Two classifications, both tested: **progressive** (average rate rises with income), **regressive** (falls with income), **proportional** (constant share); and **direct** (on income or wealth, e.g. income tax, corporation tax) versus **indirect** (on expenditure, e.g. VAT, excise duty, tariffs).",
            "Tax effects: consumers pay more and buy less, workers keep less of each extra pound, firms face higher costs, government gains revenue, and the economy may slow — or become more equal.",
            "**Budget arithmetic** is examinable: spending **520** against revenue **470** is a **deficit of 50**; revenue 520 against spending 480 is a **surplus of 40** (billions of dollars either way). The **national debt** is the accumulated deficits — a stock, measured at a date, not a flow measured over a year.",
            "**Expansionary fiscal policy** (spending up, taxes down) lifts demand and jobs but risks inflation and deficit. **Contractionary fiscal policy** (spending down, taxes up) cools demand and helps the current account but risks unemployment.",
          ],
        },
      ],
    },
    {
      title: "Monetary and Supply-side Policy",
      body: `### Two More Levers

The **money supply** is the total quantity of money available in an economy at a time. **Monetary policy** is the central bank's use of the **rate of interest**, the **money supply** and the **exchange rate** to influence economic activity. It works through decisions: households save more and borrow less, firms invest less, and the currency moves.

**Supply-side policy** aims to **increase the productive capacity and efficiency of the economy** — shifting the economy's potential output outward rather than stimulating demand.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Measures and their transmission",
          bullets: [
            "**Interest rate up** = saving rewarded, borrowing punished, spending and investment fall, inflation and imports ease; but growth and jobs suffer and exporters lose if the currency appreciates. **Rate down** reverses all of it with a lag.",
            "**Money supply** changes alter how much credit is available; **exchange rate** changes alter the price of exports and imports. Both are monetary policy measures in this syllabus.",
            "**Supply-side measures**: **education and training**, **infrastructure spending** (roads, ports, broadband, energy), **labour market reforms** (union rules, benefit conditions, NMW review), **lower direct taxes**, **deregulation**, **incentives to work and invest**, and **privatisation**.",
            "Supply-side policy raises **productive capacity and potential growth**, lowers **unit costs** and reduces **structural unemployment** — but it is **expensive**, takes **years**, and lower direct taxes cut revenue at first.",
          ],
        },
      ],
    },
    {
      title: "Growth, Unemployment and Inflation",
      body: `### The Three Problems, Measured

**Economic growth** is an increase in an economy's **output of goods and services over time**, measured by **real GDP** — output adjusted for inflation, valued at constant prices. Growth can come from **more total demand**, a **greater quantity of resources**, or **better quality resources**.

A **recession** is a prolonged fall in real GDP (often two consecutive quarters of negative growth), caused by falling total demand, shrinking resource quantity or deteriorating resource quality.

**Unemployment** is when someone in the labour force is **willing, able and available to work but cannot find a job**. **Full employment** is not zero unemployment — it is the absence of **cyclical** unemployment, with frictional and seasonal unemployment remaining.

**Inflation** is a **persistent rise in the general price level**; **deflation** is a persistent fall.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Formulas, types and consequences",
          bullets: [
            "**Unemployment rate = (number unemployed / labour force) x 100**, where the labour force is employed plus unemployed people of working age. The **labour force survey** is how it is measured.",
            "Four types: **frictional** (between jobs, while searching), **structural** (skills or places no longer match the jobs available), **cyclical** (a fall in total demand during a recession), **seasonal** (time of year, e.g. tourism and harvesting).",
            "Unemployment costs the **individual** income, skills and self-respect, **firms** demand and training, **government** tax revenue, and the **economy** output that is gone for good — a point inside the PPC.",
            "Inflation is measured with the **Consumer Prices Index (CPI)**: a fixed **basket** of goods, prices collected and weighted by importance, with the base year index set to **100**. **Inflation rate = (this year CPI minus last year CPI) / last year CPI x 100**.",
            "**Demand-pull** inflation comes from total demand rising faster than output; **cost-push** inflation from rising production costs passed on as higher prices.",
            "Inflation punishes **savers** and **lenders**, whose money buys less, and rewards **borrowers**, who repay in cheaper money. Consumers pay more, firms face uncertainty, exports lose competitiveness, and low-income households suffer most.",
            "**Policies**: demand-pull needs tighter fiscal and monetary policy; cost-push needs supply-side measures and lower business costs. For unemployment — expansionary demand policy (cyclical), training and relocation help (structural), job-match services (frictional), diversification (seasonal).",
          ],
        },
        {
          subTitle: "Worked measurements, and the two sides of growth",
          bullets: [
            "**Unemployment rate**: a labour force of **25 million** with **2 million** out of work gives **2 / 25 x 100 = 8%**.",
            "**CPI**: a basket costing **100** in the base year and **108** this year means inflation of **8%**. Growth: real GDP rising from **600 to 624** (billions of dollars) is **4%**.",
            "**GDP per head**: **600 billion dollars** split between **30 million** people is **20,000 dollars each**.",
            "**Advantages of growth**: rising incomes, more jobs, extra tax revenue without raising any rate, poverty eased, and confidence that attracts investment.",
            "**Disadvantages of growth**: pollution and resource depletion, congestion, longer working hours, and a boom that pulls in imports and re-ignites inflation.",
            "**Consequences of a recession**: consumers buy less, workers face redundancy and wage freezes, firms lose revenue and cancel investment, and the government collects less tax while paying out more benefits.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "**Real** GDP is adjusted for inflation; **nominal** GDP is not. Quoting nominal growth as real growth is an instant mark loss.",
            "GDP **per head** (per capita) is needed before living standards can be compared — total GDP alone hides population size.",
            "Deflation sounds good for shoppers but it delays spending, raises the real value of debt and cuts output.",
            "A rise in the **price level** is not the same as a rise in **one** price. Inflation is general and persistent.",
            "Monetary policy is set by the **central bank**, not the government. Confusing them costs the definition mark.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_4 = chapterFour;
