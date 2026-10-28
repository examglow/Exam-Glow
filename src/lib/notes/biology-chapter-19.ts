import type { Chapter } from "./types";
import { svgDiagram, box, tileRow, labelledRows } from "./diagram-kit";

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

const ecosystemArt = artPanel([
  {
    src: "ch19-pond-ecosystem.webp",
    alt: "Illustration of a pond with plants, fish, insects and other animals",
    caption: "A pond ecosystem",
  },
  {
    src: "ch19-food-chain.webp",
    alt: "Illustration of a simple food chain from a plant to a predator",
    caption: "One food chain",
  },
]);

const carbonCycleArt = artPanel([
  {
    src: "ch19-carbon-cycle.webp",
    alt: "A ring of sun, leaf, animal, fungus, coal and factory joined into one loop",
    caption: "The carbon cycle as a single loop",
  },
]);

const pyramidArt = artPanel([
  {
    src: "ch19-energy-pyramid.webp",
    alt: "A four-level ecological pyramid with grass, a rabbit, a snake and a bird of prey",
    caption: "Biomass falls at each trophic level",
  },
]);

/* ------------------------------------------------------------------ *
 * Diagrams
 * ------------------------------------------------------------------ */

const hierarchyDiagram = svgDiagram(
  "Levels of organisation",
  `<text class="title" x="450" y="30" text-anchor="middle">From one organism to the whole living planet</text>
   ${box(24, 66, 156, 74, "Organism", "main")}
   ${box(196, 66, 156, 74, "Population", "blue")}
   ${box(368, 66, 156, 74, "Community", "purple")}
   ${box(540, 66, 156, 74, "Ecosystem", "gold")}
   ${box(712, 66, 164, 74, "Biosphere", "pink")}
   <path class="arrow" d="M181 103h14m157 0h14m157 0h14m157 0h14"/>
   ${labelledRows(
     [
       ["Organism", "one individual"],
       ["Population", "one species in one area"],
       ["Community", "all the populations living there"],
       ["Ecosystem", "the community plus its abiotic environment"],
     ],
     40,
     192,
     34,
   )}
   <text class="small" x="450" y="322" text-anchor="middle">Each level adds one more layer of interaction.</text>`,
  900,
  344,
);

const trophicDiagram = svgDiagram(
  "A food chain and its trophic levels",
  `<text class="title" x="450" y="30" text-anchor="middle">Arrows point in the direction the energy is going</text>
   ${box(30, 62, 188, 78, "Producer", "main")}
   ${box(248, 62, 188, 78, "Primary consumer", "blue")}
   ${box(466, 62, 188, 78, "Secondary consumer", "gold")}
   ${box(684, 62, 186, 78, "Tertiary consumer", "pink")}
   <path class="arrow" d="M219 101h28m189 0h28m189 0h28"/>
   ${tileRow(
     [
       {
         title: "Grass / algae",
         body: "photosynthesises,\nmakes its own food",
         cls: "main",
       },
       {
         title: "Grasshopper",
         body: "herbivore,\neats the producer",
         cls: "blue",
       },
       {
         title: "Lizard / frog",
         body: "carnivore,\neats the herbivore",
         cls: "gold",
       },
       {
         title: "Heron",
         body: "top predator,\nno natural enemies",
         cls: "pink",
       },
     ],
     168,
     { x: 30, w: 840, h: 118, gap: 12 },
   )}
   <text class="accent" x="450" y="322" text-anchor="middle">Decomposers break down dead matter and wastes from every level</text>`,
  900,
  344,
);

const carbonDiagram = svgDiagram(
  "The carbon cycle",
  `<text class="title" x="450" y="28" text-anchor="middle">Carbon moves between organisms and the atmosphere</text>
   ${box(348, 52, 204, 52, "Producers", "main")}
   ${box(666, 168, 194, 52, "Consumers", "gold")}
   ${box(348, 296, 204, 52, "Decomposers", "purple")}
   ${box(40, 168, 190, 52, "Fossil fuels", "pink")}
   ${box(348, 168, 204, 52, "CO₂ pool", "blue")}
   <path class="arrow" d="M392 104v58m116 0v-58"/>
   <text class="small" x="300" y="132">photosynthesis</text>
   <text class="small" x="516" y="132">respiration</text>
   <path class="arrow" d="M652 200h-94"/>
   <text class="small" x="566" y="222">respiration</text>
   <path class="arrow" d="M231 194h111"/>
   <text class="small" x="188" y="150">combustion</text>
   <path class="arrow" d="M450 290v-64"/>
   <text class="small" x="466" y="262">decay</text>
   <path class="arrow" d="M555 190h100m-40 30v60"/>
   <text class="small" x="600" y="182">feeding</text>
   <path class="arrow" d="M488 107q120 30 168 60"/>
   <text class="small" x="612" y="112">death + waste</text>
   <text class="accent" x="450" y="374" text-anchor="middle">Burning fossil fuels returns carbon fixed millions of years ago</text>`,
  900,
  392,
);

/* ------------------------------------------------------------------ *
 * Chapter
 * ------------------------------------------------------------------ */

const chapterNineteen: Chapter = {
  number: 19,
  title: "Organisms and Their Environment",
  intro: `An ecosystem is a community of living organisms interacting with the non-living conditions around them, and the whole system runs on a one-way flow of energy and a set of cycling materials.\n\nThis chapter sets out the levels of organisation, the feeding roles of producers, consumers and decomposers, how trophic levels and energy transfer work, the carbon and water cycles, and the field techniques used to sample a habitat.`,
  subheadings: [
    {
      title: "Ecosystem Basics",
      body: `### The vocabulary of an ecosystem\nEcology is studied at a ladder of scales, from a single individual up to the whole planet.\n\nAn ecosystem is always the **living plus the non-living**, never the organisms alone.\n\n### Biotic meets abiotic\n\nEvery distribution in a habitat is shaped by both kinds of factor at once.\n\nA tree may find the climate right but the soil pH wrong, and then it cannot establish.\n\n### Scale by scale\nOne individual is an organism; all the individuals of one species form a population; all the populations living there form a community; the community plus its physical environment forms an ecosystem.\n\n${hierarchyDiagram}`,
      figure: ecosystemArt,
      groups: [
        {
          bullets: [
            "**Habitat:** the place where an organism lives — the address, not the job.",
            "**Niche:** the role an organism plays in its habitat: what it eats, what eats it, when it is active, the conditions it needs.",
            "**Biotic factors:** the living influences — food availability, predators, competitors, pathogens, pollinators.",
            "**Abiotic factors:** the non-living influences — light intensity, temperature, water, carbon dioxide concentration, pH, wind, soil minerals.",
            "Two species with the **same niche** in the same habitat compete; one is usually driven out.",
          ],
        },
        {
          subTitle: "Definitions that pay",
          bullets: [
            "**Population:** all the individuals of one species living in the same habitat.",
            "**Community:** all the populations of different species living in the same habitat.",
            "**Ecosystem:** a community together with the non-living conditions it experiences.",
            "**Biosphere:** all the ecosystems of the planet taken as a whole.",
          ],
        },
        {
          subTitle: "Interactions in a habitat",
          bullets: [
            "**Interdependence:** species relying on each other for food, shelter, pollination and seed dispersal.",
            "**Competition:** two species using the same limited resource both doing worse, and one usually worse than the other.",
            "**Predation:** one organism eating another, which holds both populations in check.",
            "**Decomposition:** the recycling role that returns minerals from dead matter to the producers.",
          ],
        },
      ],
      examinerTips: [
        "Sort any factor into biotic or abiotic before using it — 'rainfall' and 'temperature' are abiotic, 'disease' and 'grazing' are biotic.",
        "Define a niche in terms of the organism's interactions, not just the place it lives.",
        "Write the ecosystem equation in your answer: community plus abiotic environment equals ecosystem.",
        "For 'name two abiotic factors', pick ones you can measure: light intensity, temperature, soil pH, moisture content.",
      ],
      commonMistakes: [
        "Confusing habitat with niche.",
        "Using 'community' to mean one species — a community is all the populations present.",
        "Calling an ecosystem only the animals; the producers, decomposers and physical environment are part of it.",
        "Listing food as an abiotic factor because it is discussed beside chemicals; food is other organisms, so it is biotic.",
      ],
      recap: [
        "Define population, community and ecosystem. [3]",
        "Classify each of the following as biotic or abiotic: temperature, predators, light intensity, competition. [4]",
        "State the difference between a habitat and a niche. [2]",
        "Explain, using an example, how biotic and abiotic factors together decide whether a species can live in a habitat. [4]",
      ],
    },
    {
      title: "Producers, Consumers and Decomposers",
      body: `### Three jobs that keep an ecosystem running\nEvery ecosystem needs something to bring energy in, something to pass it along, and something to recycle the material.\n\n### Producers set the ceiling\n\nProducers convert light energy into the chemical energy of organic molecules, and every other level feeds on that output directly or indirectly.\n\nHow much the producers fix limits the biomass of all the levels above them.\n\n### Decomposers close the loop\n\nConsumers cannot reach the energy locked inside dead bodies and waste, but decomposers can.\n\nTheir enzymes digest the material outside their bodies, releasing carbon dioxide, water and mineral ions that plant roots reabsorb.`,
      groups: [
        {
          bullets: [
            "**Producers (autotrophs):** organisms that make organic molecules from simple inorganic ones. Green plants, algae and some bacteria fix carbon dioxide into glucose by photosynthesis; they are the only entry point for energy.",
            "**Consumers (heterotrophs):** organisms that feed on other organisms. **Herbivores** eat producers, **carnivores** eat other animals, and **omnivores** eat both.",
            "**Decomposers (saprotrophs):** bacteria and fungi that secrete digestive enzymes **outside** their bodies onto dead organic matter and absorb the soluble products, releasing carbon dioxide and mineral ions.",
            "**Detritivores** such as earthworms and woodlice first break dead material into smaller pieces, which increases the surface area for the decomposers to act on.",
            "Without decomposers, nutrients would stay locked in dead bodies and waste, and producers would run out of the minerals they need.",
          ],
        },
        {
          subTitle: "Feeding roles",
          bullets: [
            "**Producer:** an organism that makes its own organic molecules from carbon dioxide and water.",
            "**Primary consumer:** the first animal in a chain — always a herbivore.",
            "**Secondary consumer:** a carnivore that eats herbivores.",
            "**Omnivore:** an animal feeding on both producers and other animals.",
          ],
        },
        {
          subTitle: "Definitions that pay",
          bullets: [
            "**Autotroph:** an organism that builds its own organic molecules from inorganic raw materials.",
            "**Heterotroph:** an organism that must feed on other organisms to obtain organic molecules.",
            "**Saprotrophic nutrition:** digestion outside the body followed by absorption of the soluble products.",
            "**Mineral ions:** the nutrient salts released by decomposition and taken up again by roots.",
          ],
        },
      ],
      examinerTips: [
        "Say decomposers digest **extracellularly** by secreting enzymes — that wording distinguishes them from animals that ingest food.",
        "Give a named example with each role: a green plant, a cow, a fungus.",
        "Keep energy flow and nutrient recycling in separate sentences; the pair of ideas appears in almost every mark scheme.",
        "When asked why producers are essential, say they are the only organisms converting light energy into chemicals the rest of the ecosystem can use.",
      ],
      commonMistakes: [
        "Classifying a fungus as a producer because it grows in the soil.",
        "Treating detritivores and decomposers as identical; they differ in whether they ingest or secrete.",
        "Saying decomposers obtain energy from sunlight; their energy comes from dead organic matter.",
        "Confusing absorption with ingestion — a saprotroph absorbs, an animal ingests.",
      ],
      recap: [
        "State what all producers have in common in the way they obtain carbon. [2]",
        "Explain the role of decomposers in an ecosystem. [3]",
        "Give one difference between a decomposer and a detritivore. [2]",
        "Explain why an ecosystem would collapse without decomposers. [3]",
      ],
    },
    {
      title: "Food Chains, Webs and Trophic Levels",
      body: `### Reading the notation\n\nA **food chain** shows what eats what, and a **trophic level** is the position an organism occupies in that chain.\n\nThe arrow is the part students get wrong most often: it means 'is eaten by' and points in the direction the energy travels.\n\n### Energy direction, not eating direction\n\nBecause each arrow shows where the energy goes, it points from the organism being eaten towards the eater.\n\nThis single detail is the most commonly lost mark in the whole topic.\n\n### Stability in a web\nA food web has redundancy, so a predator with three prey species does not starve when one prey fails. That is why diverse ecosystems are more stable than simple chains.\n\n${trophicDiagram}`,
      groups: [
        {
          bullets: [
            "**Level 1:** producer. **Level 2:** primary consumer. **Level 3:** secondary consumer. **Level 4:** tertiary consumer.",
            "Arrows represent the **transfer of energy** from one organism to the next.",
            "A **food web** is a network of interconnected food chains and is the realistic picture, because most animals eat several species.",
            "A food web shows **interdependence**: remove one species and the effect spreads through several chains.",
            "Trophic level and consumer level are not the same count: a secondary consumer sits at the third trophic level.",
          ],
        },
        {
          subTitle: "Building a chain correctly",
          bullets: [
            "Start with a producer, not with the sun.",
            "Use single-headed arrows pointing towards the animal that does the eating.",
            "Name each organism or group, and label each trophic level.",
          ],
        },
        {
          subTitle: "Exam details",
          bullets: [
            "**Producer:** always the first trophic level; the sun is never a link.",
            "**Herbivore:** the primary consumer, feeding directly on producers.",
            "**Apex predator:** the top consumer of a chain, with no natural enemies.",
            "**Numbering rule:** the trophic level number is one more than the consumer level number.",
            "**Copy exactly:** when taking a chain from a web, keep every arrow of the drawn links.",
          ],
        },
      ],
      examinerTips: [
        "If the question asks for a food chain from a web, copy it exactly as drawn and keep the arrows the right way round — one reversed arrow can cost the whole chain.",
        "For 'predict the effect of removing X', trace it one level at a time: prey increases, competitor decreases.",
        "Answer prediction questions in both directions — name one species that increases and one that decreases, each with a reason.",
        "Use the phrase 'trophic level' with its number when the question uses the term.",
      ],
      commonMistakes: [
        "Drawing the arrow towards the organism being eaten.",
        "Putting the sun as the first link of a chain.",
        "Calling a herbivore a secondary consumer.",
        "Using double-headed arrows; food-chain arrows are single-headed because energy flows one way.",
      ],
      recap: [
        "Write a four-link food chain and label each trophic level. [4]",
        "State what the arrows in a food chain represent. [1]",
        "Explain how a food web is more useful than a single food chain. [3]",
        "In a pond web the frogs are removed by disease. Predict and explain the effect on the herons and on the grasshoppers. [4]",
      ],
    },
    {
      title: "Energy Transfer Between Trophic Levels",
      body: `### Why food chains rarely exceed four links\nEnergy enters as light, is fixed by producers, and is then **lost at every transfer** — so each higher level has less available to it and supports fewer and larger organisms.\n\n### Losses at every step\n\nAn animal does not eat the whole organism below it, cannot digest all of what it eats, and burns much of what it absorbs in respiration.\n\nOnly the chemical energy that survives these losses becomes new biomass at the next level.\n\n### Reading a pyramid\n\nPyramids are drawn to scale, with the producer level as the base and the top predator as the tip.\n\nEach level is narrower than the one below because energy cannot be replaced from above.`,
      figure:
        "| Where the energy goes | What it means |\n| --- | --- |\n| Not absorbed by the producer | Light falls on the ground or passes through a leaf |\n| Respiration | Chemical energy converted and lost as heat to the surroundings |\n| Not eaten | Bones, stems, roots, shell left behind |\n| Not digested / egestion | Lost in faeces |\n| Excretion | Lost in urea and other metabolic wastes |\n| Movement and maintenance | Used up by the animal's own activity |" +
        "\n\n" +
        pyramidArt,
      groups: [
        {
          bullets: [
            "Energy is **not recycled**; it flows one way, enters as light and finally leaves as heat.\n\nOnly **materials** are recycled.",
            "Roughly **10%** of the energy in one trophic level becomes biomass in the next, which is why chains are short.",
            "Respiration is the main route of loss at every level.",
            "Because each level holds less energy, a pyramid of energy always points up and never inverts.",
            "A **pyramid of biomass** can look inverted, for example when a short-lived phytoplankton population supports a longer-lived zooplankton population.",
          ],
        },
        {
          subTitle: "Where the losses happen",
          bullets: [
            "**Respiration:** chemical energy converted and lost as heat at every trophic level.",
            "**Egestion:** undigested material leaving the consumer as faeces.",
            "**Excretion:** chemical energy removed in urea and other metabolic wastes.",
            "**Uneaten parts:** bones, stems, shells and roots that never pass to the next consumer.",
          ],
        },
        {
          subTitle: "Numbers and chains",
          bullets: [
            "**Ten percent rule:** roughly one tenth of the energy at a level becomes biomass at the next.",
            "**Warm-blooded cost:** birds and mammals lose extra energy keeping their bodies warm.",
            "**Short chains:** few predators can be supported above level four because so little energy remains.",
          ],
        },
      ],
      examinerTips: [
        "Give at least three loss routes — heat from respiration, uneaten parts, and faeces — to collect full marks.",
        "Link the shortness of food chains to the energy left after each transfer.",
        "In pyramid calculations, use the values given and show the subtraction; never assume 10% unless the question tells you to.",
        "End every chain-length answer with 'so there is not enough energy to support another trophic level'.",
      ],
      commonMistakes: [
        "Saying energy is 'used up' and destroyed; it is converted to other forms and lost as heat.",
        "Claiming producers get 100% of the sun's energy — most incoming light is reflected, transmitted or unused.",
        "Saying decomposers pass energy back up the chain to producers; energy flows one way and only materials cycle.",
        "Counting the sun as trophic level one; it is the energy source, not a level.",
      ],
      recap: [
        "Explain why energy is lost between two trophic levels, giving three reasons. [3]",
        "Explain why most food chains contain no more than four trophic levels. [3]",
        "State why a pyramid of energy is never inverted. [2]",
        "Explain why a pyramid of biomass can appear inverted in a pond while a pyramid of energy cannot. [3]",
      ],
    },
    {
      title: "The Carbon and Water Cycles",
      figure: carbonCycleArt,
      body: `### Two cycles, one shared idea\nIn a **cycle**, a substance is reused rather than spent.\n\nUnlike energy, neither carbon nor water is lost.\n\nCarbon cycles between the atmosphere, organisms and the ground. Water evaporates, condenses, precipitates and returns to the sea and the atmosphere.\n\n### The stores\n\nThe atmosphere holds carbon as carbon dioxide, the oceans hold it dissolved, and coal, oil and wood hold it as long-term stores.\n\nAny process that empties a store into the air is a release; photosynthesis is the main removal.\n\n### The human footprint\nDeforestation removes the carbon locked in timber and shrinks the photosynthetic removal. Burning fossil fuels releases carbon fixed millions of years ago, tipping the balance upward.\n\n${carbonDiagram}`,
      groups: [
        {
          subTitle: "The carbon cycle",
          bullets: [
            "**Photosynthesis** removes carbon dioxide from the atmosphere and fixes it into organic molecules in producers.",
            "**Respiration** by producers, consumers and decomposers returns carbon dioxide to the atmosphere.",
            "**Feeding** passes carbon along the food chain as organic molecules.",
            "**Decomposition** by microorganisms releases carbon dioxide from dead matter and waste.",
            "**Combustion** of wood, and of fossil fuels formed from buried dead organisms over millions of years, returns carbon dioxide rapidly.",
            "Burning fossil fuels and removing forests tip the balance, adding carbon dioxide faster than photosynthesis removes it.",
            "**Fast and slow:** carbon cycling through living things turns over in years, while the fossil route takes millions.",
          ],
        },
        {
          subTitle: "The water cycle",
          bullets: [
            "**Evaporation** from seas, lakes and rivers, plus **transpiration** from plant leaves, puts water vapour into the atmosphere; the combined loss is **evapotranspiration**.",
            "**Condensation** of the vapour forms clouds.",
            "**Precipitation** returns water as rain, snow or hail.",
            "Water then **runs off** the surface or **infiltrates** the soil to reach rivers, lakes and groundwater, and the cycle repeats.",
            "The sun supplies the energy that drives the whole cycle, so water is not recycled by the plant alone.",
            "**Groundwater:** the water that infiltrates and collects below the soil surface, feeding wells and springs.",
          ],
        },
      ],
      examinerTips: [
        "Name the processes with their verbs — photosynthesis, respiration, decomposition, combustion — and say which direction the carbon moves each time.",
        "For the water cycle, use the technical terms evaporation, condensation and precipitation rather than 'dries up' or 'turns into cloud'.",
        "Point out the contrast the question usually wants: energy flows through, materials are recycled.",
        "Pair each process with its direction in one clause — 'respiration releases carbon dioxide to the atmosphere' — so no mark is left implicit.",
      ],
      commonMistakes: [
        "Listing decomposition as a process that stores carbon; it mainly releases carbon dioxide.",
        "Forgetting that plants respire as well as photosynthesise.",
        "Drawing arrows the wrong way between the atmosphere and producers.",
        "Placing transpiration in the carbon cycle; it is water loss from the plant surface and belongs to the water cycle only.",
      ],
      recap: [
        "Describe how carbon is passed from the atmosphere into an animal and back again. [5]",
        "State two processes that return carbon dioxide to the atmosphere. [2]",
        "Name the three main stages of the water cycle in order. [3]",
        "Explain how the carbon cycle and energy flow differ. [3]",
      ],
    },
    {
      title: "Sampling a Habitat",
      body: `### Measuring an ecosystem fairly\n\nFieldwork aims to estimate the distribution and abundance of organisms without counting every individual.\n\nTwo tools do the job: the **quadrat** for cover and density, and the **transect** for change along a gradient.\n\n### Why sample at all\n\nCounting every individual in a habitat is usually impossible, so ecologists sample and then scale up.\n\nThe estimate is only as good as the method, which is why most practical questions test reliability rather than numbers.\n\n### Density, frequency, cover\n\nThree measurements appear in the mark scheme, so use the one the question asks for.\n\nDensity counts individuals per unit area, frequency records how often the species appears in quadrats, and percentage cover estimates how much of the area it shades over.`,
      groups: [
        {
          subTitle: "Quadrats",
          bullets: [
            "A **quadrat** is a square frame of known area, thrown or placed over the organisms being studied.",
            "**Percentage cover** is read directly: estimate or count the fraction of the squares in a gridded quadrat the species fills.",
            "**Density** = number of individuals in the quadrats divided by the total area sampled.",
            "Take **many samples**, and use **random sampling** to avoid bias: number grid reference lines and select coordinates with a random number generator, then place the quadrat at each intersection.",
            "Repeat sampling in different areas or at different times to check the estimate holds.",
          ],
        },
        {
          subTitle: "Transects",
          bullets: [
            "A **transect** is a measuring tape or line stretched across the habitat from one extreme to the other.",
            "**Line transect:** record which species touch the line at intervals, giving abundance and frequency.",
            "Quadrats placed at set intervals along the line give an **intercept** or belt transect, which shows how species change along an environmental gradient.",
            "Measure the **abiotic factor** at each point too — light intensity, soil pH, moisture — so distribution can be linked to cause.",
          ],
        },
        {
          subTitle: "Making the estimate reliable",
          bullets: [
            "**Random sampling:** coordinates chosen with a random number generator, so the sample carries no preference.",
            "**Repeat many times:** more quadrats give a mean that sits closer to the true value.",
            "**Scale up:** multiply the mean per quadrat by the total area divided by the quadrat area.",
            "**Pair the counts:** record the abiotic reading at the same point as each quadrat, so cause and distribution can be compared.",
          ],
        },
      ],
      examinerTips: [
        "The three reliability words are **random**, **repeat**, and **larger sample** — an answer with all three is a full answer.",
        "Justify randomness explicitly: 'so that the sample is not biased and is representative of the habitat'.",
        "Name the equipment when asked to describe a method: quadrat, transect, and an instrument for the abiotic factor.",
        "Write the method as numbered steps, with the equipment named in the first line; mark schemes often give a method mark for that.",
      ],
      commonMistakes: [
        "Choosing quadrat sites because they look rich in the species — that is subjective sampling and biases the estimate.",
        "Counting only one quadrat and presenting it as the population size.",
        "Using a quadrat where a transect is needed, or vice versa.",
        "Throwing the quadrat over the shoulder without coordinates; aimless throwing still drifts towards your preferences.",
      ],
      recap: [
        "Describe how to use quadrats to estimate the population size of a daisy in a lawn. [4]",
        "Explain why samples must be taken randomly. [2]",
        "Describe how a belt transect could investigate how plant distribution changes from a woodland edge to its interior. [5]",
        "State and explain two ways of making a quadrat estimate more reliable. [4]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_19: Chapter = chapterNineteen;
