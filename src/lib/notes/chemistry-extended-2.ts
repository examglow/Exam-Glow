import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Chemistry (0620) Extended Notes
 * Chapters 8–15: Stoichiometry, The Mole Concept, Electrochemistry, Energetics, Rates, Equilibrium & Redox
 */
export const CHEMISTRY_EXTENDED_PART2: Chapter[] = [
  {
    number: 8,
    title: "Formulae, Equations & Ionic Equations",
    section: "3. Stoichiometry",
    topic: "Balancing, State Symbols & Ionic Equations",
    intro:
      "Chemical equations provide quantitative representations of reactions. At Extended level, students construct ionic equations by omitting spectator ions.",
    subheadings: [
      {
        title: "Constructing Ionic Equations",
        body:
          "**What is an Ionic Equation?**\n" +
          "An ionic equation shows only the chemical species that actually participate and change in the reaction. Ions that remain unchanged on both sides are called **spectator ions** and are omitted.\n\n" +
          "**Step-by-Step Method for Writing Ionic Equations:**\n" +
          "1. Write the full balanced symbol equation with state symbols.\n" +
          "2. Split only the **aqueous ionic compounds** into their constituent ions. (Leave solids, pure liquids, and gases intact).\n" +
          "3. Cancel identical spectator ions from both sides.\n\n" +
          "**Example 1 — Neutralisation:**\n" +
          "Full: $\\text{HCl(aq)} + \\text{NaOH(aq)} \\to \\text{NaCl(aq)} + \\text{H}_2\\text{O(l)}$\n" +
          "Split: $\\text{H}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} + \\text{Na}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\to \\text{Na}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)} + \\text{H}_2\\text{O(l)}$\n" +
          "Cancel $\\text{Na}^+$ and $\\text{Cl}^-$: \n" +
          "$$\\mathbf{\\text{H}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)} \\to \\text{H}_2\\text{O(l)}}$$\n\n" +
          "**Example 2 — Precipitation of Barium Sulfate:**\n" +
          "Full: $\\text{BaCl}_2\\text{(aq)} + \\text{Na}_2\\text{SO}_4\\text{(aq)} \\to \\text{BaSO}_4\\text{(s)} + 2\\text{NaCl(aq)}$\n" +
          "Ionic: $$\\mathbf{\\text{Ba}^{2+}\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} \\to \\text{BaSO}_4\\text{(s)}}$$",
        examinerTips: [
          "Always include state symbols in your final ionic equation.",
          "Never split solids (s), liquids (l), or gases (g) into ions — only aqueous ionic species dissociate.",
        ],
        commonMistakes: [
          "Splitting a precipitate into ions on the product side — precipitates are insoluble solids.",
        ],
        recap: [
          "Write the ionic equation with state symbols for the reaction between zinc and dilute hydrochloric acid.",
        ],
      },
    ],
  },
  {
    number: 9,
    title: "The Mole Concept and Quantitative Chemistry",
    section: "3. Stoichiometry",
    topic: "Moles, Gas Volumes, Concentrations & Yields",
    intro:
      "The mole is the standard unit for amount of substance. This chapter provides full coverage of molar calculations, empirical formulas, percentage yields, and titrations.",
    subheadings: [
      {
        title: "The Mole and Molar Mass",
        body:
          "**Definition:** One **mole (mol)** is the amount of substance containing $6.02 \\times 10^{23}$ particles (atoms, molecules, or ions). This number is the **Avogadro constant ($N_A$)**.\n\n" +
          "**Core Mole Equation:**\n" +
          "$$\\text{Number of moles } (n) = \\frac{\\text{Mass in grams } (m)}{\\text{Molar mass in g/mol } (M)}$$\n\n" +
          "Where molar mass ($M$) equals the relative atomic mass ($A_r$) or formula mass ($M_r$) in $\\text{g/mol}$.\n\n" +
          "**Example:** How many moles of $\\text{CaCO}_3$ ($M_r = 100$) are in $25.0\\,\\text{g}$?\n" +
          "$$n = \\frac{25.0}{100} = 0.25\\,\\text{mol}$$",
        examinerTips: [
          "State units clearly: mass in grams (g), molar mass in g/mol, amount in moles (mol).",
          "Check that $M_r$ is calculated accurately before calculating moles.",
        ],
        commonMistakes: [
          "Using kilograms instead of grams in $n = m / M$.",
        ],
        recap: [
          "Calculate the mass of $0.40\\,\\text{mol}$ of sodium hydroxide ($\\text{NaOH}$, $M_r = 40$).",
        ],
      },
      {
        title: "Molar Gas Volume and Solution Concentrations",
        body:
          "**1. Molar Gas Volume:**\n" +
          "One mole of any gas occupies **$24.0\\,\\text{dm}^3$ (or $24000\\,\\text{cm}^3$)** at room temperature and pressure (r.t.p. = $20°\\text{C}$ and 1 atm).\n\n" +
          "$$\\text{Volume of gas (dm}^3\\text{)} = \\text{Moles } (n) \\times 24$$\n" +
          "$$\\text{Volume of gas (cm}^3\\text{)} = \\text{Moles } (n) \\times 24000$$\n\n" +
          "**Example:** Find the volume occupied by $0.20\\,\\text{mol}$ of carbon dioxide gas at r.t.p.:\n" +
          "$$\\text{Volume} = 0.20 \\times 24 = 4.8\\,\\text{dm}^3 = 4800\\,\\text{cm}^3$$\n\n" +
          "**2. Solution Concentrations:**\n" +
          "$$\\text{Concentration } (c) = \\frac{\\text{Moles } (n)}{\\text{Volume in dm}^3 (V)}$$\n" +
          "$$\\text{Units: mol/dm}^3 \\text{ or g/dm}^3 \\quad (\\text{Conversion: } \\text{g/dm}^3 = \\text{mol/dm}^3 \\times M_r)$$\n" +
          "- To convert $\\text{cm}^3$ to $\\text{dm}^3$: divide by 1000 ($1000\\,\\text{cm}^3 = 1\\,\\text{dm}^3$).",
        examinerTips: [
          "Always check volume units: if given in cm³, divide by 1000 before using $c = n / V$.",
        ],
        commonMistakes: [
          "Forgetting to divide cm³ by 1000 when calculating concentration.",
        ],
        recap: [
          "Calculate the concentration in $\\text{mol/dm}^3$ when $10.6\\,\\text{g}$ of $\\text{Na}_2\\text{CO}_3$ ($M_r = 106$) is dissolved in $250\\,\\text{cm}^3$ of water.",
        ],
      },
      {
        title: "Empirical and Molecular Formulae",
        body:
          "**Definitions:**\n" +
          "- **Empirical formula:** The simplest whole-number ratio of the atoms of each element in a compound.\n" +
          "- **Molecular formula:** The actual number of atoms of each element in a molecule of a compound.\n\n" +
          "**Method to Find Empirical Formula:**\n" +
          "1. Write down masses (or percentages) of each element.\n" +
          "2. Divide each by its relative atomic mass ($A_r$) to find the number of moles.\n" +
          "3. Divide all mole values by the smallest mole value to find the ratio.\n" +
          "4. Round or multiply to get whole numbers.\n\n" +
          "**Example:** A hydrocarbon contains $85.7\\%$ carbon and $14.3\\%$ hydrogen. $M_r = 56$.\n" +
          "- Moles of C: $85.7 / 12 = 7.14$\n" +
          "- Moles of H: $14.3 / 1 = 14.3$\n" +
          "- Ratio: C $= 7.14 / 7.14 = 1$; H $= 14.3 / 7.14 = 2$\n" +
          "- Empirical formula = $\\text{CH}_2$ ($M_r = 14$)\n" +
          "- Multiplier: $56 / 14 = 4$\n" +
          "- Molecular formula = $(\\text{CH}_2)_4 = \\mathbf{\\text{C}_4\\text{H}_8}$ (butene)",
        examinerTips: [
          "If the ratio ends in .5, multiply all numbers by 2; if .33 or .67, multiply by 3.",
        ],
        commonMistakes: [
          "Dividing percentages by the atomic number instead of the relative atomic mass ($A_r$).",
        ],
        recap: [
          "A compound contains $40.0\\%$ C, $6.7\\%$ H, and $53.3\\%$ O by mass. Determine its empirical formula. If $M_r = 60$, deduce its molecular formula.",
        ],
      },
      {
        title: "Percentage Yield and Percentage Purity",
        body:
          "**Percentage Yield:**\n" +
          "$$\\text{Percentage yield} = \\frac{\\text{Actual mass of product formed}}{\\text{Maximum theoretical mass of product}} \\times 100$$\n\n" +
          "Reasons why actual yield is almost always $< 100\\%$:\n" +
          "- Reaction may be incomplete (equilibrium reached).\n" +
          "- Side reactions occur forming unexpected by-products.\n" +
          "- Loss of product during transfer, filtration, or crystallisation.\n\n" +
          "**Percentage Purity:**\n" +
          "$$\\text{Percentage purity} = \\frac{\\text{Mass of pure product in sample}}{\\text{Total mass of impure sample}} \\times 100$$",
        examinerTips: [
          "Calculate theoretical mass first using the mole ratio from the balanced equation.",
        ],
        commonMistakes: [
          "Getting a percentage yield greater than 100% — if your answer is > 100%, check for inverted fraction.",
        ],
        recap: [
          "Heating $20.0\\,\\text{g}$ of $\\text{CaCO}_3$ ($M_r = 100$) produced $8.4\\,\\text{g}$ of $\\text{CaO}$ ($M_r = 56$). Calculate the percentage yield.",
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Electrochemistry & Fuel Cells",
    section: "4. Electrochemistry",
    topic: "Electrode Half-Equations & Hydrogen-Oxygen Fuel Cells",
    intro:
      "Electrochemistry links chemical energy and electrical energy. At Extended level, electrolysis is described using ionic half-equations and the operation of fuel cells.",
    subheadings: [
      {
        title: "Electrode Half-Equations and Industrial Electrolysis",
        body:
          "**Redox at Electrodes:**\n" +
          "- **Anode ($+$):** Negative ions lose electrons $\\to$ **Oxidation** ($2\\text{Cl}^- \\to \\text{Cl}_2 + 2e^-$)\n" +
          "- **Cathode ($-$):** Positive ions gain electrons $\\to$ **Reduction** ($\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$)\n\n" +
          "**Electrolysis of Concentrated Aqueous Sodium Chloride (Brine):**\n" +
          "- Ions present: $\\text{Na}^+, \\text{Cl}^-, \\text{H}^+, \\text{OH}^-$\n" +
          "- At cathode ($-$): $\\text{H}^+$ is discharged rather than $\\text{Na}^+$: $2\\text{H}^+ + 2e^- \\to \\text{H}_2\\text{(g)}$\n" +
          "- At anode ($+$): $\\text{Cl}^-$ is discharged: $2\\text{Cl}^- \\to \\text{Cl}_2\\text{(g)} + 2e^-$\n" +
          "- Remaining in solution: $\\text{Na}^+$ and $\\text{OH}^-$ ions form **aqueous sodium hydroxide ($\\text{NaOH}$)**.\n\n" +
          "**Electrolytic Refining of Copper:**\n" +
          "- Anode ($+$): Impure copper slab dissolves: $\\text{Cu} \\to \\text{Cu}^{2+} + 2e^-$\n" +
          "- Cathode ($-$): Pure copper builds up: $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$\n" +
          "- Electrolyte: aqueous copper(II) sulfate ($\\text{CuSO}_4$).",
        examinerTips: [
          "Remember: Oxidation Is Loss, Reduction Is Gain of electrons (OIL RIG). Oxidation occurs at the Anode (AN OX); Reduction at the Cathode (RED CAT).",
        ],
        commonMistakes: [
          "Showing sodium metal forming in aqueous electrolysis — sodium is too reactive; hydrogen gas forms instead.",
        ],
        recap: [
          "Write the ionic half-equations at the cathode and anode during the electrolysis of concentrated aqueous sodium chloride.",
        ],
      },
      {
        title: "Hydrogen–Oxygen Fuel Cells",
        body:
          "A **fuel cell** is an electrochemical cell that converts the chemical energy of a fuel directly into electrical energy by a continuous chemical reaction with oxygen.\n\n" +
          "**The Hydrogen–Oxygen Fuel Cell:**\n" +
          "- Hydrogen enters at one electrode and oxygen at the other.\n" +
          "- **Overall Chemical Reaction:**\n" +
          "  $$2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\to 2\\text{H}_2\\text{O(l)}$$\n" +
          "- The **only chemical product is water** — zero greenhouse gas or toxic emissions at point of use!\n\n" +
          "**Advantages over Fossil Fuel Engines:**\n" +
          "1. No carbon dioxide or pollutant emissions (e.g. no $\\text{CO}, \\text{SO}_2, \\text{NO}_x$).\n" +
          "2. More energy efficient than internal combustion engines.\n" +
          "3. Silent in operation with no moving parts.\n\n" +
          "**Disadvantages:**\n" +
          "1. Hydrogen is difficult and dangerous to store (highly flammable, requires high-pressure tanks or cryogenics).\n" +
          "2. Most hydrogen is currently produced from fossil fuels (methane reforming), releasing $\\text{CO}_2$ during manufacture.",
        examinerTips: [
          "The overall reaction in a hydrogen fuel cell is simply the combustion of hydrogen: 2H₂ + O₂ → 2H₂O.",
          "State clearly that water is the ONLY product.",
        ],
        commonMistakes: [
          "Claiming hydrogen fuel cells produce zero emissions overall — hydrogen production often produces CO₂.",
        ],
        recap: [
          "Write the overall equation for a hydrogen-oxygen fuel cell.",
          "State two advantages and one disadvantage of using fuel cells in vehicles compared to petrol engines.",
        ],
      },
    ],
  },
  {
    number: 11,
    title: "Chemical Energetics & Bond Energy Calculations",
    section: "5. Chemical energetics",
    topic: "Energy Profiles, Activation Energy & Calculating ΔH",
    intro:
      "Chemical energy changes can be calculated quantitatively using average bond energies. Reaction progress is visualized using reaction pathway diagrams.",
    subheadings: [
      {
        title: "Reaction Pathway Diagrams and Activation Energy",
        body:
          "**Activation Energy ($E_a$):** The minimum energy colliding particles must possess in order to react.\n\n" +
          "**Enthalpy Change ($\\Delta H$):** The difference between the energy of the products and the energy of the reactants.\n\n" +
          "**Exothermic Profile ($\\Delta H < 0$):**\n" +
          "- Reactants have **more chemical energy** than products.\n" +
          "- Energy is released to surroundings.\n" +
          "- The arrow for $\\Delta H$ points **downwards** from reactant level to product level.\n\n" +
          "**Endothermic Profile ($\\Delta H > 0$):**\n" +
          "- Products have **more chemical energy** than reactants.\n" +
          "- Energy is absorbed from surroundings.\n" +
          "- The arrow for $\\Delta H$ points **upwards** from reactant level to product level.\n\n" +
          "**Activation energy arrow ($E_a$):** Always drawn from the **reactant energy level up to the peak** of the curve.",
        examinerTips: [
          "Activation energy arrow ALWAYS points UPWARDS from the reactants to the peak of the curve.",
          "Delta H arrow goes from reactant level directly to product level (downward for exothermic, upward for endothermic).",
        ],
        commonMistakes: [
          "Drawing the activation energy arrow from the bottom of the graph instead of from the reactant line.",
        ],
        recap: [
          "Sketch and label an energy profile diagram for an exothermic reaction, showing reactants, products, $\\Delta H$, and $E_a$.",
        ],
      },
      {
        title: "Bond Energy Calculations",
        body:
          "**Bond Energy:** The amount of energy required to break one mole of a specific covalent bond.\n\n" +
          "$$\\Delta H = \\sum (\\text{Energy required to break bonds}) - \\sum (\\text{Energy released making bonds})$$\n" +
          "$$\\mathbf{\\Delta H = \\text{Bonds Broken (in)} - \\text{Bonds Made (out)}}$$\n\n" +
          "**Worked Example:** Combustion of methane: $\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O}$\n" +
          "- Given bond energies: $\\text{C}-\\text{H} = 412$, $\\text{O}=\\text{O} = 496$, $\\text{C}=\\text{O} = 805$, $\\text{O}-\\text{H} = 463\\,\\text{kJ/mol}$.\n" +
          "- **Bonds Broken (Reactants):**\n" +
          "  $4 \\times (\\text{C}-\\text{H}) = 4 \\times 412 = 1648$\n" +
          "  $2 \\times (\\text{O}=\\text{O}) = 2 \\times 496 = 992$\n" +
          "  Total broken $= 1648 + 992 = +2640\\,\\text{kJ}$\n" +
          "- **Bonds Formed (Products):**\n" +
          "  $2 \\times (\\text{C}=\\text{O}) = 2 \\times 805 = 1610$\n" +
          "  $4 \\times (\\text{O}-\\text{H}) = 4 \\times 463 = 1852$\n" +
          "  Total formed $= 1610 + 1852 = +3462\\,\\text{kJ}$\n" +
          "- **$\\Delta H$:**\n" +
          "  $$\\Delta H = 2640 - 3462 = \\mathbf{-822\\,\\text{kJ/mol}}$$\n" +
          "  Negative sign confirms the reaction is **exothermic**.",
        examinerTips: [
          "Always draw out the structural formulas to count every single bond carefully (e.g. 2 H₂O molecules contain 4 O-H bonds).",
          "Ensure your final answer has the correct sign: negative for exothermic, positive for endothermic.",
        ],
        commonMistakes: [
          "Subtracting bonds broken from bonds made instead of broken minus made.",
          "Missing the coefficient multiplier (e.g. forgetting that 2 O₂ means two O=O double bonds).",
        ],
        recap: [
          "Calculate $\\Delta H$ for: $\\text{H}_2 + \\text{Cl}_2 \\to 2\\text{HCl}$ using: $\\text{H}-\\text{H} = 436$, $\\text{Cl}-\\text{Cl} = 242$, $\\text{H}-\\text{Cl} = 431\\,\\text{kJ/mol}$.",
        ],
      },
    ],
  },
  {
    number: 12,
    title: "Collision Theory & Reaction Rates",
    section: "6. Chemical reactions",
    topic: "Collision Frequency, Activation Energy & Catalysis",
    intro:
      "Collision theory explains reaction rates on a molecular scale. For a reaction to occur, particles must collide with sufficient energy and correct orientation.",
    subheadings: [
      {
        title: "Collision Theory and Factors Affecting Rates",
        body:
          "**Collision Theory:**\n" +
          "For a reaction to occur between reacting particles:\n" +
          "1. Particles must **collide** with each other.\n" +
          "2. Particles must collide with energy **greater than or equal to the activation energy ($E_a$)** (a successful / fruitful collision).\n\n" +
          "**Detailed Explanations of Rate Factors:**\n" +
          "1. **Concentration / Pressure:**\n" +
          "   - More particles per unit volume.\n" +
          "   - Particles are closer together $\\to$ **frequency of collisions increases** (more collisions per second).\n" +
          "2. **Surface Area:**\n" +
          "   - Smaller solid pieces have a larger surface area to volume ratio.\n" +
          "   - More reactant particles exposed $\\to$ **frequency of collisions increases**.\n" +
          "3. **Temperature:**\n" +
          "   - Particles gain thermal kinetic energy and move faster (minor factor: slightly higher collision frequency).\n" +
          "   - **Major factor:** A much greater proportion of colliding particles possess energy $\\geq E_a$, so a **significantly higher percentage of collisions are successful**.\n" +
          "4. **Catalysts:**\n" +
          "   - Provides an alternative reaction pathway with a **lower activation energy ($E_a$)**.\n" +
          "   - More colliding particles possess energy $\\geq$ the new, lower $E_a$, vastly increasing the rate of successful collisions.",
        examinerTips: [
          "For temperature, the key phrase is: 'a greater fraction of particles have energy equal to or greater than the activation energy'.",
          "Always mention collision FREQUENCY (rate of collisions), not just collision number.",
        ],
        commonMistakes: [
          "Claiming catalysts give energy to particles — catalysts lower the activation energy barrier; they do not supply energy.",
        ],
        recap: [
          "Use collision theory to explain why a $10°\\text{C}$ temperature rise can double the rate of a chemical reaction.",
          "Describe how a catalyst alters the activation energy of a reaction.",
        ],
      },
    ],
  },
  {
    number: 13,
    title: "Equilibrium & Industrial Processes",
    section: "6. Chemical reactions",
    topic: "Le Chatelier's Principle, Haber & Contact Processes",
    intro:
      "In a closed system, reversible reactions reach dynamic equilibrium. Le Chatelier's principle predicts how changing conditions shifts the equilibrium position.",
    subheadings: [
      {
        title: "Dynamic Equilibrium and Le Chatelier's Principle",
        body:
          "**Dynamic Equilibrium:**\n" +
          "In a closed system, a reversible reaction reaches dynamic equilibrium when:\n" +
          "1. The **rate of the forward reaction equals the rate of the reverse reaction**.\n" +
          "2. The **concentrations of reactants and products remain constant**.\n\n" +
          "**Le Chatelier's Principle:**\n" +
          "If a system at equilibrium is subjected to a change in conditions, the position of equilibrium moves in the direction that opposes that change.\n\n" +
          "**Effects of Changing Conditions:**\n" +
          "- **Temperature:**\n" +
          "  - Increasing temperature favours the **endothermic** direction (absorbs heat).\n" +
          "  - Decreasing temperature favours the **exothermic** direction.\n" +
          "- **Pressure (gases only):**\n" +
          "  - Increasing pressure shifts equilibrium towards the side with **fewer moles of gas**.\n" +
          "  - Decreasing pressure shifts towards the side with **more moles of gas**.\n" +
          "- **Concentration:**\n" +
          "  - Increasing reactant concentration shifts equilibrium to the right (makes more product).\n" +
          "- **Catalyst:**\n" +
          "  - Speeds up forward and reverse reactions equally; does **NOT** alter equilibrium position or yield, but equilibrium is reached faster.",
        examinerTips: [
          "Always state which side has fewer gas moles when justifying pressure effects.",
          "State clearly: catalysts increase rate but do NOT change the equilibrium yield.",
        ],
        commonMistakes: [
          "Saying reactions stop at dynamic equilibrium — both forward and backward reactions continue at equal rates.",
        ],
        recap: [
          "For $2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)}$ ($\\Delta H = -197\\,\\text{kJ/mol}$), predict the effect of increasing temperature and increasing pressure on the yield of $\\text{SO}_3$.",
        ],
      },
      {
        title: "Industrial Conditions: Haber and Contact Processes",
        body:
          "**1. The Haber Process (Manufacture of Ammonia):**\n" +
          "$$\\text{N}_2\\text{(g)} + 3\\text{H}_2\\text{(g)} \\rightleftharpoons 2\\text{NH}_3\\text{(g)} \\quad (\\Delta H = -92\\,\\text{kJ/mol})$$\n" +
          "- Raw materials: Nitrogen from air; Hydrogen from methane/natural gas.\n" +
          "- **Conditions:**\n" +
          "  - Temperature: **$450°\\text{C}$** (compromise: lower temp gives higher yield because forward is exothermic, but rate would be too slow).\n" +
          "  - Pressure: **$200\\text{ atm}$** (high pressure favours forward reaction: 4 moles gas $\\to$ 2 moles gas).\n" +
          "  - Catalyst: **Finely divided iron** (speeds up rate without affecting yield).\n\n" +
          "**2. The Contact Process (Manufacture of Sulfuric Acid):**\n" +
          "Key stage: $2\\text{SO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightleftharpoons 2\\text{SO}_3\\text{(g)} \\quad (\\Delta H = -197\\,\\text{kJ/mol})$\n" +
          "- **Conditions:**\n" +
          "  - Temperature: **$450°\\text{C}$**\n" +
          "  - Pressure: **$2\\text{ atm}$** (yield is already $98\\%$ at 2 atm, higher pressure unnecessary)\n" +
          "  - Catalyst: **Vanadium(V) oxide ($\\text{V}_2\\text{O}_5$)**",
        examinerTips: [
          "Explain 'compromise temperature': low enough for an acceptable yield, high enough for an economical rate.",
        ],
        commonMistakes: [
          "Saying very high pressure is used in the Contact process — only 2 atm is used because the yield is already near 100%.",
        ],
        recap: [
          "State the temperature, pressure, and catalyst used in the Haber process.",
          "Explain why $450°\\text{C}$ is described as a compromise temperature in the Haber process.",
        ],
      },
    ],
  },
  {
    number: 14,
    title: "Redox: Electron Transfer & Oxidation Numbers",
    section: "6. Chemical reactions",
    topic: "OIL RIG & Oxidation State Rules",
    intro:
      "At Extended level, redox is defined in terms of electron transfer and changes in oxidation states, providing a universal method for identifying redox processes.",
    subheadings: [
      {
        title: "Electron Transfer (OIL RIG) and Oxidation Numbers",
        body:
          "**Definitions in Terms of Electrons:**\n" +
          "- **Oxidation:** **Loss of electrons**.\n" +
          "- **Reduction:** **Gain of electrons**.\n" +
          "- Mnemonic: **OIL RIG** — **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain.\n\n" +
          "**Oxidation Numbers (States):**\n" +
          "A number assigned to an element representing the number of electrons lost or gained:\n" +
          "- Uncombined elements have oxidation number = **0** (e.g. $\\text{Fe}, \\text{O}_2, \\text{Cl}_2$).\n" +
          "- Simple monoatomic ions: charge on ion (e.g. $\\text{Na}^+ = +1, \\text{Mg}^{2+} = +2, \\text{Cl}^- = -1, \\text{O}^{2-} = -2$).\n" +
          "- In compounds, sum of oxidation states = **0**.\n" +
          "- In polyatomic ions, sum of oxidation states = charge on ion.\n\n" +
          "**Identifying Redox:**\n" +
          "- **Oxidation:** An **increase** in oxidation number.\n" +
          "- **Reduction:** A **decrease** in oxidation number.\n\n" +
          "**Example:** $\\text{Zn} + \\text{CuSO}_4 \\to \\text{ZnSO}_4 + \\text{Cu}$\n" +
          "- $\\text{Zn}$ changes from $0 \\to +2$ (oxidised, lost $2e^-$).\n" +
          "- $\\text{Cu}^{2+}$ changes from $+2 \\to 0$ (reduced, gained $2e^-$).",
        examinerTips: [
          "Oxidation number must always have a sign (+ or -) followed by the number: e.g. +2, not 2+.",
        ],
        commonMistakes: [
          "Confusing charge format (2+) with oxidation state format (+2).",
        ],
        recap: [
          "Deduce the oxidation number of sulfur in: (a) $\\text{SO}_2$, (b) $\\text{SO}_4^{2-}$.",
          "Explain using electron transfer why the reaction $\\text{Mg} + 2\\text{H}^+ \\to \\text{Mg}^{2+} + \\text{H}_2$ is a redox reaction.",
        ],
      },
    ],
  },
  {
    number: 15,
    title: "Electrolytic Refining & Quantitative Cell Processes",
    section: "4. Electrochemistry",
    topic: "Copper Purification & Industrial Electrolysis",
    intro:
      "Industrial electrolytic processes provide ultra-pure metals and essential commodity chemicals like chlorine and sodium hydroxide.",
    subheadings: [
      {
        title: "Copper Refining and Industrial Chlor-Alkali",
        body:
          "**Purification of Copper:**\n" +
          "- **Anode ($+$):** Impure blister copper.\n" +
          "- **Cathode ($-$):** Pure thin sheet of copper.\n" +
          "- **Electrolyte:** Aqueous copper(II) sulfate ($\\text{CuSO}_4$).\n" +
          "- **Process:**\n" +
          "  - At anode: Copper atoms lose electrons and dissolve: $\\text{Cu(s)} \\to \\text{Cu}^{2+}\\text{(aq)} + 2e^-$.\n" +
          "  - Impurities such as gold, silver, and platinum fall to the bottom as 'anode sludge'.\n" +
          "  - At cathode: Copper ions gain electrons and deposit: $\\text{Cu}^{2+}\\text{(aq)} + 2e^- \\to \\text{Cu(s)}$.\n" +
          "  - Over time, anode decreases in mass, cathode increases in mass, electrolyte concentration stays constant.",
        examinerTips: [
          "The blue colour of the electrolyte does NOT fade because copper dissolves from the anode at the exact same rate it deposits on the cathode.",
        ],
        commonMistakes: [
          "Thinking copper deposits at the anode — reduction always happens at the cathode.",
        ],
        recap: [
          "Describe what happens to the mass of the anode and cathode during the electrolytic refining of copper.",
        ],
      },
    ],
  },
];
