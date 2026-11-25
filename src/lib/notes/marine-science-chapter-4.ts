import type { Chapter } from "./types";

const IMG = "/notes/marine-science";

function msPanel(items: { src: string; alt: string; caption: string }[]) {
  const tiles = items
    .map((it, i) => {
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

const panelA = msPanel([
  {
    src: "ms4-food-tests.webp",
    alt: "Four unlabelled test tubes in a wooden rack: one blue-black from iodine and starch, one brick-orange from a Benedict's test, one violet from biuret, and one cloudy white ethanol emulsion, with a steaming water bath behind",
    caption: "Four reagents, four colours",
  },
  {
    src: "ms4-marine-snow.webp",
    alt: "A tall glass tank of dark blue water with pale particles of debris drifting slowly downwards, lit from above so the falling particles are visible",
    caption: "Nutrients sink as marine snow",
  },
]);

const panelB = msPanel([
  {
    src: "ms4-calorimetry.webp",
    alt: "A burning peanut held beneath a boiling tube of water on a clamp stand, with a thermometer in the water and a metal shield around the flame to reduce heat loss",
    caption: "Energy in food, measured",
  },
  {
    src: "ms4-photosynthesis-rate.webp",
    alt: "An aquatic plant in a beaker of water under a desk lamp, releasing a stream of bubbles, with a ruler on the bench measuring the distance between lamp and beaker",
    caption: "More light, more bubbles",
  },
]);

const panelC = msPanel([
  {
    src: "ms4-pyramid-of-biomass.webp",
    alt: "Four stacked wooden blocks on a laboratory bench narrowing toward the top, holding model seaweeds at the wide base, then shrimp and a crab, then a fish, and a shark at the summit",
    caption: "Every level is smaller",
  },
  {
    src: "ms4-food-web-display.webp",
    alt: "A classroom wall board with cards of phytoplankton, krill, small fish, squid, tuna and shark connected by red arrows and string showing several overlapping feeding pathways",
    caption: "Chains braid into webs",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Nutrients and Energy",
  intro: `Nutrients are the materials an organism needs to grow, repair itself and obtain chemical energy.\n\nEnergy is different: it enters from the Sun, passes along food chains, and is progressively lost as heat. Materials cycle, energy flows.\n\nKeep that one distinction and most of this chapter answers itself.`,
  subheadings: [
    {
      title: "Nutrients, Food Tests and the Cycling of Elements",
      body: `### What Counts as a Nutrient

Marine nutrients include **gases such as carbon dioxide**, **dissolved salts**, and **organic compounds**: carbohydrates (starch and sugars such as glucose), lipids (fats and oils) and proteins.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Functions of the major groups",
          bullets: [
            "**Protein** — tissue repair and growth, and an energy supply.",
            "**Carbohydrate** — energy supply.",
            "**Lipids** — insulation, energy supply, and a source of lipid-soluble vitamins.",
            "**Vitamins** and **mineral salts** — micronutrients, needed in small amounts.",
          ],
        },
        {
          subTitle: "The four food tests",
          bullets: [
            "**Starch**: add iodine solution → **blue-black**. No heating.",
            "**Reducing sugars**: add Benedict's solution and heat in a water bath → **brick-red/orange** (stays blue = none).",
            "**Proteins**: add biuret solution → **violet/purple**. No heating.",
            "**Lipids**: ethanol emulsion test — dissolve in ethanol, pour into water → **cloudy white emulsion**.",
            "Always record a colour **change**, name the reagent, and state whether heating is required.",
          ],
        },
        {
          subTitle: "Elements and the cycle",
          bullets: [
            "**Nitrogen** makes proteins. **Carbon** makes organic compounds. **Magnesium** makes chlorophyll. **Calcium** makes bones, shells and coral skeletons. **Iron** makes haemoglobin, which carries oxygen in the blood of vertebrates and some invertebrates.",
            "Nutrients are **taken up by organisms**, **passed up food chains**, **returned by death and decay**, **sink through the water column as marine snow**, and **return to the surface by upwelling**.",
            "**Bacteria act as decomposers**, breaking down dead matter and waste and releasing the elements back into solution so producers can use them again.",
          ],
        },
      ],
    },
    {
      title: "Respiration, Photosynthesis and Productivity",
      body: `### Two Reactions, Opposite Directions

**Respiration** is the set of chemical reactions in cells that break down nutrient molecules and release **usable energy**.

Word equation: **oxygen + glucose → carbon dioxide + water**.

**All cells respire, all the time** — plant cells respire as well as photosynthesise.

Respiration is not gas exchange. **Gas exchange** is the physical movement of oxygen and carbon dioxide in and out of the body; respiration is the chemical reaction inside the cell.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Photosynthesis",
          bullets: [
            "**Photosynthesis** makes glucose from carbon dioxide and water using energy from light, releasing oxygen as a by-product.",
            "Word equation: **carbon dioxide + water → glucose + oxygen**.",
            "**Chlorophyll** is the green pigment that transfers energy from light into energy stored in organic chemicals, used to synthesise carbohydrates.",
            "A **producer** is an organism that makes its own organic nutrients, generally using sunlight through photosynthesis.",
            "Marine producers: **marine plants** (seagrasses), **some protoctists** (microalgae, macroalgae, diatoms, some dinoflagellates) and **some bacteria** (cyanobacteria).",
            "**Productivity** is the rate at which producers transfer energy into carbohydrates. **Upwellings raise coastal productivity** by returning nutrients to the light layer.",
            "**Practical — light intensity and rate**: place an aquatic plant under a lamp, count bubbles or measure gas volume per minute at different distances. Greater distance = lower light intensity = slower rate.",
            "**Practical — energy in food**: burn a known mass of food under a known volume of water, measure the temperature rise, and use energy = volume × 4.2 × temperature change. Expect a large underestimate because heat is lost to the air.",
          ],
        },
      ],
    },
    {
      title: "Feeding Relationships and Pyramids",
      body: `### Energy Enters Once and Leaves Continuously

The **Sun is the principal source of energy input** to biological systems.

A **food chain** shows the transfer of energy from one organism to the next, always **starting with a producer**.

A **food web** is a network of interconnected food chains.

A **trophic level** is the position of an organism in a food chain, food web or ecological pyramid.`,
      figure: panelC,
      groups: [
        {
          subTitle: "The feeding vocabulary",
          bullets: [
            "**Consumer** — gets energy by feeding on other organisms; classed as **primary, secondary or tertiary** by position, and may feed at different trophic levels within a web.",
            "**Herbivore** eats producers; **carnivore** eats other animals; **omnivore** eats both.",
            "**Detritivore** — gets energy by eating dead or waste organic material.",
            "**Decomposer** — gets energy by **breaking down** dead or waste organic material (bacteria and fungi).",
            "**Predator** — captures, kills and eats another animal, its **prey**.",
            "**Biomass** — the mass of living matter.",
          ],
        },
        {
          subTitle: "Loss of energy and pyramids",
          bullets: [
            "Energy leaves the chain through **respiration, movement, removal or harvesting, and excretion**. That is why each level is smaller.",
            "**Pyramid of numbers**: count of organisms at each level — can be inverted, e.g. one large tree or one whale hosting many parasites.",
            "**Pyramid of biomass**: mass of living matter at each level — normally upright in the open ocean but can look inverted where producers reproduce very fast.",
            "**Pyramid of energy**: always upright and never inverted, because energy is lost between levels. Width = energy per area per time.",
            "Draw all three with the **producer at the bottom**, levels centred, and no gaps between bars.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Only Benedict's needs a water bath, and a 'describe the experiment' answer wants a distilled-water control.",
            "Nutrients are matter; energy is what the matter releases.",
            "Respiration runs 24 hours — plants respire at night too, and do not put oxygen on the left of the photosynthesis equation.",
            "Food-chain arrows point where the **energy goes**, from eaten to eater; only numbers and biomass pyramids can be inverted.",
          ],
        },
      ],
    },
  ],
};

export const MARINE_SCIENCE_CHAPTER_4 = chapterFour;
