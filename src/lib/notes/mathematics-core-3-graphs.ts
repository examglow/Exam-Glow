import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Core — Section 3: Coordinate Geometry & Graphs
 * Chapters 25 to 27 (Categories matching official Core syllabus breakdown)
 */
export const MATHEMATICS_CORE_GRAPHS: Chapter[] = [
  {
    number: 25,
    title: "Linear Graphs",
    section: "3. Coordinate Geometry & Graphs",
    topic: "Linear Graphs",
    intro:
      "Cartesian coordinates, gradient, the straight line equation $y = mx + c$, plotting straight lines from tables and intercepts, and parallel lines.",
    subheadings: [
      {
        title: "Coordinates",
        body:
          "The Cartesian coordinate system uses two perpendicular axes intersecting at the **origin $(0, 0)$**:\n\n" +
          "- **$x$-axis:** Horizontal axis (positive to the right, negative to the left).\n" +
          "- **$y$-axis:** Vertical axis (positive upwards, negative downwards).\n" +
          "- **Ordered Pair $(x, y)$:** $x$-coordinate is the horizontal distance; $y$-coordinate is the vertical distance.\n" +
          "- **Midpoint of a Line Segment:** Between $(x_1, y_1)$ and $(x_2, y_2)$:\n" +
          "$$\\mathbf{\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)}$$",
        examinerTips: [
          "Always write coordinates inside brackets separated by a comma: $(3, -4)$.",
          "Remember: 'Along the corridor ($x$), then up/down the stairs ($y$)'.",
        ],
        commonMistakes: [
          "Reversing the $x$ and $y$ coordinates (e.g. plotting $(2, 5)$ as $(5, 2)$).",
        ],
        recap: [
          "Find the midpoint of the line segment joining $A(-3, 8)$ and $B(5, -2)$.",
        ],
      },
      {
        title: "Gradient of a Line",
        body:
          "The **gradient ($m$)** measures the steepness and direction of a line:\n\n" +
          "$$\\mathbf{m = \\frac{\\text{Change in } y}{\\text{Change in } x} = \\frac{\\text{Rise}}{\\text{Run}} = \\frac{y_2 - y_1}{x_2 - x_1}}$$\n\n" +
          "**Types of Gradients:**\n" +
          "- **Positive gradient ($m > 0$):** Slopes upwards from left to right.\n" +
          "- **Negative gradient ($m < 0$):** Slopes downwards from left to right.\n" +
          "- **Zero gradient ($m = 0$):** Horizontal line (equation $y = c$).\n" +
          "- **Undefined gradient:** Vertical line (equation $x = k$).\n\n" +
          "**Worked Example:** Find the gradient of the line passing through $(1, 3)$ and $(5, 11)$:\n" +
          "$$m = \\frac{11 - 3}{5 - 1} = \\frac{8}{4} = 2$$",
        examinerTips: [
          "Be careful with negative signs when subtracting: if $y_1 = -4$, then $y_2 - y_1 = y_2 - (-4) = y_2 + 4$.",
        ],
        commonMistakes: [
          "Dividing the change in $x$ by the change in $y$ (upside down).",
        ],
        recap: [
          "Calculate the gradient of the line passing through $(-2, 5)$ and $(4, -7)$.",
        ],
      },
      {
        title: "Equations of Straight Lines (y = mx + c)",
        body:
          "Every non-vertical straight line can be written in the slope-intercept form:\n\n" +
          "$$\\mathbf{y = mx + c}$$\n\n" +
          "- $m$ = **gradient** of the line\n" +
          "- $c$ = **$y$-intercept** (the value of $y$ where the line crosses the vertical $y$-axis, at the point $(0, c)$)\n\n" +
          "**Finding the equation from a graph:**\n" +
          "1. Read off the $y$-intercept where the line cuts the $y$-axis $\\rightarrow c$.\n" +
          "2. Pick two clear grid points on the line and calculate the gradient $\\rightarrow m = \\frac{\\text{rise}}{\\text{run}}$.\n" +
          "3. Substitute $m$ and $c$ into $y = mx + c$.\n\n" +
          "**Rearranging to $y = mx + c$:**\n" +
          "To find the gradient and intercept of $2x + 3y = 12$:\n" +
          "$$3y = -2x + 12 \\implies y = -\\frac{2}{3}x + 4$$\n" +
          "Here, gradient $m = -\\frac{2}{3}$ and $y$-intercept $c = 4$.",
        examinerTips: [
          "The equation must have $y$ with coefficient $+1$ alone on the left to identify $m$ and $c$ directly.",
        ],
        commonMistakes: [
          "Stating $m = 2$ for $2x + y = 5$ without rearranging to $y = -2x + 5$ ($m = -2$).",
        ],
        recap: [
          "Write down the gradient and $y$-intercept of $y = 5 - 3x$.",
          "Find the equation of the line with gradient $4$ passing through $(0, -7)$.",
        ],
      },
      {
        title: "Drawing Straight Line Graphs",
        body:
          "**Method 1: Table of Values:**\n" +
          "1. Choose at least 3 values of $x$ (e.g. $x = 0, 1, 2, 3$).\n" +
          "2. Calculate the corresponding $y$ values using the formula.\n" +
          "3. Plot the coordinate points on the grid with neat small crosses ($\\times$).\n" +
          "4. Join with a continuous straight line using a sharp pencil and long ruler extending across the whole grid.\n\n" +
          "**Method 2: Intercepts Method:**\n" +
          "- Find $y$-intercept: set $x = 0$ and solve for $y$.\n" +
          "- Find $x$-intercept: set $y = 0$ and solve for $x$.\n" +
          "- Plot both intercepts and rule a straight line through them.\n\n" +
          "**Special Lines:**\n" +
          "- $x = k$: vertical line cutting the $x$-axis at $k$ (e.g. $x = 3$).\n" +
          "- $y = c$: horizontal line cutting the $y$-axis at $c$ (e.g. $y = -2$).",
        examinerTips: [
          "Always plot at least three points: the third point acts as a check to catch any arithmetic errors.",
          "Label the completed line with its equation.",
        ],
        commonMistakes: [
          "Confusing $x = 4$ (vertical line) with $y = 4$ (horizontal line).",
        ],
        recap: [
          "Draw the line $y = 2x - 3$ for $-2 \\le x \\le 4$.",
        ],
      },
      {
        title: "Parallel Lines",
        body:
          "Two straight lines are **parallel** if and only if they have the **exact same gradient**:\n\n" +
          "$$\\mathbf{m_1 = m_2}$$\n\n" +
          "- They have equal steepness and will never intersect, regardless of their $y$-intercepts.\n\n" +
          "**Worked Example:** Find the equation of the line parallel to $y = 3x + 1$ that passes through the point $(2, 11)$:\n" +
          "- The gradient must be $m = 3$.\n" +
          "- The equation is $y = 3x + c$.\n" +
          "- Substitute $(x = 2, y = 11)$:\n" +
          "$$11 = 3(2) + c \\implies 11 = 6 + c \\implies c = 5$$\n" +
          "- Equation: $\\mathbf{y = 3x + 5}$.",
        examinerTips: [
          "Check gradients immediately: if both lines have identical coefficients of $x$ when written as $y = mx + c$, they are parallel.",
        ],
        commonMistakes: [
          "Assuming lines are parallel without converting both into $y = mx + c$ form.",
        ],
        recap: [
          "Is the line $2y = 6x - 4$ parallel to the line $y = 3x + 8$? Explain your answer.",
        ],
      },
    ],
  },
  {
    number: 26,
    title: "Further Graphs",
    section: "3. Coordinate Geometry & Graphs",
    topic: "Further Graphs",
    intro:
      "Recognising graph shapes (quadratic, cubic, reciprocal), plotting curved graphs from tables of values, and estimating solutions to equations graphically.",
    subheadings: [
      {
        title: "Types of Graphs",
        body:
          "Recognising the characteristic shape of functions:\n\n" +
          "1. **Linear Graphs ($y = mx + c$):** Straight line.\n" +
          "2. **Quadratic Graphs ($y = ax^2 + bx + c$):** Parabola (U-shape if $a > 0$, inverted $\\cap$-shape if $a < 0$). Has a single turning point (vertex) and vertical line of symmetry.\n" +
          "3. **Cubic Graphs ($y = ax^3 + bx^2 + cx + d$):** S-shaped curve with up to two turning points.\n" +
          "4. **Reciprocal Graphs ($y = \\frac{k}{x}$):** Hyperbola with two separate branches in opposite quadrants; asymptotes along the $x$-axis ($y = 0$) and $y$-axis ($x = 0$).",
        examinerTips: [
          "Core papers frequently ask you to match algebraic equations to their corresponding sketch graphs.",
        ],
        commonMistakes: [
          "Drawing quadratic curves with sharp pointed bottoms like a 'V' instead of a smooth rounded turning point.",
        ],
        recap: [
          "Sketch the general shape of $y = -x^2 + 4$.",
        ],
      },
      {
        title: "Drawing Graphs from Tables",
        body:
          "To plot non-linear graphs accurately:\n\n" +
          "1. Calculate missing values in the table by substituting $x$ into the equation (use brackets around negative $x$ values!).\n" +
          "2. Plot all points accurately on the grid with small crosses.\n" +
          "3. Join the points with a **single, smooth, continuous curve** drawn freehand (do NOT use a ruler to join curved points with straight segments!).\n" +
          "4. For reciprocal graphs ($y = \\frac{k}{x}$), draw the two separate branches separately; **never connect across $x = 0$**.",
        examinerTips: [
          "If one plotted point looks completely out of line with the curve, re-check your table calculation for that specific point.",
          "Keep the pencil sharp and avoid feathering or heavy multiple lines.",
        ],
        commonMistakes: [
          "Using a ruler to join points on a quadratic curve.",
          "Joining the positive and negative branches of a reciprocal graph across the $y$-axis.",
        ],
        recap: [
          "Complete a table of values for $y = x^2 - 3x$ for $-2 \\le x \\le 4$ and draw the graph.",
        ],
      },
      {
        title: "Solving Equations from Graphs",
        body:
          "Graphs can be used to solve equations:\n\n" +
          "- **Solving $f(x) = 0$:** The roots of the equation are the **$x$-intercepts** where the curve intersects the line $y = 0$ ($x$-axis).\n" +
          "- **Solving $f(x) = k$:** Draw the horizontal line $y = k$ across the grid. The solutions are the $x$-coordinates of the intersection points.\n" +
          "- **Solving simultaneous equations graphically:** The coordinates $(x, y)$ of the point of intersection between two graphs give the simultaneous solution.",
        examinerTips: [
          "Draw dotted vertical lines down from intersection points to the $x$-axis to read solutions with maximum precision.",
          "Read values to the nearest grid square (usually $\\pm 0.1$).",
        ],
        commonMistakes: [
          "Reading the $y$-value instead of the $x$-value when asked for the solutions to an equation.",
        ],
        recap: [
          "Using the graph of $y = x^2 - 2x - 3$, estimate the roots of $x^2 - 2x - 3 = 0$.",
        ],
      },
    ],
  },
  {
    number: 27,
    title: "Real-Life Graphs",
    section: "3. Coordinate Geometry & Graphs",
    topic: "Real-Life Graphs",
    intro:
      "Interpreting conversion graphs, distance-time graphs (speed as gradient), and speed-time graphs (acceleration as gradient and distance as area under the graph).",
    subheadings: [
      {
        title: "Conversion Graphs",
        body:
          "A **conversion graph** is a straight-line graph through the origin used to convert between two proportional units (e.g. miles to kilometres, currencies, degrees Celsius to Fahrenheit).\n\n" +
          "**How to use:**\n" +
          "- To convert from unit $A$ to unit $B$: locate value on horizontal axis, move vertically to meet the line, then read horizontally across to vertical axis.\n" +
          "- **Direct Proportion:** If $0$ on one axis corresponds to $0$ on the other, the line passes through the origin $(0, 0)$. Values beyond the grid can be found by scaling (e.g. double the value for $50$ to get $100$).",
        examinerTips: [
          "Draw clear pencil construction lines with arrows on the graph so the examiner sees how you read your values.",
        ],
        commonMistakes: [
          "Misreading the grid scales on axes where one grid square represents $2, 5,$ or $0.2$ units.",
        ],
        recap: [
          "Use a conversion graph where $5\\text{ miles} = 8\\text{ km}$ to estimate the distance in km of $35\\text{ miles}$.",
        ],
      },
      {
        title: "Distance-Time Graphs",
        body:
          "A **distance-time graph** displays journey progress over time:\n\n" +
          "- **Horizontal Axis:** Time\n" +
          "- **Vertical Axis:** Distance from a starting point\n" +
          "- **Gradient = Speed:**\n" +
          "$$\\mathbf{\\text{Gradient} = \\frac{\\text{Change in Distance}}{\\text{Change in Time}} = \\text{Speed}}$$\n" +
          "- **Straight line with positive gradient:** Moving forward at constant speed (steeper line = faster speed).\n" +
          "- **Horizontal flat line:** Stationary / at rest (speed = $0$).\n" +
          "- **Straight line with negative gradient:** Returning towards starting point at constant speed.\n\n" +
          "**Average Speed for Journey:**\n" +
          "$$\\text{Average Speed} = \\frac{\\text{Total Distance Travelled}}{\\text{Total Time Taken}}$$",
        examinerTips: [
          "Ensure time units match: if distance is in km and time on axis is in minutes, convert minutes to hours before finding speed in km/h.",
        ],
        commonMistakes: [
          "Thinking a horizontal line means constant speed (it means stopped/stationary!).",
        ],
        recap: [
          "A cyclist travels $18\\text{ km}$ in 45 minutes, stops for 15 minutes, then travels $12\\text{ km}$ in 30 minutes. Calculate the overall average speed.",
        ],
      },
      {
        title: "Speed-Time Graphs",
        body:
          "A **speed-time (velocity-time) graph** shows how an object's speed changes during a journey:\n\n" +
          "- **Gradient = Acceleration:**\n" +
          "$$\\mathbf{\\text{Gradient} = \\frac{\\text{Change in Speed}}{\\text{Time Taken}} = \\text{Acceleration}}$$\n" +
          "  - Positive slope = acceleration (speeding up)\n" +
          "  - Horizontal line = constant speed (acceleration = $0$)\n" +
          "  - Negative slope = deceleration / retardation (slowing down)\n\n" +
          "- **Area Under Graph = Total Distance Travelled:**\n" +
          "$$\\mathbf{\\text{Distance} = \\text{Area under the speed-time graph}}$$\n" +
          "Split the region under the graph into simple geometric shapes:\n" +
          "  - Rectangle: $\\text{Area} = \\text{base} \\times \\text{height}$\n" +
          "  - Triangle: $\\text{Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}$\n" +
          "  - Trapezium: $\\text{Area} = \\frac{1}{2}(a + b)h$",
        examinerTips: [
          "Distance travelled is ALWAYS the area under a speed-time graph: sum all rectangular and triangular areas carefully.",
        ],
        commonMistakes: [
          "Calculating distance using $\\text{speed} \\times \\text{time}$ with maximum speed instead of calculating the area of the shape.",
        ],
        recap: [
          "A car accelerates uniformly from rest to $20\\text{ m/s}$ in $10\\text{ s}$, travels at $20\\text{ m/s}$ for $30\\text{ s}$, then brakes to rest in $5\\text{ s}$. Find the total distance travelled.",
        ],
      },
    ],
  },
];
