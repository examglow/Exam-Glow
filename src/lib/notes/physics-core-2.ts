import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Physics (0625) Core Notes
 * Chapters 8–11: Thermal Physics (Kinetic Model, Gases, Thermal Properties, Heat Transfer)
 * Section: 2. Thermal physics
 */
export const PHYSICS_CORE_PART2: Chapter[] = [
  {
    number: 8,
    title: "Kinetic Particle Model of Matter",
    section: "2. Thermal physics",
    topic: "States of Matter, Molecular Structures & Brownian Motion",
    intro:
      "All matter consists of tiny particles in continuous motion. Candidates describe particle arrangements in solids, liquids, and gases, and explain Brownian motion as evidence for microscopic particle collisions.",
    subheadings: [
      {
        title: "Particle Structure of Solids, Liquids and Gases",
        body:
          "**1. Solids:**\n" +
          "- **Arrangement:** Regular 3D crystal lattice, tightly packed.\n" +
          "- **Forces:** Very strong attractive forces between particles.\n" +
          "- **Motion:** Particles vibrate about fixed positions; cannot move past each other.\n" +
          "- **Properties:** Fixed shape, fixed volume, virtually incompressible.\n\n" +
          "**2. Liquids:**\n" +
          "- **Arrangement:** Irregular, closely packed with small gaps.\n" +
          "- **Forces:** Moderate forces; particles are in contact but can slide past one another.\n" +
          "- **Motion:** Random translational and sliding motion.\n" +
          "- **Properties:** Takes the shape of the container bottom, fixed volume, incompressible.\n\n" +
          "**3. Gases:**\n" +
          "- **Arrangement:** Widely separated, completely random.\n" +
          "- **Forces:** Negligible attractive forces between particles.\n" +
          "- **Motion:** Rapid, random motion in straight lines between collisions with other molecules and container walls.\n" +
          "- **Properties:** No fixed shape, expands to fill entire container volume, easily compressed.",
        examinerTips: [
          "State clearly: particles in a solid do NOT move from place to place — they only vibrate about fixed lattice points.",
          "Temperature is a measure of the average kinetic energy of the particles in a substance.",
        ],
        commonMistakes: [
          "Saying particles in a liquid are far apart — particles in liquids are in contact, with only slightly more space than in solids.",
        ],
        recap: [
          "Describe the arrangement and motion of particles in a solid and a gas.",
          "State what happens to the motion of particles when a substance is heated.",
        ],
      },
      {
        title: "Brownian Motion & Microscopic Collisions",
        body:
          "**What is Brownian Motion?**\n" +
          "- The random, erratic, jerky motion of small microscopic visible particles (e.g. smoke particles in air or pollen grains in water) suspended in a fluid.\n" +
          "- **Experimental Observation:** Under a microscope, illuminated smoke particles appear as bright specks of light constantly darting around unpredictably.\n" +
          "- **Explanation:**\n" +
          "  - Smoke particles are constantly bombarded by invisible, fast-moving air molecules.\n" +
          "  - Because the collisions are random, at any given instant there is an **unequal number of collisions from different directions** (an unbalanced force).\n" +
          "  - This microscopic bombardment causes the much larger visible smoke particle to change direction abruptly.\n" +
          "- **Significance:** Provides direct experimental evidence that matter consists of small particles in continuous random motion.",
        examinerTips: [
          "Be precise: smoke particles are visible, air molecules are invisible. It is the invisible air molecules colliding with smoke particles that causes Brownian motion.",
        ],
        commonMistakes: [
          "Saying smoke particles collide with each other — Brownian motion is caused by collisions with fluid (air/water) molecules.",
        ],
        recap: [
          "What is observed when smoke particles in air are viewed under a microscope?",
          "Explain what causes Brownian motion.",
        ],
      },
    ],
  },
  {
    number: 9,
    title: "Gases, Pressure & Absolute Temperature",
    section: "2. Thermal physics",
    topic: "Gas Pressure Mechanism, Boyle's Law & The Kelvin Scale",
    intro:
      "Gas pressure arises from molecular collisions with container walls. Candidates understand how changing temperature and volume affects gas pressure and learn the Kelvin temperature scale.",
    subheadings: [
      {
        title: "Microscopic Cause of Gas Pressure & Effects of Temperature and Volume",
        body:
          "**How Gas Particles Exert Pressure:**\n" +
          "- Gas particles move rapidly and randomly in all directions.\n" +
          "- When particles **collide with the walls of the container**, they rebound, undergoing a change in momentum.\n" +
          "- This change in momentum exerts a force on the wall ($F = \\Delta p / \\Delta t$).\n" +
          "- The total force divided by the area of the container walls gives the **gas pressure** ($p = F/A$).\n\n" +
          "**Effect of Increasing Temperature at Constant Volume:**\n" +
          "1. As temperature increases, particles gain kinetic energy and move faster.\n" +
          "2. Particles collide with the walls **more frequently**.\n" +
          "3. Each collision exerts a **greater force** (greater change in momentum).\n" +
          "4. Therefore, total force on the walls increases and **gas pressure increases** ($p \\propto T$).\n\n" +
          "**Effect of Decreasing Volume at Constant Temperature (Boyle's Law):**\n" +
          "1. Decreasing volume reduces the surface area and confines the same number of molecules to a smaller space.\n" +
          "2. The molecules collide with the container walls **more frequently**.\n" +
          "3. Therefore, **gas pressure increases** inversely with volume:\n" +
          "   $$\\mathbf{p V = \\text{constant} \\iff p_1 V_1 = p_2 V_2}$$\n\n" +
          "**The Absolute (Kelvin) Temperature Scale:**\n" +
          "- **Absolute zero ($0\\text{ K} = -273^\\circ\\text{C}$):** The lowest theoretical temperature at which particles have zero kinetic energy and exert zero pressure.\n" +
          "- Conversion formula: $\\mathbf{T(\\text{K}) = \\theta(^\\circ\\text{C}) + 273}$.",
        examinerTips: [
          "Always mention BOTH points when explaining why pressure increases with temperature: (1) collisions are more frequent, AND (2) collisions are harder / exert greater force.",
        ],
        commonMistakes: [
          "Saying particles expand when heated — the particles themselves stay the same size; they just move faster and push further apart.",
        ],
        recap: [
          "Explain how gas molecules exert pressure on the walls of a balloon.",
          "Convert $27^\\circ\\text{C}$ to kelvin.",
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Thermal Properties & Changes of State",
    section: "2. Thermal physics",
    topic: "Thermal Expansion, Specific Heat Capacity & Evaporation",
    intro:
      "Substances expand when heated and change state at characteristic temperatures. Candidates study thermal expansion in solids, liquids, and gases, specific heat capacity, and the cooling effect of evaporation.",
    subheadings: [
      {
        title: "Thermal Expansion in Solids, Liquids and Gases",
        body:
          "**Why Substances Expand on Heating:**\n" +
          "- When heated, particles absorb thermal energy and vibrate / move faster.\n" +
          "- The increased motion causes particles to push slightly further apart against interparticle forces.\n" +
          "- **Relative Expansion Rates:**\n" +
          "  $$\\text{Gases expand most} \\gg \\text{Liquids} > \\text{Solids expand least}$$\n" +
          "  Gases expand approximately $1000$ times more than solids for the same temperature rise because forces between gas particles are negligible.\n\n" +
          "**Applications and Consequences of Expansion:**\n" +
          "- **Liquid-in-Glass Thermometer:** Alcohol or mercury expands up a narrow capillary tube when temperature rises.\n" +
          "- **Bimetallic Strip:** Two different metals (e.g. brass and invar/iron) bonded together; brass expands faster than iron, causing the strip to bend and open/close contacts in a thermostat.\n" +
          "- **Expansion Gaps:** Gaps left between railway rails, bridge joints, and concrete slabs to prevent buckling during hot weather.",
        examinerTips: [
          "State clearly: particles do NOT get bigger when heated; the distance between particles increases.",
        ],
        commonMistakes: [
          "Claiming that atoms expand when heated.",
        ],
        recap: [
          "Rank solids, liquids, and gases in order of their rate of thermal expansion.",
          "Explain why small gaps are left between sections of railway track.",
        ],
      },
      {
        title: "Specific Heat Capacity, Boiling & Evaporation",
        body:
          "**Specific Heat Capacity ($c$):**\n" +
          "- The amount of thermal energy required to raise the temperature of $1\\text{ kg}$ of a substance by $1^\\circ\\text{C}$ (or $1\\text{ K}$):\n" +
          "  $$\\mathbf{\\Delta E = m c \\Delta\\theta}$$\n" +
          "  where $\\Delta E$ is thermal energy ($\\text{J}$), $m$ is mass ($\\text{kg}$), $c$ is specific heat capacity ($\\text{J/(kg }^\\circ\\text{C)}$), and $\\Delta\\theta$ is temperature change ($^\\circ\\text{C}$).\n" +
          "- Water has an exceptionally high specific heat capacity ($4200\\text{ J/(kg }^\\circ\\text{C)}$), making it an excellent coolant for car engines and domestic central heating.\n\n" +
          "**Differences Between Boiling and Evaporation:**\n" +
          "| Feature | Evaporation | Boiling |\n" +
          "|---|---|---|\n" +
          "| Temperature | Occurs at **any temperature** below boiling point | Occurs only at a **fixed boiling point** |\n" +
          "| Location | Occurs only at the **liquid surface** | Occurs **throughout the liquid** (bubbles form) |\n" +
          "| Bubbles | No bubbles formed | Bubbles of vapour form throughout |\n" +
          "| Energy source | Absorbs heat from surroundings, causing cooling | Requires an active external heat supply |\n\n" +
          "**Why Evaporation Causes Cooling:**\n" +
          "- Molecules in a liquid have a distribution of kinetic energies.\n" +
          "- The **most energetic molecules** near the surface have enough kinetic energy to overcome attractive intermolecular forces and escape into the air as vapour.\n" +
          "- The remaining molecules in the liquid have a **lower average kinetic energy**.\n" +
          "- Since temperature is proportional to average kinetic energy, the **temperature of the liquid decreases** (cooling effect).",
        examinerTips: [
          "In evaporation cooling questions, explain: the fastest / most energetic molecules escape $\\implies$ average kinetic energy of remaining molecules falls $\\implies$ temperature falls.",
        ],
        commonMistakes: [
          "Calling boiling and evaporation the same process — boiling happens at a fixed temperature throughout the whole liquid; evaporation happens at any temperature only at the surface.",
        ],
        recap: [
          "State the formula linking thermal energy, mass, specific heat capacity, and temperature change.",
          "Explain in terms of molecules why sweating cools the human body.",
        ],
      },
    ],
  },
  {
    number: 11,
    title: "Transfer of Thermal Energy",
    section: "2. Thermal physics",
    topic: "Conduction, Convection & Thermal Radiation",
    intro:
      "Thermal energy transfers from hot regions to cooler regions via conduction, convection, and radiation. Candidates explain everyday applications including insulation, thermal flasks, and coastal breezes.",
    subheadings: [
      {
        title: "Conduction and Convection",
        body:
          "**1. Conduction (Thermal Transfer in Solids):**\n" +
          "- **In Non-Metals (Insulators):** When heated, particles at the hot end vibrate more vigorously and collide with neighbouring particles, transferring kinetic energy along the lattice. (Relatively slow process).\n" +
          "- **In Metals (Good Conductors):** Metals contain a sea of **free (delocalised) electrons**.\n" +
          "  - When heated, free electrons gain kinetic energy and move rapidly through the metallic lattice.\n" +
          "  - They collide with distant metal ions and other electrons, transferring energy throughout the metal very quickly.\n" +
          "- **Good Conductors:** Copper, aluminium, silver, iron.\n" +
          "- **Good Insulators (Poor Conductors):** Wood, plastic, glass, air, trapped air pockets in wool and fibreglass.\n\n" +
          "**2. Convection (Thermal Transfer in Fluids: Liquids and Gases):**\n" +
          "- Cannot occur in solids because particles cannot flow.\n" +
          "- **Mechanism of a Convection Current:**\n" +
          "  1. Fluid at the base is heated; particles gain kinetic energy and move faster, pushing further apart.\n" +
          "  2. The heated fluid **expands and becomes less dense**.\n" +
          "  3. The warm, less dense fluid **rises**.\n" +
          "  4. Cooler, denser fluid sinks to replace it, establishing a circulating **convection current**.\n" +
          "- *Examples:* Domestic radiators, electric kettles, coastal sea breezes.",
        examinerTips: [
          "State clearly: metals conduct heat much better than non-metals because metals possess FREE DELOCALISED ELECTRONS that diffuse rapidly through the lattice.",
          "Convection requires: expands $\\implies$ becomes less dense $\\implies$ rises.",
        ],
        commonMistakes: [
          "Saying 'heat rises' — the heated FLUID expands, becomes less dense, and rises.",
        ],
        recap: [
          "Explain why metals are much better thermal conductors than plastics.",
          "Describe how a convection current forms in a beaker of water heated at the bottom.",
        ],
      },
      {
        title: "Thermal Radiation & Insulation",
        body:
          "**Thermal Radiation (Infrared Radiation):**\n" +
          "- Part of the electromagnetic spectrum; travels as transverse waves at the speed of light ($3 \\times 10^8\\text{ m/s}$).\n" +
          "- **Does NOT require a medium** — can travel through a vacuum (this is how heat from the Sun reaches Earth).\n" +
          "- All objects above absolute zero emit thermal radiation.\n\n" +
          "**Comparing Surfaces for Emission, Absorption, and Reflection:**\n" +
          "| Surface Type | Emission of IR | Absorption of IR | Reflection of IR |\n" +
          "|---|---|---|---|\n" +
          "| **Matt black** | **Best** emitter | **Best** absorber | Poor reflector |\n" +
          "| **Shiny white / silver** | Poor emitter | Poor absorber | **Best** reflector |\n\n" +
          "**Applications:**\n" +
          "- **Cooling fins on car radiators:** Painted matt black to radiate heat quickly.\n" +
          "- **Houses in hot countries:** Painted white to reflect solar radiation and stay cool.\n" +
          "- **Vacuum Flask (Thermos):**\n" +
          "  - Double-walled glass with vacuum between: Stops conduction and convection.\n" +
          "  - Silvered inner surfaces: Reflects radiation back inside, minimising radiation loss.\n" +
          "  - Plastic stopper: Prevents convection and evaporation from the top.",
        examinerTips: [
          "Remember: a good absorber is ALWAYS a good emitter! Matt black is both the best absorber and the best emitter of infrared radiation.",
        ],
        commonMistakes: [
          "Saying shiny surfaces attract heat — shiny surfaces REFLECT infrared radiation.",
        ],
        recap: [
          "Which surface is the best emitter of thermal radiation: matt black or polished silver?",
          "Explain how a vacuum flask reduces heat transfer by conduction and convection.",
        ],
      },
    ],
  },
];
