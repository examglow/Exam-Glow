import type { Chapter } from "./types";

const chapterEight: Chapter = {
  number: 8,
  title: "Probability",
  intro: `Probability turns uncertainty into a number between 0 and 1, and every IGCSE question on the topic rewards the same habits: **list outcomes systematically**, **label every branch or cell**, and **show the method** even when the answer looks obvious.\n\nThis chapter covers the full Cambridge IGCSE syllabus — basic probability, possibility diagrams, relative frequency, two-way tables, Venn diagrams, tree diagrams, and the combined probability rules for independent, mutually exclusive, and conditional events.`,
  subheadings: [
    {
      title: "Basic Probability",
      body: `**Probability** measures the likelihood of an event on a scale from **0 (impossible)** to **1 (certain)**. For equally likely outcomes, **P(event) = number of favourable outcomes ÷ total number of equally likely outcomes**. The result may be expressed as a fraction, a decimal, or a percentage — all three forms are acceptable unless the question specifies one.\n\nThe single most useful shortcut in the chapter is the **complement rule**: **P(A) + P(A′) = 1**, where A′ means "not A". If the probability of picking a red ball is 3/7, the probability of not picking red is 4/7 without any further counting.`,
      groups: [
        {
          subTitle: "Core ideas and vocabulary",
          bullets: [
            "**Outcome:** one specific result of a trial, for example rolling a 4 on a die.",
            "**Event:** one or more outcomes grouped together, for example rolling an even number.",
            "**Equally likely outcomes:** each outcome has the same chance of occurring, which is the assumption behind P = favourable ÷ total.",
            "**Probability scale:** 0 means the event cannot happen; 1 means it must happen; 0.5 means equally likely to happen or not.",
            "**Complement rule P(A′) = 1 − P(A):** use it whenever it is easier to count what you do not want than what you do.",
            "**Expressing the answer:** a fraction should be in its simplest form; a decimal is acceptable to 2 or 3 significant figures; a percentage is the fraction × 100.",
          ],
        },
        {
          subTitle: "Applying the formula",
          bullets: [
            "**Count total outcomes first:** for a bag of 3 red, 5 blue, 2 green counters the total is 10, not 3 (the number of colours).",
            "**Identify favourable outcomes precisely:** 'picking a primary colour' in that bag means red and blue, so favourable = 8.",
            "**Simplify the fraction:** 8/10 simplifies to 4/5; leaving it unsimplified loses the final mark in many mark schemes.",
            "**Check the scale:** a probability calculated as 1.3 or −0.2 must contain an arithmetic error — go back and recount.",
            "**Use the complement for 'at least one':** P(at least one six in four rolls) = 1 − P(no six in four rolls) = 1 − (5/6)⁴, which is far quicker than adding four separate cases.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Confusing outcomes with events:** a standard die has 6 outcomes, not 2 events (odd/even) — always divide by the number of individual outcomes.",
            "**Forgetting to simplify:** 6/36 written as a final answer will often lose the accuracy mark; always cancel to 1/6.",
            "**Misreading 'not A':** P(A′) = 1 − P(A), not 1 + P(A) or P(A) − 1.",
          ],
        },
      ],
    },
    {
      title: "Possibility (Sample Space) Diagrams",
      body: `A **possibility diagram** (also called a **sample space diagram**) lists every possible outcome of two combined events in a grid or table, so that outcomes can simply be counted. One event's outcomes label the rows, the other event's outcomes label the columns, and each cell contains the combined result — for example the total of two dice, or a letter-and-digit pair. **All cells are equally likely**, so P(condition) = number of cells satisfying the condition ÷ total number of cells.\n\nThis method is especially reliable for **two dice**, **a coin and a die**, or **two spinners**, because every outcome is visible and no case can be accidentally omitted.`,
      groups: [
        {
          subTitle: "Constructing the diagram",
          bullets: [
            "**Label axes completely:** write every outcome of die 1 along the top and every outcome of die 2 down the side before filling in a single cell.",
            "**Fill each cell with the combined result:** for a sum grid write the total; for a product grid write the product; for a combined event write the ordered pair.",
            "**Count the total cells first:** two six-sided dice give 6 × 6 = 36 cells, two four-sided dice give 4 × 4 = 16 cells — use this as the denominator.",
            "**Circle or shade the cells that satisfy the condition:** then count them for the numerator.",
            "**Ordered pairs matter:** (2, 5) and (5, 2) are different cells even though both give a sum of 7, so they count as two separate outcomes.",
            "**Double-check the boundary cells:** the top-left and bottom-right corners are the most frequently missed in diagonal conditions such as 'score the same on both dice'.",
          ],
        },
        {
          subTitle: "Reading probabilities from the diagram",
          bullets: [
            "**P(sum = 7):** count cells where entries equal 7; there are 6 such cells in a 6×6 grid, so P = 6/36 = 1/6.",
            "**P(sum > 9):** shade sums 10, 11, 12; there are 6 cells, so P = 6/36 = 1/6.",
            "**P(at least one 6):** count cells containing a 6 in either coordinate; there are 11 out of 36.",
            "**P(both scores the same):** the leading diagonal has 6 cells, so P = 6/36 = 1/6.",
            "**Combined coin and die grid:** rows are H and T, columns are 1–6, giving 12 equally likely cells.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Using 11 as the denominator for two dice:** there are 11 possible totals (2 to 12) but 36 equally likely outcomes; the denominator must be 36.",
            "**Missing the grid entirely:** writing P(sum = 7) = 1/6 without a diagram earns the answer mark but loses the method mark — always draw the grid.",
            "**Counting unordered pairs:** (1, 6) and (6, 1) are two cells, not one, so the count of 'sum = 7' is 6, not 3.",
          ],
        },
      ],
    },
    {
      title: "Relative and Expected Frequency",
      body: `**Relative frequency** is calculated from an actual experiment: **relative frequency = number of times the event occurs ÷ total number of trials**. It is an *estimate* of the theoretical probability, and by the **Law of Large Numbers** this estimate becomes more accurate as the number of trials increases. If a drawing pin is dropped 200 times and lands point-up 130 times, the estimated probability is 130/200 = 0.65.\n\n**Expected frequency** runs in the opposite direction — from a known probability to a prediction: **expected frequency = probability × number of trials**. These two quantities, observed and expected, are compared to decide whether a spinner or die is fair.`,
      groups: [
        {
          subTitle: "Relative frequency in practice",
          bullets: [
            "**Formula:** relative frequency = frequency of outcome ÷ total number of trials, giving a value between 0 and 1.",
            "**It is an estimate, not the true probability:** two people doing the same experiment get slightly different relative frequencies, but both approach the same theoretical value as n grows.",
            "**Law of Large Numbers:** the more trials carried out, the closer the relative frequency gets to the true theoretical probability — state this explicitly when asked why a larger sample gives a better estimate.",
            "**Plotting relative frequency against n:** the graph starts erratic for small n and gradually settles to a horizontal line near the true probability.",
            "**Reading from a frequency table:** divide the frequency in a cell by the row or column total, not by the grand total, unless the question asks for overall probability.",
          ],
        },
        {
          subTitle: "Expected frequency and fairness",
          bullets: [
            "**Expected frequency = P(event) × number of trials:** for a fair six-sided die rolled 120 times, each face is expected 120/6 = 20 times.",
            "**Comparing observed with expected:** if one face appears 35 times when 20 are expected, there is evidence of bias — say so, but acknowledge that some variation is always expected by chance.",
            "**Do not declare bias from a small sample:** 10 trials is far too few; ask for more evidence before drawing conclusions.",
            "**Using expected frequency to find probability:** if a question says 'the expected number of red counters in 50 draws is 15', then P(red) = 15/50 = 0.3.",
            "**Percentage comparison:** some questions present observed frequencies as percentages; convert them back to counts (frequency = percentage × n ÷ 100) before comparing with expected values.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Treating relative frequency as the exact probability:** it is an estimate; the true probability may differ, especially for small n.",
            "**Using the number of categories as the denominator:** if a spinner is spun 60 times and has 4 sectors, the denominator is 60, not 4.",
            "**Rounding relative frequency too early:** keep at least 3 significant figures in intermediate steps, then round the final answer.",
          ],
        },
      ],
    },
    {
      title: "Two-Way Tables",
      body: `A **two-way table** (also called a **contingency table**) displays the frequency for two categorical variables at once. One variable defines the rows, the other defines the columns, and each cell contains the count for that combination. **Row totals and column totals appear in the margins**, and the bottom-right cell is the grand total. Reading probabilities from a two-way table follows the same rule as basic probability: **P(event) = relevant cell or margin total ÷ grand total**.`,
      groups: [
        {
          subTitle: "Reading and completing the table",
          bullets: [
            "**Identify the grand total:** it sits at the bottom-right corner and is the denominator for any overall probability.",
            "**Row totals and column totals must add to the grand total:** use this to find missing cells — if a row total is 45 and two cells give 18 and 14, the third cell is 45 − 18 − 14 = 13.",
            "**Joint frequency:** the count in a specific cell gives the number of outcomes satisfying both conditions, e.g. 'female and passed'.",
            "**Marginal frequency:** the row or column total gives the count for one variable alone, e.g. 'all females' regardless of result.",
            "**P(A and B):** read the intersection cell and divide by the grand total.",
            "**P(A or B):** add the row total for A and the column total for B, subtract the intersection cell to avoid double-counting, then divide by the grand total.",
            "**Conditional probability from the table:** P(passed | female) = (number of females who passed) ÷ (total females) — restrict to that row only.",
          ],
        },
        {
          subTitle: "Common table calculations",
          bullets: [
            "**Finding a missing cell:** use the constraint that every row and column must sum to its margin total.",
            "**Fraction form answer:** express the cell count over the grand total and simplify.",
            "**Checking your table:** verify that all row totals sum to the grand total and all column totals also sum to the grand total before calculating any probabilities.",
            "**Combined condition P(A and B):** this is the intersection cell divided by the grand total, not the product of the two margins.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Using the wrong denominator for conditional probability:** P(B|A) uses the row (or column) total for A, not the grand total.",
            "**Confusing joint frequency with marginal frequency:** the joint count is in the body of the table; the marginal count is in the border.",
            "**Double-counting for 'A or B':** add the two margins and subtract the intersection once; forgetting to subtract gives a probability greater than 1.",
          ],
        },
      ],
    },
    {
      title: "Probabilities from Venn Diagrams",
      body: `A **Venn diagram** places outcomes or frequencies in overlapping circles inside a rectangle that represents the entire sample space. The key regions are: **A only** (inside A, outside B), **B only** (inside B, outside A), **A ∩ B** (inside both), and **neither** (outside both circles). The addition rule connects the regions: **P(A ∪ B) = P(A) + P(B) − P(A ∩ B)**, which corrects for the intersection being counted twice. For three-set diagrams, always fill in the **central intersection** first and work outward.`,
      groups: [
        {
          subTitle: "Building the diagram from given information",
          bullets: [
            "**Start from the intersection:** if you know n(A ∩ B), write that in the overlap first; then subtract it from n(A) to get the A-only region.",
            "**A-only region = n(A) − n(A ∩ B):** similarly B-only = n(B) − n(A ∩ B).",
            "**Neither region = grand total − n(A ∪ B):** find n(A ∪ B) using the addition rule, then subtract from the total.",
            "**Check by summing all four regions:** A only + B only + A ∩ B + neither should equal the grand total.",
            "**Three-set diagrams:** work from the innermost region (A ∩ B ∩ C) outward through pairwise intersections to the single-set regions and finally to 'none of the three'.",
            "**Labelling:** write the frequency (or probability) inside each region, not on the circle boundary.",
          ],
        },
        {
          subTitle: "Reading probabilities from the diagram",
          bullets: [
            "**P(A):** add all regions inside circle A (A only + A ∩ B) and divide by the total.",
            "**P(A ∩ B):** the intersection region ÷ total.",
            "**P(A ∪ B):** all regions inside either circle ÷ total, or use P(A) + P(B) − P(A ∩ B).",
            "**P(A only) = P(A) − P(A ∩ B):** this is the region inside A but not shared with B.",
            "**P(A | B):** restrict the sample space to circle B; then P(A|B) = n(A ∩ B) ÷ n(B).",
            "**P(neither):** the outside region ÷ total; equivalent to 1 − P(A ∪ B).",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Writing n(A) in the intersection:** n(A) is the total inside circle A including the overlap; write n(A ∩ B) in the shared region, then n(A) − n(A ∩ B) in the A-only part.",
            "**Forgetting the neither region:** if the numbers inside the circles do not add to the grand total, the difference belongs outside both circles.",
            "**Applying the addition rule without subtracting the intersection:** P(A ∪ B) = P(A) + P(B) is only correct when A and B are mutually exclusive; in general you must subtract P(A ∩ B).",
          ],
        },
      ],
    },
    {
      title: "Probability Tree Diagrams",
      body: `A **probability tree diagram** shows two or more successive events as a branching structure. Each **branch** leads to one outcome, its probability is written beside the branch, and **all branches from any single node must sum to 1**. To find the probability of a path through the tree, **multiply the probabilities along that path** (AND rule). To find the probability of several mutually exclusive paths that all lead to the same overall outcome, **add the products** (OR rule). For events **without replacement**, the probabilities on the second set of branches must be recalculated after the first outcome has been removed.`,
      groups: [
        {
          subTitle: "Drawing and labelling the tree",
          bullets: [
            "**Draw all first-stage branches from a single point:** label each branch with its outcome and probability.",
            "**Draw all second-stage branches from each first-stage endpoint:** there is one complete set of second-stage branches for every first-stage outcome.",
            "**Write probabilities beside branches, outcomes at the ends:** this is what examiners check before looking at calculations.",
            "**Branch sum check:** the probabilities leaving any node must add to 1 exactly — use this to find a missing branch probability.",
            "**Without replacement:** if the first draw removes an item, reduce the total by 1 for all second-stage branches; if the first draw also removes a specific type, reduce that type's count by 1 on the branch that follows it.",
            "**Three-stage trees:** multiply three fractions along each path; add the products for every path that leads to the required event.",
          ],
        },
        {
          subTitle: "Calculating probabilities from the tree",
          bullets: [
            "**P(A and B) = P(A) × P(B|A):** multiply along the branch; this is the general multiplication rule.",
            "**P(independent A and B) = P(A) × P(B):** when replacement is used, the second probability is unchanged.",
            "**P(one red and one blue in two draws):** identify the two paths (R then B, B then R), multiply along each, then add the two products.",
            "**P(at least one red):** either list all paths containing at least one red and add, or use 1 − P(no red) — the complement route is shorter.",
            "**Verify:** the sum of all end-of-path products must equal 1; a sum of 0.99 or 1.01 indicates a rounding error somewhere.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Adding along branches instead of multiplying:** probabilities along a single path are multiplied; only separate paths are added.",
            "**Forgetting to change second-stage probabilities without replacement:** if 4 red from 10 are drawn first, the second draw is from 9 total, with either 3 or 4 red remaining depending on the first outcome.",
            "**Leaving second-stage branch sums that do not equal 1:** examiners check this explicitly and mark it as an error even if the final answer is correct.",
          ],
        },
      ],
    },
    {
      title: "Combined Probability",
      body: `The **combined probability** rules unify the methods from previous sections into a set of algebraic statements. For **independent events**, knowing that one has occurred gives no information about the other: **P(A and B) = P(A) × P(B)**. For **mutually exclusive events**, both cannot occur at the same time, so their intersection is empty: **P(A or B) = P(A) + P(B)**. For the **Extended curriculum**, **conditional probability** captures situations where one event's occurrence does affect the other: **P(A | B) = P(A ∩ B) ÷ P(B)**, read as "the probability of A given that B has occurred".`,
      groups: [
        {
          subTitle: "Independent events",
          bullets: [
            "**Definition:** two events are independent when the outcome of one does not change the probability of the other.",
            "**Multiplication rule:** P(A and B) = P(A) × P(B) whenever A and B are independent — this is the formula to use for 'with replacement' draws or for two separate trials.",
            "**Testing independence:** P(A and B) = P(A) × P(B) if and only if A and B are independent; check this numerically from a table if the question asks you to verify independence.",
            "**Extended: P(A ∩ B) notation:** the intersection symbol ∩ means AND; use it in formal notation questions.",
            "**Repeated independent trials:** P(all n succeed) = P(success)ⁿ; P(all n fail) = P(fail)ⁿ.",
          ],
        },
        {
          subTitle: "Mutually exclusive events",
          bullets: [
            "**Definition:** two events are mutually exclusive when they cannot both occur in the same trial — their intersection is empty, P(A ∩ B) = 0.",
            "**Addition rule:** P(A or B) = P(A) + P(B) only when A and B are mutually exclusive.",
            "**General addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B); when mutually exclusive the subtracted term is zero.",
            "**Exhaustive events:** a set of mutually exclusive events is exhaustive if their probabilities sum to 1 — every outcome falls into exactly one of them.",
            "**Example:** rolling a 1, 2, or 3 on a die are mutually exclusive; rolling an even number and rolling a 2 are not, because 2 is in both.",
          ],
        },
        {
          subTitle: "Conditional probability (Extended)",
          bullets: [
            "**Formula:** P(A | B) = P(A ∩ B) ÷ P(B); read as 'the probability of A given B'.",
            "**What it means:** once you know B has occurred, the sample space shrinks to only the outcomes inside B, and you ask what fraction of those are also in A.",
            "**From a Venn diagram:** P(A | B) = n(A ∩ B) ÷ n(B); use the counts, then divide.",
            "**From a tree diagram:** P(A | B) is the probability on the second branch labelled A that follows the first branch labelled B.",
            "**From a two-way table:** restrict to the row (or column) for event B, then read off the cell for A.",
            "**Rearranging:** P(A ∩ B) = P(A | B) × P(B); this is the general multiplication rule and covers both independent and dependent cases.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "**Using the simple addition rule when events are not mutually exclusive:** P(A or B) = P(A) + P(B) is only correct when P(A ∩ B) = 0; always subtract the intersection otherwise.",
            "**Applying the independence multiplication rule to dependent events:** without replacement events are dependent; use the conditional probability form P(A) × P(B | A) instead.",
            "**Confusing P(A | B) with P(B | A):** these are different quantities; a question asking for the probability of A given B requires P(A | B), not P(B | A).",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_8 = chapterEight;
