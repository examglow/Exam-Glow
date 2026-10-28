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

const stemTransportArt = artPanel([
  {
    src: "ch08-celery-dye.webp",
    alt: "Celery stem that has drawn coloured water upward",
    caption: "Water rising through a stem",
  },
  {
    src: "ch08-stem-cross-section.webp",
    alt: "Cross section of a stem showing vascular bundles",
    caption: "Vascular bundles in a stem",
  },
]);

const potometerArt = artPanel([
  {
    src: "ch08-potometer.webp",
    alt: "A potometer: a leafy shoot sealed into a water-filled tube with an air bubble in a capillary",
    caption: "A potometer measuring water uptake",
  },
]);

const transpirationArt = artPanel([
  {
    src: "ch08-transpiration.webp",
    alt: "Leaves releasing water vapour into the air",
    caption: "Water vapour leaving the leaf",
  },
]);

/** One stage of the transport pathway: bold head word plus a short qualifier. */
function stage(x: number, y: number, w: number, h: number, cls: string, head: string, sub: string) {
  return (
    `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="12"/>` +
    `<text class="label" x="${x + w / 2}" y="${y + 32}" text-anchor="middle">${head}</text>` +
    `<text class="small" x="${x + w / 2}" y="${y + 56}" text-anchor="middle">${sub}</text>`
  );
}

const vascularTissuesDiagram = svgDiagram(
  "Xylem and phloem compared",
  `<text class="title" x="450" y="36" text-anchor="middle">Two vascular tissues, two different jobs</text>
  ${tileRow(
    [
      {
        title: "Xylem: dead water pipes",
        cls: "blue",
        body:
          "Vessel elements in end-to-end files\n" +
          "Cross walls break down, leaving a tube\n" +
          "Walls thickened and waterproofed with lignin\n" +
          "Pits let water pass sideways to neighbours\n" +
          "Mature cells are dead: no cytoplasm, no nucleus\n" +
          "Lignin also stiffens the stem and the root",
      },
      {
        title: "Phloem: living food pipes",
        cls: "main",
        body:
          "Sieve tube elements in end-to-end files\n" +
          "End walls stay, perforated as sieve plates\n" +
          "Living, but no nucleus and few organelles\n" +
          "Companion cells beside them do the work\n" +
          "Cellulose walls, thin and never lignified\n" +
          "Carries sucrose and amino acids in solution",
      },
    ],
    62,
    { x: 24, w: 852, h: 232, gap: 16 },
  )}`,
  900,
  322,
);

const transpirationStreamDiagram = svgDiagram(
  "The transpiration stream from soil to air",
  `<text class="title" x="450" y="34" text-anchor="middle">One continuous column, pulled from the top</text>
  ${stage(24, 66, 158, 78, "panel", "Soil water", "dilute solution")}
  ${stage(197, 66, 158, 78, "blue", "Root hair", "water enters by osmosis")}
  ${stage(370, 66, 158, 78, "blue", "Xylem tube", "up the stem, one way")}
  ${stage(543, 66, 158, 78, "gold", "Leaf vein", "onto mesophyll walls")}
  ${stage(716, 66, 158, 78, "pink", "Air", "vapour out of stomata")}
  <path class="arrow" d="M184 105h11m172 0h11m172 0h11m172 0h11"/>
  <text class="small" x="450" y="188" text-anchor="middle">Evaporation from the mesophyll walls lowers their water potential, so those cells draw water back.</text>
  <text class="small" x="450" y="214" text-anchor="middle">Hydrogen bonds make water molecules cohere, so the column stretches instead of snapping under tension.</text>
  <text class="small" x="450" y="240" text-anchor="middle">Adhesion to the lignified walls stops the tube collapsing inward as the pressure inside falls.</text>
  <text class="accent" x="450" y="278" text-anchor="middle">The lift is made by evaporation at the leaf, not by any pump in the root.</text>`,
  900,
  306,
);

const potometerDiagram = svgDiagram(
  "A potometer and its controls",
  `<text class="title" x="450" y="34" text-anchor="middle">Water uptake measured as the movement of an air bubble</text>
  ${box(24, 110, 150, 76, "Reservoir", "blue")}
  <rect class="panel" x="184" y="128" width="430" height="40" rx="10"/>
  <circle class="gold" cx="300" cy="148" r="11"/>
  <text class="small" x="300" y="118" text-anchor="middle">air bubble</text>
  <path class="arrow" d="M322 148h70"/>
  <path class="line" d="M184 184h430"/>
  <text class="small" x="399" y="206" text-anchor="middle">ruler beside the capillary tube</text>
  ${box(624, 110, 242, 76, "Leafy shoot", "pink")}
  ${labelledRows(
    [
      ["Cut under water", "an air lock in the xylem would stop the plant taking up water"],
      ["Seal all joints", "petroleum jelly keeps water loss to the leaves only"],
      ["Check no leaks", "a leak adds water and the bubble stops moving forward"],
      ["Reset the bubble", "open the tap to push the bubble back to the start before each reading"],
      ["Keep conditions still", "same light, temperature and fan setting between readings"],
      [
        "Repeat and average",
        "one shoot gives variable results; several readings give a reliable rate",
      ],
    ],
    30,
    250,
    32,
  )}`,
  900,
  450,
);

const chapterEight: Chapter = {
  number: 8,
  title: "Transport in Plants",
  intro: `A plant has no heart, yet water climbs from soil to the topmost leaf of a hundred-metre tree, and sugar made in one leaf is delivered to a root or a fruit.\n\nThe answers are two tissues with opposite designs: **xylem**, dead hollow tubing pulled upwards by evaporation, and **phloem**, living tubing that pushes dissolved food from source to sink.\n\nThis chapter builds both mechanisms, then turns them into the practical skills examiners test: the potometer, the controlled experiment, and the vocabulary of transpiration.`,
  subheadings: [
    {
      title: "Xylem and Phloem: Two Vascular Tissues",
      body: `### Where the tissues sit\n\nXylem and phloem run together through the plant as **vascular bundles**, forming a continuous system from root tip to leaf margin to young stem.\n\nIn a dicotyledonous stem the bundles are arranged in a ring, with xylem towards the inside and phloem towards the outside; in a monocotyledonous stem they are scattered.\n\nIn a leaf the bundles become the veins, and every vein ends within a few cells of a photosynthesising mesophyll cell.\n\n### Why the two tissues are built so differently\n\nXylem only has to conduct water and resist being squashed, so it can afford to be dead: a hollow, lignified pipe is both cheap and strong.\n\nPhloem has to move a concentrated solution against a pressure gradient, which requires living cytoplasm and a nearby supply of ATP.\n\nThat single difference explains almost every structural contrast you are asked to describe.\n\n### What a Bundle Contains Besides Tubing\n\nA vascular bundle is more than two pipe systems: it also carries **sclerenchyma fibres**, whose lignified walls give the bundle its strength, and phloem parenchyma beside the sieve tubes and companion cells.\n\nWhen a question asks you to name the tissues in a bundle, credit xylem, phloem and supporting tissue as three separate answers.\n\n### Staining a Stem in Red Ink\n\nA shoot left in dilute red ink or eosin colours only the xylem, because the dye travels with the transpiration stream.\n\nA cross-section cut after a few hours shows one red point per bundle, the standard practical evidence for where xylem lies.\n\n### Arrangement Differs in Root, Stem and Leaf\n\nIn a dicot root the xylem forms a solid central cross with phloem in the gaps between its arms, whereas in a dicot stem the bundles lie in a ring.\n\nIn a leaf the bundles become veins: the midrib carries the largest, and finer veins branch across the lamina so that no mesophyll cell lies far from a xylem ending.\n\n${vascularTissuesDiagram}`,
      figure: stemTransportArt,
      groups: [
        {
          subTitle: "Xylem: structure matched to function",
          bullets: [
            "**Lignin in the walls:** waterproof and extremely stiff, so the tube resists the negative pressure inside it instead of collapsing.",
            "**No cross walls at maturity:** the end walls and cytoplasm break down, producing an uninterrupted lumen with minimal friction to flow.",
            "**Pits:** thin un-lignified patches where adjacent vessels touch, allowing water to move sideways between tubes and around a blocked one.",
            "**Dead at the time of use:** no energy is spent by the plant to keep xylem functioning, which is why water can rise at night without respiration.",
            "**Narrow diameter:** capillary action helps hold water in the tube and limits the weight of the column each stem must carry.",
            "**Built from many cells, not one:** mature xylem is a tube of short cells laid end to end, so its length far exceeds the size of any single cell.",
            "**Heartwood and sapwood:** the newest outer xylem conducts water while the older inner xylem is blocked and gives support only, so a trunk keeps working as it widens.",
          ],
        },
        {
          subTitle: "Phloem: structure matched to function",
          bullets: [
            "**Sieve tube elements:** living cells arranged end to end whose end walls are perforated, forming a **sieve plate** that lets solution pass.",
            "**No nucleus, thin cellulose wall, few organelles:** space is given over to cytoplasm and flow rather than to cell maintenance.",
            "**Companion cells:** have a nucleus, many mitochondria and more ribosomes; they carry out respiration, protein synthesis and the loading work for the sieve tube by shared cytoplasmic connections.",
            "**Sap contains more than water:** sucrose, amino acids, hormones and some mineral ions, so the tube must be alive and selectively loaded.",
            "**Bidirectional flow:** different bundles can move sap in different directions at the same moment, because each source-to-sink pair has its own gradient.",
            "**Phloem lies towards the outside:** in a stem the sieve tubes sit in the bark, external to the xylem, which is why removing a ring of bark interrupts translocation but not water uptake.",
          ],
        },
        {
          subTitle: "Comparison the examiners ask for",
          bullets: [
            "| Feature | Xylem | Phloem |\n| --- | --- | --- |\n| Living or mature state | Dead cells | Living cells |\n| Wall material | Cellulose strengthened with lignin | Cellulose only, thin |\n| Cross walls | Absent, forming an open tube | Present as perforated sieve plates |\n| Substances carried | Water and dissolved mineral ions | Sucrose, amino acids, hormones |\n| Direction of movement | Upwards only, root to shoot | From source to sink, either direction |\n| Driving force | Tension from transpiration | Hydrostatic pressure from loading |\n| Energy from the plant | Not required | Required (ATP for active loading) |",
            "**Both run the whole plant:** xylem and phloem are continuous from root tip to leaf margin, so a cut at any point interrupts both systems.",
            "**How to tell the two apart in a practical:** red ink stains the conducting xylem, while a stem with its bark ringed swells above the cut because translocation in the phloem has been blocked.",
          ],
        },
      ],
      examinerTips: [
        "Name the tissue **and** the feature. 'Lignin' on its own earns nothing; 'walls strengthened with lignin, so the xylem does not collapse under tension' does.",
        "For a structure question on phloem, always include both halves of the pairing: sieve tube element **and** companion cell.",
        "A description of the sieve tube alone loses the mark for the companion cell's role.",
        "When asked 'describe how xylem is adapted to its function', answer in pairs: feature, then what that feature achieves. Four pairs beat eight bare features.",
        "If a staining result is shown, name the tissue **and** the reason.",
        "The red ink was carried in the transpiration stream, so the stained cells are xylem. Naming the tissue alone earns at most one mark.",
      ],
      commonMistakes: [
        "Saying xylem transports mineral ions only 'upwards because the roots push them'. Root pressure exists but is small; the main movement is a pull from the leaf.",
        "Describing phloem vessels as hollow tubes with no cytoplasm. They are living and contain cytoplasm; only the nucleus and most organelles are lost.",
        "Confusing sieve plate with cross wall. The phloem cross wall is still there, it is perforated.",
        "Writing that translocation in phloem is driven by transpiration. Transpiration drives the xylem stream only.",
      ],
      recap: [
        "State two differences between the structure of xylem and the structure of phloem. [4]",
        "Explain why lignin in the wall of a xylem vessel is useful to the plant. [2]",
        "Name the cells that carry out the metabolic work on behalf of a sieve tube element and state one feature that makes them suited to this role. [2]",
        "Describe the pathway of water from a root hair cell to the surface of a mesophyll cell. [4]",
      ],
    },
    {
      title: "Water Enters the Root: Pathways and the Casparian Strip",
      body: `### The root hair zone\n\nAbsorption happens in the **root hair region**, behind the growing tip.\n\nEach root hair is a long cytoplasmic extension of an epidermal cell, and the population of hairs gives the root an enormous surface area relative to its volume.\n\nSoil water is a dilute solution;\n\nThe cytoplasm of the root hair, with its dissolved solutes, has a **lower water potential**, so water moves in by **osmosis** across the partially permeable surface membrane.\n\n### Mineral ions come in the other direction\n\nIons such as nitrate, phosphate, potassium and magnesium are often at a lower concentration in the soil solution than in the root cells.\n\nThey are therefore taken up by **active transport** from hair cells, using ATP from the many mitochondria in the cortex cells behind them.\n\nBecause this needs energy, waterlogging or soil compaction that starves roots of oxygen reduces ion uptake as well.\n\n### Three routes through the cortex\n\nOnce inside the epidermis, water and dissolved ions travel towards the central stele by any of three pathways:\n\nThe **apoplast** (the free space of cellulose cell walls and air spaces, no membranes crossed), the **symplast** (cytoplasm to cytoplasm through plasmodesmata, inside the cells), and the **transmembrane pathway** (repeated crossing of membranes in and out of cells).\n\nThe apoplast is the fast route. It is also the route the plant must block, because minerals leaking along walls could bypass cellular control.\n\n### The Casparian strip is the checkpoint\n\nThe innermost cortex layer, the **endodermis**, has cell walls impregnated with **suberin** in a band called the **Casparian strip**.\n\nSuberin is waterproof, so apoplast water cannot pass through the endodermal wall and is forced into the symplast by crossing a surface membrane.\n\nEvery ion reaching the xylem must therefore pass through an endodermal cell membrane, where carrier proteins decide what enters the vascular tissue.\n\nFrom the endodermis water continues into the **pericycle** and then into the **protoxylem** and **metaxylem** vessels of the stele.\n\n### Why an Upland Root Still Takes Up Water\n\nEven in fairly dry soil the root hair cytoplasm keeps a lower water potential than the soil solution, because its dissolved solutes and accumulated potassium ions stay concentrated inside it.\n\nPlants in genuinely dry habitats add to that advantage by storing water in succulent roots or by driving a taproot far below the surface.\n\n### What Waterlogging Does to Uptake\n\nFlooded or compacted soil holds little oxygen, so root cells cannot respire aerobically and the active uptake of mineral ions falls sharply.\n\nThe water potential of the root then rises, water uptake slows and the shoot wilts in waterlogged ground, a paradox examiners set as a reasoning question.\n\n### A Soil Solution Is Not Pure Water\n\nSoil water is a dilute solution of mineral ions held in a thin film around each soil particle, and root hairs reach it by growing between those particles.\n\nA dense fibrous root system therefore exploits a far larger volume of that film than a few thick roots can.\n\n### Why the Pathways Matter for a Control Question\n\nA question asking how the plant controls which ions reach the xylem is answered by the **Casparian strip** plus the carrier proteins in the endodermal membranes.\n\nSay that the strip removes the uncontrolled wall route, and the mark for reasoning is secured.\n\nA second common question asks what would be seen if the strip were removed:\n\nIons and water would leak freely along the apoplast, the xylem solution would no longer be selected, and root pressure would fall.`,
      groups: [
        {
          subTitle: "Vocabulary That Carries Marks Here",
          bullets: [
            "**Partially permeable membrane:** allows water through but restricts solute; osmosis needs one.",
            "**Water potential:** the measure of the tendency of water to move; pure water is highest, and water moves from higher to lower water potential.",
            "**Apoplast pathway:** movement through cell walls and intercellular spaces, fast and uncontrolled.",
            "**Symplast pathway:** movement through cytoplasm connected by plasmodesmata, slower and controlled by membranes.",
            "**Casparian strip:** a suberin band in the endodermal wall that blocks the apoplast route and forces water across a membrane.",
            "**Root pressure:** the positive pressure generated when minerals are actively secreted into the xylem, drawing water in with them; it can force droplets of water from a cut stem (guttation).",
            "**Selective permeability:** carrier proteins in the endodermal membranes decide which ions enter the stele, so the xylem sap is a solution the plant has chosen.",
            "**Plasmodesmata:** cytoplasmic threads through adjacent wall pits that link one symplast cell to the next, so water need not re-cross a membrane at every step.",
          ],
        },
        {
          subTitle: "Adaptations of the Root Hair Cell",
          bullets: [
            "**Long cytoplasmic extension:** greatly increases surface area for osmosis and for ion uptake.",
            "**One large vacuole:** concentrates cell sap, keeping the water potential inside low so water keeps entering.",
            "**Thin surface membrane:** short diffusion distance for ions and water.",
            "**No chloroplasts:** there is no light underground, so none are needed; respiration supplies the ATP instead.",
            "**Many mitochondria in the surrounding cortex:** provide ATP for active uptake of mineral ions.",
            "**No waxy cuticle over the hair:** a cuticle would block osmosis, so the epidermis here stays thin and permeable.",
            "**Growth between soil particles:** the tip of the hair pushes into gaps, reaching the films of water that cling to soil grains instead of waiting for rain.",
          ],
        },
      ],
      examinerTips: [
        "If a question asks about water uptake, the accepted word is **osmosis**; if it asks about mineral ion uptake, expect **active transport**. Swapping the two loses both marks.",
        "A question that mentions soil concentrations lower than root concentrations is signalling active transport. Point out the concentration gradient and then say ATP is required.",
        "When describing the Casparian strip, say what it forces water to do (cross a cell membrane / enter the symplast) rather than only saying that it blocks water.",
        "For a six-mark answer on the route of water, start at the soil and finish in the leaf vein, naming each structure once.",
        "Root hair, cortex, endodermis, pericycle, xylem, mesophyll. Examiners award the marks for the sequence being complete.",
      ],
      commonMistakes: [
        "Claiming root hairs absorb water by active transport. Water is always passive; only solutes are pumped.",
        "Naming lignin instead of suberin for the Casparian strip. Suberin is the waterproof layer in the endodermis.",
        "Thinking the xylem in a root lies at the centre because that is true of stems.",
        "In a dicot root the xylem forms a central cross or star shape; check the diagram you are given.",
        "Saying water is absorbed 'for photosynthesis'. Uptake follows from the water potential difference, and purpose language earns no mark where a mechanism is asked for.",
      ],
      recap: [
        "Explain how water enters a root hair cell from the soil. [3]",
        "Nitrate ions are more concentrated in the root cell than in the soil. Name and explain the process by which they are absorbed. [3]",
        "State the function of the Casparian strip in the endodermis. [2]",
        "Name the three pathways by which water may travel through the cortex of a root. [3]",
      ],
    },
    {
      title: "Transpiration and the Cohesion–Tension Mechanism",
      body: `### Definition, stated carefully\n\n**Transpiration is the loss of water vapour from the surfaces of the leaves, mainly through the stomata.\n\nIt is not evaporation from a dead surface, and it is not excretion: the water lost was part of a living plant's evaporating surfaces.\n\nMost of it leaves from the wet walls of mesophyll cells, where it has spread after arriving in the leaf vein, so anything that increases the exposed wet surface or the diffusion gradient increases the rate.\n\n### How stomata open and close\nEach stoma is bounded by a pair of **guard cells**. Guard cells have a thickened inner wall (next to the pore) and a thinner outer wall.\n\nWhen sugars and potassium ions accumulate in a guard cell, its water potential falls, water enters by osmosis, the cell becomes turgid, and the uneven wall thickness makes the pair bow outward so the pore opens.\n\nLosing water makes them flaccid and the pore closes.\n\nIn most plants stomata are open in daylight because photosynthesis supplies the solutes and darkness triggers closure;\n\nWater stress also closes them, and some succulents reverse the timing to open only at night.\n\n### Two More Routes Out of the Leaf\n\nMost water leaves through stomata, but a small proportion passes straight through the waxy **cuticle** of the epidermis, and woody stems lose a further trickle through **lenticels**, the pores in bark.\n\nNo surface is fully sealed, so a plant kept in humid air still loses water, just far more slowly.\n\n### The Barrier Each Water Molecule Crosses\n\nFrom the xylem ending in a vein, water must pass through mesophyll cell walls, a cell membrane and finally an air space before it can escape through a pore.\n\nEvery one of those surfaces is a place where evaporation lowers the water potential, so the whole wet pathway contributes to the pull.\n\n### The mechanism that lifts the water\n1. Water evaporates from the thin film covering the mesophyll cell walls into the air spaces of the leaf.\n2. That film is drawn from the cell's own cytoplasm, so the cell's water potential falls and it takes water from the xylem in the vein.\n3. Removing water from the top of the column lowers the pressure inside the xylem below atmospheric pressure: this is **tension**, a negative pressure.\n4. Because water molecules **cohere** by hydrogen bonding, the pull at the top is transmitted down the whole unbroken column, so the entire stream rises as one.\n5. **Adhesion** between water and the hydrophilic, lignified walls keeps the column lining the tube and stops it falling back.\n\n${transpirationStreamDiagram}`,
      figure: transpirationArt,
      groups: [
        {
          subTitle: "The Terms, Precisely",
          bullets: [
            "**Cohesion:** the attraction between water molecules that keeps the column continuous under tension.",
            "**Adhesion:** the attraction between water and the walls of the xylem, which resists gravity and prevents collapse.",
            "**Tension:** the negative pressure in the xylem produced when water is removed from the top of the column.",
            "**Transpiration stream:** the continuous movement of water from roots to leaves through the xylem.",
            "**Guttation:** loss of liquid water droplets from leaf margins when root pressure exceeds the loss by transpiration, usually at night.",
            "**Transpiration pull:** the tension created at the top of the xylem as water is removed at the leaf; naming it as the lifting force is what the mark wants.",
            "**Water potential gradient:** soil, root cortex, xylem, mesophyll and leaf air space form a series in which the potential falls steadily, and that fall is what sets the direction of movement.",
          ],
        },
        {
          subTitle: "Why the Cohesion–Tension Account Is Preferred",
          bullets: [
            "It explains heights that **root pressure cannot reach**: root pressure lifts water only a short way and cannot operate in a tall tree.",
            "It explains why water rises faster on a dry, windy, bright day, when the evaporative demand and therefore the tension is greater.",
            "It explains why an air lock or a cut stem stops the flow locally, since a broken column cannot transmit tension.",
            "The flow continues at night at a reduced rate, consistent with a physical pull rather than a living pump.",
          ],
        },
        {
          subTitle: "What Transpiration Is For",
          bullets: [
            "**Not** the plant's aim: water loss is a cost of gas exchange, since stomata must open to admit carbon dioxide.",
            "It supplies the water used in photosynthesis and keeps cells turgid, which is how herbaceous plants hold themselves upright.",
            "It carries mineral ions from soil to every part of the plant and dissolves them for transport.",
            "Evaporating water removes heat, cooling the leaf in strong sunlight.",
          ],
        },
      ],
      examinerTips: [
        "Define transpiration as the **loss of water vapour from the leaves**, not 'evaporation of water'. The words 'water vapour' and 'from the plant / leaves' are usually the two marks.",
        "For a cohesion-tension question, use the three key words explicitly: **cohesion**, **adhesion**, **tension** (or negative pressure / pull). A narrative without the terms scores less.",
        "Do not describe transpiration as driven by translocation, by root pressure alone, or by the plant 'pulling water up for photosynthesis'. Say the pull is produced by evaporation at the leaf surface.",
        "A common six-mark question asks you to link stomata to transpiration: build the chain in order, guard cells turgid → pore open → water vapour diffuses out → tension rises → column rises.",
      ],
      commonMistakes: [
        "Saying water is pumped up the stem by the roots. The xylem is dead and there is no pump in the transport explanation.",
        "Confusing transpiration with respiration or with evaporation from a cut surface of dead material.",
        "Claiming the plant uses most of the water it takes up. Only a small fraction is used in photosynthesis and growth; the rest is transpired.",
        "Naming the mesophyll cells as the site of water loss but forgetting that the water vapour exits through the stoma, so both must appear for full marks.",
      ],
      recap: [
        "Define transpiration. [2]",
        "Describe how guard cells cause a stoma to open. [4]",
        "Explain the roles of cohesion and adhesion in the rise of water in the xylem. [4]",
        "State three ways in which transpiration is useful to a plant. [3]",
      ],
    },
    {
      title: "Factors That Affect the Rate of Transpiration",
      body: `Transpiration is evaporation plus diffusion, so its rate is set by anything that changes either the saturation difference between leaf air spaces and the outside air, or the area of the wet surface exposed.\n\n| Factor | Effect on rate | Explanation |\n| --- | --- | --- |\n| Light intensity | Increases it | Stimuli cause stomata to open; leaves also warm, raising evaporation |\n| Temperature | Increases it | Water molecules gain kinetic energy, and warm air holds more water vapour |\n| Humidity | Decreases it as humidity rises | A smaller water vapour gradient between leaf and air slows diffusion |\n| Air movement | Increases it | A breeze removes the humid boundary layer of air around the leaf |\n| Water available to the roots | Decreases it in drought | Thin, flaccid guard cells close stomata, so the route out is shut |\n| Number of stomata | Increases it | More pores means more exit routes and more exposed wet surface |\n| Leaf surface area | Increases it | A larger area of mesophyll walls is exposed to evaporate from |\n| Cuticle thickness / leaf hairs | Decrease it | Wax and trapped moist air slow evaporation from the leaf surface |\n\n### Adaptations that reduce water loss\n\nXerophytic plants are examined as worked examples of the same principles in reverse.\n\nSucculents store water and open stomata mainly at night; leaves reduced to spines remove the transpiring surface;\n\nA thick waxy cuticle blocks evaporation directly from the epidermis; sunken stomata sit in pits or grooves where undisturbed, humid air collects;\n\nDense leaf hairs trap that same humid layer; rolled leaves enclose a pocket of moist air with only a small opening;\n\nAnd a very shallow but wide root spread or an extremely deep taproot both improve water capture.\n\nHalophytes face a different problem, salt rather than drought, and deal with it by excreting salt through specialised glands, keeping salt out at the root, or accumulating solutes so that their water potential stays lower than the soil's.\n\n### Comparing Two Species Honestly\n\nLeaf area is measured by tracing outlines onto centimetre-squared grid paper or by weighing a known area of leaf, and stomatal frequency is counted from an **epidermal peel** or from a clear-varnish impression of the lower surface.\n\nTwo shoots with the same leaf area can then be compared, because the difference in rate is no longer explained by size.\n\n### Wilting Is a Rate Argument, Not a Rainfall One\n\nA plant wilts when transpiration exceeds uptake, because the cells lose turgor rather than because the soil is dry in absolute terms.\n\n**Early wilting** reverses overnight as uptake catches up, whereas **permanent wilting** does not recover even when the plant is placed in water, and marks the point at which the remaining soil water is beyond the root's reach.\n\n### How to Phrase a Conclusion From a Table\n\nState the factor, the direction and the mechanism in one sentence per row, for example: 'as humidity rose the rate fell, because a higher outside water vapour concentration reduces the diffusion gradient'.\n\nA bare statement of the direction leaves the explanation marks unclaimed.`,
      groups: [
        {
          subTitle: "Controlling These Factors in an Experiment",
          bullets: [
            "**Independent variable:** the one factor deliberately changed, for example distance of the lamp for light intensity.",
            "**Dependent variable:** what is measured, usually bubble movement in a set time, converted to a rate.",
            "**Controlled variables to list:** same plant shoot, same leaf area, same temperature, same humidity, same light source, same wind speed, same starting position of the bubble, and time allowed to settle before recording.",
            "**Increasing reliability:** repeat each setting several times, discard an anomalous result with a reason, and calculate a mean before plotting.",
            "**Light intensity control:** vary it by changing the distance of the lamp, and remember that illumination falls off with the square of the distance, so the relationship is not linear.",
            "**Isolating one factor from two:** a screen of water or a cool LED lamp stops the lamp changing temperature while it changes light, so only one variable moves.",
            "**Raising humidity around a shoot:** a bell jar or a polythene bag over the leaves, sometimes with a damp cloth inside, makes the outside air close to saturated.",
          ],
        },
        {
          subTitle: "One-Line Mechanism for Each Factor",
          bullets: [
            "**Light:** open stomata plus a warmer leaf, so part of the effect is really a temperature effect.",
            "**Temperature:** water molecules gain kinetic energy and warm air holds more vapour, so evaporation at the mesophyll walls speeds up.",
            "**Humidity:** wetter outside air shrinks the water vapour gradient between leaf air space and atmosphere.",
            "**Air movement:** a breeze carries away the saturated boundary layer, so a steep gradient is restored at the pore.",
            "**Water supply:** flaccid guard cells close the pores, so the exit route shuts whatever the weather does.",
          ],
        },
        {
          subTitle: "Applications That Come Up in Structured Questions",
          bullets: [
            "**Transplanting seedlings:** gardeners shade new plants and remove some leaves, because a smaller transpiring surface matches the reduced absorption of the damaged roots.",
            "**Misting and shading in a greenhouse** lower the difference in water vapour between leaf and air, so the crop loses less and needs watering less often.",
            "**Cut flowers wilt** because the severed xylem draws in an air lock; recutting under hot water clears the blockage and restores the column.",
            "**Wilt point work:** the mass of a potted plant is followed until the leaves droop, giving the water content at which the roots can no longer extract enough.",
          ],
        },
      ],
      examinerTips: [
        "Always give the **explanation**, not just the direction. 'Humidity up, so transpiration down' is half a mark; 'a higher outside water vapour concentration reduces the diffusion gradient' is the mark.",
        "For windy conditions the word examiners want is the **boundary layer**: still air next to the leaf becomes saturated, and moving it away steepens the gradient.",
        "In a data question, quote the numbers you used with their units before drawing a conclusion, and give the conclusion as a rate per minute.",
        "When asked to name the controlled variables, list factors that could plausibly change during that particular investigation; a generic list costs nothing but gains little.",
      ],
      commonMistakes: [
        "Saying high temperature increases transpiration 'because the plant respires faster'. Respiration is not the mechanism; evaporation and the vapour gradient are.",
        "Describing a fan or a breeze as removing carbon dioxide. The relevant gas being moved is water vapour.",
        "Claiming that closing stomata stops transpiration completely: some water still escapes through the cuticle and lenticels, just far less.",
        "Writing that a plant wilts only when the soil is bone dry. Wilting starts whenever uptake falls behind the rate of loss, so it can happen at midday in moist soil.",
      ],
      recap: [
        "State and explain the effect of moving a light source further away from a transpiring shoot. [3]",
        "Explain why a plant transpires faster in a draughty room than in still air of the same temperature. [2]",
        "Explain how a rolled leaf reduces water loss. [3]",
        "List four variables that must be controlled when comparing transpiration at two temperatures. [4]",
      ],
    },
    {
      title: "Measuring Transpiration with a Potometer",
      figure: potometerArt,
      body: `### Principle\n\nA **potometer** measures how quickly a cut shoot takes up water.\n\nUptake is assumed to equal loss, so the distance the air bubble travels along a graduated capillary per unit time gives an estimate of the rate of transpiration.\n\nThe classic versions are the well-type potometer, where the shoot is held above a water reservoir and the whole apparatus is inverted into position, and the mass or bubble potometer with a capillary tube and a syringe-type reservoir for resetting the bubble.\n\n### Setting up so the results mean anything\n\nThe shoot must be cut underwater so that no air enters the xylem and creates an air lock.\n\nAll joints are sealed with petroleum jelly or grease so that no water can leak out and none can evaporate from somewhere other than the leaves.\n\nThe apparatus is checked for leaks before starting, the bubble is reset to a zero mark using the reservoir tap, and the shoot is left for a few minutes in the conditions being tested so that its stomata adjust before readings begin.\n\nReadings of bubble position are taken at fixed intervals and converted into a mean rate for each set of conditions.\n\n### What the apparatus does not measure\n\nWater uptake and water loss are not identical, so a potometer is an **estimate** rather than a direct measurement.\n\nA small proportion of the absorbed water is retained for photosynthesis, for building new cells and for maintaining turgidity.\n\nThe measurement is also vulnerable to any leak, to water evaporating from the cut end or from an imperfect seal, and to a sudden drop in uptake when an air bubble reaches the shoot or when an air lock forms.\n\n${potometerDiagram}\n\n### Alternative methods\n\nThe most direct approach is to weigh the whole potted plant at intervals and subtract the mass of water added;\n\nWrapping the pot and soil in plastic keeps evaporation from the soil out of the measurement.\n\nA simpler classroom comparison is to weigh two similar leaves, one coated with petroleum jelly on its upper surface and one on its lower surface, and record the mass lost over a set period, which also demonstrates the uneven distribution of stomata.\n\nLeaf porometers and infrared gas analysers measure the water vapour leaving an intact leaf directly and are used when a potometer's assumptions would be unacceptable.\n\n### Reporting the Numbers an Examiner Wants\n\nConvert the bubble position into a distance, the distance into a rate, and keep the units given in the question, usually millimetres per minute or cubic millimetres per minute.\n\nA rate expressed per unit leaf area is the fairest comparison between two shoots and is often the mark that separates a full answer.\n\n### Choosing the Plant Material\n\nHerbaceous shoots with thin, broad leaves give brisk and repeatable readings because they carry many exposed stomata.\n\nEvergreen leaves with a thick cuticle respond slowly, and a shoot with only two or three leaves moves the bubble so little that the readings carry too much error to be useful.\n\n### Why the Shoot Is Weighed as Well\n\nRecording the fresh mass of the shoot lets the rate be divided by mass or by leaf area, which is the standardisation examiners look for in a planning question.\n\nIt also reveals a shoot that had already wilted before the experiment began, because a light shoot takes up water too slowly to give usable readings.`,
      groups: [
        {
          subTitle: "Converting Bubble Movement into a Rate",
          bullets: [
            "**Distance moved by the bubble** divided by the **time taken** gives a rate in mm per minute, which is enough for comparing conditions.",
            "**Volume of water** = distance travelled × the cross-sectional area of the capillary tube; the tube's diameter is printed on the apparatus or given in the question.",
            "**Rate per unit leaf area:** divide the volume taken up per minute by the leaf surface area, so that two shoots of different size can be compared honestly.",
            "**Graph shape:** plotting rate against the factor changed gives a rising curve that flattens once another factor, often light saturation or stomatal opening, becomes limiting.",
          ],
        },
        {
          subTitle: "Safety and Practical Notes",
          bullets: [
            "Lamps and hot bulb housings near water are the main hazard, so keep hands dry and do not let the lamp touch the plastic tube.",
            "Petroleum jelly and greases are slip hazards and should be used sparingly.",
            "Cut stems with a sharp blade away from the body, underwater if the protocol requires it.",
            "**Record the leaf area** of every shoot, or use one shoot for all conditions, so rates can be compared per square centimetre rather than per plant.",
            "**Allow the shoot to settle** in each new condition for two or three minutes before the first reading, so the stomata have adjusted.",
          ],
        },
        {
          subTitle: "Diagnosing a Potometer That Misbehaves",
          bullets: [
            "**Bubble stops moving:** an air lock has formed in the xylem or the shoot has wilted, so open the tap, push water back and recut the stem under water.",
            "**Bubble runs backwards:** the apparatus cooled so the gas inside contracted, or a leak drew water in at an unsealed joint.",
            "**Readings scatter widely:** the lamp was heating the shoot, the fan speed drifted, or the shoot had not been given time to adjust before recording.",
            "**Rate falls steadily with time:** the shoot is becoming water-stressed as its cut xylem blocks, so later readings underestimate the true rate for that condition.",
          ],
        },
      ],
      examinerTips: [
        "The most-scored limitation is the wording 'water uptake is not the same as water loss because some water is used up in the plant or by photosynthesis'.",
        "State it that way rather than saying the potometer is inaccurate.",
        "If the question asks why the apparatus must be left for some minutes before readings begin, answer in terms of the shoot adjusting to the new conditions and stomata reaching a steady opening.",
        "A question about an air lock expects the consequence, 'the column of water breaks so the transpiration pull is not transmitted and the shoot takes up no water'.",
        "When a table gives several bubble readings, calculate the mean of the individual rates, not the rate from the mean distances, and keep the units stated in the question.",
      ],
      commonMistakes: [
        "Describing a potometer as measuring transpiration directly, or as measuring the water content of the soil.",
        "Forgetting the reservoir/tap and therefore being unable to explain how the bubble is returned to the start for a repeat reading.",
        "Placing the plant shoot in the sun with a lamp inside a beaker of water and reporting temperature as the variable you controlled; heat from the lamp changes two factors at once.",
        "Reporting the total distance the bubble moved instead of a rate per minute, so the answer has no units and cannot be compared between conditions.",
      ],
      recap: [
        "Explain what a potometer measures and why the measurement is only an estimate of transpiration. [3]",
        "State why the shoot is cut under water before it is fitted to the potometer. [2]",
        "Describe how you would investigate the effect of air movement on the rate of transpiration using a potometer.",
        "Include the variable you change, the variables you control and how you would make the results reliable. [6]",
        "A capillary tube of cross-sectional area 0.8 mm² has its bubble move 40 mm in 2 minutes. Calculate the rate of water uptake in mm³ per minute. [2]",
      ],
    },
    {
      title: "Translocation: Moving Sucrose from Source to Sink",
      body: `### What travels, and in which direction\n\nThe organic substances moved through the phloem are mainly **sucrose** together with **amino acids**, plus hormones and mineral ions such as potassium.\n\nThis movement of dissolved organic molecules through the phloem is called **translocation**.\n\nA **source** is a region that releases more sucrose than it consumes, typically a photosynthesising mature leaf or a storage organ in spring;\n\nA **sink** is a region consuming or storing it, such as root, stem, bud, flower, fruit, tuber or developing seed.\n\nFlow direction is therefore set by the season and by where the plant is growing, which is why translocation can move sap upwards into a fruit or downwards into a taproot and, unlike the xylem stream, can go both ways in the same plant at the same time.\n\n### Loading at the source\n\nSucrose produced in mesophyll cells reaches the phloem of a vein by successive cell-to-cell movement.\n\nLoading into the sieve tubes raises solute concentration and lowers water potential, so water follows from the neighbouring xylem by osmosis.\n\nThis increases the volume and therefore the **hydrostatic pressure** at the source end of the tube.\n\n### Unloading at the sink\n\nAt the sink, sucrose is removed from the sap by active transport into the sink cells, and then converted into starch, sucrose or cellulose for use or storage.\n\nRemoving solute raises the water potential, so water leaves the phloem by osmosis and returns to the xylem. The result is lower hydrostatic pressure at the sink end.\n\n### Mass flow\n\nThe pressure difference between the loaded end and the unloaded end drives a **mass flow** of solution along the tube, through the sieve plates, from high pressure to low pressure.\n\nFlow through a sieve plate is slow, which is why translocation is much slower than the movement of water in xylem.\n\nThe pressure gradient itself has to be built and maintained by the plant's metabolism, which is the reason sieve tubes must stay alive and need companion cells rich in mitochondria.\n\n### The evidence behind the model\n\nAphid mouthparts, or stylets, left in a phloem sieve tube continue to exude sap for a long time;\n\nThe sap is rich in sugars and moves out under pressure, showing that phloem sap is under positive hydrostatic pressure.\n\nAnalysis of the sap shows concentrations far above those in surrounding tissue, which could only be produced by active loading.\n\nRinging experiments, where a band of bark containing phloem is removed around a stem, cause sugars to accumulate above the cut and the tissue below to starve, while the xylem in the wood continues to carry water.\n\nApplying a metabolic inhibitor or lowering the temperature slows translocation, linking it to respiration and ATP.\n\nFinally, the sieve tube cannot be dead, since the sap moves against a concentration gradient in places.\n\n### Where the ATP Is Spent\n\nCompanion cells pump hydrogen ions out across their membrane into the surrounding cell walls, using ATP from their many mitochondria.\n\nSucrose then rides back in on the same carrier as those ions return down their gradient, which is why anoxia or a metabolic inhibitor stops loading within minutes.\n\n### The Speed Test That Separates the Two Tissues\n\nWater in xylem can rise tens of metres per day, whereas phloem sap typically travels only a fraction of that distance.\n\nA question that gives a rate is really asking which tissue is involved: a fast one-way stream is xylem, a slow multi-directional one is phloem.\n\n### One Stem, Several Simultaneous Journeys\n\nDifferent bundles in the same stem can carry sap in opposite directions at the same moment, because each source and sink pair maintains its own pressure gradient.\n\nThat bidirectional flow is the observation that rules out any explanation based on diffusion or on the transpiration stream.`,
      groups: [
        {
          subTitle: "Facts Worth Memorising as Pairs",
          bullets: [
            "**Sucrose, not glucose:** glucose is too reactive to be transported in bulk, so the plant converts it to sucrose, which is inert and highly soluble.",
            "**Living tissue required:** translocation stops when the phloem is killed, unlike water movement through dead xylem.",
            "**ATP required:** active loading and unloading depend on respiration, so poisons and anoxia slow or stop the flow.",
            "**Both directions possible:** xylem flow is one way and upwards; phloem flow is multi-directional, source to sink.",
            "**Sieve plates slow flow:** the perforated end walls create friction, so phloem sap moves far more slowly than xylem water.",
            "**A pressure gradient, not a concentration gradient, is the drive:** sap moves by bulk flow from high hydrostatic pressure to low, so solute can be carried even where it is more concentrated than in the source.",
          ],
        },
        {
          subTitle: "Uses of the Glucose Made by a Leaf",
          bullets: [
            "Respired immediately in the leaf to release energy for growth and active transport.",
            "Converted to **sucrose** for translocation in the phloem.",
            "Converted to insoluble **starch** for storage in leaves, roots and tubers.",
            "Converted to **cellulose** for building cell walls during growth.",
            "Combined with nitrate ions to make **amino acids**, then proteins and, in some organs, lipids.",
            "Converted to **oil** and stored in seeds such as sunflower and groundnut, which is why those crops are grown for edible fat.",
          ],
        },
        {
          subTitle: "Source and Sink Change With the Season",
          bullets: [
            "**Spring potato tuber:** the stored starch is hydrolysed and the tuber acts as the source feeding the growing shoot until its leaves unfold.",
            "**Summer:** mature leaves are the sources and the tubers, fruits and growing tips are the sinks.",
            "**Autumn in a deciduous tree:** sugars move down into roots and trunk as storage, which is why sap can be tapped from a birch stem in early spring as those stores are remobilised.",
          ],
        },
      ],
      examinerTips: [
        "Write 'source to sink' explicitly when asked for the direction of translocation, and be ready to name a source and a sink from the plant in front of you.",
        "Use the phrase **mass flow** together with the cause, a hydrostatic pressure gradient set up by loading and unloading, rather than saying 'the sap is pushed by transpiration'.",
        "For an evidence question, name the technique and state the conclusion it supports. The aphid stylet evidence shows pressure; ringing shows that food moves down in the bark.",
        "Do not credit translocation with the upward movement of water. Any answer linking phloem transport to transpiration as the driving force loses the mark.",
      ],
      commonMistakes: [
        "Saying phloem carries 'food' or glucose; sucrose and amino acids in solution is the precise answer.",
        "Describing translocation as the process of moving water and mineral ions. That is the transpiration stream.",
        "Claiming translocation only occurs downwards from the leaf; storage organs import and export depending on season.",
        "Confusing the sieve plate with the Casparian strip or with pits in xylem walls.",
      ],
      recap: [
        "Define translocation and name the substances that are translocated. [3]",
        "Distinguish between a source and a sink, giving one example of each. [2]",
        "Describe the evidence for translocation obtained from aphid mouthparts. [3]",
        "Compare the movement of substances in xylem with the movement of substances in phloem in terms of substance, direction, tissue state and driving mechanism. [4]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_8: Chapter = chapterEight;
