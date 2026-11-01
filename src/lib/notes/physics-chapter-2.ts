import type { Chapter } from "./types";

const IMG = "/notes/physics"

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

const particleArt = artPanel([
  {
    src: "ph02-particle-arrangement.webp",
    alt: "Three jars showing tightly packed, jumbled and widely scattered glowing particles",
    caption: "Particles in a solid, a liquid and a gas",
  },
  {
    src: "ph02-brownian-motion.webp",
    alt: "Bright specks of smoke jerking randomly inside a microscope chamber lit by a beam of light",
    caption: "Brownian motion of smoke particles in air",
  },
])

const heatTransferArt = artPanel([
  {
    src: "ph02-convection-currents.webp",
    alt: "Water circulating in rising and sinking loops as it is heated in a saucepan on a stove",
    caption: "A convection current in a heated pan",
  },
  {
    src: "ph02-vacuum-flask.webp",
    alt: "Cross-section illustration of a silvered vacuum flask keeping a hot drink steaming",
    caption: "A vacuum flask blocks all three routes",
  },
])

const gasLawArt = artPanel([
  {
    src: "ph02-syringe-compression.webp",
    alt: "A hand pressing the plunger of a syringe sealed around a trapped mass of air",
    caption: "Compressing a gas raises its pressure",
  },
  {
    src: "ph02-flask-heating-pressure.webp",
    alt: "A sealed rigid metal flask with a pressure gauge standing over a lit burner",
    caption: "Heated gas at fixed volume pushes harder",
  },
])

const chapterTwo: Chapter = {
  number: 2,
  title: "Thermal Physics",
  intro: `Thermal physics links moving particles to the warmth of a room, the pressure in a tyre and the energy in a hot drink.\n\n**Temperature** measures the average kinetic energy of particles; **heat** is energy in transfer from a hotter body to a cooler one.\n\nThis chapter builds the **kinetic particle model** and uses it to explain expansion, changes of state and gas pressure.\n\nYou will then master the two great energy-accounting equations, **specific heat capacity** and **specific latent heat**.\n\nIt closes with the **gas laws**, which tie pressure, volume and kelvin temperature together.`,
  subheadings: [
    {
      title: "The Particle Model of Matter",
      body: `### What the Model Claims

All matter is made of extremely small particles, which may be atoms, molecules or ions.

The particles are in **constant motion**, and the temperature of a substance measures their average kinetic energy.

Heating a substance raises the kinetic energy of its particles, so they vibrate or move far more vigorously.

Changes of state never alter the particles themselves: the molecules of ice, water and steam are identical.

Only the arrangement, separation and energy of the particles change.

### What Each State Looks Like at Particle Level

In a **solid**, particles vibrate about fixed positions in a regular arrangement, held by strong forces.

In a **liquid**, particles vibrate and slide past one another, so the liquid flows and takes the shape of its container.

In a **gas**, particles move freely and rapidly in random straight lines, filling any container open to them.

Gases compress easily because most of their volume is empty space; solids and liquids barely compress because their particles already touch.

### Brownian Motion: Evidence for the Model

**Brownian motion** is the constant, jerky zig-zag of smoke particles in air, seen through a microscope.

Invisible, fast-moving air molecules bombard each smoke particle unevenly from all sides.

The uneven bombardment shoves the visible particle about at random, which is direct evidence for the kinetic model.

### Diffusion and Evaporation

**Diffusion** is the net spreading of particles by their own random motion, from higher to lower concentration.

It is fastest in gases, slower in liquids and extremely slow in solids.

**Evaporation** happens from a liquid surface at any temperature, as the fastest particles escape the attractive forces.

The energy they carry leaves with them, so the average kinetic energy of the remaining liquid falls and it cools.

Evaporation is speeded up by higher temperature, larger surface area, a draught and lower humidity.

### A Density Check on Empty Space

A balloon holds 0.20 kg of gas in a volume of 0.50 m³, so density equals mass divided by volume.

That gives **0.40 kg/m³**, roughly 1/2500 of the density of water, showing how much empty space gas particles keep.

Perfume vapour crosses a sealed room in minutes: particles travel hundreds of metres per second, collide, and spread until evenly mixed.`,
      figure: particleArt,
      groups: [
        {
          subTitle: "The Three States Compared",
          bullets: [
            "**Solid:** fixed shape and fixed volume; particles vibrate about fixed positions in a regular arrangement.",
            "**Liquid:** fixed volume but takes the container's shape; particles slide past one another.",
            "**Gas:** no fixed shape or volume; particles move rapidly and randomly and fill the container.",
            "**Compressibility:** gases compress highly; solids and liquids almost not at all.",
            "**Forces between particles:** strong in solids, weaker in liquids, negligible in gases.",
          ],
        },
        {
          subTitle: "Evidence and Explanations",
          bullets: [
            "**Brownian motion:** smoke particles jitter randomly under a microscope, bombarded unevenly by invisible air molecules.",
            "Diffusion is faster at higher temperature and for lighter particles, so hydrogen spreads faster than oxygen.",
            "Gases compress because their particles are far apart; liquid and solid particles are already touching.",
            "**Evaporative cooling:** the fastest escaping particles lower the liquid's average kinetic energy.",
            "Changes of state break or form intermolecular bonds; the particles themselves never change.",
          ],
        },
        {
          subTitle: "Evaporation Compared with Boiling",
          bullets: [
            "Evaporation occurs at all temperatures; boiling occurs only at the boiling point.",
            "Evaporation happens only at the surface; boiling happens throughout the liquid.",
            "Boiling produces bubbles of vapour inside the liquid; evaporation produces none.",
            "Evaporation causes cooling; boiling needs a continuous energy supply to continue.",
          ],
        },
      ],
      examinerTips: [
        "Start mechanism answers with 'the particles...', because examiners credit particle behaviour, not 'the liquid gets hot'.",
        "In changes of state say which energy changes: constant temperature means constant kinetic energy, with bonds being broken.",
        "Define diffusion with both halves, from higher concentration to lower concentration, to earn the definition mark.",
        "Describe Brownian motion with three features, jerky, random and continuous, and name the invisible molecules as the cause.",
        "Use **random** precisely, meaning equal chance of any direction, in diffusion and Brownian motion answers.",
      ],
      commonMistakes: [
        "Claiming particles expand when heated; heating increases vibration, and it is the spacing between particles that grows.",
        "Saying boiling happens at any temperature; boiling occurs throughout the liquid at one fixed temperature.",
        "Writing that air is sucked into a syringe; higher external atmospheric pressure pushes it in.",
        "Stating particles spread from low to high concentration; the net movement is from high to low.",
        "Confusing temperature with heat; a spark is very hot but transfers almost no energy.",
        "Assuming molecules change when a solid melts; only arrangement and energy change.",
      ],
      recap: [
        "Describe the arrangement and motion of particles in a solid, a liquid and a gas. [6]",
        "Explain how Brownian motion provides evidence for the kinetic particle model. [3]",
        "Explain why evaporation causes cooling. [3]",
        "State two factors that increase the rate of evaporation and explain each with the particle model. [4]",
        "Explain, in terms of particles, why gases are easily compressed but liquids are not. [2]",
        "Describe an experiment to demonstrate diffusion in a gas. [3]",
      ],
    },
    {
      title: "Temperature, Thermal Expansion and Thermometers",
      body: `### Temperature and Heat Are Different

**Temperature** measures the average kinetic energy of the particles of a substance.

**Heat** is thermal energy in transfer from a hotter body to a cooler body.

Two objects at the same temperature are in **thermal equilibrium**, so no net heat flows between them.

### Why Substances Expand on Heating

Most substances expand when heated, because particles vibrate more vigorously and push each other slightly further apart.

Solids, liquids and gases all increase in volume as temperature rises.

Water is the famous exception between 0 °C and 4 °C: it contracts as it warms through this range.

That anomaly is why ice floats and why ponds freeze from the top down.

### The Bimetallic Strip

A **bimetallic strip** bends when heated because its two metals expand by different amounts.

The metal expanding more, such as brass, ends up on the outside of the curve.

In a thermostat the bending strip makes or breaks contacts, switching a heater on or off as feedback control.

### Thermometers and Their Properties

Every thermometer exploits a **thermometric property**, a physical quantity that changes measurably with temperature.

The Celsius scale is set by two fixed points, the ice point at 0 °C and the steam point at 100 °C.

The interval between the fixed points is divided into one hundred equal degrees.

### Reading a Scaled Thermometer

A liquid column measures 4.0 cm at 0 °C and 24.0 cm at 100 °C.

The scale rises 20.0 cm over 100 degrees, giving 0.20 cm per degree.

At 50 °C the length is 4.0 + 50 × 0.20 = **14.0 cm**.`,
      groups: [
        {
          subTitle: "Thermometer Types and Their Properties",
          bullets: [
            "**Liquid-in-glass:** property is the volume of the liquid; cheap, with a narrow bore for sensitivity.",
            "**Thermocouple:** property is the voltage between two junctions; wide range, fast response, very small probes possible.",
            "**Resistance thermometer:** property is the electrical resistance of a metal; accurate over a wide range.",
          ],
        },
        {
          subTitle: "Designing a Better Thermometer",
          bullets: [
            "**Sensitivity** is the change in reading per degree; a narrower bore or more bulb liquid raises it.",
            "**Range** is the span of temperatures that can be measured at all.",
            "**Linearity** means equal temperature changes give equal changes in the property, so scale marks sit evenly.",
            "**Responsiveness** is how fast the thermometer matches the object; small bulbs and thin glass respond quickest.",
            "A clinical thermometer has a narrow range of about 35 to 42 °C; a thermocouple spans hundreds of degrees.",
          ],
        },
        {
          subTitle: "Expansion in the Real World",
          bullets: [
            "Expansion gaps and rollers let bridges, railways and concrete roads lengthen in summer heat without buckling.",
            "Overhead power lines sag in heat and tighten in cold, so engineers hang them with slack.",
            "A tight jar lid loosens under hot water because the metal lid expands more than the glass.",
            "Water pipes burst in frost because ice occupies a larger volume than the liquid it froze from.",
            "Glassware cracks when heated unevenly, because hot and cold regions expand by different amounts.",
          ],
        },
      ],
      examinerTips: [
        "Contrast temperature and heat in one sentence: average kinetic energy versus energy transferred due to a temperature difference.",
        "Explain expansion through particles: they vibrate more and occupy more space; never say the material wants to expand.",
        "For a bimetallic strip name which metal expands more and place it on the outside of the bend.",
        "Define sensitivity with the phrase per degree to secure the definition mark.",
        "Use the phrase **no net heat transfer** when describing thermal equilibrium.",
      ],
      commonMistakes: [
        "Saying the particles themselves get bigger; only the spacing between them increases.",
        "Guessing which metal sits outside the curve on a heated bimetallic strip.",
        "Forgetting that water expands on freezing between 0 °C and 4 °C.",
        "Swapping the meanings of sensitivity and range.",
        "Reading the meniscus at an angle, which gives a parallax error.",
        "Letting the bulb touch the container wall, which may be hotter or colder than the liquid.",
      ],
      recap: [
        "Describe the difference between temperature and heat. [2]",
        "Explain, in terms of particles, why a metal bar expands when heated. [2]",
        "Explain how a bimetallic strip controls the temperature of an electric iron. [3]",
        "A liquid-in-glass thermometer has a narrow bore. Explain how this increases its sensitivity. [2]",
        "State two practical problems caused by thermal expansion and how engineers deal with them. [4]",
        "A thermometer column is 5.0 cm in melting ice and 25.0 cm in steam. Calculate its length at 40 °C. [3]",
      ],
    },
    {
      title: "Specific Heat Capacity",
      body: `### The Energy Account for a Temperature Rise

**Specific heat capacity** c is the energy needed to raise the temperature of 1 kg of a substance by 1 °C.

The equation is **E = mcΔθ**, with m in kilograms, Δθ in °C and c in J/(kg °C).

An electrical heater supplies **E = VIt**, so a combined experiment gives c = VIt/(mΔθ).

### Why Water's Value Is Unusually High

Water's specific heat capacity is about **4200 J/(kg °C)**, far above most substances.

It carries away large amounts of energy per kilogram with only small temperature changes.

That makes it excellent for central-heating systems and car cooling systems.

Coastal climates swing less than inland ones because the sea warms and cools slowly.

### The Definition Experiment

A known mass of the substance sits in an insulated container with an immersed electrical heater.

Measure voltage V and current I, so the power is P = VI, and record the heating time t.

A stirrer keeps every part of the sample at the same temperature before each reading.

Assuming all the electrical energy heats the substance, c = VIt/(mΔθ).

Heat lost to the container and air instead makes the measured value of c too high.

### Worked Examples

Heating 2.0 kg of water from 20 °C to 70 °C gives Δθ = 50 °C.

E = mcΔθ = 2.0 × 4200 × 50 = **420,000 J = 420 kJ**.

For 0.50 kg of oil warmed 45 °C by 45,000 J, c = 45,000 ÷ (0.50 × 45) = **2000 J/(kg °C)**.

A 12 V, 2.0 A heater warms 0.80 kg of liquid by 18 °C in 300 s, giving c = 7200 ÷ 14.4 = **500 J/(kg °C)**.

A 0.20 kg copper block at 100 °C drops into 0.10 kg of water at 20 °C in an insulated cup.

Heat lost by copper = heat gained by water: 77(100 − T) = 420(T − 20).

Solving gives 16,100 = 497T, so the final temperature T is about **32.4 °C**.`,
      groups: [
        {
          subTitle: "The Equations to Memorise",
          bullets: [
            "**Thermal energy:** E = mcΔθ, with E in joules and m in kilograms.",
            "**Electrical energy:** E = VIt, with V in volts, I in amperes and t in seconds.",
            "**Specific heat capacity:** c = E/(mΔθ), found from experiment.",
            "The unit of c is J/(kg °C); write the full unit in answers.",
          ],
        },
        {
          subTitle: "Improving the Experiment",
          bullets: [
            "Lag the container and add a lid to cut heat losses to the surroundings.",
            "Stir before reading so the whole sample shares one temperature.",
            "Start below room temperature and finish the same distance above it, so losses roughly cancel.",
            "Repeat and average, since one run can be spoiled by a draught.",
            "The assumption is that all the heater's energy heats the substance; in practice some escapes.",
          ],
        },
        {
          subTitle: "High c of Water in Daily Life",
          bullets: [
            "Car coolant and central-heating water transport much energy per kilogram circulated.",
            "Sea breezes form because land heats and cools faster than the sea.",
            "Deserts swing from scorching to freezing because sand has a low specific heat capacity.",
            "A kettle with 0.80 kg of water needs the water's mass in E = mcΔθ, not the kettle's.",
          ],
        },
      ],
      examinerTips: [
        "Memorise E = mcΔθ and rearrange it for E, m, c and Δθ before substituting any numbers.",
        "Δθ is the temperature change: from 15 °C to 45 °C means Δθ = 30 °C, not 45 °C.",
        "State the assumption no heat is lost before equating VIt to mcΔθ.",
        "For experiment questions list the measurements V, I, t, m and Δθ, then give two improvements.",
        "Give the unit J/(kg °C) in full, since a bare number loses the unit mark.",
      ],
      commonMistakes: [
        "Using the final temperature as Δθ instead of subtracting the initial temperature.",
        "Substituting mass in grams when the equation needs kilograms.",
        "Leaving time in minutes inside E = VIt instead of converting to seconds.",
        "Quoting water's c as 420 instead of 4200 J/(kg °C).",
        "Blaming the thermometer when results read high; energy escaped to the surroundings.",
        "Adding energies instead of equating them in mixing problems.",
      ],
      recap: [
        "Define specific heat capacity. [2]",
        "Calculate the energy to heat 3.0 kg of water from 25 °C to 100 °C, taking c = 4200 J/(kg °C). [3]",
        "A heater supplies 36,000 J to 0.50 kg of metal for a 40 °C rise. Calculate its specific heat capacity. [3]",
        "Describe an experiment to measure the specific heat capacity of a metal block using an electric heater. [5]",
        "Explain why water rather than oil is used as a car engine coolant. [2]",
        "A 250 W heater raises 0.50 kg of water by 30 °C in 420 s. Calculate c and state one assumption. [4]",
      ],
    },
    {
      title: "Latent Heat",
      body: `### Hidden Energy During a Change of State

When a substance melts or boils, energy keeps flowing in while the temperature stays constant.

The energy breaks intermolecular bonds and moves particles apart, raising their potential energy rather than their speed.

This hidden energy is called **latent heat**.

**Specific latent heat of fusion** Lf is the energy to melt 1 kg of solid at its melting point, with no temperature change.

**Specific latent heat of vaporisation** Lv is the energy to boil 1 kg of liquid at its boiling point.

Both use **E = mL**, with L measured in J/kg.

### Why Lv Is Much Larger than Lf

For water, Lv is about 2,260,000 J/kg while Lf is about 334,000 J/kg.

Vaporisation separates particles completely against every attractive force between them.

The expanding vapour also does work pushing back the atmosphere.

Melting only loosens the fixed arrangement, so it needs far less energy.

### Reading the Heating Curve

On a heating curve the sloping sections obey E = mcΔθ, because temperature is rising.

The flat plateaus at melting and boiling obey E = mL, because the state is changing.

### Worked Examples

Melting 0.20 kg of ice at 0 °C needs E = 0.20 × 334,000 = **66,800 J ≈ 67 kJ**.

Boiling away 0.50 kg of water at 100 °C gives E = 0.50 × 2,260,000 = **1.13 MJ**.

Converting 0.10 kg of ice at −10 °C into steam at 100 °C takes four stages.

Warming the ice costs 2100 J; melting costs 33,400 J.

Warming the water costs 42,000 J; boiling costs 226,000 J.

The total is **303,500 J ≈ 304 kJ**, with the boiling stage dominating.

A 100 W heater melts 0.020 kg of ice in 80 s, so Lf = 2000 ÷ 0.020 = **100,000 J/kg**.

That result sits far below the true value because energy was lost and gained through the surroundings.`,
      groups: [
        {
          subTitle: "The Equations and the Curve",
          bullets: [
            "**Fusion:** E = mLf for a solid changing to liquid at the melting point, or the reverse.",
            "**Vaporisation:** E = mLv for a liquid changing to gas at the boiling point, or the reverse.",
            "**Slopes of the heating curve:** use E = mcΔθ while the temperature rises.",
            "**Flats of the heating curve:** use E = mL while the state changes.",
            "L is in J/kg; convert given kJ/kg by multiplying by 1000.",
          ],
        },
        {
          subTitle: "Explaining Changes of State",
          bullets: [
            "Temperature stays constant because input energy raises particle potential energy, not average kinetic energy.",
            "Bond breaking during melting and boiling stores the supplied energy as potential energy.",
            "Freezing and condensing release the same Lf and Lv back to the surroundings.",
            "Orchard growers spray water at night; the freezing water releases latent heat and protects blossom.",
            "A cooling curve has a flat section at freezing while latent heat is given out.",
          ],
        },
        {
          subTitle: "Latent Heat in Daily Life",
          bullets: [
            "Each kilogram of sweat that evaporates removes about 2.26 MJ from the skin.",
            "Steam burns badly because condensing steam releases its large Lv into the skin.",
            "Refrigerators circulate a volatile liquid that absorbs Lv as it evaporates inside the cabinet.",
            "Ether on the skin feels cold because it evaporates rapidly, drawing energy from the body.",
          ],
        },
      ],
      examinerTips: [
        "Choose the equation from the graph region: slope means E = mcΔθ, flat means E = mL.",
        "Define latent heat with the clause without change of temperature, since that clause earns the mark.",
        "Name the correct latent heat: fusion is solid-liquid, vaporisation is liquid-gas.",
        "Explain flat sections in two halves, energy breaks bonds and kinetic energy stays constant.",
        "Show every stage of a multi-stage calculation on its own numbered line.",
      ],
      commonMistakes: [
        "Using E = mcΔθ during a change of state, where Δθ = 0 gives zero energy.",
        "Swapping Lf and Lv, for example using 334,000 J/kg to boil water.",
        "Believing the temperature rises while ice melts; it stays at 0 °C until melting is complete.",
        "Omitting the warming stages in an ice-to-steam question; sketch and label the whole curve first.",
        "Mixing up error directions: heat loss makes measured c too high but measured L too low.",
      ],
      recap: [
        "Define specific latent heat of vaporisation. [2]",
        "Calculate the energy to boil away 0.30 kg of water at 100 °C, taking Lv = 2.3 × 10⁶ J/kg. [2]",
        "Explain why boiling water stays at constant temperature while energy is continuously supplied. [3]",
        "Calculate the energy to turn 0.050 kg of ice at 0 °C into water at 20 °C. [4]",
        "Explain why a steam burn at 100 °C is worse than a water burn at 100 °C. [2]",
        "Describe how to measure the specific latent heat of fusion of ice using an electric heater. [4]",
      ],
    },
    {
      title: "Heat Transfer: Conduction, Convection and Radiation",
      body: `### Three Ways Heat Travels

Thermal energy always moves from hot to cold, and three mechanisms do the transferring.

**Conduction** transfers energy through a substance without the substance itself moving.

**Convection** transfers energy by the bulk movement of a liquid or a gas.

**Radiation** transfers energy by infrared electromagnetic waves and needs no medium at all.

Only radiation crosses a vacuum, which is how the Sun heats the Earth.

### Conduction in Terms of Particles

Particles at the hot end vibrate more vigorously and pass energy to neighbours by collisions.

In metals, **free electrons** also carry kinetic energy rapidly through the lattice, which makes metals excellent conductors.

This is why a metal spoon in hot soup burns your hand while a wooden one does not.

Metal at room temperature feels cold because it conducts heat away from your hand quickly.

### Convection Currents

Heated fluid expands, becomes less dense and rises through the cooler surroundings.

Cooler, denser fluid sinks to replace it, setting up a circulating **convection current**.

Convection occurs only in fluids, because solid particles cannot travel from place to place.

Radiators, boiling water in a pan and sea breezes all rely on convection.

### Infrared Radiation

All objects emit infrared radiation, and hotter objects emit far more of it each second.

**Dark, matt** surfaces are the best emitters and the best absorbers of radiation.

**Light, shiny** surfaces are poor emitters and poor absorbers; they reflect instead.

Infrared travels at the speed of light, 3 × 10⁸ m/s, and needs no particles to carry it.

### Comparing Two Surfaces

Two identical cans, one shiny and one matt black, hold equal masses of hot water.

The temperature of each can is recorded at equal time intervals and compared.

The black can cools faster, proving dark matt surfaces emit radiation best.`,
      figure: heatTransferArt,
      groups: [
        {
          subTitle: "The Three Mechanisms Compared",
          bullets: [
            "**Conduction:** needs a material medium, works best in solids; energy moves by particle collisions and free electrons.",
            "**Convection:** needs a fluid, liquid or gas; energy moves by the bulk circulation of warmed fluid.",
            "**Radiation:** needs no medium and crosses a vacuum; energy moves by infrared electromagnetic waves.",
            "Examples: a metal spoon in hot soup, water circulating in a boiling pan, the Sun warming the Earth.",
          ],
        },
        {
          subTitle: "Insulation Engineering",
          bullets: [
            "**Vacuum flask:** silvered walls reflect radiation; the vacuum stops conduction and convection; the stopper limits convection and evaporation.",
            "Cavity-wall and loft insulation trap air, a poor conductor, and prevent convection currents forming.",
            "Double glazing traps a layer of air, or a vacuum, between two panes of glass.",
            "Aluminium foil behind radiators reflects infrared radiation back into the room.",
            "Copper or aluminium pan bases conduct heat quickly; plastic handles insulate.",
          ],
        },
        {
          subTitle: "Why Trapped Air and Surfaces Matter",
          bullets: [
            "Air's particles are far apart, so conduction through it is very slow.",
            "Trapping air in fibres, foam or cavities also stops convection currents circulating.",
            "Matt black absorbs nearly all incident radiation; shiny silver reflects most of it back.",
            "A surface that absorbs well also emits well, which speeds cooling and heating.",
            "Bigger temperature differences and larger surface areas increase the rate of heat transfer.",
          ],
        },
      ],
      examinerTips: [
        "Match the mechanism to the medium: solids conduct, fluids convect, vacuums radiate; naming the medium often earns the first mark.",
        "Give convection as a three-step chain: expansion, lower density, rising.",
        "Structure vacuum flask answers by mechanism, one feature credited per mechanism.",
        "Mention both absorption and emission when a question concerns surface properties.",
        "In comparison experiments name the apparatus, what is measured and how the two cases are compared.",
      ],
      commonMistakes: [
        "Claiming convection happens in solids; their particles cannot flow.",
        "Writing that heat rises; it is the warmer, less dense fluid that rises.",
        "Believing infrared radiation needs air; it is the only mechanism that crosses a vacuum.",
        "Calling shiny surfaces good absorbers; they are good reflectors and poor absorbers.",
        "Saying metal is colder than wood at room temperature; both are the same temperature.",
        "Describing only the vacuum in a flask answer and ignoring silvering and stopper.",
      ],
      recap: [
        "Describe an experiment comparing the emission of infrared radiation from two surfaces. [4]",
        "Explain, in terms of particles, how energy is conducted along a metal bar. [3]",
        "Explain how a convection current forms when water is heated in a saucepan. [4]",
        "Explain how a vacuum flask keeps a drink hot, naming all three mechanisms. [5]",
        "Explain why a shiny kettle heats more slowly in sunshine than a black one. [2]",
        "Name the heat transfer that occurs through a vacuum and the radiation responsible. [2]",
      ],
    },
    {
      title: "The Gas Laws",
      body: `### Pressure From Collisions

Gas pressure comes from molecules colliding with the walls of their container.

Anything that makes the collisions more frequent or more forceful raises the pressure.

Three laws describe a fixed mass of gas, each holding one quantity constant.

### Boyle's Law at Constant Temperature

**Boyle's Law:** pV = constant, or p₁V₁ = p₂V₂, at constant temperature.

Halving the volume halves the distance a molecule travels between wall hits, so collisions double in frequency.

The pressure doubles while particle speeds stay unchanged.

A gas at 100 kPa in 300 cm³ compressed to 200 cm³ gives p₂ = 100 × 300 ÷ 200 = **150 kPa**.

### Charles's Law at Constant Pressure

**Charles's Law:** V/T = constant, or V₁/T₁ = V₂/T₂, at constant pressure.

Faster particles would raise the pressure, but the piston moves out until collision frequency falls back.

Volume then grows in direct proportion to the kelvin temperature.

### The Pressure Law at Constant Volume

**Pressure Law:** p/T = constant, or p₁/T₁ = p₂/T₂, at constant volume.

Heating makes every collision more forceful and more frequent, so the pressure climbs.

Together the three give the **combined gas law**, p₁V₁/T₁ = p₂V₂/T₂.

### Working in Kelvin

Temperature must be in kelvin: **K = °C + 273**, every single time.

A 2.0 L gas at 27 °C heated to 127 °C at constant pressure becomes 2.0 × 400 ÷ 300 = **2.67 L**.

Gas at 100 kPa and 20 °C in a sealed rigid flask heated to 80 °C reaches 100 × 353 ÷ 293 = **120 kPa**.

Gas at 200 kPa and 500 cm³ at 17 °C is changed to 400 kPa and 300 cm³.

Then T₂ = 290 × 1.2 = 348 K, which is **75 °C**.

### Absolute Zero and the Graphs

**Absolute zero**, 0 K or −273 °C, is where particle motion reaches its minimum and gas pressure would fall to zero.

Real gases liquefy and solidify before they ever reach it.

At constant temperature, p against V is a hyperbola, while p against 1/V is a straight line through the origin.

Lines of V against kelvin T, and p against kelvin T, are straight and pass through the origin.

Extrapolating any such line back to zero pressure always meets the axis at −273 °C, the evidence for absolute zero.`,
      figure: gasLawArt,
      groups: [
        {
          subTitle: "The Laws Summarised",
          bullets: [
            "**Boyle's Law:** constant temperature; p₁V₁ = p₂V₂; smaller volume means more frequent wall collisions.",
            "**Charles's Law:** constant pressure; V₁/T₁ = V₂/T₂; faster particles push the piston out.",
            "**Pressure Law:** constant volume; p₁/T₁ = p₂/T₂; collisions are harder and more frequent.",
            "**Combined Law:** p₁V₁/T₁ = p₂V₂/T₂ when no quantity is held constant.",
            "**Kelvin conversion:** K = °C + 273, applied before every substitution.",
          ],
        },
        {
          subTitle: "Kinetic Explanations in Full",
          bullets: [
            "Compressing a gas gives molecules half the distance between walls, so each wall is struck twice as often.",
            "Heating raises molecular speed, so each impact carries more momentum and impacts arrive more often.",
            "A free piston moves outward until the internal pressure again balances the atmosphere.",
            "Adding more molecules to a fixed volume raises pressure, exactly as pumping a tyre does.",
            "Real gases obey these laws only while they stay far from liquefaction.",
          ],
        },
        {
          subTitle: "Graphs of the Gas Laws",
          bullets: [
            "Pressure against volume at constant temperature is a downward curve, a hyperbola.",
            "Pressure against 1/volume at constant temperature is a straight line through the origin.",
            "Volume or pressure against kelvin temperature is a straight line through the origin.",
            "Against a Celsius axis the same lines cut the temperature axis at −273 °C.",
          ],
        },
      ],
      examinerTips: [
        "Convert every temperature to kelvin before substituting; this is the biggest source of lost marks.",
        "Identify the constant first: a sealed rigid container means the Pressure Law, constant temperature means Boyle, a free piston means Charles.",
        "Rearrange symbolically, then substitute, since method marks follow the rearrangement.",
        "Keep units consistent on both sides; kPa with kPa and cm³ with cm³ needs no conversion.",
        "For explanation questions name the collision change: more frequent for volume cuts, more forceful for temperature rises.",
        "Subtract 273 at the end only if the answer is required in Celsius.",
      ],
      commonMistakes: [
        "Substituting 27 instead of 300 K into a gas-law equation.",
        "Applying p₁/T₁ = p₂/T₂ when the volume is also changing.",
        "Assuming pressure doubles as volume halves even though the temperature changed.",
        "Reading a p against V graph as a straight line instead of a curve.",
        "Saying the molecules themselves expand when the gas is heated.",
        "Forgetting that real gases liquefy well before absolute zero is reached.",
      ],
      recap: [
        "State Boyle's Law and explain it using the kinetic theory of gases. [3]",
        "A gas occupies 400 cm³ at 120 kPa. Calculate its volume at 240 kPa at constant temperature. [2]",
        "A sealed rigid can holds gas at 17 °C and 100 kPa. Calculate the pressure at 87 °C. [3]",
        "Explain what absolute zero means and how gas experiments reveal its value. [3]",
        "Gas at 27 °C and 200 kPa occupies 3.0 L. Find the pressure at −23 °C in 2.0 L. [4]",
        "Describe the volume-kelvin temperature relationship at constant pressure and explain it with the kinetic model. [4]",
      ],
    },
  ],
}

export const PHYSICS_CHAPTER_2: Chapter = chapterTwo
