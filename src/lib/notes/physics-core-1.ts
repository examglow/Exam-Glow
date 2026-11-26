import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Physics (0625) Core Notes
 * Chapters 1–7: Physical Quantities, Motion, Mass & Density, Forces, Energy & Power, Pressure
 * Section: 1. Motion, forces and energy
 */
export const PHYSICS_CORE_PART1: Chapter[] = [
  {
    number: 1,
    title: "Physical Quantities & Measurement Techniques",
    section: "1. Motion, forces and energy",
    topic: "Units, Length, Volume & Time Measurement",
    intro:
      "All physical measurements require standard units and suitable measuring instruments. Core candidates learn how to measure lengths, volumes, and short time intervals accurately using rules, measuring cylinders, and stopwatches.",
    subheadings: [
      {
        title: "Measuring Length, Volume and Time",
        body:
          "**Standard SI Units in Physics:**\n" +
          "- **Length:** metre ($\\text{m}$)\n" +
          "- **Time:** second ($\\text{s}$)\n" +
          "- **Mass:** kilogram ($\\text{kg}$)\n\n" +
          "**Measuring Lengths:**\n" +
          "- **Ruler / Tape Measure:** Used for distances from $1\\text{ mm}$ up to several metres. Accuracy: $\\pm 1\\text{ mm}$.\n" +
          "- **Avoiding Parallax Error:** Always position your eye directly perpendicular (at a $90^\\circ$ angle) to the scale markings.\n" +
          "- **Measuring Small Dimensions:** To find the thickness of a single sheet of paper, measure the thickness of a stack of $100$ or $500$ sheets and divide the total thickness by the number of sheets.\n\n" +
          "**Measuring Volumes of Liquids and Regular/Irregular Solids:**\n" +
          "- **Measuring Cylinder:** Used for liquid volumes. Read the bottom of the curved meniscus at eye level.\n" +
          "- **Displacement Method for Irregular Solids:**\n" +
          "  1. Pour a measured volume of water $V_1$ into a measuring cylinder.\n" +
          "  2. Gently lower the irregular solid (e.g. a small rock) into the water using a thin thread so that it is completely submerged.\n" +
          "  3. Record the new water level $V_2$.\n" +
          "  4. Calculate the volume of the solid: $V_{\\text{solid}} = V_2 - V_1$.\n\n" +
          "**Measuring Time Intervals (Period of a Pendulum):**\n" +
          "- Human reaction time introduces significant error when timing a single swing of a pendulum.\n" +
          "- **Averaging Technique:** Use a stopwatch to measure the total time for $20$ complete oscillations ($T_{\\text{total}}$), then divide by $20$ to determine the period of one oscillation:\n" +
          "  $$\\text{Period } T = \\frac{T_{\\text{total}}}{20}$$",
        examinerTips: [
          "Always state that parallax error is avoided by looking perpendicularly (at 90 degrees) to the scale markings.",
          "To measure the thickness of a wire or paper, always describe measuring multiple items and dividing by the count.",
        ],
        commonMistakes: [
          "Reading the top edge of the water meniscus instead of the bottom.",
          "Timing only a single swing of a pendulum, which has a large percentage error due to reaction time.",
        ],
        recap: [
          "State the SI units for length, mass, and time.",
          "Describe how you would determine the volume of an irregularly shaped pebble using a measuring cylinder.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Motion & Graphical Analysis",
    section: "1. Motion, forces and energy",
    topic: "Speed, Velocity, Acceleration & Motion Graphs",
    intro:
      "Motion describes how an object's position changes over time. Candidates calculate speed and acceleration, interpret distance-time and speed-time graphs, and deduce acceleration and distance travelled.",
    subheadings: [
      {
        title: "Speed, Velocity and Acceleration",
        body:
          "**Speed vs Velocity:**\n" +
          "- **Speed:** Distance moved per unit time. A scalar quantity (has magnitude only):\n" +
          "  $$\\text{Speed } v = \\frac{\\text{Distance } s}{\\text{Time } t}$$\n" +
          "- **Velocity:** Speed in a given direction. A vector quantity (has both magnitude and direction).\n" +
          "- **Average Speed:** Total distance divided by total time:\n" +
          "  $$\\text{Average speed} = \\frac{\\text{Total distance travelled}}{\\text{Total time taken}}$$\n\n" +
          "**Acceleration:**\n" +
          "- Rate of change of velocity with time:\n" +
          "  $$\\text{Acceleration } a = \\frac{\\text{Change in velocity } \\Delta v}{\\text{Time taken } t} = \\frac{v - u}{t}$$\n" +
          "  where $u$ is initial velocity and $v$ is final velocity.\n" +
          "- Units: metres per second squared ($\\text{m/s}^2$).\n" +
          "- **Deceleration (retardation):** Negative acceleration (velocity is decreasing).",
        examinerTips: [
          "Always distinguish between speed and velocity: velocity specifies direction, speed does not.",
          "Ensure units are consistent before calculating: convert kilometres to metres (multiply by 1000) and hours to seconds (multiply by 3600).",
        ],
        commonMistakes: [
          "Writing speed units as m/s² instead of m/s.",
        ],
        recap: [
          "State the formula for average speed.",
          "A car accelerates uniformly from rest to 20 m/s in 5 s. Calculate its acceleration.",
        ],
      },
      {
        title: "Distance-Time and Speed-Time Graphs",
        body:
          "**1. Distance-Time Graphs:**\n" +
          "- **Gradient represents speed:** $\\text{Gradient} = \\frac{\\Delta s}{\\Delta t} = \\text{Speed}$.\n" +
          "- Flat horizontal line: Object is **at rest** (speed $= 0$).\n" +
          "- Straight sloping line: Object is moving at **constant speed**.\n" +
          "- Curved line getting steeper: Object is **accelerating**.\n\n" +
          "**2. Speed-Time Graphs:**\n" +
          "- **Gradient represents acceleration:** $\\text{Gradient} = \\frac{\\Delta v}{\\Delta t} = \\text{Acceleration}$.\n" +
          "- Horizontal line: Object is moving at **constant speed** (acceleration $= 0$).\n" +
          "- Sloping straight line upwards: Constant / uniform **acceleration**.\n" +
          "- Sloping straight line downwards: Constant / uniform **deceleration**.\n" +
          "- **Area under the speed-time graph represents distance travelled:**\n" +
          "  $$\\text{Distance travelled} = \\text{Area under speed-time graph}$$\n" +
          "  Calculate by splitting into rectangles ($\\text{base} \\times \\text{height}$) and triangles ($\\frac{1}{2} \\times \\text{base} \\times \\text{height}$).",
        examinerTips: [
          "In a speed-time graph, the area under the curve is ALWAYS distance. In a distance-time graph, the area has no physical meaning.",
        ],
        commonMistakes: [
          "Confusing distance-time graphs with speed-time graphs: a horizontal line on a distance-time graph means stationary, but on a speed-time graph it means constant speed!",
        ],
        recap: [
          "What does the gradient of a distance-time graph represent?",
          "How is the distance travelled determined from a speed-time graph?",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Mass, Weight & Density",
    section: "1. Motion, forces and energy",
    topic: "Gravitational Fields, Mass vs Weight & Density Determination",
    intro:
      "Mass measures the quantity of matter in an object, while weight is the gravitational force acting upon it. Density relates mass to the volume occupied.",
    subheadings: [
      {
        title: "Mass and Weight",
        body:
          "**Mass:**\n" +
          "- An intrinsic property of an object measuring the amount of matter it contains.\n" +
          "- Remains constant everywhere in the Universe.\n" +
          "- SI unit: kilogram ($\\text{kg}$). Measured using a balance.\n\n" +
          "**Weight:**\n" +
          "- The gravitational force exerted on an object by a gravitational field.\n" +
          "- Changes depending on the local gravitational field strength $g$.\n" +
          "- SI unit: newton ($\\text{N}$). Measured using a spring balance / forcemeter.\n\n" +
          "**Formula Linking Mass and Weight:**\n" +
          "$$\\mathbf{W = m g}$$\n" +
          "where $W$ is weight in newtons ($\\text{N}$), $m$ is mass in kilograms ($\\text{kg}$), and $g$ is the gravitational field strength in $\\text{N/kg}$ (on Earth, $g \\approx 9.8\\text{ N/kg}$ or $10\\text{ N/kg}$).",
        examinerTips: [
          "Mass is measured in kg; weight is a force measured in N. Never give weight in kilograms in a physics exam.",
          "State clearly: mass resists change in motion (inertia) and does not change when taken to the Moon.",
        ],
        commonMistakes: [
          "Saying an object has 'no mass' in space — it has no weight (weightless), but its mass remains unchanged.",
        ],
        recap: [
          "State the difference between mass and weight.",
          "An astronaut has a mass of 70 kg on Earth. What is their mass and weight on the Moon where g = 1.6 N/kg?",
        ],
      },
      {
        title: "Density & Experimental Measurement",
        body:
          "**Definition of Density:**\n" +
          "Density is the mass per unit volume of a substance:\n" +
          "$$\\mathbf{\\rho = \\frac{m}{V}}$$\n" +
          "- Symbol: $\\rho$ (Greek letter rho).\n" +
          "- SI unit: kilograms per cubic metre ($\\text{kg/m}^3$) or grams per cubic centimetre ($\\text{g/cm}^3$).\n" +
          "- Conversion: $1\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$. Water has a density of $1.0\\text{ g/cm}^3 = 1000\\text{ kg/m}^3$.\n\n" +
          "**Determining Density of a Regular Solid (e.g. rectangular block):**\n" +
          "1. Measure mass $m$ using an electronic top-pan balance.\n" +
          "2. Measure length, width, and height using a ruler and calculate volume: $V = l \\times w \\times h$.\n" +
          "3. Calculate density: $\\rho = m / V$.\n\n" +
          "**Determining Density of a Liquid:**\n" +
          "1. Place an empty measuring cylinder on a balance and record its mass $m_1$.\n" +
          "2. Pour a volume $V$ of the liquid into the cylinder and record volume.\n" +
          "3. Record the combined mass $m_2$.\n" +
          "4. Mass of liquid is $m = m_2 - m_1$.\n" +
          "5. Calculate density: $\\rho = (m_2 - m_1) / V$.",
        examinerTips: [
          "Always remember to subtract the mass of the empty measuring cylinder when finding the density of a liquid.",
        ],
        commonMistakes: [
          "Dividing volume by mass instead of mass by volume.",
        ],
        recap: [
          "State the formula for density and its SI unit.",
          "A block of metal has mass 540 g and volume 200 cm³. Calculate its density.",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Forces & Equilibrium",
    section: "1. Motion, forces and energy",
    topic: "Hooke's Law, Newton's Laws & Turning Effects",
    intro:
      "Forces change an object's speed, direction of motion, or shape. Core candidates study Hooke's law, balanced and unbalanced forces, the moment of a force, and conditions for static equilibrium.",
    subheadings: [
      {
        title: "Forces and Hooke's Law",
        body:
          "**What Forces Can Do:**\n" +
          "A force can change an object's:\n" +
          "1. **Speed** (accelerate or decelerate).\n" +
          "2. **Direction of motion** (turning).\n" +
          "3. **Shape or size** (stretching, compressing, twisting).\n\n" +
          "**Hooke's Law (Stretching of Springs):**\n" +
          "- **Extension ($x$ or $\\Delta l$):** $\\text{Extended length} - \\text{Original length}$.\n" +
          "- Hooke's law states that the extension of a spring is directly proportional to the applied load / force, provided the **limit of proportionality** is not exceeded:\n" +
          "  $$\\mathbf{F = k x}$$\n" +
          "  where $F$ is force in newtons ($\\text{N}$), $x$ is extension in metres ($\\text{m}$), and $k$ is the **spring constant** in $\\text{N/m}$.\n" +
          "- **Limit of Proportionality:** Beyond this point on a force-extension graph, the graph curves and extension is no longer proportional to load. The spring undergoes permanent deformation.",
        examinerTips: [
          "Remember that extension is the INCREASE in length: extension = (new length) - (original length). Do not use the total length!",
        ],
        commonMistakes: [
          "Using the total stretched length of the spring in $F = kx$ instead of the extension.",
        ],
        recap: [
          "State Hooke's law.",
          "A spring of original length 10 cm extends to 14 cm when a force of 6 N is hung from it. Calculate its spring constant.",
        ],
      },
      {
        title: "Balanced Forces, Resultant Force & Friction",
        body:
          "**Balanced vs Unbalanced Forces:**\n" +
          "- When forces acting on an object are **balanced** (resultant force $= 0$):\n" +
          "  - If at rest, the object **remains stationary**.\n" +
          "  - If moving, the object continues moving at **constant velocity** in a straight line (Newton's First Law).\n" +
          "- When forces are **unbalanced** (resultant force $F \\ne 0$):\n" +
          "  - The object accelerates in the direction of the resultant force (Newton's Second Law):\n" +
          "    $$\\mathbf{F = m a}$$\n" +
          "    where $F$ is the resultant force ($\\text{N}$), $m$ is mass ($\\text{kg}$), and $a$ is acceleration ($\\text{m/s}^2$).\n\n" +
          "**Friction and Air Resistance:**\n" +
          "- Friction is a force that opposes motion between two surfaces in contact.\n" +
          "- Air resistance (drag) opposes the motion of objects moving through air and increases with increasing speed.",
        examinerTips: [
          "If an object moves at CONSTANT speed in a straight line, the resultant force is ZERO. Do not invent a forward force to explain constant velocity.",
        ],
        commonMistakes: [
          "Believing a moving object must have a resultant forward force acting on it.",
        ],
        recap: [
          "What is the resultant force on an aircraft flying at a steady speed of 250 m/s in level flight?",
          "A resultant force of 50 N acts on a mass of 10 kg. Calculate its acceleration.",
        ],
      },
      {
        title: "Turning Effect of Forces & Equilibrium",
        body:
          "**Moment of a Force:**\n" +
          "The moment of a force is a measure of its turning effect about a pivot:\n" +
          "$$\\mathbf{\\text{Moment} = \\text{Force } \\times \\text{Perpendicular distance from pivot}}$$\n" +
          "- Formula: $\\text{Moment} = F \\times d$.\n" +
          "- SI unit: newton metre ($\\text{N m}$).\n\n" +
          "**The Principle of Moments:**\n" +
          "For an object in rotational equilibrium:\n" +
          "$$\\mathbf{\\text{Total Clockwise Moments} = \\text{Total Anticlockwise Moments}}$$\n\n" +
          "**Conditions for Complete Equilibrium:**\n" +
          "An object is in static equilibrium if:\n" +
          "1. **No resultant force:** The sum of upward forces equals the sum of downward forces (and left equals right).\n" +
          "2. **No resultant moment:** Total clockwise moments equal total anticlockwise moments about any pivot point.\n\n" +
          "**Centre of Gravity:**\n" +
          "- The point at which all the weight of an object can be considered to act.\n" +
          "- An object is more stable if it has a **low centre of gravity** and a **wide base**.",
        examinerTips: [
          "Always measure distance $d$ perpendicular to the line of action of the force from the pivot.",
          "State both conditions for equilibrium: no resultant force AND no resultant moment.",
        ],
        commonMistakes: [
          "Stating only that forces are balanced for equilibrium, omitting the condition for moments.",
        ],
        recap: [
          "Define the moment of a force.",
          "State the principle of moments.",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Energy, Work & Power",
    section: "1. Motion, forces and energy",
    topic: "Energy Forms, Conservation, Work Done & Power",
    intro:
      "Energy cannot be created or destroyed, only transferred from one store to another. Candidates calculate kinetic energy, gravitational potential energy, work done, and power.",
    subheadings: [
      {
        title: "Energy Stores and the Principle of Conservation of Energy",
        body:
          "**Energy Stores:**\n" +
          "- **Kinetic energy ($E_k$):** Energy stored in moving objects.\n" +
          "- **Gravitational potential energy ($E_p$):** Energy stored when an object is raised in a gravitational field.\n" +
          "- **Chemical energy:** Energy stored in chemical bonds of food, fuels, and batteries.\n" +
          "- **Elastic (strain) energy:** Energy stored in squashed or stretched objects.\n" +
          "- **Nuclear energy:** Energy stored inside atomic nuclei.\n" +
          "- **Thermal (internal) energy:** Energy associated with particle kinetic and potential energy.\n\n" +
          "**Principle of Conservation of Energy:**\n" +
          "- Energy cannot be created or destroyed; it can only be transferred from one store to another.\n" +
          "- Total energy before transfer $=$ Total energy after transfer.\n\n" +
          "**Energy Formulas:**\n" +
          "- **Kinetic Energy:** $E_k = \\frac{1}{2} m v^2$\n" +
          "- **Gravitational Potential Energy:** $\\Delta E_p = m g \\Delta h$\n" +
          "- For a freely falling object (neglecting air resistance): $\\text{Loss of } E_p = \\text{Gain in } E_k$, so $m g h = \\frac{1}{2} m v^2 \\implies v = \\sqrt{2gh}$.",
        examinerTips: [
          "Remember that in $\\frac{1}{2}mv^2$, only the velocity $v$ is squared, not the mass.",
          "State energy transfers using 'from ... store to ... store'.",
        ],
        commonMistakes: [
          "Thinking energy is 'used up' or lost — energy is dissipated as wasted thermal energy into the surroundings.",
        ],
        recap: [
          "State the principle of conservation of energy.",
          "Calculate the kinetic energy of a 1000 kg car travelling at 20 m/s.",
        ],
      },
      {
        title: "Work Done, Power and Efficiency",
        body:
          "**Work Done:**\n" +
          "- Work is done whenever a force moves an object through a distance in the direction of the force:\n" +
          "  $$\\mathbf{W = F d = \\Delta E}$$\n" +
          "- Work done is equal to energy transferred. Unit: joules ($\\text{J}$) or newton metres ($\\text{N m}$).\n\n" +
          "**Power:**\n" +
          "- Power is the rate of doing work or the rate of energy transfer:\n" +
          "  $$\\mathbf{P = \\frac{W}{t} = \\frac{\\Delta E}{t}}$$\n" +
          "- SI unit: watt ($\\text{W}$), where $1\\text{ W} = 1\\text{ J/s}$.\n\n" +
          "**Efficiency:**\n" +
          "$$\\text{Efficiency} = \\frac{\\text{Useful energy output}}{\\text{Total energy input}} \\times 100\\% = \\frac{\\text{Useful power output}}{\\text{Total power input}} \\times 100\\%$$",
        examinerTips: [
          "Efficiency is always less than 100% (or less than 1.0) for practical machines because some energy is always wasted as heat.",
        ],
        commonMistakes: [
          "Confusing power with energy: power is the RATE at which energy is used.",
        ],
        recap: [
          "Define power and state its SI unit.",
          "A motor lifts a 200 N load through a vertical height of 3 m in 6 s. Calculate the work done and power output.",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Energy Resources",
    section: "1. Motion, forces and energy",
    topic: "Renewable vs Non-Renewable Resources & Environmental Impact",
    intro:
      "Human society generates electricity from diverse energy resources. Candidates compare renewable and non-renewable energy sources, discussing reliability and environmental impacts.",
    subheadings: [
      {
        title: "Renewable vs Non-Renewable Energy Resources",
        body:
          "**Non-Renewable Resources (Finite, cannot be replenished at the rate consumed):**\n" +
          "- **Fossil Fuels (Coal, Oil, Natural Gas):** Burned to boil water, produce high-pressure steam, and turn turbines connected to generators.\n" +
          "  - *Advantages:* Reliable, high energy density, ready on demand.\n" +
          "  - *Disadvantages:* Releases carbon dioxide ($\\text{CO}_2$) causing global warming, and sulfur dioxide ($\\text{SO}_2$) causing acid rain.\n" +
          "- **Nuclear Fuels (Uranium, Plutonium):** Nuclear fission produces thermal energy to generate steam.\n" +
          "  - *Advantages:* No greenhouse gases during operation, enormous energy from small fuel mass.\n" +
          "  - *Disadvantages:* Produces radioactive waste with long half-lives, risk of catastrophic accidents.\n\n" +
          "**Renewable Resources (Replenished naturally and will not run out):**\n" +
          "- **Solar (Photovoltaic cells & Solar thermal panels):** Converts sunlight directly into electricity or heats domestic water. (Intermittent, depends on weather).\n" +
          "- **Wind Turbines:** Kinetic energy of wind drives blades connected to a generator. (Unreliable when wind is calm).\n" +
          "- **Hydroelectric:** GPE of water in an elevated reservoir converted into kinetic energy as water falls through turbines. (Reliable, fast startup, but requires flooding valleys).\n" +
          "- **Tidal & Wave:** Harnesses gravitational pull of Moon/Sun and surface wave motion.\n" +
          "- **Geothermal:** Heat from radioactive decay deep inside the Earth generates steam. (Reliable, but limited to volcanically active regions).\n" +
          "- **Biofuels:** Renewable organic matter (wood, ethanol from sugar cane) burned for energy. (Carbon neutral in theory, but competes with food crops).",
        examinerTips: [
          "State clearly that the Sun is the ultimate source of energy for all resources EXCEPT geothermal, nuclear, and tidal energy.",
        ],
        commonMistakes: [
          "Calling nuclear energy renewable — uranium fuel ore is finite and non-renewable.",
        ],
        recap: [
          "Distinguish between renewable and non-renewable energy resources.",
          "Name three energy resources that do not originate from solar radiation.",
        ],
      },
    ],
  },
  {
    number: 7,
    title: "Pressure",
    section: "1. Motion, forces and energy",
    topic: "Solid Pressure & Pressure in Liquids",
    intro:
      "Pressure measures the concentration of force over an area. Candidates calculate solid pressure, understand pressure in liquids, and explain everyday applications.",
    subheadings: [
      {
        title: "Pressure Under Solids & Everyday Applications",
        body:
          "**Definition of Pressure:**\n" +
          "Pressure is defined as the force per unit area acting perpendicularly on a surface:\n" +
          "$$\\mathbf{p = \\frac{F}{A}}$$\n" +
          "- $p$: Pressure in pascals ($\\text{Pa}$) or newtons per square metre ($\\text{N/m}^2$), where $1\\text{ Pa} = 1\\text{ N/m}^2$.\n" +
          "- $F$: Force in newtons ($\\text{N}$).\n" +
          "- $A$: Area in square metres ($\\text{m}^2$).\n\n" +
          "**Everyday Applications:**\n" +
          "1. **Increasing Pressure (Small Area):**\n" +
          "   - A sharp knife blade, nail point, or sewing needle has a tiny contact area, producing a huge pressure from a modest force to penetrate surfaces easily.\n" +
          "2. **Decreasing Pressure (Large Area):**\n" +
          "   - Snowshoes, skis, and wide caterpillar tracks on tractors/tanks have large surface areas, reducing pressure on the ground to prevent sinking into snow or mud.",
        examinerTips: [
          "When calculating pressure, convert area into m²: $1\\text{ m}^2 = 10{,}000\\text{ cm}^2$. If area is given in cm², divide by 10,000 to convert to m².",
        ],
        commonMistakes: [
          "Dividing area by 100 instead of 10,000 when converting from cm² to m².",
        ],
        recap: [
          "State the formula linking pressure, force, and area.",
          "Explain why caterpillar tracks are fitted to heavy bulldozers operating on soft soil.",
        ],
      },
      {
        title: "Pressure in Liquids & The Barometer",
        body:
          "**Properties of Liquid Pressure:**\n" +
          "- Liquid pressure acts **equally in all directions** at any given depth.\n" +
          "- Pressure **increases with depth** (due to the weight of liquid above).\n" +
          "- Pressure **increases with liquid density**.\n" +
          "- Pressure is independent of the shape or width of the container.\n\n" +
          "**Liquid Pressure Formula:**\n" +
          "$$\\mathbf{\\Delta p = \\rho g \\Delta h}$$\n" +
          "where $\\rho$ is density of liquid ($\\text{kg/m}^3$), $g$ is gravitational field strength ($\\approx 9.8\\text{ N/kg}$), and $\\Delta h$ is depth of liquid ($\\text{m}$).\n\n" +
          "**Atmospheric Pressure & Simple Mercury Barometer:**\n" +
          "- Standard atmospheric pressure at sea level is approximately $100\\text{ kPa} = 1.0 \\times 10^5\\text{ Pa}$.\n" +
          "- In a simple mercury barometer, atmospheric pressure supports a vertical column of mercury approximately $760\\text{ mm}$ ($76\\text{ cm}$) high in an inverted tube containing a vacuum at the top.",
        examinerTips: [
          "Remember that total pressure at depth $h$ in water is atmospheric pressure PLUS liquid pressure: $p_{\\text{total}} = p_0 + \\rho g h$.",
        ],
        commonMistakes: [
          "Thinking liquid pressure depends on the width or volume of the container — it depends strictly on vertical depth and liquid density.",
        ],
        recap: [
          "State two factors that affect the pressure exerted by a liquid.",
          "Calculate the pressure exerted by water at a depth of 5 m (density of water = 1000 kg/m³, g = 9.8 N/kg).",
        ],
      },
    ],
  },
];
