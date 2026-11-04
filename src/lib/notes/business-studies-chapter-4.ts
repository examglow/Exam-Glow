import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/business-studies";

const panelProduction = imagePanel(IMG, [
  {
    src: "bus4-job-production.webp",
    alt: "A single tailor working on one made-to-measure suit at a bench in a small workshop, pattern pieces and a customer fitting on a stand nearby",
    caption: "Job production: one bespoke unit at a time",
  },
  {
    src: "bus4-flow-production.webp",
    alt: "A long conveyor belt carrying identical bottles through a filling and labelling machine in a bright factory, robotic arms above the line and pallets at the end",
    caption: "Flow production: a continuous run of standardised units",
  },
]);

const panelSustainable = imagePanel(IMG, [
  {
    src: "bus4-solar-roof-farm.webp",
    alt: "Solar panels covering the roof of a factory with a heat-recovery unit and a small wind turbine beside it, storage tanks under the eaves",
    caption: "Renewable energy cuts bills and emissions together",
  },
  {
    src: "bus4-recycling-plant.webp",
    alt: "A sorting hall where workers separate clean plastic, card and metal into labelled bales, a shredder turning old containers into flake on a conveyor",
    caption: "Reuse and recycling turn waste into input",
  },
]);

const panelBreakEven = imagePanel(IMG, [
  {
    src: "bus4-breakeven-chart.webp",
    alt: "A hand-drawn break-even chart on graph paper with a straight total cost line starting above the origin, a steeper total revenue line from the origin, their crossing point circled, and the loss and profit areas shaded",
    caption: "Below the crossing is loss, above it is profit",
  },
  {
    src: "bus4-economies-scale.webp",
    alt: "Two countersides photographed together: a small corner shop with a single hand-written price card, and a distribution centre loading a full trailer of identical cartons under a huge printed price banner",
    caption: "Buying and spreading costs in bulk is a purchasing economy",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Operations Management",
  intro: `This is the calculation chapter of Paper 1: labour productivity, costs, break-even and margin of safety. Each is **three to four marks of arithmetic that must be right**, so learn the formulas and check what the question wants rounded.\n\nThe rest of the topic is descriptive — production methods, technology, sustainability, quality and location — and it is marked on **matching the method to the business named**.`,
  subheadings: [
    {
      title: "4.1 Production of goods and services",
      body: `### Processes, Productivity and the Three Methods

**Labour productivity** measures how much output each worker produces in a period. **Efficiency** is producing goods or services with the **least waste of resources** — time, materials, machines and labour — for a given output.

The three **methods of production** are **job**, **batch** and **flow**.`,
      figure: panelProduction,
      groups: [
        {
          subTitle: "Productivity and efficiency, calculated",
          bullets: [
            "**Labour productivity = output per period / number of employees**, in **units per employee**. Twelve workers making **2,400 units** a week give **2,400 / 12 = 200 units per employee**; if output falls to 1,800 with the same staff, productivity is **150** and something needs explaining.",
            "**Why efficiency matters**: it **lowers unit costs**, which raises profit or funds a lower price, **reduces waste and storage**, improves **delivery reliability**, and releases cash for investment.",
            "**How to increase efficiency**: **automation and better technology**, **improving labour skills through training**, better **layout and workflow**, **preventive maintenance**, tighter **quality control** to cut rework, and **lean methods** such as JIT.",
            "**Lean production** removes **everything that does not add value** for the customer. **Just-in-time (JIT) inventory control**: materials and components arrive **exactly when needed**, so stock is barely held. **Kaizen**: **continuous small improvements** suggested and made by the workers themselves, all the time.",
            "**Advantages of lean methods**: far **less storage cost and waste**, less capital tied up in stock, faster response to demand, higher quality, and **motivated staff** under Kaizen. **Disadvantages**: **total dependence on reliable suppliers** — one late delivery stops the line — no buffer for a **sudden rise in demand**, expensive to introduce, and staff can feel **pressurised** with no slack in the day.",
            "**Why businesses hold inventory**: to **meet customer demand without delay**, guard against **supplier unreliability**, cover **seasonal spikes**, take **bulk-buying discounts**, and keep **work in progress** so machines and staff are not idle.",
            "**Factors affecting how much inventory is held**: **reliability of supply**, **how fast the goods sell**, whether items **perish or go out of date**, the **cost of storing and insuring**, the size of **bulk discounts**, the **production method** (job holds much, JIT flow holds almost none), and customers' **expectation of immediate availability**.",
          ],
        },
        {
          subTitle: "Job, batch and flow compared",
          bullets: [
            "**Job production** makes **one complete, bespoke item at a time** — a bridge, a tailored suit, a fitted kitchen. High quality to exact specification, a premium price, and skilled varied work; but slow and **expensive per unit**, machinery idle between jobs, high material stock, and payment often only on completion.",
            "**Batch production** makes a **group of identical units together**, then changes the equipment over to the next group — 500 loaves, then 500 rolls, then 500 cakes. One set of machines gives a **flexible range**, unit cost is lower than job, and finished batches are ready to sell; but machines and staff **wait between batches**, one error can **spoil the whole batch**, scheduling takes effort, and batches need storage.",
            "**Flow (mass) production** makes **large volumes of identical products continuously** along a line — soft drinks, cars, phones. **Very low unit cost** from economies of scale, high consistent output, and speed; but enormous **capital cost**, **inflexible** when demand or design changes, **monotony and high turnover**, and **one breakdown stops the entire line**.",
            "**Recommend a method** from four facts in the case: the **volume demanded**, how **standardised or customised** the product must be, the **capital available**, and the **skill of the workforce**. One-off luxury items are job; a bakery with several lines is batch; a national drinks brand is flow.",
          ],
        },
      ],
    },
    {
      title: "4.2 Technology and production of goods and services",
      body: `### Machines, Software and Service Productivity

**Mechanisation** replaces human effort with machines. **Automation** goes further: machines run and control the process **without a person at every step**.`,
      groups: [
        {
          subTitle: "How technology is changing production",
          bullets: [
            "**Computer-Aided Manufacture (CAM)** drives machines directly from a digital design, giving **speed, precision, consistency and less waste**, with quick changeover between designs. **3D printing (additive manufacturing)** builds an object **layer by layer from a digital model**, allowing **prototypes in hours, complex shapes and custom one-offs** with almost no tooling cost.",
            "**Technology improves productivity in services** too: **contactless payment** shortens queues and removes cash handling, **self-service kiosks and online check-in** free staff for harder work, **booking and delivery apps** raise throughput, and **inventory and rota software** cuts waste and idle time.",
            "**Advantages for the business**: lower unit costs, higher output and consistency, less waste, near **24-hour operation**, better data for decisions, and **flexible manufacture**. **Disadvantages**: **large capital outlay**, costly maintenance and upgrades, **dependence on specialist skills** the firm may lack, a breakdown now stops everything, and cybersecurity risk.",
            "**For employees**: fewer dirty, dangerous and repetitive tasks, **higher-skilled and better-paid work**, and safer processes; but **job losses in routine roles**, constant **retraining demands**, older or less digital staff feel pressured, work is **monitored by machine**, and there is less human contact with customers.",
          ],
        },
      ],
    },
    {
      title: "4.3 Sustainable production of goods and services",
      body: `### Producing Without Using Up the Future

**Sustainable production** is making goods or providing services in a way that **meets today's needs without damaging the ability of future generations to meet theirs** — environmentally, socially and economically.`,
      figure: panelSustainable,
      groups: [
        {
          subTitle: "The six examinable methods, then both sides",
          bullets: [
            "**Use renewable energy** — solar, wind or hydro on site instead of fossil fuel. **Use fewer resources and less waste** — efficient machines, precise dosing, better scheduling, lighter materials. **Reuse** — refillable bottles, returned packaging, re-used offcuts. **Recycle** — separate and re-process paper, plastic, metal and organic waste. **Develop environmentally friendly products** — longer-lasting, repairable, non-toxic, energy-saving. **Use environmentally friendly packaging** — recycled, recyclable, compostable and minimised.",
            "**Advantages of becoming more sustainable**: **lower energy, material and disposal costs** over time, a **better reputation** that wins customers and investors, compliance with **present and future law**, access to **green contracts and tenders**, protection of the **resource supply** the firm depends on, and **staff pride and motivation**.",
            "**Disadvantages**: **high start-up cost** for new plant, panels or packaging lines, **expensive research** and possible redesign, **lower output during changeover**, suppliers may not offer green alternatives, customers may **refuse to pay a higher price**, and every claim must be **provable** or the firm is accused of greenwashing.",
            "**How to answer**: name the method, say **which resource or emission it cuts**, then give one **cost** and one **benefit** to the business in the case. A sustainability answer with only moral arguments loses the analysis marks.",
          ],
        },
      ],
    },
    {
      title: "4.4 Costs, scale of production and break-even analysis",
      body: `### Classify Costs, Then Find the Crossing Point

A **fixed cost (FC)** does **not** change with output in the short run — rent, salaries, insurance. A **variable cost (VC)** changes **directly with output** — raw materials, hourly wages, packaging, energy per unit.`,
      figure: panelBreakEven,
      groups: [
        {
          subTitle: "The cost formulas, worked",
          bullets: [
            "**Total variable cost = variable cost per unit x number of units.** **Total cost = total fixed costs + total variable costs.** **Average cost = total cost / number of units produced.**",
            "Work it: fixed costs **4,000 dollars**, variable cost **6 dollars a unit**. At **1,000 units**: TVC **6,000**, TC **10,000**, AC **10 dollars**. At **2,000 units**: TVC **12,000**, TC **16,000**, AC **8 dollars**. Total cost rose while average cost fell, because the same fixed cost is spread further.",
            "**Using cost data in decisions**: choose **which product to make** by comparing contribution per unit or per hour of the scarce resource; decide **whether to continue or stop** a line by comparing its revenue with its variable and avoidable fixed costs; **set a price** with average cost as the level it should clear; and **choose a supplier** on total delivered cost, not headline unit price.",
          ],
        },
        {
          subTitle: "Economies and diseconomies of scale",
          bullets: [
            "**Economies of scale** are reductions in **average cost** a firm gains as it grows. **Purchasing** — bulk buying earns discounts. **Marketing** — one advertising cost is spread over more units. **Financial** — larger firms borrow **more cheaply** and in bigger amounts. **Managerial** — specialists can be hired, improving decisions. **Technical** — expensive efficient machinery and in-house R&D only pay off at volume.",
            "**Diseconomies of scale** raise average cost when a firm gets too big: **poor communication** across sites and levels, **lack of commitment or loyalty from employees** who feel like a number, **weak coordination** between departments, and **lack of control** — slow decisions, duplicated work and costly errors.",
            "**Trap:** economies of scale lower **average** cost, not total cost. A bigger factory spends more in total and less per unit.",
          ],
        },
        {
          subTitle: "Break-even, step by step",
          bullets: [
            "**Break-even** is the level of output where **total revenue equals total costs**, so the business makes **neither profit nor loss**.",
            "**Contribution per unit = selling price per unit − variable cost per unit.** It is what each sale contributes towards paying off fixed costs.",
            "**Break-even output = fixed costs / contribution per unit.** Fixed costs **6,000 dollars**, price **25 dollars**, variable cost **15 dollars** → contribution **10 dollars** → break-even **600 units**.",
            "**Margin of safety = actual (or forecast) number of sales − break-even number of sales.** If the firm sells **1,000 units**, the margin of safety is **1,000 − 600 = 400 units**. It is the cushion before losses begin.",
            "**Reading the chart**: the **total cost line starts at the fixed-cost level on the vertical axis** (cost exists even at zero output) and slopes upward; **total revenue starts at the origin** and rises more steeply. The crossing is break-even; the gap above it is **profit**, below it is **loss**. To **amend or complete** a chart, redraw only the affected line and re-read the crossing.",
            "**Effect of changes**: a **higher selling price** steepens the revenue line, so **break-even falls**. **Higher fixed costs** lift the whole cost line, so **break-even rises**. **A lower variable cost per unit** flattens the cost line, so break-even falls. State the effect on **both break-even output and the margin of safety**.",
            "**Uses in decisions**: whether a **new product or a price cut** can be afforded, whether to **rent or buy** premises from the change in fixed costs, and **how far sales may fall** before the business is making a loss.",
            "**Limitations**: it assumes **everything produced is sold**, a **constant selling price** with no discounting, **straight-line costs** across the range, that costs classify **cleanly** into fixed and variable, **unchanging technology and efficiency**, no quality or inventory effects, and a **single product** or a fixed sales mix.",
          ],
        },
      ],
    },
    {
      title: "4.5 Quality of goods and services",
      body: `### Inspection or Prevention

**Quality** means a product or service **meets or exceeds customer expectations** — fit for purpose, reliable, durable, safe and consistent. It matters because it drives **reputation, the price customers will pay, repeat sales, warranty costs and legal risk**.

**Quality control (QC)** is **inspection after production** to detect and remove faulty items. **Quality assurance (QA)** is **preventing faults at every stage** of production so that inspection is barely needed.`,
      groups: [
        {
          subTitle: "QC and QA compared",
          bullets: [
            "**Quality control advantages**: simple to organise, catches faults **before customers see them**, protects the brand, and needs no change to the production method. **Disadvantages**: **inspectors cost money**, waste and rework still happen, faults are found **too late to save the materials**, inspectors miss defects, and workers take **less responsibility** for quality.",
            "**Quality assurance advantages**: **fewer faults and less waste**, lower long-run inspection cost, **consistent output**, staff take **ownership of quality**, and it suits firms supplying **repeat customers who audit them**. **Disadvantages**: **expensive to introduce**, needs **training and documentation**, changes habits staff may resist, and rigid procedures can **slow innovation**.",
            "**Recommend between them** from the case: a **one-off or low-volume** producer, or a safety-critical small batch, can justify **QC inspection**; a **flow or mass producer selling repeatedly to the same buyers** gains more from **QA**, because prevention is cheaper per unit than finding and rejecting faults.",
          ],
        },
      ],
    },
    {
      title: "4.6 Location decisions",
      body: `### Where to Put the Business

**Location** is a long-term decision: it fixes costs, decides who can reach the business, and is expensive to reverse. The factors that matter differ for a **manufacturer**, a **service**, and a firm choosing **which country** to operate in.`,
      groups: [
        {
          subTitle: "Manufacturing location factors",
          bullets: [
            "**Close to raw materials** when they are **heavy, bulky or perishable** or lose weight in processing — a cement works or a sugar mill.",
            "**Close to the market** when the product is **fragile, perishable or customised**, or delivery is costly — bakeries, furniture, bottled drinks.",
            "**Labour**: availability, **cost, skill and reliability**, and whether trained workers already live in the region.",
            "**Transport and infrastructure**: roads, ports, rail, energy and water — a factory needs all of them, not just the cheapest one.",
            "**Land and premises**: purchase or rent cost, **space to expand**, and whether an existing building suits the process.",
            "**Government policy**: **grants and regional assistance**, tax breaks and training support; or the reverse — **planning restrictions, environmental rules and high local taxes**.",
            "**Agglomeration**: the benefit of locating **near the same industry** — shared suppliers, a skilled labour pool and nearby specialist services.",
          ],
        },
        {
          subTitle: "Service location factors, and the choice of country",
          bullets: [
            "**For a service business**: **footfall and passing trade**, **access on foot, by car and by public transport**, parking, the **location and income of target customers**, **competition nearby**, rent and premises quality, staff availability, the **image of the area**, and opening-hour rules.",
            "For a **digital or phone-based service** the site matters far less, so cheap premises or home working can decide it; for a **restaurant or clinic**, visibility and convenience still dominate.",
            "**Which country to locate operations in**: **labour cost and skill level**, **political and legal stability**, **infrastructure quality** (power, ports, internet), **tax rates**, **product-safety, employment and environmental rules**, **language and cultural fit**, **exchange rates** and their stability, **distance to the main market**, tariffs and quotas, the presence of **suppliers and components**, and any **government incentives** offered to investors.",
            "**Recommend a location** by naming **two or three factors that decide it for that business**, showing **why the alternative fails** on at least one of them, and conceding a **cost or risk** the recommendation still carries.",
          ],
        },
      ],
    },
  ],
};

export const BUSINESS_STUDIES_CHAPTER_4 = chapterFour;
