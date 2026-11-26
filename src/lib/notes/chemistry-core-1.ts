import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Chemistry (0620) Core Notes
 * Chapters 1–7: States of Matter & Atomic Structure / Chemical Bonding
 */
export const CHEMISTRY_CORE_PART1: Chapter[] = [
  {
    number: 1,
    title: "States of Matter",
    section: "1. States of matter",
    topic: "Solids, Liquids, Gases & Diffusion",
    intro:
      "Matter exists in three physical states: solid, liquid, and gas. The kinetic particle theory explains the properties of each state in terms of particle arrangement, movement, and energy.",
    subheadings: [
      {
        title: "Solids, Liquids and Gases",
        figure: "![States of Matter diagram showing solid, liquid and gas particle arrangements with state change arrows](/notes/chemistry/chem-01-states-of-matter.jpg)",
        body:
          "The three fundamental states of matter differ in their macroscopic properties and particle behaviour:\n\n" +
          "- **Solids:** Have a fixed shape and fixed volume. Particles are tightly packed in a regular lattice arrangement, vibrating about fixed positions. Attractive forces between particles are strong.\n" +
          "- **Liquids:** Have a fixed volume but take the shape of the container. Particles are closely packed but arranged irregularly and can slide past one another. Attractive forces are moderately strong.\n" +
          "- **Gases:** Have no fixed shape and no fixed volume (expand to fill any container). Particles are very far apart, moving randomly and rapidly in all directions. Attractive forces between particles are negligible.\n\n" +
          "**Changes of State:**\n" +
          "- **Melting:** Solid $\\to$ Liquid (particles gain kinetic energy and vibrate more vigorously until breaking free from fixed positions).\n" +
          "- **Boiling / Evaporation:** Liquid $\\to$ Gas. Boiling happens at a specific boiling point throughout the liquid with bubbles; evaporation occurs at any temperature from the surface only.\n" +
          "- **Condensation:** Gas $\\to$ Liquid (particles lose kinetic energy and move closer together).\n" +
          "- **Freezing / Solidification:** Liquid $\\to$ Solid (particles lose energy and become locked in a fixed lattice).\n" +
          "- **Sublimation:** Solid $\\to$ Gas directly without melting (e.g. iodine, dry ice / solid carbon dioxide).",
        groups: [
          {
            subTitle: "Comparison of States of Matter",
            bullets: [
              "**Solid:** Regular lattice arrangement; vibrates around fixed points; cannot be compressed.",
              "**Liquid:** Random arrangement; moves past one another; negligible compressibility.",
              "**Gas:** Random, widely spaced; moves rapidly in random directions; easily compressed.",
            ],
          },
        ],
        examinerTips: [
          "State clearly that boiling occurs at a fixed temperature throughout the whole liquid, whereas evaporation occurs at the surface at any temperature below the boiling point.",
          "When describing particle movement in solids, use the word 'vibrate' — never say particles are completely stationary.",
        ],
        commonMistakes: [
          "Confusing boiling with evaporation — boiling produces vapour bubbles throughout the liquid at a single temperature.",
          "Claiming that particles themselves expand or shrink during heating or cooling — only the spaces between particles change.",
        ],
        recap: [
          "Describe the arrangement and motion of particles in a liquid compared to a gas.",
          "State the name of the change of state when solid iodine turns directly into a purple vapour.",
        ],
      },
      {
        title: "Diffusion",
        figure: "![Diffusion and Brownian Motion diagram showing gas diffusion rate comparison and smoke cell random collisions](/notes/chemistry/chem-02-diffusion-brownian-motion.jpg)",
        body:
          "**Diffusion** is the net movement of particles from a region of higher concentration to a region of lower concentration down a concentration gradient, resulting from the random motion of particles.\n\n" +
          "**Evidence for Diffusion:**\n" +
          "- **In liquids:** Placing a crystal of potassium manganate(VII) at the bottom of a beaker of water results in the purple colour slowly spreading throughout the liquid without stirring.\n" +
          "- **In gases:** Opening a bottle of perfume in a room allows the scent to be detected across the room as gas particles collide randomly with air molecules and spread out.\n\n" +
          "Diffusion is much faster in gases than in liquids because gas particles move much faster and have huge spaces between them.",
        examinerTips: [
          "Always mention 'random movement of particles' and 'from higher to lower concentration' when defining diffusion.",
          "Diffusion does not require stirring or shaking — it is driven entirely by thermal kinetic energy.",
        ],
        commonMistakes: [
          "Saying diffusion happens because particles 'want to spread out' — particles have no intent; it is purely random motion.",
          "Thinking diffusion happens in solids — particles in solids only vibrate and cannot move from place to place.",
        ],
        recap: [
          "Define the term diffusion.",
          "Explain why diffusion is much faster in air than in water.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Elements, Compounds and Mixtures",
    section: "2. Atoms, elements and compounds",
    topic: "Classifying Chemical Substances",
    intro:
      "All substances can be classified as elements, compounds, or mixtures based on their chemical composition and bonding.",
    subheadings: [
      {
        title: "Elements, Compounds and Mixtures",
        body:
          "Chemical substances are classified into three fundamental categories:\n\n" +
          "- **Element:** A pure substance that consists of only one type of atom and cannot be broken down into simpler substances by chemical means. Examples: iron (Fe), oxygen (O₂), copper (Cu).\n" +
          "- **Compound:** A substance formed from two or more different elements chemically bonded together in fixed proportions. Compounds have different properties from their constituent elements and can only be separated by chemical reactions. Examples: water (H₂O), sodium chloride (NaCl), carbon dioxide (CO₂).\n" +
          "- **Mixture:** Two or more substances (elements or compounds) physically mixed together but not chemically bonded. The components retain their individual properties and can be separated by physical separation techniques (e.g. filtration, distillation). Examples: air, sea water, brass.",
        groups: [
          {
            subTitle: "Key Differences: Compound vs Mixture",
            bullets: [
              "**Composition:** Compounds have a fixed ratio of elements (e.g. H₂O is always 2:1); mixtures have variable composition.",
              "**Properties:** Compounds have unique properties different from their elements; mixtures show properties of their constituents.",
              "**Separation:** Compounds require chemical reactions to break bonds; mixtures can be separated by physical methods.",
            ],
          },
        ],
        examinerTips: [
          "State that air is a mixture of elements (nitrogen, oxygen, argon) and compounds (carbon dioxide, water vapour).",
          "Remember that heating iron and sulfur forms iron(II) sulfide (FeS), which is a compound and cannot be separated by a magnet.",
        ],
        commonMistakes: [
          "Calling a diatomic element like O₂ a compound because it has two atoms — it is an element because both atoms are the same type.",
          "Confusing physical mixing with chemical bonding.",
        ],
        recap: [
          "Distinguish between an element and a compound.",
          "State two physical differences between a mixture of iron and sulfur and the compound iron(II) sulfide.",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Atomic Structure and the Periodic Table",
    section: "2. Atoms, elements and compounds",
    topic: "Subatomic Particles & Electron Configuration",
    intro:
      "Atoms are the basic building blocks of chemistry. They consist of a dense central nucleus surrounded by electrons arranged in distinct shells.",
    subheadings: [
      {
        title: "Structure of the Atom",
        body:
          "An atom consists of a tiny, dense **central nucleus** containing **protons** and **neutrons**, surrounded by **electrons** orbiting in energy levels (electron shells).\n\n" +
          "| Particle | Relative Mass | Relative Charge | Location |\n" +
          "|----------|---------------|-----------------|----------|\n" +
          "| Proton ($p$) | 1 | $+1$ | Nucleus |\n" +
          "| Neutron ($n$) | 1 | $0$ (neutral) | Nucleus |\n" +
          "| Electron ($e^-$) | $\\frac{1}{1840}$ (negligible) | $-1$ | Shells orbiting nucleus |\n\n" +
          "Because the number of protons equals the number of electrons in an atom, atoms have **no overall electric charge** (they are electrically neutral).",
        examinerTips: [
          "State relative mass of an electron as 'almost 0' or '1/1840', never zero.",
          "The nucleus contains almost all of the atom's mass, but occupies a tiny fraction of its total volume.",
        ],
        commonMistakes: [
          "Confusing proton number with nucleon number.",
          "Thinking neutrons have a charge — they are neutral (0).",
        ],
        recap: [
          "State the relative charge and relative mass of: (a) a proton, (b) a neutron, (c) an electron.",
          "Explain why atoms are electrically neutral.",
        ],
      },
      {
        title: "Proton Number and Nucleon Number",
        body:
          "**Proton Number ($Z$, atomic number):** The number of protons in the nucleus of an atom. It determines the identity of the element and its position in the Periodic Table.\n\n" +
          "**Nucleon Number ($A$, mass number):** The total number of protons and neutrons in the nucleus of an atom.\n\n" +
          "$$\\text{Number of neutrons} = \\text{Nucleon number } (A) - \\text{Proton number } (Z)$$\n\n" +
          "**Nuclide notation:** $^{A}_{Z}\\text{X}$\n" +
          "For example, $^{23}_{11}\\text{Na}$ has 11 protons, 11 electrons, and $23 - 11 = 12$ neutrons.",
        examinerTips: [
          "The smaller number in the Periodic Table entry is always the proton number ($Z$).",
          "Number of electrons in a neutral atom is always equal to the proton number.",
        ],
        commonMistakes: [
          "Subtracting electrons to find neutrons — subtract proton number from nucleon number.",
        ],
        recap: [
          "Deduce the number of protons, neutrons, and electrons in an atom of $^{35}_{17}\\text{Cl}$.",
        ],
      },
      {
        title: "Electronic Configuration",
        body:
          "Electrons occupy **energy levels (shells)** around the nucleus. The shells fill from the innermost shell outward:\n\n" +
          "- **1st shell:** holds up to 2 electrons.\n" +
          "- **2nd shell:** holds up to 8 electrons.\n" +
          "- **3rd shell:** holds up to 8 electrons (for elements 1 to 20).\n\n" +
          "**Examples:**\n" +
          "- Carbon ($Z = 6$): $2, 4$\n" +
          "- Sodium ($Z = 11$): $2, 8, 1$\n" +
          "- Chlorine ($Z = 17$): $2, 8, 7$\n" +
          "- Calcium ($Z = 20$): $2, 8, 8, 2$\n\n" +
          "**Connection to the Periodic Table:**\n" +
          "- **Group number** = number of outer-shell (valence) electrons.\n" +
          "- **Period number** = number of occupied electron shells.",
        examinerTips: [
          "Check your electron configuration by adding the numbers: they must equal the proton number (e.g. $2 + 8 + 7 = 17$).",
          "Group VIII / 0 noble gases have full outer shells (2 for helium, 8 for others), making them unreactive.",
        ],
        commonMistakes: [
          "Putting more than 2 electrons in the first shell.",
          "Confusing the group number (columns) with the period number (rows).",
        ],
        recap: [
          "Write the electronic configuration for: (a) oxygen ($Z=8$), (b) magnesium ($Z=12$), (c) potassium ($Z=19$).",
          "Explain what the group number of an element tells you about its electronic structure.",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Isotopes",
    section: "2. Atoms, elements and compounds",
    topic: "Isotopes & Chemical Properties",
    intro:
      "Isotopes are varieties of an element that have different masses due to different numbers of neutrons, but share identical chemical properties.",
    subheadings: [
      {
        title: "Isotopes",
        body:
          "**Definition:** Isotopes are atoms of the same element that have the **same number of protons** (same atomic number) but **different numbers of neutrons** (different nucleon / mass numbers).\n\n" +
          "**Examples of Isotopes:**\n" +
          "- Carbon: $^{12}_{6}\\text{C}$ (6 neutrons), $^{13}_{6}\\text{C}$ (7 neutrons), $^{14}_{6}\\text{C}$ (8 neutrons).\n" +
          "- Hydrogen: $^{1}_{1}\\text{H}$ (protium, 0 neutrons), $^{2}_{1}\\text{H}$ (deuterium, 1 neutron), $^{3}_{1}\\text{H}$ (tritium, 2 neutrons).\n" +
          "- Chlorine: $^{35}_{17}\\text{Cl}$ (18 neutrons) and $^{37}_{17}\\text{Cl}$ (20 neutrons).\n\n" +
          "**Chemical Properties:** Isotopes of an element have **identical chemical properties** because chemical reactions depend on the number and arrangement of outer-shell electrons, which is the same in all isotopes of that element.\n\n" +
          "**Physical Properties:** Isotopes have slightly different physical properties (such as density, boiling point, and diffusion rate) because of their difference in mass.",
        examinerTips: [
          "Always state: isotopes have the same chemical properties because they have the same number of outer-shell electrons.",
          "Memorise the definition: 'atoms of the same element with the same number of protons but different numbers of neutrons'.",
        ],
        commonMistakes: [
          "Saying isotopes have different numbers of electrons — neutral isotopes have the exact same number of electrons.",
          "Claiming isotopes have different chemical reactivities.",
        ],
        recap: [
          "Define the term isotopes.",
          "Explain why $^{35}_{17}\\text{Cl}$ and $^{37}_{17}\\text{Cl}$ have identical chemical reactions.",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Ions and Ionic Bonding",
    section: "2. Atoms, elements and compounds",
    topic: "Formation of Ions & Ionic Compounds",
    intro:
      "Ionic bonding occurs when electrons are transferred from metals to non-metals, producing oppositely charged ions held together by strong electrostatic forces.",
    subheadings: [
      {
        title: "Formation of Ions",
        body:
          "Atoms gain or lose electrons to achieve a stable, full outer shell of electrons (noble gas configuration):\n\n" +
          "- **Positive ions (Cations):** Formed when metal atoms **lose** electrons. Examples:\n" +
          "  - Group I: $\\text{Na} \\to \\text{Na}^+ + e^-$ (electron config: $2,8,1 \\to [2,8]^+$)\n" +
          "  - Group II: $\\text{Mg} \\to \\text{Mg}^{2+} + 2e^-$ (electron config: $2,8,2 \\to [2,8]^{2+}$)\n" +
          "  - Group III: $\\text{Al} \\to \\text{Al}^{3+} + 3e^-$\n" +
          "- **Negative ions (Anions):** Formed when non-metal atoms **gain** electrons. Examples:\n" +
          "  - Group VII: $\\text{Cl} + e^- \\to \\text{Cl}^-$ (electron config: $2,8,7 \\to [2,8,8]^-$, chloride ion)\n" +
          "  - Group VI: $\\text{O} + 2e^- \\to \\text{O}^{2-}$ (oxide ion)\n" +
          "  - Group V: $\\text{N} + 3e^- \\to \\text{N}^{3-}$ (nitride ion)",
        examinerTips: [
          "Metals lose electrons to form positive ions; non-metals gain electrons to form negative ions.",
          "When drawing ions, always enclose in square brackets with the charge at the top right: $[\\text{Na}]^+$, $[\\text{Cl}]^-$.",
        ],
        commonMistakes: [
          "Thinking that gaining electrons makes an ion positive — electrons are negative, so gaining them creates a negative charge.",
          "Forgetting to change the suffix of non-metal ions to '-ide' (chlorine becomes chloride, oxygen becomes oxide).",
        ],
        recap: [
          "State the charge and electron configuration of: (a) a sodium ion, (b) an oxide ion.",
          "Explain why magnesium forms an ion with a $2+$ charge.",
        ],
      },
      {
        title: "Ionic Bonding and Properties",
        body:
          "**Ionic Bond Definition:** An ionic bond is the **strong electrostatic attraction between oppositely charged ions**.\n\n" +
          "**Giant Ionic Lattice:**\n" +
          "Ionic compounds do not exist as isolated molecules. Instead, they form a **giant three-dimensional lattice** of alternating positive and negative ions held tightly by electrostatic forces acting in all directions.\n\n" +
          "**Physical Properties of Ionic Compounds:**\n" +
          "1. **High melting and boiling points:** Strong electrostatic attractions throughout the giant lattice require a large amount of thermal energy to overcome.\n" +
          "2. **Solubility in water:** Most ionic compounds dissolve readily in water because polar water molecules can separate and hydrate the ions.\n" +
          "3. **Electrical conductivity:**\n" +
          "   - **Solid:** Does **not** conduct electricity because ions are locked in fixed positions in the lattice and cannot move.\n" +
          "   - **Molten or Aqueous solution:** **Conducts** electricity because the ionic lattice breaks down and ions are free to move and carry charge.",
        examinerTips: [
          "Never say 'electrons carry charge' in ionic conductivity — charge is carried by mobile **ions**.",
          "Always describe the structure as a 'giant ionic lattice', not a molecule.",
        ],
        commonMistakes: [
          "Claiming ionic compounds conduct when solid — the ions are fixed in position.",
          "Saying ionic compounds conduct because 'electrons are free' — it is the **ions** that move.",
        ],
        recap: [
          "Define the term ionic bond.",
          "Explain why sodium chloride conducts electricity when molten but not when solid.",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Simple Molecules and Covalent Bonding",
    section: "2. Atoms, elements and compounds",
    topic: "Covalent Bonds & Simple Molecular Structures",
    intro:
      "Covalent bonding occurs between non-metal atoms that share pairs of electrons to achieve stable electronic configurations, forming simple molecules.",
    subheadings: [
      {
        title: "Covalent Bonding in Simple Molecules",
        body:
          "**Covalent Bond Definition:** A covalent bond is formed when **a pair of electrons is shared between two non-metal atoms**, leading to noble gas electronic configurations.\n\n" +
          "The bond is held together by the electrostatic attraction between the positive nuclei of both atoms and the shared pair of negative electrons.\n\n" +
          "**Key Simple Molecules (Dot-and-Cross):**\n" +
          "- **Hydrogen ($\\text{H}_2$):** One shared pair (single bond: $\\text{H}-\\text{H}$).\n" +
          "- **Chlorine ($\\text{Cl}_2$):** One shared pair (single bond: $\\text{Cl}-\\text{Cl}$), each atom has 6 unshared outer electrons.\n" +
          "- **Hydrogen chloride ($\\text{HCl}$):** One shared pair between H and Cl.\n" +
          "- **Water ($\\text{H}_2\\text{O}$):** Oxygen shares two pairs (one with each H); oxygen has two lone pairs.\n" +
          "- **Methane ($\\text{CH}_4$):** Carbon shares four pairs (one with each of four H atoms).\n" +
          "- **Ammonia ($\\text{NH}_3$):** Nitrogen shares three pairs (one with each of three H atoms) and has one lone pair.",
        examinerTips: [
          "In dot-and-cross diagrams, use dots for electrons of one atom and crosses for the other to show origin clearly.",
          "Remember that hydrogen atoms only need 2 electrons (a duet) to fill their first shell.",
        ],
        commonMistakes: [
          "Forgetting to draw the non-bonding lone pairs on chlorine, oxygen, or nitrogen.",
          "Showing ions instead of shared electrons when bonding two non-metals.",
        ],
        recap: [
          "Define a covalent bond.",
          "State how many pairs of electrons are shared in a molecule of methane ($\\text{CH}_4$).",
        ],
      },
      {
        title: "Properties of Simple Covalent Substances",
        body:
          "Substances with simple molecular structures have distinct physical properties:\n\n" +
          "1. **Low melting and boiling points:** Usually gases, liquids, or low-melting solids at room temperature. Although the covalent bonds inside molecules (intramolecular) are very strong, the forces between separate molecules (**intermolecular forces**) are weak. Very little thermal energy is needed to overcome these weak intermolecular forces.\n" +
          "2. **Poor electrical conductors:** They do not conduct electricity in any state because they have **no mobile ions or delocalised electrons** to carry an electrical charge.\n" +
          "3. **Insoluble in water (mostly):** Most covalent molecular substances are insoluble in water, though they dissolve in organic solvents (e.g. ethanol, hexane).",
        examinerTips: [
          "Always distinguish between 'strong covalent bonds' (inside the molecule) and 'weak intermolecular forces' (between molecules).",
          "Boiling water breaks weak intermolecular forces between H₂O molecules — it does NOT break the covalent O-H bonds.",
        ],
        commonMistakes: [
          "Saying covalent bonds are broken when water boils — only intermolecular forces break.",
          "Stating covalent compounds conduct electricity because they have electrons — all electrons are localized in bonds or shells.",
        ],
        recap: [
          "Explain why oxygen ($\\text{O}_2$) has a very low boiling point.",
          "State why liquid water does not conduct electricity well.",
        ],
      },
    ],
  },
  {
    number: 7,
    title: "Giant Covalent Structures and Metallic Bonding",
    section: "2. Atoms, elements and compounds",
    topic: "Diamond, Graphite, Silica & Metals",
    intro:
      "Giant structures consist of billions of atoms linked by strong covalent or metallic bonds throughout a continuous network.",
    subheadings: [
      {
        title: "Giant Covalent Structures (Diamond, Graphite & Silicon(IV) Oxide)",
        body:
          "**Giant covalent structures (macromolecules)** contain millions of atoms bonded covalently in a continuous three-dimensional network.\n\n" +
          "**1. Diamond:**\n" +
          "- Each carbon atom is bonded to **four other carbon atoms** in a rigid tetrahedral arrangement.\n" +
          "- Properties: extremely hard; very high melting point; does not conduct electricity (no free electrons).\n" +
          "- Uses: cutting tools, drill bits, engraving equipment, jewellery.\n\n" +
          "**2. Graphite:**\n" +
          "- Each carbon atom is bonded to **three other carbon atoms** forming flat hexagonal layers.\n" +
          "- Between the layers are weak intermolecular forces, allowing layers to slide over each other.\n" +
          "- Each carbon has one spare valence electron that becomes **delocalised** along the layers.\n" +
          "- Properties: soft and slippery; high melting point; **conducts electricity**.\n" +
          "- Uses: lubricant, pencil lead, electrodes in electrolysis.\n\n" +
          "**3. Silicon(IV) oxide (Silica, $\\text{SiO}_2$):**\n" +
          "- Each silicon atom is bonded to 4 oxygen atoms; each oxygen is bonded to 2 silicon atoms.\n" +
          "- Similar tetrahedral structure to diamond: hard, very high melting point, non-conductor.",
        examinerTips: [
          "Graphite conducts electricity because each carbon atom has one delocalised electron free to move through the layers.",
          "Diamond is hard because of its rigid 3D tetrahedral network with four strong covalent bonds per carbon.",
        ],
        commonMistakes: [
          "Saying diamond conducts electricity — all 4 valence electrons are locked in covalent bonds.",
          "Confusing the weak forces between graphite layers with weak covalent bonds — covalent bonds in graphite are very strong.",
        ],
        recap: [
          "Explain why graphite conducts electricity while diamond does not.",
          "Describe how the structure of graphite makes it suitable for use as a solid lubricant.",
        ],
      },
      {
        title: "Metallic Bonding",
        body:
          "**Metallic Bond Definition:** Metallic bonding is the **electrostatic attraction between positive metal ions and a sea of delocalised electrons**.\n\n" +
          "**Structure:** Metal atoms lose their outer shell electrons to become positive ions packed closely in regular layers within a 'sea' or cloud of freely moving (delocalised) electrons.\n\n" +
          "**Properties of Metals:**\n" +
          "1. **Good electrical and thermal conductors:** Delocalised electrons are free to move throughout the structure carrying electric charge and thermal energy.\n" +
          "2. **Malleable and ductile:** The regular layers of positive ions can **slide past one another** when a force is applied without breaking the metallic bond (the electron sea adjusts).\n" +
          "3. **High melting and boiling points:** Strong electrostatic forces between positive ions and the delocalised electron sea require substantial energy to overcome.",
        examinerTips: [
          "Use the exact phrasing: 'layers of ions can slide over each other' to explain malleability.",
          "Remember: delocalised electrons carry charge in metals, NOT ions.",
        ],
        commonMistakes: [
          "Saying 'atoms slide over each other' — in a metal lattice, it is the positive **ions** that slide.",
          "Confusing metallic conductivity (delocalised electrons) with electrolytic conductivity (mobile ions).",
        ],
        recap: [
          "Describe metallic bonding in terms of ions and electrons.",
          "Explain why copper is malleable and a good conductor of electricity.",
        ],
      },
    ],
  },
];
