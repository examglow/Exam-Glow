import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Core — Section 7: Transformations
 * Chapter 39 (Categories matching official Core syllabus breakdown)
 */
export const MATHEMATICS_CORE_TRANSFORMATIONS: Chapter[] = [
  {
    number: 39,
    title: "Transformations",
    section: "7. Transformations",
    topic: "Transformations",
    intro:
      "The four geometric transformations in the 2D coordinate plane: translations by column vectors, reflections across mirror lines, rotations about centres, and enlargements with positive integer or fractional scale factors.",
    subheadings: [
      {
        title: "Translations",
        body:
          "A **translation** slides every point of a shape by the same distance and in the same direction without turning or resizing it.\n\n" +
          "It is fully described by a **column vector**:\n" +
          "$$\\mathbf{\\begin{pmatrix} x \\\\ y \\end{pmatrix}}$$\n" +
          "- **Top number ($x$):** Horizontal movement ($+$ moves right, $-$ moves left).\n" +
          "- **Bottom number ($y$):** Vertical movement ($+$ moves up, $-$ moves down).\n\n" +
          "**Translating a point $(a, b)$:**\n" +
          "$$\\begin{pmatrix} a \\\\ b \\end{pmatrix} + \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} a + x \\\\ b + y \\end{pmatrix}$$\n\n" +
          "**Example:** Translate shape $A$ by vector $\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$:\n" +
          "Move each vertex 3 units right and 4 units down.",
        examinerTips: [
          "When describing a translation, you MUST give the word 'Translation' and the column vector $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$. Do not write fractions or coordinates.",
        ],
        commonMistakes: [
          "Writing a vector with a fraction line: $\\begin{pmatrix} \\frac{3}{4} \\end{pmatrix}$ (WRONG; no fraction line).",
          "Reversing horizontal and vertical components.",
        ],
        recap: [
          "State the column vector that translates point $(2, -1)$ to $(5, 3)$.",
        ],
      },
      {
        title: "Reflections",
        body:
          "A **reflection** flips a shape across a specified **mirror line**:\n\n" +
          "- The image is congruent to the object and has opposite orientation (reversed).\n" +
          "- Every point on the image is the same perpendicular distance from the mirror line as the corresponding point on the object.\n\n" +
          "**Common Mirror Lines:**\n" +
          "- $x$-axis (equation $y = 0$): flip vertically across $x$-axis; $(x, y) \\rightarrow (x, -y)$.\n" +
          "- $y$-axis (equation $x = 0$): flip horizontally across $y$-axis; $(x, y) \\rightarrow (-x, y)$.\n" +
          "- Vertical lines (e.g. $x = 2$, $x = -1$).\n" +
          "- Horizontal lines (e.g. $y = 3$, $y = -2$).\n" +
          "- Diagonal lines: $y = x$ and $y = -x$.\n\n" +
          "**Exam Description:** State 'Reflection' and the full equation of the mirror line (e.g. 'Reflection in the line $y = 1$').",
        examinerTips: [
          "Never write 'mirrored across' or 'flipped'. Use the exact mathematical term **'Reflection'**.",
        ],
        commonMistakes: [
          "Confusing the mirror line $y = 2$ (horizontal line through $y=2$) with $x = 2$ (vertical line through $x=2$).",
        ],
        recap: [
          "Describe fully the single transformation that maps point $(3, 4)$ to $(-3, 4)$.",
        ],
      },
      {
        title: "Rotations",
        body:
          "A **rotation** turns a shape about a fixed pivot point called the **centre of rotation**.\n\n" +
          "To fully describe a rotation, you MUST provide three elements:\n" +
          "1. The word **'Rotation'**.\n" +
          "2. The **Angle and Direction:** (e.g. $90^\\circ$ clockwise, $90^\\circ$ anticlockwise, or $180^\\circ$).\n" +
          "3. The **Centre of Rotation:** Given as coordinates $(x, y)$ (e.g. 'about $(0, 0)$' or 'about $(1, 2)$').\n\n" +
          "**Using Tracing Paper:**\n" +
          "1. Trace the object and the coordinate axes.\n" +
          "2. Place pencil tip firmly at the centre of rotation.\n" +
          "3. Rotate the tracing paper by the required angle/direction.\n" +
          "4. Mark the image vertices onto the grid.",
        examinerTips: [
          "Tracing paper is always allowed in Cambridge mathematics exams: always request tracing paper if needed.",
          "For $180^\\circ$ rotations, direction is not needed because clockwise and anticlockwise yield the identical image.",
        ],
        commonMistakes: [
          "Forgetting to state the coordinates of the centre of rotation.",
        ],
        recap: [
          "Describe fully the single transformation mapping triangle $A(1, 1), (3, 1), (1, 2)$ to $A'(-1, 1), (-1, 3), (-2, 1)$.",
        ],
      },
      {
        title: "Enlargements",
        body:
          "An **enlargement** alters the size of a shape by multiplying all side lengths by a **scale factor ($k$)** from a fixed point called the **centre of enlargement**.\n\n" +
          "To fully describe an enlargement, you MUST provide three elements:\n" +
          "1. The word **'Enlargement'**.\n" +
          "2. The **Scale Factor ($k$):**\n" +
          "   $$k = \\frac{\\text{Image side length}}{\\text{Object side length}}$$\n" +
          "   - $k > 1$: shape gets bigger.\n" +
          "   - $0 < k < 1$: shape gets smaller (fractional enlargement).\n" +
          "3. The **Centre of Enlargement:** Coordinates $(x, y)$.\n\n" +
          "**Finding Centre of Enlargement:**\n" +
          "Draw straight ray lines through corresponding vertices of the object and image; the point where all construction rays intersect is the centre of enlargement.\n\n" +
          "**Ray Distance Rule:**\n" +
          "$$\\text{Distance from centre to image point} = k \\times (\\text{Distance from centre to object point})$$",
        examinerTips: [
          "Only enlargement changes the size of the shape; translation, reflection, and rotation produce congruent images.",
        ],
        commonMistakes: [
          "Calling an enlargement a 'reduction' when $0 < k < 1$. In mathematics, it is still formally termed an 'Enlargement with scale factor $\\frac{1}{2}$'.",
        ],
        recap: [
          "Enlarge a triangle with vertices at $(1, 1), (3, 1), (1, 2)$ by scale factor $2$, centre of enlargement $(0, 0)$.",
        ],
      },
    ],
  },
];
