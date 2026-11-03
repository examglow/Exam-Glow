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
  intro: `Number is where the cheapest method marks are lost: wrong order of operations, rounding in the middle of a calculation, or bounds that answer a different question.\n\nEverything here is Core unless a line is marked **Extended**.`,
  subheadings: [
    {
      title: "Types of Number, Sets and Powers",
      body: `### The Vocabulary List

Learn to identify and use **natural numbers, integers (positive, zero and negative), primes, squares, cubes, common factors, common multiples, rational and irrational numbers, and reciprocals**.

**Prime factorisation**: build a factor tree, then write 72 as **2 × 2 × 2 × 3 × 3**. The **HCF** takes the shared powers at their lowest; the **LCM** takes every power at its highest.

Recall is expected, not calculated: **squares and roots from 1 to 15**, and **cubes and their roots for 1, 2, 3, 4, 5 and 10**.`,
      figure: panelA,
      groups: [
        {
          subTitle: "Sets",
          bullets: [
            "Notation you must read and write: **n(A)** elements in A, **A′** complement, **U** universal set, **A ∪ B** union, **A ∩ B** intersection.",
            "Core uses Venn diagrams with **two sets**; **Extended** adds **∈, ∉, ∅, ⊆, ⊈** and allows **two or three sets**.",
            "Set-builder form appears in questions: **A = {x : x is a natural number}**, **C = {x : a ⩽ x ⩽ b}**.",
          ],
        },
        {
          subTitle: "Indices and standard form",
          bullets: [
            "Rules: **aᵐ × aⁿ = aᵐ⁺ⁿ**, **aᵐ ÷ aⁿ = aᵐ⁻ⁿ**, **(aᵐ)ⁿ = aᵐⁿ**, **a⁰ = 1**, **a⁻ⁿ = 1/aⁿ**. So 7⁻² = 1/49.",
            "**Extended** adds fractional indices: **x^(1/2) = √x** and **x^(1/3) = ∛x**; so 16^(1/4) = 2. **Logarithms are not required.**",
            "Standard form is **A × 10ⁿ** where **1 ⩽ A < 10** and n is an integer. Convert in and out, and calculate with it — Core candidates only meet standard-form calculations on Paper 3.",
          ],
        },
      ],
    },
    {
      title: "Fractions, Decimals, Percentages, Ratio and Rates",
      body: `### One Quantity, Five Outfits

Use and convert between **proper fractions, improper fractions, mixed numbers, decimals and percentages**, recognising equivalence. Fractions must be written in **simplest form**.

Ordering uses **=, ≠, >, <, ⩾, ⩽**. The four operations apply to integers, fractions and decimals with **correct order of operations and brackets**, including negatives and practical contexts such as temperature change.

**Ratio**: simplify (20 : 30 : 40 becomes **2 : 3 : 4**), divide a quantity in a given ratio, and use proportion for recipes, map scales and best-value comparisons.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Percentages that get asked",
          bullets: [
            "Four skills: **a given percentage of a quantity**, **one quantity as a percentage of another**, **percentage increase or decrease**, and **simple and compound interest** — the formulas are **not** given, so know them.",
            "Compound interest over n years is **P(1 ± r/100)ⁿ**; a multiplier chain is faster than repeated single-year working.",
            "Situations include **deposit, discount, profit and loss, earnings, and percentages over 100%**.",
            "**Extended** adds **reverse percentages** (cost price from selling price and percentage profit) and **repeated percentage change**.",
          ],
        },
        {
          subTitle: "Rates, time and money",
          bullets: [
            "Common rates: **hourly pay, exchange rates, flow rates, fuel consumption**. Others: **pressure, density, population density** — those formulas are given in the question, but **speed = distance ÷ time is knowledge you must have**.",
            "Watch the units: notation is **m/s** and **g/cm³**, and a 3 hour 45 minute journey must become 3.75 h before dividing.",
            "Time: **s, min, h, days, weeks, months, years**, with **1 year = 365 days**, 12- and 24-hour clocks (**03 15** and **15 15**), timetables, time zones and time differences.",
            "Money: calculate with it and **convert between currencies** using the given rate.",
          ],
        },
      ],
    },
    {
      title: "Estimation, Bounds and Extended Number",
      body: `### How Precise Is the Answer Supposed to Be?

Round to a **specified degree of accuracy**, estimate a calculation by rounding each number first, then round the final answer to a **reasonable accuracy in context**. Both **decimal places and significant figures** are examined.

**Limits of accuracy**: give the **upper and lower bounds** of data rounded to a stated accuracy — a length to the nearest metre has upper bound 0.5 m above the stated value.

On a calculator, **never round a value inside a calculation**; round only the display at the end. Enter **2 hours 30 minutes as 2.5**, and read **4.8 as $4.80** but **3.25 as 3 hours 15 minutes**.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Extended only",
          bullets: [
            "**E1.10**: find the bounds of a **result** — the upper bound of the perimeter or area of a rectangle whose dimensions were measured to the nearest cm, or the lower bound of a speed from rounded distance and time. Divide by the largest denominator to get the smallest quotient.",
            "**E1.17 Exponential growth and decay**: repeated multipliers for **depreciation and population change**. Knowledge of **e is not required**.",
            "**E1.18 Surds**: simplify (**√20 = 2√5**, **√200 − √32 = 6√2**) and **rationalise the denominator** by multiplying by the surd, or by its conjugate.",
            "**E1.4**: recurring decimal notation is required at Extended — recognise **0.1̇7** and convert recurring decimals to fractions and back.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "HCF and LCM are the mirror pair: HCF is the **smallest** shared multiple-free factor, LCM the **lowest** common multiple — and a question asking for one when you write the other scores zero.",
            "Bounds questions want the **widest** interval consistent with the rounding, and a minimum-area answer uses the **lower** bounds of every dimension.",
            "Standard form is not any power of ten: **A must satisfy 1 ⩽ A < 10**, so 12 × 10⁵ is not yet standard form.",
            "Fractional indices are roots, not division: **8^(1/3) = 2**, not 8 ÷ 3.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_1 = chapterOne;
