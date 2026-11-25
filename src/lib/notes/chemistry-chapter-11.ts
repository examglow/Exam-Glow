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

// Six syllabus illustrations in exactly three panels of two tiles. Each panel is
// attached to one subheading's figure; the labelled SVG diagrams are placed in the
// same figure field so nothing is ever embedded in a body paragraph.
const fundamentalsArt = artPanel([
  {
    src: "ch11-methane-structure.webp",
    alt: "A methane molecule as a central dark sphere with four smaller white spheres on short sticks",
    caption: "Methane: one carbon, four bonds",
  },
  {
    src: "ch11-ethanol-fermentation.webp",
    alt: "A conical flask of bubbling sugar solution with a yeast layer, bunged with an air-lock tube",
    caption: "Ethanol and carbon dioxide from yeast",
  },
]);

const alkenesArt = artPanel([
  {
    src: "ch11-ethene-bromine-test.webp",
    alt: "Two test tubes in a rack, one orange-brown and one colourless, with a dropper",
    caption: "Bromine water turns colourless with an alkene",
  },
  {
    src: "ch11-ethene-polyethylene.webp",
    alt: "A wavy beaded polymer strand of repeating links with short side branches",
    caption: "Ethene links into poly(ethene)",
  },
]);

const crudeOilArt = artPanel([
  {
    src: "ch11-crude-oil-fractionating-column.webp",
    alt: "A tall tapered industrial tower with side outlets feeding small storage tanks",
    caption: "Fractions drawn off by chain length",
  },
  {
    src: "ch11-cracking-apparatus.webp",
    alt: "A horizontal hard-glass tube of ceramic chips heated by a flame, with a delivery tube to a bubbling test tube",
    caption: "Breaking large alkanes into smaller ones",
  },
]);

const chemistryChapterEleven: Chapter = {
  number: 11,
  title: "Organic Chemistry",
  intro: `Organic chemistry is the chemistry of carbon, and carbon builds an almost endless set of molecules by forming four strong covalent bonds.\n\nThis chapter starts with the **fundamental ideas** of formulas and homologous series, then works through the **alkanes**, **alkenes**, **crude oil and cracking**, **alcohols**,\n\nand finally **carboxylic acids, esters and macromolecules**.\n\nEvery family is just carbon's four-bond habit seen from a new angle, so master the pattern and the detail follows.`,
  subheadings: [
    {
      title: "Fundamental Ideas of Organic Chemistry",
      body: `### What Counts as Organic\n\n**Organic compounds are compounds of carbon**, usually bonded to hydrogen, oxygen or nitrogen. A few carbon substances count as inorganic: carbon dioxide, carbon monoxide and the carbonates.\n\nEverything with a carbon skeleton is organic, which is why the subject is so large.\n\n### Carbon Forms Four Bonds\n\nCarbon has four electrons in its outer shell, so it makes **four covalent bonds**. This **tetravalency** lets carbon build chains, rings and branched shapes.\n\nThat single fact explains why millions of organic molecules exist.\n\n### Reading the Different Formulas\n\nA **molecular formula** counts atoms, such as C₂H₆O for ethanol. A **structural formula** shows how the atoms connect, like CH₃-CH₂-OH.\n\nA **displayed formula** draws every atom and every bond. A **general formula** is an algebraic rule for a family, such as CₙH₂ₙ₊₂.\n\n### Homologous Series\n\nA **homologous series** shares one functional group, one general formula and similar chemistry. Successive members differ by a single CH₂ unit.\n\nThis gives a **gradual trend** in boiling point and density.\n\n### Saturated and Unsaturated\n\nA **saturated** compound has only single carbon-carbon bonds and the maximum hydrogen. An **unsaturated** compound has at least one carbon-carbon **double bond**.\n\nThat bond, present or absent, drives the reactions of this chapter.`,
      figure: fundamentalsArt,
      groups: [
        {
          subTitle: "Carbon's Bonding and Its Shapes",
          bullets: [
            "**Four outer electrons** mean carbon always forms four covalent bonds.",
            "Carbon bonds can be single, double, chains, branches or rings.",
            "In methane the four bonds point to the corners of a **tetrahedron**.",
            "Strong carbon-carbon bonds make long chains stable compounds.",
            "Organic chemistry covers carbon, hydrogen and often oxygen or nitrogen.",
          ],
        },
        {
          subTitle: "The Four Formulae Side by Side",
          bullets: [
            "**Molecular formula:** the actual number of each atom in one molecule.",
            "**General formula:** an expression in n for the whole series, like CₙH₂ₙ₊₂.",
            "**Structural formula:** the atoms joined in order, written CH₃-CH₂-OH.",
            "**Displayed formula:** every atom and every bond drawn out.",
            "Ethane's molecular formula is C₂H₆, while its displayed form shows seven bonds.",
          ],
        },
        {
          subTitle: "Homologous Series Explained",
          bullets: [
            "**Same functional group:** each member reacts the same characteristic way.",
            "**Same general formula:** one rule fits every member.",
            "**Differ by CH₂:** consecutive members add one carbon and two hydrogens.",
            "**Gradual physical trend:** boiling point and density rise with chain length.",
            "**Similar chemistry:** chemical properties barely change down the series.",
          ],
        },
      ],
      examinerTips: [
        "Define a homologous series with three features: same functional group, same general formula, and members differing by CH₂.",
        "Add one line on the gradual boiling-point trend to secure the extra mark.",
        "Distinguish saturated and unsaturated by the carbon-carbon bond, not by hydrogen alone.",
        "When asked to draw a displayed formula, show every single bond; a missing bond is a lost mark.",
      ],
      commonMistakes: [
        "Calling carbon dioxide and carbonates organic; the syllabus treats these as inorganic.",
        "Writing CH₃CH₂OH as a displayed formula; that condensed form is structural, not displayed.",
        "Saying a homologous series has identical boiling points; they change gradually.",
        "Confusing the general formula (algebraic) with the molecular formula (a fixed count).",
      ],
      recap: [
        "Define an organic compound and name two carbon substances classed as inorganic. [3]",
        "State how many covalent bonds a carbon atom forms and why this matters. [2]",
        "Describe the three features that define a homologous series. [3]",
        "Define saturated and unsaturated in terms of carbon-carbon bonding. [2]",
      ],
    },
    {
      title: "Alkanes: The Saturated Hydrocarbons",
      body: `### The Alkane Family\n\nAlkanes hold carbon and hydrogen joined by single bonds, so they are **saturated hydrocarbons**. Their general formula is **CₙH₂ₙ₊₂**, and names end in **-ane**.\n\nThe first four are methane CH₄, ethane C₂H₆, propane C₃H₈ and butane C₄H₁₀.\n\n### Complete Combustion\n\nWith plenty of oxygen, an alkane burns to carbon dioxide and water only. Methane burns as **CH₄ + 2O₂ → CO₂ + 2H₂O**.\n\nThe reaction releases energy, which is why alkanes are fuels.\n\n### Incomplete Combustion\n\nLimited oxygen forms carbon monoxide, or even carbon soot, instead of full carbon dioxide. For methane this gives **2CH₄ + 3O₂ → 2CO + 4H₂O**.\n\nCarbon monoxide is toxic because it binds strongly to haemoglobin.\n\n### Substitution with Chlorine\n\nIn sunlight an alkane reacts with chlorine by **substitution**. Methane gives **CH₄ + Cl₂ → CH₃Cl + HCl**, forming chloromethane.\n\nA hydrogen atom is replaced by a chlorine atom.\n\n### Uses of the Small Alkanes\n\nMethane is the main fuel in natural gas. Propane and butane power camping stoves and lighters. Longer alkanes are unreactive, so they suit waxes and lubricating oils.`,
      groups: [
        {
          subTitle: "Naming and Formula",
          bullets: [
            "**Alkane names** take prefixes meth-, eth-, prop-, but- and add **-ane**.",
            "Every alkane obeys **CₙH₂ₙ₊₂**, so pentane must be C₅H₁₂.",
            "The family is saturated, containing only single carbon-carbon bonds.",
            "Methane and ethane are gases; propane and butane liquefy easily.",
            "Alkanes are called **paraffins** because they are fairly unreactive.",
          ],
        },
        {
          subTitle: "Combustion Equations to Recall",
          bullets: [
            "**Complete combustion:** alkane + oxygen → carbon dioxide + water.",
            "Methane burns as **CH₄ + 2O₂ → CO₂ + 2H₂O** with excess air.",
            "**Incomplete combustion** happens when oxygen is limited.",
            "It forms poisonous **carbon monoxide** and sometimes carbon soot.",
            "Carbon monoxide binds haemoglobin, cutting the blood's oxygen carrying.",
          ],
        },
        {
          subTitle: "Substitution and Uses",
          bullets: [
            "**Substitution** needs **ultraviolet light from sunlight** to begin.",
            "In methane plus chlorine, a hydrogen is **replaced** by chlorine.",
            "**CH₄ + Cl₂ → CH₃Cl + HCl** gives chloromethane and hydrogen chloride.",
            "Small alkanes are fuels; large unreactive ones wax and lubricate.",
          ],
        },
      ],
      examinerTips: [
        "Identify an alkane by its -ane ending and confirm it against CₙH₂ₙ₊₂.",
        "For incomplete combustion name both products, carbon monoxide and carbon, and link each to limited oxygen.",
        "Say substitution replaces a hydrogen with a chlorine and always mention sunlight.",
        "Balance combustion by counting oxygen atoms; methane needs two O₂.",
      ],
      commonMistakes: [
        "Writing CₙH₂ₙ for alkanes; that is the alkene formula.",
        "Confusing addition with substitution; alkanes substitute, they never add.",
        "Drawing propane as C₃H₆; propane is C₃H₈.",
        "Saying carbon monoxide forms from too much oxygen; it forms from too little.",
      ],
      recap: [
        "State the general formula of the alkanes and name the first four members. [4]",
        "Write the balanced equation for the complete combustion of methane. [2]",
        "Name two products of incomplete combustion and explain when they form. [3]",
        "Describe the reaction of methane with chlorine, naming the mechanism and a product. [3]",
      ],
    },
    {
      title: "Alkenes: The Unsaturated Hydrocarbons",
      body: `### The Double Bond Defines Alkenes\n\nAlkenes carry at least one carbon-carbon **double bond**, so they are **unsaturated**. Their general formula is **CₙH₂ₙ**, and names end in **-ene**.\n\nThe simplest is ethene **C₂H₄**, written CH₂=CH₂. The double bond is the reactive site for every alkene reaction.\n\n### The Test for Unsaturation\n\nAdd **bromine water** to an alkene and the orange-brown colour turns **colourless**. Bromine adds across the double bond to form a colourless product.\n\nAn alkane gives no change, so the test tells the two apart.\n\n### Addition Reactions\n\nIn **addition** the double bond opens and atoms join both carbons. Ethene plus hydrogen gives ethane: **CH₂=CH₂ + H₂ → CH₃-CH₃**.\n\nThis **hydrogenation** needs a nickel catalyst at about 150 °C. Adding hydrogen chloride gives **CH₃-CH₂Cl**, chloroethane.\n\n### Alkenes Make Polymers\n\nMany ethene molecules add together into long chains of **poly(ethene)**. The double bond lets monomers link, which a saturated alkane cannot do.`,
      figure: alkenesArt,
      groups: [
        {
          subTitle: "Structure and Naming",
          bullets: [
            "Alkenes carry a **C=C double bond**, making them unsaturated.",
            "**CₙH₂ₙ** means two fewer hydrogens than the matching alkane.",
            "Ethene is **C₂H₄**, the simplest alkene and a fruit-ripening hormone.",
            "Propene (C₃H₆) and butene (C₄H₈) follow the same pattern.",
          ],
        },
        {
          subTitle: "The Bromine Water Test",
          bullets: [
            "Bromine water starts as an **orange-brown** colour.",
            "An alkene turns it **colourless** as bromine adds across the double bond.",
            "An alkane leaves the colour unchanged, so the test distinguishes them.",
            "The reaction is an **addition** that breaks the double bond.",
          ],
        },
        {
          subTitle: "Addition Reactions to Know",
          bullets: [
            "**Hydrogenation:** ethene + hydrogen → ethane over a nickel catalyst.",
            "Adding hydrogen chloride gives **chloroethane**, CH₃-CH₂Cl.",
            "Addition opens the double bond so new atoms attach to both carbons.",
            "Many small alkenes add together to build a long-chain polymer.",
          ],
        },
      ],
      examinerTips: [
        "Always write bromine water going from orange-brown to colourless; a wrong start colour loses the mark.",
        "Contrast the tests: an alkene decolourises bromine water, an alkane does not.",
        "Name the nickel catalyst and heat for hydrogenation when asked for the alkane product.",
        "For an addition equation, show the double bond opening and both groups joining the carbons.",
      ],
      commonMistakes: [
        "Using the bromine test on alkanes; it detects unsaturation, so it marks alkenes.",
        "Drawing ethene as CH₃=CH₃; the correct displayed form is CH₂=CH₂.",
        "Thinking hydrogen chloride cannot add to ethene; it does, giving chloroethane.",
        "Confusing hydrogenation with cracking; hydrogenation adds hydrogen, it does not split chains.",
      ],
      recap: [
        "State the general formula of the alkenes and name the simplest member. [2]",
        "Describe how bromine water distinguishes an alkane from an alkene. [3]",
        "Define unsaturated and explain how a double bond enables addition. [3]",
        "Write the equation for the hydrogenation of ethene and name the catalyst. [3]",
      ],
    },
    {
      title: "Crude Oil and Cracking",
      body: `### Crude Oil as a Mixture\n\nCrude oil is a **mixture of hydrocarbons**, mostly alkanes of many chain lengths. It formed over millions of years from ancient sea organisms buried under rock.\n\nDifferent molecule sizes mean different boiling points, which allows separation.\n\n### Fractional Distillation\n\nVaporised oil rises through a column set on a **temperature gradient**. Short chains have low boiling points, so they condense near the cool top.\n\nLong chains condense lower down, close to the hot base. Each tray collects one **fraction** of similar chain length.\n\n### The Fractions and Their Uses\n\nThe refinery-gas fraction heats homes, and petrol fuels cars. Paraffin fuels aircraft, while diesel fuels lorries and buses. Heavy residues become lubricating oil, wax and road-making bitumen.\n\n### Demand for Short Chains\n\nLighter fuels such as petrol are in far higher demand than heavy fractions. Distillation alone cannot meet this demand, which is why cracking exists.\n\n### Cracking Large Molecules\n\n**Cracking** breaks a large alkane into a smaller alkane and an alkene. It uses high temperature with a catalyst, or steam, to split the chain.\n\nThe reaction **C₁₀H₂₂ → C₈H₁₈ + C₂H₄** turns decane into octane and ethene. The value lies in making extra petrol and useful alkenes.`,
      figure: crudeOilArt,
      groups: [
        {
          subTitle: "The Fractions Top to Bottom",
          bullets: [
            "**Refinery gases:** short chains, used for domestic heating.",
            "**Petrol:** fuels car engines, the most demanded fraction.",
            "**Paraffin (kerosene):** used as aircraft fuel.",
            "**Diesel:** used in lorries, buses and some cars.",
            "**Lubricating oil and wax:** heavier coating and machinery fractions.",
            "**Bitumen:** the longest chains, used for road surfacing.",
          ],
        },
        {
          subTitle: "How the Column Separates",
          bullets: [
            "Fractions separate by **chain length**, which sets the boiling point.",
            "Short chains condense **high up** where the column is coolest.",
            "Long chains condense **low down** where the column is hottest.",
            "The column is hottest at the base and coolest towards the top.",
            "Each tray withdraws a narrow range of similar molecules.",
          ],
        },
        {
          subTitle: "Cracking: Why and How",
          bullets: [
            "Cracking turns useless **long alkanes** into smaller valuable ones.",
            "It yields a smaller **alkane** plus an **alkene**, such as ethene.",
            "Conditions are **high temperature with a catalyst** or steam.",
            "Ethene from cracking feeds the making of polymers.",
            "Cracking lifts the petrol yield beyond plain distillation.",
          ],
        },
      ],
      examinerTips: [
        "Say fractions separate by boiling point, and that boiling point rises with chain length.",
        "Match each fraction to a named use; petrol, paraffin and diesel each carry a mark.",
        "Give cracking's products as one smaller alkane and one alkene, then a balanced equation.",
        "Explain cracking's economics: demand for short chains outstrips the supply from distillation.",
      ],
      commonMistakes: [
        "Saying fractions separate by melting point; separation uses boiling points.",
        "Claiming the top of the column is hottest; the base is hottest and the top coolest.",
        "Writing cracking products as two alkanes; one product must be an alkene.",
        "Confusing fractional distillation (physical) with cracking (chemical decomposition).",
      ],
      recap: [
        "Explain how fractional distillation separates crude oil into fractions. [4]",
        "Name the fraction used for aircraft fuel and say why it collects high in the column. [2]",
        "Write a balanced equation for cracking decane into octane and ethene. [2]",
        "Explain why cracking is carried out in oil refineries. [3]",
      ],
    },
    {
      title: "Alcohols",
      body: `### The Hydroxyl Group\n\nAlcohols carry the **hydroxyl group -OH** as their functional group. Ethanol is **C₂H₅OH**, a member of the alcohol series. The -OH group gives alcohols their shared chemistry.\n\n### Making Ethanol by Fermentation\n\n**Fermentation** turns glucose into ethanol and carbon dioxide using **yeast**. The equation is **C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂**. Yeast supplies the enzyme **zymase**, which catalyses the change.\n\nConditions must be **anaerobic** and warm, at about **30-40 °C**. Too hot and the enzymes denature, so the reaction stops.\n\n### Making Ethanol by Hydration\n\n**Hydration** adds steam to ethene over a **phosphoric acid catalyst**. The reaction **C₂H₄ + H₂O → C₂H₅OH** runs hot and under pressure.\n\nIt is **reversible**, so the conditions give a compromise yield.\n\n### Separating and Using Ethanol\n\nFermentation broth is dilute, so ethanol is concentrated by **distillation**. Ethanol boils near 78 °C, below water, so it comes over first.\n\nEthanol burns cleanly, so it fuels cars and is a solvent in perfumes.`,
      groups: [
        {
          subTitle: "Structure and the Series",
          bullets: [
            "Every alcohol has an **-OH hydroxyl group** on a carbon.",
            "Ethanol is written **C₂H₅OH** or CH₃-CH₂-OH.",
            "The general alcohol formula is CₙH₂ₙ₊₁OH.",
            "Methanol, CH₃OH, is the simplest alcohol.",
          ],
        },
        {
          subTitle: "Fermentation Versus Hydration",
          bullets: [
            "**Fermentation:** glucose → ethanol + carbon dioxide, using yeast.",
            "It needs **anaerobic** conditions and about **30-40 °C**.",
            "The enzyme **zymase** in yeast catalyses fermentation.",
            "**Hydration:** C₂H₄ + H₂O → C₂H₅OH with a catalyst.",
            "Hydration uses **phosphoric acid**, heat and high pressure.",
            "Hydration is **reversible**; fermentation is not easily reversed.",
          ],
        },
        {
          subTitle: "Isolation and Uses",
          bullets: [
            "Dilute ethanol is separated from water by **distillation**.",
            "Ethanol's lower boiling point means it vaporises first.",
            "Ethanol is a **biofuel**, burned in cars to release energy.",
            "As a **solvent**, it dissolves perfumes, flavourings and medicines.",
          ],
        },
      ],
      examinerTips: [
        "Give all three fermentation conditions: yeast, absence of air, and warmth around 30-40 °C.",
        "Balance fermentation as C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; the two and two are mark-bearing.",
        "For hydration name the phosphoric acid catalyst and note the reaction is reversible.",
        "Say ethanol is purified by distillation, using the difference in boiling points.",
      ],
      commonMistakes: [
        "Giving fermentation a high temperature; it fails above about 40 °C as enzymes denature.",
        "Calling zymase a living organism; zymase is the enzyme, yeast is the organism.",
        "Confusing the -OH hydroxyl group with the -COOH carboxyl group of acids.",
        "Saying hydration gives off carbon dioxide; only fermentation does.",
      ],
      recap: [
        "Write the equation for fermentation of glucose and name the catalyst. [3]",
        "State three conditions needed for fermentation and why heat is limited. [4]",
        "Describe the industrial hydration of ethene, naming one catalyst. [3]",
        "Explain how ethanol is separated from the fermentation mixture. [2]",
      ],
    },
    {
      title: "Carboxylic Acids, Esters and Macromolecules",
      body: `### The Carboxyl Group\n\nCarboxylic acids carry the **-COOH carboxyl group**, and names end in **-oic acid**. Ethanoic acid **CH₃COOH** is a weak acid, giving vinegar its sour taste.\n\nThe -COOH group causes all the acid reactions.\n\n### Reactions of Ethanoic Acid\n\nWith a metal such as magnesium it forms a salt plus hydrogen gas. With a carbonate it gives salt, water and carbon dioxide, seen as fizzing.\n\nWith a base like sodium hydroxide it neutralises to a salt and water.\n\n### Making Esters\n\nAn alcohol plus a carboxylic acid forms an **ester** and water. This slow, reversible reaction needs an **acid catalyst**.\n\nEthanol with ethanoic acid gives **ethyl ethanoate**, a sweet-smelling oil. Esters appear in perfumes and flavourings because of that smell.\n\n### Addition Polymerisation\n\nAlkene monomers add together, opening their double bonds into long chains. The poly(ethene) repeat unit is **-CH₂-CH₂-**, with a mass of 28.\n\nThe polymer's relative formula mass is therefore **n × 28**.\n\n### Natural Macromolecules\n\nPolyethene is synthetic, while **natural rubber** is a natural macromolecule. Proteins, starches and cellulose are natural macromolecules of repeating units.`,
      groups: [
        {
          subTitle: "Carboxylic Acid Reactions",
          bullets: [
            "The functional group is **-COOH**, the carboxyl group.",
            "Ethanoic acid, CH₃COOH, is weak and makes vinegar sour.",
            "Acid plus metal gives a salt and hydrogen gas.",
            "Acid plus carbonate gives salt, water and carbon dioxide.",
            "Acid plus base gives a salt and water by neutralisation.",
          ],
        },
        {
          subTitle: "Esterification",
          bullets: [
            "**Alcohol plus carboxylic acid gives an ester and water.**",
            "The reaction is slow, reversible, and needs an acid catalyst.",
            "Ethanol with ethanoic acid forms **ethyl ethanoate**.",
            "Esters smell sweet and feature in perfumes and flavourings.",
          ],
        },
        {
          subTitle: "Polymers and Molecular Mass",
          bullets: [
            "Addition polymerisation joins **alkene monomers** into long chains.",
            "Poly(ethene)'s repeat unit is -CH₂-CH₂-, with mass 28.",
            "The polymer's relative formula mass equals **n × 28**.",
            "Polyethene is synthetic; natural rubber is a natural macromolecule.",
            "Proteins and starches are natural macromolecules of repeating units.",
          ],
        },
      ],
      examinerTips: [
        "Write esterification as alcohol plus acid gives ester plus water, and add the acid catalyst.",
        "For polymer mass, state the repeat-unit mass first, 28 for -CH₂-CH₂-, then multiply by n.",
        "Contrast synthetic polyethene with natural macromolecules such as proteins and starch.",
        "Name each acid product: hydrogen from metals, carbon dioxide from carbonates.",
      ],
      commonMistakes: [
        "Confusing the carboxyl -COOH group with the hydroxyl -OH of alcohols.",
        "Forgetting water is a product of esterification, not just an ester.",
        "Giving poly(ethene)'s repeat unit as CH₂ rather than -CH₂-CH₂-.",
        "Saying addition polymerisation loses small molecules; bonds only open, nothing is lost.",
      ],
      recap: [
        "Name the functional group of carboxylic acids and of alcohols. [2]",
        "Write the word equation for making an ester and name one use of esters. [3]",
        "Draw the repeat unit of poly(ethene) and state its formula mass. [2]",
        "Explain how a polymer's molecular mass relates to its degree of polymerisation. [3]",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_11: Chapter = chemistryChapterEleven;
