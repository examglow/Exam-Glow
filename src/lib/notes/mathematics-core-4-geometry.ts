import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Core — Section 4: Geometry
 * Chapters 28 to 32 (Categories matching official Core syllabus breakdown)
 */
export const MATHEMATICS_CORE_GEOMETRY: Chapter[] = [
  {
    number: 28,
    title: "Symmetry & Shapes",
    section: "4. Geometry",
    topic: "Symmetry & Shapes",
    intro:
      "Lines of symmetry, order of rotational symmetry, polygon classifications, circle nomenclature, properties of 3D solids, and nets.",
    subheadings: [
      {
        title: "Introduction to Lines & Angles",
        body:
          "Fundamental geometric definitions:\n\n" +
          "- **Point:** A precise location in space with no dimension.\n" +
          "- **Line Segment:** A straight path between two points with measurable length.\n" +
          "- **Parallel Lines ($AB \\parallel CD$):** Lines in the same plane that never meet; indicated by arrows.\n" +
          "- **Perpendicular Lines ($AB \\perp CD$):** Lines that intersect at a right angle ($90^\\circ$).\n" +
          "- **Angle Classifications:**\n" +
          "  - **Acute:** $0^\\circ < \\theta < 90^\\circ$\n" +
          "  - **Right angle:** $\\theta = 90^\\circ$\n" +
          "  - **Obtuse:** $90^\\circ < \\theta < 180^\\circ$\n" +
          "  - **Straight line:** $\\theta = 180^\\circ$\n" +
          "  - **Reflex:** $180^\\circ < \\theta < 360^\\circ$\n" +
          "  - **Complete turn:** $\\theta = 360^\\circ$",
        examinerTips: [
          "Use a protractor accurately: read the scale starting from $0^\\circ$ on the line.",
        ],
        commonMistakes: [
          "Confusing obtuse (between $90^\\circ$ and $180^\\circ$) with reflex (between $180^\\circ$ and $360^\\circ$).",
        ],
        recap: [
          "Classify angles of $78^\\circ, 135^\\circ,$ and $240^\\circ$.",
        ],
      },
      {
        title: "Rotational Symmetry",
        body:
          "The **order of rotational symmetry** is the number of times a shape fits exactly onto its original outline during one complete rotation of $360^\\circ$ about its centre.\n\n" +
          "- **Order 1:** The shape only fits onto itself after a full $360^\\circ$ rotation (i.e. has no true rotational symmetry).\n" +
          "- **Order 2:** Fits twice ($180^\\circ$ and $360^\\circ$) — e.g. rectangle, parallelogram, rhombus.\n" +
          "- **Order 3:** Fits 3 times ($120^\\circ, 240^\\circ, 360^\\circ$) — e.g. equilateral triangle.\n" +
          "- **Order 4:** Fits 4 times ($90^\\circ, 180^\\circ, 270^\\circ, 360^\\circ$) — e.g. square.\n" +
          "- **Order $n$:** A regular polygon with $n$ sides has rotational symmetry of order $n$.",
        examinerTips: [
          "Order of rotational symmetry is always an integer $\\ge 1$; never write 'order 0'.",
        ],
        commonMistakes: [
          "Writing 'order 0' for shapes with no rotational symmetry (correct is order 1).",
        ],
        recap: [
          "State the order of rotational symmetry of a regular hexagon.",
          "State the order of rotational symmetry of a parallelogram.",
        ],
      },
      {
        title: "Lines of Symmetry",
        body:
          "A **line of symmetry (reflection symmetry)** divides a 2D shape into two identical halves that are exact mirror reflections of each other.\n\n" +
          "**Standard 2D Shapes:**\n" +
          "- **Equilateral triangle:** 3 lines of symmetry, rotational order 3\n" +
          "- **Isosceles triangle:** 1 line of symmetry, rotational order 1\n" +
          "- **Scalene triangle:** 0 lines of symmetry, rotational order 1\n" +
          "- **Square:** 4 lines of symmetry, rotational order 4\n" +
          "- **Rectangle:** 2 lines of symmetry, rotational order 2\n" +
          "- **Rhombus:** 2 lines of symmetry (along diagonals), rotational order 2\n" +
          "- **Parallelogram:** 0 lines of symmetry, rotational order 2\n" +
          "- **Kite:** 1 line of symmetry, rotational order 1\n" +
          "- **Isosceles trapezium:** 1 line of symmetry, rotational order 1\n" +
          "- **Circle:** Infinitely many lines of symmetry, infinite rotational order",
        examinerTips: [
          "Remember that a general parallelogram has NO lines of symmetry (you cannot fold it in half to match).",
        ],
        commonMistakes: [
          "Drawing diagonal lines of symmetry on a rectangle (a rectangle only has 2 lines of symmetry connecting opposite midpoints).",
        ],
        recap: [
          "How many lines of symmetry does a regular pentagon have?",
        ],
      },
      {
        title: "Properties of Polygons",
        body:
          "A **polygon** is a closed 2D plane shape bounded by straight line segments.\n\n" +
          "- **Regular Polygon:** All sides are equal in length, and all interior angles are equal.\n" +
          "- **Irregular Polygon:** Sides and/or angles are not all equal.\n\n" +
          "**Polygon Names by Number of Sides ($n$):**\n" +
          "- $n = 3$: Triangle\n" +
          "- $n = 4$: Quadrilateral\n" +
          "- $n = 5$: Pentagon\n" +
          "- $n = 6$: Hexagon\n" +
          "- $n = 7$: Heptagon\n" +
          "- $n = 8$: Octagon\n" +
          "- $n = 9$: Nonagon\n" +
          "- $n = 10$: Decagon",
        examinerTips: [
          "Remember that regular polygons with $n$ sides have exactly $n$ lines of symmetry and rotational symmetry of order $n$.",
        ],
        commonMistakes: [
          "Mixing up hexagon (6 sides) and heptagon (7 sides).",
        ],
        recap: [
          "Name an 8-sided polygon and state how many lines of symmetry it has if regular.",
        ],
      },
      {
        title: "Properties of Circles",
        body:
          "Key circle parts and terminology:\n\n" +
          "- **Circumference:** The perimeter / boundary distance around the circle ($C = 2\\pi r = \\pi d$).\n" +
          "- **Radius ($r$):** Distance from centre to any point on circumference ($r = \\frac{d}{2}$).\n" +
          "- **Diameter ($d$):** Straight line through centre joining two points on circumference ($d = 2r$).\n" +
          "- **Chord:** Straight line connecting any two points on the circumference without necessarily passing through the centre.\n" +
          "- **Tangent:** A straight line that touches the circle at exactly one point, always perpendicular to the radius at that point.\n" +
          "- **Arc:** A portion of the circumference.\n" +
          "- **Sector:** Region enclosed by two radii and an arc (slice of pie).\n" +
          "- **Segment:** Region enclosed by a chord and an arc.",
        examinerTips: [
          "Do not confuse sector (bounded by radii) with segment (bounded by a chord).",
        ],
        commonMistakes: [
          "Mixing up chord and diameter (diameter is the longest possible chord, passing through centre).",
        ],
        recap: [
          "Define the difference between a sector and a segment of a circle.",
        ],
      },
      {
        title: "Properties of 3D Shapes",
        body:
          "3D solid shapes have **Faces (flat surfaces)**, **Edges (where two faces meet)**, and **Vertices (corners where edges meet)**:\n\n" +
          "- **Cube:** 6 square faces, 12 edges, 8 vertices.\n" +
          "- **Cuboid:** 6 rectangular faces, 12 edges, 8 vertices.\n" +
          "- **Triangular Prism:** 5 faces (2 triangular, 3 rectangular), 9 edges, 6 vertices.\n" +
          "- **Square-based Pyramid:** 5 faces (1 square, 4 triangular), 8 edges, 5 vertices.\n" +
          "- **Tetrahedron (Triangular-based Pyramid):** 4 triangular faces, 6 edges, 4 vertices.\n" +
          "- **Cylinder:** 2 circular faces, 1 curved surface, 2 circular edges, 0 vertices.\n" +
          "- **Cone:** 1 circular base, 1 curved surface, 1 circular edge, 1 apex vertex.\n" +
          "- **Sphere:** 1 completely curved surface, 0 edges, 0 vertices.\n\n" +
          "**Euler's Formula for Polyhedra:** $F + V - E = 2$.",
        examinerTips: [
          "A prism has a uniform cross-section throughout its length.",
        ],
        commonMistakes: [
          "Counting the curved surface of a cylinder as a flat face.",
        ],
        recap: [
          "State the number of faces, edges, and vertices of a triangular prism.",
        ],
      },
      {
        title: "Nets of Solids",
        body:
          "A **net** is a 2D pattern of connected polygons that can be folded along edges to form a 3D solid.\n\n" +
          "- **Cube Net:** Made of 6 identical squares. There are exactly 11 distinct valid nets for a cube (e.g. the standard 'T' or cross shape).\n" +
          "- **Cuboid Net:** Made of 6 rectangles, with opposite faces being congruent.\n" +
          "- **Triangular Prism Net:** 2 congruent triangles connected to 3 rectangles.\n" +
          "- **Pyramid Net:** A central polygonal base surrounded by triangles sharing its edges.",
        examinerTips: [
          "Mentally fold the net to check that no two faces overlap and no open gaps remain.",
        ],
        commonMistakes: [
          "Drawing nets where faces overlap when folded.",
        ],
        recap: [
          "How many squares make up the net of a cube?",
        ],
      },
    ],
  },
  {
    number: 29,
    title: "Basic Angle Properties",
    section: "4. Geometry",
    topic: "Basic Angle Properties",
    intro:
      "Core angle rules: angles on straight lines, angles around a point, vertically opposite angles, and angles inside triangles and quadrilaterals.",
    subheadings: [
      {
        title: "Angles around Points & Lines",
        body:
          "Fundamental angle facts required in Cambridge geometric proofs:\n\n" +
          "1. **Angles on a straight line add up to $180^\\circ$:**\n" +
          "   $$\\mathbf{a + b = 180^\\circ}$$\n" +
          "2. **Angles around a point add up to $360^\\circ$:**\n" +
          "   $$\\mathbf{a + b + c + d = 360^\\circ}$$\n" +
          "3. **Vertically opposite angles are equal:**\n" +
          "   When two straight lines intersect, opposite angles are equal:\n" +
          "   $$\\mathbf{a = c \\quad \\text{and} \\quad b = d}$$",
        examinerTips: [
          "Whenever you calculate an unknown angle, give the geometric reason in words (e.g. 'angles on a straight line add up to 180°').",
        ],
        commonMistakes: [
          "Forgetting to write the geometric reason when asked to 'give a reason for your answer'.",
        ],
        recap: [
          "Two angles on a straight line are $3x^\\circ$ and $(2x + 10)^\\circ$. Find $x$.",
        ],
      },
      {
        title: "Angles in Triangles",
        body:
          "**Triangle Angle Rules:**\n\n" +
          "1. **Interior Angles:** The angles in any triangle add up to $180^\\circ$:\n" +
          "   $$\\mathbf{A + B + C = 180^\\circ}$$\n" +
          "2. **Exterior Angle Theorem:** The exterior angle of a triangle equals the sum of the two opposite interior angles:\n" +
          "   $$\\mathbf{\\text{Exterior } \\angle = A + B}$$\n" +
          "3. **Isosceles Triangle:** Two sides are equal, and the **base angles opposite the equal sides are equal**.\n" +
          "4. **Equilateral Triangle:** All three sides are equal, and each interior angle is $60^\\circ$ ($180^\\circ \\div 3$).\n" +
          "5. **Right-Angled Triangle:** One angle is $90^\\circ$; the other two acute angles add up to $90^\\circ$.",
        examinerTips: [
          "Look for tick marks on sides indicating an isosceles triangle, then identify the two equal base angles opposite those sides.",
        ],
        commonMistakes: [
          "Assuming base angles are always at the bottom of the page (an isosceles triangle can be rotated).",
        ],
        recap: [
          "In an isosceles triangle, the vertex angle is $40^\\circ$. Find the size of each base angle.",
        ],
      },
      {
        title: "Angles in Quadrilaterals",
        body:
          "The interior angles of any quadrilateral add up to $360^\\circ$:\n" +
          "$$\\mathbf{A + B + C + D = 360^\\circ}$$\n\n" +
          "**Special Quadrilaterals:**\n" +
          "- **Square & Rectangle:** All 4 angles are $90^\\circ$.\n" +
          "- **Parallelogram:** Opposite angles are equal ($A = C, B = D$), and consecutive angles add up to $180^\\circ$ ($A + B = 180^\\circ$).\n" +
          "- **Rhombus:** Opposite angles are equal; diagonals bisect at right angles ($90^\\circ$).\n" +
          "- **Trapezium:** One pair of parallel lines; co-interior angles between parallel lines add to $180^\\circ$.\n" +
          "- **Kite:** One pair of opposite angles are equal (between the unequal sides); diagonals intersect at $90^\\circ$.",
        examinerTips: [
          "Divide an irregular quadrilateral into two triangles with a diagonal to show why the sum is $2 \\times 180^\\circ = 360^\\circ$.",
        ],
        commonMistakes: [
          "Assuming all opposite angles in a kite are equal (only one pair is equal).",
        ],
        recap: [
          "Three angles of a quadrilateral are $85^\\circ, 110^\\circ,$ and $65^\\circ$. Find the fourth angle.",
        ],
      },
    ],
  },
  {
    number: 30,
    title: "Angles in Polygons & Parallel Lines",
    section: "4. Geometry",
    topic: "Angles in Polygons & Parallel Lines",
    intro:
      "Parallel line angle theorems (alternate, corresponding, co-interior) and polygon interior and exterior angle calculations.",
    subheadings: [
      {
        title: "Angles in Polygons",
        body:
          "For any $n$-sided polygon:\n\n" +
          "1. **Sum of Interior Angles:**\n" +
          "   Dividing into $(n - 2)$ triangles from a single vertex:\n" +
          "   $$\\mathbf{\\text{Sum of Interior Angles} = (n - 2) \\times 180^\\circ}$$\n" +
          "   - Triangle ($n = 3$): $(3 - 2) \\times 180^\\circ = 180^\\circ$\n" +
          "   - Quadrilateral ($n = 4$): $(4 - 2) \\times 180^\\circ = 360^\\circ$\n" +
          "   - Pentagon ($n = 5$): $(5 - 2) \\times 180^\\circ = 540^\\circ$\n" +
          "   - Hexagon ($n = 6$): $(6 - 2) \\times 180^\\circ = 720^\\circ$\n" +
          "   - Octagon ($n = 8$): $(8 - 2) \\times 180^\\circ = 1080^\\circ$\n\n" +
          "2. **Sum of Exterior Angles:**\n" +
          "   For ANY convex polygon, the exterior angles add up to $360^\\circ$:\n" +
          "   $$\\mathbf{\\text{Sum of Exterior Angles} = 360^\\circ}$$\n\n" +
          "3. **Regular Polygons (all $n$ angles equal):**\n" +
          "   $$\\mathbf{\\text{One Exterior Angle} = \\frac{360^\\circ}{n}}$$\n" +
          "   $$\\mathbf{\\text{One Interior Angle} = 180^\\circ - \\text{Exterior Angle} = \\frac{(n - 2) \\times 180^\\circ}{n}}$$",
        examinerTips: [
          "It is almost always much faster to find the exterior angle first using $\\frac{360^\\circ}{n}$, then subtract from $180^\\circ$ to get the interior angle.",
        ],
        commonMistakes: [
          "Using $(n - 2) \\times 360^\\circ$ instead of $(n - 2) \\times 180^\\circ$.",
        ],
        recap: [
          "Calculate the size of each interior angle of a regular decagon ($10$ sides).",
          "Each interior angle of a regular polygon is $140^\\circ$. How many sides does it have?",
        ],
      },
      {
        title: "Angles in Parallel Lines",
        body:
          "When a transversal line intersects two parallel lines, three key angle relationships are formed:\n\n" +
          "1. **Alternate Angles are EQUAL ('Z-angles'):**\n" +
          "   Lie on opposite sides of the transversal between the parallel lines.\n" +
          "   $$\\mathbf{a = b}$$\n" +
          "   - Reason in exam: **'Alternate angles are equal'**\n\n" +
          "2. **Corresponding Angles are EQUAL ('F-angles'):**\n" +
          "   Lie in matching positions at each intersection.\n" +
          "   $$\\mathbf{a = b}$$\n" +
          "   - Reason in exam: **'Corresponding angles are equal'**\n\n" +
          "3. **Co-Interior / Allied Angles add up to $180^\\circ$ ('C-angles'):**\n" +
          "   Lie on the same side of the transversal between parallel lines.\n" +
          "   $$\\mathbf{a + b = 180^\\circ}$$\n" +
          "   - Reason in exam: **'Co-interior angles add to 180°'**",
        examinerTips: [
          "Never write 'Z-angles' or 'F-angles' as the reason: you must write the formal mathematical terms **'Alternate angles'** or **'Corresponding angles'** to earn the mark.",
        ],
        commonMistakes: [
          "Using parallel line theorems when lines are not parallel (look for arrows).",
        ],
        recap: [
          "State the three geometric reasons for angle pairs formed across parallel lines.",
        ],
      },
    ],
  },
  {
    number: 31,
    title: "Bearings, Constructions & Scale Drawings",
    section: "4. Geometry",
    topic: "Bearings, Constructions & Scale Drawings",
    intro:
      "Three-figure bearings, back bearings, interpreting map scales, and geometric constructions of triangles using compasses and rulers.",
    subheadings: [
      {
        title: "Bearings",
        body:
          "A **bearing** is an angle used in navigation to indicate direction. Every bearing must satisfy three strict rules:\n\n" +
          "1. Measured from **NORTH**.\n" +
          "2. Measured **CLOCKWISE**.\n" +
          "3. Written with **THREE FIGURES** (e.g. $045^\\circ, 090^\\circ, 280^\\circ$).\n\n" +
          "**Calculating Bearings:**\n" +
          "- 'The bearing of $B$ from $A$': Draw North at $A$, and measure clockwise to line $AB$.\n" +
          "- **Back Bearings (Bearing of $A$ from $B$):**\n" +
          "  - If bearing $< 180^\\circ$: **Add $180^\\circ$**\n" +
          "  - If bearing $\\ge 180^\\circ$: **Subtract $180^\\circ$**\n" +
          "  - Example: If bearing of $B$ from $A$ is $065^\\circ$, bearing of $A$ from $B$ is $065^\\circ + 180^\\circ = 245^\\circ$.",
        examinerTips: [
          "Always draw a vertical North arrow at the starting point ('from' location).",
          "Remember the leading zero for bearings less than $100^\\circ$: write $072^\\circ$, never $72^\\circ$.",
        ],
        commonMistakes: [
          "Measuring anticlockwise instead of clockwise.",
          "Drawing North at $B$ instead of $A$ when finding bearing of $B$ from $A$.",
        ],
        recap: [
          "The bearing of ship $P$ from lighthouse $L$ is $128^\\circ$. Calculate the bearing of $L$ from $P$.",
        ],
      },
      {
        title: "Scale",
        body:
          "A **scale** links distances on a map or drawing to actual real-world distances:\n\n" +
          "- **Ratio Scale ($1 : n$):** $1\\text{ cm}$ on the drawing represents $n\\text{ cm}$ in reality.\n" +
          "- **Example:** Scale is $1 : 50000$:\n" +
          "  - $1\\text{ cm}$ on map $= 50000\\text{ cm} = 500\\text{ m} = 0.5\\text{ km}$\n" +
          "  - Distance of $6\\text{ cm}$ on map $= 6 \\times 0.5\\text{ km} = 3\\text{ km}$ in reality.\n\n" +
          "**Converting back to map distance:**\n" +
          "$$\\text{Map distance} = \\frac{\\text{Real distance}}{\\text{Scale factor}}$$",
        examinerTips: [
          "Always convert the real-world distance into the same units (cm) before applying the ratio.",
        ],
        commonMistakes: [
          "Multiplying real distance by scale factor instead of dividing.",
        ],
        recap: [
          "A map has a scale of $1 : 25000$. Two towns are $8\\text{ km}$ apart. Find the distance between them on the map in cm.",
        ],
      },
      {
        title: "Constructing Triangles",
        body:
          "Constructing accurate triangles using ruler, protractor, and compasses:\n\n" +
          "1. **SSS (Side, Side, Side):**\n" +
          "   - Draw base with ruler.\n" +
          "   - Set pair of compasses to second side length; draw an arc from one end.\n" +
          "   - Set compasses to third side length; draw an intersecting arc from the other end.\n" +
          "   - Connect intersection point to both base endpoints. **Leave construction arcs visible!**\n\n" +
          "2. **SAS (Side, Angle, Side):**\n" +
          "   - Draw base with ruler.\n" +
          "   - Measure given angle with protractor and draw a construction ray.\n" +
          "   - Measure second side length along ray and join to complete triangle.\n\n" +
          "3. **ASA (Angle, Side, Angle):**\n" +
          "   - Draw base line.\n" +
          "   - Measure the two angles at each endpoint; extend rays until they intersect.",
        examinerTips: [
          "**NEVER erase construction arcs.** Examiners look specifically for compass arcs to award construction method marks.",
        ],
        commonMistakes: [
          "Using a ruler alone to guess side lengths instead of intersecting compass arcs.",
        ],
        recap: [
          "Construct a triangle $ABC$ with $AB = 7\\text{ cm}, AC = 6\\text{ cm},$ and $BC = 5\\text{ cm}$.",
        ],
      },
    ],
  },
  {
    number: 32,
    title: "Circle Theorems",
    section: "4. Geometry",
    topic: "Circle Theorems",
    intro:
      "Core syllabus circle theorems: angle in a semicircle is a right angle, and tangent is perpendicular to radius at the point of contact.",
    subheadings: [
      {
        title: "Angle in a Semicircle",
        body:
          "**Theorem:** The angle subtended by a diameter at any point on the circumference of a circle is a **right angle ($90^\\circ$)**.\n\n" +
          "$$\\mathbf{\\angle = 90^\\circ}$$\n\n" +
          "- If $AB$ is a diameter, and $C$ is any point on the circumference, then $\\angle ACB = 90^\\circ$.\n" +
          "- Triangle $ABC$ is therefore a **right-angled triangle**, so Pythagoras' theorem ($a^2 + b^2 = c^2$) and SOH CAH TOA trigonometry can be applied directly.\n" +
          "- Formal exam reason: **'Angle in a semicircle is a right angle'**.",
        examinerTips: [
          "Check that the chord passes through the centre of the circle (indicated by $O$) before assuming it is a diameter.",
        ],
        commonMistakes: [
          "Applying this theorem to any chord that is not a diameter.",
        ],
        recap: [
          "$AB$ is a diameter of a circle. $C$ lies on circumference with $\\angle CAB = 32^\\circ$. Find $\\angle CBA$.",
        ],
      },
      {
        title: "Tangent & Radius",
        body:
          "**Theorem 1:** A tangent to a circle meets the radius at the point of contact at **right angles ($90^\\circ$)**.\n" +
          "$$\\mathbf{\\text{Radius } \\perp \\text{ Tangent}}$$\n" +
          "- If line $PT$ touches the circle at $T$ and $O$ is the centre, then $\\angle OTP = 90^\\circ$.\n" +
          "- Triangle $OTP$ is a right-angled triangle (with hypotenuse $OP$).\n" +
          "- Formal exam reason: **'Tangent is perpendicular to radius'**.\n\n" +
          "**Theorem 2 (Tangents from an External Point):**\n" +
          "Tangents drawn to a circle from the same external point $P$ are **equal in length**:\n" +
          "$$\\mathbf{PT_1 = PT_2}$$\n" +
          "The line joining the external point to the centre bisects the angle between the tangents.",
        examinerTips: [
          "Use Pythagoras' Theorem ($OP^2 = OT^2 + PT^2$) to calculate missing lengths in tangent problems.",
        ],
        commonMistakes: [
          "Forgetting that the hypotenuse is the line from the centre to the exterior point ($OP$), not the tangent.",
        ],
        recap: [
          "A tangent $PT$ of length $12\\text{ cm}$ touches a circle of radius $5\\text{ cm}$ at $T$. Calculate the distance from centre $O$ to point $P$.",
        ],
      },
    ],
  },
];
