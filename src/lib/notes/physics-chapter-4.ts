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

const fieldArt = artPanel([
  {
    src: "ph04-bar-magnet-field-lines.webp",
    alt: "Curved iron filings marking the field lines arcing from pole to pole of a bar magnet",
    caption: "Field lines from north to south",
  },
  {
    src: "ph04-compass-plotting-field.webp",
    alt: "A small plotting compass and pencil dots tracing a field line around a magnet on paper",
    caption: "Plotting a field line with a compass",
  },
]);

const circuitArt = artPanel([
  {
    src: "ph04-series-circuit-lamps.webp",
    alt: "Two glowing bulbs wired in one loop to a battery holder with a switch on a wooden board",
    caption: "Series: one loop, one current",
  },
  {
    src: "ph04-parallel-circuit-lamps.webp",
    alt: "Two glowing bulbs on separate branches beside an ammeter on a wiring board",
    caption: "Parallel: each branch gets the full p.d.",
  },
]);

const inductionArt = artPanel([
  {
    src: "ph04-coil-magnet-galvanometer.webp",
    alt: "A bar magnet being pushed into a coil wired to a centre-zero meter on a laboratory bench",
    caption: "Motion in a field induces an e.m.f.",
  },
  {
    src: "ph04-iron-cored-transformer.webp",
    alt: "Two coils of wire wound around opposite sides of a square iron core beside a mains pylon",
    caption: "A transformer steps voltage up or down",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Electricity and Magnetism",
  intro: `Magnetism and electricity turn out to be two faces of one subject, because currents create fields and fields push on currents.\n\nThe chapter opens with **bar magnets and field lines**, then builds the quantities **charge, current, e.m.f., p.d., resistance and power**.\n\nNext come **series and parallel rules**, circuit components used as sensors, and safe use of the mains supply.\n\nThe final sections cover **electromagnets, the motor effect, induction, generators and transformers**, the physics behind motors and power stations.\n\nEvery equation here is short, so the marks come from units, graphs and clear reasoning.`,
  subheadings: [
    {
      title: "Magnetism: Poles, Induced Magnetism and Magnetic Materials",
      body: `### Every Magnet Has Two Poles

A magnet carries a **north pole (N)** and a **south pole (S)**, and it can never have only one.

Suspend a magnet so it swings freely and it settles pointing north-south, which makes it a compass needle.

Break a magnet in half and each piece becomes a smaller complete magnet with its own N and S poles.

### Poles Push and Pull

**Like poles repel and unlike poles attract**, so N near S attracts while N near N pushes away.

A magnet also attracts unmagnetised iron, steel, cobalt or nickel, because it magnetises them first.

That is why **attraction alone never proves something is a magnet**; only **repulsion** proves it.

The terms **magnetised** and **unmagnetised** separate objects whose domains are aligned from those whose domains are random.

### Induced Magnetism

**Induced magnetism** is a substance becoming magnetic because a magnet is brought near it.

Domains inside a soft-iron nail line up, so the end closest to the magnet becomes the **opposite pole**.

Opposite poles attract, so the nail jumps towards the magnet even though it started unmagnetised.

The magnetism disappears the instant the magnet is taken away, because the domains jumble again.

That is why a paperclip hangs from a magnet and a second clip then hangs from the first.

### Magnetic and Non-Magnetic Materials

**Magnetic materials** are iron, steel, cobalt and nickel; they are attracted and can be magnetised.

Copper, brass, aluminium, wood and plastic are **non-magnetic** and feel no force at all.

Test by bringing a magnet close: attraction happens only with magnetic materials.

### Soft Iron Against Steel

**Soft iron** magnetises easily and loses its magnetism at once, so it makes a **temporary magnet**.

**Steel** is harder to magnetise but holds its magnetism, so it makes a **permanent magnet**.

Steel resists jumbling because its atoms pin the domain walls, while iron's walls slide back freely.

Knocking, heating or hammering a permanent magnet scrambles domains and demagnetises it.

### Uses of Permanent Magnets and Electromagnets

Permanent magnets appear in compasses, fridge-door seals, loudspeakers and holders.

**Electromagnets** are coils wound on soft-iron cores, magnetised only while current flows.

Scrapyard cranes, electric bells and **relays** all need magnetism that can be switched, so they use electromagnets.`,
      groups: [
        {
          subTitle: "Pole Interactions and Testing for Magnetism",
          bullets: [
            "North repels north and south repels south, while north and south attract each other.",
            "Attraction also occurs between a magnet and an unmagnetised magnetic material.",
            "Repulsion is the only reliable test that an object is itself a magnet.",
            "Cutting a magnet produces two complete magnets, each with a north and a south pole.",
            "A freely suspended magnet aligns north to south, which is how a compass works.",
          ],
        },
        {
          subTitle: "Induced Magnetism Step by Step",
          bullets: [
            "A magnet brought near soft iron makes the iron magnetic without rubbing or touching.",
            "Magnetic domains line up under the magnet's influence inside the material.",
            "The induced end nearest the magnet becomes the opposite pole, so attraction follows.",
            "The induced magnetism disappears as soon as the magnet is removed.",
            "A hanging chain of paperclips is a row of induced temporary magnets.",
          ],
        },
        {
          subTitle: "Materials, Magnets and Switching",
          bullets: [
            "Magnetic materials include iron, steel, cobalt and nickel, not all metals.",
            "Non-magnetic materials such as copper, wood and plastic show no attraction.",
            "Soft iron gives temporary magnetism and is used for electromagnet cores.",
            "Steel keeps its magnetism and is used for permanent magnets.",
            "Electromagnets are chosen whenever the magnetism must be switched on and off.",
          ],
        },
      ],
      examinerTips: [
        "State that **repulsion is the sure test** of a magnet whenever the question asks how to identify one.",
        "For induced magnetism mention domains lining up and then name the opposite pole nearest the magnet.",
        "Compare soft iron and steel using the exact words temporary magnet and permanent magnet.",
        "Pick a use needing switching, such as a crane or bell, when asked why electromagnets are used.",
      ],
      commonMistakes: [
        "Claiming a magnet with a single pole can exist after it is cut.",
        "Saying attraction proves an object is a magnet, when unmagnetised iron is attracted too.",
        "Confusing magnetic with metallic, so copper or aluminium are wrongly listed as magnetic.",
        "Believing induced magnetism remains after the magnet is taken away.",
        "Thinking heating or hammering strengthens a permanent magnet, when it scrambles the domains.",
      ],
      recap: [
        "State the rule for forces between magnetic poles and name the two poles of a magnet. [2]",
        "An unmagnetised iron nail is attracted to a magnet. Explain, in terms of domains, why. [3]",
        "Describe two differences between the properties of soft iron and steel as magnetic materials. [2]",
        "Explain why repulsion identifies a magnet but attraction does not. [2]",
        "Name one use of a permanent magnet and one use of an electromagnet. [2]",
      ],
    },
    {
      title: "Magnetic Fields: Patterns, Direction and Plotting",
      body: `### A Field Is a Region of Force

A **magnetic field** is a region in which a **magnetic pole experiences a force**.

The direction of the field at a point is defined as the direction of the **force on the north pole** of a magnet there.

Fields are drawn with **field lines**, which run outside a magnet from **north to south** and return inside it.

Field lines form closed loops, pass through the magnet, and **never cross**, since a point has only one field direction.

### Strength Shows in the Spacing

Field lines are **crowded where the field is strong**, which for a bar magnet means just outside the poles.

Widely spaced lines mean a weak field, so the field fades quickly with distance from the magnet.

Two magnets repel because their fields overlap and push, each magnet being driven towards its own weaker field side.

Magnetic forces are therefore explained as **interactions between magnetic fields**, not mysterious action at a distance.

### Plotting a Field Line

Place a bar magnet on paper and draw around its outline.

Set a small **compass** near the north pole and mark two dots in line with its needle.

Move the compass so its tail sits on the last dot, mark again, and step around until the curve is traced.

Join each row of dots with a smooth curve and add an arrowhead pointing away from the north pole.

Repeat from other positions to show the full pattern seen in the artwork.

Sprinkling **iron filings** on a card over the magnet shows the pattern instantly, but gives no direction.

Tapping the card lets the filings settle along the lines.

### Standard Patterns to Recognise

Like poles facing give lines that bow away from each other, with a **neutral point** at the centre between them.

Unlike poles facing give nearly straight lines leaping across the gap.

At a neutral point the field strength is zero, so a compass needle points nowhere in particular.

The Earth behaves like a bar magnet, which is why compasses align wherever you stand.`,
      figure: fieldArt,
      groups: [
        {
          subTitle: "Rules for Drawing Field Lines",
          bullets: [
            "Field lines outside a magnet run from its north pole to its south pole.",
            "Arrows show the direction of the force on a north pole at each point.",
            "Lines are closest together at the poles, where the field is strongest.",
            "Field lines are closed loops passing through the magnet and never crossing.",
            "The spacing of field lines represents the relative strength of the field.",
          ],
        },
        {
          subTitle: "Plotting with a Compass, Method and Observations",
          bullets: [
            "Draw around the magnet first so its position is fixed on the paper.",
            "Mark dots at both ends of the compass needle, then move the compass up.",
            "Repeat in steps to trace one complete field line.",
            "Join the dots smoothly and add an arrowhead from north to south.",
            "Iron filings show the pattern of the field but not its direction.",
          ],
        },
        {
          subTitle: "Explaining Forces Between Magnets",
          bullets: [
            "Each magnet produces a field filling the space around it.",
            "Where two fields overlap, they combine into a stronger region on one side.",
            "A magnet is pushed from the crowded-field side towards the sparse side.",
            "Like poles produce crowding between the magnets, so they repel.",
            "Unlike poles produce lines joining across the gap, so they attract.",
          ],
        },
      ],
      examinerTips: [
        "Define a magnetic field as a region where a pole experiences a force, including both halves.",
        "Add arrowheads to every field line drawn, since a pattern with no direction loses a mark.",
        "For strength questions use the phrase **spacing of field lines** as the syllabus does.",
        "When asked why magnets repel, describe the interaction of the two fields rather than the poles alone.",
      ],
      commonMistakes: [
        "Drawing field lines that cross each other between two magnets.",
        "Pointing the arrows from south to north outside the magnet.",
        "Claiming iron filings reveal the direction of the field.",
        "Drawing loops only outside the magnet and forgetting the lines run through it.",
        "Saying a compass points along the force on its south pole.",
      ],
      recap: [
        "Define magnetic field and state how the direction of a field at a point is defined. [3]",
        "Draw the field lines between the north poles of two bar magnets facing each other. [3]",
        "Describe how you would plot one magnetic field line using a compass. [4]",
        "State how a field-line drawing shows where the field is stronger. [2]",
        "Explain the repulsion between two north poles in terms of their fields. [3]",
      ],
    },
    {
      title: "Electric Charge, Conductors and Electric Current",
      body: `### Two Kinds of Charge

There are **positive and negative charges**. Like charges **repel**, unlike charges **attract**.

Rub a **polythene rod** with a dry cloth and it picks up tiny torn paper, showing an **electrostatic charge by friction**.

Suspend the charged rod and bring a second charged rod near: repulsion proves both carry the same type of charge.

Charge is measured in **coulombs (C)**, and a body is charged whenever it holds excess or deficient electrons.

### Friction Moves Electrons Only

Charging a solid by friction involves a **transfer of negative charge (electrons)** only.

Polythene **gains electrons** from the cloth and becomes negative; the cloth is left positive.

An acetate rod rubbed with cloth **loses electrons** and becomes positive.

Protons in nuclei never move between solids, so saying positive charge travels costs a mark.

### Conductors and Insulators

Distinguish them with a simple test circuit: cell, lamp and two contacts with the material bridging them.

A **conductor** lights the lamp; an **insulator** leaves it dark.

The **simple electron model** explains this: metals contain **free electrons** that drift through the whole wire.

Insulators such as plastic, rubber and glass hold their electrons bound, so no continuous flow is possible.

Copper, aluminium and iron conduct; polythene, ceramic and dry wood insulate.

### Electric Fields

An **electric field** is a region in which an **electric charge experiences a force**.

Its direction at a point is the direction of the **force on a positive charge** there.

A positive point charge gives **radial arrows pointing outwards**; a negative point charge gives arrows pointing inwards.

A charged conducting sphere shows the same radial pattern outside it, with **no field inside** the metal.

Between two oppositely charged parallel plates the field is **uniform**, drawn as equal-spaced straight arrows from the positive plate to the negative one.

### Current Is Flowing Charge

**Electric current** relates to the flow of charge, defined as **charge passing a point per unit time**: **I = Q / t**.

One **ampere** is one coulomb per second.

In metals, current is the drift of **free electrons** from the negative terminal towards the positive terminal.

**Conventional current** is taken to flow from **positive to negative**, opposite to the electrons.

Current is measured with an **ammeter** connected in **series**.

Analogue ammeters have a pointer and scale, digital ones show a number, and both come in ranges such as 0-50 mA and 0-10 A.

**Direct current (d.c.)** flows in one direction only, as from a cell; **alternating current (a.c.)** reverses direction continuously, as from the mains.`,
      groups: [
        {
          subTitle: "Charging by Friction and Detection",
          bullets: [
            "Rubbing transfers electrons, so one object gains exactly what the other loses.",
            "Only electrons move between solids; positive nuclei stay locked in place.",
            "Polythene gains electrons and becomes negatively charged.",
            "Acetate loses electrons and becomes positively charged.",
            "A charged rod lifts small paper pieces by inducing opposite charge in them.",
            "Repulsion between two charged rods detects charge and shows its type.",
          ],
        },
        {
          subTitle: "The Electron Model of Conduction",
          bullets: [
            "Conductors contain electrons free to drift through the whole material.",
            "Metals such as copper and aluminium are conductors.",
            "Insulators hold electrons bound to their atoms, blocking flow.",
            "Plastic, rubber and glass are insulators used to coat wires.",
            "A cell, lamp and two contacts test whether a material conducts.",
          ],
        },
        {
          subTitle: "Electric Field Patterns",
          bullets: [
            "An electric field is a region where a charge experiences a force.",
            "Field direction is the direction of the force on a positive charge.",
            "A positive point charge has radial outward arrows; a negative one has inward arrows.",
            "A charged conducting sphere shows radial lines outside and none inside.",
            "Opposite parallel plates give a uniform field of equal-spaced arrows.",
          ],
        },
        {
          subTitle: "Current, Ammeters and Supply Types",
          bullets: [
            "Current is charge flowing past a point per unit time, so I = Q / t.",
            "One ampere means one coulomb of charge passing every second.",
            "Conventional current runs positive to negative; electrons run negative to positive.",
            "An ammeter is always wired in series, with a range just above the expected current.",
            "Cells and batteries give d.c.; generators and the mains give a.c.",
          ],
        },
      ],
      examinerTips: [
        "In charging answers name the **electron** as the transferred particle and say which object gains it.",
        "Define current as charge passing a point **per unit time**, since the last phrase carries a mark.",
        "Give both current directions: conventional positive to negative, then electrons the reverse way.",
        "For field patterns always add arrowheads showing the force direction on a positive charge.",
      ],
      commonMistakes: [
        "Writing that protons or positive charge move during frictional charging.",
        "Saying insulators have no electrons at all, instead of no free electrons.",
        "Drawing the field arrows around a negative charge pointing outwards.",
        "Connecting an ammeter in parallel with the component being measured.",
        "Confusing a.c. with a current that varies in size but never reverses.",
      ],
      recap: [
        "Explain, in terms of electrons, how a polythene rod becomes charged when rubbed with a cloth. [3]",
        "Describe an experiment to distinguish an electrical conductor from an insulator. [3]",
        "Define electric field and state the direction of the field near a positive point charge. [3]",
        "A current of 0.4 A flows for 2 minutes. Calculate the charge that passes a point. [2]",
        "State the difference between d.c. and a.c. in terms of direction of flow. [2]",
      ],
    },
    {
      title: "E.M.F., Potential Difference, Energy and Power",
      body: `### E.M.F. Is Energy Supplied

**Electromotive force (e.m.f.)** is the **electrical work done by a source in moving a unit charge around a complete circuit**.

It measures the energy per coulomb the cell or supply delivers, and is measured in **volts (V)**.

The equation is **E = W / Q**, with W in joules and Q in coulombs.

Despite the name, e.m.f. is not a force; it is energy per unit charge.

### P.D. Is Energy Converted

**Potential difference (p.d.)** is the **work done by a unit charge passing through a component**.

The equation is **V = W / Q**, and p.d. between two points is measured in **volts** too.

One volt equals one joule per coulomb for both quantities.

Measure p.d. with a **voltmeter in parallel** across the component; analogue and digital voltmeters come in different ranges, chosen to cover the expected value.

A cell's e.m.f. is measured across its terminals with no current; p.d. appears wherever energy is converted.

### Circuits Transfer Energy

Electric circuits transfer energy from a source such as a **cell or the mains supply** into the components.

Components then pass that energy into the surroundings: a lamp to light and heat, a motor mechanically and as heat.

**Electrical power** is the rate of energy transfer: **P = IV**, in watts.

Energy transferred is **E = IVt**, in joules when time is taken in seconds.

These equations combine with Ohm's law, so P = I²R also describes heating in a resistor.

### The Kilowatt-Hour

Billing uses the **kilowatt-hour (kW h)**, the **energy transferred when a 1 kW device runs for 1 hour**.

It equals 3.6 × 10⁶ J, so it is a unit of **energy, never of power**.

Cost is found by multiplying power in kilowatts by time in hours and by the price per unit.

A 2 kW heater used for 3 hours consumes 6 kW h, which at 15 cents per unit costs 90 cents.`,
      groups: [
        {
          subTitle: "E.M.F. Compared with Potential Difference",
          bullets: [
            "E.m.f. is energy per charge given by the source around the whole circuit.",
            "P.d. is energy per charge converted as charge passes through one component.",
            "Both are measured in volts, where 1 V equals 1 J per C.",
            "E.m.f. uses E = W / Q and p.d. uses V = W / Q.",
            "A voltmeter is wired in parallel, with its range above the expected reading.",
          ],
        },
        {
          subTitle: "Power and Energy Equations",
          bullets: [
            "P = IV gives power in watts from current in amperes and voltage in volts.",
            "E = IVt gives energy in joules when the time is in seconds.",
            "Circuits carry energy from the source to components and then to surroundings.",
            "Every appliance converts electrical energy into useful forms plus wasted heat.",
            "P = I²R gives the heating rate of a resistance and matters for cables.",
          ],
        },
        {
          subTitle: "Working with Kilowatt-Hours",
          bullets: [
            "One kW h is the energy used by a 1 kW appliance in one hour.",
            "The kW h is a unit of energy equal to 3.6 million joules.",
            "Energy in kW h = power in kW multiplied by time in hours.",
            "Cost = energy in kW h multiplied by the tariff per kW h.",
            "A 100 W lamp left on for 10 hours uses exactly 1 kW h.",
          ],
        },
      ],
      examinerTips: [
        "Keep the two definitions separate: e.m.f. for the source around the complete circuit, p.d. for the component.",
        "Quote **1 V = 1 J / C** whenever a volt needs justifying.",
        "Convert hours to seconds before using E = IVt to obtain joules.",
        "For kW h bills, change watts to kilowatts first, then multiply by hours and by the unit price.",
      ],
      commonMistakes: [
        "Calling e.m.f. a force because its name ends in the word force.",
        "Describing e.m.f. as the voltage across one component only.",
        "Using time in hours inside E = IVt and still reporting joules.",
        "Naming the kilowatt-hour a unit of power.",
        "Connecting a voltmeter in series with the component it should measure.",
      ],
      recap: [
        "Define electromotive force and state the unit in which it is measured. [2]",
        "A source supplies 24 J of energy for each coulomb passing around the circuit. Find its e.m.f. [1]",
        "A lamp has 12 V across it and carries 0.5 A. Calculate its power and the energy used in 5 minutes. [4]",
        "Explain what a kilowatt-hour measures and find the cost of running a 3 kW fire for 4 hours. [4]",
        "State the difference between the meanings of e.m.f. and p.d. [2]",
      ],
    },
    {
      title: "Resistance and Current-Voltage Characteristics",
      body: `### Defining Resistance

**Resistance** measures how much a component opposes the flow of current: **R = V / I**.

The unit is the **ohm**, equal to one volt per ampere.

To determine resistance, wire the resistor in series with an **ammeter**, a cell and a **variable resistor**, and connect a **voltmeter in parallel** with the resistor.

Vary the p.d., record several pairs of V and I, and compute R = V / I for each pair, then average.

A coil of constant resistance gives the same value each time, provided the current stays small so it does not heat.

### Length, Area and Material

A metallic wire's resistance grows **directly proportional to its length**: double the length, double the resistance.

Resistance falls **inversely proportional to cross-sectional area**: double the area, halve the resistance.

Long thin cables therefore resist more than short thick ones, which matters for power lines.

Material matters too: nichrome resists far more than copper, which is why it makes heating elements.

The relationship assumes the **temperature stays constant**.

### Three Characteristic Graphs to Sketch

For a **fixed resistor** the I-V graph is a **straight line through the origin**, since R never changes.

For a **filament lamp** the curve steepens low then flattens, an S-shape mirrored in both directions, because the **lamp heats up and resistance rises**.

Explain it fully: as current grows the filament temperature rises, ions vibrate more vigorously, electron collisions increase, so resistance increases and current rises more slowly.

For a **diode** the current stays almost zero until about **0.6 V forward**, then climbs steeply, while **reverse current is zero** at any reverse voltage.

Note that current is plotted on the vertical axis against voltage on the horizontal axis.

Since R = V / I, the resistance at a point is read from V divided by I, not from the gradient.`,
      groups: [
        {
          subTitle: "Determining Resistance Experimentally",
          bullets: [
            "Connect the ammeter in series and the voltmeter in parallel with the test resistor.",
            "Use a variable resistor to change the p.d. and take several pairs of readings.",
            "Calculate R = V / I for each pair and average the results.",
            "Keep currents small so heating does not change the resistance.",
            "Ammeter and voltmeter ranges must suit the expected current and voltage.",
          ],
        },
        {
          subTitle: "What Changes a Wire's Resistance",
          bullets: [
            "Resistance is directly proportional to the length of a metallic conductor.",
            "Resistance is inversely proportional to its cross-sectional area.",
            "Doubling length doubles R; doubling area halves R.",
            "Nichrome has high resistance and is used in heating elements.",
            "These proportionalities hold only at constant temperature.",
          ],
        },
        {
          subTitle: "Reading the Three I-V Graphs",
          bullets: [
            "Fixed resistor: straight line through the origin with constant gradient.",
            "Filament lamp: curve flattening as voltage rises, because resistance rises.",
            "Lamp explanation chain: more current, higher temperature, more collisions, greater resistance.",
            "Diode forward: almost no current below about 0.6 V, then a steep rise.",
            "Diode reverse: current stays zero whatever the reverse voltage.",
          ],
        },
      ],
      examinerTips: [
        "Explain the lamp curve with the link **heating increases resistance**, naming vibrating ions and collisions.",
        "State the diode's forward threshold of about 0.6 V and that reverse current is nil.",
        "Label both axes with quantities and units before describing any graph shape.",
        "Use **directly proportional** and **inversely proportional** exactly as the syllabus phrases the wire rules.",
      ],
      commonMistakes: [
        "Reading resistance as the gradient when current is on the vertical axis.",
        "Claiming a filament lamp's resistance falls as it heats.",
        "Drawing a diode with large reverse current.",
        "Saying resistance depends on the voltage applied, when R = V / I is only a calculation.",
        "Omitting the origin from the resistor's straight-line graph.",
      ],
      recap: [
        "Define resistance and give its unit. [2]",
        "Describe how you would measure the resistance of a resistor using an ammeter and voltmeter. [4]",
        "Sketch and explain the I-V graph of a filament lamp. [4]",
        "A wire of resistance 4 ohms is stretched to twice its length and one-quarter its area. Find the new resistance. [3]",
        "State two differences between the I-V graphs of a diode and a fixed resistor. [2]",
      ],
    },
    {
      title: "Circuit Symbols and Series and Parallel Circuits",
      body: `### Symbols You Must Draw and Read

Learn cells, batteries, power supplies and generators, switches, fixed and **variable resistors**, **potential dividers**, heaters and lamps.

Add motors, bells, **ammeters, voltmeters**, **thermistors (NTC)**, **LDRs**, **magnetising coils**, **transformers**, **fuses** and **relays**.

Diodes and **light-emitting diodes** are supplement symbols, covered with their behaviour in the next section.

Build both types of circuit on a board and read them back as diagrams, since interpretation is examined constantly.

### Series Circuits

A series circuit has **one loop**, so the **current is the same at every point**.

The **total p.d. equals the sum of the p.d.s** across each component: supply voltage is shared out.

The **combined resistance is R = R1 + R2**, so it is always larger than either resistor alone.

Sources in series **add**: three 1.5 V cells give a combined e.m.f. of 4.5 V when joined + to − in a line.

One broken lamp opens the single loop, so all the others go out.

### Parallel Circuits

A parallel circuit gives charge **more than one path**, each called a **branch**.

The **p.d. across the whole parallel arrangement equals the p.d. across any one branch**.

The **current from the source exceeds the current in any single branch**, since the branches share the charge.

At every **junction the total current entering equals the total current leaving**, because charge is not created, used up or allowed to pile up.

Two resistors in parallel follow **1/R = 1/R1 + 1/R2**, so **R = R1 × R2 / (R1 + R2)**, and the result is **less than either resistor alone**.

Adding branches always lowers total resistance, so the source current rises.

### Why Lighting Circuits Are Parallel

Each lamp receives the **full supply voltage**, so all shine at normal brightness.

Every lamp has its own switch and can be used independently.

A filament that breaks leaves the other lamps working, which series wiring cannot manage.`,
      figure: circuitArt,
      groups: [
        {
          subTitle: "Series Rules in One Place",
          bullets: [
            "Current is the same at every point in a series circuit.",
            "Total p.d. equals the sum of the individual p.d.s across the components.",
            "Total resistance equals R1 + R2, larger than any single resistance.",
            "E.m.f.s of sources in series add together.",
            "Breaking the loop anywhere stops the current everywhere at once.",
          ],
        },
        {
          subTitle: "Parallel Rules in One Place",
          bullets: [
            "The p.d. across each branch equals the p.d. across the whole arrangement.",
            "Source current is larger than the current in any one branch.",
            "Currents entering a junction equal the currents leaving it.",
            "Combined resistance uses 1/R = 1/R1 + 1/R2.",
            "Two equal resistors in parallel give half the resistance of either.",
          ],
        },
        {
          subTitle: "Explaining the Junction Rule",
          bullets: [
            "Charge is conserved, so coulombs cannot vanish inside a junction.",
            "Steady flow means charge does not build up at any point.",
            "Whatever coulomb flow arrives each second must also leave each second.",
            "Current is coulomb flow per second, so currents must balance.",
          ],
        },
        {
          subTitle: "Series Against Parallel Lamps",
          bullets: [
            "Parallel lamps each get the full supply voltage and normal brightness.",
            "Series lamps share the voltage, so each glows more dimly.",
            "Parallel lamps work independently; one failure leaves the rest lit.",
            "A series string dies completely when a single filament breaks.",
            "Household wiring is therefore always parallel, with each lamp fused separately.",
          ],
        },
      ],
      examinerTips: [
        "Answer series and parallel questions under three headings: current, p.d. and resistance.",
        "Justify the junction rule with conservation of charge, not with Ohm's law.",
        "After computing 1/R values in parallel, remember to take the reciprocal before stating R.",
        "When comparing brightness, mention both the voltage shared and the current flowing.",
      ],
      commonMistakes: [
        "Adding parallel resistances directly as if they were in series.",
        "Giving 1/R as the answer and forgetting to invert it.",
        "Claiming current is used up by the first lamp of a series loop.",
        "Adding e.m.f.s of cells joined + to +, which actually oppose.",
        "Saying the p.d. is shared out between parallel branches.",
      ],
      recap: [
        "State the rules for current, p.d. and resistance in a series circuit. [3]",
        "Two 6 ohm resistors are joined in parallel across a 12 V supply. Find the total resistance and current. [4]",
        "Explain why the current entering a junction equals the current leaving it. [2]",
        "Calculate the combined e.m.f. of three 1.5 V cells connected in series. [1]",
        "Give two advantages of connecting house lamps in parallel. [2]",
      ],
    },
    {
      title: "Potential Dividers, Sensors and Diodes",
      body: `### P.D. Follows Resistance

With the **same current**, a conductor with **greater resistance has a greater p.d.** across it, because **V = IR**.

That single fact makes resistors in series share out a supply voltage in proportion to their values.

### The Potential Divider

Two resistors in series across a supply form a **potential divider**, with the **output taken across one of them**.

The p.d.s divide as **R1 / R2 = V1 / V2**, so the output voltage is fixed by the resistance ratio.

A **variable potential divider** uses a sliding contact and **three terminals**, so the output can be set **smoothly from zero to the full supply voltage**.

A variable resistor used in series can only reduce the output; it can never bring it to zero.

The larger the resistance across which you measure, the larger that p.d. becomes.

### Thermistors and LDRs

An **NTC thermistor** has resistance that **falls as temperature rises**; cold means high resistance.

In a divider with a fixed resistor, heating the thermistor cuts its p.d. and raises the p.d. across the fixed resistor.

That rising voltage can trigger a transistor switch or a **fire alarm** once temperature passes a set value.

An **LDR** has resistance that **falls as light intensity increases**, so a night-light switches on when it darkens.

### Diodes and LEDs

A **diode** permits current in **one direction only**: forward above about **0.6 V**, essentially zero in reverse.

That one-way behaviour is used for **rectification**, changing a.c. into d.c. inside chargers and power supplies.

A **light-emitting diode (LED)** glows when **forward biased** only, so its polarity must be right.

An LED needs a **series resistor** to limit its current and protect it.

Its symbol's arrow shows the direction of conventional current, and the triangle bar marks the cathode.`,
      groups: [
        {
          subTitle: "Potential Divider Calculations",
          bullets: [
            "Two series resistors split the supply voltage in the ratio of their resistances.",
            "Use R1 / R2 = V1 / V2, then add the p.d.s to check the supply total.",
            "Output across the upper resistor falls as the lower resistor grows.",
            "A three-terminal divider gives output adjustable from 0 V to full supply voltage.",
            "A series variable resistor can never bring the output fully to zero.",
          ],
        },
        {
          subTitle: "Sensor Behaviour in Circuits",
          bullets: [
            "NTC thermistor resistance falls as temperature rises.",
            "LDR resistance falls as light intensity increases.",
            "The higher the sensor resistance, the larger the p.d. across the sensor.",
            "Take output across the fixed resistor for a signal rising with heat or light.",
            "Take output across the sensor for a signal rising in cold or darkness.",
          ],
        },
        {
          subTitle: "Diodes and LEDs in Circuits",
          bullets: [
            "A diode conducts easily in forward bias and blocks in reverse bias.",
            "Forward conduction becomes significant at about 0.6 V for a silicon diode.",
            "Diodes rectify a.c. into d.c. in power supplies.",
            "An LED emits light only when forward biased with correct polarity.",
            "A series resistor limits LED current so the LED is not destroyed.",
          ],
        },
      ],
      examinerTips: [
        "Sketch the divider first and label where the output is taken from before calculating.",
        "State the direction of change twice for sensors: resistance falls, so its p.d. falls.",
        "For variable divider questions emphasize that zero output is possible, the key marked difference.",
        "Quote about 0.6 V as the diode forward threshold and say reverse current is negligible.",
      ],
      commonMistakes: [
        "Confusing a two-terminal variable resistor with a three-terminal potential divider.",
        "Saying a thermistor's resistance rises with temperature, which describes not NTC types.",
        "Writing that an LDR's resistance falls in the dark rather than in bright light.",
        "Connecting an LED in reverse, or in forward without its protective resistor.",
        "Treating the diode as a resistor of fixed value in calculations.",
      ],
      recap: [
        "State the relationship between the p.d.s across two series resistors and their resistances. [2]",
        "Resistors of 4 ohms and 8 ohms divide a 6 V supply. Find the p.d. across each. [3]",
        "Describe how the resistances of an NTC thermistor and an LDR respond to their surroundings. [2]",
        "Explain how a potential divider using an LDR switches on a lamp as it darkens. [4]",
        "Describe the behaviour of a diode and state one use of it. [2]",
      ],
    },
    {
      title: "Electrical Safety: Fuses, Earthing and Trip Switches",
      body: `### The Four Named Hazards

**Damaged insulation** exposes the live conductor, so a person touching the cable completes a circuit through their body.

**Overheating cables** occur when too much current passes; the covering melts and a fire may start.

**Damp conditions** cut the resistance of skin and connections, so far larger and more dangerous currents flow.

**Excess current from overloading** arises from too many appliances on one plug, socket, extension lead or adaptor.

All four hazards lead to shock, burns or fire, so every mains circuit needs protection.

### Live, Neutral and Earth

A mains circuit has three wires: **live (line)**, **neutral** and **earth**.

The **live wire** carries the alternating p.d. relative to earth; the **neutral** completes the circuit at about zero volts.

The **earth wire** carries no current in normal use and exists only to rescue a fault.

A **switch must be fitted in the live wire**, so that opening it cuts the appliance out of the high voltage.

A switch in the neutral would leave the internals live even when the appliance seems off.

### Fuses

A **fuse** is a thin wire of low melting point inside the plug or circuit.

When current exceeds its rating the wire heats, **melts and breaks the circuit**.

Choose a rating **slightly above the appliance's normal current** so it survives switching-on surges but blows on a fault.

With a **metal-cased appliance**, if live touches the case the **earth wire** carries a large fault current and the fuse blows.

The case therefore never becomes live to a user.

With a **double-insulated appliance**, whose outer casing is non-conducting plastic, no earth wire is needed; the **fuse alone protects the circuit and its cabling**.

### Trip Switches

A **trip switch** compares live and neutral currents and cuts the supply in milliseconds when they differ.

That difference means some current is leaking to earth, perhaps through a person.

A trip switch protects people from shock; a fuse protects cables from overheating.

A trip switch resets after tripping, while a fuse must be replaced.`,
      groups: [
        {
          subTitle: "Hazards of the Mains Supply",
          bullets: [
            "Damaged insulation exposes live conductors and causes electric shock.",
            "Overheating cables can melt the covering and start a fire.",
            "Damp conditions lower resistance, so larger currents pass through people.",
            "Overloaded plugs, sockets and extension leads draw excess current.",
            "Excess current overheats cables and destroys insulation.",
          ],
        },
        {
          subTitle: "Fuse Against Trip Switch",
          bullets: [
            "A fuse melts once and must be replaced; a trip switch simply resets.",
            "A fuse responds to too much current; a trip switch to an imbalance.",
            "Choose the fuse rating just above the appliance's normal working current.",
            "Trip switches act far faster, which better protects a person from shock.",
            "Both interrupt the supply before the cables can overheat.",
          ],
        },
        {
          subTitle: "Earthing and Double Insulation",
          bullets: [
            "The earth wire gives fault current a low-resistance path out of the case.",
            "That large current melts the fuse and disconnects the appliance.",
            "Metal cases must be earthed; plastic cases may rely on double insulation.",
            "A double-insulated appliance needs no earth wire, only a fuse.",
            "Switches are placed in the live wire so the appliance is truly isolated.",
          ],
        },
      ],
      examinerTips: [
        "Answer fuse questions in three steps: excess current, fuse wire melts, circuit is broken.",
        "Say the switch is in the **live wire** and explain that it removes the dangerous p.d.",
        "For earthing, name the fault path: live to case, through earth wire, so the fuse blows.",
        "Justify a chosen rating as slightly greater than the normal current, never below it.",
      ],
      commonMistakes: [
        "Claiming the fuse melts because of high voltage rather than excess current.",
        "Drawing the switch in the neutral wire of a circuit.",
        "Saying the earth wire carries current during normal operation.",
        "Confusing the neutral with the earth when labelling a plug.",
        "Thinking a double-insulated appliance also needs an earth wire.",
      ],
      recap: [
        "State four hazards of using the mains electricity supply. [4]",
        "Explain why a switch must be connected to the live wire. [2]",
        "Describe how a fuse and an earth wire together protect a metal-cased appliance. [4]",
        "Choose a suitable fuse rating for an appliance whose normal current is 10 A and justify it. [2]",
        "Explain why a double-insulated appliance does not need an earth wire. [2]",
      ],
    },
    {
      title: "Currents, Solenoids and the Motor Effect",
      body: `### The Magnetic Effect of a Current

A current in a **straight wire** produces **concentric circles** of field around the wire.

Use the **right-hand grip rule**: thumb points along conventional current, curled fingers show the field direction.

A flat coil gives a crowded field through its centre; a long coil, a **solenoid**, gives the bar-magnet pattern shown in the artwork.

Inside a solenoid the field is **strong and uniform**, and outside it spreads from north to south poles.

Field strength **rises with more turns, greater current and an iron core**, and reverses when the current reverses.

Test it by passing current through a vertical wire through card and sprinkling filings, or by tracing with a compass; repeat for the solenoid.

An electromagnet is a current-carrying solenoid on a soft-iron core, and is the working part of **relays, bells, cranes and loudspeakers**.

### Force on a Current-Carrying Conductor

Suspend a **foil strip** between the poles of a strong magnet and connect it to a d.c. supply through a switch.

Closing the switch makes the strip **kick sideways**, showing a **force acts on a current-carrying conductor in a magnetic field**.

**Reversing the current reverses the force; reversing the field reverses it too**, and reversing both leaves it unchanged.

The force is greatest when the conductor is at right angles to the field.

Explain the force by field interaction: the wire's field strengthens the magnet's field on one side and weakens it on the other, so the wire is pushed aside.

**Fleming's left-hand rule** gives the directions: First finger Field, seCond finger Current, thuMb gives Motion.

The same rule predicts the deflection of **beams of charged particles**, taking conventional current along the motion of positive charges and opposite for electrons.

### Loudspeakers and Relays

A **loudspeaker** has a coil on a former attached to a paper cone, sitting in a permanent magnet's radial field.

The varying audio current turns the coil into an electromagnet whose poles flip as the a.c. reverses.

Attraction and repulsion alternate, so the coil and cone vibrate in step with the signal and push sound waves into the air.

A **relay** uses a small control current through an electromagnet to pull contacts closed, switching a separate high-current circuit.

### The D.C. Motor

A rectangular **coil carrying current** in a magnetic field feels opposite forces on its two sides, giving a **turning effect**.

The turning effect increases by **more turns, more current or a stronger field**.

**Brushes** press on the **split-ring commutator**, which **swaps the coil connections every half turn**, so forces always drive rotation the same way.`,
      groups: [
        {
          subTitle: "Field Patterns Made by Currents",
          bullets: [
            "A straight wire gives concentric circles centred on the wire.",
            "Field direction follows the right-hand grip rule along conventional current.",
            "Increasing the current strengthens the field around wire and solenoid.",
            "A solenoid's inside field is strong and uniform like a bar magnet's.",
            "An iron core concentrates the flux and makes a far stronger electromagnet.",
            "Reversing the current reverses every arrow and both solenoid poles.",
          ],
        },
        {
          subTitle: "The Motor Effect",
          bullets: [
            "A conductor must carry current and lie across the field to feel a force.",
            "The force is maximum at right angles to the magnetic field.",
            "Reversing current alone reverses the force on the conductor.",
            "Reversing field alone reverses the force as well.",
            "Reversing current and field together leaves the force direction unchanged.",
            "Charged particle beams bend according to the same left-hand rule.",
          ],
        },
        {
          subTitle: "Speakers, Relays and Motors",
          bullets: [
            "A loudspeaker converts alternating audio current into cone vibration.",
            "The coil's poles reverse as the current reverses, giving alternating pull and push.",
            "A relay lets a low-current circuit switch a high-current one safely.",
            "Motor turning effect grows with turns, current and field strength.",
            "The commutator reverses the coil current every half turn to keep one-way spin.",
          ],
        },
      ],
      examinerTips: [
        "Name both shape and direction when describing wire and solenoid fields, and quote the grip rule.",
        "Give the three named factors for electromagnet strength: current, number of turns, iron core.",
        "In reversal questions state one reversal then mention that two reversals cancel.",
        "For the commutator say it reverses the current every half turn so the turning effect stays one-way.",
      ],
      commonMistakes: [
        "Using Fleming's right hand for motor questions, which belongs to generators.",
        "Describing the solenoid's internal field as weak and random.",
        "Saying the commutator reverses the magnetic field instead of the current.",
        "Claiming a loudspeaker coil is permanently attracted to the magnet.",
        "Thinking an electromagnet stays magnetic after the current is switched off.",
      ],
      recap: [
        "Draw the field patterns for a current in a straight wire and in a solenoid, with directions. [4]",
        "State three ways of increasing the strength of an electromagnet. [3]",
        "Describe an experiment showing a force acts on a current-carrying conductor, including the reversal results. [4]",
        "Explain, using the left-hand rule, how the force direction changes if only the current reverses. [2]",
        "Describe how a loudspeaker produces sound from an alternating current. [4]",
        "State the function of the brushes and the split-ring commutator in a d.c. motor. [2]",
      ],
    },
    {
      title: "Electromagnetic Induction, the A.C. Generator and the Transformer",
      body: `### Inducing an E.M.F.

An e.m.f. is induced in a conductor when it **moves across a magnetic field**, or when the **field linking it changes**.

If the conductor forms a closed circuit, the induced e.m.f. drives an **induced current**.

Demonstrate it by connecting a coil to a **centre-zero galvanometer** and pushing a bar magnet in and out.

The needle kicks one way on entry and the other on exit; holding the magnet still gives no deflection at all.

The magnitude grows with **faster movement, a stronger magnet and more turns**.

The induced e.m.f. **opposes the change producing it**, which is why pushing in harder costs more work and gives more energy.

Relative directions follow the generator rules: motion, field and induced current are mutually at right angles, found with **Fleming's right-hand rule**.

### The Simple A.C. Generator

A rectangular **coil rotated between magnet poles** continually cuts the field, so its e.m.f. alternates.

**Slip rings and brushes** carry the a.c. out without reversing the connections.

The e.m.f.-time trace is a **sine wave** that rises, falls through zero and reverses smoothly.

The e.m.f. is zero when the coil moves along the field, and maximum when the coil cuts straight across it.

Speeding the rotation raises both the peak e.m.f. and the frequency; more turns or a stronger magnet raise the peak.

### The Transformer

A **transformer** has a **primary and secondary coil wound on a laminated soft-iron core**.

Alternating current in the primary creates a **changing magnetic field** in the core, which **induces an e.m.f. in the secondary**.

It works on a.c. only, because a steady d.c. gives no changing flux.

The voltage ratio is **Vp / Vs = Np / Ns**, so a **step-up** transformer has more secondary turns and a **step-down** fewer.

For ideal, 100% efficient operation, **IpVp = IsVs**, so raising the voltage lowers the current by the same factor.

### Why Power Is Transmitted at High Voltage

Power stations feed the grid through transformers.

Stepping the voltage up to hundreds of kilovolts **cuts the current** for the same power, and cable loss follows **P = I²R**, so heating loss falls sharply.

That means thinner cables, less wasted energy and lower cost over long distances.

Near homes, **step-down transformers** reduce the voltage to a safe usable level.

### Rectification

Diodes in a supply circuit **rectify** the a.c. from a generator or transformer into **d.c.**, as required by chargers and electronics.`,
      figure: inductionArt,
      groups: [
        {
          subTitle: "Induction and Its Factors",
          bullets: [
            "A conductor moving across field lines has an e.m.f. induced in it.",
            "A changing field linking a conductor or coil also induces an e.m.f.",
            "Faster motion, stronger fields and more turns all increase the induced e.m.f.",
            "The induced e.m.f. opposes the change that produced it.",
            "Motion, field and induced current are mutually perpendicular directions.",
          ],
        },
        {
          subTitle: "The A.C. Generator",
          bullets: [
            "Rotating the coil makes the induced e.m.f. reverse every half turn.",
            "Slip rings and brushes carry the alternating current to the circuit.",
            "The e.m.f. is zero when the coil moves along the field.",
            "The e.m.f. peaks when the coil cuts the field at right angles.",
            "Spinning faster raises both peak e.m.f. and frequency of the output.",
          ],
        },
        {
          subTitle: "Transformer Equations and Uses",
          bullets: [
            "A.c. in the primary drives a changing flux in the soft-iron core.",
            "The changing flux induces an e.m.f. in the secondary winding.",
            "Vp / Vs = Np / Ns links voltages to turns for the ideal transformer.",
            "IpVp = IsVs holds at 100% efficiency, so high voltage means low current.",
            "Step-up transformers raise voltage for transmission; step-down lower it for use.",
            "A d.c. supply cannot be transformed, since the flux never changes.",
          ],
        },
        {
          subTitle: "High-Voltage Transmission Explained",
          bullets: [
            "For the same power, higher voltage means smaller line current.",
            "Cable heating loss follows P = I²R, so smaller current wastes less.",
            "Lower loss makes long-distance transmission far more efficient.",
            "Thinner, cheaper cables can carry the power.",
            "Voltages are stepped down again before reaching homes.",
          ],
        },
      ],
      examinerTips: [
        "Separate the two ways to induce: conductor moving across a field, and a changing field linking it.",
        "Give three factors for induced e.m.f. size: speed, field strength, number of turns.",
        "Link coil position to graph features, saying maximum when the coil cuts across the field.",
        "For transmission answers chain it: high voltage, low current, small I²R loss.",
        "Use slip rings for generators and describe a changing flux whenever transformers are explained.",
      ],
      commonMistakes: [
        "Saying any motion of a conductor induces an e.m.f., even when moving along the field.",
        "Using a d.c. supply with a transformer and expecting an output.",
        "Swapping Np with Ns in the ratio, turning a step-up into a step-down.",
        "Thinking high-voltage transmission is used to raise the current in the cables.",
        "Confusing the split-ring commutator with the slip rings of an a.c. generator.",
      ],
      recap: [
        "State two ways of inducing an e.m.f. in a conductor. [2]",
        "Describe the magnet-and-coil demonstration of electromagnetic induction and what the meter shows. [4]",
        "Explain how the e.m.f. of an a.c. generator changes as the coil rotates. [4]",
        "A transformer primary has 2000 turns and its secondary 500 turns across a 240 V supply. Find the output voltage. [3]",
        "Explain why electrical power is transmitted at high voltage, using P = I²R. [4]",
        "State the name given to converting a.c. to d.c. and the component used. [2]",
      ],
    },
  ],
};

export const PHYSICS_CHAPTER_4: Chapter = chapterFour;
