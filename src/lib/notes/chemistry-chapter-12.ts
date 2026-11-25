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

const distillationArt = artPanel([
  {
    src: "ch12-simple-distillation.webp",
    alt: "A round-bottom flask over a burner joined to a sloping condenser dripping liquid into a collecting flask",
    caption: "Simple distillation: vapour cooled and collected",
  },
  {
    src: "ch12-reflux-condenser.webp",
    alt: "A boiling conical flask under a tall vertical condenser returning liquid to the flask",
    caption: "Reflux returns every vapour to the flask",
  },
]);

const choosingArt = artPanel([
  {
    src: "ch12-separating-funnel.webp",
    alt: "A pear-shaped separating funnel on a stand holding two liquid layers with the tap running the lower layer into a beaker",
    caption: "Immiscible liquids drain out in two layers",
  },
  {
    src: "ch12-paper-chromatogram.webp",
    alt: "A strip of filter paper in a shallow beaker of solvent with separated coloured spots below a dotted solvent front",
    caption: "One spot means pure, several mean impure",
  },
]);

const qualitativeArt = artPanel([
  {
    src: "ch12-flame-test-wire-loop.webp",
    alt: "A wire loop held in a blue bunsen flame with the flame tip turning pink-red",
    caption: "A clean loop gives a true flame colour",
  },
  {
    src: "ch12-gas-tests-collection.webp",
    alt: "Three inverted test tubes in a water trough with a glowing splint, a burning splint and a paper strip being tested",
    caption: "Gas tests confirm the ion that made it",
  },
]);

export const CHEMISTRY_CHAPTER_12: Chapter = {
  number: 12,
  title: "Experimental Techniques and Chemical Analysis",
  intro:
    "Separation, identification and measurement are the three practical skills this topic examines, and all three are marked on **exact wording** rather than general sense.\n\nYou will learn how to obtain a pure, dry sample from a mixture, how chromatography and melting points prove it is pure,\n\nand how confirmatory tests name the cation, anion or gas in front of you.\n\nThe last sections fix the burette discipline and the mole arithmetic that turn a titration into a number.",
  subheadings: [
    {
      title: "Filtration, Evaporation and Crystallisation",
      body: `## The Question You Ask First

Does the solid dissolve or not? An **insoluble** solid in a liquid is removed by **filtration**, while a **dissolved** solid is recovered by evaporating the water off.

Filter paper has pores too small for solid particles, but every dissolved ion and molecule passes straight through with the liquid.

## Filtration and Its Two Products

The solid left behind on the paper is the **residue**; the clear liquid that runs through into the flask is the **filtrate**.

Wet the paper with a little distilled water first so it seals against the glass funnel.

Pour down a glass rod, keep the funnel stem touching the wall of the beaker, and the liquid will not splash or burst the paper.

A cloudy filtrate means the paper tore or the mixture was poured too fast, so filter it again.

## Washing and Drying the Residue

The residue is coated with solution, so wash it by pouring **distilled water** over it while it still sits on the paper.

Washing removes the dissolved impurities without removing the solid you are trying to collect.

Dry it by pressing between two folds of filter paper, which takes up the water quickly at a low temperature.

For a fully dry, accurate mass, a desiccator or a warm oven is used instead.

Strong heating is avoided because many solids decompose or lose **water of crystallisation**: blue hydrated copper sulfate turns white when overheated.

## Recovering a Dissolved Solid

**Evaporation to dryness** suits a salt that will not decompose, such as sodium chloride.

Heat gently in an evaporating basin until crystals appear, then stop, because the remaining water evaporates from the hot solid.

**Crystallisation** is the better method when the solid is hydrated or heat-sensitive.

Warm the filtrate to concentrate it, dip a cold glass rod in to test for crystals, then leave the solution cool slowly so well-formed crystals grow.

Filter the crystals, wash with a drop of cold distilled water, and dry them between filter papers.

The liquid left behind, the **mother liquor**, holds the soluble impurities, which is why the crystals are purer than the original solution.`,
      groups: [
        {
          subTitle: "Filtration Vocabulary the Mark Scheme Wants",
          bullets: [
            "**Residue:** the solid collected on the filter paper.",
            "**Filtrate:** the clear liquid that passes through the paper into the receiving flask.",
            "Filtration separates an insoluble solid from a liquid; it cannot separate a dissolved solid.",
            "A glass rod guides the liquid and a wetted paper seals it to the funnel, so no solid is lost.",
            "If the filtrate is cloudy, repeat the filtration with fresh paper.",
          ],
        },
        {
          subTitle: "Washing and Drying a Precipitate",
          bullets: [
            "Wash the residue with **distilled water**, never tap water, so no new ions are added.",
            "Test the washings for purity: the last drops should leave no solid on a glass rod.",
            "Dry between filter papers for speed at low temperature, or in a warm oven for a dry mass.",
            "A **desiccator** dries a solid without heating it, which protects hydrated salts.",
            "Overheating decomposes nitrates and drives off water of crystallisation, so the mass is wrong.",
          ],
        },
        {
          subTitle: "Evaporation or Crystallisation?",
          bullets: [
            "Evaporate to dryness when the salt is stable, for example sodium chloride from rock salt.",
            "Crystallise when the salt is hydrated or decomposes, for example copper sulfate crystals.",
            "Concentrate the solution first: crystals form on cooling only from a hot saturated solution.",
            "Add a seed crystal, or scratch the inside of the beaker, to start crystallisation.",
            "Anti-bumping granules keep boiling smooth and are added before heating, never to a hot liquid.",
            "Slow cooling gives large, pure crystals; fast cooling gives small ones that trap solution.",
          ],
        },
      ],
      examinerTips: [
        "Use the two technical nouns every time: residue on the paper, filtrate in the flask.",
        "For a purity question about a solid, name washing with distilled water, then state what washing removes.",
        "When asked to obtain crystals, write the four steps in order: filter, concentrate, cool, dry.",
        "Say 'heat gently to evaporate some of the water' rather than 'boil it dry' for hydrated salts.",
      ],
      commonMistakes: [
        "Claiming filtration separates salt from water; the dissolved salt passes through with the filtrate.",
        "Describing the filtrate as pure water when it still contains everything that was dissolved.",
        "Drying a precipitate over a strong flame, which decomposes it and changes its mass.",
        "Adding anti-bumping granules to a liquid already boiling, which triggers sudden violent bumping.",
      ],
      recap: [
        "A mixture of sand and copper sulfate solution must be separated to give dry sand and copper sulfate crystals. Describe the full plan. [6]",
        "Define residue and filtrate, and state which one contains the dissolved salt. [2]",
        "Explain why a precipitate is washed with distilled water and how it is dried without decomposing it. [3]",
        "Suggest why evaporating a copper sulfate solution to complete dryness is a poor method. [2]",
      ],
    },
    {
      title: "Distillation, Fractional Distillation and Separating Funnels",
      body: `## Simple Distillation in Stages

A liquid is boiled, the vapour is cooled in a **condenser**, and the liquid that runs off is the **distillate**.

The vapour must escape through the side-arm, so the thermometer bulb sits just below the opening of the side-arm.

It then reads the temperature of the vapour actually entering the condenser, which is the **boiling point of the liquid being collected**.

Cooling water enters the **lower** jacket and leaves at the top, so the jacket fills completely and no hot vapour escapes uncondensed.

A closed system would build up pressure, so the apparatus is always open to the atmosphere at the receiver end.

## What Simple Distillation Separates

It recovers the **solvent from a solution**, because only the solvent evaporates and the dissolved solid stays behind in the flask.

Salt water gives pure water as the distillate and salt as the residue in the flask.

It also separates two **miscible liquids with boiling points far apart**, roughly 25 °C or more.

The lower-boiling liquid distils first, and the temperature climbs sharply once it has all gone.

For liquids whose boiling points are close, simple distillation gives only a poor separation.

## Fractional Distillation: Closer Boiling Points

A **fractionating column** of glass beads is fitted between the flask and the condenser.

Vapour partially condenses on the beads and re-evaporates again and again, so each cycle enriches the rising vapour in the more volatile liquid.

The column temperature is held at one liquid's boiling point while that **fraction** distils, then the temperature rises to the next.

The result is a far purer product than simple distillation, which is why ethanol from fermentation is concentrated this way.

A mixture such as ethanol and water cannot be taken past a fixed composition, so purity has a practical limit.

## Reflux and Separating Funnels

Long heating of a volatile, often flammable, liquid uses **heating under reflux**: a vertical condenser sits above the flask.

Every vapour condenses and runs straight back down, so nothing is lost, the reaction stays hot, and no flammable vapour reaches the flame.

Two immiscible liquids such as oil and water form **layers**, the denser liquid below.

In a separating funnel the lower layer is run off into a flask, the upper layer leaves by the top.

Open the tap slowly and remove the stopper, and shake with the funnel inverted and vented frequently.`,
      figure: distillationArt,
      groups: [
        {
          subTitle: "Simple Distillation: Apparatus Points",
          bullets: [
            "The thermometer bulb is level with the side-arm, so it reads the vapour entering the condenser.",
            "Water enters the condenser at the lower end and leaves at the top, keeping the jacket full.",
            "The distillate is the collected liquid; the flask residue is anything that did not boil.",
            "Anti-bumping granules give a steady boil instead of sudden surges of vapour.",
            "Receiving flask sits on a stand; the delivery tube must not seal the system shut.",
          ],
        },
        {
          subTitle: "Simple Compared With Fractional Distillation",
          bullets: [
            "Simple distillation separates a solvent from a dissolved solid, or liquids boiling far apart.",
            "Fractional distillation adds a fractionating column, giving many condensation and evaporation cycles.",
            "A fraction is the portion collected while the temperature is steady at one boiling point.",
            "Fractional distillation separates liquids with close boiling points, such as ethanol and water.",
            "Crude oil is sorted into fractions by fractional distillation, the biggest industrial example.",
            "The more volatile liquid, the lower boiling point, always distils first.",
          ],
        },
        {
          subTitle: "Separating Funnels and Reflux",
          bullets: [
            "A separating funnel separates two immiscible liquids, one layer above the other.",
            "The denser layer runs out through the tap; the lighter layer is poured from the top.",
            "Vent the funnel often when shaking, because pressure from vapour can push the stopper out.",
            "Reflux condenses vapour vertically back into the flask, so volatile liquids can be heated for hours.",
            "Reflux keeps flammable vapour away from the flame, which is a safety advantage as well as a chemical one.",
          ],
        },
      ],
      examinerTips: [
        "Say the thermometer bulb is 'level with the side-arm' and link it to measuring the boiling point of the vapour.",
        "Explain the water direction as a consequence: entering at the bottom keeps the jacket full, so condensing is efficient.",
        "For two liquids 5 °C apart choose fractional distillation and name the column; for a solid dissolved in a liquid choose simple distillation.",
        "State the use of each apparatus: separating funnel for immiscible liquids, reflux for long heating of a volatile liquid.",
      ],
      commonMistakes: [
        "Writing that simple distillation separates any two miscible liquids; close boiling points need a column.",
        "Placing the thermometer bulb in the liquid instead of at the side-arm.",
        "Running cooling water the wrong way round the condenser, leaving air pockets and poor condensing.",
        "Calling the residue in the flask the distillate; the distillate is what the condenser delivers.",
      ],
      recap: [
        "Describe and draw a set-up for obtaining pure water from sea water, labelling condenser, thermometer and distillate. [5]",
        "Explain why cooling water enters the condenser at the lower end. [2]",
        "State how fractional distillation differs in apparatus and in what it separates. [3]",
        "A student must heat a flammable volatile liquid for an hour. Name the technique and explain why it is suitable. [3]",
      ],
    },
    {
      title: "Paper Chromatography, Rf Values and Judging Purity",
      body: `## Why Chromatography Works

Different substances dissolve to different extents in the **solvent** and stick to the paper with different strengths.

Those carried further by the solvent separate into spots, so a mixture is sorted by how far each component travels.

Chromatography also separates tiny amounts, so it answers 'what is in this?' where distillation cannot.

## Running the Chromatogram Properly

Draw a **baseline** in **pencil** about 2 cm above the bottom of the paper, because pencil graphite does not dissolve.

Spot each solution onto the baseline, dry, and re-spot two or three times to concentrate the sample.

Put the paper in a beaker so the solvent level sits **below the baseline**, or the spots dissolve into the solvent instead of travelling.

Cover the beaker with a lid so the air saturates and the solvent does not evaporate off the paper.

When the solvent front is near the top, remove the paper, mark the front in pencil at once, and dry it.

## Rf Values

**Rf = distance moved by the substance ÷ distance moved by the solvent front**, both measured from the baseline.

An Rf value has **no units**, is always below 1, and is the same for a given substance in a given solvent at a given temperature.

A spot that travelled 4.8 cm while the solvent travelled 8.0 cm has Rf = 0.60.

A matching Rf only suggests the same substance, so run the unknown and the known side by side, or on top of each other.

If the two spots stay as one spot, the substances are the same.

## Reading a Chromatogram

A **pure** substance gives **a single spot**. An impure one gives two or more spots, a streak, or a tail.

The ink sample shows three spots, so it contains at least three dyes, two of them matching pure A and pure B.

Substances that stay on the baseline have barely dissolved in the solvent, and Rf is close to zero.

## Choosing a Method and Proving Purity

Purity is judged physically as well as chromatographically. A pure solid has a **sharp melting point** and a pure liquid a **fixed boiling point**.

Impurities **lower and broaden** the melting range and **raise and broaden** the boiling range.

Salt water boils above 100 °C, and ice melting over a range below 0 °C shows it is impure.

| Mixture to separate | Method and the property it uses |
| --- | --- |
| Insoluble solid from a liquid | Filtration; particle size |
| Dissolved solid from the solvent | Evaporation or crystallisation; solubility |
| Solvent from a solution | Simple distillation; boiling point |
| Two miscible liquids, boiling points close | Fractional distillation; boiling point |
| Two immiscible liquids | Separating funnel; density and solubility |
| Two or more dissolved dyes | Paper chromatography; solubility in the solvent |
| Pure solid from an impure one | Recrystallisation; solubility on cooling |`,
      figure: choosingArt,
      groups: [
        {
          subTitle: "Chromatography Procedure Checklist",
          bullets: [
            "Baseline drawn in pencil, not ink, so the marking itself does not run.",
            "Solvent level below the baseline, or the spots wash off into the beaker.",
            "Beaker covered to saturate the air and stop solvent evaporating from the paper.",
            "Spots small and concentrated, made by drying and re-spotting several times.",
            "Mark the solvent front in pencil immediately, before it evaporates.",
            "Measure both distances from the baseline, with the ruler held vertically.",
          ],
        },
        {
          subTitle: "Calculating and Using Rf",
          bullets: [
            "Divide the distance travelled by the spot by the distance travelled by the solvent front.",
            "A spot at 3.6 cm with a front at 9.0 cm has Rf = 0.40, with no units.",
            "Rf is always below 1 because the solvent front moves fastest.",
            "A substance with Rf near 0 hardly dissolves in that solvent.",
            "Changing the solvent changes every Rf value, so values are comparable only in the same solvent.",
            "Confirm identity by co-spotting, where two samples give one spot, not two.",
          ],
        },
        {
          subTitle: "Melting Point and Boiling Point as Purity Tests",
          bullets: [
            "A pure substance melts sharply at one temperature and boils at one temperature.",
            "Impurities depress melting, so a range starts below the true value and spreads.",
            "Impurities raise the boiling point and the liquid boils over a range.",
            "Measure a melting range in a capillary tube in a gently heated oil bath, reading a thermometer.",
            "Recrystallise an impure solid, then re-measure: the range should narrow to the true value.",
            "Chromatography and melting range are the two answers to 'how do you know it is pure?'.",
          ],
        },
      ],
      examinerTips: [
        "Quote Rf as a bare number, and show the two distances you divided to get it.",
        "For pure versus impure, write 'one spot only' against 'more than one spot'; a single sentence wins both marks.",
        "When choosing a separation method, name the property used: size, solubility, boiling point or density.",
        "State both effects of impurity on melting point: lower, and over a range.",
      ],
      commonMistakes: [
        "Drawing the baseline in ink, which then runs and ruins the chromatogram.",
        "Measuring the spot distance from the bottom edge of the paper instead of the baseline.",
        "Letting the solvent level rise above the baseline, dissolving the spots away.",
        "Saying an Rf value proves identity; it only supports it, so a co-spot is needed.",
        "Reporting a melting point as one value when the substance clearly softened over several degrees.",
      ],
      recap: [
        "Describe how you would obtain an Rf value for a dye from a paper chromatogram. [4]",
        "A solvent front moved 8.0 cm and a spot moved 5.6 cm. Calculate Rf and state its units. [2]",
        "Explain what a chromatogram with three spots tells you about a food colouring. [2]",
        "State and explain the effect of an impurity on the melting point of a solid. [3]",
      ],
    },
    {
      title: "Identifying Cations: Hydroxide Precipitates, Ammonium and Flame Tests",
      body: `## The Sodium Hydroxide Test

Place about a few cubic centimetres of the solution in a boiling tube, add aqueous sodium hydroxide **dropwise with shaking**, and keep adding until in excess.

An insoluble **metal hydroxide** precipitates, and its colour identifies the cation. Aluminium and zinc hydroxides dissolve in excess sodium hydroxide to give colourless solutions, because both are **amphoteric**.

Copper gives a **pale blue** precipitate, iron(II) a **green** one that browns on standing, iron(III) a **red-brown** one, and calcium a slow **white** one.

Magnesium, like calcium, gives a white precipitate that is insoluble in excess.

A negative result must also be described: no precipitate forms with sodium hydroxide, which rules out these ions.

## The Ammonia Shortcut for Copper

Aqueous ammonia behaves as a weak source of hydroxide ions, so it gives the same precipitates.

Its special value is copper: the pale blue precipitate **dissolves in excess ammonia** to give a deep blue solution.

No other common cation does this, so the two-step test identifies Cu2+ on its own.

## Ammonium Ions

Ammonium gives no precipitate with sodium hydroxide, so a different test is needed. Warm the solution with aqueous sodium hydroxide; ammonia gas is given off.

Hold **damp red litmus paper** at the mouth of the tube: it turns **blue**, and the gas has a pungent smell.

The reaction is NH4+ + OH- giving NH3, water, and the litmus change is what scores the mark.

Never put the litmus paper into the solution or touch it to the tube.

## Flame Tests and the Clean Loop

Flame colours are for the metal in a salt: **lithium crimson, sodium golden-yellow, potassium lilac, calcium brick-red, barium green**.

Dip a nichrome or platinum wire loop in concentrated hydrochloric acid,

then hold it in the hottest part of a clean blue flame until the flame shows no colour.

Pick up a small amount of the solid, often moistened with the acid, and return the loop to the flame.

Hydrochloric acid is used because metal **chlorides** vaporise more readily than the other salts.

Potassium's lilac is easily hidden by traces of sodium yellow, so it is viewed through **cobalt blue glass**.`,
      figure: qualitativeArt,
      groups: [
        {
          subTitle: "Precipitate Colours to Memorise",
          bullets: [
            "**Al3+:** white precipitate, dissolves in excess sodium hydroxide to a colourless solution.",
            "**Ca2+:** white precipitate, insoluble in excess; forms slowly and may need warming.",
            "**Cu2+:** pale blue precipitate, insoluble in excess sodium hydroxide.",
            "**Fe2+:** green precipitate, insoluble in excess, darkening to brown on standing.",
            "**Fe3+:** red-brown precipitate, insoluble in excess sodium hydroxide.",
            "**Zn2+:** white precipitate, dissolves in excess to a colourless solution.",
          ],
        },
        {
          subTitle: "Wording That Earns the Marks",
          bullets: [
            "Name the observation first, then the conclusion: 'a pale blue precipitate forms, so copper(II) ions are present'.",
            "Write 'soluble in excess' or 'insoluble in excess'; 'dissolves when more is added' also scores.",
            "Say 'warm gently' for the ammonium test, because ammonia gas needs heat to leave solution.",
            "State that the litmus paper is damp and red, because dry paper cannot show the alkaline gas.",
            "Give the reagent concentration words the syllabus uses, aqueous and dilute, not 'strong solution'.",
          ],
        },
        {
          subTitle: "Flame Test Practical Details",
          bullets: [
            "Clean the loop in hydrochloric acid and flame it until the flame stays colourless.",
            "Five colours: lithium crimson, sodium golden-yellow, potassium lilac, calcium brick-red, barium green.",
            "Concentrated hydrochloric acid turns the salt into a volatile chloride that colours the flame.",
            "Cobalt blue glass filters the sodium yellow so a faint potassium lilac can be seen.",
            "A loop is used instead of glass rods because glass contains sodium and would contaminate every test.",
          ],
        },
      ],
      examinerTips: [
        "Answer in the order: reagent added, precipitate colour, behaviour in excess, ion named.",
        "Learn the pair Al3+ and Zn2+ as the two white precipitates soluble in excess; everything else is insoluble.",
        "For ammonium, the two required words are warm and damp red litmus turning blue.",
        "If a question gives a white precipitate soluble in excess, name both candidates rather than guessing one.",
      ],
      commonMistakes: [
        "Confusing iron(II) green with iron(III) red-brown, or describing copper as dark blue in the precipitate.",
        "Saying the precipitate dissolves in excess sodium hydroxide for calcium, copper or iron.",
        "Using red litmus that is dry, or dipping the paper into the alkaline solution.",
        "Reusing a dirty wire loop, so the flame colour comes from the previous sample.",
        "Naming ammonia gas as the test for a cation instead of the gas produced from ammonium.",
      ],
      recap: [
        "Describe how you would distinguish between solutions of copper(II) sulfate and iron(III) sulfate using aqueous sodium hydroxide. [3]",
        "Describe the test for ammonium ions, naming the reagent, the conditions, and the observation. [3]",
        "Two white precipitates dissolve in excess sodium hydroxide. Name the cations and the type of behaviour shown. [2]",
        "State the flame colours of lithium, potassium and calcium, and explain how the wire loop is prepared. [4]",
      ],
    },
    {
      title: "Identifying Anions and Gases: Confirmatory Tests",
      body: `## Carbonate Ions

Add **dilute hydrochloric acid** to the solid or solution at room temperature. Effervescence occurs as carbon dioxide is released, and the gas turns **limewater milky**.

That pairing, acid plus effervescence plus milky limewater, is the whole answer; limewater is calcium hydroxide solution.

The miliness is insoluble calcium carbonate forming: CO2 + Ca(OH)2 giving CaCO3 and water.

## Sulfate Ions

Acidify the solution first with a little **dilute hydrochloric acid**, then add **aqueous barium chloride**.

A **white precipitate of barium sulfate** forms, and it is insoluble in the acid.

The acid is added first to remove carbonate, which would also give a white precipitate with barium.

Barium nitrate and dilute nitric acid may be used instead, but never sulfuric acid, since that adds sulfate.

## Halide Ions

Add **dilute nitric acid**, then **aqueous silver nitrate**, and warm gently if the change is slow.

Chloride gives a **white curdy precipitate** of silver chloride, bromide a **cream** precipitate of silver bromide, iodide a **yellow** precipitate of silver iodide.

Nitric acid is used because hydrochloric acid would itself add chloride ions and give a false white precipitate.

The precipitates then separate by their solubility in ammonia: AgCl dissolves in dilute ammonia, AgBr only in concentrated ammonia, and AgI stays insoluble.

Fluoride gives no precipitate with silver nitrate, which is a common exam aside.

## The Six Gas Tests

Each gas is identified by its own observation, and the wording matters. Hydrogen gives a **squeaky pop** with a lighted splint; oxygen **relights a glowing splint**.

Carbon dioxide turns **limewater milky**; chlorine **bleaches damp blue litmus paper white**, often turning it red first.

Ammonia turns **damp red litmus blue**; sulfur dioxide turns **acidified potassium dichromate(VI) paper green**.

Collect a gas over water when it is insoluble, or in a gas syringe when you must measure it.

| Gas | Test | Observation |
| --- | --- | --- |
| Hydrogen | burning splint | a squeaky pop |
| Oxygen | glowing splint | relights |
| Carbon dioxide | limewater | turns milky |
| Chlorine | damp blue litmus | bleaches white |
| Ammonia | damp red litmus | turns blue |
| Sulfur dioxide | acidified dichromate(VI) paper | orange to green |

## Testing for Water

White **anhydrous copper sulfate** turns **blue** with water, the usual test for the liquid. Blue **cobalt chloride paper** turns **pink** as it takes up water.`,
      groups: [
        {
          subTitle: "Anion Tests in Full Detail",
          bullets: [
            "**Carbonate:** dilute hydrochloric acid, effervescence, gas turns limewater milky.",
            "**Sulfate:** dilute hydrochloric acid first, then barium chloride; white precipitate, insoluble in acid.",
            "**Chloride:** dilute nitric acid then silver nitrate; white curdy precipitate of AgCl.",
            "**Bromide:** same reagents; cream precipitate of AgBr.",
            "**Iodide:** same reagents; yellow precipitate of AgI.",
            "The acid step comes first every time, so an interfering ion cannot give a false result.",
          ],
        },
        {
          subTitle: "Gas Tests and How to Collect Them",
          bullets: [
            "Hydrogen: a lighted splint burns it with a squeaky pop.",
            "Oxygen: a glowing splint bursts back into flame, so relights.",
            "Chlorine: damp blue litmus is bleached, which also shows the gas is acidic.",
            "Ammonia: the only common alkaline gas, so it turns damp red litmus blue.",
            "Sulfur dioxide: bleaches and turns acidified potassium dichromate(VI) paper green.",
            "Collect over water if insoluble; use an upward or downward delivery tube according to density.",
          ],
        },
        {
          subTitle: "Describing a Test as a Full Sentence",
          bullets: [
            "Name the reagent, the conditions, the observation, and the conclusion, in that order.",
            "Write 'a white precipitate forms' rather than 'it goes cloudy' for a solid product.",
            "Say 'the gas relights a glowing splint', naming the splint state, not just a flame.",
            "For chlorine, mention bleaching of damp litmus rather than the colour of the gas.",
            "A negative observation scores too: 'no precipitate forms, so sulfate ions are absent'.",
          ],
        },
      ],
      examinerTips: [
        "For sulfate, always write the acid first and then the barium chloride; the order is worth a mark.",
        "Match the acid to the test: hydrochloric for carbonate, hydrochloric for sulfate, nitric for halides.",
        "Never let hydrochloric acid appear in a halide test, because chloride is the ion being detected.",
        "Quote the precipitate colours as white, cream and yellow in that order for chloride, bromide, iodide.",
        "Distinguish observation from conclusion; examiners award the mark only for what you saw.",
      ],
      commonMistakes: [
        "Using limewater to identify an anion instead of the carbon dioxide it tests for.",
        "Describing oxygen as burning with a pop, or hydrogen as relighting a splint.",
        "Testing chlorine with dry litmus paper, which shows nothing at all.",
        "Calling silver chloride a cream precipitate and silver bromide a white one.",
        "Reporting that ammonia turns blue litmus red, reversing the correct alkaline result.",
      ],
      recap: [
        "Describe the tests for carbonate, sulfate and chloride ions in a single white solid. [6]",
        "Name the reagents used for the halide test and give the three precipitate colours. [4]",
        "Describe and name the results of the tests for ammonia and for chlorine. [4]",
        "Explain why dilute nitric acid, not dilute hydrochloric acid, is used before silver nitrate. [2]",
      ],
    },
    {
      title: "Quantitative Technique: Burettes, Titres and Mole Calculations",
      body: `## Using a Burette and a Pipette

Rinse the burette with the solution it will hold, the **titrant**, and the conical flask with **distilled water only**.

Rinsing the flask with the solution would add extra moles of it and enlarge every titre.

Fill the burette above the zero mark, then run liquid out through the tap to fill the jet and remove any air bubble.

Use a **pipette filler** for the pipette, never mouth suction, and let it drain by gravity; the drop left in the tip is delivered volume.

Read the **bottom of the meniscus** with your eye level with it, and record to **0.05 cm³**, so a reading is written as 24.50 cm³.

## Consecutive Titres and Averaging

Do a **rough titre** first to find roughly where the end-point falls, then repeat accurately without the dropwise-to-dry shortcut.

Add the titrant until one drop changes the indicator permanently; wash down the flask wall with distilled water as you approach it.

A titre is final reading minus initial reading, and consecutive titres are recorded as a table of results.

Two titres are **concordant** when they differ by no more than 0.10 cm³, and the mean of those only is used.

Never average the rough titre, and never average a clear outlier.

## Measuring Gas Volumes and Time

Attach a **gas syringe** to the flask, take the reading at eye level, and record to the nearest 0.5 cm³ if the scale allows.

Wait until the apparatus has cooled to room temperature, because hot gas occupies a larger volume.

Push the plunger gently up and down first to reduce friction before the final reading.

For a rate, measure the volume collected in a fixed time, or record the volume at fixed intervals until it stops rising.

Repeat each measurement three times, check for consistency, then average, quoting readings to the same precision.

## Moles in Volumetric and Gravimetric Analysis

In volumetric analysis, moles = concentration × volume in dm³, using the pipetted volume of the solution of known concentration.

The equation gives the mole ratio, so moles of the titrant at the end-point follow directly.

Concentration is then moles divided by the titre volume in dm³, and this is how an unknown concentration or a formula mass is found.

In gravimetric analysis the product is weighed instead: filter, wash, dry and weigh a precipitate, or heat a hydrated salt to **constant mass**.

Mass divided by formula mass gives moles, and the mole ratio of salt to water gives the formula of the hydrate.

Gas-volume work uses one mole of gas occupying 24 dm³ at room temperature and pressure.

## Planning and Safety

Separate the **independent**, **dependent** and **control** variables before writing a method. Keep every control variable fixed, for example concentration, volume, temperature and mass of solid.

Describe the method so another student could repeat it, then tabulate with units in every heading.

Risk in a school laboratory is controlled by eye protection, tied hair, acid added to water, and no flames near flammable liquids.`,
      groups: [
        {
          subTitle: "Recording Data the Examiner Accepts",
          bullets: [
            "Every burette reading is recorded to two decimal places, such as 0.00 or 24.50 cm³.",
            "Initial and final readings are both recorded, so the titre can be checked.",
            "A table of results has a column each for initial, final and titre, with units in the headings.",
            "Read the meniscus from the bottom, at eye level, to avoid a parallax error.",
            "The zero mark is at the top of the burette, so readings increase downwards.",
          ],
        },
        {
          subTitle: "Titration Procedure Points",
          bullets: [
            "Rough titre first, then at least two accurate titres until a concordant pair is obtained.",
            "Add the last portion dropwise, swirling constantly, and stop at the permanent colour change.",
            "Wash the inside of the flask with distilled water so no titrant is left unreacted on the wall.",
            "Indicator is added to the flask, usually two or three drops of methyl orange or phenolphthalein.",
            "Use the mean of the concordant titres only, and quote the mean to two decimal places.",
          ],
        },
        {
          subTitle: "Gas Syringe and Timing Technique",
          bullets: [
            "Check the apparatus is airtight before adding the reactants, or gas escapes and the volume is low.",
            "Start the stopclock at the instant the reactants mix, and record volume at fixed intervals.",
            "The reaction has finished when consecutive readings of volume are identical.",
            "Take the mean of three repeats, discarding an anomalous run only with a stated reason.",
            "Hot gas expands, so readings taken before cooling are systematically too large.",
          ],
        },
        {
          subTitle: "Calculation Routes and Design",
          bullets: [
            "moles = concentration × volume in dm³, and volume in cm³ is divided by 1000 first.",
            "Use the balanced equation for the mole ratio between the two solutions.",
            "One mole of gas occupies 24 dm³ at room temperature and pressure.",
            "Heating to constant mass proves all the water of crystallisation has left the salt.",
            "Name the independent variable, the dependent variable, and two controls when planning.",
            "A risk assessment names the hazard, the harm and the precaution for each step.",
          ],
        },
      ],
      examinerTips: [
        "Show every step of a titration calculation: moles, ratio, then concentration, and the arithmetic marks still pay out.",
        "Quote 24.50 not 24.5, and give the mean of concordant titres to the same precision as the readings.",
        "For a planning question, use the words repeated, averaged, and same, because they map directly onto method marks.",
        "State the reading method as 'bottom of the meniscus, at eye level', which is a mark in itself.",
      ],
      commonMistakes: [
        "Averaging all three titres including the rough one, which gives the wrong concentration.",
        "Rinsing the conical flask with the solution being measured instead of with distilled water.",
        "Using a 0.1 precision when the burette allows 0.05 cm³, or mixing up cm³ and dm³ in moles = c × V.",
        "Reading the gas syringe while the flask is still warm, so the volume is too high.",
        "Leaving an air bubble in the burette jet, which makes the first titre far too large.",
      ],
      recap: [
        "Twenty-five point zero cm³ of sodium hydroxide needed 24.50 cm³ of 0.100 mol dm⁻³ hydrochloric acid. Calculate the concentration of the alkali. [4]",
        "Explain what is meant by a concordant pair of titres and how the mean is chosen. [2]",
        "Describe how a burette reading is taken and to what precision it is recorded. [2]",
        "A hydrated salt was heated to constant mass. Explain the purpose of heating to constant mass and how the formula follows. [3]",
        "Plan an investigation of the effect of concentration on the volume of carbon dioxide collected in a gas syringe. [5]",
      ],
    },
  ],
};
