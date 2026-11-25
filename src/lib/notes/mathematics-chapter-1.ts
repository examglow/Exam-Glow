import type { Chapter } from "./types";

// mathematics-chapter-1.ts — chapters 1-15 (Number part 1: Number Foundations through HCF & LCM)
export const MATHEMATICS_CHAPTERS_1: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Types of Numbers
  // ─────────────────────────────────────────────────────────────
  {
    number: 1,
    title: "Types of Numbers",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Types of Numbers** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). Every exam question involving number properties begins with correctly identifying the type of number you are working with — natural, integer, prime, square, cube, or triangular.`,
    subheadings: [
      {
        title: "Types of Numbers",
        body: `**Number types** are the vocabulary of mathematics. You need to recognise and name each type on sight — exam questions often ask you to identify which category a given number belongs to.\n\n**Natural numbers** are the positive counting numbers (1, 2, 3, …); some definitions include 0. **Integers** extend the natural numbers to include zero and all negative whole numbers (…, −3, −2, −1, 0, 1, 2, 3, …). Every natural number is an integer, but not every integer is a natural number.\n\n**Rational numbers** can be written as a fraction p/q where p and q are integers and q ≠ 0. **Irrational numbers** like √2 and π cannot be expressed as exact fractions. Together, rational and irrational numbers form the **real numbers**.\n\n**Triangular numbers** are formed by summing consecutive natural numbers: 1, 3, 6, 10, 15, 21, … The nth triangular number = n(n+1)/2.`,
        groups: [
          {
            subTitle: "Number type definitions",
            bullets: [
              "**Natural numbers:** positive whole numbers used for counting — 1, 2, 3, 4, … Zero may or may not be included depending on the definition used.",
              "**Integers:** all whole numbers, positive, negative, and zero — …, −3, −2, −1, 0, 1, 2, 3, …",
              "**Prime numbers:** integers greater than 1 with exactly two factors: 1 and themselves. Examples: 2, 3, 5, 7, 11, 13.",
              "**Composite numbers:** integers greater than 1 that have more than two factors. Examples: 4 (factors 1, 2, 4), 6 (factors 1, 2, 3, 6).",
              "**Square numbers:** the result of multiplying an integer by itself. Examples: 1, 4, 9, 16, 25, 36 — written 1², 2², 3², …",
              "**Cube numbers:** the result of multiplying an integer by itself twice. Examples: 1, 8, 27, 64, 125 — written 1³, 2³, 3³, …",
            ],
          },
          {
            subTitle: "Rational and irrational numbers",
            bullets: [
              "**Rational numbers:** can be expressed as a fraction a/b where a and b are integers and b ≠ 0. Examples: 3/4, −2, 0.5, 0.333… (= 1/3).",
              "**Irrational numbers:** cannot be expressed as an exact fraction. Examples: √2 ≈ 1.414…, π ≈ 3.14159…, √3.",
              "**Terminating decimals** (e.g. 0.25) and **recurring decimals** (e.g. 0.333…) are both rational.",
              "**Surds** such as √5 are irrational — they cannot be simplified to a fraction.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**1 is not prime** — it has only one factor (itself), so it fails the 'exactly two factors' test. Never list 1 as a prime.",
              "**2 is the only even prime** — every other even number has 2 as a factor, giving it at least three factors.",
              "**0 is an integer but not a natural number** in most IGCSE definitions — read the question carefully if 0 is in a list.",
              "**√4 = 2 is rational** — not every square root is irrational; check whether the result is a whole number.",
            ],
          },
        ],
        examinerTips: [
          "When a question asks you to 'write down a prime number between 20 and 30', list primes systematically: 23 and 29 are the only two.",
          "If asked to identify an irrational number from a list, test each one: can it be written as a fraction? If not — and it is not a terminating or recurring decimal — it is irrational.",
          "Questions sometimes give a list and ask how many are integers. Count carefully: include negatives and zero.",
          "For 'square number' questions, recall your perfect squares up to at least 15² = 225.",
        ],
        commonMistakes: [
          "Listing 1 as a prime number — it has only one factor, not two, so it is neither prime nor composite.",
          "Assuming all decimals are irrational — 0.5 = 1/2 is rational; only non-terminating, non-recurring decimals are irrational.",
          "Confusing 'integer' with 'natural number' — integers include negative whole numbers and zero; natural numbers do not.",
        ],
        recap: [
          "Write down all the prime numbers between 10 and 20. [3]",
          "Explain why the number 1 is neither prime nor composite. [2]",
          "From the list 0.3̄, √5, −4, 9, π, write down (a) an integer, (b) an irrational number. [2]",
          "The nth triangular number is given by n(n+1)/2. Find the 8th triangular number. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Multiples, Factors and Primes
  // ─────────────────────────────────────────────────────────────
  {
    number: 2,
    title: "Multiples, Factors and Primes",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Multiples, Factors and Primes** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). These foundational skills underpin prime factorisation, HCF, LCM, and many problem-solving questions across the paper.`,
    subheadings: [
      {
        title: "Multiples, Factors and Primes",
        body: `**Multiples** of a number are the results of multiplying it by any positive integer — the multiples of 6 are 6, 12, 18, 24, 30, … **Factors** of a number are the whole numbers that divide into it exactly — the factors of 12 are 1, 2, 3, 4, 6, 12.\n\nFinding all factors is a systematic task: start at 1, pair each small factor with its matching large factor, and stop when the two numbers in a pair meet or cross. For the number 36: 1×36, 2×18, 3×12, 4×9, 6×6 — giving factors 1, 2, 3, 4, 6, 9, 12, 18, 36.\n\n**Prime numbers** have exactly two distinct factors: 1 and themselves. The primes to 20 are: **2, 3, 5, 7, 11, 13, 17, 19** — learn all eight. The number 2 is the only even prime.`,
        groups: [
          {
            subTitle: "Listing factors and multiples",
            bullets: [
              "**To list factors of 24:** check 1 (yes), 2 (yes), 3 (yes), 4 (yes), 5 (no), 6 (yes) — stop at √24 ≈ 4.9; pairs: 1×24, 2×12, 3×8, 4×6. Factors: 1, 2, 3, 4, 6, 8, 12, 24.",
              "**Multiples of 7:** 7, 14, 21, 28, 35, 42, … — just the times-table for that number.",
              "**Prime numbers to 20:** 2, 3, 5, 7, 11, 13, 17, 19 — learn these eight numbers.",
              "**Why 1 is not prime:** a prime has exactly two distinct factors (1 and itself). The number 1 has only one factor (1), so it does not meet the definition.",
              "**Common multiples:** multiples that two or more numbers share. The first common multiple of 4 and 6 is 12.",
            ],
          },
          {
            subTitle: "Testing for prime numbers",
            bullets: [
              "**Divisibility by 2:** a number is divisible by 2 if its last digit is even (0, 2, 4, 6, 8).",
              "**Divisibility by 3:** a number is divisible by 3 if the sum of its digits is divisible by 3. E.g. 231: 2+3+1 = 6, which is divisible by 3.",
              "**Divisibility by 5:** a number is divisible by 5 if it ends in 0 or 5.",
              "**To test if n is prime:** check divisibility by all primes up to √n. If none divide n exactly, it is prime.",
              "**Example — is 97 prime?** √97 ≈ 9.8; check 2, 3, 5, 7 — none divide 97 exactly, so 97 is prime.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Missing the larger factor in a pair** — always list factors in pairs and check every integer up to the square root.",
              "**Confusing factors and multiples** — factors are smaller than or equal to the number; multiples are equal to or larger.",
              "**Including 1 as a prime** — in an exam list, 1 must not appear in a set of primes.",
              "**Forgetting that 2 is the only even prime** — all other even numbers have at least three factors.",
            ],
          },
        ],
        examinerTips: [
          "When listing factors, always work in pairs from 1 upwards — this guarantees you do not miss any factor.",
          "For 'write down a factor of both X and Y' questions, the answer is always a common factor; check your answer divides both numbers exactly.",
          "Prime testing questions in IGCSE usually involve numbers under 100 — memorising primes to 100 saves time.",
          "If asked to identify the prime factor, recall that every composite number has at least one prime factor less than or equal to its square root.",
        ],
        commonMistakes: [
          "Listing factors out of order and missing some — always pair factors systematically from 1 upwards.",
          "Saying 'multiples are smaller than the number' — multiples are always greater than or equal to the original number.",
        ],
        recap: [
          "List all the factors of 36. [3]",
          "Write down the first four multiples of 8. [1]",
          "Show that 97 is a prime number. [2]",
          "Write down a number that is both a multiple of 6 and a factor of 36. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Squares, Cubes and Roots
  // ─────────────────────────────────────────────────────────────
  {
    number: 3,
    title: "Squares, Cubes and Roots",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Squares, Cubes and Roots** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). Instant recall of square numbers to 15² and cube numbers to 10³ is essential for Pythagoras, volume, and index questions across both papers.`,
    subheadings: [
      {
        title: "Squares, Cubes and Roots",
        body: `**Square numbers** and their **square roots** (written **√**) must be recalled instantly up to 15². **Cube numbers** and their **cube roots** (written **∛**) must be recalled for the integers 1–10. These are the numbers the IGCSE syllabus expects you to know without a calculator.\n\nThe **square root** of a number n is the value that, when multiplied by itself, gives n. The **cube root** of n is the value that, multiplied by itself twice, gives n.\n\n**Note on notation:** √25 means only the positive square root (+5). The equation x² = 25 has two solutions: x = +5 and x = −5. When a question asks for all solutions, write ±5.`,
        groups: [
          {
            subTitle: "Squares and square roots 1–15",
            bullets: [
              "**1² = 1, √1 = 1 | 2² = 4, √4 = 2 | 3² = 9, √9 = 3 | 4² = 16, √16 = 4 | 5² = 25, √25 = 5**",
              "**6² = 36, √36 = 6 | 7² = 49, √49 = 7 | 8² = 64, √64 = 8 | 9² = 81, √81 = 9 | 10² = 100, √100 = 10**",
              "**11² = 121 | 12² = 144 | 13² = 169 | 14² = 196 | 15² = 225** — these appear frequently in Pythagoras questions.",
              "**√ notation:** √25 always means the positive square root (+5 only). For both roots of x² = 25, write x = ±5.",
            ],
          },
          {
            subTitle: "Cubes and cube roots 1–10",
            bullets: [
              "**1³ = 1, ∛1 = 1 | 2³ = 8, ∛8 = 2 | 3³ = 27, ∛27 = 3 | 4³ = 64, ∛64 = 4 | 5³ = 125, ∛125 = 5**",
              "**6³ = 216 | 7³ = 343 | 8³ = 512 | 9³ = 729 | 10³ = 1000, ∛1000 = 10**",
              "**∛ notation:** ∛8 = 2 because 2 × 2 × 2 = 8. Unlike square roots, every real number has exactly one real cube root.",
              "**64 appears in both lists** — 8² = 64 and 4³ = 64; recognise this in factor and index questions.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**√ gives only the positive root** — if the question asks for both solutions of x² = 49, write ±7.",
              "**Confusing 4³ and 4²** — cube means multiply by itself three times in total; do not stop after squaring.",
              "**−3² ≠ (−3)²** — without brackets the square applies only to 3, giving −9; with brackets it gives +9.",
              "**Estimating roots of non-perfect-square numbers** — √50 is between √49 = 7 and √64 = 8, closer to 7.",
            ],
          },
        ],
        examinerTips: [
          "Learn squares up to 15² and cubes up to 10³ cold — calculator questions still require you to know these for quick checking.",
          "In Pythagoras questions you will almost always use √(a² + b²); recognise Pythagorean triples: (3,4,5), (5,12,13), (8,15,17).",
          "When estimating a square root without a calculator, identify the two perfect squares either side, then interpolate.",
          "If a question says 'write down the value of ∛64', do not reach for the calculator — 4³ = 64 is on the recall list.",
        ],
        commonMistakes: [
          "Writing √25 = ±5 when asked for 'the square root of 25' — the √ symbol means positive root only; ±5 is correct only when solving x² = 25.",
          "Stopping after squaring when finding a cube — cube means three factors, not two.",
        ],
        recap: [
          "Write down the value of (a) 7², (b) ∛125. [2]",
          "Find both solutions of the equation x² = 169. [2]",
          "Without using a calculator, find the value of √(144 + 25). [2]",
          "Which number appears in both the list of square numbers and the list of cube numbers between 1 and 100? [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Reciprocals
  // ─────────────────────────────────────────────────────────────
  {
    number: 4,
    title: "Reciprocals",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Reciprocals** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). The reciprocal of a number is 1 divided by that number, and its defining property — that any number multiplied by its reciprocal equals 1 — underpins dividing fractions and negative indices.`,
    subheadings: [
      {
        title: "Reciprocals",
        body: `The **reciprocal** of a number is 1 divided by that number. For any non-zero number n, its reciprocal is 1/n. For a fraction a/b (where a ≠ 0 and b ≠ 0), the reciprocal is b/a — you simply flip the fraction.\n\nThe defining property is: **any number multiplied by its reciprocal equals 1**. For example, 5 × 1/5 = 1; 2/3 × 3/2 = 1.\n\nThis property makes reciprocals essential when dividing fractions (multiply by the reciprocal of the divisor) and when interpreting negative indices (a⁻ⁿ = 1/aⁿ means 'the reciprocal of aⁿ').`,
        groups: [
          {
            subTitle: "Finding reciprocals",
            bullets: [
              "**Reciprocal of an integer:** reciprocal of 5 = 1/5 = 0.2 — because 5 × 1/5 = 1.",
              "**Reciprocal of a fraction:** reciprocal of 2/3 = 3/2 = 1.5 — flip numerator and denominator.",
              "**Reciprocal of a decimal:** write 0.4 as 2/5, flip to get 5/2 = 2.5; check: 0.4 × 2.5 = 1 ✓",
              "**Reciprocal of a negative number:** reciprocal of −4 = −1/4 = −0.25 — the sign is preserved.",
              "**Zero has no reciprocal** — 1/0 is undefined; zero is the only real number without a reciprocal.",
            ],
          },
          {
            subTitle: "Reciprocals in context",
            bullets: [
              "**Dividing fractions:** to divide by a fraction, multiply by its reciprocal — 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8.",
              "**Negative indices:** a⁻ⁿ = 1/aⁿ — the negative index is a compact way of writing 'the reciprocal of aⁿ'.",
              "**On a calculator:** the reciprocal key is usually labelled x⁻¹ or 1/x; entering 8 and pressing x⁻¹ gives 0.125.",
              "**Product check:** multiply your answer by the original number; if you get 1, the reciprocal is correct.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Reciprocal is not the negative** — the reciprocal of 3 is 1/3, not −3. Those are entirely different operations.",
              "**Reciprocal of a fraction — flip, do not negate** — the reciprocal of 3/7 is 7/3, not −3/7.",
              "**Check the product equals 1** — if your reciprocal times the original number does not equal 1, it is wrong.",
              "**Zero has no reciprocal** — if a question involves 1/(x−2) and x = 2, the expression is undefined.",
            ],
          },
        ],
        examinerTips: [
          "Always verify a reciprocal by multiplying: (original) × (reciprocal) must equal exactly 1.",
          "When dividing by a fraction in a multi-step problem, write 'multiply by the reciprocal' as a clear step so you earn the method mark.",
          "If a question asks for 'the reciprocal of 0.2', convert to 1/5 first, then flip to 5 — simpler than 1 ÷ 0.2.",
          "In index questions, always convert negative indices to fractions before substituting values.",
        ],
        commonMistakes: [
          "Confusing the reciprocal with the negative — reciprocal of 4 is 1/4; the negative of 4 is −4. These are unrelated operations.",
          "Forgetting to flip both numerator and denominator when finding the reciprocal of a fraction.",
        ],
        recap: [
          "Write down the reciprocal of (a) 8, (b) 3/5, (c) 0.25. [3]",
          "Show that 2/7 and 7/2 are reciprocals of each other. [1]",
          "Use the reciprocal to calculate 4/9 ÷ 2/3. Show all working. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Place Value
  // ─────────────────────────────────────────────────────────────
  {
    number: 5,
    title: "Place Value",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Place Value** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). Every digit's value depends on its position in a number — this principle underlies column arithmetic, decimal reading, and rounding.`,
    subheadings: [
      {
        title: "Place Value",
        body: `The **place value system** assigns each digit in a number a value based on its position. Moving one column to the left multiplies the value by 10; moving one column to the right divides it by 10.\n\nUnderstanding place value is the foundation for reading large numbers, writing decimals, and performing column arithmetic correctly.\n\n**Example:** in the number **4 307 582.19**, each digit has a specific column value:\n- 4 → millions (4 000 000)\n- 3 → hundred-thousands (300 000)\n- 0 → ten-thousands (placeholder)\n- 7 → thousands (7 000)\n- 5 → hundreds (500)\n- 8 → tens (80)\n- 2 → units (2)\n- 1 → tenths (0.1)\n- 9 → hundredths (0.09)`,
        groups: [
          {
            subTitle: "Column headings",
            bullets: [
              "**Left of the decimal point (whole part):** millions | hundred-thousands | ten-thousands | thousands | hundreds | tens | units.",
              "**Right of the decimal point (decimal part):** tenths | hundredths | thousandths | ten-thousandths.",
              "**Reading large numbers:** group digits in threes from the right before the decimal point to separate millions, thousands, and units.",
              "**Small decimal numbers:** 0.007 means 7 thousandths — the zeros are essential as place-holders.",
              "**Value of a digit:** the digit 3 in 4307 has a place value of hundreds, so its value is 300, not 3.",
            ],
          },
          {
            subTitle: "Place value in arithmetic",
            bullets: [
              "**Column addition — align units:** write numbers so units are directly below units, tens below tens; then add column by column from right to left.",
              "**Column subtraction — align decimal points:** 5.1 − 2.46 must be written as 5.10 − 2.46 to keep columns correct.",
              "**Multiplying by powers of 10:** × 10 shifts every digit one place left; × 100 shifts two places left.",
              "**Dividing by powers of 10:** ÷ 10 shifts every digit one place right; 0.007 × 1000 = 7.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Place-holder zeros must stay** — 4070 is not the same as 47; the zero holds the tens column.",
              "**Decimal alignment in column arithmetic** — always line up the decimal points before adding or subtracting.",
              "**'Value of the digit' vs 'place value'** — the digit 5 in 2.57 has place value tenths and value 0.5.",
              "**Leading zeros** — 0.05 has a zero in the tenths column; removing it changes the number to 0.5.",
            ],
          },
        ],
        examinerTips: [
          "When writing a large number in words, group digits from the right: 2 345 means two thousand three hundred and forty-five.",
          "Questions about the 'value' of a digit always require you to state the full column value (e.g. 300), not just the digit (3).",
          "In column arithmetic, draw vertical lines for place value columns to avoid misalignment errors.",
          "For decimal multiplications by powers of 10, move the decimal point rather than moving the digits — it is the same operation.",
        ],
        commonMistakes: [
          "Dropping place-holder zeros in the middle of a number — 2050 has a zero in the tens column that cannot be removed.",
          "Misidentifying the place value of a digit — recount columns from the decimal point if unsure.",
        ],
        recap: [
          "Write down the value of the digit 7 in the number 4 371 902. [1]",
          "Write 3 450 000 in words. [1]",
          "Calculate 0.004 × 1000. [1]",
          "In the number 23.608, write down (a) the digit in the hundredths column, (b) the value of the digit 6. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Negative and Directed Numbers
  // ─────────────────────────────────────────────────────────────
  {
    number: 6,
    title: "Negative and Directed Numbers",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Negative and Directed Numbers** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). Directed numbers appear in temperature, depth, altitude, and financial contexts — the sign rules for all four operations must be automatic.`,
    subheadings: [
      {
        title: "Negative and Directed Numbers",
        body: `**Directed numbers** include both positive and negative values. A **number line** running from negative infinity on the left to positive infinity on the right shows their order: numbers further left are smaller.\n\nAdding a negative is the same as subtracting; subtracting a negative is the same as adding. These rules extend to multiplication and division, where the key principle is: **two signs the same give positive; two signs different give negative**.\n\n**Real-life contexts:** temperature changes (rising from −5 °C by 8 degrees gives +3 °C); depth below sea level (going 12 m deeper from −30 m gives −42 m); bank balance (overdraft of £200 represented as −200).`,
        groups: [
          {
            subTitle: "Addition and subtraction rules",
            bullets: [
              "**Adding a negative:** 8 + (−3) = 8 − 3 = 5 — the two signs combine to give subtraction.",
              "**Subtracting a negative:** 8 − (−3) = 8 + 3 = 11 — two negatives in a row give a positive.",
              "**Ordering negatives on a number line:** −7 < −2 < 0 < 3 — the more negative, the further left, the smaller.",
              "**Temperature example:** starting at −5 °C, temperature rises by 8 °C → −5 + 8 = +3 °C.",
            ],
          },
          {
            subTitle: "Multiplication and division rules",
            bullets: [
              "**Positive × positive = positive:** 4 × 5 = 20.",
              "**Positive × negative = negative:** 4 × (−5) = −20.",
              "**Negative × negative = positive:** (−4) × (−5) = +20 — two negatives always give a positive.",
              "**Same rule applies to division:** (−20) ÷ (−4) = +5; (−20) ÷ 4 = −5.",
              "**Odd number of negatives → negative result; even number → positive result:** (−2) × (−3) × (−4) = −24.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**−3² ≠ (−3)²** — without brackets the square applies only to 3, giving −9; with brackets it gives +9.",
              "**Two negatives only cancel in multiplication/division** — in addition they do not cancel: −3 + (−2) = −5, not 1.",
              "**Temperature and depth contexts** — always check the direction of change and use the correct sign.",
              "**Ordering negative fractions** — −3/4 = −0.75 is greater than −1 but less than −0.5; convert to decimals before ordering.",
            ],
          },
        ],
        examinerTips: [
          "Rewrite subtraction of a negative as addition before computing: 5 − (−3) = 5 + 3. This prevents sign errors.",
          "For multiplication/division of directed numbers, count the number of negative signs first — odd count gives a negative answer.",
          "In context questions, underline the direction words (rises, falls, deeper, shallower) to identify the correct sign.",
          "On a number line, always mark −5 to the left of −3, since −5 < −3.",
        ],
        commonMistakes: [
          "Adding two negative numbers and getting a positive — −4 + (−6) = −10, not +10; two negatives add together, they do not cancel.",
          "Squaring a negative without brackets and getting a positive — −4² = −16, not +16.",
        ],
        recap: [
          "Calculate (a) −7 + (−3), (b) −5 − (−9), (c) (−4) × (−6), (d) −20 ÷ 4. [4]",
          "The temperature at midnight is −8 °C. By noon it has risen by 13 °C. Find the temperature at noon. [1]",
          "Write down the value of −5². [1]",
          "Order these numbers from smallest to largest: −3, 1.5, −0.5, −2.8. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Ordering Numbers
  // ─────────────────────────────────────────────────────────────
  {
    number: 7,
    title: "Ordering Numbers",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Ordering Numbers** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). Ordering and inequality symbols appear throughout the IGCSE syllabus — from comparing fractions and decimals to expressing solution sets for inequalities.`,
    subheadings: [
      {
        title: "Ordering Numbers",
        body: `**Ordering** requires you to place numbers in ascending or descending sequence, or to insert the correct **inequality symbol** between two values. The symbols used in IGCSE are:\n\n- **=** (equal to)\n- **≠** (not equal to)\n- **>** (greater than)\n- **<** (less than)\n- **⩾** (greater than or equal to)\n- **⩽** (less than or equal to)\n\nTo order a mixed list of integers, fractions and decimals, **convert everything to decimals first** — then compare directly. For example, to order 3/5, 0.7, −1, 1.2: convert to −1, 0.6, 0.7, 1.2 and read off the order.`,
        groups: [
          {
            subTitle: "Using inequality symbols",
            bullets: [
              "**= and ≠:** 5 + 3 = 8; 5 + 3 ≠ 9 — basic equality and inequality.",
              "**> and <:** 7 > 4 reads 'seven is greater than four'; 4 < 7 reads 'four is less than seven'. The open end of the symbol faces the larger number.",
              "**⩾ and ⩽:** these include the possibility of equality; 'x ⩾ 3' means x can equal 3 or any value above it.",
              "**Ordering a mixed list — convert to decimals:** place 3/5, 0.7, −1, 1.2 as −1, 0.6, 0.7, 1.2.",
              "**Ascending vs descending:** ascending = smallest to largest; descending = largest to smallest.",
            ],
          },
          {
            subTitle: "Ordering fractions",
            bullets: [
              "**Method 1 — common denominator:** convert to the same denominator, then compare numerators. 2/3 vs 3/4 → 8/12 vs 9/12, so 2/3 < 3/4.",
              "**Method 2 — convert to decimals:** 2/3 ≈ 0.667, 3/4 = 0.75, so 2/3 < 3/4.",
              "**Ordering negative fractions:** −3/4 = −0.75 is greater than −1 but less than −0.5; use a number line.",
              "**Mixed numbers:** convert to improper fractions or decimals before ordering.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Symbol direction** — always double-check: 'x < 5' means x is less than 5, not greater than 5.",
              "**Negative fractions** — −3/4 = −0.75 is greater than −1; do not assume a 'bigger-looking fraction' means a bigger value.",
              "**⩾ vs > in context** — 'at least 5' means ⩾ 5; 'more than 5' means > 5. These are different and lose marks if confused.",
              "**Ordering without converting** — comparing 5/8 and 11/16 directly is error-prone; always convert first.",
            ],
          },
        ],
        examinerTips: [
          "When inserting an inequality symbol between two values, convert both to decimals first, then place < or > accordingly.",
          "'At least' means ⩾; 'at most' means ⩽; 'more than' means >; 'less than' means <. Memorise these translations.",
          "For ordering five or more numbers, write them all as decimals in a column, then order the decimals — it is much faster.",
          "Draw a number line for negative number ordering — it makes the direction of inequality visually clear.",
        ],
        commonMistakes: [
          "Confusing > and < — remember: the pointy end always faces the smaller number.",
          "Ordering fractions by looking at numerator or denominator alone — 3/8 < 3/5 even though both have numerator 3.",
        ],
        recap: [
          "Insert the correct symbol (>, <, or =) between: (a) 0.6 __ 3/5, (b) −4 __ −4.1. [2]",
          "Write these numbers in order from smallest to largest: −1.5, 3/4, 0, −0.4, 2/3. [2]",
          "Write down an integer n such that −3 < n ⩽ 1. [1]",
          "A number y satisfies y ⩾ −2 and y < 4. Write down all the integer values of y. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Mathematical Symbols
  // ─────────────────────────────────────────────────────────────
  {
    number: 8,
    title: "Mathematical Symbols",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Mathematical Symbols** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). Fluency with the full set of IGCSE symbols — equality, inequality, proportion, and set notation — allows you to read and write mathematical statements precisely and without ambiguity.`,
    subheadings: [
      {
        title: "Mathematical Symbols",
        body: `IGCSE Mathematics uses a standard set of symbols that appear across all topics. Being fluent with these symbols means you can read and write mathematical statements without ambiguity.\n\nBeyond the inequality symbols, you will also meet **≈** (approximately equal to), **∝** (proportional to), **∈** (is an element of), **∉** (is not an element of), **∅** (empty set), and **∞** (infinity). Each symbol carries a precise meaning that must not be confused with a similar-looking symbol.`,
        groups: [
          {
            subTitle: "Equality and inequality symbols",
            bullets: [
              "**= (equals):** the two sides have exactly the same value — 3 × 4 = 12.",
              "**≠ (not equal to):** the two sides are different — 3 × 4 ≠ 11.",
              "**> and < (strict inequalities):** greater than / less than, not including the boundary value.",
              "**⩾ and ⩽ (non-strict inequalities):** greater than or equal to / less than or equal to, including the boundary.",
              "**≈ (approximately equal to):** used after rounding — π ≈ 3.14159; write ≈ not = when rounding.",
              "**∝ (proportional to):** y ∝ x means y = kx for some constant k; find k before computing further.",
            ],
          },
          {
            subTitle: "Set and other symbols",
            bullets: [
              "**∈ (is an element of):** 3 ∈ {1, 2, 3, 4} means 3 belongs to the set.",
              "**∉ (is not an element of):** 5 ∉ {1, 2, 3, 4} means 5 does not belong to the set.",
              "**∅ (empty set):** a set containing no elements; n(∅) = 0.",
              "**∞ (infinity):** not a number but a concept — used in interval notation, e.g. x > 5 can be written (5, ∞).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**≈ is not =** — write ≈ after rounding; writing = after rounding is a notational error that some mark schemes penalise.",
              "**∝ requires a constant** — once you write y ∝ x you must find k to form the equation y = kx before you can calculate.",
              "**Using the wrong inequality direction** — 'x is at most 10' is x ⩽ 10, not x ⩾ 10.",
              "**∈ vs ⊆ (subset)** — ∈ is used for a single element; ⊆ is used for a set being inside another set.",
            ],
          },
        ],
        examinerTips: [
          "Always use ≈ when you have rounded a value — using = after rounding is technically incorrect.",
          "When a question says 'y is proportional to x', immediately write y = kx; then substitute a given pair of values to find k.",
          "Learn the difference between ∈ (element belongs to a set) and ⊆ (one set is a subset of another).",
          "In inequality questions, circle the boundary type: an open circle on a number line means strict (<, >); a closed circle means ⩽ or ⩾.",
        ],
        commonMistakes: [
          "Writing = when the value has been rounded or approximated — use ≈ to signal an approximation.",
          "Confusing ∝ (proportional) with ≈ (approximately equal) — these are completely different symbols with different meanings.",
        ],
        recap: [
          "Write down the meaning of each symbol: (a) ≠, (b) ⩾, (c) ≈, (d) ∝. [4]",
          "y is inversely proportional to x. Write a formula for y in terms of x and a constant k. [1]",
          "A = {1, 2, 3, 4, 5}. State whether each is true or false: (a) 3 ∈ A, (b) 6 ∈ A, (c) ∅ ⊆ A. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. Addition and Subtraction
  // ─────────────────────────────────────────────────────────────
  {
    number: 9,
    title: "Addition and Subtraction",
    section: "Number",
    topic: "Arithmetic Operations",
    intro: `Revision notes for **Addition and Subtraction** under **Arithmetic Operations** (Number). Cambridge IGCSE Mathematics (0580). Column addition and subtraction are the foundation for all mental and written arithmetic — mastering carrying and borrowing prevents errors that cascade through multi-step problems.`,
    subheadings: [
      {
        title: "Addition and Subtraction",
        body: `**Column addition** works right to left: add the units column, carry any excess into the tens column, and repeat. **Column subtraction** (borrowing/decomposition) works the same way in reverse — when a column digit is too small to subtract from, borrow 10 from the next column and reduce that column's top digit by 1.\n\nThe same operations apply to **negative numbers**: adding a negative reduces the total (5 + (−3) = 2); subtracting a negative increases it (5 − (−3) = 8).\n\nFor **decimal addition and subtraction**, always align the decimal points and pad with zeros where needed: 3.6 + 14.72 becomes 03.60 + 14.72 = 18.32.`,
        groups: [
          {
            subTitle: "Column addition",
            bullets: [
              "**Align units:** write each number so that units are directly below units, tens below tens, etc.",
              "**Add column by column from right to left**, carrying when the sum of a column exceeds 9.",
              "**Example — 4 736 + 2 859:** units 6+9=15 (write 5, carry 1); tens 3+5+1=9; hundreds 7+8=15 (write 5, carry 1); thousands 4+2+1=7. Answer: 7 595.",
              "**Decimal addition — pad with zeros:** to add 5.3 + 12.74, write 05.30 + 12.74 so both have the same number of decimal places.",
            ],
          },
          {
            subTitle: "Column subtraction",
            bullets: [
              "**Borrowing (decomposition):** if the top digit in a column is smaller than the bottom, borrow 10 from the next column; reduce that column's top digit by 1.",
              "**Example — 503 − 247:** units: 3 < 7, borrow from tens (but tens is 0, so borrow from hundreds); 10 − 7 = 3; tens: 9 − 4 = 5 (after lending 1 to units); hundreds: 4 − 2 = 2. Answer: 256.",
              "**Subtracting a negative:** rewrite 5 − (−8) as 5 + 8 = 13 before column working.",
              "**Decimal subtraction:** align decimal points and pad — 5.1 − 2.46 becomes 5.10 − 2.46 = 2.64.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Carry digits forgotten** — write carry digits clearly above the next column so they are not missed.",
              "**Misaligning decimal points in decimal addition** — always write one number directly below the other with decimal points aligned.",
              "**Subtracting negatives** — 5 − (−8) = 13, not −3; rewrite as addition before column working.",
              "**Borrowing through zero** — when the tens digit is 0, you must borrow from the hundreds first, then lend to the units.",
            ],
          },
        ],
        examinerTips: [
          "Draw in decimal points even when they are not shown — a whole number like 24 can be written 24.0 to help alignment.",
          "In multi-step problems, record every carry and borrow clearly — this protects the method mark even if the final answer has a slip.",
          "Estimate the answer first (round both numbers): this tells you if your column answer is in the right ballpark.",
          "For consecutive negative additions like −4 + (−6) + (−2), sum the absolute values and attach a minus sign: 4+6+2 = 12, so the answer is −12.",
        ],
        commonMistakes: [
          "Forgetting to carry a digit, particularly when several columns in a row exceed 9.",
          "In decimal subtraction, padding with a zero on the wrong number — always pad the number with fewer decimal places.",
        ],
        recap: [
          "Calculate 3 847 + 2 964 using column addition. Show all carry digits. [2]",
          "Calculate 6 002 − 3 745. Show all working. [2]",
          "Calculate 12.4 + 3.075. [1]",
          "A temperature falls from 3.5 °C to −4.8 °C. By how many degrees did it fall? [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. Multiplication and Division
  // ─────────────────────────────────────────────────────────────
  {
    number: 10,
    title: "Multiplication and Division",
    section: "Number",
    topic: "Arithmetic Operations",
    intro: `Revision notes for **Multiplication and Division** under **Arithmetic Operations** (Number). Cambridge IGCSE Mathematics (0580). Long multiplication and long division are tested without a calculator in Paper 1 — the grid method and the standard long division algorithm are the two most reliable techniques.`,
    subheadings: [
      {
        title: "Multiplication and Division",
        body: `**Long multiplication** breaks a large product into manageable parts. The **grid method** splits each factor by place value, multiplies every pair, and sums the results. The **standard long multiplication algorithm** achieves the same result column by column.\n\n**Long division** repeatedly estimates how many times the divisor fits into successive portions of the dividend, then subtracts to find the remainder, and brings down the next digit.\n\n**Multiplying by powers of 10** shifts digits left (multiply) or right (divide): multiplying by 100 moves every digit two places to the left. Dividing by 0.1 is the same as multiplying by 10.`,
        groups: [
          {
            subTitle: "Long multiplication",
            bullets: [
              "**Grid method (38 × 47):** split as (30+8) × (40+7); fill the 2×2 grid: 30×40=1200, 30×7=210, 8×40=320, 8×7=56; sum: 1200+210+320+56 = 1786.",
              "**Standard algorithm (38 × 47):** 38×7 = 266; 38×40 = 1520 (shift one place left); 266 + 1520 = 1786.",
              "**Multiplying by powers of 10:** 47 × 100 = 4700; shift the decimal two places right.",
              "**Multiplying decimals:** 2.3 × 1.4 → treat as 23 × 14 = 322; total decimal places = 1+1 = 2; answer 3.22.",
            ],
          },
          {
            subTitle: "Long division",
            bullets: [
              "**Long division (852 ÷ 6):** 6 into 8 goes 1 (remainder 2); bring down 5 → 25; 6 into 25 goes 4 (remainder 1); bring down 2 → 12; 6 into 12 goes 2. Answer: 142.",
              "**Converting remainder to a fraction:** if 853 ÷ 6 gives quotient 142 remainder 1, the exact answer is 142 1/6.",
              "**Dividing by a decimal (÷ 0.4):** multiply both numbers by 10 to convert to an integer division: 24 ÷ 0.4 = 240 ÷ 4 = 60.",
              "**Dividing by 0.1 = multiplying by 10:** 7 ÷ 0.1 = 70.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Place-value shift in grid method** — the partial products must include the correct number of zeros; 30 × 40 is 1200, not 12.",
              "**Remainder confusion in division** — if the question asks for the exact answer, convert the remainder to a decimal or fraction rather than leaving 'remainder 2'.",
              "**Dividing by decimals — multiply both** — to divide by 0.05, multiply both by 100, giving an integer divisor.",
              "**Decimal place count in multiplication** — count total decimal places in both factors, not just the answer.",
            ],
          },
        ],
        examinerTips: [
          "For non-calculator multiplication, write out the grid method in full — it shows working and earns method marks even if arithmetic slips.",
          "After long division, always verify: quotient × divisor + remainder should equal the original dividend.",
          "Dividing by a decimal always has an integer-division equivalent — convert it immediately to avoid errors.",
          "Estimation: round both numbers before multiplying to check the magnitude of the answer (e.g. 38 × 47 ≈ 40 × 50 = 2000).",
        ],
        commonMistakes: [
          "Forgetting the placeholder zero in standard long multiplication — when multiplying by the tens digit, the partial product must start in the tens column.",
          "Stopping long division too early and leaving a remainder instead of converting it.",
        ],
        recap: [
          "Use the grid method to calculate 46 × 37. Show all partial products. [2]",
          "Calculate 756 ÷ 7 using long division. [2]",
          "Calculate (a) 3.6 × 0.5, (b) 72 ÷ 0.08. [3]",
          "A box holds 24 cans. A delivery contains 1 152 cans. How many full boxes is that? [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. Order of Operations (BIDMAS/BODMAS)
  // ─────────────────────────────────────────────────────────────
  {
    number: 11,
    title: "Order of Operations (BIDMAS/BODMAS)",
    section: "Number",
    topic: "Arithmetic Operations",
    intro: `Revision notes for **Order of Operations (BIDMAS/BODMAS)** under **Arithmetic Operations** (Number). Cambridge IGCSE Mathematics (0580). Without a fixed priority order, the same string of symbols could yield different answers — BIDMAS makes every calculation unambiguous.`,
    subheadings: [
      {
        title: "Order of Operations (BIDMAS/BODMAS)",
        body: `When a calculation contains more than one operation, there is a fixed **priority order** that tells you which to do first. The acronym **BIDMAS** (Brackets, Indices, Division, Multiplication, Addition, Subtraction) — also written **BODMAS** (Order instead of Indices) — summarises this order.\n\n**Key point:** Division and Multiplication share the same priority level and are worked **left to right**. Addition and Subtraction also share the same level and are worked left to right.\n\n**Worked example:** evaluate 3 + 4² ÷ (2 × 4) − 1\n1. Brackets: 2 × 4 = 8\n2. Indices: 4² = 16\n3. Division: 16 ÷ 8 = 2\n4. Addition then subtraction: 3 + 2 − 1 = 4`,
        groups: [
          {
            subTitle: "The BIDMAS priority order",
            bullets: [
              "**B — Brackets first:** work out everything inside brackets before doing anything outside — (3 + 4) × 2 = 7 × 2 = 14.",
              "**I — Indices (powers and roots) second:** evaluate any powers or roots — 3 + 2² = 3 + 4 = 7.",
              "**D and M — Division and Multiplication (equal priority, left to right):** 12 ÷ 4 × 3 = 3 × 3 = 9.",
              "**A and S — Addition and Subtraction (equal priority, left to right):** 10 − 3 + 2 = 7 + 2 = 9.",
              "**Nested brackets:** work from the innermost bracket outward — 2 × (3 + (4 − 1)) = 2 × 6 = 12.",
            ],
          },
          {
            subTitle: "Implicit brackets and fraction bars",
            bullets: [
              "**Fraction bar as brackets:** (3 + 5)/(2 − 1) means (3+5) ÷ (2−1) = 8 ÷ 1 = 8; both numerator and denominator must be fully evaluated before dividing.",
              "**Square root as brackets:** √(9 + 16) = √25 = 5; evaluate inside the root symbol first.",
              "**Negative signs before brackets:** −(3 + 4) = −7; distribute the negative if expanding.",
              "**Calculator use:** enter the full expression with brackets to match the written calculation — omitting brackets causes incorrect answers.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Multiplication and division are equal priority** — work them left to right; do not always do multiplication before division.",
              "**Addition and subtraction are equal priority** — work left to right; 10 − 3 + 2 = 9, not 5.",
              "**Implicit brackets in fractions** — the fraction bar acts as brackets; evaluate the full numerator and full denominator before dividing.",
              "**Forgetting indices before addition** — in 3 + 2², square first: 3 + 4 = 7, not 5² = 25.",
            ],
          },
        ],
        examinerTips: [
          "Annotate the expression with the BIDMAS order before evaluating — write the step numbers above each operation.",
          "For expressions with a fraction bar, simplify the top and bottom separately before dividing — treat each as its own calculation.",
          "If a question shows a long calculation, work in stages and write each intermediate answer clearly.",
          "On a calculator, test your bracket placement on a simple expression first — ensure the calculator gives the same answer as hand calculation.",
        ],
        commonMistakes: [
          "Working left to right ignoring BIDMAS — always start with brackets and indices, not the leftmost operation.",
          "Treating division and multiplication as having different priorities — 15 ÷ 5 × 3 = 3 × 3 = 9, NOT 15 ÷ 15 = 1.",
        ],
        recap: [
          "Calculate 5 + 3² × (8 − 2) ÷ 2. Show each step clearly. [3]",
          "Evaluate (12 + 4) ÷ (2² − 2). [2]",
          "Insert brackets into 6 + 4 × 2 − 1 to make the answer equal to 19. [1]",
          "A student writes 4 + 6 ÷ 2 = 5. Explain their error and state the correct answer. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. Operations with Decimals
  // ─────────────────────────────────────────────────────────────
  {
    number: 12,
    title: "Operations with Decimals",
    section: "Number",
    topic: "Arithmetic Operations",
    intro: `Revision notes for **Operations with Decimals** under **Arithmetic Operations** (Number). Cambridge IGCSE Mathematics (0580). Decimal arithmetic follows integer rules with one critical discipline: aligning decimal points for addition and subtraction, and counting decimal places for multiplication.`,
    subheadings: [
      {
        title: "Operations with Decimals",
        body: `Decimal arithmetic follows the same rules as integer arithmetic, with one crucial discipline: **always align the decimal points** before adding or subtracting. For multiplication, count total decimal places across both numbers; for division, eliminate the decimal from the divisor first by multiplying both numbers by an appropriate power of 10.\n\n**Multiplying by 0.1** is the same as dividing by 10 (shift decimal one place left). **Dividing by 0.1** is the same as multiplying by 10 (shift decimal one place right). These equivalences cut calculation time significantly.\n\n**Example — 2.3 × 1.4:** treat as 23 × 14 = 322; there are 2 decimal places total (1+1), so place the decimal to get 3.22.`,
        groups: [
          {
            subTitle: "Adding and subtracting decimals",
            bullets: [
              "**Align decimal points** in a column before computing — 12.4 + 3.75 is written with decimal points vertically aligned.",
              "**Pad with zeros** so both numbers have the same number of decimal places: 12.40 + 03.75.",
              "**Carry and borrow work exactly as for integers** — the decimal point stays fixed in its column in the answer.",
              "**Example — 5.1 − 2.46:** pad as 5.10 − 2.46; units column: 0 < 6, borrow; tenths: 10 − 6 = 4; hundredths: 0 (nothing to subtract). Answer: 2.64.",
            ],
          },
          {
            subTitle: "Multiplying and dividing decimals",
            bullets: [
              "**Multiply as integers, then place the decimal:** 2.3 × 1.4 → treat as 23 × 14 = 322; count 2 decimal places total; answer = 3.22.",
              "**Divide by converting to integers:** 7.2 ÷ 0.08 → multiply both by 100: 720 ÷ 8 = 90.",
              "**Multiplying by 0.1 or 0.01** is the same as dividing by 10 or 100 — shift the decimal point left.",
              "**Dividing by 0.1 or 0.01** is the same as multiplying by 10 or 100 — shift the decimal point right.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Miscount of decimal places in multiplication** — count the total digits after the decimal point in both factors.",
              "**Forgetting to pad zeros when aligning** — 5.1 − 2.46 must be treated as 5.10 − 2.46 to avoid a column error.",
              "**Dividing by a decimal — multiply both numbers** — never move the decimal in the dividend alone.",
              "**0.3 × 0.3 = 0.09, not 0.9** — two decimal places each means the product has 2 decimal places; do not forget both.",
            ],
          },
        ],
        examinerTips: [
          "When multiplying decimals, count the decimal places before starting the integer multiplication — it is easy to forget at the end.",
          "For division by a decimal, state clearly 'multiply both by 10 (or 100)' as a written step — this earns the method mark.",
          "Always estimate: 2.3 × 1.4 ≈ 2 × 1 = 2; the answer 3.22 is in the right range.",
          "Pad with trailing zeros before subtracting decimals — this is the single most reliable way to prevent column errors.",
        ],
        commonMistakes: [
          "Counting only one number's decimal places when multiplying — the total decimal places in the answer equals the sum from both factors.",
          "Moving only the dividend's decimal point when dividing by a decimal — always adjust both numbers by the same factor.",
        ],
        recap: [
          "Calculate (a) 7.84 + 12.6, (b) 9.03 − 4.7. [2]",
          "Calculate (a) 0.6 × 0.4, (b) 4.56 ÷ 0.3. Show your method clearly. [3]",
          "A piece of ribbon is 3.2 m long. It is cut into pieces each 0.08 m long. How many pieces are there? [2]",
          "Without using a calculator, work out 24.6 × 1.5. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 13. Set Notation and Venn Diagrams
  // ─────────────────────────────────────────────────────────────
  {
    number: 13,
    title: "Set Notation and Venn Diagrams",
    section: "Number",
    topic: "Number Foundations",
    intro: `Revision notes for **Set Notation and Venn Diagrams** under **Number Foundations** (Number). Cambridge IGCSE Mathematics (0580). Set notation and Venn diagrams provide a precise language for grouping and comparing numbers — skills used in probability, number, and logic questions.`,
    subheadings: [
      {
        title: "Set Notation and Venn Diagrams",
        body: `A **set** is a collection of distinct objects called **elements**. The **universal set U** contains all elements under consideration. Sets are written with curly brackets: A = {2, 4, 6, 8}.\n\n**Venn diagrams** represent sets as overlapping circles inside a rectangle (the universal set). Every element is placed in the region that correctly describes its membership:\n- Inside A's circle only → in A, not in B\n- Inside B's circle only → in B, not in A\n- In the overlapping region → in both A and B (intersection)\n- Outside both circles → in U but in neither A nor B\n\nTwo-set diagrams are Core; three-set diagrams and additional symbols (∈, ∉, ∅, ⊆) are Extended.`,
        groups: [
          {
            subTitle: "Key set symbols",
            bullets: [
              "**n(A):** the number of elements in set A — if A = {2, 4, 6, 8} then n(A) = 4.",
              "**A ∪ B (union):** all elements in A or B or both — the combined region of both circles.",
              "**A ∩ B (intersection):** only elements in both A and B — the overlapping region.",
              "**A′ (complement of A):** all elements in U that are not in A — everything outside A's circle.",
              "**∅ (empty set):** a set with no elements; n(∅) = 0.",
              "**⊆ (subset):** A ⊆ B means every element of A is also in B.",
            ],
          },
          {
            subTitle: "Venn diagram method",
            bullets: [
              "**Fill the intersection first:** place elements in A ∩ B in the overlapping region before filling the outer parts of each circle.",
              "**Check totals:** n(A ∪ B) = n(A) + n(B) − n(A ∩ B); use this to verify the diagram is consistent.",
              "**Three-set Venn diagrams (Extended):** there are 7 non-empty regions — start from the central region (all three) and work outward.",
              "**Shading regions:** shade A ∪ B by shading both circles; shade (A ∩ B)′ by shading everything except the overlap.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Placing an element in the wrong region** — an element in A ∩ B must appear only in the overlap, not in both separate circles.",
              "**Confusing union and intersection** — union is 'at least one', intersection is 'both'; they give different sets.",
              "**A′ includes elements outside A that may also be outside B** — the complement is not just B; it is everything in U not in A.",
              "**Forgetting elements that belong to U but neither A nor B** — these go in the rectangle, outside both circles.",
            ],
          },
        ],
        examinerTips: [
          "Always fill in the intersection region of a Venn diagram first — this prevents double-counting.",
          "Use the formula n(A ∪ B) = n(A) + n(B) − n(A ∩ B) to find a missing value quickly.",
          "When shading a region from set notation, build it step by step: shade A, shade B, then apply ∪ or ∩ or ′.",
          "For probability questions involving Venn diagrams, place counts (not probabilities) in the diagram first, then divide by the total.",
        ],
        commonMistakes: [
          "Writing an element in both circles separately when it should be in the intersection only — each element appears in exactly one region.",
          "Confusing A′ ∩ B with A ∩ B — A′ ∩ B is elements in B but not in A; shade carefully.",
        ],
        recap: [
          "U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {even numbers}, B = {multiples of 3}. List the elements of (a) A ∩ B, (b) A ∪ B, (c) B′. [3]",
          "In a class of 30 students, 18 study French and 12 study Spanish. 5 study both. Using a Venn diagram, find the number who study neither. [3]",
          "Shade the region A′ ∪ B on a Venn diagram. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 14. Prime Factor Decomposition
  // ─────────────────────────────────────────────────────────────
  {
    number: 14,
    title: "Prime Factor Decomposition",
    section: "Number",
    topic: "Factors, Primes & Indices",
    intro: `Revision notes for **Prime Factor Decomposition** under **Factors, Primes & Indices** (Number). Cambridge IGCSE Mathematics (0580). Every composite number can be written uniquely as a product of prime factors — this decomposition is the tool for finding HCF, LCM, and simplifying expressions with indices.`,
    subheadings: [
      {
        title: "Prime Factor Decomposition",
        body: `**Prime factor decomposition** (also called **prime factorisation**) means writing a number as a product of its prime factors. The **factor tree method** is the standard approach: repeatedly split a number into two factors until every branch ends in a prime.\n\nThe result is written in **index notation**: 72 = 2³ × 3². This representation is unique for every composite number — a fact guaranteed by the **Fundamental Theorem of Arithmetic**, which states that every integer greater than 1 is either prime or can be written as a unique product of primes (order aside).\n\n**Division ladder method (alternative):** divide the number by the smallest prime that goes into it, then divide the result by the smallest prime, and continue until the result is 1. Write the primes as a product: 60 ÷ 2 = 30 ÷ 2 = 15 ÷ 3 = 5 ÷ 5 = 1, so 60 = 2² × 3 × 5.`,
        groups: [
          {
            subTitle: "Factor tree method",
            bullets: [
              "**Step 1 — split the number:** choose any two factors (not 1); a convenient choice is to divide by the smallest prime that divides exactly.",
              "**Step 2 — continue splitting:** split each composite branch further until every tip is a prime.",
              "**Step 3 — collect the primes:** write them in ascending order and use index notation for repeats.",
              "**Example — 72:** 72 = 2 × 36 = 2 × 2 × 18 = 2 × 2 × 2 × 9 = 2 × 2 × 2 × 3 × 3 = 2³ × 3².",
              "**Check:** 2³ × 3² = 8 × 9 = 72 ✓ — always multiply back to verify.",
            ],
          },
          {
            subTitle: "Applications of prime factorisation",
            bullets: [
              "**Simplifying large powers:** 2⁸ × 3² ÷ (2³ × 3) = 2⁵ × 3¹ — work in prime factor form using index laws.",
              "**Finding the number of factors:** if n = 2³ × 3², the number of factors = (3+1)(2+1) = 12.",
              "**Square and cube roots via prime factors:** √(2⁴ × 3²) = 2² × 3¹ = 12; ∛(2³ × 3³) = 2 × 3 = 6.",
              "**Testing divisibility:** a number expressed as 2³ × 3² × 5 is divisible by 2, 3, 4, 5, 6, 9, 10, etc.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Stopping too early** — a branch must end only when the number is prime; 9 is not prime (9 = 3²), so split it further.",
              "**Including 1 as a prime factor** — never write × 1 in the product; 1 is not a prime.",
              "**Different trees, same answer** — the order of splitting does not matter; every valid tree gives the same prime factorisation.",
              "**Forgetting to use index notation** — write 2 × 2 × 2 as 2³, not three separate twos.",
            ],
          },
        ],
        examinerTips: [
          "Always divide by 2 first if the number is even — it is the fastest route to the smallest prime.",
          "After drawing your factor tree, circle all the prime tips and multiply them together to verify the answer.",
          "For 'number of factors' questions, add 1 to each index in the prime factorisation and multiply the results.",
          "If asked to 'express as a product of prime factors', write in index notation (e.g. 2³ × 5), not as a long chain of primes.",
        ],
        commonMistakes: [
          "Not splitting composite numbers at the end of a branch — always check each tip is prime before finishing the tree.",
          "Omitting a prime factor when collecting — after the tree is drawn, count every prime tip systematically.",
        ],
        recap: [
          "Express 360 as a product of its prime factors. Give your answer in index notation. [3]",
          "Using prime factor decomposition, find the value of √(2⁶ × 3²). [2]",
          "Given that 420 = 2² × 3 × 5 × 7, find the number of factors of 420. [2]",
          "Show that 2³ × 3 × 5² and 2² × 3² × 5 have no common factors other than 2 and 3. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 15. HCF and LCM
  // ─────────────────────────────────────────────────────────────
  {
    number: 15,
    title: "HCF & LCM",
    section: "Number",
    topic: "Factors, Primes & Indices",
    intro: `Revision notes for **HCF & LCM** under **Factors, Primes & Indices** (Number). Cambridge IGCSE Mathematics (0580). The highest common factor and lowest common multiple are found using prime factorisation and are applied in context problems involving tiles, synchronisation, and simplification.`,
    subheadings: [
      {
        title: "HCF & LCM",
        body: `The **Highest Common Factor (HCF)** of two or more numbers is the largest number that divides exactly into all of them. The **Lowest Common Multiple (LCM)** is the smallest number that all of them divide into exactly.\n\nThe **prime factor method** is the most reliable approach at IGCSE: write both numbers in prime factorised form, then apply the correct rule for HCF or LCM. A **Venn diagram of prime factors** is a helpful visual tool — place shared prime factors in the overlap, factors unique to each number in the outer regions.\n\n**Example:** find the HCF and LCM of 72 and 60.\n- 72 = 2³ × 3²\n- 60 = 2² × 3 × 5\n- **HCF:** shared primes at their lowest power = 2² × 3 = 12\n- **LCM:** all primes at their highest power = 2³ × 3² × 5 = 360`,
        groups: [
          {
            subTitle: "Prime factor method",
            bullets: [
              "**HCF — shared primes at their LOWEST power:** for 72 = 2³ × 3² and 60 = 2² × 3 × 5, shared primes are 2 and 3; lowest powers are 2² and 3¹; HCF = 4 × 3 = 12.",
              "**LCM — all primes at their HIGHEST power:** from the same pair, primes present are 2, 3, 5; highest powers are 2³, 3², 5¹; LCM = 8 × 9 × 5 = 360.",
              "**Venn diagram method:** place shared prime factors in the overlap, factors unique to each number in the outer regions; HCF = product of overlap; LCM = product of all three regions.",
              "**Check:** HCF × LCM = 12 × 360 = 4 320; first number × second number = 72 × 60 = 4 320 ✓ (this check always works for two numbers).",
            ],
          },
          {
            subTitle: "Word-problem contexts",
            bullets: [
              "**Tiling problems:** the HCF of the tile side length and room dimension gives the largest square tile that fits a rectangle exactly.",
              "**Event synchronisation:** two events that repeat every a and b days first coincide again after LCM(a, b) days.",
              "**Cutting rope into equal pieces:** HCF of the lengths gives the longest equal piece with no waste.",
              "**Sharing equally:** HCF of two quantities gives the largest equal group size that divides both exactly.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**HCF and LCM are often swapped** — HCF is smaller than or equal to either number; LCM is larger; always sense-check your answer.",
              "**HCF uses LOWEST powers, LCM uses HIGHEST** — getting them the wrong way round is the most common error.",
              "**Including primes not shared in HCF** — only primes that appear in both factorisations go into the HCF; 5 is in 60 but not 72, so it does not appear in the HCF.",
              "**Forgetting the check** — multiply HCF × LCM and compare with the product of the two original numbers; mismatch means an error.",
            ],
          },
        ],
        examinerTips: [
          "Always factorise both numbers before attempting HCF or LCM — trying to find them by listing is error-prone for large numbers.",
          "Draw the Venn diagram for prime factors to make the method visual and reduce copying errors.",
          "In word problems, identify the keyword: 'largest equal group/tile/piece' → HCF; 'first time both occur together/synchronise' → LCM.",
          "Use the HCF × LCM = a × b check to verify — if it fails, one of your factorisations is wrong.",
        ],
        commonMistakes: [
          "Using highest powers for HCF and lowest powers for LCM — it is the opposite; HCF uses lowest, LCM uses highest.",
          "Forgetting to include a prime that appears in only one number when finding the LCM — the LCM includes all primes from both factorisations.",
        ],
        recap: [
          "Find the HCF and LCM of 48 and 180. Show your prime factorisations. [4]",
          "Two buses leave the station together. Bus A departs every 12 minutes; Bus B departs every 20 minutes. After how many minutes will they next depart together? [2]",
          "A rectangular floor measures 2.4 m by 1.8 m. Find the side length of the largest square tiles that cover it exactly with no cutting. [2]",
          "Given HCF(a, b) = 6 and LCM(a, b) = 180, and that a = 12, find b. [2]",
        ],
      },
    ],
  },
];
