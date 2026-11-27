import type { Chapter } from "./types";

/**
 * Cambridge IGCSE (9–1) Business (0774) 2027–2029 Syllabus Notes
 * Part 2: Chapters 4–6
 * - Chapter 4: Operations Management
 * - Chapter 5: Financial Information and Decisions
 * - Chapter 6: External Influences on Business Activity
 */
export const BUSINESS_PART2: Chapter[] = [
  {
    number: 4,
    title: "Operations Management",
    section: "Section 4: Production and Operations Management",
    topic: "Production Methods, Lean Production, Costs, Break-Even Analysis, Quality Assurance, and Location Decisions",
    intro:
      "Operations management is the business function responsible for transforming resource inputs (raw materials, labour, capital) into finished goods and services efficiently and sustainably. This chapter examines production methods (job, batch, flow), productivity and lean production (Kaizen, Just-in-Time), cost classification, break-even charts, total quality management (TQM), and commercial location decisions.",
    subheadings: [
      {
        title: "Production Methods, Productivity and Lean Production",
        body:
          "**1. Methods of Production:**\n" +
          "- **Job Production:**\n" +
          "  - Manufacturing a single, unique, custom-made bespoke product from start to finish to meet exact client specifications (e.g. custom wedding cakes, designer haute couture gowns, specialist bridges).\n" +
          "  - *Pros:* High customer satisfaction; unique product commands premium pricing; highly motivating for skilled craftspeople.\n" +
          "  - *Cons:* Extremely high unit production costs; slow production time; highly labor-intensive.\n" +
          "- **Batch Production:**\n" +
          "  - Manufacturing a specified quantity of identical products in a group (**batch**), before retooling/cleaning machinery to produce a different batch (e.g. bakery baking 500 white loaves, then cleaning tins to bake 300 wholemeal loaves; clothing lines in different sizes/colours).\n" +
          "  - *Pros:* Flexible variety; economies of scale relative to job production; machinery shared across product lines.\n" +
          "  - *Cons:* Down-time required to clean and reset machinery between batches; high storage costs for partially finished work-in-progress inventory.\n" +
          "- **Flow (Mass) Production:**\n" +
          "  - Continuous, standardized production of identical items along an automated assembly line (e.g. Coca-Cola bottling, automobile assembly).\n" +
          "  - *Pros:* Immense output volume; lowest possible unit cost due to technical and purchasing economies of scale; highly automated with robotics.\n" +
          "  - *Cons:* Enormous capital cost for automated factories; total inflexibility (cannot alter product design easily); assembly line stoppage shuts entire factory; demotivated workers doing repetitive tasks.\n\n" +
          "**2. Productivity vs Production:**\n" +
          "- **Production:** The total absolute quantity of output produced over a time period.\n" +
          "- **Productivity:** A measure of operational efficiency comparing output against inputs:\n" +
          "  $$\\text{Labour Productivity} = \\frac{\\text{Total Output}}{\\text{Number of Employees (or Labour Hours)}}$$\n" +
          "- **Methods to Increase Productivity:** Introducing advanced automation/robotics, training workers in lean techniques, improving staff motivation, and streamlining factory floor layouts.\n\n" +
          "**3. Lean Production and Waste Elimination:**\n" +
          "- An operational philosophy pioneered by Toyota focused on eliminating all forms of non-value-adding waste (**Muda**) to minimize costs.\n" +
          "- **Seven Core Wastes:** Overproduction, waiting time, transport, over-processing, excess inventory, unnecessary motion, and defective products.\n" +
          "- **Kaizen (Continuous Improvement):** Encourages all workers to suggest small, incremental daily improvements to their work processes.\n" +
          "- **Just-in-Time (JIT) Inventory:** Sourcing components so they arrive from suppliers moments before assembly, and delivering finished goods immediately to customers, eliminating expensive warehouse holding costs.\n" +
          "  - *Requirements:* Highly reliable suppliers, zero-defect quality culture, flexible multi-skilled workforce, close geographic proximity.",
        examinerTips: [
          "Distinguish clearly between production (total volume of output) and productivity (output per input: efficiency). A firm can increase production by hiring 100 more workers while productivity actually falls!",
          "In JIT questions, analyze both benefits (eliminates warehouse holding costs and tied-up working capital) and risks (any transport disruption or supplier strike shuts the factory instantly)."
        ],
        commonMistakes: [
          "Confusing batch production with flow production; batch stops and retools between runs, flow runs continuously with standardized identical output.",
          "Assuming lean production just means firing workers; lean production is a cultural philosophy of eliminating operational waste and empowering staff."
        ],
        recap: [
          "Production methods: Job (bespoke, unique), Batch (groups with retooling), Flow (continuous automated mass assembly).",
          "Labour Productivity = Output / Number of Workers (measures efficiency, not gross volume).",
          "Lean production eliminates waste (Muda) through Kaizen (continuous improvement) and Just-in-Time (JIT) inventory management."
        ]
      },
      {
        title: "Cost Classification and Break-Even Analysis",
        body:
          "**1. Classification of Costs:**\n" +
          "- **Fixed Costs (Overheads / Indirect Costs):** Costs that **DO NOT vary with the level of output** in the short run (e.g. factory rent, business rates, annual insurance premiums, executive salaries, depreciation). Paid even if output is zero.\n" +
          "- **Variable Costs (Direct Costs):** Costs that **vary directly with the quantity of output produced** (e.g. raw materials, piece-rate wages, packaging, direct production electricity).\n" +
          "- **Cost Formulas:**\n" +
          "  $$\\text{Total Variable Cost (TVC)} = \\text{Variable Cost per Unit (VC)} \\times \\text{Quantity of Output (Q)}$$\n" +
          "  $$\\text{Total Cost (TC)} = \\text{Fixed Costs (FC)} + \\text{Total Variable Costs (TVC)}$$\n" +
          "  $$\\text{Average Cost (Unit Cost)} = \\frac{\\text{Total Cost (TC)}}{\\text{Quantity of Output (Q)}}$$\n" +
          "- **Economies of Scale:** Factors that cause average unit cost to fall as the scale of production expands (Purchasing economies: bulk-buying discounts; Technical economies: large specialist machinery; Financial economies: lower interest rates; Managerial economies: specialist staff).\n\n" +
          "**2. Break-Even Analysis:**\n" +
          "- The **Break-Even Point** is the exact level of output where **Total Revenue = Total Cost**, resulting in zero profit and zero loss.\n" +
          "- **Contribution per Unit:** The amount each sold unit contributes toward paying fixed overheads and generating profit:\n" +
          "  $$\\text{Contribution per Unit} = \\text{Selling Price per Unit} - \\text{Variable Cost per Unit}$$\n" +
          "- **Break-Even Output Formula:**\n" +
          "  $$\\text{Break-Even Output (units)} = \\frac{\\text{Total Fixed Costs}}{\\text{Contribution per Unit}} = \\frac{\\text{Fixed Costs}}{\\text{Selling Price} - \\text{Variable Cost}}$$\n" +
          "- **Margin of Safety:** The amount by which actual (or planned) sales output exceeds the break-even output level:\n" +
          "  $$\\text{Margin of Safety} = \\text{Current Output / Sales Level} - \\text{Break-Even Output}$$\n" +
          "- *Usefulness of Break-Even:* Enables 'what-if' scenario planning (e.g. if rent rises, how many more units must be sold?); required for business plans.\n" +
          "- *Limitations:* Assumes all units produced are sold; assumes straight linear revenue and cost lines (ignores bulk-buying discounts or overtime wage rates); assumes fixed costs never change.",
        examinerTips: [
          "Always state units when calculating break-even: Break-even output is measured in UNITS (e.g. 5,000 units), while Margin of Safety is also measured in units.",
          "Memorize the formula: Break-even = Fixed Costs / (Price - Variable Cost). In graphical questions, the break-even point is where the Total Revenue line crosses the Total Cost line."
        ],
        commonMistakes: [
          "Drawing the Total Cost line starting at zero on a break-even chart; Total Cost MUST start at the Fixed Cost line on the vertical axis!",
          "Confusing Contribution per Unit (Price - Variable Cost) with Profit per Unit (Price - Average Total Cost)."
        ],
        recap: [
          "Fixed costs do not change with output (rent); Variable costs change directly with output (materials).",
          "Contribution per unit = Selling Price - Variable Cost per unit.",
          "Break-even output = Fixed Costs / Contribution per unit.",
          "Margin of Safety = Actual Output - Break-even Output."
        ]
      },
      {
        title: "Quality Management and Location Decisions",
        body:
          "**1. Quality in Business:**\n" +
          "- Delivering a product or service that meets or exceeds customer expectations, is fit for its intended purpose, and free from defects.\n" +
          "- **Methods of Maintaining and Ensuring Quality:**\n" +
          "  - **Quality Control (QC - Detection):** Traditional inspection method; quality control inspectors check completed products at the end of the production line. Defective items are scrapped or reworked. *Limitation:* Highly wasteful; defects are detected *after* money and labor have been spent producing them; does not identify root causes.\n" +
          "  - **Quality Assurance (QA - Prevention):** Setting rigorous quality standards and procedures at **every single stage of production**, from raw material inspection to delivery. Empowers production workers to check their own work; aims for **zero defects** (*right first time*).\n" +
          "  - **Total Quality Management (TQM):** A company-wide culture where every department and employee (from cleaner to CEO) commits to continuous quality improvement and treats colleagues as internal customers.\n\n" +
          "**2. Business Location Decisions:**\n" +
          "- Choosing where to locate an enterprise has long-term financial consequences and is difficult to reverse.\n" +
          "- **Factors Influencing Manufacturing Business Location:**\n" +
          "  - Proximity to raw materials (bulk-reducing industries locate near raw resources to minimize freight costs).\n" +
          "  - Proximity to markets (bulk-gaining industries where finished goods are heavier/bulkier than raw inputs locate near consumers).\n" +
          "  - Availability and cost of skilled/unskilled labour.\n" +
          "  - Transport infrastructure (highways, container ports, freight rail).\n" +
          "  - Availability of cheap utility power and clean water.\n" +
          "  - Government regional development grants, enterprise tax zones, and planning permissions.\n" +
          "- **Factors Influencing Retail & Service Business Location:**\n" +
          "  - High customer footfall, visual prominence, adjacent competitor clustering, parking facilities, leasehold rental rates, and low local crime rates.",
        examinerTips: [
          "Contrast Quality Control (inspecting and finding defects at the end) with Quality Assurance (designing processes to prevent defects from occurring in the first place).",
          "Differentiate bulk-reducing manufacturing (locating near raw materials, e.g. iron smelting) from bulk-gaining manufacturing (locating near final consumer markets, e.g. soft drink bottling)."
        ],
        commonMistakes: [
          "Using Quality Control and Quality Assurance as interchangeable terms; QC is detection at the end; QA is prevention throughout.",
          "Assuming low rent is the only factor in retail location; cheap rent in an alley with zero footfall will bankrupt a shop."
        ],
        recap: [
          "Quality approaches: Quality Control (end-of-line inspection/detection), Quality Assurance (prevention at every stage), TQM (company-wide culture).",
          "Manufacturing location depends on raw materials, market proximity, labour supply, utilities, and transport.",
          "Retail location depends on footfall, visibility, accessibility, competition, and rent."
        ]
      }
    ]
  },
  {
    number: 5,
    title: "Financial Information and Decisions",
    section: "Section 5: Business Finance and Accounting",
    topic: "Sources of Finance, Cash-Flow Forecasting, Income Statements, Balance Sheets, and Ratio Analysis",
    intro:
      "Finance is the lifeblood of business enterprise. This chapter explores internal and external, short-term and long-term sources of business finance, the vital distinction between cash flow and profit, cash-flow forecasting construction and remedies, income statements, statements of financial position (balance sheets), and profitability and liquidity financial ratio analysis.",
    subheadings: [
      {
        title: "Sources of Business Finance",
        body:
          "**1. Why Businesses Require Finance:**\n" +
          "- **Start-up Capital:** Purchasing initial premises, equipment, stock, and licenses before trading begins.\n" +
          "- **Working Capital:** Day-to-day liquidity to pay immediate operating expenses (wages, utility bills, raw material supplies).\n" +
          "- **Expansion Capital:** Funding business growth, factory expansion, acquisitions, or R&D.\n\n" +
          "**2. Internal Sources of Finance:**\n" +
          "- **Retained Profit:** Net profit reinvested back into the business rather than paid to shareholders as dividends. *Pros:* Zero interest, no debt incurred, no dilution of ownership control. *Cons:* Limited by profitability; deprives shareholders of dividends.\n" +
          "- **Sale of Existing Non-Current Assets:** Selling surplus land, buildings, or old machinery to generate cash. *Pros:* Injects cash without debt. *Cons:* Slow to sell; only a one-off measure.\n" +
          "- **Reduction in Working Capital:** Selling off accumulated slow-moving inventory or chasing trade debtors for immediate payment.\n\n" +
          "**3. External Sources of Finance:**\n" +
          "- **Short-Term External Finance ($< 1\\text{ year}$):**\n" +
          "  - **Bank Overdraft:** Flexible borrowing on bank account up to a limit; high interest on daily overdrawn sum, repayable on demand.\n" +
          "  - **Trade Credit:** Delaying supplier invoices (e.g. 30–60 days credit); interest-free short-term credit, but discounts foregone.\n" +
          "  - **Debt Factoring:** Selling unpaid customer invoices to a financial factoring agency at a discount (e.g. receiving $85\\%$ immediate cash); improves liquidity, but sacrifices profit margin.\n" +
          "- **Medium-Term External Finance ($1\\text{–}5\\text{ years}$):**\n" +
          "  - **Bank Loans:** Fixed capital sum repaid in monthly installments with interest; requires collateral security.\n" +
          "  - **Leasing:** Renting equipment/vehicles from a leasing company; avoids large capital outlay, maintenance included, but equipment never owned.\n" +
          "- **Long-Term External Finance ($> 5\\text{ years}$):**\n" +
          "  - **Issue of New Shares (Share Capital):** Exclusive to limited companies (`Ltd` and `Plc`). Selling shares to private investors or the public. *Pros:* Permanent capital, never repaid, zero interest. *Cons:* Dilutes original ownership, voting rights shared, dividends expected.\n" +
          "  - **Debentures (Corporate Bonds):** Long-term corporate loan certificates issued to the public with fixed annual interest, secured against corporate fixed assets, repaid on a fixed future date.\n" +
          "  - **Government Grants & Subsidies:** Non-repayable state financial assistance to encourage location in high-unemployment areas; subject to strict conditions.",
        examinerTips: [
          "Match the source of finance to the purpose: use short-term finance (overdraft, trade credit) for short-term working capital (stock, wages); use long-term finance (shares, bank loans, retained profit) for long-term capital assets (factory, heavy machinery).",
          "Explain why issuing shares is safer than bank loans during economic recessions: shares incur no mandatory monthly interest repayments, whereas failing to pay bank loan interest can force a firm into liquidation."
        ],
        commonMistakes: [
          "Suggesting a sole trader can issue shares; ONLY limited companies (Ltd and Plc) can issue shares.",
          "Calling retained profit 'cash in the bank'; retained profit is an accounting figure accumulated over years, often already reinvested in machinery."
        ],
        recap: [
          "Businesses need finance for start-up capital, working capital, and expansion.",
          "Internal sources: Retained profit, sale of surplus assets, working capital reduction.",
          "Short-term external: Overdraft, trade credit, debt factoring.",
          "Long-term external: Bank loans, leasing, debentures, share capital (Ltd/Plc), government grants.",
          "Match finance duration to asset lifespan."
        ]
      },
      {
        title: "Cash-Flow Forecasting and Working Capital",
        body:
          "**1. Cash vs Profit (The Vital Distinction):**\n" +
          "- **Cash:** Liquid money immediately available in bank accounts or physical currency to pay current debts.\n" +
          "- **Profit:** Revenue earned minus total costs incurred over a financial period (calculated using accruals: includes credit sales not yet paid in cash).\n" +
          "- **Insolvency:** A business can be highly profitable on paper yet still go bankrupt because customers bought on credit and cash inflows did not arrive in time to pay urgent supplier invoices and wages (**Cash Flow Crisis**).\n\n" +
          "**2. Cash-Flow Forecast Structure and Formulas:**\n" +
          "An itemized monthly projection of anticipated cash inflows and outflows:\n" +
          "- **Total Cash Inflows:** Sum of all cash receipts (cash sales, payments from debtors, bank loans, sale of assets).\n" +
          "- **Total Cash Outflows:** Sum of all cash payments (raw materials, wages, rent, utilities, loan repayments, tax).\n" +
          "- **Net Cash Flow Formula:**\n" +
          "  $$\\text{Net Cash Flow} = \\text{Total Cash Inflows} - \\text{Total Cash Outflows}$$\n" +
          "- **Closing Bank Balance Formula:**\n" +
          "  $$\\text{Closing Balance} = \\text{Opening Balance} + \\text{Net Cash Flow}$$\n" +
          "- *Note:* The Closing Balance of Month 1 automatically becomes the **Opening Balance of Month 2**.\n\n" +
          "**3. Managing and Resolving Cash-Flow Deficits:**\n" +
          "- Arrange a temporary bank overdraft facility with the bank in advance.\n" +
          "- Negotiate extended trade credit payment terms with suppliers (e.g. from 30 to 60 days).\n" +
          "- Tighten customer credit terms (offer cash discounts for immediate settlement; shorten credit from 60 to 30 days).\n" +
          "- Delay planned non-essential capital expenditure (postpone purchasing new delivery vans).\n" +
          "- Use debt factoring to receive immediate cash on unpaid invoices.",
        examinerTips: [
          "Memorize the cash-flow forecast mechanics: Closing Balance = Opening Balance + Net Cash Flow. The Closing Balance of each month is ALWAYS carried forward as the Opening Balance of the next month.",
          "Explain why a profitable business can fail: if credit customers take 90 days to pay, but suppliers and workers demand cash payment in 30 days, the business runs out of cash and becomes insolvent."
        ],
        commonMistakes: [
          "Writing that increasing sales will instantly solve a cash-flow crisis; if goods are sold on credit, costs rise immediately while cash inflows are delayed, worsening the cash crisis.",
          "Treating cash flow and profit as identical concepts."
        ],
        recap: [
          "Profit = Revenue - Total Costs; Cash is liquid money in the bank. Profit does not equal cash.",
          "Net Cash Flow = Cash Inflows - Cash Outflows.",
          "Closing Balance = Opening Balance + Net Cash Flow (carried forward to next month).",
          "Remedies for cash deficits: overdrafts, extending trade credit, debt factoring, delaying capital purchases."
        ]
      },
      {
        title: "Income Statements, Balance Sheets and Financial Ratios",
        body:
          "**1. The Income Statement (Profit and Loss Account):**\n" +
          "A formal financial accounting document recording business revenues, costs, and profits earned over an accounting year:\n" +
          "- **Revenue (Turnover):** $\\text{Revenue} = \\text{Selling Price} \\times \\text{Quantity Sold}$\n" +
          "- **Cost of Sales (COGS):** Direct variable costs of goods sold (Opening Inventory + Purchases - Closing Inventory).\n" +
          "- **Gross Profit:** $\\text{Gross Profit} = \\text{Revenue} - \\text{Cost of Sales}$\n" +
          "- **Operating Profit (Net Profit before Interest and Tax):** $\\text{Gross Profit} - \\text{Expenses (Overheads)}$\n" +
          "- **Profit for the Year (Net Profit):** Operating Profit - Interest - Corporation Tax.\n" +
          "- **Retained Profit:** Profit for the Year minus Dividends distributed to shareholders.\n\n" +
          "**2. Statement of Financial Position (Balance Sheet):**\n" +
          "A financial snapshot recording the value of business assets, liabilities, and equity on a specific single date:\n" +
          "- **Non-Current Assets:** Long-term physical assets retained for $> 1\\text{ year}$ (premises, machinery, delivery vehicles).\n" +
          "- **Current Assets:** Short-term liquid assets convertible to cash within $1\\text{ year}$ (inventory/stock, trade receivables/debtors, cash in bank).\n" +
          "- **Current Liabilities:** Short-term debts payable within $1\\text{ year}$ (trade payables/creditors, bank overdraft).\n" +
          "- **Non-Current Liabilities:** Long-term debts payable after $> 1\\text{ year}$ (bank mortgages, debentures).\n" +
          "- **Working Capital (Net Current Assets):**\n" +
          "  $$\\text{Working Capital} = \\text{Current Assets} - \\text{Current Liabilities}$$\n" +
          "- **Balance Sheet Accounting Equation:**\n" +
          "  $$\\text{Total Assets} - \\text{Total Liabilities} = \\text{Shareholders' Equity (Net Assets)}$$\n\n" +
          "**3. Financial Ratio Analysis:**\n" +
          "- **Profitability Ratios:**\n" +
          "  - **Gross Profit Margin (%):** Measures trading efficiency before overheads:\n" +
          "    $$\\text{Gross Profit Margin} = \\frac{\\text{Gross Profit}}{\\text{Revenue}} \\times 100$$\n" +
          "  - **Net Profit Margin (%):** Measures overall operational efficiency after overheads:\n" +
          "    $$\\text{Net Profit Margin} = \\frac{\\text{Profit for the Year}}{\\text{Revenue}} \\times 100$$\n" +
          "  - **Return on Capital Employed (ROCE %):** Measures how effectively capital invested is generating profit:\n" +
          "    $$\\text{ROCE} = \\frac{\\text{Operating Profit}}{\\text{Capital Employed}} \\times 100$$\n" +
          "    *(where $\\text{Capital Employed} = \\text{Total Assets} - \\text{Current Liabilities}$ or $\\text{Non-Current Liabilities} + \\text{Equity}$)*\n" +
          "- **Liquidity Ratios (Short-term Debt-Paying Ability):**\n" +
          "  - **Current Ratio:**\n" +
          "    $$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$$\n" +
          "    *(Ideal benchmark: $\\approx 1.5:1$ to $2.0:1$; below $1.0:1$ indicates severe working capital distress)*\n" +
          "  - **Acid Test (Quick) Ratio:** Eliminates illiquid inventory that cannot be sold immediately:\n" +
          "    $$\\text{Acid Test Ratio} = \\frac{\\text{Current Assets} - \\text{Inventories (Stock)}}{\\text{Current Liabilities}}$$\n" +
          "    *(Ideal benchmark: $\\approx 1.0:1$; below $1.0:1$ means short-term liquid cash and debtors cannot cover immediate debts)*",
        examinerTips: [
          "In financial ratio questions, always state both the formula AND the units (% for margins and ROCE; ratio format e.g. 1.8:1 for liquidity).",
          "Explain why the Acid Test ratio is a more rigorous measure of liquidity than the Current Ratio: it excludes inventory (stock), which cannot be converted into cash instantly in an emergency."
        ],
        commonMistakes: [
          "Dividing by Cost of Sales when calculating Gross Profit Margin; Gross Profit Margin is divided by REVENUE.",
          "Confusing an Income Statement (measures performance over a year) with a Balance Sheet (records assets/liabilities at a single point in time)."
        ],
        recap: [
          "Income Statement records Revenue, Cost of Sales, Gross Profit, Expenses, and Net Profit over a year.",
          "Balance Sheet records Non-Current Assets, Current Assets, Liabilities, and Equity on a specific date.",
          "Working Capital = Current Assets - Current Liabilities.",
          "Profitability: Gross Profit Margin (%), Net Profit Margin (%), ROCE (%).",
          "Liquidity: Current Ratio (CA/CL) and Acid Test Ratio ((CA - Inventory)/CL)."
        ]
      }
    ]
  },
  {
    number: 6,
    title: "External Influences on Business Activity",
    section: "Section 6: Macroeconomic, Environmental and Global Environment",
    topic: "Government Economic Objectives, Fiscal and Monetary Policy, Business Ethics, Environmental Controls, and Globalisation",
    intro:
      "Businesses do not operate in a vacuum; their profitability and strategic choices are constantly shaped by macroeconomic fluctuations, government economic policies, legal consumer and employment legislation, environmental pressures, and international exchange rate volatility. This chapter analyzes national economic objectives, fiscal/monetary/supply-side policies, business ethics, and multinational global commerce.",
    subheadings: [
      {
        title: "Government Economic Objectives and Policies",
        body:
          "**1. The Four Primary Macroeconomic Objectives of Government:**\n" +
          "1. **Economic Growth (Rising Real GDP):** Increasing national output over time to raise material living standards and tax revenues.\n" +
          "2. **Low and Stable Inflation (Price Stability):** Preventing rapid price inflation (e.g. keeping inflation around $2\\%$); high inflation erodes consumer purchasing power, increases business borrowing costs, and renders exports internationally uncompetitive.\n" +
          "3. **Low Unemployment (High Employment):** Minimizing joblessness to avoid social distress, reduce state welfare spending, and maximize productive economic output.\n" +
          "4. **Balance of Payments Stability:** Ensuring export earnings balance import expenditures to maintain currency stability.\n\n" +
          "**2. Government Economic Policy Instruments:**\n" +
          "- **Fiscal Policy (Taxation and Government Spending):**\n" +
          "  - **Direct Taxes:** Levied on income and corporate profits (Income Tax, Corporation Tax). Increasing income tax reduces consumer disposable income, depressing retail consumer spending.\n" +
          "  - **Indirect Taxes:** Levied on goods and services (VAT, excise duties). Increasing VAT increases retail prices, raising consumer inflation.\n" +
          "  - **Government Expenditure:** Public spending on infrastructure, hospitals, schools directly injects demand into construction and supply firms.\n" +
          "- **Monetary Policy (Interest Rates and Money Supply):**\n" +
          "  - Managed by the Central Bank.\n" +
          "  - **Impact of Raising Interest Rates:**\n" +
          "    1. Borrowing costs rise: business investment in new factories and machinery becomes more expensive and decreases.\n" +
          "    2. Consumer borrowing on mortgages and credit cards rises: consumers cut discretionary spending, reducing demand for luxury goods, cars, and housing.\n" +
          "    3. Foreign capital flows into domestic banks seeking high yields: domestic **exchange rate appreciates** (strengthens), making exports more expensive abroad and imports cheaper.\n" +
          "- **Supply-Side Policies:** Measures aimed at increasing the productive capacity of the economy (investing in education/training, deregulation, privatization, reducing business taxes).",
        examinerTips: [
          "Trace the complete economic chain of causation when analyzing an interest rate rise: Higher interest rates -> Borrowing costs increase -> Consumers cut borrowing and increase savings -> Discretionary consumer spending drops -> Business sales revenues and profits fall.",
          "Distinguish clearly between direct taxes (paid on income and profits, e.g. Corporation Tax) and indirect taxes (paid on expenditure, e.g. VAT)."
        ],
        commonMistakes: [
          "Assuming low interest rates are always good for all businesses; savers and businesses with large cash deposits earn lower interest income.",
          "Confusing fiscal policy (taxation and government spending) with monetary policy (interest rates and money supply)."
        ],
        recap: [
          "Government economic objectives: Economic growth (GDP), low inflation, low unemployment, and balance of payments stability.",
          "Fiscal policy manages direct/indirect taxes and public spending.",
          "Monetary policy adjusts interest rates; higher interest rates increase borrowing costs and dampen consumer demand.",
          "Supply-side policies enhance national productive efficiency."
        ]
      },
      {
        title: "Environmental, Ethical and Legal Pressures",
        body:
          "**1. Business Activity and the Environment:**\n" +
          "- **Negative Externalities (Social Costs):** Harmful side-effects of production suffered by third parties without financial compensation (air pollution, plastic waste, toxic water discharge, traffic congestion).\n" +
          "- **Social Costs vs Social Benefits:**\n" +
          "  $$\\text{Social Cost} = \\text{Private Cost (firm's internal expenses)} + \\text{External Cost (pollution/harm to society)}$$\n" +
          "  $$\\text{Social Benefit} = \\text{Private Benefit (firm's profit/revenue)} + \\text{External Benefit (jobs, infrastructure)}$$\n" +
          "- **Environmental Pressures:** Governments enforce carbon emissions caps, landfill taxes, and packaging recycling regulations; green **pressure groups** organize consumer boycotts and adverse publicity against polluting corporations.\n\n" +
          "**2. Business Ethics and Corporate Social Responsibility (CSR):**\n" +
          "- Acting morally beyond mandatory legal compliance (fair living wages, refusing child/sweatshop labour in supply chains, fairtrade sourcing, eliminating animal testing, promoting diversity).\n" +
          "- *Commercial Benefits of CSR:* Enhances brand reputation, attracts ethical consumers willing to pay premium prices, motivates employees, reduces risk of boycotts.\n" +
          "- *Commercial Costs of CSR:* Higher operating costs (expensive fairtrade materials, higher wages), which may reduce short-term profit margins compared to unscrupulous competitors.\n\n" +
          "**3. Legal Controls over Business:**\n" +
          "- **Employment Law:** Statutory minimum wage, limits on working hours, equal pay, protection against unfair dismissal, non-discrimination (gender, race, disability).\n" +
          "- **Health and Safety Law:** Mandatory provision of protective equipment (hard hats, goggles), fire exits, ergonomic workstations, machinery guards, safety training.\n" +
          "- **Consumer Protection Law:** Prohibition of false advertising descriptions, mandatory refund rights for defective products, product safety standards.",
        examinerTips: [
          "Use the formula: Social Cost = Private Cost + External Cost. In exam case studies, identify the exact external cost (e.g. respiratory illness caused by factory soot).",
          "Evaluate CSR by weighing higher short-term production costs against long-term brand loyalty and positive public relations."
        ],
        commonMistakes: [
          "Confusing ethical behaviour (voluntary moral choices) with legal adherence (mandatory laws enforced by penalties).",
          "Believing pressure groups are government bodies; pressure groups are non-governmental organisations (e.g. Greenpeace) using publicity to influence policy."
        ],
        recap: [
          "Social Cost = Private Cost + External Cost; Social Benefit = Private Benefit + External Benefit.",
          "Environmental controls include carbon taxes, green regulations, and pressure group boycotts.",
          "CSR builds long-term brand equity and customer loyalty, but increases operating costs.",
          "Legal controls govern employment rights, workplace health and safety, and consumer protection."
        ]
      },
      {
        title: "International Trade, Globalisation and Exchange Rates",
        body:
          "**1. Globalisation and Multinational Corporations (MNCs):**\n" +
          "- **Globalisation:** The accelerating worldwide integration of national economies through free trade, cross-border capital investment, migration, and rapid digital communication.\n" +
          "- **Opportunities for Business:** Access to enormous global consumer markets, lower manufacturing costs via offshoring to low-wage emerging economies, global brand awareness.\n" +
          "- **Threats to Business:** Intense low-cost foreign competition threatening domestic market share, supply chain vulnerabilities, vulnerability to global financial contagions.\n\n" +
          "**2. Exchange Rates and Their Impact on Business:**\n" +
          "- An **exchange rate** is the price of one national currency expressed in terms of another currency (e.g. $\\pounds 1 = \\$1.30$).\n" +
          "- **Currency Appreciation (Strong Currency — 'SPICED'):**\n" +
          "  - **S**trong **P**ound: **I**mports **C**heaper, **E**xports **D**earer.\n" +
          "  - *Impact on Importers:* Domestic currency buys more foreign currency; imported raw materials and finished goods become **cheaper**, lowering costs.\n" +
          "  - *Impact on Exporters:* Domestic goods priced in foreign currencies become **more expensive abroad**, reducing export sales demand and overseas revenues.\n" +
          "- **Currency Depreciation (Weak Currency):**\n" +
          "  - Domestic currency loses value against foreign currencies.\n" +
          "  - *Impact on Importers:* Imported supplies become **more expensive**, increasing production costs and driving cost-push inflation.\n" +
          "  - *Impact on Exporters:* Export goods become **cheaper and more competitive in foreign markets**, boosting export sales volume and international competitiveness.",
        examinerTips: [
          "Memorize the classic acronym SPICED: Strong Pound Imports Cheaper, Exports Dearer! This guarantees you never mix up the impact of currency appreciation on trade.",
          "When analyzing currency depreciation, explain that exporters benefit because their goods become cheaper abroad, while businesses relying on imported components face higher costs."
        ],
        commonMistakes: [
          "Assuming a strong currency is always good for an economy; a strong currency severely damages domestic exporters and tourism.",
          "Confusing appreciation (currency rises in value) with depreciation (currency falls in value)."
        ],
        recap: [
          "Globalisation provides access to massive global markets and low-cost production, but increases foreign competition.",
          "Exchange rate is the price of one currency in terms of another.",
          "Appreciation (SPICED): Imports become cheaper, Exports become more expensive.",
          "Depreciation: Imports become more expensive, Exports become cheaper and more competitive."
        ]
      }
    ]
  }
];
