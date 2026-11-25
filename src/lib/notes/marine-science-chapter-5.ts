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
    src: "ms5-quadrat-transect.webp",
    alt: "A student kneeling on a rocky shore placing a square quadrat beside a tape measure stretched up the beach, with a clipboard of tally counts next to them",
    caption: "Random for abundance, line for zonation",
  },
  {
    src: "ms5-sediment-sieve.webp",
    alt: "A stack of graduated sieves on a tray holding sand samples, beside a balance, a drying oven and a Petri dish of sediment",
    caption: "Particle size, erosion, moisture",
  },
]);

const panelB = msPanel([
  {
    src: "ms5-ocean-zones.webp",
    alt: "A vertical cross-section of open water with a bright sunlit upper layer full of fish, a dim blue band in the middle and black water below lit by one small glow",
    caption: "Light decides the layers",
  },
  {
    src: "ms5-deep-sea-adaptations.webp",
    alt: "A near-black underwater scene with a dark fish showing large backward-facing teeth and a glowing lure beside a pale translucent gelatinous animal",
    caption: "Black, gelatinous and patient",
  },
]);

const panelC = msPanel([
  {
    src: "ms5-rocky-zonation.webp",
    alt: "A rocky shore cliff face in bands, dry pale barnacles highest up, a belt of mussels and limpets in the middle, and slippery brown seaweed lower near the water",
    caption: "Who can survive the longest out of water",
  },
  {
    src: "ms5-mangrove-forest.webp",
    alt: "A mangrove forest at mid-tide, prop roots arching into muddy water and thin vertical pneumatophores sticking up out of the sediment, with green leaves overhead",
    caption: "Roots that breathe",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Marine Ecology",
  intro: `An ecosystem is a community of organisms plus the environment they interact with.\n\nLearn the definitions word for word, then the four habitats the syllabus tests: open ocean, shores, mangroves, reefs.`,
  subheadings: [
    {
      title: "Ecosystems and How We Measure Them",
      body: `### Six Definitions, Word for Word

A **species** is a group of organisms that reproduce to produce **fertile offspring**.

A **population** is organisms of **one species**, in the **same area**, at the **same time**.

A **community** is all the populations of **different species** in an area.

A **habitat** is where an organism lives; its **environment** is the surrounding **biotic** (living) and **abiotic** (non-living) conditions.

An **ecosystem** is the community and its environment interacting as one unit — a rocky shore, a coral reef.

**Species richness** is the number of different species in an area.`,
      figure: panelA,
      groups: [
        {
          subTitle: "What limits a population",
          bullets: [
            "Growth rate depends on **food supply, disease, competition and predation**.",
            "Two ecosystem types: **open-ocean**, and **coastal** systems on the shelf or slope that are affected by tides — **wetlands, coral reefs, sandy shores, muddy shores, rocky shores, kelp forests, seagrass beds, mangrove forests**.",
            "Coastal systems are **more exposed to human activity** and **more productive**, partly because **run-off carries nutrients** in from the land.",
          ],
        },
        {
          subTitle: "The five practical methods",
          bullets: [
            "**Quadrats — abundance and richness**: place the frame **randomly** at least ten times, count each species, then population = mean per quadrat × (total area ÷ quadrat area).",
            "**Line and belt transects — distribution**: run a tape from high shore to low shore, recording species touching the line at set intervals, or inside a quadrat laid along it. Zonation is systematic, so random sampling misses it.",
            "**Shore profile**: tape between two poles from water's edge to shore top, measure height at each distance with a ruler and plumb line, plot height against distance.",
            "**Particle profile**: dry the sediment, sieve it through graduated sieves, weigh each fraction, plot mass against sieve size. **Moisture content**: weigh wet sediment, oven-dry at ~100 °C to constant mass, weigh again — moisture % = (mass lost ÷ wet mass) × 100.",
          ],
        },
      ],
    },
    {
      title: "The Open Ocean: Three Zones and the Seabed",
      body: `### Two Great Divisions

The **pelagic zone** is the whole column of open water; the **benthic zone** is the seabed.

Zones by depth and light: **sunlight 0–200 m**, **twilight 200–1000 m**, **midnight below 1000 m**.

**Plankton** drift in currents. **Phytoplankton** are microscopic **producers** — diatoms, dinoflagellates, cyanobacteria. **Zooplankton** are **consumers** — fish and invertebrate larvae, plus larger animals such as jellyfish.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Conditions, then adaptations",
          bullets: [
            "**Sunlight zone**: light, high dissolved oxygen, high biomass, low pressure, variable temperature, photosynthetic organisms. Biomass is high because **light and CO₂ allow photosynthesis, which feeds every level above it**.",
            "**Twilight zone**: dim light, stable temperature, higher pressure. Animals **migrate for food or breeding**, use **a wide range of food sources**, are **fast swimmers** because there is no shelter, and are **countershaded** — dark above, pale below.",
            "**Midnight zone**: no light, little oxygen, very stable cold, very high pressure. Adaptations: **bioluminescence** to attract mates or prey or illuminate predators, **slow movement and long lifespan**, **dark brown or black** bodies, **gelatinous tissue**, **large backward-facing teeth** so prey cannot escape.",
            "**Benthic**: camouflage or burrowing; invertebrates move on legs or **tube feet on the ventral surface** under a hard spiny back; **flatfish** lie on one side with both eyes on the upper side; **skates and rays** are dorsally flattened with elongated fins around the body edge.",
          ],
        },
      ],
    },
    {
      title: "Coastal Ecosystems: Shores, Mangroves and Reefs",
      body: `### Three Bands on Every Shore

Rocky and sedimentary shores both divide into **supratidal** (above normal high tide), **intertidal** (covered and uncovered by the tide) and **subtidal** (always under water).

Distribution is set by **abiotic factors** — exposure to air, wave action, oxygen, air and water temperature, unstable substrate — and **biotic factors** — predation and food availability.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Rocky and sedimentary shores",
          bullets: [
            "**Limpet and mussel** close the shell to prevent water loss and keep a hard shell against predators; a **sea anemone** retracts its tentacles into rock pools or beneath macroalgae to retain moisture; ***Fucus* sp.** has thick leathery fronds against drying out and a **holdfast** against waves.",
            "Sand and mud differ in **sediment size, sedimentation against erosion rate, stability, gradient, water movement and oxygen availability**: sand is coarse and well drained, mud fine, waterlogged and oxygen-poor.",
            "**Clams** burrow with a muscular foot; **lugworms** live in **U-shaped burrows**, use **specialised haemoglobin** to absorb oxygen in low-oxygen sediment, and **ingest sand** to digest the microorganisms in it.",
          ],
        },
        {
          subTitle: "Mangrove forests",
          bullets: [
            "An **intertidal zone often bordering a terrestrial forest**, frequently **estuarine**; over a tidal cycle **salinity, temperature and dissolved oxygen** all change. Tree adaptations: **pneumatophores** (aerial roots) for gas exchange in waterlogged, low-oxygen soil; **prop roots** for support in soft sediment; **leaves that secrete salt**.",
            "**Banded archerfish**: large forward-set movable eyes give binocular vision to target prey out of water; a specialised mouth spits a jet up to **150 cm** to knock insects down; dark bands camouflage it from birds.",
            "**Mudskippers**: absorb oxygen through moist skin and the mouth and throat lining; **enlarged gill chambers trap water** so they can breathe on land; fins shaped for movement on land; large eyes set high.",
          ],
        },
        {
          subTitle: "Tropical coral reefs",
          bullets: [
            "Corals are **animals that form colonies of polyps**, with photosynthetic microorganisms living in their tissues. Polyp parts: **tentacles** and **stinging cells** capture prey, the **mouth** takes food in, the **stomach** digests it, the **calcium carbonate skeleton** supports and protects.",
            "**Mutualism with zooxanthellae**: the algae photosynthesise and pass sugars to the coral; the coral gives the algae protection, light and nutrients.",
            "Reef water is **clear because it is low in nutrients** — they are held inside the organisms — yet species richness stays very high.",
            "Distribution depends on **temperature, light intensity, clear water and hard substrate**, plus biotic factors **parrot fish** and **crown-of-thorns starfish**. Adaptations: **triggerfish** lock an adapted dorsal fin into crevices; **parrotfish** grind coral with specialised teeth; **nudibranchs** absorb toxins from prey to become toxic themselves.",
            "**Darwin–Dana–Daly atoll theory**: a fringing reef forms around a volcanic island; the island subsides while coral keeps growing upward, leaving a **barrier reef and lagoon**; when the island sinks completely a ring-shaped **atoll** remains.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Richness counts **species**, population size counts **individuals**; transects show **distribution**, quadrats show **abundance**.",
            "Quote the depths as ranges — 0–200, 200–1000, below 1000 — and never put the twilight zone under 1000 m.",
            "A *mutualism* answer must state **both** benefits; atoll questions score the sequence fringing to barrier to atoll with subsidence as the cause.",
            "Pneumatophores are for **gas exchange**, prop roots for **support**; zooxanthellae are microorganisms inside an animal, not plants.",
          ],
        },
      ],
    },
  ],
};

export const MARINE_SCIENCE_CHAPTER_5 = chapterFive;
