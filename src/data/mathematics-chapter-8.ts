import type { Chapter } from "../lib/notes/types";

// mathematics-chapter-8.ts — chapters 114–120 (Probability)
export const MATHEMATICS_CHAPTERS_8: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 114. Basic Probability
  // ─────────────────────────────────────────────────────────────
  {
    number: 114,
    title: "Basic Probability",
    section: "Probability",
    topic: "Probability Foundations",
    intro: `Probability measures how likely an event is to occur, expressed as a value between 0 (impossible) and 1 (certain). At IGCSE level, you calculate probabilities from equally likely outcomes and apply the addition and complement rules. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Basic Probability",
        body: `**Probability** is a numerical measure of how likely an event is. It is always between 0 and 1 inclusive, where 0 means the event cannot happen and 1 means the event is certain.\n\n**The basic probability formula** for equally likely outcomes:\nP(event) = (number of favourable outcomes) / (total number of equally likely outcomes)\n\n**Example 1:** A fair six-sided die is rolled. Find P(even number). Even numbers on a die: {2, 4, 6} — three favourable outcomes out of six total. P(even) = 3/6 = **1/2**.\n\n**The complement rule:** P(event does NOT happen) = 1 − P(event). This is written P(A') = 1 − P(A). If the probability of rain tomorrow is 0.35, the probability of no rain is 1 − 0.35 = 0.65.\n\n**The addition rule for mutually exclusive events:** Events are **mutually exclusive** if they cannot both happen at the same time. For mutually exclusive events A and B: P(A or B) = P(A) + P(B). For example, P(1 or 6) on a fair die = 1/6 + 1/6 = 2/6 = 1/3.\n\n**Exhaustive events:** A set of events is exhaustive if together they cover all possible outcomes. The probabilities of an exhaustive set of mutually exclusive events must sum to 1.\n\n**Expressing probability:** answers may be given as fractions, decimals, or percentages. Unless the question specifies, any correct form is accepted — but fractions and decimals are preferred over percentages in IGCSE probability.`,
        groups: [
          {
            subTitle: "Key definitions",
            bullets: [
              "**Experiment:** any process whose outcome is not known in advance — rolling a die, drawing a card, selecting a ball.",
              "**Outcome:** a single result from one trial of an experiment — rolling a 4 is one outcome.",
              "**Event:** one or more outcomes grouped together — 'rolling an even number' is an event containing outcomes {2, 4, 6}.",
              "**Sample space:** the complete set of all possible outcomes — for a coin flip: {H, T}.",
              "**Equally likely outcomes:** each outcome has the same probability of occurring — assumed for fair coins, dice, and well-shuffled packs.",
            ],
          },
          {
            subTitle: "Calculating basic probabilities",
            bullets: [
              "**Formula:** P(A) = (number of ways A can occur) / (total number of outcomes) — ensure outcomes are equally likely before applying.",
              "**Complement:** P(A') = 1 − P(A) — if P(getting a 6) = 1/6, then P(not getting a 6) = 5/6.",
              "**Mutually exclusive addition:** P(A or B) = P(A) + P(B) only when A and B cannot occur simultaneously.",
              "**Check the total:** all probabilities in an exhaustive list of mutually exclusive events must add to 1.",
              "**Example — bag of counters:** a bag has 3 red, 5 blue, 2 green counters. P(blue) = 5/10 = 1/2; P(not blue) = 5/10 = 1/2.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using frequencies instead of probabilities:** probability is a proportion, not a count — always divide by the total.",
              "**Adding non-mutually exclusive events directly:** P(A or B) = P(A) + P(B) only holds when A and B cannot overlap.",
              "**Leaving a probability greater than 1:** if your answer exceeds 1, you have made an error — recount outcomes.",
              "**Forgetting the complement shortcut:** when asked for 'at least one', complement is almost always faster — P(at least one) = 1 − P(none).",
            ],
          },
        ],
        examinerTips: [
          "Always state the total number of equally likely outcomes clearly before applying the probability formula — examiners look for this reasoning.",
          "Use fractions or decimals rather than percentages unless the question asks for a percentage — it makes further calculations cleaner.",
          "The complement rule saves time: for 'at least one' or 'not A' events, calculate 1 − P(A) rather than listing all favourable outcomes.",
          "Check that all given probabilities in a table or list sum to 1; if they do not, the question may be asking you to find a missing probability.",
        ],
        commonMistakes: [
          "Writing the number of favourable outcomes as the probability instead of dividing by the total — probability is always a ratio.",
          "Adding probabilities of events that are not mutually exclusive — only use P(A) + P(B) when A and B cannot occur together.",
          "Giving a probability greater than 1 or less than 0 — always sense-check the final answer against the 0 ≤ P ≤ 1 constraint.",
        ],
        recap: [
          "A bag contains 4 red, 3 blue, and 5 green balls. A ball is chosen at random. Find P(red). [1]",
          "The probability that a train is late is 0.15. Find the probability that the train is not late. [1]",
          "P(A) = 1/3 and P(B) = 1/4. Events A and B are mutually exclusive. Find P(A or B). [2]",
          "A fair spinner has sections numbered 1 to 8. Find the probability of landing on a prime number. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 115. Possibility (Sample Space) Diagrams
  // ─────────────────────────────────────────────────────────────
  {
    number: 115,
    title: "Possibility (Sample Space) Diagrams",
    section: "Probability",
    topic: "Probability Foundations",
    intro: `A possibility diagram, also called a sample space diagram, lists or maps out every possible outcome of two or more combined events. These diagrams make it easy to count outcomes for combined events without missing any. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Possibility (Sample Space) Diagrams",
        body: `A **sample space diagram** (or possibility diagram) is a systematic layout of all possible outcomes when two experiments are performed together. The most common form is a **two-way grid**, where the outcomes of one experiment label the rows and the outcomes of the other label the columns — each cell of the grid represents one combined outcome.\n\n**Example — two dice:** Roll two fair six-sided dice and record the sum. Draw a 6 × 6 grid; rows represent die 1 (1–6) and columns represent die 2 (1–6). Each cell shows the sum of the two dice. The grid has 36 equally likely outcomes.\n\nTo find P(sum = 7): count the cells where the sum equals 7 — these are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — six cells. P(sum = 7) = 6/36 = **1/6**.\n\nTo find P(sum > 9): count cells with sum 10, 11, or 12 — there are 6 such cells. P(sum > 9) = 6/36 = **1/6**.\n\n**Lists** can replace grids when there are only two outcomes per experiment (e.g. two coins): {HH, HT, TH, TT} — four equally likely outcomes. P(exactly one head) = 2/4 = 1/2.\n\n**When outcomes are not equally likely** — such as a biased die — a table of probabilities must be used rather than a counting approach.`,
        groups: [
          {
            subTitle: "Drawing a sample space diagram",
            bullets: [
              "**Step 1 — set up axes:** write all outcomes of experiment 1 along one axis and experiment 2 along the other.",
              "**Step 2 — fill each cell:** record the combined outcome (sum, product, pair, or other required value) in each cell.",
              "**Step 3 — count total cells:** for equally likely outcomes the total is simply rows × columns.",
              "**Step 4 — count favourable cells:** count how many cells satisfy the event of interest.",
              "**Step 5 — write the probability:** P(event) = favourable cells / total cells.",
            ],
          },
          {
            subTitle: "Common sample space setups",
            bullets: [
              "**Two dice, sum:** 6 × 6 grid, 36 outcomes; most common IGCSE setup.",
              "**Two dice, product:** same 6 × 6 grid but each cell records the product of the two values.",
              "**Coin and die:** 2 × 6 grid, 12 outcomes — e.g. (H,1), (H,2), …, (T,6).",
              "**Two coins:** list {HH, HT, TH, TT} — 4 equally likely outcomes.",
              "**Two spinners:** rows and columns show spinner values; cells record sum or product as required by the question.",
            ],
          },
          {
            subTitle: "Reading probability from a completed diagram",
            bullets: [
              "**Shade the favourable cells** to avoid counting errors when answering multiple questions from one diagram.",
              "**Check total:** all cells in the grid count as the sample space — do not accidentally exclude any row or column.",
              "**Conditional probability from a grid:** if asked for probability given one die shows 4, only consider that row or column (6 cells).",
              "**Symmetry check:** in a sum-of-two-dice grid, the number of ways to get sum k and sum 14 − k are equal for 2 ≤ k ≤ 12.",
            ],
          },
        ],
        examinerTips: [
          "Always draw the full grid, even if the question asks only about one event — a complete grid prevents miscounting and is worth method marks.",
          "Label the axes clearly with the values for each experiment; examiners credit a correctly structured diagram.",
          "Shade or circle the cells satisfying the event before counting — it reduces the chance of counting the same cell twice.",
          "If the question gives a diagram with some cells missing, complete it fully before answering probability questions.",
        ],
        commonMistakes: [
          "Forgetting that (1,2) and (2,1) are different outcomes — a grid automatically separates them, but a list can miss this.",
          "Dividing by the number of rows instead of the total number of cells — always divide by rows × columns (the full sample space).",
          "Treating a sample space as equally likely when the question describes a biased experiment — read the question carefully.",
        ],
        recap: [
          "Draw a sample space diagram for rolling two fair dice and recording the product. [2]",
          "Using your diagram, find the probability that the product is greater than 20. [2]",
          "Two fair coins are flipped. List all possible outcomes and find P(at least one tail). [2]",
          "A fair die and a fair coin are thrown together. Find the probability of getting a head and a number greater than 4. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 116. Relative & Expected Frequency
  // ─────────────────────────────────────────────────────────────
  {
    number: 116,
    title: "Relative & Expected Frequency",
    section: "Probability",
    topic: "Probability Foundations",
    intro: `Relative frequency estimates probability from experimental data, while expected frequency predicts how many times an event should occur in a given number of trials. Both concepts connect theoretical probability to real-world experiments. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Relative & Expected Frequency",
        body: `**Relative frequency** (also called **experimental probability**) is the proportion of trials in which an event occurs:\n\nRelative frequency = (number of times event occurs) / (total number of trials)\n\nRelative frequency provides an estimate of probability based on observed data. As the number of trials increases, the relative frequency gets closer and closer to the true (theoretical) probability — this is the **law of large numbers**.\n\n**Example:** A press machine produces components. In 500 trials, 15 components are defective. Relative frequency of defective = 15/500 = 0.03. This estimates P(defective) ≈ 0.03.\n\n**Expected frequency** tells you how many times an event is expected to occur in n trials:\n\nExpected frequency = probability × number of trials\n\n**Example:** A fair die is rolled 300 times. Expected frequency of rolling a 6 = (1/6) × 300 = **50 times**.\n\n**Detecting bias:** if a coin is flipped 1000 times and heads appears 620 times, the relative frequency of heads is 0.62, which differs noticeably from 0.5, suggesting the coin may be biased.\n\nNote: expected frequency is what you *predict* will happen on average — the actual result of an experiment may differ due to chance.`,
        groups: [
          {
            subTitle: "Relative frequency",
            bullets: [
              "**Formula:** relative frequency = frequency of event ÷ total number of trials.",
              "**Range:** relative frequency is always between 0 and 1, just like probability.",
              "**Improves with more trials:** a small number of trials can give unreliable estimates; larger trials give better estimates.",
              "**When to use:** use relative frequency when no theoretical probability can be calculated — e.g. for biased spinners, real traffic data, or sports results.",
              "**Example:** a spinner lands on red 48 times in 200 spins; relative frequency = 48/200 = 0.24.",
            ],
          },
          {
            subTitle: "Expected frequency",
            bullets: [
              "**Formula:** expected frequency = P(event) × number of trials.",
              "**Not a guarantee:** expected frequency is an average prediction; actual results vary each time.",
              "**Example:** P(blue) = 0.3; in 500 trials, expected frequency = 0.3 × 500 = 150.",
              "**Back-calculating probability:** if 60 out of 200 trials produced event A, estimated P(A) = 60/200 = 0.3.",
              "**Comparing with actual:** if expected frequency is 50 but actual is 85, the event is occurring more often than expected — suggesting bias or changed conditions.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Giving expected frequency as a probability:** expected frequency is a count (e.g. 50 times), not a proportion — do not write 50/300.",
              "**Rounding too early:** keep fractions exact through the calculation and round only the final answer.",
              "**Assuming relative frequency equals theoretical probability:** relative frequency only estimates the true probability — especially unreliable for small sample sizes.",
              "**Forgetting units on expected frequency:** expected frequency is a number of outcomes, so write '50 times' or just '50', not '50/300'.",
            ],
          },
        ],
        examinerTips: [
          "Show the formula and substitution when calculating expected frequency — it earns the method mark even if arithmetic slips.",
          "When comparing relative frequencies across different numbers of trials, convert to decimals so the comparison is fair.",
          "If asked whether a die or spinner is fair, compare the relative frequencies to the theoretical values and comment on whether they are close.",
          "Expected frequency can be a decimal in theory — if the question asks for a whole number of items, round appropriately and state that you have rounded.",
        ],
        commonMistakes: [
          "Calculating relative frequency as (total trials) / (frequency) instead of the other way round — always put the event count in the numerator.",
          "Confusing expected frequency (a count) with probability (a proportion between 0 and 1) — they are related by multiplication by n.",
        ],
        recap: [
          "A biased coin is flipped 400 times. Heads appears 260 times. Find the relative frequency of heads. [1]",
          "Using your answer, estimate the probability of tails on a single flip. [1]",
          "A fair die is rolled 240 times. Find the expected frequency of rolling a multiple of 3. [2]",
          "In 50 trials, event A occurs 18 times. Explain why this relative frequency may not equal the true probability of A. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 117. Two-Way Tables
  // ─────────────────────────────────────────────────────────────
  {
    number: 117,
    title: "Two-Way Tables",
    section: "Probability",
    topic: "Combined Probability",
    intro: `Two-way tables organise data for two categorical variables simultaneously, making it straightforward to read off counts for joint events and calculate probabilities. Reading row and column totals carefully is essential to avoid errors. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Two-Way Tables",
        body: `A **two-way table** (also called a **contingency table**) displays data for two categorical variables at the same time. Rows represent one variable, columns represent another, and each cell gives the count of individuals sharing both characteristics.\n\n**Example:**\n\n|          | Likes sport | Does not like sport | Total |\n|----------|-------------|---------------------|-------|\n| Male     | 35          | 15                  | 50    |\n| Female   | 20          | 30                  | 50    |\n| **Total**| 55          | 45                  | 100   |\n\nFrom this table:\n- P(male) = 50/100 = 1/2\n- P(likes sport) = 55/100 = 11/20\n- P(male AND likes sport) = 35/100 = 7/20\n- P(female OR does not like sport) = (50 + 45 − 30)/100 = 65/100 = 13/20\n\n**Conditional probability from a two-way table:** P(A | B) means the probability of A *given* B has already occurred. Restrict the sample space to row or column B, then count how many also satisfy A.\n\n**Example:** P(likes sport | male) = 35/50 = 7/10 — only look at the 'Male' row (50 people) and count those who like sport (35).\n\nAlways check that row totals and column totals both add to the grand total — this is a quick consistency check.`,
        groups: [
          {
            subTitle: "Reading and completing two-way tables",
            bullets: [
              "**Row totals:** sum across all columns in a row to get the total for that category.",
              "**Column totals:** sum down all rows in a column to get the total for that attribute.",
              "**Grand total:** the sum of all row totals (or all column totals) — both methods should give the same number.",
              "**Missing cells:** if a row total and some cells are given, subtract to find the missing cell value.",
              "**Example:** if row total = 60 and two cells are 25 and 20, the third cell = 60 − 25 − 20 = 15.",
            ],
          },
          {
            subTitle: "Calculating probabilities from the table",
            bullets: [
              "**Simple probability:** P(event A) = (total count in A's row or column) / grand total.",
              "**Joint probability:** P(A and B) = cell count at intersection of A and B / grand total.",
              "**Conditional probability:** P(A | B) = cell count at intersection of A and B / row or column total for B.",
              "**'Or' probability:** P(A or B) = P(A) + P(B) − P(A and B) — subtract the intersection to avoid double-counting.",
              "**Example:** P(female or likes sport) = 50/100 + 55/100 − 20/100 = 85/100 = 17/20.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using the grand total for conditional probability:** for P(A | B), restrict to B's total (row or column), not the grand total.",
              "**Double-counting in 'or' problems:** add P(A) + P(B) but then subtract P(A and B) to avoid counting the overlap twice.",
              "**Misreading rows and columns:** identify which variable is in rows and which is in columns before reading any cell.",
              "**Forgetting to check totals:** always verify that your completed table's row and column totals are consistent.",
            ],
          },
        ],
        examinerTips: [
          "Complete any missing cells in a two-way table before attempting probability calculations — a fully filled table prevents arithmetic errors.",
          "Highlight the row or column you are restricting to for conditional probability questions — it makes the denominator clear.",
          "For 'P(A and B)' questions, go directly to the intersection cell; do not multiply row and column probabilities unless independence is confirmed.",
          "Write P(A | B) = [cell count] / [B total] in a single step to show examiners you understand conditional probability structure.",
        ],
        commonMistakes: [
          "Dividing the intersection cell by the grand total for a conditional probability — the denominator must be the total for the given condition, not the whole sample.",
          "Summing row and column counts without subtracting the overlap when calculating P(A or B).",
        ],
        recap: [
          "Complete a two-way table given row and column totals with one missing cell. [2]",
          "From a two-way table, find P(A and B) where A and B are two categories. [1]",
          "Find P(B | A) from a two-way table, clearly stating the denominator you use. [2]",
          "Using a two-way table, find P(A or B), showing all working including the subtraction of the intersection. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 118. Probabilities from Venn Diagrams
  // ─────────────────────────────────────────────────────────────
  {
    number: 118,
    title: "Probabilities from Venn Diagrams",
    section: "Probability",
    topic: "Combined Probability",
    intro: `Venn diagrams represent sets and their relationships visually, allowing probabilities of intersections, unions, and complements to be read directly from the diagram. Understanding the notation A ∩ B, A ∪ B, and A' is essential for every Venn diagram question. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Probabilities from Venn Diagrams",
        body: `A **Venn diagram** uses overlapping circles inside a rectangle (the **universal set** ξ) to show which elements belong to each set and which are shared.\n\n**Key notation:**\n- A ∩ B — **intersection**: elements in both A and B (the overlapping region).\n- A ∪ B — **union**: elements in A or B or both.\n- A' — **complement**: elements not in A.\n- ξ — the **universal set**: every element under consideration.\n\n**Example:** In a class of 30 students, 18 study French (F), 12 study German (G), and 7 study both. The number studying French only = 18 − 7 = 11; German only = 12 − 7 = 5; neither = 30 − 11 − 7 − 5 = 7.\n\nFrom the completed diagram:\n- P(F ∩ G) = 7/30\n- P(F ∪ G) = (11 + 7 + 5)/30 = 23/30\n- P(F') = 1 − 18/30 = 12/30 = 2/5\n- P(F | G) = P(F ∩ G) / P(G) = (7/30) / (12/30) = 7/12\n\n**Three overlapping sets:** For three circles A, B, C, always fill in the innermost region (A ∩ B ∩ C) first, then the two-set overlaps, then the single-set regions, and finally the 'none' region outside all circles.\n\n**Addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B). This prevents double-counting the intersection.`,
        groups: [
          {
            subTitle: "Filling in a Venn diagram",
            bullets: [
              "**Start with the intersection:** place the count for A ∩ B in the overlapping region first.",
              "**A only:** count in A only = total in A − count in A ∩ B.",
              "**B only:** count in B only = total in B − count in A ∩ B.",
              "**Outside both circles:** elements in ξ but not in A or B = total − A only − B only − A ∩ B.",
              "**Check:** sum of all regions must equal the total number of elements in ξ.",
            ],
          },
          {
            subTitle: "Reading probabilities from the diagram",
            bullets: [
              "**P(A):** add all values inside circle A (A only + A ∩ B), then divide by the grand total.",
              "**P(A ∩ B):** value in the overlapping region divided by the grand total.",
              "**P(A ∪ B):** sum of all values inside either circle (A only + A ∩ B + B only), divided by the grand total.",
              "**P(A'):** sum of all values outside circle A, divided by the grand total; or use 1 − P(A).",
              "**P(A | B):** value in A ∩ B divided by the total in circle B (not the grand total).",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Placing the total in A in the circle rather than A only:** the overlapping part is counted separately — place A ∩ B in the overlap, then A only in the non-overlapping part of A.",
              "**Using the grand total for conditional probability:** P(A | B) uses the total in B as the denominator.",
              "**Forgetting the 'outside all circles' region:** elements in ξ but not in any set must be placed outside all circles.",
              "**Double-counting the intersection for P(A ∪ B):** the overlap region is counted once in A and once in B — subtract it once: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
            ],
          },
        ],
        examinerTips: [
          "Always fill the intersection region first when given totals for each set and the overlap — this anchors all subsequent calculations.",
          "Write every region's value in the diagram before answering any probability question; a fully labelled diagram earns marks.",
          "For conditional probability P(A | B), write 'restricted to B' and show the denominator clearly — examiners look for correct reasoning, not just the number.",
          "Verify by adding all regions and confirming the sum equals the total — a quick arithmetic check before answering saves marks.",
        ],
        commonMistakes: [
          "Writing the full set count (e.g. n(A) = 18) inside the circle instead of the 'A only' count — the overlap value must be subtracted first.",
          "Calculating P(A ∪ B) as simply P(A) + P(B) without subtracting the intersection — this overcounts every element in A ∩ B.",
        ],
        recap: [
          "In a group of 40 people, 25 own a cat (C), 18 own a dog (D), and 10 own both. Draw a Venn diagram and find the number who own neither. [3]",
          "From your diagram, find P(C ∪ D). [1]",
          "Find P(C | D) from your diagram. [2]",
          "A student says P(C ∪ D) = P(C) + P(D). Explain why this is incorrect and state the correct formula. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 119. Probability Tree Diagrams
  // ─────────────────────────────────────────────────────────────
  {
    number: 119,
    title: "Probability Tree Diagrams",
    section: "Probability",
    topic: "Combined Probability",
    intro: `Tree diagrams systematically map out all possible outcomes across two or more sequential events, with probabilities on the branches. Multiplying along branches gives the probability of a sequence, and adding across relevant end-points gives the overall probability of an event. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Probability Tree Diagrams",
        body: `A **probability tree diagram** shows each stage of a multi-stage experiment as a set of branches. Each branch is labelled with the probability of that outcome, and each set of branches from one node must sum to 1.\n\n**Two rules for using tree diagrams:**\n1. **Multiply along branches** to find the probability of a combined outcome (AND rule).\n2. **Add across branches** to find the probability when multiple routes lead to the same event (OR rule).\n\n**Example — bag with replacement:** A bag contains 3 red and 2 blue balls. A ball is chosen, its colour noted, and replaced. A second ball is then chosen.\n\n- P(RR) = 3/5 × 3/5 = 9/25\n- P(RB) = 3/5 × 2/5 = 6/25\n- P(BR) = 2/5 × 3/5 = 6/25\n- P(BB) = 2/5 × 2/5 = 4/25\n- Total = 25/25 = 1 ✓\n\nP(exactly one red) = P(RB) + P(BR) = 6/25 + 6/25 = **12/25**.\n\n**Without replacement:** probabilities on the second set of branches change because one ball has been removed.\n\n- P(RR without replacement) = 3/5 × 2/4 = 6/20 = 3/10\n\nNotice the denominator on the second branches becomes 4 (not 5), and the numerator of the same colour decreases by 1.\n\n**Three-stage trees** work the same way — add more levels of branches, multiply along the full path, and add the relevant end-products.`,
        groups: [
          {
            subTitle: "Drawing and labelling a tree diagram",
            bullets: [
              "**First stage:** draw branches from a starting point, one per possible outcome; label each branch with its probability.",
              "**Second stage:** from each first-stage endpoint, draw a new set of branches with updated probabilities.",
              "**Branch probabilities sum to 1:** from any node, all branches leaving it must sum to 1 — use this to find missing probabilities.",
              "**Label the endpoints:** write the combined outcome (e.g. RR, RB) at each endpoint for easy reference.",
              "**Check the end-products:** sum all the products at the endpoints — they must total 1.",
            ],
          },
          {
            subTitle: "With and without replacement",
            bullets: [
              "**With replacement:** the composition of the bag is the same for every draw — probabilities on second branches are identical to first branches.",
              "**Without replacement:** the total number of items decreases by 1 after each draw; if the drawn item was colour X, reduce the count of X by 1 on second branches.",
              "**Example (without replacement, 3R 2B):** after drawing red, second branch P(R) = 2/4, P(B) = 2/4.",
              "**Conditional language:** 'given that the first ball was red' tells you to look only at the branch after drawing red.",
              "**Independence check:** events are independent if the probability on second branches does not change — this only holds with replacement.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Adding instead of multiplying along branches:** to find P(A and B), multiply P(A) × P(B|A) along the path — do not add.",
              "**Forgetting to change probabilities for 'without replacement':** both the numerator and denominator on the second branches must be updated.",
              "**Missing a branch when finding 'at least one':** identify all paths satisfying the event and add all their products.",
              "**Branch probabilities not summing to 1:** always verify — if branches from a node sum to more or less than 1, there is an error.",
            ],
          },
        ],
        examinerTips: [
          "Draw the full tree before attempting any calculation — a correctly drawn tree earns marks even if subsequent arithmetic is wrong.",
          "Show the multiplication on the page: write P(RR) = 3/5 × 3/5 = 9/25 in full — this is required for method marks.",
          "For 'at least one' events, use the complement: P(at least one R) = 1 − P(no R) — it's usually one calculation instead of several.",
          "Re-read the question after completing the tree to confirm whether replacement is stated — this single detail changes all second-branch probabilities.",
        ],
        commonMistakes: [
          "Adding branch probabilities instead of multiplying to find the probability of a combined path.",
          "Using the same probabilities on second branches for a 'without replacement' problem — the counts must be reduced by the drawn item.",
        ],
        recap: [
          "A bag has 4 green and 1 yellow ball. Two balls are drawn without replacement. Draw a tree diagram and find P(both green). [3]",
          "Using the same diagram, find P(exactly one yellow ball). [2]",
          "A fair coin is flipped three times. Find P(exactly two heads) using a tree diagram. [3]",
          "Explain the difference in how you fill the second set of branches for 'with replacement' versus 'without replacement'. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 120. Combined Probability
  // ─────────────────────────────────────────────────────────────
  {
    number: 120,
    title: "Combined Probability",
    section: "Probability",
    topic: "Combined Probability",
    intro: `Combined probability brings together the multiplication rule for independent (and dependent) events and the addition rule for mutually exclusive events to solve multi-event problems. Choosing the right rule — and knowing when events are independent — is the key skill at this level. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Combined Probability",
        body: `**Combined probability** refers to finding the probability of two or more events occurring together or in some combination. The two fundamental rules are:\n\n**Multiplication rule (AND):**\n- For **independent events:** P(A and B) = P(A) × P(B)\n- For **dependent events:** P(A and B) = P(A) × P(B|A)\n\n**Addition rule (OR):**\n- For **mutually exclusive events:** P(A or B) = P(A) + P(B)\n- For **non-mutually exclusive events:** P(A or B) = P(A) + P(B) − P(A ∩ B)\n\n**Independence:** Two events are **independent** if the occurrence of one does not affect the probability of the other. Rolling a die and flipping a coin are independent. Drawing with replacement gives independent draws.\n\n**Example 1 — independent:** P(rolling a 6 on a die AND getting heads on a coin) = 1/6 × 1/2 = **1/12**.\n\n**Example 2 — dependent:** A bag has 5 red and 3 blue balls. Two drawn without replacement. P(first red and second blue) = 5/8 × 3/7 = **15/56**.\n\n**Example 3 — OR rule:** A card is drawn from a standard 52-card deck. P(heart or king) = 13/52 + 4/52 − 1/52 = 16/52 = **4/13**. The king of hearts is in both sets, so it is subtracted once.\n\n**Testing independence:** P(A and B) = P(A) × P(B) holds if and only if A and B are independent. If the product equals the intersection probability from a table or diagram, the events are independent.`,
        groups: [
          {
            subTitle: "Multiplication rule",
            bullets: [
              "**Independent events (AND):** P(A ∩ B) = P(A) × P(B) — use when one event does not affect the other.",
              "**Dependent events (AND):** P(A ∩ B) = P(A) × P(B|A) — use when the second probability changes after the first event.",
              "**Three events:** P(A ∩ B ∩ C) = P(A) × P(B|A) × P(C|A ∩ B) — extend the rule along each stage.",
              "**Example — independent:** P(two sixes in a row) = 1/6 × 1/6 = 1/36.",
              "**Example — dependent:** P(two aces from a deck, no replacement) = 4/52 × 3/51 = 12/2652 = 1/221.",
            ],
          },
          {
            subTitle: "Addition rule",
            bullets: [
              "**Mutually exclusive (OR):** P(A ∪ B) = P(A) + P(B) — events cannot happen simultaneously, so no overlap to subtract.",
              "**Non-mutually exclusive (OR):** P(A ∪ B) = P(A) + P(B) − P(A ∩ B) — subtract the intersection once.",
              "**At least one:** P(at least one) = 1 − P(none) — complement is usually faster when 'none' is easy to calculate.",
              "**Example:** P(getting at least one 6 in two rolls) = 1 − P(no 6) = 1 − 5/6 × 5/6 = 1 − 25/36 = 11/36.",
              "**Testing mutual exclusivity:** two events are mutually exclusive if P(A ∩ B) = 0 — they share no outcomes.",
            ],
          },
          {
            subTitle: "Common exam traps",
            bullets: [
              "**Using the multiplication rule for dependent events without adjusting probabilities:** after drawing one item, the remaining pool changes — update numerator and denominator.",
              "**Applying the simple addition rule to overlapping events:** always check whether P(A ∩ B) > 0 before using P(A) + P(B).",
              "**Confusing independence with mutual exclusivity:** independent events can both occur; mutually exclusive events cannot occur together.",
              "**Not using the complement for 'at least one' events:** direct calculation requires summing many cases; complement reduces it to one subtraction.",
            ],
          },
        ],
        examinerTips: [
          "Identify before calculating whether events are independent (replacement, different experiments) or dependent (no replacement, conditional) — this determines which formula to use.",
          "Show P(A) × P(B) or P(A) × P(B|A) explicitly on the page — multi-step probability questions award marks for correct method even with arithmetic errors.",
          "For 'at least one' or 'at least two' problems, always try the complement first — it usually halves the number of calculations needed.",
          "When combining AND and OR in one problem (e.g. P(exactly one success in two trials)), write out each favourable path and add their products.",
        ],
        commonMistakes: [
          "Multiplying probabilities when the OR rule is needed, or adding when the AND rule applies — read the question carefully for 'and' versus 'or' language.",
          "Forgetting to subtract the intersection when events overlap in an OR calculation — P(A or B) ≠ P(A) + P(B) unless events are mutually exclusive.",
        ],
        recap: [
          "A fair die is rolled twice. Find P(getting a 3 on both rolls). [2]",
          "A bag contains 6 red and 4 blue counters. Two are drawn without replacement. Find P(one red and one blue), in any order. [3]",
          "Events A and B are such that P(A) = 0.4, P(B) = 0.5, and P(A ∩ B) = 0.2. Find P(A ∪ B) and determine whether A and B are independent. [3]",
          "In a game, P(winning each round) = 1/3. Find P(winning at least one of the first two rounds). [3]",
        ],
      },
    ],
  },
];
