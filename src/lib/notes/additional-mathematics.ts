import type { SubjectNotes } from "./types";

export const ADDITIONAL_MATHEMATICS: SubjectNotes = {
  id: "additional-mathematics",
  name: "Additional Mathematics",
  code: "0606",
  color: "bg-violet-600",
  chapters: [
    {
      number: 1,
      title: "Functions",
      intro:
        "A function is a rule that takes each allowed input value x and produces exactly one output value y = f(x). Functions are the foundation of the whole 0606 course: composite and inverse functions appear in almost every Paper 1 and Paper 2. You must be able to state the domain (allowed inputs) and range (possible outputs) of a function, decide whether a function has an inverse, and form composite functions in the correct order. Notation matters enormously here: f(x), fg(x) and f⁻¹(x) each mean something precise, and examiners award marks for using them correctly. Master the worked examples in this chapter slowly — every later chapter (quadratics, exponentials, calculus) reuses this function language.",
      subheadings: [
        {
          title: "Function Notation, Domain and Range",
          body: "A function f is a rule that assigns to every element x of a set X (the ==domain==) exactly one element y; the values actually produced form the ==range==. We write y = f(x), read as 'f of x'. The domain is the set of inputs for which the rule is defined: for f(x) = 1/(x - 2) we must exclude x = 2 (division by zero is undefined); for f(x) = √(x - 1) we need x - 1 ≥ 0. When a question gives a restricted domain such as 0 ≤ x ≤ 5, you must use only that interval when finding the range — the range is then found from the graph's behaviour on that interval, checking the turning point and both endpoints.\n\n## Worked example 1 — easy\n- **Step 1 — Substitute the input.** f(x) = 3x - 2, so f(4) = 3(4) - 2 = 12 - 2 = **10**\n- **Step 2 — Substitute an algebraic input.** f(a) = 3a - 2 and f(2x) = 3(2x) - 2 = 6x - 2\n\n## Worked example 2 — exam grade\nFind the range of f(x) = x² - 4x for the domain 0 ≤ x ≤ 5.\n- **Step 1 — Locate the turning point.** Complete the square: f(x) = (x - 2)² - 4, so the minimum value is -4 at x = 2 (which lies inside the domain).\n- **Step 2 — Check both ends.** f(0) = 0 and f(5) = 25 - 20 = 5.\n- **Step 3 — Assemble the range.** The smallest output is -4, the largest is 5, so the range is **-4 ≤ f(x) ≤ 5**.\n\nThe single most important habit is to sketch or visualise the graph: the range is read from the y-direction extent of the graph over the given domain, never guessed from the formula alone.",
          groups: [
            {
              subTitle: "Key definitions",
              bullets: [
                "**Function**: a rule giving exactly one output for each input; y = f(x) means 'y is the output when x is fed into f'.",
                "**Domain**: the complete set of allowed input values x; it is part of the definition of a function, not an afterthought.",
                "**Range**: the set of all output values f(x) as x runs through the domain; written with inequalities such as f(x) ≥ 3.",
                "**Natural domain**: the largest set of x for which the formula is defined (no zero denominators, no negatives under square roots).",
                "**Restricted domain**: a domain deliberately limited by the question, e.g. x > 0 or 1 ≤ x ≤ 4; the range then changes accordingly.",
                "**Mapping diagram**: bubbles showing inputs joined to outputs; a function has exactly one arrow from each input.",
              ],
            },
            {
              subTitle: "Finding the range — recipe",
              bullets: [
                "**Step A — Sketch**: draw or imagine y = f(x) over the given domain only.",
                "**Step B — Turning points**: complete the square (or differentiate later) to find interior maxima/minima inside the domain.",
                "**Step C — Endpoints**: always evaluate f at the boundary values of the domain.",
                "**Step D — Compare**: the range runs from the smallest to the largest of these candidate values.",
              ],
            },
          ],
          examinerTips: [
            "**State the domain explicitly** when you define or use f, e.g. 'f(x) = x² - 4x, domain 0 ≤ x ≤ 5' — a mark is often attached to it.",
            "**Use set or inequality notation** for domains and ranges (x ≥ 2 or {x : x ≠ 3}) rather than vague words.",
            "**Show the candidate values**: write f(0) = 0, f(2) = -4, f(5) = 5 before stating the range — each evaluation can earn a mark.",
            "**Answer the question asked**: if it says 'find the range', your final line must be an inequality such as -4 ≤ f(x) ≤ 5, not a list of points.",
            "**Check the command word**: 'State' needs no working; 'Find' or 'Determine' needs the supporting lines.",
          ],
          commonMistakes: [
            "**Ignoring the restricted domain**: students find the range of x² - 4x as f(x) ≥ -4 and forget the upper cap f(5) = 5 — this happens when the formula is treated in isolation. Fix: always ask 'what x-values am I actually allowed?'.",
            "**Confusing domain and range**: the domain is read along the x-axis, the range along the y-axis. Fix: label your axes before reading values off.",
            "**Forgetting to check endpoints**: a turning point may lie outside the given domain. Fix: evaluate f at every boundary, every time.",
            "**Thinking range equals codomain**: the codomain is only the set outputs are declared to land in; the range is what is actually produced. Fix: describe the range with inequalities about what is actually hit.",
            "**Sign slips when substituting**: f(-2) for f(x) = 3x - 2 gives -8, not 4. Fix: bracket negative inputs, f(-2) = 3(-2) - 2.",
          ],
          recap: [
            "f(x) = 2x² - 8x + 5 has domain 0 ≤ x ≤ 5. Express f(x) in the form a(x + p)² + q and hence state the range of f. [4]",
            "The function g is defined by g(x) = √(x - 3) for x ≥ 3. State the range of g. [1]",
            "h(x) = 1/(x + 2). State the largest possible domain of h and explain your answer. [2]",
            "f(x) = x² + 1 for x ≥ 0. Find f(3) and f(a + 1) in terms of a. [3]",
          ],
        },
        {
          title: "One-to-One Functions and Inverse Functions",
          body: "A function is ==one-to-one== when different inputs always give different outputs, so no horizontal line cuts its graph more than once (the Horizontal Line Test). Only one-to-one functions have inverses that are also functions: if two inputs share an output, the reverse rule would have to send one input to two outputs, which is not allowed. A ==many-to-one== function such as f(x) = x² (over all real x) can be made one-to-one by restricting its domain, and then its inverse exists on that restriction.\n\nTo find the inverse of y = f(x): write y = f(x), rearrange to make x the subject, then swap the letters so the output variable is x. The inverse 'undoes' the function: f⁻¹(f(x)) = x and f(f⁻¹(x)) = x. The graph of y = f⁻¹(x) is the reflection of y = f(x) in the line y = x, which means the domain of f equals the range of f⁻¹, and the range of f equals the domain of f⁻¹.\n\n## Worked example 1 — easy\nFind f⁻¹(x) for f(x) = 5x - 7.\n- **Step 1 — Write y = f(x).** y = 5x - 7\n- **Step 2 — Make x the subject.** 5x = y + 7, so x = (y + 7)/5\n- **Step 3 — Swap letters.** f⁻¹(x) = (x + 7)/5\n- **Step 4 — Check.** f⁻¹(f(x)) = (5x - 7 + 7)/5 = 5x/5 = **x**\n\n## Worked example 2 — exam grade\nf(x) = (3x - 2)/(x + 1) for x ≠ -1. Find f⁻¹(x) and state its domain.\n- **Step 1 — Set y = (3x - 2)/(x + 1).** Multiply up: y(x + 1) = 3x - 2\n- **Step 2 — Collect x terms.** xy + y = 3x - 2, so xy - 3x = -2 - y, so x(y - 3) = -(y + 2)\n- **Step 3 — Solve.** x = (y + 2)/(3 - y)\n- **Step 4 — Swap letters and state the domain.** f⁻¹(x) = (x + 2)/(3 - x); the domain of f⁻¹ equals the range of f, which excludes the value 3, so **x ≠ 3**.",
          groups: [
            {
              subTitle: "Inverse function toolkit",
              bullets: [
                "**Horizontal Line Test**: if any horizontal line meets the graph more than once, the function is many-to-one and has no inverse (as a function).",
                "**Inverse procedure**: y = f(x), rearrange for x, interchange x and y — the result is y = f⁻¹(x).",
                "**Undo property**: f⁻¹(f(x)) = x and f(f⁻¹(x)) = x for every x in the relevant domains.",
                "**Reflection property**: the graphs of f and f⁻¹ are mirror images in the line y = x; corresponding coordinates swap, (a, b) becomes (b, a).",
                "**Domain swap**: domain of f⁻¹ = range of f; range of f⁻¹ = domain of f.",
                "**Self-inverse examples**: f(x) = 1/x and f(x) = a - x are each their own inverse, since f(f(x)) = x.",
              ],
            },
            {
              subTitle: "When an inverse fails to exist",
              bullets: [
                "**Many-to-one trap**: f(x) = x² on all real x has f(-3) = f(3) = 9, so no inverse function exists.",
                "**Restriction fix**: restrict the domain to x ≥ 0; then f⁻¹(x) = √x exists with range f⁻¹ ≥ 0.",
                "**Check before you start**: if a question says 'explain why f⁻¹ does not exist', answer with a counterexample pair, e.g. f(2) = f(-2).",
              ],
            },
          ],
          examinerTips: [
            "**Verify one-to-one before inverting**: if the question asks for f⁻¹, a quick 'f is one-to-one because...' line can earn the first mark.",
            "**Always state the domain of f⁻¹**: it equals the range of f; write x ≠ 3, not just the formula.",
            "**Use the reflection line**: for graph questions, draw y = x as a dashed mirror line and reflect key points (turning points, axis crossings) rather than the whole curve.",
            "**Show the rearrangement lines**: y(x + 1) = 3x - 2 and x(y - 3) = -2 - y are the working examiners mark; jumping to the answer risks losing method marks.",
            "**Sanity-check with composition**: evaluate f⁻¹(f(x)); if it does not simplify to x, an algebra slip has occurred — do this check on the answer line.",
          ],
          commonMistakes: [
            "**Swapping letters too early**: students write x = (3y - 2)/(y + 1) after swapping and then solve for y wrongly. Fix: rearrange in x and y FIRST, swap only at the end.",
            "**Forgetting the domain of f⁻¹**: the formula alone is incomplete. Fix: domain of f⁻¹ = range of f; find the excluded value from where the denominator would vanish.",
            "**Believing f⁻¹(x) means 1/f(x)**: f⁻¹ is the inverse mapping, not the reciprocal. Fix: read f⁻¹ as 'f inverse'; the reciprocal would be written 1/f(x).",
            "**Assuming every function has an inverse**: f(x) = x² over all real x does not. Fix: run the horizontal line test mentally before attempting f⁻¹.",
            "**Algebra slip collecting terms**: in xy + y = 3x - 2 the x-terms must be factorised as x(y - 3). Fix: move all x-terms to one side and factorise; never divide by an expression that might be zero.",
          ],
          recap: [
            "f(x) = 4x - 3. Find f⁻¹(x) and verify that f⁻¹(f(x)) = x. [3]",
            "Explain why the function g(x) = x² - 6x, x ∈ ℝ, does not have an inverse. State a restriction of the domain for which g⁻¹ does exist. [3]",
            "f(x) = (2x + 5)/(x - 3), x ≠ 3. Find f⁻¹(x) in the form (ax + b)/(cx + d) and state its domain. [5]",
            "The point (5, 2) lies on the curve y = f(x). Write down one point that lies on y = f⁻¹(x), and describe the transformation that maps y = f(x) onto y = f⁻¹(x). [2]",
          ],
        },
        {
          title: "Composite Functions",
          body: "A ==composite function== applies one function after another: fg(x) means 'first apply g, then apply f to the result', i.e. fg(x) = f(g(x)). Read composite notation from right to left — the function nearest the bracket acts first. Order matters: in general fg(x) ≠ gf(x), and examiners love asking you to demonstrate this with a specific counterexample. The composite only exists when the range of the inner function fits inside the domain of the outer function; for example if g(x) = x - 2 (range all real numbers) and f(x) = √x (domain x ≥ 0), then fg needs g(x) ≥ 0, i.e. x ≥ 2.\n\nThe inverse of a composite reverses the order: (fg)⁻¹(x) = g⁻¹f⁻¹(x) — 'socks and shoes' (you take off shoes then socks, the reverse of the order you put them on).\n\n## Worked example 1 — easy\nf(x) = 2x + 1 and g(x) = x².\n- **Step 1 — Evaluate fg(3).** g(3) = 9, then f(9) = 2(9) + 1 = **19**\n- **Step 2 — Evaluate gf(3).** f(3) = 7, then g(7) = **49**\n- **Step 3 — Conclude.** fg(3) = 19 ≠ 49 = gf(3), so fg ≠ gf in general.\n\n## Worked example 2 — exam grade\nf(x) = 3x - 5 and g(x) = 2/(x + 1) for x ≠ -1. Solve the equation fg(x) = 1.\n- **Step 1 — Form the composite.** fg(x) = f(g(x)) = 3 × 2/(x + 1) - 5 = 6/(x + 1) - 5\n- **Step 2 — Set equal to 1.** 6/(x + 1) - 5 = 1\n- **Step 3 — Solve.** 6/(x + 1) = 6, so x + 1 = 1, so **x = 0**\n- **Step 4 — Check.** g(0) = 2, f(2) = 1, which is correct.",
          groups: [
            {
              subTitle: "Composite function rules",
              bullets: [
                "**Definition**: fg(x) = f(g(x)) — apply g first, then f; read right to left.",
                "**Non-commutativity**: fg and gf are usually different functions; one counterexample pair of values proves they differ.",
                "**Existence condition**: fg exists only where g(x) lies in the domain of f; find and state any resulting restriction on x.",
                "**Domain of composite**: it is the set of x in the domain of g for which g(x) is in the domain of f.",
                "**Inverse of composite**: (fg)⁻¹ = g⁻¹f⁻¹ — reverse both the functions and the order.",
                "**Iterates**: ff(x) is written f²(x) in this context (it means f(f(x)), never [f(x)]² unless stated).",
              ],
            },
            {
              subTitle: "Solving composite equations",
              bullets: [
                "**Strategy 1 — Build then solve**: form f(g(x)) as a single expression, then solve the resulting equation in x.",
                "**Strategy 2 — Work inside out**: if fg(x) = k, first solve f(u) = k for u, then solve g(x) = u.",
                "**Strategy 2 example**: if fg(x) = 10 and f(u) = 3u - 5, then u = 5, so solve g(x) = 5.",
              ],
            },
          ],
          examinerTips: [
            "**Respect the order**: write out g(x) first as a separate line before substituting into f — this protects you from the classic fg/gf swap.",
            "**State restrictions**: when forming fg, note any x that must be excluded (here x ≠ -1); losing this line can cost the final accuracy mark.",
            "**Use the inside-out method when f is easy to invert**: solving f(u) = k first often avoids messy fractions entirely.",
            "**Verify solutions by substitution**: one quick check (Step 4 in the example) catches most slips in fractional equations.",
            "**For (fg)⁻¹ questions**: find the inverses of f and g separately, then present g⁻¹f⁻¹(x) with the correct order stated in words.",
          ],
          commonMistakes: [
            "**Reading fg as f-then-g**: students compute f first. Fix: the function closest to the bracket acts first — say 'g then f' out loud while writing.",
            "**Assuming fg = gf**: squaring then doubling is not the same as doubling then squaring. Fix: test both at x = 3; if they differ, you have your proof.",
            "**Dropping the domain restriction**: g(x) = 2/(x + 1) is undefined at x = -1, so fg is too. Fix: carry exclusions from the inner function into your answer.",
            "**Solving fg(x) = k by dividing incorrectly**: 6/(x + 1) - 5 = 1 becomes 6/(x + 1) = 6 only after adding 5 to both sides, not before. Fix: undo operations in reverse order.",
            "**Writing [fg(x)]² for f²g(x)**: superscripts on the function name mean composition, not powers. Fix: read f²(x) as f(f(x)).",
          ],
          recap: [
            "f(x) = 3x + 2 and g(x) = x² - 1. Find fg(x) and gf(x), and show that fg ≠ gf. [4]",
            "f(x) = 2x - 3 for x ≥ 0 and g(x) = √(x + 4). Find fg(x) and state its domain. [4]",
            "f(x) = (x + 1)/(x - 2), x ≠ 2. Find f⁻¹(x) and hence solve f(x) = f⁻¹(x). [6]",
            "Given that fg(x) = 6x² - 1 and f(x) = 3x - 1, find g(x). [3]",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Quadratic Functions",
      intro:
        "Quadratic functions have the form f(x) = ax² + bx + c with a ≠ 0, and their graphs are parabolas. This chapter covers the three skills IGCSE papers test constantly: completing the square (to locate the vertex and state maxima, minima and ranges), using the discriminant b² - 4ac to classify roots and to find tangency conditions, and solving quadratic inequalities with correct interval notation. These tools reappear in trigonometric equations, simultaneous equations and even differentiation questions, so fluency here pays off across the whole paper. Every 0606 paper contains at least one substantial quadratic question, usually worth 6-10 marks.",
      subheadings: [
        {
          title: "Completing the Square and Graph Features",
          body: "Completing the square rewrites ax² + bx + c in the vertex form ==a(x + p)² + q==, which immediately reveals the parabola's turning point at (-p, q), its line of symmetry x = -p, and whether it opens upwards (a > 0, minimum) or downwards (a < 0, maximum). The method: halve the coefficient of x to get p, then balance the constant. When a ≠ 1, factor a out of the x-terms first and complete the square inside the bracket, multiplying the compensating term by a afterwards.\n\n## Worked example 1 — easy\nWrite x² + 6x + 2 in the form (x + p)² + q.\n- **Step 1 — Halve the x-coefficient.** p = 6/2 = 3\n- **Step 2 — Expand the square.** (x + 3)² = x² + 6x + 9\n- **Step 3 — Balance the constant.** x² + 6x + 2 = (x + 3)² - 9 + 2 = **(x + 3)² - 7**\n\n## Worked example 2 — exam grade\nf(x) = 2x² - 8x + 5. Express f(x) in the form a(x + p)² + q and hence state the minimum value of f and the equation of the line of symmetry.\n- **Step 1 — Factor out the 2 from the x-terms.** f(x) = 2(x² - 4x) + 5\n- **Step 2 — Complete the square inside.** Half of -4 is -2: x² - 4x = (x - 2)² - 4\n- **Step 3 — Rebuild.** f(x) = 2[(x - 2)² - 4] + 5 = 2(x - 2)² - 8 + 5 = **2(x - 2)² - 3**\n- **Step 4 — Read off the features.** Since 2(x - 2)² ≥ 0, the minimum value is -3 when x = 2; the line of symmetry is x = 2; the range is f(x) ≥ -3.",
          groups: [
            {
              subTitle: "Vertex form and what it tells you",
              bullets: [
                "**Vertex form**: f(x) = a(x + p)² + q has turning point (-p, q) — note the sign change on p.",
                "**Line of symmetry**: x = -p, a vertical line through the vertex.",
                "**Minimum vs maximum**: a > 0 gives a minimum (opens up); a < 0 gives a maximum (opens down).",
                "**Range**: from vertex form the range reads straight off, e.g. f(x) ≥ q for a > 0 with unrestricted domain.",
                "**y-intercept**: set x = 0; the curve crosses the y-axis at (0, c).",
                "**x-intercepts**: set f(x) = 0 and solve — these are the roots discussed in the next section.",
              ],
            },
            {
              subTitle: "The completing-the-square algorithm",
              bullets: [
                "**Coefficient of x² must be 1**: if a ≠ 1, factor a out of the x-terms only, never out of the constant.",
                "**Halve and square**: p = b/2; add and subtract p² inside the bracket.",
                "**Compensate outside**: the subtracted p² is multiplied by a when you multiply the bracket back out.",
                "**Final check**: expand your answer mentally — it must return the original quadratic.",
              ],
            },
          ],
          examinerTips: [
            "**Answer in the exact form requested**: if the question says a(x + p)² + q, give all three values a, p, q explicitly; 'hence' means you must use your completed-square form to answer the next part.",
            "**State 'minimum' or 'maximum' with the value**: 'minimum value = -3 at x = 2' is a complete answer worth both marks.",
            "**Use the completed square to justify the range**: write '(x - 2)² ≥ 0, so 2(x - 2)² - 3 ≥ -3' — this reasoning line earns the mark, not just the final inequality.",
            "**Keep exact fractions**: if p = 5/2, write (x + 5/2)² - 25/4 rather than decimals; exact values are required unless the question says otherwise.",
            "**Sketch when asked**: mark the vertex, y-intercept and axis of symmetry; a labelled sketch can rescue method marks even if the algebra slips.",
          ],
          commonMistakes: [
            "**Sign error on p**: x² + 6x becomes (x + 3)² but students often write (x - 3)². Fix: p = b/2, and the bracket is (x + p) — with b = +6 the bracket is (x + 3).",
            "**Forgetting to multiply the correction by a**: with 2(x² - 4x), the -4 inside becomes -8 outside, not -4. Fix: expand 2[(x - 2)² - 4] term by term to check.",
            "**Mixing up the turning point sign**: (x - 2)² has turning point x = +2, not -2. Fix: set the bracket equal to zero to find the x-coordinate.",
            "**Decimal approximations**: writing (x - 1.73)² for x² - 2√3x loses exactness marks. Fix: surds and fractions are exact — keep them.",
            "**Calling q the line of symmetry**: the line is x = -p (an equation), the extreme value is q (a number). Fix: give both, in the right vocabulary.",
          ],
          recap: [
            "Express 3x² - 12x + 7 in the form a(x + p)² + q, stating the values of a, p and q. [3]",
            "Find the maximum value of 5 - 2x - x² and the value of x at which it occurs. [4]",
            "The curve y = x² - 6x + 11 has line of symmetry x = k. Find k and the coordinates of the vertex. [3]",
            "f(x) = 2x² + 8x + 3 for x ≥ -2. Using your completed-square form, state the range of f. [4]",
          ],
        },
        {
          title: "The Discriminant and the Nature of Roots",
          body: "For ax² + bx + c = 0, the quadratic formula x = (-b ± √(b² - 4ac))/(2a) shows the nature of the solutions is controlled entirely by the ==discriminant== b² - 4ac. If b² - 4ac > 0 there are two distinct real roots; if b² - 4ac = 0 the roots are repeated (equal) and the curve touches the x-axis; if b² - 4ac < 0 there are no real roots and the curve never meets the x-axis. The discriminant is also the key to tangency: a line that just touches a curve makes the substituted quadratic have b² - 4ac = 0.\n\nFor roots α and β, the sum and product links α + β = -b/a and αβ = c/a let you build new equations without ever solving the original one.\n\n## Worked example 1 — easy\nDetermine the nature of the roots of x² - 5x + 6 = 0.\n- **Step 1 — Identify coefficients.** a = 1, b = -5, c = 6\n- **Step 2 — Evaluate.** b² - 4ac = (-5)² - 4(1)(6) = 25 - 24 = **1**\n- **Step 3 — Conclude.** 1 > 0, so there are two distinct real roots (indeed x = 2 and x = 3).\n\n## Worked example 2 — exam grade\nFind the values of k for which the line y = kx - 3 is a tangent to the curve y = x² - 4x + 1.\n- **Step 1 — Equate the expressions.** x² - 4x + 1 = kx - 3, so x² - (4 + k)x + 4 = 0\n- **Step 2 — Tangency condition.** A tangent touches once, so b² - 4ac = 0: (4 + k)² - 4(1)(4) = 0\n- **Step 3 — Solve.** (4 + k)² = 16, so 4 + k = ±4, giving **k = 0 or k = -8**\n- **Step 4 — Check sense.** k = 0 gives y = -3, which touches y = x² - 4x + 1 = (x - 2)² - 3 at its vertex (2, -3).",
          groups: [
            {
              subTitle: "Discriminant decision table",
              bullets: [
                "**b² - 4ac > 0**: two distinct real roots; the curve cuts the x-axis twice.",
                "**b² - 4ac = 0**: repeated (equal) real root; the curve touches the x-axis (the line is a tangent).",
                "**b² - 4ac < 0**: no real roots; the curve lies entirely above or below the x-axis.",
                "**Perfect square discriminant**: roots are rational — useful when a question asks about root structure.",
                "**Always write the condition explicitly**: 'for tangency, b² - 4ac = 0' is the line that earns the method mark.",
              ],
            },
            {
              subTitle: "Roots and coefficients (Vieta links)",
              bullets: [
                "**Sum of roots**: α + β = -b/a — the minus sign is the classic slip.",
                "**Product of roots**: αβ = c/a.",
                "**Building new quadratics**: a quadratic with roots α′ and β′ is x² - (sum)x + (product) = 0.",
                "**Example**: if α, β are roots of x² - 5x + 6 = 0, the equation with roots α², β² has sum 25 - 12 = 13 and product 36: x² - 13x + 36 = 0.",
              ],
            },
          ],
          examinerTips: [
            "**Name the condition**: begin tangency/equal-roots working with the sentence 'For equal roots, b² - 4ac = 0' — mark schemes attach a mark to stating the condition.",
            "**Simplify to zero first**: rearrange the substituted equation to ax² + bx + c = 0 before reading off a, b, c; identifying coefficients from an unsimplified form is the biggest source of errors.",
            "**Two values, two checks**: when (4 + k)² = 16 gives two answers, present both and verify each makes sense as a tangent.",
            "**Use the discriminant for intersection counts**: two distinct roots = two intersections; equal roots = tangent; no real roots = no intersection — say this in words.",
            "**Relate back to the graph**: a concluding sentence such as 'the line touches the curve at (2, -3)' shows full understanding and can pick up a final mark.",
          ],
          commonMistakes: [
            "**Sign errors reading b**: in x² - (4 + k)x + 4, b = -(4 + k), so b² = (4 + k)² — students sometimes write (4 - k)². Fix: bracket the whole coefficient including its minus sign before squaring.",
            "**Solving b² - 4ac > 0 like an equation**: inequalities from discriminants must keep their direction; squaring both sides of an inequality is invalid. Fix: solve the boundary equation, then test intervals.",
            "**Forgetting the 4 in 4ac**: b² - ac is a common wrong formula. Fix: memorise 'b squared minus FOUR a c' by saying it aloud.",
            "**Assuming tangent means gradients equal**: the clean method is the discriminant, not calculus, unless the question demands dy/dx.",
            "**Dropping one solution**: (4 + k)² = 16 needs ±; k = 0 alone loses half the marks. Fix: write 4 + k = 4 or 4 + k = -4.",
          ],
          recap: [
            "Find the discriminant of 2x² - 3x - 7 = 0 and hence state the number of real roots. [2]",
            "Find the value of k for which kx² + 4x + (k - 3) = 0 has equal roots. [4]",
            "The line y = x + c is a tangent to the curve y = x² + 3x + 5. Find the possible values of c. [5]",
            "The roots of x² - 6x + 4 = 0 are α and β. Find the value of α + β and of αβ, and hence write down the equation whose roots are 1/α and 1/β. [5]",
          ],
        },
        {
          title: "Quadratic Inequalities",
          body: "A ==quadratic inequality== such as ax² + bx + c > 0 is solved by finding the critical values (the roots of ax² + bx + c = 0), then deciding which intervals of the x-axis make the expression positive or negative. Because a parabola is continuous and only changes sign at its roots, the solution is always a union of intervals — the sketch, even a rough one, is what guarantees the correct choice of inequality directions. If the quadratic has no real roots, it never crosses the axis, so its sign everywhere equals the sign of a.\n\n## Worked example 1 — easy\nSolve x² - 3x - 4 < 0.\n- **Step 1 — Find critical values.** x² - 3x - 4 = (x - 4)(x + 1) = 0 gives x = 4 or x = -1\n- **Step 2 — Sketch.** y = (x - 4)(x + 1) is an upward parabola crossing the axis at -1 and 4.\n- **Step 3 — Read the region.** The expression is negative between the roots: **-1 < x < 4**\n\n## Worked example 2 — exam grade\nFind the set of values of x for which 2x² ≥ x + 6.\n- **Step 1 — Move everything to one side.** 2x² - x - 6 ≥ 0\n- **Step 2 — Factorise.** (2x + 3)(x - 2) ≥ 0, critical values x = -3/2 and x = 2\n- **Step 3 — Sketch and read.** Upward parabola; the expression is ≥ 0 outside the roots: **x ≤ -3/2 or x ≥ 2**\n- **Step 4 — Present the answer** as a union: {x : x ≤ -3/2} ∪ {x : x ≥ 2}\n\nFor 'between' answers keep strict inequalities with < (the endpoints are excluded); for 'outside' answers use ≤ and ≥ when the inequality allows equality.",
          groups: [
            {
              subTitle: "Solution method",
              bullets: [
                "**Critical values**: solve ax² + bx + c = 0; these split the number line into intervals.",
                "**Sign analysis**: a continuous quadratic changes sign only at its roots; determine the sign on each interval from a sketch.",
                "**Upward parabola (a > 0)**: positive outside the roots, negative between them.",
                "**Downward parabola (a < 0)**: the pattern reverses — or multiply through by -1 first (flipping the inequality) to restore a > 0.",
                "**No real roots**: the quadratic keeps the sign of a everywhere; x² + 2 > 0 is true for all x.",
                "**Always finish with interval notation**: 'x < -1 or x > 4', never '-1 > x > 4' (which means nothing).",
              ],
            },
            {
              subTitle: "Link to graphs",
              bullets: [
                "**Inequality as comparison**: solving x² - 4 < x + 2 asks where the parabola lies below the line — both intersection x-values come from the boundary equation.",
                "**Graphical check**: the boundary equation's roots are exactly the intersection points of the two curves.",
              ],
            },
          ],
          examinerTips: [
            "**Draw the sketch, however rough**: the upward/downward orientation of the parabola decides everything; one small sketch prevents interval-direction errors.",
            "**Rearrange to zero first**: only factorise after collecting everything on one side with the x² coefficient positive — this makes the sign pattern standard.",
            "**State answers in set/interval notation** exactly as mark schemes expect: 'x ≤ -3/2 or x ≥ 2' or using ∪ notation; the word 'or' (not 'and') joins the two regions.",
            "**Match the inequality sign at the boundary**: < and > exclude the roots (strict); ≤ and ≥ include them.",
            "**When asked to find the range of values of k**, you are solving an inequality in k — same technique, different variable.",
          ],
          commonMistakes: [
            "**Writing -1 > x > 4**: combining two one-sided inequalities into one chain is meaningless. Fix: join with 'or', or write x < -1, x > 4.",
            "**Reversing the regions**: for a > 0, the quadratic is positive OUTSIDE the roots; students frequently swap this. Fix: test x = 0 (or any convenient point) to confirm the sign.",
            "**Forgetting to flip when multiplying by -1**: -x² + 3x + 4 > 0 needs care. Fix: multiply by -1 to get x² - 3x - 4 < 0 and flip the sign.",
            "**Including endpoints for strict inequalities**: x² - 3x - 4 < 0 excludes -1 and 4 because the expression equals zero there. Fix: equality is allowed only when the sign is ≤ or ≥.",
            "**Stopping at the roots**: giving x = -1, x = 4 as the answer solves the equation, not the inequality. Fix: reread the question — it asks for a set of values.",
          ],
          recap: [
            "Solve the inequality x² - 5x + 6 ≤ 0. [3]",
            "Find the set of values of x for which 3 + 2x - x² > 0. [3]",
            "Solve 2x² + 5x - 3 ≥ 0, giving your answer in exact form. [4]",
            "Find the range of values of k for which x² + kx + 9 > 0 for all real x. [4]",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Equations, Inequalities and Graphs",
      intro:
        "This chapter is about seeing algebra pictorially. You will learn to sketch cubic polynomials and reciprocal curves such as y = 1/x from their equations, to draw modulus graphs y = |f(x)| by reflecting the negative parts of f in the x-axis, and to use those sketches to solve equations and inequalities. Papers frequently ask for a solution 'graphically' or expect a labelled sketch to support an algebraic answer — the graph is a working tool, not decoration. Marks are awarded for correct intercepts, asymptotes and the reflected sections of modulus graphs, so train yourself to label everything you draw.",
      subheadings: [
        {
          title: "Sketching Polynomial and Reciprocal Graphs",
          body: "To sketch a cubic y = (x - a)(x - b)(x - c) with distinct roots: mark the x-intercepts at x = a, b, c, the y-intercept at x = 0, and note the end behaviour — for a positive cubic, y → +∞ as x → +∞ and y → -∞ as x → -∞. ==Repeated factors change the behaviour==: a double factor makes the graph touch the axis and turn, while a triple factor makes it flatten as it passes through. For reciprocal graphs y = k/x the axes are asymptotes: the curve never touches them, approaching the x-axis as x → ±∞ and the y-axis as x → 0, and the curve lies in quadrants 1 and 3 when k > 0, quadrants 2 and 4 when k < 0.\n\n## Worked example 1 — easy\nSketch y = (x - 1)(x - 2)(x + 1).\n- **Step 1 — Find intercepts.** x-intercepts at x = -1, 1, 2; y-intercept at (0, (-1)(-2)(1)) = (0, 2)\n- **Step 2 — End behaviour.** Positive leading term: up to the right, down to the left.\n- **Step 3 — Connect.** Cross at all three simple roots, passing through (0, 2): a standard cubic with two turning points.\n\n## Worked example 2 — exam grade\nSolve the inequality (x - 1)(x - 2)(x + 1) > 0.\n- **Step 1 — Critical values.** x = -1, 1, 2\n- **Step 2 — Sign table.** For x > 2 all three factors are positive (product +); between 1 and 2 the factor (x - 2) is negative (product -); between -1 and 1 two factors are negative (product +); below -1 all three factors are negative (product -).\n- **Step 3 — Select positive regions.** **-1 < x < 1 or x > 2**",
          groups: [
            {
              subTitle: "Sketching checklist",
              bullets: [
                "**Factorise first**: roots are read directly from the factors; expand only if a question demands it.",
                "**y-intercept**: set x = 0 and evaluate — a mark is routinely attached to it.",
                "**End behaviour**: odd degree with positive leading coefficient gives opposite infinities at the two ends.",
                "**Repeated root**: a squared factor touches the axis (turning point on the axis); a cubed factor passes through horizontally.",
                "**Asymptotes of y = k/x**: both coordinate axes; draw them dashed and never let the curve touch them.",
                "**y = k/x²**: both branches are above the x-axis for k > 0 — a different shape from y = k/x.",
              ],
            },
            {
              subTitle: "Solving polynomial inequalities",
              bullets: [
                "**Critical values** from f(x) = 0 partition the axis; the sign alternates across each simple root.",
                "**Multiplicity rule**: the sign changes at a root of odd multiplicity and does not change at even multiplicity.",
                "**Present** the answer as intervals joined by 'or', matching the inequality's strictness.",
              ],
            },
          ],
          examinerTips: [
            "**Label every intercept on the sketch**: coordinates such as (-1, 0), (0, 2) are what the mark scheme lists; unlabelled crossings earn nothing.",
            "**Draw asymptotes as dashed lines** and state their equations (x = 0, y = 0 for y = k/x) — two easy marks.",
            "**Use a sign table** in inequality questions: it is compact, rigorous and earns method marks even if the final region is misread.",
            "**State the end behaviour in words** when asked to 'describe' a graph: 'as x → ∞, y → ∞'.",
            "**Scale honesty**: a sketch does not require a perfect scale, but intercepts must be in the correct relative positions.",
          ],
          commonMistakes: [
            "**Ignoring multiplicity**: students treat a double root as a crossing; the graph should touch and turn. Fix: count the power of each factor — odd crosses, even touches.",
            "**Wrong end behaviour**: sketching a positive cubic rising on both sides. Fix: check the leading term's sign and the degree's parity before drawing.",
            "**Curves crossing asymptotes**: y = 1/x drifting through the x-axis. Fix: remind yourself the curve approaches but never meets the axis; add arrows to show the trend.",
            "**Sign table built on an un-factorised expression**: expanding first makes the arithmetic heavy and error-prone. Fix: keep factored form and track each factor's sign.",
            "**Forgetting the y-intercept**: the easiest mark on the paper. Fix: it is always f(0) — compute it automatically.",
          ],
          recap: [
            "Sketch the curve y = (x + 2)(x - 1)(x - 3), labelling all intercepts. [4]",
            "Solve the inequality (x + 2)(x - 1)(x - 3) ≤ 0. [3]",
            "Sketch y = 4/x, stating the equations of the asymptotes and the quadrants it occupies. [3]",
            "Describe how the graph of y = (x - 2)²(x + 1) differs from y = (x - 2)(x + 1)² near each intercept. [3]",
          ],
        },
        {
          title: "Modulus Functions: Graphs, Equations and Inequalities",
          body: "The ==modulus== (absolute value) |x| means the distance of x from zero on the number line, so |x| = x when x ≥ 0 and |x| = -x when x < 0; it is never negative. The graph of y = |f(x)| takes the graph of y = f(x) and reflects any part below the x-axis upward in the x-axis. The graph of y = f(|x|) instead reflects the right-hand half in the y-axis, producing a graph symmetric about x = 0.\n\nAlgebraically, |A| = B requires B ≥ 0 and then A = B or A = -B — solve both cases and reject any solution that violates B ≥ 0. The inequality |x - a| < b with b > 0 is equivalent to a - b < x < a + b, readable as 'x is within distance b of a'.\n\n## Worked example 1 — easy\nSolve |2x - 3| = 5.\n- **Step 1 — Positive case.** 2x - 3 = 5, so 2x = 8, x = 4\n- **Step 2 — Negative case.** 2x - 3 = -5, so 2x = -2, x = -1\n- **Step 3 — Answer.** **x = 4 or x = -1**\n\n## Worked example 2 — exam grade\nSolve |x + 1| = 2x - 1.\n- **Step 1 — Case A: x + 1 = 2x - 1**, so x = 2. Check the right side is non-negative: 2(2) - 1 = 3 ≥ 0, accept.\n- **Step 2 — Case B: -(x + 1) = 2x - 1**, so -x - 1 = 2x - 1, giving 3x = 0, x = 0. Check the right side: 2(0) - 1 = -1 < 0, reject.\n- **Step 3 — Answer.** **x = 2 only**",
          groups: [
            {
              subTitle: "Modulus rules",
              bullets: [
                "**Definition**: |x| = x if x ≥ 0; |x| = -x if x < 0; equivalently |x| = √(x²).",
                "**Key properties**: |ab| = |a||b| and |a/b| = |a|/|b|; the triangle inequality |a + b| ≤ |a| + |b|.",
                "**Equation |A| = B**: requires B ≥ 0, then A = B or A = -B; check every candidate against B ≥ 0.",
                "**Equation |A| = |B|**: equivalent to A = B or A = -B, with no sign restriction.",
                "**Inequality |x - a| < b** (b > 0): means -b < x - a < b, i.e. a - b < x < a + b.",
                "**Inequality |x - a| > b**: means x < a - b or x > a + b.",
              ],
            },
            {
              subTitle: "Graphs of modulus functions",
              bullets: [
                "**y = |f(x)|**: reflect the part of y = f(x) below the x-axis in the x-axis; anything on or above stays fixed.",
                "**y = f(|x|)**: draw y = f(x) for x ≥ 0, then reflect that half in the y-axis; the result is symmetric about x = 0.",
                "**Corner points**: the graph of |linear| has sharp corners (vertices) where the inside expression is zero — mark their coordinates.",
              ],
            },
          ],
          examinerTips: [
            "**Always run the B ≥ 0 check**: for |A| = B, writing 'require 2x - 1 ≥ 0, so x ≥ 1/2' before solving earns the method mark and makes rejection of false roots automatic.",
            "**Two cases, two headings**: label Case A and Case B clearly; examiners award marks per case.",
            "**For inequalities use the distance reading**: |x - 2| ≤ 3 is 'x within 3 of 2', instantly giving -1 ≤ x ≤ 5 — quote both forms.",
            "**Sketch for graphical requests**: draw y = |f(x)| and the horizontal line y = k; solutions are the x-coordinates of intersections — state that you are reading them off.",
            "**Vertex coordinates first**: when sketching y = |ax + b|, find where ax + b = 0 and evaluate; the vertex sits on the x-axis at that point.",
          ],
          commonMistakes: [
            "**Accepting impossible roots**: in |x + 1| = 2x - 1, x = 0 comes out of the algebra but makes the right side negative — impossible since a modulus cannot equal a negative number. Fix: run the B ≥ 0 check after every case.",
            "**Solving |A| = |B| with a B ≥ 0 check**: no restriction is needed when both sides are moduli; adding one wrongly discards valid roots.",
            "**Forgetting the ±**: |2x - 3| = 5 solved as only 2x - 3 = 5 loses half the answer. Fix: 'modulus equals a positive number → two equations'.",
            "**Flipping the inequality regions**: |x - 2| < 3 is BETWEEN, not outside. Fix: remember |x - a| < b means 'close to a'; the < sign pairs with a between-region.",
            "**Reflecting y = f(|x|) in the wrong axis**: it is the y-axis reflection of the right half only. Fix: test a value, e.g. f(|-3|) = f(3), so (-3, f(3)) must be on the graph.",
          ],
          recap: [
            "Solve |3x - 2| = 7. [2]",
            "Solve the inequality |2x - 5| ≤ 3. [3]",
            "Solve |x - 3| = 2x. [4]",
            "Sketch y = |2x - 4| + 1, labelling the vertex and axis intercepts. [4]",
          ],
        },
        {
          title: "Solving Inequalities with Graphs",
          body: "Many 0606 questions ask where one curve lies above another: solve f(x) > g(x) by sketching both graphs, finding their intersection x-values from f(x) = g(x), and reading which side puts one graph on top. The boundary equation f(x) = g(x) is usually a quadratic or cubic whose roots partition the axis. This graphical viewpoint also explains the discriminant work of Chapter 2: the number of intersections of a line and a curve equals the number of real roots of the substituted equation.\n\n## Worked example 1 — easy\nUsing a sketch, solve x² - 4 < x + 2.\n- **Step 1 — Find intersections.** x² - 4 = x + 2, so x² - x - 6 = 0, so (x - 3)(x + 2) = 0, giving x = -2 or x = 3\n- **Step 2 — Identify the region.** The parabola lies below the line between the intersections.\n- **Step 3 — Answer.** **-2 < x < 3**\n\n## Worked example 2 — exam grade\nFind the values of x for which |x - 2| < x/2 + 1.\n- **Step 1 — Find the boundary.** |x - 2| = x/2 + 1. Case A: x - 2 = x/2 + 1, so x/2 = 3, x = 6. Case B: -(x - 2) = x/2 + 1, so -x + 2 = x/2 + 1, so 1 = 3x/2, x = 2/3.\n- **Step 2 — Sketch both.** y = |x - 2| is a V with vertex (2, 0); y = x/2 + 1 passes through (0, 1) and (6, 4).\n- **Step 3 — Read the region.** The V lies below the line between the intersections: **2/3 < x < 6**\n- **Step 4 — Test a value.** x = 2 gives 0 < 2, true — the region is correct.",
          groups: [
            {
              subTitle: "Graphical solution method",
              bullets: [
                "**Boundary equation**: solve f(x) = g(x); its roots are the intersection x-coordinates.",
                "**Region selection**: pick a test point between critical values, or read from the sketch which curve is on top.",
                "**Inequality direction**: f(x) > g(x) means the region where f's graph lies above g's graph.",
                "**Discriminant link**: intersections of a line and a curve correspond to roots; b² - 4ac counts them.",
                "**Modulus comparisons**: sketch y = |f(x)| alongside the other graph; intersections give the boundary values.",
              ],
            },
            {
              subTitle: "Answer presentation",
              bullets: [
                "**Sketch + algebra**: even when solving algebraically, a small sketch shows the examiner you chose the correct region.",
                "**Interval notation**: give the final answer with 'or'/union as needed and correct strictness.",
                "**State the reading**: 'from the graph, the curve is above the line for...' connects the picture to the answer.",
              ],
            },
          ],
          examinerTips: [
            "**Label both curves** on the sketch; an unlabelled sketch cannot be credited fully.",
            "**Show the boundary algebra** even in a graphical question — the intersections must come from solving an equation, not from a ruler measurement.",
            "**Test-point verification**: substituting x = 2 into |x - 2| < x/2 + 1 gives 0 < 2, confirming 2 lies in the solution set — a five-second check that catches region swaps.",
            "**When the question says 'by sketching'**, the graphical method is mandatory; unsupported pure algebra earns limited credit.",
            "**Combine with discriminant knowledge**: 'explain why the curves never meet' is answered by b² - 4ac < 0, stated in words plus numbers.",
          ],
          commonMistakes: [
            "**Choosing the wrong region**: students answer x < 2/3 or x > 6 for the worked example. Fix: test one value from each candidate region in the original inequality.",
            "**Solving the wrong boundary equation**: setting f(x) = 0 instead of f(x) = g(x). Fix: intersections are where the TWO expressions are equal.",
            "**Reading intersections off a poor sketch**: a line and a V that miss by eye. Fix: always compute boundary values algebraically; the sketch only selects the region.",
            "**Mixing degrees of strictness**: writing 2/3 ≤ x ≤ 6 when the inequality is strict. Fix: equality happens exactly at the boundary — check the original sign.",
            "**Forgetting that modulus graphs have corners**: intersections can occur exactly at a vertex, which the Case A/Case B algebra handles but a smooth freehand sketch may hide.",
          ],
          recap: [
            "Find the set of values of x for which x² < 3x + 4. [4]",
            "By sketching suitable graphs, solve |x - 1| < x + 2. [4]",
            "The curve y = x² + k does not intersect the line y = 3x. Find the range of values of k. [4]",
            "Solve the inequality (x - 1)(x - 3) > 0 by sketching the curve y = (x - 1)(x - 3). [3]",
          ],
        },
      ],
    },
    // <<NEXT>>
  ],
};
