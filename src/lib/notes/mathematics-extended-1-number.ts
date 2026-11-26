import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 1: Number
 * Chapters 1–17 (includes all Core content + Extended-only topics)
 */
export const MATHEMATICS_EXTENDED_NUMBER: Chapter[] = [
  {
    number: 1,
    title: "Types of Numbers",
    section: "1. Number",
    topic: "Number Toolkit",
    intro:
      "Understanding number classification is the foundation of Cambridge IGCSE Mathematics Extended. This chapter covers all major number sets, their properties, and how to identify them.",
    subheadings: [
      {
        title: "Types of Number",
        body:
          "Numbers are classified into distinct mathematical sets:\n\n" +
          "- **Natural Numbers ($\\mathbb{N}$):** Counting numbers $1, 2, 3, 4, \\dots$ (some definitions include $0$).\n" +
          "- **Integers ($\\mathbb{Z}$):** Whole numbers including negatives and zero ($\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots$).\n" +
          "- **Rational Numbers ($\\mathbb{Q}$):** Any number expressible as $\\frac{a}{b}$ where $a, b \\in \\mathbb{Z}$ and $b \\neq 0$. Includes terminating decimals ($0.75$) and recurring decimals ($0.\\dot{3}$).\n" +
          "- **Irrational Numbers:** Non-terminating, non-recurring decimals that cannot be written as fractions, e.g. $\\pi$, $\\sqrt{2}$, $\\sqrt{3}$.\n" +
          "- **Real Numbers ($\\mathbb{R}$):** All rational and irrational numbers combined.",
        groups: [
          {
            subTitle: "Important Number Categories",
            bullets: [
              "**Even numbers:** Divisible by $2$ (integers of the form $2k$).",
              "**Odd numbers:** Not divisible by $2$ (integers of the form $2k+1$).",
              "**Zero:** An even integer; neither positive nor negative.",
              "**Prime numbers:** Integers > 1 with exactly two factors: 1 and themselves. First ten primes: $2, 3, 5, 7, 11, 13, 17, 19, 23, 29$.",
              "**Composite numbers:** Integers > 1 that are not prime (have more than two factors).",
            ],
          },
        ],
        examinerTips: [
          "Be precise about whether $0$ is included when asked for positive integers — positive integers start at $1$.",
          "Remember recurring decimals like $0.\\overline{6} = \\frac{2}{3}$ are rational, not irrational.",
          "$1$ is neither prime nor composite — it has only one factor.",
        ],
        commonMistakes: [
          "Assuming all irrational numbers are square roots — $\\pi$ and $e$ are also irrational.",
          "Thinking $1$ is prime.",
          "Forgetting negative integers are still integers.",
        ],
        recap: [
          "From the list $-5, 0, \\sqrt{7}, 2.5, 11, \\pi$, identify: integers, rationals, irrationals.",
          "Is $\\sqrt{9}$ rational or irrational? Explain.",
        ],
      },
      {
        title: "Irrational Numbers",
        body:
          "An **irrational number** cannot be expressed as a fraction $\\frac{a}{b}$ where $a$ and $b$ are integers and $b \\neq 0$.\n\n" +
          "Their decimal expansions are **non-terminating** and **non-recurring**.\n\n" +
          "Common irrational numbers at IGCSE level:\n" +
          "- $\\sqrt{2} \\approx 1.41421356\\dots$\n" +
          "- $\\sqrt{3} \\approx 1.73205080\\dots$\n" +
          "- $\\pi \\approx 3.14159265\\dots$\n" +
          "- $\\sqrt{5}, \\sqrt{6}, \\sqrt{7}$ etc. — square roots of non-perfect-square integers are always irrational.\n\n" +
          "**Surds** (covered in Chapter 17) are a special form of irrational number involving square or cube roots that cannot be simplified to a rational number.",
        examinerTips: [
          "If asked whether $\\sqrt{n}$ is rational, check if $n$ is a perfect square. $\\sqrt{25} = 5$ is rational; $\\sqrt{26}$ is irrational.",
          "$\\frac{22}{7}$ is a rational approximation of $\\pi$ — $\\pi$ itself is irrational.",
        ],
        commonMistakes: [
          "Writing $\\pi = \\frac{22}{7}$ — this is an approximation only.",
          "Thinking $\\sqrt{4} = 2$ is irrational — it simplifies to an integer.",
        ],
        recap: [
          "State whether each is rational or irrational: $\\sqrt{49}$, $\\sqrt{50}$, $\\frac{3}{7}$, $0.\\overline{142857}$, $\\pi$.",
        ],
      },
      {
        title: "Negative Numbers",
        body:
          "**Negative numbers** are real numbers less than zero, sitting to the left of zero on the number line.\n\n" +
          "**Rules for operations with negative numbers:**\n\n" +
          "- Adding a negative: $a + (-b) = a - b$\n" +
          "- Subtracting a negative: $a - (-b) = a + b$\n" +
          "- Multiplying/dividing: same signs give positive; different signs give negative:\n" +
          "  - $(-3) \\times (-4) = +12$\n" +
          "  - $(-3) \\times 4 = -12$\n" +
          "  - $(-12) \\div (-3) = +4$\n" +
          "  - $(-12) \\div 3 = -4$",
        examinerTips: [
          "Be careful with two negatives in a row: $5 - (-3) = 5 + 3 = 8$.",
          "When squaring a negative: $(-3)^2 = 9$ (positive), but $-3^2 = -9$ (the square applies only to 3).",
        ],
        commonMistakes: [
          "Writing $(-2)^3 = 8$ — the cube of a negative is negative: $(-2)^3 = -8$.",
          "Confusion between $-(-x)$ and $-x$: $-(-x) = x$.",
        ],
        recap: [
          "Calculate: $(-7) + 4$, $(-3) - (-8)$, $(-5) \\times (-6)$, $(-20) \\div 4$.",
        ],
      },
      {
        title: "Mathematical Symbols",
        body:
          "Fluency with mathematical symbols is essential at Extended level.\n\n" +
          "| Symbol | Meaning | Example |\n" +
          "|--------|---------|----------|\n" +
          "| $=$ | equals | $3 + 2 = 5$ |\n" +
          "| $\\neq$ | not equal to | $3 \\neq 4$ |\n" +
          "| $<$ | less than | $3 < 7$ |\n" +
          "| $>$ | greater than | $7 > 3$ |\n" +
          "| $\\leq$ | less than or equal to | $x \\leq 5$ |\n" +
          "| $\\geq$ | greater than or equal to | $x \\geq 2$ |\n" +
          "| $\\approx$ | approximately equal to | $\\pi \\approx 3.14$ |\n" +
          "| $\\in$ | is an element of | $3 \\in \\mathbb{Z}$ |\n" +
          "| $\\notin$ | is not an element of | $\\sqrt{2} \\notin \\mathbb{Q}$ |",
        examinerTips: [
          "Use $\\approx$ when rounding is applied; use $=$ only for exact values.",
          "In inequality questions, check whether the boundary value is included ($\\leq$, $\\geq$) or excluded ($<$, $>$).",
        ],
        commonMistakes: [
          "Writing $=$ when the answer is rounded — always use $\\approx$ for approximate answers.",
          "Confusing $<$ and $>$ direction.",
        ],
        recap: [
          "Write each using correct symbols: (a) $x$ is at least $4$ (b) $y$ is strictly less than $-1$ (c) $5$ is an element of the integers.",
        ],
      },
      {
        title: "Order of Operations (BIDMAS)",
        body:
          "**BIDMAS** (also called BODMAS or PEMDAS) gives the correct order for evaluating mathematical expressions:\n\n" +
          "1. **B**rackets (parentheses first)\n" +
          "2. **I**ndices (powers and roots)\n" +
          "3. **D**ivision\n" +
          "4. **M**ultiplication (D and M: left to right)\n" +
          "5. **A**ddition\n" +
          "6. **S**ubtraction (A and S: left to right)\n\n" +
          "**Example:** $3 + 4 \\times 2^2 - (1 + 5)$\n" +
          "$= 3 + 4 \\times 4 - 6$\n" +
          "$= 3 + 16 - 6$\n" +
          "$= 13$",
        examinerTips: [
          "Division and multiplication have equal priority — work left to right.",
          "Addition and subtraction have equal priority — work left to right.",
          "Always evaluate inside brackets first, even nested brackets (innermost first).",
        ],
        commonMistakes: [
          "Calculating $3 \\times 4 + 2 = 3 \\times 6 = 18$ instead of $12 + 2 = 14$.",
          "Applying indices before brackets: always deal with brackets first.",
        ],
        recap: [
          "Evaluate: (a) $2 + 3 \\times 4$ (b) $(2 + 3) \\times 4$ (c) $6 \\div 2 \\times 3$ (d) $5^2 - 3 \\times (4 - 1)$.",
        ],
      },
      {
        title: "Addition & Subtraction",
        body:
          "**Column addition and subtraction** are essential for multi-digit integers and decimals.\n\n" +
          "**Key principle:** Align decimal points before adding or subtracting decimals.\n\n" +
          "**Example:** $12.4 + 7.65$\n" +
          "```\n" +
          " 12.40\n" +
          "+  7.65\n" +
          "------\n" +
          " 20.05\n" +
          "```\n\n" +
          "For subtraction with negatives: $3 - (-4.5) = 3 + 4.5 = 7.5$.",
        examinerTips: [
          "Always align decimal points vertically before adding or subtracting.",
          "Add trailing zeros to make columns equal in length to avoid errors.",
        ],
        commonMistakes: [
          "Misaligning decimal points when digits are of different lengths.",
          "Forgetting to carry when column sums exceed 9.",
        ],
        recap: [
          "Calculate: $14.7 + 5.83$, $20.3 - 8.75$, $-6 + 15 - (-4)$.",
        ],
      },
      {
        title: "Multiplication & Division",
        body:
          "**Long multiplication** and **long division** are foundational skills.\n\n" +
          "**Multiplication of decimals:** Count the total number of decimal places in both numbers; the product has that many decimal places.\n" +
          "Example: $2.3 \\times 4.1 = 9.43$ (two decimal places total).\n\n" +
          "**Division by a decimal:** Multiply both dividend and divisor by a power of 10 to make the divisor an integer.\n" +
          "Example: $7.2 \\div 0.4 = 72 \\div 4 = 18$.",
        examinerTips: [
          "When multiplying by $10$, $100$, $1000$: move the decimal point right by 1, 2, 3 places respectively.",
          "When dividing by $10$, $100$, $1000$: move the decimal point left.",
        ],
        commonMistakes: [
          "Miscounting decimal places when multiplying decimals.",
          "Dividing by $0.1$ as though it's dividing by $1$ — dividing by $0.1$ is the same as multiplying by $10$.",
        ],
        recap: [
          "Calculate: $3.6 \\times 2.5$, $8.4 \\div 0.7$, $240 \\div 0.06$.",
        ],
      },
      {
        title: "Operations with Decimals",
        body:
          "**Terminating decimals** have a finite number of digits after the decimal point, e.g. $0.75$, $0.3125$.\n\n" +
          "**Recurring decimals** have a digit or block of digits that repeats infinitely, e.g. $0.\\dot{3} = 0.333\\dots$, $0.\\dot{1}\\dot{4} = 0.141414\\dots$\n\n" +
          "**Converting fractions to decimals:** Divide the numerator by the denominator.\n" +
          "$\\frac{3}{8} = 3 \\div 8 = 0.375$ (terminating)\n" +
          "$\\frac{1}{3} = 0.\\dot{3}$ (recurring)\n\n" +
          "**When to use a calculator:** For complex decimal chains, always show the intermediate step in your working.",
        examinerTips: [
          "Dot notation for recurring decimals: $0.\\dot{1}\\dot{6} = 0.1616\\dots$ (dots above first and last digit of repeating block).",
        ],
        commonMistakes: [
          "Rounding recurring decimals without being asked — write the exact form.",
          "Thinking all fractions terminate — $\\frac{1}{7} = 0.\\overline{142857}$ is recurring.",
        ],
        recap: [
          "Convert to decimals: $\\frac{5}{8}$, $\\frac{2}{9}$, $\\frac{7}{11}$. State which terminate and which recur.",
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Set Notation & Venn Diagrams",
    section: "1. Number",
    topic: "Set Notation & Venn Diagrams",
    intro:
      "Set theory underpins logic and probability at Extended level. This chapter introduces set notation, Venn diagrams, and operations on sets.",
    subheadings: [
      {
        title: "Set Notation & Venn Diagrams",
        body:
          "A **set** is a well-defined collection of objects called **elements** or **members**.\n\n" +
          "**Key set notation:**\n" +
          "- $\\mathscr{E}$ (or $U$) — Universal set (all elements under consideration)\n" +
          "- $A = \\{1, 2, 3\\}$ — set $A$ with listed elements\n" +
          "- $n(A)$ — number of elements in set $A$\n" +
          "- $\\in$ — is an element of: $3 \\in A$\n" +
          "- $\\notin$ — is not an element of: $5 \\notin A$\n" +
          "- $\\emptyset$ or $\\{\\}$ — empty set (no elements)\n" +
          "- $A \\subseteq B$ — $A$ is a subset of $B$ (every element of $A$ is in $B$)\n" +
          "- $A \\subset B$ — $A$ is a proper subset of $B$ ($A \\subseteq B$ and $A \\neq B$)\n\n" +
          "**Set Operations:**\n" +
          "- $A \\cup B$ — **Union**: elements in $A$ or $B$ or both\n" +
          "- $A \\cap B$ — **Intersection**: elements in both $A$ and $B$\n" +
          "- $A'$ — **Complement**: elements in $\\mathscr{E}$ but not in $A$\n\n" +
          "**Venn Diagrams** represent sets as overlapping circles inside a rectangle (the universal set). The overlapping region represents $A \\cap B$.",
        groups: [
          {
            subTitle: "Reading Venn Diagrams",
            bullets: [
              "Numbers inside $A$ only: in $A$ but not $B$.",
              "Numbers in the overlap: in $A \\cap B$ (both sets).",
              "Numbers inside $B$ only: in $B$ but not $A$.",
              "Numbers outside both circles but inside rectangle: in $\\mathscr{E}$ but neither $A$ nor $B$ — these are in $(A \\cup B)'$.",
            ],
          },
        ],
        examinerTips: [
          "Always fill in the intersection $A \\cap B$ first, then work outwards when constructing Venn diagrams.",
          "$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$ — the inclusion-exclusion principle.",
          "If asked to shade $A' \\cap B$, shade the region in $B$ but outside $A$.",
        ],
        commonMistakes: [
          "Placing elements in the wrong region — always place intersection elements first.",
          "Confusing $A \\cup B$ (or) with $A \\cap B$ (and).",
          "Forgetting elements that belong to neither set go in the rectangle outside all circles.",
        ],
        recap: [
          "$\\mathscr{E} = \\{1,2,3,4,5,6,7,8,9,10\\}$, $A = \\{2,4,6,8\\}$, $B = \\{4,6,9\\}$. Find: $A \\cup B$, $A \\cap B$, $A'$, $n(B')$.",
          "Draw a Venn diagram to represent the information above.",
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Prime Factors, HCF & LCM",
    section: "1. Number",
    topic: "Prime Factors, HCF & LCM",
    intro:
      "Every integer can be broken down into prime building blocks. This chapter covers prime factor decomposition and its applications in finding HCF and LCM.",
    subheadings: [
      {
        title: "Prime Factor Decomposition",
        body:
          "Every integer greater than 1 can be written as a **unique product of prime factors** (Fundamental Theorem of Arithmetic).\n\n" +
          "**Method — Factor Trees or Division:**\n\n" +
          "Example: Express $360$ as a product of prime factors.\n" +
          "$360 = 2 \\times 180 = 2 \\times 2 \\times 90 = 2 \\times 2 \\times 2 \\times 45 = 2 \\times 2 \\times 2 \\times 3 \\times 15 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5$\n\n" +
          "Written in index form: $360 = 2^3 \\times 3^2 \\times 5$\n\n" +
          "**Using the division ladder:** Divide repeatedly by the smallest prime that divides exactly, working downwards until you reach 1.",
        examinerTips: [
          "Always write the final answer in index (power) notation: $2^3 \\times 3^2 \\times 5$, not $2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 5$.",
          "Circle prime numbers at each branch of the factor tree as you go.",
        ],
        commonMistakes: [
          "Using composite numbers like $6$ or $4$ as factor tree branches without fully factorising.",
          "Forgetting to include $1$ as a terminator in division ladder (stop at quotient 1).",
        ],
        recap: [
          "Write as a product of prime factors in index form: (a) $252$ (b) $500$ (c) $1080$.",
        ],
      },
      {
        title: "Uses of Prime Factor Decomposition",
        body:
          "Prime factor decomposition has two major applications at IGCSE: finding HCF and LCM.\n\n" +
          "**Highest Common Factor (HCF):** The largest number that divides exactly into two or more numbers.\n" +
          "Method: Take the product of **shared prime factors using the lowest power**.\n\n" +
          "**Lowest Common Multiple (LCM):** The smallest number that is a multiple of two or more numbers.\n" +
          "Method: Take the product of **all prime factors using the highest power**.\n\n" +
          "**Example:** Find HCF and LCM of $72$ and $90$.\n" +
          "$72 = 2^3 \\times 3^2$\n" +
          "$90 = 2 \\times 3^2 \\times 5$\n\n" +
          "HCF: $2^1 \\times 3^2 = 2 \\times 9 = 18$\n" +
          "LCM: $2^3 \\times 3^2 \\times 5 = 8 \\times 9 \\times 5 = 360$",
        examinerTips: [
          "HCF: pick the **lower** power of shared primes.",
          "LCM: pick the **higher** power of all primes appearing in either number.",
          "A useful check: $\\text{HCF} \\times \\text{LCM} = $ product of the two numbers (for two-number problems).",
        ],
        commonMistakes: [
          "Swapping HCF and LCM methods (using highest powers for HCF).",
          "Omitting primes that only appear in one number when finding LCM.",
        ],
        recap: [
          "Find the HCF and LCM of: (a) $48$ and $60$ (b) $126$ and $180$ (c) $280$ and $392$.",
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Powers, Roots & Standard Form",
    section: "1. Number",
    topic: "Powers, Roots & Standard Form",
    intro:
      "Index notation is a compact way of expressing repeated multiplication. This chapter covers powers, roots, laws of indices, and standard form — a system for writing very large or very small numbers.",
    subheadings: [
      {
        title: "Powers & Roots",
        body:
          "**Powers (Indices):** $a^n$ means $a$ multiplied by itself $n$ times.\n" +
          "$2^5 = 2 \\times 2 \\times 2 \\times 2 \\times 2 = 32$\n\n" +
          "**Square roots:** $\\sqrt{a}$ is the positive value whose square gives $a$. $\\sqrt{49} = 7$.\n" +
          "**Cube roots:** $\\sqrt[3]{a}$ gives the value whose cube gives $a$. $\\sqrt[3]{-8} = -2$.\n\n" +
          "**Special index values:**\n" +
          "- $a^0 = 1$ for any $a \\neq 0$\n" +
          "- $a^1 = a$\n" +
          "- $a^{-n} = \\frac{1}{a^n}$ (negative index = reciprocal)\n" +
          "- $a^{\\frac{1}{n}} = \\sqrt[n]{a}$ (fractional index = $n$th root)\n" +
          "- $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$",
        examinerTips: [
          "For $a^{\\frac{m}{n}}$: the denominator is the root, the numerator is the power. Root first, then power (easier with smaller numbers).",
          "$(-2)^4 = 16$ (positive) but $(-2)^3 = -8$ (negative) — odd powers preserve sign.",
        ],
        commonMistakes: [
          "Writing $a^0 = 0$ instead of $a^0 = 1$.",
          "Thinking $4^{\\frac{1}{2}} = 2^{\\frac{1}{2}}$ — $4^{\\frac{1}{2}} = \\sqrt{4} = 2$, correct.",
          "Applying $a^{-n} = -a^n$ instead of $a^{-n} = \\frac{1}{a^n}$.",
        ],
        recap: [
          "Evaluate: (a) $3^{-2}$ (b) $16^{\\frac{3}{4}}$ (c) $(-8)^{\\frac{1}{3}}$ (d) $\\left(\\frac{4}{9}\\right)^{\\frac{1}{2}}$.",
        ],
      },
      {
        title: "Laws of Indices",
        body:
          "The **laws of indices** apply to expressions with the same base:\n\n" +
          "| Law | Rule | Example |\n" +
          "|-----|------|---------|\n" +
          "| Multiplication | $a^m \\times a^n = a^{m+n}$ | $x^3 \\times x^4 = x^7$ |\n" +
          "| Division | $a^m \\div a^n = a^{m-n}$ | $y^6 \\div y^2 = y^4$ |\n" +
          "| Power of a power | $(a^m)^n = a^{mn}$ | $(x^2)^3 = x^6$ |\n" +
          "| Power of a product | $(ab)^n = a^n b^n$ | $(2x)^3 = 8x^3$ |\n" +
          "| Power of a fraction | $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$ | $\\left(\\frac{x}{2}\\right)^2 = \\frac{x^2}{4}$ |\n\n" +
          "These laws apply for all values of $m$ and $n$ including fractions and negatives.",
        examinerTips: [
          "Only combine index rules for the **same base** — $x^3 \\times y^3 \\neq (xy)^9$.",
          "When simplifying algebraic index expressions, deal with numeric coefficients and variable parts separately.",
        ],
        commonMistakes: [
          "$a^m \\times a^n = a^{mn}$ — WRONG; it should be $a^{m+n}$.",
          "$(a + b)^2 \\neq a^2 + b^2$ — the power of a sum ≠ sum of powers.",
        ],
        recap: [
          "Simplify: (a) $x^5 \\times x^{-2}$ (b) $\\frac{3a^4}{6a^7}$ (c) $(2x^3)^4$ (d) $\\left(\\frac{y^3}{y^{-1}}\\right)^2$.",
        ],
      },
      {
        title: "Converting to & from Standard Form",
        body:
          "**Standard form (scientific notation)** expresses any number as:\n$$A \\times 10^n$$\nwhere $1 \\leq A < 10$ and $n$ is an integer.\n\n" +
          "**Large numbers:** Move decimal left, $n$ is positive.\n" +
          "$356000 = 3.56 \\times 10^5$\n\n" +
          "**Small numbers:** Move decimal right, $n$ is negative.\n" +
          "$0.00047 = 4.7 \\times 10^{-4}$\n\n" +
          "**Converting from standard form back:**\n" +
          "$6.2 \\times 10^3 = 6200$\n" +
          "$1.5 \\times 10^{-2} = 0.015$",
        examinerTips: [
          "Check: the number $A$ must satisfy $1 \\leq A < 10$. If $A = 23.4$, your standard form is wrong.",
          "Positive $n$ → large number; Negative $n$ → small number (between 0 and 1).",
        ],
        commonMistakes: [
          "Writing $23 \\times 10^4$ — the first number must be between 1 and 10 (this should be $2.3 \\times 10^5$).",
          "Moving the decimal the wrong way for negative indices.",
        ],
        recap: [
          "Write in standard form: (a) $450000000$ (b) $0.0000072$ (c) $63.4 \\times 10^3$.",
          "Convert to ordinary numbers: (a) $5.4 \\times 10^6$ (b) $8.1 \\times 10^{-3}$.",
        ],
      },
      {
        title: "Operations with Standard Form",
        body:
          "**Multiplying in standard form:** Multiply the $A$ values and add the powers of 10.\n" +
          "$(3 \\times 10^4) \\times (2 \\times 10^3) = 6 \\times 10^7$\n\n" +
          "**Dividing in standard form:** Divide the $A$ values and subtract the powers.\n" +
          "$(8.4 \\times 10^6) \\div (2 \\times 10^2) = 4.2 \\times 10^4$\n\n" +
          "**Adding/Subtracting in standard form:** Convert to the same power of 10, then add/subtract the $A$ values.\n" +
          "$3 \\times 10^5 + 4 \\times 10^4 = 3 \\times 10^5 + 0.4 \\times 10^5 = 3.4 \\times 10^5$\n\n" +
          "**After calculations:** Always check that the answer is still in correct standard form ($1 \\leq A < 10$). Adjust if needed.",
        examinerTips: [
          "If multiplying gives $A \\geq 10$ or $A < 1$, adjust: $12 \\times 10^3 = 1.2 \\times 10^4$.",
          "Without a calculator: show all working with separate $A$ and $10^n$ parts.",
        ],
        commonMistakes: [
          "Adding exponents when adding numbers in standard form — only add exponents for multiplication.",
          "Not re-checking that result is in proper standard form after calculation.",
        ],
        recap: [
          "Without a calculator: (a) $(4 \\times 10^3) \\times (5 \\times 10^4)$ (b) $(9 \\times 10^7) \\div (3 \\times 10^3)$ (c) $5 \\times 10^4 + 3 \\times 10^3$.",
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Introduction to Fractions",
    section: "1. Number",
    topic: "Fractions Toolkit",
    intro:
      "Fractions represent parts of a whole. This chapter builds fluency with equivalent fractions, simplification, mixed numbers, and comparisons.",
    subheadings: [
      {
        title: "Basic Fractions",
        body:
          "A **fraction** $\\frac{a}{b}$ has:\n" +
          "- **Numerator** ($a$): the number of parts selected\n" +
          "- **Denominator** ($b$): the total number of equal parts\n\n" +
          "**Equivalent fractions:** Multiply or divide numerator and denominator by the same non-zero value.\n" +
          "$\\frac{2}{3} = \\frac{4}{6} = \\frac{8}{12}$\n\n" +
          "**Simplifying fractions (cancelling):** Divide both by the HCF.\n" +
          "$\\frac{24}{36} = \\frac{24 \\div 12}{36 \\div 12} = \\frac{2}{3}$\n\n" +
          "**Fractions of amounts:** $\\frac{3}{8}$ of $64 = \\frac{3}{8} \\times 64 = 24$.",
        examinerTips: [
          "Always simplify fractions fully in your final answer unless asked otherwise.",
          "To compare fractions, convert to a common denominator or convert to decimals.",
        ],
        commonMistakes: [
          "Simplifying only partially: $\\frac{12}{18} = \\frac{6}{9}$ — not fully simplified; correct answer is $\\frac{2}{3}$.",
          "Adding denominators: $\\frac{1}{3} + \\frac{1}{3} = \\frac{2}{6}$ — WRONG; it's $\\frac{2}{3}$.",
        ],
        recap: [
          "Simplify fully: (a) $\\frac{45}{60}$ (b) $\\frac{36}{84}$. Find $\\frac{5}{6}$ of $\\$78$.",
        ],
      },
      {
        title: "Mixed Numbers & Improper Fractions",
        body:
          "**Improper fraction:** Numerator ≥ denominator, e.g. $\\frac{11}{4}$.\n" +
          "**Mixed number:** An integer plus a proper fraction, e.g. $2\\frac{3}{4}$.\n\n" +
          "**Converting mixed number to improper fraction:**\n" +
          "$3\\frac{2}{5} = \\frac{3 \\times 5 + 2}{5} = \\frac{17}{5}$\n\n" +
          "**Converting improper fraction to mixed number:**\n" +
          "$\\frac{23}{6} = 3$ remainder $5 = 3\\frac{5}{6}$\n\n" +
          "For calculations with mixed numbers, convert to improper fractions first.",
        examinerTips: [
          "Always convert mixed numbers to improper fractions before multiplying or dividing.",
          "When adding mixed numbers, you can add whole number and fractional parts separately.",
        ],
        commonMistakes: [
          "Adding the integers and fractions incorrectly when carrying over — $1\\frac{3}{4} + 1\\frac{3}{4} = 2\\frac{6}{4} = 3\\frac{1}{2}$.",
        ],
        recap: [
          "Convert to improper fractions: $4\\frac{3}{7}$, $2\\frac{5}{8}$. Convert to mixed numbers: $\\frac{29}{5}$, $\\frac{47}{9}$.",
        ],
      },
      {
        title: "Adding & Subtracting Fractions",
        body:
          "To add or subtract fractions, they must have the **same denominator** (the LCM of the denominators).\n\n" +
          "**Example:** $\\frac{3}{4} + \\frac{5}{6}$\n" +
          "LCM of $4$ and $6$ is $12$:\n" +
          "$\\frac{9}{12} + \\frac{10}{12} = \\frac{19}{12} = 1\\frac{7}{12}$\n\n" +
          "**Example:** $3\\frac{1}{2} - 1\\frac{3}{4}$\n" +
          "$= \\frac{7}{2} - \\frac{7}{4} = \\frac{14}{4} - \\frac{7}{4} = \\frac{7}{4} = 1\\frac{3}{4}$",
        examinerTips: [
          "Find the LCM of denominators first — using the HCF method gives the smallest common denominator.",
          "With mixed numbers, convert to improper fractions before calculating.",
        ],
        commonMistakes: [
          "Adding the denominators: $\\frac{1}{4} + \\frac{1}{5} \\neq \\frac{2}{9}$.",
          "Using a common denominator that isn't the LCM — fractions become harder to simplify later.",
        ],
        recap: [
          "Calculate: (a) $\\frac{2}{5} + \\frac{3}{4}$ (b) $\\frac{7}{8} - \\frac{2}{3}$ (c) $2\\frac{1}{3} + 1\\frac{5}{6}$.",
        ],
      },
      {
        title: "Multiplying & Dividing Fractions",
        body:
          "**Multiplying fractions:** Multiply numerators together and denominators together.\n" +
          "$\\frac{3}{5} \\times \\frac{4}{7} = \\frac{12}{35}$\n\n" +
          "Simplify by **cross-cancelling** before multiplying where possible:\n" +
          "$\\frac{3}{8} \\times \\frac{4}{9} = \\frac{3}{8} \\times \\frac{4}{9} = \\frac{1}{6}$ (cancel 3s and 4s)\n\n" +
          "**Dividing fractions:** Multiply by the **reciprocal** (flip the second fraction).\n" +
          "$\\frac{3}{5} \\div \\frac{2}{7} = \\frac{3}{5} \\times \\frac{7}{2} = \\frac{21}{10} = 2\\frac{1}{10}$\n\n" +
          "For mixed numbers: convert to improper fractions first, then multiply/divide.",
        examinerTips: [
          "\"KCF\" — Keep, Change, Flip: keep the first fraction, change $\\div$ to $\\times$, flip the second fraction.",
          "Cross-cancel before multiplying to keep numbers small.",
        ],
        commonMistakes: [
          "Flipping the first fraction instead of the second when dividing.",
          "Not converting mixed numbers to improper fractions before multiplying.",
        ],
        recap: [
          "Calculate: (a) $\\frac{5}{9} \\times \\frac{3}{10}$ (b) $\\frac{7}{8} \\div \\frac{14}{16}$ (c) $2\\frac{1}{2} \\times 1\\frac{3}{5}$.",
        ],
      },
    ],
  },
  {
    number: 6,
    title: "Percentages",
    section: "1. Number",
    topic: "Percentages Toolkit",
    intro:
      "Percentages express parts per hundred and are used widely in real-world applications from finance to statistics. This chapter covers percentage conversions, increases and decreases, and the extended topic of reverse percentages.",
    subheadings: [
      {
        title: "Basic Percentages",
        body:
          "**Percentage:** A fraction expressed as parts per hundred. The symbol is $\\%$.\n\n" +
          "$50\\% = \\frac{50}{100} = \\frac{1}{2} = 0.5$\n\n" +
          "**Finding a percentage of an amount:**\n" +
          "$35\\%$ of $\\$240 = 0.35 \\times 240 = \\$84$\n\n" +
          "**Expressing one quantity as a percentage of another:**\n" +
          "$\\frac{27}{45} \\times 100 = 60\\%$\n\n" +
          "**Percentage change:**\n" +
          "$$\\text{Percentage change} = \\frac{\\text{change}}{\\text{original}} \\times 100$$",
        examinerTips: [
          "Always divide by the **original** value in percentage change problems, not the new value.",
          "Using the multiplier method (e.g. $\\times 1.15$ for $15\\%$ increase) is quicker than finding $15\\%$ then adding.",
        ],
        commonMistakes: [
          "Dividing by the wrong quantity in percentage change calculations.",
          "Forgetting to multiply by 100 to convert a decimal to a percentage.",
        ],
        recap: [
          "Find: (a) $24\\%$ of $350$ (b) express $63$ as a percentage of $180$ (c) a price increases from $\\$80$ to $\\$96$ — find the percentage increase.",
        ],
      },
      {
        title: "Percentage Increases & Decreases",
        body:
          "**Multiplier method** is the most efficient approach:\n\n" +
          "- Percentage increase by $r\\%$: multiply by $\\left(1 + \\frac{r}{100}\\right)$\n" +
          "- Percentage decrease by $r\\%$: multiply by $\\left(1 - \\frac{r}{100}\\right)$\n\n" +
          "**Examples:**\n" +
          "- Increase $\\$450$ by $12\\%$: $450 \\times 1.12 = \\$504$\n" +
          "- Decrease $\\$600$ by $8\\%$: $600 \\times 0.92 = \\$552$\n\n" +
          "**Successive percentage changes:** Multiply the multipliers together.\n" +
          "A $20\\%$ increase then a $20\\%$ decrease: $\\times 1.20 \\times 0.80 = \\times 0.96$ (a $4\\%$ decrease overall, not zero!).",
        examinerTips: [
          "Successive percentage changes are NOT additive: $+20\\%$ then $-20\\%$ does NOT return to the original value.",
          "Show the multiplier clearly in your working for method marks.",
        ],
        commonMistakes: [
          "Adding percentage changes: assuming $+10\\%$ then $+10\\%$ = $+20\\%$ overall — it's actually $+21\\%$.",
          "Using the original rather than the updated value for each successive change.",
        ],
        recap: [
          "A car costs $\\$12500$. Find the cost after: (a) $15\\%$ VAT added (b) $20\\%$ discount applied to the VAT-inclusive price.",
        ],
      },
      {
        title: "Reverse Percentages",
        body:
          "**Reverse percentages** (also called working backwards) find the **original** value before a percentage change.\n\n" +
          "**Method:** Identify the multiplier used, then divide by it.\n\n" +
          "If a price **after** a $25\\%$ increase is $\\$375$:\n" +
          "Multiplier used: $\\times 1.25$\n" +
          "Original price: $\\$375 \\div 1.25 = \\$300$\n\n" +
          "If a price **after** a $30\\%$ decrease is $\\$140$:\n" +
          "Multiplier used: $\\times 0.70$\n" +
          "Original price: $\\$140 \\div 0.70 = \\$200$\n\n" +
          "**Unitary method alternative:** Find $1\\%$ of the original, then find $100\\%$.\n" +
          "$70\\%$ of original $= \\$140 \\Rightarrow 1\\% = \\$2 \\Rightarrow 100\\% = \\$200$.",
        examinerTips: [
          "Never find a percentage of the **given** value and add/subtract it — that gives the wrong answer. Divide by the multiplier.",
          "Check: does your original value give the stated result when the percentage is applied?",
        ],
        commonMistakes: [
          "Finding $25\\%$ of $\\$375 = \\$93.75$ then subtracting to get $\\$281.25$ — this is wrong. The original is $\\$300$.",
          "Confusing which direction the change went (increase or decrease).",
        ],
        recap: [
          "A jacket costs $\\$78$ after a $35\\%$ reduction. Find the original price.",
          "After a $12\\%$ pay rise, a salary is $\\$33600$. Find the original salary.",
        ],
      },
    ],
  },
  {
    number: 7,
    title: "Simple & Compound Interest, Growth & Decay",
    section: "1. Number",
    topic: "Simple & Compound Interest, Growth & Decay",
    intro:
      "Financial mathematics and exponential change are core real-world applications. This chapter covers simple interest, compound interest, depreciation, and exponential growth and decay models.",
    subheadings: [
      {
        title: "Simple Interest",
        body:
          "**Simple interest** is calculated on the original principal only — it does not compound.\n\n" +
          "$$I = \\frac{P \\times R \\times T}{100}$$\n\n" +
          "Where:\n" +
          "- $P$ = principal (original amount invested/borrowed)\n" +
          "- $R$ = rate of interest per year (as a percentage)\n" +
          "- $T$ = time in years\n" +
          "- $I$ = interest earned\n\n" +
          "**Total amount:** $A = P + I$\n\n" +
          "**Example:** $\\$2000$ at $5\\%$ per year for $3$ years.\n" +
          "$I = \\frac{2000 \\times 5 \\times 3}{100} = \\$300$. Total = $\\$2300$.",
        examinerTips: [
          "If time is given in months, convert to years: $6$ months $= 0.5$ years.",
          "For simple interest, the interest each year is always the same — a fixed amount.",
        ],
        commonMistakes: [
          "Using $T$ in months instead of years (unless the formula specifies months).",
          "Confusing the total amount with the interest alone — the question may ask for either.",
        ],
        recap: [
          "Find the simple interest on $\\$5000$ at $4.5\\%$ per year for $4$ years. How much is owed in total?",
        ],
      },
      {
        title: "Compound Interest",
        body:
          "**Compound interest** is calculated on the accumulated amount — interest earns interest in subsequent periods.\n\n" +
          "$$A = P \\left(1 + \\frac{r}{100}\\right)^n$$\n\n" +
          "Where:\n" +
          "- $P$ = initial principal\n" +
          "- $r$ = interest rate per period (as a percentage)\n" +
          "- $n$ = number of periods\n" +
          "- $A$ = final amount\n\n" +
          "**Example:** $\\$3000$ at $6\\%$ per year compound for $4$ years.\n" +
          "$A = 3000 \\times 1.06^4 = 3000 \\times 1.26247... = \\$3787.42$ (3 s.f.)",
        examinerTips: [
          "Never round intermediate values — carry full precision through the calculation and round only at the end.",
          "Interest per month: use $r = $ annual rate $\\div 12$ and $n = $ number of months.",
        ],
        commonMistakes: [
          "Using the simple interest formula instead of compound when the word 'compound' appears.",
          "Rounding $1.06^4$ prematurely — always use the full calculator value.",
        ],
        recap: [
          "\\$8000 is invested at $3.5\\%$ compound interest per year. Find the total value after $5$ years, giving your answer to the nearest dollar.",
        ],
      },
      {
        title: "Depreciation",
        body:
          "**Depreciation** describes the decrease in value of an asset (e.g. a car or machine) over time.\n\n" +
          "It follows the same compound interest structure but with a subtraction:\n\n" +
          "$$V = P \\left(1 - \\frac{r}{100}\\right)^n$$\n\n" +
          "Where:\n" +
          "- $P$ = initial value\n" +
          "- $r$ = rate of depreciation per year (%)\n" +
          "- $n$ = number of years\n" +
          "- $V$ = value after $n$ years\n\n" +
          "**Example:** A car worth $\\$15000$ depreciates at $12\\%$ per year. Value after 3 years:\n" +
          "$V = 15000 \\times 0.88^3 = 15000 \\times 0.68147... = \\$10222$ (to nearest dollar).",
        examinerTips: [
          "The multiplier for a $r\\%$ per year depreciation is $(1 - 0.01r)$.",
          "Depreciation approaches zero asymptotically — the item never reaches exactly zero in value with this model.",
        ],
        commonMistakes: [
          "Adding the rate instead of subtracting for depreciation.",
          "Computing simple depreciation (subtracting the same amount each year) instead of compound.",
        ],
        recap: [
          "A machine costs $\\$24000$ and depreciates at $15\\%$ per year. Find its value after $6$ years.",
        ],
      },
      {
        title: "Exponential Growth & Decay",
        body:
          "**Exponential growth** and **decay** model situations where the rate of change is proportional to the current amount.\n\n" +
          "The general formula is:\n" +
          "$$A = A_0 \\times k^t$$\n\n" +
          "Where:\n" +
          "- $A_0$ = initial value at $t = 0$\n" +
          "- $k > 1$ for growth; $0 < k < 1$ for decay\n" +
          "- $t$ = time\n" +
          "- $A$ = amount at time $t$\n\n" +
          "**Examples:**\n" +
          "- Population growth: $P = 5000 \\times 1.03^t$ (3% growth per year)\n" +
          "- Radioactive decay: $M = 200 \\times 0.5^t$ (halving every unit of time)\n\n" +
          "**Half-life** problems: Find $t$ when $A = \\frac{A_0}{2}$.",
        examinerTips: [
          "The base $k$ is the multiplier per period. For $8\\%$ annual growth, $k = 1.08$.",
          "To find the time taken for a quantity to reach a certain value, use trial and improvement or logarithms (if taught).",
        ],
        commonMistakes: [
          "Confusing growth ($k > 1$) and decay ($k < 1$) multipliers.",
          "Computing $5\\%$ decrease as multiplying by $0.5$ instead of $0.95$.",
        ],
        recap: [
          "A town has population $20000$ growing at $2.5\\%$ per year. Find the population after $10$ years.",
          "A radioactive sample of $500$g decays at $8\\%$ per year. Find the mass remaining after $20$ years.",
        ],
      },
    ],
  },
  {
    number: 8,
    title: "Surds",
    section: "1. Number",
    topic: "Surds",
    intro:
      "Surds are irrational numbers involving square roots that cannot be simplified to a rational number. Working with surds in exact form is an Extended-only skill that avoids rounding errors.",
    subheadings: [
      {
        title: "Simplifying Surds",
        body:
          "A **surd** is an expression containing a square root (or other root) that cannot be simplified to a rational number.\n\n" +
          "**Simplifying surds:** Write $\\sqrt{n}$ as $a\\sqrt{b}$ where $b$ has no perfect square factor other than 1.\n\n" +
          "**Method:** Find the largest perfect square factor of $n$.\n" +
          "$\\sqrt{72} = \\sqrt{36 \\times 2} = \\sqrt{36} \\times \\sqrt{2} = 6\\sqrt{2}$\n\n" +
          "**Collecting like surd terms:**\n" +
          "$5\\sqrt{3} + 2\\sqrt{3} = 7\\sqrt{3}$\n" +
          "$4\\sqrt{5} - \\sqrt{5} = 3\\sqrt{5}$\n\n" +
          "**Multiplying surds:**\n" +
          "$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$\n" +
          "$\\sqrt{3} \\times \\sqrt{12} = \\sqrt{36} = 6$\n\n" +
          "**Expanding brackets with surds:**\n" +
          "$\\sqrt{2}(3 + \\sqrt{2}) = 3\\sqrt{2} + 2$\n" +
          "$(1 + \\sqrt{3})(2 - \\sqrt{3}) = 2 - \\sqrt{3} + 2\\sqrt{3} - 3 = -1 + \\sqrt{3}$\n\n" +
          "**Difference of two squares with surds:**\n" +
          "$(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$ (always a rational result)",
        examinerTips: [
          "Always look for the **largest** perfect square factor to simplify in one step.",
          "$(\\sqrt{n})^2 = n$ — squaring a surd gives a rational number.",
          "Leave answers in exact surd form unless told to give a decimal approximation.",
        ],
        commonMistakes: [
          "$\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ — surds do NOT distribute over addition.",
          "Simplifying $\\sqrt{18}$ as $3\\sqrt{3}$ — correct is $3\\sqrt{2}$ (since $18 = 9 \\times 2$).",
          "Combining unlike surds: $\\sqrt{2} + \\sqrt{3} \\neq \\sqrt{5}$.",
        ],
        recap: [
          "Simplify: (a) $\\sqrt{50}$ (b) $\\sqrt{108}$ (c) $3\\sqrt{8} + 2\\sqrt{18}$ (d) $(2 + \\sqrt{5})^2$.",
        ],
      },
      {
        title: "Rationalising Denominators",
        body:
          "**Rationalising the denominator** means rewriting a fraction so that the denominator contains no surds.\n\n" +
          "**Case 1 — Denominator is a simple surd $\\sqrt{a}$:**\n" +
          "Multiply numerator and denominator by $\\sqrt{a}$:\n" +
          "$\\frac{5}{\\sqrt{3}} = \\frac{5}{\\sqrt{3}} \\times \\frac{\\sqrt{3}}{\\sqrt{3}} = \\frac{5\\sqrt{3}}{3}$\n\n" +
          "**Case 2 — Denominator is of the form $a + \\sqrt{b}$ or $a - \\sqrt{b}$:**\n" +
          "Multiply by the **conjugate** (change the sign in the middle):\n" +
          "$\\frac{3}{2 + \\sqrt{5}}$: multiply by $\\frac{2 - \\sqrt{5}}{2 - \\sqrt{5}}$\n\n" +
          "$= \\frac{3(2 - \\sqrt{5})}{(2)^2 - (\\sqrt{5})^2} = \\frac{6 - 3\\sqrt{5}}{4 - 5} = \\frac{6 - 3\\sqrt{5}}{-1} = -6 + 3\\sqrt{5}$\n\n" +
          "The conjugate of $(a + \\sqrt{b})$ is $(a - \\sqrt{b})$ and vice versa. The product uses difference of two squares: $(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$.",
        examinerTips: [
          "The conjugate is formed by changing only the sign between the terms: conjugate of $3 - \\sqrt{7}$ is $3 + \\sqrt{7}$.",
          "After rationalising, simplify the fraction if possible.",
        ],
        commonMistakes: [
          "Using the same fraction as a multiplier (e.g. $\\frac{2+\\sqrt{5}}{2+\\sqrt{5}}$ when the denominator is $2+\\sqrt{5}$) — use the conjugate.",
          "Sign errors when expanding $(a - \\sqrt{b})(a + \\sqrt{b})$.",
        ],
        recap: [
          "Rationalise the denominator and simplify: (a) $\\frac{6}{\\sqrt{2}}$ (b) $\\frac{4}{3-\\sqrt{5}}$ (c) $\\frac{1+\\sqrt{3}}{2+\\sqrt{3}}$.",
        ],
      },
    ],
  },
  {
    number: 9,
    title: "Working with Fractions, Decimals & Percentages",
    section: "1. Number",
    topic: "Working with FDP",
    intro:
      "Converting fluently between fractions, decimals and percentages is an essential skill. This chapter also covers recurring decimals and comparing FDP quantities.",
    subheadings: [
      {
        title: "Converting Fractions, Decimals & Percentages",
        body:
          "**Fraction → Decimal:** Divide numerator by denominator.\n" +
          "$\\frac{3}{8} = 3 \\div 8 = 0.375$\n\n" +
          "**Decimal → Fraction:** Use place value.\n" +
          "$0.36 = \\frac{36}{100} = \\frac{9}{25}$\n\n" +
          "**Fraction → Percentage:** Divide then multiply by 100.\n" +
          "$\\frac{7}{20} = 0.35 = 35\\%$\n\n" +
          "**Percentage → Decimal:** Divide by 100.\n" +
          "$68\\% = 0.68$\n\n" +
          "**Key FDP equivalents to know:**\n" +
          "$\\frac{1}{2} = 0.5 = 50\\%$,  $\\frac{1}{4} = 0.25 = 25\\%$,  $\\frac{3}{4} = 0.75 = 75\\%$\n" +
          "$\\frac{1}{3} = 0.\\dot{3} = 33.3\\%$,  $\\frac{1}{5} = 0.2 = 20\\%$,  $\\frac{1}{8} = 0.125 = 12.5\\%$",
        examinerTips: [
          "Learn the common FDP equivalents — they speed up calculations and help with estimations.",
        ],
        commonMistakes: [
          "Writing $\\frac{1}{3} = 0.33$ (truncated) — use $0.\\dot{3}$ or $\\frac{1}{3}$ for exact form.",
          "Dividing by $10$ instead of $100$ when converting percentage to decimal.",
        ],
        recap: [
          "Convert each: (a) $\\frac{5}{16}$ to decimal and percentage (b) $0.045$ to fraction and percentage (c) $37.5\\%$ to fraction and decimal.",
        ],
      },
      {
        title: "Recurring Decimals",
        body:
          "**Recurring decimals** are rational numbers with repeating decimal patterns.\n\n" +
          "**Notation:** Dots above the first and last digit of the repeating block:\n" +
          "$0.\\dot{3} = 0.3333\\dots$\n" +
          "$0.\\dot{1}\\dot{8} = 0.181818\\dots$\n" +
          "$0.1\\dot{6} = 0.16666\\dots$\n\n" +
          "**Converting a recurring decimal to a fraction:**\n\n" +
          "Example: Convert $0.\\dot{1}\\dot{8}$ to a fraction.\n" +
          "Let $x = 0.181818\\dots$\n" +
          "Then $100x = 18.181818\\dots$\n" +
          "$100x - x = 18 \\Rightarrow 99x = 18 \\Rightarrow x = \\frac{18}{99} = \\frac{2}{11}$\n\n" +
          "Example: Convert $0.1\\dot{6}$ to a fraction.\n" +
          "Let $x = 0.1666\\dots$, so $10x = 1.666\\dots$ and $100x = 16.666\\dots$\n" +
          "$100x - 10x = 15 \\Rightarrow 90x = 15 \\Rightarrow x = \\frac{15}{90} = \\frac{1}{6}$",
        examinerTips: [
          "Multiply by $10^n$ where $n$ is the length of the repeating block to eliminate the recurring part.",
          "If the recurring part doesn't start immediately, multiply by an extra power of 10 first to shift the non-recurring part.",
        ],
        commonMistakes: [
          "Multiplying by the wrong power of 10 — count the number of digits in the repeating block.",
          "Not fully simplifying the resulting fraction.",
        ],
        recap: [
          "Convert to fractions: (a) $0.\\dot{7}$ (b) $0.\\dot{2}\\dot{7}$ (c) $0.4\\dot{5}$ (d) $0.1\\dot{2}\\dot{3}$.",
        ],
      },
      {
        title: "Ordering Fractions, Decimals & Percentages",
        body:
          "To order a **mixed list** of fractions, decimals, and percentages, convert them all to the **same form** (usually decimals) and then compare.\n\n" +
          "**Example:** Order from smallest to largest: $\\frac{3}{5}$, $0.58$, $62\\%$, $\\frac{7}{12}$.\n\n" +
          "Convert all to decimals:\n" +
          "- $\\frac{3}{5} = 0.6$\n" +
          "- $0.58 = 0.58$\n" +
          "- $62\\% = 0.62$\n" +
          "- $\\frac{7}{12} = 0.583\\dot{3}$\n\n" +
          "Order: $0.58 < 0.583\\dot{3} < 0.6 < 0.62$\n" +
          "So: $0.58 < \\frac{7}{12} < \\frac{3}{5} < 62\\%$",
        examinerTips: [
          "Convert to decimals for comparison — fractions with different denominators are hard to compare directly.",
          "Use at least 4 decimal places when comparing close values to avoid errors.",
        ],
        commonMistakes: [
          "Comparing fractions by comparing numerators only (ignoring denominators).",
          "Rounding too early when converting, causing incorrect ordering.",
        ],
        recap: [
          "Arrange in ascending order: $\\frac{5}{8}$, $0.6$, $63\\%$, $\\frac{11}{18}$.",
        ],
      },
    ],
  },
  {
    number: 10,
    title: "Ratios & Proportion",
    section: "1. Number",
    topic: "Working with Ratios",
    intro:
      "Ratios compare quantities of the same type. Proportion identifies how quantities scale relative to each other. These skills are fundamental across all areas of mathematics.",
    subheadings: [
      {
        title: "Ratios",
        body:
          "A **ratio** compares two or more quantities in the same units.\n" +
          "Written as $a : b$ (read as '$a$ to $b$').\n\n" +
          "**Simplifying ratios:** Divide all parts by the HCF.\n" +
          "$24 : 36 = 2 : 3$ (dividing by 12)\n\n" +
          "**Sharing in a given ratio:**\n" +
          "Share $\\$120$ in the ratio $3 : 5$.\n" +
          "Total parts = $3 + 5 = 8$. One part = $\\$120 \\div 8 = \\$15$.\n" +
          "Shares: $3 \\times \\$15 = \\$45$ and $5 \\times \\$15 = \\$75$.\n\n" +
          "**Ratios with more than two terms:** $A : B : C = 2 : 3 : 7$ — same method, total 12 parts.\n\n" +
          "**Converting ratio to fraction:** In ratio $2 : 5$, first part is $\\frac{2}{7}$ of the total.",
        examinerTips: [
          "Always check your parts add up to the total after dividing.",
          "If quantities are in different units, convert to the same unit before writing the ratio.",
        ],
        commonMistakes: [
          "Dividing the total by one of the ratio numbers instead of the sum of all parts.",
          "Writing the ratio in the wrong order — read the question carefully.",
        ],
        recap: [
          "Share $\\$350$ in the ratio $2 : 3 : 5$. Find each share.",
          "Simplify fully: (a) $45 : 75$ (b) $1.2 : 2.4$ (c) $\\frac{1}{2} : \\frac{3}{4}$.",
        ],
      },
      {
        title: "Problem Solving with Ratios",
        body:
          "**Increasing/Decreasing in a ratio:** Multiply/divide the quantity by the appropriate scale factor.\n\n" +
          "**Map and scale problems:**\n" +
          "Scale $1 : 25000$ means $1$cm on map = $25000$cm in real life = $250$m.\n\n" +
          "**Recipes and proportional scaling:**\n" +
          "A recipe for 4 people uses $300$g flour. For 7 people: $300 \\div 4 \\times 7 = 525$g.\n\n" +
          "**Finding an unknown in a ratio:**\n" +
          "If $A : B = 5 : 3$ and $A = 40$, find $B$:\n" +
          "One part $= 40 \\div 5 = 8$, so $B = 3 \\times 8 = 24$.",
        examinerTips: [
          "For map scale problems, always state the units clearly and convert carefully.",
          "Use the unitary method: find one part first, then scale.",
        ],
        commonMistakes: [
          "Scaling the wrong quantity (e.g., scaling $A$ when asked for $B$).",
          "Forgetting to convert map distances to real-world units.",
        ],
        recap: [
          "On a map of scale $1 : 50000$, two towns are $7.5$cm apart. Find the real distance in km.",
          "In a class, the ratio of boys to girls is $4 : 5$. There are $36$ boys. How many students are there in total?",
        ],
      },
      {
        title: "Working with Proportion",
        body:
          "**Direct proportion:** As one quantity increases, the other increases at the same rate. $y \\propto x \\Rightarrow y = kx$.\n\n" +
          "**Inverse proportion:** As one quantity increases, the other decreases proportionally. $y \\propto \\frac{1}{x} \\Rightarrow y = \\frac{k}{x}$.\n\n" +
          "**Setting up proportion equations:**\n" +
          "If $y$ is directly proportional to $x$, and $y = 15$ when $x = 3$:\n" +
          "$k = y/x = 15/3 = 5$, so $y = 5x$. When $x = 7$, $y = 35$.\n\n" +
          "If $y$ is inversely proportional to $x$, and $y = 8$ when $x = 3$:\n" +
          "$k = y \\times x = 24$, so $y = 24/x$. When $x = 6$, $y = 4$.\n\n" +
          "**Other proportionality relationships:**\n" +
          "- $y \\propto x^2$: $y = kx^2$\n" +
          "- $y \\propto \\sqrt{x}$: $y = k\\sqrt{x}$\n" +
          "- $y \\propto \\frac{1}{x^2}$: $y = \\frac{k}{x^2}$",
        examinerTips: [
          "Always find $k$ first using the given values, then use the equation to answer the question.",
          "If a table of values is given, check whether the ratio $y/x$ or the product $xy$ is constant to identify the type of proportion.",
        ],
        commonMistakes: [
          "Using direct proportion formula when the relationship is inverse.",
          "Forgetting to square or root when the proportionality involves $x^2$ or $\\sqrt{x}$.",
        ],
        recap: [
          "$y \\propto x^3$. When $x = 2$, $y = 24$. Find $y$ when $x = 5$.",
          "$y \\propto \\frac{1}{\\sqrt{x}}$. When $x = 9$, $y = 4$. Find $y$ when $x = 25$.",
        ],
      },
    ],
  },
  {
    number: 11,
    title: "Compound Measures",
    section: "1. Number",
    topic: "Compound Measures",
    intro:
      "Compound measures involve two different physical quantities combined into a single measure. At Extended level, fluency with speed, density, and pressure formulae and their units is expected.",
    subheadings: [
      {
        title: "Compound Measures",
        body:
          "A **compound measure** is derived from two or more base measures.\n\n" +
          "The three main compound measures at IGCSE are:\n\n" +
          "| Measure | Formula | Common Units |\n" +
          "|---------|---------|---------------|\n" +
          "| Speed | $\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}$ | m/s, km/h, mph |\n" +
          "| Density | $\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$ | g/cm³, kg/m³ |\n" +
          "| Pressure | $\\text{Pressure} = \\frac{\\text{Force}}{\\text{Area}}$ | N/m², Pa |\n\n" +
          "These can be rearranged using the formula triangle technique.",
        examinerTips: [
          "Draw the formula triangle to avoid rearrangement errors: cover the quantity you want to find.",
          "Check units throughout — if speed is km/h and time is in minutes, convert minutes to hours before calculating.",
        ],
        commonMistakes: [
          "Calculating speed using the wrong rearrangement: Distance = Speed ÷ Time — WRONG; Distance = Speed × Time.",
          "Mixing units (e.g. km and metres in the same calculation).",
        ],
        recap: [
          "A car travels $240$ km in $2.5$ hours. Find its average speed.",
          "A metal block has mass $540$g and volume $72$cm³. Find its density.",
        ],
      },
      {
        title: "Speed, Density & Pressure",
        body:
          "**Speed calculations:**\n" +
          "- Speed $= \\frac{D}{T}$,  Distance $= S \\times T$,  Time $= \\frac{D}{S}$\n" +
          "- Average speed = total distance ÷ total time (NOT the average of individual speeds)\n\n" +
          "**Unit conversions for speed:**\n" +
          "$1$ km/h $= \\frac{1000}{3600}$ m/s $= \\frac{5}{18}$ m/s\n" +
          "$1$ m/s $= 3.6$ km/h\n\n" +
          "**Density:**\n" +
          "- Density $= \\frac{M}{V}$,  Mass $= D \\times V$,  Volume $= \\frac{M}{D}$\n\n" +
          "**Pressure:**\n" +
          "- Pressure $= \\frac{F}{A}$,  Force $= P \\times A$,  Area $= \\frac{F}{P}$\n" +
          "- SI unit of pressure: Pascals (Pa) = N/m²",
        examinerTips: [
          "For average speed problems involving two stages: total distance ÷ total time — do NOT simply average the two speeds.",
          "When converting units of density (g/cm³ to kg/m³), multiply by 1000.",
        ],
        commonMistakes: [
          "Finding average speed by averaging: $\\frac{60 + 80}{2} = 70$ km/h — only correct if equal times are spent at each speed.",
          "Using wrong units after converting — always state units in your answer.",
        ],
        recap: [
          "Convert $72$ km/h to m/s.",
          "A person travels $60$ km at $40$ km/h then $60$ km at $60$ km/h. Find the average speed for the whole journey.",
          "A steel rod has density $7.8$ g/cm³ and mass $1.95$ kg. Find its volume in cm³.",
        ],
      },
    ],
  },
  {
    number: 12,
    title: "Time, Currency & Conversions",
    section: "1. Number",
    topic: "Time, Currency & Conversions",
    intro:
      "Real-world problems require accurate work with time calculations, currency exchange and unit conversions. This chapter builds fluency with all three.",
    subheadings: [
      {
        title: "Time Calculations",
        body:
          "**Reading and writing time:**\n" +
          "- 12-hour clock: 1:00 am to 12:00 pm to 11:59 pm.\n" +
          "- 24-hour clock (used in timetables): 00:00 to 23:59. Afternoon hours add 12: 3:00 pm = 15:00.\n\n" +
          "**Time intervals:** Calculate using subtraction, being careful with minutes and hours.\n" +
          "From 09:45 to 13:20:\n" +
          "Hours: $13 - 9 = 4$h, Minutes: $20 - 45 = -25$, so borrow 1 hour: $60 - 45 + 20 = 35$ min.\n" +
          "Total = $3$ h $35$ min.\n\n" +
          "**Converting time units:**\n" +
          "$1$ hour $= 60$ minutes $= 3600$ seconds\n" +
          "$1$ day $= 24$ hours; $1$ week $= 7$ days; $1$ year $= 365$ days ($366$ in a leap year).",
        examinerTips: [
          "NEVER subtract time as though it uses base 10 — time uses base 60 for minutes and seconds.",
          "When a clock problem involves crossing midnight, add 24 hours to the later time.",
        ],
        commonMistakes: [
          "Calculating $13:20 - 09:45 = 3.75$ hours — the decimal does not represent hours and minutes directly.",
          "Converting $2.3$ hours to 2 hours 30 minutes — it is 2 hours 18 minutes ($0.3 \\times 60 = 18$ min).",
        ],
        recap: [
          "A train leaves at 07:48 and arrives at 11:23. How long is the journey?",
          "Change $3$ h $45$ min to minutes; change $280$ minutes to hours and minutes.",
        ],
      },
      {
        title: "Currency & Unit Conversions",
        body:
          "**Currency exchange:**\n" +
          "Use an exchange rate to convert between currencies.\n" +
          "If $\\$1 = €0.85$, then $\\$200 = 200 \\times 0.85 = €170$.\n" +
          "To convert back: $€170 \\div 0.85 = \\$200$.\n\n" +
          "**Unit conversions — metric:**\n" +
          "Length: $1$ km $= 1000$ m $= 100000$ cm $= 10^6$ mm\n" +
          "Mass: $1$ kg $= 1000$ g; $1$ tonne $= 1000$ kg\n" +
          "Volume: $1$ litre $= 1000$ ml $= 1000$ cm³; $1$ m³ $= 10^6$ cm³\n\n" +
          "**Unit conversions — metric to imperial (given in exam):**\n" +
          "These are always given in the question; use them as exchange rates.",
        examinerTips: [
          "Always identify whether you're multiplying or dividing — multiply to convert to smaller units, divide to convert to larger units.",
          "Exchange rate problems: draw a diagram showing which direction requires multiply or divide.",
        ],
        commonMistakes: [
          "Dividing instead of multiplying (or vice versa) when converting currencies.",
          "Forgetting that $1$ m³ $= 10^6$ cm³ (not $10^3$) because all three dimensions cube.",
        ],
        recap: [
          "Convert: (a) $4.5$ km to metres (b) $850$ cm² to m² (c) $2.4$ m³ to cm³.",
          "Exchange rate: $£1 = \\$1.26$. Convert $\\$850$ to pounds.",
        ],
      },
    ],
  },
  {
    number: 13,
    title: "Rounding, Estimation & Bounds",
    section: "1. Number",
    topic: "Rounding, Estimation & Bounds",
    intro:
      "Rounding and estimation are essential for checking answers and working with approximate data. Upper and lower bounds help quantify the effect of rounding on calculations.",
    subheadings: [
      {
        title: "Rounding",
        body:
          "**Decimal places (d.p.):** Count digits after the decimal point.\n" +
          "$3.7461$ to $2$ d.p. = $3.75$ (the third decimal $6 \\geq 5$, so round up).\n\n" +
          "**Significant figures (s.f.):** Count from the first non-zero digit.\n" +
          "$0.004826$ to $2$ s.f. = $0.0048$ (zeros before first digit are not significant).\n" +
          "$34700$ to $3$ s.f. = $34700$ — but show it as $3.47 \\times 10^4$ if ambiguous.\n\n" +
          "**Rounding rule:** If the next digit is $\\geq 5$, round up; if $< 5$, round down.",
        examinerTips: [
          "For significant figures, trailing zeros in a whole number may or may not be significant — standard form removes ambiguity.",
          "Show the rounded value, not just the rounded digit.",
        ],
        commonMistakes: [
          "Rounding $3.745$ to $2$ d.p. as $3.74$ — the digit $5$ means round up: $3.75$.",
          "Counting leading zeros as significant figures in decimals like $0.0036$ (which has 2 s.f.).",
        ],
        recap: [
          "Round (a) $7.3862$ to 3 s.f. (b) $0.009457$ to 2 s.f. (c) $45678$ to 3 s.f.",
        ],
      },
      {
        title: "Estimation",
        body:
          "**Estimation** involves rounding all values to 1 significant figure and then calculating.\n\n" +
          "Example: Estimate $\\frac{48.3 \\times 9.7}{0.521}$\n\n" +
          "$\\approx \\frac{50 \\times 10}{0.5} = \\frac{500}{0.5} = 1000$\n\n" +
          "**Exact answer:** $\\approx 899.8$ — estimation gives a reasonable check.\n\n" +
          "**Using estimation to check calculator answers:** If an estimated answer is around $1000$ but your calculator gives $89.98$, you've likely made an error.",
        examinerTips: [
          "Use $1$ s.f. for all numbers in an estimation. Never partially round some numbers.",
          "Show your rounded values clearly so examiners can award method marks.",
        ],
        commonMistakes: [
          "Rounding to 2 or more s.f. in estimation questions — the instruction is usually 1 s.f.",
          "Claiming the estimated answer is the same as the exact answer.",
        ],
        recap: [
          "Estimate: (a) $\\frac{612 \\times 0.48}{0.0019}$ (b) $\\sqrt{48.5} \\times 2.9$.",
        ],
      },
      {
        title: "Upper & Lower Bounds",
        body:
          "When a measurement is rounded to a given accuracy, the **true value** could be anywhere in an interval around the stated value.\n\n" +
          "If $x = 7.4$ cm (to 1 d.p.):\n" +
          "- Lower bound (LB): $7.35$ cm\n" +
          "- Upper bound (UB): $7.45$ cm\n" +
          "Written as: $7.35 \\leq x < 7.45$ (the upper bound itself is **not** included)\n\n" +
          "**General rule:** The bounds are half the smallest unit of rounding on each side.\n\n" +
          "**Bounds in calculations:**\n" +
          "- Maximum value of $A + B$: use UB of $A$ + UB of $B$\n" +
          "- Minimum value of $A - B$: use LB of $A$ - UB of $B$\n" +
          "- Maximum value of $A \\times B$: use UB of $A$ × UB of $B$\n" +
          "- Minimum value of $A \\div B$: use LB of $A$ ÷ UB of $B$",
        examinerTips: [
          "The upper bound is NOT included in the range — the inequality at the top is strict: $< $ UB.",
          "For minimum of $A/B$: use **minimum** $A$ and **maximum** $B$ (dividing by a larger number gives a smaller result).",
        ],
        commonMistakes: [
          "Using the same bound type for both values in subtraction — to minimise $A - B$, use LB of $A$ and UB of $B$.",
          "Adding 0.5 to the last digit for the upper bound without considering the place value of rounding.",
        ],
        recap: [
          "$L = 8.3$ cm and $W = 5.6$ cm, both to 1 d.p. Find: (a) UB and LB of $L + W$ (b) maximum area of the rectangle (c) minimum value of $L - W$.",
        ],
      },
    ],
  },
  {
    number: 14,
    title: "Using a Calculator",
    section: "1. Number",
    topic: "Using a Calculator",
    intro:
      "Efficient calculator use is a key exam skill. This chapter covers effective techniques for all standard IGCSE calculator operations.",
    subheadings: [
      {
        title: "Effective Calculator Techniques",
        body:
          "**Key skills for the Extended calculator paper:**\n\n" +
          "- **Fraction calculations:** Use the fraction button ($a\\frac{b}{c}$ or $\\frac{n}{d}$) to work with fractions and obtain exact answers.\n" +
          "- **Standard form entry:** Use the ×10ˣ button (EXP or EE on some calculators).\n" +
          "- **Powers and roots:** Use $x^y$ or $\\hat{}$ for powers; $\\sqrt{}$, $\\sqrt[n]{}$, or $x^{\\frac{1}{n}}$ for roots.\n" +
          "- **Trigonometric functions:** Ensure the calculator is in DEGREE mode (not radians) for IGCSE questions.\n" +
          "- **Memory functions:** Use M+ and MR to store intermediate values and avoid rounding errors.\n" +
          "- **ANS key:** Use the ANS or last answer key to chain calculations without re-entering values.\n\n" +
          "**Checking answers:** Always estimate first, then compare with the calculator result.",
        examinerTips: [
          "Always check your calculator is in DEGREE mode at the start of every trigonometry question.",
          "Use brackets generously: $\\frac{5+3}{2}$ must be entered as $(5+3) \\div 2$, not $5+3 \\div 2$.",
        ],
        commonMistakes: [
          "Entering $\\frac{5}{3+2}$ as $5 \\div 3 + 2$ — the denominator must be in brackets.",
          "Using radians mode for trig calculations — IGCSE always uses degrees unless stated otherwise.",
        ],
        recap: [
          "Use a calculator to find: (a) $\\frac{3.14 + \\sqrt{8.5}}{2.1^2 - 1}$ (b) $\\sin(37°) \\times \\frac{15}{\\sin(50°)}$ (c) $4.5^3 + \\sqrt[3]{125}$.",
        ],
      },
    ],
  },
];
