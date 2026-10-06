import type { SubjectNotes } from "./types";

export const MATHEMATICS: SubjectNotes = {
  id: "mathematics",
  name: "Mathematics",
  code: "0580",
  color: "bg-blue-600",
  chapters: [
    {
      number: 1,
      title: "Number",
      intro: "Number is the foundation of all mathematics. Cambridge IGCSE Mathematics requires fluency with integers, fractions, decimals, percentages, indices, standard form, and surds. Understanding how numbers relate to each other — through factors, multiples, prime factorisation, and ratio — underpins problem-solving across every other topic. Accurate arithmetic and the ability to interpret and convert between different number forms are tested throughout both calculator and non-calculator papers.",
      subheadings: [
        {
          title: "Factors, Multiples and Prime Factorisation",
          body: "A factor of a number n is any integer that divides exactly into n without a remainder. A multiple of n is any integer in the multiplication table of n. A prime number has exactly two factors: 1 and itself. The number 1 is not prime. The Fundamental Theorem of Arithmetic states that every integer greater than 1 can be written as a unique product of prime factors. To find the prime factorisation: divide by the smallest prime (2) as many times as possible, then try 3, then 5, and so on. For example: 360 = 2 × 180 = 2 × 2 × 90 = 2 × 2 × 2 × 45 = 2 × 2 × 2 × 3 × 15 = 2^3 × 3^2 × 5. The Highest Common Factor (HCF) of two numbers is the largest factor common to both; found by multiplying together all prime factors that appear in both factorisations. The Lowest Common Multiple (LCM) is the smallest number divisible by both; found by multiplying all prime factors of both numbers at their highest powers. These are used practically in problems about tiling, gear ratios, and scheduling.",
          groups: [
            {
              subTitle: "Finding HCF and LCM using prime factorisation",
              bullets: [
                "**Step 1 — factorise both numbers**: 84 = 2^2 × 3 × 7; 120 = 2^3 × 3 × 5.",
                "**Step 2 — HCF**: Take each prime factor at its LOWEST power appearing in BOTH: HCF = 2^2 × 3 = 12. Check: 84 ÷ 12 = 7; 120 ÷ 12 = 10. Both divide exactly.",
                "**Step 3 — LCM**: Take each prime factor at its HIGHEST power appearing in EITHER: LCM = 2^3 × 3 × 5 × 7 = 840. Check: 840/84 = 10; 840/120 = 7. Both divide exactly.",
                "**Practical use of LCM**: Two buses leave the station at the same time. Bus A leaves every 12 minutes; Bus B every 20 minutes. LCM(12,20) = 60 minutes — they next leave together 60 minutes later."
              ]
            }
          ],
          recap: [
            "Find the HCF and LCM of 48 and 72. Show your prime factorisations. [4]",
            "Two lights flash together. Light A flashes every 6 seconds; Light B every 8 seconds. After how many seconds do they next flash together? [2]",
            "Write 2520 as a product of its prime factors. [2]",
            "Explain why 1 is not a prime number. [1]"
          ]
        },
        {
          title: "Percentages, Fractions and Decimals",
          body: "Fractions, decimals, and percentages are three ways of representing parts of a whole, and converting between them is a fundamental skill. To convert a fraction to a decimal, divide the numerator by the denominator. To convert a decimal to a percentage, multiply by 100. To find a percentage of an amount: multiply the amount by the percentage expressed as a decimal (e.g. 15% of £240 = 0.15 × 240 = £36). Percentage change = (change ÷ original) × 100. A percentage increase of x% means multiplying by (1 + x/100); a percentage decrease means multiplying by (1 - x/100). Compound interest is calculated using the formula A = P(1 + r/100)^n, where P is the principal, r is the rate per period, and n is the number of periods. Simple interest uses I = PRT/100, where T is time. Reverse percentage problems require finding the original amount after a percentage change has been applied; the key is to recognise what percentage the given value represents and divide accordingly. For example, if a price after a 20% increase is £120, then £120 = 120% of original, so original = 120/1.20 = £100.",
          groups: [
            {
              subTitle: "Compound interest and growth/decay",
              bullets: [
                "**Compound interest formula**: A = P(1 + r/100)^n. Example: £2000 invested at 5% per annum for 3 years. A = 2000(1.05)^3 = 2000 × 1.1576 = £2315.25.",
                "**Depreciation (compound decay)**: A = P(1 - r/100)^n. A car worth £15,000 depreciates at 12% per year. After 4 years: A = 15000(0.88)^4 = 15000 × 0.5997 = £8996.",
                "**Simple vs compound interest**: For £1000 at 10% for 2 years. Simple: I = 1000×10×2/100 = £200; total = £1200. Compound: A = 1000(1.10)^2 = £1210. Compound always gives more because interest is earned on interest.",
                "**Reverse percentage**: A jacket costs £85 after a 15% reduction. What was the original price? The price is 85% of original. Original = 85/0.85 = £100. Do NOT subtract 15% from £85 — that is a common error."
              ]
            }
          ],
          recap: [
            "A television costs £680 after a 15% discount. Calculate the original price. [2]",
            "Calculate the compound interest on £5000 at 4% per annum for 3 years. [3]",
            "A population of bacteria increases by 20% each hour. Starting with 500 bacteria, find the population after 4 hours. [2]",
            "Express 0.375 as a fraction in its simplest form. Show your working. [2]"
          ]
        },
        {
          title: "Standard Form and Indices",
          body: "Standard form (scientific notation) expresses very large or very small numbers as a × 10^n, where 1 ≤ a < 10 and n is an integer. For example, the mass of the Earth is 5.97 × 10^24 kg and the diameter of a hydrogen atom is 1.06 × 10^-10 m. To convert to standard form: move the decimal point until one non-zero digit is to the left; count the places moved (positive for large numbers, negative for small). Index laws (laws of exponents) are essential: a^m × a^n = a^(m+n); a^m ÷ a^n = a^(m-n); (a^m)^n = a^(mn); a^0 = 1; a^(-n) = 1/a^n; a^(1/n) = n-th root of a; a^(m/n) = (a^(1/n))^m = n-th root of a^m. Negative indices represent reciprocals; fractional indices represent roots. For example, 8^(2/3) = (cube root of 8)^2 = 2^2 = 4. Surds are irrational roots such as √2, √3, √5. They cannot be simplified to exact fractions or terminating decimals but can be manipulated using the rules: √a × √b = √(ab); √a / √b = √(a/b). Rationalising the denominator means rewriting a fraction with a surd denominator so the denominator is rational: multiply numerator and denominator by the surd (or by the conjugate for expressions like a + √b).",
          groups: [
            {
              subTitle: "Calculating with standard form",
              bullets: [
                "**Multiplying**: (2.5 × 10^4) × (4 × 10^3) = (2.5 × 4) × 10^(4+3) = 10 × 10^7 = 1 × 10^8. Note: 10 × 10^7 = 10^1 × 10^7 = 10^8.",
                "**Dividing**: (9 × 10^6) ÷ (3 × 10^2) = (9/3) × 10^(6-2) = 3 × 10^4.",
                "**Adding/subtracting**: Convert to same power of 10 first: (3.2 × 10^5) + (4 × 10^4) = 3.2 × 10^5 + 0.4 × 10^5 = 3.6 × 10^5.",
                "**Surd simplification**: √48 = √(16×3) = 4√3. Rationalising: 5/√3 = 5√3/3. For conjugate: 1/(2+√3) = (2-√3)/((2+√3)(2-√3)) = (2-√3)/(4-3) = 2-√3."
              ]
            }
          ],
          recap: [
            "Write 0.00047 in standard form. [1]",
            "Calculate (3.6 × 10^8) ÷ (1.2 × 10^3) and express your answer in standard form. [2]",
            "Evaluate 27^(-2/3) without a calculator. Show all steps. [3]",
            "Simplify (5 + √3)(5 - √3) and rationalise the denominator of 6/(2-√2). [4]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Algebra",
      intro: "Algebra provides a symbolic language for expressing mathematical relationships. Cambridge IGCSE Algebra spans simplifying expressions, expanding and factorising, solving equations and inequalities, working with functions, and understanding sequences. Algebraic fluency is essential not just in its own right but as the foundation for coordinate geometry, trigonometry, and statistics. The ability to construct and solve equations from worded problems is one of the most important and frequently tested skills.",
      subheadings: [
        {
          title: "Expanding Brackets and Factorising",
          body: "Expanding brackets means multiplying every term inside the brackets by the term outside. For a single bracket: a(b + c) = ab + ac. For two brackets (FOIL): (a+b)(c+d) = ac + ad + bc + bd. The difference of two squares: (a+b)(a-b) = a² - b², which has no middle term. Perfect square patterns: (a+b)² = a² + 2ab + b² and (a-b)² = a² - 2ab + b². Factorising is the reverse: finding factors whose product gives the expression. For a common factor: ab + ac = a(b + c). For a trinomial ax² + bx + c: find two numbers that multiply to ac and add to b, then split the middle term. For a quadratic with a = 1: x² + 7x + 12 — find two numbers that multiply to 12 and add to 7; they are 3 and 4, giving (x+3)(x+4). For the difference of two squares: x² - 25 = (x+5)(x-5). Factorising completely means factorising until no further factorisation is possible — always take out the highest common factor first before factorising the remaining quadratic.",
          groups: [
            {
              subTitle: "Factorising quadratics ax² + bx + c (a ≠ 1)",
              bullets: [
                "**Method — splitting the middle term**: For 6x² + 11x + 4: multiply 6×4 = 24. Find two numbers that multiply to 24 and add to 11: they are 8 and 3. Rewrite: 6x² + 8x + 3x + 4. Group: 2x(3x+4) + 1(3x+4) = (2x+1)(3x+4).",
                "**Check by expanding**: (2x+1)(3x+4) = 6x² + 8x + 3x + 4 = 6x² + 11x + 4. Correct.",
                "**Difference of two squares**: 4x² - 9 = (2x)² - 3² = (2x+3)(2x-3). Recognise this pattern instantly — it is very commonly tested.",
                "**Completing the square**: x² + 6x + 2 = (x+3)² - 9 + 2 = (x+3)² - 7. This form immediately gives the vertex of a parabola at (-3, -7) and is used to solve quadratics without the formula."
              ]
            }
          ],
          recap: [
            "Expand and simplify (3x - 2)(2x + 5). [2]",
            "Factorise completely: 12x² - 27. [2]",
            "Factorise 6x² - 7x - 3. Show all your working. [3]",
            "Write x² - 8x + 3 in the form (x - a)² - b. State the coordinates of the minimum point of y = x² - 8x + 3. [3]"
          ]
        },
        {
          title: "Solving Equations and Inequalities",
          body: "A linear equation has one unknown to the first power and is solved by inverse operations. The golden rule is to perform the same operation on both sides. For equations with fractions, multiply every term by the LCM of the denominators first. Simultaneous equations have two unknowns; they require two equations to find a unique solution. The elimination method: make the coefficient of one variable equal in both equations (by multiplying one or both equations by constants), then add or subtract to eliminate that variable. The substitution method: rearrange one equation to express one variable in terms of the other, then substitute into the second equation. The quadratic formula solves any quadratic equation ax² + bx + c = 0: x = (-b ± √(b² - 4ac)) / (2a). The discriminant b² - 4ac tells us the nature of the roots: if positive, two distinct real roots; if zero, one repeated root; if negative, no real roots. Inequalities are solved like equations but with one important rule: multiplying or dividing by a negative number reverses the direction of the inequality sign. The solution to a linear inequality in two variables is a region on a coordinate grid, shaded and indicated with the correct boundary line.",
          groups: [
            {
              subTitle: "Quadratic formula and discriminant",
              bullets: [
                "**Formula**: For 2x² - 5x - 3 = 0: a = 2, b = -5, c = -3. Discriminant = (-5)² - 4(2)(-3) = 25 + 24 = 49. Since 49 > 0, two distinct real roots.",
                "**Solving**: x = (5 ± √49) / (2×2) = (5 ± 7) / 4. So x = 12/4 = 3 or x = -2/4 = -0.5.",
                "**Nature of roots summary**: b² - 4ac > 0: two distinct real roots (the parabola crosses the x-axis at two points). b² - 4ac = 0: one repeated root (the parabola just touches the x-axis). b² - 4ac < 0: no real roots (the parabola does not intersect the x-axis).",
                "**Solving inequalities**: 3x - 2 > x + 6 → 2x > 8 → x > 4. For x² < 9: factorise as (x-3)(x+3) < 0; since the parabola opens upward, the expression is negative between the roots: -3 < x < 3."
              ]
            }
          ],
          recap: [
            "Solve the simultaneous equations: 3x + 2y = 16 and 5x - y = 9. [4]",
            "Use the quadratic formula to solve 2x² + 3x - 5 = 0. Show all working. [3]",
            "Find the values of k for which 3x² + kx + 3 = 0 has no real solutions. [3]",
            "Solve the inequality 2x² - 5x + 2 ≤ 0. [3]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Geometry and Trigonometry",
      intro: "Geometry deals with the properties of shapes, angles, and space. The Cambridge IGCSE syllabus covers circle theorems, similar and congruent figures, Pythagoras' theorem, and trigonometric ratios in right-angled triangles, extending to the sine and cosine rules for non-right-angled triangles. These tools allow calculation of unknown sides and angles and the solution of real-world problems in architecture, navigation, and engineering. Precise diagram drawing and the ability to identify and apply the correct theorem are essential skills.",
      subheadings: [
        {
          title: "Circle Theorems",
          body: "Circle theorems are properties of angles and lines within circles that can be proven from the basic definitions of radius, chord, tangent, and arc. The angle at the centre theorem states that the angle subtended at the centre of a circle by an arc is twice the angle subtended at any point on the major arc (circumference). This means all angles in the same segment are equal — the angles subtended by the same chord at any point on the same arc are equal. The angle in a semicircle is always 90° — this is a special case of the centre theorem (central angle = 180° for a diameter, so circumference angle = 90°). Opposite angles of a cyclic quadrilateral add up to 180°. A tangent to a circle is perpendicular to the radius at the point of contact. Two tangents drawn from an external point to a circle are equal in length. The alternate segment theorem states that the angle between a tangent to a circle and a chord drawn from the point of tangency equals the angle in the alternate segment. The perpendicular from the centre to a chord bisects the chord — this is used to find lengths when the distance from centre to chord is known.",
          groups: [
            {
              subTitle: "Applying circle theorems — examination technique",
              bullets: [
                "**Name every theorem used**: In workings, write the theorem name (e.g. 'angle in semicircle = 90°', 'angles in same segment') — marks are awarded for reasoning, not just the answer.",
                "**Cyclic quadrilateral**: Opposite angles sum to 180°. If angle A = 75° in a cyclic quadrilateral ABCD, then angle C = 180° - 75° = 105°.",
                "**Tangent-radius**: If a radius meets a tangent at point P, the angle between them is exactly 90°. This creates right-angled triangles useful for Pythagoras calculations.",
                "**Alternate segment theorem**: The angle between tangent TP and chord PA equals the angle in the alternate segment (the angle subtended by chord PA on the opposite arc). This is frequently tested with diagrams."
              ]
            }
          ],
          recap: [
            "O is the centre of a circle. Angle AOB = 130° where A and B are points on the circle. Find angle ACB where C is any other point on the major arc. Give a reason. [2]",
            "ABCD is a cyclic quadrilateral. Angle ABC = 105°. Find angle ADC, giving a reason. [2]",
            "A tangent from external point P touches the circle at T. OP = 13 cm and the radius = 5 cm. Calculate PT. [2]",
            "State the alternate segment theorem and give a clear diagram to illustrate it. [3]"
          ]
        },
        {
          title: "Trigonometry: SOH-CAH-TOA, Sine Rule and Cosine Rule",
          body: "In a right-angled triangle, the trigonometric ratios relate the angles to the ratios of the sides: sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent. Remembered as SOH-CAH-TOA. To find a missing side: write the relevant ratio equation and solve. To find a missing angle: use the inverse function (sin⁻¹, cos⁻¹, tan⁻¹). The angle of elevation is the angle above the horizontal; the angle of depression is the angle below. For non-right-angled triangles, two additional rules apply. The Sine Rule: a/sin A = b/sin B = c/sin C. Use when given: two angles and one side (AAS or ASA), or two sides and a non-included angle (SSA — the ambiguous case). The Cosine Rule: a² = b² + c² - 2bc cos A. Use when given: two sides and the included angle (SAS), or all three sides to find an angle (SSS). The area of any triangle = ½ab sin C, where a and b are two sides and C is the included angle. In three-dimensional problems, identify the right-angled triangles within the 3D shape, solve each in turn (often requiring a diagonal of a face or the space diagonal), and always draw a clear 2D diagram of each right-angled triangle used.",
          groups: [
            {
              subTitle: "Choosing the right trigonometric rule",
              bullets: [
                "**Right-angled triangle**: Always try Pythagoras or SOH-CAH-TOA first. Identify the hypotenuse (opposite right angle) and label adjacent and opposite relative to the known angle.",
                "**Sine Rule — use when**: You know an angle and its opposite side. You need to find a side opposite a known angle, or an angle opposite a known side (and you know another angle-side pair).",
                "**Cosine Rule — use when**: You know two sides and the angle between them (SAS) and want the third side. Or you know all three sides and want an angle (SSS). Rearranged for angle: cos A = (b² + c² - a²) / (2bc).",
                "**Area formula**: Useful when height is unknown. Example: triangle with sides 8 cm and 11 cm, included angle 65°. Area = ½ × 8 × 11 × sin 65° = 44 × 0.906 = 39.9 cm²."
              ]
            }
          ],
          recap: [
            "In triangle ABC, AB = 9 cm, BC = 7 cm, and angle ABC = 42°. Calculate AC using the cosine rule. [3]",
            "In triangle PQR, angle P = 55°, angle Q = 63°, and QR = 10 cm. Use the sine rule to find PR. [3]",
            "A flagpole stands vertically. From a point 15 m from its base, the angle of elevation of the top is 38°. Calculate the height of the flagpole. [2]",
            "Find the area of a triangle with sides 12 cm and 15 cm and an included angle of 70°. [2]"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Statistics and Probability",
      intro: "Statistics is the science of collecting, organising, analysing, and interpreting numerical data. Cambridge IGCSE Statistics covers measures of central tendency and spread, representation of data through various chart types, and cumulative frequency curves. Probability quantifies the likelihood of events using values between 0 (impossible) and 1 (certain). Understanding combined events through tree diagrams and Venn diagrams, and distinguishing between independent and mutually exclusive events, is essential for achieving top marks.",
      subheadings: [
        {
          title: "Averages and Spread",
          body: "The mean is calculated by dividing the sum of all values by the number of values. It uses all the data and is sensitive to extreme values (outliers). The median is the middle value when data is ordered; it is not affected by outliers and is preferred for skewed distributions. The mode is the most frequently occurring value; it is the only average that can be used for categorical (non-numerical) data. For grouped data, the mean is estimated using the midpoint of each class interval: mean ≈ Σ(fx) / Σf, where f is the frequency and x is the midpoint. The modal class is the class with the highest frequency density (or highest frequency if all classes are equal width). The median is estimated by finding where the cumulative frequency reaches n/2, using a cumulative frequency curve. The interquartile range (IQR) is the difference between the upper quartile (Q3, 75th percentile) and lower quartile (Q1, 25th percentile): IQR = Q3 - Q1. The IQR measures the spread of the middle 50% of data and is not affected by extreme values. A small IQR indicates data is concentrated near the median; a large IQR indicates widely spread data. Standard deviation measures the average spread of data from the mean — a larger standard deviation means data is more spread out.",
          groups: [
            {
              subTitle: "Cumulative frequency curves — key technique",
              bullets: [
                "**Plotting**: Plot cumulative frequency against the UPPER CLASS BOUNDARY of each interval. Always start the curve from (lower class boundary of first class, 0). The curve is always S-shaped (sigmoidal) for a normal-like distribution.",
                "**Reading the median**: Draw a horizontal line from n/2 on the y-axis to the curve, then vertically down to the x-axis. This is the median.",
                "**Reading quartiles**: Q1 is at n/4; Q3 is at 3n/4. IQR = Q3 - Q1.",
                "**Box-and-whisker plot from the curve**: Uses the minimum, Q1, median, Q3, and maximum. The box spans Q1 to Q3; the whiskers extend to the minimum and maximum (excluding outliers)."
              ]
            }
          ],
          recap: [
            "The heights of 40 students are recorded. The median is 165 cm and IQR is 12 cm. Describe the distribution if a second group has median 168 cm and IQR 20 cm. [3]",
            "From a frequency table, calculate an estimate of the mean. Show clearly how you calculate the midpoints and use them. [4]",
            "Explain why the median is a more appropriate average than the mean for house prices in a town. [2]",
            "Draw a cumulative frequency curve for grouped data and use it to find the median and interquartile range. [5]"
          ]
        },
        {
          title: "Probability: Single and Combined Events",
          body: "The probability of an event A is P(A) = number of favourable outcomes / total number of equally likely outcomes. Probabilities range from 0 (impossible) to 1 (certain). The probability of an event not happening is P(A') = 1 - P(A). For mutually exclusive events (events that cannot both occur simultaneously): P(A or B) = P(A) + P(B). For independent events (events where one outcome does not affect the other): P(A and B) = P(A) × P(B). The addition rule for non-mutually exclusive events: P(A or B) = P(A) + P(B) - P(A and B) — the intersection is subtracted because it was counted twice. A tree diagram represents all possible outcomes of successive events in a branching structure. Each branch shows the probability of that outcome; the probabilities on each set of branches from a single point must add up to 1. To find the probability of a combined outcome, multiply along the branches. Conditional probability P(A|B) is the probability of A given that B has already occurred: P(A|B) = P(A and B) / P(B). Sampling without replacement means the probabilities change with each selection, which must be reflected in the second set of branches in a tree diagram.",
          groups: [
            {
              subTitle: "Tree diagrams — common exam questions",
              bullets: [
                "**With replacement**: A bag has 3 red and 5 blue balls. One ball is selected, noted, and replaced. Second ball selected. P(both red) = (3/8) × (3/8) = 9/64. Probabilities on second branches are same as first because ball is replaced.",
                "**Without replacement**: Same bag (3 red, 5 blue), no replacement. P(both red) = (3/8) × (2/7) = 6/56 = 3/28. After first red ball is removed, only 2 red and 5 blue remain — 7 total.",
                "**At least one**: P(at least one red) = 1 - P(no red) = 1 - (5/8)(4/7) = 1 - 20/56 = 36/56 = 9/14. The complement method is usually faster than adding all cases where at least one red occurs.",
                "**Venn diagrams and sets**: P(A ∪ B) = P(A) + P(B) - P(A ∩ B). If P(A) = 0.4, P(B) = 0.3, P(A ∩ B) = 0.1, then P(A ∪ B) = 0.4 + 0.3 - 0.1 = 0.6."
              ]
            }
          ],
          recap: [
            "A bag contains 4 green and 6 yellow counters. Two are drawn without replacement. Draw a tree diagram and calculate the probability that both counters are the same colour. [5]",
            "P(A) = 0.35, P(B) = 0.5, and A and B are mutually exclusive. Find P(A or B). [1]",
            "In a class of 30, 18 study French, 12 study Spanish, and 5 study both. A student is chosen at random. Find the probability they study neither language. [3]",
            "Explain the difference between independent events and mutually exclusive events, giving an example of each. [4]"
          ]
        }
      ]
    }
  ]
};
