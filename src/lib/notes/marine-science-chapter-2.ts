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
    src: "ms2-water-cycle.webp",
    alt: "A coastal landscape in cross-section with arrows showing evaporation rising from the ocean, clouds drifting inland, precipitation falling on hills and surface run-off returning to the sea",
    caption: "The ocean is the engine",
  },
  {
    src: "ms2-floating-ice-melt.webp",
    alt: "Two laboratory tanks side by side, one with a block of ice floating in water and one with ice resting on a raised platform above the water, both marked with a water-level line",
    caption: "Floating ice does not raise the level",
  },
]);

const panelB = msPanel([
  {
    src: "ms2-estuary-salinity.webp",
    alt: "A river mouth meeting the sea at high tide, with a sampling pole dipped into the water and a salinity meter reading changing along the mix of fresh and sea water",
    caption: "Estuaries breathe salt",
  },
  {
    src: "ms2-ph-indicator.webp",
    alt: "Three beakers of sea water, fresh water and rain water on a bench, each with universal indicator solution added, showing green, yellow and blue-green colours against a pH colour chart",
    caption: "Rain is the acidic one",
  },
]);

const panelC = msPanel([
  {
    src: "ms2-density-column.webp",
    alt: "A tall glass cylinder on a lab bench with clearly separated layers, deep blue cold salty water sinking below pale warm fresh water, with a thermometer beside it",
    caption: "Cold and salty sinks",
  },
  {
    src: "ms2-secchi-disc.webp",
    alt: "A researcher on the side of a small boat lowering a black-and-white Secchi disc on a marked rope into the sea, reading the depth at which it disappears",
    caption: "Light penetration, measured",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Sea Water",
  intro: `Sea water is not just water. It is a mixture of water, dissolved salts and dissolved gases, and every one of those three changes with temperature, depth and location.\n\nThis chapter is the physics and chemistry of the liquid itself — how it cycles, what is dissolved in it, how heavy it is, and what happens as you sink through it.`,
  subheadings: [
    {
      title: "The Water Cycle and Changes of State",
      body: `### Particles First

Solids, liquids and gases differ in how their particles are arranged and how free they are to move.

Solids: particles packed in a fixed pattern, vibrating in place.

Liquids: particles close but sliding over each other.

Gases: particles far apart, moving quickly and randomly.

**Temperature** measures the average **kinetic energy** of those particles, in °C.

**Diffusion** is the net movement of particles from a region of higher concentration to one of lower concentration, caused by their random motion — this is how oxygen enters a cell and how dye spreads through a beaker.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Changing state costs or releases energy",
          bullets: [
            "**Evaporation** (liquid → gas) and **melting** (solid → liquid) take energy in. **Condensation** (gas → liquid) and **freezing** (liquid → solid) release energy out.",
            "The **water cycle**: evaporation from the ocean → condensation into clouds → precipitation over land and sea → surface run-off back to the ocean.",
            "**Rate of evaporation** rises with temperature, wind speed, surface area and low humidity, and falls with high humidity and a calm surface.",
            "**Practical — floating ice vs land ice**: melt ice floating in water and the level does **not** change, because it already displaced its own mass of water. Melt ice resting on land and the level **rises**, because new water is added to the basin.",
          ],
        },
      ],
    },
    {
      title: "Salinity, pH and Dissolved Gases",
      body: `### A Mixture, Not a Compound

An **element** is one type of atom (oxygen). A **compound** is two or more elements chemically bonded (calcium carbonate, CaCO₃). A **mixture** is substances physically combined and not bonded — **sea water**.

Sea water is a **solvent** (water) holding **solutes** (salts) in **solution**. Sodium chloride, magnesium sulfate and calcium carbonate are the salts named in the syllabus. Some substances are **soluble**, others **insoluble**.

**Salinity** is the concentration of dissolved salts, in **parts per thousand (ppt)**.`,
      figure: panelB,
      groups: [
        {
          subTitle: "What sets the salt level",
          bullets: [
            "**Pacific Ocean** — typical salinity. **Baltic Sea** — low salinity (heavy river input, cool, low evaporation). **Red Sea** — high salinity (hot, intense evaporation, almost no river run-off).",
            "Factors that change salinity: **erosion of rocks on land, run-off, precipitation and evaporation, melting of ice sheets and glaciers, and temperature**.",
            "An **estuary** is a partly enclosed body of water where a river meets the sea. It is tidal, so fresh and sea water mix and **salinity rises and falls with the tidal cycle**.",
            "**Practical — solubility and temperature**: dissolve a fixed mass of solute in equal volumes of water at different temperatures. Hotter water dissolves more, so undissolved solid disappears as temperature rises.",
          ],
        },
        {
          subTitle: "pH and the gases in solution",
          bullets: [
            "pH scale: **< 7 acidic, 7 neutral, > 7 alkaline**. Universal indicator gives a colour match against a chart. Sea water is weakly alkaline (around 8), fresh water near neutral, rain water slightly acidic (around 5.6) because carbonic acid forms.",
            "**Practical — CO₂ and pH**: bubble carbon dioxide through sea water and the colour shifts towards yellow-orange, i.e. **pH falls**. More dissolved CO₂ means more acidic water.",
            "Oxygen and carbon dioxide from the atmosphere **dissolve** into the sea. Oxygen has a **low solubility** in water.",
            "The atmosphere is about 21% oxygen; sea water holds only a few milligrams per litre. The ocean, by contrast, holds vastly more carbon dioxide than the air.",
            "**Practical — gas solubility and temperature**: warm water releases bubbles as heating reduces the amount of dissolved gas it can hold. Cooling restores it.",
          ],
        },
      ],
    },
    {
      title: "Density, Depth and Upwelling",
      body: `### Why the Ocean Sits in Layers

**Density = mass ÷ volume**. Rearrange as mass = density × volume or volume = mass ÷ density.

Two things raise the density of sea water: **lower temperature** and **higher salinity**.

By particle theory, cooling makes particles move slower and pack closer, so the same mass occupies less volume and density rises.

Because colder water is denser, it generally lies **beneath** warmer water, and the ocean sorts itself into layers.`,
      figure: panelC,
      groups: [
        {
          subTitle: "What changes as you go down",
          bullets: [
            "**Light penetration** falls steeply with depth — measure it with a **Secchi disc** on a marked rope: lower it until it vanishes, read the depth, repeat and average.",
            "**Pressure** increases by about 1 atmosphere every 10 m of depth.",
            "**Temperature** falls with depth, most sharply across the thermocline.",
            "**Salinity** shifts with depth, being lowest at the surface where rain and rivers dilute it.",
            "**Dissolved oxygen** is high at the surface (diffusion from air plus photosynthesis) and in cold deep water, and dips in the middle where decomposition uses it up.",
          ],
        },
        {
          subTitle: "Upwelling and El Niño",
          bullets: [
            "**Upwelling**: surface winds push warm surface water away from a coast, and cold, **nutrient-rich** water rises from depth to replace it. The result is dense plankton, big fish stocks and major coastal fisheries.",
            "**El Niño**: the trade winds weaken or reverse. Warm surface water piles back into the **eastern Pacific**, so **upwelling there is reduced** and nutrient supply collapses.",
            "Local effects: eastern Pacific sea surface temperature and rainfall rise, fishing fails, while **Australia and Asia become drier** and more prone to drought.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Sea level rise comes from thermal expansion and melting of **land-based** ice, not floating sea ice.",
            "Report salinity in ppt, not %, and call sea water a **mixture** — the salts are not chemically bonded.",
            "Density answers need both variables: say *cold and salty*, not just *cold*.",
            "In an El Niño question the two marks are 'reduced upwelling' and 'nutrient availability falls'.",
          ],
        },
      ],
    },
  ],
};

export const MARINE_SCIENCE_CHAPTER_2 = chapterTwo;
