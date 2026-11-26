import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Chemistry (0620) Core Notes
 * Chapters 15–20: Acids, Bases, Salts, Periodic Table & Metals
 */
export const CHEMISTRY_CORE_PART3: Chapter[] = [
  {
    number: 15,
    title: "Acids, Bases and Indicators",
    section: "7. Acids, bases and salts",
    topic: "Properties of Acids & Bases, pH Scale",
    intro:
      "Acids and bases are essential chemical classes. Their strength and reactivity are measured using the pH scale and acid-base indicators.",
    subheadings: [
      {
        title: "Properties of Acids and Bases",
        body:
          "**Acids:**\n" +
          "- Substances that produce hydrogen ions ($\\text{H}^+$) in aqueous solution (proton donors).\n" +
          "- Taste sour, have a $\\text{pH} < 7$.\n" +
          "- **Reactions of Acids:**\n" +
          "  1. $\\text{Acid} + \\text{Metal} \\to \\text{Salt} + \\text{Hydrogen}$ (e.g. $\\text{Mg} + 2\\text{HCl} \\to \\text{MgCl}_2 + \\text{H}_2$)\n" +
          "  2. $\\text{Acid} + \\text{Base} \\to \\text{Salt} + \\text{Water}$ (neutralisation: $\\text{HCl} + \\text{NaOH} \\to \\text{NaCl} + \\text{H}_2\\text{O}$)\n" +
          "  3. $\\text{Acid} + \\text{Metal Carbonate} \\to \\text{Salt} + \\text{Water} + \\text{Carbon dioxide}$ (effervescence: $2\\text{HCl} + \\text{CaCO}_3 \\to \\text{CaCl}_2 + \\text{H}_2\\text{O} + \\text{CO}_2$)\n\n" +
          "**Bases:**\n" +
          "- Oxides or hydroxides of metals that neutralise acids to form a salt and water (proton acceptors).\n" +
          "- **Alkali:** A base that is **soluble in water**, producing hydroxide ions ($\\text{OH}^-$). Examples: $\\text{NaOH}$, $\\text{KOH}$, aqueous $\\text{NH}_3$.\n" +
          "- Feel soapy, have a $\\text{pH} > 7$.\n" +
          "- Reaction with ammonium salts: $\\text{Alkali} + \\text{Ammonium salt} \\xrightarrow{\\Delta} \\text{Salt} + \\text{Water} + \\text{Ammonia gas}$",
        examinerTips: [
          "Remember: all alkalis are bases, but not all bases are alkalis (only soluble ones are alkalis).",
          "Test for hydrogen gas: lighted splint gives a 'squeaky pop'. Test for carbon dioxide: turns limewater milky/cloudy.",
        ],
        commonMistakes: [
          "Saying copper reacts with dilute acid to produce hydrogen — copper is below hydrogen in reactivity and does NOT react.",
        ],
        recap: [
          "State the products when sulfuric acid reacts with: (a) zinc, (b) copper(II) oxide, (c) sodium carbonate.",
          "Distinguish between a base and an alkali.",
        ],
      },
      {
        title: "The pH Scale and Indicators",
        body:
          "**The pH Scale:**\n" +
          "- Ranges from $0$ to $14$.\n" +
          "- $\\text{pH} < 7$: Acidic (lower pH = more strongly acidic).\n" +
          "- $\\text{pH} = 7$: Neutral (e.g. pure water).\n" +
          "- $\\text{pH} > 7$: Alkaline (higher pH = more strongly alkaline).\n\n" +
          "**Indicators and Colour Changes:**\n\n" +
          "| Indicator | Colour in Acid | Colour at Neutral | Colour in Alkali |\n" +
          "|-----------|----------------|-------------------|------------------|\n" +
          "| Litmus | Red | Purple | Blue |\n" +
          "| Methyl orange | Red | Orange | Yellow |\n" +
          "| Thymolphthalein | Colourless | Colourless | Blue |\n" +
          "| Universal indicator | Red / Orange / Yellow | Green (pH 7) | Blue / Purple |",
        examinerTips: [
          "Universal indicator can tell you the approximate pH value by comparing its colour to a pH chart.",
          "Litmus and methyl orange only indicate whether a solution is acidic or alkaline, not the exact pH.",
        ],
        commonMistakes: [
          "Mixing up methyl orange colours — red in acid, yellow in alkali.",
          "Saying neutral is blue — neutral is green with Universal indicator.",
        ],
        recap: [
          "State the colour of methyl orange and litmus in hydrochloric acid.",
          "A solution has a pH of 12. Describe the solution and state its colour in Universal Indicator.",
        ],
      },
    ],
  },
  {
    number: 16,
    title: "Oxides and Salt Preparation",
    section: "7. Acids, bases and salts",
    topic: "Oxides & Practical Methods of Salt Preparation",
    intro:
      "Oxides are classified by their acid-base behavior. Soluble and insoluble salts are prepared using distinct chemical techniques.",
    subheadings: [
      {
        title: "Classification of Oxides",
        body:
          "**Types of Oxides:**\n" +
          "1. **Basic oxides:** Oxides of **metals** that react with acids to form salt + water (e.g. $\\text{CuO}$, $\\text{CaO}$, $\\text{MgO}$). Insoluble in water mostly; soluble ones form alkalis.\n" +
          "2. **Acidic oxides:** Oxides of **non-metals** that react with bases/alkalis to form salt + water (e.g. $\\text{SO}_2, \\text{CO}_2, \\text{NO}_2$). Dissolve in water to form acids.\n" +
          "3. **Amphoteric oxides:** Oxides of certain metals that react with **both acids and bases** to form salt and water (e.g. $\\text{Al}_2\\text{O}_3, \\text{ZnO}$).\n" +
          "4. **Neutral oxides:** Non-metal oxides that react with **neither acids nor bases** (e.g. $\\text{CO}, \\text{NO}, \\text{H}_2\\text{O}$).",
        examinerTips: [
          "Remember the two amphoteric oxides required: aluminium oxide (Al₂O₃) and zinc oxide (ZnO).",
          "Carbon monoxide (CO) is a neutral oxide, while carbon dioxide (CO₂) is acidic.",
        ],
        commonMistakes: [
          "Assuming all non-metal oxides are acidic — CO and NO are neutral.",
        ],
        recap: [
          "Classify each oxide as acidic, basic, amphoteric, or neutral: $\\text{SO}_2, \\text{MgO}, \\text{CO}, \\text{Al}_2\\text{O}_3$.",
        ],
      },
      {
        title: "Salt Preparation",
        body:
          "**1. Soluble Salt from Acid and Excess Insoluble Solid (Base, Metal, or Carbonate):**\n" +
          "- Example: preparing copper(II) sulfate crystals from $\\text{CuO}$ and $\\text{H}_2\\text{SO}_4$.\n" +
          "- **Step 1:** Warm acid in a beaker. Add insoluble $\\text{CuO}$ powder stirring until in **excess** (no more dissolves, ensures all acid is used up).\n" +
          "- **Step 2:** **Filter** the mixture to remove the unreacted excess $\\text{CuO}$.\n" +
          "- **Step 3:** Heat the filtrate in an evaporating basin to the **crystallisation point** (crystals form on a glass rod).\n" +
          "- **Step 4:** Allow to cool slowly for crystals to form. Filter off crystals, wash with cold distilled water, dry between filter papers.\n\n" +
          "**2. Insoluble Salt by Precipitation:**\n" +
          "- Mix two soluble solutions containing the required ions (e.g. $\\text{BaCl}_2\\text{(aq)} + \\text{Na}_2\\text{SO}_4\\text{(aq)} \\to \\text{BaSO}_4\\text{(s)} + 2\\text{NaCl}\\text{(aq)}$).\n" +
          "- Filter off the precipitate, wash thoroughly with distilled water, and dry in an oven.",
        examinerTips: [
          "State why excess solid is used: 'to ensure all the acid has fully reacted'.",
          "Never evaporate to complete dryness when preparing hydrated crystals — heat only to the crystallisation point.",
        ],
        commonMistakes: [
          "Using excess acid instead of excess solid — excess solid is easily filtered out, whereas excess acid cannot be separated by filtration.",
        ],
        recap: [
          "Describe step-by-step how to prepare pure, dry crystals of hydrated copper(II) sulfate starting from copper(II) oxide and dilute sulfuric acid.",
        ],
      },
    ],
  },
  {
    number: 17,
    title: "The Periodic Table Trends and Groups",
    section: "8. The Periodic Table",
    topic: "Groups I, VII, VIII & Transition Metals",
    intro:
      "The Periodic Table arranges elements by atomic number. Groups show similar chemical properties and distinct vertical trends.",
    subheadings: [
      {
        title: "Group I — The Alkali Metals",
        body:
          "**Elements:** Lithium (Li), Sodium (Na), Potassium (K).\n\n" +
          "**Physical Properties:** Soft metals (can be cut with a knife), low densities (Li, Na, K float on water), relatively low melting points.\n\n" +
          "**Chemical Reactions with Water:**\n" +
          "$$2\\text{M} + 2\\text{H}_2\\text{O} \\to 2\\text{MOH} + \\text{H}_2$$\n" +
          "- **Lithium:** Fizzes steadily, floats, produces hydrogen gas, leaves an alkaline solution.\n" +
          "- **Sodium:** Melts into a silver ball, moves rapidly across the water surface, vigorous fizzing.\n" +
          "- **Potassium:** Ignites instantly with a **lilac flame**, violent fizzing, small pop/explosion at the end.\n\n" +
          "**Trend down Group I:** Reactivity **increases** down the group (outer electron is further from nucleus, shielded by more shells, more easily lost).",
        examinerTips: [
          "Alkali metals must be stored under oil to prevent reaction with atmospheric oxygen and moisture.",
          "State the lilac flame as the characteristic observation for potassium reacting with water.",
        ],
        commonMistakes: [
          "Saying reactivity decreases down Group I — it increases down the group.",
        ],
        recap: [
          "Describe two observations when a small piece of sodium is added to water.",
          "Write a balanced equation for the reaction of potassium with water.",
        ],
      },
      {
        title: "Group VII (The Halogens) & Group VIII (Noble Gases)",
        body:
          "**Group VII — Halogens (Diatomic Non-Metals):**\n" +
          "- **Chlorine ($\\text{Cl}_2$):** Pale yellow-green gas.\n" +
          "- **Bromine ($\\text{Br}_2$):** Red-brown liquid that gives off an orange-brown vapour.\n" +
          "- **Iodine ($\\text{I}_2$):** Grey-black solid that sublimes to form a purple vapour.\n\n" +
          "**Trends down Group VII:**\n" +
          "- Colour gets **darker**.\n" +
          "- Melting and boiling points **increase** (density increases).\n" +
          "- Reactivity **decreases** down the group.\n\n" +
          "**Displacement Reactions:** A more reactive halogen displaces a less reactive halide from solution:\n" +
          "$$\\text{Cl}_2\\text{(aq)} + 2\\text{KBr}\\text{(aq)} \\to 2\\text{KCl}\\text{(aq)} + \\text{Br}_2\\text{(aq)} \\text{ (turns orange)}$$\n\n" +
          "**Group VIII / 0 — The Noble Gases:**\n" +
          "- Helium, Neon, Argon, Krypton, Xenon.\n" +
          "- Unreactive (inert) and monoatomic gases because of a full outer shell of valence electrons (stable octet, or 2 for He).\n" +
          "- Uses: Helium in balloons (low density, non-flammable); Argon in filament light bulbs (inert atmosphere).",
        examinerTips: [
          "Reactivity DECREASES down Group VII, opposite to Group I.",
          "A halogen cannot displace itself or a more reactive halogen (e.g. bromine cannot displace chloride).",
        ],
        commonMistakes: [
          "Writing halide ions as halogens — chlorine is Cl₂, chloride ion is Cl⁻.",
        ],
        recap: [
          "State the colour and physical state of chlorine, bromine, and iodine at room temperature.",
          "Predict whether chlorine reacts with aqueous potassium iodide. State the observation.",
        ],
      },
      {
        title: "Transition Elements",
        body:
          "**The Transition Elements** are metals located in the central block of the Periodic Table (between Groups II and III).\n\n" +
          "**Physical Properties (compared to Group I):**\n" +
          "- Much higher densities.\n" +
          "- Much higher melting points.\n" +
          "- Much harder and stronger.\n\n" +
          "**Characteristic Chemical Properties:**\n" +
          "1. **Variable oxidation states:** E.g. iron forms $\\text{Fe}^{2+}$ (iron(II), green) and $\\text{Fe}^{3+}$ (iron(III), brown/rust).\n" +
          "2. **Form coloured compounds:** E.g. copper(II) compounds are blue/green, iron(III) is reddish-brown, potassium manganate(VII) is purple.\n" +
          "3. **Act as catalysts:** E.g. iron in the Haber process, vanadium(V) oxide ($\\text{V}_2\\text{O}_5$) in the Contact process, nickel in hydrogenation.",
        examinerTips: [
          "Contrast transition metals with Group I alkali metals: transition metals are hard, dense, and have high melting points, whereas Group I metals are soft, light, and low-melting.",
        ],
        commonMistakes: [
          "Stating transition metals have fixed valencies — they have **variable** oxidation states.",
        ],
        recap: [
          "State three general properties of transition elements that distinguish them from Group I metals.",
        ],
      },
    ],
  },
  {
    number: 18,
    title: "Properties and Uses of Metals",
    section: "9. Metals",
    topic: "General Properties, Uses & Alloys",
    intro:
      "Metals have unique physical properties that determine their practical applications. Mixing metals produces alloys with tailored properties.",
    subheadings: [
      {
        title: "General Properties and Uses of Metals",
        body:
          "**Physical Properties of Metals:**\n" +
          "- Good electrical conductors.\n" +
          "- Good thermal conductors.\n" +
          "- Malleable (can be hammered into sheets) and ductile (can be drawn into wires).\n" +
          "- High melting and boiling points.\n\n" +
          "**Uses of Specific Metals:**\n" +
          "- **Aluminium:**\n" +
          "  - Aircraft bodies: low density and high strength-to-weight ratio.\n" +
          "  - Overhead electricity cables: low density and good electrical conductivity.\n" +
          "  - Food containers / foil: resistant to corrosion due to protective oxide layer, non-toxic.\n" +
          "- **Copper:**\n" +
          "  - Electrical wiring: excellent electrical conductivity and ductility.\n" +
          "  - Cooking utensils / water pipes: good thermal conductivity, unreactive with water.",
        examinerTips: [
          "When explaining the use of aluminium in aircraft, always state 'low density' (never just 'light').",
          "Aluminium's corrosion resistance is due to a tough, impermeable layer of aluminium oxide (Al₂O₃) that forms naturally on its surface.",
        ],
        commonMistakes: [
          "Saying aluminium doesn't corrode because it is unreactive — aluminium is quite reactive, but protected by its oxide layer.",
        ],
        recap: [
          "Explain why aluminium is used for overhead power cables.",
          "State two properties of copper that make it ideal for electrical cables.",
        ],
      },
      {
        title: "Alloys",
        body:
          "**Definition:** An alloy is a **mixture of a metal with other elements** (metals or non-metals) designed to have enhanced properties.\n\n" +
          "**Common Alloys:**\n" +
          "- **Brass:** Copper + Zinc (harder than copper, corrosion-resistant, musical instruments).\n" +
          "- **Bronze:** Copper + Tin.\n" +
          "- **Stainless steel:** Iron + Chromium + Nickel + Carbon (does not rust, used for cutlery and surgical instruments).\n\n" +
          "**Why Alloys are Harder than Pure Metals:**\n" +
          "- In a pure metal, all atoms are of identical size and arranged in regular layers that slide easily over one another.\n" +
          "- In an alloy, atoms of different elements have **different sizes**.\n" +
          "- This disrupts the regular lattice arrangement, making it much more difficult for the layers to slide past one another.",
        examinerTips: [
          "The explanation for alloy hardness is a frequent exam question: 'different sized atoms disrupt regular layers, preventing layers from sliding'.",
        ],
        commonMistakes: [
          "Saying alloys have stronger bonds — it is the physical disruption of layers sliding that makes them harder.",
        ],
        recap: [
          "Define an alloy.",
          "Explain why brass is harder than pure copper in terms of atomic structure.",
        ],
      },
    ],
  },
  {
    number: 19,
    title: "The Reactivity Series and Corrosion",
    section: "9. Metals",
    topic: "Reactivity Series, Displacement & Rusting",
    intro:
      "Metals differ widely in their reactivity. The reactivity series dictates metal extraction methods, displacement reactions, and corrosion prevention.",
    subheadings: [
      {
        title: "The Reactivity Series",
        body:
          "**The Reactivity Series (from most to least reactive):**\n" +
          "Potassium (K) > Sodium (Na) > Calcium (Ca) > Magnesium (Mg) > Aluminium (Al) > [Carbon] > Zinc (Zn) > Iron (Fe) > [Hydrogen] > Copper (Cu) > Silver (Ag) > Gold (Au)\n\n" +
          "**Mnemonic:** **P**lease **S**end **C**harlie's **M**onkeys **A**nd **Z**ebras **I**n **L**ead **H**eavy **C**ages **S**afely.\n\n" +
          "**Reactions of Metals:**\n" +
          "- **With cold water:** K, Na, Ca react violently to form metal hydroxide + $\\text{H}_2$.\n" +
          "- **With steam:** Mg, Zn, Fe react with steam to form **metal oxide** + $\\text{H}_2$:\n" +
          "  $$\\text{Mg} + \\text{H}_2\\text{O(g)} \\to \\text{MgO} + \\text{H}_2$$\n" +
          "- **With dilute hydrochloric acid:** K, Na, Ca too violent; Mg, Al, Zn, Fe react moderately to form metal chloride + $\\text{H}_2$; Cu does not react.",
        examinerTips: [
          "Notice that reaction with cold water produces metal hydroxide, whereas reaction with steam produces metal oxide.",
          "Copper, silver, and gold do NOT react with dilute hydrochloric acid.",
        ],
        commonMistakes: [
          "Writing magnesium hydroxide as the product of magnesium with steam — steam gives magnesium oxide (MgO).",
        ],
        recap: [
          "Place these metals in order of reactivity: iron, magnesium, copper, potassium, zinc.",
          "Write an equation for the reaction of magnesium with steam.",
        ],
      },
      {
        title: "Corrosion of Metals (Rusting)",
        body:
          "**Rusting** is the specific corrosion of iron (and steel) into hydrated iron(III) oxide:\n" +
          "$$\\text{Iron} + \\text{Oxygen} + \\text{Water} \\to \\text{Hydrated iron(III) oxide (Rust)}$$\n\n" +
          "**Conditions Required for Rusting:**\n" +
          "- **Both oxygen and water** must be present.\n" +
          "- If iron is in boiled water covered with oil (no oxygen), it does **not** rust.\n" +
          "- If iron is in dry air with a desiccant (no water), it does **not** rust.\n\n" +
          "**Methods of Rust Prevention:**\n" +
          "1. **Barrier methods:** Exclude oxygen and water from reaching iron surface:\n" +
          "   - Painting (cars, bridges).\n" +
          "   - Greasing / Oiling (moving bicycle chains, machine parts).\n" +
          "   - Plastic coating (wire fencing).\n" +
          "2. **Galvanising:** Coating iron with a layer of **zinc** (serves as both a barrier and sacrificial protection because zinc is more reactive than iron).",
        examinerTips: [
          "Only iron and steel 'rust'; other metals 'corrode'.",
          "Remember that both oxygen and water are essential for rusting — removing either prevents rust completely.",
        ],
        commonMistakes: [
          "Saying copper or aluminium 'rusts' — only iron and steel rust.",
        ],
        recap: [
          "State the two substances needed for iron to rust.",
          "Explain how galvanising protects iron from rusting.",
        ],
      },
    ],
  },
  {
    number: 20,
    title: "Extraction of Metals",
    section: "9. Metals",
    topic: "Blast Furnace & Electrolytic Extraction",
    intro:
      "Most metals exist in the Earth's crust as ores. The extraction method depends directly on the position of the metal in the reactivity series.",
    subheadings: [
      {
        title: "Extraction of Iron in the Blast Furnace",
        body:
          "Iron is extracted from its main ore, **hematite** ($\\text{Fe}_2\\text{O}_3$), in a blast furnace.\n\n" +
          "**Raw Materials Added at the Top:**\n" +
          "1. **Hematite** (iron(III) oxide ore, $\\text{Fe}_2\\text{O}_3$)\n" +
          "2. **Coke** (mainly carbon, acts as fuel and reducing agent)\n" +
          "3. **Limestone** (calcium carbonate, $\\text{CaCO}_3$, to remove acidic impurities)\n\n" +
          "**Chemical Reactions in the Blast Furnace:**\n" +
          "1. **Combustion of coke:** $\\text{C} + \\text{O}_2 \\to \\text{CO}_2$ (highly exothermic, provides heat)\n" +
          "2. **Formation of reducing agent:** $\\text{CO}_2 + \\text{C} \\to 2\\text{CO}$\n" +
          "3. **Reduction of hematite by carbon monoxide:**\n" +
          "   $$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\to 2\\text{Fe} + 3\\text{CO}_2$$\n" +
          "   Molten iron sinks to the bottom of the furnace and is tapped off.\n" +
          "4. **Removal of silicon(IV) oxide (sand) impurities:**\n" +
          "   - Limestone decomposes: $\\text{CaCO}_3 \\to \\text{CaO} + \\text{CO}_2$\n" +
          "   - Calcium oxide reacts with silica: $\\text{CaO} + \\text{SiO}_2 \\to \\text{CaSiO}_3$ (slag)\n" +
          "   - Molten slag floats on top of molten iron and is tapped off separately.",
        examinerTips: [
          "Carbon monoxide (CO) is the main reducing agent that reduces iron(III) oxide in the blast furnace.",
          "Slant height of blast furnace products: molten slag is less dense than molten iron and floats on top.",
        ],
        commonMistakes: [
          "Saying limestone reduces the iron — limestone's sole role is to remove silica impurities as slag.",
        ],
        recap: [
          "Name the three raw materials fed into the top of the blast furnace.",
          "Write the equation for the reduction of hematite by carbon monoxide.",
        ],
      },
      {
        title: "Extraction of Aluminium",
        body:
          "Metals more reactive than carbon (e.g. aluminium) cannot be extracted by reduction with carbon — they must be extracted by **electrolysis**.\n\n" +
          "**Electrolytic Extraction of Aluminium:**\n" +
          "- **Ore:** Bauxite (contains hydrated $\\text{Al}_2\\text{O}_3$).\n" +
          "- **Electrolyte:** Pure aluminium oxide (alumina) dissolved in molten **cryolite** ($\\text{Na}_3\\text{AlF}_6$).\n" +
          "- **Why use cryolite?** Pure $\\text{Al}_2\\text{O}_3$ has a very high melting point ($2072°\\text{C}$). Dissolving it in molten cryolite lowers the operating temperature to around $950°\\text{C}$, significantly reducing energy costs and increasing conductivity.\n" +
          "- **Electrodes:** Both cathode and anode are made of graphite (carbon).\n" +
          "- **At cathode ($-$):** $\\text{Al}^{3+} + 3e^- \\to \\text{Al}$ (molten aluminium collects at the bottom).\n" +
          "- **At anode ($+$):** $2\\text{O}^{2-} \\to \\text{O}_2 + 4e^-$ (oxygen gas produced).\n" +
          "- The carbon anodes react with the hot oxygen gas to form $\\text{CO}_2$ ($\\text{C} + \\text{O}_2 \\to \\text{CO}_2$) and must be **regularly replaced**.",
        examinerTips: [
          "Two reasons for using cryolite: lowers melting point and improves electrical conductivity.",
          "Carbon anodes burn away because hot carbon reacts with the released oxygen gas.",
        ],
        commonMistakes: [
          "Thinking aluminium is extracted using a blast furnace — aluminium is more reactive than carbon so cannot be reduced by carbon.",
        ],
        recap: [
          "State why cryolite is added to aluminium oxide during electrolysis.",
          "Explain why the carbon anodes in the aluminium extraction cell must be replaced periodically.",
        ],
      },
    ],
  },
];
