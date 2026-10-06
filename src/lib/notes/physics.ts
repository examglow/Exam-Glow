import type { SubjectNotes } from "./types";

export const PHYSICS: SubjectNotes = {
  id: "physics",
  name: "Physics",
  code: "0625",
  color: "bg-purple-500",
  chapters: [
    {
      number: 1,
      title: "Motion, Forces and Energy",
      intro: "Mechanics is the foundation of physics — it describes how objects move and what causes changes in motion. Newton's three laws of motion explain the relationship between force, mass, and acceleration, and underpin everything from car safety design to rocket science. Energy conservation is one of the most powerful principles in all of science: energy cannot be created or destroyed, only transferred between stores or dissipated as thermal energy. Mastering graphs of motion, the equations of kinematics, and the concept of momentum is essential for Cambridge IGCSE Physics.",
      subheadings: [
        {
          title: "Speed, Velocity, and Acceleration",
          body: "Speed is the distance travelled per unit time — it is a scalar quantity (magnitude only). Velocity is the rate of change of displacement — it is a vector quantity (magnitude and direction). Acceleration is the rate of change of velocity — also a vector. The equations of motion for uniform (constant) acceleration are: v = u + at; s = ut + ½at²; v² = u² + 2as; and s = ½(u + v)t, where u is initial velocity, v is final velocity, a is acceleration, t is time, and s is displacement. On a distance-time graph, the gradient (slope) represents speed; a straight line means constant speed; a curve means changing speed; a horizontal line means the object is stationary. On a velocity-time graph, the gradient represents acceleration; the area under the graph represents the displacement. A straight line with positive gradient means uniform acceleration; a horizontal line means constant velocity; a line with negative gradient means deceleration. Deceleration is simply negative acceleration — the velocity is decreasing. The acceleration due to gravity near the Earth's surface is approximately 9.8 m/s² (often rounded to 10 m/s² in calculations), directed downward toward the Earth's centre.",
          groups: [
            {
              subTitle: "Using velocity-time graphs",
              bullets: [
                "**Finding acceleration from a v-t graph**: Draw a tangent to the curve at the relevant point. Acceleration = rise/run = change in velocity / time taken. Units are m/s2.",
                "**Finding displacement from a v-t graph**: Calculate the area under the line (or curve). For a trapezium or triangle shape, use the geometric formula. Area = displacement in metres if axes are in m/s and s.",
                "**Negative velocity on a v-t graph**: Means the object is moving in the opposite direction to positive. The speed (magnitude) can still be large even if velocity is negative.",
                "**Worked example**: A car accelerates uniformly from rest (u = 0) to 20 m/s in 5 s. Find acceleration: a = (v - u)/t = (20-0)/5 = 4 m/s2. Find distance: s = ut + ½at2 = 0 + ½(4)(25) = 50 m."
              ]
            }
          ],
          recap: [
            "A car travels 150 m in 6 s at constant speed. Calculate the speed of the car. [2]",
            "Describe the motion of an object whose velocity-time graph shows a horizontal straight line. [1]",
            "A ball is dropped from rest and falls for 3 s before hitting the ground (g = 10 m/s2). Calculate the velocity when it hits and the distance fallen. [4]",
            "Explain the difference between speed and velocity. [2]"
          ]
        },
        {
          title: "Newton's Laws of Motion and Momentum",
          body: "Newton's First Law states that an object remains at rest or continues moving with constant velocity unless acted upon by a resultant (net) force. This property is called inertia — the tendency of an object to resist changes in its state of motion. A resultant force of zero means forces are balanced; the object does not accelerate. Newton's Second Law states that the resultant force acting on an object is directly proportional to its acceleration and in the same direction: F = ma. This means greater force produces greater acceleration; greater mass requires more force for the same acceleration. Newton's Third Law states that when object A exerts a force on object B, object B exerts an equal and opposite force on object A simultaneously. These forces are called a Newton's Third Law pair; they are equal in magnitude, opposite in direction, act on different objects, and are of the same type. Momentum (p) is defined as the product of mass and velocity: p = mv. The unit of momentum is kg m/s. Newton's Second Law can be restated as: force equals the rate of change of momentum: F = Δ(mv)/Δt. The principle of conservation of momentum states that the total momentum of a system of interacting objects remains constant provided no external resultant force acts. This applies to collisions and explosions. In an elastic collision, kinetic energy is also conserved; in an inelastic collision (including most real collisions), some kinetic energy is converted to heat, sound, or deformation.",
          groups: [
            {
              subTitle: "Impulse and collision safety",
              bullets: [
                "**Impulse**: Impulse = force × time = Ft. By Newton's 2nd law, Ft = Δ(mv) = change in momentum. Impulse equals the change in momentum of the object.",
                "**Safety applications**: Car crumple zones, airbags, and seatbelts all increase the time over which the change in momentum occurs. Since Ft = Δp and Δp is fixed (the car decelerates from a given speed to zero), increasing t decreases F — reducing the force on the occupants and preventing injury.",
                "**Conservation of momentum example**: Two trolleys collide and stick together. Before: trolley A (mass 2 kg, velocity 3 m/s) collides with stationary trolley B (mass 1 kg). Total momentum before = 2×3 + 1×0 = 6 kg m/s. After collision: (2+1) × v = 6; v = 2 m/s. The combined trolleys move at 2 m/s.",
                "**Recoil (Newton's 3rd Law)**: When a gun fires a bullet, the bullet and gun exert equal and opposite forces on each other for the same time. The bullet gains forward momentum; the gun gains equal momentum backward (recoil). Total momentum before = 0; total momentum after = 0 (bullet's momentum + gun's momentum = 0, since they are equal and opposite)."
              ]
            }
          ],
          recap: [
            "State Newton's First Law of Motion and give one everyday example. [2]",
            "A force of 40 N acts on a mass of 8 kg. Calculate the acceleration produced. [2]",
            "Explain why car airbags reduce the risk of injury in a collision. Use the concept of impulse in your answer. [3]",
            "A 0.5 kg ball moving at 4 m/s collides with a stationary 1.5 kg ball and they stick together. Calculate their common velocity after the collision. [3]"
          ]
        },
        {
          title: "Work, Energy and Power",
          body: "Work is done when a force moves its point of application in the direction of the force. The equation is: W = Fd cos θ, simplified to W = Fd when force and displacement are in the same direction. The unit of work is the joule (J). Energy is the capacity to do work; it exists in many forms — kinetic, gravitational potential, elastic potential, thermal, chemical, electrical, nuclear, and light. Kinetic energy is the energy of motion: KE = ½mv². Gravitational potential energy is the energy stored due to position in a gravitational field: GPE = mgh, where g is gravitational field strength (9.8 N/kg ≈ 10 N/kg) and h is height above reference level. The principle of conservation of energy states that energy cannot be created or destroyed — it can only be converted between forms. In the absence of friction and air resistance, KE and GPE can be interconverted without loss: ½mv² = mgh gives the speed at the bottom of a fall. Power is the rate of doing work (or the rate of energy transfer): P = W/t = Fv. The unit of power is the watt (W = J/s). Efficiency measures how much of the input energy is usefully converted: efficiency = useful output energy / total input energy × 100%. Energy wasted is almost always dissipated as thermal energy due to friction, air resistance, or electrical resistance.",
          groups: [
            {
              subTitle: "Energy conversion examples and efficiency",
              bullets: [
                "**Falling object**: A ball of mass 0.5 kg falls 20 m from rest. GPE lost = mgh = 0.5 × 10 × 20 = 100 J. If no air resistance, all converts to KE: ½mv² = 100; v² = 400; v = 20 m/s.",
                "**Engine efficiency**: A motor does 600 J of useful work from 1000 J input. Efficiency = 600/1000 × 100 = 60%. The remaining 40% (400 J) is wasted as heat in the motor.",
                "**Power calculation**: A crane lifts a 500 kg load through 8 m in 10 s. Work done = Fd = 500×10×8 = 40,000 J. Power = W/t = 40,000/10 = 4000 W = 4 kW.",
                "**Why no machine is 100% efficient**: Friction between moving parts converts kinetic energy to thermal energy. Air resistance dissipates energy. Electrical resistance generates heat. Sound is produced during motion. All these represent energy that cannot be recovered for useful work."
              ]
            }
          ],
          recap: [
            "Calculate the kinetic energy of a 1200 kg car moving at 20 m/s. [2]",
            "A pump raises 50 kg of water through a height of 5 m every second. Calculate the power of the pump. (g = 10 N/kg) [3]",
            "Explain why no machine can be 100% efficient. [2]",
            "A ball is released from a height of 10 m. Calculate its speed just before hitting the ground, assuming no air resistance. (g = 10 N/kg) [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Thermal Physics",
      intro: "Thermal physics studies how energy in the form of heat is stored, transferred, and converted. Temperature is a measure of the average kinetic energy of particles in a substance; heat is the total thermal energy transferred from a hotter object to a cooler one. The three mechanisms of heat transfer — conduction, convection, and radiation — operate in different ways and are important in everyday applications from building insulation to medical imaging. Understanding the gas laws and the relationship between temperature, pressure, and volume is essential for explaining the behaviour of gases and for thermodynamic calculations.",
      subheadings: [
        {
          title: "Heat Transfer: Conduction, Convection and Radiation",
          body: "Conduction is the transfer of thermal energy through a material without the material itself moving, primarily by the vibration of atoms and the movement of free electrons. Metals are excellent conductors because they have many free electrons that can carry kinetic energy rapidly through the lattice. Non-metals (wood, plastic, air) are poor conductors (insulators) because they lack free electrons. Convection is the transfer of thermal energy by the bulk movement of a fluid (liquid or gas). When a fluid is heated, it expands, becomes less dense, and rises; cooler, denser fluid sinks to replace it, creating a convection current. Convection currents drive sea breezes, central heating systems, and large-scale atmospheric and ocean circulation. Radiation is the transfer of thermal energy by electromagnetic waves (infrared radiation), which requires no medium — it can travel through a vacuum. All objects emit and absorb infrared radiation. Dark, matt surfaces are good absorbers and good emitters. Light, shiny surfaces are poor absorbers and poor emitters (good reflectors). The rate of radiation depends on surface temperature — hotter objects emit more radiation per unit area per second.",
          groups: [
            {
              subTitle: "Factors affecting heat transfer rates",
              bullets: [
                "**Conduction**: Faster in metals (free electrons), faster along thicker cross-sections, faster through shorter lengths, faster with larger temperature difference. Poorer in air (trapped air is an excellent insulator — used in double glazing, loft insulation, down jackets).",
                "**Convection**: Requires a fluid. Cannot occur in solids (particles cannot move through the bulk). Rate increases with greater temperature difference (steeper density gradient). Forced convection (fans, pumps) is faster than natural convection.",
                "**Radiation**: Rate proportional to T4 (Stefan-Boltzmann law — not required at IGCSE level, but concept that rate increases rapidly with temperature is important). Dark matt surfaces radiate most; shiny silvery surfaces radiate least. Vacuum flasks (thermos) use silvered walls to minimise radiation, a vacuum between walls to eliminate conduction and convection.",
                "**Vacuum flask design**: Outer and inner walls are silvered (reduce radiation). Vacuum between walls (eliminates conduction and convection). Glass walls are poor conductors. Stopper prevents convection from the liquid surface."
              ]
            }
          ],
          recap: [
            "Explain why metals are better thermal conductors than non-metals. [2]",
            "Describe how a convection current forms when water in a beaker is heated from below. [3]",
            "A student says that a shiny silver surface is a good emitter of radiation. Is this correct? Explain your answer. [2]",
            "Explain how a vacuum flask keeps hot liquid hot for a long time, referring to all three methods of heat transfer. [4]"
          ]
        },
        {
          title: "The Gas Laws",
          body: "The behaviour of an ideal gas is described by three gas laws. Boyle's Law states that at constant temperature, the pressure of a fixed mass of gas is inversely proportional to its volume: pV = constant, or p1V1 = p2V2. When gas is compressed into a smaller volume, molecules collide with the container walls more frequently, increasing pressure. Charles's Law states that at constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature (in kelvin): V/T = constant, or V1/T1 = V2/T2. The Pressure Law states that at constant volume, the pressure of a fixed mass of gas is directly proportional to its absolute temperature: p/T = constant, or p1/T1 = p2/T2. These three laws combine into the combined gas law: p1V1/T1 = p2V2/T2. Temperature must always be in kelvin for gas law calculations: K = °C + 273. Absolute zero (0 K, -273°C) is the temperature at which all particle motion would theoretically cease and gas pressure would be zero. In practice, all gases liquefy before this temperature is reached.",
          groups: [
            {
              subTitle: "Gas law calculations — worked examples",
              bullets: [
                "**Boyle's Law example**: A gas has volume 300 cm3 at pressure 100 kPa. Find its volume at 150 kPa (constant T). p1V1 = p2V2; 100 × 300 = 150 × V2; V2 = 30,000/150 = 200 cm3.",
                "**Charles's Law example**: A gas has volume 2.0 L at 27°C (300 K). Find its volume at 127°C (400 K) at constant pressure. V1/T1 = V2/T2; 2.0/300 = V2/400; V2 = 2.0 × 400/300 = 2.67 L.",
                "**Molecular explanation of Boyle's Law**: Decreasing volume means molecules travel shorter distances between collisions with walls; collisions per second increase; pressure increases. Temperature constant means average speed unchanged.",
                "**Molecular explanation of Pressure Law**: Increasing temperature means molecules move faster; they hit the container walls more frequently and with greater force; pressure increases. Volume is constant, so the number of molecules per unit volume does not change."
              ]
            }
          ],
          recap: [
            "State Boyle's Law and explain it using the kinetic model of matter. [3]",
            "A gas at 20°C and 200 kPa has a volume of 5.0 L. Calculate its volume when the temperature is raised to 80°C at the same pressure. [3]",
            "Explain what is meant by absolute zero in terms of particle motion. [2]",
            "A fixed mass of gas at 100 kPa and 27°C is heated to 327°C at constant volume. Calculate the new pressure. [3]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Waves",
      intro: "Waves transfer energy from place to place without the transfer of matter. They are produced by vibrations and are characterised by amplitude, frequency, wavelength, and wave speed. Transverse waves have oscillations perpendicular to the direction of energy transfer; longitudinal waves have oscillations parallel to the direction of energy transfer. Sound is a longitudinal mechanical wave; light is a transverse electromagnetic wave. The wave equation — wave speed = frequency × wavelength — links the key properties and is used constantly in calculations. Understanding reflection, refraction, and diffraction allows us to explain optical instruments, wireless communication, and medical imaging.",
      subheadings: [
        {
          title: "Wave Properties and the Wave Equation",
          body: "Amplitude is the maximum displacement of a particle from its equilibrium position — it determines the energy (and for sound, the loudness). Frequency (f) is the number of complete oscillations per second, measured in hertz (Hz). Period (T) is the time for one complete oscillation: T = 1/f. Wavelength (λ) is the distance between two adjacent points in phase (e.g. two successive crests). Wave speed (v) is the distance travelled per unit time. These are related by the wave equation: v = fλ. For a wave travelling at constant speed, if frequency increases, wavelength decreases proportionally. Transverse waves (light, water waves, electromagnetic waves) have particles oscillating at 90° to the wave direction. Longitudinal waves (sound, ultrasound) have particles oscillating parallel to the wave direction, creating compressions (high pressure regions) and rarefactions (low pressure regions). Sound travels at approximately 340 m/s in air, faster in liquids (1500 m/s in water), and faster still in solids. The speed of light (and all electromagnetic waves) in a vacuum is exactly 3 × 10^8 m/s.",
          groups: [
            {
              subTitle: "Using the wave equation",
              bullets: [
                "**Example 1**: A sound wave has frequency 440 Hz (concert A) and speed 340 m/s. Find wavelength: λ = v/f = 340/440 = 0.77 m.",
                "**Example 2**: Electromagnetic wave has wavelength 5 × 10-7 m. Find frequency: f = v/λ = (3×10^8)/(5×10^-7) = 6 × 10^14 Hz. (This is visible light, green wavelength.)",
                "**Comparing sound and light**: Sound is mechanical (requires a medium, cannot travel in vacuum). Light is electromagnetic (can travel in vacuum). Sound is longitudinal; light is transverse. Sound speed in air ≈ 340 m/s; light speed ≈ 3×10^8 m/s.",
                "**Compressions and rarefactions**: In a sound wave, compressions are regions where air molecules are pushed closer together (high pressure, high density). Rarefactions are regions where molecules are pulled apart (low pressure, low density). The molecules do not travel with the wave — they vibrate back and forth about their equilibrium positions."
              ]
            }
          ],
          recap: [
            "Define wavelength and frequency. State the relationship between them and wave speed. [3]",
            "A radio wave has a wavelength of 3 m. Calculate its frequency. (speed of light = 3 × 10^8 m/s) [2]",
            "Explain the difference between a transverse wave and a longitudinal wave and give one example of each. [3]",
            "Explain why sound cannot travel in a vacuum but light can. [2]"
          ]
        },
        {
          title: "Reflection, Refraction and Total Internal Reflection",
          body: "Reflection occurs when a wave bounces off a surface. The law of reflection states that the angle of incidence equals the angle of reflection, both measured from the normal (perpendicular to the surface at the point of incidence). A plane mirror forms a virtual, upright, same-size image as far behind the mirror as the object is in front. Refraction is the change in direction of a wave when it passes from one medium to another, caused by a change in wave speed. When light enters a denser medium (such as from air into glass), it slows down and bends toward the normal (the angle of refraction is less than the angle of incidence). When it exits into a less dense medium, it speeds up and bends away from the normal. Snell's Law: n1 sin θ1 = n2 sin θ2. The refractive index n = sin i / sin r (for light going from air into the medium). Total internal reflection (TIR) occurs when light travels from a denser to a less dense medium and the angle of incidence exceeds the critical angle (c). At exactly the critical angle, the refracted ray runs along the boundary (angle of refraction = 90°). Above the critical angle, all light is reflected back into the denser medium — no refraction occurs. sin c = 1/n. TIR is the basis of optical fibres: light bounces along the inside of a glass fibre with no loss, allowing transmission of signals (internet, telephone) and medical imaging (endoscopes).",
          groups: [
            {
              subTitle: "Optical fibre and TIR applications",
              bullets: [
                "**Optical fibre structure**: A glass core with a high refractive index surrounded by a cladding with a lower refractive index. Light enters one end at an angle greater than the critical angle; TIR at the core-cladding boundary keeps the light bouncing inside the core along the whole length.",
                "**Advantages of optical fibres over copper wires**: Carry more information (higher bandwidth). No electrical interference. Lighter and cheaper to manufacture. Signal travels at speed of light. Multiple signals can be sent simultaneously (multiplexing).",
                "**Endoscope**: Medical instrument using a bundle of optical fibres. One set carries light from a bright source into the body; another set carries the reflected image back to the doctor or a camera. Allows internal inspection without invasive surgery.",
                "**Calculating critical angle**: For glass with refractive index 1.5: sin c = 1/1.5 = 0.667; c = 41.8°. Any ray in glass hitting the glass-air boundary at more than 41.8° will be totally internally reflected."
              ]
            }
          ],
          recap: [
            "Explain what is meant by total internal reflection and state the conditions necessary for it to occur. [3]",
            "Light travels from glass (n = 1.5) into air. Calculate the critical angle. [2]",
            "Describe how optical fibres use total internal reflection to transmit information. [3]",
            "Draw a ray diagram to show how a ray of light refracts as it passes from air into glass. Label the normal, angle of incidence, and angle of refraction. [3]"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Electricity and Magnetism",
      intro: "Electricity underpins modern technology. Understanding electric current, voltage, resistance, and power allows us to design circuits and calculate energy usage. Ohm's Law and the rules for series and parallel circuits enable systematic analysis of complex circuit configurations. Electromagnetic induction — the generation of a voltage by a changing magnetic field — is the principle behind generators, transformers, and the national electricity grid. Magnetic fields exert forces on current-carrying conductors, which is the basis of electric motors.",
      subheadings: [
        {
          title: "Current, Voltage, Resistance and Ohm's Law",
          body: "Electric current (I) is the rate of flow of electric charge: I = Q/t, where Q is charge in coulombs (C) and t is time in seconds. The unit of current is the ampere (A). In metallic conductors, current is the flow of free electrons; conventional current is defined as flowing from positive to negative (opposite to electron flow). Voltage (V) is the electrical potential difference between two points — it measures the work done per unit charge moving between them: V = W/Q. The unit of voltage is the volt (V = J/C). Resistance (R) is the opposition to the flow of current: R = V/I. The unit of resistance is the ohm (Ω). Ohm's Law states that for a metallic conductor at constant temperature, the current through it is directly proportional to the potential difference across it. The I-V graph for an ohmic conductor is a straight line through the origin. A filament lamp is non-ohmic — as it heats up, its resistance increases, so the I-V graph is a curve (flattens at high V). A diode has extremely high resistance in reverse bias and very low resistance in forward bias above the threshold voltage — it only allows current in one direction. Kirchhoff's first law: the total current entering a junction equals the total current leaving (conservation of charge). Kirchhoff's second law: the sum of the e.m.f.s around a closed loop equals the sum of the voltage drops (conservation of energy).",
          groups: [
            {
              subTitle: "Series and parallel circuit rules",
              bullets: [
                "**Series circuits**: Current is the same through all components. Total voltage = sum of individual voltages. Total resistance = R1 + R2 + R3. If one component fails (open circuit), all components stop working.",
                "**Parallel circuits**: Voltage across each branch is the same (= supply voltage). Total current = sum of branch currents. 1/Rtotal = 1/R1 + 1/R2 + 1/R3. Total resistance is less than the smallest individual resistance. If one branch fails, others continue to work.",
                "**Calculating power**: P = IV = I2R = V2/R. Power in watts is the rate of energy transfer. A 60 W bulb with 230 V supply: I = P/V = 60/230 = 0.26 A; R = V/I = 230/0.26 = 885 Ω.",
                "**Energy and cost**: Electrical energy = power × time: E = Pt. In kWh: energy (kWh) = power (kW) × time (h). Cost = energy (kWh) × cost per kWh. A 2 kW heater running for 3 h uses 6 kWh; at 15p/kWh this costs 90p."
              ]
            }
          ],
          recap: [
            "State Ohm's Law and describe the I-V characteristic of an ohmic resistor. [2]",
            "Two resistors of 6 Ω and 3 Ω are connected in parallel. Calculate the combined resistance. [2]",
            "A 1000 W kettle is used for 5 minutes. Calculate the energy used in joules and in kWh. [3]",
            "Explain why the resistance of a filament lamp increases as it gets hotter. [2]"
          ]
        },
        {
          title: "Electromagnetic Induction and Transformers",
          body: "Electromagnetic induction is the production of an electromotive force (e.m.f.) in a conductor when there is relative motion between the conductor and a magnetic field, or when the magnetic flux through a conductor changes. This was discovered by Michael Faraday. Faraday's Law states that the magnitude of the induced e.m.f. is proportional to the rate of change of magnetic flux. Lenz's Law states that the direction of the induced current is always such as to oppose the change causing it (a consequence of conservation of energy). The induced e.m.f. can be increased by: moving the conductor faster, using a stronger magnetic field, or increasing the number of turns in a coil. An a.c. generator (alternator) uses a rotating coil in a magnetic field; as the coil rotates, the flux through it changes continuously, inducing an alternating e.m.f. A transformer uses electromagnetic induction to change the voltage of an alternating current. It consists of two coils (primary and secondary) wound on a soft iron core. The primary coil creates a changing magnetic flux in the iron core; this induces an e.m.f. in the secondary coil. The turns ratio equation: Vp/Vs = Np/Ns. For an ideal transformer: VpIp = VsIs (power input = power output). Step-up transformers increase voltage (and decrease current); step-down transformers decrease voltage. High voltage transmission over long distances reduces current (I = P/V), which reduces power loss in resistance of cables (P_loss = I2R).",
          groups: [
            {
              subTitle: "Transformer calculations",
              bullets: [
                "**Turns ratio**: Vp/Vs = Np/Ns. Example: Primary has 200 turns and 230 V. Secondary has 20 turns. Vs = 230 × (20/200) = 23 V. This is a step-down transformer.",
                "**Power equation (ideal transformer)**: VpIp = VsIs. If primary: 230 V, 0.5 A; secondary: 23 V; Is = VpIp/Vs = 230×0.5/23 = 5 A. Current increases as voltage decreases.",
                "**Why high voltage for transmission**: Power line has resistance R. Power lost = I2R. If V is stepped up 10× (by a step-up transformer), I decreases 10× for same power; power loss = (I/10)2 × R = I2R/100. Power loss is 100 times less. More economical.",
                "**Soft iron core**: Must be soft iron (not steel) because soft iron can be easily magnetised and demagnetised rapidly with the alternating current. Steel is a permanent magnet and would retain its magnetism, reducing the efficiency of flux change."
              ]
            }
          ],
          recap: [
            "State Faraday's Law of electromagnetic induction. [2]",
            "State three ways to increase the e.m.f. induced in a coil rotating in a magnetic field. [3]",
            "A transformer has 500 turns on the primary and 50 turns on the secondary. The primary voltage is 240 V. Calculate the secondary voltage and state whether this is a step-up or step-down transformer. [3]",
            "Explain why electrical energy is transmitted at high voltage and low current over long distances. [3]"
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Atomic Physics",
      intro: "The atom has a tiny, dense, positively charged nucleus surrounded by orbiting electrons. The nucleus contains protons and neutrons (nucleons). Some nuclei are unstable and spontaneously emit radiation to become more stable — this is radioactive decay. There are three types of ionising radiation: alpha, beta, and gamma, each with different properties, penetrating powers, and ionising abilities. Nuclear reactions — both fission and fusion — release enormous amounts of energy from tiny changes in mass, providing both electricity generation and the most destructive weapons ever made.",
      subheadings: [
        {
          title: "Radioactive Decay and Types of Radiation",
          body: "Radioactive decay is a spontaneous, random process by which an unstable nucleus emits radiation to become more stable. Spontaneous means no external trigger causes it; random means it is impossible to predict when any particular nucleus will decay, though statistical laws predict the average behaviour of large numbers of nuclei. Alpha (α) decay: the nucleus emits an alpha particle (consisting of 2 protons and 2 neutrons, identical to a helium-4 nucleus). The daughter nucleus has atomic number 2 less and mass number 4 less. Alpha particles have charge +2, are the most strongly ionising (ionise ~10,000 atoms per mm of air), but are the least penetrating — stopped by a few cm of air or a thin sheet of paper. Beta-minus (β-) decay: a neutron in the nucleus is converted to a proton, and a beta particle (a high-energy electron) is emitted, along with an antineutrino. The daughter nucleus has atomic number 1 more but the same mass number. Beta particles have charge -1, moderate ionising ability, and are stopped by a few mm of aluminium. Gamma (γ) radiation: after alpha or beta decay, the daughter nucleus may still be in an excited energy state. It releases excess energy as a gamma ray (high-energy electromagnetic radiation). No change in atomic number or mass number. Gamma rays have no charge, weakest ionising ability, but the most penetrating — significantly attenuated by several cm of lead or many metres of concrete.",
          groups: [
            {
              subTitle: "Comparing the three types of radiation",
              bullets: [
                "**Alpha**: Charge +2, mass 4 u. Stopped by paper or a few cm of air. High ionising power. Dangerous when inhaled or ingested (internal exposure) but external skin exposure is less hazardous because alpha cannot penetrate skin.",
                "**Beta**: Charge -1, mass ~0. Stopped by a few mm of aluminium or several cm of air. Moderate ionising power. Can penetrate skin but not deeply into the body.",
                "**Gamma**: No charge, no mass. Requires several cm of lead or metres of concrete to significantly reduce intensity. Weakest ioniser. Penetrates deeply into the body — requires significant shielding for external radiation exposure.",
                "**Uses based on penetration**: Alpha (short range): smoke detectors — alpha source ionises air in detector chamber; smoke absorbs ions and reduces ionisation current, triggering alarm. Beta (penetrates thin materials): thickness gauges in paper/foil manufacturing. Gamma (penetrates thick materials): sterilising medical equipment, cancer radiotherapy, tracing blood flow."
              ]
            }
          ],
          recap: [
            "Describe the nature of alpha particles and explain why they are highly ionising but weakly penetrating. [3]",
            "Uranium-238 decays by alpha emission. Write a nuclear equation for this decay. [2]",
            "Explain why gamma radiation is the most penetrating type of nuclear radiation. [2]",
            "Carbon-14 decays by beta-minus emission to nitrogen-14. Write the nuclear equation and identify the number of protons and neutrons in the nitrogen-14 nucleus. [3]"
          ]
        },
        {
          title: "Half-Life and Nuclear Fission",
          body: "The half-life of a radioactive isotope is the time taken for the number of undecayed nuclei (or the activity) to fall to half its initial value. Half-life is constant for a given isotope and is unaffected by temperature, pressure, or chemical state. Activity (measured in becquerels, Bq) is the number of nuclear decays per second. After one half-life, activity falls to A0/2; after two half-lives, A0/4; after n half-lives, A0/(2^n). Half-life has important practical implications: short half-life isotopes (seconds to days) are used in medical tracing because they decay quickly, limiting radiation dose to the patient; long half-life isotopes (thousands of years) like carbon-14 are used in radiocarbon dating of organic material. Nuclear fission is the splitting of a large unstable nucleus (such as uranium-235 or plutonium-239) into two smaller daughter nuclei, with the release of 2-3 neutrons and a large amount of energy. The released neutrons can trigger further fissions in a chain reaction. In a controlled chain reaction (nuclear reactor), on average one neutron from each fission triggers one further fission — exactly criticality. In an uncontrolled chain reaction, every neutron triggers multiple further fissions — the reaction rate increases exponentially, releasing enormous energy as an explosion (atomic bomb). Control rods (made of boron or cadmium) absorb excess neutrons in a reactor to maintain controlled criticality. Nuclear fusion is the joining of two light nuclei (such as hydrogen isotopes — deuterium and tritium) to form a heavier nucleus, releasing even more energy per unit mass than fission. Fusion requires extremely high temperatures (~10^8 K) to overcome the electrostatic repulsion between positively charged nuclei — it is the energy source of stars.",
          groups: [
            {
              subTitle: "Half-life calculations",
              bullets: [
                "**From graph**: Plot count rate against time. Read off the time for count rate to halve. Repeat from a different starting point and average the values.",
                "**Calculation example**: A sample has initial activity 800 Bq. The half-life is 2 hours. After 6 hours (3 half-lives): activity = 800 × (1/2)^3 = 800/8 = 100 Bq.",
                "**Background radiation correction**: Before using a Geiger counter, measure background count rate (due to natural sources — radon gas, cosmic rays, rocks, food). Subtract this from all readings: corrected count rate = measured count rate - background count rate.",
                "**Finding half-life from data**: If count rate falls from 1200 to 150 in 9 days, it halved 3 times (1200 → 600 → 300 → 150). Number of half-lives = 3. Half-life = 9/3 = 3 days."
              ]
            }
          ],
          recap: [
            "Define the term half-life. [2]",
            "A radioactive source has an initial activity of 640 Bq and a half-life of 5 days. Calculate the activity after 20 days. [3]",
            "Explain how a nuclear chain reaction is controlled in a nuclear reactor. [4]",
            "State one difference and one similarity between nuclear fission and nuclear fusion. [2]"
          ]
        }
      ]
    }
  ]
};
