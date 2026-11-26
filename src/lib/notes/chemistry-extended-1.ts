import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Chemistry (0620) Extended Notes
 * Chapters 1–7: States of Matter, Atomic Structure, Isotopes, Ionic, Covalent, Macromolecular & Metallic Bonding
 */
export const CHEMISTRY_EXTENDED_PART1: Chapter[] = [
  {
    number: 1,
    title: "States of Matter & Kinetic Particle Theory",
    section: "1. States of matter",
    topic: "Solids, Liquids, Gases, Heating Curves & Diffusion",
    intro:
      "Kinetic particle theory models all states of matter as particles in constant motion. At Extended level, this explains heating curves and the quantitative relationship between relative molecular mass and rate of diffusion.",
    subheadings: [
      {
        title: "Kinetic Theory and Heating / Cooling Curves",
        body:
          "**Particle Behaviour in the Three States:**\n" +
          "- **Solids:** Regular 3D lattice, strong interparticle attractions, particles vibrate about fixed positions. Kinetic energy increases with temperature until melting point.\n" +
          "- **Liquids:** Irregular packing, particles touch but have enough kinetic energy to overcome some attractive forces and slide past each other.\n" +
          "- **Gases:** Negligible intermolecular forces, particles separated by large distances, moving rapidly and randomly in straight lines between elastic collisions.\n\n" +
          "**Heating and Cooling Curves:**\n" +
          "When a pure solid is heated at a constant rate:\n" +
          "1. **Solid heating:** Temperature rises as particles gain kinetic energy and vibrate faster.\n" +
          "2. **Melting plateau (horizontal line):** Temperature remains **constant** while melting occurs. Thermal energy absorbed is used to **overcome attractive forces** between particles rather than increasing kinetic energy.\n" +
          "3. **Liquid heating:** Once completely melted, temperature rises again as liquid particles gain kinetic energy.\n" +
          "4. **Boiling plateau (horizontal line):** Temperature stays constant at the boiling point while thermal energy breaks all remaining intermolecular attractions.\n" +
          "5. **Gas heating:** Gas temperature rises.",
        examinerTips: [
          "Explain the flat/horizontal regions on a heating or cooling curve: 'energy is used to overcome attractive forces between particles, so kinetic energy and temperature do not change'.",
          "A sharp melting/boiling point indicates a pure substance; impurities lower the melting point and cause melting over a range of temperatures.",
        ],
        commonMistakes: [
          "Saying temperature rises during melting — temperature remains strictly constant until phase change is complete.",
          "Confusing breaking bonds between particles with breaking chemical bonds inside molecules.",
        ],
        recap: [
          "Explain why the temperature does not change while ice is melting at $0°\\text{C}$.",
          "Sketch a cooling curve for liquid water turning into ice and label the freezing point.",
        ],
      },
      {
        title: "Diffusion and Effect of Molecular Mass (Mr)",
        body:
          "**Diffusion** is the net spreading out of particles from an area of higher concentration to an area of lower concentration down a concentration gradient as a result of their random motion.\n\n" +
          "**Effect of Relative Molecular Mass ($M_r$) on Diffusion:**\n" +
          "Gases with **lower relative molecular mass ($M_r$)** diffuse **faster** than gases with higher $M_r$ at the same temperature, because lighter molecules have higher average speeds for the same kinetic energy (Graham's Law principle).\n\n" +
          "**The Classic $\\text{NH}_3$ vs $\\text{HCl}$ Diffusion Tube Experiment:**\n" +
          "- A long glass tube is set up with cotton wool soaked in concentrated aqueous ammonia ($\\text{NH}_3, M_r = 17$) at one end, and cotton wool soaked in concentrated hydrochloric acid ($\\text{HCl}, M_r = 36.5$) at the other.\n" +
          "- $\\text{NH}_3\\text{(g)}$ and $\\text{HCl(g)}$ diffuse towards each other along the tube.\n" +
          "- Where they meet, they react to form a white ring of ammonium chloride:\n" +
          "  $$\\text{NH}_3\\text{(g)} + \\text{HCl(g)} \\to \\text{NH}_4\\text{Cl(s)}$$\n" +
          "- The white ring forms **closer to the $\\text{HCl}$ end** because $\\text{NH}_3$ has a lower $M_r$ ($17 < 36.5$) and therefore diffuses faster.",
        examinerTips: [
          "Always calculate $M_r$ when comparing diffusion rates of gases: lower $M_r$ = faster diffusion.",
          "State clearly: 'Ammonia has a lower relative molecular mass, so its particles travel faster and cover a greater distance in the same time.'",
        ],
        commonMistakes: [
          "Stating the white ring forms in the middle of the tube — it forms closer to the heavier HCl gas.",
        ],
        recap: [
          "Nitrogen gas ($\\text{N}_2, M_r = 28$) and chlorine gas ($\\text{Cl}_2, M_r = 71$) are released at opposite ends of a tube. Predict which gas diffuses faster and explain why.",
          "Write the balanced equation for the reaction that produces the white ring in the ammonia-hydrogen chloride diffusion experiment.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Atomic Structure & The Periodic Table",
    section: "2. Atoms, elements and compounds",
    topic: "Subatomic Particles, Electron Energy Levels & Periodic Trends",
    intro:
      "The structure of an atom determines its chemical properties. At Extended level, electron arrangements directly explain the structure and group trends of the Periodic Table.",
    subheadings: [
      {
        title: "Subatomic Structure and Electronic Configurations",
        body:
          "**Subatomic Constituents:**\n" +
          "- Protons: mass = 1, charge = $+1$, inside nucleus.\n" +
          "- Neutrons: mass = 1, charge = $0$, inside nucleus.\n" +
          "- Electrons: mass = $\\frac{1}{1840}$ (negligible), charge = $-1$, in energy levels.\n\n" +
          "**Proton number ($Z$)** = number of protons in an atom (defines the element).\n" +
          "**Nucleon number ($A$)** = total protons + neutrons.\n\n" +
          "**Electronic Configuration (Elements 1 to 20):**\n" +
          "Shell 1 (max 2) $\\to$ Shell 2 (max 8) $\\to$ Shell 3 (max 8) $\\to$ Shell 4 (elements 19–20).\n" +
          "- Potassium ($Z=19$): $2, 8, 8, 1$\n" +
          "- Calcium ($Z=20$): $2, 8, 8, 2$\n\n" +
          "**Periodic Relationships:**\n" +
          "- Number of valence (outer) electrons = **Group number** (determines valency and chemical reactivity).\n" +
          "- Number of occupied shells = **Period number** (determines atomic radius).",
        examinerTips: [
          "Elements in the same group have identical numbers of outer electrons and therefore exhibit similar chemical reactions.",
        ],
        commonMistakes: [
          "Confusing period number (horizontal rows) with group number (vertical columns).",
        ],
        recap: [
          "State the electronic configuration of phosphorus ($Z=15$) and use it to identify its group and period.",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Isotopes & Calculating Relative Atomic Mass",
    section: "2. Atoms, elements and compounds",
    topic: "Isotopic Abundances & Ar Calculations",
    intro:
      "Naturally occurring elements consist of mixtures of isotopes. At Extended level, relative atomic mass is calculated from percentage isotopic abundances.",
    subheadings: [
      {
        title: "Calculating Relative Atomic Mass (Ar)",
        body:
          "**Definition of Isotopes:** Atoms of the same element with the same number of protons but different numbers of neutrons. They have identical chemical properties due to the same electron configuration.\n\n" +
          "**Relative Atomic Mass ($A_r$):**\n" +
          "The weighted average mass of naturally occurring atoms of an element on a scale where an atom of $^{12}\\text{C}$ has a mass of exactly 12.\n\n" +
          "$$\\text{Relative atomic mass } (A_r) = \\frac{\\sum (\\text{mass of isotope} \\times \\text{percentage abundance})}{100}$$\n\n" +
          "**Example 1 — Chlorine:**\n" +
          "Naturally occurring chlorine is $75\\%$ $^{35}\\text{Cl}$ and $25\\%$ $^{37}\\text{Cl}$:\n" +
          "$$A_r = \\frac{(35 \\times 75) + (37 \\times 25)}{100} = \\frac{2625 + 925}{100} = \\frac{3550}{100} = 35.5$$\n\n" +
          "**Example 2 — Copper:**\n" +
          "Copper is $69.17\\%$ $^{63}\\text{Cu}$ and $30.83\\%$ $^{65}\\text{Cu}$:\n" +
          "$$A_r = \\frac{(63 \\times 69.17) + (65 \\times 30.83)}{100} = \\frac{4357.71 + 2003.95}{100} = 63.6$$",
        examinerTips: [
          "Always show the working: multiply each isotope mass by its percentage, sum them, and divide by 100.",
          "$A_r$ is a weighted average, so the calculated value should lie between the masses of the isotopes.",
        ],
        commonMistakes: [
          "Dividing by the number of isotopes (e.g. dividing by 2) instead of 100.",
          "Rounding $A_r$ to a whole number when the question asks for 1 decimal place.",
        ],
        recap: [
          "A sample of boron contains $20\\%$ $^{10}\\text{B}$ and $80\\%$ $^{11}\\text{B}$. Calculate the relative atomic mass of boron.",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Ions, Ionic Bonding & Lattice Structure",
    section: "2. Atoms, elements and compounds",
    topic: "Ionic Compounds & Giant Electrostatic Lattices",
    intro:
      "Ionic bonding involves the transfer of electrons from metallic elements to non-metallic elements, generating strong electrostatic attractions throughout a giant lattice.",
    subheadings: [
      {
        title: "Ionic Bonding, Lattice Structure and Properties",
        body:
          "**Formation of Ionic Bonds:**\n" +
          "Electrons are transferred from metal atoms to non-metal atoms so both achieve stable noble gas octets.\n" +
          "- Example: $\\text{Mg} (2,8,2) + \\text{O} (2,6) \\to \\text{Mg}^{2+} [2,8] + \\text{O}^{2-} [2,8]$\n\n" +
          "**Giant Ionic Lattice:**\n" +
          "A regular, repeating 3D arrangement of alternating positive and negative ions. Each ion is surrounded by oppositely charged ions held together by strong, non-directional electrostatic forces acting in all dimensions.\n\n" +
          "**Explaining Properties from Structure:**\n" +
          "1. **High melting point:** Substantial thermal energy is required to overcome the very strong electrostatic attractions between oppositely charged ions throughout the giant lattice.\n" +
          "2. **Lattice charge density effect:** $\\text{MgO}$ ($2+, 2-$) has a much higher melting point ($2852°\\text{C}$) than $\\text{NaCl}$ ($1+, 1-$, $801°\\text{C}$) because higher ionic charges produce much stronger electrostatic attractions.\n" +
          "3. **Electrical conductivity:**\n" +
          "   - Solid: Non-conductor because ions are held firmly in fixed positions in the lattice and cannot move.\n" +
          "   - Molten / Aqueous: Conducts electricity because the lattice breaks down and ions are mobile to migrate towards electrodes carrying current.",
        examinerTips: [
          "Compare lattice strengths: ions with higher charges (e.g. Mg²⁺ and O²⁻) attract much more strongly than ions with single charges (Na⁺ and Cl⁻), giving higher melting points.",
        ],
        commonMistakes: [
          "Saying electrons conduct electricity in molten salts — charge is carried by mobile **ions**.",
        ],
        recap: [
          "Explain why magnesium oxide has a significantly higher melting point than sodium chloride.",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Covalent Bonding in Simple Molecules",
    section: "2. Atoms, elements and compounds",
    topic: "Single, Double & Triple Covalent Bonds, Intermolecular Forces",
    intro:
      "Covalent bonds involve shared electron pairs. The Extended syllabus covers multiple covalent bonds in diatomic gases, organic molecules, and explains volatility.",
    subheadings: [
      {
        title: "Multiple Bonds and Complex Simple Molecules",
        body:
          "**Covalent Bond:** Electrostatic attraction between positive nuclei and shared pairs of negative electrons.\n\n" +
          "**Multiple Covalent Bonds:**\n" +
          "- **Oxygen ($\\text{O}_2$):** Two shared pairs (double bond: $\\text{O}=\\text{O}$); each atom retains two lone pairs.\n" +
          "- **Nitrogen ($\\text{N}_2$):** Three shared pairs (triple bond: $\\text{N}\\equiv\\text{N}$); very strong bond making $\\text{N}_2$ extremely unreactive.\n" +
          "- **Carbon dioxide ($\\text{CO}_2$):** Carbon shares two pairs of electrons with each of two oxygen atoms (two double bonds: $\\text{O}=\\text{C}=\\text{O}$).\n" +
          "- **Ethene ($\\text{C}_2\\text{H}_4$):** One carbon-carbon double bond ($\\text{C}=\\text{C}$) and four carbon-hydrogen single bonds.\n" +
          "- **Methanol ($\\text{CH}_3\\text{OH}$):** Carbon bonded to three H atoms and one O atom; O is bonded to one H atom.\n\n" +
          "**Explaining Volatility & Melting Points:**\n" +
          "Simple molecular substances have low melting/boiling points and are volatile because intermolecular forces between molecules are weak. These weak forces require minimal energy to overcome, even though the covalent bonds inside the molecule remain intact.",
        examinerTips: [
          "Nitrogen's triple bond explains why nitrogen gas is so unreactive at room temperature: enormous energy is needed to break the N≡N triple bond.",
        ],
        commonMistakes: [
          "Drawing single bonds for O₂ or N₂ — oxygen has a double bond, nitrogen has a triple bond.",
        ],
        recap: [
          "State the number of shared pairs of electrons in a molecule of nitrogen ($\\text{N}_2$).",
          "Explain in terms of structure and bonding why methanol ($\\text{CH}_3\\text{OH}$) is a liquid at room temperature with a low boiling point.",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Giant Covalent Substances (Macromolecules)",
    section: "2. Atoms, elements and compounds",
    topic: "Diamond, Graphite, Silicon(IV) Oxide Structures",
    intro:
      "Macromolecules consist of continuous networks of covalently bonded atoms. Their properties stem directly from structural geometry and electron delocalisation.",
    subheadings: [
      {
        title: "Giant Covalent Structures and Silicon(IV) Oxide",
        body:
          "**1. Diamond:**\n" +
          "- Each carbon is bonded to 4 others tetrahedrally.\n" +
          "- All 4 valence electrons are localized in strong single covalent bonds.\n" +
          "- Hardest natural substance, electrical insulator, very high melting point ($>3500°\\text{C}$).\n\n" +
          "**2. Graphite:**\n" +
          "- Each carbon is bonded to 3 others in flat hexagonal layers (bond angle $120°$).\n" +
          "- The 4th electron from each carbon is **delocalised** within the layer.\n" +
          "- Delocalised electrons move freely along layers, allowing graphite to conduct electricity.\n" +
          "- Layers are held by weak intermolecular forces, enabling them to slide over one another $\\to$ soft and slippery solid lubricant.\n\n" +
          "**3. Silicon(IV) oxide ($\\text{SiO}_2$, Silica):**\n" +
          "- Each silicon atom is covalently bonded to **4 oxygen atoms**; each oxygen atom is bonded to **2 silicon atoms**.\n" +
          "- Forms a rigid 3D giant tetrahedral macromolecular network identical in geometry to diamond.\n" +
          "- Properties: very hard, very high melting point ($~1700°\\text{C}$), non-conductor of electricity.",
        examinerTips: [
          "Know the bonding numbers for silica: Si is bonded to 4 O atoms; O is bonded to 2 Si atoms (ratio 1:2, giving the formula SiO₂).",
        ],
        commonMistakes: [
          "Thinking silica consists of individual SiO₂ molecules — it is a giant covalent macromolecule.",
        ],
        recap: [
          "Describe the structure and bonding of silicon(IV) oxide and explain why it has a very high melting point.",
        ],
      },
    ],
  },
  {
    number: 7,
    title: "Metallic Bonding & Metal Properties",
    section: "2. Atoms, elements and compounds",
    topic: "Delocalised Electron Sea & Mechanical Properties",
    intro:
      "Metallic bonding is the electrostatic attraction between positive metal cations and mobile delocalised electrons, explaining electrical conductivity and ductility.",
    subheadings: [
      {
        title: "Metallic Lattice and Mechanical Properties",
        body:
          "**Structure:** A regular array of positive metal ions (cations) surrounded by a 'sea' of mobile, delocalised valence electrons.\n\n" +
          "**Explaining Properties:**\n" +
          "1. **Electrical Conductivity:** When a voltage is applied, delocalised electrons drift towards the positive terminal, conducting electrical current through the metal.\n" +
          "2. **Thermal Conductivity:** Delocalised electrons absorb kinetic energy and rapidly transfer heat throughout the lattice via collisions.\n" +
          "3. **Malleability and Ductility:** Metal ions are arranged in regular layers. When stress or force is applied, these layers of ions can **slide over one another** into new positions without shattering, because the flexible sea of delocalised electrons maintains electrostatic attraction in all positions.",
        examinerTips: [
          "Full marks for malleability require: 'layers of positive ions can slide past each other without breaking the metallic bond'.",
        ],
        commonMistakes: [
          "Calling the particles in a metal 'atoms' when describing layer sliding — they are positive ions.",
        ],
        recap: [
          "Describe metallic bonding and explain why metals can be bent and shaped without breaking.",
        ],
      },
    ],
  },
];
