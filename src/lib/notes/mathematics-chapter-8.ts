import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math8-spinner.webp",
    alt: "A wooden board-game spinner with eight unequal sectors painted in different colours, its metal pointer resting at the top",
    caption: "Unequal sectors, unequal probabilities",
  },
  {
    src: "math8-dice.webp",
    alt: "Two white six-sided dice mid-roll on green felt, with a small pile of coloured counters beside them",
    caption: "Count the outcomes, then divide",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math8-coin-tally.webp",
    alt: "A row of coins flipped onto a table, most landing one face up, beside a hand-drawn tally chart with rows of strokes",
    caption: "Experiment first, probability second",
  },
  {
    src: "math8-sprinkler-trials.webp",
    alt: "A classroom floor with a painted cardboard spinner taped down at its centre and chalk tally marks scattered around it",
    caption: "More trials, better estimate",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math8-marbles-bag.webp",
    alt: "An opaque cloth bag tipped on its side with red and blue marbles spilling out, one marble already set apart on the table",
    caption: "The set-apart marble changes the second draw",
  },
  {
    src: "math8-branch-diagram.webp",
    alt: "A pencil drawing on graph paper of two-stage branches spreading from one point to four endpoints, with small fractions written along each branch",
    caption: "Along the branches multiply, add the routes",
  },
]);

const chapterEight: Chapter = {
  number: 8,
  title: "Probability",
  intro: `Probability is marked on the **route as much as the answer**: list the outcomes, state the fraction, and say how you combined them.\n\nGive probabilities as a **fraction, decimal or percentage**. Core does not use probability notation; Extended does.`,
  subheadings: [
    {
      title: "Single Events",
      body: `### The Scale Runs 0 to 1

**0 means impossible, 1 means certain**, and everything else sits between. Calculate the probability of a single event as **favourable outcomes ÷ total outcomes**, all outcomes equally likely.

The complement is the fastest rule in the chapter: **P(not happening) = 1 – P(happening)**. If a counter is blue with probability 0.8, it is not blue with probability 0.2.

Extended uses notation: **P(A)** is the probability of A and **P(A′)** the probability of not A.

Questions may pull the counts from a **table, graph or Venn diagram** (Core limits Venn diagrams to two sets).`,
      figure: panelA,
      groups: [
        {
          subTitle: "Counting outcomes properly",
          bullets: [
            "For two dice there are **36** equally likely outcomes, not 11 — the total 7 has six routes, the total 12 only one.",
            "'At least one' questions are shorter done as **1 – P(none)**, for example at least one head in three flips is 1 – (1/2)³ = 7/8.",
            "Simplify the fraction unless the question says otherwise, and never leave an unreduced 6/36 as a final answer.",
          ],
        },
      ],
    },
    {
      title: "Relative and Expected Frequency",
      body: `### From Experiment to Estimate

**Relative frequency = number of times an outcome occurs ÷ number of trials**, and it is an **estimate of probability** — better the more trials there are. A spinner used 60 times landing on red 18 times gives an estimated P(red) = 18/60 = 0.3.

**Expected frequency = probability × number of trials**: a 0.25 event in 80 trials is expected 20 times.

Know what **fair, biased and random** mean, because a question will ask you to justify whether a spinner or die is fair by comparing observed and expected frequencies.`,
      figure: panelB,
      groups: [
        {
          subTitle: "How to answer the fairness question",
          bullets: [
            "State the **expected** frequency under fairness, compare it with the **observed** one, and describe the difference as proportional to the sample rather than declaring the object biased from ten trials.",
            "If a table or bar chart of results is given, read the totals from it before dividing — using the number of categories instead of the number of trials is the usual slip.",
          ],
        },
      ],
    },
    {
      title: "Combined and Conditional Events",
      body: `### Two Tools, Two Rules

Use whichever displays the sample space best: **sample space diagrams**, **Venn diagrams**, and **tree diagrams** — on a tree, **outcomes go at the end of the branches and probabilities beside them**.

**AND** (both events, intersection) → **multiply along the branches**; **OR** (either event, union) → **add the separate routes**. Extended may write these as **P(A ∩ B)** and **P(A ∪ B)** in a Venn context.

Core combined events are **with replacement only**. Extended allows **with or without replacement**, and adds **conditional probability** worked from Venn diagrams, trees or two-way tables — the notation P(A|B) and the conditional formula are **not** required.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Replacement decides the denominator",
          bullets: [
            "With replacement the second draw has the **same** totals as the first; without it, remove the marble from both the numerator and the denominator — 5 red of 12 becomes 4 of 11 after a red is taken.",
            "Conditional questions give you a condition to restrict the sample space: count only the row or branch that satisfies it, then find the proportion of that restricted set.",
            "Mutually exclusive events have **P(A ∪ B) = P(A) + P(B)** because the overlap is zero; otherwise subtract the intersection or you will double-count it.",
          ],
        },
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "A probability outside 0 to 1 is impossible — a total above 1 means you added along branches instead of across.",
            "'Not both' is not 'neither'; write it as 1 – P(both) and check the wording of the question again.",
            "Tree diagrams without replacement must show **changed** second-stage probabilities, and the marks are for those branches, not the answer.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_8 = chapterEight;
