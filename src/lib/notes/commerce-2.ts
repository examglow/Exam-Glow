import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Commerce (0715) 2029 Syllabus Notes
 * Part 2: Chapters 4–6
 * - Chapter 4: Logistics in Commerce
 * - Chapter 5: Aids to Trade that Support Commerce
 * - Chapter 6: Sustainability and Ethics
 */
export const COMMERCE_PART2: Chapter[] = [
  {
    number: 4,
    title: "Logistics in Commerce",
    section: "Section 4: Distribution and Physical Supply Chains",
    topic: "Modes of Transport, Containerisation, Ports, Warehousing, and Inventory Management",
    intro:
      "Logistics is the commercial science of planning, implementing, and controlling the efficient, cost-effective physical flow and storage of raw materials, in-process inventory, and finished products from origin to consumption. This chapter examines the five primary modes of commercial transport, the economic revolution of containerisation, sea and air port infrastructure, and modern automated warehousing and inventory control.",
    subheadings: [
      {
        title: "Modes of Commercial Transport and Containerisation",
        body:
          "**1. Comparative Analysis of Transport Modes:**\n" +
          "- **Road Transport (Lorries, Trucks, Vans):**\n" +
          "  - *Advantages:* Door-to-door delivery without intermediate transhipment; highly flexible routes and schedules; cost-effective for short and medium distances; ideal for fragile, perishable foods.\n" +
          "  - *Disadvantages:* Vulnerable to motorway traffic congestion; limited load payload capacity compared to rail/sea; produces high carbon emissions and noise pollution; road tolls and driver hour regulations.\n" +
          "- **Rail Transport (Freight Trains):**\n" +
          "  - *Advantages:* Ideal for heavy, bulky, non-perishable raw materials (coal, iron ore, grain, aggregates); lower carbon emissions per tonne-km than road; high safety and speed over long overland distances; immune to road traffic jams.\n" +
          "  - *Disadvantages:* Inflexible fixed rail routes; requires separate road haulage for final delivery to destination (**inflexible; cannot provide door-to-door delivery**); high transhipment handling costs.\n" +
          "- **Sea / Maritime Transport (Cargo Ships, Bulk Carriers, Tankers):**\n" +
          "  - *Advantages:* The cheapest transport mode per tonne-km for colossal bulky cargoes over intercontinental distances; immense carrying capacity (ultra-large container vessels carry $> 24,000\\text{ TEU}$); handles liquid oil, dry bulk grain, and containerized manufactured goods.\n" +
          "  - *Disadvantages:* Very slow transit speeds (takes weeks); vulnerable to maritime weather/storms, piracy, and canal chokepoints; requires deep-water port infrastructure.\n" +
          "- **Air Transport (Air Freight / Cargo Planes):**\n" +
          "  - *Advantages:* The fastest transport mode over long distances; highest security (lowest theft and damage rates); ideal for urgent, high-value, low-weight commodities (diamonds, gold, electronics) and emergency medical supplies/organs.\n" +
          "  - *Disadvantages:* The most expensive transport mode per kilogram; strictly restricted weight and volumetric cargo limits; high carbon footprint.\n" +
          "- **Pipeline Transport:**\n" +
          "  - Continuous, automated subterranean or undersea transport for liquids and gases (crude oil, refined petrol, natural gas, water); extremely low operating cost and reliable 24/7; high initial construction capital cost; inflexible routes.\n\n" +
          "**2. The Containerisation Revolution:**\n" +
          "- Standardized steel intermodal freight containers (standard lengths: 20-foot and 40-foot; measured in **TEU - Twenty-Foot Equivalent Units**).\n" +
          "- **Intermodal Freight Transport:** Containers transfer seamlessly between container ships, freight trains, and articulated road trucks without opening or handling the cargo contents inside (**no break-bulk**).\n" +
          "- **Commercial Benefits of Containerisation:**\n" +
          "  - Massive reduction in port turnaround times (ships unload in hours instead of weeks).\n" +
          "  - Dramatic reduction in cargo theft, pilferage, and weather damage because containers are locked and sealed at the factory.\n" +
          "  - Slashes maritime freight insurance premiums and handling costs.\n" +
          "  - Refrigerated containers (**Reefers**) enable global transport of temperature-sensitive chilled meat, pharmaceuticals, and fruit.",
        examinerTips: [
          "When recommending a transport mode in an exam scenario, analyze: nature of goods (weight, bulk, perishability, value), distance, cost, speed, and whether door-to-door delivery is needed.",
          "State clearly why rail and air transport CANNOT provide door-to-door delivery alone: they are confined to fixed tracks and airports, requiring road transport for the 'last mile'."
        ],
        commonMistakes: [
          "Calling air freight the best mode for heavy machinery; air freight is far too expensive and weight-restricted for bulky commodities.",
          "Confusing TEU (Twenty-foot Equivalent Unit) with general cargo weight."
        ],
        recap: [
          "Transport modes: Road (door-to-door, flexible), Rail (heavy bulk overland), Sea (cheapest intercontinental bulk), Air (fastest, high value/urgent), Pipeline (liquids/gas).",
          "Containerisation uses standard intermodal steel boxes (TEUs) transferring between ship, train, and truck.",
          "Benefits of containerisation: fast turnaround, zero break-bulk, reduced theft/damage, lower insurance costs."
        ]
      },
      {
        title: "Ports, Logistics Terminals and Modern Warehousing",
        body:
          "**1. Modern Port Infrastructure and Terminals:**\n" +
          "- **Seaports:** Deep-water quay berths equipped with massive gantry cranes (**ship-to-shore cranes**), automated container stacking yards, customs inspection facilities, and direct intermodal rail heads.\n" +
          "- **Airports:** Cargo terminals with cold-chain storage facilities, high-speed automated sorting conveyors, and dedicated express courier hubs (e.g. FedEx, DHL).\n" +
          "- **Dry Ports (Inland Container Depots - ICDs):** Inland intermodal logistics terminals directly connected by dedicated freight rail to coastal seaports; conducts customs clearance, container storage, and transhipment inland, relieving congested coastal docklands.\n\n" +
          "**2. Functions and Types of Warehouses:**\n" +
          "- **Commercial Functions of Warehousing:**\n" +
          "  - **Bridging the Time Gap:** Stores seasonal production surpluses (harvested wheat, holiday toys) for steady year-round consumption, preventing violent price fluctuations (**price stabilization**).\n" +
          "  - **Protection of Stock:** Protects goods from atmospheric weathering, theft, rodents, pests, and fire.\n" +
          "  - **Break-Bulk and Order Assembly:** Consolidation of supplier shipments, sorting, barcoding, repacking into retail packs.\n" +
          "- **Types of Warehouses:**\n" +
          "  - **Private Warehouses:** Owned and operated by manufacturers or major supermarket multiples (e.g. Tesco distribution centers) exclusively for their own inventory.\n" +
          "  - **Public Warehouses:** Operated by independent commercial logistics firms; rent storage space to any enterprise on flexible short- or long-term leases.\n" +
          "  - **Customs-Bonded Warehouses:** Government-licensed secure storage facilities where imported dutiable goods are held **under customs seal before import duties/tariffs are paid**.\n" +
          "    - Goods can be cleaned, sorted, packaged, bottled, or sold while inside without paying duty.\n" +
          "    - **Duty is paid ONLY when goods are released for domestic sale**; if goods are re-exported abroad (entrepôt trade), **NO import duty is ever paid**.\n" +
          "  - **Cold Storage Warehouses:** Temperature-controlled refrigerated/freezer facilities for perishable food, dairy, and biopharmaceuticals.\n\n" +
          "**3. Modern Automated Warehousing and Inventory Control:**\n" +
          "- **Automated Guided Vehicles (AGVs) & Robotic Pickers:** Autonomous vehicles navigate aisles using laser and QR guidance, retrieving storage pallets from 30-metre-high racking.\n" +
          "- **RFID (Radio Frequency Identification):** Electromagnetic tags scanned remotely in bulk without direct line of sight, providing instant inventory tracking.\n" +
          "- **Warehouse Management Systems (WMS):** Software tracking inventory batch numbers, expiry dates, FIFO rotation, and dispatch routing.",
        examinerTips: [
          "Explain the commercial advantages of a bonded warehouse: importers defer duty payment until goods are sold (improving cash flow), and avoid duty completely if goods are re-exported in entrepôt trade.",
          "Distinguish clearly between a private warehouse (owned by one firm for its own stock) and a public warehouse (rents space to any third party)."
        ],
        commonMistakes: [
          "Believing bonded warehouses are illegal or smuggled storage; they are legal, state-inspected customs facilities.",
          "Confusing barcode scanning (requires direct line-of-sight laser) with RFID tracking (reads hundreds of wireless tags simultaneously without line of sight)."
        ],
        recap: [
          "Logistics hubs include seaports, air cargo hubs, and inland dry ports (ICDs).",
          "Warehouses bridge time gaps, stabilize prices, protect goods, and enable break-bulk.",
          "Bonded warehouses hold imported goods before duty is paid, deferring taxes and facilitating duty-free entrepôt trade.",
          "Modern warehouses use AGVs, RFID tracking, and automated WMS software."
        ]
      }
    ]
  },
  {
    number: 5,
    title: "Aids to Trade that Support Commerce",
    section: "Section 5: Financial, Marketing, and Risk Services",
    topic: "Advertising, Sales Promotion, Banking, Fintech, Insurance, and Business Finance",
    intro:
      "Aids to trade are the indispensable tertiary commercial services that enable trade to operate smoothly across domestic and international markets. This chapter examines advertising media and sales promotion techniques, modern commercial banking and fintech systems, insurance principles and risk management, sources of enterprise finance, and foundational commercial calculations (markup, margin, gross and net profit).",
    subheadings: [
      {
        title: "Advertising Media and Sales Promotion",
        body:
          "**1. The Functions and Types of Advertising:**\n" +
          "- **Informative Advertising:** Informs the public about factual specifications, functions, availability, safety warnings, and prices of new products (e.g. government public health notices, new technical machinery).\n" +
          "- **Persuasive Advertising:** Appeals to human psychological desires (status, beauty, youth, romance, prestige, fear of missing out) to convince consumers that a specific brand is superior to competitors.\n" +
          "- **Competitive Advertising:** Commercial campaigns directly challenging rival brands (e.g. supermarket price-match campaigns).\n" +
          "- **Collective / Generic Advertising:** Industry-wide campaigns promoting an entire product category without mentioning specific brand names (e.g. 'Drink more milk', 'Eat 5 portions of fruit a day').\n\n" +
          "**2. Advertising Media (Traditional vs Digital):**\n" +
          "- **Traditional Media:** Television (high mass impact, highly expensive), Radio (localized, audio-only), Newspapers/Magazines (detailed text, target readership, short shelf life), Billboards/Outdoor posters (high visibility to commuters).\n" +
          "- **Digital Media:** Social media platforms (Instagram, TikTok), search engine marketing (Google Ads / Pay-Per-Click), influencer marketing, email newsletters. *Advantages:* Hyper-targeted behavioral tracking, lower entry cost, instant real-time analytics on click-through and conversion rates.\n\n" +
          "**3. Sales Promotion Techniques (Short-term Incentives):**\n" +
          "- Designed to stimulate immediate, short-term buying spikes:\n" +
          "- BOGOF (Buy One Get One Free), discount coupons/vouchers, free product samples, competitions, loyalty reward points, trade-in allowances, 0% interest credit terms.",
        examinerTips: [
          "Distinguish clearly between advertising (long-term brand awareness building through media channels) and sales promotion (short-term tactical incentives to boost immediate purchases like 20% off or coupons).",
          "Identify collective/generic advertising: it promotes the entire product category (e.g. wool, eggs) rather than a specific brand."
        ],
        commonMistakes: [
          "Calling a discount voucher 'advertising'; vouchers are a sales promotion tool.",
          "Assuming digital advertising is completely free; targeted social media and search engine campaigns require substantial digital advertising budgets."
        ],
        recap: [
          "Advertising types: Informative (factual), Persuasive (emotional appeal), Competitive (brand vs brand), and Collective (industry-wide generic).",
          "Media spans traditional (TV, radio, print, billboards) and digital (social media, search ads, influencers).",
          "Sales promotions provide immediate incentives (BOGOF, samples, discounts, coupons)."
        ]
      },
      {
        title: "Banking, Digital Payment Systems and Commercial Finance",
        body:
          "**1. Commercial Banking Services:**\n" +
          "- **Current Accounts (Checking Accounts):** Day-to-day transaction accounts; funds accessible on demand via debit cards, online banking, and direct debits; negligible interest earned.\n" +
          "- **Deposit Accounts (Savings Accounts):** Accounts holding surplus funds earning interest; may require notice for withdrawal.\n" +
          "- **Credit Facilities:**\n" +
          "  - **Bank Overdraft:** Agreement permitting an account holder to withdraw funds exceeding their account balance up to a pre-agreed ceiling; flexible, interest charged only on the exact daily overdrawn balance; repayable on demand.\n" +
          "  - **Bank Loan:** A fixed lump sum borrowed for a specified fixed duration; repaid in regular monthly installments including principal and fixed/variable interest; usually requires physical collateral assets as security.\n\n" +
          "**2. Digital Payment Systems and Fintech:**\n" +
          "- **Credit Cards vs Debit Cards:** Debit cards deduct funds directly from the cardholder's bank account instantly; Credit cards allow consumers to buy goods on short-term revolving credit provided by the card issuer, receiving monthly statements.\n" +
          "- **Electronic Funds Transfer (EFT):** Direct digital transfer of funds between bank accounts.\n" +
          "- **Contactless & Mobile Wallets (NFC):** Near Field Communication payments using smartphones/smartwatches (Apple Pay, Google Pay) linked to biometric verification.\n" +
          "- **Automated Payment Methods:**\n" +
          "  - **Standing Order:** An instruction given by the account holder to their bank to pay a **fixed, regular sum of money** to a specific recipient on regular dates (e.g. monthly rent of $800).\n" +
          "  - **Direct Debit:** An authorization given by the account holder to a creditor (e.g. utility electric company, mobile phone provider) allowing the creditor to collect **varying sums of money** directly from the account on scheduled dates.",
        examinerTips: [
          "Distinguish precisely between a Standing Order and a Direct Debit: Standing orders pay FIXED amounts set by the payer; Direct debits allow the payee to withdraw VARYING amounts (e.g. utility bills) with advance notice.",
          "Compare overdrafts and bank loans: overdrafts are flexible for short-term working capital (interest paid only on overdrawn amount); loans provide fixed lump sums for long-term capital assets."
        ],
        commonMistakes: [
          "Confusing debit cards (payer's own money deducted instantly) with credit cards (borrowed bank credit paid later).",
          "Stating that standing orders can be used for varying electricity bills; varying bills require direct debits."
        ],
        recap: [
          "Current accounts handle daily payments; Deposit accounts earn savings interest.",
          "Overdrafts offer flexible short-term credit on daily balances; Loans provide fixed capital lump sums.",
          "Standing orders pay fixed amounts; Direct debits permit creditors to draw varying amounts.",
          "Digital payments: EFT, contactless NFC, and mobile digital wallets."
        ]
      },
      {
        title: "Insurance Principles, Risk Management and Commercial Calculations",
        body:
          "**1. Principles of Commercial Insurance:**\n" +
          "- Insurance pools risk: thousands of policyholders pay regular premiums into a central common pool; the pooled funds compensate the unfortunate few who suffer insured financial losses.\n" +
          "- **Core Legal Principles of Insurance:**\n" +
          "  1. **Indemnity:** The insured is restored to their **exact financial position immediately prior to the loss**; the insured **CANNOT MAKE A PROFIT** from insurance. Applies to property, motor, and marine insurance (does not apply to Life Assurance).\n" +
          "  2. **Insurable Interest:** The policyholder must benefit financially from the continued existence of the insured item and suffer a direct financial loss from its destruction (e.g. you cannot insure your neighbour's house).\n" +
          "  3. **Utmost Good Faith (*Uberrima Fides*):** Both parties must disclose all material facts honestly and completely on the proposal form; concealing relevant information voids the contract.\n" +
          "  4. **Subrogation:** Once an insurer pays a total loss claim, the insurer takes legal ownership of the salvaged damaged property and rights to sue third-party tortfeasors.\n" +
          "  5. **Proximate Cause:** The insurer is liable only if the immediate, direct cause of loss was an insured risk specified in the policy contract.\n\n" +
          "**2. Essential Commercial Calculations:**\n" +
          "- **Cost of Goods Sold (COGS):** $\\text{COGS} = \\text{Opening Inventory} + \\text{Purchases} - \\text{Closing Inventory}$\n" +
          "- **Gross Profit:** $\\text{Gross Profit} = \\text{Revenue (Sales Turnover)} - \\text{COGS}$\n" +
          "- **Net Profit:** $\\text{Net Profit} = \\text{Gross Profit} - \\text{Operating Expenses}$\n" +
          "- **Markup (Percentage on Cost):**\n" +
          "  $$\\text{Markup (\\%)} = \\frac{\\text{Gross Profit}}{\\text{Cost of Goods Sold}} \\times 100$$\n" +
          "- **Margin (Percentage on Selling Price / Revenue):**\n" +
          "  $$\\text{Margin (\\%)} = \\frac{\\text{Gross Profit}}{\\text{Revenue (Selling Price)}} \\times 100$$\n" +
          "- *Example:* A retailer buys a jacket for $\$60$ (COGS) and sells it for $\$100$ (Revenue). Gross Profit = $\$40$.\n" +
          "  - $\\text{Markup} = \\frac{40}{60} \\times 100 = 66.67\\%$.\n" +
          "  - $\\text{Margin} = \\frac{40}{100} \\times 100 = 40.0\\%$.",
        examinerTips: [
          "Be careful when calculating markup versus margin: Markup is profit divided by COST; Margin is profit divided by SELLING PRICE (REVENUE).",
          "Explain the principle of indemnity: returning the insured to their exact pre-loss financial position without making a profit. State that life insurance is an exception (human life cannot be valued financially)."
        ],
        commonMistakes: [
          "Dividing profit by selling price when calculating markup; markup uses cost price as the denominator.",
          "Assuming you can insure an item you have no financial connection to; insurable interest is a mandatory legal requirement."
        ],
        recap: [
          "Insurance principles: Indemnity (no profit from loss), Insurable Interest (financial stake), Utmost Good Faith (full disclosure), Subrogation, Proximate Cause.",
          "COGS = Opening Stock + Purchases - Closing Stock; Gross Profit = Revenue - COGS; Net Profit = Gross Profit - Expenses.",
          "Markup (%) = (Profit / Cost) * 100; Margin (%) = (Profit / Selling Price) * 100."
        ]
      }
    ]
  },
  {
    number: 6,
    title: "Sustainability and Ethics",
    section: "Section 6: Sustainable and Ethical Commerce",
    topic: "Supply Chain Sustainability, Circular Economy, Ethical Trading, Fair Trade, and Consumer Protection",
    intro:
      "Modern commercial success requires balancing profitability with environmental stewardship and social justice. This chapter examines environmental sustainability in supply chains, waste reduction, the circular economy, ethical business conduct, fair trade standards, and statutory consumer protection legislation.",
    subheadings: [
      {
        title: "Sustainability in Supply Chains and the Circular Economy",
        body:
          "**1. Environmental Impacts of Commerce and Supply Chains:**\n" +
          "- **Carbon Footprint of Logistics:** Freight emissions from maritime container transport, aviation air cargo, and heavy diesel lorries driving global climate change.\n" +
          "- **Packaging Waste:** Excessive non-biodegradable single-use plastics, expanded polystyrene, and packaging materials polluting oceanic habitats and filling landfills.\n" +
          "- **Resource Depletion:** Over-extraction of timber, minerals, and freshwater for manufacturing.\n\n" +
          "**2. The Circular Economy vs Linear Economy:**\n" +
          "- **Linear Economy ('Take-Make-Dispose'):** Raw materials are extracted, manufactured into short-lifespan consumer products, and dumped into landfill upon obsolescence; highly unsustainable.\n" +
          "- **The Circular Economy Model:** An economic system aimed at eliminating waste through continuous cycles of **Redesign, Reduce, Reuse, Repair, Remanufacture, and Recycle**:\n" +
          "  - Products engineered for modular disassembly and durability.\n" +
          "  - Biodegradable organic components returned safely to the biosphere as compost.\n" +
          "  - Technical components (metals, polymers) recovered, melted down, and remanufactured without virgin resource extraction.\n\n" +
          "**3. Sustainable Commercial Practices:**\n" +
          "- **Reverse Logistics:** Logistics networks dedicated to collecting end-of-life products from consumers for recycling or refurbishing (e.g. mobile phone trade-in programs).\n" +
          "- **Eco-Packaging:** Utilizing biodegradable cornstarch packing peanuts, unbleached recycled cardboard, and mushroom mycelium packaging.\n" +
          "- **Local Sourcing (Short Supply Chains):** Procuring supplies from local regional producers to cut food miles and freight transport emissions.",
        examinerTips: [
          "Contrast the linear economy (take, make, throw away) with the circular economy (closed loop: reduce, reuse, repair, recycle).",
          "Explain reverse logistics: the supply chain process of moving goods from the consumer back to the manufacturer for recycling, refurbishment, or return."
        ],
        commonMistakes: [
          "Equating recycling with the circular economy; recycling is only the final stage of a circular economy, which prioritizes reduction, reuse, and redesign first.",
          "Thinking sustainable packaging always costs less; biodegradable materials initially carry higher procurement costs for enterprises."
        ],
        recap: [
          "Commercial supply chains generate carbon emissions, plastic packaging waste, and resource depletion.",
          "Circular economy replaces the linear 'take-make-dispose' model with redesign, reuse, repair, and recycling.",
          "Sustainable practices include reverse logistics, biodegradable packaging, and local regional sourcing to cut transport miles."
        ]
      },
      {
        title: "Ethical Trading and Fairtrade Standards",
        body:
          "**1. What is Business Ethics?**\n" +
          "Moral principles and values that guide commercial decision-making and operational conduct beyond mere compliance with statutory law.\n\n" +
          "**2. Core Ethical Dilemmas in Global Commerce:**\n" +
          "- **Labour Exploitation & Sweatshops:** Using subcontractors in developing nations that enforce unsafe factory conditions, excessive working hours, and below-subsistence wages, or tolerate child labour.\n" +
          "- **Misleading Advertising & 'Greenwashing':** Making unsubstantiated or deceptive claims about environmental benefits to deceive eco-conscious consumers.\n" +
          "- **Bribery and Corruption:** Paying facilitation payments to foreign officials to secure state contracts.\n" +
          "- **Animal Welfare:** Testing cosmetics on animals or factory farming livestock in inhumane confinement.\n\n" +
          "**3. The Fairtrade Model:**\n" +
          "- A commercial partnership that guarantees marginalized smallholder farmers and agricultural cooperatives in developing nations (coffee, cocoa, bananas, cotton, tea) receive:\n" +
          "  1. **Fairtrade Minimum Price:** A guaranteed baseline floor price that covers the cost of sustainable production regardless of how low international market commodity prices crash.\n" +
          "  2. **Fairtrade Premium:** An additional communal fund paid directly to the farmers' cooperative, invested democratically into local community development (building clean drinking water wells, medical dispensaries, schools, agricultural equipment).\n" +
          "  3. **Prohibition of Child Labour:** Strict compliance audits forbidding forced or child labour.",
        examinerTips: [
          "Explain the dual benefits of Fairtrade: the guaranteed Minimum Price protects farmers against commodity market crashes, and the Fairtrade Premium funds community schools, clinics, and clean water.",
          "Define 'greenwashing': falsely marketing products as environmentally friendly or sustainable when operations are damaging."
        ],
        commonMistakes: [
          "Confusing ethical behaviour (moral choices above and beyond the law) with legal compliance (simply obeying mandatory statutes).",
          "Assuming Fairtrade is a government subsidy; Fairtrade is an independent non-profit certification scheme funded by consumers paying a small ethical price premium."
        ],
        recap: [
          "Business ethics guides moral commercial behaviour beyond legal minimums.",
          "Ethical issues: sweatshop labour, child labour, greenwashing, corruption, animal testing.",
          "Fairtrade ensures smallholders receive a guaranteed Minimum Price and a Premium for community health/schools, while banning child labour."
        ]
      },
      {
        title: "Consumer Rights and Protection Legislation",
        body:
          "**1. Why Consumers Require Legal Protection:**\n" +
          "Individual consumers face an enormous power asymmetry when negotiating with massive commercial corporations. Consumers are vulnerable to deceptive marketing, unsafe products, hidden contract clauses, and predatory sales tactics.\n\n" +
          "**2. Core Statutory Consumer Rights:**\n" +
          "- **Satisfactory Quality:** Goods must be of a standard that a reasonable person would consider satisfactory, taking into account price, description, and durability; free from minor defects.\n" +
          "- **Fit for Purpose:** Goods must be suitable for any specific purpose explicitly stated by the consumer to the retailer prior to purchase.\n" +
          "- **As Described:** Goods must match the verbal description, advertising sample, or packaging specification provided by the seller.\n\n" +
          "**3. Statutory Consumer Protection Remedies:**\n" +
          "- If a product fails to meet the three statutory standards (not of satisfactory quality, unfit for purpose, or not as described), the consumer is legally entitled to:\n" +
          "  - **Right to a Full Refund (within statutory cancellation window, e.g. 30 days).**\n" +
          "  - **Right to a Free Repair or Replacement.**\n" +
          "  - **Price Reduction or Partial Refund if repair/replacement is impossible.**\n\n" +
          "**4. Regulatory Agencies and Consumer Codes:**\n" +
          "- **Advertising Standards Authorities:** Enforces truth in advertising (adverts must be 'legal, decent, honest, and truthful').\n" +
          "- **Competition and Consumer Protection Commissions:** Prosecutes price-fixing cartels, misleading pricing (fake 'sales' where the original price was never charged), and predatory monopolistic abuses.\n" +
          "- **Cooling-Off Periods:** Mandatory statutory cancellation windows (e.g. 14 days) for distance selling and online e-commerce contracts, allowing consumers to cancel and return goods for a full refund without penalty.",
        examinerTips: [
          "Memorize the three fundamental consumer protection tests: Goods must be (1) of Satisfactory Quality, (2) Fit for Purpose, and (3) As Described.",
          "Explain the 'cooling-off period' in distance selling: online shoppers have a statutory legal right to change their mind and return goods within 14 days because they could not inspect them before purchase."
        ],
        commonMistakes: [
          "Believing a retailer can display 'No Refunds' signs to avoid the law; statutory consumer rights override any retail store notices.",
          "Assuming consumer rights apply if a consumer damages the product through misuse or simply changes their mind on store-bought items after the return policy expires."
        ],
        recap: [
          "Consumers need protection due to information asymmetry and corporate bargaining power.",
          "Statutory rights require goods to be of Satisfactory Quality, Fit for Purpose, and As Described.",
          "Remedies: full refund, free repair, or replacement.",
          "Online distance selling includes mandatory cooling-off periods."
        ]
      }
    ]
  }
];
