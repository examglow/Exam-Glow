import type { Chapter } from "./types";

const IMG = "/notes/chemistry";

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

const statesArt = artPanel([
  {
    src: "ch01-particle-arrangement.webp",
    alt: "Three containers showing tightly packed, jumbled and widely scattered particles",
    caption: "Particles in a solid, liquid and gas",
  },
  {
    src: "ch01-mass-of-gas-syringe.webp",
    alt: "Beam balance with an inflated balloon outweighing a deflated one beside a syringe",
    caption: "Weighing the air inside a balloon",
  },
]);

const sublimationArt = artPanel([
  {
    src: "ch01-sublimation-iodine.webp",
    alt: "Conical flask with iodine crystals producing violet vapour and crystals on the neck",
    caption: "Iodine crystals turning straight to vapour",
  },
  {
    src: "ch01-evaporation-cooling.webp",
    alt: "Dish of water losing molecules upward beside a falling thermometer",
    caption: "Evaporation cools the remaining liquid",
  },
]);

const diffusionArt = artPanel([
  {
    src: "ch01-diffusion-bromine.webp",
    alt: "Two stacked gas jars with reddish-brown bromine vapour moving into the upper jar",
    caption: "Bromine vapour rising into air",
  },
  {
    src: "ch01-permanganate-diffusion.webp",
    alt: "Beaker of still water with purple plumes spreading from a crystal",
    caption: "Purple colour spreading through still water",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "States of Matter",
  intro: `Everything you observe about a substance follows from two things: how its particles are arranged and how fast they move.\n\nWhether a substance holds its shape, whether it can be squashed and whether a smell crosses a room all come from that.\n\nThis chapter builds the **kinetic particle theory**, uses it to explain the three states and the changes between them,\n\nthen applies it to **diffusion** and to **pressure in gases**.`,
  subheadings: [
    {
      title: "Kinetic Particle Theory: The Three Statements",
      body: `### What the Model Claims

**Kinetic particle theory** explains the physical properties of solids, liquids and gases in terms of the particles they are made of.

The model makes three statements, and mark schemes expect all three of them.

Matter is made of extremely small particles, far too small to be seen with an ordinary microscope.

These particles are in **continuous, random motion**, and that motion never stops, even inside a solid.

The higher the temperature of a substance, the greater the average kinetic energy of its particles, so the faster they move.

Random means every direction is equally likely, which is why a gas spreads to fill any space open to it.

A solid contains moving particles too; they simply cannot travel from place to place.

The three statements are worth learning in that exact order, because exams ask for them as written.

### Particles, Atoms, Molecules or Ions

Cambridge accepts atoms, molecules or ions as the particles of a substance.

Metals are made of atoms, most gases are made of molecules, and sodium chloride is made of ions.

Write "particles" unless the question names the substance, and then use the correct term for it.

### Temperature Measures Average Kinetic Energy

Temperature measures the average kinetic energy of the particles, not the total energy stored in the sample.

A cup of water at 60 °C and a bath at 60 °C contain particles with the same average kinetic energy.

The bath holds far more total energy, simply because it contains far more particles.

Heating a substance either raises its temperature or changes its state, and it cannot do both at once.

When the added energy is used to overcome the forces between particles, the temperature stays constant.

Cooling removes kinetic energy, so particles slow until attractive forces can lock them into a fixed pattern.

### What the Model Has to Explain

The model accounts for the properties of the three states using one idea: how the particles are arranged and how freely they move.

It also explains diffusion, evaporation and gas pressure, all of which appear later in this chapter.

Its limitation is that it treats particles as separate spheres and pays little attention to the forces between them.`,
      groups: [
        {
          subTitle: "The Three Statements of the Theory",
          bullets: [
            "Matter is made of extremely small particles, which may be atoms, molecules or ions.",
            "The particles are in continuous motion, and that motion never stops.",
            "Their motion is random, so a particle is as likely to travel in one direction as any other.",
            "The higher the temperature, the greater the average kinetic energy of the particles.",
            "Particles in a solid are held in fixed positions by strong forces but still vibrate constantly.",
          ],
        },
        {
          subTitle: "Temperature, Energy and Motion",
          bullets: [
            "Temperature measures average kinetic energy, not the total energy of the sample.",
            "Two samples at the same temperature have particles with the same average kinetic energy.",
            "A larger sample at the same temperature stores more total energy because it has more particles.",
            "Heating supplies energy that either raises the temperature or overcomes the forces between particles.",
            "Cooling removes kinetic energy, so particles slow and forces of attraction can hold them in place.",
          ],
        },
        {
          subTitle: "Evidence the Model Must Explain",
          bullets: [
            "Diffusion shows particles moving by themselves, since gases and liquids mix without stirring.",
            "Gas pressure shows particles striking the walls of a container continuously and in every direction.",
            "Evaporation shows individual liquid particles escaping with enough energy to break free.",
            "The spread of a perfume across a room is diffusion in a gas needing no external energy supply.",
          ],
        },
      ],
      examinerTips: [
        "For a 'state the kinetic particle theory' question, give all three statements as separate numbered points.",
        "Follow each statement with an observed property it explains, since explain questions want the link made.",
        "Use the word **random** as well as **moving**; motion described without randomness is incomplete.",
        "Learn the phrase **average kinetic energy**, because an answer about total energy is wrong for temperature.",
      ],
      commonMistakes: [
        "Claiming particles in a solid do not move; they vibrate about fixed positions.",
        "Saying particles expand when heated, when it is the space between them that increases.",
        "Confusing temperature with total energy, so a small hot sample is said to hold more energy.",
        "Writing that only liquids and gases contain moving particles, forgetting the vibrating particles of a solid.",
      ],
      recap: [
        "State the three main ideas of the kinetic particle theory. [3]",
        "Explain, in terms of particles, why the temperature of a solid rises as it is heated. [2]",
        "A student says the particles of a solid are not moving. Explain why this is incorrect. [2]",
        "Describe the meaning of the kinetic energy of particles and how temperature is related to it. [2]",
      ],
    },
    {
      title: "Solids, Liquids and Gases: Arrangement, Movement and Forces",
      body: `### Three Questions About Every State

A full answer about any state gives its **arrangement**, its **movement** and the **forces** between its particles.

**Solid:** particles are closely packed in a regular arrangement, as the artwork for this section shows.

Solid particles vibrate about fixed positions and cannot move from place to place. The forces between them are strong, which is what holds the regular pattern rigid.

**Liquid:** particles are still close together, but their arrangement is irregular.

Liquid particles can move around and slide over one another, because the forces are weaker than in a solid.

**Gas:** particles are well separated and move rapidly and randomly in straight lines until they collide.

The forces between gas particles are negligible, so every particle moves independently of the others.

### Explaining Shape, Volume and Flow

A solid keeps its own shape because strong forces lock every particle into a fixed position.

A liquid has a definite volume but no definite shape, taking the shape of the part of the container it fills.

Liquid particles remain in contact, so a liquid cannot spread out to fill an entire room.

A gas has neither a definite shape nor a definite volume, since its particles move apart until stopped by the walls.

The ability of a liquid or gas to flow comes from particles moving past one another, which solid particles cannot do.

### Compressibility and Density

Gases are easily compressed because their particles are far apart with mostly empty space between them.

Pushing a syringe plunger moves the particles closer together without crushing any particle. Solids and liquids are described as virtually incompressible, because their particles are already touching.

For the same reason a given mass of solid or liquid occupies far less space than the same mass of gas.

Density therefore falls in the order solid, liquid, gas for most substances.

Water is the exception Cambridge loves: ice is less dense than liquid water, because its crystals hold molecules in an open arrangement.

### Proof That a Gas Is Matter

The weighed balloon in the artwork for this section shows that a gas is matter rather than an insubstantial nothing.

An inflated balloon is heavier than the same balloon deflated, so the air inside it has mass.

Removing air from a sealed flask with a vacuum pump reduces the mass of the flask by that same amount.

A gas therefore has mass and occupies space, exactly as a solid or a liquid does.`,
      figure: statesArt,
      groups: [
        {
          subTitle: "Arrangement, Movement and Forces",
          bullets: [
            "**Solid:** closely packed particles in a regular arrangement, vibrating about fixed positions, strong forces.",
            "**Liquid:** particles close together in an irregular arrangement, sliding over one another, weaker forces.",
            "**Gas:** particles far apart, moving rapidly and randomly, with negligible forces between them.",
            "In every state the particles themselves are unchanged; only their arrangement and separation differ.",
            "Vibrating means moving to and fro about one position, not travelling through the substance.",
          ],
        },
        {
          subTitle: "Shape, Volume and Flow Explained",
          bullets: [
            "A solid keeps a fixed shape because strong forces hold each particle in a fixed position.",
            "A liquid keeps a fixed volume because its particles remain in contact with one another.",
            "A liquid takes the shape of its container because its particles can slide past each other.",
            "A gas fills its container completely because its particles move freely and spread as far as possible.",
            "Flow happens only when particles can change places, which rules out a rigid solid.",
          ],
        },
        {
          subTitle: "Density and Compressibility Explained",
          bullets: [
            "Gases compress easily because most of their volume is empty space between the particles.",
            "Solids and liquids are almost incompressible because their particles are already touching.",
            "Particles of a substance are closest together in the solid state, so a solid is the densest.",
            "Ice floats because water expands on freezing and forms an open arrangement of molecules.",
            "Most substances contract on freezing, so their solid sinks in their own liquid.",
          ],
        },
        {
          subTitle: "Mass and Space Taken Up by a Gas",
          bullets: [
            "Weighing a balloon before and after inflation shows that air has mass.",
            "Compressed air in a sealed syringe pushes the plunger back, showing that air occupies space.",
            "Evacuating a sealed flask lowers its mass by the mass of the air removed from it.",
            "A gas is a form of matter with mass and volume, like a solid or a liquid.",
          ],
        },
      ],
      examinerTips: [
        "Answer a state question in three parts: arrangement, movement and forces, since omitting forces loses a mark.",
        "Use the exact phrases **closely packed in a regular arrangement** for a solid and **irregular arrangement** for a liquid.",
        "When explaining a property, name the particle feature and then connect it to the property with 'so that'.",
        "For compressibility mention the empty space between particles, not the compressibility of the particles themselves.",
      ],
      commonMistakes: [
        "Describing gas particles as being squeezed smaller when the gas is compressed.",
        "Calling a liquid's shape indefinite; a liquid has a definite volume and only an indefinite shape.",
        "Saying gas particles have no mass because they have no forces between them.",
        "Claiming every solid is denser than every liquid, when floating ice is the standard counter-example.",
      ],
      recap: [
        "Describe the arrangement and movement of the particles in a liquid. [2]",
        "Explain, in terms of particles, why a gas can be compressed but a solid cannot. [3]",
        "Explain why a liquid takes the shape of its container but does not fill it completely. [3]",
        "Describe an experiment that shows a gas has mass. [3]",
      ],
    },
    {
      title: "Changes of State and the Heating Curve",
      body: `### Six Named Changes in Two Directions

**Melting** is the change from solid to liquid, and **freezing** is the change from liquid to solid.

**Boiling** is the change from liquid to gas, and **condensing** is the change from gas to liquid.

**Sublimation** is the change of a solid directly into a gas, and back again, without forming a liquid.

Melting, boiling and sublimation all **require energy** taken from the surroundings. Freezing, condensing and depositing all **release energy** to the surroundings.

The names must match the direction, so never write vaporising where condensing is meant.

### What the Particles Do

In a solid the particles are held in fixed positions by strong forces of attraction.

On heating they vibrate more vigorously, until the vibrations are enough to break the fixed pattern.

The particles can then move around one another, which is what a liquid is.

Boiling supplies enough energy for particles to overcome the attractive forces completely and escape as a gas.

On cooling, particles lose kinetic energy, the attractive forces dominate again, and the substance freezes or condenses.

### The Flat Parts of the Heating Curve

Practise sketching the heating curve of a solid from memory, temperature against energy supplied.

Temperature rises along the sloping sections, because added energy increases the average kinetic energy of the particles.

The two flat plateaus are the melting point and the boiling point, and the temperature does not rise during either one.

Energy continues to be supplied during a plateau, so the energy is clearly not being switched off.

It is being used to overcome the forces of attraction between the particles instead.

Because the average kinetic energy is unchanged, the temperature stays constant until the change of state is complete.

This is the standard answer for a three or four mark plateau question, so include the words overcome forces between particles.

### Reading the Curve for Identification

Melting point and boiling point are fixed for a pure substance at a given pressure.

A pure solid melts sharply at one temperature, while an impure solid melts over a range of temperatures.

Impurities lower the melting point, which is why salt is spread on icy roads in winter.

Read each plateau level as the melting point or the boiling point of the substance used.

A cooling curve is the same trace travelled backwards, with horizontal parts at freezing and at condensing.`,
      groups: [
        {
          subTitle: "Naming the Changes of State",
          bullets: [
            "**Melting:** solid to liquid, with energy absorbed as the fixed arrangement breaks down.",
            "**Freezing:** liquid to solid, with energy released as particles are locked into fixed positions.",
            "**Boiling:** liquid to gas throughout the liquid, at a fixed temperature and with bubbles forming.",
            "**Condensing:** gas to liquid, with energy released as particles slow and attractive forces take hold.",
            "**Subliming:** solid directly to gas and back again, with no liquid formed at any stage.",
            "Melting, boiling and subliming need energy; freezing, condensing and depositing release it.",
          ],
        },
        {
          subTitle: "Reading the Heating Curve",
          bullets: [
            "A rising slope means added energy is increasing the average kinetic energy of the particles.",
            "A horizontal plateau means the temperature is constant while the state of the substance is changing.",
            "Solid and liquid coexist on the first plateau, and liquid and gas coexist on the second plateau.",
            "Energy supplied during a plateau is used to overcome the forces of attraction between particles.",
            "The temperature cannot rise during a change of state because average kinetic energy is not increasing.",
            "The two plateau levels give the melting point and the boiling point of the substance used.",
          ],
        },
        {
          subTitle: "Purity, Pressure and Cooling Curves",
          bullets: [
            "A pure substance melts and boils sharply at fixed temperatures for a given pressure.",
            "Impurities lower the melting point and spread melting over a range of temperatures.",
            "Increasing the pressure raises the boiling point, which is how a pressure cooker cooks faster.",
            "A cooling curve shows the same two levels as the heating curve, travelled in the reverse direction.",
            "Read each plateau from its middle rather than from the point where the slope begins.",
          ],
        },
      ],
      examinerTips: [
        "For a plateau question always say energy overcomes forces between particles and that kinetic energy is unchanged.",
        "Name the quantities on both axes, because a graph description that never names them scores poorly.",
        "Use **sharp melting point** for pure substances and **melts over a range** for mixtures, as mark schemes phrase them.",
        "Give the energy direction with the correct change name, since a right change with wrong energy loses the mark.",
      ],
      commonMistakes: [
        "Saying no energy is supplied during a plateau, when heating continues but the temperature does not rise.",
        "Describing the particles as melting or boiling, instead of the substance melting as its particles gain energy.",
        "Confusing condensing with evaporating when reading the falling part of a cooling curve.",
        "Explaining the plateau as the burner being turned down or as heat loss to the surroundings.",
      ],
      recap: [
        "Name the change of state from a gas directly to a liquid and say whether energy is absorbed or released. [2]",
        "Explain why the temperature remains constant during melting even though energy is still supplied. [3]",
        "State and explain how the melting point of an impure solid differs from that of the pure solid. [2]",
        "Describe what happens to the particles of a solid as it is heated until it boils. [4]",
      ],
    },
    {
      title: "Evaporation and Sublimation",
      body: `### Evaporation Happens Below the Boiling Point

**Evaporation** is the change of particles from the liquid state into vapour, and it can occur at any temperature.

Only particles near the surface moving fast enough can escape the attractive forces holding them.

Because the fastest particles leave, the average kinetic energy of the liquid that remains is lower.

A lower average kinetic energy means a lower temperature, so **evaporation causes cooling**.

That two-part chain, energetic particles escape then remaining liquid is cooler, is what earns the marks.

The artwork for this section shows escaping molecules beside a thermometer whose reading is falling.

### Boiling Compared with Evaporation

Boiling occurs throughout the liquid at a fixed temperature and produces bubbles of vapour inside the liquid.

Evaporation occurs only at the surface, at any temperature below the boiling point, and produces no bubbles.

Both changes turn a liquid into a gas, so both are forms of vaporisation and both need energy.

Four factors speed up evaporation: higher temperature, larger surface area, faster air movement, lower humidity.

Sweat cooling the skin and a wet cloth cooling a bottle both work because evaporation takes energy from the surface.

### Sublimation

**Sublimation** is the change of a solid directly into a gas without passing through the liquid state.

The classic example is iodine, shown in the artwork: gentle warming gives violet vapour from dark grey crystals.

On cooling the violet vapour changes straight back to solid, and feathery crystals deposit on the cool neck of the flask.

Ammonium chloride behaves the same way, whitening near the mouth of a tube and reforming crystals as it cools.

Dry ice, solid carbon dioxide, sublimes at ordinary pressure and produces the low fog seen on stages.

Sublimation separates iodine or ammonium chloride from a mixture of salts, because only that component becomes a vapour.

At the particle level, surface particles of these solids gain enough energy to break free of the arrangement entirely.`,
      figure: sublimationArt,
      groups: [
        {
          subTitle: "Evaporation Compared with Boiling",
          bullets: [
            "Evaporation occurs only at the surface of a liquid, whereas boiling occurs throughout the liquid.",
            "Evaporation takes place at any temperature, while boiling happens only at the boiling point.",
            "Boiling produces bubbles of vapour within the liquid and evaporation produces none.",
            "Both changes turn a liquid into a gas, so both need energy from the surroundings.",
            "Evaporation is limited to the fastest particles, so it is slow at low temperatures.",
          ],
        },
        {
          subTitle: "Why Evaporation Cools a Liquid",
          bullets: [
            "The particles that escape are the ones with the highest kinetic energy.",
            "Once they have left, the remaining particles have a lower average kinetic energy.",
            "A lower average kinetic energy means the liquid is at a lower temperature.",
            "The energy needed to escape is taken from the liquid itself and from its surroundings.",
            "Skin feels cold as sweat evaporates because energy passes from the skin into the water.",
          ],
        },
        {
          subTitle: "Speeding Up or Slowing Down Evaporation",
          bullets: [
            "Raising the temperature gives more particles enough energy to escape the surface.",
            "A larger surface area exposes more particles that can leave at the same moment.",
            "A draught carries vapour molecules away before they can return to the liquid.",
            "Humid air already holds much vapour, so fewer particles escape from the liquid in total.",
            "Covering a container traps vapour above the surface and slows evaporation almost to nothing.",
          ],
        },
        {
          subTitle: "Sublimation in the Laboratory",
          bullets: [
            "Iodine gives a violet vapour on gentle warming, with no liquid seen at any stage.",
            "Violet iodine vapour deposits feathery solid crystals on the cool upper part of the flask.",
            "Ammonium chloride whitens near the mouth of a heated tube and reforms crystals as it cools.",
            "Solid carbon dioxide sublimes at ordinary pressure and is used to make a low-lying fog.",
            "Sublimation separates iodine or ammonium chloride from salts that do not form a vapour.",
          ],
        },
      ],
      examinerTips: [
        "Cooling answers need both links: the fastest particles escape, so the liquid's average kinetic energy falls.",
        "Say energy is **taken in** or **transferred from the surroundings**, since a change named without energy is half an answer.",
        "For sublimation always state that no liquid is formed, because that phrase identifies the change.",
        "When listing factors affecting evaporation, give the factor and its particle reason in one sentence.",
      ],
      commonMistakes: [
        "Saying evaporation only happens when a liquid is hot, when it occurs at any temperature.",
        "Describing evaporation as boiling at a lower temperature rather than a surface-only change.",
        "Claiming escaping particles are slower than the liquid, when they are the fastest particles present.",
        "Calling the violet colour of iodine a liquid, when it is a vapour formed directly from the solid.",
      ],
      recap: [
        "Define evaporation and explain, in terms of particles, why it causes cooling. [4]",
        "State two differences between boiling and evaporation. [2]",
        "Name the change of state in which a solid forms a vapour directly. [1]",
        "Describe and explain four changes that increase the rate at which water evaporates. [6]",
      ],
    },
    {
      title: "Diffusion",
      body: `### The Definition to Learn Word for Word

**Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration.**

That movement down a **concentration gradient** is caused by the continuous random motion of the particles themselves.

No stirring is needed and no energy from living processes is involved, which surprises many candidates.

Diffusion continues until the particles are evenly distributed, at which point the gradient has disappeared.

The particles keep moving after that, but with no net movement in any one direction.

### Bromine Vapour in Air

Liquid bromine is placed in the bottom of a gas jar and covered with a glass slide.

An empty gas jar is inverted over the first jar, so the two are mouth to mouth with the slide between them.

The slide is removed and the reddish-brown vapour moves into the upper jar until both jars are a uniform brown.

Bromine vapour is denser than air, yet it still spreads upwards, which proves that diffusion is random motion.

The change takes several minutes, because the air particles already in the upper jar are in the way.

### Potassium Manganate(VII) in Water

A single dark purple crystal of potassium manganate(VII) is dropped gently into a beaker of still water.

Purple trails spread outwards from the dissolving crystal, and the water above it turns pink.

Left undisturbed overnight the whole beaker becomes a uniform pale pink, although nothing was stirred.

This example demonstrates diffusion in a liquid and shows how far the particles can travel.

A faint but even colour proves the particles spread through the water instead of simply sinking.

### What Changes the Rate of Diffusion

Diffusion is fastest in gases, slower in liquids and slowest in solids, because of how freely the particles move.

**Relative molecular mass** matters: at the same temperature lighter particles have a greater average speed.

Ammonia, relative molecular mass 17, diffuses faster than hydrogen chloride at 36.5 in the classic tube demonstration.

**Temperature** matters equally, because heating gives particles more kinetic energy so they mix more quickly.

A steeper concentration gradient also gives a faster rate of diffusion, as more particles are available to move.`,
      figure: diffusionArt,
      groups: [
        {
          subTitle: "Definition and Explanation",
          bullets: [
            "Diffusion is the net movement of particles from higher to lower concentration down a gradient.",
            "The movement is caused by the continuous random motion of the particles themselves.",
            "Diffusion is rapid in gases, slower in liquids and extremely slow between solids in contact.",
            "Net movement stops when particles are evenly spread and the concentration gradient has gone.",
            "Particles keep moving at equilibrium but with no overall direction of spread.",
          ],
        },
        {
          subTitle: "The Two Classic Experiments",
          bullets: [
            "Bromine in a lower jar colours an inverted air jar above it within a few minutes.",
            "Bromine diffuses upwards although denser than air, showing that its motion is random.",
            "A potassium manganate(VII) crystal colours still water pale pink overnight without stirring.",
            "Concentric purple trails show particles spreading outwards as the gradient decreases.",
            "The expected observation is both jars, or the whole beaker, becoming uniformly coloured.",
          ],
        },
        {
          subTitle: "Factors That Change the Rate",
          bullets: [
            "Lighter particles diffuse faster because they have a greater average speed at the same temperature.",
            "Ammonia at relative molecular mass 17 travels further than hydrogen chloride at 36.5.",
            "In the tube demonstration the white ammonium chloride ring forms nearer the hydrogen chloride end.",
            "Raising the temperature increases kinetic energy, so diffusion is faster in gases and liquids alike.",
            "A steeper concentration gradient increases the rate of diffusion.",
          ],
        },
      ],
      examinerTips: [
        "Write **net movement** and **concentration gradient** in any definition of diffusion, as both phrases are credited.",
        "In a rate comparison, state the relative molecular mass of each gas and then say which travels further.",
        "Describe a demonstration as apparatus, observation and conclusion, since each part is separately marked.",
        "Explain the upward movement of bromine by random motion, as 'because it is lighter' contradicts the facts.",
      ],
      commonMistakes: [
        "Defining diffusion as the movement of water, which is osmosis, or omitting the word net.",
        "Saying diffusion stops entirely at equilibrium, when the particles merely show no net movement.",
        "Claiming bromine rises because it is less dense than air, when it is in fact denser.",
        "Attributing diffusion to stirring, convection or respiration instead of random particle motion.",
      ],
      recap: [
        "Define diffusion. [2]",
        "Describe the experiment with bromine in two gas jars and state what it shows about particles. [4]",
        "Explain why ammonia diffuses faster than hydrogen chloride in a glass tube. [3]",
        "Predict and explain the effect of warming the water on the spread of colour from a potassium manganate(VII) crystal. [3]",
      ],
    },
    {
      title: "Pressure in Gases",
      body: `### Where the Pressure Comes From

Gas particles travel in straight lines at high speed until they collide with each other or with a wall.

Each collision with a wall gives that wall a tiny push, which is a very small force.

Billions of collisions happen every second over the whole inner surface, so the pushes add up.

The result is a steady force spread over the wall, and **pressure is force per unit area**.

**Gas pressure is caused by particles colliding with the walls of their container**, and it acts in every direction.

The roundness of an inflated balloon is evidence that the pressure pushes equally on all parts of the surface.

### Shrinking the Volume at Constant Temperature

The classic set-up is a sealed syringe with its nozzle blocked.

Pushing the plunger in halves the volume of the trapped air and doubles the pressure recorded on a gauge.

The particles have less space, so each one strikes the walls far more often than it did before.

More collisions per second on each unit area of wall means a greater force per unit area.

At constant temperature the pressure of a fixed mass of gas is inversely proportional to its volume.

The temperature must stay constant, since changing it would alter the pressure for a different reason.

### Raising the Temperature at Constant Volume

In a sealed rigid flask the gas cannot expand, so heating changes its pressure instead.

Particles gain kinetic energy and move faster, so they strike the walls more frequently.

Each collision is also more forceful, because a faster particle carries more momentum into the wall.

Both effects raise the pressure, and a weak container will burst once the pressure becomes too great.

Cooling the gas reverses everything, since collisions fall in number and in force so the pressure drops.

Adding more particles to a fixed volume raises the pressure, which is exactly what pumping a tyre does.`,
      groups: [
        {
          subTitle: "How Gas Pressure Is Produced",
          bullets: [
            "Gas pressure is a steady force acting over an area, so pressure equals force divided by area.",
            "The force comes from particles colliding with the inner walls of the container.",
            "Collisions occur constantly, in every direction, against every wall of the container.",
            "More particles in the same volume means more collisions each second and a higher pressure.",
            "A vacuum contains no particles, so it exerts no pressure at all.",
          ],
        },
        {
          subTitle: "Changing Volume at Constant Temperature",
          bullets: [
            "Reducing the volume of a fixed mass of gas at constant temperature increases its pressure.",
            "Halving the volume doubles the pressure, as particles hit each unit of wall area twice as often.",
            "Pressure multiplied by volume stays constant while the temperature of the gas is unchanged.",
            "Compressed air in a sealed syringe pushes the plunger back out when it is released.",
            "The particles move closer together, but no individual particle is squeezed or damaged.",
          ],
        },
        {
          subTitle: "Changing Temperature at Constant Volume",
          bullets: [
            "Heating a gas in a sealed rigid flask raises its pressure because the volume cannot increase.",
            "Faster particles strike the walls more often, so the total force on the walls increases.",
            "Each collision is more forceful as well, because each particle has greater kinetic energy.",
            "Cooling the gas reduces both the number and the force of collisions, so the pressure falls.",
            "An aerosol can left in strong sunlight can burst as its internal pressure rises sharply.",
          ],
        },
        {
          subTitle: "Everyday Observations Explained",
          bullets: [
            "A balloon shrinks in cold air, because slower particles hit the rubber less often and less hard.",
            "Pumping more air into a tyre raises its pressure by adding particles to a fixed volume.",
            "A sealed bag of crisps swells uphill as outside pressure falls while the inside pressure does not.",
            "Withdrawing air from a sealed can lowers its internal pressure and the can collapses inwards.",
          ],
        },
      ],
      examinerTips: [
        "Name collisions with the walls as the cause of pressure, then add that pressure is force per unit area.",
        "For a volume question state that the temperature is constant before relating pressure to volume.",
        "For a temperature question give two reasons: more frequent collisions and more forceful collisions.",
        "Quote an observable reading, such as a gauge or a plunger position, when describing the syringe demonstration.",
      ],
      commonMistakes: [
        "Saying the particles themselves expand when the gas is heated.",
        "Writing that gas particles expand to fill the container, instead of moving apart and spreading freely.",
        "Explaining a pressure rise by particles growing larger or by new air being created inside.",
        "Confusing gas pressure with diffusion, which is the mixing of particles rather than their pushing.",
      ],
      recap: [
        "Explain, in terms of particles, how a gas exerts pressure on the walls of its container. [4]",
        "The volume of a fixed mass of gas is halved at constant temperature. Describe and explain the effect on pressure. [3]",
        "Explain why the pressure of gas in a sealed rigid flask rises when the flask is heated. [3]",
        "A sealed aerosol can left in the sun may burst. Explain why, in terms of particles. [3]",
      ],
    },
    {
      title: "Running the Topic 1 Practicals Properly",
      body: `### Measuring a Melting Point Reliably

A few crystals of the solid are placed in a drawn-out capillary tube, which is fixed beside a thermometer in a beaker of water.

The water bath is heated gently so that the temperature rises slowly, and the range over which melting is seen is recorded.

Slow heating matters, because a fast rise makes the observed temperature lag behind the true melting point of the sample.

A sharp one-degree range identifies a pure substance, while a broad and lowered range shows impurity.

### Drawing a Heating Curve for a Solid

The solid is warmed in a water bath, stirred continuously, with the thermometer bulb immersed but not touching the glass.

Temperature is recorded every thirty seconds, and heating continues after the last plateau so that the whole curve is captured.

Stirring gives every particle the same temperature, which is why an unstirred sample produces a jagged trace.

The graph is drawn as temperature against time, and the two horizontal sections give the melting and boiling points.

### Investigating the Compression of a Gas

The nozzle of a syringe is sealed, and the plunger is pushed in and released while the trapped volume is read from the barrel.

The air resists compression and then returns the plunger, which shows that a gas occupies space and exerts pressure.

Pushing half as much air into half the volume doubles the pressure, provided the temperature stays constant.

Holding the syringe in the hand warms the gas, so the readings drift, which is the standard error to criticise.

### Showing Diffusion in the Laboratory

The bromine demonstration is set up outdoors or in a fume cupboard, because bromine vapour is toxic and corrosive.

A crystal of potassium manganate(VII) is dropped gently into still water that has been left undisturbed overnight.

Diffusion of gases is also shown by cotton wool soaked in ammonia and in hydrogen chloride at opposite ends of a glass tube.

The ring of white ammonium chloride marks where the two gases meet, and its position reveals which one travelled faster.`,
      groups: [
        {
          subTitle: "Controls That Make the Results Meaningful",
          bullets: [
            "Heat the water bath slowly so that the thermometer reading keeps up with the substance being tested.",
            "Stir continuously so that all of the sample is at the same temperature at every moment.",
            "Keep the thermometer bulb away from the glass, or it reads the hot container instead of the liquid.",
            "Use the same mass of solid and the same volume of water in every repeat of the experiment.",
            "Repeat each reading and take a mean, since one plateau may be spoiled by a draught or a cold spot.",
          ],
        },
        {
          subTitle: "Safety and Apparatus Points",
          bullets: [
            "Bromine is toxic and corrosive, so the diffusion jars are handled in a fume cupboard.",
            "Iodine vapour is also irritating, so sublimation is done with a stoppered flask and gentle warming.",
            "A stopped syringe must never be forced, since the pressure produced can blow the plunger out.",
            "Gas jars used for diffusion must be dry and clean, because moisture and grease slow the spreading.",
          ],
        },
        {
          subTitle: "Evaluating the Practical Questions Asked",
          bullets: [
            "A melting temperature below the data-book value indicates impurity or loss of sample during transfer.",
            "A plateau that slopes upwards slightly usually means heating was too fast for even temperature distribution.",
            "Pressure readings that drift with time point to a leak at the nozzle or a worn syringe barrel.",
            "A diffusion ring forming centrally would disprove the relative molecular mass explanation and must be repeated.",
          ],
        },
      ],
      examinerTips: [
        "In a practical question name the apparatus precisely, such as capillary tube, water bath and stopclock.",
        "Give one improvement and the error it fixes, for example slower heating to remove a lagged reading.",
        "For the ammonia and hydrogen chloride tube, state the ring position first and then link it to relative molecular mass.",
        "Always mention safety for bromine and iodine, as a method description without it loses the final mark.",
      ],
      commonMistakes: [
        "Heating a solid directly over a flame instead of using a water bath, giving uneven and wrong temperatures.",
        "Recording only the start of melting rather than the whole range over which melting occurs.",
        "Letting the gas in the syringe warm up through the hands while claiming temperature was constant.",
        "Describing the diffusion experiment as stirring the water, which would be convection and not diffusion at all.",
      ],
      recap: [
        "Describe how to determine the melting point of a pure solid and how purity is judged from the result. [5]",
        "In the syringe demonstration, state two quantities that must be kept constant and explain why. [3]",
        "Predict where the white ring forms in the ammonia and hydrogen chloride tube and explain your answer. [3]",
        "State two safety precautions needed for the bromine diffusion demonstration. [2]",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_1: Chapter = chapterOne;
