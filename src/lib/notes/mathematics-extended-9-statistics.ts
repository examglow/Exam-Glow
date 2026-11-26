import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Mathematics (0580) Extended — Section 9: Statistics
 * Includes all Core content + Extended-only:
 * Averages from Grouped Data, Interquartile Range, Histograms, Cumulative Frequency
 */
export const MATHEMATICS_EXTENDED_STATISTICS: Chapter[] = [
  {
    number: 47,
    title: "Averages & Range",
    section: "9. Statistics",
    topic: "Averages & Range",
    intro:
      "Measures of central tendency (mean, median, mode) and spread (range, interquartile range) summarise datasets. The Extended course adds averages from grouped data and the interquartile range.",
    subheadings: [
      {
        title: "Discrete & Continuous Data",
        body:
          "**Discrete data** can only take specific separate values (usually whole numbers).\n" +
          "Examples: number of students, shoe size, number of goals scored.\n\n" +
          "**Continuous data** can take any value within a range.\n" +
          "Examples: height, weight, time, temperature.\n\n" +
          "**Class intervals** are used to group continuous (or large-range discrete) data:\n" +
          "- $5 \\leq x < 10$ means values from $5$ (inclusive) to $10$ (exclusive).\n" +
          "- Class width: $10 - 5 = 5$.\n" +
          "- Class midpoint: $\\frac{5 + 10}{2} = 7.5$.",
        examinerTips: [
          "For grouped data, use the midpoint of each class interval in calculations.",
          "Continuous data: use $\\leq$ and $<$ notation; note that $5 \\leq x < 10$ does NOT include $10$.",
        ],
        commonMistakes: [
          "Taking the endpoint of a class interval as the midpoint — always use $\\frac{\\text{lower} + \\text{upper}}{2}$.",
        ],
        recap: [
          "Identify as discrete or continuous: (a) number of cars (b) waiting time (c) temperature (d) number of siblings.",
          "Find the midpoint of the class interval $15 \\leq x < 25$.",
        ],
      },
      {
        title: "Mean, Median & Mode",
        body:
          "**Mean:** $\\bar{x} = \\frac{\\text{sum of all values}}{\\text{number of values}} = \\frac{\\sum x}{n}$\n\n" +
          "**Median:** The middle value when data is in order. For $n$ values:\n" +
          "- If $n$ is odd: median = $\\frac{n+1}{2}$th value.\n" +
          "- If $n$ is even: median = average of $\\frac{n}{2}$th and $(\\frac{n}{2}+1)$th values.\n\n" +
          "**Mode:** The most frequently occurring value. There can be no mode, one mode, or multiple modes.\n\n" +
          "**When to use each measure:**\n" +
          "- **Mean:** Best for symmetric data without outliers.\n" +
          "- **Median:** Best for skewed data or data with outliers.\n" +
          "- **Mode:** Best for categorical data or most common value.",
        examinerTips: [
          "Always sort data before finding the median.",
          "If asked to 'calculate' the mean, show the sum of values and division.",
        ],
        commonMistakes: [
          "Finding the median of an even-sized dataset as the $\\frac{n}{2}$th value — average the two middle values.",
          "Including an outlier in the mean without comment when the median would be more appropriate.",
        ],
        recap: [
          "Data: $4, 7, 2, 9, 7, 5, 3, 8, 7, 6$. Find the mean, median, and mode.",
        ],
      },
      {
        title: "Calculations with the Mean",
        body:
          "**Finding a missing value given the mean:**\n" +
          "If the mean of $n$ values is $\\bar{x}$, then $\\sum x = n\\bar{x}$.\n" +
          "Subtract known values to find the missing one.\n\n" +
          "**Combining means:**\n" +
          "If group A has $n_1$ values with mean $\\bar{x}_1$ and group B has $n_2$ values with mean $\\bar{x}_2$:\n" +
          "$$\\text{Combined mean} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}$$\n\n" +
          "**Example:** 5 students have a mean score of 68. A sixth student scores 80. New mean:\n" +
          "Total $= 5 \\times 68 + 80 = 340 + 80 = 420$. New mean $= \\frac{420}{6} = 70$.",
        examinerTips: [
          "Use the formula: sum $=$ mean $\\times$ number of values to find the total first.",
          "For combined means, do not simply average the two means — weight by the number of values.",
        ],
        commonMistakes: [
          "Averaging two group means without weighting: $(68 + 80)/2 = 74$ — WRONG if the groups have different sizes.",
        ],
        recap: [
          "The mean of 7 numbers is 12. Six of the numbers are $8, 15, 10, 14, 9, 11$. Find the seventh.",
          "Class A (25 students) has mean score 72. Class B (15 students) has mean score 80. Find the combined mean.",
        ],
      },
      {
        title: "Averages from Tables",
        body:
          "**From a frequency table (discrete data):**\n\n" +
          "$$\\bar{x} = \\frac{\\sum fx}{\\sum f}$$\n\n" +
          "Where $f$ is the frequency and $x$ is the value.\n\n" +
          "| Score ($x$) | Frequency ($f$) | $fx$ |\n" +
          "|-------------|-----------------|------|\n" +
          "| 1 | 3 | 3 |\n" +
          "| 2 | 7 | 14 |\n" +
          "| 3 | 5 | 15 |\n" +
          "| 4 | 2 | 8 |\n" +
          "| **Total** | **17** | **40** |\n\n" +
          "Mean $= \\frac{40}{17} \\approx 2.35$\n\n" +
          "Median position: $\\frac{17+1}{2} = 9$th value → in the cumulative frequency, the 9th value is score 2.\n\n" +
          "Mode: score $2$ (frequency 7).",
        examinerTips: [
          "Add an $fx$ column and a cumulative frequency column to the table to find mean, median and mode efficiently.",
          "For the median position, find which value the cumulative frequency first reaches or exceeds the median position.",
        ],
        commonMistakes: [
          "Using the number of rows in the table as $n$ instead of $\\sum f$.",
          "Finding the mode as the highest frequency, not the value with the highest frequency.",
        ],
        recap: [
          "A frequency table shows: score 5 (freq 4), 6 (freq 9), 7 (freq 11), 8 (freq 6). Find mean, median and mode.",
        ],
      },
      {
        title: "Averages from Grouped Data",
        body:
          "For **grouped frequency tables**, use the **midpoint** of each class interval in calculations.\n\n" +
          "$$\\bar{x} \\approx \\frac{\\sum fm}{\\sum f}$$\n\n" +
          "Where $m$ is the midpoint of each class interval and $f$ is its frequency.\n\n" +
          "**Example:**\n\n" +
          "| Height (cm) | Midpoint $m$ | Freq $f$ | $fm$ |\n" +
          "|-------------|--------------|----------|------|\n" +
          "| $150 \\leq h < 160$ | 155 | 4 | 620 |\n" +
          "| $160 \\leq h < 170$ | 165 | 12 | 1980 |\n" +
          "| $170 \\leq h < 180$ | 175 | 9 | 1575 |\n" +
          "| $180 \\leq h < 190$ | 185 | 5 | 925 |\n" +
          "| **Total** | | **30** | **5100** |\n\n" +
          "Estimated mean $= \\frac{5100}{30} = 170$ cm.\n\n" +
          "**Modal class:** The class with the highest frequency: $160 \\leq h < 170$.\n\n" +
          "**Median class:** Find the class containing the $\\frac{n+1}{2}$th value (or $\\frac{n}{2}$th for large $n$).",
        examinerTips: [
          "This gives an **estimate** of the mean — exact value is not possible from grouped data.",
          "Modal class = class with highest frequency (not highest midpoint).",
        ],
        commonMistakes: [
          "Using class boundaries as values instead of midpoints.",
          "Calling a class interval the mode instead of the 'modal class'.",
        ],
        recap: [
          "Find the estimated mean: ages (years) — $10 \\leq a < 20$ (freq 8), $20 \\leq a < 30$ (freq 15), $30 \\leq a < 40$ (freq 12), $40 \\leq a < 50$ (freq 5). State the modal class.",
        ],
      },
      {
        title: "Range & Interquartile Range",
        body:
          "**Range:** Simplest measure of spread.\n" +
          "$$\\text{Range} = \\text{Maximum} - \\text{Minimum}$$\n\n" +
          "**Interquartile range (IQR):** The range of the middle 50% of data.\n" +
          "$$\\text{IQR} = Q_3 - Q_1$$\n\n" +
          "Where:\n" +
          "- **Lower quartile $Q_1$:** Median of the lower half of data.\n" +
          "- **Upper quartile $Q_3$:** Median of the upper half of data.\n\n" +
          "**Method for $n$ values:** Sort data, then:\n" +
          "- $Q_1$ = median of the lower $\\frac{n}{2}$ values (or $\\frac{n-1}{2}$ for odd $n$).\n" +
          "- $Q_3$ = median of the upper $\\frac{n}{2}$ values.\n\n" +
          "**Example:** Data: $3, 5, 7, 8, 11, 13, 16, 18, 20, 22$.\n" +
          "$Q_1$ = median of $\\{3,5,7,8,11\\}$ = $7$.\n" +
          "$Q_3$ = median of $\\{13,16,18,20,22\\}$ = $18$.\n" +
          "IQR $= 18 - 7 = 11$.\n\n" +
          "**Box-and-whisker plot:** Displays $\\min$, $Q_1$, median, $Q_3$, $\\max$.",
        examinerTips: [
          "IQR is more reliable than range as a measure of spread — it isn't affected by outliers.",
          "The IQR can also be read from a cumulative frequency diagram.",
        ],
        commonMistakes: [
          "Including the median value itself when splitting the data into lower and upper halves.",
          "Computing $Q_3 - Q_2$ or $Q_2 - Q_1$ instead of $Q_3 - Q_1$.",
        ],
        recap: [
          "Data: $12, 15, 18, 20, 23, 25, 28, 30, 35, 40, 42$. Find $Q_1$, $Q_3$, IQR, and draw a box-and-whisker plot.",
        ],
      },
      {
        title: "Comparing Data Sets",
        body:
          "When comparing two data sets, comment on **both** a measure of central tendency and a measure of spread.\n\n" +
          "**Standard comparisons:**\n" +
          "- Compare means or medians: 'Group A has a higher mean, so on average...'\n" +
          "- Compare ranges or IQRs: 'Group A has a larger IQR, meaning the data is more spread out / more variable'.\n\n" +
          "**Example comparison:**\n" +
          "Class A: mean = $72$, IQR = $15$.\n" +
          "Class B: mean = $68$, IQR = $8$.\n\n" +
          "'Class A has a higher mean score ($72 > 68$), so on average students in Class A performed better. However, Class A has a larger IQR ($15 > 8$), indicating greater variability in scores compared to Class B, where scores were more consistent.'",
        examinerTips: [
          "Always link the statistical comparison to the context of the question.",
          "Use comparative language: 'higher', 'more variable', 'more consistent'.",
        ],
        commonMistakes: [
          "Comparing only one measure — always comment on both averages AND spread.",
          "Writing 'Class A is better' without specifying which measure and why.",
        ],
        recap: [
          "Team A scores (goals/game): mean $= 2.4$, range $= 5$. Team B: mean $= 1.8$, range $= 2$. Write a full comparison of the two teams' performances.",
        ],
      },
    ],
  },
  {
    number: 48,
    title: "Statistical Diagrams",
    section: "9. Statistics",
    topic: "Statistical Diagrams",
    intro:
      "Statistical diagrams represent data visually. This chapter covers all diagram types in the Extended syllabus: stem-and-leaf, bar charts, pie charts, and reading/comparing diagrams.",
    subheadings: [
      {
        title: "Stem & Leaf Diagrams",
        body:
          "A **stem-and-leaf diagram** shows individual data values while revealing the shape of the distribution.\n\n" +
          "**Example:** Data: $23, 27, 31, 34, 34, 38, 42, 45, 46, 51$.\n\n" +
          "```\n" +
          "2 | 3 7\n" +
          "3 | 1 4 4 8\n" +
          "4 | 2 5 6\n" +
          "5 | 1\n" +
          "Key: 2|3 = 23\n" +
          "```\n\n" +
          "**Back-to-back stem-and-leaf diagram:** Compares two datasets sharing a common stem.\n\n" +
          "**Reading statistics from stem-and-leaf:**\n" +
          "- Mode: most frequent leaf.\n" +
          "- Median: middle value.\n" +
          "- Range and IQR can be read directly.",
        examinerTips: [
          "Always include a key (e.g. '$2|3 = 23$').",
          "Leaves must be in order (ascending) from the stem outward.",
        ],
        commonMistakes: [
          "Writing leaves out of order.",
          "Forgetting the key — without it, the diagram is uninterpretable.",
        ],
        recap: [
          "Data: $14, 16, 21, 24, 24, 27, 30, 31, 35, 38, 42$. Draw a stem-and-leaf diagram and find the median.",
        ],
      },
      {
        title: "Bar Charts, Pictograms & Pie Charts",
        body:
          "**Bar charts:** Bars of equal width, with length proportional to frequency. Gaps between bars for discrete data.\n\n" +
          "**Pie charts:** A circle divided into sectors where each sector's angle represents the proportion of the total.\n" +
          "Sector angle $= \\frac{\\text{frequency}}{\\text{total}} \\times 360°$.\n\n" +
          "**Pictograms:** Use symbols to represent frequencies; include a key for symbol value.\n\n" +
          "**Comparative bar charts:** Two or more datasets on the same axes with different shading.\n" +
          "**Composite (stacked) bar charts:** Bars divided into sections representing sub-categories.",
        examinerTips: [
          "For pie charts, check angles sum to $360°$ before drawing.",
          "Label all sectors/bars with both the category name and the frequency or percentage.",
        ],
        commonMistakes: [
          "Calculating sector angles as fractions of $180°$ instead of $360°$.",
          "Drawing bars with different widths in a bar chart.",
        ],
        recap: [
          "30 students chose subjects: Maths (12), Science (8), English (10). Draw a pie chart showing all three subjects.",
        ],
      },
      {
        title: "Reading, Interpreting & Comparing Statistical Diagrams",
        body:
          "**Extracting information from diagrams:**\n" +
          "- Read values carefully from axes, using correct scales.\n" +
          "- For frequency polygons, points are plotted at class midpoints.\n\n" +
          "**Comparing diagrams:**\n" +
          "- Comment on shape (symmetric/skewed), centre, and spread.\n" +
          "- For two pie charts of different sizes, compare percentages not angles.\n\n" +
          "**Skewness:**\n" +
          "- **Positively skewed:** tail to the right, mean > median > mode.\n" +
          "- **Negatively skewed:** tail to the left, mean < median < mode.\n" +
          "- **Symmetric:** mean = median = mode.",
        examinerTips: [
          "When comparing two pie charts of different total sizes, convert to percentages rather than comparing angles.",
          "Describe both shape AND an average when asked for a 'full comparison'.",
        ],
        commonMistakes: [
          "Comparing angles on pie charts of different sizes without noting that the totals differ.",
        ],
        recap: [
          "A frequency polygon shows test scores for two classes. Class A: symmetric, peak at 60–70. Class B: positively skewed, peak at 40–50. Write a comparison statement.",
        ],
      },
    ],
  },
  {
    number: 49,
    title: "Histograms",
    section: "9. Statistics",
    topic: "Histograms",
    intro:
      "Histograms represent continuous grouped data where the area of each bar (not its height) represents the frequency. At Extended level, students construct and interpret histograms using frequency density.",
    subheadings: [
      {
        title: "Frequency Density",
        body:
          "In a **histogram**, the $y$-axis shows **frequency density**, not frequency.\n\n" +
          "$$\\text{Frequency density} = \\frac{\\text{Frequency}}{\\text{Class width}}$$\n\n" +
          "$$\\text{Frequency} = \\text{Frequency density} \\times \\text{Class width}$$\n\n" +
          "**Why frequency density?** When class widths are unequal, using frequency on the $y$-axis gives a misleading picture — a wide class would appear large even with low frequency. Frequency density corrects for this by making the area proportional to frequency.\n\n" +
          "**Key property:** Area of bar = frequency (when frequency density is on $y$-axis).",
        examinerTips: [
          "Always calculate frequency density = frequency ÷ class width for each class.",
          "If class widths are equal, the histogram and bar chart look identical (but are conceptually different).",
        ],
        commonMistakes: [
          "Using frequency instead of frequency density on the $y$-axis for histograms.",
          "Confusing the height (frequency density) with the area (frequency).",
        ],
        recap: [
          "Class $0 \\leq t < 5$: frequency $10$, class width $5$. Find the frequency density.",
          "A bar in a histogram has frequency density $3$ and class width $10$. Find the frequency.",
        ],
      },
      {
        title: "Drawing Histograms",
        body:
          "**Method:**\n" +
          "1. Calculate the class width for each class.\n" +
          "2. Calculate frequency density = frequency ÷ class width.\n" +
          "3. Draw bars with the class interval on the $x$-axis and frequency density on the $y$-axis.\n" +
          "4. Bars have no gaps (continuous data).\n\n" +
          "**Example:**\n\n" +
          "| Time (min) | Freq | Class width | Freq density |\n" +
          "|------------|------|-------------|---------------|\n" +
          "| $0 < t \\leq 10$ | 20 | 10 | 2.0 |\n" +
          "| $10 < t \\leq 20$ | 30 | 10 | 3.0 |\n" +
          "| $20 < t \\leq 40$ | 24 | 20 | 1.2 |\n" +
          "| $40 < t \\leq 60$ | 10 | 20 | 0.5 |",
        examinerTips: [
          "Draw the $y$-axis label as 'Frequency density' (not 'Frequency').",
          "Bars must be adjacent (no gaps) since data is continuous.",
        ],
        commonMistakes: [
          "Drawing gaps between bars — histograms have no gaps.",
          "Drawing all bars the same width when class widths differ.",
        ],
        recap: [
          "Draw a histogram for: age $0 < a \\leq 20$ (freq 40), $20 < a \\leq 30$ (freq 50), $30 < a \\leq 50$ (freq 60), $50 < a \\leq 80$ (freq 30).",
        ],
      },
      {
        title: "Interpreting Histograms",
        body:
          "**Reading frequency from a histogram:**\n" +
          "Frequency = frequency density × class width (read from the bar's height × its width).\n\n" +
          "**Estimating number of values in a subrange:**\n" +
          "If a class is $20 < t \\leq 40$ with frequency density $1.2$, the number of values in $20 < t \\leq 30$:\n" +
          "Width = $10$, so frequency $= 1.2 \\times 10 = 12$ (assume uniform distribution within class).\n\n" +
          "**Completing a histogram:** If one bar's frequency is missing, use the total frequency:\n" +
          "Find the missing frequency = total − sum of known frequencies. Then divide by class width to get frequency density.",
        examinerTips: [
          "When estimating values within a subrange of a class, assume the data is uniformly distributed across the class.",
          "To find total frequency: add up (frequency density × class width) for all bars.",
        ],
        commonMistakes: [
          "Reading the height as the frequency — height is frequency density; area is frequency.",
          "Forgetting to multiply frequency density by the correct class width for unequal classes.",
        ],
        recap: [
          "A histogram has bars: $0 < t \\leq 5$ (fd = 4), $5 < t \\leq 15$ (fd = 3), $15 < t \\leq 25$ (fd = 2.5), $25 < t \\leq 40$ (fd = 1). Find: (a) the total frequency (b) the number in $5 < t \\leq 20$.",
        ],
      },
    ],
  },
  {
    number: 50,
    title: "Cumulative Frequency",
    section: "9. Statistics",
    topic: "Cumulative Frequency",
    intro:
      "Cumulative frequency diagrams (ogives) allow estimation of the median, quartiles, interquartile range, and percentiles from grouped data. This is an Extended-only topic.",
    subheadings: [
      {
        title: "Cumulative Frequency",
        body:
          "**Cumulative frequency** is a running total of frequencies, summed up to and including each class.\n\n" +
          "**Example:**\n\n" +
          "| Mass (kg) | Freq | Cumulative Freq |\n" +
          "|-----------|------|------------------|\n" +
          "| $50 < m \\leq 55$ | 4 | 4 |\n" +
          "| $55 < m \\leq 60$ | 11 | 15 |\n" +
          "| $60 < m \\leq 65$ | 18 | 33 |\n" +
          "| $65 < m \\leq 70$ | 12 | 45 |\n" +
          "| $70 < m \\leq 75$ | 5 | 50 |\n\n" +
          "Total $n = 50$.",
        examinerTips: [
          "Cumulative frequency always increases (or stays constant) — if yours decreases, recalculate.",
          "Plot cumulative frequency at the **upper** boundary of each class interval.",
        ],
        commonMistakes: [
          "Plotting at the lower boundary instead of the upper boundary of each class.",
          "Forgetting the first point: plot $(50, 0)$ as the starting point (zero values below the first lower boundary).",
        ],
        recap: [
          "Given: $0 < x \\leq 10$ (freq 5), $10 < x \\leq 20$ (freq 12), $20 < x \\leq 30$ (freq 18), $30 < x \\leq 40$ (freq 10), $40 < x \\leq 50$ (freq 5). Complete a cumulative frequency table.",
        ],
      },
      {
        title: "Drawing Cumulative Frequency Diagrams",
        body:
          "**Method:**\n" +
          "1. Complete the cumulative frequency table.\n" +
          "2. Plot points: $(\\text{upper class boundary}, \\text{cumulative frequency})$.\n" +
          "3. Add the starting point: $(\\text{lower boundary of first class}, 0)$.\n" +
          "4. Join with a smooth S-shaped curve (ogive).\n\n" +
          "**Shape:** A cumulative frequency curve is always non-decreasing and S-shaped.\n\n" +
          "**Scale:** $y$-axis goes from $0$ to the total frequency $n$; $x$-axis covers the full range of data.",
        examinerTips: [
          "Draw a smooth curve, not straight lines connecting the points.",
          "The curve should start at $(\\text{lower boundary of first class}, 0)$, not at the origin unless the first class starts at $0$.",
        ],
        commonMistakes: [
          "Drawing straight lines between points — the curve should be smooth and S-shaped.",
          "Not starting the curve at the correct point (forgetting the $(x, 0)$ start).",
        ],
        recap: [
          "Using the cumulative frequency table from the previous recap, draw the cumulative frequency curve. Label axes clearly.",
        ],
      },
      {
        title: "Interpreting Cumulative Frequency Diagrams",
        body:
          "**Reading the median and quartiles from a CF curve:**\n\n" +
          "For $n$ values:\n" +
          "- **Median:** Read $x$ at cumulative frequency $\\frac{n}{2}$.\n" +
          "- **Lower quartile $Q_1$:** Read $x$ at cumulative frequency $\\frac{n}{4}$.\n" +
          "- **Upper quartile $Q_3$:** Read $x$ at cumulative frequency $\\frac{3n}{4}$.\n" +
          "- **IQR** $= Q_3 - Q_1$.\n\n" +
          "**Method:** Draw a horizontal line from the CF value to the curve, then drop a vertical line to the $x$-axis to read the value.\n\n" +
          "**Percentiles:** The $p$th percentile is at CF $= \\frac{p}{100} \\times n$.\n\n" +
          "**Estimating number of values above/below a threshold:**\n" +
          "Read the CF at the threshold, then subtract from $n$ to find values above.",
        examinerTips: [
          "Show all construction lines on the graph — horizontal to the curve, then vertical to the axis.",
          "Values read from a graph have inherent estimation error — answers within a range of ±1 are usually accepted.",
        ],
        commonMistakes: [
          "Reading the median at $\\frac{n+1}{2}$ instead of $\\frac{n}{2}$ for large datasets.",
          "Forgetting to show construction lines — this loses method marks.",
        ],
        recap: [
          "From a CF diagram with $n = 80$: (a) Find the median (read at CF = 40) (b) Find $Q_1$ and $Q_3$ (at CF = 20 and 60) (c) Find the IQR (d) How many values exceed the value at CF = 60?",
        ],
      },
    ],
  },
  {
    number: 51,
    title: "Scatter Graphs & Correlation",
    section: "9. Statistics",
    topic: "Scatter Graphs & Correlation",
    intro:
      "Scatter graphs reveal relationships between two variables. Lines of best fit allow predictions within and beyond the data range.",
    subheadings: [
      {
        title: "Scatter Graphs & Correlation",
        body:
          "A **scatter graph** (scatter plot) plots pairs of values $(x, y)$ as individual points.\n\n" +
          "**Types of correlation:**\n" +
          "- **Positive correlation:** As $x$ increases, $y$ increases. Points slope upward.\n" +
          "- **Negative correlation:** As $x$ increases, $y$ decreases. Points slope downward.\n" +
          "- **No correlation:** No pattern in the points.\n\n" +
          "**Strength of correlation:**\n" +
          "- **Strong:** Points close to a straight line.\n" +
          "- **Weak:** Points widely scattered around a line.\n" +
          "- **Perfect:** All points on a straight line ($r = \\pm 1$).\n\n" +
          "**Correlation ≠ Causation:** A strong correlation does not mean one variable causes the other.",
        examinerTips: [
          "Describe correlation using BOTH direction (positive/negative) and strength (strong/weak).",
          "An outlier is a point that doesn't fit the overall pattern — always mention if present.",
        ],
        commonMistakes: [
          "Saying variables are 'correlated' without specifying direction and strength.",
          "Implying causation from correlation: 'shoe size increases maths ability' — WRONG; correlation only.",
        ],
        recap: [
          "A scatter graph shows hours of revision ($x$) vs. exam score ($y$). Describe the expected type of correlation and explain why.",
        ],
      },
      {
        title: "Lines of Best Fit",
        body:
          "A **line of best fit** (trend line) is a straight line that best represents the trend in a scatter graph.\n\n" +
          "**Properties:**\n" +
          "- Passes through (or near) the mean point $(\\bar{x}, \\bar{y})$.\n" +
          "- Has approximately equal numbers of points above and below it.\n" +
          "- Minimises the overall distance from points to the line.\n\n" +
          "**Using the line of best fit:**\n" +
          "- **Interpolation:** Predicting within the range of the data — generally reliable.\n" +
          "- **Extrapolation:** Predicting outside the data range — less reliable, treat with caution.\n\n" +
          "**Example:** If the LOBF has equation $y = 1.5x + 10$, predict $y$ when $x = 8$:\n" +
          "$y = 1.5(8) + 10 = 22$.",
        examinerTips: [
          "Draw the line through the mean point $(\\bar{x}, \\bar{y})$ — calculate these if not given.",
          "Extrapolation predictions must be labelled as estimates and acknowledged as less reliable.",
        ],
        commonMistakes: [
          "Forcing the line through the origin — the LOBF should reflect the data, not any assumed relationship.",
          "Drawing a line that connects only the two extreme points.",
        ],
        recap: [
          "A scatter graph has LOBF passing through $(2, 18)$ and $(8, 36)$. Find the equation of the LOBF and use it to predict $y$ when $x = 5$ and when $x = 12$ (comment on reliability).",
        ],
      },
    ],
  },
];
