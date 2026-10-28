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

const plantNutritionIllustrations = artPanel([
  {
    src: "ch06-whole-plant.webp",
    alt: "A green plant taking in water through its roots and light on its leaves",
    caption: "A plant taking in water and light",
  },
  {
    src: "ch06-leaf-cross-section.webp",
    alt: "Cross-section of a leaf showing its cell layers and an open stoma",
    caption: "Leaf cross-section and stoma",
  },
]);

const starchTestArt = artPanel([
  {
    src: "ch06-starch-test.webp",
    alt: "A leaf being covered with iodine solution from a dropper beside a dish of brown iodine",
    caption: "The iodine test for starch in a leaf",
  },
]);

const deficiencyArt = artPanel([
  {
    src: "ch06-deficient-plants.webp",
    alt: "A healthy green potted plant beside a yellowed, stunted one",
    caption: "Healthy plant beside a mineral-deficient one",
  },
]);

const leafCrossSection = svgDiagram(
  "Leaf Cross-Section: Layer by Layer",
  `<text class="title" x="450" y="32" text-anchor="middle">Light enters from above, carbon dioxide from below</text>
   ${box(24, 54, 300, 24, "1", "gold")}
   ${box(24, 78, 300, 34, "2", "blue")}
   ${box(24, 112, 300, 88, "3", "main")}
   <rect class="line" x="212" y="122" width="26" height="68" rx="12"/>
   <rect class="line" x="244" y="122" width="26" height="68" rx="12"/>
   <rect class="line" x="276" y="122" width="26" height="68" rx="12"/>
   ${box(24, 200, 300, 96, "4", "purple")}
   <circle class="line" cx="228" cy="228" r="15"/>
   <circle class="line" cx="272" cy="248" r="17"/>
   <circle class="line" cx="226" cy="274" r="14"/>
   <circle class="line" cx="284" cy="216" r="11"/>
   <rect class="blue" x="24" y="296" width="300" height="34" rx="10"/>
   <text class="label" x="52" y="318">5</text>
   <ellipse cx="170" cy="313" rx="13" ry="17" fill="${colors.green}"/>
   <ellipse cx="230" cy="313" rx="13" ry="17" fill="${colors.green}"/>
   <text class="small" x="252" y="318">6</text>
   ${labelledRows(
     [
       ["Cuticle", "waxy, waterproof, cuts water loss"],
       ["Upper layer", "transparent, light reaches below"],
       ["Palisade", "tall cells, most chloroplasts"],
       ["Spongy layer", "air spaces, gases diffuse freely"],
       ["Lower layer", "carries the stomata of the leaf"],
       ["Guard cells", "open and close each pore"],
     ],
     340,
     74,
     34,
   )}
   <path class="arrow" d="M336 372 C280 368 208 358 186 336"/>
   <text class="small" x="344" y="377">carbon dioxide in through the stoma</text>
   <path class="arrow" d="M178 342 C200 384 268 404 332 404"/>
   <text class="small" x="344" y="409">water vapour and oxygen diffuse out</text>`,
  900,
  424,
);

const limitingCurves = svgDiagram(
  "Limiting Factor Curves for Photosynthesis",
  `<text class="title" x="450" y="34" text-anchor="middle">The curve stops where the scarcest supply stops it</text>
   <path class="line" d="M90 300 V72"/>
   <path class="line" d="M90 300 H840"/>
   <path class="line" style="stroke:${colors.blue}" d="M90 300 C150 240 190 185 260 175 C340 163 700 160 830 160"/>
   <path class="line" style="stroke:${colors.green}" d="M90 300 C150 225 210 145 300 125 C420 105 700 102 830 102"/>
   <path class="line" style="stroke:${colors.gold}" d="M90 300 C160 215 240 115 360 92 C500 70 720 68 830 68"/>
   <text class="small" x="465" y="214">light stops limiting once carbon dioxide runs short</text>
   <circle cx="470" cy="240" r="7" fill="${colors.blue}"/>
   <text class="small" x="486" y="245">low carbon dioxide: the plateau comes early</text>
   <circle cx="470" cy="264" r="7" fill="${colors.green}"/>
   <text class="small" x="486" y="269">more carbon dioxide lifts the plateau</text>
   <circle cx="470" cy="288" r="7" fill="${colors.gold}"/>
   <text class="small" x="486" y="293">plus a warmer temperature, it lifts again</text>
   <text class="small" x="465" y="332" text-anchor="middle">light intensity</text>
   <text class="small" x="42" y="190" transform="translate(0 0) rotate(-90 42 190)" text-anchor="middle">rate of photosynthesis</text>`,
  900,
  384,
);

const vascularComparison = svgDiagram(
  "Xylem and Phloem Compared",
  tileRow(
    [
      {
        title: "Xylem",
        body: "carries water plus\nmineral ions\none way: root to leaf\ndead hollow tubes\nlignin strengthens walls\npulled up by transpiration",
        cls: "blue",
      },
      {
        title: "Phloem",
        body: "carries sucrose plus\namino acids\nsource to sink, both ways\nliving sieve tubes\nsieve plates join the cells\nmoved using respiratory energy",
        cls: "purple",
      },
    ],
    78,
    { x: 24, w: 852, h: 226, gap: 16 },
  ) +
    labelledRows(
      [
        ["Source", "a leaf making sugar"],
        ["Sink", "root, bud, fruit or storage organ"],
      ],
      24,
      330,
      28,
    ),
  900,
  372,
);

const plantNutritionChapter: Chapter = {
  number: 6,
  title: "Plant Nutrition",
  intro:
    "A leaf is a factory: it takes in carbon dioxide and water, uses light energy to build glucose, and ships the products away through two different sets of tubes.\n\nThis chapter covers the **photosynthesis equation**, the **structure of the leaf** that makes the reaction possible, the **limiting factors** that cap its rate.\n\nIt also covers the **xylem and phloem** that transport the materials, and the **mineral ions** a plant needs from the soil.",
  subheadings: [
    {
      title: "Photosynthesis and the Equations You Must Write",
      body: `**Photosynthesis** means 'putting together with light': green plants use light energy to build glucose from carbon dioxide and water, releasing oxygen.\n\nIt is **endothermic**, so energy is absorbed and stored in the bonds of the glucose.

### The two forms of the equation

| Form | Written as |
| --- | --- |
| Word equation | carbon dioxide + water → glucose + oxygen |
| Balanced symbol equation | 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ |`,
      figure: plantNutritionIllustrations,
      groups: [
        {
          subTitle: "Where each raw material comes from",
          bullets: [
            "**Carbon dioxide:** from the air, diffusing in through the stomata and then across the moist surfaces of the mesophyll cells.",
            "**Water:** absorbed from the soil by root hair cells and delivered to the leaf through the xylem in the veins.",
            "**Light energy:** absorbed by the green pigment chlorophyll, which sits inside the chloroplasts.",
            "**Light energy** is written over the arrow as the condition; chlorophyll is what absorbs it.",
            "Chlorophyll takes in red and blue light and reflects green, so leaves look green.",
            "The **chloroplast** is the organelle where photosynthesis happens; it holds the chlorophyll.",
          ],
        },
        {
          subTitle: "Where the products go",
          bullets: [
            "**Glucose** is used immediately in respiration, converted into **starch** for storage (starch is insoluble, so it does not disturb the water balance of the cell), changed into **sucrose** for transport in the phloem, and used to build **cellulose** for new cell walls.",
            "Glucose combined with **nitrate ions** from the soil supplies the amino acids needed to make proteins for growth.",
            "Some glucose is converted into lipids (oils) stored in seeds, such as sunflower and coconut.",
            "**Oxygen** diffuses out of the leaf through the stomata, and is the gas that aerobic life depends on.",
            "The oxygen given off comes from the splitting of **water**, not from carbon dioxide.",
            "Extra glucose is stored as **starch grains** inside the chloroplast; iodine turns them blue-black.",
            "**Sucrose** is the transport sugar because free glucose is too reactive to carry in bulk.",
          ],
        },
        {
          subTitle: "The two stages, and respiration alongside",
          bullets: [
            "**Light-dependent stage:** in the grana, light splits water (**photolysis**) and releases oxygen.",
            "**Light-independent stage:** in the stroma, carbon dioxide is built up using the energy stored earlier.",
            "**Respiration** runs day and night and uses some glucose; photosynthesis only runs in light.",
            "At night a plant only respires, taking in oxygen and giving out carbon dioxide.",
          ],
        },
      ],
      examinerTips: [
        "Write both forms of the equation when a question says 'state the word equation and the symbol equation'. Marks are split between them.",
        "Check the balancing: six carbons in, six carbons out; six molecules of oxygen gas on each side.",
        "Name chlorophyll as the substance that absorbs the light energy, and the chloroplast as the structure where photosynthesis happens. Both terms often carry separate marks.",
        "For the 'glucose to starch' idea, give the reason: starch is insoluble and therefore does not affect osmosis in the cell.",
      ],
      commonMistakes: [
        "Writing respiration's products, carbon dioxide and water, as the products of photosynthesis.",
        "Leaving out light energy or chlorophyll from the equation entirely.",
        "Claiming plants 'only photosynthesise' and 'only respire at night'. Respiration runs day and night; photosynthesis needs light.",
        "Saying oxygen is produced by the roots. It leaves from the stomata of the leaf.",
      ],
      recap: [
        "State the word equation for photosynthesis. [2]",
        "Write a balanced symbol equation for photosynthesis. [3]",
        "Name the pigment that absorbs light energy and the organelle in which it is found. [2]",
        "Give three ways in which a plant uses the glucose it produces. [3]",
        "Explain why photosynthesis is described as an endothermic reaction. [2]",
      ],
    },
    {
      title: "Leaf Structure and How Each Layer Helps",
      body: `### Reading the leaf as a cross-section\nA broad, thin leaf has a large surface area exposed to light, and its layers are arranged to move gases and water to and from the cells that photosynthesise.

${leafCrossSection}`,
      groups: [
        {
          subTitle: "Layer by layer",
          bullets: [
            "**Waxy cuticle:** a waterproof film on the upper surface that reduces water loss by evaporation.",
            "**Upper epidermis:** a transparent, mostly colourless layer; light passes through it to the cells below.",
            "**Palisade mesophyll:** elongated cells packed close together just under the upper surface, containing the largest number of chloroplasts, so they are the main site of photosynthesis.",
            "**Spongy mesophyll:** loosely arranged, irregular cells with large air spaces between them; gases diffuse through these spaces, and the moist walls let carbon dioxide dissolve before entering cells. Some chloroplasts are present.",
            "**Lower epidermis and stomata:** pores, mostly on the underside, each bordered by a pair of guard cells; carbon dioxide enters and oxygen and water vapour leave through them.",
            "**Veins (xylem and phloem) in the mesophyll:** xylem brings water and mineral ions and phloem removes the sugars made; the veins also brace the blade flat so it faces the light.",
            "**Guard cells** are the only epidermal cells that contain chloroplasts.",
            "**Mesophyll** is the photosynthetic tissue lying between the two epidermal layers.",
            "**Phloem** in the vein exports the sucrose the leaf has just made.",
          ],
        },
        {
          subTitle: "How guard cells open and close a stoma",
          bullets: [
            "In bright conditions guard cells take in water by osmosis, become **turgid**, and bow outward, so the pore opens.",
            "When they lose water they become **flaccid** and the pore closes.",
            "This is why stomata are usually open by day for photosynthesis and largely closed at night, when water loss would serve no purpose.",
            "Guard cells pump **potassium ions** in; water follows by osmosis and the pore opens.",
            "In darkness, or in water shortage, potassium leaves and the stoma closes.",
            "Closed stomata cut off the carbon dioxide supply and slow photosynthesis.",
          ],
        },
        {
          subTitle: "Adaptation language that earns the marks",
          bullets: [
            "The **broad, thin blade** gives a large surface area for light absorption and a short diffusion distance for carbon dioxide.",
            "**Numerous chloroplasts, concentrated near the top** position the pigment where the light is strongest.",
            "**Air spaces in the spongy layer** allow rapid diffusion of gases between the mesophyll cells and the stomata.",
            "**Many stomata** shorten the path for gas exchange, while their waxy lining and position keep water loss in check.",
            "**Sunken stomata** and a **thick cuticle** mark a leaf adapted to dry air.",
            "A **rolled leaf** traps moist air and lowers the water-loss gradient.",
            "A **thin leaf** keeps the diffusion path from stomata to palisade cells short.",
          ],
        },
      ],
      examinerTips: [
        "Pair every structure with its function in one sentence: 'the palisade cells contain many chloroplasts, so they absorb the most light energy and carry out most of the photosynthesis'.",
        "Name the layer rather than pointing at it vaguely: palisade mesophyll and spongy mesophyll are the terms examiners expect.",
        "When a question asks about a leaf adapted to a dry habitat, look for fewer stomata, stomata in pits, a thicker cuticle, and a rolled or reduced surface.",
        "Use the words **turgid** and **flaccid** for the guard cells; each often carries its own mark.",
      ],
      commonMistakes: [
        "Saying the upper epidermis is full of chloroplasts. It is transparent because light must pass through it.",
        "Describing the cuticle as a gas-exchange surface. It is a waterproof barrier; gases move through stomata.",
        "Claiming that water is the raw material that enters from the air; water comes from the soil via the xylem.",
        "Placing most stomata on the upper surface; in land plants they are usually more numerous below.",
      ],
      recap: [
        "Name the layer of the leaf in which most photosynthesis takes place and explain why. [2]",
        "State two ways in which the spongy mesophyll helps gas exchange. [2]",
        "Explain how guard cells cause a stoma to open. [3]",
        "State the function of the waxy cuticle and of the veins in a leaf. [2]",
      ],
    },
    {
      title: "Light, Carbon Dioxide and Temperature as Limiting Factors",
      body: `A **limiting factor** is one that, being in short supply, holds the rate of a reaction below its possible maximum.\n\nThe three always examined are **light intensity**, **carbon dioxide concentration** and **temperature**; whichever is scarcest limits.

${limitingCurves}`,
      groups: [
        {
          subTitle: "What each factor does and how its curve behaves",
          bullets: [
            "**Light intensity:** more light means more energy absorbed by chlorophyll, so the rate climbs.",
            "Beyond a point, adding light does nothing because the carbon dioxide available can no longer supply the reactions fast enough — the graph flattens into a plateau.",
            "**Carbon dioxide concentration:** rising carbon dioxide lifts both the plateau and the gradient, because more raw material reaches the palisade cells. Too little carbon dioxide stops photosynthesis even in full light.",
            "**Temperature:** the reactions of photosynthesis are enzyme-controlled, so the rate rises with temperature and then falls once the enzymes are denatured.",
            "At low temperature, light and carbon dioxide can both be plentiful and the rate is still slow.",
            "Read each curve: if more light raises the rate, light is limiting at that point.",
            "If more light does nothing but more carbon dioxide helps, carbon dioxide is now the limiter.",
            "The temperature curve peaks at the optimum, then drops steeply as enzymes denature.",
            "A **plateau** means another factor now limits, not that the reaction has stopped.",
          ],
        },
        {
          subTitle: "The compensation point",
          bullets: [
            "At one light intensity the rate of photosynthesis equals the rate of respiration.",
            "This is the **compensation point**: the carbon dioxide taken in matches the carbon dioxide given out, so there is no net exchange of gases and no net gain of sugar.",
            "Below the compensation point a plant uses more glucose than it makes, which is why a plant kept in dim light slowly starves.",
            "Above it, uptake of carbon dioxide exceeds release and sugar builds up.",
            "At dawn light first reaches the compensation point before the day's net gain begins.",
            "Deep shade keeps a plant below its compensation point, so it loses mass.",
          ],
        },
        {
          subTitle: "How growers use all three",
          bullets: [
            "Glasshouses raise carbon dioxide, for example by paraffin heaters or by releasing carbon dioxide from cylinders or from burning fuel.",
            "Supplementary lighting extends the day, and thermostats hold the temperature near the optimum while ventilation avoids overheating.",
            "Isolated bags of carbon dioxide over a leaf, or the use of a hydrogencarbonate solution as a controlled source of the gas, are the standard classroom demonstrations.",
            "Paraffin heaters give warmth and carbon dioxide together, but they raise cost.",
            "Venting a glasshouse stops humidity rising so high that the stomata shut.",
            "**Hydroponics** supply ions in solution, letting the grower control every factor.",
          ],
        },
      ],
      examinerTips: [
        "Use the words 'limiting factor' and say which one is limiting at the specific point on the graph you were asked about.",
        "The plateau is a genuine feature of the graph. Saying 'the rate stayed the same because another factor now limited it' is a full explanation.",
        "For water: a shortage of water makes stomata close, which limits carbon dioxide supply — that is the route by which water indirectly limits the rate.",
        "Compare curves by their plateau height and by their initial gradient; mention both when both are asked for.",
      ],
      commonMistakes: [
        "Naming only one factor when the question asks for three.",
        "Saying that photosynthesis stops at the plateau rather than slowing to a constant rate.",
        "Attributing the fall at high temperature to a lack of light; at high temperature the enzymes are denatured.",
        "Quoting a figure from a graph without its units, such as a rate written with no 'per minute'.",
      ],
      recap: [
        "Define limiting factor. [1]",
        "Name the three limiting factors of photosynthesis. [3]",
        "Explain the shape of a rate-against-light-intensity curve, including why it plateaus. [4]",
        "Describe what happens to gas exchange at the compensation point. [2]",
        "Explain why a hot, dry day can slow photosynthesis even in bright light. [3]",
      ],
    },
    {
      title: "Testing a Leaf for Starch",
      figure: starchTestArt,
      body: `Starch in a leaf is the visible evidence that photosynthesis has happened, so the iodine test is the standard practical for showing that light, carbon dioxide and chlorophyll are all needed.`,
      groups: [
        {
          subTitle: "Step 1: remove the starch already there",
          bullets: [
            "Keep the plant in the **dark for 24 to 48 hours** beforehand. This **destarches** the leaves because the plant respires away its stored starch and transports no new sugar without light.",
            "Without this step, starch found in the leaf afterwards proves nothing about the treatment you applied.",
            "Darkness is used because no new glucose can be made without light.",
            "The plant burns off its starch reserves in respiration while it waits in the dark.",
            "Destarching is the step most answers forget, yet it is usually a marked step.",
          ],
        },
        {
          subTitle: "Step 2: set up the comparison on the same leaf",
          bullets: [
            "**Light:** cover part of a leaf with black paper or foil, leaving the rest exposed; both halves are then exposed to the same conditions except for light.",
            "**Chlorophyll:** use a **variegated leaf**, which has green patches and white patches on one blade.",
            "**Carbon dioxide:** enclose one leaf in a flask or bag containing **soda lime or potassium hydroxide solution**, which absorbs carbon dioxide from the air inside, and keep a second leaf outside the flask as the control.",
            "Leave the plant in bright light for several hours so the exposed, green, carbon-dioxide-fed parts can photosynthesise.",
            "**Soda lime** or potassium hydroxide removes carbon dioxide from the sealed air.",
            "The uncovered, green half acts as the **control** for the light test.",
            "Only one factor differs between the tested regions, so the comparison is fair.",
          ],
        },
        {
          subTitle: "Step 3: test the leaf",
          bullets: [
            "Boil the leaf **in water** for a few minutes: this kills the cells, stops all enzyme activity and softens the leaf.",
            "Then boil the leaf **in ethanol**, using a water-bath and with no naked flame nearby.",
            "The ethanol dissolves out the chlorophyll, so the leaf turns pale and any colour change with iodine can be seen.",
            "Rinse the brittle, decolourised leaf in warm water to soften it and wash off the ethanol.",
            "Place it on a white tile and add **iodine solution**, then read the result.",
            "Ethanol is **highly flammable**, so it is warmed in a water-bath, never over a flame.",
            "Boiling in water first **kills the cells** and stops enzymes breaking down starch.",
            "Rinsing in warm water re-softens a leaf that has gone hard in the ethanol.",
          ],
        },
        {
          subTitle: "Step 4: read and interpret the colours",
          bullets: [
            "**Blue-black** means starch is present, so photosynthesis occurred in that region.",
            "**Brown or yellow-orange** means no starch is present, so photosynthesis did not occur.",
            "Expected result: only the uncovered, green parts of the leaf that had carbon dioxide turn blue-black.",
            "Conclusion for each factor: starch is made only where light, chlorophyll and carbon dioxide are all available, so each of them is necessary for photosynthesis.",
            "White patches of a variegated leaf stay brown, since they hold no chlorophyll.",
            "A leaf from the carbon-dioxide-free flask stays brown, so carbon dioxide is needed.",
            "State the region **and** its colour, then the conclusion drawn from it.",
          ],
        },
      ],
      examinerTips: [
        "Sequence matters: destarch, treat, expose to light, decolourise with ethanol, then iodine. Examiners award marks for the order as well as the steps.",
        "Always give the reason for the ethanol step — removing chlorophyll so the colour change can be seen clearly — and the safety reason for the water-bath.",
        "Name the control in the carbon dioxide experiment as the leaf left in ordinary air.",
        "Write the colour as **blue-black**, not just 'blue'; the exact wording carries the mark.",
      ],
      commonMistakes: [
        "Skipping the destarching step and then concluding that the result proves nothing.",
        "Heating ethanol directly over a burner, which is the answer that loses the safety mark.",
        "Reporting a positive result as simply 'it turned blue'; the expected colour is blue-black.",
        "Testing for starch with Benedict's solution, or for sugar with iodine.",
      ],
      recap: [
        "Describe how a leaf is tested for starch. [4]",
        "State why the plant is kept in the dark before the experiment. [2]",
        "Explain why the leaf is boiled in ethanol and why a water-bath is used. [3]",
        "A variegated leaf turns blue-black only in its green areas. What does this show? [2]",
        "Explain the role of potassium hydroxide in a photosynthesis experiment. [2]",
      ],
    },
    {
      title: "Transport in Xylem and Phloem",
      body: `### The transpiration stream
Water enters root hair cells by **osmosis**, passes into the **xylem**, and rises as a continuous column pulled by evaporation from the leaf. The loss of water vapour from the plant surface through the stomata is **transpiration**.

${vascularComparison}

### Translocation in the phloem
Sucrose made in a leaf is loaded into the **phloem** and moves from a **source** to a **sink**;\n\nThis is **translocation**. Unlike the xylem stream, phloem flow can go in either direction.`,
      groups: [
        {
          subTitle: "Structural differences that explain the differences in function",
          bullets: [
            "Xylem cells are **dead at maturity**, with no cytoplasm and no cross-walls, leaving open tubes; their walls are strengthened with **lignin**, which is why xylem also gives the plant mechanical support.",
            "Phloem consists of **living** sieve tube cells joined end to end by **sieve plates**; the cells have lost their nuclei and depend on neighbouring companion cells.",
            "Water loss is not the same as transpiration: transpiration is the evaporation of water from the surfaces of the plant and its escape through stomata.",
            "The tension–cohesion description is the accepted explanation for upward movement in xylem; a continuous column under tension rises as far as the tallest leaf.",
            "**Cohesion** between water molecules keeps the xylem column unbroken under tension.",
            "**Root pressure** can push water a short way upward, mostly at night.",
            "A **sink** is root tip, shoot tip, bud, fruit or tuber; a **source** is a leaf making sugar.",
            "Phloem sap carries **amino acids** as well as sucrose.",
            "Mineral ions travel dissolved in the xylem water and stay behind in the plant.",
          ],
        },
        {
          subTitle: "The four factors that change the rate of transpiration",
          bullets: [
            "**Higher temperature:** water evaporates faster, so the rate rises.",
            "**Lower humidity:** a steeper concentration gradient between the moist air inside the leaf and the drier air outside speeds the loss.",
            "**More air movement:** a moving breeze sweeps away the humid layer of air around the leaf, keeping the gradient steep.",
            "**Greater light intensity:** stomata open, so water vapour escapes more readily.",
            "Still, humid air lets a moist layer build up around the leaf and slows the loss.",
            "A water shortage makes stomata close and the plant wilt, cutting transpiration.",
            "The gradient, not the water supply alone, sets the rate of evaporation.",
          ],
        },
        {
          subTitle: "Measuring it with a potometer",
          bullets: [
            "A potometer tracks the movement of an air bead along a capillary tube as the shoot takes up water.",
            "The volume taken up is used as an **estimate** of the water lost by transpiration.",
            "Fit the shoot **under water** and cut the stem under water, so no air bubble enters the xylem and breaks the column.",
            "Seal all joints, and place a leafless shoot alongside as a control to show how much of the uptake is not due to transpiration.",
            "Only one factor is changed at a time: for humidity, use a closed chamber with a known amount of water.",
            "For air movement, use a fan; for temperature, use a water-bath; for light, use a lamp at set distances.",
            "A potometer records **water uptake**, which only estimates the water lost.",
            "A **counting-bubble** or **mass** potometer are the usual classroom forms.",
            "Reset the air bead before each reading so the same distance is measured.",
          ],
        },
      ],
      examinerTips: [
        "State the substance each tissue transports, the direction of travel, and whether the cells are alive or dead. Those three points are usually the whole mark scheme.",
        "Explain movement in xylem with 'evaporation from the leaf pulls a continuous water column upward, helped by the cohesion between water molecules'.",
        "For translocation, say the process needs energy released by respiration, and note that a respiratory poison or a low oxygen supply slows it.",
        "Compare the two tissues in a table-like sentence rather than in two vague paragraphs; the marks are allocated per comparison.",
      ],
      commonMistakes: [
        "Saying xylem transports sucrose, or phloem transports water.",
        "Claiming transpiration is 'evaporation from the soil' — that is evaporation, not transpiration from a plant.",
        "Thinking water is pumped up the stem by the leaves pushing or the heart of the plant pulling; there is no pump, and the tension comes from evaporation.",
        "Describing potometer readings as a direct measure of water lost; it measures water taken up.",
      ],
      recap: [
        "State two differences between the structure of xylem and of phloem. [4]",
        "Describe the path of a water molecule from the soil to the air outside a leaf. [5]",
        "Explain how transpiration helps pull water up a stem. [3]",
        "Name two factors that increase the rate of transpiration and explain each. [4]",
        "Explain why translocation slows when a respiratory poison is applied to a phloem sieve tube. [3]",
      ],
    },
    {
      title: "Mineral Ions and Deficiency Symptoms",
      figure: deficiencyArt,
      body: `Plants need the glucose they make, and they also need **mineral ions** from the soil water to build the rest of their molecules.\n\nIons are absorbed by **root hair cells**; because their concentration in soil water is often lower than in the cell sap, the uptake is largely by **active transport**, using energy from respiration.`,
      groups: [
        {
          subTitle: "The four ions you are expected to know",
          bullets: [
            "**Nitrate ions:** needed to make amino acids, and therefore proteins, for growth.",
            "A shortage gives stunted growth and yellowing of the older leaves first, because the plant moves what little it has away from them.",
            "**Magnesium ions:** every chlorophyll molecule has a magnesium atom at its centre. Without magnesium, chlorophyll cannot be produced, so the leaves lose their green colour (**chlorosis**) and photosynthesis slows.",
            "**Phosphate ions:** needed for the processes that release energy and for making the molecules of growth; a shortage stunts the plant, gives poor root development and reduces flowers and seeds.",
            "**Potassium ions:** help the enzymes of photosynthesis and respiration work and assist the movement of sugars; a shortage weakens the plant, with yellowing and dying leaf edges and poor crops.",
            "Ions must be **dissolved** in soil water before a root can absorb them.",
            "**Active transport** moves ions uphill against the gradient, so it needs respiration energy.",
            "A **root hair** greatly increases the surface area for absorbing ions and water.",
          ],
        },
        {
          subTitle: "Replacing what the soil has lost",
          bullets: [
            "Growing the same crop repeatedly removes particular ions faster than they are replaced, so yields fall.",
            "**Fertilisers** restore them; a complete fertiliser is labelled with its nitrogen, phosphate and potassium content, and the same three letters NPK appear on garden products.",
            "Organic matter such as manure or compost is broken down by **decomposers**, which release the ions back into the soil water where roots can absorb them.",
            "Crop rotation, including legumes that harbour nitrogen-fixing bacteria in their root nodules, helps rebuild nitrogen compounds in the soil.",
            "Excess fertiliser **leaches** into rivers and can trigger algal blooms.",
            "**Nitrate** is very soluble, so it washes out of the soil easily.",
            "Legumes **replenish** soil nitrogen because their bacteria fix nitrogen into the plant.",
          ],
        },
      ],
      examinerTips: [
        "Always link the ion to the molecule it is used to build: nitrate for amino acids and proteins, magnesium for chlorophyll.",
        "Chlorosis is the term for yellowing caused by a lack of chlorophyll; use it, and add the reason the plant photosynthesises less well.",
        "If the question gives a table of four treated plants and their growth, identify the deficient treatment by comparing height, leaf colour and yield against the complete-fertiliser control.",
        "State ion, molecule and symptom in one linked sentence, because each link is scored as a separate mark.",
      ],
      commonMistakes: [
        "Saying a plant takes in 'nitrogen gas' from the air through its leaves; the useful route is nitrate ions from the soil into the roots.",
        "Confusing the symptom of nitrate shortage with that of magnesium shortage: both yellow, but nitrate limits growth overall while magnesium specifically stops chlorophyll formation.",
        "Naming mineral ions as a raw material of photosynthesis in place of water and carbon dioxide.",
        "Describing fertiliser as food for the plant; the plant makes its own food, and the fertiliser supplies ions.",
      ],
      recap: [
        "State which mineral ion is needed to make chlorophyll and describe the symptom of its shortage. [3]",
        "Explain why a nitrate deficiency stunts a plant's growth. [3]",
        "Describe how mineral ions enter a root hair cell and why the process needs energy. [3]",
        "Give two ways a farmer can restore minerals lost from soil. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_6: Chapter = plantNutritionChapter;
