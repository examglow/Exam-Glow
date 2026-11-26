import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Economics (0455) 2027–2029 Syllabus Notes
 * Part 4: Chapters 19–24 (Sections 5 & 6)
 */
export const ECONOMICS_PART4: Chapter[] = [
  {
    number: 19,
    title: "Living Standards & Poverty",
    section: "5. Economic Development",
    topic: "5.1 Living Standards & 5.2 Poverty",
    intro:
      "Economic development measures broader human welfare beyond simple monetary output. This chapter explores indicators of living standards, including real GDP per capita and the Human Development Index (HDI), and examines absolute versus relative poverty and anti-poverty policies.",
    subheadings: [
      {
        title: "Indicators of Living Standards: Real GDP per Capita & HDI",
        body:
          "**1. Real GDP Per Capita:**\n" +
          "- Measures average economic output per person:\n" +
          "  $$\\text{Real GDP Per Capita} = \\frac{\\text{Real GDP}}{\\text{Total Population}}$$\n" +
          "- **Limitations as a Measure of Living Standards:**\n" +
          "  - *Income Inequality:* An increase in average per capita GDP can be captured entirely by the richest $1\\%$ while the majority remain poor.\n" +
          "  - *Negative Externalities:* Disregards environmental pollution, traffic congestion, and noise which degrade health and well-being.\n" +
          "  - *Shadow / Informal Economy:* Excludes unrecorded cash transactions, subsistence farming, and voluntary work.\n" +
          "  - *Composition of Output:* High GDP spent on weapons or defense machinery does not enhance citizen happiness compared to spending on healthcare and schools.\n" +
          "  - *Working Hours & Stress:* High GDP generated through 70-hour working weeks reduces leisure and quality of life.\n\n" +
          "**2. The Human Development Index (HDI):**\n" +
          "- A composite index devised by the United Nations to evaluate socio-economic development across three dimensions:\n" +
          "  1. **Standard of Living:** Measured by Gross National Income (GNI) per capita adjusted for Purchasing Power Parity (PPP$).\n" +
          "  2. **Knowledge and Education:** Measured by a combination of **mean years of schooling** for adults aged 25+ and **expected years of schooling** for children.\n" +
          "  3. **Longevity and Health:** Measured by **life expectancy at birth**.\n" +
          "- Scores range from $0.000$ (lowest) to $1.000$ (highest).\n" +
          "- **Advantages of HDI:** Gives a multidimensional perspective on human welfare beyond purely monetary figures; allows meaningful international policy benchmarking.",
        examinerTips: [
          "Memorize the three distinct dimensions of the Human Development Index (HDI): Standard of Living (GNI per capita PPP), Knowledge (schooling years), and Longevity (life expectancy).",
          "When comparing living standards between countries, always convert GDP into Purchasing Power Parity (PPP$) to account for differences in local price levels.",
        ],
        commonMistakes: [
          "Assuming GDP per capita and HDI are identical. A country with vast oil wealth can have very high GDP per capita but poor HDI if health and education systems are underdeveloped.",
        ],
        recap: [
          "Explain why real GDP per capita may be a misleading indicator of the average citizen's living standards.",
          "Identify the three components that make up the Human Development Index (HDI).",
        ],
      },
      {
        title: "Poverty: Absolute vs Relative, Causes & Alleviation Policies",
        body:
          "**Definitions of Poverty:**\n" +
          "- **Absolute Poverty:** A severe condition where an individual or household lacks the financial resources to afford the **basic necessities of human survival** (safe drinking water, adequate nutrition, basic clothing, and shelter).\n" +
          "  - Defined globally by the World Bank International Poverty Line (currently living on less than $\\$2.15$ per person per day at 2017 PPP).\n" +
          "- **Relative Poverty:** A condition where a household's income is substantially below the average median income of their society (e.g. earning less than $50\\%$ or $60\\%$ of national median income).\n" +
          "  - It measures inequality and social exclusion; relative poverty exists even in the wealthiest developed nations.\n\n" +
          "**Causes of Poverty:**\n" +
          "- Chronic long-term unemployment and low labour productivity.\n" +
          "- Inadequate access to quality education and vocational training.\n" +
          "- Poor public healthcare resulting in debilitating illnesses and lost working days.\n" +
          "- Low minimum wages and exploitation in informal gig economies.\n" +
          "- Conflict, civil war, corruption, and natural disasters.\n\n" +
          "**Government Policies to Alleviate Poverty:**\n" +
          "1. **Progressive Income Taxation:** Higher tax rates on high earners generate revenues to fund welfare safety nets and social programs.\n" +
          "2. **State Welfare Benefits & Cash Transfers:** Targeted child benefits, disability payments, and unemployment allowances provide a minimum income floor.\n" +
          "3. **Free Universal State Provision:** State-funded primary and secondary schools, vocational colleges, and healthcare clinics empower low-income families to escape poverty traps.\n" +
          "4. **National Minimum Wage Legislation:** Guarantees a legally enforceable hourly wage rate to prevent worker exploitation.",
        examinerTips: [
          "Distinguish clearly: absolute poverty can theoretically be eliminated (by providing everyone basic survival needs), whereas relative poverty will always exist as long as income inequality exists.",
          "Link education directly to the concept of breaking the 'intergenerational cycle of poverty'.",
        ],
        commonMistakes: [
          "Thinking relative poverty can be eliminated without complete income equality. If anyone earns less than the median benchmark, relative poverty persists.",
        ],
        recap: [
          "Distinguish between absolute poverty and relative poverty.",
          "Explain two government policies that can help reduce absolute poverty in developing nations.",
        ],
      },
    ],
  },
  {
    number: 20,
    title: "Population & International Development Differences",
    section: "5. Economic Development",
    topic: "5.3 Population & 5.4 Differences in Economic Development",
    intro:
      "Demographic changes reshape labour forces, consumer markets, and public welfare obligations. This chapter explores population growth, birth and death rates, migration, ageing populations, and structural disparities between developed and developing economies.",
    subheadings: [
      {
        title: "Population Dynamics: Birth Rates, Death Rates & Migration",
        body:
          "**Determinants of Population Growth:**\n" +
          "Total population change is determined by three variables:\n" +
          "$$\\Delta \\text{Population} = (\\text{Births} - \\text{Deaths}) + (\\text{Immigration} - \\text{Emigration})$$\n\n" +
          "- **Birth Rate:** The number of live births per $1{,}000$ of the population per year.\n" +
          "  - *High in developing nations:* Need for farm labour, high infant mortality, lack of contraception, early marriage, cultural norms.\n" +
          "  - *Low in developed nations:* High female workforce participation, high cost of raising children, availability of family planning, delayed marriage.\n" +
          "- **Death Rate:** The number of deaths per $1{,}000$ of the population per year.\n" +
          "  - *Declining globally due to:* Clean piped water, improved sanitation, modern antibiotics, vaccination programs, improved nutrition.\n" +
          "- **Net Migration:** The difference between immigrants entering a country and emigrants leaving.\n\n" +
          "**Population Age Structure & The Dependency Ratio:**\n" +
          "- **Dependency Ratio:** The ratio of economically dependent individuals (those under 15 and over 65) to the active working-age population (15–64):\n" +
          "  $$\\text{Dependency Ratio} = \\frac{\\text{Population Aged } 0\\text{--}14 + \\text{Population Aged } 65+}{\\text{Working-Age Population (15--64)}} \\times 100$$\n\n" +
          "**Challenges of an Ageing Population (e.g. Japan, Germany):**\n" +
          "- Shrinking active workforce leading to labour shortages and lower tax receipts.\n" +
          "- Surging government spending on state pensions, chronic healthcare, and elderly care homes.\n" +
          "- Governments must respond by raising the official retirement age, encouraging immigration, and incentivising private pension schemes.",
        examinerTips: [
          "Calculate the dependency ratio accurately: non-working dependents over working-age population.",
          "Note the distinction between high population growth (youth burden) versus declining population (ageing burden).",
        ],
        commonMistakes: [
          "Confusing the birth rate (births per 1,000 people) with the fertility rate (average births per woman).",
        ],
        recap: [
          "State the formula for calculating an economy's dependency ratio.",
          "Identify two economic problems caused by an ageing population.",
        ],
      },
      {
        title: "Causes and Consequences of Differences in Economic Development",
        body:
          "Economies are broadly categorized as **developed** (high-income, industrialized) or **developing** (lower-income, emerging):\n\n" +
          "| Characteristic | Developing Economies | Developed Economies |\n" +
          "| :--- | :--- | :--- |\n" +
          "| **GDP Per Capita** | Low to middle income | High income |\n" +
          "| **Industrial Structure** | Dominant Primary sector (subsistence agriculture, mining) | Dominant Tertiary & Quaternary sectors (services, tech, finance) |\n" +
          "| **Human Capital** | Lower adult literacy, fewer university graduates | High literacy, advanced technical and professional skills |\n" +
          "| **Infrastructure** | Unreliable transport, power outages, limited digital connectivity | Advanced transport links, high-speed rail, stable digital grids |\n" +
          "| **Life Expectancy** | Lower due to infectious diseases and poor healthcare | High ($80+$ years) due to universal healthcare systems |\n\n" +
          "**Causes of Development Differences:**\n" +
          "- **Investment in Physical and Human Capital:** Developed nations have accumulated decades of investment in factories, transport, and education.\n" +
          "- **Trade Reliance on Primary Commodities:** Developing countries often suffer from volatile commodity prices and long-run deterioration in their terms of trade.\n" +
          "- **Institutional Quality & Governance:** Stable rule of law, protection of private property rights, and low corruption attract high Foreign Direct Investment (FDI).\n" +
          "- **External Debt Burden:** Heavy sovereign debt repayments divert public funds away from domestic development.",
        examinerTips: [
          "Contrast the primary sector dominance in developing economies with the tertiary/services dominance in developed economies.",
          "Discuss how attracting Foreign Direct Investment (FDI) can help developing countries overcome domestic savings gaps.",
        ],
        commonMistakes: [
          "Assuming all developing countries are poor in natural resources. Many are rich in oil, gas, and minerals, but suffer from the 'resource curse' and institutional corruption.",
        ],
        recap: [
          "Describe three typical economic features of a developing nation.",
          "Explain why reliance on agricultural primary exports can hinder a country's economic development.",
        ],
      },
    ],
  },
  {
    number: 21,
    title: "Specialisation and Free Trade",
    section: "6. International Trade and Globalisation",
    topic: "6.1 Specialisation and Free Trade",
    intro:
      "International trade allows countries to consume beyond their domestic production boundaries. This chapter explores national specialisation, absolute and comparative advantage, and the benefits and drawbacks of unrestricted free trade.",
    subheadings: [
      {
        title: "Specialisation at National Level & Comparative Advantage",
        body:
          "**National Specialisation:**\n" +
          "- Occurs when a country concentrates its scarce factors of production on producing a narrow range of goods and services in which it possesses the greatest productive efficiency or lowest opportunity cost.\n" +
          "- Surplus output is exported to other countries in exchange for imported goods that the nation cannot produce efficiently.\n\n" +
          "**Absolute vs Comparative Advantage:**\n" +
          "- **Absolute Advantage:** A country has an absolute advantage if it can produce more of a good using the **same quantity of resources** (or produce the same output with fewer resources) than another country.\n" +
          "- **Comparative Advantage:** A country has a comparative advantage if it can produce a good at a **lower opportunity cost** than another country.\n" +
          "- According to David Ricardo's Law of Comparative Advantage, global economic output and consumption will be maximized if each country specializes in goods where its opportunity cost is lowest and trades freely.\n\n" +
          "**Advantages of National Specialisation:**\n" +
          "- **Increased Global Output & Efficiency:** World resources are allocated to their most productive uses.\n" +
          "- **Economies of Scale:** Producing for vast global markets allows domestic firms to achieve lower average production costs.\n" +
          "- **Greater Variety & Lower Prices:** Domestic consumers gain access to goods they cannot produce domestically at competitive prices.\n\n" +
          "**Risks and Disadvantages of Over-Specialisation:**\n" +
          "- **Over-Reliance on a Single Industry:** If a country specializes solely in crude oil and world oil prices collapse, the national economy faces catastrophic recession.\n" +
          "- **Structural Unemployment:** If world demand shifts away from a specialized product, specialized workers cannot easily transfer to other sectors.\n" +
          "- **Vulnerability to Geopolitical Disruption:** Relying on overseas food or energy imports leaves the country vulnerable during international conflicts.",
        examinerTips: [
          "Highlight that trade is beneficial even if one country has an absolute advantage in all goods, provided opportunity costs differ (comparative advantage).",
          "Identify real-world specialisation examples: Saudi Arabia in oil extraction, Germany in precision automotive engineering, Bangladesh in textile manufacturing.",
        ],
        commonMistakes: [
          "Confusing absolute advantage (who produces more with same inputs) with comparative advantage (who produces at lowest opportunity cost).",
        ],
        recap: [
          "Define comparative advantage.",
          "Explain two dangers a country faces if it specializes too heavily in a single agricultural crop.",
        ],
      },
      {
        title: "The Benefits and Disadvantages of Free International Trade",
        body:
          "**Definition:**\n" +
          "- **Free Trade** is the international exchange of goods and services between countries without government-imposed tariffs, quotas, subsidies, or administrative barriers.\n\n" +
          "**Benefits of Free Trade:**\n" +
          "- **Lower Consumer Prices:** Eliminating tariffs allows consumers to buy cheaper imported goods.\n" +
          "- **Greater Consumer Choice:** Access to products that cannot be grown or manufactured domestically (e.g. tropical fruits in northern Europe).\n" +
          "- **Stimulates Competition & Efficiency:** Foreign competition prevents domestic monopolies from charging excessive prices or becoming inefficient.\n" +
          "- **Larger Export Markets:** Domestic producers can expand output to sell to millions of international customers, lowering unit costs via economies of scale.\n" +
          "- **Promotes International Peace & Cooperation:** Deep economic interdependence discourages armed conflict.\n\n" +
          "**Disadvantages and Criticisms of Free Trade:**\n" +
          "- **Destruction of Infant Industries:** Young, newly established domestic firms cannot compete against established foreign multinational corporations.\n" +
          "- **Risk of Dumping:** Foreign firms selling surplus products below production cost destroy domestic competitors.\n" +
          "- **Environmental Costs:** Long-distance international shipping and air freight generate substantial global greenhouse gas emissions.\n" +
          "- **Spread of Global Shocks:** A financial crisis or recession in one major trading partner spreads instantly to others.",
        examinerTips: [
          "In 8-mark questions evaluating free trade, balance consumer benefits (lower prices, choice) against domestic producer risks (infant industries, dumping).",
          "Define 'dumping' precisely: selling exports below their cost of production or below domestic market price.",
        ],
        commonMistakes: [
          "Assuming free trade benefits everyone equally. While consumers gain, uncompetitive domestic workers may suffer long-term structural unemployment.",
        ],
        recap: [
          "Explain two major advantages of free international trade for consumers.",
          "What is dumping, and why is it considered an unfair trading practice?",
        ],
      },
    ],
  },
  {
    number: 22,
    title: "Globalisation and Trade Restrictions",
    section: "6. International Trade and Globalisation",
    topic: "6.2 Globalisation and Trade Restrictions",
    intro:
      "Globalisation has integrated markets worldwide, driven by multinational corporations (MNCs) and digital connectivity. However, governments frequently impose protectionist trade barriers to shield domestic industries and employment.",
    subheadings: [
      {
        title: "Globalisation & The Role of Multinational Companies (MNCs)",
        body:
          "**Definition of Globalisation:**\n" +
          "- **Globalisation** is the process by which national economies, societies, and cultures become increasingly integrated and interdependent through the expansion of international trade, cross-border investment, and cultural exchange.\n\n" +
          "**Multinational Companies (MNCs):**\n" +
          "- An **MNC** (transnational corporation) is a large enterprise that owns or controls production facilities, branches, or offices in **more than one country** (e.g. Apple, Toyota, Unilever, Samsung).\n\n" +
          "**Advantages of MNCs to Host Countries:**\n" +
          "- **Inflow of Foreign Direct Investment (FDI):** MNCs build new factories, injecting capital into the local economy.\n" +
          "- **Job Creation:** Directly employs local workers and indirectly creates jobs through local supply chain contracts.\n" +
          "- **Technology & Skills Transfer:** Local workers and managers are trained in advanced production methods and management practices.\n" +
          "- **Tax Revenues:** Corporation taxes paid by MNCs expand government fiscal budgets.\n" +
          "- **Export Earnings:** MNC factory output is often exported, improving the host nation's balance of payments.\n\n" +
          "**Disadvantages of MNCs to Host Countries:**\n" +
          "- **Profit Repatriation:** MNCs send supernormal profits back to their home country rather than reinvesting locally.\n" +
          "- **Exploitation of Labour:** Some MNCs pay lower wages in developing countries and impose harsh working conditions.\n" +
          "- **Environmental Damage:** MNCs may relocate polluting production to nations with weak environmental regulations.\n" +
          "- **Tax Avoidance (Transfer Pricing):** MNCs route profits through low-tax tax havens, minimizing local tax contributions.\n" +
          "- **Destruction of Local Businesses:** Massive economies of scale can bankrupt small domestic competitors.",
        examinerTips: [
          "Always structure MNC evaluation into benefits to the host country versus costs to the host country.",
          "Use economic terminology: 'FDI', 'profit repatriation', 'transfer pricing', 'technology transfer'.",
        ],
        commonMistakes: [
          "Claiming that MNCs simply sell products abroad. An MNC must own or operate production facilities in more than one country.",
        ],
        recap: [
          "Define a multinational company (MNC).",
          "Explain two benefits and two drawbacks of an MNC setting up a manufacturing plant in a developing country.",
        ],
      },
      {
        title: "Trade Restrictions / Protectionism: Methods, Reasons & Costs",
        body:
          "**Methods of Protectionism (Trade Barriers):**\n" +
          "1. **Tariffs (Customs Duties):** Taxes levied on imported goods, making them more expensive than domestic alternatives.\n" +
          "2. **Import Quotas:** Physical limits placed on the quantity of a specific foreign good allowed into the country over a given time period.\n" +
          "3. **Subsidies to Domestic Producers:** Financial grants from the government to local firms, lowering their production costs and making domestic products cheaper than imports.\n" +
          "4. **Embargoes:** Complete legal bans on the import or export of certain goods (e.g. arms embargoes, political sanctions).\n" +
          "5. **Administrative Regulations & Red Tape:** Burdensome customs documentation, excessive health and safety inspections designed to delay imports.\n\n" +
          "**Arguments for Protectionism:**\n" +
          "- **Protecting Infant Industries:** Giving new domestic industries time to grow, invest, and achieve economies of scale before facing mature international competitors.\n" +
          "- **Preventing Dumping:** Shielding domestic industries from foreign producers selling below production cost to capture market share.\n" +
          "- **Protecting Declining (Sunset) Industries:** Slowing the decline of traditional manufacturing (e.g. shipyards) to prevent sudden mass structural unemployment.\n" +
          "- **Protecting Domestic Employment:** Guarding jobs in uncompetitive sectors.\n" +
          "- **Strategic / National Security:** Ensuring self-sufficiency in food, energy, and defense in case of war.\n\n" +
          "**Consequences & Costs of Protectionism:**\n" +
          "- Higher prices and reduced choice for domestic consumers.\n" +
          "- Retaliation: trading partners impose retaliatory tariffs, sparking trade wars that shrink global trade.\n" +
          "- Protects domestic inefficiency and misallocates scarce economic resources.",
        examinerTips: [
          "Explain the difference between a tariff (tax raising government revenue) and a quota (physical limit generating no direct tax revenue).",
          "Remember the infant industry argument: it is only valid if the industry eventually becomes competitive and the protection is phased out.",
        ],
        commonMistakes: [
          "Believing tariffs are paid by the foreign government. Tariffs are paid by domestic importing businesses and passed on to domestic consumers.",
        ],
        recap: [
          "List four different methods of trade protection.",
          "Explain the infant industry argument for imposing import tariffs.",
        ],
      },
    ],
  },
  {
    number: 23,
    title: "Foreign Exchange Rates",
    section: "6. International Trade and Globalisation",
    topic: "6.3 Foreign Exchange Rates",
    intro:
      "A foreign exchange rate is the price of one currency in terms of another. This chapter explores how floating exchange rates are determined by market forces, the causes of currency appreciation and depreciation, and their macroeconomic impacts.",
    subheadings: [
      {
        title: "Definition & Determination in Foreign Exchange Markets",
        body:
          "**Definition:**\n" +
          "- A **Foreign Exchange Rate** is the price of one currency expressed in terms of another currency (e.g. $\\text{GBP } 1 = \\text{USD } 1.30$, or $\\text{USD } 1 = \\text{JPY } 150$).\n\n" +
          "**Floating Exchange Rate System:**\n" +
          "- The value of the currency is determined purely by the market forces of **demand and supply** for that currency in the foreign exchange (forex) market, without direct government or central bank pegging.\n\n" +
          "**Demand for Domestic Currency ($D$):**\n" +
          "- Overseas buyers need domestic currency to:\n" +
          "  - Purchase domestic exports of goods and services (e.g. foreign tourists visiting).\n" +
          "  - Invest in domestic physical assets (Foreign Direct Investment).\n" +
          "  - Deposit savings in domestic banks to earn high interest rates ('hot money' flows).\n\n" +
          "**Supply of Domestic Currency ($S$):**\n" +
          "- Domestic residents sell domestic currency in exchange for foreign currencies to:\n" +
          "  - Buy imported goods and services from overseas.\n" +
          "  - Travel abroad for foreign holidays.\n" +
          "  - Invest in overseas businesses or foreign stock markets.\n\n" +
          "**Market Equilibrium:**\n" +
          "- The equilibrium exchange rate occurs where the demand for the currency equals the supply of the currency ($D = S$).",
        examinerTips: [
          "Remember: exports create a DEMAND for the domestic currency; imports create a SUPPLY of the domestic currency.",
          "High domestic interest rates attract 'hot money' inflows, increasing currency demand and causing appreciation.",
        ],
        commonMistakes: [
          "Confusing the domestic goods market with the forex market. In forex, the currency itself is the commodity being bought and sold.",
        ],
        recap: [
          "Define a foreign exchange rate.",
          "Identify two factors that create a demand for a country's currency in the foreign exchange market.",
        ],
      },
      {
        title: "Exchange Rate Fluctuations: Appreciation vs Depreciation",
        body:
          "In a floating exchange rate system, exchange rate movements are described as appreciation or depreciation:\n\n" +
          "**1. Currency Appreciation:**\n" +
          "- An **increase in the international value** of a currency against other currencies (e.g. $\\text{GBP } 1 = \\$1.20 \\to \\$1.40$).\n" +
          "- **Causes:**\n" +
          "  - Rise in domestic central bank interest rates attracting hot money inflows ($D \\uparrow$).\n" +
          "  - Booming export demand due to high quality or innovation ($D \\uparrow$).\n" +
          "  - Lower domestic inflation relative to trading partners, making exports competitive.\n" +
          "- **Economic Consequences (SPICED):**\n" +
          "  - **Stronger Pound Imports Cheaper, Exports Dearer**:\n" +
          "  - *Exports:* Become more expensive to foreign buyers $\\implies$ export volumes fall ($X \\downarrow$).\n" +
          "  - *Imports:* Become cheaper for domestic buyers $\\implies$ import volumes rise ($M \\uparrow$).\n" +
          "  - *Net Trade & GDP:* Net exports fall ($(X - M) \\downarrow$), slowing real GDP growth and increasing unemployment in export industries.\n" +
          "  - *Inflation:* Imported raw materials and consumer goods are cheaper, helping bring down domestic inflation.\n\n" +
          "**2. Currency Depreciation:**\n" +
          "- A **decrease in the international value** of a currency against other currencies (e.g. $\\text{GBP } 1 = \\$1.40 \\to \\$1.20$).\n" +
          "- **Causes:** Cut in domestic interest rates ($S \\uparrow, D \\downarrow$), high domestic inflation, or political instability.\n" +
          "- **Economic Consequences (WPIDEC):**\n" +
          "  - **Weaker Pound Imports Dearer, Exports Cheaper**:\n" +
          "  - *Exports:* Become cheaper abroad $\\implies$ export sales expand ($X \\uparrow$).\n" +
          "  - *Imports:* Become expensive $\\implies$ domestic consumers switch to local goods ($M \\downarrow$).\n" +
          "  - *Net Trade & Growth:* Net exports rise ($(X - M) \\uparrow$), stimulating GDP and employment.\n" +
          "  - *Inflation Risk:* Expensive imported oil and parts cause imported cost-push inflation.",
        examinerTips: [
          "Use the mnemonics: **SPICED** (Strong Pound Imports Cheaper Exports Dearer) and **WPIDEC** (Weak Pound Imports Dearer Exports Cheaper).",
          "In evaluation questions, note that the impact of exchange rate changes on the trade balance depends on the price elasticity of demand for exports and imports (Marshall-Lerner condition).",
        ],
        commonMistakes: [
          "Stating that an appreciation is always good. An appreciation hurts domestic manufacturing exporters and can cause job losses.",
        ],
        recap: [
          "Explain the meaning of currency appreciation.",
          "Describe how a depreciation of the currency affects a nation's inflation rate and its export competitiveness.",
        ],
      },
    ],
  },
  {
    number: 24,
    title: "Current Account of the Balance of Payments",
    section: "6. International Trade and Globalisation",
    topic: "6.4 Current Account of the Balance of Payments",
    intro:
      "The Balance of Payments records all financial and economic transactions between a country and the rest of the world. This final chapter explores the structure of the current account, causes and consequences of deficits and surpluses, and corrective government policies.",
    subheadings: [
      {
        title: "Structure of the Current Account",
        body:
          "The **Balance of Payments (BOP)** is an accounting record of all economic transactions between residents of a country and the rest of the world over a specified year. The **Current Account** is its primary component, consisting of four sections:\n\n" +
          "**1. Trade in Goods (Visibles):**\n" +
          "- Physical, tangible goods exported and imported (e.g. cars, machinery, crude oil, foodstuffs).\n" +
          "- $\\text{Balance of Trade in Goods} = \\text{Visible Exports} - \\text{Visible Imports}$\n\n" +
          "**2. Trade in Services (Invisibles):**\n" +
          "- Intangible services traded internationally (e.g. foreign tourism, international aviation, overseas banking, insurance, software licensing).\n" +
          "- $\\text{Balance of Trade in Services} = \\text{Invisible Exports} - \\text{Invisible Imports}$\n\n" +
          "*(Trade in Goods + Trade in Services is called the **Balance of Trade**).*\n\n" +
          "**3. Primary Income (Net Investment Income):**\n" +
          "- Inflows minus outflows of profits, dividends, and interest generated by domestic residents holding assets overseas compared to foreign residents holding domestic assets.\n" +
          "- Includes wages earned by domestic citizens working temporarily abroad.\n\n" +
          "**4. Secondary Income (Current Transfers):**\n" +
          "- Transfers of money between countries with **no economic goods or services provided in return**.\n" +
          "- Includes migrant worker remittances sent to families abroad, overseas government foreign aid, and contributions to international organisations (e.g. UN, EU).\n\n" +
          "**Overall Current Account Balance Formula:**\n" +
          "$$\\text{Current Account Balance} = \\text{Balance of Goods} + \\text{Balance of Services} + \\text{Net Primary Income} + \\text{Net Secondary Income}$$",
        examinerTips: [
          "Memorize the 4 components: Trade in Goods, Trade in Services, Primary Income, Secondary Income.",
          "Remember that foreign tourists spending money in the domestic economy counts as a SERVICE EXPORT (an inflow of foreign money).",
        ],
        commonMistakes: [
          "Confusing the government budget deficit ($G > T$) with a current account trade deficit ($M > X$). They are two completely different economic accounts.",
        ],
        recap: [
          "List the four main components of the current account of the balance of payments.",
          "Explain why expenditure by foreign tourists in a country is recorded as an export of services.",
        ],
      },
      {
        title: "Causes, Consequences & Corrective Policies for Deficits and Surpluses",
        body:
          "**Current Account Deficit vs Surplus:**\n" +
          "- **Current Account Deficit:** Total debits exceed total credits (expenditure on imports and foreign transfers is greater than earnings from exports and receipts):\n" +
          "  $$\\text{Total Inflows (Credits)} < \\text{Total Outflows (Debits)}$$\n" +
          "- **Current Account Surplus:** Total export earnings and receipts exceed total import payments and debits.\n\n" +
          "**Causes of a Persistent Current Account Deficit:**\n" +
          "- High domestic inflation relative to trading partners (makes domestic exports uncompetitive).\n" +
          "- An overvalued / strong exchange rate making imports artificially cheap.\n" +
          "- Low domestic labour productivity and outdated manufacturing technology.\n" +
          "- Strong domestic economic growth boosting consumer demand for imported luxury goods.\n" +
          "- Heavy national reliance on imported crude oil, energy, and food staples.\n\n" +
          "**Consequences of a Large Current Account Deficit:**\n" +
          "- Outflow of national foreign currency reserves; reliance on foreign loans, increasing external debt.\n" +
          "- Downward depreciation pressure on the domestic currency.\n" +
          "- Loss of domestic output and employment in manufacturing industries.\n\n" +
          "**Government Policies to Correct a Current Account Deficit:**\n" +
          "1. **Expenditure-Reducing Policies (Demand Management):**\n" +
          "   - Contractionary fiscal policy (higher taxes, lower public spending) and contractionary monetary policy (higher interest rates) to depress domestic income and curb import demand.\n" +
          "   - *Drawback:* May trigger domestic recession and unemployment.\n" +
          "2. **Expenditure-Switching Policies:**\n" +
          "   - Devaluing or allowing the currency to depreciate, making exports cheaper and imports dearer.\n" +
          "   - Imposing import tariffs and quotas to encourage consumers to switch from imports to domestic products.\n" +
          "   - *Drawback:* Sparks retaliatory tariffs and risks imported cost-push inflation.\n" +
          "3. **Supply-Side Policies (Long-Run Sustainable Solution):**\n" +
          "   - Subsidising industrial R&D, upgrading worker education, modernising transport logistics, and cutting corporate red tape to permanently enhance international export quality and cost competitiveness.",
        examinerTips: [
          "Classify anti-deficit policies into expenditure-reducing, expenditure-switching, and supply-side policies.",
          "Emphasize that supply-side policies take the longest to work, but solve the structural root causes of deficits without creating recession.",
        ],
        commonMistakes: [
          "Assuming a current account surplus is always completely positive. A surplus means citizens are consuming less domestic output than they produce, and it can invite protectionist retaliation from deficit trading partners.",
        ],
        recap: [
          "Explain two causes of a persistent current account deficit.",
          "Distinguish between expenditure-reducing and expenditure-switching policies used to correct a balance of payments deficit.",
        ],
      },
    ],
  },
];
