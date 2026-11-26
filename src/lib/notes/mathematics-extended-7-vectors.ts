import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 7: Vectors & Transformations
 * Includes all Core transformations + Extended-only vectors content:
 * Magnitude, Position & Displacement Vectors, Vector Paths, Problem Solving with Vectors
 */
export const MATHEMATICS_EXTENDED_VECTORS: Chapter[] = [
  {
    number: 42,
    title: "Vectors",
    section: "7. Vectors & Transformations",
    topic: "Vectors",
    intro:
      "Vectors represent quantities with both magnitude (size) and direction. At Extended level, students work with column vectors, vector paths, and use vectors to prove geometric results.",
    subheadings: [
      {
        title: "Representing Vectors as Diagrams",
        body:
          "A **vector** has both **magnitude** (size) and **direction**.\n\n" +
          "**Notation:**\n" +
          "- Bold: $\\mathbf{a}$, or underlined: $\\underline{a}$ (handwritten)\n" +
          "- Column vector: $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ means $x$ units right and $y$ units up.\n" +
          "- $\\overrightarrow{AB}$ means the vector from $A$ to $B$.\n\n" +
          "**Representing on a grid:** An arrow drawn from the starting point in the direction and length specified.\n\n" +
          "**Equal vectors:** Same direction and same magnitude — $\\mathbf{a} = \\mathbf{b}$ if they are parallel and equal in length.\n\n" +
          "**Negative vector:** $-\\mathbf{a}$ is the same length as $\\mathbf{a}$ but in the opposite direction.\n\n" +
          "**Adding vectors:** $\\mathbf{a} + \\mathbf{b} = \\begin{pmatrix} a_1 + b_1 \\\\ a_2 + b_2 \\end{pmatrix}$ — add corresponding components.\n\n" +
          "**Scalar multiplication:** $k\\mathbf{a} = \\begin{pmatrix} ka_1 \\\\ ka_2 \\end{pmatrix}$ — scales the vector by $k$.",
        examinerTips: [
          "Always specify both direction (the arrow) and magnitude when drawing vectors.",
          "Parallel vectors have the same or exactly opposite direction — their column vectors are scalar multiples of each other.",
        ],
        commonMistakes: [
          "Adding the magnitudes of vectors without considering direction.",
          "Confusing $\\overrightarrow{AB}$ and $\\overrightarrow{BA}$ — they are negatives of each other: $\\overrightarrow{BA} = -\\overrightarrow{AB}$.",
        ],
        recap: [
          "Given $\\mathbf{a} = \\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$ and $\\mathbf{b} = \\begin{pmatrix} -1 \\\\ 4 \\end{pmatrix}$, find: (a) $\\mathbf{a} + \\mathbf{b}$ (b) $3\\mathbf{a} - 2\\mathbf{b}$ (c) $-\\mathbf{b}$.",
        ],
      },
      {
        title: "Magnitude of a Vector",
        body:
          "The **magnitude** (or modulus) of vector $\\mathbf{a} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$ is its length:\n\n" +
          "$$|\\mathbf{a}| = \\sqrt{x^2 + y^2}$$\n\n" +
          "This is simply Pythagoras' theorem applied to the horizontal and vertical components.\n\n" +
          "**Example:** $\\mathbf{v} = \\begin{pmatrix} 5 \\\\ 12 \\end{pmatrix}$: $|\\mathbf{v}| = \\sqrt{25 + 144} = \\sqrt{169} = 13$.\n\n" +
          "**Unit vector:** A vector of magnitude $1$ in the same direction as $\\mathbf{a}$:\n" +
          "$$\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|}$$",
        examinerTips: [
          "The magnitude is always a positive scalar (even for negative components).",
          "$|k\\mathbf{a}| = |k| \\times |\\mathbf{a}|$.",
        ],
        commonMistakes: [
          "Adding the components without squaring: $|\\mathbf{a}| = x + y$ — WRONG.",
          "Forgetting the square root.",
        ],
        recap: [
          "Find the magnitude of: (a) $\\begin{pmatrix} -6 \\\\ 8 \\end{pmatrix}$ (b) $\\begin{pmatrix} 7 \\\\ 24 \\end{pmatrix}$ (c) $\\begin{pmatrix} 3 \\\\ -4 \\end{pmatrix}$.",
        ],
      },
      {
        title: "Position & Displacement Vectors",
        body:
          "**Position vector:** The vector from the origin $O$ to a point. The position vector of $A$ is $\\overrightarrow{OA}$.\n\n" +
          "If $A$ has coordinates $(3, 5)$, then $\\overrightarrow{OA} = \\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$.\n\n" +
          "**Displacement vector:** The vector from one point to another.\n\n" +
          "$$\\overrightarrow{AB} = \\overrightarrow{OB} - \\overrightarrow{OA} = \\mathbf{b} - \\mathbf{a}$$\n\n" +
          "**Example:** $A = (2, 3)$ and $B = (7, 1)$.\n" +
          "$\\overrightarrow{AB} = \\begin{pmatrix} 7-2 \\\\ 1-3 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ -2 \\end{pmatrix}$\n\n" +
          "**Midpoint using position vectors:**\n" +
          "If $M$ is the midpoint of $AB$: $\\overrightarrow{OM} = \\frac{\\mathbf{a} + \\mathbf{b}}{2}$.",
        examinerTips: [
          "Position vectors always start from the origin; displacement vectors can start anywhere.",
          "$\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$ — always subtract the starting point's position vector.",
        ],
        commonMistakes: [
          "Computing $\\overrightarrow{AB} = \\mathbf{a} - \\mathbf{b}$ instead of $\\mathbf{b} - \\mathbf{a}$.",
          "Confusing the position vector with the coordinates — the position vector of $(x, y)$ is $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$.",
        ],
        recap: [
          "$A = (1, 4)$ and $B = (7, -2)$. Find: (a) $\\overrightarrow{AB}$ (b) $|\\overrightarrow{AB}|$ (c) the midpoint $M$ of $AB$.",
        ],
      },
      {
        title: "Finding Vector Paths",
        body:
          "**Vector path:** A route through a series of points expressed as a sum/difference of known vectors.\n\n" +
          "**Key principle:** $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{BC}$\n\n" +
          "If $\\overrightarrow{OA} = \\mathbf{a}$, $\\overrightarrow{OB} = \\mathbf{b}$, and $M$ is the midpoint of $AB$:\n\n" +
          "$\\overrightarrow{AM} = \\frac{1}{2}\\overrightarrow{AB} = \\frac{1}{2}(\\mathbf{b} - \\mathbf{a})$\n\n" +
          "$\\overrightarrow{OM} = \\overrightarrow{OA} + \\overrightarrow{AM} = \\mathbf{a} + \\frac{1}{2}(\\mathbf{b} - \\mathbf{a}) = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$\n\n" +
          "**General strategy:**\n" +
          "1. Write the vector as a path using intermediate points.\n" +
          "2. Express each step in terms of the given vectors $\\mathbf{a}$, $\\mathbf{b}$, etc.\n" +
          "3. Simplify.",
        examinerTips: [
          "Draw a diagram with arrows for each known vector — it shows which direction to travel.",
          "Travelling against an arrow = taking the negative of that vector.",
        ],
        commonMistakes: [
          "Travelling in the wrong direction along a known vector — always check the direction of the arrow.",
          "Not simplifying the final expression.",
        ],
        recap: [
          "$\\overrightarrow{OA} = \\mathbf{p}$, $\\overrightarrow{OB} = \\mathbf{q}$, $C$ divides $AB$ in ratio $2:1$. Express $\\overrightarrow{OC}$ in terms of $\\mathbf{p}$ and $\\mathbf{q}$.",
        ],
      },
      {
        title: "Problem Solving with Vectors",
        body:
          "Vectors can be used to prove geometric results such as:\n" +
          "- Points are **collinear** (lie on the same straight line).\n" +
          "- Lines are **parallel** (vectors are scalar multiples).\n" +
          "- A point is a **midpoint** or divides a segment in a given ratio.\n\n" +
          "**Proving collinearity:** Show that $\\overrightarrow{AB} = k \\overrightarrow{AC}$ for some scalar $k$ (and they share point $A$).\n\n" +
          "**Proving parallel:** Show $\\overrightarrow{PQ} = k \\overrightarrow{RS}$ for some scalar $k$.\n\n" +
          "**Example:** $O$, $A$, $B$ are points with $\\overrightarrow{OA} = \\mathbf{a}$, $\\overrightarrow{OB} = \\mathbf{b}$. $M$ is the midpoint of $AB$ and $N$ is the midpoint of $OB$. Prove $MN$ is parallel to $OA$.\n\n" +
          "$\\overrightarrow{ON} = \\frac{1}{2}\\mathbf{b}$\n" +
          "$\\overrightarrow{OM} = \\frac{1}{2}(\\mathbf{a} + \\mathbf{b})$\n" +
          "$\\overrightarrow{NM} = \\overrightarrow{OM} - \\overrightarrow{ON} = \\frac{1}{2}\\mathbf{a} + \\frac{1}{2}\\mathbf{b} - \\frac{1}{2}\\mathbf{b} = \\frac{1}{2}\\mathbf{a}$\n\n" +
          "$\\overrightarrow{NM} = \\frac{1}{2}\\overrightarrow{OA}$, so $NM$ is parallel to $OA$ and half its length. ∎",
        examinerTips: [
          "For collinearity: express $\\overrightarrow{XZ} = k \\overrightarrow{XY}$ and state they share point $X$.",
          "For parallel: express one vector as a scalar multiple of the other and state they are parallel.",
        ],
        commonMistakes: [
          "Not stating 'and they share a common point' when proving collinearity.",
          "Calling lines parallel without showing the scalar relationship.",
        ],
        recap: [
          "$\\overrightarrow{OA} = \\mathbf{a}$, $\\overrightarrow{OB} = \\mathbf{b}$. $P$ divides $OA$ in ratio $2:1$ from $O$. $Q$ divides $AB$ in ratio $1:2$ from $A$. Find $\\overrightarrow{PQ}$ in terms of $\\mathbf{a}$ and $\\mathbf{b}$. Show that $PQ$ is parallel to $OB$.",
        ],
      },
    ],
  },
  {
    number: 43,
    title: "Transformations",
    section: "7. Vectors & Transformations",
    topic: "Transformations",
    intro:
      "Transformations move or change shapes on a coordinate grid. At Extended level, students describe transformations precisely and work with combined transformations.",
    subheadings: [
      {
        title: "Translations",
        body:
          "A **translation** moves a shape without rotating or reflecting it. Every point moves the same distance in the same direction.\n\n" +
          "Described by a **column vector** $\\begin{pmatrix} a \\\\ b \\end{pmatrix}$: moves $a$ units right and $b$ units up (negative values mean left/down).\n\n" +
          "**Example:** Triangle $ABC$ translated by $\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$:\n" +
          "Each vertex moves $3$ right and $2$ down.\n\n" +
          "**Properties:** Shape and size are preserved (congruent image). Orientation is preserved.",
        examinerTips: [
          "Always describe a translation using the column vector — 'up 3 and right 2' is insufficient.",
        ],
        commonMistakes: [
          "Moving only some vertices and not all — every point translates by the same vector.",
        ],
        recap: [
          "Translate triangle with vertices $(1,2)$, $(3,2)$, $(2,5)$ by $\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$. State the new vertices.",
        ],
      },
      {
        title: "Reflections",
        body:
          "A **reflection** flips a shape in a **mirror line**. The image is the same distance from the mirror line as the original.\n\n" +
          "**Common mirror lines:**\n" +
          "- $x$-axis: $(x, y) \\to (x, -y)$\n" +
          "- $y$-axis: $(x, y) \\to (-x, y)$\n" +
          "- $y = x$: $(x, y) \\to (y, x)$\n" +
          "- $y = -x$: $(x, y) \\to (-y, -x)$\n" +
          "- $y = k$ (horizontal): $(x, y) \\to (x, 2k - y)$\n" +
          "- $x = k$ (vertical): $(x, y) \\to (2k - x, y)$\n\n" +
          "**Properties:** Shape and size preserved (congruent). Orientation is **reversed** (mirror image).",
        examinerTips: [
          "To describe a reflection: state 'Reflection in the line $y = ...$'.",
          "The mirror line is the perpendicular bisector of each point and its image.",
        ],
        commonMistakes: [
          "Reflecting in the wrong axis (mixing up $x$-axis and $y$-axis reflections).",
          "Not reversing the orientation in the diagram.",
        ],
        recap: [
          "Reflect the point $(4, -3)$ in: (a) the $x$-axis (b) the $y$-axis (c) the line $y = x$ (d) the line $x = 1$.",
        ],
      },
      {
        title: "Rotations",
        body:
          "A **rotation** turns a shape through an angle about a fixed **centre of rotation**.\n\n" +
          "**Describing a rotation:** State the centre, angle, and direction (clockwise or anticlockwise).\n\n" +
          "**Rotation rules about the origin:**\n" +
          "- $90°$ anticlockwise: $(x, y) \\to (-y, x)$\n" +
          "- $90°$ clockwise: $(x, y) \\to (y, -x)$\n" +
          "- $180°$: $(x, y) \\to (-x, -y)$\n\n" +
          "**Finding the centre of rotation:** The centre is equidistant from each point and its image (use perpendicular bisectors).\n\n" +
          "**Properties:** Shape and size are preserved (congruent). Orientation is preserved.",
        examinerTips: [
          "If in doubt about $90°$ direction, use the formula and verify one point before completing the rotation.",
          "Centre of rotation is NOT necessarily the origin — always check the given centre.",
        ],
        commonMistakes: [
          "Confusing clockwise with anticlockwise directions.",
          "Assuming the centre is always the origin.",
        ],
        recap: [
          "Rotate the triangle with vertices $(1,0)$, $(3,0)$, $(3,2)$ through $90°$ anticlockwise about the origin.",
          "Describe the rotation that maps $(2, 1)$ to $(1, -2)$.",
        ],
      },
      {
        title: "Enlargements",
        body:
          "An **enlargement** changes the size of a shape from a fixed **centre of enlargement** by a **scale factor** $k$.\n\n" +
          "- $k > 1$: the image is larger.\n" +
          "- $0 < k < 1$: the image is smaller (a reduction).\n" +
          "- $k < 0$: the image is on the opposite side of the centre (inverted enlargement).\n\n" +
          "**Method:** Each point is mapped so that (image point) $=$ (centre) $+ k \\times$ (original $-$ centre).\n\n" +
          "**Describing an enlargement:** State the centre and scale factor.\n\n" +
          "**Properties:** Angles are preserved; lengths are multiplied by $|k|$; area is multiplied by $k^2$. The image is similar to the original.",
        examinerTips: [
          "For a negative scale factor: measure distance from centre to point, then go the same distance on the opposite side.",
          "The centre of enlargement is the intersection of lines joining corresponding points extended.",
        ],
        commonMistakes: [
          "Measuring from the original point to the image instead of from the centre.",
          "Using $k$ instead of $k^2$ for the area ratio.",
        ],
        recap: [
          "Enlarge triangle with vertices $(1,1)$, $(3,1)$, $(1,4)$ by scale factor $-2$ about the origin.",
          "Find the scale factor and centre of enlargement that maps $A(2,2)$ to $A'(5,5)$ and $B(4,2)$ to $B'(8,2)$.",
        ],
      },
    ],
  },
];
