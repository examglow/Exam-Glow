import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Chemistry (0620) Core Notes
 * Chapters 8–14: Stoichiometry, Electrochemistry, Energetics, Reactions, Rates & Redox
 */
export const CHEMISTRY_CORE_PART2: Chapter[] = [
  {
    number: 8,
    title: "Chemical Formulae and Equations",
    section: "3. Stoichiometry",
    topic: "Formulae & Balancing Chemical Equations",
    intro:
      "Chemical formulae represent the types and numbers of atoms in a substance. Chemical equations show reactants transforming into products, obeying the conservation of mass.",
    subheadings: [
      {
        title: "Formulae and Word Equations",
        body:
          "**Chemical Formulae:**\n" +
          "- Elements: $\\text{Fe}$, $\\text{Cu}$, $\\text{He}$; diatomic elements: $\\text{H}_2, \\text{N}_2, \\text{O}_2, \\text{F}_2, \\text{Cl}_2, \\text{Br}_2, \\text{I}_2$.\n" +
          "- Molecular compounds: $\\text{H}_2\\text{O}, \\text{CO}_2, \\text{NH}_3, \\text{CH}_4$.\n\n" +
          "**Deducing Formulae of Ionic Compounds:**\n" +
          "Total positive charge must balance total negative charge:\n" +
          "- Sodium chloride: $\\text{Na}^+$ and $\\text{Cl}^- \\to \\text{NaCl}$\n" +
          "- Magnesium chloride: $\\text{Mg}^{2+}$ and $\\text{Cl}^- \\to \\text{MgCl}_2$\n" +
          "- Aluminium oxide: $\\text{Al}^{3+}$ and $\\text{O}^{2-} \\to \\text{Al}_2\\text{O}_3$\n" +
          "- Calcium hydroxide: $\\text{Ca}^{2+}$ and $\\text{OH}^- \\to \\text{Ca(OH)}_2$\n\n" +
          "**Word Equations:**\n" +
          "$$\\text{Reactants} \\to \\text{Products}$$\n" +
          "Example: $\\text{magnesium} + \\text{hydrochloric acid} \\to \\text{magnesium chloride} + \\text{hydrogen}$",
        examinerTips: [
          "Remember the diatomic 7: Hydrogen, Nitrogen, Oxygen, Fluorine, Chlorine, Bromine, Iodine.",
          "Use brackets when polyatomic ions have a subscript $> 1$: $\\text{Ca(OH)}_2$, not $\\text{CaOH}_2$.",
        ],
        commonMistakes: [
          "Writing oxygen as O instead of O₂ in equations.",
          "Changing the subscripts in a chemical formula to balance an equation — only change the big balancing numbers in front.",
        ],
        recap: [
          "Deduce the chemical formula for: (a) calcium chloride, (b) aluminium sulfate.",
          "Write a word equation for the reaction between sodium and water.",
        ],
      },
      {
        title: "Balancing Symbol Equations & State Symbols",
        body:
          "**Law of Conservation of Mass:** Mass cannot be created or destroyed in a chemical reaction. The number of atoms of each element must be the same on both sides of a balanced equation.\n\n" +
          "**Balancing Example:**\n" +
          "Unbalanced: $\\text{CH}_4 + \\text{O}_2 \\to \\text{CO}_2 + \\text{H}_2\\text{O}$\n" +
          "- C: 1 on left, 1 on right (balanced)\n" +
          "- H: 4 on left, 2 on right $\\to$ put 2 in front of $\\text{H}_2\\text{O}$\n" +
          "- O: 2 on left, $2 + 2 = 4$ on right $\\to$ put 2 in front of $\\text{O}_2$\n" +
          "Balanced: $\\text{CH}_4 + 2\\text{O}_2 \\to \\text{CO}_2 + 2\\text{H}_2\\text{O}$\n\n" +
          "**State Symbols:**\n" +
          "- $(\\text{s})$ = solid\n" +
          "- $(\\text{l})$ = pure liquid (e.g. water, molten salts)\n" +
          "- $(\\text{g})$ = gas\n" +
          "- $(\\text{aq})$ = aqueous (dissolved in water)",
        examinerTips: [
          "Always include state symbols when an exam question states 'include state symbols'.",
          "Water is $(\\text{l})$ at room temperature and $(\\text{g})$ as steam in combustion.",
        ],
        commonMistakes: [
          "Confusing $(\\text{l})$ and $(\\text{aq})$ — an aqueous solution is dissolved in water, $(\\text{l})$ is a pure liquid.",
        ],
        recap: [
          "Balance the equation: $\\text{Fe} + \\text{O}_2 \\to \\text{Fe}_2\\text{O}_3$.",
          "Add state symbols to: $\\text{CaCO}_3\\dots + 2\\text{HCl}\\dots \\to \\text{CaCl}_2\\dots + \\text{H}_2\\text{O}\\dots + \\text{CO}_2\\dots$",
        ],
      },
    ],
  },
  {
    number: 9,
    title: "Relative Masses and Reacting Masses",
    section: "3. Stoichiometry",
    topic: "Ar, Mr and Reacting Masses",
    intro:
      "Because atoms are too small to weigh directly, chemistry uses relative atomic and molecular masses scaled against the carbon-12 standard.",
    subheadings: [
      {
        title: "Relative Atomic Mass and Relative Molecular Mass",
        body:
          "**Relative Atomic Mass ($A_r$):** The average mass of naturally occurring atoms of an element on a scale where the carbon-12 ($^{12}\\text{C}$) atom has a mass of exactly 12 units.\n\n" +
          "**Relative Molecular Mass / Formula Mass ($M_r$):** The sum of the relative atomic masses of all the atoms shown in the chemical formula.\n\n" +
          "**Calculating $M_r$ Examples:**\n" +
          "- $\\text{H}_2\\text{O}$: $(2 \\times 1) + 16 = 18$\n" +
          "- $\\text{CO}_2$: $12 + (2 \\times 16) = 44$\n" +
          "- $\\text{CaCO}_3$: $40 + 12 + (3 \\times 16) = 100$\n" +
          "- $\\text{Mg(OH)}_2$: $24 + 2 \\times (16 + 1) = 24 + 34 = 58$\n\n" +
          "**Simple Reacting Mass Calculations:**\n" +
          "Calculate mass of product formed from a given mass of reactant using ratios of $M_r$ values.",
        examinerTips: [
          "$A_r$ values are given on the Periodic Table at the back of the exam paper — use the values provided.",
          "$A_r$ and $M_r$ have no units because they are relative values.",
        ],
        commonMistakes: [
          "Multiplying by the balancing number inside the $M_r$ calculation — calculate $M_r$ of the formula first.",
          "Forgetting brackets when calculating formula mass for $\\text{Ca(OH)}_2$ or $(\\text{NH}_4)_2\\text{SO}_4$.",
        ],
        recap: [
          "Calculate the relative formula mass of: (a) $\\text{H}_2\\text{SO}_4$, (b) $\\text{Al}_2\\text{O}_3$ ($A_r$: $\\text{Al}=27, \\text{O}=16, \\text{H}=1, \\text{S}=32$).",
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Electrolysis",
    section: "4. Electrochemistry",
    topic: "Principles of Electrolysis & Applications",
    intro:
      "Electrolysis is the breakdown of an ionic compound, when molten or in aqueous solution, by the passage of an electric current.",
    subheadings: [
      {
        title: "Principles of Electrolysis",
        body:
          "**Key Terminology:**\n" +
          "- **Electrolyte:** An ionic compound in molten or aqueous state that conducts electricity and is decomposed in the process.\n" +
          "- **Electrodes:** Conducting rods that carry electricity into and out of the electrolyte. Usually inert (carbon / graphite or platinum).\n" +
          "- **Anode:** Positive electrode ($+$). Attracts negative ions (anions).\n" +
          "- **Cathode:** Negative electrode ($-$). Attracts positive ions (cations).\n\n" +
          "**Mnemonic:** PANIC — **P**ositive **A**node, **N**egative **I**s **C**athode.\n\n" +
          "**Electrolysis of Molten Lead(II) Bromide ($\\text{PbBr}_2$):**\n" +
          "- At cathode ($-$): Lead ions $\\text{Pb}^{2+}$ gain electrons to form silvery molten lead metal: $\\text{Pb}^{2+} + 2e^- \\to \\text{Pb}$\n" +
          "- At anode ($+$): Bromide ions $\\text{Br}^-$ lose electrons to form brown bromine gas / vapour: $2\\text{Br}^- \\to \\text{Br}_2 + 2e^-$\n\n" +
          "**Electrolysis of Aqueous Solutions:**\n" +
          "Water dissociates into $\\text{H}^+$ and $\\text{OH}^-$ ions. At the cathode, hydrogen is produced unless the metal is less reactive than hydrogen (e.g. copper). At the anode, oxygen is produced unless halide ions ($\\text{Cl}^-, \\text{Br}^-, \\text{I}^-$) are present in high concentration.",
        examinerTips: [
          "Metals or hydrogen gas ALWAYS form at the cathode (negative electrode).",
          "Non-metals (except hydrogen) ALWAYS form at the anode (positive electrode).",
        ],
        commonMistakes: [
          "Mixing up anode and cathode polarities — remember PANIC: Positive Anode, Negative Is Cathode.",
          "Thinking solid salts can undergo electrolysis — ions must be mobile in molten or aqueous state.",
        ],
        recap: [
          "State the products formed at the cathode and anode during the electrolysis of molten lead(II) bromide.",
          "Explain why solid lead(II) bromide cannot be electrolysed.",
        ],
      },
      {
        title: "Electroplating",
        body:
          "**Electroplating** is the process of coating the surface of one metal with a thin layer of another metal using electrolysis.\n\n" +
          "**Apparatus Setup:**\n" +
          "- **Cathode ($-$):** The object to be plated (e.g. a steel spoon, iron car part).\n" +
          "- **Anode ($+$):** The pure plating metal (e.g. silver or copper).\n" +
          "- **Electrolyte:** A soluble salt solution of the plating metal (e.g. silver nitrate for silver plating, copper(II) sulfate for copper plating).\n\n" +
          "**Reasons for Electroplating:**\n" +
          "1. **Corrosion resistance / protection:** Prevents the underlying metal from rusting or tarnishing (e.g. chromium on steel taps).\n" +
          "2. **Improved appearance / aesthetics:** Makes items look attractive and shiny (e.g. silver plating on cutlery or nickel on jewellery).",
        examinerTips: [
          "The object to be plated is ALWAYS made the negative cathode.",
          "The electrolyte must contain ions of the plating metal.",
        ],
        commonMistakes: [
          "Connecting the object to the positive anode instead of the negative cathode.",
          "Choosing an electrolyte that doesn't contain the plating metal ions.",
        ],
        recap: [
          "Describe how a steel spoon can be electroplated with copper.",
          "State two commercial reasons for electroplating.",
        ],
      },
    ],
  },
  {
    number: 11,
    title: "Chemical Energetics",
    section: "5. Chemical energetics",
    topic: "Exothermic & Endothermic Reactions",
    intro:
      "All chemical reactions involve energy changes. Energy is transferred between the chemical system and the surrounding environment.",
    subheadings: [
      {
        title: "Exothermic and Endothermic Reactions",
        body:
          "**Exothermic Reactions:**\n" +
          "- Reactions that **release thermal energy** to the surroundings.\n" +
          "- The temperature of the surroundings **increases**.\n" +
          "- Enthalpy change ($\\Delta H$) is **negative** ($\\Delta H < 0$).\n" +
          "- Examples: combustion of fuels, neutralisation of acid and alkali, respiration, reaction of metals with acids.\n\n" +
          "**Endothermic Reactions:**\n" +
          "- Reactions that **absorb thermal energy** from the surroundings.\n" +
          "- The temperature of the surroundings **decreases**.\n" +
          "- Enthalpy change ($\\Delta H$) is **positive** ($\\Delta H > 0$).\n" +
          "- Examples: thermal decomposition of limestone ($\\text{CaCO}_3 \\to \\text{CaO} + \\text{CO}_2$), photosynthesis, dissolving ammonium chloride in water.\n\n" +
          "**Bond Energy Concept:**\n" +
          "- **Bond breaking** is **endothermic** (requires energy input to pull atoms apart).\n" +
          "- **Bond forming** is **exothermic** (releases energy as new bonds stabilize).",
        examinerTips: [
          "A reaction is exothermic if more energy is released forming new bonds than is needed to break old bonds.",
          "Remember: 'MEXO BENDO' — Making bonds is EXOthermic, Breaking bonds is ENDOthermic.",
        ],
        commonMistakes: [
          "Thinking a reaction that cools down is exothermic — cooling down means it absorbs heat from surroundings (endothermic).",
        ],
        recap: [
          "State whether the reaction between hydrochloric acid and sodium hydroxide is exothermic or endothermic.",
          "Explain in terms of bond breaking and bond making why combustion is an exothermic reaction.",
        ],
      },
    ],
  },
  {
    number: 12,
    title: "Rate of Reaction",
    section: "6. Chemical reactions",
    topic: "Measuring & Factors Affecting Reaction Rates",
    intro:
      "The rate of a chemical reaction is the speed at which reactants are consumed or products are formed over time.",
    subheadings: [
      {
        title: "Measuring Rates & Factors Affecting Reaction Rate",
        body:
          "**Definition:** Rate of reaction is the change in concentration of reactants or products per unit time.\n\n" +
          "**Methods of Measuring Rates:**\n" +
          "- Measuring volume of gas evolved over time using a gas syringe or inverted measuring cylinder.\n" +
          "- Measuring loss in mass over time as gas escapes on an electronic balance.\n" +
          "- Measuring time taken for a cross to disappear under a flask due to a precipitate forming (e.g. sodium thiosulfate with acid).\n\n" +
          "**Factors that Increase the Rate of Reaction:**\n" +
          "1. **Increasing concentration (solutions):** More particles per unit volume $\\to$ collisions are more frequent.\n" +
          "2. **Increasing pressure (gases):** Gas particles are pushed closer together $\\to$ more collisions per unit time.\n" +
          "3. **Increasing surface area (solids):** Breaking a solid into small pieces/powder exposes more particles to collisions $\\to$ increased collision rate.\n" +
          "4. **Increasing temperature:** Particles have more kinetic energy, move faster, and collide more frequently with energy greater than the activation energy.\n" +
          "5. **Adding a catalyst:** Speeds up the reaction without being used up by providing an alternative pathway with a lower activation energy.",
        examinerTips: [
          "Always specify 'more frequent collisions' or 'more collisions per second', not just 'more collisions'.",
          "A catalyst is chemically unchanged at the end of the reaction.",
        ],
        commonMistakes: [
          "Saying 'surface area decreases' when powdering a solid — powdering vastly **increases** surface area.",
          "Stating temperature only makes particles move faster — the main reason is that a greater fraction of particles have energy $\\geq$ activation energy.",
        ],
        recap: [
          "State two ways of measuring the rate of reaction between calcium carbonate and hydrochloric acid.",
          "Explain why powdered zinc reacts faster with sulfuric acid than a zinc strip of the same mass.",
        ],
      },
    ],
  },
  {
    number: 13,
    title: "Reversible Reactions and Equilibrium",
    section: "6. Chemical reactions",
    topic: "Reversibility & Chemical Equilibrium",
    intro:
      "Some reactions can proceed in both forward and reverse directions depending on conditions. In a closed system, they reach dynamic equilibrium.",
    subheadings: [
      {
        title: "Reversible Reactions",
        body:
          "A **reversible reaction** is one where the products can react together to reform the original reactants.\n\n" +
          "Represented by the symbol $\\rightleftharpoons$.\n\n" +
          "**Key Cambridge Examples:**\n" +
          "1. **Hydrated Copper(II) Sulfate:**\n" +
          "$$\\text{CuSO}_4\\cdot 5\\text{H}_2\\text{O} \\text{ (blue solid)} \\rightleftharpoons \\text{CuSO}_4 \\text{ (white solid)} + 5\\text{H}_2\\text{O}$$\n" +
          "- Heating blue copper(II) sulfate drives off water of crystallisation to leave white anhydrous copper(II) sulfate (endothermic forward reaction).\n" +
          "- Adding water back to anhydrous copper(II) sulfate turns it blue again and gives off heat (exothermic reverse reaction).\n\n" +
          "2. **Cobalt(II) Chloride:**\n" +
          "$$\\text{CoCl}_2\\cdot 6\\text{H}_2\\text{O} \\text{ (pink solid)} \\rightleftharpoons \\text{CoCl}_2 \\text{ (blue solid)} + 6\\text{H}_2\\text{O}$$\n" +
          "- Used in cobalt chloride paper to test for the presence of water (turns from blue to pink).",
        examinerTips: [
          "The color change of anhydrous copper(II) sulfate (white to blue) is a standard chemical test for water.",
          "If the forward reaction is endothermic, the reverse reaction must be exothermic by the same amount of energy.",
        ],
        commonMistakes: [
          "Confusing the colors: anhydrous copper sulfate is white; hydrated is blue.",
        ],
        recap: [
          "Write the equation for the reversible hydration of anhydrous copper(II) sulfate.",
          "Describe how cobalt(II) chloride paper can test for the presence of water.",
        ],
      },
    ],
  },
  {
    number: 14,
    title: "Redox Reactions",
    section: "6. Chemical reactions",
    topic: "Oxidation, Reduction & Identifying Redox",
    intro:
      "Redox reactions involve simultaneous reduction and oxidation. At Core level, this is understood in terms of oxygen gain or loss.",
    subheadings: [
      {
        title: "Oxidation and Reduction (Oxygen Transfer)",
        body:
          "**Oxidation** is the **gain of oxygen** by a substance.\n" +
          "**Reduction** is the **loss of oxygen** from a substance.\n\n" +
          "Both reactions occur together, called a **redox reaction**.\n\n" +
          "**Example:** Reaction of copper(II) oxide with hydrogen:\n" +
          "$$\\text{CuO} + \\text{H}_2 \\to \\text{Cu} + \\text{H}_2\\text{O}$$\n" +
          "- $\\text{CuO}$ loses oxygen $\\to$ reduced to $\\text{Cu}$.\n" +
          "- $\\text{H}_2$ gains oxygen $\\to$ oxidised to $\\text{H}_2\\text{O}$.\n\n" +
          "**Agents:**\n" +
          "- **Oxidising agent:** A substance that oxidises another substance and is itself reduced (gives away oxygen, e.g. $\\text{CuO}$, acidified $\\text{KMnO}_4$).\n" +
          "- **Reducing agent:** A substance that reduces another substance and is itself oxidised (takes away oxygen, e.g. $\\text{H}_2$, $\\text{CO}$, $\\text{C}$, aqueous $\\text{KI}$).",
        examinerTips: [
          "The reducing agent is the substance that gets oxidised; the oxidising agent is the substance that gets reduced.",
          "Acidified potassium manganate(VII) is an oxidising agent that turns from purple to colourless when reduced.",
        ],
        commonMistakes: [
          "Mixing up oxidising and reducing agents — identify which reactant loses or gains oxygen first.",
        ],
        recap: [
          "In the reaction $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\to 2\\text{Fe} + 3\\text{CO}_2$, identify the substance oxidised and the reducing agent.",
        ],
      },
    ],
  },
];
