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

const profileArt = artPanel([
  {
    src: "ag02-soil-profile.webp",
    alt: "Cutaway soil profile showing surface litter, dark topsoil with roots, a paler clay subsoil, weathered rock fragments and solid bedrock below",
    caption: "Litter, topsoil, subsoil, bedrock: one cut",
  },
  {
    src: "ag02-soil-texture.webp",
    alt: "Three close-up panels of sand, silt and clay grains, with water films clinging to the finest particles",
    caption: "Weathering produces sand, silt and clay",
  },
]);

const fertilityArt = artPanel([
  {
    src: "ag02-crumb-structure.webp",
    alt: "Magnified soil crumb held together by humus, a root, fungal hyphae and an earthworm, with pore space between the aggregates",
    caption: "Humus, roots and hyphae build crumbs",
  },
  {
    src: "ag02-nitrogen-cycle.webp",
    alt: "Legume root nodules, decomposing residues, ammonium and nitrate in the soil, and nitrate carried downward in drainage arranged as a cycle",
    caption: "The nitrogen cycle leaks at leaching and denitrification",
  },
]);

const erosionArt = artPanel([
  {
    src: "ag02-gully-erosion.webp",
    alt: "A bare slope cut by rills and a deep gully beside a grassed contour strip holding the soil in place",
    caption: "Runoff cuts rills, then gullies",
  },
  {
    src: "ag02-water-cycle-irrigation.webp",
    alt: "Rain falling on a farm, water infiltrating to groundwater and returning through transpiration, with a drip irrigation line in the foreground",
    caption: "Rain, infiltration, groundwater and irrigation",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Soil",
  intro: `Soil is the thin, fragile layer that makes agriculture possible.\n\nIt is a mixture of **mineral particles**, **organic matter**, **air**, **water** and **living organisms**, held in a structure that lets roots breathe and drink.\n\nThis chapter follows soil from **weathering** and **profile** to **texture** and **structure**, then to **fertility**, the **nitrogen cycle** and fertiliser calculations.\n\nIt closes with **erosion**, **drainage**, **irrigation** and the **water cycle**, because soil is only useful while it stays on the farm.\n\nLearn each process as a mechanism, not a list, and the longer questions become straightforward.`,
  subheadings: [
    {
      title: "Soil Formation and Profile",
      body: `### What Soil Is

**Soil** is a mixture of weathered mineral particles, organic matter, air, water and living organisms.

It forms at the surface where rock, climate, organisms and time interact.

A soil is not just broken rock: the organic fraction and the pore space are what make it fertile.

### Parent Material

**Parent material** is the rock or deposit from which the mineral fraction forms.

Igneous rocks such as granite give sandy, acidic soils, while basalt gives clay-rich, more fertile soils.

Sedimentary rocks matter too: limestone weathers to alkaline clay, and sandstone to sandy, acidic soil.

Transport by wind, water or ice can deposit material far from its origin.

### Physical Weathering

**Physical weathering** breaks rock without changing its chemistry.

**Freeze-thaw** forces water into cracks, where ice expands and splits the rock.

Heating and cooling, wetting and drying, and salt crystallisation also flake and crumble rock.

Roots wedge cracks apart, and wind-blown sand abrades exposed surfaces.

### Chemical Weathering

**Chemical weathering** alters the minerals themselves.

**Hydrolysis** attacks feldspar and mica, producing clay minerals.

**Oxidation** turns iron minerals to reddish iron oxides.

**Carbonation** and solution dissolve limestone and chalk, which are then carried away in drainage water.

Chemical weathering is fastest in warm, wet climates.

### Biological Weathering

**Biological weathering** is done by living things.

Lichens and mosses produce weak acids that etch rock surfaces.

Roots both wedge and dissolve, and burrowing animals mix fragments with organic matter.

Earthworms and microbes then turn the mixture into crumb structure.

### The Profile

A **soil profile** is a vertical section from the surface to the bedrock.

The **O horizon** is fresh and partly decayed litter.

The **A horizon**, or **topsoil**, is dark with humus, rich in roots and soil life, and the most fertile layer.

The **B horizon**, or **subsoil**, is paler and receives clay, iron and salts washed down from above.

The **C horizon** is weathered parent material, and the **R horizon** is unaltered rock.

### Transfers Within the Profile

**Eluviation** is the washing out of clay, iron and organic matter from the A horizon.

**Illuviation** is their deposition in the B horizon, which is why subsoil can be sticky and dense.

**Leaching** removes soluble salts entirely, while **translocation** only moves material downward.

### Humification

**Humification** is the conversion of residues into stable dark **humus** by microbes and soil animals.

Humus holds water and nutrients and glues particles into crumbs.

The process needs nitrogen, so straw-rich residues break down slowly unless nitrogen is available.

### Time and Maturity

A young soil on a recent lava flow has little profile development.

A mature soil on stable, gentle land has distinct horizons and deep topsoil.

Erosion or deposition can reset the clock, producing a buried or truncated profile.

### Worked Example: Formation Against Loss

Soil forms at roughly 0.01-0.1 mm per year, so 1 cm takes 100-1000 years.

A loss of 10 t/ha/year on soil of bulk density 1300 kg/m³ is 10,000 ÷ 1300 = 7.7 m³/ha.

Spread over 10,000 m² that is 0.00077 m, or about 0.8 mm per year.

Erosion can therefore remove in a year what formation takes decades to replace.

### Worked Example: Mass of Topsoil

One hectare of topsoil 20 cm deep is 10,000 × 0.20 = 2000 m³.

At a bulk density of 1300 kg/m³, that is 2.6 million kg, or 2600 t of soil.

At 1% organic matter, the field holds about 26 t of organic matter in that layer.

That is why losing the topsoil loses a store built over decades.

### Soil Colour and Drainage

Dark colour usually signals organic matter and good fertility.

Red and yellow colours indicate iron oxides and generally good drainage and aeration.

Grey or blue-grey mottles show prolonged waterlogging and reduced iron.

### Worked Example: Depth of Formed Soil

If soil forms at 0.05 mm a year, a 15 cm topsoil needs 150 ÷ 0.05 = 3000 years.

On a 20° slope losing 1 mm a year, the same layer would be gone in 150 years.

Formation and loss operate on completely different timescales.

### Why the Profile Matters

Root depth, drought resistance and nutrient supply all depend on how thick the A horizon is.

A plough pan or a shallow C horizon limits rooting and makes crops fail in a dry spell.

Topsoil washed away exposes the poorer B horizon, which is why eroded fields yield less even after fertilising.`,
      figure: profileArt,
      groups: [
        {
          subTitle: "Three Kinds of Weathering",
          bullets: [
            "**Physical:** freeze-thaw, heating and cooling, wetting and drying, root wedging, abrasion.",
            "**Chemical:** hydrolysis makes clay, oxidation makes iron oxides, carbonation dissolves limestone.",
            "**Biological:** lichens, roots, burrowing animals and microbes break and mix rock.",
            "**Climate:** warm, wet conditions speed chemical weathering; cold, wet ones favour freeze-thaw.",
          ],
        },
        {
          subTitle: "The Horizons in Order",
          bullets: [
            "**O:** litter and partially decayed organic matter on the surface.",
            "**A:** dark topsoil, humus-rich, biologically active, the main rooting layer.",
            "**B:** subsoil, paler, enriched with clay, iron or salts leached from above.",
            "**C:** weathered parent material, little organic matter.",
            "**R:** unaltered bedrock beneath the profile.",
          ],
        },
        {
          subTitle: "Factors of Formation",
          bullets: [
            "**Parent material:** sets the initial texture, pH and mineral reserve.",
            "**Climate:** controls the rate of weathering and the amount of leaching.",
            "**Organisms:** supply organic matter and mix it into the profile.",
            "**Relief:** deep soils form on gentle slopes; steep slopes stay thin and stony.",
            "**Time:** a mature profile takes centuries to develop.",
          ],
        },
      ],
      examinerTips: [
        "Name the process, not just the result: say hydrolysis or freeze-thaw rather than weathering.",
        "Keep weathering and erosion apart; weathering breaks rock in place, erosion moves it.",
        "Describe horizons by colour, texture, roots and organic matter, as well as by letter.",
        "Link parent material to a soil property such as pH, texture or fertility.",
        "Use the profile diagram to explain why eroded fields yield less.",
      ],
      commonMistakes: [
        "Calling soil dirt and ignoring its organic and living components.",
        "Confusing weathering with erosion; transport is the key difference.",
        "Saying subsoil is more fertile than topsoil; the A horizon holds the humus.",
        "Assuming all profiles are the same depth; climate, relief and time change them.",
        "Forgetting biological weathering and listing only physical and chemical processes.",
      ],
      recap: [
        "Define soil and state its four main components. [3]",
        "Describe three processes of physical weathering. [3]",
        "Explain how hydrolysis contributes to soil formation. [2]",
        "Draw and label a soil profile, naming the O, A, B, C and R horizons. [5]",
        "Explain why erosion can reduce yield more than the loss of a few millimetres suggests. [2]",
      ],
    },
    {
      title: "Soil Texture, Structure and Types",
      body: `### Texture Is About Particle Size

**Soil texture** is the proportion of sand, silt and clay particles in the mineral fraction.

Sand is roughly 2.0-0.05 mm, silt 0.05-0.002 mm, and clay below 0.002 mm, although schemes differ slightly at the boundaries.

Smaller particles have far more surface area per gram, which is why clay holds water and nutrients strongly.

### Testing Texture in the Field

The **ribbon test** moistens soil and squeezes it between thumb and forefinger.

Sand will not ribbon, silt gives a weak, short ribbon, and clay forms a long, flexible ribbon.

The **jar test** shakes soil in water with a dispersing agent, then measures the settled layers after 24 hours.

### Worked Example: Jar Test

A sample settles into 4.0 cm of sand, 2.0 cm of silt and 1.0 cm of clay, a total of 7.0 cm.

Sand = 4.0 ÷ 7.0 × 100 = 57%; silt = 2.0 ÷ 7.0 × 100 = 29%; clay = 1.0 ÷ 7.0 × 100 = 14%.

That composition is a **sandy loam**, suitable for maize but prone to leaching.

### Structure Is About Arrangement

**Soil structure** is how particles are grouped into aggregates.

**Crumb structure** is the ideal: rounded aggregates of 1-10 mm with plenty of pore space.

**Humus**, clay, roots and fungal hyphae bind particles into stable crumbs, as the artwork shows.

Structure controls infiltration, aeration, root penetration and resistance to erosion.

### Types of Structure

**Granular** and **crumb** structures are rounded and typical of topsoil.

**Blocky** and **prismatic** structures form in subsoil and clay horizons.

**Platy** structure lies in flat sheets and slows infiltration, while **massive** soil has no visible aggregates.

### Aggregate Stability

Aggregates are held by humus, clay, calcium and fungal hyphae.

They are weakened by sodium, by repeated wetting and drying, and by tillage.

A stable aggregate survives a raindrop; an unstable one disperses and seals the surface.

### Losing Structure

**Organic matter** is oxidised by soil organisms, releasing carbon dioxide and nutrients.

Continuous cultivation, residue burning and bare fallow speed that loss.

Heavy machinery and repeated tillage at the same depth compact the soil and break aggregates.

Raindrop impact disperses clay, which seals the surface as a **cap** that seedlings cannot push through.

Repeated ploughing at 15-20 cm creates a **plough pan**, a hard layer that roots and water cannot cross.

### Sandy, Loam and Clay Soils

**Sandy soils** drain fast, warm early, are easy to work and hold little water or nutrients.

**Clay soils** hold much water but drain slowly, become sticky when wet and hard when dry.

**Loam** balances sand, silt and clay and is the best all-round soil for most crops.

Water-holding capacity by volume is roughly 5-10% for sand, 20-25% for loam and 35-40% for clay.

Not all clay water is available: much is held too tightly for roots.

### Worked Example: Water Stored in the Topsoil

One hectare to 30 cm depth is 10,000 × 0.30 = 3000 m³ of soil.

A loam holding 20% water by volume stores 3000 × 0.20 = 600 m³, which is 60 mm of water over the field.

A sand at 8% stores 240 m³, or 24 mm, so the same rain supports far less growth.

That difference is why sandy soils drought sooner and need more frequent irrigation.

### Worked Example: Available Water

A loam holds 24% water at field capacity and 10% at the wilting point by volume.

Available water = 24 − 10 = 14% of soil volume.

For 30 cm depth, that is 3000 × 0.14 = 420 m³/ha, or 42 mm of usable water.

That is roughly four days of crop water use at 10 mm a day.

### Managing Capping and Pans

Keep the surface covered so raindrops do not disperse clay.

Add organic matter and avoid working wet soil, which smears and compacts it.

Break a plough pan with a subsoiler or deep ripper when the soil is dry enough.

### Drainage and Crop Choice

**Drainage** is the speed at which gravitational water leaves the root zone.

Sandy soils are well drained and suit carrots, groundnuts and early potatoes.

Clay soils are poorly drained and suit rice, bananas or a pasture grown on raised beds.

Loams suit the widest range of crops, including maize, beans and vegetables.

Texture can be improved only slowly, by adding organic matter, but it cannot be changed outright.`,
      groups: [
        {
          subTitle: "Particle Sizes and Tests",
          bullets: [
            "**Sand:** 2.0-0.05 mm, visible grains, large pores, rapid drainage.",
            "**Silt:** 0.05-0.002 mm, smooth when dry, moderate water retention.",
            "**Clay:** below 0.002 mm, sticky when wet, high surface area and nutrient holding.",
            "**Ribbon test:** sand will not ribbon, silt ribbons weakly, clay ribbons long and flexible.",
            "**Jar test:** measure settled layers and calculate each percentage.",
          ],
        },
        {
          subTitle: "Structure and Its Breakdown",
          bullets: [
            "**Crumb:** rounded aggregates with good pore space, built by humus, roots and hyphae.",
            "**Capping:** raindrop impact seals the surface and blocks seedling emergence.",
            "**Plough pan:** compaction at plough depth restricts roots and drainage.",
            "**Compaction:** machinery and stock squeeze air out of the pores.",
            "**Organic matter loss:** oxidation and residue burning leave weak, unstable aggregates.",
          ],
        },
        {
          subTitle: "Sand, Loam and Clay Compared",
          bullets: [
            "**Sand:** warms early, drains fast, leaches nutrients, drought-prone.",
            "**Clay:** holds water and nutrients, drains slowly, sticky and hard, prone to waterlogging.",
            "**Loam:** balanced pores, good structure, best all-round for arable crops.",
            "**Water-holding capacity:** roughly 5-10% sand, 20-25% loam, 35-40% clay by volume.",
            "**Management:** add organic matter to both sand and clay to improve structure.",
          ],
        },
      ],
      examinerTips: [
        "Quote particle sizes with units; texture is defined by size, not by feel alone.",
        "Keep texture, the proportion of particles, separate from structure, their arrangement.",
        "Describe a texture test as apparatus, steps and the observation that decides the class.",
        "Link pore size to water: small pores hold water, large pores drain and hold air.",
        "Explain capping and pans by their cause, their effect on roots and water, and a remedy.",
      ],
      commonMistakes: [
        "Assuming clay is always the most fertile soil; it can be poorly aerated and hard to work.",
        "Saying sand holds no water; it holds a little, but drains too fast for most crops.",
        "Using texture and structure as synonyms.",
        "Believing large pores hold the most plant-available water; small pores do.",
        "Treating capping as harmless; it can stop a whole field of seedlings emerging.",
      ],
      recap: [
        "Distinguish soil texture from soil structure. [2]",
        "State the approximate particle-size range of sand, silt and clay. [3]",
        "Describe the jar test and calculate the texture of a sample with 6 cm sand, 3 cm silt and 1 cm clay. [4]",
        "Explain how continuous cultivation leads to a plough pan and why it matters. [3]",
        "Compare sandy and clay soils for water-holding capacity and drainage. [4]",
      ],
    },
    {
      title: "Soil Constituents and Temperature",
      body: `### The Four Constituents

A fertile topsoil is about 45% mineral matter, 5% organic matter, and 50% pore space.

The pores hold air and water in varying proportions, ideally about 25% of each.

When water fills every pore, air is excluded and roots cannot respire.

### Mineral and Organic Matter

**Mineral matter** supplies most of the soil's mass and its reserves of potassium, calcium and magnesium.

**Organic matter** includes fresh residues, living organisms and stable **humus**.

Humus holds nutrients, buffers pH and binds crumbs.

Roughly 1% organic matter in the top 20 cm is about 20-25 t/ha.

### Soil Air

Roots and soil organisms take oxygen from soil air and release carbon dioxide.

Most crops need at least 10% oxygen in the pore space.

Waterlogging replaces air with water, so respiration stops and roots suffocate.

Good structure keeps large pores open, which is why compaction damages roots even in a wet season.

### Forms of Soil Water

**Gravitational water** fills large pores after rain and drains downward under gravity.

**Capillary water** is held in small pores and is the main supply available to roots.

**Hygroscopic water** is bound tightly to particle surfaces and is unavailable to plants.

**Field capacity** is the water left after gravitational drainage; the **permanent wilting point** is where roots can no longer extract water.

The difference between the two is the available water capacity.

### Soil Organisms

**Bacteria** decompose residues, fix nitrogen and carry out nitrification.

**Fungi** break down tough lignin and form **mycorrhizae** that extend the root's reach for water and phosphorus.

**Nematodes** include both root-feeding pests and beneficial predators.

**Earthworms** pull litter underground, mix casts through the profile and create burrows for air and water.

A healthy soil may carry 10-20 t/ha of earthworm casts each year.

### Soil Temperature

**Soil temperature** controls germination, root growth and microbial activity.

Maize germinates at about 10-12 °C, beans nearer 15 °C, so early sowing into cold soil rots seed.

Warm soil speeds the release of nitrogen from organic matter.

Dark, wet, compacted soils warm more slowly than dry, loose ones.

### Heat, Frost and Protection

Surface temperature can reach 50-60 °C in full sun, scorching seedlings and killing shallow roots.

**Mulch** lowers surface temperature by several degrees, conserves water and suppresses weeds.

Shade nets or leafy branches protect transplants until roots establish.

**Frost** below 0 °C forms ice crystals that rupture cells, and it can heave seedlings out of the ground.

Frost risk is reduced by choosing sheltered sites, delaying planting, covering seedlings and irrigating before a frost.

### The Soil Solution

**Soil solution** is the water film around particles, containing dissolved ions.

Roots absorb nitrate, potassium, calcium and magnesium from this film.

As ions are taken up, more are released from clay surfaces to replace them.

### Cation Exchange

**Cation exchange capacity** is the ability of clay and humus to hold positively charged ions.

Negatively charged surfaces attract Ca²⁺, Mg²⁺, K⁺ and NH₄⁺, keeping them against leaching.

Nitrate and sulphate are anions and are not held, so they leach easily.

Lime adds calcium to the exchange complex and displaces hydrogen, raising pH.

### Worked Example: Mulch and Water Saving

A bare seedbed loses about 6 mm of water a day by evaporation.

A 5 cm organic mulch can cut that loss by roughly 70%, leaving about 1.8 mm a day.

Over ten days the saving is (6.0 − 1.8) × 10 = 42 mm, which is nearly half the water needed to establish a maize crop.

Mulch also keeps the surface cooler, so seedlings suffer less heat stress.

### Worked Example: Organic Matter in a Field

A soil with 2% organic matter in the top 20 cm contains 2% of 2600 t, which is 52 t/ha.

If cultivation oxidises 2% of that each year, the loss is about 1 t/ha/year.

Replacing it needs roughly 10 t/ha of manure or several tonnes of compost, which shows why organic matter is hard to rebuild.

### Field Signs of Soil Health

A spade of good topsoil may hold five to ten earthworms and many fine roots.

Dark colour, an earthy smell and crumbly aggregates all point to active organic matter.

Pale, compacted soil with few roots and no worms should be tested for acidity, compaction or waterlogging.`,
      groups: [
        {
          subTitle: "Constituents and Pores",
          bullets: [
            "**Mineral matter:** about 45% of topsoil volume; sand, silt and clay.",
            "**Organic matter:** about 5%; residues, humus and living organisms.",
            "**Air and water:** share about 50% of the volume in the pore space.",
            "**Pore space:** large pores drain and hold air, small pores hold available water.",
          ],
        },
        {
          subTitle: "Soil Water Forms",
          bullets: [
            "**Gravitational:** drains freely after rain and can leach nutrients.",
            "**Capillary:** held in small pores and available to roots.",
            "**Hygroscopic:** bound to particles and unavailable to plants.",
            "**Field capacity:** water remaining after drainage.",
            "**Wilting point:** water remaining when plants can no longer extract any.",
          ],
        },
        {
          subTitle: "Temperature Management",
          bullets: [
            "**Germination:** each crop has a minimum soil temperature, such as 10-12 °C for maize.",
            "**Heat:** bare surfaces can exceed 50 °C and kill seedlings; shade or mulch them.",
            "**Frost:** ice ruptures cells and heaves seedlings; delay planting or cover crops.",
            "**Mulch:** cools the surface, conserves water and moderates temperature swings.",
            "**Aspect and colour:** dark, damp soils warm slowly; sheltered sites frost less.",
          ],
        },
      ],
      examinerTips: [
        "Learn the four constituents with approximate volume percentages.",
        "Define available water as the difference between field capacity and wilting point.",
        "Name each organism with its role, such as Rhizobium for fixation or fungi for mycorrhizae.",
        "Link soil temperature to a named crop process such as germination or nutrient release.",
        "Separate heat damage from frost damage: one is scorching, the other is ice in cells.",
      ],
      commonMistakes: [
        "Giving air and water fixed 25% shares regardless of rainfall; they trade places.",
        "Calling gravitational water available to plants; it drains away.",
        "Believing earthworms damage soil; their casts and burrows improve it.",
        "Thinking frost only damages leaves; it also kills roots and heaves seedlings.",
        "Assuming mulch always warms soil; organic mulch usually cools it.",
      ],
      recap: [
        "State the approximate volume percentages of mineral matter, organic matter, air and water in a fertile topsoil. [4]",
        "Distinguish gravitational, capillary and hygroscopic water. [3]",
        "Explain the role of two named soil organisms. [2]",
        "Describe how frost damages seedlings and state two ways to reduce the risk. [4]",
        "A bare soil loses 5 mm of water a day and a mulch cuts this by 60%. Calculate the daily saving. [2]",
      ],
    },
    {
      title: "Soil Fertility and the Nitrogen Cycle",
      body: `### The Major Nutrients

**Nitrogen (N)** builds proteins, chlorophyll and enzymes, and it drives leaf and stem growth.

**Phosphorus (P)** supports root development, energy transfer and flowering.

**Potassium (K)** regulates water movement and stomata, and improves disease resistance and tuber quality.

**Calcium (Ca)** strengthens cell walls and root tips.

**Magnesium (Mg)** sits at the centre of every chlorophyll molecule.

**Sulphur (S)** is needed for proteins, enzymes and the quality of oil crops.

### Deficiency Signs

**Nitrogen:** pale yellow older leaves, stunted growth and thin stems.

**Phosphorus:** dark green or purple leaves, poor roots and delayed flowering.

**Potassium:** scorched leaf margins, weak stems and small tubers.

**Calcium:** distorted new leaves and blossom-end rot in tomatoes.

**Magnesium:** interveinal yellowing of older leaves.

**Sulphur:** uniform yellowing of young leaves, which separates it from nitrogen.

### Soil Sampling and pH

Sample in a **W pattern** across the field, taking 10-20 cores from 0-15 or 0-20 cm.

Avoid gateways, manure heaps, tracks and wet spots, which are not representative.

Mix the cores, quarter the heap and send about 500 g to a laboratory.

**pH** is measured in water or dilute calcium chloride, and most crops prefer 6.0-7.0.

pH controls nutrient availability: phosphorus is locked up below pH 5.5 and above 7.5.

### The Nitrogen Cycle

**Nitrogen fixation** converts atmospheric N₂ into ammonia: *Rhizobium* bacteria in legume nodules do this, and free-living bacteria such as *Azotobacter* also fix nitrogen.

**Ammonification** releases ammonium from dead organic matter and wastes as decomposers break them down.

**Nitrification** oxidises ammonium to nitrite by *Nitrosomonas*, then to nitrate by *Nitrobacter*.

**Assimilation** is the uptake of ammonium and nitrate by plants and microbes.

**Leaching** carries nitrate, which is not held by negatively charged clay, down through the profile.

**Denitrification** reduces nitrate to nitrogen gas by bacteria in waterlogged, anaerobic soil.

**Volatilisation** loses ammonia gas from surface-applied urea or manure, and harvest removes nitrogen in the grain.

### Why the Cycle Matters

Nitrate is the form most crops absorb, and it is also the form most easily lost.

Leaching wastes money and pollutes wells and streams.

Denitrification in waterlogged soil both wastes nitrogen and releases a greenhouse gas.

A good rotation keeps nitrogen cycling within the field instead of leaking from it.

### Legumes and Organic Fertilisers

**Legumes** such as beans, cowpea, groundnut and mucuna form nodules with *Rhizobium* and can fix 50-200 kg N/ha.

Inoculating seed with the right strain helps where the bacterium is absent.

**Manure** at 10-20 t/ha supplies nutrients and organic matter, and average cattle manure is about 0.5% N.

**Compost** at 1-2% N is more stable and safer, but both release nutrients slowly.

Organic matter improves structure, water-holding capacity and the activity of soil life.

### Inorganic Fertilisers

**Single superphosphate** is about 18-20% P₂O₅ plus calcium and sulphur, and it suits acid soils and root crops.

**Potassium chloride**, or muriate of potash, is about 60% K₂O and is used on potatoes, bananas and vegetables.

**Compound NPK 20:10:10** supplies all three major nutrients in one granule.

**Urea** is 46% N and is best incorporated or applied before rain to limit volatilisation.

### Worked Example: Fertiliser Rates

A recommendation is 60 kg N, 30 kg P₂O₅ and 30 kg K₂O per hectare.

With NPK 20:10:10, the nitrogen rate sets the product: 60 ÷ 0.20 = 300 kg/ha.

That 300 kg also supplies 300 × 0.10 = 30 kg P₂O₅ and 30 kg K₂O, so the mix matches the recommendation.

At $0.55/kg the fertiliser costs 300 × 0.55 = $165/ha.

### Worked Example: Single Superphosphate and Lime

To supply 30 kg P₂O₅ from single superphosphate at 18% P₂O₅, apply 30 ÷ 0.18 = 167 kg/ha.

That also supplies about 18 kg S and 33 kg Ca per hectare.

If the soil test shows pH 5.2 and the target is 6.2, the laboratory may recommend 2 t/ha of agricultural lime.

Lime is incorporated two to three months before planting, and over-liming can lock up boron, zinc and manganese.

### Liming and Fertiliser Practice

Lime raises pH, adds calcium and reduces aluminium and manganese toxicity.

It also improves rhizobium nodulation, so beans and other legumes respond well to it.

Ammonium-based fertilisers acidify soil over time, which is why regular liming may be needed.

Apply fertiliser in a band near the roots, split nitrogen into two doses, and keep granules off the seed.`,
      figure: fertilityArt,
      groups: [
        {
          subTitle: "Nutrients and Their Signs",
          bullets: [
            "**Nitrogen:** proteins and chlorophyll; older leaves pale, growth stunted.",
            "**Phosphorus:** roots, energy and flowers; leaves dark or purple, flowering delayed.",
            "**Potassium:** water regulation and quality; leaf margins scorch, stems weak.",
            "**Calcium and magnesium:** cell walls and chlorophyll; tip burn, interveinal yellowing.",
            "**Sulphur:** proteins and enzymes; young leaves yellow uniformly.",
          ],
        },
        {
          subTitle: "Nitrogen Cycle Stages",
          bullets: [
            "**Fixation:** N₂ to ammonia by Rhizobium and free-living bacteria.",
            "**Ammonification:** organic N to ammonium by decomposers.",
            "**Nitrification:** ammonium to nitrite to nitrate by Nitrosomonas and Nitrobacter.",
            "**Assimilation:** nitrate and ammonium taken up by plants and microbes.",
            "**Losses:** leaching of nitrate, denitrification in wet soil, volatilisation and harvest removal.",
          ],
        },
        {
          subTitle: "Fertilisers and Amendments",
          bullets: [
            "**Single superphosphate:** about 18-20% P₂O₅ with calcium and sulphur.",
            "**Potassium chloride:** about 60% K₂O, suited to tubers and fruit.",
            "**NPK 20:10:10:** compound fertiliser supplying N, P and K together.",
            "**Manure and compost:** slow-release nutrients plus organic matter.",
            "**Lime:** raises pH, supplies calcium and improves legume nodulation.",
          ],
        },
      ],
      examinerTips: [
        "Give the nutrient, its function and the deficiency symptom, all three, for full marks.",
        "Use leaf position to separate deficiencies: nitrogen and magnesium show on older leaves, sulphur on young ones.",
        "Draw the nitrogen cycle as arrows with a label on each arrow.",
        "Show fertiliser calculations with the product analysis as a decimal, such as 60 ÷ 0.20.",
        "Explain liming by pH and nutrient availability, not simply as adding calcium.",
      ],
      commonMistakes: [
        "Thinking all plants fix nitrogen; only legumes with the right Rhizobium strain do.",
        "Calling root nodules a disease; they are the site of nitrogen fixation.",
        "Saying lime lowers pH; it raises pH and reduces acidity.",
        "Believing more fertiliser always gives more yield; diminishing returns and toxicity apply.",
        "Confusing P with P₂O₅ or K with K₂O on a fertiliser bag.",
      ],
      recap: [
        "State the functions of nitrogen, phosphorus and potassium in plants. [3]",
        "Describe the symptoms of nitrogen and magnesium deficiency and explain how they differ. [4]",
        "Describe how to take a representative soil sample from a one-hectare field. [4]",
        "Calculate the mass of NPK 20:10:10 needed to supply 50 kg N/ha, and the P₂O₅ supplied. [3]",
        "Explain how waterlogging leads to nitrogen loss through denitrification. [3]",
      ],
    },
    {
      title: "Soil Erosion and Conservation",
      body: `### What Erosion Is

**Soil erosion** is the detachment and transport of soil by water, wind, gravity or tillage.

It differs from weathering, which breaks rock in place.

Erosion removes the most fertile layer first, so yield falls long before the field looks ruined.

### What Makes a Field Vulnerable

Erosion risk rises with slope length, steepness, rainfall intensity and the absence of cover.

A long slope gathers water, so a 100 m slope loses far more soil than a 20 m slope of the same angle.

Sandy soils detach easily, while clay soils seal and produce more surface runoff.

### Water Erosion

**Splash erosion** is the scattering of soil by raindrop impact.

**Sheet erosion** removes a thin, uniform layer that is easy to miss.

**Rill erosion** cuts small channels that can be crossed by a plough.

**Gully erosion** cuts deep channels that machinery cannot cross, as the artwork shows.

Water erosion is worst on bare, sloping, compacted land during intense storms.

### Wind and Gravity

**Wind erosion** lifts and carries dry, loose, fine particles from bare ground.

It is worst on flat, dry, sandy soils with little cover and strong prevailing winds.

**Landslides** and slips move saturated soil downslope in one mass.

Stream-bank collapse adds soil directly to rivers.

### Causes and Effects

Causes include deforestation, overgrazing, burning, continuous row cropping, ploughing up and down a slope and leaving land bare between harvests.

On site, erosion thins the topsoil, removes nutrients, seed and organic matter, and lowers yield.

Off site, sediment silts dams, blocks drains and smothers fish spawning beds.

Nutrients and pesticides attached to the sediment pollute water.

### Control: Cover, Slow, Trap

**Cover** the soil with mulch, cover crops or a growing crop to absorb raindrop energy.

**Slow** runoff with contour ploughing, terraces, strip cropping and grass waterways.

**Trap** sediment with check dams, retention ditches, filter strips and reforestation.

**Windbreaks** and shelterbelts reduce wind speed and trap drifting soil.

Controlled grazing and reduced tillage protect structure and keep residues on the surface.

### Structures and Their Jobs

**Contour bunds** are earth ridges across the slope that hold water until it infiltrates.

**Terraces** convert a slope into steps, cutting both gradient and slope length.

**Check dams** slow water in a gully and trap sediment behind them.

**Grass waterways** carry concentrated flow safely down a natural drainage line.

### Worked Example: Nutrient Loss

A field loses 20 t of topsoil per hectare in one season.

If the soil contains 0.10% nitrogen, the lost nitrogen is 20,000 × 0.0010 = 20 kg N/ha.

Replacing it with urea at 46% N needs 20 ÷ 0.46 = 43 kg urea/ha.

At $0.60/kg that is about $26/ha, before counting lost phosphorus, organic matter and future yield.

### Worked Example: Soil Depth

Soil of bulk density 1300 kg/m³ lost at 20 t/ha/year is 20,000 ÷ 1300 = 15.4 m³/ha.

Over 10,000 m² that is 1.5 mm of soil per year.

A 20 cm topsoil would take about 200 ÷ 1.5 = 130 years to disappear at that rate, which is within one farming lifetime.

### Worked Example: Bund Earthwork

A contour bund 100 m long has a cross-section of 0.20 m².

Volume = 0.20 × 100 = 20 m³ of soil.

At 1.5 person-days per m³, construction takes about 30 person-days, before grass is established on the bund.

That is a real cost, which is why community labour or a machine is often used.

### Keeping Conservation Working

Bunds and terraces fail when they are not maintained, especially after heavy rain.

Grassing the structures, repairing breaches and clearing waterways are seasonal jobs.

Conservation is a system, not a single structure, and it works best with good crop cover.

### Erosion and Yield

Yield falls before the field looks damaged, because the lost material is the humus-rich A horizon.

A loss of 1 cm of topsoil can cut maize yield by several percent on a shallow soil.

The loss is permanent on a shallow profile, because rebuilding soil takes centuries.

### Conservation on a Small Farm

Contour bunds, grass strips and trash lines cost labour but little cash.

Agroforestry and cover crops also produce fodder, fuel or food, so they earn while they protect.

Terraces are expensive and need maintenance, but they make steep land farmable.

The cheapest conservation is keeping the soil covered, which costs only the residue you did not burn.`,
      figure: erosionArt,
      groups: [
        {
          subTitle: "Types and Agents",
          bullets: [
            "**Splash:** raindrops scatter soil and seal the surface.",
            "**Sheet:** a thin layer is removed evenly and unnoticed.",
            "**Rill and gully:** concentrated flow cuts channels, shallow then deep.",
            "**Wind:** lifts fine, dry particles from bare, exposed ground.",
            "**Gravity:** landslides and bank collapse move saturated soil in bulk.",
          ],
        },
        {
          subTitle: "Main Causes",
          bullets: [
            "**Bare soil:** no cover means raindrops strike the surface directly.",
            "**Slope:** steeper and longer slopes accelerate runoff.",
            "**Poor structure:** compaction and low organic matter weaken aggregates.",
            "**Overgrazing and burning:** remove cover and trample structure.",
            "**Up-and-down cultivation:** creates channels that concentrate flow.",
          ],
        },
        {
          subTitle: "Prevention and Control",
          bullets: [
            "**Cover:** mulch, cover crops and residues protect the surface.",
            "**Contour and terrace:** shorten slope length and slow runoff.",
            "**Strip cropping and waterways:** trap soil and guide water safely.",
            "**Windbreaks:** reduce wind speed and catch drifting soil.",
            "**Grazing and tillage:** controlled stocking and reduced tillage protect structure.",
          ],
        },
      ],
      examinerTips: [
        "Name the erosion type and its agent, such as sheet erosion by water.",
        "Distinguish rills from gullies by depth and whether a plough can cross them.",
        "Organise control measures as cover, slow and trap, which prevents a random list.",
        "Give both on-site and off-site effects to show full understanding.",
        "Use a calculation to show that soil loss has a replacement cost.",
      ],
      commonMistakes: [
        "Thinking erosion happens only on steep land; wind erodes flat, dry fields too.",
        "Confusing weathering with erosion; only erosion involves transport.",
        "Claiming terracing increases erosion; it reduces slope length and runoff speed.",
        "Listing only on-site damage and ignoring silted dams and polluted water.",
        "Treating mulch as a fertiliser; its main role here is cover and temperature control.",
      ],
      recap: [
        "Define soil erosion and name its four agents. [4]",
        "Distinguish sheet, rill and gully erosion. [3]",
        "Explain how overgrazing leads to erosion. [2]",
        "Describe three methods of erosion control on a sloping field. [3]",
        "A field loses 15 t/ha of soil containing 0.08% N. Calculate the nitrogen lost. [2]",
      ],
    },
    {
      title: "Drainage, Irrigation and the Water Cycle",
      body: `### Drainage Is About Gravity

**Drainage** is the removal of **gravitational water** from the root zone.

It does not remove capillary water, which plants need.

Waterlogged soil has no air-filled pores, so roots cannot respire and soil organisms die or switch to anaerobic respiration.

### Effects of Poor Drainage

Roots need oxygen; without it, respiration stops and roots die back.

Anaerobic bacteria produce ethylene and hydrogen sulphide, which damage roots.

Denitrification loses nitrate as nitrogen gas, and iron becomes soluble and toxic.

Crops yellow, wilt in bright sun and become prone to root rot.

Traffic and tillage on wet soil cause compaction that outlasts the wet season.

### Drainage Methods

**Open ditches** carry water away from the lowest part of the field and are cheap to dig and maintain.

**Raised beds** and **cambered beds** lift roots above the water table.

**Subsurface tile drains** of plastic or clay pipes at 0.8-1.2 m depth collect water below the surface.

**Mole drains** are unlined channels pulled through clay subsoil and last a few years.

**Pumps** remove water where gravity flow is impossible.

### Worked Example: Ditch Capacity

A ditch has a cross-section of 0.50 m² and water flows at 0.30 m/s.

Discharge = area × velocity = 0.50 × 0.30 = 0.15 m³/s, which is 150 litres per second.

That is enough to drain 15 mm of rain from one hectare, 150 m³, in about 1000 seconds or 17 minutes.

Field drainage is usually limited by how fast water enters the ditch, not by the ditch itself.

### Leaching

**Leaching** is the downward movement of dissolved nutrients with drainage water.

Nitrate, sulphate and potassium move most readily; phosphate and most micronutrients barely move.

Sandy soils leach more than clay loams because they hold less water and have fewer exchange sites.

Drainage is therefore a balance: enough to aerate the root zone, not so much that nutrients are washed away.

### Why Irrigation Is Needed

**Irrigation** supplies water when rainfall fails to meet crop demand.

Even in a wet climate, short dry spells at flowering can cut yield sharply.

Irrigation also helps germination, establishment, frost protection and the application of fertiliser.

### Irrigation Methods

**Furrow irrigation** runs water along channels between rows; it is cheap but uneven and can erode.

**Basin irrigation** floods level basins, suiting rice and orchards.

**Sprinkler irrigation** sprays water over the canopy; it is uniform on uneven land but can spread disease and scorch leaves in strong sun.

**Drip irrigation** delivers water to each root zone through emitters, saving 30-50% of water and reducing foliar disease.

Drip costs more to install and needs filtration and maintenance to stop emitters blocking.

### Effects on Yield and Quality

Timely irrigation raises yield by preventing water stress at flowering and grain filling.

Drip and furrow keep foliage dry, which reduces fungal disease and improves fruit appearance.

Over-irrigation leaches nutrients, waterlogs the root zone and dilutes sugar in fruit.

Saline irrigation water can scorch leaves and accumulate salt in the soil.

### Scheduling Irrigation

Apply water when the soil reaches about half of its available water, not when the crop wilts.

A tensiometer or a simple hand test of the soil can guide the timing.

Irrigating in the evening reduces evaporation loss and wind drift.

### Irrigation Water Quality

Saline water raises soil salinity, especially where drainage is poor.

Water with high sodium disperses clay and destroys structure.

Test irrigation water before investing in a system, because poor water can ruin a field faster than drought.

### Worked Example: Irrigation Requirement

Crop water use is 5 mm/day and rainfall supplies 1 mm/day, so the deficit is 4 mm/day.

One hectare needs 10,000 × 0.004 = 40 m³ per day.

A drip system at 90% efficiency must supply 40 ÷ 0.90 = 44 m³/day.

At 4 litres per hour per emitter, 10,000 emitters run for 44,000 ÷ 40,000 = 1.1 hours a day.

### The Water Cycle and Groundwater

**Evaporation** from soil and water surfaces and **transpiration** from leaves return water vapour to the atmosphere.

**Condensation** forms clouds, and **precipitation** returns water as rain, hail or snow.

**Infiltration** soaks water into the soil; **percolation** moves it down to the **water table**.

**Groundwater** is stored in aquifers and moves slowly, feeding springs, wells and rivers.

**Runoff** flows over the surface to streams, and **groundwater flow** discharges into rivers and the sea.

### Using Groundwater Sustainably

A well or borehole yields water only as fast as the aquifer is recharged.

Over-abstraction lowers the water table, dries shallow wells and can let salt water into coastal aquifers.

Recharge depends on infiltration, so paving and compaction reduce it.

Watershed protection, contour ditches and maintained vegetation keep recharge and stream flow steady.`,
      groups: [
        {
          subTitle: "Drainage Methods",
          bullets: [
            "**Open ditches:** cheap surface channels that carry water off the field.",
            "**Raised and cambered beds:** lift the root zone above the water table.",
            "**Tile drains:** buried pipes collect water below the surface.",
            "**Mole drains:** unlined channels pulled through clay, lasting a few years.",
            "**Pumps:** remove water where gravity drainage is impossible.",
          ],
        },
        {
          subTitle: "Irrigation Methods",
          bullets: [
            "**Furrow:** cheap surface flow between rows; uneven and can erode.",
            "**Basin:** flooded level basins for rice and orchards.",
            "**Sprinkler:** uniform on uneven land but wets foliage and drifts in wind.",
            "**Drip:** precise, water-saving and keeps foliage dry, but costly and prone to blockage.",
            "**Scheduling:** match application to crop demand and rainfall, not to a fixed habit.",
          ],
        },
        {
          subTitle: "Water Cycle Terms",
          bullets: [
            "**Evaporation and transpiration:** water vapour leaves soil and leaves.",
            "**Condensation and precipitation:** vapour forms clouds and returns as rain.",
            "**Infiltration and percolation:** water enters soil and moves to the water table.",
            "**Groundwater and aquifer:** stored water and the rock that holds it.",
            "**Runoff and groundwater flow:** water returns to streams by surface and underground routes.",
          ],
        },
      ],
      examinerTips: [
        "Define drainage as removal of gravitational water, not removal of all water.",
        "Link poor drainage to oxygen, respiration and denitrification in that order.",
        "Compare irrigation methods by cost, uniformity, water saving and effect on foliage.",
        "Learn the water cycle as a labelled loop, including infiltration, percolation and groundwater.",
        "Use efficiency in calculations: required water = deficit ÷ efficiency.",
      ],
      commonMistakes: [
        "Confusing drainage with irrigation; one removes excess water, the other adds it.",
        "Saying drip irrigation is always best, ignoring cost, filtration and blockage.",
        "Thinking waterlogging happens only after rain; over-irrigation and poor drainage do it too.",
        "Treating groundwater as unlimited; recharge limits what can be pumped.",
        "Forgetting that drainage also leaches nutrients, so more is not always better.",
      ],
      recap: [
        "Define drainage and explain why waterlogged roots cannot respire. [3]",
        "Describe two methods of draining a waterlogged field. [2]",
        "Calculate the discharge of a ditch with cross-section 0.40 m² and velocity 0.25 m/s. [2]",
        "Compare furrow, sprinkler and drip irrigation for water use and disease risk. [4]",
        "Explain how over-abstraction of groundwater affects the water table and wells. [3]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_2: Chapter = chapterTwo;
