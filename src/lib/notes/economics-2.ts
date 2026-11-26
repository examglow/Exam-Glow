import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Economics (0455) 2027–2029 Syllabus Notes
 * Part 2: Chapters 7–12 (Section 2 Part 2 & Section 3 Part 1)
 */
export const ECONOMICS_PART2: Chapter[] = [
  {
    number: 7,
    title: "Price Changes & Price Elasticity of Demand (PED)",
    section: "2. The Allocation of Resources",
    topic: "2.5 Price Changes & 2.6 Price Elasticity of Demand (PED)",
    intro:
      "When market demand or supply conditions change, the equilibrium price adjusts. How sensitive consumers are to these price changes is captured by Price Elasticity of Demand (PED), a vital metric for corporate pricing and government taxation.",
    subheadings: [
      {
        title: "Causes and Consequences of Price Changes",
        body:
          "**Shifts in Market Equilibrium:**\n" +
          "When non-price determinants change, demand or supply curves shift, leading to a new market equilibrium price and quantity:\n\n" +
          "1. **Increase in Demand ($D \\uparrow$):**\n" +
          "   - Demand curve shifts rightward. A temporary shortage occurs at the initial price, bidding price upwards.\n" +
          "   - **Consequence:** Both equilibrium price ($P \\uparrow$) and equilibrium quantity ($Q \\uparrow$) increase.\n" +
          "2. **Decrease in Demand ($D \\downarrow$):**\n" +
          "   - Demand curve shifts leftward. A temporary surplus drives prices down.\n" +
          "   - **Consequence:** Both equilibrium price ($P \\downarrow$) and equilibrium quantity ($Q \\downarrow$) fall.\n" +
          "3. **Increase in Supply ($S \\uparrow$):**\n" +
          "   - Supply curve shifts rightward (e.g. better technology or subsidies).\n" +
          "   - **Consequence:** Equilibrium price falls ($P \\downarrow$), while equilibrium quantity expands ($Q \\uparrow$).\n" +
          "4. **Decrease in Supply ($S \\downarrow$):**\n" +
          "   - Supply curve shifts leftward (e.g. rising raw material costs or indirect taxes).\n" +
          "   - **Consequence:** Equilibrium price rises ($P \\uparrow$), while equilibrium quantity contracts ($Q \\downarrow$).\n\n" +
          "**Consequences for Economic Agents:**\n" +
          "- **Consumers:** Higher prices reduce real purchasing power and living standards; lower prices enhance consumer surplus.\n" +
          "- **Producers:** Rising prices for their goods boost revenues and margins, encouraging business expansion.\n" +
          "- **Workers:** High prices for industry outputs often translate into higher derived demand for labour, resulting in higher wages and job opportunities.",
        examinerTips: [
          "Always state both the direction of the price change and the direction of the quantity change in equilibrium analysis.",
          "Describe the adjustment process step-by-step: shift $\\rightarrow$ temporary shortage/surplus $\\rightarrow$ price adjustment $\\rightarrow$ new equilibrium.",
        ],
        commonMistakes: [
          "Confusing simultaneous shifts: if both demand and supply increase, quantity will definitely increase, but the effect on price is indeterminate without knowing the relative magnitudes of the shifts.",
        ],
        recap: [
          "Explain the effect of a technological breakthrough on equilibrium price and quantity.",
          "How does an increase in consumer incomes affect the market price of normal goods?",
        ],
      },
      {
        title: "Definition, Calculation & Numerical Ranges of PED",
        body:
          "**Definition:**\n" +
          "- **Price Elasticity of Demand (PED)** measures the responsiveness of the quantity demanded of a good to a change in its price.\n\n" +
          "**Calculation Formula:**\n" +
          "$$PED = \\frac{\\% \\Delta Q_d}{\\% \\Delta P} = \\frac{\\frac{\\Delta Q_d}{Q_{\\text{original}}} \\times 100}{\\frac{\\Delta P}{P_{\\text{original}}} \\times 100}$$\n\n" +
          "- By the Law of Demand, PED is virtually always negative (since price and quantity demanded move in opposite directions). In economics, we usually refer to its absolute value ($|PED|$).\n\n" +
          "**The Five Ranges of PED:**\n" +
          "1. **Price Elastic Demand ($|PED| > 1$):**\n" +
          "   - A percentage change in price leads to a **proportionately larger** percentage change in quantity demanded (e.g. $PED = -2.5$).\n" +
          "   - Consumers are highly price-sensitive. Demand curve is relatively flat.\n" +
          "2. **Price Inelastic Demand ($0 \\le |PED| < 1$):**\n" +
          "   - A percentage change in price leads to a **proportionately smaller** percentage change in quantity demanded (e.g. $PED = -0.4$).\n" +
          "   - Consumers are price-insensitive. Demand curve is relatively steep.\n" +
          "3. **Unitary Elastic Demand ($|PED| = 1$):**\n" +
          "   - Percentage change in quantity demanded exactly equals percentage change in price (e.g. $PED = -1.0$). Total expenditure remains unchanged.\n" +
          "4. **Perfectly Inelastic Demand ($PED = 0$):**\n" +
          "   - Quantity demanded does not change at all regardless of price. Demand curve is completely **vertical** (e.g. life-saving insulin with no substitutes).\n" +
          "5. **Perfectly Elastic Demand ($|PED| = \\infty$):**\n" +
          "   - Any price increase causes quantity demanded to drop to zero. Demand curve is completely **horizontal**.",
        examinerTips: [
          "Always show the formula and complete intermediate percentage calculations in Paper 2 calculation questions to secure method marks.",
          "Remember that PED is a ratio of percentages, not absolute numbers. Divide change by original value.",
        ],
        commonMistakes: [
          "Calculating $\\frac{\\% \\Delta P}{\\% \\Delta Q_d}$ (putting price on top). Remember: quantity change is ALWAYS on the top ($Q$ over $P$).",
        ],
        recap: [
          "State the formula for calculating Price Elasticity of Demand.",
          "If price rises by 10% and quantity demanded falls by 15%, calculate the PED and classify the elasticity.",
        ],
      },
      {
        title: "Determinants of PED, Revenue & Economic Significance",
        body:
          "**Determinants of PED (SPLAT):**\n" +
          "- **Substitutes:** The greater the number and closeness of available substitutes, the more elastic the demand (e.g. rival brands of cereal).\n" +
          "- **Proportion of Income:** Goods that take up a very small fraction of disposable income (e.g. matches, salt) are highly inelastic; expensive items (cars) are price elastic.\n" +
          "- **Luxury vs Necessity:** Basic necessities (bread, water, insulin) have inelastic demand; luxury items (designer jewelry, sports cars) have elastic demand.\n" +
          "- **Addictive Nature / Habit:** Habit-forming goods (tobacco, alcohol) have highly inelastic demand.\n" +
          "- **Time Period:** In the short run, consumers lack alternatives (inelastic); in the long run, consumers find substitutes or switch habits (more elastic).\n\n" +
          "**PED and Total Revenue ($TR = P \\times Q$):**\n" +
          "- **Inelastic Demand ($|PED| < 1$):**\n" +
          "  - Price increase ($P \\uparrow$) $\\implies$ Total Revenue **increases** ($TR \\uparrow$). The gain from higher price outweighs the small loss in sales volume.\n" +
          "  - Price cut ($P \\downarrow$) $\\implies$ Total Revenue **decreases** ($TR \\downarrow$).\n" +
          "- **Elastic Demand ($|PED| > 1$):**\n" +
          "  - Price cut ($P \\downarrow$) $\\implies$ Total Revenue **increases** ($TR \\uparrow$). The surge in sales volume outweighs the smaller price per unit.\n" +
          "  - Price increase ($P \\uparrow$) $\\implies$ Total Revenue **decreases** ($TR \\downarrow$).\n" +
          "- **Unitary Elastic ($|PED| = 1$):** Total revenue remains constant when price changes.\n\n" +
          "**Significance for Decision-Makers:**\n" +
          "- **Firms:** Informs pricing strategies to maximize revenue. Firms with inelastic demand can raise prices to boost revenue; firms in highly competitive markets with elastic demand should lower prices or compete via non-price branding.\n" +
          "- **Governments:** Helps evaluate tax revenue. Levying indirect excise taxes on goods with inelastic demand (petrol, cigarettes) yields substantial tax revenues with minimal reduction in quantity traded.",
        examinerTips: [
          "Memorize the revenue rule: for inelastic goods, price and total revenue move in the SAME direction; for elastic goods, they move in OPPOSITE directions.",
          "When governments want to discourage consumption of harmful goods, a tax works only if PED is somewhat elastic or if the tax is exceptionally high.",
        ],
        commonMistakes: [
          "Assuming that raising prices always increases a firm's total revenue. If demand is price elastic, raising prices will destroy total revenue.",
        ],
        recap: [
          "Explain why the demand for petrol is relatively price inelastic in the short run.",
          "A business with price elastic demand wants to boost revenue. Should it raise or lower its selling price? Justify your answer.",
        ],
      },
    ],
  },
  {
    number: 8,
    title: "Price Elasticity of Supply (PES) & Market Economic System",
    section: "2. The Allocation of Resources",
    topic: "2.7 Price Elasticity of Supply (PES) & 2.8 Market Economic System",
    intro:
      "Price Elasticity of Supply (PES) measures how swiftly producers can adjust production when prices change. This chapter also examines the market economic system, evaluating how the price mechanism coordinates activity without government intervention.",
    subheadings: [
      {
        title: "Definition, Calculation & Numerical Ranges of PES",
        body:
          "**Definition:**\n" +
          "- **Price Elasticity of Supply (PES)** measures the responsiveness of the quantity supplied of a good to a change in its price.\n\n" +
          "**Calculation Formula:**\n" +
          "$$PES = \\frac{\\% \\Delta Q_s}{\\% \\Delta P} = \\frac{\\frac{\\Delta Q_s}{Q_{\\text{original}}} \\times 100}{\\frac{\\Delta P}{P_{\\text{original}}} \\times 100}$$\n\n" +
          "- Because price and quantity supplied move in the same direction by the Law of Supply, PES is **always positive** ($PES > 0$).\n\n" +
          "**Ranges of PES:**\n" +
          "1. **Price Elastic Supply ($PES > 1$):**\n" +
          "   - A percentage change in price leads to a **proportionately larger** percentage change in quantity supplied (e.g. $PES = +2.0$).\n" +
          "   - Supply curve is relatively flat and intercepts the vertical price axis.\n" +
          "2. **Price Inelastic Supply ($0 < PES < 1$):**\n" +
          "   - A percentage change in price leads to a **proportionately smaller** percentage change in quantity supplied (e.g. $PES = +0.5$).\n" +
          "   - Supply curve is relatively steep and intercepts the horizontal quantity axis.\n" +
          "3. **Unitary Elastic Supply ($PES = 1$):**\n" +
          "   - Percentage change in quantity supplied equals percentage change in price. Supply curve is a straight line passing through the origin $(0,0)$.\n" +
          "4. **Perfectly Inelastic Supply ($PES = 0$):**\n" +
          "   - Quantity supplied is completely fixed regardless of price. Supply curve is a **vertical line** (e.g. seats at a sports final stadium, original Picasso paintings).\n" +
          "5. **Perfectly Elastic Supply ($PES = \\infty$):**\n" +
          "   - Producers will supply an infinite amount at a given price, but zero at any lower price. Supply curve is a **horizontal line**.",
        examinerTips: [
          "PES values are positive. If your calculation yields a negative number, recheck your math.",
          "Any straight-line supply curve that starts from the origin has unitary elasticity ($PES = 1$) along its entire length, regardless of its slope.",
        ],
        commonMistakes: [
          "Confusing PED and PES formulas: ensure you use quantity supplied ($Q_s$) for PES.",
        ],
        recap: [
          "Define Price Elasticity of Supply and state its mathematical formula.",
          "Explain why the supply of agricultural crops is typically price inelastic in the short run.",
        ],
      },
      {
        title: "Determinants of PES and Significance for Firms",
        body:
          "**Determinants of PES:**\n" +
          "- **Availability of Spare Capacity:** If a factory operates with idle machinery and underutilized workers, it can easily expand output when prices rise (elastic supply). If running at 100% capacity, supply is inelastic until new factories are constructed.\n" +
          "- **Availability of Finished Inventories / Stocks:** Firms holding large warehouse stockpiles of non-perishable goods can rapidly release supplies onto the market (elastic supply). Perishable fresh goods cannot be stockpiled (inelastic).\n" +
          "- **Production Time and Agricultural Lag:** Goods requiring lengthy production cycles (e.g. passenger aircraft or seasonal crops requiring months to grow) have highly inelastic supply in the short run.\n" +
          "- **Mobility of Factors of Production:** If labour and capital are multi-skilled and easily reallocated between different product lines, supply is elastic.\n" +
          "- **Time Period:** Supply is always more elastic in the **long run** than in the **short run** because firms have time to build new facilities, order machinery, and train workers.\n\n" +
          "**Significance for Producers:**\n" +
          "- High PES is commercially advantageous because it enables firms to respond rapidly to rising prices and capture extra profits, or cut production quickly when prices collapse to avoid costly unsold inventory.\n" +
          "- Firms invest in just-in-time logistics, automation, and cross-trained labour to increase their PES.",
        examinerTips: [
          "Use the distinction between short run and long run when evaluating PES: short run supply is constrained by fixed factors of production; long run supply is flexible.",
          "Cite concrete examples: manufactured plastic toys (elastic) versus fresh organic strawberries (inelastic in the short run).",
        ],
        commonMistakes: [
          "Stating that perishable goods have elastic supply. Fresh fruit and fresh fish perish quickly, so they cannot be stored to respond to price changes.",
        ],
        recap: [
          "List four key determinants of Price Elasticity of Supply.",
          "Explain why a manufacturer with substantial spare capacity has elastic supply.",
        ],
      },
      {
        title: "The Market Economic System: Advantages & Disadvantages",
        body:
          "**Definition:**\n" +
          "- A **Market Economic System** (free enterprise or capitalist system) is an economy where all resources are privately owned, and the fundamental questions of what, how, and for whom to produce are determined entirely by the **price mechanism** (forces of supply and demand) without government intervention.\n\n" +
          "**Key Features:**\n" +
          "- **Private Property Rights:** Land and capital are owned by private individuals and corporations.\n" +
          "- **Self-Interest & Profit Motive:** Producers seek to maximize profit; consumers seek to maximize personal satisfaction.\n" +
          "- **Price Mechanism:** Allocates resources via price signals (Adam Smith's 'invisible hand').\n" +
          "- **Consumer Sovereignty:** Consumers dictate what is produced through their spending choices ('voting with their wallets').\n" +
          "- **Minimal Government Intervention:** Government role is limited strictly to maintaining law and order and enforcing property rights.\n\n" +
          "**Advantages of the Market System:**\n" +
          "- **Productive and Dynamic Efficiency:** Competitive pressures force firms to minimize costs and eliminate waste.\n" +
          "- **Innovation and Variety:** High profit incentives motivate research, technological breakthroughs, and wide product choice.\n" +
          "- **Automatic Resource Allocation:** Responsive to changing consumer tastes without bureaucratic planning delays.\n\n" +
          "**Disadvantages and Limitations:**\n" +
          "- **Underprovision of Merit Goods:** Essential services like basic education and preventive healthcare are underprovided because low-income families cannot afford market prices.\n" +
          "- **Overprovision of Demerit Goods:** Harmful products (cigarettes, narcotics, pollution) are overproduced due to high profitability.\n" +
          "- **Missing Public Goods:** Goods like street lighting, flood defense, and national defense are not produced at all by private firms due to the free-rider problem.\n" +
          "- **Income Inequality:** Wealth concentrates among owners of capital and land, leaving vulnerable, elderly, or sick citizens in poverty.\n" +
          "- **Monopoly Exploitation:** Lack of regulation allows large firms to dominate markets, restricting output and charging excessive prices.",
        examinerTips: [
          "In 8-mark evaluate questions on the market economy, balance your answer: give 2 distinct advantages (efficiency, consumer sovereignty) and 2 distinct disadvantages (inequality, market failure).",
          "Always use precise economic terms: 'consumer sovereignty', 'price mechanism', 'merit goods', and 'monopoly power'.",
        ],
        commonMistakes: [
          "Asserting that pure market economies exist today. In reality, all modern economies are mixed economies, though some lean much more toward market mechanisms.",
        ],
        recap: [
          "Define consumer sovereignty in a market economy.",
          "Explain two significant drawbacks of relying solely on the free market to allocate healthcare.",
        ],
      },
    ],
  },
  {
    number: 9,
    title: "Market Failure & Mixed Economic System",
    section: "2. The Allocation of Resources",
    topic: "2.9 Market Failure & 2.10 Mixed Economic System",
    intro:
      "When free markets fail to achieve an efficient allocation of scarce resources, market failure occurs. This chapter explores external costs and benefits, merit and demerit goods, public goods, and how governments intervene in mixed economic systems to correct these failures.",
    subheadings: [
      {
        title: "Market Failure: Externalities, Merit, Demerit & Public Goods",
        body:
          "**Definition of Market Failure:**\n" +
          "- **Market Failure** occurs when the free market mechanism fails to allocate scarce resources efficiently, resulting in a net loss of economic and social welfare.\n\n" +
          "**Key Concepts of Costs and Benefits:**\n" +
          "- **Private Cost ($PC$):** The direct internal cost incurred by the producer or consumer involved in an economic transaction (e.g. cost of fuel paid by a driver).\n" +
          "- **External Cost ($EC$) (Negative Externality):** The harmful third-party side effect imposed on people not directly involved in the transaction (e.g. toxic emissions, lung diseases, traffic congestion).\n" +
          "- **Social Cost ($SC$):** Total cost to society as a whole:\n" +
          "  $$\\text{Social Cost} = \\text{Private Cost} + \\text{External Cost}$$\n" +
          "- **Private Benefit ($PB$):** Direct utility or revenue gained by the consumer or firm (e.g. driver reaches destination).\n" +
          "- **External Benefit ($EB$) (Positive Externality):** Beneficial side effect enjoyed by third parties (e.g. vaccination protects unimmunized citizens from contagion).\n" +
          "- **Social Benefit ($SB$):** Total benefit to society:\n" +
          "  $$\\text{Social Benefit} = \\text{Private Benefit} + \\text{External Benefit}$$\n\n" +
          "**Classification of Goods Causing Market Failure:**\n" +
          "- **Merit Goods:** Goods deemed more beneficial to society than individuals realize (due to information failure). They generate positive externalities (e.g. education, healthcare, vaccines). In a free market, they are **under-consumed and under-produced**.\n" +
          "- **Demerit Goods:** Goods deemed harmful to consumers and third parties. They generate negative externalities (e.g. cigarettes, alcohol, gambling). In a free market, they are **over-consumed and over-produced**.\n" +
          "- **Public Goods:** Goods with two distinct properties:\n" +
          "  - **Non-excludable:** Impossible to prevent non-payers from consuming the good once provided.\n" +
          "  - **Non-rivalrous:** Consumption by one person does not diminish availability to others (e.g. street lighting, national defense, lighthouses).\n" +
          "  - *Free-rider problem:* Rational consumers will not pay voluntary fees for a good they can consume for free; therefore, private firms cannot make a profit and will not supply public goods at all (missing market).",
        examinerTips: [
          "State the two definitive characteristics of public goods: non-excludable and non-rivalrous.",
          "Distinguish clearly between merit goods (which the market provides, but underproduces) and public goods (which the free market will not provide at all).",
        ],
        commonMistakes: [
          "Calling public goods 'goods provided by the government'. That is state provision. A public good is defined by non-excludability and non-rivalry.",
        ],
        recap: [
          "Write the equation linking private cost, external cost, and social cost.",
          "Explain why the free market fails to provide public goods like street lighting.",
        ],
      },
      {
        title: "The Mixed Economic System: Structure and Roles",
        body:
          "**Definition:**\n" +
          "- A **Mixed Economic System** combines features of both a free market and a planned economic system, with resources allocated partly by the private sector (via the price mechanism) and partly by the public sector (via government intervention and state ownership).\n\n" +
          "**Structure of the Mixed Economy:**\n" +
          "- **Private Sector:** Privately owned businesses operating for profit. Produces most consumer goods, electronics, clothing, and retail services efficiently driven by competition.\n" +
          "- **Public Sector:** State-owned enterprises and government departments funded by taxation. Provides public goods (defense, policing), essential merit goods (primary education, universal healthcare), and regulates private market abuses.\n\n" +
          "**Balancing Market Efficiency with Equity:**\n" +
          "- The mixed economy captures the dynamic innovation and efficiency of free markets while using government policy to prevent market failures, reduce poverty, and protect the vulnerable.",
        examinerTips: [
          "Remember that virtually all modern countries (UK, US, Germany, Kenya, Japan) are mixed economies; they differ only in the relative size of their public versus private sectors.",
          "Evaluate how a mixed economy balances efficiency (private sector) with equity and public welfare (public sector).",
        ],
        commonMistakes: [
          "Assuming mixed economies have an equal 50/50 split between private and public sectors. The proportion varies widely between countries.",
        ],
        recap: [
          "Define a mixed economic system.",
          "Describe the role of the public sector in a mixed economy.",
        ],
      },
      {
        title: "Government Intervention to Address Market Failure",
        body:
          "Governments utilize a spectrum of policy instruments to correct market failures:\n\n" +
          "**1. Indirect Taxation on Demerit Goods:**\n" +
          "- Levying excise taxes or carbon taxes increases private production costs, shifting the supply curve leftward.\n" +
          "- Internalises the negative externality, raising market price and contracting quantity demanded toward the socially optimal output level.\n" +
          "- *Limitation:* If demand is price inelastic (e.g. tobacco), consumers absorb the price increase, generating tax revenue but having limited impact on consumption.\n\n" +
          "**2. Subsidies on Merit Goods:**\n" +
          "- Financial payments granted to producers of merit goods (e.g. renewable solar energy, bus transit, organic farming) lower production costs, shifting supply rightward.\n" +
          "- Lowers consumer price and expands quantity traded toward socially optimal levels.\n" +
          "- *Limitation:* Incurs heavy opportunity cost for public finances; firms may become dependent and inefficient.\n\n" +
          "**3. Maximum Price Ceilings:**\n" +
          "- Legally established maximum price set **below** the equilibrium price to protect low-income consumers from high prices on essentials (e.g. staple bread, rental housing).\n" +
          "- *Consequence:* Causes a persistent **shortage** ($Q_d > Q_s$) leading to black markets and non-price rationing.\n\n" +
          "**4. Minimum Price Floors:**\n" +
          "- Legally established price set **above** the equilibrium price (e.g. National Minimum Wage for workers, minimum unit pricing on alcohol).\n" +
          "- *Consequence:* Causes a **surplus** ($Q_s > Q_d$) (e.g. excess supply of labour or agricultural surpluses).\n\n" +
          "**5. Direct State Provision:**\n" +
          "- The government finances and provides public goods (national defense, street lighting) and merit goods (state schools, NHS hospitals) free at the point of delivery through general tax revenues.\n\n" +
          "**6. Regulation, Legislation & Information Campaigns:**\n" +
          "- Legal bans on smoking in public indoor venues, mandatory seatbelts, maximum pollution emission quotas, and anti-monopoly laws.",
        examinerTips: [
          "Maximum price ceilings MUST be set below equilibrium to have any legal effect; minimum price floors MUST be set above equilibrium to be binding.",
          "Diagrams for maximum and minimum prices are high-scoring in Paper 2: show the shortage or surplus created clearly.",
        ],
        commonMistakes: [
          "Drawing a maximum price above equilibrium. If set above equilibrium, the market will naturally clear at equilibrium and the ceiling is non-binding.",
        ],
        recap: [
          "Explain how an indirect tax can correct the market failure caused by negative externalities.",
          "What is the consequence of imposing a maximum price ceiling on rented apartments?",
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Money and Banking",
    section: "3. Microeconomic Decision-Makers",
    topic: "3.1 Money and Banking",
    intro:
      "Money is the lifeblood of economic transactions, replacing the inefficiencies of the barter system. This chapter explores the characteristics and functions of money, and contrasts the roles of commercial banks with the central bank.",
    subheadings: [
      {
        title: "The Nature, Functions and Characteristics of Money",
        body:
          "**The Barter System & Its Inefficiencies:**\n" +
          "- **Barter:** The direct exchange of goods and services without using monetary currency.\n" +
          "- Requires a **double coincidence of wants**: Person A must have exactly what Person B wants, and Person B must have exactly what Person A wants at the same time and place.\n" +
          "- Highly inefficient, time-consuming, and limits trade and division of labour.\n\n" +
          "**The Four Functions of Money:**\n" +
          "1. **Medium of Exchange:** Facilitates transactions by allowing goods and services to be traded for money, eliminating the need for a double coincidence of wants.\n" +
          "2. **Unit of Account (Measure of Value):** Provides a standardized numerical pricing metric that allows consumers and businesses to compare the value of different goods.\n" +
          "3. **Store of Value:** Allows individuals to save purchasing power over time to spend in the future (though eroded by high inflation).\n" +
          "4. **Standard for Deferred Payment:** Enables borrowing, lending, and contracts for goods to be delivered today and paid for in the future.\n\n" +
          "**Characteristics of Good Money:**\n" +
          "- **Acceptability:** Widely accepted by society as legal tender.\n" +
          "- **Durability:** Withstands physical wear and tear over repeated exchanges.\n" +
          "- **Portability:** Easy and convenient to carry and transfer.\n" +
          "- **Divisibility:** Easily broken down into smaller units of value without losing value.\n" +
          "- **Scarcity:** Limited in supply to maintain its purchasing power.\n" +
          "- **Uniformity / Recognisability:** Identical in appearance and difficult to counterfeit.",
        examinerTips: [
          "Memorize the 4 functions of money: Medium of exchange, Unit of account, Store of value, Standard for deferred payment.",
          "If asked how inflation impacts money, explain that it damages its function as a store of value and standard for deferred payment.",
        ],
        commonMistakes: [
          "Confusing the functions of money (what it does) with the characteristics of money (its physical properties).",
        ],
        recap: [
          "Explain why the barter system requires a double coincidence of wants.",
          "Identify four essential functions that money performs in an economy.",
        ],
      },
      {
        title: "Commercial Banks vs The Central Bank",
        body:
          "Modern economies rely on two primary banking institutions with fundamentally different objectives:\n\n" +
          "**Commercial Banks (Retail / Investment Banks):**\n" +
          "- **Nature:** Profit-maximizing financial institutions owned by private shareholders.\n" +
          "- **Primary Functions:**\n" +
          "  - **Accepting Deposits:** Safekeeping customers' money in current accounts (checking) and interest-earning savings accounts.\n" +
          "  - **Lending Money:** Providing personal loans, mortgages, corporate credit lines, and overdraft facilities.\n" +
          "  - **Payment Processing:** Facilitating debit card transactions, electronic wire transfers, direct debits, and cheques.\n" +
          "  - **Credit Creation:** Expanding the money supply by lending out a portion of deposited funds.\n\n" +
          "**The Central Bank:**\n" +
          "- **Nature:** The supreme monetary authority of a country, publicly owned and acting in the national interest (not for commercial profit).\n" +
          "- **Primary Functions:**\n" +
          "  - **Sole Issuer of Banknotes and Coins:** Controls the legal tender currency.\n" +
          "  - **Banker to the Government:** Holds government tax receipts, manages national sovereign debt, and handles state payments.\n" +
          "  - **Banker to Commercial Banks:** Holds commercial bank reserve accounts and clears interbank transfers.\n" +
          "  - **Lender of Last Resort:** Provides emergency liquidity to solvent commercial banks during financial panics to prevent systemic collapse.\n" +
          "  - **Formulating and Implementing Monetary Policy:** Adjusts the official benchmark interest rate and regulates credit to achieve price stability (target inflation) and sustainable growth.\n" +
          "  - **Managing Foreign Exchange Reserves:** Buys and sells foreign currencies to stabilize the domestic currency value.",
        examinerTips: [
          "Never confuse commercial banks with the central bank: individuals have accounts at commercial banks; the central bank deals with the government and commercial banks.",
          "Key distinction: commercial banks seek profit; the central bank pursues macroeconomic stability and price stability.",
        ],
        commonMistakes: [
          "Writing that members of the general public can open personal savings accounts at the central bank.",
        ],
        recap: [
          "Compare the objectives of a commercial bank with those of a central bank.",
          "Explain the role of the central bank as the 'lender of last resort'.",
        ],
      },
    ],
  },
  {
    number: 11,
    title: "Households and Workers",
    section: "3. Microeconomic Decision-Makers",
    topic: "3.2 Households & 3.3 Workers",
    intro:
      "Households make vital microeconomic choices regarding spending, saving, and borrowing. Simultaneously, workers choose occupations based on wage and non-wage factors in labour markets shaped by wage differentials, mobility, and specialisation.",
    subheadings: [
      {
        title: "Household Spending, Saving and Borrowing Decisions",
        body:
          "Household income is allocated across three channels: Consumption ($C$), Saving ($S$), and Borrowing ($B$):\n\n" +
          "**1. Influences on Consumer Spending (Consumption):**\n" +
          "- **Real Disposable Income:** Income after direct income taxes and welfare transfers. As disposable income rises, total spending rises, though lower-income households spend a higher proportion of income on basic necessities (higher average propensity to consume).\n" +
          "- **Interest Rates:** Low interest rates reduce borrowing costs and lower the reward for saving, encouraging spending on durable goods.\n" +
          "- **Consumer Confidence:** Optimism about job security and future income promotes spending; economic uncertainty encourages precautionary saving.\n" +
          "- **Wealth:** Rising house prices or stock market gains make households feel wealthier, boosting spending (the wealth effect).\n\n" +
          "**2. Influences on Saving:**\n" +
          "- **Saving:** Disposable income that is not spent on current consumption.\n" +
          "- **Determinants:** High interest rates provide a larger financial reward for saving; higher income levels generate larger surplus funds; age profile (middle-aged workers save heavily for retirement).\n\n" +
          "**3. Influences on Borrowing:**\n" +
          "- **Availability and Cost of Credit:** Easy credit terms and low borrowing interest rates increase personal loans, credit card balances, and mortgages.\n" +
          "- **Social Attitudes & Consumer Culture:** Increased cultural acceptability of debt.",
        examinerTips: [
          "Define disposable income accurately: gross personal income minus direct income taxes plus government welfare cash transfers.",
          "Explain how low-income families have a higher average propensity to consume (APC) because most of their income is required for basic survival.",
        ],
        commonMistakes: [
          "Confusing income (a flow of earnings per period) with wealth (the stock of accumulated financial and physical assets owned).",
        ],
        recap: [
          "Define real disposable income.",
          "Explain how an increase in the central bank interest rate influences consumer saving and borrowing.",
        ],
      },
      {
        title: "Occupational Choice & Wage Determination",
        body:
          "**Factors Influencing Choice of Occupation:**\n" +
          "- **Wage Factors:**\n" +
          "  - Basic time-rate pay (hourly, weekly, or monthly salary).\n" +
          "  - Piece rate pay (earnings tied directly to individual output).\n" +
          "  - Overtime pay, sales commission, performance bonuses, and profit-sharing schemes.\n" +
          "- **Non-Wage Factors:**\n" +
          "  - Job security and safe working environment.\n" +
          "  - Fringe benefits (company car, private health insurance, subsidised meals, pension schemes).\n" +
          "  - Promotion opportunities and career development.\n" +
          "  - Length of annual paid holidays and working hours (flexitime, remote working).\n" +
          "  - Commuting distance, location, and travel requirements.\n" +
          "  - Personal job satisfaction, social prestige, and ethical alignment.\n\n" +
          "**Wage Determination in the Labour Market:**\n" +
          "- The equilibrium wage rate ($W_e$) and level of employment ($L_e$) are determined by the intersection of the **Demand for Labour** ($D_L$) and **Supply of Labour** ($S_L$):\n" +
          "  - **Demand for Labour:** A **derived demand**—employers demand workers not for direct pleasure, but to produce goods and services consumers want. Downward-sloping with respect to the wage rate.\n" +
          "  - **Supply of Labour:** The total number of people willing and able to work in an occupation at different wage rates. Upward-sloping with respect to the wage rate.",
        examinerTips: [
          "Always state that demand for labour is a 'derived demand' derived from the consumer demand for the final product.",
          "When explaining occupational choice, balance wage factors against at least three non-wage factors.",
        ],
        commonMistakes: [
          "Assuming individuals only work for the highest wage rate, ignoring non-wage factors like safety, holiday entitlements, and job satisfaction.",
        ],
        recap: [
          "Why is the demand for labour referred to as a 'derived demand'?",
          "List four non-wage factors that influence a person's choice of occupation.",
        ],
      },
      {
        title: "Wage Differentials, Labour Mobility & Division of Labour",
        body:
          "**Reasons for Differences in Earnings (Wage Differentials):**\n" +
          "- **Skills, Qualifications & Training:** Highly skilled professions (neurosurgeons, airline pilots) require years of rigorous education; labour supply is highly inelastic, resulting in high equilibrium wages.\n" +
          "- **Compensating Differentials:** Dangerous, dirty, or unsociable night-shift jobs (offshore oil rig workers, miners) pay higher wages to attract workers.\n" +
          "- **Productivity:** More productive workers generate higher revenue for firms, justifying higher wages.\n" +
          "- **Trade Union Bargaining Power:** Strongly unionized sectors negotiate wage premiums for members.\n" +
          "- **Public vs Private Sector:** Public sector jobs may offer greater job security and pensions but slightly lower cash wages than private corporate roles.\n" +
          "- **Discrimination:** Unlawful wage disparities based on gender, race, or ethnicity.\n\n" +
          "**Mobility of Labour:**\n" +
          "- **Occupational Mobility:** The ability of workers to switch between different types of jobs. Constrained by lack of relevant skills, qualifications, or training.\n" +
          "- **Geographical Mobility:** The ability of workers to move from one geographic region to another for employment. Constrained by high housing costs, family ties, language barriers, and visa restrictions.\n\n" +
          "**Division of Labour and Specialisation:**\n" +
          "- **Definition:** The process whereby the production process is broken down into small, distinct, specialized tasks, with each worker focusing on a single task.\n" +
          "- **Advantages to Workers:** Mastery of specific skills; higher productivity can justify higher pay.\n" +
          "- **Disadvantages to Workers:** Extreme monotony and boredom; risk of structural unemployment if their single skill becomes obsolete.\n" +
          "- **Advantages to Firms:** Increased output per worker; faster production; reduced training time; easier mechanisation.\n" +
          "- **Disadvantages to Firms:** Absenteeism due to boredom; interdependency (a stoppage in one section halts the entire assembly line).",
        examinerTips: [
          "Distinguish occupational mobility (skills barriers) from geographical mobility (housing and relocation barriers).",
          "Connect division of labour directly to Adam Smith's famous pin factory example when discussing specialisation.",
        ],
        commonMistakes: [
          "Confusing division of labour with general employment. Division of labour is the specific division of a production process into specialised tasks.",
        ],
        recap: [
          "Explain two reasons why specialized software engineers earn more than supermarket cashiers.",
          "State two advantages and two disadvantages of the division of labour for a manufacturing business.",
        ],
      },
    ],
  },
  {
    number: 12,
    title: "Trade Unions, Firms and Production",
    section: "3. Microeconomic Decision-Makers",
    topic: "3.3 Workers (Trade Unions), 3.4 Firms & 3.5 Firms and Production",
    intro:
      "Trade unions represent workers in collective bargaining with employers. Firms combine inputs to produce output, choosing between labour and capital intensive methods while pursuing organic or external growth.",
    subheadings: [
      {
        title: "Trade Unions: Role, Collective Bargaining & Industrial Action",
        body:
          "**Definition and Aims:**\n" +
          "- A **Trade Union** is an association of workers formed to protect and promote the interests, working conditions, and wages of its members.\n" +
          "- **Core Aims:** Negotiate higher real wages, improve workplace health and safety, protect members against unfair dismissal, and reduce working hours.\n\n" +
          "**Collective Bargaining:**\n" +
          "- The process of negotiations between union representatives (speaking on behalf of all members) and employers or employer associations.\n" +
          "- **Union Bargaining Power is Strong When:**\n" +
          "  - The union represents a high proportion of the total workforce (high union density).\n" +
          "  - The firm is earning large profits.\n" +
          "  - Workers possess specialized skills that are difficult and costly to replace.\n" +
          "  - The demand for the final good is price inelastic.\n\n" +
          "**Forms of Industrial Action:**\n" +
          "- **Strike:** Complete withdrawal of labour by workers.\n" +
          "- **Work-to-rule:** Workers strictly follow contractual obligations down to the letter, refusing any informal flexibility.\n" +
          "- **Overtime Ban:** Workers refuse to work extra hours beyond their contracted schedule.\n" +
          "- **Go-Slow:** Workers perform their duties at the slowest allowable pace.\n\n" +
          "**Economic Impact of Unions:**\n" +
          "- *Advantages:* Prevents exploitation; boosts worker morale and retention; standardizes dispute resolution.\n" +
          "- *Disadvantages:* Demanding excessively high wages above market equilibrium can create unemployment; industrial strikes disrupt production and reduce national GDP.",
        examinerTips: [
          "Be balanced when evaluating trade unions: mention protections for workers alongside the risk of higher production costs and cost-push inflation.",
          "Use economic terminology: 'collective bargaining', 'union density', 'industrial action'.",
        ],
        commonMistakes: [
          "Claiming strikes are the only form of industrial action. Overtime bans, work-to-rule, and go-slows are also major industrial actions.",
        ],
        recap: [
          "Define collective bargaining.",
          "Explain two factors that increase the bargaining strength of a trade union.",
        ],
      },
      {
        title: "Classification of Firms, Growth & Mergers",
        body:
          "**Classification of Firms:**\n" +
          "- **By Sector:**\n" +
          "  - *Primary Sector:* Extraction of natural raw materials (farming, mining, fishing).\n" +
          "  - *Secondary Sector:* Manufacturing, processing, and construction (car factories, oil refineries).\n" +
          "  - *Tertiary Sector:* Provision of commercial and personal services (banking, tourism, retail, education).\n" +
          "- **By Ownership:** Private sector (sole traders, partnerships, limited companies) vs Public sector (state-owned enterprises).\n" +
          "- **Why Many Firms Remain Small:** Personalised niche service, local market size, owner preference for control, lack of external finance, flexibility to respond to customer needs.\n\n" +
          "**Business Growth Methods:**\n" +
          "- **Internal (Organic) Growth:** Expanding output using retained profits to purchase new machinery, hire staff, or open new branches.\n" +
          "- **External Growth (Mergers and Takeovers / Acquisitions):**\n" +
          "  - **Horizontal Integration:** Merger of two firms in the **same industry** at the **same stage of production** (e.g. two airline carriers merging).\n" +
          "  - **Vertical Backward Integration:** A firm merges with a supplier in the earlier stage of production (e.g. a car maker buys a steel foundry) to secure raw materials.\n" +
          "  - **Vertical Forward Integration:** A firm merges with a customer or distributor in the later stage of production (e.g. an oil refiner buys petrol stations) to control retail outlets.\n" +
          "  - **Conglomerate Integration:** Merger of firms in completely **unrelated industries** (e.g. a smartphone manufacturer buys an insurance company) to diversify business risk.",
        examinerTips: [
          "Clearly distinguish between vertical backward (towards raw materials) and vertical forward (towards final consumers).",
          "Horizontal mergers eliminate direct competitors and immediately increase market share.",
        ],
        commonMistakes: [
          "Confusing conglomerate integration with vertical integration. Conglomerates involve completely unrelated industries.",
        ],
        recap: [
          "Distinguish between horizontal integration and vertical integration.",
          "State two reasons why small businesses can successfully survive alongside large multinational corporations.",
        ],
      },
      {
        title: "Production, Productivity, Labour vs Capital Intensity",
        body:
          "**Production vs Productivity:**\n" +
          "- **Production:** The total physical volume or value of goods and services created over a period of time ($Q$).\n" +
          "- **Productivity:** The efficiency of production; the ratio of output produced per unit of input employed:\n" +
          "  $$\\text{Labour Productivity} = \\frac{\\text{Total Output}}{\\text{Number of Workers (or Hours Worked)}}$$\n" +
          "- High productivity lowers average costs of production, making domestic firms more competitive internationally.\n\n" +
          "**Labour-Intensive vs Capital-Intensive Production:**\n" +
          "- **Labour-Intensive:** A production method where labour represents a higher proportion of total costs than capital equipment.\n" +
          "  - *Suitable When:* Labour is cheap and abundant, custom or bespoke handmade items are demanded, or personal human care is essential.\n" +
          "- **Capital-Intensive:** A production method where physical machinery, automation, and technology represent a higher proportion of costs than labour.\n" +
          "  - *Suitable When:* Standardized mass production is required, machinery lowers unit costs through economies of scale, and wages are high.\n\n" +
          "**Ways to Increase Productivity:**\n" +
          "- Investing in advanced automated machinery and modern IT software.\n" +
          "- Training and upskilling workers through continuous professional development.\n" +
          "- Implementing performance bonuses, piece rates, or employee profit-sharing schemes to boost worker motivation.\n" +
          "- Improving factory layout and operational workflow management (lean production).",
        examinerTips: [
          "Never confuse total production with productivity: a firm can double its production by doubling inputs while productivity remains identical.",
          "State the formula for labour productivity clearly whenever productivity is mentioned.",
        ],
        commonMistakes: [
          "Assuming that labour-intensive production is always backward. Luxury handmade wristwatches and artisanal tailoring thrive on labour-intensive methods.",
        ],
        recap: [
          "Define labour productivity and state how it is calculated.",
          "Under what economic conditions would a firm choose to switch from labour-intensive to capital-intensive production?",
        ],
      },
    ],
  },
];
