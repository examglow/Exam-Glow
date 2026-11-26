import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Chemistry (0620) Extended Notes
 * Chapters 16–21: Acids & Bases, Oxides & Salt Preparation, Periodic Trends, Metals & Extraction
 */
export const CHEMISTRY_EXTENDED_PART3: Chapter[] = [
  {
    number: 16,
    title: "Acids, Bases & Proton Transfer",
    section: "7. Acids, bases and salts",
    topic: "Brønsted-Lowry Theory, Strong vs Weak Acids & Bases",
    intro:
      "At Extended level, acid-base chemistry is defined by proton transfer. Students must distinguish between strong and weak acids/bases in terms of degree of dissociation and explain their relative pH and reaction rates.",
    subheadings: [
      {
        title: "The Brønsted-Lowry Definition & Proton Transfer",
        body:
          "**Brønsted-Lowry Definitions:**\n" +
          "- An **acid** is a **proton ($\\text{H}^+$) donor**.\n" +
          "- A **base** is a **proton ($\\text{H}^+$) acceptor**.\n\n" +
          "**Proton Transfer in Aqueous Solution:**\n" +
          "- When gaseous hydrogen chloride dissolves in water, it donates a proton to a water molecule:\n" +
          "  $$\\text{HCl(g)} + \\text{H}_2\\text{O(l)} \\to \\text{H}_3\\text{O}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$$\n" +
          "  Here $\\text{HCl}$ acts as a Brønsted-Lowry acid (donates $\\text{H}^+$) and $\\text{H}_2\\text{O}$ acts as a Brønsted-Lowry base (accepts $\\text{H}^+$).\n\n" +
          "- When ammonia dissolves in water, it accepts a proton from water:\n" +
          "  $$\\text{NH}_3\\text{(aq)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{NH}_4^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$$\n" +
          "  Here $\\text{NH}_3$ acts as a base and $\\text{H}_2\\text{O}$ acts as an acid (water is amphiprotic).",
        examinerTips: [
          "State clearly: 'an acid is a proton donor' and 'a base is a proton acceptor'. Do not simply say 'contains hydrogen'.",
          "Identify the proton donor and acceptor in given equations by tracking where the H+ ion moves.",
        ],
        commonMistakes: [
          "Confusing proton transfer with electron transfer — acids donate protons (H+), not electrons.",
        ],
        recap: [
          "Define an acid and a base according to the Brønsted-Lowry theory.",
          "Identify the proton donor and proton acceptor in the reaction between NH3 and HCl.",
        ],
      },
      {
        title: "Strong vs Weak Acids and Bases",
        body:
          "**Strong Acids:**\n" +
          "- **Completely ionise / dissociate** in aqueous solution.\n" +
          "- Examples: Hydrochloric acid ($\\text{HCl}$), nitric acid ($\\text{HNO}_3$), sulfuric acid ($\\text{H}_2\\text{SO}_4$).\n" +
          "- Equation: $\\text{HCl(aq)} \\to \\text{H}^+\\text{(aq)} + \\text{Cl}^-\\text{(aq)}$ (single forward arrow: $100\\%$ ionisation).\n\n" +
          "**Weak Acids:**\n" +
          "- **Only partially ionise / dissociate** in aqueous solution, forming an equilibrium mixture.\n" +
          "- Examples: Ethanoic acid ($\\text{CH}_3\\text{COOH}$), citric acid, carbonic acid ($\\text{H}_2\\text{CO}_3$).\n" +
          "- Equation: $\\text{CH}_3\\text{COOH(aq)} \\rightleftharpoons \\text{CH}_3\\text{COO}^-\\text{(aq)} + \\text{H}^+\\text{(aq)}$ (reversible arrow, typically $< 1\\%$ dissociated).\n\n" +
          "**Strong vs Weak Bases / Alkalis:**\n" +
          "- **Strong alkali:** Completely dissociates in water into $\\text{OH}^-$ ions (e.g. $\\text{NaOH(aq)} \\to \\text{Na}^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$).\n" +
          "- **Weak alkali:** Partially ionises in water (e.g. $\\text{NH}_3\\text{(aq)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{NH}_4^+\\text{(aq)} + \\text{OH}^-\\text{(aq)}$).\n\n" +
          "**Comparing Strong and Weak Acids of the Same Concentration (e.g. $0.1\\text{ mol/dm}^3$):**\n" +
          "| Property | $0.1\\text{ mol/dm}^3\\text{ HCl}$ (Strong) | $0.1\\text{ mol/dm}^3\\text{ CH}_3\\text{COOH}$ (Weak) |\n" +
          "|---|---|---|\n" +
          "| $[\\text{H}^+]$ concentration | High ($0.1\\text{ mol/dm}^3$) | Low ($\approx 0.0013\\text{ mol/dm}^3$) |\n" +
          "| pH value | Lower (pH $\\approx 1$) | Higher (pH $\\approx 3$) |\n" +
          "| Electrical conductivity | High (many free ions) | Low (fewer free ions) |\n" +
          "| Rate of reaction with $\\text{Mg}$ / $\\text{CaCO}_3$ | Fast (vigorous effervescence) | Slower (steady effervescence) |",
        examinerTips: [
          "Never confuse 'strong' with 'concentrated'. 'Strong' refers to the degree of ionisation; 'concentrated' refers to the number of moles dissolved per dm³.",
          "A concentrated weak acid has many moles per dm³ but is only partially dissociated.",
        ],
        commonMistakes: [
          "Writing a single arrow for weak acid dissociation — always use the reversible equilibrium symbol ⇌.",
        ],
        recap: [
          "Distinguish between a strong acid and a weak acid in terms of ionisation.",
          "Explain why 0.1 mol/dm³ HCl has a lower pH and conducts electricity better than 0.1 mol/dm³ CH3COOH.",
        ],
      },
    ],
  },
  {
    number: 17,
    title: "Oxides & Salt Preparation",
    section: "7. Acids, bases and salts",
    topic: "Amphoteric Oxides & Advanced Salt Synthesis",
    intro:
      "Oxides are classified based on their acid-base behavior, including amphoteric oxides which react with both acids and bases. Salt preparation involves choosing suitable synthesis pathways and purification steps.",
    subheadings: [
      {
        title: "Classification of Oxides: Basic, Acidic, Amphoteric & Neutral",
        body:
          "**1. Basic Oxides:**\n" +
          "- Oxides of **metals** (e.g. $\\text{CuO}, \\text{CaO}, \\text{MgO}, \\text{Na}_2\\text{O}$).\n" +
          "- React with acids to form salt and water: $\\text{CuO(s)} + \\text{H}_2\\text{SO}_4\\text{(aq)} \\to \\text{CuSO}_4\\text{(aq)} + \\text{H}_2\\text{O(l)}$.\n\n" +
          "**2. Acidic Oxides:**\n" +
          "- Oxides of **non-metals** (e.g. $\\text{SO}_2, \\text{CO}_2, \\text{NO}_2, \\text{P}_4\\text{O}_{10}$).\n" +
          "- React with alkalis to form salt and water: $\\text{CO}_2\\text{(g)} + 2\\text{NaOH(aq)} \\to \\text{Na}_2\\text{CO}_3\\text{(aq)} + \\text{H}_2\\text{O(l)}$.\n\n" +
          "**3. Amphoteric Oxides:**\n" +
          "- Oxides that react with **both acids and bases** to form salts and water.\n" +
          "- Key syllabus examples: **Aluminium oxide ($\\text{Al}_2\\text{O}_3$)** and **Zinc oxide ($\\text{ZnO}$)**.\n" +
          "- **Reactions of $\\text{Al}_2\\text{O}_3$:**\n" +
          "  - As a base (with acid): $\\text{Al}_2\\text{O}_3 + 6\\text{HCl} \\to 2\\text{AlCl}_3 + 3\\text{H}_2\\text{O}$\n" +
          "  - As an acid (with hot conc. alkali): $\\text{Al}_2\\text{O}_3 + 2\\text{NaOH} + 3\\text{H}_2\\text{O} \\to 2\\text{NaAl(OH)}_4$ (sodium tetrahydroxoaluminate)\n" +
          "- **Reactions of $\\text{ZnO}$:**\n" +
          "  - With acid: $\\text{ZnO} + 2\\text{HCl} \\to \\text{ZnCl}_2 + \\text{H}_2\\text{O}$\n" +
          "  - With alkali: $\\text{ZnO} + 2\\text{NaOH} + \\text{H}_2\\text{O} \\to \\text{Na}_2\\text{Zn(OH)}_4$ (sodium tetrahydroxozincate)\n\n" +
          "**4. Neutral Oxides:**\n" +
          "- Oxides of non-metals that do not react with either acids or bases.\n" +
          "- Key syllabus examples: Carbon monoxide ($\\text{CO}$), nitrous oxide ($\\text{N}_2\\text{O}$), and nitric oxide ($\\text{NO}$).",
        examinerTips: [
          "Remember the two key amphoteric oxides for Cambridge 0620: aluminium oxide (Al₂O₃) and zinc oxide (ZnO). Zinc hydroxide Zn(OH)₂ and aluminium hydroxide Al(OH)₃ are also amphoteric.",
        ],
        commonMistakes: [
          "Calling carbon monoxide (CO) an acidic oxide — CO is neutral and does not react with alkalis.",
        ],
        recap: [
          "State the definitions of basic, acidic, amphoteric, and neutral oxides.",
          "Write balanced equations showing aluminium oxide acting as a base and acting as an acid.",
        ],
      },
      {
        title: "Advanced Salt Synthesis: Titration & Precipitation",
        body:
          "**Choosing the Preparation Method:**\n" +
          "1. **Is the salt soluble or insoluble?**\n" +
          "   - **Insoluble salt:** Use **precipitation** (mix two soluble aqueous solutions).\n" +
          "   - **Soluble salt:** Check starting material:\n" +
          "     - If starting with an insoluble base/carbonate/metal: Use **excess insoluble reactant method**.\n" +
          "     - If starting with a soluble base (alkali) / soluble carbonate: Use **titration**.\n\n" +
          "**Method 1 — Titration (Soluble Salt from Soluble Reactants, e.g. $\\text{NaCl}, \\text{K}_2\\text{SO}_4, \\text{NH}_4\\text{NO}_3$):**\n" +
          "1. Measure a known volume of alkali into a conical flask using a **volumetric pipette**.\n" +
          "2. Add indicator (e.g. methyl orange or phenolphthalein).\n" +
          "3. Run acid from a **burette** until the indicator changes colour permanently at the endpoint; record the titre volume.\n" +
          "4. Repeat until concordant titres (within $0.10\\text{ cm}^3$) are achieved.\n" +
          "5. Repeat the exact reaction **without indicator** using the average titre volume of acid.\n" +
          "6. Heat the resulting neutral solution to evaporate water to the crystallisation point.\n" +
          "7. Cool to form crystals, filter, wash with a minimal volume of cold distilled water, and dry between filter papers.\n\n" +
          "**Method 2 — Precipitation (Insoluble Salt, e.g. $\\text{BaSO}_4, \\text{AgCl}, \\text{PbI}_2$):**\n" +
          "1. Mix two aqueous solutions containing the required ions:\n" +
          "   $$\\text{BaCl}_2\\text{(aq)} + \\text{Na}_2\\text{SO}_4\\text{(aq)} \\to \\text{BaSO}_4\\text{(s)} + 2\\text{NaCl(aq)}$$\n" +
          "2. Filter off the insoluble precipitate.\n" +
          "3. Wash the residue thoroughly with distilled water to remove soluble impurities.\n" +
          "4. Dry the precipitate in a warm oven or desiccator.",
        examinerTips: [
          "In titration salt synthesis, you MUST mention repeating without indicator so the resulting salt crystals are pure and not contaminated with indicator dye.",
          "In precipitation, state that the precipitate must be washed with distilled water to wash away traces of the soluble spectator salt.",
        ],
        commonMistakes: [
          "Using sulfuric acid with calcium to make calcium sulfate — calcium sulfate forms an insoluble crust that stops the reaction prematurely.",
        ],
        recap: [
          "Outline the complete procedure to prepare pure, dry crystals of sodium chloride from aqueous sodium hydroxide and hydrochloric acid.",
          "Write the ionic equation for the precipitation of silver chloride.",
        ],
      },
    ],
  },
  {
    number: 18,
    title: "Periodic Trends, Halogens & Transition Elements",
    section: "8. The Periodic Table",
    topic: "Group VII Reactivity Trends & Transition Element Properties",
    intro:
      "Periodic trends are governed by nuclear charge, electron shielding, and atomic radius. Transition metals display unique physical and chemical characteristics compared to main group metals.",
    subheadings: [
      {
        title: "Group VII (The Halogens): Trends & Displacement Mechanisms",
        body:
          "**Trends Down Group VII:**\n" +
          "- **State and colour at RTP:**\n" +
          "  - Fluorine ($\\text{F}_2$): Pale yellow gas.\n" +
          "  - Chlorine ($\\text{Cl}_2$): Pale green gas.\n" +
          "  - Bromine ($\\text{Br}_2$): Red-brown liquid forming brown vapour.\n" +
          "  - Iodine ($\\text{I}_2$): Grey-black solid subliming to purple vapour.\n" +
          "- **Melting and boiling points:** Increase down the group due to stronger intermolecular (van der Waals) forces as molecular size and number of electrons increase.\n" +
          "- **Reactivity:** **Decreases down the group**.\n\n" +
          "**Explaining the Reactivity Trend Down Group VII:**\n" +
          "1. Halogen atoms react by **gaining one electron** into their outer shell to form halide anions ($X^-$).\n" +
          "2. Going down the group, atomic radius increases and the number of electron shells increases (more shielding).\n" +
          "3. The attractive force of the positive nucleus on incoming electrons is weaker.\n" +
          "4. Therefore, it becomes harder to attract and gain an electron down the group.\n\n" +
          "**Halogen Displacement Reactions:**\n" +
          "A more reactive halogen displaces a less reactive halogen from solutions of its halide:\n" +
          "- $\\text{Cl}_2\\text{(aq)} + 2\\text{KBr(aq)} \\to 2\\text{KCl(aq)} + \\text{Br}_2\\text{(aq)}$ (solution turns from colourless to orange).\n" +
          "  - Ionic equation: $\\text{Cl}_2 + 2\\text{Br}^- \\to 2\\text{Cl}^- + \\text{Br}_2$\n" +
          "  - Chlorine is reduced (oxidising agent); bromide is oxidised (reducing agent).\n" +
          "- $\\text{Br}_2\\text{(aq)} + 2\\text{KI(aq)} \\to 2\\text{KBr(aq)} + \\text{I}_2\\text{(aq)}$ (solution turns orange to dark brown).",
        examinerTips: [
          "When explaining halogen reactivity, mention THREE key points: (1) atomic radius increases / more electron shells, (2) increased shielding from inner shells, (3) weaker electrostatic attraction between nucleus and incoming electron.",
        ],
        commonMistakes: [
          "Saying halogens lose electrons — halogens gain electrons to form 1- ions.",
        ],
        recap: [
          "State the colours and physical states of chlorine, bromine, and iodine at RTP.",
          "Explain why chlorine is more reactive than bromine.",
        ],
      },
      {
        title: "Transition Elements: Properties & Variable Oxidation States",
        body:
          "**Key Characteristics of Transition Elements:**\n" +
          "Transition elements are d-block metals found between Groups II and III with distinct properties compared to Group I metals:\n" +
          "1. **Physical Properties:**\n" +
          "   - Much higher melting points and boiling points than Group I metals.\n" +
          "   - Much higher densities.\n" +
          "   - Greater tensile strength, hardness, and rigidity.\n" +
          "2. **Chemical Properties:**\n" +
          "   - **Variable oxidation states:** Transition metals can form ions with different charges (e.g. $\\text{Fe}^{2+}$ and $\\text{Fe}^{3+}$; $\\text{Cu}^+$ and $\\text{Cu}^{2+}$; $\\text{Mn}^{2+}, \\text{Mn}^{4+}, \\text{Mn}^{7+}$).\n" +
          "   - **Form coloured compounds / ions in aqueous solution:**\n" +
          "     - $\\text{Cu}^{2+}$: Blue.\n" +
          "     - $\\text{Fe}^{2+}$: Pale green.\n" +
          "     - $\\text{Fe}^{3+}$: Yellow / red-brown.\n" +
          "     - $\\text{Cr}^{3+}$: Green; $\\text{Cr}_2\\text{O}_7^{2-}$: Orange.\n" +
          "     - $\\text{MnO}_4^-$: Purple.\n" +
          "   - **Act as catalysts** both as elements and in compounds:\n" +
          "     - Iron ($\\text{Fe}$) in the **Haber process** (synthesis of $\\text{NH}_3$).\n" +
          "     - Vanadium(V) oxide ($\\text{V}_2\\text{O}_5$) in the **Contact process** (synthesis of $\\text{SO}_3$).\n" +
          "     - Nickel ($\\text{Ni}$) in the **hydrogenation of alkenes** to make margarine.\n" +
          "     - Platinum ($\\text{Pt}$) / Rhodium ($\\text{Rh}$) in **catalytic converters**.",
        examinerTips: [
          "Contrast transition metals with Group I: Group I metals have low densities, low melting points, form only +1 white/colourless compounds, and are not catalytic.",
        ],
        commonMistakes: [
          "Writing 'iron makes things faster' instead of specifying the industrial process (Haber process) and catalytic role.",
        ],
        recap: [
          "List four distinguishing features of transition elements compared to Group I alkali metals.",
          "Give two examples of transition elements or their compounds used as catalysts in industry.",
        ],
      },
    ],
  },
  {
    number: 19,
    title: "Properties, Uses & Alloys of Metals",
    section: "9. Metals",
    topic: "Metallic Lattice Disruption & Engineering Alloys",
    intro:
      "Alloying is the deliberate addition of other elements to a metal to modify its physical properties. Disruption of the metallic lattice explains why alloys are stronger and harder than pure metals.",
    subheadings: [
      {
        title: "Structure and Hardness of Pure Metals vs Alloys",
        body:
          "**Structure of Pure Metals:**\n" +
          "- In a pure metal, identical atoms are arranged in neat, regularly packed crystalline layers.\n" +
          "- When a force / shear stress is applied, the uniform layers of positive ions can **easily slide over one another** without breaking the non-directional metallic bond.\n" +
          "- This accounts for the high **malleability** (can be hammered into shape) and **ductility** (can be drawn into wires) of pure metals like pure copper, gold, or aluminium.\n\n" +
          "**Structure of Alloys:**\n" +
          "- An **alloy** is a mixture of a metal with other elements (metals or non-metals).\n" +
          "- The introduced foreign atoms have **different sizes** compared to the host metal atoms.\n" +
          "- These different-sized atoms **distort / disrupt the regular layer structure** of the metallic lattice.\n" +
          "- As a result, the layers can **no longer slide over each other easily** when a force is applied.\n" +
          "- Consequently, alloys are significantly **harder, stronger, and less malleable** than pure metals.\n\n" +
          "**Key Alloys, Compositions & Uses:**\n" +
          "- **Brass:** Copper ($70\\%$) + Zinc ($30\\%$); used for musical instruments, door handles, and electrical pins (corrosion resistant, harder than pure Cu).\n" +
          "- **Bronze:** Copper + Tin; used for sculptures, medals, and marine fittings.\n" +
          "- **Stainless steel:** Iron + Chromium + Nickel + Carbon; used for cutlery, kitchen sinks, and surgical instruments (resists rusting due to protective chromium oxide layer).\n" +
          "- **Mild steel:** Iron ($99.5\\%$) + Carbon ($0.5\\%$); used for car bodies, girders, and buildings.\n" +
          "- **High carbon steel:** Iron ($98.5\\%$) + Carbon ($1.5\\%$); used for cutting tools and drill bits (extremely hard but brittle).",
        examinerTips: [
          "When explaining why alloys are harder than pure metals, use the exact Cambridge key phrases: 'atoms of different sizes', 'disrupt/distort the regular layers', and 'prevent layers from sliding over each other'.",
        ],
        commonMistakes: [
          "Stating that alloys contain chemical bonds between the mixed metals — alloys are mixtures, not chemical compounds.",
        ],
        recap: [
          "Explain in terms of particle arrangement why brass is harder than pure copper.",
          "Name the constituent elements of stainless steel and state one use.",
        ],
      },
    ],
  },
  {
    number: 20,
    title: "The Reactivity Series & Corrosion",
    section: "9. Metals",
    topic: "Thermal Decomposition & Electrochemical Protection",
    intro:
      "The reactivity series determines how metal compounds decompose upon heating and dictates electrochemical corrosion prevention methods such as sacrificial protection and galvanising.",
    subheadings: [
      {
        title: "Thermal Decomposition of Metal Compounds",
        body:
          "The stability of a metal compound towards heat depends directly on the position of the metal in the reactivity series. Compounds of more reactive metals are **thermally more stable**.\n\n" +
          "**1. Metal Carbonates (decompose to metal oxide $+$ carbon dioxide):**\n" +
          "- **Potassium and sodium:** Extremely stable; **no decomposition** at Bunsen burner temperatures.\n" +
          "- **Calcium to copper:** Decompose on heating:\n" +
          "  $$\\text{CaCO}_3\\text{(s)} \\xrightarrow{\\Delta} \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$$\n" +
          "  $$\\text{CuCO}_3\\text{(s)} \\xrightarrow{\\Delta} \\text{CuO(s)} + \\text{CO}_2\\text{(g)} \\quad (\\text{green} \\to \\text{black})$$\n" +
          "- **Silver and gold:** Decompose completely to metal, oxygen, and $\\text{CO}_2$.\n\n" +
          "**2. Metal Hydroxides (decompose to metal oxide $+$ steam):**\n" +
          "- Potassium and sodium: No decomposition.\n" +
          "- Calcium to copper: Decompose on heating: $\\text{Ca(OH)}_2\\text{(s)} \\xrightarrow{\\Delta} \\text{CaO(s)} + \\text{H}_2\\text{O(g)}$.\n\n" +
          "**3. Metal Nitrates:**\n" +
          "- **Potassium and sodium:** Decompose to metal nitrite and oxygen gas:\n" +
          "  $$2\\text{NaNO}_3\\text{(s)} \\xrightarrow{\\Delta} 2\\text{NaNO}_2\\text{(s)} + \\text{O}_2\\text{(g)}$$\n" +
          "- **Magnesium to copper:** Decompose to metal oxide, nitrogen dioxide (brown acidic toxic gas), and oxygen gas:\n" +
          "  $$2\\text{Cu(NO}_3)_2\\text{(s)} \\xrightarrow{\\Delta} 2\\text{CuO(s)} + 4\\text{NO}_2\\text{(g)} + \\text{O}_2\\text{(g)}$$\n" +
          "- **Silver:** Decomposes to metallic silver, nitrogen dioxide, and oxygen:\n" +
          "  $$2\\text{AgNO}_3\\text{(s)} \\xrightarrow{\\Delta} 2\\text{Ag(s)} + 2\\text{NO}_2\\text{(g)} + \\text{O}_2\\text{(g)}$$",
        examinerTips: [
          "Notice the difference in nitrate decomposition: Group I nitrates (Na, K) yield nitrites (-NO₂) and oxygen only (no brown NO₂ fumes!). Moderately reactive metals yield metal oxide + brown NO₂ gas + O₂.",
        ],
        commonMistakes: [
          "Assuming sodium carbonate decomposes on heating — Group I carbonates do not decompose at laboratory temperatures.",
        ],
        recap: [
          "Write the balanced symbol equation for the thermal decomposition of lead(II) nitrate.",
          "Explain why copper(II) carbonate decomposes at a lower temperature than calcium carbonate.",
        ],
      },
      {
        title: "Rusting, Galvanising & Sacrificial Protection",
        body:
          "**Conditions Required for Rusting:**\n" +
          "- Rusting is the corrosion of iron and steel.\n" +
          "- Both **oxygen (from air)** and **water** must be present.\n" +
          "- Rust is **hydrated iron(III) oxide ($\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$)**.\n" +
          "- Sodium chloride / salt water accelerates rusting by acting as an electrolyte.\n\n" +
          "**Corrosion Prevention Methods:**\n" +
          "1. **Barrier methods:** Coating iron with paint, grease, oil, or plastic.\n" +
          "   - Prevents contact with oxygen and water.\n" +
          "   - Disadvantage: If scratched, iron underneath immediately begins rusting.\n\n" +
          "2. **Sacrificial Protection:**\n" +
          "   - A **more reactive metal** (such as magnesium or zinc) is placed in electrical contact with the iron.\n" +
          "   - Because zinc/magnesium is higher in the reactivity series, it has a greater tendency to **lose electrons and oxidise**:\n" +
          "     $$\\text{Zn(s)} \\to \\text{Zn}^{2+}\\text{(aq)} + 2e^- \\quad (\\text{sacrificed})$$\n" +
          "   - The electrons flow to the iron, preventing the iron from losing electrons (iron remains reduced).\n" +
          "   - The sacrificial metal slowly dissolves away and must be replaced periodically.\n" +
          "   - Used on ships' hulls, underground pipelines, and steel oil rigs.\n\n" +
          "3. **Galvanising:**\n" +
          "   - Coating iron or steel with a thin layer of **zinc**.\n" +
          "   - Acts as a **barrier** to oxygen and moisture.\n" +
          "   - Even if scratched, the zinc provides **sacrificial protection** because zinc is more reactive than iron.",
        examinerTips: [
          "State clearly: zinc oxidises in preference to iron because zinc is more reactive / loses electrons more readily.",
          "Tin plating protects iron as a barrier, but if scratched, iron rusts FASTER than normal because iron is more reactive than tin and sacrifices itself to protect the tin!",
        ],
        commonMistakes: [
          "Saying galvanising uses any metal — galvanising specifically refers to coating with zinc.",
        ],
        recap: [
          "State the two conditions necessary for iron to rust.",
          "Explain how sacrificial protection prevents iron from rusting even when exposed to air and water.",
        ],
      },
    ],
  },
  {
    number: 21,
    title: "Extraction of Metals (Iron & Aluminium)",
    section: "9. Metals",
    topic: "The Blast Furnace & Hall-Héroult Electrolytic Cell",
    intro:
      "Metals are extracted from their ores based on reactivity. Carbon reduction in the Blast Furnace extracts iron, while molten electrolysis in the Hall-Héroult cell extracts aluminium.",
    subheadings: [
      {
        title: "Extraction of Iron in the Blast Furnace",
        body:
          "**Raw Materials Fed from the Top:**\n" +
          "1. **Iron ore (Haematite, $\\text{Fe}_2\\text{O}_3$):** Source of iron.\n" +
          "2. **Coke (mainly Carbon, $\\text{C}$):** Fuel and reducing agent source.\n" +
          "3. **Limestone (Calcium carbonate, $\\text{CaCO}_3$):** To remove acidic impurities.\n" +
          "4. **Hot air blast (blown in at bottom):** Provides oxygen for combustion.\n\n" +
          "**Chemical Reactions in the Blast Furnace:**\n" +
          "1. **Combustion of coke (exothermic, provides heat):**\n" +
          "   $$\\text{C(s)} + \\text{O}_2\\text{(g)} \\to \\text{CO}_2\\text{(g)} \\quad (\\Delta H < 0)$$\n" +
          "2. **Formation of the main reducing agent (carbon monoxide):**\n" +
          "   $$\\text{CO}_2\\text{(g)} + \\text{C(s)} \\to 2\\text{CO(g)}$$\n" +
          "3. **Reduction of iron(III) oxide by carbon monoxide:**\n" +
          "   $$\\text{Fe}_2\\text{O}_3\\text{(s)} + 3\\text{CO(g)} \\to 2\\text{Fe(l)} + 3\\text{CO}_2\\text{(g)}$$\n" +
          "   *(Note: Carbon can also reduce $\\text{Fe}_2\\text{O}_3$ directly at high temperatures: $\\text{Fe}_2\\text{O}_3 + 3\\text{C} \\to 2\\text{Fe} + 3\\text{CO}$)*.\n" +
          "   Molten iron trickles to the bottom and is tapped off.\n\n" +
          "4. **Removal of acidic sand/silica impurities ($\\text{SiO}_2$):**\n" +
          "   - Limestone undergoes thermal decomposition in the heat of the furnace:\n" +
          "     $$\\text{CaCO}_3\\text{(s)} \\xrightarrow{\\Delta} \\text{CaO(s)} + \\text{CO}_2\\text{(g)}$$\n" +
          "   - Calcium oxide (basic oxide) neutralises silica (acidic oxide) to form **slag (calcium silicate)**:\n" +
          "     $$\\text{CaO(s)} + \\text{SiO}_2\\text{(s)} \\to \\text{CaSiO}_3\\text{(l)}$$\n" +
          "   - Molten slag floats on top of the denser molten iron and is tapped off separately (used for road building).",
        examinerTips: [
          "State clearly that carbon monoxide (CO) is the MAIN reducing agent in the blast furnace.",
          "Know the role of limestone: decomposes to CaO, which reacts with acidic SiO₂ impurities to form slag (CaSiO₃).",
        ],
        commonMistakes: [
          "Writing that slag is denser than iron — slag floats on top of molten iron because it is less dense.",
        ],
        recap: [
          "List the four raw materials added to the blast furnace.",
          "Write balanced chemical equations for the reduction of haematite and the formation of slag.",
        ],
      },
      {
        title: "Extraction of Aluminium from Bauxite (Hall-Héroult Process)",
        body:
          "**Why Electrolysis is Required:**\n" +
          "Aluminium is higher than carbon in the reactivity series; its bond with oxygen is too strong to be reduced by carbon, so molten electrolysis is required.\n\n" +
          "**Electrolytic Cell Setup:**\n" +
          "- **Ore:** Bauxite (purified to aluminium oxide, alumina, $\\text{Al}_2\\text{O}_3$).\n" +
          "- **Role of Cryolite ($\\text{Na}_3\\text{AlF}_6$):**\n" +
          "  - Pure $\\text{Al}_2\\text{O}_3$ has an extremely high melting point ($> 2050^\\circ\\text{C}$).\n" +
          "  - Dissolving $\\text{Al}_2\\text{O}_3$ in molten cryolite **lowers the melting point to $\\approx 950^\\circ\\text{C}$**.\n" +
          "  - This drastically reduces electricity costs and saves enormous amounts of energy.\n" +
          "  - It also improves electrical conductivity of the molten electrolyte.\n\n" +
          "**Electrode Reactions:**\n" +
          "- **Cathode ($-$ steel tank lined with graphite/carbon):**\n" +
          "  $$\\text{Al}^{3+} + 3e^- \\to \\text{Al(l)}$$\n" +
          "  Molten aluminium is denser than the electrolyte and sinks to the bottom where it is siphoned off.\n\n" +
          "- **Anode ($+$ carbon/graphite rods immersed into melt):**\n" +
          "  $$2\\text{O}^{2-} \\to \\text{O}_2\\text{(g)} + 4e^-$$\n\n" +
          "**Why the Carbon Anodes Must Be Regularly Replaced:**\n" +
          "At the high working temperature ($\approx 950^\\circ\\text{C}$), the oxygen gas produced at the anode reacts with the hot carbon/graphite anodes:\n" +
          "$$\\text{C(s)} + \\text{O}_2\\text{(g)} \\to \\text{CO}_2\\text{(g)}$$\n" +
          "This burns away the anodes as carbon dioxide gas, requiring regular replacement.",
        examinerTips: [
          "Two marks for the role of cryolite: (1) lowers melting point / operating temperature, (2) reduces energy/electricity costs or increases electrical conductivity.",
          "Explain why anodes need replacement: oxygen produced reacts with hot graphite anodes to form CO₂ gas.",
        ],
        commonMistakes: [
          "Saying cryolite is a catalyst — it acts as a molten solvent.",
        ],
        recap: [
          "State two reasons why cryolite is added to aluminium oxide in the extraction of aluminium.",
          "Write half-equations for the reactions at the cathode and anode during aluminium extraction.",
        ],
      },
    ],
  },
];
