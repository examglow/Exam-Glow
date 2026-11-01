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

const landUseArt = artPanel([
  {
    src: "ag01-contour-terraces.webp",
    alt: "A hillside cut into contour terraces with maize growing on each level and grassed bunds between them",
    caption: "Terraces slow runoff on a cultivated slope",
  },
  {
    src: "ag01-aquaculture-ponds.webp",
    alt: "Rectangular fish ponds with earthen banks beside flooded paddy fields, with a farmer throwing feed",
    caption: "Ponds turn valley water into a second crop",
  },
]);

const organicArt = artPanel([
  {
    src: "ag01-mixed-farm.webp",
    alt: "Cattle grazing on pasture beside narrow strips of maize and beans on the same small farm",
    caption: "Cattle, crop strips and manure on one holding",
  },
  {
    src: "ag01-organic-compost.webp",
    alt: "A long compost windrow of manure and crop residues beside a field sown with a green cover crop",
    caption: "Compost and cover crops feed the soil",
  },
]);

const technologyArt = artPanel([
  {
    src: "ag01-hydroponics.webp",
    alt: "Cutaway view of an NFT channel showing plant roots lying in a thin film of nutrient solution flowing to a tank",
    caption: "Roots in a moving film of nutrient solution",
  },
  {
    src: "ag01-gm-lab.webp",
    alt: "A plant tissue-culture laboratory with jars of seedlings beside a fenced trial plot of labelled crop rows",
    caption: "Tissue culture turns one gene into a field trial",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "General Agriculture",
  intro: `Agriculture is the management of land, water, plants and animals to produce food and income.\n\nThat management is a series of choices, because land is limited and every use of a hectare rules out another.\n\nThis chapter links **farming systems** to the **environment** that limits them, then to the **population** pressure that forces intensification.\n\nIt ends with the two modern options, **organic production** and **GM crops**, and with the **economics** that decide whether any of them pays.\n\nEvery definition here is worth a mark, and every comparison can be turned into a for-and-against answer.`,
  subheadings: [
    {
      title: "Land Use and Farming Systems",
      body: `### Land as a Finite Resource

Agriculture competes for land with housing, roads, industry, forestry and conservation.

A farm's area is fixed, so every hectare used for one purpose cannot be used for another.

That trade-off is the **opportunity cost** behind every land-use decision.

**Land use** therefore means the way a society allocates its land among these competing purposes.

### Classifying Land Use

**Arable farming** grows crops; **pastoral farming** keeps livestock; **mixed farming** does both.

**Forestry** manages trees for timber, fuel and watershed protection, often on land too steep, too dry or too poor for crops.

**Aquaculture** rears fish or crustaceans in ponds, tanks or cages, as the artwork shows beside paddy fields.

Land use also includes plantations, market gardens, ranching, wildlife reserves and settlements.

### Subsistence and Commercial Systems

**Subsistence** farms produce mainly for the household, with little surplus for sale.

**Commercial** farms produce for the market and are driven by price, contracts and profit.

The same crop can be grown either way, but the commercial farm needs transport, storage and credit.

### Intensive and Extensive Systems

**Intensive** systems apply large amounts of labour, capital or inputs to a small area.

**Extensive** systems use large areas with few inputs per hectare, such as ranching or shifting cultivation.

Yield per hectare is high in intensive systems; output per worker is often high in extensive ones.

### Rotations

A **rotation** is a planned sequence of different crops on the same field over several seasons.

A four-course example is maize, then beans, then cassava, then a grass or legume fallow.

Beans fix nitrogen, the fallow rebuilds structure, and the changing crop breaks pest and disease cycles.

The sequence also spreads labour peaks and protects the soil from being bare for long.

Continuous maize on the same plot is a **monoculture**, and yields usually fall after a few seasons.

### Mixed Farming

**Mixed farming** combines crops with livestock on one holding.

Cattle or goats eat crop residues and grass, and their manure returns nutrients and organic matter to the field.

Livestock also provide draft power, milk and a cash reserve that can be sold when crop prices are low.

Diversification spreads risk, because a failed maize crop need not ruin the household.

### Monoculture

**Monoculture** means growing one crop species on the same land year after year.

It suits mechanisation, uniform harvesting, grading and supply contracts, and it simplifies management.

The costs are pest and disease build-up, nutrient mining and dependence on one price.

Monoculture is not automatically wrong: it works where rotation, resistant varieties and inputs are managed well.

### Forestry and Agroforestry

**Silviculture** is the management of tree crops, with rotations of 15-30 years for timber.

**Agroforestry** mixes trees with crops or pasture, for example *Faidherbia albida* over maize.

Trees drop litter, shade the soil, cycle nutrients from depth and reduce wind erosion.

Woodlots also supply fuel, which takes pressure off natural forest.

### Aquaculture

**Aquaculture** needs clean water, adequate dissolved oxygen and a controlled stocking rate.

A 200 m² pond stocked at 3 fish/m² holds 600 tilapia.

At a feed conversion ratio of 1.6, those fish eat about 960 kg of feed to produce 600 kg of fish.

Ponds can be integrated with poultry or rice, so manure feeds plankton and plankton feeds the fish.

### Shifting Cultivation

**Shifting cultivation** clears a patch of forest, crops it for two or three seasons, then moves on.

Ash supplies a pulse of nutrients, and the long fallow restores fertility and structure.

It works at low population density but collapses when fallows shorten below about five years.

### Plantation and Ranching

**Plantations** grow one cash crop, such as tea, sugarcane or oil palm, usually with processing on site.

They need capital, labour and transport, and they are vulnerable to a fall in the world price.

**Ranching** is extensive grazing on natural pasture, common where rainfall is too low for crops.

### Worked Example: Maize Seed Rate

Spacing is 75 cm between rows and 25 cm within the row, so each plant occupies 0.75 × 0.25 = 0.1875 m².

Plant population = 10,000 ÷ 0.1875 = 53,333 plants per hectare.

With a 1000-grain weight of 300 g, seed needed = 53,333 × 0.3 g = 16 kg/ha.

Add 10% for gaps and germination, giving 17.6 kg/ha, so buy 20 kg to be safe.`,
      figure: landUseArt,
      groups: [
        {
          subTitle: "Farming Systems Compared",
          bullets: [
            "**Monoculture:** one crop repeated on the same land; efficient but risky.",
            "**Rotation:** a planned sequence of crops; breaks pest cycles and restores fertility.",
            "**Mixed farming:** crops plus livestock; manure, draft power and spread of risk.",
            "**Agroforestry:** trees with crops or pasture; shelter, litter and deep nutrient cycling.",
            "**Aquaculture:** fish or crustaceans in ponds or cages; needs clean water and controlled stocking.",
          ],
        },
        {
          subTitle: "Why Rotations Work",
          bullets: [
            "**Pests and diseases:** a new host crop starves soil-borne organisms of their preferred plant.",
            "**Nitrogen:** a legume in the sequence fixes nitrogen for the following cereal.",
            "**Structure:** deep and shallow roots, plus a ley or fallow, rebuild aggregation.",
            "**Weeds:** different planting dates, row widths and herbicides disrupt weed cycles.",
            "**Labour:** crops with different peak workloads spread demand across the season.",
          ],
        },
        {
          subTitle: "Choosing a System",
          bullets: [
            "**Land:** slope, soil depth and drainage decide what is physically possible.",
            "**Capital:** irrigation, machinery and certified seed all need money up front.",
            "**Labour:** weeding, harvesting and livestock care set the practical ceiling.",
            "**Market:** a perishable crop needs a buyer, a road and a cool store.",
            "**Risk:** mixed enterprises trade some profit for stability.",
          ],
        },
      ],
      examinerTips: [
        "Define monoculture as one crop species on the same land year after year, not simply a large field.",
        "Use a named local rotation, such as maize, beans, cassava, fallow, to make the answer concrete.",
        "Compare systems in pairs, giving one advantage and one disadvantage for each.",
        "Quote a figure where you can: seed rate, stocking density, rotation length or yield per hectare.",
        "Keep land use and farming system distinct: aquaculture is a land use, a rotation is a practice.",
      ],
      commonMistakes: [
        "Confusing rotation with mixed cropping: rotation is in time, mixed cropping is in the same field.",
        "Claiming monoculture is always wrong; it can be efficient where pests and nutrients are managed.",
        "Mixing up intensive with extensive; intensity is inputs per hectare, not farm size.",
        "Describing aquaculture as sea fishing; it is the farming of aquatic organisms.",
        "Forgetting that forestry is a land use with a long rotation, not unused land.",
      ],
      recap: [
        "Define monoculture and state two disadvantages of continuous monoculture. [3]",
        "Explain how a four-course rotation including a legume improves soil fertility. [3]",
        "Compare mixed farming with specialised monoculture for a smallholder. [4]",
        "A farmer plants maize at 75 cm × 25 cm with a 1000-grain weight of 300 g. Calculate the seed rate. [3]",
        "State two environmental requirements of a fish pond and explain why each matters. [4]",
      ],
    },
    {
      title: "Environmental Limits on Land Use",
      body: `### Topography

Slope steepness controls how fast water runs off and how much soil it carries.

Above about 15°, clean cultivation up and down the slope loses soil quickly.

**Contour ploughing** runs across the slope, and **terracing** cuts steps that shorten slope length, as the artwork shows.

Altitude lowers temperature by roughly 6.5 °C per 1000 m, which shortens the growing season.

At 1800 m the air is about 11.7 °C cooler than at sea level, so maize gives way to wheat, potatoes or tea.

**Aspect** matters too: in the southern hemisphere a north-facing slope receives more direct sun and dries faster.

### Climate

**Rainfall** amount and distribution decide which crops are possible.

Maize needs roughly 500-800 mm in the growing season, while cassava tolerates 600 mm but not waterlogging.

A 750 mm average can still fail if it arrives in three storms and the rest of the season is dry.

**Temperature** sets the length of the growing season and the risk of frost.

**Light** intensity and day length affect flowering, while strong wind increases transpiration and lodging.

### Soil Limits

Shallow soils over rock hold little water and cannot support deep-rooted crops.

Steep, shallow, stony land is best kept under forest, pasture or terraces.

**Waterlogging** excludes many crops, and **saline** soils restrict germination and nutrient uptake.

Soil pH limits nutrient availability, so strongly acid soils need lime before beans or maize do well.

### Biological and Economic Limits

**Pests and diseases** limit what can be grown: tsetse fly prevents cattle in parts of the savanna, and *Striga* limits maize on exhausted soils.

Distance to market decides whether perishable crops such as tomatoes or milk are viable.

Capital, labour, land tenure and government policy complete the list of limits.

A limit is not always permanent, because irrigation, drainage, terracing or a new road can remove it.

### Land Capability

Land is often classed from I to VIII: class I is deep, flat and arable, class IV needs careful management, class VII suits forestry or grazing, and class VIII is reserved for conservation.

The class is a guide, not a life sentence, because management can raise or lower it.

Overgrazing or repeated burning can push good land into a lower class within a few years.

### Microclimates and Shelter

A **microclimate** is the local climate of one field, valley or slope.

Valley bottoms collect cold air at night, so they frost more often than the slopes above them.

Windbreaks reduce wind speed for several times their height, cutting evaporation and protecting crops.

### Limits Interact

A steep slope with shallow soil loses water quickly, so drought arrives sooner than rainfall figures suggest.

Saline irrigation water can turn a well-drained soil salty within a few seasons.

That is why land capability is assessed from several factors together, never one alone.

### Worked Example: Slope and Terrace Spacing

A field rises 8 m over a horizontal distance of 40 m, so gradient = 8 ÷ 40 × 100 = 20%.

A common extension rule sets the vertical interval between contour bunds as VI = 0.3 × slope % + 1 = 0.3 × 20 + 1 = 7 m.

The horizontal spacing is then 7 × 100 ÷ 20 = 35 m.

On a long, erodible slope the spacing should be closer, because the rule is only a starting point.

### Worked Example: Altitude and Temperature

A farm at 1500 m has a mean temperature about 1500 ÷ 1000 × 6.5 = 9.75 °C lower than the coast.

If the coast averages 26 °C, the farm averages about 16 °C.

That is warm enough for maize but marginal for cotton, which explains the different cropping pattern on the same latitude.

Frost risk also rises with altitude, so the growing season at 1500 m may be two months shorter.

### Worked Example: Rainfall Reliability

A station averages 800 mm a year, but totals over 20 years have ranged from 520 mm to 1100 mm.

A crop needing 700 mm therefore fails in several of those years, even though the average looks adequate.

Planning for the average, rather than the range, is how farmers get caught.

Drought-tolerant varieties, water storage and irrigation are the answers to an unreliable distribution rather than a low total.`,
      groups: [
        {
          subTitle: "Topographic Limits",
          bullets: [
            "**Slope:** steep land sheds water fast, erodes and cannot be worked by tractor.",
            "**Altitude:** temperature falls about 6.5 °C per 1000 m, shortening the season.",
            "**Aspect:** sun-facing slopes are warmer and drier; shaded slopes stay moist and cold.",
            "**Drainage:** valley bottoms collect water and may be waterlogged or frosty.",
          ],
        },
        {
          subTitle: "Climatic Limits",
          bullets: [
            "**Rainfall:** total and distribution decide the crop and the length of the season.",
            "**Temperature:** controls germination, growth rate and frost risk.",
            "**Light:** low light reduces photosynthesis; day length controls flowering in some crops.",
            "**Wind:** raises transpiration, lodges tall crops and drives wind erosion.",
          ],
        },
        {
          subTitle: "Other Limits",
          bullets: [
            "**Soil:** depth, texture, pH and salinity set the rooting volume and nutrient supply.",
            "**Pests:** tsetse fly, *Striga* and nematodes can rule out a crop or livestock enterprise.",
            "**Market access:** distance and road quality decide whether perishable produce is viable.",
            "**Capital and tenure:** investment in terraces or irrigation needs money and secure rights.",
            "**Policy:** subsidies, taxes, import tariffs and land laws change what is profitable.",
          ],
        },
      ],
      examinerTips: [
        "Link every limit to a management response, such as slope to terracing or salinity to drainage.",
        "Use numbers, for example 6.5 °C per 1000 m or the slope gradient as a percentage.",
        "Keep climate and weather separate: climate is the long-term pattern, weather is one season.",
        "Name the factor, the effect on the crop, and the farmer's response in that order.",
        "Do not treat a limit as absolute; show how irrigation, terracing or a new variety can relax it.",
      ],
      commonMistakes: [
        "Confusing weather with climate; one dry season is weather, a 30-year average is climate.",
        "Saying steep land cannot be farmed at all; terracing and forestry are productive uses.",
        "Assuming aspect works the same in both hemispheres; sun-facing slopes differ by latitude.",
        "Believing more rain is always better; excess rain leaches nutrients and spreads disease.",
        "Forgetting economic limits and writing only about soil and rainfall.",
      ],
      recap: [
        "Explain how slope angle affects erosion risk and describe one control measure. [3]",
        "A hill rises 12 m over 60 m. Calculate the slope as a percentage and state the risk. [2]",
        "Explain why altitude changes the crops that can be grown, using a temperature figure. [3]",
        "Describe three environmental factors, other than rainfall, that limit land use. [3]",
        "Explain how terracing reduces soil loss on a steep field. [2]",
      ],
    },
    {
      title: "Population Pressure and Farm Planning",
      body: `### The Pressure of Numbers

Population in many farming regions grows at 2-3% a year, doubling in 25-35 years.

Land does not grow, so each generation inherits a smaller plot.

A 4 ha holding split among three sons becomes three plots of 1.3 ha, and the next generation splits again.

Fallow periods shorten from ten years to two, and continuous cropping mines nutrients.

### Consequences on the Farm

Small plots push farmers onto steep slopes, riverbanks and forest margins.

Short fallows allow *Striga*, nematodes and soil-borne diseases to build up.

Fuelwood cutting and overgrazing remove the cover that protected the soil.

Food demand still rises, so output per hectare must rise rather than area.

### Raising Output per Hectare

**Intensification** means getting more from the same land.

Improved varieties, closer spacing, fertiliser and manure, and timely weeding each raise yield.

**Multiple cropping** grows two or three crops a year where water and temperature allow.

**Intercropping** maize with beans uses light and nitrogen better and spreads risk.

Irrigation, agroforestry and better storage complete the package.

Post-harvest losses of 20-30% for maize and beans are equivalent to losing that share of the land.

### What Farm Planning Involves

**Farm planning** decides what to produce, where, when and with what resources.

Start with a resource audit: land area and soil types, water, labour, capital, tools and market access.

Then choose enterprises using **gross margins**, not guesswork or habit.

Lay out fields, tracks, windbreaks and drainage before the season starts.

Plan the rotation and the labour calendar, then write a budget and monitor it.

### The Farm Map and Layout

A sketch map marks field boundaries, soil types, water points, tracks, homestead and steep areas.

It shows which fields suit which crop and where erosion control is needed.

Layout should keep livestock out of crops, put perishable crops near the track, and leave windbreaks in place.

### Planning for Risk

A plan with one enterprise is a plan with one failure point.

A farmer spreads risk by growing several crops, keeping livestock and storing grain for the lean season.

Insurance, contracts and savings play the same role where they are available.

### Land Reform and Consolidation

Fragmented plots can be exchanged or consolidated to create workable fields.

Cooperatives share machinery, storage and transport, which lowers costs for small farms.

Secure title also gives collateral for credit, so investment becomes possible.

### Monitoring and Records

A plan is only useful if it is checked.

Records of yields, costs, labour days and prices show which enterprise actually pays.

Each season's records improve the next season's plan.

### Urban and Peri-Urban Land Use

Growing towns take flat, well-drained farmland for building.

Peri-urban farmers respond with market gardens, poultry and dairy, producing perishable food close to consumers.

Land values rise, so these farms are often temporary, but they use land intensively while they last.

### Worked Example: Land Needed to Feed a Family

A household of six eats about 220 kg of maize per person per year, so demand is 6 × 220 = 1320 kg.

At 2.5 t/ha, the area needed is 1320 ÷ 2500 = 0.53 ha.

Allow 20% for storage loss and seed, giving 0.53 × 1.2 = 0.64 ha.

If the farm is only 0.5 ha, the family must raise yield, earn cash for maize or grow a higher-value crop.

### Worked Example: Labour Calendar

Maize on 1 ha needs about 25 person-days for land preparation, 20 for planting, 40 for weeding and 30 for harvest, a total of 115 person-days.

If the household supplies 230 person-days a season, one hectare of maize uses half its labour.

A second crop, or a vegetable plot, must fit into the remaining days without clashing with the maize peak.

### Worked Example: Stocking Rate

A 6 ha paddock of improved pasture produces 8 t of dry matter per hectare a year.

A cow eats about 2.5% of its 400 kg body weight, or 10 kg of dry matter a day, which is 3650 kg a year.

The paddock produces 48 t, so it could carry 48,000 ÷ 3650 = 13 cows on paper.

Allowing 30% for trampling, waste and slow dry-season growth gives about 9 cows.

### Tenure and Settlement

Secure **land tenure** encourages terracing, tree planting and manure investment, because the farmer expects to benefit.

Fragmented plots waste time in walking and make mechanisation impossible.

Land consolidation, cooperative machinery and shared grazing can offset small farm size.

Agricultural extension, credit and reliable input supply turn a plan into practice.`,
      groups: [
        {
          subTitle: "Pressures on Land",
          bullets: [
            "**Subdivision:** inheritance splits holdings into plots too small to mechanise.",
            "**Shorter fallow:** continuous cropping replaces the recovery period of traditional systems.",
            "**Deforestation:** fuelwood and new fields remove the cover that protected soil and water.",
            "**Soil mining:** harvests remove nutrients faster than manure or fertiliser replaces them.",
            "**Competition:** housing, roads and industry take flat, well-drained land first.",
          ],
        },
        {
          subTitle: "Intensifying Without Degrading",
          bullets: [
            "**Improved varieties:** higher yield per plant and better disease resistance.",
            "**Intercropping:** legumes add nitrogen and ground cover in the same field.",
            "**Irrigation:** removes the dry-spell limit and allows a second crop.",
            "**Integrated fertility:** manure, compost and targeted fertiliser together.",
            "**Post-harvest care:** drying, storage and pest control keep the yield already grown.",
          ],
        },
        {
          subTitle: "A Farm Plan in Order",
          bullets: [
            "**Resource audit:** map the land, soil, water, labour, capital and market.",
            "**Enterprise choice:** compare gross margins and risk, not just gross output.",
            "**Layout:** fields, tracks, windbreaks, drainage and homestead in sensible places.",
            "**Rotation and calendar:** sequence crops and match labour peaks.",
            "**Budget and review:** record costs, yields and prices, then adjust next season.",
          ],
        },
      ],
      examinerTips: [
        "Use the phrase per hectare to show you understand intensification.",
        "Chain the argument: population, subdivision, shorter fallow, nutrient loss, lower yield.",
        "Answer planning questions as ordered steps, because the sequence itself earns marks.",
        "Put numbers into planning answers: farm size, household demand, yield and storage loss.",
        "Link intensification to sustainability, or the answer sounds like a recipe for soil mining.",
      ],
      commonMistakes: [
        "Saying population growth creates more land; the area is fixed and plots are subdivided.",
        "Confusing yield per hectare with total production; total can rise while yield falls.",
        "Writing a farm plan with no budget or labour calendar.",
        "Ignoring post-harvest loss, which wastes land as surely as a failed crop.",
        "Assuming intensification is always sustainable; without organic matter it degrades soil.",
      ],
      recap: [
        "Explain how population growth leads to shorter fallow periods. [3]",
        "State four consequences of subdividing a farm among heirs. [4]",
        "A family of five needs 200 kg of maize per person per year. At 2.0 t/ha and 25% loss, calculate the area needed. [3]",
        "List, in order, the steps a farmer should follow when planning a mixed farm. [4]",
        "Explain how secure land tenure encourages soil conservation. [2]",
      ],
    },
    {
      title: "Organic Production",
      body: `### What Organic Means

**Organic production** avoids synthetic fertilisers, synthetic pesticides, growth regulators and GM organisms.

It relies on compost, manure, crop residues, legumes, rotations and biological pest control.

Organic is defined by the **process**, not by the size of the farm or the appearance of the produce.

Certification normally requires a conversion period of two to three years.

### Building Fertility

**Compost** is made by mixing dry, carbon-rich material with green, nitrogen-rich material at about 25-30:1 C:N.

The heap is watered, turned and reaches 55-65 °C, which kills many weed seeds and pathogens.

**Green manures** such as sunhemp or mucuna are grown and incorporated before flowering.

**Legumes** in the rotation fix nitrogen, and **mulch** protects the surface and feeds soil organisms.

Approved mineral inputs include rock phosphate, lime and wood ash, used to correct specific deficiencies.

### Managing Pests and Weeds

Organic farms use **rotation** to break pest cycles and **companion planting** to confuse pests.

**Biological control** encourages predators such as ladybirds and parasitic wasps.

Approved sprays include neem extract and copper-based products, but they are not unlimited in use.

Weeding is mostly mechanical or by hand, which is the largest labour cost on many organic farms.

### The Case For Organic

Certified produce often earns a **price premium** of 20-50%.

Input costs are lower because compost and manure are produced on the farm.

Organic matter improves structure, infiltration and drought resilience.

Pollution from nitrate leaching and pesticide drift is reduced, and workers face fewer chemical hazards.

### The Case Against Organic

Yields are often 10-25% lower, especially in the first years of conversion.

Nutrients release slowly, so a deficiency cannot be corrected within days.

Labour demand is higher for weeding, composting and handling manure.

Certification costs money, and a neighbouring conventional farm can contaminate the crop or the water.

Organic produce also needs a reliable premium market, or the lower yield simply means lower income.

### Conversion and Certification

A farm converting to organic must stop using prohibited inputs for two to three years.

The inspector checks records, storage, seed sources and buffer zones against neighbouring farms.

Certified produce is then sold through a separate chain, with paperwork to prove its origin.

### Organic Livestock

Organic livestock must be fed organically grown feed and kept at low stocking density.

Routine antibiotics are restricted, so prevention through hygiene and grazing management matters more.

Manure is composted before use to kill parasites and weed seeds.

### Compost in Practice

Make the heap on level ground, layer coarse stalks, manure and green material, and water each layer.

Turn it after two weeks, then again after another two, until the centre cools and the material is dark and crumbly.

Mature compost smells earthy, not sour, and can be applied at 5-10 t/ha.

### Weeds and Labour

Without herbicides, weeds must be controlled before they seed.

Hand hoeing twice can add 30-40 person-days per hectare, a real cost that must appear in the budget.

Mulch and a stale seedbed reduce the number of weed flushes.

### Seeds and Varieties

Organic standards exclude GM seed and most chemically treated seed.

Open-pollinated varieties allow farmers to save seed, while hybrids must be bought each season.

Variety choice should favour disease resistance and vigorous early growth, which reduce reliance on sprays.

### Worked Example: Gross Margin, Conventional versus Organic Maize

Conventional: 4.0 t/ha at $200/t gives $800.

Variable costs are seed $60, fertiliser $150, pesticide $50 and labour $120, total $380, so the gross margin is $420.

Organic: 3.0 t/ha at a $300/t premium price gives $900.

Variable costs are seed $60, compost and manure $60 and extra labour $220, total $340, so the gross margin is $560.

The organic system wins only because of the premium and because manure was available on the farm.

Without the premium, organic output would be $600 and the gross margin $260, well below conventional.

### Compost and Manure Arithmetic

Manure at 0.5% N applied at 20 t/ha supplies 20,000 × 0.005 = 100 kg N/ha.

Only about 30% is available in the first season, so the first-year supply is about 30 kg N/ha.

That is why organic crops often look pale early and why compost quality matters so much.

Repeated applications build a slow-release reserve that conventional fertiliser does not.`,
      figure: organicArt,
      groups: [
        {
          subTitle: "Organic Practices",
          bullets: [
            "**Compost:** mixed residues heated to 55-65 °C, then matured before use.",
            "**Manure:** applied and incorporated before planting, never left in heaps in the field.",
            "**Cover crops:** legumes and grasses protect soil and add organic matter.",
            "**Rotation:** breaks pest cycles and balances nutrient demand.",
            "**Biological control:** predators and approved botanicals replace synthetic pesticides.",
          ],
        },
        {
          subTitle: "For Organic",
          bullets: [
            "**Premium price:** certified produce can sell for 20-50% more.",
            "**Soil health:** organic matter improves structure, water storage and soil life.",
            "**Lower pollution:** less nitrate leaching and pesticide contamination.",
            "**Worker safety:** fewer toxic chemicals handled on the farm.",
            "**Drought resilience:** better infiltration and water-holding capacity.",
          ],
        },
        {
          subTitle: "Against Organic",
          bullets: [
            "**Yield gap:** often 10-25% lower, especially during conversion.",
            "**Slow nutrients:** deficiencies cannot be corrected quickly.",
            "**Labour:** weeding, composting and manure handling are demanding.",
            "**Certification:** inspection, records and fees add cost.",
            "**Market risk:** without a premium buyer, lower yield means lower income.",
          ],
        },
      ],
      examinerTips: [
        "Define organic by what is excluded: synthetic fertilisers, synthetic pesticides and GM material.",
        "Compare organic with conventional using yield, costs and price in the same answer.",
        "Mention the two-to-three-year conversion period; it is a common mark.",
        "Balance the for-and-against points rather than listing only advantages.",
        "State that organic uses inputs too, just different ones: manure, compost, lime and approved sprays.",
      ],
      commonMistakes: [
        "Saying organic means no fertiliser; manure and compost are fertilisers.",
        "Assuming organic food is automatically more nutritious; the evidence is mixed.",
        "Ignoring the premium market, which is what makes lower yields pay.",
        "Confusing free-range with organic; free-range is about housing, not inputs.",
        "Claiming organic uses no pesticides; approved botanical and mineral sprays are used.",
      ],
      recap: [
        "Define organic production and state two practices it relies on. [3]",
        "Explain two advantages and two disadvantages of organic production for a smallholder. [4]",
        "A conventional crop yields 4.0 t/ha at $200/t with variable costs of $380. Calculate its gross margin. [2]",
        "Explain why a price premium is essential if organic yields are lower. [3]",
        "Describe how compost is made and state one benefit to soil structure. [3]",
      ],
    },
    {
      title: "Hydroponics and Genetically Modified Crops",
      body: `### Hydroponics: The Principle

**Hydroponics** grows plants in a nutrient solution instead of soil.

The roots sit in an inert medium such as perlite, rockwool or coco coir, or directly in flowing water.

A complete solution supplies N, P, K, Ca, Mg, S and the micronutrients at a controlled pH of about 5.5-6.5.

**Electrical conductivity** of 1.5-2.5 mS/cm is used to check nutrient strength.

### Nutrient Film Technique

In **NFT** a shallow film of solution, about 1-2 mm deep, flows continuously through a sloping channel, as the artwork shows.

Roots lie in the film and take up water and ions.

A pump lifts solution from a tank, and the return flow prevents roots from drying.

Power failure can kill a crop within hours, so a backup pump or gravity system is essential.

### What Hydroponics Offers

Water use is far lower, often 70-90% less than field irrigation, because drainage is captured and reused.

There are no soil-borne diseases or weeds, and nutrients are matched to the crop.

Production can be year-round and stacked vertically near cities.

Lettuce, tomatoes, peppers, strawberries and fodder barley are common hydroponic crops.

### What Hydroponics Costs

Capital cost is high: channels, tanks, pumps, sensors and a greenhouse.

The system needs reliable electricity, clean water and technical skill.

A disease such as *Pythium* spreads rapidly through a shared solution.

Staple cereals cannot compete economically with field production.

### Managing the Solution

pH and conductivity are checked daily, because roots change both as they absorb ions.

Water is topped up with fresh solution, and the tank is cleaned between crops.

Sick plants are removed at once, since a shared solution links every plant to every disease.

### Other Hydroponic Systems

**Deep water culture** floats plants on rafts above an aerated tank, so roots hang directly in the solution.

**Media beds** fill containers with perlite or coco coir and feed them by drip.

**Aeroponics** mists roots with solution and uses the least water, but the pumps and nozzles must be reliable.

### Hydroponic Fodder

Barley or maize seed can be grown in trays for seven to ten days to produce green fodder.

One kilogram of seed yields roughly six to eight kilograms of fresh fodder.

This suits dairy cows in dry areas, although the fodder is mostly water and does not replace a balanced ration.

### Worked Example: Hydroponic Lettuce Gross Margin

A 40 m² bed at 25 plants/m² carries 1000 lettuce.

At $0.60 per head, output is $600.

Variable costs are seedlings $80, nutrients $60, electricity $90 and labour $120, total $350.

Gross margin is $250 per crop, and four crops a year give about $1000 from 40 m².

### GM Crops: The Technology

**Genetic modification** inserts a gene from another organism into a crop using recombinant DNA.

The gene may come from a bacterium, another plant or an unrelated species.

**Agrobacterium** or a gene gun delivers the gene into tissue-culture cells, which are selected and grown into plants.

The result is a **transgenic** crop with a new trait, tested in contained trials and field plots before approval.

### Traits in Commercial Use

**Insect resistance** comes from Bt genes, which make the plant toxic to certain caterpillars.

**Herbicide tolerance** lets farmers spray a broad-spectrum herbicide without killing the crop.

Other traits include drought tolerance, virus resistance, delayed ripening and enhanced vitamin content.

Each trait is specific: a Bt crop is not resistant to every pest.

### The Case For GM Crops

GM crops can raise yield and cut losses; Bt cotton has reduced insecticide spraying substantially in several countries.

Less spraying lowers cost, worker exposure and pollution.

Drought-tolerant varieties extend cropping into drier areas, and biofortified crops address malnutrition.

Higher yields on existing land reduce pressure to clear forest.

### The Case Against GM Crops

Seed is more expensive and may be owned by a company, creating dependence.

Pollen can move into neighbouring fields and landraces, which matters for organic certification.

Constant selection pressure can produce resistant pests and herbicide-resistant weeds.

Long-term health and ecological effects are debated, and some export markets reject GM grain.

### Worked Example: Bt Cotton Insecticide Saving

A conventional crop needs 10 sprays at $12 each, costing $120/ha.

A Bt crop needs 3 sprays, costing $36/ha, but the seed costs $40/ha more.

The saving is 120 − 36 − 40 = $44/ha.

If yield rises 15% from 1.2 t to 1.38 t at $500/t, revenue rises by 0.18 × 500 = $90, so the total advantage is about $134/ha.`,
      figure: technologyArt,
      groups: [
        {
          subTitle: "Hydroponics: For and Against",
          bullets: [
            "**Water:** recirculation cuts use by 70-90% compared with field irrigation.",
            "**Control:** pH, conductivity and nutrients are managed precisely, with no weeds.",
            "**Cost:** channels, pumps, sensors and protected structures need heavy capital.",
            "**Risk:** power cuts, blocked emitters and water-borne disease can destroy a crop fast.",
            "**Limits:** suited to high-value vegetables and fodder, not staple cereals.",
          ],
        },
        {
          subTitle: "GM: The Case For",
          bullets: [
            "**Yield and loss:** insect resistance and disease resistance protect the harvest.",
            "**Inputs:** Bt cotton needs fewer insecticide sprays.",
            "**Stress tolerance:** drought and salinity traits extend the cropped area.",
            "**Nutrition:** biofortified crops such as golden rice address vitamin A deficiency.",
            "**Land sparing:** more food from existing farmland reduces forest clearance.",
          ],
        },
        {
          subTitle: "GM: The Case Against",
          bullets: [
            "**Seed cost:** technology fees and contracts raise costs and dependence.",
            "**Gene flow:** pollen can reach landraces and organic crops.",
            "**Resistance:** pests and weeds can evolve resistance under constant pressure.",
            "**Markets:** some buyers reject GM grain, cutting export options.",
            "**Uncertainty:** long-term ecological and health effects are still debated.",
          ],
        },
      ],
      examinerTips: [
        "Define hydroponics as soil-less culture in a nutrient solution, not as chemical-free farming.",
        "Give a named system, NFT or deep water culture, and describe how the solution reaches the roots.",
        "For GM answers, name the trait and the crop, such as Bt cotton or herbicide-tolerant maize.",
        "Balance for-and-against answers with equal numbers of points on each side.",
        "Use a figure for water saving, yield gain or cost, because it turns opinion into evidence.",
      ],
      commonMistakes: [
        "Confusing genetic modification with selective breeding or hybrid seed.",
        "Saying hydroponics uses no water; it uses less, but still needs a clean supply.",
        "Claiming hydroponics is organic; synthetic nutrient salts are usually used.",
        "Assuming all GM crops are insect resistant; traits differ by crop and event.",
        "Ignoring the cost side and writing only about higher yields.",
      ],
      recap: [
        "Define hydroponics and describe how nutrient film technique supplies roots. [3]",
        "State two advantages and two disadvantages of hydroponic production. [4]",
        "Explain how a Bt gene protects a cotton crop. [2]",
        "Give three arguments for and three against the use of GM crops. [6]",
        "A Bt crop saves 6 sprays at $12 each but costs $30/ha more for seed. Calculate the net saving. [2]",
      ],
    },
    {
      title: "Economics: Supply, Demand and Diminishing Returns",
      body: `### Scarcity and Choice

Every farm faces limited land, labour and capital, so choosing one enterprise means giving up another.

The value of the next best option is the **opportunity cost**.

A hectare of beans is chosen over maize because its expected return is higher, not because maize is useless.

### Demand

**Demand** is the quantity consumers will buy at a given price.

As price falls, quantity demanded usually rises, giving a downward-sloping demand curve.

Demand shifts when income, population, tastes or substitute prices change.

Farm products are often **price inelastic** in the short run, because people cannot quickly change how much staple food they eat.

### Supply

**Supply** is the quantity producers will offer at a given price.

Higher prices encourage more planting, but the response lags by a season.

Weather, input costs, technology and the number of farmers shift the supply curve.

At **equilibrium** the quantity supplied equals the quantity demanded, and that sets the market price.

### Price Swings

When all farmers plant maize after a good price, the next harvest is large and prices collapse.

Low prices then cut planting, and the following season brings scarcity and high prices.

This **cobweb** pattern is why storage, contracts, irrigation and diversification matter.

### Elasticity and the Farmer

**Price elasticity of demand** measures how strongly quantity demanded responds to a price change.

Staples such as maize and cassava are inelastic, so a bumper harvest can cut total revenue.

Vegetables and fruit are more elastic, and a glut can destroy the market for a perishable crop.

### Fixed and Variable Costs

**Variable costs** change with the area planted: seed, fertiliser, fuel and casual labour.

**Fixed costs** are paid whether or not the crop is grown: rent, machinery depreciation and permanent labour.

Gross margin covers variable costs; only the whole-farm budget shows whether fixed costs are covered.

### Diminishing Returns

The **law of diminishing returns** applies when one factor is fixed, usually land.

Adding more of a variable input, such as nitrogen, raises output at first, then by smaller and smaller amounts.

Eventually extra input adds nothing, or even reduces yield through lodging, disease or salt damage.

### Worked Example: Nitrogen Diminishing Returns

Yield response on one hectare: 0 kg N gives 2.00 t; 25 kg gives 2.60 t; 50 kg gives 3.10 t; 75 kg gives 3.50 t; 100 kg gives 3.80 t; 125 kg gives 4.00 t; 150 kg gives 4.10 t.

Marginal yield per 25 kg N is 0.60, 0.50, 0.40, 0.30, 0.20 and 0.10 t.

With N at $1.20/kg, each 25 kg increment costs $30.

With maize at $200/t, marginal revenue is $120, $100, $80, $60, $40 and $20.

The optimum is 125 kg N/ha, where the last increment still earns $40 for $30.

At 150 kg the extra $30 buys $20 of maize, so profit falls.

Total revenue at 125 kg = 4.00 × 200 = $800, fertiliser cost = 150, net return = $650.

At 100 kg, revenue = $760 and fertiliser = $120, net return = $640, so 125 kg is slightly better.

### Choosing Between Enterprises: Gross Margin

**Gross margin** = gross output − variable costs; fixed costs are excluded because they are paid anyway.

Maize: 4.0 t at $200 = $800, variable costs $310, gross margin $490.

Beans: 1.2 t at $700 = $840, variable costs $280, gross margin $560.

Tomatoes: 15 t at $180 = $2700, variable costs $1450, gross margin $1250.

Tomatoes look best per hectare but need $1450 of working capital, irrigation, labour and a reliable market.

Beans may be the better choice where capital is short and the maize price is uncertain.

### Worked Example: Break-Even Yield

A tomato crop has fixed costs of $600/ha and variable costs of $100/t, with a price of $180/t.

Contribution per tonne = 180 − 100 = $80.

Break-even yield = 600 ÷ 80 = 7.5 t/ha, so any yield above that covers all costs.

### Records and Budgets

A whole-farm budget adds the gross margins of all enterprises and subtracts fixed costs.

Partial budgets test one change, such as buying a sprayer or a pump, before the money is spent.

Records turn the next season's plan from guesswork into arithmetic.

### Decisions Under Risk

Economic decisions use expected prices, not last year's prices.

A farmer compares gross margin per hectare, per labour day and per dollar of capital.

Diversification, storage, forward contracts and irrigation reduce risk.

Government policy, taxes, subsidies and import tariffs can change the whole calculation overnight.

Records of yields, costs and prices are the only reliable base for next season's plan.`,
      groups: [
        {
          subTitle: "Supply and Demand",
          bullets: [
            "**Demand curve:** quantity bought falls as price rises, other things equal.",
            "**Supply curve:** quantity offered rises as price rises, after a seasonal lag.",
            "**Equilibrium:** the price where supply and demand match.",
            "**Shifts:** income, weather, input costs and population move whole curves.",
            "**Elasticity:** staples are inelastic, so small harvest changes cause large price swings.",
          ],
        },
        {
          subTitle: "Diminishing Returns",
          bullets: [
            "**Fixed factor:** land stays the same while fertiliser or labour increases.",
            "**Marginal product:** the extra output from one more unit of input.",
            "**Optimum:** apply input until marginal revenue equals marginal cost.",
            "**Beyond the optimum:** extra input costs more than the output it adds.",
            "**Maximum yield:** not the same as maximum profit.",
          ],
        },
        {
          subTitle: "Choosing Between Enterprises",
          bullets: [
            "**Gross margin:** output minus variable costs, per hectare or per enterprise.",
            "**Opportunity cost:** the return from the enterprise you did not choose.",
            "**Capital:** high-value crops need more working capital before harvest.",
            "**Labour:** compare returns per person-day, not only per hectare.",
            "**Risk:** price, weather and market access decide whether a higher margin is worth taking.",
          ],
        },
      ],
      examinerTips: [
        "Show the gross margin calculation as output minus variable costs, with units.",
        "Use marginal reasoning: compare the extra revenue with the extra cost, not total with total.",
        "State that maximum yield is not maximum profit; the economic optimum comes earlier.",
        "Exclude fixed costs from a gross margin and say why.",
        "Bring in opportunity cost whenever a farmer chooses between two enterprises.",
      ],
      commonMistakes: [
        "Treating maximum yield as maximum profit; the last input may lose money.",
        "Including fixed costs such as rent in a gross margin.",
        "Confusing a shift of the demand curve with a movement along it.",
        "Ignoring opportunity cost when comparing two crops.",
        "Adding fertiliser cost to revenue instead of subtracting it from gross output.",
      ],
      recap: [
        "Define gross margin and state why fixed costs are excluded. [3]",
        "Explain the law of diminishing returns using a fertiliser example. [3]",
        "A crop yields 3.5 t/ha at $220/t with variable costs of $340/ha. Calculate the gross margin. [2]",
        "Explain how a price rise for maize affects supply in the next season and why. [3]",
        "A farmer can grow beans with a gross margin of $560 or maize with $490. Explain the opportunity cost of choosing maize. [3]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_1: Chapter = chapterOne;
