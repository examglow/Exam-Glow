import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelA = imagePanel(IMG, [
  {
    src: "econ1-ppc-graph.webp",
    alt: "A production possibility curve drawn in pencil on graph paper, bowed outward between a vertical and horizontal axis, with three small dots marked inside the curve, on the curve and outside it",
    caption: "Inside is idle, on is efficient, outside is unattainable",
  },
  {
    src: "econ1-empty-shelf.webp",
    alt: "A supermarket aisle with a gap of empty shelf space where a popular product should be, a shopper reaching past it and a price label still fixed to the edge",
    caption: "Scarcity is the reason shelves go empty",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "econ1-land-field.webp",
    alt: "A tractor turning dark soil in a wide open field on a clear morning, hedgerows and distant hills framing the farmland",
    caption: "Land: every natural resource",
  },
  {
    src: "econ1-labour-workshop.webp",
    alt: "Several construction workers in hard hats and hi-vis jackets working together on a building site, one carrying a board and another measuring with a level",
    caption: "Labour: human effort, paid a wage",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "econ1-capital-machines.webp",
    alt: "A tidy engineering workshop with metal lathes and machine tools lined up under bright windows, metal shavings on the bench",
    caption: "Capital: man-made aids to production",
  },
  {
    src: "econ1-enterprise-bakery.webp",
    alt: "A baker in an apron pulling trays of bread from an oven in a small independent shop early in the morning",
    caption: "Enterprise: the risk and the reward",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "The Basic Economic Problem",
  intro: `Economics starts from one awkward fact: wants run out faster than resources do. Everything in this chapter — scarcity, the three questions, factors of production, opportunity cost and the PPC — is vocabulary you can bank marks on in Paper 1.\n\nDefinitions here are worth memorising word for word. A "define" question is two marks for a precise answer and nothing for a long vague one.`,
  subheadings: [
    {
      title: "Scarcity, Choice and the Three Questions",
      body: `### Finite Resources, Infinite Wants

The **basic economic problem** is that **resources are finite but wants are infinite**. The technical word for that gap is **scarcity**, and it is why every economy must make choices.

Scarcity bites in four places, and exam questions name them:
- **consumers** — a fixed budget against unlimited wishes;
- **workers** — a fixed working week and only one career path at a time;
- **producers/firms** — limited money, space and staff against unlimited product ideas;
- **governments** — a finite tax take against unlimited spending demands.

**Free goods** are not scarce and have no price — sea water on a beach, sunlight, air. **Economic goods** are scarce, need resources to produce and therefore carry a price. Almost everything in a question is an economic good; the distinction is a classic two-mark trap.`,
      figure: panelA,
      groups: [
        {
          subTitle: "The three basic economic questions",
          bullets: [
            "**What to produce** — which goods and services, and in what quantities.",
            "**How to produce** — which method and which mix of the factors of production.",
            "**Who to produce for** — who in society gets the output, which is really a question about income and prices.",
            "Different economic systems answer all three differently: a **market system** answers them through prices and profit, a **command/planning system** through government decisions, and a **mixed economy** through both. Topic 2 and Topic 4 come back to this.",
          ],
        },
      ],
    },
    {
      title: "Factors of Production and Their Rewards",
      body: `### Four Inputs, Four Paychecks

**Land, labour, capital and enterprise** are the four factors of production — the resources any economy needs to make anything. Learn each definition and its reward as a pair:

| Factor | What it means | Reward |
| --- | --- | --- |
| **Land** | all **natural resources**, not just farmland: coal, water, wind, oil, forests | **rent** |
| **Labour** | the **human effort**, physical and mental, of workers | **wages** |
| **Capital** | **man-made aids to production** — machines, tools, factories, equipment | **interest** |
| **Enterprise** | the **risk-taking and decision-making** that combines the other three | **profit** |

Capital in economics is never the money on a screen. Money is only used to **buy** capital; the machine itself is the capital.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Quantity versus quality",
          bullets: [
            "**Quantity of a factor** = how much of it there is. Causes of change: **birth rate and immigration** for labour, **exhaustion or discovery of resources** for land, **investment and depreciation** for capital.",
            "**Quality of a factor** = how productive each unit is. Causes of change: **education and training**, **healthcare**, **better technology**, and **more skilled management**.",
            "A country with the same number of workers but better training has a higher **quality of labour** — and that is a growth story, which Topic 4 (supply-side policy) picks up.",
            "Expect questions that ask you to explain how a change in one factor affects another: a **higher capital stock** raises **labour productivity**, so the same workforce produces more.",
          ],
        },
      ],
    },
    {
      title: "Opportunity Cost and the PPC",
      body: `### The Real Cost Is What You Give Up

**Opportunity cost** is the **next best alternative forgone** when a choice is made. Not the sum of everything rejected — only the single best one you did not take.

It drives every decision-maker in the syllabus: a consumer choosing between two goods, a worker choosing between jobs, a firm choosing which product line to fund, a government choosing between hospitals and roads.

A **production possibility curve (PPC)** shows the **maximum combinations of two goods an economy can produce when all resources are fully and efficiently employed, given current technology**. Draw it with the axes labelled "capital goods" and "consumer goods" and the curve bowed outward.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Reading the four PPC situations",
          bullets: [
            "**A point on the curve** = productive efficiency: all resources fully employed, and producing more of one good means less of the other.",
            "**A point inside the curve** = unemployment or inefficiency: the economy could produce more of **both** goods, so the resources are not being used.",
            "**A point outside the curve** = currently **unattainable** with existing resources and technology.",
            "**A movement along the curve** = the opportunity cost made visible: gaining more consumer goods means giving up capital goods, and the amount given up **is** the opportunity cost.",
            "**An outward shift** = economic growth: caused by **more resources** (larger labour force, discovered raw materials), **better quality resources** (education, technology) or **both**. An inward shift means the productive capacity has fallen, e.g. war, disaster or resource exhaustion.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Say **next best alternative forgone**, not “the alternatives not chosen”. Plural wording loses the mark.",
            "A point **inside** the PPC is not impossible — it is inefficient. Only points **outside** are unattainable.",
            "An outward PPC shift is **growth in productive capacity**; it is not the same as a recovery from recession, which moves an economy from inside the curve back towards it.",
            "Capital goods are **machines**, not cash. A question about the “capital” factor means factories and equipment.",
            "Free goods still exist — the exam asks you to **identify** them, and air or beach sand are the standard answers.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_1 = chapterOne;
