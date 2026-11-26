import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Physics (0625) Extended Notes
 * Chapters 8–11: Thermal Physics (Internal Energy, Gas Laws, Heat Capacities, Latent Heat, Transfer Mechanisms)
 * Section: 2. Thermal physics
 */
export const PHYSICS_EXTENDED_PART2: Chapter[] = [
  {
    number: 8,
    title: "Kinetic Particle Model & Internal Energy",
    section: "2. Thermal physics",
    topic: "Internal Energy, Molecular Structures & Brownian Motion",
    intro:
      "Internal energy is the total energy stored within a thermodynamic system. Extended candidates distinguish between particle kinetic and potential energies, explain thermal phenomena at the molecular level, and analyze Brownian motion.",
    subheadings: [
      {
        title: "Internal Energy and Molecular Model",
        body:
          "**Definition of Internal Energy:**\n" +
          "Internal energy is the **total energy stored in the atoms and molecules** of a system, consisting of:\n" +
          "1. **Random kinetic energy:** Associated with the vibrational, rotational, and translational motion of particles (proportional to absolute temperature).\n" +
          "2. **Potential energy:** Associated with the intermolecular forces and chemical bonds holding particles together (changes during state changes).\n\n" +
          "**Changes During Heating and Phase Changes:**\n" +
          "- **When temperature rises (no phase change):**\n" +
          "  - Thermal energy absorbed increases the **average kinetic energy** of the particles.\n" +
          "  - Particles vibrate / move faster.\n" +
          "  - Temperature increases.\n" +
          "- **During a change of state (melting or boiling):**\n" +
          "  - Temperature remains strictly **constant**.\n" +
          "  - Thermal energy absorbed increases the **potential energy** of the particles, being used to **break or overcome intermolecular bonds**.\n" +
          "  - Average kinetic energy remains constant $\\implies$ temperature does not change.",
        examinerTips: [
          "Explain why temperature is constant during boiling: energy supplied is used to overcome attractive intermolecular forces (increasing potential energy), so average kinetic energy and temperature remain constant.",
        ],
        commonMistakes: [
          "Saying kinetic energy increases during melting — kinetic energy stays constant; only potential energy increases.",
        ],
        recap: [
          "Define internal energy in terms of particle energies.",
          "Explain what happens to particle kinetic and potential energy during the boiling of a liquid.",
        ],
      },
    ],
  },
  {
    number: 9,
    title: "Gas Laws & Absolute Temperature",
    section: "2. Thermal physics",
    topic: "Boyle's Law Calculations & Molecular Momentum",
    intro:
      "Gas pressure arises from particle-wall collisions. Extended candidates calculate pressure and volume changes using Boyle's Law (p₁V₁ = p₂V₂) and explain pressure changes using molecular momentum.",
    subheadings: [
      {
        title: "Boyle's Law & Gas Calculations",
        body:
          "**Boyle's Law:**\n" +
          "For a fixed mass of gas at constant temperature, pressure is inversely proportional to volume:\n" +
          "$$p \\propto \\frac{1}{V} \\iff \\mathbf{p_1 V_1 = p_2 V_2}$$\n\n" +
          "*Worked Example:* A cylinder of gas contains $0.40\\text{ m}^3$ of air at a pressure of $100\\text{ kPa}$. The gas is compressed at constant temperature to a volume of $0.16\\text{ m}^3$. Calculate the new pressure.\n" +
          "- $p_1 V_1 = p_2 V_2 \\implies 100 \\times 0.40 = p_2 \\times 0.16$\n" +
          "- $40 = 0.16 p_2 \\implies p_2 = \\frac{40}{0.16} = \\mathbf{250\\text{ kPa}}$.\n\n" +
          "**Molecular Explanation of Gas Pressure ($p = F/A$):**\n" +
          "- Gas particles have mass $m$ and travel with velocity $v$.\n" +
          "- Upon colliding with a wall, particle velocity reverses ($v \\to -v$).\n" +
          "- Change in momentum per collision: $\\Delta p = mv - (-mv) = 2mv$.\n" +
          "- Force exerted on wall: $F = \\frac{\\text{total change in momentum}}{\\text{time taken}}$.\n" +
          "- Pressure on wall: $p = \\frac{\\text{total force}}{\\text{area of walls}}$.",
        examinerTips: [
          "Always state that Boyle's law requires: (1) fixed mass of gas, AND (2) constant temperature.",
        ],
        commonMistakes: [
          "Forgetting to check that temperature is constant before applying $p_1 V_1 = p_2 V_2$.",
        ],
        recap: [
          "State Boyle's law and give its formula.",
          "A bubble of gas has volume 2.0 cm³ at the bottom of a lake where pressure is 300 kPa. What is its volume at the surface where pressure is 100 kPa?",
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Specific Heat Capacity & Latent Heat",
    section: "2. Thermal physics",
    topic: "Heat Capacity Equations & Latent Heat of Fusion/Vaporisation",
    intro:
      "Quantitative thermal physics measures energy required for temperature and state changes. Extended candidates perform calculations using ΔE = mcΔθ and ΔE = mL, and interpret heating curves.",
    subheadings: [
      {
        title: "Specific Heat Capacity (c)",
        body:
          "**Formula:**\n" +
          "$$\\mathbf{\\Delta E = m c \\Delta\\theta \\iff c = \\frac{\\Delta E}{m \\Delta\\theta}}$$\n" +
          "- $\\Delta E$: Thermal energy transferred ($\\text{J}$).\n" +
          "- $m$: Mass ($\\text{kg}$).\n" +
          "- $c$: Specific heat capacity ($\\text{J/(kg }^\\circ\\text{C)}$).\n" +
          "- $\\Delta\\theta$: Temperature change ($^\\circ\\text{C}$ or $\\text{K}$).\n\n" +
          "**Electrical Determination of Specific Heat Capacity:**\n" +
          "1. Use an electric immersion heater connected to a power supply with voltmeter and ammeter.\n" +
          "2. Electrical energy supplied: $\\Delta E = V I t$.\n" +
          "3. Equate: $V I t = m c \\Delta\\theta \\implies \\mathbf{c = \\frac{V I t}{m \\Delta\\theta}}$.\n" +
          "- *Sources of Error:* Heat lost to the surroundings (lagging/insulation reduces this error); heat absorbed by the container.",
        examinerTips: [
          "In electrical heating experiments, if heat is lost to surroundings, the calculated value of $c$ will be HIGHER than the true value (because measured $\\Delta\\theta$ is smaller than expected).",
        ],
        commonMistakes: [
          "Forgetting to convert time in minutes to seconds when calculating electrical energy ($E = VIt$).",
        ],
        recap: [
          "Define specific heat capacity.",
          "An electric kettle of power 2000 W takes 150 s to heat 0.8 kg of water from 20 °C to 100 °C. Calculate the specific heat capacity of water.",
        ],
      },
      {
        title: "Specific Latent Heat of Fusion and Vaporisation",
        body:
          "**Definition:**\n" +
          "Specific latent heat is the energy per unit mass required to change the state of a substance **without any change in temperature**:\n" +
          "$$\\mathbf{\\Delta E = m L \\iff L = \\frac{\\Delta E}{m}}$$\n" +
          "- Unit: joules per kilogram ($\\text{J/kg}$).\n" +
          "- **Specific Latent Heat of Fusion ($L_f$):** Energy needed to melt $1\\text{ kg}$ of solid to liquid at its melting point without temperature change.\n" +
          "- **Specific Latent Heat of Vaporisation ($L_v$):** Energy needed to boil $1\\text{ kg}$ of liquid to gas at its boiling point without temperature change.\n" +
          "- For any substance, **$L_v$ is much larger than $L_f$** because boiling requires completely breaking all intermolecular bonds and doing work against atmospheric pressure to separate molecules far apart.",
        examinerTips: [
          "State clearly why latent heat of vaporisation is much greater than latent heat of fusion: melting only weakens bonds, but vaporisation completely breaks all intermolecular attractions.",
        ],
        commonMistakes: [
          "Including a temperature change $\\Delta\\theta$ in latent heat calculations — latent heat occurs at CONSTANT temperature, so $\\Delta E = mL$ (no $\\Delta\\theta$).",
        ],
        recap: [
          "Define specific latent heat of vaporisation.",
          "Calculate the thermal energy required to completely melt 0.5 kg of ice at 0 °C (latent heat of fusion of ice = 330,000 J/kg).",
        ],
      },
    ],
  },
  {
    number: 11,
    title: "Thermal Energy Transfer Mechanisms",
    section: "2. Thermal physics",
    topic: "Free Electron Diffusion & Radiation Equilibrium",
    intro:
      "Thermal energy transfers via particle interactions and electromagnetic radiation. Extended candidates explain free electron diffusion in metals and examine thermal radiation emission rates and Earth's energy balance.",
    subheadings: [
      {
        title: "Conduction in Metals & The Greenhouse Effect",
        body:
          "**Electron Diffusion in Metals:**\n" +
          "- In non-metals, thermal conduction occurs solely through **lattice vibrations** passing kinetic energy slowly from ion to ion.\n" +
          "- In metals, conduction is dominated by **free (delocalised) electrons**:\n" +
          "  - When heated, free electrons gain kinetic energy and diffuse rapidly through the metal lattice.\n" +
          "  - They collide with distant metal ions, transferring kinetic energy much faster than lattice vibrations alone.\n" +
          "  - This explains why metals have thermal conductivities thousands of times greater than non-metals.\n\n" +
          "**Thermal Radiation and Planetary Temperature Balance:**\n" +
          "- An object at constant temperature **absorbs thermal radiation at the exact same rate it emits radiation**.\n" +
          "- If absorption rate $>$ emission rate $\\implies$ temperature rises.\n" +
          "- If emission rate $>$ absorption rate $\\implies$ temperature falls.\n" +
          "- **The Greenhouse Effect:**\n" +
          "  - Short-wavelength visible light and UV from the Sun pass through the atmosphere and heat the Earth's surface.\n" +
          "  - The warm Earth re-emits longer-wavelength **infrared radiation**.\n" +
          "  - Greenhouse gases ($\\text{CO}_2, \\text{CH}_4, \\text{H}_2\\text{O}$) absorb and re-emit this infrared radiation in all directions, trapping heat in the lower atmosphere.",
        examinerTips: [
          "Two key factors for metallic conduction marks: (1) lattice vibrations, (2) free electron diffusion.",
        ],
        commonMistakes: [
          "Thinking greenhouse gases absorb solar visible light — they absorb terrestrial INFRARED re-emitted by the Earth.",
        ],
        recap: [
          "Explain the role of free electrons in the thermal conduction of metals.",
          "Describe how greenhouse gases warm the Earth's atmosphere.",
        ],
      },
    ],
  },
];
