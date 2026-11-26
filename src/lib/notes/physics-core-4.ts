import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Physics (0625) Core Notes
 * Chapters 16–24: Electricity & Magnetism, Nuclear Physics, Space Physics
 * Sections: 4. Electricity and magnetism, 5. Nuclear physics, 6. Space physics
 */
export const PHYSICS_CORE_PART4: Chapter[] = [
  {
    number: 16,
    title: "Simple Magnetism",
    section: "4. Electricity and magnetism",
    topic: "Magnetic Poles, Fields & Induced Magnetism",
    intro:
      "Magnetism is a non-contact force arising from moving charges and magnetic domains. Candidates study magnetic poles, field patterns, induced magnetism, and the differences between permanent magnets and electromagnets.",
    subheadings: [
      {
        title: "Magnetic Poles and Magnetic Fields",
        body:
          "**Law of Magnetic Poles:**\n" +
          "- Like poles **repel** (N repels N, S repels S).\n" +
          "- Unlike poles **attract** (N attracts S).\n\n" +
          "**Magnetic Materials vs Non-Magnetic Materials:**\n" +
          "- **Ferromagnetic materials (attracted to magnets):** Iron, steel, nickel, cobalt.\n" +
          "- **Non-magnetic materials:** Copper, aluminium, wood, plastic, glass.\n\n" +
          "**Magnetic Field Lines:**\n" +
          "- The region around a magnet where a magnetic force is experienced.\n" +
          "- Field lines point **from North pole to South pole** outside the magnet.\n" +
          "- The closeness / density of field lines indicates the **strength of the magnetic field** (strongest near the poles).\n" +
          "- Field lines **never cross** or intersect.\n" +
          "- **Plotting Compass Method:** Place a compass near a bar magnet; mark the position of the needle tip with a pencil; move the compass tail to the mark and repeat to trace the magnetic field line.",
        examinerTips: [
          "Magnetic field line arrows ALWAYS point from North to South outside the magnet.",
          "State the only true test for a magnet: REPULSION by a known magnet (since attraction can occur with unmagnetised ferromagnetic material).",
        ],
        commonMistakes: [
          "Thinking copper is magnetic — copper is a metal, but it is non-magnetic.",
        ],
        recap: [
          "State the law of magnetic poles.",
          "Describe how a plotting compass can be used to map the magnetic field around a bar magnet.",
        ],
      },
      {
        title: "Permanent Magnets vs Electromagnets",
        body:
          "**Soft Iron vs Hard Steel:**\n" +
          "- **Magnetically Soft (Iron):** Easily magnetised, but loses its magnetism immediately when the magnetising field is removed. Used in **electromagnet cores, transformer cores, and relays**.\n" +
          "- **Magnetically Hard (Steel):** Difficult to magnetise, but retains its magnetism permanently. Used to make **permanent bar magnets and compass needles**.\n\n" +
          "**Electromagnets:**\n" +
          "- A coil of insulated wire (solenoid) wrapped around a soft iron core.\n" +
          "- When electric current flows through the coil, a strong magnetic field is produced.\n" +
          "- **Advantages over permanent magnets:**\n" +
          "  1. Can be **switched on and off** by controlling the current.\n" +
          "  2. Field strength can be **adjusted** by changing current or number of turns.\n" +
          "  3. Polarity can be **reversed** by reversing current direction.\n" +
          "- **Increasing Electromagnet Strength:**\n" +
          "  1. Increase the current flowing through the coil.\n" +
          "  2. Increase the number of turns of wire on the solenoid.\n" +
          "  3. Use a soft iron core.",
        examinerTips: [
          "State why soft iron is used for electromagnet cores: it magnetises quickly and loses its magnetism as soon as current is switched off.",
        ],
        commonMistakes: [
          "Using steel as an electromagnet core — steel stays permanently magnetised and cannot be switched off.",
        ],
        recap: [
          "Distinguish between magnetically soft and magnetically hard materials.",
          "State three ways to increase the strength of an electromagnet.",
        ],
      },
    ],
  },
  {
    number: 17,
    title: "Electrical Quantities",
    section: "4. Electricity and magnetism",
    topic: "Electric Charge, Current, Voltage & Resistance",
    intro:
      "Electric circuits transfer energy via charge carriers. Candidates learn charge, current, electromotive force, potential difference, and Ohm's law.",
    subheadings: [
      {
        title: "Electric Charge and Current",
        body:
          "**Electric Charge ($Q$):**\n" +
          "- Two types of charge: **positive ($+$)** and **negative ($-$)**.\n" +
          "- Like charges repel; opposite charges attract.\n" +
          "- SI unit: coulomb ($\\text{C}$).\n\n" +
          "**Electric Current ($I$):**\n" +
          "- The rate of flow of electric charge around a circuit:\n" +
          "  $$\\mathbf{I = \\frac{Q}{t} \\iff Q = I t}$$\n" +
          "- SI unit: ampere ($\\text{A}$), where $1\\text{ A} = 1\\text{ C/s}$.\n" +
          "- Measured using an **ammeter connected in series**.\n" +
          "- **Conventional Current:** Flows from positive ($+$) to negative ($-$).\n" +
          "- **Electron Flow:** Real flow of free electrons is from negative ($-$) to positive ($+$).",
        examinerTips: [
          "Ammeters must ALWAYS be connected in series with the component whose current is being measured.",
          "Remember: Conventional current is positive to negative; electron flow is negative to positive.",
        ],
        commonMistakes: [
          "Connecting an ammeter in parallel with a component.",
        ],
        recap: [
          "State the formula linking charge, current, and time.",
          "A current of 0.5 A flows for 2 minutes. Calculate the charge that passes in coulombs.",
        ],
      },
      {
        title: "e.m.f., Potential Difference and Resistance",
        body:
          "**Electromotive Force (e.m.f.):**\n" +
          "- The electrical work done by a source in driving a unit charge around a complete circuit:\n" +
          "  $$E = \\frac{W}{Q}$$\n" +
          "- Unit: volt ($\\text{V}$), where $1\\text{ V} = 1\\text{ J/C}$.\n\n" +
          "**Potential Difference (p.d. / Voltage $V$):**\n" +
          "- The work done per unit charge as charge moves between two points in a circuit.\n" +
          "- Measured using a **voltmeter connected in parallel** across a component.\n\n" +
          "**Resistance ($R$) and Ohm's Law:**\n" +
          "- Resistance opposes the flow of electric current:\n" +
          "  $$\\mathbf{R = \\frac{V}{I} \\iff V = I R}$$\n" +
          "- SI unit: ohm ($\\Omega$).\n" +
          "- **Ohmic Conductor (e.g. fixed metallic resistor at constant temperature):** Current is directly proportional to potential difference ($I \\propto V$, straight line graph through origin).\n" +
          "- **Filament Lamp:** As voltage increases, current increases, temperature of the filament rises, and its **resistance increases** (curve flattens towards voltage axis).",
        examinerTips: [
          "Voltmeters must ALWAYS be connected in parallel across the component.",
          "Explain why filament lamp resistance increases with current: wire gets hotter $\\implies$ metal ions vibrate faster $\\implies$ electrons collide more frequently.",
        ],
        commonMistakes: [
          "Connecting a voltmeter in series.",
        ],
        recap: [
          "Define potential difference.",
          "A potential difference of 12 V is applied across a 4 Ω resistor. Calculate the current.",
        ],
      },
    ],
  },
  {
    number: 18,
    title: "Electric Circuits & Components",
    section: "4. Electricity and magnetism",
    topic: "Series & Parallel Circuits, Potential Dividers & Sensors",
    intro:
      "Electric components can be combined in series or parallel configurations. Candidates calculate total resistance, explore potential divider circuits, and understand sensing components like LDRs and thermistors.",
    subheadings: [
      {
        title: "Series and Parallel Circuits",
        body:
          "**1. Series Circuits:**\n" +
          "- **Single loop:** Only one path for current to flow.\n" +
          "- **Current is the same everywhere:** $I_1 = I_2 = I_3$.\n" +
          "- **Voltages add up:** $V_{\\text{total}} = V_1 + V_2 + V_3$.\n" +
          "- **Total resistance:**\n" +
          "  $$\\mathbf{R_{\\text{total}} = R_1 + R_2 + R_3}$$\n" +
          "- *Disadvantage:* If one component breaks, the whole circuit opens and stops working.\n\n" +
          "**2. Parallel Circuits:**\n" +
          "- **Multiple branches:** Current splits at junctions.\n" +
          "- **Current adds up:** $I_{\\text{total}} = I_1 + I_2 + I_3$.\n" +
          "- **Voltage is the same across each branch:** $V_1 = V_2 = V_3 = V_{\\text{supply}}$.\n" +
          "- **Total resistance of two parallel resistors:**\n" +
          "  $$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} \\iff \\mathbf{R_{\\text{total}} = \\frac{R_1 R_2}{R_1 + R_2}}$$\n" +
          "- The total resistance of a parallel combination is **always less than the smallest individual resistor**.\n" +
          "- *Advantage:* Each appliance can be switched independently and receives full supply voltage.",
        examinerTips: [
          "State clearly why domestic house lights are connected in parallel: (1) each bulb operates at full mains voltage (230 V), (2) if one bulb blows, the others remain lit.",
        ],
        commonMistakes: [
          "Adding parallel resistances directly ($R_1 + R_2$) — you must add their reciprocals ($1/R_1 + 1/R_2$).",
        ],
        recap: [
          "State how current and voltage behave in a series circuit versus a parallel circuit.",
          "Calculate the combined resistance of a 6 Ω resistor and a 3 Ω resistor connected in parallel.",
        ],
      },
      {
        title: "Sensors: LDR, Thermistor & Potential Dividers",
        body:
          "**Key Sensing Components:**\n" +
          "1. **Light-Dependent Resistor (LDR):**\n" +
          "   - **In bright light:** Resistance **decreases** (low resistance).\n" +
          "   - **In darkness:** Resistance **increases** (high resistance).\n" +
          "   - *Mnemonic: 'Light Up, Resistance Down' (LURD).*\n" +
          "   - Used in automatic street lights and solar trackers.\n" +
          "2. **Thermistor (NTC):**\n" +
          "   - **At high temperature:** Resistance **decreases** (low resistance).\n" +
          "   - **At low temperature:** Resistance **increases** (high resistance).\n" +
          "   - *Mnemonic: 'Temperature Up, Resistance Down' (TURD).*\n" +
          "   - Used in digital thermometers, fire alarms, and incubator temperature controllers.\n\n" +
          "**Potential Divider Circuits:**\n" +
          "- A circuit consisting of two resistors connected in series across a voltage supply.\n" +
          "- The output voltage across $R_2$ is proportional to its resistance fraction:\n" +
          "  $$V_{\\text{out}} = V_{\\text{in}} \\times \\frac{R_2}{R_1 + R_2}$$\n" +
          "- If $R_2$ is an LDR, as darkness falls, its resistance rises, causing $V_{\\text{out}}$ to rise and trigger an electronic switch (transistor/relay) to turn on a lamp.",
        examinerTips: [
          "Remember: for both LDR and thermistor, increased input (more light, higher temperature) leads to LOWER resistance.",
        ],
        commonMistakes: [
          "Thinking thermistor resistance increases when heated — standard NTC thermistors have resistance that drops as temperature rises.",
        ],
        recap: [
          "What happens to the resistance of an LDR when light intensity increases?",
          "Explain how a thermistor in a potential divider can be used to trigger a fire alarm.",
        ],
      },
    ],
  },
  {
    number: 19,
    title: "Electrical Safety",
    section: "4. Electricity and magnetism",
    topic: "Mains Electricity, Fuses, Earthing & Double Insulation",
    intro:
      "Mains electricity carries lethal voltages. Candidates learn the three wires in a plug, the operation of fuses and circuit breakers, and protection via earthing and double insulation.",
    subheadings: [
      {
        title: "Mains Wiring, Fuses, Earthing & Circuit Breakers",
        body:
          "**The Three-Pin Plug:**\n" +
          "- **Live wire (Brown):** Carries the high alternating voltage ($230\\text{ V}$). Connected through the fuse.\n" +
          "- **Neutral wire (Blue):** Completes the circuit; kept at near zero volts ($0\\text{ V}$).\n" +
          "- **Earth wire (Green and Yellow stripes):** Safety wire connected to the metal chassis of the appliance.\n\n" +
          "**How Fuses and Earthing Work Together:**\n" +
          "1. A **fuse** contains a thin wire with a low melting point, connected in the **live wire**.\n" +
          "2. If a fault develops and the live wire touches the metal casing:\n" +
          "   - A huge surge current flows directly from the live wire through the low-resistance **earth wire** to the ground.\n" +
          "   - This large current exceeds the fuse rating.\n" +
          "   - The fuse wire gets hot, **melts ('blows')**, and breaks the live circuit.\n" +
          "   - This cuts off electrical supply, preventing electric shocks and electrical fires.\n\n" +
          "**Choosing the Correct Fuse Rating:**\n" +
          "- Fuse ratings must be **slightly higher** than the normal operating current of the appliance ($3\\text{ A}, 5\\text{ A}, 13\\text{ A}$).\n" +
          "- Formula for normal operating current: $I = P / V$.\n\n" +
          "**Double Insulation:**\n" +
          "- Appliances with non-metallic plastic casings (e.g. hair dryers, electric drills) have **double insulation**.\n" +
          "- Because the external casing cannot become live, they do not require an earth wire and use a two-core cable.",
        examinerTips: [
          "The fuse must ALWAYS be placed in the LIVE wire. If placed in the neutral wire, blowing the fuse would still leave the appliance live and dangerous!",
        ],
        commonMistakes: [
          "Placing the fuse in the neutral wire.",
        ],
        recap: [
          "Name the colours of the live, neutral, and earth wires in a standard three-pin plug.",
          "Explain how a fuse and earth wire protect a user from an electric shock if a fault occurs.",
        ],
      },
    ],
  },
  {
    number: 20,
    title: "Electromagnetic Effects",
    section: "4. Electricity and magnetism",
    topic: "Induction, Generators, Motors & Transformers",
    intro:
      "Electromagnetic interactions enable electric power generation, electric motors, and voltage transformation. Candidates study electromagnetic induction, the motor effect, and transformers.",
    subheadings: [
      {
        title: "Electromagnetic Induction & The a.c. Generator",
        body:
          "**Electromagnetic Induction:**\n" +
          "- When a conductor moves across a magnetic field (cutting magnetic field lines), an **electromotive force (e.m.f.) is induced** across the conductor.\n" +
          "- If the conductor is part of a complete circuit, an **induced current** flows.\n" +
          "- **Factors Increasing Induced e.m.f.:**\n" +
          "  1. Move the wire / magnet **faster** (cut field lines at a higher rate).\n" +
          "  2. Use a **stronger magnet**.\n" +
          "  3. Increase the **number of turns** of wire in the coil.\n\n" +
          "**The Simple a.c. Generator:**\n" +
          "- A coil of wire rotates between the poles of a permanent magnet.\n" +
          "- As the coil rotates, its sides cut magnetic field lines, inducing an e.m.f.\n" +
          "- **Slip Rings and Carbon Brushes:** Connected to the ends of the rotating coil to maintain continuous electrical contact with the external circuit without twisting the wires.\n" +
          "- Because the sides of the coil move alternately up and down, the induced current reverses direction every half-turn, producing **alternating current (a.c.)**.",
        examinerTips: [
          "State three ways to increase the voltage produced by a generator: rotate faster, use a stronger magnet, use more turns on the coil.",
        ],
        commonMistakes: [
          "Confusing slip rings (a.c. generator) with split-ring commutators (d.c. motor).",
        ],
        recap: [
          "State what happens when a wire is moved across a magnetic field.",
          "What is the function of slip rings in an a.c. generator?",
        ],
      },
      {
        title: "The Motor Effect & d.c. Motors",
        body:
          "**The Motor Effect:**\n" +
          "- When a current-carrying wire is placed in an external magnetic field, the magnetic field of the wire interacts with the external field, producing a **mechanical force** on the wire.\n" +
          "- The force is greatest when the wire is perpendicular ($90^\\circ$) to the magnetic field.\n" +
          "- **Fleming's Left-Hand Rule:**\n" +
          "  - **Thumb:** Motion / Force ($F$)\n" +
          "  - **First finger:** Magnetic Field ($B$, North to South)\n" +
          "  - **Second finger:** Current ($I$, Conventional current $+$ to $-$)\n\n" +
          "**The d.c. Electric Motor:**\n" +
          "- A rectangular coil mounted on an axle between magnetic poles.\n" +
          "- Current flows in opposite directions on the two sides of the coil, producing equal and opposite forces that create a turning moment.\n" +
          "- **Split-Ring Commutator:** Reverses the direction of current in the coil every half-turn ($180^\\circ$) so that the turning moment continues in the same rotational direction.",
        examinerTips: [
          "State clearly the role of the split-ring commutator: reverses current every half-turn to keep the motor spinning in one direction.",
        ],
        commonMistakes: [
          "Using the right hand instead of the left hand for Fleming's motor rule.",
        ],
        recap: [
          "State Fleming's left-hand rule.",
          "Explain the function of a split-ring commutator in a d.c. electric motor.",
        ],
      },
      {
        title: "Transformers & High-Voltage Grid Transmission",
        body:
          "**How a Transformer Works:**\n" +
          "- Consists of two coils of insulated wire wrapped around a **soft iron core**:\n" +
          "  - **Primary coil:** Connected to alternating current (a.c.) supply.\n" +
          "  - **Secondary coil:** Connected to load.\n" +
          "- **Working Principle:**\n" +
          "  1. Alternating current in the primary coil sets up a **continuously changing magnetic field** in the soft iron core.\n" +
          "  2. The soft iron core guides this changing magnetic field through the secondary coil.\n" +
          "  3. The secondary coil cuts the changing magnetic field, inducing an **alternating voltage** across the secondary terminals.\n" +
          "- *Note:* Transformers **CANNOT operate on direct current (d.c.)** because steady current produces a constant, unchanging magnetic field, so no e.m.f. is induced.\n\n" +
          "**The Transformer Equation:**\n" +
          "$$\\mathbf{\\frac{V_p}{V_s} = \\frac{N_p}{N_s}}$$\n" +
          "- **Step-up transformer:** $N_s > N_p \\implies V_s > V_p$ (increases voltage).\n" +
          "- **Step-down transformer:** $N_s < N_p \\implies V_s < V_p$ (decreases voltage).\n\n" +
          "**High-Voltage Transmission in the National Grid:**\n" +
          "- Electricity is transmitted over long distances at very high voltages (e.g. $400\\text{ kV}$):\n" +
          "  - For a given power, high voltage means **low current** ($P = IV$).\n" +
          "  - Power lost as heat in transmission cables is given by $P_{\\text{loss}} = I^2 R$.\n" +
          "  - Reducing current drastically reduces energy wasted as heat, making power transmission much more efficient.",
        examinerTips: [
          "State clearly why electricity is transmitted at high voltage: to reduce current $\\implies$ reduces heat loss in cables ($I^2R$) $\\implies$ increases efficiency.",
          "State why transformers only work with a.c.: d.c. produces a constant magnetic field, not a changing one.",
        ],
        commonMistakes: [
          "Thinking a transformer works with a 12 V car battery (d.c.) — it requires alternating current.",
        ],
        recap: [
          "State the transformer formula linking voltages and turns ratio.",
          "Explain why high voltage is used to transmit electricity through the National Grid.",
        ],
      },
    ],
  },
  {
    number: 21,
    title: "The Nuclear Atom",
    section: "5. Nuclear physics",
    topic: "Rutherford Model, Subatomic Particles & Isotopes",
    intro:
      "Atoms contain a tiny, dense, positively charged nucleus orbited by electrons. Candidates study atomic structure, proton and nucleon numbers, and isotopes.",
    subheadings: [
      {
        title: "Atomic Structure, Nuclide Notation & Isotopes",
        body:
          "**Structure of the Atom:**\n" +
          "- **Nucleus:** Extremely small, dense central core containing protons and neutrons (nucleons).\n" +
          "- **Electrons:** Orbit the nucleus in discrete energy shells.\n\n" +
          "**Subatomic Particle Properties:**\n" +
          "| Particle | Relative Mass | Relative Charge | Location |\n" +
          "|---|---|---|---|\n" +
          "| **Proton ($p$)** | $1$ | $+1$ | Inside nucleus |\n" +
          "| **Neutron ($n$)** | $1$ | $0$ (neutral) | Inside nucleus |\n" +
          "| **Electron ($e^-$)** | $\\approx \\frac{1}{1840}$ (negligible) | $-1$ | Outside nucleus in shells |\n\n" +
          "**Nuclide Notation ($^A_Z X$):**\n" +
          "- **Proton number ($Z$ / Atomic number):** The number of protons in the nucleus of an atom. Defines the chemical element.\n" +
          "- **Nucleon number ($A$ / Mass number):** The total number of protons PLUS neutrons in the nucleus ($A = Z + N$).\n" +
          "- Number of neutrons: $N = A - Z$.\n\n" +
          "**Isotopes:**\n" +
          "- Atoms of the same element that have the **same number of protons** ($Z$) but **different numbers of neutrons** ($A$).\n" +
          "- Identical chemical properties (same electron configuration); slightly different physical properties (e.g. density, radioactivity).",
        examinerTips: [
          "Cambridge definition mark for isotopes: 'atoms of the same element having the same number of protons but different numbers of neutrons'.",
        ],
        commonMistakes: [
          "Defining isotopes as 'substances' or 'molecules' — they are ATOMS.",
        ],
        recap: [
          "Define proton number and nucleon number.",
          "Carbon-12 ($^{12}_6\\text{C}$) and Carbon-14 ($^{14}_6\\text{C}$) are isotopes. State the number of protons, neutrons, and electrons in an atom of Carbon-14.",
        ],
      },
    ],
  },
  {
    number: 22,
    title: "Radioactivity & Half-Life",
    section: "5. Nuclear physics",
    topic: "Alpha, Beta, Gamma Radiations & Decay Calculations",
    intro:
      "Unstable atomic nuclei undergo spontaneous radioactive decay by emitting alpha particles, beta particles, or gamma rays. Candidates compare radiation properties, calculate half-lives, and learn radiation safety.",
    subheadings: [
      {
        title: "Alpha, Beta and Gamma Radiation Properties",
        body:
          "**The Three Types of Nuclear Radiation:**\n" +
          "1. **Alpha ($\\alpha$) Particles:**\n" +
          "   - **Nature:** Helium-4 nucleus ($^4_2\\text{He}$ / $^4_2\\alpha$), consisting of $2$ protons and $2$ neutrons.\n" +
          "   - **Charge:** $+2$.\n" +
          "   - **Ionising Power:** **Most strongly ionising** (heavy, large $+2$ charge knocks electrons off atoms easily).\n" +
          "   - **Penetrating Power:** **Least penetrating**; stopped by a single sheet of paper or a few centimetres ($3-5\\text{ cm}$) of air.\n\n" +
          "2. **Beta ($\\beta$) Particles:**\n" +
          "   - **Nature:** Fast-moving electron ($^0_{-1}e$ or $^0_{-1}\\beta$) emitted when a neutron turns into a proton in the nucleus.\n" +
          "   - **Charge:** $-1$.\n" +
          "   - **Ionising Power:** Moderately ionising.\n" +
          "   - **Penetrating Power:** Moderately penetrating; stopped by a few millimetres ($3-5\\text{ mm}$) of aluminium; travels about $1\\text{ m}$ in air.\n\n" +
          "3. **Gamma ($\\gamma$) Rays:**\n" +
          "   - **Nature:** High-energy, high-frequency electromagnetic radiation ($^0_0\\gamma$).\n" +
          "   - **Charge:** $0$ (neutral).\n" +
          "   - **Ionising Power:** **Weakest ionising** power.\n" +
          "   - **Penetrating Power:** **Most penetrating**; travels hundreds of metres in air; attenuated only by several centimetres of dense **lead** or thick concrete.",
        examinerTips: [
          "Remember: Alpha is most ionising and least penetrating; Gamma is least ionising and most penetrating.",
          "State alpha as a helium nucleus ($2$ protons, $2$ neutrons); beta as a fast-moving electron.",
        ],
        commonMistakes: [
          "Calling alpha an atom — alpha has NO electrons; it is a helium NUCLEUS.",
        ],
        recap: [
          "Compare the ionising and penetrating abilities of alpha, beta, and gamma radiation.",
          "State which type of radiation is stopped by a sheet of paper.",
        ],
      },
      {
        title: "Radioactive Decay & Half-Life Calculations",
        body:
          "**Nature of Radioactive Decay:**\n" +
          "- Radioactive decay is **spontaneous** (not affected by temperature, pressure, or chemical reactions) and **random** (it is impossible to predict when a specific individual nucleus will decay).\n\n" +
          "**Definition of Half-Life ($t_{1/2}$):**\n" +
          "The half-life of a radioactive isotope is the **time taken for half the radioactive nuclei in a sample to decay**, or the time taken for the **activity (count rate) to halve**.\n\n" +
          "**Half-Life Calculation Method:**\n" +
          "- After $1$ half-life: $\\frac{1}{2}$ remaining ($50\\%$).\n" +
          "- After $2$ half-lives: $\\frac{1}{4}$ remaining ($25\\%$).\n" +
          "- After $3$ half-lives: $\\frac{1}{8}$ remaining ($12.5\\%$).\n" +
          "- After $n$ half-lives: $\\text{Fraction remaining} = \\left(\\frac{1}{2}\\right)^n$.\n\n" +
          "**Background Radiation:**\n" +
          "- Natural radiation present in the environment from cosmic rays, radon gas from rocks/granite, and food (e.g. potassium-40 in bananas).\n" +
          "- In experiments, **background count rate must always be subtracted** from measured readings to obtain the corrected source activity.",
        examinerTips: [
          "Cambridge definition mark: 'the time taken for half the radioactive nuclei in any sample to decay' OR 'the time taken for the activity to halve'.",
          "Remember to subtract background radiation first before doing half-life calculations!",
        ],
        commonMistakes: [
          "Saying half-life is 'half the time for all nuclei to decay' — decay is exponential and never reaches zero.",
        ],
        recap: [
          "Define half-life.",
          "A radioactive sample has an initial activity of 800 Bq. What will its activity be after 3 half-lives?",
        ],
      },
    ],
  },
  {
    number: 23,
    title: "The Earth & The Solar System",
    section: "6. Space physics",
    topic: "Planetary Motion, Gravity & Solar System Components",
    intro:
      "Space physics examines celestial mechanics and the structure of our planetary system. Candidates learn Earth's rotation and orbit, planetary classification, and orbital speeds.",
    subheadings: [
      {
        title: "Earth's Motion, Seasons & The Solar System",
        body:
          "**Earth's Rotation and Revolution:**\n" +
          "- **Day and Night:** Caused by Earth's rotation on its axis once every $24\\text{ hours}$ ($1\\text{ day}$).\n" +
          "- **Years and Seasons:** Earth orbits the Sun once every $365.25\\text{ days}$ ($1\\text{ year}$).\n" +
          "- Seasons are caused by the **tilt of the Earth's axis of rotation** (approximately $23.5^\\circ$ to the perpendicular of its orbital plane).\n" +
          "- When the Northern Hemisphere is tilted towards the Sun, days are longer and solar rays strike more perpendicularly $\\implies$ Summer.\n\n" +
          "**The Solar System:**\n" +
          "- Consists of the central star (the **Sun**), eight planets, dwarf planets (e.g. Pluto), moons, asteroids, and comets.\n" +
          "- **Order of Planets from the Sun:**\n" +
          "  $$\\mathbf{\\text{Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune}}$$\n" +
          "  *(Mnemonic: **M**y **V**ery **E**asy **M**ethod **J**ust **S**peeds **U**p **N**aming)*.\n" +
          "- **Four Inner Planets (Terrestrial / Rocky):** Mercury, Venus, Earth, Mars (small, dense, rocky cores, thin/no atmospheres).\n" +
          "- **Four Outer Planets (Gas / Ice Giants):** Jupiter, Saturn, Uranus, Neptune (huge, low density, composed mainly of hydrogen, helium, and frozen ices).\n" +
          "- **Asteroid Belt:** Rocky debris orbiting between Mars and Jupiter.\n" +
          "- **Comets:** Highly elliptical orbits extending to the outer Solar System; composed of ice and dust; travel fastest when nearest to the Sun.",
        examinerTips: [
          "Remember: seasons are NOT caused by Earth being closer to the Sun — seasons are caused by the TILT of the Earth's rotational axis.",
        ],
        commonMistakes: [
          "Claiming summer occurs because Earth is physically closer to the Sun in summer.",
        ],
        recap: [
          "What causes day and night on Earth?",
          "Name the eight planets of the Solar System in order of distance from the Sun.",
        ],
      },
      {
        title: "Orbital Speed & Planetary Gravity",
        body:
          "**Calculating Orbital Speed:**\n" +
          "Assuming circular planetary orbits:\n" +
          "$$\\mathbf{v = \\frac{2\\pi r}{T}}$$\n" +
          "where $r$ is orbital radius (distance from central body) and $T$ is the orbital period (time for one complete orbit).\n\n" +
          "**Gravitational Attraction and Orbital Speed:**\n" +
          "- Planets closer to the Sun experience a **much stronger gravitational pull**.\n" +
          "- Therefore, planets closer to the Sun must travel at **much higher orbital speeds** and have much shorter orbital periods $T$.\n" +
          "- Mercury orbits in just $88\\text{ days}$ at $47\\text{ km/s}$; Neptune takes $165\\text{ years}$ at $5.4\\text{ km/s}$.",
        examinerTips: [
          "Remember that distance travelled in one circular orbit is the circumference: $2\\pi r$.",
        ],
        commonMistakes: [
          "Using $\\pi r^2$ (area) instead of $2\\pi r$ (circumference) when calculating orbital speed.",
        ],
        recap: [
          "State the formula for orbital speed.",
          "Explain why inner planets orbit the Sun at higher speeds than outer planets.",
        ],
      },
    ],
  },
  {
    number: 24,
    title: "Stars & The Universe",
    section: "6. Space physics",
    topic: "The Sun, Stellar Evolution, Redshift & The Big Bang",
    intro:
      "Stars are powered by nuclear fusion. The lifecycle of a star depends on its mass. Candidates explore stellar evolution, light-years, galaxies, galactic redshift, and evidence for the Big Bang.",
    subheadings: [
      {
        title: "The Sun, Stellar Evolution & The Light-Year",
        body:
          "**The Sun as a Star:**\n" +
          "- A medium-sized main sequence star composed mainly of **hydrogen and helium**.\n" +
          "- Powered by **nuclear fusion**: hydrogen nuclei fuse together under extreme temperature and pressure to form helium nuclei, releasing immense energy:\n" +
          "  $$4\\text{ }^1_1\\text{H} \\to \\text{ }^4_2\\text{He} + 2\\text{ }^0_1e^+ + \\text{energy}$$\n\n" +
          "**Lifecycle of Stars:**\n" +
          "1. **Nebula:** Cloud of interstellar dust and gas (mainly hydrogen) collapses under gravity.\n" +
          "2. **Protostar:** Gravitational potential energy converted into thermal energy until core temperature reaches millions of kelvin, initiating nuclear fusion.\n" +
          "3. **Main Sequence:** Stable star where inward gravitational collapse is balanced by outward thermal radiation pressure from fusion.\n" +
          "4. **Stars of Similar Mass to the Sun:**\n" +
          "   - Hydrogen runs out in the core $\\implies$ expands into a **Red Giant**.\n" +
          "   - Outer layers are shed as a **Planetary Nebula**.\n" +
          "   - Hot dense core remains as a **White Dwarf**, which cools into a Black Dwarf.\n" +
          "5. **Stars Much More Massive than the Sun:**\n" +
          "   - Expands into a massive **Red Supergiant**.\n" +
          "   - Core collapses and outer layers explode in a violent **Supernova**.\n" +
          "   - Leaves behind an ultra-dense **Neutron Star** or, if mass is great enough, a **Black Hole**.\n\n" +
          "**The Light-Year:**\n" +
          "- The distance travelled by light in a vacuum in one year ($365.25\\text{ days}$):\n" +
          "  $$1\\text{ light-year} \\approx 3.0 \\times 10^8\\text{ m/s} \\times (365.25 \\times 24 \\times 3600\\text{ s}) \\approx \\mathbf{9.5 \\times 10^{15}\\text{ m}}$$",
        examinerTips: [
          "State the nuclear reaction powering stars: nuclear fusion of hydrogen into helium.",
          "Main sequence stars are in equilibrium: inward gravitational force equals outward radiation pressure.",
        ],
        commonMistakes: [
          "Confusing nuclear fusion (joining light nuclei in stars) with nuclear fission (splitting heavy nuclei in nuclear power plants).",
        ],
        recap: [
          "What nuclear reaction powers the Sun?",
          "Describe the life cycle of a star with a mass much larger than the Sun.",
        ],
      },
      {
        title: "The Expanding Universe, Redshift & The Big Bang",
        body:
          "**Galaxies:**\n" +
          "- A galaxy is a massive system of billions of stars, gas, and dust bound by gravity.\n" +
          "- Our Solar System is located in the **Milky Way galaxy** (a spiral galaxy containing $\\approx 10^{11}$ stars).\n\n" +
          "**Redshift of Distant Galaxies:**\n" +
          "- Light emitted from distant galaxies shows spectral absorption lines shifted towards the **longer-wavelength (red) end** of the visible spectrum.\n" +
          "- This **redshift** occurs because distant galaxies are moving away from Earth as the space between galaxies expands.\n" +
          "- Observations show that **more distant galaxies have greater redshifts**, meaning they are moving away faster ($v \\propto d$).\n\n" +
          "**The Big Bang Theory:**\n" +
          "- The Universe originated approximately **$13.8\\text{ billion years ago}$** from an extremely hot, dense, microscopic singularity and has been expanding and cooling ever since.\n" +
          "- Two key pieces of evidence supporting the Big Bang:\n" +
          "  1. **Redshift of distant galaxies** (proves Universe is expanding).\n" +
          "  2. **Cosmic Microwave Background Radiation (CMBR):** Microwave radiation detected uniformly across the entire sky, representing the cooled afterglow remnant of the Big Bang.",
        examinerTips: [
          "Two key pieces of evidence for the Big Bang: (1) galactic redshift, (2) cosmic microwave background radiation (CMBR).",
        ],
        commonMistakes: [
          "Thinking galaxies are expanding — space itself between galaxies is expanding, moving galaxies further apart.",
        ],
        recap: [
          "What is redshift and what does it tell astronomers about distant galaxies?",
          "State two pieces of evidence that support the Big Bang theory.",
        ],
      },
    ],
  },
];
