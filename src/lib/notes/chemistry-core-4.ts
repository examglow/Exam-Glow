import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Chemistry (0620) Core Notes
 * Chapters 21–27: Environment, Organic Chemistry & Experimental Analysis
 */
export const CHEMISTRY_CORE_PART4: Chapter[] = [
  {
    number: 21,
    title: "Water and Air Quality",
    section: "10. Chemistry of the environment",
    topic: "Water Treatment, Fertilisers & Air Pollutants",
    intro:
      "Clean water and clean air are essential for life. Chemical analysis and engineering ensure potable water supply and monitor atmospheric pollutants.",
    subheadings: [
      {
        title: "Water and Chemical Tests for Water",
        body:
          "**Chemical Tests for the Presence of Water:**\n" +
          "1. **Anhydrous Cobalt(II) Chloride:** Turns from **blue to pink** when water is added:\n" +
          "   $$\\text{CoCl}_2 \\text{ (blue)} + 6\\text{H}_2\\text{O} \\to \\text{CoCl}_2\\cdot 6\\text{H}_2\\text{O} \\text{ (pink)}$$\n" +
          "2. **Anhydrous Copper(II) Sulfate:** Turns from **white to blue** when water is added:\n" +
          "   $$\\text{CuSO}_4 \\text{ (white)} + 5\\text{H}_2\\text{O} \\to \\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O} \\text{ (blue)}$$\n\n" +
          "**Testing for Purity:** A pure substance has a sharp, fixed melting and boiling point. Pure water melts at exactly $0°\\text{C}$ and boils at $100°\\text{C}$ at 1 atm.\n\n" +
          "**Treatment of Domestic Water Supply:**\n" +
          "1. **Screening & Sedimentation:** Coarse objects removed; smaller particles settle out.\n" +
          "2. **Filtration:** Water passed through beds of gravel and sand to remove insoluble suspended solids.\n" +
          "3. **Chlorination:** Chlorine gas is added to kill harmful bacteria and microbes.",
        examinerTips: [
          "Chemical tests (cobalt chloride / copper sulfate) only prove that water is present; they do NOT prove water is pure.",
          "To prove water is pure, verify that it boils at exactly 100 °C.",
        ],
        commonMistakes: [
          "Claiming cobalt chloride turns blue with water — it turns from blue to **pink**.",
        ],
        recap: [
          "Describe a chemical test to show that a liquid contains water.",
          "Explain why chlorine is added to domestic water supplies.",
        ],
      },
      {
        title: "Air Quality and Pollutants",
        body:
          "**Composition of Clean, Dry Air:**\n" +
          "- Approximately **78% Nitrogen** ($\\text{N}_2$)\n" +
          "- Approximately **21% Oxygen** ($\\text{O}_2$)\n" +
          "- Remainder: Argon ($~0.93\\%$), carbon dioxide ($~0.04\\%$), and traces of other noble gases.\n\n" +
          "**Common Air Pollutants, Sources and Adverse Effects:**\n" +
          "1. **Carbon monoxide (CO):**\n" +
          "   - Source: Incomplete combustion of carbon-containing fuels.\n" +
          "   - Effect: Toxic gas; binds irreversibly with haemoglobin in blood, reducing oxygen delivery.\n" +
          "2. **Sulfur dioxide ($\\text{SO}_2$):**\n" +
          "   - Source: Combustion of fossil fuels containing sulfur impurities.\n" +
          "   - Effect: Dissolves in rainwater to form acid rain, which damages limestone buildings, acidifies lakes, and harms forests.\n" +
          "3. **Oxides of nitrogen ($\\text{NO}_x$):**\n" +
          "   - Source: Reaction of nitrogen and oxygen at high temperatures in car engines.\n" +
          "   - Effect: Causes respiratory problems and contributes to acid rain and photochemical smog.\n" +
          "4. **Particulates (unburnt carbon / soot):**\n" +
          "   - Source: Incomplete combustion of hydrocarbons (diesel engines).\n" +
          "   - Effect: Respiratory illness, covers buildings with soot.\n" +
          "5. **Methane ($\\text{CH}_4$) and Carbon dioxide ($\\text{CO}_2$):**\n" +
          "   - Greenhouse gases that trap heat in the atmosphere, leading to global warming and climate change.",
        examinerTips: [
          "Nitrogen oxides are formed inside car engines because the high temperature and pressure allow normally unreactive N₂ to react with O₂.",
          "Carbon monoxide is poisonous because it binds with haemoglobin in red blood cells.",
        ],
        commonMistakes: [
          "Stating carbon dioxide causes acid rain — sulfur dioxide and nitrogen oxides are the primary causes of acid rain.",
        ],
        recap: [
          "State the percentage of nitrogen and oxygen in clean, dry air.",
          "Name two air pollutants that contribute to acid rain and state their sources.",
        ],
      },
    ],
  },
  {
    number: 22,
    title: "Organic Fuels and Fractional Distillation",
    section: "11. Organic chemistry",
    topic: "Petroleum Fractions & Combustion of Fuels",
    intro:
      "Petroleum (crude oil) is a mixture of hydrocarbons that is separated by fractional distillation into useful fractions.",
    subheadings: [
      {
        title: "Petroleum and Fractional Distillation",
        body:
          "**Petroleum (Crude Oil):** A complex mixture of hydrocarbons (compounds containing carbon and hydrogen only).\n\n" +
          "**Fractional Distillation of Petroleum:**\n" +
          "Separates crude oil based on **differences in boiling points**:\n" +
          "1. Crude oil is heated and vaporised before entering the bottom of the fractionating column.\n" +
          "2. The column is hot at the bottom and cooler at the top.\n" +
          "3. Vapours rise up; fractions with high boiling points condense near the bottom, while fractions with low boiling points condense near the top.\n\n" +
          "**Fractions and Their Uses (from top to bottom):**\n" +
          "- **Refinery gas:** Bottled gas for heating and cooking (C₁–C₄).\n" +
          "- **Gasoline / Petrol:** Fuel for cars (C₅–C₁₀).\n" +
          "- **Naphtha:** Feedstock for making chemicals and plastics.\n" +
          "- **Kerosene (Paraffin):** Fuel for jet aircraft engines, heating.\n" +
          "- **Diesel oil (Gas oil):** Fuel for diesel engines (trucks, trains, buses).\n" +
          "- **Fuel oil:** Fuel for ships and power stations.\n" +
          "- **Bitumen:** Surfacing roads and roofing.",
        examinerTips: [
          "As you go down the fractionating column: chain length increases, boiling point increases, viscosity increases, flammability decreases.",
          "Petroleum fractions are mixtures of alkanes, not single pure compounds.",
        ],
        commonMistakes: [
          "Saying hydrocarbons contain oxygen — hydrocarbons contain hydrogen and carbon **only**.",
        ],
        recap: [
          "Name the property used to separate crude oil into fractions.",
          "List three petroleum fractions and state one use for each.",
        ],
      },
      {
        title: "Combustion of Hydrocarbon Fuels",
        body:
          "**Complete Combustion:**\n" +
          "- Occurs in a plentiful supply of oxygen.\n" +
          "- Products: **carbon dioxide and water**.\n" +
          "$$\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O} \\quad (\\Delta H < 0)$$\n\n" +
          "**Incomplete Combustion:**\n" +
          "- Occurs in a limited supply of oxygen.\n" +
          "- Products: **carbon monoxide (CO)**, unburnt **carbon (soot)**, and water.\n" +
          "$$2\\text{CH}_4 + 3\\text{O}_2 \\to 2\\text{CO} + 4\\text{H}_2\\text{O}$$\n" +
          "$$\\text{CH}_4 + \\text{O}_2 \\to \\text{C} + 2\\text{H}_2\\text{O}$$",
        examinerTips: [
          "Complete combustion yields carbon dioxide; incomplete combustion yields toxic carbon monoxide or black soot.",
        ],
        commonMistakes: [
          "Forgetting that water is produced in both complete and incomplete combustion.",
        ],
        recap: [
          "Write a balanced equation for the complete combustion of propane ($\\text{C}_3\\text{H}_8$).",
          "Explain why incomplete combustion of fuels in gas heaters is hazardous.",
        ],
      },
    ],
  },
  {
    number: 23,
    title: "Alkanes and Alkenes",
    section: "11. Organic chemistry",
    topic: "Saturated vs Unsaturated Hydrocarbons",
    intro:
      "Alkanes are saturated hydrocarbons containing single bonds only. Alkenes are unsaturated hydrocarbons containing a carbon-carbon double bond.",
    subheadings: [
      {
        title: "Alkanes",
        body:
          "**Alkanes:** Saturated hydrocarbons with the general formula:\n$$\\text{C}_n\\text{H}_{2n+2}$$\n\n" +
          "**First 4 Alkanes:**\n" +
          "- Methane: $\\text{CH}_4$\n" +
          "- Ethane: $\\text{C}_2\\text{H}_6$\n" +
          "- Propane: $\\text{C}_3\\text{H}_8$\n" +
          "- Butane: $\\text{C}_4\\text{H}_{10}$\n\n" +
          "**Key Features:**\n" +
          "- **Saturated:** All carbon-carbon bonds are single covalent bonds ($\\text{C}-\\text{C}$).\n" +
          "- **Generally unreactive:** Chemically inert except for combustion and substitution by chlorine.",
        examinerTips: [
          "Learn the prefixes: Meth- (1), Eth- (2), Prop- (3), But- (4).",
          "Saturated means contains only single carbon-carbon bonds.",
        ],
        commonMistakes: [
          "Drawing five bonds to carbon — carbon always forms exactly 4 covalent bonds.",
        ],
        recap: [
          "State the general formula for alkanes and draw the displayed formula of propane.",
        ],
      },
      {
        title: "Alkenes and Cracking",
        body:
          "**Alkenes:** Unsaturated hydrocarbons with the general formula:\n$$\\text{C}_n\\text{H}_{2n}$$\n\n" +
          "- Ethene: $\\text{C}_2\\text{H}_4$ ($\\text{CH}_2=\\text{CH}_2$)\n" +
          "- Propene: $\\text{C}_3\\text{H}_6$\n" +
          "- Butene: $\\text{C}_4\\text{H}_8$\n\n" +
          "**Cracking:** Thermal decomposition of long-chain alkanes into shorter, more useful alkanes and alkenes:\n" +
          "- Catalyst: aluminium oxide (alumina) or silica.\n" +
          "- Temperature: high temperature ($~500–600°\\text{C}$).\n" +
          "- Example: $\\text{C}_{10}\\text{H}_{22} \\to \\text{C}_8\\text{H}_{18} + \\text{C}_2\\text{H}_4$\n\n" +
          "**Chemical Test for Unsaturation (Alkenes vs Alkanes):**\n" +
          "- Add **aqueous bromine (bromine water)**.\n" +
          "- Alkene: turns from **orange-brown to colourless** (decolourises rapidly) via addition reaction.\n" +
          "- Alkane: remains orange-brown.",
        examinerTips: [
          "State the colour change of bromine water clearly: 'orange to colourless' (never 'clear').",
          "Cracking produces shorter alkanes for petrol and alkenes for making plastics/polymers.",
        ],
        commonMistakes: [
          "Saying 'turns clear' — clear means transparent; the correct chemical term is 'colourless'.",
        ],
        recap: [
          "Describe a chemical test to distinguish between ethane and ethene.",
          "State the conditions required for catalytic cracking.",
        ],
      },
    ],
  },
  {
    number: 24,
    title: "Alcohols and Carboxylic Acids",
    section: "11. Organic chemistry",
    topic: "Ethanol & Ethanoic Acid",
    intro:
      "Alcohols contain the -OH functional group; carboxylic acids contain the -COOH group. Ethanol and ethanoic acid are primary examples.",
    subheadings: [
      {
        title: "Ethanol and Manufacture of Alcohols",
        body:
          "**Ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$):** Member of the alcohol homologous series containing the **hydroxyl group ($\\text{-OH}$)**.\n\n" +
          "**Manufacture of Ethanol:**\n" +
          "1. **Fermentation of aqueous glucose:**\n" +
          "   $$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{\\text{yeast, } 25–35°\\text{C}} 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$$\n" +
          "   - Anaerobic conditions (absence of oxygen, otherwise ethanoic acid forms).\n" +
          "   - Yeast enzymes act as biological catalyst.\n" +
          "2. **Catalytic Hydration of Ethene:**\n" +
          "   $$\\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O(g)} \\to \\text{C}_2\\text{H}_5\\text{OH}$$\n" +
          "   - Catalyst: phosphoric acid ($\\text{H}_3\\text{PO}_4$).\n" +
          "   - Conditions: $300°\\text{C}$, 60 atm pressure.\n\n" +
          "**Uses of Ethanol:** Solvent, clean-burning fuel, alcoholic beverages.",
        examinerTips: [
          "Fermentation uses renewable resources (sugar cane) but produces dilute ethanol in batches; hydration is continuous and produces pure ethanol from non-renewable crude oil.",
        ],
        commonMistakes: [
          "Allowing oxygen into the fermentation vessel — oxygen turns ethanol into ethanoic acid (vinegar).",
        ],
        recap: [
          "Write the word and symbol equation for the fermentation of glucose.",
          "State two commercial uses of ethanol.",
        ],
      },
      {
        title: "Ethanoic Acid (Carboxylic Acids)",
        body:
          "**Carboxylic Acids:** Contain the carboxyl group ($\\text{-COOH}$).\n" +
          "- Methanoic acid: $\\text{HCOOH}$\n" +
          "- Ethanoic acid: $\\text{CH}_3\\text{COOH}$ (main constituent of vinegar)\n\n" +
          "**Properties and Reactions of Ethanoic Acid:**\n" +
          "- Weak acid: partially dissociates in aqueous solution.\n" +
          "- Reacts with metals: $\\text{metal} + \\text{ethanoic acid} \\to \\text{metal ethanoate} + \\text{hydrogen}$\n" +
          "- Reacts with bases: neutralises alkalis to form ethanoate salt and water.\n" +
          "- Reacts with carbonates: produces carbon dioxide gas (fizzing).",
        examinerTips: [
          "Salts of ethanoic acid are called ethanoates (e.g. sodium ethanoate, CH₃COONa).",
        ],
        commonMistakes: [
          "Thinking ethanoic acid is a strong acid — it is a typical weak acid.",
        ],
        recap: [
          "Draw the displayed formula of ethanoic acid.",
          "Name the gas evolved when ethanoic acid reacts with magnesium carbonate.",
        ],
      },
    ],
  },
  {
    number: 25,
    title: "Polymers and Plastics",
    section: "11. Organic chemistry",
    topic: "Addition Polymers & Environmental Impact",
    intro:
      "Polymers are macromolecules built from small repeating units called monomers. Addition polymers form plastics widely used in daily life.",
    subheadings: [
      {
        title: "Addition Polymerisation",
        body:
          "**Polymer:** A large molecule (macromolecule) built up from many small repeating units called **monomers**.\n\n" +
          "**Addition Polymerisation:** Monomers containing a double bond (alkenes) join together without forming any other molecule.\n\n" +
          "**Formation of Poly(ethene):**\n" +
          "- Monomer: ethene ($\\text{CH}_2=\\text{CH}_2$)\n" +
          "- High pressure and a catalyst break the double bond to allow monomer molecules to link together into a long saturated carbon chain.\n" +
          "$$n \\, \\text{CH}_2=\\text{CH}_2 \\to -[\\text{CH}_2-\\text{CH}_2]_n-$$",
        examinerTips: [
          "In the repeat unit of poly(ethene), make sure the bonds extend outside the brackets and there is NO double bond inside.",
        ],
        commonMistakes: [
          "Leaving the double bond inside the polymer repeat unit — the double bond breaks open during addition polymerisation.",
        ],
        recap: [
          "Define the terms monomer and polymer.",
          "Draw the repeat unit for poly(ethene).",
        ],
      },
      {
        title: "Plastics and Environmental Challenges",
        body:
          "Plastics are synthetic polymers that are lightweight, durable, cheap, and easily molded.\n\n" +
          "**Environmental Challenges of Plastics:**\n" +
          "1. **Non-biodegradable:** Most plastics are not broken down by microorganisms and persist in the environment for hundreds of years.\n" +
          "2. **Landfill accumulation:** Plastic waste takes up valuable landfill space.\n" +
          "3. **Marine pollution:** Plastic debris in oceans harms marine wildlife through entanglement and ingestion of microplastics.\n" +
          "4. **Toxic fumes when burned:** Incineration of plastics can release toxic gases (e.g. hydrogen chloride from PVC) and carbon dioxide (greenhouse gas).\n\n" +
          "**Solutions:** Recycling, development of biodegradable polymers, reducing single-use plastics.",
        examinerTips: [
          "State 'non-biodegradable' when explaining why plastics cause disposal problems in landfill sites.",
        ],
        commonMistakes: [
          "Saying plastics decompose easily — they are specifically non-biodegradable.",
        ],
        recap: [
          "State two environmental issues associated with the disposal of plastics.",
        ],
      },
    ],
  },
  {
    number: 26,
    title: "Experimental Design, Separation and Purification",
    section: "12. Experimental techniques and chemical analysis",
    topic: "Apparatus, Separation Methods & Purity",
    intro:
      "Accurate laboratory measurements and chemical separation techniques are essential for isolating pure substances and chemical analysis.",
    subheadings: [
      {
        title: "Laboratory Apparatus and Measurements",
        body:
          "**Measuring Physical Quantities:**\n" +
          "- **Time:** Digital stopwatch (seconds).\n" +
          "- **Temperature:** Liquid-in-glass thermometer or temperature probe (°C).\n" +
          "- **Mass:** Electronic balance (grams, to 2 d.p.).\n" +
          "- **Volume of Liquids:**\n" +
          "  - Measuring cylinder: approximate volumes ($~10–100\\,\\text{cm}^3$).\n" +
          "  - Volumetric pipette: accurately delivers one specific volume (e.g. exactly $25.0\\,\\text{cm}^3$).\n" +
          "  - Burette: accurately delivers variable volumes ($0.00–50.00\\,\\text{cm}^3$, reading to $0.05\\,\\text{cm}^3$).\n" +
          "- **Volume of Gases:** Gas syringe or inverted measuring cylinder filled with water.",
        examinerTips: [
          "For titrations, use a pipette to measure the fixed volume into the flask, and a burette to deliver the variable volume.",
        ],
        commonMistakes: [
          "Using a beaker or measuring cylinder for precise titration measurements — burettes and pipettes are far more accurate.",
        ],
        recap: [
          "Name the most suitable piece of apparatus to measure exactly $25.0\\,\\text{cm}^3$ of acid.",
        ],
      },
      {
        title: "Separation and Purification Techniques",
        body:
          "**1. Filtration:** Separates an **insoluble solid** from a liquid (e.g. sand from water).\n" +
          "**2. Crystallisation:** Separates a **soluble solid** from its solution (heat to saturation, then cool).\n" +
          "**3. Simple Distillation:** Separates a **liquid from a solution** of a soluble solid (e.g. pure water from salt water).\n" +
          "**4. Fractional Distillation:** Separates **miscible liquids** with different boiling points (e.g. ethanol and water, crude oil).\n" +
          "**5. Paper Chromatography:** Separates mixtures of soluble substances (e.g. food dyes, ink):\n" +
          "- Baseline drawn in **pencil** (pencil is insoluble and will not dissolve in the solvent).\n" +
          "- Solvent level must be **below the pencil line** so spots do not wash off into solvent.",
        examinerTips: [
          "Always draw the starting line in pencil, never ink, so it does not run with the solvent.",
        ],
        commonMistakes: [
          "Putting the solvent line above the pencil baseline in chromatography.",
        ],
        recap: [
          "Name the method used to separate pure water from seawater.",
          "Explain why the baseline in paper chromatography must be drawn in pencil.",
        ],
      },
    ],
  },
  {
    number: 27,
    title: "Identification of Ions and Gases",
    section: "12. Experimental techniques and chemical analysis",
    topic: "Flame Tests, Cations, Anions & Gases",
    intro:
      "Chemical qualitative analysis uses characteristic precipitation, flame colours, and gas tests to identify unknown compounds.",
    subheadings: [
      {
        title: "Flame Tests and Cations",
        body:
          "**Flame Tests for Metal Ions:**\n" +
          "- **Lithium ($\\text{Li}^+$):** Red\n" +
          "- **Sodium ($\\text{Na}^+$):** Yellow\n" +
          "- **Potassium ($\\text{K}^+$):** Lilac\n" +
          "- **Calcium ($\\text{Ca}^{2+}$):** Orange-red\n" +
          "- **Copper(II) ($\\text{Cu}^{2+}$):** Blue-green\n\n" +
          "**Tests for Aqueous Cations (using aqueous $\\text{NaOH}$):**\n" +
          "- **Aluminium ($\\text{Al}^{3+}$):** White precipitate, dissolves in excess $\\text{NaOH}$ to form colourless solution.\n" +
          "- **Calcium ($\\text{Ca}^{2+}$):** White precipitate, does **not** dissolve in excess.\n" +
          "- **Copper(II) ($\\text{Cu}^{2+}$):** Light blue precipitate, insoluble in excess.\n" +
          "- **Iron(II) ($\\text{Fe}^{2+}$):** Green precipitate, insoluble in excess.\n" +
          "- **Iron(III) ($\\text{Fe}^{3+}$):** Red-brown precipitate, insoluble in excess.\n" +
          "- **Ammonium ($\\text{NH}_4^+$):** No precipitate; warming produces ammonia gas that turns damp red litmus paper blue.",
        examinerTips: [
          "To distinguish aluminium from calcium ions, add excess NaOH: aluminium precipitate dissolves, calcium does not.",
          "Copper(II) forms a light blue precipitate with NaOH.",
        ],
        commonMistakes: [
          "Confusing iron(II) (green) with iron(III) (red-brown) precipitates.",
        ],
        recap: [
          "State the flame test colour for: (a) sodium, (b) potassium, (c) copper(II).",
          "Describe how to test for the ammonium ion in solution.",
        ],
      },
      {
        title: "Tests for Anions and Gases",
        body:
          "**Tests for Aqueous Anions:**\n" +
          "1. **Carbonate ($\\text{CO}_3^{2-}$):** Add dilute nitric acid $\\to$ effervescence, gas produced turns limewater milky.\n" +
          "2. **Chloride ($\\text{Cl}^-$):** Acidify with dilute nitric acid, add aqueous silver nitrate $\\to$ **white precipitate**.\n" +
          "3. **Bromide ($\\text{Br}^-$):** Acidify with dilute nitric acid, add aqueous silver nitrate $\\to$ **cream precipitate**.\n" +
          "4. **Iodide ($\\text{I}^-$):** Acidify with dilute nitric acid, add aqueous silver nitrate $\\to$ **yellow precipitate**.\n" +
          "5. **Sulfate ($\\text{SO}_4^{2-}$):** Acidify with dilute nitric acid, add aqueous barium nitrate $\\to$ **white precipitate**.\n\n" +
          "**Tests for Gases:**\n" +
          "- **Ammonia ($\\text{NH}_3$):** Pungent smell; turns damp red litmus paper **blue**.\n" +
          "- **Carbon dioxide ($\\text{CO}_2$):** Turns limewater milky / cloudy.\n" +
          "- **Chlorine ($\\text{Cl}_2$):** Bleaches damp litmus paper white.\n" +
          "- **Hydrogen ($\\text{H}_2$):** Holds lighted splint $\\to$ squeaky pop sound.\n" +
          "- **Oxygen ($\\text{O}_2$):** Relights a glowing splint.",
        examinerTips: [
          "Always acidify with dilute nitric acid before adding silver nitrate or barium nitrate to remove any carbonate ions that would give a false precipitate.",
          "Oxygen RELIGHTS a glowing splint; hydrogen POPS with a lighted splint.",
        ],
        commonMistakes: [
          "Acidifying with hydrochloric acid when testing for chloride — that would add chloride ions and give a false positive!",
          "Using dry litmus paper for ammonia or chlorine — paper must be damp.",
        ],
        recap: [
          "Describe the test for: (a) chloride ions, (b) sulfate ions.",
          "State the test and result for: (a) hydrogen gas, (b) chlorine gas.",
        ],
      },
    ],
  },
];
