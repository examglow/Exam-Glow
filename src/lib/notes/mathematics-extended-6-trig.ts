import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 6: Pythagoras & Trigonometry
 * Includes all Core content + Extended-only:
 * Sine Rule, Cosine Rule, Area = ½ab sinC, 3D Trigonometry
 */
export const MATHEMATICS_EXTENDED_TRIG: Chapter[] = [
  {
    number: 38,
    title: "Pythagoras' Theorem",
    section: "6. Pythagoras & Trigonometry",
    topic: "Pythagoras",
    intro:
      "Pythagoras' theorem relates the sides of a right-angled triangle and is the foundation for trigonometry and 3D geometry.",
    subheadings: [
      {
        title: "Pythagoras' Theorem",
        body:
          "In a right-angled triangle with hypotenuse $c$ (the side opposite the right angle) and legs $a$ and $b$:\n\n" +
          "$$c^2 = a^2 + b^2$$\n\n" +
          "**Finding the hypotenuse:**\n" +
          "Legs $6$ cm and $8$ cm: $c = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm.\n\n" +
          "**Finding a shorter side:**\n" +
          "Hypotenuse $13$ cm, one leg $5$ cm: other leg $= \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm.\n\n" +
          "**Pythagorean triples** (whole-number solutions):\n" +
          "$3, 4, 5$ | $5, 12, 13$ | $8, 15, 17$ | $7, 24, 25$ — and multiples of these.\n\n" +
          "**Converse:** If $a^2 + b^2 = c^2$, the triangle is right-angled. If $a^2 + b^2 > c^2$, it's acute; if $a^2 + b^2 < c^2$, it's obtuse.",
        examinerTips: [
          "Identify the hypotenuse first — it is always opposite the right angle and is the longest side.",
          "Recognise Pythagorean triples to avoid calculator errors in simple cases.",
        ],
        commonMistakes: [
          "Adding the squares of all three sides instead of only two.",
          "Attempting to apply Pythagoras to a non-right-angled triangle.",
        ],
        recap: [
          "A ladder $10$ m long leans against a vertical wall. The foot is $4$ m from the wall. How high up the wall does the ladder reach?",
          "A rectangle is $7$ cm by $24$ cm. Find the length of the diagonal.",
        ],
      },
    ],
  },
  {
    number: 39,
    title: "Trigonometry in Right-Angled Triangles",
    section: "6. Pythagoras & Trigonometry",
    topic: "Trigonometry",
    intro:
      "SOHCAHTOA gives the relationships between angles and sides in right-angled triangles. This is a Core topic extended to include inverse trigonometry.",
    subheadings: [
      {
        title: "Finding Lengths Using Trigonometry",
        body:
          "In a right-angled triangle, relative to angle $\\theta$:\n\n" +
          "$$\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} \\quad \\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} \\quad \\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$\n\n" +
          "**Finding a side:**\n" +
          "If $\\angle A = 32°$ and hypotenuse $= 15$ cm, find the opposite side:\n" +
          "$\\sin 32° = \\frac{\\text{opp}}{15} \\Rightarrow \\text{opp} = 15 \\sin 32° \\approx 7.95$ cm.\n\n" +
          "If $\\angle B = 55°$ and adjacent $= 8$ cm, find the opposite:\n" +
          "$\\tan 55° = \\frac{\\text{opp}}{8} \\Rightarrow \\text{opp} = 8\\tan 55° \\approx 11.43$ cm.",
        examinerTips: [
          "Label sides as Opposite, Adjacent, Hypotenuse **relative to the given angle** before choosing a ratio.",
          "Make sure your calculator is in DEGREE mode.",
        ],
        commonMistakes: [
          "Using the wrong trig ratio — always identify which sides are involved and choose accordingly.",
          "Rearranging incorrectly: $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$ means opp $= \\sin\\theta \\times$ hyp.",
        ],
        recap: [
          "Find the unknown side: (a) $\\sin 42° = x/14$ (b) right triangle, $\\angle = 67°$, adjacent $= 10$, find hypotenuse (c) right triangle, $\\angle = 28°$, opposite $= 7$, find adjacent.",
        ],
      },
      {
        title: "Finding Angles Using Trigonometry",
        body:
          "To find an angle, use the **inverse trigonometric functions**:\n\n" +
          "$$\\theta = \\sin^{-1}\\left(\\frac{\\text{opp}}{\\text{hyp}}\\right), \\quad \\theta = \\cos^{-1}\\left(\\frac{\\text{adj}}{\\text{hyp}}\\right), \\quad \\theta = \\tan^{-1}\\left(\\frac{\\text{opp}}{\\text{adj}}\\right)$$\n\n" +
          "**Example:** Triangle with opposite $= 9$ cm and hypotenuse $= 15$ cm. Find $\\theta$.\n" +
          "$\\theta = \\sin^{-1}\\left(\\frac{9}{15}\\right) = \\sin^{-1}(0.6) \\approx 36.9°$\n\n" +
          "**Example:** Triangle with adjacent $= 5$ cm and opposite $= 12$ cm. Find $\\theta$.\n" +
          "$\\theta = \\tan^{-1}\\left(\\frac{12}{5}\\right) \\approx 67.4°$",
        examinerTips: [
          "Use $\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$ on the calculator (press SHIFT or 2nd then the trig button).",
          "Give angles to 1 decimal place unless stated otherwise.",
        ],
        commonMistakes: [
          "Computing $\\sin(x) ÷ y$ instead of $\\sin^{-1}(x/y)$ when finding the angle.",
        ],
        recap: [
          "Find angle $\\theta$ in each right-angled triangle: (a) opposite $= 7$, hypotenuse $= 11$ (b) adjacent $= 6$, hypotenuse $= 10$ (c) opposite $= 15$, adjacent $= 8$.",
        ],
      },
    ],
  },
  {
    number: 40,
    title: "Sine & Cosine Rules",
    section: "6. Pythagoras & Trigonometry",
    topic: "Sine & Cosine Rules",
    intro:
      "The sine rule and cosine rule extend trigonometry to any triangle, not just right-angled ones. These are Extended-only topics.",
    subheadings: [
      {
        title: "The Sine Rule",
        body:
          "For any triangle with sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$ respectively:\n\n" +
          "$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$\n\n" +
          "Or equivalently: $\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$ (better for finding angles).\n\n" +
          "**Use when given:** AAS or ASA (two angles and one side) OR SSA (two sides and a non-included angle — beware the ambiguous case).\n\n" +
          "**Example — finding a side:** $A = 42°$, $B = 73°$, $b = 15$ cm. Find $a$.\n" +
          "$\\frac{a}{\\sin 42°} = \\frac{15}{\\sin 73°} \\Rightarrow a = \\frac{15 \\sin 42°}{\\sin 73°} \\approx 10.5$ cm.\n\n" +
          "**Example — finding an angle:** $a = 8$, $b = 10$, $A = 35°$. Find $B$.\n" +
          "$\\sin B = \\frac{10 \\sin 35°}{8} \\approx 0.717 \\Rightarrow B \\approx 45.8°$ (or $134.2°$ — the ambiguous case).",
        examinerTips: [
          "Use the sine rule version with the unknown on top (numerator) of one fraction.",
          "The **ambiguous case** (SSA): when finding an angle using the sine rule, consider whether the obtuse supplement is also valid (both sides of arcsin).",
        ],
        commonMistakes: [
          "Using the sine rule when the angle is included between two given sides — use the cosine rule instead.",
          "Forgetting the ambiguous case when using the sine rule to find an angle.",
        ],
        recap: [
          "In triangle $ABC$: (a) $A = 50°$, $B = 70°$, $a = 12$ cm — find $b$ (b) $a = 9$, $c = 11$, $C = 65°$ — find $A$.",
        ],
      },
      {
        title: "The Cosine Rule",
        body:
          "For any triangle with sides $a$, $b$, $c$ opposite angles $A$, $B$, $C$:\n\n" +
          "$$a^2 = b^2 + c^2 - 2bc\\cos A$$\n\n" +
          "Rearranged to find an angle:\n" +
          "$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$\n\n" +
          "**Use when given:** SAS (two sides and the included angle) or SSS (all three sides).\n\n" +
          "**Example — finding a side (SAS):** $b = 7$, $c = 9$, $A = 110°$.\n" +
          "$a^2 = 49 + 81 - 2(7)(9)\\cos 110° = 130 - 126(-0.342) = 130 + 43.1 = 173.1$\n" +
          "$a = \\sqrt{173.1} \\approx 13.2$ cm.\n\n" +
          "**Example — finding an angle (SSS):** $a = 5$, $b = 7$, $c = 9$.\n" +
          "$\\cos A = \\frac{49 + 81 - 25}{2(7)(9)} = \\frac{105}{126} \\approx 0.833 \\Rightarrow A \\approx 33.6°$.",
        examinerTips: [
          "If $\\cos A$ is negative, angle $A$ is obtuse (greater than $90°$).",
          "After finding one angle with the cosine rule, use the sine rule to find the second angle (it's usually quicker).",
        ],
        commonMistakes: [
          "Forgetting the minus sign in $-2bc\\cos A$.",
          "Using $a = b^2 + c^2 - 2bc\\cos A$ — taking the square root is essential.",
          "Confusing which side is 'opposite' to which angle when setting up.",
        ],
        recap: [
          "In triangle $PQR$: (a) $p = 8$, $q = 11$, $R = 68°$ — find $r$ (b) $p = 7$, $q = 9$, $r = 12$ — find the largest angle.",
        ],
      },
      {
        title: "Area of a Triangle = ½ab sinC",
        body:
          "For any triangle with sides $a$ and $b$ and included angle $C$:\n\n" +
          "$$\\text{Area} = \\frac{1}{2}ab\\sin C$$\n\n" +
          "**Use when given:** Two sides and the included angle (SAS).\n\n" +
          "**Example:** $a = 6$ cm, $b = 10$ cm, $C = 50°$.\n" +
          "Area $= \\frac{1}{2}(6)(10)\\sin 50° = 30 \\times 0.766 \\approx 22.98$ cm².\n\n" +
          "**When $C = 90°$:** Area $= \\frac{1}{2}ab\\sin 90° = \\frac{1}{2}ab$ — matches the standard formula.\n\n" +
          "**When $C = 30°$:** Area $= \\frac{1}{2}ab \\times 0.5 = \\frac{ab}{4}$.\n\n" +
          "This formula also allows finding unknown sides or angles when the area is given.",
        examinerTips: [
          "The angle $C$ must be the **included** angle — the one between sides $a$ and $b$.",
          "For the maximum area of a triangle with two fixed sides, the included angle should be $90°$ (since $\\sin 90° = 1$).",
        ],
        commonMistakes: [
          "Using a non-included angle in the formula.",
          "Forgetting the $\\frac{1}{2}$ factor.",
        ],
        recap: [
          "Find the area of a triangle with sides $7$ cm and $12$ cm and included angle $65°$.",
          "A triangle has area $45$ cm² and two sides $10$ cm and $12$ cm. Find the two possible values of the included angle.",
        ],
      },
    ],
  },
  {
    number: 41,
    title: "3D Trigonometry",
    section: "6. Pythagoras & Trigonometry",
    topic: "3D Trigonometry",
    intro:
      "Three-dimensional trigonometry involves applying Pythagoras and trigonometry within 3D shapes by identifying right-angled triangles in planes within the shape.",
    subheadings: [
      {
        title: "Trigonometry in 3D Shapes",
        body:
          "**Key method:** Identify a right-angled triangle that lies in a plane within the 3D shape. Apply Pythagoras or trigonometry to this triangle.\n\n" +
          "**Common 3D scenarios:**\n\n" +
          "**1. Cuboid diagonal:**\n" +
          "For a cuboid $l \\times w \\times h$, the space diagonal:\n" +
          "$d = \\sqrt{l^2 + w^2 + h^2}$\n\n" +
          "**2. Angle of a diagonal to the base:**\n" +
          "First find the base diagonal $d_{base} = \\sqrt{l^2 + w^2}$, then:\n" +
          "$\\tan\\theta = \\frac{h}{d_{base}}$\n\n" +
          "**3. Pyramid problems:**\n" +
          "Find the slant height by using Pythagoras from the apex to the midpoint of a base edge.\n\n" +
          "**Example:** Cuboid $4 \\times 3 \\times 5$ cm. Find the angle the space diagonal makes with the base.\n" +
          "Base diagonal $= \\sqrt{16 + 9} = 5$ cm.\n" +
          "$\\tan\\theta = \\frac{5}{5} = 1 \\Rightarrow \\theta = 45°$.",
        examinerTips: [
          "Draw the triangle clearly and label all sides before computing.",
          "In pyramid problems, find the slant height then the face angle — work in stages.",
        ],
        commonMistakes: [
          "Trying to use a single trig ratio across a 3D shape without identifying a 2D right-angled triangle first.",
          "Using the full space diagonal when the base diagonal is needed.",
        ],
        recap: [
          "A cuboid has dimensions $6$ cm × $8$ cm × $5$ cm. Find: (a) the length of the space diagonal (b) the angle it makes with the base.",
          "A square pyramid has base edge $10$ cm and height $12$ cm. Find the angle between a slant edge and the base.",
        ],
      },
    ],
  },
];
