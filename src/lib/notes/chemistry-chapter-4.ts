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

const aqueousArt = artPanel([
  {
    src: "ch04-electrolysis-water.webp",
    alt: "A beaker of water with two electrodes connected to a battery, bubbles rising into two inverted tubes",
    caption: "Water electrolysis: a gas at each electrode",
  },
  {
    src: "ch04-displacement-zinc-copper-sulfate.webp",
    alt: "Grey zinc chunks in blue copper sulfate solution, the blue fading and a brown crust forming on the zinc",
    caption: "Reactivity sets the order of discharge",
  },
]);

const applicationsArt = artPanel([
  {
    src: "ch04-electroplating-spoon.webp",
    alt: "A metal spoon suspended from a wire in a blue solution beside a flat plate of metal in a beaker",
    caption: "Silver plating a metal spoon",
  },
  {
    src: "ch04-copper-refining.webp",
    alt: "Two beakers of blue copper sulfate linked by filter paper, a rough brown slab and a gleaming copper sheet",
    caption: "Purifying copper by electrolysis",
  },
]);

const cellsArt = artPanel([
  {
    src: "ch04-simple-cell-copper-zinc.webp",
    alt: "A beaker of pale acid with a grey zinc strip and a reddish copper strip wired to a round meter",
    caption: "A simple copper-zinc cell",
  },
  {
    src: "ch04-fuel-cell-hydrogen.webp",
    alt: "A compact rectangular fuel-cell unit with two inlet pipes wired to a glowing bulb",
    caption: "A hydrogen fuel cell lighting a bulb",
  },
]);

const chemistryChapterFour: Chapter = {
  number: 4,
  title: "Electrochemistry",
  intro: `Electrochemistry links electricity and chemistry in both directions: a current can force a reaction to happen, and a reaction can be made to produce a current.\n\nThis chapter opens with **electrolysis**, the breakdown of an electrolyte, and the rules that predict what forms at each electrode.\n\nIt then turns to the useful applications: **electroplating**, the **purification of copper**, the **chlor-alkali** works and the extraction of **aluminium**.\n\nFinally it reverses the story with **chemical cells** and the **hydrogen-oxygen fuel cell**.`,
  subheadings: [
    {
      title: "What Electrolysis Does",
      body: `### The basic idea\n\n**Electrolysis is the decomposition of an electrolyte by a direct electric current.**\n\nAn electrolyte is a molten ionic compound, or an ionic compound dissolved in water, that contains mobile ions.\n\nThe current flows only because those free ions can move through the liquid. A solid ionic lattice cannot be electrolysed, because its ions are held in place.\n\n### The two electrodes\n\nTwo inert electrodes dip into the electrolyte and carry the current in and out. The **cathode** is the electrode connected to the negative terminal of the power supply.\n\nThe **anode** is the electrode connected to the positive terminal.\n\nOpposite charges attract, so positive ions (cations) travel to the cathode and negative ions (anions) travel to the anode.\n\nThe figure labels the cell, the ion movement and the electron flow in the wires.\n\n### Gaining and losing electrons\n\nAt the cathode a cation gains electrons and becomes a neutral atom, so reduction happens there.\n\nAt the anode an anion loses electrons and becomes a neutral atom or molecule, so oxidation happens there.\n\nThe Cambridge definition is exact: **reduction is the gain of electrons** and **oxidation is the loss of electrons**.\n\nA discharged ion leaves the solution and a gas, a coating or a pooled metal appears at the electrode.\n\n### Writing half-equations\n\nEvery electrode change is shown as a half-equation that includes the electrons. For molten lead(II) bromide the cathode reaction is Pb2+ + 2e- to Pb.\n\nThe anode reaction is 2Br- to Br2 + 2e-.\n\nThe electrons gained at the cathode always equal the electrons lost at the anode, so the two halves balance the whole cell.`,
      groups: [
        {
          subTitle: "The Vocabulary of Electrolysis",
          bullets: [
            "Electrolysis uses electrical energy to force a non-spontaneous redox reaction.",
            "An electrolyte is a molten or aqueous ionic substance with ions that are free to move.",
            "An electrode is a conductor, usually graphite or platinum, dipping into the electrolyte.",
            "The cathode is the negative electrode, and the anode is the positive electrode.",
            "A cation is a positive ion, and an anion is a negative ion.",
            "Discharge means an ion gains or loses electrons to become a neutral particle.",
          ],
        },
        {
          subTitle: "Oxidation and Reduction, in Words",
          bullets: [
            "Reduction is the gain of electrons, so it happens to cations at the cathode.",
            "Oxidation is the loss of electrons, so it happens to anions at the anode.",
            "Mnemonic OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons.",
            "Electrons enter the cell at the cathode and leave at the anode through the wires.",
            "The current in the electrolyte is carried by moving ions, not by electrons.",
          ],
        },
        {
          subTitle: "Rules at a Glance",
          bullets: [
            "Cations travel to the negative cathode, where each one gains electrons.",
            "Anions travel to the positive anode, where each one loses electrons.",
            "Balance each half-equation for atoms first, then add electrons to balance charge.",
            "Write state symbols when asked, for example Pb2+(l) + 2e- to Pb(l).",
          ],
        },
      ],
      examinerTips: [
        "Define electrolysis as the breakdown of an electrolyte by a direct current; the words direct current and electrolyte carry the marks.",
        "Name each electrode by its terminal, then state the process: cathode is negative and reduces, anode is positive and oxidises.",
        "Use the 0620 phrase reduction is the gain of electrons rather than loss of oxygen when the question is about electrolysis.",
        "In a half-equation, place the electrons on the left for reduction and on the right for oxidation.",
      ],
      commonMistakes: [
        "Calling a solid ionic compound an electrolyte; only molten or dissolved ions are mobile enough to conduct.",
        "Swapping the signs of the electrodes, so the cathode is wrongly described as positive.",
        "Writing the electrons on the wrong side of the half-equation, which reverses oxidation and reduction.",
        "Saying the ions attract electrons; a cation moves to the cathode and then gains electrons there.",
      ],
      recap: [
        "Define the terms electrolyte, cathode and anode. [3]",
        "State what happens to positive ions and to negative ions during electrolysis. [2]",
        "Write the half-equation for the reaction at the cathode in the electrolysis of molten lead(II) bromide. [1]",
        "Explain, in terms of electrons, why the reaction at the anode is oxidation. [2]",
      ],
    },
    {
      title: "Electrolysis of Molten Compounds",
      body: `### Why molten salts are simple\n\nA molten compound contains only the ions of that compound, so the products are easy to predict.\n\nThe positive metal ion is discharged at the cathode and forms the metal. The negative non-metal ion is discharged at the anode and forms the non-metal.\n\nThere is no water present, so the competition rules used for solutions do not apply yet.\n\nThe figure summarises this simple molten prediction alongside the aqueous one you meet next.\n\n### Molten lead(II) bromide\n\nLead(II) bromide melts near 370 degrees C and separates into Pb2+ and Br- ions. At the cathode, Pb2+ + 2e- forms Pb, a silvery bead of molten lead.\n\nAt the anode, 2Br- forms Br2 + 2e-, giving reddish-brown bromine vapour.\n\nEach bromide ion loses one electron, and two of them supply the two electrons the lead ion needs.\n\n### Molten sodium chloride\n\nMolten sodium chloride provides only Na+ and Cl- ions. At the cathode, Na+ + e- forms Na, giving molten sodium metal.\n\nAt the anode, 2Cl- forms Cl2 + 2e-, giving pale-green chlorine gas. Doubling the cathode reaction to 2Na+ + 2e- forms 2Na balances it against the anode.\n\n### The general rule\n\nIn any molten salt the metal forms at the cathode and the non-metal forms at the anode.\n\nThe mole ratio of the products follows the formula of the salt. The electrons lost at the anode always equal the electrons gained at the cathode.\n\nReactive metals such as sodium and aluminium are obtained this way because water would interfere.`,
      groups: [
        {
          subTitle: "Molten Lead(II) Bromide",
          bullets: [
            "Ions present: Pb2+ and Br- only.",
            "Cathode (reduction): Pb2+ + 2e- forms Pb.",
            "Anode (oxidation): 2Br- forms Br2 + 2e-.",
            "A silvery bead of lead collects at the cathode.",
            "Reddish-brown bromine vapour forms at the anode.",
          ],
        },
        {
          subTitle: "Molten Sodium Chloride",
          bullets: [
            "Ions present: Na+ and Cl- only.",
            "Cathode (reduction): Na+ + e- forms Na.",
            "Anode (oxidation): 2Cl- forms Cl2 + 2e-.",
            "Molten sodium metal collects at the cathode.",
            "Pale-green chlorine gas forms at the anode.",
          ],
        },
        {
          subTitle: "Balancing the Two Halves",
          bullets: [
            "Balance the atoms in each half-equation before adding electrons.",
            "Add electrons to the side that is short of negative charge.",
            "Make the electrons gained equal the electrons lost before combining.",
            "Lead needs two electrons, so two bromide ions lose two electrons in total.",
          ],
        },
      ],
      examinerTips: [
        "For a molten salt, state that the metal forms at the cathode and the non-metal at the anode; do not import the aqueous rules.",
        "Include the electron count in every half-equation, because the mark is often for the electrons as well as the species.",
        "Use state symbols such as (l) when the question describes a molten salt to show the lead or sodium collected.",
      ],
      commonMistakes: [
        "Applying the aqueous hydrogen and oxygen rules to a molten salt that has no water present.",
        "Forgetting to double the sodium half-equation, so the electrons do not match between the two electrodes.",
        "Naming the wrong product, such as claiming hydrogen gas forms at the cathode of molten sodium chloride.",
      ],
      recap: [
        "Name the products formed at each electrode during the electrolysis of molten lead(II) bromide. [2]",
        "Write the balanced half-equation for the formation of chlorine from molten sodium chloride. [1]",
        "Explain why electrolysis is used to extract metals such as sodium rather than reduction with carbon. [2]",
      ],
    },
    {
      title: "Electrolysis of Aqueous Solutions",
      body: `### Water joins the competition\n\nIn solution the salt's ions are joined by the H+ and OH- ions that water always supplies.\n\nFour types of ion are now present, so each electrode must choose which ion to discharge.\n\nThe choice depends on position in the reactivity series and, at the anode, on whether a halide is present.\n\nThe pictures show electrolysis collecting a gas at each electrode and zinc displacing copper from solution.\n\n### Predicting the cathode product\n\nIf the metal sits below hydrogen in the reactivity series, its ion is discharged and the metal plates onto the cathode.\n\nIf the metal sits above hydrogen, hydrogen is the easier species to discharge, so hydrogen gas forms instead.\n\nCopper is below hydrogen, so copper coats the cathode from copper(II) sulfate solution.\n\nSodium and potassium are far above hydrogen, so hydrogen gas is released and their ions stay in solution.\n\n### Predicting the anode product\n\nIf a halide ion such as Cl-, Br- or I- is present, the halogen is discharged at the anode.\n\nIf no halide is present, hydroxide ions from water are discharged and oxygen gas forms.\n\nOxygen comes from the water, so we say the OH- ions are selectively discharged.\n\n### Three worked cases\n\nBrine, concentrated aqueous sodium chloride, gives hydrogen at the cathode and chlorine at the anode, leaving sodium hydroxide in solution.\n\nDilute sulfuric acid gives hydrogen at the cathode and oxygen at the anode, so the water is really being decomposed.\n\nAqueous copper(II) sulfate with inert electrodes gives copper at the cathode and oxygen at the anode.\n\nIts blue colour fades as Cu2+ ions are removed faster than water can replace them.`,
      figure: aqueousArt,
      groups: [
        {
          subTitle: "The Cathode Rule",
          bullets: [
            "Four ions compete because water adds H+ and OH- to the solution.",
            "A metal below hydrogen in the reactivity series is discharged at the cathode.",
            "A metal above hydrogen is not discharged, so hydrogen gas forms instead.",
            "Copper(2+) gains two electrons, so copper plates onto the cathode.",
            "Hydrogen forms when its ion is discharged: 2H+ + 2e- forms H2.",
          ],
        },
        {
          subTitle: "The Anode Rule",
          bullets: [
            "A halide ion is discharged in preference to hydroxide at the anode.",
            "Chloride gives chlorine: 2Cl- forms Cl2 + 2e-.",
            "With no halide, hydroxide is discharged and oxygen forms.",
            "Oxygen half-equation: 4OH- forms 2H2O + O2 + 4e-.",
            "We describe the chosen ion as being selectively discharged.",
          ],
        },
        {
          subTitle: "Worked Cases",
          bullets: [
            "Brine gives hydrogen at the cathode and chlorine at the anode.",
            "The brine solution is left containing sodium hydroxide.",
            "Dilute sulfuric acid gives hydrogen at the cathode and oxygen at the anode.",
            "Copper(II) sulfate gives copper at the cathode and oxygen at the anode.",
            "The blue colour fades as copper ions are removed from solution.",
          ],
        },
      ],
      examinerTips: [
        "Always name the four ions present before predicting products; the marks are given for correct ion selection.",
        "Say the metal is below hydrogen, or above it, rather than simply calling it reactive or unreactive.",
        "For the anode, check first whether a halide is present, because a halide is discharged in preference to oxygen.",
        "Quote the correct half-equation for oxygen from hydroxide: 4OH- forms 2H2O + O2 + 4e-.",
      ],
      commonMistakes: [
        "Forgetting the H+ and OH- ions from water, so only two ions are considered.",
        "Predicting sodium metal at the cathode in brine; sodium is above hydrogen, so hydrogen forms.",
        "Predicting oxygen in brine; a high chloride concentration means chlorine is discharged instead.",
        "Writing the oxygen half-equation with the wrong number of water molecules or electrons.",
      ],
      recap: [
        "Explain why water makes the prediction of products more complicated in aqueous electrolysis. [2]",
        "State the products at each electrode during the electrolysis of brine and name the solution left behind. [3]",
        "Predict and explain the products at each electrode for aqueous copper(II) sulfate with inert electrodes. [4]",
        "Define the term selectively discharged and give one example from aqueous electrolysis. [2]",
      ],
    },
    {
      title: "Applications of Electrolysis",
      body: `### Electroplating\n\nElectroplating coats a cheap, strong object with a thin layer of a more valuable or less reactive metal. The object to be plated is connected as the cathode.\n\nThe plating metal is used as the anode, and the electrolyte contains ions of that metal.\n\nFor silver plating the electrolyte is a soluble silver salt, and the spoon is the cathode.\n\nSilver ions are reduced onto the object while the silver anode dissolves to replace them.\n\nThe pictures show a spoon being silver-plated and the impure and pure copper used in refining.\n\n### Purifying copper\n\nImpure copper is made the anode and a thin sheet of pure copper is made the cathode. The electrolyte is aqueous copper(II) sulfate.\n\nAt the anode copper dissolves: Cu forms Cu2+ + 2e-. At the cathode copper is deposited: Cu2+ + 2e- forms Cu, building up pure copper.\n\nLess reactive impurities such as silver and gold fall to the floor as anode sludge. More reactive impurities dissolve and simply stay in solution.\n\n### The chlor-alkali industry\n\nElectrolysis of concentrated brine gives three useful products at once. Chlorine forms at the anode and is used to make PVC and to kill microbes in drinking water.\n\nHydrogen forms at the cathode and is used to make ammonia and to hydrogenate vegetable oils.\n\nSodium hydroxide is left in the solution and is used for soap, paper and drain cleaners.`,
      figure: applicationsArt,
      groups: [
        {
          subTitle: "Electroplating Set-Up",
          bullets: [
            "The object to be plated is the cathode.",
            "The plating metal is made the anode.",
            "The electrolyte is a solution of a salt of the plating metal.",
            "Metal ions are reduced onto the cathode to build a thin coating.",
            "The anode dissolves and so keeps the ion concentration constant.",
          ],
        },
        {
          subTitle: "Purifying Copper",
          bullets: [
            "The anode is impure copper and the cathode is pure copper.",
            "The electrolyte is aqueous copper(II) sulfate.",
            "At the anode: Cu forms Cu2+ + 2e-.",
            "At the cathode: Cu2+ + 2e- forms Cu.",
            "Noble impurities collect below the anode as anode sludge.",
          ],
        },
        {
          subTitle: "Chlor-Alkali Products and Uses",
          bullets: [
            "Chlorine is made at the anode from chloride ions.",
            "Chlorine is used for PVC and for disinfecting drinking water.",
            "Hydrogen is made at the cathode and used for ammonia.",
            "Hydrogen is also used to hydrogenate oils into margarine.",
            "Sodium hydroxide is used in soap, paper and oven cleaners.",
          ],
        },
      ],
      examinerTips: [
        "Name the three roles in electroplating: object as cathode, plating metal as anode, a salt of that metal as electrolyte.",
        "Link each chlor-alkali product to one use, and state the electrode at which it is formed.",
        "For copper purification, say what happens to each type of impurity: precious metals fall as sludge, reactive ones dissolve.",
        "Mention that the mass of the cathode increases while the impure anode loses mass.",
      ],
      commonMistakes: [
        "Making the object to be plated the anode, which would dissolve it instead of plating it.",
        "Choosing the wrong electrolyte for plating, such as using plain water instead of a salt of the coating metal.",
        "Saying chlorine forms at the cathode in the chlor-alkali cell; it forms at the anode.",
        "Claiming the copper(II) sulfate concentration falls during purification; with a copper anode it stays constant.",
      ],
      recap: [
        "Describe the set-up needed to silver-plate a spoon by electrolysis. [4]",
        "Name the anode, cathode and electrolyte used to purify copper, and write the cathode half-equation. [3]",
        "Name the three products of the chlor-alkali industry and give one use of each. [6]",
        "State what happens to gold and silver impurities during the electrolytic purification of copper. [2]",
      ],
    },
    {
      title: "Extracting Aluminium",
      body: `### Preparing the oxide\n\nAluminium is extracted from bauxite, which is impure aluminium oxide. The bauxite is purified to give aluminium oxide, Al2O3.\n\nPure aluminium oxide melts near 2050 degrees C, far too high to electrolyse cheaply.\n\nIt is therefore dissolved in molten cryolite, which lowers the melting temperature to about 950 degrees C.\n\nThis saves a large amount of energy and makes the process practical.\n\n### Inside the electrolytic cell\n\nThe molten electrolyte sits in a steel case lined with carbon, and that lining is the cathode.\n\nBlocks of carbon dip into the melt and act as the anodes. At the cathode, Al3+ + 3e- forms Al, and the molten aluminium sinks to the bottom.\n\nAt the anode, 2O2- forms O2 + 4e-, and the oxygen reacts with the hot carbon. The figure labels the cell, the cryolite and the two electrode reactions.\n\n### Why the anodes must be replaced\n\nThe oxygen produced oxidises the carbon anodes to carbon dioxide gas. The anodes therefore burn away and have to be replaced regularly.\n\nThis reaction is also why the cell releases carbon dioxide, a greenhouse gas.\n\n### Uses follow the properties\n\nAluminium is used for aircraft and drinks cans because it has low density yet good strength.\n\nIt is used for cooking foil and saucepans because it conducts heat well.\n\nIt is used for overhead power cables and window frames because its oxide layer resists corrosion.`,
      groups: [
        {
          subTitle: "The Extraction Process",
          bullets: [
            "The ore bauxite is purified to give aluminium oxide.",
            "Aluminium oxide is dissolved in molten cryolite.",
            "Cryolite lowers the melting point from about 2050 degrees C to about 950 degrees C.",
            "The cell is lined with carbon, which acts as the cathode.",
            "Carbon rods dipping into the melt act as the anodes.",
          ],
        },
        {
          subTitle: "Electrode Reactions",
          bullets: [
            "At the cathode, Al3+ + 3e- forms Al.",
            "At the anode, 2O2- forms O2 + 4e-.",
            "The oxygen reacts with carbon: C + O2 forms CO2.",
            "The anodes burn away, so they must be replaced.",
            "Molten aluminium collects at the bottom of the cell.",
          ],
        },
        {
          subTitle: "Properties Linked to Uses",
          bullets: [
            "Low density with good strength makes aluminium suited to aircraft bodies.",
            "Good thermal conductivity makes aluminium suited to cooking foil and pans.",
            "The unreactive oxide layer protects it, so it suits window frames.",
            "Low density also makes it useful for drinks cans.",
          ],
        },
      ],
      examinerTips: [
        "State both reasons for adding cryolite: it dissolves the oxide and lowers the operating temperature, saving energy.",
        "Give the two half-equations, Al3+ + 3e- forms Al and 2O2- forms O2 + 4e-, and link the second to the anode burning.",
        "Match each use to one property, such as low density for aircraft and conductivity for cooking foil.",
        "Remember that carbon dioxide from the anodes means the process cannot be made completely carbon-neutral.",
      ],
      commonMistakes: [
        "Saying cryolite provides the aluminium ions; the oxide from bauxite does, and cryolite only lowers the melting point.",
        "Writing the anode reaction as forming carbon dioxide directly instead of oxygen first oxidising the carbon.",
        "Forgetting to balance the aluminium half-equation with three electrons per ion.",
        "Claiming aluminium is extracted by reduction with carbon, which only works for less reactive metals.",
      ],
      recap: [
        "Explain why aluminium oxide is dissolved in molten cryolite before electrolysis. [2]",
        "Write the half-equations for the reactions at the cathode and the anode during aluminium extraction. [2]",
        "Explain why the carbon anodes in the aluminium cell have to be replaced regularly. [2]",
        "Link one use of aluminium to the property that makes it suitable. [2]",
      ],
    },
    {
      title: "Chemical Cells and Fuel Cells",
      body: `### Building a simple cell\n\nA chemical cell converts chemical energy directly into electrical energy. It is made from two different metals dipped into an electrolyte and joined by wires.\n\nThe more reactive metal is the negative electrode because it loses electrons more easily. The less reactive metal is the positive electrode.\n\nElectrons flow through the wires from the more reactive metal to the less reactive one. The pictures show a copper-zinc cell and a hydrogen-oxygen fuel cell.\n\n### What sets the voltage\n\nThe voltage depends mainly on how far apart the two metals stand in the reactivity series. A larger gap in reactivity gives a larger voltage between the electrodes.\n\nA magnesium-copper pair therefore gives a higher voltage than a zinc-copper pair. The electrolyte acts mainly as the medium that lets ions move between the electrodes.\n\nJoining several cells in series adds their voltages, which is how a battery is built.\n\n### The hydrogen-oxygen fuel cell\n\nA fuel cell is not recharged; hydrogen and oxygen are fed in continuously from outside. The overall reaction, 2H2 + O2 forms 2H2O, releases energy as electricity.\n\nThe only product is water, so a hydrogen fuel cell gives off no carbon dioxide while running.\n\nThat clean output is why fuel cells are researched as an energy source for vehicles.\n\n### Cell versus fuel cell\n\nAn ordinary cell runs out because its reactants are used up inside it and cannot easily be renewed.\n\nA fuel cell keeps working for as long as fuel and oxygen are supplied to it.\n\nThe trade-off is that a fuel cell needs a steady supply of hydrogen, which is often made using fossil energy.`,
      figure: cellsArt,
      groups: [
        {
          subTitle: "Making and Reading a Cell",
          bullets: [
            "A cell needs two different metals and an electrolyte between them.",
            "The more reactive metal is the negative electrode.",
            "The less reactive metal is the positive electrode.",
            "Electrons flow through the wires from the more reactive metal outward.",
            "The more reactive metal gradually corrodes as it loses electrons.",
          ],
        },
        {
          subTitle: "Factors Affecting the Voltage",
          bullets: [
            "Voltage depends on the difference in reactivity of the two metals.",
            "Metals further apart in the reactivity series give a higher voltage.",
            "The identity and concentration of the electrolyte have a smaller effect.",
            "Cells connected in series add their voltages to build a battery.",
            "Mg-Cu gives a higher voltage than Zn-Cu because magnesium is more reactive.",
          ],
        },
        {
          subTitle: "The Hydrogen-Oxygen Fuel Cell",
          bullets: [
            "Hydrogen and oxygen are supplied continuously to the fuel cell.",
            "The overall reaction is 2H2 + O2 forms 2H2O.",
            "The only product is water, so there is no carbon dioxide from running.",
            "A fuel cell does not run down while fuel is still supplied.",
            "An ordinary cell runs out because its reactants are used up inside it.",
          ],
        },
      ],
      examinerTips: [
        "Always call the more reactive metal the negative electrode, and justify it by saying it loses electrons more readily.",
        "Rank metal pairs by their gap in the reactivity series when asked which cell gives the greatest voltage.",
        "For a fuel cell, write the overall reaction 2H2 + O2 forms 2H2O and name water as the only product.",
        "Contrast running out with continuous supply: a cell is used up, but a fuel cell keeps working while fed with fuel.",
      ],
      commonMistakes: [
        "Naming the less reactive metal as the negative electrode of a cell.",
        "Saying a fuel cell must be recharged; it only needs fresh fuel and oxygen.",
        "Claiming a hydrogen fuel cell produces carbon dioxide as it runs; it produces only water.",
        "Attributing cell voltage to the size or shape of the electrodes rather than the reactivity gap.",
      ],
      recap: [
        "Explain how a simple chemical cell is made and which electrode is negative. [3]",
        "State and explain two factors that affect the voltage produced by a cell. [4]",
        "Name the two reactants and the one product of a hydrogen-oxygen fuel cell. [3]",
        "Explain why a fuel cell does not run out, whereas a simple cell does. [2]",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_4: Chapter = chemistryChapterFour;
