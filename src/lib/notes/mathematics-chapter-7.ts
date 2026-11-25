import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math7-mirror-symmetry.webp",
    alt: "A butterfly resting on a white card with a vertical mirror stood along its body, the wings and their reflection meeting at the mirror line",
    caption: "Reflection: equal distance, opposite side",
  },
  {
    src: "math7-carousel-rotation.webp",
    alt: "A wooden model carousel with carved horses hanging from the ends of spokes around a central pole",
    caption: "Rotation needs centre, angle, direction",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math7-boat-drift.webp",
    alt: "A model boat on a chart, with a straight arrow drawn from its bow across the water and a second arrow angled sideways from the same point",
    caption: "Two vectors, one resultant",
  },
  {
    src: "math7-grid-arrows.webp",
    alt: "Squared paper with several coloured arrows of different lengths and directions drawn between grid intersections, one arrow a doubled copy of another",
    caption: "Column form: x across, y up",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math7-parallelogram-frame.webp",
    alt: "A wooden parallelogram frame lying flat on a table with two thin wire diagonals stretched between opposite corners, meeting at a marked midpoint",
    caption: "The diagonal midpoint is a vector proof",
  },
  {
    src: "math7-position-pin.webp",
    alt: "A corkboard with pins at several points and coloured string running from a single marked origin pin out to each of the others",
    caption: "A position vector starts at O",
  },
]);

const chapterSeven: Chapter = {
  number: 7,
  title: "Transformations and Vectors",
  intro: `Transformations are described in **full sentences with exact nouns**; a half-named transformation earns no mark. Vectors then say the same thing with numbers.\n\nCore never combines transformations and only uses **positive and fractional** scale factors; Extended allows combinations and **negative** scale factors.`,
  subheadings: [
    {
      title: "Reflection, Rotation, Enlargement, Translation",
      body: `### What Each One Demands You State

**Reflection** — give the **equation of the mirror line** (x = 3, y = –1, y = x). Core uses vertical or horizontal lines; Extended may reflect in any straight line. Every point and its image are **equidistant from the line, on opposite sides**.

**Rotation** — give the **centre**, the **angle**, and the **direction** (clockwise or anticlockwise). Core rotates about the origin, vertices or midpoints of edges through multiples of 90°; Extended uses any centre.

**Enlargement** — give the **centre of enlargement** and the **scale factor**. Distances from the centre multiply by k; **Extended allows negative k**, which puts the image on the far side of the centre.

**Translation** — describe with a **column vector** xy, "a units right and b units up". A ruler is required for all straight edges.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Checking your own drawing",
          bullets: [
            "Reflection: join a point to its image — the mirror line must be the **perpendicular bisector** of that join.",
            "Rotation: measure the angle from centre-to-point to centre-to-image; all such angles must be equal and all distances from the centre unchanged.",
            "Enlargement: rays drawn from the centre through each vertex must pass through the matching image vertex, and every length is **k times** the original.",
            "Combination questions (Extended) ask you to state one transformation that replaces two — usually a translation vector equal to the sum of the two, or a single rotation.",
          ],
        },
      ],
    },
    {
      title: "Vector Arithmetic and Magnitude",
      body: `### Notation First

A translation is written **x/y as a column vector**, or as **AB** (from A to B), or as **a** in bold. Vectors printed as AB or a are the syllabus convention.

**Addition**: place the x-components and y-components in separate columns and add. **Subtraction**: reverse the second vector, then add. **Scalar multiplication**: multiply both components, which stretches the arrow and keeps it parallel (a negative scalar reverses the direction).

**Magnitude**: **|xy| = √(x² + y²)**, written with modulus signs — |a| is the magnitude of a, |AB| the length of AB.`,
      figure: panelB,
      groups: [
        {
          subTitle: "The three habits that keep marks",
          bullets: [
            "AB and BA are **negatives of each other** — read the order of the letters before you write anything.",
            "Magnitude is a **length**, so it is never negative, and it comes out of Pythagoras, not from adding x and y.",
            "A unit vector has magnitude 1; a vector parallel to a given one is any **scalar multiple** of it, which is how Extended answers 'show these vectors are parallel'.",
          ],
        },
      ],
    },
    {
      title: "Vector Geometry",
      body: `### Prove It Without Measuring

Represent vectors by **directed line segments** and use **position vectors** from an origin O. Express a required vector as the **sum or difference of two or more coplanar vectors**, usually the two named in the question.

Then reason: **show two vectors are parallel** by proving one is a scalar multiple of the other; **show three points are collinear** by proving one join is a multiple of another **and** that they share a point; and solve problems involving **ratio and similarity**, where a point dividing AB in the ratio 2 : 1 sits at a + (2/3)(b – a).`,
      figure: panelC,
      groups: [
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Collinearity needs the **shared point** as well as the multiple — PQ = 2QR alone does not prove P, Q and R lie on one line.",
            "In a closed loop, add round the shape and the total must be zero; a non-zero answer means one arrow was read backwards.",
            "Enlargement with scale factor 1/2 is a **reduction** but still an enlargement — saying 'it gets smaller' with no centre and no factor scores nothing.",
            "A rotation of 90° clockwise equals **270° anticlockwise**; state whichever the question asked for.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_7 = chapterSeven;
