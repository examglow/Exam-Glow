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

const originsArt = artPanel([
  {
    src: "ag11-domestication.webp",
    alt: "Neolithic farmers cutting ripe emmer wheat with flint sickles while goats graze at the edge of the field",
    caption: "Selecting seed and stock began farming",
  },
  {
    src: "ag11-irrigation-canal.webp",
    alt: "An ancient canal feeding narrow field basins, with a shaduf lifting water onto a raised bed",
    caption: "Canals turned river mud into harvests",
  },
]);

const industrialArt = artPanel([
  {
    src: "ag11-steam-threshing.webp",
    alt: "A steam engine driving a belt to a threshing machine in a harvested field, with a steel plough in the foreground",
    caption: "Steam replaced muscle in the 1800s",
  },
  {
    src: "ag11-haber-bosch.webp",
    alt: "A tall ammonia synthesis plant with pipework beside heaped white fertiliser granules",
    caption: "Nitrogen fixed from the air, 1913",
  },
]);

const modernArt = artPanel([
  {
    src: "ag11-green-revolution.webp",
    alt: "A scientist examining short, heavy-eared semi-dwarf wheat in an experimental plot",
    caption: "Short wheat that could carry fertiliser",
  },
  {
    src: "ag11-precision-ag.webp",
    alt: "A tractor guided by satellite steering while a drone maps the crop rows behind it",
    caption: "The field became a data set",
  },
]);

const chapterEleven: Chapter = {
  number: 11,
  title: "The Story Behind the Syllabus",
  intro: `Agriculture is the oldest technology humans still use every day.\n\nEvery topic in this syllabus answers a problem that people met thousands of years ago: how to feed a field, hold soil on a slope, keep a cow alive through the dry season.\n\nThe answers changed slowly, then very fast.\n\nThis chapter follows that change from the first sown fields to satellite-guided tractors.\n\nRead it as the reason each technique in the syllabus exists.`,
  subheadings: [
    {
      title: "Domestication and the First Field",
      body: `### From Gathering to Sowing

Farming began about 10,000 years ago, independently in several regions.

In the Fertile Crescent people sowed wheat and barley and herded sheep and goats.

Rice and millet were domesticated in China, maize from teosinte in Mexico, and the potato in the Andes.

### What Domestication Changed

A wild wheat sheds its seed; a domesticated one holds it until harvest.

That single trait, selected by reaping and resowing, made a crop dependable.

Animals changed too: smaller horns, calmer temperaments, more milk.

### The First Irrigation

River floods left wet soil, but rain failed in some years.

Farmers cut canals and basins to lead river water onto fields.

By about 2000 BCE the shaduf lifted water from a channel to a higher bed.

Later, underground qanats carried water for kilometres in dry country.

### Why It Matters

Domestication is **artificial selection**, the ancestor of chapter 9.

Irrigation is water management, the ancestor of chapter 2.6 and chapter 10.3.

A settled field also created the need for storage, records and land tenure.`,
      figure: originsArt,
      groups: [
        {
          subTitle: "The Ideas in the Syllabus",
          bullets: [
            "**Domestication:** choosing heritable traits in plants and animals over generations.",
            "**Irrigation:** supplying water when rainfall does not match crop demand.",
            "**Storage:** drying and protecting grain so a harvest lasts to the next one.",
            "**Land use:** a fixed field makes planning, fencing and ownership necessary.",
          ],
        },
        {
          subTitle: "What Early Farmers Selected",
          bullets: [
            "**Non-shattering heads:** grain that stays on the ear until it is harvested.",
            "**Larger seed:** more food per plant, easier to sow and grind.",
            "**Thin husks and softer stems:** easier processing and feeding to stock.",
            "**Temperament:** animals that could be handled, penned and milked.",
          ],
        },
        {
          subTitle: "The Costs of Settling",
          bullets: [
            "A stored harvest attracts rodents, insects and thieves.",
            "Concentrated stock spreads disease faster than scattered herds.",
            "Repeated cropping on one plot removes nutrients and invites erosion.",
            "These problems are the reason soil, pest and storage topics exist.",
          ],
        },
      ],
      examinerTips: [
        "Use the term artificial selection when writing about domestication.",
        "Give a trait and its advantage, not just the name of the crop.",
        "Link early irrigation to the syllabus point on irrigation methods.",
        "Say why a settled field needs records, fencing and planning.",
        "Keep the history brief; the marks sit in the agricultural idea.",
      ],
      commonMistakes: [
        "Claiming all crops were domesticated in one place; centres were independent.",
        "Confusing domestication with genetic modification; the first is selection over time.",
        "Saying irrigation began in the twentieth century; canals are thousands of years old.",
        "Forgetting that a wild grass sheds its seed and is hard to harvest.",
        "Treating storage as a modern topic; grain storage is as old as farming.",
      ],
      recap: [
        "Define domestication and give one trait selected in wheat. [2]",
        "Explain why non-shattering heads made harvesting possible. [2]",
        "State one purpose of the earliest irrigation canals. [1]",
        "Explain how a settled field changes land use. [2]",
        "Name the modern topic that grew from early irrigation. [1]",
      ],
    },
    {
      title: "The Plough, the Fallow and the Norfolk Rotation",
      body: `### The Ard and the Mouldboard

The first plough was the **ard**, a pointed beam that scratched a furrow.

It broke the surface but did not turn the soil.

The heavy **mouldboard plough** of northern Europe turned a slice upside down.

That buried weeds and brought fresh soil to the surface, but needed strong animals.

### Fallow and the Three-Field System

Land left unsown for a season is **fallow**.

Weeds are grazed or cut, water soaks in and the soil recovers some structure.

By the Middle Ages many villages used a three-field system: autumn crop, spring crop, fallow.

### The Norfolk Four-Course

In eighteenth-century Norfolk the fallow was replaced by a crop.

The sequence was wheat, turnips, barley, then clover and ryegrass.

**Turnips** were hoed and fed to sheep in winter, so stock no longer had to be killed in autumn.

**Clover** is a legume, so it added nitrogen as well as grazing.

### The Machinery of the Change

Jethro Tull built a horse-drawn **seed drill** around 1701, sowing in rows.

Robert Bakewell selected livestock for meat and milk rather than for looks.

The rotation and the drill together raised output without extra land.`,
      groups: [
        {
          subTitle: "Why the Rotation Worked",
          bullets: [
            "**Different crops use different nutrients** and root at different depths.",
            "**Legumes fix nitrogen**, so the clover crop feeds the wheat that follows.",
            "**Turnips break the weed cycle** and provide winter feed for stock.",
            "**Stock return manure**, which maintains soil organic matter and structure.",
            "**No fallow year** means every field produces something.",
          ],
        },
        {
          subTitle: "Ideas Still in the Syllabus",
          bullets: [
            "**Rotations** are syllabus 1.1, and still control pests, weeds and fertility.",
            "**Legumes** are syllabus 2.3(d), used for nitrogen and structure.",
            "**Manure and compost** are syllabus 2.3(d), feeding soil organisms.",
            "**Seed drills and spacing** are syllabus 4.2(b), setting plant population.",
            "**Selective breeding** is syllabus 9.2, begun by Bakewell with livestock.",
          ],
        },
      ],
      examinerTips: [
        "Name the four crops in the Norfolk course in the correct order.",
        "Explain the clover step with the word legume and the word nitrogen.",
        "Link the turnip to winter feed, not only to weed control.",
        "Describe the seed drill as row sowing at a controlled depth and rate.",
        "Connect fallow to rest and recovery, not to laziness.",
      ],
      commonMistakes: [
        "Calling the ard a mouldboard plough; it only scratched the surface.",
        "Putting clover before barley in the Norfolk sequence.",
        "Claiming the rotation added land; it raised output per hectare.",
        "Saying turnips feed people; in Norfolk they fed sheep in winter.",
        "Ignoring that the legume adds nitrogen for the following cereal.",
      ],
      recap: [
        "Distinguish between an ard and a mouldboard plough. [2]",
        "State three benefits of a fallow year. [3]",
        "Name the four crops of the Norfolk four-course rotation in order. [2]",
        "Explain how clover improved the wheat that followed it. [2]",
        "State one way the seed drill improved on broadcasting. [2]",
      ],
    },
    {
      title: "Machines and Synthetic Nitrogen",
      body: `### Steel Replaces Wood

In 1837 John Deere made a steel plough that scoured cleanly in sticky prairie soil.

Cyrus McCormick's reaper, patented in 1834, cut grain faster than a gang of workers.

Steam engines drove threshing machines and, later, the first tractors.

### New Sources of Nutrients

From the 1840s Europe imported **guano** and Chilean nitrate as fertiliser.

Justus von Liebig argued in 1840 that crops need mineral elements, not just humus.

Rothamsted, founded in 1843, began the long field experiments that still run today.

### Nitrogen from the Air

Air is about 78% nitrogen, but plants cannot use N₂ directly.

In 1909 Fritz Haber fixed nitrogen as ammonia in the laboratory.

Carl Bosch scaled the process to an industrial plant at Oppau in 1913.

### Why Haber-Bosch Changed Everything

Ammonia is the feedstock for nitrate fertilisers and for much of the nitrogen in crops.

It also made explosives, which is why the process mattered in two world wars.

Roughly half the nitrogen in the food we eat today comes from this process.

### The Catch

Synthetic nitrogen is energy-hungry and easily leached or volatilised.

Overuse acidifies soil and pollutes water, which is why fertiliser rates are now planned.`,
      figure: industrialArt,
      groups: [
        {
          subTitle: "What Industry Gave the Farm",
          bullets: [
            "**Steel implements:** lighter, sharper and longer-lasting than iron or wood.",
            "**Mechanisation:** more hectares ploughed and harvested in the right season.",
            "**Mineral fertiliser:** nutrients supplied in measured, predictable amounts.",
            "**Synthetic nitrogen:** a supply that no longer depends on manure or legumes.",
            "**Research stations:** field trials replaced tradition with measured results.",
          ],
        },
        {
          subTitle: "Why Nitrogen Is the Key Nutrient",
          bullets: [
            "Nitrogen builds proteins, chlorophyll and enzymes, so it drives leaf and stem growth.",
            "A deficiency shows as pale, yellowing older leaves and stunted growth.",
            "Too much gives soft, dark leafy growth that lodges and attracts pests.",
            "Leaching carries nitrate into groundwater; volatilisation loses ammonia to the air.",
          ],
        },
      ],
      examinerTips: [
        "Name Haber and Bosch and say that ammonia is made from air nitrogen.",
        "Link synthetic fertiliser to the nitrogen cycle rather than treating it as separate.",
        "Give a benefit and a cost of mechanisation in the same answer.",
        "Use the phrase fossil fuel energy when explaining the cost of nitrogen fertiliser.",
        "State that excess nitrate leaches and pollutes water supplies.",
      ],
      commonMistakes: [
        "Saying plants absorb N₂ gas directly; they take nitrate or ammonium.",
        "Claiming Haber-Bosch invented fertiliser; it industrialised nitrogen supply.",
        "Ignoring the energy cost of ammonia synthesis.",
        "Treating guano as a mineral mined in Europe; it was imported bird droppings.",
        "Forgetting that too much nitrogen causes lodging and pest problems.",
      ],
      recap: [
        "State the raw materials used in the Haber-Bosch process. [2]",
        "Explain why synthetic nitrogen fertiliser raised crop yields. [2]",
        "Give two environmental problems caused by excess nitrate fertiliser. [2]",
        "State one advantage and one disadvantage of tractor mechanisation. [2]",
        "Explain why guano and nitrate imports mattered before 1913. [2]",
      ],
    },
    {
      title: "Borlaug and the Green Revolution",
      body: `### A Short Wheat

Tall wheat with a heavy ear falls over, or **lodges**, when it is well fed.

In the 1940s Norman Borlaug's team in Mexico crossed Mexican wheat with Japanese **semi-dwarf** varieties.

The short stems carried more grain without collapsing under fertiliser.

### The Results

Mexico became self-sufficient in wheat by the late 1950s.

The wheat spread to India and Pakistan, where yields rose sharply in the 1960s.

At IRRI in the Philippines, semi-dwarf rice such as IR8 gave similar gains.

Borlaug received the Nobel Peace Prize in 1970.

### What Made It Work

Three inputs arrived together: **dwarf varieties**, **fertiliser** and **irrigation**.

Without the short stem, extra nitrogen caused lodging.

Without water and nutrients, the dwarf variety yielded no more than the local one.

### The Criticism

The package favoured farmers with irrigation, credit and land.

It narrowed the genetic base and increased dependence on purchased inputs.

It also used large amounts of water and fertiliser, with pollution downstream.

### What the Chapter 9 Syllabus Inherits

The Green Revolution is **selective breeding** at scale, not genetic modification.

Borlaug's method was crossing and selection, repeated over many generations.`,
      figure: modernArt,
      groups: [
        {
          subTitle: "The Package, Not One Seed",
          bullets: [
            "**Semi-dwarf varieties:** short, stiff straw that resists lodging.",
            "**Nitrogen fertiliser:** supports a heavier ear without collapse.",
            "**Irrigation:** supplies water to match the higher yield.",
            "**Pest and weed control:** protects the extra grain produced.",
            "**Credit and extension:** gets seed and inputs to farmers in time.",
          ],
        },
        {
          subTitle: "Lessons for This Syllabus",
          bullets: [
            "**Yield** depends on variety, water, nutrients and protection together.",
            "**Lodging** is a structural failure, not a disease.",
            "**Selective breeding** works on heritable variation already present in the crop.",
            "**Inputs must be matched:** extra fertiliser without water can reduce profit.",
            "**Equity matters:** a technology that needs credit can widen inequality.",
          ],
        },
      ],
      examinerTips: [
        "Define semi-dwarf by short, stiff straw and resistance to lodging.",
        "Explain the whole package: seed, fertiliser, water and protection.",
        "Say Borlaug used crossing and selection, not gene transfer.",
        "Balance the answer with one benefit and one criticism.",
        "Link higher yield to a higher harvest index, not just to taller plants.",
      ],
      commonMistakes: [
        "Saying the dwarf gene alone doubled yield; it needed fertiliser and water.",
        "Calling the Green Revolution genetic modification; it was selective breeding.",
        "Forgetting that lodging is a stem failure caused by too much top weight.",
        "Ignoring the water demand of high-yielding varieties.",
        "Claiming all farmers benefited equally; access to credit differed.",
      ],
      recap: [
        "State one advantage of a semi-dwarf cereal over a tall variety. [2]",
        "Explain why extra nitrogen fertiliser can make a tall wheat lodge. [2]",
        "Name the three inputs that made the Green Revolution work. [2]",
        "Give one criticism of the Green Revolution. [2]",
        "State how Borlaug's breeding differed from genetic modification. [2]",
      ],
    },
    {
      title: "Pests, Pesticides and Integrated Control",
      body: `### DDT and the Promise

In 1939 Paul Müller showed that DDT killed insects on contact.

It was cheap, persistent and used in wartime against lice and mosquitoes.

After 1945 it was sprayed widely on crops.

### Resistance and Residues

Insects with a natural tolerance survived and bred, so **resistance** spread.

DDT accumulated in animal tissue and moved up food chains.

Rachel Carson's Silent Spring, published in 1962, brought the damage to public notice.

The United States banned most DDT use in 1972.

### The Lesson

A single chemical used repeatedly removes the susceptible insects and leaves the rest.

The survivors pass on the trait, so the dose must rise or the spray fails.

### Integrated Pest Management

**Integrated pest management (IPM)** combines methods instead of relying on one.

Resistant varieties, rotation, biological control and targeted spraying are used together.

Spraying follows a threshold, so chemicals are used only when the pest pays for them.

Conservation agriculture adds cover crops and rotations that disturb pest cycles.`,
      groups: [
        {
          subTitle: "Why Resistance Appears",
          bullets: [
            "**Variation:** a few individuals already tolerate the chemical.",
            "**Selection:** spraying kills the susceptible majority.",
            "**Inheritance:** survivors pass tolerance to their offspring.",
            "**Repeated use:** the population becomes mostly resistant.",
            "**Rotation of chemicals** slows the process but does not stop it.",
          ],
        },
        {
          subTitle: "IPM in the Syllabus",
          bullets: [
            "**Biological control** uses predators, parasites and pathogens (5.2(c)).",
            "**Cultural control** uses rotation and catch cropping (5.2(d)).",
            "**Resistant varieties** are the breeder's contribution (9.2(a)).",
            "**Safe handling** protects the operator and the environment (5.4).",
            "**Thresholds** keep sprays economic and reduce selection pressure.",
          ],
        },
      ],
      examinerTips: [
        "Define resistance as inherited tolerance in a population, not immunity in one insect.",
        "Explain the mechanism with variation, selection and inheritance in that order.",
        "Give one reason DDT was banned besides human toxicity.",
        "Define IPM as a combination of methods, not as a ban on chemicals.",
        "Name a threshold as the pest level at which spraying pays.",
      ],
      commonMistakes: [
        "Saying insects choose to become resistant; the survivors simply breed.",
        "Describing DDT as harmless because it was once approved.",
        "Confusing persistence with effectiveness; persistence caused the residue problem.",
        "Treating IPM as organic farming; it still allows targeted sprays.",
        "Ignoring that spraying the same chemical repeatedly speeds resistance.",
      ],
      recap: [
        "Explain how insecticide resistance develops in a pest population. [4]",
        "State two environmental problems caused by DDT. [2]",
        "Define integrated pest management. [2]",
        "Give one cultural and one biological method used in IPM. [2]",
        "Explain why spraying only above a threshold reduces resistance. [2]",
      ],
    },
    {
      title: "GM Crops and Conservation Agriculture",
      body: `### Moving a Single Gene

In 1983 the first transgenic tobacco plant was produced.

The **Flavr Savr** tomato, approved in 1994, was the first GM food sold.

**Bt cotton** and herbicide-tolerant soybean followed in 1996.

Bt crops carry a gene from Bacillus thuringiensis that kills certain caterpillars.

### Arguments For and Against

Supporters point to lower insecticide use, higher yield and drought tolerance.

Critics raise gene flow to wild relatives, corporate control of seed and uncertain long-term effects.

The syllabus asks you to discuss both sides, not to choose a slogan.

### Conservation Agriculture

**Conservation agriculture** rests on three rules: disturb soil as little as possible, keep it covered, and rotate crops.

No-till planting, mulch and rotations protect structure and reduce erosion.

The **push-pull** system, developed in Kenya, intercropped desmodium with maize and bordered it with napier grass.

Desmodium repels stemborer moths and suppresses striga; napier traps the moths at the field edge.

### Precision Farming

Yield monitors arrived in the 1990s, followed by satellite guidance and variable-rate applicators.

Drones and soil sensors now map variation within a single field.

### What Has Not Changed

The plant still needs water, nutrients, light and protection.

Precision and GM change how these are supplied, not the biology behind them.`,
      groups: [
        {
          subTitle: "GM Against Selective Breeding",
          bullets: [
            "**Source of the gene:** GM can move DNA between species; breeding cannot.",
            "**Speed:** GM adds one known gene directly; breeding reshuffles whole genomes.",
            "**Precision:** GM inserts a defined sequence, but its position can vary.",
            "**Regulation:** GM seed is tested and approved before sale.",
            "**Public acceptance:** GM faces consumer and trade restrictions that breeding does not.",
          ],
        },
        {
          subTitle: "The Three Rules of Conservation Agriculture",
          bullets: [
            "**Minimum disturbance:** no-till or strip-till preserves structure and soil life.",
            "**Permanent cover:** residues or cover crops break raindrops and hold moisture.",
            "**Rotation:** different crops interrupt pest, weed and disease cycles.",
            "**Result:** less erosion, more organic matter and better infiltration.",
            "**Cost:** herbicides or specialised planters may be needed at the start.",
          ],
        },
      ],
      examinerTips: [
        "Discuss GM with one benefit and one risk per side, clearly attributed.",
        "Define conservation agriculture by its three principles, not by a single tool.",
        "Explain push-pull as a plant-based pest and weed control system.",
        "Describe precision farming as matching inputs to measured variation.",
        "Keep the conclusion balanced; examiners reward reasoning, not activism.",
      ],
      commonMistakes: [
        "Saying GM crops are always sterile; that is a specific technology, not a rule.",
        "Confusing Bt cotton with herbicide tolerance; Bt is an insect resistance gene.",
        "Calling no-till the whole of conservation agriculture; cover and rotation are required.",
        "Claiming push-pull uses a chemical repellent; desmodium works through its odour and root exudates.",
        "Treating precision farming as only drones; guidance and variable-rate application matter more.",
      ],
      recap: [
        "State the difference between genetic modification and selective breeding. [2]",
        "Give one argument for and one against GM crops. [2]",
        "State the three principles of conservation agriculture. [3]",
        "Explain how the push-pull system controls stemborer and striga. [3]",
        "Describe one way precision farming reduces input waste. [2]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_11: Chapter = chapterEleven;
