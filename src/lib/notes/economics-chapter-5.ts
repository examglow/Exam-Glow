import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelHdi = imagePanel(IMG, [
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

const panelPoverty = imagePanel(IMG, [
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

const panelPopulation = imagePanel(IMG, [
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
      title: "5.1 Living standards",
      body: `### Two Measures, Two Sets of Flaws

**Economic development** means a sustained rise in output **and** in living standards, with people gaining longer, healthier, better-educated lives. It is a wider idea than growth alone, and confusing the two is the first trap of this chapter.

The first indicator is **real GDP per head**: real GDP divided by population, so output is adjusted for inflation and averaged per person.

The second is the **Human Development Index (HDI)**, built from three components: **life expectancy at birth** (a long and healthy life), **education** (mean years of schooling for adults plus expected years for children), and **standard of living** measured by **GNI per head adjusted for purchasing power**. HDI runs from 0 to 1, and countries are grouped as **low, medium, high and very high** human development.`,
      figure: panelHdi,
      groups: [
        {
          subTitle: "Advantages and disadvantages of each indicator",
          bullets: [
            "**Real GDP per head — advantages**: easy to measure, comparable between countries and over time, and correlated with access to goods and services.",
            "**Real GDP per head — disadvantages**: it is an **average**, so it hides **income inequality**; it ignores **hours worked, leisure, poverty, pollution, unpaid and informal work, health and education**, and it counts harmful output such as commuting and clean-ups as good. Exchange rates and price differences distort comparisons.",
            "**HDI — advantages**: it includes **health and education**, so it captures more of what matters, and it ranks countries on a broad basis.",
            "**HDI — disadvantages**: it still **omits inequality, freedom, safety, the environment and happiness**; its three components are **weighted arbitrarily**; data can be **outdated or unreliable**; and a high average can hide a deprived minority.",
            "**Real GDP per head** is a division, not a mystery: real GDP of **600 billion dollars** over **30 million** people is **20,000 dollars**. Compare countries only after adjusting for **price differences (purchasing power)**, because a dollar buys very different baskets.",
            "The two indicators can disagree, and that is the analysis mark: a country with **oil wealth** can show high GDP per head while most of its people lack schooling, so its **HDI ranks lower than its income**. The reverse case is modest income with long lives and near-universal schooling.",
          ],
        },
        {
          subTitle: "Why living standards and income distribution differ",
          bullets: [
            "**Within** a country: **tax and benefit systems**, **access to education and healthcare**, **discrimination**, **ownership of land and capital**, **union strength and the minimum wage**, **sector of work**, **region and urban or rural location**, **gender**, and **corruption or conflict**.",
            "**Between** countries: the same list, plus differences in **average productivity, savings and investment, and the structure of the economy**.",
            "An average can rise while distribution worsens, so a question about living standards needs **both** the figure and who holds it.",
          ],
        },
      ],
    },
    {
      title: "5.2 Poverty",
      body: `### Two Definitions That Are Often Confused

**Absolute poverty** is a lack of the **basic necessities of life** — enough food, clean water, shelter, clothing, healthcare — measured against a fixed minimum standard. **Relative poverty** is being **poor compared with the rest of society in that country at that time**, usually defined as income below a set proportion of the median.

A country can eliminate absolute poverty while relative poverty rises, because the second measure moves with everyone else's incomes.

The syllabus causes of poverty are **unemployment**, **low wages**, **illness**, **age** (children and older people), and **environmental factors** such as drought, floods, poor soil and disease. Each cause is also a **consequence** of poverty, and that circularity is a strong evaluation point.`,
      figure: panelPoverty,
      groups: [
        {
          subTitle: "Six policies, each with a cost",
          bullets: [
            "**Promoting economic growth** — more jobs and higher incomes, but growth may bypass the poor and damage the environment.",
            "**Improved education** — raises skills, productivity and earnings; slow, and needs public spending.",
            "**Improved healthcare provision** — keeps people working and children learning; costly, and hard to deliver in rural areas.",
            "**More generous state benefits** — protects the vulnerable immediately, but can create **dependency** and needs higher tax.",
            "**Progressive taxation** — redistributes income and funds the benefits, but may reduce the incentive to work, save and invest.",
            "**National minimum wage** — raises the pay of the lowest-paid directly, but set too high it can reduce labour demand and raise unemployment.",
            "**The poverty cycle** links all six: low income leads to poor nutrition, no school fees and no medical care, which means low productivity, which means low wages, which means low income again. Name one link and the policy that cuts it, and the answer turns analytical instead of descriptive.",
            "**Trap:** absolute and relative poverty must be defined separately. Using one definition for both loses both marks.",
          ],
        },
      ],
    },
    {
      title: "5.3 Population",
      body: `### Size and Structure

**Birth rate** is live births per 1,000 people a year. **Death rate** is deaths per 1,000 people a year. **Immigration** is people moving in, **emigration** moving out, and **net migration** is immigrants minus emigrants.

Population change = **(births - deaths) + net migration**.

**Birth rates** vary with **access to contraception, women's education and employment, the cost of raising children, pension systems, religion and culture, urban or rural living, and healthcare**. **Death rates** vary with **food supply, sanitation, medical care, war, ageing and disease**. **Migration** varies with **jobs, wages, conflict, education, climate and family links**.

**Optimum population** is the size of population that, with the resources available, produces the **highest output and income per head**. Fewer people means resources are under-used; more means diminishing returns and falling output per head.`,
      figure: panelPopulation,
      groups: [
        {
          subTitle: "Effects of changes in size and structure",
          bullets: [
            "**Growth** can supply a large labour force and a big market, but it strains **schools, hospitals, housing, water, sanitation and jobs**, and can lower savings per person and living standards.",
            "**Decline** eases pressure on services but brings **labour shortages, a shrinking market, higher costs for the young to support the old, and closed services**.",
            "**Ageing** — a rising share of older dependants — raises healthcare and pension costs and shrinks the workforce. A **young** structure raises education costs and creates a jobs challenge, but promises future labour.",
            "**Gender distribution** matters: more women in paid work expands the labour force and household incomes, while discrimination keeps both down.",
            "A falling **death rate**, not a rising birth rate, explains most of the historical surge in population growth — the classic Paper 1 distractor.",
            "**Trap:** birth rate and fertility rate are different measures. This syllabus asks for **birth rate per 1,000**.",
          ],
        },
      ],
    },
    {
      title: "5.4 Differences in economic development between countries",
      body: `### Why Some Countries Are Poorer

International differences in development are explained by differences in **income, productivity, population growth, the size of the primary, secondary and tertiary sectors, saving and investment, education, healthcare, and natural resources**.

Wealthier countries typically run a **large tertiary sector, high productivity, strong investment and good health and education**. Poorer ones rely more on **primary production, save little, invest little, and lose skilled workers through migration**.

Natural resources help but are no guarantee — weak institutions can turn them into conflict and dependence instead of development.`,
      groups: [
        {
          subTitle: "Causes, and then the consequences",
          bullets: [
            "**Low income** means low saving, so investment and growth stay weak — the demand side of the gap.",
            "**Low productivity** comes from poor training, old machinery and weak infrastructure, so unit costs stay high and exports lose.",
            "**Fast population growth** dilutes GDP per head and swallows the gains from growth in new dependants.",
            "**Primary dependence** exposes a country to commodity price swings and offers few high-wage jobs.",
            "**Low saving and investment** keep capital stock thin; **weak education and healthcare** keep labour quality low.",
            "**Consequences** to write in an answer: a **poverty cycle**, dependence on aid or borrowing, **skilled-worker emigration**, poor infrastructure, political instability, and being stuck at the bottom of world value chains.",
            "**Counter-examples earn marks**: countries with few resources but strong education and institutions developed quickly, while resource-rich countries with corruption did not. Say that resources are an opportunity, not a cause.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_5 = chapterFive;
