import type { Chapter } from "./types";

// mathematics-chapter-2.ts ‚Äî chapters 16-47 (Number part 2: Powers & Roots through Estimation)
export const MATHEMATICS_CHAPTERS_2: Chapter[] = [
  // ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ
  // 16. Powers & Roots
  // ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ
  {
    number: 16,
    title: "Powers & Roots",
    section: "Number",
    topic: "Factors, Primes & Indices",
    intro: `Revision notes for **Powers & Roots** under **Factors, Primes & Indices** (Number). Cambridge IGCSE Mathematics (0580). Powers and roots are shorthand for repeated multiplication and its reverse ‚Äî mastering them is essential for standard form, surds, and algebraic index work.`,
    subheadings: [
      {
        title: "Powers & Roots",
        body: `A **power** (or **index**) tells you how many times a base is multiplied by itself. The expression a‚Åø means a √ó a √ó a ‚Ä¶ √ó a, with n factors. The base is a, the **exponent** (index) is n, and the result is called a **power** of a.\n\n**Square roots** (‚àö) and **cube roots** (‚àõ) reverse squaring and cubing respectively. The square root of n is the non-negative value x such that x¬≤ = n; the cube root of n is the value x such that x¬≥ = n.\n\n**Key values to know without a calculator:** squares 1¬≤‚Äì15¬≤, cubes 1¬≥‚Äì10¬≥, their roots, and common higher powers such as 2‚Åµ = 32, 2¬π‚Å∞ = 1024, 3‚Å¥ = 81.`,
        groups: [
          {
            subTitle: "Powers: definitions and examples",
            bullets: [
              "**Base and exponent:** in 5¬≥, the base is 5 and the exponent is 3; 5¬≥ = 5 √ó 5 √ó 5 = 125.",
              "**Square:** any number raised to the power of 2 ‚Äî 7¬≤ = 49. Square numbers: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225.",
              "**Cube:** any number raised to the power of 3 ‚Äî 4¬≥ = 64. Cube numbers: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.",
              "**Higher powers:** 2‚Å¥ = 16, 2‚Åµ = 32, 2‚Å∂ = 64, 2¬π‚Å∞ = 1024; 3‚Å¥ = 81, 10‚Åµ = 100 000.",
              "**Power of 1:** any base raised to the power 1 equals itself ‚Äî a¬π = a.",
              "**Power of 0:** any non-zero base raised to the power 0 equals 1 ‚Äî a‚Å∞ = 1 (a ‚â† 0).",
            ],
          },
          {
            subTitle: "Roots: definitions and calculation",
            bullets: [
              "**Square root (‚àö):** ‚àön is the non-negative value whose square is n ‚Äî ‚àö49 = 7 because 7¬≤ = 49.",
              "**Cube root (‚àõ):** ‚àõn is the value whose cube is n ‚Äî ‚àõ125 = 5 because 5¬≥ = 125. Cube roots can be negative: ‚àõ(‚àí8) = ‚àí2.",
              "**Estimating non-perfect roots:** ‚àö50 lies between ‚àö49 = 7 and ‚àö64 = 8, closer to 7 since 50 is near 49.",
              "**Root as a fractional index:** ‚àön = n^(1/2) and ‚àõn = n^(1/3); these connect roots to the index laws studied in the next chapter.",
              "**Both roots of x¬≤ = n:** the equation has solutions x = +‚àön and x = ‚àí‚àön; write as x = ¬±‚àön.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**‚àö25 is 5, not ¬±5** ‚Äî the ‚àö symbol returns the positive root only; ¬±5 is the solution set of x¬≤ = 25.",
              "**‚àí3¬≤ ‚â† (‚àí3)¬≤** ‚Äî without brackets the exponent applies to 3 only, giving ‚àí9; with brackets (‚àí3)¬≤ = 9.",
              "**0‚Å∞ is undefined** ‚Äî a‚Å∞ = 1 applies only when a ‚â† 0; never write 0‚Å∞ = 1 in an exam.",
              "**Confusing square and cube** ‚Äî 4¬≤ = 16 and 4¬≥ = 64; count the factors carefully.",
            ],
          },
        ],
        examinerTips: [
          "Learn the squares up to 15¬≤ and cubes up to 10¬≥ so you can read answers off directly without a calculator.",
          "When estimating a square root, identify the two perfect squares either side, then decide which the value is closer to.",
          "If a question asks for the value of a power such as 2‚Å∏, build it up from known results: 2‚Å∏ = (2‚Å¥)¬≤ = 16¬≤ = 256.",
          "For equations like x¬≤ = 100, always write both solutions: x = ¬±10.",
        ],
        commonMistakes: [
          "Squaring and doubling are different operations ‚Äî 5¬≤ = 25, but 5 √ó 2 = 10; do not substitute one for the other.",
          "Assuming a negative base always gives a negative power ‚Äî (‚àí3)‚Å¥ = +81 because four negative signs multiply to give a positive.",
        ],
        recap: [
          "Calculate (a) 3‚Åµ, (b) ‚àõ216, (c) ‚àö(196). [3]",
          "Write down both solutions of x¬≤ = 144. [2]",
          "Without a calculator, estimate ‚àö75 to one decimal place, showing your reasoning. [2]",
          "Explain why a‚Å∞ = 1 for any non-zero value a. [1]",
        ],
      },
    ],
  },

  // ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ
  // 17. Laws of Indices
  // ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ‚îÄ
  {
    number: 17,
    title: "Laws of Indices",
    section: "Number",
    topic: "Factors, Primes & Indices",
    intro: `Revision notes for **Laws of Indices** under **Factors, Primes & Indices** (Number). Cambridge IGCSE Mathematics (0580). The five index laws let you combine, simplify, and evaluate powers without multiplying them out ‚Äî they are used in standard form, algebra, and surds throughout the course.`,
    subheadings: [
      {
        title: "Laws of Indices",
        body: `The **laws of indices** (also called the **index laws** or **exponent rules**) provide shortcuts for manipulating powers with the same base. All five laws follow from the basic definition of a power as repeated multiplication.\n\n**The five laws:**\n1. **Multiply ‚Äî add indices:** a·µê √ó a‚Åø = a·µê‚Å∫‚Åø\n2. **Divide ‚Äî subtract indices:** a·µê √∑ a‚Åø = a·µê‚Åª‚Åø\n3. **Power of a power ‚Äî multiply indices:** (a·µê)‚Åø = a·µê‚Åø\n4. **Zero index ‚Äî equals one:** a‚Å∞ = 1 (a ‚â† 0)\n5. **Negative index ‚Äî reciprocal:** a‚Åª‚Åø = 1/a‚Åø\n\nFractional indices extend the system: a^(1/n) = ‚Åø‚àöa, so a^(m/n) = (‚Åø‚àöa)·µê.`,
        groups: [
          {
            subTitle: "Applying the five laws",
            bullets: [
              "**Law 1 ‚Äî multiply same base:** 3‚Å¥ √ó 3¬≤ = 3‚Å∂ = 729; check: 81 √ó 9 = 729 ‚úì.",
              "**Law 2 ‚Äî divide same base:** 5‚Å∑ √∑ 5¬≥ = 5‚Å¥ = 625; if the result is negative, e.g. 2¬≥ √∑ 2‚Åµ = 2‚Åª¬≤ = 1/4.",
              "**Law 3 ‚Äî power of a power:** (2¬≥)‚Å¥ = 2¬π¬≤ = 4096; for a product in brackets (2 √ó 3¬≤)¬≥ = 2¬≥ √ó 3‚Å∂.",
              "**Law 4 ‚Äî zero index:** 7‚Å∞ = 1, (‚àí5)‚Å∞ = 1, (3/4)‚Å∞ = 1 ‚Äî any non-zero base gives 1.",
              "**Law 5 ‚Äî negative index:** 4‚Åª¬≥ = 1/4¬≥ = 1/64; to evaluate, write as a fraction first.",
              "**Fractional index:** 8^(1/3) = ‚àõ8 = 2; 27^(2/3) = (‚àõ27)¬≤ = 3¬≤ = 9.",
            ],
          },
          {
            subTitle: "Combined index calculations",
            bullets: [
              "**Combining laws:** simplify (2‚Å¥ √ó 2‚Åª¬≤) √∑ 2¬≥ = 2^(4‚àí2‚àí3) = 2‚Åª¬π = 1/2.",
              "**Different bases ‚Äî do not combine:** 2¬≥ √ó 3¬≤ cannot be simplified further using index laws.",
              "**Evaluating a^(m/n):** apply the root first, then the power ‚Äî 32^(3/5) = (‚Åµ‚àö32)¬≥ = 2¬≥ = 8.",
              "**Raising a fraction to a power:** (2/3)‚Å¥ = 2‚Å¥/3‚Å¥ = 16/81.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Laws apply only when bases are equal** ‚Äî you cannot combine 5¬≥ √ó 2‚Å¥ using Law 1; the bases differ.",
              "**Power of a product:** (3x)¬≤ = 9x¬≤, not 3x¬≤ ‚Äî the coefficient must also be squared.",
              "**Negative index ‚â† negative number** ‚Äî 2‚Åª¬≥ = 1/8, a small positive number, not ‚àí8.",
            ],
          },
        ],
        examinerTips: [
          "Always state which law you are using as a brief note in your working ‚Äî it earns method marks and prevents sloppy errors.",
          "For a^(m/n), remember 'root first, power second' ‚Äî taking the root first keeps numbers smaller and reduces arithmetic errors.",
          "When dividing expressions with the same base, subtract the bottom index from the top index ‚Äî a common mistake is to subtract in the wrong direction.",
          "If the final index is negative, convert to a fraction before writing the answer.",
        ],
        commonMistakes: [
          "Adding exponents when multiplying different bases ‚Äî 3¬≤ √ó 4¬≥ ‚â† 12‚Åµ; Law 1 only works when the base is identical.",
          "Applying the power only to the variable and forgetting the coefficient ‚Äî (3x)¬≤ = 9x¬≤, not 3x¬≤.",
        ],
        recap: [
          "Simplify (a) 6¬≥ √ó 6‚Å¥, (b) 10‚Å∏ √∑ 10¬≥, (c) (5¬≤)¬≥. [3]",
          "Evaluate (a) 4‚Åª¬≤, (b) 27^(1/3), (c) 16^(3/4). [3]",
          "Write 2‚Åª‚Åµ as a fraction. [1]",
          "Simplify (3‚Åµ √ó 3‚Åª¬≤) √∑ 3‚Å¥, giving your answer as a fraction. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 18. Converting to & from Standard Form
  // -------------------------------------------------------------
  {
    number: 18,
    title: "Converting to & from Standard Form",
    section: "Number",
    topic: "Standard Form",
    intro: `Revision notes for **Converting to & from Standard Form** under **Standard Form** (Number). Cambridge IGCSE Mathematics (0580). Standard form expresses very large or very small numbers concisely using powers of 10 ó a skill tested on both calculator and non-calculator papers.`,
    subheadings: [
      {
        title: "Converting to & from Standard Form",
        body: `**Standard form** (also called **scientific notation**) writes any number as **A ◊ 10n**, where **1 = A < 10** and n is an integer.\n\nTo convert a number into standard form, identify the first significant figure, place the decimal point after it, and count how many places the decimal point moved ó that count is the power of 10. Moving the decimal point to the left gives a **positive** power; moving it to the right gives a **negative** power.\n\n**Examples:**\n- 340 000 = 3.4 ◊ 105 (decimal moved 5 places left)\n- 0.000072 = 7.2 ◊ 10?5 (decimal moved 5 places right)`,
        groups: [
          {
            subTitle: "Converting to standard form",
            bullets: [
              "**Step 1 ó identify A:** write the digits with the decimal point after the first non-zero digit; e.g. 48 300 ? 4.83.",
              "**Step 2 ó count the move:** the decimal point moved 4 places left to change 48 300 into 4.83, so n = 4.",
              "**Large numbers ? positive power:** 48 300 = 4.83 ◊ 104.",
              "**Small decimals ? negative power:** 0.00056 ? 5.6 ◊ 10?4 (moved 4 places right).",
              "**Check A is between 1 and 10:** if A = 14.3, the form is wrong ó reduce to 1.43 ◊ 10^(n+1).",
            ],
          },
          {
            subTitle: "Converting from standard form",
            bullets: [
              "**Positive power ? move decimal right:** 6.02 ◊ 106 ? move 6 places right ? 6 020 000.",
              "**Negative power ? move decimal left:** 3.5 ◊ 10?≥ ? move 3 places left ? 0.0035.",
              "**Filling with zeros:** 7.1 ◊ 104 ? 71 000; the gaps left by the decimal shift are filled with zeros.",
              "**Check the magnitude:** a positive power gives a number greater than or equal to 10; a negative power gives a number less than 1.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**A must satisfy 1 = A < 10** ó writing 34 ◊ 10≥ or 0.6 ◊ 107 is not standard form; adjust A and change n accordingly.",
              "**Counting place moves** ó count carefully; an off-by-one error changes the answer by a factor of 10.",
              "**Negative power ? negative number** ó 4 ◊ 10?≤ = 0.04, which is positive; the negative sign is on the index only.",
            ],
          },
        ],
        examinerTips: [
          "To check: convert back ó if you wrote 2.5 ◊ 10≥, convert back to 2500 and confirm it matches the original number.",
          "When a question says 'give your answer in standard form', the mark may be for the form itself, not just the digits ó ensure A is in [1, 10).",
          "On non-calculator paper, practise counting decimal-place shifts systematically to avoid off-by-one errors.",
          "IGCSE questions sometimes give standard form numbers in context (e.g. the mass of a proton) and ask you to convert to ordinary numbers for comparison.",
        ],
        commonMistakes: [
          "Writing 56.3 ◊ 10≤ as standard form ó A = 56.3 is not in [1, 10); the correct form is 5.63 ◊ 10≥.",
          "Confusing the direction of the power ó large numbers use positive powers of 10, not negative.",
        ],
        recap: [
          "Write (a) 7 240 000 and (b) 0.000 038 in standard form. [2]",
          "Convert (a) 4.6 ◊ 105 and (b) 9.1 ◊ 10?≥ to ordinary numbers. [2]",
          "A particle has a diameter of 2.5 ◊ 10?7 m. Write this as an ordinary decimal. [1]",
          "Explain why 15.4 ◊ 106 is not in standard form and write the correct form. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 19. Operations with Standard Form
  // -------------------------------------------------------------
  {
    number: 19,
    title: "Operations with Standard Form",
    section: "Number",
    topic: "Standard Form",
    intro: `Revision notes for **Operations with Standard Form** under **Standard Form** (Number). Cambridge IGCSE Mathematics (0580). Adding, subtracting, multiplying, and dividing numbers in standard form are core non-calculator skills ó each operation requires a different strategy.`,
    subheadings: [
      {
        title: "Operations with Standard Form",
        body: `**Multiplying** standard form numbers: multiply the A values, then add the powers of 10. If the resulting A is not in [1, 10), adjust and change the power.\n\n**Dividing:** divide the A values, then subtract the powers. Again adjust if needed.\n\n**Adding and subtracting:** convert both numbers to the **same power of 10** first, then add or subtract the A values. This often means rewriting the smaller power so it matches the larger one.\n\n**Example of multiplication:** (3 ◊ 104) ◊ (2 ◊ 10≥) = 6 ◊ 107\n**Example of addition:** (3 ◊ 105) + (4 ◊ 104) = (30 ◊ 104) + (4 ◊ 104) = 34 ◊ 104 = 3.4 ◊ 105`,
        groups: [
          {
            subTitle: "Multiplying and dividing in standard form",
            bullets: [
              "**Multiply A values, add powers:** (2.5 ◊ 10≥) ◊ (4 ◊ 10≤) = 10 ◊ 105 = 1 ◊ 106 (adjust since 10 = 10).",
              "**Divide A values, subtract powers:** (8.4 ◊ 107) ˜ (2 ◊ 10≥) = 4.2 ◊ 104.",
              "**Always check A is in [1, 10) after calculating** ó if A = 10, divide A by 10 and add 1 to the power.",
              "**Negative power arithmetic:** (3 ◊ 10?≤) ◊ (5 ◊ 10?≥) = 15 ◊ 10?5 = 1.5 ◊ 10?4.",
            ],
          },
          {
            subTitle: "Adding and subtracting in standard form",
            bullets: [
              "**Match the powers:** to add 5 ◊ 106 and 3 ◊ 105, rewrite 5 ◊ 106 as 50 ◊ 105, then add: 53 ◊ 105 = 5.3 ◊ 106.",
              "**Adjust to the larger power:** rewrite the number with the smaller power so both share the same power of 10.",
              "**Subtraction:** (9 ◊ 104) - (6 ◊ 10≥) = (90 ◊ 10≥) - (6 ◊ 10≥) = 84 ◊ 10≥ = 8.4 ◊ 104.",
              "**Re-standardise the result:** after adding/subtracting, check A is still in [1, 10).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Adding powers instead of matching them for addition** ó adding 10≥ + 104 ? 107; the powers are only added during multiplication.",
              "**Forgetting to re-standardise** ó an answer of 12.5 ◊ 10≥ must be corrected to 1.25 ◊ 104.",
              "**Sign errors with negative powers** ó subtracting a negative power: 10?≤ ˜ 10?5 = 10^(-2-(-5)) = 10≥.",
            ],
          },
        ],
        examinerTips: [
          "For non-calculator multiplications, multiply the A values using mental arithmetic, then handle the powers of 10 separately.",
          "Show two clearly separated lines of working: one for the A values and one for the powers of 10 ó this makes errors easy to spot and earns method marks.",
          "After every calculation, ask 'is my A between 1 and 10?' If not, adjust before writing the final answer.",
          "In addition questions, write out the intermediate step with matched powers before combining ó do not try to do it in one step.",
        ],
        commonMistakes: [
          "Adding the powers of 10 when adding two numbers ó this rule applies only to multiplication.",
          "Not adjusting A after multiplying ó 18 ◊ 104 is not in standard form; write 1.8 ◊ 105.",
        ],
        recap: [
          "Calculate (3 ◊ 104) ◊ (5 ◊ 10≥), giving your answer in standard form. [2]",
          "Calculate (8 ◊ 106) ˜ (4 ◊ 10?≤), giving your answer in standard form. [2]",
          "Find (6.5 ◊ 105) + (3 ◊ 104), giving your answer in standard form. [2]",
          "The mass of Earth is 5.97 ◊ 10≤4 kg and the mass of the Moon is 7.35 ◊ 10≤≤ kg. Find the difference in mass, in standard form. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 20. Introduction to Fractions
  // -------------------------------------------------------------
  {
    number: 20,
    title: "Introduction to Fractions",
    section: "Number",
    topic: "Fractions",
    intro: `Revision notes for **Introduction to Fractions** under **Fractions** (Number). Cambridge IGCSE Mathematics (0580). Understanding what a fraction represents ó a part of a whole ó and the vocabulary of numerators, denominators, proper, improper, and mixed forms is the foundation for all fraction calculations.`,
    subheadings: [
      {
        title: "Introduction to Fractions",
        body: `A **fraction** represents a part of a whole. The **numerator** (top) tells you how many parts you have; the **denominator** (bottom) tells you how many equal parts the whole is divided into. So 3/8 means three parts out of eight equal parts.\n\nA **proper fraction** has a numerator less than the denominator ó its value is between 0 and 1 (e.g. 5/7). An **improper fraction** has a numerator greater than or equal to the denominator ó its value is greater than or equal to 1 (e.g. 9/4). A **mixed number** combines a whole number and a proper fraction (e.g. 2 1/4).`,
        groups: [
          {
            subTitle: "Vocabulary and types of fraction",
            bullets: [
              "**Numerator:** the top number ó counts the parts you have.",
              "**Denominator:** the bottom number ó counts the total equal parts in the whole.",
              "**Proper fraction:** numerator < denominator, value between 0 and 1; e.g. 3/5.",
              "**Improper fraction:** numerator = denominator, value = 1; e.g. 11/4 = 2.75.",
              "**Mixed number:** whole part + fractional part; e.g. 3 2/7.",
              "**Unit fraction:** numerator = 1; e.g. 1/9 ó the building block used in fraction arithmetic.",
            ],
          },
          {
            subTitle: "Fractions on a number line",
            bullets: [
              "**Ordering fractions:** 1/4 < 1/3 < 1/2 < 2/3 < 3/4 ó a larger denominator with the same numerator gives a smaller fraction.",
              "**Equivalent fractions on a line:** 2/4 and 1/2 mark the same point; 3/6 and 1/2 are identical.",
              "**Negative fractions:** -3/4 is between -1 and 0; it is to the left of -1/2 on the number line.",
              "**Comparing 3/4 and 4/5:** convert to decimals ó 0.75 < 0.80 ó so 3/4 < 4/5.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Denominator cannot be zero** ó 5/0 is undefined; never write a fraction with zero in the denominator.",
              "**A fraction is not just 'part of a shape'** ó fractions describe ratios, divisions, probabilities, and proportions, not only shaded regions.",
              "**Bigger denominator, smaller unit fraction** ó 1/10 < 1/5 because ten equal pieces are smaller than five.",
            ],
          },
        ],
        examinerTips: [
          "Draw a quick number line or fraction bar when comparing two fractions ó a visual check prevents ordering errors.",
          "When a question asks 'write as a fraction', make sure numerator and denominator are both integers.",
          "For percentage, ratio, and proportion questions, translating into fraction form first usually simplifies the working.",
          "Learn the common fraction-decimal equivalents: 1/4 = 0.25, 1/3 ò 0.333, 1/2 = 0.5, 2/3 ò 0.667, 3/4 = 0.75.",
        ],
        commonMistakes: [
          "Saying 1/5 is bigger than 1/4 because 5 > 4 ó the denominator counts pieces, so more pieces means each piece is smaller.",
          "Confusing 'improper fraction' with a 'wrong fraction' ó improper simply means its value exceeds 1, not that it is incorrect.",
        ],
        recap: [
          "Write down (a) a proper fraction and (b) an improper fraction. [2]",
          "Which is larger, 5/8 or 3/5? Show your working. [2]",
          "Mark 2/3 and 7/4 on a number line scaled from 0 to 2. [2]",
          "Explain why 1/7 < 1/6 even though 7 > 6. [1]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 21. Fractions of Amounts
  // -------------------------------------------------------------
  {
    number: 21,
    title: "Fractions of Amounts",
    section: "Number",
    topic: "Fractions",
    intro: `Revision notes for **Fractions of Amounts** under **Fractions** (Number). Cambridge IGCSE Mathematics (0580). Finding a fraction of a quantity and working backwards from a fraction to a whole are tested in almost every IGCSE paper, often in context problems.`,
    subheadings: [
      {
        title: "Fractions of Amounts",
        body: `To find a **fraction of an amount**, multiply the amount by the fraction. The word **'of'** in mathematics always means multiply: 3/4 of 48 = 3/4 ◊ 48 = 36.\n\nA useful strategy is to **divide by the denominator first** (find one part), then **multiply by the numerator** (scale up to the required number of parts). For non-calculator questions this avoids large intermediate products.\n\n**Working backwards (finding the whole):** if 2/5 of an amount is 30, divide by 2 to find 1/5 (= 15), then multiply by 5 to find the whole (= 75). Alternatively, divide 30 by 2/5 ó which means multiply by 5/2.`,
        groups: [
          {
            subTitle: "Finding a fraction of an amount",
            bullets: [
              "**Multiply by the fraction:** 2/3 of 90 = 2/3 ◊ 90 = 60; or divide by 3 first (30), then multiply by 2.",
              "**Non-calculator strategy:** ˜ denominator, then ◊ numerator ó 5/8 of 56: 56 ˜ 8 = 7, then ◊ 5 = 35.",
              "**With a calculator:** enter 5 ˜ 8 ◊ 56 = 35; or use the fraction key.",
              "**Units carry through:** 3/4 of £120 = £90; keep the unit in the answer.",
              "**Fraction of a fraction:** 2/3 of 3/4 = 2/3 ◊ 3/4 = 1/2.",
            ],
          },
          {
            subTitle: "Finding the whole from a fraction",
            bullets: [
              "**Identify the fraction and the value:** 'Three-fifths of a number is 24' ? (3/5) ◊ n = 24.",
              "**Divide by the numerator, multiply by the denominator:** 24 ˜ 3 = 8, then 8 ◊ 5 = 40. So n = 40.",
              "**Divide by the fraction (multiply by its reciprocal):** 24 ˜ (3/5) = 24 ◊ 5/3 = 40.",
              "**Check:** 3/5 of 40 = 24 ?.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Multiplying by the numerator before dividing** ó with large numbers this creates awkward products; always divide first.",
              "**'Of' triggers multiplication** ó '5/8 of 64' is 5/8 ◊ 64 = 40, not 64 ˜ 5 ◊ 8.",
              "**Working backwards: divide, then multiply** ó do not multiply the given value by the whole fraction directly.",
            ],
          },
        ],
        examinerTips: [
          "Always state your method clearly: write '˜ 5 = ..., then ◊ 3 = ...' so the examiner can see each step.",
          "In context problems, re-read the question to check whether you need the fraction itself or the remaining amount after the fraction is removed.",
          "For 'find the original price before a fraction was removed' problems, use the unitary method: find one part, scale to the whole.",
          "Check using the inverse: multiply your answer by the fraction to confirm you get the stated value.",
        ],
        commonMistakes: [
          "Dividing by the whole denominator and forgetting to multiply by the numerator ó this gives only 1/n of the amount, not m/n.",
          "Working backwards by multiplying by the fraction instead of dividing ó if 3/7 of x is 21, then x = 21 ˜ (3/7) = 49, not 21 ◊ (3/7).",
        ],
        recap: [
          "Find 7/8 of 240. [1]",
          "Three-fifths of a bag of flour weighs 360 g. Find the total mass of the bag. [2]",
          "A school has 840 students. 5/12 are in Year 10 or 11. How many students are NOT in Year 10 or 11? [2]",
          "Find 2/3 of 3/5. Write your answer as a fraction in its simplest form. [1]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 22. Equivalent and Simplified Fractions
  // -------------------------------------------------------------
  {
    number: 22,
    title: "Equivalent & Simplified Fractions",
    section: "Number",
    topic: "Fractions",
    intro: `Revision notes for **Equivalent & Simplified Fractions** under **Fractions** (Number). Cambridge IGCSE Mathematics (0580). Simplifying a fraction to its lowest terms and generating equivalent fractions are prerequisites for every fraction calculation and comparison.`,
    subheadings: [
      {
        title: "Equivalent & Simplified Fractions",
        body: `**Equivalent fractions** represent the same value but are written with different numerators and denominators. Multiplying or dividing both the numerator and denominator by the same non-zero integer produces an equivalent fraction: 3/4 = 6/8 = 9/12 = 15/20.\n\n**Simplifying** (or **reducing**) a fraction means dividing both numerator and denominator by their **highest common factor (HCF)** until no common factor other than 1 remains. The result is the fraction in its **simplest form** (lowest terms).\n\nFor example, simplify 24/36: HCF of 24 and 36 is 12; divide both by 12 ? 2/3.`,
        groups: [
          {
            subTitle: "Generating equivalent fractions",
            bullets: [
              "**Multiply top and bottom by the same integer:** 2/5 ? ◊3 ? 6/15 ? ◊4 ? 24/60. All three are equivalent.",
              "**To find a specific equivalent:** 3/4 = ?/20 ? denominator multiplied by 5, so numerator ◊ 5 ? 15/20.",
              "**Equivalent fractions on a diagram:** a bar divided into 4 equal parts with 3 shaded is identical to a bar divided into 8 parts with 6 shaded.",
              "**All equivalent fractions reduce to the same simplest form:** 6/8, 9/12, 3/4 all simplify to 3/4.",
            ],
          },
          {
            subTitle: "Simplifying fractions",
            bullets: [
              "**Find the HCF of numerator and denominator:** for 36/48, HCF = 12; divide both by 12 ? 3/4.",
              "**Step-by-step division:** if the HCF is not obvious, divide repeatedly by small primes ó 36/48 ˜ 2 = 18/24 ˜ 2 = 9/12 ˜ 3 = 3/4.",
              "**A fraction is in simplest form when HCF(numerator, denominator) = 1** ó no integer other than 1 divides both.",
              "**Simplest form examples:** 15/35 = 3/7; 42/56 = 3/4; 100/250 = 2/5.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not using the HCF** ó dividing by 2 when the HCF is 6 requires multiple steps; using the HCF from the start is faster.",
              "**Partial simplification** ó leaving 10/15 without noticing HCF = 5; 10/15 must simplify to 2/3.",
              "**Only dividing one part** ó dividing the numerator but forgetting the denominator changes the value of the fraction.",
            ],
          },
        ],
        examinerTips: [
          "If asked to simplify, always check your answer by confirming the HCF of your final numerator and denominator is 1.",
          "For 'find the missing number in an equivalent fraction', decide whether the denominator grew or shrank, then apply the same factor to the numerator.",
          "Questions may ask 'write as a fraction in its simplest form' at the end of a multi-step problem ó do not forget this step.",
          "Prime factor decomposition of numerator and denominator is a reliable way to find the HCF when the numbers are large.",
        ],
        commonMistakes: [
          "Leaving a fraction partially simplified ó always check the final fraction has no common factor other than 1.",
          "Adding numerator and denominator when generating an equivalent fraction ó only multiplication (or division) of both parts preserves equivalence.",
        ],
        recap: [
          "Simplify 60/84 to its lowest terms. [2]",
          "Find the missing value: 5/9 = ?/63. [1]",
          "Write three fractions equivalent to 2/7. [2]",
          "Explain why 15/40 and 3/8 are equivalent. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 23. Mixed Numbers & Improper Fractions
  // -------------------------------------------------------------
  {
    number: 23,
    title: "Mixed Numbers & Improper Fractions",
    section: "Number",
    topic: "Fractions",
    intro: `Revision notes for **Mixed Numbers & Improper Fractions** under **Fractions** (Number). Cambridge IGCSE Mathematics (0580). Converting fluently between mixed number and improper fraction form is essential for multiplying and dividing fractions and for interpreting real-life measurement answers.`,
    subheadings: [
      {
        title: "Mixed Numbers & Improper Fractions",
        body: `A **mixed number** consists of an integer part and a proper fraction ó for example, 3 2/5. An **improper fraction** has a numerator greater than or equal to its denominator ó for example, 17/5.\n\nEvery mixed number can be converted to an improper fraction and vice versa. These conversions are needed constantly in fraction arithmetic because multiplication and division of mixed numbers must be carried out in improper fraction form.\n\n**Mixed ? improper:** multiply the integer by the denominator and add the numerator; keep the same denominator. 3 2/5 ? (3 ◊ 5 + 2)/5 = 17/5.\n\n**Improper ? mixed:** divide the numerator by the denominator; the quotient is the integer part, the remainder is the new numerator. 17 ˜ 5 = 3 remainder 2 ? 3 2/5.`,
        groups: [
          {
            subTitle: "Converting mixed ? improper",
            bullets: [
              "**Mixed to improper:** (whole ◊ denominator + numerator)/denominator. E.g. 4 3/7 = (28 + 3)/7 = 31/7.",
              "**Improper to mixed:** divide numerator by denominator; quotient = whole, remainder = new numerator. E.g. 23/6: 23 ˜ 6 = 3 r5 ? 3 5/6.",
              "**Negative mixed numbers:** -2 3/4 = -(2 ◊ 4 + 3)/4 = -11/4; apply the minus sign after converting the magnitude.",
              "**Check by converting back:** convert the improper fraction back to a mixed number; you should recover the original.",
            ],
          },
          {
            subTitle: "Using improper fractions in calculations",
            bullets: [
              "**Always convert mixed numbers before multiplying or dividing** ó 2 1/2 ◊ 1 1/3 must become 5/2 ◊ 4/3 = 20/6 = 10/3 = 3 1/3.",
              "**Adding and subtracting mixed numbers:** convert to improper fractions first, find a common denominator, then calculate.",
              "**Writing the final answer:** exam questions usually expect the answer as a mixed number if it is greater than 1 ó convert back after calculating.",
              "**Example:** 2 3/4 + 1 1/2 = 11/4 + 3/2 = 11/4 + 6/4 = 17/4 = 4 1/4.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Adding integer parts separately and fraction parts separately without converting** ó this sometimes works for addition but fails for mixed number multiplication.",
              "**Forgetting to simplify the improper fraction before converting** ó 12/8 ? 3/2 ? 1 1/2, not 1 4/8.",
              "**Applying the minus sign incorrectly** ó -3 1/4 is -13/4, not -11/4.",
            ],
          },
        ],
        examinerTips: [
          "Write the conversion working as a clear equation: 2 5/9 = (18 + 5)/9 = 23/9; this shows method and prevents errors.",
          "In a multi-step problem, convert to improper fractions at the start and do not convert back until the very end.",
          "For division questions, convert mixed numbers to improper fractions, then multiply by the reciprocal ó do not try to divide mixed numbers directly.",
          "On calculator papers, check your improper-fraction conversion by entering the fraction into the calculator and confirming the decimal matches the original mixed number.",
        ],
        commonMistakes: [
          "Multiplying the whole number and the numerator and ignoring the denominator ó 3 2/5 ? (3 ◊ 2)/5 = 6/5; the denominator stays as 5.",
          "Leaving an improper fraction as a final answer when the question asks for a mixed number.",
        ],
        recap: [
          "Convert 5 3/8 to an improper fraction. [1]",
          "Convert 29/7 to a mixed number. [1]",
          "Calculate 3 1/2 ◊ 2 2/5, giving your answer as a mixed number. [3]",
          "Show that 2 2/3 - 1 5/6 = 5/6. [3]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 24. Adding & Subtracting Fractions
  // -------------------------------------------------------------
  {
    number: 24,
    title: "Adding & Subtracting Fractions",
    section: "Number",
    topic: "Fractions",
    intro: `Revision notes for **Adding & Subtracting Fractions** under **Fractions** (Number). Cambridge IGCSE Mathematics (0580). Adding and subtracting fractions requires a common denominator ó the most common source of non-calculator errors in this topic.`,
    subheadings: [
      {
        title: "Adding & Subtracting Fractions",
        body: `You can only add or subtract fractions when they share the same **denominator**. Find the **lowest common multiple (LCM)** of the denominators to get the **lowest common denominator (LCD)**. Convert each fraction to an equivalent fraction with that denominator, then add or subtract the numerators only ó the denominator stays the same.\n\n**Example:** 3/4 + 5/6. LCM of 4 and 6 is 12. Convert: 9/12 + 10/12 = 19/12 = 1 7/12.\n\n**Subtracting:** 7/8 - 1/3. LCM of 8 and 3 is 24. Convert: 21/24 - 8/24 = 13/24.`,
        groups: [
          {
            subTitle: "Step-by-step method",
            bullets: [
              "**Find the LCD:** LCM of the denominators ó for 1/3 and 1/4, LCD = 12.",
              "**Convert each fraction:** multiply numerator and denominator by the same factor to reach the LCD.",
              "**Add or subtract numerators:** denominators stay the same ó 7/12 + 5/12 = 12/12 = 1.",
              "**Simplify the result:** 10/8 = 5/4 = 1 1/4.",
              "**Mixed numbers:** convert to improper fractions first, then follow the same steps.",
              "**Negative fractions:** 1/3 - 5/6 = 2/6 - 5/6 = -3/6 = -1/2; a negative result is valid.",
            ],
          },
          {
            subTitle: "Quick mental strategies",
            bullets: [
              "**Same denominator:** 5/9 + 2/9 = 7/9 ó no LCD work needed.",
              "**One denominator is a multiple of the other:** 3/4 + 1/8 ó 4 goes into 8, so LCD = 8: 6/8 + 1/8 = 7/8.",
              "**Butterfly method (shortcut):** a/b + c/d = (ad + bc)/bd, then simplify ó useful when LCD is not obvious.",
              "**Checking with decimals:** convert both fractions to decimals, add, and confirm the decimal matches your fractional answer.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Adding denominators as well as numerators** ó 1/3 + 1/4 ? 2/7; denominators never add.",
              "**Using a common denominator that is not the lowest** ó using 12 for 1/4 + 1/6 when 12 works, but then not simplifying fully.",
              "**Forgetting to simplify the final answer** ó always check for common factors.",
            ],
          },
        ],
        examinerTips: [
          "Always state the LCD explicitly as a line of working ó it shows method and helps you avoid common-denominator errors.",
          "Check by converting your answer to a decimal and comparing with the decimal sum of the original fractions.",
          "In exam questions with three fractions, deal with two at a time, then add the third to the result.",
          "If the answer is an improper fraction, convert it to a mixed number unless the question specifies otherwise.",
        ],
        commonMistakes: [
          "Adding the denominators ó the golden rule is: only numerators are added; denominators are matched, not combined.",
          "Using a correct LCD but then scaling only the numerator and forgetting the denominator must also be scaled.",
        ],
        recap: [
          "Calculate 2/3 + 3/8. Give your answer as a fraction in its simplest form. [2]",
          "Calculate 5/6 - 3/4. [2]",
          "Find 1 3/5 + 2 7/10, giving your answer as a mixed number. [3]",
          "Show clearly that 7/12 - 1/4 = 1/3. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 25. Multiplying & Dividing Fractions
  // -------------------------------------------------------------
  {
    number: 25,
    title: "Multiplying & Dividing Fractions",
    section: "Number",
    topic: "Fractions",
    intro: `Revision notes for **Multiplying & Dividing Fractions** under **Fractions** (Number). Cambridge IGCSE Mathematics (0580). Multiplying is the most straightforward fraction operation; dividing requires flipping the second fraction (taking its reciprocal) before multiplying.`,
    subheadings: [
      {
        title: "Multiplying & Dividing Fractions",
        body: `**Multiplying fractions:** multiply numerators together and denominators together. No common denominator is needed. Simplify before or after multiplying (cancelling before multiplying, or **cross-cancelling**, keeps the numbers small).\n\n**Dividing fractions:** apply the rule **KeepñChangeñFlip (KCF)**. Keep the first fraction, change ˜ to ◊, flip the second fraction (write its reciprocal). Then multiply as normal.\n\n**Examples:**\n- Multiply: 3/4 ◊ 2/5 = 6/20 = 3/10.\n- Divide: 3/4 ˜ 2/5 = 3/4 ◊ 5/2 = 15/8 = 1 7/8.`,
        groups: [
          {
            subTitle: "Multiplying fractions",
            bullets: [
              "**Multiply straight across:** (a/b) ◊ (c/d) = ac/bd. E.g. 2/7 ◊ 3/5 = 6/35.",
              "**Cancel before multiplying (cross-cancel):** in 4/9 ◊ 3/8, cancel 4 and 8 by 4 (? 1 and 2), and cancel 3 and 9 by 3 (? 1 and 3): result = 1/6.",
              "**Integer ◊ fraction:** write the integer as a fraction over 1 ó 5 ◊ 2/3 = 5/1 ◊ 2/3 = 10/3.",
              "**Mixed numbers:** convert to improper fractions first ó 1 1/2 ◊ 2 2/3 = 3/2 ◊ 8/3 = 24/6 = 4.",
            ],
          },
          {
            subTitle: "Dividing fractions",
            bullets: [
              "**KeepñChangeñFlip:** a/b ˜ c/d = a/b ◊ d/c. E.g. 5/6 ˜ 2/3 = 5/6 ◊ 3/2 = 15/12 = 5/4.",
              "**Dividing by an integer:** write it as a fraction over 1, then flip. 3/5 ˜ 4 = 3/5 ˜ 4/1 = 3/5 ◊ 1/4 = 3/20.",
              "**Dividing by a fraction < 1 gives a larger result:** 2 ˜ 1/3 = 6; dividing by a small piece gives more pieces.",
              "**Mixed numbers in division:** convert both to improper fractions, apply KCF, then multiply.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Flipping the first fraction instead of the second** ó in a/b ˜ c/d, flip c/d to get d/c, not b/a.",
              "**Forgetting to convert mixed numbers before multiplying** ó 2 1/3 ◊ 1 1/4 must be done as 7/3 ◊ 5/4.",
              "**Not simplifying the final answer** ó 12/18 must be reduced to 2/3.",
            ],
          },
        ],
        examinerTips: [
          "Cross-cancel before multiplying whenever possible ó it keeps the numbers manageable and reduces simplification work at the end.",
          "Write the KCF step explicitly: 'Keep 3/4, Change to ◊, Flip to 5/2' ó this earns method marks.",
          "Always convert mixed numbers to improper fractions before multiplying or dividing ó mixed number multiplication in situ leads to errors.",
          "Verify by estimation: 3/4 ◊ 2/5 ò 0.75 ◊ 0.4 = 0.3; check 3/10 = 0.3 ?.",
        ],
        commonMistakes: [
          "Flipping the wrong fraction in division ó always flip the divisor (second fraction), never the dividend (first).",
          "Trying to find a common denominator when multiplying ó there is no need; multiply straight across.",
        ],
        recap: [
          "Calculate 3/5 ◊ 10/9. Give your answer in its simplest form. [2]",
          "Calculate 7/8 ˜ 7/4. [2]",
          "Find 2 1/4 ◊ 1 1/3, giving your answer as a mixed number. [3]",
          "A piece of ribbon is 5 1/2 m long. It is cut into pieces each 3/4 m long. How many complete pieces can be cut? [3]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 26. Percentages of Amounts
  // -------------------------------------------------------------
  {
    number: 26,
    title: "Percentages of Amounts",
    section: "Number",
    topic: "Percentages",
    intro: `Revision notes for **Percentages of Amounts** under **Percentages** (Number). Cambridge IGCSE Mathematics (0580). Finding a percentage of a quantity is one of the most frequently tested skills in IGCSE Mathematics ó it appears in context problems covering finance, statistics, and data interpretation.`,
    subheadings: [
      {
        title: "Percentages of Amounts",
        body: `A **percentage** is a fraction with denominator 100. To find a percentage of an amount, convert the percentage to a decimal (by dividing by 100) and multiply by the amount.\n\n**Rule:** percentage of amount = (percentage ˜ 100) ◊ amount.\n\nFor non-calculator questions, build up the percentage using 10% and 1% as building blocks. For example, 35% = 3 ◊ 10% + 5 ◊ 1%.\n\n**Example:** Find 35% of £240. 10% of £240 = £24; 30% = £72; 5% = £12; 35% = £84.`,
        groups: [
          {
            subTitle: "Calculator and non-calculator methods",
            bullets: [
              "**Calculator method:** 35% of 480 = 0.35 ◊ 480 = 168.",
              "**Non-calculator ó use 10% and 1%:** 10% = amount ˜ 10; 1% = amount ˜ 100; build up.",
              "**Example ó 17.5% of £60:** 10% = £6; 5% = £3; 2% = £1.20; 0.5% = £0.30; total = £10.50.",
              "**Percentage as a fraction:** 40% of 350 = 40/100 ◊ 350 = 2/5 ◊ 350 = 140.",
              "**Key percentages to know instantly:** 50% = ˜2; 25% = ˜4; 10% = ˜10; 1% = ˜100.",
            ],
          },
          {
            subTitle: "Finding the whole given a percentage",
            bullets: [
              "**Unitary method:** find 1%, then scale. If 7% = 35, then 1% = 5, so 100% = 500.",
              "**Equation method:** (p/100) ◊ x = given value; solve for x.",
              "**Example:** 15% of a number is 24. 24 ˜ 15 = 1.6 (= 1%), then ◊ 100 = 160.",
              "**Check:** 15% of 160 = 0.15 ◊ 160 = 24 ?.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**'% of' means multiply** ó 20% of £80 = 0.20 ◊ 80 = £16; do not add or subtract the percentage.",
              "**Forgetting to convert the percentage to a decimal** ó 35 ◊ 480 = 16 800, not 168.",
              "**'Find the value' vs 'find the remaining value'** ó if 30% is removed, the remaining amount is 70%, not 30%.",
            ],
          },
        ],
        examinerTips: [
          "For non-calculator questions, always show the 10% step first ó it earns a method mark even if you make an arithmetic slip later.",
          "When working backwards from a percentage value, divide by the percentage and multiply by 100 ó not the reverse.",
          "Convert the percentage to a decimal before multiplying; writing 'as a decimal' as a step prevents the classic error of using the percentage directly.",
          "For compound questions (e.g. 'find 17.5%'), use mental arithmetic building blocks and add clearly.",
        ],
        commonMistakes: [
          "Adding the percentage to the amount instead of multiplying ó 20% of £80 ? £80 + 20 = £100.",
          "Using the unitary method in the wrong direction ó if 25% = 50, then 1% = 2 and 100% = 200, not 50 ◊ 25 = 1250.",
        ],
        recap: [
          "Find 23% of 650. [1]",
          "In a class of 32 students, 37.5% play a musical instrument. How many students is this? [2]",
          "15% of a number is 42. Find the number. [2]",
          "Without a calculator, find 17.5% of £80. Show all working. [3]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 27. Percentage Increases & Decreases
  // -------------------------------------------------------------
  {
    number: 27,
    title: "Percentage Increases & Decreases",
    section: "Number",
    topic: "Percentages",
    intro: `Revision notes for **Percentage Increases & Decreases** under **Percentages** (Number). Cambridge IGCSE Mathematics (0580). The multiplier method is the most reliable and exam-efficient way to apply percentage increases and decreases in a single calculation.`,
    subheadings: [
      {
        title: "Percentage Increases & Decreases",
        body: `To **increase** a quantity by p%, multiply by the **multiplier** (1 + p/100). To **decrease** by p%, multiply by (1 - p/100).\n\nThe multiplier method is preferred because it handles the calculation in one step and is essential for reverse-percentage and compound-interest work.\n\n**Examples:**\n- Increase £350 by 12%: multiplier = 1.12; £350 ◊ 1.12 = £392.\n- Decrease 480 kg by 15%: multiplier = 0.85; 480 ◊ 0.85 = 408 kg.\n\n**Alternatively** (non-calculator): find the percentage change separately, then add or subtract it from the original.`,
        groups: [
          {
            subTitle: "The multiplier method",
            bullets: [
              "**Increase by p%:** multiply by (1 + p/100). E.g. increase by 8%: ◊ 1.08.",
              "**Decrease by p%:** multiply by (1 - p/100). E.g. decrease by 30%: ◊ 0.70.",
              "**Multiplier for 100% (no change):** ◊ 1.00 ó the original is unchanged.",
              "**Multiply in one step:** 650 ◊ 1.15 = 747.50 (15% increase) rather than finding 15% and adding.",
              "**Two changes in sequence:** a 10% increase then a 5% decrease = ◊ 1.10 ◊ 0.95 = ◊ 1.045 ó an overall 4.5% increase.",
            ],
          },
          {
            subTitle: "Non-calculator approach",
            bullets: [
              "**Find the percentage of the amount:** 20% of £75 = £15.",
              "**Add for increase or subtract for decrease:** £75 + £15 = £90; £75 - £15 = £60.",
              "**Partial percentages:** 7.5% = 5% + 2.5%; build from 10% and 1% as before.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Increasing by 20% then decreasing by 20% does not return to the original** ó 100 ◊ 1.20 ◊ 0.80 = 96, not 100.",
              "**Using the wrong multiplier** ó a 35% decrease uses 0.65, not 0.35.",
              "**Adding the percentage to the original without multiplying** ó the percentage change must be found first, then added/subtracted.",
            ],
          },
        ],
        examinerTips: [
          "Always state the multiplier before you calculate ó writing '◊ 1.07' earns a method mark.",
          "For successive percentage changes, find the combined multiplier (multiply both multipliers) for efficiency.",
          "If the question says 'by what percentage has the value changed?', use the percentage-change formula in the next chapter.",
          "On non-calculator paper, combine 10% and 5% blocks to reach any percentage quickly.",
        ],
        commonMistakes: [
          "Confusing 'decrease of 25%' with 'multiplier of 0.25' ó the multiplier is 1 - 0.25 = 0.75, not 0.25.",
          "Believing two equal-magnitude percentage changes cancel ó a 20% gain followed by a 20% loss always results in a net loss.",
        ],
        recap: [
          "Increase £420 by 15%. [2]",
          "A car costs £12 500. Its value decreases by 18%. Find the new value. [2]",
          "A shop reduces all prices by 30%, then offers a further 10% off the reduced price. What single multiplier represents the total reduction? [2]",
          "Without a calculator, decrease 640 by 12.5%. Show all working. [3]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 28. Percentage Change
  // -------------------------------------------------------------
  {
    number: 28,
    title: "Percentage Change",
    section: "Number",
    topic: "Percentages",
    intro: `Revision notes for **Percentage Change** under **Percentages** (Number). Cambridge IGCSE Mathematics (0580). Calculating and interpreting percentage change ó increase or decrease as a percentage of the original ó is a fundamental skill in finance, science, and data analysis questions.`,
    subheadings: [
      {
        title: "Percentage Change",
        body: `**Percentage change** measures how much a quantity has changed, expressed as a percentage of the **original** value.\n\n**Formula:** Percentage change = (change ˜ original) ◊ 100\n\nwhere change = new value - original value. A positive result is an increase; a negative result is a decrease.\n\n**Example:** A price rises from £80 to £92. Change = £12. Percentage change = (12 ˜ 80) ◊ 100 = 15%. This is a 15% increase.\n\n**Reverse percentage:** if you are given the new value and the percentage change and need the original, see the formula rearranged below.`,
        groups: [
          {
            subTitle: "Calculating percentage change",
            bullets: [
              "**Identify original and new values:** the original is the starting figure, before the change.",
              "**Find the change:** change = new - original; a negative change means a decrease.",
              "**Apply the formula:** percentage change = (change ˜ original) ◊ 100.",
              "**Example ó decrease:** 500 g reduced to 450 g; change = -50; % change = (-50 ˜ 500) ◊ 100 = -10% (10% decrease).",
              "**Express correctly:** state whether it is an increase or decrease ó a negative result means decrease.",
            ],
          },
          {
            subTitle: "Reverse percentage (finding the original)",
            bullets: [
              "**If new = original ◊ multiplier, then original = new ˜ multiplier.**",
              "**Example:** after a 20% increase, a price is £180. Original = £180 ˜ 1.20 = £150.",
              "**After a 15% decrease, a price is £340:** original = £340 ˜ 0.85 = £400.",
              "**Do NOT subtract the percentage from the new value** ó £180 - 20% of £180 ? original; that would give a further decrease.",
              "**Unitary method alternative:** find 1% of original, then scale to 100%.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Dividing by the new value instead of the original** ó the denominator in the formula is always the original.",
              "**Reverse percentage: not dividing by the multiplier** ó subtracting the stated percentage from the new value is the most common error.",
              "**Confusing absolute change with percentage change** ó 'it went up by £5' is the absolute change; the question asks for the percentage.",
            ],
          },
        ],
        examinerTips: [
          "Always state the formula before substituting values ó this earns a method mark.",
          "For reverse-percentage questions, identify the multiplier first (increase = 1 + p/100; decrease = 1 - p/100), then divide the new value by it.",
          "If the original and new values are fractions or decimals, convert to easier numbers or use the calculator carefully.",
          "In context questions, make sure you divide by the correct original ó if prices were compared to last year, last year's price is the original.",
        ],
        commonMistakes: [
          "Using the new value as the denominator ó percentage change is always based on the original, not the result.",
          "Subtracting the percentage from the new value to find the original ó always divide the new value by the multiplier.",
        ],
        recap: [
          "A painting was bought for £250 and sold for £310. Find the percentage profit. [2]",
          "A population falls from 48 000 to 42 000. Calculate the percentage decrease. [2]",
          "After a 25% increase, a laptop costs £625. Find the original price. [2]",
          "A jacket is sold for £51 after a 15% discount. What was its original price? [3]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 29. Simple Interest
  // -------------------------------------------------------------
  {
    number: 29,
    title: "Simple Interest",
    section: "Number",
    topic: "Percentages",
    intro: `Revision notes for **Simple Interest** under **Percentages** (Number). Cambridge IGCSE Mathematics (0580). Simple interest grows by the same fixed amount each time period ó unlike compound interest, the interest does not itself earn interest.`,
    subheadings: [
      {
        title: "Simple Interest",
        body: `**Simple interest (SI)** is calculated on the **original principal** only ó the interest earned each period is constant and does not compound.\n\n**Formula:** SI = (P ◊ R ◊ T) / 100\n\nwhere **P** = principal (initial amount), **R** = annual rate (%), **T** = time in years.\n\nThe **total amount** after simple interest = P + SI.\n\n**Example:** £2000 at 5% per annum for 3 years.\nSI = (2000 ◊ 5 ◊ 3) / 100 = £300.\nTotal = £2000 + £300 = £2300.`,
        groups: [
          {
            subTitle: "Using the simple interest formula",
            bullets: [
              "**Principal (P):** the original sum invested or borrowed.",
              "**Rate (R):** the annual interest rate as a percentage.",
              "**Time (T):** the number of years; convert months to years if needed (6 months = 0.5 years).",
              "**SI per year:** R% of P ó the same amount is added each year.",
              "**Total after T years:** A = P + SI = P + PRT/100 = P(1 + RT/100).",
            ],
          },
          {
            subTitle: "Rearranging for P, R, or T",
            bullets: [
              "**Find the rate:** R = (SI ◊ 100) / (P ◊ T). E.g. SI = £80, P = £400, T = 2 years ? R = (80 ◊ 100)/(400 ◊ 2) = 10%.",
              "**Find the time:** T = (SI ◊ 100) / (P ◊ R).",
              "**Find the principal:** P = (SI ◊ 100) / (R ◊ T).",
              "**Example:** SI = £135, R = 4.5%, T = 3 years ? P = (135 ◊ 100)/(4.5 ◊ 3) = £1000.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Confusing SI with compound interest** ó in SI the interest does not earn further interest; each year adds the same amount.",
              "**Time must be in years** ó 18 months = 1.5 years; 9 months = 0.75 years.",
              "**Total vs interest** ó the question may ask for the total amount, not just the interest earned.",
            ],
          },
        ],
        examinerTips: [
          "Write the formula SI = PRT/100 at the start of every simple interest question ó it reminds you of all three variables and prevents confusion with compound interest.",
          "If the time is given in months, convert to years before substituting.",
          "After calculating SI, re-read the question to decide whether it asks for the interest alone or the total amount.",
          "For 'find the rate' questions, rearrange the formula before substituting, not after.",
        ],
        commonMistakes: [
          "Adding compound interest layers to a simple interest question ó in SI the principal stays fixed; only interest = PRT/100 for the whole period.",
          "Forgetting to add SI back to P to get the total amount when that is what the question requests.",
        ],
        recap: [
          "Calculate the simple interest on £5000 at 3.5% per annum for 4 years. [2]",
          "Find the total amount after investing £800 at 6% simple interest for 2.5 years. [2]",
          "The simple interest on £1200 for 3 years is £216. Find the annual rate. [2]",
          "How many years does it take for £500 to earn £100 simple interest at 4% per annum? [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 30. Compound Interest
  // -------------------------------------------------------------
  {
    number: 30,
    title: "Compound Interest",
    section: "Number",
    topic: "Percentages",
    intro: `Revision notes for **Compound Interest** under **Percentages** (Number). Cambridge IGCSE Mathematics (0580). Compound interest grows exponentially because each period's interest itself earns interest ó the multiplier raised to a power is the key tool.`,
    subheadings: [
      {
        title: "Compound Interest",
        body: `**Compound interest (CI)** is calculated on the **accumulated amount** at the end of each period ó interest earned in earlier periods adds to the principal and itself earns interest.\n\n**Formula:** A = P ◊ (1 + r/100)n\n\nwhere **A** = final amount, **P** = principal, **r** = annual rate (%), **n** = number of years.\n\n**CI earned** = A - P.\n\n**Example:** £3000 at 4% compound interest for 5 years.\nA = 3000 ◊ (1.04)5 = 3000 ◊ 1.2167 ò £3650.10. CI = £650.10.`,
        groups: [
          {
            subTitle: "Applying the compound interest formula",
            bullets: [
              "**Write the multiplier:** 1 + r/100; for 6%: multiplier = 1.06.",
              "**Raise to the power n:** A = P ◊ (multiplier)n. Use the calculator's power key (xn or ^).",
              "**Example:** £1500 at 3.5% for 4 years ? A = 1500 ◊ (1.035)4 = £1724.97 (2 d.p.).",
              "**CI vs SI:** CI grows faster because earlier interest compounds; after 10 years the gap is significant.",
              "**Depreciation (compound decrease):** A = P ◊ (1 - r/100)n; e.g. a car depreciating at 12% per year.",
            ],
          },
          {
            subTitle: "Compound decrease (depreciation)",
            bullets: [
              "**Multiplier for a decrease:** 1 - r/100; for 15% decrease: multiplier = 0.85.",
              "**Example:** £18 000 car depreciating at 12% per year for 3 years: A = 18000 ◊ (0.88)≥ = £13 759.49.",
              "**Loss in value** = P - A = £18 000 - £13 759.49 = £4240.51.",
              "**Compare with SI loss:** SI at 12% for 3 years = £18 000 ◊ 0.12 ◊ 3 = £6480; compound depreciation is less (the base shrinks each year).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using the SI formula for a CI question** ó always check whether the question says 'compound' or 'simple'.",
              "**Rounding too early** ó keep full precision on (multiplier)n in the calculator; round only the final answer to 2 d.p.",
              "**Reporting A instead of CI** ó if the question asks for the interest earned, subtract P from A.",
            ],
          },
        ],
        examinerTips: [
          "Always write A = P ◊ (1 + r/100)n before substituting ó this single formula covers all compound interest questions.",
          "Use the calculator's power function: type 1.04 ^ 5 (or 1.04 xn 5) rather than multiplying 1.04 by itself five times.",
          "For depreciation, check the multiplier is less than 1 ó 0.88 for 12% decrease, not 1.12.",
          "If the question gives a final amount and asks for the initial investment, divide A by (multiplier)n.",
        ],
        commonMistakes: [
          "Adding the annual interest (P ◊ r/100) n times instead of compounding ó this gives simple interest, not compound.",
          "Using the percentage directly (e.g. 0.04) as the multiplier instead of (1 + 0.04 = 1.04) ó this gives only the interest, not the total amount.",
        ],
        recap: [
          "Find the amount after investing £4000 at 5% compound interest per annum for 3 years. [2]",
          "A car worth £15 000 depreciates at 8% per year. Find its value after 4 years. [2]",
          "The difference between compound interest and simple interest on a sum of £2000 at 4% for 2 years. [3]",
          "An investment of £P grows to £6655.58 at 3% compound interest for 3 years. Find P. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 31. Converting Fractions, Decimals & Percentages
  // -------------------------------------------------------------
  {
    number: 31,
    title: "Converting Fractions, Decimals & Percentages",
    section: "Number",
    topic: "FDP Conversion & Ordering",
    intro: `Revision notes for **Converting Fractions, Decimals & Percentages** under **FDP Conversion & Ordering** (Number). Cambridge IGCSE Mathematics (0580). Moving fluently between all three representations is a core skill tested throughout the IGCSE course ó in probability, statistics, and number questions alike.`,
    subheadings: [
      {
        title: "Converting Fractions, Decimals & Percentages",
        body: `Fractions, decimals, and percentages are three ways to represent the same value. Switching between them is a matter of applying fixed rules:\n\n- **Fraction ? decimal:** divide numerator by denominator. 3/8 = 3 ˜ 8 = 0.375.\n- **Decimal ? fraction:** write the decimal as the numerator over the appropriate power of 10, then simplify. 0.36 = 36/100 = 9/25.\n- **Fraction ? percentage:** ◊ 100%. 3/8 ◊ 100 = 37.5%.\n- **Percentage ? decimal:** ˜ 100. 47% = 0.47.\n- **Decimal ? percentage:** ◊ 100. 0.375 = 37.5%.\n- **Percentage ? fraction:** write over 100, then simplify. 45% = 45/100 = 9/20.`,
        groups: [
          {
            subTitle: "The six conversion routes",
            bullets: [
              "**Fraction ? decimal:** divide top by bottom ó 7/16 = 7 ˜ 16 = 0.4375.",
              "**Decimal ? fraction:** count decimal places to determine the power of 10 denominator ó 0.045 = 45/1000 = 9/200.",
              "**Fraction ? percentage:** (numerator ˜ denominator) ◊ 100 ó 5/8 ? 0.625 ? 62.5%.",
              "**Percentage ? fraction:** place over 100 and simplify ó 72% = 72/100 = 18/25.",
              "**Percentage ? decimal:** shift decimal point two places left ó 3.5% = 0.035.",
              "**Decimal ? percentage:** shift decimal point two places right ó 0.072 = 7.2%.",
            ],
          },
          {
            subTitle: "Key equivalences to memorise",
            bullets: [
              "**1/4 = 0.25 = 25%; 1/2 = 0.5 = 50%; 3/4 = 0.75 = 75%.**",
              "**1/3 ò 0.333Ö ò 33.3%; 2/3 ò 0.667Ö ò 66.7%.**",
              "**1/5 = 0.2 = 20%; 1/8 = 0.125 = 12.5%; 1/10 = 0.1 = 10%.**",
              "**Recurring decimals from fractions:** 1/9 = 0.111Ö; 1/7 = 0.142857Ö (6-digit cycle).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**% ? decimal: dividing by 10 instead of 100** ó 35% = 0.35, not 3.5.",
              "**Decimal ? fraction: not simplifying** ó 0.6 = 6/10 must simplify to 3/5.",
              "**Recurring decimal fractions** ó do not round 1/3 to 0.33; keep it as a fraction or the exact decimal 0.3Ø.",
            ],
          },
        ],
        examinerTips: [
          "Learn the key FDP equivalences ó they come up in multiple-choice questions where quick recall saves time.",
          "When converting a percentage to a fraction, simplify fully by finding the HCF of the numerator and 100.",
          "For recurring decimals in a comparison question, use the fraction form rather than a rounded decimal to avoid ordering errors.",
          "On non-calculator paper, 'show your working' means write the intermediate step ó e.g. 0.4375 before writing 7/16 converted as a decimal.",
        ],
        commonMistakes: [
          "Moving the decimal point one place instead of two when converting between decimal and percentage.",
          "Leaving the fraction unsimplified ó 60/100 must be written as 3/5 to score full marks.",
        ],
        recap: [
          "Convert (a) 7/20 to a percentage, (b) 0.064 to a fraction in simplest form, (c) 83% to a decimal. [3]",
          "Show that 3/8, 0.38, and 37.5% are NOT all equal. [2]",
          "Write 0.0Ø6Ø (the recurring decimal 0.0666Ö) as a fraction. [2]",
          "Order 5/8, 0.63, and 62% from smallest to largest. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 32. Ordering Fractions, Decimals & Percentages
  // -------------------------------------------------------------
  {
    number: 32,
    title: "Ordering Fractions, Decimals & Percentages",
    section: "Number",
    topic: "FDP Conversion & Ordering",
    intro: `Revision notes for **Ordering Fractions, Decimals & Percentages** under **FDP Conversion & Ordering** (Number). Cambridge IGCSE Mathematics (0580). Ordering a mixed list of fractions, decimals, and percentages requires converting everything to the same form before comparing.`,
    subheadings: [
      {
        title: "Ordering Fractions, Decimals & Percentages",
        body: `To order a mixed list containing fractions, decimals, and percentages, **convert all values to decimals** (or all to percentages). This creates a uniform format suitable for direct comparison. Place them on a mental or drawn number line, then read off the order.\n\n**Example:** Order 3/5, 0.58, and 61% from smallest to largest.\n- 3/5 = 0.6\n- 0.58 stays as 0.58\n- 61% = 0.61\n\nOrder: 0.58 < 0.6 < 0.61 ? answer: 0.58, 3/5, 61%.`,
        groups: [
          {
            subTitle: "Strategy for ordering FDP",
            bullets: [
              "**Convert all to decimals:** convert fractions by dividing and percentages by ˜ 100.",
              "**List the decimals and order them:** use a number line sketch if the values are close together.",
              "**Write the final answer in the original form:** the question asks for the order of the original values, not the decimals.",
              "**Ascending (smallest first) vs descending (largest first):** re-read the question.",
              "**Negatives:** -3/5 = -0.6, which is less than -0.58; negative numbers closer to zero are larger.",
            ],
          },
          {
            subTitle: "Handling close values",
            bullets: [
              "**Use more decimal places when values are very close:** 5/9 ò 0.5556, 5/8 = 0.625 ó no ambiguity; but 5/9 vs 0.556 requires 4 d.p. precision.",
              "**Common-denominator method for fractions:** compare 5/12 and 7/18 by writing as 15/36 and 14/36 ? 7/18 < 5/12.",
              "**Cross-multiply to compare two fractions:** a/b vs c/d ó compare ad with bc; the larger product indicates the larger fraction.",
              "**Percentage precision:** 33.3% ò 1/3 exactly; do not round when comparing against 1/3.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Ordering fractions by denominator size alone** ó 1/5 < 1/4 because a bigger denominator means smaller pieces, not because 5 > 4.",
              "**Rounding and losing ordering information** ó rounding 2/3 to 0.67 and 3/4 to 0.75 is fine, but rounding too early to 1 d.p. may make two different values look identical.",
              "**Writing the answer in decimal form when fractions/percentages were given** ó always answer in the form used in the question.",
            ],
          },
        ],
        examinerTips: [
          "If the question says 'show your working', write each conversion explicitly on a separate line before stating the order.",
          "For ordering questions in multiple-choice format, eliminate the obviously wrong options by checking the extreme values first.",
          "When values are very close, convert to 4 decimal places before comparing.",
          "Always re-read the original question to write the answer in the originally stated forms (fractions/decimals/percentages), not in the converted form.",
        ],
        commonMistakes: [
          "Writing the answer in converted decimal form rather than converting back to the original representations the question used.",
          "Placing a negative fraction in the wrong position ó -3/4 = -0.75 is smaller (further left) than -1/2 = -0.5.",
        ],
        recap: [
          "Write these in order from smallest to largest: 0.7, 68%, 3/4. [2]",
          "Order 7/12, 0.57, 58.5%, and 4/7 from largest to smallest. Show all working. [3]",
          "Explain why you cannot order 2/3, 0.66, and 65% by comparing the numerals directly. [2]",
          "Circle the largest value: 11/15, 72%, 0.731. Justify your answer. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 33. Introduction to Ratios
  // -------------------------------------------------------------
  {
    number: 33,
    title: "Introduction to Ratios",
    section: "Number",
    topic: "Ratio & Proportion",
    intro: `Revision notes for **Introduction to Ratios** under **Ratio & Proportion** (Number). Cambridge IGCSE Mathematics (0580). Ratios compare quantities of the same type ó understanding how to read, write, and interpret them is the foundation for all proportion, scaling, and sharing problems.`,
    subheadings: [
      {
        title: "Introduction to Ratios",
        body: `A **ratio** compares two or more quantities of the same kind, written with a colon: a : b. The order of the numbers must match the order of the quantities described.\n\nRatios can be **simplified** in the same way as fractions ó divide all parts by their HCF. A ratio in its **simplest form** (or **lowest terms**) has no integer other than 1 as a common factor of all parts.\n\nA ratio can also be expressed as a **fraction** ó if the ratio of boys to girls is 3 : 5, the fraction of the total who are boys is 3/8 (since there are 3 + 5 = 8 parts in total).`,
        groups: [
          {
            subTitle: "Reading and writing ratios",
            bullets: [
              "**Order matters:** 'red to blue = 3 : 7' is not the same as 'blue to red = 3 : 7'; match the ratio to the description.",
              "**Same units required:** to compare 50 cm and 2 m, convert both to cm first ? 50 : 200 = 1 : 4.",
              "**Three-part ratios:** A : B : C = 2 : 3 : 5 means three quantities in that proportion.",
              "**Ratio vs fraction:** ratio 2 : 3 means 2 parts to 3 parts; total = 5 parts; fraction of first quantity = 2/5.",
              "**Unit ratio (1 : n):** divide both sides by the first value ó 4 : 10 = 1 : 2.5.",
            ],
          },
          {
            subTitle: "Simplifying ratios",
            bullets: [
              "**Divide all parts by their HCF:** 24 : 36 ó HCF = 12 ? 2 : 3.",
              "**Ratios with decimals:** multiply all parts to clear decimals ó 0.6 : 0.9 ? ◊ 10 ? 6 : 9 ? 2 : 3.",
              "**Ratios with fractions:** multiply all parts by the LCM of the denominators ó 1/2 : 2/3 ? ◊ 6 ? 3 : 4.",
              "**Three-part simplification:** 12 : 18 : 24 ó HCF = 6 ? 2 : 3 : 4.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Failing to convert units before writing the ratio** ó 300 g : 1.2 kg must become 300 : 1200 = 1 : 4.",
              "**Reversing the order** ó 'ratio of A to B' and 'ratio of B to A' have different meanings.",
              "**Treating a ratio as a fraction directly** ó a ratio 3 : 5 is NOT the fraction 3/5; it represents 3/8 and 5/8 of the total.",
            ],
          },
        ],
        examinerTips: [
          "Always state the units when setting up a ratio ó writing '300 g : 1200 g' before simplifying prevents unit errors.",
          "For 'write the ratio in the form 1 : n', divide through by the first number ó the result may be a decimal, which is acceptable.",
          "In three-part ratio questions, check the sum of parts matches the total stated in the question.",
          "If a question gives a ratio and a total, the first step is always to find the value of one part.",
        ],
        commonMistakes: [
          "Writing 2 : 3 as the fraction 2/3 ó the fraction corresponding to 2 parts in a 2 : 3 ratio is 2/5, not 2/3.",
          "Simplifying only part of the ratio ó divide all parts by the HCF, not just two of three.",
        ],
        recap: [
          "Simplify the ratio 48 : 60. [1]",
          "Write the ratio 1.2 m : 80 cm in its simplest form. [2]",
          "The ratio of red to blue to green counters is 2 : 5 : 3. What fraction of the counters are blue? [1]",
          "Write the ratio 2/3 : 5/6 in its simplest integer form. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 34. Equivalent and Simplified Ratios
  // -------------------------------------------------------------
  {
    number: 34,
    title: "Equivalent & Simplified Ratios",
    section: "Number",
    topic: "Ratio & Proportion",
    intro: `Revision notes for **Equivalent & Simplified Ratios** under **Ratio & Proportion** (Number). Cambridge IGCSE Mathematics (0580). Generating equivalent ratios and reducing them to simplest form are the operations that underpin scaling, map work, and proportion questions.`,
    subheadings: [
      {
        title: "Equivalent & Simplified Ratios",
        body: `**Equivalent ratios** represent the same relationship multiplied up or down. Multiplying or dividing all parts of a ratio by the same non-zero integer produces an equivalent ratio.\n\n3 : 5 = 6 : 10 = 9 : 15 = 15 : 25 (all equivalent)\n\n**Simplifying** means dividing all parts by their HCF to reach the unique simplest form. This is the reverse of scaling up.\n\nRatios are also used in **scale factors** ó a map scale of 1 : 50 000 means every 1 cm on the map represents 50 000 cm (500 m) in real life.`,
        groups: [
          {
            subTitle: "Generating and recognising equivalent ratios",
            bullets: [
              "**Scale up:** multiply all parts by the same integer ó 2 : 7 ? ◊4 ? 8 : 28.",
              "**Scale down (simplify):** divide all parts by their HCF ó 20 : 36 ? ˜4 ? 5 : 9.",
              "**Testing equivalence:** 4 : 10 and 6 : 15 are equivalent because both simplify to 2 : 5.",
              "**Scale factor:** if ratio A : B = 3 : 8 and B = 40, find the scale factor applied to 8 ? ◊5 ? A = 15.",
              "**Unit ratio:** divide both by the first part to express as 1 : n ó 5 : 12 = 1 : 2.4.",
            ],
          },
          {
            subTitle: "Applications in scale and maps",
            bullets: [
              "**Map scale 1 : n:** real distance = map distance ◊ n (in the same units).",
              "**Example:** scale 1 : 25 000; map distance = 4.5 cm ? real = 4.5 ◊ 25 000 = 112 500 cm = 1.125 km.",
              "**Model scale:** a model car at 1 : 20 is 1/20 of real size.",
              "**Scaling a recipe:** if a recipe for 4 serves uses 300 g flour, for 10 serves multiply by 10/4 = 2.5 ? 750 g.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Forgetting to apply the same multiplier to all parts** ó in a three-part ratio, all three parts must be scaled by the same factor.",
              "**Using a decimal in the simplest form when integers are possible** ó 3 : 7.5 simplifies to 2 : 5 (multiply by 2 to clear the decimal).",
              "**Map scale confusion** ó multiplying map distance by the scale gives real distance in the same units as the map measurement.",
            ],
          },
        ],
        examinerTips: [
          "Always divide by the HCF of all parts simultaneously ó do not simplify two parts and leave the third unchanged.",
          "For map/scale questions, write the units at every stage to prevent confusion between cm, m, and km.",
          "When generating an equivalent ratio to find a missing value, identify what the scale factor is first, then apply it.",
          "Confirm simplest form by checking the HCF of the final parts equals 1.",
        ],
        commonMistakes: [
          "Scaling only the first part of a three-part ratio ó all parts must be multiplied or divided by the same factor.",
          "Confusing scale-up and scale-down ó 'write as 1 : n' requires dividing all parts by the first part, not multiplying.",
        ],
        recap: [
          "Write three ratios equivalent to 4 : 9. [2]",
          "Simplify 150 : 225 : 300. [2]",
          "A map has scale 1 : 50 000. Two towns are 7.4 cm apart on the map. Find the real distance in km. [2]",
          "The ratio of workers to machines is 5 : 2. If there are 18 machines, how many workers are there? [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 35. Sharing in a Ratio
  // -------------------------------------------------------------
  {
    number: 35,
    title: "Sharing in a Ratio",
    section: "Number",
    topic: "Ratio & Proportion",
    intro: `Revision notes for **Sharing in a Ratio** under **Ratio & Proportion** (Number). Cambridge IGCSE Mathematics (0580). Sharing a quantity in a given ratio is one of the most common ratio applications ó the unitary method (find the value of one part first) makes it systematic and reliable.`,
    subheadings: [
      {
        title: "Sharing in a Ratio",
        body: `To share a total in a given ratio, use the **unitary method**:\n1. Add all the parts of the ratio to find the total number of parts.\n2. Divide the total quantity by the number of parts to find the value of **one part**.\n3. Multiply by each ratio number to find each share.\n\n**Example:** Share £240 in the ratio 3 : 5.\nTotal parts = 3 + 5 = 8.\nOne part = £240 ˜ 8 = £30.\nShares: 3 ◊ £30 = £90 and 5 ◊ £30 = £150.\nCheck: £90 + £150 = £240 ?.`,
        groups: [
          {
            subTitle: "The unitary method",
            bullets: [
              "**Add ratio parts:** 2 : 3 : 5 ? 2 + 3 + 5 = 10 parts.",
              "**Value of one part:** total ˜ 10.",
              "**Each share:** multiply one-part value by each ratio number.",
              "**Always check:** the shares must sum back to the original total.",
              "**Three-part sharing:** £480 in ratio 1 : 2 : 3 ? 6 parts ? one part = £80 ? shares: £80, £160, £240.",
            ],
          },
          {
            subTitle: "Finding the total from one share",
            bullets: [
              "**Given one person's share:** if A's share in a 3 : 5 ratio is £120, then one part = £120 ˜ 3 = £40, so total = 8 ◊ £40 = £320.",
              "**Given the difference between shares:** if the difference is £60 and ratio is 7 : 3, the difference = 4 parts ? one part = £15 ? total = 10 ◊ £15 = £150.",
              "**Work backwards:** identify how many parts correspond to the given value, divide to find one part, then find total or other shares as needed.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not adding the ratio parts** ó dividing the total by one ratio number instead of the sum of all parts.",
              "**Not checking the total** ó always verify the shares add back to the original quantity.",
              "**Misidentifying which share corresponds to which part** ó match the ratio to the named quantities in the correct order.",
            ],
          },
        ],
        examinerTips: [
          "Write '1 part = ...' clearly as a step ó this earns a method mark and makes subsequent multiplications easy to check.",
          "For three-part sharing, always find one part first before calculating all three shares.",
          "If given one person's share, work backwards to find one part before calculating the total.",
          "The sum-check at the end takes five seconds and can recover lost marks if you notice an error.",
        ],
        commonMistakes: [
          "Dividing by the first ratio number instead of the sum ó in a 3 : 7 ratio the total is divided by 10, not by 3.",
          "Adding the shares incorrectly to verify ó write out each share explicitly before summing.",
        ],
        recap: [
          "Share 350 g in the ratio 2 : 3. [2]",
          "Three friends share a prize of £840 in the ratio 3 : 4 : 5. Find the largest share. [2]",
          "Amy and Ben share money in the ratio 5 : 3. Ben receives £72. How much does Amy receive? [2]",
          "The ratio of red to blue to yellow paint in a tin is 2 : 5 : 3. If there are 300 ml of blue paint, find the total amount of paint. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 36. Problem Solving with Ratios
  // -------------------------------------------------------------
  {
    number: 36,
    title: "Problem Solving with Ratios",
    section: "Number",
    topic: "Ratio & Proportion",
    intro: `Revision notes for **Problem Solving with Ratios** under **Ratio & Proportion** (Number). Cambridge IGCSE Mathematics (0580). Ratio problems in context ó mixing, combining, and comparing ó require careful setup of the ratio before any arithmetic begins.`,
    subheadings: [
      {
        title: "Problem Solving with Ratios",
        body: `Ratio problems go beyond simple sharing. Common contexts include:\n\n- **Mixing:** combining two ratios or finding the ratio of a mixture after adding more of one component.\n- **Comparing:** using ratios to determine which option is better value or which fraction is larger.\n- **Forming equations:** using a ratio and a total to set up an equation in an unknown.\n\n**Combined ratio (three quantities from two given ratios):** if A : B = 2 : 3 and B : C = 4 : 5, scale so that B matches. A : B = 8 : 12 and B : C = 12 : 15, so A : B : C = 8 : 12 : 15.`,
        groups: [
          {
            subTitle: "Common problem types and methods",
            bullets: [
              "**Mixing problems:** if orange : mango = 3 : 2 in a 500 ml drink, orange = 3/5 ◊ 500 = 300 ml; to make 1.2 litres, multiply all parts by the scale factor 1.2/0.5 = 2.4.",
              "**Combining two ratios:** scale so the shared quantity matches ó A : B = 2 : 3, B : C = 6 : 7 ? A : B = 4 : 6, so A : B : C = 4 : 6 : 7.",
              "**Equation setup:** if the ratio of x : y is 2 : 7 and x + y = 45, then 2n + 7n = 45 ? n = 5 ? x = 10, y = 35.",
              "**Better value comparison:** compare the cost per gram or per unit ó 200 g for £2.40 vs 350 g for £4.20 ? £12/kg vs £12/kg ? equal value.",
              "**Angle problems:** if angles in a triangle are in ratio 2 : 3 : 4, the parts are 9, so one part = 180 ˜ 9 = 20∞, and the angles are 40∞, 60∞, 80∞.",
            ],
          },
          {
            subTitle: "Multi-step ratio strategies",
            bullets: [
              "**Extract the ratio and the total** from the worded context first.",
              "**Find the value of one part** using the unitary method.",
              "**Answer the specific question** ó sometimes it asks for one share, sometimes for a difference, sometimes for the total.",
              "**Check the result makes sense in context** ó shares cannot be negative; angles must sum to 180∞ in a triangle.",
              "**Consider a scale factor** when increasing or decreasing both quantities in a fixed ratio.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Misreading which quantity corresponds to which part** ó underline the names in the question and match them to the ratio parts.",
              "**Using a fraction instead of a ratio for sharing** ó a 3 : 4 ratio gives shares 3/7 and 4/7 of the total, not 3/4.",
              "**Forgetting to check the sum** ó especially in three-part problems where a small arithmetic slip changes two of the three shares.",
            ],
          },
        ],
        examinerTips: [
          "In mixing problems, find the fraction of each component first, then apply it to the new total.",
          "For combined ratio questions, the shared quantity must be made identical ó find the LCM of the two B values and scale each ratio accordingly.",
          "Draw a quick bar model in the margin ó visualising the parts makes the setup obvious and earns working marks.",
          "In 'best value' questions, always calculate the price per common unit (per 100 g, per litre) before concluding.",
        ],
        commonMistakes: [
          "Assuming ratios add ó 3 : 4 combined with 2 : 5 does not give 5 : 9; only common quantities can be combined via scaling.",
          "Using the first ratio number as the divisor ó always divide by the sum of all parts.",
        ],
        recap: [
          "A drink mixes juice and water in the ratio 5 : 7. How much juice is needed for 780 ml of drink? [2]",
          "x : y = 3 : 5 and x + y = 64. Find x and y. [2]",
          "Combine A : B = 3 : 4 and B : C = 6 : 5 into a single ratio A : B : C. [3]",
          "The angles of a quadrilateral are in the ratio 1 : 2 : 3 : 4. Find the largest angle. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 37. Direct & Inverse Proportion
  // -------------------------------------------------------------
  {
    number: 37,
    title: "Direct & Inverse Proportion",
    section: "Number",
    topic: "Ratio & Proportion",
    intro: `Revision notes for **Direct & Inverse Proportion** under **Ratio & Proportion** (Number). Cambridge IGCSE Mathematics (0580). Proportion describes how two quantities vary together ó directly (both increase) or inversely (one increases as the other decreases) ó and is the algebraic heart of many exam word problems.`,
    subheadings: [
      {
        title: "Direct & Inverse Proportion",
        body: `**Direct proportion:** two quantities increase in the same ratio. If y is directly proportional to x, then y = kx for some constant k (the **constant of proportionality**). Doubling x doubles y.\n\n**Inverse proportion:** one quantity increases as the other decreases. If y is inversely proportional to x, then y = k/x. Doubling x halves y.\n\n**Method:**\n1. Write the proportion equation (y = kx or y = k/x).\n2. Substitute the given pair to find k.\n3. Use the completed formula to answer the question.`,
        groups: [
          {
            subTitle: "Direct proportion",
            bullets: [
              "**Setup:** y ? x means y = kx. If y = 40 when x = 5, then k = 8, so y = 8x.",
              "**Scaling approach:** if 6 pencils cost £1.80, then 10 pencils cost £1.80 ◊ (10/6) = £3.00.",
              "**Graph:** a direct proportion graph is a straight line through the origin.",
              "**Other direct forms:** y ? x≤ (y = kx≤) ó doubling x quadruples y; used for area-scale relationships.",
              "**Check:** doubling x should double y ó verify against your formula.",
            ],
          },
          {
            subTitle: "Inverse proportion",
            bullets: [
              "**Setup:** y ? 1/x means y = k/x. If y = 12 when x = 3, then k = 36, so y = 36/x.",
              "**Classic example:** 6 workers complete a job in 12 days. Inversely proportional: k = 72 worker-days, so 8 workers take 72 ˜ 8 = 9 days.",
              "**Graph:** an inverse proportion graph is a decreasing curve (hyperbola) ó never a straight line.",
              "**Speed-time:** for a fixed distance, speed and time are inversely proportional ó double the speed, half the time.",
              "**Check:** doubling x should halve y.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Applying direct proportion to an inverse problem** ó more workers take LESS time, not more; read the physical context.",
              "**Forgetting to find k first** ó the constant must be calculated from the given pair before answering.",
              "**Confusing proportional to x with proportional to x≤** ó check the wording: 'proportional to the square ofÖ' means kx≤.",
            ],
          },
        ],
        examinerTips: [
          "Always write the proportion statement with k before substituting values ó this clarifies the structure and earns a method mark.",
          "Find k using the given data pair, then re-use the completed formula for the new value asked.",
          "In context, ask 'if x doubles, what happens to y physically?' ó this sanity-check identifies direct vs inverse instantly.",
          "For 'proportional to the square' questions, remember y = kx≤, so tripling x multiplies y by 9.",
        ],
        commonMistakes: [
          "Using y = kx for an inverse problem ó more workers taking more time is a clear physical contradiction; catch it before the final answer.",
          "Solving with a direct scale factor when the relationship is quadratic ó if y ? x≤ and x doubles, y is multiplied by 4, not 2.",
        ],
        recap: [
          "y is directly proportional to x. When x = 8, y = 28. Find y when x = 12. [3]",
          "Six identical machines complete a task in 15 hours. How long do 10 machines take? [2]",
          "y is inversely proportional to x≤. When x = 3, y = 20. Find y when x = 5. [3]",
          "State whether each of these is direct or inverse proportion: (a) number of workers and time to build a wall; (b) cost of petrol and volume purchased. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 38. Money Calculations
  // -------------------------------------------------------------
  {
    number: 38,
    title: "Money Calculations",
    section: "Number",
    topic: "Money, Time & Exchange",
    intro: `Revision notes for **Money Calculations** under **Money, Time & Exchange** (Number). Cambridge IGCSE Mathematics (0580). Financial calculations ó wages, bills, discounts, VAT, and profit ó combine percentage, ratio, and arithmetic skills in real-world contexts.`,
    subheadings: [
      {
        title: "Money Calculations",
        body: `Money problems combine several number skills. The most common contexts are:\n\n- **Wages:** basic pay (hours ◊ rate), overtime (often 1.5 ◊ or 2 ◊ the hourly rate), and total earnings.\n- **Bills:** tiered charges (standing charge + usage ◊ unit rate) and totals.\n- **Discounts and VAT:** percentage decrease and increase applied to prices.\n- **Profit and loss:** profit = selling price - cost price; percentage profit = (profit ˜ cost) ◊ 100.\n\n**Example ó wage with overtime:** basic: 38 hours ◊ £11.50 = £437; overtime: 6 hours ◊ (1.5 ◊ £11.50) = £103.50; total = £540.50.`,
        groups: [
          {
            subTitle: "Wages and overtime",
            bullets: [
              "**Basic pay:** hours ◊ hourly rate ó 38 ◊ £11.50 = £437.",
              "**Overtime at time-and-a-half:** rate ◊ 1.5 ó 6 h at £11.50 ◊ 1.5 = £103.50.",
              "**Overtime at double time:** rate ◊ 2.",
              "**Total wage:** basic + overtime; add any bonus separately.",
              "**Commission:** percentage of sales value ó 4% of £12 500 = £500.",
            ],
          },
          {
            subTitle: "Bills, discounts, and profit",
            bullets: [
              "**Electricity bill:** standing charge (£12) + (units ◊ rate) ó 350 units ◊ £0.18 = £63 ? total £75.",
              "**Discount:** percentage decrease ó £86 with 15% off ? 86 ◊ 0.85 = £73.10.",
              "**VAT (a tax, e.g. 20%):** percentage increase ó £240 + VAT = 240 ◊ 1.20 = £288.",
              "**Profit:** revenue - cost; percentage profit = (profit ˜ cost price) ◊ 100.",
              "**Loss:** cost price - selling price; percentage loss = (loss ˜ cost) ◊ 100.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not rounding money correctly** ó round to 2 decimal places (pence) unless told otherwise.",
              "**Percentage profit uses the COST price as the denominator** ó not the selling price.",
              "**Tiered rates:** read the question carefully to see which units attract which rate before calculating.",
            ],
          },
        ],
        examinerTips: [
          "In wage questions, set out basic pay, overtime, and any bonus as separate labelled lines before summing.",
          "For bills with a standing charge, add it last and label it clearly.",
          "In profit and loss questions, always use the cost price as the original value when calculating the percentage.",
          "Show the multiplier (e.g. ◊ 1.20 for VAT) as a distinct step in your working.",
        ],
        commonMistakes: [
          "Calculating percentage profit using the selling price instead of the cost price.",
          "Forgetting the standing charge in utility-bill questions.",
        ],
        recap: [
          "A worker earns £9.80 per hour for 35 hours plus 4 hours overtime at time-and-a-half. Find the total wage. [3]",
          "An electricity bill is made up of a £14.20 standing charge plus 410 units at £0.16 per unit. Find the total bill. [2]",
          "A shop buys a bike for £180 and sells it for £243. Calculate the percentage profit. [2]",
          "A jacket priced £85 is reduced by 30% in a sale. Find the sale price. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 39. Time
  // -------------------------------------------------------------
  {
    number: 39,
    title: "Time",
    section: "Number",
    topic: "Money, Time & Exchange",
    intro: `Revision notes for **Time** under **Money, Time & Exchange** (Number). Cambridge IGCSE Mathematics (0580). Time calculations appear throughout the IGCSE syllabus ó in speed, timetables, compound interest, and data interpretation ó and require correct handling of the sexagesimal (base-60) system.`,
    subheadings: [
      {
        title: "Time",
        body: `**Time** is measured in a **base-60** system: 60 seconds = 1 minute, 60 minutes = 1 hour, 24 hours = 1 day. This is not base 10, so you cannot simply add the digits when converting or calculating.\n\n**12-hour clock:** uses am (midnight to noon) and pm (noon to midnight). **24-hour clock:** runs from 00:00 (midnight) to 23:59.\n\n**Converting hours to decimal:** express minutes as a fraction of 60. 2 h 45 min = 2 + 45/60 = 2.75 hours. This decimal form is required for speed calculations (speed = distance ˜ time).`,
        groups: [
          {
            subTitle: "Reading and converting time",
            bullets: [
              "**12-hour to 24-hour:** add 12 to any pm time after 12:00 noon ó 3:45 pm = 15:45; midnight = 00:00.",
              "**24-hour to 12-hour:** times = 13:00 subtract 12 and add pm ó 20:30 = 8:30 pm.",
              "**Minutes to decimal hours:** minutes ˜ 60 ó 48 minutes = 0.8 hours.",
              "**Decimal hours to hours and minutes:** multiply the decimal part by 60 ó 3.4 hours = 3 h 24 min.",
              "**Seconds to minutes:** seconds ˜ 60; 150 seconds = 2 min 30 sec.",
            ],
          },
          {
            subTitle: "Calculating time intervals",
            bullets: [
              "**Direct subtraction:** find the time from 09:35 to 14:10 ? subtract: 14:10 - 09:35 = 4 h 35 min.",
              "**Bridge method:** count forward ó from 09:35 to 10:00 = 25 min; from 10:00 to 14:10 = 4 h 10 min; total = 4 h 35 min.",
              "**Crossing midnight:** 22:45 to 03:15 ? 22:45 to 00:00 = 1 h 15 min; 00:00 to 03:15 = 3 h 15 min; total = 4 h 30 min.",
              "**Timetable questions:** read departure and arrival from the given table; calculate the difference.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Treating time as decimal incorrectly** ó 1 h 30 min ? 1.3 hours; it is 1.5 hours (30 ˜ 60 = 0.5).",
              "**Speed calculations using minutes instead of hours** ó if distance is in km and speed is in km/h, time must be in decimal hours.",
              "**Ignoring midnight crossings** ó when a time interval crosses midnight, split the calculation at midnight.",
            ],
          },
        ],
        examinerTips: [
          "For speed problems, always convert time to decimal hours before dividing distance by time.",
          "In timetable problems, write out both times in 24-hour format before subtracting.",
          "When crossing midnight, split the interval into two parts and add them.",
          "To convert a decimal time back to hours and minutes, keep the whole number as hours and multiply the decimal by 60.",
        ],
        commonMistakes: [
          "Writing 2 h 15 min as 2.15 hours ó the decimal form is 2.25 hours (15/60 = 0.25).",
          "Subtracting time like base-10 numbers ó 14:10 - 09:35 is not 05:75; regroup correctly.",
        ],
        recap: [
          "Convert 3 hours 48 minutes to decimal hours. [1]",
          "A train departs at 08:52 and arrives at 11:17. How long is the journey in hours and minutes? [2]",
          "Write 20:35 in 12-hour clock form. [1]",
          "A flight leaves at 23:40 and lasts 5 hours 25 minutes. What local time does it arrive (assume no time zone change)? [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 40. Exchange Rates
  // -------------------------------------------------------------
  {
    number: 40,
    title: "Exchange Rates",
    section: "Number",
    topic: "Money, Time & Exchange",
    intro: `Revision notes for **Exchange Rates** under **Money, Time & Exchange** (Number). Cambridge IGCSE Mathematics (0580). Exchange rate problems apply multiplication and division of decimals in a financial context ó the key skill is identifying which direction to multiply or divide.`,
    subheadings: [
      {
        title: "Exchange Rates",
        body: `An **exchange rate** tells you how much of one currency equals one unit of another. For example, if the exchange rate is £1 = Ä1.18, then to convert **pounds to euros**, multiply by 1.18; to convert **euros to pounds**, divide by 1.18 (or multiply by the reciprocal, 1/1.18 ò 0.847).\n\n**Rule of thumb:** multiply when going from the base currency to the other; divide when going back.\n\n**Example:** Convert £350 to euros at £1 = Ä1.18 ? 350 ◊ 1.18 = Ä413. Convert Ä250 back to pounds ? 250 ˜ 1.18 = £211.86 (2 d.p.).`,
        groups: [
          {
            subTitle: "Converting currencies",
            bullets: [
              "**Multiply to get more units:** £1 = Ä1.18 ? £350 ? ◊1.18 ? Ä413.",
              "**Divide to get fewer units:** Ä413 ? ˜1.18 ? £350.",
              "**Identify direction from the rate:** 'pounds to euros' ó euros are on the right, so multiply by the right-hand number.",
              "**Rate given as 1 unit = x:** multiply or divide the given amount appropriately.",
              "**Rate given as y units = 1:** e.g. Ä1.18 = £1 ? to convert euros to pounds, divide by 1.18.",
            ],
          },
          {
            subTitle: "Multi-step exchange problems",
            bullets: [
              "**Goods cheaper abroad:** convert price to home currency and compare with home price.",
              "**Commission on exchange:** some questions include a percentage commission ó apply the exchange, then deduct commission.",
              "**Example:** a camera costs £480 in the UK and Ä520 in France. Exchange rate: £1 = Ä1.15. UK price in euros = 480 ◊ 1.15 = Ä552. The French price (Ä520) is cheaper.",
              "**Round appropriately:** money answers round to 2 d.p.; never round intermediate steps.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Multiplying when you should divide** ó if you end up with more of the stronger currency, you have gone the wrong way.",
              "**Rounding too early** ó keep the full value of the exchange rate in the calculator during multi-step questions.",
              "**Comparison questions** ó always convert to the same currency before comparing prices.",
            ],
          },
        ],
        examinerTips: [
          "Write the exchange rate as a fraction or multiplier at the start of every answer.",
          "If the question gives the rate as 'x foreign = £1', divide by x to convert foreign to pounds and multiply by x to convert pounds to foreign.",
          "For comparison questions, always state which is cheaper and by how much in the same currency.",
          "Check the reasonableness ó if £1 = Ä1.18, then Ä100 should be less than £100; if your answer says more, you divided instead of multiplied.",
        ],
        commonMistakes: [
          "Dividing instead of multiplying when converting the weaker currency to the stronger ó always trace the direction from the stated rate.",
          "Rounding intermediate exchange amounts before the final step.",
        ],
        recap: [
          "The exchange rate is £1 = $1.26. Convert £450 to dollars. [1]",
          "Using the same rate, convert $850 to pounds, correct to 2 d.p. [2]",
          "A hotel room costs £95 in London and Ä108 in Paris. The exchange rate is £1 = Ä1.14. Which is cheaper and by how much, in pounds? [3]",
          "A travel agent charges 2% commission on currency exchange. Ahmed exchanges £600 to euros at £1 = Ä1.20 (before commission). How many euros does he receive? [3]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 41. Converting between Units
  // -------------------------------------------------------------
  {
    number: 41,
    title: "Converting between Units",
    section: "Number",
    topic: "Measures & Compound Measures",
    intro: `Revision notes for **Converting between Units** under **Measures & Compound Measures** (Number). Cambridge IGCSE Mathematics (0580). Unit conversions underpin every measurement problem ó length, mass, capacity, and time all require fluency with metric and, where specified, imperial conversions.`,
    subheadings: [
      {
        title: "Converting between Units",
        body: `**Metric units** are based on powers of 10 ó this makes conversion straightforward:\n\n**Length:** 10 mm = 1 cm; 100 cm = 1 m; 1000 m = 1 km.\n**Mass:** 1000 mg = 1 g; 1000 g = 1 kg; 1000 kg = 1 tonne.\n**Capacity:** 1000 ml = 1 litre; 100 cl = 1 litre.\n**Area/volume conversions** are covered in Chapter 42.\n\n**Imperial approximations** (given in the exam): 1 inch ò 2.54 cm; 1 mile ò 1.6 km; 1 kg ò 2.2 lb; 1 gallon ò 4.5 litres.`,
        groups: [
          {
            subTitle: "Metric unit conversion",
            bullets: [
              "**Length ó multiply going down:** km ? m (◊1000); m ? cm (◊100); cm ? mm (◊10).",
              "**Length ó divide going up:** mm ? cm (˜10); cm ? m (˜100); m ? km (˜1000).",
              "**Mass ó multiply going down:** kg ? g (◊1000); g ? mg (◊1000).",
              "**Capacity:** litres ? ml (◊1000); ml ? litres (˜1000).",
              "**General rule:** larger ? smaller unit = multiply; smaller ? larger unit = divide.",
            ],
          },
          {
            subTitle: "Imperial and mixed conversions",
            bullets: [
              "**Miles to km:** ◊1.6 ó 50 miles = 80 km.",
              "**Km to miles:** ˜1.6 ó 120 km = 75 miles.",
              "**Kg to lb:** ◊2.2 ó 5 kg = 11 lb.",
              "**Inches to cm:** ◊2.54 ó 6 inches = 15.24 cm.",
              "**Litres to gallons:** ˜4.5 ó 18 litres ò 4 gallons.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Squaring and cubing the conversion factor for area and volume** ó see Chapter 42.",
              "**Using the wrong multiplier direction** ó 'convert kg to grams' means multiply by 1000, not divide.",
              "**Mixing units within a calculation** ó ensure all lengths are in the same unit before calculating area or volume.",
            ],
          },
        ],
        examinerTips: [
          "Draw a 'conversion ladder' in your margin ó write the units from large to small going down, with ◊conversion factors going down and ˜ going up.",
          "Before any area or perimeter calculation, check all given lengths are in the same unit.",
          "In speed questions, ensure distance and time are in compatible units ó km and hours, or m and seconds.",
          "Imperial conversion factors are always given in the exam if needed ó do not memorise approximations beyond the standard ones.",
        ],
        commonMistakes: [
          "Dividing when converting to a smaller unit ó m to cm requires ◊100, not ˜100.",
          "Forgetting that 1 km = 1000 m but then using 100 ó the most common confusion between the cm-to-m and m-to-km conversions.",
        ],
        recap: [
          "Convert (a) 3.5 km to metres, (b) 2800 g to kilograms, (c) 450 ml to litres. [3]",
          "A race is 26.2 miles long. Approximately how many kilometres is this? [2]",
          "Convert 7.2 m to centimetres, then to millimetres. [2]",
          "Which is heavier: 4.5 kg or 9.5 lb? Use 1 kg ò 2.2 lb. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 42. Squared & Cubic Units
  // -------------------------------------------------------------
  {
    number: 42,
    title: "Squared & Cubic Units",
    section: "Number",
    topic: "Measures & Compound Measures",
    intro: `Revision notes for **Squared & Cubic Units** under **Measures & Compound Measures** (Number). Cambridge IGCSE Mathematics (0580). Converting areas and volumes requires squaring or cubing the linear conversion factor ó a step that is frequently missed in exams.`,
    subheadings: [
      {
        title: "Squared & Cubic Units",
        body: `When a **linear** conversion factor is squared or cubed, it converts **area** or **volume** units respectively.\n\n- **Linear:** 1 m = 100 cm, so 1 m≤ = 100≤ cm≤ = **10 000 cm≤**, and 1 m≥ = 100≥ cm≥ = **1 000 000 cm≥**.\n- **Length ? area:** square the linear factor.\n- **Length ? volume:** cube the linear factor.\n\n**Key conversions:**\n- 1 cm≤ = 100 mm≤; 1 m≤ = 10 000 cm≤; 1 km≤ = 1 000 000 m≤.\n- 1 cm≥ = 1000 mm≥; 1 m≥ = 1 000 000 cm≥; 1 litre = 1000 cm≥.`,
        groups: [
          {
            subTitle: "Area unit conversions",
            bullets: [
              "**cm≤ ? mm≤:** 1 cm≤ = (10)≤ mm≤ = 100 mm≤.",
              "**m≤ ? cm≤:** 1 m≤ = (100)≤ cm≤ = 10 000 cm≤.",
              "**km≤ ? m≤:** 1 km≤ = (1000)≤ m≤ = 1 000 000 m≤.",
              "**Converting an area:** 5.2 m≤ ? cm≤: 5.2 ◊ 10 000 = 52 000 cm≤.",
              "**Converting back:** 48 000 mm≤ ? cm≤: 48 000 ˜ 100 = 480 cm≤.",
            ],
          },
          {
            subTitle: "Volume unit conversions",
            bullets: [
              "**cm≥ ? mm≥:** 1 cm≥ = (10)≥ mm≥ = 1000 mm≥.",
              "**m≥ ? cm≥:** 1 m≥ = (100)≥ cm≥ = 1 000 000 cm≥.",
              "**Litres and cm≥:** 1 litre = 1000 cm≥; 1 ml = 1 cm≥.",
              "**Converting a volume:** 0.35 m≥ ? cm≥: 0.35 ◊ 1 000 000 = 350 000 cm≥.",
              "**Litres to m≥:** divide by 1000 (to get cm≥) then divide by 1 000 000 (to get m≥) ó or divide by 1 000 000 directly since 1 m≥ = 1 000 litres... wait: 1 m≥ = 1 000 000 cm≥ = 1 000 000 ml = 1000 litres.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using the linear factor for area** ó 1 m = 100 cm but 1 m≤ ? 100 cm≤; it equals 10 000 cm≤.",
              "**Forgetting to cube for volume** ó 1 m = 100 cm, so 1 m≥ = 100≥ cm≥ = 1 000 000 cm≥, not 100 or 10 000.",
              "**Mixing litres and cm≥** ó 1 litre = 1000 cm≥, so 1 ml = 1 cm≥; a common confusion in capacity questions.",
            ],
          },
        ],
        examinerTips: [
          "Write out the linear conversion factor first (e.g. 1 m = 100 cm), then explicitly square or cube it for area or volume.",
          "Dimension-analysis check: if converting m≤ to cm≤, both units have the ≤ label ó the conversion factor must also be squared.",
          "Memorise: 1 m≤ = 10 000 cm≤ and 1 m≥ = 1 000 000 cm≥ ó these are the most frequently needed conversions.",
          "1 litre = 1000 cm≥ links capacity and volume ó use this whenever a question mixes litres with dimensional units.",
        ],
        commonMistakes: [
          "Converting area by multiplying by 100 instead of 10 000 when going from m≤ to cm≤.",
          "Forgetting that 1 ml = 1 cm≥ when switching between litres and cubic centimetres in a volume question.",
        ],
        recap: [
          "Convert (a) 4.6 m≤ to cm≤, (b) 85 000 cm≤ to m≤. [2]",
          "Convert 2.4 m≥ to cm≥. [1]",
          "A swimming pool holds 450 000 litres of water. Convert this volume to m≥. [2]",
          "A floor tile has area 400 cm≤. Express this in mm≤. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 43. Speed
  // -------------------------------------------------------------
  {
    number: 43,
    title: "Speed",
    section: "Number",
    topic: "Measures & Compound Measures",
    intro: `Revision notes for **Speed** under **Measures & Compound Measures** (Number). Cambridge IGCSE Mathematics (0580). The DST triangle links distance, speed, and time ó rearranging it fluently and ensuring consistent units are the two essential skills for every speed question.`,
    subheadings: [
      {
        title: "Speed",
        body: `**Speed** is a measure of how quickly distance changes with time.\n\n**Formula:** Speed = Distance ˜ Time (S = D/T)\n\nRearranged:\n- **Distance = Speed ◊ Time** (D = S ◊ T)\n- **Time = Distance ˜ Speed** (T = D/S)\n\nThe **DST triangle** (Distance on top, Speed and Time on the bottom) is a memory aid: cover the quantity you want to find to see how to calculate it.\n\n**Units must be consistent:** if speed is in km/h and time is in minutes, convert time to hours before calculating distance.`,
        groups: [
          {
            subTitle: "Using the DST triangle",
            bullets: [
              "**Speed = D ˜ T:** a car travels 180 km in 2.5 h ? speed = 180 ˜ 2.5 = 72 km/h.",
              "**Distance = S ◊ T:** at 55 mph for 3 h ? distance = 55 ◊ 3 = 165 miles.",
              "**Time = D ˜ S:** 300 km at 80 km/h ? time = 300 ˜ 80 = 3.75 h = 3 h 45 min.",
              "**Always state the unit:** km/h, m/s, mph ó the unit identifies the measurement type.",
              "**Average speed:** total distance ˜ total time ó do NOT average the two speeds.",
            ],
          },
          {
            subTitle: "Unit conversions and average speed",
            bullets: [
              "**Converting time for the formula:** 45 min = 45/60 = 0.75 h; 1 h 20 min = 1.333Ö h.",
              "**Converting km/h to m/s:** ◊1000/3600 = ˜3.6 ó 72 km/h = 20 m/s.",
              "**Converting m/s to km/h:** ◊3.6 ó 15 m/s = 54 km/h.",
              "**Average speed example:** a journey of 60 km in 45 min then 90 km in 1 h 15 min ? total = 150 km in 2 h ? average = 75 km/h.",
              "**Wrong average:** (80 + 60)/2 = 70 km/h is not the average speed unless equal times are spent at each speed.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Averaging the two speeds directly** ó always use total distance ˜ total time for average speed.",
              "**Leaving time in minutes when speed is in km/h** ó convert minutes to decimal hours before substituting.",
              "**Forgetting to include units** ó 'speed = 60' scores no marks; 'speed = 60 km/h' is correct.",
            ],
          },
        ],
        examinerTips: [
          "Draw the DST triangle at the start of every speed question ó cover the target quantity to read the formula.",
          "Convert time to decimal hours before any calculation involving km/h.",
          "For average speed, never add and halve the given speeds; always compute total distance ˜ total time.",
          "Units of the answer can be inferred: km ˜ h ? km/h. Write the derivation if the unit is not obvious.",
        ],
        commonMistakes: [
          "Using hours and minutes without converting ó 1 h 30 min used as 1.3 h gives an incorrect answer; it must be 1.5 h.",
          "Calculating average speed as the arithmetic mean of two given speeds ó this only works when the same time is spent at each speed.",
        ],
        recap: [
          "A cyclist travels 48 km in 2 h 30 min. Find the average speed in km/h. [2]",
          "A car travels at 90 km/h. How far does it travel in 25 minutes? [2]",
          "A train travels 390 km at 130 km/h. How long does the journey take? Give your answer in hours and minutes. [2]",
          "Convert 108 km/h to m/s. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 44. Compound Measures
  // -------------------------------------------------------------
  {
    number: 44,
    title: "Compound Measures",
    section: "Number",
    topic: "Measures & Compound Measures",
    intro: `Revision notes for **Compound Measures** under **Measures & Compound Measures** (Number). Cambridge IGCSE Mathematics (0580). Compound measures involve two units combined by division ó density and pressure are the main ones beyond speed tested at IGCSE.`,
    subheadings: [
      {
        title: "Compound Measures",
        body: `A **compound measure** is a quantity expressed as the ratio of two different units. Beyond speed (distance/time), IGCSE examines:\n\n- **Density:** density = mass ˜ volume (units: g/cm≥ or kg/m≥).\n- **Pressure:** pressure = force ˜ area (units: N/m≤ or Pa).\n\nAll three compound measures share the same structure: a measure = one quantity ˜ another. All can be rearranged using the same triangle approach (cover the target).\n\n**Density triangle:** D on top, M and V below ? mass = density ◊ volume; volume = mass ˜ density.`,
        groups: [
          {
            subTitle: "Density",
            bullets: [
              "**Density = Mass ˜ Volume (D = M/V):** a block of mass 540 g and volume 200 cm≥ has density 540 ˜ 200 = 2.7 g/cm≥.",
              "**Mass = Density ◊ Volume:** 3.5 g/cm≥ ◊ 80 cm≥ = 280 g.",
              "**Volume = Mass ˜ Density:** 630 g of a material with density 2.1 g/cm≥ ? 630 ˜ 2.1 = 300 cm≥.",
              "**Common densities:** water ò 1 g/cm≥; gold ò 19.3 g/cm≥; aluminium ò 2.7 g/cm≥.",
              "**Unit consistency:** if mass is in kg and volume in m≥, density will be in kg/m≥.",
            ],
          },
          {
            subTitle: "Pressure",
            bullets: [
              "**Pressure = Force ˜ Area (P = F/A):** force 300 N on area 0.5 m≤ ? pressure = 600 N/m≤ = 600 Pa.",
              "**Force = Pressure ◊ Area:** 150 Pa ◊ 2 m≤ = 300 N.",
              "**Area = Force ˜ Pressure:** 450 N ˜ 90 Pa = 5 m≤.",
              "**Units:** 1 Pa = 1 N/m≤; atmospheric pressure ò 101 325 Pa.",
              "**Use the triangle method** as for density ó it works identically.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Unit inconsistency** ó if volume is in cm≥ but the question asks for density in kg/m≥, convert the mass to kg and the volume to m≥.",
              "**Rearranging incorrectly** ó always cover the target quantity in the triangle before writing the formula.",
              "**Confusing density and pressure formulas** ó write the triangle for each before starting.",
            ],
          },
        ],
        examinerTips: [
          "Draw the density or pressure triangle at the start of the question ó it makes the rearrangement obvious.",
          "Check units match the target unit before substituting ó if the answer should be in g/cm≥, mass must be in grams and volume in cm≥.",
          "For multi-step problems, calculate the intermediate quantity (e.g. volume first) before using it in the density formula.",
          "List all given values with their units before attempting the calculation.",
        ],
        commonMistakes: [
          "Using mass and area in the density formula instead of mass and volume ó density uses volume, pressure uses area.",
          "Forgetting to convert units so they match ó mixing grams with m≥ gives an answer in g/m≥ rather than g/cm≥.",
        ],
        recap: [
          "A piece of iron has mass 2340 g and volume 300 cm≥. Find its density. [2]",
          "Gold has a density of 19.3 g/cm≥. Find the mass of a gold bar with volume 150 cm≥. [2]",
          "A force of 240 N acts on a surface of area 0.6 m≤. Find the pressure. [2]",
          "A substance has density 8.4 g/cm≥ and mass 630 g. Find its volume. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 45. Rounding to a Given Place Value
  // -------------------------------------------------------------
  {
    number: 45,
    title: "Rounding to a Given Place Value",
    section: "Number",
    topic: "Rounding & Estimation",
    intro: `Revision notes for **Rounding to a Given Place Value** under **Rounding & Estimation** (Number). Cambridge IGCSE Mathematics (0580). Rounding to a specified decimal place is a universal skill tested on every IGCSE paper ó the rounding rule and place-value identification must be automatic.`,
    subheadings: [
      {
        title: "Rounding to a Given Place Value",
        body: `**Rounding** reduces a number to a given level of precision by looking at the digit in the next position to the right.\n\n**The rounding rule:**\n- If the digit to the right of the rounding position is **5 or more**, round up (increase the last kept digit by 1).\n- If it is **4 or less**, round down (keep the last digit unchanged).\n\n**Place value positions** left of the decimal point: units, tens, hundreds, thousands, millions.\n**Decimal positions** right: tenths (1 d.p.), hundredths (2 d.p.), thousandths (3 d.p.).`,
        groups: [
          {
            subTitle: "Rounding to decimal places",
            bullets: [
              "**1 decimal place (1 d.p.):** look at the second decimal digit ó 3.47 ? 3.5; 3.44 ? 3.4.",
              "**2 decimal places (2 d.p.):** look at the third decimal digit ó 7.836 ? 7.84; 7.834 ? 7.83.",
              "**Trailing zeros matter:** 5.80 (2 d.p.) ? 5.8 (1 d.p.); a rounding instruction to 2 d.p. must show two digits after the decimal point.",
              "**Negative numbers:** round the magnitude using the same rule ó -3.47 rounded to 1 d.p. is -3.5 (magnitude increases).",
            ],
          },
          {
            subTitle: "Rounding to the nearest integer or power of 10",
            bullets: [
              "**Nearest whole number:** look at the first decimal digit ó 8.6 ? 9; 8.4 ? 8.",
              "**Nearest 10:** look at the units digit ó 347 ? 350; 341 ? 340.",
              "**Nearest 100:** look at the tens digit ó 4 760 ? 4 800; 4 720 ? 4 700.",
              "**Nearest 1000:** look at the hundreds digit ó 83 500 ? 84 000; 83 400 ? 83 000.",
              "**Example ó nearest 10:** 395 rounds to 400 (units digit is 5, round up).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Cascading rounding** ó do not round 3.449 to 2 d.p. by first rounding to 3 d.p. (3.45) then again to 2 d.p. (3.5); do it in one step: 3.449 ? 3.44.",
              "**Omitting a trailing zero** ó 6.90 rounded to 2 d.p. must show the zero: 6.90, not 6.9.",
              "**Rounding to the nearest 10 and removing the tens digit** ó 850 rounded to the nearest 100 is 900, not 85.",
            ],
          },
        ],
        examinerTips: [
          "Underline the digit at the rounding position, then look only at the next digit to its right to decide up or down.",
          "After rounding, always check the answer has the correct number of decimal places ó a trailing zero may be needed.",
          "For 'nearest 10' questions, the rounded answer always ends in 0; for 'nearest 100', it ends in 00.",
          "Cascading rounding always produces errors ó always round from the original value directly to the requested precision.",
        ],
        commonMistakes: [
          "Rounding in two steps (e.g. to 3 d.p. then to 2 d.p.) ó the final digit may differ from rounding directly to 2 d.p. from the start.",
          "Forgetting the trailing zero ó 7.20 rounded to 2 d.p. must show '.20', not '.2'.",
        ],
        recap: [
          "Round 6.4725 to (a) 1 d.p., (b) 2 d.p., (c) 3 d.p. [3]",
          "Round 83 460 to (a) the nearest 1000, (b) the nearest 100. [2]",
          "A calculator shows 7.09450. Round this to 2 decimal places. [1]",
          "Explain why rounding 3.449 to 2 d.p. gives 3.44, not 3.45. [2]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 46. Rounding to Significant Figures
  // -------------------------------------------------------------
  {
    number: 46,
    title: "Rounding to Significant Figures",
    section: "Number",
    topic: "Rounding & Estimation",
    intro: `Revision notes for **Rounding to Significant Figures** under **Rounding & Estimation** (Number). Cambridge IGCSE Mathematics (0580). Significant figures (s.f.) are the digits that carry meaning in a number ó rounding to s.f. is used in scientific contexts and estimation, where leading zeros and large numbers are involved.`,
    subheadings: [
      {
        title: "Rounding to Significant Figures",
        body: `A **significant figure** is any non-zero digit, plus any zero that is between significant digits or follows them in a decimal. **Leading zeros** (zeros before the first non-zero digit) are **never** significant.\n\n**Counting significant figures:**\n- 3 s.f.: 24 700 ? 3 s.f. ? 24 700 (the zeros hold place value but are not significant).\n- 24 743 ? 1st sig fig = 2 (ten-thousands), 2nd = 4, 3rd = 7 ? round at the 3rd ? 24 700.\n\n**Rounding rule is identical to d.p.:** look at the digit immediately after the last significant figure; round up if 5 or more.`,
        groups: [
          {
            subTitle: "Identifying significant figures",
            bullets: [
              "**Non-zero digits are always significant:** 3.47 has 3 s.f.; 254 has 3 s.f.",
              "**Leading zeros are NOT significant:** 0.0047 has 2 s.f. (the 4 and 7); the leading zeros merely locate the decimal point.",
              "**Zeros between significant digits ARE significant:** 1.03 has 3 s.f.; 20 040 has 4 s.f.",
              "**Trailing zeros in a whole number are ambiguous** without a decimal point ó 5400 may have 2, 3, or 4 s.f.; the convention assumes 2.",
              "**Trailing zeros in a decimal ARE significant:** 5.40 has 3 s.f.; 0.080 has 2 s.f.",
            ],
          },
          {
            subTitle: "Rounding to 1, 2, or 3 s.f.",
            bullets: [
              "**1 s.f.:** 68 300 ? 70 000; 0.0471 ? 0.05; 3.98 ? 4.",
              "**2 s.f.:** 68 300 ? 68 000; 0.0471 ? 0.047; 3.98 ? 4.0.",
              "**3 s.f.:** 68 300 ? 68 300 (already 3 s.f. ó but 68 348 ? 68 300); 0.047 142 ? 0.0471.",
              "**Maintain place value with zeros:** 6837 rounded to 1 s.f. = 7000 (four digits, first is 7).",
              "**Example:** 0.003 672 to 2 s.f. ? first significant figure is 3, second is 6, look at 7 ? round up ? 0.0037.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Counting leading zeros as significant** ó 0.0045 has 2 s.f., not 4.",
              "**Rounding to s.f. like d.p.** ó 0.0471 to 2 s.f. is 0.047 (the two significant figures are 4 and 7), not 0.05.",
              "**Dropping zeros that hold place value** ó 6800 rounded to 1 s.f. is 7000, not 7; the zeros preserve magnitude.",
            ],
          },
        ],
        examinerTips: [
          "Circle the first significant figure, then count along to find the last one you want to keep ó this prevents miscounting.",
          "After rounding to s.f. in a large number, check the rounded value has approximately the same magnitude as the original.",
          "For small decimals (e.g. 0.004 72), count non-zero digits from the left of the first non-zero digit.",
          "In estimation questions, round every value to 1 s.f. first; this makes mental arithmetic straightforward.",
        ],
        commonMistakes: [
          "Treating 0.0045 as having 4 significant figures ó leading zeros are not significant; there are only 2 s.f. here (4 and 5).",
          "Writing 7 instead of 7000 when rounding 6800 to 1 s.f. ó the zeros are needed to preserve the number's magnitude.",
        ],
        recap: [
          "Round (a) 48 627 to 2 s.f., (b) 0.007 294 to 2 s.f., (c) 3.0184 to 3 s.f. [3]",
          "Write down the number of significant figures in (a) 0.0450, (b) 20 304, (c) 7.00. [3]",
          "Round 1 496 000 to 1 significant figure. [1]",
          "A result is given as 0.03840. How many significant figures does this contain? [1]",
        ],
      },
    ],
  },

  // -------------------------------------------------------------
  // 47. Estimation
  // -------------------------------------------------------------
  {
    number: 47,
    title: "Estimation",
    section: "Number",
    topic: "Rounding & Estimation",
    intro: `Revision notes for **Estimation** under **Rounding & Estimation** (Number). Cambridge IGCSE Mathematics (0580). Estimation means finding an approximate answer by rounding all values to 1 significant figure first ó it is used to check calculator answers and to work without a calculator.`,
    subheadings: [
      {
        title: "Estimation",
        body: `**Estimation** produces a rough but sensible answer quickly. The standard IGCSE strategy is to **round all given values to 1 significant figure**, then perform the simplified calculation mentally or on paper.\n\nEstimation also allows you to **check calculator answers** for plausibility ó if your estimate is 500 and the calculator gives 5000, an error has occurred.\n\n**Example:** Estimate 47.8 ◊ 6.3 ˜ 0.192.\nRound: 50 ◊ 6 ˜ 0.2 = 300 ˜ 0.2 = 1500.\n\nThe actual answer is ò 1567 ó the estimate of 1500 confirms no gross error.`,
        groups: [
          {
            subTitle: "The 1 s.f. strategy",
            bullets: [
              "**Round every number to 1 s.f.:** 47.8 ? 50; 6.3 ? 6; 0.192 ? 0.2.",
              "**Perform the simplified calculation:** use mental arithmetic with these rounded values.",
              "**Include division by a decimal:** ˜ 0.2 is the same as ◊ 5; ˜ 0.5 is ◊ 2.",
              "**Express the estimate:** write 'estimated answer ò ...' to show it is approximate.",
              "**Check the actual answer:** if the calculator gives something wildly different from the estimate, re-check the entry.",
            ],
          },
          {
            subTitle: "Applying estimation to common contexts",
            bullets: [
              "**Cost estimation:** 19 items at £2.95 each ò 20 ◊ £3 = £60.",
              "**Area estimation:** 38.4 m ◊ 7.6 m ò 40 ◊ 8 = 320 m≤.",
              "**Square root estimation:** v(89) ò v90 ò 9.5; bracket between v81 = 9 and v100 = 10.",
              "**Upper and lower bounds of estimation:** sometimes the question asks for an overestimate or underestimate ó round up to overestimate, down to underestimate.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not rounding to 1 s.f.** ó the question says 'show that your answer is an estimate'; using the original values and computing precisely earns no marks.",
              "**Rounding to 2 s.f. or d.p. instead of 1 s.f.** ó the standard method for estimation uses 1 s.f. unless specified otherwise.",
              "**Not showing working** ó the examiner needs to see the rounded values used; writing only the final estimate earns at most 1 mark.",
            ],
          },
        ],
        examinerTips: [
          "Always write down the rounded values explicitly before calculating ó this demonstrates method and usually earns 1 mark even if the arithmetic is wrong.",
          "Learn the common ˜ decimal shortcuts: ˜ 0.1 = ◊ 10; ˜ 0.2 = ◊ 5; ˜ 0.5 = ◊ 2.",
          "If the question says 'by estimation' or 'without a calculator', round all values to 1 s.f. first ó do not use the original numbers.",
          "Compare your estimate with the calculator answer; if they differ by more than a factor of 2ñ3, re-check your calculation.",
        ],
        commonMistakes: [
          "Using the full precision values and calling the result an estimate ó estimation requires rounding first; it is not just labelling a precise answer as approximate.",
          "Forgetting to round every quantity, including the divisor ó an un-rounded divisor can make the estimate far less useful.",
        ],
        recap: [
          "Estimate the value of (38.6 ◊ 4.9) ˜ 0.47. Show all rounding. [2]",
          "Without a calculator, estimate the cost of 48 books at £6.85 each. [2]",
          "A calculator shows 0.3296 ◊ 7824 = 2578.6. Use estimation to check whether this is reasonable. [2]",
          "Estimate v(285 ˜ 7.1), showing your rounded values. [2]",
        ],
      },
    ],
  },
];
