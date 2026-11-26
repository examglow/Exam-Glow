import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Additional Mathematics (0606) 2028–2030 Syllabus Notes
 * Chapters 9–11: Circular Measure, Trigonometry, Permutations & Combinations
 */
export const ADDITIONAL_MATHEMATICS_PART3: Chapter[] = [
  {
    number: 9,
    title: "Circular Measure",
    section: "9. Circular measure",
    topic: "Radian Measure, Arc Length, Sector & Segment Areas",
    intro:
      "Radian measure provides the natural unit for angles in calculus and geometry. Candidates calculate arc lengths, sector and segment areas, and solve compound geometric problems involving circles, chords, and tangents.",
    subheadings: [
      {
        title: "Radian Measure & Conversion",
        body:
          "**Definition of a Radian:**\n" +
          "One **radian** ($1\\text{ rad}$) is the angle subtended at the centre of a circle by an arc whose length is equal to the radius of the circle.\n\n" +
          "**Conversion Formulae:**\n" +
          "$$\\pi\\text{ radians} = 180^\\circ \\iff 1\\text{ rad} = \\left(\\frac{180}{\\pi}\\right)^\\circ \\approx 57.3^\\circ$$\n" +
          "- **Degrees to Radians:** Multiply by $\\frac{\\pi}{180^\\circ}$.\n" +
          "- **Radians to Degrees:** Multiply by $\\frac{180^\\circ}{\\pi}$.\n\n" +
          "**Exact Special Angles in Radians:**\n" +
          "| Degrees | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ | $90^\\circ$ | $120^\\circ$ | $180^\\circ$ | $270^\\circ$ | $360^\\circ$ |\n" +
          "|---|---|---|---|---|---|---|---|---|\n" +
          "| Radians | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\frac{2\\pi}{3}$ | $\\pi$ | $\\frac{3\\pi}{2}$ | $2\\pi$ |",
        examinerTips: [
          "Check calculator angle mode! In Paper 2, keep calculator in RADIAN mode for circular measure questions, and DEGREES for degree-specified questions.",
          "Leave answers in terms of $\\pi$ when asked for an exact value.",
        ],
        commonMistakes: [
          "Entering radian values into a calculator set in degrees mode (or vice versa).",
        ],
        recap: [
          "Convert $135^\\circ$ to exact radians.",
          "Convert $\\frac{5\\pi}{6}$ radians to degrees.",
        ],
      },
      {
        title: "Arc Length, Sector Area & Segment Area",
        body:
          "**Fundamental Formulae (angle $\\theta$ must be in RADIANS):**\n" +
          "1. **Arc Length ($s$):**\n" +
          "   $$s = r\\theta$$\n" +
          "2. **Sector Area ($A_{\\text{sector}}$):**\n" +
          "   $$A_{\\text{sector}} = \\frac{1}{2}r^2\\theta$$\n" +
          "3. **Perimeter of a Sector:**\n" +
          "   $$P = 2r + s = 2r + r\\theta = r(2 + \\theta)$$\n" +
          "4. **Area of a Triangle Formed by Radii:**\n" +
          "   $$A_{\\text{triangle}} = \\frac{1}{2}ab\\sin C = \\frac{1}{2}r^2\\sin\\theta$$\n" +
          "5. **Area of a Minor Segment:**\n" +
          "   $$A_{\\text{segment}} = A_{\\text{sector}} - A_{\\text{triangle}} = \\frac{1}{2}r^2\\theta - \\frac{1}{2}r^2\\sin\\theta = \\mathbf{\\frac{1}{2}r^2(\\theta - \\sin\\theta)}$$\n\n" +
          "*Worked Example:* A sector of a circle of radius $8\\text{ cm}$ has an angle of $1.2\\text{ radians}$ at the centre.\n" +
          "- **Arc length:** $s = 8 \\times 1.2 = 9.6\\text{ cm}$.\n" +
          "- **Perimeter:** $P = 2(8) + 9.6 = 25.6\\text{ cm}$.\n" +
          "- **Sector area:** $A = \\frac{1}{2}(8^2)(1.2) = 0.5 \\times 64 \\times 1.2 = 38.4\\text{ cm}^2$.\n" +
          "- **Segment area:** $A_{\\text{segment}} = \\frac{1}{2}(64)(1.2 - \\sin 1.2) = 32(1.2 - 0.9320) = 32(0.2680) = 8.58\\text{ cm}^2$.",
        examinerTips: [
          "Notice that the formulas $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$ are NOT given in the examination formula list. You must commit them to memory!",
          "In composite shape questions (e.g. shaded regions), break down the area into familiar parts: (Sector) minus (Triangle) or (Kite) minus (Sector).",
        ],
        commonMistakes: [
          "Using degree angles in $s = r\\theta$ without converting to radians.",
          "Forgetting the two straight edge radii $2r$ when asked for the perimeter of a sector.",
        ],
        recap: [
          "A sector of a circle of radius $6\\text{ cm}$ has an arc length of $9\\text{ cm}$. Find the angle in radians and the area of the sector.",
          "State the formula for the area of a circular segment of radius $r$ and angle $\\theta$ radians.",
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Trigonometry",
    section: "10. Trigonometry",
    topic: "Six Trigonometric Functions, Identities, Graphs & Equations",
    intro:
      "Extends trigonometric ratios to all four quadrants and introduces reciprocal trigonometric functions (sec, cosec, cot), fundamental Pythagorean identities, solving equations over specified domains, and rigorous identity proofs.",
    subheadings: [
      {
        title: "The Six Trigonometric Functions & CAST Diagram",
        body:
          "**Reciprocal Trigonometric Functions:**\n" +
          "- **Secant:** $\\sec\\theta = \\frac{1}{\\cos\\theta}$ (defined where $\\cos\\theta \\ne 0$)\n" +
          "- **Cosecant:** $\\text{cosec}\\theta = \\csc\\theta = \\frac{1}{\\sin\\theta}$ (defined where $\\sin\\theta \\ne 0$)\n" +
          "- **Cotangent:** $\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}$ (defined where $\\sin\\theta \\ne 0$)\n\n" +
          "**The CAST Diagram (Signs Across Quadrants):**\n" +
          "- **Quadrant I ($0^\\circ$ to $90^\\circ$ / $0$ to $\\frac{\\pi}{2}$):** **All** six functions positive (**A**).\n" +
          "- **Quadrant II ($90^\\circ$ to $180^\\circ$ / $\\frac{\\pi}{2}$ to $\\pi$):** **Sine** and **cosec** positive (**S**).\n" +
          "- **Quadrant III ($180^\\circ$ to $270^\\circ$ / $\\pi$ to $\\frac{3\\pi}{2}$):** **Tan** and **cot** positive (**T**).\n" +
          "- **Quadrant IV ($270^\\circ$ to $360^\\circ$ / $\\frac{3\\pi}{2}$ to $2\\pi$):** **Cosine** and **sec** positive (**C**).\n\n" +
          "**Reference Angle (Basic Acute Angle $\\alpha$):**\n" +
          "- Find $\\alpha = \\sin^{-1}(|\\text{value}|)$ (always acute, positive).\n" +
          "- Locate required quadrants based on sign ($+$ or $-$):\n" +
          "  - Quad I: $\\theta = \\alpha$\n" +
          "  - Quad II: $\\theta = 180^\\circ - \\alpha$ (or $\\pi - \\alpha$)\n" +
          "  - Quad III: $\\theta = 180^\\circ + \\alpha$ (or $\\pi + \\alpha$)\n" +
          "  - Quad IV: $\\theta = 360^\\circ - \\alpha$ (or $2\\pi - \\alpha$)",
        examinerTips: [
          "Remember: third letter mnemonic for reciprocal functions:\n- se**c** $\\to \\frac{1}{\\cos}$\n- co**s**ec $\\to \\frac{1}{\\sin}$\n- co**t** $\\to \\frac{1}{\\tan}$",
        ],
        commonMistakes: [
          "Confusing $\\sec\\theta$ with $\\cos^{-1}\\theta$ — $\\sec\\theta$ is the reciprocal $\\frac{1}{\\cos\\theta}$, while $\\cos^{-1}$ is the inverse function $\\arccos$.",
        ],
        recap: [
          "Given $\\sin\\theta = -0.6$ and $\\theta$ lies in the third quadrant, find the exact values of $\\cos\\theta$, $\\tan\\theta$, and $\\sec\\theta$.",
          "State the quadrants in which $\\cot\\theta$ is negative.",
        ],
      },
      {
        title: "Trigonometric Graphs, Amplitude & Period",
        body:
          "**Forms: $y = a\\sin(bx) + c$ and $y = a\\cos(bx) + c$:**\n" +
          "- **Amplitude:** $|a|$ (half the vertical distance between maximum and minimum).\n" +
          "- **Period:**\n" +
          "  - In degrees: $\\text{Period} = \\frac{360^\\circ}{b}$\n" +
          "  - In radians: $\\text{Period} = \\frac{2\\pi}{b}$\n" +
          "- **Vertical shift (Midline):** $y = c$.\n" +
          "- **Maximum value:** $c + |a|$; **Minimum value:** $c - |a|$.\n\n" +
          "**Form: $y = a\\tan(bx) + c$:**\n" +
          "- **Amplitude:** Undefined (tangent extends to $\\pm\\infty$).\n" +
          "- **Period:**\n" +
          "  - In degrees: $\\text{Period} = \\frac{180^\\circ}{b}$\n" +
          "  - In radians: $\\text{Period} = \\frac{\\pi}{b}$\n" +
          "- **Vertical Asymptotes:** Occur where the argument $bx = 90^\\circ, 270^\\circ, \\dots$ (or $\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\dots$). Candidates must clearly label the x-coordinates of all asymptotes.",
        examinerTips: [
          "Tangent graphs have period $\\frac{180^\\circ}{b}$ (or $\\frac{\\pi}{b}$), NOT $\\frac{360^\\circ}{b}$!",
          "On graphs of $y = \\tan(bx)$, draw vertical asymptotes as clear dashed lines and label their equations, e.g. $x = \\frac{\\pi}{4}$.",
        ],
        commonMistakes: [
          "Drawing tangent curves with horizontal asymptotes instead of vertical ones.",
        ],
        recap: [
          "State the amplitude and period of $y = 3\\cos(4x) - 1$.",
          "Find the period and the equations of the vertical asymptotes of $y = 2\\tan(3x)$ for $0 \\le x \\le \\pi$.",
        ],
      },
      {
        title: "Pythagorean Identities & Proving Trigonometric Identities",
        body:
          "**The Three Fundamental Identities (given in formula list):**\n" +
          "$$\\mathbf{\\sin^2 A + \\cos^2 A = 1}$$\n" +
          "$$\\mathbf{\\sec^2 A = 1 + \\tan^2 A \\iff \\sec^2 A - \\tan^2 A = 1}$$\n" +
          "$$\\mathbf{\\text{cosec}^2 A = 1 + \\cot^2 A \\iff \\text{cosec}^2 A - \\cot^2 A = 1}$$\n\n" +
          "**Derivation:**\n" +
          "- Divide $\\sin^2 A + \\cos^2 A = 1$ by $\\cos^2 A$: $\\frac{\\sin^2 A}{\\cos^2 A} + 1 = \\frac{1}{\\cos^2 A} \\implies \\tan^2 A + 1 = \\sec^2 A$.\n" +
          "- Divide $\\sin^2 A + \\cos^2 A = 1$ by $\\sin^2 A$: $1 + \\frac{\\cos^2 A}{\\sin^2 A} = \\frac{1}{\\sin^2 A} \\implies 1 + \\cot^2 A = \\text{cosec}^2 A$.\n\n" +
          "**Technique for Proving Identities:**\n" +
          "1. Start with the **more complicated side** (usually LHS).\n" +
          "2. Express in terms of $\\sin$ and $\\cos$ if other approaches are not obvious.\n" +
          "3. Put fractions over a common denominator.\n" +
          "4. Apply the fundamental Pythagorean identities.\n" +
          "5. Simplify until it matches the RHS exactly.\n\n" +
          "*Worked Example:* Prove that $\\sin x \\tan x + \\cos x = \\sec x$.\n" +
          "- $\\text{LHS} = \\sin x \\left(\\frac{\\sin x}{\\cos x}\\right) + \\cos x = \\frac{\\sin^2 x}{\\cos x} + \\cos x$\n" +
          "- Common denominator: $\\frac{\\sin^2 x + \\cos^2 x}{\\cos x}$\n" +
          "- Since $\\sin^2 x + \\cos^2 x = 1$:\n" +
          "- $\\text{LHS} = \\frac{1}{\\cos x} = \\sec x = \\text{RHS} \\quad \\blacksquare$",
        examinerTips: [
          "In 'Prove' questions, do NOT move terms across the equals sign like an equation. Work on LHS until it becomes RHS, or RHS until it becomes LHS.",
        ],
        commonMistakes: [
          "Assuming what is to be proved and treating an identity proof as an equation to solve.",
        ],
        recap: [
          "Prove that $\\frac{1}{1 - \\sin\\theta} + \\frac{1}{1 + \\sin\\theta} = 2\\sec^2\\theta$.",
          "Show that $(\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1$.",
        ],
      },
      {
        title: "Solving Trigonometric Equations",
        body:
          "**Step-by-Step Method:**\n" +
          "1. Use identities to express the equation in terms of a **single trigonometric function**.\n" +
          "2. Factorise or solve the resulting quadratic.\n" +
          "3. Adjust the domain for multiple angles (e.g. if $0 \\le x \\le 2\\pi$, then for $2x$ the domain is $0 \\le 2x \\le 4\\pi$).\n" +
          "4. Find basic acute angle $\\alpha$.\n" +
          "5. Use CAST quadrants to list all solutions in the adjusted domain.\n" +
          "6. Divide/adjust to get the final values of the variable.\n\n" +
          "*Worked Example:* Solve $2\\sec^2\\theta + \\tan\\theta - 3 = 0$ for $0^\\circ \\le \\theta \\le 360^\\circ$.\n" +
          "- Substitute $\\sec^2\\theta = 1 + \\tan^2\\theta$:\n" +
          "  $$2(1 + \\tan^2\\theta) + \\tan\\theta - 3 = 0 \\implies 2\\tan^2\\theta + \\tan\\theta - 1 = 0$$\n" +
          "- Factorise:\n" +
          "  $$(2\\tan\\theta - 1)(\\tan\\theta + 1) = 0$$\n" +
          "- Branch 1: $\\tan\\theta = 0.5$ (positive $\\implies$ Quad I and III):\n" +
          "  - Basic angle $\\alpha = \\tan^{-1}(0.5) \\approx 26.6^\\circ$\n" +
          "  - Quad I: $\\theta = 26.6^\\circ$\n" +
          "  - Quad III: $\\theta = 180^\\circ + 26.6^\\circ = 206.6^\\circ$\n" +
          "- Branch 2: $\\tan\\theta = -1$ (negative $\\implies$ Quad II and IV):\n" +
          "  - Basic angle $\\alpha = \\tan^{-1}(1) = 45^\\circ$\n" +
          "  - Quad II: $\\theta = 180^\\circ - 45^\\circ = 135^\\circ$\n" +
          "  - Quad IV: $\\theta = 360^\\circ - 45^\\circ = 315^\\circ$\n" +
          "- Solutions: $\\theta = 26.6^\\circ, \\; 135^\\circ, \\; 206.6^\\circ, \\; 315^\\circ$.",
        examinerTips: [
          "For multiple angle equations like $\\sin(2x) = 0.5$, ALWAYS expand the working range first ($0 \\le 2x \\le 720^\\circ$) before finding all values, and only divide by $2$ at the very end!",
        ],
        commonMistakes: [
          "Dividing by $2$ too early and missing half the solutions.",
        ],
        recap: [
          "Solve $4\\cot\\theta = \\tan\\theta$ for $0^\\circ \\le \\theta \\le 360^\\circ$.",
          "Solve $2\\cos(2x - \\pi/3) = 1$ for $0 \\le x \\le \\pi$.",
        ],
      },
    ],
  },
  {
    number: 11,
    title: "Permutations and Combinations",
    section: "11. Permutations and combinations",
    topic: "Factorials, Arrangement Restrictions & Selection Problems",
    intro:
      "Combinatorics is the mathematics of counting. Candidates distinguish between permutations where order matters and combinations where order is irrelevant, applying grouping and gap strategies to restricted arrangements and selections.",
    subheadings: [
      {
        title: "Permutations vs Combinations & Basic Counting",
        body:
          "**The Multiplication Principle:**\n" +
          "If a first task can be done in $m$ ways and a second independent task in $n$ ways, the two tasks in succession can be done in $m \\times n$ ways.\n\n" +
          "**Factorial Notation:**\n" +
          "$$n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 2 \\times 1 \\quad \\text{with } 0! = 1$$\n\n" +
          "**Permutations (Order MATTERS):**\n" +
          "The number of ways to arrange $r$ items chosen from $n$ distinct items in order:\n" +
          "$$^nP_r = \\frac{n!}{(n - r)!} = n(n-1)(n-2)\\dots(n-r+1)$$\n" +
          "- Number of ways to arrange all $n$ items in a line: $^nP_n = n!$.\n\n" +
          "**Combinations (Order DOES NOT matter):**\n" +
          "The number of ways to choose a team or subset of $r$ items from $n$ distinct items regardless of order:\n" +
          "$$^nC_r = \\binom{n}{r} = \\frac{n!}{r!(n - r)!} = \\frac{^nP_r}{r!}$$\n" +
          "- Symmetry: $\\binom{n}{r} = \\binom{n}{n-r}$.",
        examinerTips: [
          "Ask yourself: 'Does order matter?'\n- If yes (e.g. running race 1st/2nd/3rd, forming a PIN code, seating in a line) $\\implies$ Permutation ($^nP_r$).\n- If no (e.g. selecting a committee of 4 people, choosing 3 books to read) $\\implies$ Combination ($^nC_r$).",
        ],
        commonMistakes: [
          "Using permutations for team or committee selections where order does not matter.",
        ],
        recap: [
          "Explain the difference between a permutation and a combination.",
          "Evaluate $^8P_3$ and $^8C_3$ without a calculator.",
        ],
      },
      {
        title: "Arrangements with Restrictions (Together & Separate)",
        body:
          "**Strategy 1 — Items Must Be TOGETHER ('Tie in a Bundle' Method):**\n" +
          "1. Treat the grouped items as a single block / bundle.\n" +
          "2. Count the total number of objects (remaining individual items $+$ the 1 bundle).\n" +
          "3. Arrange these objects: $N!$.\n" +
          "4. Multiply by the number of internal arrangements of the items inside the bundle: $k!$.\n" +
          "$$\\text{Total} = N! \\times k!$$\n\n" +
          "*Worked Example:* How many arrangements of the letters in MATHS have M and A together?\n" +
          "- Bundle $(MA)$ and letters $T, H, S$. Total units = $4$.\n" +
          "- Ways to arrange units = $4! = 24$.\n" +
          "- Internal arrangement of $(MA)$ = $2! = 2$.\n" +
          "- Total = $24 \\times 2 = 48$.\n\n" +
          "**Strategy 2 — Items Must Be SEPARATED ('Slot / Gap' Method):**\n" +
          "1. Arrange the non-restricted items first: $m!$.\n" +
          "2. This creates $(m + 1)$ possible gaps (including ends).\n" +
          "3. Place the restricted items into these gaps using permutations: $^{m+1}P_k$.\n" +
          "$$\\text{Total} = m! \\times {^{m+1}P_k}$$\n\n" +
          "*Worked Example:* 5 boys and 3 girls sit in a row. How many ways can they be seated so that no two girls sit next to each other?\n" +
          "- Seat the 5 boys first: $5! = 120$ ways.\n" +
          "- The 5 boys create 6 gaps: $\\_ B_1 \\_ B_2 \\_ B_3 \\_ B_4 \\_ B_5 \\_$.\n" +
          "- Choose and arrange 3 gaps for the 3 girls: $^6P_3 = 6 \\times 5 \\times 4 = 120$.\n" +
          "- Total = $120 \\times 120 = 14,400$ ways.",
        examinerTips: [
          "For 'items never together', you can also compute (Total unrestricted arrangements) minus (Arrangements with items together) when dealing with two items.",
          "For three or more items never together, ALWAYS use the gap/slot method!",
        ],
        commonMistakes: [
          "Assuming 'no two items together' is just total minus all three together — they could have two together and one separate.",
        ],
        recap: [
          "Four men and four women stand in a line. In how many ways can they stand if the men must all stand together?",
          "In how many ways can 4 distinct books be arranged on a shelf if 2 specific books must not be next to each other?",
        ],
      },
      {
        title: "Team and Committee Selection Problems",
        body:
          "**Selection with Specific Constraints:**\n" +
          "When selecting a group with conditions like 'at least one' or 'at most one':\n" +
          "1. Identify all mutually exclusive valid cases.\n" +
          "2. Calculate the combinations for each case using $^nC_r$.\n" +
          "3. **Add** the number of ways for each case together.\n\n" +
          "*Worked Example:* A committee of 5 is to be chosen from 6 men and 4 women. Find the number of ways to form the committee if it must contain at least 2 women.\n" +
          "- Case 1: 2 women and 3 men $\\implies \\binom{4}{2} \\times \\binom{6}{3} = 6 \\times 20 = 120$\n" +
          "- Case 2: 3 women and 2 men $\\implies \\binom{4}{3} \\times \\binom{6}{2} = 4 \\times 15 = 60$\n" +
          "- Case 3: 4 women and 1 man $\\implies \\binom{4}{4} \\times \\binom{6}{1} = 1 \\times 6 = 6$\n" +
          "- Total = $120 + 60 + 6 = 186$ ways.",
        examinerTips: [
          "Alternatively, use the complement method: Total possible committees $\\binom{10}{5} = 252$, minus 0 women $\\binom{4}{0}\\binom{6}{5} = 6$, minus 1 woman $\\binom{4}{1}\\binom{6}{4} = 60$. Total $= 252 - 6 - 60 = 186$.",
        ],
        commonMistakes: [
          "Multiplying case totals together instead of adding them.",
        ],
        recap: [
          "A team of 4 is selected from 5 boys and 7 girls. Find the number of possible teams with exactly 2 boys.",
          "Find the number of ways to select a delegation of 3 from 8 candidates if one particular person refuses to serve.",
        ],
      },
    ],
  },
];
