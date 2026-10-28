import type { Chapter } from "./types";
import { box, labelledRows, svgDiagram, tileRow } from "./diagram-kit";

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

const movementIllustrations = artPanel([
  {
    src: "ch03-diffusion-beaker.webp",
    alt: "Coloured particles spreading evenly through the water in a beaker",
    caption: "Diffusion",
  },
  {
    src: "ch03-root-hair-cell.webp",
    alt: "Root hair cell in the soil with water passing into it",
    caption: "Root hair cell taking in water",
  },
]);

const osmosisArt = artPanel([
  {
    src: "ch03-potato-osmosis.webp",
    alt: "Two beakers with potato strips, one straight in water and one bent in concentrated sugar solution",
    caption: "Potato strips in water and in sugar solution",
  },
]);

const activeTransportArt = artPanel([
  {
    src: "ch03-active-transport.webp",
    alt: "A protein pump carrying ions across the cell membrane using ATP",
    caption: "A protein pump running on ATP",
  },
]);

/** Diffusion, osmosis and active transport written side by side, the comparison examiners ask for. */
const transportComparisonDiagram = svgDiagram(
  "Diffusion, osmosis and active transport compared",
  `<text class="title" x="450" y="32" text-anchor="middle">Three ways materials cross a membrane</text>
  ${tileRow(
    [
      {
        title: "Diffusion",
        cls: "main",
        body: "any particles, no membrane needed\nfrom high to low concentration\npowered by random movement\nno energy from respiration",
      },
      {
        title: "Osmosis",
        cls: "blue",
        body: "water molecules only\nacross a partially permeable\nmembrane\nhigher water potential to lower",
      },
      {
        title: "Active transport",
        cls: "pink",
        body: "against the gradient\nthrough a membrane\nuses energy from respiration\ncarries ions and sugars inward",
      },
    ],
    56,
    { h: 164 },
  )}
  ${box(24, 236, 852, 44, "All three move materials into or out of a cell; only active transport runs uphill and needs energy", "panel", "small")}`,
  900,
  306,
);

/** The three states of a plant cell that a solution can produce. */
const plantCellTurgorDiagram = svgDiagram(
  "A plant cell in three surrounding solutions",
  `<text class="title" x="450" y="32" text-anchor="middle">Water moves, and the wall decides the outcome</text>
  ${tileRow(
    [
      {
        title: "Dilute solution",
        cls: "main",
        body: "water enters the cell\nvacuole swells and presses\nout against the wall\ncell is TURGID and firm",
      },
      {
        title: "No net movement",
        cls: "gold",
        body: "water in equals water out\nthe cell loses its firmness\ncell is FLACCID and limp",
      },
      {
        title: "Concentrated solution",
        cls: "pink",
        body: "water leaves the cell\ncytoplasm pulls away\nfrom the wall\ncell is PLASMOLYSED",
      },
    ],
    56,
    { h: 158 },
  )}
  ${box(24, 230, 852, 44, "An animal cell has no wall: in dilute solution it swells and bursts, in concentrated solution it shrivels", "panel", "small")}`,
  900,
  300,
);

/** Cubes drawn to scale beside the rule that explains why cells stay microscopic. */
const surfaceAreaVolumeDiagram = svgDiagram(
  "Surface area to volume ratio as a cell grows",
  `<text class="title" x="450" y="32" text-anchor="middle">Growing larger shrinks the ratio</text>
  <text class="small" x="85" y="162" text-anchor="middle">6 to 1</text>
  <rect class="blue" x="60" y="170" width="50" height="50" rx="4"/>
  <text class="small" x="85" y="240" text-anchor="middle">side 1 mm</text>
  <text class="small" x="214" y="122" text-anchor="middle">3 to 1</text>
  <rect class="blue" x="170" y="130" width="88" height="88" rx="5"/>
  <text class="small" x="214" y="240" text-anchor="middle">side 2 mm</text>
  <text class="small" x="361" y="88" text-anchor="middle">2 to 1</text>
  <rect class="blue" x="300" y="96" width="122" height="122" rx="6"/>
  <text class="small" x="361" y="240" text-anchor="middle">side 3 mm</text>
  ${labelledRows(
    [
      ["Surface area", "grows by the square"],
      ["Volume", "grows by the cube"],
      ["Ratio", "falls as size rises"],
      ["Consequence", "the centre starves"],
    ],
    470,
    104,
    32,
  )}
  <text class="small" x="450" y="276" text-anchor="middle">Doubling the side quadruples the membrane but multiplies the cytoplasm eight times.</text>
  <text class="small" x="450" y="300" text-anchor="middle">Small cells, flattened cells and folded surfaces all raise the ratio and speed up exchange.</text>`,
  900,
  320,
);

const chapterThree: Chapter = {
  number: 3,
  title: "Movement Into and Out of Cells",
  intro: `A cell is a bag of chemistry sealed by a membrane, and it lives only while material keeps crossing that membrane.\n\nThree processes move it — **diffusion**, **osmosis** and **active transport** — and one idea governs them all:\n\nAs an object grows, its volume outruns its surface area, so exchange gets relatively harder and larger organisms must build specialised surfaces to do the job.`,
  subheadings: [
    {
      title: "Diffusion",
      body: `### Random Movement, Directional Result\n\n**Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, as a result of the random movement of the particles themselves.\n\nIt runs in gases and liquids, needs no membrane, and uses no energy from respiration.`,
      figure: movementIllustrations,
      groups: [
        {
          subTitle: "The Factors That Change the Rate",
          bullets: [
            "**Temperature:** warming gives particles more kinetic energy, so they move faster and diffuse faster.",
            "**Steepness of the concentration gradient:** the larger the difference between the two regions, the faster the net movement.",
            "**Surface area available:** a wider crossing means more particles pass per second.",
            "**Distance to travel (thickness of the surface):** a thinner barrier shortens the journey, so diffusion is faster.",
            "**Size of the diffusing particle:** small molecules such as oxygen and carbon dioxide cross quickly; large ones are far slower.",
            "**Gases and liquids only;** particles in a solid are fixed in place and barely diffuse.",
            "Diffusion is fast over a few cells but hopeless over large distances, which is why cells stay microscopic.",
            "Potassium manganate(VII) spreading through still water is the standard classroom diffusion demonstration.",
          ],
        },
        {
          subTitle: "Equilibrium Is Not Stillness",
          bullets: [
            "When the two regions reach the same concentration, particles keep moving in both directions, but the **net movement becomes zero**.",
            "Write 'no net movement' rather than 'movement stops'; the second phrasing contradicts the random-motion part of your own definition.",
            "In a living cell, diffusion rarely reaches equilibrium for long, because blood flow and ventilation keep removing the diffusing substance and maintain the gradient.",
            "**Net movement** is the overall flow; particles still cross back into the crowded region, just fewer of them.",
            "Oxygen entering blood and carbon dioxide leaving a leaf are both driven by a maintained concentration gradient.",
          ],
        },
      ],
      examinerTips: [
        "Give the definition with all its parts — net movement, higher to lower concentration, concentration gradient, random movement — and do not mention a membrane, because diffusion does not need one.",
        "When a factor is asked about, supply the factor **and** the mechanism: 'the temperature is higher, so the particles have more kinetic energy and move faster'.",
        "Naming 'temperature' alone is only half a mark.",
        "For gas exchange, name the gas and both regions: oxygen diffuses from the alveolus into the capillary blood down its concentration gradient.",
        "When asked why diffusion is passive, say no energy from respiration is used because the particles already hold their own kinetic energy.",
      ],
      commonMistakes: [
        "Claiming diffusion needs energy from respiration. It is passive; adding energy turns your answer into a description of active transport.",
        "Saying particles diffuse 'because the cell needs them'. Diffusion is blind statistics, not intent.",
        "Confusing diffusion with osmosis: osmosis is water only and requires a partially permeable membrane, while diffusion can be any particle with no membrane needed.",
        "Saying particles diffuse 'in order to reach equilibrium'. They move randomly; evening out is the result, not the aim.",
      ],
      recap: [
        "Define diffusion. [3]",
        "State four factors that affect the rate of diffusion. [4]",
        "Explain how oxygen reaches the blood in the alveoli by diffusion. [3]",
        "A container of perfume is opened in one corner of a cold room and the smell spreads slowly. Explain, in terms of particles, why warming the room speeds this up. [3]",
        "Two regions become equal in concentration. Describe what is happening to the particles at that point. [2]",
      ],
    },
    {
      title: "Osmosis and Turgidity",
      body: `### Water Has a Direction\n\n**Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential, through a partially permeable membrane.\n\nWater travels towards the more concentrated solution, and the cellulose wall decides how a cell responds.`,
      figure: plantCellTurgorDiagram + "\n\n" + osmosisArt,
      groups: [
        {
          subTitle: "The Three States of a Plant Cell",
          bullets: [
            "**Turgid:** in pure or dilute solution water enters, the vacuole swells and presses the cytoplasm against the wall.",
            "The wall pushes back and the cell becomes firm. The pressure inside is **turgor pressure**, and it is what keeps a herbaceous plant upright.",
            "**Flaccid:** when there is no net gain of water the vacuole is not pressing hard, the cell is limp and the plant begins to droop.",
            "**Plasmolysed:** in a concentrated solution water leaves, the vacuole shrinks and the membrane pulls away from the wall; the plant wilts and may die.",
            "**Water potential (Ψ)** is measured in kilopascals; pure water is the highest value, taken as zero.",
            "Dissolving any solute lowers the water potential below zero, so solution Ψ is always negative.",
            "In a turgid cell the wall's back-pressure balances the inward pull of osmosis, stopping further net entry.",
          ],
        },
        {
          subTitle: "Animal Cells Have No Safety Wall",
          bullets: [
            "**In dilute solution** water enters a red blood cell, it swells and bursts; the bursting of cells by osmosis is **haemolysis** when it is red blood cells, and the general process is **lysis**.",
            "**In concentrated solution** water leaves and the cell shrivels into a scalloped, wrinkled shape.",
            "**In the normal body fluid** the cell keeps its usual shape, since the fluid has the same water potential as the cytoplasm.",
            "Picture the membrane as a **sieve**: water passes through, but the dissolved solute is too big, so the dilute side wins the contest.",
            "A plant cell in strong sugar solution keeps its outline because the wall holds shape, so describe the shrinking cytoplasm, not the cell.",
          ],
        },
        {
          subTitle: "Osmosis Working Throughout the Plant",
          bullets: [
            "Water enters a **root hair cell** by osmosis, because the cell sap in its vacuole is more concentrated than the surrounding soil water.",
            "Water then passes inward from cell to cell and reaches the xylem, where the stream of dissolved minerals continues up the stem.",
            "Water leaves leaf mesophyll cells by osmosis, evaporates from the cell surfaces and escapes as vapour through the stomata, which is what keeps the pull on the water column going.",
            "Soil water is usually **dilute**, so its water potential is higher than the concentrated cell sap of the root hair.",
            "A plant short of water goes flaccid and wilts because the vacuoles no longer press against the walls.",
          ],
        },
      ],
      examinerTips: [
        "Mention water only. A definition of osmosis that says 'particles' or 'molecules' instead of water molecules loses the mark even if the rest is right.",
        "Include 'partially permeable membrane' and 'net movement' — those two phrases plus the direction are usually where the marks sit.",
        "For a turgor question about a plant support, name both structures involved: the vacuole pressing outward and the cell wall resisting.",
        "If a diagram shows the protoplast drawn away from the wall, the word to write is plasmolysed, and the reason is water leaving by osmosis.",
      ],
      commonMistakes: [
        "Saying water moves from a concentrated solution to a dilute one. It moves towards the concentrated side.",
        "Describing a plant cell in strong sugar solution as 'shrivelled like an animal cell'; the wall keeps the outline, so the correct feature is the cytoplasm detaching from it.",
        "Treating turgidity as the same thing as flaccidity because the cell still looks intact; firmness of the cell is the distinguishing feature.",
        "Claiming osmosis needs energy. It is passive, like diffusion.",
      ],
      recap: [
        "Define osmosis. [3]",
        "Give the direction in which water moves when a plant cell is placed in a concentrated sugar solution, and name the state the cell reaches. [2]",
        "Explain why a plant cell does not burst when placed in pure water but a red blood cell does. [3]",
        "State what turgor pressure is and why it matters to a plant. [2]",
        "Pure water has a water potential of zero. Describe how dissolving solute changes water potential and the direction of net water movement. [2]",
      ],
    },
    {
      title: "Active Transport",
      body: `### The Exception That Wins Marks\n\n**Active transport is the movement of particles through a cell membrane from a region of lower concentration to a region of higher concentration — against a concentration gradient — using energy released by respiration.\n\nThe energy comes from **aerobic respiration in the mitochondria** of the absorbing cell, so these cells are densely mitochondrial.`,
      figure: transportComparisonDiagram + "\n\n" + activeTransportArt,
      groups: [
        {
          subTitle: "Cases You Are Expected to Name",
          bullets: [
            "**Root hair cells** take up mineral ions such as nitrates from a dilute soil solution into a more concentrated cell sap.",
            "**The lining of the small intestine** absorbs glucose into the blood even when the gut contents have already been mostly emptied and the blood concentration is higher.",
            "**Kidney tubule cells** reabsorb useful substances, including all the glucose under normal conditions, back into the blood from the filtrate.",
            "**Mineral ions** such as nitrates are the classic substances pumped into a root hair.",
            "When soil water is more dilute than cell sap, diffusion would run the wrong way, so the cell must pump ions in.",
          ],
        },
        {
          subTitle: "How the Three Processes Differ",
          bullets: [
            "**Substance moved:** diffusion — any particles or molecules; osmosis — water only; active transport — ions and dissolved molecules.",
            "**Direction:** diffusion and osmosis go down a gradient; active transport goes against it.",
            "**Membrane needed:** no for diffusion, yes for osmosis and active transport.",
            "**Energy:** none for diffusion and osmosis; energy from respiration for active transport.",
            "**Effect of a respiratory inhibitor:** diffusion and osmosis continue; active transport slows or stops, and this is the classic way of telling the processes apart experimentally.",
            "**Direction relative to the gradient** is the single difference to write first in any comparison table.",
            "Active transport needs both **energy and a carrier protein** in the membrane, not particle motion alone.",
          ],
        },
      ],
      examinerTips: [
        "The phrase 'against a concentration gradient' is nearly always a marked step. Write it, then add 'using energy from respiration'.",
        "Name the mitochondria as the source of the energy if the question asks where it comes from.",
        "When a question gives concentrations on both sides of a membrane, work out which way diffusion would go before deciding whether the answer must be active transport.",
        "State the energy source precisely: energy from aerobic respiration, released by that cell's own mitochondria.",
      ],
      commonMistakes: [
        "Describing the uptake of water by a root as active transport. Water moves by osmosis; only the mineral ions are actively transported.",
        "Saying active transport moves substances 'down' a gradient.",
        "Naming oxygen as the substance actively transported into cells; oxygen enters by diffusion.",
        "Claiming the energy comes from the blood or the sun. It comes from respiration inside the transporting cell.",
      ],
      recap: [
        "Define active transport. [3]",
        "Explain how a root hair cell obtains nitrates from soil water that is more dilute than its cell sap. [3]",
        "State two differences between diffusion and active transport. [2]",
        "A poison blocks the release of energy from respiration. Predict the effect on uptake of mineral ions and on uptake of oxygen, and explain. [3]",
      ],
    },
    {
      title: "Gas Exchange Across Surfaces",
      body: `### Every Exchange Surface Is Built for the Same Job\n\nGases cross surfaces by diffusion, and diffusion only stays fast if the gradient stays steep, the path stays short and the surface stays large.\n\nEvery exchange surface examined is a solution to one of those three requirements, and small organisms solve them differently from large ones.\n\n| Surface | How it is built | What keeps the gradient steep |\n| --- | --- | --- |\n| Alveolus (mammalian lung) | one cell thick, moist, huge total area, encased in capillaries | ventilation replaces air; blood carries oxygen away |\n| Gill lamella (fish) | thin filaments carrying a large folded surface, one cell thick | water flows one way over the lamellae while blood flows the other |\n| Leaf mesophyll and stomata | spongy layer with air spaces, moist cell surfaces, pores that open and close | diffusion through open stomata, plus photosynthesis consuming carbon dioxide by day |\n| Tracheoles (insect) | fine tubes filled with fluid, ending on individual cells | air moves through tracheae and spiracles, so exchange is direct with tissues |\n| Body surface (single-celled organisms, flatworms) | the whole surface is thin and moist | the organism is small or flattened, so every cell is near the outside |`,
      groups: [
        {
          subTitle: "The Four Alveolar Adaptations, Written Out",
          bullets: [
            "**Very large surface area**, because several hundred million alveoli line the branching airways.",
            "**Walls one cell thick and moist**, so the diffusion distance between air and blood is minimal and gases dissolve readily.",
            "**A dense network of capillaries** on every alveolus, carrying oxygen away and bringing carbon dioxide in.",
            "**Ventilation** by the breathing muscles keeps the air in the alveoli freshly replenished, so the concentration gradient for oxygen does not run down.",
            "**A moist surface** dissolves the gases so they can diffuse across the cell lining.",
            "**A dense capillary network** is a blood supply that carries oxygen away and keeps the gradient steep.",
          ],
        },
        {
          subTitle: "Why Fish Need Counter-Current Flow",
          bullets: [
            "Water enters the mouth, passes over the gills and out through the operculum, while blood in the lamellae flows in the **opposite** direction.",
            "Counter-current flow means blood always meets water that contains more oxygen than itself, so a diffusion gradient is maintained **along the whole length** of the lamella instead of equalising at one point.",
            "As a result, a much larger proportion of the dissolved oxygen is extracted than a flow in the same direction would allow.",
            "**Gills are folded into lamellae** on filaments, packing a huge surface into a small volume.",
            "Water flows one way over the gills, from mouth to operculum, so it always meets fresh blood.",
          ],
        },
        {
          subTitle: "Why Small Organisms Get Away Without a System",
          bullets: [
            "A single-celled organism has a high surface-area-to-volume ratio, so oxygen reaches all its cytoplasm by diffusion alone.",
            "A flatworm is flattened, which shortens the distance to its inner cells and doubles its exposed surface.",
            "An elephant cannot rely on its skin, since its ratio is far too small; it needs lungs, a circulatory system and ventilation.",
            "Insects use **spiracles** onto tracheae and fine **tracheoles** that reach individual cells directly.",
            "Because air reaches tissues directly, an insect needs no blood to carry its respiratory gases.",
          ],
        },
      ],
      examinerTips: [
        "List alveolar adaptations as a set of four; questions commonly carry four marks and candidates routinely supply only two.",
        "Say 'diffusion' for the crossing itself and 'ventilation' or 'breathing' for the movement of air. Mixing the two terms costs a mark in a structured question.",
        "For leaves, remember that gases move through the stomata by diffusion and reach the mesophyll cells across moist air spaces.",
        "During the day carbon dioxide is used up in photosynthesis, which steepens its gradient inward.",
        "For fish, name both flows and say they move in opposite directions; the term counter-current flow itself is often a mark.",
      ],
      commonMistakes: [
        "Describing an exchange surface by habitat alone. 'Lives in water' identifies nothing; lamellae, thin walls and a blood supply do.",
        "Saying that fish pump water 'to get more oxygen into the blood by active transport'. The crossing is diffusion.",
        "Claiming that insects use lungs. Their tracheal system delivers air directly to tissues without blood.",
        "Writing that a smoker's thickened alveolar walls speed up exchange; thickening lengthens the diffusion path and slows it.",
      ],
      recap: [
        "Name four features of an alveolus that increase the rate of diffusion of oxygen into the blood. [4]",
        "Explain the advantage of counter-current flow across a fish gill lamella. [3]",
        "State how gases enter and leave a leaf and name the cells that control the openings. [2]",
        "Explain why a flatworm does not need a gas exchange system but a mouse does. [4]",
      ],
    },
    {
      title: "Surface Area to Volume Ratio",
      body: `### The Calculation Behind Every Adaptation\n\nFor a cube of side *s*: **surface area = 6s²**, **volume = s³**, and the **ratio is 6s² ÷ s³, which simplifies to 6 ÷ s**.\n\nVolume grows faster than surface area as size increases, so the ratio steadily falls.\n\n| Side of cube | Surface area | Volume | Surface area to volume ratio |\n| --- | --- | --- | --- |\n| 1 mm | 6 mm² | 1 mm³ | 6 : 1 |\n| 2 mm | 24 mm² | 8 mm³ | 3 : 1 |\n| 3 mm | 54 mm² | 27 mm³ | 2 : 1 |\n| 4 mm | 96 mm² | 64 mm³ | 1.5 : 1 |`,
      figure: surfaceAreaVolumeDiagram,
      groups: [
        {
          subTitle: "What a Falling Ratio Costs a Cell",
          bullets: [
            "**Supply:** too little membrane for the volume means oxygen and nutrients cannot enter fast enough for the cytoplasm that needs them.",
            "**Disposal:** carbon dioxide and urea leave too slowly and accumulate toward toxic levels in the centre.",
            "**Distance:** in a large cell the middle is far from the surface, and diffusion over that distance is hopelessly slow.",
            "**Heat:** a smaller ratio slows heat loss, which is why large animals overheat in hot climates and small ones lose heat quickly.",
            "Doubling the side quadruples the membrane but multiplies the cytoplasm eight times, so surface per unit volume halves.",
            "This single falling number explains why cells stay microscopic and why large organisms are multicellular.",
          ],
        },
        {
          subTitle: "Biological Fixes That Raise the Ratio",
          bullets: [
            "**Folding:** villi and microvilli in the small intestine, lamellae in gills, and the cristae folded inner membranes of mitochondria.",
            "**Branching:** alveoli, root hair networks and the tracheal system all multiply surface within a limited volume.",
            "**Flattening:** a leaf blade and a flatworm body both shorten the diffusion path while widening the exchange face.",
            "**Multicellularity:** many small cells, each with its own large ratio, beat one giant cell of the same total volume.",
            "**Long thin shapes** help too: an axon and a root hair are stretched cylinders with a high ratio.",
            "**Flattening** a leaf blade widens the exchange face while shortening the diffusion path.",
          ],
        },
      ],
      examinerTips: [
        "Write area with squared units and volume with cubed units, then give the ratio as a pure number or as a ratio such as 3 : 1 with no units attached.",
        "The comparison mark is almost always about the **ratio**, not about surface area.",
        "A larger cell does have more surface area than a small one, but a smaller ratio, and the smaller ratio is what limits it.",
        "Finish a calculation with a sentence of interpretation, since 'the ratio decreases, so exchange is too slow to serve the volume' is the half of the answer that is marked.",
        "Use the ratio, not raw area, to explain adaptations; exchange surfaces are folded, branched and flattened to raise this one number.",
      ],
      commonMistakes: [
        "Confusing surface area with surface-area-to-volume ratio, the single most common error in this practical question.",
        "Reporting the ratio with units such as '3 per mm³'.",
        "Forgetting that a cube has six faces and using s² or 4s² for surface area.",
        "Saying a large organism has a large ratio. Bigger animals have smaller ratios, which is why they need transport systems.",
      ],
      recap: [
        "A cube of side 3 mm: calculate its surface area, its volume and its surface area to volume ratio. [3]",
        "Describe what happens to the ratio as a cell grows larger and explain the effect on the rate at which waste can leave. [3]",
        "Explain why most cells are between about 10 and 100 µm rather than millimetres across. [2]",
        "Name two structural adaptations, other than in a mammal's lung, that increase a surface area to volume ratio. [2]",
      ],
    },
    {
      title: "Practical Investigations of Movement",
      body: `### The Two Required Experiments\nTwo investigations carry most of the marks here: osmosis in plant tissue and diffusion in agar blocks, both scored heavily on the variables.\n\n| Concentration surrounding the tissue | Water moves | Mass of the tissue | Graph position |\n| --- | --- | --- | --- |\n| More dilute than the cell sap | into the cells | increases | above the zero line |\n| Equal water potential to the cell sap | no net movement | unchanged | crosses the zero line |\n| More concentrated than the cell sap | out of the cells | decreases | below the zero line |`,
      groups: [
        {
          subTitle: "Variables, Controls and Reliability",
          bullets: [
            "**Independent variable:** solution concentration, cube size, temperature or acid concentration, depending on the investigation.",
            "**Dependent variable:** percentage change in mass, or time for the colour to disappear.",
            "**Controlled variables:** length of immersion, volume of solution, temperature, source of the tissue, surface drying before weighing, and the starting size of each cube.",
            "**Reliability:** use several cylinders per concentration and take a **mean**, discard anomalies, and repeat the whole range to check the trend.",
            "**Precision:** a scale reading to 0.01 g, and percentage change so that cylinders of different starting mass can be compared fairly.",
            "**Potato method:** cut cylinders from one tuber with a cork borer, blot dry, weigh, immerse for a fixed time, reweigh.",
            "**Agar method:** pink alkaline cubes with phenolphthalein turn colourless as acid diffuses inward and neutralises them.",
            "The concentration at the **zero-crossing** equals the water potential of the cell sap.",
          ],
        },
        {
          subTitle: "Reading the Graph the Way Examiners Do",
          bullets: [
            "A curve that rises and levels off shows the gradient falling as the internal and external concentrations approach each other.",
            "An **increase in mass** means the external solution was more dilute than the cell sap, so water entered.",
            "A plateau at high mass gain happens when the wall's pressure prevents further net entry — the cell is fully turgid.",
            "For agar cubes, the smaller cube loses colour first because its ratio of surface area to volume is larger.",
            "Timing a cube until it is fully colourless measures diffusion time; the smaller the cube, the shorter the time.",
            "Repeating the cubes at different temperatures or acid concentrations isolates those other factors.",
          ],
        },
      ],
      examinerTips: [
        "Quote the percentage change formula, mass change divided by original mass multiplied by 100, and show the numbers you used.",
        "Name the pieces of apparatus rather than describing actions: balance, cork borer, scalpel, ruler, stopclock and water bath.",
        "State one safety point when asked: eye protection against the acid or alkali, and care with the sharp cork borer or scalpel.",
        "When asked how to improve reliability, answer 'repeat and calculate a mean', and add 'identify and discard anomalous results'.",
      ],
      commonMistakes: [
        "Comparing absolute mass changes between cylinders of different starting masses instead of percentage changes.",
        "Weighing the potato cylinders wet, which inflates the gain and makes an osmosis result meaningless.",
        "Cutting cylinders from different tubers, so tissue variability is mixed into the independent variable.",
        "Explaining that the agar cube changed colour 'because the acid was absorbed by the cells'. Agar has no cells; the acid diffuses.",
      ],
      recap: [
        "Describe how you would show the effect of sucrose concentration on plant tissue by osmosis, naming the variable you change and the variable you measure. [4]",
        "A potato cylinder gains mass in solution A and loses mass in solution B. Compare the water potential of the cell sap with that of each solution. [3]",
        "Explain why the percentage change in mass is used instead of the change in grams. [2]",
        "Three agar cubes of 5 mm, 10 mm and 15 mm side are placed in dilute acid. Predict the order in which they lose colour and explain. [3]",
        "State two variables that must be kept constant in the potato experiment. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_3: Chapter = chapterThree;
