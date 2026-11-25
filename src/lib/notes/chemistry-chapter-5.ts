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

// ─── AI illustration panels (2 tiles each, on three different subheadings) ─────

const exoEndoArt = artPanel([
  {
    src: "ch05-endothermic-freezing-beaker.webp",
    alt: "A beaker of pale liquid sitting in a tray of ice with frost on the outside",
    caption: "Endothermic change makes the beaker cold",
  },
  {
    src: "ch05-hand-warmer.webp",
    alt: "A fabric hand-warmer pouch radiating heat with crystals inside the packet",
    caption: "A hand-warmer gives out heat",
  },
]);

const calorimetryArt = artPanel([
  {
    src: "ch05-exothermic-neutralisation.webp",
    alt: "A polystyrene cup inside a beaker of clear liquid with a thermometer and rising heat",
    caption: "Neutralisation warms the cup",
  },
  {
    src: "ch05-displacement-heat.webp",
    alt: "A flask of blue copper sulfate with a metal strip, steaming, and a rising red thermometer",
    caption: "Displacement gives out heat",
  },
]);

const fuelsArt = artPanel([
  {
    src: "ch05-combustion-calorimeter.webp",
    alt: "A spirit burner flame heating a metal can of water on a tripod with a lid thermometer",
    caption: "A fuel burner heats a can of water",
  },
  {
    src: "ch05-bond-energy-methane.webp",
    alt: "A methane molecule pulled apart into atoms on one side and new bonds forming on the other",
    caption: "Methane: bonds break in, bonds form out",
  },
]);

// ─── SVG diagram 1 — exothermic and endothermic energy level curves (SH2) ──────

// ─── SVG diagram 2 — bond energy cycle, H2 + Cl2 → 2HCl (SH3) ──────────────────

// ─── SVG diagram 3 — everyday energy transfers (SH6) ───────────────────────────

// ─── The chapter ───────────────────────────────────────────────────────────────

export const CHEMISTRY_CHAPTER_5: Chapter = {
  number: 5,
  title: "Chemical Energetics",
  intro: `Chemical reactions either warm up or cool down the world around them, and the reason is always the same:\n\nenergy is shuffled between the chemicals and their surroundings.\n\nThis chapter defines **exothermic** and **endothermic** changes, draws them as **energy level diagrams**, explains them in terms of **bond breaking and bond making**,\n\nthen measures the energy with a **calorimeter** and applies it to the **fuels** we burn, eat and drive on.`,
  subheadings: [
    {
      title: "Exothermic and Endothermic Reactions",
      body: `## The Two Definitions\n\nAn **exothermic reaction** transfers energy to the surroundings, so those surroundings get hotter and the temperature rises.\n\nIts enthalpy change, ΔH, is negative because the products end up with less energy than the reactants.\n\nAn **endothermic reaction** takes energy in from the surroundings, so the surroundings cool and the temperature falls.\n\nHere ΔH is positive, because the products finish with more energy than the reactants.\n\nEnergy is never created or destroyed; it only moves between the chemicals and their surroundings.\n\n## Reading the Temperature Change\n\nA thermometer is the evidence an examiner wants you to quote in a practical question. For an exothermic change write "the temperature of the surroundings increases."\n\nFor an endothermic change write "the temperature of the surroundings decreases." Avoid the bare phrase "gives off heat"; name the surroundings and state the direction of change.\n\n## Examples That Are Exothermic\n\nCombustion, such as burning methane, releases energy quickly as heat and light. Neutralisation between an acid and an alkali warms the solution around it.\n\nRespiration breaks down glucose in your cells, so it is exothermic too. Most displacement and combination reactions also give out energy.\n\n## Examples That Are Endothermic\n\nThermal decomposition, such as heating limestone, needs a constant supply of energy. Dissolving ammonium salts in a cold pack cools the water very sharply.\n\nPhotosynthesis and evaporation both take energy in as well. The next sections follow that energy onto the level diagram and into the bonds themselves.`,
      figure: exoEndoArt,
      groups: [
        {
          subTitle: "Exothermic Compared with Endothermic",
          bullets: [
            "**Exothermic:** energy is released to the surroundings, so their temperature rises and ΔH is negative.",
            "**Endothermic:** energy is taken in from the surroundings, so their temperature falls and ΔH is positive.",
            "The system losing energy is the surroundings gaining it, so total energy is always conserved.",
            "A rise in thermometer reading is the classic signal for an exothermic reaction.",
            "A fall in thermometer reading, or a beaker feeling cold, signals an endothermic one.",
          ],
        },
        {
          subTitle: "Named Examples to Recall",
          bullets: [
            "**Exothermic — combustion:** every fuel, from methane to ethanol, releases heat when it burns.",
            "**Exothermic — neutralisation:** acid plus alkali gives a salt, water and a temperature rise.",
            "**Exothermic — respiration:** glucose plus oxygen releases the energy your cells depend on.",
            "**Endothermic — thermal decomposition:** one solid splits up only while it is being heated.",
            "**Endothermic — dissolving ammonium salts:** ammonium nitrate in water makes an instant cold pack.",
          ],
        },
        {
          subTitle: "Worked Example — Predicting the Sign",
          bullets: [
            "**Question:** a reaction mixture drops from 20 °C to 12 °C; classify the change and its ΔH.",
            "**Reasoning** the surroundings lost energy to the chemicals, so the reaction is endothermic.",
            "**Answer** the temperature fell, so energy was taken in and ΔH is positive.",
          ],
        },
      ],
      examinerTips: [
        "Always tie the definition to the wording 'energy is released to (or taken from) the surroundings' plus a temperature change; one of those alone only earns half the mark.",
        "Quote the direction of the thermometer change in words, not just 'heat given out', because a mark scheme rewards the named observation.",
        "Learn respiration as exothermic and photosynthesis as endothermic; the two are constantly swapped.",
        "When asked for an example, give a named reaction such as 'neutralisation of hydrochloric acid with sodium hydroxide', not a vague 'a reaction'.",
      ],
      commonMistakes: [
        "Saying an exothermic reaction 'contains more heat' than an endothermic one; heat is transferred, not stored.",
        "Writing that energy is destroyed during a reaction, which breaks conservation of energy.",
        "Confusing a large temperature rise with 'more energy overall'; it depends on both energy and the mass heated.",
        "Calling the cooling of a cold pack exothermic because 'something is happening'; energy is being absorbed, so it is endothermic.",
      ],
      recap: [
        "Define exothermic and endothermic, each in terms of energy transfer and temperature change. [4]",
        "Name one exothermic and one endothermic reaction from the syllabus. [2]",
        "A beaker feels cold during a reaction. State what this shows about energy and about ΔH. [3]",
        "Explain why respiration is described as exothermic. [2]",
      ],
    },
    {
      title: "Energy Level Diagrams",
      body: `## The Parts of a Level Diagram\n\nAn **energy level diagram** plots energy on the vertical axis against the progress of reaction on the horizontal axis.\n\nThe reactants sit on a line on the left and the products on a line on the right; their relative heights tell you everything.\n\nThe curve rises from the reactants to a peak before falling to the products. That peak is the hill the particles must climb before reacting.\n\n## Reading an Exothermic Curve\n\nIn an exothermic change the products lie lower than the reactants, so energy has been released.\n\nThe arrow labelled ΔH points downwards from reactants to products, and its value is negative. Combustion and neutralisation both produce curves of this shape.\n\n## Reading an Endothermic Curve\n\nIn an endothermic change the products lie higher than the reactants, so energy has been absorbed. The ΔH arrow points upwards and the value is positive.\n\nThermal decomposition gives exactly this shape.\n\n## Activation Energy and Why Starting Needs a Spark\n\nThe **activation energy, Ea**, is the minimum energy the particles need to start reacting.\n\nIt is drawn as the vertical distance from the reactant level up to the top of the curve.\n\nEven a strongly exothermic reaction has an Ea hump, which is why a match or spark is needed first.\n\nThe initial energy input gets some particles over the hill; once reacting, the heat released keeps the rest going.\n\n## What Ea and ΔH Do Not Depend On\n\nThe activation energy is lowered by a catalyst, but the ΔH level difference is left completely unchanged.\n\nΔH depends only on where reactants and products start and finish, never on the route between them.`,
      groups: [
        {
          subTitle: "Labelling the Diagram Safely",
          bullets: [
            "**Y-axis** is energy; the **X-axis** is the progress of reaction, and neither needs units.",
            "Draw two short horizontal lines for reactants and products, then join them with a single hump.",
            "**Ea** is measured from the reactant line up to the very top of the curve.",
            "**ΔH** is measured between the reactant line and the product line only.",
            "The curve height tells you ΔH; the hump above the reactants tells you Ea.",
          ],
        },
        {
          subTitle: "Exothermic Versus Endothermic Shapes",
          bullets: [
            "Exothermic: products lower than reactants, so ΔH is negative and the arrow points down.",
            "Endothermic: products higher than reactants, so ΔH is positive and the arrow points up.",
            "Both types still have an activation energy hump; the hump never disappears.",
            "A catalyst lowers the hump but leaves the reactant and product levels exactly where they were.",
          ],
        },
        {
          subTitle: "Worked Example — Reading Values Off a Curve",
          bullets: [
            "**Question:** reactants sit at 120 kJ, products at 40 kJ; state Ea if the peak is at 200 kJ.",
            "**Step 1 — find Ea** Ea = peak − reactants = 200 − 120 = 80 kJ.",
            "**Step 2 — find ΔH** ΔH = products − reactants = 40 − 120 = −80 kJ.",
            "**Answer** Ea is 80 kJ and ΔH is −80 kJ, so the reaction is exothermic.",
          ],
        },
      ],
      examinerTips: [
        "Label both axes and both lines on any sketch; a neat unlabelled curve often scores less than a scruffy labelled one.",
        "Measure Ea from the reactant level to the top, never from the product level or from the ground.",
        "When asked why a lit match is needed for combustion, name activation energy, not 'heat'.",
        "State that a catalyst lowers Ea but leaves ΔH unchanged; examiners watch for students wrongly saying it changes ΔH.",
      ],
      commonMistakes: [
        "Drawing products lower for an endothermic reaction, or forgetting the ΔH arrow entirely.",
        "Saying a spark provides the energy of the reaction; it only supplies the small activation energy to start it.",
        "Claiming a catalyst makes a reaction more exothermic; a catalyst changes the rate, not ΔH.",
        "Measuring ΔH from the top of the hump instead of between the reactant and product lines.",
      ],
      recap: [
        "Draw and label an energy level diagram for an exothermic reaction, including Ea and ΔH. [4]",
        "Explain why a piece of coal needs a lit splint to begin burning although combustion is exothermic. [3]",
        "On a curve, state how a catalyst changes the diagram and what it leaves unchanged. [3]",
        "Reactants are at 60 kJ and products at 150 kJ. Deduce the sign of ΔH and the reaction type. [2]",
      ],
    },
    {
      title: "Bond Breaking, Bond Making and Bond Energy",
      body: `## The Rule That Explains Everything\n\n**Breaking chemical bonds always takes in energy**; the attraction between atoms is being overcome.\n\n**Making chemical bonds always releases energy**; the atoms settle into a lower, more stable state.\n\nThat is the whole story of energetics at particle level, and every ΔH follows from those two facts.\n\n## The Order of Events in a Reaction\n\nA reaction happens by bonds in the reactants breaking, then new bonds forming in the products.\n\nThis is why the activation energy hump on the diagram exists: energy must be put in to break the old bonds first.\n\nThe difference between energy in and energy out is what shows up as ΔH.\n\n## The Master Equation\n\nThe enthalpy change from bond energies is: **ΔH = (energy taken to break bonds) − (energy given making bonds)**.\n\nIf more energy is released than absorbed, ΔH is negative and the reaction is exothermic.\n\nIf more energy is absorbed than released, ΔH is positive and the reaction is endothermic.\n\n## Using Given Bond Energies\n\nBond energies are given as the energy released per mole when one bond forms, so the same number is absorbed to break it.\n\nMultiply each value by the number of that bond actually present in the balanced equation.\n\nIn carbon dioxide there are two C=O bonds, and in each water molecule there are two O–H bonds.\n\nCounting these bonds wrongly is the most common arithmetic error in the whole topic.`,
      groups: [
        {
          subTitle: "Breaking and Making, Stated Correctly",
          bullets: [
            "**Bond breaking is endothermic** because energy must be supplied to separate the atoms.",
            "**Bond making is exothermic** because energy is released when new attractions form.",
            "The total energy is conserved; the sign of ΔH simply compares in against out.",
            "A reaction can feel hot or cold purely because of the imbalance between the two.",
            "Bonds of the same type need the same energy to break as they release on forming.",
          ],
        },
        {
          subTitle: "Worked Calculation — Bond Energies (Methane Combustion)",
          bullets: [
            "**Question:** find ΔH for CH₄ + 2O₂ → CO₂ + 2H₂O using bond energies.",
            "**Step 1 — bonds broken (energy in)** 4 C–H plus 2 O=O = 4×438 + 2×498 = 2748 kJ.",
            "**Step 2 — bonds made (energy out)** 2 C=O plus 4 O–H = 2×804 + 4×463 = 3460 kJ.",
            "**Step 3 — apply the formula** ΔH = energy in − energy out = 2748 − 3460 = −712 kJ/mol.",
            "**Step 4 — interpret the sign** a negative ΔH means burning methane is exothermic.",
            "**Answer** the estimated enthalpy change is −712 kJ per mole of methane burned.",
          ],
        },
        {
          subTitle: "Worked Calculation — Hydrogen and Chlorine",
          bullets: [
            "**Question:** H–H is 436, Cl–Cl is 243 and H–Cl is 431; find ΔH for H₂ + Cl₂ → 2HCl.",
            "**Step 1 — energy in** break one H–H and one Cl–Cl = 436 + 243 = 679 kJ.",
            "**Step 2 — energy out** make two H–Cl bonds = 2×431 = 862 kJ.",
            "**Answer** ΔH = 679 − 862 = −183 kJ/mol, so the reaction is exothermic.",
          ],
        },
      ],
      examinerTips: [
        "Say 'energy is released when bonds are formed', not 'energy is released by breaking bonds'; the wording flips the mark.",
        "Show two columns of working: total energy in on top, total energy out below, then one subtraction, so method marks are secure.",
        "Multiply each bond energy by the number of that bond in the equation, including the hidden ones in CO₂ and H₂O.",
        "End every answer by naming the sign and the reaction type, because the sign alone is only part of the credit.",
      ],
      commonMistakes: [
        "Forgetting that carbon dioxide has two C=O bonds, and each water has two O–H bonds.",
        "Doing energy out minus energy in, which reverses the sign of ΔH.",
        "Assuming a value given 'per bond' should not be doubled when two identical bonds form.",
        "Confusing bond energy with activation energy; one is a single bond, the other is the hill on the diagram.",
      ],
      recap: [
        "State and explain what happens to energy when a chemical bond is broken and when one is made. [4]",
        "Use ΔH = energy in − energy out to decide whether a reaction with 800 in and 1200 out is exo- or endothermic. [3]",
        "Calculate ΔH for H₂ + Cl₂ → 2HCl from bond energies H–H 436, Cl–Cl 243, H–Cl 431. [4]",
        "Explain why methane combustion is exothermic purely in terms of bond making and breaking. [3]",
      ],
    },
    {
      title: "Measuring Energy Changes Experimentally",
      body: `## The Simple Calorimeter\n\nA student calorimeter is a **polystyrene cup** holding the reaction solution, fitted with a **lid** and a **thermometer**.\n\nPolystyrene is a good insulator, the lid blocks heat escaping upwards, and the thermometer records the change.\n\nFor a reaction in solution you measure the starting temperature, add the reactants, and record the highest or lowest temperature reached.\n\nThe temperature rise or fall is then converted into an energy value.\n\n## The Energy Equation\n\nThe heat transferred is found from **Q = mcΔT**, where m is the mass being heated in grams.\n\nThe specific heat capacity of water is taken as **c = 4.2 J per gram per °C**.\n\nThe term ΔT is the temperature change, calculated as final temperature minus initial temperature. The answer Q comes out in joules, so divide by 1000 to give kilojoules.\n\n## From Energy to Energy per Mole\n\nDividing Q by the number of moles reacted gives the enthalpy change per mole, which is the value the syllabus wants.\n\nThe moles come straight from the concentration and volume you measured.\n\n## Heat Loss and How to Reduce It\n\nThe biggest error is that some energy warms the cup and the air instead of the solution, so the reading is too small.\n\nInsulating the cup with cotton wool, using a lid, and adding reactants quickly all limit the loss.\n\nRepeating and averaging the experiment, and drawing a cooling-curve graph, correct the reading further.\n\nThe usual assumptions are that the solution's density is 1 g/cm³ and its specific heat capacity equals that of water.`,
      figure: calorimetryArt,
      groups: [
        {
          subTitle: "Setting Up and Measuring",
          bullets: [
            "**Polystyrene cup:** insulates the reaction so less heat escapes to the room.",
            "**Lid:** reduces heat loss from the open surface and holds the thermometer.",
            "**Thermometer:** read to 0.1 °C and note the maximum (exo) or minimum (endo) reached.",
            "**Stirring:** mixes the solution so the temperature measured is uniform throughout.",
            "**Measure volumes** with a pipette or measuring cylinder before adding reactants.",
          ],
        },
        {
          subTitle: "Worked Calculation — Q = mcΔT (Neutralisation)",
          bullets: [
            "**Question:** 100 g of solution warms by 6.8 °C as 0.050 mol of water forms; find ΔH.",
            "**Step 1 — write the equation** Q = mcΔT, using c equal to 4.2 J per g per °C.",
            "**Step 2 — substitute the values** Q = 100 × 4.2 × 6.8.",
            "**Step 3 — multiply out** Q = 2856 J, which equals 2.856 kJ.",
            "**Step 4 — divide by the moles** 2856 ÷ 0.050 = 57120 J per mole.",
            "**Answer** ΔH ≈ −57 kJ per mole, so the reaction is exothermic.",
          ],
        },
        {
          subTitle: "Errors, Assumptions and Improvements",
          bullets: [
            "**Heat-loss error:** some energy warms the cup and air, making the calculated value too small.",
            "**Assumption:** the solution is treated as water with density 1 g/cm³ and c = 4.2.",
            "**Improvement:** insulate the cup, fit a lid and add reactants fast to cut losses.",
            "**Improvement:** plot temperature against time and extend the cooling curve back for a fair ΔT.",
            "**Improvement:** use excess of one reactant so the other reacts completely.",
          ],
        },
      ],
      examinerTips: [
        "State the units of every quantity: m in grams, ΔT in °C, c in J/g°C and Q in joules, then convert to kJ before dividing by moles.",
        "Divide by the moles of the reactant that runs out, then report ΔH in kJ per mole with the correct sign.",
        "When asked to improve accuracy, name a specific change (lid, insulation, faster mixing) and the error it reduces.",
        "Quote both assumptions: the solution has the density of water and the same specific heat capacity as water.",
      ],
      commonMistakes: [
        "Using mass in kilograms, or leaving Q in joules when the answer is required in kJ per mole.",
        "Forgetting to divide by moles and reporting the total heat instead of the molar enthalpy change.",
        "Ignoring the sign, so an exothermic reaction is written as a positive ΔH.",
        "Treating heat loss as an advantage; it always makes the measured temperature change too small.",
      ],
      recap: [
        "Describe the simple calorimeter used to measure the heat of neutralisation. [4]",
        "Calculate Q when 100 g of water is heated by 5.0 °C, using c = 4.2 J/g°C. [3]",
        "State two assumptions made when using Q = mcΔT for a reaction in solution. [2]",
        "Explain why a lid and cotton-wool insulation improve the accuracy of the experiment. [3]",
      ],
    },
    {
      title: "Energy from Fuels",
      body: `## Fuels Are Stored Chemical Energy\n\nA **fuel** is a substance burned to release energy, and that energy originally came from making its bonds.\n\nCombustion of a hydrocarbon breaks its bonds and forms very strong C=O and O–H bonds, releasing a large net amount of energy.\n\nThe energy is transferred to the surroundings as heat and light, which is what makes fuels useful.\n\n## Comparing Fuels by Energy per Gram\n\nDifferent fuels release different amounts of energy for each gram burned, so we compare them per gram.\n\nThe usual experiment burns a fuel to heat a known mass of water and applies Q = mcΔT.\n\nDividing the heat released by the mass of fuel burned gives the energy in kJ per gram.\n\nBecause some heat always escapes, the measured value is lower than the true energy of the fuel.\n\n## Fuels in Food and in Transport\n\nFood is a fuel: respiration releases the energy stored in sugars and fats to power the body.\n\nFats store more energy per gram than carbohydrates, which is why they are the densest food fuel.\n\nIn transport, petrol, diesel and bioethanol release energy by combustion to drive the engine.\n\nChoosing a fuel trades cost, energy per gram and the pollution it causes against one another.\n\n## Clean Fuels, Dirty Fuels and Hydrogen\n\nSulfur impurities in some fuels make sulfur dioxide, a cause of acid rain, while a dirty fuel also makes poisonous carbon monoxide.\n\nHydrogen burns cleanly, forming only water and no carbon dioxide at all.\n\nIn a **fuel cell**, hydrogen and oxygen react to give an electric current rather than a flame.\n\nThat is why hydrogen is studied as a future transport fuel, linking this topic to electrochemistry.`,
      figure: fuelsArt,
      groups: [
        {
          subTitle: "Why Fuels and Food Release Energy",
          bullets: [
            "Burning a fuel makes stronger bonds in CO₂ and H₂O than it breaks in fuel and oxygen.",
            "Because energy out exceeds energy in, every fuel combustion is exothermic.",
            "Respiration releases food energy slowly through enzyme-controlled oxidation.",
            "Fat stores more energy per gram than carbohydrate, so it is the richest food fuel.",
          ],
        },
        {
          subTitle: "Worked Calculation — Energy per Gram of Fuel",
          bullets: [
            "**Question:** burning 0.5 g of ethanol heats 100 g of water by 20 °C; find kJ per gram.",
            "**Step 1 — heat absorbed** Q = mcΔT = 100 × 4.2 × 20 = 8400 J = 8.4 kJ.",
            "**Step 2 — divide by fuel mass** 8.4 ÷ 0.5 = 16.8 kJ per gram.",
            "**Answer** the ethanol released about 16.8 kJ/g, which is below its true value.",
            "**Reason** the loss is mainly heat escaping to the air and warming the can.",
          ],
        },
        {
          subTitle: "Choosing and Evaluating Fuels",
          bullets: [
            "**Energy released per gram** decides how far a vehicle travels on a given mass of fuel.",
            "**Clean fuels** such as hydrogen give water only and no carbon dioxide when burned.",
            "**Dirty fuels** with sulfur make sulfur dioxide, contributing to acid rain.",
            "**Incomplete combustion** of any carbon fuel can form poisonous carbon monoxide.",
            "**A fuel cell** converts hydrogen and oxygen directly into electricity with no combustion flame.",
          ],
        },
      ],
      examinerTips: [
        "Compare fuels by energy per gram, not by total heat, because total heat depends on how much you happened to burn.",
        "Name the sources of error in a flame calorimeter: heat lost to air, to the can and to the surroundings.",
        "State hydrogen's advantage as a clean fuel (only water) and its drawback (storage and flammability) for full credit.",
        "Link fuel cells to the fact that the hydrogen-oxygen reaction is still exothermic and releases energy.",
      ],
      commonMistakes: [
        "Saying a fuel 'contains heat'; it stores chemical energy that is released on combustion.",
        "Reporting the raw Q value instead of dividing by the fuel mass to get kJ per gram.",
        "Claiming hydrogen produces carbon dioxide when it burns; it produces only water.",
        "Forgetting that incomplete combustion gives carbon monoxide or soot rather than carbon dioxide.",
      ],
      recap: [
        "Explain, using bond energies, why burning methane is exothermic. [3]",
        "A fuel heats 100 g of water by 25 °C for every 1.0 g burned. Calculate its energy in kJ/g. [3]",
        "State and explain one advantage and one disadvantage of hydrogen as a fuel. [4]",
        "Describe how a fuel cell releases energy and name its product. [2]",
      ],
    },
    {
      title: "Energy Changes in Everyday Processes",
      body: `## Heat Stores That Can Be Recharged\n\nA **hot-water bottle** and a **reusable hand warmer** both store energy in a change that can be reversed.\n\nA hand warmer holds a supersaturated solution of sodium ethanoate with a small metal crystal.\n\nSnapping the crystal starts **crystallisation**, and the salt setting out of solution releases heat as it bonds.\n\nThe pack becomes solid and warm, and that warmth is the energy released by bond making.\n\n## Recharging by Boiling\n\nBoiling the used pack redissolves the crystals, and this dissolving step takes energy in.\n\nThe solution is then again supersaturated, ready to release that stored energy on the next snap.\n\nThe two directions are a matched pair: heating loads energy in, crystallisation gives it back out.\n\n## Cold Packs and Evaporative Cooling\n\nA **cold pack** works the other way, dissolving an ammonium salt so energy is absorbed and the pack chills.\n\nEvaporation cools because the fastest-moving particles escape from the surface and leave the rest colder. Sweat cooling your skin is exactly this endothermic process at work.\n\n## Why These Everyday Changes Matter\n\nEach example is really the same bond-energy principle dressed in familiar clothing. Bond making warms the hand warmer, while overcoming attractions in dissolving or evaporation cools the pack.\n\nRecognising the direction of the energy transfer tells you whether the change is exothermic or endothermic.`,
      groups: [
        {
          subTitle: "Reversible Heat Stores",
          bullets: [
            "**Sodium ethanoate hand warmer:** crystallisation is exothermic, so heat is given out.",
            "**Boiling to recharge:** redissolving the salt is endothermic, so energy is put back in.",
            "A hot-water bottle releases energy as its cooling water gives heat to you.",
            "The energy in a heat store comes from the change of state, not from a chemical fuel.",
          ],
        },
        {
          subTitle: "Cooling Processes Explained",
          bullets: [
            "**Cold pack:** dissolving an ammonium salt absorbs heat, so the pack feels cold.",
            "**Evaporation:** escaping high-energy particles lower the average energy left behind.",
            "**Melting ice:** absorbs heat from the drink, so the drink cools as the ice melts.",
            "**Respiration:** the body's continuous exothermic reaction that helps maintain temperature.",
          ],
        },
        {
          subTitle: "Worked Example — Classifying a Household Change",
          bullets: [
            "**Question:** a hand warmer is warmed in boiling water, then clicked to release heat; classify both stages.",
            "**Step 1 — the charging stage** redissolving crystals takes energy in, so it is endothermic.",
            "**Step 2 — the releasing stage** crystallisation gives energy out, so it is exothermic.",
            "**Answer** charging is endothermic and use is exothermic, and the pair reverses one another.",
          ],
        },
      ],
      examinerTips: [
        "For a hot-pack question, name the crystallisation step as exothermic and the dissolving step as endothermic; both marks are often needed.",
        "Explain evaporative cooling with 'the most energetic particles escape, so the average kinetic energy falls'.",
        "Distinguish the hand warmer (chemical change) from the hot-water bottle (physical cooling) if asked to compare them.",
        "Always state the direction of energy transfer, into or out of the surroundings, to justify your classification.",
      ],
      commonMistakes: [
        "Calling the boiling stage exothermic because it involves hot water; the pack is gaining energy, so it is endothermic.",
        "Saying evaporation 'removes cold'; it removes the fastest particles, leaving the liquid cooler.",
        "Confusing a cold pack dissolving salt with a chemical reaction that gives out gas.",
        "Attributing the hand-warmer heat to combustion rather than to crystallisation of the salt.",
      ],
      recap: [
        "Explain how a reusable hand warmer releases heat and how it is recharged. [4]",
        "Explain, in terms of particles, why evaporation causes cooling. [3]",
        "Classify the dissolving of an ammonium salt in a cold pack and justify the classification. [2]",
        "State one difference between the energy source of a hand warmer and of a hot-water bottle. [2]",
      ],
    },
  ],
};
