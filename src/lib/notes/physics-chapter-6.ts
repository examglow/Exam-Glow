import type { Chapter } from "./types";

const IMG = "/notes/physics";

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

const solarSystemArt = artPanel([
  {
    src: "ph06-solar-system.webp",
    alt: "Bright Sun at the centre with eight planets on elliptical paths of increasing size",
    caption: "The Sun and the eight orbiting planets",
  },
  {
    src: "ph06-planets-order.webp",
    alt: "Four small rocky planets near the Sun and four large gas giants far out",
    caption: "Rocky inner planets, gaseous outer planets",
  },
]);

const starLifeCycleArt = artPanel([
  {
    src: "ph06-star-life-cycle.webp",
    alt: "Cloud of gas contracting into a glowing star surrounded by swirling dust",
    caption: "A nebula collapsing into a protostar",
  },
  {
    src: "ph06-supernova-nebula.webp",
    alt: "Expanding colourful shell of debris around a dense central remnant",
    caption: "Supernova debris seeding new stars",
  },
]);

const redshiftArt = artPanel([
  {
    src: "ph06-redshift-galaxies.webp",
    alt: "Light spectra from nearby and distant galaxies with lines shifted toward red",
    caption: "Spectral lines stretched toward longer wavelengths",
  },
  {
    src: "ph06-expanding-universe.webp",
    alt: "Countless galaxies spreading apart across vast dark space",
    caption: "A Universe of billions of galaxies expanding",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "Space Physics",
  intro: `From inside a spacecraft to the edge of the observable cosmos, this topic applies gravity and light to space.\n\nWe start with **Earth's motion** and the cycles it produces, then travel outward across the **Solar System**.\n\nWe build the **accretion model**, use **orbital speed** and **light travel time**, and analyse real planetary data.\n\nFinally we look at **stars**, the **life cycle of a star**, and the **evidence that the Universe is expanding**.`,
  subheadings: [
    {
      title: "Earth, Its Tilted Axis and the Sky We See",
      body: `### Earth Spins and Gives Us Day and Night

Earth rotates on its axis once about every **24 hours**.

The axis is **tilted**, not upright, which matters for what follows.

Only the half facing the Sun is lit, so we see **day**; the other half is in shadow, giving **night**.

As Earth turns, the Sun appears to rise in the east and set in the west each day.

This apparent motion of the Sun is really our own rotation, not the Sun moving around us.

### Earth Orbits the Sun and Gives Us Seasons

Earth revolves around the Sun once about every **365 days**, one year.

Because the axis keeps the **same tilt direction** all year, each hemisphere leans toward or away from the Sun in turn.

When a hemisphere leans toward the Sun it receives more direct light and heat, giving **summer**.

A hemisphere leaning away receives slanted, weaker sunlight and shorter days, giving **winter**.

Seasons are caused by the **tilt**, not by Earth being closer to or further from the Sun.

### The Moon, Phases and a Month

The **Moon orbits Earth** about once every **month**, roughly 27 to 29 days.

We see the Moon gradually change shape, its **phases**, as the sunlit portion visible from Earth shifts.

A new Moon, first quarter, full Moon and last quarter mark one complete cycle of phases.

### Average Orbital Speed

Any body moving on a near-circular orbit travels a full circumference each period.

Average orbital speed uses the equation v equals two pi r divided by T.

Here r is the orbit radius and T is the time for one complete revolution.`,
      groups: [
        {
          subTitle: "Rotation, Revolution and Period",
          bullets: [
            "**Rotation**: Earth spins on its tilted axis once every **24 hours**, giving day and night.",
            "**Revolution**: Earth orbits the Sun once every **about 365 days**, giving the year.",
            "The Moon orbits Earth about once a **month**, producing the phases we observe.",
            "Day and night come from rotation, so the Sun only **appears** to cross the sky.",
            "Seasons come from the **fixed axis tilt**, not from changing distance to the Sun.",
          ],
        },
        {
          subTitle: "The Apparent Motion of the Sun",
          bullets: [
            "Earth turning east to west makes the Sun seem to rise east and set west.",
            "The lit hemisphere faces the Sun by day; the shaded one faces away by night.",
            "A tilted axis keeps pointing the same way in space throughout the year.",
            "Longer, more direct daylight in summer gives warmer weather than in winter.",
          ],
        },
        {
          subTitle: "Average Orbital Speed Equation",
          bullets: [
            "Distance travelled in one orbit equals the circumference **2 pi r**.",
            "Average orbital speed is v equals **2 pi r divided by T**.",
            "**T** is the orbital period, the time for one full revolution.",
            "**r** is the radius of the nearly circular orbit.",
            "Use consistent units, so r in metres and T in seconds gives v in metres per second.",
          ],
        },
      ],
      examinerTips: [
        "Separate cause from effect: state that the **tilt** produces the seasons, since many answers wrongly blame distance.",
        "When asked about the Sun crossing the sky, name Earth's **rotation** as the real cause.",
        "Quote v equals 2πr/T clearly and define both r and T before substituting values.",
        "For Moon phases, link the changing shape to the Moon's **position relative to Sun and Earth**.",
      ],
      commonMistakes: [
        "Claiming summer happens when Earth is closest to the Sun; distance is not the cause.",
        "Saying the Sun travels around Earth daily, rather than Earth rotating.",
        "Attributing seasons to the Moon or to the changing orbital distance.",
        "Confusing the rotation period (24 hours) with the revolution period (365 days).",
      ],
      recap: [
        "State how long Earth takes to rotate on its axis and orbit the Sun. [2]",
        "Explain, using the tilt of the axis, how Earth's orbit produces the seasons. [4]",
        "Describe how the Moon's orbit around Earth causes the phases. [3]",
        "Write the equation for average orbital speed and define each symbol. [3]",
      ],
    },
    {
      title: "Tour of the Solar System",
      body: `### The Sun and Eight Planets

The Solar System holds **one Sun**, the central star, with everything else orbiting it.

Eight planets orbit the Sun in order: **Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune**.

The inner four are small, dense and **rocky**; the outer four are large **gas giants**.

The Sun contains most of the Solar System's mass, which is why planets orbit it.

### Dwarf Planets, Asteroids and Comets

Between Mars and Jupiter lies the **asteroid belt**, many rocky bodies left over from formation.

**Dwarf planets**, such as Pluto and Ceres, orbit the Sun but have not cleared their paths.

**Comets** are icy bodies on long elliptical orbits that grow glowing tails near the Sun.

A comet's tail points away from the Sun, driven by radiation and the solar wind.`,
      figure: solarSystemArt,
      groups: [
        {
          subTitle: "The Planets in Order",
          bullets: [
            "**Mercury, Venus, Earth, Mars** are the four small inner rocky planets.",
            "**Jupiter, Saturn, Uranus, Neptune** are the four large outer gas giants.",
            "Memorise the order, as sequence questions award marks for correct placement.",
            "Orbital radius increases from Mercury nearest the Sun to Neptune furthest out.",
          ],
        },
        {
          subTitle: "Small Bodies of the System",
          bullets: [
            "The **asteroid belt** sits between Mars and Jupiter and holds countless rocky bodies.",
            "**Dwarf planets** orbit the Sun but have not cleared their orbital neighbourhood.",
            "**Comets** are ice and dust on stretched orbits, forming tails when warmed by the Sun.",
            "Comet tails point **away from the Sun**, not behind the comet's motion.",
          ],
        },
        {
          subTitle: "Why the Sun Dominates",
          bullets: [
            "The Sun holds the great majority of the Solar System's total **mass**.",
            "Its strong gravity keeps planets, asteroids and comets bound in orbit.",
            "This mass dominance is why everything else orbits the Sun rather than vice versa.",
          ],
        },
      ],
      examinerTips: [
        "List the eight planets in exact order and spelling; a single misplaced planet loses the marks.",
        "Distinguish **rocky inner** from **gaseous outer** planets, since this contrast is often tested.",
        "For comets state both the icy composition and that the tail points away from the Sun.",
        "Describe a dwarf planet as orbiting the Sun but not having cleared its path.",
      ],
      commonMistakes: [
        "Calling Pluto the ninth planet instead of a dwarf planet.",
        "Placing the asteroid belt between Jupiter and Saturn rather than Mars and Jupiter.",
        "Drawing a comet tail behind the comet instead of pointing away from the Sun.",
        "Thinking the Sun is a planet or that Earth is the system's centre.",
      ],
      recap: [
        "List the eight planets in order from the Sun. [4]",
        "State two differences between the inner and outer planets. [2]",
        "Describe the composition and orbit of a comet and the direction of its tail. [3]",
        "Explain why other bodies in the Solar System orbit the Sun. [2]",
      ],
    },
    {
      title: "Formation of the Solar System: The Accretion Model",
      body: `### From Cloud to Disc

The **accretion model** explains how the Sun and planets formed from a vast cloud of **interstellar gas and dust**.

**Gravity** pulled this cloud inward, and as it collapsed it began to spin and flatten.

The spinning material gathered into a flat **accretion disc** around the hot central protostar.

### Building Upward by Accretion

Within the disc, grains collided and stuck together, growing into ever larger bodies.

This gradual build up of bigger objects from smaller ones is called **accretion**.

Largest bodies cleared their zones and became planets; leftovers became asteroids and comets.

### Why Inner Planets Are Rocky

Near the young Sun it was **hot**, so light gases and ices were driven outward.

Only dense rock and metal could condense there, so the inner planets grew small and **rocky**.

Farther out it was **cold**, so gases and ices could condense in huge amounts.

The outer bodies therefore grew large and **gaseous**, capturing thick hydrogen and helium envelopes.`,
      groups: [
        {
          subTitle: "Stages of the Accretion Model",
          bullets: [
            "Start with a cloud of **interstellar gas and dust**.",
            "**Gravity** pulls the cloud inward and it collapses.",
            "The spinning cloud flattens into an **accretion disc**.",
            "Grains stick together by **accretion**, growing into planets.",
            "Leftover material becomes asteroids and comets.",
          ],
        },
        {
          subTitle: "The Temperature Gradient",
          bullets: [
            "The inner disc was **hot**, so only rock and metal condensed.",
            "Light gases and ices were pushed outward by the Sun's heat.",
            "The outer disc was **cold**, so gases and ices could condense.",
            "This explains small **rocky inner** and large **gaseous outer** planets.",
          ],
        },
        {
          subTitle: "Key Vocabulary to Quote",
          bullets: [
            "Use the word **accretion** itself, meaning growth by accumulation.",
            "Name **gravity** as the collapsing agent of the cloud.",
            "Refer to the **accretion disc** as the flattened spinning structure.",
            "Mention **condensation** of rock inner and gas outer.",
          ],
        },
      ],
      examinerTips: [
        "Always credit **gravity** as the cause of the cloud's collapse, since that word earns a mark.",
        "Link the rocky-versus-gaseous split to the **temperature gradient**, not to composition chance.",
        "Give the stages in order so a sequence answer shows cloud, disc, accretion, planets.",
        "Say light gases could not condense near the hot Sun to justify why inner planets lack them.",
      ],
      commonMistakes: [
        "Saying planets formed from a solid block breaking apart rather than gradual accretion.",
        "Attributing the inner rocky composition to random chance instead of temperature.",
        "Forgetting that the cloud must spin and flatten into a disc.",
        "Claiming ices and gases condensed close to the hot young Sun.",
      ],
      recap: [
        "Describe how a cloud of gas and dust forms a star and planets by accretion. [4]",
        "State the role of gravity and the accretion disc in formation. [2]",
        "Explain why the inner planets are rocky while the outer planets are gaseous. [4]",
        "Define accretion in the context of planet formation. [1]",
      ],
    },
    {
      title: "Orbits, Gravity and Orbital Speed",
      body: `### Elliptical Orbits Off-Centre

Planetary orbits are **elliptical**, slightly stretched circles rather than perfect ones.

The Sun sits **off-centre**, at a focus of the ellipse, not at the exact middle.

This means a planet's distance from the Sun changes during each orbit.

### Gravitational Field Strength

**Gravitational field strength** depends on the **mass** of the body producing the field.

It **decreases with distance** from that mass, so a distant planet feels weaker pull.

The more massive the body, the stronger the field it creates around itself.

### Why Orbital Speed Falls with Distance

The Sun holds most of the system's mass, so its gravity keeps every planet in orbit.

A planet closer to the Sun feels a **stronger field**, so it must travel **faster** to stay in orbit.

Farther out, the field is weaker, so **orbital speed decreases** with increasing orbital radius.

### Faster When Closer: Energy Conservation

On an ellipse, a planet speeds up as it swings **near the Sun** and slows as it moves **away**.

Near the Sun, gravitational potential energy is lowest, so **kinetic energy is greatest**.

Further out, potential energy rises and kinetic energy falls, so the planet moves more slowly.

Total energy stays constant, so the change in speed is explained by **conservation of energy**.`,
      groups: [
        {
          subTitle: "Gravity and Field Strength",
          bullets: [
            "**Gravitational field strength** grows with the source **mass**.",
            "It **falls as distance increases** from the source mass.",
            "The Sun's strong gravity keeps planets, comets and asteroids in orbit.",
            "The Sun holds most of the system's mass, so it dominates the field.",
          ],
        },
        {
          subTitle: "Orbital Radius and Speed",
          bullets: [
            "Orbital speed **decreases** as distance from the Sun increases.",
            "Inner planets feel a stronger field, so they move **faster**.",
            "Outer planets feel a weaker field, so they move **more slowly**.",
            "Earth-like orbits are **elliptical**, with the Sun off-centre at a focus.",
          ],
        },
        {
          subTitle: "Energy Along an Elliptical Orbit",
          bullets: [
            "Near the Sun, **potential energy is lowest** and kinetic energy highest.",
            "The planet is therefore **fastest** at the closest point of the ellipse.",
            "Far from the Sun, potential energy rises and speed falls.",
            "The trade between kinetic and potential energy obeys **energy conservation**.",
          ],
        },
      ],
      examinerTips: [
        "State the two rules plainly: field strength rises with **mass** and falls with **distance**.",
        "For a speed-versus-radius question answer that speed **decreases with distance**, then justify by gravity.",
        "Use **kinetic energy** and **gravitational potential energy** by name when explaining the fastest point.",
        "Name the Sun's position as **off-centre**, at a focus of the ellipse.",
      ],
      commonMistakes: [
        "Placing the Sun at the exact centre of a circular orbit.",
        "Saying outer planets move faster than inner planets.",
        "Explaining the speed change by gravity 'pulling harder' rather than energy transfer.",
        "Thinking field strength rises with distance instead of falling.",
      ],
      recap: [
        "Describe the shape of a planetary orbit and the Sun's position in it. [2]",
        "State how gravitational field strength depends on mass and distance. [2]",
        "Explain why a planet closer to the Sun has a greater orbital speed. [3]",
        "Use energy ideas to explain why a planet moves fastest near the Sun. [4]",
      ],
    },
    {
      title: "Reading Planetary Data and Light Travel Time",
      body: `### Analysing Planetary Data

Exam questions often give a **table of planetary data** to interpret.

Common columns include orbital radius, orbital period, and mean temperature.

Compare inner and outer planets to confirm that speed falls and periods lengthen with distance.

Use the ratio ideas behind v equals 2πr/T to check whether a given value is sensible.

Draw conclusions such as larger radius meaning a **longer year**.

### Distances Measured in Light Travel Time

Light travels at about **3.0 × 10⁸ metres per second** in a vacuum.

Astronomical distances are huge, so we express them as the **time light takes** to cross them.

Use speed equals distance divided by time, rearranged as time equals distance divided by speed.

For example, the Sun is about **8 light-minutes** away, since sunlight takes that long to reach us.

### Working a Light-Time Calculation

Convert all figures to consistent units before dividing distance by the speed of light.

The answer is a time in seconds; convert to minutes or years for readability.

A star **4 light-years** away means its light has taken four years to travel here.

Seeing far into space is therefore seeing far back in **time**.`,
      groups: [
        {
          subTitle: "Interpreting the Data Table",
          bullets: [
            "Read **orbital radius**, **period** and temperature from each row.",
            "Confirm radius and period increase together for the outer planets.",
            "Note orbital speed falling as radius grows.",
            "Use v equals 2πr/T to test a supplied speed for consistency.",
            "Link lower temperature to greater distance from the Sun.",
          ],
        },
        {
          subTitle: "Light Travel Time Method",
          bullets: [
            "Speed of light is **3.0 × 10⁸ m/s** in a vacuum.",
            "Rearrange speed equals distance over time to **time equals distance over speed**.",
            "Sunlight reaches Earth in about **8 minutes**, so the Sun is 8 light-minutes away.",
            "Keep units consistent before dividing, then convert to minutes or years.",
            "A light-year-based distance reports the travel time, not just the length.",
          ],
        },
      ],
      examinerTips: [
        "Always quote the equation you use, then show the substitution before the answer.",
        "Convert astronomical distances to SI units first, so seconds come out correctly.",
        "For a data question, state the **trend** and then back it with two values from the table.",
        "Say 'light takes time to travel' to explain why we see distant objects as they were.",
      ],
      commonMistakes: [
        "Forgetting to convert kiloparsecs or enormous distances into metres before dividing.",
        "Mixing the value 3.0 × 10⁸ with a time already given in minutes.",
        "Reading a table trend backwards, claiming outer planets have shorter periods.",
        "Confusing light-year (a distance) with a measure of time.",
      ],
      recap: [
        "Given a data table, describe the relationship between orbital radius and period. [2]",
        "Calculate the time for light to travel a stated astronomical distance. [3]",
        "State the speed of light in a vacuum in standard form. [1]",
        "Explain why looking at a distant star means looking into the past. [2]",
      ],
    },
    {
      title: "The Sun and How Stars Shine",
      body: `### The Sun Is an Ordinary Star

The **Sun** is a **medium-sized star**, not a giant or a dwarf.

It is composed mostly of the gases **hydrogen and helium**.

Like all stars it emits energy across the spectrum, notably **infra-red, visible and ultra-violet** radiation.

This radiation reaches Earth and drives its climate and light.

### Where a Star's Power Comes From

Stars are powered by **nuclear fusion** in their cores.

In fusion, light **hydrogen nuclei join** to form **helium** nuclei.

The fused helium has slightly less mass than the original hydrogen.

That missing mass is released as a vast amount of **energy**, according to a equals m c squared ideas.

The outward energy from fusion is what makes a star shine and stay hot.`,
      groups: [
        {
          subTitle: "The Sun as a Star",
          bullets: [
            "The Sun is a **medium-sized star** made mostly of **hydrogen and helium**.",
            "It radiates **infra-red, visible light and ultra-violet** to its surroundings.",
            "Its light and heat power Earth's weather and daylight.",
            "The Sun is typical of the stars rather than a unique object.",
          ],
        },
        {
          subTitle: "Hydrogen-to-Helium Fusion",
          bullets: [
            "Energy comes from **nuclear fusion** in the star's hot core.",
            "**Hydrogen nuclei fuse** together to form **helium nuclei**.",
            "Some mass is **converted into energy** during the reaction.",
            "This released energy makes the star **radiate and stay hot**.",
          ],
        },
      ],
      examinerTips: [
        "Name the fuel **hydrogen** and the product **helium**, since 'fusion' alone may not earn the mark.",
        "Describe the Sun as a **medium star** of mostly **hydrogen and helium**.",
        "List the three radiation types infra-red, visible and ultra-violet when asked what a star emits.",
        "Say mass is **converted to energy** rather than simply destroyed.",
      ],
      commonMistakes: [
        "Calling the Sun a planet or the largest star.",
        "Describing fusion as fission, the splitting of heavy nuclei.",
        "Saying stars burn chemical fuel like coal rather than fuse nuclei.",
        "Omitting ultra-violet or infra-red from the radiation emitted by the Sun.",
      ],
      recap: [
        "Describe the Sun in terms of its size and main composition. [2]",
        "Name three types of radiation the Sun emits. [3]",
        "Explain how nuclear fusion powers a star, naming the fuel and product. [3]",
        "State what happens to mass during the fusion that powers a star. [2]",
      ],
    },
    {
      title: "Galaxies, Light-Years and the Life Cycle of a Star",
      body: `### Galaxies and the Light-Year

A **galaxy** is a gravitationally bound collection of **billions of stars**, plus gas and dust.

Our own galaxy is the **Milky Way**, which contains our Sun.

Astronomers use the **light-year** for such vast distances.

One light-year equals about **9.5 × 10¹⁵ metres**, the distance light travels in a year.

### From Nebula to a Stable Star

A star begins in a **nebula**, a cool cloud of gas and dust.

**Gravity** draws the cloud together until it forms a hot **protostar**.

When fusion starts, the object becomes a stable star for most of its life.

In a stable star **inward gravity is balanced by outward thermal force** from fusion.

The star holds its size while this balance lasts.

### Running Out of Hydrogen and Old Age

A star eventually **runs out of hydrogen** fuel in its core.

A low-mass star then swells into a **red giant**.

A high-mass star instead expands into a **red supergiant**.

### Two Different Endings

A **red giant** sheds its outer layers as a **planetary nebula**, leaving a dense **white dwarf** core.

A **red supergiant** explodes as a **supernova**, leaving either a **neutron star** or a **black hole**.

The debris of a supernova forms a **nebula** that seeds the birth of **new stars**, closing the cycle.`,
      figure: starLifeCycleArt,
      groups: [
        {
          subTitle: "Galaxies and Scale",
          bullets: [
            "A **galaxy** holds **billions of stars** bound by gravity.",
            "Our galaxy is the **Milky Way**, home of the Sun.",
            "A **light-year** is the distance light travels in one year.",
            "One light-year is about **9.5 × 10¹⁵ metres**.",
          ],
        },
        {
          subTitle: "Stable Life and Balance",
          bullets: [
            "A **nebula** collapses under **gravity** into a **protostar**.",
            "Fusion begins, and the object becomes a **stable star**.",
            "Inward **gravity** is balanced by outward **thermal force**.",
            "The balance fixes the star's size for most of its life.",
          ],
        },
        {
          subTitle: "The Two Death Paths",
          bullets: [
            "Fuel failure: the star **runs out of hydrogen**.",
            "Low mass: **red giant**, then **planetary nebula** plus **white dwarf**.",
            "High mass: **red supergiant**, then **supernova**.",
            "After a supernova a **neutron star** or **black hole** remains.",
            "Supernova debris becomes a **nebula** seeding **new stars**.",
          ],
        },
      ],
      examinerTips: [
        "Give the life cycle as an ordered chain, since sequence marks are awarded stage by stage.",
        "For a stable star name the balance of **gravity against outward thermal force**.",
        "State which path depends on the star's **mass**, low mass versus high mass.",
        "Recall the light-year value **9.5 × 10¹⁵ m** and that it measures distance.",
      ],
      commonMistakes: [
        "Calling a light-year a unit of time.",
        "Mixing up planetary nebula with the supernova of a massive star.",
        "Saying a white dwarf explodes as a supernova.",
        "Omitting the balance of forces when describing a stable star.",
      ],
      recap: [
        "Define a light-year and give its value in metres. [2]",
        "Describe what a galaxy is and name our own. [2]",
        "Explain why a stable star keeps a fixed size. [3]",
        "Compare the final stages of a low-mass and a high-mass star. [4]",
      ],
    },
    {
      title: "The Expanding Universe: Redshift and Hubble's Law",
      body: `### Our Place in a Vast Universe

The **Milky Way** is about **100 000 light-years across**.

It is only one among the **billions of galaxies** that fill the Universe.

To place these in perspective, the whole observable Universe spans unimaginable distances.

### What Redshift Means

Light from distant **galaxies is stretched to longer wavelengths**, shifting spectral lines toward the red end.

This increase in observed wavelength is called **redshift**.

**Redshift** shows that those galaxies are **moving away** from us.

The **greater the redshift**, the **faster** the galaxy is receding.

### Evidence the Universe Expands

Redshift of many galaxies shows **the Universe is expanding**, supporting the **Big Bang** theory.

**Cosmic microwave background radiation** (CMBR) is faint microwave radiation from all directions, an early-universe relic.

The CMBR now reaches us as **microwaves** because expansion has **stretched its original short wavelength** over billions of years.

### Measuring Speed and Distance

Astronomers find a galaxy's **speed from its redshift**.

They find its **distance from the brightness of supernovae** seen within it.

**Hubble's law** relates the two: v equals H₀ d.

Here **v** is recession speed, **d** is distance, and **H₀** is the Hubble constant.

A larger distance means a larger recession speed, which is the fingerprint of expansion.`,
      figure: redshiftArt,
      groups: [
        {
          subTitle: "Scale of the Universe",
          bullets: [
            "The **Milky Way** is roughly **100 000 light-years** across.",
            "It is one of the **billions of galaxies** in the Universe.",
            "Light-year distances let us compare galaxy sizes and separations.",
          ],
        },
        {
          subTitle: "Redshift and Expansion",
          bullets: [
            "**Redshift** is the increase in a galaxy's observed **wavelength**.",
            "It shows the galaxy is **moving away** from us.",
            "A greater redshift means a **greater recession speed**.",
            "Widespread redshift is evidence the **Universe is expanding**, supporting the **Big Bang**.",
          ],
        },
        {
          subTitle: "Cosmic Microwave Background",
          bullets: [
            "**CMBR** is faint microwave radiation arriving from every direction.",
            "It is leftover radiation from the early Universe.",
            "Its wavelength has been **stretched by expansion**, so it now appears as **microwaves**.",
          ],
        },
        {
          subTitle: "Hubble's Law",
          bullets: [
            "A galaxy's **speed is found from its redshift**.",
            "A galaxy's **distance is found from supernova brightness**.",
            "**Hubble's law** states **v equals H₀ d**.",
            "**v** is recession speed, **d** is distance, **H₀** is the Hubble constant.",
            "Bigger distance gives bigger speed, confirming expansion.",
          ],
        },
      ],
      examinerTips: [
        "Define redshift as an **increase in observed wavelength**, not as objects turning red.",
        "Connect redshift to **recession speed** and then to the **expanding Universe** as a chain.",
        "When writing Hubble's law define v, d and H₀ before substituting numbers.",
        "Explain the CMBR is now microwaves because expansion **stretched its wavelength**, not because it cooled a star.",
      ],
      commonMistakes: [
        "Thinking redshift means galaxies actually appear red in colour.",
        "Claiming expansion shows the Milky Way is the centre of the Universe.",
        "Confusing Hubble's law distance with the light-year measure itself.",
        "Attributing CMBR to distant stars rather than the early Universe.",
      ],
      recap: [
        "State the approximate width of the Milky Way in light-years. [1]",
        "Define redshift and explain what it tells us about a galaxy's motion. [3]",
        "Explain how redshift and CMBR each support the Big Bang theory. [4]",
        "Using Hubble's law, describe the link between a galaxy's distance and its speed. [3]",
      ],
    },
  ],
};

export const PHYSICS_CHAPTER_6: Chapter = chapterSix;
