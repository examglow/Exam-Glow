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

const swardArt = artPanel([
  {
    src: "ag08-pasture-sward.webp",
    alt: "A mixed sward of leafy grass and low-growing desmodium grazed by cattle, with seed heads on the taller grass",
    caption: "Grass for bulk, legume for protein",
  },
  {
    src: "ag08-bush-encroachment.webp",
    alt: "Thorn bushes spreading across open grassland, with grass only in the gaps between thickets",
    caption: "Bush takes the area grass needs",
  },
]);

const establishArt = artPanel([
  {
    src: "ag08-pasture-establishment.webp",
    alt: "Grass seed being sown by hand into a finely prepared, cleared seedbed with a rake covering it lightly",
    caption: "Fine, firm seedbed at the start of the rains",
  },
  {
    src: "ag08-rotational-paddocks.webp",
    alt: "Aerial view of a fenced farm divided into six paddocks, cattle grazing one while the others stand rested with taller grass",
    caption: "Graze one, rest five",
  },
]);

const stockArt = artPanel([
  {
    src: "ag08-overstocking.webp",
    alt: "Bare eroded ground with deep cattle tracks and thin cattle beside a neighbouring paddock of tall, well-covered grass",
    caption: "Overstocking removes cover, then soil",
  },
  {
    src: "ag08-zero-grazing.webp",
    alt: "Freshly cut napier grass being carried in a basket and fed to stall-housed cattle in a shed",
    caption: "Cut and carry: feed brought to the cow",
  },
]);

const chapterEight: Chapter = {
  number: 8,
  title: "Pasture Management",
  intro: `Pasture is the cheapest feed on the farm, and the most easily ruined.\n\nA sward is a crop: it must be established, rested, grazed at the right height and stocked at a rate the land can carry.\n\nThis chapter separates the plants in the sward, then shows how to establish an improved ley and how to divide it into **paddocks**.\n\nIt then puts numbers on **stocking rate** and **carrying capacity**, because overstocking is a calculation error before it is an animal welfare problem.\n\nFinally it deals honestly with **bush**, **fire** and **zero grazing**, the tools a farmer uses when land is short or rough.`,
  subheadings: [
    {
      title: "Grazing Land Vegetation",
      body: `### Pasture Is a Crop

Pasture is not leftover land; it is a crop that is harvested by the animal.

It needs establishment, fertiliser, weed control, rest and a stocking rate.

Its yield is measured as **dry matter (DM)**, because fresh grass is mostly water.

### Grasses

**Napier grass** is a tall, high-yielding perennial cut for zero grazing.

**Rhodes grass** spreads by stolons, tolerates grazing and dry weather, and suits larger leys.

**Guinea grass**, **star grass**, **kikuyu**, **setaria**, **signal grass** and **buffel grass** fill other niches.

Grasses supply bulk energy and fibre.

Their CP is highest in young leafy growth, at 10-14%, and falls to 4-6% once they flower and stem.

Grazing or cutting at the right height keeps them leafy and growing.

### Legumes

**Desmodium**, **lucerne**, **centro**, **stylo**, **siratro**, **white clover** and **lablab** are legumes.

They form nodules with **Rhizobium** bacteria and fix nitrogen, often 50-200 kg N/ha a year.

Their CP is 16-24%, so a legume lifts the protein of the whole sward.

Legumes need phosphorus and a pH near 6, and they do not tolerate waterlogging.

In a mixed sward, aim for 30-40% legume by ground cover.

Some legumes, such as lucerne and clover, can cause **bloat** if hungry stock graze lush wet growth.

### Bush and Browsing

**Browse** is the leaf and twig of shrubs and trees.

Goats and camels browse acacia, leucaena, calliandra, sesbania, moringa and prosopis.

Browse stays green into the dry season and often carries 15-25% CP.

Tannins in browse reduce bloat and can suppress worms, but too much reduces intake.

Lopping branches supplies fodder without killing the tree.

Bush becomes a problem when it replaces grass over large areas.

### What Makes a Good Sward

A good pasture has complete ground cover to protect the soil.

It is leafy, palatable, persistent and able to recover after grazing.

It contains a legume, resists drought and carries few weeds.

Ground cover is the best single indicator.

Bare patches mean overgrazing, poor establishment or compaction.

Seed heads everywhere mean the grass is too mature and the quality has already fallen.

### Worked Example: Sward Composition and Protein

A 1 ha pasture is 70% grass yielding 7 t DM/ha and 30% legume yielding 5 t DM/ha.

Grass DM = 0.70 × 7 = 4.9 t.

Legume DM = 0.30 × 5 = 1.5 t.

Total = 4.9 + 1.5 = 6.4 t DM.

Grass at 8% CP supplies 4,900 × 0.08 = 392 kg CP.

Legume at 18% CP supplies 1,500 × 0.18 = 270 kg CP.

Total CP = 392 + 270 = 662 kg.

Sward CP = 662 ÷ 6,400 × 100 = 10.3%.

Pure grass at 8% CP would supply only 560 kg CP over 7 t.

The legume raises both the yield and the protein.

### Reading the Sward

Walk a diagonal and stop every ten paces.

Record grass height, legume percentage, bare ground and weeds.

A sward grazed to 5 cm has lost its reserves; one at 30 cm is rank and stemmy.

### Seasonal Growth

Growth follows rain, so the same pasture carries more stock in the wet season.

In the dry season, growth slows, protein falls and the stocking rate must fall with it.

Plan for the dry months by making hay or silage, or by reducing numbers.

### Local Examples

A napier-desmodium plot on a smallholding can yield 30-40 t fresh/ha a year under good management.

A Rhodes grass ley with white clover suits a larger dairy farm.

Communal rangeland relies on natural grasses and browse, with goats using the bush.

The choice depends on rainfall, soil, labour and whether the feed will be grazed or carried.

### Weeds Tell a Story

**Star grass** can be useful, but **sodom apple**, **lantana**, **blackjack** and **thorn apple** are not.

Weeds take water, light and nutrients from the sown species.

Their presence usually points to overgrazing, low fertility or a thin sward.

A dense, well-fed sward is the best weed control.

### Soil Cover Matters

A pasture protects the soil as well as feeding stock.

Leaves break the fall of rain, roots hold the surface and organic matter feeds the soil.

Bare ground seals under raindrops, so water runs off instead of soaking in.

The same rain that grows grass can wash a bare paddock away.

Good cover also keeps the soil cooler and conserves moisture for the dry season.

Grazing management is therefore soil management.`,
      figure: swardArt,
      groups: [
        {
          subTitle: "Grasses to Name",
          bullets: [
            "**Napier grass:** tall perennial, heavy yields, cut and carried or zero grazed.",
            "**Rhodes grass:** stoloniferous, grazing tolerant, good for leys and hay.",
            "**Guinea and star grass:** vigorous tropical grasses for higher rainfall.",
            "**Kikuyu and setaria:** leafy, palatable grasses where moisture allows.",
            "**Buffel grass:** drought tolerant for drier rangeland.",
          ],
        },
        {
          subTitle: "Legumes and Browse",
          bullets: [
            "**Desmodium:** creeping tropical legume, 16-20% CP, suits napier and Rhodes mixtures.",
            "**Lucerne:** deep-rooted perennial legume, 16-20% CP, needs lime and good drainage.",
            "**Centro, stylo and siratro:** tropical legumes for grazing leys.",
            "**Leucaena and calliandra:** browse shrubs for goats, cut and fed fresh.",
            "**Acacia and prosopis:** dryland browse, useful in drought but capable of encroachment.",
          ],
        },
        {
          subTitle: "Judging a Sward",
          bullets: [
            "**Ground cover:** bare soil means loss of feed and risk of erosion.",
            "**Leafiness:** leafy grass is young and digestible; stem and seed head mean low quality.",
            "**Legume content:** 30-40% legume raises protein and fixes nitrogen.",
            "**Height:** graze at 15-25 cm and rest before it drops below 8-10 cm.",
            "**Weeds and bush:** increasing weeds signal overgrazing or poor fertility.",
          ],
        },
      ],
      examinerTips: [
        "Name grasses and legumes as examples, because a general answer about grass earns little.",
        "State that legumes fix nitrogen through Rhizobium nodules.",
        "Link leafiness to protein and digestibility, and stemminess to fibre and low intake.",
        "Quote a grazing height and a rest period rather than saying graze properly.",
        "Explain bush encroachment as competition for light, water and space.",
      ],
      commonMistakes: [
        "Calling all pasture grass; a legume component is part of the answer.",
        "Saying legumes fertilise the soil without naming nitrogen fixation.",
        "Grazing napier or Rhodes too short and then blaming the species for poor regrowth.",
        "Ignoring browse, which is important for goats and in dry areas.",
        "Treating seed heads as a sign of a healthy sward; they signal maturity and lower quality.",
      ],
      recap: [
        "Name three grasses and three legumes suitable for grazing in East Africa. [6]",
        "Explain how legumes improve a pasture. [3]",
        "Describe how you would judge the quality of a pasture by walking across it. [4]",
        "A sward is 60% grass at 8 t DM/ha and 40% legume at 4 t DM/ha. Calculate the total DM produced. [3]",
        "Explain why browse is important for goats in the dry season. [3]",
      ],
    },
    {
      title: "Establishing Improved Pastures",
      body: `### Site and Soil

Choose land with rainfall, depth and drainage suited to the species.

Test the soil for pH, phosphorus and potassium before spending on seed.

Most grasses and legumes do best at pH 5.5-6.5; lucerne needs 6.5-7.0.

### Clearing and Seedbed

Clear bush, stumps and old grass, because they compete for water and light.

Plough, then harrow to break clods and level the surface.

A good seedbed is fine, firm and free of weeds.

Firm soil keeps moisture near the seed.

Sow into dust rather than mud; if the soil sticks to your boot, wait.

### Planting Material

Grasses can be sown as seed or planted as vegetative material.

Napier is planted from 3-bud **setts** or splits, because seed is scarce and uneven.

Rhodes, guinea and signal grasses are sown from seed.

Legumes are sown from seed, and the seed is **inoculated** with the right Rhizobium.

### Seed Rate and Sowing

Rhodes grass: 8-12 kg/ha.

Desmodium: 3-5 kg/ha.

Lucerne: 15-20 kg/ha.

Napier: 10,000-15,000 setts/ha, about 1 m between rows and 0.75 m within the row.

Sow at the start of the rains, when the soil is moist and a false start is less likely.

Drill or broadcast, cover lightly to 1-2 cm, then roll.

Legume seed is small, so shallow sowing and good seed-soil contact matter.

### Worked Example: Seed and Fertiliser for 2 ha

Rhodes seed at 10 kg/ha: 2 × 10 = 20 kg at KSh 900/kg = KSh 18,000.

Desmodium at 4 kg/ha: 2 × 4 = 8 kg at KSh 1,200/kg = KSh 9,600.

DAP at 150 kg/ha: 2 × 150 = 300 kg at KSh 75/kg = KSh 22,500.

Seed and fertiliser = 18,000 + 9,600 + 22,500 = KSh 50,100.

Add land preparation and labour of KSh 20,000, giving KSh 70,100, or KSh 35,050/ha.

### Sowing Method

Broadcasting is fast but uneven, and seed sits at different depths.

Drilling in rows uses less seed and makes weeding easier.

Mix small legume seed with sand or sawdust to spread it evenly.

Roll after sowing, or run stock over the field lightly, to press the seed into the soil.

### Aftercare

Weed the new ley in the first 6-8 weeks, because seedlings are weak.

Top-dress with nitrogen after each cut or grazing, and keep phosphorus up for the legume.

Do not graze until the grass is 20-25 cm and the roots hold the soil, usually 3-4 months.

### Why Establishment Fails

Failure usually comes from a poor seedbed, the wrong season, acid soil, low phosphorus or weeds.

Sowing too deep kills small seed.

Grazing too early removes the leaves the plant needs to build roots.

Termites, ants and birds can also take seed before it germinates.

### The Payback

An improved ley can yield 8 t DM/ha against 3 t from unimproved pasture.

That extra 5 t DM feeds about one more cow per hectare.

The seed and fertiliser cost is recovered in two to three years on a dairy farm.

### Fencing at Establishment

Plan the paddocks before sowing, not after.

Put the fence lines, water points and laneways on the map while the land is still bare.

A pasture that cannot be divided cannot be rotationally grazed.

### Seed Quality and Treatment

Use certified seed of a named variety, because cheap seed is often dirty or dead.

Check the germination percentage and adjust the seed rate: 80% germination means 100 ÷ 0.8 = 1.25 times the seed.

Treat seed against soil pests where recommended, and store it cool and dry.

Legume seed is scarified or treated to break hard seed coats before sowing.

### Planting Napier Setts

Napier is planted from mature canes cut into setts with three buds.

Open furrows 1 m apart and place setts 0.75 m apart, covered with 5-8 cm of soil.

Plant at the start of the rains, when the soil is wet to depth.

Firm the soil around each sett and keep the plot weed-free until it tillers.

A well-planted napier plot lasts several years and can be cut 4-6 times a season.

### Choosing Species

Match the species to rainfall, soil depth, drainage and grazing method.

Rhodes grass suits grazing and hay; napier suits cutting; lucerne needs deep, limed soil.

A mix of one grass and one legume is more resilient than either alone.

Ask what the feed is for before choosing the seed.`,
      figure: establishArt,
      groups: [
        {
          subTitle: "Steps in Order",
          bullets: [
            "**Test:** soil pH, phosphorus and drainage before choosing species.",
            "**Clear:** remove bush, stumps, old grass and weeds.",
            "**Prepare:** plough, harrow and firm a fine, level seedbed.",
            "**Sow:** at the start of the rains, shallow and even, then roll.",
            "**Aftercare:** weed, fertilise and rest before the first grazing.",
          ],
        },
        {
          subTitle: "Seed Rates",
          bullets: [
            "**Rhodes grass:** 8-12 kg/ha of seed.",
            "**Desmodium:** 3-5 kg/ha, inoculated and sown shallow.",
            "**Lucerne:** 15-20 kg/ha on limed, well-drained soil.",
            "**Napier:** 10,000-15,000 three-bud setts per hectare.",
            "**Rule:** small seed goes shallow, large seed and setts go deeper.",
          ],
        },
        {
          subTitle: "Aftercare and Faults",
          bullets: [
            "**Weeds:** clean the ley in the first 6-8 weeks.",
            "**Fertiliser:** DAP at planting, nitrogen after each cut, phosphorus for legumes.",
            "**Rest:** no grazing until 20-25 cm of growth and firm roots.",
            "**Faults:** wrong season, acid soil, deep sowing, early grazing and termites.",
          ],
        },
      ],
      examinerTips: [
        "Put establishment in a logical order: site, soil test, clear, prepare, sow, roll, weed, rest.",
        "Give a seed rate with its unit and a reason for the depth.",
        "Explain inoculation as supplying the correct Rhizobium for the legume.",
        "Name the start of the rains as the sowing window and say why.",
        "For a costing question, show seed, fertiliser and labour separately before the total.",
      ],
      commonMistakes: [
        "Sowing legume seed deep like maize; small seed needs only 1-2 cm of cover.",
        "Skipping the soil test and then blaming the seed for a failed ley.",
        "Grazing the new ley as soon as it looks green.",
        "Forgetting to inoculate legume seed on a field with no history of that legume.",
        "Costing seed but not fertiliser, labour or land preparation.",
      ],
      recap: [
        "Describe the steps in establishing an improved pasture from cleared land. [6]",
        "State a suitable seed rate for Rhodes grass and for desmodium, with units. [2]",
        "Explain why legume seed is inoculated before sowing. [3]",
        "Calculate the seed cost for 3 ha of Rhodes grass at 10 kg/ha and KSh 900/kg. [2]",
        "Explain four reasons why a newly sown pasture may fail. [4]",
      ],
    },
    {
      title: "Grazing Systems and Paddocks",
      body: `### Continuous and Unenclosed Grazing

**Unenclosed grazing** has no fences, so stock roam communal land and choose their own feed.

**Continuous grazing** keeps animals on the same area all year, with no rest period.

Set stocking is simple and needs little labour, but the best plants are grazed first and the pasture never recovers.

**Enclosed grazing** uses fenced land, and the fence controls when and where stock graze.

### Rotational Grazing

**Rotational grazing** divides the farm into paddocks and moves the herd from one to the next.

Each paddock is grazed hard for a short period, then rested while the others are used.

The rest lets leaves rebuild, roots store reserves and pasture recover.

Rotational grazing also interrupts parasite cycles, because larvae are eaten or die before stock return.

It spreads manure and urine more evenly than continuous grazing.

### Worked Example: Paddock Cycle

A 10 ha farm is divided into 6 paddocks: 10 ÷ 6 = 1.67 ha each.

Graze each paddock for 5 days, then rest it for 25 days.

The cycle is 5 + 25 = 30 days, so each paddock is grazed 180 ÷ 30 = 6 times in a 180-day season.

A herd of 20 cows eats 20 × 11.25 = 225 kg DM a day.

Over 5 days that is 225 × 5 = 1,125 kg DM from one paddock.

The paddock can supply 1.67 × 8,000 × 0.60 = 8,016 kg DM in the season.

Visits possible = 8,016 ÷ 1,125 = 7.1, so 6 visits fit with a small reserve.

That reserve matters in a dry spell, when growth falls below the plan.

### Paddock Design

Put water and shade in or beside every paddock, or stock will camp in one corner.

A central water point and radial laneways shorten walking and save labour.

Gates should be wide enough for a vehicle and placed so animals move forward, not back.

Square paddocks waste less fence than long, narrow strips.

Electric fencing is cheaper to install and easy to move, but needs training and a good earth.

### Intensive and Extensive Systems

**Intensive** systems use high inputs on small areas: improved pasture, fertiliser, fencing, zero grazing.

**Extensive** systems use low inputs on large areas: rangeland, communal grazing, seasonal movement.

Intensive systems aim at high output per hectare.

Extensive systems aim at low cost per animal and accept lower output per hectare.

### Zero Grazing

**Zero grazing** cuts fodder and carries it to confined stock.

It suits small farms, steep land and high-value dairy cows.

Feed is cut from a napier plot, chopped and carried to a trough in the shed.

Manure is collected and returned to the fodder plot, so nutrients cycle.

Labour demand is high, and a cow that never walks needs careful feeding and health care.

### Other Systems

**Strip grazing** gives a fresh strip each day with a movable electric fence, which reduces waste.

**Creep grazing** lets calves reach young grass ahead of the cows through a gap the cows cannot pass.

**Deferred grazing** rests a paddock through the growing season and saves it for the dry months.

**Tethering** restricts an animal to a small area and is cheap but limits water and shade access.

**Mixed grazing** with cattle and goats uses grass and browse separately and can raise total output.

### Choosing a System

Match the system to land, labour, capital and rainfall.

A smallholder with two cows and little land does well with zero grazing.

A large ranch with unreliable rain needs extensive grazing and a flexible stocking rate.

A dairy farm with good roads and a reliable market can justify intensive paddocks and fertiliser.

No system works if the stocking rate is wrong.

### Water and Grazing Distribution

Cattle graze within about 300 m of water, so distant corners are under-used.

Move troughs or use a paddock water point to spread grazing pressure.

Salt blocks can pull stock into unused areas.

Shade also changes where animals spend the day and where they dung.

Good placement turns a whole paddock into grazeable land.

### Labour and Systems

Rotational grazing needs a stockman to move fences and check water.

Zero grazing needs labour every day for cutting, carrying and feeding.

Extensive grazing needs herders, especially where predators are present.

Choose a system the farm can staff reliably, not one that looks good on paper.`,
      groups: [
        {
          subTitle: "Systems Compared",
          bullets: [
            "**Continuous:** simple, no rest, selective grazing and gradual decline.",
            "**Rotational:** short graze, long rest, better recovery and parasite control.",
            "**Zero grazing:** cut and carry, high labour, high output per hectare.",
            "**Strip and creep:** small daily allocations that cut waste and protect young stock.",
            "**Extensive:** large area, low inputs, output limited by rainfall.",
          ],
        },
        {
          subTitle: "Rotation Rules",
          bullets: [
            "**Graze period:** 3-7 days, before regrowth is eaten again.",
            "**Rest period:** 25-35 days in the wet season, longer when dry.",
            "**Height:** put stock in at 20-25 cm and take them out at 8-10 cm.",
            "**Paddock number:** 4-8 paddocks give a workable balance of rest and fence cost.",
            "**Dry season:** reduce numbers or feed conserved fodder, do not shorten the rest.",
          ],
        },
        {
          subTitle: "Paddock Design",
          bullets: [
            "**Water:** reachable from every paddock, ideally central.",
            "**Laneways:** firm, wide and connected to the milking shed.",
            "**Gateways:** wide, well drained and positioned for forward movement.",
            "**Shape:** square paddocks use less fence per hectare.",
            "**Shade:** available, because heat reduces grazing time.",
          ],
        },
      ],
      examinerTips: [
        "Define rotational grazing by its short graze and planned rest, not just by moving animals.",
        "Give a rest period in days and explain what the rest allows the plant to rebuild.",
        "Calculate the cycle as graze days plus rest days, then divide the season by it.",
        "Compare systems on output per hectare, labour and capital, not only on yield.",
        "For zero grazing, give both the advantage and the labour or disease disadvantage.",
      ],
      commonMistakes: [
        "Calling any fenced farm rotational when the animals stay in one paddock.",
        "Resting paddocks for a week and expecting recovery.",
        "Grazing a paddock down to 2-3 cm and then lengthening the rest instead of reducing stock.",
        "Ignoring water placement, so cattle camp and foul one corner.",
        "Treating zero grazing as automatic profit when feed has to be carried by hand.",
      ],
      recap: [
        "Describe rotational grazing and explain two advantages over continuous grazing. [4]",
        "A farm of 12 ha is divided into 8 paddocks. Calculate the size of each paddock. [2]",
        "Paddocks are grazed for 4 days and rested for 28 days. Calculate the full cycle. [2]",
        "Compare intensive and extensive grazing systems. [4]",
        "Explain two advantages and two disadvantages of zero grazing. [4]",
      ],
    },
    {
      title: "Stocking Rate and Carrying Capacity",
      body: `### Definitions

**Stocking rate** is the number of animals on a unit of land, usually expressed as livestock units per hectare.

**Carrying capacity** is the maximum stocking rate the pasture can support year after year without declining.

**Stocking density** is the number of animals on the area they occupy at one moment, such as one paddock.

Stocking rate is a management decision; carrying capacity is a property of the land.

### Livestock Units

One **livestock unit (LU)** is a 450 kg mature cow.

A mature cow scores 1.0 LU, a heifer 0.7, a calf 0.4, and a sheep or goat 0.15.

A donkey scores about 0.7 LU and a camel about 1.5 LU.

Converting every class of stock to LU lets you compare a herd of cows with a flock of goats.

### Worked Example: Carrying Capacity

A pasture yields 8 t DM/ha in a 180-day grazing season.

Stock use only 60% of the growth; the rest must remain for roots and soil cover.

Usable DM = 8 × 0.60 = 4.8 t/ha.

A 450 kg cow eats 2.5% of body weight: 450 × 0.025 = 11.25 kg DM/day.

Over 180 days: 11.25 × 180 = 2,025 kg = 2.025 t.

Carrying capacity = 4.8 ÷ 2.025 = 2.37, or about 2.4 LU/ha.

### Worked Example: Year-Round Carrying Capacity

If the same 8 t DM/ha is the whole year's growth, the cow eats for 365 days.

Annual demand = 11.25 × 365 = 4,106 kg = 4.1 t.

Carrying capacity = 4.8 ÷ 4.1 = 1.17, or about 1.2 LU/ha.

The same pasture carries half the stock when it must feed them all year.

This is why the season length must be stated in every carrying-capacity answer.

### Worked Example: Comparing Stocking Rates

A 12 ha farm has 4.8 t DM/ha available, or 12 × 4.8 = 57.6 t for the season.

At 2.4 LU/ha, it carries 12 × 2.4 = 28.8 cows, needing 28.8 × 2.025 = 58.3 t.

That is a balanced plan, with a small deficit in a poor season.

At 4.0 LU/ha, it carries 48 cows, needing 48 × 2.025 = 97.2 t.

The deficit is 97.2 − 57.6 = 39.6 t, which would need 39.6 ÷ 4.8 = 8.25 ha of extra grazing.

At 1.2 LU/ha, it carries 14.4 cows, using 29.2 t and leaving 28.4 t to mature and be wasted.

### Worked Example: Goats on the Same Land

A 6 ha paddock at 2.4 LU/ha carries 6 × 2.4 = 14.4 LU.

At 0.15 LU per goat, the equivalent flock is 14.4 ÷ 0.15 = 96 goats.

Goats browse as well as graze, so the true figure may be higher on bush land.

On pure grass, goats are less efficient than cattle and the figure may be lower.

### Overstocking

Overstocking removes grass faster than it regrows.

The sward loses leaf area, roots weaken and bare ground appears.

Rain then compacts the surface, runs off and carries topsoil away.

Animals lose weight, milk falls, fertility drops and deaths rise in a dry spell.

Weeds and unpalatable grasses invade the bare patches, and the decline can take years to reverse.

### Understocking

Understocking wastes feed, because grass matures, lignifies and loses protein.

Rank grass shades out legumes and provides fuel and tick habitat.

Bush seedlings survive because nothing grazes or tramples them.

The farm looks green but carries less stock than it could.

### Adjusting the Stocking Rate

Reduce numbers before the pasture is damaged, not after.

Sell cull animals, lease extra land, buy conserved feed or move stock to a rested paddock.

In the long term, improve the pasture, conserve fodder and plan a dry-season reserve.

Zero grazing raises the effective carrying capacity, because fodder is carried from a separate plot to confined stock.

A flexible stocking rate is safer than a maximum one.

### Worked Example: Stocking Density in a Paddock

A herd of 40 cows enters a 2 ha paddock.

Stocking density = 40 ÷ 2 = 20 cows/ha, or 20 LU/ha.

That is much higher than the farm carrying capacity of 2.4 LU/ha.

It is safe only because the herd stays for 3 days and the paddock then rests.

Density is a short-term figure; carrying capacity is a long-term limit.

Confusing the two is a common error.

The same 40 cows on 17 ha would be at carrying capacity.

That is why the rotation, not the density, protects the pasture.`,
      figure: stockArt,
      groups: [
        {
          subTitle: "Definitions",
          bullets: [
            "**Stocking rate:** animals per hectare over a stated period.",
            "**Carrying capacity:** the sustainable maximum the land can carry.",
            "**Stocking density:** animals on the area occupied at one time.",
            "**Livestock unit:** 450 kg cow = 1.0 LU; goat = 0.15 LU.",
            "**Utilisation:** the share of grown DM that stock actually eat.",
          ],
        },
        {
          subTitle: "Overstocked Against Understocked",
          bullets: [
            "**Overstocked:** bare ground, erosion, thin stock, low milk and weed invasion.",
            "**Understocked:** rank grass, low protein, bush seedlings and wasted feed.",
            "**Balanced:** leafy sward, 50-70% utilisation and steady animal performance.",
            "**Warning sign:** grass below 8 cm before the rains end.",
          ],
        },
        {
          subTitle: "Adjusting Stock",
          bullets: [
            "**Short term:** sell culls, buy feed, lease grazing or use a reserve paddock.",
            "**Medium term:** conserve hay or silage from the surplus season.",
            "**Long term:** improve pasture, fertilise and subdivide.",
            "**Rule:** decide the number from the feed supply, not from the fence line.",
          ],
        },
      ],
      examinerTips: [
        "State the season length whenever you calculate carrying capacity.",
        "Convert all stock to livestock units before comparing different species.",
        "Use 60-70% utilisation and explain that the rest is needed for regrowth.",
        "Show the demand side and the supply side separately, then divide.",
        "For overstocking, link the sequence from bare ground to erosion to lower output.",
      ],
      commonMistakes: [
        "Using 100% of the pasture yield as available feed.",
        "Forgetting to multiply the daily intake by the number of days in the season.",
        "Comparing 20 goats with 20 cows without converting to livestock units.",
        "Confusing stocking rate with stocking density.",
        "Treating carrying capacity as fixed when rainfall and management change it.",
      ],
      recap: [
        "Define stocking rate and carrying capacity. [2]",
        "A pasture yields 9 t DM/ha, of which 60% is usable. A 450 kg cow eats 2.5% of body weight. Calculate the carrying capacity for a 180-day season. [4]",
        "Explain why the same pasture carries fewer animals all year than for six months. [2]",
        "Describe four effects of overstocking on a pasture and on the animals. [4]",
        "A 10 ha farm carries 30 cows. Convert this to livestock units per hectare. [2]",
      ],
    },
    {
      title: "Extensive Management, Bush and Fire",
      body: `### What Extensive Means

**Extensive management** uses large areas of natural or semi-natural grazing with few inputs.

Stock roam, herd numbers follow the rains and output per hectare is low.

Output per animal can still be good, because the animal chooses the best grass and browse.

Extensive systems are common on rangeland, communal land and large ranches.

### Bush Encroachment

**Bush encroachment** is the spread of shrubs and trees into grassland.

Acacia, prosopis, lantana and sickle bush can cover a pasture within a few years.

Each thicket replaces the grass beneath it, so the grazeable area shrinks.

Bush also hides predators, harbours ticks and blocks access for herding and vehicles.

### Why Bush Spreads

Overgrazing removes the grass that would compete with seedlings.

Suppressed fire lets young bushes survive to maturity.

Seed is carried by livestock, birds and water, and low fertility favours woody plants over grass.

Once established, thorn bush shades out grass and the change becomes self-reinforcing.

### Bush Control

**Mechanical control** uses axes, saws, bulldozers or root ploughs to remove the plants.

**Chemical control** applies the correct arboricide to cut stumps or leaves, following the label.

**Biological control** uses goats, which browse leaves and strip bark from young bushes.

**Fire** kills seedlings and small bushes when used at the right time.

**Grazing management** is the long-term answer: keep grass competitive and rest the land.

Control must be followed by reseeding, or the bare ground returns to bush.

### Fire: The Honest Account

Fire is a tool with two very different faces.

A **controlled early burn** before the rains, with cool conditions and a light fuel load, can remove moribund grass and tick habitat.

It stimulates fresh regrowth and kills young bush seedlings.

It must be planned, permitted and supervised, never lit on a windy afternoon.

A **late hot fire** is destructive.

It burns the pasture, the humus and the soil cover, and leaves black, exposed ground.

The next rains wash the ash and topsoil away, and the pasture recovers slowly or not at all.

It kills trees, wildlife, beneficial insects and soil organisms, and it can destroy fences and sheds.

### Controlled Burning: How

Burn early, when the grass is dry enough to carry a flame but the day is cool and calm.

Cut **firebreaks** 3-6 m wide around the block before lighting anything.

Burn against the wind, or back-burn from a break, so the fire moves slowly and stays controllable.

Keep labour, water and beaters on hand, and tell the neighbours.

Never burn on a steep slope, in peat, or where the fire could enter a homestead.

### Worked Example: Firebreak Area

A square block of 20 ha has a side of √200,000 = 447 m.

Its perimeter is 4 × 447 = 1,788 m.

A 3 m break around the perimeter covers 1,788 × 3 = 5,364 m².

That is 5,364 ÷ 10,000 = 0.54 ha, or about 2.7% of the block.

The break is a small cost against an escaped fire.

### Grazing in Extensive Systems

Move stock with the rains rather than keeping them on one area.

Use water points and salt to spread grazing pressure.

Rest a paddock through the growing season and save it for the dry months.

Keep numbers below carrying capacity, because drought is normal, not exceptional.

### Bush, Fire and Grass Together

Grass, bush and fire form a balance.

Too much grazing tips the balance to bush; too much fire removes the grass and leaves room for erosion.

The aim is a grassy, open savanna with scattered useful trees.

That balance is maintained by grazing, resting and, occasionally, a cool early burn.

### Prosopis: A Case Study

Prosopis was planted for shade and fuel in dry areas.

It spread through seed in dung and suckers from its roots.

Dense stands lower the water table and crowd out grass.

Control needs root cutting, repeated follow-up and grazing management.

Goats browse young pods and seedlings but cannot clear mature trees.

The lesson is to check a species before planting it widely.

### Rest and Deferred Grazing

Rest is not the same as abandoning a paddock.

Deferred grazing closes a paddock during the growing season and opens it in the dry months.

The grass is taller and stemmier, so it is best for dry cows or maintenance feeding.

Cut it for hay if the herd cannot use the rank growth.`,
      groups: [
        {
          subTitle: "Bush Control",
          bullets: [
            "**Mechanical:** clear with axes, saws or root ploughs; costly but immediate.",
            "**Chemical:** arboricide on cut stumps or foliage, applied to the label.",
            "**Biological:** goats browse young bushes and strip bark.",
            "**Fire:** kills seedlings and small bushes only when used early and carefully.",
            "**Follow-up:** reseed and manage grazing, or the bush returns.",
          ],
        },
        {
          subTitle: "Fire Use and Misuse",
          bullets: [
            "**Early cool burn:** removes moribund grass and tick habitat, stimulates regrowth.",
            "**Late hot fire:** destroys pasture, humus, soil cover and trees.",
            "**Firebreaks:** 3-6 m cleared strips before any burning.",
            "**Conditions:** cool, calm, permitted and supervised, with labour on hand.",
            "**Never:** burn on a windy day, a steep slope or near homesteads.",
          ],
        },
        {
          subTitle: "Extensive Rules",
          bullets: [
            "**Stocking:** stay below carrying capacity, especially in a dry year.",
            "**Movement:** follow the rains and spread pressure with water and salt.",
            "**Rest:** defer a paddock for the dry season.",
            "**Bush:** control before it seeds and reseed the cleared patch.",
            "**Records:** rainfall, stock numbers and condition tell you when to move.",
          ],
        },
      ],
      examinerTips: [
        "Give both sides of fire: the cool early burn as a tool and the hot late fire as damage.",
        "Name the mechanism by which fire removes ticks, rather than saying it cleans the land.",
        "Explain bush encroachment as competition plus lost grass competition.",
        "For control, give a method and a follow-up, because clearing alone fails.",
        "Calculate firebreak area from the perimeter, not from the block area.",
      ],
      commonMistakes: [
        "Treating fire as either always good or always bad.",
        "Burning late and hot, then expecting immediate regrowth.",
        "Clearing bush without reseeding or changing grazing.",
        "Ignoring firebreaks because the block is surrounded by a road.",
        "Keeping the same stocking rate through a drought.",
      ],
      recap: [
        "Define bush encroachment and explain two effects on a pasture. [3]",
        "Describe three methods of bush control and one follow-up for each. [6]",
        "Explain the difference between a controlled early burn and a late hot fire. [4]",
        "A square block of 25 ha needs a 4 m firebreak around its perimeter. Calculate the area cleared. [4]",
        "Explain why extensive systems need a flexible stocking rate. [3]",
      ],
    },
    {
      title: "Fencing, Utilisation and Zero Grazing",
      body: `### Why Fence

A fence turns land into a management tool.

It keeps stock off crops, out of wet areas and away from dangerous slopes.

It allows paddocks to be rested, animals to be separated by age or sex and new leys to establish.

It also controls theft and makes daily inspection easier.

Without a fence, a grazing plan is only an intention.

### Fence Types

A **live fence** of sisal, Kei apple or bougainvillea is cheap and long-lasting, but slow to establish.

**Barbed wire** is the standard cattle fence, with posts every 3-4 m and 4-5 strands.

**Chain link** is secure but expensive and suited to small areas such as pig pens.

**Electric fencing** is cheap, movable and effective after training, but depends on a good earth and regular checks.

Concrete or treated wooden posts last longer than untreated timber.

### Worked Example: Fence Cost

A 1 ha square has a perimeter of 4 × 100 = 400 m.

Posts every 3 m need 400 ÷ 3 = 134 posts.

At KSh 300 each, posts cost 134 × 300 = KSh 40,200.

Four strands need 4 × 400 = 1,600 m of wire at KSh 15/m = KSh 24,000.

Labour and staples add about KSh 15,000.

Total = 40,200 + 24,000 + 15,000 = KSh 79,200, or KSh 198/m.

That cost is repaid by better grazing control over several years.

### Utilisation

**Utilisation** is the proportion of the DM grown that is eaten by stock.

Grazing systems usually aim for 50-70%.

Below 50%, grass matures, trampling wastes feed and bush seedlings survive.

Above 70-80%, roots are depleted, regrowth slows and bare ground appears.

Utilisation is the bridge between pasture yield and animal production.

### Worked Example: Pasture Yield and Utilisation

One hectare of napier yields 40 t of fresh material at 20% DM.

DM = 40 × 0.20 = 8 t.

Cut-and-carry uses about 80%: 8 × 0.80 = 6.4 t DM.

A cow eats 11.25 kg DM/day, or 4.1 t a year.

Cow-days = 6,400 ÷ 11.25 = 569, which is 569 ÷ 365 = 1.56 cows per hectare.

For 20 cows, annual demand = 20 × 4.1 = 82 t DM.

Area needed = 82 ÷ 6.4 = 12.8 ha.

### Grazing Against Cutting

The same 8 t DM/ha grazed at 60% utilisation supplies 4.8 t.

That supports 4,800 ÷ 4,100 = 1.17 cows/ha.

Zero grazing at 80% utilisation supports 1.56 cows/ha, about 33% more.

The gain comes from less trampling, less fouling and controlled cutting height.

It is paid for in labour, fuel or hand-cutting.

### Zero Grazing in Practice

Establish a fodder plot close to the shed, usually napier with desmodium.

Cut at 1.0-1.5 m, leaving a 10-15 cm stubble so the plant regrows.

Chop to 2-5 cm, because long pieces are refused and wasted.

Feed 30-40 kg of fresh napier a day to a cow, alongside concentrate and water.

Return manure and slurry to the fodder plot, and keep the feeding trough clean.

One worker can manage about 5-10 zero-grazed cows, depending on mechanisation.

### Improving Utilisation

Subdivide the farm and rotate, so grass is grazed at the right height.

Put water and salt in the paddock being grazed, not in a permanent corner.

Mow or top rank patches, and make hay or silage from the surplus.

Use creep grazing for calves and strip grazing for accurate daily allocation.

Control weeds and fertilise, because a dense sward uses light and water better.

### Fencing and Rotation Together

Fencing alone only separates land; rotation is what rests it.

Subdivision into 4-8 paddocks, a water point in each and a 25-35 day rest turns the same grass into more feed.

The fence is the capital cost; the rest period is the management that earns the return.

A farm that fences but never rotates has paid for the fence and kept the old problem.

### Fence Maintenance

Walk the fence line every week and look for broken wires, loose posts and shorts.

Cut grass under the fence, because damp vegetation drains an electric fence.

Repair a gap the day it appears, before stock learn to walk through it.

Keep gates hung, latched and wide enough for the intended vehicle.

A fence is only as good as its weakest post.`,
      groups: [
        {
          subTitle: "Fencing",
          bullets: [
            "**Live fence:** sisal, Kei apple or bougainvillea; cheap, slow to establish.",
            "**Barbed wire:** 4-5 strands on posts every 3-4 m for cattle.",
            "**Electric:** cheap and movable, but needs training, earth and checks.",
            "**Cost:** calculate posts, wire and labour per metre before building.",
            "**Purpose:** rest paddocks, protect crops and separate classes of stock.",
          ],
        },
        {
          subTitle: "Utilisation",
          bullets: [
            "**Definition:** the share of grown DM that stock eat.",
            "**Target:** 50-70% in grazed systems, about 80% for cut-and-carry.",
            "**Too low:** rank grass, trampling, bush seedlings and wasted feed.",
            "**Too high:** depleted roots, bare ground and slow recovery.",
            "**Improve:** subdivide, rotate, place water well, conserve surplus.",
          ],
        },
        {
          subTitle: "Zero Grazing",
          bullets: [
            "**Fodder:** napier plus desmodium, cut at 1.0-1.5 m.",
            "**Feed:** 30-40 kg fresh a day per cow, chopped to 2-5 cm.",
            "**Labour:** one worker for about 5-10 cows.",
            "**Advantage:** higher utilisation, manure capture and no trampling.",
            "**Disadvantage:** high labour, feed transport and careful health control.",
          ],
        },
      ],
      examinerTips: [
        "Define utilisation as eaten DM divided by grown DM, then express it as a percentage.",
        "Use the 80% cut-and-carry figure against 60% grazing and explain the difference.",
        "For fence costing, show posts, wire and labour as separate lines.",
        "Explain zero grazing through utilisation and labour, not only through confinement.",
        "Link fencing to rest, because the fence itself does not grow more grass.",
      ],
      commonMistakes: [
        "Assuming a fence automatically improves pasture without a rotation.",
        "Using 100% utilisation and then wondering why the sward disappears.",
        "Cutting napier at ground level and destroying the regrowth points.",
        "Chopping fodder into long pieces that the cow refuses.",
        "Costing the fence but not the water and laneways that make it work.",
      ],
      recap: [
        "Explain three reasons for fencing a pasture. [3]",
        "A 2 ha square is fenced with posts every 4 m. Calculate the number of posts needed. [3]",
        "Define pasture utilisation and explain why 100% is not desirable. [3]",
        "One hectare yields 8 t DM and 75% is used. A cow eats 11.25 kg DM/day. Calculate the cow-days supported. [3]",
        "Describe zero grazing and explain why it can support more cows per hectare than grazing. [4]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_8: Chapter = chapterEight;
