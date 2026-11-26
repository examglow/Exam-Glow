import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 3: Coordinate Geometry & Graphs
 * Includes all Core content + Extended-only: Perpendicular Lines, Length of a Line,
 * Exponential Graphs, Gradients of Tangents, Estimating Area Under Curves
 */
export const MATHEMATICS_EXTENDED_GRAPHS: Chapter[] = [
  {
    number: 26,
    title: "Linear Graphs",
    section: "3. Coordinate Geometry & Graphs",
    topic: "Linear Graphs",
    intro:
      "Straight-line graphs and their equations are central to coordinate geometry. The Extended course adds perpendicular lines and the length of a line segment to Core skills.",
    subheadings: [
      {
        title: "Coordinates & Plotting Points",
        body:
          "The **Cartesian coordinate system** uses two perpendicular axes:\n" +
          "- **$x$-axis** (horizontal) and **$y$-axis** (vertical).\n" +
          "- Points are written as ordered pairs $(x, y)$.\n\n" +
          "**Quadrants:**\n" +
          "- Q1: $x > 0$, $y > 0$ | Q2: $x < 0$, $y > 0$\n" +
          "- Q3: $x < 0$, $y < 0$ | Q4: $x > 0$, $y < 0$\n\n" +
          "**Midpoint of a line segment** joining $(x_1, y_1)$ and $(x_2, y_2)$:\n" +
          "$$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$$",
        examinerTips: [
          "Always state coordinates as $(x, y)$ — the $x$-coordinate first.",
          "To find a midpoint, average the $x$-coordinates and average the $y$-coordinates separately.",
        ],
        commonMistakes: [
          "Swapping $x$ and $y$ when plotting — the first number is always the horizontal position.",
        ],
        recap: [
          "Find the midpoint of $(3, -2)$ and $(-5, 8)$.",
          "Plot the points $A(-3, 4)$, $B(2, -1)$, $C(0, 3)$ on a coordinate grid.",
        ],
      },
      {
        title: "Gradient of a Straight Line",
        body:
          "The **gradient** (slope) of a straight line measures how steep it is.\n\n" +
          "$$m = \\frac{\\text{change in } y}{\\text{change in } x} = \\frac{y_2 - y_1}{x_2 - x_1}$$\n\n" +
          "- Positive gradient: line slopes upward left to right.\n" +
          "- Negative gradient: line slopes downward left to right.\n" +
          "- Zero gradient: horizontal line.\n" +
          "- Undefined gradient: vertical line.\n\n" +
          "**Example:** Gradient through $(1, 3)$ and $(5, 11)$:\n" +
          "$m = \\frac{11-3}{5-1} = \\frac{8}{4} = 2$",
        examinerTips: [
          "Always subtract the coordinates in the same order: $(y_2 - y_1)/(x_2 - x_1)$, never mix up.",
          "The gradient of a horizontal line ($y = c$) is 0; a vertical line ($x = k$) has undefined gradient.",
        ],
        commonMistakes: [
          "Computing $\\frac{x_2 - x_1}{y_2 - y_1}$ (flipping rise and run).",
          "Using absolute values — gradient can be negative and that negative sign is crucial.",
        ],
        recap: [
          "Find the gradient of the line through: (a) $(2, 1)$ and $(6, 9)$ (b) $(-3, 5)$ and $(1, -3)$ (c) $(4, 7)$ and $(4, 2)$.",
        ],
      },
      {
        title: "Equations of Straight Lines (y = mx + c)",
        body:
          "The **equation of a straight line** in slope-intercept form:\n" +
          "$$y = mx + c$$\n" +
          "Where $m$ is the gradient and $c$ is the $y$-intercept (where the line crosses the $y$-axis).\n\n" +
          "**Finding the equation given gradient and a point:**\n" +
          "Gradient $3$, through $(2, 7)$: $7 = 3(2) + c \\Rightarrow c = 1$. Equation: $y = 3x + 1$.\n\n" +
          "**Finding the equation given two points:**\n" +
          "Through $(1, 5)$ and $(3, 11)$: $m = \\frac{11-5}{3-1} = 3$. Then $c = 5 - 3(1) = 2$. Equation: $y = 3x + 2$.\n\n" +
          "**General form:** $ax + by + c = 0$ — rearrange to find gradient and intercept.",
        examinerTips: [
          "To find $c$: substitute the gradient and one known point into $y = mx + c$ and solve for $c$.",
          "Rearrange $3x + 2y = 8$ as $y = -\\frac{3}{2}x + 4$ — gradient is $-\\frac{3}{2}$, intercept is $4$.",
        ],
        commonMistakes: [
          "Reading the gradient from $ax + by = c$ without rearranging first.",
          "Confusing the $y$-intercept (value of $y$ when $x = 0$) with the $x$-intercept.",
        ],
        recap: [
          "Find the equation of the line: (a) gradient $-2$, $y$-intercept $5$ (b) through $(0, 3)$ and $(4, 11)$ (c) $2x - 3y + 6 = 0$ — find gradient and $y$-intercept.",
        ],
      },
      {
        title: "Parallel Lines",
        body:
          "**Parallel lines** have the **same gradient** and never intersect.\n\n" +
          "If two lines $y = m_1 x + c_1$ and $y = m_2 x + c_2$ are parallel, then $m_1 = m_2$.\n\n" +
          "**Finding the equation of a parallel line through a given point:**\n\n" +
          "Line parallel to $y = 3x - 2$ through $(1, 7)$:\n" +
          "Same gradient $m = 3$. Substitute: $7 = 3(1) + c \\Rightarrow c = 4$.\n" +
          "Equation: $y = 3x + 4$.",
        examinerTips: [
          "Parallel lines have the same gradient but different $y$-intercepts.",
          "If two lines have the same gradient and same $y$-intercept, they are the same line.",
        ],
        commonMistakes: [
          "Thinking two lines with the same gradient but different intercepts are the same line.",
          "Using the original $y$-intercept instead of finding a new one using the given point.",
        ],
        recap: [
          "Find the equation of the line parallel to $y = -2x + 7$ passing through $(3, 1)$.",
          "Show that $4x + 2y = 10$ and $2x + y = 1$ are parallel.",
        ],
      },
      {
        title: "Perpendicular Lines",
        body:
          "Two lines are **perpendicular** if they meet at right angles ($90°$).\n\n" +
          "If a line has gradient $m$, any **perpendicular line** has gradient $-\\frac{1}{m}$ (the **negative reciprocal**).\n\n" +
          "$$m_1 \\times m_2 = -1 \\text{ for perpendicular lines}$$\n\n" +
          "**Examples:**\n" +
          "- Line with gradient $3$: perpendicular gradient is $-\\frac{1}{3}$.\n" +
          "- Line with gradient $-\\frac{2}{5}$: perpendicular gradient is $\\frac{5}{2}$.\n\n" +
          "**Finding the equation of a perpendicular line:**\n" +
          "Perpendicular to $y = 2x - 1$ through $(4, 3)$:\n" +
          "Perpendicular gradient: $-\\frac{1}{2}$.\n" +
          "$3 = -\\frac{1}{2}(4) + c \\Rightarrow c = 5$.\n" +
          "Equation: $y = -\\frac{1}{2}x + 5$.",
        examinerTips: [
          "\"Negative reciprocal\" — flip the fraction and change the sign.",
          "Quick check: $m_1 \\times m_2 = 3 \\times (-\\frac{1}{3}) = -1$ ✓",
        ],
        commonMistakes: [
          "Using $\\frac{1}{m}$ instead of $-\\frac{1}{m}$ (forgetting the negative sign).",
          "Thinking perpendicular lines must be horizontal and vertical — they can be any angle as long as the product of gradients is $-1$.",
        ],
        recap: [
          "Find the equation of the perpendicular bisector of the line segment joining $A(2, 1)$ and $B(8, 5)$.",
          "Show that $y = 3x + 4$ and $3y + x = 9$ are perpendicular.",
        ],
      },
      {
        title: "Length of a Line Segment",
        body:
          "The **length of a line segment** joining $(x_1, y_1)$ and $(x_2, y_2)$ is found using Pythagoras' theorem:\n\n" +
          "$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$\n\n" +
          "**Example:** Length between $(-1, 3)$ and $(5, 11)$:\n" +
          "$d = \\sqrt{(5-(-1))^2 + (11-3)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$\n\n" +
          "**Example:** Distance between $(2, -3)$ and $(-4, 1)$:\n" +
          "$d = \\sqrt{(-4-2)^2 + (1+3)^2} = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$",
        examinerTips: [
          "Square the differences — squaring removes the need to worry about which point is first.",
          "Leave as a surd if it doesn't simplify to a whole number, unless the question asks for decimal.",
        ],
        commonMistakes: [
          "Forgetting to square root at the end.",
          "Computing $|x_2 - x_1| + |y_2 - y_1|$ (the Manhattan distance) instead of Pythagoras.",
        ],
        recap: [
          "Find the exact length of the line segment joining: (a) $(3, 2)$ and $(7, 5)$ (b) $(-2, 1)$ and $(4, -3)$ (c) $(0, -5)$ and $(-8, 1)$.",
        ],
      },
    ],
  },
  {
    number: 27,
    title: "Further Graphs",
    section: "3. Coordinate Geometry & Graphs",
    topic: "Further Graphs",
    intro:
      "Beyond straight lines, Extended Mathematics includes quadratics, cubics, reciprocals, and exponential graphs. Recognising and working with these curve shapes is a key skill.",
    subheadings: [
      {
        title: "Types of Graphs",
        body:
          "**Key graph shapes to recognise at Extended level:**\n\n" +
          "| Function Type | Equation Form | Key Feature |\n" +
          "|---------------|---------------|-------------|\n" +
          "| Linear | $y = mx + c$ | Straight line |\n" +
          "| Quadratic | $y = ax^2 + bx + c$ | Parabola (U or ∩ shape) |\n" +
          "| Cubic | $y = ax^3 + bx^2 + cx + d$ | S-shaped curve |\n" +
          "| Reciprocal | $y = \\frac{a}{x}$ | Hyperbola (two branches), asymptotes at $x = 0$ and $y = 0$ |\n" +
          "| Exponential | $y = a \\times b^x$ | Rapid growth/decay, asymptote at $y = 0$ |\n" +
          "| Square root | $y = \\sqrt{x}$ | Defined for $x \\geq 0$, increasing at decreasing rate |\n\n" +
          "For quadratics: if $a > 0$, U-shaped (minimum); if $a < 0$, ∩-shaped (maximum).",
        examinerTips: [
          "Sketch labelling: mark where each graph crosses the axes (intercepts) and state the coordinates of any vertex/turning point.",
          "For $y = \\frac{a}{x}$: the graph never touches the axes (asymptotes at $x = 0$ and $y = 0$).",
        ],
        commonMistakes: [
          "Drawing a quadratic as a V-shape instead of a smooth parabola.",
          "Forgetting that $y = \\frac{a}{x}$ has two branches (one in Q1, one in Q3 for positive $a$).",
        ],
        recap: [
          "Sketch (with key features labelled): (a) $y = x^2 - 4x + 3$ (b) $y = \\frac{6}{x}$ (c) $y = x^3 - x$.",
        ],
      },
      {
        title: "Drawing Graphs from Tables of Values",
        body:
          "**Method:**\n" +
          "1. Complete the table of values by substituting each $x$ value into the function.\n" +
          "2. Plot all points from the table on the grid.\n" +
          "3. Join with a smooth curve (or straight line for linear functions).\n\n" +
          "**Example for $y = x^2 - 2x - 3$:**\n\n" +
          "| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ | $4$ |\n" +
          "|-----|------|------|-----|-----|-----|-----|-----|\n" +
          "| $y$ | $5$  | $0$ | $-3$ | $-4$ | $-3$ | $0$ | $5$ |\n\n" +
          "Turning point (vertex) at $x = 1$, $y = -4$.",
        examinerTips: [
          "Always calculate each value of $y$ separately — do not rush and make arithmetic errors.",
          "If a point doesn't fit the curve pattern, recalculate it.",
        ],
        commonMistakes: [
          "Joining points with straight lines instead of a smooth curve for non-linear graphs.",
          "Missing a negative sign when substituting negative $x$ values.",
        ],
        recap: [
          "Complete the table and draw the graph of $y = x^3 - 3x$ for $-2 \\leq x \\leq 2$. Identify where the graph crosses the $x$-axis.",
        ],
      },
      {
        title: "Solving Equations from Graphs",
        body:
          "Graphs can be used to solve equations — the solution is the **$x$-coordinate(s) of the intersection**.\n\n" +
          "**Solving $f(x) = 0$:** Read the $x$-intercepts from the graph.\n\n" +
          "**Solving $f(x) = k$:** Draw the horizontal line $y = k$ and read the $x$-values at the intersections.\n\n" +
          "**Solving $f(x) = g(x)$:** Plot both graphs and read the $x$-values where they cross.\n\n" +
          "**Rearranging to use an existing graph:**\n" +
          "If the graph of $y = x^3 - 3x$ is drawn, to solve $x^3 - 3x + 2 = 0$:\n" +
          "Rearrange: $x^3 - 3x = -2$, so draw $y = -2$ and find intersections.",
        examinerTips: [
          "If asked to 'use the graph to solve', draw the appropriate line and read off the $x$-values to 1 or 2 decimal places.",
          "Show the construction line on the graph (draw it and label it).",
        ],
        commonMistakes: [
          "Reading the $y$-coordinate instead of the $x$-coordinate from the intersection.",
          "Not drawing the construction line — 'by reading from the graph' requires a visible line.",
        ],
        recap: [
          "The graph of $y = x^2 - 2x - 3$ is drawn. Use it to solve: (a) $x^2 - 2x - 3 = 0$ (b) $x^2 - 2x - 3 = 5$ (c) $x^2 - 2x - 8 = 0$ (hint: add a suitable line).",
        ],
      },
      {
        title: "Exponential Graphs",
        body:
          "**Exponential functions** have the form $y = a \\times b^x$ where $b > 0$ and $b \\neq 1$.\n\n" +
          "**Key features:**\n" +
          "- Always passes through $(0, a)$ since $b^0 = 1$.\n" +
          "- Asymptote at $y = 0$ (the $x$-axis).\n" +
          "- For $b > 1$: **exponential growth** — curve increases steeply for large $x$.\n" +
          "- For $0 < b < 1$: **exponential decay** — curve decreases, approaching $y = 0$.\n\n" +
          "**Examples:**\n" +
          "- $y = 2^x$: $y$-intercept at $1$, doubles with every unit increase in $x$.\n" +
          "- $y = 3 \\times (0.8)^x$: $y$-intercept at $3$, decays towards $0$.\n\n" +
          "**Transformations of exponentials:**\n" +
          "- $y = 2^{x-3}$: translation of $y = 2^x$ by vector $\\binom{3}{0}$.\n" +
          "- $y = 2^x + 1$: asymptote shifts to $y = 1$.",
        examinerTips: [
          "The $y$-intercept is always $a$ (the value when $x = 0$).",
          "An exponential graph NEVER crosses the $x$-axis (the asymptote).",
        ],
        commonMistakes: [
          "Drawing an exponential as a straight line or as crossing the $x$-axis.",
          "Thinking $y = (-2)^x$ is an exponential — the base must be positive.",
        ],
        recap: [
          "Sketch $y = 3 \\times 2^x$ and $y = 3 \\times (\\frac{1}{2})^x$ on the same axes. State the $y$-intercept and the asymptote for each.",
          "A population is modelled by $P = 1000 \\times 1.05^t$. Find: (a) the initial population (b) the population after 10 years.",
        ],
      },
    ],
  },
  {
    number: 28,
    title: "Gradients of Curves & Area Under Curves",
    section: "3. Coordinate Geometry & Graphs",
    topic: "Gradients of Curves",
    intro:
      "At Extended level, students estimate the gradient of a curve at a point (using tangent lines) and estimate the area under a curve (using the trapezium rule). These are pre-calculus techniques.",
    subheadings: [
      {
        title: "Finding Gradients of Tangents",
        body:
          "The **gradient of a curve at a point** equals the gradient of the **tangent** to the curve at that point.\n\n" +
          "**Method:**\n" +
          "1. Draw a tangent — a straight line that just touches the curve at the given point (not crossing it).\n" +
          "2. Choose two points on the tangent line that are far apart and easy to read.\n" +
          "3. Calculate the gradient: $m = \\frac{y_2 - y_1}{x_2 - x_1}$.\n\n" +
          "**Accuracy:** The tangent must touch the curve at exactly one local point and not cross it. A poorly drawn tangent gives an inaccurate gradient.\n\n" +
          "**Interpretation:** The gradient at a point on a distance-time graph = instantaneous speed at that moment. On a velocity-time graph, gradient = acceleration.",
        examinerTips: [
          "Draw the tangent as a full straight line across the graph — use a ruler.",
          "Pick two points on the tangent line that are as far apart as possible to minimise reading error.",
        ],
        commonMistakes: [
          "Drawing a chord (joining two points on the curve) instead of a tangent — the chord gives average gradient, not instantaneous gradient.",
          "Reading the gradient of the curve itself rather than the tangent.",
        ],
        recap: [
          "On the graph of $y = x^2$, draw the tangent at $x = 2$ and estimate the gradient. Compare with the exact answer ($4$).",
        ],
      },
      {
        title: "Estimating Area Under a Curve",
        body:
          "The **area under a curve** can be estimated using the **trapezium rule**:\n\n" +
          "Divide the area into vertical strips (trapezia) of equal width $h$. If the $y$-values at the strip boundaries are $y_0, y_1, y_2, \\dots, y_n$:\n\n" +
          "$$\\text{Area} \\approx \\frac{h}{2}\\left(y_0 + 2(y_1 + y_2 + \\cdots + y_{n-1}) + y_n\\right)$$\n\n" +
          "**Alternatively**, count grid squares under the curve (less accurate).\n\n" +
          "**Example:** Estimate $\\int_0^4 x^2 \\, dx$ using 4 strips of width $h = 1$:\n" +
          "$y_0 = 0, y_1 = 1, y_2 = 4, y_3 = 9, y_4 = 16$\n" +
          "Area $\\approx \\frac{1}{2}(0 + 2(1 + 4 + 9) + 16) = \\frac{1}{2}(0 + 28 + 16) = 22$\n" +
          "(Exact answer: $\\frac{64}{3} \\approx 21.33$)\n\n" +
          "**Interpretation:** Area under a speed-time graph = distance travelled.",
        examinerTips: [
          "More strips → smaller $h$ → more accurate estimate.",
          "The trapezium rule overestimates for convex curves and underestimates for concave curves.",
        ],
        commonMistakes: [
          "Forgetting the factor of $\\frac{h}{2}$ in the trapezium rule.",
          "Not doubling the intermediate $y$-values — only the first and last are not doubled.",
        ],
        recap: [
          "Use the trapezium rule with 4 strips to estimate the area under $y = \\frac{1}{x}$ between $x = 1$ and $x = 5$.",
          "A speed-time graph shows a car accelerating. The $y$-values at $t = 0, 2, 4, 6$ seconds are $0, 10, 16, 20$ m/s. Estimate the distance travelled.",
        ],
      },
    ],
  },
  {
    number: 29,
    title: "Real-Life Graphs",
    section: "3. Coordinate Geometry & Graphs",
    topic: "Real-Life Graphs",
    intro:
      "Real-life graphs model practical situations such as travel and conversions. Interpreting and constructing these graphs is an essential applied skill.",
    subheadings: [
      {
        title: "Conversion Graphs",
        body:
          "**Conversion graphs** are straight-line graphs that allow conversion between two related quantities, such as currencies or units.\n\n" +
          "**Reading a conversion graph:**\n" +
          "1. Start from the given value on one axis.\n" +
          "2. Draw a horizontal (or vertical) line to meet the graph.\n" +
          "3. Draw a vertical (or horizontal) line to meet the other axis.\n" +
          "4. Read off the value.\n\n" +
          "**Interpreting the gradient:** The gradient represents the exchange rate or conversion factor.",
        examinerTips: [
          "Use a ruler to draw construction lines precisely when reading values from a graph.",
          "Show your construction lines on the graph — examiners credit the method.",
        ],
        commonMistakes: [
          "Reading the wrong axis — always check which axis corresponds to which quantity.",
        ],
        recap: [
          "A conversion graph shows $£$ on the $x$-axis and $€$ on the $y$-axis. The line passes through $(0,0)$ and $(10, 11.5)$. Convert: (a) $£25$ to euros (b) $€46$ to pounds.",
        ],
      },
      {
        title: "Distance-Time & Speed-Time Graphs",
        body:
          "**Distance-time graphs:**\n" +
          "- Gradient = speed.\n" +
          "- Horizontal section = stationary (not moving).\n" +
          "- Steeper gradient = faster speed.\n" +
          "- Downward slope = moving back towards start.\n\n" +
          "**Speed-time graphs:**\n" +
          "- Gradient = acceleration.\n" +
          "- Horizontal section = constant speed.\n" +
          "- Positive gradient = acceleration; negative gradient = deceleration.\n" +
          "- Area under graph = distance (displacement) travelled.\n\n" +
          "**Units:**\n" +
          "- If distance is in km and time in hours: speed in km/h.\n" +
          "- If velocity is in m/s and time in seconds: area gives metres.",
        examinerTips: [
          "For area under a speed-time graph, split into triangles and rectangles for exact calculation.",
          "The gradient of a tangent to a curved distance-time graph gives instantaneous speed.",
        ],
        commonMistakes: [
          "Confusing gradient with area: on a distance-time graph, gradient = speed (NOT area).",
          "Including units in the value read from a gradient calculation.",
        ],
        recap: [
          "A car travels at 30 km/h for 20 minutes, stops for 10 minutes, then returns to the start in 30 minutes. Sketch the distance-time graph and calculate the return speed.",
          "A speed-time graph shows constant acceleration from 0 to 24 m/s in 8 seconds, then constant speed for 10 seconds. Find: (a) acceleration (b) total distance.",
        ],
      },
    ],
  },
];
