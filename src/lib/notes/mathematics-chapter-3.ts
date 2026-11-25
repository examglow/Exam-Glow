import type { Chapter } from "./types";

const chapterThree: Chapter = {
  number: 3,
  title: "Coordinate Geometry & Graphs",
  intro: `One grid, unlimited information: coordinates pin every point, gradient measures every slope, and an equation describes every line.\n\nThis chapter builds from plotting points through straight-line equations to sketching and solving with curves — the toolkit that connects algebra to pictures.`,
  subheadings: [
    {
      title: "Coordinates",
      body: `The **Cartesian plane** is formed by two perpendicular number lines: the **x-axis** (horizontal) and the **y-axis** (vertical), crossing at the **origin (0, 0).\n\nEvery point is written as an ordered pair **(x, y)** — x first, y second. The axes divide the plane into four **quadrants**, labelled anticlockwise from the top-right, with sign combinations (+,+), (−,+), (−,−) and (+,−).`,
      groups: [
        {
          subTitle: "Plotting and reading points",
          bullets: [
            "**x-coordinate (abscissa):** how far to move left or right from the origin — positive goes right, negative goes left.",
            "**y-coordinate (ordinate):** how far to move up or down — positive goes up, negative goes down.",
            "**Ordered pair:** always written (x, y); swapping the values gives a completely different point.",
            "**Quadrant I:** both coordinates positive; Quadrant II: x negative, y positive; Quadrant III: both negative; Quadrant IV: x positive, y negative.",
            "**Points on the x-axis** have y = 0; points on the y-axis have x = 0.",
            "To read a coordinate from a graph, draw vertical and horizontal lines from the point to each axis and read the values where they cross.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Writing (y, x) instead of (x, y):** the horizontal value always comes first — a slip here loses every mark in the question.",
            "**Misreading the scale:** check the axis scale before reading any value; each grid square may represent 2 or 0.5, not 1.",
            "**Negative coordinates:** moving left from the origin means x is negative, not that x is 'missing'.",
          ],
        },
      ],
    },
    {
      title: "Gradient of a Line",
      body: `The **gradient** (or slope) measures the steepness of a line. It is defined as **m = rise ÷ run = (y₂ − y₁) / (x₂ − x₁)** between any two points on the line.\n\nA **positive gradient** slopes upward from left to right; a **negative gradient** slopes downward. A **horizontal line** has gradient zero; a **vertical line** has an undefined gradient.`,
      groups: [
        {
          subTitle: "Calculating and interpreting gradient",
          bullets: [
            "**Rise over run:** choose two clear grid-intersection points, count vertical rise (can be negative) and horizontal run (always read left to right).",
            "**Formula m = (y₂ − y₁)/(x₂ − x₁):** subtract the y-coordinates and divide by the difference in x-coordinates, keeping the same order for both.",
            "**Positive gradient:** line goes uphill from left to right — the larger the value, the steeper the climb.",
            "**Negative gradient:** line goes downhill from left to right — the more negative the value, the steeper the descent.",
            "**Zero gradient:** horizontal line, y is constant, the formula gives 0/run = 0.",
            "**Undefined gradient:** vertical line, x is constant, the formula gives rise/0 which is undefined.",
            "**Gradient is constant** along any straight line — it does not matter which two points you pick.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Reversing the subtraction order:** if you use (y₂ − y₁) on top, you must use (x₂ − x₁) on the bottom with the same point labelled '2' — mixing orders flips the sign.",
            "**Calling a vertical line 'gradient zero':** zero gradient means horizontal; a vertical line's gradient is undefined.",
            "**Reading rise and run from the wrong axis:** rise is the vertical change (y), run is the horizontal change (x).",
          ],
        },
      ],
    },
    {
      title: "Midpoint of a Line",
      body: `The **midpoint** of a segment is the point exactly halfway between its two endpoints. Its formula is **M = ((x₁ + x₂)/2, (y₁ + y₂)/2)** — the average of the x-coordinates and the average of the y-coordinates.\n\nThe midpoint is a **point**, so it must be written as a coordinate pair in brackets, not as a single number.`,
      groups: [
        {
          subTitle: "Using the midpoint formula",
          bullets: [
            "**Add, then halve:** add both x-values and divide by 2 for the midpoint's x; do the same with the y-values.",
            "**Works with negatives:** if one endpoint is (−3, 7) and the other is (5, 1), the midpoint is ((−3+5)/2, (7+1)/2) = (1, 4).",
            "**Reverse use:** if one endpoint and the midpoint are known, double the midpoint coordinate and subtract the known endpoint to find the missing one.",
            "**Midpoint lies on the segment:** it is never outside the two endpoints — a quick sense-check catches arithmetic errors.",
            "**Units match the grid:** if coordinates are in centimetres, the midpoint is also in centimetres.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Writing the midpoint as a single value:** a midpoint is a coordinate pair (x, y), never just one number.",
            "**Subtracting instead of adding:** the formula adds the two coordinates before halving; subtracting gives the wrong point entirely.",
            "**Dropping the brackets:** the answer must look like (1, 4), not 1, 4 or just 1.",
          ],
        },
      ],
    },
    {
      title: "Length of a Line",
      body: `The **distance** between two points (x₁, y₁) and (x₂, y₂) is found by applying **Pythagoras' theorem** to the right-angled triangle formed by the horizontal and vertical differences.\n\nThe formula is **d = √[(x₂ − x₁)² + (y₂ − y₁)²]**. Because each difference is squared, the sign of the difference does not matter.`,
      groups: [
        {
          subTitle: "Applying the distance formula",
          bullets: [
            "**Identify the two points:** label them clearly so you subtract in a consistent order.",
            "**Find the horizontal difference:** compute (x₂ − x₁) and square it — squaring removes any negative sign.",
            "**Find the vertical difference:** compute (y₂ − y₁) and square it.",
            "**Add and root:** add the two squared values and take the positive square root.",
            "**Exact vs decimal:** leave the answer as a surd (e.g. √50 = 5√2) if the question says 'exact'; give a decimal rounded to the stated degree of accuracy otherwise.",
            "**Sense-check:** the length must be greater than either the horizontal or the vertical difference alone.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Taking the square root of each term separately:** √(a² + b²) ≠ a + b — you must add first, then root.",
            "**Forgetting to square:** writing (x₂ − x₁) + (y₂ − y₁) under the root gives a meaningless result.",
            "**Giving a negative length:** distance is always positive; if your answer is negative, recheck the squaring step.",
          ],
        },
      ],
    },
    {
      title: "Equations of Straight Lines (y = mx + c)",
      body: `Every straight line (except vertical ones) has an equation of the form **y = mx + c**, where **m** is the **gradient** and **c** is the **y-intercept** (the y-value where the line crosses the y-axis).\n\nTo find the equation from two points: **find m first** using the gradient formula, then **substitute one point** into y = mx + c to find c.`,
      groups: [
        {
          subTitle: "Reading and forming equations",
          bullets: [
            "**Identify m and c directly:** in y = 3x − 5 the gradient is 3 and the y-intercept is −5; no calculation needed if the equation is already in this form.",
            "**Rearrange first:** for 2x + 4y = 8, isolate y to get y = −(1/2)x + 2; now m = −1/2 and c = 2.",
            "**Two-point method:** calculate m = (y₂ − y₁)/(x₂ − x₁), then write y = mx + c and substitute either known point for x and y, solve for c.",
            "**Point-gradient form:** y − y₁ = m(x − x₁) is an equivalent starting point; expand and simplify into y = mx + c.",
            "**Vertical lines** have the form x = k (e.g. x = 4); they cannot be written as y = mx + c because the gradient is undefined.",
            "**Horizontal lines** have the form y = k (e.g. y = −2); their gradient is 0 and there is no x term.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Confusing m and c:** in y = 7 − 4x the gradient is −4 and the intercept is 7, not the other way round.",
            "**Using the wrong point to find c:** once m is found, substitute x and y from one of the original points — do not use a made-up point.",
            "**Leaving the equation un-simplified:** the final answer should be in y = mx + c or an equivalent tidy form, not left as y − 3 = 2(x − 1).",
          ],
        },
      ],
    },
    {
      title: "Drawing Straight Line Graphs",
      body: `To draw a straight-line graph accurately, **construct a table of values**, plot the points, and draw a ruled line through them.\n\nAlways plot **at least three points** so that you can detect any arithmetic error — if one point is off the line, recalculate that value. Extend the line to the edges of the grid and **label it with its equation**.`,
      groups: [
        {
          subTitle: "Step-by-step method",
          bullets: [
            "**Choose x-values** spread across the grid, typically the smallest and largest x on the grid plus one in the middle.",
            "**Substitute into the equation:** calculate the y-value for each chosen x and record in a table.",
            "**Plot accurately:** use a sharp pencil and mark each point as a small cross; a dot can be hidden under the line.",
            "**Rule the line:** use a ruler, draw through all three points and extend to both edges of the grid.",
            "**Label the line:** write the equation beside or at one end of the line so the examiner can identify it.",
            "**Check with a third point:** if the third point does not lie on the line, one calculation is wrong — find and fix it before drawing.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Plotting only two points:** two points always define a line, so a calculation error goes undetected; a third point is the check.",
            "**Freehand curves for a straight line:** straight-line graphs must be drawn with a ruler — a wobbly line loses the accuracy mark.",
            "**Forgetting the label:** an unlabelled line cannot be identified if the question has multiple lines on the same grid.",
          ],
        },
      ],
    },
    {
      title: "Parallel Lines",
      body: `Two lines are **parallel** if and only if they have the **same gradient**. They never meet, no matter how far they are extended, and the only difference between their equations is the value of **c**.\n\nFor example, y = 3x + 1 and y = 3x − 4 are parallel because both have m = 3. To find a parallel line through a given point, keep m the same and use the point to calculate c.`,
      groups: [
        {
          subTitle: "Finding parallel lines",
          bullets: [
            "**Same gradient, different intercept:** any line with m = 3 is parallel to y = 3x + 1, whatever c is.",
            "**Method:** identify m from the given line, write y = mx + c, substitute the given point's coordinates for x and y, then solve for c.",
            "**Distinct lines:** if two lines have the same m and the same c, they are the same line, not parallel — parallel lines must be distinct.",
            "**Parallel horizontal lines:** y = 4 and y = −1 are parallel; both have m = 0.",
            "**Parallel vertical lines:** x = 2 and x = 7 are parallel; both are vertical with undefined gradient.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Changing m instead of c:** when asked for a parallel line through a new point, keep m unchanged and recalculate only c.",
            "**Confusing parallel with perpendicular:** parallel means equal gradients; perpendicular means gradients multiply to −1.",
            "**Saying lines are parallel because they 'look' the same distance apart:** always verify by comparing the m values algebraically.",
          ],
        },
      ],
    },
    {
      title: "Function Notation",
      body: `**f(x)** is read 'f of x' and means the output of function f when the input is x. Writing **f(3)** means substitute x = 3 into the rule and calculate the result.\n\nA **composite function** fg(x) means apply g first, then apply f to the result: fg(x) = f(g(x)). The **inverse function** f⁻¹(x) reverses the mapping — it undoes whatever f does.`,
      groups: [
        {
          subTitle: "Working with functions",
          bullets: [
            "**Evaluating f(a):** replace every x in the formula with a and simplify, e.g. if f(x) = 2x + 1 then f(5) = 2(5) + 1 = 11.",
            "**Composite fg(x):** work from right to left — find g(x) first, then substitute that result into f.",
            "**Composite gf(x):** apply f first, then g — note fg and gf are different functions unless f and g happen to commute.",
            "**Finding f⁻¹(x):** write y = f(x), swap x and y, then rearrange to make y the subject; that y is f⁻¹(x).",
            "**Domain and range:** the domain is the set of valid inputs; the range is the set of corresponding outputs.",
            "**f⁻¹(f(x)) = x:** applying a function and then its inverse returns the original input — a useful check.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Applying fg in the wrong order:** fg(x) means g is applied first; reading left-to-right feels natural but gives gf, not fg.",
            "**Writing f⁻¹(x) as 1/f(x):** the inverse function is not the reciprocal — these are completely different operations.",
            "**Forgetting to substitute fully:** in f(x) = x² − 3x, finding f(−2) requires replacing both x's: (−2)² − 3(−2) = 4 + 6 = 10.",
          ],
        },
      ],
    },
    {
      title: "Using Calculators to Sketch Graphs",
      body: `A graphical calculator or graphing software lets you visualise any equation quickly. Enter the equation, set a **suitable viewing window**, and observe key features: **intercepts**, **turning points**, and **asymptotes**.\n\nIf the graph appears blank, the window does not include the visible part of the curve — adjust the x and y ranges until the graph appears.`,
      groups: [
        {
          subTitle: "Getting a useful graph on screen",
          bullets: [
            "**Enter the equation correctly:** use the correct syntax for your calculator — multiplication signs, brackets around fractions, and the correct power key.",
            "**Set the window:** choose x-min, x-max, y-min, y-max to bracket the region of interest; the standard window (−10 to 10) is a safe first try.",
            "**Identify intercepts:** trace to or use the calculator's root/intercept function to read off exact or decimal values.",
            "**Identify turning points:** use the minimum/maximum function to locate peaks and troughs with their coordinates.",
            "**Spot asymptotes:** a vertical asymptote appears as a near-vertical line that the curve approaches; a horizontal one is a value y approaches but never reaches.",
            "**Zoom in for detail:** use the zoom function near a feature of interest to read it more accurately.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Trusting a blank screen:** a blank screen means the window is wrong, not that the graph has no solution — always try adjusting the range.",
            "**Reading intercepts by eye:** for accuracy, use the calculator's built-in intersection or root feature rather than guessing from the picture.",
            "**Using the sketch instead of an algebraic answer:** sketching verifies; it does not replace showing working in an examination.",
          ],
        },
      ],
    },
    {
      title: "Types of Graphs",
      body: `Different equation forms produce distinctively shaped curves. Being able to **recognise each shape** from its equation — and each equation from its shape — is a core examination skill.\n\nThe five types to know are: **linear**, **quadratic**, **cubic**, **reciprocal**, and **exponential**.`,
      groups: [
        {
          subTitle: "The five curve families",
          bullets: [
            "**Linear (y = mx + c):** straight line, constant gradient, one x-intercept (unless horizontal), crosses the y-axis at c.",
            "**Quadratic (y = ax² + bx + c):** parabola, one line of symmetry, opens upward if a > 0 and downward if a < 0, has a minimum or maximum turning point.",
            "**Cubic (y = ax³ + ...):** S-shaped curve, passes through three x-intercepts at most, has one point of inflection, extends to +∞ in one direction and −∞ in the other.",
            "**Reciprocal (y = k/x):** hyperbola, two separate branches in opposite quadrants (k > 0: Q1 and Q3; k < 0: Q2 and Q4), asymptotes along both axes, never crosses either axis.",
            "**Exponential (y = aˣ, a > 1):** rapid upward growth, always positive, y-intercept at (0, 1), asymptote along the negative x-axis.",
            "**Exponential decay (y = a⁻ˣ or y = (1/a)ˣ):** mirror image of growth, falls steeply from left, asymptote along the positive x-axis.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Calling a parabola a cubic:** a parabola is symmetrical with one turning point; a cubic has an S-shape with no axis of symmetry.",
            "**Forgetting the asymptotes of a reciprocal graph:** the curve approaches but never touches either axis — drawing it touching the axis loses marks.",
            "**Drawing an exponential that dips below zero:** y = aˣ is always positive; it approaches zero but never crosses the x-axis.",
          ],
        },
      ],
    },
    {
      title: "Using Calculators to Solve Equations",
      body: `A graphical calculator can solve equations that are difficult or impossible to solve algebraically. The key technique is to **graph both sides** of the equation as separate functions and find their **intersection points** — the x-values where they cross are the solutions.\n\nAlternatively, rearrange to f(x) = 0 and find the **x-intercepts** (roots) of the graph, or use the calculator's built-in equation solver.`,
      groups: [
        {
          subTitle: "Methods for solving graphically",
          bullets: [
            "**Two-graph method:** enter the left side as Y1 and the right side as Y2, plot both, and use the intersection function to find where Y1 = Y2.",
            "**Root method:** rearrange the equation to equal zero, enter the resulting expression as Y1, and find where the graph crosses the x-axis.",
            "**Quadratic roots:** the x-intercepts of y = ax² + bx + c are the solutions of ax² + bx + c = 0 — a graph shows immediately how many real roots there are.",
            "**No intersection means no real solution:** if the two graphs do not cross, the equation has no real roots in the viewing window (or at all).",
            "**Tangent at the x-axis:** a repeated root (discriminant = 0) appears as the curve just touching the axis without crossing.",
            "**Record the solution fully:** state the x-value (and y-value if asked) to the accuracy the question requires.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Missing a root because the window is too small:** adjust the viewing window to check for roots outside the default range.",
            "**Giving the y-value instead of the x-value:** solutions to equations are x-values; the intersection point's y-value is a check, not the answer.",
            "**Rounding too early:** store the full decimal in the calculator and round only at the final step to maintain accuracy.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_3 = chapterThree;
