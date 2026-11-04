import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelPython = imagePanel(IMG, [
  {
    src: "cs8-python-variables.webp",
    alt: "A row of labelled storage boxes of different sizes on a wooden shelf, some holding numbers, one holding a length of text, one holding a pair of toggle switches, all drawn in a clean flat illustration style on a pale background",
    caption: "A variable is a named box, and its type is what is inside",
  },
  {
    src: "cs8-selection-flowchart.webp",
    alt: "A flowchart fragment on plain paper: a diamond decision shape with two labelled paths leaving it, one joining a rectangle process shape and the other dropping straight to a rounded terminator",
    caption: "Selection is a diamond: two paths, only one is taken",
  },
]);

const chapterEight: Chapter = {
  number: 8,
  title: "Programming Fundamentals",
  intro: `Everything from here on is Component 2: 75 marks in 1 hour 45 minutes, answered in a digital exam, and **calculators are allowed**. The syllabus requires practical experience of **Python 3.10 or higher**, and the final 15-mark question sets an unseen scenario you write code for.

Topic 8 is the grammar. If the grammar is automatic for you, the scenario question becomes a reading-comprehension task instead of a struggle.`,
  subheadings: [
    {
      title: "8.1 Programming concepts",
      body: `### Variables, constants and types

**8.1.1** — a **variable** is a named storage location whose value **can change while the program runs**. A **constant** is a named value that **never changes once set**, which protects a figure such as a tax rate from being altered by mistake.

\`\`\`python
student_name = "Yusuf"      # variable, str
hours_worked = 7.5          # variable, float
PASS_MARK = 40              # constant, int - never reassigned
passed = True               # variable, bool
\`\`\`

The convention Cambridge expects is **UPPER_CASE for constants** and lowercase_with_underscores for variables. Assignment uses \`=\` and reads right to left: the value on the right is stored under the name on the left.

**8.1.2** — the four basic data types.

| Type | Holds | Example |
|---|---|---|
| int | a whole number, positive or negative | 4, -12, 0 |
| float | a real (decimal) number | 3.5, 0.0, -2.75 |
| str | characters in quotes — any text | "A", "IGCSE", "42" |
| bool | one of exactly two values | True, False |

Note the trap in the last row of the table: \`"42"\` is a **str**, while 42 is an **int**. The quotes decide it.

### Casting and input

**8.1.3–8.1.4** — **casting** converts a value from one type to another using \`int()\`, \`float()\`, \`str()\` and \`bool()\`.

The reason casting exists in almost every exam answer: **\`input()\` always returns a string**, so a number typed by the user must be cast before it can be used in arithmetic.

\`\`\`python
radius_text = input("Enter the radius: ")
radius = float(radius_text)          # str to float
area = 3.14 * radius * radius
print("The area is", area)
whole = int(9.9)                     # int() truncates, so this gives 9
back = str(12) + "3"                 # str() joins text, giving "123"
\`\`\`

\`print()\` sends output to the screen and separates items with a space. \`input()\` displays a prompt and stores what is typed. Both directions are examinable: the syllabus asks you to **identify and use** inputs and outputs.

### The three constructs

**8.1.5** — every program is built from **sequence**, **selection** and **iteration**.

**Sequence** — statements run one after another, top to bottom, in the order written. Swapping two lines changes the result.

**Selection** — the program chooses.

\`\`\`python
mark = int(input("Mark: "))
if mark >= 75:                       # if / elif / else
    grade = "Distinction"
elif mark >= 40:
    grade = "Pass"
else:
    grade = "Fail"
print(grade)

if mark >= 40:
    if mark >= 90:                   # nested selection
        print("Outstanding pass")
    else:
        print("Good pass")

match day:                           # match-case, Python 3.10 onwards
    case "Sat" | "Sun":
        print("Weekend")
    case "Mon":
        print("First day")
    case _:
        print("Weekday")
\`\`\`

Read the shape of those three answers: \`if\` needs no \`else\`; \`elif\` is tried only when everything above it is false; \`else\` must be last and takes no condition. In \`match-case\`, the underscore \`_\` is the catch-all default, and the vertical bar means "either of these values".

**Iteration** — the program repeats.

\`\`\`python
total = 0
count = 0
for pupil in range(30):              # count-controlled: exactly 30 passes
    mark = int(input("Mark: "))
    total = total + mark
    count = count + 1
average = total / count
print("Class average:", average)

password = ""
while password != "ict":             # pre-condition: may run zero times
    password = input("Try again: ")

attempts = 0
while True:                          # post-condition with break
    attempts = attempts + 1
    code = input("Code: ")
    if code == "99" or attempts == 3:
        break
\`\`\`

The distinction that earns the mark: a **for** loop is **count-controlled** — you already know how many repetitions. A **while** loop is **condition-controlled**; the **pre-condition** version tests before each pass and may never run at all, while the **while True** with **break** version is a **post-condition** loop that always runs at least once.

**Nested iteration** puts one loop inside another, which is how every table and every 2D list is walked:

\`\`\`python
for row in range(1, 4):
    for column in range(1, 4):
        print(row * column, end=" ")
    print()
\`\`\`

**Totalling and counting** are the two accumulator patterns to memorise as habits. Totalling starts with \`total = 0\` and adds each value to it. Counting starts with \`count = 0\` and adds 1 for each event.

Both accumulators must be initialised **before** the loop, or the program crashes with an undefined variable the first time it runs.

### String handling

**8.1.6** — a string is indexed from **zero**, so the first character of "IGCSE" is at position 0 and the last is at position 4.

\`\`\`python
school = "yumna college"
print(len(school))               # 12 - number of characters
print(school.find("college"))    # 6  - position of the substring
print(school.count("n"))         # 2  - how many times n appears
print(school.upper())            # YUMNA COLLEGE
print(school.lower())            # yumna college
print(school.title())            # Yumna College
print(school.replace("college", "sixth form"))
full = "Yumna" + " " + "College" # concatenation gives Yumna College
print(school[0], school[5:10])   # y and colle
\`\`\`

| Tool | Returns | Watch out for |
|---|---|---|
| \`len()\` | an int, the number of characters | spaces count too |
| \`.find()\` | the index of the first match | returns **-1** if not found, not an error |
| \`.count()\` | how many times the substring appears | case sensitive, so "N" and "n" differ |
| \`.upper()\` / \`.lower()\` / \`.title()\` | a **new** string | the original is unchanged unless reassigned |
| \`.replace()\` | a new string with substitutions | same rule: reassign to keep it |
| \`+\` | concatenation | both sides must be str, so cast numbers first |

Slicing reads as "from the index up to but not including the second index": \`school[5:10]\` gives characters 5, 6, 7, 8 and 9.`,
      figure: panelPython,
      groups: [
        {
          subTitle: "Which construct does the question want",
          bullets: [
            "'Repeats a known number of times' → for with range().",
            "'Keeps asking until valid' → while (pre-condition).",
            "'Runs at least once, then stops on a condition' → while True with break.",
            "'Adds up values' → totalling accumulator.",
            "'Counts how many' → counting accumulator.",
          ],
        },
      ],
      examinerTips: [
        "Write the initialisation line. `total = 0` before a loop is frequently a separately marked line.",
        "When a question says 'state the output', trace line by line and write the exact spacing and capitalisation, because strings are marked literally.",
        "For a 'complete the code' answer, the indentation of the block under a colon is part of the mark. Keep it consistent at four spaces.",
      ],
      commonMistakes: [
        "Using input() arithmetically without casting, then getting a type error.",
        "Writing = where == is needed inside an if.",
        "Expecting .find() to raise an error when the text is missing.",
        "Believing .upper() changes the variable — string methods return a new string.",
        "Off-by-one errors: range(5) produces 0 to 4, and len() counts one more than the last index.",
      ],
      recap: [
        "State the data type returned by input() and explain what casting is for.",
        "Write a program that reads three prices, totals them and prints the average.",
        "Give one situation each for a count-controlled and a condition-controlled loop.",
        "For the string 'computer science', give the value of len(), .find('sci'), .count('c') and .replace('c', 'k').",
      ],
    },
    {
      title: "8.2 Programming operators",
      body: `### Arithmetic operators

**8.2.1** — seven operators, and the four that surprise people are the last four.

\`\`\`python
print(7 + 2)    # 9   addition
print(7 - 2)    # 5   subtraction
print(7 / 2)    # 3.5 float division, always a float
print(7 * 2)    # 14  multiplication
print(2 ** 3)   # 8   raise to the power of
print(7 % 2)    # 1   modulus - the remainder after dividing
print(7 // 2)   # 3   floor division - divide then drop the fraction
\`\`\`

The three that separate an A* from a B:
- \`/\` on two ints gives a **float**: 6 / 3 gives 2.0, not 2.
- \`//\` divides and **truncates toward minus infinity**, so 7 // 2 is 3.
- \`%\` is the **remainder**, and its two workhorse uses are "is this even?" (\`number % 2 == 0\`) and "wrap around a cycle", as in a clock.

A worked pattern the exam likes: how many full weeks and leftover days are in 40 days.

\`\`\`python
days = 40
weeks = days // 7       # 5 full weeks
leftover = days % 7     # 5 days remaining
print(weeks, leftover)
\`\`\`

Operator precedence runs in the Python order: brackets first, then the power operator, then the multiplying group (multiplication, float division, floor division and modulus), then the adding group. \`2 + 3 * 4\` gives 14, not 20.

### Relational operators

**8.2.2** — a comparison evaluates to a **bool**, True or False. That single fact is why relational operators work inside an \`if\` and a \`while\`.

| Operator | Meaning | Example |
|---|---|---|
| == | equal to | 5 == 5 is True |
| != | not equal to | 5 != 3 is True |
| < | less than | 4 < 2 is False |
| <= | less than or equal to | 4 <= 4 is True |
| > | greater than | 9 > 2 is True |
| >= | greater than or equal to | 9 >= 10 is False |

\`==\` asks a question and returns a bool; \`=\` answers the question by storing a value. Mixing them up is the most common single error in Component 2.

### Logical operators

**8.2.3** — these combine bools, and they read almost like English.

| Operator | Result is True when | Example |
|---|---|---|
| and | **both** sides are True | age >= 18 and has_ticket |
| or | **at least one** side is True | is_weekend or is_holiday |
| not | it **inverts** the value | not (mark < 40) |

Combining a range the right way versus the wrong way:

\`\`\`python
mark = 15
if mark >= 0 and mark <= 20:       # correct inclusive range test
    band = "low"

if mark > 20 and mark < 40:        # exclusive: excludes both ends
    band = "mid"
\`\`\`

The precedence to remember is **not first, then and, then or**. \`A or B and C\` is evaluated as \`A or (B and C)\`, so brackets are cheap insurance in an exam answer.

De Morgan's equivalence is worth knowing because it converts a clumsy condition into a clean one: the opposite of "A and B" is "not A or not B", and the opposite of "A or B" is "not A and not B".`,
      groups: [
        {
          subTitle: "Translate before you calculate",
          bullets: [
            "'Is between 0 and 100 inclusive' → >= 0 and <= 100.",
            "'Is a multiple of 5' → number % 5 == 0.",
            "'Has at least one of two features' → use or.",
            "'Is neither of two values' → not (a or b), or != and !=.",
            "'Whole number of complete items' → floor division.",
          ],
        },
      ],
      examinerTips: [
        "Always write the double equals in a condition. One equals sign is an assignment and will silently break the logic.",
        "When a question asks for the output of a division, decide first whether it is float, floor or modulus, and give the type: 3.5 rather than 3.",
        "For 'state whether the expression is True or False', evaluate the arithmetic on each side of the comparison before comparing.",
      ],
      commonMistakes: [
        "Treating 7 / 2 as 3. It is 3.5; 7 // 2 is the one that gives 3.",
        "Using `mod` or `%` wrongly in a word — the symbol is required in code.",
        "Writing and/or in uppercase, as in Python 2 style SQL. The keywords are lowercase.",
        "Forgetting that string comparison is case sensitive, so ‘pass’ and ‘Pass’ are not equal.",
      ],
      recap: [
        "Give the values of 15 / 4, 15 // 4 and 15 % 4.",
        "Write a condition that is True only when a temperature is above 30 and below 40, excluding both ends.",
        "State the value of `3 * 2 ** 2` and explain the order in which the operators are applied.",
        "Use logical operators to write a test for a mark outside the valid range 0 to 100.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_8 = chapterEight;
