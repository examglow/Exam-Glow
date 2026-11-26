import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 5: Lengths, Areas & Volumes
 * Includes all Core content + Extended-only: Similar Areas & Volumes
 */
export const MATHEMATICS_EXTENDED_MEASURES: Chapter[] = [
  {
    number: 34,
    title: "Area & Perimeter",
    section: "5. Lengths, Areas & Volumes",
    topic: "Area & Perimeter",
    intro:
      "Area and perimeter formulas apply to all standard 2D shapes. This chapter covers all shapes tested at Extended level, including composite shapes.",
    subheadings: [
      {
        title: "Perimeter & Area of Standard Shapes",
        body:
          "**Perimeter** = total length around the outside of a shape.\n\n" +
          "**Area formulas:**\n\n" +
          "| Shape | Area Formula |\n" +
          "|-------|-------------|\n" +
          "| Rectangle | $A = l \\times w$ |\n" +
          "| Triangle | $A = \\frac{1}{2} b h$ |\n" +
          "| Parallelogram | $A = b \\times h$ |\n" +
          "| Trapezium | $A = \\frac{1}{2}(a + b)h$ |\n" +
          "| Circle | $A = \\pi r^2$ |\n" +
          "| Sector | $A = \\frac{\\theta}{360} \\times \\pi r^2$ |\n\n" +
          "Where $h$ is the **perpendicular** height, $a$ and $b$ are parallel sides, $\\theta$ is the sector angle.",
        examinerTips: [
          "Use $h$ = perpendicular height, NOT the slant height, in area formulas.",
          "Leave $\\pi$ in answers unless asked to calculate a numerical value.",
        ],
        commonMistakes: [
          "Using the slant height instead of the perpendicular height in triangle and parallelogram area formulas.",
          "Forgetting to halve the base × height product for a triangle.",
        ],
        recap: [
          "Find the area and perimeter of: (a) a trapezium with parallel sides $5$ cm and $9$ cm, height $4$ cm (b) a circle with diameter $14$ cm (c) a triangle with base $6$ cm and perpendicular height $8$ cm.",
        ],
      },
      {
        title: "Composite Shapes",
        body:
          "**Composite shapes** are formed by combining or subtracting standard shapes.\n\n" +
          "**Method:**\n" +
          "1. Break the shape into recognisable parts (rectangles, triangles, semicircles, etc.).\n" +
          "2. Calculate each area separately.\n" +
          "3. Add (or subtract if a region is removed) to find the total area.\n\n" +
          "**Example:** A rectangle $12 \\times 8$ cm with a semicircle removed from one end (diameter $8$ cm).\n" +
          "Rectangle area: $12 \\times 8 = 96$ cm²\n" +
          "Semicircle area: $\\frac{1}{2} \\pi (4)^2 = 8\\pi$ cm²\n" +
          "Total area: $(96 - 8\\pi)$ cm² $\\approx 70.9$ cm²",
        examinerTips: [
          "Draw a diagram and label all given measurements before calculating.",
          "For perimeter of composite shapes, only include the outer boundary — do not add internal lines.",
        ],
        commonMistakes: [
          "Adding the diameter as part of the perimeter when a semicircle is attached to a rectangle (the diameter is internal, not on the boundary).",
        ],
        recap: [
          "A shape consists of a rectangle $10 \\times 6$ cm with a right-angled triangle on one end (base $6$ cm, height $4$ cm). Find the total area and perimeter.",
        ],
      },
    ],
  },
  {
    number: 35,
    title: "Circles, Arcs & Sectors",
    section: "5. Lengths, Areas & Volumes",
    topic: "Circles, Arcs & Sectors",
    intro:
      "Full fluency with circular measure — arcs, sectors, and segments — is required at Extended level.",
    subheadings: [
      {
        title: "Arc Length & Sector Area",
        body:
          "For a circle of radius $r$ and sector angle $\\theta$ (in degrees):\n\n" +
          "$$\\text{Arc length} = \\frac{\\theta}{360} \\times 2\\pi r$$\n\n" +
          "$$\\text{Sector area} = \\frac{\\theta}{360} \\times \\pi r^2$$\n\n" +
          "**Segment area** = Sector area − Triangle area\n" +
          "$= \\frac{\\theta}{360} \\times \\pi r^2 - \\frac{1}{2}r^2 \\sin\\theta$\n\n" +
          "**Example:** Radius $10$ cm, angle $120°$.\n" +
          "Arc length $= \\frac{120}{360} \\times 2\\pi(10) = \\frac{20\\pi}{3}$ cm\n" +
          "Sector area $= \\frac{120}{360} \\times \\pi(10)^2 = \\frac{100\\pi}{3}$ cm²",
        examinerTips: [
          "Leave answers in terms of $\\pi$ unless a numerical value is requested.",
          "The perimeter of a sector = arc length + 2 × radius (don't forget the two straight sides).",
        ],
        commonMistakes: [
          "Forgetting the two radii when finding the perimeter of a sector.",
          "Computing the circumference ($2\\pi r$) instead of the arc length for a fraction of a circle.",
        ],
        recap: [
          "A sector has radius $8$ cm and angle $135°$. Find: (a) arc length (b) sector area (c) perimeter of the sector.",
        ],
      },
    ],
  },
  {
    number: 36,
    title: "Volume & Surface Area",
    section: "5. Lengths, Areas & Volumes",
    topic: "Volume & Surface Area",
    intro:
      "Volume and surface area calculations extend to prisms, cylinders, pyramids, cones, and spheres at Extended level.",
    subheadings: [
      {
        title: "Volume & Surface Area of 3D Shapes",
        body:
          "**Volume formulas:**\n\n" +
          "| Shape | Volume |\n" +
          "|-------|--------|\n" +
          "| Cuboid | $V = l \\times w \\times h$ |\n" +
          "| Prism | $V = \\text{cross-section area} \\times l$ |\n" +
          "| Cylinder | $V = \\pi r^2 h$ |\n" +
          "| Pyramid | $V = \\frac{1}{3} \\times \\text{base area} \\times h$ |\n" +
          "| Cone | $V = \\frac{1}{3} \\pi r^2 h$ |\n" +
          "| Sphere | $V = \\frac{4}{3} \\pi r^3$ |\n\n" +
          "**Surface area formulas:**\n\n" +
          "| Shape | Surface Area |\n" +
          "|-------|-------------|\n" +
          "| Cuboid | $2(lw + lh + wh)$ |\n" +
          "| Cylinder | $2\\pi r h + 2\\pi r^2$ |\n" +
          "| Cone | $\\pi r l + \\pi r^2$ (where $l$ is slant height) |\n" +
          "| Sphere | $4\\pi r^2$ |",
        examinerTips: [
          "Slant height $l$ of a cone: use $l = \\sqrt{r^2 + h^2}$ (Pythagoras).",
          "For a prism, the cross-section is the face that runs the length of the prism — it could be any polygon.",
        ],
        commonMistakes: [
          "Using the vertical height $h$ instead of slant height $l$ in the cone surface area formula.",
          "Forgetting to add the base(s) when finding total surface area of a cylinder or cone.",
        ],
        recap: [
          "Find the volume and total surface area of: (a) a cylinder, $r = 5$ cm, $h = 12$ cm (b) a cone, $r = 6$ cm, $h = 8$ cm (c) a sphere, $r = 7$ cm.",
        ],
      },
    ],
  },
  {
    number: 37,
    title: "Congruence & Similarity",
    section: "5. Lengths, Areas & Volumes",
    topic: "Congruence & Similarity",
    intro:
      "Congruent shapes are identical in size and shape. Similar shapes have the same proportions but may differ in size. The Extended course extends similarity to areas and volumes.",
    subheadings: [
      {
        title: "Congruence",
        body:
          "Two shapes are **congruent** if they are identical in size and shape (one may be reflected or rotated).\n\n" +
          "**Conditions for congruent triangles (4 conditions):**\n\n" +
          "| Condition | Meaning |\n" +
          "|-----------|----------|\n" +
          "| SSS | Three sides equal |\n" +
          "| SAS | Two sides and the included angle equal |\n" +
          "| ASA (or AAS) | Two angles and a corresponding side equal |\n" +
          "| RHS | Right angle, hypotenuse, and one other side equal |\n\n" +
          "**Note:** AAA is NOT a congruency condition — it only proves similarity.",
        examinerTips: [
          "In a congruence proof, state the condition at the end: 'Therefore triangles are congruent (SAS)'.",
          "The 'included angle' in SAS must be between the two equal sides.",
        ],
        commonMistakes: [
          "Using SSA as a congruency condition — this is NOT valid (there are two possible triangles).",
          "Claiming triangles are congruent because all angles are equal (that's AAA, only similarity).",
        ],
        recap: [
          "Identify the congruency condition: (a) triangles with sides $5, 7, 9$ cm each (b) triangles with two sides $4, 6$ and included angle $55°$ each (c) right-angled triangles with hypotenuse $13$ and one leg $5$.",
        ],
      },
      {
        title: "Similarity",
        body:
          "Two shapes are **similar** if they have the same angles (all corresponding angles are equal) and their corresponding sides are in a constant ratio (the **scale factor**, $k$).\n\n" +
          "If the scale factor (length) is $k$:\n" +
          "- **Length scale factor:** $k$\n" +
          "- **Area scale factor:** $k^2$\n" +
          "- **Volume scale factor:** $k^3$\n\n" +
          "**Example:** Two similar cylinders have radii $3$ cm and $7.5$ cm.\n" +
          "Length SF = $\\frac{7.5}{3} = 2.5$\n" +
          "Area SF = $2.5^2 = 6.25$ (curved surface area, base area)\n" +
          "Volume SF = $2.5^3 = 15.625$",
        examinerTips: [
          "Always establish the linear scale factor first, then square/cube for area/volume.",
          "If areas are given, find the length SF by square-rooting.",
        ],
        commonMistakes: [
          "Squaring the scale factor for volumes instead of cubing.",
          "Applying the area or volume scale factor to lengths.",
        ],
        recap: [
          "Two similar cones have heights $6$ cm and $10$ cm. The smaller has volume $216\\pi$ cm³. Find the volume of the larger.",
          "Two similar shapes have areas $25$ cm² and $100$ cm². If the smaller has perimeter $20$ cm, find the perimeter of the larger.",
        ],
      },
      {
        title: "Similar Areas & Volumes",
        body:
          "When two 3D shapes are similar with **linear scale factor** $k$:\n\n" +
          "$$\\frac{A_2}{A_1} = k^2 \\qquad \\frac{V_2}{V_1} = k^3$$\n\n" +
          "**Finding $k$ from areas:** $k = \\sqrt{\\frac{A_2}{A_1}}$\n\n" +
          "**Finding $k$ from volumes:** $k = \\sqrt[3]{\\frac{V_2}{V_1}}$\n\n" +
          "**Example:** Two similar pyramids. The smaller has surface area $36$ cm² and volume $24$ cm³. The larger has surface area $100$ cm².\n\n" +
          "Area SF = $\\frac{100}{36} = \\frac{25}{9}$, so length SF = $\\sqrt{\\frac{25}{9}} = \\frac{5}{3}$.\n\n" +
          "Volume SF = $\\left(\\frac{5}{3}\\right)^3 = \\frac{125}{27}$.\n\n" +
          "Larger pyramid volume = $24 \\times \\frac{125}{27} = \\frac{3000}{27} = 111.1$ cm³.",
        examinerTips: [
          "If the question involves converting between area and length scale factors: take the square root.",
          "If the question involves converting between volume and length scale factors: take the cube root.",
        ],
        commonMistakes: [
          "Using the area ratio directly as the volume ratio.",
          "Forgetting to cube (or square) after finding the linear scale factor.",
        ],
        recap: [
          "Two similar cuboids have volumes $64$ cm³ and $216$ cm³. If the smaller has total surface area $96$ cm², find the surface area of the larger.",
          "Two similar bottles have heights $12$ cm and $20$ cm. The smaller holds $450$ ml. How much does the larger hold?",
        ],
      },
    ],
  },
];
