import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Physics (0625) Extended Notes
 * Chapters 1–7: Mechanics, Vectors, Circular Motion, Momentum, Work, Energy & Pressure
 * Section: 1. Motion, forces and energy
 */
export const PHYSICS_EXTENDED_PART1: Chapter[] = [
  {
    number: 1,
    title: "Physical Quantities, Units & Vectors",
    section: "1. Motion, forces and energy",
    topic: "Scalars vs Vectors, Resultants & Precision Measurement",
    intro:
      "Physics quantities are classified as scalars or vectors. At Extended level, candidates add perpendicular vectors graphically and trigonometrically and master precision micrometer screw gauge techniques.",
    subheadings: [
      {
        title: "Scalars, Vectors and Vector Addition",
        body:
          "**Scalars vs Vectors:**\n" +
          "- **Scalar Quantities:** Have magnitude (size) only. Can be added using simple arithmetic.\n" +
          "  - *Examples:* Distance, speed, mass, time, temperature, energy, work, power, density, pressure.\n" +
          "- **Vector Quantities:** Have both **magnitude and direction**.\n" +
          "  - *Examples:* Displacement, velocity, acceleration, force, weight, momentum, electric field strength.\n\n" +
          "**Finding the Resultant of Two Perpendicular Vectors:**\n" +
          "When two vectors $\\mathbf{F}_1$ and $\\mathbf{F}_2$ act at right angles ($90^\\circ$):\n" +
          "1. **Magnitude of Resultant ($R$):** Use Pythagoras' Theorem:\n" +
          "   $$\\mathbf{R = \\sqrt{F_1^2 + F_2^2}}$$\n" +
          "2. **Direction (Angle $\\theta$):** Use trigonometry:\n" +
          "   $$\\mathbf{\\tan\\theta = \\frac{F_2}{F_1} \\implies \\theta = \\tan^{-1}\\left(\\frac{F_2}{F_1}\\right)}$$\n\n" +
          "*Worked Example:* A ship sails North at $8.0\\text{ m/s}$ across an ocean current flowing East at $6.0\\text{ m/s}$.\n" +
          "- Resultant speed: $v = \\sqrt{8.0^2 + 6.0^2} = \\sqrt{64 + 36} = \\sqrt{100} = \\mathbf{10.0\\text{ m/s}}$.\n" +
          "- Direction: $\\theta = \\tan^{-1}\\left(\\frac{6.0}{8.0}\\right) = \\tan^{-1}(0.75) \\approx 36.9^\\circ$ East of North.",
        examinerTips: [
          "When asked for a vector quantity (like resultant velocity or force), you MUST state both the MAGNITUDE (with units) and the DIRECTION (angle and reference direction). Stating magnitude alone loses the direction mark.",
        ],
        commonMistakes: [
          "Treating vectors as simple scalars and adding them directly ($8 + 6 = 14$ instead of using Pythagoras $\\sqrt{8^2 + 6^2} = 10$).",
        ],
        recap: [
          "Define a scalar quantity and a vector quantity, giving two examples of each.",
          "Find the magnitude and direction of the resultant force of a 12 N force acting East and a 5 N force acting North.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Motion, Acceleration & Terminal Velocity",
    section: "1. Motion, forces and energy",
    topic: "Non-Uniform Acceleration, Free Fall & Terminal Velocity",
    intro:
      "Motion under gravity involves varying air resistance. Extended candidates analyze non-linear motion graphs and explain the progression of falling objects from initial free fall to terminal velocity.",
    subheadings: [
      {
        title: "Acceleration, Free Fall & Motion Graphs",
        body:
          "**Equations of Uniform Acceleration:**\n" +
          "For constant acceleration $a$:\n" +
          "$$a = \\frac{v - u}{t} \\implies \\mathbf{v = u + a t}$$\n" +
          "$$\\mathbf{s = \\frac{(u + v)}{2} t = \\text{average speed} \\times t}$$\n\n" +
          "**Free Fall Near Earth's Surface:**\n" +
          "- In a vacuum, all objects fall with the **same constant acceleration** regardless of their mass:\n" +
          "  $$g \\approx 9.8\\text{ m/s}^2 \\quad (\\text{or } 10\\text{ m/s}^2)$$\n" +
          "- In air, falling objects experience an opposing upward drag force (air resistance) that increases as speed increases.\n\n" +
          "**Non-Uniform Acceleration on Graphs:**\n" +
          "- **Distance-Time Graph:** Instantaneous speed is the gradient of the **tangent** to the curve at that specific point in time.\n" +
          "- **Speed-Time Graph:** Instantaneous acceleration is the gradient of the tangent to the curve at that point.",
        examinerTips: [
          "To find speed on a curved distance-time graph: draw a straight tangent line at the exact time requested and calculate its gradient ($\\Delta s / \\Delta t$).",
        ],
        commonMistakes: [
          "Thinking heavier objects fall faster in a vacuum — all objects accelerate at $g = 9.8$ m/s² when air resistance is absent.",
        ],
        recap: [
          "What is the acceleration of free fall near Earth's surface?",
          "How is instantaneous acceleration determined from a non-linear speed-time graph?",
        ],
      },
      {
        title: "Terminal Velocity Progression",
        body:
          "When an object (e.g. a skydiver) falls through the atmosphere:\n" +
          "1. **At the moment of release ($t = 0$):**\n" +
          "   - Speed $v = 0$, so upward air resistance $= 0$.\n" +
          "   - The only force acting is downward weight ($W = mg$).\n" +
          "   - Resultant force $= W$, so initial acceleration $= g = 9.8\\text{ m/s}^2$.\n" +
          "2. **As speed increases ($v$ rises):**\n" +
          "   - Air resistance increases rapidly with speed.\n" +
          "   - Resultant downward force decreases ($F_{\\text{net}} = W - F_{\\text{drag}}$).\n" +
          "   - By Newton's second law ($a = F_{\\text{net}} / m$), **acceleration decreases** (gradient of speed-time curve decreases).\n" +
          "3. **At Terminal Velocity:**\n" +
          "   - Air resistance increases until **air resistance equals weight** ($F_{\\text{drag}} = W$).\n" +
          "   - Resultant force $= 0$.\n" +
          "   - Acceleration $= 0$.\n" +
          "   - The object continues to fall at a steady, maximum speed called **terminal velocity**.\n" +
          "4. **When Parachute Opens:**\n" +
          "   - Surface area increases dramatically $\\implies$ air resistance becomes much greater than weight.\n" +
          "   - Upward resultant force causes rapid deceleration until a new, much lower terminal velocity ($\approx 5\\text{ m/s}$) is reached for safe landing.",
        examinerTips: [
          "Three key stages for terminal velocity marks:\n1. Weight > air resistance $\\implies$ accelerates.\n2. Air resistance increases as speed increases $\\implies$ acceleration decreases.\n3. Air resistance = weight $\\implies$ resultant force = 0 $\\implies$ constant terminal velocity.",
        ],
        commonMistakes: [
          "Saying weight decreases as the object falls — weight ($mg$) remains strictly constant; it is AIR RESISTANCE that increases.",
        ],
        recap: [
          "Describe the forces acting on a skydiver falling at terminal velocity.",
          "Explain why opening a parachute causes a sudden deceleration.",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Mass, Weight & Density Determinations",
    section: "1. Motion, forces and energy",
    topic: "Inertia, Gravitational Fields & Comparative Densities",
    intro:
      "Mass resists acceleration (inertia). Weight depends on gravitational field strength. Density determines whether objects sink or float in fluid media.",
    subheadings: [
      {
        title: "Inertia, Gravitational Field Strength & Buoyancy",
        body:
          "**Inertia:**\n" +
          "- Mass is the measure of an object's resistance to any change in its velocity (inertia).\n" +
          "- A larger mass requires a larger force to achieve the same acceleration ($F = ma$).\n\n" +
          "**Gravitational Field Strength ($g$):**\n" +
          "- Force per unit mass exerted by a gravitational field: $\\mathbf{g = \\frac{W}{m}}$.\n" +
          "- On Earth, $g = 9.8\\text{ N/kg}$; on the Moon, $g = 1.6\\text{ N/kg}$.\n\n" +
          "**Floating and Sinking:**\n" +
          "- An object floats in a fluid if its average density is **less than the density of the fluid** ($\\rho_{\\text{object}} < \\rho_{\\text{fluid}}$).\n" +
          "- An object sinks if its density is **greater than the fluid density** ($\\rho_{\\text{object}} > \\rho_{\\text{fluid}}$).",
        examinerTips: [
          "Inertia is directly proportional to mass. A heavier object has greater inertia and is harder to start moving, stop, or turn.",
        ],
        commonMistakes: [
          "Confusing gravitational field strength in N/kg with acceleration of free fall in m/s² — they are numerically identical on Earth, but have different definitions and units.",
        ],
        recap: [
          "Define gravitational field strength and give its unit.",
          "Explain why a block of wood with density 700 kg/m³ floats in water of density 1000 kg/m³.",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Forces, Elasticity & Circular Motion",
    section: "1. Motion, forces and energy",
    topic: "Newton's Laws, Spring Constant & Centripetal Forces",
    intro:
      "Forces cause acceleration, deformation, and changes in direction. Extended candidates apply F = ma, calculate spring constants from F = kx graphs, and analyze circular motion where velocity changes at constant speed.",
    subheadings: [
      {
        title: "Hooke's Law & Force-Extension Graphs",
        body:
          "**Hooke's Law Formula:**\n" +
          "$$\\mathbf{F = k \\Delta x}$$\n" +
          "where $F$ is load ($\\text{N}$), $\\Delta x$ is extension ($\\text{m}$), and $k$ is the **spring constant** ($\\text{N/m}$).\n" +
          "- **Spring Constant ($k$):** Measures the stiffness of the spring. Stiffer springs have a higher $k$ value.\n" +
          "- On a **force-extension graph** ($F$ on y-axis, $x$ on x-axis), the gradient of the initial straight line through the origin is the **spring constant $k$**:\n" +
          "  $$\\text{Gradient} = \\frac{\\Delta F}{\\Delta x} = k$$\n" +
          "- **Elastic Limit:** Beyond this point, the material does not return to its original length when the load is removed (permanent plastic deformation).",
        examinerTips: [
          "On an extension-load graph with extension $x$ on the y-axis and load $F$ on the x-axis, the gradient is $1/k$!",
        ],
        commonMistakes: [
          "Confusing the limit of proportionality (where graph stops being a straight line) with the elastic limit (where permanent deformation occurs).",
        ],
        recap: [
          "How is the spring constant determined from a force against extension graph?",
          "A force of 15 N causes an extension of 0.05 m in a spring. Calculate its spring constant.",
        ],
      },
      {
        title: "Newton's Second Law & Circular Motion",
        body:
          "**Newton's Second Law:**\n" +
          "$$\\mathbf{F_{\\text{net}} = m a}$$\n" +
          "- Force and acceleration are both vectors and always act in the **exact same direction**.\n\n" +
          "**Circular Motion at Constant Speed:**\n" +
          "- When an object travels in a circle at constant speed:\n" +
          "  - Its speed is constant, but its **direction of motion is continuously changing**.\n" +
          "  - Because velocity is a vector, a change in direction means the object is **accelerating**.\n" +
          "  - According to Newton's First Law, an object can only accelerate if an unbalanced resultant force acts upon it.\n" +
          "  - This resultant force is the **centripetal force**.\n" +
          "  - Direction of centripetal force: acts **perpendicular to the velocity, directed towards the centre of the circle**.\n" +
          "- **Origins of Centripetal Force:**\n" +
          "  - Satellite orbiting Earth: Gravitational pull of Earth.\n" +
          "  - Car turning a corner: Friction between tyres and the road surface.\n" +
          "  - Whirling a bung on a string: Tension in the string.",
        examinerTips: [
          "State clearly for circular motion: speed is constant, but direction changes $\\implies$ velocity changes $\\implies$ the object is accelerating towards the centre of the circle.",
        ],
        commonMistakes: [
          "Claiming that an object in circular motion has zero acceleration because its speed is constant.",
        ],
        recap: [
          "Explain why an object moving in a circle at constant speed is accelerating.",
          "State the direction of the resultant force on a satellite in a circular orbit around the Earth.",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Momentum & Impulse",
    section: "1. Motion, forces and energy",
    topic: "Momentum Conservation, Impulse & Collisions",
    intro:
      "Momentum is a vector quantity conserved in all collisions and explosions. Candidates apply the principle of conservation of momentum and relate impulse to the rate of change of momentum.",
    subheadings: [
      {
        title: "Linear Momentum and Impulse",
        body:
          "**Definition of Momentum ($p$):**\n" +
          "$$\\mathbf{p = m v}$$\n" +
          "- Mass $m$ in $\\text{kg}$, velocity $v$ in $\\text{m/s}$.\n" +
          "- SI unit: kilogram metre per second ($\\mathbf{\\text{kg m/s}}$) or newton second ($\\mathbf{\\text{N s}}$).\n" +
          "- Momentum is a **vector**: direction must be accounted for using positive ($+$) and negative ($-$) signs.\n\n" +
          "**Impulse:**\n" +
          "Impulse is defined as the force multiplied by the time duration for which it acts:\n" +
          "$$\\mathbf{\\text{Impulse} = F \\Delta t = \\Delta p = m v - m u}$$\n" +
          "- Impulse equals the **change in momentum**.\n" +
          "- Force as rate of change of momentum (Newton's Second Law in original form):\n" +
          "  $$\\mathbf{F = \\frac{\\Delta p}{\\Delta t} = \\frac{m v - m u}{t}}$$\n\n" +
          "**Safety Features in Vehicles (Airbags, Crumple Zones, Seatbelts):**\n" +
          "- In a crash, the passenger's momentum must change from $mv$ to $0$ (fixed change in momentum $\\Delta p$).\n" +
          "- Crumple zones and airbags **increase the collision impact time $\\Delta t$**.\n" +
          "- Since $F = \\frac{\\Delta p}{\\Delta t}$, increasing $\\Delta t$ **reduces the impact force $F$** experienced by passengers, reducing severe injuries.",
        examinerTips: [
          "In car safety questions, always use the relationship $F = \\Delta p / \\Delta t$: state that crumple zones increase collision time $\\implies$ rate of change of momentum decreases $\\implies$ force on passengers decreases.",
        ],
        commonMistakes: [
          "Saying airbags decrease momentum — the change in momentum is fixed; airbags decrease the FORCE by increasing the TIME.",
        ],
        recap: [
          "Define momentum and state its SI unit.",
          "Explain in terms of momentum and impulse how seat belts reduce passenger injuries in a crash.",
        ],
      },
      {
        title: "Conservation of Linear Momentum",
        body:
          "**The Principle of Conservation of Momentum:**\n" +
          "In any closed system with no external resultant forces acting:\n" +
          "$$\\mathbf{\\text{Total momentum before collision} = \\text{Total momentum after collision}}$$\n" +
          "$$\\mathbf{m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2}$$\n\n" +
          "*Worked Example 1 (Inelastic Collision — objects stick together):*\n" +
          "A trolley of mass $2.0\\text{ kg}$ travelling at $4.0\\text{ m/s}$ collides with a stationary trolley of mass $3.0\\text{ kg}$. They couple and move together.\n" +
          "- Total momentum before: $p_{\\text{initial}} = (2.0 \\times 4.0) + (3.0 \\times 0) = 8.0\\text{ kg m/s}$.\n" +
          "- Total mass after: $M = 2.0 + 3.0 = 5.0\\text{ kg}$.\n" +
          "- By conservation of momentum: $5.0 \\times v = 8.0 \\implies v = \\frac{8.0}{5.0} = \\mathbf{1.6\\text{ m/s}}$.\n\n" +
          "*Worked Example 2 (Explosion / Recoil):*\n" +
          "A rifle of mass $4.0\\text{ kg}$ fires a bullet of mass $0.01\\text{ kg}$ at $400\\text{ m/s}$. Find the recoil velocity of the rifle.\n" +
          "- Initial momentum before firing $= 0$.\n" +
          "- Momentum after: $m_{\\text{bullet}} v_{\\text{bullet}} + m_{\\text{rifle}} v_{\\text{rifle}} = 0$.\n" +
          "- $(0.01 \\times 400) + 4.0 \\times v_{\\text{rifle}} = 0 \\implies 4.0 + 4.0 v_{\\text{rifle}} = 0 \\implies v_{\\text{rifle}} = -1.0\\text{ m/s}$.\n" +
          "- The rifle recoils backwards at $1.0\\text{ m/s}$.",
        examinerTips: [
          "Always assign one direction as positive (e.g. forward $= +$) and the opposite direction as negative (backward $= -$). If an object bounces back, its velocity is negative!",
        ],
        commonMistakes: [
          "Forgetting that velocity is a vector and adding momenta when objects travel in opposite directions.",
        ],
        recap: [
          "State the principle of conservation of momentum.",
          "A 60 kg skater pushes a 40 kg skater. If the 40 kg skater moves away at 3 m/s, what is the velocity of the 60 kg skater?",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Energy, Work & Power Calculations",
    section: "1. Motion, forces and energy",
    topic: "Quantitative Work, Kinetic & Potential Energy, Power & Efficiency",
    intro:
      "Energy transformations obey the conservation law. Extended candidates perform multi-step calculations using kinetic energy, gravitational potential energy, mechanical work, and electrical efficiency.",
    subheadings: [
      {
        title: "Energy Calculations & Conversions",
        body:
          "**Core Equations:**\n" +
          "- **Work Done:** $\\mathbf{W = F d = \\Delta E}$ (where $d$ is distance in direction of force)\n" +
          "- **Kinetic Energy:** $\\mathbf{E_k = \\frac{1}{2} m v^2}$\n" +
          "- **Gravitational Potential Energy:** $\\mathbf{\\Delta E_p = m g \\Delta h}$\n" +
          "- **Power:** $\\mathbf{P = \\frac{\\Delta E}{t} = \\frac{W}{t}}$\n" +
          "- **Efficiency:** $\\mathbf{\\text{Efficiency} = \\frac{\\text{Useful energy output}}{\\text{Total energy input}} \\times 100\\%}$\n\n" +
          "*Worked Example:* A roller coaster car of mass $500\\text{ kg}$ starts from rest at the top of a hill of height $30\\text{ m}$. Calculate its speed at the bottom (assume no friction, $g = 9.8\\text{ m/s}^2$).\n" +
          "- $\\Delta E_p = m g h = 500 \\times 9.8 \\times 30 = 147{,}000\\text{ J}$.\n" +
          "- Conservation of energy: $\\text{Gain in } E_k = \\text{Loss in } E_p = 147{,}000\\text{ J}$.\n" +
          "- $\\frac{1}{2} m v^2 = 147{,}000 \\implies \\frac{1}{2}(500) v^2 = 147{,}000 \\implies 250 v^2 = 147{,}000$.\n" +
          "- $v^2 = 588 \\implies v = \\sqrt{588} \\approx \\mathbf{24.2\\text{ m/s}}$.",
        examinerTips: [
          "Notice that mass cancels out in free-fall conversions: $mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{2gh}$. Speed does not depend on mass!",
        ],
        commonMistakes: [
          "Forgetting to take the square root of $v^2$ at the end of kinetic energy calculations.",
        ],
        recap: [
          "State the formula for kinetic energy and gravitational potential energy.",
          "An electric motor with an efficiency of 75% receives 800 J of electrical energy. Calculate the useful work done.",
        ],
      },
    ],
  },
  {
    number: 7,
    title: "Pressure & Liquid Column Derivations",
    section: "1. Motion, forces and energy",
    topic: "Fluid Pressure Derivation, Manometers & Atmospheric Barometers",
    intro:
      "Pressure in fluids increases with depth and density. Extended candidates derive the liquid pressure formula Δp = ρgΔh, solve manometer difference equations, and analyze barometers.",
    subheadings: [
      {
        title: "Derivation of Δp = ρgΔh and Fluid Pressure Calculations",
        body:
          "**Derivation of the Liquid Pressure Formula:**\n" +
          "1. Consider a column of liquid of cross-sectional area $A$ and height $h$.\n" +
          "2. The volume of the column is $V = A \\times h$.\n" +
          "3. The mass of the liquid is $m = \\rho \\times V = \\rho A h$.\n" +
          "4. The weight of the liquid column is $W = m g = \\rho A h g$.\n" +
          "5. Pressure at base is force divided by area:\n" +
          "   $$p = \\frac{F}{A} = \\frac{W}{A} = \\frac{\\rho A h g}{A} = \\mathbf{\\rho g h}$$\n" +
          "- Change in pressure between two depths: $\\mathbf{\\Delta p = \\rho g \\Delta h}$.\n\n" +
          "**U-Tube Manometers:**\n" +
          "- Measures pressure differences between a gas supply and atmospheric pressure.\n" +
          "- When connected to a gas supply, the liquid levels in the two arms differ by height $\\Delta h$.\n" +
          "- **Pressure difference:** $\\Delta p = \\rho g \\Delta h$.\n" +
          "- **Total gas pressure:** $p_{\\text{gas}} = p_{\\text{atm}} + \\rho g \\Delta h$.",
        examinerTips: [
          "Be ready to derive $p = \\rho g h$ step by step from first principles: volume $\\to$ mass $\\to$ weight $\\to$ pressure.",
        ],
        commonMistakes: [
          "Confusing the manometer height difference with absolute height above ground.",
        ],
        recap: [
          "Derive the formula $\\Delta p = \\rho g \\Delta h$ for pressure in a liquid.",
          "A diver is at a depth of 20 m in seawater (density = 1030 kg/m³, g = 9.8 N/kg). Calculate the water pressure on the diver.",
        ],
      },
    ],
  },
];
