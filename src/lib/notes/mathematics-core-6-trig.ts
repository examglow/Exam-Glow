import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Core — Section 6: Pythagoras & Trigonometry
 * Chapters 37 to 38 (Categories matching official Core syllabus breakdown)
 */
export const MATHEMATICS_CORE_TRIG: Chapter[] = [
  {
    number: 37,
    title: "Pythagoras",
    section: "6. Pythagoras & Trigonometry",
    topic: "Pythagoras",
    intro:
      "Pythagoras' Theorem in right-angled triangles: finding hypotenuse and shorter sides, converse proofs, and applied distance problems.",
    subheadings: [
      {
        title: "Pythagoras Theorem",
        body:
          "In any right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides:\n\n" +
          "$$\\mathbf{a^2 + b^2 = c^2}$$\n\n" +
          "- **$c$ = Hypotenuse:** The longest side of the right-angled triangle, always located directly opposite the $90^\\circ$ right angle.\n" +
          "- **$a, b$:** The two shorter sides forming the right angle.\n\n" +
          "**1. Finding the Hypotenuse ($c$):**\n" +
          "$$\\mathbf{c = \\sqrt{a^2 + b^2}}$$\n" +
          "Example: Legs are $5\\text{ cm}$ and $12\\text{ cm}$:\n" +
          "$$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ cm}$$\n\n" +
          "**2. Finding a Shorter Side ($a$ or $b$):**\n" +
          "$$\\mathbf{a = \\sqrt{c^2 - b^2}}$$\n" +
          "Example: Hypotenuse is $10\\text{ cm}$, one leg is $6\\text{ cm}$:\n" +
          "$$a = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8\\text{ cm}$$\n\n" +
          "**3. Testing for a Right Angle (Converse):**\n" +
          "If $a^2 + b^2 = c^2$, the triangle is right-angled. If $a^2 + b^2 \\neq c^2$, it is not.",
        examinerTips: [
          "Always identify the hypotenuse first before calculating. If finding a shorter side, you MUST subtract.",
        ],
        commonMistakes: [
          "Adding instead of subtracting when calculating a shorter side.",
        ],
        recap: [
          "Calculate the length of the hypotenuse of a right-angled triangle with sides $8\\text{ cm}$ and $15\\text{ cm}$.",
          "A ladder of length $6.5\\text{ m}$ rests against a vertical wall with its foot $2.5\\text{ m}$ from the wall. How far up the wall does it reach?",
        ],
      },
    ],
  },
  {
    number: 38,
    title: "Trigonometry",
    section: "6. Pythagoras & Trigonometry",
    topic: "Trigonometry",
    intro:
      "Right-angled triangle trigonometry: labelling sides, applying SOH CAH TOA to find unknown lengths and angles, and angles of elevation and depression.",
    subheadings: [
      {
        title: "Trigonometry to Find Lengths",
        body:
          "For any right-angled triangle with reference angle $\\theta$:\n\n" +
          "1. **Labelling Sides:**\n" +
          "   - **Hypotenuse (H):** Longest side, opposite $90^\\circ$.\n" +
          "   - **Opposite (O):** Side directly opposite angle $\\theta$.\n" +
          "   - **Adjacent (A):** Side next to angle $\\theta$ (between $\\theta$ and $90^\\circ$).\n\n" +
          "2. **The Trigonometric Ratios (SOH CAH TOA):**\n" +
          "   $$\\mathbf{\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}} = \\frac{O}{H}}$$\n" +
          "   $$\\mathbf{\\cos(\\theta) = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}} = \\frac{A}{H}}$$\n" +
          "   $$\\mathbf{\\tan(\\theta) = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{O}{A}}$$\n\n" +
          "**Step-by-step method to find a length:**\n" +
          "1. Label sides O, A, H.\n" +
          "2. Choose the ratio involving the known side and the unknown side.\n" +
          "3. Set up the equation and rearrange for the unknown.\n" +
          "- Example: In $\\triangle ABC$, $\\theta = 35^\\circ$, Hypotenuse $= 12\\text{ cm}$. Find Opposite:\n" +
          "  $$\\sin(35^\\circ) = \\frac{O}{12} \\implies O = 12 \\times \\sin(35^\\circ) \\approx 6.88\\text{ cm}$$",
        examinerTips: [
          "Check your calculator is in DEGREE mode (`D` on display).",
          "Give lengths to 3 significant figures unless told otherwise.",
        ],
        commonMistakes: [
          "Mixing up Opposite and Adjacent sides.",
          "Using Radian mode on the calculator.",
        ],
        recap: [
          "Find the length of the side adjacent to an angle of $42^\\circ$ in a right-angled triangle with hypotenuse $15\\text{ cm}$.",
        ],
      },
      {
        title: "Trigonometry to Find Angles",
        body:
          "To find an unknown angle $\\theta$ given two side lengths, use the **inverse trigonometric functions** ($\\sin^{-1}, \\cos^{-1}, \\tan^{-1}$):\n\n" +
          "$$\\mathbf{\\theta = \\sin^{-1}\\left(\\frac{O}{H}\\right)}$$\n" +
          "$$\\mathbf{\\theta = \\cos^{-1}\\left(\\frac{A}{H}\\right)}$$\n" +
          "$$\\mathbf{\\theta = \\tan^{-1}\\left(\\frac{O}{A}\\right)}$$\n\n" +
          "**Worked Example:** Find angle $\\theta$ where Opposite $= 7\\text{ cm}$ and Adjacent $= 10\\text{ cm}$:\n" +
          "$$\\tan(\\theta) = \\frac{7}{10} = 0.7$$\n" +
          "$$\\theta = \\tan^{-1}(0.7) \\approx 35.0^\\circ$$\n\n" +
          "**Angles of Elevation & Depression:**\n" +
          "- **Angle of Elevation:** Angle measured UPWARDS from the horizontal line of sight.\n" +
          "- **Angle of Depression:** Angle measured DOWNWARDS from the horizontal line of sight.\n" +
          "- Note: By alternate angles on parallel horizontal lines, $\\text{Angle of Elevation} = \\text{Angle of Depression}$.",
        examinerTips: [
          "Always give angle answers correct to **1 decimal place** as specified by Cambridge rules.",
          "Draw a horizontal reference line before marking an angle of depression.",
        ],
        commonMistakes: [
          "Measuring angle of depression from the vertical instead of from the horizontal.",
        ],
        recap: [
          "Find angle $\\theta$ in a right-angled triangle where $\\text{Adjacent} = 8\\text{ cm}$ and $\\text{Hypotenuse} = 11\\text{ cm}$.",
          "A tower $50\\text{ m}$ high casts a shadow $30\\text{ m}$ long on level ground. Calculate the angle of elevation of the sun.",
        ],
      },
    ],
  },
];
