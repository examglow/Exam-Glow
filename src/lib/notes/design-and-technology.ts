import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Design & Technology (0445) 2028–2030 Syllabus Notes
 * Covers Product Design, Resistant Materials, Systems/Mechanisms, CAD/CAM, and Exam Techniques.
 * Strictly text-only with zero figures.
 */
export const DESIGN_AND_TECHNOLOGY: SubjectNotes = {
  id: "design-and-technology",
  name: "Design & Technology",
  code: "0445",
  color: "bg-orange-500",
  chapters: [
    {
      number: 1,
      title: "The Design Process and Specification (Core)",
      section: "Common Core",
      topic: "Design Brief, ACCESS FM, Research Methods, Idea Generation, and Evaluation",
      intro:
        "Design and Technology is fundamentally an iterative problem-solving discipline. Every designed artifact begins with identifying an authentic human need. This chapter covers the complete design pipeline from initial observation and client brief through specification, conceptual modeling, and final user evaluation.",
      subheadings: [
        {
          title: "Identifying User Needs and Writing Design Specifications",
          body:
            "**1. The Design Brief:**\n" +
            "- An open statement identifying the problem, target client, and context without pre-judging or constraining the final solution (e.g. *'Design an adjustable, portable lighting solution for students in compact dormitories'* rather than *'Design a wooden desk lamp'*).\n\n" +
            "**2. Research Methodologies:**\n" +
            "- **Primary Research:** Questionnaires, user interviews, anthropometric measurement taking, and product disassembly testing.\n" +
            "- **Secondary Research:** British/ISO safety standards, material properties handbooks, and competitor market analysis.\n\n" +
            "**3. ACCESS FM Framework:**\n" +
            "- **Aesthetics:** Visual styling, texture, color, and finish.\n" +
            "- **Cost:** Target retail price, material budget, and manufacturing cost.\n" +
            "- **Customer:** Ergonomic target demographic, lifestyle, and physical capabilities.\n" +
            "- **Environment:** Recyclability, carbon footprint, sustainability of raw materials.\n" +
            "- **Size:** Exact dimensional constraints, anthropometric 5th–95th percentile ranges.\n" +
            "- **Safety:** Non-toxic finishes, avoidance of sharp burrs, electrical insulation.\n" +
            "- **Function:** Operational performance and durability in service.\n" +
            "- **Materials:** Working properties required (tensile strength, hardness, water resistance).",
          examinerTips: [
            "Specifications must be measurable (e.g. write 'must weigh under 1.5 kg' instead of 'must be lightweight').",
            "Differentiate between essential 'must' criteria and desirable 'should' features."
          ],
          commonMistakes: [
            "Writing a design brief that specifies the material or solution before research has occurred.",
            "Vague specification points like 'must look good' that cannot be objectively tested."
          ],
          recap: [
            "A design brief defines the problem without dictating the solution.",
            "ACCESS FM ensures comprehensive, measurable specifications.",
            "Combine primary user research with secondary safety standards."
          ]
        },
        {
          title: "Idea Generation, 2D/3D Modeling, and Evaluation",
          body:
            "**1. Divergent Thinking Strategies:**\n" +
            "- SCAMPER (Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse), morphological analysis matrices, and rapid thumbnail sketch iterations.\n\n" +
            "**2. Prototyping and Modeling:**\n" +
            "- **Cardboard & Toile Mock-ups:** Rapid spatial validation of scale, proportion, and moving parts at minimal cost.\n" +
            "- **Breadboard / Blue Foam Models:** Assessing tactile comfort, weight distribution, and grip ergonomics.\n\n" +
            "**3. Iterative Evaluation:**\n" +
            "- Testing prototypes against each specific ACCESS FM criterion with real end-users to guide developmental revisions.",
          examinerTips: [
            "Annotate concept sketches with manufacturing feasibility comments, pointing out potential parting lines or fixings.",
            "Show clearly why rejected concepts failed to meet key specification points."
          ],
          commonMistakes: [
            "Jumping straight to a final idea without documenting rejected concept alternatives.",
            "Omitting end-user feedback from prototype evaluations."
          ],
          recap: [
            "Use SCAMPER to generate diverse initial concepts.",
            "Cardboard and foam mock-ups test scale and ergonomics rapidly.",
            "Evaluate iterative prototypes systematically against specification targets."
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Resistant Materials: Woods, Metals, and Polymers",
      section: "Resistant Materials Focus",
      topic: "Physical/Mechanical Properties, Hardwoods, Softwoods, Ferrous/Non-Ferrous, and Polymers",
      intro:
        "Selecting the correct material is vital to product success. Designers must balance mechanical properties (tensile strength, ductility, hardness, toughness) against cost, environmental sustainability, aesthetic appeal, and manufacturing viability.",
      subheadings: [
        {
          title: "Material Classification and Mechanical Properties",
          body:
            "**1. Core Mechanical Properties:**\n" +
            "- **Tensile Strength:** Resistance to stretching or pulling forces.\n" +
            "- **Compressive Strength:** Resistance to crushing or pushing forces.\n" +
            "- **Toughness:** Ability to absorb sudden impacts without shattering (opposite of brittleness).\n" +
            "- **Hardness:** Resistance to surface scratching, indentation, and abrasion.\n" +
            "- **Ductility:** Ability to be drawn into long thin wires without snapping.\n" +
            "- **Malleability:** Ability to be hammered, rolled, or stamped into shape without cracking.\n\n" +
            "**2. Timber Classifications:**\n" +
            "- **Hardwoods (Deciduous, broad leaves, slow-growing):** Oak (tough, durable, acidic), Mahogany (rich aesthetic, furniture), Beech (close grain, food-safe toys), Balsa (ultra-low density modeling).\n" +
            "- **Softwoods (Coniferous, evergreen needles, fast-growing):** Scots Pine (cheap, knotty, architectural framing), Spruce (lightweight acoustic resonance).\n" +
            "- **Manufactured Boards:** MDF (uniform fibers, smooth routing, moisture vulnerable), Plywood (cross-laminated veneers, equal strength in all directions).",
          examinerTips: [
            "Never explain 'hard' as 'difficult to break'; hardness is resistance to surface indentation.",
            "Explain why plywood is structurally superior to solid timber for wide cabinet panels (cross-graining eliminates warping)."
          ],
          commonMistakes: [
            "Assuming all hardwoods are harder than all softwoods (Balsa is botanically a hardwood).",
            "Confusing toughness with hardness."
          ],
          recap: [
            "Hardness resists scratching; toughness absorbs impact without fracture.",
            "Hardwoods are slow-growing and dense; softwoods are fast-growing conifers.",
            "Manufactured boards provide dimensional stability without grain defects."
          ]
        },
        {
          title: "Metals and Polymers (Plastics)",
          body:
            "**1. Metal Classifications:**\n" +
            "- **Ferrous (Contain iron, magnetic, rust easily):** Mild steel (0.15–0.3% carbon, ductile, general fabrication), High carbon steel (0.8–1.4% carbon, hard, cutting tools), Cast iron (brittle, compressive strength, engine blocks).\n" +
            "- **Non-Ferrous (No iron, non-magnetic, corrosion-resistant):** Aluminum (low density, excellent strength-to-weight, anodizable), Copper (ductile, superior electrical/thermal conductivity), Zinc (galvanizing coatings).\n" +
            "- **Alloys:** Brass (65% copper + 35% zinc, low friction), Bronze (copper + tin), Duralumin (aerospace).\n\n" +
            "**2. Polymer Classifications:**\n" +
            "- **Thermoplastics (Linear polymer chains, melt and re-form repeatedly upon heating):** Acrylic (PMMA - rigid, transparent, scratches), Polypropylene (PP - fatigue resistant, living hinges), HIPS (vacuum forming, light), HDPE (chemical bottles).\n" +
            "- **Thermosetting Plastics (Cross-linked polymer chains, permanently set by heat, char instead of melting):** Epoxy resin (adhesives), Melamine formaldehyde (heat-resistant laminate countertops), Urea formaldehyde (electrical switchgear insulation).",
          examinerTips: [
            "In questions asking why polypropylene is chosen for a school chair, cite its flexural fatigue resistance and ease of injection molding.",
            "Thermosets cannot be recycled by melting due to irreversible covalent cross-links."
          ],
          commonMistakes: [
            "Claiming that metals don't corrode; all metals oxidize, but only iron-based ferrous metals 'rust'.",
            "Confusing thermoplastics with thermosetting polymers."
          ],
          recap: [
            "Ferrous metals contain iron and rust; non-ferrous resist corrosion.",
            "Thermoplastics melt and can be reshaped; thermosets decompose with heat.",
            "Polypropylene's fatigue resistance enables molded living hinges."
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Tools, Fabrication, and Manufacturing Processes",
      section: "Resistant Materials Focus",
      topic: "Hand Tools, Machine Processing, Joining Techniques, and Industrial Production",
      intro:
        "Transforming raw stock into functional components demands mastery of cutting, wasting, forming, joining, and surface finishing across woods, metals, and plastics. Understanding industrial scale (batch, mass, continuous) is essential for commercial design.",
      subheadings: [
        {
          title: "Wasting, Forming, and Machining Techniques",
          body:
            "**1. Material Removal (Wasting):**\n" +
            "- Wood hand tools: Tenon saw (straight accurate joints), Coping saw (curved profiles), Chisel (bevel-edge cutting).\n" +
            "- Metal hand tools: Hacksaw, junior hacksaw, files (bastard, second-cut, smooth).\n" +
            "- Machine tools: Center lathe (turning cylindrical metal rods, facing off, parting), Pillar drill, Woodturning lathe.\n\n" +
            "**2. Industrial Polymer Processing:**\n" +
            "- **Injection Molding:** Molten polymer injected under high pressure into split steel tool; rapid mass production of complex shells (Lego bricks, electronics casings); high initial tooling cost.\n" +
            "- **Vacuum Forming:** Heated thermoplastic sheet drawn over female/male mold via suction; requires draft angles and vent holes (yoghurt pots, blister packs).\n" +
            "- **Blow Molding:** Heated parison tube inflated with compressed air inside hollow cavity (plastic drink bottles).",
          examinerTips: [
            "Always mention 'draft angles' (2°–3°) when designing vacuum forming molds to allow easy part ejection.",
            "Name the exact tool (e.g. 'tenon saw', not just 'a saw')."
          ],
          commonMistakes: [
            "Suggesting injection molding for one-off bespoke student prototypes due to million-dollar tooling costs.",
            "Leaving undercuts on vacuum forming patterns that trap the mold inside the plastic."
          ],
          recap: [
            "Injection molding excels in mass production; vacuum forming in thin hollow shapes.",
            "Patterns require draft angles to permit part release.",
            "Match specific sawing and turning tools to the workpiece geometry."
          ]
        },
        {
          title: "Joining, Fastening, and Surface Finishing",
          body:
            "**1. Wood Joinery:**\n" +
            "- Permanent joints: Mortise and tenon (exceptional structural frame strength), Dovetail (tensile drawer corner strength), Dowel joint (efficient manufactured board joinery).\n\n" +
            "**2. Metal Joining:**\n" +
            "- Thermal: Welding (melting parent metals together + filler rod), Brazening (brass filler at 800°C), Soft soldering (tin/lead at 250°C for electronics).\n" +
            "- Mechanical: Pop rivets, nut-and-bolt, self-tapping screws.\n\n" +
            "**3. Surface Finishes:**\n" +
            "- Wood: Sanding sealer, polyurethane varnish, Danish oil.\n" +
            "- Metal: Primer + paint, dip coating (fluidized PVC bed), powder coating (electrostatically charged powder cured in oven), anodizing (aluminum oxide dye layer).",
          examinerTips: [
            "Explain that powder coating provides a thicker, more scratch-resistant finish on steel than spray paint.",
            "Distinguish between temporary knock-down fasteners (screws, bolts) and permanent joints (welding, glue)."
          ],
          commonMistakes: [
            "Writing that soldering melts the parent metal; only the filler alloy melts in soldering and brazing.",
            "Failing to degrease metals before applying primer paint."
          ],
          recap: [
            "Mortise and tenon gives strong frame structures; dovetails resist pulling forces.",
            "Welding fuses parent metals; soldering and brazing melt filler wire only.",
            "Finishes protect against moisture, UV degradation, and corrosion."
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Systems, Mechanisms, and Electronics",
      section: "Systems & Control Focus",
      topic: "Levers, Linkages, Pulleys, Gears, Cams, Electrical Circuits, and Sensors",
      intro:
        "Mechanical and electronic systems convert, transmit, and control motion and energy to perform useful work. Designers must analyze mechanical advantage, velocity ratios, gear trains, electronic sensor inputs, and automated logic outputs.",
      subheadings: [
        {
          title: "Mechanisms: Levers, Linkages, Pulleys, and Gear Trains",
          body:
            "**1. Lever Classes:**\n" +
            "- **Class 1 (Fulcrum in middle):** Crowbar, scissors, seesaw. Mechanical advantage (MA) > 1 or < 1.\n" +
            "- **Class 2 (Load in middle):** Wheelbarrow, nutcracker. Always MA > 1 (multiplies effort force).\n" +
            "- **Class 3 (Effort in middle):** Tweezers, fishing rod, human forearm. Always MA < 1 (multiplies speed and distance).\n\n" +
            "**2. Motion Conversion:**\n" +
            "- Linear (one direction), Reciprocating (back and forth), Rotary (continuous circle), Oscillating (curved arc back and forth).\n" +
            "- **Cams & Followers:** Pear, eccentric, or snail cam converting rotary to reciprocating vertical motion.\n" +
            "- **Rack and Pinion:** Rotary pinion gear drives linear toothed rack (steering systems, drill presses).\n\n" +
            "**3. Gear Calculations:**\n" +
            "- **Velocity Ratio (VR) = Number of Teeth on Driven Gear / Number of Teeth on Driver Gear**.\n" +
            "- Larger driven gear = reduced speed but multiplied torque.",
          examinerTips: [
            "Memorize the FLE mnemonic for levers: 1-Fulcrum in center, 2-Load in center, 3-Effort in center.",
            "Show clear formula calculations for gear ratios: Output Speed = Input Speed / Gear Ratio."
          ],
          commonMistakes: [
            "Confusing oscillating motion (like a pendulum) with reciprocating motion (like a piston).",
            "Multiplying gear teeth instead of dividing when calculating speed reduction."
          ],
          recap: [
            "Levers multiply force (Class 2) or speed (Class 3).",
            "Cams convert rotary motion into specialized reciprocating motion.",
            "Gear ratios trade rotational speed against torque."
          ]
        },
        {
          title: "Electronic Systems, Sensors, and Circuit Control",
          body:
            "**1. Systems Model:**\n" +
            "- Input (Sensor / Switch) -> Process (Microcontroller / Logic Gates / Amplification) -> Output (Transducer: LED, Buzzer, Motor, Relay).\n\n" +
            "**2. Key Electronic Components:**\n" +
            "- **LDR (Light Dependent Resistor):** Resistance drops in bright light (used in automatic dusk-to-dawn lighting).\n" +
            "- **Thermistor (NTC):** Resistance drops as temperature rises (temperature alarm circuits).\n" +
            "- **Potential Divider:** Two series resistors dividing voltage to provide variable reference inputs to transistors or microcontrollers.\n" +
            "- **BJT Transistor:** Acts as a solid-state electronic switch triggered when base-emitter voltage reaches ~0.7V.\n" +
            "- **Relay:** Electromechanical switch allowing a small low-voltage DC circuit to safely control high-voltage mains AC machinery.",
          examinerTips: [
            "Always include a protective current-limiting series resistor with LEDs to prevent burnout.",
            "Explain the role of a flyback diode placed across a relay coil to absorb reverse electromotive spikes."
          ],
          commonMistakes: [
            "Claiming LDR resistance rises in the light; standard NTC LDR resistance drops sharply in light.",
            "Connecting polarized electrolytic capacitors backwards in circuit schematics."
          ],
          recap: [
            "Electronic systems flow: Input -> Process -> Output.",
            "LDR and Thermistor resistance decreases as light/temperature increases.",
            "Transistors act as automatic electronic switches at 0.7V base threshold."
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Graphic Products, CAD/CAM, and Technical Drawing",
      section: "Graphic Products Focus",
      topic: "Orthographic Projection, Isometric, Perspective, CAD Modeling, and CAM Output",
      intro:
        "Designers communicate technical intent through standardized graphic conventions. This chapter covers orthographic multi-view drawings, 3D projection, dimensioning standards, packaging nets, and computer-integrated manufacturing.",
      subheadings: [
        {
          title: "Orthographic, Isometric, and Perspective Drawing",
          body:
            "**1. Standardized Drawing Conventions:**\n" +
            "- **Orthographic Projection (3rd Angle):** Plan view directly above Front Elevation, with End Elevation aligned to the side. Uses first/third angle projection symbols.\n" +
            "- **Dimensioning Standards:** Thin continuous dimension lines, distinct arrowheads, dimensions placed centrally above horizontal lines.\n" +
            "- **Isometric Drawing:** 30-degree grid axes; true scale along axes without foreshortening; visualizes 3D volume clearly.\n" +
            "- **Two-Point Perspective:** Vanishing points on horizon line; realistic foreshortening for client presentations.\n\n" +
            "**2. Packaging Nets and Card Engineering:**\n" +
            "- Solid lines for cut edges; dashed lines for fold/score creases; glue tabs with 45-degree chamfers.",
          examinerTips: [
            "Draw projection symbols accurately: circle with target cone in Third Angle alignment.",
            "In 2-point perspective sketches, ensure all receding horizontal lines converge at the correct vanishing point."
          ],
          commonMistakes: [
            "Mixing 1st and 3rd angle projection layouts (putting Plan underneath in 3rd angle).",
            "Leaving out glue tabs when drafting development nets for carton packaging."
          ],
          recap: [
            "3rd angle orthographic aligns Front, Plan, and End elevations strictly.",
            "Isometric draws receding horizontal axes at 30 degrees.",
            "Packaging nets use solid cut lines and dashed fold scores."
          ]
        },
        {
          title: "CAD/CAM and Rapid Prototyping Integration",
          body:
            "**1. Computer-Aided Design (CAD):**\n" +
            "- Parametric 3D solid modeling (SolidWorks, Fusion 360, Onshape).\n" +
            "- *Advantages:* Instant dimensional edits, finite element stress analysis (FEA), direct file export to CAM machines, virtual rendering.\n\n" +
            "**2. Computer-Aided Manufacture (CAM):**\n" +
            "- **Laser Cutting:** 2D vector path cutting and raster engraving on acrylic/wood/card; zero tool wear; highly precise kerf.\n" +
            "- **CNC Milling & Routing:** Subtractive 3-axis/5-axis spinning cutters removing material from metal/wood billets.\n" +
            "- **3D Printing (Additive Fused Deposition Modeling - FDM):** Extruding molten PLA/ABS layer by layer; minimal waste; ideal for internal hollow lattices and organic geometries impossible via subtractive machining.",
          examinerTips: [
            "Distinguish between additive manufacturing (3D printing) and subtractive manufacturing (CNC milling/laser cutting).",
            "Highlight why CAM reduces human labor errors and maximizes repeatable batch tolerance."
          ],
          commonMistakes: [
            "Claiming 3D printing is faster than injection molding for 100,000 units (it is far too slow for mass production).",
            "Forgetting to mention the kerf width when calculating tight press-fit finger joints on laser cutters."
          ],
          recap: [
            "CAD provides parametric solid modeling and stress testing.",
            "CAM translates vector coordinates into automated cutting paths.",
            "3D printing is additive; CNC machining is subtractive."
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Ergonomics, Sustainability, and Examination Strategy",
      section: "Design in Society",
      topic: "Anthropometrics, 5th–95th Percentile, Circular Economy, Life Cycle Assessment, and Exam Skills",
      intro:
        "Great design harmonizes user physical comfort with environmental responsibility. This capstone chapter covers anthropometric percentile sizing, life cycle analysis, cradle-to-cradle sustainability, and systematic tactics for Paper 1 and Component 2.",
      subheadings: [
        {
          title: "Anthropometrics and Ergonomic Design",
          body:
            "**1. Ergonomics vs. Anthropometrics:**\n" +
            "- **Anthropometrics:** The study of human body measurements (e.g. hand breadth, eye height, reach envelope, popliteal height).\n" +
            "- **Ergonomics:** Designing products, systems, and environments to fit human physical, physiological, and cognitive capabilities comfortably.\n\n" +
            "**2. The Percentile Distribution:**\n" +
            "- **5th Percentile:** Only 5% of the population is smaller/shorter.\n" +
            "- **50th Percentile:** Exact statistical average/median.\n" +
            "- **95th Percentile:** Only 5% of the population is larger/taller.\n" +
            "- **Standard Design Rule (5th–95th Range):** Designing to accommodate 90% of the target market.\n" +
            "- *Examples:* Doorway clearances design for 95th percentile height; car seat adjustability accommodates 5th percentile reach to 95th percentile leg length.",
          examinerTips: [
            "Explain that designing for the 'average' (50th percentile) fails because almost nobody is average in all body dimensions.",
            "State whether you are designing for minimum reach (5th percentile) or maximum clearance (95th percentile)."
          ],
          commonMistakes: [
            "Saying products are designed for 'the 100th percentile' (the 100th percentile is an unattainable theoretical limit).",
            "Confusing popliteal height (floor to underside of knee) with seated eye height."
          ],
          recap: [
            "Anthropometrics measures human bodies; ergonomics designs for human fit.",
            "Accommodate the 5th to 95th percentile to serve 90% of the population.",
            "Clearances design for the 95th percentile; reach limits design for the 5th."
          ]
        },
        {
          title: "Sustainability (6Rs, LCA) and Exam Mastery",
          body:
            "**1. The 6Rs of Sustainability:**\n" +
            "- **Rethink:** Is the product truly necessary? Can a service replace it?\n" +
            "- **Refuse:** Reject unsustainable materials or non-recyclable excessive packaging.\n" +
            "- **Reduce:** Minimize material thickness, part counts, and operational energy consumption.\n" +
            "- **Reuse:** Extend product life through secondary uses or modular upgrades.\n" +
            "- **Repair:** Design for disassembly using standard fasteners so broken components can be replaced.\n" +
            "- **Recycle:** Recover raw material pellets from end-of-life products.\n\n" +
            "**2. Life Cycle Assessment (LCA):**\n" +
            "- Extraction of raw materials -> Manufacture -> Distribution -> Use/Maintenance -> End-of-life disposal.\n\n" +
            "**3. Examination Tactics (Paper 1 & Coursework):**\n" +
            "- Annotate exam design sketches with three critical layers: Material, Manufacturing Method, and Functional Feature.",
          examinerTips: [
            "On all Paper 1 sketch questions, annotate: 1. Material choice with physical justification; 2. Exact construction/joint; 3. User interaction.",
            "Use cradle-to-cradle principles to explain circular economy closed-loop loops."
          ],
          commonMistakes: [
            "Just writing 'plastic' or 'wood' on an exam sketch instead of 'ABS' or 'Beech'.",
            "Omitting fastening details on design proposals."
          ],
          recap: [
            "Apply the 6Rs: Rethink, Refuse, Reduce, Reuse, Repair, Recycle.",
            "Life cycle assessment measures environmental impact across 5 distinct stages.",
            "Annotate sketches with material justification, fabrication method, and function."
          ]
        }
      ]
    }
  ]
};
