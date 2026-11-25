import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math3-gradient-train.webp",
    alt: "A freight train climbing a straight viaduct against a clear sky, the rails forming one steady rising line",
    caption: "Gradient is rise over run",
  },
  {
    src: "math3-graph-paper-line.webp",
    alt: "Graph paper with x and y axes drawn in pencil and a single straight line crossing the axes, a ruler and 2B pencil beside it",
    caption: "y = mx + c reads off the page",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math3-midpoint-string.webp",
    alt: "A piece of string stretched taut between two pins on a corkboard, with a small bead slid to the exact centre of the span",
    caption: "Midpoint averages each coordinate",
  },
  {
    src: "math3-right-triangle-grid.webp",
    alt: "A slanted line segment drawn between two points on squared paper with the horizontal and vertical legs added in pencil to form a right triangle",
    caption: "Length is Pythagoras in coordinates",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math3-parallel-lanes.webp",
    alt: "A row of equally spaced straight swimming-pool lane ropes seen from above, all running in the same direction and never meeting",
    caption: "Parallel means identical gradient",
  },
  {
    src: "math3-perpendicular-compass.webp",
    alt: "A geometry construction on white paper: two crossing arcs above and below a line segment joined by a fresh pencil line, with a pair of compasses resting nearby",
    caption: "The bisector is the perpendicular",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Coordinate Geometry",
  intro: `One grid, four questions: what is the gradient, how long is it, where is its middle, and what is its equation.\n\nCore asks for gradients read off a grid and equations in the form y = mx + c; Extended adds two-point gradients, length, midpoint and perpendicular lines.`,
  subheadings: [
    {
      title: "Coordinates, Gradient and Drawing Lines",
      body: `### Four Numbers Describe a Line

Use and interpret **Cartesian coordinates in two dimensions**, including negatives and points on the axes.

Draw straight-line graphs for linear equations. Core gives them as **y = mx + c** (y = –2x + 5) or a table of values; Extended also uses **y = 7 – 4x** and **3x + 2y = 5**, so rearrange into y = mx + c first and read **m** and **c**.

**Gradient** = vertical change ÷ horizontal change = **(y₂ – y₁) ÷ (x₂ – x₁)**, measured between any two points on the line. Uphill right is **positive**, downhill right **negative**, horizontal is **0**, and a vertical line has **undefined** gradient.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Reading a line off a graph",
          bullets: [
            "Choose points on **grid intersections** so the differences are exact; a triangle with a negative numerator and positive denominator gives a negative gradient.",
            "The **y-intercept** is where the line meets the y-axis — read it directly from c in y = mx + c, and the **x-intercept** by setting y = 0.",
            "Questions may ask for the gradient or intercept **from the equation alone**, e.g. for y = 6x + 3 the gradient is 6 and the intercept is (0, 3); for 5x + 4y = 8 rearrange to y = –(5/4)x + 2 first.",
          ],
        },
      ],
    },
    {
      title: "Length and Midpoint of a Segment",
      body: `### Two Formulas, Both Derived

**Length** of a segment between (x₁, y₁) and (x₂, y₂): treat the segment as the hypotenuse of a right triangle, so **length = √((x₂ – x₁)² + (y₂ – y₁)²)**.

**Midpoint**: average each coordinate, **((x₁ + x₂)/2, (y₁ + y₂)/2)**.

Neither formula is on the List of formulas for coordinate geometry — they are knowledge you must carry in, and both come from Pythagoras and equal steps.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Working them cleanly",
          bullets: [
            "Keep the squares exact: differences of negative coordinates add, so between (–3, 8) and (9, –2) the horizontal change is **12** and the vertical change is **–10**.",
            "Leave the length in **surd form** if the question asks for an exact answer: √244 = **2√61**, and only then give a decimal.",
            "A midpoint is a **point**, written with brackets and a comma; a length is a **number**, and losing the units or the brackets each costs a mark.",
          ],
        },
      ],
    },
    {
      title: "Equations, Parallel and Perpendicular Lines",
      body: `### m Is the Whole Story

Obtain the equation of a line from a graph, from a gradient and a point, or from two points. Give equations in **fully simplified form**, and accept the forms **y = mx + c**, **ax + by = c** and **x = k** for a vertical line.

**Parallel** lines have the **same gradient**: the line through (1, –3) parallel to y = 4x – 1 has m = 4, so y = 4x – 7.

**Perpendicular** lines have gradients whose product is **–1**, i.e. **m₂ = –1/m₁** — flip the fraction and change the sign.`,
      figure: panelC,
      groups: [
        {
          subTitle: "The perpendicular bisector",
          bullets: [
            "Standard Extended question: find the equation of the perpendicular bisector of the segment joining (–3, 8) and (9, –2). Work in fixed order — **midpoint**, then **gradient of the segment**, then **negative reciprocal**, then substitute the midpoint for c.",
            "For a line given as 2y = 3x + 1, the gradient is **3/2**, so a perpendicular has gradient **–2/3**. Rearrange before you read m off.",
            "Check by substitution: the answer must pass through the midpoint you calculated.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "y = 7 – 4x has gradient **–4**, not 7; the constant term is the intercept, whatever order the question writes it in.",
            "Parallel is **equal m**; perpendicular is **negative reciprocal m**. Swapping these two throws away the whole question.",
            "Gradient from two points needs the **same order** in numerator and denominator — (y₁ – y₂)/(x₂ – x₁) has the wrong sign.",
            "A line like x = k has no y term: it is vertical, gradient undefined, and it is not a function.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_3 = chapterThree;
