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

const acidReactionsArt = artPanel([
  {
    src: "ch07-acid-metal-reaction.webp",
    alt: "A test tube of clear acid with grey metal pieces fizzing vigorously, a lighted splint held near the mouth",
    caption: "Metal in acid gives off hydrogen",
  },
  {
    src: "ch07-insoluble-base-beaker.webp",
    alt: "A beaker of clear acid with white powder stirred into it and some powder settling undissolved on the bottom",
    caption: "Base added until it stops dissolving",
  },
]);

const measuringPhArt = artPanel([
  {
    src: "ch07-universal-indicator-strip.webp",
    alt: "Seven indicator paper strips graded in colour from red through yellow and green to blue and purple on a white tile",
    caption: "Universal indicator spans the scale",
  },
  {
    src: "ch07-soil-ph-testing.webp",
    alt: "A trowel of dark soil beside a test tube of soil suspension and a colour chart card",
    caption: "Testing the pH of soil against a chart",
  },
]);

const saltPrepArt = artPanel([
  {
    src: "ch07-neutralisation-beaker-pink.webp",
    alt: "A conical flask of pale pink solution swirled by a hand under a burette dripping colourless liquid",
    caption: "Titration to the end point",
  },
  {
    src: "ch07-filtration-crystallisation.webp",
    alt: "A funnel with folded filter paper holding blue crystals above a beaker of clear blue filtrate, an evaporating dish nearby",
    caption: "Filter, then evaporate to crystals",
  },
]);

const chapterSeven: Chapter = {
  number: 7,
  title: "Acids, Bases and Salts",
  intro: `Acids, bases and salts are one story told from three sides: the hydrogen ions that make an acid behave the way it does,\n\nthe hydroxide ions that cancel it out, and the salts left behind when they meet.\n\nThis chapter covers the four reactions of acids and their equations, the pH scale and the tenfold rule, the difference between strong and weak,\n\nthe routes to soluble and insoluble salts, and the solubility rules that tell you which route to take.`,
  subheadings: [
    {
      title: "The Properties of Acids and Their Four Reactions",
      figure: acidReactionsArt,
      body: `## What an Acid Really Is

An acid is a substance that releases **hydrogen ions, H⁺**, when it dissolves in water.

Every acid shows the same properties because every acidic solution contains the same H⁺(aq) ions. Acids taste sour, turn blue litmus red, and give a **pH below 7**.

Never taste laboratory chemicals, because many acids are corrosive and burn the skin and eyes.

## Acid plus Metal: Salt plus Hydrogen

A metal above hydrogen in the reactivity series reacts with a dilute acid to give **a salt and hydrogen**. **Mg + 2HCl → MgCl₂ + H₂**

The metal fizzes as hydrogen escapes and slowly disappears, leaving a colourless salt solution. **Zn + H₂SO₄ → ZnSO₄ + H₂**

Copper sits below hydrogen in the series, so copper with dilute hydrochloric acid shows no reaction.

Silver behaves the same way, which is why silver containers can hold some acids.

## Acid plus Base: Salt plus Water

Metal oxides and metal hydroxides are **bases**, and a base plus an acid gives **a salt and water only**. **CuO + H₂SO₄ → CuSO₄ + H₂O**

The black copper(II) oxide dissolves and the solution turns blue as the salt forms. **2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O**

Both solutions start colourless, so this neutralisation is invisible without an indicator.

## Acid plus Carbonate: Salt, Water and Carbon Dioxide

A carbonate plus an acid gives **a salt, water and carbon dioxide**. **CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂**

The brisk fizzing is called **effervescence**, the reliable sign that a carbonate is present. Effervescence carries on until either the acid or the carbonate has been used up.

## Testing the Two Gases

Hold a **lighted splint** near the mouth of the tube: hydrogen burns away with a **squeaky pop**.

Bubble the gas through **limewater**: carbon dioxide turns it **milky**, because insoluble calcium carbonate forms.

Write each equation as correct formulae first, then balance it, then count the atoms on both sides.`,
      groups: [
        {
          subTitle: "The Three Salt-Forming Reactions",
          bullets: [
            "**Metal + acid → salt + hydrogen**, for example zinc and dilute sulfuric acid giving zinc sulfate and hydrogen.",
            "**Base + acid → salt + water**, for example copper(II) oxide and dilute sulfuric acid giving copper(II) sulfate.",
            "**Carbonate + acid → salt + water + carbon dioxide**, for example calcium carbonate and dilute hydrochloric acid.",
            "Only the carbonate reaction gives off carbon dioxide, so effervescence alone tells you a carbonate was used.",
            "The metal and carbonate reactions are redox as well as acid reactions; the base reaction is pure neutralisation.",
            "In solution the salt is present as free ions, so evaporating the water is what recovers the solid salt.",
          ],
        },
        {
          subTitle: "Gas Tests, Word for Word",
          bullets: [
            "**Hydrogen:** a lighted splint produces a squeaky pop as the gas burns with the oxygen of the air.",
            "**Carbon dioxide:** limewater, which is calcium hydroxide solution, turns milky or cloudy white.",
            "The milkiness returns to clear if excess carbon dioxide is bubbled through, because calcium hydrogencarbonate dissolves.",
            "Collect the gas in a test tube over air, since both gases are only made in small volumes during the reaction.",
          ],
        },
        {
          subTitle: "Metals That Do Not React",
          bullets: [
            "Copper, silver and gold lie below hydrogen, so dilute hydrochloric and sulfuric acids cannot release hydrogen from them.",
            "The reaction of a metal with an acid becomes more vigorous as the metal rises in the reactivity series.",
            "Sodium and potassium react too violently with acids to be used in a school preparation of a salt.",
            "Magnesium ribbon must be cleaned of its oxide coating, or the reaction starts slowly and the results look erratic.",
          ],
        },
      ],
      examinerTips: [
        "Learn each reaction as a word equation first, then convert it, because a wrong formula cannot be rescued by correct balancing.",
        "For the carbonate reaction always list **three** products: salt, water and carbon dioxide, and use the word effervescence.",
        "Name the reagent in a gas test precisely: 'limewater turns milky' scores, while 'the gas turns the solution white' does not.",
        "When a question says 'no reaction is observed', answer with the position of the metal relative to hydrogen in the reactivity series.",
      ],
      commonMistakes: [
        "Writing the salt from hydrochloric acid with an sulfate formula, or forgetting that chloride is Cl⁻ and sulfate is SO₄²⁻.",
        "Balancing by changing formulae, such as writing MgCl instead of MgCl₂, which loses the formula marks as well as the balance.",
        "Claiming that all metals react with acids, so copper and hydrogen are wrongly produced.",
        "Describing the hydrogen test with a glowing splint, which is the oxygen test, not the hydrogen test.",
      ],
      recap: [
        "State the three products formed when dilute hydrochloric acid reacts with calcium carbonate. [3]",
        "Write a balanced symbol equation for the reaction of magnesium with dilute sulfuric acid. [3]",
        "Describe and name the result of the test for the gas given off in that reaction. [3]",
        "Explain why copper produces no gas when it is added to dilute hydrochloric acid. [2]",
      ],
    },
    {
      title: "The pH Scale, Indicators and Hydrogen Ion Concentration",
      body: `## Reading the Scale

The **pH scale runs from 0 to 14**, and it measures how concentrated the hydrogen ions in a solution are.

A solution below pH 7 is acidic, pH 7 is neutral, and a solution above pH 7 is alkaline.

Pure water is neutral at pH 7 because it holds equal, very small concentrations of H⁺ and OH⁻ ions.

Strong acids such as hydrochloric acid sit at pH 0-2, and weak acids such as ethanoic acid near pH 3-5.

## The Tenfold Rule

**One pH unit is a factor of ten** in hydrogen ion concentration, and this is the fact examiners test hardest.

A solution at pH 2 contains ten times as many hydrogen ions as one at pH 3.

A solution at pH 1 contains **a hundred times** as many hydrogen ions as one at pH 3.

The same tenfold steps run upwards, with each unit above 7 multiplying the hydroxide ion concentration by ten.

Rain water has a pH of about 5.6 because carbon dioxide from the air dissolves in it and forms a weak acid.

## The Four Indicators

An **indicator** is a dye that changes colour depending on the pH of the solution it is added to.

**Litmus** is red in acid, blue in alkali and purple at pH 7, but it cannot give a numerical value.

**Methyl orange** is red below about pH 3 and yellow above about pH 4, so it is useful for strong acid against alkali.

**Phenolphthalein** stays colourless in acid and turns pink in alkali, switching near pH 8-10.

**Universal indicator** gives the full rainbow and is matched against a colour chart to read a pH number.

## Measuring pH Correctly

Place a drop of the solution on a spotting tile and touch universal indicator paper to it.

Dip the paper in for a moment, then compare the colour with the chart and quote a whole number.

Never add indicator straight from the bottle into a solution you intend to keep, because you contaminate it.

For a gas such as ammonia, damp the litmus paper, since the gas must dissolve before it can change the pH.`,
      groups: [
        {
          subTitle: "Indicator Colours Side by Side",
          bullets: [
            "**Blue litmus turns red in acid**, and red litmus turns blue in alkali; neither changes in a neutral solution.",
            "**Methyl orange:** red in acid, orange during the change, yellow in alkali.",
            "**Phenolphthalein:** colourless in acid and neutral, pink to crimson once alkaline.",
            "**Universal indicator:** red at pH 1-2, orange and yellow at 3-6, green at 7, blue at 8-11, violet at 12-14.",
            "Litmus and methyl orange are narrow-range indicators, so they only say which side of neutral a solution lies.",
          ],
        },
        {
          subTitle: "pH Values Worth Remembering",
          bullets: [
            "Stomach acid is about pH 1-2, and lemon juice or ethanoic acid about pH 3-4.",
            "Coffee and fizzy drinks are mildly acidic, while milk sits very slightly acidic near pH 6.5.",
            "Rain water is near pH 5.6, and pure water exactly pH 7.",
            "Limestreams and baking soda solutions are weakly alkaline near pH 8-9, and sodium hydroxide solution pH 13-14.",
          ],
        },
        {
          subTitle: "How pH Is Asked in Data Questions",
          bullets: [
            "Estimating a pH from a colour means reading the chart, not guessing, so state the colour you saw first.",
            "A pH change from 5 to 3 means the hydrogen ion concentration has risen **a hundred-fold**, not doubled.",
            "Add the words 'hydrogen ion concentration' to any explanation of a pH change, since that phrase carries the mark.",
            "Acidic solutions with the same pH have the same hydrogen ion concentration, whatever acid produced them.",
          ],
        },
      ],
      examinerTips: [
        "Quote pH as a number, never as 'strong' or 'weak', because those words describe ionisation rather than the reading.",
        "For a tenfold question, write the concentration values, such as 0.01 mol/dm³ falling to 0.001 mol/dm³, before stating the change.",
        "Name the indicator before the colour when a question asks what you would use, otherwise the colour has no meaning.",
        "In an experiment question about soil or lake water, mention a colour chart and repeat readings from several sampling points.",
      ],
      commonMistakes: [
        "Saying a pH of 6 is twice as acidic as pH 3, treating the scale as additive instead of logarithmic.",
        "Using universal indicator to claim a precise pH 7.00 reading; it gives an approximate value from a colour chart.",
        "Calling litmus a pH meter and reporting 'pH 5' from litmus, which can only say acidic or alkaline.",
        "Confusing methyl orange's yellow-in-acid with its yellow-in-alkali answer, which is the opposite of the truth.",
      ],
      recap: [
        "State the colour of universal indicator at pH 1, pH 7 and pH 13. [3]",
        "A solution changes from pH 4 to pH 2; describe and explain what has happened to its hydrogen ion concentration. [3]",
        "Name one indicator that changes from colourless to pink, and state in which type of solution the pink colour appears. [2]",
        "Explain why pure water is neutral even though it contains both H⁺ and OH⁻ ions. [2]",
      ],
    },
    {
      title: "Strong and Weak Acids, Concentrated and Dilute",
      body: `## Strength Means Ionising

A **strong acid** ionises completely in water, so every molecule releases its hydrogen ions. Hydrochloric, sulfuric and nitric acids are the strong acids of the syllabus.

A **weak acid** ionises only partially, so most of its particles stay as whole molecules in solution.

Ethanoic acid, citric acid and carbonic acid are weak, and ethanoic acid is written CH₃COOH.

The ionising of a weak acid is reversible: **CH₃COOH ⇌ CH₃COO⁻ + H⁺**, with the equilibrium lying far to the left.

## Same Concentration, Different pH

Compare 0.1 mol/dm³ hydrochloric acid with 0.1 mol/dm³ ethanoic acid. Both hold the same number of acid particles per cubic centimetre, yet their pH values differ.

The hydrochloric acid produces about 0.1 mol/dm³ hydrogen ions and has a pH near 1.

The ethanoic acid produces far fewer hydrogen ions, so its pH sits nearer 3.

Because the strong acid has more hydrogen ions, magnesium reacts with it faster and more vigorously.

## Concentration Is a Separate Idea

**Concentrated** and **dilute** describe how much acid is dissolved in the water, not how it ionises.

A concentrated solution has little water per unit volume, a dilute solution has a great deal.

Dilute hydrochloric acid is still a strong acid, because what is present ionises completely.

Glacial ethanoic acid is concentrated but still weak, because most of its molecules stay undissociated.

A very dilute strong acid can even share the same pH as a concentrated weak acid.

## What Dilution Does to pH

Adding water to an acid lowers its hydrogen ion concentration, so its **pH rises**. For a strong acid, each tenfold dilution lifts the pH by about one unit.

The pH climbs towards 7 but never reaches or passes it, because the solution is still acidic.

Adding water to an alkali lowers the hydroxide ion concentration, so its **pH falls** towards 7.

A base can be made less alkaline by dilution, but it can never be turned into an acid by adding water.

Diluting a weak acid raises its pH by slightly less than one unit, because more of each molecule ionises.`,
      groups: [
        {
          subTitle: "Strong versus Weak, Point by Point",
          bullets: [
            "**Strong acid:** ionises completely, giving a high hydrogen ion concentration and a low pH.",
            "**Weak acid:** ionises partially, giving a low hydrogen ion concentration and a higher pH at the same molar concentration.",
            "Strength is a property of the molecules and their tendency to ionise, not of how much acid is dissolved.",
            "Both types still have pH below 7, and both turn blue litmus red, because both supply hydrogen ions.",
            "Neutralising 25 cm³ of either acid needs the same volume of alkali of equal concentration, since the particles present are equal.",
          ],
        },
        {
          subTitle: "Concentrated versus Dilute",
          bullets: [
            "Concentration is the amount of acid dissolved in a given volume of water, measured in mol/dm³.",
            "Diluting changes concentration immediately but never changes the strength of the acid used.",
            "Concentrated acids react more violently because more particles collide per cubic centimetre.",
            "Weak but concentrated ethanoic acid is corrosive, so 'weak' is never a safety label.",
          ],
        },
        {
          subTitle: "Dilution Arithmetic",
          bullets: [
            "Diluting 0.1 mol/dm³ hydrochloric acid to 0.01 mol/dm³ raises its pH from 1 to 2.",
            "Diluting it again to 0.001 mol/dm³ raises the pH to 3, and each step needs ten times the water.",
            "An acid at pH 4 diluted ten times moves to pH 5, but infinite dilution approaches pH 7 only.",
            "An alkali at pH 13 diluted ten times falls to pH 12, moving towards 7 by the same rule.",
          ],
        },
      ],
      examinerTips: [
        "Answer 'why is ethanoic acid weak' with **it only partially ionises in water**, never with 'it is dilute' or 'it is not very acidic'.",
        "When comparing equal concentrations, mention the number of hydrogen ions per cm³, because that is what sets both pH and rate.",
        "For a rate graph, the strong acid curve is steeper and finishes first, but both give the same final volume if moles of acid match.",
        "Keep the two pairs of words separate in your answer sheet: strong/weak for ionising, concentrated/dilute for water content.",
      ],
      commonMistakes: [
        "Equating weak with dilute, so a concentrated weak acid is wrongly called strong.",
        "Saying a weak acid has a pH above 7, confusing weak alkalinity with weak acidity.",
        "Claiming dilution turns an acid neutral or alkaline rather than simply closer to pH 7.",
        "Stating that a strong acid contains more hydrogen atoms in its formula than a weak acid does.",
      ],
      recap: [
        "Define the terms strong acid and weak acid in terms of ionisation. [4]",
        "Two acids of the same concentration give pH 1 and pH 3; explain the difference in terms of particles. [3]",
        "State and explain what happens to the pH of dilute hydrochloric acid when it is diluted ten times with water. [3]",
        "Explain why a dilute solution of a strong acid is still described as strong. [2]",
      ],
    },
    {
      title: "Bases, Alkalis and Neutralisation in Everyday Life",
      figure: measuringPhArt,
      body: `## Bases and Alkalis Are Not the Same Thing

A **base** is a metal oxide or a metal hydroxide that reacts with an acid to form a salt and water.

Copper(II) oxide, magnesium oxide and calcium oxide are bases that barely dissolve in water. An **alkali** is a base that dissolves in water, releasing **hydroxide ions, OH⁻**.

Sodium hydroxide and potassium hydroxide are strong alkalis that dissolve very readily. Calcium hydroxide dissolves only slightly, so limewater is a dilute solution of an alkali.

Every alkali is a base, but most bases are not alkalis, and that distinction carries marks.

## The Neutralisation Equation

Neutralisation is the hydrogen ions of an acid reacting with the hydroxide ions of a base. **H⁺(aq) + OH⁻(aq) → H₂O(l)** is the ionic equation behind every neutralisation.

The metal ions and the anion of the acid stay dissolved, and they are what crystallise as the salt.

Neutralisation gives out energy, so the temperature of the mixture rises as the two react.

Once the hydrogen ions have all been removed, the solution is neutral and no acid remains.

## Ammonia: The Alkali With No Metal

Ammonia gas dissolves in water to form **ammonia solution**, a weak alkali containing no metal at all.

**NH₃ + H₂O ⇌ NH₄⁺ + OH⁻**, so the hydroxide ions appear only in small numbers.

Ammonia turns damp red litmus paper blue, the standard test for this alkaline gas.

Its reaction with acids makes ammonium salts such as ammonium sulfate, which are used as fertilisers.

## Neutralisation Away from the Laboratory

The stomach secretes dilute hydrochloric acid, and too much of it causes the pain of indigestion.

An antacid tablet contains a weak alkali such as magnesium hydroxide that neutralises the excess acid safely.

Mouth bacteria produce acid that softens enamel, so treated toothpaste contains a mild alkali to neutralise it.

Acidic soils are treated with slaked lime, quicklime or powdered limestone to raise the pH towards neutral.

Factories that discharge acidic waste neutralise it with lime before the effluent reaches a river.`,
      groups: [
        {
          subTitle: "Bases, Alkalis and Their Ions",
          bullets: [
            "A base neutralises an acid; an alkali is a **soluble** base that supplies OH⁻(aq) ions.",
            "Insoluble bases still neutralise acids, but they do so as a solid suspended in the acid.",
            "Alkaline solutions feel slippery because hydroxide ions attack the oils of the skin.",
            "Metal oxides of Groups I and II are basic, while non-metal oxides such as carbon dioxide are acidic.",
            "Sulfur dioxide and nitrogen oxides from fuels dissolve in rain to make acidic oxides and acid rain.",
          ],
        },
        {
          subTitle: "Everyday Neutralisation, Explained",
          bullets: [
            "**Indigestion:** a weak alkali neutralises excess stomach acid without harming the gut lining.",
            "**Toothpaste:** a mild alkali neutralises the acids produced by bacteria feeding on sugars in the mouth.",
            "**Soil:** lime raises the pH of acidic ground so crops grow better and bacteria decompose matter faster.",
            "**Rivers and lakes:** crushed limestone or slaked lime neutralises acidic run-off from mining and acid rain.",
            "Weak alkalis are chosen for the body because a strong alkali would damage tissue by corrosive action.",
          ],
        },
        {
          subTitle: "Ammonia and Ammonium Salts",
          bullets: [
            "Ammonia solution is the only common weak alkali that contains no metal.",
            "Its ionising is reversible, which is exactly why it is classed as weak.",
            "Ammonia plus nitric acid gives ammonium nitrate, a soluble fertiliser salt.",
            "Ammonium salts with a warm alkali release ammonia gas, which turns damp red litmus blue.",
          ],
        },
      ],
      examinerTips: [
        "Define an alkali as **a base that dissolves in water producing hydroxide ions**, since naming it simply as a base loses the mark.",
        "Always give the ionic equation H⁺ + OH⁻ → H₂O when a question asks what happens during neutralisation at particle level.",
        "For an everyday use, name the acid being neutralised, the alkali used, and the benefit, in that order.",
        "State that neutralisation is exothermic whenever a temperature is mentioned in the question stem.",
      ],
      commonMistakes: [
        "Calling ammonia solution a strong alkali because it smells sharp; sharpness of smell is not strength.",
        "Saying alkalis neutralise acids by 'absorbing' them rather than reacting hydrogen ions with hydroxide ions.",
        "Describing a strong alkali as the treatment for indigestion, when a weak alkali is required.",
        "Naming metal oxides as acidic because they are oxides, forgetting that non-metal oxides are the acidic family.",
      ],
      recap: [
        "Distinguish between a base and an alkali, giving one example of each. [3]",
        "Write the ionic equation for neutralisation and name the ions that disappear from solution. [3]",
        "Explain, using the idea of neutralisation, why treated toothpaste helps prevent tooth decay. [3]",
        "Describe how a farmer improves very acidic soil and name a suitable substance. [2]",
      ],
    },
    {
      title: "Preparing Soluble Salts",
      figure: `

${saltPrepArt}`,
      body: `## Name the Salt Before You Make It

A salt is named from the metal in the base and the acid that produced it. Hydrochloric acid gives **chlorides**, sulfuric acid gives **sulfates**, nitric acid gives **nitrates**.

Ethanoic acid gives **ethanoates**, and these names must appear in any preparation answer. So copper(II) oxide plus dilute sulfuric acid produces **copper(II) sulfate**, CuSO₄.

## Route B: Acid plus Excess Insoluble Base

Warm the dilute acid in a beaker, since warming speeds the reaction without boiling it away.

Add the insoluble base a spatula-full at a time, stirring, until solid finally stops dissolving.

That leftover solid settling on the bottom shows the base is now in excess and the acid has reacted.

If every piece disappears instead, the acid is in excess, so add more solid and continue.

Filter the mixture to remove the excess base, which stays as residue on the filter paper. The filtrate is the clear salt solution, ready to be crystallised.

Pour it into an evaporating dish and **evaporate the filtrate to crystallisation point**, when a crust appears at the surface.

Let it cool slowly so crystals form, then filter them off and pat them dry with filter paper.

## Route A: Titration for Sodium, Potassium and Ammonium Salts

These bases are soluble, so no excess solid can ever be filtered off.

Measure 25.0 cm³ of the alkali with a pipette into a flask and add a few drops of indicator.

Run the acid in from a burette, swirling, until the indicator changes colour at the end point.

Repeat until concordant titres agree, then mix those exact volumes with no indicator present.

A titration is needed because it is the only way to know the volume that makes the solution neutral.

Evaporate the neutral solution to the crystallisation point and allow the salt to crystallise.

## Route C: Metal plus Acid, and Finishing Off

Zinc or magnesium may be used instead of an oxide, with the excess metal filtered off afterwards.

Never use sodium or potassium, because their reactions with acids are far too violent to control.

Do not boil the solution dry, since strong heating can drive off water of crystallisation and leave impurities behind.`,
      groups: [
        {
          subTitle: "The Excess Base Method step by step",
          bullets: [
            "Warm about 50 cm³ of dilute acid in a beaker on a water-bath or low heat.",
            "Add the insoluble base in portions with stirring until some solid no longer dissolves.",
            "Continue until effervescence stops, if a carbonate was used, as this also marks the end of the acid.",
            "Filter the mixture; the residue is excess base and the filtrate is the salt solution.",
            "Evaporate the filtrate to crystallisation point, cool to form crystals, then filter and dry them.",
            "Dry the crystals between two sheets of filter paper, or in a warm place, never in a strong flame.",
          ],
        },
        {
          subTitle: "The Titration Method step by step",
          bullets: [
            "Use it whenever both reactants dissolve, so that neither can be removed by filtering.",
            "Pipette 25.0 cm³ of alkali into a conical flask and add two drops of phenolphthalein.",
            "Add acid from the burette with swirling until the pink colour just disappears, then record the volume.",
            "Repeat rough then accurate titres until two readings agree within 0.10 cm³.",
            "Mix the two volumes without indicator, then evaporate to crystallisation point and dry as before.",
            "For sodium sulfate: 25.0 cm³ of sodium hydroxide needed 24.5 cm³ of sulfuric acid, so measure those volumes exactly.",
          ],
        },
        {
          subTitle: "Matching Salt to Route",
          bullets: [
            "Copper(II) sulfate, zinc sulfate and calcium chloride are made by the excess insoluble base method.",
            "Sodium chloride, potassium nitrate and ammonium sulfate must be made by titration.",
            "Magnesium chloride and zinc sulfate can be made from the metal with excess acid, filtered and crystallised.",
            "The chosen route depends only on whether the base or metal dissolves in the acid.",
          ],
        },
        {
          subTitle: "Why Each Step Exists",
          bullets: [
            "Excess base guarantees that no unreacted acid is left in the salt solution.",
            "Filtration removes only the solid that refused to dissolve, which is the excess reactant.",
            "Crystallisation point is found by the first crystals appearing on a glass rod dipped into the hot solution.",
            "Cooling slowly gives larger, better-formed crystals than rapid evaporation to dryness.",
          ],
        },
      ],
      examinerTips: [
        "Write the phrase **the base is added in excess** and follow it with 'to make sure all the acid reacts', since the reason earns the mark.",
        "Use the wording 'evaporate the filtrate to crystallisation point' rather than 'boil it dry', which is a common zero.",
        "Justify a titration with one clause: both reactants are soluble, so the correct volumes cannot be found by filtering off excess.",
        "Name the apparatus in order, pipette, burette, conical flask, and mention swirling at the end point.",
      ],
      commonMistakes: [
        "Trying to prepare sodium sulfate by the excess base method, because sodium hydroxide dissolves and cannot be filtered.",
        "Leaving the crystals wet, or heating them strongly, so the answer fails to mention drying with filter paper.",
        "Reading the burette from the top of the meniscus instead of the bottom, giving a wrong titre.",
        "Describing the residue as the salt solution, or the filtrate as the excess solid, mixing up the two names.",
      ],
      recap: [
        "Describe how you would prepare pure crystals of copper(II) sulfate from dilute sulfuric acid and copper(II) oxide. [6]",
        "Explain why a titration is used to prepare sodium sulfate but not copper(II) sulfate. [3]",
        "State what you would observe when the acid has completely reacted in the excess base method. [2]",
        "Give the names of the salts formed by hydrochloric acid, sulfuric acid and nitric acid respectively. [3]",
      ],
    },
    {
      title: "Preparing Insoluble Salts and the Salt Family",
      body: `## The Precipitation Route

An insoluble salt is made by **precipitation**, mixing two solutions that supply the ions of the salt.

Both starting compounds must be soluble, because the salt itself will never dissolve. Barium chloride solution mixed with sodium sulfate solution gives a white precipitate of barium sulfate.

**BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)** The ionic equation is **Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)**, since only those ions change.

## Running the Preparation

Dissolve each reactant separately in distilled water in two beakers. Pour the two solutions together and stir well so the ions meet throughout the mixture.

Let the precipitate settle, then add a drop of one solution to test whether precipitation is complete.

Filter the mixture and keep the solid on the paper, because the salt is the residue, not the filtrate.

**Wash the residue with distilled water** to remove the soluble sodium chloride clinging to it.

Dry the precipitate between sheets of filter paper or in a warm place, then collect the powder.

## Using the Solubility Rules

The rules decide which pair of solutions to pick, and they are worth learning as a table.

To make lead(II) iodide, use soluble lead(II) nitrate and soluble potassium iodide, both listed as soluble.

**Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)**, and the bright yellow solid is the precipitate.

Silver chloride is prepared the same way from silver nitrate and sodium chloride solutions.

Never use the excess base route for an insoluble salt, since a solid that will not dissolve cannot be crystallised from solution.

## Salt Families and Anion Tests

Every salt belongs to a family named after its acid: chlorides, sulfates, nitrates and ethanoates. Chlorides come from hydrochloric acid, sulfates from sulfuric acid, nitrates from nitric acid.

Test for chloride ions with acidified silver nitrate, which gives a white precipitate of silver chloride.

Test for sulfate ions with acidified barium nitrate, giving a white precipitate of barium sulfate.

Carbonates are confirmed by adding dilute hydrochloric acid and passing the gas into limewater.`,
      groups: [
        {
          subTitle: "Solubility Rules to Learn Cold",
          bullets: [
            "All sodium, potassium and ammonium salts dissolve, with no exceptions at all.",
            "All nitrates dissolve, which is why nitrates are the usual soluble partner in a precipitation.",
            "Most chlorides dissolve, except silver chloride and lead chloride, with lead chloride dissolving in hot water.",
            "Most sulfates dissolve, except barium sulfate and lead sulfate, while calcium sulfate is only sparingly soluble.",
            "Most carbonates are insoluble, apart from those of sodium, potassium and ammonium.",
            "Most hydroxides are insoluble, apart from those of sodium and potassium, with calcium hydroxide slightly soluble.",
          ],
        },
        {
          subTitle: "Precipitation Procedure in Order",
          bullets: [
            "Choose two soluble salts whose ions include the wanted insoluble pair.",
            "Dissolve each separately in distilled water, then mix the two solutions and stir.",
            "Allow the precipitate to settle, and check completeness with a further drop of one solution.",
            "Filter, retaining the residue, which is the insoluble salt you wanted.",
            "Wash the residue with distilled water, then dry it between filter papers.",
          ],
        },
        {
          subTitle: "Insoluble Salts You May Be Asked About",
          bullets: [
            "**Barium sulfate** from barium chloride and sodium sulfate, used in the test for sulfate ions.",
            "**Silver chloride** from silver nitrate and sodium chloride, the white curdy precipitate of the chloride test.",
            "**Lead(II) iodide** from lead(II) nitrate and potassium iodide, a bright yellow precipitate.",
            "**Calcium carbonate** from calcium chloride and sodium carbonate, the white scale found in kettles.",
          ],
        },
        {
          subTitle: "Anion Tests and Their Observations",
          bullets: [
            "Chloride ions with acidified silver nitrate give a white precipitate that darkens in light.",
            "Sulfate ions with acidified barium nitrate give a dense white precipitate of barium sulfate.",
            "Nitrate ions are detected by warming with sodium hydroxide and aluminium foil, releasing ammonia gas.",
            "Carbonate ions fizz with dilute acid, and the gas turns limewater milky.",
          ],
        },
      ],
      examinerTips: [
        "State clearly which product you keep: in a precipitation the salt is the **residue**, and the filtrate holds the unwanted soluble salt.",
        "Always name both washing and drying, because the soluble by-product is what makes an uncrystallised salt impure.",
        "Give state symbols (aq) and (s) in a precipitation equation, since the precipitate is the point of the answer.",
        "For 'which two solutions would you mix', check each starting salt against the rules before naming it, and show that the product is insoluble.",
      ],
      commonMistakes: [
        "Trying to prepare barium sulfate by reacting barium oxide with sulfuric acid, an excess base route that cannot be crystallised.",
        "Forgetting to wash the precipitate, so the dried salt still contains sodium chloride.",
        "Calling the filtrate the salt in a precipitation, since the insoluble salt never passes through the paper.",
        "Quoting silver chloride as a soluble chloride while ignoring the exception list.",
      ],
      recap: [
        "Describe how to prepare a pure, dry sample of barium sulfate from two solutions. [6]",
        "Name two solutions that could be mixed to make lead(II) iodide and write the balanced symbol equation. [4]",
        "State the solubility rules for nitrates, chlorides and carbonates. [3]",
        "Explain why the precipitate must be washed with distilled water after filtering. [2]",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_7: Chapter = chapterSeven;
