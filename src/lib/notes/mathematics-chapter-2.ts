import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math2-algebra-tiles.webp",
    alt: "Wooden algebra tiles on a desk: large squares, long rods and small unit cubes sorted into two groups separated by a pencil line",
    caption: "Like terms are the same shape",
  },
  {
    src: "math2-difference-of-squares.webp",
    alt: "A large paper square with a corner cut out, the small cut-off square and a plain rectangle laid beside it on a green cutting mat with scissors",
    caption: "Cut a corner out, get two brackets",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math2-simultaneous-lines.webp",
    alt: "Two straight lines drawn in different coloured ink on graph paper, crossing at a single point circled in pencil",
    caption: "The crossing point is the solution",
  },
  {
    src: "math2-shaded-region.webp",
    alt: "Graph paper with several straight lines, one side of each hatched in pencil so an unshaded polygonal region is left clear in the middle",
    caption: "Shade what you do not want",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math2-travel-graph.webp",
    alt: "A hand-drawn distance-time graph in an exercise book with a rising steep section, a flat section and a gentler rise, a ruler lying across the page",
    caption: "Flat means stopped, steep means fast",
  },
  {
    src: "math2-tangent-gradient.webp",
    alt: "A smooth curve drawn on graph paper with a straight ruler laid touching it at one point, and a small right-angled triangle sketched under the ruler",
    caption: "Gradient at a point = tangent",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Algebra & Sequences",
  intro: `Algebra is the language that lets you write one rule and apply it to any number.\n\nThis chapter builds that language from scratch — naming the parts of an expression, learning how to manipulate them, and finishing with sequences, where algebra becomes a machine that generates any term on demand.\n\nEvery skill here feeds into every later topic: equations, graphs, geometry proofs, and statistics all lean on what you practise in this chapter.`,
  subheadings: [
    {
      title: "Algebraic Notation",
      body: `Algebra replaces specific numbers with **letters** so that one statement can describe infinitely many situations. A **variable** is a letter standing for an unknown or changing quantity, a **coefficient** is the number multiplying it, and a **constant** is a fixed number with no letter attached. Together, coefficients, variables and constants combine into **terms**, terms combine into **expressions**, and when two expressions are set equal you get an **equation**, an **identity**, or a **formula**.`,
      groups: [
        {
          subTitle: "The vocabulary at a glance",
          bullets: [
            "**Variable** — a letter such as x, y or n that represents a quantity whose value is not yet fixed; e.g. in 5x + 3 the variable is x.",
            "**Coefficient** — the number in front of a variable; in 5x the coefficient is 5, and in −x the coefficient is −1 (not 0 and not blank).",
            "**Constant** — a plain number term with no letter; in 5x + 3 the constant is 3.",
            "**Term** — a single piece of an expression, either a number, a variable, or a product of both; e.g. 3x², −7y and 4 are all terms.",
            "**Expression** — a collection of terms joined by + or −, with no equals sign; e.g. 4x² − 3x + 1.",
            "**Equation** — a statement that two expressions are equal for specific values of the variable; e.g. 2x + 1 = 9 is true only when x = 4.",
            "**Identity** — a statement that is true for every value of the variable, shown with ≡; e.g. 3(x + 2) ≡ 3x + 6.",
            "**Formula** — a rule connecting two or more quantities, often named; e.g. A = lw links area, length and width.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Calling an expression an equation — an expression has no equals sign and cannot be 'solved', only simplified or evaluated.",
            "Writing the coefficient of −x as 0 instead of −1; always include the sign as part of the coefficient.",
            "Confusing an identity with an equation — an identity holds for all values, so trying to 'solve' it has no meaning.",
          ],
        },
      ],
    },
    {
      title: "Algebraic Vocabulary",
      body: `Knowing the correct name for an algebraic object lets you follow instructions precisely and write accurate working. An **expression** has no equals sign; an **equation** has one and is true for specific values; a **formula** has one and defines a relationship between named quantities; an **identity** has ≡ and is true for every value. The **degree** of a term is the sum of the powers of all its variables, so 4x²y has degree 3.`,
      groups: [
        {
          subTitle: "Telling the objects apart",
          bullets: [
            "**Expression** — e.g. 3x² − 2x + 5; no equals sign, cannot be solved, can be simplified or factorised.",
            "**Equation** — e.g. 3x² − 2x − 1 = 0; has an equals sign and is satisfied only by specific values of x.",
            "**Formula** — e.g. v = u + at; connects named real-world quantities and can be rearranged to change the subject.",
            "**Identity** — e.g. (x + 1)² ≡ x² + 2x + 1; true for every value of x, so the left and right sides simplify to the same thing.",
            "**Degree of a term** — the sum of all the powers in that term; 5x³ has degree 3, 2x²y has degree 3, and 7 has degree 0.",
            "**Degree of an expression** — equal to the degree of its highest-degree term; x³ − 4x + 2 is a cubic (degree 3) expression.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Using 'equation' when asked to write an expression — the question says no equals sign, so adding one makes the answer wrong.",
            "Giving the degree of 2x²y as 2 by reading only the power on x; the total is 2 + 1 = 3.",
            "Saying an identity is 'true sometimes' — it must hold for every value, which is what ≡ signals.",
          ],
        },
      ],
    },
    {
      title: "Substitution",
      body: `**Substitution** means replacing every letter in an expression with the number it stands for and then evaluating the result. The key rule is that **BIDMAS applies in full** once the numbers are in place: brackets first, then indices, then division and multiplication, then addition and subtraction. The most common error is with negative values — if x = −3 then x² = (−3)² = 9, not −9, because the square applies to the whole value including the sign.`,
      groups: [
        {
          subTitle: "Carrying out a substitution",
          bullets: [
            "**Write brackets around every substituted value** before evaluating — this forces BIDMAS and prevents sign errors; substitute x = −3 as (−3), never as plain −3.",
            "**Indices before anything else** after substituting — in 2x³ with x = 2, work out 2³ = 8 first, then multiply by 2 to get 16.",
            "**x² always gives a positive result** when x is real and non-zero, because (−a)² = a²; only an odd power preserves the sign.",
            "**Substitute into every term** — in 3x − x² with x = −2 you get 3(−2) − (−2)² = −6 − 4 = −10, not −6 + 4.",
            "**Re-read the question after substituting** to check you have replaced every occurrence of the variable, not just the first one.",
            "**Negative times negative gives positive** — in −4x with x = −5 you get −4 × (−5) = 20, not −20.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Squaring the coefficient but not the variable, or the variable but not the sign — always wrap the whole substituted value in a bracket.",
            "Applying addition before indices: in 1 + x² with x = 3, write 1 + (3²) = 1 + 9 = 10, not (1 + 3)² = 16.",
            "Forgetting to substitute into every term of the expression — scan term by term after writing the answer.",
          ],
        },
      ],
    },
    {
      title: "Collecting Like Terms",
      body: `**Like terms** are terms that have exactly the same letter part, including the same powers — only the coefficient may differ. To simplify an expression, **add or subtract the coefficients** of like terms and leave the letter part unchanged. The letters themselves are just labels; they do not change when you collect. For example, 3x + 5y − x + 2y simplifies to **2x + 7y** because the x-group gives 3 − 1 = 2 and the y-group gives 5 + 2 = 7.`,
      groups: [
        {
          subTitle: "Rules for collecting",
          bullets: [
            "**Like terms must have identical letter parts** — 3x and 3x² are not like, because the powers differ; 5xy and 5yx are like, because multiplication is commutative.",
            "**Only the coefficients are combined** — the letter part stays the same; 4a + 7a = 11a, not 11a².",
            "**Subtraction changes the sign** of the coefficient being subtracted; 8p − 11p = −3p.",
            "**Terms with no matching pair stay unchanged** — in 4x + 3y − 2x the y term has no partner, so it stays as 3y.",
            "**Work on one group of like terms at a time** to avoid mixing — circle or underline matching terms before combining them.",
            "**Constants collect with constants** — 7 + 3x − 2 simplifies to 3x + 5 because 7 and −2 are like terms (both constants).",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Combining unlike terms such as 3x + 2y into 5xy — unlike terms cannot be merged; they must stay separate.",
            "Forgetting the sign: in 6a − 9a the result is −3a, not 3a; treat the minus sign as part of the second coefficient.",
            "Collecting powers incorrectly: x² + x ≠ x³ — these are unlike terms and cannot be combined.",
          ],
        },
      ],
    },
    {
      title: "Simplifying Algebraic Fractions",
      body: `An **algebraic fraction** is a fraction whose numerator, denominator, or both contain algebraic expressions. To simplify, **factorise both the numerator and the denominator completely**, then cancel any factor that appears in both. Only factors that multiply the entire numerator or denominator can be cancelled — never cancel individual terms. For example, (x² − 4)/(x − 2) becomes (x + 2)(x − 2)/(x − 2) = **x + 2** after recognising the **difference of two squares** in the numerator.`,
      groups: [
        {
          subTitle: "Steps for simplifying",
          bullets: [
            "**Factorise the numerator** fully — look for a common factor first, then try difference of two squares or trinomial factorisation.",
            "**Factorise the denominator** fully by the same process.",
            "**Cancel common factors** — a factor must multiply the whole expression on its level, not just one term.",
            "**Difference of two squares** — a² − b² = (a + b)(a − b) is the most common factorisation needed; e.g. x² − 9 = (x + 3)(x − 3).",
            "**After cancelling, check whether anything else simplifies** — sometimes cancelling reveals a further common factor.",
            "**State any restriction** — after cancelling (x − 2) from (x² − 4)/(x − 2) the result x + 2 is only valid when x ≠ 2.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Cancelling terms instead of factors — (x² + 4)/(x + 4) does NOT simplify to x; the numerator does not factorise to include (x + 4).",
            "Forgetting to factorise first and trying to cancel in an unfactorised expression — always factorise both top and bottom before attempting to cancel.",
            "Stopping after finding one factor when a second exists — always check whether the remaining expression can be factorised further.",
          ],
        },
      ],
    },
    {
      title: "Algebraic Roots and Indices",
      body: `The **index laws** that apply to numbers apply equally to algebraic expressions — the base just happens to be a letter. The five laws are: multiply → add indices (xᵃ × xᵇ = xᵃ⁺ᵇ), divide → subtract (xᵃ ÷ xᵇ = xᵃ⁻ᵇ), power of a power → multiply (( xᵃ)ᵇ = xᵃᵇ), zero power → one (x⁰ = 1), and fractional power → root (x^(1/n) = ⁿ√x). Applying these lets you simplify expressions like (2x³)² = 4x⁶ or x^(1/2) × x^(3/2) = x² in a single step.`,
      groups: [
        {
          subTitle: "Applying the index laws",
          bullets: [
            "**Multiply same base → add indices** — x² × x³ = x⁵; with coefficients, multiply those separately: 3x² × 4x³ = 12x⁵.",
            "**Divide same base → subtract indices** — x⁷ ÷ x³ = x⁴; a negative result gives a negative index: x² ÷ x⁵ = x⁻³ = 1/x³.",
            "**Power of a power → multiply indices** — (x⁴)³ = x¹²; for (2x³)² raise the coefficient too: 2² × x⁶ = 4x⁶.",
            "**Fractional index as a root** — x^(1/2) = √x, x^(1/3) = ∛x, x^(2/3) = (∛x)²; evaluate the root first, then apply the integer power.",
            "**Negative index as a reciprocal** — x⁻² = 1/x²; to simplify, rewrite the negative index before substituting a value.",
            "**Mixed variables** — x²y³ × x⁴y = x⁶y⁴; apply the law to each variable's index independently.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Raising the index but not the coefficient in a bracket: (3x²)³ = 27x⁶, not 3x⁶.",
            "Adding indices when bases differ: x² × y³ cannot be simplified using index laws because the bases are different.",
            "Applying a fractional index as division: x^(2/3) means take the cube root then square, not divide by 3 then take to the power 2.",
          ],
        },
      ],
    },
    {
      title: "Expanding and Simplifying Single Brackets",
      body: `**Expanding a bracket** means multiplying the term outside by every term inside, one at a time, to remove the bracket entirely. The rule is simple: a(b + c) = ab + ac. The process is called the **distributive law**. The most important thing to track is the **sign** of the multiplier — if it is negative, every product inside changes sign: −2(x + 4) = −2x − 8, not −2x + 4.`,
      groups: [
        {
          subTitle: "Expanding step by step",
          bullets: [
            "**Multiply the outside term by the first term inside**, keeping the sign: 3 × 2x = 6x.",
            "**Then multiply by every remaining term**, keeping signs: 3(2x − 5) → 3 × 2x = 6x and 3 × (−5) = −15, giving 6x − 15.",
            "**Negative outside → all signs inside flip** — −2(x + 4) = −2x − 8; both products are negative.",
            "**Collect like terms after expanding** when there is more than one bracket or extra terms: 2(3x + 1) + 4(x − 3) = 6x + 2 + 4x − 12 = 10x − 10.",
            "**A bracket with no visible coefficient has an implicit 1** — (x + 5) means 1(x + 5) = x + 5; −(x + 5) means −1(x + 5) = −x − 5.",
            "**Check by substituting a simple value** after expanding to confirm the expanded form equals the original expression.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Multiplying only the first term inside the bracket and leaving the rest unchanged: 3(2x − 5) ≠ 6x − 5.",
            "Keeping the bracket after expanding — once expanded, the bracket is gone; writing 6x − 15( ) is wrong.",
            "Dropping the minus sign on the second product when the multiplier is negative: −2(x + 4) = −2x − 8, not −2x + 4.",
          ],
        },
      ],
    },
    {
      title: "Expanding Double Brackets",
      body: `To expand a product of two brackets, every term in the first bracket must multiply every term in the second. The **FOIL method** (First, Outer, Inner, Last) guarantees all four products are found: (x + 3)(x − 5) gives x² (First), −5x (Outer), 3x (Inner) and −15 (Last), combining to **x² − 2x − 15**. Two special patterns appear so often they are worth memorising: **(a + b)² = a² + 2ab + b²** (perfect square) and **(a + b)(a − b) = a² − b²** (difference of two squares).`,
      groups: [
        {
          subTitle: "Expanding with FOIL",
          bullets: [
            "**First** — multiply the first terms of each bracket: x × x = x².",
            "**Outer** — multiply the outer pair: x × (−5) = −5x.",
            "**Inner** — multiply the inner pair: 3 × x = 3x.",
            "**Last** — multiply the last terms: 3 × (−5) = −15.",
            "**Collect the middle terms** — combine −5x + 3x = −2x to reach x² − 2x − 15.",
            "**Perfect square shortcut** — (a + b)² = a² + 2ab + b²; e.g. (x + 4)² = x² + 8x + 16.",
            "**Difference of two squares shortcut** — (a + b)(a − b) = a² − b²; e.g. (x + 7)(x − 7) = x² − 49.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Forgetting the two middle (Outer and Inner) products and writing (x + 3)(x − 5) = x² − 15.",
            "Applying the perfect square as (a + b)² = a² + b² — the middle term 2ab is always missing from this mistake.",
            "Getting the sign wrong in a difference of two squares: (x − 7)² ≠ x² − 49; (x − 7)² = x² − 14x + 49.",
          ],
        },
      ],
    },
    {
      title: "Factorising Out Terms",
      body: `**Factorising** is the reverse of expanding: you look for the largest expression that divides every term, write it outside a bracket, and place the remainders inside. That expression is the **highest common factor (HCF)** of all the terms. For example, 6x² + 9x has HCF 3x, giving **3x(2x + 3)**. The check is simple: expand the answer and confirm you get back the original expression.`,
      groups: [
        {
          subTitle: "Finding and extracting the HCF",
          bullets: [
            "**Find the HCF of the coefficients** — for 6x² + 9x the numerical HCF of 6 and 9 is 3.",
            "**Find the HCF of the variable parts** — both terms contain at least one x, so the variable HCF is x.",
            "**Combine to get the full HCF** — 3 × x = 3x, which goes outside the bracket.",
            "**Divide each term by the HCF** to find what goes inside: 6x² ÷ 3x = 2x and 9x ÷ 3x = 3, giving 3x(2x + 3).",
            "**Always check by expanding** — 3x(2x + 3) = 6x² + 9x ✓.",
            "**Fully factorise** means the expression inside the bracket has no further common factor — if it does, the HCF chosen was not the highest.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Taking a factor that is not the highest: factorising 6x² + 9x as x(6x + 9) is partially factorised; the full answer is 3x(2x + 3).",
            "Leaving the original term outside and the HCF inside: the HCF goes outside, the reduced terms go inside.",
            "Forgetting that after factorising you can verify instantly by expanding — if expanding gives back the original, the factorisation is correct.",
          ],
        },
      ],
    },
    {
      title: "Solving Linear Equations",
      body: `A **linear equation** contains the unknown to the power of 1 only. To solve it, **isolate the unknown** by applying **inverse operations** in reverse BIDMAS order — undo addition and subtraction first, then division and multiplication, then powers. The golden rule is that whatever operation you apply to one side must be applied to the other: the equation is a balance, and balance must be maintained at every step.`,
      groups: [
        {
          subTitle: "Working through a linear equation",
          bullets: [
            "**Write out every step on a new line** — this keeps track of what has been done and allows mark-scheme credit for method.",
            "**Undo addition/subtraction first** — in 3x + 7 = 22, subtract 7 from both sides to get 3x = 15.",
            "**Then undo multiplication/division** — divide both sides by 3 to get x = 5.",
            "**Check by substituting back** — 3(5) + 7 = 22 ✓.",
            "**Negative coefficient** — in −4x = 20, divide both sides by −4 to get x = −5; dividing by a negative does not flip the equation (flipping applies to inequalities).",
            "**Fractional result is acceptable** — if 5x = 7, then x = 7/5; leave as an exact fraction unless a decimal is requested.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Applying an operation to only one term on a side rather than the whole side: in 3x + 7 = 22, subtracting 7 from the left must mean subtracting 7 from the right too.",
            "Flipping the sign of x when dividing by a negative coefficient — this only applies to inequalities, not equations.",
            "Skipping steps in mental arithmetic under exam conditions — write every line to guard against arithmetic errors and preserve method marks.",
          ],
        },
      ],
    },
    {
      title: "Equations with Brackets and Fractions",
      body: `When an equation contains **brackets**, expand them first, then collect like terms before solving. When it contains **fractions**, the most efficient strategy is to multiply every term on both sides by the **lowest common multiple (LCM)** of all the denominators to clear the fractions entirely, turning the equation into a simple linear one. These two strategies — expand then collect, and multiply to clear — are almost always the first two steps.`,
      groups: [
        {
          subTitle: "Brackets then fractions: the two-step opening",
          bullets: [
            "**Expand all brackets first** — in 3(2x − 1) + 5 = 20, expand to 6x − 3 + 5 = 20, then simplify the left side to 6x + 2 = 20.",
            "**Collect like terms** after expanding before isolating the unknown.",
            "**To clear fractions, identify the LCM of all denominators** — for x/3 + x/4 = 7, LCM of 3 and 4 is 12; multiply every term by 12.",
            "**Multiply every term**, not just the fractions — in (x + 1)/2 = 3, multiply both sides by 2 to get x + 1 = 6.",
            "**After clearing, solve as normal** — the resulting equation is a plain linear equation.",
            "**Mixed equation** (brackets and fractions): clear fractions first, then expand brackets, then collect.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Multiplying only the fraction terms and not the integer terms — if x/3 + 2 = 5, multiplying by 3 gives x + 6 = 15, not x + 2 = 15.",
            "Expanding a bracket before clearing a fraction when both appear — it is tidier to clear fractions first so the numbers stay smaller.",
            "Collecting terms before fully expanding — an un-expanded bracket is not a like term and cannot be combined.",
          ],
        },
      ],
    },
    {
      title: "Equations with Unknowns on Both Sides",
      body: `When the unknown appears on both sides of the equation, the goal is to **gather all x terms on one side** and **all number terms on the other**. It does not matter which side you gather the x terms on, but choosing the side where the coefficient will be positive avoids a negative leading coefficient and reduces errors. For example: 5x − 3 = 2x + 9 → subtract 2x from both sides → 3x − 3 = 9 → add 3 → 3x = 12 → x = 4.`,
      groups: [
        {
          subTitle: "Moving terms across the equals sign",
          bullets: [
            "**To move a term across the equals sign, subtract it from both sides** — moving +2x from the right means −2x on both sides.",
            "**Choose the side that leaves the positive coefficient** — in 2x = 5x − 9, subtract 2x from both sides: 0 = 3x − 9, then 9 = 3x, so x = 3.",
            "**Move x terms first, then number terms** — keeping the two operations separate reduces the chance of a sign error.",
            "**Collect after moving** — once all x terms are on one side, simplify the coefficient before dividing.",
            "**Include expanding brackets first** when the equation contains them: 4(x + 2) = 2x + 14 → 4x + 8 = 2x + 14 → 2x = 6 → x = 3.",
            "**Verify** — substitute x back into both sides of the original equation and confirm they give the same value.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Moving a term but keeping its sign the same: 5x − 3 = 2x + 9 does NOT give 5x − 2x − 3 + 9 = 0; moving 2x gives 3x − 3 = 9.",
            "Collecting x terms and number terms in the same step — do them one at a time to avoid a sign error.",
            "Dividing before fully collecting — make sure the coefficient of x is fully simplified before dividing both sides.",
          ],
        },
      ],
    },
    {
      title: "Forming Equations from Words",
      body: `A **word equation** is a problem described in plain language that must be translated into algebraic symbols before it can be solved. The key steps are: choose a **letter for the unknown**, write an algebraic **expression** for every quantity mentioned, then set up an **equation** by identifying which two quantities are equal. For instance, 'five more than three times a number is twenty' translates to **3n + 5 = 20**, which solves to n = 5.`,
      groups: [
        {
          subTitle: "Translation technique",
          bullets: [
            "**Define the unknown clearly** — write 'Let n = the number' or 'Let x = the cost in pence' before anything else; this stops ambiguity.",
            "**'More than' means add** — 'five more than 3n' is 3n + 5, not 5n + 3.",
            "**'Less than' means subtract in the stated order** — 'eight less than 2x' is 2x − 8, not 8 − 2x.",
            "**'Times' or 'of' means multiply** — 'three times a number' is 3n.",
            "**'Is', 'equals', 'gives', 'the result is'** all translate to =.",
            "**Solve then interpret** — once x is found, re-read the question to check whether you need x itself or some expression of x (e.g. the total cost, not just the number of items).",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Reversing a subtraction: 'eight less than a number' is n − 8, not 8 − n; the number comes first.",
            "Forgetting to define the variable — an answer that just works backwards from numbers earns no method marks.",
            "Solving but not answering the question — if the question asks for the perimeter and you find x, the answer is not x; use x to calculate the perimeter.",
          ],
        },
      ],
    },
    {
      title: "Forming Equations from Shapes",
      body: `Many geometry problems give algebraic expressions for lengths or angles and ask you to find the value of the unknown. The strategy is always the same: apply the relevant **geometric property** (perimeter = sum of sides, angle sum of a triangle = 180°, etc.), write the algebraic equation that the property produces, and then solve it. The geometry tells you what equals what; algebra does the arithmetic.`,
      groups: [
        {
          subTitle: "Common geometric setups",
          bullets: [
            "**Perimeter** — add all the given expressions and set equal to the stated total: if three sides are (x + 1), (2x − 3) and (x + 6) and perimeter = 24, then 4x + 4 = 24.",
            "**Triangle angle sum** — the three angles always sum to 180°; set up the equation and solve for x.",
            "**Angles on a straight line** — sum to 180°; angles at a point sum to 360°.",
            "**Isosceles triangle** — the base angles are equal; set the two algebraic expressions equal to each other before forming the equation.",
            "**Area** — if the area of a rectangle is given, write length × width = area and solve; watch for a quadratic if both dimensions contain x.",
            "**Exterior angle of a triangle** — equals the sum of the two non-adjacent interior angles; this gives a quick equation without needing the third angle.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Forming the equation without using the geometric property — writing x + 2x + 3x = 180 is correct only if those are the three angles of a triangle, not arbitrary lengths.",
            "Forgetting to solve for the original quantity — finding x is the midpoint; re-read to see whether the question wants an angle, a side length, or an area.",
            "Assuming all angles in a diagram are equal without geometric justification — only mark angles as equal if you can name the reason (e.g. isosceles, vertically opposite, alternate).",
          ],
        },
      ],
    },
    {
      title: "Interpreting Inequalities",
      body: `An **inequality** states that one expression is greater than, less than, greater than or equal to, or less than or equal to another. The four symbols are **>** (strictly greater than), **<** (strictly less than), **⩾** (greater than or equal to) and **⩽** (less than or equal to). The difference between **strict** (> or <) and **inclusive** (⩾ or ⩽) matters for listing integer solutions — a strict inequality excludes the boundary value.`,
      groups: [
        {
          subTitle: "Reading and listing solutions",
          bullets: [
            "**x > 3** means x is strictly greater than 3; the integer solutions starting from 4 are 4, 5, 6, … with no upper bound unless one is stated.",
            "**x ⩾ 3** means x can equal 3; the integer solutions start at 3.",
            "**x < 3** means x is strictly less than 3; the integer solutions going down are …, 1, 2 but NOT 3.",
            "**Double inequality** such as −2 < x ⩽ 5 means x is greater than −2 AND at most 5; integer solutions are −1, 0, 1, 2, 3, 4, 5.",
            "**List means list** — write all integer values in the specified range; if the range is infinite, write the first few with '…'.",
            "**Inequality vs equation** — an inequality has a range of solutions, not a single value; never write a single number as the answer to an inequality.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Including the boundary value for a strict inequality: for x > 3 the integer 3 is not a solution.",
            "Listing non-integer values when the question says 'integer solutions' — only whole numbers count.",
            "Confusing ⩾ with >; the horizontal bar under ⩾ signals 'or equal to', making the boundary inclusive.",
          ],
        },
      ],
    },
    {
      title: "Representing Inequalities on a Number Line",
      body: `A number line diagram makes the solution set of an inequality visual. The convention is: draw an **open circle** at the boundary for a strict inequality (> or <), a **filled circle** for an inclusive one (⩾ or ⩽), and an **arrow** extending in the direction of the solution set. For a **double inequality** such as 1 ⩽ x < 5, draw filled circle at 1 and open circle at 5, with the line segment joining them shaded.`,
      groups: [
        {
          subTitle: "Drawing each type",
          bullets: [
            "**x > 2** — open circle at 2, arrow pointing right; 2 itself is excluded.",
            "**x ⩽ −1** — filled circle at −1, arrow pointing left; −1 is included.",
            "**x ⩾ 4** — filled circle at 4, arrow pointing right; 4 is included.",
            "**x < 0** — open circle at 0, arrow pointing left; 0 is excluded.",
            "**Double inequality −3 < x ⩽ 2** — open circle at −3, filled circle at 2, solid line segment between them; −3 is excluded, 2 is included.",
            "**Scale matters** — space the integers evenly on the line and label the boundary values clearly; a diagram with no scale earns partial credit at best.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Using a filled circle for a strict inequality (> or <) — this wrongly suggests the boundary is part of the solution.",
            "Drawing the arrow in the wrong direction — x > 2 has solutions to the right of 2, not to the left.",
            "In a double inequality, using the same type of circle at both ends without checking each symbol individually.",
          ],
        },
      ],
    },
    {
      title: "Rearranging Formulas",
      body: `**Rearranging a formula** (also called 'changing the subject') means isolating a specified variable on one side of the equals sign. The process is identical to solving a linear equation — apply inverse operations in reverse BIDMAS order — except that the other letters remain as symbols rather than being replaced by numbers. When the target variable appears **twice**, collect both occurrences on one side, then **factorise it out** before dividing.`,
      groups: [
        {
          subTitle: "Standard rearrangements",
          bullets: [
            "**Single-step** — from P = 4s, make s the subject: s = P/4.",
            "**Two-step** — from v = u + at, make a the subject: subtract u to get v − u = at, then divide by t to get a = (v − u)/t.",
            "**Formula with a root** — from v² = u² + 2as, make s the subject: subtract u², giving v² − u² = 2as, then divide by 2a: s = (v² − u²)/(2a).",
            "**Formula with a power** — from A = πr², make r the subject: r² = A/π, so r = √(A/π).",
            "**Target appears twice** — from ax + b = cx + d, collect x terms: ax − cx = d − b, factorise: x(a − c) = d − b, divide: x = (d − b)/(a − c).",
            "**Fraction in the formula** — multiply both sides by the denominator first to clear it before proceeding.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Rearranging only part of the formula: in s = (u + v)t/2, making u the subject requires multiplying by 2, dividing by t, then subtracting v — skipping any step gives a wrong answer.",
            "When the target appears twice, trying to isolate it without factorising: you cannot divide by x until all x terms are on one side and factorised.",
            "Squaring both sides prematurely when the formula contains a root — first isolate the root expression, then square.",
          ],
        },
      ],
    },
    {
      title: "Solving Simultaneous Equations",
      body: `**Simultaneous equations** are two equations that must both be true at the same time. The solution is the pair of values (x, y) that satisfies both. The two standard methods are **elimination** (add or subtract the equations to cancel one variable) and **substitution** (express one variable from one equation and substitute into the other). Always **check the answer** by substituting both values into the original equations.`,
      groups: [
        {
          subTitle: "Elimination method",
          bullets: [
            "**Make one coefficient match** — multiply one or both equations so that the coefficient of one variable is the same (or opposite) in both.",
            "**Same sign → subtract; opposite sign → add** — if both equations have +2y, subtract to eliminate y; if one has +2y and the other −2y, add.",
            "**Solve the resulting single-variable equation** — once one variable is gone, the equation has one unknown.",
            "**Substitute back to find the second variable** — take the value found and substitute it into whichever original equation is simpler.",
            "**Check in the other original equation** — the solution must satisfy both equations, not just the one used for back-substitution.",
          ],
        },
        {
          subTitle: "Substitution method",
          bullets: [
            "**Express one variable in terms of the other** from the equation where it is easiest — e.g. from x + y = 7, write x = 7 − y.",
            "**Substitute into the other equation** — replace x everywhere with (7 − y) to get a single equation in y.",
            "**Solve for y**, then substitute back to find x.",
            "**Check both values** in both original equations.",
            "**Useful when one equation is already solved for a variable** — e.g. y = 3x + 1 is ready to substitute immediately.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Finding one variable and stopping — a simultaneous equation always has two unknowns; both values must be stated.",
            "Substituting back into the equation you derived from, rather than an original — if you manipulated the equation, use an original one to find the second variable.",
            "Not checking the solution — a substitution back into both originals catches arithmetic errors with no extra method required.",
          ],
        },
      ],
    },
    {
      title: "Forming Simultaneous Equations",
      body: `Many word problems contain **two unknown quantities** and **two independent conditions**, which is exactly what simultaneous equations solve. The approach is to **name the unknowns** with letters, **write one equation per condition**, and then solve by elimination or substitution. For example: 'two apples and three oranges cost £2.70, one apple and two oranges cost £1.70' gives 2a + 3o = 2.70 and a + 2o = 1.70.`,
      groups: [
        {
          subTitle: "Setting up the pair",
          bullets: [
            "**Name both unknowns** at the start — 'let a = price of one apple in £, o = price of one orange in £'.",
            "**Write an equation for each condition** — do not combine the two conditions into one equation.",
            "**Check units are consistent** — if one sentence uses pence and another uses pounds, convert before writing the equations.",
            "**Coefficient equals the quantity mentioned** — 'three oranges' gives coefficient 3 on o in that equation.",
            "**Solve then interpret** — once a and o are found, re-read the question; it may ask for a combined cost or how many of each item, not just the unit price.",
            "**Use fractions or decimals for money** — £2.70 becomes 2.70 or 270p; choose one and stay consistent throughout.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Writing only one equation and trying to solve for two unknowns — without a second independent equation there are infinitely many solutions.",
            "Mixing units within the equation pair — writing one equation in pence and another in pounds gives an inconsistent system.",
            "Solving for x and y but then not answering the original question — always re-read and use the values to answer what was asked.",
          ],
        },
      ],
    },
    {
      title: "Introduction to Sequences",
      body: `A **sequence** is an ordered list of numbers or objects. Each item in the list is called a **term**, and terms are labelled **T₁, T₂, T₃, …** according to their position. The rule connecting one term to the next is the **term-to-term rule**. The position of a term in the sequence is its **index**. Sequences can be finite (they stop) or infinite (they continue forever), and the same term-to-term rule applied repeatedly generates every term.`,
      groups: [
        {
          subTitle: "Key ideas",
          bullets: [
            "**Term** — a single value in the sequence; T₁ is the first term, T₃ is the third, Tₙ is the general nth term.",
            "**Term-to-term rule** — the instruction for getting from one term to the next; e.g. 'add 4' or 'multiply by 3'.",
            "**Position-to-term rule** — a formula giving Tₙ directly from n without needing to know the previous term; this is the nth term formula.",
            "**Subscript notation** — Tₙ₊₁ means the term after Tₙ; Tₙ₋₁ means the term before it.",
            "**Finite vs infinite** — a finite sequence has a last term; an infinite sequence never ends and is shown with '…' at the end.",
            "**Common sequences** — odd numbers 1, 3, 5, … have term-to-term rule +2; powers of 2 have term-to-term rule ×2.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Confusing T₁ (the first term) with T₀ (the zeroth term) — exam questions number from 1 unless stated otherwise.",
            "Describing a sequence by listing terms without stating the rule — the rule is what earns the method mark.",
            "Using an additive term-to-term rule when the sequence is actually geometric — check whether the differences are constant (additive) or the ratios are constant (geometric).",
          ],
        },
      ],
    },
    {
      title: "Continuing Sequences",
      body: `To continue a sequence, first **identify the pattern** by comparing consecutive terms: if the difference between terms is constant the sequence is **arithmetic**; if each term is multiplied by the same number it is **geometric**; if neither, look for a second-difference pattern or another rule. Once the rule is established, apply it to find the next term or terms.`,
      groups: [
        {
          subTitle: "Identifying the pattern",
          bullets: [
            "**Arithmetic sequence** — subtract any term from the next; if the result is the same every time, the common difference d is found: 3, 7, 11, 15 has d = +4.",
            "**Geometric sequence** — divide any term by the previous one; if the result is constant, the common ratio r is found: 2, 6, 18, 54 has r = 3.",
            "**Quadratic sequence** — the first differences are not constant but the second differences are; this indicates a quadratic pattern.",
            "**Other patterns** — Fibonacci-type (each term is the sum of the two before it), square numbers, triangular numbers; recognise by inspection.",
            "**Apply the rule** — once found, extend the sequence by applying the rule the required number of times.",
            "**Show the working** — write the differences or ratios beside the sequence to make the pattern explicit.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Assuming arithmetic when the sequence is geometric — always test both: if differences are not constant, test ratios.",
            "Applying the rule once when the question asks for the next two terms — count how many extensions are needed.",
            "Rounding a ratio prematurely in a geometric sequence — keep the exact ratio until the final answer.",
          ],
        },
      ],
    },
    {
      title: "nth Terms of Linear Sequences",
      body: `The **nth term formula** for a linear (arithmetic) sequence is **Tₙ = an + b**, where a is the **common difference** and b is the **zeroth term** (the value before the first term). To find a, subtract any term from the next. To find b, substitute n = 1 and the value of T₁ into Tₙ = an + b, then solve. For example, the sequence 5, 8, 11, 14 has difference 3, so Tₙ = 3n + b; substituting T₁ = 5 gives 5 = 3(1) + b → b = 2, so **Tₙ = 3n + 2**.`,
      groups: [
        {
          subTitle: "Finding and using the nth term",
          bullets: [
            "**Step 1 — find a** — calculate the first difference (any consecutive pair); for 5, 8, 11, 14 it is 8 − 5 = 3.",
            "**Step 2 — find b** — substitute n = 1: T₁ = a(1) + b → b = T₁ − a; for the example b = 5 − 3 = 2.",
            "**Step 3 — write the formula** — Tₙ = 3n + 2.",
            "**Use the formula to find any term** — the 50th term is T₅₀ = 3(50) + 2 = 152.",
            "**Check whether a value is in the sequence** — set Tₙ = the value and solve for n; if n is a positive integer, the value is in the sequence.",
            "**Negative difference** — a decreasing sequence has a negative a; e.g. 20, 17, 14, 11 has a = −3, giving Tₙ = −3n + 23.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Using the first term as b instead of calculating the zeroth term — b = T₁ − a, not b = T₁.",
            "Checking membership by testing a non-integer n — if Tₙ = k gives n = 4.5, then k is not in the sequence.",
            "Writing the formula as Tₙ = an without the constant b — the formula is only complete when b is included, even if b = 0.",
          ],
        },
      ],
    },
    {
      title: "Quadratic and Cubic Sequences",
      body: `A **quadratic sequence** has a constant **second difference** — the differences of the differences are all equal. Its nth term formula is **Tₙ = an² + bn + c**. The leading coefficient a equals the **second difference divided by 2**. Once a is found, subtract an² from each term, leaving a linear sequence to find b and c. A **cubic sequence** has a constant **third difference**, and its leading coefficient a = third difference ÷ 6.`,
      groups: [
        {
          subTitle: "Finding the nth term of a quadratic sequence",
          bullets: [
            "**Write out the first differences** — subtract each term from the next.",
            "**Write out the second differences** — subtract each first difference from the next; if constant, the sequence is quadratic.",
            "**Find a** — a = second difference ÷ 2; for second differences of 4, a = 2.",
            "**Subtract an² from each term** — for each n from 1, 2, 3, … compute Tₙ − an² to get a linear residual sequence.",
            "**Find the nth term of the residual sequence** — this gives the bn + c part.",
            "**Combine** — the full formula is Tₙ = an² + (linear part); verify by substituting n = 1 and n = 2.",
          ],
        },
        {
          subTitle: "Cubic sequences at a glance",
          bullets: [
            "**Third differences constant → cubic** — take first differences, then second, then third; if the third row is constant, the sequence is cubic.",
            "**Leading coefficient** — a = third constant difference ÷ 6.",
            "**After subtracting an³**, the residual is a quadratic or simpler sequence, found by the same method applied again.",
            "**Recognise cubes** — 1, 8, 27, 64, 125, … is Tₙ = n³; spotting this avoids all the difference work.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Dividing the second difference by 1 instead of 2: for a quadratic, a = second difference ÷ 2, not = second difference.",
            "Stopping after finding a and writing Tₙ = an² — the formula is incomplete without the linear and constant parts.",
            "Using first differences to find the nth term of a quadratic — first differences are not constant, so the linear formula Tₙ = an + b is wrong for a quadratic.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_2 = chapterTwo;
