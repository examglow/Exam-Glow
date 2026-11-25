import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math6-clinometer-tower.webp",
    alt: "A school student holding a cardboard protractor clinometer at arm's length, sighting up a clock tower while a partner writes in a notebook",
    caption: "Angle of elevation, then tan",
  },
  {
    src: "math6-ladder-wall.webp",
    alt: "A aluminium ladder leaning against a rendered wall on a sunny day, the ladder, wall and ground forming a clear right-angled triangle",
    caption: "Hypotenuse is the ladder",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math6-special-triangles.webp",
    alt: "Two cardboard right triangles side by side on a desk, one with two equal legs and one with a noticeably shorter leg opposite the smaller acute angle",
    caption: "Two triangles give every exact value",
  },
  {
    src: "math6-tide-curve.webp",
    alt: "A harbour at mid-tide seen from a slipway, the waterline against the concrete forming a long repeating wave pattern along the shore",
    caption: "Sine is a repeating tide",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math6-sail-rigging.webp",
    alt: "A triangular mainsail on a small yacht, its three corners held out by taut rigging against the wind on open water",
    caption: "No right angle means the sine rule",
  },
  {
    src: "math6-box-diagonal.webp",
    alt: "A clear rectangular aquarium on a table with a single red laser line running from a bottom corner to the opposite top corner inside the glass",
    caption: "3D is two Pythagoras steps",
  },
]);

const chapterSix: Chapter = {
  number: 6,
  title: "Trigonometry",
  intro: `Trigonometry questions decide themselves by one test: **is there a right angle in the triangle you are using?** If yes, SOH-CAH-TOA; if no, sine or cosine rule.\n\nAngles are given in degrees and answers in degrees, decimals **correct to one decimal place**.`,
  subheadings: [
    {
      title: "Right-Angled Triangles",
      body: `### Label First, Choose Second

**Pythagoras' theorem**: a² + b² = c², with c the hypotenuse. Rearranged to find a shorter side, **a = √(c² – b²)**.

For acute angles use **sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent**. Pick the ratio that uses the two sides you actually have.

Core solves **two-dimensional** problems with Pythagoras and trig, and may require **bearings**. Extended adds the fact that the **perpendicular distance from a point to a line is the shortest distance to it**, and calculations with **angles of elevation and depression**.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Naming sides correctly",
          bullets: [
            "Opposite and adjacent are **relative to the angle you marked** — redraw the triangle, label the angle, then name the sides, or you will use cos where tan was needed.",
            "To find an angle, use the **inverse** function: x = tan⁻¹(3/7). Writing tan(3/7) instead is a method error, not a slip.",
            "Angle of depression is measured **from the horizontal at the observer**, so it equals the alternate angle inside the triangle — draw the horizontal dashed line first.",
          ],
        },
      ],
    },
    {
      title: "Exact Values and Trig Graphs",
      body: `### Memorise the Table, Then Sketch It

Extended requires exact values of **sin x and cos x for x = 0°, 30°, 45°, 60°, 90°**, and **tan x for 0°, 30°, 45°, 60°** — so sin 30° = 1/2, sin 45° = cos 45° = **1/√2 (or √2/2)**, sin 60° = cos 30° = **√3/2**, tan 45° = 1, and **tan 90° is undefined**.

Sketch and interpret **y = sin x, y = cos x, y = tan x for 0° ⩽ x ⩽ 360°**, then solve trigonometric equations over that same domain.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Solving over 0° to 360°",
          bullets: [
            "Find the **principal angle** on the calculator, then use symmetry to get the second solution: sin x = √3/2 gives **60° and 120°**; cos x = –1/2 gives **120° and 240°**.",
            "Rearrange first: 2 cos x + 1 = 0 becomes cos x = –1/2 before you touch the inverse button.",
            "For tan, the two solutions are **180° apart**, and the graph has an asymptote at 90° and 270° — never mark a value there.",
            "The **CAST** idea is what examiners expect in words: state the quadrants where each ratio is positive.",
          ],
        },
      ],
    },
    {
      title: "Any Triangle, and Three Dimensions",
      body: `### The Rules Are on the Formula List — Choosing Them Is Not

**Sine rule** a/sin A = b/sin B = c/sin C, used with **two angles and a side** or **two sides and the angle opposite one of them**.

**Cosine rule** a² = b² + c² – 2bc cos A, used with **two sides and the included angle** or **all three sides**; rearranged as cos A = (b² + c² – a²)/2bc to find an angle.

**Area of a triangle = ½ab sin C** — two sides and the angle between them.

Extended also carries out calculations in **three dimensions**, including the **angle between a line and a plane**.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Obtuse angles and the ambiguous case",
          bullets: [
            "The cosine rule **detects obtuse angles for you**: a negative value of cos A means A > 90°. The sine rule cannot, which is why the ambiguous case appears — two possible triangles when you are given two sides and a non-included angle.",
            "For ½ab sin C the angle must be **between** the two named sides; if it is not, find it first with the angle sum of 180°.",
            "In 3D, draw the **hidden right-angled triangle inside the solid**: the diagonal of the base is an intermediate step, and the angle between a line and a plane is measured against the **shadow of that line on the plane**, not against a vertical edge.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Bearings plus trig is a standing Extended question: convert the bearing to an interior angle, then decide which rule the resulting triangle allows.",
            "Do not round an intermediate side — keep the full calculator value for the next step, especially in two-stage 3D work.",
            "Sin 30° = 1/2 exactly; a decimal 0.5 is fine, but writing 0.5 for sin 45° (√2/2 ≈ 0.707) is a recall failure.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_6 = chapterSix;
