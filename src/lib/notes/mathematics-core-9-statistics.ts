import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Core — Section 9: Statistics
 * Chapters 42 to 44 (Categories matching official Core syllabus breakdown)
 */
export const MATHEMATICS_CORE_STATISTICS: Chapter[] = [
  {
    number: 42,
    title: "Averages & Range",
    section: "9. Statistics",
    topic: "Averages & Range",
    intro:
      "Measures of central tendency (mean, median, mode), measure of spread (range), calculating mean from frequency tables, comparing data sets, and distinguishing discrete and continuous data.",
    subheadings: [
      {
        title: "Mean, Median & Mode",
        body:
          "The three statistical averages measure the central tendency of a data set:\n\n" +
          "1. **Mean ($\\bar{x}$):**\n" +
          "   $$\\mathbf{\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Total number of values}} = \\frac{\\sum x}{n}}$$\n\n" +
          "2. **Median:** The middle value when data is arranged in ascending order:\n" +
          "   - Position of median: $\\frac{n + 1}{2}$\n" +
          "   - If $n$ is odd: exactly one middle value.\n" +
          "   - If $n$ is even: the mean of the two middle values.\n\n" +
          "3. **Mode (Modal Value):** The value that appears with the highest frequency.\n" +
          "   - A data set can have no mode, one mode, or be bimodal (two modes).",
        examinerTips: [
          "Always sort numbers in ascending order BEFORE finding the median.",
        ],
        commonMistakes: [
          "Finding the median of unsorted data.",
          "Confusing mean and median.",
        ],
        recap: [
          "Find the mean, median, and mode of: $4, 7, 2, 9, 7, 3, 10$.",
        ],
      },
      {
        title: "Calculations with the Mean",
        body:
          "Working backwards with the mean:\n\n" +
          "$$\\mathbf{\\text{Total Sum of Values} = \\text{Mean} \\times n}$$\n\n" +
          "**Finding a Missing Value:**\n" +
          "- The mean of 5 numbers is 8. The total sum is $5 \\times 8 = 40$.\n" +
          "- If four numbers are $6, 9, 7, 10$, their sum is $32$.\n" +
          "- The fifth number is $40 - 32 = 8$.\n\n" +
          "**Combined Mean of Two Groups:**\n" +
          "$$\\text{Combined Mean} = \\frac{\\text{Total sum of Group 1} + \\text{Total sum of Group 2}}{n_1 + n_2}$$",
        examinerTips: [
          "Never calculate the average of the two means unless both group sizes $n_1$ and $n_2$ are identical.",
        ],
        commonMistakes: [
          "Adding two means and dividing by 2 when group sizes are unequal.",
        ],
        recap: [
          "A student scores an average of 65 on 4 tests. What must they score on the 5th test to raise their mean to 70?",
        ],
      },
      {
        title: "Range",
        body:
          "The **range** is a measure of dispersion (spread) of the data, NOT an average:\n\n" +
          "$$\\mathbf{\\text{Range} = \\text{Highest Value} - \\text{Lowest Value}}$$\n\n" +
          "- A smaller range means the data is more consistent / less spread out.\n" +
          "- A larger range means the data is more variable.",
        examinerTips: [
          "The range is a single number (e.g. $15 - 3 = 12$). Never write '3 to 15'.",
        ],
        commonMistakes: [
          "Writing the range as an interval like '3 - 15' instead of subtracting to give a single value.",
        ],
        recap: [
          "Find the range of the numbers: $12, 45, 23, 67, 19, 54$.",
        ],
      },
      {
        title: "Averages from Tables",
        body:
          "Calculating averages from an ungrouped frequency table:\n\n" +
          "- **Mode:** Look down the frequency column; the modal value is the $x$-value with the **highest frequency**.\n" +
          "- **Mean from Frequency Table:**\n" +
          "  1. Add an $fx$ column (multiply value $x$ by frequency $f$).\n" +
          "  2. Sum the frequencies: $\\sum f = n$.\n" +
          "  3. Sum the $fx$ column: $\\sum fx$.\n" +
          "  4. Apply the formula:\n" +
          "     $$\\mathbf{\\text{Mean} = \\frac{\\sum fx}{\\sum f}}$$\n\n" +
          "- **Median from Frequency Table:**\n" +
          "  Find the position $\\frac{n + 1}{2}$ using cumulative frequencies.",
        examinerTips: [
          "Divide by $\\sum f$ (the total frequency), NEVER by the number of rows in the table.",
        ],
        commonMistakes: [
          "Dividing $\\sum fx$ by the number of rows instead of $\\sum f$.",
          "Stating the highest frequency as the mode instead of the corresponding $x$-value.",
        ],
        recap: [
          "In a table, scores of 1, 2, 3 have frequencies 4, 10, 6. Calculate the mean score.",
        ],
      },
      {
        title: "Comparing Data Sets",
        body:
          "When comparing two distributions in Cambridge examinations, you must comment on **TWO distinct features** using context:\n\n" +
          "1. **Average (Mean or Median):**\n" +
          "   - State which group has a higher average and what it means in context.\n" +
          "   - Example: 'Class A has a higher median test score ($68$) than Class B ($54$), so on average Class A performed better.'\n\n" +
          "2. **Spread (Range):**\n" +
          "   - State which group has a smaller range and what it means in context.\n" +
          "   - Example: 'Class A has a smaller range ($18$) than Class B ($32$), so Class A's scores are more consistent.'",
        examinerTips: [
          "Always quote both numerical values when comparing, and state which is higher/lower in context.",
        ],
        commonMistakes: [
          "Only commenting on the average and forgetting to comment on the range.",
        ],
        recap: [
          "Team X: mean 2.4 goals, range 3. Team Y: mean 1.8 goals, range 1. Compare the two teams.",
        ],
      },
      {
        title: "Discrete & Continuous Data",
        body:
          "Data classification:\n\n" +
          "- **Discrete Data:** Can only take specific, separate values (often counts of whole items).\n" +
          "  - Examples: Number of students in a room ($24$), shoe sizes ($7, 7.5, 8$), goals scored in a match.\n" +
          "  - Cannot take fractional values between valid options.\n\n" +
          "- **Continuous Data:** Can take **any numerical value** within a continuous range, limited only by the accuracy of the measuring instrument.\n" +
          "  - Examples: Height of a student ($165.4\\text{ cm}$), mass of an apple ($142.8\\text{ g}$), time taken to run a race ($11.83\\text{ s}$).",
        examinerTips: [
          "If it is measured (using a ruler, stopwatch, scale), it is continuous. If it is counted, it is discrete.",
        ],
        commonMistakes: [
          "Classifying shoe size as continuous because half-sizes exist (it is discrete because you cannot have size 7.318).",
        ],
        recap: [
          "State whether each of the following is discrete or continuous: (a) number of cars in a car park, (b) temperature of coffee.",
        ],
      },
    ],
  },
  {
    number: 43,
    title: "Statistical Diagrams",
    section: "9. Statistics",
    topic: "Statistical Diagrams",
    intro:
      "Displaying, reading, and interpreting statistical data: stem-and-leaf diagrams, frequency tables, bar charts, pictograms, and pie charts.",
    subheadings: [
      {
        title: "Stem & Leaf Diagrams",
        body:
          "An ordered **stem-and-leaf diagram** displays numerical data while preserving the raw individual values:\n\n" +
          "- **Stem:** The leading digits (tens, hundreds).\n" +
          "- **Leaf:** The final trailing digit (units).\n" +
          "- **Rules:**\n" +
          "  1. Leaves on each row must be in **strict ascending order** from left to right.\n" +
          "  2. Equal spacing between digits.\n" +
          "  3. **A KEY is compulsory** (e.g. `Key: 2 | 5 represents 25 kg`).\n\n" +
          "**Finding Median from Stem & Leaf:** Count through leaves from both ends to locate the middle value.",
        examinerTips: [
          "Never forget the **KEY**. A stem-and-leaf diagram without a key loses an automatic mark.",
        ],
        commonMistakes: [
          "Leaving leaves unordered.",
          "Forgetting to include the key.",
        ],
        recap: [
          "Construct an ordered stem-and-leaf diagram with a key for: $23, 18, 25, 31, 28, 19, 23, 34$.",
        ],
      },
      {
        title: "Tally Charts & Frequency Tables",
        body:
          "**Tally Charts:** Record data counts using vertical tick marks grouped in bundles of 5 (four vertical lines crossed through by a diagonal fifth line).\n\n" +
          "**Frequency Tables:** The frequency ($f$) records the numerical total of tallies for each category or class interval.",
        examinerTips: [
          "Cross off raw data items one by one as you tally to avoid double-counting or omitting items.",
        ],
        commonMistakes: [
          "Arithmetic miscounting in tallies.",
        ],
        recap: [
          "Complete a frequency table for the data: $2, 3, 2, 4, 5, 2, 3, 4, 2$.",
        ],
      },
      {
        title: "Bar Charts & Pictograms",
        body:
          "**Bar Charts:**\n" +
          "- Bars have **equal widths**.\n" +
          "- Heights of bars are proportional to frequency.\n" +
          "- For discrete/categorical data, there must be **equal gaps between bars**.\n" +
          "- Axes must be clearly labelled with scales starting at zero.\n\n" +
          "**Pictograms:**\n" +
          "- Use repeated symbols/icons to represent frequencies.\n" +
          "- **A KEY is essential** (e.g. `Key: 1 circle = 4 books`).\n" +
          "- Fractions of symbols represent partial counts (e.g. half a circle = 2 books).",
        examinerTips: [
          "Always check the pictogram key carefully before reading frequencies.",
        ],
        commonMistakes: [
          "Drawing bars of unequal width or touching bars for discrete categories.",
        ],
        recap: [
          "In a pictogram, a car symbol represents 8 cars. How many cars are represented by 3 and a half car symbols?",
        ],
      },
      {
        title: "Pie Charts",
        body:
          "A **pie chart** is a circle divided into sectors where each sector angle is proportional to the category frequency:\n\n" +
          "$$\\mathbf{\\text{Angle for Category} = \\frac{\\text{Frequency of Category}}{\\text{Total Frequency}} \\times 360^\\circ}$$\n\n" +
          "**Drawing a Pie Chart:**\n" +
          "1. Calculate the angle for every category (check that all angles sum to exactly $360^\\circ$).\n" +
          "2. Draw a circle with a compass and draw a radius to the top.\n" +
          "3. Use a protractor to measure each angle consecutively around the centre.\n" +
          "4. Label each sector clearly with its category name.",
        examinerTips: [
          "Check that the sum of calculated sector angles is exactly $360^\\circ$ before drawing.",
        ],
        commonMistakes: [
          "Labelling sectors with angles instead of category names.",
        ],
        recap: [
          "In a survey of 60 people, 15 chose red, 25 chose blue, and 20 chose green. Calculate the sector angle for each colour.",
        ],
      },
      {
        title: "Reading & Interpreting Statistical Diagrams",
        body:
          "Extracting precise values and proportions from statistical charts:\n\n" +
          "- To find the frequency from a pie chart sector angle $\\theta$:\n" +
          "  $$\\text{Frequency} = \\frac{\\theta}{360^\\circ} \\times \\text{Total Frequency}$$\n" +
          "- To compare two pie charts, consider both the sector proportions and the total sample size of each chart.",
        examinerTips: [
          "Do not assume a larger sector angle on one pie chart means a larger absolute frequency unless the two pie charts have equal totals.",
        ],
        commonMistakes: [
          "Assuming two pie charts of equal physical size represent the same total number of people.",
        ],
        recap: [
          "A pie chart represents 120 cars. If the sector angle for white cars is $90^\\circ$, how many cars are white?",
        ],
      },
      {
        title: "Comparing Statistical Diagrams",
        body:
          "Evaluating data displays:\n\n" +
          "- Dual / comparative bar charts allow side-by-side comparison across categories.\n" +
          "- When comparing two distributions, state differences in the mode, highest frequency, and overall spread.",
        examinerTips: [
          "Use comparative words ('more than', 'fewer than', 'most popular') backed up by specific numbers from the diagrams.",
        ],
        commonMistakes: [
          "Making generic statements without supporting data values from the graph.",
        ],
        recap: [
          "State two advantages of a bar chart over a pictogram.",
        ],
      },
    ],
  },
  {
    number: 44,
    title: "Scatter Graphs & Correlation",
    section: "9. Statistics",
    topic: "Scatter Graphs & Correlation",
    intro:
      "Plotting bivariate data on scatter graphs, identifying types of correlation, and drawing and using lines of best fit for estimation.",
    subheadings: [
      {
        title: "Scatter Graphs & Correlation",
        body:
          "A **scatter graph** plots pairs of numerical data (bivariate data) to investigate whether a relationship exists between two variables.\n\n" +
          "**Types of Correlation:**\n" +
          "1. **Positive Correlation:** As one variable increases, the other variable increases (points slope upwards from left to right, e.g. height vs shoe size).\n" +
          "2. **Negative Correlation:** As one variable increases, the other variable decreases (points slope downwards from left to right, e.g. age of car vs value).\n" +
          "3. **Zero / No Correlation:** Points are randomly scattered with no linear trend (e.g. shoe size vs examination score).\n\n" +
          "**Correlation vs Causation:** Correlation shows a statistical link between variables, but does **not prove** that one variable causes the change in the other.",
        examinerTips: [
          "When describing correlation, write **'Positive correlation'** or **'Negative correlation'**. You can add 'strong' or 'weak' if requested.",
        ],
        commonMistakes: [
          "Writing 'proportional' instead of 'correlated'.",
          "Assuming correlation always implies direct cause.",
        ],
        recap: [
          "State the type of correlation expected between: (a) ambient temperature and heating bills, (b) study hours and exam score.",
        ],
      },
      {
        title: "Lines of Best Fit",
        body:
          "A **line of best fit** is a single straight line drawn through the data points showing the general linear trend:\n\n" +
          "- **Rules for drawing:**\n" +
          "  1. Use a clear ruler and sharp pencil.\n" +
          "  2. Follow the direction of the points.\n" +
          "  3. Pass through the mean point $(\\bar{x}, \\bar{y})$ if calculated.\n" +
          "  4. Have roughly an **equal balance of points** on either side of the line.\n" +
          "  5. Do NOT simply connect the first point to the last point.\n\n" +
          "**Interpolation vs Extrapolation:**\n" +
          "- **Interpolation:** Estimating within the range of given data points (reliable).\n" +
          "- **Extrapolation:** Estimating beyond the range of given data points (unreliable, as the trend may not continue).",
        examinerTips: [
          "Show dotted construction lines with a ruler up from the axis to the line of best fit when reading an estimated value.",
        ],
        commonMistakes: [
          "Forcing the line of best fit to pass through the origin $(0, 0)$ when the data trend does not.",
          "Connecting data points dot-to-dot with a jagged line.",
        ],
        recap: [
          "Explain why estimating values outside the plotted data range (extrapolation) can be unreliable.",
        ],
      },
    ],
  },
];
