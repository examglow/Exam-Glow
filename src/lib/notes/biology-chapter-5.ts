import type { Chapter } from "./types";
import { box, colors, labelledRows, svgDiagram, tileRow } from "./diagram-kit";

const IMG = "/notes/biology";

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

const enzymeIllustrations = artPanel([
  {
    src: "ch05-lock-and-key.webp",
    alt: "A substrate molecule locking into the shaped active site of an enzyme",
    caption: "Substrate fitting the active site",
  },
  {
    src: "ch05-denatured-enzyme.webp",
    alt: "An enzyme changed by heat so its active site no longer holds the substrate",
    caption: "An enzyme denatured by heat",
  },
]);

const bileArt = artPanel([
  {
    src: "ch05-bile-fat.webp",
    alt: "Bile salts breaking a large fat globule into many small droplets",
    caption: "Bile emulsifies fat into tiny droplets",
  },
]);

const fairTestArt = artPanel([
  {
    src: "ch05-enzyme-jar.webp",
    alt: "A beaker of water with a dissolving cube, a stirring rod and a thermometer",
    caption: "Only one variable changes in a fair test",
  },
]);

const enzymeCycle = svgDiagram(
  "The Enzyme Cycle: Substrate In, Products Out",
  `${box(24, 74, 210, 26, "1  Substrate binds", "blue")}
   ${box(254, 74, 210, 26, "2  Reaction runs", "gold")}
   ${box(484, 74, 210, 26, "3  Products leave", "main")}
   ${box(714, 74, 162, 26, "4  Reusable", "purple")}
   ${tileRow(
     [
       {
         title: "Substrate",
         body: "the molecule acted on\nheld by shape and\nchemical attraction",
         cls: "blue",
       },
       {
         title: "Active site",
         body: "the small region of the\nenzyme whose shape\nmatches that substrate",
         cls: "gold",
       },
       {
         title: "Complex",
         body: "enzyme plus substrate\nlocked together while\nbonds are rearranged",
         cls: "main",
       },
       {
         title: "Products",
         body: "released, and the\nenzyme keeps its shape\nready for the next one",
         cls: "purple",
       },
     ],
     124,
     { x: 24, w: 852, h: 168, gap: 12 },
   )}
   <text class="small" x="450" y="318" text-anchor="middle">Lock and key: only a complementary substrate fits, and only for one kind of reaction.</text>`,
  900,
  344,
);

const tempPhCurves = svgDiagram(
  "Temperature and pH: Two Ways to Lose a Fit",
  `<text class="title" x="450" y="34" text-anchor="middle">Rate rises with kinetic energy, then falls when the shape goes</text>
   <path class="line" d="M70 80 V270 H430"/>
   <path class="line" style="stroke:${colors.blue}" d="M80 258 C140 250 175 200 215 132 C235 100 250 96 268 122 C295 162 325 240 400 262"/>
   <path class="line" stroke-dasharray="7 7" d="M252 270 V104"/>
   <text class="small" x="96" y="238">cold: too slow</text>
   <text class="small" x="230" y="292" text-anchor="middle">optimum</text>
   <text class="small" x="330" y="216">hot: denatured</text>
   <text class="label" x="250" y="60" text-anchor="middle">Temperature</text>
   <path class="line" d="M520 80 V270 H880"/>
   <path class="line" style="stroke:${colors.green}" d="M530 262 C580 246 630 130 700 100 C770 130 820 246 870 262"/>
   <path class="line" stroke-dasharray="7 7" d="M700 270 V100"/>
   <text class="small" x="540" y="238">acid side</text>
   <text class="small" x="700" y="292" text-anchor="middle">optimum pH</text>
   <text class="small" x="784" y="238">alkali side</text>
   <text class="label" x="700" y="60" text-anchor="middle">pH</text>
   <text class="small" x="450" y="330" text-anchor="middle">Pepsin in the stomach peaks strongly acid; trypsin in the small intestine peaks slightly alkaline.</text>`,
  900,
  356,
);

const fourEnzymes = svgDiagram(
  "Four Enzymes Examiners Keep Asking About",
  tileRow(
    [
      {
        title: "Amylase",
        body: "starch to maltose\nmouth and pancreas\nspeeds up digestion",
        cls: "blue",
      },
      {
        title: "Protease",
        body: "protein to peptide\nthen amino acids\npepsin, trypsin",
        cls: "pink",
      },
      {
        title: "Lipase",
        body: "fats to fatty acids\nglycerol released\npancreas, intestine",
        cls: "gold",
      },
      {
        title: "Catalase",
        body: "hydrogen peroxide\nto water and oxygen\nin liver and cells",
        cls: "purple",
      },
    ],
    86,
    { x: 24, w: 852, h: 186, gap: 12 },
  ) +
    labelledRows(
      [
        ["Watch", "bile emulsifies fat but is not an enzyme"],
        ["Remember", "each enzyme is named for the reaction it speeds"],
      ],
      24,
      306,
      30,
    ),
  900,
  352,
);

const digestiveEnzymesChapter: Chapter = {
  number: 5,
  title: "Enzymes",
  intro:
    "Enzymes are the protein catalysts that make the chemistry of life run at body temperature.\n\nThis chapter builds the shape-and-fit argument behind **specificity**, then uses it to explain why **temperature** and **pH** change the rate of an enzyme-controlled reaction.\n\nIt finishes with the four enzymes the syllabus names: **amylase**, **protease**, **lipase** and **catalase**.",
  subheadings: [
    {
      title: "What Enzymes Are and What a Catalyst Does",
      body: `A **catalyst** speeds up a chemical reaction without itself being used up or permanently changed.\n\nEnzymes are the biological catalysts: made by living cells, active at mild temperatures, and each one lowers the **activation energy** a reaction needs to start.`,
      figure: enzymeIllustrations,
      groups: [
        {
          subTitle: "The vocabulary the marks are written in",
          bullets: [
            "**Globular protein:** the enzyme is a folded protein, compact and roughly spherical, held in shape by bonds between parts of the chain.",
            "**Active site:** a small region on the enzyme surface where the substrate is held; it has a specific shape and specific chemical attractions for the substrate.",
            "**Substrate:** the molecule that the enzyme acts upon.",
            "**Enzyme-controlled reaction:** the reaction the enzyme speeds up; each enzyme speeds up only one of them.",
            "**Activation energy:** the energy needed to start a reaction; an enzyme lowers it, so the reaction can proceed at body temperature.",
            "**Biological catalyst:** made by a living cell, so an enzyme is a protein, not an inorganic catalyst.",
            "Enzymes run at mild temperature and near-neutral pH, unlike industrial catalysts needing high heat.",
          ],
        },
        {
          subTitle: "Two consequences worth stating in an answer",
          bullets: [
            "Without enzymes, the reactions of respiration, digestion and photosynthesis would be far too slow to keep an organism alive.",
            "Because an enzyme is a protein, anything that changes the shape of the protein changes what the active site looks like — and shape is what makes the enzyme work.",
            "One enzyme, never used up, acts on many substrate molecules, so a tiny amount drives a lot of chemistry.",
            "Enzymes only speed reactions that could already happen slowly; they cannot start an impossible reaction.",
          ],
        },
      ],
      examinerTips: [
        "Say 'lowers the activation energy', not 'supplies energy' or 'makes the reaction happen'. An enzyme cannot start a reaction that is impossible on its own.",
        "Name the four terms precisely: enzyme, active site, substrate, enzyme-substrate complex. Marks in a 'describe how an enzyme works' question are attached to those words.",
        "When a question asks why enzymes are described as catalysts, the answer is that they are not used up in the reaction and can be used again.",
        "Define a catalyst with the clause 'without being used up'; that exact phrase carries the mark.",
      ],
      commonMistakes: [
        "'The enzyme is used up after the reaction.' It is released unchanged.",
        "'The enzyme gives the substrate energy.' It lowers the energy needed; it does not provide it.",
        "Describing an enzyme as a 'chemical' only, without stating that it is a protein. That costs the mark that later depends on denaturation.",
        "Saying an enzyme 'makes a reaction happen'. It only speeds up a reaction already possible.",
      ],
      recap: [
        "Define an enzyme and state what is meant by activation energy. [3]",
        "Explain why a small amount of enzyme can digest a large amount of substrate. [2]",
        "State two features of the active site that allow it to hold a substrate. [2]",
        "State what is meant by a biological catalyst. [2]",
      ],
    },
    {
      title: "Specificity and the Lock-and-Key Model",
      body: `A reaction only happens when a substrate collides with the active site of the enzyme that fits it and is held there while bonds are rearranged.\n\nThe **lock-and-key model** describes that fit: the substrate is the key and the active site is the lock.

${enzymeCycle}`,
      groups: [
        {
          subTitle: "The sequence of an enzyme-controlled reaction",
          bullets: [
            "The substrate collides with the active site and becomes held in it.",
            "The **enzyme-substrate complex** forms — enzyme and substrate joined for the moment of the reaction.",
            "Bonds in the substrate are broken or made, so the substrate is converted into one or more different molecules.",
            "The **products** leave the active site; the enzyme is unchanged and ready for the next substrate molecule.",
            "More successful collisions per second means a **faster rate of reaction**.",
            "One enzyme can repeat the whole cycle thousands of times in a second.",
          ],
        },
        {
          subTitle: "What specificity means in practice",
          bullets: [
            "**One enzyme, one reaction:** each active site only fits one substrate, so each enzyme only catalyses one type of reaction.",
            "Amylase fits starch, not protein; protease fits protein, not starch; lipase fits fat droplets.",
            "A different enzyme has a different active site shape, so it acts on a different substrate.",
            "Because of specificity, a cell needs a whole set of different enzymes to run all its reactions.",
            "**Maltase** fits only maltose, splitting it into two glucose molecules.",
            "A denatured enzyme loses specificity, because its active site shape has gone.",
          ],
        },
        {
          subTitle: "Evidence that the fit is more than a rigid mould",
          bullets: [
            "Many answers now mention that the active site flexes slightly as the substrate enters, closing around it — often called the **induced fit** idea.",
            "The fit is also chemical, not only mechanical: attractions between the surfaces of active site and substrate help hold the complex together.",
            "Lock and key is a simplification; the site is not a rigid hole but shifts as the substrate enters.",
            "**Complementary shape** is the exact phrase examiners want for the fit.",
          ],
        },
      ],
      examinerTips: [
        "The word to use is complementary: 'the shape of the active site is complementary to the shape of the substrate'.",
        "For a specificity question, name both enzymes involved and say what each acts on. A general sentence such as 'enzymes are specific' earns little.",
        "Always name the complex: enzyme plus substrate together is the enzyme-substrate complex; enzyme plus product is not.",
        "Say the active site is complementary to the substrate, not that the enzyme fits the substrate.",
      ],
      commonMistakes: [
        "Saying the active site is 'the part that is used up'. The active site is the part that does the holding.",
        "Confusing substrate and product. The substrate enters, the product leaves.",
        "Claiming one enzyme can digest several different kinds of food molecules, because it is 'a general-purpose catalyst'. It is not.",
        "Calling the enzyme-substrate complex 'the product'; the complex is enzyme plus substrate mid-reaction.",
      ],
      recap: [
        "Describe what happens in the enzyme-substrate complex. [4]",
        "Use the lock-and-key idea to explain why amylase does not break down protein. [3]",
        "State what is complementary to what in an enzyme-substrate pair. [1]",
        "Explain what is meant by the specificity of an enzyme. [3]",
      ],
    },
    {
      title: "Temperature: Faster, then Finished",
      body: `### Two effects pulling in opposite directions\nHeating a reaction mixture does two different things at once, and past the optimum the damaging one wins.\n\n${tempPhCurves}`,
      groups: [
        {
          subTitle: "The three regions of the graph",
          bullets: [
            "**Below the optimum:** reactions are slow but the enzyme is intact. Warming it restores the rate, because nothing has been damaged — only the collisions were too infrequent.",
            "**At the optimum:** the temperature at which the rate is highest. For enzymes from the human body this lies close to normal body temperature, while enzymes from hot-water bacteria have optima much higher.",
            "**Above the optimum:** the enzyme is **denatured**. The shape of the active site is altered, the substrate no longer fits, and cooling the mixture does not bring the rate back.",
            "**On the way up:** particles gain kinetic energy, collide more often and form more complexes, so the rate rises.",
            "**Past the peak:** energy breaks the bonds holding the folded shape, so the site distorts and the rate collapses.",
          ],
        },
        {
          subTitle: "Denaturation stated properly",
          bullets: [
            "Denaturation is a change in the shape of a protein, caused by heat or by a change in pH; it destroys the shape of the active site.",
            "Denaturation is not digestion. The protein is not broken into amino acids, it is unfolded and misshapen.",
            "Once an enzyme is denatured by high temperature the change is usually permanent, so the reaction cannot restart at the original rate.",
            "Denaturation alters the **shape of the active site**, which is why the substrate stops fitting.",
            "A cold enzyme is only slow; it is not denatured, so warming it restores the full rate.",
          ],
        },
        {
          subTitle: "Ideas that come from the temperature effect",
          bullets: [
            "Food kept in a refrigerator lasts longer because enzyme-controlled reactions in food, and in the micro-organisms on it, run slowly at low temperature.",
            "Freezing stops growth rather than killing bacteria, because the enzymes are not denatured at low temperature.",
            "A high fever is dangerous partly because the enzymes of the body begin to lose the shape their reactions depend on.",
            "Human enzyme optima lie near **37 degrees Celsius**, normal body temperature.",
            "Enzymes from hot-spring bacteria keep working at far higher temperatures, each with its own optimum.",
          ],
        },
      ],
      examinerTips: [
        "Structure a temperature answer as cause and effect: heat gives kinetic energy, more collisions per second form more enzyme-substrate complexes, so the rate rises.",
        "Then the other half: heat breaks the bonds holding the shape, the active site changes shape, the substrate no longer fits, so the rate falls.",
        "Use 'denatured' only for damage to shape. At low temperatures say 'the enzyme is inactive/slow', never 'denatured'.",
        "If you are asked to compare two curves, refer to the peak of each and to what happens after the peak.",
      ],
      commonMistakes: [
        "'Heat kills the enzyme.' An enzyme was never alive; it is denatured.",
        "'At high temperature the substrate is denatured.' It is the enzyme that loses its shape.",
        "Writing 'the enzyme works faster' instead of 'the rate of reaction increases'. Enzymes do not get keen; the measured rate changes.",
        "Explaining the fall in rate as 'the enzyme is used up'.",
      ],
      recap: [
        "Explain why the rate of an enzyme-controlled reaction increases as temperature rises towards the optimum. [4]",
        "Explain why the rate falls sharply above the optimum temperature. [4]",
        "A sample cooled from 70 degrees Celsius back to 37 degrees shows no recovery in rate. Explain why. [2]",
        "Explain why refrigeration slows the spoilage of food. [2]",
      ],
    },
    {
      title: "pH: The Charge that Holds the Shape",
      body: `Every enzyme has an **optimum pH**, the value at which its active site holds the shape that works.\n\nMoving away changes the charges on the parts that form the active site, and extreme pH denatures the enzyme, just as heat does.

| Enzyme | Where it works | Approximate optimum pH |
| --- | --- | --- |
| pepsin (a protease) | stomach, in hydrochloric acid | about 2 |
| salivary amylase | mouth, near neutral | about 7 |
| trypsin (a protease) | small intestine, alkaline after bile arrives | about 8 |
| catalase | inside cells, cytoplasm near neutral | about 7 |`,
      groups: [
        {
          bullets: [
            "**Away from the optimum:** the shape and charge of the active site change, the substrate is not held, and the rate falls.",
            "**At very high or very low pH:** the enzyme is denatured, and the loss of activity is usually permanent.",
            "Most enzymes in the cytoplasm work near neutral pH; the digestive ones are the exception because the gut is not the same environment in every region.",
            "The stomach lining and the pancreas illustrate the point: pepsin only digests protein in acid, and trypsin only works once the acidic contents have been neutralised by bile and intestinal juice.",
            "**Each enzyme has its own optimum pH**, reflecting the environment where it normally works.",
            "A **buffer** holds the reaction at the chosen pH during an investigation.",
          ],
        },
        {
          subTitle: "Buffers in the body",
          bullets: [
            "Body fluids resist large changes in pH, which protects enzymes from being denatured by the acids produced by metabolism.",
            "Alkaline substances such as **hydrogencarbonate** in pancreatic juice are used to neutralise acidic contents entering the small intestine.",
            "**Hydrochloric acid** makes the stomach contents acidic, matching pepsin's optimum near pH 2.",
            "**Bile and pancreatic juice** are alkaline, neutralising the acid before trypsin can act.",
          ],
        },
      ],
      examinerTips: [
        "The words that gain marks: 'changes the shape of the active site', 'the substrate no longer fits/is not complementary', 'no enzyme-substrate complex forms', 'denatured'.",
        "Compare temperature and pH answers with one shared sentence: both alter the shape of the active site rather than being used up.",
        "If a graph of pH is given, quote the optimum pH from the peak of the curve and use the value in your answer.",
        "Give the specific values, pepsin about 2 and trypsin about 8, rather than only saying acidic or alkaline.",
      ],
      commonMistakes: [
        "Saying pH changes the temperature or the energy of the reaction. It changes the shape and charge of the enzyme.",
        "Claiming all enzymes have an optimum pH of 7, then describing pepsin working in the stomach.",
        "Confusing 'denatured' with 'dead', 'destroyed' or 'eaten'.",
        "Adding acid to an enzyme and describing the enzyme as dissolving.",
      ],
      recap: [
        "Define optimum pH. [1]",
        "Explain how a pH far from the optimum lowers the rate of an enzyme-controlled reaction. [4]",
        "Give the approximate optimum pH of pepsin and of trypsin, and relate each to where it works. [4]",
        "Name the enzyme that works in the stomach and give its approximate optimum pH. [2]",
      ],
    },
    {
      title: "Amylase, Protease, Lipase and Catalase",
      figure: bileArt,
      body: `Digestive enzymes are **hydrolases**: each one uses water to break bonds in a large insoluble food molecule, producing a smaller soluble one that can be absorbed.\n\nNote that the molecule names, the products and the location are all examinable, and mixing them up is the most common loss of marks in this section.

${fourEnzymes}`,
      groups: [
        {
          subTitle: "The four enzymes in detail",
          bullets: [
            "**Amylase:** catalyses the breakdown of **starch** into the sugar **maltose**.",
            "It is present in **saliva**, where it begins starch digestion in the mouth, and in **pancreatic juice**, where it finishes the job in the small intestine.",
            "It also works in germinating seeds such as barley, and in moulds used industrially.",
            "**Protease:** catalyses the breakdown of **protein** into shorter chains (**peptides**) and finally into **amino acids**.",
            "**Pepsin** in the gastric juice of the stomach starts this; **trypsin** in pancreatic juice continues it in the small intestine.",
            "**Lipase:** catalyses the breakdown of **fats (lipids)** into **fatty acids and glycerol**. It reaches the small intestine mainly in pancreatic juice.",
            "**Catalase:** found in the **liver** and in most living cells, including yeast and potato.",
            "It breaks down **hydrogen peroxide**, a toxic product of metabolism, into **water and oxygen**, so the cell is not damaged. The equation to write is: 2 H2O2 → 2 H2O + O2.",
            "**Maltase** splits maltose into two glucose molecules at the lining of the small intestine.",
            "Protease acts stepwise: protein to shorter peptides, then peptides to amino acids.",
          ],
        },
        {
          subTitle: "How each is detected in a practical",
          bullets: [
            "**Starch and amylase:** samples are withdrawn at intervals and tested with **iodine solution**. Blue-black means starch is still present; remaining brown-yellow means the starch has been digested.",
            "**Maltose from amylase:** tested with **Benedict's solution** after heating in a water bath; a brick-red precipitate shows a reducing sugar is present.",
            "**Oxygen from catalase:** gas collects in a syringe or bubbles from the mixture; it **relights a glowing splint**. Faster bubbling means a faster rate.",
            "**Fat and lipase:** the pH of the mixture falls as fatty acids form, so a probe or indicator shows the reaction proceeding.",
            "**bile** added to the tube makes the fat droplets smaller and speeds the whole thing up.",
            "**Protease and protein:** biuret stays blue only once all protein is digested; a purple colour means protein remains.",
            "Hold every tube at the same temperature in a water bath so the enzyme is the only difference.",
          ],
        },
      ],
      examinerTips: [
        "Learn the pairs as one sentence each: amylase makes maltose from starch, protease makes amino acids from protein, lipase makes fatty acids and glycerol from fat.",
        "Say that bile **emulsifies** fat into small droplets, increasing the surface area for lipase. Bile contains no enzyme and is not itself digestion by an enzyme.",
        "When a question asks about a plant or fungal enzyme, name the substrate and product anyway; that is where the marks are.",
        "Catalase is not a digestive enzyme; it protects cells by breaking down toxic hydrogen peroxide.",
      ],
      commonMistakes: [
        "'Amylase breaks starch into glucose.' The product taught at this level is maltose.",
        "'Lipase breaks fat into amino acids.' That belongs to protease.",
        "Naming catalase as a digestive enzyme. It works inside cells on hydrogen peroxide, not in the gut.",
        "Saying amylase in the mouth digests all food types; it acts on starch only.",
      ],
      recap: [
        "Complete the table: enzyme, substrate, product. [6]",
        "Describe an experiment using iodine solution to show that amylase digests starch. [5]",
        "State what catalase does to hydrogen peroxide and name the test for the gas produced. [3]",
        "Explain how bile helps lipase digest fat. [3]",
      ],
    },
    {
      title: "Measuring Rate and Designing a Fair Test",
      figure: fairTestArt,
      body: `The **rate of a reaction** is the amount of substrate used up or product formed **per unit time**, and the units must always be stated, such as oxygen in cubic centimetres per minute.

### The two graph shapes that are always compared
1.\n\n**Substrate concentration, everything else constant:** the rate rises, then reaches a **plateau** once every active site is occupied.
2.\n\n**Enzyme concentration, substrate unlimited:** the rate rises in a straight line, since more enzyme means more active sites.`,
      groups: [
        {
          subTitle: "Controlling the variables in an enzyme practical",
          bullets: [
            "**Independent variable** is the one you change, such as temperature or pH; the **dependent variable** is the rate you measure.",
            "**Control variables:** the same concentration and volume of enzyme and of substrate, the same pH or the same temperature, the same time allowed, the same surface area of any tissue used, and the same source of the enzyme.",
            "Use a **water-bath** to hold the temperature, and pre-incubate both enzyme and substrate at the test temperature before mixing them, so the reaction does not start at the wrong temperature.",
            "Take a sample at intervals and test each with the appropriate reagent, or collect the gas in a syringe and read the volume at fixed times.",
            "**Repeat and average**, then plot rate against the variable; draw a smooth curve rather than a set of straight joins between points.",
            "A **water-bath** holds the temperature steady; a **buffer** holds the pH steady.",
            "Rate equals amount changed divided by time taken, so always divide by the time.",
          ],
        },
        {
          subTitle: "Reading the results honestly",
          bullets: [
            "Rate is the **gradient** of the amount-time graph, usually taken at the start where the slope is steady.",
            "A flat curve does not mean the reaction stopped slowly; it means the measured quantity has stopped changing.",
            "An anomalous point is one that does not fit the trend, often caused by the temperature of the water-bath drifting or the timing being off.",
            "A **limiting factor** is anything in short supply that holds the rate below its possible maximum.",
            "On the substrate curve the plateau point is where enzyme concentration becomes the limiting factor.",
          ],
        },
      ],
      examinerTips: [
        "Name the limiting factor as a factor, not as a substance in isolation: 'the enzyme concentration is limiting', not 'there is no more enzyme'.",
        "Quote the units of rate when you state a value taken from a graph, and give the value to the same number of decimal places as the graph allows.",
        "When asked how to improve reliability, the answer is repetition and averaging; when asked how to improve validity, it is control of the other variables.",
        "For 'describe and explain' questions, describe what you did first and then link every step to why it makes the comparison fair.",
      ],
      commonMistakes: [
        "Reporting 'amount' when the question asks for 'rate' — the time element is missing.",
        "Mixing the enzyme and the substrate before they have reached the test temperature.",
        "Using a naked flame to heat ethanol or a water-bath containing samples, and describing boiling ethanol directly over a burner.",
        "Concluding that the reaction stopped at the plateau because the enzyme was denatured, when the substrate is what ran out.",
      ],
      recap: [
        "Define the rate of an enzyme-controlled reaction and give one set of suitable units. [2]",
        "Sketch and explain the shape of a graph of rate against substrate concentration. [4]",
        "On such a graph, identify the limiting factor at the start of the curve and at the plateau. [2]",
        "Describe how you would investigate the effect of pH on amylase activity, naming two variables to control. [5]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_5: Chapter = digestiveEnzymesChapter;
