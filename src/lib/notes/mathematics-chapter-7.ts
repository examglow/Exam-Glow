import type { Chapter } from "./types";

const chapterSeven: Chapter = {
  number: 7,
  title: "Vectors",
  intro: `A **vector** carries two pieces of information at once: a **magnitude** (size) and a **direction**. A scalar carries only magnitude.\n\nThis chapter builds from notation and arithmetic through to **vector geometry**, where algebraic manipulation replaces measurement and proves results about shapes that would be hard to verify with a ruler.`,
  subheadings: [
    {
      title: "Introduction to Vectors",
      body: `A **vector** is a quantity that has both **magnitude** and **direction**. A **scalar** is a quantity that has magnitude only — it has no direction attached to it.\n\nCommon scalar quantities include temperature, mass, speed and time. Common vector quantities include displacement, velocity, force and acceleration. On a diagram a vector is drawn as an **arrow**: the length of the arrow represents the magnitude and the arrowhead shows the direction.`,
      groups: [
        {
          subTitle: "Key definitions",
          bullets: [
            "**Magnitude** is the size or length of the vector — it is always a positive value.",
            "**Direction** is where the vector points — without it the description is incomplete.",
            "**Scalar** quantities have size only; for example, 50 km is a scalar (a distance), but 50 km due north is a vector (a displacement).",
            "**Vector quantities** cannot be combined by ordinary addition unless they point in the same direction — you must use the rules of vector addition.",
            "On squared paper, a vector is drawn as an arrow between two grid points; the arrow shows direction and its length shows magnitude.",
            "Two vectors are **equal** only if they have the same magnitude and the same direction — position in space does not matter.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Confusing **distance** (scalar) with **displacement** (vector) — the two are equal only when motion is in a straight line with no reversal.",
            "Saying a vector is 'bigger' than another when you mean its magnitude is larger — the direction is part of its identity.",
            "Drawing an arrow without a head, so the direction is unknown — an arrowhead is compulsory.",
          ],
        },
      ],
    },
    {
      title: "Vector Notation",
      body: `Vectors are written in several equivalent ways and you must recognise all of them. A vector from point A to point B is written **AB** (with an arrow or bold/underline). In print, bold lowercase letters such as **a** are used; in handwriting, underlined letters such as <u>a</u> are standard. The **column vector** notation places the horizontal component over the vertical component and is the most useful form for calculation.`,
      groups: [
        {
          subTitle: "Column vector form",
          bullets: [
            "The column vector **\\(\\begin{pmatrix}a\\\\b\\end{pmatrix}\\)** means a units to the right and b units upward; a negative top value means left and a negative bottom value means down.",
            "**Position vector** of point P is the vector from the origin O to P, written **OP** or simply **p**; it fixes the location of a point relative to a fixed origin.",
            "A **free vector** describes a displacement or direction without a fixed start point; two free vectors are equal if they have the same magnitude and direction, wherever they are drawn.",
            "The **magnitude** of the column vector **\\(\\begin{pmatrix}a\\\\b\\end{pmatrix}\\)** is **|a| = √(a² + b²)**, found by Pythagoras; the result is a scalar.",
            "**AB** and **BA** are related by **BA = −AB**: the same magnitude, opposite direction.",
            "In exam questions, vectors given as single bold letters (such as **p** and **q**) are the building blocks — every other vector in the diagram is expressed in terms of them.",
          ],
        },
        {
          subTitle: "Calculating magnitude",
          bullets: [
            "Write the vector in column form first, then apply **|v| = √(x² + y²)**.",
            "The magnitude of **\\(\\begin{pmatrix}3\\\\4\\end{pmatrix}\\)** is √(9 + 16) = √25 = **5**; this is a Pythagorean triple worth remembering.",
            "The magnitude of **\\(\\begin{pmatrix}-5\\\\12\\end{pmatrix}\\)** is √(25 + 144) = √169 = **13**; negatives disappear once squared.",
            "Magnitude is always **positive**; never write a negative length.",
            "A **unit vector** has magnitude 1; to make a unit vector divide the column vector by its magnitude.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Writing **AB** when you mean **BA** — the order of letters is the direction; reversing them negates the vector.",
            "Forgetting to square-root when finding magnitude, leaving an answer of a² + b² instead of √(a² + b²).",
            "Using the wrong sign for a component — a move of 3 left is **−3**, not +3.",
          ],
        },
      ],
    },
    {
      title: "Adding and Subtracting Vectors",
      body: `Vectors are added by the **tip-to-tail method**: draw the first vector, then start the second vector at the tip of the first; the **resultant** goes from the tail of the first to the tip of the second. In column form, add the top components together and the bottom components together. Subtraction is addition of the negative: **a − b = a + (−b)**, which reverses the direction of **b** before adding.`,
      groups: [
        {
          subTitle: "Rules of vector addition",
          bullets: [
            "**Tip-to-tail rule:** place vectors end-to-end in order; the resultant is the single arrow from start to finish.",
            "**Column addition:** \\(\\begin{pmatrix}a\\\\b\\end{pmatrix} + \\begin{pmatrix}c\\\\d\\end{pmatrix} = \\begin{pmatrix}a+c\\\\b+d\\end{pmatrix}\\) — x-components and y-components add separately.",
            "**Commutativity:** vector addition IS commutative — **a + b = b + a**; changing the order of addition does not change the resultant.",
            "**Associativity:** **(a + b) + c = a + (b + c)** — the grouping does not matter either.",
            "**Zero vector:** **a + (−a) = 0**; a vector and its negative cancel completely.",
            "In a **closed polygon** of vectors drawn tip-to-tail, the total is always the zero vector — the last tip meets the first tail.",
          ],
        },
        {
          subTitle: "Triangle law and parallelogram law",
          bullets: [
            "**Triangle law:** if two vectors **a** and **b** form two sides of a triangle taken in order, the third side (closing the triangle, in reverse) is the resultant **a + b**.",
            "**Parallelogram law:** place **a** and **b** starting from the same point; the diagonal of the parallelogram they form is the resultant.",
            "Both laws give the same result — they are two ways to represent the same addition.",
            "**Subtraction a − b:** reverse the direction of **b** (write **−b**), then add tip-to-tail; the result is a vector from the tip of **b** to the tip of **a** when both start at the same point.",
            "On a diagram, the vector **−b** points opposite to **b** but has the same length.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Claiming vector addition is NOT commutative — it IS: **a + b = b + a** always holds.",
            "Adding magnitudes instead of components: |a + b| ≠ |a| + |b| unless the vectors point in the same direction.",
            "Subtracting components in the wrong order — when computing **AB = OB − OA**, subtract the starting point's position vector from the ending point's.",
          ],
        },
      ],
    },
    {
      title: "Multiplying Vectors by Scalars",
      body: `When a vector is multiplied by a **scalar** k, every component is multiplied by k. The result is a vector that is **parallel** to the original: same direction if k > 0, opposite direction if k < 0, and with magnitude scaled by |k|. This operation is the foundation for identifying parallel vectors and for splitting paths into fractional steps.`,
      groups: [
        {
          subTitle: "Effect of different values of k",
          bullets: [
            "**k > 1:** the vector is stretched — longer than the original, same direction.",
            "**0 < k < 1:** the vector is shrunk — shorter than the original, same direction (for example, ½**a** is half as long as **a**).",
            "**k = 1:** the vector is unchanged.",
            "**k = 0:** the result is the zero vector — no length and no direction.",
            "**k < 0:** the vector is reversed — it points in the opposite direction and its length is |k| times the original.",
            "**k = −1:** the vector is negated — same length, exactly opposite direction.",
          ],
        },
        {
          subTitle: "Parallel vectors",
          bullets: [
            "Two vectors are **parallel** if and only if one is a scalar multiple of the other: **b = k****a** for some scalar k.",
            "To test parallelism, write both vectors in column form and check whether the ratio of x-components equals the ratio of y-components.",
            "A negative scalar still produces a parallel (but opposite) vector — parallel does not require the same direction, only the same or opposite line of action.",
            "**Scalar multiplication distributes:** k(**a + b**) = k**a** + k**b**.",
            "In exam questions, 'show that AB is parallel to CD' means expressing both as column vectors or in terms of the same base vectors and finding the scalar multiple.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Thinking 'parallel' means 'equal' — parallel vectors can differ in magnitude and even direction (if the scalar is negative).",
            "Multiplying only one component when multiplying by a scalar — both the x-part and the y-part must be multiplied.",
            "Confusing scalar multiplication with the **dot product** — scalar multiplication is covered at IGCSE; the dot product is not.",
          ],
        },
      ],
    },
    {
      title: "Resultant Vectors",
      body: `The **resultant** of two or more vectors is the single vector that has exactly the same overall effect as all those vectors combined. It is found by placing the vectors tip-to-tail and drawing the resultant from the first tail to the final tip, or equivalently by adding the column vectors component by component. The resultant replaces every individual vector in terms of the total displacement, force, or velocity it represents.`,
      groups: [
        {
          subTitle: "Finding the resultant",
          bullets: [
            "**Graphical method:** draw the vectors to scale tip-to-tail; the resultant is measured from the start of the first to the end of the last.",
            "**Column vector method:** add all x-components to get the x-component of the resultant, and all y-components to get the y-component.",
            "The **magnitude** of the resultant is found with Pythagoras once the column form is known: |**r**| = √(x² + y²).",
            "The resultant of two equal and opposite vectors is the **zero vector** — the two effects cancel completely.",
            "In navigation and force problems the resultant gives the **net displacement** or **net force** acting on an object.",
            "Order of addition does not change the resultant — vectors may be added in any sequence.",
          ],
        },
        {
          subTitle: "Worked example pattern",
          bullets: [
            "Identify all vectors involved and write each in column form.",
            "Add the column vectors: sum of x-parts gives the x-component, sum of y-parts gives the y-component.",
            "Write the resultant as a column vector, then find its magnitude if required.",
            "State the resultant clearly — a bare number without a direction is not a vector answer.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Adding the **magnitudes** of the individual vectors to get the magnitude of the resultant — this only works if all vectors point in exactly the same direction.",
            "Omitting the direction when stating a resultant — a vector answer must specify both magnitude and direction.",
            "Confusing the resultant with one of the component vectors in a diagram — the resultant is a new arrow, not one of the originals.",
          ],
        },
      ],
    },
    {
      title: "Vector Geometry",
      body: `In vector geometry, the positions of points and the relationships between them are expressed **algebraically** using vectors rather than measured with a ruler. The technique is to write every required path as a chain of steps using the vectors already named, then simplify. This allows exact proofs of parallelism, collinearity and midpoints without any coordinates.`,
      groups: [
        {
          subTitle: "Path-tracing technique",
          bullets: [
            "To write vector **AB**, go from A to B via any path of known vectors: **AB = AO + OB = −OA + OB = OB − OA = b − a**.",
            "If **OA = a** and **OB = b**, then **AB = b − a** — always subtract the starting position vector from the ending position vector.",
            "**Midpoint formula:** if M is the midpoint of AB, then **OM = ½(OA + OB) = ½(a + b)**.",
            "A point P that divides AB in the ratio m : n from A has position vector **OP = OA + (m/(m+n)) × AB**.",
            "To show two vectors are **parallel**, write both in terms of the same base vectors and confirm one is a scalar multiple of the other.",
            "To show three points are **collinear**, write one of the two joins as a scalar multiple of the other and confirm they share a common point.",
          ],
        },
        {
          subTitle: "Collinearity proofs",
          bullets: [
            "Three points A, B, C are collinear if **AC = k × AB** for some scalar k — the vectors lie along the same straight line.",
            "The shared point (A in that example) must be stated explicitly — the scalar multiple alone is not enough to establish collinearity.",
            "If **AM = ½AB**, then M is the midpoint of AB and all three points are on the same line.",
            "Collinearity proofs always end with two statements: (i) one vector is a scalar multiple of another, and (ii) they share a point.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Writing **AB = OA + OB** instead of **AB = OB − OA** — when going from A to B via O, you travel backwards along OA first, giving **−OA**, then forwards along OB.",
            "Stopping after showing a scalar multiple without naming the shared point — that is an incomplete collinearity proof.",
            "Using coordinates instead of vector algebra when the question says 'use vectors' — the method earns the marks, not just the answer.",
          ],
        },
      ],
    },
    {
      title: "Exam Traps for Vectors",
      body: `Vector questions on the exam reward careful notation and logical reasoning. Most dropped marks come from one of three sources: **sign errors** (reading the direction of AB backwards), **incomplete proofs** (forgetting to show working or omitting the shared-point argument), and **vocabulary confusion** (mixing up parallel and collinear). Being systematic about direction before writing anything down removes the most common errors.`,
      groups: [
        {
          subTitle: "Direction and sign errors",
          bullets: [
            "**AB = −BA** always — reversing the letters negates the vector; check the arrow direction before writing any expression.",
            "When tracing a path that goes against an arrow, write the vector with a negative sign: travelling from B to O along **OB** gives **−b**, not **b**.",
            "In a subtraction **a − b**, the minus applies to the whole vector **b**, including both components — write **−b = \\(\\begin{pmatrix}-b_x\\\\-b_y\\end{pmatrix}\\)**.",
            "A negative scalar multiplier reverses direction — the resulting vector is still parallel to the original but points the other way.",
          ],
        },
        {
          subTitle: "Proof and working errors",
          bullets: [
            "Show every step in a vector geometry proof — an unsupported answer earns no method marks even if the final expression is correct.",
            "For parallelism: state the scalar multiple explicitly and name which vector is the multiple of which.",
            "For collinearity: state (i) the scalar multiple and (ii) the shared point — both parts are needed for full marks.",
            "For midpoints: use **OM = ½(a + b)** and show the arithmetic, not just the answer.",
          ],
        },
        {
          subTitle: "Vocabulary and concept errors",
          bullets: [
            "**Parallel** vectors lie along lines that never meet (unless they are the same line) — parallel does NOT mean collinear.",
            "**Collinear** points lie on the same straight line — collinear implies that the vectors between them are parallel AND share a point.",
            "**Equal vectors** have the same magnitude and direction; they need not start at the same point (free vectors).",
            "The **zero vector** has no direction — it represents a displacement of zero in every direction and is written **0** or **\\(\\begin{pmatrix}0\\\\0\\end{pmatrix}\\)**.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_7 = chapterSeven;
export const MATHEMATICS_CHAPTERS_7: Chapter[] = [chapterSeven];
