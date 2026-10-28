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

const practicalsArt = artPanel([
  {
    src: "ch06-rate-marble-chips-balance.webp",
    alt: "A conical flask of fizzing marble chips and acid sitting on a digital balance",
    caption: "Marble chips losing mass on a balance",
  },
  {
    src: "ch06-thiosulfate-cross.webp",
    alt: "A flask of cloudy pale yellow solution over a card with a black cross",
    caption: "The cross fades as sulfur clouds the flask",
  },
]);

const catalystsArt = artPanel([
  {
    src: "ch06-manganese-dioxide-catalyst.webp",
    alt: "A test tube erupting with bubbles after a dark powder is added, a glowing splint at the mouth",
    caption: "Manganese dioxide speeds up decomposition",
  },
  {
    src: "ch06-magnesium-acid-fizz.webp",
    alt: "A strip of magnesium ribbon in a clamped test tube of acid, streaming bubbles",
    caption: "Magnesium and acid giving off hydrogen",
  },
]);

const reversibleArt = artPanel([
  {
    src: "ch06-reversible-copper-sulfate.webp",
    alt: "Blue copper sulfate crystals on one side, grey-white powder with steam on the other, joined by a double arrow",
    caption: "Hydrated and anhydrous copper sulfate",
  },
  {
    src: "ch06-haber-process-plant.webp",
    alt: "A stylised reactor tower with pipes, a compressor and a cooling coil",
    caption: "Ammonia made in a Haber plant",
  },
]);

export const CHEMISTRY_CHAPTER_6: Chapter = {
  number: 6,
  title: "Chemical Reactions",
  intro: `Some reactions are over in a flash and others crawl.\n\nThis chapter measures **how fast** reactions go, explains the speed using **collision theory**, and shows how a **catalyst** or a change of conditions steers a reaction.\n\nIt then turns to **reversible reactions**, the equilibrium they reach, and how industry tunes that balance.`,
  subheadings: [
    {
      title: "Rate of Reaction and How to Measure It",
      body: `## What Rate Means

**Rate of reaction** tells how fast reactants are used up or products form.\n\nIt is a change in quantity **per unit time**.\n\nCommon units are cm³/s for a gas or g/s for a mass loss.\n\nA fast reaction finishes in seconds;

a slow one may take days.\n\nThe rate is **not constant** during a reaction.\n\nIt is greatest at the start and falls as the reactants run out.\n\n## Three Ways to Measure It

You can follow the **volume of gas** produced per unit time.\n\nCollect the gas in a syringe and record the volume at fixed intervals.\n\nYou can follow the **loss of mass** per unit time.\n\nPut the flask on a balance and plot the falling reading against time.\n\nYou can time how long a **visual change** takes,

such as a cross vanishing.\n\nEach method measures the same idea: quantity changed divided by time taken.\n\n## Reading the Graph

A graph of volume against time rises and then flattens.\n\nThe flattening, or plateau,

shows the reaction is complete.\n\nThe **gradient** of the curve at any point equals the rate at that moment.\n\nA steeper gradient means a faster reaction.\n\n## Mean Rate and Initial Rate

The **mean rate** is the total volume of gas divided by the total time.\n\nThe **initial rate** is the gradient of the tangent drawn at t = 0.\n\nTo draw it,

sketch the straight line touching the curve only at the start.\n\nThe initial rate is the fairest comparison between experiments.\n\nAll curves reach the same plateau when the same moles of reactant are used.\n\nOnly the steepness of the start changes.`,
      groups: [
        {
          subTitle: "Defining and Measuring Rate",
          bullets: [
            "**Rate of reaction** is the change in amount of a reactant or product per unit time.",
            "Measure gas production as a volume collected in a syringe over set time intervals.",
            "Measure mass loss by recording the falling balance reading over time.",
            "Measure a visual change by timing how long a cross takes to disappear.",
            "The rate is greatest at the start because the reactants are most concentrated then.",
          ],
        },
        {
          subTitle: "Mean and Initial Rate from Graphs",
          bullets: [
            "Mean rate equals the total volume of gas divided by the total time taken.",
            "Initial rate equals the gradient of the tangent drawn to the curve at t = 0.",
            "The gradient at any point gives the rate of reaction at that instant.",
            "The curve flattens at the plateau once a reactant has been used up.",
            "A steeper line on the graph always represents a faster reaction.",
          ],
        },
      ],
      examinerTips: [
        "Always quote units such as cm³/s or g/s; a bare number for a rate loses the mark.",
        "For 'how do you find the initial rate', write 'draw a tangent at t = 0 and calculate its gradient'.",
        "State the mean rate as total volume over total time, naming both quantities.",
        "Link the plateau to the final volume and the gradient to the rate; do not swap them.",
      ],
      commonMistakes: [
        "Giving the total volume instead of a rate, which must be a quantity per unit time.",
        "Drawing the tangent further along the curve when the initial rate at t = 0 is asked.",
        "Reading the plateau height as the rate rather than as the final volume.",
        "Thinking the rate stays constant when, in fact, it slows as reactants are used up.",
      ],
      recap: [
        "Define the rate of a chemical reaction and give its units when a gas is evolved. [2]",
        "Describe how you would measure the rate of a reaction giving off a gas, naming the apparatus. [3]",
        "Explain how the initial rate is obtained from a graph of volume against time. [2]",
      ],
    },
    {
      title: "Collision Theory and the Factors That Change Rate",
      body: `## The Collision Requirement

Particles react only when they **collide** with each other.\n\nFor a collision to be successful it needs two things.\n\nThe particles must carry energy **equal to or greater than the activation energy**.\n\nThey must also hit each other in the **correct orientation**.\n\nActivation energy is the minimum energy needed for a reaction to start.\n\nCollisions that fail either test simply bounce apart unchanged.\n\n## Why Conditions Change the Rate

A **higher concentration** packs more particles into the same volume.\n\nThis makes collisions happen more often,

giving **more frequent collisions**.\n\nSo the **frequency of successful collisions** rises and the rate increases.\n\nFor a gas, **higher pressure** acts like a higher concentration.\n\nRaising the pressure squeezes particles closer,

so they collide more often.\n\nA **higher temperature** makes particles move faster with more kinetic energy.\n\nA larger surface area exposes more particles,

so more collisions happen each second.\n\n## The Energy Distribution

Particles do not all have the same energy;

the energies are spread out.\n\nSketch the spread as one asymmetric hump: few particles at very low energy, most in the middle, a short tail at the top.\n\nOnly the particles in that high-energy tail, past the activation energy, can react.\n\nHeating flattens and shifts the curve,

enlarging the area past that line.\n\nSo heating gives **a greater proportion of collisions with energy equal to or greater than the activation energy**.\n\nThat single idea explains why temperature is the most powerful factor.`,
      groups: [
        {
          subTitle: "The Two Conditions for a Successful Collision",
          bullets: [
            "Particles must collide with each other for any reaction to take place.",
            "The collision must have energy at least equal to the activation energy.",
            "The particles must also collide in the correct orientation to react.",
            "Collisions that fail either condition are unsuccessful or ineffective.",
          ],
        },
        {
          subTitle: "Each Factor Explained in Terms of Particles",
          bullets: [
            "Higher concentration gives more particles per volume, so more frequent collisions.",
            "Higher pressure compresses a gas, so collisions become more frequent.",
            "Higher temperature raises kinetic energy, so more collisions exceed the activation energy.",
            "Greater surface area exposes more particles, so more collisions happen each second.",
            "Marks need the frequency of successful collisions, not merely more collisions.",
          ],
        },
        {
          subTitle: "Reading the Energy Distribution Curve",
          bullets: [
            "The area under the curve represents all the particles in the sample.",
            "The area beyond the activation energy shows particles energetic enough to react.",
            "At a higher temperature the peak drops and shifts to the right.",
            "This is why a small rise in temperature can cause a large rise in rate.",
          ],
        },
      ],
      examinerTips: [
        "Use 'more frequent collisions' for concentration and pressure, and 'greater proportion with energy at least the activation energy' for temperature.",
        "Always return to the frequency of successful collisions; naming the condition alone is only half an answer.",
        "State that the activation energy value does not change with temperature; only the number of particles clearing it changes.",
        "For surface area, mention more particle collisions per second across the exposed surface.",
      ],
      commonMistakes: [
        "Saying heating lowers the activation energy; only a catalyst does that, temperature raises particle energies.",
        "Mentioning more collisions but forgetting the word successful.",
        "Confusing the effect of surface area with a change in concentration.",
        "Attributing a faster rate to higher pressure when the reactants are solids or liquids.",
      ],
      recap: [
        "State the two conditions needed for a collision to result in a reaction. [2]",
        "Explain, in terms of particles, why increasing the concentration speeds up a reaction. [3]",
        "Explain why raising the temperature increases the rate more than raising the concentration alone. [4]",
      ],
    },
    {
      title: "Practical Rate Experiments",
      figure: practicalsArt,
      body: `## Marble Chips and Hydrochloric Acid

Calcium carbonate reacts with hydrochloric acid to release carbon dioxide.\n\n**CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂**\n\nOne method follows the **loss of mass** on a balance.\n\nThe CO₂ escapes,

the reading falls,

and mass is plotted against time.\n\nA loose cotton wool plug slows escaping gas but lets it out.\n\nThe other method collects the CO₂ in a **gas syringe**.\n\nThe volume of gas is recorded at fixed time intervals.\n\n## Sodium Thiosulfate and the Cross

Sodium thiosulfate reacts with hydrochloric acid to form a sulfur precipitate.\n\n**Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S**\n\nThe insoluble sulfur clouds the solution and hides a cross below the flask.\n\nThe rate is the time taken for the cross to disappear from view.\n\nA shorter time means a faster reaction.\n\n## Magnesium and Acid

Magnesium ribbon reacts with hydrochloric acid, releasing hydrogen gas.\n\n**Mg + 2HCl → MgCl₂ + H₂**\n\nThe volume of hydrogen, or the falling mass,

can both be measured over time.\n\n## Keeping It a Fair Test

Use the same volume and concentration of acid in every trial.\n\nKeep the temperature constant,

usually with a water bath.\n\nUse the same total mass and size of solid each time.\n\nChange only one variable at a time, then repeat for reliability.`,
      groups: [
        {
          subTitle: "Setting Up Each Experiment",
          bullets: [
            "For the mass-loss method, place the bunged flask on a balance and read it every 30 s.",
            "For the gas-syringe method, connect the syringe and read the gas volume at fixed times.",
            "For the cross method, time how long the cross takes to vanish from view.",
            "Record readings at the same intervals so the rate curves can be compared fairly.",
          ],
        },
        {
          subTitle: "Fair-Test Controls",
          bullets: [
            "Keep the volume and concentration of acid identical between the trials.",
            "Keep the mass and surface area of the solid the same each time.",
            "Hold the temperature constant using a water bath.",
            "Repeat each reading and average the results to reduce random error.",
          ],
        },
        {
          subTitle: "Interpreting the Curves",
          bullets: [
            "A steeper curve shows a faster reaction under those conditions.",
            "A higher plateau shows that more reactant was present.",
            "Doubling the acid concentration makes the start steeper.",
          ],
        },
      ],
      examinerTips: [
        "Name the gas and the method: CO₂ by mass loss or gas-syringe volume, sulfur by the disappearing cross.",
        "When comparing curves, describe both the gradient (rate) and the plateau (final volume).",
        "State one control variable you kept and why you repeated readings, if the question asks about reliability.",
      ],
      commonMistakes: [
        "Using a solid rubber bung with no delivery tube, so gas cannot escape or be collected.",
        "Saying the cross method measures volume; it measures the time for a visual change.",
        "Letting acid spray escape by omitting the cotton wool plug on the balance method.",
      ],
      recap: [
        "Describe how you would measure the rate of reaction between marble chips and hydrochloric acid. [4]",
        "State what makes the cross disappear in the thiosulfate experiment and what that change measures. [2]",
        "Give two variables you must keep constant to compare two acid concentrations fairly. [2]",
      ],
    },
    {
      title: "Catalysts",
      figure: catalystsArt,
      body: `## What a Catalyst Does

A **catalyst** speeds up a reaction without being used up itself.\n\nIt provides a **different reaction route with a lower activation energy**.\n\nMore particles now have enough energy to react.\n\nSuccessful collisions become more frequent,

so the rate rises.\n\nA catalyst does **not change the yield**,

only the time taken.\n\nThe final mass or volume on the graph stays the same.\n\n## How It Lowers the Activation Energy

The catalyst offers an easier alternative path with a lower barrier.\n\nThe original activation energy for the uncatalysed route is unchanged.\n\nWith the barrier lowered,

a greater proportion of particles can clear it.\n\nThat is why the rate rises while the temperature stays constant.\n\nThe catalyst is regenerated at the end,

so a tiny amount works repeatedly.\n\n## Catalysts in Industry

A **heterogeneous catalyst** is in a different phase from the reactants.\n\nGaseous reactants are passed over a solid catalyst surface.\n\nReactants adsorb onto active sites, react,

then desorb as products.\n\n## Biological and Everyday Catalysts

**Enzymes** are biological catalysts that speed up reactions in living cells.\n\nEach enzyme works best at a specific temperature and pH.\n\nA **catalytic converter** uses platinum and rhodium in a car exhaust.\n\nIt changes toxic gases into less harmful ones before they escape.`,
      groups: [
        {
          subTitle: "Defining the Catalyst",
          bullets: [
            "A catalyst increases the rate of a reaction and is not used up.",
            "It provides a different route with a lower activation energy.",
            "It does not change the yield or the position of equilibrium.",
            "It is regenerated, so the same catalyst can act again and again.",
          ],
        },
        {
          subTitle: "Enzymes and Industrial Catalysts",
          bullets: [
            "Enzymes are biological catalysts that work at a specific temperature and pH.",
            "A heterogeneous catalyst is in a different phase from the reactants.",
            "Reactant molecules adsorb onto active sites on the catalyst surface.",
            "Catalytic converters use platinum and rhodium to clean exhaust gases.",
          ],
        },
      ],
      examinerTips: [
        "Say a catalyst 'provides a different route with a lower activation energy', never that it 'adds energy'.",
        "Pair 'not used up' with 'does not change the yield'; examiners test both in one short answer.",
        "On a graph, draw the catalysed curve steeper but reaching the same plateau.",
      ],
      commonMistakes: [
        "Claiming a catalyst increases the amount of product; it only shortens the time.",
        "Saying a catalyst lowers the temperature by heating the mixture.",
        "Confusing a catalyst with a reactant, because it may take part only temporarily.",
      ],
      recap: [
        "Define a catalyst and explain, in terms of activation energy, how it speeds up a reaction. [4]",
        "State two things a catalyst does not do to a reaction. [2]",
        "Describe what is meant by a heterogeneous catalyst and give one industrial example. [3]",
      ],
    },
    {
      title: "Reversible Reactions and Dynamic Equilibrium",
      figure: reversibleArt,
      body: `## Reversible Reactions

A **reversible reaction** can go forwards and backwards.\n\nIt is shown by the **reversible arrow**,

pointing both ways.\n\nIn a closed container the products can reform the reactants.\n\nEquilibrium can only be reached where nothing escapes.\n\n## Heating Hydrated Copper(II) Sulfate

Blue hydrated copper(II) sulfate loses water on heating.\n\nThe solid turns white as the water leaves as steam.\n\n**CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O**\n\nAdding water back turns the white powder blue again.\n\nThis shows the reaction is easily reversed.\n\n## Other Named Examples

Heating **ammonium chloride** splits it into ammonia and hydrogen chloride gases.\n\nOn cooling, the two gases recombine as white ammonium chloride higher up the tube.\n\n**Nitrogen and hydrogen** form ammonia,

and ammonia can also decompose back.\n\n## Dynamic Equilibrium

In a sealed container a reversible reaction reaches **dynamic equilibrium**.\n\nThe forwards and backwards reactions run at **equal rates**.\n\nThe concentrations of reactants and products stay **constant,

not equal**.\n\nAt particle level molecules keep reacting both ways, yet nothing overall changes.\n\nThe reaction has not stopped; the two directions simply balance each other.`,
      groups: [
        {
          subTitle: "Reading the Reversible Arrow",
          bullets: [
            "The reversible arrow means the reaction can proceed in both directions.",
            "Equilibrium is reached only in a closed system where nothing escapes.",
            "At equilibrium the forwards and backwards rates are equal.",
            "The concentrations of all species stay constant once equilibrium is reached.",
          ],
        },
        {
          subTitle: "Named Reversible Reactions",
          bullets: [
            "Heated blue copper(II) sulfate turns white and gives off water vapour.",
            "Adding water to the white solid restores the blue colour.",
            "Ammonium chloride decomposes on heating and recombines on cooling.",
            "Nitrogen and hydrogen react to form ammonia in a reversible reaction.",
          ],
        },
        {
          subTitle: "What Dynamic Really Means",
          bullets: [
            "Particles keep reacting in both directions at equilibrium.",
            "The two rates match, so the amounts appear to stop changing.",
            "Constant concentration is not the same as equal concentration.",
          ],
        },
      ],
      examinerTips: [
        "Give rate and concentration together: 'the forwards and reverse rates are equal, so concentrations stay constant'.",
        "Say 'constant, not equal' for the concentrations; examiners reject 'the amounts are equal'.",
        "Name the reversible arrow and a closed system as the condition for equilibrium.",
      ],
      commonMistakes: [
        "Saying the reaction stops at equilibrium; both directions continue at equal rates.",
        "Claiming the concentrations become equal; they become constant, rarely equal.",
        "Describing the copper(II) sulfate test as irreversible.",
      ],
      recap: [
        "Explain what is meant by a dynamic equilibrium in a closed container. [4]",
        "Describe the colour changes when hydrated copper(II) sulfate is heated and then water is added. [3]",
        "State what the reversible arrow tells you about a reaction. [1]",
      ],
    },
    {
      title: "Controlling Reversible Reactions",
      body: `## Shifting the Equilibrium

Changing conditions moves the **position of equilibrium** and so the yield.\n\nIf a change is applied,

the system shifts to reduce the change.\n\nThis reasoning is what the syllabus asks you to explain in words.\n\n## Effect of Temperature

Raising the temperature favours the **endothermic** direction.\n\nThe system absorbs the extra heat to oppose the change.\n\nLowering the temperature favours the **exothermic** direction,

which releases heat.\n\nFor making ammonia the forwards reaction is exothermic, so a low temperature favours yield.\n\n## Effect of Pressure

Raising the pressure favours the side with **fewer gas molecules**.\n\nIn the ammonia reaction there are four gas molecules left and two right.\n\nHigher pressure shifts the equilibrium right,

increasing the ammonia yield.\n\nPressure changes nothing when both sides have equal gas molecules.\n\n## The Haber Process Compromise

The **Haber process** makes ammonia for fertilisers.\n\nThe conditions are **450 °C,

200 atmospheres and an iron catalyst**.\n\nA low temperature gives a better yield but an unacceptably slow rate.\n\nA very high pressure gives more ammonia but costly,

dangerous plant.\n\nThe chosen figures are a **compromise** between yield and speed.\n\nThe iron catalyst speeds both directions equally, so it changes no yield.\n\n## The Contact Process

The **Contact process** makes sulfur trioxide for sulfuric acid.\n\n**2SO₂ + O₂ ⇌ 2SO₃**,

where the forwards reaction is exothermic.\n\nIt runs at about 450 °C and low pressure with a vanadium(V) oxide catalyst.`,
      groups: [
        {
          subTitle: "Rules for Shifting Equilibrium",
          bullets: [
            "Raising the temperature shifts equilibrium in the endothermic direction.",
            "Lowering the temperature shifts equilibrium in the exothermic direction.",
            "Raising the pressure shifts equilibrium towards the side with fewer gas molecules.",
            "Adding a catalyst does not shift the position of equilibrium.",
            "Increasing a reactant concentration shifts equilibrium towards the products.",
          ],
        },
        {
          subTitle: "The Haber Process Conditions",
          bullets: [
            "An iron catalyst is used because it is cheap and effective.",
            "The 450 °C temperature balances a fair yield against a fast rate.",
            "200 atmospheres balances a higher yield against the cost of compression.",
            "Unreacted nitrogen and hydrogen are recycled through the reactor.",
          ],
        },
      ],
      examinerTips: [
        "Say which way the equilibrium shifts and the effect on yield, for example 'shifts right, increasing the yield'.",
        "For temperature, identify the exothermic direction first, then state the shift; the mark depends on it.",
        "Explain 450 °C as a compromise between rate and yield; that exact wording carries the marks.",
      ],
      commonMistakes: [
        "Thinking a higher temperature always raises the yield; for exothermic reactions it lowers it.",
        "Saying a catalyst increases the equilibrium yield; it only reaches equilibrium faster.",
        "Ignoring the gas-molecule count and choosing the wrong pressure direction.",
      ],
      recap: [
        "State and explain the effect of increasing pressure on the equilibrium yield of ammonia. [3]",
        "Explain why the Haber process uses 450 °C rather than a much lower temperature. [3]",
        "Describe the effect of a catalyst on the time to reach equilibrium and on the yield. [2]",
      ],
    },
  ],
};
