import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/business-studies";

const panelValue = imagePanel(IMG, [
  {
    src: "bus1-adding-value.webp",
    alt: "A leather workshop bench where a plain rolled hide sits at one end and a finished stitched handbag with a branded tag sits at the other, awls, thread and a price ticket between them",
    caption: "Added value = selling price minus the cost of the inputs",
  },
  {
    src: "bus1-opportunity-choice.webp",
    alt: "A small business owner standing at a fork in a farm track holding two clipboards, one path leading to a new machine shed and the other to a market stall",
    caption: "Every purchase has a next-best alternative left behind",
  },
]);

const panelLiability = imagePanel(IMG, [
  {
    src: "bus1-sole-trader-stall.webp",
    alt: "One trader serving customers alone at a small fruit stall in a market, hand-written price cards and a cash box on the trestle table",
    caption: "Sole trader: all the profit, all the liability",
  },
  {
    src: "bus1-plc-tower.webp",
    alt: "A glass corporate head-office tower with a crowded share-trading floor visible through the lobby windows and a queue of commuters outside",
    caption: "Public limited company: shares sold to the public, liability limited",
  },
]);

const panelStakeholders = imagePanel(IMG, [
  {
    src: "bus1-boardroom-decision.webp",
    alt: "A boardroom with directors around a long table studying a printed chart that trends downward, one pointing at a figure while another takes notes",
    caption: "Owners want costs cut before the year end",
  },
  {
    src: "bus1-picket-line.webp",
    alt: "Factory employees standing outside the gates holding hand-lettered cards while a manager watches from the doorway, morning light and parked delivery vans behind",
    caption: "Employees want those same jobs protected",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "Understanding Business Activity",
  intro: `This is the vocabulary chapter, and Paper 1 spends marks on it early: define, identify, outline. Get the terms exact and the rest of the subject gets easier.\n\nTwo habits earn the most marks here. Name the **business in the question** in every answer, and always give **both sides** of an "advantages and disadvantages" question.`,
  subheadings: [
    {
      title: "1.1 Business activity",
      body: `### Needs, Wants and the Four Inputs

**Business activity** is the production of goods and services to **satisfy consumer needs and wants while making a profit**. Doing that means combining the four **factors of production**.

| Factor | What it is | Reward |
| --- | --- | --- |
| **Land** | natural resources — farmland, minerals, water, forests | rent |
| **Labour** | the human effort of workers | wage |
| **Capital** | man-made aids to production — machines, tools, buildings | interest |
| **Enterprise** | the risk-taking and decision-making that combines the other three | profit |

**Opportunity cost** is the **next-best alternative given up** when a choice is made. A business that spends its savings on a machine gives up the advertising that money could have bought.`,
      figure: panelValue,
      groups: [
        {
          subTitle: "Adding value — the concept students most often mis-state",
          bullets: [
            "**Added value** is the **difference between the selling price of a product and the cost of the raw materials and other bought-in inputs used to make it**. It is not the same as profit, which is left after **all** costs, including wages, rent and marketing.",
            "Work it: wood and fittings cost **40 dollars**, the finished chair sells for **100 dollars**, so added value is **60 dollars**. If the workshop also spends 35 dollars on other costs, profit is **25 dollars**.",
            "**How to increase added value**: build a stronger **brand**, improve **design and quality**, use **skilled labour or better technology**, sell **direct to customers** instead of to a wholesaler, offer **after-sales service**, and **reduce input costs** by buying cheaper or in bulk.",
            "**Trap:** a higher selling price only raises added value if input costs do not rise by as much. Say which side of the gap moved.",
          ],
        },
        {
          subTitle: "Why scarcity still matters in Business",
          bullets: [
            "Business exists because **wants are unlimited and resources are limited**, so choices must be made about what to produce, how, and for whom.",
            "Every business decision carries opportunity cost, and that is why **costs, prices and investment appraisals** appear in Topics 4 and 5.",
          ],
        },
      ],
    },
    {
      title: "1.2 Economic sectors",
      body: `### Where a Business Sits in the Economy

The three sectors of activity: **primary** extracts raw materials (farming, fishing, mining, forestry), **secondary** manufactures and builds (car factory, bakery, construction), **tertiary** provides services (retail, banking, transport, tourism, education).

The **private sector** is owned and run by **individuals and firms**, usually for profit. The **public sector** is owned and run by **central or local government** to provide services such as schools, hospitals, roads and defence.

A single product crosses sectors: cotton (primary) → spun into fabric (secondary) → sold in a shop (tertiary). Most businesses today sit in the **tertiary sector**, and services are the fastest-growing part of it in richer economies.`,
      groups: [
        {
          subTitle: "What to say about each sector",
          bullets: [
            "**Primary** output depends on **weather, land quality and world commodity prices**; jobs are often seasonal and pay is usually the lowest of the three.",
            "**Secondary** output depends on **machines, energy and skilled workers**; it gains from economies of scale and loses when factories move abroad.",
            "**Tertiary** output depends on **customer numbers, location and technology**; it is labour-intensive and grows with rising incomes.",
            "**Public sector** businesses exist to serve the public and are funded by **taxation**, so they are not judged on profit. A **privatisation** moves a business from public to private ownership; **nationalisation** moves it the other way.",
            "**Trap:** **“primary, secondary, tertiary”** describes **what the business does**; “private and public” describes **who owns it**. Answer whichever the question asks.",
          ],
        },
      ],
    },
    {
      title: "1.3 Enterprise, business growth and size",
      body: `### The Entrepreneur, the Plan and the Measure

An **entrepreneur** is the person who **takes the risk** of setting up and running a business, combining land, labour and capital to make a profit.

A **business plan** is a written statement of what the business intends to do and how it will do it. Its key elements are the **overview or summary**, **objectives**, **resources**, **market research**, **marketing**, **finance**, **people**, and **operations**.`,
      groups: [
        {
          subTitle: "Entrepreneurs, plans and government help",
          bullets: [
            "**Characteristics of successful entrepreneurs**: **risk-taking**, **innovative**, **confident**, **committed and hard-working**, **organised**, **decisive**, **creative**, **self-motivated**, and **able to learn from failure** — always name two or three and link them to the situation in the question.",
            "**Why a business plan matters**: it **reduces risk** by forcing research, sets **objectives and direction**, keeps the owner **focused and coordinated**, and is what **banks and investors ask to see** before lending.",
            "**Why governments support start-ups**: to create **jobs**, grow **GDP and tax revenue**, keep deprived areas **active**, reduce dependence on imports, and encourage **innovation**. **How**: **grants**, **advice and mentoring**, **low-cost loans**, **training schemes**, low-rent business units, and simplified registration.",
          ],
        },
        {
          subTitle: "Measuring size — four methods and their problems",
          bullets: [
            "**Methods**: **number of people employed**, **value of output or sales turnover**, **volume of output or sales**, and **capital employed**.",
            "**Profit is NOT a method** of measuring business size — a small profitable business can be smaller than a large loss-making one.",
            "**Problems**: the methods **disagree with each other**; a **supermarket** employs fewer people per unit of sales than a **hairdresser**, so comparisons across industries mislead; **value** comparisons need price-level adjustment; **volume** ignores quality; and **multi-national or merged** businesses make one figure meaningless.",
          ],
        },
        {
          subTitle: "Growth — why, how, and what goes wrong",
          bullets: [
            "**Why owners want to grow**: to earn **more profit**, gain **economies of scale** and lower average costs, increase **market share and power**, spread **risk** across products and places, improve **survival chances**, and for the owner's **prestige**.",
            "**Internal (organic) growth**: develop **new products**, enter **new markets** or new countries, open **more outlets**, increase **output and advertising**, and improve **online reach**. It is slower and safer but limited by the firm's own resources.",
            "**External growth**: a **merger** joins two firms by agreement; a **takeover** (acquisition) is one firm buying control of another. **Horizontal integration** merges firms at the **same stage** producing the **same product** (two coffee chains). **Vertical integration** merges firms at **different stages**: **forward** toward the customer (a manufacturer buying shops), **backward** toward the supplier (a bakery buying a flour mill). A **conglomerate** buys an unrelated business.",
            "**Advantages of external growth**: fast, immediate market share, economies of scale, and rivals removed. **Disadvantages**: **expensive**, may need debt, **clash of cultures**, **communication and coordination problems**, possible **monopoly or regulator block**, and diseconomies of scale.",
            "**Problems of growth in general**: management stretched, poor communication, need for **extra finance**, larger **workforce and premises**, slower decisions, and **loss of quality or personal service**.",
            "**Why some businesses stay small**: a **niche** market with limited demand, **personal service** lost if it grows, **local** customers only, **limited finance**, the owner **prefers control and independence**, the industry suits small units (hairdressers, cafés), **competition** is already fierce, or growth would raise **tax and legal** burdens.",
            "**Success or failure** turns on **management skills**, **availability of finance** and cash, **suitability of the product**, **demand for it**, **changes in the economy** (recession, interest rates), the **level of competition**, **poor planning**, weak **marketing**, and **costs outrunning revenue**.",
          ],
        },
      ],
    },
    {
      title: "1.4 Types of business organisation",
      body: `### Ownership, Liability and Finance

The four main types are the **sole trader**, the **partnership**, the **private limited company (Ltd)** and the **public limited company (plc)**. What separates them is **who owns it**, **who is liable for its debts**, and **whether shares can be sold to the public**.

**Unlimited liability** means the owner is responsible for **all** the business's debts, even with personal possessions. **Limited liability** means owners can lose only the **value of their investment** in the business.`,
      figure: panelLiability,
      groups: [
        {
          subTitle: "The four types side by side",
          bullets: [
            "**Sole trader** — one owner, **unlimited liability**, keeps **all the profit**, decisions made instantly, easy and cheap to set up. Weaknesses: **personal debt risk**, **limited capital**, no continuity if the owner dies, and the owner carries **all the risk and long hours**.",
            "**Partnership** — **2 to 20** owners sharing capital, skills and decisions by agreement; **unlimited liability** (except in a limited-liability partnership). Strengths: more finance and ideas than a sole trader, shared workload. Weaknesses: **disagreements**, **profits shared**, **one partner can bind the firm**, slower decisions.",
            "**Private limited company (Ltd)** — owned by **shareholders**, sold **privately** (family, friends, venture capital), shares **cannot be advertised to the public**, **limited liability**, separate legal identity, and accounts are **publicly filed**. Weaknesses: profit taken as **dividends**, decisions need the board, more **paperwork and cost** to set up.",
            "**Public limited company (plc)** — shares **sold on a stock exchange**, so it can raise **huge capital** and enjoys **limited liability** and continuity. Weaknesses: **most expensive and complex** to form, **published accounts**, threat of **takeover**, and possible **conflict between shareholders and the board**.",
            "**Recommendation questions**: match the type to the facts — a single hairdresser with borrowed savings is a **sole trader**; two chefs with complementary skills and capital are a **partnership**; a growing manufacturer wanting outside money without a stock-market listing is a **Ltd**; a huge infrastructure firm needing public capital is a **plc**. Give a **reason from the case**, never a preference.",
          ],
        },
        {
          subTitle: "Franchises, joint ventures and social enterprises",
          bullets: [
            "A **franchise** is an agreement where the **franchisor** sells the right to use its **brand, products and business method** and the **franchisee** pays an **initial fee and a share of revenue**.",
            "**Franchisee advantages**: a **known brand**, proven method, **training and support**, buying power, and a **lower failure rate**. **Disadvantages**: **fees and royalty costs**, little freedom over products, pricing or suppliers, and reputational damage caused by **other outlets**.",
            "**Franchisor advantages**: fast growth using **other people's capital and labour**, royalty income, and brand reach. **Disadvantages**: **less direct control**, risk of a **poor outlet damaging the brand**, complex **legal agreements**, and shared profits.",
            "A **joint venture** is two firms setting up a **new business together**, sharing cost, risk and expertise. **Advantages**: shared risk, combined skills and finance, and access to a foreign market through a local partner. **Disadvantages**: **disagreements and culture clash**, shared profits, possible **leakage of know-how**, and it collapses if one partner withdraws.",
            "A **social enterprise** trades to achieve a **social or environmental mission** and reinvests most of its profit; it is judged on **impact as well as income**. **Public corporations** are state-owned companies providing a service such as rail or energy.",
          ],
        },
      ],
    },
    {
      title: "1.5 Business objectives and stakeholder objectives",
      body: `### What the Business Is Trying to Do — and Who Disagrees

A **business objective** is a **goal the business aims to achieve over a period of time**. Most businesses hold **several at once**: **survival**, **profit**, **growth**, and **market share**, plus service, ethical or environmental aims.

A **stakeholder** is anyone who is **affected by**, or can **affect**, the business's decisions.`,
      figure: panelStakeholders,
      groups: [
        {
          subTitle: "The four examinable objectives",
          bullets: [
            "**Survival** — staying in business at all; the objective in a **recession** or a new firm's first year. It comes first because nothing else matters if the firm closes.",
            "**Profit** — revenue exceeding total costs; needed to **reward risk, finance growth, and attract investors**.",
            "**Growth** — getting bigger in output, revenue or number of outlets; often measured by **market share**.",
            "**Market share** — the business's **share of the total market sales value**, calculated in Topic 3. Rising share means **greater power and brand recognition** even if sales fall with a shrinking market.",
            "**Why objectives matter**: they give **direction and focus**, coordinate decisions, **motivate staff**, provide a **benchmark to measure performance** against, and shape the marketing mix.",
          ],
        },
        {
          subTitle: "Stakeholder objectives and the conflicts",
          bullets: [
            "**Internal — owners** want profit, dividends, growth and control. **Managers** want high pay, status, promotion and a successful firm to run. **Employees** want good pay and conditions, job security, and safe work.",
            "**External — customers** want quality, low prices, choice and service. **Suppliers** want orders and to be **paid quickly and in full**. **Lenders and banks** want interest and repayment on time plus a solvent borrower. **Government** wants tax revenue, jobs, legal compliance and exports. **Local community** wants jobs, safe operations, and minimum congestion or pollution.",
            "**Conflict 1 — owners' profit vs employees' pay**: raising wages lifts costs and cuts profit, so one side's gain is the other's loss.",
            "**Conflict 2 — customers' low prices vs suppliers and employees**: pressure on prices pushes down supplier payments and wages.",
            "**Conflict 3 — growth vs community and environment**: expansion means more traffic, pollution and land use, inviting government regulation.",
            "**Conflict 4 — reinvesting vs paying dividends or tax**: profit spent on growth is profit not paid out — and profit not reported means tax not paid.",
            "**How to answer a conflict question**: name the **two groups**, say what **each wants**, explain why the decision **pleases one and angers the other**, then give a **judgement with a reason** for the marks at the end.",
          ],
        },
      ],
    },
  ],
};

export const BUSINESS_STUDIES_CHAPTER_1 = chapterOne;
