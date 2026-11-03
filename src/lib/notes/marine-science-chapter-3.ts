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
    src: "ms3-cell-models.webp",
    alt: "Three cell models on a laboratory shelf: a rectangular plant cell with a wall and green chloroplasts, a rounded animal cell with mitochondria, and a simple rod-shaped bacterial cell",
    caption: "Seven parts, then three",
  },
  {
    src: "ms3-classification-ladder.webp",
    alt: "A wooden stepped display holding model sea animals, several different species on the wide top step and narrowing to a single black-and-white orca model on the bottom step",
    caption: "Genus first, species second",
  },
]);

const panelB = msPanel([
  {
    src: "ms3-fish-external-features.webp",
    alt: "A whole bony fish on a white dissection tray seen from the side, with coloured pins holding blank paper tags at the dorsal fin, gill cover, lateral line, pectoral, pelvic, anal and caudal fins",
    caption: "Every fin has a job",
  },
  {
    src: "ms3-invertebrate-specimen-tray.webp",
    alt: "A white tray holding five marine invertebrate specimens arranged in a row: a crab, a sea anemone, a starfish, a bivalve mollusc and a segmented worm",
    caption: "Symmetry tells you the group",
  },
]);

const panelC = msPanel([
  {
    src: "ms3-kelp-vs-seagrass.webp",
    alt: "Two pressed marine specimens side by side on a bench, a brown kelp with holdfast, stipe, gas bladder and blades, and a green seagrass with roots, rhizome and flowers",
    caption: "Look-alikes from different kingdoms",
  },
  {
    src: "ms3-turtle-nesting-beach.webp",
    alt: "A sandy beach at dusk with crawling tracks leading from the sea to a freshly smoothed nest chamber and back, a small hatchery sign and no lights in the distance",
    caption: "Return to the beach where you hatched",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Marine Organisms",
  intro: `Life in the sea runs from a single cell to the largest animal that has ever lived.\n\nThis chapter is identification: what cells are made of, how organisms are named and grouped, and how the classic marine animals live and travel.\n\nAlmost every question here is answered from a list, so the lists are kept short and exact.`,
  subheadings: [
    {
      title: "Cells, Reproduction and Classification",
      body: `### Three Cell Plans

**Plant cells** have a cell wall, cell membrane, nucleus, cytoplasm, chloroplasts, mitochondria and a vacuole.

**Animal cells** have everything except the cell wall and chloroplasts, and their vacuoles are small.

**Bacterial cells** are the minimal set: cell wall, cell membrane and cytoplasm — no nucleus.

Function checks: wall protects and supports; membrane controls what enters and leaves; nucleus holds the genetic material; cytoplasm is where reactions happen; chloroplasts capture light for photosynthesis; mitochondria release energy in respiration; the vacuole stores cell sap.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Two ways to reproduce",
          bullets: [
            "**Asexual**: one parent produces exact copies of itself — quick, no mate needed, no variation.",
            "**Sexual**: organisms produce male and female sex cells that fuse, giving offspring with characteristics from both parents — slower, but creates variation.",
          ],
        },
        {
          subTitle: "Naming and ranking",
          bullets: [
            "Organisms are grouped by **shared features** so that scientists everywhere agree on what they are talking about.",
            "The **binomial system** is an internationally agreed naming method. The scientific name has two parts — **genus then species** — e.g. *Orcinus orca*.",
            "The **three domains** are **Bacteria, Archaea and Eukarya**.",
            "Within Eukarya, the marine kingdoms you must know are **animals, plants and protoctists**, placed by features such as cell type, nutrition and body organisation.",
          ],
        },
      ],
    },
    {
      title: "The Animal Kingdom: Vertebrates and Invertebrates",
      body: `### Vertebrates by Three Features

Marine vertebrates are sorted using **skin covering** (hair, feathers, scales), **reproductive method** (internal or external fertilisation) and **gills or lungs** for gas exchange.

**Mammals** — hair, internal fertilisation, lungs: cetaceans (whales, dolphins), pinnipeds (seals, sea lions), sirenians (manatees, dugongs).

**Birds** — feathers, internal fertilisation, lungs: pelagic birds (albatross) and shorebirds (oystercatcher).

**Reptiles** — scales, internal fertilisation, lungs: sea snakes and turtles.

**Fish** — scales, usually external fertilisation, gills: **cartilaginous** (shark, ray) and **bony** (tuna, cod).`,
      figure: panelB,
      groups: [
        {
          subTitle: "External features of fish and what they do",
          bullets: [
            "**Operculum** — a bony cover that protects the gills and pumps water over them.",
            "**Scales** — protection against damage and predators.",
            "**Dorsal, pelvic, pectoral, anal fins** — control pitching, rolling and yawing and steer direction changes.",
            "**Caudal fin** — forward thrust.",
            "**Lateral line** — detects vibration and pressure changes in the water.",
            "**Nares** — detect chemicals, i.e. smell.",
          ],
        },
        {
          subTitle: "Five invertebrate groups",
          bullets: [
            "**Crustaceans** (crab, shrimp): bilateral symmetry, exoskeleton, compound eyes, two pairs of antennae, abdominal segments with jointed legs.",
            "**Cnidarians** (jellyfish, anemone, coral): radial symmetry, tentacles with stinging cells.",
            "**Echinoderms** (starfish, sea urchin): pentaradial symmetry, spiny skin, tube feet.",
            "**Molluscs** (mussel, octopus, clam): bilateral symmetry, unsegmented body, internal or external shell.",
            "**Annelids** (ragworm, tube worm): bilateral symmetry, segmented soft body, setae (bristles).",
            "**Magnification = image size ÷ actual size** — convert both to the same unit first, usually µm.",
            "A **dichotomous key** is a series of paired choices based on easily seen external features; work from the specimen outward and only ever pick one statement per step.",
          ],
        },
      ],
    },
    {
      title: "Plants, Algae, Life Cycles and Migration",
      body: `### Seagrass Is a Plant, Kelp Is Not

**Seagrasses** belong to the **plant kingdom**: leaves for photosynthesis, roots that anchor into sediment and take up minerals, **rhizomes** (underground stems) that connect plants and allow asexual reproduction, and **flowers** for sexual reproduction.

**Kelp** is a **macroalga (seaweed)** in the **protoctist kingdom**: flat **blades** for photosynthesis, **gas bladders** in some species to float the blades, a **stipe** acting as a stem, a **holdfast** anchoring it to the substrate, and chloroplasts in each cell.

**Dinoflagellates** (protoctists): microscopic, single-celled, chloroplasts for photosynthesis, **two flagella** for movement.

**Diatoms** (protoctists): microscopic, single-celled, chloroplasts, and a **silica skeleton**.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Life cycle of the leatherback turtle",
          bullets: [
            "Females reproduce every **2–5 years** and return to the sandy shore **where they hatched**.",
            "They excavate a nest and lay eggs, repeating this several times at **10-day intervals**, then bury the eggs and leave.",
            "**Incubation temperature determines the sex** of the offspring.",
            "Eggs hatch after **55–60 days**; hatchlings go to sea, feed and grow, reaching maturity at **15–25 years**. Males live entirely at sea.",
          ],
        },
        {
          subTitle: "Life cycle of a coral polyp",
          bullets: [
            "Polyps reproduce **asexually by budding** — a new polyp grows beside the parent.",
            "**Sexually** by synchronised release of huge numbers of eggs and sperm into the water (spawning).",
            "Fertilised eggs float to the surface and become **planktonic larvae**.",
            "Larvae **swim towards light**, feed, grow and are carried by currents, then descend and **attach to a hard surface**, growing into a polyp.",
          ],
        },
        {
          subTitle: "Migration",
          bullets: [
            "Migration is regular movement from one place to another, done to **find food, find mates, reach a breeding habitat, or avoid predators**.",
            "It happens in **three dimensions**: horizontal or vertical, over metres or thousands of kilometres.",
            "**Daily vertical migration**: plankton, fish, squid and shrimp rise to the sunlight zone at night to feed and sink to the twilight zone by day to hide.",
            "**Long horizontal migration**: tuna, turtles and whales travel between feeding and breeding grounds.",
            "Navigation uses the **Earth's magnetic field**, the **position of the Sun, Moon and stars**, **olfaction** (smell), and **mental maps and landmarks**.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Write the binomial in italics (or underline it): genus capitalised, species lower case.",
            "Giving bacteria a nucleus. They have none — that is the whole point of the comparison.",
            "Pentaradial symmetry belongs to echinoderms, not crustaceans; crustaceans have two pairs of antennae.",
            "Kelp has no roots, stems or leaves in the botanical sense — say holdfast, stipe and blade.",
          ],
        },
      ],
    },
  ],
};

export const MARINE_SCIENCE_CHAPTER_3 = chapterThree;
