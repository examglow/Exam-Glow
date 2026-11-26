import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Additional Mathematics (0606) 2028–2030 Syllabus Notes
 * Chapters 1–4: Functions, Quadratic Functions, Factors of Polynomials, Equations & Inequalities
 */
export const ADDITIONAL_MATHEMATICS_PART1: Chapter[] = [
  {
    number: 1,
    title: "Functions",
    section: "1. Functions",
    topic: "Notation, Domain & Range, Inverses & Modulus Graphs",
    intro:
      "A function is a relation that maps each input in its domain to exactly one output in its range. In 0606, candidates master domain restrictions, composite functions, one-to-one criteria for inverses, reflection in y = x, and modulus reflections.",
    subheadings: [
      {
        title: "Function Notation, Domain, Range & Mapping Types",
        body:
          "**Core Definitions:**\n" +
          "- **Function:** A mapping that assigns to each element $x$ in a set (the **domain**) exactly one element $y$ in the target set. Written $y = f(x)$ or $f: x \\mapsto y$.\n" +
          "- **Domain:** The complete set of allowed input values $x$.\n" +
          "- **Range (Image Set):** The set of all output values $f(x)$ produced as $x$ varies over the domain.\n" +
          "- **One-to-One Function ($1:1$):** Each input maps to a unique output, and each output comes from exactly one input. (Satisfies the horizontal line test).\n" +
          "- **Many-to-One Function:** Two or more different inputs map to the same output (e.g. $f(x) = x^2$ over $\\mathbb{R}$, where $f(-2) = f(2) = 4$).\n\n" +
          "**Domain Restrictions:**\n" +
          "- Division by zero is undefined: for $f(x) = \\frac{1}{x-3}$, the natural domain is $x \\in \\mathbb{R}, x \\ne 3$.\n" +
          "- Real square roots require non-negative arguments: for $g(x) = \\sqrt{2x-5}$, the domain is $x \\ge 2.5$.\n" +
          "- Natural logarithms require strictly positive arguments: for $h(x) = \\ln(x+1)$, the domain is $x > -1$.\n\n" +
          "**Finding the Range for a Restricted Domain:**\n" +
          "To find the range of a function over a specified domain $[a, b]$:\n" +
          "1. Evaluate $f(x)$ at the domain endpoints $x = a$ and $x = b$.\n" +
          "2. Determine whether any turning points (local maximum or minimum) lie within $[a, b]$.\n" +
          "3. The range spans from the global minimum to the global maximum output on that interval.\n\n" +
          "*Worked Example:* Find the range of $f(x) = x^2 - 4x + 7$ for the domain $0 \\le x \\le 5$.\n" +
          "- Completing the square: $f(x) = (x-2)^2 + 3$.\n" +
          "- Turning point is a minimum at $(2, 3)$. Since $x = 2$ lies in $[0, 5]$, minimum value is $3$.\n" +
          "- Check endpoints: $f(0) = 7$ and $f(5) = (5-2)^2 + 3 = 12$.\n" +
          "- Therefore, the range is $3 \\le f(x) \\le 12$.",
        examinerTips: [
          "Always state the range using the function's name or $f(x)$ or $y$, e.g. $f(x) \\ge 3$ or $y \\ge 3$. Never write $x \\ge 3$ for a range.",
          "Check whether the vertex of a quadratic lies inside the restricted domain before stating the range.",
        ],
        commonMistakes: [
          "Assuming the range only comes from plugging in the endpoints $f(a)$ and $f(b)$ without checking for an interior turning point.",
        ],
        recap: [
          "State the difference between a one-to-one function and a many-to-one function.",
          "Find the domain and range of $g(x) = \\frac{4}{x-1} + 2$ for $x > 1$.",
        ],
      },
      {
        title: "Composite Functions & Existence Conditions",
        body:
          "**Composition of Functions:**\n" +
          "- The composite function $fg(x)$ means $f(g(x))$: evaluate the inner function $g(x)$ first, then apply $f$ to that result.\n" +
          "- In general, **order matters**: $fg(x) \\ne gf(x)$.\n" +
          "- $f^2(x) = f(f(x))$, meaning applying $f$ twice in succession.\n\n" +
          "**Condition for $gf(x)$ to Exist:**\n" +
          "- The composite function $gf$ exists if and only if the **range of $f$ is a subset of the domain of $g$**:\n" +
          "  $$\\text{Range}(f) \\subseteq \\text{Domain}(g)$$\n" +
          "- The domain of the composite function $gf$ is the domain of $f$:\n" +
          "  $$\\text{Domain}(gf) = \\text{Domain}(f)$$\n" +
          "- The range of $gf$ is contained in the range of $g$:\n" +
          "  $$\\text{Range}(gf) \\subseteq \\text{Range}(g)$$\n\n" +
          "*Worked Example:* Let $f(x) = 2x + 1$ for $x \\in \\mathbb{R}$ and $g(x) = x^2 - 3$ for $x \\in \\mathbb{R}$.\n" +
          "- $fg(x) = f(x^2 - 3) = 2(x^2 - 3) + 1 = 2x^2 - 5$.\n" +
          "- $gf(x) = g(2x + 1) = (2x + 1)^2 - 3 = 4x^2 + 4x - 2$.\n" +
          "- Notice that $fg(2) = 2(4) - 5 = 3$, whereas $gf(2) = 4(4) + 4(2) - 2 = 22$.",
        examinerTips: [
          "When solving an equation like $fg(x) = k$, evaluate the inner function first or apply $f^{-1}$ to both sides: $g(x) = f^{-1}(k)$.",
          "Remember that $f^2(x)$ in Additional Mathematics means $f(f(x))$, NOT $(f(x))^2$!",
        ],
        commonMistakes: [
          "Evaluating from left to right instead of inside out (e.g. thinking $fg(x)$ means $f(x) \\times g(x)$).",
        ],
        recap: [
          "Given $f(x) = e^{2x}$ and $g(x) = \\ln(x+1)$, find expressions for $fg(x)$ and $gf(x)$ in simplest form.",
          "State the condition required for the composite function $fg$ to be defined.",
        ],
      },
      {
        title: "Inverse Functions & Graphical Reflection in y = x",
        body:
          "**Existence of an Inverse Function:**\n" +
          "- A function $f$ has an inverse $f^{-1}$ **if and only if $f$ is a one-to-one function**.\n" +
          "- If $f$ is many-to-one, a single output corresponds to multiple inputs, so the reverse mapping is not well-defined.\n" +
          "- To give a many-to-one function (like a parabola) an inverse, its domain must be restricted (e.g. $x \\ge h$, where $h$ is the x-coordinate of the vertex).\n\n" +
          "**Finding $f^{-1}(x)$ Algebraically:**\n" +
          "1. Set $y = f(x)$.\n" +
          "2. Rearrange the equation to make $x$ the subject in terms of $y$.\n" +
          "3. Swap $x$ and $y$ to write $f^{-1}(x)$ explicitly.\n\n" +
          "*Worked Example:* $f(x) = \\frac{2x+3}{x-5}$ for $x > 5$.\n" +
          "- $y = \\frac{2x+3}{x-5} \\implies y(x-5) = 2x+3 \\implies yx - 5y = 2x + 3$\n" +
          "- $yx - 2x = 5y + 3 \\implies x(y-2) = 5y + 3 \\implies x = \\frac{5y+3}{y-2}$\n" +
          "- Therefore, $f^{-1}(x) = \\frac{5x+3}{x-2}$ with domain $x > 2$.\n\n" +
          "**Key Domain & Range Duality:**\n" +
          "$$\\text{Domain}(f^{-1}) = \\text{Range}(f) \\quad \\text{and} \\quad \\text{Range}(f^{-1}) = \\text{Domain}(f)$$\n\n" +
          "**Graphical Relationship:**\n" +
          "- The graph of $y = f^{-1}(x)$ is the **reflection of $y = f(x)$ in the line $y = x$**.\n" +
          "- If $(a, b)$ lies on $y = f(x)$, then $(b, a)$ lies on $y = f^{-1}(x)$.\n" +
          "- Any point of intersection between $y = f(x)$ and $y = f^{-1}(x)$ must lie on the line of symmetry $y = x$. To find intersection points, solve $f(x) = x$.",
        examinerTips: [
          "When asked 'Explain why $f$ does not have an inverse', write: '$f$ is not one-to-one' or '$f$ is a many-to-one function'. Both phrases earn the mark.",
          "The domain of $f^{-1}$ is always the range of $f$. When a question asks for the domain of $f^{-1}$, find the range of $f$!",
        ],
        commonMistakes: [
          "Writing $f^{-1}(x) = \\frac{1}{f(x)}$ — $f^{-1}$ is the inverse function, NOT the reciprocal.",
        ],
        recap: [
          "Explain why $f(x) = x^2 - 6x + 8$ defined for $x \\in \\mathbb{R}$ does not have an inverse.",
          "State the geometric relationship between the graph of $y = f(x)$ and the graph of $y = f^{-1}(x)$.",
        ],
      },
      {
        title: "Modulus Functions: y = |f(x)|",
        body:
          "**Definition of the Modulus Function:**\n" +
          "The modulus (or absolute value) of a real number $a$, written $|a|$, is its non-negative magnitude:\n" +
          "$$|x| = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$\n\n" +
          "**Sketching $y = |f(x)|$:**\n" +
          "To sketch $y = |f(x)|$ from the graph of $y = f(x)$:\n" +
          "1. Sketch $y = f(x)$ lightly.\n" +
          "2. Leave all parts of the graph where $y \\ge 0$ (above or on the x-axis) completely unchanged.\n" +
          "3. **Reflect** any part of the graph that falls below the x-axis ($y < 0$) vertically across the x-axis into the upper half-plane ($y > 0$).\n" +
          "4. The resulting graph has sharp V-shaped 'bounces' or cusps at every x-intercept.",
        examinerTips: [
          "Always label all axes intercepts clearly on modulus sketch graphs, including the reflected vertex coordinates.",
        ],
        commonMistakes: [
          "Drawing curved bottoms at the x-axis instead of sharp sharp corners/cusps.",
        ],
        recap: [
          "Describe how to obtain the graph of $y = |f(x)|$ from the graph of $y = f(x)$.",
          "Sketch $y = |2x - 3|$ and state the coordinates of the vertex and the y-intercept.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Quadratic Functions",
    section: "2. Quadratic functions",
    topic: "Completing the Square, The Discriminant & Quadratic Inequalities",
    intro:
      "Quadratic functions form the backbone of non-linear algebra in Additional Mathematics. Key competencies include vertex form, the discriminant test for intersections and tangency, and solving quadratic inequalities.",
    subheadings: [
      {
        title: "Completing the Square & Graph Features",
        body:
          "**Vertex Form:**\n" +
          "Any quadratic $f(x) = ax^2 + bx + c$ can be expressed in the form:\n" +
          "$$f(x) = a(x - h)^2 + k \\quad \\text{or} \\quad a(x + p)^2 + q$$\n" +
          "- If $a > 0$, the parabola opens upwards ($\\cup$), with a **minimum value of $k$** occurring at $x = h$.\n" +
          "- If $a < 0$, the parabola opens downwards ($\\cap$), with a **maximum value of $k$** occurring at $x = h$.\n" +
          "- The axis of symmetry is the vertical line $x = h$.\n\n" +
          "**Method for Completing the Square when $a \\ne 1$:**\n" +
          "1. Factor out $a$ from the $x^2$ and $x$ terms: $f(x) = a\\left[x^2 + \\frac{b}{a}x\\right] + c$.\n" +
          "2. Add and subtract $\\left(\\frac{b}{2a}\\right)^2$ inside the bracket:\n" +
          "   $$f(x) = a\\left[\\left(x + \\frac{b}{2a}\\right)^2 - \\left(\\frac{b}{2a}\\right)^2\\right] + c = a\\left(x + \\frac{b}{2a}\\right)^2 + \\left(c - \\frac{b^2}{4a}\\right)$$\n\n" +
          "*Worked Example:* Express $f(x) = 2x^2 - 12x + 11$ in the form $a(x-h)^2 + k$.\n" +
          "- $f(x) = 2[x^2 - 6x] + 11 = 2[(x-3)^2 - 9] + 11 = 2(x-3)^2 - 18 + 11 = 2(x-3)^2 - 7$.\n" +
          "- Minimum value is $-7$, occurring at $x = 3$. Line of symmetry is $x = 3$.",
        examinerTips: [
          "State both the value and the location when asked: 'The minimum value is -7 at x = 3'.",
          "When finding the range of $f(x)$ for all real $x$, write $f(x) \\ge k$ if $a > 0$, or $f(x) \\le k$ if $a < 0$.",
        ],
        commonMistakes: [
          "Forgetting to multiply the squared half-coefficient by $a$ when expanding out the square bracket.",
        ],
        recap: [
          "Express $3 - 4x - 2x^2$ in the form $q - a(x+p)^2$ and state the maximum value.",
          "Find the coordinates of the turning point of $y = 3x^2 - 6x + 10$.",
        ],
      },
      {
        title: "The Discriminant & Nature of Roots",
        body:
          "**The Discriminant ($\\Delta = b^2 - 4ac$):**\n" +
          "For the quadratic equation $ax^2 + bx + c = 0$:\n" +
          "- **$\\Delta > 0$:** Two distinct real roots (curve cuts the x-axis at two points).\n" +
          "- **$\\Delta = 0$:** Two equal real roots / one repeated real root (curve touches the x-axis; x-axis is tangent).\n" +
          "- **$\\Delta < 0$:** No real roots (curve lies entirely above the x-axis if $a > 0$, or entirely below if $a < 0$).\n" +
          "- **$\\Delta \\ge 0$:** Real roots exist (includes both distinct and repeated roots).\n\n" +
          "**Intersection of a Line and a Curve:**\n" +
          "To determine how the straight line $y = mx + c$ and the curve $y = ax^2 + bx + d$ interact:\n" +
          "1. Equate the two equations: $ax^2 + bx + d = mx + c$.\n" +
          "2. Rearrange to standard quadratic form: $ax^2 + (b-m)x + (d-c) = 0$.\n" +
          "3. Calculate the discriminant $\\Delta = (b-m)^2 - 4a(d-c)$:\n" +
          "   - **$\\Delta > 0$:** Line is a **secant** (intersects the curve at two distinct points).\n" +
          "   - **$\\Delta = 0$:** Line is a **tangent** (touches the curve at exactly one point).\n" +
          "   - **$\\Delta < 0$:** Line **does not intersect** the curve.\n\n" +
          "*Worked Example:* Find the set of values of $k$ for which the line $y = 2x + k$ is a tangent to the curve $y = x^2 - 4x + 7$.\n" +
          "- Set equal: $x^2 - 4x + 7 = 2x + k \\implies x^2 - 6x + (7-k) = 0$.\n" +
          "- For tangency, $\\Delta = 0$:\n" +
          "  $$(-6)^2 - 4(1)(7-k) = 0 \\implies 36 - 28 + 4k = 0 \\implies 8 + 4k = 0 \\implies k = -2$$",
        examinerTips: [
          "If a question says 'has real roots', use $\\Delta \\ge 0$, NOT $\\Delta > 0$. Only use $>$ if it states 'two distinct real roots'.",
          "For 'does not intersect', set $\\Delta < 0$.",
        ],
        commonMistakes: [
          "Omitting brackets around negative numbers when squaring $b$ in $(-b)^2$, leading to sign errors.",
        ],
        recap: [
          "State the condition for a quadratic equation to have two distinct real roots.",
          "Find the values of $m$ for which $y = mx - 1$ is a tangent to $y = x^2 + 3$.",
        ],
      },
      {
        title: "Solving Quadratic Inequalities",
        body:
          "**Step-by-Step Method:**\n" +
          "1. Rearrange the inequality so that zero is on one side, e.g. $ax^2 + bx + c > 0$ or $ax^2 + bx + c \\le 0$, ensuring $a > 0$.\n" +
          "2. Find the **critical values** by solving the associated equation $ax^2 + bx + c = 0$ (via factorisation or the quadratic formula).\n" +
          "3. Sketch the upward-opening parabola with roots at $x_1$ and $x_2$ (where $x_1 < x_2$):\n" +
          "   - For $ax^2 + bx + c < 0$: the curve is below the x-axis **between the roots**:\n" +
          "     $$x_1 < x < x_2$$\n" +
          "   - For $ax^2 + bx + c > 0$: the curve is above the x-axis **outside the roots** (two separate regions):\n" +
          "     $$x < x_1 \\quad \\text{or} \\quad x > x_2$$\n\n" +
          "*Worked Example:* Solve $2x^2 - 5x - 3 \\ge 0$.\n" +
          "- Factorise: $(2x + 1)(x - 3) \\ge 0$.\n" +
          "- Critical values: $x = -0.5$ and $x = 3$.\n" +
          "- Since the inequality is $\\ge 0$ (outside the roots):\n" +
          "  $$x \\le -0.5 \\quad \\text{or} \\quad x \\ge 3$$",
        examinerTips: [
          "Never write $3 \\le x \\le -0.5$ — this is impossible. Two separate regions MUST be written with the word 'or': $x \\le -0.5\\text{ or } x \\ge 3$.",
        ],
        commonMistakes: [
          "Writing $x < x_1 \\text{ and } x > x_2$ — an x-value cannot simultaneously be smaller than $-0.5$ and greater than $3$.",
        ],
        recap: [
          "Solve the inequality $x^2 - 7x + 10 < 0$.",
          "Solve the inequality $3x^2 + 5x - 2 \\ge 0$.",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Factors of Polynomials",
    section: "3. Factors of polynomials",
    topic: "Remainder & Factor Theorems, Cubic Factorisation & Equations",
    intro:
      "The remainder and factor theorems provide systematic methods for factorising polynomials of degree 3 or higher, finding unknown coefficients, and solving cubic equations.",
    subheadings: [
      {
        title: "The Remainder and Factor Theorems",
        body:
          "**The Remainder Theorem:**\n" +
          "When a polynomial $P(x)$ is divided by a linear factor $(ax - b)$, the remainder $R$ is equal to:\n" +
          "$$R = P\\left(\\frac{b}{a}\\right)$$\n" +
          "- If dividing by $(x - c)$, the remainder is $R = P(c)$.\n" +
          "- If dividing by $(x + c)$, the remainder is $R = P(-c)$.\n" +
          "- If dividing by $(2x - 3)$, the remainder is $R = P(1.5)$.\n\n" +
          "**The Factor Theorem:**\n" +
          "A linear expression $(ax - b)$ is a factor of $P(x)$ **if and only if the remainder is zero**:\n" +
          "$$P\\left(\\frac{b}{a}\\right) = 0 \\iff (ax - b) \\text{ is a factor of } P(x)$$\n\n" +
          "*Worked Example (Finding Unknown Coefficients):*\n" +
          "The polynomial $P(x) = 2x^3 + ax^2 + bx - 6$ has a factor of $(x - 1)$ and leaves a remainder of $12$ when divided by $(x + 2)$. Find $a$ and $b$.\n" +
          "1. $(x - 1)$ is a factor $\\implies P(1) = 0$:\n" +
          "   $$2(1)^3 + a(1)^2 + b(1) - 6 = 0 \\implies 2 + a + b - 6 = 0 \\implies a + b = 4 \\quad \\text{--- (1)}$$\n" +
          "2. Remainder is $12$ when divided by $(x + 2) \\implies P(-2) = 12$:\n" +
          "   $$2(-2)^3 + a(-2)^2 + b(-2) - 6 = 12 \\implies -16 + 4a - 2b - 6 = 12 \\implies 4a - 2b = 34 \\implies 2a - b = 17 \\quad \\text{--- (2)}$$\n" +
          "3. Add (1) and (2): $3a = 21 \\implies a = 7$.\n" +
          "4. Substitute into (1): $7 + b = 4 \\implies b = -3$.",
        examinerTips: [
          "When evaluating $P(-c)$, remember that negative numbers raised to odd powers remain negative: $(-2)^3 = -8$.",
          "Do not use long division when the question asks to find a remainder — evaluate $P(c)$ directly using the Remainder Theorem.",
        ],
        commonMistakes: [
          "Forgetting that dividing by $(x+3)$ means substituting $x = -3$, not $+3$.",
        ],
        recap: [
          "State the Factor Theorem.",
          "Find the remainder when $x^3 - 3x^2 + 5x - 7$ is divided by $(x - 2)$.",
        ],
      },
      {
        title: "Factorising Cubics & Solving Cubic Equations",
        body:
          "**Step-by-Step Procedure to Factorise a Cubic $P(x) = ax^3 + bx^2 + cx + d$:**\n" +
          "1. **Find a First Linear Factor:**\n" +
          "   - Test factors of the constant term $d$ (e.g. $\\pm 1, \\pm 2, \\pm 3, \\dots$) using the factor theorem until $P(k) = 0$.\n" +
          "   - Then $(x - k)$ is a factor.\n" +
          "2. **Find the Quadratic Factor:**\n" +
          "   - Use **algebraic long division** or **equating coefficients** to divide $P(x)$ by $(x - k)$:\n" +
          "     $$P(x) = (x - k)(Ax^2 + Bx + C)$$\n" +
          "   - By inspection: $A = a$ and $kC = -d$.\n" +
          "3. **Factorise the Quadratic Factor:**\n" +
          "   - Fully factorise $Ax^2 + Bx + C$ into two linear factors if possible.\n" +
          "   - If it cannot be factorised over $\\mathbb{R}$, use the quadratic formula to find the remaining roots.\n\n" +
          "*Worked Example:* Solve the cubic equation $2x^3 - 3x^2 - 11x + 6 = 0$.\n" +
          "- Test integer factors of $6$:\n" +
          "  - $P(1) = 2(1) - 3(1) - 11(1) + 6 = -6 \\ne 0$\n" +
          "  - $P(-1) = 2(-1) - 3(1) - 11(-1) + 6 = 12 \\ne 0$\n" +
          "  - $P(3) = 2(27) - 3(9) - 11(3) + 6 = 54 - 27 - 33 + 6 = 0 \\implies (x - 3) \\text{ is a factor}$.\n" +
          "- Divide by $(x - 3)$:\n" +
          "  $$2x^3 - 3x^2 - 11x + 6 = (x - 3)(2x^2 + 3x - 2)$$\n" +
          "- Factorise quadratic: $2x^2 + 3x - 2 = (2x - 1)(x + 2)$.\n" +
          "- Full factorisation: $(x - 3)(2x - 1)(x + 2) = 0$.\n" +
          "- Solutions: $x = 3, \\; x = 0.5, \\; x = -2$.",
        examinerTips: [
          "If the question asks to 'Factorise completely', leave the answer as a product of three linear brackets. If it says 'Solve', state the values of $x$.",
        ],
        commonMistakes: [
          "Finding only one root from trial and error and forgetting to find the other two roots from the quotient quadratic.",
        ],
        recap: [
          "Show that $(x + 1)$ is a factor of $x^3 + 4x^2 + x - 6$.",
          "Hence solve the equation $x^3 + 4x^2 + x - 6 = 0$.",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Equations, Inequalities and Graphs",
    section: "4. Equations, inequalities and graphs",
    topic: "Modulus Equations, Reducible Quadratics & Cubic Graph Sketches",
    intro:
      "Advanced algebraic techniques allow solving modulus equations, modulus inequalities, equations reducible to quadratic form via clever substitution, and sketching cubic polynomials.",
    subheadings: [
      {
        title: "Modulus Equations",
        body:
          "**1. Equations of the Form $|ax + b| = c$ ($c \\ge 0$):**\n" +
          "Split into two linear equations:\n" +
          "$$ax + b = c \\quad \\text{or} \\quad ax + b = -c$$\n\n" +
          "**2. Equations of the Form $|ax + b| = |cx + d|$:**\n" +
          "- **Method A (Linear cases):** $ax + b = cx + d$ or $ax + b = -(cx + d)$.\n" +
          "- **Method B (Squaring both sides):** $(ax + b)^2 = (cx + d)^2$, since $|u|^2 = u^2$.\n\n" +
          "**3. Equations of the Form $|ax + b| = cx + d$:**\n" +
          "- Solve the two algebraic cases: $ax + b = cx + d$ and $-(ax + b) = cx + d$.\n" +
          "- **Crucial Step:** You MUST check all candidate solutions in the original equation to reject **extraneous solutions** (since $|ax+b| \\ge 0$, we require $cx + d \\ge 0$).\n\n" +
          "*Worked Example:* Solve $|2x - 1| = 3x - 4$.\n" +
          "- Case 1: $2x - 1 = 3x - 4 \\implies -x = -3 \\implies x = 3$.\n" +
          "  - Check: $|2(3)-1| = 5$, and $3(3)-4 = 5$. Valid!\n" +
          "- Case 2: $-(2x - 1) = 3x - 4 \\implies -2x + 1 = 3x - 4 \\implies 5x = 5 \\implies x = 1$.\n" +
          "  - Check: $|2(1)-1| = 1$, but $3(1)-4 = -1$. Since $1 \\ne -1$, $x = 1$ is an **extraneous root** and must be rejected!\n" +
          "- Final solution: $x = 3$.",
        examinerTips: [
          "Always test your solutions in the original equation when the RHS contains an $x$ variable. Extraneous solutions earn zero marks if not rejected.",
        ],
        commonMistakes: [
          "Accepting negative RHS outputs when solving $|ax+b| = cx+d$. The modulus of a real expression can never be negative.",
        ],
        recap: [
          "Solve $|3x + 2| = 8$.",
          "Solve $|2x - 5| = |x + 1|$.",
        ],
      },
      {
        title: "Modulus Inequalities",
        body:
          "**Standard Modulus Inequality Rules ($c > 0$):**\n" +
          "1. **$|u| \\le c \\iff -c \\le u \\le c$** (a single continuous interval).\n" +
          "2. **$|u| \\ge c \\iff u \\le -c \\quad \\text{or} \\quad u \\ge c$** (two separate open-ended intervals).\n\n" +
          "**Solving $|ax+b| \\le |cx+d|$:**\n" +
          "Since both sides are non-negative, square both sides:\n" +
          "$$(ax + b)^2 \\le (cx + d)^2 \\implies (ax + b)^2 - (cx + d)^2 \\le 0$$\n" +
          "Using difference of two squares:\n" +
          "$$[(ax + b) - (cx + d)][(ax + b) + (cx + d)] \\le 0$$\n" +
          "Then solve the resulting quadratic inequality by finding the critical values.",
        examinerTips: [
          "Squaring both sides is the safest method for $|f(x)| < |g(x)|$ because it avoids sign errors.",
        ],
        commonMistakes: [
          "Squaring both sides of an inequality where one side can be negative — squaring is only valid when both sides are known to be non-negative.",
        ],
        recap: [
          "Solve the inequality $|2x - 3| < 5$.",
          "Solve the inequality $|3x + 1| \\ge 7$.",
        ],
      },
      {
        title: "Equations Reducible to Quadratic via Substitution",
        body:
          "Many non-linear equations can be transformed into quadratic equations $au^2 + bu + c = 0$ by identifying an appropriate substitution $u = g(x)$.\n\n" +
          "**Key Forms:**\n" +
          "1. **Fractional Indices:** $x^{4/3} - x^{2/3} - 12 = 0$.\n" +
          "   - Let $u = x^{2/3}$, so $u^2 = x^{4/3}$.\n" +
          "   - $u^2 - u - 12 = 0 \\implies (u - 4)(u + 3) = 0 \\implies u = 4$ or $u = -3$.\n" +
          "   - If $x^{2/3} = 4 \\implies x = (\\pm \\sqrt{4})^3 = \\pm 8$.\n" +
          "   - (Note: $x^{2/3} = -3$ has no real solution since even roots are non-negative).\n\n" +
          "2. **Logarithmic:** $2(\\ln 5x)^2 + \\ln 5x - 6 = 0$.\n" +
          "   - Let $u = \\ln 5x \\implies 2u^2 + u - 6 = 0 \\implies (2u - 3)(u + 2) = 0$.\n" +
          "   - $u = 1.5 \\implies \\ln 5x = 1.5 \\implies 5x = e^{1.5} \\implies x = \\frac{e^{1.5}}{5}$.\n" +
          "   - $u = -2 \\implies \\ln 5x = -2 \\implies 5x = e^{-2} \\implies x = \\frac{e^{-2}}{5}$.\n\n" +
          "3. **Exponential:** $3e^x = 12 - 5e^{-x}$.\n" +
          "   - Multiply by $e^x$: $3(e^x)^2 = 12e^x - 5 \\implies 3(e^x)^2 - 12e^x + 5 = 0$.\n" +
          "   - Let $u = e^x$, solve for $u$, then $x = \\ln u$ (rejecting $u \\le 0$).",
        examinerTips: [
          "Always remember to solve for the original variable $x$, not just the substitution variable $u$!",
          "Remember $e^x > 0$ for all real $x$. If $u = e^x = -2$, reject that branch.",
        ],
        commonMistakes: [
          "Stopping after finding $u$ and forgetting to back-substitute to find $x$.",
        ],
        recap: [
          "Solve $2^{2x} - 5(2^x) + 4 = 0$.",
          "Solve $x - 5\\sqrt{x} + 6 = 0$.",
        ],
      },
      {
        title: "Sketching Cubic Polynomials & Moduli Graphs",
        body:
          "**Sketching $y = (x - a)(x - b)(x - c)$:**\n" +
          "1. **x-intercepts:** Set $y = 0 \\implies x = a, b, c$.\n" +
          "2. **y-intercept:** Set $x = 0 \\implies y = -abc$.\n" +
          "3. **End behaviour:**\n" +
          "   - Positive leading coefficient ($+x^3$): Starts in bottom-left ($y \\to -\\infty$ as $x \\to -\\infty$) and finishes in top-right ($y \\to +\\infty$ as $x \\to +\\infty$).\n" +
          "   - Negative leading coefficient ($-x^3$): Starts in top-left and finishes in bottom-right.\n" +
          "4. **Modulus Sketch $y = |f(x)|$:** Reflect all parts where $y < 0$ across the x-axis, creating cusps at all three roots.",
        examinerTips: [
          "Label every intercept with the x-axis and y-axis with exact coordinates.",
        ],
        commonMistakes: [
          "Drawing flat lines at turning points — cubic curves have smooth, rounded local maxima and minima.",
        ],
        recap: [
          "Sketch the curve $y = (x + 2)(x - 1)(x - 4)$, showing all axes intercepts.",
          "On the same diagram, sketch $y = |(x + 2)(x - 1)(x - 4)|$.",
        ],
      },
    ],
  },
];
