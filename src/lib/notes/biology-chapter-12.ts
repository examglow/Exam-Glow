import type { Chapter } from "./types";
import { box, labelledRows, svgDiagram, tileRow } from "./diagram-kit";

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

const respirationArt = artPanel([
  {
    src: "ch12-mitochondrion.webp",
    alt: "Illustration of a mitochondrion with its folded inner membrane",
    caption: "Where aerobic respiration releases energy",
  },
  {
    src: "ch12-yeast-fermentation.webp",
    alt: "Illustration of yeast fermenting sugar in a flask and giving off bubbles of gas",
    caption: "Yeast fermenting sugar and giving off gas",
  },
]);

const respirationPracticalArt = artPanel([
  {
    src: "ch12-respirometer.webp",
    alt: "A tube of germinating seeds with a drop of coloured liquid moving along a capillary",
    caption: "A respirometer tracing oxygen uptake",
  },
  {
    src: "ch12-germinating-seeds.webp",
    alt: "Two jars of seeds, one respiring and warm with rising heat, one dry",
    caption: "Respiring seeds release heat",
  },
]);

/** Where the energy released by respiration is actually spent in a living body. */
const energyUsesDiagram = svgDiagram(
  "The uses of the energy released by respiration",
  `<text class="title" x="450" y="32" text-anchor="middle">Energy is released to power the work of life</text>
  ${tileRow(
    [
      {
        title: "Movement",
        cls: "main",
        body: "muscle fibres\ncontract to move\nlimbs and organs",
      },
      {
        title: "Growth & repair",
        cls: "blue",
        body: "new cells built\nand tissues mended\nas the body grows",
      },
      {
        title: "Keeping warm",
        cls: "gold",
        body: "mammals and birds\nmaintain a steady\nbody temperature",
      },
      {
        title: "Active transport",
        cls: "pink",
        body: "pumping ions across\nmembranes and building\nlarge from small",
      },
    ],
    56,
    { h: 148 },
  )}
  ${box(24, 212, 852, 40, "Every one of these needs energy; respiration supplies it, breathing only delivers the oxygen", "panel", "small")}`,
  900,
  268,
);

/** The aerobic equation read as a flow of reactants through the cell to the products. */
const aerobicEquationDiagram = svgDiagram(
  "Aerobic respiration: reactants through the cell to the products",
  `<text class="title" x="450" y="32" text-anchor="middle">One substrate in, two wastes and energy out</text>
  <text class="small" x="450" y="60" text-anchor="middle">glucose + oxygen  gives  carbon dioxide + water  plus energy</text>
  ${box(24, 84, 210, 56, "glucose + oxygen", "blue")}
  ${box(320, 84, 240, 56, "aerobic respiration", "gold")}
  ${box(640, 84, 236, 56, "carbon dioxide + water", "main")}
  <path class="arrow" d="M238 112h74"/>
  <path class="arrow" d="M564 112h70"/>
  <text class="accent" x="450" y="160" text-anchor="middle">energy captured as ATP for the cell</text>
  ${labelledRows(
    [
      ["Where", "cytoplasm, then mitochondria"],
      ["Usual substrate", "glucose, a carbohydrate"],
      ["Reactants", "glucose and oxygen"],
      ["Products", "carbon dioxide and water"],
      ["Energy yield", "large, most in the mitochondria"],
    ],
    150,
    192,
    28,
  )}`,
  900,
  340,
);

/** The oxygen-debt loop: muscle makes lactic acid, the blood carries it to the liver, and oxygen clears it. */
const lacticAcidCycleDiagram = svgDiagram(
  "Lactic acid and the oxygen debt",
  `<text class="title" x="450" y="32" text-anchor="middle">Glucose without oxygen makes lactic acid</text>
  <text class="small" x="450" y="60" text-anchor="middle">glucose gives lactic acid plus a little energy, with no oxygen used</text>
  ${box(30, 82, 200, 58, "working muscle", "pink")}
  ${box(300, 82, 220, 58, "lactic acid in blood", "gold")}
  ${box(590, 82, 280, 58, "liver breaks it up", "blue")}
  <path class="arrow" d="M234 111h62"/>
  <path class="arrow" d="M524 111h62"/>
  <text class="small" x="130" y="162" text-anchor="middle">makes the lactic acid</text>
  <text class="small" x="410" y="162" text-anchor="middle">carried round the body</text>
  <text class="small" x="730" y="162" text-anchor="middle">using the extra oxygen</text>
  <path class="arrow" d="M730 190H120"/>
  <text class="accent" x="450" y="216" text-anchor="middle">heavy breathing after exercise repays the oxygen debt</text>`,
  900,
  236,
);

/** Aerobic and anaerobic respiration drawn as the side-by-side comparison examiners ask for. */
const aerobicVsAnaerobicDiagram = svgDiagram(
  "Aerobic compared with anaerobic respiration",
  `<text class="title" x="450" y="32" text-anchor="middle">Same starting sugar, two very different outcomes</text>
  ${tileRow(
    [
      {
        title: "Aerobic respiration",
        cls: "main",
        body: "oxygen is used\nglucose broken down fully\nproducts: carbon dioxide and water\nreleases a lot of energy",
      },
      {
        title: "Anaerobic respiration",
        cls: "pink",
        body: "no oxygen is used\nglucose broken down only partly\nproducts: lactic acid, or\nethanol and carbon dioxide",
      },
    ],
    56,
    { h: 150 },
  )}
  ${box(24, 214, 852, 40, "Both begin with glucose and both release energy; only aerobic respiration is a complete breakdown", "panel", "small")}`,
  900,
  270,
);

/** How breathing rate, heart rate and blood distribution move through a bout of exercise and its recovery. */
const exerciseResponseDiagram = svgDiagram(
  "The response to exercise, before, during and after",
  `<text class="title" x="450" y="32" text-anchor="middle">The body matches a rising demand for oxygen</text>
  ${tileRow(
    [
      {
        title: "Before exercise",
        body: "breathing and heart\nrate are steady\nas demand is met",
      },
      {
        title: "During exercise",
        cls: "pink",
        body: "breathing and heart\nrate rise and blood\nflows to the muscles",
      },
      {
        title: "Recovery",
        cls: "gold",
        body: "rates stay high to\nrepay the debt and\nremove lactic acid",
      },
    ],
    56,
    { h: 140 },
  )}
  ${box(24, 204, 852, 40, "the brain speeds up breathing as carbon dioxide and lactic acid build up in the blood", "panel", "small")}`,
  900,
  260,
);

/** The four factors that change how fast cells respire. */
const respirationFactorsDiagram = svgDiagram(
  "Factors that affect the rate of respiration",
  `<text class="title" x="450" y="32" text-anchor="middle">Four things set the pace of the reaction</text>
  ${tileRow(
    [
      {
        title: "Temperature",
        cls: "main",
        body: "faster to an optimum,\nthen the enzymes\ndenature and it falls",
      },
      {
        title: "Glucose supply",
        cls: "blue",
        body: "more substrate\nspeeds it up until\nthe enzymes are full",
      },
      {
        title: "Oxygen",
        cls: "gold",
        body: "sets the aerobic\ncap; without it the\ncell turns anaerobic",
      },
      {
        title: "Exercise",
        cls: "pink",
        body: "muscles want more\nATP, so respiration\nrates climb steeply",
      },
    ],
    56,
    { h: 140 },
  )}
  ${box(24, 204, 852, 40, "respiration is fastest at its optimum temperature and needs both substrate and oxygen to run at full speed", "panel", "small")}`,
  900,
  260,
);

const chapterTwelve: Chapter = {
  number: 12,
  title: "Respiration",
  intro: `Respiration is the reaction that powers being alive, and it is one of the most misunderstood words in biology.\n\nIn everyday speech it means breathing; in this chapter it means the ==chemical breakdown of glucose inside a cell to release energy==.\n\nBreathing only exists to feed that reaction with oxygen and to carry away the carbon dioxide it makes.\n\nOnce the distinction is fixed, the chapter splits into three clear parts:\n\nThe complete aerobic reaction that runs in the mitochondria, the incomplete anaerobic reaction that muscles and yeast fall back on when oxygen is short, and the way the body responds when exercise drives respiration to its limit.\n\nEvery question rewards one habit — naming the substances, naming the site, and giving the energy a purpose.`,
  subheadings: [
    {
      title: "Respiration Compared with Breathing",
      body: `### Respiration Is Chemistry, Not a Lung Action\n\n**Respiration is the set of chemical reactions in the cells of living organisms that break down nutrient molecules, mainly glucose, to release energy for metabolism.\n\nIt happens in **every living cell, all the time**, and its product is **energy**, not air.\n\n> Breathing supplies the oxygen; respiration uses it and releases the energy in return.`,
      figure: energyUsesDiagram,
      groups: [
        {
          subTitle: "The Places the Energy Goes",
          bullets: [
            "**Movement and muscle contraction:** energy shortens muscle fibres, moves limbs, powers the beating of the heart and drives the peristaltic waves in the gut.",
            "**Growth and cell division:** making new cells and copying DNA before they divide both require energy taken from respiration.",
            "**Keeping warm:** mammals and birds spend energy to hold their body temperature constant, which is why a resting body still respires.",
            "**Active transport:** root hair cells and kidney tubule cells pump ions against their gradient only by using respiratory energy.",
            "**Building large molecules:** amino acids are joined into proteins and glucose into starch only when energy is supplied.",
            "Even a **resting** body respires, since the heart and brain never stop working.",
            "Part of the released energy is lost as **heat**, which helps warm-blooded animals keep their temperature.",
            "The **contraction of muscle** and the **heartbeat** both draw directly on this energy.",
          ],
        },
        {
          subTitle: "Why the Two Words Are Not Interchangeable",
          bullets: [
            "Breathing happens in organs; respiration happens in cells. Conflating them gives a zero-mark definition.",
            "Respiration never stops, day or night and whether the animal is awake or asleep; breathing is only one part of how it is supplied.",
            "Gas exchange (oxygen in, carbon dioxide out) and respiration are linked but distinct: gas exchange moves the substances, respiration consumes them.",
            "Plants respire too, in every living cell all the time; they do not respire only at night, even though they photosynthesise only by day.",
            "**Breathing** is ventilation: moving air over a gas-exchange surface.",
            "An **amoeba** has no lungs yet respires by diffusion, proving the two are different.",
            "Breathing only **delivers** oxygen and removes carbon dioxide for respiration.",
          ],
        },
      ],
      examinerTips: [
        "Define respiration with all three scoring ideas: **chemical reactions in cells**, **breakdown of nutrient molecules or glucose**, and **release of energy**. Leave out the word 'cells' and a mark is lost.",
        "When a question contrasts respiration with breathing, say that breathing is ventilation and respiration is the intracellular release of energy from glucose — two named processes, both stated.",
        "For a 'uses of the energy' question, give named uses rather than a vague 'to stay alive'; muscle contraction, growth, keeping warm and active transport are the reliable marks.",
        "Use **ventilation** for breathing and **intracellular** for respiration; those precise words signal understanding.",
      ],
      commonMistakes: [
        "Writing 'respiration is breathing in oxygen and breathing out carbon dioxide'. That describes ventilation, not respiration, and gains no marks.",
        "Saying respiration only happens in the lungs or only during exercise. It happens in every living cell, constantly.",
        "Confusing respiration with photosynthesis. Photosynthesis stores energy in glucose; respiration releases energy from it.",
        "Saying the lungs or blood 'respire'; gas exchange happens there, but respiration happens inside cells.",
      ],
      recap: [
        "Define respiration. [3]",
        "State the difference between respiration and breathing. [2]",
        "Name four uses of the energy released by respiration in a mammal. [4]",
        "State one use of the energy released by respiration in a plant. [1]",
      ],
    },
    {
      title: "Aerobic Respiration",
      body: `### The Complete Breakdown of Glucose\n\n**Aerobic respiration is the release of energy from glucose by its reaction with oxygen, giving carbon dioxide and water as products.\n\nWritten as a balanced equation, and worth learning exactly, it is:\n\n> **C6H12O6 + 6O2 → 6CO2 + 6H2O** (with energy released)`,
      figure: aerobicEquationDiagram,
      groups: [
        {
          subTitle: "The Equation and Its Substrate",
          bullets: [
            "**Word equation:** glucose + oxygen → carbon dioxide + water + energy.",
            "**Symbol equation:** C6H12O6 + 6O2 → 6CO2 + 6H2O; the carbon, hydrogen and oxygen atoms balance on both sides.",
            "Glucose, a carbohydrate, is the most common substrate, but fats and proteins can be respired when carbohydrate is scarce.",
            "Oxygen is a reactant and glucose is the substrate; carbon dioxide and water are the products, and energy is released to the cell.",
            "The **energy** term is a product, never written with the reactants.",
            "Each side balances: six carbons, twelve hydrogens, eighteen oxygens.",
            "**Fats and proteins** replace glucose as substrate only when carbohydrate runs low.",
          ],
        },
        {
          subTitle: "Where It Happens and Why It Matters",
          bullets: [
            "**Glycolysis in the cytoplasm** begins the breakdown of glucose without using oxygen and gives a little energy.",
            "The remaining steps run in the **mitochondria** and depend on oxygen; they release by far the most energy.",
            "The mitochondrion is folded inward to give a large surface for these reactions, which is why it is called the site of aerobic respiration.",
            "Energy released is used to build **ATP**, and ATP is what actually powers muscle contraction, active transport and biosynthesis.",
            "Hard-working cells — muscle, root hair, kidney lining — are **packed with mitochondria**.",
            "The **inner membrane** folds into cristae, adding surface for the reaction.",
            "Some energy is lost as **heat**, which is why active muscles feel warm.",
          ],
        },
        {
          subTitle: "Testing That Respiration Is Happening",
          bullets: [
            "Aerobic respiration consumes oxygen and gives off carbon dioxide, so a fall in oxygen and a rise in carbon dioxide in a sealed container is evidence of respiration.",
            "The carbon dioxide produced turns **limewater milky**, a standard test that living tissue is respiring.",
            "Respiration releases heat, so an insulated flask of respiring seeds registers a temperature rise against a dead-seed control.",
            "**Hydrogencarbonate indicator** turns yellow as the carbon dioxide level rises.",
            "A **thermometer in an insulated flask** records the heat given off.",
            "Boiled, dead seeds are the **control** proving only living tissue respires.",
          ],
        },
      ],
      examinerTips: [
        "Give the equation in **both** forms when asked: the words for the substrate and products, and the balanced symbols C6H12O6 + 6O2 → 6CO2 + 6H2O.",
        "Name the two sites in order — glycolysis in the cytoplasm, then completion in the mitochondria. Saying 'the mitochondria' alone captures only part of the marks.",
        "State that oxygen is needed and that the breakdown of glucose is **complete**, because these two features are what separate aerobic from anaerobic in a comparison.",
        "Put the **energy** on the product side; writing it with the reactants is a common way to lose the equation mark.",
      ],
      commonMistakes: [
        "Writing the equation with the reactants and products reversed, or leaving out oxygen as a reactant.",
        "Claiming glucose is broken down entirely in the mitochondria; the first stage, glycolysis, is in the cytoplasm.",
        "Saying aerobic respiration 'makes carbon dioxide' as its purpose. Carbon dioxide is a waste; the purpose is the release of energy.",
        "Naming glucose as the only substrate; fats and proteins can also be respired.",
      ],
      recap: [
        "Write the balanced symbol equation for aerobic respiration. [2]",
        "Name the two places in a cell where aerobic respiration takes place and say what happens in each. [3]",
        "Describe how you would show that a respiring organism gives off carbon dioxide. [2]",
        "State where glycolysis occurs and what it produces. [2]",
      ],
    },
    {
      title: "Anaerobic Respiration",
      body: `### When Oxygen Runs Out\n\n**Anaerobic respiration is the release of energy from glucose without oxygen, in which the glucose is broken down only partially and gives far less energy.\n\nIn yeast and plants the products are ethanol and carbon dioxide, and this route is called **fermentation**:\n\n> **glucose → ethanol + carbon dioxide (+ energy)**`,
      figure: lacticAcidCycleDiagram,
      groups: [
        {
          subTitle: "In Animals: the Lactic Acid Route",
          bullets: [
            "**glucose → lactic acid + energy**, released with no oxygen used and with a small yield.",
            "Lactic acid that accumulates in a muscle fibre interferes with contraction and is linked to the fatigue and cramps of hard effort.",
            "Lactic acid diffuses out of the muscle into the blood and is **transported to the liver**.",
            "In the liver the lactic acid is broken down using oxygen; the oxygen still needed afterwards is the **oxygen debt**.",
            "Breathing and heart rate stay elevated through the sprint's **recovery**.",
            "Lactic acid lowers the **pH** in the fibre, adding to the tiredness felt.",
            "**Muscle cells** switch to this route only when oxygen cannot be delivered fast enough.",
          ],
        },
        {
          subTitle: "In Plants and Yeast: Fermentation",
          bullets: [
            "**glucose → ethanol + carbon dioxide + energy**; the products are ethanol and carbon dioxide, not lactic acid.",
            "This anaerobic breakdown of glucose by yeast is named **fermentation**.",
            "The carbon dioxide makes bread rise and produces the fizz in drinks; the ethanol is the alcohol formed in brewing and winemaking.",
            "Plant roots in waterlogged, oxygen-poor soil respire anaerobically, but the ethanol produced is toxic and limits how long they can survive so.",
            "Carbon dioxide forms the **bubbles** that inflate bread dough and fizz in drinks.",
            "Ethanol builds up and is **toxic** to yeast at high concentration.",
            "**Yeast** ferments only in an oxygen-free sugar solution.",
          ],
        },
        {
          subTitle: "Why the Yield Is Small",
          bullets: [
            "In anaerobic respiration the glucose is only partly broken down, so most of its chemical energy is still locked in the lactic acid or ethanol left behind.",
            "Because each glucose yields little energy, an anaerobic cell must consume glucose very quickly to stay powered.",
            "Anaerobic respiration is a short-term emergency supply, not a permanent replacement for aerobic respiration.",
            "Aerobic respiration releases **far more energy** from the same glucose.",
            "Without oxygen the **mitochondria** cannot finish the breakdown.",
            "The leftover lactic acid or ethanol is still **energy-rich**.",
          ],
        },
      ],
      examinerTips: [
        "Give the **correct anaerobic equation for the right organism**: animals make lactic acid, yeast and plants make ethanol and carbon dioxide. Mixing the two products is a frequent mark loss.",
        "Define anaerobic respiration as 'release of energy from glucose **without oxygen**', and add that the glucose is **not completely broken down**.",
        "Explain the oxygen debt in three linked steps: muscle makes lactic acid → it is carried to the liver → extra oxygen is taken in to break it down.",
        "Spell **anaerobic** and **ethanol** exactly; a mis-spelled key term earns nothing.",
      ],
      commonMistakes: [
        "Claiming anaerobic respiration releases 'no energy'. It releases energy, just far less per glucose than the aerobic route.",
        "Saying that only animals respire anaerobically. Yeast and plant roots do too.",
        "Writing that oxygen is 'not needed at all so the reaction stops'; the reaction continues without oxygen and yields lactic acid or ethanol.",
        "Calling fermentation a form of photosynthesis. It is anaerobic respiration.",
      ],
      recap: [
        "State the word equation for anaerobic respiration in a muscle cell. [2]",
        "Explain how the lactic acid produced during a sprint is eventually removed from the body. [3]",
        "Name the products of anaerobic respiration in yeast and state one human use of this process. [2]",
        "Explain why anaerobic respiration gives less energy per glucose than aerobic respiration. [2]",
      ],
    },
    {
      title: "Comparing Aerobic and Anaerobic Respiration",
      body: `### The Table Examiners Ask For\nBoth routes begin with glucose and release energy, but they differ at every other step. Compare them row by row:\n\n| Feature | Aerobic respiration | Anaerobic respiration |\n| --- | --- | --- |\n| Oxygen | Required | Not used |\n| Breakdown of glucose | Complete | Incomplete (only partial) |\n| End products | Carbon dioxide and water | Lactic acid (animals) or ethanol and carbon dioxide (yeast, plants) |\n| Energy released | Large amount per glucose | Much smaller amount per glucose |\n| Site | Cytoplasm then mitochondria | Cytoplasm only |\n| Can be sustained | Yes, continuously | Only briefly; oxygen debt or toxic products build up |`,
      figure: aerobicVsAnaerobicDiagram + "\n\n" + respirationArt,
      groups: [
        {
          subTitle: "Reading the Differences Out",
          bullets: [
            "**Oxygen:** aerobic uses it as a reactant; anaerobic runs without it.",
            "**Completeness:** aerobic breaks glucose fully to carbon dioxide and water; anaerobic leaves a glucose fragment behind as lactic acid or ethanol.",
            "**Energy:** aerobic releases far more energy from each glucose molecule than anaerobic does.",
            "**Duration:** aerobic can continue indefinitely; anaerobic can only be a stopgap because of the oxygen debt or the toxicity of its products.",
            "**Site:** aerobic runs in cytoplasm then mitochondria; anaerobic in cytoplasm only.",
            "**Products:** water and carbon dioxide appear only in the aerobic route.",
            "Marks are scored on **opposing pairs**, so give both sides in every row.",
          ],
        },
        {
          subTitle: "Where Anaerobic Respiration Is Used",
          bullets: [
            "**A sprinting human:** muscles switch to the lactic-acid route for seconds at a time when the blood cannot deliver oxygen fast enough.",
            "**Yeast in bread:** fermentation releases carbon dioxide that inflates the dough before baking.",
            "**Yeast in brewing:** anaerobic respiration produces the ethanol of alcoholic drinks.",
            "**Bacteria in silage:** anaerobic bacteria convert the sugars in stored grass to acids that preserve the fodder.",
            "**Waterlogged soil** forces plant roots into anaerobic respiration.",
            "A muscle can hold the lactic-acid route only for **a few seconds**.",
            "Bread-making and brewing are **deliberate** uses of fermentation.",
          ],
        },
      ],
      examinerTips: [
        "When asked to 'compare', name a difference and then give **both** sides; when asked to 'contrast aerobic and anaerobic', use four contrasting features to reach four marks.",
        "State clearly which products belong to which organism: lactic acid for animals, ethanol plus carbon dioxide for yeast and most plants.",
        "If a mark is available for the reason anaerobic cannot last, write the reason — a small energy yield plus a build-up of lactic acid or ethanol.",
        "Set the answer out as paired rows or paired sentences; naming one side alone leaves that mark unclaimed.",
      ],
      commonMistakes: [
        "Listing differences about breathing or gas exchange instead of differences in the respiration reaction itself.",
        "Writing that anaerobic respiration produces carbon dioxide in animals. Animals make lactic acid; carbon dioxide comes from the yeast and plant version.",
        "Claiming anaerobic respiration happens in the mitochondria. The anaerobic pathway is completed in the cytoplasm.",
        "Saying aerobic respiration happens only in the mitochondria; it starts with glycolysis in the cytoplasm.",
      ],
      recap: [
        "State four differences between aerobic and anaerobic respiration. [4]",
        "Give one example, other than in a human, in which anaerobic respiration is put to use. [2]",
        "Explain why anaerobic respiration cannot supply an organism's energy needs for long. [3]",
        "Give two everyday uses of anaerobic respiration by yeast or bacteria. [2]",
      ],
    },
    {
      title: "The Response to Exercise",
      body: `### Meeting a Rising Demand for Energy\n\nWorking muscles respire faster, so they need **more oxygen** and must shed **more carbon dioxide**.\n\nThe body adjusts breathing, heart rate and blood distribution, guided by the ==brain's respiratory centre reading the blood==.`,
      figure: exerciseResponseDiagram,
      groups: [
        {
          subTitle: "What Changes and Why",
          bullets: [
            "**Breathing:** rate and depth rise so the lungs take in more oxygen and remove more carbon dioxide each minute.",
            "**Heart rate:** beats per minute rise, and each beat pumps more blood, so the cardiac output that feeds the muscles goes up.",
            "**Blood distribution:** vessels to the active muscles (and to the skin for cooling) dilate while those to the gut constrict, sending flow where it is needed.",
            "**Fuel and waste delivery:** more glucose and oxygen reach the fibre, and more carbon dioxide and lactic acid are carried away.",
            "**Cardiac output** equals heart rate multiplied by stroke volume, and both rise.",
            "Ventilation over the **alveoli** speeds, so more oxygen is absorbed per minute.",
            "Blood is **redirected** to the muscles and away from the gut.",
          ],
        },
        {
          subTitle: "The Signals and the Recovery",
          bullets: [
            "A rising **carbon dioxide** concentration (and the fall in pH that goes with it) is the main trigger that makes the breathing centre increase ventilation.",
            "**Lactic acid** built up by anaerobic respiration in over-worked muscle adds to the drive to keep breathing hard.",
            "During recovery, breathing and heart rate remain elevated until the **oxygen debt** is repaid and the lactic acid has been broken down in the liver.",
            "The **medulla** in the brain is the respiratory control centre.",
            "More **carbon dioxide** makes the blood more acidic, raising the breathing drive.",
            "**Heart rate** also stays high through recovery, not just the breathing.",
          ],
        },
      ],
      examinerTips: [
        "Answer 'during exercise' questions as a cause-and-effect chain.",
        "Muscles respire faster → need more oxygen and produce more carbon dioxide → breathing and heart rate rise. The reasoning carries the marks, not the list of rates.",
        "Always mention that **carbon dioxide** (not oxygen shortage on its own) is the principal driver of the increased breathing, and link it to the acidity of the blood.",
        "Use the phrase **'to repay the oxygen debt'** when explaining why breathing stays fast after the exercise stops, and name the liver as the place the lactic acid is removed.",
        "Say the **medulla** is the brain centre that speeds the breathing, to secure the control-of-breathing mark.",
      ],
      commonMistakes: [
        "Saying the body increases breathing 'because the muscles need more energy'. The breathing responds to the carbon dioxide in the blood; explain the trigger.",
        "Claiming that breathing rate returns to normal the instant exercise stops. It stays high through recovery while the debt is repaid.",
        "Confusing the rise in breathing rate with the rise in heart rate and describing one as if it were the other.",
        "Saying blood flow to the gut rises during exercise; it is **redirected** away from the gut to the muscles.",
      ],
      recap: [
        "Describe and explain the changes in breathing rate and heart rate during exercise. [4]",
        "Explain why breathing rate rises as the level of carbon dioxide in the blood increases. [3]",
        "Account for the fact that breathing remains fast for some minutes after a sprint has ended. [3]",
        "Explain why heart rate stays high for a while after exercise stops. [3]",
      ],
    },
    {
      title: "Factors Affecting the Rate, and How to Measure It",
      body: `### Turning Respiration into a Number\n\nThe rate of respiration responds to **temperature**, **substrate**, **oxygen** and **activity**, and it can be measured with a **respirometer**.\n\nEach factor and each method is set out in the bullets below.`,
      figure: respirationFactorsDiagram + "\n\n" + respirationPracticalArt,
      groups: [
        {
          subTitle: "The Factors and Their Effects",
          bullets: [
            "**Temperature:** rate rises toward an optimum, then falls sharply as the enzymes involved are denatured by excess heat.",
            "**Glucose (substrate) concentration:** more substrate increases the rate up to the point where the enzymes are saturated.",
            "**Oxygen concentration:** higher oxygen sustains a faster aerobic rate; low oxygen forces the cell toward anaerobic respiration.",
            "**Level of activity or exercise:** the greater the demand for ATP, the faster respiration is driven.",
            "The **optimum** is the temperature of the fastest rate, usually near body temperature.",
            "A **plateau** on the substrate curve means the enzymes are saturated.",
            "Above the optimum the rate **falls**, because the enzymes are denatured.",
          ],
        },
        {
          subTitle: "Measuring and Detecting Respiration",
          bullets: [
            "A **respirometer** seals respiring organisms with a solution that absorbs the carbon dioxide given off, so the change in gas volume records oxygen taken up.",
            "**Counting bubbles** of carbon dioxide from yeast in sugar solution, kept in a water bath, gives a simple measure of the rate.",
            "**Limewater** turns milky in the presence of carbon dioxide, confirming that respiration is producing it.",
            "**Heat released** by respiring seeds in an insulated flask, compared with a dead-seed control, is further evidence that respiration is occurring.",
            "**Potassium hydroxide** absorbs the carbon dioxide inside the respirometer.",
            "The **drop movement** along the capillary tube gives the rate directly.",
            "The fall in gas volume equals the **oxygen taken up**.",
          ],
        },
        {
          subTitle: "Designing the Practical Fairly",
          bullets: [
            "Keep the temperature constant with a **water bath**, since temperature changes the rate being measured.",
            "Give every sample the same mass of organism and the same volume of solution so results are comparable.",
            "**Repeat** each reading and take a mean, and use a control of dead or boiled organisms to show the change is due to living respiration.",
            "Change only **one factor** at a time in a fair test.",
            "Use the **same volume** of solution so the comparison stays valid.",
            "A **boiled (dead) control** shows living tissue is the cause.",
          ],
        },
      ],
      examinerTips: [
        "For any factor question, name the factor **and** give the mechanism: 'a higher temperature speeds the enzyme-controlled reactions up to the optimum; beyond it the enzymes denature and the rate falls.'",
        "Explain why the carbon dioxide is absorbed in a respirometer: taking it out of the gas means the volume change measured is the oxygen used.",
        "When asked for a control or a way to improve reliability, supply 'boiled (dead) seeds as a control' or 'repeat and calculate a mean' — these are the expected answers.",
        "Give both the **direction** of change and the reason for it; writing only 'faster' is too thin to score.",
      ],
      commonMistakes: [
        "Saying the rate of respiration keeps rising with temperature. Past the optimum the enzymes denature and the rate falls.",
        "Forgetting that the respirometer measures oxygen uptake only because the carbon dioxide has been removed; describing it as measuring carbon dioxide instead.",
        "Reporting bubble counts from yeast without controlling temperature or the amount of yeast, so the comparison is unfair.",
        "Omitting the **dead-seed control**, so nothing rules out a non-living cause of the change.",
      ],
      recap: [
        "Describe and explain the effect of temperature on the rate of respiration. [3]",
        "Explain how a respirometer with a carbon-dioxide-absorbing solution measures the rate of aerobic respiration. [3]",
        "State two ways of providing evidence that a specimen is respiring, naming the reagent or observation used. [2]",
        "Describe how you would measure the oxygen uptake of respiring organisms. [3]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_12: Chapter = chapterTwelve;
