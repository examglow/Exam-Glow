import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelScarcity = imagePanel(IMG, [
  {
    src: "econ1-empty-shelf.webp",
    alt: "A supermarket aisle with a gap of empty shelf space where a popular product should be, a shopper reaching past it and a price label still fixed to the edge",
    caption: "Scarcity is the reason choices must be made",
  },
]);

const panelFactors = imagePanel(IMG, [
  {
    src: "econ1-land-field.webp",
    alt: "A tractor turning dark soil in a wide open field on a clear morning, hedgerows and distant hills framing the farmland",
    caption: "Land: every natural resource, rewarded with rent",
  },
  {
    src: "econ1-labour-workshop.webp",
    alt: "Several construction workers in hard hats and hi-vis jackets working together on a building site, one carrying a board and another measuring with a level",
    caption: "Labour: human effort, paid a wage",
  },
  {
    src: "econ1-capital-machines.webp",
    alt: "A tidy engineering workshop with metal lathes and machine tools lined up under bright windows, metal shavings on the bench",
    caption: "Capital: man-made aids to production, earning interest",
  },
  {
    src: "econ1-enterprise-bakery.webp",
    alt: "A baker in an apron pulling trays of bread from an oven in a small independent shop early in the morning",
    caption: "Enterprise: the risk and the reward of profit",
  },
]);

const panelPpc = imagePanel(IMG, [
  {
    src: "econ1-ppc-graph.webp",
    alt: "A production possibility curve drawn in pencil on graph paper, bowed outward between a vertical and horizontal axis, with three small dots marked inside the curve, on the curve and outside it",
    caption: "Inside is idle, on is efficient, outside is unattainable",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "The Basic Economic Problem",
  intro: `Economics starts from one awkward fact: wants run out faster than resources do. Everything in this chapter — scarcity, the three questions, factors of production, opportunity cost and the PPC — is vocabulary you can bank marks on in Paper 1.\n\nDefinitions here are worth memorising word for word. A "define" question is two marks for a precise answer and nothing for a long vague one.`,
  subheadings: [
    {
      title: "1.1 The nature of the basic economic problem",
      body: `### Finite Resources, Infinite Wants

The **basic economic problem** is that **resources are finite while wants are infinite**, so every economy must make choices. The technical word for that gap is **scarcity**.

Scarcity is **permanent and universal**. A **shortage** is neither: it is temporary, specific to one good, and appears in Topic 2 when a price is held below equilibrium.

Scarcity bites in the four places exam questions name:
- **consumers** — a fixed budget against unlimited wishes;
- **workers** — one working week and only one career path at a time;
- **producers and firms** — limited money, space and staff against unlimited product ideas;
- **governments** — a finite tax take against unlimited spending demands.`,
      figure: panelScarcity,
      groups: [
        {
          subTitle: "The three basic economic questions",
          bullets: [
            "**What to produce** — which goods and services, and in what quantities.",
            "**How to produce** — which method and which mix of the factors of production.",
            "**Who to produce for** — who in society gets the output, which is really a question about income and prices.",
            "Different systems answer all three differently: a **market system** through prices and profit, a **command or planning system** through government decisions, and a **mixed economy** through both. Topic 2 returns to this.",
            "**Free goods** are not scarce and carry no price — sunlight, air, sea water on a beach. **Economic goods** are scarce, need resources to produce and therefore have a price.",
            "**Define** answers here are one sentence: resources are finite while wants are infinite, so choices must be made. Add one example from the list above to earn the working mark.",
            "**Trap:** free goods still exist and questions ask you to **identify** them, not deny them.",
          ],
        },
      ],
    },
    {
      title: "1.2 Factors of production",
      body: `### Four Inputs, Four Paychecks

**Land, labour, capital and enterprise** are the four factors of production — the resources any economy needs to make anything. Learn each definition and its reward as a pair:

| Factor | What it means | Reward |
| --- | --- | --- |
| **Land** | all **natural resources**, not just farmland: coal, water, wind, oil, forests | **rent** |
| **Labour** | the **human effort**, physical and mental, of workers | **wages** |
| **Capital** | **man-made aids to production** — machines, tools, factories, equipment | **interest** |
| **Enterprise** | the **risk-taking and decision-making** that combines the other three | **profit** |

Capital in economics is never the money on a screen. Money is only used to **buy** capital; the machine itself is the capital.`,
      figure: panelFactors,
      groups: [
        {
          subTitle: "Quantity versus quality of the factors",
          bullets: [
            "**Quantity** means how much of a factor exists. Labour grows with **birth rate and immigration**; land changes with **discovery or exhaustion of resources**; capital changes with **investment and depreciation**; enterprise depends on **education and the culture of risk-taking**.",
            "**Quality** means how productive each unit is. It rises with **education and training**, **better healthcare**, **improved technology** and **skilled management**.",
            "The rewards are a matching set: **land-rent, labour-wages, capital-interest, enterprise-profit**. **Profit is the reward for risk**, not for working.",
            "**Depreciation** wears capital out and **investment** replaces it, so a country can hold its workforce steady and still lose productive capacity.",
            "Expect links between factors: a **larger capital stock** raises **labour productivity**, so the same workers produce more.",
            "**Trap:** the exam asks for **causes of change** in quantity and quality separately. A list of factors without causes answers only half.",
          ],
        },
      ],
    },
    {
      title: "1.3 Opportunity cost",
      body: `### The Real Cost Is What You Give Up

**Opportunity cost** is the **next best alternative forgone** when a choice is made. Not the sum of everything rejected — only the single best option you did not take.

Because resources are scarce, every decision has one. The syllabus asks for **examples in different contexts**, so name the decision-maker and name the forgone alternative in the same sentence.`,
      groups: [
        {
          subTitle: "The influence of opportunity cost on decision-making",
          bullets: [
            "**Consumer** — a cinema ticket costing **10 dollars** gives up the book those 10 dollars would have bought. The cost is the book, not the price.",
            "**Worker** — taking the job in the capital city gives up the second-best offer and the leisure hours not worked.",
            "**Firm** — using the factory to make phones means it cannot make tablets that week; the **forgone tablet profit** is the opportunity cost.",
            "**Government** — funding the hospital means the best alternative project, say a road programme, goes unfunded. Count only that one, never everything else on the list.",
            "Opportunity cost is what makes the three basic questions in 1.1 hard: answering **what** to produce automatically answers **what not** to produce.",
            "**Trap:** say **next best alternative forgone**, not **the alternatives not chosen**. Plural wording loses the mark.",
          ],
        },
      ],
    },
    {
      title: "1.4 Production possibility curve (PPC) diagrams",
      body: `### Drawing the Trade-Off

A **production possibility curve (PPC)** shows the **maximum combinations of two goods an economy can produce when all resources are fully and efficiently employed, given current technology**.

Draw it with **capital goods** on the vertical axis and **consumer goods** on the horizontal, bowed outward. Label both axes, name the curve, and mark the points the question asks about.

The same trade-off appears as a **schedule**, and the numbers are what Paper 1 tests:

| Point | Capital goods | Consumer goods |
| --- | ---: | ---: |
| A | 400 | 0 |
| B | 300 | 200 |
| C | 200 | 350 |
| D | 100 | 450 |
| E | 0 | 500 |

Every point from **A to E is efficient**, because all resources are in use. Move **B to C** and the economy gains **150 more consumer goods** at a cost of **100 capital goods** — that 100 is the opportunity cost.`,
      figure: panelPpc,
      groups: [
        {
          subTitle: "Points, movements and shifts",
          bullets: [
            "**On the curve** = productive efficiency: resources are fully employed, and more of one good means less of the other.",
            "**Inside the curve** = unemployment or inefficiency. The economy could produce more of **both** goods, so resources are idle.",
            "**Outside the curve** = currently **unattainable** with existing resources and technology.",
            "**A movement along the curve** is the opportunity cost made visible, and the amount given up **is** that cost.",
            "**An outward shift** is growth in productive capacity, caused by **more resources** (a larger labour force, discovered raw materials), **better quality resources** (education, technology) or both. **An inward shift** means capacity has fallen — war, disaster, or resource exhaustion.",
            "A point such as **200 capital goods and 200 consumer goods** is attainable but wasteful, because the schedule already offers 350 consumer goods at that level of capital output.",
            "**Trap:** an outward PPC shift is **growth in capacity**, not a recovery from recession. A recovery moves an economy from inside the curve back towards it.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_1 = chapterOne;
