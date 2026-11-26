import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Physics (0625) Extended Notes
 * Chapters 17–26: Electricity & Magnetism, Nuclear Physics, Space Physics
 * Sections: 4. Electricity and magnetism, 5. Nuclear physics, 6. Space physics
 */
export const PHYSICS_EXTENDED_PART4: Chapter[] = [
  {
    number: 17,
    title: "Electric Fields & Charge Interactions",
    section: "4. Electricity and magnetism",
    topic: "Electric Fields, Radial & Uniform Fields",
    intro:
      "Electric charges produce electric fields. Extended candidates define electric fields, sketch field patterns around isolated charges and between parallel plates, and relate field lines to force directions.",
    subheadings: [
      {
        title: "Electric Fields and Field Line Patterns",
        body:
          "**Definition of an Electric Field:**\n" +
          "An electric field is a **region of space in which an electric charge experiences a force**.\n" +
          "- **Direction of an Electric Field Line:** The direction of the force that would act on a **positive test charge** placed at that point.\n" +
          "- Field lines point **away from positive charges** and **towards negative charges**.\n\n" +
          "**Key Electric Field Patterns:**\n" +
          "1. **Isolated Positive Point Charge:** Radial straight lines directed outward in all directions.\n" +
          "2. **Isolated Negative Point Charge:** Radial straight lines directed inward towards the charge.\n" +
          "3. **Between Oppositely Charged Parallel Metal Plates:**\n" +
          "   - **Uniform electric field:** Straight, parallel, equally spaced lines directed from the positive plate to the negative plate.\n" +
          "   - Field strength is constant everywhere between the plates (except for slight fringing at the edges).\n" +
          "   - A charged particle entering perpendicular to this field follows a parabolic trajectory (like a projectile in gravity).",
        examinerTips: [
          "Cambridge definition mark: 'an electric field is a region in which a charge experiences an electric force'.",
          "Arrows on electric field lines MUST point from positive (+) to negative (-).",
        ],
        commonMistakes: [
          "Drawing field lines crossing or pointing towards a positive charge.",
        ],
        recap: [
          "Define an electric field.",
          "Draw the electric field pattern between two oppositely charged parallel metal plates.",
        ],
      },
    ],
  },
  {
    number: 18,
    title: "Resistance, Resistivity & I-V Characteristics",
    section: "4. Electricity and magnetism",
    topic: "Resistivity Formula R = ρL/A & Non-Ohmic Components",
    intro:
      "Electrical resistance depends on the physical dimensions and material properties of a conductor. Extended candidates use the resistivity equation R = ρL/A and analyze non-linear I-V characteristics.",
    subheadings: [
      {
        title: "Resistivity and Physical Dimensions of Conductors",
        body:
          "**Factors Affecting the Resistance of a Wire:**\n" +
          "1. **Length ($L$):** Resistance is **directly proportional to length** ($R \\propto L$). Doubling the length doubles the resistance.\n" +
          "2. **Cross-Sectional Area ($A$):** Resistance is **inversely proportional to cross-sectional area** ($R \\propto \\frac{1}{A}$). Doubling the area halves the resistance.\n" +
          "3. **Material (Resistivity $\\rho$):** Depends on atomic structure.\n" +
          "4. **Temperature:** For metals, resistance increases as temperature increases.\n\n" +
          "**The Resistivity Formula:**\n" +
          "$$\\mathbf{R = \\frac{\\rho L}{A}}$$\n" +
          "where $R$ is resistance in ohms ($\\Omega$), $\\rho$ is resistivity in ohm metres ($\\Omega\\text{ m}$), $L$ is length in metres ($\\text{m}$), and $A$ is cross-sectional area in square metres ($\\text{m}^2$).\n\n" +
          "*Worked Example:* A copper wire of length $2.0\\text{ m}$ has a cross-sectional area of $5.0 \\times 10^{-7}\\text{ m}^2$. The resistivity of copper is $1.7 \\times 10^{-8}\\ \\Omega\\text{ m}$. Calculate its resistance.\n" +
          "$$R = \\frac{(1.7 \\times 10^{-8}) \\times 2.0}{5.0 \\times 10^{-7}} = \\frac{3.4 \\times 10^{-8}}{5.0 \\times 10^{-7}} = \\mathbf{0.068\\ \\Omega}$$",
        examinerTips: [
          "Remember that wire cross-section is circular: $A = \\pi r^2 = \\pi (d/2)^2$. Halving the diameter decreases area by a factor of 4, increasing resistance by a factor of 4!",
        ],
        commonMistakes: [
          "Assuming halving wire diameter doubles resistance — halving diameter quadruples resistance ($R \\propto 1/d^2$).",
        ],
        recap: [
          "State how the resistance of a wire changes if its length is doubled and its cross-sectional area is halved.",
          "State the formula linking resistance, resistivity, length, and cross-sectional area.",
        ],
      },
    ],
  },
  {
    number: 19,
    title: "Circuit Analysis & Potential Dividers",
    section: "4. Electricity and magnetism",
    topic: "Potential Divider Equations & Sensor Switching",
    intro:
      "Potential dividers produce variable output voltages from a fixed supply. Extended candidates use ratio equations V₁/V₂ = R₁/R₂ and design automatic control circuits with thermistors and LDRs.",
    subheadings: [
      {
        title: "Potential Divider Equations and Practical Sensors",
        body:
          "**The Potential Divider Formula:**\n" +
          "When two resistors $R_1$ and $R_2$ are connected in series across supply voltage $V_{\\text{in}}$:\n" +
          "$$\\frac{V_1}{V_2} = \\frac{R_1}{R_2}$$\n" +
          "$$\\mathbf{V_{\\text{out}} = V_{\\text{in}} \\left(\\frac{R_2}{R_1 + R_2}\\right)}$$\n\n" +
          "*Worked Example:* A $12\\text{ V}$ power supply is connected across a fixed resistor $R_1 = 4000\\ \\Omega$ and an LDR ($R_2$). In bright light, $R_2 = 1000\\ \\Omega$; in darkness, $R_2 = 16{,}000\\ \\Omega$. Find $V_{\\text{out}}$ across the LDR in both conditions.\n" +
          "- **In bright light:** $V_{\\text{out}} = 12 \\times \\frac{1000}{4000 + 1000} = 12 \\times \\frac{1}{5} = \\mathbf{2.4\\text{ V}}$.\n" +
          "- **In darkness:** $V_{\\text{out}} = 12 \\times \\frac{16000}{4000 + 16000} = 12 \\times \\frac{16000}{20000} = 12 \\times 0.8 = \\mathbf{9.6\\text{ V}}$.\n" +
          "- *Application:* The high $9.6\\text{ V}$ in darkness can switch on a transistor or relay to automatically illuminate a night lamp.",
        examinerTips: [
          "In a potential divider, voltage divides in direct proportion to resistance: larger resistance gets the larger share of the voltage.",
        ],
        commonMistakes: [
          "Inverting the resistor fraction when calculating $V_{\\text{out}}$.",
        ],
        recap: [
          "State the potential divider equation.",
          "A 9 V battery is connected across a 3 kΩ resistor in series with a 6 kΩ resistor. Calculate the voltage across each resistor.",
        ],
      },
    ],
  },
  {
    number: 20,
    title: "Electrical Safety, Power & Energy",
    section: "4. Electricity and magnetism",
    topic: "P = IV = I²R Calculations, Fuses & Earthing",
    intro:
      "Electrical appliances convert electrical energy into other forms. Extended candidates calculate power and energy dissipation and analyze fault safety with fuses and earthing.",
    subheadings: [
      {
        title: "Electrical Power, Energy Dissipation & Fuse Protection",
        body:
          "**Power Formulae:**\n" +
          "$$\\mathbf{P = I V = I^2 R = \\frac{V^2}{R}}$$\n" +
          "**Electrical Energy Formula:**\n" +
          "$$\\mathbf{E = P t = I V t = I^2 R t}$$\n\n" +
          "*Worked Example:* An electric heater has a resistance of $46\\ \\Omega$ and is connected to a $230\\text{ V}$ mains supply.\n" +
          "- Operating current: $I = \\frac{V}{R} = \\frac{230}{46} = 5.0\\text{ A}$.\n" +
          "- Power rating: $P = IV = 5.0 \\times 230 = \\mathbf{1150\\text{ W}}$ ($1.15\\text{ kW}$).\n" +
          "- Energy used in $30\\text{ minutes}$ ($1800\\text{ s}$):\n" +
          "  $$E = P t = 1150 \\times 1800 = \\mathbf{2.07 \\times 10^6\\text{ J}}$$.\n" +
          "- **Fuse Selection:** With a normal current of $5.0\\text{ A}$, a $7\\text{ A}$ or $13\\text{ A}$ fuse is required (a $3\\text{ A}$ or $5\\text{ A}$ fuse would melt during normal operation).",
        examinerTips: [
          "In power loss through transmission lines, always use $P = I^2 R$ with the line current and line resistance, NOT the supply voltage!",
        ],
        commonMistakes: [
          "Using mains supply voltage in $P = V^2 / R$ to calculate power lost in a transmission cable (the voltage dropped across the cable is only a small fraction of mains voltage).",
        ],
        recap: [
          "State three formulas for electrical power.",
          "An appliance rated at 230 V, 920 W is used. What size fuse (3 A, 5 A, or 13 A) should be fitted to its plug?",
        ],
      },
    ],
  },
  {
    number: 21,
    title: "Electromagnetic Induction & Transformers",
    section: "4. Electricity and magnetism",
    topic: "Faraday's Law, Lenz's Law & Transformer Efficiency",
    intro:
      "Electromagnetic induction is governed by Faraday's and Lenz's laws. Extended candidates calculate induced voltages, apply Lenz's law, and calculate transformer voltages, currents, and efficiencies.",
    subheadings: [
      {
        title: "Faraday's Law & Lenz's Law",
        body:
          "**Faraday's Law of Electromagnetic Induction:**\n" +
          "The magnitude of the induced electromotive force (e.m.f.) is directly proportional to the **rate of cutting of magnetic flux lines** (rate of change of magnetic field).\n\n" +
          "**Lenz's Law:**\n" +
          "The direction of the induced current is always such that its magnetic field **opposes the change that produces it**.\n" +
          "- *Example:* When the North pole of a magnet is pushed into a coil:\n" +
          "  - Current is induced in a direction that creates a **North pole** at that end of the coil to repel the approaching magnet.\n" +
          "  - Work must be done against this repulsive force to push the magnet in, satisfying the Conservation of Energy.\n" +
          "- When the North pole is pulled out:\n" +
          "  - Current reverses to create a **South pole** at that end to attract and oppose the withdrawing magnet.",
        examinerTips: [
          "Lenz's law is a direct consequence of the Conservation of Energy: if induced current assisted the motion instead of opposing it, energy would be created from nothing!",
        ],
        commonMistakes: [
          "Thinking a stationary magnet inside a coil induces an e.m.f. — there MUST be relative motion / changing magnetic field to induce a voltage.",
        ],
        recap: [
          "State Faraday's law and Lenz's law of electromagnetic induction.",
          "Explain why pushing a magnet into a coil requires mechanical work.",
        ],
      },
      {
        title: "Transformer Efficiency & Current Equations",
        body:
          "**Transformer Turns and Voltage Ratio:**\n" +
          "$$\\mathbf{\\frac{V_p}{V_s} = \\frac{N_p}{N_s}}$$\n\n" +
          "**For a 100% Efficient (Ideal) Transformer:**\n" +
          "$$\\text{Power in primary} = \\text{Power in secondary} \\implies \\mathbf{I_p V_p = I_s V_s}$$\n" +
          "$$\\mathbf{\\frac{I_p}{I_s} = \\frac{V_s}{V_p} = \\frac{N_s}{N_p}}$$\n" +
          "- In a **step-up transformer** ($V_s > V_p$), the secondary current is smaller than the primary current ($I_s < I_p$).\n\n" +
          "**Real Transformer Efficiency:**\n" +
          "$$\\mathbf{\\text{Efficiency} = \\frac{\\text{Power output}}{\\text{Power input}} \\times 100\\% = \\frac{I_s V_s}{I_p V_p} \\times 100\\%}$$",
        examinerTips: [
          "Notice the inverse relationship for currents: as voltage steps UP, current steps DOWN ($I_s / I_p = V_p / V_s$).",
        ],
        commonMistakes: [
          "Thinking a step-up transformer creates more power — power cannot increase (energy conservation); higher voltage means proportionally lower current.",
        ],
        recap: [
          "State the formula relating primary and secondary currents and voltages in a 100% efficient transformer.",
          "A step-down transformer converts 230 V to 11.5 V. If the secondary current is 4.0 A, calculate the primary current (assume 100% efficiency).",
        ],
      },
    ],
  },
  {
    number: 22,
    title: "Atomic Structure & The Rutherford Scattering Experiment",
    section: "5. Nuclear physics",
    topic: "The Geiger-Marsden Alpha Particle Scattering Experiment",
    intro:
      "The nuclear model of the atom was established by the Geiger-Marsden alpha-particle scattering experiment. Extended candidates explain the observations, deductions, and dimensions of the nuclear atom.",
    subheadings: [
      {
        title: "The Rutherford Alpha Scattering Experiment",
        body:
          "**Experimental Setup:**\n" +
          "- A narrow beam of positively charged **alpha ($\\alpha$) particles** was fired at a very thin gold foil inside a vacuum chamber.\n" +
          "- A moveable zinc sulfide detector detected the scattered alpha particles via scintillations.\n\n" +
          "**Key Observations and Deductions:**\n" +
          "1. **Observation 1:** The **vast majority (over 99.9%)** of alpha particles passed straight through the foil with no deflection.\n" +
          "   - **Deduction:** The atom is **mostly empty space**.\n" +
          "2. **Observation 2:** A **small percentage** of alpha particles were deflected through small angles ($< 90^\\circ$).\n" +
          "   - **Deduction:** There is a concentrated **positive charge** inside the atom that repels the positive alpha particles via electrostatic repulsion.\n" +
          "3. **Observation 3:** A **tiny fraction (about 1 in 8000)** rebounded backwards through angles greater than $90^\\circ$ (back-scattered).\n" +
          "   - **Deduction:** The positive charge and almost all the **mass of the atom is concentrated in an extremely small, dense central nucleus**.",
        examinerTips: [
          "Link each observation directly to its deduction:\n- Most pass straight through $\\implies$ atom is mostly empty space.\n- Some deflected $\\implies$ nucleus is positively charged.\n- Very few rebound backwards $\\implies$ nucleus is extremely small and contains most of the atom's mass.",
        ],
        commonMistakes: [
          "Confusing the plum pudding model with Rutherford's nuclear model.",
        ],
        recap: [
          "State the three observations of the Rutherford alpha scattering experiment and the deduction made from each.",
        ],
      },
    ],
  },
  {
    number: 23,
    title: "Nuclear Decay Equations, Radiation & Half-Life",
    section: "5. Nuclear physics",
    topic: "Balancing Alpha & Beta Decays, Deflection & Half-Life",
    intro:
      "Radioactive decay transforms parent nuclei into daughter nuclei. Extended candidates write balanced nuclear equations for alpha and beta emission and perform multi-step half-life calculations.",
    subheadings: [
      {
        title: "Nuclear Decay Equations (Alpha and Beta Decay)",
        body:
          "**Conservation Laws in Nuclear Reactions:**\n" +
          "In every nuclear decay equation:\n" +
          "1. **Conservation of Nucleon Number ($A$):** The sum of top numbers on LHS equals the sum on RHS.\n" +
          "2. **Conservation of Proton Number ($Z$):** The sum of bottom numbers on LHS equals the sum on RHS.\n\n" +
          "**1. Alpha ($\\alpha$) Decay:**\n" +
          "- An unstable nucleus emits a helium nucleus ($^4_2\\alpha$ / $^4_2\\text{He}$):\n" +
          "  $$\\mathbf{^A_Z X \\to ^{A-4}_{Z-2} Y + ^4_2\\alpha}$$\n" +
          "- *Rules:* Mass number decreases by $4$; atomic number decreases by $2$.\n" +
          "- *Example:* $^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + ^4_2\\text{He}$.\n\n" +
          "**2. Beta ($\\beta^-$) Decay:**\n" +
          "- Inside the nucleus, a neutron spontaneously converts into a proton and an electron:\n" +
          "  $$^1_0 n \\to ^1_1 p + ^0_{-1}e$$\n" +
          "- The fast electron is emitted as a beta particle ($^0_{-1}\\beta$ / $^0_{-1}e$):\n" +
          "  $$\\mathbf{^A_Z X \\to ^A_{Z+1} Y + ^0_{-1}\\beta}$$\n" +
          "- *Rules:* Mass number $A$ remains **unchanged**; atomic number $Z$ **increases by $1$**.\n" +
          "- *Example:* $^{14}_6\\text{C} \\to ^{14}_7\\text{N} + ^0_{-1}e$.\n\n" +
          "**3. Gamma ($\\gamma$) Decay:**\n" +
          "- Emission of excess energy as a high-frequency electromagnetic photon ($^0_0\\gamma$).\n" +
          "- Nucleon number and proton number remain completely unchanged: $^A_Z X^* \\to ^A_Z X + ^0_0\\gamma$.",
        examinerTips: [
          "Check arithmetic on both sides: top numbers MUST balance, and bottom numbers MUST balance (remembering $-1$ in beta decay!).",
        ],
        commonMistakes: [
          "Forgetting that beta emission increases the proton number by 1 ($Z \\to Z+1$).",
        ],
        recap: [
          "Write the balanced nuclear equation for the alpha decay of Radium-226 ($^{226}_{88}\\text{Ra}$).",
          "Write the balanced nuclear equation for the beta decay of Strontium-90 ($^{90}_{38}\\text{Sr}$).",
        ],
      },
      {
        title: "Deflection in Electric and Magnetic Fields",
        body:
          "**Behaviour of Radiations in Electric and Magnetic Fields:**\n" +
          "- **Alpha ($\\alpha$) Particles ($+2$ charge, heavy):**\n" +
          "  - In an electric field: Deflected towards the **negative plate** with slight deflection (due to large mass / inertia).\n" +
          "  - In a magnetic field: Deflected according to Fleming's left-hand rule (acting as a positive current).\n" +
          "- **Beta ($\\beta$) Particles ($-1$ charge, light):**\n" +
          "  - In an electric field: Deflected towards the **positive plate** with **large curvature** (due to tiny electron mass).\n" +
          "  - In a magnetic field: Deflected in the **opposite direction** to alpha particles with much greater curvature.\n" +
          "- **Gamma ($\\gamma$) Rays (Zero charge):**\n" +
          "  - Undeviated / not deflected by either electric or magnetic fields; travel straight through.",
        examinerTips: [
          "Beta particles curve much more sharply than alpha particles because their mass is almost 8000 times smaller, even though their charge is only half as large.",
        ],
        commonMistakes: [
          "Drawing alpha and beta deflecting in the same direction.",
        ],
        recap: [
          "Describe the deflection of alpha, beta, and gamma radiation as they pass through an electric field between two oppositely charged plates.",
        ],
      },
    ],
  },
  {
    number: 24,
    title: "Planetary Orbits & Gravitational Fields",
    section: "6. Space physics",
    topic: "Orbital Mechanics & Field Variations Across the Solar System",
    intro:
      "Gravitational attraction provides the centripetal force governing planetary orbits. Extended candidates calculate orbital speeds (v = 2πr/T) and analyze gravitational variations across the Solar System.",
    subheadings: [
      {
        title: "Orbital Calculations & Gravitational Dynamics",
        body:
          "**Orbital Speed Equation:**\n" +
          "$$\\mathbf{v = \\frac{2\\pi r}{T}}$$\n" +
          "where $r$ is orbital radius ($\\text{m}$) and $T$ is orbital period ($\\text{s}$).\n\n" +
          "**Gravitational Field Strength Across the Solar System:**\n" +
          "- Gravitational field strength at the surface of a planet depends on its **mass** and **radius** ($g = GM/R^2$).\n" +
          "- Massive terrestrial planets like Earth ($g = 9.8\\text{ N/kg}$) have stronger gravitational fields than small bodies like the Moon ($g = 1.6\\text{ N/kg}$).\n" +
          "- Gas giants like Jupiter have surface gravitational field strengths exceeding $24\\text{ N/kg}$.",
        examinerTips: [
          "Always convert orbital periods into seconds when calculating orbital speed in m/s ($1\\text{ day} = 86{,}400\\text{ s}$; $1\\text{ year} = 3.15 \\times 10^7\\text{ s}$).",
        ],
        commonMistakes: [
          "Plugging time in days or years directly into $v = 2\\pi r / T$ without converting to seconds.",
        ],
        recap: [
          "The Earth orbits the Sun at an average distance of 1.5 × 10¹¹ m in 3.15 × 10⁷ s. Calculate Earth's orbital speed in km/s.",
        ],
      },
    ],
  },
  {
    number: 25,
    title: "The Sun, Fusion & Stellar Evolution",
    section: "6. Space physics",
    topic: "Nuclear Fusion in Stars & Detailed Stellar Lifecycles",
    intro:
      "Stars are powered by nuclear fusion. The evolutionary pathway of a star is determined entirely by its mass. Extended candidates study the complete lifecycle from stellar nebula to white dwarfs, neutron stars, or black holes.",
    subheadings: [
      {
        title: "Nuclear Fusion in the Sun and Star Lifecycles",
        body:
          "**Nuclear Fusion in Stars:**\n" +
          "- Inside the core of a star, immense gravitational pressure creates temperatures exceeding $15\\text{ million kelvin}$.\n" +
          "- At these temperatures, hydrogen nuclei overcome electrostatic repulsion and fuse together to form helium:\n" +
          "  $$4\\text{ }^1_1\\text{H} \\to \\text{ }^4_2\\text{He} + 2\\text{ }^0_1e^+ + \\text{energy}$$\n" +
          "- A small amount of mass is converted into energy according to Einstein's mass-energy equation: $\\Delta E = \\Delta m \\cdot c^2$.\n\n" +
          "**Comparative Stellar Lifecycles:**\n" +
          "1. **Stars of Low/Medium Mass (up to $\\approx 8$ solar masses, like the Sun):**\n" +
          "   $$\\text{Nebula} \\to \\text{Protostar} \\to \\text{Main Sequence} \\to \\text{Red Giant} \\to \\text{Planetary Nebula} \\to \\text{White Dwarf} \\to \\text{Black Dwarf}$$\n" +
          "2. **Stars of High Mass (greater than $\\approx 8$ solar masses):**\n" +
          "   $$\\text{Nebula} \\to \\text{Protostar} \\to \\text{Massive Main Sequence} \\to \\text{Red Supergiant} \\to \\text{Supernova} \\to \\begin{cases} \\text{Neutron Star} & (8-20 M_\\odot) \\\\ \\text{Black Hole} & (>20 M_\\odot) \\end{cases}$$\n" +
          "- Heavy elements (heavier than iron) in the Universe are synthesised **only during supernova explosions**.",
        examinerTips: [
          "State clearly: elements heavier than iron are produced during a supernova explosion.",
        ],
        commonMistakes: [
          "Thinking the Sun will explode in a supernova — the Sun has insufficient mass; it will quietly shed a planetary nebula and leave a white dwarf.",
        ],
        recap: [
          "What nuclear reaction powers main sequence stars?",
          "Explain why high-mass stars end their lives as neutron stars or black holes while low-mass stars end as white dwarfs.",
        ],
      },
    ],
  },
  {
    number: 26,
    title: "The Expanding Universe & Hubble's Law",
    section: "6. Space physics",
    topic: "Galactic Redshift, Hubble's Law & The Age of the Universe",
    intro:
      "Cosmological observations reveal an expanding universe originating from the Big Bang. Extended candidates calculate recession velocities, use Hubble's Law (v = H₀d), and estimate the age of the Universe.",
    subheadings: [
      {
        title: "Redshift, Hubble's Law & Age of the Universe",
        body:
          "**The Redshift Formula:**\n" +
          "$$\\mathbf{\\frac{\\Delta\\lambda}{\\lambda} = \\frac{v}{c}}$$\n" +
          "where $\\Delta\\lambda$ is the observed shift in wavelength, $\\lambda$ is the emitted rest wavelength, $v$ is the recession speed of the galaxy, and $c$ is the speed of light ($3.0 \\times 10^8\\text{ m/s}$).\n\n" +
          "**Hubble's Law:**\n" +
          "The speed at which a distant galaxy is moving away from Earth is directly proportional to its distance from Earth:\n" +
          "$$\\mathbf{v = H_0 d}$$\n" +
          "- $v$: Recession speed of galaxy ($\\text{m/s}$ or $\\text{km/s}$).\n" +
          "- $d$: Distance of galaxy from Earth ($\\text{m}$ or $\\text{km}$).\n" +
          "- **$H_0$ (Hubble Constant):** The constant of proportionality, with the current best estimate:\n" +
          "  $$\\mathbf{H_0 \\approx 2.2 \\times 10^{-18}\\text{ s}^{-1}}$$\n\n" +
          "**Estimating the Age of the Universe ($t$):**\n" +
          "Assuming uniform expansion from the initial singularity:\n" +
          "$$\\text{Time } t = \\frac{\\text{Distance } d}{\\text{Speed } v} = \\frac{d}{H_0 d} = \\mathbf{\\frac{1}{H_0}}$$\n" +
          "$$t \\approx \\frac{1}{2.2 \\times 10^{-18}\\text{ s}^{-1}} \\approx 4.5 \\times 10^{17}\\text{ s} \\approx \\mathbf{1.4 \\times 10^{10}\\text{ years} = 14\\text{ billion years}}$$\n\n" +
          "**Cosmic Microwave Background Radiation (CMBR):**\n" +
          "- High-energy gamma radiation emitted shortly after the Big Bang has been stretched by the cosmic expansion of space over $13.8\\text{ billion years}$ into microwave radiation, observed uniformly at a temperature of approximately $2.7\\text{ K}$.",
        examinerTips: [
          "Know the Hubble law equation $v = H_0 d$ and how to estimate the age of the Universe: $t = 1 / H_0$.",
        ],
        commonMistakes: [
          "Thinking redshift is caused by galaxies moving through static space — space itself is expanding.",
        ],
        recap: [
          "State Hubble's Law and define all terms in the equation.",
          "Using $H_0 = 2.2 \\times 10^{-18}\\text{ s}^{-1}$, estimate the age of the Universe in seconds and years.",
        ],
      },
    ],
  },
];
