import type { Chapter } from "./types";

const IMG = "/notes/agriculture";

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

const rootArt = artPanel([
  {
    src: "ag03-root-osmosis.webp",
    alt: "A root tip with a fringe of fine root hairs, beside a magnified root-hair cell with water arrows passing inward through its thin wall",
    caption: "Root hairs: thin walls, huge surface",
  },
  {
    src: "ag03-leaf-section.webp",
    alt: "Cutaway of a leaf showing the waxy cuticle, packed palisade cells, airy spongy mesophyll, a vein and open stomata with carbon dioxide entering and oxygen leaving",
    caption: "Where the water ends up: the leaf",
  },
]);

const dispersalArt = artPanel([
  {
    src: "ag03-flower-structure.webp",
    alt: "A maize tassel shedding pollen beside an opened maize ear with long silks, and a bean flower cut open to show its stamens and stigma",
    caption: "Anthers shed pollen; stigmas receive it",
  },
  {
    src: "ag03-dispersal.webp",
    alt: "Three seeds travelling: a winged seed spinning in the wind, a hooked burr caught on animal fur, and a coconut floating on water",
    caption: "Wind, animal and water: three ways to travel",
  },
]);

const germinationArt = artPanel([
  {
    src: "ag03-germination-vegetative.webp",
    alt: "A maize seedling with its seed still below ground beside a bean seedling lifted on a hooked stem, with a sprouting potato tuber and a rooted cassava cutting alongside",
    caption: "Two seedlings, a tuber and a cutting",
  },
  {
    src: "ag03-transpiration-stream.webp",
    alt: "Cutaway of a stem and leaf showing water rising in the xylem, sugars moving down in the phloem and water vapour leaving an open stoma",
    caption: "The stream a cutting must keep up",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Principles of Plant Growth",
  intro: `Plants are factories with plumbing: roots mine water and salts, leaves capture light, and stems connect the two.\n\nThis chapter follows one drop of water from a root hair to a stoma, and one grain of pollen from an anther to an ovule.\n\nEvery process is examinable as a **mechanism**, so learn the structure, the direction of movement and the energy source together.\n\nExpect calculations on surface area, plant population, seed rate and transpiration rate.\n\nKeep five words apart: **osmosis**, **translocation**, **transpiration**, **pollination** and **fertilisation**.`,
  subheadings: [
    {
      title: "Roots and Water Absorption",
      body: `### A Root Has Four Jobs

**Roots** anchor the plant, absorb water, absorb mineral salts, and in some crops store food.

Cassava, carrot and sweet potato are grown mainly for swollen storage roots.

A cereal such as maize has a **fibrous** root system; a dicot such as bean has a **tap root** with laterals.

Maize roots work mostly in the top 60 cm, while a cassava tap root can reach beyond 1 m.

Deep roots keep a crop alive through a short dry spell.

### Zones From the Root Tip

The **root cap** protects the tip as it pushes between soil particles.

Behind it the **meristematic zone** divides, adding new cells by mitosis.

Next, the **zone of elongation** stretches those cells, so the root lengthens.

Then comes the **root hair zone**, where nearly all absorption happens.

Older parts behind it are suberised and absorb very little, so they anchor instead.

### Root Hairs Are the Absorbing Surface

Each **root hair** is a narrow extension of an epidermal cell, about 0.5-1 mm long.

It has no cuticle, a very thin wall, and a film of soil water around it.

Hairs grow between soil particles and touch the water held in the pore spaces.

A single hair lives only a few days and is replaced as the root extends.

Absorption depends on their number, not their length: a healthy plant carries millions.

### Tissues Inside a Root

The outside is the **epidermis**, one cell thick, carrying the root hairs.

The **cortex** is a broad band of thin-walled cells that stores starch and passes water inward.

The **endodermis** is a single layer that acts as a valve, forcing water into the xylem.

Inside it, the **pericycle** can start new lateral roots.

The **xylem** lies at the centre, often star-shaped in a dicot, and carries water upward.

The **phloem** sits between the xylem arms and carries sugars down to the roots.

### Osmosis Brings Water In

**Osmosis** is the movement of water from a dilute solution to a more concentrated one through a partially permeable membrane.

Soil water is a very weak solution of mineral salts.

Root hair sap contains sugars and salts, so it is more concentrated than the soil water.

Water therefore enters the hair by osmosis and the cell becomes **turgid**.

No energy is used and no carrier protein is needed, so osmosis is passive.

### Minerals Take Two Routes

A few ions enter by **diffusion**, moving down their concentration gradient.

Most enter by **active transport**, against the gradient, using energy from respiration.

That is why roots need oxygen: waterlogged soil suffocates them and uptake falls.

Once inside, ions dissolve in the water and travel with it.

Some, such as calcium, are held back in the root and move only slowly upward.

### The Route to the Xylem

Water crosses the cortex by osmosis from cell to cell, and also along the wet cell walls.

At the endodermis it must pass through living cells, which filters what enters the stele.

It then enters the **xylem vessels**: dead, hollow, lignified tubes with no end walls.

**Root pressure** pushes a little water up, especially at night when transpiration is low.

Most of the pull comes from above, from the transpiring leaves.

### When Absorption Fails

Compacted soil has few air spaces, so roots cannot grow or respire.

Waterlogging fills the pores, roots switch to anaerobic respiration, and they rot.

In drought the soil solution becomes more concentrated than the sap, so water leaves the root.

The same reversal follows heavy fertiliser application: **fertiliser burn** plasmolyses the hairs.

Saline irrigation water scorches a crop in exactly the same way.

### Worked Example: Surface Area of Root Hairs

Treat one hair as a cylinder, area = πdl.

For d = 0.010 mm and l = 1.0 mm: 3.14 × 0.010 × 1.0 = 0.031 mm².

One million hairs add 1,000,000 × 0.031 = 31,000 mm².

That is 310 cm², roughly a sheet of A4 paper, from a single root system.

It explains why transplanting, which tears hairs, makes a seedling wilt for days.

### Worked Example: How Much Water a Crop Uses

One millimetre of rain over one hectare is 10 m³ of water.

A maize crop uses about 500 mm in a season.

500 × 10 = 5,000 m³ per hectare, which is 5 million litres.

Only about 1% of that is built into dry matter; the rest leaves through the leaves.

So a crop is mostly a pump, and the soil is its tank.`,
      figure: rootArt,
      groups: [
        {
          subTitle: "Root Tissues and Their Jobs",
          bullets: [
            "**Epidermis:** one cell thick, produces root hairs, absorbs water and salts.",
            "**Cortex:** stores starch and passes water inward to the stele.",
            "**Endodermis:** a one-cell valve that forces water into the xylem.",
            "**Xylem:** dead lignified vessels carrying water and minerals upward only.",
            "**Phloem:** living sieve tubes carrying sucrose down to the roots.",
          ],
        },
        {
          subTitle: "How Water and Salts Get In",
          bullets: [
            "**Osmosis:** water moves from dilute soil solution to concentrated cell sap, passively.",
            "**Diffusion:** some ions drift in down their concentration gradient.",
            "**Active transport:** most ions are pumped in against the gradient, using ATP and oxygen.",
            "**Mass flow:** water carrying dissolved salts is dragged in as the plant transpires.",
            "**Root pressure:** a small push at night, enough to cause guttation in young plants.",
          ],
        },
        {
          subTitle: "Why Uptake Fails",
          bullets: [
            "**Compaction:** few pores, so roots cannot extend and water cannot infiltrate.",
            "**Waterlogging:** no air, so roots cannot respire and active transport stops.",
            "**Drought:** soil sap becomes stronger than root sap and water leaves the root.",
            "**Fertiliser burn:** a concentrated band of salts plasmolyses root hairs.",
            "**Transplanting:** torn hairs remove the absorbing surface until new roots form.",
          ],
        },
      ],
      examinerTips: [
        "Define osmosis with all three parts: dilute to concentrated, partially permeable membrane, water only.",
        "Name the tissue at each stage when tracing water, because the sequence itself carries marks.",
        "Say active transport, not absorption, for mineral ions moving against their gradient.",
        "Link root hair shape to surface area, then to the rate of absorption.",
        "For a transplant question, mention damaged root hairs, reduced uptake and wilting, then shade and watering.",
      ],
      commonMistakes: [
        "Saying roots absorb food; they absorb water and mineral salts, while food is made in leaves.",
        "Calling osmosis diffusion of water with no membrane; the partially permeable membrane is essential.",
        "Claiming minerals enter only by osmosis; dissolved salts move by diffusion, active transport and mass flow.",
        "Placing root hairs at the very tip; they sit behind the elongation zone, above the root cap.",
        "Forgetting that xylem is dead tissue, so transport needs no living cell energy.",
      ],
      recap: [
        "State three functions of roots in a crop plant. [3]",
        "Describe the distribution of tissues in a root tip, from the cap to the older region. [4]",
        "Explain how a root hair cell absorbs water from the soil. [3]",
        "Explain why waterlogging reduces the uptake of mineral salts more than the uptake of water. [3]",
        "A root system carries 1.5 million root hairs, each 0.8 mm long and 0.012 mm wide. Use area = πdl to estimate the total hair surface. [3]",
      ],
    },
    {
      title: "The Leaf and Photosynthesis",
      body: `### A Leaf Is Built for Capture and Diffusion

A leaf is a thin, flat solar panel with pores.

Thin means a short diffusion path; flat means a large area for light.

Both raise the rate of gas exchange and of light absorption.

A maize leaf is long and narrow with parallel veins; a bean leaf is broad with a net of veins.

### Layers From Top to Bottom

The **cuticle** is a waxy coat that limits water loss but lets light through.

The **upper epidermis** is transparent and has almost no chloroplasts.

The **palisade mesophyll** is a layer of tall, closely packed cells rich in chloroplasts.

The **spongy mesophyll** below is loose, with big air spaces that let gases circulate.

**Vascular bundles** bring water in xylem and take sucrose away in phloem.

The **lower epidermis** carries most stomata in a broad dicot leaf.

### Stomata and Guard Cells

A **stoma** is a pore bordered by two **guard cells**.

In light the guard cells take up water and potassium ions, become turgid, and the pore opens.

In darkness or drought they lose water, go flaccid, and the pore closes.

A dicot leaf may carry 100-400 stomata per mm², mostly on the underside.

Grass leaves, which roll in dry weather, have stomata on both surfaces.

### Gas Exchange Is Plain Diffusion

Respiration takes in oxygen and releases carbon dioxide all the time.

Photosynthesis takes in carbon dioxide and releases oxygen only in light.

In daylight photosynthesis usually wins, so CO2 diffuses in and O2 diffuses out.

At night only respiration runs, so O2 diffuses in and CO2 out.

Diffusion needs no energy or carrier, only a concentration gradient.

The moist cell walls keep the gases dissolved so they can move.

### Photosynthesis in Words and Symbols

Word equation: carbon dioxide + water → glucose + oxygen, using light energy and chlorophyll.

Balanced: 6CO2 + 6H2O → C6H12O6 + 6O2.

**Chlorophyll** absorbs mainly red and blue light and reflects green, which is why leaves look green.

Light energy is converted into chemical energy stored in glucose.

Glucose is changed at once into **starch** for storage or **sucrose** for transport.

It also builds cellulose for walls, protein when nitrate is available, and oil in oilseeds.

### Limiting Factors

The factor in shortest supply sets the rate; that is the **limiting factor**.

In a shaded plot it is light; in a sealed greenhouse it is CO2; in cool weather it is temperature.

Raising a factor that is not limiting changes nothing at all.

A water shortage closes stomata, so CO2 supply falls and photosynthesis stalls even in full sun.

Nitrogen and magnesium shortages reduce chlorophyll, so the older leaves yellow.

### Testing a Leaf for Starch

Destarch the plant in a dark cupboard for 24 hours.

Boil the leaf in water to kill the cells, then in alcohol in a hot water bath to remove chlorophyll.

Rinse the softened leaf and add iodine solution.

A blue-black colour shows starch, so photosynthesis has happened.

A brown iodine colour means no starch was made.

### Worked Example: Leaf Area Index

A maize stand has 8 plants per m² and 0.55 m² of leaf per plant.

Leaf area index = 8 × 0.55 = 4.4.

That means 4.4 m² of leaf hangs over every m² of ground.

Values of 3-5 intercept most of the light; below 2 the crop wastes sunshine.

### Worked Example: Counting Stomata

A lower epidermis carries 250 stomata per mm².

One cm² is 100 mm², so there are 25,000 stomata per cm².

A leaf of 180 cm² therefore carries 25,000 × 180 = 4,500,000 stomata.

Each is a diffusion doorway, which is why a leaf cannot last long without water.

### Worked Example: From Dry Matter to Grain

A crop builds 18 t/ha of total dry matter in a season.

Grain accounts for 8 t of that dry matter.

Harvest index = 8 ÷ 18 = 0.44, or 44%.

The rest is stem, leaf and root, which is why stover still feeds cattle.

### Leaves That Cope With Dry Air

A xerophyte reduces water loss as well as photosynthesising.

Sunken stomata trap a layer of moist air, slowing diffusion.

Hairs on the surface do the same; a thick cuticle blocks cuticular loss.

Rolled leaves hide the stomata inside a groove.

A small, thick leaf loses less water than a large, thin one.

### Sunlight Through the Canopy

Only the top leaves receive full sunlight.

Lower leaves get diffuse light and often operate below their maximum rate.

That is why a dense canopy of 4-5 leaf layers can still gain, but a sparse one wastes land.

Weeds compete first for light, and a shaded crop ear sets fewer kernels.`,
      groups: [
        {
          subTitle: "Leaf Tissues and Their Jobs",
          bullets: [
            "**Cuticle:** waxy, transparent, restricts water loss and blocks pathogens.",
            "**Palisade mesophyll:** packed chloroplasts, the main site of photosynthesis.",
            "**Spongy mesophyll:** air spaces for gas movement and some photosynthesis.",
            "**Vein:** xylem delivers water, phloem removes sucrose, fibres give support.",
            "**Guard cells:** open and close the stoma by changes in turgor.",
          ],
        },
        {
          subTitle: "Photosynthesis Essentials",
          bullets: [
            "**Raw materials:** carbon dioxide from air, water from soil, light absorbed by chlorophyll.",
            "**Products:** glucose, which becomes starch, sucrose, cellulose, protein or oil.",
            "**Equation:** 6CO2 + 6H2O gives C6H12O6 + 6O2 in the presence of light and chlorophyll.",
            "**Limiting factors:** light, CO2 concentration, temperature, water and mineral supply.",
            "**Test:** destarch, boil in alcohol, add iodine; blue-black means starch.",
          ],
        },
        {
          subTitle: "Diffusion Through a Stoma",
          bullets: [
            "**Gradient:** CO2 is lower inside the leaf than outside in daylight, so it enters.",
            "**Gradient:** O2 is higher inside than outside, so it leaves.",
            "**Short path:** a thin leaf means fast diffusion in both directions.",
            "**Moist surface:** gases dissolve in the film of water on the cell walls.",
            "**Control:** stomatal opening, not diffusion itself, sets the size of the flow.",
          ],
        },
      ],
      examinerTips: [
        "Write the equation with light and chlorophyll above the arrow, not as reactants.",
        "When explaining a rate change, name the limiting factor and the mechanism behind it.",
        "Use the words thin, flat, moist and air spaces when linking leaf structure to gas exchange.",
        "For starch test questions, keep the order: destarch, boil, alcohol, rinse, iodine.",
        "Quote stomatal counts on the correct surface; most dicots have more on the lower epidermis.",
      ],
      commonMistakes: [
        "Saying plants breathe out oxygen at night; they respire both day and night.",
        "Writing that photosynthesis makes energy; it transfers light energy into chemical energy.",
        "Claiming stomata are cells; they are pores bounded by two guard cells.",
        "Putting chlorophyll as a product or reactant rather than a light absorber.",
        "Explaining wilting as a lack of food; it is a loss of turgor from water shortage.",
      ],
      recap: [
        "State the word equation for photosynthesis and name the energy source. [3]",
        "Describe how the structure of a leaf is adapted for gas exchange. [4]",
        "Explain why the rate of photosynthesis stops rising when light intensity is increased at low CO2. [2]",
        "A stand has 9 plants per m² and 0.6 m² of leaf per plant. Calculate the leaf area index. [2]",
        "Describe an experiment to show that light is needed for starch formation in a leaf. [5]",
      ],
    },
    {
      title: "Stems, Xylem, Phloem and Transpiration",
      body: `### What a Stem Does

A stem supports leaves in the best light and spaces them for diffusion.

It carries water upward and food in both directions.

It may store food, as sugar cane stores sucrose in its stem.

Young green stems photosynthesise, and many crops are propagated from stem pieces.

Thorns, hairs and bark protect the stem from animals and water loss.

### Inside a Dicot Stem

The **epidermis** has a thin cuticle and a few stomata.

The **cortex** lies just inside, often storing starch.

**Vascular bundles** are arranged in a ring, which is the dicot pattern.

Each bundle has **cambium** between the xylem and phloem.

**Xylem** faces the centre and **phloem** faces the outside.

The centre is **pith**, and **medullary rays** run between bundles for storage and sideways transport.

A monocot stem, by contrast, has scattered bundles and no cambium.

### Xylem: Dead Tubes for Water

**Xylem vessels** are dead at maturity, with no end walls and no contents.

Their walls are thickened with **lignin**, which stops collapse under tension and gives the stem strength.

**Tracheids** are narrower, tapering dead cells that also carry water.

Fibres in the xylem add support rather than transport.

Water moves upward only, from root to leaf.

### Phloem: Living Tubes for Food

**Sieve tubes** are living but lose their nucleus at maturity.

Their end walls are perforated into **sieve plates**.

Each sieve tube has a **companion cell** packed with mitochondria.

The companion cell loads sucrose into the tube and keeps the whole system alive.

Phloem carries sucrose and amino acids in both directions, from source to sink.

### Translocation Moves Synthesised Food

**Translocation** is the movement of dissolved food through the phloem.

A **source** is any part making or releasing sugar: a mature leaf, or a storage organ emptying.

A **sink** is any part using or storing it: root tips, young leaves, fruits, tubers.

Sucrose is loaded actively at the source, water follows by osmosis, and pressure pushes the sap to the sink.

Because loading is active, translocation needs energy and therefore oxygen.

### Modified Storage Organs

A **storage organ** is a swollen plant part packed with food for later use.

The **cassava root** stores starch, which is why it is processed into flour and gari.

The **sweet potato root** stores starch and some sugar, giving its sweetness.

The **Irish potato tuber** is a swollen underground stem full of starch.

The **yam tuber** is also a stem, storing starch and mucilage.

**Sugar cane** stores sucrose in the stem, and **groundnut** stores oil and protein in the seed.

### Worked Example: Sugar Recovered From Cane

A field yields 70 t of cane per hectare.

Sucrose content is 12% of fresh mass.

Sucrose = 70 × 0.12 = 8.4 t per hectare.

A mill recovers 85% of it: 8.4 × 0.85 = 7.1 t of sugar.

That is about 142 bags of 50 kg from one hectare.

### Transpiration, Step by Step

**Transpiration** is the loss of water vapour from a plant, mainly through stomata.

Water evaporates from the moist walls of mesophyll cells into the air spaces.

It then diffuses out through the stomata, down a concentration gradient.

A little escapes through the cuticle, but **stomatal transpiration** dominates.

About 99% of the water absorbed is lost this way; only about 1% is used in growth and photosynthesis.

### The Transpiration Stream

The loss creates a **tension** that pulls water up the xylem.

Water molecules stick to each other (**cohesion**), so the column stays continuous.

They also stick to the lignin walls (**adhesion**), which helps hold the column.

**Root pressure** adds a small push from below.

The stream also delivers dissolved minerals to every leaf, and evaporation cools the leaf.

### The Four Factors, With Numbers

**Temperature:** warm air holds more vapour and evaporation speeds up. Raising leaf temperature from 20 °C to 30 °C can roughly double the rate.

**Humidity:** a damp day reduces the gradient. At 90% relative humidity the rate may be half that at 50%.

**Wind:** moving air sweeps vapour away and steepens the gradient. A gentle breeze can raise the rate three to five times; a gale may close stomata instead.

**Light:** light opens stomata and warms the leaf. Daytime loss can be five to ten times the night rate.

Leaf area, stomatal number, cuticle thickness and soil water also matter.

### Worked Example: Rate From a Potometer

A shoot takes up 14.4 cm³ of water in 12 minutes.

Rate = 14.4 ÷ 12 = 1.2 cm³ per minute.

Per hour: 1.2 × 60 = 72 cm³.

With 240 cm² of leaf, loss = 72 ÷ 240 = 0.3 cm³ per cm² per hour.

### Water Stress in the Field

When loss exceeds uptake, cells lose turgor and the plant **wilts**.

Stomata then close, photosynthesis falls, and growth stops.

A crop that wilts at midday recovers at night, but repeated wilting cuts yield.

Mulch, windbreaks and shade nets all cut transpiration by changing the microclimate.

Irrigation must replace what the crop transpires, not just what it drinks.`,
      groups: [
        {
          subTitle: "Xylem Against Phloem",
          bullets: [
            "**Xylem:** dead, lignified, no end walls, transports water and minerals upward only.",
            "**Phloem:** living sieve tubes with companion cells, transports sucrose and amino acids both ways.",
            "**Xylem energy:** none needed, driven by transpiration tension and root pressure.",
            "**Phloem energy:** active loading at the source requires ATP from companion cells.",
            "**Direction:** xylem follows a gradient of water potential; phloem follows source to sink.",
          ],
        },
        {
          subTitle: "Storage Organs and What They Hold",
          bullets: [
            "**Cassava root:** starch, the cheapest calorie crop on poor soils.",
            "**Sweet potato root:** starch with some sugar, giving sweetness.",
            "**Irish potato and yam:** swollen underground stems storing starch.",
            "**Sugar cane stem:** sucrose, extracted and crystallised at the mill.",
            "**Groundnut seed:** oil and protein, a legume storing both.",
          ],
        },
        {
          subTitle: "What Changes the Transpiration Rate",
          bullets: [
            "**Temperature up:** faster evaporation and a bigger gradient, so rate rises.",
            "**Humidity up:** a smaller gradient, so rate falls.",
            "**Wind up:** vapour is removed, so rate rises until stomata close.",
            "**Light up:** stomata open and the leaf warms, so rate rises sharply.",
            "**Leaf area up:** more stomata and surface, so the whole plant loses more.",
          ],
        },
      ],
      examinerTips: [
        "Define translocation and transpiration separately, since the words are easily swapped.",
        "For a 4-mark factor question, give the factor, its effect on the gradient or stomata, and the direction of change.",
        "Say water moves up in xylem and sucrose moves from source to sink, never the reverse.",
        "When tracing the stream, use cohesion, adhesion, tension and root pressure in that order.",
        "Compare xylem and phloem in a table of structure, contents, direction and energy.",
      ],
      commonMistakes: [
        "Saying phloem carries water and xylem carries food; it is the other way round.",
        "Claiming transpiration is wasteful; it drives the stream and cools the leaf.",
        "Writing that wind always increases transpiration; strong wind can close stomata.",
        "Describing translocation as diffusion; it is pressure flow driven by active loading.",
        "Calling a potato tuber a root; it is a modified underground stem.",
      ],
      recap: [
        "Describe the distribution of xylem and phloem in a dicot stem and state the function of each. [4]",
        "Define translocation and explain why it needs energy. [3]",
        "Explain how the transpiration stream carries water from the soil to the leaves. [4]",
        "Explain the effect of high humidity and strong wind on the rate of transpiration. [4]",
        "A cane crop yields 60 t/ha at 13% sucrose and the mill recovers 80%. Calculate the sugar produced. [3]",
      ],
    },
    {
      title: "Flowers, Pollination and Fertilisation",
      body: `### Sexual Reproduction Means Gametes Fuse

**Sexual reproduction** is the fusion of a male gamete with a female gamete to form a zygote.

The zygote grows into an embryo inside a seed.

Because two parents contribute, the offspring differ from each other and from both parents.

That **variation** is the real advantage: a varied population survives new pests and dry years.

Asexual reproduction, covered later, makes identical offspring instead.

### The Maize Plant Has Two Kinds of Flower

Maize is **monoecious**, meaning male and female flowers grow on the same plant.

The **tassel** at the top is the male flower, a branched spike of tiny florets.

Each floret has three **anthers** on filaments and sheds clouds of light pollen.

The **ear** in a leaf axil is the female flower, wrapped in husks.

It holds hundreds of ovules, each with one long **silk** hanging outside the husk.

### The Silk Is Stigma and Style Together

Each silk is a **stigma** with a **style** running its whole length.

Every ovule has its own silk, so the number of silks equals the possible kernels.

Silks emerge over two or three days, which spreads the chance of receiving pollen.

A pollen grain landing anywhere along a silk can fertilise that ovule.

Cut or dried silks mean no kernel at that spot, so the cob ends up gappy.

### The Bean Flower Is Built for Insects

A bean flower is **bisexual**: stamens and stigma sit in the same flower.

Its petals form a **banner**, two **wings** and a **keel** that encloses the stamens.

There are ten stamens, nine fused into a tube and one free.

The **ovary** is superior, with a curved style and a sticky stigma.

Nectar at the base of the ovary attracts bees, which push past the stamens to reach it.

### Pollination Is Only the Delivery

**Pollination** is the transfer of pollen from anther to stigma.

It is not fertilisation: the gametes have not met yet.

**Self-pollination** moves pollen within one flower or one plant.

**Cross-pollination** moves pollen to a different plant of the same species.

Cross-pollination gives variation but depends on an agent; selfing is reliable but narrows the gene pool.

### Wind and Insect Pollination Compared

Wind-pollinated flowers such as maize, sorghum and grasses are small, dull and scentless.

Their anthers hang outside the flower and their stigmas are feathery and exposed.

They make huge amounts of light, dry pollen, and most of it is wasted.

Insect-pollinated flowers such as bean, sunflower and tomato are large, coloured and scented, with nectar.

Their pollen is sticky and made in smaller amounts, and the stigma is often enclosed.

### Fertilisation in Maize

A pollen grain lands on a silk and germinates.

A **pollen tube** grows down the full length of the silk to the ovary.

It enters the ovule through the **micropyle** and releases the male gamete.

The male gamete fuses with the egg to form a **zygote**.

The ovule becomes the seed and the ovary wall becomes the fruit wall.

### What Changes After Fertilisation

Unfertilised silks wither and turn brown while the ear begins to swell.

In a bean flower the petals, anthers and style fall away.

The ovary grows into a **pod**, and each ovule becomes a bean seed.

In maize the whole cob is the fruit and each kernel is one seed inside its own fruit wall.

A missing kernel marks an ovule that was never fertilised.

### Why Pollination Fails in the Field

Drought at silking dries the silks before pollen arrives.

Very high temperature kills pollen before the tassel sheds it.

Heavy rain washes pollen from the air and keeps maize tassels closed.

Too few plants per hectare leave pollen and silks far apart.

Few bees near a bean field means many flowers drop without setting pods.

### Worked Example: Kernels on One Cob

An ear carries 700 silks and 90% are successfully fertilised.

700 × 0.90 = 630 kernels.

At 0.35 g per kernel, the cob holds 630 × 0.35 = 220 g of fresh grain.

At 53,333 plants per hectare with one cob each, that is 11.7 t/ha of fresh cobs.

Grain is about 60% of fresh cob mass, so expect roughly 7 t/ha.

### Helping Pollination in Practice

Plant maize in blocks of at least four rows rather than long thin strips, so pollen falls close to silks.

Sow within one week so all plants flower together.

Keep bees by avoiding insecticide sprays at flowering.

Provide hedges or flowering strips near bean fields.

Never spray insecticide on open flowers in the morning, when bees are working.`,
      groups: [
        {
          subTitle: "Maize Against Bean Flowers",
          bullets: [
            "**Maize:** monoecious, tassel male, ear female, wind pollinated, no scent or nectar.",
            "**Bean:** bisexual, banner and keel petals, insect pollinated, scented with nectar.",
            "**Pollen:** maize light and dry in millions of grains; bean sticky and few.",
            "**Stigma:** maize a long silk outside the husk; bean a sticky stigma inside the keel.",
            "**Result:** maize cob is a fruit of many kernels; bean pod is a fruit of several seeds.",
          ],
        },
        {
          subTitle: "Pollination Is Not Fertilisation",
          bullets: [
            "**Pollination:** pollen lands on a stigma, a transfer with no fusion yet.",
            "**Germination:** the pollen grain grows a tube down the style.",
            "**Fertilisation:** the male gamete fuses with the egg inside the ovule.",
            "**Zygote:** the single cell that becomes the embryo of the seed.",
            "**Timing:** pollination can happen days before fertilisation in maize.",
          ],
        },
        {
          subTitle: "What Limits Seed Set",
          bullets: [
            "**Water stress at flowering:** silks dry out and pollen is sterile.",
            "**Heat:** above about 35 °C pollen dies and kernels are few.",
            "**Poor spacing:** plants too far apart waste pollen and leave gaps.",
            "**Few pollinators:** beans and other insect crops set fewer pods.",
            "**Pests:** earworm and birds damage silks and developing kernels.",
          ],
        },
      ],
      examinerTips: [
        "Label a flower with anther, filament, stigma, style and ovary before describing the process.",
        "Keep pollination and fertilisation in separate sentences, because examiners award them separately.",
        "For maize, say the silk is stigma plus style and the pollen tube grows down its whole length.",
        "When comparing wind and insect flowers, always pair a feature with its advantage.",
        "For a failure question, name the stage, the cause and the effect on kernel number.",
      ],
      commonMistakes: [
        "Saying maize pollen lands on the cob; it lands on a silk that leads to the ovule.",
        "Claiming wind-pollinated flowers have no petals at all; they have small, dull ones.",
        "Confusing the tassel with the ear; the tassel is male and sits at the top.",
        "Writing that fertilisation happens on the stigma; it happens inside the ovule.",
        "Assuming self-pollination is impossible in maize; it can self, but wind usually crosses it.",
      ],
      recap: [
        "Define sexual reproduction and state one advantage of it to a crop species. [3]",
        "Describe the structure of a maize flower and explain how it is adapted for wind pollination. [5]",
        "Compare insect-pollinated and wind-pollinated flowers using three features. [3]",
        "Describe fertilisation in maize, from pollen landing to zygote formation. [4]",
        "Explain why a maize crop may produce cobs with many missing kernels. [4]",
      ],
    },
    {
      title: "Seed and Fruit Dispersal",
      body: `### A Fruit Protects and Moves the Seed

A **fruit** is the mature ovary, sometimes with the receptacle fused to it.

A **seed** is the fertilised ovule, holding an embryo and a food store.

Fleshy fruits attract animals that eat them and drop the seeds later.

Dry fruits either split open or hold on until something carries them.

The fruit is the seed's transport and protection, not a reward for the plant.

### Why Dispersal Matters

**Dispersal** is the movement of seeds or fruits away from the parent plant.

Without it, seedlings compete with the parent for light, water and minerals.

Pests and diseases also build up under a parent plant, so distance means safety.

Dispersal lets a species colonise new ground, such as a gap in a hedge or a fresh river bank.

It also spreads the risk: some seeds land well, others land badly.

### Wind Dispersal

Wind-dispersed seeds are light, with a large surface compared with their mass.

Some have wings, such as jacaranda and wild lettuce.

Others have plumes or hairs, such as cotton and Vernonia.

The parent often releases them in dry, breezy weather, when the air is unstable.

Maize is not wind dispersed: its kernel is heavy and stays on the cob until harvest or bird damage.

### Animal Dispersal

Some fruits have hooks or barbs that catch in fur, feathers and clothing.

**Blackjack** and other Bidens species are the classic local example.

Others have sticky mucilage that glues them to a passing animal.

Fleshy fruits such as tomato, guava and mango are eaten, and the hard seeds pass through the gut intact.

Humans spread weeds too: in mud on boots, tyres and tractor implements.

### Water Dispersal

A **coconut** floats because its fibrous husk traps air, and it can cross an ocean.

Water lilies and some sedges release seeds that float before sinking.

Rivers, floods and irrigation water all carry seed downstream.

That is why a clean field beside a dirty drain can be infested after one flood.

Seeds of many weeds stay viable after days or weeks in water.

### Mechanical and Gravity Dispersal

A ripe bean pod dries, twists and throws its seeds a short distance.

Some weeds have explosive capsules that fire seed when touched.

Heavy fruits such as mango and coconut simply fall near the parent.

They then rely on animals, water or people for a second move.

Gravity alone rarely moves a seed more than a metre.

### Weeds Are Plants in the Wrong Place

A **weed** is any plant growing where it is not wanted.

Weeds compete for light, water and nutrients, and they host pests and diseases.

They raise production costs and can poison livestock, as Datura does.

Some, like striga, parasitise the crop directly.

Every weed arrived by dispersal: wind, animals, dirty seed, manure or machinery.

### Dispersal Explains the Seed Bank

Every soil carries a **seed bank**, the store of dormant weed seeds in it.

Seeds survive for years; some remain viable for a decade or more.

Each season, part of the bank germinates when it is disturbed.

So a single weeding does not clear a field; it only removes this season's flush.

Cultivation brings buried seed back to the surface, where it germinates.

### Why Early Weeding Matters

Crops are most sensitive in the first three to six weeks after emergence.

That is the **critical period** of competition, when yield potential is being set.

Unweeded maize can lose 30-60% of its yield, mostly through water and nitrogen theft.

A weed that has already flowered has done its damage and added to the seed bank.

Small weeds are also easier to kill with a hoe or a herbicide.

### Cutting Weeds Before They Seed

Hand-rogue weeds before flowers open, then remove the plants from the field.

One blackjack plant can shed 2,000-3,000 seeds, so early removal pays.

The old rule is one year's seeding, seven years' weeding.

Never compost flowering weeds, and never spread fresh manure containing seed.

Clean the seed drill and tractor tyres between fields.

### Worked Example: Seed Rain From One Patch

A 0.05 ha patch is 500 m².

It carries 10 weeds per m², so 5,000 weed plants.

If each sheds 2,000 seeds: 5,000 × 2,000 = 10,000,000 seeds.

Even if 1% establish, that is 100,000 new weeds, or 200 per m².

The field is now infested for years, from one season of neglect.

### Dispersal and Weed Control Together

Understanding the agent tells you the control.

Wind-borne seed means keeping field margins mown before flowering.

Water-borne seed means cleaning irrigation channels and avoiding floodwater.

Animal-borne seed means quarantining new stock and cleaning implements.

Seed-borne weeds mean buying certified seed and screening farm-saved grain.

Stale seedbeds, mulches and cover crops all reduce the flush that reaches the crop.`,
      figure: dispersalArt,
      groups: [
        {
          subTitle: "The Four Agents",
          bullets: [
            "**Wind:** light, winged or plumed seed, released in dry breezy weather.",
            "**Animal:** hooks and barbs, sticky mucilage, or fleshy fruit eaten and passed through the gut.",
            "**Water:** buoyant husks such as coconut, floating seed carried by rivers and floods.",
            "**Mechanical and gravity:** twisting pods and explosive capsules, then a short fall.",
          ],
        },
        {
          subTitle: "Weed Control by Blocking Dispersal",
          bullets: [
            "**Certified seed:** stops weed seed arriving in the bag.",
            "**Clean implements:** mud on tyres and drills moves seed between fields.",
            "**Mown margins:** stops wind-borne weeds flowering at the field edge.",
            "**Clean water:** screens and channels stop irrigation carrying seed.",
            "**Rogueing:** pull flowering weeds by hand before seed set begins.",
          ],
        },
        {
          subTitle: "Why the First Weeks Decide Yield",
          bullets: [
            "**Critical period:** the first three to six weeks, when the crop is small.",
            "**Water:** weeds transpire heavily, and maize needs about 500 mm a season.",
            "**Nutrients:** weeds take nitrogen that the crop has been paid for.",
            "**Light:** early weeds shade young plants and reduce tillering.",
            "**Seed return:** a late weeding removes plants but not the seed already shed.",
          ],
        },
      ],
      examinerTips: [
        "Link each dispersal agent to one structural feature and one example, not a list of names.",
        "For weed questions, name the crop, the weed and the mechanism of competition.",
        "Explain early weeding by the critical period and by preventing seed return.",
        "Use the word dispersal for movement of seed, and germination for its later growth.",
        "When asked why dispersal is an advantage, give survival of the species, not comfort of the seed.",
      ],
      commonMistakes: [
        "Saying maize is wind dispersed; the kernel is heavy and stays on the cob.",
        "Describing a burr as a seed; the burr is the fruit carrying the seed.",
        "Confusing dispersal with pollination; one moves seed, the other moves pollen.",
        "Claiming weeds only compete for light; water and nutrients usually matter more.",
        "Weeding after flowering and expecting no seed return; seed is already shed.",
      ],
      recap: [
        "Define dispersal and state three advantages of it to a plant species. [4]",
        "Describe three ways in which fruits or seeds are adapted for wind dispersal. [3]",
        "Explain how the structure of a burr helps dispersal and why it matters for weed control. [3]",
        "Explain why weeds should be removed before they flower. [3]",
        "A 0.04 ha plot carries 8 weeds per m², each shedding 2,500 seeds. Calculate the total seed shed. [3]",
      ],
    },
    {
      title: "Germination and Vegetative Propagation",
      body: `### Two Seeds, Two Designs

A **maize grain** has one cotyledon, called the **scutellum**, pressed against a large **endosperm**.

Its testa is fused with the fruit wall, so the grain is really a fruit.

The **embryo** has a plumule (future shoot) and a radicle (future root).

A **bean seed** has two large **cotyledons** that store the food themselves.

It also has a testa, a **hilum** scar and a **micropyle** pore.

### Germination Starts With Water

**Germination** is the growth of the embryo into a seedling.

Water is absorbed first, so the seed swells and the testa splits.

Enzymes such as amylase break starch into maltose and glucose.

Respiration releases energy for growth, which is why oxygen is essential.

The **radicle** always emerges first, anchoring the seedling and starting absorption.

### Maize Germinates Below Ground

Maize is **hypogeal**: the cotyledon stays in the soil.

The shoot emerges inside a **coleoptile**, a sheath that pushes through the soil.

The scutellum digests the endosperm and passes food to the embryo.

The first true leaf breaks out of the coleoptile at the surface.

The seed sits 3-5 cm deep; deeper sowing exhausts the food store before emergence.

### Bean Germinates Above Ground

Bean is **epigeal**: the cotyledons rise above the soil.

The **hypocotyl** lengthens and arches into a hook, dragging the cotyledons up.

The hook protects the growing tip from abrasion as it breaks the surface.

The cotyledons open, turn green and then shrivel as their food is used.

The first true leaves then expand and photosynthesis takes over.

### Three Conditions for Germination

**Water** softens the testa, activates enzymes and fills the cells.

**Oxygen** is needed for aerobic respiration of the growing embryo.

**Suitable temperature** sets the enzyme rate: maize needs at least 10-12 °C, with 25-30 °C ideal; bean needs at least 15 °C.

Light is not usually required for maize and bean, though small seeds such as lettuce need light to germinate.

Sowing depth and a fine seedbed also decide success.

### Worked Example: Plants per Hectare

Spacing is 75 cm × 25 cm, which is 0.75 m × 0.25 m = 0.1875 m² per plant.

One hectare is 10,000 m².

Plants per hectare = 10,000 ÷ 0.1875 = 53,333.

At 1 m × 1 m for cassava: 10,000 ÷ 1.0 = 10,000 plants.

At 90 cm × 30 cm: 10,000 ÷ 0.27 = 37,037 plants.

### Worked Example: Seed Rate

Sow two seeds per station to allow for failures.

Seeds needed = 53,333 × 2 = 106,666 per hectare.

With a 1000-grain weight of 250 g: 106,666 × 250 ÷ 1000 = 26,667 g.

That is 26.7 kg of seed, rounded to 27 kg.

If germination is 90%, buy 26.7 ÷ 0.9 = 29.6 kg, so a 30 kg bag.

### Why a Sowing Fails

Sowing too deep uses up the seed's food before the shoot reaches light.

A crusted surface traps the coleoptile and the seedling buckles.

Waterlogging drowns the embryo, and cold soil slows enzymes.

Old seed may be dead; test germination before sowing.

Damping-off fungi rot seedlings in wet, airless soil.

Birds, rats and termites remove seed before it even sprouts.

### Asexual Reproduction Copies the Parent

**Asexual reproduction** makes a new plant from a vegetative part, with no gametes and no fertilisation.

The offspring are genetically identical, so each is a **clone**.

Natural methods include tubers, bulbs, corms, rhizomes, runners and suckers.

Artificial methods include cuttings, layering, grafting and tissue culture.

Farmers use it when a crop must stay true to type.

### Stem Tubers

An **Irish potato tuber** is a swollen underground stem, not a root.

Its **eyes** are axillary buds sitting in the axils of small scale leaves.

Plant a whole small tuber or cut sets with two or three eyes each.

**Yams** form large tubers with a head end, which sprouts, and a tail end.

Yam sets of 100-150 g are cut and the cut faces dusted with ash before planting.

### Stem Cuttings

**Cassava** is planted as a stem cutting 20-30 cm long with five to seven nodes.

It is pushed in at an angle, leaving two or three nodes above ground.

**Sweet potato** uses vine cuttings 25-30 cm long with three or four nodes, two buried.

**Sugar cane** uses **setts** 30-45 cm long carrying two or three buds, laid in a furrow.

Polarity matters: plant the cutting the right way up, buds pointing upward.

### Why Cuttings Need Shade

A cutting has no roots at first, so it cannot replace the water it transpires.

It wilts, and too much sun can kill it before roots form.

Shade, mist and regular watering cut transpiration until new roots appear.

Once roots and root hairs form, the cutting feeds itself.

This is the same transpiration stream shown in the artwork, with no pump yet.

### Clones: Advantages and Risks

Clones are uniform, so they mature together and can be harvested in one pass.

They keep valuable qualities such as taste, yield or disease tolerance.

They need no pollinator and work for crops that rarely set seed, such as cassava.

But uniformity is also a risk: one disease can destroy the whole field.

Cuttings also carry viruses, such as cassava mosaic, from parent to offspring.

That is why planting material must come from clean, inspected stock.`,
      figure: germinationArt,
      groups: [
        {
          subTitle: "Maize Against Bean Germination",
          bullets: [
            "**Maize:** one cotyledon, scutellum, endosperm, hypogeal, coleoptile emerges first.",
            "**Bean:** two cotyledons, no endosperm, epigeal, hypocotyl hook lifts the seed leaves.",
            "**Food store:** maize relies on endosperm; bean relies on its cotyledons.",
            "**Depth:** maize 3-5 cm; bean 2-4 cm in a fine, warm seedbed.",
            "**First organ:** both send out the radicle before any shoot appears.",
          ],
        },
        {
          subTitle: "What a Seed Needs",
          bullets: [
            "**Water:** imbibition, enzyme activation and cell expansion.",
            "**Oxygen:** aerobic respiration for the growing embryo.",
            "**Warmth:** maize above 10-12 °C, bean above 15 °C for steady germination.",
            "**Depth:** shallow enough for the shoot to reach light on stored food.",
            "**Clean seedbed:** no crust, no waterlogging, no damping-off fungi.",
          ],
        },
        {
          subTitle: "Tubers and Cuttings at a Glance",
          bullets: [
            "**Irish potato:** stem tuber, eyes are buds, sets of two or three eyes.",
            "**Yam:** stem tuber, head end sprouts, sets of 100-150 g dusted with ash.",
            "**Cassava:** stem cutting 20-30 cm, five to seven nodes, planted at an angle.",
            "**Sweet potato:** vine cutting 25-30 cm, two nodes buried.",
            "**Sugar cane:** sett 30-45 cm with two or three buds, laid in a furrow.",
          ],
        },
      ],
      examinerTips: [
        "Learn the maize and bean seed labels separately; one has endosperm, the other two cotyledons.",
        "Use hypogeal and epigeal with the correct crop, then describe what stays below or rises.",
        "For conditions, give water, oxygen and warmth, then say what each does inside the seed.",
        "Show the population formula with units: 10,000 ÷ (row spacing × plant spacing in metres).",
        "For cuttings, explain the node, the bud and the need to reduce transpiration until roots form.",
      ],
      commonMistakes: [
        "Saying a potato tuber is a root; it is a swollen underground stem with eyes.",
        "Writing that seeds need light to germinate; most crop seeds do not.",
        "Confusing the plumule with the radicle; the radicle emerges first and becomes the root.",
        "Calculating population as 10,000 ÷ (75 × 25); convert centimetres to metres first.",
        "Claiming cuttings give variation; they produce clones of the parent.",
      ],
      recap: [
        "Draw and label the structure of a maize grain and a bean seed. [4]",
        "Describe the germination of a bean seed, naming the parts that emerge. [4]",
        "State the conditions needed for germination and explain the role of each. [4]",
        "Maize is sown at 75 cm × 25 cm. Calculate the plant population per hectare. [2]",
        "Explain why cassava is propagated from stem cuttings rather than seed. [3]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_3: Chapter = chapterThree;
