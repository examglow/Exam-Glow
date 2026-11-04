import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/business-studies";

const panelMarkets = imagePanel(IMG, [
  {
    src: "bus3-niche-workshop.webp",
    alt: "A small bespoke workshop where a craftsman hand-fits a custom running shoe to one customer's foot, shelves of unusual sizes and colours behind a single counter",
    caption: "Niche: a narrow segment, high price, few rivals",
  },
  {
    src: "bus3-mass-market-aisle.webp",
    alt: "A huge supermarket aisle of identical boxed products stacked floor to ceiling under bright lights, with a long queue at checkout and a trolley passing",
    caption: "Mass: standardised goods, low price, heavy competition",
  },
]);

const panelResearch = imagePanel(IMG, [
  {
    src: "bus3-street-survey.webp",
    alt: "A researcher with a clipboard and a tablet asking a shopper to answer questions outside a shopping centre entrance, a stack of printed questionnaires in her tote bag",
    caption: "Primary research: ask, observe, run a focus group",
  },
  {
    src: "bus3-focus-group.webp",
    alt: "Six people seated around a table discussing a product prototype while a moderator writes on a flipchart and two observers watch through a mirror",
    caption: "Sampling lets a few answers stand for many",
  },
]);

const panelMix = imagePanel(IMG, [
  {
    src: "bus3-life-cycle-board.webp",
    alt: "A meeting-room whiteboard with a hand-drawn product life cycle curve rising then plateauing and falling, four stages labelled in marker and an arrow extending the flat top of the curve",
    caption: "Introduction, growth, maturity, decline — and extension",
  },
  {
    src: "bus3-skimming-shelf.webp",
    alt: "An electronics display table showing a sleek new smartphone under a spotlight with a high price card, next shelf down an older model with a reduced clearance label",
    caption: "Skimming starts high; penetration starts low",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Marketing",
  intro: `Marketing answers are marked on **application**, so a textbook definition scores almost nothing on its own. Name the **product and the customers in the case** in every paragraph.\n\nThe 4Ps are one question per paper, usually as a recommendation. Learn two advantages and two disadvantages for **each** P, and the choice writes itself.`,
  subheadings: [
    {
      title: "3.1 Marketing and the market",
      body: `### Finding the Customer, Then Keeping Them

**Marketing** is the process of **identifying and satisfying customer needs profitably**. Its role covers five things: **identifying customer needs**, **satisfying them**, **maintaining customer loyalty**, **building customer relationships**, and **anticipating changes in customer needs** before rivals do.

The **market** for a product is the **total sales of that product to all customers**, usually measured in value over a year.`,
      figure: panelMarkets,
      groups: [
        {
          subTitle: "How to calculate market share",
          bullets: [
            "**Market share = (sales revenue of the business / total sales revenue of the whole market) x 100**, expressed as a **percentage**.",
            "Work it: the firm's revenue is **3 million dollars** in a market worth **20 million dollars**, so market share is **3 / 20 x 100 = 15%**.",
            "**Sales rising but share falling** means the market grew faster than the business — a classic data-response trap. Always compare the **rate of change**, not the level.",
            "Rising share brings **greater market power, brand recognition, economies of scale and pricing influence**; measuring it needs reliable data on the **whole** market, which is often expensive or missing.",
          ],
        },
        {
          subTitle: "Why spending patterns change and markets get crowded",
          bullets: [
            "**Why consumer spending patterns change**: rising or falling **incomes**, **inflation** and higher interest rates, **fashion and trends**, new **technology** making old goods obsolete, **season and weather**, **health and environmental awareness**, **ageing of the population**, **consumer confidence** about jobs, and **government policy** such as taxes on sugar or fuel.",
            "**Why some markets become more competitive**: **globalisation** and cheap imports, **online selling** lowering entry barriers, easier **price comparison** online, **patent expiry** letting imitators in, **new entrants attracted by profit**, and **mergers** creating large aggressive rivals.",
            "**How a business can respond**: do **market research** to see what customers now want, **develop new or improved products**, **differentiate** through quality, brand or service, **reposition** or find a **niche**, adjust **price**, improve **customer service and loyalty schemes**, cut costs, expand into **new markets or countries**, and use **digital and social media** selling.",
          ],
        },
        {
          subTitle: "Mass market, niche market, segmentation",
          bullets: [
            "A **mass market** sells **standardised products in large quantities to the whole market** at a **low price**, sold through **supermarkets and chain stores** with **mass promotion** — soft drinks, soap, batteries.",
            "**Mass advantages**: high volume and **economies of scale**, wide recognition, and lower unit costs. **Disadvantages**: **intense price competition**, little differentiation, **expensive** advertising and distribution, and vulnerability if tastes shift.",
            "A **niche market** serves a **small, specific segment** with **specialised products**, usually at a **high price** — left-handed scissors, luxury pet food, gluten-free bakeries.",
            "**Niche advantages**: less direct competition, **higher margins**, loyal customers, and small firms can survive without big capital. **Disadvantages**: a **small total demand**, risk the niche **disappears with a fashion**, no economies of scale, and dependence on few customers.",
            "**Market segmentation** divides a market into groups with **common needs**. The five examinable bases: **age** (teen fashion versus retirement services), **income** (budget versus luxury cars), **location** (region, town or country, climate), **gender** (cosmetics, razors), and **lifestyle** (vegans, fitness, travellers, gamers).",
            "**Segmentation advantages**: marketing **aimed precisely**, higher response, products that **fit the need**, and better use of limited budget. **Disadvantages**: **research costs**, segments may be **too small to be profitable**, risk of **missing the need anyway**, and extra product variants raise costs.",
          ],
        },
      ],
    },
    {
      title: "3.2 Market research",
      body: `### Deciding With Evidence

**Market research** is the collection and analysis of data about customers, competitors and the market. Businesses use it to **reduce the risk of a decision**, **test a product or advertisement before launch**, **identify customer needs and trends**, **size a market**, and **decide price, promotion and location**.`,
      figure: panelResearch,
      groups: [
        {
          subTitle: "Primary research — first-hand data",
          bullets: [
            "**Questionnaires and surveys** — written or online sets of questions. Cheap across many people, quick to analyse, can be anonymous; but **low response rates**, **unrepresentative respondents**, and **poorly worded or leading questions** spoil the data.",
            "**Interviews** — face-to-face or telephone questions. Deep answers, questions can be clarified, body language noticed; but **slow**, **expensive**, interviewer **bias**, and respondents may say what sounds good.",
            "**Focus groups** — a small group discussing a product led by a moderator. Rich reactions and ideas for a new product or advert; but **expensive to run**, **dominant members can sway the group**, and a small group may not represent the market.",
            "**Observation** — watching what customers actually do, such as counting footfall or tracking which shelf is touched. Shows **real behaviour** without the bias of answers; but it reveals **not the reasons**, takes time, and can be resented as intrusive.",
            "**Sampling** is asking **part of the market** instead of everyone, chosen so the sample **represents the whole**. It is useful because it is **cheaper, faster and more practical**, and results can be projected — but only if the sample is large and representative enough.",
          ],
        },
        {
          subTitle: "Secondary research and the accuracy question",
          bullets: [
            "**Secondary research** uses data **already collected by someone else**: **competitor websites and annual reports**, **government sources** (census, trade and tax statistics), published **market reports**, **trade magazines and associations**, newspapers, and internet search data.",
            "**Advantages**: **fast and cheap**, often free, covers the **whole market or country**, and available before the business exists. **Disadvantages**: may be **out of date**, collected for a **different purpose**, **too general** for the decision, unreliable or biased in source, and **available to competitors too**, so it is no advantage.",
            "**Factors affecting the accuracy of any market research data**: the **size and representativeness of the sample**, the **wording and order of questions** (leading or ambiguous), **who asked and where**, whether respondents were **honest, informed or embarrassed**, **outdated** secondary data, **changes in the market** during collection, **cost-cutting** that shortened the study, and the **skill of the person analysing** it.",
            "**Reading simple research data** (both papers do this): state **what the figures show**, compare **two or more items**, then link it to a **decision for the business named**. A description with no decision loses the analysis marks.",
          ],
        },
      ],
    },
    {
      title: "3.3 Marketing mix",
      body: `### The Four Ps Working Together

The **marketing mix** is the combination of **product, price, place and promotion** a business uses to reach its target market. The four must **fit each other and the customer**: a premium product sold cheaply in the wrong shop with the wrong advert fails whatever each element did alone.`,
      figure: panelMix,
      groups: [
        {
          subTitle: "Product — brand, packaging, new products and the life cycle",
          bullets: [
            "**Brand image** is **how customers think and feel about a product or business**. A strong brand earns **recognition, trust, customer loyalty, the right to charge a higher price**, and shelf space; it is built through advertising, quality and consistent experience, and it can be **destroyed quickly** by one fault or scandal.",
            "**The role of packaging**: **protects** the product, **contains and preserves** it, **informs** (ingredients, instructions, legal details), **attracts attention on the shelf** and advertises the brand, makes the product **easy to use and store**, and increasingly must be **environmentally acceptable**.",
            "**Developing new products — advantages**: extra revenue, replaces declining sales, keeps the business **ahead of rivals**, uses spare capacity, and can open a new market. **Disadvantages**: **expensive research and testing**, a high **failure rate**, time lost from existing products, possible **damage to the brand** if the launch fails, and cannibalising current sales.",
            "The **product life cycle** has four stages: **introduction** (low sales, heavy launch cost, losses, no competitors yet), **growth** (sales climb fast, first profit, rivals enter, breakeven passed), **maturity** (sales peak and flatten, strong competition, price pressure, good profits), and **decline** (sales and profit fall, product becomes obsolete, decide to persist, modify or drop).",
            "**Reading the diagram**: sales revenue on the vertical axis against **time** on the horizontal; costs usually start **above** revenue, the two curves cross at **break-even**, and profit is the gap between them in the growth and maturity stages.",
            "**Extension strategies** delay or avoid decline: **new markets** (sell abroad or to a different segment), **new uses** for the product, **adapting the product or packaging** (new size, flavour, design), and **increased advertising or sales promotion**. Each buys time but costs money, and a product whose demand has genuinely gone may only be **postponing the inevitable**.",
          ],
        },
        {
          subTitle: "Price — five examinable methods",
          bullets: [
            "**Cost-plus (mark-up)**: add a fixed percentage to unit cost. **Ensures costs are covered** and is simple, but ignores **demand and competition**, so it can price too high or leave profit on the table.",
            "**Competitive pricing**: set price **close to rivals**. Safe where customers compare easily and avoids a price war; but it **ignores the firm's own costs** and gives up the chance to charge more for real differences.",
            "**Penetration pricing**: launch at a **deliberately low price** to gain **share and loyal buyers fast**, then raise it. Builds volume and economies of scale; but **low early profit**, customers may leave when the price rises, and it suits **price-sensitive, repeat-purchase** goods.",
            "**Price skimming**: launch **high**, then lower in stages to reach each segment. **Recovers research cost quickly** and creates a premium image; but attracts competitors, early buyers feel cheated at the lower price, and it needs **inelastic demand at the top**.",
            "**Dynamic pricing**: change price **continuously with demand, time or customer** — airline seats, ride-hailing, hotel rooms. Maximises revenue and fills capacity; but customers can feel **treated unfairly** and it needs data, algorithms and price transparency.",
            "**Recommend a method** from four facts: the **unit cost**, the **type of customer** and their price sensitivity, the **stage of the life cycle**, and the **level of competition**. A luxury gadget at launch is skimming; a supermarket staple entering a crowded market is penetration or competitive.",
          ],
        },
        {
          subTitle: "Place — distribution channels",
          bullets: [
            "**Direct to customers** (own shop, website, door-to-door, farm gate). **Full margin and customer data, total control** of presentation and service; but the business bears **every cost of selling**, reaches fewer people, and must handle its own delivery.",
            "**Through retailers** (shops, supermarkets, online marketplaces). **Wide reach and volume**, the retailer carries shelf and stock cost; but a **margin is given up**, the brand is at the retailer's mercy for position, and there is **less contact with the end customer**.",
            "**Through wholesalers**. Gives access to **many small retailers** without the manufacturer invoicing each one, and they **hold stock and spread credit**; but another margin is lost and the producer is **two steps from the customer**.",
            "**Through agents**. An agent **arranges sales for a commission** without owning the goods — useful for exports and specialist buyers, giving local knowledge and contacts; but commission plus **weaker control**, and the agent may also represent competitors.",
            "**Recommend a channel** from: the **type of product** (perishable, bulky, high value), the **target customers and where they shop**, the business's **own resources and skills**, the **need for control or advice**, and the **volume** expected.",
          ],
        },
        {
          subTitle: "Promotion — advertising and sales promotion",
          bullets: [
            "**Reasons for promotion**: to make customers **aware** of a new product, **create interest and inform** about features and price, **persuade** against rivals, **remind** loyal buyers, support a **price change or extension strategy**, increase **sales and market share**, and build the **brand image**.",
            "**Sales promotion methods**: **vouchers and coupons**, **reward and loyalty schemes**, **competitions and prize draws**, and **special offers or discounts** such as buy-one-get-one-free. They give a **short, measurable sales lift** and can move surplus stock; but they **train customers to wait for a deal**, cut margin, may attract **only deal-seekers**, and competitions carry rules and costs.",
            "**Advertising methods**: **social media** (cheap, targeted, shareable, measurable; but noisy, easy to ignore, and comments are public), **direct or targeted emails** (precise, cheap, personal; but spam-filtered and limited by privacy law), **leaflets** (local and cheap to produce; but low attention and mostly discarded), **billboards** (high impact on a route, 24-hour exposure; but expensive, brief viewing, no detail), plus press, radio, TV and online video where those are the natural fit.",
            "**Recommend promotion** by matching the **target audience's media habits**, the **budget**, the **message's complexity**, the **aim** (awareness or immediate sales), and **how measurable** the result needs to be.",
          ],
        },
        {
          subTitle: "Ecommerce, the mix as a whole, and selling abroad",
          bullets: [
            "**Ecommerce** is buying and selling over the internet: **online shopping and marketplaces, internet and mobile banking, online ticketing and bookings, and digital payments**. Sales can continue **24 hours** from a **cheap website** rather than a rented shop, reach a **national or global market**, personalise offers, collect data, and hold **less stock** by drop-shipping.",
            "**Ecommerce for businesses — advantages**: low running costs, wide reach, precise measurement, and easy price or range changes. **Disadvantages**: **heavy competition and easy comparison**, no physical product trial, **delivery costs and returns**, **website failures, fraud and cyber-attack**, and the need for digital skills.",
            "**For customers — advantages**: convenience, **comparison and choice**, wider availability, home delivery and reviews. **Disadvantages**: cannot **see, try or test** the item, **delivery waiting and charges**, **security and privacy** risk, no personal advice, and unreliable internet access excludes some buyers.",
            "**Why the elements must work together**: a well-designed product at a price below cost, or a premium price with cheap packaging and no advertising, fails. State **how the four fit the chosen target market** and the answer becomes analysis.",
            "**Advantages of entering markets in other countries**: **higher sales and profit**, **spreading risk** across economies, extending a **product's life** where home demand is falling, using **spare capacity**, cheaper inputs, and learning from rivals. **Disadvantages**: **cultural, language and taste differences**, **lack of local knowledge** and distribution contacts, **legal and tax requirements**, tariffs and quotas, **exchange-rate** movements, transport cost, and management stretched across time zones.",
          ],
        },
      ],
    },
    {
      title: "3.4 Legal controls",
      body: `### What the Law Stops a Marketer Doing

**Legal controls** are laws that restrict how a business may market and sell. Their **purpose is to protect customers** from being cheated or harmed, and to keep competition fair.`,
      groups: [
        {
          subTitle: "Two protected situations, and the effects on marketing",
          bullets: [
            "**Misleading promotion** — advertising that gives **false or exaggerated claims** about price, performance, ingredients, origin or availability. Laws require claims to be **truthful, provable and not likely to mislead**, and ban hidden conditions and fake discounts.",
            "**Faulty goods** — products must be **as described, of satisfactory quality, fit for the purpose advertised, and match the sample**. Customers are entitled to a **repair, replacement, price reduction or refund**, and a business cannot sign that right away.",
            "**Other controls on marketing**: price and unit information must be shown honestly, comparisons must be real, promotions to **children** are restricted, prize competitions must disclose the odds and rules, and unsolicited emails require **consent and an opt-out**, with customer data held lawfully.",
            "**Effects on the business**: advertising copy must be **evidenced and checked**, raising **costs and time**; some claims and tactics simply **cannot be used**; a breach brings **fines, an order to stop, recalls, and reputation damage** that outlasts the campaign.",
            "**Effects that help**: legal compliance becomes a **selling point** — quality, safety and honesty attract and retain customers — and it **removes the temptation** to win by deception instead of by product.",
          ],
        },
      ],
    },
  ],
};

export const BUSINESS_STUDIES_CHAPTER_3 = chapterThree;
