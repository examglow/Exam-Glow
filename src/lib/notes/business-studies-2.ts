import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Business Studies (0450) 2023–2025 Syllabus Notes
 * Part 2: Chapters 4–6
 * - Chapter 4: Operations Management
 * - Chapter 5: Financial Information and Decisions
 * - Chapter 6: External Influences on Business Activity
 */
export const BUSINESS_STUDIES_PART2: Chapter[] = [
  {
    number: 4,
    title: "Operations Management",
    section: "Section 4: Operations Management",
    topic: "Production Methods, Productivity, Lean Production, Costs, Scale, Break-Even, Quality, and Location",
    intro:
      "Operations management transforms inputs into marketable goods and services efficiently. This chapter covers production techniques (job, batch, flow), productivity improvement, lean production and inventory control, cost classification, break-even calculations and charts, quality management systems (QC, QA, TQM), and factors determining business location.",
    subheadings: [
      {
        title: "Production Methods, Productivity, and Lean Production",
        body:
          "**1. Production Methods:**\n" +
          "- **Job Production:**\n" +
          "  - Manufacturing a single, unique, custom product tailored to individual customer specifications (e.g. bespoke luxury yachts, handcrafted wedding dresses, architect-designed houses).\n" +
          "  - *Advantages:* Premium pricing power, high product variety, craft worker satisfaction.\n" +
          "  - *Disadvantages:* High unit cost, slow production, highly labour intensive, cannot exploit economies of scale.\n" +
          "- **Batch Production:**\n" +
          "  - Producing a specific quantity of identical goods before retooling machinery to make a different product run (e.g. bakery producing batches of seeded rolls then baguettes; clothing in seasonal colours).\n" +
          "  - *Advantages:* Production flexibility, lower unit costs than job production, machinery shared across product lines.\n" +
          "  - *Disadvantages:* Downtime required to clean and adjust machines between batches, warehouse storage costs for work-in-progress.\n" +
          "- **Flow (Mass) Production:**\n" +
          "  - Continuous, automated production of standardized items moving along an assembly line (e.g. soft drink bottling, smartphone manufacturing).\n" +
          "  - *Advantages:* Lowest unit production costs (economies of scale), high output volume, automated consistency.\n" +
          "  - *Disadvantages:* Massive initial capital investment, inflexibility to demand shifts, worker alienation from repetitive tasks, total production shutdown if one machine breaks.\n\n" +
          "**2. Productivity Measurement:**\n" +
          "- Productivity measures how efficiently factors of production are utilized:\n" +
          "  $$\\text{Labour Productivity} = \\frac{\\text{Total Output}}{\\text{Number of Employees (or Labour Hours)}}$$\n" +
          "- Improving productivity lowers average cost per unit, enhancing price competitiveness.\n" +
          "- Methods to raise productivity: staff training, investment in robotics/automation, financial incentives, ergonomic workstations, improved factory layout.\n\n" +
          "**3. Lean Production and Waste Elimination:**\n" +
          "- Lean production is an approach focused on eliminating waste (Muda) and maximizing value-adding activities.\n" +
          "- **Kaizen (Continuous Improvement):** Regular, small improvements introduced by employees themselves.\n" +
          "- **Just-in-Time (JIT) Inventory:** Raw materials arrive exactly when required on the production line, and finished goods are dispatched immediately to customers, eliminating inventory holding costs.\n" +
          "  - *Benefits:* Lowers warehouse storage costs, eliminates stock obsolescence, frees up working capital.\n" +
          "  - *Risks:* Highly vulnerable to supplier delays, transport strikes, or sudden surges in customer demand.",
        examinerTips: [
          "Do not confuse production with productivity: production is the total quantity produced, while productivity is output per worker or hour.",
          "When evaluating JIT, always balance warehouse cost savings against the risk of stockouts if supply chains are disrupted."
        ],
        commonMistakes: [
          "Calling batch production 'flow production' because multiple items are made; batch stops to reset machinery between runs.",
          "Thinking lean production only involves firing staff; lean is about process optimization and worker engagement."
        ],
        recap: [
          "Production methods: Job (one-off), Batch (identical groups), Flow (continuous automated line).",
          "Labour Productivity = Total Output / Number of Employees.",
          "Lean production cuts waste via Kaizen and Just-in-Time (JIT) inventory control."
        ]
      },
      {
        title: "Costs, Scale of Production, and Break-Even Analysis",
        body:
          "**1. Cost Classification:**\n" +
          "- **Fixed Costs (Overheads):** Costs that do not change with the level of output in the short run (e.g. factory rent, insurance, manager salaries, loan interest).\n" +
          "- **Variable Costs:** Costs that vary directly with output volume (e.g. direct raw materials, piece-rate wages, packaging).\n" +
          "- **Total Cost:**\n" +
          "  $$\\text{Total Cost (TC)} = \\text{Fixed Costs (FC)} + \\text{Total Variable Costs (TVC)}$$\n" +
          "- **Average Cost (Unit Cost):**\n" +
          "  $$\\text{Average Cost (AC)} = \\frac{\\text{Total Cost}}{\\text{Total Output}}$$\n\n" +
          "**2. Economies and Diseconomies of Scale:**\n" +
          "- **Economies of Scale (Falling AC as output increases):**\n" +
          "  - *Purchasing:* Bulk buying discounts on raw materials.\n" +
          "  - *Technical:* Investing in specialized, high-capacity machinery.\n" +
          "  - *Financial:* Lower bank borrowing interest rates due to larger collateral.\n" +
          "  - *Managerial:* Employing specialist functional directors.\n" +
          "  - *Marketing:* Spreading advertising budgets across millions of units.\n" +
          "- **Diseconomies of Scale (Rising AC when business grows too large):**\n" +
          "  - Poor communication, slow decision-making, worker alienation, coordination problems across international divisions.\n\n" +
          "**3. Break-Even Analysis:**\n" +
          "- The break-even point is the level of output where total revenue equals total cost (neither profit nor loss is made).\n" +
          "- **Contribution per unit:**\n" +
          "  $$\\text{Contribution} = \\text{Selling Price} - \\text{Variable Cost per Unit}$$\n" +
          "- **Break-Even Output Formula:**\n" +
          "  $$\\text{Break-Even Level of Output} = \\frac{\\text{Fixed Costs}}{\\text{Contribution per Unit}} = \\frac{\\text{Fixed Costs}}{\\text{Selling Price} - \\text{Variable Cost per Unit}}$$\n" +
          "- **Margin of Safety:** The amount by which actual sales output exceeds the break-even output level:\n" +
          "  $$\\text{Margin of Safety} = \\text{Actual Output} - \\text{Break-Even Output}$$\n" +
          "- **Uses and Limitations:** Useful for business plans and pricing scenarios; limited because it assumes all output is sold, costs are linear, and external factors remain static.",
        examinerTips: [
          "Always state the units when giving the break-even answer (e.g. 5,000 units, not $5,000).",
          "Contribution is NOT profit: Contribution covers fixed costs first; only once fixed costs are covered does profit accumulate."
        ],
        commonMistakes: [
          "Dividing fixed costs by price alone instead of contribution (Price - Variable Cost).",
          "Plotting the fixed cost line starting at zero; fixed costs exist even at zero output and must be a horizontal line."
        ],
        recap: [
          "Total Cost = Fixed Costs + Variable Costs; Average Cost = Total Cost / Output.",
          "Economies of scale lower average costs; diseconomies raise them.",
          "Break-Even = Fixed Costs / (Price - Variable Cost); Margin of Safety = Actual Output - Break-Even Output."
        ]
      },
      {
        title: "Achieving Quality and Location Decisions",
        body:
          "**1. Quality Concepts and Management Systems:**\n" +
          "- Quality means producing a product or service that meets or exceeds customer expectations and is fit for purpose.\n" +
          "- **Quality Control (QC):**\n" +
          "  - Traditional inspection of finished products at the end of the production line by designated inspectors.\n" +
          "  - *Weakness:* Defective items are identified only after costs have already been incurred, resulting in scrap and rework waste.\n" +
          "- **Quality Assurance (QA):**\n" +
          "  - Setting quality standards and inspecting every stage of the manufacturing process to prevent defects from occurring ('right first time').\n" +
          "  - Involves employee self-checking and accredited standards (e.g. ISO 9001).\n" +
          "- **Total Quality Management (TQM):**\n" +
          "  - An organization-wide culture where every single employee in every department is committed to continuous quality improvement and treats the next person in the process as an internal customer.\n\n" +
          "**2. Business Location Decisions:**\n" +
          "- **Factors Influencing Manufacturing Location:**\n" +
          "  - Proximity to raw materials (crucial for bulk-reducing industries like copper smelting).\n" +
          "  - Proximity to market (crucial for perishable goods or bulk-gaining products like soft drink bottling).\n" +
          "  - Availability and cost of land and labour.\n" +
          "  - Transport infrastructure (motorways, deep-water ports, railways, freight airports).\n" +
          "  - Government regional incentives, grants, and enterprise zones.\n" +
          "- **Factors Influencing Service / Retailing Location:**\n" +
          "  - Footfall and accessibility for target customers.\n" +
          "  - Proximity to competitors (clustering in shopping malls or avoiding oversaturated areas).\n" +
          "  - Rent and business local taxes.\n" +
          "  - Parking and public transit links.\n" +
          "- **Relocating Overseas (Offshoring):**\n" +
          "  - *Drivers:* Lower labour rates, access to emerging trade blocs, overcoming tariff barriers.\n" +
          "  - *Risks:* Cultural/language barriers, supply chain lead times, political instability, exchange rate volatility.",
        examinerTips: [
          "In exam questions comparing QC and QA, explain that QA is preventive and empowers workers, whereas QC is reactive and leads to high scrap waste.",
          "When analyzing business location, tailor your points to the specific business in the case study (e.g. heavy manufacturing vs online software consultancy)."
        ],
        commonMistakes: [
          "Confusing Quality Assurance (process-oriented prevention) with Quality Control (end-of-line checking).",
          "Assuming low rent is the only factor in retail location; high footfall often justifies paying high rent."
        ],
        recap: [
          "Quality approaches: QC (end inspection), QA (process prevention), TQM (company-wide continuous excellence).",
          "Manufacturing locations depend on raw materials, transport, land, and grants.",
          "Service/retail locations prioritize customer footfall, accessibility, and convenience."
        ]
      }
    ]
  },
  {
    number: 5,
    title: "Financial Information and Decisions",
    section: "Section 5: Financial Information and Financial Decisions",
    topic: "Sources of Finance, Cash-Flow Forecasting, Income Statements, Balance Sheets, and Ratio Analysis",
    intro:
      "Finance is the lifeblood of business operations. This chapter examines internal and external sources of short- and long-term capital, the critical distinction between cash flow and profit, construction and analysis of cash-flow forecasts, interpretation of financial statements (income statement and balance sheet), and calculation of profitability and liquidity ratios.",
    subheadings: [
      {
        title: "Business Finance Needs and Sources of Capital",
        body:
          "**1. The Need for Business Finance:**\n" +
          "- **Start-up Capital:** Capital required to launch a new enterprise (purchasing initial non-current assets like premises, machinery, fixtures, initial stock).\n" +
          "- **Working Capital:** Day-to-day finance needed to fund operational running expenses (paying suppliers, wages, electricity bills) while waiting for receivables.\n" +
          "- **Expansion Capital:** Long-term funding for opening new branches, acquiring competitors, or funding R&D.\n\n" +
          "**2. Internal Sources of Finance:**\n" +
          "- **Retained Profit:** Net profits ploughed back into the enterprise rather than paid as dividends (no interest, no debt burden, but limited by past earnings).\n" +
          "- **Sale of Existing Non-Current Assets:** Selling surplus land, buildings, or old vehicles (raises cash without debt, but can disrupt future capacity).\n" +
          "- **Reduction in Working Capital:** Managing inventories tightly and chasing trade receivables faster.\n\n" +
          "**3. External Sources of Finance:**\n" +
          "- **Short-Term (Repayable within 1 year):**\n" +
          "  - *Bank Overdraft:* Flexible facility to spend beyond bank account balance up to an agreed limit; interest charged daily on overdrawn amount.\n" +
          "  - *Trade Credit:* Delaying payment to component suppliers (e.g. 30–60 days interest-free).\n" +
          "  - *Debt Factoring:* Selling unpaid sales invoices to a factoring agency for immediate cash at a discount (e.g. 85–90% of face value).\n" +
          "- **Long-Term (Repayable over more than 1 year):**\n" +
          "  - *Bank Term Loan:* Fixed capital sum borrowed for an agreed period, repaid with interest in regular instalments (requires collateral/security).\n" +
          "  - *Share Capital (Equity):* Issuing shares to friends/family (private limited) or the general public (public limited); permanent capital with no debt repayments, but dilutes ownership control.\n" +
          "  - *Debentures (Corporate Bonds):* Long-term fixed-interest loan certificates issued to investors.\n" +
          "  - *Leasing / Hire Purchase:* Acquiring asset use through periodic rental payments without paying full capital upfront.\n" +
          "  - *Government Grants / Subsidies:* Non-repayable cash incentives linked to locating in disadvantaged regions or developing green tech.",
        examinerTips: [
          "Match the source of finance to the asset lifespan: use short-term finance (overdraft, trade credit) for working capital/inventories, and long-term finance (bank loan, shares) for fixed capital/premises.",
          "Distinguish clearly between share capital (equity with dividend obligations and voting power) and bank loans (debt requiring fixed interest and repayment)."
        ],
        commonMistakes: [
          "Recommending share issues for sole traders or partnerships; only incorporated limited companies (Ltd/Plc) can issue shares.",
          "Using long-term bank loans to pay monthly utility bills or short-term overdrafts to buy commercial real estate."
        ],
        recap: [
          "Finance needs: Start-up, working capital, expansion.",
          "Internal sources: Retained profit, asset sales, reduced working capital.",
          "External sources: Overdraft & trade credit (short-term); Bank loan, share issue, debentures, leasing (long-term)."
        ]
      },
      {
        title: "Cash-Flow Forecasting and Working Capital",
        body:
          "**1. Cash vs Profit:**\n" +
          "- **Cash:** Liquid money immediately available in bank accounts or till drawers to settle debts.\n" +
          "- **Profit:** Surplus revenue remaining after all operating costs have been deducted over a trading period:\n" +
          "  $$\\text{Profit} = \\text{Total Revenue} - \\text{Total Costs}$$\n" +
          "- A business can be profitable but go insolvent (**insolvency / cash-flow crisis**) if revenues are locked in unpaid credit sales while bills fall due immediately.\n\n" +
          "**2. Cash-Flow Forecast Structure:**\n" +
          "- A monthly projection of future cash inflows and outflows:\n" +
          "  1. **Total Cash Inflows:** Cash sales, payments from trade receivables, bank loans, grants.\n" +
          "  2. **Total Cash Outflows:** Cash purchases, payments to trade payables, wages, rent, loan repayments, taxes.\n" +
          "  3. **Net Cash Flow:**\n" +
          "     $$\\text{Net Cash Flow} = \\text{Total Cash Inflows} - \\text{Total Cash Outflows}$$\n" +
          "  4. **Opening Bank Balance:** Cash balance at the start of the calendar month (equals previous month's closing balance).\n" +
          "  5. **Closing Bank Balance:**\n" +
          "     $$\\text{Closing Balance} = \\text{Opening Balance} + \\text{Net Cash Flow}$$\n\n" +
          "**3. Managing and Overcoming Cash-Flow Deficits:**\n" +
          "- Arrange a temporary bank overdraft facility.\n" +
          "- Delay capital expenditure (postpone buying machinery).\n" +
          "- Negotiate extended credit terms with trade suppliers (from 30 to 60 days).\n" +
          "- Tighten credit terms for customers (shorten credit period or demand cash on delivery).\n" +
          "- Use debt factoring to convert unpaid invoices into instant cash.",
        examinerTips: [
          "In cash-flow forecast tables, remember that the Closing Balance of one month becomes the Opening Balance of the very next month.",
          "When asked how to improve cash flow, don't just say 'increase sales'; if sales are made on 60-day credit, inflows will not improve this month!"
        ],
        commonMistakes: [
          "Equating cash with profit; businesses often fail due to cash-flow shortages while reporting healthy accounting profits on paper.",
          "Subtracting opening balance instead of adding it to net cash flow to calculate the closing balance."
        ],
        recap: [
          "Profit = Revenue - Costs; Cash = liquid money available right now.",
          "Closing Balance = Opening Balance + Net Cash Flow.",
          "Solve cash-flow crises via overdrafts, debt factoring, delayed capital spending, and tighter debtor control."
        ]
      },
      {
        title: "Financial Statements and Ratio Analysis",
        body:
          "**1. The Income Statement (Statement of Profit or Loss):**\n" +
          "- Records business revenue and expenses over a trading year to determine profitability:\n" +
          "  - **Revenue (Turnover):** Selling price $\\times$ Quantity sold.\n" +
          "  - **Cost of Sales:** Direct cost of inventory sold (Opening Stock + Purchases - Closing Stock).\n" +
          "  - **Gross Profit:**\n" +
          "    $$\\text{Gross Profit} = \\text{Revenue} - \\text{Cost of Sales}$$\n" +
          "  - **Expenses (Overheads):** Administration, rent, advertising, depreciation, insurance.\n" +
          "  - **Operating Profit:** Gross Profit minus Expenses.\n" +
          "  - **Profit for the Year (Net Profit):** Operating Profit minus Interest and Taxation.\n\n" +
          "**2. The Statement of Financial Position (Balance Sheet):**\n" +
          "- A financial snapshot of assets, liabilities, and equity on a specific date:\n" +
          "  - **Non-Current Assets:** Long-term tangible assets kept for >1 year (land, buildings, equipment, motor vehicles).\n" +
          "  - **Current Assets:** Liquid assets turned into cash within 1 year (inventory, trade receivables, bank balance).\n" +
          "  - **Current Liabilities:** Debts due within 1 year (trade payables, bank overdraft).\n" +
          "  - **Non-Current Liabilities:** Long-term debts due after >1 year (bank mortgages, debentures).\n" +
          "  - **Working Capital (Net Current Assets):** Current Assets minus Current Liabilities.\n" +
          "  - **Total Assets Employed = Total Equity + Non-Current Liabilities**.\n\n" +
          "**3. Profitability Ratios:**\n" +
          "- **Gross Profit Margin (%):**\n" +
          "  $$\\text{Gross Profit Margin} = \\left( \\frac{\\text{Gross Profit}}{\\text{Revenue}} \\right) \\times 100$$\n" +
          "- **Profit Margin (Net Margin %):**\n" +
          "  $$\\text{Profit Margin} = \\left( \\frac{\\text{Profit for the Year}}{\\text{Revenue}} \\right) \\times 100$$\n" +
          "- **Return on Capital Employed (ROCE %):** Measures operating efficiency in generating profit from invested capital:\n" +
          "  $$\\text{ROCE} = \\left( \\frac{\\text{Operating Profit}}{\\text{Capital Employed}} \\right) \\times 100$$\n" +
          "  *(Capital Employed = Non-Current Liabilities + Shareholders' Equity)*\n\n" +
          "**4. Liquidity Ratios:**\n" +
          "- **Current Ratio:**\n" +
          "  $$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$$\n" +
          "  *(Healthy benchmark: around 1.5 : 1 to 2.0 : 1)*\n" +
          "- **Acid Test (Quick) Ratio:** Excludes illiquid inventory from assets:\n" +
          "  $$\\text{Acid Test Ratio} = \\frac{\\text{Current Assets} - \\text{Inventories}}{\\text{Current Liabilities}}$$\n" +
          "  *(Healthy benchmark: around 1.0 : 1)*",
        examinerTips: [
          "Always present ratio answers in correct notation: margins and ROCE as percentages (%), liquidity ratios as ratios (e.g. 1.8 : 1).",
          "Explain what the ratio indicates: a falling ROCE indicates less efficient management of long-term investment capital."
        ],
        commonMistakes: [
          "Including inventory in the acid test ratio numerator; inventories must be deducted because they cannot be liquidated instantly.",
          "Using gross profit instead of operating profit when calculating Return on Capital Employed (ROCE)."
        ],
        recap: [
          "Gross Profit = Revenue - Cost of Sales; Net Profit = Gross Profit - Operating Expenses.",
          "Working Capital = Current Assets - Current Liabilities.",
          "Profitability: Gross Margin, Net Margin, ROCE; Liquidity: Current Ratio and Acid Test Ratio."
        ]
      }
    ]
  },
  {
    number: 6,
    title: "External Influences on Business Activity",
    section: "Section 6: External Influences on Business Activity",
    topic: "Government Economic Objectives, Fiscal & Monetary Policies, Environmental & Ethical Pressures, Globalisation, and Exchange Rates",
    intro:
      "Businesses operate in an ever-shifting macroeconomic, ethical, and international environment. This chapter analyzes government economic goals (growth, inflation, employment, balance of payments), fiscal and monetary policies, environmental sustainability, ethical corporate behaviour, the pressures and opportunities of globalisation, and the impact of exchange rate fluctuations.",
    subheadings: [
      {
        title: "Government Economic Objectives and Macroeconomic Policies",
        body:
          "**1. Core Government Economic Objectives:**\n" +
          "- **Economic Growth:** Sustained increase in a country's Gross Domestic Product (GDP). Raises living standards and employment.\n" +
          "- **Low Inflation:** Keeping price level increases low and stable (e.g. 2% target). High inflation erodes consumer purchasing power, raises business operating costs, and weakens export competitiveness.\n" +
          "- **Low Unemployment:** High employment maximizes national productive capacity, increases income tax revenues, and lowers welfare benefit costs.\n" +
          "- **Balance of Payments Stability:** Maintaining equilibrium between the value of exports and imports over the economic cycle.\n\n" +
          "**2. Macroeconomic Policies and Business Impact:**\n" +
          "- **Fiscal Policy (Government Taxation and Spending):**\n" +
          "  - *Raising Income Tax:* Reduces consumer disposable income, lowering demand for non-essential luxury goods.\n" +
          "  - *Raising Corporation Tax:* Lowers post-tax profits, reducing funds available for retained investment and shareholder dividends.\n" +
          "  - *Increasing Government Spending:* Stimulates economic activity through public infrastructure projects, benefiting construction and logistics suppliers.\n" +
          "- **Monetary Policy (Interest Rates and Money Supply):**\n" +
          "  - *Raising Interest Rates:* Increases the cost of borrowing for businesses and mortgage holders, lowering discretionary consumer spending; strengthens domestic currency.\n" +
          "  - *Lowering Interest Rates:* Encourages business loan-financed investment and consumer credit spending.\n" +
          "- **Supply-Side Policies:** Measures to improve long-term productive efficiency (investing in technical education, deregulating markets, cutting red tape).",
        examinerTips: [
          "In exam questions on interest rate increases, trace the chain of reasoning: higher interest -> higher mortgage costs -> less consumer disposable income -> falling sales of non-essential items.",
          "Distinguish between income tax (levied on personal earnings) and corporation tax (levied on corporate net profits)."
        ],
        commonMistakes: [
          "Stating that raising taxes increases business sales; higher direct taxes reduce customer disposable income and suppress demand.",
          "Confusing fiscal policy (taxes & government spending) with monetary policy (interest rates & money supply)."
        ],
        recap: [
          "Government objectives: GDP growth, low inflation, low unemployment, balance of payments.",
          "Fiscal policy: Direct/indirect taxes and government expenditure.",
          "Monetary policy: Interest rates determine borrowing costs and spending demand."
        ]
      },
      {
        title: "Environmental Pressures, Ethics, and Corporate Social Responsibility",
        body:
          "**1. Environmental Pressures on Business:**\n" +
          "- Business production can generate **negative externalities** (air pollution, industrial chemical discharge, greenhouse gas emissions, single-use plastic waste).\n" +
          "- **Sustainable Development:** Meeting the economic needs of the present without compromising the ability of future generations to meet their own needs.\n" +
          "- **Pressure Groups:** Non-governmental organizations that campaign to influence corporate behaviour through boycotts, protests, negative PR, and lobbying for legislation.\n" +
          "- **Government Environmental Controls:** Carbon taxes, pollution permits, mandatory recycling laws, bans on hazardous substances.\n\n" +
          "**2. Business Ethics and Corporate Social Responsibility (CSR):**\n" +
          "- Ethics involves moral rules and values guiding business decision-making beyond minimum legal compliance.\n" +
          "- **Key Ethical Issues:** Fair wages, forbidding child labour, safe working environments, animal welfare in testing, truthful advertising, fair trade sourcing.\n" +
          "- **Costs of Acting Ethically / Responsibly:** Higher production costs (fair-trade premiums, expensive green tech, higher living wages).\n" +
          "- **Benefits of Acting Ethically / Responsibly:** Enhanced brand reputation, attraction of ethical consumers willing to pay premium prices, improved staff motivation, reduced risk of government fines or consumer boycotts.",
        examinerTips: [
          "Exam questions frequently ask whether businesses should prioritize ethics over profit: provide a balanced analysis weighing short-term compliance costs against long-term brand goodwill and customer loyalty.",
          "Define negative externalities as social costs that fall on third parties not involved in the transaction."
        ],
        commonMistakes: [
          "Assuming acting ethically always reduces profit; ethical branding often allows businesses to charge premium prices and attract top talent.",
          "Confusing legal compliance with ethics: ethics goes beyond what the law strictly commands."
        ],
        recap: [
          "Environmental impacts create negative externalities regulated by law and pressure groups.",
          "Sustainable development preserves resources for future generations.",
          "CSR and ethical conduct balance higher input costs with strong brand loyalty and reduced regulatory risk."
        ]
      },
      {
        title: "Globalisation, Multinational Companies, and Exchange Rates",
        body:
          "**1. Globalisation and International Trade:**\n" +
          "- Globalisation is the growing integration and interdependence of national economies, cultures, and markets across the world.\n" +
          "- **Drivers:** Reduced transport costs (container shipping), internet communications, free trade agreements, deregulation.\n" +
          "- **Opportunities:** Access to massive new export markets, cheaper overseas labour, global sourcing of raw materials.\n" +
          "- **Threats:** Fierce competition from low-cost foreign producers, risk of imported supply chain shocks.\n" +
          "- **Trade Protectionism:** Tariffs (taxes on imports), quotas (quantity limits), and embargoes used to protect domestic infant industries.\n\n" +
          "**2. Multinational Companies (MNCs):**\n" +
          "- Businesses that own production facilities, offices, or operations in more than one country.\n" +
          "- **Impact on Host Countries:**\n" +
          "  - *Benefits:* Job creation, introduction of advanced technology and managerial skills, tax revenues, infrastructure development.\n" +
          "  - *Drawbacks:* Exploitation of low-wage workers, environmental degradation, repatriation of profits back to headquarters, driving local domestic firms out of business.\n\n" +
          "**3. Exchange Rate Fluctuations:**\n" +
          "- An exchange rate is the price of one currency expressed in terms of another.\n" +
          "- **Appreciation (Stronger Currency) — SPICED:**\n" +
          "  - **S**trong **P**ound **I**mports **C**heap **E**xports **D**ear.\n" +
          "  - *Importers:* Benefit because foreign raw materials become cheaper.\n" +
          "  - *Exporters:* Suffer because exports become more expensive for overseas buyers, reducing sales volume.\n" +
          "- **Depreciation (Weaker Currency) — WPIDEC:**\n" +
          "  - **W**eak **P**ound **I**mports **D**ear **E**xports **C**heap.\n" +
          "  - *Importers:* Suffer from higher costs for imported materials.\n" +
          "  - *Exporters:* Gain price competitiveness in international export markets.",
        examinerTips: [
          "Remember the mnemonic **SPICED**: Strong Pound = Imports Cheaper, Exports Dearer. This makes exchange rate analysis foolproof.",
          "When evaluating MNCs in a host country, balance employment creation and tax revenue against environmental risks and profit repatriation."
        ],
        commonMistakes: [
          "Stating that an appreciating currency is always good for business; it harms domestic exporters whose prices rise abroad.",
          "Assuming an MNC is just an exporter; an MNC must have actual operations/factories in more than one country."
        ],
        recap: [
          "Globalisation integrates global markets via free trade, containerization, and communication.",
          "MNCs provide jobs and tech to host countries but may repatriate profits and harm local competitors.",
          "SPICED: Strong currency makes imports cheaper and exports dearer; weak currency does the reverse."
        ]
      }
    ]
  }
];
