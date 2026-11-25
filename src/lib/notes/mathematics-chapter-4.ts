import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math4-construction-arcs.webp",
    alt: "A triangle under construction on white paper, three faint compass arcs still visible at the corners, a pair of compasses and a ruler lying beside it",
    caption: "Leave the arcs in — they carry the mark",
  },
  {
    src: "math4-net-folded.webp",
    alt: "A card cuboid net half-folded on a desk, six rectangles creased along their shared edges with one flap still flat",
    caption: "Nets turn a solid into an area",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math4-parallel-transversal.webp",
    alt: "Two straight metal rails running parallel across a workbench with a third bar laid diagonally across both, forming matching angles at each crossing",
    caption: "One transversal, four angle pairs",
  },
  {
    src: "math4-similar-triangles-shadow.webp",
    alt: "A vertical pole and a small ruler standing in the sun on level ground, each casting a triangular shadow that shares the same angle at the top",
    caption: "Same angles, scaled lengths",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math4-circle-chords.webp",
    alt: "A circular wooden board on a workbench with chords and radii drawn in pencil from points on the rim to a marked centre, forming inscribed angles",
    caption: "Every theorem is about the centre",
  },
  {
    src: "math4-tangent-wheel.webp",
    alt: "A bicycle wheel standing upright with a taut wire touching the tyre at exactly one point and a spoke running to that same point",
    caption: "Tangent meets radius at 90°",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Geometry",
  intro: `Geometry marks are split between **knowing the words** and **giving the reason**. A correct angle with no reason scores half or nothing.\n\nThree-letter notation (angle ABC) is required, and reasons must use the exact property named in the syllabus.`,
  subheadings: [
    {
      title: "Language, Constructions, Nets and Bearings",
      body: `### The Vocabulary Is Assessed

Use and interpret **point, vertex, line, plane (Extended), parallel, perpendicular, perpendicular bisector (Extended), bearing, right angle, acute, obtuse and reflex angles, interior and exterior angles, similar, congruent and scale factor**. You are **not** required to prove two shapes congruent.

**Triangles**: equilateral, isosceles, scalene, right-angled. **Quadrilaterals**: square, rectangle, kite, rhombus, parallelogram, trapezium. **Polygons**: regular and irregular, pentagon, hexagon, octagon, decagon. **Solids**: cube, cuboid, prism, cylinder, pyramid, cone, sphere, plus **hemisphere and frustum at Extended**; faces, surfaces, edges.

**Circle words**: centre, radius (radii), diameter, circumference, semicircle, chord, tangent, arc (**major and minor at Extended**), sector, segment.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Constructions and scale drawings",
          bullets: [
            "Measure and draw lines and angles; **construct a triangle given all three sides** using ruler and pair of compasses only, and **leave the construction arcs visible**.",
            "Perpendicular-bisector and angle-bisector constructions are **not required** — but a ruler must be used for every straight edge.",
            "Draw, use and interpret **nets** of cubes, cuboids, prisms and pyramids, and take measurements from a net to find volume and surface area.",
            "**Scale drawings**: interpret a given scale, and use **three-figure bearings measured clockwise from north, 000° to 360°**. If the bearing of B from A is 025°, the bearing of A from B is **205°** — add or subtract 180°.",
          ],
        },
      ],
    },
    {
      title: "Angles, Symmetry and Similarity",
      body: `### Reasons, Listed

Angle facts you must quote by name: **angles at a point sum to 360°**, **angles on a straight line sum to 180°**, **vertically opposite angles are equal**, **angle sum of a triangle 180°**, **angle sum of a quadrilateral 360°**.

In parallel lines: **corresponding angles equal**, **alternate angles equal**, **co-interior angles sum to 180°**.

For regular polygons learn the trio: **interior angle sum = (n – 2) × 180°**, **each exterior angle = 360°/n**, and interior + exterior on the same vertex = **180°**. Extended extends this to irregular polygons.

**Symmetry**: line symmetry and **order of rotational symmetry**; Extended adds **planes and axes of symmetry** of prisms, cylinders, pyramids and cones.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Similarity",
          bullets: [
            "Core: **calculate lengths of similar shapes** using the scale factor.",
            "Extended: link the measures — **length ratio k, area ratio k², volume ratio k³** — and use them in reverse to find a scale factor from an area or volume ratio.",
            "Extended also requires **showing two triangles are similar with geometric reasons** (equal angles is the usual route), and solving problems where the similar triangles are hidden inside one another, such as a flagpole and its shadow.",
          ],
        },
      ],
    },
    {
      title: "Circle Theorems",
      body: `### Six for the Angles, Three for the Symmetry

Core knows only two: **angle in a semicircle = 90°** and **angle between tangent and radius = 90°**.

Extended adds **angle at the centre is twice the angle at the circumference**, **angles in the same segment are equal**, **opposite angles of a cyclic quadrilateral sum to 180°**, and the **alternate segment theorem** (angle between a tangent and a chord equals the angle in the alternate segment).

From symmetry: **equal chords are equidistant from the centre**, **the perpendicular bisector of a chord passes through the centre**, and **tangents from an external point are equal in length**.`,
      figure: panelC,
      groups: [
        {
          subTitle: "How to write the answer",
          bullets: [
            "Circle the **equal angles or the chord** you are using, state the theorem in words, then give the number. One reason per step; examiners mark the reason and the value separately.",
            "The most reliable chain: find an angle at the centre, halve it for the angle at the circumference, then use a triangle's 180° to finish.",
            "For tangent questions, **draw the radius to the point of contact** — it creates the 90° you need, and the isosceles triangles formed by two radii give equal base angles.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Alternate angles and alternate **segment** theorem are different facts with the same adjective — name the right one.",
            "A quadrilateral with opposite angles 100° and 80° is cyclic only if the pair you add are **opposite**, not adjacent.",
            "Polygon questions ask for interior **or** exterior angles; (n – 2) × 180° is the **sum**, 360°/n is **one exterior** angle.",
            "Bearings must be three digits and clockwise: an answer of 25° or N25°E scores zero.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_4 = chapterFour;
