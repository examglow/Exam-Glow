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

const layoutArt = artPanel([
  {
    src: "ch08-periodic-table-layout.webp",
    alt: "Wall chart grid with a stepped line dividing warm metallic squares from cool non-metal squares",
    caption: "Metals left, non-metals right",
  },
  {
    src: "ch08-group1-metals-water.webp",
    alt: "Three beakers of water with silvery metal lumps skittering on the surface, the last one flaring",
    caption: "Group 1 gets livelier each row down",
  },
]);

const halogenArt = artPanel([
  {
    src: "ch08-halogens-jars.webp",
    alt: "Three stoppered bottles holding a pale gas, an orange-brown liquid and a dark solid with violet fumes",
    caption: "Chlorine gas, bromine liquid, iodine solid",
  },
  {
    src: "ch08-halogen-displacement.webp",
    alt: "Two test tubes in a rack, one colourless with an orange band above it, one brown with a darker layer",
    caption: "Displacement reveals the reactivity order",
  },
]);

const quietBlocksArt = artPanel([
  {
    src: "ch08-transition-metals-colours.webp",
    alt: "Five corked jars in a row filled with blue, green, orange, purple and yellow powders, spatula in front",
    caption: "Coloured compounds: a giveaway",
  },
  {
    src: "ch08-noble-gas-neon-lamp.webp",
    alt: "A curved glass discharge tube glowing red-orange on a metal base with soft rays of light",
    caption: "Group 0 glows but never reacts",
  },
]);

const chemistryChapterEight: Chapter = {
  number: 8,
  title: "The Periodic Table",
  intro: `Mendeleev left gaps in his table and predicted the elements that would fill them.\n\nThe modern table sorts the elements by **atomic number**, and the pattern that emerges is the most useful summary in chemistry.\n\nThis chapter reads the layout of the table, then walks the columns Cambridge asks about.\n\nThat means reactive **Group 1**, steadier **Group 2**, the displacing **Group 7** and the inert **Group 0**.\n\nThe **transition elements** fill the broad middle block between them.`,
  subheadings: [
    {
      title: "Groups, Periods and the Layout of the Table",
      body: `### Order by Atomic Number

The elements are arranged in order of increasing **atomic number**. Atomic number is the proton count, so every element has one fixed place.

No two elements can share a proton count, which removes the reversals of a mass-ordered table.

Vertical columns are the **groups**, numbered 1 to 7, with Group 0 as the final column. Horizontal rows are the **periods**, numbered 1 to 4.

Newer tables number the columns 1 to 18 instead, so Group 7 becomes column 17.

### Position Comes from the Shells

The group number equals the number of electrons in the outer shell. The period number equals the number of occupied shells.

An element with configuration 2,8,7 therefore sits in Period 3 and in Group 7.

### Metals, Non-Metals and the Staircase

Metals fill the left of the table and the whole middle block. Non-metals crowd the top-right corner, with hydrogen placed there for convenience.

A stepped diagonal line, the **staircase**, runs down from boron towards astatine. It divides the metals at its lower left from the non-metals at its upper right.

Elements touching the staircase, such as boron, silicon and germanium, are the **semi-metals**. Their properties sit between the two blocks, which is why silicon works as a semiconductor.

Period 3 opens with the metals sodium, magnesium and aluminium, then passes through silicon. It ends with the non-metals phosphorus, sulfur and chlorine.

Hydrogen sits alone at the top left, but it is a non-metal and belongs to no group.

| Region of the table | Position | Character |
| --- | --- | --- |
| Groups 1 and 2 | the two left-hand columns | soft, reactive metals |
| Transition elements | the broad middle block | dense, strong, sluggish metals |
| Groups 3 to 7 | right of the staircase | semi-metals, then non-metals |
| Group 0 | the last column | unreactive monatomic gases |

### Why a Group Behaves Alike

Every element in a group holds the same number of outer-shell electrons. Group 1 atoms all carry one outer electron, so all of them form 1+ ions.

That shared arrangement explains why members of a group react in similar ways.

Across a period, electrons enter the same outer shell one at a time, so properties change steadily. Metallic character therefore falls from left to right across Period 3.`,
      figure: layoutArt,
      groups: [
        {
          subTitle: "Reading the Grid",
          bullets: [
            "**Groups** are vertical columns; members share the same number of outer-shell electrons.",
            "**Periods** are horizontal rows; the period number equals the number of occupied shells.",
            "**Atomic number** rises by one from cell to cell, so position is fixed by proton count.",
            "Group 1 and Group 2 are metals, while Group 7 and Group 0 are non-metals.",
            "The **transition elements** fill the middle block between Group 2 and Group 3.",
            "Hydrogen is a non-metal drawn alone above lithium, and placed in no group.",
          ],
        },
        {
          subTitle: "Metals Versus Non-Metals",
          bullets: [
            "Metals conduct electricity, are malleable, and generally form **basic oxides**.",
            "Non-metals are poor conductors, brittle when solid, and form **acidic oxides**.",
            "Metal atoms tend to lose electrons, while non-metal atoms gain or share them.",
            "Semi-metals such as boron and silicon show a mixed set of properties.",
            "Metallic character increases down a group, so polonium behaves as a metal.",
          ],
        },
        {
          subTitle: "Using Position to Predict Behaviour",
          bullets: [
            "A soft, low-density metal that fizzes on water belongs in Group 1.",
            "A choking greenish-yellow gas that displaces bromine belongs in Group 7.",
            "An element with configuration 2,8,2 sits in Period 3, Group 2, and forms a 2+ ion.",
            "Carbon and silicon share a Group 4 outer shell, so both form four covalent bonds.",
            "Elements in a group show similar behaviour, not identical behaviour.",
          ],
        },
      ],
      examinerTips: [
        "Give both numbers when asked why an element sits where it does: outer electrons fix the group, shells fix the period.",
        "Say that a group shares its outer-electron count and therefore reacts similarly; naming the group alone is half an answer.",
        "Learn that the boundary is a staircase, not a straight line, and that semi-metals lie along it.",
        "Given an unknown element and its reactions, match it to a group by its valency and its oxide, not by its appearance.",
      ],
      commonMistakes: [
        "Writing that elements are arranged by atomic mass; the modern table is ordered by atomic number.",
        "Confusing group number with number of shells, or period number with outer electrons.",
        "Calling every shiny element a metal, when iodine is a shiny non-metal.",
        "Saying elements in a group are identical; they are similar, and reactivity changes down the group.",
      ],
      recap: [
        "An element has the electronic configuration 2,8,1. State its group and period, and explain your reasoning. [3]",
        "Explain why the elements in a group show similar chemical properties. [2]",
        "Name the line that divides metals from non-metals and give one element lying along it. [2]",
        "Describe how metallic character changes across Period 3 and down Group 4. [2]",
      ],
    },
    {
      title: "Group 1: The Alkali Metals",
      body: `### Soft, Light, Oiled Metals

Lithium, sodium and potassium are the first three members of Group 1. They are soft enough to cut with a knife, and a fresh cut is silvery.

Their densities are so low that all three float on water. The shiny surface tarnishes at once in damp air, so the metals are **stored under oil**.

### Reaction with Water

**2Na + 2H₂O → 2NaOH + H₂** Sodium fizzes, melts into a bead and skitters about as the hydrogen escapes.

The solution left behind is the alkali sodium hydroxide, which turns phenolphthalein pink. Lithium reacts more quietly, fizzing gently as it floats away.

**2Li + 2H₂O → 2LiOH + H₂** Potassium reacts so fast that the hydrogen ignites with a lilac flame. **2K + 2H₂O → 2KOH + H₂**

### Reaction with Oxygen

Burning in air or oxygen gives white, basic metal oxides. **4Li + O₂ → 2Li₂O** and **4Na + O₂ → 2Na₂O**

The oxides react with water to form alkaline hydroxide solutions. Sodium combining with chlorine gives the salt: **2Na + Cl₂ → 2NaCl**.

### Trends Down the Group

| Going down Group 1 | What happens | Why |
| --- | --- | --- |
| Reactivity | increases | the outer electron is lost more easily |
| Melting point | falls, 181 °C to 63 °C | metal bonding around larger ions weakens |
| Atomic radius | increases | one extra shell at every step down |
| Density | stays low, under 1 g per cm³ | the atoms are large for their mass |
| Softness | the metals cut even more easily | the metal structure is held less firmly |

### The Particle-Level Reason

Each row adds an electron shell, so the outer electron lies further from the nucleus. The inner shells **shield** it, so the pull on that electron weakens.

Losing the outer electron is the reaction itself, so a weaker hold means greater reactivity. That is why potassium is the most reactive of the three.`,
      groups: [
        {
          subTitle: "Physical Properties of Group 1",
          bullets: [
            "**Soft:** a knife cuts them, and the cut surface tarnishes quickly in air.",
            "**Low density:** lithium, sodium and potassium all float on water.",
            "**Low melting points** for metals, and the values fall down the group.",
            "**Stored under oil** to keep them away from air and moisture.",
            "They conduct well, and their compounds are usually white and water-soluble.",
          ],
        },
        {
          subTitle: "Equations to Write from Memory",
          bullets: [
            "**2Na + 2H₂O → 2NaOH + H₂** gives an alkaline solution and hydrogen gas.",
            "**2K + 2H₂O → 2KOH + H₂**, and the heat released ignites the hydrogen.",
            "**2Li + 2H₂O → 2LiOH + H₂**, the gentlest of the three reactions.",
            "**4Na + O₂ → 2Na₂O** forms the basic oxide sodium oxide.",
            "**2Na + Cl₂ → 2NaCl** shows the metal combining directly with a halogen.",
          ],
        },
        {
          subTitle: "Trends Down the Group",
          bullets: [
            "**Reactivity increases**, because the outer electron is lost more easily.",
            "**Melting point decreases** as metallic bonding around the larger ions weakens.",
            "**Atomic radius increases** by one complete electron shell each row down.",
            "**Shielding increases**, so nuclear attraction on the outer electron falls.",
            "The changes run smoothly, which is what a table-completion question tests.",
          ],
        },
      ],
      examinerTips: [
        "For 'why does reactivity increase down Group 1', give all three links: extra shell, more shielding, electron lost more easily.",
        "Never write that the atom 'wants' to react; mechanism language scores and purpose language does not.",
        "Pair each observation with its metal: potassium ignites, sodium melts and skitters, lithium merely fizzes.",
        "Balance the water reaction carefully; the coefficient two in front of water is where marks are lost.",
      ],
      commonMistakes: [
        "Writing Na + H₂O → NaOH + H₂, which is unbalanced and loses the mark.",
        "Claiming melting point rises down Group 1; it falls, the opposite way to Group 7.",
        "Saying the metals are stored in water, when water is exactly what they attack.",
        "Giving potassium a red-orange flame; lilac is potassium, crimson-red is lithium.",
      ],
      recap: [
        "Describe the observations when small pieces of lithium, sodium and potassium are added to water. [6]",
        "Write a balanced equation for the reaction of sodium with water. [2]",
        "Explain why reactivity increases from lithium to potassium. [3]",
        "State two physical properties shared by the Group 1 metals. [2]",
      ],
    },
    {
      title: "Group 2: The Alkaline Earth Metals",
      body: `### Members and Their Ions

Group 2 holds magnesium, calcium, strontium and barium, the **alkaline earth metals**. Each atom has two outer electrons and forms a **2+ ion**.

Their compounds are usually white, and their oxides and hydroxides are basic. Reactivity increases down the group for exactly the Group 1 reason.

Because two electrons must be lost instead of one, the reactions are gentler than Group 1.

### Reaction with Water

Magnesium attacks cold water only very slowly, forming magnesium hydroxide and hydrogen. **Mg + 2H₂O → Mg(OH)₂ + H₂**

With steam, magnesium burns to magnesium oxide and releases hydrogen. **Mg + H₂O → MgO + H₂**

Calcium reacts steadily with cold water, sinking as the bubbles carry it about. **Ca + 2H₂O → Ca(OH)₂ + H₂**

Strontium reacts more briskly, and barium most vigorously of all. **Ba + 2H₂O → Ba(OH)₂ + H₂**

### Reaction with Oxygen

Magnesium burns with a brilliant white flame, leaving a white ash of magnesium oxide. **2Mg + O₂ → 2MgO**

Calcium behaves the same way and gives its white oxide. **2Ca + O₂ → 2CaO**

### Hydroxides and Carbonates

Hydroxide solubility **increases** down the group, so barium hydroxide dissolves freely. Calcium hydroxide dissolves only slightly, and its solution is the reagent limewater.

Magnesium hydroxide is essentially insoluble, so it neutralises stomach acid gently. Every Group 2 carbonate is an insoluble white solid that decomposes on strong heating.

**CaCO₃ → CaO + CO₂** Thermal stability **increases** down the group, so barium carbonate resists heat most.

### Uses of Magnesium and Calcium Compounds

Limestone, mostly calcium carbonate, is burned for cement and quarried as building stone. Slaked lime, calcium hydroxide, neutralises acidic soils and is mixed into mortar.

Magnesium oxide lines furnace walls because its melting point is extremely high. Magnesium's low density makes it useful in light alloys and in signal flares.`,
      groups: [
        {
          subTitle: "Reactivity and Its Explanation",
          bullets: [
            "**Reactivity increases** from magnesium to barium, just as in Group 1.",
            "Atoms gain a shell each row, so the two outer electrons are held less tightly.",
            "**More shielding** means less nuclear attraction on the electrons being lost.",
            "Magnesium tarnishes slowly, whereas barium must be kept under oil.",
            "Calcium reacts steadily with cold water, unlike violent sodium.",
          ],
        },
        {
          subTitle: "Compounds Worth Remembering",
          bullets: [
            "**MgO:** very high melting point, used as a furnace lining and a mild antacid.",
            "**Mg(OH)₂:** insoluble weak base that neutralises excess stomach acid.",
            "**Ca(OH)₂:** slightly soluble, and its limewater tests for carbon dioxide.",
            "**CaCO₃:** limestone, cement, and a soil conditioner that neutralises acidity.",
            "**CaSO₄:** the basis of plaster of Paris, which sets to a hard solid.",
            "**BaCO₃:** thermally very stable, so it needs the strongest heating to decompose.",
          ],
        },
        {
          subTitle: "Thermal Decomposition of the Carbonates",
          bullets: [
            "The general change is **metal carbonate → metal oxide + carbon dioxide**.",
            "Magnesium carbonate decomposes most readily, barium carbonate least readily.",
            "**Thermal stability increases down the group** as the ions grow larger.",
            "The gas given off is confirmed with limewater, which turns milky.",
            "All the carbonates are insoluble white solids before heating.",
          ],
        },
      ],
      examinerTips: [
        "Quote reactivity by comparison: calcium reacts with cold water, magnesium only appreciably with steam.",
        "For the explanation use the words shell, shielding and attraction, since each phrase carries a mark.",
        "Keep two solubility trends apart: hydroxides become more soluble down the group, carbonates stay insoluble.",
        "Always attach a use to its property, such as magnesium oxide lining a furnace because of its high melting point.",
      ],
      commonMistakes: [
        "Saying magnesium reacts vigorously with cold water; the reaction is barely observable.",
        "Writing the oxide as MgO₂, when magnesium loses two electrons to one oxygen atom.",
        "Reversing the hydroxide solubility trend and claiming it falls down the group.",
        "Describing the carbonates as soluble, when every Group 2 carbonate is insoluble.",
      ],
      recap: [
        "State and explain how reactivity with water changes from magnesium to barium. [4]",
        "Write balanced equations for magnesium burning in oxygen and for calcium reacting with water. [4]",
        "Describe the solubility trend of the hydroxides down Group 2 and name one use of calcium hydroxide. [3]",
        "Explain why magnesium oxide is used to line a furnace. [2]",
      ],
    },
    {
      title: "Group 7: The Halogens and Their Physical Trends",
      body: `### Members, States and Colours

Group 7 holds fluorine, chlorine, bromine, iodine and radioactive astatine. Every halogen exists as a **diatomic molecule**: F₂, Cl₂, Br₂ and I₂.

Fluorine is a pale yellow gas, and chlorine a dense, choking greenish-yellow gas. Bromine is a dark red-brown fuming liquid, and iodine a grey-black shiny solid.

Warming iodine gently makes it **sublime** straight into a violet vapour. Colour deepens and state changes down the group, so astatine should be a dark solid.

| Halogen | State and colour at room temperature | Boiling point |
| --- | --- | --- |
| Fluorine | pale yellow gas | -188 °C |
| Chlorine | greenish-yellow gas | -35 °C |
| Bromine | red-brown fuming liquid | 59 °C |
| Iodine | grey-black solid giving violet vapour | 184 °C |

### Melting and Boiling Points

Melting and boiling points **increase** down Group 7, the opposite of Group 1. The values in the table climb by roughly the same step at every row.

Atoms grow larger and hold more electrons at each step down. That strengthens the weak attractive forces **between** the molecules, so boiling needs more energy.

Density increases in the same direction and volatility falls. Iodine is therefore the least readily vaporised of the four common halogens.

### Bonds Inside and Between Molecules

The covalent bond joining the two atoms of a molecule is strong and stays intact. Boiling only pulls whole molecules apart, so intermolecular forces set the trend.

### Group 1 Compared with Group 7

| As you go down | Group 1 | Group 7 |
| --- | --- | --- |
| Reactivity | increases | decreases |
| Melting and boiling points | decrease | increase |
| Atomic radius | increases | increases |
| Electron change involved | one electron is lost | one electron is gained |
| Effect of the added shell | loss becomes easier | gain becomes harder |

The added shell is the shared cause in both groups. Group 1 loses an outer electron and Group 7 gains one, so the trends point opposite ways.

Atomic radius increases down both groups, because one more shell enters at every step.

### Handling the Halogens

Fluorine and chlorine are toxic gases, so their reactions run in a fume cupboard.

Bromine stains the skin and its vapour is corrosive, so only a few drops are used.

Iodine is the least hazardous of the four, though its vapour still irritates.`,
      figure: halogenArt,
      groups: [
        {
          subTitle: "States and Colours at Room Temperature",
          bullets: [
            "**Fluorine:** pale yellow gas, extremely reactive and corrosive.",
            "**Chlorine:** greenish-yellow choking gas used to treat drinking water.",
            "**Bromine:** red-brown fuming liquid giving an orange-brown vapour.",
            "**Iodine:** grey-black crystalline solid that sublimes to violet vapour.",
            "**Astatine:** radioactive solid, expected to be darker than iodine.",
            "All five are non-metals, poor conductors and brittle when solid.",
          ],
        },
        {
          subTitle: "Explaining the Physical Trends",
          bullets: [
            "As you go down Group 7, **melting and boiling points increase**.",
            "The cause is larger atoms with more electrons and stronger forces between molecules.",
            "As you go down Group 7, **density increases** because the atoms are heavier.",
            "Volatility decreases, so state changes from gas to liquid to solid.",
            "The covalent bond inside each molecule is not broken on boiling.",
          ],
        },
        {
          subTitle: "Reading the Comparison Table",
          bullets: [
            "Group 1 melting points fall because metallic bonding weakens around larger ions.",
            "Group 7 melting points rise because intermolecular forces strengthen around bigger molecules.",
            "Both groups share one trend: atomic radius always increases downwards.",
            "Reactivity rises in Group 1 because losing an electron becomes easier.",
            "Reactivity falls in Group 7 because gaining an electron becomes harder.",
          ],
        },
      ],
      examinerTips: [
        "Explain a physical trend by naming the force that changes: intermolecular forces strengthen, not covalent bonds.",
        "Give state and colour as a matched pair, since a two-mark question wants both halves.",
        "When comparing the two groups, write the direction and the cause; a bare 'they differ' scores nothing.",
        "Remember iodine vapour is violet, while iodine dissolved in water is brown.",
      ],
      commonMistakes: [
        "Claiming boiling breaks the covalent bond in Cl₂, when it only separates molecules.",
        "Writing that melting point decreases down Group 7 because that holds for Group 1.",
        "Describing chlorine as brown, or bromine as a gas at room temperature.",
        "Calling the halogens monatomic; they are diatomic, unlike the monatomic Group 0 gases.",
      ],
      recap: [
        "State the colour and physical state of chlorine, bromine and iodine at room temperature. [6]",
        "Describe and explain the trend in melting point down Group 7. [3]",
        "Explain why bromine is a liquid while chlorine is a gas at the same temperature. [3]",
        "Compare the melting-point trend down Group 1 with the trend down Group 7. [2]",
      ],
    },
    {
      title: "Halogens: Reactions with Metals and Displacement",
      body: `### Making Metal Halides

A halogen needs one electron to complete its outer shell, so it forms a **1− ion**. Heating a metal in a halogen gives the salt, a metal halide.

**2Na + Cl₂ → 2NaCl**, with dense white smoke of sodium chloride. **Mg + Cl₂ → MgCl₂** and **Cu + Br₂ → CuBr₂** follow the same pattern.

Iron burns in chlorine to the higher chloride: **2Fe + 3Cl₂ → 2FeCl₃**. Fluorine is so fierce that it attacks metals which other halogens leave untouched.

### Displacement Reactions

A more reactive halogen displaces a less reactive one from its salt solution. Chlorine water turns potassium bromide solution orange-brown as bromine is released.

**Cl₂ + 2KBr → 2KCl + Br₂** Chlorine liberates brown iodine from potassium iodide solution. **Cl₂ + 2KI → 2KCl + I₂**

Bromine water gives the same result with potassium iodide: **Br₂ + 2KI → 2KBr + I₂**.

Bromine added to potassium chloride changes nothing, and iodine displaces no halogen at all.

| Solution added to | potassium chloride | potassium bromide | potassium iodide |
| --- | --- | --- | --- |
| Chlorine water | no reaction | orange-brown bromine | brown iodine |
| Bromine water | no reaction | no reaction | brown iodine |
| Iodine solution | no reaction | no reaction | no reaction |

### The Ionic View

Only the halogen and the halide ions take part in the change. **Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂** leaves potassium ions untouched in solution.

The displacing halogen takes electrons from the ions of the weaker halogen. Displacement is therefore a redox reaction, with oxidation and reduction together.

### What the Results Prove

The observations fix the order fluorine, chlorine, bromine, iodine. Each halogen displaces only the halogens lying below it in the group. Reactivity therefore **decreases** down Group 7.

### Why It Falls Down the Group

A halogen reacts by attracting and capturing an extra electron. Each step down adds a shell, so the nucleus lies further from the arriving electron.

Shielding by the inner electrons increases at the same time. The pull on the incoming electron weakens, so it is captured less readily.

Group 1 finds losing easier going down, while Group 7 finds gaining harder. The same fall in nuclear attraction therefore produces opposite reactivity trends.`,
      groups: [
        {
          subTitle: "Reactions with Metals",
          bullets: [
            "**2Na + Cl₂ → 2NaCl**, made by burning sodium in chlorine gas.",
            "**Mg + Cl₂ → MgCl₂** and **Ca + Cl₂ → CaCl₂** form simple chloride salts.",
            "**2Fe + 3Cl₂ → 2FeCl₃** gives iron(III) chloride, the higher oxidation state.",
            "**Cu + Br₂ → CuBr₂** shows copper combining with bromine vapour.",
            "The salts formed are ionic, so they have high melting points.",
            "Each halogen gains one electron, so every halide ion carries a 1− charge.",
          ],
        },
        {
          subTitle: "Running a Displacement Test",
          bullets: [
            "Add chlorine water to potassium bromide solution and shake with an organic solvent layer.",
            "The organic layer turns orange-brown, proving that bromine has been liberated.",
            "Add bromine water to potassium iodide solution and brown iodine appears.",
            "Add bromine water to potassium chloride solution and there is no colour change.",
            "A mixture keeping its original colour is the negative result examiners expect.",
            "Displacement works in solution, where the ions are free to meet each other.",
          ],
        },
        {
          subTitle: "Explaining the Order of Reactivity",
          bullets: [
            "Chlorine displaces bromine and iodine, so chlorine is the more reactive element.",
            "Bromine displaces iodine but not chlorine, fixing bromine between the two.",
            "Iodine displaces neither, so it is the least reactive common halogen.",
            "Reactivity falls down the group because the pull on an incoming electron weakens.",
            "Greater distance from the nucleus and more shielding both reduce that pull.",
            "Fluorine at the top of the group is the most reactive halogen of all.",
          ],
        },
      ],
      examinerTips: [
        "Name the colour seen and the halogen produced; 'it went orange' without naming bromine loses the second mark.",
        "State the conclusion as a comparison: chlorine is more reactive than bromine because it displaces it.",
        "Use the ionic equation when the question asks which particles react, and leave the potassium ions out.",
        "For the reason, write distance, shielding and attraction toward the incoming electron, all three of which are marked.",
      ],
      commonMistakes: [
        "Writing Cl₂ + KBr → KCl + Br₂ without balancing the potassium and bromine atoms.",
        "Claiming iodine displaces bromine from potassium bromide, when iodine is the less reactive element.",
        "Stating that halogen reactivity increases down the group, confusing Group 7 with Group 1.",
        "Describing displacement as a metal losing electrons, which belongs to the salt-forming reaction.",
      ],
      recap: [
        "Write balanced equations for chlorine reacting with potassium bromide solution and with potassium iodide solution. [4]",
        "Predict the observation when bromine water is added to potassium chloride solution, and explain it. [3]",
        "Explain why the reactivity of the halogens decreases from fluorine to iodine. [4]",
        "Describe how you would show experimentally that chlorine is more reactive than iodine. [4]",
      ],
    },
    {
      title: "Transition Elements and Group 0",
      body: `### Where the Transition Elements Sit

The transition elements fill the broad middle block between Group 2 and Group 3. Iron, copper, titanium, chromium, nickel and zinc all sit inside it.

Their atoms build partly filled inner shells, which explains their distinctive chemistry.

### Properties Compared with Group 1

| Property | Group 1 sodium | Transition iron |
| --- | --- | --- |
| Density | low, it floats on water | high, it sinks |
| Melting point | about 98 °C | about 1538 °C |
| Cold water | reacts violently at once | no reaction, rusting needs air |
| Colour of compounds | white | green and brown |
| Oxidation states | only 1+ | 2+ and 3+ |
| Catalysis | never a catalyst | catalyses the Haber process |

Transition metals are far **denser** and much harder than the alkali metals. They are **much less reactive**, so iron objects survive damp weather.

Their compounds are **coloured**, like blue copper(II) sulfate and green iron(II) sulfate. They show **variable oxidation states**, so iron forms Fe²⁺ and Fe³⁺ compounds.

Many act as **catalysts**, such as iron in the Haber process and nickel in hydrogenation.

### Uses Follow the Properties

Steel, an alloy of iron, is strong and only moderately reactive, so it frames bridges and cars.

Copper conducts electricity, resists corrosion and draws into wire for wiring and plumbing. Titanium combines low density with strength and a tough oxide layer.

That combination makes titanium valuable in airframes and in hip implants.

### Group 0, the Noble Gases

Helium, neon and argon have **complete outer shells**, so they gain or lose electrons nowhere. They exist as single atoms, described as **monatomic**, and are almost totally unreactive.

Argon has the configuration 2,8,8, and helium's full first shell is simply 2. Boiling points **increase** down Group 0 as the atoms grow larger.

Larger atoms strengthen the forces between them, so more energy is needed to boil them.

Helium has the lowest boiling point of any substance, and radon the highest of the group.

### Uses of an Inert Gas

Helium is less dense than air and cannot burn, so it lifts balloons where hydrogen would. Neon glows red-orange inside a discharge tube, the classic advertising lamp.

Argon is unreactive, so it shields a hot lamp filament and a welding arc. It also displaces air in food packets to keep the contents crisp.`,
      figure: quietBlocksArt,
      groups: [
        {
          subTitle: "Properties of the Transition Elements",
          bullets: [
            "**Higher density** than Group 1, which is why iron sinks and sodium floats.",
            "**Higher melting and boiling points**, with tungsten used for lamp filaments.",
            "**Much lower reactivity**, so they can be worked and used in damp air.",
            "**Coloured compounds**, unusual among otherwise simple ionic solids.",
            "**Variable oxidation states**, so copper forms both Cu⁺ and Cu²⁺ compounds.",
            "**Catalytic activity**, often when the metal is finely divided.",
          ],
        },
        {
          subTitle: "Linking Each Use to Its Property",
          bullets: [
            "Iron as **steel** in construction, because it is strong and far less reactive than sodium.",
            "Copper in **wiring**, because it conducts well, is ductile and resists corrosion.",
            "Copper in **water pipes**, because it does not react with the water it carries.",
            "Titanium in **aircraft and implants**, for its low density, strength and corrosion resistance.",
            "Iron as the **catalyst** of the Haber process that makes ammonia.",
            "Nickel as the **catalyst** used to hydrogenate vegetable oils.",
          ],
        },
        {
          subTitle: "The Noble Gases of Group 0",
          bullets: [
            "Their outer shells are **full**, so there is no tendency to form bonds.",
            "They are **monatomic**, existing as separate atoms rather than molecules.",
            "Boiling point rises down the group as atoms grow and intermolecular forces strengthen.",
            "**Helium** lifts balloons and airships, because it is light and non-flammable.",
            "**Neon** emits coloured light in discharge tubes used for signage.",
            "**Argon** gives an inert atmosphere in lamps, welding and food packaging.",
          ],
        },
      ],
      examinerTips: [
        "For 'compare transition metals with Group 1', give three labelled contrasts: density, melting point and reactivity.",
        "Name the property before the use, since a use without its property often scores only one of two marks.",
        "Explain noble-gas unreactivity by writing that the outer shell is complete; 'stable' alone is weaker.",
        "For argon in a lamp, the key word is unreactive, because oxygen or air would attack the hot filament.",
      ],
      commonMistakes: [
        "Describing transition metals as unreactive; they are only far less reactive than Group 1.",
        "Attributing coloured compounds to Group 1 elements such as sodium.",
        "Calling helium and argon diatomic, when they are monatomic single atoms.",
        "Saying boiling point decreases down Group 0, confusing it with the Group 1 melting-point trend.",
      ],
      recap: [
        "List three ways in which the transition elements differ in properties from the Group 1 metals. [3]",
        "Explain why titanium is chosen for aircraft parts, linking your answer to its properties. [3]",
        "State why the Group 0 elements are described as monatomic and unreactive. [3]",
        "Describe and explain the trend in boiling point down Group 0. [3]",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_8: Chapter = chemistryChapterEight;
