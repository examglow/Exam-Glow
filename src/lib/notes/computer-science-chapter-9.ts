import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelDesign = imagePanel(IMG, [
  {
    src: "cs9-abstraction-map.webp",
    alt: "Two versions of the same city drawn side by side: the left one a detailed street map with hundreds of lines, the right one a simplified underground-style diagram of a handful of coloured lines and interchange dots",
    caption: "Same city, different detail — abstraction chooses what to keep",
  },
  {
    src: "cs9-decomposition-blocks.webp",
    alt: "A large solid block on the left breaking apart into four smaller stacked blocks on the right, each separated by a thin gap, drawn as a clean flat diagram on a pale background",
    caption: "One problem, four sub-problems, each testable alone",
  },
]);

const panelSorts = imagePanel(IMG, [
  {
    src: "cs9-binary-halving.webp",
    alt: "A horizontal strip of evenly spaced numbered tiles with the middle tile highlighted, then the same strip shown with one half faded out and the new middle tile highlighted in the surviving half",
    caption: "Each comparison throws away half of what is left",
  },
  {
    src: "cs9-merge-split.webp",
    alt: "A tree diagram flowing downward: one long bar at the top splitting into two, then four, then eight single cells, and below it the same cells being paired back up into ordered bars",
    caption: "Split down to singles, then merge back up in order",
  },
]);

const chapterNine: Chapter = {
  number: 9,
  title: "Algorithm Design",
  intro: `An algorithm is a plan written precisely enough that a machine never has to guess. This chapter is the thinking half of Component 2: design it, trace it, fix it, then compare it with another.

Searches and sorts are the guaranteed content. Learn each one's steps as a numbered list and its Python as a shape you can rebuild from memory, because the scenario question often borrows one.`,
  subheadings: [
    {
      title: "9.1 Abstraction",
      body: `**9.1.1** — **abstraction** is the process of creating a **simplified model that represents the essential features** of a problem, deliberately ignoring detail that does not affect the solution.

**9.1.2 purpose** — abstraction makes a problem **small enough to think about**. By hiding irrelevant detail it reduces complexity, lets the modeller concentrate on the parts that decide the outcome, makes the model easier to explain to others, and lets one model be reused for many similar situations. It is also how a working simulation is built cheaply: a flight model that ignores the paint colour still predicts fuel burn.

**9.1.3 demonstration** — two forms worth naming in an answer:
- **Abstracting a model**: a journey planner records stations and connections but not the shape of the platforms. The tube map is the classic example — geographically wrong, functionally perfect.
- **Abstracting in code**: a function called with parameters hides how the work is done. The caller uses \`average(numbers)\` without knowing the loop inside, which is abstraction as a programming tool.

A good exam sentence pairs the act with what was discarded: *"The weather model stores temperature and rainfall per day but ignores wind direction, because the outcome being predicted does not depend on it."*`,
      figure: panelDesign,
      groups: [
        {
          subTitle: "Abstraction in four places you can cite",
          bullets: [
            "Models and simulations — ignore detail that does not change the result.",
            "Functions and procedures — hide the steps behind a name.",
            "Flowcharts — describe the logic without any language syntax.",
            "File formats and interfaces — the user need not know the byte layout.",
          ],
        },
      ],
      examinerTips: [
        "The phrase that earns the mark is **essential features** plus **ignoring irrelevant detail**. Use both halves.",
        "For 'explain the purpose of abstraction for a given context', name the detail you threw away in that scenario. A general answer scores one mark.",
      ],
      commonMistakes: [
        "Confusing abstraction with abstraction layers in networking — same idea, different topic.",
        "Saying abstraction makes the answer more accurate. It usually costs accuracy in exchange for clarity.",
        "Describing decomposition when the question says abstraction. Decomposition splits, abstraction simplifies.",
      ],
      recap: [
        "Define abstraction and state why a programmer would use it.",
        "A school wants to model the lunch queue. Give two details to keep and two to discard, and justify each choice.",
      ],
    },
    {
      title: "9.2 Decomposition",
      body: `**9.2.1** — **decomposition** is the process of **breaking a problem down into smaller, more manageable sub-problems**, each of which can be solved on its own and then combined.

**9.2.2 the four component parts** — the syllabus limits the decomposition of a problem to:
- **Inputs** — what the program must receive, from a user, a file or a sensor.
- **Processes** — the calculations, comparisons and decisions performed on the input.
- **Outputs** — what the program produces or displays when it finishes.
- **Storage** — the variables, lists and files that have to be held while it runs.

**9.2.3 purpose** — decomposition lets several people or several functions work on one project at the same time; each part is small enough to test in isolation, so errors are found where they are made; a difficult part can be given to the person who understands it; and a solved sub-problem can be **reused** in another program unchanged.

**9.2.4 demonstration** — for a school attendance system the split is: read the register file, mark each present or absent, total the absences per student, flag anyone above the limit, print the report. Each line becomes one function with its own test.

The pairing to remember: **abstraction decides what to ignore, decomposition decides how to split.** Real design uses them together.`,
      groups: [
        {
          subTitle: "The four-part checklist to write under any scenario",
          bullets: [
            "Inputs: which values arrive, and from where.",
            "Processes: what is calculated or compared.",
            "Outputs: what is displayed, stored or sent.",
            "Storage: which variables, lists or files must persist.",
          ],
        },
      ],
      examinerTips: [
        "When a question says 'decompose this problem into its component parts', answer in **four labelled headings** — inputs, processes, outputs, storage. Prose that mixes them loses marks.",
        "For 'explain the purpose of decomposition in this context', the strongest reason is testability: a small sub-problem can be checked before it is joined to the rest.",
      ],
      commonMistakes: [
        "Splitting by screen instead of by function — a page is not a sub-problem.",
        "Listing only three of the four component parts.",
        "Writing code when the question asks for the decomposition.",
      ],
      recap: [
        "Decompose a program that prints cinema tickets from a booking record, using the four component parts.",
        "State two benefits of decomposing a large problem before writing any code.",
      ],
    },
    {
      title: "9.3 Algorithm design and evaluation",
    body: `### Designing and reading an algorithm

**9.3.1** — you must be able to **design, complete and amend** an algorithm as either a **flowchart** or **Python**. The standard flowchart symbols:

| Shape | Meaning |
|---|---|
| Oval (pill) | start or end |
| Parallelogram | input or output |
| Rectangle | a process, calculation or assignment |
| Diamond | a decision, with at least two labelled exits |
| Arrows | the flow of control |
| Small circle | a connector to another part of the page |

Two syllabus allowances that save time in the exam: **a flowchart may contain multiple statements in one box**, and **a decision box may combine a process and a decision**. Draw fewer shapes and keep the flow readable.

**9.3.2** — to explain an algorithm, name what each part is for: which lines are the **inputs**, which are the **outputs**, which perform the **processes**, and which variables act as **storage**.

### Trace tables

**9.3.3** — a trace records the program's state line by line. The method that never fails:
1. Draw one column for **every variable**, one for each **input** and one for each **output**.
2. Add a column for the loop counter and for any condition you evaluate.
3. Step down the pseudocode. Write a new value in a column **only on the line where it changes**, and carry the previous value down otherwise.
4. Complete every row of the loop, including the final iteration, and finish with the output line.

Worked trace for the totalling loop:

\`\`\`python
total = 0
for n in range(1, 4):
    total = total + n
    print(n, total)
\`\`\`

| n | total | output |
|---|---|---|
| — | 0 | — |
| 1 | 1 | 1 1 |
| 2 | 3 | 2 3 |
| 3 | 6 | 3 6 |

### Finding and fixing errors

**9.3.4–9.3.5** — the routine that turns a broken algorithm into a working one: read the code and predict what it should do, then **dry-run a small data set** with a trace table and compare the actual output with the expected output. Where they diverge, the error is on the line just before it.

The usual culprits, in exam order: the accumulator initialised **inside** the loop instead of before it, \`<=\` versus \`<\`, the loop starting at the wrong index, integer division where a real division was needed, and an \`if\` that misses the boundary value. Amending an algorithm means changing the line, not rewriting the whole thing.

### Searching

**9.3.6** — **linear search** checks every item in turn until it finds the value or runs out of list. It works on **unordered** data.

\`\`\`python
def linear_search(items, target):
    for position in range(len(items)):
        if items[position] == target:
            return position          # found, stop here
    return -1                        # never found
\`\`\`

**Binary search** halves the remaining list on every comparison. Two conditions, both examinable: the data **must already be sorted**, and the algorithm must know the **low and high bounds** of the part still in play.

\`\`\`python
def binary_search(items, target):
    low = 0
    high = len(items) - 1
    while low <= high:
        mid = (low + high) // 2
        if items[mid] == target:
            return mid
        elif items[mid] < target:
            low = mid + 1            # discard the lower half
        else:
            high = mid - 1           # discard the upper half
    return -1
\`\`\`

Trace it for target 62 in \`12 25 31 47 62 78 90\`: mid is 47 at index 3, 47 is less than 62 so low becomes 4; mid is index 5 holding 78, 78 is greater so high becomes 4; mid is index 4 holding 62 → found in **three comparisons** out of seven items.

### Sorting

**9.3.7** — the four sorts, described by their defining move:
- **Bubble sort** — compare **adjacent pairs** and swap them if out of order; repeat passes until a pass makes no swap. The largest unsorted value "bubbles" to the end each pass.
- **Insertion sort** — take the next item and **insert it into its correct place** among the items already sorted, shifting the others along. Like sorting playing cards in the hand.
- **Merge sort** — **split** the list in half repeatedly until every sub-list has one item, then **merge** pairs back together in order. It is divide and conquer.

**9.3.8** — the bubble sort to be able to write:

\`\`\`python
def bubble_sort(items):
    size = len(items)
    for pass_number in range(size - 1):
        swapped = False
        for index in range(size - 1 - pass_number):
            if items[index] > items[index + 1]:
                items[index], items[index + 1] = items[index + 1], items[index]
                swapped = True
        if not swapped:
            break                    # already in order, stop early
\`\`\`

Note the two details that make it correct: the inner range shrinks by \`pass_number\` because the end is already sorted, and the \`swapped\` flag lets a nearly-sorted list finish early.

Sorting \`5 3 8 1\` by bubble sort, pass by pass:
- Pass 1 → 3 5 1 **8** (8 has bubbled to the end).
- Pass 2 → 3 1 5 8.
- Pass 3 → 1 3 5 8.

**9.3.9** — for "describe the steps involved in" linear search, binary search, bubble sort or merge sort, use the numbered-list form above and always state the precondition where there is one: binary search needs sorted data, merge sort needs extra storage for the merged lists.

### Comparing them

**9.3.10** — no Big-O notation is required, so compare in words about **number of comparisons** and **what happens as the list grows**.

| Algorithm | Best case | Worst case | Needs | Verdict |
|---|---|---|---|---|
| Linear search | 1 comparison | every item checked | nothing | only choice for unordered data |
| Binary search | 1 comparison | about half the halvings until nothing is left | **sorted** data | far faster on long lists |
| Bubble sort | already sorted with the flag | every pair on every pass | simple to write | fine for small or nearly sorted lists |
| Merge sort | splits and merges regardless | predictable, roughly n times the number of halvings | extra storage | best on large lists, worth the memory |

The sentences to write for an evaluate answer: binary search beats linear search **once the list is long and already sorted**, because it removes half the possibilities at each step; if the data arrives unsorted and is searched only once, linear search is cheaper because no sorting is needed; merge sort keeps its advantage as the list grows but pays for it in extra memory, whereas bubble sort needs none and degrades badly.`,
      figure: panelSorts,
      groups: [
        {
          subTitle: "Preconditions — always state these",
          bullets: [
            "Binary search: the list must be sorted and searchable by index.",
            "Merge sort: extra storage is needed for the merged sub-lists.",
            "Linear search: no precondition, which is its only advantage.",
          ],
        },
        {
          subTitle: "Trace-table habits",
          bullets: [
            "One column per variable, plus one for output.",
            "Update a cell only on the line that changes it.",
            "Never stop early: run the loop to its final iteration.",
          ],
        },
      ],
      examinerTips: [
        "For a trace table, the last row usually carries a mark on its own — the value after the loop finishes. Fill it.",
        "When comparing algorithms, say **why**: 'binary search discards half the list per comparison, so a list of 1,000 items needs about 10 comparisons instead of 1,000'.",
        "If asked to 'identify and correct the error', quote the line, state what is wrong, then give the corrected line. All three are marked separately.",
        "Flowchart answers are marked on shape choice and on labelled decision exits. Two paths leaving a diamond without Yes/No labels lose a mark.",
      ],
      commonMistakes: [
        "Applying binary search to an unsorted list.",
        "Forgetting the return statement in a search, so 'not found' is never reported.",
        "Writing the inner loop of bubble sort over the whole list every pass, so it never terminates early.",
        "Using a rectangle for a decision in a flowchart.",
        "Quoting Big-O notation, which the syllabus explicitly excludes.",
      ],
      recap: [
        "Complete a trace table for the binary search above with target 25 in the list 4 12 25 31 47.",
        "Write a flowchart, or Python, for a linear search through a list of names.",
        "Show the first two passes of bubble sort on 62 15 8 41.",
        "Compare linear and binary search and state when each is the better choice.",
        "Explain why merge sort is preferred for a very large list despite needing extra storage.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_9 = chapterNine;
