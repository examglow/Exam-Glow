import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Economics (0455) 2027–2029 Syllabus Notes
 * Part 1: Chapters 1–6 (Sections 1 & 2 Part 1)
 */
export const ECONOMICS_PART1: Chapter[] = [
  {
    number: 1,
    title: "The Nature of the Basic Economic Problem",
    section: "1. The Basic Economic Problem",
    topic: "1.1 The Nature of the Basic Economic Problem",
    intro:
      "Economics investigates how individuals, firms, and governments allocate scarce resources to satisfy unlimited human needs and wants. This chapter explores the fundamental economic problem of scarcity, resource allocation decisions, and the difference between economic and free goods.",
    subheadings: [
      {
        title: "Finite Resources, Infinite Wants & The Scarcity Problem",
        body:
          "**The Basic Economic Problem:**\n" +
          "- Human beings have **unlimited wants** (desires for goods and services that give utility or pleasure, which can never be completely satisfied as new desires constantly arise).\n" +
          "- However, the Earth possesses only **finite resources** (limited land, raw materials, physical capital, and human labour).\n" +
          "- **Scarcity:** The fundamental economic condition resulting from infinite human wants exceeding finite resources available to satisfy them:\n" +
          "  $$\\text{Scarcity} = \\text{Infinite Wants} > \\text{Finite Resources}$$\n" +
          "- Scarcity is universal: it affects poor economies, emerging nations, and rich developed nations alike.\n\n" +
          "**Scarcity in Context:**\n" +
          "- **Consumers:** Constrained by limited incomes and time. They must choose which goods and services to buy to maximize their overall satisfaction (utility).\n" +
          "- **Workers:** Constrained by a finite number of working hours per day and specific skills. They must choose between working longer hours to earn income or enjoying leisure time.\n" +
          "- **Producers / Firms:** Constrained by finite financial capital, land, raw materials, and skilled labour. They must decide which products to manufacture and which profitable projects to forego.\n" +
          "- **Governments:** Constrained by limited tax revenues and national borrowing capacity. They must decide whether to allocate public funds to education, national defense, healthcare, or transport infrastructure.",
        examinerTips: [
          "Do not confuse 'poverty' with 'scarcity'. Poverty refers to a lack of basic goods needed for survival, whereas scarcity exists in every country because wants are inherently infinite.",
          "Distinguish clearly between 'needs' (essential for survival, such as water, food, shelter) and 'wants' (desirable for comfort or status, but non-essential).",
        ],
        commonMistakes: [
          "Claiming that rich people or affluent countries do not face the basic economic problem. Scarcity applies to all economic agents because time and resources are always finite.",
        ],
        recap: [
          "State the precise definition of the basic economic problem.",
          "Explain why both a minimum-wage worker and a multi-billionaire government face scarcity.",
        ],
      },
      {
        title: "The Three Resource Allocation Decisions",
        body:
          "Because resources are scarce, every economic society must answer three fundamental resource allocation questions:\n\n" +
          "**1. What to Produce?**\n" +
          "- An economy must determine the exact assortment and quantities of consumer goods (e.g. food, clothing, smartphones) versus capital goods (e.g. factories, tractors, machinery) to produce.\n" +
          "- Choosing to produce more healthcare facilities means fewer resources remain available to build recreational parks or sports stadiums.\n\n" +
          "**2. How to Produce?**\n" +
          "- Goods and services can be manufactured using different combinations of productive factors:\n" +
          "  - **Labour-intensive production:** Relies predominantly on human workers (common where labour is abundant and wages are relatively low, such as hand-crafted garments).\n" +
          "  - **Capital-intensive production:** Relies heavily on advanced machinery, automated robotics, and digital technology (common where capital is advanced and wages are high, such as modern automobile assembly).\n\n" +
          "**3. Who to Produce For?**\n" +
          "- How the output of goods and services is shared and distributed among members of society.\n" +
          "- In a pure market economy, distribution depends on purchasing power (who has the income to pay). In planned or welfare economies, governments provide subsidized or free essentials according to need.",
        examinerTips: [
          "When asked to outline the three basic questions, name them accurately: 'What to produce?', 'How to produce?', and 'For whom to produce?'.",
          "Highlight how different economic systems (market, planned, mixed) resolve these three questions differently.",
        ],
        commonMistakes: [
          "Saying 'where to produce' instead of 'how to produce' or 'for whom to produce'.",
        ],
        recap: [
          "List the three fundamental questions of resource allocation.",
          "Give an example of a trade-off involved in deciding 'how to produce'.",
        ],
      },
      {
        title: "Economic Goods vs Free Goods",
        body:
          "Economists classify goods based on whether their provision requires scarce resources and incurs an opportunity cost:\n\n" +
          "| Characteristic | Economic Good | Free Good |\n" +
          "| :--- | :--- | :--- |\n" +
          "| **Resource Use** | Requires scarce factors of production (land, labour, capital) | In naturally unlimited abundance; requires no scarce resources |\n" +
          "| **Opportunity Cost** | **Yes** (producing it sacrifices alternative goods) | **No** (using it does not reduce availability to others) |\n" +
          "| **Price** | Commands a monetary price ($P > 0$) | Freely available without monetary charge ($P = 0$) |\n" +
          "| **Examples** | Bread, computers, electricity, bottled purified water | Sunlight, atmospheric air, sea water at the beach |\n\n" +
          "**Important Distinction:**\n" +
          "- Public education or state healthcare provided 'free at the point of delivery' are **not** free goods! They are economic goods because doctors, teachers, medicines, and school buildings consume scarce resources funded through taxation, carrying an enormous opportunity cost.",
        examinerTips: [
          "The definitive test of a free good is zero opportunity cost. If producing or acquiring one more unit forces society to sacrifice anything else, it is an economic good.",
          "Beware of tricky exam questions: tap water, clean air in polluted cities, and free state clinics are all economic goods.",
        ],
        commonMistakes: [
          "Assuming that any good provided with a $0 price tag by a charity or government is a 'free good'.",
        ],
        recap: [
          "Explain why sunlight on an open beach is a free good, while solar electricity is an economic good.",
          "State the essential condition that differentiates an economic good from a free good.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Factors of Production",
    section: "1. The Basic Economic Problem",
    topic: "1.2 Factors of Production",
    intro:
      "Production cannot occur without inputs. The productive resources of an economy are grouped into four factors of production: land, labour, capital, and enterprise. This chapter explores their definitions, factor rewards, and causes of changes in their quantity and quality.",
    subheadings: [
      {
        title: "The Four Factors of Production and Factor Rewards",
        body:
          "Production is the transformation of inputs into outputs of goods and services. The four fundamental factors of production are:\n\n" +
          "**1. Land:**\n" +
          "- All natural resources provided by nature (not man-made) used in production.\n" +
          "- Includes agricultural land, mineral deposits (iron ore, crude oil, gold), forests, fish stocks, and freshwater rivers.\n" +
          "- **Factor Reward:** **Rent** (income earned by the owner of land or natural resources).\n\n" +
          "**2. Labour:**\n" +
          "- The physical and mental human effort exerted in the production of goods and services.\n" +
          "- Includes factory operatives, software engineers, surgeons, and teachers.\n" +
          "- **Factor Reward:** **Wages** or salaries.\n\n" +
          "**3. Capital (Physical Capital):**\n" +
          "- All man-made aids to production used to produce other goods and services.\n" +
          "- Includes factories, machinery, tools, computers, commercial vehicles, and infrastructure.\n" +
          "- *Note:* Money is financial capital, not physical capital; money cannot produce goods on its own until used to buy machinery or raw materials.\n" +
          "- **Factor Reward:** **Interest** (the return on capital investment).\n\n" +
          "**4. Enterprise (Entrepreneurship):**\n" +
          "- The human skill that combines the other three factors of production, organises business operations, and takes the financial and commercial risk of business failure.\n" +
          "- Entrepreneurs make critical business choices and innovate.\n" +
          "- **Factor Reward:** **Profit** (the residual return after all production costs are paid).",
        examinerTips: [
          "Memorise the exact factor-reward pairings: Land $\\rightarrow$ Rent, Labour $\\rightarrow$ Wages, Capital $\\rightarrow$ Interest, Enterprise $\\rightarrow$ Profit.",
          "Never define capital as 'money'. Capital in economics means physical capital—man-made tools, machinery, and equipment used in manufacturing.",
        ],
        commonMistakes: [
          "Calling cash or bank deposits a factor of production. Physical capital produces goods, money simply purchases them.",
        ],
        recap: [
          "List the four factors of production and state the factor reward for each.",
          "Explain why enterprise is distinct from general labour.",
        ],
      },
      {
        title: "Quantity and Quality of Factors of Production",
        body:
          "An economy's capacity to produce goods and services depends directly on the quantity and quality of its factors of production:\n\n" +
          "**Land:**\n" +
          "- *Quantity:* Increased by land reclamation from the sea, discovering new oil or mineral reserves, or clearing uncultivated wilderness. Decreased by soil erosion, desertification, and natural disasters.\n" +
          "- *Quality:* Improved by modern irrigation, organic fertilizers, and sustainable farming techniques. Reduced by pollution, toxic waste dumping, and overgrazing.\n\n" +
          "**Labour:**\n" +
          "- *Quantity:* Increased by population growth, higher net immigration of working-age adults, raising the official retirement age, or increasing female labour force participation. Decreased by an ageing population, emigration of skilled workers (brain drain), or wars.\n" +
          "- *Quality:* Improved by better schooling, university degrees, vocational apprenticeship training, and enhanced public healthcare (which lowers worker absenteeism and boosts productivity).\n\n" +
          "**Capital:**\n" +
          "- *Quantity:* Increased through gross capital investment (building new factories, procuring more tools). Decreased when the rate of depreciation (wear and tear, obsolescence) exceeds new investment.\n" +
          "- *Quality:* Improved through research and development (R&D) and technological advancement (e.g. replacing manual mechanical presses with robotic AI-guided precision lasers).\n\n" +
          "**Enterprise:**\n" +
          "- *Quantity:* Increased through entrepreneurship education in schools, government startup grants, reduction of red tape/regulations, and low corporate tax rates.\n" +
          "- *Quality:* Enhanced by executive business training, international market exposure, and improved managerial competence.",
        examinerTips: [
          "When discussing economic growth, link both quantity and quality of factors: a higher quantity shifts capacity outward, but higher quality raises labour productivity and capital efficiency.",
          "Distinguish clearly between 'gross investment' (total spending on capital) and 'net investment' (gross investment minus capital depreciation).",
        ],
        commonMistakes: [
          "Stating that the quantity of land is completely fixed. Land reclamation (e.g. in the Netherlands and Singapore) expands usable surface area, and new mineral exploration discovers hidden reserves.",
        ],
        recap: [
          "Explain two ways a country can raise the quality of its labour force.",
          "How does technological progress affect physical capital?",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Opportunity Cost",
    section: "1. The Basic Economic Problem",
    topic: "1.3 Opportunity Cost",
    intro:
      "Because resources are scarce, choices must be made. Every economic choice involves a sacrifice. This chapter examines opportunity cost, its calculation, and its critical role in the decision-making of consumers, workers, firms, and governments.",
    subheadings: [
      {
        title: "The Concept & Definition of Opportunity Cost",
        body:
          "**Definition:**\n" +
          "- **Opportunity Cost** is the **next best alternative foregone** when making an economic decision.\n" +
          "- It is not all alternatives combined, but specifically the single highest-valued alternative sacrificed when a choice is made.\n\n" +
          "**Everyday Practical Examples:**\n" +
          "- If a student has $\\$10$ and must choose between buying an Economics revision textbook or going to the cinema:\n" +
          "  - If they buy the textbook, the opportunity cost is the enjoyment of the cinema movie.\n" +
          "- If a farmer chooses to plant wheat on a 100-hectare field rather than barley:\n" +
          "  - The opportunity cost is the harvest and revenue from the barley that could have been produced.\n\n" +
          "**Monetary Cost vs Opportunity Cost:**\n" +
          "- Accounting cost measures only explicit monetary expenditures (e.g. paying $\\$50{,}000$ for a machine).\n" +
          "- Opportunity cost considers the real sacrifice (e.g. using that $\\$50{,}000$ to hire two expert software engineers or leaving it in a bank earning $5\\%$ compound interest).",
        examinerTips: [
          "In definitions, use the exact phrase: 'the next best alternative foregone'. Examiners penalise vague answers like 'the cost of other things you could have bought'.",
          "Ensure you identify a single specific alternative foregone, not a list of multiple items.",
        ],
        commonMistakes: [
          "Listing all possible alternative choices as the opportunity cost instead of the next best alternative.",
          "Confusing opportunity cost with the financial price paid for a product.",
        ],
        recap: [
          "Define opportunity cost precisely.",
          "A business spends $100,000 buying delivery vans instead of upgrading its factory computers. What is the opportunity cost?",
        ],
      },
      {
        title: "Opportunity Cost in Economic Decision-Making",
        body:
          "Every economic agent faces opportunity costs when allocating finite resources:\n\n" +
          "**1. Consumers:**\n" +
          "- Consumers possess finite disposable income.\n" +
          "- Allocating funds to purchase a brand-new car means sacrificing an overseas family holiday or saving for a house deposit.\n" +
          "- Rational consumers seek to maximize their total satisfaction (utility) by choosing goods whose marginal benefit exceeds the opportunity cost.\n\n" +
          "**2. Workers:**\n" +
          "- Workers possess finite time (24 hours a day).\n" +
          "- Choosing to work 10 hours of overtime generates more wage income, but the opportunity cost is sacrificed leisure time, sleep, and family commitments.\n" +
          "- Choosing to pursue higher education for 3 years incurs tuition fees plus the opportunity cost of 3 years of foregone employment wages.\n\n" +
          "**3. Producers / Firms:**\n" +
          "- Firms have finite retained profits, borrowing limits, and factory floor space.\n" +
          "- If an automaker uses a factory line to produce electric SUVs, the opportunity cost is the foregone revenue from producing hybrid sedans.\n" +
          "- Investing retained profits in a new marketing campaign foregoes installing energy-efficient factory machinery.\n\n" +
          "**4. Governments:**\n" +
          "- Governments have a finite annual fiscal budget funded by tax receipts and sovereign borrowing.\n" +
          "- Allocating $\\$5$ billion to defense equipment means sacrificing $\\$5$ billion that could have built new state hospitals, schools, or high-speed rail links.\n" +
          "- In public policy debates, evaluating opportunity cost is essential to ensure public welfare is maximized.",
        examinerTips: [
          "Use a structured four-agent breakdown (consumers, workers, firms, governments) when an exam question asks how opportunity cost influences economic decision-making.",
          "Cite concrete, realistic examples for each agent to secure full evaluation marks.",
        ],
        commonMistakes: [
          "Assuming governments can simply print unlimited money to eliminate opportunity cost. Printing money without more real resources causes inflation, not more real output.",
        ],
        recap: [
          "Describe how opportunity cost influences a government's annual budget allocation.",
          "Give an example of an opportunity cost faced by an employee deciding whether to accept a promotion.",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Production Possibility Curve (PPC) Diagrams",
    section: "1. The Basic Economic Problem",
    topic: "1.4 Production Possibility Curve (PPC) Diagrams",
    intro:
      "A Production Possibility Curve (PPC) is a fundamental graphical model showing the maximum combinations of two goods an economy can produce when all resources are fully and efficiently employed. This chapter explores points on, under, and beyond the PPC, movements along it, and causes of shifts.",
    subheadings: [
      {
        title: "PPC Fundamentals, Points Under, On and Beyond a PPC",
        body:
          "**Definition:**\n" +
          "- A **Production Possibility Curve (PPC)** (or Production Possibility Frontier) illustrates the maximum output combinations of two goods or services that an economy can produce when all available factors of production are fully and efficiently utilized with existing technology.\n\n" +
          "**Interpretation of Points on a PPC Diagram:**\n" +
          "Assume an economy produces **Consumer Goods** on the vertical axis and **Capital Goods** on the horizontal axis:\n\n" +
          "- **Points on the Curve (e.g. Points A and B):**\n" +
          "  - Represent **productive efficiency** and **full employment** of resources.\n" +
          "  - All land, labour, capital, and enterprise are fully utilized with zero waste.\n" +
          "  - Output cannot increase for one good without reducing the output of the other.\n\n" +
          "- **Points Inside / Under the Curve (e.g. Point C):**\n" +
          "  - Represent **inefficiency**, **underemployment**, or **idle resources** (e.g. high cyclical unemployment, closed factories).\n" +
          "  - The economy is operating below its productive potential.\n" +
          "  - Moving from inside the curve toward the curve increases output of one or both goods with **zero opportunity cost** (utilizing previously idle workers or machines).\n\n" +
          "- **Points Beyond / Outside the Curve (e.g. Point D):**\n" +
          "  - Represent **unattainable** output levels with current resources and technology.\n" +
          "  - Can only be reached in the future through economic growth (increasing factor quantity/quality) or through international trade.",
        examinerTips: [
          "Label PPC axes clearly with two distinct goods (e.g. 'Consumer Goods' and 'Capital Goods', or 'Agricultural Goods' and 'Manufactured Goods').",
          "Remember that moving from an internal point to the boundary incurs no opportunity cost because idle resources are being put to work.",
        ],
        commonMistakes: [
          "Labeling axes as 'Price' and 'Quantity'—that is a market demand/supply diagram, not a PPC!",
          "Claiming that a point inside the PPC is impossible. Points inside are fully possible; they simply indicate unemployment or productive inefficiency.",
        ],
        recap: [
          "Define what a Production Possibility Curve shows.",
          "Contrast the economic meaning of a point inside the PPC with a point located on the PPC.",
        ],
      },
      {
        title: "Movements Along a PPC & Opportunity Cost",
        body:
          "**Movement Along the Curve:**\n" +
          "- A movement from one point on the PPC to another point on the same curve indicates a **reallocation of resources**.\n" +
          "- Because the economy is at full capacity, producing more of Good X strictly requires transferring factors of production away from Good Y.\n" +
          "- The slope of the PPC reflects the **opportunity cost**:\n" +
          "  $$\\text{Opportunity Cost of 1 Unit of Good X} = \\frac{\\Delta \\text{Good Y Sacrificed}}{\\Delta \\text{Good X Gained}}$$\n\n" +
          "**Shape of the PPC:**\n" +
          "- **Concave to the Origin (Bowed Outwards):**\n" +
          "  - Reflects **increasing opportunity cost**.\n" +
          "  - Factors of production are **not perfectly adaptable** to alternative uses. A skilled brain surgeon or specialised silicon wafer clean-room cannot easily or efficiently be converted into a wheat farmer or tractor.\n" +
          "  - As more of Good X is produced, increasingly less suitable resources must be reallocated from Good Y, so larger amounts of Good Y must be sacrificed per extra unit of Good X.\n\n" +
          "- **Straight-Line PPC:**\n" +
          "  - Reflects **constant opportunity cost**.\n" +
          "  - Factors of production are perfectly substitutable between the two goods (rare in real-world macroeconomics).",
        examinerTips: [
          "Explain why real-world PPCs are bowed outwards: factor immobility and imperfect factor substitutability.",
          "When calculating opportunity cost from a table, subtract the initial output of the sacrificed good from the new output.",
        ],
        commonMistakes: [
          "Stating that moving along a PPC causes economic growth. Moving along a PPC only changes the output mix; total capacity is unchanged.",
        ],
        recap: [
          "Why is the PPC typically concave (bowed outwards) rather than a straight line?",
          "If an economy moves from producing 50 cars and 100 trucks to 70 cars and 80 trucks, what is the opportunity cost of the additional 20 cars?",
        ],
      },
      {
        title: "Shifts of a PPC and Economic Growth",
        body:
          "**Outward Shift of the PPC (Potential Economic Growth):**\n" +
          "- The entire PPC shifts outward to the right when there is an increase in the economy's **productive capacity**.\n" +
          "- **Causes:**\n" +
          "  - Discovering new natural resources (e.g. oil or mineral reserves).\n" +
          "  - Net immigration of skilled workers or rising working-age population.\n" +
          "  - Net capital investment that increases the national stock of factories and equipment.\n" +
          "  - Technological advancements and automation that increase factor productivity.\n" +
          "  - Enhanced education, training, and healthcare boosting human capital quality.\n\n" +
          "**Inward Shift of the PPC (Loss of Productive Capacity):**\n" +
          "- The entire curve contracts inward to the left when productive capacity is permanently damaged or depleted.\n" +
          "- **Causes:**\n" +
          "  - Severe natural disasters (e.g. catastrophic earthquakes, tsunamis, volcanic eruptions).\n" +
          "  - Armed conflicts, wars, or civil strife destroying infrastructure and human life.\n" +
          "  - Large-scale emigration of skilled professionals (brain drain).\n" +
          "  - Depletion of non-renewable resources without replacement.\n\n" +
          "**Actual Growth vs Potential Growth:**\n" +
          "- **Actual Growth:** An increase in real output produced, represented by moving from an inefficient point **inside** the PPC toward the boundary.\n" +
          "- **Potential Growth:** An expansion in the maximum productive capacity of the economy, represented by an **outward shift** of the entire PPC.",
        examinerTips: [
          "Distinguish clearly between a movement from inside the PPC toward the boundary (actual growth / recovery from recession) and an outward shift of the PPC (potential growth).",
          "An outward shift can be parallel (impacting both goods equally) or biased/pivoted (e.g. new technology exclusively benefiting agricultural production).",
        ],
        commonMistakes: [
          "Confusing high unemployment with an inward shift of the PPC. Unemployment puts an economy inside its curve, it does not shrink the curve itself.",
        ],
        recap: [
          "Distinguish between actual economic growth and potential economic growth using PPC concepts.",
          "Identify three distinct factors that cause a country's PPC to shift outwards.",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "The Role of Markets & Demand",
    section: "2. The Allocation of Resources",
    topic: "2.1 The Role of Markets & 2.2 Demand",
    intro:
      "In a market economy, scarce resources are allocated through the interactions of buyers and sellers. This chapter examines how markets function, the law of demand, individual versus market demand, and the crucial distinction between movements along and shifts of the demand curve.",
    subheadings: [
      {
        title: "The Role of Markets in Resource Allocation",
        body:
          "**Definition of a Market:**\n" +
          "- A **market** is any arrangement or mechanism that brings buyers (consumers demanding goods) and sellers (firms supplying goods) together to negotiate exchange and establish prices.\n" +
          "- Markets do not need to be physical locations; they can be digital, global, and decentralized (e.g. online e-commerce platforms, stock exchanges, foreign currency markets).\n\n" +
          "**Types of Markets:**\n" +
          "- **Product Markets (Goods & Services Markets):** Where finished consumer goods (smartphones, cars, clothes, haircuts) are bought and sold.\n" +
          "- **Factor Markets:** Where the factors of production (labour, land, capital) are bought and sold (e.g. the job market where employers hire workers).\n\n" +
          "**Roles of Buyers and Sellers:**\n" +
          "- **Buyers:** Create demand. They seek to maximize their personal satisfaction or utility within their budget constraints.\n" +
          "- **Sellers:** Create supply. They seek to maximize business profit by producing and selling goods efficiently.",
        examinerTips: [
          "Emphasize that markets can be physical (farmers' markets) or virtual/electronic (e-commerce, stock markets).",
          "Note the interdependence: firms sell goods to households in product markets and buy labour from households in factor markets.",
        ],
        commonMistakes: [
          "Thinking a market must be a physical physical store or street bazaar.",
        ],
        recap: [
          "Define an economic market.",
          "Distinguish between a product market and a factor market.",
        ],
      },
      {
        title: "Demand, Law of Demand & Demand Schedules",
        body:
          "**Definition of Demand:**\n" +
          "- **Demand** is the willingness and financial ability of consumers to buy a given quantity of a good or service at various prices over a specified period of time (**effective demand**).\n" +
          "- Mere desire without the money to purchase is not economic demand; it must be backed by purchasing power.\n\n" +
          "**The Law of Demand:**\n" +
          "- There is an **inverse (negative) relationship** between the price of a good and the quantity demanded, *ceteris paribus* (all other factors held constant):\n" +
          "  $$P \\uparrow \\implies Q_d \\downarrow \\quad \\text{and} \\quad P \\downarrow \\implies Q_d \\uparrow$$\n" +
          "- When the price falls, consumers experience an increase in purchasing power (income effect) and the good becomes cheaper relative to alternatives (substitution effect).\n\n" +
          "**Individual vs Market Demand:**\n" +
          "- **Individual Demand:** The quantity of a good that a single consumer intends to purchase at each price level.\n" +
          "- **Market Demand:** The total quantity that all consumers in the entire market are willing and able to purchase at each price level.\n" +
          "- Market demand is calculated by the **horizontal summation** of individual demand curves at every price point:\n" +
          "  $$Q_{D,\\text{market}} = \\sum_{i=1}^{n} Q_{d,i}$$",
        examinerTips: [
          "Always specify 'willing and able' when defining demand—effective demand requires purchasing power.",
          "Remember the term *ceteris paribus* (all else remaining equal)—it is vital when explaining the law of demand.",
        ],
        commonMistakes: [
          "Confusing 'demand' (the entire schedule/curve) with 'quantity demanded' (a specific number at a specific price).",
        ],
        recap: [
          "State the law of demand and explain the concept of effective demand.",
          "How is a market demand curve constructed from individual demand schedules?",
        ],
      },
      {
        title: "Movements Along vs Shifts of the Demand Curve",
        body:
          "A fundamental distinction in economic analysis is between a movement along a demand curve and a shift of the curve:\n\n" +
          "**1. Movements Along the Demand Curve (Change in Quantity Demanded):**\n" +
          "- Caused **only** by a change in the **own price** of the good, *ceteris paribus*.\n" +
          "- **Price falls ($P \\downarrow$):** Leads to an **extension** in quantity demanded (movement down along the curve).\n" +
          "- **Price rises ($P \\uparrow$):** Leads to a **contraction** in quantity demanded (movement up along the curve).\n\n" +
          "**2. Shifts of the Demand Curve (Change in Demand):**\n" +
          "- Caused by changes in **non-price determinants** of demand.\n" +
          "- An increase in demand shifts the entire curve **rightward** ($D_0 \\to D_1$); at every price, more is demanded.\n" +
          "- A decrease in demand shifts the entire curve **leftward** ($D_0 \\to D_2$); at every price, less is demanded.\n\n" +
          "**Non-Price Determinants of Demand (PASIFIC):**\n" +
          "- **Population:** Growth in population size or changes in age distribution increase market demand.\n" +
          "- **Advertising & Branding:** Successful marketing campaigns expand consumer taste and preferences.\n" +
          "- **Substitutes' Prices:** If the price of a close substitute (e.g. Pepsi) rises, demand for the good (Coca-Cola) shifts rightward.\n" +
          "- **Income of Consumers:**\n" +
          "  - *Normal goods:* Demand rises when disposable income rises ($Y \\uparrow \\implies D \\uparrow$).\n" +
          "  - *Inferior goods:* Demand falls when disposable income rises ($Y \\uparrow \\implies D \\downarrow$) as consumers switch to higher-quality items.\n" +
          "- **Fashion, Tastes & Trends:** Products going out of style experience a leftward demand shift.\n" +
          "- **Interest Rates:** Higher borrowing rates reduce credit purchases of expensive durable goods (cars, appliances).\n" +
          "- **Complements' Prices:** Goods consumed together (e.g. gaming consoles and video games). If console prices rise, demand for games shifts leftward.",
        examinerTips: [
          "Never say 'demand increases' when price drops; say 'quantity demanded extends'. Reserve 'shift in demand' for non-price factors.",
          "Be precise about normal goods versus inferior goods when discussing consumer income changes.",
        ],
        commonMistakes: [
          "Drawing a shift of the demand curve when the question describes a change in the product's own price.",
        ],
        recap: [
          "What causes a movement along a demand curve versus a complete shift of the curve?",
          "Explain how a rise in household disposable income impacts the demand for normal goods versus inferior goods.",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Supply & Price Determination",
    section: "2. The Allocation of Resources",
    topic: "2.3 Supply & 2.4 Price Determination",
    intro:
      "Firms supply goods based on production costs and selling prices. Where demand and supply intersect, the price mechanism determines market equilibrium. This chapter explores the law of supply, shifts in supply, market clearing, and disequilibrium shortages and surpluses.",
    subheadings: [
      {
        title: "Supply, Law of Supply & Supply Schedules",
        body:
          "**Definition of Supply:**\n" +
          "- **Supply** is the willingness and ability of producers to offer a given quantity of a good or service for sale at various prices over a specified period of time.\n\n" +
          "**The Law of Supply:**\n" +
          "- There is a **direct (positive) relationship** between the price of a good and the quantity supplied, *ceteris paribus*:\n" +
          "  $$P \\uparrow \\implies Q_s \\uparrow \\quad \\text{and} \\quad P \\downarrow \\implies Q_s \\downarrow$$\n" +
          "- Higher prices provide greater profit incentive to firms, encouraging them to expand output by hiring more resources and motivating new firms to enter the market.\n\n" +
          "**Individual vs Market Supply:**\n" +
          "- **Individual Supply:** The quantity of output a single firm offers at various price levels.\n" +
          "- **Market Supply:** The horizontal summation of all individual producers' quantities supplied at each price:\n" +
          "  $$Q_{S,\\text{market}} = \\sum_{i=1}^{m} Q_{s,i}$$",
        examinerTips: [
          "Explain the upward slope of the supply curve: higher prices raise profitability per unit, incentivising higher production.",
          "Distinguish clearly between supply and production: production is total physical creation of output, supply is what is brought to market for sale.",
        ],
        commonMistakes: [
          "Stating that producers supply more when prices fall. Firms maximize profits, so higher selling prices incentivize greater supply.",
        ],
        recap: [
          "State the law of supply and explain the reason for the positive slope of the supply curve.",
          "How is total market supply calculated from individual firms' supply schedules?",
        ],
      },
      {
        title: "Movements Along vs Shifts of the Supply Curve",
        body:
          "Similar to demand, we distinguish between changes in quantity supplied and changes in overall supply:\n\n" +
          "**1. Movements Along the Supply Curve (Change in Quantity Supplied):**\n" +
          "- Caused **only** by a change in the **own price** of the good, *ceteris paribus*.\n" +
          "- **Price rises ($P \\uparrow$):** Leads to an **extension** in quantity supplied (movement up along the curve).\n" +
          "- **Price falls ($P \\downarrow$):** Leads to a **contraction** in quantity supplied (movement down along the curve).\n\n" +
          "**2. Shifts of the Supply Curve (Change in Supply):**\n" +
          "- Caused by changes in **non-price determinants** of supply.\n" +
          "- An increase in supply shifts the entire curve **rightward / downward** ($S_0 \\to S_1$); more is supplied at each price.\n" +
          "- A decrease in supply shifts the entire curve **leftward / upward** ($S_0 \\to S_2$); less is supplied at each price.\n\n" +
          "**Non-Price Determinants of Supply (PINTSWC):**\n" +
          "- **Productivity:** Improvements in labour productivity reduce unit labour costs, shifting supply rightward.\n" +
          "- **Indirect Taxes:** An excise tax or VAT increases production costs, shifting supply leftward.\n" +
          "- **Number of Firms:** Entry of new competitors into the industry shifts total market supply to the right.\n" +
          "- **Technology:** Technological innovations reduce production costs and speed up assembly, shifting supply rightward.\n" +
          "- **Subsidies:** Government financial grants lower production costs, shifting supply rightward.\n" +
          "- **Weather & Natural Factors:** Favourable rainfall boosts agricultural crop supply; droughts, floods, or plant diseases shift crop supply sharply leftward.\n" +
          "- **Costs of Production:** Increases in raw material prices, utility bills, or minimum wages increase marginal costs, shifting supply leftward.",
        examinerTips: [
          "Remember that an indirect tax shifts supply vertically upwards by the exact amount of the tax per unit.",
          "A subsidy shifts supply vertically downwards/rightwards by the exact amount of the subsidy per unit.",
        ],
        commonMistakes: [
          "Confusing the direction of shifts: a 'downward' shift on a supply diagram actually represents an INCREASE in supply (shifting to the right).",
        ],
        recap: [
          "Explain the difference between an extension in quantity supplied and an increase in supply.",
          "List four non-price factors that can shift the supply curve of manufactured goods to the right.",
        ],
      },
      {
        title: "Market Equilibrium, Disequilibrium & The Price Mechanism",
        body:
          "**Market Equilibrium:**\n" +
          "- Occurs at the unique price where **quantity demanded equals quantity supplied**:\n" +
          "  $$Q_d = Q_s$$\n" +
          "- The resulting price is the **equilibrium price** ($P_e$) or market-clearing price; the quantity is the **equilibrium quantity** ($Q_e$).\n" +
          "- At equilibrium, there are no unsold stocks and no unsatisfied buyers; the market is in balance with no pressure on price to change.\n\n" +
          "**Market Disequilibrium:**\n" +
          "- **Excess Demand (Shortage):**\n" +
          "  - Occurs when current price is **below** equilibrium ($P < P_e$), so $Q_d > Q_s$.\n" +
          "  - Buyers compete for scarce units, bidding prices up.\n" +
          "  - As price rises, quantity demanded contracts and quantity supplied extends until equilibrium is restored.\n" +
          "- **Excess Supply (Surplus):**\n" +
          "  - Occurs when current price is **above** equilibrium ($P > P_e$), so $Q_s > Q_d$.\n" +
          "  - Unsold inventories accumulate. To clear excess stock, sellers cut prices.\n" +
          "  - As price falls, quantity demanded extends and quantity supplied contracts until equilibrium is restored.\n\n" +
          "**Functions of the Price Mechanism:**\n" +
          "1. **Signalling Function:** Price changes signal shifts in consumer demand and market conditions to producers and resource owners.\n" +
          "2. **Incentive Function:** Rising prices increase potential profits, giving producers an incentive to allocate more resources to that good.\n" +
          "3. **Rationing Function:** In cases of scarcity, rising prices ration available goods to those consumers who place the highest financial value on them.",
        examinerTips: [
          "In diagrams, always label the axes ($P$ and $Q$), initial equilibrium ($P_e, Q_e$), curves ($D, S$), and show arrows for shifts and movements.",
          "Memorize the three functions of the price mechanism: Signalling, Incentive, and Rationing (SIR).",
        ],
        commonMistakes: [
          "Confusing excess supply with excess demand. Excess supply happens when price is too high ($Q_s > Q_d$).",
        ],
        recap: [
          "Explain how market forces eliminate a shortage when price is below equilibrium.",
          "Outline the three functions of the price mechanism in a free market economy.",
        ],
      },
    ],
  },
];
