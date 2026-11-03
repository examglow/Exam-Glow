import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/economics";

const panelMarket = imagePanel(IMG, [
  {
    src: "econ2-farmers-market.webp",
    alt: "An open-air food market on a Saturday morning, stall holders behind crates of fruit and vegetables facing shoppers carrying bags, price labels visible on the stalls",
    caption: "A market is any arrangement where buyers and sellers meet",
  },
]);

const panelDemand = imagePanel(IMG, [
  {
    src: "econ2-demand-graph.webp",
    alt: "A downward-sloping demand curve drawn in blue pencil on graph paper, with a dotted line dropped from one point on the curve to each axis and a pencil resting beside the page",
    caption: "Price moves you along the curve, everything else shifts it",
  },
]);

const panelSupply = imagePanel(IMG, [
  {
    src: "econ2-fish-auction.webp",
    alt: "A harbour fish market at dawn with crates of fresh fish on crushed ice and buyers inspecting the catch, the sea and boats behind",
    caption: "Perishable supply cannot wait for a higher price",
  },
]);

const panelEquilibrium = imagePanel(IMG, [
  {
    src: "econ2-blackboard-equilibrium.webp",
    alt: "A classroom chalkboard covered with two crossing straight lines labelled with axes, a small circle drawn at the intersection and a duster resting on the ledge below",
    caption: "One point clears the whole market",
  },
]);

const panelPed = imagePanel(IMG, [
  {
    src: "econ2-petrol-price-board.webp",
    alt: "A petrol station price board showing fuel prices per litre above the pumps on a grey morning, a car waiting at the nozzle",
    caption: "Fuel: demand barely notices the price",
  },
]);

const panelDemerit = imagePanel(IMG, [
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
      title: "2.1 The role of markets in allocating resources",
      body: `### Where Buyers and Sellers Meet

A **market** is any arrangement where **buyers and sellers interact to exchange goods and services**. It does not have to be a place.

The syllabus examples are a **street market**, a **supermarket**, a **jobs website**, an **electricity exchange** and the **market for a factor of production** such as labour or land.

Buyers are the demand side: they vote with their money, and what they are willing and able to pay tells sellers what is worth producing. Sellers are the supply side: they move resources towards whatever pays the best return.

Prices are how the two sides talk to each other, and that conversation is what **allocates resources** across the economy.`,
      figure: panelMarket,
      groups: [
        {
          subTitle: "The four roles you must be able to name",
          bullets: [
            "**Buyers** express demand, compare prices, switch to substitutes when one good gets dear, and decide which products survive.",
            "**Sellers** offer supply, cut costs to stay profitable, and expand or contract as prices move.",
            "**Price** is the signal between them: a rising price reports a shortage, a falling price reports a surplus.",
            "**Profit and loss** are the reward and the punishment, and they are what actually shifts resources in and out of an industry.",
            "**Trap:** a market is an arrangement, not a building. Online platforms and factor markets count.",
            "**Trap:** neither side sets the price alone. Write **interaction of demand and supply**, not **buyers choose the price**.",
          ],
        },
      ],
    },
    {
      title: "2.2 Demand",
      body: `### Wanting, Backed by Money

**Demand** is the quantity of a good that consumers are **willing and able to buy at each price during a given time period**. Ability is inside the definition, so wishing for a car at no price is not demand.

**Individual demand** is one consumer's demand schedule. **Market demand** is the sum of all individual demands at every price, which is why it sits further right and moves more smoothly.

The curve **slopes down** for two reasons: the **income effect** (a lower price leaves purchasing power to spare) and the **substitution effect** (a cheaper good pulls buyers away from its substitutes).`,
      figure: panelDemand,
      groups: [
        {
          subTitle: "Movement along versus shift of the demand curve",
          bullets: [
            "**Extension** (price falls) and **contraction** (price rises) are **movements along** the curve, caused only by the good's **own price**.",
            "**Increase and decrease in demand** are **shifts of the whole curve**, caused by everything else.",
            "Shifters to list: **income** (normal goods shift right, inferior goods shift left), **wealth**, **interest rates**, **expectations of future prices**, **prices of substitutes and complements**, **tastes**, **population**, **weather**, and **government tax or subsidy**.",
            "A **substitute** is used in place of a good (tea and coffee); its price rising shifts your demand right. A **complement** is used with it (phones and cases); its price rising shifts your demand left.",
            "Drawing marks go to labels, not lines: **price on the vertical axis, quantity on the horizontal**, curve named D, an **arrow from D1 to D2** for a shift, and the new equilibrium marked.",
            "**Trap:** never say a price change shifts its own curve.",
          ],
        },
      ],
    },
    {
      title: "2.3 Supply",
      body: `### Producing, Priced by Cost

**Supply** is the quantity of a good that firms are **willing and able to produce and sell at each price during a given time period**. Ability matters again: a factory at full capacity cannot supply more at any price.

**Individual supply** is one firm's schedule; **market supply** is the sum of every firm's output at each price.

The curve **slopes up** because a higher price means higher revenue per unit, so firms move resources towards this good and away from others. Costs rise with output, so a bigger quantity needs a bigger price to justify it.`,
      figure: panelSupply,
      groups: [
        {
          subTitle: "Movement along versus shift of the supply curve",
          bullets: [
            "**Extension and contraction of supply** are **movements along** the curve, caused only by the good's **own price**.",
            "Supply shifts **right** when **costs fall** or conditions improve: **better technology**, **subsidies**, **cheaper raw materials, energy or labour**, **more sellers**, **favourable weather**, **expectations of lower future prices**, and **lower indirect taxes**.",
            "Supply shifts **left** for the opposite reasons: **rising costs**, **indirect taxes**, **fewer sellers**, **bad weather or disease**, and **expectations of higher future prices** (holding stock back).",
            "Perishable goods, such as the fish in the photo, have supply that cannot wait — quantity must be sold today whatever the price.",
            "**Trap:** a change in the price of the good itself is a movement along its supply curve, never a shift.",
            "**Trap:** one firm's output is not market supply; say whose curve you are drawing.",
          ],
        },
      ],
    },
    {
      title: "2.4 Price determination",
      body: `### The Price That Clears the Market

The **price mechanism** is how prices and the profit motive answer the three basic questions. **What** is produced follows demand and supply, **how** is produced goes to the cheapest combination of resources, and **for whom** is decided by who can pay.

**Market equilibrium** is the price at which **quantity demanded equals quantity supplied**, so there is no tendency for the price to change. Read it from a **schedule** (the row where the two columns match) or a **diagram** (where the curves cross).

**Market disequilibrium** is any other price. Above equilibrium, **supply exceeds demand** and a **surplus** pushes the price down. Below it, **demand exceeds supply** and a **shortage** pushes the price up.

A **schedule** is the same information in a table, and it is how Paper 1 tests equilibrium without a diagram:

| Price per kg | Quantity demanded | Quantity supplied |
| ---: | ---: | ---: |
| $2 | 100 | 20 |
| $4 | 80 | 40 |
| $6 | 60 | 60 |
| $8 | 40 | 80 |
| $10 | 20 | 100 |`,
      figure: panelEquilibrium,
      groups: [
        {
          subTitle: "Reading equilibrium and disequilibrium",
          bullets: [
            "Equilibrium is the **$6** row, where 60 kg is demanded and 60 kg supplied. That pair is the **equilibrium price and equilibrium quantity**.",
            "At a price of **4**, buyers want 80 kg and sellers offer only 40 kg — a **shortage of 40 kg**, which bids the price up.",
            "At **8**, sellers offer 80 kg and buyers take 40 kg — a **surplus of 40 kg**, which pushes the price back down.",
            "On a diagram the answer is the crossing point: drop a line to the horizontal axis for quantity, draw one to the vertical axis for price.",
            "The adjustment happens without anyone ordering it. That is why the price mechanism is called the **invisible hand**.",
            "**Trap:** surplus means **excess supply**, shortage means **excess demand**. This is the most common Paper 1 error.",
          ],
        },
      ],
    },
    {
      title: "2.5 Price changes",
      body: `### What Moves the Price, and Who Feels It

A **price change is caused by a shift in either curve**, not by moving along one. Four cases cover every question in this sub-topic, and the quantity always follows the curve that stayed put.

The **consequences** are examined through five victims: **sales, revenue, consumers, producers and the government**. Name all five and the answer is complete without needing extra words.

| Change in market conditions | Curve that shifts | Equilibrium price | Equilibrium quantity |
| --- | --- | --- | --- |
| Income rises, normal good | Demand right | Rises | Rises |
| Substitute becomes cheaper | Demand left | Falls | Falls |
| Cheaper raw materials | Supply right | Falls | Rises |
| Indirect tax on the good | Supply left | Rises | Falls |`,
      groups: [
        {
          subTitle: "Causes, then consequences, in that order",
          bullets: [
            "Work an example: a plant disease hits coffee beans, so **supply shifts left**. Price rises, quantity falls, and sales of the surviving crop move to tea.",
            "Coffee sellers' **revenue rises** only if demand is inelastic, because a big price rise meets a small quantity fall. Consumers lose, importers gain, and the government collects more tax on the dearer product.",
            "A fall in production costs does the reverse: **price down, quantity up**, consumers gain, and the government may collect less if the good is taxed.",
            "Always state **both** the new price and the new quantity. Writing only **the price rises** leaves half the mark on the table.",
            "When two curves shift at once, describe each separately, then say the combined effect is **indeterminate** for whichever variable they disagree about.",
          ],
        },
      ],
    },
    {
      title: "2.6 Price elasticity of demand (PED)",
      body: `### How Hard Do Buyers Flinch?

**PED** measures the **responsiveness of quantity demanded to a change in price**. The formula is **percentage change in quantity demanded divided by percentage change in price**, and the answer is treated as a positive number.

The five values and the curve each one draws: **0 is perfectly inelastic** (vertical), **under 1 inelastic**, **exactly 1 unitary**, **over 1 elastic**, and **infinity perfectly elastic** (horizontal).

Determinants of PED: **availability of substitutes**, **necessity versus luxury**, **proportion of income spent**, **whether the good is habit-forming**, and **time** — demand becomes more elastic the longer buyers have to adjust.`,
      figure: panelPed,
      groups: [
        {
          subTitle: "Calculations, revenue and who decides what",
          bullets: [
            "Work one (prices in dollars): the price rises **8 to 10** (+25%) and quantity falls **200 to 100** (-50%), so **PED = 50 / 25 = 2** — elastic.",
            "Work two: a cigarette price rises **20%** and consumption falls only **4%**, so **PED = 0.2** — inelastic. Revenue **rises**, which is exactly why the tax works.",
            "PED and revenue travel together: with **inelastic** demand a price rise **raises** total revenue, with **elastic** demand it **lowers** it. That is why a good harvest can ruin a farmer.",
            "Divide the **percentage** changes, never the raw figures, and show the two percentage steps in your working.",
            "Significance for each decision-maker: **consumers** weigh substitutes before buying, **firms** set price by elasticity, **workers** in inelastic-demand industries are safer in a downturn, and **governments** tax inelastic goods because the revenue holds.",
            "**Trap:** elasticity measures responsiveness, not slope, and a steep curve is not automatically inelastic without the numbers.",
          ],
        },
      ],
    },
    {
      title: "2.7 Price elasticity of supply (PES)",
      body: `### How Fast Can Producers Answer?

**PES** measures the **responsiveness of quantity supplied to a change in price**: **percentage change in quantity supplied divided by percentage change in price**, interpreted on the same five-value scale as PED.

Determinants of PES: **spare capacity**, **the time period**, **perishability**, **stocks held**, **ease of factor mobility**, and **government policy** such as quotas or subsidies.

Time is the biggest one. Supply is **inelastic in the short run** because factories cannot be built overnight, **elastic in the long run** because firms can build, train and move.`,
      groups: [
        {
          subTitle: "Worked calculation and what the value means",
          bullets: [
            "Work one (prices in dollars): the price of a phone case rises **10 to 12** (+20%) and the firm supplies **500 to 650 units** (+30%), so **PES = 30 / 20 = 1.5** — elastic, because the moulds already exist.",
            "Work two: a mine price doubles but output can only rise 5%, so **PES = 0.25** — inelastic, because new shafts take years.",
            "High PES means a price rise brings extra output quickly, so prices stay stable and shortages heal. Low PES means a demand shock is spent mostly on **price**, not quantity.",
            "Perishable goods and goods needing scarce resources have low PES; mass-produced goods with idle machines have high PES.",
            "**Trap:** PES is about the **producer's** speed of response. PED is about the **buyer's**. Do not swap the formulas.",
          ],
        },
      ],
    },
    {
      title: "2.8 Market economic system",
      body: `### Private Choices, Prices Deciding

A **market economic system** is one where the **factors of production are privately owned**, resources are allocated by the **price mechanism**, and decisions are made by **individuals and firms** with **little or no government intervention**.

Two ideas carry the definition: the **profit motive** (firms produce what earns) and **consumer sovereignty** (buyers, through their spending, decide what gets produced).`,
      groups: [
        {
          subTitle: "The arguments for and against",
          bullets: [
            "**Advantages**: competition drives **efficiency** and keeps costs down, prices signal what buyers want so output **responds quickly**, the profit motive spurs **innovation**, and people keep **freedom of choice** in work and consumption.",
            "**Disadvantages**: **monopoly power** goes unchecked, **inequality** widens because income follows what you own, **public goods are missing**, **merit goods are under-consumed and demerit goods over-consumed**, the environment is damaged for profit, and demand swings bring **instability and unemployment**.",
            "The system answers the three basic questions through prices: what buyers pay for gets made, the cheapest factor mix wins, and output goes to those with income.",
            "**Trap:** calling it **capitalism** or **free enterprise** is acceptable, but the mark is for **private ownership plus the price mechanism plus minimal government**.",
          ],
        },
      ],
    },
    {
      title: "2.9 Market failure",
      body: `### When the Price Mechanism Gets It Wrong

**Market failure** is when the free market **misallocates resources**, so the output of a good is not at the level that is best for society.

The vocabulary comes in three pairs. **Private benefit / cost** is what the buyer or seller personally gains or pays; **external benefit / cost** falls on bystanders; and **social benefit / cost = private + external**.

A **public good** (street lighting, flood defences, defence) is **non-excludable and non-rival**, so nobody can be refused it and one person's use leaves it intact for everyone else. A **merit good** (education, healthcare) is under-consumed if left to the market; a **demerit good** (tobacco, alcohol, gambling) is over-consumed. A **monopoly** is a market with one dominant supplier.`,
      figure: panelDemerit,
      groups: [
        {
          subTitle: "Six causes, six consequences",
          bullets: [
            "**Public goods are not provided at all**, because a firm cannot charge the people who benefit — the **free-rider problem**.",
            "**Merit goods are under-consumed** and **goods with external benefits under-produced** (vaccination, training), because private benefit is smaller than social benefit.",
            "**Demerit goods are over-consumed** and **goods with external costs over-produced** (pollution, congestion), because private cost is smaller than social cost.",
            "**Abuse of monopoly power** restricts supply to raise price, so consumers pay more and receive less.",
            "**Income inequality** is itself a misallocation: the poor go without goods the market only supplies to those who can pay.",
            "Note for the exam: **demand and supply diagrams for market failure are not required**. Definitions, causes and consequences are what score.",
          ],
        },
      ],
    },
    {
      title: "2.10 Mixed economic system",
      body: `### Markets, Plus a Referee

A **mixed economic system** keeps **private enterprise and the price mechanism** while the **government intervenes** to provide public goods, correct market failure and redistribute income. Every real economy is mixed; the only exam question is **how much** intervention.

Intervention is worth defining both ways. It can **fix the market** (tax a demerit good, subsidise a merit good, provide a public good) or **replace it** (run the service itself).`,
      groups: [
        {
          subTitle: "The tools, each with its diagram and its cost",
          bullets: [
            "**Maximum price**: a legal ceiling set **below** equilibrium. Consumers are protected and inflation slows, but a **shortage** appears, quality falls and a **black market** can develop.",
            "**Minimum price**: a legal floor set **above** equilibrium. Producers or workers are protected, but a **surplus** appears and resources are wasted storing or destroying it.",
            "**Indirect tax**: levied per unit, it shifts **supply left**, raising price, cutting quantity and generating **government revenue**. Best on inelastic, demerit goods.",
            "**Subsidy**: a payment per unit that shifts **supply right**, lowering price and raising quantity — the reverse of a tax, and a **cost to the treasury**.",
            "**Regulation**: legal rules on behaviour (safety limits, licensing, price caps). Fast and cheap to run, but costly to inspect and easy to evade.",
            "**Nationalisation**: the state takes over an industry, so public interest can outrank profit — at the cost of bureaucracy and lost incentive. **Privatisation** is the reverse transfer, which usually sharpens incentives but hands a profit-seeking firm a captive customer base.",
            "**Direct provision**: the government simply supplies the good itself (defence, street lighting, state schools). **Quotas** cap a physical quantity, such as fishing days or extraction of a natural resource.",
            "**Advantages of the mixed system**: public goods appear, merit goods get subsidised, demerit goods are taxed, monopoly is checked and the vulnerable are cushioned — without abolishing the market's efficiency.",
            "**Disadvantages**: taxes and rules **blunt incentives**, state provision can be slow and bureaucratic, information is imperfect, and a wrongly set price ceiling or tax **misallocates resources on its own**.",
            "**Trap:** a maximum price must sit **below** equilibrium and a minimum price **above** it. Drawn the wrong way round, the whole answer is void.",
          ],
        },
      ],
    },
  ],
};

export const ECONOMICS_CHAPTER_2 = chapterTwo;
