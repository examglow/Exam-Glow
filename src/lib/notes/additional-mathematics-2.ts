import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Additional Mathematics (0606) 2028–2030 Syllabus Notes
 * Chapters 5–8: Simultaneous Equations, Logs & Exponentials, Straight-Line Graphs, Coordinate Geometry of the Circle
 */
export const ADDITIONAL_MATHEMATICS_PART2: Chapter[] = [
  {
    number: 5,
    title: "Simultaneous Equations",
    section: "5. Simultaneous equations",
    topic: "Linear and Non-Linear Systems in Two Unknowns",
    intro:
      "Solving pairs of simultaneous equations in two unknowns where one or both equations are non-linear. The primary technique is substitution, followed by systematic factoring or the quadratic formula.",
    subheadings: [
      {
        title: "Solving Linear and Non-Linear Systems by Substitution",
        body:
          "**Standard Algebraic Method:**\n" +
          "1. **Isolate one variable:** From the simpler equation (usually the linear one), express one variable in terms of the other (e.g. $y = mx + c$ or $x = f(y)$).\n" +
          "2. **Substitute:** Replace that variable in the non-linear equation to create a single quadratic or rational equation in one unknown.\n" +
          "3. **Solve:** Expand, collect terms into standard form $au^2 + bu + c = 0$, and solve for the first variable.\n" +
          "4. **Find paired values:** Substitute each solution back into the linear expression to find the corresponding values of the second variable.\n" +
          "5. **Pair solutions clearly:** Write solutions as coordinate pairs $(x_1, y_1)$ and $(x_2, y_2)$.\n\n" +
          "**Worked Example 1 — Linear and Quadratic:**\n" +
          "Solve the simultaneous equations:\n" +
          "$$y - x + 3 = 0 \\quad \\text{and} \\quad x^2 - 3xy + y^2 + 19 = 0$$\n" +
          "- From linear equation: $y = x - 3$.\n" +
          "- Substitute into quadratic equation:\n" +
          "  $$x^2 - 3x(x - 3) + (x - 3)^2 + 19 = 0$$\n" +
          "- Expand:\n" +
          "  $$x^2 - 3x^2 + 9x + x^2 - 6x + 9 + 19 = 0 \\implies -x^2 + 3x + 28 = 0$$\n" +
          "- Multiply by $-1$: $x^2 - 3x - 28 = 0 \\implies (x - 7)(x + 4) = 0$.\n" +
          "- Solutions for $x$: $x = 7$ or $x = -4$.\n" +
          "- Corresponding $y$ values ($y = x - 3$):\n" +
          "  - When $x = 7 \\implies y = 7 - 3 = 4 \\implies (7, 4)$.\n" +
          "  - When $x = -4 \\implies y = -4 - 3 = -7 \\implies (-4, -7)$.\n\n" +
          "**Worked Example 2 — Product and Fractional Equations:**\n" +
          "Solve $xy^2 = 4$ and $xy = 3$.\n" +
          "- Divide the first equation by the second: $\\frac{xy^2}{xy} = \\frac{4}{3} \\implies y = \\frac{4}{3}$.\n" +
          "- Substitute into $xy = 3$: $x\\left(\\frac{4}{3}\\right) = 3 \\implies x = \\frac{9}{4}$.\n" +
          "- Solution: $x = 2.25, \\; y = \\frac{4}{3}$.",
        examinerTips: [
          "Always pair your $x$ and $y$ answers together clearly (e.g. $x = 7, y = 4$ or $x = -4, y = -7$). Do not write a list of $x$ values and a detached list of $y$ values.",
          "Always substitute back into the linear equation to avoid introducing extraneous pairings.",
        ],
        commonMistakes: [
          "Mismatched pairings: pairing $x_1$ with $y_2$.",
          "Expanding $(x - 3)^2$ incorrectly as $x^2 + 9$ (missing the middle term $-6x$).",
        ],
        recap: [
          "Solve the simultaneous equations $2x + y = 7$ and $x^2 + y^2 = 10$.",
          "Solve the system $\\frac{y}{x} = 2$ and $x^2 + xy = 12$.",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Logarithmic and Exponential Functions",
    section: "6. Logarithmic and exponential functions",
    topic: "Laws of Logarithms, Change of Base & Asymptotic Curves",
    intro:
      "Logarithms are the inverses of exponential functions. This chapter covers the formal laws of logarithms, natural logarithms (ln), change of base, and solving non-linear indicial equations.",
    subheadings: [
      {
        title: "Properties and Graphs of Exponential and Logarithmic Functions",
        body:
          "**Fundamental Relationship:**\n" +
          "$$y = a^x \\iff x = \\log_a y \\quad (a > 0, a \\ne 1, y > 0)$$\n" +
          "- The natural exponential function $f(x) = e^x$ has the natural logarithm $g(x) = \\ln x = \\log_e x$ as its inverse.\n" +
          "- The graphs of $y = e^x$ and $y = \\ln x$ are reflections of each other in the line $y = x$.\n\n" +
          "**Asymptotes and Graph Features:**\n" +
          "1. **Exponential Graph $y = k e^{nx} + a$:**\n" +
          "   - **Horizontal asymptote:** The line $y = a$ (as $x \\to -\\infty$ if $n > 0$).\n" +
          "   - **Domain:** $x \\in \\mathbb{R}$.\n" +
          "   - **Range:** $y > a$ (for $k > 0$).\n" +
          "   - **y-intercept:** Set $x = 0 \\implies y = k + a$.\n\n" +
          "2. **Logarithmic Graph $y = k \\ln(ax + b)$:**\n" +
          "   - **Vertical asymptote:** The line $x = -\\frac{b}{a}$ (where the argument $ax + b = 0$).\n" +
          "   - **Domain:** $ax + b > 0 \\implies x > -\\frac{b}{a}$ (for $a > 0$).\n" +
          "   - **Range:** $y \\in \\mathbb{R}$ (all real numbers).\n" +
          "   - **x-intercept:** Set $y = 0 \\implies ax + b = 1 \\implies x = \\frac{1-b}{a}$.",
        examinerTips: [
          "When asked to sketch an exponential or logarithmic curve, you MUST state the equation of the asymptote clearly (e.g. 'horizontal asymptote $y = 3$' or 'vertical asymptote $x = -2$').",
          "Remember: $e^0 = 1$, $\\ln 1 = 0$, $\\ln e = 1$, and $e^{\\ln x} = x$.",
        ],
        commonMistakes: [
          "Drawing the exponential curve crossing its horizontal asymptote.",
        ],
        recap: [
          "State the equation of the asymptote and the coordinates of the y-intercept of $y = 4e^{2x} - 3$.",
          "State the domain, range, and vertical asymptote of $f(x) = 3\\ln(2x - 6)$.",
        ],
      },
      {
        title: "Laws of Logarithms & Change of Base",
        body:
          "**The Core Laws of Logarithms (for any base $a > 0, a \\ne 1$):**\n" +
          "1. **Product Rule:** $\\log_a(xy) = \\log_a x + \\log_a y$\n" +
          "2. **Quotient Rule:** $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$\n" +
          "3. **Power Rule:** $\\log_a(x^k) = k \\log_a x$\n" +
          "4. **Special Values:** $\\log_a 1 = 0$, $\\log_a a = 1$\n" +
          "5. **Common Logarithm:** $\\lg x = \\log_{10} x$\n\n" +
          "**Change of Base Formula:**\n" +
          "$$\\log_a b = \\frac{\\log_c b}{\\log_c a} = \\frac{\\ln b}{\\ln a} = \\frac{\\lg b}{\\lg a}$$\n" +
          "- *Special case:* $\\log_a b = \\frac{1}{\\log_b a}$.\n\n" +
          "*Worked Example (Expressing as a Single Logarithm):*\n" +
          "Write $3 + 2\\lg p - \\lg q$ as a single base-10 logarithm.\n" +
          "- Write $3$ as $\\lg(10^3) = \\lg 1000$.\n" +
          "- Apply power law: $2\\lg p = \\lg(p^2)$.\n" +
          "- Combine: $\\lg 1000 + \\lg(p^2) - \\lg q = \\lg\\left(\\frac{1000p^2}{q}\\right)$.\n\n" +
          "*Worked Example (Change of Base):*\n" +
          "Evaluate $\\log_2 7$ using natural logarithms: $\\log_2 7 = \\frac{\\ln 7}{\\ln 2} \\approx \\frac{1.9459}{0.6931} = 2.807$.",
        examinerTips: [
          "Never write $\\log(x+y) = \\log x + \\log y$ — logarithms turn multiplication into addition, NOT addition into addition!",
          "When solving logarithmic equations, check that all solutions keep the arguments of all logarithms strictly positive ($> 0$).",
        ],
        commonMistakes: [
          "Dividing by zero by forgetting that $\\ln 1 = 0$.",
          "Applying power law improperly, e.g. writing $(\\log x)^2 = 2\\log x$. Only $\\log(x^2) = 2\\log x$.",
        ],
        recap: [
          "Express $2\\log_a x - \\frac{1}{2}\\log_a y + 1$ as a single logarithm to base $a$.",
          "Show that $\\log_4 x = \\frac{1}{2}\\log_2 x$.",
        ],
      },
      {
        title: "Solving Indicial and Logarithmic Equations",
        body:
          "**1. Solving Equations of the Form $a^x = b$:**\n" +
          "- Take natural logs or base-10 logs of both sides:\n" +
          "  $$\\ln(a^x) = \\ln b \\implies x \\ln a = \\ln b \\implies x = \\frac{\\ln b}{\\ln a}$$\n\n" +
          "**2. Solving $a^{f(x)} = b^{g(x)}$:**\n" +
          "- Take logs of both sides: $f(x) \\ln a = g(x) \\ln b$, expand and solve for $x$.\n\n" +
          "*Worked Example:* Solve $3^{2x-1} = 5^{x+2}$ to 3 significant figures.\n" +
          "- Take natural logs:\n" +
          "  $$\\ln(3^{2x-1}) = \\ln(5^{x+2}) \\implies (2x-1)\\ln 3 = (x+2)\\ln 5$$\n" +
          "- Expand:\n" +
          "  $$2x\\ln 3 - \\ln 3 = x\\ln 5 + 2\\ln 5$$\n" +
          "- Collect $x$ terms on one side:\n" +
          "  $$x(2\\ln 3 - \\ln 5) = 2\\ln 5 + \\ln 3$$\n" +
          "- Solve for $x$:\n" +
          "  $$x = \\frac{2\\ln 5 + \\ln 3}{2\\ln 3 - \\ln 5} = \\frac{\\ln 25 + \\ln 3}{\\ln 9 - \\ln 5} = \\frac{\\ln 75}{\\ln 1.8} \\approx \\frac{4.3175}{0.5878} = 7.35$$",
        examinerTips: [
          "Keep exact log expressions until the final calculator step to avoid premature rounding errors.",
        ],
        commonMistakes: [
          "Writing $(2x-1)\\ln 3$ as $2x - \\ln 3$ (forgetting brackets around the exponent binomial).",
        ],
        recap: [
          "Solve $4^{x+1} = 7^x$, giving your answer correct to 3 significant figures.",
          "Solve $\\log_2(x+3) + \\log_2(x-3) = 4$.",
        ],
      },
    ],
  },
  {
    number: 7,
    title: "Straight-Line Graphs",
    section: "7. Straight-line graphs",
    topic: "Parallel/Perpendicular Lines & Linear Transformations",
    intro:
      "Coordinate geometry of straight lines connects geometric properties with algebra, including perpendicular bisectors and transforming non-linear experimental laws into linear form (Y = mX + c).",
    subheadings: [
      {
        title: "Line Equations, Perpendicular Bisectors & Lengths",
        body:
          "**Essential Formulae:**\n" +
          "- **Gradient:** $m = \\frac{y_2 - y_1}{x_2 - x_1}$\n" +
          "- **Point-Gradient Form:** $y - y_1 = m(x - x_1)$\n" +
          "- **Distance between two points:** $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$\n" +
          "- **Midpoint:** $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$\n" +
          "- **Parallel lines:** $m_1 = m_2$\n" +
          "- **Perpendicular lines:** $m_1 \\times m_2 = -1 \\iff m_2 = -\\frac{1}{m_1}$\n\n" +
          "**Finding the Perpendicular Bisector of Line Segment $AB$:**\n" +
          "1. Find the coordinates of the midpoint $M$ of $AB$.\n" +
          "2. Calculate the gradient $m_{AB}$ of line $AB$.\n" +
          "3. The perpendicular gradient is $m_{\\perp} = -\\frac{1}{m_{AB}}$.\n" +
          "4. Form the equation using point-gradient form passing through $M$: $y - y_M = m_{\\perp}(x - x_M)$.\n\n" +
          "*Worked Example:* Find the equation of the perpendicular bisector of $A(-2, 5)$ and $B(4, -3)$.\n" +
          "- Midpoint: $M = \\left(\\frac{-2+4}{2}, \\frac{5+(-3)}{2}\\right) = (1, 1)$.\n" +
          "- Gradient $m_{AB} = \\frac{-3 - 5}{4 - (-2)} = \\frac{-8}{6} = -\\frac{4}{3}$.\n" +
          "- Perpendicular gradient: $m_{\\perp} = -\\frac{1}{-4/3} = +\\frac{3}{4}$.\n" +
          "- Equation: $y - 1 = \\frac{3}{4}(x - 1) \\implies 4y - 4 = 3x - 3 \\implies 3x - 4y + 1 = 0$.",
        examinerTips: [
          "Express your final line equation in the form requested in the question (e.g. $y = mx + c$ or $ax + by + c = 0$ where $a, b, c$ are integers).",
        ],
        commonMistakes: [
          "Forgetting to invert the gradient when finding perpendicular slope (e.g. using $+4/3$ instead of $+3/4$).",
        ],
        recap: [
          "Points $P(1, 4)$ and $Q(5, -2)$ are given. Find the length of $PQ$ and the equation of its perpendicular bisector.",
          "Determine whether the lines $2x - 3y = 5$ and $3x + 2y = 8$ are perpendicular.",
        ],
      },
      {
        title: "Transforming Non-Linear Relationships to Linear Form",
        body:
          "In scientific and experimental modeling, non-linear relationships $y = f(x)$ can be converted into a linear equation $Y = mX + c$ so that unknown constants can be determined from the gradient and vertical intercept.\n\n" +
          "**1. Power Law: $y = A x^n$ ($A > 0, x > 0$):**\n" +
          "- Take natural logs: $\\ln y = \\ln(A x^n) = \\ln A + n \\ln x$.\n" +
          "- Match with $Y = mX + c$:\n" +
          "  $$\\underbrace{\\ln y}_{Y} = \\underbrace{n}_{m} \\cdot \\underbrace{\\ln x}_{X} + \\underbrace{\\ln A}_{c}$$\n" +
          "- **Plot:** $\\ln y$ against $\\ln x$.\n" +
          "- **Gradient:** $m = n$.\n" +
          "- **Y-intercept:** $c = \\ln A \\implies A = e^c$.\n\n" +
          "**2. Exponential Law: $y = A b^x$ ($A > 0, b > 0$):**\n" +
          "- Take natural logs: $\\ln y = \\ln A + x \\ln b$.\n" +
          "- Match with $Y = mX + c$:\n" +
          "  $$\\underbrace{\\ln y}_{Y} = \\underbrace{(\\ln b)}_{m} \\cdot \\underbrace{x}_{X} + \\underbrace{\\ln A}_{c}$$\n" +
          "- **Plot:** $\\ln y$ against $x$.\n" +
          "- **Gradient:** $m = \\ln b \\implies b = e^m$.\n" +
          "- **Y-intercept:** $c = \\ln A \\implies A = e^c$.\n\n" +
          "**3. Rational and Algebraic Forms:**\n" +
          "- $y = \\frac{a}{x} + b \\implies y = a\\left(\\frac{1}{x}\\right) + b$ (plot $y$ against $\\frac{1}{x}$; gradient $a$, intercept $b$).\n" +
          "- $y = ax^2 + bx \\implies \\frac{y}{x} = ax + b$ (plot $\\frac{y}{x}$ against $x$; gradient $a$, intercept $b$).\n" +
          "- $xy = ax + b \\implies y = a + \\frac{b}{x}$ (plot $y$ against $\\frac{1}{x}$; gradient $b$, intercept $a$).",
        examinerTips: [
          "State clearly what variables are plotted on the vertical axis ($Y$) and horizontal axis ($X$).",
          "Remember: if using $\\lg$ (base 10), $A = 10^c$; if using $\\ln$ (base $e$), $A = e^c$.",
        ],
        commonMistakes: [
          "Confusing $y = Ax^n$ with $y = Ab^x$ — power laws plot $\\ln y$ against $\\ln x$; exponential laws plot $\\ln y$ against $x$.",
        ],
        recap: [
          "Given $y = A x^n$, state the variables to plot to obtain a straight line, and express $A$ and $n$ in terms of the gradient and intercept.",
          "The variables $x$ and $y$ satisfy $y = 3(2^x)$. What is the gradient of the straight line obtained by plotting $\\ln y$ against $x$?",
        ],
      },
    ],
  },
  {
    number: 8,
    title: "Coordinate Geometry of the Circle",
    section: "8. Coordinate geometry of the circle",
    topic: "Circle Equations, Tangents, Normals & Circle Intersections",
    intro:
      "Geometry of circles in the Cartesian plane. Focuses on centre-radius and general forms, line-circle intersections, finding equations of tangents and normals without calculus, and intersections of two circles.",
    subheadings: [
      {
        title: "Standard and General Equations of a Circle",
        body:
          "**1. Standard (Centre-Radius) Form:**\n" +
          "The equation of a circle with centre $(a, b)$ and radius $r$ is:\n" +
          "$$(x - a)^2 + (y - b)^2 = r^2$$\n\n" +
          "**2. General Form:**\n" +
          "$$x^2 + y^2 + 2gx + 2fy + c = 0$$\n" +
          "- **Centre:** $(-g, -f)$\n" +
          "- **Radius:** $r = \\sqrt{g^2 + f^2 - c}$ (requires $g^2 + f^2 - c > 0$ for a real circle).\n\n" +
          "**Converting General Form to Standard Form (Completing the Square):**\n" +
          "1. Group $x$ terms and $y$ terms: $(x^2 + 2gx) + (y^2 + 2fy) = -c$.\n" +
          "2. Complete the square for both: $(x + g)^2 - g^2 + (y + f)^2 - f^2 = -c$.\n" +
          "3. Rearrange: $(x + g)^2 + (y + f)^2 = g^2 + f^2 - c$.\n\n" +
          "*Worked Example:* Find the centre and radius of the circle $x^2 + y^2 - 6x + 8y - 11 = 0$.\n" +
          "- $(x^2 - 6x) + (y^2 + 8y) = 11$\n" +
          "- $(x - 3)^2 - 9 + (y + 4)^2 - 16 = 11$\n" +
          "- $(x - 3)^2 + (y + 4)^2 = 11 + 9 + 16 = 36$\n" +
          "- **Centre:** $(3, -4)$; **Radius:** $r = \\sqrt{36} = 6$.",
        examinerTips: [
          "Be careful with signs: in $(x - a)^2 + (y - b)^2 = r^2$, the centre is $(+a, +b)$. If you see $(x + 3)^2$, the x-coordinate of the centre is $-3$.",
          "Ensure the coefficients of $x^2$ and $y^2$ are both $1$ before reading off $g, f, c$. If the equation starts $2x^2 + 2y^2$, divide the entire equation by $2$ first!",
        ],
        commonMistakes: [
          "Forgetting to square root $r^2$ when stating the radius.",
        ],
        recap: [
          "Write down the equation of a circle with centre $(-2, 5)$ and radius $4$.",
          "Find the centre and radius of $2x^2 + 2y^2 - 8x + 12y + 6 = 0$.",
        ],
      },
      {
        title: "Tangents, Normals & Circle-Line Intersections",
        body:
          "**Geometric Properties of Circles (No Calculus Required):**\n" +
          "- The **tangent** to a circle at point $P(x_1, y_1)$ is perpendicular to the **radius** $CP$ drawn to the point of contact.\n" +
          "- The **normal** to a circle at $P$ is the straight line containing the radius $CP$ (it passes through the centre $C$).\n\n" +
          "**Method to Find the Equation of a Tangent at $P(x_1, y_1)$ on Circle with Centre $C(a, b)$:**\n" +
          "1. Calculate the gradient of the radius: $m_{\\text{radius}} = \\frac{y_1 - b}{x_1 - a}$.\n" +
          "2. The gradient of the tangent is the negative reciprocal: $m_{\\text{tangent}} = -\\frac{1}{m_{\\text{radius}}}$.\n" +
          "3. Form equation of tangent passing through $P(x_1, y_1)$: $y - y_1 = m_{\\text{tangent}}(x - x_1)$.\n\n" +
          "**Determining Line-Circle Intersection:**\n" +
          "- Substitute the line equation $y = mx + k$ into the circle equation to form a quadratic in $x$.\n" +
          "- Compute the discriminant $\\Delta = b^2 - 4ac$:\n" +
          "  - $\\Delta > 0$: The line cuts the circle at two points (the line contains a **chord**).\n" +
          "  - $\\Delta = 0$: The line touches the circle at exactly one point (the line is a **tangent**).\n" +
          "  - $\\Delta < 0$: The line does not intersect the circle.",
        examinerTips: [
          "Cambridge marks 0606 circle tangent questions using geometric coordinate methods: $m_{\\text{tangent}} = -1 / m_{\\text{radius}}$. No calculus differentiation is expected.",
        ],
        commonMistakes: [
          "Using the coordinates of the centre instead of the point of contact $P$ in $y - y_1 = m(x - x_1)$.",
        ],
        recap: [
          "Find the equation of the tangent to the circle $(x - 1)^2 + (y - 2)^2 = 25$ at the point $P(4, 6)$.",
          "Show that the line $y = 2x + 5$ does not intersect the circle $x^2 + y^2 = 1$.",
        ],
      },
      {
        title: "Intersection of Two Circles & Common Chords",
        body:
          "**Finding the Common Chord of Two Circles:**\n" +
          "Given two circles:\n" +
          "$$C_1: x^2 + y^2 + 2g_1 x + 2f_1 y + c_1 = 0$$\n" +
          "$$C_2: x^2 + y^2 + 2g_2 x + 2f_2 y + c_2 = 0$$\n" +
          "- Subtract $C_2$ from $C_1$ to eliminate the $x^2$ and $y^2$ terms:\n" +
          "  $$2(g_1 - g_2)x + 2(f_1 - f_2)y + (c_1 - c_2) = 0$$\n" +
          "- This linear equation is the **equation of the common chord** (the radical axis).\n" +
          "- To find the points of intersection, solve this linear equation simultaneously with either circle equation.\n\n" +
          "**Geometric Conditions for Two Circles with Centres $C_1, C_2$ and Radii $r_1, r_2$:**\n" +
          "- Let $d = \\text{distance between centres } C_1 C_2$.\n" +
          "- **Separate (no intersection):** $d > r_1 + r_2$.\n" +
          "- **Touch externally:** $d = r_1 + r_2$.\n" +
          "- **Intersect at two points:** $|r_1 - r_2| < d < r_1 + r_2$.\n" +
          "- **Touch internally:** $d = |r_1 - r_2|$.\n" +
          "- **One inside the other (no intersection):** $d < |r_1 - r_2|$.",
        examinerTips: [
          "Subtracting the two circle equations immediately yields the linear equation of the line passing through their intersection points.",
        ],
        commonMistakes: [
          "Attempting to solve two quadratic circle equations without eliminating $x^2 + y^2$ first.",
        ],
        recap: [
          "Find the equation of the common chord of $x^2 + y^2 - 4x - 6y + 4 = 0$ and $x^2 + y^2 - 2x - 4y = 0$.",
          "Determine whether two circles with centres $(0, 0)$ and $(5, 12)$ and radii $5$ and $8$ touch or intersect.",
        ],
      },
    ],
  },
];
