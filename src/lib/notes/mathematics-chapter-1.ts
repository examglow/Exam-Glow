import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math1-factor-tree.webp",
    alt: "A pencil factor tree branching down from the number 72 into prime factors, drawn on squared paper with a ruler and eraser beside it",
    caption: "Prime factors are the building blocks",
  },
  {
    src: "math1-venn-hoops.webp",
    alt: "Two overlapping chalk circles on a playground floor with numbered counters sorted inside the overlap and the outer regions",
    caption: "Overlap means both conditions at once",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math1-fraction-bars.webp",
    alt: "Coloured paper fraction strips of four different lengths laid on a wooden desk, aligned at their left edges so their lengths compare",
    caption: "Same denominator, then compare",
  },
  {
    src: "math1-percent-grid.webp",
    alt: "A printed one-hundred square grid with forty-four squares shaded in blue and a handful of counters resting beside it",
    caption: "Out of one hundred, every time",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math1-calculator-display.webp",
    alt: "A scientific calculator showing a long decimal answer next to an exercise book where the same answer has been rounded and underlined",
    caption: "Round once, at the very end",
  },
  {
    src: "math1-timetable-departures.webp",
    alt: "A station departures board listing times in four digits beside a paper ticket and a wristwatch showing a 12-hour face",
    caption: "24-hour clock, time zones, exact change",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "Number",
  intro: `Number is where the cheapest method marks are lost: wrong order of operations, rounding in the middle of a calculation, or bounds that answer a different question.\n\nThis chapter covers every number topic in IGCSE Maths Chapter 1 — from recognising number types through to compound measures, unit conversion and rounding.\n\nEverything here is Core unless a line is marked **Extended**.`,
  subheadings: [
    // ─────────────────────────────────────────────────────────────
    // 1. Types of Numbers
    // ─────────────────────────────────────────────────────────────
    {
      title: "Types of Numbers",
      body: `**Number types** are the vocabulary of mathematics. You need to recognise and name each type on sight — exam questions often ask you to identify which category a given number belongs to.\n\n**Natural numbers** are the positive counting numbers (1, 2, 3, …); some definitions include 0. **Integers** extend the natural numbers to include zero and all negative whole numbers (…, −3, −2, −1, 0, 1, 2, 3, …). Every natural number is an integer, but not every integer is a natural number.`,
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
            "**Triangular numbers:** formed by summing consecutive natural numbers. The nth triangular number = n(n+1)/2. Examples: 1, 3, 6, 10, 15, 21.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**1 is not prime** — it has only one factor (itself), so it fails the 'exactly two factors' test. Never list 1 as a prime.",
            "**2 is the only even prime** — every other even number has 2 as a factor, giving it at least three factors.",
            "**0 is an integer but not a natural number** in most IGCSE definitions — read the question carefully if 0 is in a list.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 2. Multiples, Factors and Primes
    // ─────────────────────────────────────────────────────────────
    {
      title: "Multiples, Factors and Primes",
      body: `**Multiples** of a number are the results of multiplying it by any positive integer — the multiples of 6 are 6, 12, 18, 24, … **Factors** of a number are the whole numbers that divide into it exactly — the factors of 12 are 1, 2, 3, 4, 6, 12.\n\nFinding all factors is a systematic task: start at 1, pair each small factor with its matching large factor, and stop when the two numbers in a pair meet.`,
      groups: [
        {
          subTitle: "Listing factors and multiples",
          bullets: [
            "**To list factors of 24:** check 1 (yes), 2 (yes), 3 (yes), 4 (yes), 5 (no), 6 (yes) — stop at √24 ≈ 4.9; pairs: 1×24, 2×12, 3×8, 4×6. Factors: 1, 2, 3, 4, 6, 8, 12, 24.",
            "**Multiples of 7:** 7, 14, 21, 28, 35, … — just the times-table for that number.",
            "**Prime numbers to 20:** 2, 3, 5, 7, 11, 13, 17, 19 — learn these eight numbers.",
            "**Why 1 is not prime:** a prime has exactly two distinct factors (1 and itself). The number 1 has only one factor (1), so it does not meet the definition.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Missing the larger factor in a pair** — always list factors in pairs and check every integer up to the square root.",
            "**Confusing factors and multiples** — factors are smaller than or equal to the number; multiples are equal to or larger.",
            "**Including 1 as a prime** — in an exam list, 1 must not appear in a set of primes.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 3. Squares, Cubes and Roots
    // ─────────────────────────────────────────────────────────────
    {
      title: "Squares, Cubes and Roots",
      body: `**Square numbers** and their **square roots** (written **√**) must be recalled instantly up to 15². **Cube numbers** and their **cube roots** (written **∛**) must be recalled for the integers 1–10. These are the numbers the IGCSE syllabus expects you to know without a calculator.\n\nThe square root of a number n is the value that, when multiplied by itself, gives n. The cube root of n is the value that, multiplied by itself twice, gives n.`,
      groups: [
        {
          subTitle: "Squares and square roots 1–15",
          bullets: [
            "**1² = 1, √1 = 1 | 2² = 4, √4 = 2 | 3² = 9, √9 = 3 | 4² = 16, √16 = 4 | 5² = 25, √25 = 5**",
            "**6² = 36, √36 = 6 | 7² = 49, √49 = 7 | 8² = 64, √64 = 8 | 9² = 81, √81 = 9 | 10² = 100, √100 = 10**",
            "**11² = 121 | 12² = 144 | 13² = 169 | 14² = 196 | 15² = 225** — these come up in Pythagoras questions.",
            "**√ notation:** √25 means the positive square root only. The equation x² = 25 has two solutions: x = 5 and x = −5.",
          ],
        },
        {
          subTitle: "Cubes and cube roots 1–10",
          bullets: [
            "**1³ = 1, ∛1 = 1 | 2³ = 8, ∛8 = 2 | 3³ = 27, ∛27 = 3 | 4³ = 64, ∛64 = 4 | 5³ = 125, ∛125 = 5**",
            "**6³ = 216 | 7³ = 343 | 8³ = 512 | 9³ = 729 | 10³ = 1000, ∛1000 = 10**",
            "**∛ notation:** ∛8 = 2 because 2 × 2 × 2 = 8. Unlike square roots, every real number has exactly one real cube root.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**√ gives only the positive root** — if the question asks for both solutions of x² = 49, write ±7.",
            "**Confusing 4³ and 4²** — cube means multiply by itself twice more (3 times total); do not stop after squaring.",
            "**64 appears in both lists** — 8² = 64 and 4³ = 64; recognise this in factor and index questions.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 4. Reciprocals
    // ─────────────────────────────────────────────────────────────
    {
      title: "Reciprocals",
      body: `The **reciprocal** of a number is 1 divided by that number. For any non-zero number n, its reciprocal is 1/n. For a fraction a/b (where a ≠ 0 and b ≠ 0), the reciprocal is b/a — you simply flip the fraction.\n\nThe defining property is: **any number multiplied by its reciprocal equals 1**. This makes reciprocals essential when dividing fractions and working with negative indices.`,
      groups: [
        {
          subTitle: "Finding reciprocals",
          bullets: [
            "**Reciprocal of 5:** 1/5 = 0.2 — because 5 × 1/5 = 1.",
            "**Reciprocal of 2/3:** flip to get 3/2 = 1.5 — because 2/3 × 3/2 = 6/6 = 1.",
            "**Reciprocal of 0.4:** write as 2/5, flip to 5/2 = 2.5.",
            "**Reciprocal of −4:** −1/4 = −0.25 — the sign is preserved.",
            "**Zero has no reciprocal** — 1/0 is undefined.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Reciprocal is not the negative** — the reciprocal of 3 is 1/3, not −3. Those are different operations.",
            "**Reciprocal of a fraction — do not negate, flip** — reciprocal of 3/7 is 7/3, not −3/7.",
            "**Check the product equals 1** — if your reciprocal times the original number does not equal 1, it is wrong.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 5. Place Value
    // ─────────────────────────────────────────────────────────────
    {
      title: "Place Value",
      body: `The **place value system** assigns each digit in a number a value based on its position. Moving one column to the left multiplies the value by 10; moving one column to the right divides it by 10.\n\nUnderstanding place value is the foundation for reading large numbers, writing decimals, and performing column arithmetic correctly.`,
      groups: [
        {
          subTitle: "Column headings",
          bullets: [
            "**Left of the decimal point (whole part):** millions | hundred-thousands | ten-thousands | thousands | hundreds | tens | units.",
            "**Right of the decimal point (decimal part):** tenths | hundredths | thousandths.",
            "**Example — 4 307 582.19:** 4 millions, 3 hundred-thousands, 0 ten-thousands, 7 thousands, 5 hundreds, 8 tens, 2 units, 1 tenth, 9 hundredths.",
            "**Reading large numbers:** group digits in threes from the right before the decimal point to separate millions, thousands, and units.",
            "**Small decimal numbers:** 0.007 means 7 thousandths — the zeros are essential as place-holders.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Place-holder zeros must stay** — 4070 is not the same as 47; the zero holds the tens place.",
            "**Decimal alignment in column arithmetic** — always line up the decimal points before adding or subtracting.",
            "**Do not confuse 'place value' with 'value of the digit'** — the digit 3 in 4307 has a place value of hundreds, so its value is 300.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 6. Negative and Directed Numbers
    // ─────────────────────────────────────────────────────────────
    {
      title: "Negative and Directed Numbers",
      body: `**Directed numbers** include both positive and negative values. A **number line** running from negative infinity on the left to positive infinity on the right shows their order: numbers further left are smaller.\n\nAdding a negative is the same as subtracting; subtracting a negative is the same as adding. These rules extend to multiplication and division.`,
      groups: [
        {
          subTitle: "Addition and subtraction rules",
          bullets: [
            "**Adding a negative:** 8 + (−3) = 8 − 3 = 5 — the two signs combine to give subtraction.",
            "**Subtracting a negative:** 8 − (−3) = 8 + 3 = 11 — two negatives in a row give a positive.",
            "**Ordering negatives on a number line:** −7 < −2 < 0 < 3 — the more negative, the further left, the smaller.",
          ],
        },
        {
          subTitle: "Multiplication and division rules",
          bullets: [
            "**Positive × positive = positive:** 4 × 5 = 20.",
            "**Positive × negative = negative:** 4 × (−5) = −20.",
            "**Negative × negative = positive:** (−4) × (−5) = 20 — two negatives always give a positive.",
            "**Same rule applies to division:** (−20) ÷ (−4) = 5; (−20) ÷ 4 = −5.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**−3² ≠ (−3)²** — without brackets, the square applies only to 3, giving −9; with brackets it gives +9.",
            "**Two negatives only cancel in multiplication/division** — in addition they do not cancel: −3 + (−2) = −5, not 1.",
            "**Temperature and depth contexts** — always check the direction of change and use the correct sign.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 7. Ordering Numbers
    // ─────────────────────────────────────────────────────────────
    {
      title: "Ordering Numbers",
      body: `**Ordering** requires you to place numbers in ascending or descending sequence, or to insert the correct **inequality symbol** between two values. The symbols used in IGCSE are **=** (equal), **≠** (not equal), **>** (greater than), **<** (less than), **⩾** (greater than or equal to), and **⩽** (less than or equal to).\n\nTo order a mixed list of integers, fractions and decimals, convert everything to decimals first — then compare directly.`,
      groups: [
        {
          subTitle: "Using inequality symbols",
          bullets: [
            "**= and ≠:** 5 + 3 = 8; 5 + 3 ≠ 9 — basic equality and inequality.",
            "**> and <:** 7 > 4 reads 'seven is greater than four'; 4 < 7 reads 'four is less than seven'. The open end of the symbol faces the larger number.",
            "**⩾ and ⩽:** these include the possibility of equality; 'x ⩾ 3' means x can equal 3 or any value above it.",
            "**Ordering a mixed list — convert to decimals:** place 3/5, 0.7, −1, 1.2 as −1, 0.6, 0.7, 1.2, so order is −1 < 3/5 < 0.7 < 1.2.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Symbol direction** — always double-check: 'x < 5' means x is less than 5, not greater than 5.",
            "**Negative fractions** — −3/4 = −0.75 is greater than −1 but less than −0.5; convert before ordering.",
            "**⩾ vs > in context** — 'at least 5' means ⩾ 5; 'more than 5' means > 5. These are different and lose marks if confused.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 8. Mathematical Symbols
    // ─────────────────────────────────────────────────────────────
    {
      title: "Mathematical Symbols",
      body: `IGCSE Mathematics uses a standard set of symbols that appear across all topics. Being fluent with these symbols means you can read and write mathematical statements without ambiguity.\n\nBeyond the inequality symbols, you will also meet **≈** (approximately equal to), **∝** (proportional to), and summation notation. Each symbol carries a precise meaning.`,
      groups: [
        {
          subTitle: "Symbol reference",
          bullets: [
            "**= (equals):** the two sides have exactly the same value — 3 × 4 = 12.",
            "**≠ (not equal):** the two sides are different — 3 × 4 ≠ 11.",
            "**> and < (strict inequalities):** greater than / less than, not including the boundary value.",
            "**⩾ and ⩽ (non-strict inequalities):** greater than or equal to / less than or equal to, including the boundary.",
            "**≈ (approximately equal to):** used after rounding — π ≈ 3.14.",
            "**∝ (proportional to):** y ∝ x means y = kx for some constant k.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**≈ is not =** — write ≈ after rounding; writing = after rounding is a notational error that some mark schemes penalise.",
            "**∝ requires a constant** — once you write y ∝ x you must find k to form the equation y = kx before you can calculate.",
            "**Using the wrong inequality direction** — 'x is at most 10' is x ⩽ 10, not x ⩾ 10.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 9. Addition and Subtraction
    // ─────────────────────────────────────────────────────────────
    {
      title: "Addition and Subtraction",
      body: `**Column addition** works right to left: add the units column, carry any excess into the tens column, and repeat. **Column subtraction** (borrowing/decomposition) works the same way in reverse — when a column digit is too small to subtract from, borrow 10 from the next column and reduce that column by 1.\n\nThe same operations apply to negative numbers: adding a negative reduces the total; subtracting a negative increases it.`,
      groups: [
        {
          subTitle: "Column arithmetic",
          bullets: [
            "**Column addition — align units:** write numbers so that units are directly below units, tens below tens, etc.; then add column by column from right to left, carrying when the sum exceeds 9.",
            "**Example addition:** 4 736 + 2 859: units 6+9=15 (write 5, carry 1); tens 3+5+1=9; hundreds 7+8=15 (write 5, carry 1); thousands 4+2+1=7. Answer: 7 595.",
            "**Column subtraction — borrowing:** if the top digit is smaller, borrow 10 from the next column; reduce that column's top digit by 1.",
            "**Subtracting a large number from a small one:** compute the absolute difference, then give the answer the sign of the larger number.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Carry digits forgotten** — write carry digits clearly above the next column so they are not missed.",
            "**Misaligning decimal points in decimal addition** — 3.6 + 14.72 must be written with the decimal points in line; padding with a zero gives 03.60 + 14.72.",
            "**Subtracting negatives** — 5 − (−8) = 13, not −3; rewrite as addition before column working.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 10. Multiplication and Division
    // ─────────────────────────────────────────────────────────────
    {
      title: "Multiplication and Division",
      body: `**Long multiplication** breaks a large product into manageable parts. The **grid method** splits each factor by place value, multiplies every pair, and sums the results. **Long division** repeatedly estimates how many times the divisor fits into successive portions of the dividend.\n\n**Multiplying by powers of 10** shifts digits left (multiply) or right (divide): multiplying by 100 moves every digit two places to the left.`,
      groups: [
        {
          subTitle: "Long multiplication and division",
          bullets: [
            "**Grid method (38 × 47):** split as (30+8) × (40+7); fill the 2×2 grid: 30×40=1200, 30×7=210, 8×40=320, 8×7=56; sum: 1200+210+320+56 = 1786.",
            "**Long division (852 ÷ 6):** 6 into 8 goes 1 (remainder 2); bring down 5 to get 25; 6 into 25 goes 4 (remainder 1); bring down 2 to get 12; 6 into 12 goes 2. Answer: 142.",
            "**Multiplying by powers of 10:** × 10 shifts digits one place left; × 100 shifts two places left; ÷ 1000 shifts three places right.",
            "**Dividing by a decimal (÷ 0.4):** multiply both numbers by 10 to convert to an integer division: 24 ÷ 0.4 = 240 ÷ 4 = 60.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Place-value shift in grid method** — the partial products must include the correct number of zeros; 30 × 40 is 1200, not 12.",
            "**Remainder confusion in division** — if the question asks for the exact answer, convert the remainder to a decimal or fraction rather than leaving 'remainder 2'.",
            "**Dividing by decimals — multiply both** — to divide by 0.05, multiply both by 100, giving an integer divisor.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 11. Order of Operations (BIDMAS/BODMAS)
    // ─────────────────────────────────────────────────────────────
    {
      title: "Order of Operations (BIDMAS/BODMAS)",
      body: `When a calculation contains more than one operation, there is a fixed **priority order** that tells you which to do first. The acronym **BIDMAS** (Brackets, Indices, Division, Multiplication, Addition, Subtraction) — also written **BODMAS** (Order instead of Indices) — summarises this order.\n\nWithout this rule the same string of symbols could give different answers to different people; BIDMAS makes arithmetic unambiguous.`,
      groups: [
        {
          subTitle: "Priority rules",
          bullets: [
            "**Brackets first:** work out everything inside brackets before doing anything outside — (3 + 4) × 2 = 7 × 2 = 14, not 3 + 8 = 11.",
            "**Indices (powers and roots) second:** evaluate any powers or roots — 3 + 2² = 3 + 4 = 7.",
            "**Division and Multiplication (equal priority, left to right):** 12 ÷ 4 × 3 = 3 × 3 = 9, not 12 ÷ 12 = 1.",
            "**Addition and Subtraction (equal priority, left to right):** 10 − 3 + 2 = 7 + 2 = 9, not 10 − 5 = 5.",
            "**Worked example:** 3 + 4² ÷ (2 × 4) − 1 → Brackets: 2×4=8 → Indices: 4²=16 → Division: 16÷8=2 → Addition then subtraction: 3+2−1 = 4.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Multiplication and division are equal priority** — work them left to right; do not always do multiplication before division.",
            "**Implicit brackets in fractions** — the fraction bar acts as brackets; (3+5)/(2−1) means (3+5) ÷ (2−1) = 8 ÷ 1 = 8.",
            "**Nested brackets** — work from the innermost bracket outward; 2 × (3 + (4 − 1)) = 2 × (3 + 3) = 2 × 6 = 12.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 12. Operations with Decimals
    // ─────────────────────────────────────────────────────────────
    {
      title: "Operations with Decimals",
      body: `Decimal arithmetic follows the same rules as integer arithmetic, with one crucial discipline: **always align the decimal points** before adding or subtracting. For multiplication, count total decimal places across both numbers; for division, eliminate the decimal from the divisor first by multiplying both numbers by an appropriate power of 10.`,
      groups: [
        {
          subTitle: "Adding and subtracting decimals",
          bullets: [
            "**Align decimal points** in a column before computing — 12.4 + 3.75 is written with decimal points vertically aligned; pad the first number as 12.40 so columns are clear.",
            "**Carry and borrow** work exactly as for integers — the decimal point stays in its column in the answer.",
          ],
        },
        {
          subTitle: "Multiplying and dividing decimals",
          bullets: [
            "**Multiply as integers, then place the decimal:** 2.3 × 1.4 → treat as 23 × 14 = 322; there are 2 decimal places total (1+1), so the answer is 3.22.",
            "**Divide by converting to integers:** 7.2 ÷ 0.08 → multiply both by 100: 720 ÷ 8 = 90.",
            "**Multiplying by 0.1 or 0.01** is the same as dividing by 10 or 100 — shift the decimal point left.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Miscount of decimal places** — count the total number of digits after the decimal point in both factors, not just one of them.",
            "**Forgetting to pad zeros when aligning** — 5.1 − 2.46 must be treated as 5.10 − 2.46 to avoid a column error.",
            "**Dividing by a decimal — multiply both numbers** — never just move the decimal in the dividend alone.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 13. Set Notation and Venn Diagrams
    // ─────────────────────────────────────────────────────────────
    {
      title: "Set Notation and Venn Diagrams",
      body: `A **set** is a collection of distinct objects called **elements**. The **universal set U** contains all elements under consideration. Sets are written with curly brackets: A = {2, 4, 6}.\n\n**Venn diagrams** represent sets as overlapping circles inside a rectangle (the universal set). Every element is placed in the region that correctly describes its membership. Two-set diagrams are Core; three-set diagrams and additional symbols (∈, ∉, ∅, ⊆) are Extended.`,
      groups: [
        {
          subTitle: "Key symbols",
          bullets: [
            "**n(A):** the number of elements in set A — if A = {2, 4, 6, 8} then n(A) = 4.",
            "**A ∪ B (union):** all elements in A or B or both — the combined region of both circles.",
            "**A ∩ B (intersection):** only elements in both A and B — the overlapping region.",
            "**A′ (complement of A):** all elements in U that are not in A — everything outside the A circle.",
            "**∅ (empty set):** a set with no elements; n(∅) = 0.",
            "**∈ / ∉:** 3 ∈ A means 3 is an element of A; 5 ∉ A means 5 is not an element of A.",
            "**⊆ (subset):** A ⊆ B means every element of A is also in B.",
          ],
        },
        {
          subTitle: "Venn diagram method",
          bullets: [
            "**Fill the intersection first:** place elements in A ∩ B in the overlapping region before filling the outer parts of each circle.",
            "**Three-set Venn diagrams (Extended):** there are 7 regions — start from the central region (all three) and work outward.",
            "**Shading regions:** shade A ∪ B by shading both circles; shade (A ∩ B)′ by shading everything except the overlap.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Placing an element in the wrong region** — an element in A ∩ B must appear only in the overlap, not in both separate circles.",
            "**Confusing union and intersection** — union is 'at least one', intersection is 'both'; they are not the same.",
            "**A′ includes everything outside A, including things not in B** — the complement is not just B.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 14. Prime Factor Decomposition
    // ─────────────────────────────────────────────────────────────
    {
      title: "Prime Factor Decomposition",
      body: `**Prime factor decomposition** (also called **prime factorisation**) means writing a number as a product of its prime factors. The **factor tree method** is the standard approach: repeatedly split a number into two factors until every branch ends in a prime.\n\nThe result is written in **index notation**: 72 = 2³ × 3². This representation is unique for every composite number — a fact guaranteed by the **Fundamental Theorem of Arithmetic**.`,
      groups: [
        {
          subTitle: "Factor tree method",
          bullets: [
            "**Step 1 — split the number:** choose any two factors (not 1); a convenient choice is to divide by the smallest prime that works.",
            "**Step 2 — continue splitting:** split each composite branch further until every tip is a prime.",
            "**Step 3 — collect the primes:** write them in ascending order and use index notation for repeats.",
            "**Example — 72:** 72 = 2 × 36 = 2 × 2 × 18 = 2 × 2 × 2 × 9 = 2 × 2 × 2 × 3 × 3 = 2³ × 3².",
            "**Check:** 2³ × 3² = 8 × 9 = 72 — always multiply back to verify.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Stopping too early** — a branch must end only when the number is prime; 9 is not prime (9 = 3²), so split it further.",
            "**Including 1 as a prime factor** — never write × 1 in the product; 1 is not a prime.",
            "**Different trees, same answer** — the order of splitting does not matter; every valid tree gives the same prime factorisation.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 15. HCF and LCM
    // ─────────────────────────────────────────────────────────────
    {
      title: "HCF and LCM",
      body: `The **Highest Common Factor (HCF)** of two or more numbers is the largest number that divides exactly into all of them. The **Lowest Common Multiple (LCM)** is the smallest number that all of them divide into exactly.\n\nThe prime factor method is the most reliable approach at IGCSE: write both numbers in prime factorised form, then apply the correct rule for HCF or LCM. A **Venn diagram** of prime factors is a helpful visual tool.`,
      groups: [
        {
          subTitle: "Prime factor method",
          bullets: [
            "**HCF — shared primes at their LOWEST power:** for 72 = 2³ × 3² and 60 = 2² × 3 × 5, shared primes are 2 and 3; lowest powers are 2² and 3¹; HCF = 4 × 3 = 12.",
            "**LCM — all primes at their HIGHEST power:** from the same pair, primes present are 2, 3, 5; highest powers are 2³, 3², 5¹; LCM = 8 × 9 × 5 = 360.",
            "**Venn diagram method:** place shared prime factors in the overlap, factors unique to each number in the outer regions; HCF = product of overlap; LCM = product of all regions.",
          ],
        },
        {
          subTitle: "Word-problem contexts",
          bullets: [
            "**Tiling problems:** the HCF gives the largest square tile that fits a rectangle exactly.",
            "**Event synchronisation:** two events that repeat every a and b days first coincide again after LCM(a, b) days.",
            "**Cutting rope into equal pieces:** HCF of the lengths gives the longest equal piece with no waste.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**HCF and LCM are often swapped** — HCF is smaller (or equal), LCM is larger (or equal); check your answer makes sense.",
            "**HCF uses LOWEST powers, LCM uses HIGHEST** — getting them the wrong way round is the most common error.",
            "**Including primes not shared in HCF** — only primes that appear in both factorisations go into the HCF.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 16. Powers and Roots
    // ─────────────────────────────────────────────────────────────
    {
      title: "Powers and Roots",
      body: `**Index notation** (also called **power notation**) writes repeated multiplication compactly: 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. The small raised number is the **index** (or **exponent** or **power**), and the main number is the **base**.\n\nSpecial index values have fixed meanings: **a⁰ = 1** for any non-zero a, and **a⁻ⁿ = 1/aⁿ**. These rules extend to roots through fractional indices.`,
      groups: [
        {
          subTitle: "Index rules summary",
          bullets: [
            "**Positive index (aⁿ):** multiply base a by itself n times — 3⁴ = 81.",
            "**Zero index (a⁰ = 1):** any non-zero base raised to 0 equals 1 — 7⁰ = 1, (−5)⁰ = 1.",
            "**Negative index (a⁻ⁿ = 1/aⁿ):** 'reciprocal of the positive power' — 2⁻³ = 1/2³ = 1/8.",
            "**Square root:** √a is the positive number whose square equals a — √49 = 7.",
            "**Cube root:** ∛a is the number whose cube equals a — ∛125 = 5.",
            "**nth root:** ⁿ√a = a^(1/n) — the value that, raised to the power n, gives a.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**a⁰ = 1, not 0** — a common error is to write 5⁰ = 0; it always equals 1 (for a ≠ 0).",
            "**Negative index ≠ negative number** — 3⁻² = 1/9 (positive), not −9.",
            "**√ gives only the positive root** — to get both roots of an equation, write ±√.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 17. Laws of Indices
    // ─────────────────────────────────────────────────────────────
    {
      title: "Laws of Indices",
      body: `The **laws of indices** are algebraic rules that allow you to simplify expressions involving powers without evaluating each power individually. They work for any non-zero base and apply to both integer and fractional indices.\n\nAll five laws must be recalled from memory — they are not given in the IGCSE formula sheet.`,
      groups: [
        {
          subTitle: "The five laws",
          bullets: [
            "**Multiplication law: aᵐ × aⁿ = aᵐ⁺ⁿ** — same base, add the indices: 3² × 3⁴ = 3⁶.",
            "**Division law: aᵐ ÷ aⁿ = aᵐ⁻ⁿ** — same base, subtract the indices: 5⁷ ÷ 5³ = 5⁴.",
            "**Power law: (aᵐ)ⁿ = aᵐⁿ** — a power raised to another power, multiply the indices: (2³)⁴ = 2¹².",
            "**Zero index: a⁰ = 1** — any non-zero base to the power zero equals 1.",
            "**Negative index: a⁻ⁿ = 1/aⁿ** — a negative index means take the reciprocal of the positive power.",
          ],
        },
        {
          subTitle: "Fractional indices (Extended)",
          bullets: [
            "**x^(1/n) = ⁿ√x** — a fractional index with numerator 1 means take the nth root: 8^(1/3) = ∛8 = 2.",
            "**x^(m/n) = (ⁿ√x)ᵐ** — root first, then power (or power first, then root): 8^(2/3) = (∛8)² = 2² = 4.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Laws only apply to the same base** — 2³ × 3² cannot be simplified using the multiplication law because the bases differ.",
            "**Multiplying bases, not adding** — 2³ × 2⁴ = 2⁷, not 4⁷; the base stays as 2.",
            "**Fractional index — root not division** — 8^(1/3) = 2, not 8/3 = 2.67.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 18. Converting to and from Standard Form
    // ─────────────────────────────────────────────────────────────
    {
      title: "Converting to and from Standard Form",
      body: `**Standard form** (also called **scientific notation**) writes any number as **A × 10ⁿ** where **1 ⩽ A < 10** and n is an integer. It is used for very large numbers (like the distance to stars) and very small numbers (like the size of a cell).\n\nTo convert to standard form: position the decimal point after the first non-zero digit to get A, then count the number of places the decimal point moved — that count is n, positive if you moved left, negative if you moved right.`,
      groups: [
        {
          subTitle: "Conversion examples",
          bullets: [
            "**Large number — 4 700 000:** move the decimal 6 places left to get 4.7; n = 6; standard form: 4.7 × 10⁶.",
            "**Small number — 0.000 035:** move the decimal 5 places right to get 3.5; n = −5; standard form: 3.5 × 10⁻⁵.",
            "**Converting back — 2.08 × 10³:** move the decimal 3 places right to get 2 080.",
            "**Converting back — 6.1 × 10⁻⁴:** move the decimal 4 places left to get 0.000 61.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**A must satisfy 1 ⩽ A < 10** — 23.5 × 10⁴ is not standard form; rewrite as 2.35 × 10⁵.",
            "**Sign of n** — a large number has positive n; a small number less than 1 has negative n.",
            "**Counting correctly** — count every place moved, including across the decimal point; use a finger if needed.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 19. Operations with Standard Form
    // ─────────────────────────────────────────────────────────────
    {
      title: "Operations with Standard Form",
      body: `Once numbers are in standard form, the laws of indices allow efficient arithmetic. The strategy depends on the operation: **multiplication and division** use index laws directly; **addition and subtraction** require both numbers to share the same power of 10 before the A values can be combined.\n\nA calculator can handle standard-form arithmetic; on a non-calculator paper, the method below is essential.`,
      groups: [
        {
          subTitle: "Multiplication and division",
          bullets: [
            "**Multiply:** multiply the A values, then add the indices: (3 × 10⁴) × (2 × 10³) = 6 × 10⁷.",
            "**Divide:** divide the A values, then subtract the indices: (8 × 10⁶) ÷ (2 × 10²) = 4 × 10⁴.",
            "**Re-adjust if needed:** if the product gives A outside [1, 10), adjust — (5 × 10³) × (4 × 10²) = 20 × 10⁵ = 2 × 10⁶.",
          ],
        },
        {
          subTitle: "Addition and subtraction",
          bullets: [
            "**Make powers match first:** (3 × 10⁵) + (4 × 10⁴) → rewrite 4 × 10⁴ as 0.4 × 10⁵; then 3 × 10⁵ + 0.4 × 10⁵ = 3.4 × 10⁵.",
            "**Adjust back to standard form** if the resulting A is not in [1, 10).",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Adding the A values without matching powers** — (3 × 10⁵) + (4 × 10⁴) ≠ 7 × 10⁵; the powers must match first.",
            "**Forgetting to re-adjust after multiplication** — if A comes out as 20 or 0.6, rewrite in correct standard form.",
            "**Calculator mode** — ensure the calculator is set to display standard form or convert the display correctly when reading the answer.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 20. Introduction to Fractions
    // ─────────────────────────────────────────────────────────────
    {
      title: "Introduction to Fractions",
      body: `A **fraction** represents a part of a whole. The number below the fraction bar is the **denominator** (how many equal parts the whole is divided into) and the number above is the **numerator** (how many of those parts you have).\n\nA **proper fraction** has a numerator smaller than the denominator (e.g. 3/4). An **improper fraction** has a numerator equal to or larger than the denominator (e.g. 7/4). Every fraction can be visualised as a rectangle or circle divided into equal sections.`,
      groups: [
        {
          subTitle: "Vocabulary and types",
          bullets: [
            "**Numerator:** the top number — counts how many parts are taken.",
            "**Denominator:** the bottom number — shows how many equal parts make the whole.",
            "**Proper fraction (e.g. 2/5):** value is less than 1; numerator < denominator.",
            "**Improper fraction (e.g. 9/4):** value is greater than or equal to 1; numerator ≥ denominator.",
            "**Visual meaning:** 3/8 means 'split the whole into 8 equal parts and shade 3 of them'.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Denominator cannot be zero** — a/0 is undefined for all a.",
            "**A fraction equals exactly one value** — 6/4 and 3/2 are identical; simplify before claiming they differ.",
            "**Whole numbers as fractions** — any integer n can be written as n/1, which matters when adding fractions to integers.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 21. Fractions of Amounts
    // ─────────────────────────────────────────────────────────────
    {
      title: "Fractions of Amounts",
      body: `To find a **fraction of an amount**, multiply the amount by the fraction: (a/b) of n = (a × n) ÷ b. In practice, divide the amount by the denominator first (find one part), then multiply by the numerator (scale up to the required number of parts).\n\nThis skill is applied in many contexts — sharing, discounts, population questions, and probability.`,
      groups: [
        {
          subTitle: "Method and examples",
          bullets: [
            "**3/4 of 60:** divide by 4 → 15; multiply by 3 → 45.",
            "**2/5 of 350 students:** 350 ÷ 5 = 70; 70 × 2 = 140 students.",
            "**7/8 of £96:** 96 ÷ 8 = 12; 12 × 7 = £84.",
            "**Fraction of a fraction:** (1/3) of (3/4) = (1 × 3)/(3 × 4) = 3/12 = 1/4.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Divide by denominator first** — do not multiply by numerator before dividing; keep intermediate values exact.",
            "**Non-integer results** — 3/8 of 20 = 60/8 = 7.5; leave as a fraction or exact decimal unless told to round.",
            "**Fraction of a non-integer amount** — the method is identical; 2/3 of 4.5 = 9/3 = 3.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 22. Equivalent and Simplified Fractions
    // ─────────────────────────────────────────────────────────────
    {
      title: "Equivalent and Simplified Fractions",
      body: `Two fractions are **equivalent** if they represent the same value — they are formed by multiplying or dividing both the numerator and the denominator by the same non-zero number.\n\nA fraction is in its **simplest form** (or **lowest terms**) when the HCF of the numerator and denominator is 1. To simplify, divide both by their HCF.`,
      groups: [
        {
          subTitle: "Creating equivalent fractions and simplifying",
          bullets: [
            "**Creating equivalents:** multiply or divide numerator and denominator by the same number — 3/4 = 6/8 = 15/20 = 75/100.",
            "**Simplifying — find HCF:** HCF(18, 24) = 6; divide both: 18/24 = 3/4.",
            "**Simplest form check:** after dividing, check whether numerator and denominator share any factor other than 1.",
            "**Using equivalents to compare fractions:** convert 2/3 and 5/8 to 16/24 and 15/24 — now it is clear 2/3 > 5/8.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Only multiply/divide — never add** — adding the same number to numerator and denominator changes the value: 1/2 ≠ 2/3.",
            "**Simplify fully in one step** — dividing by 2 when the HCF is 6 leaves a fraction that still needs simplifying; it wastes time.",
            "**Simplest form is required** — answers left as 6/8 when 3/4 is possible will lose the accuracy mark.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 23. Mixed Numbers and Improper Fractions
    // ─────────────────────────────────────────────────────────────
    {
      title: "Mixed Numbers and Improper Fractions",
      body: `A **mixed number** combines a whole-number part and a fractional part, such as 2 3/4. An **improper fraction** expresses the same quantity as a single fraction with numerator ≥ denominator, such as 11/4.\n\nConversion between the two forms is required before multiplying or dividing mixed numbers — always convert to improper fractions first to avoid errors.`,
      groups: [
        {
          subTitle: "Converting between forms",
          bullets: [
            "**Mixed number → improper fraction:** multiply the whole number by the denominator, add the numerator, keep the denominator. Example: 3 2/5 = (3×5 + 2)/5 = 17/5.",
            "**Improper fraction → mixed number:** divide numerator by denominator; quotient is the whole number, remainder is the new numerator. Example: 7/3 = 2 remainder 1, so 2 1/3.",
            "**When to convert:** always convert to improper fractions before multiplying or dividing mixed numbers.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Adding mixed numbers by adding integer and fraction parts separately** is valid for addition — but always convert for multiplication and division.",
            "**Remainder must stay as a fraction** — the remainder from 11 ÷ 4 = 2 remainder 3 gives 2 3/4, not 2.3.",
            "**Negative mixed numbers** — −2 3/4 means −(2 + 3/4) = −11/4, not −2 + 3/4.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 24. Adding and Subtracting Fractions
    // ─────────────────────────────────────────────────────────────
    {
      title: "Adding and Subtracting Fractions",
      body: `Fractions can only be added or subtracted when they share a **common denominator**. Find the **LCM** of the denominators, convert each fraction to an equivalent fraction with that LCM as the denominator, then add or subtract the numerators.\n\nFor **mixed numbers**, convert to improper fractions first, find a common denominator, calculate, then convert back if the question asks for a mixed number.`,
      groups: [
        {
          subTitle: "Method",
          bullets: [
            "**Same denominator:** 3/7 + 2/7 = 5/7 — add numerators directly.",
            "**Different denominators — find LCM:** 1/4 + 2/3 → LCM(4,3)=12; convert: 3/12 + 8/12 = 11/12.",
            "**Subtracting:** 5/6 − 1/4 → LCM(6,4)=12; convert: 10/12 − 3/12 = 7/12.",
            "**Mixed numbers:** 2 1/3 + 1 3/4 → convert to 7/3 + 7/4; LCM=12; 28/12 + 21/12 = 49/12 = 4 1/12.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Adding denominators** — 1/4 + 1/3 ≠ 2/7; never add the denominators together.",
            "**Using a common multiple that is not the LCM** — using 12 for thirds and quarters works fine here, but using an unnecessarily large common denominator leads to extra simplification work.",
            "**Forgetting to simplify the final answer** — always check if the result can be reduced.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 25. Multiplying and Dividing Fractions
    // ─────────────────────────────────────────────────────────────
    {
      title: "Multiplying and Dividing Fractions",
      body: `**Multiplying fractions** requires no common denominator: multiply numerator by numerator and denominator by denominator. **Dividing fractions** uses the **keep–change–flip** method (also called multiply by the reciprocal): keep the first fraction, change ÷ to ×, flip the second fraction, then multiply.\n\n**Cancel before multiplying** to keep numbers small: if any numerator and any denominator share a common factor, divide both by that factor before multiplying.`,
      groups: [
        {
          subTitle: "Multiplication and division method",
          bullets: [
            "**Multiply:** 3/5 × 4/7 = (3×4)/(5×7) = 12/35.",
            "**Multiply with cancelling:** 4/9 × 3/8 → cancel 4 and 8 by 4; cancel 9 and 3 by 3: (1/3)×(1/2) = 1/6.",
            "**Divide (keep–change–flip):** 5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12 = 5/4 = 1 1/4.",
            "**Mixed numbers — convert first:** 2 1/2 ÷ 1 1/3 = 5/2 ÷ 4/3 = 5/2 × 3/4 = 15/8 = 1 7/8.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Applying keep–change–flip to both fractions** — only flip the second (divisor) fraction, not the first.",
            "**Cancelling across the wrong pair** — you may cancel any numerator with any denominator, but not numerator with numerator.",
            "**Forgetting to convert mixed numbers** — multiplying or dividing mixed numbers directly without converting gives wrong answers.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 26. Percentages of Amounts
    // ─────────────────────────────────────────────────────────────
    {
      title: "Percentages of Amounts",
      body: `**Percentage** means 'per hundred' — 35% means 35 out of every 100. To find a percentage of an amount, either use the **unitary method** (find 1%, then scale) or multiply the amount by the **decimal equivalent** of the percentage.\n\nThe decimal equivalent of p% is p ÷ 100, so 35% = 0.35, 7% = 0.07, 130% = 1.30.`,
      groups: [
        {
          subTitle: "Methods",
          bullets: [
            "**Decimal multiplier:** 35% of £240 = 0.35 × 240 = £84.",
            "**Unitary method (find 1% first):** 35% of £240 → 1% = 2.40; 35% = 2.40 × 35 = £84.",
            "**Building from 10%:** 10% of 360 = 36; 5% = 18; 15% = 54.",
            "**Percentages above 100%:** 120% of 50 = 1.20 × 50 = 60 — the result is larger than the original.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Dividing by percentage instead of converting to a decimal** — divide by 100 to get the decimal, then multiply.",
            "**'Of' means multiply** — '35% of 240' is 0.35 × 240, not 240 ÷ 35.",
            "**Percentage of a percentage** — 10% of 20% of 500 = 0.10 × 0.20 × 500 = 10; apply each multiplier in turn.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 27. Percentage Increases and Decreases
    // ─────────────────────────────────────────────────────────────
    {
      title: "Percentage Increases and Decreases",
      body: `The quickest approach to percentage change is the **multiplier method**: a percentage increase of p% multiplies by (1 + p/100); a percentage decrease of p% multiplies by (1 − p/100). This gives the new value directly without calculating the change separately.\n\nFor example, a 20% increase gives a multiplier of **1.20**; a 15% decrease gives a multiplier of **0.85**.`,
      groups: [
        {
          subTitle: "Multiplier method",
          bullets: [
            "**20% increase:** new value = original × 1.20. If original = £350: £350 × 1.20 = £420.",
            "**15% decrease:** new value = original × 0.85. If original = £80: £80 × 0.85 = £68.",
            "**Combined changes (Extended):** a 10% increase then a 20% decrease = × 1.10 × 0.80 = × 0.88 — an 12% overall decrease.",
            "**Reverse percentage (Extended):** if the value after a 20% increase is £420, the original = £420 ÷ 1.20 = £350.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Adding percentages directly is wrong for successive changes** — a 10% increase then a 10% decrease is not 0% change; it is a 1% decrease (multiply by 1.10 × 0.90 = 0.99).",
            "**Reverse percentage — divide by multiplier, do not subtract** — after a 15% decrease to get £340, original = 340 ÷ 0.85 = £400, not 340 + 15%.",
            "**Increase of 100% doubles, not adds 100** — 100% of 50 = 50, so a 100% increase gives 100, not 150.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 28. Percentage Change
    // ─────────────────────────────────────────────────────────────
    {
      title: "Percentage Change",
      body: `**Percentage change** measures how much a value has risen or fallen relative to the original. The formula is:\n\n**% change = (change ÷ original) × 100**\n\nwhere 'change' = new value − original value. A positive result is a percentage increase; a negative result is a percentage decrease.`,
      groups: [
        {
          subTitle: "Applications",
          bullets: [
            "**Percentage profit:** if you buy for £40 and sell for £52, change = £12; % profit = (12 ÷ 40) × 100 = 30%.",
            "**Percentage loss:** buy for £50, sell for £38; change = −£12; % loss = (12 ÷ 50) × 100 = 24%.",
            "**Percentage error:** if the true value is 25 cm and the measured value is 26 cm, % error = (1 ÷ 25) × 100 = 4%.",
            "**Always divide by the ORIGINAL** — the original is the starting value, not the new value.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Dividing by the wrong value** — % profit must divide by the cost price (original), not the selling price (new).",
            "**Forgetting to multiply by 100** — 12 ÷ 40 = 0.3, which must be multiplied by 100 to give 30%.",
            "**Percentage change vs absolute change** — the question may ask for the percentage change, not the actual change in value; read carefully.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 29. Simple Interest
    // ─────────────────────────────────────────────────────────────
    {
      title: "Simple Interest",
      body: `**Simple interest** is calculated on the original **principal** alone — the same amount of interest is added each year, regardless of interest previously earned. The formula is:\n\n**I = PRT ÷ 100**\n\nwhere **P** = principal (initial amount), **R** = annual interest rate (as a percentage), **T** = time in years. The **total amount** at the end is **A = P + I**.`,
      groups: [
        {
          subTitle: "Using the formula",
          bullets: [
            "**Example:** £600 at 5% per year for 3 years: I = (600 × 5 × 3) ÷ 100 = 9000 ÷ 100 = £90. Total = £600 + £90 = £690.",
            "**Finding the rate:** R = (I × 100) ÷ (P × T) — rearrange the formula.",
            "**Finding the time:** T = (I × 100) ÷ (P × R) — rearrange similarly.",
            "**Monthly rate:** if the rate is monthly, T is in months and the formula still applies directly.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Simple interest does not compound** — the same value I is added each year; do not recalculate I on the growing total.",
            "**T must be in years to match R per year** — 18 months = 1.5 years; convert before substituting.",
            "**Total amount ≠ interest** — the question may ask for A (total), not I (interest alone); add P at the end.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 30. Compound Interest
    // ─────────────────────────────────────────────────────────────
    {
      title: "Compound Interest",
      body: `**Compound interest** is earned on the growing total — each year's interest is added to the principal before the next year's interest is calculated. The formula for the **accumulated amount** after n years is:\n\n**A = P(1 + r/100)ⁿ** (for growth) or **A = P(1 − r/100)ⁿ** (for depreciation)\n\nwhere **P** = initial amount, **r** = percentage rate per period, **n** = number of periods.`,
      groups: [
        {
          subTitle: "Using the compound interest formula",
          bullets: [
            "**Growth example:** £800 at 3% compound interest for 4 years: A = 800 × (1.03)⁴ = 800 × 1.1255… ≈ £900.43.",
            "**Depreciation example:** a car worth £12 000 depreciates by 15% per year for 3 years: A = 12 000 × (0.85)³ = 12 000 × 0.6141… ≈ £7369.",
            "**Multiplier chain:** instead of the formula, multiply by the multiplier n times — same result.",
            "**Comparing with simple interest:** compound interest gives a larger return because each year's interest also earns interest.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Using simple interest formula for a compound question** — the answer will be too low for growth questions.",
            "**Rounding intermediate steps** — keep full calculator precision throughout; only round the final answer.",
            "**Depreciation uses (1 − r/100)** — do not use (1 + r/100) for a decreasing quantity.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 31. Converting FDP (Fractions, Decimals, Percentages)
    // ─────────────────────────────────────────────────────────────
    {
      title: "Converting FDP (Fractions, Decimals, Percentages)",
      body: `**Fractions, decimals and percentages** are three ways of expressing the same quantity. Converting fluently between all three is a core IGCSE skill that appears in every topic from probability to data handling.\n\nKey conversions to know by heart: 1/2 = 0.5 = 50%; 1/4 = 0.25 = 25%; 1/3 = 0.333… = 33.3%; 1/5 = 0.2 = 20%; 1/8 = 0.125 = 12.5%.`,
      groups: [
        {
          subTitle: "Conversion rules",
          bullets: [
            "**Fraction → decimal:** divide numerator by denominator — 3/8 = 3 ÷ 8 = 0.375.",
            "**Decimal → percentage:** multiply by 100 — 0.375 × 100 = 37.5%.",
            "**Percentage → fraction:** write over 100 and simplify — 35% = 35/100 = 7/20.",
            "**Percentage → decimal:** divide by 100 — 35% = 0.35.",
            "**Recurring decimals (Extended):** 1/3 = 0.333…, 2/3 = 0.666…, 1/7 = 0.142857…",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Multiplying by 100 when converting fraction to percentage but forgetting to divide** — 3/8 as a percentage is (3÷8)×100 = 37.5%, not 3/8 × 100 = 37.5 without the division.",
            "**Writing the fraction unsimplified** — 35/100 must be simplified to 7/20.",
            "**Recurring decimal notation** — 0.333… and 1/3 are the same; do not round 1/3 to 0.33 unless told to.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 32. Ordering FDP
    // ─────────────────────────────────────────────────────────────
    {
      title: "Ordering FDP",
      body: `Comparing a **mixed list of fractions, decimals and percentages** is straightforward when they are all expressed in the same form. Converting everything to **decimals** is usually the fastest and least error-prone approach.\n\nOnce all values are decimals, place them on a number line or list them in ascending or descending order as required.`,
      groups: [
        {
          subTitle: "Method",
          bullets: [
            "**Convert everything to decimals:** 3/5 = 0.6; 65% = 0.65; 0.58 stays as 0.58.",
            "**Order the decimals:** 0.58 < 0.6 < 0.65, so the order is 0.58, 3/5, 65%.",
            "**Write the answer in the original forms** — after ordering, substitute back the original notation as given in the question.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Ordering without converting** — 'comparing' 3/5 and 65% directly by looking at the digits leads to errors; always convert.",
            "**Giving the answer as decimals when the question shows fractions and percentages** — convert back to the original notation.",
            "**Negative FDP** — a negative percentage (e.g. −10%) is less than any positive value; do not miss negative values in a mixed list.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 33. Introduction to Ratios
    // ─────────────────────────────────────────────────────────────
    {
      title: "Introduction to Ratios",
      body: `A **ratio** compares two (or more) quantities of the same type. The ratio **a : b** means 'for every a of the first quantity there are b of the second'. Ratios can be simplified by dividing all parts by their HCF, just like fractions.\n\nRatios have no units — if two quantities have different units, convert them to the same unit before forming the ratio.`,
      groups: [
        {
          subTitle: "Writing and simplifying ratios",
          bullets: [
            "**Writing a ratio:** 15 red counters to 25 blue counters → 15 : 25.",
            "**Simplifying:** HCF(15, 25) = 5; divide both by 5 → 3 : 5.",
            "**Same units required:** to compare 50 cm to 2 m, convert to 50 cm : 200 cm, then simplify → 1 : 4.",
            "**Three-part ratio:** 6 : 10 : 4 → divide all by HCF = 2 → 3 : 5 : 2.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Different units** — 2 kg : 500 g must be converted to 2000 g : 500 g = 4 : 1 before simplifying.",
            "**Order matters in ratios** — 3 : 5 and 5 : 3 are different; list quantities in the same order as stated in the question.",
            "**Ratio is not a fraction** — 3 : 5 means three parts to five parts (8 total); 3/5 means three out of five total (5 total). These are different.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 34. Equivalent and Simplified Ratios
    // ─────────────────────────────────────────────────────────────
    {
      title: "Equivalent and Simplified Ratios",
      body: `**Equivalent ratios** are formed by multiplying or dividing every part of a ratio by the same number — just as equivalent fractions are formed. **Simplified form** (lowest terms) means the HCF of all parts is 1.\n\n**Unitary form** expresses the ratio as **1 : n** or **n : 1**, which is useful for comparing two ratios or solving proportion problems.`,
      groups: [
        {
          subTitle: "Equivalent ratios and unitary form",
          bullets: [
            "**Scaling up:** 2 : 3 is equivalent to 4 : 6, 10 : 15, 100 : 150 — multiply every part by the same number.",
            "**Simplest form:** 18 : 24 → HCF = 6 → 3 : 4.",
            "**Unitary form (1 : n):** divide both parts by the first part — 3 : 4 → divide by 3 → 1 : 4/3 ≈ 1 : 1.33.",
            "**Comparing ratios:** convert both to unitary form or a common first part, then compare the second part.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Partial simplification** — always divide by the full HCF, not just 2 or a convenient factor.",
            "**Unitary form does not have to be whole numbers** — 1 : 4/3 is a valid unitary ratio.",
            "**Equivalent but different — context matters** — 2 : 3 of a different total amount is not the same share as 2 : 3 of a larger total.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 35. Sharing in a Ratio
    // ─────────────────────────────────────────────────────────────
    {
      title: "Sharing in a Ratio",
      body: `To share an amount in a given ratio, find the **total number of parts**, then calculate the **value of one part**, and finally scale each share accordingly.\n\nFor example, sharing £120 in the ratio 3 : 5: total parts = 3 + 5 = 8; one part = £120 ÷ 8 = £15; shares are 3 × £15 = £45 and 5 × £15 = £75.`,
      groups: [
        {
          subTitle: "Method",
          bullets: [
            "**Step 1 — total parts:** add all parts of the ratio together.",
            "**Step 2 — one part:** divide the total amount by the total number of parts.",
            "**Step 3 — each share:** multiply one part by each ratio value.",
            "**Check:** the shares must add up to the original total.",
            "**Three-way ratio:** share 180 in 2 : 3 : 4 → total = 9 parts; 1 part = 20; shares are 40, 60, 80.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Dividing by one part of the ratio rather than the total** — 'sharing in 3 : 5' means 8 parts, not 3 and not 5.",
            "**Forgetting to check the parts sum to the original** — a quick sum catches arithmetic errors.",
            "**Using fractions of the wrong total** — 3/8 of the amount for the first share, 5/8 for the second; not 3/5.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 36. Problem Solving with Ratios
    // ─────────────────────────────────────────────────────────────
    {
      title: "Problem Solving with Ratios",
      body: `Ratio problems in context include **map scales**, **mixing problems**, **recipe scaling**, and **finding one part when the other is given**. The key skill is identifying which part of the ratio corresponds to the given value, then scaling the whole ratio accordingly.\n\nFor map scales, the scale is a ratio of map distance to real distance, both in the same unit.`,
      groups: [
        {
          subTitle: "Common problem types",
          bullets: [
            "**Recipe scaling:** a recipe for 4 uses 300 g of flour; for 10, multiply all amounts by 10/4 = 2.5 → 750 g.",
            "**Map scale 1 : 50 000:** 1 cm on map = 50 000 cm = 500 m = 0.5 km in reality.",
            "**Finding one quantity from the other:** if A and B are in ratio 2 : 7 and A = 14, then one part = 7, so B = 7 × 7 = 49.",
            "**Mixing problems:** a mixture in ratio 3 : 1 (cement : sand) means 3 parts cement for every 1 part sand; to make 20 kg, use 15 kg cement and 5 kg sand.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Map scale — units must match** — if the map scale is 1 : 25 000, convert the answer from cm to km (÷ 100 000).",
            "**Scaling ratio by the wrong factor** — identify which part of the ratio the given value corresponds to before forming the scale factor.",
            "**Mixing ratios with percentages** — a 3 : 2 ratio means 3/5 and 2/5, not 3% and 2%.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 37. Direct and Inverse Proportion
    // ─────────────────────────────────────────────────────────────
    {
      title: "Direct and Inverse Proportion",
      body: `In **direct proportion**, two quantities increase and decrease together at a constant ratio: **y ∝ x**, which means **y = kx** for some constant **k**. When x doubles, y doubles.\n\nIn **inverse proportion**, one quantity increases as the other decreases at a constant product: **y ∝ 1/x**, which means **y = k/x**. When x doubles, y halves. In both cases, the constant k is found from a given pair of values.`,
      groups: [
        {
          subTitle: "Setting up and using proportion equations",
          bullets: [
            "**Direct proportion — finding k:** if y = 15 when x = 3, then k = y/x = 15/3 = 5; equation: y = 5x.",
            "**Direct proportion — using the equation:** when x = 7, y = 5 × 7 = 35.",
            "**Inverse proportion — finding k:** if y = 6 when x = 4, then k = xy = 24; equation: y = 24/x.",
            "**Inverse proportion — using the equation:** when x = 8, y = 24/8 = 3.",
            "**Other types (Extended):** y ∝ x² (y = kx²), y ∝ √x (y = k√x), y ∝ 1/x² (y = k/x²).",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Confusing direct and inverse** — 'y is proportional to x' is direct; 'y is inversely proportional to x' is inverse.",
            "**Using ratio instead of equation** — always find k and write the full equation before answering.",
            "**Inverse proportion is not linear** — a graph of y ∝ 1/x is a curve (hyperbola), not a straight line.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 38. Money Calculations
    // ─────────────────────────────────────────────────────────────
    {
      title: "Money Calculations",
      body: `Money questions cover a wide range of real-life contexts: **profit and loss**, **discount**, **VAT** (value added tax), **best-buy comparisons**, and **hire-purchase** (buying in instalments). All require percentage, ratio and arithmetic skills applied in a practical setting.\n\nAlways read whether the question asks for the amount of profit/discount/VAT, or the final price after the change.`,
      groups: [
        {
          subTitle: "Common money calculations",
          bullets: [
            "**Profit:** selling price − cost price. % profit = (profit ÷ cost price) × 100.",
            "**Discount:** reduce the original price by the percentage — £80 at 25% discount = £80 × 0.75 = £60.",
            "**VAT:** add the tax rate to the price — £50 + 20% VAT = £50 × 1.20 = £60.",
            "**Best buy:** find the unit cost (cost per gram, per litre, etc.) for each option and choose the smallest.",
            "**Hire-purchase:** total cost = deposit + (number of instalments × instalment amount); compare with cash price.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Best buy — wrong unit** — compare on the same unit (cost per 100 g, not cost per pack of different sizes).",
            "**Profit vs % profit** — the question may ask for one or the other; give exactly what is asked.",
            "**VAT added after discount** — apply the discount first, then add VAT to the reduced price, not the original.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 39. Time
    // ─────────────────────────────────────────────────────────────
    {
      title: "Time",
      body: `Time questions use **12-hour clocks** (am/pm) and **24-hour clocks** (0000 to 2359). Converting between them, reading timetables, calculating time intervals, and crossing midnight are the key skills.\n\nNote that time does not follow the decimal system: 1 hour = 60 minutes, 1 minute = 60 seconds, 1 year = 365 days (not 100 or 1000 of anything).`,
      groups: [
        {
          subTitle: "Clock and timetable skills",
          bullets: [
            "**12-hour to 24-hour:** add 12 to any pm time after 12:00 noon — 3:45 pm → 15:45. Midnight is 00:00; noon is 12:00.",
            "**Time interval — same day:** 09:25 to 14:10 → subtract: 14:10 − 09:25 = 4 hours 45 minutes.",
            "**Crossing midnight:** from 22:40 to 01:15 → time to midnight = 1 h 20 min; time from midnight = 1 h 15 min; total = 2 h 35 min.",
            "**Timetables:** read departure and arrival columns; check whether the journey time fits.",
            "**Unit conversions:** 1 year = 365 days; 1 day = 24 h; 1 h = 60 min; 1 min = 60 s.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Decimal time in speed calculations** — 2 h 45 min = 2.75 h (not 2.45 h); always convert minutes to a fraction of an hour.",
            "**Subtracting time** — do not treat minutes as decimal digits; borrow 60 minutes when the minutes column would go negative.",
            "**12-hour clock pitfalls** — 12:00 am is midnight, 12:00 pm is noon; these are commonly confused.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 40. Exchange Rates
    // ─────────────────────────────────────────────────────────────
    {
      title: "Exchange Rates",
      body: `An **exchange rate** tells you how much of one currency equals a fixed amount of another. To convert, either multiply or divide by the given rate — the direction depends on whether you are converting to a currency with a higher or lower unit value.\n\nA useful check: if you are converting to a currency worth less per unit, your answer should be a larger number; if converting to a currency worth more per unit, your answer should be smaller.`,
      groups: [
        {
          subTitle: "Conversion method",
          bullets: [
            "**Given rate — £1 = $1.25:** to convert £ to $, multiply by 1.25; to convert $ to £, divide by 1.25.",
            "**Example — £300 to dollars:** £300 × 1.25 = $375.",
            "**Example — $500 to pounds:** $500 ÷ 1.25 = £400.",
            "**Commission/fees:** some questions deduct a percentage before converting — apply the percentage change first.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Multiply or divide — use common sense to check** — converting pounds to a weaker currency gives more units, so the number should increase.",
            "**Rate changes mid-question** — read whether the same rate applies in both directions or whether a different buying/selling rate is given.",
            "**Commission deducted before or after** — read the question carefully to determine when fees are taken.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 41. Converting Between Units
    // ─────────────────────────────────────────────────────────────
    {
      title: "Converting Between Units",
      body: `Unit conversion uses **fixed scale factors** between metric units. The key conversions must be known: within length, mass and capacity, each step is a power of 10. Area and volume conversions involve the **square** and **cube** of the linear scale factor respectively.\n\nAlways check the direction: multiplying moves to a smaller unit (more of them); dividing moves to a larger unit (fewer of them).`,
      groups: [
        {
          subTitle: "Metric conversions",
          bullets: [
            "**Length:** 10 mm = 1 cm; 100 cm = 1 m; 1000 m = 1 km.",
            "**Mass:** 1000 mg = 1 g; 1000 g = 1 kg; 1000 kg = 1 tonne.",
            "**Capacity:** 10 ml = 1 cl; 100 cl = 1 l; 1000 ml = 1 l.",
            "**Area:** 1 m² = 10 000 cm² (100² = 10 000); 1 km² = 1 000 000 m² (1000²).",
            "**Volume:** 1 m³ = 1 000 000 cm³ (100³); 1 cm³ = 1 ml.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Using linear scale factor for area** — to convert m² to cm², multiply by 10 000, not 100.",
            "**Direction of conversion** — going from larger to smaller units (m to cm): multiply; smaller to larger (cm to m): divide.",
            "**Mixed units in a calculation** — convert all quantities to the same unit before computing.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 42. Squared and Cubic Units
    // ─────────────────────────────────────────────────────────────
    {
      title: "Squared and Cubic Units",
      body: `When a linear measurement is scaled by a factor of k, **areas** scale by **k²** and **volumes** scale by **k³**. This is because area involves two dimensions and volume involves three.\n\nFor example, 1 m = 100 cm, so 1 m² = 100² cm² = 10 000 cm², and 1 m³ = 100³ cm³ = 1 000 000 cm³. These are not the same scale factor as the linear conversion.`,
      groups: [
        {
          subTitle: "Conversion rules",
          bullets: [
            "**Area conversion — square the linear factor:** 1 km = 1000 m → 1 km² = 1000² m² = 1 000 000 m².",
            "**Volume conversion — cube the linear factor:** 1 cm = 10 mm → 1 cm³ = 10³ mm³ = 1000 mm³.",
            "**Useful conversions to remember:** 1 m² = 10 000 cm²; 1 km² = 1 000 000 m²; 1 m³ = 1 000 000 cm³.",
            "**cm³ and ml:** 1 cm³ = 1 ml (exact equivalence, used in density calculations).",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Applying the linear scale factor to area** — if 1 m = 100 cm, students often write 1 m² = 100 cm² instead of 10 000 cm².",
            "**Forgetting to cube for volume** — 1 m = 100 cm, so 1 m³ = 1 000 000 cm³, not 100 cm³ or 10 000 cm³.",
            "**Scale factor in models** — if a model is built to scale 1 : 50, volumes in real life are 50³ = 125 000 times larger than the model.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 43. Speed
    // ─────────────────────────────────────────────────────────────
    {
      title: "Speed",
      body: `**Speed** is a measure of the rate at which distance is covered. The fundamental relationship is:\n\n**Speed = Distance ÷ Time**\n\nThis is typically remembered using the **DST triangle**: cover the quantity you want to find, and the remaining two show the operation (D = S × T; S = D ÷ T; T = D ÷ S). Common units include **m/s**, **km/h** and **mph**.`,
      groups: [
        {
          subTitle: "Using the speed formula",
          bullets: [
            "**Finding speed:** a car travels 240 km in 3 hours → S = 240 ÷ 3 = 80 km/h.",
            "**Finding distance:** D = S × T → at 60 km/h for 2.5 h: D = 60 × 2.5 = 150 km.",
            "**Finding time:** T = D ÷ S → 300 km at 80 km/h: T = 300 ÷ 80 = 3.75 h = 3 h 45 min.",
            "**Unit conversion — km/h to m/s:** divide by 3.6 (or multiply by 1000/3600).",
            "**Average speed:** total distance ÷ total time — do not average individual speeds.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Time must be in decimal hours** — 2 h 30 min = 2.5 h, not 2.3 h; convert before dividing.",
            "**Average speed is not the mean of two speeds** — if you travel at 40 km/h then 60 km/h for equal distances, the average speed is not 50 km/h.",
            "**Units in the answer** — always state the unit; km/h and m/s give very different numerical values.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 44. Compound Measures
    // ─────────────────────────────────────────────────────────────
    {
      title: "Compound Measures",
      body: `**Compound measures** combine two different units. The two most important for IGCSE are **density** (mass per unit volume) and **pressure** (force per unit area). The units themselves tell you which formula to use.\n\n**Density = mass ÷ volume** (units: g/cm³ or kg/m³). **Pressure = force ÷ area** (units: N/m² or Pa). These use the same triangle approach as speed.`,
      groups: [
        {
          subTitle: "Density and pressure triangles",
          bullets: [
            "**Density triangle:** cover D → M ÷ V; cover M → D × V; cover V → M ÷ D.",
            "**Example — finding density:** mass = 240 g, volume = 80 cm³ → density = 240 ÷ 80 = 3 g/cm³.",
            "**Example — finding volume:** mass = 500 g, density = 2.5 g/cm³ → volume = 500 ÷ 2.5 = 200 cm³.",
            "**Pressure triangle:** cover P → F ÷ A; cover F → P × A; cover A → F ÷ P.",
            "**Units tell you the formula** — density in g/cm³ means 'grams per cubic centimetre', i.e. grams divided by cm³.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Units must be consistent** — if density is in g/cm³, mass must be in grams and volume in cm³; convert before substituting.",
            "**Confusing mass and weight** — mass is in kg or g; weight is a force in Newtons. Density questions use mass.",
            "**Rearranging the formula** — if density and volume are given, mass = density × volume, not density ÷ volume.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 45. Rounding to a Given Place Value
    // ─────────────────────────────────────────────────────────────
    {
      title: "Rounding to a Given Place Value",
      body: `**Rounding** reduces a number to a specified level of precision. To round to a given **place value** (e.g. the nearest 10, 100, or 2 decimal places), identify the **target digit**, look at the **next digit to the right** (the deciding digit), and apply the rule:\n\nIf the deciding digit is **5 or above, round up** the target digit; if it is **below 5, leave it unchanged** (round down). Zeros are written to hold place value.`,
      groups: [
        {
          subTitle: "Rounding method",
          bullets: [
            "**Nearest 100:** 4 752 → target digit is 7 (hundreds); next digit is 5 → round up → 4 800.",
            "**2 decimal places:** 3.2847 → target digit is 8 (hundredths); next digit is 4 → round down → 3.28.",
            "**1 decimal place:** 7.95 → target digit is 9; next digit is 5 → round up → 8.0 (carry the 1).",
            "**Zeros hold place value:** 4 752 rounded to the nearest 1000 is 5 000, not 5.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Rounding in stages** — round in one step; 3.449 rounded to 1 d.p. is 3.4, not first to 3.45 then to 3.5.",
            "**Dropping trailing zeros** — 6.70 rounded to 2 d.p. must be written as 6.70, not 6.7, if 2 decimal places are required.",
            "**Deciding digit is 5 — always round up** — by convention 0.5 rounds up to 1, not down to 0.",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 46. Rounding to Significant Figures
    // ─────────────────────────────────────────────────────────────
    {
      title: "Rounding to Significant Figures",
      body: `**Significant figures** (sig figs) count from the **first non-zero digit** of a number. Rounding to n significant figures means keeping n digits of meaning, with the same round-up/round-down rule as for place value.\n\nLeading zeros (before the first non-zero digit) are **not** significant. Trailing zeros after the decimal point **are** significant. Trailing zeros before the decimal point in a whole number may or may not be significant — context determines this.`,
      groups: [
        {
          subTitle: "Identifying and rounding significant figures",
          bullets: [
            "**First sig fig:** the first non-zero digit — in 0.00473, the first sig fig is 4.",
            "**3 sig figs — 47 382:** first three sig figs are 4, 7, 3; next digit is 8 → round up: 47 400.",
            "**3 sig figs — 0.004 736:** first three sig figs are 4, 7, 3; next digit is 6 → round up: 0.004 74.",
            "**2 sig figs — 0.0082:** first sig fig is 8; second is 2; next digit is… there is none, so 0.0082 is already 2 sig figs.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Counting zeros as sig figs** — the zeros in 0.0047 are not significant; counting starts at 4.",
            "**Rounding to 1 sig fig gives an estimate** — do not expect an exact answer; estimation to 1 sig fig introduces deliberate imprecision.",
            "**Writing the wrong number of sig figs** — if 3 sig figs are required and the answer is 6400, write 6400 (or 6.40 × 10³ in standard form to make the sig figs explicit).",
          ],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────
    // 47. Estimation
    // ─────────────────────────────────────────────────────────────
    {
      title: "Estimation",
      body: `**Estimation** means rounding each value to **1 significant figure** and then calculating with those rounded values. The result is not exact, but it gives the **correct order of magnitude** — a sanity check that tells you whether a calculator answer is in the right ballpark.\n\nEstimation is a required skill on non-calculator papers and is tested explicitly: 'estimate the value of' means round to 1 sig fig first, then calculate.`,
      groups: [
        {
          subTitle: "Estimation method",
          bullets: [
            "**Round each number to 1 sig fig:** 38.7 → 40; 4.92 → 5; 193 → 200; 0.0471 → 0.05.",
            "**Calculate with rounded values:** estimate of 38.7 × 4.92 ≈ 40 × 5 = 200.",
            "**Estimate of a fraction:** estimate of 193 ÷ 38.7 ≈ 200 ÷ 40 = 5.",
            "**Use estimation to check a calculator answer:** if your calculator gives 1 927, but the estimate is 200, something went wrong.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Giving the exact answer when estimation is asked** — an exact answer to an estimation question scores zero; you must round first.",
            "**Rounding to 2 sig figs or d.p. instead of 1 sig fig** — estimation uses 1 sig fig only.",
            "**Estimation does not guarantee the right answer** — it shows the right order of magnitude; for accuracy, use the unrounded values.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_1 = chapterOne;
