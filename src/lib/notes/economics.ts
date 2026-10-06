import type { SubjectNotes } from "./types";

export const ECONOMICS: SubjectNotes = {
  id: "economics",
  name: "Economics",
  code: "0455",
  color: "bg-amber-500",
  chapters: [
    {
      number: 1,
      title: "The Basic Economic Problem",
      intro: "Economics studies how individuals, firms, and governments make decisions about allocating scarce resources to satisfy unlimited wants. The central problem — scarcity — arises because resources (land, labour, capital, enterprise) are finite while human desires are infinite. Every economic decision involves a trade-off, and understanding the concept of opportunity cost is essential for analysing all economic choices from household spending to government policy.",
      subheadings: [
        {
          title: "Scarcity, Choice and Opportunity Cost",
          body: "Scarcity is the fundamental economic problem: resources are limited but human wants are unlimited. Because of scarcity, choices must be made about what to produce, how to produce it, and for whom to produce it — these are the three basic economic questions facing every economy. Every choice involves giving up the next best alternative, which is the opportunity cost. Opportunity cost is not the money cost but the value of the best alternative foregone. For example, a government that spends £10 billion on defence cannot spend that money on healthcare — the opportunity cost of the defence spending is the healthcare that could have been provided. For an individual, the opportunity cost of going to university is the wage they could have earned by working instead. The concept of opportunity cost explains why individuals and firms weigh up the costs and benefits of alternatives before deciding, and why resources should ideally be allocated to their highest-valued use. A Production Possibility Curve (PPC) illustrates scarcity, choice, and opportunity cost graphically — it shows the maximum combinations of two goods that can be produced with available resources and technology, assuming full and efficient employment.",
          groups: [
            {
              subTitle: "The Production Possibility Curve",
              bullets: [
                "**Points on the PPC**: Represent full and efficient use of all resources. The economy is producing at maximum capacity for the given combination of goods.",
                "**Points inside the PPC**: Represent inefficiency or unemployed resources — the economy is not using all available resources (e.g. during a recession).",
                "**Points outside the PPC**: Currently unattainable — require either more resources or better technology.",
                "**Movement along the PPC**: Represents opportunity cost — to produce more of one good, production of the other must fall. The curved shape of the PPC (concave to the origin) reflects the law of increasing opportunity cost — resources are not perfectly substitutable, so each additional unit of one good requires giving up increasing amounts of the other.",
                "**Outward shift of the PPC**: Represents economic growth — caused by an increase in the quantity or quality of resources (more labour, better technology, more capital) allowing more of both goods to be produced."
              ]
            }
          ],
          recap: [
            "Define opportunity cost and give a specific example involving a government decision. [2]",
            "Explain, using a production possibility curve, what is meant by economic efficiency. [3]",
            "A PPC shifts outward. State two reasons why this might occur. [2]",
            "Explain why the PPC is usually drawn as concave (bowed out) rather than as a straight line. [3]"
          ]
        },
        {
          title: "Factors of Production",
          body: "Factors of production are the resources used to produce goods and services. Land refers to all natural resources — not just the physical land surface but also minerals, oil, forests, rivers, and fish stocks. Its reward is rent. Labour is the human effort (both physical and mental) used in production. Its reward is wages. Capital refers to man-made resources used in production — machinery, tools, factories, computers, and infrastructure. Capital is distinct from money; financial capital becomes capital goods when invested. Its reward is interest. Enterprise (or entrepreneurship) is the human quality of combining the other three factors, taking risks, and organising production. Entrepreneurs identify market opportunities, bear the risk of failure, and if successful earn profit. The quantity of factors of production available determines the productive capacity of an economy (the maximum output); the quality (human capital — education and skills of labour; technology embodied in capital) determines how efficiently they are used. Investment is the process of adding to the capital stock — it involves forgoing current consumption to increase future productive capacity.",
          groups: [
            {
              subTitle: "Distinguishing capital goods from consumer goods",
              bullets: [
                "**Capital goods**: Used in the production of other goods. Examples: factory machinery, cranes, ovens in a bakery, computers in a firm. They are not consumed immediately; they generate output over many periods.",
                "**Consumer goods**: Purchased by households for direct satisfaction of wants. Durable consumer goods (cars, washing machines) provide utility over time; non-durable consumer goods (food, petrol) are used up quickly.",
                "**Human capital**: The skills, knowledge, and experience embodied in workers, acquired through education and training. Investing in human capital raises labour productivity and increases the economy's productive capacity, shifting the PPC outward.",
                "**Why enterprise is separate**: Enterprise cannot simply be hired like labour or purchased like capital — it requires a specific combination of risk-taking, innovation, and organisational skill. Without enterprise, the other three factors would not be combined productively."
              ]
            }
          ],
          recap: [
            "State the four factors of production and give the reward (income) earned by each. [4]",
            "Explain the difference between capital goods and consumer goods, giving one example of each. [2]",
            "Explain how an increase in human capital can lead to economic growth. [3]",
            "A new factory is built in a country. Identify which factor of production has increased and explain the likely effect on the PPC. [2]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Demand, Supply and Price",
      intro: "In a market economy, prices are determined by the interaction of demand (consumers' willingness and ability to buy) and supply (producers' willingness and ability to sell). Understanding how and why demand and supply curves shift — and how changes in market conditions lead to new equilibrium prices and quantities — is the analytical core of microeconomics. These tools apply to all markets: goods, labour, foreign exchange, and financial assets.",
      subheadings: [
        {
          title: "Demand and the Law of Demand",
          body: "Demand is the quantity of a good or service that consumers are willing and able to purchase at each price over a given time period. It is important that demand includes both willingness and ability — wanting a good is not enough without the ability to pay. The law of demand states that, ceteris paribus (all other things being equal), as price rises, the quantity demanded falls and vice versa. This inverse relationship exists because: higher prices reduce consumers' real purchasing power (income effect — consumers are effectively poorer), and consumers switch to cheaper substitutes (substitution effect). The demand curve slopes downward from left to right. A movement along the demand curve (expansion or contraction of demand) is caused only by a change in the price of the good itself. A shift of the entire demand curve (increase or decrease in demand) is caused by a change in any determinant other than price: income, tastes, price of substitutes, price of complements, advertising, population, and expectations. An increase in demand shifts the curve to the right; a decrease shifts it to the left.",
          groups: [
            {
              subTitle: "Factors causing a shift in demand",
              bullets: [
                "**Income**: For normal goods, rising income increases demand (rightward shift). For inferior goods (e.g. cheap supermarket own-brands, bus travel), rising income decreases demand as consumers switch to better alternatives.",
                "**Price of substitutes**: If the price of Pepsi rises, demand for Coca-Cola increases (rightward shift) — consumers switch to the now relatively cheaper alternative.",
                "**Price of complements**: Complements are goods consumed together (cars and petrol, printers and ink). If the price of petrol rises sharply, demand for cars falls (leftward shift).",
                "**Tastes and fashions**: A health campaign showing evidence that a food causes cancer will decrease demand for it. Celebrity endorsements or social media trends increase demand for products.",
                "**Expectations**: If consumers expect prices to rise in future, they buy now, increasing current demand. If a product is expected to become obsolete, demand may fall."
              ]
            }
          ],
          recap: [
            "Explain, using a demand curve diagram, the effect on the market for bus travel if average incomes rise significantly. State whether bus travel is a normal or inferior good in your answer. [4]",
            "Distinguish between a movement along a demand curve and a shift of the demand curve. [2]",
            "The price of tea rises sharply. Explain the likely effect on the demand curve for coffee. [2]",
            "State four factors, other than price, that determine the demand for a product. [4]"
          ]
        },
        {
          title: "Supply, Equilibrium and Price Elasticity",
          body: "Supply is the quantity of a good or service that producers are willing and able to offer for sale at each price over a given time period. The law of supply states that, ceteris paribus, as price rises, quantity supplied rises — higher prices make production more profitable, incentivising firms to produce more. The supply curve slopes upward from left to right. Shifts in the supply curve are caused by changes in: costs of production (wages, raw materials, energy), technology, taxes (an indirect tax shifts supply left — raises costs), subsidies (shift right — reduce costs), number of producers, government regulations, weather (for agricultural goods), and prices of related goods in production. Equilibrium occurs where the demand curve and supply curve intersect — at the equilibrium price, quantity demanded equals quantity supplied and the market clears. If price is above equilibrium, excess supply (surplus) creates downward pressure on price; if below equilibrium, excess demand (shortage) creates upward pressure. Price elasticity of demand (PED) measures the responsiveness of quantity demanded to a change in price: PED = % change in quantity demanded / % change in price. PED values: |PED| > 1 = elastic (quantity changes proportionally more than price); |PED| < 1 = inelastic (quantity changes proportionally less than price); |PED| = 1 = unit elastic. Necessities with few substitutes (insulin, petrol in the short run) tend to be inelastic; luxuries with many substitutes (foreign holidays, branded clothing) tend to be elastic. PED has important implications for firms' total revenue: if demand is elastic, a price cut increases total revenue; if inelastic, a price increase increases total revenue.",
          groups: [
            {
              subTitle: "Elasticity calculations and revenue implications",
              bullets: [
                "**PED calculation**: Price rises from £10 to £12 (20% increase). Quantity demanded falls from 100 to 80 (20% fall). PED = -20% / +20% = -1. Unit elastic (by convention, the negative sign is often omitted and the absolute value quoted).",
                "**Inelastic demand and revenue**: If PED = -0.3, a 10% price increase causes only a 3% fall in quantity. Revenue = P × Q. Revenue increases because the rise in price outweighs the small fall in quantity.",
                "**Elastic demand and revenue**: If PED = -2, a 10% price increase causes a 20% fall in quantity. The large fall in quantity outweighs the price rise — total revenue falls.",
                "**Price Elasticity of Supply (PES)**: Measures responsiveness of quantity supplied to price change. PES = % change in QS / % change in price. PES > 1 = elastic supply (firms can easily increase output); PES < 1 = inelastic (firms cannot quickly increase production — agricultural goods, goods requiring long production times)."
              ]
            }
          ],
          recap: [
            "Using a demand and supply diagram, show and explain what happens to the equilibrium price and quantity of new houses when the cost of building materials rises. [4]",
            "The price of a good rises from £20 to £25. Quantity demanded falls from 400 to 350. Calculate the PED and comment on whether demand is elastic or inelastic. [4]",
            "Explain why the demand for insulin is price inelastic. [2]",
            "Explain how a government subsidy given to producers affects the supply curve and the equilibrium price and quantity. [4]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Government and the Economy",
      intro: "Governments intervene in markets and the macroeconomy for many reasons: to correct market failures, redistribute income, stabilise the business cycle, and promote economic growth. The main macroeconomic objectives are economic growth, low inflation, low unemployment, and a satisfactory balance of payments. Governments use fiscal policy (taxation and government spending) and monetary policy (interest rates and money supply) as the primary tools for achieving these objectives, each with different effects and time lags.",
      subheadings: [
        {
          title: "Macroeconomic Objectives and Conflicts",
          body: "Economic growth refers to an increase in real GDP (Gross Domestic Product — the total value of goods and services produced in an economy in a year) over time. Sustained economic growth raises living standards (provided growth is equitably distributed) and generates tax revenues for public services. Inflation is a sustained general rise in the price level, measured by the Consumer Price Index (CPI). Moderate inflation (2% per year in most developed economies) is considered normal; high or hyperinflation erodes purchasing power, creates uncertainty, and damages investment. Deflation (falling prices) is also harmful as it encourages consumers to delay purchases. Unemployment represents wasted resources — individuals are willing and able to work but cannot find jobs. It causes loss of income, skill deterioration, social problems, and reduced tax revenue. A balance of payments surplus (exports > imports) indicates competitiveness; persistent deficits may create exchange rate pressures. These objectives often conflict: stimulating growth (expansionary policy) may increase inflation and worsen the balance of payments; reducing inflation (contractionary policy) may increase unemployment. The government must balance these trade-offs using a combination of policies.",
          groups: [
            {
              subTitle: "Measuring economic performance",
              bullets: [
                "**GDP**: The total monetary value of all finished goods and services produced within a country in one year. Real GDP adjusts for inflation to show true changes in output. GDP per capita = GDP / population — a measure of average living standards.",
                "**Consumer Price Index (CPI)**: Tracks changes in the price of a basket of goods and services representative of a typical household's expenditure. Inflation rate = % change in CPI. A limitation is that the basket may not represent everyone's spending pattern.",
                "**Unemployment rate**: Number unemployed / labour force × 100. The claimant count measures those claiming unemployment benefits; the ILO measure (survey-based) is broader. Hidden unemployment includes discouraged workers who have given up looking.",
                "**Balance of payments**: Records all economic transactions between a country and the rest of the world over a year. The current account records trade in goods and services, income, and transfers. A current account deficit means imports exceed exports."
              ]
            }
          ],
          recap: [
            "Explain the difference between real GDP and nominal GDP. [2]",
            "Explain why a government trying to reduce inflation may find that unemployment increases. [4]",
            "State four macroeconomic objectives of a government. [4]",
            "Explain why deflation can be as harmful to an economy as high inflation. [3]"
          ]
        },
        {
          title: "Fiscal and Monetary Policy",
          body: "Fiscal policy involves changes in government taxation and public expenditure to influence aggregate demand. Expansionary fiscal policy (higher spending or lower taxes) increases aggregate demand, stimulating growth and reducing unemployment — but may increase inflation and government borrowing. Contractionary fiscal policy (cuts in spending or higher taxes) reduces aggregate demand, lowering inflation — but may slow growth and increase unemployment. Direct taxes (income tax, corporation tax) are levied on income and profit and are generally progressive (higher earners pay a higher percentage). Indirect taxes (VAT, excise duties) are levied on spending — they are generally regressive (take a higher percentage of income from the poor). Government uses taxation to raise revenue, redistribute income (progressive taxes), and correct market failures (taxes on negative externalities like pollution). Monetary policy involves changes in interest rates (and the money supply) by the central bank. Lower interest rates reduce the cost of borrowing: consumers borrow more to spend; firms borrow more to invest; both increase aggregate demand. Lower rates also reduce the incentive to save. Higher interest rates do the reverse — they reduce consumer spending and business investment, cooling an overheating economy. The main challenge of monetary policy is the time lag between a change in interest rates and its full effect on the economy (up to 18 months).",
          groups: [
            {
              subTitle: "Effects of a cut in interest rates",
              bullets: [
                "**Consumer spending**: Cheaper mortgage repayments leave homeowners with more disposable income. Cheaper personal loans encourage borrowing for consumption of cars, holidays, and electronics.",
                "**Investment**: Firms face lower borrowing costs for capital investment — more projects become profitable. Investment in new machinery, factories, and technology increases.",
                "**Exchange rate effect**: Lower interest rates make the currency less attractive to foreign investors (lower return on deposits). The currency depreciates, making exports cheaper and imports dearer — improving the current account balance.",
                "**Inflation risk**: If the economy is already at or near full capacity, increased spending pushes up prices. Central banks must balance stimulating demand against creating excessive inflation."
              ]
            }
          ],
          recap: [
            "Explain how a reduction in income tax rates might affect consumer spending and economic growth. [4]",
            "Explain the difference between direct and indirect taxes and give one example of each. [3]",
            "A central bank raises interest rates. Explain the likely effects on investment by firms and on the exchange rate. [4]",
            "Explain one conflict that may arise from using expansionary fiscal policy to reduce unemployment. [3]"
          ]
        }
      ]
    }
  ]
};
