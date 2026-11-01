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

const tillageArt = artPanel([
  {
    src: "ag04-clearing-ploughing.webp",
    alt: "A cleared field with stumps being lifted out, and an ox team pulling a mouldboard plough that turns a furrow of soil",
    caption: "From stumps to the first furrow",
  },
  {
    src: "ag04-seedbed-tilth.webp",
    alt: "A harrow breaking clods followed by a rake levelling the surface into a fine, even seedbed",
    caption: "Harrowing and raking down to a tilth",
  },
]);

const plantingArt = artPanel([
  {
    src: "ag04-sowing-spacing.webp",
    alt: "A farmer planting maize seed at measured intervals along a taut string line, with two seeds dropped into each shallow station",
    caption: "A string line keeps the spacing exact",
  },
  {
    src: "ag04-fertiliser-placement.webp",
    alt: "Compound fertiliser banded in the soil a few centimetres beside and below young maize plants, clear of the seed",
    caption: "Banded beside the seed, never touching it",
  },
]);

const harvestArt = artPanel([
  {
    src: "ag04-maize-maturity.webp",
    alt: "Maize plants at tasselling beside cobs with dry brown husks, one cob peeled back to show the black layer at the kernel base",
    caption: "Tasselling to the black layer",
  },
  {
    src: "ag04-maize-crib.webp",
    alt: "Harvested maize cobs drying in a raised, slatted crib with a roof and smooth rat guards on the posts",
    caption: "A raised crib dries cobs in moving air",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Crop Production",
  intro: `A crop is a plan carried out in soil, and every operation has a reason you can state in an exam.\n\n**Clearing** removes what competes with the crop; **cultivation** makes a seedbed the roots can use.\n\nThis chapter then follows **maize** from choosing a field to selling a graded bag, including the numbers a farmer actually calculates.\n\nLearn the sequence and the figures: seed rate, spacing, fertiliser, yield and cost.\n\nA good answer names the operation, the implement and the effect on the soil or the plant.`,
  subheadings: [
    {
      title: "Clearing and Land Preparation",
      body: `### Choosing the Field Comes First

Before clearing, check depth of soil, drainage, slope and access.

Deep, well-drained loam on gentle ground suits most field crops.

A steep slope needs contour work or the topsoil will leave with the first storm.

Check the previous crop: a field of maize last season carries pests and weeds.

Also check water, shade, and distance to the market or store.

A field that floods once every few seasons is not worth the risk.

### Clearing Removes the Competition

**Clearing** means removing vegetation, stumps, stones and trash from the site.

Slash tall grass and shrubs first, then fell unwanted trees.

Keep useful trees for shade or fruit, and leave windbreaks on the windward side.

Remove all trash from the rows, or it will block the plough and harbour pests.

Clearing is not burning everything; the aim is a workable, clean surface.

### Stumping Is the Hard Part

**Stumping** is the removal of tree stumps and large roots from the soil.

Tools range from an axe and mattock to a winch, a ripper or a bulldozer.

Roots are lifted, shaken free of soil, and burned or heaped away from the field.

Why bother: stumps break plough shares, force the operator to steer around them, and leave unplanted gaps.

Old roots also shelter termites and root-rot fungi, and many species coppice back into a thicket.

### Burning: Useful and Dangerous

Controlled burning kills weed seed, insects and diseased trash.

The ash returns **potash** and some phosphorus to the surface soil.

But fire destroys **organic matter** and nitrogen, and it kills earthworms and soil microbes.

Bare, burnt ground also erodes fast when the rains begin.

Burn only heaped trash, with firebreaks cut and the wind checked.

### Hand Against Machine Clearing

Hand clearing is slow but gives work and selectivity.

One person may clear 0.05 ha of light bush in a day, so 1 ha needs about 20 person-days.

At $5 per person-day, hand clearing costs about $100 per hectare.

A tractor and ripper may clear 1 ha in a few hours at $40 per hour, about $160.

Machines are faster and cheaper on heavy stumps, but compact wet soil.

### Drainage and Erosion Control

Flat, clayey land needs drains before it can be ploughed.

Cut shallow channels along the slope, not down it, and keep them clear.

On slopes, leave strips of vegetation and plough across the slope.

Keep trash on the surface where erosion is a risk.

Never clear right up to a stream bank; leave a buffer strip.

### Worked Example: Cost of Clearing

A farmer clears 2 ha by hand.

Rate: 20 person-days per hectare, so 2 × 20 = 40 person-days.

At $5 per day, labour costs 40 × 5 = $200.

Hiring a tractor at $40 per hour for 10 hours costs $400.

The hand method is cheaper here, but takes two weeks with a small team.

### Timing the Work

Clear in the dry season, when trash burns and soil carries machinery.

But clear too early and the first rains bring a fresh flush of weeds.

Aim to finish primary cultivation just before the planting rains.

That way the seedbed is fresh, moist and weed-free at sowing.

Record the date of the first effective rains each season, and work back from it.

### Removing Stones and Levelling

### Removing Stones and Levelling

Surface stones blunt hoes and damage ploughs.

Lift large stones with a bar and heap them on a boundary or use them in a wall.

Rake small stones to the edge of the plot.

Then level the surface, so rain does not stand in hollows.

A level field also makes row marking, spraying and harvesting easier.

### Protecting the Soil While Clearing

Clearing exposes soil to the first rains.

Leave strips of trash across the slope to slow runoff.

Do not burn on a windy day, and never leave a fire unattended.

Keep boundary trees as a windbreak, and leave a buffer beside streams.

Mulch or replant bare patches as soon as the crop is established.

### What Examiners Call Land Preparation

Land preparation includes clearing, stumping, drainage and erosion control.

Soil preparation is the next stage: ploughing or digging, then harrowing or raking.

Keep the two terms apart in an answer.

The purpose of both is to give seed a place to germinate and roots a place to grow.`,
      groups: [
        {
          subTitle: "Clearing Operations",
          bullets: [
            "**Slashing:** cutting grass and brush to reduce cover and expose the soil.",
            "**Felling:** removing unwanted trees, leaving useful shade and fruit trees.",
            "**Stumping:** lifting stumps and large roots that obstruct implements.",
            "**Stone removal:** clearing boulders and surface rock before tillage.",
            "**Trash disposal:** heaping, composting or controlled burning of residues.",
          ],
        },
        {
          subTitle: "Why Stumping Pays",
          bullets: [
            "**Implements:** no broken shares or constant steering around obstacles.",
            "**Pests:** removes termite nests and root-rot refuges.",
            "**Regrowth:** stops coppicing stumps shading the crop.",
            "**Uniform stand:** allows even rows and full plant population.",
            "**Cultivation depth:** lets the plough work at a constant depth.",
          ],
        },
        {
          subTitle: "Burning: Gains and Costs",
          bullets: [
            "**Gain:** kills weed seed and pests, and releases potash as ash.",
            "**Cost:** destroys organic matter, nitrogen and soil life.",
            "**Cost:** leaves bare soil exposed to rain and erosion.",
            "**Rule:** burn heaped trash with firebreaks, never the whole field.",
            "**Alternative:** compost trash or retain it as mulch.",
          ],
        },
      ],
      examinerTips: [
        "Separate clearing from soil preparation, and give a reason for each operation.",
        "Name the tool or machine, then state its effect on soil or pest, not just that it is used.",
        "For burning, give one benefit and one cost, then a sensible rule.",
        "Use figures when comparing hand and machine work: person-days, hectares and cost.",
        "Mention drainage and erosion control whenever the land is flat or sloping.",
      ],
      commonMistakes: [
        "Treating clearing and ploughing as the same operation; one removes vegetation, the other works soil.",
        "Saying burning is always good because ash fertilises the soil; nitrogen and organic matter are lost.",
        "Forgetting stumps; they break implements and shelter termites.",
        "Clearing steep land bare without any erosion control.",
        "Clearing long before planting, then allowing weeds to regrow unchecked.",
      ],
      recap: [
        "Distinguish between clearing and stumping, and state two reasons for stumping. [3]",
        "State two advantages and two disadvantages of burning trash. [4]",
        "Explain why land should be cleared before the planting rains rather than months earlier. [2]",
        "A farmer clears 3 ha by hand at 20 person-days per hectare and $4 per day. Calculate the labour cost. [2]",
        "Explain two ways of reducing soil erosion on a sloping field being cleared. [3]",
      ],
    },
    {
      title: "Primary and Secondary Cultivation",
      body: `### Two Stages of Soil Preparation

**Primary cultivation** is the first, deep working of the soil: ploughing or digging.

**Secondary cultivation** follows: harrowing, discing, raking and levelling.

Primary breaks and inverts the soil; secondary refines the surface.

Maize needs a coarse, firm tilth; tobacco and onion need a fine one.

Getting the sequence right is worth marks in every practical question.

### What Ploughing Achieves

**Ploughing** loosens soil to a depth of 20-30 cm.

It aerates the soil so roots and microbes get oxygen.

It buries weeds, crop residue and manure where they rot.

It breaks a plough pan and improves water infiltration.

It also exposes soil pests to birds and drying.

### The Implements

A **mouldboard plough** cuts a furrow slice and turns it over, burying trash.

A **disc plough** works better in hard, dry or stony soil.

A **chisel plough** or subsoiler shatters a hardpan without inverting the soil.

An **ox plough** is the common smallholder tool, drawn by two oxen.

Hand tools are the **hoe** and **mattock**, used to dig beds 20-25 cm deep.

### Depth and Timing

Plough at a steady depth, and vary it slightly between seasons.

Ploughing at the same depth every year creates a compacted layer just below the share.

Work the soil when it is moist but not wet: squeeze a handful, and it should crumble, not smear.

Ploughing wet clay smears and compacts it, and the damage lasts for seasons.

Ploughing dust-dry soil produces hard clods that harrowing cannot break.

### Digging by Hand

Hand digging is used where land is steep, small or rocky.

Beds are usually 1 m wide so the worker can reach the middle without standing on them.

Dig to 20-25 cm, turning the soil and burying trash.

Break clods as you go, then level with a rake.

Hand digging is slow but gives good depth and no compaction from wheels.

### Harrowing and Raking

**Harrowing** breaks clods, levels the surface and uproots small weeds.

A **disc harrow** cuts and mixes; a **spike-tooth harrow** rakes and smooths.

A hand **rake** does the same job on a bed or a small plot.

Secondary cultivation also firms the seedbed, so capillary water can rise to the seed.

It incorporates fertiliser and manure into the topsoil.

### What a Good Seedbed Looks Like

It is **fine** enough to cover the seed at an even depth.

It is **firm** below, so the seed sits in moist soil, not in a pocket of air.

It is **level**, so water does not pond and seedlings do not emerge in patches.

It is **weed-free**, so the crop starts without competition.

It is **the right depth**, loose above and settled below.

### Work Rates and Costs

A hand digger prepares about 0.05 ha per day, so 1 ha takes 20 person-days.

An ox plough works 0.1-0.2 ha per day, so 1 ha takes 5-10 days plus harrowing.

A tractor with a disc plough covers 0.5-1 ha per day.

Fuel, repairs and hire usually make tractor work dearer per hectare.

Choose the method by field size, slope, soil and cash, not by habit.

### Conservation Tillage

**Minimum tillage** disturbs only the planting row.

**Ripping** shatters compaction without turning the soil.

**Residue retention** keeps trash on the surface as mulch.

Together they cut erosion, save fuel and conserve moisture.

The trade-off is more reliance on herbicides and careful planter setup.

### How Many Passes

One ploughing pass is enough on light, clean soil.

Heavy clay may need two passes, the second across the first.

Two or three harrowings usually follow, depending on the clods.

Stop when the tilth suits the seed, not when the field looks tidy.

Every extra pass costs fuel, labour and soil moisture.

### Worked Example: Preparing One Hectare

A farmer hires an ox plough at 0.15 ha per day.

Days for 1 ha = 1 ÷ 0.15 = 6.7, so about 7 days.

Harrowing at 0.4 ha per day adds 1 ÷ 0.4 = 2.5, so 3 days.

Total 10 days, plus 2 days for levelling and making drains.

At $12 per ox-day, cost = 12 × 12 = $144 per hectare.

### How Tillage Affects Germination

A fine, firm seedbed keeps the seed in contact with moist soil.

Good contact lets the seed imbibe water and the radicle anchor at once.

Loose, cloddy soil leaves air pockets that dry the seed out.

A crusted surface traps the coleoptile, and the seedling buckles.

That is why secondary cultivation matters as much as ploughing.`,
      figure: tillageArt,
      groups: [
        {
          subTitle: "Primary Against Secondary",
          bullets: [
            "**Primary:** ploughing or digging, 20-30 cm deep, breaks and inverts soil.",
            "**Secondary:** harrowing, discing or raking, refining the top 10 cm.",
            "**Primary aims:** aerate, bury trash, break hardpan, improve infiltration.",
            "**Secondary aims:** break clods, level, firm, kill small weeds, mix fertiliser.",
            "**Order:** primary first, then secondary, then plant into a settled bed.",
          ],
        },
        {
          subTitle: "Choosing an Implement",
          bullets: [
            "**Mouldboard plough:** turns and buries trash, good on clean land.",
            "**Disc plough:** copes with hard, dry or stony soil.",
            "**Chisel plough or subsoiler:** breaks a hardpan without inverting soil.",
            "**Disc harrow:** cuts clods and mixes residue into the topsoil.",
            "**Rake or spike harrow:** levels and smooths before planting.",
          ],
        },
        {
          subTitle: "Signs of a Good Seedbed",
          bullets: [
            "**Fine:** clods small enough to cover seed evenly.",
            "**Firm:** no air pockets under the seed.",
            "**Level:** no hollows where water stands.",
            "**Clean:** no live weeds or trash in the row.",
            "**Moist:** worked at field capacity, never wet enough to smear.",
          ],
        },
      ],
      examinerTips: [
        "Give the depth of ploughing, usually 20-30 cm, to show practical knowledge.",
        "Link each implement to the soil condition it suits, not just to its name.",
        "Explain why soil should not be worked wet: smearing, compaction and clods.",
        "Use the words tilth, seed-soil contact and infiltration in seedbed answers.",
        "Compare hand, ox and tractor work by rate and cost, then choose with a reason.",
      ],
      commonMistakes: [
        "Harrowing before ploughing; secondary cultivation follows primary.",
        "Saying ploughing makes soil fertile; it improves structure, not nutrient content.",
        "Ploughing at the same depth each year and creating a new hardpan.",
        "Describing a fine tilth for maize as essential; maize tolerates a coarser bed than onion.",
        "Forgetting that wet cultivation destroys structure for several seasons.",
      ],
      recap: [
        "Distinguish primary from secondary cultivation and give one aim of each. [3]",
        "Describe how a mouldboard plough improves conditions for germination. [4]",
        "Explain why soil should not be ploughed when it is wet. [3]",
        "A tractor ploughs 0.8 ha per day and harrows 2 ha per day. Calculate the days needed for 4 ha. [3]",
        "State four characteristics of a good seedbed for maize. [4]",
      ],
    },
    {
      title: "Crop Types and Their Products",
      body: `### Four Groups Worth Knowing

Local crops are usually grouped as **legumes**, **roots and tubers**, **edible fruits** and **cereals**.

Each group has a different food value, storage life and market.

Each also needs a different kind of land preparation and harvest.

Examiners expect one named local example and one product for each group.

### Legumes: Protein and Free Nitrogen

**Legumes** include beans, groundnuts, cowpeas, soya beans and pigeon peas.

Their roots form nodules with **Rhizobium** bacteria, which fix atmospheric nitrogen.

That nitrogen feeds the legume and some is left for the next crop.

So a legume in the rotation cuts fertiliser need and breaks pest cycles.

The seed is high in protein, which is why legumes balance a cereal diet.

### Legume Products

Dry beans are eaten whole, or ground into flour.

Groundnuts are pressed for oil, and the cake left behind feeds livestock.

Cowpea leaves are eaten as a vegetable in some areas.

Soya is processed into feed, oil and human foods.

Legume haulms and pods make good fodder and compost.

### Roots and Tubers: Cheap Energy

**Roots and tubers** include cassava, sweet potato, Irish potato and yam.

Cassava yields well on poor, acid soils where cereals struggle.

Sweet potato matures in three to four months and tolerates dry spells.

Irish potato needs cooler conditions and a fertile, loose seedbed.

Yam needs deep, rich soil and a long season.

### Root and Tuber Products

Cassava is processed into flour, gari, starch and chips.

Sweet potato is eaten boiled, roasted or dried into chips.

Irish potato is sold fresh, or processed into crisps and chips.

Yam is boiled, pounded or dried into flour.

Peels and rejects feed pigs and cattle.

### Edible Fruits: High Value, Short Life

**Edible fruits** include tomato, mango, banana, pineapple, papaya and passion fruit.

They supply vitamins and cash, often from a small plot.

Most are **perishable**, so they need quick transport and a reliable buyer.

Fruit crops also need careful handling, grading and sometimes irrigation.

A glut can wipe out the price, so staggered planting helps.

### Fruit Products

Tomato is sold fresh or processed into paste, sauce and dried slices.

Mango is eaten fresh, dried or made into juice and chutney.

Banana is sold in bunches, dried, or brewed locally.

Pineapple is sold fresh or as juice.

Rejects become jam, feed or compost.

### Cereals: The Staple and the Store

**Cereals** include maize, sorghum, millet, rice and wheat.

They supply most of the calories in a local diet.

Their grain dries to 12-13% moisture and stores for months, which makes them a food reserve.

Cereals are bulky and low in value per kilogram, so transport costs matter.

They are also the base of livestock feed.

### Cereal Products

Maize becomes meal, flour, samp and animal feed.

The stover feeds cattle and the cobs make fuel.

Sorghum and millet are malted for beer and ground into meal.

Rice is milled and sold as grain.

Wheat is milled into flour for bread.

### Worked Example: Comparing Two Crops

One hectare of maize yields 2.0 t and sells at $200 per tonne.

Gross income = 2.0 × 200 = $400.

One hectare of tomato yields 12 t at $150 per tonne, giving $1,800.

But tomato needs transplanting, stakes, sprays, crates and quick transport.

The maize is safer to store; the tomato is worth more only if it reaches a buyer.

### Matching the Crop to the Farm

Choose a crop that suits soil, rainfall, slope and labour.

Choose one you can store, sell or eat without loss.

A legume in the rotation protects the cereal that follows.

A small fruit plot can carry the household's cash needs.

Never stake the whole farm on one perishable crop.

### Mixed Farming Spreads the Risk

Most smallholdings grow several groups at once.

Maize and beans may share a field, cassava takes the poorer ground, and fruit trees line the boundary.

Mixed farming spreads labour, income and risk through the season.

It also uses manure, crop residues and household labour more fully.

The cost is complexity: every crop has its own timing, pests and harvest.

### Rotating the Groups

A simple rotation runs cereal, then legume, then root or tuber.

The legume restores nitrogen and breaks cereal pests.

The root crop uses nutrients at a different depth and cleans the land.

Fruit trees often sit on boundaries or a separate plot.

Rotation is the cheapest pest and fertility tool a farmer owns.`,
      groups: [
        {
          subTitle: "The Four Groups at a Glance",
          bullets: [
            "**Legumes:** beans, groundnut, cowpea, soya; protein, nitrogen fixation, rotation value.",
            "**Roots and tubers:** cassava, sweet potato, Irish potato, yam; starch, tolerate poor soil, perishable.",
            "**Edible fruits:** tomato, mango, banana, pineapple; vitamins, high value, very perishable.",
            "**Cereals:** maize, sorghum, millet, rice; carbohydrate staple, storable, low value per kg.",
          ],
        },
        {
          subTitle: "Products and By-Products",
          bullets: [
            "**Maize:** meal, flour, feed, stover fodder, cob fuel.",
            "**Groundnut:** cooking oil, roasted nuts, oil cake for stock.",
            "**Cassava:** flour, gari, starch, chips; peels for livestock.",
            "**Banana:** fresh fruit, dried fruit, local brew, mulch from stems.",
            "**Tomato:** fresh fruit, paste, sauce, dried slices.",
          ],
        },
        {
          subTitle: "Choosing What to Grow",
          bullets: [
            "**Soil and climate:** match the crop to depth, drainage, rainfall and temperature.",
            "**Storage:** cereals keep; roots and fruit must move quickly.",
            "**Labour:** fruit and potato need more handling than sorghum.",
            "**Market:** check the buyer, the price and the transport before planting.",
            "**Risk:** spread crops so one failure does not take the whole income.",
          ],
        },
      ],
      examinerTips: [
        "Name the group, a local example and a product; three marks often sit in that trio.",
        "Use the word legume for the group, and say Rhizobium fixes nitrogen in root nodules.",
        "For fruit, mention perishability, transport and grading as the limiting factors.",
        "Compare crops by value per hectare, labour and storage life, not just yield.",
        "Link rotation to nitrogen and to breaking pest and disease cycles.",
      ],
      commonMistakes: [
        "Calling maize a legume because it is grown with beans; it is a cereal.",
        "Saying legumes add nitrogen from the soil; they fix it from the air.",
        "Classifying Irish potato as a root; the tuber is a modified stem.",
        "Ignoring perishability when recommending a fruit crop.",
        "Listing products without naming the crop they come from.",
      ],
      recap: [
        "Name the four crop groups and give one local example of each. [4]",
        "State two advantages of including a legume in a rotation. [2]",
        "Explain why cereals are easier to store than roots and tubers. [3]",
        "Describe two products and one by-product obtained from groundnuts. [3]",
        "A hectare of tomato yields 10 t at $180 per tonne. Calculate the gross income and state one reason it may not be profit. [3]",
      ],
    },
    {
      title: "Maize: Site, Cultivar and Planting",
      body: `### Why Maize

**Maize** is the staple cereal across much of the region and the crop used here as the worked example.

It yields well on good land, stores dry, and feeds both people and livestock.

It is also sensitive to waterlogging, drought at flowering and weeds.

Most of the management decisions below apply to any cereal.

### Soil Requirements

Maize needs a deep soil, at least 60 cm, so roots can explore for water.

Drainage must be good; maize roots die in waterlogged soil within days.

A loam or sandy loam is ideal, holding water without packing hard.

The best pH is 5.5-7.0; below 5.0, lime is needed before planting.

Avoid saline patches and shallow soil over rock.

### Climatic Requirements

Maize needs 500-800 mm of rain, well spread through the season.

The optimum temperature range is about 20-30 °C.

It grows from sea level to about 2,000 m, depending on the cultivar.

It needs full sun; shade during grain filling cuts yield.

The worst timing for drought is flowering, when silks and pollen are forming.

### Land Preparation for Maize

Clear and stump the field, then plough to 20-30 cm.

Harrow to break clods and level the surface.

A coarse, firm tilth suits maize; it does not need a fine garden bed.

Mark rows at 75 cm, using a line, a marker or a tractor ridger.

Prepare the field early enough that the first rains find it ready.

### When to Plant

Plant with the first effective rains, usually 20 mm or more.

In most areas the safe window is the first two weeks of the season.

Every week of delay after that can cost roughly 5-10% of yield.

Late maize also flowers in dry weather and ripens into a wet harvest.

Plant when soil temperature at 10 cm is above 10-12 °C.

### Planting Method by Hand

Open a hole 5 cm deep at each station.

Drop one seed, or two where germination is doubtful.

Cover with 3-5 cm of soil and press lightly to close the air pockets.

Use a string line to keep rows straight and spacing exact.

Straight rows make weeding, spraying and harvesting faster.

### Spacing and Population

The common rainfed spacing is **75 cm between rows and 25 cm within the row**.

That gives 75 × 25 cm = 0.1875 m² per station.

Plants per hectare = 10,000 ÷ 0.1875 = 53,333.

In drier areas, 90 × 30 cm gives 10,000 ÷ 0.27 = 37,037 plants.

Wider spacing saves water; closer spacing shades out weeds.

### Choosing a Cultivar

**Early** cultivars mature in 90-100 days and escape late drought.

**Medium** cultivars take 110-130 days and usually yield more.

**Late** cultivars need 140 days or more and a long, reliable season.

**Hybrids** yield more but seed must be bought each year.

**Open-pollinated** varieties can be saved, though yields are lower and less uniform.

Choose cultivars that resist maize streak virus and are adapted to your altitude.

### Worked Example: Seed Rate

Population is 53,333 stations per hectare, with one seed per station.

The chosen hybrid has a 1000-grain weight of 400 g.

Seed mass = 53,333 × 400 ÷ 1000 = 21,333 g, about 21.3 kg.

Allow 15% for germination failure, birds and gaps: 21.3 × 1.15 = 24.5 kg.

So one 25 kg bag of seed sows one hectare.

### Seed Treatment and Gap Filling

Treat seed with a fungicide and, where needed, an insecticide before sowing.

Treated seed protects against soil fungi and termites.

Check the field 10-14 days after emergence.

Replant missing stations while the soil is still moist.

Thin to one plant per station at the four-leaf stage.

### Worked Example: Plants in a Plot

A plot is 40 m by 25 m, which is 1,000 m².

At 53,333 plants per hectare, this is 53,333 × 0.1 = 5,333 plants.

Rows at 75 cm give 40 ÷ 0.75 = 53 rows.

At 25 cm within the row, each row holds 25 ÷ 0.25 = 100 stations.

53 × 100 = 5,300 stations, close to the calculated figure.

### Mistakes at Planting Time

Sowing too deep leaves the shoot short of energy and light.

Sowing into dry soil risks the seed drying before it imbibes.

Planting on a slope without contour lines invites erosion.

Mixing cultivars in one field makes maturity and harvest uneven.

Skipping the string line looks tidy enough, but wrecks the plant population.`,
      figure: plantingArt,
      groups: [
        {
          subTitle: "Maize Requirements",
          bullets: [
            "**Soil:** deep, well drained loam or sandy loam, pH 5.5-7.0.",
            "**Rainfall:** 500-800 mm, well distributed, with no drought at flowering.",
            "**Temperature:** about 20-30 °C, with warm soil at sowing.",
            "**Light:** full sun, especially during grain filling.",
            "**Altitude:** sea level to about 2,000 m, depending on cultivar.",
          ],
        },
        {
          subTitle: "Spacing Arithmetic",
          bullets: [
            "**75 × 25 cm:** 0.1875 m² per plant, giving 53,333 plants per hectare.",
            "**90 × 30 cm:** 0.27 m² per plant, giving 37,037 plants per hectare.",
            "**Wider rows:** conserve water in dry areas but allow more weeds.",
            "**Closer rows:** shade weeds and raise yield where water is adequate.",
            "**Formula:** 10,000 ÷ (row spacing × plant spacing in metres).",
          ],
        },
        {
          subTitle: "Choosing a Cultivar",
          bullets: [
            "**Earliness:** 90-100 days escapes drought; 140 days needs a long season.",
            "**Hybrid:** higher yield and uniformity, but fresh seed every season.",
            "**Open-pollinated:** can be saved, with lower and less uniform yield.",
            "**Resistance:** choose streak-resistant and locally adapted varieties.",
            "**Market:** white grain for meal, yellow for feed, according to demand.",
          ],
        },
      ],
      examinerTips: [
        "Quote the spacing and the population together, since each supports the other.",
        "Show the seed-rate working in grams, then convert to kilograms.",
        "Name a cultivar trait and the reason it matters, such as early maturity for a short season.",
        "Give planting depth, 3-5 cm, and the reason: moisture, emergence and food reserves.",
        "For a site question, cover soil, drainage, rainfall, temperature and pH.",
      ],
      commonMistakes: [
        "Calculating population without converting centimetres to metres.",
        "Sowing deeper than 5 cm and blaming poor seed for the gaps.",
        "Choosing a late cultivar in an area with a short rainy season.",
        "Saving seed from a hybrid and expecting the same yield.",
        "Ignoring waterlogging, which kills maize faster than dry spells.",
      ],
      recap: [
        "State the soil and climatic requirements of maize. [4]",
        "Calculate the plant population for maize sown at 75 cm × 25 cm. [2]",
        "Explain why maize should be planted within two weeks of the first effective rains. [3]",
        "A 1000-grain weight is 400 g and the population is 53,333 plants per hectare. Calculate the seed rate with a 15% allowance. [3]",
        "Give three reasons for choosing an early-maturing hybrid cultivar. [3]",
      ],
    },
    {
      title: "Maize: Nutrition, Protection and Maturity",
      body: `### Start With the Soil

Take a soil sample before planning fertiliser.

A soil test shows pH, phosphorus, potassium and organic matter.

Acid soil below pH 5.0 is corrected with lime, applied months before planting.

Manure at 10-20 t/ha adds organic matter, water-holding capacity and slow nutrients.

Fertiliser then supplies what the soil cannot.

### The Compound Basal Application

A common recommendation is **250 kg/ha of compound 20:10:10**.

The figures are percentages of nitrogen, phosphate and potash.

Nitrogen = 250 × 20 ÷ 100 = 50 kg N per hectare.

Phosphate = 250 × 10 ÷ 100 = 25 kg P2O5 per hectare.

Potash = 250 × 10 ÷ 100 = 25 kg K2O per hectare.

### Placing the Fertiliser

Band the compound 5-8 cm beside the row and about 5 cm below seed level.

Never let fertiliser touch the seed: the salt draws water out and kills the embryo.

Banding also puts phosphorus where roots will reach it, rather than broadcasting it.

Cover the band with soil before dropping seed.

Per station, 250 kg over 53,333 stations is about 4.7 g, roughly a bottle cap.

### Top Dressing

Maize needs nitrogen when it is growing fastest, at four to six weeks.

Apply **150 kg/ha of ammonium nitrate**, which is 34.5% N.

Nitrogen = 150 × 0.345 = 51.8 kg N per hectare.

Place it between rows and cover lightly, or apply when rain is expected.

Never broadcast onto wet leaves in strong sun; it scorches them.

### Total Nitrogen and Deficiency Signs

The basal and top-dress applications together supply about 50 + 52 = 102 kg N per hectare.

**Nitrogen shortage** shows as pale, older leaves with a yellow V shape.

**Phosphorus shortage** gives purple stems and leaves, and poor roots.

**Potash shortage** browns and dries the leaf margins.

**Zinc shortage** produces white buds and short internodes.

### Weeds: The First Six Weeks

Weeds take water, light and nutrients, and they host pests.

Maize is most vulnerable in the first three to six weeks.

Two hoeings, at about three weeks and six weeks, usually protect the crop.

A pre-emergence herbicide such as atrazine can replace the first hoeing.

Always calibrate the sprayer and follow the label rate.

### Worked Example: Sprayer Calibration

A knapsack holds 15 L and the label rate is 200 L per hectare.

Area covered by one fill = 15 ÷ 200 = 0.075 ha.

That is 0.075 × 10,000 = 750 m².

If rows are 0.75 m apart, the sprayer must walk 750 ÷ 0.75 = 1,000 m of row.

Mark that distance and check the tank empties at the mark.

### Insect Pests

**Fall armyworm** feeds in the whorl and leaves ragged holes and moist frass.

**Stalk borer** tunnels into the stem and causes dead hearts.

**Maize weevil** attacks stored grain, not the growing crop.

**Aphids** suck sap and can transmit viruses.

**Termites** attack roots and stems in dry spells.

Control starts with scouting, resistant cultivars, rotation and destroying crop residue.

### Safe Pesticide Use

Identify the pest before spraying.

Choose the recommended product and the label dose.

Wear gloves, boots, overalls and a mask.

Spray in calm weather, never against the wind.

Respect the pre-harvest interval, and store chemicals locked away from food.

### Diseases

**Maize streak virus** causes pale broken stripes and is spread by leafhoppers.

**Grey leaf spot** gives long grey-brown lesions that merge and kill leaves.

**Common rust** produces orange-brown pustules on the leaves.

**Head smut** replaces the tassel or ear with a mass of black spores.

**Ear rots** can produce aflatoxins, which are poisonous to people and stock.

Control combines resistant cultivars, rotation, clean seed and residue management.

### Recognising Maturity

Tasselling begins at about 45-60 days, and silking follows within days.

The **dough stage** comes when the kernel is soft and milky.

The **dent stage** shows a dent at the top of the kernel as starch hardens.

**Black layer** forms at the base of the kernel at physiological maturity.

At black layer the grain is about 30-35% moisture.

Husks turn brown and dry, and kernels feel hard and shiny.

### Fields and Records at Maturity

Walk the field and estimate ears per square metre.

Multiply ears by kernels per ear and by kernel weight for an early yield estimate.

Note which parts of the field ripened first; they often mark soil differences.

Record the maturity date against the planting date.

That interval tells you whether the cultivar suits your season.

### Why Timing Harvest Matters

Harvest too early and the grain shrivels and loses weight.

Harvest too late and weevils, birds, rats, rain and lodging take a share.

Over-mature cobs also break and drop grain in the field.

Aim to harvest when grain is near 20-25% moisture, then dry it down.

Dry grain stores; damp grain heats, moulds and rots.`,
      groups: [
        {
          subTitle: "The Fertiliser Programme",
          bullets: [
            "**Basal:** 250 kg/ha of 20:10:10, supplying 50 kg N, 25 kg P2O5 and 25 kg K2O.",
            "**Placement:** banded 5-8 cm beside and 5 cm below the seed, never touching it.",
            "**Top dressing:** 150 kg/ha of ammonium nitrate at four to six weeks, about 52 kg N.",
            "**Manure:** 10-20 t/ha before ploughing, for structure and slow nutrients.",
            "**Lime:** raises pH below 5.0, applied well before planting.",
          ],
        },
        {
          subTitle: "Pests, Weeds and Diseases",
          bullets: [
            "**Fall armyworm:** scouting, hand removal, recommended insecticide, resistant cultivars.",
            "**Stalk borer:** rotation, residue destruction, timely planting.",
            "**Weeds:** two hoeings in the first six weeks, or a calibrated pre-emergence spray.",
            "**Maize streak virus:** resistant cultivars and leafhopper control.",
            "**Ear rots and aflatoxin:** dry to 13% quickly and never store damp grain.",
          ],
        },
        {
          subTitle: "Signs of Ripening",
          bullets: [
            "**Dough stage:** kernels soft and milky when pressed.",
            "**Dent stage:** starch hardens and the kernel top dents.",
            "**Black layer:** a dark seal at the kernel base marks physiological maturity.",
            "**Husks:** turn brown, papery and dry.",
            "**Grain:** hard, shiny, and near 20-25% moisture at harvest.",
          ],
        },
      ],
      examinerTips: [
        "Show the percentage calculation for each nutrient, not just the total bag weight.",
        "Say why fertiliser must not touch the seed: salt injury and dead embryos.",
        "Name the pest, the damage symptom and one control, in that order.",
        "Use the black layer as the precise sign of physiological maturity.",
        "For a spraying question, mention dose, calibration, protective clothing and the pre-harvest interval.",
      ],
      commonMistakes: [
        "Adding 20:10:10 as 20 kg of each nutrient per 100 kg of fertiliser; they are percentages.",
        "Placing compound fertiliser in the seed hole and burning the seed.",
        "Top dressing with nitrogen at planting instead of at four to six weeks.",
        "Spraying a pesticide without identifying the pest or reading the label.",
        "Judging maturity by plant height or green leaves instead of husks and black layer.",
      ],
      recap: [
        "Calculate the nitrogen supplied by 250 kg of 20:10:10. [2]",
        "Explain why compound fertiliser is banded beside the seed rather than mixed with it. [3]",
        "Describe the symptoms of nitrogen deficiency in maize and one way to correct it. [3]",
        "State three signs that a maize crop is ready to harvest. [3]",
        "Explain how the pre-harvest interval protects consumers and workers. [2]",
      ],
    },
    {
      title: "Harvest, Storage and Records",
      body: `### Judging the Harvest Date

Harvest when the husks are dry and brown and the grain is hard.

At that stage moisture is around 20-25%, and the black layer is complete.

Squeeze a kernel: it should resist the thumbnail, not dent easily.

Leave the crop too long and lodging, birds, rats and weevils take the profit.

Harvest in dry weather, and never heap wet cobs in a closed shed.

### Harvesting by Hand

Twist the cob from the stalk and strip the husk back.

Leave the stover in the field for grazing, mulch or ploughing in.

Sort out rotten, mouldy and immature cobs at once; they infect the rest.

Carry cobs in baskets or bags rather than dropping them in a heap.

A family can hand-pick about 0.2-0.3 ha in a day.

### Drying Before Storage

Dry cobs on a raised, ventilated **crib** with a roof.

Air moves through the slatted sides and takes moisture away.

Target 12-13% moisture for safe storage.

Test by biting a kernel: it should crack, not squash.

A moisture meter gives the exact figure and is worth the cost.

### Shelling

Shell when the grain is dry enough, otherwise it bruises and moulds.

Hand shelling is slow but damages less grain.

A motorised sheller is fast but must be set so kernels are not cracked.

Winnow to remove chaff, broken grain and dust.

Cracked grain stores badly and attracts weevils.

### Storage That Works

Clean and dry the store before harvest, and repair the roof.

Stack bags on pallets, away from the walls.

Fit rat guards on the posts and keep the doors closed.

Use hermetic bags or treat grain with approved storage dust.

Inspect monthly for weevils, rats, damp patches and smells.

### Storage Losses

Losses of 10-30% are common with poor storage.

**Weevils** bore into grain and leave dust and holes.

**Rats** eat and contaminate far more than they eat.

**Mould** grows where moisture is above 13%, and some moulds make aflatoxins.

**Aflatoxin** is invisible, heat-stable and dangerous, so prevention is the only control.

### Worked Example: Yield in Bags

A plot measures 20 m × 25 m, which is 500 m² or 0.05 ha.

It yields 90 kg of shelled, dried grain.

Yield per hectare = 90 ÷ 0.05 = 1,800 kg.

In 50 kg bags: 1,800 ÷ 50 = 36 bags per hectare.

If a bag sells for $20, gross income is 36 × 20 = $720.

### Worked Example: The Cost of Poor Storage

The farmer stores 36 bags and loses 15% to weevils and rats.

Loss = 36 × 0.15 = 5.4 bags, about 270 kg.

The value lost is 5.4 × $20 = $108.

That is more than the cost of hermetic bags and a rat-proof store.

### Grading and Selling

Grade grain by moisture, cleanliness and broken grains.

Remove foreign matter, stones and discoloured kernels.

Sell at the right moisture; wet grain is discounted heavily.

Check the buyer's price and weigh the bags yourself.

Storing to sell later only pays if the price rise beats the storage loss.

### The Farm Diary

A **farm diary** records every operation as it happens.

For each entry write the date, the field, the operation and the implement used.

Record inputs by name and quantity: seed, fertiliser, herbicide, pesticide.

Record labour: how many people, for how many days.

Record the cost of each item, including hire and fuel.

### Production Records

**Production records** summarise what the field actually produced.

Record the plot area, the crop and cultivar, and the harvest date.

Record yield in kilograms and bags, and the grade split.

Record sales: quantity, price and buyer.

Keep the records for each field and each season.

### Why Records Pay

Records show which field, cultivar or fertiliser rate performed best.

They expose a cost that is out of line before it repeats.

They support loan applications and prove ownership of stock.

They help plan labour and inputs for the next season.

Memory fades; a written record is evidence.

### Worked Example: Gross Margin

Income from 1 ha of maize is $720.

Costs: seed $30, fertiliser $180, herbicide $25, labour $120, transport $40.

Total costs = 30 + 180 + 25 + 120 + 40 = $395.

Gross margin = 720 − 395 = $325 per hectare.

If the margin is negative, the record has told you before the next season does.

### Planning the Next Season

Use the diary and production records together.

Order seed early, based on the area actually planted.

Adjust fertiliser to the yields achieved, not the yields hoped for.

Book labour for weeding, the operation most often delayed.

Keep the best cobs from an open-pollinated crop for seed, and store them separately.`,
      figure: harvestArt,
      groups: [
        {
          subTitle: "From Field to Store",
          bullets: [
            "**Harvest:** dry husks, hard grain, 20-25% moisture, black layer complete.",
            "**Dry:** raised ventilated crib down to 12-13% moisture.",
            "**Shell:** only when dry, to avoid cracked and bruised grain.",
            "**Clean:** winnow out chaff, dust, stones and broken kernels.",
            "**Store:** pallets, rat guards, hermetic bags, monthly inspection.",
          ],
        },
        {
          subTitle: "What a Farm Diary Holds",
          bullets: [
            "**Date and field:** when and where the work happened.",
            "**Operation:** ploughing, planting, weeding, spraying, harvesting.",
            "**Inputs:** seed, fertiliser, herbicide, pesticide, with quantities.",
            "**Labour:** number of workers and days, plus hire charges.",
            "**Cost:** every cash cost, including fuel and transport.",
          ],
        },
        {
          subTitle: "What Production Records Show",
          bullets: [
            "**Area and cultivar:** what was planted and where.",
            "**Yield:** kilograms and bags per plot, converted to per hectare.",
            "**Grade:** proportion of first grade and rejects.",
            "**Sales:** quantity, price, buyer and date.",
            "**Margin:** income minus costs, per field and per season.",
          ],
        },
      ],
      examinerTips: [
        "Quote the safe storage moisture, 12-13%, and the harvest moisture, 20-25%.",
        "For storage questions, cover dryness, cleanliness, ventilation, rats and inspection.",
        "Convert plot yields to per hectare before comparing anything.",
        "Give records a purpose: planning, costing, credit and comparing treatments.",
        "Name aflatoxin as a mould risk that cannot be removed by cooking or storage.",
      ],
      commonMistakes: [
        "Storing grain at 20% moisture and blaming the bags when it moulds.",
        "Shelling damp maize, which cracks grain and invites weevils.",
        "Reporting plot yield as if it were the hectare yield.",
        "Keeping records only of sales, not of costs and operations.",
        "Assuming a later sale always means a better price; storage losses count too.",
      ],
      recap: [
        "State the signs that maize is ready to harvest and the moisture content at harvest. [3]",
        "Describe how maize cobs should be dried and stored on a smallholding. [5]",
        "A 0.04 ha plot yields 72 kg of dry grain. Calculate the yield in bags of 50 kg per hectare. [3]",
        "Explain why grain should not be shelled while damp. [2]",
        "State four items recorded in a farm diary and explain one use of production records. [4]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_4: Chapter = chapterFour;
