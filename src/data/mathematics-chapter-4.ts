import type { Chapter } from "../lib/notes/types";

// mathematics-chapter-4.ts — chapters 71–81 (Coordinate Geometry & Graphs)
export const MATHEMATICS_CHAPTERS_4: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 71. Coordinates
  // ─────────────────────────────────────────────────────────────
  {
    number: 71,
    title: "Coordinates",
    section: "Coordinate Geometry & Graphs",
    topic: "Coordinate Geometry",
    intro: `Coordinates describe the exact position of a point in a plane using a pair of values referenced to two perpendicular axes. The Cartesian coordinate system is the foundation for every graph topic in IGCSE mathematics, from straight lines to curved functions. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Coordinates",
        body: `A **Cartesian coordinate system** uses two perpendicular number lines: the **x-axis** (horizontal) and the **y-axis** (vertical), meeting at the **origin** O = (0, 0). Every point in the plane is described by an **ordered pair (x, y)** called its **coordinates**.\n\nThe first value, **x**, is the horizontal displacement from the origin — positive to the right, negative to the left. The second value, **y**, is the vertical displacement — positive upward, negative downward.\n\nThe axes divide the plane into four **quadrants**: Quadrant I has (+, +); Quadrant II has (−, +); Quadrant III has (−, −); Quadrant IV has (+, −).\n\n**Plotting a point:** to plot (3, −2), start at the origin, move 3 units right along the x-axis, then 2 units down parallel to the y-axis.\n\n**Reading a point:** identify the x-value first (horizontal position), then the y-value (vertical position) — always in that order.`,
        groups: [
          {
            subTitle: "Key definitions",
            bullets: [
              "**Origin:** the point (0, 0) where the x-axis and y-axis cross; it is the reference point for all measurements.",
              "**x-coordinate (abscissa):** horizontal distance from the origin — positive is right, negative is left.",
              "**y-coordinate (ordinate):** vertical distance from the origin — positive is up, negative is down.",
              "**Ordered pair (x, y):** coordinates must always be written in this order; reversing gives a different point.",
              "**Quadrants:** Quadrant I (+, +), Quadrant II (−, +), Quadrant III (−, −), Quadrant IV (+, −) — numbered anticlockwise from the top-right.",
            ],
          },
          {
            subTitle: "Plotting and reading points",
            bullets: [
              "**Plotting (4, 3):** move 4 right from the origin, then 3 up — mark the point at the intersection.",
              "**Plotting (−2, 5):** move 2 left, then 5 up — the point lies in Quadrant II.",
              "**Plotting (0, −4):** no horizontal movement; move 4 down — the point lies on the y-axis.",
              "**Reading a plotted point:** trace vertical line to the x-axis for the x-value; trace horizontal line to the y-axis for the y-value.",
              "**Points on axes:** any point with x = 0 lies on the y-axis; any point with y = 0 lies on the x-axis.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Reversing the coordinates:** (3, 5) and (5, 3) are different points — always read x before y.",
              "**Misidentifying the quadrant:** a point at (−1, −1) is in Quadrant III, not Quadrant I.",
              "**Forgetting negative directions:** x = −3 means 3 units to the left, not 3 units to the right.",
              "**Points on the axes:** (5, 0) lies on the x-axis, not in a quadrant; (0, 0) is the origin, not in any quadrant.",
            ],
          },
        ],
        examinerTips: [
          "Always state coordinates as an ordered pair in brackets: (x, y) — writing x = 3, y = 5 is not standard form and may lose a mark.",
          "When plotting several points from a table, check each one after marking it — a single misplotted point can break the pattern.",
          "In questions that ask you to identify a quadrant, state the quadrant number and both sign conventions, e.g. 'Quadrant III; x < 0, y < 0'.",
          "On graph paper, count grid squares carefully and use a ruler for straight gridlines — sloppy marking loses accuracy marks.",
        ],
        commonMistakes: [
          "Writing the y-coordinate before the x-coordinate — the convention is always (x, y), so horizontal position comes first.",
          "Treating a negative x-coordinate as a positive one when plotting — always check the direction of the axis.",
          "Assuming a point with both coordinates equal (e.g. (3, 3)) lies on the x-axis — it lies on the line y = x, not on either axis.",
        ],
        recap: [
          "Write down the coordinates of the point that is 4 units to the left of the origin and 2 units above the x-axis. [1]",
          "In which quadrant does the point (−5, 3) lie? [1]",
          "A point P has coordinates (a, 0). Describe the position of P. [1]",
          "Plot the points A(2, −3), B(−1, 4), C(0, −2) on a coordinate grid and state which point lies on the y-axis. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 72. Gradient of a Line
  // ─────────────────────────────────────────────────────────────
  {
    number: 72,
    title: "Gradient of a Line",
    section: "Coordinate Geometry & Graphs",
    topic: "Coordinate Geometry",
    intro: `The gradient measures how steep a line is and whether it rises or falls from left to right. It is one of the two key properties of a straight line and appears in every straight-line graph question at IGCSE level. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Gradient of a Line",
        body: `The **gradient** (also called the **slope**) of a straight line is defined as the ratio of the vertical change to the horizontal change between any two points on the line:\n\n**gradient m = (y₂ − y₁) / (x₂ − x₁)**\n\nA **positive gradient** means the line rises from left to right; a **negative gradient** means it falls from left to right; a **gradient of zero** means the line is horizontal; an **undefined gradient** means the line is vertical (division by zero).\n\n**Example:** find the gradient of the line through A(1, 2) and B(4, 8):\nm = (8 − 2) / (4 − 1) = 6 / 3 = **2**\n\nThe gradient does not depend on which point you label (x₁, y₁) or (x₂, y₂) — swapping the labels gives the same result because both the numerator and denominator change sign.\n\nOn a grid, gradient can be read as **rise over run**: count the vertical squares up (or down) and divide by the horizontal squares across.`,
        groups: [
          {
            subTitle: "Calculating gradient from two points",
            bullets: [
              "**Formula:** m = (y₂ − y₁) / (x₂ − x₁) — subtract y-values over subtract x-values, in the same order.",
              "**Positive gradient:** line slopes upward left to right — e.g. through (0, 1) and (3, 7): m = (7−1)/(3−0) = 2.",
              "**Negative gradient:** line slopes downward left to right — e.g. through (0, 5) and (2, 1): m = (1−5)/(2−0) = −2.",
              "**Zero gradient:** horizontal line — e.g. through (1, 3) and (4, 3): m = (3−3)/(4−1) = 0.",
              "**Undefined gradient:** vertical line — e.g. through (2, 1) and (2, 5): denominator = 0, so gradient is undefined.",
            ],
          },
          {
            subTitle: "Reading gradient from a graph",
            bullets: [
              "**Rise over run:** choose two points on the line where it passes through grid intersections; count squares up and across.",
              "**Steep lines:** large |m| values (e.g. m = 5) are closer to vertical; small |m| values (e.g. m = 0.2) are closer to horizontal.",
              "**Identifying sign from graph:** if the line goes up from left to right, the gradient is positive; if it goes down, it is negative.",
              "**Using intercepts:** if the y-intercept is (0, 2) and x-intercept is (4, 0), then m = (0 − 2)/(4 − 0) = −1/2.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Subtracting in different orders:** compute (y₂ − y₁)/(x₂ − x₁), not (y₁ − y₂)/(x₂ − x₁) — the numerator and denominator must use the same point ordering.",
              "**Confusing rise and run:** gradient = vertical ÷ horizontal, never horizontal ÷ vertical.",
              "**Forgetting negative signs:** always check the direction of the line on the graph to confirm the sign of your calculated gradient.",
              "**Calling a vertical line's gradient zero:** a vertical line has undefined gradient; only a horizontal line has gradient zero.",
            ],
          },
        ],
        examinerTips: [
          "Always label your two chosen points clearly when reading gradient from a graph, and show the rise and run separately.",
          "If two answers for gradient look different (e.g. 2/4 and 1/2), simplify — they are the same value.",
          "For a line passing through the origin, the gradient equals the y-value when x = 1.",
          "Check the sign of your answer against the direction of the line: a rising line must give a positive gradient.",
        ],
        commonMistakes: [
          "Calculating run/rise instead of rise/run — the vertical change is always the numerator.",
          "Using coordinates from points that are not on the line — only use points that lie exactly on the line.",
          "Forgetting to simplify a fractional gradient — always express m in its simplest form.",
        ],
        recap: [
          "Find the gradient of the line through (2, 3) and (6, 11). [2]",
          "A line passes through (0, 4) and (5, −1). Calculate its gradient. [2]",
          "What is the gradient of a horizontal line? Explain why. [1]",
          "On a grid, a line rises 6 squares over a horizontal run of 4 squares. Write down the gradient of the line. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 73. Midpoint of a Line
  // ─────────────────────────────────────────────────────────────
  {
    number: 73,
    title: "Midpoint of a Line",
    section: "Coordinate Geometry & Graphs",
    topic: "Coordinate Geometry",
    intro: `The midpoint of a line segment is the point exactly halfway between its two endpoints. Finding midpoints is used in geometry proofs, coordinate problems, and questions involving perpendicular bisectors. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Midpoint of a Line",
        body: `The **midpoint** of a line segment connecting points A(x₁, y₁) and B(x₂, y₂) is found by averaging the x-coordinates and averaging the y-coordinates:\n\n**Midpoint M = ((x₁ + x₂)/2 , (y₁ + y₂)/2)**\n\n**Example:** find the midpoint of the line segment from A(1, 3) to B(5, 7):\nM = ((1 + 5)/2 , (3 + 7)/2) = (6/2 , 10/2) = **(3, 5)**\n\nThe formula works because the midpoint lies halfway along each axis direction separately. You can verify by checking that M is equidistant from A and from B.\n\n**Reverse problem:** if the midpoint M of AB is known and one endpoint A is known, find B by rearranging:\nx₂ = 2 × Mₓ − x₁ and y₂ = 2 × Mᵧ − y₁\n\n**Example:** M = (4, 1) and A = (1, −3). Find B:\nx₂ = 2(4) − 1 = 7; y₂ = 2(1) − (−3) = 5. So B = **(7, 5)**.`,
        groups: [
          {
            subTitle: "Applying the midpoint formula",
            bullets: [
              "**Formula:** M = ((x₁ + x₂)/2, (y₁ + y₂)/2) — add the x-values and divide by 2; repeat for y.",
              "**Midpoint of (−4, 2) and (2, 8):** M = ((−4+2)/2, (2+8)/2) = (−1, 5).",
              "**Midpoint with negative coordinates:** treat negatives carefully in the addition step.",
              "**Midpoint lies on the segment:** check your answer is between the two endpoints on both axes.",
              "**Midpoint as a point:** always write the answer as a coordinate pair, not as separate values.",
            ],
          },
          {
            subTitle: "Finding an unknown endpoint",
            bullets: [
              "**Setup:** if M = (Mₓ, Mᵧ) and A = (x₁, y₁), then B = (2Mₓ − x₁, 2Mᵧ − y₁).",
              "**Example:** M = (3, 2), A = (1, −1) → B = (2×3−1, 2×2−(−1)) = (5, 5).",
              "**Check:** verify that the midpoint of A and B gives back M.",
              "**Algebraic approach:** write (x₁ + x₂)/2 = Mₓ, then solve for x₂ — this avoids memorising a second formula.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Subtracting instead of adding:** midpoint uses (x₁ + x₂)/2, not (x₂ − x₁)/2 — that formula is for gradient.",
              "**Forgetting to divide by 2:** summing the coordinates without halving gives the wrong point.",
              "**Sign errors with negative coordinates:** (−3 + 5)/2 = 2/2 = 1, not (3 + 5)/2 = 4.",
              "**Reversing the reverse-problem formula:** to find an endpoint, double the midpoint coordinate and subtract the known endpoint.",
            ],
          },
        ],
        examinerTips: [
          "Write out ((x₁ + x₂)/2, (y₁ + y₂)/2) explicitly in your working — this shows the examiner you are using the correct method.",
          "For reverse-endpoint questions, substitute into (x₁ + x₂)/2 = Mₓ and solve algebraically to avoid errors.",
          "Always write the midpoint as a coordinate pair in brackets.",
          "After calculating, check the midpoint is visually halfway between the two original points on any diagram given.",
        ],
        commonMistakes: [
          "Using subtraction in the midpoint formula instead of addition — always add the coordinates, then divide by 2.",
          "Finding the midpoint of only the x-coordinates and forgetting to find the midpoint of the y-coordinates.",
          "Arithmetic errors with negative numbers — write out each addition step clearly when negative coordinates are involved.",
        ],
        recap: [
          "Find the midpoint of the line segment joining (3, −1) and (7, 5). [2]",
          "M is the midpoint of AB where A = (−2, 4). Given M = (1, 3), find the coordinates of B. [2]",
          "A line segment has endpoints (0, 0) and (6, −4). What are the coordinates of its midpoint? [1]",
          "The midpoint of PQ is (5, 2). P has coordinates (3, −2). Find the coordinates of Q. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 74. Length of a Line
  // ─────────────────────────────────────────────────────────────
  {
    number: 74,
    title: "Length of a Line",
    section: "Coordinate Geometry & Graphs",
    topic: "Coordinate Geometry",
    intro: `The distance between two points in a coordinate plane is found using the distance formula, which is a direct application of Pythagoras' theorem. This formula appears in geometry and coordinate problems throughout the IGCSE course. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Length of a Line",
        body: `The **distance** between two points A(x₁, y₁) and B(x₂, y₂) is derived from Pythagoras' theorem. The horizontal separation is (x₂ − x₁) and the vertical separation is (y₂ − y₁); these form the two shorter sides of a right-angled triangle whose hypotenuse is the line segment AB.\n\n**Distance formula: AB = √((x₂ − x₁)² + (y₂ − y₁)²)**\n\n**Example:** find the distance from A(1, 2) to B(4, 6):\nAB = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = **5 units**\n\nThe formula is symmetric: squaring (x₂ − x₁) and (x₁ − x₂) gives the same result, so the choice of which point is labelled first does not matter.\n\nFor vertical or horizontal lines, the formula simplifies: a horizontal line segment has length |x₂ − x₁|; a vertical line segment has length |y₂ − y₁|.`,
        groups: [
          {
            subTitle: "Applying the distance formula",
            bullets: [
              "**Formula:** AB = √((x₂−x₁)² + (y₂−y₁)²) — square both differences, add, then square root.",
              "**Example — integer answer:** A(0, 0) to B(3, 4): √(9 + 16) = √25 = 5.",
              "**Example — surd answer:** A(1, 1) to B(4, 5): √(9 + 16) = √25 = 5; or A(0,0) to B(1,2): √(1+4) = √5.",
              "**Horizontal segments:** length = |x₂ − x₁|; no vertical change, so the y-terms cancel.",
              "**Vertical segments:** length = |y₂ − y₁|; no horizontal change, so the x-terms cancel.",
            ],
          },
          {
            subTitle: "Link to Pythagoras",
            bullets: [
              "**Right triangle:** the horizontal difference and vertical difference are the two legs; the line segment is the hypotenuse.",
              "**Drawing the triangle:** sketch a right angle at (x₁, y₂) or (x₂, y₁) to visualise the two legs.",
              "**Pythagorean triples:** recognising 3-4-5, 5-12-13, 8-15-17 speeds up calculations on non-calculator papers.",
              "**Exact vs decimal:** leave the answer as a surd (e.g. √13) unless a decimal is requested.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not squaring before adding:** AB = √((x₂−x₁)² + (y₂−y₁)²), not √(x₂−x₁ + y₂−y₁).",
              "**Taking the square root of each term separately:** √(a² + b²) ≠ a + b — only the final sum is square-rooted.",
              "**Sign errors in the differences:** since you square the differences, sign errors cancel, but be careful with arithmetic.",
              "**Forgetting units:** if coordinates are in cm, the distance is in cm — always include units when specified.",
            ],
          },
        ],
        examinerTips: [
          "Show the substitution into the formula before evaluating — this earns method marks even if the arithmetic goes wrong.",
          "If the answer is not a whole number, check whether a surd form is acceptable before rounding.",
          "On non-calculator papers, check for Pythagorean triples to avoid tedious square-root arithmetic.",
          "When asked to 'show that' a triangle is right-angled, calculate all three side lengths and check whether a² + b² = c² holds.",
        ],
        commonMistakes: [
          "Adding the differences before squaring: (x₂ − x₁ + y₂ − y₁)² is not the same as (x₂−x₁)² + (y₂−y₁)².",
          "Taking absolute value instead of squaring: use the squaring formula, not |x₂−x₁| + |y₂−y₁|.",
          "Rounding too early: keep exact values through the working and only round the final answer to the required degree of accuracy.",
        ],
        recap: [
          "Calculate the distance between A(2, 1) and B(5, 5). [2]",
          "Find the length of the line segment joining (−1, 3) and (2, −1). Give your answer in surd form. [2]",
          "Show that the triangle with vertices P(0, 0), Q(4, 0), R(0, 3) is right-angled. [3]",
          "A line segment has length 10. One endpoint is (1, 1) and the other is (1, y). Find the two possible values of y. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 75. Equations of Straight Lines (y = mx + c)
  // ─────────────────────────────────────────────────────────────
  {
    number: 75,
    title: "Equations of Straight Lines (y = mx + c)",
    section: "Coordinate Geometry & Graphs",
    topic: "Straight Line Graphs",
    intro: `Every non-vertical straight line has an equation of the form y = mx + c, where m is the gradient and c is the y-intercept. Being able to write, interpret, and rearrange this equation is central to all coordinate geometry work at IGCSE. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Equations of Straight Lines (y = mx + c)",
        body: `The **equation of a straight line** in slope-intercept form is:\n\n**y = mx + c**\n\nwhere **m** is the **gradient** (steepness and direction) and **c** is the **y-intercept** (the y-value where the line crosses the y-axis).\n\n**Reading the equation:** in y = 3x + 2, the gradient is 3 and the y-intercept is 2, so the line crosses the y-axis at (0, 2) and rises 3 units for every 1 unit across.\n\n**Writing the equation from gradient and intercept:** if m = −2 and c = 5, the equation is y = −2x + 5.\n\n**Writing from two points:** first calculate m using the gradient formula, then substitute one point into y = mx + c to find c.\n\n**Example:** line through (1, 4) and (3, 10):\nm = (10 − 4)/(3 − 1) = 6/2 = 3.\nSubstitute (1, 4): 4 = 3(1) + c → c = 1.\nEquation: **y = 3x + 1**.\n\n**Rearranging from ax + by = c form:** isolate y — e.g. 2x + 3y = 6 → y = (−2/3)x + 2.`,
        groups: [
          {
            subTitle: "Identifying m and c from an equation",
            bullets: [
              "**Direct read:** y = 5x − 3 → m = 5, c = −3; the line crosses (0, −3) with gradient 5.",
              "**Rearrange first:** 4x − 2y = 8 → y = 2x − 4; m = 2, c = −4.",
              "**Horizontal line:** y = 4 is equivalent to y = 0x + 4; m = 0, c = 4.",
              "**Line through origin:** y = 3x has c = 0; it passes through (0, 0) with gradient 3.",
              "**Negative gradient:** y = −x + 7; m = −1, c = 7 — the line slopes downward.",
            ],
          },
          {
            subTitle: "Finding the equation from given information",
            bullets: [
              "**From gradient and y-intercept:** substitute directly into y = mx + c.",
              "**From gradient and one point (x₁, y₁):** compute c = y₁ − mx₁, then write y = mx + c.",
              "**From two points:** calculate m first, then find c using either point.",
              "**From a graph:** read off the y-intercept directly, then pick two grid points to calculate the gradient.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Not rearranging before reading m and c:** in 3y = 6x + 9, divide by 3 first to get y = 2x + 3; m = 2, not 6.",
              "**Forgetting that c is the y-intercept, not the x-intercept:** c is where x = 0.",
              "**Substituting into the wrong form:** find c using c = y − mx, substituting a point that lies on the line.",
              "**Sign errors in c:** if m = 4 and the point is (2, 3), then c = 3 − 4(2) = 3 − 8 = −5, not +5.",
            ],
          },
        ],
        examinerTips: [
          "Always rearrange to y = mx + c before reading off m and c — equations like 2y = 6x + 4 are traps for the unwary.",
          "When finding the equation from two points, show the gradient calculation first, then the substitution for c separately.",
          "Check the equation by substituting both original points — if both satisfy y = mx + c, the equation is correct.",
          "For 'does the point (a, b) lie on the line?' questions, substitute x = a and check whether y = b.",
        ],
        commonMistakes: [
          "Reading m = 2 and c = 3 from 2y = 2x + 3 — always divide through by the y-coefficient before reading off m and c.",
          "Using the x-intercept as c — c is exclusively the y-intercept (the value of y when x = 0).",
          "Calculating gradient correctly but substituting into y = c + mx instead of y = mx + c — the form is the same, but inconsistency causes arithmetic errors.",
        ],
        recap: [
          "Write down the gradient and y-intercept of the line y = −4x + 7. [2]",
          "Find the equation of the line with gradient 2 that passes through (3, 1). [2]",
          "Rearrange 3x − y = 5 into the form y = mx + c and state the gradient. [2]",
          "Find the equation of the straight line through (0, −2) and (4, 6). [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 76. Drawing Straight Line Graphs
  // ─────────────────────────────────────────────────────────────
  {
    number: 76,
    title: "Drawing Straight Line Graphs",
    section: "Coordinate Geometry & Graphs",
    topic: "Straight Line Graphs",
    intro: `Accurate construction of straight-line graphs requires finding at least two points on the line, plotting them precisely, and ruling a continuous line through them. This skill is examined through tables of values, intercept methods, and graph interpretation questions. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Drawing Straight Line Graphs",
        body: `A straight line is completely determined by **two distinct points**. In practice, three points are plotted to guard against errors — if all three are collinear, the graph is correct.\n\n**Method 1 — table of values:** choose three x-values, substitute each into the equation to find the corresponding y-values, plot the three coordinate pairs, then rule the line through them.\n\n**Example:** draw y = 2x − 1 for x = 0, 2, 4:\n- x = 0: y = −1 → (0, −1)\n- x = 2: y = 3 → (2, 3)\n- x = 4: y = 7 → (4, 7)\nPlot these three points and draw the line.\n\n**Method 2 — gradient–intercept method:** plot the y-intercept (0, c) first, then use the gradient m to locate a second point (move 1 unit right and m units up for integer gradients).\n\n**Method 3 — axes intercepts:** set x = 0 to find the y-intercept and y = 0 to find the x-intercept; plot both and draw the line.\n\nAlways use a **ruler** and extend the line to the full requested range, with arrows at each end if the line continues beyond the axes.`,
        groups: [
          {
            subTitle: "Table of values method",
            bullets: [
              "**Choose x-values:** select values evenly spaced within the given range — usually including 0 and the boundary values.",
              "**Substitute carefully:** replace x in the equation, following order of operations each time.",
              "**Record as ordered pairs:** write (x, y) for each row to avoid plotting errors.",
              "**Plot then rule:** mark each point with a small cross (×) and draw through all points with a ruler.",
              "**Check alignment:** if one point does not lie on your line, re-calculate the y-value for that x.",
            ],
          },
          {
            subTitle: "Gradient–intercept and axes-intercepts methods",
            bullets: [
              "**Gradient–intercept:** start at (0, c); for gradient m = 3/2, move 2 right and 3 up to get the second point.",
              "**Axes intercepts:** y-intercept at x = 0; x-intercept at y = 0 — solve 0 = mx + c for x = −c/m.",
              "**Fractional gradients:** e.g. m = 2/3 means move 3 right, 2 up — choose x-values that keep y as integers.",
              "**Extending the line:** a line segment should reach the boundary of the grid; include arrowheads where it continues.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Connecting points with a curve:** straight lines must be drawn with a ruler — a curved or wobbly line loses marks.",
              "**Stopping at the last plotted point:** continue the line to the edge of the grid or the specified domain.",
              "**Arithmetic errors in the table:** a small mistake in one y-value shifts a point; plot all three and check collinearity.",
              "**Using too few points:** two points define a line, but plot three to catch errors — if they are not collinear, one calculation is wrong.",
            ],
          },
        ],
        examinerTips: [
          "Complete a table of values showing all three coordinate pairs before plotting — this keeps working visible for method marks.",
          "Mark points as small crosses (×), not blobs; a blob obscures the exact coordinate.",
          "Draw the line through the full extent of the grid (or stated range) with a continuous line, not just between the plotted points.",
          "After drawing, read off the gradient and y-intercept from your graph and compare with the equation to verify accuracy.",
        ],
        commonMistakes: [
          "Plotting (y, x) instead of (x, y) — always plot horizontal first, vertical second.",
          "Using inconsistent scales on the axes — read the given grid carefully; each square may represent more than one unit.",
          "Drawing freehand instead of using a ruler — straight lines on a graph must be perfectly straight.",
        ],
        recap: [
          "Complete the table of values for y = 3x − 2 at x = −1, 0, 1, 2, 3 and draw the graph. [3]",
          "Using the gradient–intercept method, draw the line y = −½x + 4 on a suitable grid. [2]",
          "Find the x-intercept of the line y = 2x − 6 and use it, along with the y-intercept, to draw the line. [3]",
          "A line is drawn through (0, −3) and (4, 5). Write down its equation in the form y = mx + c. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 77. Parallel Lines
  // ─────────────────────────────────────────────────────────────
  {
    number: 77,
    title: "Parallel Lines",
    section: "Coordinate Geometry & Graphs",
    topic: "Straight Line Graphs",
    intro: `Parallel lines have exactly the same gradient and never intersect. Recognising and writing equations of parallel lines is a standard IGCSE examination skill tested in both pure coordinate geometry and applied contexts. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Parallel Lines",
        body: `Two straight lines are **parallel** if and only if they have the **same gradient**. They never meet and maintain a constant perpendicular distance from each other.\n\nIf line L₁ has equation y = m₁x + c₁ and line L₂ has equation y = m₂x + c₂, then:\n**L₁ ∥ L₂  ⟺  m₁ = m₂ and c₁ ≠ c₂**\n\n(If both the gradient and intercept were equal, the lines would be identical, not just parallel.)\n\n**Finding the equation of a parallel line:** given a line and a point, the parallel line through that point has the same gradient but a different c.\n\n**Example:** find the equation of the line through (2, 5) parallel to y = 3x − 1:\n- Gradient of parallel line: m = 3 (same as the given line).\n- Substitute into y = mx + c: 5 = 3(2) + c → c = 5 − 6 = −1.\n- Equation: **y = 3x − 1**.\n\nWait — that's the same line. Let's use a different example: through (1, 7) parallel to y = 3x − 1:\n5 → actually through (1, 7): 7 = 3(1) + c → c = 4. Equation: **y = 3x + 4**.`,
        groups: [
          {
            subTitle: "Identifying parallel lines",
            bullets: [
              "**Same gradient, different intercept:** y = 4x + 1 and y = 4x − 3 are parallel (m = 4 for both, different c).",
              "**Rearrange first:** 2x + y = 5 (y = −2x + 5) and 4x + 2y = 3 (y = −2x + 3/2) — both have m = −2, so they are parallel.",
              "**Identical lines are not parallel:** y = 2x + 1 and 2y = 4x + 2 simplify to the same equation — they coincide, not just run parallel.",
              "**Checking from a graph:** parallel lines look like they never converge or diverge over the visible range.",
            ],
          },
          {
            subTitle: "Writing equations of parallel lines",
            bullets: [
              "**Step 1:** identify the gradient m from the given line.",
              "**Step 2:** use the point and m in y = mx + c to solve for c.",
              "**Step 3:** write the full equation y = mx + c.",
              "**Example:** parallel to y = −2x + 5 through (3, 1): m = −2; 1 = −2(3) + c → c = 7; equation: y = −2x + 7.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using the wrong gradient:** always extract m from the given equation after rearranging to y = mx + c.",
              "**Giving the same equation as the original:** if the calculated c equals the original c, the point lies on the given line — recheck the question.",
              "**Confusing parallel with perpendicular:** parallel lines share the gradient; perpendicular lines have gradients whose product is −1.",
              "**Rearranging errors:** in ax + by = c, divide every term by b to get y = (−a/b)x + c/b; a slip here gives the wrong m.",
            ],
          },
        ],
        examinerTips: [
          "State explicitly that the gradient of the parallel line equals the gradient of the given line — examiners want to see this reasoning.",
          "After finding c, check the point satisfies the new equation by substituting back in.",
          "Rearrange any line not in y = mx + c form before reading off the gradient.",
          "If asked whether two lines are parallel, rearrange both to y = mx + c and compare the m values — do not guess from a diagram.",
        ],
        commonMistakes: [
          "Taking the y-intercept from the given line instead of recalculating c for the new point — parallel lines share only the gradient, not the intercept.",
          "Confusing equal gradients with proportional coefficients: 2x + 3y = 1 and 4x + 6y = 5 have the same gradient because 4/6 = 2/3, the same as −a/b ratio.",
          "Not rearranging the given equation to y = mx + c form before reading the gradient.",
        ],
        recap: [
          "Write down the gradient of a line parallel to y = 5x − 3. [1]",
          "Find the equation of the line through (2, −1) that is parallel to y = 3x + 4. [3]",
          "Show that the lines 2x + 4y = 8 and x + 2y = 1 are parallel. [2]",
          "A line is parallel to y = −2x + 1 and passes through (0, 7). Write its equation. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 78. Function Notation
  // ─────────────────────────────────────────────────────────────
  {
    number: 78,
    title: "Function Notation",
    section: "Coordinate Geometry & Graphs",
    topic: "Functions & Calculators",
    intro: `Function notation provides a compact, unambiguous way to describe a rule that maps each input to exactly one output. IGCSE questions use f(x), g(x), and composite or inverse functions — understanding the notation precisely prevents the most common errors. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Function Notation",
        body: `A **function** is a rule that maps every input value to exactly one output value. The notation **f(x)** (read "f of x") means the value of the function f when the input is x.\n\nf(x) = 3x + 1 means: take any input x, multiply by 3, then add 1.\n\n**Evaluating a function:** substitute the given value for x.\nf(2) = 3(2) + 1 = 7; f(−1) = 3(−1) + 1 = −2.\n\n**Composite functions:** fg(x) means apply g first, then apply f to the result.\nIf f(x) = 2x + 3 and g(x) = x², then fg(x) = f(g(x)) = f(x²) = 2x² + 3.\n\n**Inverse function f⁻¹(x):** reverses the mapping — if f maps x to y, then f⁻¹ maps y back to x.\nTo find f⁻¹: write y = f(x), swap x and y, solve for y.\nFor f(x) = 3x + 1: y = 3x + 1 → x = 3y + 1 → y = (x − 1)/3. So **f⁻¹(x) = (x − 1)/3**.`,
        groups: [
          {
            subTitle: "Evaluating functions",
            bullets: [
              "**Direct substitution:** replace x with the given value — f(4) with f(x) = x² − 2 gives 4² − 2 = 14.",
              "**Expression inputs:** f(a + 1) means replace every x with (a + 1) — f(a+1) = (a+1)² − 2 = a² + 2a − 1.",
              "**Finding x from f(x):** if f(x) = 10 and f(x) = 3x + 1, then 3x + 1 = 10 → x = 3.",
              "**Domain and range:** the **domain** is the set of valid input values; the **range** is the set of possible output values.",
            ],
          },
          {
            subTitle: "Composite and inverse functions",
            bullets: [
              "**Composite fg(x):** apply g first, then f — write f(g(x)) and substitute g(x) wherever x appears in f.",
              "**Order matters:** fg(x) ≠ gf(x) in general — the order of application changes the result.",
              "**Inverse f⁻¹(x):** replace f(x) with y, swap x and y, rearrange to make y the subject.",
              "**Verification:** f(f⁻¹(x)) = x and f⁻¹(f(x)) = x — use this to check your inverse.",
              "**f⁻¹(a) means:** find the input that gives output a — equivalent to solving f(x) = a.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Treating f(x) as multiplication:** f(2) does not mean f × 2 — it means evaluate f at input 2.",
              "**Wrong order in composites:** fg(x) means g is applied first; some students apply f first.",
              "**Swapping x and y incorrectly:** when finding the inverse, swap x and y simultaneously in one step.",
              "**Not simplifying composite fully:** expand and simplify fg(x) completely — do not leave f(g(x)) unsimplified.",
            ],
          },
        ],
        examinerTips: [
          "For composite functions, always write out g(x) explicitly before substituting into f — this prevents order errors.",
          "To find f⁻¹, write y = f(x), replace x ↔ y, then solve — show each step clearly.",
          "Verify your inverse by checking f(f⁻¹(x)) = x using a simple numerical check.",
          "When asked for f(a) where a is an expression, substitute the whole expression in brackets to avoid sign errors.",
        ],
        commonMistakes: [
          "Applying fg(x) in the wrong order — always process the function nearest to x first, so g acts on x first.",
          "Confusing f⁻¹(x) with 1/f(x) — the inverse function and the reciprocal are completely different concepts.",
          "Dropping brackets when substituting an expression: f(x+1) = 3(x+1) + 1, not 3x + 1 + 1.",
        ],
        recap: [
          "Given f(x) = 4x − 3, find f(2) and f(−1). [2]",
          "Given g(x) = x² + 1, find the value of gf(x) when f(x) = 2x. [2]",
          "Find the inverse function of f(x) = 5x − 2. [2]",
          "Given f(x) = 3x + 6, solve f(x) = 0. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 79. Using Calculators to Sketch Graphs
  // ─────────────────────────────────────────────────────────────
  {
    number: 79,
    title: "Using Calculators to Sketch Graphs",
    section: "Coordinate Geometry & Graphs",
    topic: "Functions & Calculators",
    intro: `Graphical calculators and graph-plotting tools allow you to sketch functions quickly and investigate their behaviour — identifying roots, turning points, and intersections. Understanding how to set up a viewing window and read key features is an essential examiner-tested skill at IGCSE Extended level. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Using Calculators to Sketch Graphs",
        body: `A **graphical calculator** plots a function y = f(x) by evaluating the function at many x-values and connecting the points. The key skills are setting the **viewing window** correctly and interpreting the graph that appears.\n\n**Setting the window:** choose x-min, x-max, y-min, y-max to capture the relevant features. For a quadratic like y = x² − 4x + 1, a window of −1 ≤ x ≤ 5, −4 ≤ y ≤ 10 shows the vertex and both roots.\n\n**Key features to identify:**\n- **Roots (x-intercepts):** where y = 0 — read x values from the graph.\n- **y-intercept:** where x = 0 — read the y value at x = 0.\n- **Turning point (vertex):** the maximum or minimum point of a curve.\n- **Intersections:** where two graphs cross — the x-value gives the solution to f(x) = g(x).\n\n**Tracing and zooming:** use the trace function to move along the curve and read approximate coordinates; zoom in for greater precision.\n\nOn **paper-based exams**, sketch graphs by identifying the key features analytically (roots, intercept, vertex) and plotting a smooth curve through them.`,
        groups: [
          {
            subTitle: "Setting up the viewing window",
            bullets: [
              "**x-range:** choose a range that includes all relevant roots and turning points — start with −5 to 5 for most IGCSE functions.",
              "**y-range:** evaluate f(x) at the x-boundaries and near the vertex to estimate the y-range needed.",
              "**Standard window:** many calculators have a preset 'standard' window (−10 to 10 on each axis) — adjust if features are cut off.",
              "**Multiple graphs:** when plotting two functions, ensure the y-range captures all intersection points.",
            ],
          },
          {
            subTitle: "Reading key features from the graph",
            bullets: [
              "**Roots:** the x-values where the curve crosses the x-axis; read to the precision required by the question.",
              "**y-intercept:** always at x = 0; read off the y-axis or substitute x = 0 into the equation to verify.",
              "**Turning point:** the highest or lowest point of the curve; use the calculator's min/max feature or complete the square analytically.",
              "**Intersections of two curves:** trace to the crossing point and read the x and y values.",
              "**Asymptotes:** vertical or horizontal lines the graph approaches but never touches — common in reciprocal graphs.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Window too narrow:** if the graph appears as a single dot or is blank, the function values fall outside the y-range — adjust.",
              "**Misreading coordinates from the trace:** the trace gives approximate values; round to the number of decimal places specified.",
              "**Missing a root that is off-screen:** always check the equation to estimate whether more roots exist outside your window.",
              "**Confusing the x-intercept with the y-intercept:** the x-intercept is on the horizontal axis; the y-intercept is on the vertical axis.",
            ],
          },
        ],
        examinerTips: [
          "Before sketching, identify all key features (roots, turning point, intercepts) analytically as a cross-check.",
          "Label each key feature on your sketch — coordinates of the vertex, x-intercepts, and y-intercept.",
          "When reading intersections, check both the x and y coordinates and verify by substituting into one of the equations.",
          "For 'sketch' questions (as opposed to 'plot'), accuracy of shape and labelled key points matter more than precise scale.",
        ],
        commonMistakes: [
          "Drawing a sketch without labelling key coordinates — always state the coordinates of turning points and intercepts.",
          "Connecting two separate branches of a discontinuous function (such as y = 1/x) with a line — leave the gap between branches.",
          "Using an overly large window so that detail near the vertex or roots is lost.",
        ],
        recap: [
          "Sketch the graph of y = x² − 2x − 3, labelling the x-intercepts, y-intercept, and turning point. [4]",
          "Using a calculator, find the x-coordinates of the intersection of y = x² and y = x + 2. [2]",
          "Describe the viewing window you would choose to sketch y = x³ − 10x + 1 and identify all three roots. [2]",
          "A sketch of y = f(x) shows a minimum at (2, −1) and x-intercepts at (0.5, 0) and (3.5, 0). Write down the range of f(x). [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 80. Types of Graphs
  // ─────────────────────────────────────────────────────────────
  {
    number: 80,
    title: "Types of Graphs",
    section: "Coordinate Geometry & Graphs",
    topic: "Functions & Calculators",
    intro: `IGCSE Mathematics requires students to recognise and sketch the characteristic shapes of linear, quadratic, cubic, reciprocal, and exponential graphs. Each type has a distinctive appearance and set of key features that must be identified from both equations and diagrams. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Types of Graphs",
        body: `Each family of functions produces a characteristic graph shape:\n\n**Linear (y = mx + c):** a straight line — positive m slopes up, negative m slopes down, m = 0 is horizontal.\n\n**Quadratic (y = ax² + bx + c):** a **parabola** — U-shaped when a > 0 (opens upward), ∩-shaped when a < 0 (opens downward). Has one turning point (vertex), a line of symmetry, and up to two x-intercepts.\n\n**Cubic (y = ax³ + bx² + cx + d):** an S-shaped curve with one point of inflection. When a > 0 it goes from bottom-left to top-right; when a < 0 the reverse. Has up to three x-intercepts.\n\n**Reciprocal (y = k/x or y = k/x²):** a **hyperbola** — has two branches, never touches the axes (which are asymptotes). For y = 1/x, the branches are in Quadrants I and III; for y = −1/x, in Quadrants II and IV.\n\n**Exponential (y = aˣ):** a curve that never touches the x-axis (the x-axis is an asymptote). When a > 1 it grows rapidly; when 0 < a < 1 it decays. Always passes through (0, 1) for y = aˣ.`,
        groups: [
          {
            subTitle: "Linear and quadratic graphs",
            bullets: [
              "**Linear y = mx + c:** straight line; gradient m determines slope; c is y-intercept; passes through (0, c).",
              "**Quadratic y = ax²:** parabola through origin; a > 0 is U-shaped, a < 0 is ∩-shaped.",
              "**Quadratic turning point:** vertex at x = −b/2a; substitute back to find the y-coordinate of the vertex.",
              "**Number of roots:** discriminant b² − 4ac > 0 means two roots; = 0 means one; < 0 means no real roots.",
              "**Line of symmetry:** x = −b/2a for y = ax² + bx + c.",
            ],
          },
          {
            subTitle: "Cubic, reciprocal, and exponential graphs",
            bullets: [
              "**Cubic y = ax³:** no turning points for simple y = x³; more general cubics may have a local max and local min.",
              "**Reciprocal y = 1/x:** both axes are asymptotes; the two branches are in Quadrants I and III; never crosses the axes.",
              "**Reciprocal y = 1/x²:** always positive; branches in Quadrants I and II; y-axis is an asymptote; x-axis is an asymptote.",
              "**Exponential y = 2ˣ:** passes through (0, 1), increases steeply for x > 0, approaches 0 for large negative x.",
              "**Exponential decay y = (1/2)ˣ:** starts high for negative x, passes through (0, 1), decays towards 0.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Drawing a cubic as a parabola:** a cubic has an S-shape with two bends; a parabola has one bend.",
              "**Connecting the two branches of a reciprocal:** the branches of y = 1/x never meet — leave a gap at the origin.",
              "**Forgetting the x-axis asymptote of exponentials:** y = 2ˣ never reaches y = 0, it only approaches it.",
              "**Misidentifying a ∩-shaped parabola as a U-shaped one:** check the sign of the coefficient of x² in the equation.",
            ],
          },
        ],
        examinerTips: [
          "Learn the characteristic shape of each graph type and practice sketching them from memory — shape recognition is tested directly.",
          "For 'match the graph to the equation' questions, check the number of roots, the asymptotes, and whether the function is always positive or can be negative.",
          "When sketching a quadratic, calculate the vertex and at least one x-intercept to anchor the sketch correctly.",
          "For exponential graphs, always plot (0, 1) first and mark the x-axis as the asymptote.",
        ],
        commonMistakes: [
          "Drawing a smooth V-shape for a quadratic — the vertex of a parabola is a smooth curve, not a sharp point.",
          "Extending a reciprocal graph through the origin — y = 1/x has no value at x = 0 and the graph never crosses the y-axis.",
          "Labelling a cubic graph as quadratic because it has a hump — a cubic has two bends and an overall S-shape.",
        ],
        recap: [
          "Sketch the graph of y = −x² + 4, labelling the y-intercept and both x-intercepts. [3]",
          "Write down the equations of the asymptotes of the graph y = 3/x. [2]",
          "Describe the key differences between the graphs of y = 2x and y = x². [2]",
          "Match each equation to its graph type: (i) y = x³ − x, (ii) y = 3x + 1, (iii) y = 1/x. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 81. Using Calculators to Solve Equations
  // ─────────────────────────────────────────────────────────────
  {
    number: 81,
    title: "Using Calculators to Solve Equations",
    section: "Coordinate Geometry & Graphs",
    topic: "Functions & Calculators",
    intro: `Graphical and numerical methods on a calculator allow equations that resist algebraic solution — particularly cubics and those involving mixed function types — to be solved to any required degree of accuracy. This is a core skill on IGCSE Paper 2 (calculator). Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Using Calculators to Solve Equations",
        body: `Many equations cannot be solved exactly by algebra. A calculator solves them **graphically** (by finding x-intercepts or intersections) or **numerically** (by trial and improvement or iteration).\n\n**Graphical method:** to solve f(x) = 0, plot y = f(x) and read the x-intercepts. To solve f(x) = g(x), plot both curves and read the x-coordinates of their intersection points.\n\n**Example:** solve x³ − 3x + 1 = 0.\nPlot y = x³ − 3x + 1 and find where it crosses the x-axis. The calculator gives three roots: approximately x ≈ −1.88, x ≈ 0.35, x ≈ 1.53.\n\n**Trial and improvement:** narrow down a root by substituting values and noting sign changes (the root lies where f changes from positive to negative or vice versa). Then refine by trying the midpoint of the interval.\n\n**Iteration:** a rearrangement of f(x) = 0 into x = g(x) is used to generate a sequence xₙ₊₁ = g(xₙ) starting from an initial estimate x₀. The sequence converges to the root if |g′(x)| < 1 near the root.\n\n**Degree of accuracy:** always round the final answer to the number of decimal places specified — usually 2 or 3 d.p. at IGCSE.`,
        groups: [
          {
            subTitle: "Graphical solution on a calculator",
            bullets: [
              "**Rewrite as y = f(x) = 0:** move all terms to one side, then plot y = f(x) and find x-intercepts.",
              "**Intersection method:** to solve f(x) = g(x), plot both y = f(x) and y = g(x) and find intersection x-values.",
              "**Using the calculator's root/intersect feature:** select the appropriate function from the calculator's CALC or ANALYZE menu.",
              "**Multiple roots:** check the full x-range for all crossing points; a polynomial of degree n has at most n real roots.",
            ],
          },
          {
            subTitle: "Trial and improvement",
            bullets: [
              "**Locate the interval:** find consecutive integers a and b such that f(a) and f(b) have opposite signs — the root lies between them.",
              "**Narrow down:** test the midpoint m = (a + b)/2; if f(m) > 0 and f(a) < 0, the root is in (a, m), otherwise in (m, b).",
              "**Continue:** repeat until the interval is as narrow as required by the precision asked for.",
              "**Record all trials in a table:** show x, f(x), and 'too high' or 'too low' — this is required for method marks.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Missing roots outside the initial window:** always widen the view to check for additional roots before concluding.",
              "**Insufficient precision in trial and improvement:** if 2 d.p. is required, test one more decimal place to confirm the rounding direction.",
              "**Rounding intermediate values:** keep full precision in the calculator through all steps; only round the final answer.",
              "**Using the graphical root as an exact answer:** graphical methods give approximations; label them as 'x ≈ …' not 'x = …'.",
            ],
          },
        ],
        examinerTips: [
          "For trial and improvement, always present a full table of values showing each test — examiners require evidence of the narrowing process.",
          "After finding a root graphically, verify it by substituting back into the original equation and checking the result is close to 0.",
          "If asked for roots to 2 d.p., test one extra decimal place beyond the answer to prove the rounding is correct.",
          "When solving f(x) = g(x) graphically, clearly state which intersection you are using if there are multiple crossing points.",
        ],
        commonMistakes: [
          "Presenting only the final answer for trial and improvement — the marking scheme rewards the systematic table of trials.",
          "Stopping after finding one root of a cubic without checking whether two more exist.",
          "Confusing x-intercepts (solutions of f(x) = 0) with y-intercepts when reading a graph.",
        ],
        recap: [
          "Show that x³ + 2x − 5 = 0 has a root between x = 1 and x = 2. [1]",
          "Using trial and improvement, find this root correct to 1 decimal place. [2]",
          "Describe how you would use a graphical calculator to solve x² = 2x + 3, and state the solutions. [3]",
          "An equation has roots at x ≈ −2.41, x ≈ 0.41, and x ≈ 3. Sketch a possible graph of y = f(x) and label the roots on the x-axis. [3]",
        ],
      },
    ],
  },
];
