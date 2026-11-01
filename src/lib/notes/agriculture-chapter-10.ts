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

const fenceArt = artPanel([
  {
    src: "ag10-fence-construction.webp",
    alt: "A farm boundary fence of treated timber posts and steel droppers carrying four strained wires, with a strainer post and diagonal stay at the corner",
    caption: "Treated posts, droppers and strained wire",
  },
  {
    src: "ag10-windbreak.webp",
    alt: "A planted hedge and tree windbreak sheltering a field of young maize from the wind, with taller, greener plants in the sheltered strip",
    caption: "A living windbreak slows the wind",
  },
]);

const buildingArt = artPanel([
  {
    src: "ag10-building-materials.webp",
    alt: "A farm store built from concrete blocks with timber roof trusses, a stone lower wall and a corrugated metal roof",
    caption: "Blocks, timber, stone and a metal roof",
  },
  {
    src: "ag10-water-treatment.webp",
    alt: "A dam feeding a settling tank, a sand filter and a raised storage tank in series, connected by pipes",
    caption: "Dam, settling tank, filter, storage tank",
  },
]);

const plumbingArt = artPanel([
  {
    src: "ag10-plumbing-tap.webp",
    alt: "A cutaway of a tap showing the spindle, jumper and rubber washer pressing on the valve seat, with the packing gland around the spindle",
    caption: "The washer seals against the valve seat",
  },
  {
    src: "ag10-tools-machinery.webp",
    alt: "Hand tools on a workbench, including a saw, hammer, screwdriver, file, spanner and knapsack sprayer, with a mouldboard plough and disc harrow behind",
    caption: "Bench tools, and the implements they maintain",
  },
]);

const chapterTen: Chapter = {
  number: 10,
  title: "Farm Structures, Tools and Machinery",
  intro: `A farm is a set of structures, a store of water and a workshop of tools, and each one fails in a predictable way.\n\n**Fencing** keeps stock where the grazing plan needs them, while **hedges and windbreaks** shelter crops and soil from wind.\n\n**Building materials** are chosen for strength, cost, climate and the job, and no single material wins everywhere.\n\n**Water** must be caught, stored, treated and piped, and a dam wall must resist a pressure that grows with depth.\n\n**Tools and machinery** multiply a worker's output, but only if they are maintained and matched to the size and slope of the land.`,
  subheadings: [
    {
      title: "Fencing Posts and Construction",
      body: `### Why a Farm Is Fenced

A **boundary fence** marks the limit of the farm and keeps other people's stock out.

An **internal fence** divides paddocks for rotational grazing, so pasture can recover between grazings.

Fences also protect crops, water points, dams, young trees and stored chemicals.

A good fence controls animals without injuring them, and it must suit the species it holds.

### Choosing Posts

**Timber** posts are cheap, workable and traditional, but they rot and termites attack them.

**Steel** posts, such as angle iron or galvanised pipe, last longer but cost more and rust at the base.

**Concrete** posts are heavy, very durable and need no treatment, but they crack if hit and are hard to move.

**Plastic** posts suit electric fences, where insulation matters more than strength.

A post of 2.4 m is usually set one third of its length, about 0.8 m, into the ground.

### Spacing and Strainers

Posts are spaced 3 to 5 m apart for cattle, closer for sheep and pigs.

**Strainer posts** take the tension of the wire and must be braced with a diagonal stay.

Put strainers at every corner, at every gate, and on long straight runs every 100 to 200 m.

**Droppers** are light stakes between posts that stop the wires spreading apart.

### Treating Timber Posts

Untreated sapwood rots within a few years in wet soil.

**Seasoning** first drives out sap so that preservative can enter the wood.

**Pressure impregnation** with a copper-based preservative, or with CCA, pushes chemical deep into the timber.

**Hot and cold open-tank treatment** soaks the posts in preservative, and a coat of bitumen seals cut ends.

Charring the buried end is an old method, but it is less reliable than a proper preservative.

Treat the whole buried length, and never use waste engine oil, which pollutes soil and water.

### Building the Fence

Clear the line, peg it straight and set the strainers first.

Fix the bottom wire, then strain each wire in turn with a wire strainer and staple it.

Drive staples vertically along the grain, not across it, and leave the wire free to move.

Space the wires so the top one is at the height of the animal's shoulder.

### Types of Fence and Their Jobs

**Post and wire** is the standard cattle fence, with four to six plain wires.

**Barbed wire** deters cattle but tears horses and should not be used for them.

**Sheep netting** has small mesh at the bottom, with barbed or plain wires above.

**Chain link** is used for security around stores, workshops and homesteads.

**Electric fence** is cheap and movable, ideal for strip grazing and for pigs, which soon learn to respect it.

**Stone walls**, **timber paling** and **live hedges** are durable boundaries where local materials and labour allow.

### Gates, Grids and Corners

A field gate is 3.0 to 3.6 m wide so that a tractor and trailer can pass.

Hang the gate on a strainer, not on a line post, and fit it to swing clear of the roadway.

A **cattle grid** replaces a gate on a vehicle track, but it needs side fencing to stop animals walking round it.

At every corner, the fence pulls in two directions, so the bracing must be strongest there.

### Maintenance

Walk the fence line regularly and look for slack wires, broken droppers and leaning posts.

Re-strain wires that sag, and replace posts that move when pushed.

Clear grass and brush from electric fences, or the voltage leaks to earth.

Oil gate hinges, check the energiser and repair storm damage before stock escape.

### Worked Example: Posts and Cost

A boundary is 400 m long, with posts every 4 m.

Number of intervals = 400 ÷ 4 = 100, so posts = 100 + 1 = 101.

A 2.4 m post set 0.8 m deep stands 1.6 m above ground, which suits cattle.

Posts cost 101 × $6 = $606, and four wires need 4 × 400 = 1600 m at $0.12 = $192.

Five strainer sets at $15 add $75, and one gate costs $150, so the total is $1023.

### Fencing for Different Livestock

Cattle need a strong fence but tolerate plain wire and a moderate height.

Sheep need small mesh near the ground, because they push through gaps and rub under wires.

Pigs are rooted animals and need a low, strong electric wire plus a buried apron.

Poultry need fine mesh and a roof, since a fence alone does not stop foxes digging.

Goats climb and lean, so they need a tall, tight fence with a top wire.`,
      figure: fenceArt,
      groups: [
        {
          subTitle: "Posts and Their Treatment",
          bullets: [
            "**Timber:** cheap and workable, but rots and needs preservative treatment.",
            "**Steel:** strong and long-lasting, but rusts at the ground line.",
            "**Concrete:** very durable and heavy, with no treatment needed.",
            "**Treatment:** season, then pressure-impregnate or soak, and seal cut ends.",
            "**Setting depth:** about one third of the post length, in firm soil.",
          ],
        },
        {
          subTitle: "Matching the Fence to the Stock",
          bullets: [
            "**Cattle:** post and wire, four to six strands, posts every 4 to 5 m.",
            "**Sheep:** netting with a small mesh to stop rubbing and pushing.",
            "**Pigs:** electric wire low down, with a buried apron against rooting.",
            "**Horses:** plain or woven wire, never barbed, for safety.",
            "**Security:** chain link around stores and workshops.",
          ],
        },
        {
          subTitle: "Construction Sequence",
          bullets: [
            "**Clear and peg** the line before digging any hole.",
            "**Set strainers** at corners, gates and long runs, with stays.",
            "**Strain and staple** each wire, with staples along the grain.",
            "**Add droppers** to keep the wires at the right spacing.",
            "**Check** tension, gate swing and earth voltage, then record the repair.",
          ],
        },
      ],
      examinerTips: [
        "Name the stock species when recommending a fence type, since the choice depends on it.",
        "State why a post is treated, linking it to rot and termites in wet soil.",
        "Describe bracing at corners, because tension must be resisted there.",
        "Give post depth as a fraction of length, not as an arbitrary figure.",
        "For a cost question, show posts, wire, strainers and gate as separate lines.",
      ],
      commonMistakes: [
        "Recommending barbed wire for horses, which causes serious leg injuries.",
        "Driving staples across the grain, which splits the post and cracks the wire.",
        "Setting posts too shallow, so the fence lifts out under tension.",
        "Forgetting the extra post at the end of a run, giving 100 instead of 101.",
        "Ignoring electric fence earthing, then blaming the energiser for weak shock.",
      ],
      recap: [
        "State four reasons for fencing a farm. [4]",
        "Describe how a timber fence post should be treated before use. [3]",
        "Explain why a strainer post needs a diagonal stay. [2]",
        "A 300 m fence has posts every 5 m. Calculate the number of posts needed. [2]",
        "Recommend a fence type for a pig paddock and justify your choice. [2]",
      ],
    },
    {
      title: "Hedges and Windbreaks",
      body: `### What Shelter Does

Wind removes heat and water from plants and soil, so shelter changes the microclimate.

A **windbreak** slows the wind, which cuts evaporation and reduces moisture stress.

Shelter also stops soil drifting, protects seedlings from sandblasting and reduces lodging.

For livestock, a belt of trees gives shade and protection from chilling wind and rain.

### Hedge or Windbreak

A **hedge** is a living boundary, usually trimmed, dense and stock-proof.

A **windbreak** or **shelterbelt** is a planted strip of trees and shrubs grown for shelter, not for enclosure.

A hedge can act as a windbreak, and a windbreak can enclose a field, but the purposes differ.

Boundary hedges are cut hard; shelterbelts are allowed to grow tall.

### Species and Structure

In temperate areas, **hawthorn** is the classic hedge, with blackthorn, holly and privet.

In the tropics, **Leucaena**, **Gliricidia**, **Casuarina** and **Grevillea robusta** are common shelter species.

**Sisal** and **Euphorbia** make live fences that also resist livestock.

Avoid very thirsty species such as eucalyptus beside a small dam, and poisonous species beside a school.

A good belt has tall trees in the middle rows and dense shrubs on the windward edge.

### Designing the Belt

The shelter extends about 10 to 20 times the belt height downwind.

Some shelter also reaches 2 to 5 times the height upwind, which is why belts are spaced, not doubled.

A **porous** belt, roughly 40 to 60% open, filters the wind and gives the longest sheltered zone.

A solid wall forces air over the top and creates damaging turbulence behind it.

Plant the belt at right angles to the prevailing wind, with gaps for machinery and access.

### Establishment

Prepare a strip, clear weeds and plant at the start of the rains.

Use sturdy seedlings, plant them at the same depth as in the nursery, and firm the soil.

Fence the belt from livestock and protect seedlings with guards or thorn branches.

Replace failures in the first season, because gaps let the wind through.

### Maintenance

Trim hedges to keep them dense from ground level, since a thin base lets stock through.

Cut hedges in the dormant season and never trim a shelterbelt severely in a dry spell.

Coppicing and pollarding keep trees within bounds and supply fuelwood.

Keep a firebreak mown, remove rubbish, and fill gaps as soon as they appear.

### Wind and Crop Damage

Wind removes the still layer of air around a leaf, which raises transpiration.

It also drives sand and soil against seedlings, and it can flatten tall cereals near harvest.

Shelter reduces all three, and the effect is largest in the first few heights downwind.

Windbreaks are most valuable on light soils, on exposed slopes and near the coast.

### Shelter in a Grazing System

Plant shelterbelts along paddock boundaries rather than across the middle of a field.

That way the belt shelters stock and crop without blocking the movement of machinery.

Face the open side away from the prevailing wind, and put the water trough in the sheltered corner.

In hot climates, shade from the belt lowers heat stress and improves conception rates in cattle.

### Costs and Trade-offs

The belt takes land out of production, often 2 to 5% of a field.

Roots compete with crops for water and nutrients along both edges of the belt.

Trees can harbour birds and pests, and tall trees can shade a crop if planted on the sunny side.

Set those costs against the yield gain in the sheltered zone, which is often 10 to 20% for susceptible crops.

### Worked Example: The Sheltered Area

An 8 m tall windbreak shelters about 10 times its height downwind.

Sheltered width = 10 × 8 = 80 m.

A belt 150 m long therefore shelters 150 × 80 = 12,000 m², which is 1.2 ha.

If shelter raises yield by 15% on a 5 t/ha crop, the gain is 0.15 × 1.2 × 5 = 0.9 t.

The belt itself may occupy 0.075 ha, costing 0.075 × 5 = 0.375 t, so the net gain is about 0.53 t.

### Shelter for Livestock

A windbreak of trees or a planted earth bank can replace an expensive shed in mild climates.

It reduces wind chill, which lowers feed demand for warmth.

Shade from trees also lowers heat stress in dairy cows and increases milk yield in hot weather.

Move troughs and handling pens into the sheltered zone so animals use it.`,
      groups: [
        {
          subTitle: "Hedge or Shelterbelt",
          bullets: [
            "**Hedge:** living boundary, trimmed, dense and stock-proof.",
            "**Windbreak:** planted belt for shelter, often several rows deep.",
            "**Shelter zone:** about 10 to 20 times the height downwind.",
            "**Porosity:** 40 to 60% open filters wind better than a solid barrier.",
            "**Orientation:** at right angles to the prevailing wind.",
          ],
        },
        {
          subTitle: "Species and Uses",
          bullets: [
            "**Hawthorn and blackthorn:** stock-proof temperate hedges.",
            "**Leucaena and Gliricidia:** fast tropical shelter and fodder.",
            "**Casuarina and Grevillea:** tall tropical windbreak trees.",
            "**Sisal and Euphorbia:** living fences for stock.",
            "**Avoid:** thirsty species near dams and poisonous species near paths.",
          ],
        },
        {
          subTitle: "Establishment and Care",
          bullets: [
            "**Plant** at the start of the rains, into a weed-free strip.",
            "**Protect** seedlings from stock with fences or guards.",
            "**Trim** hedges to keep the base dense; leave the leader on young trees.",
            "**Fill gaps** early, because a gap funnels wind through the belt.",
            "**Keep a firebreak** mown and remove dry trash.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish shelter from enclosure when defining a hedge and a windbreak.",
        "Quote the shelter distance as a multiple of height, which shows understanding.",
        "Explain porosity by describing turbulence behind a solid barrier.",
        "Give a named species suited to the climate in the question.",
        "For evaluation, weigh the land lost against the yield gain in the sheltered zone.",
      ],
      commonMistakes: [
        "Saying shelter extends for a fixed number of metres regardless of height.",
        "Planting a solid wall of trees and expecting the best shelter.",
        "Ignoring root competition along the edges of the belt.",
        "Trimming a young tree's leader, which destroys its height and the shelter zone.",
        "Planting eucalyptus beside a small dam, where it competes for water.",
      ],
      recap: [
        "State four benefits of a windbreak to a crop field. [4]",
        "Distinguish between a hedge and a windbreak. [2]",
        "Explain why a porous windbreak shelters a longer strip than a solid one. [3]",
        "A windbreak is 6 m tall. Estimate the sheltered width downwind and explain your figure. [2]",
        "Give two costs of establishing a shelterbelt on a small farm. [2]",
      ],
    },
    {
      title: "Farm Building Materials",
      body: `### What a Farm Building Must Do

A farm building shelters stock, produce, feed, machinery or chemicals from sun, rain and wind.

It must also ventilate, so that damp and ammonia do not build up.

Hygiene matters in a dairy or poultry house, where surfaces must be washed and disinfected.

Security and fire resistance matter in a fertiliser or chemical store.

Cost, local availability, span and expected life decide which material is used.

### Timber

**Timber** is strong in tension and bending, light, easy to work and renewable.

It is used for roof trusses, rafters, purlins, doors, crates, stalls and flooring slats.

Timber must be seasoned and treated, or it rots, warps and is attacked by termites.

It burns, so a timber building needs care with welding, hay storage and electrical wiring.

### Concrete Blocks

**Concrete blocks** are strong in compression, durable, fireproof and moulded to a standard size.

They are used for walls, floors, water tanks, silos and the bases of buildings.

Blocks are heavy, so they need a firm foundation and a lintel over every opening.

Bare blockwork is porous and conducts heat, so it is usually rendered and painted.

### Metal

**Galvanised steel** is strong, light for its strength, and can span wide openings without internal supports.

Corrugated sheets are the commonest farm roofing, and steel is also used for trusses, gates, pens and tanks.

Metal rusts at cut edges and near fertiliser or silage, so it needs galvanising or painting.

It conducts heat, so a metal roof condenses water and makes a store hot unless it is insulated or ventilated.

### Stone and Brick

**Stone** is durable, strong and cheap where it can be quarried on or near the farm.

It is used for foundations, retaining walls, dam walls and the lower courses of buildings.

Stone is heavy, needs skilled labour and gives an irregular finish unless dressed.

**Brick** is uniform, fireproof and takes a good finish, but it is costly and brittle and needs mortar and skill.

### Earth and Thatch

**Earth** buildings use mud, adobe, rammed earth or wattle and daub.

They are cheap, use local material and keep a stable internal temperature.

They erode in rain, need frequent repair, and are vulnerable to termites and to damp rising from the ground.

**Thatch** from grass, reeds or sorghum stover is cheap and insulates well from heat.

Thatch is a fire risk, harbours rodents and insects, and needs a steep pitch and regular replacement.

### Choosing Between Materials

Match the material to the job: compression for walls, tension for roofs, insulation for stores.

Use what is locally available and repairable, since transport can cost more than the material.

Consider climate: metal roofs need insulation in the tropics, while earth walls need a damp-proof course.

Consider the life of the building and the maintenance the farmer can afford.

### Foundations, Floors and Ventilation

Every wall needs a **foundation** wide enough to spread the load into firm soil.

A concrete floor is easy to clean and keeps feed and grain dry, but it is cold for young stock.

A slatted floor lets waste fall through, which saves bedding and labour in pig houses.

**Ventilation** removes heat, moisture and ammonia, and it must do so without creating a draught.

Orient the building across the prevailing wind, with openings on the leeward side and a ridge vent above.

A damp building ruins feed, rusts machinery and spreads disease.

### Worked Example: Roofing Sheets

A store roof is 12 m long and 6 m wide, so its area is 12 × 6 = 72 m².

A sheet covers 3.0 × 0.9 = 2.7 m² before overlap.

Number of sheets = 72 ÷ 2.7 = 26.7, so 27 sheets are needed.

Add 10% for overlaps and cutting: 27 × 1.10 = 29.7, so buy 30 sheets.

At $12 per sheet the roof costs 30 × 12 = $360, before purlins, fixings and labour.

### Materials for Water Structures

Concrete, stone and galvanised steel also build the dam wall, settling tank, filter and storage tank.

Concrete resists water and can be shaped into a wall that thickens towards the base.

Steel tanks are quick to erect but need a level base and a rust-proof coating.

Masonry tanks are durable and cool, but heavy and slow to build.`,
      figure: buildingArt,
      groups: [
        {
          subTitle: "Properties and Uses",
          bullets: [
            "**Timber:** strong in bending, light and workable; trusses, doors, crates.",
            "**Concrete blocks:** strong in compression, fireproof; walls, floors, tanks.",
            "**Metal:** strong, spans wide, rusts; roofing, trusses, gates, tanks.",
            "**Stone:** durable and cheap locally; foundations, retaining walls, dams.",
            "**Brick:** uniform and fireproof, but costly; walls and chimneys.",
          ],
        },
        {
          subTitle: "Earth and Thatch",
          bullets: [
            "**Earth walls:** cheap, local and temperature-stable, but erode and need repair.",
            "**Damp-proof course** stops water rising into an earth or block wall.",
            "**Thatch:** cheap and insulating, but a fire risk that harbours pests.",
            "**Steep pitch** is needed so that thatch sheds rain quickly.",
          ],
        },
        {
          subTitle: "Choosing Well",
          bullets: [
            "**Job:** compression for walls, tension for roof members.",
            "**Climate:** insulate metal roofs; protect earth walls from rain.",
            "**Cost:** include transport, labour and maintenance, not just the material.",
            "**Repair:** prefer materials a local artisan can fix.",
            "**Life:** a cheap store that fails in five years is poor value.",
          ],
        },
      ],
      examinerTips: [
        "Name a specific use for each material, rather than saying it is strong.",
        "Balance each advantage with one limitation, since comparison questions need both.",
        "Link metal roofing to condensation and heat, which are farm-specific problems.",
        "For earth and thatch, mention termites and fire, the two standard drawbacks.",
        "In a roof calculation, add a waste allowance and state the final whole number.",
      ],
      commonMistakes: [
        "Saying concrete is strong in tension; it is strong in compression.",
        "Claiming galvanised steel cannot rust, when cut edges still corrode.",
        "Forgetting that thatch needs a steep pitch and a firebreak.",
        "Choosing brick for a remote farm without costing transport.",
        "Leaving a roof answer as 26.7 sheets instead of rounding up and allowing waste.",
      ],
      recap: [
        "State two properties and two uses of timber in farm buildings. [4]",
        "Explain why galvanised steel is widely used for farm roofs. [3]",
        "Compare earth and concrete blocks as wall materials. [4]",
        "A roof measures 10 m by 5 m and each sheet covers 2.5 m². Calculate the number of sheets, allowing 10% waste. [3]",
        "Explain why a metal roof may cause condensation inside a store. [2]",
      ],
    },
    {
      title: "Farm Water Supplies and Dams",
      body: `### Sources of Water

**Rainwater** collected from roofs is clean and cheap, but the supply is small and seasonal.

**Surface water** from rivers, streams and ponds is plentiful but needs treatment and may dry up.

**Groundwater** from wells, boreholes and springs is usually cleaner and more reliable, but drilling and pumping cost money.

**Mains water** is treated and dependable, and it is the most expensive per litre.

A **dam** or reservoir stores wet-season runoff for the dry months.

### Matching Quality to Use

Drinking water for people must be clear, odourless and free of pathogens and harmful minerals.

Livestock tolerate slightly more turbidity but not salinity, algae or faecal contamination.

Irrigation water may be turbid, but salt and sodium damage both soil and crop.

Water for spraying must be clean, because dirt blocks nozzles and some minerals reduce herbicide activity.

### Working Out Demand

Estimate demand per head per day, then multiply by numbers and add the household.

A dairy cow drinks 40 to 80 L a day, a beef animal 30 to 50 L, a sheep or goat 4 to 6 L.

A pig needs 10 to 20 L, and 100 layers need 20 to 30 L.

A person uses 20 to 50 L a day for drinking, cooking and washing.

Then add water for cleaning, spraying and losses, usually about 10%.

### Siting a Dam

Choose a site with a catchment that yields runoff, and soil with a high clay content.

The foundation must be firm, because a dam built on fissured rock or soft ground leaks or slips.

Keep the dam above the flood level of any nearby stream, and away from trees whose roots crack the wall.

Protect the catchment from erosion, sewage and pesticide drift.

Check what lies downstream, since a failed dam can flood homes and roads.

### Building an Earth Dam

Strip the topsoil from the foundation and cut a **core trench** along the centre line.

Fill the trench with puddled clay to form a cut-off that stops water seeping under the wall.

Build the wall in thin layers of moist soil, compacting each layer before the next.

Make the upstream face flatter than the downstream face, because it must resist water pressure.

Sow grass on the downstream face to stop erosion, and keep stock off the wall.

### Pressure and Why Dams Are Wide at the Base

Water pressure increases with depth, because each layer of water carries the weight above it.

The pressure at depth h is p = ρgh, where ρ is the density of water, 1000 kg/m³.

So pressure is small at the surface and greatest at the base of the wall.

The wall must therefore be thicker at the base, where the push is largest, and thinner at the crest.

A concrete **gravity dam** resists that push with its own weight, and an earth dam with its mass and flat slopes.

### Spillway, Freeboard and Safety

A **spillway** is a lined channel that carries flood water past the dam without overtopping it.

Without a spillway, the first heavy storm can cut a notch through the crest and destroy the dam.

**Freeboard** is the extra height between the normal water level and the crest, usually 0.5 to 1 m.

The crest should be wide enough for a vehicle, and the whole dam should be fenced against stock.

A draw-off pipe with a valve lets water out for use and allows the level to be managed.

### Maintenance

Inspect the dam after every heavy storm, looking for cracks, slips, seepage and burrows.

Repair the spillway lining and keep it clear of trash and vegetation.

De-silt the reservoir when capacity falls, and control erosion in the catchment.

Keep the fence and the grass cover intact, and never plough the downstream face.

### Worked Example: Pressure at Depth

A dam holds water 3.5 m deep, and water density is 1000 kg/m³, with g = 10 N/kg.

Pressure at the base: p = ρgh = 1000 × 10 × 3.5 = 35,000 Pa, or 35 kPa.

Pressure at 1 m depth: p = 1000 × 10 × 1 = 10,000 Pa, or 10 kPa.

So the base feels 3.5 times the pressure at 1 m, which is why the wall thickens with depth.

The total push per metre of wall is ½ρgh² = ½ × 1000 × 10 × 3.5² = 61,250 N, about 61 kN per metre.

### Worked Example: Roof Catchment

A roof measures 20 m by 10 m, so its plan area is 200 m².

Annual rainfall is 800 mm, which is 0.8 m.

Volume = 200 × 0.8 = 160 m³, which is 160,000 L.

Allow 20% loss to splashing, first flush and overflow: 160,000 × 0.80 = 128,000 L a year.

That averages 128,000 ÷ 365 ≈ 351 L a day, enough for a household but not for a dairy herd.`,
      groups: [
        {
          subTitle: "Sources and Their Limits",
          bullets: [
            "**Rainwater:** clean and cheap, but small and seasonal.",
            "**Surface water:** plentiful, but needs treatment and may dry up.",
            "**Groundwater:** cleaner and reliable, but costly to drill and pump.",
            "**Mains:** treated and dependable, but the most expensive.",
            "**Dams:** store wet-season runoff for the dry season.",
          ],
        },
        {
          subTitle: "Dam Design Points",
          bullets: [
            "**Core trench** of puddled clay cuts off seepage under the wall.",
            "**Compacted layers** give strength and low permeability.",
            "**Batter:** flatter upstream face, because pressure rises with depth.",
            "**Spillway** carries flood water past the dam.",
            "**Freeboard** of 0.5 to 1 m absorbs waves and storms.",
          ],
        },
        {
          subTitle: "Daily Water Needs",
          bullets: [
            "**Dairy cow:** 40 to 80 L; **beef cattle:** 30 to 50 L.",
            "**Sheep or goat:** 4 to 6 L; **pig:** 10 to 20 L.",
            "**100 layers:** 20 to 30 L.",
            "**Person:** 20 to 50 L for drinking, cooking and washing.",
            "**Add 10%** for cleaning, spraying and wastage.",
          ],
        },
      ],
      examinerTips: [
        "Give demand figures per head per day, then multiply, rather than guessing a total.",
        "Explain pressure with p = ρgh and state that it rises with depth.",
        "Link base thickness to the pressure distribution, not just to tradition.",
        "Name spillway and freeboard as separate safety features.",
        "When siting a dam, mention catchment, soil, foundation and downstream risk.",
      ],
      commonMistakes: [
        "Saying water pressure depends only on the volume of the reservoir.",
        "Making the dam equally thick top and bottom, which ignores the pressure gradient.",
        "Forgetting the spillway, then losing the dam in the first storm.",
        "Siting a dam on sandy or fissured ground without a clay core.",
        "Calculating human demand but forgetting livestock and cleaning water.",
      ],
      recap: [
        "State four sources of water on a farm and one limitation of each. [4]",
        "Explain why a dam wall is thicker at its base than at its crest. [3]",
        "Calculate the water pressure at a depth of 2.5 m (ρ = 1000 kg/m³, g = 10 N/kg). [2]",
        "A farm keeps 20 cows at 60 L per day. Calculate the daily requirement, adding 10% for waste. [3]",
        "Describe two safety features of a well-built earth dam. [2]",
      ],
    },
    {
      title: "Water Treatment, Tanks and Plumbing",
      body: `### The Treatment Train

Water for people passes through a series of steps, each removing something the next step cannot handle.

**Screening** removes leaves, grit and large debris at the intake.

**Settling** lets suspended silt sink, and **filtration** traps the finer particles.

**Disinfection** with chlorine, or boiling, kills the pathogens that remain.

Clear water is not automatically safe, so settling and filtration never replace disinfection.

### Settling

Water is held in a **sedimentation tank** long enough for particles to sink.

The detention time depends on tank volume and flow rate, and a slow flow gives clearer water.

A coagulant such as alum makes fine clay clump into **floc**, which settles faster.

The sludge at the bottom is drawn off and dried, and the tank is cleaned periodically.

### Filtration

A **sand filter** passes water down through layers of gravel and sand.

The gravel supports the sand, and the sand traps particles in the spaces between grains.

A slow sand filter also grows a biological layer that removes some bacteria.

When the filter clogs, it is **backwashed** by reversing the flow, then returned to service.

### Storage Tanks and Head

A **storage tank** holds treated water and supplies pressure by gravity.

The **head** is the height of the water surface above the outlet.

Pressure from head is p = ρgh, so 10 m of head gives about 100,000 Pa, or 100 kPa.

A tank 8 m above a tap therefore delivers about 80 kPa, enough for troughs and hoses.

### Distribution

Water leaves the tank through a main pipe and branches into sub-mains and troughs.

Gravity systems need the tank above every outlet, while pumped systems need a pressure switch or a break tank.

Fit valves to isolate sections, and place troughs on firm, drained ground.

Bury pipes below the frost line or lag them, and lay them with a steady fall so they can be drained.

### Pipe Joints

Plastic pipe is joined in three common ways.

**Solvent cement** softens the surfaces so they fuse: cut square, clean, apply primer, coat both parts, push, twist a quarter turn and hold.

**Push-fit** joints use a rubber O-ring, and the pipe must be cut square and marked to the correct depth.

**Compression fittings** squeeze a brass olive onto the pipe with a nut, and need a spanner but no glue.

Threaded metal joints use tape or paste on the thread, and must not be overtightened.

### Taps and Washers

Inside a tap, a **jumper** carries a rubber **washer** that presses onto a brass **valve seat**.

Turning the handle lowers the spindle and closes the gap, and the washer makes the seal.

A dripping tap usually means a worn or hardened washer, or a scored seat.

The **gland** or packing around the spindle stops water leaking past the handle.

### Changing a Washer

Isolate the supply at the stop valve or tank outlet, then open the tap to release pressure.

Unscrew the head, remove the jumper and lever out the old washer.

Fit a new washer of the same size, reassemble, and open the supply slowly.

Open the tap and check for drips at the spout and at the gland, then tighten the gland gently if needed.

### Finding and Fixing Leaks

A leak shows as a damp patch, a loss of pressure or a tank that empties overnight.

Isolate sections one at a time to find which branch is losing water.

For a buried pipe, a pressure test on a short length saves digging up the whole line.

Repair with a new joint rather than tape, and backfill carefully so stones do not crush the pipe.

### Worked Example: Pipe Flow

A pipe has an internal diameter of 25 mm, so its radius is 12.5 mm = 0.0125 m.

Cross-sectional area = πr² = π × 0.0125² = 4.91 × 10⁻⁴ m².

At a velocity of 1.2 m/s, flow = area × velocity = 4.91 × 10⁻⁴ × 1.2 = 5.89 × 10⁻⁴ m³/s.

That is 0.589 L/s, or about 35 L/min.

A 2000 L tank fills in 2000 ÷ 0.589 = 3395 s, which is about 57 minutes.

### Keeping the System Working

Clean the tank annually and keep the lid and insect mesh intact.

Repair leaks promptly, because a dripping joint wastes more water than it seems.

Drain and lag pipes before frost, and keep a box of washers, olives and a spare jumper.

The tools for this work are ordinary hand tools: a saw, file, spanner and screwdriver.`,
      figure: plumbingArt,
      groups: [
        {
          subTitle: "The Treatment Train",
          bullets: [
            "**Screening:** removes leaves, grit and debris at the intake.",
            "**Settling:** holds water still so silt sinks; coagulants speed it up.",
            "**Filtration:** passes water through gravel and sand to trap fines.",
            "**Disinfection:** chlorine or boiling kills remaining pathogens.",
            "**Storage:** keeps treated water covered and under pressure.",
          ],
        },
        {
          subTitle: "Joints and Taps",
          bullets: [
            "**Solvent cement:** fuses plastic pipe after cutting square and priming.",
            "**Push-fit:** an O-ring seals on a square-cut, marked pipe.",
            "**Compression:** a brass olive is crushed onto the pipe by a nut.",
            "**Tap washer:** seats on the valve seat to stop flow.",
            "**Gland packing:** stops water creeping up the spindle.",
          ],
        },
        {
          subTitle: "Plumbing Routine",
          bullets: [
            "**Isolate** the supply and release pressure before opening a fitting.",
            "**Cut square** and deburr, or the joint will leak.",
            "**Support** pipes so joints carry no bending load.",
            "**Drain down** before frost and lag exposed runs.",
            "**Keep spares:** washers, olives, jumpers and a spare stop valve.",
          ],
        },
      ],
      examinerTips: [
        "Order the treatment steps correctly: screening, settling, filtration, disinfection.",
        "Explain head as height, then convert it to pressure with p = ρgh.",
        "Name the washer and the valve seat when explaining a dripping tap.",
        "Describe isolation before repair, since safety marks are often available.",
        "Show area, velocity and flow as separate lines in a pipe-flow calculation.",
      ],
      commonMistakes: [
        "Saying filtration sterilises water; it only removes particles and some microbes.",
        "Confusing head with volume, then predicting pressure from tank size.",
        "Opening a tap fitting without isolating the supply.",
        "Using a push-fit joint on a pipe cut at an angle, which leaks under pressure.",
        "Overtightening a compression nut until the olive splits or the thread strips.",
      ],
      recap: [
        "Describe how water is treated by settling and filtration before storage. [4]",
        "Explain why a storage tank is raised above the taps it serves. [2]",
        "A tank surface is 6 m above a trough. Calculate the pressure at the trough (ρ = 1000 kg/m³, g = 10 N/kg). [2]",
        "Describe how to replace a dripping tap washer. [4]",
        "A 20 mm internal diameter pipe carries water at 1.0 m/s. Calculate the flow in litres per second. [3]",
      ],
    },
    {
      title: "Hand Tools and Their Maintenance",
      body: `### The Bench Kit

A farm workshop needs a small set of good tools, kept sharp and in one place.

The core is a **saw**, a **hammer**, a **screwdriver**, a **file** and a **spanner**.

Add a tape measure, a spirit level, pliers, a hacksaw, a chisel and a wheelbrace.

For crop work, add a hoe, a fork, a rake and a **knapsack sprayer**.

### The Saw

A saw cuts on the forward stroke, so let the teeth do the work and do not force it.

Support the timber on both sides of the cut and start with a small notch to guide the blade.

Cut on the waste side of the line, leaving the pencil mark on the keeper piece.

After use, wipe off resin with paraffin, dry the blade and rub it with oil.

### The Hammer

Hold a hammer near the end of the handle, and strike with the face, not the side.

Keep the head tight; a loose head is dangerous, so refit it or replace the hammer.

Never use a hammer as a lever or a chisel, because the handle and face will fail.

Check the wedge in the head and the condition of the handle before each job.

### The Screwdriver

Use a screwdriver that fits the slot exactly, or it will burr the screw head.

Drill a pilot hole in hard wood, and never use a screwdriver as a chisel or a pry bar.

Keep the tip square and file it flat when it rounds over.

Store screwdrivers dry, since rust roughens the tip and ruins the fit.

### The File

A file cuts on the forward stroke, so lift it slightly on the return.

Fit a handle before use, because a bare tang can pierce the hand.

Clean the teeth with a **file card**, and chalk the file when working soft metal.

Store files separately, since knocking them together blunts the teeth.

### The Spanner

Use the spanner that fits the nut exactly, or the corners will round off.

Pull the handle towards you rather than pushing, so the knuckle is not the stop.

Never extend a spanner with a pipe, because the extra leverage breaks the tool or the bolt.

Keep the jaws clean and oil the adjuster of an adjustable spanner.

### The Knapsack Sprayer

Check the tank, lid, strainer, hose, lance and nozzle before filling.

Fill through the strainer, add the chemical last, and never blow a blocked nozzle with your mouth.

Keep separate sprayers for herbicide and insecticide, because traces can damage a crop.

After use, triple-rinse the tank, spray the rinse water on the treated area, and wash the outside.

Store the sprayer upside down with the lid off, so it drains and dries.

### Calibrating a Sprayer

Sprayer output must match the label rate, or the crop is under- or overdosed.

Measure the nozzle output in litres per minute, the walking speed and the spray width.

Then calculate the area covered per minute and the volume applied per hectare.

Recalibrate whenever the nozzle, pressure or walking speed changes.

### Sharpening and Safety

A blunt hoe or machete wastes effort and is more dangerous than a sharp one, because it slips.

Sharpen at the existing angle, keep the file clean, and wear gloves.

Carry sharp tools with the edge down and never leave them lying on the ground.

Check that handles are tight before swinging any tool, and replace cracked ones at once.

### Worked Example: Sprayer Calibration

A nozzle delivers 1.5 L/min, the operator walks at 1.0 m/s, and the swath is 1.0 m wide.

Area covered per minute = 1.0 × 1.0 × 60 = 60 m².

Output per square metre = 1.5 ÷ 60 = 0.025 L/m², which is 25 mL/m².

Multiply by 10,000 m² per hectare: 25 × 10,000 = 250,000 mL, or 250 L/ha.

A 10 L tank covers 10 ÷ 1.5 = 6.7 minutes, which is 6.7 × 60 = 400 m², or 0.04 ha.

### Cultivation Hand Tools

The **hoe** is used for weeding, breaking the surface soil and making planting holes.

The **fork** lifts and loosens soil and handles manure, while the **rake** levels a seedbed.

A **machete** clears brush and harvests, and a **wheelbarrow** moves soil, compost and produce.

Keep the hoe and machete sharp, oil the fork tines and tighten the wheelbarrow nuts.

Wash off soil after use, dry the metal and store the tools hanging, never on damp ground.

### The Maintenance Routine

Clean every tool after use, because mud and sap cause rust and stiffness.

Dry steel tools and wipe them with oil before storage.

Sharpen hoes, machetes and saws on a whetstone or with a file at the correct angle.

Replace split handles and worn washers at once, rather than risking an injury.

Store everything under cover, off the floor and hanging where it can be found.`,
      groups: [
        {
          subTitle: "Using the Bench Tools",
          bullets: [
            "**Saw:** support the work, start a notch and cut on the waste side.",
            "**Hammer:** grip near the end and strike with the face, never the side.",
            "**Screwdriver:** match the tip to the slot and drill a pilot hole.",
            "**File:** fit a handle and cut on the forward stroke only.",
            "**Spanner:** use the exact size and pull, never extend the handle.",
          ],
        },
        {
          subTitle: "Sprayer Discipline",
          bullets: [
            "**Check** tank, strainer, hose, lance and nozzle before filling.",
            "**Fill** through a strainer and add chemical last.",
            "**Never** clear a nozzle with your mouth or a wire that damages it.",
            "**Triple-rinse** and spray the rinse water on the treated crop.",
            "**Store** upside down, dry and out of reach of children.",
          ],
        },
        {
          subTitle: "The Care Routine",
          bullets: [
            "**Clean:** remove soil, sap and chemical after every use.",
            "**Dry and oil:** stop rust on steel and pivot points.",
            "**Sharpen:** file or whetstone at the correct angle.",
            "**Replace:** fit new handles, washers and wedges before failure.",
            "**Store:** under cover, off the ground, in a fixed place.",
          ],
        },
      ],
      examinerTips: [
        "Give the maintenance step, not just the fault, when asked how to care for a tool.",
        "Name the safety reason for each rule, such as a bare file tang piercing the hand.",
        "For sprayers, mention calibration, rinsing and separate herbicide equipment.",
        "Show calibration as area per minute, then volume per hectare.",
        "Use the correct tool name, since a spanner is not a wrench in Cambridge answers.",
      ],
      commonMistakes: [
        "Using a screwdriver as a chisel or lever, which ruins the tip.",
        "Filing on the return stroke, which dulls the teeth quickly.",
        "Clearing a sprayer nozzle with the mouth, risking poisoning.",
        "Storing tools wet or on the floor, where they rust and go missing.",
        "Calibrating once and never again after changing nozzles or speed.",
      ],
      recap: [
        "State four steps in the routine maintenance of hand tools. [4]",
        "Explain why a file must have a handle fitted before use. [2]",
        "Describe how to clean and store a knapsack sprayer after spraying. [3]",
        "A nozzle delivers 1.2 L/min, the swath is 1.0 m and the speed is 1.0 m/s. Calculate the application rate in L/ha. [3]",
        "Explain why a separate sprayer should be kept for herbicides. [2]",
      ],
    },
    {
      title: "Farm Machinery and Mechanisation",
      body: `### From Hoe to Tractor

**Mechanisation** replaces human and animal power with machines.

The sequence runs from the hand hoe to the ox plough, then to the tractor and its implements.

Each step raises the area one worker can manage, but each also raises the capital and skill required.

The right level depends on farm size, soil, slope, crop and available capital.

### Advantages of Mechanisation

**Speed:** a tractor ploughs in hours what a team takes days to do.

**Timeliness:** planting and harvesting can be finished within the short window when conditions are right.

**Area:** one operator can manage a much larger farm.

**Heavy work:** deep ploughing, transport and earthmoving become practicable.

**Drudgery:** repetitive labour is reduced, which matters where labour is scarce or expensive.

**Uniformity:** machine work is more even in depth, spacing and application rate.

### Disadvantages of Mechanisation

**Cost:** purchase, fuel, insurance and interest are heavy, and machines are idle for much of the year.

**Repairs:** breakdowns need spares and a mechanic, often at the worst moment.

**Compaction:** heavy wheels crush soil, especially when it is wet, and a plough pan can form.

**Employment:** machines displace labour and can drive rural migration to cities.

**Unsuitable land:** small, steep, stony or fragmented plots cannot use large machines.

**Dependence:** fuel, imported spares and debt tie the farm to outside suppliers.

### The Mouldboard Plough

The **mouldboard plough** is a primary tillage implement that cuts, lifts and inverts the soil.

Its **share** cuts the furrow slice, and the curved **mouldboard** turns it over.

The **landside** bears against the furrow wall, and the **frog** joins the parts to the beam.

Inverting the soil buries weeds, crop residues and pests, and brings fresh soil to the surface.

Depth is set at about 20 to 25 cm, and the plough must be levelled to work at a constant depth.

### Cultivator and Harrow

A **cultivator** has spring or rigid tines that break clods and uproot weeds after ploughing.

It works shallower than the plough and leaves most residue on the surface.

A **harrow**, with discs, spikes or spring tines, breaks the remaining clods and levels the seedbed.

Harrows also cover seed, incorporate herbicide and smooth the surface before planting.

Using a harrow instead of a plough reduces compaction and erosion, which is why minimum tillage is popular.

### Planter and Ridger

A **planter** meters seed into the soil at a set spacing and depth.

It has a hopper, a metering unit, a seed tube, an opener and closing wheels.

Some planters also place fertiliser beside the seed, but never in contact with it.

A **ridger** forms ridges with two angled discs or boards, for drainage and for crops such as potatoes.

Ridging also earths up plants, controls weeds and makes harvesting easier.

### Maintenance and Storage

Clean soil and crop residue from the implement at the end of every day.

Grease every nipple, oil the linkages and check all nuts and bolts.

Inspect shares, discs and tines for wear, and replace or sharpen them before the next season.

Store implements under cover, on blocks, with paint on bare metal and belts slackened.

### Matching Machinery to the Farm

A machine must match the tractor's power, the field size and the soil.

Too large an implement overloads the tractor; too small wastes fuel and time.

Check the turning circle, gate widths and transport width before buying.

Hiring a contractor is often cheaper than owning a machine used for only a few days a year.

### Worked Example: Work Rate

A plough is 1.5 m wide and the tractor travels at 5 km/h.

5 km/h = 5000 ÷ 3600 = 1.39 m/s.

Area worked per second = 1.5 × 1.39 = 2.08 m², which is 2.08 × 3600 = 7500 m²/h, or 0.75 ha/h.

At 80% field efficiency, the real rate is 0.75 × 0.80 = 0.60 ha/h.

A 6 ha field therefore takes 6 ÷ 0.60 = 10 hours of ploughing.

### Worked Example: Cost of Ploughing

A contractor charges $45 per hour and ploughs 1 ha in 2.5 hours.

Cost per hectare = 45 × 2.5 = $112.50.

An ox team ploughs 0.15 ha a day at a cost of $15 a day.

Cost per hectare by ox = 15 ÷ 0.15 = $100.

The ox team is cheaper per hectare here, but far slower, which matters if the rains are about to break.`,
      groups: [
        {
          subTitle: "Advantages and Disadvantages",
          bullets: [
            "**Advantages:** speed, timeliness, larger area, less drudgery, uniform work.",
            "**Costs:** high purchase price, fuel, insurance and depreciation.",
            "**Soil damage:** compaction and plough pans, worst on wet ground.",
            "**Social cost:** displaced labour and rural migration.",
            "**Suitability:** poor on small, steep or stony plots.",
          ],
        },
        {
          subTitle: "Implements and Their Work",
          bullets: [
            "**Mouldboard plough:** primary tillage, inverts soil, buries weeds.",
            "**Cultivator:** breaks clods and kills weeds after ploughing.",
            "**Harrow:** levels, breaks clods, covers seed and herbicide.",
            "**Planter:** meters seed at a set spacing and depth.",
            "**Ridger:** forms ridges for drainage and for potatoes.",
          ],
        },
        {
          subTitle: "Maintenance Habits",
          bullets: [
            "**Clean** soil and residue off after each day's work.",
            "**Grease** nipples and oil linkages regularly.",
            "**Inspect** shares, discs and tines for wear.",
            "**Tighten** nuts and bolts, and check tyres and belts.",
            "**Store** under cover, on blocks, with bare metal painted.",
          ],
        },
      ],
      examinerTips: [
        "Give both sides when asked to evaluate mechanisation, then state a conclusion.",
        "Name the implement part and its function, such as the share cutting the furrow.",
        "Distinguish primary tillage from secondary tillage and give one implement for each.",
        "Show work rate as width × speed, then apply an efficiency figure.",
        "Link a disadvantage to a specific condition, such as compaction on wet clay.",
      ],
      commonMistakes: [
        "Listing only advantages when the question asks for advantages and disadvantages.",
        "Confusing a cultivator with a plough; only the plough inverts the soil.",
        "Forgetting field efficiency, then overestimating the area worked per hour.",
        "Saying mechanisation always raises yield, when management decides that.",
        "Ignoring the cost of spares and downtime in a comparison with ox power.",
      ],
      recap: [
        "State three advantages and three disadvantages of farm mechanisation. [6]",
        "Describe the function of the share and the mouldboard of a plough. [2]",
        "Explain the difference between primary and secondary tillage, naming one implement for each. [4]",
        "A 2.0 m implement travels at 6 km/h. Calculate its work rate in ha/h at 75% efficiency. [4]",
        "Explain why a contractor may be cheaper than owning a tractor on a small farm. [2]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_10: Chapter = chapterTen;
