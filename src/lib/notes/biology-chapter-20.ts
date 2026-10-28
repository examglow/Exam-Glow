import type { Chapter } from "./types";
import { box, svgDiagram, tileRow } from "./diagram-kit";

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

const deforestationArt = artPanel([
  {
    src: "ch20-deforestation.webp",
    alt: "Illustration of a felled and burned area of rainforest",
    caption: "Forest cleared in one season",
  },
  {
    src: "ch20-greenhouse.webp",
    alt: "Illustration of greenhouse gases trapping heat in the atmosphere",
    caption: "Greenhouse gases trapping heat",
  },
]);

const intensiveFarmingArt = artPanel([
  {
    src: "ch20-intensive-farming.webp",
    alt: "A greenhouse, sprayed crops, a band of fertiliser and a crowded chicken pen",
    caption: "Intensive food production",
  },
]);

const sewageArt = artPanel([
  {
    src: "ch20-sewage-treatment.webp",
    alt: "Four treatment tanks in a row ending in a channel of clean water with a fish",
    caption: "The stages of sewage treatment",
  },
]);

const foodSystemsDiagram = svgDiagram(
  "Four systems that produce our food",
  `<text class="title" x="450" y="34" text-anchor="middle">Four systems that produce our food</text>
    ${tileRow(
      [
        { title: "Crop plants", body: "arable farming\nfor cereals\nand vegetables", cls: "main" },
        { title: "Livestock", body: "animals reared\nfor meat, milk\nand eggs", cls: "blue" },
        { title: "Fish farming", body: "fish raised in\ntanks or net\nenclosures", cls: "pink" },
        {
          title: "Glasshouse",
          body: "CO\u2082, light and\ntemperature\nkept optimal",
          cls: "gold",
        },
      ],
      64,
      { h: 180 },
    )}`,
  900,
  270,
);

const deforestationDiagram = svgDiagram(
  "Deforestation and its consequences",
  `<text class="title" x="450" y="32" text-anchor="middle">Deforestation and its consequences</text>
    ${box(360, 46, 180, 42, "Forest cleared", "main")}
    <path class="arrow" d="M450 88 200 110"/>
    <path class="arrow" d="M450 88 450 110"/>
    <path class="arrow" d="M450 88 700 110"/>
    ${box(85, 110, 230, 50, "Less CO\u2082 absorbed", "blue", "small")}
    ${box(335, 110, 230, 50, "Soil washed away", "gold", "small")}
    ${box(585, 110, 230, 50, "Species lose habitat", "pink", "small")}
    <path class="arrow" d="M200 160 200 210"/>
    <path class="arrow" d="M450 160 450 210"/>
    <path class="arrow" d="M700 160 700 210"/>
    ${box(85, 210, 230, 50, "Global warming rises", "panel", "small")}
    ${box(335, 210, 230, 50, "Rivers silt and flood", "panel", "small")}
    ${box(585, 210, 230, 50, "Extinctions increase", "panel", "small")}`,
  900,
  300,
);

const eutrophicationDiagram = svgDiagram(
  "Eutrophication: how fertiliser kills a river",
  `<text class="title" x="450" y="34" text-anchor="middle">Eutrophication: how fertiliser kills a river</text>
    ${tileRow(
      [
        {
          title: "1 Minerals enter",
          body: "nitrates from\nfertiliser run\noff into water",
          cls: "blue",
        },
        { title: "2 Algal bloom", body: "algae grow fast\nand shade the\nsurface", cls: "main" },
        { title: "3 Plants die", body: "light is blocked;\ndead plants are\ndecayed", cls: "gold" },
        {
          title: "4 Oxygen gone",
          body: "aerobic bacteria\nuse up O\u2082 and\nfish die",
          cls: "pink",
        },
      ],
      64,
      { h: 180 },
    )}`,
  900,
  270,
);

const chapter: Chapter = {
  number: 20,
  title: "Human Influences on Ecosystems",
  intro:
    "People now reshape almost every ecosystem on Earth, and this chapter looks at what that reshaping costs.\n\nYou will study the systems we use to produce food and why feeding a growing population pushes those systems past the point the environment can renew.\n\nIt then covers the three big consequences that follow: deforestation, the destruction of habitats and loss of biodiversity, and pollution of air, soil and water.",
  subheadings: [
    {
      title: "Food Production Systems",
      figure: intensiveFarmingArt,
      body: `### How We Obtain Our Food\nAlmost all human food comes from just a few production systems, each of which is managed to raise **yield** \u2014 the amount of useful food produced per unit area or per animal.\n\n${foodSystemsDiagram}\n\n### What Yield Depends On\n\nYield rises when photosynthesis is pushed towards its maximum and when losses to weeds, pests and pathogens are cut.\n\nThe factors farmers manipulate most are mineral-ion supply, water, light, carbon dioxide concentration and temperature.\n\n### A Question of Balance\n\nThe same field must produce more food each year and still be fertile enough to keep producing.\n\nA method that pays for this season's harvest by borrowing next season's fertility causes most of the problems followed in the rest of this chapter.`,
      groups: [
        {
          bullets: [
            "**Crop production:** growing plants such as wheat, rice and maize for the grain, or vegetables and fruit, usually as a **monoculture** \u2014 one species over a large area \u2014 which makes harvesting efficient but leaves the system open to pests.",
            "**Livestock production:** rearing animals for meat, milk and eggs. Yield is improved by selective breeding, concentrated feed, controlled housing and, in some systems, medication to prevent disease.",
            "**Fish farming (aquaculture):** raising fish such as carp or salmon in ponds, tanks or netted enclosures, and feeding them pellets so more fish are produced per hectare of water.",
            "**Glasshouse (greenhouse) production:** growing crops under glass or plastic so that the **limiting factors** of photosynthesis can be controlled \u2014 light, carbon dioxide concentration, temperature and water are all kept near optimum, which speeds growth.",
            "**Pastoral systems:** livestock reared on open grassland rather than indoors; the stocking density decides whether the pasture is maintained or overgrazed and lost.",
            "**Feed-conversion losses:** farmed animals eat far more plant material than the meat they produce, so livestock systems need much more land than eating the crops directly.",
          ],
        },
        {
          subTitle: "Common Ways of Raising Yield",
          bullets: [
            "**Fertilisers** replace the mineral ions (nitrates, phosphates, potassium) that crops remove from the soil, so plants keep making proteins and growing.",
            "**Pesticides, fungicides and herbicides** kill competing weeds, pests and pathogens, so more of the fixed carbon reaches the harvest instead of other organisms.",
            "**Irrigation** supplies water where rainfall is seasonal, allowing more crops per year on the same land.",
            "**Adding carbon dioxide** in a sealed glasshouse lifts the rate of photosynthesis while light and warmth are plentiful.",
            "**Selective breeding:** parents with the desired characteristic are bred together over generations, giving varieties with more milk, more grain or faster growth.",
            "**Crop rotation:** different crops follow one another on the same plot, and legumes with nitrogen-fixing root bacteria restore nitrates a cereal crop removed.",
            "**Biological control:** natural predators or pathogenic microorganisms are used in place of some pesticide sprays, cutting pest losses without poisoning other species.",
          ],
        },
      ],
      examinerTips: [
        "When a question asks you to 'explain' how yield is increased, always name the factor being controlled and the process it speeds up: 'extra CO\u2082 increases the rate of photosynthesis, so more glucose is made for growth'.",
        "Know at least one named example of each system \u2014 wheat for crops, cattle for livestock, salmon for fish farming \u2014 because questions often require you to identify the system from a description.",
        "In 'explain how' answers give all three parts.",
        "The factor, the process it speeds up and the result. 'Raised carbon dioxide increases the rate of photosynthesis, so more glucose is available for growth' scores where a one-clause answer does not.",
        "Compare the systems by their trade-off: glasshouse production controls conditions but costs money and energy, so it is reserved for high-value crops rather than cereals.",
      ],
      commonMistakes: [
        "Writing that glasshouses 'give plants more food'. They give plants better **conditions** to photosynthesise; the plant still makes its own glucose.",
        "Confusing fertilisers (mineral nutrients for the plant) with pesticides (organisms killed to protect the plant).",
        "Using 'yield' to mean the farm's whole harvest. In this chapter it means production per unit area or per animal, so a bigger field alone is not a higher yield.",
        "Claiming that pesticides make crops grow faster. Pesticides reduce losses to other organisms; the growth rate itself is raised by mineral ions, water, light and carbon dioxide.",
      ],
      recap: [
        "Name the four main systems used to produce food for humans. [4]",
        "Explain how controlling two glasshouse conditions can increase crop yield. [4]",
        "State why a farmer adds fertiliser to a cereal field. [2]",
        "State two advantages of growing a crop in a glasshouse rather than outdoors. [2]",
      ],
    },
    {
      title: "Feeding a Growing World Population",
      body: `### More People, More Demand\n\nThe human population continues to rise, and with it the demand for food, fresh water, land and fuel.\n\nBecause each additional person needs to be fed, more of the planet's natural systems must be converted into food production, and the conversion is often **unsustainable** \u2014 it uses resources faster than they can be replaced.\n\n### Why Demand Outgrows Population\n\nRicher households switch towards meat and dairy, and producing a kilogram of beef costs several times the land and water of a kilogram of grain.\n\nHeadcount and consumption per person therefore multiply each other rather than simply adding.\n\n### What Gets Squeezed\n\nTo meet that demand, forests, rivers and topsoil are drawn down faster than they renew.\n\nEach of the squeezed resources becomes one of the consequences examined in the sections that follow.`,
      groups: [
        {
          bullets: [
            "**Rising demand:** a growing population needs more food, so more forest and grassland is cleared for crops and for grazing animals.",
            "**Overexploitation:** fishing beyond the rate at which stocks breed, overgrazing that strips vegetation, and cutting trees faster than they regrow all reduce the natural capital that future harvests depend on.",
            "**Soil exhaustion:** continually harvesting the same crop removes mineral ions and, without fallow periods or fertiliser, the soil loses fertility and yield falls.",
            "**Water pressure:** irrigation for more food competes with drinking water, and rivers and aquifers are drawn down faster than rain replaces them.",
            "**Feedback into climate:** clearing land and intensifying farming release greenhouse gases, which then alter the rainfall and temperature that food production relies on.",
            "**Land conversion:** forest and grassland are the last large reserves of farmable land, so extra food demand translates almost directly into extra clearance.",
            "**Livestock footprint:** the more animal protein a population eats, the more cropland is used to feed stock instead of feeding people.",
            "**Food losses:** grain and fresh food that spoil in storage before anyone eats it force still greater production than the population actually consumes.",
          ],
        },
        {
          subTitle: "The Sustainability Question",
          bullets: [
            "**Sustainable production** meets the needs of the present without reducing the ability of future generations to meet theirs; overfishing and deforestation are unsustainable because they shrink the resource.",
            "The pressure is highest where populations grow fastest and farmland is already at its limit, which is why the consequences of food production fall hardest on local ecosystems.",
            "**Rotation and fallow:** resting fields and alternating crops rebuild their mineral stores, so the same land keeps producing season after season.",
            "**Breeding and biotechnology:** higher-yielding varieties raise the output of existing farmland, easing the pressure to clear new land (Chapter 21).",
            "**Honest trade-offs:** a practice can be sustainable for one resource yet unsustainable for another, so always judge the rate of use against the rate of renewal for each.",
          ],
        },
      ],
      examinerTips: [
        "Link cause to consequence explicitly. A high-mark answer connects 'population increases' to 'more land cleared' to 'habitats and biodiversity lost' rather than stating only the first step.",
        "If asked whether a practice is sustainable, define sustainability first, then judge the practice against the definition \u2014 that structure earns the reasoning mark.",
        "When a question supplies population or consumption data, quote figures from it in your answer; data-backed points score where general statements may not.",
        "Structure a sustainability judgement in three moves: what is being used, how fast it renews, and whether use exceeds renewal \u2014 then state the verdict.",
      ],
      commonMistakes: [
        "Blaming only the number of people. Examiners also credit demand per person \u2014 diets rich in meat need far more land and water than grain-only diets.",
        "Saying overfishing simply 'removes fish'. The point is that it removes them **faster than they can reproduce**, so the breeding population collapses.",
        "Naming population growth as the whole problem. Growth in consumption per person multiplies the pressure on land and water as strongly as the birth rate does.",
        "Treating 'sustainable' as a synonym for 'organic' or 'natural'. Sustainability is about renewal rates, not about which farming method is used.",
      ],
      recap: [
        "Describe two pressures a growing human population places on ecosystems. [4]",
        "Explain what is meant by sustainable food production. [2]",
        "Give two reasons why overfishing can cause a fish stock to collapse. [4]",
        "Explain why a rise in meat consumption increases the pressure on land and water resources. [3]",
      ],
    },
    {
      title: "Deforestation: Reasons and Methods",
      body: `### Why Forests Are Removed\n**Deforestation** is the clearing or removal of forest, most rapidly from tropical rainforests. Trees are taken not for the wood alone but to free the land beneath for other uses.\n\n### Where and By Whom\n\nMost clearance today removes tropical rainforest near the equator, in parts of South America, Southeast Asia and Africa.\n\nIt is done both by families clearing a few plots to live on and by companies establishing plantations or cattle ranches.\n\n### A Thin Foundation\n\nRainforest soils are generally nutrient-poor, because most of the minerals are held in the living biomass rather than in the ground.\n\nRemoving the forest exposes that poor soil, which is why clearance and soil loss so often appear together in exam answers.`,
      groups: [
        {
          bullets: [
            "**Clearing for crops:** land is converted to cash crops such as soya beans, oil palms for palm oil, or rubber, which pay better than standing forest.",
            "**Clearing for livestock:** trees are felled and burned to create grazing land for cattle and other farm animals.",
            "**Logging for timber:** mature trees are cut for construction and furniture, and the roads made to reach them open up the forest to further clearance.",
            "**Fuel and charcoal:** wood is burned directly or converted to charcoal, a major cause of local forest loss in some regions.",
            "**Settlement and industry:** housing, mining and paper-pulp plantations remove forest to make space for people and raw materials.",
            "**Plantation monocultures:** fast-growing oil palm, rubber or eucalyptus replace diverse forest, supplying palm oil, latex and paper pulp to world markets.",
            "**Mining and infrastructure:** mines, dams and roads are built inside forest, and settlers follow each new route to clear the land beside it.",
          ],
        },
        {
          subTitle: "How It Is Done",
          bullets: [
            "**Slash-and-burn:** vegetation is cut and set alight, leaving a flush of mineral ions in the ash that supports a few seasons of cropping before the land is exhausted and more forest is cleared.",
            "**Clear-cutting:** all trees over an area are removed at once, leaving bare soil exposed to rain and wind.",
            "**Selective logging:** only valuable species are taken, but the disturbed ground and broken canopy still lower the forest's stability and biodiversity.",
            "**Mechanised clearing:** bulldozers fell and pile whole stands of trees in days, so clearance can keep pace with the demand for land.",
            "**Stumping and ploughing:** after felling, stumps are ripped out and the ground ploughed so that crops or plantation seedlings can replace the forest completely.",
          ],
        },
      ],
      examinerTips: [
        "State both the reason and the end use: 'forests are cleared to plant oil palms for palm oil' scores more than 'for farming'.",
        "Name the process accurately when relevant \u2014 burning the trees returns their stored carbon to the air at once, which links deforestation to the atmosphere question.",
        "Learn at least four distinct reasons \u2014 crops, pasture, timber, plantations, fuel, settlement \u2014 because 'state three reasons' gives no credit for near-duplicates.",
        "If the question names a country or region, place your example (oil palm in Malaysia, cattle in the Amazon) in the first line so the context mark is secured.",
      ],
      commonMistakes: [
        "Describing deforestation as 'the planting of trees'. It is the removal of trees; planting them back is reforestation or afforestation.",
        "Listing only logging as a cause. Conversion of forest to farmland and grazing land is the largest driver and is what examiners expect.",
        "Describing tropical forest soils as deep and fertile. They are usually thin and leached; the nutrients of a rainforest are stored in its biomass.",
        "Treating all slash-and-burn as unsustainable. With a long fallow the forest regrows; it is the shortened fallow forced by population growth that degrades the land.",
      ],
      recap: [
        "State three reasons why tropical rainforest is cleared. [3]",
        "Describe how slash-and-burn agriculture works and what it leaves behind. [3]",
        "Explain the difference between deforestation and afforestation. [2]",
        "Explain why roads built for logging often lead to further deforestation. [3]",
      ],
    },
    {
      title: "Effects of Deforestation",
      body: `### What Is Lost When the Trees Go\n\nRemoving trees changes the atmosphere, the soil and the water cycle at the same time.\n\nEach change can be traced back to the loss of a particular function of the forest.\n\n### The Greenhouse Effect\n\nGreenhouse gases such as carbon dioxide let the Sun's short-wave radiation through but absorb the longer-wave radiation the Earth re-emits, warming the atmosphere.\n\nDeforestation adds carbon dioxide to it and removes the trees that were taking some of it back out.\n\n### The Forest as a Water Machine\n\nTrees move water from soil to air, taking it up by the roots and losing it by transpiration, and their canopy intercepts rain before it reaches the ground.\n\nWith the trees gone, both routes stop operating and the ground is left unprotected.`,
      groups: [
        {
          subTitle: "Effects on the Atmosphere",
          bullets: [
            "**Less carbon dioxide removed:** with fewer trees photosynthesising, more CO\u2082 stays in the air. CO\u2082 is a greenhouse gas, so the enhanced greenhouse effect and global warming increase.",
            "**More carbon dioxide added:** burning or rotting the felled trees releases the carbon they had stored, adding further CO\u2082.",
            "**Less oxygen produced:** photosynthesis is the main source of atmospheric oxygen, so removing the leaf area lowers the rate at which O\u2082 is replenished.",
            "**Carbon store released:** the wood and the organic soil beneath it hold carbon for centuries; once cleared, that store oxidises to CO\u2082 and feeds back into warming.",
            "**Local climate dries:** with less transpiration there is less water vapour and fewer clouds, so temperatures swing further and the dry season lengthens.",
          ],
        },
        {
          subTitle: "Effects on Soil and the Water Cycle",
          bullets: [
            "**Soil erosion:** roots no longer bind the soil, so rain and wind strip away the fertile topsoil, which is then washed into rivers as silt.",
            "**Leaching:** without roots and leaf litter to hold and replace minerals, rain washes nutrient ions deeper into the soil and fertility collapses.",
            "**Disturbed water cycle:** trees take up water and lose it by transpiration, and their canopy intercepts rainfall.",
            "Fewer trees mean less transpiration, so there is less local moisture and rainfall, and more rain reaches the ground at once, causing surface run-off and **flooding**.",
            "**Loss of biodiversity:** the forest is the habitat of countless species, so clearing it destroys their food, shelter and breeding sites (developed in the next section).",
            "**Silted rivers:** eroded topsoil drifts downstream as silt, smothering fish spawning grounds and narrowing channels so they overflow sooner.",
            "**Run-off instead of infiltration:** with no litter or roots to absorb it, rain sheets off the bare surface into rivers at once instead of soaking slowly into groundwater.",
            "**Recycled rainfall fails:** forests return much of their rain to the air for the next storm; cleared land supplies less of it, so farms and remaining forest even far away dry out.",
          ],
        },
      ],
      figure: deforestationDiagram + "\n\n" + deforestationArt,
      examinerTips: [
        "Separate the two atmospheric effects: fewer trees **reduce the removal** of CO\u2082, and burning the trees **increases its release**. Both raise the greenhouse effect, and naming both wins both marks.",
        "Always connect a named forest process to an effect. 'Roots hold the soil, so without them erosion increases' or 'transpiration returns water vapour to the air, so removing trees lowers rainfall'.",
        "Keep the terms distinct: the greenhouse effect is the mechanism of radiation being trapped; global warming is the temperature rise that follows when greenhouse gas levels increase.",
        "If a question says 'answer in terms of the water cycle', use the cycle's vocabulary \u2014 transpiration, evaporation, condensation, precipitation, run-off \u2014 inside your chain.",
      ],
      commonMistakes: [
        "Saying deforestation causes global warming 'because there is less oxygen'. Oxygen is not a greenhouse gas; the gas that matters here is **carbon dioxide**.",
        "Writing that the topsoil is 'eaten away'. The correct mechanism is **erosion** and **leaching**, not consumption.",
        "Claiming trees prevent flooding 'by drinking all the rain'. The accurate wording is interception by the canopy and uptake and transpiration by the roots, which reduce the volume reaching rivers at once.",
        "Arguing that the extra carbon dioxide is 'good for the remaining plants' so clearing hardly matters. Unreliable rainfall, lost soil and lost species outweigh any benefit of more CO\u2082.",
      ],
      recap: [
        "Explain how deforestation can increase the rate of soil erosion. [4]",
        "Describe two ways in which deforestation affects the amount of carbon dioxide in the atmosphere. [4]",
        "Explain why removing trees can reduce local rainfall. [3]",
        "State how deforestation contributes to global warming. [2]",
      ],
    },
    {
      title: "Habitat Destruction and Loss of Biodiversity",
      body: `### The Most Serious Threat to Species\n\n**Biodiversity** is the variety of species and the range of habitats and genes within an area.\n\nThe single greatest threat to it is **habitat destruction**, which happens whenever land or water is converted for human use \u2014 by deforestation, drainage of wetlands, urban development or conversion of grassland to crops.\n\n### Why Variety Pays\n\nSpecies-rich ecosystems pollinate crops, purify water, recycle nutrients and hold soils in place, and they carry the genes from which new medicines and better crops will be bred.\n\nA simpler ecosystem supplies far fewer of those services for free.\n\n### The Most Pressed Habitats\n\nThe richest habitats \u2014 rainforests, wetlands and coral reefs \u2014 are also among the fastest being converted.\n\nThe ecosystems holding the most species are consequently the ones losing them the quickest.`,
      groups: [
        {
          bullets: [
            "**Loss of shelter and food:** when a habitat is destroyed, the species that lived there lose the resources they depend on and their numbers fall.",
            "**Extinction:** organisms that cannot move to a new suitable habitat, such as specialised species on islands, may disappear entirely. Habitat loss is the leading cause of modern extinction.",
            "**Fragmentation:** remaining habitat is broken into isolated patches, so populations become small and separated, inbreeding rises and the gene pool shrinks, making species less able to survive disease or change.",
            "**Simplified food webs:** removing species breaks feeding links, so predators starve and the ecosystem becomes less stable and less able to recover from disturbance.",
            "**Loss of ecosystem services and resources:** fewer species means less natural pollination, poorer water and air purification, and the loss of potential new medicines, foods and genetic material.",
            "**Populations shrink and wobble:** a smaller habitat supports fewer individuals, and small populations are more easily finished off by disease, storms or one bad breeding season.",
            "**Specialists go first:** a species dependent on one host plant or one nesting site has no fallback when that single resource disappears.",
            "**Edge effects:** the margins of a cleared patch are brighter, windier and drier than the interior, so even surviving fragments change out of the conditions their species need.",
          ],
        },
        {
          subTitle: "Invasive Species",
          bullets: [
            "Disturbed or simplified habitats are easier for **invasive (non-indigenous) species** to colonise.",
            "Introduced competitors, predators and pathogens can out-compete or eat native species that never evolved defences against them, causing further declines in biodiversity.",
            "**Not only deforestation:** draining wetlands, channelising rivers and reclaiming land from the sea destroy habitats just as completely, and each is a valid example.",
            "**Why invaders win:** introduced species often arrive without the predators and diseases that checked them at home, so they expand at the natives' expense.",
            "**Prevention:** import controls and cleaning of boats, boots and equipment limit the spread of invasive organisms into the habitats that remain.",
          ],
        },
      ],
      examinerTips: [
        "When asked for a reason species are becoming extinct, 'habitat destruction' should almost always be your first answer \u2014 it is the most significant cause and earns the mark over vaguer statements.",
        "Explain the chain, do not just name it: 'habitats are destroyed, so organisms lose food and shelter, so populations decline and some species die out'.",
        "Follow one named species through the chain when explaining: its food or nesting site is lost, fewer individuals survive to breed, and the local population collapses.",
        "Keep the three terms apart as the mark scheme expects them: habitat destruction removes the home, extinction removes the species, and biodiversity is the variety both of them reduce.",
      ],
      commonMistakes: [
        "Equating biodiversity with the number of animals only. It includes plant, fungal and microorganism species and the habitats and genes that support them.",
        "Naming hunting or pollution as the biggest cause when the question is about habitat loss; pollution and over-exploitation matter but habitat destruction is the primary driver.",
        "Writing that organisms die the moment the habitat is cleared. Populations usually decline over generations as resources stop supporting them.",
        "Naming only large charismatic animals. Plants, fungi and microorganisms lose their homes in the same clearance, and whole food webs depend on them.",
      ],
      recap: [
        "Define biodiversity. [2]",
        "Explain why habitat destruction is the main threat to biodiversity. [4]",
        "Describe how breaking a habitat into fragments can reduce a population's chance of survival. [4]",
        "State two consequences of removing species from a food web. [2]",
      ],
    },
    {
      title: "Pollution of Ecosystems",
      body: `### Contaminating Air, Water and Soil\n\n**Pollution** is the release of substances into the environment in amounts or forms that harm organisms.\n\nWater pollution from sewage and from farm fertiliser is examined most often, and the fertiliser route is the cause of a sequence called eutrophication.\n\n### Treating Waste Before It Reaches Water\n\nSewage is screened, allowed to settle, then passed over trickling beds or through aerated tanks where aerobic bacteria oxidise the dissolved organic matter.\n\nThe treated effluent is disinfected before release, and the digested sludge can be used as fertiliser.\n\n### Where Pollution Concentrates\n\nRivers beside cities and intensive farmland carry the heaviest loads of waste.\n\nSlow, warm water already holds less dissolved oxygen, so it is the first to suffer when organic matter arrives.`,
      groups: [
        {
          subTitle: "Sewage and the Oxygen Balance",
          bullets: [
            "Untreated **sewage** is full of organic matter, so **aerobic bacteria** multiply to break it down and use up dissolved oxygen as they respire.",
            "The drop in oxygen kills fish and other aquatic animals that need it, and the water turns septic as anaerobic microorganisms take over.",
            "Sewage can also carry **pathogens**, spreading diseases such as cholera through contaminated drinking water.",
            "**Oxygen demand rises with load:** the more organic matter entering a river, the larger the bacterial population and the further downstream the oxygen minimum extends.",
            "**Treatment protects oxygen:** removing organic matter before discharge means river bacteria never receive the food supply that makes them multiply and strip the water of oxygen.",
          ],
        },
        {
          subTitle: "Eutrophication from Fertiliser",
          bullets: [
            "**Eutrophication** begins when excess **mineral ions, especially nitrates**, from fertiliser are washed (run-off/leached) into a river or pond.",
            "The nitrates act as nutrients, so **algae grow very rapidly** into a bloom near the surface, which shades out light to the plants below.",
            "The shaded submerged plants die, and the increased population of **aerobic decomposer bacteria** breaks them down, removing more oxygen.",
            "With little oxygen left, **fish and other aquatic animals die**, and the water loses its variety of life.",
            "**Recovery needs the input to stop:** if the nitrate supply is cut, oxygen rises again and species recolonise from upstream, but only once the run-off ends.",
          ],
        },
        {
          subTitle: "Other Pollutants",
          bullets: [
            "**Pesticides** can kill non-target organisms such as pollinators and natural predators, and some, like the older insecticide DDT, are **non-biodegradable** and **build up** along the food chain (**biomagnification**), reaching the highest concentration in top predators.",
            "**Heavy metals** from industry (mercury, lead) are toxic and are not broken down, so they accumulate in organisms and sediments.",
            "**Oil spills** coat seabirds and marine mammals and smother coastal life.",
            "**Plastics** persist in the environment, entangle animals and are eaten, entering food chains as fragments.",
            "**Air pollutants** such as sulfur dioxide and nitrogen oxides form **acid rain**, which acidifies soils and lakes, leaches nutrients and kills fish eggs and aquatic invertebrates.",
            "**Thermal pollution:** warm water discharged from power stations holds less dissolved oxygen, stressing fish and aquatic invertebrates adapted to cool, oxygen-rich water.",
          ],
        },
      ],
      figure: eutrophicationDiagram + "\n\n" + sewageArt,
      examinerTips: [
        "In an eutrophication question, the marks are in the **order and the mechanism**: nitrates enter, algae bloom, light is blocked, plants die, aerobic bacteria decay them, oxygen falls, animals die. Include the bacteria step \u2014 it is where the oxygen is actually used up.",
        "Say 'aerobic bacteria/respiration' when explaining oxygen loss; naming the decomposers is usually worth a mark on its own.",
        "For pesticide questions, distinguish a pesticide that is broken down from one that is not. Only the **non-biodegradable** type bioaccumulates up the food chain.",
        "For pollution-control questions, name the method and its mechanism together: sewage treated before discharge, buffer strips beside streams, fertiliser applied in the right season and dose, persistent pesticides replaced.",
      ],
      commonMistakes: [
        "Saying the algal bloom kills fish by 'poisoning' the water. The fish die from **lack of oxygen**, released only after bacteria decompose the dead plants.",
        "Claiming nitrates are used up by the algae to make oxygen. Algae make oxygen while alive; the problem is that their death and decomposition **remove** oxygen.",
        "Writing 'eutrophication = pollution'. It is a specific process caused mainly by excess mineral nutrients from fertiliser or sewage.",
        "Saying oxygen rises during a bloom because the algae photosynthesise. The oxygen the bloom makes is cancelled out when the decomposer bacteria that follow its death consume far more.",
      ],
      recap: [
        "Describe how nitrates from fertiliser cause the death of fish in a river. [6]",
        "Explain how untreated sewage reduces the oxygen dissolved in a river. [4]",
        "State what is meant by non-biodegradable and explain why such pollutants are dangerous to top predators. [3]",
        "Explain why farmers are encouraged to avoid applying fertiliser just before heavy rain. [3]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_20: Chapter = chapter;
