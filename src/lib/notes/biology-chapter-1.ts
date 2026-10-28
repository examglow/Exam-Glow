import type { Chapter } from "./types";

const diagramStyle = `
  <style>
    .bg{fill:#20262d}.panel{fill:#272f38;stroke:#3d4854;stroke-width:2}
    .main{fill:#172f2d;stroke:#42c99a;stroke-width:3}.blue{fill:#172d3b;stroke:#54c6e8;stroke-width:3}
    .pink{fill:#382631;stroke:#ee7fa3;stroke-width:3}.gold{fill:#393323;stroke:#efc263;stroke-width:3}
    .purple{fill:#302a40;stroke:#aa91f5;stroke-width:3}.line{stroke:#aab5c1;stroke-width:3;fill:none}
    .title{fill:#f5f7fa;font:700 23px system-ui,sans-serif}
    .label{fill:#eef2f6;font:700 17px system-ui,sans-serif}
    .small{fill:#c2ccd5;font:14px system-ui,sans-serif}
    .accent{fill:#61d5aa;font:700 16px system-ui,sans-serif}
  </style>`;

function svgDiagram(title: string, height: number, content: string) {
  return `:::svg[${title}]\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 ${height}" width="100%" height="auto" role="img" aria-label="${title}">${diagramStyle}<rect class="bg" width="900" height="${height}" rx="22"/>${content}</svg>\n:::`;
}

const IMG = "/notes/biology";

/** Dark panel that mirrors the reference page: artwork sits on near-black, caption below. */
function figurePanel(inner: string, caption = "") {
  return `:::raw
<div class="overflow-hidden rounded-2xl bg-[#1b1d1f] px-5 py-6 sm:px-8 sm:py-8">
  ${inner}
  ${caption ? `<p class="mt-5 text-center text-[12.5px] text-zinc-400">${caption}</p>` : ""}
</div>
:::`;
}

const tile = (src: string, alt: string) =>
  `<div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/${src}" alt="${alt}" loading="lazy" class="aspect-square w-full object-cover" /></div>`;

const captioned = (src: string, alt: string, label: string, tint: string) =>
  `<figure class="m-0"><div class="overflow-hidden rounded-xl ${tint}"><img src="${IMG}/${src}" alt="${alt}" loading="lazy" class="aspect-square w-full object-cover" /></div><figcaption class="mt-2.5 text-center text-[13px] font-bold text-zinc-100">${label}</figcaption></figure>`;

const vertebrateCardRow = figurePanel(
  `<div class="grid grid-cols-2 gap-4 sm:grid-cols-5">
    ${captioned("vert-mammal.webp", "Cat", "Mammals", "bg-[#e0245e]")}
    ${captioned("vert-fish.webp", "Fish", "Fish", "bg-[#e8567f]")}
    ${captioned("vert-reptile.webp", "Sea turtle", "Reptiles", "bg-[#e8b83c]")}
    ${captioned("vert-bird.webp", "Barn owl", "Birds", "bg-[#a8e02c]")}
    ${captioned("vert-amphibian.webp", "Frog", "Amphibians", "bg-[#28b4e8]")}
  </div>`,
);

const kingdomTileRow = figurePanel(
  `<div class="grid grid-cols-2 gap-4 sm:grid-cols-5">
    ${tile("king-prokaryote.webp", "Bacterium")}
    ${tile("king-protoctist.webp", "Amoeba")}
    ${tile("king-fungi.webp", "Mushrooms")}
    ${tile("king-plant.webp", "Leaves")}
    ${tile("king-animal.webp", "Group of animals")}
  </div>`,
);

const lionPanel = figurePanel(
  `<div class="flex flex-col items-center gap-5">
    <p class="text-center text-[15px] text-zinc-300"><span class="font-bold text-zinc-50">Latin</span> name, <span class="font-bold text-zinc-50">scientific</span> name, or <span class="font-bold text-zinc-50">botanical</span> name</p>
    <div class="grid w-full max-w-lg grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4">
      <p class="text-right text-[15px] italic leading-snug text-zinc-300">Genus<br /><span class="text-[12.5px] not-italic text-zinc-500">the "surname"</span></p>
      <p class="text-center text-[30px] font-black leading-none text-[#e0245e] sm:text-[38px]">Panthera leo</p>
      <p class="text-left text-[15px] italic leading-snug text-zinc-300">Species<br /><span class="text-[12.5px] not-italic text-zinc-500">the "first name"</span></p>
    </div>
    <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/binomial-lion.webp" alt="Lion" loading="lazy" class="h-40 w-40 object-cover" /></div>
  </div>`,
);

const virusPanel = figurePanel(
  `<div class="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
    <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/virus-structure.webp" alt="Cross-section of a virus showing envelope, protein coat and genetic material" loading="lazy" class="h-56 w-56 object-cover" /></div>
    <ul class="m-0 space-y-2.5 p-0 text-[14px] list-none">
      <li class="flex items-center gap-2.5"><span class="size-2.5 shrink-0 rounded-full bg-[#54c6e8]" />DNA or RNA</li>
      <li class="flex items-center gap-2.5"><span class="size-2.5 shrink-0 rounded-full bg-[#efc263]" />Envelope</li>
      <li class="flex items-center gap-2.5"><span class="size-2.5 shrink-0 rounded-full bg-[#ee7fa3]" />Protein coat</li>
      <li class="pt-1 text-[12.5px] text-zinc-500">No mitochondria. No ribosomes.</li>
    </ul>
  </div>`,
);

const keyTreePanel = figurePanel(
  `<div class="flex flex-col items-center gap-4">
    <p class="rounded-lg bg-[#6f63d6] px-5 py-2 text-[15px] font-bold text-white">Vertebrate Classes</p>
    <div class="h-6 w-0.5 bg-zinc-600" />
    <div class="hidden h-0.5 w-full max-w-xl bg-zinc-600 sm:block" />
    <div class="grid w-full gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)]">
      <div class="flex flex-col items-center gap-2">
        <p class="text-[12.5px] italic text-zinc-400">Has fur</p>
        <div class="size-20 overflow-hidden rounded-full ring-4 ring-[#e8b83c]"><img src="${IMG}/vert-mammal.webp" alt="" loading="lazy" class="h-full w-full object-cover object-top" /></div>
        <p class="text-[13px] font-bold text-zinc-100">Mammals</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <p class="text-[12.5px] italic text-zinc-400">No fur</p>
        <div class="grid w-full grid-cols-2 gap-4">
          <div class="flex flex-col items-center gap-1.5">
            <p class="text-[12px] italic text-zinc-500">External fertilisation, gills in adults</p>
            <div class="size-16 overflow-hidden rounded-full ring-4 ring-[#54c6e8]"><img src="${IMG}/vert-fish.webp" alt="" loading="lazy" class="h-full w-full object-cover" /></div>
            <p class="text-[12.5px] font-bold text-zinc-100">Fish</p>
          </div>
          <div class="flex flex-col items-center gap-1.5">
            <p class="text-[12px] italic text-zinc-500">No gills in adults, moist skin</p>
            <div class="size-16 overflow-hidden rounded-full ring-4 ring-[#ee7fa3]"><img src="${IMG}/vert-amphibian.webp" alt="" loading="lazy" class="h-full w-full object-cover" /></div>
            <p class="text-[12.5px] font-bold text-zinc-100">Amphibians</p>
          </div>
          <div class="flex flex-col items-center gap-1.5">
            <p class="text-[12px] italic text-zinc-500">Internal fertilisation, dry scales</p>
            <div class="size-16 overflow-hidden rounded-full ring-4 ring-[#e8b83c]"><img src="${IMG}/vert-reptile.webp" alt="" loading="lazy" class="h-full w-full object-cover" /></div>
            <p class="text-[12.5px] font-bold text-zinc-100">Reptiles</p>
          </div>
          <div class="flex flex-col items-center gap-1.5">
            <p class="text-[12px] italic text-zinc-500">Feathers</p>
            <div class="size-16 overflow-hidden rounded-full ring-4 ring-[#ee7fa3]"><img src="${IMG}/vert-bird.webp" alt="" loading="lazy" class="h-full w-full object-cover object-top" /></div>
            <p class="text-[12.5px] font-bold text-zinc-100">Birds</p>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  "Each fork offers two contrasting features. Follow the branch that matches until one group is left.",
);

const classificationDiagram = svgDiagram(
  "Classification hierarchy",
  190,
  `<text class="title" x="450" y="34" text-anchor="middle">From broad group to single species</text>
    <g text-anchor="middle">
      <rect class="panel" x="28" y="66" width="110" height="52" rx="11"/><text class="label" x="83" y="98">Kingdom</text>
      <rect class="panel" x="151" y="66" width="110" height="52" rx="11"/><text class="label" x="206" y="98">Phylum</text>
      <rect class="panel" x="274" y="66" width="110" height="52" rx="11"/><text class="label" x="329" y="98">Class</text>
      <rect class="panel" x="397" y="66" width="110" height="52" rx="11"/><text class="label" x="452" y="98">Order</text>
      <rect class="panel" x="520" y="66" width="110" height="52" rx="11"/><text class="label" x="575" y="98">Family</text>
      <rect class="main" x="643" y="66" width="110" height="52" rx="11"/><text class="label" x="698" y="98">Genus</text>
      <rect class="blue" x="766" y="66" width="110" height="52" rx="11"/><text class="label" x="821" y="98">Species</text>
    </g>
    <path class="line" d="M139 92h10m112 0h10m112 0h10m112 0h10m112 0h10m112 0h10"/>
    <text class="small" x="450" y="156" text-anchor="middle">King Philip Came Over For Good Soup</text>`,
);

const plantClassificationDiagram = svgDiagram(
  "Plant classification at a glance",
  280,
  `<text class="title" x="450" y="38" text-anchor="middle">Reproductive structures, then seed-leaf features</text>
    <rect class="panel" x="342" y="59" width="216" height="48" rx="12"/><text class="label" x="450" y="90" text-anchor="middle">Plants</text>
    <path class="line" d="M450 107v24M450 131H226v21m224-21h224v21"/>
    <rect class="blue" x="112" y="152" width="228" height="48" rx="12"/><text class="label" x="226" y="183" text-anchor="middle">Ferns · spores, no seeds</text>
    <rect class="main" x="510" y="152" width="228" height="48" rx="12"/><text class="label" x="624" y="183" text-anchor="middle">Flowering plants · seeds</text>
    <path class="line" d="M624 200v20M624 220H350v16m274-16h274v16"/>
    <rect class="gold" x="238" y="236" width="224" height="38" rx="11"/><text class="small" x="350" y="261" text-anchor="middle">Monocot · one cotyledon</text>
    <rect class="purple" x="562" y="236" width="224" height="38" rx="11"/><text class="small" x="674" y="261" text-anchor="middle">Dicot · two cotyledons</text>`,
);

const chapterOne: Chapter = {
  number: 1,
  title: "Characteristics and Classification of Living Organisms",
  intro: `Everything alive shares a short list of processes, and everything alive can be sorted into a hierarchy of groups.\n\nThis chapter covers both halves: the seven life processes summarised by **MRS GREN**, then the classification ladder and binomial naming.\n\nIt continues with the five kingdoms, the animal and plant groups you are expected to recognise on sight, and the viruses that sit outside the whole system.`,
  subheadings: [
    {
      title: "Characteristics of Living Organisms",
      body: `### The Age-Old Acronym: MRS GREN\nSeven processes together define life.\n\nAn object that performs none of them — a rock, a car, a virus particle — is not alive.`,
      groups: [
        {
          bullets: [
            "**Movement:** an action by an organism or part of an organism that causes a change of position or place.",
            "**Respiration:** the chemical reactions inside cells that break down nutrient molecules and release energy for metabolism.",
            "**Sensitivity:** the ability to detect and respond to changes in the internal or external environment.",
            "**Growth:** a permanent increase in size and dry mass.",
            "**Reproduction:** the process that produces offspring genetically identical to, or different from, the parent organism.",
            "**Excretion:** the removal of the waste products of metabolism and of substances present in excess of requirements.",
            "**Nutrition:** the taking in of materials for energy, growth and development.",
          ],
        },
      ],
      examinerTips: [
        "Respiration is a chemical reaction, not breathing. Defining it as breathing scores nothing.",
        "In an example question, name the process and point to the evidence: a shoot bending is movement, detecting the light and turning is sensitivity.",
      ],
      commonMistakes: [
        "Calling faeces an excretory product. Faeces were never part of the metabolism; removing them is egestion.",
        "Saying growth is any increase in size. It must be permanent, and it is measured as dry mass so that water uptake is excluded.",
      ],
      recap: [
        "State the seven characteristics of living organisms represented by MRS GREN. [7]",
        "Explain the difference between respiration and breathing. [2]",
        "A plant shoot bends towards a light source. Name two life processes shown and identify the evidence for each. [4]",
      ],
    },
    {
      title: "Concept and Uses of Classification System",
      body: `### Sequence of Classification\nOrganisms are sorted into groups by the features they share, working from the broadest group down to the one organism in front of you.\n\n${classificationDiagram}`,
      groups: [
        {
          bullets: [
            "**Species:** a group of organisms that can reproduce with one another to produce fertile offspring.",
            "**Sequence of classification:** Kingdom → Phylum → Class → Order → Family → Genus → Species.",
            "**Acronym:** King Philip, Come Over For Good Soup.",
          ],
        },
        {
          subTitle: "The Binomial Nomenclature",
          bullets: [
            "The **binomial system of naming species** is an internationally agreed scheme in which each scientific name has two parts: the genus and the species.",
            "The format is **Genus species**. The genus is capitalised, the species is not.",
            "The binomial is typed in *italics*, or each word is underlined when written by hand.",
            "Classification shows **evolutionary relationships** between organisms.",
            "Scientists also compare DNA base sequences. The more similar the sequences, the more closely related the two organisms are.",
            lionPanel,
          ],
        },
      ],
      examinerTips: [
        "A species definition is only complete if it mentions fertile offspring, not just reproduction.",
        "Check the format before you hand in: capital genus, lower-case species, italics throughout.",
      ],
      commonMistakes: [
        "Capitalising both words, or putting the species name first.",
        "Grouping organisms on appearance alone. Look-alikes are not automatically the same species.",
      ],
      recap: [
        "Define a species. [2]",
        "Write the binomial name *Panthera leo* in the correct format and identify the genus. [2]",
        "State how DNA base sequences can help show how closely related two organisms are. [2]",
      ],
    },
    {
      title: "Dichotomous Keys",
      body: `**Dichotomous keys** classify organisms using visible features.\n\nEach step offers a choice of two features and you follow whichever one applies; every option leads to another option, until the organism is narrowed down to its genus and species.`,
      figure: keyTreePanel,
      groups: [
        {
          bullets: [
            "Start at the first pair of contrasting statements and pick the one that describes the specimen.",
            "Follow the branch: it either names the organism or sends you to the next pair.",
            "When you write a key, split the remaining organisms into two clean groups at every step, using features that can actually be observed.",
          ],
        },
      ],
      examinerTips: [
        "The two statements in a pair must be mutually exclusive. 'Has legs' and 'has wings' can both be true, so they make a broken pair.",
        "Work the key one choice at a time, even when you already recognise the animal.",
      ],
      commonMistakes: [
        "Skipping ahead to a later pair because the answer looks obvious.",
        "Using a feature that cannot be seen on the specimen provided.",
      ],
      recap: [
        "Explain what makes a key dichotomous. [1]",
        "State two rules for writing a clear pair of statements in a dichotomous key. [2]",
      ],
    },
    {
      title: "Features of Organisms",
      body: `### The Five Kingdoms\nLiving things are sorted into five kingdoms by cell type, number of cells, cell-wall material and how they obtain their food.`,
      figure: kingdomTileRow,
      groups: [
        {
          bullets: [
            "**Animals:** multicellular ingestive heterotrophs — they eat living organisms. Ex: cat, ladybird, newt.",
            "**Plants:** multicellular photosynthetic autotrophs, with a cellulose cell wall and chloroplasts. Ex: cactus, oak tree.",
            "**Fungi:** single-celled or multicellular heterotrophs that feed saprotrophically on dead and decaying organic matter.",
            "Cell walls are not made of cellulose; most bodies are hyphae forming a mycelium, spread by spores in moist, dark, warm conditions. Ex: yeast, mushroom.",
            "**Prokaryotes (Monera):** single-celled organisms with no true nucleus and no mitochondria. Many also carry plasmids, which is why they matter in genetic engineering. Ex: *E. coli*, *Salmonella*.",
            "**Protoctists (Protists):** single-celled organisms with a nucleus; some are multicellular. Ex: *Amoeba*, seaweed.",
          ],
        },
        {
          bullets: [
            "Protoctists, fungi, plants and animals are all **eukaryotes** — they have a well-defined nucleus. Monera are **prokaryotes** — no true nucleus.",
            "Animals split into **vertebrates** (a backbone) and **invertebrates** (no backbone).",
          ],
        },
      ],
      examinerTips: [
        "Justify a kingdom with more than one feature: cellulose wall plus chloroplasts plus photosynthesis makes a plant.",
        "Never describe a bacterium as having a nucleus, however small. It has none.",
      ],
      commonMistakes: [
        "Assuming every plant cell has chloroplasts. Root hair cells do not photosynthesise and have none.",
        "Swapping the fungal chitin wall for the plant cellulose wall.",
      ],
      recap: [
        "State two features that distinguish fungi from plants. [2]",
        "Describe where the genetic material is found in a prokaryotic cell. [2]",
        "A single-celled organism has a nucleus and chloroplasts. Suggest a kingdom and explain your choice. [2]",
      ],
    },
    {
      title: "Vertebrates",
      body: `Vertebrates are the animals that possess a backbone. Five classes are examined, and each is recognised by a fixed set of features.\n\n${vertebrateCardRow}\n\n| Type of vertebrate | Features |\n| --- | --- |\n| Mammals | Fur or hair on the skin; external ears (pinnae); internal fertilisation; mammary glands; give birth to live young |\n| Reptiles | Thick, dry, scaly skin; usually four legs; internal fertilisation; soft-shelled eggs |\n| Fish | Scaly skin; streamlined body shape; external fertilisation; eggs with no hard shell, only a soft jelly coating |\n| Amphibians | Smooth, moist skin; external fertilisation; soft eggs; gills and lungs; can live on land and in water; most have four legs |\n| Birds | Feathers on the body and scales on the legs; constant internal body temperature; hard-shelled eggs; internal fertilisation; hatch from eggs |`,
      groups: [],
      examinerTips: [
        "Describe features, not habitat. 'Lives in water' identifies nothing; gills, fins and scales do.",
        "Use 'usually' where a class has exceptions, especially around egg-laying and live birth.",
      ],
      recap: [
        "State two features that identify a mammal. [2]",
        "Give two differences between amphibians and reptiles. [2]",
        "A vertebrate has feathers and lays hard-shelled eggs. Identify its group. [1]",
      ],
    },
    {
      title: "Arthropods",
      body: `Arthropods are the largest group of **invertebrates** — organisms with no backbone. Every arthropod shares three standard features:\n\n1. An exoskeleton\n2. Jointed legs\n3. A segmented body\n\n| Type of arthropod | Number of legs | Body parts | Wings | Antennae |\n| --- | --- | --- | --- | --- |\n| Crustacean | 5 pairs (one modified as claws) | All segments tucked under a carapace | None | 2 pairs |\n| Myriapod | Many | Many | None | 1 pair |\n| Insect | 3 pairs | 3: head, thorax, abdomen | 2 pairs (one or both may be vestigial) | 1 pair |\n| Arachnid | 4 pairs | 2: cephalothorax and abdomen | None | None |`,
      groups: [],
      examinerTips: [
        "Count pairs of legs, not legs. Six legs is three pairs, which means an insect.",
        "Insects have three body regions and arachnids have two; name the regions when body structure is asked for.",
      ],
      commonMistakes: [
        "Calling a spider an insect. Four pairs of legs and no antennae make it an arachnid.",
        "Saying all arthropods have wings. Wings belong to many insects only.",
      ],
      recap: [
        "State the three features shared by all arthropods. [3]",
        "An arthropod has four pairs of legs and no antennae. Identify its group. [1]",
        "Give two differences between insects and crustaceans. [2]",
      ],
    },
    {
      title: "Classification of Plants",
      body: `In IGCSE Biology the plant kingdom is divided into **ferns** and **flowering plants**, and the flowering plants split again into monocotyledons and dicotyledons.\n\n${plantClassificationDiagram}`,
      groups: [
        {
          subTitle: "Ferns:",
          bullets: [
            "Do not produce flowers or seeds.",
            "They are plants with roots, stems and feathery leaves called fronds.",
            "They reproduce by spores, produced on the undersides of the fronds.",
          ],
        },
        {
          subTitle: "Flowering plants:",
          bullets: [
            "They are plants with roots, stems and leaves.",
            "They reproduce sexually through flowers and seeds.",
            "Seeds are produced inside the ovary of the flower.",
          ],
        },
      ],
      figure:
        "| Monocotyledons | Dicotyledons |\n| --- | --- |\n| One cotyledon / one-seed leaf | Two cotyledons / two-seed leaf |\n| Parallel veins | Branching veins |\n| Long, narrow leaf | Broad leaf |\n| Number of petals is a multiple of 3 | Number of petals is a multiple of 4 or 5 |\n| Scattered vascular bundles | Vascular bundles in a ring |",
      examinerTips: [
        "Work with 'usually' on veins, roots and petal counts, and back a classification with more than one feature.",
        "A fern is still a plant even though it never flowers — it reproduces by spores.",
        "**Tip:** differentiating monocotyledons and dicotyledons comes up frequently in multiple-choice questions.",
      ],
      recap: [
        "State how ferns reproduce. [1]",
        "Give two differences between monocotyledons and dicotyledons. [2]",
        "A flowering plant has one cotyledon and parallel leaf veins. Classify it and give a second supporting feature. [2]",
      ],
    },
    {
      title: "Viruses",
      body: `Viruses are not part of any classification system, because they are **not considered living things**.\n\n- They do not carry out the seven life processes for themselves; instead they take over a host cell's metabolic pathways to make multiple copies of themselves.\n- A virus consists of **genetic material (RNA or DNA) inside a protein coat**.\n- They have no cytoplasm, no nucleus, no mitochondria and no ribosomes.`,
      figure: virusPanel,
      groups: [],
      examinerTips: [
        "Label both the genetic material and the protein coat. Do not add cell structures a virus does not have.",
        "Say that viruses reproduce only inside a host cell — they cannot copy themselves independently.",
      ],
      commonMistakes: [
        "Calling a virus a bacterium. Bacteria are living prokaryotic cells; a virus is a non-cellular particle.",
        "Listing a nucleus or cytoplasm as virus structure. Neither exists in a virus.",
      ],
      recap: [
        "Name the two structures found in all viruses. [2]",
        "Explain why a virus cannot reproduce independently. [2]",
        "State one difference between a virus and a bacterium. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_1: Chapter = chapterOne;
