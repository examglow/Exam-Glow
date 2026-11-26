import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 2: Algebra & Sequences
 * Includes all Core content + Extended-only: Algebraic Fractions, Quadratics,
 * Functions, Quadratic Inequalities, Non-Linear Simultaneous Equations
 */
export const MATHEMATICS_EXTENDED_ALGEBRA: Chapter[] = [
  {
    number: 15,
    title: "Introduction to Algebra",
    section: "2. Algebra & Sequences",
    topic: "Introduction to Algebra",
    intro:
      "Algebra uses letters to represent unknown quantities, allowing general mathematical relationships to be expressed and manipulated. This chapter establishes the core algebraic skills needed throughout the Extended course.",
    subheadings: [
      {
        title: "Algebraic Notation",
        body:
          "**Standard algebraic conventions:**\n\n" +
          "- $3x$ means $3 \\times x$ (the multiplication sign is omitted).\n" +
          "- $\\frac{x}{4}$ means $x \\div 4$.\n" +
          "- $x^2$ means $x \\times x$; $x^3$ means $x \\times x \\times x$.\n" +
          "- $3xy$ means $3 \\times x \\times y$.\n" +
          "- $a^2b$ means $a \\times a \\times b$.\n\n" +
          "**Writing algebraic expressions:**\n" +
          "- 'Five more than twice $x$': $2x + 5$\n" +
          "- 'The product of $p$ and $q$ divided by 3': $\\frac{pq}{3}$\n" +
          "- '$n$ cubed decreased by 7': $n^3 - 7$",
        examinerTips: [
          "Write $5x$ not $x5$ — the coefficient (number) always precedes the variable.",
          "In the expression $3x^2$, only $x$ is squared, not 3: $3x^2 = 3 \\times x^2$. $(3x)^2 = 9x^2$.",
        ],
        commonMistakes: [
          "Writing $ab$ as $a + b$ — $ab$ means multiplication.",
          "Confusing $3x^2$ and $(3x)^2$ — these are different expressions.",
        ],
        recap: [
          "Write algebraic expressions for: (a) four less than three times $y$ (b) the square of the sum of $a$ and $b$ (c) half of $n$ plus six.",
        ],
      },
      {
        title: "Algebraic Vocabulary",
        body:
          "**Key terms:**\n\n" +
          "- **Term:** A single algebraic unit, e.g. $5x^2$, $-3y$, $7$.\n" +
          "- **Expression:** A collection of terms combined with $+$ or $-$, e.g. $3x^2 - 2x + 1$.\n" +
          "- **Equation:** A statement that two expressions are equal, e.g. $2x + 3 = 11$.\n" +
          "- **Formula:** An equation expressing a mathematical relationship, e.g. $A = \\pi r^2$.\n" +
          "- **Identity:** True for all values of the variable, e.g. $(a+b)^2 \\equiv a^2 + 2ab + b^2$.\n" +
          "- **Coefficient:** The numerical factor in a term, e.g. in $7x^3$, the coefficient is $7$.\n" +
          "- **Constant:** A term with no variable, e.g. in $3x + 4$, the constant is $4$.\n" +
          "- **Degree:** The highest power of the variable in an expression.",
        examinerTips: [
          "An identity uses $\\equiv$ to show it holds for ALL values — an equation is only true for specific values.",
          "The degree of $4x^3 - 2x + 7$ is 3 (the highest power of $x$).",
        ],
        commonMistakes: [
          "Calling an equation without an equals sign an equation — if there's no $=$, it's an expression.",
        ],
        recap: [
          "In $6x^3 - 4x^2 + x - 9$, state: (a) the number of terms (b) the coefficient of $x^2$ (c) the constant term (d) the degree.",
        ],
      },
      {
        title: "Substitution",
        body:
          "**Substitution** means replacing variables with given numerical values and evaluating the expression.\n\n" +
          "**Example:** Find the value of $3a^2 - 2b + c$ when $a = -2$, $b = 3$, $c = 5$.\n" +
          "$= 3(-2)^2 - 2(3) + 5$\n" +
          "$= 3(4) - 6 + 5$\n" +
          "$= 12 - 6 + 5 = 11$\n\n" +
          "**Example with formula:** Use $v = u + at$ to find $v$ when $u = 8$, $a = -3$, $t = 4$.\n" +
          "$v = 8 + (-3)(4) = 8 - 12 = -4$",
        examinerTips: [
          "Always substitute into brackets: replace $a$ with $(-2)$, not $-2$ without brackets, to avoid sign errors.",
          "Apply BIDMAS after substituting.",
        ],
        commonMistakes: [
          "Substituting $a = -2$: writing $3a^2 = 3 \\times -2^2 = 3 \\times -4 = -12$ — WRONG. Correct: $3(-2)^2 = 3(4) = 12$.",
        ],
        recap: [
          "Find the value of $\\frac{p^2 - q}{r + 1}$ when $p = 5$, $q = -3$, $r = 4$.",
          "Use $s = ut + \\frac{1}{2}at^2$ to find $s$ when $u = 0$, $a = 10$, $t = 3$.",
        ],
      },
      {
        title: "Collecting Like Terms",
        body:
          "**Like terms** have exactly the same variables raised to the same powers. Only like terms can be added or subtracted.\n\n" +
          "$3x^2$ and $-7x^2$ are like terms (both $x^2$).\n" +
          "$3x^2$ and $3x$ are NOT like terms (different powers of $x$).\n\n" +
          "**Simplifying by collecting like terms:**\n" +
          "$5x^2 + 3x - 2x^2 + 4x - 7$\n" +
          "$= (5x^2 - 2x^2) + (3x + 4x) - 7$\n" +
          "$= 3x^2 + 7x - 7$\n\n" +
          "**With two variables:**\n" +
          "$4a - 3b + 2a + 5b = 6a + 2b$",
        examinerTips: [
          "Only combine terms with identical variable parts — $5x^2y$ and $5xy^2$ are NOT like terms.",
          "Be careful with negative signs before brackets.",
        ],
        commonMistakes: [
          "Adding unlike terms: $3x^2 + 2x = 5x^3$ — WRONG; they cannot be combined.",
          "Dropping the negative sign: $5x - 3x = 5x + 3x$ — WRONG; $5x - 3x = 2x$.",
        ],
        recap: [
          "Simplify: (a) $7a + 3b - 2a + 5b$ (b) $4x^2 - 3x + x^2 + 5x - 2$ (c) $3p^2q - pq^2 + 2p^2q + 4pq^2$.",
        ],
      },
    ],
  },
  {
    number: 16,
    title: "Algebraic Roots & Indices",
    section: "2. Algebra & Sequences",
    topic: "Algebraic Roots & Indices",
    intro:
      "Extending the laws of indices to algebraic expressions allows simplification of complex terms. This chapter covers all index laws applied to algebra.",
    subheadings: [
      {
        title: "Algebraic Roots & Indices",
        body:
          "The **laws of indices** apply to algebraic expressions:\n\n" +
          "| Law | Example |\n" +
          "|-----|---------|\n" +
          "| $a^m \\times a^n = a^{m+n}$ | $x^4 \\times x^{-2} = x^2$ |\n" +
          "| $a^m \\div a^n = a^{m-n}$ | $y^5 \\div y^3 = y^2$ |\n" +
          "| $(a^m)^n = a^{mn}$ | $(x^3)^4 = x^{12}$ |\n" +
          "| $(ab)^n = a^n b^n$ | $(2x)^3 = 8x^3$ |\n" +
          "| $a^0 = 1$ | $x^0 = 1$ |\n" +
          "| $a^{-n} = \\frac{1}{a^n}$ | $x^{-3} = \\frac{1}{x^3}$ |\n" +
          "| $a^{\\frac{1}{n}} = \\sqrt[n]{a}$ | $x^{\\frac{1}{2}} = \\sqrt{x}$ |\n" +
          "| $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m$ | $8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 4$ |\n\n" +
          "**Simplifying algebraic index expressions:**\n" +
          "$\\frac{6x^4 y^3}{3x^2 y^{-1}} = 2x^{4-2} y^{3-(-1)} = 2x^2 y^4$",
        examinerTips: [
          "Handle coefficients and each variable separately when simplifying.",
          "Negative indices: move the base to the other side of the fraction and change the sign of the index.",
        ],
        commonMistakes: [
          "$x^3 \\times x^4 = x^{12}$ — WRONG; it's $x^7$ (add the indices, don't multiply).",
          "$(x + y)^2 \\neq x^2 + y^2$ — the power of a sum ≠ sum of powers.",
        ],
        recap: [
          "Simplify: (a) $\\frac{12a^5 b^{-2}}{4a^{-1} b^3}$ (b) $(3x^2 y)^3$ (c) $\\left(\\frac{x^4}{x^{-2}}\\right)^{\\frac{1}{3}}$.",
        ],
      },
    ],
  },
  {
    number: 17,
    title: "Expanding & Factorising Brackets",
    section: "2. Algebra & Sequences",
    topic: "Expanding & Factorising",
    intro:
      "Expanding removes brackets; factorising reintroduces them. Both are fundamental algebraic manipulation skills used throughout the Extended course.",
    subheadings: [
      {
        title: "Expanding & Simplifying Single Brackets",
        body:
          "**Expanding a single bracket:** Multiply each term inside by the term outside.\n\n" +
          "$3(2x + 5) = 6x + 15$\n" +
          "$-4(3x - 2) = -12x + 8$\n" +
          "$x(x^2 - 3x + 1) = x^3 - 3x^2 + x$\n\n" +
          "**Simplifying after expanding:**\n" +
          "$5(x + 3) - 2(x - 4)$\n" +
          "$= 5x + 15 - 2x + 8$\n" +
          "$= 3x + 23$",
        examinerTips: [
          "Pay special attention to negative signs outside brackets — they flip the signs of all terms inside.",
          "Expand before collecting like terms.",
        ],
        commonMistakes: [
          "$-3(x - 4) = -3x - 12$ — WRONG; $-3 \\times (-4) = +12$. Correct: $-3x + 12$.",
        ],
        recap: [
          "Expand and simplify: (a) $4(3x - 1) + 2(x + 5)$ (b) $3x(x - 2) - x(x + 4)$.",
        ],
      },
      {
        title: "Expanding Double Brackets",
        body:
          "**FOIL method** (First, Outer, Inner, Last):\n\n" +
          "$(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$\n\n" +
          "$(2x - 3)(x + 4) = 2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$\n\n" +
          "**Special identities:**\n" +
          "- $(a + b)^2 = a^2 + 2ab + b^2$\n" +
          "- $(a - b)^2 = a^2 - 2ab + b^2$\n" +
          "- $(a + b)(a - b) = a^2 - b^2$ (difference of two squares)\n\n" +
          "**Triple brackets:** Expand two brackets first, then multiply by the third.\n" +
          "$(x + 1)(x + 2)(x + 3)$: first $(x+1)(x+2) = x^2 + 3x + 2$, then $(x^2 + 3x + 2)(x + 3) = x^3 + 6x^2 + 11x + 6$.",
        examinerTips: [
          "Learn the three special identities — they appear frequently and save time.",
          "For triple brackets, always expand two at a time, left to right.",
        ],
        commonMistakes: [
          "$(x + 3)^2 = x^2 + 9$ — WRONG; correct is $x^2 + 6x + 9$ (the middle term $2ab$ is missing).",
        ],
        recap: [
          "Expand and simplify: (a) $(3x - 2)(2x + 5)$ (b) $(x - 4)^2$ (c) $(2x + 1)(2x - 1)$ (d) $(x+1)(x-2)(x+3)$.",
        ],
      },
      {
        title: "Factorising Out Terms",
        body:
          "**Factorising** is the reverse of expanding — rewriting an expression as a product.\n\n" +
          "**Taking out a common factor:** Find the HCF of all terms.\n\n" +
          "$6x^2 + 9x = 3x(2x + 3)$\n" +
          "$12a^2b - 8ab^2 = 4ab(3a - 2b)$\n\n" +
          "**Factorising by grouping** (4-term expressions):\n" +
          "$ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$\n\n" +
          "$3x^2 - 6x + 5x - 10 = 3x(x - 2) + 5(x - 2) = (3x + 5)(x - 2)$",
        examinerTips: [
          "Always check factorisation by re-expanding.",
          "For grouping, choose pairs that share a common factor.",
        ],
        commonMistakes: [
          "Taking out only part of the HCF: $6x^2 + 9x = 3(2x^2 + 3x)$ — $3x$ should be taken out, not just $3$.",
        ],
        recap: [
          "Factorise fully: (a) $15p^3q - 10p^2q^2$ (b) $ax - ay + 3x - 3y$ (c) $6x^2 - 10x$.",
        ],
      },
    ],
  },
  {
    number: 18,
    title: "Algebraic Fractions",
    section: "2. Algebra & Sequences",
    topic: "Algebraic Fractions",
    intro:
      "Algebraic fractions extend fraction arithmetic to expressions with variables. This Extended-only topic requires skills from factorising and common denominators.",
    subheadings: [
      {
        title: "Simplifying, Multiplying & Dividing Algebraic Fractions",
        body:
          "**Simplifying:** Factorise numerator and denominator, then cancel common factors.\n\n" +
          "$\\frac{x^2 - 4}{x^2 + 4x + 4} = \\frac{(x+2)(x-2)}{(x+2)^2} = \\frac{x-2}{x+2}$\n\n" +
          "$\\frac{6x^2 - 3x}{9x} = \\frac{3x(2x-1)}{9x} = \\frac{2x-1}{3}$\n\n" +
          "**Multiplying:** Multiply numerators together and denominators together. Factorise and cancel first.\n\n" +
          "$\\frac{x^2 - 1}{x+3} \\times \\frac{x+3}{x+1} = \\frac{(x+1)(x-1)}{x+3} \\times \\frac{x+3}{x+1} = x-1$\n\n" +
          "**Dividing:** Multiply by the reciprocal of the second fraction.\n\n" +
          "$\\frac{x^2}{x+2} \\div \\frac{x}{x^2-4} = \\frac{x^2}{x+2} \\times \\frac{(x+2)(x-2)}{x} = x(x-2)$",
        examinerTips: [
          "Always factorise fully before cancelling — never cancel terms that are added or subtracted (only factors).",
          "$\\frac{x+3}{x+5} \\neq \\frac{3}{5}$ — you cannot cancel parts of sums.",
        ],
        commonMistakes: [
          "Cancelling terms instead of factors: $\\frac{x^2 + x}{x} = x^2 + 1$ — WRONG. Correct: $\\frac{x(x+1)}{x} = x+1$.",
          "Flipping the wrong fraction when dividing.",
        ],
        recap: [
          "Simplify: (a) $\\frac{x^2-9}{x^2-x-6}$ (b) $\\frac{4x^2}{x+1} \\times \\frac{x^2-1}{2x}$ (c) $\\frac{x^2+2x}{x^2-4} \\div \\frac{x}{x-2}$.",
        ],
      },
      {
        title: "Adding & Subtracting Algebraic Fractions",
        body:
          "To add or subtract algebraic fractions, find the **lowest common denominator (LCD)**, write each fraction with the LCD, then combine numerators.\n\n" +
          "**Example 1 — numeric denominators:**\n" +
          "$\\frac{3}{x} + \\frac{2}{x+1}$\n" +
          "LCD $= x(x+1)$\n" +
          "$= \\frac{3(x+1)}{x(x+1)} + \\frac{2x}{x(x+1)} = \\frac{3x+3+2x}{x(x+1)} = \\frac{5x+3}{x(x+1)}$\n\n" +
          "**Example 2 — with factorised denominators:**\n" +
          "$\\frac{2}{x-1} - \\frac{3}{x+2}$\n" +
          "LCD $= (x-1)(x+2)$\n" +
          "$= \\frac{2(x+2) - 3(x-1)}{(x-1)(x+2)} = \\frac{2x+4-3x+3}{(x-1)(x+2)} = \\frac{-x+7}{(x-1)(x+2)}$",
        examinerTips: [
          "Leave the denominator in factorised form in your final answer.",
          "Expand the numerator fully and collect like terms before writing the final answer.",
        ],
        commonMistakes: [
          "Adding the denominators: $\\frac{1}{x} + \\frac{1}{y} = \\frac{2}{x+y}$ — WRONG.",
          "Sign errors when subtracting: forgetting to distribute the negative into all terms of the second numerator.",
        ],
        recap: [
          "Simplify: (a) $\\frac{4}{x} + \\frac{3}{x-2}$ (b) $\\frac{5}{x+3} - \\frac{2}{x-1}$ (c) $\\frac{x}{x+1} + \\frac{1}{x-2}$.",
        ],
      },
    ],
  },
  {
    number: 19,
    title: "Linear Equations",
    section: "2. Algebra & Sequences",
    topic: "Linear Equations",
    intro:
      "Linear equations contain variables to the first power only. This chapter develops systematic techniques for solving them, including equations with brackets, fractions, and unknowns on both sides.",
    subheadings: [
      {
        title: "Solving Linear Equations",
        body:
          "**Method:** Use inverse operations to isolate the variable. Perform the same operation on both sides at each step.\n\n" +
          "**Simple equation:** $3x + 7 = 22$\n" +
          "$3x = 15 \\Rightarrow x = 5$\n\n" +
          "**Equations with brackets:** Expand first.\n" +
          "$4(2x - 3) = 20$\n" +
          "$8x - 12 = 20 \\Rightarrow 8x = 32 \\Rightarrow x = 4$\n\n" +
          "**Equations with fractions:** Multiply through by the LCM of denominators.\n" +
          "$\\frac{x+3}{4} = \\frac{2x-1}{3}$\n" +
          "Multiply by 12: $3(x+3) = 4(2x-1) \\Rightarrow 3x+9 = 8x-4 \\Rightarrow 13 = 5x \\Rightarrow x = \\frac{13}{5}$",
        examinerTips: [
          "Show each step clearly — Cambridge mark schemes award marks for method even if the final answer is wrong.",
          "Always check your solution by substituting back into the original equation.",
        ],
        commonMistakes: [
          "Forgetting to multiply ALL terms by the LCD, not just the fraction terms.",
          "Sign errors when moving terms across the equals sign.",
        ],
        recap: [
          "Solve: (a) $5(2x-1) = 3(x+4)$ (b) $\\frac{3x+1}{2} - \\frac{x-2}{3} = 4$ (c) $\\frac{2}{x-1} = \\frac{3}{x+2}$.",
        ],
      },
      {
        title: "Equations with Unknowns on Both Sides",
        body:
          "Collect variable terms on one side (usually the side with the larger coefficient) and constants on the other.\n\n" +
          "**Example:** $7x - 4 = 3x + 12$\n" +
          "$7x - 3x = 12 + 4 \\Rightarrow 4x = 16 \\Rightarrow x = 4$\n\n" +
          "**Example with brackets:** $5(x-2) = 3(x+4) - 2$\n" +
          "$5x - 10 = 3x + 12 - 2$\n" +
          "$5x - 10 = 3x + 10$\n" +
          "$2x = 20 \\Rightarrow x = 10$",
        examinerTips: [
          "Collect $x$-terms on the side where the coefficient will be positive to avoid sign errors.",
        ],
        commonMistakes: [
          "Moving a term without changing its sign: $7x - 4 = 3x + 12 \\Rightarrow 7x - 3x = 12 - 4$ — sign of $-4$ must become $+4$ on the right.",
        ],
        recap: [
          "Solve: (a) $8x - 3 = 5x + 9$ (b) $4(x+2) = 2(3x-1) + 6$.",
        ],
      },
      {
        title: "Forming Equations from Words & Shapes",
        body:
          "**Forming equations from words:**\n" +
          "Translate key phrases into algebra, form an equation, then solve.\n\n" +
          "Example: 'Three consecutive integers sum to 51. Find them.'\n" +
          "Let integers be $n$, $n+1$, $n+2$.\n" +
          "$n + (n+1) + (n+2) = 51 \\Rightarrow 3n + 3 = 51 \\Rightarrow n = 16$.\n" +
          "Integers: 16, 17, 18.\n\n" +
          "**Forming equations from shapes:**\n" +
          "If a triangle has angles $3x$, $x+10$, and $2x-30$ (in degrees):\n" +
          "$3x + x + 10 + 2x - 30 = 180 \\Rightarrow 6x - 20 = 180 \\Rightarrow x = \\frac{200}{6}$.\n\n" +
          "If a rectangle has perimeter $P$ and sides $3x+1$ and $x+5$:\n" +
          "$2(3x+1+x+5) = P \\Rightarrow 2(4x+6) = P \\Rightarrow 8x + 12 = P$.",
        examinerTips: [
          "Define the variable clearly: 'Let $x$ = ...' before forming the equation.",
          "After solving, answer the original question — if asked for the integers (not $n$), give the integers.",
        ],
        commonMistakes: [
          "Solving for $x$ then forgetting to find the original quantity asked for.",
          "Not checking whether the solution makes physical sense (e.g., a negative length).",
        ],
        recap: [
          "The angles in a quadrilateral are $x$, $2x-10$, $x+30$, and $3x+20$. Find $x$ and each angle.",
          "A rectangle's length is 3 more than twice its width. If the perimeter is $72$ cm, find the dimensions.",
        ],
      },
    ],
  },
  {
    number: 20,
    title: "Quadratics",
    section: "2. Algebra & Sequences",
    topic: "Quadratics",
    intro:
      "Quadratic expressions and equations (degree 2) appear across algebra, graphs, and geometry. This Extended-only chapter covers three methods of solving quadratics: factorising, the quadratic formula, and completing the square.",
    subheadings: [
      {
        title: "Factorising Quadratics",
        body:
          "A **quadratic expression** has the form $ax^2 + bx + c$.\n\n" +
          "**Case 1 — leading coefficient $a = 1$:** Find two numbers that multiply to $c$ and add to $b$.\n\n" +
          "$x^2 + 7x + 12 = (x+3)(x+4)$ since $3 \\times 4 = 12$ and $3 + 4 = 7$.\n" +
          "$x^2 - 5x - 14 = (x-7)(x+2)$ since $-7 \\times 2 = -14$ and $-7 + 2 = -5$.\n\n" +
          "**Case 2 — leading coefficient $a \\neq 1$:** Use the $ac$ method.\n\n" +
          "$6x^2 + 7x - 3$: $a \\times c = 6 \\times -3 = -18$. Find two numbers that multiply to $-18$ and add to $7$: $9$ and $-2$.\n" +
          "Split: $6x^2 + 9x - 2x - 3 = 3x(2x+3) - 1(2x+3) = (3x-1)(2x+3)$.\n\n" +
          "**Difference of two squares:** $a^2 - b^2 = (a+b)(a-b)$.\n" +
          "$x^2 - 25 = (x+5)(x-5)$; $4x^2 - 9 = (2x+3)(2x-3)$.",
        examinerTips: [
          "Always look for a common factor first before factorising the quadratic: $2x^2 + 6x + 4 = 2(x^2 + 3x + 2) = 2(x+1)(x+2)$.",
          "The difference of two squares only works for subtraction, not addition.",
        ],
        commonMistakes: [
          "Sign errors in the bracket: for $x^2 - 7x + 12 = (x-3)(x-4)$ — both signs negative since the product is positive and the sum is negative.",
          "Forgetting to check using FOIL after factorising.",
        ],
        recap: [
          "Factorise: (a) $x^2 + 3x - 18$ (b) $2x^2 - 7x + 3$ (c) $9x^2 - 16$ (d) $3x^2 + 12x + 9$.",
        ],
      },
      {
        title: "Quadratic Formula",
        body:
          "For the quadratic equation $ax^2 + bx + c = 0$, the solutions are:\n\n" +
          "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\n" +
          "**The discriminant** $\\Delta = b^2 - 4ac$ determines the nature of the roots:\n" +
          "- $\\Delta > 0$: two distinct real roots\n" +
          "- $\\Delta = 0$: one repeated real root (a perfect square quadratic)\n" +
          "- $\\Delta < 0$: no real roots\n\n" +
          "**Example:** Solve $3x^2 - 5x - 2 = 0$.\n" +
          "$a = 3$, $b = -5$, $c = -2$\n" +
          "$x = \\frac{5 \\pm \\sqrt{25 + 24}}{6} = \\frac{5 \\pm 7}{6}$\n" +
          "$x = 2$ or $x = -\\frac{1}{3}$",
        examinerTips: [
          "If the question says 'give answers to 2 d.p.', the quadratic likely doesn't factorise neatly — use the formula.",
          "Identify $a$, $b$, $c$ carefully — be especially careful with negatives.",
        ],
        commonMistakes: [
          "Forgetting to rearrange to $ax^2 + bx + c = 0$ before identifying $a$, $b$, $c$.",
          "Computing $-b$ incorrectly when $b$ is negative: if $b = -5$, then $-b = 5$.",
          "Dividing by $2a$ only the numerator without the $\\pm\\sqrt{\\cdot}$ part.",
        ],
        recap: [
          "Use the quadratic formula to solve, giving answers to 3 s.f. where not exact:\n(a) $x^2 + 5x - 3 = 0$ (b) $2x^2 - 3x - 7 = 0$ (c) $4x^2 + x + 2 = 0$.",
        ],
      },
      {
        title: "Completing the Square",
        body:
          "**Completing the square** rewrites $ax^2 + bx + c$ in the form $a(x+p)^2 + q$.\n\n" +
          "**Method for $x^2 + bx + c$ (leading coefficient 1):**\n\n" +
          "1. Write $(x + \\frac{b}{2})^2$.\n" +
          "2. Subtract $(\\frac{b}{2})^2$ to compensate.\n" +
          "3. Add $c$.\n\n" +
          "$x^2 + 6x + 2 = (x+3)^2 - 9 + 2 = (x+3)^2 - 7$\n\n" +
          "**Method for $ax^2 + bx + c$ (leading coefficient $a \\neq 1$):**\n\n" +
          "$2x^2 - 8x + 3 = 2(x^2 - 4x) + 3 = 2[(x-2)^2 - 4] + 3 = 2(x-2)^2 - 8 + 3 = 2(x-2)^2 - 5$\n\n" +
          "**Applications of completed square form:**\n" +
          "- **Solving equations:** $2(x-2)^2 - 5 = 0 \\Rightarrow (x-2)^2 = 2.5 \\Rightarrow x = 2 \\pm \\sqrt{2.5}$\n" +
          "- **Vertex of parabola:** $a(x+p)^2 + q$ has vertex at $(-p, q)$.\n" +
          "- **Minimum/Maximum value:** If $a > 0$, minimum is $q$; if $a < 0$, maximum is $q$.",
        examinerTips: [
          "The vertex of $y = (x-h)^2 + k$ is at $(h, k)$ — note the sign: $(x-3)^2$ has vertex at $x = +3$.",
          "Completing the square works for any quadratic — use it when the quadratic formula isn't required but the equation doesn't factorise.",
        ],
        commonMistakes: [
          "Sign error: $(x+3)^2 = x^2 + 6x + 9$ so to get $x^2 + 6x$ we subtract $9$, NOT add it.",
          "Forgetting to factor out the leading coefficient $a$ before completing the square.",
        ],
        recap: [
          "Complete the square for: (a) $x^2 - 10x + 3$ (b) $3x^2 + 12x - 1$.",
          "Using your answer to (a), solve $x^2 - 10x + 3 = 0$, giving answers in surd form.",
          "State the minimum value of $x^2 - 10x + 3$ and the value of $x$ where it occurs.",
        ],
      },
    ],
  },
  {
    number: 21,
    title: "Functions",
    section: "2. Algebra & Sequences",
    topic: "Functions",
    intro:
      "Functions describe mathematical mappings from an input to an output. This Extended-only chapter covers function notation, composite functions, and inverse functions.",
    subheadings: [
      {
        title: "Function Notation",
        body:
          "A **function** $f$ maps each input $x$ to exactly one output, written $f(x)$.\n\n" +
          "$f(x) = 3x - 2$ means: 'multiply the input by 3 and subtract 2'.\n\n" +
          "$f(4) = 3(4) - 2 = 10$\n" +
          "$f(-1) = 3(-1) - 2 = -5$\n" +
          "$f(a+1) = 3(a+1) - 2 = 3a + 1$\n\n" +
          "**Domain:** The set of allowed input values.\n" +
          "**Range:** The set of corresponding output values.\n\n" +
          "Common domain restrictions:\n" +
          "- $f(x) = \\sqrt{x}$: domain is $x \\geq 0$ (cannot square root a negative).\n" +
          "- $f(x) = \\frac{1}{x-3}$: domain is $x \\neq 3$ (denominator cannot be zero).",
        examinerTips: [
          "Always substitute the entire expression into the function: for $f(a+1)$, replace every $x$ with $(a+1)$, keeping brackets.",
          "$f(x) = 5$ means 'solve for $x$ when the output is 5', not 'substitute $x = 5$'.",
        ],
        commonMistakes: [
          "Confusing $f(2) \\times g(2)$ with $fg(2)$ — the latter means composite function $f(g(2))$.",
          "Omitting brackets when substituting: $f(x+1) = 3x + 1 - 2$ — wrong. It's $3(x+1) - 2 = 3x + 1$.",
        ],
        recap: [
          "Given $f(x) = x^2 - 3x$ and $g(x) = 2x + 1$, find: (a) $f(-2)$ (b) $g(x) = 7$ — solve for $x$ (c) $f(x+2)$.",
        ],
      },
      {
        title: "Composite Functions",
        body:
          "**Composite function** $fg(x)$ (also written $f \\circ g$) means: apply $g$ first, then apply $f$ to the result.\n\n" +
          "$$fg(x) = f(g(x))$$\n\n" +
          "**Example:** $f(x) = 2x + 3$, $g(x) = x^2 - 1$.\n\n" +
          "$fg(x) = f(g(x)) = f(x^2 - 1) = 2(x^2-1) + 3 = 2x^2 + 1$\n\n" +
          "$gf(x) = g(f(x)) = g(2x+3) = (2x+3)^2 - 1 = 4x^2 + 12x + 8$\n\n" +
          "Note: $fg(x) \\neq gf(x)$ in general — order matters.\n\n" +
          "$ff(x) = f(f(x)) = f(2x+3) = 2(2x+3) + 3 = 4x + 9$",
        examinerTips: [
          "Apply functions right to left: in $fg(x)$, $g$ is applied first, then $f$.",
          "For $fg(2)$: compute $g(2)$ first, then apply $f$ to that answer.",
        ],
        commonMistakes: [
          "Applying $f$ first in $fg(x)$ — always apply the rightmost function first.",
          "Multiplying the functions together: $fg(x) \\neq f(x) \\times g(x)$.",
        ],
        recap: [
          "Given $f(x) = \\frac{x+1}{2}$ and $g(x) = x^2 - 4$:\n(a) Find $fg(x)$ (b) Find $gf(x)$ (c) Solve $fg(x) = 10$.",
        ],
      },
      {
        title: "Inverse Functions",
        body:
          "The **inverse function** $f^{-1}(x)$ reverses the effect of $f$. If $f(a) = b$, then $f^{-1}(b) = a$.\n\n" +
          "**Method to find $f^{-1}(x)$:**\n" +
          "1. Write $y = f(x)$.\n" +
          "2. Rearrange to make $x$ the subject.\n" +
          "3. Replace $x$ with $f^{-1}(x)$ and $y$ with $x$.\n\n" +
          "**Example:** Find $f^{-1}(x)$ where $f(x) = \\frac{3x+2}{x-1}$.\n\n" +
          "Let $y = \\frac{3x+2}{x-1}$:\n" +
          "$y(x-1) = 3x+2$\n" +
          "$xy - y = 3x + 2$\n" +
          "$xy - 3x = y + 2$\n" +
          "$x(y-3) = y+2$\n" +
          "$x = \\frac{y+2}{y-3}$\n\n" +
          "So $f^{-1}(x) = \\frac{x+2}{x-3}$.\n\n" +
          "**Key properties:**\n" +
          "- $ff^{-1}(x) = x$ and $f^{-1}f(x) = x$.\n" +
          "- The graph of $f^{-1}$ is the reflection of the graph of $f$ in the line $y = x$.",
        examinerTips: [
          "Check by verifying $f(f^{-1}(x)) = x$ using a simple value.",
          "Not every function has an inverse — it must be a one-to-one mapping.",
        ],
        commonMistakes: [
          "$f^{-1}(x) \\neq \\frac{1}{f(x)}$ — the $-1$ is not a power here, it means 'inverse'.",
          "Forgetting to swap $x$ and $y$ at the end of the method.",
        ],
        recap: [
          "Find the inverse of: (a) $f(x) = 5x - 3$ (b) $g(x) = \\frac{x+4}{x-2}$ (c) $h(x) = \\frac{3}{2x+1}$.",
          "Verify that $ff^{-1}(x) = x$ for part (a).",
        ],
      },
    ],
  },
  {
    number: 22,
    title: "Inequalities",
    section: "2. Algebra & Sequences",
    topic: "Inequalities",
    intro:
      "Inequalities describe ranges of values rather than specific solutions. The Extended course includes both linear and quadratic inequalities.",
    subheadings: [
      {
        title: "Interpreting Inequalities",
        body:
          "**Inequality symbols:**\n" +
          "- $x > 3$: $x$ is strictly greater than 3\n" +
          "- $x \\geq 3$: $x$ is greater than or equal to 3\n" +
          "- $x < 3$: $x$ is strictly less than 3\n" +
          "- $x \\leq 3$: $x$ is less than or equal to 3\n\n" +
          "**Double inequalities:** $-2 < x \\leq 5$ means $x$ is between $-2$ (exclusive) and $5$ (inclusive).\n\n" +
          "**Integer solutions:** If $-1 < x \\leq 4$, the integers are $0, 1, 2, 3, 4$.",
        examinerTips: [
          "Open circle on a number line = strict inequality ($<$ or $>$); closed/filled circle = includes that value ($\\leq$ or $\\geq$).",
        ],
        commonMistakes: [
          "Including the endpoint when the inequality is strict: for $x > 3$, $x = 3$ is NOT a solution.",
        ],
        recap: [
          "List the integers satisfying $-3 \\leq x < 2$. Write the inequality shown by the number line with a closed circle at $-1$ and an open circle at $4$.",
        ],
      },
      {
        title: "Solving Linear Inequalities",
        body:
          "Solve linear inequalities like equations, with one crucial difference:\n\n" +
          "> **When multiplying or dividing both sides by a negative number, reverse the inequality sign.**\n\n" +
          "**Example:** Solve $3 - 2x < 11$.\n" +
          "$-2x < 8 \\Rightarrow x > -4$ (divided both sides by $-2$, so sign reverses)\n\n" +
          "**Example:** Solve $3x + 1 \\leq 5x - 7$.\n" +
          "$1 + 7 \\leq 5x - 3x \\Rightarrow 8 \\leq 2x \\Rightarrow x \\geq 4$\n\n" +
          "**Double inequalities:** Solve both parts simultaneously.\n" +
          "$-3 < 2x + 1 \\leq 9$\n" +
          "Subtract 1: $-4 < 2x \\leq 8$\n" +
          "Divide by 2: $-2 < x \\leq 4$",
        examinerTips: [
          "Collect $x$-terms on the side that makes the coefficient positive to avoid needing to flip the inequality.",
          "Show the solution on a number line if the question asks for it.",
        ],
        commonMistakes: [
          "Not reversing the inequality when dividing by a negative.",
          "Solving $-4 < 2x \\leq 8$ as two separate inequalities and forgetting the connection.",
        ],
        recap: [
          "Solve and show on a number line: (a) $4x - 3 > 5$ (b) $2 - 3x \\leq 11$ (c) $-7 < 3x + 2 \\leq 14$.",
        ],
      },
      {
        title: "Quadratic Inequalities",
        body:
          "To solve quadratic inequalities, find the roots then sketch the parabola to identify the solution region.\n\n" +
          "**Example:** Solve $x^2 - x - 6 > 0$.\n\n" +
          "Step 1: Find roots: $x^2 - x - 6 = (x-3)(x+2) = 0 \\Rightarrow x = 3$ or $x = -2$.\n\n" +
          "Step 2: Sketch $y = x^2 - x - 6$ — a upward-opening parabola crossing $x$-axis at $-2$ and $3$.\n\n" +
          "Step 3: We want $y > 0$ — above the $x$-axis. This is for $x < -2$ or $x > 3$.\n\n" +
          "**Example:** Solve $x^2 - x - 6 \\leq 0$.\n" +
          "Same roots; we want $y \\leq 0$ — below/on the $x$-axis: $-2 \\leq x \\leq 3$.\n\n" +
          "**Rule of thumb:**\n" +
          "- For $ax^2 + bx + c > 0$ (parabola opens up): solution is **outside** the roots ($x < r_1$ or $x > r_2$)\n" +
          "- For $ax^2 + bx + c < 0$ (parabola opens up): solution is **between** the roots ($r_1 < x < r_2$)",
        examinerTips: [
          "Always factorise or use the formula to find roots first. Never divide both sides by a quadratic.",
          "A sketch of the parabola removes ambiguity about which region satisfies the inequality.",
        ],
        commonMistakes: [
          "Writing $x < -2$ AND $x > 3$ as $-2 > x > 3$ — this is impossible. It must be two separate inequalities.",
          "Solving as an equation and stopping — the problem asks for a range, not specific values.",
        ],
        recap: [
          "Solve: (a) $x^2 - 7x + 10 < 0$ (b) $x^2 + x - 12 \\geq 0$ (c) $2x^2 - 5x - 3 > 0$.",
        ],
      },
    ],
  },
  {
    number: 23,
    title: "Rearranging Formulas",
    section: "2. Algebra & Sequences",
    topic: "Rearranging Formulas",
    intro:
      "Rearranging (changing the subject of) a formula is an essential algebraic skill used in physics, geometry, and economics problems throughout the Extended course.",
    subheadings: [
      {
        title: "Rearranging Formulas",
        body:
          "**Making a variable the subject** means isolating it on one side of the formula using inverse operations.\n\n" +
          "**Simple rearrangement:** Make $r$ the subject of $A = \\pi r^2 h$.\n" +
          "$r^2 = \\frac{A}{\\pi h} \\Rightarrow r = \\sqrt{\\frac{A}{\\pi h}}$ (taking positive root for length)\n\n" +
          "**Variable appears in multiple terms:**\n" +
          "Make $x$ the subject of $ax + b = cx + d$.\n" +
          "$ax - cx = d - b \\Rightarrow x(a - c) = d - b \\Rightarrow x = \\frac{d-b}{a-c}$\n\n" +
          "**Harder rearrangement with the subject in a fraction:**\n" +
          "Make $x$ the subject of $y = \\frac{x+2}{x-3}$.\n" +
          "$y(x-3) = x+2 \\Rightarrow xy - 3y = x + 2 \\Rightarrow xy - x = 3y + 2 \\Rightarrow x(y-1) = 3y+2 \\Rightarrow x = \\frac{3y+2}{y-1}$",
        examinerTips: [
          "If the new subject appears in more than one term, collect all those terms on one side and factorise.",
          "Show each step clearly — the examiner awards method marks for correct algebraic manipulation.",
        ],
        commonMistakes: [
          "Taking the square root prematurely before fully isolating the squared term.",
          "Sign errors when moving terms — always change sign when crossing the equals sign.",
        ],
        recap: [
          "Make the stated variable the subject:\n(a) $v^2 = u^2 + 2as$, make $a$ the subject\n(b) $T = 2\\pi\\sqrt{\\frac{l}{g}}$, make $l$ the subject\n(c) $\\frac{a+b}{a-b} = k$, make $a$ the subject.",
        ],
      },
    ],
  },
  {
    number: 24,
    title: "Simultaneous Equations",
    section: "2. Algebra & Sequences",
    topic: "Simultaneous Equations",
    intro:
      "Simultaneous equations are two or more equations that must be satisfied at the same time. The Extended course includes both linear simultaneous equations and non-linear simultaneous equations (one linear, one quadratic).",
    subheadings: [
      {
        title: "Solving Linear Simultaneous Equations",
        body:
          "**Method 1 — Elimination:** Multiply equations to make coefficients of one variable equal, then add or subtract.\n\n" +
          "Solve: $3x + 2y = 11$ and $5x - 2y = 13$.\n" +
          "Adding: $8x = 24 \\Rightarrow x = 3$. Substituting: $9 + 2y = 11 \\Rightarrow y = 1$.\n\n" +
          "Solve: $4x + 3y = 25$ and $2x + 5y = 23$.\n" +
          "Multiply first by 1, second by 2: $4x + 10y = 46$. Subtract: $7y = 21 \\Rightarrow y = 3$. Then $4x = 16 \\Rightarrow x = 4$.\n\n" +
          "**Method 2 — Substitution:** Rearrange one equation for one variable, substitute into the other.\n\n" +
          "Solve: $y = 2x - 1$ and $3x + 4y = 25$.\n" +
          "Substitute: $3x + 4(2x-1) = 25 \\Rightarrow 11x = 29 \\Rightarrow x = \\frac{29}{11}$.",
        examinerTips: [
          "Check your solution by substituting both values into both original equations.",
          "Elimination is usually quickest; substitution is useful when one equation is already solved for a variable.",
        ],
        commonMistakes: [
          "Adding equations when you should subtract (or vice versa) to eliminate the variable.",
          "Substituting back into the modified equation rather than the original.",
        ],
        recap: [
          "Solve: (a) $5x + 2y = 16$ and $3x - 2y = 0$ (b) $7x + 3y = 29$ and $2x - y = 1$.",
        ],
      },
      {
        title: "Forming Simultaneous Equations",
        body:
          "Many word problems require forming a pair of simultaneous equations from given information.\n\n" +
          "**Example:** Two adults and three children pay $\\$52$. One adult and four children pay $\\$38$. Find the cost of each.\n\n" +
          "Let adult = $a$, child = $c$:\n" +
          "$2a + 3c = 52$ ... (1)\n" +
          "$a + 4c = 38$ ... (2)\n" +
          "From (2): $a = 38 - 4c$. Substitute into (1): $2(38-4c) + 3c = 52 \\Rightarrow 76 - 8c + 3c = 52 \\Rightarrow c = 4.80$. Then $a = 38 - 19.2 = 18.80$.",
        examinerTips: [
          "Define variables clearly at the start: 'Let $x$ = price of an adult ticket'.",
          "Always state what your answer means in context (e.g., 'Adult costs $\\$18.80$').",
        ],
        commonMistakes: [
          "Setting up equations in the wrong order — read the question carefully to match each equation to the correct situation.",
        ],
        recap: [
          "A shop sells pens at $p$ cents and rulers at $r$ cents. 3 pens and 2 rulers cost 290 cents. 5 pens and 1 ruler cost 350 cents. Find $p$ and $r$.",
        ],
      },
      {
        title: "Non-Linear Simultaneous Equations",
        body:
          "When one equation is **linear** and the other is **quadratic** (or involves $x^2$, $xy$, etc.), use substitution.\n\n" +
          "**Method:** Rearrange the linear equation for one variable, substitute into the quadratic, solve the resulting quadratic.\n\n" +
          "**Example:** Solve $y = x + 1$ and $y = x^2 - 1$.\n\n" +
          "Substitute: $x + 1 = x^2 - 1$\n" +
          "$x^2 - x - 2 = 0$\n" +
          "$(x-2)(x+1) = 0$\n" +
          "$x = 2$ or $x = -1$\n\n" +
          "When $x = 2$: $y = 3$. When $x = -1$: $y = 0$.\n\n" +
          "**Solutions: $(2, 3)$ and $(-1, 0)$.**\n\n" +
          "**Geometrically:** The solutions are the coordinates of intersection between a straight line and a curve.",
        examinerTips: [
          "Always rearrange the LINEAR equation for a variable — rearranging the quadratic is harder and prone to errors.",
          "Non-linear simultaneous equations can have 0, 1, or 2 solutions — check the discriminant if needed.",
        ],
        commonMistakes: [
          "Rearranging the quadratic equation instead of the linear one before substituting.",
          "Only giving the $x$-values without finding the corresponding $y$-values.",
        ],
        recap: [
          "Solve: (a) $y = 2x + 3$ and $y = x^2 + x - 1$ (b) $x + y = 5$ and $x^2 + y^2 = 13$.",
        ],
      },
    ],
  },
  {
    number: 25,
    title: "Sequences",
    section: "2. Algebra & Sequences",
    topic: "Sequences",
    intro:
      "Sequences are ordered lists of numbers following a pattern. The Extended syllabus includes linear, quadratic, and geometric sequences, as well as the nth term rule for each.",
    subheadings: [
      {
        title: "Introduction to Sequences",
        body:
          "A **sequence** is an ordered set of numbers where each number is called a **term**.\n\n" +
          "Terms are labelled $T_1, T_2, T_3, \\dots$\n\n" +
          "**Types of sequences:**\n" +
          "- **Arithmetic (linear):** Constant difference between consecutive terms. $3, 7, 11, 15, \\dots$ (common difference $d = 4$).\n" +
          "- **Geometric:** Constant ratio between consecutive terms. $2, 6, 18, 54, \\dots$ (common ratio $r = 3$).\n" +
          "- **Quadratic:** Second differences are constant. $1, 4, 9, 16, \\dots$ (squares).\n" +
          "- **Fibonacci-type:** Each term is the sum of the two preceding terms: $1, 1, 2, 3, 5, 8, \\dots$",
        examinerTips: [
          "Always calculate first differences, then second differences — if second differences are constant and non-zero, it's quadratic.",
          "The 'rule' for a sequence can be recursive (how to get the next term) or explicit (the nth term formula).",
        ],
        commonMistakes: [
          "Assuming all sequences are arithmetic — always check whether the difference is constant.",
        ],
        recap: [
          "Find the next two terms: (a) $5, 9, 13, 17, \\dots$ (b) $3, 6, 12, 24, \\dots$ (c) $1, 3, 6, 10, 15, \\dots$.",
        ],
      },
      {
        title: "nth Terms of Linear Sequences",
        body:
          "The **nth term** (general term) of a sequence is a formula that gives any term in the sequence.\n\n" +
          "For an **arithmetic sequence** with first term $a$ and common difference $d$:\n" +
          "$$T_n = a + (n-1)d$$\n\n" +
          "Or equivalently: $T_n = dn + (a - d)$\n\n" +
          "**Method to find nth term from terms:**\n" +
          "1. Find the common difference $d$ (coefficient of $n$).\n" +
          "2. Find the value when $n = 0$ (the constant): subtract $d$ from the first term.\n\n" +
          "Example: $7, 11, 15, 19, \\dots$\n" +
          "$d = 4$, so $T_n = 4n + c$. When $n = 1$: $7 = 4 + c \\Rightarrow c = 3$.\n" +
          "$T_n = 4n + 3$.\n" +
          "Check: $T_5 = 4(5) + 3 = 23$. ✓\n\n" +
          "**Using nth term:** Is $101$ in the sequence? $4n + 3 = 101 \\Rightarrow n = 24.5$ — not an integer, so 101 is NOT in the sequence.",
        examinerTips: [
          "Always verify the nth term formula against at least two terms from the sequence.",
          "If asked whether a value is in the sequence, solve for $n$ and check whether $n$ is a positive integer.",
        ],
        commonMistakes: [
          "Writing $T_n = 4n + 7$ for a sequence starting $7, 11, 15\\dots$ — the constant should be 3, not 7.",
        ],
        recap: [
          "Find the nth term of: (a) $6, 11, 16, 21, \\dots$ (b) $20, 17, 14, 11, \\dots$.",
          "Is $200$ a term in the sequence $5, 8, 11, \\dots$? Show your working.",
        ],
      },
      {
        title: "Quadratic & Geometric Sequences",
        body:
          "**Quadratic sequences** have constant **second differences**.\n\n" +
          "The nth term has the form $T_n = an^2 + bn + c$.\n\n" +
          "**Method:**\n" +
          "1. Find first differences.\n" +
          "2. Find second differences — the constant second difference = $2a$, so $a = \\frac{\\text{2nd diff}}{2}$.\n" +
          "3. Subtract $an^2$ from the sequence to get a linear sequence, find its nth term.\n\n" +
          "**Example:** $3, 8, 15, 24, 35, \\dots$\n" +
          "1st differences: $5, 7, 9, 11, \\dots$ | 2nd differences: $2, 2, 2, \\dots$\n" +
          "$a = 1$. Subtract $n^2$: $2, 4, 6, 8, \\dots = 2n$. So $T_n = n^2 + 2n$.\n" +
          "Check: $T_3 = 9 + 6 = 15$ ✓\n\n" +
          "**Geometric sequences:**\n" +
          "If ratio $r$: $T_n = ar^{n-1}$ where $a = T_1$.\n" +
          "Sequence $5, 10, 20, 40, \\dots$: $r = 2$, so $T_n = 5 \\times 2^{n-1}$.",
        examinerTips: [
          "For geometric sequences, find the common ratio by dividing any term by the preceding term.",
          "In quadratic sequences, the second difference is always twice the coefficient of $n^2$.",
        ],
        commonMistakes: [
          "Using first differences for quadratic sequences — these vary; it's the second differences that are constant.",
          "Forgetting the $-1$ in $ar^{n-1}$: the first term ($n=1$) should give $a$, so using $ar^n$ gives $ar$ instead.",
        ],
        recap: [
          "Find the nth term: (a) $2, 7, 14, 23, 34, \\dots$ (b) $4, 12, 36, 108, \\dots$ (c) $1, 5, 11, 19, 29, \\dots$.",
        ],
      },
    ],
  },
];
