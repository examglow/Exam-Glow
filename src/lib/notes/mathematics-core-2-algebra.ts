import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Core — Section 2: Algebra & Sequences
 * Chapters 17 to 24 (Categories matching official Core syllabus breakdown)
 */
export const MATHEMATICS_CORE_ALGEBRA: Chapter[] = [
  {
    number: 17,
    title: "Introduction to Algebra",
    section: "2. Algebra & Sequences",
    topic: "Introduction to Algebra",
    intro:
      "Algebra uses letters (variables) to represent numbers. This chapter covers standard algebraic notation, key vocabulary, numerical substitution, and collecting like terms.",
    subheadings: [
      {
        title: "Algebraic Notation",
        body:
          "In algebra, standard conventions simplify mathematical communication:\n\n" +
          "- **Multiplication:** Omit the multiplication symbol $\\times$ between numbers and letters, or between letters: $3 \\times a = 3a$, and $a \\times b = ab$. Always write the numerical coefficient first ($3a$, not $a3$).\n" +
          "- **Division:** Written as a fraction: $a \\div 4 = \\frac{a}{4}$, and $a \\div b = \\frac{a}{b}$.\n" +
          "- **Powers:** Repeated multiplication is written with indices: $x \\times x = x^2$, and $y \\times y \\times y = y^3$.\n" +
          "- **Coefficient 1:** $1x$ is simply written as $x$, and $-1y$ is written as $-y$.\n" +
          "- **Brackets:** $4(x + 2)$ means $4 \\times (x + 2)$.",
        examinerTips: [
          "Never write multiplication signs in final algebraic expressions: write $5xy$, never $5 \\times x \\times y$.",
        ],
        commonMistakes: [
          "Writing $a2$ instead of $2a$.",
          "Confusing $2x$ ($x + x$) with $x^2$ ($x \\times x$).",
        ],
        recap: [
          "Write $p \\times p \\times p + q \\div 5$ using standard algebraic notation.",
        ],
      },
      {
        title: "Algebraic Vocabulary",
        body:
          "Clear precision with mathematical terminology is required:\n\n" +
          "- **Variable:** A letter representing an unknown or changing quantity (e.g. $x, y, t$).\n" +
          "- **Constant:** A fixed numerical value (e.g. $5, -12, \\pi$).\n" +
          "- **Term:** A single number, variable, or numbers and variables multiplied together (e.g. $3x^2, -4y, 7$). Terms are separated by $+$ or $-$ signs.\n" +
          "- **Coefficient:** The numerical factor multiplying a variable. In $5x^3$, the coefficient of $x^3$ is $5$. In $-y$, the coefficient is $-1$.\n" +
          "- **Expression:** A collection of terms and operators without an equals sign (e.g. $3x + 2y - 7$).\n" +
          "- **Equation:** A statement showing two expressions are equal with an equals sign (e.g. $2x + 5 = 13$). Can be solved to find the unknown value.\n" +
          "- **Formula:** A rule connecting two or more variables (e.g. $A = \\pi r^2$, $v = u + at$).\n" +
          "- **Identity:** An equation true for all values of the variable (e.g. $2(x + 3) \\equiv 2x + 6$).",
        examinerTips: [
          "The coefficient includes its sign: in $4 - 7x$, the coefficient of $x$ is $-7$, not $7$.",
        ],
        commonMistakes: [
          "Confusing an expression (no equals sign) with an equation (contains equals sign).",
        ],
        recap: [
          "In the expression $8x^2 - 3x + 11$, state the coefficient of $x$ and the constant term.",
        ],
      },
      {
        title: "Substitution",
        body:
          "**Substitution** means replacing variables in an expression or formula with their given numerical values, then evaluating using BIDMAS.\n\n" +
          "**Step-by-step method:**\n" +
          "1. Place brackets around every substituted value: especially negative numbers!\n" +
          "2. Calculate powers first.\n" +
          "3. Perform multiplication and division.\n" +
          "4. Perform addition and subtraction.\n\n" +
          "**Example:** If $a = 3, b = -4$, evaluate $2a^2 - b$:\n" +
          "$$2(3)^2 - (-4) = 2(9) + 4 = 18 + 4 = 22$$\n\n" +
          "**Example with square root:** If $u = 5, a = 4, s = 6$, find $v = \\sqrt{u^2 + 2as}$:\n" +
          "$$v = \\sqrt{5^2 + 2(4)(6)} = \\sqrt{25 + 48} = \\sqrt{73} \\approx 8.54$$",
        examinerTips: [
          "Always write brackets around negative values when squaring on a calculator: $(-4)^2 = 16$. Typing `-4^2` gives `-16`.",
        ],
        commonMistakes: [
          "Multiplying by the coefficient before squaring: evaluating $3x^2$ when $x = 2$ as $(3 \\times 2)^2 = 36$ (WRONG; correct is $3 \\times 4 = 12$).",
        ],
        recap: [
          "If $p = -3$ and $q = 5$, evaluate $4p^2 - 2pq$.",
        ],
      },
      {
        title: "Collecting Like Terms",
        body:
          "**Like terms** are terms that contain the exact same variables raised to the exact same powers. Only the numerical coefficients may differ.\n\n" +
          "- $3x$ and $7x$ are like terms: $3x + 7x = 10x$.\n" +
          "- $5x^2$ and $2x^2$ are like terms: $5x^2 - 2x^2 = 3x^2$.\n" +
          "- $4x$ and $3y$ are **unlike terms**: they cannot be combined into a single term.\n" +
          "- $x^2$ and $x$ are **unlike terms**: different powers cannot be added together.\n\n" +
          "**Simplifying expressions:** Group like terms together, keeping the sign in front of each term attached to it:\n" +
          "$$5x - 3y + 2x + 7y - 4 = (5x + 2x) + (-3y + 7y) - 4 = 7x + 4y - 4$$",
        examinerTips: [
          "Circle or underline like terms along with the $+/-$ sign directly in front of each term before collecting.",
        ],
        commonMistakes: [
          "Adding powers when adding like terms: $3x + 2x = 5x^2$ (WRONG; correct is $5x$).",
        ],
        recap: [
          "Simplify: $6a - 4b + 3 - 2a + 9b - 8$.",
          "Simplify: $4x^2 + 3x - x^2 + 5x$.",
        ],
      },
    ],
  },
  {
    number: 18,
    title: "Algebraic Roots & Indices",
    section: "2. Algebra & Sequences",
    topic: "Algebraic Roots & Indices",
    intro:
      "Applying index laws to algebraic terms, simplifying powers of products, and simplifying roots of algebraic expressions.",
    subheadings: [
      {
        title: "Algebraic Roots & Indices",
        body:
          "The index laws apply directly to algebraic terms with identical bases:\n\n" +
          "1. **Multiplication:** $x^a \\times x^b = x^{a + b}$\n" +
          "   - Example: $3x^4 \\times 2x^5 = (3 \\times 2) \\times x^{4 + 5} = 6x^9$\n" +
          "2. **Division:** $x^a \\div x^b = x^{a - b}$\n" +
          "   - Example: $\\frac{15y^8}{3y^2} = (15 \\div 3) y^{8 - 2} = 5y^6$\n" +
          "3. **Power of a Power:** $(x^a)^b = x^{ab}$\n" +
          "   - Example: $(m^3)^4 = m^{3 \\times 4} = m^{12}$\n" +
          "4. **Power of a Term:** $(k x^a)^b = k^b x^{ab}$\n" +
          "   - Example: $(2x^3)^4 = 2^4 \\times x^{3 \\times 4} = 16x^{12}$\n" +
          "5. **Zero and Negative Powers:** $x^0 = 1$, and $x^{-n} = \\frac{1}{x^n}$\n" +
          "   - Example: $4x^{-2} = \\frac{4}{x^2}$\n" +
          "6. **Square Roots of Algebraic Terms:**\n" +
          "   - $\\sqrt{a^2} = a$, and $\\sqrt{16x^6} = \\sqrt{16} \\times \\sqrt{x^6} = 4x^3$ (halve the even power).",
        examinerTips: [
          "Remember that the coefficient is raised to the power too: $(3x^2)^3 = 3^3 x^6 = 27x^6$, not $9x^6$ or $3x^6$.",
        ],
        commonMistakes: [
          "Multiplying coefficients instead of raising to power in $(2x^3)^3$.",
          "Halving the coefficient when taking square roots instead of finding the root: $\\sqrt{16x^4} = 8x^2$ (WRONG; correct is $4x^2$).",
        ],
        recap: [
          "Simplify: $\\frac{24a^7 b^4}{6a^3 b}$.",
          "Simplify: $(5y^4)^2$.",
        ],
      },
    ],
  },
  {
    number: 19,
    title: "Expanding & Factorising Brackets",
    section: "2. Algebra & Sequences",
    topic: "Expanding & Factorising Brackets",
    intro:
      "Expanding single brackets using the distributive law, expanding double brackets $(x + a)(x + b)$, and factorising by taking out common factors.",
    subheadings: [
      {
        title: "Expanding & Simplifying Single Brackets",
        body:
          "**Distributive Law:** Multiply the term outside the bracket by every term inside the bracket:\n" +
          "$$a(b + c) = ab + ac$$\n" +
          "$$a(b - c) = ab - ac$$\n\n" +
          "**Watch negative signs outside:**\n" +
          "- $-3(2x - 5) = -3(2x) - 3(-5) = -6x + 15$\n\n" +
          "**Expanding and simplifying two brackets:**\n" +
          "Expand each bracket separately, then collect like terms:\n" +
          "$$3(2x + 4) - 2(x - 5) = 6x + 12 - 2x + 10 = 4x + 22$$",
        examinerTips: [
          "Pay extreme attention to signs when expanding with a negative outside: $- (x - 4) = -x + 4$.",
        ],
        commonMistakes: [
          "Multiplying only the first term inside the bracket: $3(x + 4) = 3x + 4$ (WRONG; correct is $3x + 12$).",
          "Sign errors: $-2(x - 3) = -2x - 6$ (WRONG; correct is $-2x + 6$).",
        ],
        recap: [
          "Expand: $4x(3x - 5)$.",
          "Expand and simplify: $5(2x - 3) - 3(x - 4)$.",
        ],
      },
      {
        title: "Expanding Double Brackets",
        body:
          "To expand two brackets $(a + b)(c + d)$, multiply each term in the first bracket by each term in the second bracket using **FOIL**:\n\n" +
          "- **F — First terms:** $a \\times c = ac$\n" +
          "- **O — Outside terms:** $a \\times d = ad$\n" +
          "- **I — Inside terms:** $b \\times c = bc$\n" +
          "- **L — Last terms:** $b \\times d = bd$\n" +
          "Then combine like middle terms.\n\n" +
          "**Worked Example:** Expand and simplify $(x + 3)(x + 5)$:\n" +
          "- First: $x \\times x = x^2$\n" +
          "- Outside: $x \\times 5 = 5x$\n" +
          "- Inside: $3 \\times x = 3x$\n" +
          "- Last: $3 \\times 5 = 15$\n" +
          "- Combine: $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$\n\n" +
          "**Squaring a Bracket:**\n" +
          "$(x + 4)^2 = (x + 4)(x + 4) = x^2 + 4x + 4x + 16 = x^2 + 8x + 16$.",
        examinerTips: [
          "Never write $(x + 5)^2 = x^2 + 25$. Always write out $(x + 5)(x + 5)$ and expand the middle terms.",
        ],
        commonMistakes: [
          "Forgetting the middle terms when squaring a bracket.",
          "Sign errors when negatives are involved: $(x - 3)(x - 4) = x^2 - 7x + 12$ (note $+12$).",
        ],
        recap: [
          "Expand and simplify: $(x - 4)(x + 7)$.",
          "Expand and simplify: $(2x - 3)^2$.",
        ],
      },
      {
        title: "Factorising Out Terms",
        body:
          "**Factorising** is the exact reverse of expanding: writing an expression as a product of factors by placing it into brackets.\n\n" +
          "**Single Bracket Factorisation:**\n" +
          "1. Find the Highest Common Factor (HCF) of all numerical coefficients.\n" +
          "2. Find the highest power of any variable common to all terms.\n" +
          "3. Place this combined common factor outside the bracket.\n" +
          "4. Divide each original term by the factor to find the terms inside the bracket.\n\n" +
          "**Examples:**\n" +
          "- Factorise $6x + 9$:\n" +
          "  - $\\text{HCF}(6, 9) = 3$\n" +
          "  - Answer: $3(2x + 3)$\n" +
          "- Factorise $12x^2 - 8xy$:\n" +
          "  - Numbers: $\\text{HCF}(12, 8) = 4$\n" +
          "  - Variables: common factor $x$\n" +
          "  - Factor outside: $4x$\n" +
          "  - Inside bracket: $\\frac{12x^2}{4x} - \\frac{8xy}{4x} = 3x - 2y$\n" +
          "  - Answer: $4x(3x - 2y)$",
        examinerTips: [
          "Always check: 'Can I factorise any further?' If terms inside the bracket still share a common factor, you haven't fully factorised.",
          "Multiply your bracket back out mentally to check it gives the original expression.",
        ],
        commonMistakes: [
          "Partial factorisation: writing $12x^2 - 8x = 2(6x^2 - 4x)$ instead of the fully factorised $4x(3x - 2)$.",
          "Forgetting that dividing a term by itself leaves $1$: $5x + 5 = 5(x + 1)$, not $5(x)$.",
        ],
        recap: [
          "Factorise completely: $15y - 20$.",
          "Factorise completely: $6p^2 q + 9pq^2$.",
        ],
      },
    ],
  },
  {
    number: 20,
    title: "Linear Equations",
    section: "2. Algebra & Sequences",
    topic: "Linear Equations",
    intro:
      "Solving linear equations using balancing methods, clearing brackets and fractions, solving equations with unknowns on both sides, and constructing equations from word problems and geometric shapes.",
    subheadings: [
      {
        title: "Solving Linear Equations",
        body:
          "The golden rule of equations: **Whatever you do to one side, you must do to the other side** to maintain balance.\n\n" +
          "**One-Step and Two-Step Equations:**\n" +
          "Use inverse operations in reverse BIDMAS order:\n" +
          "- Inverse of $+$ is $-$\n" +
          "- Inverse of $-$ is $+$\n" +
          "- Inverse of $\\times$ is $\\div$\n" +
          "- Inverse of $\\div$ is $\\times$\n\n" +
          "**Example:** Solve $3x - 7 = 14$:\n" +
          "- Add $7$ to both sides: $3x = 21$\n" +
          "- Divide both sides by $3$: $x = 7$",
        examinerTips: [
          "Always substitute your answer back into the original equation to verify that both sides are equal.",
        ],
        commonMistakes: [
          "Subtracting instead of adding when moving a negative term across the equals sign.",
        ],
        recap: [
          "Solve: $4x + 9 = 33$.",
          "Solve: $\\frac{x}{5} - 3 = 7$.",
        ],
      },
      {
        title: "Equations with Brackets & Fractions",
        body:
          "**Equations with Brackets:**\n" +
          "Expand brackets first, then solve:\n" +
          "$$4(2x - 3) = 28 \\implies 8x - 12 = 28 \\implies 8x = 40 \\implies x = 5$$\n\n" +
          "**Equations with Fractions:**\n" +
          "Clear fractions by multiplying every term on both sides by the denominator (or the LCM of all denominators):\n" +
          "$$\\frac{2x + 1}{3} = 5$$\n" +
          "- Multiply both sides by $3$: $2x + 1 = 15$\n" +
          "- Subtract $1$: $2x = 14$\n" +
          "- Divide by $2$: $x = 7$\n\n" +
          "**Cross-Multiplication:** For $\\frac{a}{b} = \\frac{c}{d} \\implies ad = bc$.",
        examinerTips: [
          "When multiplying an equation by a number to clear a fraction, remember to multiply terms that are NOT fractions as well.",
        ],
        commonMistakes: [
          "Multiplying only the fraction and forgetting to multiply other terms on that side.",
        ],
        recap: [
          "Solve: $3(x - 2) + 4 = 19$.",
          "Solve: $\\frac{3x - 2}{4} = 7$.",
        ],
      },
      {
        title: "Equations with Unknowns on Both Sides",
        body:
          "When the variable appears on both the left and right side of the equals sign:\n\n" +
          "1. **Collect variable terms on one side:** Subtract or add the smaller variable term from both sides (this keeps the coefficient positive).\n" +
          "2. **Collect constant terms on the other side:** Add or subtract numbers away from the variable.\n" +
          "3. **Divide by the coefficient** of the variable.\n\n" +
          "**Example:** Solve $7x - 4 = 3x + 16$:\n" +
          "- Subtract $3x$ from both sides: $4x - 4 = 16$\n" +
          "- Add $4$ to both sides: $4x = 20$\n" +
          "- Divide by $4$: $x = 5$",
        examinerTips: [
          "Eliminating the smaller $x$-term first avoids dealing with negative coefficients.",
        ],
        commonMistakes: [
          "Adding $3x$ to $7x$ instead of subtracting $3x$.",
        ],
        recap: [
          "Solve: $8x - 5 = 2x + 19$.",
          "Solve: $5(x + 2) = 2(2x + 9)$.",
        ],
      },
      {
        title: "Forming Equations from Words",
        body:
          "Word problems require translating English statements into mathematical equations:\n\n" +
          "1. **Choose a variable** for the unknown quantity (e.g. 'Let the cost of one ticket be $x$').\n" +
          "2. Express all other quantities in terms of this variable.\n" +
          "3. Set up an equation reflecting the total or relationship stated.\n" +
          "4. Solve the equation and state the final answer with correct units.\n\n" +
          "**Example:** 'I think of a number, multiply it by 4, and subtract 7. The result is 25. Find the number.'\n" +
          "- Let the number be $n$.\n" +
          "- Equation: $4n - 7 = 25$\n" +
          "- $4n = 32 \\implies n = 8$",
        examinerTips: [
          "Always write down the equation first before solving: mark schemes award marks specifically for 'forming a correct equation'.",
        ],
        commonMistakes: [
          "Finding the answer by trial and error without showing an algebraic equation.",
        ],
        recap: [
          "The sum of three consecutive integers is $72$. Form an equation and find the integers.",
        ],
      },
      {
        title: "Forming Equations from Shapes",
        body:
          "Geometric properties provide direct equations:\n\n" +
          "- **Perimeter:** Sum of all side lengths equals the given perimeter.\n" +
          "  - Example: A rectangle with sides $(2x + 3)\\text{ cm}$ and $(x + 1)\\text{ cm}$ has perimeter $38\\text{ cm}$:\n" +
          "  - $2(2x + 3) + 2(x + 1) = 38 \\implies 4x + 6 + 2x + 2 = 38 \\implies 6x + 8 = 38 \\implies 6x = 30 \\implies x = 5$\n" +
          "- **Angles in a Triangle:** Sum to $180^\\circ$:\n" +
          "  - Angles are $2x^\\circ, 3x^\\circ,$ and $(x + 30)^\\circ$:\n" +
          "  - $2x + 3x + (x + 30) = 180 \\implies 6x + 30 = 180 \\implies 6x = 150 \\implies x = 25^\\circ$\n" +
          "- **Equal Sides / Angles:** Isosceles triangle base angles are equal; opposite sides of a rectangle are equal.",
        examinerTips: [
          "Make sure to read whether the question asks for the value of $x$ or the size of the largest angle / side length.",
        ],
        commonMistakes: [
          "Summing only two sides of a rectangle instead of all four when calculating perimeter.",
        ],
        recap: [
          "The three angles of a triangle are $x^\\circ, (2x - 10)^\\circ$, and $(x + 30)^\\circ$. Find the value of $x$ and the size of the smallest angle.",
        ],
      },
    ],
  },
  {
    number: 21,
    title: "Inequalities",
    section: "2. Algebra & Sequences",
    topic: "Inequalities",
    intro:
      "Understanding, solving, and graphing linear inequalities, and displaying solution sets on horizontal number lines.",
    subheadings: [
      {
        title: "Interpreting Inequalities",
        body:
          "An **inequality** compares expressions that are not necessarily equal:\n\n" +
          "- $x > 3$: strictly greater than 3 ($3$ is not included)\n" +
          "- $x \\ge 3$: greater than or equal to 3 ($3$ is included)\n" +
          "- $x < -1$: strictly less than -1\n" +
          "- $-2 \\le x < 5$: compound inequality; $x$ is between -2 (inclusive) and 5 (exclusive)\n\n" +
          "**Solving Linear Inequalities:**\n" +
          "Solve exactly like equations, with one crucial exception:\n" +
          "$$\\mathbf{\\text{When you multiply or divide both sides by a negative number, the inequality sign FLIPS!}}$$\n\n" +
          "**Example 1:** $3x + 5 < 17 \\implies 3x < 12 \\implies x < 4$\n\n" +
          "**Example 2:** $4 - 2x \\le 10$:\n" +
          "- Subtract $4$: $-2x \\le 6$\n" +
          "- Divide by $-2$ and **flip sign**: $x \\ge -3$",
        examinerTips: [
          "If asked to list the integer values satisfying $-2 < x \\le 3$, the answer is $\\{-1, 0, 1, 2, 3\\}$.",
        ],
        commonMistakes: [
          "Forgetting to reverse the inequality sign when dividing by a negative number.",
          "Including $-2$ when the symbol is strictly $<$ rather than $\\le$.",
        ],
        recap: [
          "Solve the inequality: $5x - 7 \\ge 2x + 8$.",
          "List all integer values of $n$ such that $-3 \\le n < 2$.",
        ],
      },
      {
        title: "Representing Inequalities on a Number Line",
        body:
          "Inequalities are represented visually on a number line using circles and arrows:\n\n" +
          "- **Open Circle ($\\circ$):** Used for strict inequalities ($<$ or $>$). The boundary value is **NOT included**.\n" +
          "- **Closed/Solid Circle ($\\bullet$):** Used for inclusive inequalities ($\\le$ or $\\ge$). The boundary value is **included**.\n" +
          "- **Arrow:** Shows the direction of solutions ($>$ points right, $<$ points left).\n" +
          "- **Line between two circles:** Represents a compound inequality like $-3 < x \\le 4$ (open circle at $-3$, closed circle at $4$, connected by a solid bar).",
        examinerTips: [
          "Ensure circles are clearly shaded (solid) or unshaded (open) so the examiner can award the mark without ambiguity.",
        ],
        commonMistakes: [
          "Drawing a solid dot for a strict inequality ($<$ or $>$).",
        ],
        recap: [
          "Describe how to show $-1 \\le x < 4$ on a number line.",
        ],
      },
    ],
  },
  {
    number: 22,
    title: "Rearranging Formulas",
    section: "2. Algebra & Sequences",
    topic: "Rearranging Formulas",
    intro:
      "Changing the subject of a formula using inverse operations and isolating the target variable.",
    subheadings: [
      {
        title: "Rearranging Formulas",
        body:
          "The **subject** of a formula is the single variable isolated on one side of the equals sign with coefficient $+1$ (e.g. in $y = mx + c$, $y$ is the subject).\n\n" +
          "To change the subject to a different variable, perform inverse operations to isolate that variable:\n\n" +
          "**Example 1 (Linear):** Make $x$ the subject of $y = 3x - 5$:\n" +
          "- Add $5$: $y + 5 = 3x$\n" +
          "- Divide by $3$: $x = \\frac{y + 5}{3}$\n\n" +
          "**Example 2 (With Fractions):** Make $a$ the subject of $v = u + at$:\n" +
          "- Subtract $u$: $v - u = at$\n" +
          "- Divide by $t$: $a = \\frac{v - u}{t}$\n\n" +
          "**Example 3 (With Roots & Powers):** Make $r$ the subject of $A = \\pi r^2$:\n" +
          "- Divide by $\\pi$: $\\frac{A}{\\pi} = r^2$\n" +
          "- Square root both sides: $r = \\sqrt{\\frac{A}{\\pi}}$",
        examinerTips: [
          "Write the new subject clearly on the left: $x = \\dots$",
          "Square rooting applies to the entire side: $r = \\sqrt{\\frac{A}{\\pi}}$, with the square root symbol covering the entire fraction.",
        ],
        commonMistakes: [
          "Square rooting before dividing: taking $\\sqrt{A} = \\pi r$ (WRONG; you must isolate $r^2$ first).",
        ],
        recap: [
          "Make $h$ the subject of $V = \\frac{1}{3} A h$.",
          "Make $x$ the subject of $y = 4x^2 - 7$.",
        ],
      },
    ],
  },
  {
    number: 23,
    title: "Simultaneous Equations",
    section: "2. Algebra & Sequences",
    topic: "Simultaneous Equations",
    intro:
      "Solving pairs of linear simultaneous equations in two unknowns using the elimination and substitution methods, and solving real-life worded simultaneous problems.",
    subheadings: [
      {
        title: "Solving Simultaneous Equations",
        body:
          "A pair of linear equations with two unknowns ($x$ and $y$) can be solved to find the unique point where both equations are true simultaneously.\n\n" +
          "**Method 1: Elimination Method:**\n" +
          "1. Multiply one or both equations by suitable integers so the coefficients of one variable have the same numerical value.\n" +
          "2. **Eliminate:**\n" +
          "   - If signs are **SAME**, **SUBTRACT** the equations.\n" +
          "   - If signs are **DIFFERENT**, **ADD** the equations.\n" +
          "3. Solve the resulting single-variable equation.\n" +
          "4. Substitute back into either original equation to find the second variable.\n\n" +
          "**Worked Example:**\n" +
          "$$\\text{(1) } 3x + 2y = 19$$\n" +
          "$$\\text{(2) } 5x - 2y = 13$$\n" +
          "- The coefficients of $y$ are $+2$ and $-2$ (different signs). **Add (1) and (2)**:\n" +
          "$$(3x + 5x) + (2y - 2y) = 19 + 13 \\implies 8x = 32 \\implies x = 4$$\n" +
          "- Substitute $x = 4$ into (1):\n" +
          "$$3(4) + 2y = 19 \\implies 12 + 2y = 19 \\implies 2y = 7 \\implies y = 3.5$$\n\n" +
          "**Method 2: Substitution Method:**\n" +
          "Rearrange one equation to make one variable the subject, then substitute it into the other.",
        examinerTips: [
          "Always check your solutions by substituting both $x$ and $y$ into equation (2).",
        ],
        commonMistakes: [
          "Adding equations when signs are the same, or subtracting equations when signs are different.",
          "Stopping after finding $x$ and forgetting to calculate $y$.",
        ],
        recap: [
          "Solve simultaneously: $2x + 3y = 16$ and $4x - 3y = 8$.",
          "Solve simultaneously: $3x + y = 11$ and $2x + 3y = 12$.",
        ],
      },
      {
        title: "Forming Simultaneous Equations",
        body:
          "Word problems involving two unknown quantities:\n\n" +
          "1. Define two variables clearly (e.g. $c$ = cost of coffee, $t$ = cost of tea).\n" +
          "2. Form two separate equations from the two pieces of information given.\n" +
          "3. Solve using elimination or substitution.\n" +
          "4. State the final answers in context with currency/units.\n\n" +
          "**Example:** 3 coffees and 2 teas cost $\\$12.00$. 4 coffees and 3 teas cost $\\$16.50$.\n" +
          "- $3c + 2t = 12.00$ (multiply by 3: $9c + 6t = 36.00$)\n" +
          "- $4c + 3t = 16.50$ (multiply by 2: $8c + 6t = 33.00$)\n" +
          "- Subtract equations: $c = 3.00$\n" +
          "- Substitute: $3(3.00) + 2t = 12.00 \\implies 9.00 + 2t = 12.00 \\implies 2t = 3.00 \\implies t = 1.50$\n" +
          "- Cost of coffee is $\\$3.00$, cost of tea is $\\$1.50$.",
        examinerTips: [
          "Check that both costs are positive; negative prices mean an algebraic slip occurred.",
        ],
        commonMistakes: [
          "Mixing up which variable represents which item.",
        ],
        recap: [
          "5 adult tickets and 2 child tickets cost $\\$62$. 3 adult tickets and 4 child tickets cost $\\$54$. Find the cost of each ticket.",
        ],
      },
    ],
  },
  {
    number: 24,
    title: "Sequences",
    section: "2. Algebra & Sequences",
    topic: "Sequences",
    intro:
      "Recognising patterns, continuing number sequences, finding the nth term formula for linear arithmetic sequences, and identifying quadratic, cubic, and geometric patterns.",
    subheadings: [
      {
        title: "Introduction to Sequences",
        body:
          "A **sequence** is an ordered list of numbers (terms) that follows a mathematical rule.\n\n" +
          "- **Term:** Each individual number in the sequence ($T_1, T_2, T_3, \\dots, T_n$).\n" +
          "- **Term-to-term rule:** Tells you how to get from one term to the next (e.g. 'add 4', 'multiply by 3').\n" +
          "- **Position-to-term rule ($n$th term):** A formula linking the position number $n$ ($1, 2, 3, \\dots$) directly to the value of the $n$th term.",
        examinerTips: [
          "When asked for a 'term-to-term rule', write a verbal rule (e.g. 'Add 5 each time'). When asked for the '$n$th term', write an algebraic formula in terms of $n$.",
        ],
        commonMistakes: [
          "Giving the term-to-term rule when the question specifically requests the $n$th term formula.",
        ],
        recap: [
          "State the term-to-term rule for: $7, 11, 15, 19, \\dots$",
        ],
      },
      {
        title: "Continuing Sequences",
        body:
          "To find subsequent terms in a sequence:\n" +
          "1. Calculate the difference between consecutive terms ($T_2 - T_1, T_3 - T_2, \\dots$).\n" +
          "2. If the difference is constant: it is an **arithmetic sequence** (add/subtract common difference).\n" +
          "3. If the ratio is constant: it is a **geometric sequence** (multiply/divide by common ratio).\n" +
          "4. If first differences increase steadily: look at second differences (quadratic sequence).\n" +
          "5. **Special sequences:**\n" +
          "   - **Fibonacci sequence:** Each term is the sum of the two preceding terms: $1, 1, 2, 3, 5, 8, 13, 21, \\dots$",
        examinerTips: [
          "For Fibonacci sequences, always test: $T_n = T_{n-1} + T_{n-2}$.",
        ],
        commonMistakes: [
          "Assuming all sequences have a constant difference.",
        ],
        recap: [
          "Find the next two terms of: $2, 6, 18, 54, \\dots$",
          "Find the next two terms of: $3, 5, 8, 13, 21, \\dots$",
        ],
      },
      {
        title: "nth Terms of Linear Sequences",
        body:
          "In a **linear (arithmetic) sequence**, the difference between consecutive terms is constant ($d$).\n\n" +
          "$$\\mathbf{n\\text{th term } = dn + c}$$\n\n" +
          "- $d$ = common difference\n" +
          "- $c$ = zero term ($T_0 = T_1 - d$)\n\n" +
          "**Method:**\n" +
          "1. Find the common difference $d$. The formula starts with $dn$.\n" +
          "2. Work out what to add or subtract to get the first term ($n = 1$):\n" +
          "   $$c = T_1 - d$$\n\n" +
          "**Example:** Find the $n$th term of $5, 8, 11, 14, 17, \\dots$:\n" +
          "- Common difference: $+3 \\implies 3n$\n" +
          "- When $n = 1$: $3(1) = 3$. We need $5$, so add $2$.\n" +
          "- $n$th term $= 3n + 2$.\n\n" +
          "**Finding a specific term:** To find the 50th term, substitute $n = 50$: $T_{50} = 3(50) + 2 = 152$.\n\n" +
          "**Is a number in the sequence?** Set $3n + 2 = 100 \\implies 3n = 98 \\implies n = 32.67$. Since $n$ is not a positive integer, $100$ is not a term.",
        examinerTips: [
          "If the sequence is decreasing, $d$ is negative: for $20, 16, 12, 8, \\dots$, $d = -4$, so $n$th term $= -4n + 24$ or $24 - 4n$.",
        ],
        commonMistakes: [
          "Writing $n + 3$ instead of $3n$ for a sequence increasing by 3.",
        ],
        recap: [
          "Find the $n$th term of: $7, 12, 17, 22, \\dots$",
          "Find the $n$th term of: $31, 27, 23, 19, \\dots$",
        ],
      },
      {
        title: "Quadratic & Cubic Sequences",
        body:
          "**Quadratic Sequences:**\n" +
          "- First differences change, but **second differences are constant** ($2a$).\n" +
          "- Standard forms: $n^2$ sequence is $1, 4, 9, 16, 25, \\dots$\n" +
          "- Example: $3, 6, 11, 18, 27, \\dots$\n" +
          "  - Compare with $n^2$: $1, 4, 9, 16, 25$\n" +
          "  - Each term is $n^2 + 2$\n\n" +
          "**Cubic Sequences:**\n" +
          "- Based on cubes: $n^3 = 1, 8, 27, 64, 125, \\dots$\n" +
          "- Example: $2, 9, 28, 65, 126, \\dots$ is $n^3 + 1$.",
        examinerTips: [
          "In Core exams, recognise shifts of square numbers ($n^2 + c$ or $2n^2$) and cube numbers ($n^3 + c$).",
        ],
        commonMistakes: [
          "Treating a quadratic sequence as linear.",
        ],
        recap: [
          "Write down the $n$th term of: $0, 3, 8, 15, 24, \\dots$",
        ],
      },
    ],
  },
];
