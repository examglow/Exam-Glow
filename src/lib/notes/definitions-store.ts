import type { Chapter, SubHeading, BulletGroup, SubjectNotes } from "./types";

export type FlashcardItem = {
  id: string;
  front: string;
  back: string;
  category: "definition" | "formula" | "concept" | "exam_tip";
  chapterNumber?: number;
  chapterTitle?: string;
};

// ─── Cambridge-aligned Key Definitions by Subject ID ───────────────────────────
const CAMBRIDGE_DEFINITIONS: Record<
  string,
  {
    topic: string;
    definitions: {
      term: string;
      definition: string;
      formulaWords?: string;
      formulaSymbols?: string;
      examinerNote?: string;
    }[];
  }[]
> = {
  // BIOLOGY 0610
  "0610": [
    {
      topic: "Characteristics & Classification of Living Organisms",
      definitions: [
        {
          term: "Movement",
          definition:
            "An action by an organism or part of an organism causing a **change of position or place**.",
          examinerNote:
            "Examiners look for 'change of position or place'. Mentioning both organism or part of an organism earns full marks.",
        },
        {
          term: "Respiration",
          definition:
            "The **chemical reactions in cells** that break down nutrient molecules and **release energy for metabolism**.",
          formulaWords: "Glucose + Oxygen → Carbon Dioxide + Water (+ Energy released as ATP)",
          formulaSymbols: "C6H12O6 + 6O2 -> 6CO2 + 6H2O",
          examinerNote:
            "Do NOT confuse with breathing or ventilation. Must state 'chemical reactions in cells' and 'release energy'.",
        },
        {
          term: "Sensitivity",
          definition:
            "The ability to **detect and respond** to changes in the internal or external **environment** (stimuli).",
          examinerNote: "Both 'detect' and 'respond' must be mentioned.",
        },
        {
          term: "Growth",
          definition:
            "A **permanent increase in size and dry mass** by an increase in cell number, cell size, or both.",
          examinerNote: "'Permanent' and 'dry mass' are the key marking points.",
        },
        {
          term: "Reproduction",
          definition: "The processes that make **more of the same kind of organism**.",
        },
        {
          term: "Excretion",
          definition:
            "The **removal of toxic materials**, the **waste products of metabolism**, and **substances in excess of requirements** from organisms.",
          examinerNote:
            "Must specify 'waste products of metabolism' (e.g. urea, carbon dioxide), NOT egestion/faeces.",
        },
        {
          term: "Nutrition",
          definition: "The taking in of **materials for energy, growth and development**.",
        },
        {
          term: "Species",
          definition: "A group of organisms that can **reproduce to produce fertile offspring**.",
          examinerNote: "Always include the word 'fertile'. Offspring alone is not enough.",
        },
      ],
    },
    {
      topic: "Cells & Movement In and Out of Cells",
      definitions: [
        {
          term: "Diffusion",
          definition:
            "The **net movement of particles** from a region of their **higher concentration to a region of their lower concentration** down a concentration gradient, as a result of their **random movement**.",
          examinerNote:
            "Key words: 'net movement', 'higher to lower concentration', 'random movement'.",
        },
        {
          term: "Osmosis",
          definition:
            "The **net movement of water molecules** from a region of **higher water potential to a region of lower water potential** through a **partially permeable membrane**.",
          formulaWords:
            "Water potential of pure water = 0 kPa (dilute solution = high water potential, concentrated solution = low water potential)",
          examinerNote:
            "Never say 'concentration of water'. Always say 'water potential' and mention 'partially permeable membrane'.",
        },
        {
          term: "Active Transport",
          definition:
            "The movement of particles through a cell membrane from a region of **lower concentration to a region of higher concentration** (against a concentration gradient) using **energy from respiration** and protein carriers.",
          examinerNote:
            "Must state 'against concentration gradient' and 'using energy from respiration'.",
        },
      ],
    },
    {
      topic: "Enzymes & Biological Molecules",
      definitions: [
        {
          term: "Catalyst",
          definition:
            "A substance that **increases the rate of a chemical reaction** and is **not changed or consumed** by the reaction.",
        },
        {
          term: "Enzyme",
          definition:
            "A **protein** that functions as a **biological catalyst** to speed up metabolic reactions.",
          examinerNote: "2 marks: 1 mark for 'protein', 1 mark for 'biological catalyst'.",
        },
        {
          term: "Denaturation",
          definition:
            "An **irreversible change in the tertiary structure of an enzyme's active site** caused by extreme temperature or pH, meaning the substrate **can no longer fit to form enzyme-substrate complexes**.",
          examinerNote:
            "Never say the enzyme 'dies' (enzymes are molecules, not living things). State active site changes shape permanently.",
        },
        {
          term: "Photosynthesis",
          definition:
            "The process by which plants **synthesise carbohydrates from raw materials using light energy**.",
          formulaWords:
            "Carbon Dioxide + Water → Glucose + Oxygen (in the presence of Light and Chlorophyll)",
          formulaSymbols: "6CO2 + 6H2O -> C6H12O6 + 6O2",
          examinerNote: "Light energy is transferred to chemical energy in synthesized molecules.",
        },
        {
          term: "Transpiration",
          definition:
            "The **loss of water vapour from plant leaves** by evaporation of water at the surfaces of the mesophyll cells followed by **diffusion of water vapour through the stomata**.",
          examinerNote:
            "1 mark for 'evaporation from mesophyll', 1 mark for 'diffusion of water vapour through stomata'.",
        },
        {
          term: "Pathogen",
          definition: "A **disease-causing organism** (e.g. bacterium, virus, fungus, protoctist).",
        },
        {
          term: "Transmissible Disease",
          definition: "A disease in which the **pathogen can be passed from one host to another**.",
        },
        {
          term: "Active Immunity",
          definition:
            "Defence against a pathogen by **antibody production in the body** as a result of infection or vaccination; confers **long-term memory cells**.",
        },
        {
          term: "Passive Immunity",
          definition:
            "**Short-term defence** against a pathogen by antibodies acquired from **another individual** (e.g. breast milk, antiserum); memory cells are **not produced**.",
        },
        {
          term: "Hormone",
          definition:
            "A **chemical substance produced by an endocrine gland** and **carried by the blood**, which alters the activity of one or more specific **target organs**.",
        },
        {
          term: "Homeostasis",
          definition:
            "The **maintenance of a constant internal environment** (e.g. body temperature, blood glucose concentration).",
        },
        {
          term: "Gene",
          definition: "A length of **DNA that codes for a specific protein**.",
        },
        {
          term: "Allele",
          definition:
            "An **alternative form of a gene** occupying the same locus on homologous chromosomes.",
        },
        {
          term: "Mutation",
          definition: "A **change in the base sequence of DNA** or in chromosome structure/number.",
        },
      ],
    },
  ],

  // PHYSICS 0625
  "0625": [
    {
      topic: "Motion, Forces & Energy",
      definitions: [
        {
          term: "Speed",
          definition: "The **distance travelled per unit time** (a scalar quantity).",
          formulaWords: "Speed = Distance ÷ Time",
          formulaSymbols: "v = d / t",
          examinerNote: "Unit is metres per second (m/s). Scalar: has magnitude only.",
        },
        {
          term: "Velocity",
          definition:
            "The **rate of change of displacement** (or speed in a given direction; a vector quantity).",
          formulaWords: "Velocity = Displacement ÷ Time taken",
          formulaSymbols: "v = s / t",
          examinerNote: "Vector: has both magnitude and direction.",
        },
        {
          term: "Acceleration",
          definition: "The **rate of change of velocity** per unit time.",
          formulaWords: "Acceleration = (Final Velocity - Initial Velocity) ÷ Time taken",
          formulaSymbols: "a = (v - u) / t",
          examinerNote: "Unit is m/s². Deceleration is negative acceleration.",
        },
        {
          term: "Mass",
          definition:
            "A measure of the **quantity of matter in an object** at rest relative to the observer; also a measure of an object's resistance to change in motion (inertia).",
          examinerNote: "Mass is scalar, measured in kg, constant anywhere in the universe.",
        },
        {
          term: "Weight",
          definition: "The **gravitational force exerted on an object that has mass**.",
          formulaWords: "Weight = Mass × Gravitational field strength",
          formulaSymbols: "W = m * g",
          examinerNote:
            "Weight is a vector, measured in Newtons (N). g on Earth = 9.8 N/kg (or 10 N/kg).",
        },
        {
          term: "Density",
          definition: "The **mass per unit volume** of a material.",
          formulaWords: "Density = Mass ÷ Volume",
          formulaSymbols: "rho = m / V",
          examinerNote: "Unit is kg/m³ or g/cm³. 1 g/cm³ = 1000 kg/m³.",
        },
        {
          term: "Hooke's Law",
          definition:
            "The **extension of a spring is directly proportional to the applied load (force)**, provided the **limit of proportionality is not exceeded**.",
          formulaWords: "Force = Spring Constant × Extension",
          formulaSymbols: "F = k * x",
          examinerNote:
            "Always state the condition: 'provided limit of proportionality is not exceeded'.",
        },
        {
          term: "Moment of a Force",
          definition:
            "A measure of the **turning effect of a force** about a pivot; equal to the force multiplied by the perpendicular distance from the pivot.",
          formulaWords: "Moment = Force × Perpendicular distance from pivot",
          formulaSymbols: "M = F * d",
          examinerNote: "Unit is Newton-metre (N m). Must include 'perpendicular distance'.",
        },
        {
          term: "Principle of Moments",
          definition:
            "For an object in rotational equilibrium, the **sum of clockwise moments about any point is equal to the sum of anticlockwise moments about that same point**.",
          formulaWords: "Sum of Clockwise Moments = Sum of Anticlockwise Moments",
          formulaSymbols: "Sigma(F1 * d1) = Sigma(F2 * d2)",
        },
        {
          term: "Momentum",
          definition: "The **product of an object's mass and its velocity**.",
          formulaWords: "Momentum = Mass × Velocity",
          formulaSymbols: "p = m * v",
          examinerNote: "Unit is kg m/s. Vector quantity.",
        },
        {
          term: "Impulse",
          definition:
            "The **force applied multiplied by the time interval over which it acts**, equal to the **change in momentum**.",
          formulaWords:
            "Impulse = Force × Time = Change in Momentum = Final Momentum - Initial Momentum",
          formulaSymbols: "Impulse = F * Delta(t) = Delta(p) = m * v - m * u",
        },
        {
          term: "Work Done",
          definition:
            "The **force multiplied by the distance moved in the direction of the force**.",
          formulaWords: "Work Done = Force × Distance in direction of force",
          formulaSymbols: "W = F * d",
          examinerNote: "Unit is Joule (J). 1 J = 1 N m.",
        },
        {
          term: "Power",
          definition:
            "The **rate of doing work** or the **rate of energy transferred per unit time**.",
          formulaWords: "Power = Work Done ÷ Time taken = Energy Transferred ÷ Time taken",
          formulaSymbols: "P = W / t = Delta(E) / t",
          examinerNote: "Unit is Watt (W). 1 W = 1 J/s.",
        },
        {
          term: "Efficiency",
          definition:
            "The ratio of **useful energy output to total energy input**, expressed as a percentage.",
          formulaWords: "Efficiency = (Useful Energy Output ÷ Total Energy Input) × 100%",
          formulaSymbols: "Efficiency = (E_useful / E_total) * 100%",
        },
        {
          term: "Pressure",
          definition: "The **force exerted per unit area** applied perpendicular to a surface.",
          formulaWords: "Pressure = Force ÷ Area",
          formulaSymbols: "p = F / A",
          examinerNote: "Unit is Pascal (Pa). 1 Pa = 1 N/m².",
        },
      ],
    },
    {
      topic: "Thermal, Waves, Electricity & Magnetism",
      definitions: [
        {
          term: "Specific Heat Capacity (c)",
          definition: "The **energy required per unit mass per unit temperature increase**.",
          formulaWords:
            "Change in Thermal Energy = Mass × Specific Heat Capacity × Temperature Change",
          formulaSymbols: "Delta(E) = m * c * Delta(T)",
          examinerNote: "Unit is J / (kg °C).",
        },
        {
          term: "Frequency (f)",
          definition: "The **number of complete wavelengths (cycles) passing a point per second**.",
          formulaWords: "Wave Speed = Frequency × Wavelength",
          formulaSymbols: "v = f * lambda",
          examinerNote: "Unit is Hertz (Hz).",
        },
        {
          term: "Wavelength (λ)",
          definition:
            "The **distance between two successive corresponding points on a wave** (e.g. from crest to crest or compression to compression).",
        },
        {
          term: "Refractive Index (n)",
          definition:
            "The ratio of the **speed of light in a vacuum to the speed of light in the medium**, or the ratio of the sine of the angle of incidence to the sine of the angle of refraction.",
          formulaWords: "Refractive Index = sin(Angle of incidence) ÷ sin(Angle of refraction)",
          formulaSymbols: "n = sin(i) / sin(r)",
        },
        {
          term: "Electric Current (I)",
          definition: "The **rate of flow of electric charge** past a point.",
          formulaWords: "Current = Charge ÷ Time",
          formulaSymbols: "I = Q / t",
          examinerNote: "Unit is Ampere (A). 1 A = 1 C/s.",
        },
        {
          term: "Electromotive Force (e.m.f.)",
          definition:
            "The **electrical energy provided by a power source per unit charge** in driving charge round a complete circuit.",
          formulaWords: "e.m.f. = Electrical Energy supplied ÷ Charge",
          formulaSymbols: "E = W / Q",
          examinerNote:
            "Unit is Volt (V). 1 V = 1 J/C. Distinguished from p.d. because it refers to energy *supplied by source*.",
        },
        {
          term: "Potential Difference (p.d.)",
          definition:
            "The **energy transferred per unit charge** as charge passes between two points in an electrical circuit.",
          formulaWords: "Potential Difference = Energy Transferred ÷ Charge",
          formulaSymbols: "V = W / Q",
          examinerNote: "Unit is Volt (V).",
        },
        {
          term: "Resistance (R)",
          definition:
            "The ratio of **potential difference across a component to the current flowing through it**.",
          formulaWords: "Resistance = Potential Difference ÷ Current",
          formulaSymbols: "R = V / I",
          examinerNote: "Unit is Ohm (Ω).",
        },
        {
          term: "Half-Life",
          definition:
            "The **time taken for half the radioactive nuclei** of an isotope in a sample to decay, or the **time for the activity to halve**.",
          examinerNote: "Mention 'half of the radioactive nuclei decay' or 'activity halves'.",
        },
      ],
    },
  ],

  // CHEMISTRY 0620
  "0620": [
    {
      topic: "Particulate Nature, Atoms & Bonding",
      definitions: [
        {
          term: "Element",
          definition:
            "A substance that **cannot be split into anything simpler by chemical means**; consists of atoms with the same proton number.",
        },
        {
          term: "Compound",
          definition:
            "A substance made of **two or more different elements chemically bonded together** in a fixed ratio.",
        },
        {
          term: "Mixture",
          definition:
            "Two or more substances **physically mixed together but not chemically bonded**, which can be separated by physical methods.",
        },
        {
          term: "Isotopes",
          definition:
            "Atoms of the **same element having the same number of protons** (same atomic number) but **different numbers of neutrons** (different nucleon/mass numbers).",
          examinerNote:
            "Key phrase: 'same number of protons, different numbers of neutrons'. Isotopes have identical chemical properties because they have the same outer shell electronic structure.",
        },
        {
          term: "Relative Atomic Mass (Ar)",
          definition:
            "The **average mass of naturally occurring atoms of an element** on a scale where the carbon-12 atom has a mass of exactly 12 units.",
        },
        {
          term: "Ionic Bond",
          definition:
            "A **strong electrostatic attraction between oppositely charged ions** formed by the transfer of electrons from a metal atom to a non-metal atom.",
        },
        {
          term: "Covalent Bond",
          definition:
            "A chemical bond formed when **two non-metal atoms share one or more pairs of electrons** to achieve noble gas electron configurations.",
        },
        {
          term: "Metallic Bond",
          definition:
            "A **lattice of positive metal ions in a 'sea' of delocalised electrons** held together by electrostatic attraction.",
        },
      ],
    },
    {
      topic: "Stoichiometry, Acids, Bases & Organic Chemistry",
      definitions: [
        {
          term: "Mole",
          definition:
            "The amount of substance that contains **6.02 × 10²³ particles** (atoms, molecules, or formula units) - Avogadro's constant.",
          formulaWords: "Number of Moles = Mass (g) ÷ Molar Mass (g/mol)",
          formulaSymbols: "n = m / M",
        },
        {
          term: "Concentration",
          definition:
            "The **amount of solute (in moles or grams) dissolved per unit volume of solution** (usually in 1 dm³).",
          formulaWords: "Concentration (mol/dm³) = Number of Moles ÷ Volume (dm³)",
          formulaSymbols: "c = n / V",
          examinerNote: "Convert cm³ to dm³ by dividing by 1000 (1 dm³ = 1000 cm³).",
        },
        {
          term: "Acid",
          definition:
            "A **proton (H⁺ ion) donor** that dissolves in water to produce hydrogen ions H⁺(aq).",
        },
        {
          term: "Base",
          definition:
            "A **proton (H⁺ ion) acceptor** (such as a metal oxide or metal hydroxide). An alkali is a base that dissolves in water to produce OH⁻(aq) ions.",
        },
        {
          term: "Oxidation",
          definition:
            "**Gain of oxygen**, **loss of hydrogen**, or **loss of electrons** (OIL: Oxidation Is Loss). Also corresponds to an increase in oxidation number.",
        },
        {
          term: "Reduction",
          definition:
            "**Loss of oxygen**, **gain of hydrogen**, or **gain of electrons** (RIG: Reduction Is Gain). Also corresponds to a decrease in oxidation number.",
        },
        {
          term: "Redox Reaction",
          definition:
            "A reaction in which **both oxidation and reduction take place simultaneously**.",
        },
        {
          term: "Exothermic Reaction",
          definition:
            "A reaction that **transfers thermal energy to the surroundings**, leading to an **increase in temperature** of the surroundings (ΔH is negative).",
          examinerNote:
            "Energy needed to break bonds is less than energy released when forming new bonds.",
        },
        {
          term: "Endothermic Reaction",
          definition:
            "A reaction that **absorbs thermal energy from the surroundings**, leading to a **decrease in temperature** of the surroundings (ΔH is positive).",
        },
        {
          term: "Activation Energy",
          definition:
            "The **minimum amount of energy colliding particles must possess** for a successful reaction to occur.",
        },
        {
          term: "Hydrocarbon",
          definition: "A compound containing **carbon and hydrogen atoms only**.",
          examinerNote: "Crucial word: 'only'. Leaving out 'only' loses the mark.",
        },
        {
          term: "Homologous Series",
          definition:
            "A family of organic compounds with the **same functional group**, **same general formula**, **similar chemical properties**, and a **gradual trend in physical properties**, where each successive member differs by a -CH2- unit.",
        },
      ],
    },
  ],

  // MATHEMATICS 0580
  "0580": [
    {
      topic: "Numbers & Algebra",
      definitions: [
        {
          term: "Prime Number",
          definition:
            "A positive integer greater than 1 that has **exactly two distinct positive divisors: 1 and itself** (Note: 1 is NOT a prime number; 2 is the only even prime).",
        },
        {
          term: "Significant Figures",
          definition:
            "Digits in a number that carry meaningful contribution to its measurement precision, starting from the **first non-zero digit on the left**.",
          examinerNote:
            "Cambridge standard: Unless instructed otherwise, non-exact answers must be given to 3 significant figures, or 1 decimal place for angles.",
        },
        {
          term: "Percentage Change",
          definition:
            "The relative difference between an original value and a new value expressed as a percentage of the original value.",
          formulaWords:
            "Percentage Change = ((New Value - Original Value) ÷ Original Value) × 100%",
          formulaSymbols: "% Change = ((x_new - x_old) / x_old) * 100%",
        },
        {
          term: "Compound Interest",
          definition:
            "Interest calculated on both the initial principal and the accumulated interest from previous compounding periods.",
          formulaWords: "Total Amount = Principal × (1 + (Rate ÷ 100))^Number of Periods",
          formulaSymbols: "A = P * (1 + r/100)^n",
        },
        {
          term: "Gradient of a Straight Line",
          definition:
            "The measure of steepness of a line; the ratio of the vertical change (rise) to the horizontal change (run).",
          formulaWords: "Gradient (m) = (Change in y) ÷ (Change in x) = (y2 - y1) ÷ (x2 - x1)",
          formulaSymbols: "m = (y2 - y1) / (x2 - x1)",
        },
        {
          term: "Quadratic Formula",
          definition:
            "Formula used to find the solutions (roots) of any quadratic equation of the form ax² + bx + c = 0.",
          formulaWords: "x = (-b ± √(b² - 4ac)) ÷ (2a)",
          formulaSymbols: "x = (-b +- sqrt(b^2 - 4ac)) / (2a)",
        },
      ],
    },
    {
      topic: "Geometry, Trigonometry & Statistics",
      definitions: [
        {
          term: "Pythagoras' Theorem",
          definition:
            "In any right-angled triangle, the **square of the hypotenuse is equal to the sum of the squares of the other two sides**.",
          formulaWords: "(Hypotenuse)² = (Side a)² + (Side b)²",
          formulaSymbols: "a^2 + b^2 = c^2",
        },
        {
          term: "Trigonometric Ratios (SOH CAH TOA)",
          definition:
            "The fundamental trigonometric ratios relating an acute angle θ to side lengths in a right-angled triangle.",
          formulaWords:
            "sin(θ) = Opposite ÷ Hypotenuse;  cos(θ) = Adjacent ÷ Hypotenuse;  tan(θ) = Opposite ÷ Adjacent",
          formulaSymbols: "sin(theta) = O/H, cos(theta) = A/H, tan(theta) = O/A",
        },
        {
          term: "Sine Rule & Cosine Rule",
          definition: "Formulas used for non-right-angled triangles.",
          formulaWords:
            "Sine Rule: a ÷ sin(A) = b ÷ sin(B) = c ÷ sin(C); Cosine Rule: a² = b² + c² - 2bc cos(A)",
          formulaSymbols: "a / sin(A) = b / sin(B), a^2 = b^2 + c^2 - 2bc * cos(A)",
        },
        {
          term: "Bearing",
          definition:
            "A clockwise angle measured in **degrees from true North**, written as a **three-digit number** (e.g. 045°, 270°).",
          examinerNote: "Always write 3 figures (e.g. 065°, NOT 65°).",
        },
        {
          term: "Probability",
          definition:
            "A numerical measure of the likelihood that an event will occur, on a scale from 0 (impossible) to 1 (certain).",
          formulaWords:
            "P(Event) = (Number of favorable outcomes) ÷ (Total number of possible outcomes)",
          formulaSymbols: "P(A) = n(A) / n(S)",
        },
        {
          term: "Interquartile Range (IQR)",
          definition:
            "The range of the middle 50% of the data; a measure of statistical dispersion unaffected by extreme outliers.",
          formulaWords: "Interquartile Range = Upper Quartile (Q3) - Lower Quartile (Q1)",
          formulaSymbols: "IQR = Q3 - Q1",
        },
      ],
    },
  ],

  // ECONOMICS 0455
  "0455": [
    {
      topic: "Basic Economic Problem & Markets",
      definitions: [
        {
          term: "The Economic Problem",
          definition:
            "The problem of having **unlimited wants but finite/scarce economic resources** to satisfy them.",
        },
        {
          term: "Scarcity",
          definition:
            "A situation where **demand for a resource exceeds the available supply**, forcing economic agents to make choices.",
        },
        {
          term: "Opportunity Cost",
          definition: "The **next best alternative foregone** when making an economic choice.",
          examinerNote: "Always include 'next best alternative foregone'.",
        },
        {
          term: "Price Elasticity of Demand (PED)",
          definition:
            "A measure of the **responsiveness of quantity demanded of a good to a change in its price**.",
          formulaWords: "PED = Percentage Change in Quantity Demanded ÷ Percentage Change in Price",
          formulaSymbols: "PED = (% Delta Qd) / (% Delta P)",
          examinerNote: "If |PED| > 1, demand is elastic; if |PED| < 1, demand is inelastic.",
        },
        {
          term: "Price Elasticity of Supply (PES)",
          definition:
            "A measure of the **responsiveness of quantity supplied of a good to a change in its price**.",
          formulaWords: "PES = Percentage Change in Quantity Supplied ÷ Percentage Change in Price",
          formulaSymbols: "PES = (% Delta Qs) / (% Delta P)",
        },
        {
          term: "Market Failure",
          definition:
            "A situation where the **free market mechanism fails to allocate resources efficiently**, leading to a net loss of economic welfare (e.g. due to externalities, monopoly power, or public goods).",
        },
      ],
    },
    {
      topic: "Macroeconomics & International Trade",
      definitions: [
        {
          term: "Gross Domestic Product (GDP)",
          definition:
            "The **total market value of all finished goods and services produced within a country's borders** over a given period (usually one year).",
        },
        {
          term: "Inflation",
          definition:
            "A **sustained increase in the general price level** of goods and services over an extended period, measured by the Consumer Price Index (CPI).",
        },
        {
          term: "Monetary Policy",
          definition:
            "Decisions made by a central bank regarding the **money supply, interest rates, and exchange rates** to influence aggregate demand and control inflation.",
        },
        {
          term: "Fiscal Policy",
          definition:
            "Decisions by the government regarding **government spending and taxation** to influence the level of aggregate demand and economic activity.",
        },
      ],
    },
  ],

  // COMPUTER SCIENCE 0478
  "0478": [
    {
      topic: "Computer Systems, Hardware & Networking",
      definitions: [
        {
          term: "Central Processing Unit (CPU)",
          definition:
            "The primary hardware component that executes computer program instructions through the **Fetch-Decode-Execute (FDE) cycle**.",
        },
        {
          term: "Von Neumann Architecture",
          definition:
            "A computer design architecture where **both data and program instructions are stored together in the same shared memory space**.",
        },
        {
          term: "Lossless Compression",
          definition:
            "A data compression technique where the file size is reduced **without losing any original data**, allowing the original file to be reconstructed completely.",
        },
        {
          term: "Lossy Compression",
          definition:
            "A data compression technique where **unnecessary or redundant data is permanently removed** to achieve much smaller file sizes (e.g. JPEG, MP3).",
        },
        {
          term: "IP Address",
          definition:
            "A unique numerical address assigned to each device connected to a network to identify its location and enable packet routing (IPv4 or IPv6).",
        },
        {
          term: "MAC Address",
          definition:
            "A unique physical identifier permanently assigned to a device's Network Interface Card (NIC) at manufacture; formatted as hexadecimal pairs.",
        },
        {
          term: "Encryption",
          definition:
            "The process of converting readable plaintext into unreadable **ciphertext** using an algorithm and key, so only authorized recipients can decrypt it.",
        },
      ],
    },
  ],
};

/**
 * Ensures that a SubjectNotes object has an "Important Definitions & Key Terminology" chapter
 * as its final chapter. If already present, leaves it as is; otherwise creates one.
 */
export function ensureImportantDefinitionsChapter(subject: SubjectNotes): SubjectNotes {
  // Check if subject already has a dedicated definitions chapter
  const hasDefinitionsChapter = subject.chapters.some((ch) =>
    /definitions|key terminology/i.test(ch.title),
  );

  if (hasDefinitionsChapter) {
    return subject;
  }

  // Look for curated definitions matching the subject code or ID
  const curated = CAMBRIDGE_DEFINITIONS[subject.code] || CAMBRIDGE_DEFINITIONS[subject.id];

  let subheadings: SubHeading[] = [];

  if (curated && curated.length > 0) {
    subheadings = curated.map((group) => {
      const bullets = group.definitions.map((item) => {
        let b = `**${item.term}**: ${item.definition}`;
        if (item.formulaWords) {
          b += `\n\n• **Formula in words**: **${item.formulaWords}**`;
        }
        if (item.formulaSymbols) {
          b += `\n• **Formula in symbols**: **${item.formulaSymbols}**`;
        }
        if (item.examinerNote) {
          b += `\n• *Examiner note*: ${item.examinerNote}`;
        }
        return b;
      });

      return {
        title: group.topic,
        body: `Mandatory Cambridge ${subject.name} definitions for **${group.topic}**. In the exam, definition questions carry straightforward recall marks. Memorise the **bold key terms** and specific phrases to guarantee full marks.`,
        groups: [
          {
            subTitle: `${group.topic} — Key Syllabus Terms`,
            bullets,
          },
        ],
        examinerTips: [
          "State definitions using precise syllabus terminology. Do not substitute scientific or technical terms with informal everyday words.",
          "When defining a physical quantity or relationship, state both the word formula and units to show complete understanding.",
          "Check whether the command word is 'Define' or 'State'. 'Define' requires a formal, complete statement.",
        ],
        commonMistakes: [
          "Giving an example instead of a definition (e.g. stating 'osmosis is when plant roots take in water' instead of defining net movement of water molecules down water potential gradient).",
          "Forgetting the condition or qualifier (e.g. omitting 'provided limit of proportionality is not exceeded' for Hooke's Law, or 'waste products of metabolism' for excretion).",
        ],
        recap: group.definitions
          .slice(0, 4)
          .map(
            (d) =>
              `Define the term "${d.term}" according to the Cambridge syllabus standard. [2 marks]`,
          ),
      };
    });
  } else {
    // Dynamically synthesize a high-yield definitions chapter from existing chapters
    subheadings = subject.chapters.map((ch) => {
      // Find key points and recap questions to turn into definitions
      const keyBullets = ch.subheadings.flatMap((sh) =>
        sh.groups.flatMap((g) => g.bullets.slice(0, 2)),
      );

      const bullets = keyBullets.slice(0, 5).map((bullet) => {
        // Highlight terms if not already bolded
        if (!bullet.includes("**")) {
          const parts = bullet.split(/[:.—]/);
          if (parts.length > 1) {
            return `**${parts[0]?.trim()}**: ${parts.slice(1).join(":").trim()}`;
          }
        }
        return bullet;
      });

      return {
        title: `Chapter ${ch.number} Key Definitions — ${ch.title}`,
        body: `Core terms and Cambridge marking points for Chapter ${ch.number}: **${ch.title}**.`,
        groups: [
          {
            subTitle: `Essential Terminology (${ch.title})`,
            bullets:
              bullets.length > 0
                ? bullets
                : [
                    `**Core Concept**: Master the key terminology and formulas in ${ch.title} to secure full Cambridge marks.`,
                  ],
          },
        ],
        examinerTips: [
          "Always highlight the primary mechanism before describing secondary consequences in Cambridge papers.",
        ],
      };
    });
  }

  const defChapter: Chapter = {
    number: subject.chapters.length + 1,
    title: "Important Definitions & Key Terminology",
    intro: `This chapter brings together all mandatory Cambridge IGCSE **${subject.name}** (${subject.code}) definitions and key terms across all syllabus chapters. Cambridge examiners reward precise keywords — every definition here highlights the exact terms and phrases required to earn full marks. Use the **Convert to Flashcards** button to practice active recall.`,
    subheadings,
  };

  return {
    ...subject,
    chapters: [...subject.chapters, defChapter],
  };
}

/**
 * Converts a Chapter into a deck of ready-to-use Flashcards.
 */
export function convertChapterToFlashcards(
  chapter: Chapter,
  subjectName?: string,
): FlashcardItem[] {
  const cards: FlashcardItem[] = [];
  let idCount = 1;

  // 1. Convert subheadings and bullet points
  chapter.subheadings.forEach((sh, shIdx) => {
    // If subheading is definition-rich
    sh.groups.forEach((group) => {
      group.bullets.forEach((bullet) => {
        // Look for "**Term**: Definition" pattern
        const boldMatch = bullet.match(/\*\*([^*]+)\*\*[:\s]+([\s\S]+)/);
        if (boldMatch) {
          const term = boldMatch[1]?.trim();
          const rest = boldMatch[2]?.trim();
          if (term && rest && term.length < 60) {
            cards.push({
              id: `card-${chapter.number}-${idCount++}`,
              front: `What is the Cambridge definition / meaning of: ${term}?`,
              back: rest.replace(/\n•/g, "\n\n•"),
              category: "definition",
              chapterNumber: chapter.number,
              chapterTitle: chapter.title,
            });
            return;
          }
        }

        // Look for formula patterns
        if (
          bullet.includes("=") &&
          (bullet.toLowerCase().includes("formula") || bullet.toLowerCase().includes("equation"))
        ) {
          cards.push({
            id: `card-${chapter.number}-${idCount++}`,
            front: `State the formula and units for: ${sh.title}`,
            back: bullet,
            category: "formula",
            chapterNumber: chapter.number,
            chapterTitle: chapter.title,
          });
          return;
        }

        // General key concept
        if (bullet.length > 30 && bullet.length < 240 && idCount < 25) {
          cards.push({
            id: `card-${chapter.number}-${idCount++}`,
            front: `Explain the key principle of: ${sh.title}`,
            back: bullet,
            category: "concept",
            chapterNumber: chapter.number,
            chapterTitle: chapter.title,
          });
        }
      });
    });

    // 2. Convert recap questions
    if (sh.recap && sh.recap.length > 0) {
      sh.recap.forEach((q) => {
        cards.push({
          id: `card-${chapter.number}-${idCount++}`,
          front: q,
          back: `Cambridge Key Points: Use precise technical vocabulary. Identify the core definition, explain the mechanism step-by-step, and state a relevant example or formula.`,
          category: "exam_tip",
          chapterNumber: chapter.number,
          chapterTitle: chapter.title,
        });
      });
    }
  });

  // Fallback if chapter has few structured bullets
  if (cards.length === 0) {
    cards.push({
      id: `card-${chapter.number}-1`,
      front: `What is the main idea of Chapter ${chapter.number}: ${chapter.title}?`,
      back: chapter.intro,
      category: "concept",
      chapterNumber: chapter.number,
      chapterTitle: chapter.title,
    });
  }

  return cards;
}
