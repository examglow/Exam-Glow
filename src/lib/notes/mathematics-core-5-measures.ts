import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Core — Section 5: Lengths, Areas & Volumes
 * Chapters 33 to 36 (Categories matching official Core syllabus breakdown)
 */
export const MATHEMATICS_CORE_MEASURES: Chapter[] = [
  {
    number: 33,
    title: "Area & Perimeter",
    section: "5. Lengths, Areas & Volumes",
    topic: "Area & Perimeter",
    intro:
      "Perimeter and area of standard 2D polygons (rectangles, triangles, parallelograms, trapezia) and compound composite shapes.",
    subheadings: [
      {
        title: "Perimeter",
        body:
          "The **perimeter ($P$)** is the total boundary distance around the outside of a closed 2D shape.\n\n" +
          "- **Rectangle:** $P = 2l + 2w = 2(l + w)$\n" +
          "- **Square:** $P = 4s$\n" +
          "- **General Polygon:** Sum of all exterior side lengths.\n\n" +
          "**Units:** Measured in linear units ($\\text{mm}, \\text{cm}, \\text{m}, \\text{km}$).",
        examinerTips: [
          "Check for missing side lengths on compound L-shapes by subtracting or adding parallel sides before summing.",
        ],
        commonMistakes: [
          "Including internal dividing lines when finding the perimeter of a compound shape.",
        ],
        recap: [
          "An L-shaped room has horizontal edges of $8\\text{ m}$ and $3\\text{ m}$, and vertical edges of $6\\text{ m}$ and $2\\text{ m}$. Find its perimeter.",
        ],
      },
      {
        title: "Area",
        body:
          "The **area ($A$)** is the measure of the two-dimensional surface enclosed inside a shape.\n\n" +
          "**Standard Formulas:**\n" +
          "1. **Rectangle:**\n" +
          "   $$\\mathbf{A = \\text{length} \\times \\text{width} = l \\times w}$$\n" +
          "2. **Triangle:**\n" +
          "   $$\\mathbf{A = \\frac{1}{2} \\times \\text{base} \\times \\text{perpendicular height} = \\frac{1}{2}bh}$$\n" +
          "3. **Parallelogram:**\n" +
          "   $$\\mathbf{A = \\text{base} \\times \\text{perpendicular height} = bh}$$\n" +
          "4. **Trapezium:**\n" +
          "   $$\\mathbf{A = \\frac{1}{2}(a + b)h}$$\n" +
          "   where $a$ and $b$ are the parallel sides, and $h$ is the perpendicular height between them.\n\n" +
          "**Units:** Measured in squared units ($\\text{mm}^2, \\text{cm}^2, \\text{m}^2$).",
        examinerTips: [
          "Always use the **perpendicular** height, never the sloped/slant edge.",
        ],
        commonMistakes: [
          "Using the sloped side length instead of the vertical height for triangles and parallelograms.",
          "Forgetting to multiply by $\\frac{1}{2}$ for triangles or trapezia.",
        ],
        recap: [
          "Find the area of a trapezium with parallel sides $7\\text{ cm}$ and $11\\text{ cm}$ and perpendicular height $6\\text{ cm}$.",
        ],
      },
      {
        title: "Adding & Subtracting Areas",
        body:
          "To find the area of composite or shaded shapes:\n\n" +
          "- **Addition Method (Splitting):** Split the compound shape into simpler non-overlapping shapes (rectangles, triangles), calculate each area, and add them together:\n" +
          "  $$\\text{Total Area} = A_1 + A_2$$\n\n" +
          "- **Subtraction Method (Cut-outs / Shaded Regions):** Calculate the area of the entire outer shape, then subtract the area of the inner unshaded holes:\n" +
          "  $$\\mathbf{\\text{Shaded Area} = \\text{Outer Area} - \\text{Inner Unshaded Area}}$$",
        examinerTips: [
          "Draw dashed lines clearly on the diagram showing how you partitioned the shape.",
        ],
        commonMistakes: [
          "Double-counting overlapping areas.",
        ],
        recap: [
          "A rectangular metal sheet measuring $20\\text{ cm} \\times 15\\text{ cm}$ has a square hole of side $4\\text{ cm}$ cut out. Find the remaining area.",
        ],
      },
      {
        title: "Problem Solving with Areas",
        body:
          "Real-world application problems involving area:\n\n" +
          "- **Flooring / Tiling:**\n" +
          "  $$\\text{Number of tiles} = \\frac{\\text{Area of floor}}{\\text{Area of one tile}}$$\n" +
          "  Ensure both areas are in the exact same units (e.g. convert both to $\\text{cm}^2$).\n" +
          "- **Painting / Turf / Seeding:**\n" +
          "  Multiply total area by cost or coverage per square metre.\n" +
          "- **Working Backwards:** Given the area and one dimension, divide to find the missing length (e.g. $b = \\frac{2A}{h}$ for a triangle).",
        examinerTips: [
          "If calculating boxes of tiles or cans of paint, you must round UP to the next whole integer (you cannot buy part of a can).",
        ],
        commonMistakes: [
          "Rounding down when calculating cans of paint needed.",
        ],
        recap: [
          "A lawn has area $72\\text{ m}^2$. A box of grass seed covers $15\\text{ m}^2$. How many boxes must be purchased?",
        ],
      },
    ],
  },
  {
    number: 34,
    title: "Circles, Arcs & Sectors",
    section: "5. Lengths, Areas & Volumes",
    topic: "Circles, Arcs & Sectors",
    intro:
      "Calculations of circle circumference and area, finding arc lengths and sector areas using angle fractions $\\frac{\\theta}{360^\\circ}$.",
    subheadings: [
      {
        title: "Area & Circumference of Circles",
        body:
          "For any circle of radius $r$ and diameter $d = 2r$:\n\n" +
          "1. **Circumference ($C$):**\n" +
          "   $$\\mathbf{C = 2\\pi r = \\pi d}$$\n" +
          "2. **Area ($A$):**\n" +
          "   $$\\mathbf{A = \\pi r^2}$$\n\n" +
          "**Semicircles & Quarter Circles:**\n" +
          "- **Area of Semicircle:** $\\frac{1}{2}\\pi r^2$\n" +
          "- **Perimeter of Semicircle:** $\\frac{1}{2}(2\\pi r) + 2r = \\pi r + 2r = \\pi r + d$ (remember the straight diameter base!)\n" +
          "- **Area of Quarter Circle:** $\\frac{1}{4}\\pi r^2$\n" +
          "- **Perimeter of Quarter Circle:** $\\frac{1}{4}(2\\pi r) + 2r = \\frac{1}{2}\\pi r + 2r$",
        examinerTips: [
          "Always check whether the question provides the radius or the diameter.",
          "When finding the perimeter of a semicircle, don't forget to add the diameter diameter baseline to the curved arc.",
        ],
        commonMistakes: [
          "Squaring the diameter instead of the radius in $\\pi r^2$.",
          "Forgetting the straight baseline when calculating perimeter of semicircles.",
        ],
        recap: [
          "Calculate the circumference and area of a circle with radius $6\\text{ cm}$.",
          "Find the total perimeter of a semicircle of diameter $14\\text{ cm}$.",
        ],
      },
      {
        title: "Arc Lengths & Sector Areas",
        body:
          "A **sector** is a fraction of a full circle subtending an angle $\\theta$ at the centre:\n\n" +
          "$$\\text{Fraction of Circle} = \\frac{\\theta}{360^\\circ}$$\n\n" +
          "1. **Arc Length ($l$):**\n" +
          "   $$\\mathbf{l = \\frac{\\theta}{360^\\circ} \\times 2\\pi r = \\frac{\\theta}{360^\\circ} \\times \\pi d}$$\n\n" +
          "2. **Sector Area ($A$):**\n" +
          "   $$\\mathbf{A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2}$$\n\n" +
          "3. **Total Perimeter of a Sector:**\n" +
          "   $$\\mathbf{\\text{Perimeter} = \\text{Arc Length} + 2r = \\left(\\frac{\\theta}{360^\\circ} \\times 2\\pi r\\right) + 2r}$$",
        examinerTips: [
          "Perimeter of a sector consists of three boundaries: the curved arc plus TWO straight radii.",
        ],
        commonMistakes: [
          "Forgetting to add $2r$ when asked for the perimeter of a sector.",
        ],
        recap: [
          "A sector of radius $9\\text{ cm}$ has a central angle of $60^\\circ$. Calculate its arc length, sector area, and total perimeter.",
        ],
      },
    ],
  },
  {
    number: 35,
    title: "Volume & Surface Area",
    section: "5. Lengths, Areas & Volumes",
    topic: "Volume & Surface Area",
    intro:
      "Volume and total surface area of cubes, cuboids, prisms, cylinders, and composite 3D solids.",
    subheadings: [
      {
        title: "Volume",
        body:
          "The **volume ($V$)** is the amount of 3D space enclosed inside a solid shape.\n\n" +
          "**Standard Formulas:**\n" +
          "1. **Cube:** $V = s^3$\n" +
          "2. **Cuboid:** $V = l \\times w \\times h$\n" +
          "3. **General Prism:** Any solid with uniform cross-sectional area $A$:\n" +
          "   $$\\mathbf{V = \\text{Cross-sectional Area} \\times \\text{length} = A \\times l}$$\n" +
          "4. **Cylinder (Circular Prism):**\n" +
          "   $$\\mathbf{V = \\pi r^2 h}$$\n\n" +
          "**Capacity Conversion:** $1\\text{ cm}^3 = 1\\text{ ml}$, and $1000\\text{ cm}^3 = 1\\text{ litre}$.",
        examinerTips: [
          "For triangular prisms, cross-sectional area is $\\frac{1}{2}bh$, so $V = \\frac{1}{2}bhl$.",
        ],
        commonMistakes: [
          "Forgetting the $\\frac{1}{2}$ for triangular prisms.",
        ],
        recap: [
          "Calculate the volume of a cylinder with radius $4\\text{ cm}$ and height $10\\text{ cm}$.",
        ],
      },
      {
        title: "Problem Solving with Volumes",
        body:
          "Applications of volume in practical contexts:\n\n" +
          "- **Liquid Flow / Filling:** Rate of flow $\\times$ time = volume filled.\n" +
          "- **Melting & Recasting:** Total volume remains invariant when a solid is melted and reshaped.\n" +
          "- **Composite Solids:** Add or subtract constituent prism volumes.",
        examinerTips: [
          "Keep $\\pi$ in your calculator until the final answer to preserve maximum precision.",
        ],
        commonMistakes: [
          "Premature rounding of intermediate volume calculations.",
        ],
        recap: [
          "Water flows into a rectangular tank of dimensions $50\\text{ cm} \\times 40\\text{ cm} \\times 30\\text{ cm}$ at a rate of $2\\text{ litres/minute}$. How long does it take to fill completely?",
        ],
      },
      {
        title: "Surface Area",
        body:
          "The **total surface area (TSA)** is the sum of the areas of all exterior faces:\n\n" +
          "1. **Cube:** $\\text{TSA} = 6s^2$\n" +
          "2. **Cuboid:** $\\text{TSA} = 2(lw + lh + wh)$\n" +
          "3. **Cylinder (Closed):**\n" +
          "   - Two circular ends: $2 \\times \\pi r^2$\n" +
          "   - Curved surface area (unrolls to a rectangle): $2\\pi r h$\n" +
          "   $$\\mathbf{\\text{TSA} = 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)}$$\n" +
          "4. **Open Cylinder (Pipe):** Curved area only = $2\\pi rh$\n" +
          "5. **Cylinder Open at One End (Cup):** $\\pi r^2 + 2\\pi rh$",
        examinerTips: [
          "Read carefully whether a cylinder is 'closed at both ends', 'open at one end', or 'an open tube/pipe'.",
        ],
        commonMistakes: [
          "Adding two circular ends when the cylinder is open.",
        ],
        recap: [
          "Find the total surface area of a closed cylinder of radius $3\\text{ cm}$ and height $8\\text{ cm}$.",
        ],
      },
    ],
  },
  {
    number: 36,
    title: "Congruence & Similarity",
    section: "5. Lengths, Areas & Volumes",
    topic: "Congruence & Similarity",
    intro:
      "Understanding congruent shapes (identical size and shape), similar shapes (same shape, enlarged by a scale factor), and calculating missing lengths in similar geometric figures.",
    subheadings: [
      {
        title: "Congruence",
        body:
          "Two shapes are **congruent** if they are identical in every way: exactly the same size and shape (all corresponding sides are equal, and all corresponding angles are equal). They may be rotated or reflected.\n\n" +
          "**Four Triangle Congruence Conditions:**\n" +
          "1. **SSS:** Three pairs of corresponding sides are equal.\n" +
          "2. **SAS:** Two sides and the included angle between them are equal.\n" +
          "3. **ASA / AAS:** Two angles and any corresponding side are equal.\n" +
          "4. **RHS:** Right angle, Hypotenuse, and one other Side are equal.",
        examinerTips: [
          "When proving triangles congruent, state the 3 pairs of equal components with reasons and conclude with the 3-letter condition (e.g. 'Congruent by SAS').",
        ],
        commonMistakes: [
          "Using AAA to claim congruence (AAA proves similarity, not congruence).",
        ],
        recap: [
          "State the four conditions for triangle congruence.",
        ],
      },
      {
        title: "Similarity",
        body:
          "Two shapes are **similar** if they have the exact same shape but different sizes:\n\n" +
          "- Corresponding angles are **equal**.\n" +
          "- Corresponding side lengths are in **proportion** (related by a constant scale factor).\n" +
          "- One shape is an enlargement of the other.",
        examinerTips: [
          "Check angles first: if two angles of a triangle are equal to two angles of another, the third angles must also be equal, so the triangles are similar.",
        ],
        commonMistakes: [
          "Assuming shapes are similar just because they are the same type of polygon.",
        ],
        recap: [
          "Are all squares similar to each other? Explain why.",
        ],
      },
      {
        title: "Similar Lengths",
        body:
          "To find missing lengths in similar shapes:\n\n" +
          "1. **Find the Linear Scale Factor ($k$):**\n" +
          "   $$\\mathbf{k = \\frac{\\text{Length on Larger Shape}}{\\text{Corresponding Length on Smaller Shape}}}$$\n" +
          "2. **Calculate unknown lengths:**\n" +
          "   - $\\text{New larger length} = \\text{smaller length} \\times k$\n" +
          "   - $\\text{New smaller length} = \\frac{\\text{larger length}}{k}$",
        examinerTips: [
          "Draw the two similar triangles separately to avoid confusion when one triangle is nested inside another.",
        ],
        commonMistakes: [
          "Matching non-corresponding sides when shapes are oriented differently.",
        ],
        recap: [
          "Triangle $ABC$ is similar to triangle $DEF$. $AB = 6\\text{ cm}, DE = 15\\text{ cm}$. If $BC = 8\\text{ cm}$, find length $EF$.",
        ],
      },
    ],
  },
];
