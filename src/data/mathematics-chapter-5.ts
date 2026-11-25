import type { Chapter } from "../lib/notes/types";

// mathematics-chapter-5.ts — chapters 82–94 (Geometry)
export const MATHEMATICS_CHAPTERS_5: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 82. Introduction to Lines & Angles
  // ─────────────────────────────────────────────────────────────
  {
    number: 82,
    title: "Introduction to Lines & Angles",
    section: "Geometry",
    topic: "Lines, Angles & Symmetry",
    intro: `Lines and angles are the building blocks of all geometry. Understanding how to name, measure, and classify angles — and recognising the relationships between them — underpins every geometry topic on the IGCSE course. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Introduction to Lines & Angles",
        body: `A **line** extends infinitely in both directions; a **line segment** has two endpoints. A **ray** starts at a point and extends in one direction. When two rays share an endpoint, they form an **angle** at that **vertex**.\n\nAngles are measured in **degrees (°)**. A full turn is 360°. Types of angle:\n- **Acute:** 0° < angle < 90°\n- **Right angle:** exactly 90° (marked with a small square)\n- **Obtuse:** 90° < angle < 180°\n- **Straight (flat):** exactly 180°\n- **Reflex:** 180° < angle < 360°\n\n**Perpendicular lines** meet at exactly 90°. **Parallel lines** never meet and are marked with matching arrows.\n\nAngles on a **straight line** add to 180°. Angles at a **point** add to 360°. **Vertically opposite angles** (formed by two crossing lines) are equal.\n\n**Worked example:** Two angles on a straight line are 3x + 10 and x + 50. Find x.\n3x + 10 + x + 50 = 180 → 4x + 60 = 180 → 4x = 120 → **x = 30**.`,
        groups: [
          {
            subTitle: "Types of angle",
            bullets: [
              "**Acute angle:** strictly between 0° and 90° — always less than a right angle.",
              "**Obtuse angle:** strictly between 90° and 180° — wider than a right angle but less than a straight line.",
              "**Reflex angle:** strictly between 180° and 360° — the larger of the two angles formed at an intersection.",
              "**Complementary angles:** two angles that sum to 90° — each is the complement of the other.",
              "**Supplementary angles:** two angles that sum to 180° — each is the supplement of the other.",
            ],
          },
          {
            subTitle: "Key angle relationships",
            bullets: [
              "**Angles on a straight line:** all angles on one side of a line meeting at a point sum to 180°.",
              "**Angles at a point:** all angles around a single point sum to 360°.",
              "**Vertically opposite angles:** formed by two intersecting lines — equal in size.",
              "**Perpendicular lines:** form four right angles (90° each) at their intersection.",
              "**Adjacent angles:** share a common vertex and a common ray without overlapping.",
            ],
          },
          {
            subTitle: "Using angle relationships in calculations",
            bullets: [
              "**Set up an equation:** write angle expressions on a straight line summing to 180°, or around a point summing to 360°.",
              "**Identify vertically opposite pairs:** label equal pairs before writing equations.",
              "**Check your answer:** substitute the found value back — verify the angles sum to the expected total.",
              "**Give reasons:** IGCSE mark schemes often require a written reason (e.g. 'angles on a straight line').",
            ],
          },
        ],
        examinerTips: [
          "Always state the geometric reason alongside each angle calculation — 'angles on a straight line = 180°' earns a reason mark.",
          "Mark right angles with a square symbol and equal angles with matching arc marks on diagrams.",
          "Vertically opposite angles look equal — confirm by checking both pairs before forming equations.",
          "For unknown angle problems, write an equation first; do not guess from the diagram.",
        ],
        commonMistakes: [
          "Confusing supplementary (sum 180°) with complementary (sum 90°) — learn the distinction by linking 'right angle' to 'complementary'.",
          "Assuming angles that look equal are equal without checking — only vertically opposite angles are guaranteed equal at a crossing.",
        ],
        recap: [
          "Angles on a straight line are 2x + 15 and 3x − 5. Find x and both angles. [3]",
          "Two lines intersect. One angle is 47°. Write down the sizes of the other three angles, giving reasons. [3]",
          "Classify an angle of 215° and find its reflex/non-reflex partner. [2]",
          "Explain the difference between perpendicular and parallel lines, giving one real-world example of each. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 83. Rotational Symmetry
  // ─────────────────────────────────────────────────────────────
  {
    number: 83,
    title: "Rotational Symmetry",
    section: "Geometry",
    topic: "Lines, Angles & Symmetry",
    intro: `Rotational symmetry describes how many times a shape maps onto itself during a full 360° rotation about its centre. Every shape has at least order 1 rotational symmetry, since it always coincides with itself after a full turn. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Rotational Symmetry",
        body: `A shape has **rotational symmetry** if it can be rotated by less than 360° about a fixed central point and appear identical to its original position. The number of times it coincides in one full turn is the **order of rotational symmetry**.\n\n**Order 1** means the shape only maps onto itself after a full 360° turn — essentially no rotational symmetry beyond the trivial. Any irregular shape has order 1.\n\nCommon shapes and their orders:\n- **Equilateral triangle:** order 3 (coincides every 120°)\n- **Square:** order 4 (coincides every 90°)\n- **Regular pentagon:** order 5 (coincides every 72°)\n- **Regular n-gon:** order n (coincides every 360°/n)\n- **Rectangle (non-square):** order 2 (coincides every 180°)\n- **Parallelogram:** order 2\n\n**Centre of rotation:** the fixed point about which the rotation occurs. For regular polygons it is the geometric centre.\n\n**Worked example:** Find the order and angle of rotation for a regular hexagon.\nOrder = 6; angle = 360°/6 = **60°** per turn.`,
        groups: [
          {
            subTitle: "Identifying rotational symmetry",
            bullets: [
              "**Order of rotational symmetry:** the number of times a shape looks the same in one complete 360° turn.",
              "**Minimum rotation angle:** 360° ÷ order — a square needs only 90° per step.",
              "**All regular polygons:** a regular n-gon has order n rotational symmetry.",
              "**Circle:** has infinite order — it looks identical at every angle of rotation.",
              "**Letters and logos:** many logos use rotational symmetry; the letter S has order 2.",
            ],
          },
          {
            subTitle: "Rotation as a transformation",
            bullets: [
              "**Describing a rotation:** state the angle, direction (clockwise or anticlockwise), and centre of rotation.",
              "**90° clockwise rotation:** point (x, y) maps to (y, −x) about the origin.",
              "**180° rotation:** point (x, y) maps to (−x, −y) — same result clockwise or anticlockwise.",
              "**Finding the centre:** the centre of rotation is equidistant from corresponding points on the object and image.",
              "**Tracing paper method:** trace the shape, pin at the suspected centre, and rotate until it coincides.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Saying order 0 instead of order 1:** every shape has at least order 1 — there is no order 0.",
              "**Confusing order with angle:** order 4 means 4 coincidences, not 4°; the angle is 360°/4 = 90°.",
              "**Forgetting to state the centre:** a rotation description is incomplete without naming the centre.",
              "**Confusing rotational symmetry with reflective symmetry:** a shape can have one without the other (e.g. a parallelogram has order 2 rotational but no line symmetry).",
            ],
          },
        ],
        examinerTips: [
          "State the order as a whole number — never say 'order 0'; say 'order 1' for shapes with no rotational symmetry.",
          "For transformation questions, give all three elements: angle, direction, and centre — missing any one loses marks.",
          "Use tracing paper in the exam to find or verify a centre of rotation by trial.",
          "Link order of rotational symmetry to the number of equal sides/angles in a regular polygon.",
        ],
        commonMistakes: [
          "Describing a rotation without stating the direction — clockwise and anticlockwise give different images for angles other than 180°.",
          "Equating the order of symmetry with the angle of rotation — they are related by order = 360° ÷ angle, not equal.",
        ],
        recap: [
          "Write down the order of rotational symmetry of a regular octagon and state the minimum angle of rotation. [2]",
          "Triangle ABC is rotated 90° anticlockwise about the origin. Write down the coordinates of A'(3, 1) after the rotation. [2]",
          "A shape has rotational symmetry of order 3. What is the angle between each repeated position? [1]",
          "Explain why a rectangle that is not a square has rotational symmetry of order 2 but no line symmetry through its sides. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 84. Lines of Symmetry
  // ─────────────────────────────────────────────────────────────
  {
    number: 84,
    title: "Lines of Symmetry",
    section: "Geometry",
    topic: "Lines, Angles & Symmetry",
    intro: `A line of symmetry divides a shape into two halves that are mirror images of each other. Identifying and drawing lines of symmetry is a key skill in both 2D geometry and coordinate geometry questions on IGCSE papers. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Lines of Symmetry",
        body: `A **line of symmetry** (also called a **mirror line** or **axis of symmetry**) is a line that divides a shape into two congruent halves such that one half is the reflection of the other.\n\nTo test whether a line is a line of symmetry, fold the shape along the line — if both halves coincide exactly, the line is a line of symmetry.\n\nCommon shapes and their lines of symmetry:\n- **Equilateral triangle:** 3 lines\n- **Isosceles triangle:** 1 line (through the apex and midpoint of base)\n- **Square:** 4 lines (2 through midpoints of opposite sides, 2 diagonal)\n- **Rectangle (non-square):** 2 lines (through midpoints of opposite sides only)\n- **Regular n-gon:** n lines\n- **Circle:** infinitely many (any diameter)\n- **Parallelogram:** 0 lines\n- **Rhombus:** 2 lines (both diagonals)\n\n**Reflection in a line:** every point and its image are the same perpendicular distance from the mirror line, on opposite sides.\n\n**Worked example:** A kite has vertices at (0, 3), (2, 0), (0, −1), (−2, 0). The y-axis (x = 0) is a line of symmetry because the left and right halves are mirror images.`,
        groups: [
          {
            subTitle: "Lines of symmetry in polygons",
            bullets: [
              "**Regular polygons:** a regular n-gon has exactly n lines of symmetry.",
              "**Isosceles triangle:** exactly 1 line — it passes through the apex perpendicular to the base.",
              "**Square vs rectangle:** a square has 4 lines; a non-square rectangle has only 2 (no diagonal lines of symmetry).",
              "**Rhombus vs parallelogram:** a rhombus has 2 lines (its diagonals); a parallelogram has 0.",
              "**Kite:** exactly 1 line of symmetry — along the main diagonal connecting the vertices between the unequal sides.",
            ],
          },
          {
            subTitle: "Reflection as a transformation",
            bullets: [
              "**Describing a reflection:** state the equation of the mirror line (e.g. y = x, x = 2).",
              "**Reflecting in y-axis (x = 0):** point (a, b) maps to (−a, b).",
              "**Reflecting in x-axis (y = 0):** point (a, b) maps to (a, −b).",
              "**Reflecting in y = x:** point (a, b) maps to (b, a) — swap the coordinates.",
              "**Reflecting in y = −x:** point (a, b) maps to (−b, −a).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Including diagonals of a rectangle as lines of symmetry:** rectangle diagonals are NOT lines of symmetry (they do not halve it into mirror images).",
              "**Confusing rotation with reflection:** a reflection produces a mirror image; a rotation does not flip the shape.",
              "**Missing lines through vertices in regular polygons:** in a regular hexagon, lines go both through opposite vertices and through midpoints of opposite sides.",
              "**Forgetting to give the mirror line equation:** 'reflect in the y-axis' is insufficient if the question asks for the equation; write x = 0.",
            ],
          },
        ],
        examinerTips: [
          "For regular polygons, the number of lines of symmetry equals the number of sides — this is a quick check.",
          "State the equation of the mirror line explicitly when describing a reflection transformation.",
          "Folding the shape mentally along each candidate line is the most reliable way to count lines of symmetry.",
          "Distinguish rhombus (2 lines of symmetry, the diagonals) from parallelogram (0 lines of symmetry).",
        ],
        commonMistakes: [
          "Adding the diagonals as lines of symmetry for a rectangle — a rectangle's diagonals do not create mirror images.",
          "Swapping the sign of the wrong coordinate when reflecting — always identify which axis or line you are reflecting in first.",
        ],
        recap: [
          "Draw all lines of symmetry on a regular pentagon. How many are there? [2]",
          "Point P is at (3, −2). Write down the coordinates of its reflection in the x-axis and in the line y = x. [2]",
          "How many lines of symmetry does a rhombus have? Give the geometric names of these lines. [2]",
          "Explain why a parallelogram has rotational symmetry of order 2 but no lines of symmetry. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 85. Properties of Polygons
  // ─────────────────────────────────────────────────────────────
  {
    number: 85,
    title: "Properties of Polygons",
    section: "Geometry",
    topic: "Shapes & Properties",
    intro: `Polygons are closed plane shapes formed entirely by straight sides. Knowing the specific properties of common polygons — their side lengths, angles, diagonals, and symmetry — is essential for solving geometry problems efficiently. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Properties of Polygons",
        body: `A **polygon** is a closed 2D shape with straight sides. Polygons are classified by the number of sides: triangle (3), quadrilateral (4), pentagon (5), hexagon (6), heptagon (7), octagon (8), nonagon (9), decagon (10).\n\nA **regular polygon** has all sides equal and all interior angles equal. An **irregular polygon** does not.\n\n**Interior angle of a regular n-gon:** (n − 2) × 180° ÷ n\n**Sum of interior angles of any n-gon:** (n − 2) × 180°\n**Sum of exterior angles of any polygon:** always 360°\n\nKey quadrilateral properties:\n- **Square:** 4 equal sides, 4 × 90°, 4 lines of symmetry, order 4 rotation.\n- **Rectangle:** opposite sides equal, 4 × 90°, 2 lines of symmetry, order 2 rotation.\n- **Rhombus:** 4 equal sides, opposite angles equal, diagonals bisect at 90°, 2 lines of symmetry.\n- **Parallelogram:** opposite sides parallel and equal, opposite angles equal, no lines of symmetry, order 2 rotation.\n- **Trapezium:** exactly one pair of parallel sides.\n- **Isosceles trapezium:** one pair of parallel sides, non-parallel sides equal, 1 line of symmetry.\n- **Kite:** two pairs of adjacent equal sides, 1 line of symmetry, diagonals perpendicular.\n\n**Worked example:** Find the interior angle of a regular octagon.\n(8 − 2) × 180° ÷ 8 = 6 × 180° ÷ 8 = 1080° ÷ 8 = **135°**.`,
        groups: [
          {
            subTitle: "Angle sums in polygons",
            bullets: [
              "**Interior angle sum:** (n − 2) × 180° — for a hexagon: (6 − 2) × 180° = 720°.",
              "**Each interior angle (regular polygon):** (n − 2) × 180° ÷ n.",
              "**Exterior angle sum:** always 360° for any convex polygon.",
              "**Each exterior angle (regular polygon):** 360° ÷ n.",
              "**Interior + exterior = 180°:** interior and exterior angles at each vertex are supplementary.",
            ],
          },
          {
            subTitle: "Special quadrilateral properties",
            bullets: [
              "**Parallelogram:** opposite sides parallel and equal; opposite angles equal; diagonals bisect each other.",
              "**Rhombus:** all four sides equal; diagonals bisect each other at right angles; diagonals bisect the vertex angles.",
              "**Kite:** two pairs of adjacent equal sides; one diagonal is the perpendicular bisector of the other; one pair of equal angles.",
              "**Trapezium:** exactly one pair of parallel sides; co-interior angles between parallel sides sum to 180°.",
              "**Isosceles trapezium:** non-parallel sides equal; base angles equal; one line of symmetry; diagonals equal in length.",
            ],
          },
          {
            subTitle: "Diagonals and symmetry summary",
            bullets: [
              "**Square:** 4 lines of symmetry; both diagonals are lines of symmetry; diagonals equal, perpendicular, bisect each other.",
              "**Rectangle:** 2 lines of symmetry; diagonals equal, bisect each other but are NOT perpendicular.",
              "**Rhombus:** 2 lines of symmetry (the diagonals); diagonals perpendicular but NOT equal.",
              "**Parallelogram:** 0 lines of symmetry; diagonals bisect each other but are NOT equal or perpendicular.",
              "**Kite:** 1 line of symmetry (the main diagonal); diagonals perpendicular; only the main diagonal bisects the other.",
            ],
          },
        ],
        examinerTips: [
          "Memorise (n − 2) × 180° for interior angle sums — this single formula works for every polygon.",
          "Exterior angle sum is always 360°; use 360° ÷ n when working with regular polygons.",
          "Distinguish which properties belong to a rhombus and which to a rectangle before an exam — they are frequently confused.",
          "For quadrilateral problems, draw and label the shape with known properties to spot which angle or length rules apply.",
        ],
        commonMistakes: [
          "Using (n × 180°) instead of (n − 2) × 180° for the interior angle sum — always subtract 2 from the number of sides first.",
          "Assuming all quadrilateral diagonals bisect each other — only parallelograms (and their special cases) have this property.",
        ],
        recap: [
          "Find the size of each interior angle of a regular 12-sided polygon. [2]",
          "The interior angle of a regular polygon is 150°. How many sides does it have? [3]",
          "List two properties that a rhombus and a rectangle share, and two that differ. [2]",
          "The exterior angle of a regular polygon is 24°. Find the number of sides and the sum of interior angles. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 86. Properties of Circles
  // ─────────────────────────────────────────────────────────────
  {
    number: 86,
    title: "Properties of Circles",
    section: "Geometry",
    topic: "Shapes & Properties",
    intro: `The circle has a unique set of parts and measurement formulas that appear across many IGCSE topics. Knowing the precise vocabulary and the circumference and area formulas is essential before progressing to circle theorems. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Properties of Circles",
        body: `A **circle** is the set of all points equidistant from a fixed point called the **centre**. The fixed distance is the **radius (r)**.\n\nKey vocabulary:\n- **Diameter (d):** a chord passing through the centre; d = 2r.\n- **Chord:** a line segment joining two points on the circle.\n- **Arc:** a portion of the circumference.\n- **Sector:** a 'pie-slice' region bounded by two radii and an arc.\n- **Segment:** a region bounded by a chord and an arc.\n- **Tangent:** a straight line touching the circle at exactly one point; a tangent is perpendicular to the radius at the point of contact.\n\nFormulas:\n- **Circumference:** C = 2πr = πd\n- **Area:** A = πr²\n- **Arc length:** (θ/360) × 2πr\n- **Sector area:** (θ/360) × πr²\n\n**Worked example:** A circle has radius 5 cm. Find the arc length and sector area for a 72° sector.\nArc length = (72/360) × 2π × 5 = (1/5) × 10π = **2π ≈ 6.28 cm**.\nSector area = (72/360) × π × 25 = (1/5) × 25π = **5π ≈ 15.71 cm²**.`,
        groups: [
          {
            subTitle: "Circle vocabulary",
            bullets: [
              "**Radius:** distance from the centre to any point on the circle — all radii are equal.",
              "**Diameter:** longest chord; passes through the centre; d = 2r.",
              "**Chord:** line segment joining two points on the circumference — a diameter is a special chord.",
              "**Tangent:** touches the circle at one point; perpendicular to the radius drawn to that point.",
              "**Sector vs segment:** a sector is bounded by two radii; a segment is bounded by a chord and the arc it cuts off.",
            ],
          },
          {
            subTitle: "Arc and sector calculations",
            bullets: [
              "**Arc length formula:** (θ ÷ 360) × 2πr — where θ is the angle at the centre in degrees.",
              "**Sector area formula:** (θ ÷ 360) × πr² — same fraction of the full circle's area.",
              "**Perimeter of a sector:** arc length + 2r (the two radii are included in the perimeter).",
              "**Using fractions:** for θ = 90°, the fraction is 1/4; for θ = 120°, it is 1/3.",
              "**Exact answers:** leave answers in terms of π unless told to give a decimal.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using diameter instead of radius in A = πr²:** always halve a given diameter before substituting.",
              "**Forgetting the two radii when finding sector perimeter:** perimeter = arc length + 2r, not just arc length.",
              "**Rounding π prematurely:** carry the full value through calculations; only round the final answer.",
              "**Confusing sector area with segment area:** segment area = sector area − triangle area (the triangle formed by the two radii).",
            ],
          },
        ],
        examinerTips: [
          "Learn both circumference forms: C = 2πr and C = πd — use whichever fits what the question gives.",
          "Arc length and sector area are the same fraction (θ/360) of the full circumference and area — one pattern covers both.",
          "Show the substitution line before calculating; this earns a method mark if arithmetic goes wrong.",
          "For the perimeter of a sector, students consistently forget to add the two radii — always check.",
        ],
        commonMistakes: [
          "Squaring the diameter instead of the radius in A = πr² — always identify r first.",
          "Finding sector area then forgetting to subtract the triangle when the question asks for segment area.",
        ],
        recap: [
          "A circle has diameter 14 cm. Find its circumference and area, leaving answers in terms of π. [2]",
          "Find the arc length and area of a sector with radius 9 cm and angle 40°. Give answers to 3 significant figures. [4]",
          "The area of a circle is 50 cm². Find the radius to 2 decimal places. [2]",
          "A sector has arc length 12π cm and radius 18 cm. Find the angle at the centre. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 87. Properties of 3D Shapes
  // ─────────────────────────────────────────────────────────────
  {
    number: 87,
    title: "Properties of 3D Shapes",
    section: "Geometry",
    topic: "Shapes & Properties",
    intro: `Three-dimensional shapes have faces, edges, and vertices. Knowing their properties — and how to calculate surface area and volume — is a major strand of IGCSE geometry and appears on both calculator and non-calculator papers. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Properties of 3D Shapes",
        body: `**Euler's formula** connects faces (F), edges (E), and vertices (V) for any convex polyhedron: **F + V − E = 2**.\n\nCommon 3D shapes and their properties:\n\n| Shape | Faces | Edges | Vertices |\n|---|---|---|---|\n| Cube | 6 | 12 | 8 |\n| Cuboid | 6 | 12 | 8 |\n| Triangular prism | 5 | 9 | 6 |\n| Square-based pyramid | 5 | 8 | 5 |\n| Tetrahedron (triangular pyramid) | 4 | 6 | 4 |\n| Cylinder | 3 | 2 | 0 |\n| Cone | 2 | 1 | 1 |\n| Sphere | 1 | 0 | 0 |\n\nVolume and surface area formulas:\n- **Cuboid:** V = lwh; SA = 2(lw + lh + wh)\n- **Prism (any cross-section):** V = cross-sectional area × length\n- **Cylinder:** V = πr²h; SA = 2πr² + 2πrh\n- **Cone:** V = ⅓πr²h; SA = πr² + πrl (where l = slant height)\n- **Sphere:** V = (4/3)πr³; SA = 4πr²\n- **Pyramid:** V = ⅓ × base area × height\n\n**Worked example:** Find the volume of a cone with r = 3 cm, h = 4 cm.\nSlant height l = √(3² + 4²) = √25 = 5 cm.\nV = ⅓ × π × 9 × 4 = 12π ≈ **37.7 cm³**.`,
        groups: [
          {
            subTitle: "Volume formulas",
            bullets: [
              "**Cuboid:** V = length × width × height.",
              "**Prism:** V = area of cross-section × length — works for triangular, trapezoidal, or any uniform prism.",
              "**Cylinder:** V = πr²h — the cross-section is a circle.",
              "**Cone:** V = ⅓πr²h — one-third of the equivalent cylinder.",
              "**Sphere:** V = (4/3)πr³ — this formula must be memorised.",
            ],
          },
          {
            subTitle: "Surface area formulas",
            bullets: [
              "**Cuboid:** SA = 2(lw + lh + wh) — sum of three distinct rectangular face pairs.",
              "**Cylinder:** SA = 2πr² (two circular ends) + 2πrh (curved surface = rectangle when unrolled).",
              "**Cone:** SA = πrl (curved surface) + πr² (circular base); find slant height l = √(r² + h²).",
              "**Sphere:** SA = 4πr².",
              "**Pyramid:** SA = base area + sum of triangular face areas.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using diameter instead of radius in cylinder or sphere formulas:** always use r = d/2.",
              "**Forgetting to include all faces in surface area:** check every face, including the base of a cone or pyramid.",
              "**Confusing slant height with perpendicular height in a cone:** V uses h (perpendicular); curved SA uses l (slant); find l using Pythagoras.",
              "**Incorrectly applying prism formula:** the cross-section must be the uniform face, not a rectangular face.",
            ],
          },
        ],
        examinerTips: [
          "Euler's formula F + V − E = 2 is a quick check for 3D shape properties — if numbers don't satisfy it, recount.",
          "For surface area questions, draw a net of the shape and label each face — this ensures you don't miss any.",
          "Cone slant height is never equal to perpendicular height; always use l = √(r² + h²).",
          "Show all working for volume and surface area in steps: write the formula, substitute values, then calculate.",
        ],
        commonMistakes: [
          "Forgetting the ⅓ factor for cone and pyramid volumes — both are one-third of the corresponding prism/cylinder.",
          "Adding instead of separately pairing faces in cuboid surface area — always pair opposite faces before summing.",
        ],
        recap: [
          "Find the volume and total surface area of a cylinder with radius 4 cm and height 10 cm. Leave answers in terms of π. [4]",
          "A cone has base radius 6 cm and perpendicular height 8 cm. Find its slant height and total surface area to 1 d.p. [4]",
          "A sphere has surface area 100π cm². Find its volume, leaving the answer in terms of π. [3]",
          "A triangular prism has a right-angled cross-section with legs 3 cm and 4 cm, and length 10 cm. Find its volume and surface area. [4]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 88. Angles around Points & Lines
  // ─────────────────────────────────────────────────────────────
  {
    number: 88,
    title: "Angles around Points & Lines",
    section: "Geometry",
    topic: "Angle Rules",
    intro: `The fundamental angle rules — angles at a point, angles on a straight line, and vertically opposite angles — are used in almost every geometry calculation. Applying them with clear written reasons is what distinguishes full-mark answers from partial ones. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Angles around Points & Lines",
        body: `Three foundational angle rules apply whenever lines meet at a point:\n\n1. **Angles at a point sum to 360°.** All angles formed around a single point, taken together, make a full turn.\n2. **Angles on a straight line sum to 180°.** Angles on one side of a straight line at a point are supplementary.\n3. **Vertically opposite angles are equal.** When two straight lines cross, the angles directly across the intersection from each other are equal.\n\nA fourth rule — the **right angle** — applies when lines are perpendicular: each of the four angles is 90°.\n\n**Using reasons in calculations:** Cambridge mark schemes specifically award marks for geometric reasons. The expected phrases are:\n- "angles on a straight line"\n- "angles at a point"\n- "vertically opposite angles"\n- "angles in a right angle"\n\n**Worked example:** Three angles at a point are 2x, 3x, and x + 60°. Find x.\n2x + 3x + x + 60 = 360 → 6x + 60 = 360 → 6x = 300 → **x = 50°**.`,
        groups: [
          {
            subTitle: "The three core angle rules",
            bullets: [
              "**Angles at a point:** sum = 360°; use when multiple angles share a single vertex with no line boundary.",
              "**Angles on a straight line:** sum = 180°; use when angles sit on one side of a line at a point.",
              "**Vertically opposite angles:** equal; formed at the intersection of two straight lines.",
              "**Adjacent supplementary angles:** two angles that together form a straight line each equal 180° minus the other.",
              "**Right angle context:** if one of the formed angles is marked 90°, all four are 90° (lines are perpendicular).",
            ],
          },
          {
            subTitle: "Multi-step angle calculations",
            bullets: [
              "**Step 1:** identify which angle rule applies (point, line, or vertically opposite).",
              "**Step 2:** write an equation using the rule as the constraint.",
              "**Step 3:** solve for the unknown.",
              "**Step 4:** find any other required angles using the same or other rules.",
              "**Check:** verify that the angles sum to the expected total (360° or 180°) after substituting.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not writing a reason:** calculations without reasons lose the method mark — write the rule name explicitly.",
              "**Using 360° when angles are on a straight line:** angles on a straight line use 180°, not 360°.",
              "**Assuming adjacent angles are equal without evidence:** only vertically opposite angles are guaranteed equal.",
              "**Setting up the wrong equation:** distinguish whether the angles share a line boundary (use 180°) or not (use 360°).",
            ],
          },
        ],
        examinerTips: [
          "Write the angle rule as a reason in every step — 'angles on a straight line = 180°' is an expected part of the answer.",
          "Label all angles you find on the diagram as you calculate — this avoids reusing or misreading values.",
          "If a diagram has overlapping rules, deal with one intersection at a time.",
          "For multi-step problems, show each equation on its own line with its reason.",
        ],
        commonMistakes: [
          "Applying the angles-at-a-point rule (360°) when angles are on a line (180°) — check whether a straight line is present.",
          "Skipping the reason — a numerical answer without a geometric reason is marked as incomplete.",
        ],
        recap: [
          "Angles at a point are 4x, 2x + 15, and 90°. Find x. [2]",
          "Two straight lines cross. One angle formed is 73°. Write down the other three angles with reasons. [3]",
          "Three angles on a straight line are (y + 30)°, 2y°, and (y − 10)°. Find y and state each angle. [3]",
          "Explain why vertically opposite angles must be equal, using the angles-on-a-line rule as justification. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 89. Angles in Triangles
  // ─────────────────────────────────────────────────────────────
  {
    number: 89,
    title: "Angles in Triangles",
    section: "Geometry",
    topic: "Angle Rules",
    intro: `The angle sum of any triangle is 180°, and the exterior angle theorem provides a powerful shortcut for multi-step problems. These two rules, combined with the special properties of isosceles and equilateral triangles, solve the majority of IGCSE triangle angle problems. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Angles in Triangles",
        body: `**Interior angle sum of a triangle:** the three interior angles of any triangle always sum to **180°**.\n\n**Exterior angle theorem:** the exterior angle of a triangle equals the sum of the two non-adjacent (remote) interior angles.\n\nSpecial triangle properties:\n- **Equilateral triangle:** all angles = 60°, all sides equal.\n- **Isosceles triangle:** two equal base angles (opposite the equal sides); the apex angle bisector is also the perpendicular bisector of the base.\n- **Right-angled triangle:** one angle = 90°; the side opposite the right angle is the **hypotenuse** (longest side); Pythagoras' theorem and trigonometry apply.\n- **Scalene triangle:** all angles different, all sides different.\n\n**Worked example:** In triangle ABC, angle A = 2x, angle B = x + 20, angle C = x − 10. Find x.\n2x + x + 20 + x − 10 = 180 → 4x + 10 = 180 → 4x = 170 → **x = 42.5°**.\n\nAngles: A = 85°, B = 62.5°, C = 32.5°. ✓ (sum = 180°)`,
        groups: [
          {
            subTitle: "Triangle angle rules",
            bullets: [
              "**Interior angle sum:** A + B + C = 180° for every triangle, regardless of type.",
              "**Exterior angle:** equals the sum of the two remote interior angles — a useful short-cut.",
              "**Isosceles triangle:** the two base angles (at the base of the equal sides) are always equal.",
              "**Equilateral triangle:** each interior angle is 60°; all sides are congruent.",
              "**Right-angled triangle:** the two acute angles are complementary (sum to 90°).",
            ],
          },
          {
            subTitle: "Applying rules in multi-step problems",
            bullets: [
              "**Combined with parallel lines:** alternate angles create equal angles inside triangles on transversals.",
              "**Isosceles identification:** if two sides are marked equal, immediately set the base angles equal.",
              "**Exterior angle short-cut:** instead of finding the interior angle sum, equate the exterior angle to the two remote interiors.",
              "**Chains of triangles:** find angles in one triangle first, then use them as known values in an adjacent triangle.",
              "**Algebraic triangles:** set the three angle expressions equal to 180°, then solve.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using 360° instead of 180°:** triangle angles always sum to 180°, not 360°.",
              "**Forgetting isosceles has two equal angles:** when two sides are equal, mark both opposite angles as equal immediately.",
              "**Exterior angle confusion:** the exterior angle equals the sum of the two non-adjacent interiors, not the adjacent one.",
              "**Not simplifying fully:** leave all angle values as integers or exact decimals, not unsimplified fractions.",
            ],
          },
        ],
        examinerTips: [
          "Mark equal angles on the diagram when you identify an isosceles triangle — this prevents using different values later.",
          "For algebraic angle problems, write angle sum = 180°, substitute the expressions, then solve.",
          "The exterior angle theorem saves a step — use it when the exterior angle is marked and two remote interior angles involve the same unknown.",
          "Always give a reason (e.g. 'angle sum of triangle = 180°') when calculating angles in formal geometry questions.",
        ],
        commonMistakes: [
          "Adding the adjacent interior angle instead of the two remote angles when applying the exterior angle theorem.",
          "Assuming a triangle with two equal angles is automatically equilateral — it is only equilateral if all three angles are 60°.",
        ],
        recap: [
          "Find the angles of a triangle where the angles are (3x + 5)°, (2x − 10)°, and (x + 15)°. [3]",
          "An isosceles triangle has an apex angle of 46°. Find the base angles. [2]",
          "An exterior angle of a triangle is 110°. One remote interior angle is 65°. Find the other two interior angles. [2]",
          "Triangle ABC has AB = AC and angle BAC = 40°. D is on BC such that angle ADB = 90°. Find angle ABD. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 90. Angles in Quadrilaterals
  // ─────────────────────────────────────────────────────────────
  {
    number: 90,
    title: "Angles in Quadrilaterals",
    section: "Geometry",
    topic: "Angle Rules",
    intro: `The interior angles of any quadrilateral sum to 360°. Combined with the special angle properties of parallelograms, rhombuses, and trapeziums, this rule gives a complete toolkit for solving all quadrilateral angle problems. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Angles in Quadrilaterals",
        body: `**Interior angle sum of a quadrilateral:** any four-sided polygon has interior angles summing to **360°**. This follows from dividing the quadrilateral into two triangles by drawing a diagonal (each triangle contributes 180°).\n\nSpecial quadrilateral angle properties:\n- **Parallelogram:** opposite angles equal; co-interior (same-side) angles supplementary (sum to 180°).\n- **Rectangle:** all angles = 90°.\n- **Rhombus:** opposite angles equal; adjacent angles supplementary.\n- **Square:** all angles = 90°.\n- **Isosceles trapezium:** co-interior angles supplementary; base angles equal.\n- **Kite:** one pair of opposite angles equal (the angles between the unequal sides).\n\n**Worked example:** In a parallelogram, one angle is (3x + 10)°. Find x and all four angles.\nOpposite angle = 3x + 10; adjacent angles = 180 − (3x + 10) = 170 − 3x.\nAll four: 3x + 10 + 170 − 3x + 3x + 10 + 170 − 3x = 360 ✓\nTo find x, additional information would be needed. With 3x + 10 = 70: 3x = 60, **x = 20**; angles are 70°, 110°, 70°, 110°.`,
        groups: [
          {
            subTitle: "Quadrilateral angle sum rule",
            bullets: [
              "**All quadrilaterals:** interior angles sum to 360°.",
              "**Derivation:** a diagonal splits the quadrilateral into two triangles; 2 × 180° = 360°.",
              "**Setting up equations:** write all four angle expressions, sum to 360°, and solve.",
              "**Unknown fourth angle:** if three angles are known, subtract their sum from 360°.",
              "**Exterior angles:** sum of exterior angles of any quadrilateral = 360° (same as any polygon).",
            ],
          },
          {
            subTitle: "Special quadrilateral angle rules",
            bullets: [
              "**Parallelogram — opposite angles equal:** angle A = angle C; angle B = angle D.",
              "**Parallelogram — co-interior angles:** angle A + angle B = 180° (adjacent angles are supplementary).",
              "**Rhombus:** same rules as parallelogram; additionally, diagonals bisect the vertex angles.",
              "**Trapezium — co-interior angles:** the two angles between the parallel sides and the non-parallel side sum to 180°.",
              "**Kite — equal angles:** the two angles at the vertices between the unequal sides are equal.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using 180° instead of 360° for a quadrilateral:** triangles use 180°; quadrilaterals use 360°.",
              "**Confusing co-interior with alternate angles:** co-interior angles sum to 180°; alternate angles are equal.",
              "**Assuming all parallelogram angles are equal:** only opposite angles are equal; adjacent angles are supplementary.",
              "**Not using special properties:** when a shape is identified as a specific quadrilateral, use its properties to reduce unknowns.",
            ],
          },
        ],
        examinerTips: [
          "Name the quadrilateral type first — this tells you which extra angle properties beyond the 360° sum apply.",
          "In a parallelogram, label opposite angles equal and adjacent angles supplementary before writing any equation.",
          "Show the angle sum equation explicitly: a + b + c + d = 360° with values substituted.",
          "For a kite, identify which pair of opposite angles is equal before calculating.",
        ],
        commonMistakes: [
          "Applying the triangle angle sum (180°) to a quadrilateral — a quadrilateral has four angles, not three.",
          "Labelling non-opposite parallelogram angles as equal — only opposite angles are equal; adjacent ones sum to 180°.",
        ],
        recap: [
          "The angles in a quadrilateral are x, 2x, 3x, and 4x. Find x and state each angle. [3]",
          "In a parallelogram, one angle is 65°. Find the other three angles with reasons. [3]",
          "Three angles of a quadrilateral are 72°, 115°, and 98°. Find the fourth angle. [2]",
          "A kite has angles 50°, 130°, 50°, and an unknown angle. Find the unknown angle and explain which property you used. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 91. Angles in Polygons
  // ─────────────────────────────────────────────────────────────
  {
    number: 91,
    title: "Angles in Polygons",
    section: "Geometry",
    topic: "Angle Rules",
    intro: `The interior and exterior angle formulas for polygons generalise the triangle and quadrilateral rules to any number of sides. These formulas are regularly tested on both IGCSE papers, often combined with algebra. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Angles in Polygons",
        body: `For any polygon with n sides:\n\n- **Sum of interior angles:** (n − 2) × 180°\n- **Each interior angle of a regular polygon:** (n − 2) × 180° ÷ n\n- **Sum of exterior angles:** always **360°** (for any convex polygon)\n- **Each exterior angle of a regular polygon:** 360° ÷ n\n- **Interior + exterior at each vertex = 180°** (they form a straight line)\n\nFinding the number of sides from an angle:\n- Given each interior angle I: n = 360° ÷ (180° − I)\n- Given each exterior angle E: n = 360° ÷ E\n\n**Worked example 1:** Find the interior angle of a regular 9-sided polygon (nonagon).\n(9 − 2) × 180° ÷ 9 = 7 × 180° ÷ 9 = 1260° ÷ 9 = **140°**.\n\n**Worked example 2:** Each interior angle of a regular polygon is 162°. Find n.\nExterior = 180° − 162° = 18°; n = 360° ÷ 18° = **20 sides**.`,
        groups: [
          {
            subTitle: "Interior angle formulas",
            bullets: [
              "**Interior angle sum:** (n − 2) × 180° — a pentagon has (5 − 2) × 180° = 540°.",
              "**Each interior angle (regular):** (n − 2) × 180° ÷ n — divide the total by n equal angles.",
              "**Interior angle for common polygons:** triangle 60°, square 90°, pentagon 108°, hexagon 120°, octagon 135°.",
              "**Irregular polygons:** sum still equals (n − 2) × 180°; individual angles are not equal.",
              "**Finding n from interior sum:** solve (n − 2) × 180° = given sum for n.",
            ],
          },
          {
            subTitle: "Exterior angle formulas",
            bullets: [
              "**Exterior angle sum:** always 360° for any convex polygon — independent of n.",
              "**Each exterior angle (regular):** 360° ÷ n.",
              "**Finding n from exterior angle:** n = 360° ÷ (each exterior angle).",
              "**Interior + exterior = 180°:** use this to convert between interior and exterior angles.",
              "**Exterior angle pattern:** as n increases, the exterior angle decreases; a triangle has 120°, a square 90°, a hexagon 60°.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Forgetting to subtract 2 from n:** the formula is (n − 2) × 180°, not n × 180°.",
              "**Using interior angle formula for exterior angle questions:** exterior angles use 360° ÷ n, not (n − 2) × 180° ÷ n.",
              "**Incorrect algebra when finding n:** when given the interior angle sum, divide by 180° first, then add 2.",
              "**Assuming irregular polygons have equal angles:** irregular polygons only guarantee the angle sum, not equal individual angles.",
            ],
          },
        ],
        examinerTips: [
          "Learn the angle sums for common polygons (triangle, quad, pentagon, hexagon, octagon) for quick Paper 1 recall.",
          "To find the number of sides, always use the exterior angle — it gives a direct formula n = 360° ÷ E.",
          "Show the formula application line: write (n − 2) × 180° = [value], then solve.",
          "For irregular polygons, use the sum formula to find one missing angle when all others are known.",
        ],
        commonMistakes: [
          "Calculating n × 180° instead of (n − 2) × 180° — the subtraction of 2 is essential and often omitted under exam pressure.",
          "Using 180° instead of 360° for the sum of exterior angles — exterior angles always total 360°, not 180°.",
        ],
        recap: [
          "Find the size of each interior and exterior angle of a regular 15-sided polygon. [3]",
          "The sum of the interior angles of a polygon is 1620°. How many sides does it have? [3]",
          "Each exterior angle of a regular polygon is 18°. Find the number of sides and each interior angle. [3]",
          "The interior angles of a hexagon are (2x + 10)°, (3x − 5)°, (x + 20)°, (2x + 15)°, (3x)°, and (x + 40)°. Find x. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 92. Angles in Parallel Lines
  // ─────────────────────────────────────────────────────────────
  {
    number: 92,
    title: "Angles in Parallel Lines",
    section: "Geometry",
    topic: "Angle Rules",
    intro: `When a straight line (a transversal) crosses two parallel lines, three pairs of angle relationships are created: alternate angles, corresponding angles, and co-interior angles. Identifying these pairs correctly and stating the right reason is essential for full marks. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Angles in Parallel Lines",
        body: `A **transversal** is any line that crosses two or more parallel lines. Parallel lines are marked with matching arrows.\n\nThree key angle relationships:\n\n1. **Alternate angles** (Z-angles): between the parallel lines, on opposite sides of the transversal. They are **equal**. Reason: "alternate angles, AB ∥ CD".\n\n2. **Corresponding angles** (F-angles): on the same side of the transversal, one between the lines and one outside. They are **equal**. Reason: "corresponding angles, AB ∥ CD".\n\n3. **Co-interior angles** (C-angles / same-side interior angles): between the parallel lines, on the same side of the transversal. They are **supplementary (sum to 180°)**. Reason: "co-interior angles, AB ∥ CD".\n\n**Worked example:** A transversal crosses parallel lines. One angle is 65°. Find the alternate, corresponding, and co-interior angles.\n- Alternate: **65°** (equal)\n- Corresponding: **65°** (equal)\n- Co-interior: 180° − 65° = **115°** (supplementary)`,
        groups: [
          {
            subTitle: "The three angle pair rules",
            bullets: [
              "**Alternate angles:** Z-shape; between the parallels; on opposite sides of transversal; always equal.",
              "**Corresponding angles:** F-shape; same side of transversal; one inside, one outside the parallels; always equal.",
              "**Co-interior angles:** C-shape; same side of transversal; both between the parallels; always sum to 180°.",
              "**Vertically opposite angles still apply** at each intersection point — not a parallel-line rule but used alongside.",
              "**Naming the lines:** always name the parallel lines in your reason (e.g. 'AB ∥ CD') for full marks.",
            ],
          },
          {
            subTitle: "Multi-step problems with parallel lines",
            bullets: [
              "**Extend lines or add parallel lines:** drawing an extra parallel line through a vertex can split an angle problem.",
              "**Combining rules:** one step may use alternate angles; the next may use angles on a straight line.",
              "**Algebraic parallel lines:** set equal (alternate/corresponding) or supplementary (co-interior) angle expressions.",
              "**Proving lines parallel:** if alternate angles are equal, or co-interior angles sum to 180°, the lines are parallel.",
              "**Multiple transversals:** deal with one transversal at a time and label each found angle.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Saying co-interior angles are equal:** they are supplementary (180°), not equal.",
              "**Giving a reason without naming the parallel lines:** 'alternate angles' alone is incomplete — name the lines.",
              "**Confusing alternate and corresponding:** alternate is the Z-shape (opposite sides); corresponding is the F-shape (same side).",
              "**Applying parallel line rules to non-parallel lines:** check that arrows appear on both lines before using these rules.",
            ],
          },
        ],
        examinerTips: [
          "Name the two parallel lines explicitly in every reason — 'alternate angles, PQ ∥ RS' scores the reason mark; 'alternate angles' alone does not.",
          "Use a different colour or symbol to mark each angle pair: one tick for alternate, two ticks for corresponding.",
          "Co-interior angles make a C-shape and their sum is 180°, not each equal to 90° — a frequent error.",
          "For proof-style questions, justify each step with a reason on the same line.",
        ],
        commonMistakes: [
          "Assuming co-interior angles are equal instead of supplementary — always set them up as summing to 180°.",
          "Applying parallel line rules at an intersection without confirming the lines are parallel (look for the arrow markers).",
        ],
        recap: [
          "A transversal crosses two parallel lines. One angle is 128°. Find the alternate, corresponding, and co-interior angles, giving reasons. [4]",
          "Find the value of x if two co-interior angles are (3x + 15)° and (2x − 5)°. [3]",
          "Explain why alternate angles formed by a transversal crossing two parallel lines must be equal. [2]",
          "Using parallel line rules, find all missing angles in a diagram where a transversal crosses two parallel lines creating angles of (5x + 10)° and (3x + 30)°, which are corresponding. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 93. Bearings
  // ─────────────────────────────────────────────────────────────
  {
    number: 93,
    title: "Bearings",
    section: "Geometry",
    topic: "Bearings & Circle Theorems",
    intro: `Bearings are a standardised way of describing direction as an angle measured clockwise from North. They are used in navigation and appear on IGCSE papers in both angle calculation and trigonometry contexts. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Bearings",
        body: `A **bearing** is a three-figure angle measured **clockwise** from **North**. All bearings are written with exactly three digits: 005°, 047°, 180°, 270°.\n\nCardinal directions as bearings:\n- North = 000°\n- East = 090°\n- South = 180°\n- West = 270°\n\n**Measuring a bearing:** start from North at the given point, rotate clockwise to the direction of travel, and read the angle.\n\n**Back bearing (reverse bearing):** the bearing from B to A, given the bearing from A to B.\n- If bearing A→B < 180°: back bearing = bearing + 180°\n- If bearing A→B ≥ 180°: back bearing = bearing − 180°\n\n**Worked example:** The bearing from A to B is 067°. Find the bearing from B to A.\n067° + 180° = **247°**.\n\n**Combining with trigonometry:** bearings questions often require finding distances or positions using the sine rule, cosine rule, or right-triangle trigonometry, with the bearing defining the angle between lines.`,
        groups: [
          {
            subTitle: "Rules for bearings",
            bullets: [
              "**Always three figures:** write 005° not 5°; 090° not 90°.",
              "**Clockwise from North:** North is always at the top; rotate clockwise to the direction of interest.",
              "**Back bearing:** add 180° if original < 180°; subtract 180° if original ≥ 180°.",
              "**Parallel North lines:** North lines at different points are parallel — use alternate and co-interior angle rules when two bearings are given.",
              "**Angle between two bearings:** subtract the smaller from the larger if both are measured from the same point.",
            ],
          },
          {
            subTitle: "Bearings combined with trigonometry",
            bullets: [
              "**Scale drawings:** when asked to draw, use a protractor and ruler; label North, measure clockwise.",
              "**Right-triangle problems:** identify the right angle from the bearing, then use sin, cos, or tan.",
              "**Non-right triangles:** use the sine rule (two angles, one side known) or cosine rule (two sides and included angle).",
              "**Finding the angle for the sine/cosine rule:** the angle between the two path directions is found using the difference of their bearings and the properties of North lines.",
              "**Speed-distance problems:** d = speed × time; then use bearings to find resultant direction.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Writing two-figure bearings:** 067° not 67° — always use three figures.",
              "**Measuring anticlockwise:** bearings are always clockwise from North.",
              "**Forgetting North is parallel:** when dealing with two locations, draw North lines at both and use parallel line rules.",
              "**Wrong back bearing calculation:** add 180° only if the original bearing is less than 180°; subtract if 180° or more.",
            ],
          },
        ],
        examinerTips: [
          "Draw a North line at every relevant point in a bearings diagram — this prevents confusion about which direction is North.",
          "Three-figure format is essential — lose no marks for format by always writing three digits.",
          "For back bearings, check if the original bearing is above or below 180° before deciding to add or subtract.",
          "In combined bearing and trigonometry questions, find the angle in the triangle first, then apply the appropriate formula.",
        ],
        commonMistakes: [
          "Measuring the bearing anticlockwise — bearings are only measured clockwise from North.",
          "Writing the back bearing as (original + 90°) — the correct adjustment is always ±180°, not 90°.",
        ],
        recap: [
          "The bearing from P to Q is 125°. Find the bearing from Q to P. [2]",
          "A ship sails 12 km on a bearing of 040° from port. How far north and how far east of port is it? [3]",
          "Town B is on a bearing of 310° from town A. Town C is on a bearing of 070° from town A. Find the angle BAC. [2]",
          "A and B are 15 km apart. The bearing from A to B is 055°. C is 10 km due east of A. Find the bearing from B to C, and the distance BC. [5]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 94. Circle Theorems
  // ─────────────────────────────────────────────────────────────
  {
    number: 94,
    title: "Circle Theorems",
    section: "Geometry",
    topic: "Bearings & Circle Theorems",
    intro: `Circle theorems are a set of angle and chord relationships that follow from the properties of circles. IGCSE questions require both calculating angles and giving the theorem name as a written reason — knowing every theorem by its exact name is as important as knowing the angle rule itself. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Circle Theorems",
        body: `The eight main circle theorems for IGCSE:\n\n1. **Angle at centre = 2 × angle at circumference** (subtended by the same arc).\n2. **Angle in a semicircle = 90°** (angle subtended by a diameter is always a right angle).\n3. **Angles in the same segment are equal** (angles subtended by the same chord on the same side).\n4. **Opposite angles in a cyclic quadrilateral sum to 180°** (all four vertices lie on the circle).\n5. **Tangent–radius angle = 90°** (a tangent to a circle is perpendicular to the radius at the point of contact).\n6. **Two tangents from an external point are equal** (the two tangent lengths from the same point are equal).\n7. **Alternate segment theorem:** the angle between a tangent and a chord equals the inscribed angle in the alternate segment.\n8. **Perpendicular from centre bisects chord** (a perpendicular from the centre to a chord bisects that chord).\n\n**Worked example (Theorem 1):** Angle AOB (at centre) = 136°. Find angle APB (at circumference, same arc).\nAngle APB = 136° ÷ 2 = **68°**. Reason: "angle at centre = twice angle at circumference".\n\n**Worked example (Theorem 4):** Cyclic quadrilateral ABCD. Angle A = 3x, angle C = x + 60. Find x.\n3x + x + 60 = 180 → 4x = 120 → **x = 30°**.`,
        groups: [
          {
            subTitle: "Theorems involving the centre",
            bullets: [
              "**Angle at centre theorem:** central angle = 2 × inscribed angle, both subtended by the same arc.",
              "**Angle in a semicircle:** when the chord is the diameter, the inscribed angle is always 90°.",
              "**Perpendicular from centre to chord:** bisects the chord; the two half-lengths are equal.",
              "**Equal chords:** chords equidistant from the centre are equal in length; equal chords are equidistant from the centre.",
            ],
          },
          {
            subTitle: "Theorems involving tangents and segments",
            bullets: [
              "**Tangent–radius:** a tangent and the radius to the point of contact form a 90° angle.",
              "**Two tangents from external point:** equal in length; the line from the external point to the centre bisects the angle between the tangents.",
              "**Alternate segment theorem:** angle between tangent and chord = inscribed angle in the alternate segment.",
              "**Angles in same segment:** all inscribed angles subtended by the same chord (same side) are equal.",
              "**Cyclic quadrilateral:** opposite angles sum to 180°; exterior angle of a cyclic quad = interior opposite angle.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using the angle at centre as the angle at circumference:** the centre angle is twice the circumference angle, not equal.",
              "**Missing the reason in multi-step problems:** every angle found must be supported by the theorem name.",
              "**Applying cyclic quad rule to a non-cyclic quadrilateral:** check all four vertices lie on the circle.",
              "**Alternate segment confusion:** identify which segment is 'alternate' — it is the one on the opposite side of the chord from the angle in question.",
            ],
          },
          {
            subTitle: "Combining theorems in multi-step problems",
            bullets: [
              "**Chain approach:** find one angle using one theorem, then use it to find the next with a different theorem.",
              "**Isosceles triangles inside circles:** two radii are equal, so a triangle formed by two radii and a chord is isosceles.",
              "**Tangent combined with alternate segment:** the alternate segment angle equals the tangent–chord angle; use both in sequence.",
              "**Algebraic circle theorem questions:** set up equations using the theorem as the relationship and solve.",
            ],
          },
        ],
        examinerTips: [
          "Learn the exact name of every theorem — 'angle in alternate segment' earns a mark; 'angle is equal' does not.",
          "Every step in a circle theorem proof must have a reason — write the theorem name on the same line as the angle calculation.",
          "The angle at the centre is always larger than the angle at the circumference (for the same arc) — use this as a sanity check.",
          "For tangent problems, draw the radius to the point of tangency and mark the right angle before calculating.",
        ],
        commonMistakes: [
          "Halving the circumference angle instead of the centre angle — the centre angle is double the circumference angle.",
          "Forgetting to give a theorem reason for each step — numerical answers without named theorems are penalised.",
        ],
        recap: [
          "O is the centre of a circle. Angle AOB = 112°. Find the angle APB where P is on the major arc. Give a reason. [2]",
          "ABCD is a cyclic quadrilateral. Angle ABC = 4x + 10 and angle ADC = 2x + 50. Find x and both angles. [3]",
          "A tangent from point T touches the circle at P. The radius OP = 5 cm and OT = 13 cm. Find the length TP. [3]",
          "Using the alternate segment theorem, explain why the angle between a tangent and a chord equals the inscribed angle in the opposite segment. State the theorem and show it applies to a specific example. [4]",
        ],
      },
    ],
  },
];
