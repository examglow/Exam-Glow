import type { SubjectNotes } from "./types";

export const MATHEMATICS: SubjectNotes = {
 "id": "mathematics",
 "name": "Mathematics",
 "code": "0580",
 "color": "bg-blue-600",
 "chapters": [
 {
 "number": 1,
 "title": "Number",
 "intro": " **What is this topic all about?** Number is the universal foundation of mathematics. This chapter covers the classification of numbers, operations with integers and fractions, prime factorisation, powers and standard form, ratio and proportion, percentage calculations, bounds and estimation, and compound units including speed, density, and currency exchange.",
 "subheadings": [
 {
 "title": "Types of Numbers, Primes and Factorisation",
 "body": "Numbers are classified into distinct sets, each with unique mathematical properties and operations.\n\n```diagram\n┌───────────────────────────────────────────────────────────┐\n│ REAL NUMBERS (ℝ) │\n│ ┌─────────────────────────────────────────────────────┐ │\n│ │ RATIONAL NUMBERS (ℚ) │ │\n│ │ ┌───────────────────────────────────────────────┐ │ │ IRRATIONALS\n│ │ │ INTEGERS (ℤ) │ │ │ (π, √2, e)\n│ │ │ ┌─────────────────────────────────────────┐ │ │ │\n│ │ │ │ NATURAL NUMBERS (ℕ) │ │ │ │\n│ │ │ │ {1, 2, 3, 4, ...} │ │ │ │\n│ │ │ └─────────────────────────────────────────┘ │ │ │\n│ │ │ {... -3, -2, -1, 0} │ │ │\n│ │ └───────────────────────────────────────────────┘ │ │\n│ │ Fractions (3/4, -5/8) │ │\n│ └─────────────────────────────────────────────────────┘ │\n└───────────────────────────────────────────────────────────┘\n```",
 "groups": [
 {
 "subTitle": "Number Classifications",
 "bullets": [
 "**Natural Numbers ($\\mathbb{N}$)**: Counting numbers $\\{1, 2, 3, 4, \\dots\\}$.\\mathbb{n}$) works when you look at it in real life.",
 "**Integers ($\\mathbb{Z}$)**: Whole positive and negative numbers including zero $\\{\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots\\}$.\\mathbb{z}$) works when you look at it in real life.",
 "**Rational Numbers ($\\mathbb{Q}$)**: Numbers expressible as a fraction $\\frac{a}{b}$ where $a, b \\in \\mathbb{Z}$ and $b \\ne 0$ (includes terminating and recurring decimals).\\mathbb{q}$) works when you look at it in real life.",
 "**Irrational Numbers**: Numbers that cannot be written as a simple fraction, with non-terminating, non-repeating decimal expansions (e.g. $\\sqrt{2}, \\sqrt{3}, \\pi, e$).",
 "**Real Numbers ($\\mathbb{R}$)**: The set containing all rational and irrational numbers.\\mathbb{r}$) works when you look at it in real life."
 ]
 },
 {
 "subTitle": "Prime Numbers, HCF and LCM",
 "bullets": [
 "**Prime Number**: An integer greater than 1 having exactly two distinct factors: 1 and itself (2 is the only even prime).",
 "**Prime Factorisation**: Expressing any composite integer uniquely as a product of prime powers (e.g. $360 = 2^3 \\times 3^2 \\times 5$).",
 "**Highest Common Factor (HCF)**: Product of the lowest power of all common prime factors.",
 "**Lowest Common Multiple (LCM)**: Product of the highest power of every prime factor appearing in either number."
 ]
 },
 {
 "subTitle": " \"Types of Numbers, Primes and Factorisation\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Types of Numbers, Primes and Factorisation\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Indices, Standard Form and Fractions",
 "body": "Mastery of index laws, scientific notation, and fraction arithmetic is essential for algebraic and scientific calculations. ",
 "groups": [
 {
 "subTitle": "Laws of Indices",
 "bullets": [
 "**Multiplication Rule**: $a^m \\times a^n = a^{m+n}$",
 "**Division Rule**: $\\frac{a^m}{a^n} = a^{m-n}$",
 "**Power of a Power**: $(a^m)^n = a^{mn}$",
 "**Zero Index**: $a^0 = 1$ ($a \\ne 0$)",
 "**Negative Indices**: $a^{-n} = \\frac{1}{a^n}$ and $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$",
 "**Fractional Indices**: $a^{\\frac{1}{n}} = \\sqrt[n]{a}$ and $a^{\\frac{m}{n}} = (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}$"
 ]
 },
 {
 "subTitle": "Standard Form (Scientific Notation)",
 "bullets": [
 "**Format**: $A \\times 10^n$ where $1 \\le A < 10$ and $n \\in \\mathbb{Z}$.",
 "**Large Numbers**: $450,000 = 4.5 \\times 10^5$; **Small Numbers**: $0.00038 = 3.8 \\times 10^{-4}$.",
 "**Operations**: $(2 \\times 10^4) \\times (3 \\times 10^5) = 6 \\times 10^9$; $(8 \\times 10^7) \\div (4 \\times 10^3) = 2 \\times 10^4$."
 ]
 },
 {
 "subTitle": " \"Indices, Standard Form and Fractions\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Indices, Standard Form and Fractions\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Percentages, Financial Maths and Proportion",
 "body": "Commercial mathematics applies ratios, percentages, compound interest, and proportions to solve practical financial and physical problems. ",
 "groups": [
 {
 "subTitle": "Percentage Calculations",
 "bullets": [
 "**Percentage Change**: $\\text{Percentage Change} = \\frac{\\text{Change}}{\\text{Original}} \\times 100\\%$.",
 "**Reverse (Original Value) Percentage**: $\\text{Original} = \\frac{\\text{New Value}}{\\text{Multiplier}}$ (e.g. after a $20\\%$ increase, $\\text{Multiplier} = 1.20$).",
 "**Simple Interest**: $I = \\frac{P \\times r \\times t}{100}$ where $P$ is principal, $r$ is annual rate, and $t$ is time in years.",
 "**Compound Interest**: $A = P\\left(1 + \\frac{r}{100}\\right)^n$ where $A$ is final amount and $n$ is number of compounding periods."
 ]
 },
 {
 "subTitle": "Ratio and Proportion",
 "bullets": [
 "**Direct Proportion ($y \\propto x$)**: $y = kx$ where $k = \\frac{y}{x}$ is the constant of proportionality.\\propto x$) works when you look at it in real life.",
 "**Direct Proportion to Powers ($y \\propto x^2$, $y \\propto x^3$)**: $y = kx^2$ or $y = kx^3$.\\propto x^2$, $y \\propto x^3$) works when you look at it in real life.",
 "**Inverse Proportion ($y \\propto \\frac{1}{x}$)**: $y = \\frac{k}{x} \\implies xy = k$.\\propto \\frac{1}{x}$) works when you look at it in real life."
 ]
 },
 {
 "subTitle": " \"Percentages, Financial Maths and Proportion\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Percentages, Financial Maths and Proportion\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Rounding, Bounds and Compound Measures",
 "body": "Calculations with rounded physical measurements must account for limits of accuracy using upper and lower bounds. ",
 "groups": [
 {
 "subTitle": "Upper and Lower Bounds",
 "bullets": [
 "**Measurement Rule**: If a value is rounded to the nearest unit $u$, the maximum error is $\\pm \\frac{u}{2}$.",
 "**Bounds for Operations**: For $x + y$, $\\text{UB} = \\text{UB}_x + \\text{UB}_y$; For $x - y$, $\\text{LB} = \\text{LB}_x - \\text{UB}_y$; For $\\frac{x}{y}$, $\\text{UB} = \\frac{\\text{UB}_x}{\\text{LB}_y}$ and $\\text{LB} = \\frac{\\text{LB}_x}{\\text{UB}_y}$."
 ]
 },
 {
 "subTitle": "Compound Units",
 "bullets": [
 "**Speed**: $\\text{Speed} = \\frac{\\text{Distance}}{\\text{Time}}$; Converting $\\text{km/h} \\to \\text{m/s}$: divide by $3.6$; $\\text{m/s} \\to \\text{km/h}$: multiply by $3.6$.",
 "**Density**: $\\text{Density} = \\frac{\\text{Mass}}{\\text{Volume}}$ (units: $\\text{g/cm}^3$ or $\\text{kg/m}^3$).",
 "**Pressure**: $\\text{Pressure} = \\frac{\\text{Force}}{\\text{Area}}$ (units: $\\text{N/m}^2 = \\text{Pa}$ or $\\text{N/cm}^2$)."
 ]
 },
 {
 "subTitle": " \"Rounding, Bounds and Compound Measures\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Rounding, Bounds and Compound Measures\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 1 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 1: \"Number\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 },
 {
 "number": 2,
 "title": "Algebra and Graphs",
 "intro": " **What is this topic all about?** Algebra provides the generalized symbolic language of mathematics. This chapter covers algebraic manipulation, factorisation, linear and quadratic equations, inequalities, sequences, function notation, and the construction and interpretation of diverse graphs including linear, quadratic, cubic, exponential, and reciprocal functions.",
 "subheadings": [
 {
 "title": "Algebraic Manipulation and Factorisation",
 "body": "Manipulating expressions into simplified or factorised forms is the core mechanism for solving complex equations. ",
 "groups": [
 {
 "subTitle": "Expanding and Simplifying",
 "bullets": [
 "**Single Brackets**: $a(b + c) = ab + ac$; **Double Brackets (FOIL)**: $(a + b)(c + d) = ac + ad + bc + bd$.",
 "**Perfect Squares**: $(a + b)^2 = a^2 + 2ab + b^2$ and $(a - b)^2 = a^2 - 2ab + b^2$.",
 "**Difference of Two Squares**: $(a + b)(a - b) = a^2 - b^2$."
 ]
 },
 {
 "subTitle": "Factorisation Techniques",
 "bullets": [
 "**Common Factor**: $6x^2y - 9xy^2 = 3xy(2x - 3y)$.",
 "**Grouping in Pairs**: $ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$.",
 "**Quadratic Factorisation ($x^2 + bx + c$)**: Find two numbers with product $c$ and sum $b$ (e.g. $x^2 - 5x + 6 = (x - 2)(x - 3)$).",
 "**Quadratic with Leading Coefficient ($ax^2 + bx + c$)**: Split the middle term using factors of $ac$ that add to $b$ (e.g. $2x^2 + 7x + 3 = 2x^2 + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$)."
 ]
 },
 {
 "subTitle": " \"Algebraic Manipulation and Factorisation\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Algebraic Manipulation and Factorisation\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Solving Equations and Inequalities",
 "body": "Methods for finding exact solutions to linear, quadratic, and simultaneous equations, and representing inequality solution sets.\n\n![Quadratic Function Parabola Anatomy: Roots, Line of Symmetry, and Vertex](/diagrams/quadratic-graph.svg) ",
 "groups": [
 {
 "subTitle": "Quadratic Equations",
 "bullets": [
 "**The Quadratic Formula**: For $ax^2 + bx + c = 0$, $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.",
 "**Completing the Square**: $x^2 + bx + c = \\left(x + \\frac{b}{2}\\right)^2 - \\left(\\frac{b}{2}\\right)^2 + c$; minimum point coordinates: $\\left(-\\frac{b}{2}, c - \\frac{b^2}{4}\\right)$."
 ]
 },
 {
 "subTitle": "Simultaneous Equations",
 "bullets": [
 "**Elimination Method**: Scale equations so coefficients of one variable match, then add or subtract to eliminate.",
 "**Substitution Method**: Rearrange one equation to express $y$ in terms of $x$, then substitute into the other equation (essential when solving one linear and one quadratic equation)."
 ]
 },
 {
 "subTitle": "Inequalities",
 "bullets": [
 "**Rules**: Reversing inequality direction when multiplying or dividing by a negative number (e.g. $-2x < 6 \\implies x > -3$).",
 "**Graphical Regions**: Solid line for $\\le, \\ge$; dashed line for $<, >$; shade the required (or unrequired) region by testing a test point like $(0,0)$."
 ]
 },
 {
 "subTitle": " \"Solving Equations and Inequalities\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Solving Equations and Inequalities\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Sequences and $n$th Term Rules",
 "body": "Identifying numeric patterns and deriving algebraic formulas for the general $n$th term. ",
 "groups": [
 {
 "bullets": [
 "**Linear (Arithmetic) Sequence**: Constant first difference $d$; $n\\text{th term} = a + (n - 1)d = dn + (a - d)$.",
 "**Quadratic Sequence**: Constant second difference $2a$; $n\\text{th term} = an^2 + bn + c$ (first difference $= 3a + b$, first term $= a + b + c$).",
 "**Geometric Sequence**: Constant ratio $r$; $n\\text{th term} = a \\times r^{n-1}$."
 ]
 },
 {
 "subTitle": " \"Sequences and $n$th Term Rules\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Sequences and $n$th Term Rules\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Functions and Graphs",
 "body": "Working with function notation, composite functions, inverse functions, and sketching curves. ",
 "groups": [
 {
 "subTitle": "Function Operations",
 "bullets": [
 "**Function Notation**: $f(x) = 3x - 5$; $f(4) = 3(4) - 5 = 7$.",
 "**Composite Functions**: $fg(x) = f(g(x))$ — apply function $g$ first, then input result into $f$.",
 "**Inverse Functions**: To find $f^{-1}(x)$, let $y = f(x)$, rearrange to make $x$ the subject, then swap $x$ and $y$."
 ]
 },
 {
 "subTitle": "Graphs of Non-Linear Functions",
 "bullets": [
 "**Quadratic ($y = ax^2 + bx + c$)**: Parabola shape; turning point on line of symmetry $x = -\\frac{b}{2a}$.",
 "**Cubic ($y = ax^3 + \\dots$)**: S-shaped curve with up to two turning points.\\dots$) works when you look at it in real life.",
 "**Reciprocal ($y = \\frac{k}{x}$ or $y = \\frac{k}{x^2}$)**: Hyperbolic curve with vertical asymptote $x = 0$ and horizontal asymptote $y = 0$.\\frac{k}{x}$ or $y = \\frac{k}{x^2}$) works when you look at it in real life.",
 "**Exponential ($y = a^x$)**: Curve passing through $(0,1)$ with horizontal asymptote along the x-axis."
 ]
 },
 {
 "subTitle": " \"Functions and Graphs\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Functions and Graphs\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 2 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 2: \"Algebra and Graphs\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 },
 {
 "number": 3,
 "title": "Coordinate Geometry",
 "intro": " **What is this topic all about?** Coordinate geometry connects algebra with geometric figures on the 2D Cartesian plane. Key concepts include calculating line gradients, midpoints, lengths of segments, determining straight line equations ($y = mx + c$), and applying the properties of parallel and perpendicular lines.",
 "subheadings": [
 {
 "title": "Gradient, Midpoint and Distance Formulas",
 "body": "Fundamental algebraic formulas for analyzing line segments connecting two points $(x_1, y_1)$ and $(x_2, y_2)$. ",
 "groups": [
 {
 "bullets": [
 "**Gradient ($m$)**: Measure of steepness, $m = \\frac{\\text{Rise}}{\\text{Run}} = \\frac{y_2 - y_1}{x_2 - x_1}$. Positive gradient slopes upward; negative gradient slopes downward; horizontal line $m = 0$; vertical line $m$ is undefined.",
 "**Midpoint ($M$)**: Average of the coordinates, $M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.",
 "**Length of a Line Segment ($d$)**: Derived from Pythagoras' theorem, $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$."
 ]
 },
 {
 "subTitle": " \"Gradient, Midpoint and Distance Formulas\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Gradient, Midpoint and Distance Formulas\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Equations of Straight Lines",
 "body": "Representing straight lines in standard algebraic forms and finding line equations from given geometric conditions. ",
 "groups": [
 {
 "subTitle": "Standard Line Forms",
 "bullets": [
 "**Slope-Intercept Form**: $y = mx + c$ where $m$ is the gradient and $c$ is the y-intercept $(0, c)$.",
 "**Point-Slope Form**: $y - y_1 = m(x - x_1)$ where the line passes through $(x_1, y_1)$ with gradient $m$.",
 "**General Linear Form**: $ax + by + c = 0$ where $a, b, c$ are integers."
 ]
 },
 {
 "subTitle": "Parallel and Perpendicular Lines",
 "bullets": [
 "**Parallel Lines**: Have identical gradients, $m_1 = m_2$.",
 "**Perpendicular Lines**: The product of their gradients is $-1$, $m_1 \\times m_2 = -1 \\implies m_2 = -\\frac{1}{m_1}$ (negative reciprocal).",
 "**Perpendicular Bisector**: A line that is perpendicular to a segment ($m_{\\perp} = -\\frac{1}{m}$) and passes through its midpoint $M$."
 ]
 },
 {
 "subTitle": " \"Equations of Straight Lines\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Equations of Straight Lines\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 3 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 3: \"Coordinate Geometry\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 },
 {
 "number": 4,
 "title": "Geometry",
 "intro": " **What is this topic all about?** Geometry studies the properties of angles, lines, polygons, circles, and 2D/3D shapes. This chapter covers angle rules for intersecting and parallel lines, polygon angle formulas, circle theorems, criteria for congruence and similarity, scale factors, and 3-figure navigation bearings.",
 "subheadings": [
 {
 "title": "Angle Rules and Polygon Properties",
 "body": "Deductive angle relationships for intersecting lines, parallel lines cut by transversals, and regular polygons. ",
 "groups": [
 {
 "subTitle": "Angle Relationships",
 "bullets": [
 "**Angles at a Point**: Sum to $360^\\circ$; **Angles on a Straight Line**: Sum to $180^\\circ$.",
 "**Vertically Opposite Angles**: Are equal.",
 "**Parallel Line Rules**: **Alternate angles** are equal (Z-angles); **Corresponding angles** are equal (F-angles); **Co-interior (allied) angles** sum to $180^\\circ$ (C-angles)."
 ]
 },
 {
 "subTitle": "Polygons",
 "bullets": [
 "**Sum of Interior Angles of an $n$-gon**: $S_{\\text{int}} = (n - 2) \\times 180^\\circ$.",
 "**Each Interior Angle (Regular $n$-gon)**: $\\text{Interior} = \\frac{(n - 2) \\times 180^\\circ}{n}$.",
 "**Sum of Exterior Angles**: Always $360^\\circ$ for any convex polygon.",
 "**Each Exterior Angle (Regular $n$-gon)**: $\\text{Exterior} = \\frac{360^\\circ}{n}$, and $\\text{Interior} + \\text{Exterior} = 180^\\circ$."
 ]
 },
 {
 "subTitle": " \"Angle Rules and Polygon Properties\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Angle Rules and Polygon Properties\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Circle Theorems",
 "body": "Geometric theorems governing angle and tangent relationships within circles. ",
 "groups": [
 {
 "bullets": [
 "**Angle in a Semicircle**: The angle subtended at the circumference by a diameter is always $90^\\circ$.",
 "**Angle at Centre**: The angle subtended by an arc at the centre is twice the angle subtended at the circumference ($2\\theta$ vs $\\theta$).",
 "**Angles in the Same Segment**: Angles subtended by the same arc at the circumference are equal.",
 "**Cyclic Quadrilateral**: Opposite angles of a cyclic quadrilateral (all four vertices on circle) sum to $180^\\circ$ ($A + C = 180^\\circ$, $B + D = 180^\\circ$).",
 "**Radius-Tangent Theorem**: A tangent to a circle is perpendicular to the radius at the point of contact ($90^\\circ$).",
 "**Tangents from External Point**: Two tangents drawn to a circle from the same external point are equal in length.",
 "**Alternate Segment Theorem**: The angle between a tangent and a chord equals the angle subtended by that chord in the alternate segment."
 ]
 },
 {
 "subTitle": " \"Circle Theorems\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Circle Theorems\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Congruence, Similarity and Bearings",
 "body": "Geometric proofs of congruence, scale factors for area and volume in similar shapes, and directional bearings. ",
 "groups": [
 {
 "subTitle": "Congruence and Similarity",
 "bullets": [
 "**Congruence Criteria**: SSS (3 sides), SAS (2 sides and included angle), ASA (2 angles and 1 side), RHS (Right-angle, Hypotenuse, Side).",
 "**Similarity Scale Factors**: If length scale factor is $k$, then **Area Scale Factor** $= k^2$, and **Volume Scale Factor** $= k^3$."
 ]
 },
 {
 "subTitle": "Bearings",
 "bullets": [
 "**Rules**: Measured from **North**, in a **clockwise** direction, written with **3 digits** (e.g. $045^\\circ$, $210^\\circ$).",
 "**Back Bearings**: Differ by $180^\\circ$ (if bearing $A \\to B$ is $\\theta < 180^\\circ$, then bearing $B \\to A$ is $\\theta + 180^\\circ$)."
 ]
 },
 {
 "subTitle": " \"Congruence, Similarity and Bearings\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Congruence, Similarity and Bearings\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 4 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 4: \"Geometry\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 },
 {
 "number": 5,
 "title": "Mensuration",
 "intro": " **What is this topic all about?** Mensuration deals with the measurement of perimeters, areas, surface areas, and volumes of 2D and 3D shapes. This chapter provides formulas and techniques for compound plane figures, circles, sectors, prisms, cylinders, pyramids, cones, and spheres.",
 "subheadings": [
 {
 "title": "Perimeter and Area of 2D Shapes and Sectors",
 "body": "Formulas for standard rectilinear figures, circles, circular arcs, and sectors. ",
 "groups": [
 {
 "subTitle": "Plane Figures",
 "bullets": [
 "**Triangle**: $\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}ab\\sin C$.",
 "**Parallelogram**: $\\text{Area} = \\text{base} \\times \\text{height}$.",
 "**Trapezium**: $\\text{Area} = \\frac{1}{2}(a + b)h$ where $a$ and $b$ are parallel sides and $h$ is perpendicular height."
 ]
 },
 {
 "subTitle": "Circles and Sectors (Angle $\\theta$ in degrees)",
 "bullets": [
 "**Circle Circumference & Area**: $C = 2\\pi r = \\pi d$; $\\text{Area} = \\pi r^2$.",
 "**Arc Length**: $L = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$.",
 "**Sector Area**: $A = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$.",
 "**Perimeter of a Sector**: $\\text{Perimeter} = \\text{Arc Length} + 2r = \\frac{\\theta}{360^\\circ}(2\\pi r) + 2r$."
 ]
 },
 {
 "subTitle": " \"Perimeter and Area of 2D Shapes and Sectors\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Perimeter and Area of 2D Shapes and Sectors\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Surface Area and Volume of 3D Solids",
 "body": "Formulas for calculating the total/curved surface areas and internal capacities of three-dimensional geometric solids. ",
 "groups": [
 {
 "bullets": [
 "**Prism**: $\\text{Volume} = \\text{Cross-sectional Area} \\times \\text{length}$.",
 "**Cylinder**: $\\text{Volume} = \\pi r^2 h$; $\\text{Curved Surface Area} = 2\\pi rh$; $\\text{Total Surface Area} = 2\\pi r^2 + 2\\pi rh$.",
 "**Pyramid**: $\\text{Volume} = \\frac{1}{3} \\times \\text{Base Area} \\times h$.",
 "**Cone**: $\\text{Volume} = \\frac{1}{3}\\pi r^2 h$; $\\text{Curved Surface Area} = \\pi r l$ where slant height $l = \\sqrt{r^2 + h^2}$; $\\text{Total Surface Area} = \\pi r^2 + \\pi rl$.",
 "**Sphere**: $\\text{Volume} = \\frac{4}{3}\\pi r^3$; $\\text{Surface Area} = 4\\pi r^2$.",
 "**Hemisphere**: $\\text{Volume} = \\frac{2}{3}\\pi r^3$; $\\text{Curved SA} = 2\\pi r^2$; $\\text{Total Solid SA} = 3\\pi r^2$."
 ]
 },
 {
 "subTitle": " \"Surface Area and Volume of 3D Solids\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Surface Area and Volume of 3D Solids\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 5 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 5: \"Mensuration\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 },
 {
 "number": 6,
 "title": "Trigonometry",
 "intro": " **What is this topic all about?** Trigonometry analyzes the relationships between side lengths and angles of triangles. This chapter covers Pythagoras' theorem in 2D and 3D, right-angled trigonometric ratios (SOH CAH TOA), the Sine and Cosine rules for general triangles, the trigonometric triangle area formula, exact values, angles of elevation/depression, and 3D trigonometry.",
 "subheadings": [
 {
 "title": "Pythagoras' Theorem and Right-Angled Trigonometry",
 "body": "Calculating unknown side lengths and angles in right-angled triangles using geometric and trigonometric ratios. ",
 "groups": [
 {
 "subTitle": "Pythagoras and SOH CAH TOA",
 "bullets": [
 "**Pythagoras' Theorem**: $a^2 + b^2 = c^2$ where $c$ is the hypotenuse.",
 "**Sine Ratio**: $\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$.",
 "**Cosine Ratio**: $\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$.",
 "**Tangent Ratio**: $\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sin \\theta}{\\cos \\theta}$."
 ]
 },
 {
 "subTitle": "Exact Trigonometric Values",
 "bullets": [
 "**$30^\\circ$**: $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$.\\circ$ works when you look at it in real life.",
 "**$45^\\circ$**: $\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$, $\\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\tan 45^\\circ = 1$.\\circ$ works when you look at it in real life.",
 "**$60^\\circ$**: $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, $\\tan 60^\\circ = \\sqrt{3}$.\\circ$ works when you look at it in real life."
 ]
 },
 {
 "subTitle": " \"Pythagoras' Theorem and Right-Angled Trigonometry\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Pythagoras' Theorem and Right-Angled Trigonometry\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Non-Right-Angled Trigonometry and 3D Problems",
 "body": "Applying the Sine Rule, Cosine Rule, and area formulas to solve arbitrary triangles and 3D spatial configurations. ",
 "groups": [
 {
 "subTitle": "General Triangle Rules",
 "bullets": [
 "**The Sine Rule (Finding Sides)**: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$.",
 "**The Sine Rule (Finding Angles)**: $\\frac{\\sin A}{a} = \\frac{\\sin B}{b} = \\frac{\\sin C}{c}$ (check for ambiguous obtuse case where $\\sin(180^\\circ - \\theta) = \\sin \\theta$).",
 "**The Cosine Rule (Finding Sides)**: $a^2 = b^2 + c^2 - 2bc \\cos A$.",
 "**The Cosine Rule (Finding Angles)**: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.",
 "**Area of Any Triangle**: $\\text{Area} = \\frac{1}{2}ab \\sin C$."
 ]
 },
 {
 "subTitle": "3D Trigonometry & Angles of Elevation",
 "bullets": [
 "**Angle of Elevation**: The angle measured upwards from the horizontal eye line to an object.",
 "**Angle of Depression**: The angle measured downwards from the horizontal line to an object.",
 "**3D Pythagoras**: Longest diagonal of a cuboid $d = \\sqrt{l^2 + w^2 + h^2}$."
 ]
 },
 {
 "subTitle": " \"Non-Right-Angled Trigonometry and 3D Problems\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Non-Right-Angled Trigonometry and 3D Problems\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 6 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 6: \"Trigonometry\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 },
 {
 "number": 7,
 "title": "Transformations and Vectors",
 "intro": " **What is this topic all about?** Transformations describe the movement and resizing of geometric shapes on the Cartesian plane. Vectors represent quantities possessing both magnitude and direction, applied in geometry and physics.",
 "subheadings": [
 {
 "title": "Geometric Transformations",
 "body": "The four primary transformations: translation, reflection, rotation, and enlargement. ",
 "groups": [
 {
 "bullets": [
 "**Translation**: Sliding a shape without rotating or resizing; fully described by a column vector $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ ($x$: horizontal displacement, $y$: vertical displacement).",
 "**Reflection**: Flipping a shape across a mirror line; fully described by the **equation of the mirror line** (e.g. $y = x$, $y = -x$, $x = 2$, $y = 0$).",
 "**Rotation**: Turning a shape around a fixed pivot; fully described by: (1) **Centre of rotation $(a, b)$**, (2) **Angle of rotation**, (3) **Direction (clockwise or anticlockwise)**.",
 "**Enlargement**: Resizing a shape proportionally; fully described by: (1) **Centre of enlargement $(a, b)$**, (2) **Scale factor $k$** (if $0 < k < 1$, shape shrinks; if $k < 0$, shape inverts on the opposite side of centre)."
 ]
 },
 {
 "subTitle": " \"Geometric Transformations\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Geometric Transformations\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Vector Algebra and Geometric Proofs",
 "body": "Column vector arithmetic, calculating magnitudes, and writing geometric vector paths to prove parallelism and collinearity. ",
 "groups": [
 {
 "subTitle": "Column Vectors and Magnitude",
 "bullets": [
 "**Notation**: $\\mathbf{a} = \\vec{AB} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$.",
 "**Vector Magnitude (Length)**: $|\\mathbf{a}| = \\sqrt{x^2 + y^2}$.",
 "**Vector Operations**: $\\begin{pmatrix} x_1 \\\\ y_1 \\end{pmatrix} + \\begin{pmatrix} x_2 \\\\ y_2 \\end{pmatrix} = \\begin{pmatrix} x_1 + x_2 \\\\ y_1 + y_2 \\end{pmatrix}$; $k\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} kx \\\\ ky \\end{pmatrix}$."
 ]
 },
 {
 "subTitle": "Vector Geometry Proofs",
 "bullets": [
 "**Position Vectors**: $\\vec{AB} = \\vec{OB} - \\vec{OA} = \\mathbf{b} - \\mathbf{a}$.",
 "**Parallel Vectors**: Two vectors are parallel if one is a scalar multiple of the other: $\\vec{AB} = k\\vec{CD}$.",
 "**Collinear Points**: Points $A, B, C$ lie on a straight line if $\\vec{AB} = k\\vec{BC}$ and they share the common point $B$."
 ]
 },
 {
 "subTitle": " \"Vector Algebra and Geometric Proofs\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Vector Algebra and Geometric Proofs\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 7 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 7: \"Transformations and Vectors\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 },
 {
 "number": 8,
 "title": "Probability",
 "intro": " **What is this topic all about?** Probability measures the likelihood of events occurring on a scale from 0 (impossible) to 1 (certain). This chapter covers theoretical and experimental probability, sample space diagrams, Venn diagrams, two-way tables, and probability tree diagrams for independent and conditional events.",
 "subheadings": [
 {
 "title": "Basic Probability, Venn Diagrams and Sample Spaces",
 "body": "Calculating theoretical probabilities, relative frequencies, and analyzing combined events using set theory. ",
 "groups": [
 {
 "subTitle": "Probability Fundamentals",
 "bullets": [
 "**Formula**: $P(A) = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}$.",
 "**Complement Rule**: $P(A') = 1 - P(A)$ (probability of $A$ not happening).",
 "**Expected Frequency**: $\\text{Expected Number} = P(A) \\times \\text{Number of trials}$."
 ]
 },
 {
 "subTitle": "Venn Diagrams & Set Notation",
 "bullets": [
 "**Union ($A \\cup B$)**: Elements in set $A$ OR set $B$ OR both; $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\\cup b$) works when you look at it in real life.",
 "**Intersection ($A \\cap B$)**: Elements in BOTH set $A$ AND set $B$.\\cap b$) works when you look at it in real life.",
 "**Mutually Exclusive Events**: Events that cannot occur simultaneously; $P(A \\cap B) = 0 \\implies P(A \\cup B) = P(A) + P(B)$."
 ]
 },
 {
 "subTitle": " \"Basic Probability, Venn Diagrams and Sample Spaces\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Basic Probability, Venn Diagrams and Sample Spaces\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Tree Diagrams and Combined Events",
 "body": "Using probability tree diagrams to calculate probabilities for sequential multi-stage experiments. ",
 "groups": [
 {
 "bullets": [
 "**Multiplication Rule (Along Branches)**: Multiply probabilities along the path: $P(A \\text{ and } B) = P(A) \\times P(B|A)$.",
 "**Addition Rule (Between Branches)**: Add probabilities of mutually exclusive outcome paths: $P(\\text{Outcome 1 or Outcome 2}) = P(\\text{Path 1}) + P(\\text{Path 2})$.",
 "**Independent Events**: Outcome of the first event does not affect the second ($P(B|A) = P(B)$); probabilities remain constant.",
 "**Dependent Events (Without Replacement)**: Outcome of the first event changes the total pool and remaining favorable count for the second event."
 ]
 },
 {
 "subTitle": " \"Tree Diagrams and Combined Events\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Tree Diagrams and Combined Events\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 8 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 8: \"Probability\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 },
 {
 "number": 9,
 "title": "Statistics",
 "intro": " **What is this topic all about?** Statistics involves the collection, presentation, analysis, and interpretation of quantitative data. This chapter covers measures of central tendency (mean, median, mode), measures of dispersion (range, interquartile range), histograms with unequal class widths, cumulative frequency curves, box plots, and scatter diagrams.",
 "subheadings": [
 {
 "title": "Averages and Measures of Spread",
 "body": "Calculating statistical averages and dispersions for discrete raw data and grouped frequency distributions. ",
 "groups": [
 {
 "subTitle": "Averages",
 "bullets": [
 "**Mean ($\\bar{x}$)**: Sum of values divided by total count, $\\bar{x} = \\frac{\\sum x}{n}$; For frequency tables, $\\bar{x} = \\frac{\\sum fx}{\\sum f}$ (use mid-interval values for grouped data).\\bar{x}$) works when you look at it in real life.",
 "**Median**: The middle value when data is ordered ascendingly (position $\\frac{n+1}{2}$).",
 "**Mode / Modal Class**: The value or class interval with the highest frequency."
 ]
 },
 {
 "subTitle": "Measures of Dispersion",
 "bullets": [
 "**Range**: $\\text{Range} = \\text{Maximum Value} - \\text{Minimum Value}$.",
 "**Quartiles**: Lower quartile $Q_1$ ($25\\%$ position); Median $Q_2$ ($50\\%$ position); Upper quartile $Q_3$ ($75\\%$ position).",
 "**Interquartile Range (IQR)**: $\\text{IQR} = Q_3 - Q_1$ (measure of spread unaffected by extreme outliers)."
 ]
 },
 {
 "subTitle": " \"Averages and Measures of Spread\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Averages and Measures of Spread\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": "Statistical Diagrams: Histograms, Cumulative Frequency and Box Plots",
 "body": "Constructing and interpreting graphical representations of continuous data distributions. ",
 "groups": [
 {
 "subTitle": "Histograms with Unequal Class Widths",
 "bullets": [
 "**Key Principle**: In a histogram, **Area = Frequency**.",
 "**Frequency Density Formula**: $\\text{Frequency Density} = \\frac{\\text{Frequency}}{\\text{Class Width}}$.",
 "**Plotting**: Class intervals on x-axis; Frequency Density on y-axis."
 ]
 },
 {
 "subTitle": "Cumulative Frequency Curves and Box Plots",
 "bullets": [
 "**Cumulative Frequency**: Running total of frequencies, plotted against the **upper class boundary** of each interval.",
 "**Reading Estimates**: Median at $\\frac{n}{2}$; $Q_1$ at $\\frac{n}{4}$; $Q_3$ at $\\frac{3n}{4}$.",
 "**Box-and-Whisker Plots**: Summarizes 5 key statistics: Minimum, $Q_1$, Median ($Q_2$), $Q_3$, Maximum."
 ]
 },
 {
 "subTitle": "Scatter Diagrams & Correlation",
 "bullets": [
 "**Positive Correlation**: As $x$ increases, $y$ increases (points slope upwards).",
 "**Negative Correlation**: As $x$ increases, $y$ decreases (points slope downwards).",
 "**Zero / No Correlation**: No apparent linear relationship between variables.",
 "**Line of Best Fit**: A straight line drawn through the mean point $(\\bar{x}, \\bar{y})$ with roughly equal points scattered above and below."
 ]
 },
 {
 "subTitle": " \"Statistical Diagrams: Histograms, Cumulative Frequency and Box Plots\" — Super Simple Breakdown & Memory Tricks",
 "bullets": [
 "**The 1-Minute Rule**: If you had to explain \"Statistical Diagrams: Histograms, Cumulative Frequency and Box Plots\" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.",
 "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
 "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!"
 ]
 }
 ]
 },
 {
 "title": " Chapter 9 Exam Mastery: Top Mistakes & How to Get Full Marks",
 "body": "Here is your cheat-sheet for Chapter 9: \"Statistics\". These are the exact pitfalls examiners point out in Cambridge examiner reports year after year.",
 "groups": [
 {
 "subTitle": " The 3 Biggest Mistakes Students Make in This Chapter",
 "bullets": [
 "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
 "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
 "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result."
 ]
 },
 {
 "subTitle": " Golden Rules for Full Marks",
 "bullets": [
 "**Rule 1 — Use the exact keywords**: Cambridge examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
 "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
 "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps)."
 ]
 }
 ]
 }
 ]
 }
 ]
};
