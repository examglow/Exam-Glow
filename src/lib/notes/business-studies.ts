import type { SubjectNotes } from "./types";

export const BUSINESS_STUDIES: SubjectNotes = {
  id: "business-studies",
  name: "Business Studies",
  code: "0450",
  color: "bg-yellow-500",
  chapters: [
    {
      number: 1,
      title: "Business Activity",
      intro: "Business activity exists to satisfy human needs and wants by producing goods and providing services. Understanding what businesses do, why they exist, and how they are structured and owned is the starting point for all business analysis. The Cambridge IGCSE syllabus covers the nature of business activity, how businesses are classified and organised, and the objectives that guide business decision-making at every level.",
      subheadings: [
        {
          title: "The Purpose of Business Activity",
          body: "A business is any organisation that uses resources (inputs) to produce goods or services (outputs) with the aim of satisfying customer needs and, in most cases, generating a profit. Resources — land, labour, capital, and enterprise — are scarce, so every business must make decisions about how to use them efficiently. Businesses add value by transforming inputs into outputs worth more than the cost of those inputs. Value added = output value - input costs. For example, a bakery buys flour, yeast, and water for £0.20 and sells a loaf of bread for £1.50 — value added is £1.30. This added value is what pays wages, covers overheads, and generates profit. Businesses can add value through: quality improvement, branding (which allows premium pricing), design and innovation, superior customer service, and convenience. Production of goods is the physical manufacture of tangible items; provision of services creates intangible value for customers (haircut, education, insurance). Industries are classified into three sectors: primary (extraction of natural resources — farming, mining, fishing); secondary (manufacturing and construction — transforming raw materials into finished goods); tertiary (services — retail, finance, education, health). In developed economies, the tertiary sector dominates employment and GDP.",
          groups: [
            {
              subTitle: "Sectors of industry — examples and trends",
              bullets: [
                "**Primary sector**: Agriculture, fishing, mining, forestry, oil extraction. Dominant in less economically developed countries (LEDCs). Output fluctuates with weather and commodity prices. Employs a declining proportion of workers in developed countries.",
                "**Secondary sector**: Car manufacturing, food processing, construction, steel making, textiles. The process of industrialisation shifts workers from primary to secondary. In mature economies, this sector shrinks relative to services (deindustrialisation).",
                "**Tertiary sector**: Banking, retail, tourism, healthcare, education, entertainment, transport. Grows as incomes rise — people spend proportionally more on services. Now accounts for over 75% of GDP in the UK and USA.",
                "**Quaternary sector** (sometimes added): Knowledge-based activities — research and development (R&D), information technology, consulting. Increasingly important in knowledge economies."
              ]
            }
          ],
          recap: [
            "Explain the term value added and give a worked example for a manufacturing business. [3]",
            "Distinguish between the primary, secondary, and tertiary sectors of industry. Give one example of a business in each sector. [4]",
            "Explain why the tertiary sector tends to grow as an economy develops. [3]",
            "State two ways in which a restaurant might add value to the food it serves. [2]"
          ]
        },
        {
          title: "Business Objectives and Stakeholders",
          body: "Business objectives are the specific goals that a business sets out to achieve. Objectives provide direction for all business decisions, allow performance to be measured, and motivate employees by providing clear targets. The most common objectives are: profit maximisation (most common for private sector businesses — higher profits provide returns for owners and resources for investment); survival (essential in the short term, particularly for new businesses or those facing recession); growth (measured by increased revenue, market share, output, or workforce size — larger businesses enjoy economies of scale and greater market power); market share (the percentage of total market sales that a business accounts for — high market share indicates competitiveness); corporate social responsibility (CSR — acting ethically toward employees, communities, and the environment). Stakeholders are individuals or groups who have an interest in the activities of a business and are affected by its decisions. Internal stakeholders include employees, managers, and owners/shareholders. External stakeholders include customers, suppliers, the government, local communities, and creditors. Different stakeholders have different and often conflicting interests: shareholders want high dividends and share price appreciation; employees want job security, fair wages, and good working conditions; customers want high quality at low prices; the government wants tax revenues and compliance with law; the local community wants minimal environmental impact and local employment.",
          groups: [
            {
              subTitle: "Stakeholder conflicts and trade-offs",
              bullets: [
                "**Shareholders vs employees**: Shareholders want cost cuts (including wage reductions) to maximise profit; employees want higher wages and job security. Management must balance these competing interests.",
                "**Customers vs shareholders**: Customers want low prices; shareholders want high profit margins. Cutting prices to attract customers reduces profit per unit, affecting returns to shareholders.",
                "**Business vs community/environment**: A factory maximising profit may pollute a local river, harming the community and environment. CSR policies, government regulation, and consumer pressure push businesses to balance profit with wider responsibilities.",
                "**Short-term vs long-term objectives**: Maximising short-term profit (e.g. cutting R&D spending) may undermine long-term growth and survival. Managing this trade-off is a central challenge for business leaders."
              ]
            }
          ],
          recap: [
            "Explain the difference between a business objective of profit maximisation and one of survival. [4]",
            "Identify three stakeholders of a large supermarket chain and explain one interest each stakeholder has in the business. [6]",
            "Explain how the interests of shareholders and employees might conflict in a manufacturing business. [4]",
            "Why might a new business prioritise survival over profit maximisation as its main objective? [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Marketing",
      intro: "Marketing is the management process responsible for identifying, anticipating, and satisfying customer needs profitably. Effective marketing involves understanding what customers want (market research), developing products to meet those needs (product development), pricing appropriately, distributing products through the right channels, and communicating with customers (promotion). The marketing mix — Product, Price, Place, Promotion (the 4Ps) — provides a framework for coordinating all these elements into a coherent strategy.",
      subheadings: [
        {
          title: "Market Research",
          body: "Market research is the systematic gathering, recording, and analysis of data about customers, competitors, and the market environment. Its purpose is to reduce the risk of business decisions by replacing assumptions with evidence. Primary research (field research) collects new data directly from the target market: surveys/questionnaires, interviews, focus groups, observations, and experiments. It is specific to the business's exact questions and current, but it is expensive and time-consuming to collect. Secondary research (desk research) uses data already collected by others: government statistics, trade publications, competitor annual reports, industry databases, published academic research, and internet sources. It is cheaper and faster but may be outdated, not specific enough, or of unknown reliability. Quantitative research produces numerical data that can be analysed statistically — important for measuring market size, customer numbers, and price sensitivity. Qualitative research explores attitudes, motivations, and opinions in depth — important for understanding why customers behave as they do. A representative sample is critical for valid results: the sample must reflect the characteristics of the target population. Quota sampling selects proportional numbers from different segments; random sampling gives every member of the population an equal chance of selection.",
          groups: [
            {
              subTitle: "Primary vs secondary research comparison",
              bullets: [
                "**Primary research advantages**: Exactly tailored to the business's specific questions. Current data (collected now). Confidential — competitors cannot easily access it. Can gather qualitative insights into customer attitudes.",
                "**Primary research disadvantages**: Expensive (paying researchers, printing questionnaires). Time-consuming to design, collect, and analyse. Risk of biased questions skewing results. Small samples may not be representative.",
                "**Secondary research advantages**: Much cheaper — much data is free (government statistics, internet). Quick to access. May provide data the business could not collect itself (e.g. total market size). Historical trends visible.",
                "**Secondary research disadvantages**: May be outdated. Not tailored to specific questions — relevant data may not be available. Reliability may be uncertain. Available to competitors as well."
              ]
            }
          ],
          recap: [
            "Explain the difference between primary and secondary market research and give one example of each. [4]",
            "A new restaurant wants to find out if local customers would use a delivery service. Suggest an appropriate method of primary research and explain how it should be designed to produce reliable results. [5]",
            "State two limitations of using questionnaires as a method of primary research. [2]",
            "Explain why market research is important for a business launching a new product. [3]"
          ]
        },
        {
          title: "The Marketing Mix: Price and Promotion",
          body: "Pricing is one of the most important marketing decisions because it directly determines revenue (price × quantity sold) and profit. Pricing strategies must consider costs (the price must exceed average cost for the business to make profit in the long run), competition (prices relative to rivals affect market share), demand (price elasticity determines how much quantity responds to price changes), and product positioning (premium pricing signals high quality; penetration pricing builds market share quickly). Cost-plus pricing sets price by adding a fixed percentage markup to unit cost — simple and ensures profitability but ignores market conditions. Penetration pricing sets a low initial price to gain market share quickly, then may raise prices once established — risky if the business cannot sustain low margins. Skimming involves setting a high initial price for an innovative or premium product to maximise revenue from early adopters before competitors enter — used for technology products. Competitive pricing sets price at or near rivals' prices. Promotion refers to all communication activities that inform, persuade, or remind customers about a product. Above-the-line promotion uses mass media (TV, radio, newspapers, billboards) to reach a broad audience — expensive but high reach. Below-the-line promotion targets specific audiences with personal communications (direct mail, social media, loyalty schemes, sales promotions, exhibitions) — more targeted and measurable. The choice of promotional method depends on the target audience, product type, budget, and marketing objectives.",
          groups: [
            {
              subTitle: "Choosing the right pricing strategy",
              bullets: [
                "**Cost-plus pricing**: Price = unit cost + % markup. Example: unit cost £4, 50% markup: price = £6. Simple to apply. Guarantees cost coverage but may price too high or too low relative to market. Ignores elasticity.",
                "**Penetration pricing**: Start low (even below cost) to build market share rapidly. Used by streaming services (Netflix) and supermarket own-brands entering new markets. Once customers are loyal, prices rise. Risk: financial losses in early period.",
                "**Price skimming**: New iPhone launches at premium price — early adopters pay more. As competition increases and novelty fades, price drops to reach broader market. Works only with strong brand and truly innovative product.",
                "**Competitive pricing**: Petrol stations price at prevailing market rate. Supermarkets use price matching guarantees. Common in oligopolistic markets where a price war would hurt all firms."
              ]
            }
          ],
          recap: [
            "Explain the difference between penetration pricing and price skimming, giving a suitable example of when each would be used. [4]",
            "A business sells a product with a unit cost of £15 and applies a 40% markup. Calculate the selling price. [2]",
            "Explain the difference between above-the-line and below-the-line promotion and give one example of each. [4]",
            "Suggest and justify an appropriate pricing strategy for a new luxury brand of chocolate entering the market. [4]"
          ]
        }
      ]
    }
  ]
};
