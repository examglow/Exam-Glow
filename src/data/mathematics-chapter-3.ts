import type { Chapter } from "../lib/notes/types";

// mathematics-chapter-3.ts — chapters 48–70 (Algebra & Sequences)
export const MATHEMATICS_CHAPTERS_3: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 48. Algebraic Notation
  // ─────────────────────────────────────────────────────────────
  {
    number: 48,
    title: "Algebraic Notation",
    section: "Algebra & Sequences",
    topic: "Introduction to Algebra",
    intro: `Algebraic notation is the language of mathematics — understanding how letters, numbers, and symbols combine is the first step to manipulating any algebraic expression. At IGCSE level, fluency with notation prevents the most common errors in every algebra topic. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Algebraic Notation",
        body: `**Algebra** uses letters (called **variables** or **unknowns**) to represent numbers whose values may be unknown or may vary. Standard conventions keep algebraic writing unambiguous.\n\n**Multiplication** between a number and a letter, or between two letters, is written without a × sign: 3a means 3 × a, and ab means a × b. The number in front of a letter is called the **coefficient** — in 5x, the coefficient is 5. When no number is written, the coefficient is 1 (so x means 1x).\n\n**Division** is written as a fraction: a ÷ b is written a/b. **Powers** use superscripts: a² means a × a, and a³ means a × a × a. The order matters: 2a³ means 2 × (a × a × a), not (2a)³.\n\n**Brackets** show that everything inside is multiplied together before combining with the outside: 3(a + 2) means 3 × a + 3 × 2 = 3a + 6.`,
        groups: [
          {
            subTitle: "Key notation rules",
            bullets: [
              "**Coefficient:** the number multiplying a variable — in 7y, the coefficient is 7; in y, the coefficient is 1.",
              "**Implicit multiplication:** 4b means 4 × b; xy means x × y — no multiplication sign is written.",
              "**Power (index):** a² = a × a; a³ = a × a × a; aⁿ = a multiplied by itself n times.",
              "**Fraction notation:** a/b means a ÷ b; (3x + 1)/2 means the whole numerator divided by 2.",
              "**Brackets:** evaluate contents first — 2(x + 5) means multiply both x and 5 by 2.",
              "**Negative coefficients:** −3x means −3 × x; this is different from 3 × (−x).",
            ],
          },
          {
            subTitle: "Writing expressions from words",
            bullets: [
              "**'Three more than x'** → x + 3 (addition is commutative: 3 + x has the same value).",
              "**'Five times y'** → 5y (write the coefficient first, then the variable).",
              "**'Square of p'** → p² (the variable is raised to the power 2).",
              "**'Half of n'** → n/2 or ½n (division by 2, or multiplication by ½).",
              "**'Four less than twice x'** → 2x − 4 (apply the operations in correct order).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Writing 2 × x as 2 × x** — always drop the multiplication sign: write 2x.",
              "**Confusing a² with 2a** — a² = a × a; 2a = a + a. These are different expressions.",
              "**Forgetting the implicit coefficient of 1** — x is 1x, −x is −1x; this matters when collecting like terms.",
              "**Applying a power to only part of a product** — 2x² means 2 × x², not (2x)² = 4x².",
            ],
          },
        ],
        examinerTips: [
          "Always write coefficients before variables: 5a not a5; this is mathematical convention and examiners expect it.",
          "When an expression has no visible coefficient, the coefficient is 1 — recognising this prevents errors when collecting like terms.",
          "Read 'write an expression for…' questions carefully: each word or phrase maps to an algebraic operation.",
          "Check bracket expressions by substituting a simple value (e.g. x = 2) into both the original words and your expression to verify they match.",
        ],
        commonMistakes: [
          "Writing the coefficient after the variable (e.g. x3 instead of 3x) — always place the number before the letter.",
          "Confusing a² with 2a — the former is a multiplied by itself, the latter is a doubled.",
          "Applying an exponent to both the coefficient and the variable when only the variable is raised — 2x² ≠ (2x)².",
        ],
        recap: [
          "Write an algebraic expression for 'five more than twice y'. [1]",
          "Write 3 × p × p in a simpler form. [1]",
          "What is the coefficient of x in the expression 7 − 4x + x²? [1]",
          "Explain the difference between 3a² and (3a)². [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 49. Algebraic Vocabulary
  // ─────────────────────────────────────────────────────────────
  {
    number: 49,
    title: "Algebraic Vocabulary",
    section: "Algebra & Sequences",
    topic: "Introduction to Algebra",
    intro: `Knowing the correct terminology — term, expression, equation, identity, formula — allows you to understand and answer exam questions precisely. IGCSE examiners use these words deliberately in instructions, and misreading them costs marks. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Algebraic Vocabulary",
        body: `**Term:** a single number, variable, or product of numbers and variables — e.g. 5x, −3y², 7, ab. Terms are separated by + or − signs.\n\n**Expression:** a collection of one or more terms combined by + or − but with no equals sign — e.g. 3x + 2y − 5.\n\n**Equation:** a statement that two expressions are equal, with an equals sign — e.g. 2x + 3 = 11. An equation is true only for specific values of the unknown.\n\n**Identity:** an equation that is true for all values of the variable(s), shown with the ≡ symbol — e.g. 2(x + 3) ≡ 2x + 6.\n\n**Formula:** a rule written algebraically showing the relationship between quantities — e.g. A = lw (area of a rectangle). Variables in a formula each represent a specific measurable quantity.\n\n**Inequality:** a relationship showing one expression is greater or less than another — e.g. 2x + 1 > 7.`,
        groups: [
          {
            subTitle: "Key vocabulary definitions",
            bullets: [
              "**Term:** a single algebraic unit — examples: 4x, −y², 8, 3ab. Count terms by counting the + and − separators.",
              "**Expression:** a combination of terms without an equals sign — e.g. x² + 3x − 2 has three terms.",
              "**Equation:** an expression set equal to a value or another expression — has specific solutions for the unknown.",
              "**Identity (≡):** true for every value of the variable — e.g. (x + 1)² ≡ x² + 2x + 1.",
              "**Formula:** relates two or more variables — e.g. v = u + at links velocity, initial velocity, acceleration, and time.",
              "**Inequality:** uses <, >, ≤, or ≥ — e.g. 3x − 1 ≤ 8 is satisfied by a range of x values.",
            ],
          },
          {
            subTitle: "Identifying and counting terms",
            bullets: [
              "**Monomial:** an expression with one term — e.g. 5x² or −3.",
              "**Binomial:** an expression with two terms — e.g. x + 4 or 2x − y.",
              "**Trinomial:** an expression with three terms — e.g. x² + 3x − 2.",
              "**Polynomial:** an expression with one or more terms where all exponents are non-negative integers.",
              "**Degree:** the highest power of the variable in an expression — x³ + 2x has degree 3.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Calling an expression an equation** — an expression has no equals sign; an equation does.",
              "**Confusing formula and equation** — a formula defines a relationship between named quantities; an equation states a specific equality.",
              "**Miscounting terms** — in 3x − 2, there are two terms (3x and −2); the minus belongs to the second term.",
              "**Writing ≡ when you mean =** — only use ≡ when the relationship holds for all values of the variable.",
            ],
          },
        ],
        examinerTips: [
          "If a question says 'write an expression', do not include an equals sign — expressions stand alone.",
          "When asked to 'show that… is an identity', expand both sides fully and confirm they are identical for general x.",
          "Count terms carefully — the expression 4x + 3y − 2 has three terms, not two.",
          "Degree of a polynomial is the highest power, not the number of terms — x³ + 1 has degree 3.",
        ],
        commonMistakes: [
          "Adding an equals sign to an expression — an expression like 3x + 7 does not equal anything by itself.",
          "Confusing the number of terms with the degree of the polynomial — they are different properties.",
        ],
        recap: [
          "State the number of terms in the expression 5x² − 3x + 7. [1]",
          "Explain the difference between an equation and an identity. Give one example of each. [2]",
          "Write down the degree of the polynomial 4x³ + x² − 2x + 1. [1]",
          "Is 3(x + 2) = 3x + 6 an equation or an identity? Justify your answer. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 50. Substitution
  // ─────────────────────────────────────────────────────────────
  {
    number: 50,
    title: "Substitution",
    section: "Algebra & Sequences",
    topic: "Introduction to Algebra",
    intro: `Substitution — replacing variables with given numbers — is used to evaluate expressions, check equations, and calculate with formulas across all exam topics. The key rule is to follow the order of operations (BIDMAS) after substituting. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Substitution",
        body: `**Substitution** means replacing each variable in an expression with a given numerical value and then evaluating the result. The key rule is to follow the **order of operations (BIDMAS)** after substituting.\n\nFor the expression 3x² − 2x + 5 with x = −3: first compute x² = (−3)² = 9; then 3 × 9 = 27; then 2 × (−3) = −6; then 27 − (−6) + 5 = 27 + 6 + 5 = **38**.\n\nSubstituting into **formulas** works the same way. The formula for kinetic energy is KE = ½mv². With m = 4 and v = 3: KE = ½ × 4 × 9 = 18.\n\nTake care with **negative values**: always place them in brackets when substituting to avoid sign errors — e.g. write (−2)² = 4, not −2² = −4.`,
        groups: [
          {
            subTitle: "Step-by-step substitution",
            bullets: [
              "**Step 1 — write brackets:** replace each variable with its value in brackets, e.g. replace x with −4 to get (−4).",
              "**Step 2 — apply powers first:** evaluate any exponents before multiplication — (−4)² = 16, not −16.",
              "**Step 3 — multiply/divide:** work through products and quotients left to right.",
              "**Step 4 — add/subtract:** combine the remaining terms in order.",
              "**Example:** find the value of 2a − b² when a = 5 and b = −3: 2(5) − (−3)² = 10 − 9 = 1.",
            ],
          },
          {
            subTitle: "Substitution into formulas",
            bullets: [
              "**Speed formula:** s = d/t; substitute d = 150, t = 3 → s = 150/3 = 50 km/h.",
              "**Area of circle:** A = πr²; substitute r = 7 → A = π × 49 ≈ 153.9 cm².",
              "**Quadratic evaluation:** substitute into ax² + bx + c with given a, b, c to evaluate at a specific x.",
              "**Checking solutions:** substitute your answer back into an equation to verify — if LHS = RHS, the solution is correct.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Squaring a negative without brackets:** −3² = −9 (exponent applies only to 3), but (−3)² = +9. Always use brackets.",
              "**Forgetting BIDMAS after substituting:** evaluate powers before multiplication; evaluate brackets first.",
              "**Using the wrong value for a variable:** in expressions with multiple variables, label each substitution clearly.",
              "**Not simplifying fully:** leave all arithmetic completed — do not leave 2 × 9 in your working; write 18.",
            ],
          },
        ],
        examinerTips: [
          "Always write brackets around negative values when substituting — this single habit prevents the most common sign errors.",
          "Show each substitution step separately in your working; examiners award method marks even if the final answer is wrong.",
          "For formulas with multiple variables, write out the formula, then substitute all values, then simplify step by step.",
          "When checking an equation, substitute back and confirm both sides give the same value.",
        ],
        commonMistakes: [
          "Writing −x² when x is negative — always substitute (−x)² to get the correct positive result when squaring a negative.",
          "Skipping intermediate steps — missing a substitution step leads to arithmetic errors that lose marks.",
        ],
        recap: [
          "Find the value of 3x² − 4x + 1 when x = −2. [2]",
          "Given that p = 2 and q = −3, calculate the value of p² + 3q. [2]",
          "The formula for the area of a trapezium is A = ½(a + b)h. Find A when a = 5, b = 9, h = 4. [2]",
          "Show, by substitution, that x = 3 is a solution of 2x² − 5x − 3 = 0. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 51. Collecting Like Terms
  // ─────────────────────────────────────────────────────────────
  {
    number: 51,
    title: "Collecting Like Terms",
    section: "Algebra & Sequences",
    topic: "Introduction to Algebra",
    intro: `Simplifying expressions by grouping like terms is one of the most frequently tested algebraic skills and underpins every branch of IGCSE algebra. Getting this step right makes every later manipulation — expanding, factorising, solving — faster and more accurate. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Collecting Like Terms",
        body: `**Like terms** are terms that contain exactly the same variable(s) raised to the same power(s). The coefficients may differ, but the variable parts must match: 3x and −7x are like terms; 3x and 3x² are not.\n\n**Collecting like terms** means adding or subtracting the coefficients of like terms to produce a simpler expression. Constants (plain numbers) form their own group of like terms.\n\n**Example:** simplify 5x + 3y − 2x + 4y − 1.\n- x terms: 5x − 2x = 3x\n- y terms: 3y + 4y = 7y\n- constants: −1\n- Result: **3x + 7y − 1**\n\nWith two variables of different powers — e.g. 2x², 5x, and 3x² — group by both variable and power: 2x² + 3x² = 5x², but 5x stays separate.`,
        groups: [
          {
            subTitle: "Identifying and grouping like terms",
            bullets: [
              "**Like terms share the same variable part:** 4ab and −3ab are like terms; 4ab and 4a are not.",
              "**Powers must match:** 6x² and 2x are not like terms — different exponents make them unlike.",
              "**Constants are like terms with each other:** 7, −3, and 12 can all be combined.",
              "**Multiple variables:** in 3xy + 2yx, recognise that xy = yx (multiplication is commutative), so both terms are like.",
              "**Coefficient of 1:** x + 3x = 1x + 3x = 4x — always count the implied coefficient of 1.",
            ],
          },
          {
            subTitle: "Simplifying step by step",
            bullets: [
              "**Step 1:** identify all like term groups (by variable and power).",
              "**Step 2:** add or subtract coefficients within each group.",
              "**Step 3:** write the simplified expression, usually with highest-degree terms first.",
              "**Example:** 4a² + 3b − a² + 2b − 5 → (4a² − a²) + (3b + 2b) − 5 = 3a² + 5b − 5.",
              "**Convention:** write terms in descending order of degree — x³ before x² before x before constants.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Adding unlike terms:** 3x + 2y cannot be simplified further — do not write 5xy.",
              "**Sign errors with subtraction:** in 5x − (−2x), the double negative gives 5x + 2x = 7x.",
              "**Forgetting to include the sign of a term:** − 4y means the y-coefficient is −4, not +4.",
              "**Combining different powers:** 3x² + 2x ≠ 5x³ — keep x² and x terms separate.",
            ],
          },
        ],
        examinerTips: [
          "Underline or ring like terms with matching marks before combining — a visual check prevents mixing unlike terms.",
          "Rewrite with like terms adjacent before adding: rearranging first reduces errors.",
          "Always keep the sign attached to the term on its left: treat 3a − 2b + a as 3a + (−2b) + a.",
          "In expressions with many terms, work through one variable at a time — x terms first, then y terms, then constants.",
        ],
        commonMistakes: [
          "Combining 5x and 5x² because they share the variable x — the exponent must also match for terms to be like.",
          "Dropping the sign when rearranging — the sign belongs to the term that follows it, so keep them together.",
        ],
        recap: [
          "Simplify 7x + 3y − 4x + y. [2]",
          "Simplify 5a² − 3a + 2a² + 4a − 1. [2]",
          "Simplify 3pq + 2p − pq + 5p. [2]",
          "Explain why 4x + 3x² cannot be simplified to 7x³. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 52. Simplifying Algebraic Fractions
  // ─────────────────────────────────────────────────────────────
  {
    number: 52,
    title: "Simplifying Algebraic Fractions",
    section: "Algebra & Sequences",
    topic: "Algebraic Manipulation",
    intro: `Simplifying algebraic fractions by cancelling common factors is a key manipulation skill needed for solving equations, working with formulas, and handling quadratic expressions. The golden rule is to factorise first, then cancel. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Simplifying Algebraic Fractions",
        body: `An **algebraic fraction** is a fraction where the numerator, denominator, or both contain algebraic expressions. Simplifying means cancelling any **common factors** shared by the numerator and denominator.\n\nFor numerical fractions you cancel by dividing top and bottom by the HCF. For algebraic fractions, do the same with algebraic factors.\n\n**Example 1 — simple:** 6x²/9x = (6/9) × (x²/x) = (2/3) × x = **2x/3**.\n\n**Example 2 — factorising first:** (x² − 4)/(x + 2). Factorise the numerator: x² − 4 = (x + 2)(x − 2). Cancel the common factor (x + 2): result = **(x − 2)**.\n\nAlways factorise before attempting to cancel — you cannot cancel individual terms inside un-factorised expressions.`,
        groups: [
          {
            subTitle: "Cancelling common factors",
            bullets: [
              "**Numerical factors:** cancel common number factors top and bottom — 12ab/8a = (12/8) × (ab/a) = (3/2)b = 3b/2.",
              "**Variable factors:** cancel by subtracting indices — x⁴/x² = x² (or x^(4−2)).",
              "**Combined factors:** 15x³y²/5xy = 3x²y (divide 15 by 5, subtract indices for x and y).",
              "**Factorised expressions:** (3(x+2))/(6(x+2)) = 3/6 = 1/2 (cancel the common bracket).",
              "**When the fraction simplifies to 1:** e.g. (x+3)/(x+3) = 1 for x ≠ −3.",
            ],
          },
          {
            subTitle: "Factorising the numerator or denominator first",
            bullets: [
              "**Difference of two squares:** x² − 9 = (x+3)(x−3); then (x²−9)/(x+3) = x−3.",
              "**Common factor first:** (6x + 12)/(4x + 8) = 6(x+2)/4(x+2) = 6/4 = 3/2.",
              "**Quadratic numerators:** factor x² + 5x + 6 = (x+2)(x+3); then cancel if denominator contains a matching bracket.",
              "**Never cancel additive terms:** (x + 5)/(x + 3) cannot be simplified — x is not a common factor of both numerator and denominator.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Cancelling across addition:** (x + 6)/6 ≠ x — you cannot cancel the 6 because it is added, not multiplied.",
              "**Forgetting to factorise first:** (x²−4)/(x+2) is not x² − 2; factorise to (x+2)(x−2) then cancel.",
              "**Domain restriction:** when cancelling (x+3)/(x+3) = 1, the original fraction is undefined at x = −3.",
              "**Incorrect index subtraction:** x³/x² = x¹ = x, not x⁵ — subtract, do not add, indices when dividing.",
            ],
          },
        ],
        examinerTips: [
          "Always factorise both numerator and denominator completely before attempting to cancel any factors.",
          "After cancelling, substitute a simple value to check the simplified fraction equals the original — e.g. check at x = 1.",
          "Spotting a difference of two squares (a² − b²) is a common short-cut in IGCSE algebraic fraction questions.",
          "Show your factorisation clearly; examiners award a method mark for a correct factorisation even if cancellation is wrong.",
        ],
        commonMistakes: [
          "Cancelling terms instead of factors — only factors (things multiplied together) can be cancelled, never terms that are added.",
          "Subtracting indices incorrectly when simplifying variable factors — x⁵/x² = x³, not x²·⁵.",
        ],
        recap: [
          "Simplify 15x²y / 10xy². [2]",
          "Simplify (x² − 9) / (x + 3). [2]",
          "Simplify (2x² + 4x) / (x² + 2x). [2]",
          "Explain why (x + 4) / 4 does not simplify to x. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 53. Algebraic Roots & Indices
  // ─────────────────────────────────────────────────────────────
  {
    number: 53,
    title: "Algebraic Roots & Indices",
    section: "Algebra & Sequences",
    topic: "Algebraic Manipulation",
    intro: `Applying the laws of indices to algebraic expressions — including negative and fractional exponents — is essential for simplifying expressions and solving equations involving powers. The five index laws must be known from memory for both IGCSE papers. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Algebraic Roots & Indices",
        body: `The **laws of indices** apply equally to numbers and algebraic expressions. The five key laws must be memorised:\n\n1. **Multiplication:** aᵐ × aⁿ = aᵐ⁺ⁿ — add exponents when multiplying like bases.\n2. **Division:** aᵐ ÷ aⁿ = aᵐ⁻ⁿ — subtract exponents when dividing like bases.\n3. **Power of a power:** (aᵐ)ⁿ = aᵐⁿ — multiply exponents.\n4. **Zero index:** a⁰ = 1 for all a ≠ 0.\n5. **Negative index:** a⁻ⁿ = 1/aⁿ — a negative power means the reciprocal.\n\n**Fractional indices** connect powers and roots: a^(1/2) = √a, a^(1/3) = ∛a, a^(m/n) = (ⁿ√a)ᵐ or equivalently ⁿ√(aᵐ).\n\n**Example:** simplify (x³y²)² ÷ x²y: = x⁶y⁴ ÷ x²y = x⁴y³.`,
        groups: [
          {
            subTitle: "Index laws with algebra",
            bullets: [
              "**Multiply same base:** x³ × x⁴ = x⁷ (add exponents); 2x² × 3x³ = 6x⁵.",
              "**Divide same base:** x⁷ ÷ x³ = x⁴ (subtract exponents); 12x⁵ ÷ 4x² = 3x³.",
              "**Power of a power:** (x²)³ = x⁶; (2x³)² = 4x⁶ (square both the coefficient and the variable).",
              "**Zero index:** x⁰ = 1 for any x ≠ 0; (3ab)⁰ = 1.",
              "**Negative index:** x⁻² = 1/x²; 3x⁻¹ = 3/x; never leave a negative index in a final answer unless instructed.",
            ],
          },
          {
            subTitle: "Fractional indices and roots",
            bullets: [
              "**Square root:** x^(1/2) = √x — the half-power is equivalent to the square root.",
              "**Cube root:** x^(1/3) = ∛x — the one-third power is the cube root.",
              "**General fractional index:** x^(m/n) = (ⁿ√x)ᵐ — take the root first, then raise to the power.",
              "**Example:** 8^(2/3) = (∛8)² = 2² = 4.",
              "**Applying to algebra:** (x⁶)^(1/2) = x³; (x⁴y²)^(1/2) = x²y.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Multiplying instead of adding indices:** x² × x³ ≠ x⁶; it equals x⁵ — add, not multiply.",
              "**Squaring only the variable, not the coefficient:** (3x²)² = 9x⁴, not 3x⁴.",
              "**Incorrect negative index:** x⁻² ≠ −x²; a negative index means reciprocal, not negation.",
              "**Wrong order for fractional index:** compute the root first with large bases: 27^(2/3) = (∛27)² = 9.",
            ],
          },
        ],
        examinerTips: [
          "Learn the five index laws verbatim — most exam errors stem from misremembering whether to add or subtract.",
          "For fractional index questions on paper 1 (non-calculator), choose the root-then-power order to keep numbers manageable.",
          "Show intermediate steps: write x³ × x⁴ = x^(3+4) = x⁷ — this earns method marks.",
          "When an expression contains both a coefficient and a variable, apply the index law to each part separately.",
        ],
        commonMistakes: [
          "Adding instead of multiplying exponents in a power of a power: (x²)³ = x⁶ (multiply 2 × 3), not x⁵.",
          "Treating a negative index as a negative number: 2⁻³ = 1/8, not −8.",
        ],
        recap: [
          "Simplify x⁵ × x³ ÷ x⁴. [2]",
          "Find the value of 16^(3/4). [2]",
          "Simplify (2x²y³)³. [2]",
          "Write 5x⁻² without a negative index. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 54. Expanding & Simplifying Single Brackets
  // ─────────────────────────────────────────────────────────────
  {
    number: 54,
    title: "Expanding & Simplifying Single Brackets",
    section: "Algebra & Sequences",
    topic: "Algebraic Manipulation",
    intro: `Expanding single brackets using the distributive law is one of the most used algebraic skills, applied in equation solving, factorising, and quadratic work. The key is to multiply every term inside the bracket by the term outside — not just the first one. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Expanding & Simplifying Single Brackets",
        body: `**Expanding a bracket** means multiplying every term inside the bracket by the term directly outside it. This is an application of the **distributive law**: a(b + c) = ab + ac.\n\n**Example 1:** 3(2x + 5) = 3 × 2x + 3 × 5 = **6x + 15**.\n\n**Example 2:** −2(x − 4) = −2 × x + (−2) × (−4) = **−2x + 8**. Notice that multiplying two negatives gives a positive.\n\nAfter expanding, **simplify** by collecting like terms when multiple brackets are present:\n4(x + 3) − 2(x − 1) = 4x + 12 − 2x + 2 = **2x + 14**.\n\nWhen a **variable multiplies a bracket**: x(x + 3) = x² + 3x.`,
        groups: [
          {
            subTitle: "The distributive law",
            bullets: [
              "**Positive multiplier:** 5(3x + 2) = 15x + 10 — multiply each term inside by 5.",
              "**Negative multiplier:** −4(2x − 3) = −8x + 12 — negative × negative = positive for the second term.",
              "**Variable multiplier:** a(a + 7) = a² + 7a — the variable multiplies itself to produce a squared term.",
              "**Mixed brackets:** 2x(3x − 5) = 6x² − 10x — multiply both the coefficient and the index by the outside term.",
              "**Fractional multiplier:** ½(6x − 4) = 3x − 2 — divide each term inside by 2.",
            ],
          },
          {
            subTitle: "Expanding then simplifying",
            bullets: [
              "**Multiple brackets:** expand each bracket separately first, then collect like terms.",
              "**Example:** 3(2x + 1) + 2(x − 4) = 6x + 3 + 2x − 8 = 8x − 5.",
              "**Subtracted brackets:** a − (b + c) = a − b − c; the minus distributes to both terms inside.",
              "**Example:** 5x − (2x + 3) = 5x − 2x − 3 = 3x − 3.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Only expanding the first term:** 3(x + 4) ≠ 3x + 4; the 3 must multiply both x and 4.",
              "**Sign errors with negative multipliers:** −(x + 2) = −x − 2, not −x + 2.",
              "**Forgetting to collect like terms after expanding two brackets** — always check for terms that can be combined.",
              "**Writing a² for a + a instead of 2a** — a × a = a², but a + a = 2a; know which operation applies.",
            ],
          },
        ],
        examinerTips: [
          "Circle the term outside the bracket and draw arrows to each term inside as a visual reminder to multiply everything.",
          "With a negative outside, check every sign change inside carefully — this is where most marks are lost.",
          "After expanding, always look for like terms to collect; examiners expect fully simplified expressions.",
          "For expand and simplify questions with two brackets, write an intermediate line after expanding before collecting terms.",
        ],
        commonMistakes: [
          "Distributing to only the first term inside the bracket and ignoring the rest.",
          "Changing − (x − 3) to −x − 3 instead of −x + 3 — a negative multiplied by a negative is positive.",
        ],
        recap: [
          "Expand and simplify 4(3x − 2) + 5(x + 1). [2]",
          "Expand −3(2x − 7). [1]",
          "Expand and simplify 2x(x + 4) − 3(x² − 2). [3]",
          "Show that 5(x + 2) − 2(x + 1) = 3x + 8. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 55. Expanding Double Brackets
  // ─────────────────────────────────────────────────────────────
  {
    number: 55,
    title: "Expanding Double Brackets",
    section: "Algebra & Sequences",
    topic: "Algebraic Manipulation",
    intro: `Expanding double brackets is fundamental to forming and solving quadratic equations, completing the square, and finding areas of shapes expressed algebraically. The FOIL method and the grid method both guarantee all four products are calculated. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Expanding Double Brackets",
        body: `To expand two brackets, every term in the first bracket must be multiplied by every term in the second. The standard method uses **FOIL** (First, Outer, Inner, Last) or the grid method.\n\n**FOIL for (x + 3)(x + 5):**\n- First: x × x = x²\n- Outer: x × 5 = 5x\n- Inner: 3 × x = 3x\n- Last: 3 × 5 = 15\n- Combine: x² + 5x + 3x + 15 = **x² + 8x + 15**\n\n**Special cases:**\n- **Perfect square:** (x + a)² = x² + 2ax + a² and (x − a)² = x² − 2ax + a²\n- **Difference of two squares:** (x + a)(x − a) = x² − a²\n\n**Example:** (2x − 1)(3x + 4) = 6x² + 8x − 3x − 4 = **6x² + 5x − 4**.`,
        groups: [
          {
            subTitle: "FOIL method",
            bullets: [
              "**First:** multiply the first terms of each bracket — (x)(x) = x².",
              "**Outer:** multiply the outer terms — (x)(d) in (x + c)(x + d).",
              "**Inner:** multiply the inner terms — (c)(x).",
              "**Last:** multiply the last terms of each bracket — (c)(d).",
              "**Collect:** add the four products and combine like terms (usually the two middle x-terms).",
              "**Check:** the coefficient of x equals the sum of the two constants; the constant term equals their product.",
            ],
          },
          {
            subTitle: "Special expansions to memorise",
            bullets: [
              "**Perfect square (sum):** (x + a)² = x² + 2ax + a² — the middle term is always twice the product of the two terms.",
              "**Perfect square (difference):** (x − a)² = x² − 2ax + a².",
              "**Difference of two squares:** (x + a)(x − a) = x² − a² — the middle terms cancel out.",
              "**Example:** (x + 7)(x − 7) = x² − 49; (x + 3)² = x² + 6x + 9.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Forgetting the two middle terms:** (x + 3)² ≠ x² + 9; it is x² + 6x + 9.",
              "**Sign errors in the Last term:** (x − 3)(x − 5) gives +15 at the end (negative × negative).",
              "**Only four products, not six:** when expanding two brackets, there are exactly four products (F, O, I, L).",
              "**Not collecting like terms:** leave as x² + 5x + 3x + 15 is not fully simplified; collect to x² + 8x + 15.",
            ],
          },
        ],
        examinerTips: [
          "Use the grid (box) method if you lose track with FOIL — draw a 2×2 table and fill each cell with a product.",
          "Memorise the three special expansions — perfect square and difference of two squares appear very frequently in exams.",
          "After expanding, check your constant term equals the product of the two numbers in the original brackets.",
          "For (ax + b)(cx + d) types, remember to also multiply the coefficients: 2x × 3x = 6x², not 6x.",
        ],
        commonMistakes: [
          "Squaring each term separately: (x + 3)² ≠ x² + 9. The cross-term 2 × x × 3 = 6x is always missing from this error.",
          "Sign errors in the Last product when both constants are negative: (x − 2)(x − 5) has last term = (−2)(−5) = +10.",
        ],
        recap: [
          "Expand and simplify (x + 4)(x − 3). [2]",
          "Expand (2x + 1)(3x − 5). [2]",
          "Expand and simplify (x − 6)². [2]",
          "Without expanding fully, write down the constant term of (x + 11)(x − 4). [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 56. Factorising Out Terms
  // ─────────────────────────────────────────────────────────────
  {
    number: 56,
    title: "Factorising Out Terms",
    section: "Algebra & Sequences",
    topic: "Algebraic Manipulation",
    intro: `Factorising — the reverse of expanding — is essential for solving quadratic equations, simplifying fractions, and presenting algebraic answers in their simplest form. Always check your answer by expanding it back. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Factorising Out Terms",
        body: `**Factorising** means rewriting an expression as a product of its factors. The first type is **taking out a common factor**: find the highest common factor (HCF) of all terms and place it outside a bracket.\n\n**Example 1:** factorise 6x + 10. HCF of 6 and 10 is 2. Answer: **2(3x + 5)**. Check: 2 × 3x + 2 × 5 = 6x + 10 ✓\n\n**Example 2:** factorise 12x² − 8xy. HCF of coefficients is 4; both terms have a factor of x. Answer: **4x(3x − 2y)**.\n\n**Factorising a quadratic x² + bx + c** requires two brackets (x + p)(x + q) where p + q = b and p × q = c.\n\n**Example 3:** factorise x² + 7x + 12. Find two numbers that add to 7 and multiply to 12 → p = 3, q = 4. Answer: **(x + 3)(x + 4)**.`,
        groups: [
          {
            subTitle: "Common factor (HCF method)",
            bullets: [
              "**Find the HCF** of all coefficients and all variable parts.",
              "**Divide every term** by the HCF — the results go inside the bracket.",
              "**Write:** HCF × (remaining terms) — e.g. 15a² + 10ab = 5a(3a + 2b).",
              "**Check:** expand your answer to verify it matches the original expression.",
              "**Fully factorise:** check the bracket itself cannot be factorised further.",
            ],
          },
          {
            subTitle: "Factorising quadratics x² + bx + c",
            bullets: [
              "**Find two numbers** p and q such that p + q = b (coefficient of x) and p × q = c (constant term).",
              "**Write:** (x + p)(x + q) using those two numbers.",
              "**Example:** x² + 5x + 6 — find numbers summing to 5 and multiplying to 6 → 2 and 3 → (x + 2)(x + 3).",
              "**Negative constants:** x² − x − 6 → find numbers summing to −1 and multiplying to −6 → −3 and 2 → (x − 3)(x + 2).",
              "**Difference of two squares:** x² − 16 = (x + 4)(x − 4); check for this pattern first.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not fully factorising:** 4x + 8 → 2(2x + 4) is not fully factorised; take out 4 to get 4(x + 2).",
              "**Wrong signs in quadratic factorisation:** check p × q matches the sign of c, not just the magnitude.",
              "**Missing the difference of two squares:** x² − 25 = (x+5)(x−5), not (x−5)².",
              "**Leaving an expression that cannot be factorised as a product** — x² + 9 is irreducible over integers.",
            ],
          },
        ],
        examinerTips: [
          "Always check factorised answers by expanding — a 20-second check can recover marks if you spot an error.",
          "For quadratic factorisation, list factor pairs of c systematically and check which pair sums to b.",
          "In 'fully factorise' questions, look for a common factor first, then check whether the resulting bracket is a quadratic that can be factorised again.",
          "Spot the difference of two squares pattern instantly: a² − b² = (a+b)(a−b) — no middle term means no cross-term.",
        ],
        commonMistakes: [
          "Extracting a common factor that is not the highest — e.g. taking 2 instead of 4 from 8x + 12 gives 2(4x + 6), not fully factorised.",
          "Getting the signs wrong in quadratic brackets — always verify by expanding your two-bracket answer.",
        ],
        recap: [
          "Factorise fully 12x² + 18x. [2]",
          "Factorise x² + 9x + 20. [2]",
          "Factorise x² − 25. [1]",
          "Factorise x² − 3x − 10. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 57. Solving Linear Equations
  // ─────────────────────────────────────────────────────────────
  {
    number: 57,
    title: "Solving Linear Equations",
    section: "Algebra & Sequences",
    topic: "Equations",
    intro: `Solving linear equations — where the highest power of the unknown is 1 — is a core skill tested across every IGCSE Mathematics paper. The balance principle: whatever you do to one side, do the same to the other. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Solving Linear Equations",
        body: `A **linear equation** contains an unknown (e.g. x) raised only to the power of 1 and can be solved by performing the same operation to both sides to isolate the unknown.\n\n**Balance principle:** whatever you do to one side of an equation, do the same to the other. The goal is to get the unknown alone on one side.\n\n**Example 1:** solve 3x + 7 = 22.\n- Subtract 7 from both sides: 3x = 15\n- Divide both sides by 3: x = **5**\n\n**Example 2:** solve 5 − 2x = 11.\n- Subtract 5: −2x = 6\n- Divide by −2: x = **−3**\n\nAlways check by substituting the solution back into the original equation.`,
        groups: [
          {
            subTitle: "Steps to solve a linear equation",
            bullets: [
              "**Step 1 — expand brackets** (if present) using the distributive law.",
              "**Step 2 — collect x-terms** on one side and constants on the other.",
              "**Step 3 — simplify** each side to get ax = b.",
              "**Step 4 — divide** both sides by the coefficient of x to find x = b/a.",
              "**Step 5 — check** by substituting your answer into the original equation.",
            ],
          },
          {
            subTitle: "Types of linear equations",
            bullets: [
              "**One-step:** 4x = 20 → divide both sides by 4 → x = 5.",
              "**Two-step:** 2x − 3 = 7 → add 3: 2x = 10 → divide by 2: x = 5.",
              "**With subtraction of x:** 10 − 3x = 1 → subtract 10: −3x = −9 → divide by −3: x = 3.",
              "**Fractional answer:** 5x = 7 → x = 7/5 or 1.4 — leave as a fraction unless asked for a decimal.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Dividing by a negative coefficient incorrectly:** −2x = 6 → x = 6 ÷ (−2) = −3, not +3.",
              "**Applying an operation to only one term:** if you add 5 to both sides, add 5 to the entire side, not just one term.",
              "**Not simplifying both sides first** when each side has like terms.",
              "**Leaving x on both sides** — always collect all x-terms to one side before solving.",
            ],
          },
        ],
        examinerTips: [
          "Show each step on a new line — examiners can award a method mark if the final answer is wrong but the method is clear.",
          "If you get a fractional coefficient (e.g. ½x = 4), multiply both sides by the denominator (multiply by 2: x = 8).",
          "Always substitute your answer back to check — if LHS ≠ RHS, you have made an error somewhere.",
          "With negative answers, double-check the sign: a common trap is solving −x = 5 as x = 5 instead of x = −5.",
        ],
        commonMistakes: [
          "Adding the same number to one side but subtracting it from the other — operations must be identical on both sides.",
          "Forgetting to change the sign when moving a term across the equals sign — always perform an inverse operation.",
        ],
        recap: [
          "Solve 4x − 5 = 11. [2]",
          "Solve 7 − 3x = 1. [2]",
          "Find the value of y if 5y + 12 = 2y − 3. [2]",
          "Solve 2(3x + 1) = 20. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 58. Equations with Brackets & Fractions
  // ─────────────────────────────────────────────────────────────
  {
    number: 58,
    title: "Equations with Brackets & Fractions",
    section: "Algebra & Sequences",
    topic: "Equations",
    intro: `Equations involving brackets and algebraic fractions require additional steps — expanding and clearing denominators — before applying the standard solve method. These questions regularly appear on Paper 2 and can be worth 3–4 marks each. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Equations with Brackets & Fractions",
        body: `**Equations with brackets:** expand any brackets first using the distributive law, collect like terms, then solve as a standard linear equation.\n\n**Example:** 3(2x − 4) = 2(x + 6)\n- Expand: 6x − 12 = 2x + 12\n- Subtract 2x: 4x − 12 = 12\n- Add 12: 4x = 24\n- Divide by 4: x = **6**\n\n**Equations with fractions:** multiply every term by the **lowest common denominator (LCD)** to clear all fractions before solving.\n\n**Example:** (x + 1)/3 = (2x − 5)/4\n- LCD of 3 and 4 is 12; multiply all terms by 12:\n- 4(x + 1) = 3(2x − 5)\n- 4x + 4 = 6x − 15\n- 4 + 15 = 6x − 4x → 19 = 2x → x = **9.5**`,
        groups: [
          {
            subTitle: "Solving with brackets",
            bullets: [
              "**Expand all brackets** as the first step — do not try to solve before expanding.",
              "**Collect like terms** on each side separately before moving terms across the equals sign.",
              "**Example:** 5(x − 2) − 3(x + 1) = 7 → 5x − 10 − 3x − 3 = 7 → 2x − 13 = 7 → 2x = 20 → x = 10.",
              "**Nested brackets:** work from the inside out — expand innermost brackets first.",
            ],
          },
          {
            subTitle: "Clearing fractions",
            bullets: [
              "**Find the LCD** of all denominators in the equation.",
              "**Multiply every term** (on both sides) by the LCD to eliminate all fractions.",
              "**Example:** x/2 + x/3 = 5 → LCD = 6 → 3x + 2x = 30 → 5x = 30 → x = 6.",
              "**Mixed fractions and integers:** when one term is an integer, it has denominator 1 — still multiply it by the LCD.",
              "**Single fraction = integer:** (3x + 2)/5 = 4 → multiply both sides by 5 → 3x + 2 = 20 → x = 6.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not multiplying every term by the LCD** — the LCD must multiply all terms on both sides, including integer terms.",
              "**Errors when expanding after multiplying by LCD** — especially when the numerator contains more than one term.",
              "**Forgetting the bracket after multiplying a fraction:** (x + 1)/3 × 3 = x + 1, not x + 1/3.",
              "**Incorrect LCD:** find the LCM of the denominators, not just the product — for 4 and 6, the LCD is 12, not 24.",
            ],
          },
        ],
        examinerTips: [
          "With fraction equations, clearly show the step where you multiply by the LCD — write 'multiply all terms by [LCD]'.",
          "After clearing fractions, check your resulting equation has no fractions, then solve normally.",
          "Bracket expansion errors are the most common source of marks lost here — write out every product explicitly.",
          "Substitute your answer back into the original fractional equation to verify correctness.",
        ],
        commonMistakes: [
          "Multiplying only the numerator when clearing a fraction rather than the whole term on both sides.",
          "Forgetting to distribute when expanding brackets after multiplying by the LCD.",
        ],
        recap: [
          "Solve 3(2x + 1) = 4(x − 3). [3]",
          "Solve x/4 + x/6 = 5. [3]",
          "Solve (2x − 1)/3 = (x + 4)/5. [3]",
          "Solve 2(x + 3) − (x − 1) = 12. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 59. Equations with Unknowns on Both Sides
  // ─────────────────────────────────────────────────────────────
  {
    number: 59,
    title: "Equations with Unknowns on Both Sides",
    section: "Algebra & Sequences",
    topic: "Equations",
    intro: `When the unknown appears on both sides of an equation, the key step is collecting all variable terms onto one side before solving. This technique is applied throughout IGCSE algebra and is frequently combined with bracket expansion. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Equations with Unknowns on Both Sides",
        body: `When an equation has the unknown on both sides, e.g. 5x + 3 = 2x + 12, **collect all x-terms on one side** by adding or subtracting the smaller x-term from both sides.\n\n**Example:** 5x + 3 = 2x + 12\n- Subtract 2x: 3x + 3 = 12\n- Subtract 3: 3x = 9\n- Divide by 3: x = **3**\n\n**With brackets:** expand first, then collect unknowns.\n\n**Example:** 4(x + 1) = 2(x − 5) + 2\n- Expand: 4x + 4 = 2x − 10 + 2 = 2x − 8\n- Subtract 2x: 2x + 4 = −8\n- Subtract 4: 2x = −12\n- Divide by 2: x = **−6**\n\nAlways move the **smaller x-coefficient** so the remaining coefficient stays positive — this reduces sign errors.`,
        groups: [
          {
            subTitle: "Strategy for unknowns on both sides",
            bullets: [
              "**Identify both x-terms** — one on each side of the equals sign.",
              "**Subtract the smaller** x-term from both sides to gather x on one side.",
              "**Example:** 7x − 1 = 3x + 11 → subtract 3x → 4x − 1 = 11 → x = 3.",
              "**Keep coefficient positive** — it is easier to solve 4x = 12 than −4x = −12.",
              "**Verify** by substituting back into the original equation.",
            ],
          },
          {
            subTitle: "Combining with brackets",
            bullets: [
              "**Expand all brackets first** — do not try to collect x-terms while brackets are still present.",
              "**Example:** 3(x + 4) = x + 20 → 3x + 12 = x + 20 → 2x = 8 → x = 4.",
              "**Negative leading coefficient:** if you end up with −3x = 6, divide both sides by −3 to get x = −2.",
              "**Expressions that simplify to 0 = 0:** means the equation is an identity, true for all x.",
              "**Expressions that simplify to a ≠ 0:** e.g. 5 = 0 has no solution.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Moving terms without inverting the operation:** 5x = 3x + 8 → subtract 3x, do not 'move' it.",
              "**Sign error when subtracting a negative:** 3x − (−2x) = 3x + 2x = 5x, not 3x − 2x = x.",
              "**Expanding brackets after moving terms:** always expand first, then move — don't swap the order.",
              "**Thinking there must always be a unique solution:** some equations are identities (all x) or inconsistent (no solution).",
            ],
          },
        ],
        examinerTips: [
          "Always check which x-term is smaller and subtract that from both sides to avoid negative coefficients.",
          "If you end up with 0x = 0 or 0 = 5, write a sentence explaining the outcome — these are valid mathematical answers.",
          "Show the step 'subtract Nx from both sides' explicitly rather than jumping to the simplified version.",
          "A quick check: substitute x into both sides of the original equation; if equal, the solution is correct.",
        ],
        commonMistakes: [
          "Subtracting a term from one side but adding it to the other — always apply the same operation to both sides.",
          "Forgetting to expand brackets before collecting unknowns — trying to collect before expanding creates errors.",
        ],
        recap: [
          "Solve 7x + 2 = 3x + 18. [2]",
          "Solve 5(x − 1) = 2(x + 7). [3]",
          "Solve 4x − 3 = 10 − x. [2]",
          "Explain what it means when an equation simplifies to 3 = 3. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 60. Forming Equations from Words
  // ─────────────────────────────────────────────────────────────
  {
    number: 60,
    title: "Forming Equations from Words",
    section: "Algebra & Sequences",
    topic: "Equations",
    intro: `Translating a written scenario into an algebraic equation and solving it is a key problem-solving skill, often worth 4–5 marks on IGCSE papers. The process — define, express, equate, solve, interpret — applies to any word problem. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Forming Equations from Words",
        body: `**Forming an equation** means translating a written problem into algebra by assigning a variable to the unknown quantity and expressing all given conditions algebraically.\n\n**Method:**\n1. Define your variable — state what x (or n) represents, including units.\n2. Write algebraic expressions for each quantity described.\n3. Use the given condition (totals, equalities, relationships) to write an equation.\n4. Solve the equation and interpret the answer in context.\n\n**Example:** "I think of a number, double it, and add 5. The result is 21."\n- Let x = the number.\n- Expression: 2x + 5\n- Equation: 2x + 5 = 21\n- Solve: 2x = 16, x = **8**\n\n**Example 2:** "Three consecutive integers have a sum of 51."\n- Let the integers be n, n+1, n+2.\n- Equation: n + (n+1) + (n+2) = 51 → 3n + 3 = 51 → n = 16. Integers: 16, 17, 18.`,
        groups: [
          {
            subTitle: "Key translation words",
            bullets: [
              "**'sum of'** → addition: 'the sum of x and 7' → x + 7.",
              "**'less than' / 'more than'** → subtraction/addition: '5 less than x' → x − 5; '3 more than 2x' → 2x + 3.",
              "**'times' / 'product of'** → multiplication: '4 times a number' → 4x.",
              "**'divided by' / 'half of'** → division: 'half of x' → x/2.",
              "**'is' / 'equals'** → = sign: 'twice x is 14' → 2x = 14.",
              "**'consecutive integers'** → n, n+1, n+2, … (or n−1, n, n+1 for symmetric problems).",
            ],
          },
          {
            subTitle: "Steps to form and solve",
            bullets: [
              "**Always define the variable** — 'let x be the number of sweets each child receives'.",
              "**Write an expression for each quantity** described in the problem.",
              "**Set up the equation** using the stated relationship or total.",
              "**Solve and interpret** — answer the original question in words, e.g. 'the number is 8'.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**'x less than y' vs 'x more than y':** 'x less than 10' means 10 − x; 'x more than 10' means 10 + x.",
              "**Using the wrong form for consecutive integers** — if even consecutive integers are needed, use 2n, 2n+2, 2n+4.",
              "**Not interpreting the solution** — if x = 3 represents the number of people, state that conclusion.",
              "**Setting up the equation backwards** — 'five more than twice x equals 17' is 2x + 5 = 17, not 17 + 2x = 5.",
            ],
          },
        ],
        examinerTips: [
          "Always state what your variable represents before writing any equation — this earns a define-variable mark.",
          "In 'form and solve' questions, show the equation you formed on a separate line from the solution work.",
          "If asked to 'verify' your answer, substitute back into the original words — not just the equation.",
          "Re-read the question after solving to ensure your numerical answer makes sense in context (e.g. people cannot be fractional).",
        ],
        commonMistakes: [
          "Confusing 'n less than x' with 'n is less than x' — the former is a subtraction expression; the latter is an inequality.",
          "Forgetting to add 1 to consecutive integer expressions — consecutive integers are n, n+1, n+2, not n, n+2, n+4.",
        ],
        recap: [
          "I think of a number, multiply it by 3, and subtract 7. The result is 23. Form and solve an equation to find the number. [3]",
          "The sum of three consecutive integers is 90. Find the integers. [3]",
          "Ahmed is 5 years older than Ben. The sum of their ages is 37. Form an equation and find Ben's age. [3]",
          "A rectangle has length (2x + 3) cm and width (x − 1) cm. Its perimeter is 36 cm. Find x. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 61. Forming Equations from Shapes
  // ─────────────────────────────────────────────────────────────
  {
    number: 61,
    title: "Forming Equations from Shapes",
    section: "Algebra & Sequences",
    topic: "Equations",
    intro: `Geometric problems — where sides, angles, or perimeters are expressed algebraically — are a classic IGCSE context for forming and solving equations. Using the correct geometric property (angle sum, equal sides, perimeter formula) is the key first step. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Forming Equations from Shapes",
        body: `Many IGCSE problems give shapes with side lengths or angles expressed in terms of x, then provide a measurement such as the perimeter, area, or angle sum. The approach is:\n1. Write an expression using the algebraic side lengths or angles.\n2. Set the expression equal to the given value.\n3. Solve the resulting equation.\n4. Substitute back to find individual lengths/angles if required.\n\n**Perimeter example:** a triangle has sides (2x + 1), (x + 3), and (3x − 2). Perimeter = 32 cm.\n- Sum sides: (2x+1) + (x+3) + (3x−2) = 32\n- Simplify: 6x + 2 = 32 → 6x = 30 → x = 5\n- Sides: 11, 8, 13 cm ✓ (sum = 32)\n\n**Angle example:** angles in a triangle are (2x + 10)°, (3x − 5)°, and (x + 15)°. Use angles in a triangle sum to 180°.\n- 2x+10 + 3x−5 + x+15 = 180 → 6x + 20 = 180 → x = **26.67** — always check for integer x.`,
        groups: [
          {
            subTitle: "Geometric facts used to form equations",
            bullets: [
              "**Perimeter:** sum of all side lengths equals the given perimeter.",
              "**Angles in a triangle:** sum = 180° → equation: (angle 1) + (angle 2) + (angle 3) = 180.",
              "**Angles in a quadrilateral:** sum = 360° → set sum of four expressions equal to 360.",
              "**Isosceles triangle:** two sides are equal — set their expressions equal: 2x + 1 = x + 7 → x = 6.",
              "**Regular polygon:** all sides equal — set any two side expressions equal, or use perimeter ÷ n = one side.",
            ],
          },
          {
            subTitle: "Steps for shape equations",
            bullets: [
              "**Identify the geometric property** linking the given expressions (perimeter, angle sum, equal sides).",
              "**Write the equation** using that property.",
              "**Solve for x** using standard linear equation techniques.",
              "**Find the required quantity:** substitute x back to find any specific lengths or angles the question asks for.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Forgetting to add all sides/angles:** in a pentagon (5 sides), sum all 5 expressions — a common omission is one term.",
              "**Not substituting x back:** questions often ask for the actual length or angle, not just the value of x.",
              "**Using the wrong angle sum:** triangles sum to 180°, quadrilaterals to 360°, pentagons to 540°.",
              "**Equal sides ≠ equal expressions set to 0:** for isosceles sides, set the two side expressions equal to each other.",
            ],
          },
        ],
        examinerTips: [
          "Label each step clearly — 'angles in a triangle sum to 180°' tells the examiner which geometric property you are using.",
          "After solving for x, calculate each side/angle individually and verify the total matches the stated value.",
          "For perimeter questions, write out the perimeter formula using the algebraic expressions before simplifying.",
          "With angle questions, check all calculated angles are positive and reasonable (between 0° and 180° for a triangle).",
        ],
        commonMistakes: [
          "Setting the perimeter equal to the sum of only two sides and forgetting the third.",
          "Stopping at x without calculating the actual side lengths or angles that the question asks for.",
        ],
        recap: [
          "A quadrilateral has angles (2x + 10)°, (3x)°, (x + 20)°, and (4x − 10)°. Find the value of x. [3]",
          "An equilateral triangle has sides (3x − 1) cm and (2x + 4) cm. Form and solve an equation to find x. [3]",
          "A rectangle has perimeter 56 cm. Its length is (2y + 3) cm and width is (y − 1) cm. Find y and the dimensions. [4]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 62. Interpreting Inequalities
  // ─────────────────────────────────────────────────────────────
  {
    number: 62,
    title: "Interpreting Inequalities",
    section: "Algebra & Sequences",
    topic: "Inequalities & Formulas",
    intro: `Understanding inequality notation — what <, >, ≤, ≥ mean, and how to list integer solutions — is essential for the full range of inequality questions on both papers. The critical difference from equations: when you divide or multiply by a negative, the inequality sign reverses. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Interpreting Inequalities",
        body: `An **inequality** shows that two expressions are not equal, using one of four symbols:\n- **<** means 'strictly less than'\n- **>** means 'strictly greater than'\n- **≤** means 'less than or equal to'\n- **≥** means 'greater than or equal to'\n\n**Reading an inequality:** 3 ≤ x < 7 means x is at least 3 AND strictly less than 7. The integer values of x satisfying this are **3, 4, 5, 6**.\n\n**Key distinction:** x > 2 does not include 2 itself; x ≥ 2 does include 2.\n\n**Solving an inequality** works like solving an equation, **except**: when you multiply or divide both sides by a **negative number**, the inequality sign **reverses**.\n\n**Example:** −3x > 12 → divide by −3 and reverse the sign → x < −4.`,
        groups: [
          {
            subTitle: "Inequality symbols and meanings",
            bullets: [
              "**x < 5:** x can be any value strictly less than 5; integers satisfying x < 5 are …, 2, 3, 4.",
              "**x ≥ −2:** x can be −2 or any value greater; integers include −2, −1, 0, 1, 2, …",
              "**Combined: 1 < x ≤ 4:** x is strictly greater than 1 and at most 4; integer solutions are 2, 3, 4.",
              "**Listing integers:** when asked to 'write down the integers satisfying n > −3 and n ≤ 2', list: −2, −1, 0, 1, 2.",
              "**Closed vs open endpoints:** ≤ or ≥ includes the endpoint; < or > excludes it (open endpoint).",
            ],
          },
          {
            subTitle: "Solving linear inequalities",
            bullets: [
              "**Treat like an equation** except for the sign-reversal rule.",
              "**Add/subtract:** 2x + 3 > 7 → 2x > 4 → x > 2 (sign unchanged).",
              "**Divide by positive:** 4x ≤ 20 → x ≤ 5 (sign unchanged).",
              "**Divide by negative — reverse sign:** −3x < 9 → x > −3 (sign reverses).",
              "**Example:** 5 − 2x > 1 → −2x > −4 → divide by −2 and reverse → x < 2.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Forgetting to reverse the inequality when dividing by a negative** — the most common single mistake in inequality questions.",
              "**Including the boundary value for a strict inequality:** x < 5 does not include 5.",
              "**Using the wrong symbol direction:** 'x is at least 3' means x ≥ 3, not x > 3.",
              "**Listing integers outside the boundary:** for 2 < x ≤ 6, do not include 2 — only 3, 4, 5, 6.",
            ],
          },
        ],
        examinerTips: [
          "When dividing or multiplying by a negative, write a note in your working: 'dividing by negative — reverse sign'. Examiners look for this awareness.",
          "Listing integers: be methodical — start at the smallest valid integer and count up to the largest.",
          "Always double-check whether endpoints are included by looking at the inequality symbol (≤/≥ includes; </> excludes).",
          "Re-read 'at least', 'at most', 'more than', and 'less than' carefully — these map to specific symbols.",
        ],
        commonMistakes: [
          "Not reversing the inequality sign when multiplying or dividing by a negative number.",
          "Including excluded boundary values — x < 7 means 7 is not a valid solution.",
        ],
        recap: [
          "Write down all the integer values of n that satisfy −2 < n ≤ 3. [2]",
          "Solve the inequality 3x − 4 ≥ 11. [2]",
          "Solve 5 − 2x > 9 and state whether x = −2 is in the solution set. [3]",
          "Find the largest integer n such that 4n < 30. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 63. Representing Inequalities on a Number Line
  // ─────────────────────────────────────────────────────────────
  {
    number: 63,
    title: "Representing Inequalities on a Number Line",
    section: "Algebra & Sequences",
    topic: "Inequalities & Formulas",
    intro: `Drawing inequalities on a number line is a visual skill tested directly in IGCSE: open circles, filled circles, and arrows must be drawn correctly to earn full marks. Reading a number line diagram back into an inequality is equally common. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Representing Inequalities on a Number Line",
        body: `**Number line conventions for inequalities:**\n- **Open circle (○)** at the boundary value — used for strict inequalities (< or >) where the boundary is **not included**.\n- **Closed/filled circle (●)** at the boundary — used for ≤ or ≥ where the boundary **is included**.\n- **Arrow or line segment** showing the direction of the solution set.\n\n**Examples:**\n- x > 3: open circle at 3, arrow pointing right.\n- x ≤ −1: filled circle at −1, arrow pointing left.\n- −2 < x ≤ 4: open circle at −2, filled circle at 4, line segment between them.\n\n**Reading from a number line:** identify the boundary values and whether the circles are open or filled to write the inequality.`,
        groups: [
          {
            subTitle: "Circle and arrow conventions",
            bullets: [
              "**Open circle:** boundary excluded → strict inequalities < and > — e.g. x > 2 uses open circle at 2.",
              "**Filled circle:** boundary included → non-strict inequalities ≤ and ≥ — e.g. x ≤ 5 uses filled circle at 5.",
              "**Arrow pointing right:** extends infinitely in the positive direction — used for x > a or x ≥ a.",
              "**Arrow pointing left:** extends infinitely in the negative direction — used for x < a or x ≤ a.",
              "**Segment between two circles:** represents a combined inequality — both endpoint types must be drawn correctly.",
            ],
          },
          {
            subTitle: "Reading and writing inequalities from diagrams",
            bullets: [
              "**Identify boundary values:** read the numbers at the circles.",
              "**Check circle type:** filled → ≤/≥; open → </>.",
              "**Determine direction:** if the arrow goes right from boundary a, the inequality is x > a or x ≥ a.",
              "**Combined inequalities:** a segment from −3 (open) to 5 (filled) means −3 < x ≤ 5.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Drawing a filled circle for a strict inequality** — x > 4 must have an open circle at 4; a filled circle incorrectly includes 4.",
              "**Arrow in the wrong direction** — x < 3 means values less than 3, so the arrow points left.",
              "**Forgetting both circles for combined inequalities** — a < x ≤ b needs two circles, not just one.",
              "**Reading open circles as included** — when reading a diagram, an open circle means that exact value is excluded.",
            ],
          },
        ],
        examinerTips: [
          "Draw the number line lightly first, place your circles, then draw the line or arrows — this order reduces errors.",
          "For combined inequalities, check both circles match their respective symbols before submitting.",
          "If the question says 'solve then represent', show the solving work separately before drawing the number line.",
          "Use a ruler for the line segments — a neat, clearly drawn number line is easier to mark correctly.",
        ],
        commonMistakes: [
          "Drawing an open circle for ≤ or a filled circle for < — always match the circle type to the inequality symbol.",
          "Drawing the arrow in the wrong direction — sketch a quick check value to confirm the direction.",
        ],
        recap: [
          "On a number line, represent the inequality −1 ≤ x < 4. [2]",
          "Write down the inequality shown by a number line with an open circle at 2 and an arrow pointing right. [1]",
          "Solve 2x + 1 ≥ 7 and represent the solution on a number line. [3]",
          "Write down the inequality represented by a number line with a filled circle at −3 and a filled circle at 5, with a line segment between them. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 64. Rearranging Formulas
  // ─────────────────────────────────────────────────────────────
  {
    number: 64,
    title: "Rearranging Formulas",
    section: "Algebra & Sequences",
    topic: "Inequalities & Formulas",
    intro: `Making a different variable the subject of a formula — by applying inverse operations — is a high-value skill tested on both IGCSE papers, often worth 3–4 marks. The method mirrors solving an equation: undo operations in reverse BIDMAS order. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Rearranging Formulas",
        body: `**Making x the subject** means rearranging so x appears alone on one side of the formula. Apply **inverse operations** in reverse BIDMAS order: undo addition/subtraction first, then multiplication/division, then powers/roots.\n\n**Example 1:** make x the subject of v = u + at.\n- Subtract u: v − u = at\n- Divide by a: (v − u)/a = t → **t = (v − u)/a**\n\n**Example 2 — with squares:** make r the subject of A = πr².\n- Divide by π: A/π = r²\n- Square root both sides: r = **√(A/π)**\n\n**Example 3 — x on both sides:** make x the subject of ax + b = cx + d.\n- Subtract cx: ax − cx + b = d → x(a − c) + b = d\n- Subtract b: x(a − c) = d − b\n- Divide by (a − c): **x = (d − b)/(a − c)**`,
        groups: [
          {
            subTitle: "Step-by-step rearrangement",
            bullets: [
              "**Identify the subject to make** — read the question carefully for 'make [variable] the subject'.",
              "**Treat the target variable as the unknown** and all others as constants.",
              "**Undo operations in reverse BIDMAS** — the last operation performed on the subject is undone first.",
              "**Collect terms of the target variable** on one side if it appears more than once.",
              "**Factorise out the target variable** if it appears in multiple terms after collecting.",
            ],
          },
          {
            subTitle: "Special cases",
            bullets: [
              "**Variable inside a square root:** √x = k → square both sides → x = k².",
              "**Variable inside a fraction:** if x is in the denominator, multiply both sides by the denominator first.",
              "**Example:** a = b/x → ax = b → x = b/a.",
              "**Variable appears twice:** collect both terms on one side, then factorise — P = ax + bx → P = x(a + b) → x = P/(a + b).",
              "**Power of the variable:** if x² is the subject, take the positive square root (or ± if both roots are needed).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not factorising when x appears twice:** ax + bx must be written as x(a + b) before dividing — cannot divide ax + bx by a.",
              "**Forgetting ± when square rooting:** A = x² → x = ±√A, but physical contexts often require only the positive root.",
              "**Incorrect inverse of a fraction:** to clear x from a denominator, multiply both sides by the full expression containing x.",
              "**Reversing operations in the wrong order:** undo the outer-most operation last (reverse BIDMAS).",
            ],
          },
        ],
        examinerTips: [
          "Write each step on a new line and state the operation you are performing — 'multiply both sides by 2', etc.",
          "After rearranging, substitute test values into both the original and rearranged formula to verify they give the same answer.",
          "If x appears in two separate terms, always collect them first before attempting to isolate x.",
          "Spotting 'x in the denominator' problems early saves time — multiply both sides by the denominator as the first step.",
        ],
        commonMistakes: [
          "Trying to divide ax + bx by a to get x + bx/a — you must factorise first: ax + bx = x(a+b), then divide by (a+b).",
          "Squaring only one side when taking a square root — both sides must be squared or square-rooted.",
        ],
        recap: [
          "Make t the subject of v = u + at. [2]",
          "Make r the subject of V = (4/3)πr³. [3]",
          "Make x the subject of 3x + 2y = 5x − 4. [3]",
          "Make n the subject of P = 2(n + m). [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 65. Solving Simultaneous Equations
  // ─────────────────────────────────────────────────────────────
  {
    number: 65,
    title: "Solving Simultaneous Equations",
    section: "Algebra & Sequences",
    topic: "Simultaneous Equations",
    intro: `Simultaneous equations — two equations in two unknowns — are solved by elimination or substitution. The solutions satisfy both equations at the same time, and the check step (substituting back into both equations) is essential. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Solving Simultaneous Equations",
        body: `**Simultaneous equations** have two (or more) equations that must be satisfied at the same time. For two linear equations in two unknowns, there is usually one solution pair (x, y).\n\n**Elimination method:** adjust one or both equations so the coefficients of one variable match, then add or subtract to eliminate that variable.\n\n**Example:** 3x + 2y = 16 and 5x − 2y = 24.\n- Add equations (y coefficients cancel): 8x = 40 → x = 5.\n- Substitute x = 5 into equation 1: 15 + 2y = 16 → y = 0.5.\n\n**Substitution method:** rearrange one equation to express one variable in terms of the other, then substitute into the second equation.\n\n**Example:** y = 2x − 1 and 3x + y = 14.\n- Substitute y: 3x + (2x − 1) = 14 → 5x = 15 → x = 3, y = 5.\n\nAlways substitute back to verify both equations are satisfied.`,
        groups: [
          {
            subTitle: "Elimination method steps",
            bullets: [
              "**Match coefficients:** multiply one or both equations so one variable has the same coefficient in both.",
              "**Add (opposite signs) or subtract (same signs):** eliminate that variable.",
              "**Solve the resulting equation** in one variable.",
              "**Back-substitute:** put the found value into either original equation to find the second variable.",
              "**Check:** substitute both values into the other original equation to confirm they satisfy it.",
            ],
          },
          {
            subTitle: "Substitution method steps",
            bullets: [
              "**Rearrange** the simpler equation to make one variable the subject.",
              "**Substitute** the expression into the other equation.",
              "**Solve** the resulting equation in one variable.",
              "**Find the second variable** by substituting back into the rearranged equation.",
              "**Check** both values in both original equations.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Adding when signs are the same:** if both equations have +3y, subtract them (not add) to eliminate y.",
              "**Not multiplying both equations correctly:** when scaling up, every term in an equation must be multiplied — not just the y-terms.",
              "**Back-substituting into the wrong equation** — use the simpler original equation to find the second value.",
              "**Forgetting to check:** a solution that satisfies only one equation is incorrect — always check both.",
            ],
          },
        ],
        examinerTips: [
          "Label equations (1) and (2) before starting — this makes your method clear and helps you avoid confusion.",
          "With the elimination method, write out the scaled equations explicitly before adding or subtracting.",
          "Choose the method that leads to smaller numbers — substitution is easier when one equation is already y = …",
          "The check step takes under a minute and can earn back a mark if you spot an arithmetic error.",
        ],
        commonMistakes: [
          "Adding equations when you should subtract — same signs means subtract to eliminate; opposite signs means add.",
          "Substituting into a modified (scaled) equation rather than one of the original equations.",
        ],
        recap: [
          "Solve simultaneously: 2x + y = 7 and x − y = 2. [3]",
          "Solve: 3x + 4y = 10 and 5x − 2y = 8. [4]",
          "Solve: y = 3x − 1 and 2x + y = 9. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 66. Forming Simultaneous Equations
  // ─────────────────────────────────────────────────────────────
  {
    number: 66,
    title: "Forming Simultaneous Equations",
    section: "Algebra & Sequences",
    topic: "Simultaneous Equations",
    intro: `Many real-world and geometric IGCSE problems require the student to construct and then solve a pair of simultaneous equations from given information. Defining variables clearly and finding two independent conditions are the two essential first steps. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Forming Simultaneous Equations",
        body: `**Forming simultaneous equations** requires identifying two separate relationships — each expressed as a linear equation — and then solving them together.\n\n**Step 1:** define two variables clearly (e.g. let x = cost of an apple, y = cost of a banana).\n**Step 2:** translate each condition in the problem into an equation.\n**Step 3:** solve the system using elimination or substitution.\n**Step 4:** interpret the solution in context.\n\n**Example:** "3 pens and 2 rulers cost £8. 5 pens and 4 rulers cost £14."\n- Let pen = x, ruler = y.\n- Equation 1: 3x + 2y = 8\n- Equation 2: 5x + 4y = 14\n- Solve: multiply eq.1 by 2 → 6x + 4y = 16; subtract eq.2 → x = 2. Then y = 1.\n\nAlways state the answer in terms of the original variables: "pens cost £2, rulers cost £1."`,
        groups: [
          {
            subTitle: "Setting up from word problems",
            bullets: [
              "**Define variables** explicitly — 'let x be…, let y be…'.",
              "**Two separate conditions** give two equations — look for 'total cost', 'combined age', 'sum of lengths', etc.",
              "**Unit consistency:** all quantities in an equation must use the same units.",
              "**Word clues:** 'costs', 'adds up to', 'combined', 'total' all signal where to place the equals sign.",
            ],
          },
          {
            subTitle: "Geometric and shape problems",
            bullets: [
              "**Perimeters:** express perimeter equations using algebraic side lengths — two shapes give two equations.",
              "**Angle problems:** two angle relationships (e.g. angle sum and equal angles) provide two equations.",
              "**Example:** a shape has two angles x and y. They sum to 180° and x = 2y + 15. Form and solve.",
              "**Speed/distance problems:** d = st; form two distance or time equations from two journeys.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Swapping x and y in one equation** — be consistent with which variable represents which quantity throughout.",
              "**Forming only one equation** — re-read the problem; there must be two independent pieces of information.",
              "**Not giving the answer in context** — always state what x and y represent and give units.",
              "**Forming the same equation twice** — if the equations are multiples of each other, one piece of information was not independent.",
            ],
          },
        ],
        examinerTips: [
          "Always write your variable definitions before writing any equation — this earns at least one mark and keeps your work organised.",
          "After solving, check your answers satisfy both original equations — not just one.",
          "Look for the second condition carefully; sometimes it is hidden in a phrase like 'difference in their ages is 5'.",
          "Show the full solution process; forming the equations correctly earns method marks even if the solve has an error.",
        ],
        commonMistakes: [
          "Forming equations with inconsistent units — mixing pence and pounds in the same equation.",
          "Interpreting the final answer as x = 2 without stating what x represents — always give a contextual answer.",
        ],
        recap: [
          "Five apples and three oranges cost £4.70. Two apples and six oranges cost £4.40. Form and solve a pair of simultaneous equations to find the cost of each fruit. [4]",
          "The sum of two numbers is 23 and their difference is 7. Find the two numbers. [3]",
          "In a triangle, angle A + angle B = 100° and angle A = 2 × angle B + 10°. Find both angles. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 67. Introduction to Sequences
  // ─────────────────────────────────────────────────────────────
  {
    number: 67,
    title: "Introduction to Sequences",
    section: "Algebra & Sequences",
    topic: "Sequences",
    intro: `Sequences — ordered lists of numbers following a rule — underpin work on nth terms, arithmetic and geometric progressions, and pattern recognition questions in IGCSE exams. Identifying the type of sequence is always the first step. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Introduction to Sequences",
        body: `A **sequence** is an ordered list of numbers called **terms**. Each term occupies a position: the 1st term (T₁), 2nd term (T₂), and so on. The rule connecting consecutive terms is called the **term-to-term rule**.\n\n**Arithmetic sequence (linear):** each term increases or decreases by a fixed amount called the **common difference** d. Example: 3, 7, 11, 15, … has d = +4.\n\n**Geometric sequence:** each term is multiplied by a fixed **common ratio** r. Example: 2, 6, 18, 54, … has r = 3.\n\n**Fibonacci-type sequences:** each term is the sum of the two preceding terms: 1, 1, 2, 3, 5, 8, 13, …\n\n**Other sequences:** triangular numbers (1, 3, 6, 10, …), square numbers (1, 4, 9, 16, …), cube numbers (1, 8, 27, …).`,
        groups: [
          {
            subTitle: "Types of sequences",
            bullets: [
              "**Arithmetic (linear):** constant difference — e.g. 5, 8, 11, 14, … (d = +3).",
              "**Geometric:** constant ratio — e.g. 1, 2, 4, 8, … (r = 2) or 81, 27, 9, 3, … (r = 1/3).",
              "**Quadratic:** differences between terms form an arithmetic sequence — e.g. 1, 4, 9, 16, 25 (second differences = 2).",
              "**Fibonacci-type:** Tₙ = Tₙ₋₁ + Tₙ₋₂ — e.g. 2, 5, 7, 12, 19, 31, …",
              "**Special sequences:** triangular (1, 3, 6, 10, …), square (1, 4, 9, 16, …), powers of 2 (1, 2, 4, 8, 16, …).",
            ],
          },
          {
            subTitle: "Term-to-term rules",
            bullets: [
              "**Arithmetic:** add (or subtract) the common difference each time — 'add 7' means d = 7.",
              "**Geometric:** multiply by the common ratio each time — 'multiply by 3' means r = 3.",
              "**Mixed rules:** some sequences have alternating operations — read carefully.",
              "**Writing the rule:** 'the next term is found by multiplying the previous term by 2 and adding 1' — verify by applying to known terms.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Assuming all sequences are arithmetic** — always check whether the differences are constant before concluding linear.",
              "**Confusing common difference and common ratio** — d is added in arithmetic; r is multiplied in geometric.",
              "**Calculating the wrong term** — count positions carefully; the 5th term is not found by adding d to the 4th term three times.",
              "**Forgetting negative or fractional ratios** — geometric sequences can decrease: 16, −8, 4, −2, … (r = −0.5).",
            ],
          },
        ],
        examinerTips: [
          "Always check the first few differences before naming a sequence — if differences are constant it is arithmetic; if ratios are constant it is geometric.",
          "For pattern-based sequences with shapes, write down the values term by term and then look for the rule.",
          "When a term-to-term rule is given, verify it by applying it to the first two or three terms before using it to extend the sequence.",
          "Learn to recognise special sequences instantly: square numbers, triangular numbers, and powers of 2 appear frequently.",
        ],
        commonMistakes: [
          "Describing a geometric sequence as arithmetic because the terms are increasing — always check ratios, not just differences.",
          "Extending a sequence by applying the difference to a term beyond the last — count positions carefully.",
        ],
        recap: [
          "Write down the next two terms of the sequence 2, 5, 8, 11, … and state the term-to-term rule. [2]",
          "A geometric sequence starts 3, 6, 12, … Write down the 6th term. [2]",
          "Identify whether the sequence 1, 4, 9, 16, 25 is arithmetic, geometric, or neither. Justify your answer. [2]",
          "The first two terms of a Fibonacci-type sequence are 2 and 7. Write down the next three terms. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 68. Continuing Sequences
  // ─────────────────────────────────────────────────────────────
  {
    number: 68,
    title: "Continuing Sequences",
    section: "Algebra & Sequences",
    topic: "Sequences",
    intro: `Finding the next term — or a specific later term — from a sequence's rule is a standard question type, requiring accurate application of the term-to-term rule. The most common error is using the wrong operation or applying it the wrong number of times. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Continuing Sequences",
        body: `To **continue a sequence**, you must first identify the rule that takes you from one term to the next (the **term-to-term rule**), then apply it repeatedly.\n\nFor **arithmetic sequences**, the rule is 'add the common difference d'. Check d is constant by computing term₂ − term₁, term₃ − term₂, … If these are equal, the sequence is arithmetic and you simply add d each time.\n\nFor **geometric sequences**, the rule is 'multiply by the common ratio r'. Check r by computing term₂/term₁, term₃/term₂, … If these are equal, multiply each term by r.\n\nFor **pattern-based sequences** (e.g. shapes in a grid), draw or extend the pattern and count the new elements.\n\n**Example:** continue 2, 6, 18, 54 for two more terms → rule is ×3 → 162, 486.`,
        groups: [
          {
            subTitle: "Finding the common difference or ratio",
            bullets: [
              "**Arithmetic — find d:** subtract consecutive terms: d = Tₙ − Tₙ₋₁. E.g. 11 − 7 = 4, so d = 4.",
              "**Geometric — find r:** divide consecutive terms: r = Tₙ / Tₙ₋₁. E.g. 18/6 = 3, so r = 3.",
              "**Consistency check:** verify the same d (or r) exists between every consecutive pair before concluding.",
              "**Negative differences:** a decreasing arithmetic sequence has a negative d — e.g. 20, 15, 10, … d = −5.",
              "**Fractional ratios:** 48, 24, 12, 6 has r = 1/2 — each term is halved.",
            ],
          },
          {
            subTitle: "Applying the rule to extend",
            bullets: [
              "**Arithmetic — keep adding d:** once d is known, add it to the last term to get the next.",
              "**Geometric — keep multiplying by r:** multiply the last term by r for each new term.",
              "**Non-standard rules:** some sequences have rules like 'multiply by 2 and subtract 1' — test your rule against all given terms.",
              "**Pattern sequences:** count the number of objects or squares added in each step and look for the repeating rule.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Wrong common difference:** calculating d = T₃ − T₁ instead of T₂ − T₁ — always use consecutive pairs.",
              "**Applying the rule the wrong number of times:** to find the 10th term from the 7th, apply the rule three times.",
              "**Geometric sequences that decrease:** r < 1 means each term is smaller — multiplying by 0.5 makes terms halve.",
              "**Assuming the sign stays positive** in a sequence with alternating signs like 4, −12, 36, −108 — the ratio is r = −3.",
            ],
          },
        ],
        examinerTips: [
          "Always verify your identified rule against all pairs of consecutive terms — not just the first two.",
          "Show the rule explicitly (e.g. '+ 7 each time') before listing the extended terms.",
          "For longer extensions (e.g. 'find the 8th term'), work term by term — do not try to shortcut without an nth term formula.",
          "Double-check by confirming the last given term can be reproduced by your rule applied from an earlier term.",
        ],
        commonMistakes: [
          "Extending an arithmetic sequence by adding the first term rather than the common difference.",
          "Applying the ratio incorrectly by multiplying the original term repeatedly instead of the most recent term.",
        ],
        recap: [
          "Find the next two terms of the sequence 5, 8, 11, 14, … [1]",
          "Continue the sequence 2, −4, 8, −16 for two more terms. [2]",
          "A sequence starts 100, 50, 25, 12.5. What is the next term? State the common ratio. [2]",
          "The term-to-term rule is 'multiply by 3 and subtract 2'. The first term is 1. Find the first four terms. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 69. nth Terms of Linear Sequences
  // ─────────────────────────────────────────────────────────────
  {
    number: 69,
    title: "nth Terms of Linear Sequences",
    section: "Algebra & Sequences",
    topic: "Sequences",
    intro: `Finding and using the nth term formula of an arithmetic sequence allows you to calculate any term directly — without listing all preceding terms. This is a standard IGCSE question worth 3–4 marks and uses the formula Tₙ = dn + b. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "nth Terms of Linear Sequences",
        body: `The **nth term** of a linear (arithmetic) sequence is a formula of the form **Tₙ = an + b**, where a is the **common difference** and b is a constant adjusted to match the first term.\n\n**Method to find the nth term:**\n1. Find the common difference d — this becomes the coefficient a.\n2. Write dn as a starting point.\n3. Find what constant b must be added/subtracted so that when n = 1 the formula gives T₁.\n4. Write the formula: Tₙ = dn + b.\n\n**Example:** 5, 8, 11, 14, …\n- d = 3, so start with 3n.\n- When n = 1: 3(1) = 3, but T₁ = 5; so b = 5 − 3 = 2.\n- nth term = **3n + 2**.\n- Check: T₄ = 3(4) + 2 = 14 ✓\n\n**Using the nth term:** if Tₙ = 3n + 2, to find the value of n when Tₙ = 50: 3n + 2 = 50 → n = 16.`,
        groups: [
          {
            subTitle: "Finding the nth term formula",
            bullets: [
              "**Coefficient = common difference:** in Tₙ = 4n + b, the coefficient 4 is always the common difference.",
              "**Find b:** substitute n = 1 and T₁ into Tₙ = dn + b and solve for b.",
              "**Shortcut:** b = T₁ − d (the first term minus the common difference).",
              "**Example:** 7, 10, 13, 16, … → d = 3; b = 7 − 3 = 4; nth term = 3n + 4.",
              "**Decreasing sequences:** d is negative — e.g. 20, 17, 14, … d = −3; nth term = −3n + 23.",
            ],
          },
          {
            subTitle: "Using the nth term formula",
            bullets: [
              "**Find the kth term:** substitute n = k into the formula — Tₙ = 5n − 2, T₁₀ = 5(10) − 2 = 48.",
              "**Find which term has a given value:** set Tₙ equal to the value and solve for n — must give a positive integer.",
              "**Check if a value is in the sequence:** solve Tₙ = target value; if n is a positive integer, yes; otherwise, no.",
              "**Example:** is 100 in the sequence 3n + 1? → 3n + 1 = 100 → n = 33 (integer) → YES, it is the 33rd term.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using b = T₀ (the zero-th term) shortcut incorrectly** — this shortcut works but only verify it for linear sequences.",
              "**Forgetting to verify the formula:** always check at least T₁ and T₂ to confirm your nth term is correct.",
              "**Saying a value is in a sequence without checking n is a positive integer** — n must be a whole positive number.",
              "**Using the wrong sign for b:** if d = 3 and T₁ = 2, then b = −1; Tₙ = 3n − 1, not 3n + 1.",
            ],
          },
        ],
        examinerTips: [
          "Always verify your nth term formula by substituting n = 1 and n = 2 and checking against the actual terms.",
          "When asked 'is X a term of the sequence?', form an equation and check whether the solution for n is a positive integer.",
          "If the common difference is not obvious, write out the differences explicitly — d is constant for a linear sequence.",
          "For the formula Tₙ = dn + b, remember b = T₁ − d is a quick shortcut that avoids solving a simultaneous equation.",
        ],
        commonMistakes: [
          "Writing the common difference as the constant in the formula rather than the coefficient of n.",
          "Claiming a value is not in the sequence after getting a non-integer n, without checking whether the equation had been set up correctly.",
        ],
        recap: [
          "Find the nth term of the sequence 4, 7, 10, 13, … [2]",
          "Find the 20th term of the sequence given by Tₙ = 5n − 3. [1]",
          "Is 97 a term of the sequence 3n + 1? Show your working. [2]",
          "Find the nth term of the sequence 15, 11, 7, 3, −1, … [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 70. Quadratic & Cubic Sequences
  // ─────────────────────────────────────────────────────────────
  {
    number: 70,
    title: "Quadratic & Cubic Sequences",
    section: "Algebra & Sequences",
    topic: "Sequences",
    intro: `Recognising and finding nth term formulas for quadratic and cubic sequences — where second or third differences are constant — is an extended-tier skill with high mark value. The method builds directly on linear sequence techniques by working with differences of differences. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Quadratic & Cubic Sequences",
        body: `**Quadratic sequences** have an nth term of the form Tₙ = an² + bn + c. Their key identifying feature is **constant second differences** (the differences of the differences).\n\n**Method to find a quadratic nth term:**\n1. Find first differences (D₁).\n2. Find second differences (D₂) — these are constant.\n3. The coefficient of n² is **a = D₂ ÷ 2**.\n4. Subtract an² from each term to leave a linear sequence; find its nth term (the bn + c part).\n5. Combine: Tₙ = an² + (bn + c).\n\n**Example:** 3, 8, 15, 24, 35, …\n- D₁: 5, 7, 9, 11, … ; D₂: 2, 2, 2 → a = 2/2 = 1\n- Subtract n²: 3−1=2, 8−4=4, 15−9=6, 24−16=8 → arithmetic, nth term = 2n\n- Full formula: Tₙ = **n² + 2n**\n\n**Cubic sequences** have constant third differences; their nth term involves n³. At IGCSE, recognising that third differences are constant and stating the form Tₙ = an³ + … is the expectation.`,
        groups: [
          {
            subTitle: "Identifying quadratic sequences",
            bullets: [
              "**First differences are not constant** — this rules out a linear sequence.",
              "**Second differences are constant** — this confirms a quadratic sequence.",
              "**Coefficient of n²:** a = (constant second difference) ÷ 2.",
              "**Example:** 1, 4, 9, 16, 25 — first differences: 3, 5, 7, 9; second differences: 2, 2, 2 → a = 1; Tₙ = n².",
              "**Negative leading coefficient:** if the sequence decreases after peaking, a may be negative.",
            ],
          },
          {
            subTitle: "Building the quadratic nth term",
            bullets: [
              "**Step 1:** compute first differences (D₁) and second differences (D₂).",
              "**Step 2:** find a = D₂ ÷ 2.",
              "**Step 3:** subtract an² from each term to get a residual sequence.",
              "**Step 4:** find the nth term of the residual (it will be linear: bn + c).",
              "**Step 5:** write Tₙ = an² + bn + c and verify against the original terms.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Stopping at first differences** — a quadratic looks like it has 'increasing differences'; always compute second differences to confirm.",
              "**Incorrect division for a:** a = D₂/2, not D₂ — always halve the constant second difference.",
              "**Arithmetic errors in the residual:** subtract an² carefully; a slip here makes the entire formula wrong.",
              "**Not verifying the formula:** substitute n = 1, 2, and 3 into your Tₙ formula to confirm it generates the original terms.",
            ],
          },
        ],
        examinerTips: [
          "Set out first and second differences in a clear table — examiners can award a mark for correct differences even if the final formula has an error.",
          "After finding a = D₂/2, immediately write out an² for n = 1, 2, 3, … and subtract term by term to find the linear part.",
          "Always verify your formula: Tₙ formula substituted at n = 1 must equal T₁ exactly.",
          "For cubic sequences at IGCSE, finding constant third differences is the key step; state that the nth term has the form an³ + bn² + cn + d.",
        ],
        commonMistakes: [
          "Using a = D₂ instead of D₂/2 — this produces a formula that grows twice as fast as the actual sequence.",
          "Skipping the verification step and submitting an incorrect formula — always check at least three terms.",
        ],
        recap: [
          "Find the nth term of the quadratic sequence 2, 5, 10, 17, 26, … [3]",
          "Show that the sequence 1, 8, 27, 64, 125 has constant third differences. [3]",
          "The nth term of a sequence is 2n² − n + 1. Find the 5th term and the first term that exceeds 100. [3]",
          "Explain how to identify whether a sequence is linear or quadratic using differences. [2]",
        ],
      },
    ],
  },
];
