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
    src: "ms1-earth-layers.webp",
    alt: "A cut-away sphere of the Earth showing a bright solid inner core, a liquid outer core, a thick rocky mantle and a very thin outer crust",
    caption: "Four layers, one thin skin",
  },
  {
    src: "ms1-plate-boundaries.webp",
    alt: "Three laboratory blocks of rock on a bench, the first pair pushed together to form a fold, the second pair pulled apart with magma rising, the third pair sliding sideways past each other",
    caption: "Convergent, divergent, transform",
  },
]);

const panelB = msPanel([
  {
    src: "ms1-seafloor-profile.webp",
    alt: "A relief model of an ocean margin showing the shallow continental shelf, the steep continental slope, the flat abyssal plain, a mid-ocean ridge and a deep ocean trench",
    caption: "The seafloor has a shape",
  },
  {
    src: "ms1-world-ocean-globe.webp",
    alt: "A globe on a study desk lit so the Pacific, Atlantic, Indian, Southern and Arctic oceans are visible, with the equator and lines of latitude and longitude marked",
    caption: "One World Ocean, five names",
  },
]);

const panelC = msPanel([
  {
    src: "ms1-spring-neap-tides.webp",
    alt: "A demonstration board with the Earth, Moon and Sun aligned for a spring tide in one diagram and at right angles for a neap tide in the other",
    caption: "Same Moon, two tide ranges",
  },
  {
    src: "ms1-rip-current.webp",
    alt: "An aerial view of a beach where a pale, narrow channel of water runs straight out through the breaking waves, with small waves either side",
    caption: "A rip is the escape route",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "The Earth and its Oceans",
  intro: `The Earth is a planet held in orbit around the Sun by gravity; the Moon is its natural satellite, held the same way.\n\nInside, the planet is layered. Outside, that layer is mostly water: the oceans cover 71% of the surface and hold 97% of the water.\n\nThis chapter is the stage set — the rock, the shape of the basins, and the moving water on top.`,
  subheadings: [
    {
      title: "Structure of the Earth and Plate Tectonics",
      body: `### Four Layers and a Magnetic Field

The core is iron: a **solid inner core** and a **liquid outer core**.

The mantle is solid rock that can melt into a viscous liquid called **magma**.

The crust is thin solid rock floating on top of it.

The iron core also creates the **magnetic field** that surrounds the Earth — sea turtles and tuna use it to navigate in Topic 3.`,
      figure: panelA,
      groups: [
        {
          subTitle: "How the plates move",
          bullets: [
            "The crust is broken into **tectonic plates** that float on the mantle and are dragged by **convection currents** — hot rock rises, cools, sinks, and pulls the plate with it.",
            "Continents and oceans as we know them are the result of **supercontinents breaking up** and plates drifting for hundreds of millions of years.",
          ],
        },
        {
          subTitle: "The three boundary types",
          bullets: [
            "**Convergent**: plates move towards each other. Ocean crust subducts under continental crust → trenches, volcanoes, earthquakes.",
            "**Divergent**: plates move apart. Magma rises to fill the gap → mid-ocean ridges, new seafloor, gentle volcanoes.",
            "**Transform**: plates slide past each other. Crust is neither made nor destroyed → sticks, then slips → earthquakes.",
            "**Tsunami**: an undersea earthquake or volcano at a convergent boundary vertically displaces the whole water column. The wave crosses an ocean almost unnoticed, then steepens and floods a coast, smothering coral, eroding sand, and dumping salt and debris inland.",
          ],
        },
      ],
    },
    {
      title: "Oceans, Seas and the Shape of the Seafloor",
      body: `### Five Oceans, One Connected Body

The oceans are the **Arctic, Atlantic, Pacific, Indian and Southern**.

They are interconnected and encircle the Earth as a single **World Ocean**.

The Pacific is the largest ocean; the **Mariana Trench** is the deepest point at roughly **11 000 m**.

A **sea** is smaller, sometimes inside an ocean, and often partly enclosed by land — the Bering Sea sits within the Pacific, the Mediterranean is almost enclosed.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Positions and geomorphology",
          bullets: [
            "Locate features with **latitude** (north–south of the equator), **longitude** (east–west), and their **coordinates**; climate zones are **tropical**, **temperate** and **polar**.",
            "**Continental shelf** — shallow, gently sloping submerged edge of a continent.",
            "**Continental slope** — steep drop from the shelf edge down to the deep sea floor.",
            "**Abyssal plain** — the deep, flat sediment-covered floor.",
            "**Mid-ocean ridge** — an underwater mountain range at a divergent boundary.",
            "**Ocean trench** — the deepest zones, at convergent boundaries.",
            "**Volcanic island** — built by magma, either at a ridge or over a hotspot.",
          ],
        },
      ],
    },
    {
      title: "Tides and Currents",
      body: `### The Moon Pulls, the Wind Pushes

Tides are the rise and fall of sea level caused by the **gravitational pull of the Moon and the Sun** on the water on Earth.

**High tide** is the bulge facing the Moon (plus the matching bulge on the far side); **low tide** is the trough between them.

When Sun, Moon and Earth line up (new and full Moon) the pulls add → **spring tides**, the biggest range.

When the Moon is at right angles to the Sun (first and last quarter) the pulls partly cancel → **neap tides**, the smallest range.

**Tidal amplitude** = high tide level − low tide level, measured with a staff gauge or tide gauge over one tidal cycle.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Currents and gyres",
          bullets: [
            "An **oceanic current** is the continuous movement of sea water in a particular direction, caused by **prevailing winds, the spinning of the Earth, tides, and changes in water density**.",
            "A **gyre** is a large system of circular currents. The five main gyres are the **North Pacific, South Pacific, North Atlantic, South Atlantic and Indian Ocean** gyres.",
            "Gyres circulate water around the World Ocean, moving heat from the tropics towards the poles.",
            "**Rip currents**: water piled up between the beach and offshore bars returns seaward through a narrow channel, at up to 2 m/s. Swim parallel to the shore to escape it, then back in.",
            "Measure **current speed** with a drifter or flow meter (distance a floating object travels ÷ time) and **direction** with a compass bearing on that drift.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "For 'describe the structure of the Earth', name all four layers with their material (iron / solid rock) and state (solid / liquid).",
            "Quote the two syllabus numbers exactly — 71% of the surface, 97% of the water — and name the Mariana Trench, not just '11 km'.",
            "Give the movement direction *and* the landform; naming a boundary by its landform alone loses the mark.",
            "Spring tide is not a season. The neap range is smaller because *the solar and lunar pulls act at right angles and partly cancel*.",
          ],
        },
      ],
    },
  ],
};

export const MARINE_SCIENCE_CHAPTER_1 = chapterOne;
