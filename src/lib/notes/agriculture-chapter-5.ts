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

const weedArt = artPanel([
  {
    src: "ag05-weed-competition.webp",
    alt: "Young maize plants crowded by taller blackjack weeds, whose leaves shade the crop and whose roots compete for soil water",
    caption: "Weeds shade the crop and take its water",
  },
  {
    src: "ag05-chewing-pest.webp",
    alt: "A fall armyworm caterpillar and a grasshopper chewing ragged pieces from the edge of a maize leaf, showing hard biting mouthparts",
    caption: "Chewing mouthparts remove leaf tissue",
  },
]);

const pestArt = artPanel([
  {
    src: "ag05-biocontrol.webp",
    alt: "A ladybird beetle eating aphids on a leaf, with a pheromone trap hanging over the crop behind it",
    caption: "A predator at work, and a trap that counts moths",
  },
  {
    src: "ag05-sucking-boring.webp",
    alt: "Aphids with their stylets inserted into a leaf vein beside a maize stem cut open to show a stalk borer larva in its tunnel",
    caption: "Sap is sucked from the vein; the borer hides inside",
  },
]);

const diseaseArt = artPanel([
  {
    src: "ag05-disease-symptoms.webp",
    alt: "Three leaves side by side showing long fungal blight lesions, a wilting plant with brown vascular tissue, and fine viral streaks on young maize",
    caption: "Fungal lesions, bacterial wilt, viral streaks",
  },
  {
    src: "ag05-safe-spraying.webp",
    alt: "Overalls, rubber gloves, boots and a respirator laid out beside a knapsack sprayer and a locked chemical store",
    caption: "Protective clothing and a locked store",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Crop Protection",
  intro: `A crop is never grown alone. Weeds, insects and pathogens all compete for the same leaf, water and sugar, and every farmer fights them at once.\n\n**Crop protection** is the planned use of cultural, mechanical, biological and chemical methods to keep those losses small.\n\nThe chapter moves from the weed in the row, to the insect on the leaf, to the pathogen inside the stem, and ends with the safe handling of the chemicals that tie the system together.\n\nLearn the named examples well: blackjack, fall armyworm, aphids, maize stalk borer, bacterial wilt, maize leaf blight and maize streak virus.\n\nExaminers reward precise damage descriptions, correct control choices and the arithmetic of dilution and spray volume.`,
  subheadings: [
    {
      title: "Weeds and Weed Control",
      body: `### Blackjack: A Named Weed of Maize

**Blackjack** (Bidens pilosa), also called cobbler's pegs or farmer's friend, is a broad-leaved annual weed of maize, beans and vegetables.

It grows 0.3-1.5 m tall and ends in yellow flower heads followed by black seeds with two barbed prongs.

A single plant can shed 3000-6000 seeds, and each flush of rain brings a new wave of germination.

Blackjack is a serious weed because it emerges quickly, grows tall and competes with the crop for the whole season.

It is common on disturbed land, field edges, roadsides and poorly weeded plots.

### Harmful Effects on the Crop

Weeds compete for **light**, and blackjack soon overtops young maize, shading the lower leaves.

They compete for **water**: a vigorous stand can draw several litres a day from the root zone.

They compete for **nutrients**, especially nitrogen, so the crop looks pale, thin and stunted.

Blackjack also **harbours pests and diseases**, including aphids and whiteflies, which then move onto the crop.

Its seeds contaminate harvested grain and lower the grade and price.

Dense stands block spraying, harvesting and walking, which raises labour costs.

The combined effect is large: uncontrolled blackjack can cut maize yield by 30-50%.

### How Blackjack Spreads

The seed is the main unit of spread.

**Barbs** on the seed catch on clothing, animal fur and machinery, so seeds travel wherever people, cattle and tractors go.

Seeds also move short distances in **wind** and down slopes in **runoff water**.

**Contaminated manure**, unsterilised compost and unclean seed are common routes onto a clean field.

Blackjack seeds show **dormancy**, so one flush of germination never clears the soil seed bank.

Buried seeds survive several years, and each cultivation brings some back to the surface.

That is why a single hand weeding does not solve the problem.

### Striga: The Parasitic Weed

**Striga**, or witchweed, is a small purple-flowered weed of maize, sorghum and millet.

It attaches to the crop's roots and withdraws water, minerals and sugars, so the crop is stunted and yellow.

Striga produces hundreds of thousands of tiny seeds that survive in soil for 10-20 years.

The seeds spread in soil, manure, machinery and contaminated seed, and germinate only when they sense a host root.

Because the damage happens underground, the weed is often noticed only when the crop is already failing.

### Cultural Control

**Crop rotation** with a non-host such as a legume or fodder grass interrupts the weed's cycle and allows different control methods.

**Timely planting** and a dense canopy shade weeds early; narrow spacing and a good seed rate help.

**Cover crops and mulches** smother seedlings and conserve moisture.

**Clean seed** and well-rotted manure keep new seeds out of the field.

**Hand pulling before flowering** removes plants before seed set, which is the oldest rule of weed control.

**Intercropping** with beans or pumpkins covers bare ground and reduces the space a weed can colonise.

**Fallowing** with repeated shallow cultivation depletes the seed bank before the next crop.

### Mechanical Control

**Hand hoeing** is the standard method on smallholdings; two hoeings at two to three weeks and five to six weeks after planting keep maize clean.

**Hand pulling** is essential for blackjack that has already flowered, because a hoe can scatter ripe seed.

**Ploughing and harrowing** bury or uproot weeds before planting and bring roots to the surface to dry.

**Mowing or slashing** prevents seed set on field edges, paths and fences.

**Mulching** with crop residues suppresses seedlings and protects the soil.

Mechanical control is cheap in cash but heavy in labour, and it must be repeated after each flush of germination.

Cultivate when the soil is moist and the weeds are still small, because large weeds re-root easily.

### Chemical Control

**Herbicides** are classified by timing, selectivity and mode of action.

**Pre-emergence** herbicides are applied to the soil before weeds appear and kill germinating seedlings, for example atrazine in maize where it is registered.

**Post-emergence** herbicides are sprayed onto growing weeds, such as 2,4-D against broad-leaved weeds like blackjack in maize.

**Selective** herbicides kill weeds without harming the crop; **non-selective** ones such as glyphosate kill all vegetation and are used before planting or with a shielded sprayer.

**Contact** herbicides kill only the sprayed foliage, while **systemic** ones are absorbed and move to the roots, so they kill perennials.

Correct dose, water volume and nozzle are essential: too little fails, and too much wastes money and damages the crop.

Always read the label, observe the pre-harvest interval and spray when weeds are actively growing.

### Worked Example: Herbicide for a Small Field

A field measures 50 m by 40 m.

Area = 50 × 40 = 2000 m² = 0.20 ha.

The label recommends 2.5 L of product per hectare in 200 L of water.

Product needed = 2.5 × 0.20 = 0.50 L = 500 mL.

Water needed = 200 × 0.20 = 40 L.

A 20 L knapsack therefore needs 40 ÷ 20 = 2 full loads.

Each load carries 500 ÷ 2 = 250 mL of product.

Half-fill the tank with water, add the measured herbicide, top up and agitate before spraying.`,
      figure: weedArt,
      groups: [
        {
          subTitle: "Blackjack: Weed Profile",
          bullets: [
            "**Species:** Bidens pilosa, a broad-leaved annual of maize, beans and vegetables.",
            "**Seed:** 3000-6000 per plant, barbed, dormant and able to survive several years in soil.",
            "**Spread:** barbs on clothing and fur, wind, runoff, manure, machinery and unclean seed.",
            "**Damage:** competition for light, water and nitrogen, plus harbouring pests and contaminating grain.",
            "**Yield loss:** 30-50% in heavily infested maize if no control is applied.",
          ],
        },
        {
          subTitle: "Control Methods Compared",
          bullets: [
            "**Cultural:** rotation, timely planting, dense canopy, clean seed, mulching and hand pulling before flowering.",
            "**Mechanical:** hoeing, hand pulling, ploughing, harrowing, slashing and mulching.",
            "**Chemical:** pre-emergence soil herbicides and post-emergence foliar herbicides.",
            "**Integrated:** combine methods, because one pass never clears a dormant seed bank.",
            "**Timing:** act before flowering and before the weed overtops the crop.",
          ],
        },
        {
          subTitle: "Herbicide Vocabulary",
          bullets: [
            "**Selective:** kills weeds without seriously injuring the crop, such as 2,4-D in maize.",
            "**Non-selective:** kills all vegetation, such as glyphosate before planting.",
            "**Pre-emergence:** applied to soil before weed seedlings appear.",
            "**Post-emergence:** applied to weeds already growing.",
            "**Contact versus systemic:** contact kills sprayed foliage only; systemic moves inside the plant.",
          ],
        },
      ],
      examinerTips: [
        "Name the weed in full, blackjack or Bidens pilosa, and state that it is a broad-leaved annual.",
        "Link each harmful effect to a resource, such as light, water, nutrients or harvest quality.",
        "For spread, mention the barbed seed and at least three carriers, including clothing or animals.",
        "When comparing control methods, give one advantage and one limitation of each.",
        "Show the area conversion to hectares before any herbicide calculation.",
      ],
      commonMistakes: [
        "Describing weeds as only ugly; marks come from competition, harbouring pests and contaminating produce.",
        "Saying blackjack spreads by roots; it spreads mainly by barbed seed.",
        "Calling a pre-emergence herbicide a spray for weeds already showing; it acts on germinating seed.",
        "Mixing hectares with square metres in the dose calculation.",
        "Forgetting that hand pulling must happen before flowering to prevent seed set.",
      ],
      recap: [
        "Describe the harmful effects of blackjack on a maize crop. [4]",
        "Explain how blackjack seeds are spread from one field to another. [3]",
        "State three cultural methods of weed control and explain how each reduces competition. [3]",
        "Distinguish between selective and non-selective herbicides, giving one example of each. [4]",
        "A 0.5 ha field needs 2.0 L/ha of herbicide in 250 L/ha of water. Calculate the product and water required. [4]",
      ],
    },
    {
      title: "Biting and Chewing Pests",
      body: `### The Group and Its Mouthparts

**Biting and chewing** pests have hard **mandibles** that cut and tear plant tissue.

They remove pieces of leaf, stem, flower or fruit, so the damage is visible as holes, notches and missing tissue.

The group includes grasshoppers, locusts, termites, leaf miners, beetles and the larvae of moths.

**Fall armyworm** (Spodoptera frugiperda) is the most damaging cereal caterpillar in the region, and **locusts** remain the classic swarm pest.

Leaf miners are small larvae that chew tunnels inside the leaf, so the damage sits between the upper and lower epidermis.

### Life Cycle of Fall Armyworm

The female moth lays 100-200 eggs in a mass on the underside of a leaf, covered with grey scales.

**Eggs** hatch in three to five days.

The **larva** passes through six instars over 14-21 days.

Young larvae feed on the leaf surface and leave thin, papery window-pane patches.

Older larvae move into the **whorl** and chew ragged holes, leaving moist frass behind.

A raised white inverted Y on the head and four dark spots in a square on the tail segment identify the larva.

The **pupa** forms 2-10 cm deep in the soil and lasts 7-10 days.

The **adult** moth lives 10-21 days and lays several hundred eggs.

The whole cycle takes about 30-40 days in warm weather, so generations overlap and the pest is present all season.

### Effects on the Crop

Defoliation removes the **photosynthetic area**, so the plant makes less sugar and fills grain poorly.

Whorl feeding can destroy the **growing point**, killing the plant outright.

Attack at the seedling stage causes the greatest loss, because the plant has no reserves to replace lost leaves.

A heavy infestation can strip a young field in a few nights.

**Secondary infection** enters through wounds, and frass in the whorl encourages rot.

Yield losses of 20-50% are recorded, and complete loss occurs in severe outbreaks.

### Locusts and Grasshoppers

Locusts have an **incomplete metamorphosis**: egg, then nymph or hopper, then adult, with no pupa.

Eggs are laid in pods in moist soil, and hoppers march across the ground in bands.

Adults form **swarms** that fly with the wind and settle on green crops.

A swarm can eat its own weight in vegetation each day and strip a field in hours.

Grasshoppers are usually solitary but do similar damage along field margins and pastures.

Spread is by hoppers walking, adults flying and wind carrying swarms over long distances.

### How the Pest Spreads

**Flight** carries adult moths and locusts tens of kilometres at night, often aided by wind.

**Trade and transport** move infested seedlings, fodder and produce, carrying larvae and pupae.

**Crop residues** shelter pupae in stubble and soil until the next crop is planted.

**Alternate hosts** on field edges keep the population alive between seasons.

**Continuous maize** and staggered planting give an unbroken supply of food.

### Control

**Scouting** twice a week from emergence: inspect 10 plants at five points across the field.

**Hand-picking** and destruction of egg masses suit small plots and gardens.

**Ash, sand or sawdust** placed in the whorl irritates and kills young larvae.

**Biological control**: Trichogramma wasps parasitise eggs, Telenomus remus attacks armyworm eggs, and birds, ants and earwigs eat larvae.

**Bt** (Bacillus thuringiensis) is a bacterium that kills caterpillars which ingest it, and it is safe for people and predators.

**Chemical control** uses contact insecticides directed into the whorl, applied in the late afternoon when larvae are active.

**Cultural control** includes early uniform planting, resistant varieties, rotation with legumes and destruction of stubble.

Spray young larvae, because large larvae inside the whorl are much harder to reach.

### Worked Example: Scouting and Threshold

A farmer inspects five stations of 10 plants, so 50 plants in total.

Damaged plants at the stations are 2, 1, 3, 1 and 2, giving 9 damaged plants.

Infestation = 9 ÷ 50 × 100 = 18%.

If the threshold is 20% whorl damage, the crop is just below the spray threshold.

The farmer should re-check in three days rather than spray immediately.

If the next count is 13 of 50, that is 26%, and spraying is justified.

### Worked Example: Larvae per Plant

Ten plants are sampled and the larvae counted are 0, 1, 2, 0, 3, 1, 0, 2, 1 and 0.

Total = 10 larvae, so the average is 10 ÷ 10 = 1.0 larva per plant.

With 40,000 plants per hectare, that is 40,000 larvae per hectare.

A large larva eats about 10 g of leaf a day, so potential loss is about 400 kg of leaf per hectare per day.

That arithmetic explains why a field can look stripped within a week.`,
      groups: [
        {
          subTitle: "Recognising the Damage",
          bullets: [
            "**Chewing mouthparts:** hard mandibles cut and tear tissue, leaving holes and notches.",
            "**Window panes:** young armyworm larvae leave the leaf epidermis intact and eat the green tissue beneath.",
            "**Whorl damage:** ragged holes and moist frass in the funnel of a maize plant.",
            "**Dead heart:** central leaves wither when the growing point is destroyed.",
            "**Locust swarms:** whole fields stripped to stalks, with hoppers marching at the edges.",
          ],
        },
        {
          subTitle: "Fall Armyworm Life Cycle",
          bullets: [
            "**Egg:** 100-200 per mass, under the leaf, covered with grey scales, hatching in 3-5 days.",
            "**Larva:** six instars over 14-21 days; young larvae window-feed, older larvae enter the whorl.",
            "**Pupa:** in soil 2-10 cm deep for 7-10 days.",
            "**Adult:** moth lives 10-21 days and lays several hundred eggs.",
            "**Generation:** about 30-40 days, so several overlap in one season.",
          ],
        },
        {
          subTitle: "Control Options",
          bullets: [
            "**Scout:** count damaged plants and larvae twice a week before deciding to spray.",
            "**Cultural:** early uniform planting, resistant varieties, rotation and stubble destruction.",
            "**Biological:** Trichogramma and Telenomus wasps, predators, and Bt sprays.",
            "**Chemical:** contact insecticides into the whorl, late afternoon, aimed at young larvae.",
            "**Mechanical:** hand-pick egg masses and larvae on small plots.",
          ],
        },
      ],
      examinerTips: [
        "Name the mouthparts, mandibles, and say they cut and tear rather than suck.",
        "Describe the life cycle in order, egg, larva, pupa, adult, with one fact for each stage.",
        "Link each damage symptom to the plant part affected, such as whorl, growing point or leaf blade.",
        "Spray recommendations must state timing, target stage and placement, not just the chemical name.",
        "Bt is an ingestion poison, so say the larva must eat treated leaf to be killed.",
      ],
      commonMistakes: [
        "Classifying armyworm as a sucking pest; it chews tissue with mandibles.",
        "Spraying adult moths, which do not feed on the crop.",
        "Spraying at midday, when larvae shelter in the whorl and the chemical evaporates.",
        "Claiming pupae are on the leaves; they are in the soil or stubble.",
        "Ignoring the economic threshold and spraying a crop below it.",
      ],
      recap: [
        "Describe the life cycle of fall armyworm and state one control measure for each stage. [5]",
        "Explain how the mouthparts of a chewing pest cause damage to a maize leaf. [2]",
        "State four signs a farmer would look for when scouting for fall armyworm. [4]",
        "Explain why a contact insecticide must be directed into the whorl. [2]",
        "A farmer finds 12 damaged plants out of 60 sampled. Calculate the percentage infestation. [2]",
      ],
    },
    {
      title: "Piercing, Sucking and Boring Pests",
      body: `### Piercing and Sucking Mouthparts

A **stylet** is a needle-like bundle of mouthparts that pierces plant tissue and sucks sap.

Damage is not a hole: it appears as **curling, yellowing, stunting and distortion** of new growth.

Because the pest feeds on phloem sap, it removes sugars and amino acids and injects saliva, which is often toxic.

Many sucking pests also transmit **viruses** as they move from plant to plant.

Aphids, Bagrada bugs, mealybugs and scale insects all belong to this group.

Scale insects cover themselves with a waxy shield, which protects them from many contact sprays.

### Aphids on Beans and Vegetables

Aphids are 1-3 mm long, pear-shaped and soft-bodied, and they cluster on shoot tips and leaf undersides.

Most reproduce **asexually**: females give birth to live nymphs without mating.

A nymph matures in 7-10 days, so populations explode; one female can produce hundreds of descendants in a month.

When colonies become crowded, **winged forms** develop and fly to new plants.

Aphids excrete **honeydew**, a sticky sugar waste on which sooty mould grows, blackening leaves and reducing photosynthesis.

They transmit cucumber mosaic virus and groundnut rosette virus.

Ants protect aphids and farm their honeydew, so ant activity on a stem is a warning sign.

### Boring Pests: Maize Stalk Borer

**Busseola fusca**, the maize stalk borer, is a serious pest of maize and sorghum.

The female moth lays 30-100 eggs in rows between the leaf sheath and the stem.

The larva hatches, climbs to the whorl and then **bores into the stem**.

Inside, it tunnels upward and downward and packs frass behind it.

Damage appears as **dead heart** in young plants, when the central leaves wither, and as broken stems and lodging later.

The larva pupates in the stem base or stubble and emerges as a moth after 10-14 days.

There are usually two generations in a season.

### The American Bollworm

**Helicoverpa armigera** attacks cotton, tomato, maize and legumes.

The moth lays eggs singly on leaves, flowers and bolls.

The larva bores into the **cotton boll** or tomato fruit and feeds on seed and tissue.

A round entry hole with a plug of frass is the classic sign.

One larva can damage several bolls during its life.

Bollworm has developed **resistance** to many insecticides, so rotating chemical groups is essential.

### Effects and Spread

Sucking pests remove sap and distort growth; boring pests destroy vascular tissue and fruit.

Both reduce yield and quality, and both open wounds through which disease enters.

Spread is by **winged adults** flying and by wind carrying them.

Aphids also travel on seedlings, cut flowers, clothing and machinery.

Borers persist in **crop residues**, and ploughing stubble under or burning it reduces carry-over.

Continuous maize keeps borers supplied year after year.

### Control

**Systemic insecticides** suit aphids and other sucking pests, because the chemical enters the sap and is ingested with it.

**Contact insecticides** work on exposed borers before they enter the stem, but not after.

**Cultural control** includes rotation, destruction of stubble, early planting and resistant varieties.

**Biological control**: ladybirds and lacewings eat aphids, parasitic wasps attack borer larvae, and Bt kills caterpillars.

**Biotechnical control**: yellow sticky traps monitor aphids, while pheromone traps monitor bollworm and stem borer.

**Thresholds**: treat aphids when 20-30% of plants carry colonies, and borers when 10% of stems are infested.

Check leaf undersides during scouting, because that is where sucking pests hide.

### Worked Example: Stem Borer Incidence

A farmer samples five stations of 20 plants, so 100 plants in total.

Plants with dead heart or frass number 12.

Incidence = 12 ÷ 100 × 100 = 12%.

The threshold is 10%, so the field is above threshold.

If each infested plant loses 25% of its yield and potential yield is 4.0 t/ha:

Loss = 0.12 × 0.25 × 4.0 = 0.12 t/ha, about 120 kg/ha.

### Worked Example: Aphid Build-Up

One aphid produces eight daughters in 10 days, and each daughter does the same.

After 10 days there are 8 aphids, after 20 days 8 × 8 = 64, and after 30 days 8 × 8 × 8 = 512.

Starting from one individual, the colony passes 500 in a month.

That exponential growth is why weekly scouting matters more than a single spray.`,
      groups: [
        {
          subTitle: "Sucking Pests",
          bullets: [
            "**Mouthparts:** a stylet pierces the tissue and sucks phloem sap.",
            "**Damage:** curling, yellowing, stunting, honeydew and sooty mould.",
            "**Virus role:** aphids and leafhoppers transmit viruses while feeding.",
            "**Examples:** aphids, Bagrada bugs, mealybugs and scale insects.",
            "**Control:** systemic insecticides, predators and yellow sticky traps.",
          ],
        },
        {
          subTitle: "Boring Pests",
          bullets: [
            "**Maize stalk borer:** eggs in rows behind the leaf sheath; larva tunnels inside the stem.",
            "**Signs:** dead heart, frass at the entry hole, broken stems and lodging.",
            "**American bollworm:** bores into cotton bolls and tomato fruit, leaving a frass plug.",
            "**Overwintering:** larvae and pupae survive in stubble and crop residues.",
            "**Control:** stubble destruction, rotation, resistant varieties and systemic or well-timed sprays.",
          ],
        },
        {
          subTitle: "Diagnosis and Thresholds",
          bullets: [
            "**Look at new growth first:** distortion and curling point to sucking pests.",
            "**Open the stem:** a tunnel and frass confirm a borer, even when the outside looks healthy.",
            "**Count, do not guess:** express infestation as a percentage of sampled plants.",
            "**Act at the threshold:** 20-30% of plants with aphid colonies, 10% of stems infested by borers.",
            "**Rotate chemistry:** bollworm and aphids both develop resistance quickly.",
          ],
        },
      ],
      examinerTips: [
        "Describe the stylet and say sap is sucked from the phloem, not that tissue is chewed.",
        "For borers, name the entry point and the internal tunnel, because external symptoms alone lose marks.",
        "Link aphids to honeydew, sooty mould and virus transmission in one chain.",
        "Match the insecticide to the feeding site: systemic for sap feeders, contact for exposed stages.",
        "Use the threshold calculation to justify a spray decision rather than naming a chemical only.",
      ],
      commonMistakes: [
        "Calling aphid damage a hole; it is curling and yellowing from sap removal.",
        "Spraying a borer after it has entered the stem and expecting contact insecticide to work.",
        "Forgetting that aphids transmit viruses, so killing them late does not cure the crop.",
        "Treating scale insects with a contact spray that cannot penetrate the waxy cover.",
        "Confusing the maize stalk borer with the fall armyworm; one tunnels inside, the other chews the whorl.",
      ],
      recap: [
        "Describe how the mouthparts of an aphid cause damage to a bean plant. [3]",
        "Explain how aphids can reduce yield even when their numbers are small. [3]",
        "Describe the life cycle and damage of the maize stalk borer. [4]",
        "Explain why a systemic insecticide is more suitable than a contact insecticide for aphids. [2]",
        "In a sample of 100 maize plants, 14 show dead heart. Calculate the incidence and compare it with a 10% threshold. [3]",
      ],
    },
    {
      title: "Pest Control Methods: Chemical, Biological, Cultural",
      body: `### Chemical Control: Contact Action

A **contact pesticide** kills the pest where the spray lands.

It must hit the insect directly, so coverage of leaf undersides and the whorl is critical.

It does not move inside the plant and is washed off by rain.

Contact products suit exposed pests such as aphids on open leaves, young caterpillars and hoppers.

They are less effective against borers inside stems and scale insects under a waxy cover.

Spray droplets must be small enough to cover the leaf but not so fine that they drift.

### Chemical Control: Systemic Action

A **systemic pesticide** is absorbed through leaves or roots and translocated in the sap.

The pest is killed when it feeds, even if it was not sprayed directly.

Systemics suit **sucking pests** such as aphids, mealybugs and scale, and borers inside stems.

They give longer protection but leave residues, so the **pre-harvest interval** must be observed.

They can also reach bees through pollen and nectar, so never spray flowering crops in the morning.

Rotate **mode of action** groups to slow resistance, and never exceed the label dose.

### Choosing for Each Pest Group

Chewing pests: contact or ingestion poisons, with Bt for caterpillars, sprayed late afternoon.

Sucking pests: systemic or penetrating insecticides, with thorough underside coverage.

Boring pests: systemic products, or contact sprays timed before the larva enters the stem.

Soil pests: granules, treated seed or soil drenches rather than foliar sprays.

Always identify the pest first, because the wrong product wastes money and kills natural enemies.

### Biological Control

**Predators** eat pests: ladybirds and lacewings eat aphids, predatory mites eat spider mites, and birds and ants eat larvae.

**Parasitoids** lay eggs inside the pest: Trichogramma on moth eggs and Cotesia on borer larvae.

**Pathogens** cause disease: Bacillus thuringiensis, Beauveria bassiana fungus and nucleopolyhedrovirus.

**Classical** biocontrol introduces a natural enemy from the pest's home range.

**Augmentation** releases large numbers each season, while **conservation** protects the enemies already present.

Biological control is specific and safe but slower and sensitive to weather and broad-spectrum sprays.

### Biotechnical Methods

**Pheromone traps** use synthetic female sex scent to attract males.

They serve two purposes: **monitoring**, where counts time the spray, and **mass trapping** or **mating disruption**, which reduces mating.

**Sticky traps** in yellow or blue catch aphids, whiteflies and thrips.

**Light traps** attract night-flying moths and help monitor outbreaks.

These methods rarely control a heavy infestation alone; they support scouting and cut the number of sprays.

### Cultural Control

**Crop rotation** breaks the pest's life cycle; maize rotated with beans or a fodder legume starves stalk borers that survive only on cereals.

**Catch cropping** plants a highly attractive crop to draw pests away from the main crop, then destroys the trap with the pest on it.

Napier grass around maize pulls stem borer moths, and the grass can still be cut and fed to cattle.

**Intercropping** with legumes confuses host-finding and encourages natural enemies.

**Sanitation** means destroying crop residues, volunteer plants and alternate hosts.

**Resistant varieties**, timely planting and the correct plant population complete the package.

### Integrated Pest Management

**IPM** combines all methods and sprays only when the **economic threshold** is crossed.

Scout, identify the pest, record numbers, compare with the threshold, then choose the least disruptive control.

This reduces cost, slows resistance and protects natural enemies and pollinators.

A spray that kills the predator as well as the pest often makes the next outbreak worse.

### Worked Example: Spray Volume and Cost

A 0.6 ha field needs 250 L/ha of spray.

Water = 250 × 0.6 = 150 L.

A 20 L knapsack holds 150 ÷ 20 = 7.5 loads.

If one load takes 40 minutes, spraying takes 7.5 × 40 = 300 minutes, or 5 hours.

At 2.5 mL of product per litre, product = 2.5 × 150 = 375 mL.

If the product costs $12 per litre, chemical cost = 0.375 × 12 = $4.50 for the field.

### Worked Example: Pheromone Trap Density

The recommendation is five traps per hectare for monitoring.

For 2.4 ha, traps = 5 × 2.4 = 12 traps.

If traps are checked weekly for 12 weeks, that is 12 × 12 = 144 checks.

At five minutes per check, total labour = 720 minutes, or 12 hours.

The cost of traps and labour must be weighed against the value of the crop saved.`,
      figure: pestArt,
      groups: [
        {
          subTitle: "Chemical Choices",
          bullets: [
            "**Contact:** kills only where the spray lands; needs direct hit and good coverage.",
            "**Systemic:** absorbed and translocated; kills pests that feed on sap or inside stems.",
            "**Ingestion:** Bt and baits must be eaten; they suit caterpillars and slugs.",
            "**Resistance:** rotate mode-of-action groups and never use sub-lethal doses.",
            "**Residues:** observe the pre-harvest interval and avoid flowering crops at peak bee activity.",
          ],
        },
        {
          subTitle: "Biological and Biotechnical",
          bullets: [
            "**Predators:** ladybirds, lacewings and predatory mites eat pest eggs, nymphs and adults.",
            "**Parasitoids:** Trichogramma and Cotesia lay eggs in or on the pest.",
            "**Pathogens:** Bt, Beauveria and viruses infect and kill specific pests.",
            "**Pheromone traps:** monitor moth flight or disrupt mating.",
            "**Sticky and light traps:** catch flying insects and support scouting.",
          ],
        },
        {
          subTitle: "Cultural and IPM",
          bullets: [
            "**Rotation:** starves pests that survive only on one crop family.",
            "**Catch cropping:** attracts pests to a sacrificed strip that is then destroyed.",
            "**Sanitation:** removes stubble, volunteer plants and alternate hosts.",
            "**Resistant varieties:** the cheapest and most reliable single method.",
            "**Threshold:** spray only when the pest population justifies the cost.",
          ],
        },
      ],
      examinerTips: [
        "Define contact and systemic action by where the chemical moves, not by how strong it is.",
        "Match each pesticide type to a named pest group and explain the feeding route.",
        "For biological control, name a predator, a parasitoid and a pathogen.",
        "Catch cropping must include destroying the trap crop, or the pest simply moves across.",
        "Quote an economic threshold before recommending a spray.",
      ],
      commonMistakes: [
        "Saying systemic pesticides kill on contact; they must be absorbed and eaten.",
        "Recommending a contact spray for a borer already inside the stem.",
        "Describing rotation as a way to fertilise the soil only; its pest value is breaking the life cycle.",
        "Planting a catch crop and leaving it unsprayed and undestroyed all season.",
        "Ignoring resistance and using the same chemical group every spray.",
      ],
      recap: [
        "Distinguish between contact and systemic pesticides and give one suitable pest for each. [4]",
        "Describe how a pheromone trap can be used to reduce insecticide use. [3]",
        "Explain how crop rotation and catch cropping each reduce pest populations. [4]",
        "A 0.8 ha field requires 200 L/ha of spray. Calculate the number of 20 L knapsack loads. [2]",
        "Explain why broad-spectrum insecticides can make a pest problem worse. [3]",
      ],
    },
    {
      title: "Plant Diseases",
      body: `### How Disease Enters a Plant

Infection needs three things: a **susceptible host**, a **virulent pathogen** and a **favourable environment** — the disease triangle.

Pathogens enter through **natural openings** such as stomata and lenticels, through **wounds** made by insects, tools or wind, or by direct penetration.

Bacteria usually need a water film and a wound or natural opening.

Fungi germinate a spore on the surface and send a germ tube into the tissue.

Viruses need a **vector**, usually a sap-sucking insect, or mechanical transfer on tools and hands.

Remove any one corner of the triangle and the epidemic stalls.

### Bacterial Wilt of Tomato

**Ralstonia solanacearum** causes bacterial wilt of tomato and related crops.

The bacterium is soil-borne and enters through roots and wounds.

It multiplies in the **xylem** and blocks water movement to the leaves.

Symptoms begin as sudden wilting of the youngest leaves while they are still green, followed by yellowing and collapse.

A cut stem shows **brown vascular tissue**, and in water a milky **bacterial ooze** streams from the cut.

The plant dies, and the bacterium persists in soil, water and plant debris.

Spread is by contaminated soil, irrigation water, tools, infected seedlings and root contact.

Prevention includes clean seed and seedlings, rotation with cereals, raised beds, drainage, grafting onto resistant rootstock and disinfecting tools.

There is no chemical cure: rogue and destroy infected plants, solarise soil and avoid overhead irrigation.

### Fungal Disease: Maize Leaf Blight

**Exserohilum turcicum** causes northern corn leaf blight.

Spores land on a leaf, germinate in a water film and penetrate through stomata.

Lesions begin as small water-soaked spots and become long **cigar-shaped grey-green to tan lesions**.

Lesions coalesce, kill leaf tissue and cut photosynthesis, so grain fill is poor.

Warm, humid weather and long leaf wetness favour an epidemic.

Spores spread by wind and rain splash, and the fungus survives in crop residue.

Prevention includes resistant hybrids, rotation, burying or removing residue, wider spacing for airflow and balanced fertiliser.

Fungicide is applied at the first lesion stage, covering the upper leaves.

### Viral Disease: Maize Streak Virus

MSV is transmitted by **leafhoppers**, especially Cicadulina mbila, in a persistent manner.

The leafhopper feeds on sap and carries the virus from plant to plant, staying infective for weeks.

Symptoms are fine **chlorotic streaks** parallel to the veins, pale stunting and small or empty cobs.

Infection at the seedling stage causes the greatest loss, while late infection may barely reduce yield.

Spread is by winged leafhoppers and wind, plus infected volunteer maize and grass hosts.

Prevention includes resistant varieties, early planting to escape peak leafhopper numbers, removal of volunteer plants and weed control.

There is no cure for the virus; suppress vectors with seed treatment or foliar insecticide only where justified.

Cassava mosaic virus follows the same pattern, spread by whitefly and through infected cuttings.

### Diagnosis and Yield Loss

Identify a disease by **symptoms**, **signs** and the **pattern in the field**.

Bacterial wilt appears in patches along irrigation lines, blight spreads from lower leaves upward, and virus streaks are uniform on new leaves.

Record **incidence**, the proportion of plants affected, and **severity**, the proportion of tissue damaged.

This guides whether to rogue, spray or replant.

A laboratory test may be needed when symptoms are ambiguous, especially for viruses.

### Prevention as the First Line

**Resistant varieties** are the cheapest control.

**Clean planting material** and certified seed prevent introduction.

**Rotation** with non-hosts starves soil-borne pathogens.

**Sanitation** removes debris, disinfects tools and controls weeds and volunteer plants.

**Water management** avoids overhead irrigation, improves drainage and waters at the base.

**Nutrition and spacing** keep the canopy dry and the plant vigorous.

Chemical control works mainly against fungi; bacteria and viruses have few direct chemical options.

### Worked Example: Disease Incidence and Loss

A field has 300 plants, and 45 show streak symptoms.

Incidence = 45 ÷ 300 × 100 = 15%.

Healthy yield potential is 3.5 t/ha, and infected plants yield 40% less.

Yield loss = 0.15 × 0.40 × 3.5 = 0.21 t/ha, or 210 kg/ha.

Remaining yield = 3.5 − 0.21 = 3.29 t/ha.

### Worked Example: Fungicide Interval

A protectant fungicide lasts 10 days, and the crop has 40 days to harvest.

Applications at day 0, 10, 20 and 30 give four sprays.

The last spray is 10 days before harvest.

If the pre-harvest interval is 7 days, the programme is safe.

If the label requires 14 days, the day 30 spray is still safe, but a day 35 spray would not be.`,
      figure: diseaseArt,
      groups: [
        {
          subTitle: "Bacterial Wilt",
          bullets: [
            "**Pathogen:** Ralstonia solanacearum, soil-borne and water-spread.",
            "**Entry:** roots and wounds, then multiplies in the xylem.",
            "**Symptoms:** sudden green wilt, brown vascular tissue and milky ooze.",
            "**Spread:** soil, irrigation water, tools, seedlings and root contact.",
            "**Control:** clean seedlings, rotation, raised beds, resistant rootstock and roguing; no chemical cure.",
          ],
        },
        {
          subTitle: "Fungal Blight and Viral Streak",
          bullets: [
            "**Maize leaf blight:** Exserohilum turcicum, cigar-shaped lesions, wind and rain spread.",
            "**Blight control:** resistant hybrids, rotation, residue management and fungicide.",
            "**Maize streak virus:** leafhopper-vectored, fine chlorotic streaks and stunting.",
            "**MSV control:** resistant varieties, early planting, volunteer removal and vector suppression.",
            "**Diagnosis:** lesions, ooze and streak patterns distinguish the three groups.",
          ],
        },
        {
          subTitle: "Prevention Checklist",
          bullets: [
            "**Host:** grow resistant varieties suited to the local pathotypes.",
            "**Seed:** use certified, clean seed and healthy seedlings.",
            "**Rotation:** alternate with a non-host, usually a cereal after a broad-leaved crop.",
            "**Water:** avoid overhead irrigation and improve drainage.",
            "**Sanitation:** remove debris, disinfect tools and control volunteers.",
          ],
        },
      ],
      examinerTips: [
        "Name the pathogen and the crop, for example Ralstonia solanacearum in tomato.",
        "Describe entry, multiplication and blockage of the xylem for bacterial wilt.",
        "For fungal disease, mention spore germination, stomata and leaf wetness.",
        "For viruses, always name the vector, such as leafhoppers for maize streak virus.",
        "Distinguish prevention from control: prevention stops entry, control limits an established outbreak.",
      ],
      commonMistakes: [
        "Saying bacterial wilt can be cured with a fungicide; it is a bacterium and there is no cure.",
        "Confusing blight lesions with virus streaks; lesions are broad and cigar-shaped, streaks are fine lines.",
        "Forgetting the vector when describing a virus, which loses the transmission mark.",
        "Treating a viral disease with insecticide as a cure; it only reduces spread.",
        "Ignoring crop residue as a source of fungal inoculum.",
      ],
      recap: [
        "Describe the symptoms and mode of spread of bacterial wilt of tomato. [4]",
        "Explain how maize leaf blight infects a leaf and reduces yield. [4]",
        "Describe how maize streak virus is transmitted and state two control measures. [4]",
        "Explain why a virus disease cannot be controlled by spraying a fungicide. [2]",
        "In a field of 400 plants, 60 show disease symptoms. Calculate the incidence. [2]",
      ],
    },
    {
      title: "Safe Use and Storage of Farm Chemicals",
      body: `### Protective Clothing

**PPE** is the first barrier: cotton overalls, rubber gloves, boots, goggles and a respirator.

Read the label's hazard symbol and PPE instruction before opening the container.

Check gloves for holes and the respirator for a tight seal.

Never eat, drink or smoke while handling chemicals.

Wash hands and face with soap before breaks, and never wipe your face with a gloved hand.

Keep children and animals away from the mixing area.

### Correct Dilution and Mixing

Measure the product with a **graduated cylinder**, never a bottle cap.

Use the label rate per hectare or per litre of water, and never guess.

Half-fill the tank with clean water, add the measured product, then top up.

Agitate the tank, and add a surfactant only if the label allows it.

Mix outdoors or in a well-ventilated area, never in a kitchen or beside a well.

Prepare only the volume needed for the day, because a leftover mix cannot be stored safely.

### Worked Example: Dilution

The label says 50 mL of concentrate per 20 L of water.

Concentration = 50 mL ÷ 20 L = 2.5 mL/L.

As a percentage: 2.5 mL/L = 2.5 ÷ 1000 × 100 = 0.25% v/v.

For a 16 L knapsack: 2.5 × 16 = 40 mL.

For a 0.4 ha block at 200 L/ha: water = 80 L and product = 2.5 × 80 = 200 mL.

Check: 200 mL ÷ 80 L = 2.5 mL/L, matching the label.

### Precautions Before, During and After

**Before**: read the label, check the sprayer for leaks, wear PPE, note wind and rain, and warn neighbours and beekeepers.

**During**: spray downwind, keep the nozzle close to the target, never blow into a blocked nozzle, and stop if the wind rises.

**During**: avoid water bodies, flowering crops and areas where children or animals are working.

**After**: wash thoroughly, change clothes, wash PPE separately and record the product, rate, date and field.

Observe the **pre-harvest interval** and the **re-entry interval** printed on the label.

Triple-rinse empty containers, puncture them and dispose of them at an approved site.

### Avoiding Pollution When Cleaning

Never rinse a sprayer in a stream, pond or well.

Rinse over the treated field or a grass strip, using the rinse water as part of the next spray.

Use a **triple rinse**: fill one-tenth of the tank, shake, drain into the spray tank, and repeat three times.

Do not let concentrate spill onto soil; dig out and bury contaminated soil away from water.

Keep livestock out of recently sprayed fields.

Empty containers must never be reused for food or water.

### Safe Storage

Store chemicals in a **locked, dry, ventilated** store with a warning sign.

Keep the store away from houses, animal feed, food and water sources.

Store on shelves above floor level so spills and floods do not reach the containers.

Keep products in their **original labelled containers**, never in drink bottles.

Separate **herbicides** from insecticides and fungicides to prevent mix-ups.

Keep a stock record and dispose of expired products properly.

A small spill kit of sand, sawdust, a shovel and absorbent material belongs in the store.

### Spill and Emergency Response

If concentrate spills, keep people and animals away and stop it reaching drains or water.

Cover the spill with absorbent material, sweep it into a labelled container and bury it away from water.

Wash the area with water and detergent, and never let the washings run into a stream.

If chemical gets on the skin, wash immediately with plenty of soap and water.

If it gets in the eyes, rinse for 15 minutes and seek medical help.

Take the product label to the clinic so the correct treatment is given.

Record the spill, the product and the action taken.

### Flammable Storage

Fuels such as **petrol and diesel** are flammable and must be stored separately from pesticides.

Use approved metal or HDPE containers with tight caps, kept in a cool, shaded, bunded area.

No smoking, naked flames or mobile phones near fuel.

Keep a **CO₂ or dry powder extinguisher** nearby, and never use water on a fuel fire.

Store fuel away from the chemical store so a fire cannot release toxic fumes.

Refuel machinery outdoors with the engine off.

### Worked Example: Preparing a Spray Day

A farmer needs 200 L of spray at 2.5 mL/L.

Product = 2.5 × 200 = 500 mL.

Each 20 L knapsack takes 50 mL of product made up to 20 L.

Ten loads give 200 L and use 10 × 50 = 500 mL.

If the product is sold in 1 L bottles, one bottle treats 1000 ÷ 2.5 = 400 L.

Half the bottle remains for the next spray day, so it must be stored locked and labelled.`,
      groups: [
        {
          subTitle: "Personal Protection",
          bullets: [
            "**Clothing:** overalls, gloves, boots, goggles and a respirator that fits.",
            "**Before:** read the label, check equipment and warn neighbours and beekeepers.",
            "**During:** spray downwind, never blow into a nozzle and stop if the wind rises.",
            "**After:** wash thoroughly, change clothes and wash PPE separately.",
            "**Never:** eat, drink, smoke or reuse a chemical container for food or water.",
          ],
        },
        {
          subTitle: "Mixing Arithmetic",
          bullets: [
            "**Dose:** product per litre = total product ÷ total water.",
            "**Percentage:** mL/L ÷ 1000 × 100 gives % v/v.",
            "**Tank load:** product per load = rate per litre × tank volume.",
            "**Field:** water needed = spray volume per hectare × area in hectares.",
            "**Check:** divide product by water and compare with the label rate.",
          ],
        },
        {
          subTitle: "Storage Rules",
          bullets: [
            "**Chemicals:** locked, dry, ventilated store with a warning sign and a stock record.",
            "**Containers:** original labels, never drink bottles, stored above floor level.",
            "**Separation:** herbicides kept apart from insecticides and fungicides.",
            "**Fuels:** approved containers, bunded, shaded, away from ignition and from pesticides.",
            "**Fire:** CO₂ or dry powder extinguisher; never water on a fuel fire.",
          ],
        },
      ],
      examinerTips: [
        "Name the item of PPE and the hazard it protects against, such as gloves against absorption.",
        "Show dilution as a rate, 2.5 mL/L, then as a percentage, 0.25% v/v.",
        "Sequence precautions as before, during and after application, because the marks are ordered.",
        "When describing disposal, include triple rinsing, puncturing and an approved site.",
        "Separate flammable fuel storage from pesticide storage and give a reason.",
      ],
      commonMistakes: [
        "Measuring concentrate with a bottle cap instead of a graduated cylinder.",
        "Adding product to a full tank instead of half-filling with water first.",
        "Rinsing the sprayer in a stream, which pollutes the water supply.",
        "Storing pesticides in unlabelled drink bottles, where children may mistake them for juice.",
        "Keeping petrol beside insecticides in one unlocked shed.",
      ],
      recap: [
        "State four items of protective clothing and explain what each protects. [4]",
        "A label recommends 40 mL of concentrate per 16 L of water. Calculate the rate in mL/L and as a percentage. [3]",
        "Describe the precautions a farmer should take before, during and after spraying. [6]",
        "Explain how a farmer should clean a knapsack sprayer without polluting a nearby stream. [4]",
        "Describe how herbicides, insecticides and fuels should be stored on a farm. [5]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_5: Chapter = chapterFive;
