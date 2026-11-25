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
    src: "ms6-coastal-protection.webp",
    alt: "A storm surge breaking into foam against a band of mangrove roots while houses, boats and fields behind the green fringe stay dry",
    caption: "A wall, a nursery and a harbour",
  },
  {
    src: "ms6-ecotourism-divers.webp",
    alt: "A small guided group of scuba divers hovering above a healthy reef with hands away from the coral, a mooring block and buoy line beside them",
    caption: "Tourism that pays for its own protection",
  },
]);

const panelB = msPanel([
  {
    src: "ms6-trawler-bycatch.webp",
    alt: "A trawler hoisting a heavy green net onto its wet steel deck, the catch spilling onto a sorting table where crew in oilskin hoods separate target fish from rays, a small shark and a turtle",
    caption: "Efficient, and it shows",
  },
  {
    src: "ms6-fish-farm-cages.webp",
    alt: "Circular floating net cages on calm coastal water joined by a plastic walkway, a feeding machine on the rim and a worker in yellow overalls lifting a mesh panel",
    caption: "Relief for wild stocks, pressure of its own",
  },
]);

const panelC = msPanel([
  {
    src: "ms6-oil-spill-boom.webp",
    alt: "Orange floating containment booms corralling a rainbow-sheened oil slick on a dark sea while a skimmer vessel pumps it up and a helicopter sprays dispersant nearby",
    caption: "Contain, skim, disperse, burn",
  },
  {
    src: "ms6-microplastics-beach.webp",
    alt: "A gloved hand holding a magnifying loupe over damp sand thick with brightly coloured plastic fragments, with faded fishing line and a bleached bottle behind",
    caption: "Small enough for plankton to eat",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "Human Influences on the Marine Environment",
  intro: `The ocean gives food, income, protection and energy, and each use has a way of damaging the system that provides it.\n\nMarks come from balance: name the benefit, the damage, the strategy, then what the strategy costs.`,
  subheadings: [
    {
      title: "What We Take, and What It Costs",
      body: `### Importance First, Then Impact

Marine ecosystems matter through **recreation and tourism, wood and building material, coastal protection, food supply, medicines, fisheries, nursery areas for juveniles of commercially and ecologically important species, and medicinal plants**.

Human impacts are **recreation** (noise and light pollution, litter and plastics, trampling, collecting organisms as souvenirs), **tourist boats and diving**, **land reclamation for resorts**, **infrastructure building**, **removal of resources** (dredging, logging mangroves), **blast fishing**, **shrimp farms** and **oil spills**.

Species with **declining populations that may become extinct** are **endangered species**.

A **sustainable** resource is one we can keep using **at the current rate**, **without damaging the environment**, and **without it running out**.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Tourism and ecotourism",
          bullets: [
            "Tourism is **socio-economically important**: employment and income for the area, better infrastructure for local communities.",
            "**Ecotourism** is ecologically sustainable tourism focused on experiencing natural areas, encouraging **environmental and cultural understanding, appreciation and conservation**.",
            "**Positives**: tourists want the environment preserved, **Marine Protected Areas (MPAs)** are created, conservation organisations get involved. **Negatives**: competition for land or resources, pollution, damage to sensitive ecosystems, organisms removed to sell, behavioural disturbance of wildlife.",
            "Study the **Galápagos Islands**, Australia's **Great Barrier Reef** or a local site. Reduce impact through **education, legislation and strategic planning**, renewable energy and resources, limited water use, **bans on single-use plastics**, limited motorised transport.",
          ],
        },
      ],
    },
    {
      title: "Fisheries and Aquaculture",
      body: `### Catching, and Farming

Marine organisms are a major source of **food and income**, so fisheries carry social as well as economic weight.

**Increasing human population means fisheries risk being over-harvested and becoming unsustainable**.

**Navigational aids** for finding and keeping a catch: **chart, compass or compass rose, GPS, sonar, radar**.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Methods and their damage",
          bullets: [
            "**Netting and trapping**: cast netting, trawling (pelagic, beam), seine nets (purse seine), tangle nets (gill nets, drift nets), basket traps. **Angling**: line fishing (trolling, longlining), rod fishing (pole and line, including bait fishing).",
            "**Trawling** scours the seabed and takes **bycatch**; **drift and gill nets** entangle turtles, birds and mammals; **blast fishing** destroys reef structure; **shrimp farms** often replace mangroves.",
            "**Fish aggregating devices (FADs)**: floating objects gather fish so a vessel can encircle a dense shoal cheaply. Cost: heavy **bycatch of juveniles, sharks and turtles**, plus lost gear that keeps fishing as ghost nets.",
          ],
        },
        {
          subTitle: "Sustainable harvesting and aquaculture",
          bullets: [
            "**Restrict boat size, net type and mesh size** so juveniles escape and breed; **quotas and licences** cap catch and fleet; **closed seasons** protect spawning; **MPAs** are no-take zones that rebuild stocks; **international agreements** stop one fleet undoing another's limits. This keeps stocks **at levels that do not affect food chains** and fisheries open **for future generations**.",
            "Aquaculture farms **kelp, salmon, grouper, shrimp, mussel, oyster and sea cucumber**, adding to global food production and **reducing pressure on wild fisheries**, though it can damage ecosystems itself. **Open systems** use cages and nets at sea; **closed systems** use tanks on land.",
            "Method: source **broodstock**; hold **temperature, salinity, light, pH and oxygen** steady; match feed **protein and lipid** to the species; clean the water by **flow rate, filtering waste or moving cages**; **size-sort and feed regularly** to stop cannibalism; control **parasites, disease and predators** with **low stocking densities, antibiotics or cleaner species**; keep the **fastest growers as new broodstock**.",
            "Farming **endangered species** can **restock damaged habitats**, notably **mangrove forests and coral reefs**.",
          ],
        },
      ],
    },
    {
      title: "Energy, Pollution, Eutrophication and a Changing Climate",
      body: `### Four Ways Chemicals and Heat Get In

**Oil** lies under the seabed as a **non-renewable fossil fuel**. It is **combusted as a fuel, releasing carbon dioxide**, and **made into plastics**; it is extracted and shipped worldwide, so **spill risk travels with it**.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Oil spills and ocean energy",
          bullets: [
            "**MARPOL** (International Convention for the Prevention of Pollution from Ships) sets ship build and practice: **double hulls** cut leak risk after a collision, holds may only be washed at **special collection sites in port**, and **sewage and garbage disposal are controlled**.",
            "Spill impacts, three only: oil **coats the fur of mammals and feathers of birds**; organisms are **poisoned by ingesting it**; **food chains are disrupted by affecting producers**.",
            "Clean-up: **booms** contain, **skimmers** remove, **dispersant sprays** break it up, **controlled burning** takes it away — each trades one harm for another, since dispersants are toxic and burning adds CO₂.",
            "**Fossil fuels** — for: **constant supply unaffected by weather, energy dense, relatively cheap, stable to transport and use**. Against: **non-renewable, release CO₂ and damaging gases, environmental damage from extraction, increasingly hard to extract**.",
            "**Ocean renewables** (wind, wave, tidal) — for: **infinite source, less CO₂, less reliance on fossil fuels**. Against: **high initial cost, few suitable sites, undersea cables, seabed damage, weather damage to turbines, marine life caught in turbines, maintenance, conflict with tourism if visible**.",
          ],
        },
        {
          subTitle: "Plastics and eutrophication",
          bullets: [
            "Plastics break down **very slowly**, and as they do they release **toxins and tiny fragments called microplastics**.",
            "Impacts: **microplastics taken up by plankton enter food chains**; **large plastics ingested by animals can cause starvation**; **plastics entangle animals and can cause death**. **Gyres** trap floating debris into **garbage patches**, the **Great Pacific Garbage Patch** being the largest. Fixes: **legislation** (ban, charge or tax single-use plastics), **education**, **reduce, reuse, recycle**.",
            "**Eutrophication**: fertilisers raise yields and many are **water soluble**, so they **run off into the ocean**, and **untreated sewage** does the same — **nitrogen and phosphorus rise → algal bloom → algae die → decomposers increase → their aerobic respiration rises → dissolved oxygen falls → organisms needing oxygen die**.",
          ],
        },
        {
          subTitle: "Climate change and conservation",
          bullets: [
            "Regional climates changed greatly between **335 million years ago and today** in **CO₂ level and temperature**. Methane and CO₂ pollution drives the **enhanced greenhouse effect** and **climate change**; more atmospheric CO₂ makes sea water **warmer** and **lower in pH**.",
            "The ocean **absorbs heat**, stabilising global temperature while warming itself, and **sea-level rise has two causes: thermal expansion of sea water and melting of land-based ice**. Melting floating sea ice adds essentially nothing.",
            "Impacts: **sea-level rise with loss of habitat and land, coral bleaching, decreased dissolved oxygen, changed distribution and migration patterns, loss of species, more extreme weather**.",
            "Conserving **species richness** uses **sustainable harvesting of wild species, aquaculture of commercial and endangered species, national marine parks and MPAs**; projects include **coral farming for damaged reefs, protecting turtle nests and rearing turtles for release, culling invasive lionfish**.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "*Impacts* includes the beneficial ones, and *evaluate* needs both sides plus a judgement. Sustainability is marked on all three clauses: current rate, no damage, no running out.",
            "Pair each fishing method with its specific damage — 'beam trawling scours the seabed' scores, 'trawling is bad' does not. Closed seasons protect **spawning adults**, not the seabed.",
            "Write eutrophication as its ordered chain; stopping at 'algae grow' earns one mark.",
            "Sea level comes from thermal expansion and **land-based** ice, not melting sea ice.",
          ],
        },
      ],
    },
  ],
};

export const MARINE_SCIENCE_CHAPTER_6 = chapterSix;
