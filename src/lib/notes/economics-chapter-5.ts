import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelA = imagePanel(IMG, [
  {
    src: "econ5-school-classroom.webp",
    alt: "A bright primary school classroom with rows of children at wooden desks raising hands, a chalkboard and reading posters on the wall",
    caption: "Years of schooling is half of what development means",
  },
  {
    src: "econ5-rural-clinic.webp",
    alt: "A simple rural health clinic with a nurse checking a patient's blood pressure on a bench under a thatched roof, medical supplies on a shelf behind",
    caption: "Health decides how long a life expectancy figure is",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "econ5-modest-kitchen.webp",
    alt: "A bare kitchen in a small dwelling: a single pot on a simple stove, an empty shelf, a mattress visible through the doorway, lit by a bare bulb",
    caption: "Absolute poverty is a lack of essentials",
  },
  {
    src: "econ5-city-income-contrast.webp",
    alt: "A city street showing tall modern apartment towers at one end and low makeshift rooftops at the other, late afternoon light dividing the two halves",
    caption: "Relative poverty is measured against the norm",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "econ5-population-pyramid.webp",
    alt: "Two back-to-back bar charts drawn in pencil on graph paper forming a population pyramid, wide at the base and narrowing sharply toward the top, with a ruler beside it",
    caption: "A broad base means a young, fast-growing population",
  },
  {
    src: "econ5-census-interview.webp",
    alt: "An enumerator with a clipboard and a shoulder bag interviewing a household outside their home in a densely packed neighbourhood, children and laundry in the background",
    caption: "Births, deaths and migration are counted, not guessed",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Economic Development",
  intro: `Development questions ask you to compare countries without stereotyping them, so the marks go to answers that name an **indicator**, say **what it misses**, and then **explain a policy**.\n\nThis chapter is also where the syllabus rewards real-world examples: pick two or three countries and reuse them across every question.`,
  subheadings: [
    {
      title: "Living Standards and Their Indicators",
      body: `### Two Measures, Two Sets of Flaws

**Economic development** means a sustained rise in output **and** in living standards, with people gaining longer, healthier, better-educated lives — a wider idea than growth alone.

The first indicator is **real GDP per head** (real GDP divided by population): output adjusted for inflation, averaged per person.

The second is the **Human Development Index (HDI)**, a composite of three components: **life expectancy at birth** (a long and healthy life), **education** (mean years of schooling for adults and expected years for children), and **standard of living** measured by **GNI per head** adjusted for purchasing power. HDI runs from 0 to 1, and countries are grouped as **low, medium, high and very high** human development.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Advantages and disadvantages of each indicator",
          bullets: [
            "**Real GDP per head — advantages**: easy to measure, comparable between countries and over time, and correlated with access to goods and services.",
            "**Real GDP per head — disadvantages**: it is an **average**, so it hides **income inequality**; it ignores **hours worked, leisure, poverty, pollution, unpaid and informal work, health and education**, and it counts harmful output (commuting, clean-ups) as good. Exchange rates and price differences distort comparisons.",
            "**HDI — advantages**: it includes **health and education**, so it captures more of what matters, and it is broad enough to rank countries meaningfully.",
            "**HDI — disadvantages**: it still **omits inequality, freedom, safety, environment and happiness**; its components are **weighted arbitrarily**; data can be **outdated or unreliable**; and a high average can hide a deprived minority.",
            "Reasons for differences **within and between** countries in living standards and income distribution: **tax and benefit systems**, **access to education and healthcare**, **discrimination**, **ownership of land and capital**, **union strength and minimum wages**, **sector of work**, **region and urban or rural location**, **gender**, and **corruption or conflict**.",
          ],
        },
      ],
    },
    {
      title: "Poverty and Policies to Reduce It",
      body: `### Two Definitions That Are Often Confused

**Absolute poverty** is a lack of the **basic necessities of life** — enough food, clean water, shelter, clothing, healthcare — measured against a fixed minimum standard. **Relative poverty** is being **poor compared with the rest of society in that country at that time**, usually defined as income below a set proportion of the median.

A country can eliminate absolute poverty while relative poverty rises, because the second measure moves with everyone else's incomes.

**Poverty causes** in the syllabus: **unemployment**, **low wages**, **illness**, **age** (children and older people), and **environmental factors** (drought, floods, poor soil, disease). Note that each cause is also a **consequence** of poverty — that circularity is a strong evaluation point.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Six policies, each with a cost",
          bullets: [
            "**Promoting economic growth** — more jobs and higher incomes, but growth may bypass the poor and damage the environment.",
            "**Improved education** — raises skills, productivity and earnings; slow, and needs public spending.",
            "**Improved healthcare provision** — keeps people working and children learning; costly, and hard to reach rural areas.",
            "**More generous state benefits** — protects the vulnerable immediately, but can create **dependency** and need higher tax.",
            "**Progressive taxation** — redistributes income and funds benefits, but may reduce incentives to work, save and invest.",
            "**National minimum wage** — raises the pay of the lowest-paid directly, but if set too high it can reduce labour demand and raise unemployment.",
          ],
        },
      ],
    },
    {
      title: "Population and Differences in Development",
      body: `### Size, Structure and the Gap Between Countries

**Birth rate** is the number of live births per 1,000 people a year. **Death rate** is the number of deaths per 1,000 a year. **Net migration** is immigrants minus emigrants; **immigration** is people moving in, **emigration** moving out. Population change = (births minus deaths) plus net migration.

Birth rates vary with **access to contraception, women's education and employment, cost of raising children, pension systems, religion and culture, urban or rural living, and healthcare**. Death rates vary with **food supply, sanitation, medical care, war, ageing and disease**. Migration varies with **jobs, wages, conflict, education, climate, and family links**.

**Optimum population** is the size of population that, with the given resources, produces the **highest output and income per head**. Fewer people than that means resources are under-used; more means diminishing returns and falling output per head.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Effects of population change, and the development gap",
          bullets: [
            "**Growth** can supply a large labour force and a big market, but it strains **schools, hospitals, housing, water, sanitation and jobs**, and can lower savings per person and living standards.",
            "**Decline** eases pressure on services but brings **labour shortages, a shrinking market, higher costs for the young to support the old, and closed services**.",
            "**Ageing** (a rising share of dependants who are older) raises healthcare and pension costs and shrinks the workforce; a **young** structure raises education costs and creates a jobs challenge but promises future labour.",
            "**Gender distribution** matters: more women in work expands the labour force and household incomes, while discrimination keeps both down.",
            "International differences in development are explained by differences in **income, productivity, population growth, the size of the primary, secondary and tertiary sectors, saving and investment, education, healthcare, and natural resources**.",
            "Wealthier countries typically have a **large tertiary sector, high productivity, strong investment and better health and education**; poorer ones rely on **primary production, save little, invest little, and lose skilled workers through migration**. Natural resources help but are no guarantee — weak institutions can turn them into conflict and dependence.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Development is **not** growth. Growth is a rise in output; development adds living standards, literacy, health and reduced poverty.",
            "Absolute and relative poverty must be defined separately — using one definition for both loses both marks.",
            "Birth rate and fertility rate are different measures; this syllabus asks for **birth rate per 1,000**.",
            "A falling death rate, not a rising birth rate, explains most of the historical surge in population growth.",
            "Optimum population is about **output per head**, not the largest possible population.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_5 = chapterFive;
