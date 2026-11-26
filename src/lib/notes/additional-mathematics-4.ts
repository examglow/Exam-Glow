import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Additional Mathematics (0606) 2028–2030 Syllabus Notes
 * Chapters 12–14: Series, Vectors in Two Dimensions, Calculus (Differentiation, Integration, Kinematics)
 */
export const ADDITIONAL_MATHEMATICS_PART4: Chapter[] = [
  {
    number: 12,
    title: "Series",
    section: "12. Series",
    topic: "Binomial Expansion, Arithmetic & Geometric Progressions",
    intro:
      "Series explores mathematical sequences, their general terms, and summation formulas. Includes the Binomial Theorem for positive integer powers, Arithmetic Progressions (AP), and Geometric Progressions (GP) with sum to infinity conditions.",
    subheadings: [
      {
        title: "The Binomial Theorem & General Term",
        body:
          "**The Binomial Expansion (for positive integer $n$):**\n" +
          "$$(a + b)^n = a^n + \\binom{n}{1}a^{n-1}b + \\binom{n}{2}a^{n-2}b^2 + \\dots + \\binom{n}{r}a^{n-r}b^r + \\dots + b^n$$\n" +
          "- There are $(n + 1)$ terms in the expansion of $(a + b)^n$.\n" +
          "- For $(1 + x)^n$:\n" +
          "  $$(1 + x)^n = 1 + n x + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + \\dots + x^n$$\n\n" +
          "**The General Term (Formula given in List of formulas):**\n" +
          "$$T_{r+1} = \\binom{n}{r} a^{n-r} b^r \\quad (0 \\le r \\le n)$$\n" +
          "- Note: The $(r+1)$-th term has power $r$ on $b$.\n\n" +
          "*Worked Example (Finding Term Independent of $x$):*\n" +
          "Find the term independent of $x$ (the constant term) in the expansion of $\\left(2x^2 + \\frac{1}{x}\\right)^9$.\n" +
          "1. Write general term: $T_{r+1} = \\binom{9}{r} (2x^2)^{9-r} \\left(x^{-1}\\right)^r$.\n" +
          "2. Group coefficients and powers of $x$:\n" +
          "   $$T_{r+1} = \\binom{9}{r} 2^{9-r} (x^2)^{9-r} x^{-r} = \\binom{9}{r} 2^{9-r} x^{18 - 2r - r} = \\binom{9}{r} 2^{9-r} x^{18 - 3r}$$\n" +
          "3. For the term independent of $x$, set the power of $x$ to $0$:\n" +
          "   $$18 - 3r = 0 \\implies 3r = 18 \\implies r = 6$$\n" +
          "4. Evaluate the term for $r = 6$:\n" +
          "   $$T_7 = \\binom{9}{6} 2^{9-6} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} \\times 2^3 = 84 \\times 8 = \\mathbf{672}$$",
        examinerTips: [
          "Be careful when the second term is negative (e.g. $(2 - 3x)^6$). Ensure the negative sign is included inside the bracket: $(-3x)^r$. Odd powers will be negative!",
          "Term independent of $x$ means $x^0$.",
        ],
        commonMistakes: [
          "Forgetting to apply the power to the numerical coefficient, e.g. writing $(2x^2)^3$ as $2x^6$ instead of $8x^6$.",
        ],
        recap: [
          "Find the first three terms in ascending powers of $x$ of $(2 - x)^5$.",
          "Find the coefficient of $x^3$ in the expansion of $(1 + 2x)(2 - x)^5$.",
        ],
      },
      {
        title: "Arithmetic Progressions (AP)",
        body:
          "**Definition:**\n" +
          "A sequence where the difference between consecutive terms is constant: $u_{k+1} - u_k = d$ (**common difference**).\n\n" +
          "**Key Formulae (given in List of formulas):**\n" +
          "1. **$n$-th term:**\n" +
          "   $$u_n = a + (n - 1)d$$\n" +
          "2. **Sum of the first $n$ terms:**\n" +
          "   $$S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}(a + l)$$\n" +
          "   where $a$ is the first term and $l = u_n$ is the last term.\n\n" +
          "*Worked Example:* The 4th term of an AP is $15$ and the 10th term is $39$. Find the first term $a$, the common difference $d$, and the sum of the first 20 terms.\n" +
          "- $u_4 = a + 3d = 15 \\quad \\text{--- (1)}$\n" +
          "- $u_{10} = a + 9d = 39 \\quad \\text{--- (2)}$\n" +
          "- Subtract (1) from (2): $6d = 24 \\implies d = 4$.\n" +
          "- Substitute into (1): $a + 3(4) = 15 \\implies a = 3$.\n" +
          "- $S_{20} = \\frac{20}{2}[2(3) + (19)(4)] = 10[6 + 76] = 10(82) = \\mathbf{820}$.",
        examinerTips: [
          "Three consecutive terms of an AP: $x, y, z \\implies y - x = z - y \\implies 2y = x + z$.",
        ],
        commonMistakes: [
          "Using $(n+1)$ instead of $(n-1)$ in the $n$-th term formula.",
        ],
        recap: [
          "In an arithmetic progression, $a = 7$ and $d = 3$. Find the 15th term and the sum of the first 15 terms.",
          "Find the number of terms in the AP: $5, 8, 11, \\dots, 101$.",
        ],
      },
      {
        title: "Geometric Progressions (GP) & Sum to Infinity",
        body:
          "**Definition:**\n" +
          "A sequence where each term is obtained by multiplying the preceding term by a non-zero constant $r$ (**common ratio**):\n" +
          "$$r = \\frac{u_2}{u_1} = \\frac{u_3}{u_2} = \\frac{u_{k+1}}{u_k}$$\n\n" +
          "**Key Formulae (given in List of formulas):**\n" +
          "1. **$n$-th term:**\n" +
          "   $$u_n = a r^{n-1}$$\n" +
          "2. **Sum of the first $n$ terms ($r \\ne 1$):**\n" +
          "   $$S_n = \\frac{a(1 - r^n)}{1 - r} = \\frac{a(r^n - 1)}{r - 1}$$\n" +
          "3. **Sum to Infinity ($S_\\infty$):**\n" +
          "   $$S_\\infty = \\frac{a}{1 - r}$$\n" +
          "   - **Condition for convergence:** A geometric progression converges and has a sum to infinity **if and only if $|r| < 1$** (i.e. $-1 < r < 1$).\n" +
          "   - If $|r| \\ge 1$, the terms diverge and $S_\\infty$ does not exist.\n\n" +
          "*Worked Example:* The first term of a GP is $16$ and the sum to infinity is $20$. Find the common ratio $r$ and the sum of the first $4$ terms.\n" +
          "- $S_\\infty = \\frac{a}{1-r} \\implies \\frac{16}{1-r} = 20 \\implies 16 = 20(1-r) \\implies 20r = 4 \\implies r = \\frac{1}{5} = 0.2$.\n" +
          "- Check condition: $|0.2| < 1$, valid convergent GP.\n" +
          "- $S_4 = \\frac{16(1 - 0.2^4)}{1 - 0.2} = \\frac{16(1 - 0.0016)}{0.8} = 20(0.9984) = \\mathbf{19.968}$.",
        examinerTips: [
          "When asked 'Explain why this sequence has a sum to infinity', you MUST state: 'Since $|r| < 1$' (quoting the value of $r$).",
          "Three consecutive terms of a GP: $x, y, z \\implies \\frac{y}{x} = \\frac{z}{y} \\implies y^2 = xz$.",
        ],
        commonMistakes: [
          "Using $S_\\infty$ when $r > 1$ or $r < -1$ — the sum to infinity is undefined if $|r| \\ge 1$.",
        ],
        recap: [
          "Find the sum to infinity of the GP: $8, 4, 2, 1, \\dots$.",
          "Explain why the GP $3, -6, 12, -24, \\dots$ does not have a sum to infinity.",
        ],
      },
    ],
  },
  {
    number: 13,
    title: "Vectors in Two Dimensions",
    section: "13. Vectors in two dimensions",
    topic: "Column Vectors, Unit Vectors, Geometric Proofs & Relative Velocity",
    intro:
      "Vectors represent physical quantities possessing both magnitude and direction. This chapter covers column and $\\mathbf{i}, \\mathbf{j}$ notation, position vectors, collinearity proofs, and relative velocity kinematics.",
    subheadings: [
      {
        title: "Vector Notation, Magnitude & Unit Vectors",
        body:
          "**Vector Representations:**\n" +
          "- **Column vector:** $\\mathbf{a} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$.\n" +
          "- **Cartesian unit vectors:** $\\mathbf{a} = x\\mathbf{i} + y\\mathbf{j}$, where $\\mathbf{i} = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ and $\\mathbf{j} = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$.\n" +
          "- **Position vector:** The vector from the origin $O$ to point $P$, written $\\vec{OP} = \\mathbf{p}$.\n" +
          "- **Displacement vector between two points $A$ and $B$:**\n" +
          "  $$\\vec{AB} = \\vec{OB} - \\vec{OA} = \\mathbf{b} - \\mathbf{a}$$\n\n" +
          "**Magnitude of a Vector ($|\\mathbf{a}|$):**\n" +
          "$$|\\mathbf{a}| = \\sqrt{x^2 + y^2}$$\n\n" +
          "**Unit Vector in the Direction of $\\mathbf{a}$ ($\\hat{\\mathbf{a}}$):**\n" +
          "A unit vector has a magnitude of exactly $1$. It is found by dividing the vector by its magnitude:\n" +
          "$$\\hat{\\mathbf{a}} = \\frac{\\mathbf{a}}{|\\mathbf{a}|} = \\frac{1}{\\sqrt{x^2 + y^2}}\\begin{pmatrix} x \\\\ y \\end{pmatrix}$$\n\n" +
          "*Worked Example:* Find the unit vector in the direction of $\\mathbf{v} = 3\\mathbf{i} - 4\\mathbf{j}$.\n" +
          "- Magnitude: $|\\mathbf{v}| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$.\n" +
          "- Unit vector: $\\hat{\\mathbf{v}} = \\frac{1}{5}(3\\mathbf{i} - 4\\mathbf{j}) = \\frac{3}{5}\\mathbf{i} - \\frac{4}{5}\\mathbf{j}$.",
        examinerTips: [
          "Always write $\\vec{AB} = \\mathbf{b} - \\mathbf{a}$ (destination minus origin).",
          "Use underlines when writing vectors by hand (e.g. $\\underline{a}$ or $\\underline{i}$) to distinguish vectors from scalar variables.",
        ],
        commonMistakes: [
          "Writing $\\vec{AB} = \\mathbf{a} - \\mathbf{b}$ instead of $\\mathbf{b} - \\mathbf{a}$.",
        ],
        recap: [
          "Given $A(2, 5)$ and $B(6, -1)$, find the vector $\\vec{AB}$ and its magnitude.",
          "Find a vector of magnitude $15$ in the direction of $4\\mathbf{i} + 3\\mathbf{j}$.",
        ],
      },
      {
        title: "Collinear Points & Vector Geometry Proofs",
        body:
          "**Parallel Vectors:**\n" +
          "- Vector $\\mathbf{p}$ is parallel to vector $\\mathbf{q}$ if and only if **one is a scalar multiple of the other**:\n" +
          "  $$\\mathbf{p} = k\\mathbf{q} \\quad (k \\in \\mathbb{R}, k \\ne 0)$$\n\n" +
          "**Collinear Points:**\n" +
          "To prove that three points $A$, $B$, and $C$ lie on a single straight line (collinear):\n" +
          "1. Express $\\vec{AB}$ and $\\vec{BC}$ (or $\\vec{AC}$) in terms of base vectors.\n" +
          "2. Show that $\\vec{AB} = k\\vec{BC}$ (vectors are parallel).\n" +
          "3. Conclude: 'Since $\\vec{AB}$ is a scalar multiple of $\\vec{BC}$ and both vectors share the common point $B$, the points $A, B, C$ are collinear.'",
        examinerTips: [
          "To secure full marks in a collinearity proof, you MUST mention BOTH: (1) scalar multiple / parallel vectors, AND (2) common point.",
        ],
        commonMistakes: [
          "Stating vectors are parallel but forgetting to mention the shared common point.",
        ],
        recap: [
          "Explain how to prove that three points $P, Q, R$ are collinear using vectors.",
          "Vectors $\\mathbf{a} = 2\\mathbf{i} + 3\\mathbf{j}$ and $\\mathbf{b} = k\\mathbf{i} - 9\\mathbf{j}$ are parallel. Find the value of $k$.",
        ],
      },
      {
        title: "Velocity Vectors & Relative Motion in 2D",
        body:
          "**Kinematic Vector Relationships:**\n" +
          "- Position at time $t$: $\\mathbf{r}(t) = \\mathbf{r}_0 + \\mathbf{v}t$, where $\\mathbf{r}_0$ is initial position and $\\mathbf{v}$ is constant velocity.\n" +
          "- Speed is the magnitude of the velocity vector: $\\text{speed} = |\\mathbf{v}| = \\sqrt{v_x^2 + v_y^2}$.\n\n" +
          "**Collision Condition for Two Moving Particles:**\n" +
          "Particles $A$ and $B$ collide if and only if they occupy the **exact same position at the exact same time $t$**:\n" +
          "$$\\mathbf{r}_A(t) = \\mathbf{r}_B(t)$$\n" +
          "Equate the $\\mathbf{i}$ components and $\\mathbf{j}$ components to solve for $t$. If the two resulting times match ($t > 0$), a collision occurs.",
        examinerTips: [
          "A collision requires both $\\mathbf{i}$ and $\\mathbf{j}$ coordinates to be equal at the SAME time $t$. Paths crossing at different times is NOT a collision!",
        ],
        commonMistakes: [
          "Confusing velocity (a vector) with speed (a scalar magnitude).",
        ],
        recap: [
          "A boat has initial position vector $(2\\mathbf{i} + 5\\mathbf{j})\\text{ km}$ and constant velocity $(4\\mathbf{i} - 3\\mathbf{j})\\text{ km/h}$. Find its position vector after 2 hours and its speed.",
        ],
      },
    ],
  },
  {
    number: 14,
    title: "Calculus",
    section: "14. Calculus",
    topic: "Differentiation Rules, Optimization, Integration & Kinematics",
    intro:
      "Calculus forms the climax of Additional Mathematics. No formulas are provided in the exam: candidates must master standard derivatives, chain, product, and quotient rules, optimization, rates of change, standard integrals, plane areas, and kinematics.",
    subheadings: [
      {
        title: "Standard Derivatives & The Chain Rule",
        body:
          "**Standard Derivatives (Memorise — No formula sheet provided):**\n" +
          "- $\\frac{d}{dx}(x^n) = n x^{n-1}$\n" +
          "- $\\frac{d}{dx}(e^x) = e^x$\n" +
          "- $\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$\n" +
          "- $\\frac{d}{dx}(\\sin x) = \\cos x$ (angles in radians)\n" +
          "- $\\frac{d}{dx}(\\cos x) = -\\sin x$\n" +
          "- $\\frac{d}{dx}(\\tan x) = \\sec^2 x$\n\n" +
          "**The Chain Rule (Differentiating Composite Functions):**\n" +
          "$$\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx} \\quad \\text{or} \\quad \\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$\n" +
          "- $\\frac{d}{dx}[(ax+b)^n] = a n (ax+b)^{n-1}$\n" +
          "- $\\frac{d}{dx}[e^{g(x)}] = g'(x) e^{g(x)}$\n" +
          "- $\\frac{d}{dx}[\\ln(g(x))] = \\frac{g'(x)}{g(x)}$\n" +
          "- $\\frac{d}{dx}[\\sin(g(x))] = g'(x)\\cos(g(x))$\n" +
          "- $\\frac{d}{dx}[\\cos(g(x))] = -g'(x)\\sin(g(x))$\n" +
          "- $\\frac{d}{dx}[\\tan(g(x))] = g'(x)\\sec^2(g(x))$\n\n" +
          "*Worked Example:* Differentiate $y = (3x^2 + 4)^5$.\n" +
          "$$\\frac{dy}{dx} = 5(3x^2 + 4)^4 \\times \\frac{d}{dx}(3x^2 + 4) = 5(3x^2 + 4)^4 (6x) = \\mathbf{30x(3x^2 + 4)^4}$$",
        examinerTips: [
          "Always multiply by the derivative of the inside bracket! For $\\sin(4x)$, the derivative is $4\\cos(4x)$, NOT $\\cos(4x)$.",
          "For $\\ln(5x)$, notice $\\frac{d}{dx}[\\ln(5x)] = \\frac{5}{5x} = \\frac{1}{x}$. The constant multiplier drops out!",
        ],
        commonMistakes: [
          "Forgetting the negative sign when differentiating cosine: $\\frac{d}{dx}(\\cos x) = -\\sin x$.",
        ],
        recap: [
          "Find $\\frac{dy}{dx}$ when $y = e^{3x^2 - 1}$.",
          "Differentiate $y = \\ln(2x + 7)$ and $y = \\tan(5x)$.",
        ],
      },
      {
        title: "Product and Quotient Rules",
        body:
          "**1. The Product Rule (Differentiating $y = u \\cdot v$):**\n" +
          "$$\\mathbf{\\frac{d}{dx}(uv) = u\\frac{dv}{dx} + v\\frac{du}{dx} = u v' + v u'}$$\n\n" +
          "*Worked Example:* Differentiate $y = x^3 e^{2x}$.\n" +
          "- Let $u = x^3 \\implies u' = 3x^2$.\n" +
          "- Let $v = e^{2x} \\implies v' = 2e^{2x}$.\n" +
          "- $\\frac{dy}{dx} = x^3(2e^{2x}) + e^{2x}(3x^2) = \\mathbf{x^2 e^{2x}(2x + 3)}$.\n\n" +
          "**2. The Quotient Rule (Differentiating $y = \\frac{u}{v}$):**\n" +
          "$$\\mathbf{\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2} = \\frac{v u' - u v'}{v^2}}$$\n" +
          "- Mnemonic: 'Low d-High minus High d-Low, all over Low-squared'.\n\n" +
          "*Worked Example:* Differentiate $y = \\frac{\\sin x}{2x + 1}$.\n" +
          "- Let $u = \\sin x \\implies u' = \\cos x$.\n" +
          "- Let $v = 2x + 1 \\implies v' = 2$.\n" +
          "- $\\frac{dy}{dx} = \\frac{(2x + 1)\\cos x - (\\sin x)(2)}{(2x + 1)^2} = \\mathbf{\\frac{(2x + 1)\\cos x - 2\\sin x}{(2x + 1)^2}}$.",
        examinerTips: [
          "Order matters in the quotient rule because of the minus sign: $v u'$ MUST come first, then $- u v'$.",
        ],
        commonMistakes: [
          "Subtracting in the wrong order in the quotient rule: $u v' - v u'$ is WRONG.",
        ],
        recap: [
          "Differentiate $y = x^2 \\ln x$.",
          "Find $\\frac{dy}{dx}$ when $y = \\frac{e^x}{x + 2}$.",
        ],
      },
      {
        title: "Tangents, Normals & Stationary Points",
        body:
          "**Tangents and Normals to a Curve $y = f(x)$ at $x = x_1$:**\n" +
          "1. Evaluate $y_1 = f(x_1)$.\n" +
          "2. Evaluate gradient of tangent: $m_T = \\left.\\frac{dy}{dx}\\right|_{x = x_1}$.\n" +
          "3. Equation of tangent: $y - y_1 = m_T(x - x_1)$.\n" +
          "4. Gradient of normal: $m_N = -\\frac{1}{m_T}$.\n" +
          "5. Equation of normal: $y - y_1 = m_N(x - x_1)$.\n\n" +
          "**Stationary Points (Turning Points):**\n" +
          "- Occur where $\\frac{dy}{dx} = 0$.\n" +
          "- Solve $\\frac{dy}{dx} = 0$ to find stationary coordinates $(x, y)$.\n\n" +
          "**Determining Nature of Stationary Points (Second Derivative Test):**\n" +
          "- If $\\mathbf{\\frac{d^2y}{dx^2} < 0}$: The curve is concave down $\\implies$ **Local Maximum**.\n" +
          "- If $\\mathbf{\\frac{d^2y}{dx^2} > 0}$: The curve is concave up $\\implies$ **Local Minimum**.\n" +
          "- If $\\frac{d^2y}{dx^2} = 0$: Test is inconclusive; examine sign of $\\frac{dy}{dx}$ just before and after the point.",
        examinerTips: [
          "When asked to 'find the coordinates of the stationary point and determine its nature', you must give BOTH the $x$ and $y$ values, and evaluate $\\frac{d^2y}{dx^2}$ with conclusion.",
        ],
        commonMistakes: [
          "Thinking $\\frac{d^2y}{dx^2} > 0$ means maximum — positive second derivative means minimum!",
        ],
        recap: [
          "Find the equation of the normal to $y = x^2 - 3x + 2$ at the point where $x = 4$.",
          "Find the stationary points of $y = 2x^3 - 9x^2 + 12x + 1$ and determine their nature.",
        ],
      },
      {
        title: "Connected Rates of Change & Small Increments",
        body:
          "**Connected Rates of Change (Application of Chain Rule with Time $t$):**\n" +
          "$$\\frac{dy}{dt} = \\frac{dy}{dx} \\times \\frac{dx}{dt}$$\n" +
          "- If radius $r$ is expanding, $\\frac{dr}{dt} > 0$.\n" +
          "- If volume $V$ is decreasing/leaking, $\\frac{dV}{dt} < 0$.\n\n" +
          "*Worked Example:* The area of a circle $A = \\pi r^2$ is increasing at a rate of $8\\pi\\text{ cm}^2/\\text{s}$. Find the rate at which the radius is increasing when $r = 4\\text{ cm}$.\n" +
          "- $\\frac{dA}{dr} = 2\\pi r$.\n" +
          "- Chain rule: $\\frac{dA}{dt} = \\frac{dA}{dr} \\times \\frac{dr}{dt}$.\n" +
          "- Substitute knowns: $8\\pi = (2\\pi \\times 4) \\times \\frac{dr}{dt} \\implies 8\\pi = 8\\pi \\frac{dr}{dt} \\implies \\frac{dr}{dt} = \\mathbf{1\\text{ cm/s}}$.\n\n" +
          "**Small Increments and Approximations:**\n" +
          "For small changes $\\delta x$ in $x$:\n" +
          "$$\\delta y \\approx \\left(\\frac{dy}{dx}\\right) \\delta x$$\n" +
          "- Percentage change in $y \\approx \\frac{\\delta y}{y} \\times 100\\%$.",
        examinerTips: [
          "Check the sign of rates: 'decreasing at a rate of 5' means $\\frac{dV}{dt} = -5$.",
        ],
        commonMistakes: [
          "Omitting the negative sign for decreasing rates of change.",
        ],
        recap: [
          "A spherical balloon has volume $V = \\frac{4}{3}\\pi r^3$. Air is pumped in at $20\\text{ cm}^3/\\text{s}$. Find $\\frac{dr}{dt}$ when $r = 5\\text{ cm}$.",
          "Given $y = x^3 - 2x$, find the approximate change in $y$ when $x$ increases from $3$ to $3.02$.",
        ],
      },
      {
        title: "Integration: Standard Integrals & Definite Integrals",
        body:
          "**Integration as the Reverse of Differentiation:**\n" +
          "$$\\int f'(x) dx = f(x) + c \\quad (c \\text{ is the constant of integration})$$\n\n" +
          "**Standard Integrals (Memorise — No formula sheet provided):**\n" +
          "- $\\int x^n dx = \\frac{x^{n+1}}{n+1} + c \\quad (n \\ne -1)$\n" +
          "- $\\int \\frac{1}{x} dx = \\ln|x| + c$\n" +
          "- $\\int e^x dx = e^x + c$\n" +
          "- $\\int \\sin x dx = -\\cos x + c$ (angles in radians)\n" +
          "- $\\int \\cos x dx = \\sin x + c$\n" +
          "- $\\int \\sec^2 x dx = \\tan x + c$\n\n" +
          "**Linear Composite Functions ($ax + b$):**\n" +
          "- $\\int (ax + b)^n dx = \\frac{(ax + b)^{n+1}}{a(n+1)} + c \\quad (n \\ne -1)$\n" +
          "- $\\int \\frac{1}{ax + b} dx = \\frac{1}{a}\\ln|ax + b| + c$\n" +
          "- $\\int e^{ax + b} dx = \\frac{1}{a}e^{ax + b} + c$\n" +
          "- $\\int \\sin(ax + b) dx = -\\frac{1}{a}\\cos(ax + b) + c$\n" +
          "- $\\int \\cos(ax + b) dx = \\frac{1}{a}\\sin(ax + b) + c$\n" +
          "- $\\int \\sec^2(ax + b) dx = \\frac{1}{a}\\tan(ax + b) + c$\n\n" +
          "**Evaluating Definite Integrals:**\n" +
          "$$\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)$$",
        examinerTips: [
          "Remember the $\\frac{1}{a}$ factor when integrating functions with linear arguments $(ax+b)$!",
          "Notice the signs for trig integrals: $\\int \\sin x dx = -\\cos x + c$ (integral of sine is NEGATIVE cosine).",
        ],
        commonMistakes: [
          "Forgetting $+c$ in indefinite integrals.",
          "Multiplying by $a$ instead of dividing by $a$ when integrating $(ax+b)$.",
        ],
        recap: [
          "Find $\\int (2x + 3)^4 dx$ and $\\int e^{5x - 2} dx$.",
          "Evaluate $\\int_0^{\\pi/4} \\sec^2(2x) dx$.",
        ],
      },
      {
        title: "Area Under Curves & Between Two Curves",
        body:
          "**1. Area Between Curve $y = f(x)$ and the x-axis from $x = a$ to $x = b$:**\n" +
          "$$A = \\int_a^b y dx$$\n" +
          "- If the region lies **below the x-axis**, the definite integral gives a negative value. The geometric area is the absolute value: $A = \\left|\\int_a^b y dx\\right|$.\n" +
          "- If the curve crosses the x-axis between $a$ and $b$, integrate the regions above and below separately and add their positive magnitudes.\n\n" +
          "**2. Area Between Two Curves (or Line and Curve):**\n" +
          "$$A = \\int_a^b (y_{\\text{upper}} - y_{\\text{lower}}) dx$$\n" +
          "- Find limits $a$ and $b$ by equating the two equations: $y_1 = y_2$.\n" +
          "- Subtract the lower curve equation from the upper curve equation before integrating.",
        examinerTips: [
          "Always sketch the region to identify which function is on top ($y_{\\text{upper}}$) and which is on bottom ($y_{\\text{lower}}$).",
        ],
        commonMistakes: [
          "Integrating from $a$ to $b$ across an x-axis intercept without splitting, which causes positive and negative areas to cancel each other out.",
        ],
        recap: [
          "Find the area enclosed by the curve $y = 4 - x^2$ and the x-axis.",
          "Find the area of the region bounded by $y = x^2$ and the line $y = 2x$.",
        ],
      },
      {
        title: "Kinematics with Calculus",
        body:
          "**Calculus Relationships for Motion in a Straight Line:**\n" +
          "- **Displacement ($s$):** Position relative to a fixed origin $O$.\n" +
          "- **Velocity ($v$):** Rate of change of displacement with respect to time:\n" +
          "  $$v = \\frac{ds}{dt}$$\n" +
          "- **Acceleration ($a$):** Rate of change of velocity with respect to time:\n" +
          "  $$a = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$$\n" +
          "- **Integration Relationships:**\n" +
          "  $$v = \\int a dt \\quad \\text{and} \\quad s = \\int v dt$$\n\n" +
          "**Key Kinematic Terminology:**\n" +
          "- **Particle is instantaneously at rest:** $v = 0$.\n" +
          "- **Particle is at the origin:** $s = 0$.\n" +
          "- **Maximum / minimum velocity:** $\\frac{dv}{dt} = a = 0$.\n" +
          "- **Initial conditions:** Substitute $t = 0$.\n" +
          "- **Total Distance Travelled:**\n" +
          "  - Total distance is NOT simply $s(t_2) - s(t_1)$ if the particle reverses direction.\n" +
          "  - Find all times $t$ where $v = 0$ (turning points).\n" +
          "  - Calculate position at start, at each reversal, and at the end, and sum the absolute distances travelled in each leg.",
        examinerTips: [
          "To find total distance travelled, always check if $v = 0$ during the time interval! If the particle reverses direction, add the distances travelled before and after the turning point.",
        ],
        commonMistakes: [
          "Confusing displacement (vector) with distance (scalar total length of path).",
        ],
        recap: [
          "A particle moves in a straight line with velocity $v = 3t^2 - 12t + 9\\text{ m/s}$. Find its acceleration when $t = 3$.",
          "Find the total distance travelled by the particle between $t = 0$ and $t = 4$.",
        ],
      },
    ],
  },
];
