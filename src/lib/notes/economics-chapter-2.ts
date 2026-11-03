import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelA = imagePanel(IMG, [
  {
    src: "econ2-farmers-market.webp",
    alt: "An open-air food market on a Saturday morning, stall holders behind crates of fruit and vegetables facing shoppers carrying bags, price labels visible on the stalls",
    caption: "A market is any place buyers and sellers meet",
  },
  {
    src: "econ2-demand-graph.webp",
    alt: "A downward-sloping demand curve drawn in blue pencil on graph paper, with a dotted line dropped from one point on the curve to each axis and a pencil resting beside the page",
    caption: "Price moves you along the curve",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "econ2-fish-auction.webp",
    alt: "A harbour fish market at dawn with crates of fresh fish on crushed ice and buyers inspecting the catch, the sea and boats behind",
    caption: "Perishable supply cannot wait for a higher price",
  },
  {
    src: "econ2-blackboard-equilibrium.webp",
    alt: "A classroom chalkboard covered with two crossing straight lines labelled with axes, a small circle drawn at the intersection and a duster resting on the ledge below",
    caption: "One point clears the whole market",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "econ2-petrol-price-board.webp",
    alt: "A petrol station price board showing fuel prices per litre above the pumps on a grey morning, a car waiting at the nozzle",
    caption: "Fuel: demand barely notices the price",
  },
  {
    src: "econ2-sugary-drink-shelf.webp",
    alt: "A supermarket refrigerated shelf stacked with brightly coloured cans of fizzy drinks, a shopper reaching for one",
    caption: "Demerit goods: private benefit, social cost",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "The Allocation of Resources",
  intro: `This is the highest-yield chapter in IGCSE Economics: demand, supply, equilibrium and elasticity carry the diagram marks in Paper 1 and most of the analysis marks in Paper 2.\n\nThe idea examined more than any other is the difference between a **movement along** a curve and a **shift of** the curve.`,
  subheadings: [
    {
      title: "Markets, Demand and Supply",
      body: `### What a Market Is

A **market** is any arrangement where **buyers and sellers interact to exchange goods and services** — a street market, a supermarket, a jobs website, an electricity exchange.

**Demand** is the quantity consumers are **willing and able to buy at each price in a given time period**. Ability matters: wanting a car at zero price is not demand. **Market demand** is the sum of all individual demands, and the curve **slopes down** through the **income effect** and the **substitution effect**.

**Supply** is the quantity firms are **willing and able to produce at each price in a given time period**. It **slopes up**: a higher price means higher revenue, so resources move towards that good.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Along versus shift — the whole topic in one table",
          bullets: [
            "**Change in quantity demanded** = a **movement along** the curve, caused **only by the good's own price**. The words are **extension** (price falls) and **contraction** (price rises).",
            "**Change in demand** = a **shift of the whole curve**, caused by anything else: **income** (normal goods shift right, inferior goods shift left), **wealth**, **interest rates**, **expectations of future prices**, **prices of substitutes and complements**, **tastes**, **population**, **weather**, and **government tax or subsidy**.",
            "Supply shifts right when **costs fall** or conditions improve — **technology**, **subsidies**, **cheaper raw materials or labour**, **more sellers**, **better weather**, **expectations of lower future prices** — and left for the opposite reasons, including **indirect taxes**.",
            "A price change never shifts its own curve.",
          ],
        },
      ],
    },
    {
      title: "Equilibrium, Price Changes and Elasticity",
      body: `### The Price That Clears the Market

**Market equilibrium** is the price at which **quantity demanded equals quantity supplied**, so there is no tendency for the price to change. Read it from a **schedule** (the row where the two columns match) or a **diagram** (where the curves cross).

Above equilibrium, **supply exceeds demand** and a **surplus** pushes the price down; below it, **demand exceeds supply** and a **shortage** pushes the price up. That adjustment is the **price mechanism**, which answers the three basic questions: **what** is produced follows demand and supply, **how** follows the cheapest factor mix, **for whom** is decided by who can pay.

A price change is caused by a shift in either curve, and its consequences fall on **sales, revenue, consumers, producers and the government** — show the shift, then state the new price and quantity.`,
      figure: panelB,
      groups: [
        {
          subTitle: "PED and PES, calculated and interpreted",
          bullets: [
            "**PED = percentage change in quantity demanded / percentage change in price.** Above 1 is **elastic**, below 1 **inelastic**, exactly 1 **unitary**, 0 **perfectly inelastic** (vertical curve), infinity **perfectly elastic** (horizontal curve).",
            "Determinants of PED: **availability of substitutes**, **necessity versus luxury**, **proportion of income spent**, **habit-forming goods**, and **time period** — demand becomes more elastic over time.",
            "PED and revenue run together: a **price rise** with **inelastic** demand raises total revenue; with **elastic** demand it lowers it. That is why governments tax cigarettes and why a good harvest can ruin a farmer.",
            "**PES = percentage change in quantity supplied / percentage change in price.** Determinants: **spare capacity**, **time period**, **perishability**, **stocks**, **ease of factor mobility**, **government policy**. Supply is inelastic in the **short run** and elastic in the **long run**.",
            "Each side decides differently: consumers weigh substitutes, firms set price by elasticity, and governments choose which goods to tax and which to subsidise.",
          ],
        },
      ],
    },
    {
      title: "Market Failure and Intervention",
      body: `### When the Price Mechanism Gets It Wrong

A **market economic system** relies on private firms and consumer sovereignty. Its advantages: **efficiency from competition**, **responsiveness to demand**, **innovation**, and **choice and freedom**. Its disadvantages: **monopoly power**, **inequality**, **missing public goods**, **merit goods under-consumed**, **demerit goods over-consumed**, **environmental damage**, and instability.

**Market failure** is when the free market **misallocates resources**, so output is not at the socially optimal level. The vocabulary pairs are **private / external / social benefit** and **private / external / social cost**, where social equals private plus external. A **mixed economic system** keeps markets and adds government intervention.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Five causes, five fixes",
          bullets: [
            "**Public goods** (street lighting, flood defences, defence) are **non-excludable and non-rival**, so firms will not provide them — nobody can be refused and one person's use leaves it for everyone. Fix: **direct government provision**.",
            "**Merit goods** (education, healthcare) are **under-consumed**; **demerit goods** (tobacco, alcohol, gambling) are **over-consumed**. Fix: **subsidies and provision** for merit goods, **indirect taxes and regulation** for demerit goods.",
            "**External costs** (pollution, congestion) make social cost exceed private cost, so the market **over-produces**; **external benefits** (vaccination, training) make social benefit exceed private benefit, so it **under-produces**. Fix: tax the first, subsidise the second.",
            "**Monopoly** restricts supply to raise price, so consumers pay more and receive less. Fix: **regulation**, or **nationalisation**.",
            "Intervention tools to define, diagram and weigh up: **maximum price** (ceiling below equilibrium: shortage, consumers protected, black markets possible), **minimum price** (floor above equilibrium: surplus, producers or workers protected, resources wasted), **indirect tax** (supply shifts left: price up, quantity down, revenue raised), **subsidy** (supply shifts right: price down, quantity up, cost to the treasury), plus **regulation**, **privatisation**, **nationalisation**, **direct provision** and **quotas** such as fishing or extraction limits. Diagrams of market failure itself are **not required**.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "A maximum price must sit **below** equilibrium to bind; a minimum price must sit **above** it. Drawn the wrong way round, the answer is void.",
            "Surplus means **excess supply**; shortage means **excess demand**. This is the most common Paper 1 error.",
            "Elasticity measures **responsiveness**, not slope, and the sign is ignored, so PED is quoted as a positive number.",
            "\u201cDemand increased\u201d and \u201cquantity demanded increased\u201d are different claims — use the first only for non-price causes.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_2 = chapterTwo;
