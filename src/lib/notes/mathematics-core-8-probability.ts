import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Core — Section 8: Probability
 * Chapters 40 to 41 (Categories matching official Core syllabus breakdown)
 */
export const MATHEMATICS_CORE_PROBABILITY: Chapter[] = [
  {
    number: 40,
    title: "Basic Probability",
    section: "8. Probability",
    topic: "Basic Probability",
    intro:
      "Probability scale from 0 to 1, calculating theoretical single-event probabilities, sample space diagrams, and relative and expected frequency.",
    subheadings: [
      {
        title: "Basic Probability",
        body:
          "**Probability ($P$)** measures the likelihood of an event occurring:\n\n" +
          "$$\\mathbf{0 \\le P(E) \\le 1}$$\n" +
          "- $P = 0$: **Impossible event** (e.g. rolling a 7 on a standard 6-sided die)\n" +
          "- $P = 0.5$: **Even chance** (e.g. flipping heads on a fair coin)\n" +
          "- $P = 1$: **Certain event**\n\n" +
          "**Theoretical Probability Formula (Equally Likely Outcomes):**\n" +
          "$$\\mathbf{P(E) = \\frac{\\text{Number of successful outcomes}}{\\text{Total number of possible outcomes}}}$$\n\n" +
          "**Complementary Events (Law of Total Probability):**\n" +
          "The sum of probabilities of all mutually exclusive and exhaustive outcomes is $1$:\n" +
          "$$\\mathbf{P(\\text{not } E) = 1 - P(E)}$$",
        examinerTips: [
          "Probabilities can be written as fractions, decimals, or percentages (e.g. $\\frac{1}{4}, 0.25, 25\\%$). Never write probability as a ratio ($1:4$) or as '1 in 4'.",
        ],
        commonMistakes: [
          "Giving a probability greater than 1 or less than 0.",
          "Writing probabilities in ratio form like $3:5$.",
        ],
        recap: [
          "A bag contains 5 red, 3 blue, and 2 green balls. A ball is chosen at random. Find $P(\\text{blue})$ and $P(\\text{not green})$.",
        ],
      },
      {
        title: "Possibility (Sample Space) Diagrams",
        body:
          "A **sample space diagram (possibility space grid)** lists all possible outcomes when two independent experiments occur (e.g. rolling two dice or spinning two spinners).\n\n" +
          "**Example:** Sum of two fair 6-sided dice:\n" +
          "Construct a $6 \\times 6$ grid showing total $36$ equally likely outcomes:\n" +
          "- Minimum sum $= 1 + 1 = 2$ ($1$ outcome: $(1, 1)$)\n" +
          "- Sum of $7$ ($6$ outcomes: $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$)\n" +
          "- Maximum sum $= 6 + 6 = 12$ ($1$ outcome: $(6, 6)$)\n\n" +
          "$$P(\\text{Sum is } 7) = \\frac{6}{36} = \\frac{1}{6}$$\n" +
          "$$P(\\text{Sum } > 9) = \\frac{6}{36} = \\frac{1}{6}$$",
        examinerTips: [
          "Fill in sample space tables systematically to avoid missing entries.",
          "Check that the denominator equals the product of outcomes of both events ($6 \\times 6 = 36$).",
        ],
        commonMistakes: [
          "Assuming all sums from 2 to 12 are equally likely (7 is much more likely than 2).",
        ],
        recap: [
          "Two fair spinners numbered 1 to 4 are spun and their scores multiplied. Draw a sample space diagram and find $P(\\text{product is even})$.",
        ],
      },
      {
        title: "Relative & Expected Frequency",
        body:
          "**Relative Frequency (Experimental Probability):**\n" +
          "Calculated from actual experimental trials:\n" +
          "$$\\mathbf{\\text{Relative Frequency} = \\frac{\\text{Frequency of event}}{\\text{Total number of trials}}}$$\n" +
          "- As the number of trials increases, experimental relative frequency gets closer to theoretical probability.\n\n" +
          "**Expected Frequency:**\n" +
          "The expected number of times an event will occur in $N$ trials:\n" +
          "$$\\mathbf{\\text{Expected Number of Occurrences} = N \\times P(E)}$$\n\n" +
          "**Example:** A fair die is rolled $300$ times. How many times would you expect to roll a 5?\n" +
          "$$\\text{Expected} = 300 \\times \\frac{1}{6} = 50$$",
        examinerTips: [
          "The larger the number of trials, the more reliable the estimate of probability.",
        ],
        commonMistakes: [
          "Dividing by probability instead of multiplying by probability when finding expected frequency.",
        ],
        recap: [
          "The probability that a bus is late is $0.15$. Over $60$ days, how many days is the bus expected to be late?",
        ],
      },
    ],
  },
  {
    number: 41,
    title: "Set Notation & Probability Diagrams",
    section: "8. Probability",
    topic: "Set Notation & Probability Diagrams",
    intro:
      "Two-way tables, set language and Venn diagrams (union, intersection, universal set, complement), calculating probabilities from Venn diagrams, tree diagrams, and combined probability.",
    subheadings: [
      {
        title: "Two-Way Tables",
        body:
          "A **two-way table** categorises data according to two distinct variables (e.g. gender and transport method):\n\n" +
          "- Column totals and row totals must sum to the same grand total at the bottom right corner.\n" +
          "- Missing entries can be filled in using simple subtraction from totals.\n\n" +
          "**Calculating Probability from Two-Way Table:**\n" +
          "- Overall probability: $\\frac{\\text{Cell value}}{\\text{Grand total}}$\n" +
          "- Conditional probability from row/column: $\\frac{\\text{Cell value}}{\\text{Row or Column total}}$",
        examinerTips: [
          "Verify your completed table by checking that row totals and column totals both add up to the grand total.",
        ],
        commonMistakes: [
          "Using the grand total as the denominator when a question specifies 'Given that the student is a girl...' (use the girl row total).",
        ],
        recap: [
          "In a group of 50 students, 28 are girls. 12 girls play tennis, and 15 boys play tennis. Construct a two-way table and find the probability that a randomly chosen boy plays tennis.",
        ],
      },
      {
        title: "Set Notation & Venn Diagrams",
        body:
          "**Set Theory Notation:**\n" +
          "- **Universal Set ($\\mathcal{E}$ or $\\xi$):** The set of all elements under consideration.\n" +
          "- **Element of ($x \\in A$):** $x$ belongs to set $A$.\n" +
          "- **Not an element of ($x \\notin A$):** $x$ does not belong to set $A$.\n" +
          "- **Number of elements ($n(A)$):** Cardinality of set $A$.\n" +
          "- **Empty Set ($\\emptyset$ or $\\{\\}$):** Set containing no elements ($n(\\emptyset) = 0$).\n" +
          "- **Intersection ($A \\cap B$):** Elements in **BOTH** set $A$ AND set $B$ (overlapping region in Venn diagram).\n" +
          "- **Union ($A \\cup B$):** Elements in set $A$ **OR** set $B$ **OR** both (all regions inside $A$ and $B$).\n" +
          "- **Complement ($A'$):** All elements in the universal set that are **NOT in set $A$**.",
        examinerTips: [
          "Remember: $\\cap$ = intersection ('AND' / overlap); $\\cup$ = union ('OR' / combined).",
        ],
        commonMistakes: [
          "Confusing the union $\\cup$ and intersection $\\cap$ symbols.",
          "Forgetting elements that belong to $\\xi$ but are outside both sets $A$ and $B$.",
        ],
        recap: [
          "Given $\\xi = \\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\\}$, $A = \\{\\text{multiples of } 3\\}$, $B = \\{\\text{odd numbers}\\}$. List the elements of $A \\cap B$ and $A \\cup B$.",
        ],
      },
      {
        title: "Probabilities from Venn Diagrams",
        body:
          "Using numbers in a Venn diagram to calculate probabilities:\n\n" +
          "$$P(E) = \\frac{n(E)}{n(\\xi)}$$\n\n" +
          "**Formulas:**\n" +
          "- $P(A) = \\frac{n(A)}{n(\\xi)}$\n" +
          "- $P(A \\cap B) = \\frac{n(A \\cap B)}{n(\\xi)}$\n" +
          "- $P(A \\cup B) = \\frac{n(A) + n(B) - n(A \\cap B)}{n(\\xi)}$\n" +
          "- $P(A') = 1 - P(A)$",
        examinerTips: [
          "Ensure the sum of all regions in the Venn diagram equals $n(\\xi)$.",
        ],
        commonMistakes: [
          "Double-counting the intersection when finding $n(A \\cup B)$.",
        ],
        recap: [
          "In a class of 30 pupils, 18 study French, 14 study Spanish, and 6 study both. Find the probability that a pupil chosen at random studies Spanish but not French.",
        ],
      },
      {
        title: "Probability Tree Diagrams",
        body:
          "A **tree diagram** maps out sequences of combined events along branching paths:\n\n" +
          "**Rules for Probability Trees:**\n" +
          "1. The probabilities on each set of branches meeting at a node **MUST sum to $1$**.\n" +
          "2. **Multiply along branches (AND rule):**\n" +
          "   To find the probability of a specific outcome sequence, multiply along the path:\n" +
          "   $$\\mathbf{P(A \\text{ and } B) = P(A) \\times P(B)}$$\n" +
          "3. **Add probabilities between different paths (OR rule):**\n" +
          "   To find the probability of multiple acceptable end outcomes, calculate each path product and add them together.",
        examinerTips: [
          "Label every branch with its outcome name and its probability fraction/decimal.",
        ],
        commonMistakes: [
          "Adding along branches instead of multiplying.",
        ],
        recap: [
          "A coin is biased such that $P(\\text{Heads}) = 0.6$. The coin is tossed twice. Complete a tree diagram and calculate $P(\\text{at least one Head})$.",
        ],
      },
      {
        title: "Combined Probability",
        body:
          "**Independent Events with Replacement:**\n" +
          "The outcome of the first event does not affect the probabilities of the second event (probabilities remain constant).\n\n" +
          "**Dependent Events without Replacement:**\n" +
          "When an item is removed and NOT replaced:\n" +
          "- The denominator decreases by $1$ on the second pick.\n" +
          "- The numerator of the chosen item category decreases by $1$.\n\n" +
          "**Example:** A bag contains 4 red and 6 blue counters. Two counters are picked at random **without replacement**:\n" +
          "- First counter Red: $P(R_1) = \\frac{4}{10}$\n" +
          "- Second counter Red: $P(R_2) = \\frac{3}{9}$\n" +
          "- $P(\\text{both Red}) = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$",
        examinerTips: [
          "Check whether the question states 'with replacement' or 'without replacement'.",
        ],
        commonMistakes: [
          "Keeping the denominator the same when items are taken without replacement.",
        ],
        recap: [
          "A box has 7 red pens and 3 blue pens. Two pens are taken without replacement. Find $P(\\text{one of each colour})$.",
        ],
      },
    ],
  },
];
