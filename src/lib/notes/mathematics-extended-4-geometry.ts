import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 4: Geometry
 * Includes all Core content + Extended-only circle theorems:
 * Angles in Same Segment, Cyclic Quadrilaterals, Tangent-Chord Angle
 */
export const MATHEMATICS_EXTENDED_GEOMETRY: Chapter[] = [
  {
    number: 30,
    title: "Symmetry & Shape Properties",
    section: "4. Geometry",
    topic: "Symmetry & Shapes",
    intro:
      "Understanding the properties of 2D shapes and symmetry is fundamental to geometry. This chapter covers lines of symmetry, rotational symmetry, and the properties of key polygons.",
    subheadings: [
      {
        title: "Lines of Symmetry & Rotational Symmetry",
        body:
          "**Line of symmetry:** A line that divides a shape into two mirror-image halves.\n\n" +
          "| Shape | Lines of Symmetry | Order of Rotational Symmetry |\n" +
          "|-------|-------------------|------------------------------|\n" +
          "| Equilateral triangle | 3 | 3 |\n" +
          "| Square | 4 | 4 |\n" +
          "| Rectangle | 2 | 2 |\n" +
          "| Isosceles triangle | 1 | 1 |\n" +
          "| Regular pentagon | 5 | 5 |\n" +
          "| Regular $n$-gon | $n$ | $n$ |\n" +
          "| Parallelogram | 0 | 2 |\n" +
          "| Rhombus | 2 | 2 |\n\n" +
          "**Order of rotational symmetry:** The number of positions a shape can be rotated (less than 360°) to look identical. All shapes have at least order 1.",
        examinerTips: [
          "Rotational symmetry order 1 means no rotational symmetry (only 360° maps it to itself).",
          "A circle has infinite lines of symmetry and infinite rotational symmetry order.",
        ],
        commonMistakes: [
          "Confusing lines of symmetry with lines that pass through the centre — a parallelogram's diagonals are NOT lines of symmetry.",
        ],
        recap: [
          "State the number of lines of symmetry and order of rotational symmetry for: (a) a kite (b) a regular hexagon (c) an isosceles trapezium.",
        ],
      },
      {
        title: "Properties of 2D Shapes",
        body:
          "**Key quadrilateral properties:**\n\n" +
          "- **Square:** 4 equal sides, 4 right angles, diagonals bisect at 90° and are equal.\n" +
          "- **Rectangle:** Opposite sides equal, 4 right angles, diagonals equal and bisect each other.\n" +
          "- **Parallelogram:** Opposite sides parallel and equal, opposite angles equal, diagonals bisect each other.\n" +
          "- **Rhombus:** 4 equal sides, opposite angles equal, diagonals bisect at 90°.\n" +
          "- **Trapezium:** One pair of parallel sides.\n" +
          "- **Isosceles trapezium:** One pair of parallel sides, non-parallel sides equal, diagonals equal.\n" +
          "- **Kite:** Two pairs of adjacent equal sides, one pair of equal opposite angles, one diagonal bisects the other at 90°.",
        examinerTips: [
          "Learn which diagonals bisect at right angles: rhombus and kite (both).",
          "In a parallelogram, alternate angles between parallel sides are equal.",
        ],
        commonMistakes: [
          "Assuming all quadrilaterals have equal diagonals — only rectangles and squares do.",
        ],
        recap: [
          "ABCD is a rhombus with diagonals of length 10 cm and 24 cm. Find: (a) the area of the rhombus (b) the length of one side.",
        ],
      },
    ],
  },
  {
    number: 31,
    title: "Angle Properties",
    section: "4. Geometry",
    topic: "Basic Angle Properties",
    intro:
      "Angle relationships form the basis of geometrical reasoning. This chapter covers all key angle facts and their proofs.",
    subheadings: [
      {
        title: "Basic Angle Properties",
        body:
          "**Fundamental angle facts:**\n\n" +
          "- Angles on a straight line sum to $180°$.\n" +
          "- Angles at a point sum to $360°$.\n" +
          "- Vertically opposite angles are equal.\n" +
          "- Angles in a triangle sum to $180°$.\n" +
          "- Angles in a quadrilateral sum to $360°$.\n\n" +
          "**Exterior angle of a triangle:** An exterior angle equals the sum of the two non-adjacent interior angles.\n\n" +
          "**Isosceles triangle:** Base angles are equal; the apex angle bisects the triangle symmetrically.",
        examinerTips: [
          "Always state the angle rule used in geometry proofs — 'because angles on a straight line sum to 180°'.",
          "Vertically opposite angles are formed when two lines intersect — the angles across from each other are equal.",
        ],
        commonMistakes: [
          "Assuming supplementary angles must be on a straight line — they just need to sum to 180°.",
        ],
        recap: [
          "Triangle PQR has $\\angle P = 3x$, $\\angle Q = 2x + 10$, $\\angle R = x + 20$. Find $x$ and each angle.",
        ],
      },
      {
        title: "Angles in Polygons & Parallel Lines",
        body:
          "**Polygons — interior angle sum:** $(n-2) \\times 180°$ for an $n$-sided polygon.\n\n" +
          "**Regular polygon — each interior angle:** $\\frac{(n-2) \\times 180°}{n}$\n\n" +
          "**Exterior angles of any convex polygon:** sum = $360°$.\n" +
          "For a regular $n$-gon, each exterior angle $= \\frac{360°}{n}$.\n\n" +
          "**Angles with parallel lines:**\n" +
          "- **Corresponding angles** (F-shape): equal.\n" +
          "- **Alternate angles** (Z-shape): equal.\n" +
          "- **Co-interior angles** (C-shape): supplementary (sum to $180°$).",
        examinerTips: [
          "Interior angle + exterior angle = $180°$ for any polygon.",
          "For parallel line problems, always identify which angle pair applies (F, Z, or C) before calculating.",
        ],
        commonMistakes: [
          "Confusing corresponding and alternate angles — corresponding are on the same side of the transversal; alternate are on opposite sides.",
          "Using the formula for interior angle sum without including all sides in $n$.",
        ],
        recap: [
          "Find the interior and exterior angles of a regular octagon.",
          "Two parallel lines are cut by a transversal. If a co-interior angle is $73°$, find the other co-interior angle.",
        ],
      },
    ],
  },
  {
    number: 32,
    title: "Bearings, Constructions & Scale Drawings",
    section: "4. Geometry",
    topic: "Bearings, Constructions & Scale Drawings",
    intro:
      "Bearings and scale drawings have direct applications in navigation and geography. Accurate constructions using compass and ruler are also examinable.",
    subheadings: [
      {
        title: "Bearings",
        body:
          "A **bearing** is a direction measured as an angle clockwise from North, always written with 3 digits.\n\n" +
          "- North = $000°$, East = $090°$, South = $180°$, West = $270°$.\n\n" +
          "**Back bearings:** To find the bearing from $B$ to $A$ given the bearing from $A$ to $B$:\n" +
          "- If bearing from $A$ to $B$ < $180°$: add $180°$.\n" +
          "- If bearing from $A$ to $B$ > $180°$: subtract $180°$.\n\n" +
          "**Example:** Bearing from $A$ to $B$ is $065°$. Bearing from $B$ to $A$ = $065° + 180° = 245°$.",
        examinerTips: [
          "Always measure bearings clockwise from North.",
          "Use a 3-digit format: $040°$ not $40°$.",
        ],
        commonMistakes: [
          "Measuring anticlockwise instead of clockwise.",
          "Not writing bearings with 3 digits.",
        ],
        recap: [
          "A ship sails on a bearing of $125°$. What is the bearing for the return journey?",
          "Town $B$ is on a bearing of $310°$ from town $A$. What bearing is $A$ from $B$?",
        ],
      },
      {
        title: "Geometric Constructions & Scale Drawings",
        body:
          "**Key constructions (using ruler and compasses only):**\n\n" +
          "- **Perpendicular bisector** of a line segment: draw arcs above and below from both endpoints.\n" +
          "- **Angle bisector:** draw arc from vertex, then arcs from the two intersection points.\n" +
          "- **60° angle:** construct equilateral triangle construction.\n" +
          "- **Perpendicular from a point to a line.**\n\n" +
          "**Scale drawings:** Use a given scale to convert real distances to drawing distances.\n" +
          "Scale $1 : 500$: $1$ cm on drawing = $500$ cm = $5$ m in reality.\n\n" +
          "**Loci:** The set of all points satisfying a given condition.\n" +
          "- Fixed distance from a point: circle.\n" +
          "- Equidistant from two points: perpendicular bisector.\n" +
          "- Equidistant from two lines: angle bisector.",
        examinerTips: [
          "Leave all construction arcs visible — erasing them loses marks.",
          "For loci questions, identify the geometric shape first, then draw it accurately.",
        ],
        commonMistakes: [
          "Erasing construction arcs — these are part of the answer.",
          "Drawing freehand instead of using ruler and compasses for construction problems.",
        ],
        recap: [
          "Construct the perpendicular bisector of a line segment $AB$ of length $8$ cm.",
          "On a map with scale $1 : 25000$, the distance between two lakes is $12.4$ cm. Find the real distance in km.",
        ],
      },
    ],
  },
  {
    number: 33,
    title: "Circle Theorems",
    section: "4. Geometry",
    topic: "Circle Theorems",
    intro:
      "Circle theorems describe angle and length relationships in circles. The Extended course adds three theorems beyond Core: angles in the same segment, cyclic quadrilaterals, and the tangent-chord angle (alternate segment theorem).",
    subheadings: [
      {
        title: "Angle in a Semicircle & Tangent-Radius",
        body:
          "**Core Circle Theorems:**\n\n" +
          "**1. Angle in a semicircle:** The angle subtended by a diameter at the circumference is $90°$.\n" +
          "If $AB$ is a diameter, then $\\angle ACB = 90°$ for any point $C$ on the circumference.\n\n" +
          "**2. Tangent and radius are perpendicular:** A tangent to a circle is perpendicular to the radius at the point of contact.\n" +
          "If $OP$ is a radius and $PT$ is a tangent, then $\\angle OPT = 90°$.\n\n" +
          "**3. Angle at centre is twice the angle at the circumference:**\n" +
          "The angle at the centre is twice the angle at the circumference when both are subtended by the same arc.\n" +
          "If $\\angle AOB = 2 \\times \\angle ACB$ where $O$ is the centre and $C$ is on the major arc.",
        examinerTips: [
          "Always state the theorem name or description when explaining your reasoning.",
          "The angle at centre theorem applies when the angles are subtended by the same chord/arc.",
        ],
        commonMistakes: [
          "Applying the angle at centre theorem when the centre is NOT one of the three points.",
        ],
        recap: [
          "$O$ is the centre of a circle. $\\angle AOB = 110°$. Find $\\angle ACB$ where $C$ is on the major arc.",
          "$PT$ is a tangent to a circle, centre $O$. $OP = 7$ cm and $OT = 25$ cm. Find $PT$.",
        ],
      },
      {
        title: "Angles in the Same Segment",
        body:
          "**Theorem:** Angles subtended by the same chord at the circumference (on the same side) are equal.\n\n" +
          "If $\\angle ACB$ and $\\angle ADB$ are both inscribed angles subtended by chord $AB$ from the same side (same segment), then:\n" +
          "$$\\angle ACB = \\angle ADB$$\n\n" +
          "**Proof:** Both angles equal half the central angle subtended by arc $AB$ (using the angle at centre theorem).\n\n" +
          "**Example:** $A$, $B$, $C$, $D$ all lie on a circle. $\\angle CAB = 35°$ and $\\angle CDB$ is in the same segment as $\\angle CAB$, subtended by arc $CB$. Find $\\angle CDB$.\n" +
          "By the theorem: $\\angle CDB = \\angle CAB = 35°$.",
        examinerTips: [
          "Both angles must be in the **same** segment (same side of the chord) for them to be equal — angles in opposite segments are supplementary.",
          "Identify which chord creates the two angles to verify they are subtended by the same chord.",
        ],
        commonMistakes: [
          "Applying 'angles in the same segment' when the angles are on opposite sides of the chord — they add to $180°$, not equal.",
        ],
        recap: [
          "Points $A$, $B$, $P$, $Q$ lie on a circle. $\\angle PAB = 42°$. Find $\\angle PQB$, giving a reason.",
          "In the same circle, $\\angle APB = 68°$. Find $\\angle AQB$ where $Q$ is on the same arc as $P$.",
        ],
      },
      {
        title: "Cyclic Quadrilaterals",
        body:
          "A **cyclic quadrilateral** is a quadrilateral with all four vertices on a circle.\n\n" +
          "**Theorem 1 — Opposite angles:** In a cyclic quadrilateral, opposite angles are supplementary:\n" +
          "$$\\angle A + \\angle C = 180° \\quad \\text{and} \\quad \\angle B + \\angle D = 180°$$\n\n" +
          "**Theorem 2 — Exterior angle:** The exterior angle of a cyclic quadrilateral equals the interior opposite angle.\n\n" +
          "**Example:** In cyclic quadrilateral $ABCD$, $\\angle A = 85°$ and $\\angle B = 70°$.\n" +
          "$\\angle C = 180° - 85° = 95°$ and $\\angle D = 180° - 70° = 110°$.\n\n" +
          "**Why?** The two arcs that the angle pairs share together make the full circle ($360°$), and each angle is half its arc's central angle, so pairs sum to $180°$.",
        examinerTips: [
          "If a quadrilateral is cyclic, label opposite angles and check they sum to $180°$ — this can confirm whether it's cyclic.",
          "The exterior angle property is useful when given an exterior angle: set it equal to the interior opposite angle.",
        ],
        commonMistakes: [
          "Assuming all quadrilaterals inscribed in circles have all angles summing to $360°$ (they all do — but it's the OPPOSITE pairs that sum to $180°$, which is the special property).",
        ],
        recap: [
          "$PQRS$ is a cyclic quadrilateral. $\\angle P = 3x + 10°$ and $\\angle R = x + 50°$. Find $x$.",
          "In a cyclic quadrilateral, $\\angle A = 112°$ and $\\angle B = 83°$. Find all four angles.",
        ],
      },
      {
        title: "Tangent-Chord Angle (Alternate Segment Theorem)",
        body:
          "**Alternate Segment Theorem (Tangent-Chord Angle):**\n\n" +
          "The angle between a tangent to a circle and a chord drawn from the point of tangency equals the inscribed angle subtended by the chord on the opposite side.\n\n" +
          "In other words: the angle in the **alternate segment** equals the angle between the tangent and the chord.\n\n" +
          "If $PT$ is a tangent at point $T$ and $TC$ is a chord:\n" +
          "- $\\angle PTC$ (between tangent and chord) = $\\angle TBC$ (angle in the alternate segment, where $B$ is any point on the arc on the other side of chord $TC$).\n\n" +
          "**Example:** Tangent at $T$, chord $TR$. $\\angle PTR = 55°$. Find $\\angle TSR$ where $S$ is in the alternate segment.\n" +
          "$\\angle TSR = 55°$ (alternate segment theorem).",
        examinerTips: [
          "Identify the chord clearly — the alternate segment is the segment on the opposite side of the chord from where the tangent 'came from'.",
          "Often combined with the tangent-radius theorem — look for right angles where the tangent meets the radius.",
        ],
        commonMistakes: [
          "Confusing which segment is the 'alternate' one — it's on the other side of the chord from the tangent.",
          "Using this theorem when the line is not a tangent — always confirm the line just touches the circle.",
        ],
        recap: [
          "$TA$ is a tangent to the circle at $A$. $AB$ is a chord. $\\angle TAB = 48°$. Find $\\angle ACB$ where $C$ is in the alternate segment.",
          "The tangent at $P$ makes an angle of $65°$ with chord $PQ$. What is the angle subtended by $PQ$ in the alternate segment?",
        ],
      },
    ],
  },
];
