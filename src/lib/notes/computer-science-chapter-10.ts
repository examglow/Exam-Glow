import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelSortPasses = imagePanel(IMG, [
  {
    src: "cs10-bubble-passes.webp",
    alt: "Four horizontal rows of five numbered tiles stacked beneath each other, each row slightly more ordered than the one above, with the rightmost tiles in the first two rows shaded to show they are already settled",
    caption: "Each pass fixes one tile at the far end",
  },
  {
    src: "cs10-test-table.webp",
    alt: "A ruled test-plan table on paper with four column headings and several hand-filled rows, one row highlighted with a band of colour and a tick mark in the final column",
    caption: "Normal, boundary and erroneous - three rows minimum",
  },
]);

const chapterTen: Chapter = {
  number: 10,
  title: "Further Programming and Testing",
  intro: `Topic 10 is the largest section of the syllabus and the one the 15-mark scenario question is built from. Functions, lists, files and testing appear in almost every release of Component 2.

Of the four areas, **testing** is where candidates leave the most marks, because validation and verification are confused and boundary values are skipped.`,
  subheadings: [
    {
      title: "10.1 Variables and constants",
      body: `**10.1.1–10.1.2** — a **local** variable or constant is created **inside a function** and belongs to it. It comes into existence when the function is called and is destroyed when the function ends, so it cannot be read or written from anywhere else. A **global** variable or constant is defined **outside every function**, at the top level of the program, and can be **read by any function**.

\`\`\`python
TAX_RATE = 0.2                 # global constant
count = 0                      # global variable

def charge_line(price):
    global count               # declare before writing a global
    total = price * TAX_RATE   # total is local
    count = count + 1          # allowed only after the global statement
    return total
\`\`\`

Writing to a global inside a function needs the \`global\` keyword first; reading one does not. That asymmetry is a frequent exam line to complete.

**10.1.3 advantages and disadvantages**

| | Advantages | Disadvantages |
|---|---|---|
| Local variables | safe: no other function can change them; name collisions are impossible between functions; memory is released when the function ends; a function is easy to test alone | only usable inside that one function, so values must be passed or returned; each call recreates them |
| Global variables | one shared copy reachable from every function, so no long parameter lists; useful for constants and a program-wide state such as a score | any function can change them, so a bug in one place corrupts another; the program becomes hard to follow, test and reuse; they occupy memory for the whole run |

The recommendation that scores: **pass values as parameters and return results**; use globals only for true constants.`,
      groups: [
        {
          subTitle: "Lifespan in one line each",
          bullets: [
            "Local: created at the call, destroyed at the return.",
            "Global: created when the program starts, destroyed when it ends.",
          ],
        },
      ],
      examinerTips: [
        "A question that asks 'what is the value of x at the end' is testing whether a local shadowed a global. Trace with a table and keep the two separate.",
        "For 'explain the disadvantage of global variables', the mark is **unintended modification from anywhere in the program**, not 'they use memory'.",
      ],
      commonMistakes: [
        "Assigning to a global inside a function without declaring it global.",
        "Saying local variables are faster. They are safer, not faster.",
        "Believing a constant cannot be changed by any means; in Python the name and UPPER_CASE are only a convention the interpreter does not enforce.",
      ],
      recap: [
        "State where a local variable is stored and when it is destroyed.",
        "Give one advantage and one disadvantage of using a global variable.",
        "Write a short program that uses a global constant and a local variable, and label which is which.",
      ],
    },
    {
      title: "10.2 Procedures and functions",
      body: `**10.2.1–10.2.2** — a **procedure** is a named block of statements that **performs a task** and does not send a value back. A **function** is a named block that **performs a task and returns a result**, so it appears inside an expression or on the right of an assignment.

The purposes to state: they **decompose** a program, remove **repetition** (write once, call many times), make each part **individually testable**, allow **reuse** in other programs, and make the code **readable**, because a name explains the intention better than eight lines do.

How to identify one in an exam: a **function** has a \`return\` and its call produces a value; a **procedure** has no return and its call stands alone as a statement.

\`\`\`python
def greet(name):                 # procedure - no return
    print("Hello", name)

def area(width, height):         # function - returns a value
    return width * height

greet("Yumna")
hall = area(4, 6)                # the call is used as a value
print(hall)
\`\`\`

A **parameter** is the name in the definition; the **argument** is the actual value passed in. Calling with or without parameters is both allowed, and a parameter can carry a default value so the argument becomes optional.

**10.2.3 the eight built-ins to know** — every one of these can appear inside a program you are asked to explain or complete.

| Built-in | What it does | Result |
|---|---|---|
| \`sum()\` | totals the values in a list | sum of marks gives the class total |
| \`.count()\` | counts occurrences inside a string or list | "banana".count("a") gives 3 |
| \`max()\` | the largest value | max(marks) is the top score |
| \`min()\` | the smallest value | min(temperatures) |
| \`.mean()\` | the mean average, from the statistics module | statistics.mean(scores) |
| \`round()\` | rounds to a number of decimal places | round(3.456, 2) gives 3.46 |
| \`random.randrange()\` | a random integer from a range, stop value excluded | random.randrange(1, 7) gives 1 to 6 |
| \`random.randint()\` | a random integer with **both** ends included | random.randint(1, 6) gives 1 to 6 |

That last pair is the one examiners test: \`randrange(1, 7)\` and \`randint(1, 6)\` produce the same set of outcomes.

\`\`\`python
import random
import statistics

marks = [12, 17, 9, 17, 14]
print(sum(marks))                      # 69
print(max(marks), min(marks))          # 17 9
print(statistics.mean(marks))          # 13.8
print(round(statistics.mean(marks), 1))
print(marks.count(17))                 # 2
print(random.randint(1, 6))            # a dice roll, 1 to 6 inclusive
\`\`\`

**10.2.4** — procedures and functions are both called by name with brackets, and a function's returned value must be used or stored, otherwise it is discarded.`,
      groups: [
        {
          subTitle: "randrange versus randint",
          bullets: [
            "randrange(start, stop) — stop is **excluded**, exactly like range().",
            "randint(a, b) — both a and b are **included**.",
            "Both need the random module imported first.",
          ],
        },
      ],
      examinerTips: [
        "If a question asks you to write a function, include `return`. A procedure answer cannot score the function marks.",
        "For 'explain the purpose of this function', give its **role in the whole program**, not a line-by-line retelling.",
        "Remember `.count()` on a list counts equal occurrences, while `len()` counts everything.",
      ],
      commonMistakes: [
        "Thinking round() with no second argument gives a float. It returns an int.",
        "Writing random.randint(1, 7) and claiming the range is 1 to 6.",
        "Calling a function but never using its return value.",
        "Placing the import statement inside a function and then calling it from another module.",
      ],
      recap: [
        "State the difference between a procedure and a function.",
        "Write a function that takes three numbers and returns their mean, rounded to one decimal place.",
        "Give the values that random.randrange(1, 4) and random.randint(1, 4) can each return.",
      ],
    },
    {
      title: "10.3 Lists",
      body: `**10.3.1 purpose and features** — a **list** is a single named variable that holds **an ordered collection of values**, accessed by position. Its features: items are **ordered**, **changeable**, can be **indexed**, are of the **same type** in the kind of data a program normally stores in one list, and the length can grow or shrink.

**10.3.2 definition and indexing** — the **first index is zero**, so a list of 5 items has valid indices 0 to 4.

\`\`\`python
marks = [12, 17, 9, 14]                  # 1D list
grid = [[3, 8], [5, 1], [7, 2]]          # 2D list

print(marks[0])                          # 12, the first item
print(marks[2])                          # 9
print(grid[1][0])                        # 5 - row 1, column 0

for index in range(len(marks)):          # iterate by index
    print(index, marks[index])

for mark in marks:                       # iterate by element
    print(mark)
\`\`\`

A **1D** list is a single row of values, like one column of a register. A **2D** list is a **list of lists** — a table of rows and columns, indexed as \`grid[row][column]\`.

**10.3.3 the built-ins and methods**

| Tool | Effect |
|---|---|
| \`sum(list)\` | total of all items |
| \`max(list)\` / \`min(list)\` | largest / smallest item |
| \`len(list)\` | how many items |
| \`list.append(x)\` | add x to the **end** |
| \`list.insert(i, x)\` | put x at index i, shifting later items right |
| \`list.pop(i)\` | remove and return the item at i; **index-based, so the list shortens** |
| \`list.sort()\` | sort **in place**, changing the original list |
| \`in\` / \`not in\` | membership test, e.g. 9 in marks |

The distinction worth memorising: **\`sort()\` changes the list and returns nothing**, so \`print(marks.sort())\` shows None; and **pop removes**, while \`marks[0]\` only reads.

**10.3.4** — searching and sorting a list is chapter 9's algorithm with the list as its data. The linear search walks indices 0 to \`len(list) - 1\`; the bubble sort compares \`items[index]\` with \`items[index + 1]\` and swaps them inside the list. Both are written in topic 9, and both are examinable again here because lists are where they live.`,
      groups: [
        {
          subTitle: "Index arithmetic to keep straight",
          bullets: [
            "First index is 0; last index is len(list) - 1.",
            "range(len(list)) produces every valid index.",
            "A 2D list needs two subscripts: row first, then column.",
            "An index outside the range raises a run-time error, it does not return None.",
          ],
        },
      ],
      examinerTips: [
        "When a question asks you to build a list of user input, use an empty list and `append()` inside the loop; declaring fixed positions and forgetting to grow the list is the usual failure.",
        "For a 2D list question, sketch the table with row and column indices labelled before writing any code.",
        "State the return of `pop()` if the question prints it — it returns the removed item, so the printed value is the item, not the list.",
      ],
      commonMistakes: [
        "Starting the loop at 1 and skipping index 0.",
        "Writing `marks.sort = marks.sort()` instead of calling `marks.sort()`.",
        "Assuming `insert(0, x)` replaces the first item; it shifts everything right.",
        "Indexing a 2D list as `grid[column][row]` after the question defined rows first.",
      ],
      recap: [
        "Explain what is meant by the index of a list and state the index of the first element.",
        "Write Python to create a list of five temperatures, add a sixth, and print the highest.",
        "Describe the difference between `pop()` and reading `list[0]`.",
        "Show the value of each element after a bubble sort pass on [8, 3, 11, 2].",
      ],
    },
    {
      title: "10.4 File handling",
      body: `**10.4.1** — a program stores data in a **file** because variables and lists disappear when the program ends. A file keeps information **between runs** and lets one program's output feed another program or another day.

**10.4.2** — the eight items you must be able to use.

| Item | What it does |
|---|---|
| \`open()\` | connects the program to the file and returns a file object |
| \`.close()\` | releases the file so data is flushed and other programs can use it |
| \`with open()\` | opens the file for a block and **closes it automatically**, even if an error occurs |
| \`"r"\` | read mode — the file must already exist |
| \`"w"\` | write mode — **erases any existing content** and starts fresh |
| \`"a"\` | append mode — adds to the end and keeps what was there |
| \`.read()\` / \`.readline()\` / \`.readlines()\` | the whole file as one string / one line / a **list** of lines |
| \`.write()\` | puts text into the file; it does **not** add a line break for you |

\`\`\`python
with open("marks.txt", "r") as marks_file:
    for line in marks_file:
        print(line.strip())          # each line still ends with a newline

with open("log.txt", "a") as log_file:
    log_file.write("Session finished")
\`\`\`

The three modes are the most examined detail of this section. Choose **w** when the old contents should be replaced, **a** when history must be kept, and **r** when the program only reads. Choosing \`"w"\` by mistake silently **destroys the file**, which is why \`"a"\` is the safe answer when a question says "add to".

\`.strip()\` matters because every line read from a text file keeps its newline character; comparing \`"Yumna"\` with a line that reads \`"Yumna"\` plus a newline fails without stripping.`,
      groups: [
        {
          subTitle: "Read methods, in the order a question uses them",
          bullets: [
            "`read()` — one long string, use when the whole file is needed at once.",
            "`readline()` — the next single line, use while stepping through.",
            "`readlines()` — a list of all lines, use when you want to loop or index.",
          ],
        },
      ],
      examinerTips: [
        "Prefer `with open(...)` in any answer: it shows good practice and cannot lose the marks that a forgotten `close()` costs.",
        "If the file must be read and then updated, remember the file has to be **closed and reopened** in the other mode unless `with` handles it.",
        "'State what happens if the file does not exist' — in read mode Python raises an error; in write or append mode the file is created.",
      ],
      commonMistakes: [
        "Using write mode when the question says the new record must be added to the existing ones, which silently destroys the file.",
        "Forgetting `.write()` does not add a newline, so all records land on one line.",
        "Reading a number from a file and using it in arithmetic — it arrives as a string and must be cast.",
        "Leaving a file open and then expecting to read the data that has been written but not yet flushed.",
      ],
      recap: [
        "Explain why a program stores data in a file rather than only in a list.",
        "Write Python that reads a file of scores and prints the total, using `with`.",
        "State the difference between write mode and append mode.",
      ],
    },
    {
      title: "10.5 Testing",
      body: `### Validation

**10.5.1** — **validation** checks that data **makes sense for the field it is being entered into**, at the moment of entry. It does not ask whether the data is true; it asks whether it is usable. The six checks:

| Check | Question it answers | Example rule |
|---|---|---|
| Presence | has anything been entered at all | the name field is not empty |
| Length | is it the right number of characters | a postcode is 6 or 7 characters |
| Type | is it the right kind of data | age must be a whole number, not text |
| Range | is it between the two limits | mark between 0 and 40 inclusive |
| Format | does it match the required pattern | a date as DD/MM/YYYY, an email containing a dot |
| Check digit | does the extra digit agree with the others | an ISBN or bar code recalculated on entry |

**10.5.2 inclusive and exclusive** — the wording of a limit decides the operators:

\`\`\`python
mark = int(input("Mark out of 40: "))
if 0 <= mark <= 40:                # inclusive: 0 and 40 are legal
    valid = True
if 0 < mark < 40:                  # exclusive: neither end is legal
    strict = True
if mark < 0 or mark > 40:          # the rejection test, same rule inverted
    print("Invalid mark")
\`\`\`

A boundary value is **accepted by an inclusive check and rejected by an exclusive one**. Saying that in an answer is usually the mark.

### Verification

**10.5.3–10.5.4** — **verification** checks that the data entered **matches the data on the original source document**. It is about transcription, not sense.
- A **visual check** — the user looks at what appeared on screen and compares it with the form in front of them.
- A **double entry check** — the data is typed twice and the two copies are compared; disagreement means one entry was wrong.

\`\`\`python
first = input("Enter the account number: ")
second = input("Re-enter the account number: ")
if first == second:
    print("Verified")
else:
    print("Entries do not match - start again")
\`\`\`

The sentence that separates the two concepts: **validation asks 'is this sensible?', verification asks 'is this what the source said?'.**

### Test data

**10.5.5** — three categories, and a good answer gives one value from each:
- **Normal** — an ordinary value well inside the range, e.g. 25 for a 0 to 40 mark.
- **Boundary** — a value at an edge, e.g. 0, 40, and just outside at -1 and 41. Boundaries catch off-by-one errors.
- **Erroneous** — invalid data, e.g. "abc" for a number field, or -5.

Testing with a file or a list also needs the empty case and the single-item case, which is where most crashes hide.

### Errors and debugging

**10.5.6–10.5.7**

| Error type | When it appears | Typical cause | How to find it |
|---|---|---|---|
| Syntax | before the code runs, when it is translated | a missing colon, misspelt keyword, wrong indentation | the interpreter names the line and the expected token |
| Run-time | while the program is running | dividing by zero, index out of range, file not found, casting "abc" with int() | the traceback points at the failing statement |
| Logic | the program runs to the end but the answer is wrong | the wrong operator, an uninitialised accumulator, a condition that misses a case | trace table and comparison with expected output |

**Debugging** is the process of finding and removing the fault: predict the result, dry-run with a trace table or a debugger, narrow to the statement where the state first diverges, fix that one line, then re-run **the same test data plus the boundaries** to confirm the fix did not break anything else.

### Maintainability

**10.5.8** — four techniques, one line each:
- **Meaningful identifiers** — \`total_marks\` explains itself, \`t\` does not, so the next reader needs no translation.
- **Appropriate commenting** — comments describe **why** a step exists, and are only useful where the code is not obvious. Too many comments on self-explanatory lines is a fault, not a virtue.
- **Procedures and functions** — each task lives in one named block, so a change happens in one place.
- **Relevant program layout** — consistent indentation and blank lines between sections make the structure of loops and decisions visible at a glance.`,
      figure: panelSortPasses,
      groups: [
        {
          subTitle: "Validation versus verification — answer with these words",
          bullets: [
            "Validation: is the data **sensible for the field**?",
            "Verification: does the data **match the source**?",
            "Validation happens automatically by the program; a visual verification can be done by a person.",
            "Neither proves the data is true. A correctly formatted wrong number passes both.",
          ],
        },
      ],
      examinerTips: [
        "For 'suggest suitable test data', always give normal, boundary **and** erroneous values, and name which is which. Three unnamed numbers score badly.",
        "Include the values just **outside** each boundary: 0 and 40 pass an inclusive check, so -1 and 41 must fail it.",
        "An 'identify the type of error' question is answered by the symptom: nothing runs means syntax, a crash mid-run means run-time, a wrong answer means logic.",
        "For a maintainability question, a comment such as '# adds 1 to count' is a poor example. Use a comment that explains a choice instead.",
      ],
      commonMistakes: [
        "Calling a range check a format check, or vice versa.",
        "Testing only one comfortable value and declaring the program correct.",
        "Using validation to mean 'checking the data is true'.",
        "Saying a syntax error is found by running the program — translation finds it first.",
        "Writing a comment that restates the code rather than explaining it.",
      ],
      recap: [
        "Name the six validation checks and give one example of each in use.",
        "Write Python that validates an age that must be between 5 and 18 inclusive.",
        "Describe the difference between validation and verification, and explain a double entry check.",
        "Suggest four test values for a field accepting a mark from 0 to 40, and label each one.",
        "A program prints the wrong average but does not crash. Identify the error type and describe how to locate it.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_10 = chapterTen;
