import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math2-algebra-tiles.webp",
    alt: "Wooden algebra tiles on a desk: large squares, long rods and small unit cubes sorted into two groups separated by a pencil line",
    caption: "Like terms are the same shape",
  },
  {
    src: "math2-difference-of-squares.webp",
    alt: "A large paper square with a corner cut out, the small cut-off square and a plain rectangle laid beside it on a green cutting mat with scissors",
    caption: "Cut a corner out, get two brackets",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math2-simultaneous-lines.webp",
    alt: "Two straight lines drawn in different coloured ink on graph paper, crossing at a single point circled in pencil",
    caption: "The crossing point is the solution",
  },
  {
    src: "math2-shaded-region.webp",
    alt: "Graph paper with several straight lines, one side of each hatched in pencil so an unshaded polygonal region is left clear in the middle",
    caption: "Shade what you do not want",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math2-travel-graph.webp",
    alt: "A hand-drawn distance-time graph in an exercise book with a rising steep section, a flat section and a gentler rise, a ruler lying across the page",
    caption: "Flat means stopped, steep means fast",
  },
  {
    src: "math2-tangent-gradient.webp",
    alt: "A smooth curve drawn on graph paper with a straight ruler laid touching it at one point, and a small right-angled triangle sketched under the ruler",
    caption: "Gradient at a point = tangent",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Algebra and Graphs",
  intro: `Algebra carries the most marks of any 0580 topic and the most variety: manipulate, solve, then say it again as a graph.\n\nEverything below is **Extended** unless noted; Core candidates stop at expanding, single-variable linear equations, and straight-line graphs.`,
  subheadings: [
    {
      title: "Expressions: Expanding, Factorising, Indices",
      body: `### Simplify Means Fully Simplified

**Collect like terms** (2a² + 3ab – 1 + 5a² – 9ab + 4 = **7a² – 6ab + 3**), **expand products**, and **factorise by extracting common factors** (9x² + 15xy = **3x(3x + 5y)**).

Extended expands **more than two brackets**, e.g. (x – 2)(x + 3)(2x + 1).

The five factorisations you must recognise on sight:

**ax + bx + kay + kby** → group in pairs · **a²x² − b²y²** → difference of two squares · **a² + 2ab + b²** → perfect square · **ax² + bx + c** · **ax³ + bx² + cx** → take out the common x first.

**Complete the square** for ax² + bx + c — used for turning points and for solving.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Algebraic fractions and indices",
          bullets: [
            "Manipulate algebraic fractions and **factorise before cancelling**: (x² – 2x)/(x² – 5x + 6) becomes x(x – 2)/((x – 2)(x – 3)) = **x/(x – 3)**.",
            "Add and subtract by taking the **fully factorised common denominator**; never cancel across a sum.",
            "Indices II covers **positive, zero, negative and fractional** powers, e.g. simplify (5x³)², 12a⁵ ÷ 3a⁻², and solve 3²ˣ = 2 or 5ˣ⁺¹ = 25ˣ by writing both sides on one base. **Logarithms are not required.**",
          ],
        },
      ],
    },
    {
      title: "Equations, Inequalities, Sequences and Proportion",
      body: `### Choose the Method the Question Implies

Solve **linear equations**, **fractional equations** with numerical and linear algebraic denominators, **simultaneous linear equations**, and **one linear with one non-linear** (substitute, then solve the quadratic).

Quadratics by **factorisation, completing the square, or the quadratic formula** — the formula is on the List of formulas, but the other two methods are examined. Answers may be required in **surd form**.

Change the **subject** of a formula even when the subject appears **twice** or under a **power or root** — collect every occurrence on one side before dividing.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Inequalities and regions",
          bullets: [
            "On a number line: **open circle for < and >**, **closed circle for ⩽ and ⩾**.",
            "Solve linear inequalities and **reverse the sign when multiplying or dividing by a negative**; compound forms such as –3 ⩽ 3x – 2 < 7 are solved on all three parts at once.",
            "Graphically in two variables: **broken line for strict**, **solid line for inclusive**, and **shade the unwanted regions** unless told otherwise. You may be asked to **list the inequalities that define a given region**. Linear programming is **not** included.",
          ],
        },
        {
          subTitle: "Sequences and proportion",
          bullets: [
            "Find and use the **nth term** of linear, quadratic, cubic and exponential sequences and **simple combinations** of them; subscript notation **Tₙ** may be used.",
            "For a linear nth term, the difference is the coefficient of n and the zeroth term is the constant.",
            "**Direct and inverse proportion** written algebraically: y = kx, y = k/x, and the **square, square-root, cube and cube-root** versions. The symbol **∝** is required.",
          ],
        },
      ],
    },
    {
      title: "Graphs, Curves and Functions",
      body: `### Read It, Draw It, Differentiate It

Practical graphs: **travel graphs, conversion graphs, drawing from data**, and rate of change in kinematics — **distance–time and speed–time graphs, acceleration and deceleration**, with **distance travelled as the area under a speed–time graph** (linear sections only).

Graphs of **axⁿ** (n = –2, –1, –½, 0, ½, 1, 2, 3) and **abˣ + c**; solve equations **graphically** by finding intersections, and draw exponential **growth and decay** graphs.

Sketching covers **linear, quadratic, cubic, reciprocal and exponential**, and you must show **turning points, roots and symmetry**, with **vertical and horizontal asymptotes** for reciprocals.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Differentiation and functions",
          bullets: [
            "Estimate a curve's gradient by **drawing a tangent** and measuring it. Differentiate **axⁿ** (a rational, n a positive integer or zero) and simple sums of up to three such terms, using **dy/dx** notation.",
            "Apply differentiation to **gradients and stationary points**, and tell maxima from minima by an accurate sketch, the **second differential**, or the gradient either side of the turn. **Points of inflection are not required.**",
            "Functions: **function notation, domain and range, inverse f⁻¹(x)**, and composite **gf(x) = g(f(x))** — note gf means g of f, not g times f. Mapping diagrams may appear; domains and ranges of composite functions are not required.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Factorising stops early: x³ – 4x = x(x – 2)(x + 2) needs the common x **and** the difference of two squares.",
            "In simultaneous linear/non-linear work, the pair usually has **two solutions** — reporting only one loses a mark.",
            "Completing the square: x² – 6x + 5 = (x – 3)² – 4, so the turning point is **(3, –4)**, not (–3, –4).",
            "y = 1/x has **no** y-intercept and its asymptotes are the axes; a sketch that crosses them is wrong.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_2 = chapterTwo;
