import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 8: Probability
 * Includes all Core content + Extended-only: Conditional Probability
 */
export const MATHEMATICS_EXTENDED_PROBABILITY: Chapter[] = [
  {
    number: 44,
    title: "Basic Probability",
    section: "8. Probability",
    topic: "Basic Probability",
    intro:
      "Probability measures the likelihood of events occurring on a scale from 0 (impossible) to 1 (certain). This chapter covers theoretical probability, sample spaces, and expected frequency.",
    subheadings: [
      {
        title: "Basic Probability",
        body:
          "**Probability of an event $E$:**\n\n" +
          "$$P(E) = \\frac{\\text{Number of favourable outcomes}}{\\text{Total number of equally likely outcomes}}$$\n\n" +
          "- $0 \\leq P(E) \\leq 1$\n" +
          "- $P(E) + P(E') = 1$, so $P(E') = 1 - P(E)$.\n\n" +
          "**Types of events:**\n" +
          "- **Mutually exclusive:** Cannot occur at the same time. $P(A \\cup B) = P(A) + P(B)$.\n" +
          "- **Independent:** One event does not affect the other. $P(A \\cap B) = P(A) \\times P(B)$.\n\n" +
          "**General addition rule:**\n" +
          "$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$",
        examinerTips: [
          "If events are mutually exclusive, $P(A \\cap B) = 0$.",
          "Independent events: the second probability does NOT change based on the first outcome.",
        ],
        commonMistakes: [
          "Adding probabilities for independent events when they should be multiplied.",
          "Using $P(A \\cup B) = P(A) + P(B)$ without subtracting $P(A \\cap B)$ when events overlap.",
        ],
        recap: [
          "A bag has 4 red, 5 blue, and 3 green marbles. Find: (a) P(red) (b) P(not blue) (c) P(red or green).",
        ],
      },
      {
        title: "Possibility (Sample Space) Diagrams",
        body:
          "A **sample space diagram** (or possibility space) lists all possible outcomes of two events, usually on a grid.\n\n" +
          "**Example:** Two dice are rolled. The sample space is a $6 \\times 6$ grid showing all 36 equally likely outcomes.\n\n" +
          "P(sum = 7) = $\\frac{6}{36} = \\frac{1}{6}$ (the pairs $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$).\n\n" +
          "P(sum > 10) = $\\frac{3}{36} = \\frac{1}{12}$ (pairs $(5,6),(6,5),(6,6)$).",
        examinerTips: [
          "Draw the grid systematically — list all outcomes in rows and columns.",
          "Count outcomes carefully by marking or highlighting them on the grid.",
        ],
        commonMistakes: [
          "Counting each pair twice (e.g. counting $(2,5)$ and $(5,2)$ as the same outcome — they are different).",
          "Forgetting to include outcomes like $(1,1)$, $(2,2)$, etc. (doubles).",
        ],
        recap: [
          "Two fair coins are flipped. Draw the sample space. Find: (a) P(two heads) (b) P(at least one tail).",
          "One spinner has sections $1,2,3$ and another has sections $A, B$. List all 6 outcomes. Find P(2 and B).",
        ],
      },
      {
        title: "Relative & Expected Frequency",
        body:
          "**Relative frequency** (experimental probability) is based on results from repeated trials:\n\n" +
          "$$\\text{Relative frequency} = \\frac{\\text{Number of times event occurred}}{\\text{Total number of trials}}$$\n\n" +
          "As the number of trials increases, relative frequency approaches the theoretical probability.\n\n" +
          "**Expected frequency:** The number of times an event is expected to occur in $n$ trials:\n" +
          "$$\\text{Expected frequency} = P(E) \\times n$$\n\n" +
          "**Example:** A biased die shows '6' with probability $0.2$. In $150$ rolls, expected number of sixes $= 0.2 \\times 150 = 30$.",
        examinerTips: [
          "Relative frequency approaches theoretical probability only with a large number of trials.",
          "Expected frequency is not necessarily a whole number — it represents the average.",
        ],
        commonMistakes: [
          "Confusing relative frequency (from experiment) with theoretical probability (from equally likely outcomes).",
          "Rounding expected frequency to the nearest integer when not asked to.",
        ],
        recap: [
          "A biased coin shows heads 60 times in 200 flips. (a) Calculate the relative frequency of heads. (b) If the coin is flipped 500 times, how many heads are expected?",
        ],
      },
    ],
  },
  {
    number: 45,
    title: "Probability Diagrams",
    section: "8. Probability",
    topic: "Probability Diagrams",
    intro:
      "Visual tools — Venn diagrams, two-way tables, and probability trees — organise complex probability problems. The Extended course adds conditional probability calculations from these diagrams.",
    subheadings: [
      {
        title: "Two-Way Tables",
        body:
          "**Two-way tables** (contingency tables) organise data by two categories.\n\n" +
          "**Example:**\n" +
          "| | Maths | Not Maths | Total |\n" +
          "|---|---|---|---|\n" +
          "| Science | 15 | 8 | 23 |\n" +
          "| Not Science | 12 | 5 | 17 |\n" +
          "| Total | 27 | 13 | 40 |\n\n" +
          "P(studies Maths) $= \\frac{27}{40}$\n" +
          "P(studies both) $= \\frac{15}{40} = \\frac{3}{8}$\n" +
          "P(studies Science | studies Maths) $= \\frac{15}{27} = \\frac{5}{9}$ (conditional probability)",
        examinerTips: [
          "Always fill in the totals row and column first.",
          "Conditional probability from a two-way table: restrict your sample to the given condition's row or column.",
        ],
        commonMistakes: [
          "Using the grand total as the denominator in conditional probability — use the conditional row/column total instead.",
        ],
        recap: [
          "120 students: 70 play sport, 45 play an instrument, and 20 do both. Complete a two-way table and find P(plays sport only).",
        ],
      },
      {
        title: "Probabilities from Venn Diagrams",
        body:
          "Venn diagrams show the relationship between two or more events using overlapping circles.\n\n" +
          "**Reading probabilities:**\n" +
          "- $P(A)$: fraction of total in circle $A$ (including intersection).\n" +
          "- $P(A \\cap B)$: fraction in the overlap.\n" +
          "- $P(A \\cup B)$: fraction inside either circle.\n" +
          "- $P(A')$: fraction outside circle $A$.\n" +
          "- $P(A \\cap B')$: fraction in $A$ only (not in overlap).\n\n" +
          "**Conditional probability from Venn diagram:**\n" +
          "$P(B | A) = \\frac{P(A \\cap B)}{P(A)}$",
        examinerTips: [
          "Put numbers of outcomes (not probabilities) in a Venn diagram, then convert to fractions at the end.",
          "The total of all regions in the Venn diagram equals the sample space size.",
        ],
        commonMistakes: [
          "Double-counting elements in the intersection — they belong to BOTH $A$ and $B$ but are only placed once (in the overlap).",
        ],
        recap: [
          "$\\mathscr{E}$ has 40 elements. $A$ has 18, $B$ has 22, $A \\cap B$ has 7. Find: (a) $P(A \\cup B)$ (b) $P(A' \\cap B)$ (c) $P(A | B)$.",
        ],
      },
      {
        title: "Probability Tree Diagrams",
        body:
          "**Tree diagrams** show all possible outcomes of successive events.\n\n" +
          "**Rules:**\n" +
          "- Each branch from a node has probabilities that sum to $1$.\n" +
          "- **Multiply** along branches to find the probability of a combined outcome.\n" +
          "- **Add** the probabilities of separate branches for 'or' outcomes.\n\n" +
          "**Example:** A bag has 3 red and 5 blue balls. Two drawn without replacement.\n\n" +
          "P(both red) $= \\frac{3}{8} \\times \\frac{2}{7} = \\frac{6}{56} = \\frac{3}{28}$\n\n" +
          "P(one of each) $= \\frac{3}{8} \\times \\frac{5}{7} + \\frac{5}{8} \\times \\frac{3}{7} = \\frac{15}{56} + \\frac{15}{56} = \\frac{30}{56} = \\frac{15}{28}$",
        examinerTips: [
          "For 'without replacement', the total decreases by 1 for the second draw, and the number of remaining balls changes.",
          "Always check: probabilities on all branches from a single node must sum to $1$.",
        ],
        commonMistakes: [
          "Adding branch probabilities instead of multiplying for AND outcomes.",
          "Forgetting to adjust probabilities for sampling without replacement.",
        ],
        recap: [
          "A bag has 4 green and 6 yellow balls. Two drawn without replacement. Find: (a) P(both green) (b) P(different colours).",
          "A test has two parts. P(pass part 1) = 0.7. If passed part 1, P(pass part 2) = 0.8; if failed, P(pass part 2) = 0.4. Find P(pass both).",
        ],
      },
    ],
  },
  {
    number: 46,
    title: "Conditional Probability",
    section: "8. Probability",
    topic: "Conditional Probability",
    intro:
      "Conditional probability finds the probability of an event given that another event has already occurred. This Extended-only topic is widely applied in statistics and risk analysis.",
    subheadings: [
      {
        title: "Conditional Probability",
        body:
          "**Conditional probability** $P(B | A)$ is the probability of $B$ occurring **given that** $A$ has already occurred:\n\n" +
          "$$P(B | A) = \\frac{P(A \\cap B)}{P(A)}$$\n\n" +
          "This is equivalent to restricting the sample space to only those outcomes where $A$ has occurred.\n\n" +
          "**Example:** A fair die is rolled. Given that the result is even, what is the probability it is greater than 3?\n\n" +
          "Even results: $\\{2, 4, 6\\}$. Of these, greater than 3: $\\{4, 6\\}$.\n" +
          "$P(>3 | \\text{even}) = \\frac{2}{3}$\n\n" +
          "**Using the formula:** $P(\\text{even}) = \\frac{1}{2}$, $P(>3 \\text{ and even}) = P(\\{4,6\\}) = \\frac{2}{6} = \\frac{1}{3}$.\n" +
          "$P(>3 | \\text{even}) = \\frac{1/3}{1/2} = \\frac{2}{3}$ ✓",
        examinerTips: [
          "The vertical bar $|$ means 'given that'. The event after the bar is the condition.",
          "In conditional probability, the denominator is not the full sample space — it's the size of the conditional event.",
        ],
        commonMistakes: [
          "Using the full sample space as denominator instead of the conditional sample.",
          "Confusing $P(A|B)$ and $P(B|A)$ — these are generally different.",
        ],
        recap: [
          "A card is drawn from a standard deck of 52. Given it is a heart, find: (a) P(it is an ace) (b) P(it is a picture card — J, Q, K).",
          "P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2. Find P(A|B) and P(B|A).",
        ],
      },
      {
        title: "Combined Conditional Probabilities",
        body:
          "**Combining conditional probabilities — the multiplication rule:**\n\n" +
          "$$P(A \\cap B) = P(A) \\times P(B | A)$$\n\n" +
          "This can be extended: $P(A \\cap B \\cap C) = P(A) \\times P(B|A) \\times P(C|A \\cap B)$.\n\n" +
          "**Bayes' theorem (applied):** Sometimes we need to find $P(A|B)$ when we know $P(B|A)$:\n\n" +
          "$$P(A|B) = \\frac{P(A) \\times P(B|A)}{P(B)}$$\n\n" +
          "Where $P(B) = P(A) \\times P(B|A) + P(A') \\times P(B|A')$ (the total probability rule).\n\n" +
          "**Example:** Factory produces 70% from machine A, 30% from machine B. Machine A produces 5% defective items, B produces 10%.\n" +
          "P(defective) $= 0.7 \\times 0.05 + 0.3 \\times 0.10 = 0.035 + 0.030 = 0.065$.\n" +
          "P(from A | defective) $= \\frac{0.035}{0.065} = \\frac{7}{13} \\approx 0.538$.",
        examinerTips: [
          "Draw a tree diagram first — it makes the structure of conditional probabilities clear.",
          "The total probability $P(B)$ is found by summing all routes through the tree that lead to $B$.",
        ],
        commonMistakes: [
          "Confusing P(defective from A) with P(from A | defective) — the first is a joint probability, the second is conditional.",
        ],
        recap: [
          "A test for a disease is 95% accurate. 2% of the population has the disease. A person tests positive. Find the probability they actually have the disease.",
          "Three cards are drawn without replacement from a deck of 10 cards (numbered 1–10). Find the probability all three are even.",
        ],
      },
    ],
  },
];
