import type { Chapter } from "./types";

const IMG = "/notes/chemistry";

function artPanel(items: { src: string; alt: string; caption: string }[]) {
  const tiles = items
    .map((it, i) => {
      // An odd final tile takes the whole row; the artwork sits on the same cream it was
      // drawn on, so containing it loses nothing.
      const solo = items.length % 2 === 1 && i === items.length - 1;
      return `<figure class="m-0 min-w-0${solo ? " sm:col-span-2" : ""}">
        <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/${it.src}" alt="${it.alt}" loading="lazy" class="aspect-square w-full object-cover${solo ? " sm:aspect-[2/1] sm:object-contain" : ""}" /></div>
        <figcaption class="mt-2.5 text-center text-[13px] font-bold text-zinc-100">${it.caption}</figcaption>
      </figure>`;
    })
    .join("");
  return `:::raw
<div class="overflow-hidden rounded-2xl bg-[#1b1d1f] px-4 py-5 sm:px-8 sm:py-8">
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">${tiles}</div>
</div>
:::`;
}

const atomicArt = artPanel([
  {
    src: "ch02-atom-structure.webp",
    alt: "Cutaway atom with a central nucleus and electrons on orbit rings",
    caption: "A nucleus and its electron shells",
  },
  {
    src: "ch02-isotopes-carbon.webp",
    alt: "Two carbon nuclei, one heavier than the other, with orbit rings",
    caption: "Same protons, different neutrons",
  },
]);

const latticeArt = artPanel([
  {
    src: "ch02-ionic-lattice.webp",
    alt: "A repeating cubic checkerboard of alternating charged spheres",
    caption: "Alternating ions in a lattice",
  },
  {
    src: "ch02-covalent-dot-and-cross.webp",
    alt: "Two overlapping circles sharing dots and crosses",
    caption: "Contrast: covalent shares electrons",
  },
]);

const giantCovalentArt = artPanel([
  {
    src: "ch02-graphite-layers.webp",
    alt: "Stacked hexagonal sheets with arrows showing them sliding apart",
    caption: "Layers that slide easily",
  },
  {
    src: "ch02-fullerene-buckyball.webp",
    alt: "A hollow spherical cage of pentagons and hexagons",
    caption: "Buckminsterfullerene C60 cage",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Atoms, Elements and Compounds",
  intro: `Everything you observe in chemistry begins inside the atom.\n\nThe nucleus fixes what element you have, while the electrons in the outer shell decide how atoms bond.\n\nThis chapter runs from subatomic particles and isotopes through electronic configuration, then builds ionic, covalent and metallic bonding.\n\nFinally it links each structure to the properties we measure, such as melting point and conductivity.`,
  subheadings: [
    {
      title: "Atoms, Isotopes and Relative Atomic Mass",
      body: `## The Particles Inside an Atom

Every atom is a tiny **nucleus** of **protons** and **neutrons**, ringed by **electrons** in shells. The nucleus carries almost all the mass and all the positive charge.

| Particle | Relative mass | Relative charge | Position |
| --- | --- | --- | --- |
| Proton | 1 | +1 | nucleus |
| Neutron | 1 | 0 | nucleus |
| Electron | about 1/1836 | \u22121 | shells |

Electrons are so light that their mass is usually ignored in mass calculations.

## Counting Particles

The **atomic (proton) number** is the number of protons, and it fixes which element you have. The **mass (nucleon) number** is protons plus neutrons.

So neutrons equal the mass number minus the atomic number. A neutral atom holds equal protons and electrons, so the charges cancel exactly.

Ions form when electrons are lost or gained, breaking that balance.

## Isotopes

**Isotopes** are atoms of the same element with different numbers of neutrons. Carbon-12 has 6 protons and 6 neutrons; carbon-14 has 6 protons and 8 neutrons.

Both have the same proton number, so both are carbon. Their electron arrangements match, so their chemical behaviour matches.

## Relative Atomic Mass

The **relative atomic mass (Ar)** is the weighted average of an element's isotopes as they occur naturally.

Multiply each mass number by its abundance, add the results, then divide by 100.

For chlorine: (35 \u00d7 75) + (37 \u00d7 25) = 3550, and 3550 \u00f7 100 gives 35.5.

That non-whole value reveals a mixture of isotopes, not a single atom.`,
      figure: atomicArt,
      groups: [
        {
          subTitle: "Subatomic Particles and the Nucleus",
          bullets: [
            "**Proton:** relative charge +1, relative mass 1, found in the nucleus.",
            "**Neutron:** relative charge 0, relative mass 1, found in the nucleus.",
            "**Electron:** relative charge \u22121, relative mass about 1/1836, in shells around the nucleus.",
            "The proton and neutron are called **nucleons** because both sit in the nucleus.",
            "The nucleus is very small compared with the atom, so most of an atom is empty space.",
          ],
        },
        {
          subTitle: "Atomic Number, Mass Number and Ions",
          bullets: [
            "**Atomic number** = number of protons, and it identifies the element.",
            "**Mass number** = number of protons plus neutrons.",
            "Number of neutrons = mass number \u2212 atomic number.",
            "A neutral atom has equal protons and electrons, so it has **no overall charge**.",
            "**Losing** electrons gives a **positive ion (cation)**; **gaining** electrons gives a **negative ion (anion)**.",
            "For calcium-40 (mass 40, atomic number 20): 20 protons, 20 neutrons, 20 electrons.",
          ],
        },
        {
          subTitle: "Isotopes Explained",
          bullets: [
            "Isotopes of an element have the **same proton number** but **different neutron numbers**.",
            "Carbon-12 and carbon-14 are isotopes: both have 6 protons, but 6 versus 8 neutrons.",
            "Isotopes have the **same number of electrons**, so their chemical properties are identical.",
            "Different masses give some **different physical properties**, such as diffusion rate and density.",
          ],
        },
        {
          subTitle: "Calculating Relative Atomic Mass",
          bullets: [
            "**Ar** is the weighted average of the naturally occurring isotopes of an element.",
            "Formula: Ar = [(mass1 \u00d7 abundance1) + (mass2 \u00d7 abundance2)] divided by 100.",
            "Chlorine is 75% chlorine-35 and 25% chlorine-37, giving Ar = 35.5.",
            "An Ar that is **not a whole number** shows that a mixture of isotopes is present.",
            "Keep abundances as percentages and check the answer lies between the mass numbers.",
          ],
        },
      ],
      examinerTips: [
        "State all three values for a particle question: relative mass, relative charge and position. Giving only two leaves a mark on the table.",
        "For an ion-counting question, work out the protons and neutrons first, then apply the charge to the electrons.",
        "When defining isotopes, use the words **same proton number** and **different neutron number**; saying different mass numbers alone is weaker.",
        "For a relative atomic mass question, show the full working with the abundances, then quote the answer to one decimal place.",
      ],
      commonMistakes: [
        "Saying isotopes differ in electrons or charge. They differ only in neutrons, while electrons stay equal.",
        "Thinking isotopes have different chemical properties. Identical electron shells mean identical chemical behaviour.",
        "Reporting a relative atomic mass as a whole number when the data clearly give 35.5.",
        "Forgetting that an atom is neutral, so the atomic number equals the electron number.",
      ],
      recap: [
        "State the relative mass and relative charge of a proton, a neutron and an electron. [6]",
        "An atom of aluminium has atomic number 13 and mass number 27. Give its numbers of protons, neutrons and electrons. [3]",
        "Define the term isotope and name one pair of carbon isotopes. [3]",
        "Explain why isotopes of the same element have identical chemical properties. [2]",
        "Neon is 90% neon-20 and 10% neon-22. Calculate its relative atomic mass, showing your working. [3]",
      ],
    },
    {
      title: "Electrons, Shells and the Periodic Table",
      body: `## Filling the Shells

Electrons occupy **shells**, the first holding **2** and the next two holding **8** each. Shells fill from the innermost outward before the next begins.

Sodium, with 11 electrons, is written as configuration **2,8,1**.

## Configuration Fixes Position

The **outer-shell electrons** equal the **group number** for groups 1 to 7. The **number of occupied shells** equals the **period number**.

| Element | Atomic number | Configuration | Group | Period |
| --- | --- | --- | --- | --- |
| Sodium | 11 | 2,8,1 | 1 | 3 |
| Magnesium | 12 | 2,8,2 | 2 | 3 |
| Chlorine | 17 | 2,8,7 | 7 | 3 |
| Argon | 18 | 2,8,8 | 0 | 3 |
| Calcium | 20 | 2,8,8,2 | 2 | 4 |

So sodium sits in period 3 with a single outer electron in group 1.

## The Group Pattern

Every element in a group shares the same count of outer electrons. That shared arrangement gives group members strikingly similar chemistry.

Group 1 metals all lose one electron; group 7 elements all gain one. Down group 1 the metals react more violently with water and air.

The extra shells push the outer electron further from the nucleus. Attraction weakens, so the single electron is lost more readily.

## Argon and Group 0

Argon reaches **2,8,8** with a full outer shell. A complete shell has no tendency to gain, lose or share electrons.

That full shell explains the unreactive, stable nature of the noble gases.`,
      groups: [
        {
          subTitle: "Writing Electronic Configurations",
          bullets: [
            "The first shell holds a maximum of 2 electrons, and shells 2 and 3 hold a maximum of 8 each.",
            "Fill the shells from the inside out before starting the next.",
            "Examples: carbon is 2,4; oxygen is 2,6; sodium is 2,8,1; calcium is 2,8,8,2.",
            "Argon is 2,8,8, a full outer shell, which is why it is very unreactive.",
            "The atomic number tells you how many electrons to arrange in the shells.",
          ],
        },
        {
          subTitle: "Finding Group and Period",
          bullets: [
            "**Group number** equals the number of electrons in the outer shell.",
            "**Period number** equals the number of occupied shells.",
            "An element with configuration 2,8,7 sits in group 7 and period 3.",
            "Elements in the same group have the same outer-shell electron count.",
          ],
        },
      ],
      examinerTips: [
        "Answer a group question with outer electrons and a period question with occupied shells; do not mix the two, as each earns its own mark.",
        "For why reactivity increases down group 1, give the full chain: more shells, outer electron further away, weaker attraction, easier to lose.",
        "Say outer-shell (valence) electrons, not all electrons, when you link a configuration to a group number.",
      ],
      commonMistakes: [
        "Claiming the group equals the total electron count. It equals the **outer-shell** electron count.",
        "Drawing the third shell beyond 8 at IGCSE, though 18 is technically allowed later.",
        "Placing an element in the period of its outer-shell count rather than its occupied-shell count.",
        "Forgetting that group 0 (noble gases) have full outer shells and so are largely unreactive.",
      ],
      recap: [
        "Give the electronic configuration of chlorine, atomic number 17. [1]",
        "State the group and period of an element with configuration 2,8,2, and name it. [3]",
        "Explain why all group 1 elements react in a similar way. [2]",
        "The metals of group 1 react more vigorously with water as you go down the group. Explain why. [4]",
        "Use the configuration of argon to explain why it is unreactive. [2]",
      ],
    },
    {
      title: "Ionic Bonding: Transferring Electrons",
      body: `## Why Metals Give and Non-metals Take

Ionic bonds form between a **metal** and a **non-metal**. The metal transfers one or more outer electrons to the non-metal.

Both ions then reach a stable noble-gas electron arrangement.

## The Sodium to Chlorine Reaction

Sodium (**2,8,1**) loses its single outer electron to become **Na⁺** (**2,8**). Chlorine (**2,8,7**) gains that electron to become **Cl⁻** (**2,8,8**).

Opposite charges then pull the two ions together strongly.

## The Electrostatic Bond

The ionic bond is the **strong electrostatic force of attraction** between oppositely charged ions. This attraction acts in all directions between the ions.

## The Dot-and-Cross for Magnesium Oxide

Magnesium (**2,8,2**) loses its two outer electrons (shown as crosses) to oxygen (**2,6**), which keeps six dots.

Both ions reach the noble-gas arrangement **2,8**, so magnesium carries 2+ and the oxide ion 2−.

Draw each ion in **square brackets** with its charge written just outside the bracket.

## The Other Formulas

The ion charges fix the ratio in every ionic formula.

| Compound | Metal ion | Non-metal ion | Ratio |
| --- | --- | --- | --- |
| MgO | Mg²⁺ | O²⁻ | 1 : 1 |
| CaCl₂ | Ca²⁺ | Cl⁻ | 1 : 2 |
| Na₂O | Na⁺ | O²⁻ | 2 : 1 |
| LiF | Li⁺ | F⁻ | 1 : 1 |

Total positive charge always balances the total negative charge.`,
      groups: [
        {
          subTitle: "Formation of Ions",
          bullets: [
            "Metals **lose** outer electrons to form **positive ions** with a noble-gas configuration.",
            "Non-metals **gain** electrons to form **negative ions** with a full outer shell.",
            "**Group 1** metals lose 1 electron to give **1+** ions, such as Na⁺ and K⁺.",
            "**Group 2** metals lose 2 electrons to give **2+** ions, such as Mg²⁺ and Ca²⁺.",
            "**Group 7** non-metals gain 1 electron to give **1\u2212** ions, such as Cl⁻ and F⁻.",
            "Oxygen, in group 6, gains 2 electrons to form **O²⁻**.",
          ],
        },
        {
          subTitle: "Dot-and-Cross and Charge Balance",
          bullets: [
            "MgO: magnesium loses 2 electrons so the oxide ion reaches a full shell of 8.",
            "CaCl₂: calcium loses 2 electrons, passing one to each of two chlorines.",
            "Na₂O: two sodium atoms each lose 1 electron, which one oxygen gains.",
            "LiF: lithium loses 1 electron and fluorine gains that single electron.",
            "Put **brackets** around every ion and write the **charge** outside the bracket.",
            "A dot-and-cross diagram usually shows only the **outer-shell** electrons.",
          ],
        },
      ],
      examinerTips: [
        "Use the exact phrase **strong electrostatic force of attraction between oppositely charged ions**. Examiners reward the word electrostatic.",
        "For a dot-and-cross question, draw brackets and charges for every ion and place the transferred electrons on the non-metal.",
        "Derive a formula from ion charges by balancing them; state the charges explicitly to earn method marks.",
        "Say a metal atom loses electrons to form a positive ion; never say it gains or shares.",
      ],
      commonMistakes: [
        "Drawing electron transfer between the nuclei instead of the outer electrons.",
        "Writing a formula by swapping numbers, such as CaCl for CaCl₂.",
        "Naming the ionic bond a shared pair of electrons. That is covalent, not ionic.",
        "Forgetting the square brackets and the charge when drawing an ion.",
      ],
      recap: [
        "Explain how sodium and chlorine form sodium chloride, using electronic configurations. [4]",
        "Define an ionic bond in terms of electrostatic attraction. [2]",
        "Describe the dot-and-cross arrangement in MgO and Na₂O, giving each ion charge. [4]",
        "State the charges on the ions formed by group 1, group 2 and group 7 elements. [3]",
        "Deduce the formula of the compound formed from calcium and fluorine, and explain your reasoning. [3]",
      ],
    },
    {
      title: "The Giant Ionic Lattice and Its Properties",
      body: `## No Molecules, Only a Lattice

In a solid ionic compound the ions are **not** paired off as single molecules. They pack into a **giant ionic lattice**, a regular three-dimensional arrangement.

The pattern repeats with oppositely charged ions touching all around.

## Strong Forces Everywhere

Each positive ion is surrounded by negative ions, and the reverse. Enormous numbers of strong electrostatic attractions act throughout the structure.

Melting means weakening enough of those attractions for the ions to slide. That demands a lot of energy, which is why melting points are **high**.

The force grows sharply with ion charge. Magnesium oxide, with Mg²⁺ and O²⁻, melts far above sodium chloride.

## When Ionic Solids Conduct

A solid ionic compound **cannot conduct** because its ions are locked in place. When **molten** or **dissolved**, the lattice breaks down and the ions become free to move.

Mobile ions carry the charge to the electrodes, so conduction resumes. Other typical properties are hardness, brittleness, and solubility in water.`,
      figure: latticeArt,
      groups: [
        {
          subTitle: "The Structure",
          bullets: [
            "A **giant ionic lattice** is a huge three-dimensional regular arrangement of alternating ions.",
            "There are no discrete molecules, so NaCl is a ratio, not a molecule.",
            "Ions of opposite charge sit as close together as possible in every direction.",
            "The lattice is held together by many strong electrostatic attractions.",
          ],
        },
        {
          subTitle: "Properties Explained by the Lattice",
          bullets: [
            "**High melting and boiling points:** much energy overcomes the many strong attractions.",
            "**No conduction as a solid:** the ions are fixed in the lattice and cannot move.",
            "**Conduction when molten or aqueous:** free-moving ions carry the charge.",
            "**Hard but brittle:** a force shifts layers so like charges meet and repel, splitting the crystal.",
            "**Solubility:** many ionic compounds dissolve in polar water.",
          ],
        },
      ],
      examinerTips: [
        "Always give the reason, not just the property: high melting point **because** many strong electrostatic forces must be overcome.",
        "For a conductivity question, compare all three states: solid, molten and aqueous.",
        "Use **ions**, not electrons, as the charge carriers in ionic conduction.",
        "When comparing MgO with NaCl melting points, cite the higher ion charges causing stronger attraction.",
      ],
      commonMistakes: [
        "Claiming solid sodium chloride conducts because it contains ions; the ions cannot move in a solid.",
        "Saying weak bonds are broken on melting. The strong electrostatic attractions are what is overcome.",
        "Naming electrons as the moving charge. In ionic conduction the moving charge is the ion.",
        "Describing discrete NaCl molecules rather than a continuous lattice.",
      ],
      recap: [
        "Describe the structure of an ionic compound such as sodium chloride. [3]",
        "Explain why ionic compounds have high melting points. [3]",
        "Explain why solid sodium chloride does not conduct but molten sodium chloride does. [4]",
        "Magnesium oxide melts at a far higher temperature than sodium chloride. Suggest why. [3]",
      ],
    },
    {
      title: "Covalent Bonding: Simple Molecular Structures",
      body: `## Sharing Instead of Transferring

Covalent bonds form between **non-metal** atoms that each need electrons. Neither atom can give one away, so both **share** pairs of electrons.

Each shared pair counts toward the full outer shell of both atoms.

## Single, Double and Triple Bonds

Hydrogen (**H₂**) shares one pair, so each hydrogen fills its first shell with 2. Chlorine (**Cl₂**) shares one pair while keeping three lone pairs on each atom.

Oxygen (**O₂**) shares **two** pairs, a double bond, to give each oxygen an octet. Nitrogen (**N₂**) shares **three** pairs, a strong triple bond that makes it unreactive.

In a dot-and-cross diagram the shared pair is one dot plus one cross.

| Molecule | Shared pairs | Bond | Lone pairs on the central atom |
| --- | --- | --- | --- |
| H₂ | 1 | single | none |
| Cl₂ | 1 | single | 3 on each chlorine |
| H₂O | 2 | single | 2 on oxygen |
| NH₃ | 3 | single | 1 on nitrogen |
| CH₄ | 4 | single | none on carbon |
| O₂ | 2 | double | 2 on each oxygen |
| N₂ | 3 | triple | 1 on each nitrogen |

## Low Melting and Boiling Points

Simple molecular substances melt and boil at low temperatures. Only the **weak intermolecular forces** between molecules are overcome, never the strong covalent bonds.

Small molecules and weak forces need little energy to separate.

## Never Conducting

Covalent molecules carry **no charged particles**. There are no free electrons or ions to carry a current. They therefore do not conduct in any state.`,
      groups: [
        {
          subTitle: "Reading the Dot-and-Cross Diagrams",
          bullets: [
            "**H₂:** one shared pair, giving each hydrogen a full first shell.",
            "**Cl₂:** one shared pair plus three lone pairs on each chlorine.",
            "**H₂O:** two shared pairs and two lone pairs on oxygen, giving a bent shape.",
            "**NH₃:** three shared pairs and one lone pair on nitrogen, giving a pyramidal shape.",
            "**CH₄:** four shared pairs and no lone pairs on carbon, giving a tetrahedral shape.",
            "**O₂:** two shared pairs (a double bond); **N₂:** three shared pairs (a triple bond).",
          ],
        },
        {
          subTitle: "Simple Molecular Structure",
          bullets: [
            "A simple molecular substance is made of **discrete molecules** held by strong covalent bonds inside.",
            "Between the molecules act only **weak intermolecular forces**.",
            "Melting overcomes the weak intermolecular forces, **not** the covalent bonds.",
            "Low melting and boiling points follow because little energy is needed.",
            "They do not conduct, because there are no ions and no free electrons.",
          ],
        },
      ],
      examinerTips: [
        "The phrase **weak intermolecular forces are overcome, not the strong covalent bonds** is exactly what a low-melting-point mark wants.",
        "Show every lone pair for Cl₂, H₂O and NH₃ in a dot-and-cross diagram, as missing lone pairs lose marks.",
        "Match bond order to electrons: one shared pair is single, two is double, three is triple.",
      ],
      commonMistakes: [
        "Saying covalent bonds break on melting or boiling. Only the intermolecular forces are overcome.",
        "Leaving lone pairs out of a dot-and-cross diagram, especially on chlorine in Cl₂.",
        "Giving a low melting point because the covalent bonds are weak. The covalent bonds are strong.",
        "Drawing two dots or two crosses in one shared pair. Each bond is one dot plus one cross.",
      ],
      recap: [
        "Describe the dot-and-cross arrangement of electrons in H₂O, NH₃ and CH₄. [6]",
        "State the number of shared pairs in O₂ and in N₂. [2]",
        "Explain why simple molecular substances have low melting and boiling points. [4]",
        "Explain why a simple molecular substance such as methane does not conduct electricity. [2]",
      ],
    },
    {
      title: "Giant Covalent Structures and Fullerenes",
      body: `## Giant, Not Molecular

Diamond, graphite and silicon dioxide are **giant covalent structures**. Every atom is joined to its neighbours by strong covalent bonds.

These bonds extend through the whole crystal, not just between single molecules.

## Diamond

In diamond each carbon bonds to **four** others in a rigid tetrahedral lattice. The many strong bonds make diamond the hardest known natural substance.

There are no free electrons, so diamond does not conduct. Cutting glass and industrial drilling exploit that extreme hardness.

## Graphite

Graphite joins each carbon to only **three** others, forming flat hexagonal layers. The layers are held by weak forces, so they slide easily, giving a slippery **lubricant**.

One electron per carbon is **delocalised** between the layers and moves freely. That mobile charge makes graphite a good conductor and suits it for **electrodes**.

## Silicon Dioxide

Each silicon in silicon dioxide bonds to four oxygens in a giant tetrahedral network. Like diamond it is very hard, with a very high melting point.

## Fullerenes

**Fullerenes** are carbon molecules such as buckminsterfullerene, **C₆₀**, a hollow ball of 60 atoms. The cage gives a large surface area and useful nanotechnology applications.

**Nanotubes** are rolled fullerene sheets, extremely strong and good conductors of electricity. They are used in composites, electronics and targeted drug delivery.`,
      figure: giantCovalentArt,
      groups: [
        {
          subTitle: "Diamond, Graphite and Silicon Dioxide",
          bullets: [
            "Diamond: **each carbon forms 4 covalent bonds**, giving a rigid tetrahedral structure.",
            "Diamond is very hard and has a very high melting point, but does not conduct.",
            "Graphite: **each carbon forms 3 covalent bonds**, leaving one delocalised electron.",
            "Graphite conducts, feels slippery as its layers slide, and is used for electrodes and lubrication.",
            "Silicon dioxide (sand, SiO₂) is a giant tetrahedral network, very hard with a high melting point.",
          ],
        },
        {
          subTitle: "Fullerenes and Nanotubes",
          bullets: [
            "C₆₀ (buckminsterfullerene) is a hollow sphere of 60 carbon atoms in a football shape.",
            "Fullerenes have relatively **low melting points** as their molecules are held by weak forces.",
            "Nanotubes are very long, thin hollow cylinders with high tensile strength.",
            "Their large surface area makes fullerenes useful as catalysts and drug-delivery carriers.",
            "Nanotubes conduct along their length, so they are used in electronics and strong composites.",
          ],
        },
      ],
      examinerTips: [
        "Tie every property to a named structural feature: graphite conducts because of **delocalised electrons**, diamond is hard because of **four strong covalent bonds** per carbon.",
        "State clearly whether covalent bonds are broken on melting. Giant covalent substances break strong bonds, so they have high melting points.",
        "For graphite give both effects: weak forces let layers slide, and delocalised electrons allow conduction.",
      ],
      commonMistakes: [
        "Calling diamond a giant ionic structure. It is covalent throughout.",
        "Saying graphite conducts from ions. Conduction is by delocalised electrons.",
        "Thinking fullerenes are giant covalent solids. C₆₀ is molecular with weak intermolecular forces.",
        "Mixing up the three bonds per carbon in graphite with the four in diamond.",
      ],
      recap: [
        "Compare the bonding and structure of diamond and graphite. [5]",
        "Explain why graphite conducts electricity while diamond does not. [4]",
        "Explain why silicon dioxide has a very high melting point, referring to its structure. [3]",
        "Describe the structure of buckminsterfullerene, C₆₀, and name one use of fullerenes or nanotubes. [3]",
      ],
    },
    {
      title: "Metallic Bonding",
      body: `## Metal Ions and a Sea of Electrons

A metal is a **lattice of positive ions** surrounded by a **sea of delocalised electrons**. The outer electrons detach from their atoms and move freely through the structure.

Strong electrostatic attraction between those ions and the electron sea is the **metallic bond**.

## Why Metals Bend

The layers of ions can **slide** over one another without breaking the structure. The electron sea keeps the whole lattice bonded as the layers shift.

This makes metals **malleable**, able to be hammered into sheets. The same slipping, along a wire, explains why they are **ductile**.

## Why Metals Conduct

Delocalised electrons move through the solid and carry charge to the electrodes. That is why a metal conducts even while solid.

Free electrons also transfer kinetic energy quickly, making metals good **thermal conductors**. Bond strength also gives high melting points and general strength.

## Comparing the Three Bonding Types

| Bonding | Particles | What melting overcomes | Melting point | Conducts? |
| --- | --- | --- | --- | --- |
| Ionic | oppositely charged ions | strong electrostatic forces | high | only molten or aqueous |
| Simple covalent | molecules | weak intermolecular forces | low | never |
| Giant covalent | atoms | many strong covalent bonds | very high | usually no, graphite does |
| Metallic | positive ions and electrons | strong metallic bonds | high | yes, solid and molten |

For full marks, name the particle that moves before you explain the effect.`,
      groups: [
        {
          subTitle: "The Structure",
          bullets: [
            "A metal is a **regular lattice of positive ions** in a **sea of delocalised electrons**.",
            "The metallic bond is the strong electrostatic attraction between the ions and the electrons.",
            "The delocalised electrons come from the outer shell of each metal atom.",
            "This bonding is present in solid metals and in their molten state.",
          ],
        },
        {
          subTitle: "Properties Explained by the Bond",
          bullets: [
            "**Electrical conduction:** mobile delocalised electrons carry charge through the metal.",
            "**Malleability:** ion layers slide without breaking the non-directional electron-sea bond.",
            "**Ductility:** the same sliding lets a metal be drawn into wires.",
            "**Thermal conduction:** free electrons transfer kinetic energy through the solid.",
            "Strong metallic bonds give high melting points and good strength.",
          ],
        },
      ],
      examinerTips: [
        "State the bonding as **lattice of positive ions in a sea of delocalised electrons**, then explain a property from it.",
        "For malleability, name the sliding of layers and add that the metallic bond is maintained.",
        "For conductivity, name the particle, the delocalised electron, as the charge carrier.",
      ],
      commonMistakes: [
        "Saying metals conduct from mobile ions. The charge carriers are electrons.",
        "Confusing malleable (hammered into sheets) with ductile (drawn into wires).",
        "Naming electrons as the moving charge in an ionic compound.",
        "Forgetting to connect a property to a structural feature, such as sliding layers or mobile electrons.",
      ],
      recap: [
        "Describe the bonding in a metal in terms of positive ions and delocalised electrons. [2]",
        "Explain how metallic bonding accounts for the malleability of metals. [3]",
        "Explain why metals conduct electricity as solids. [2]",
        "Contrast the conductivity of a metal with that of an ionic solid and a simple molecular substance. [4]",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_2: Chapter = chapterTwo;
