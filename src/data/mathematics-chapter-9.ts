import type { Chapter } from "../lib/notes/types";

// mathematics-chapter-9.ts — chapters 121–136 (Statistics)
export const MATHEMATICS_CHAPTERS_9: Chapter[] = [
  // ─────────────────────────────────────────────────────────────
  // 121. Discrete & Continuous Data
  // ─────────────────────────────────────────────────────────────
  {
    number: 121,
    title: "Discrete & Continuous Data",
    section: "Statistics",
    topic: "Types of Data",
    intro: `Understanding the difference between discrete and continuous data is the foundation of statistics — the type of data determines which diagrams and averages are appropriate. At IGCSE level, examiners test this distinction directly and use it as a gateway to selecting the correct statistical method. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Discrete & Continuous Data",
        body: `**Data** is information collected for analysis. All numerical data falls into one of two categories.\n\n**Discrete data** can only take specific, separate values — usually whole numbers that you count. Examples include the number of students in a class (you cannot have 2.7 students), shoe sizes, goals scored in a match, and the number of cars in a car park. Discrete data has gaps between possible values.\n\n**Continuous data** can take any value within a range and is measured rather than counted. Examples include height, mass, temperature, time, and length. Because measurement always has a degree of approximation, continuous data is often given to a specified accuracy (e.g. height measured to the nearest cm).\n\nThe distinction matters because: discrete data is displayed in bar charts with gaps (or no gaps for grouped discrete data), while continuous data uses histograms with no gaps. Averages such as the mode are more meaningful for discrete data, while the mean and median are used extensively with continuous data in frequency tables.`,
        groups: [
          {
            subTitle: "Discrete data",
            bullets: [
              "**Discrete data** takes only specific, countable values — usually integers with gaps between them.",
              "**Examples:** number of siblings (0, 1, 2, …), number of text messages sent, points scored in a quiz.",
              "**Key indicator:** you cannot have a value between two consecutive data values — there is no such thing as 2.3 siblings.",
              "**Appropriate diagram:** bar chart (with or without gaps), tally chart, pie chart.",
              "**Appropriate averages:** mode is well-defined; mean and median can also be calculated.",
            ],
          },
          {
            subTitle: "Continuous data",
            bullets: [
              "**Continuous data** is measured and can take any value within an interval — it has no natural gaps.",
              "**Examples:** height (1.72 m, 1.725 m, …), time taken to run a race, temperature, mass of an apple.",
              "**Key indicator:** values are recorded to a given degree of accuracy (nearest cm, nearest gram).",
              "**Appropriate diagram:** histogram, frequency polygon, cumulative frequency curve.",
              "**Appropriate averages:** mean (using mid-interval values), median (from cumulative frequency), mode (modal class).",
            ],
          },
          {
            subTitle: "Identifying data type in context",
            bullets: [
              "**Question to ask:** 'Is this counted or measured?' — counted → discrete, measured → continuous.",
              "**Grouped data:** continuous data is always grouped into class intervals (e.g. 150 ≤ h < 160); discrete data may also be grouped.",
              "**Class boundaries:** continuous grouped data uses inequalities to show that the boundary value belongs to only one group.",
              "**Common borderline case:** shoe size is discrete (UK sizes: 5, 5.5, 6…) even though it has half-sizes — there is still a gap between consecutive values.",
            ],
          },
        ],
        examinerTips: [
          "If a question asks you to identify data as discrete or continuous, always justify your answer with one clear reason (counted vs measured).",
          "Class intervals for continuous data use inequality notation: 10 ≤ x < 20 means values from 10 up to but not including 20.",
          "For grouped continuous data, there are no gaps between bars in a histogram — this visually confirms the data is continuous.",
          "The number of goals scored is always discrete, even if the question shows it in a table — counting cannot produce a decimal value.",
        ],
        commonMistakes: [
          "Calling height discrete because it is written as a whole number (e.g. 170 cm) — it is still a measurement and therefore continuous.",
          "Assuming all grouped data is continuous — discrete data can also be grouped (e.g. 1–5 cars, 6–10 cars).",
        ],
        recap: [
          "State whether the number of books on a shelf is discrete or continuous data. Give a reason. [1]",
          "A student records the time, in seconds, for 20 runners to complete a race. State the type of data collected and explain why. [2]",
          "Give one example of discrete data and one example of continuous data from daily life. [2]",
          "Explain why a histogram is more appropriate than a bar chart for displaying the masses of 50 students. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 122. Mean, Median & Mode
  // ─────────────────────────────────────────────────────────────
  {
    number: 122,
    title: "Mean, Median & Mode",
    section: "Statistics",
    topic: "Averages",
    intro: `The mean, median, and mode are three measures of central tendency that summarise a data set with a single representative value. Each has strengths and weaknesses, and Cambridge IGCSE questions regularly ask you to calculate all three and decide which is most appropriate. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Mean, Median & Mode",
        body: `**Mean** (arithmetic mean): add all values together and divide by the number of values.\nMean = (sum of all values) / (number of values)\n\nFor the data set 3, 7, 7, 9, 12, 2: mean = (3 + 7 + 7 + 9 + 12 + 2) / 6 = 40 / 6 ≈ 6.67.\n\n**Median:** the middle value when all values are arranged in order. If there is an even number of values, the median is the mean of the two middle values.\nFor 2, 3, 7, 7, 9, 12 (6 values): median = (7 + 7)/2 = **7**.\n\n**Mode:** the value that appears most often. There can be more than one mode, or no mode if all values occur equally often.\nFor the data above: mode = **7** (appears twice).\n\n**Choosing the best average:**\n- Mean: best when data is roughly symmetric with no extreme outliers.\n- Median: best when data is skewed or contains outliers.\n- Mode: best for categorical data or when the most common value is needed.`,
        groups: [
          {
            subTitle: "Calculating the mean",
            bullets: [
              "**Formula:** mean = Σx / n, where Σx is the sum of all values and n is the count.",
              "**Include all values:** do not omit any data points, including zeros or repeated values.",
              "**Example:** data: 5, 8, 8, 10, 14 → sum = 45, n = 5 → mean = 45/5 = **9**.",
              "**Non-integer mean:** the mean does not have to be one of the data values; leave as a fraction or round as instructed.",
            ],
          },
          {
            subTitle: "Finding the median",
            bullets: [
              "**Step 1:** arrange all values in ascending order.",
              "**Step 2:** find the position of the median — it is at position (n + 1)/2 for n values.",
              "**Odd number of values:** the median is the middle value — e.g. for 7 values, the median is the 4th value.",
              "**Even number of values:** the median is the mean of the two middle values — for 8 values, mean of the 4th and 5th.",
              "**Example:** 2, 4, 5, 7, 11, 14 → median = (5 + 7)/2 = **6**.",
            ],
          },
          {
            subTitle: "Mode and choosing the right average",
            bullets: [
              "**Mode:** the most frequently occurring value; a data set can be bimodal (two modes) or have no mode.",
              "**Mode for categories:** if the data is non-numerical (e.g. favourite colour), only the mode is meaningful.",
              "**Outliers affect the mean:** a single very large or very small value pulls the mean towards it; the median is resistant.",
              "**Example decision:** house prices in a street — median is more representative because one mansion inflates the mean.",
            ],
          },
        ],
        examinerTips: [
          "Always sort the data before finding the median — writing the values in order first is a step examiners look for.",
          "For an even number of data values, the median is the average of the two middle values, not just one of them.",
          "If asked which average is 'most appropriate', state the reason — a bare name without justification rarely earns full marks.",
          "When all three averages are asked for, work through mean → median → mode in a systematic order to avoid skipping one.",
        ],
        commonMistakes: [
          "Forgetting to sort the data before identifying the median — the median must be the middle value of an ordered list.",
          "Giving the median position number instead of the median value — the question asks for the value, not 'the 4th term'.",
          "Stating 'no mode' when every value appears once — if no value repeats, then there is indeed no mode, but verify this carefully.",
        ],
        recap: [
          "Find the mean, median, and mode of: 4, 6, 6, 8, 9, 11, 12. [3]",
          "The ages of five students are 13, 14, 14, 15, and 19. Explain why the median is a better average than the mean for this data. [2]",
          "A data set has seven values. The median is 15 and the values in order are 9, 11, 13, __, 17, 20, 23. Find the missing value. [1]",
          "Write down a data set of five values where the mean and median are both equal to 8. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 123. Calculations with the Mean
  // ─────────────────────────────────────────────────────────────
  {
    number: 123,
    title: "Calculations with the Mean",
    section: "Statistics",
    topic: "Averages",
    intro: `Once you know the mean and the number of values in a data set, you can reverse the calculation to find a missing value or the total sum. This reverse-working skill appears regularly in IGCSE exam questions and requires confident rearrangement of the mean formula. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Calculations with the Mean",
        body: `The mean formula is: **mean = sum of values / number of values**, which rearranges to:\n\n**Sum of values = mean × number of values**\n\nThis rearrangement allows you to work backwards — if you know the mean and how many values there are, you can find the total. If you know the total and all values except one, you can find the missing value.\n\n**Example 1 — finding the total:** the mean mass of 8 parcels is 3.5 kg. Total mass = 3.5 × 8 = **28 kg**.\n\n**Example 2 — finding a missing value:** the mean of five numbers is 9. Four of the numbers are 7, 11, 8, and 6. Find the fifth number.\nTotal = 9 × 5 = 45. Sum of known values = 7 + 11 + 8 + 6 = 32. Missing value = 45 − 32 = **13**.\n\n**Combined data sets:** if Group A has n₁ values with mean m₁, and Group B has n₂ values with mean m₂, the combined mean is:\nCombined mean = (n₁m₁ + n₂m₂) / (n₁ + n₂).`,
        groups: [
          {
            subTitle: "Finding a missing value",
            bullets: [
              "**Step 1:** use sum = mean × n to find the required total.",
              "**Step 2:** add up all the known values.",
              "**Step 3:** subtract the known sum from the required total to find the missing value.",
              "**Example:** mean of 6 values is 10 → total = 60. Known values sum to 47 → missing value = 60 − 47 = **13**.",
              "**Check:** verify by recalculating the mean with the found value included.",
            ],
          },
          {
            subTitle: "Combined mean of two groups",
            bullets: [
              "**Formula:** combined mean = (n₁ × m₁ + n₂ × m₂) / (n₁ + n₂).",
              "**Example:** Class A: 20 students, mean score 65. Class B: 30 students, mean score 75.",
              "Combined mean = (20 × 65 + 30 × 75) / (20 + 30) = (1300 + 2250) / 50 = 3550 / 50 = **71**.",
              "**Common error:** taking the mean of the two means — (65 + 75)/2 = 70, which ignores the different group sizes.",
            ],
          },
          {
            subTitle: "Effect of adding or removing values",
            bullets: [
              "**Adding a value equal to the mean:** the mean stays the same (the new value does not change the balance).",
              "**Adding a value above the mean:** the mean increases.",
              "**Adding a value below the mean:** the mean decreases.",
              "**Removing a value:** find the new total by subtracting the removed value, then divide by (n − 1).",
            ],
          },
        ],
        examinerTips: [
          "Always state the formula sum = mean × n explicitly in your working — this earns the method mark even if arithmetic is wrong.",
          "For combined means, calculate each group's total separately before adding — do not average the two means directly.",
          "Re-read the question to check whether the missing value must be a whole number, and whether it makes sense in context.",
          "Show a check at the end: recalculate the mean with your found value to confirm it matches the given mean.",
        ],
        commonMistakes: [
          "Averaging the two group means without weighting by group size when finding a combined mean — always multiply each mean by its group size first.",
          "Subtracting n instead of the sum of known values when finding a missing value — the total minus the sum of knowns gives the missing value.",
        ],
        recap: [
          "The mean of seven numbers is 12. Six of the numbers are 8, 15, 11, 9, 14, and 10. Find the seventh number. [2]",
          "Class A has 25 students with a mean test score of 68. Class B has 15 students with a mean test score of 72. Find the mean score for all 40 students combined. [3]",
          "The mean of four values is 7. A fifth value of 7 is added. Without calculating, state what happens to the mean. Explain your reasoning. [2]",
          "A group of 10 people has a mean age of 24 years. One person aged 16 leaves the group. Find the new mean age. [3]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 124. Range
  // ─────────────────────────────────────────────────────────────
  {
    number: 124,
    title: "Range",
    section: "Statistics",
    topic: "Averages",
    intro: `The range measures the spread of a data set by giving the difference between the largest and smallest values. Although simple to calculate, the range is an important companion to averages in exam questions and helps describe the consistency of a data set. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Range",
        body: `The **range** is a measure of **spread** (also called **dispersion**):\n\n**Range = largest value − smallest value**\n\nFor the data set 3, 7, 7, 9, 12, 2: range = 12 − 2 = **10**.\n\nA **small range** indicates that the data values are clustered closely together (consistent). A **large range** indicates that the values are spread out (variable).\n\nThe range is easy to calculate but has one major weakness: it is heavily influenced by **outliers** (extreme values). One unusually large or small value makes the range large even if most values are clustered closely together. For this reason, the **interquartile range** (Chapter 125) is preferred when outliers are present.\n\n**Using range to compare data sets:** when comparing two groups, state both the average and the range, and interpret both. For example: "Team A has a higher mean score (better performance) but a larger range (less consistent performance than Team B)."`,
        groups: [
          {
            subTitle: "Calculating the range",
            bullets: [
              "**Formula:** range = maximum value − minimum value.",
              "**Always identify the two extreme values first:** scan the data set for the highest and lowest values before subtracting.",
              "**Example:** exam marks: 45, 72, 68, 51, 90, 38 → range = 90 − 38 = **52**.",
              "**Range is a single positive number:** it is not an interval; do not write '38 to 90'.",
            ],
          },
          {
            subTitle: "Interpreting the range",
            bullets: [
              "**Small range → consistent data:** values are close together; results are reliable and predictable.",
              "**Large range → variable data:** results are spread out; there is more variation.",
              "**Outlier effect:** one extreme value dramatically increases the range, even if other values are closely grouped.",
              "**Comparison context:** when comparing two data sets, compare both mean and range — better average with smaller range is preferred for most real-world applications.",
            ],
          },
          {
            subTitle: "Range in context",
            bullets: [
              "**Sports:** a batsman with a range of 5 runs is very consistent; a range of 95 means very variable performance.",
              "**Manufacturing:** a small range in product measurements means quality control is effective.",
              "**Limitation:** if most values are between 10 and 15 but one value is 80, the range is 70+ — misleadingly large.",
              "**Alternative:** the interquartile range (IQR) removes the effect of outliers and is a more reliable spread measure.",
            ],
          },
        ],
        examinerTips: [
          "Range questions are usually 1 mark — make sure you subtract (do not add) and give a single number as the answer.",
          "In 'compare two data sets' questions, always comment on both the average and the spread — a comparison of only one earns half marks.",
          "State the context in comparison answers: 'Team B is more consistent because its range is smaller' scores the communication mark.",
          "For grouped data, the range is estimated as: upper boundary of the highest class − lower boundary of the lowest class.",
        ],
        commonMistakes: [
          "Giving the range as an interval ('from 2 to 12') instead of the difference (10) — the range is a single number.",
          "Failing to identify the true maximum and minimum when data is not in order — always scan the full list before subtracting.",
        ],
        recap: [
          "Find the range of: 15, 8, 23, 4, 19, 11. [1]",
          "Team A scores: 45, 50, 48, 52, 47. Team B scores: 30, 55, 60, 42, 63. Compare the two teams using the mean and range. [4]",
          "A data set has a range of 18. The smallest value is 7. Find the largest value. [1]",
          "Explain why the range may not be a reliable measure of spread if the data contains an outlier. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 125. Quartiles & Interquartile Range
  // ─────────────────────────────────────────────────────────────
  {
    number: 125,
    title: "Quartiles & Interquartile Range",
    section: "Statistics",
    topic: "Spread",
    intro: `Quartiles divide an ordered data set into four equal parts, and the interquartile range measures the spread of the middle 50% of the data. Because it ignores the highest and lowest quarters, the IQR is resistant to extreme values and is the preferred measure of spread when data contains outliers. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Quartiles & Interquartile Range",
        body: `When data is arranged in ascending order, the **quartiles** are:\n- **Q1 (lower quartile):** the median of the lower half of the data (25th percentile).\n- **Q2 (median):** the middle value of the whole data set (50th percentile).\n- **Q3 (upper quartile):** the median of the upper half of the data (75th percentile).\n\n**Interquartile Range (IQR) = Q3 − Q1**\n\nThe IQR represents the spread of the middle 50% of data, making it unaffected by extreme values at either end.\n\n**Example:** data: 2, 5, 7, 9, 10, 12, 15, 18, 20 (9 values).\n- Q2 = 10 (5th value)\n- Lower half: 2, 5, 7, 9 → Q1 = (5 + 7)/2 = 6\n- Upper half: 12, 15, 18, 20 → Q3 = (15 + 18)/2 = 16.5\n- IQR = 16.5 − 6 = **10.5**\n\nFor large data sets, Q1 is at position (n+1)/4 and Q3 is at position 3(n+1)/4.`,
        groups: [
          {
            subTitle: "Finding Q1, Q2, and Q3",
            bullets: [
              "**Step 1:** arrange the data in ascending order.",
              "**Step 2:** find Q2 (the median) using the middle position formula: (n+1)/2.",
              "**Step 3:** find Q1 as the median of values below Q2 (do not include Q2 itself when n is odd).",
              "**Step 4:** find Q3 as the median of values above Q2.",
              "**Even n example:** 4, 6, 8, 10, 12, 14 → Q2 = (8+10)/2 = 9; Q1 = (4+6)/2 = 5; Q3 = (12+14)/2 = 13; IQR = 8.",
            ],
          },
          {
            subTitle: "Interquartile range",
            bullets: [
              "**IQR = Q3 − Q1:** a small IQR means the middle half of the data is tightly clustered.",
              "**IQR vs range:** the range measures total spread; the IQR measures the spread of the central 50%, ignoring extremes.",
              "**Outlier rule:** a value is an outlier if it is more than 1.5 × IQR below Q1 or above Q3.",
              "**Consistency:** when comparing two groups, the one with the smaller IQR has more consistent middle-50% performance.",
            ],
          },
          {
            subTitle: "Reading quartiles from a cumulative frequency graph",
            bullets: [
              "**Cumulative frequency graphs** allow quartiles to be estimated for large grouped data sets.",
              "**Q2:** read across from 50% of total frequency on the y-axis to the curve, then down to the x-axis.",
              "**Q1:** read across from 25% of total frequency.",
              "**Q3:** read across from 75% of total frequency.",
              "**IQR from graph:** subtract the Q1 x-value from the Q3 x-value.",
            ],
          },
        ],
        examinerTips: [
          "Always state the positions of Q1, Q2, and Q3 in your working before writing the values — this earns method marks.",
          "When n is odd, do not include the median value itself in either half when finding Q1 and Q3.",
          "For cumulative frequency graphs, draw clear horizontal and vertical lines on the diagram to show your reading — examiners credit this.",
          "IQR questions nearly always follow a cumulative frequency graph question on Paper 2; practise reading the graph accurately.",
        ],
        commonMistakes: [
          "Including the median value in both halves when finding Q1 and Q3 for an odd-numbered data set — the median sits between the two halves.",
          "Calculating IQR as Q3 + Q1 instead of Q3 − Q1 — the IQR is always the difference, not the sum.",
          "Reading cumulative frequency at the wrong percentage (e.g. 75% instead of 25% for Q1).",
        ],
        recap: [
          "Find Q1, Q3, and the IQR for: 3, 5, 7, 8, 10, 12, 14, 16, 18. [3]",
          "A cumulative frequency graph shows Q1 = 24, Q3 = 46. Find the IQR and interpret its meaning in context. [2]",
          "Explain why the IQR is a better measure of spread than the range when a data set contains outliers. [2]",
          "A data set has Q1 = 15 and IQR = 22. Find Q3. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 126. Averages from Tables
  // ─────────────────────────────────────────────────────────────
  {
    number: 126,
    title: "Averages from Tables",
    section: "Statistics",
    topic: "Spread",
    intro: `When data is presented in a frequency table, you cannot simply add up raw values — you must use each value's frequency to calculate the mean, median, and mode efficiently. This is one of the most commonly examined statistics skills at IGCSE, appearing in both grouped and ungrouped forms. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Averages from Tables",
        body: `**Frequency tables** summarise data by showing each value (or class interval) alongside how many times it occurs (the **frequency**).\n\n**Mode from a frequency table:** the value with the highest frequency.\n\n**Median from a frequency table:** find the total frequency n, then identify the value at position (n+1)/2. Use a cumulative frequency column to locate which row contains this position.\n\n**Mean from a frequency table (ungrouped):**\nMean = Σ(fx) / Σf, where f is the frequency and x is the data value.\n\n**Example:**\n| x | f | fx |\n|---|---|----|\n| 1 | 3 | 3 |\n| 2 | 5 | 10 |\n| 3 | 4 | 12 |\n| 4 | 2 | 8 |\nΣf = 14, Σfx = 33. Mean = 33/14 ≈ **2.36**.\n\n**Mean from grouped data:** replace each class interval with its **mid-interval value** and apply the same formula:\nMean ≈ Σ(f × mid-value) / Σf. This gives an estimate because the exact values within each class are unknown.`,
        groups: [
          {
            subTitle: "Mean from an ungrouped frequency table",
            bullets: [
              "**Add an fx column:** multiply each value x by its frequency f to get fx for each row.",
              "**Sum the fx column:** Σfx gives the total of all data values.",
              "**Sum the f column:** Σf gives the total number of values (n).",
              "**Apply formula:** mean = Σfx / Σf.",
              "**Example:** x = 5, f = 3 contributes 15 to the fx column — it represents three values of 5.",
            ],
          },
          {
            subTitle: "Mean from a grouped frequency table",
            bullets: [
              "**Mid-interval value:** for the class 10 ≤ x < 20, mid-value = (10 + 20)/2 = 15.",
              "**Treat mid-values as the data:** multiply each mid-value by its frequency.",
              "**Result is an estimate:** we assume all values in each class equal the mid-value.",
              "**Example:** class 20–30 (mid = 25), f = 8 → fx = 200.",
              "**Modal class:** the class with the highest frequency — do not give a single mode value for grouped data.",
            ],
          },
          {
            subTitle: "Median and mode from tables",
            bullets: [
              "**Mode (ungrouped):** the x-value with the largest f; if two rows tie, state both.",
              "**Modal class (grouped):** the class interval with the highest frequency.",
              "**Median position:** (n + 1)/2 for discrete data; n/2 for reading from a cumulative frequency graph.",
              "**Cumulative frequency column:** add each frequency to the running total; the median falls in the row where the cumulative frequency first reaches or exceeds (n+1)/2.",
            ],
          },
        ],
        examinerTips: [
          "Always add a 'fx' column in your working and show its sum — this is the clearest way to demonstrate the mean calculation.",
          "For grouped data, clearly state the mid-interval values before multiplying — examiners check that you used mid-values, not class boundaries.",
          "Do not state a single mode value for grouped data — write 'the modal class is …' and give the interval.",
          "Double-check Σf equals the stated total number of people/items — a wrong total is the most common arithmetic error.",
        ],
        commonMistakes: [
          "Using class boundaries instead of mid-interval values when estimating the mean from grouped data.",
          "Forgetting to weight each value by its frequency — the mean is Σfx / Σf, not Σx / (number of rows).",
          "Finding the median position correctly but then reading the wrong row from the cumulative frequency column.",
        ],
        recap: [
          "A frequency table shows: score 1 (f=4), score 2 (f=7), score 3 (f=5), score 4 (f=4). Calculate the mean score. [3]",
          "Using the table above, find the median and the mode. [2]",
          "The grouped frequency table shows heights: 140≤h<150 (f=5), 150≤h<160 (f=12), 160≤h<170 (f=8), 170≤h<180 (f=5). Estimate the mean height. [3]",
          "State the modal class for the grouped frequency table in question 3 and explain why a single modal value cannot be given. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 127. Using Calculators to Find Averages
  // ─────────────────────────────────────────────────────────────
  {
    number: 127,
    title: "Using Calculators to Find Averages",
    section: "Statistics",
    topic: "Spread",
    intro: `Scientific calculators have a dedicated statistics mode that can find the mean, sum of values, and standard deviation directly from entered data. Knowing how to use this mode efficiently — and when to verify results by hand — is valuable for Paper 2 questions where calculation speed matters. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Using Calculators to Find Averages",
        body: `Most scientific calculators (Casio fx-83 and similar models) have a **STAT mode** (or SD mode) for statistical calculations.\n\n**Entering data:**\n1. Press MODE and select STAT (or SD).\n2. Choose option 1: 1-VAR (single variable statistics).\n3. Enter each data value and press = after each one.\n4. If using a frequency table, enter the value, navigate to the frequency column, enter the frequency, and press =.\n\n**Retrieving results:**\n- Press SHIFT then 1 (or the STAT key) to access the statistics menu.\n- Select 'Var' to see x̄ (mean), σn (population standard deviation), σn−1 (sample standard deviation), n (count), and Σx (sum).\n- **x̄** gives the mean; **Σx** gives the sum of all values; **n** confirms the number of data points entered.\n\nAlways verify at least one value by hand — entering errors in STAT mode gives wrong answers without any warning.\n\n**Key symbols:**\n- x̄: mean\n- Σx: sum of all values\n- Σx²: sum of squared values\n- n: number of data points`,
        groups: [
          {
            subTitle: "Steps for entering raw data",
            bullets: [
              "**Enter STAT mode:** MODE → STAT → 1-VAR (exact key sequence depends on calculator model).",
              "**Enter each value:** type the number and press = (or the down arrow on some models).",
              "**Clear before use:** always clear the STAT memory (SHIFT → MODE → 1 for memory clear) before entering new data.",
              "**Retrieve x̄:** SHIFT → STAT → Var → x̄ → = gives the mean.",
              "**Retrieve Σx:** SHIFT → STAT → Sum → Σx → = gives the sum.",
            ],
          },
          {
            subTitle: "Entering frequency table data",
            bullets: [
              "**Two-column table:** when STAT mode shows x and FREQ columns, enter data value in x and frequency in FREQ.",
              "**Grouped data:** enter the mid-interval value in the x column and the class frequency in the FREQ column.",
              "**Check n:** after entering all data, retrieve n — it should equal Σf; if not, re-enter data.",
              "**Efficiency:** using STAT mode with frequencies is much faster than repeating each value multiple times.",
            ],
          },
          {
            subTitle: "Checking and verifying results",
            bullets: [
              "**Sense check:** the mean should lie between the minimum and maximum values — if not, a data-entry error was made.",
              "**Manual check:** verify by estimating the mean: total must be approximately mean × n.",
              "**Rounding:** if a question asks for the mean to 1 decimal place, store the full answer and round only at the end.",
              "**Standard deviation:** the calculator also gives σ — at IGCSE Extended level this may be needed for comparing spread.",
            ],
          },
        ],
        examinerTips: [
          "STAT mode is not available on Paper 1 (non-calculator) — practise the full manual method (Σfx / Σf) as well.",
          "Always state your answer clearly after using the calculator: 'mean = 7.3' — do not just write a number without context.",
          "Verify the total frequency n matches the number of data points you intended to enter — this catches most entry errors.",
          "If your calculator model is different from examples in textbooks, check the manual for the equivalent key sequence.",
        ],
        commonMistakes: [
          "Forgetting to clear the STAT memory before entering new data, causing previous values to contaminate results.",
          "Entering class boundaries instead of mid-interval values when processing grouped frequency data.",
        ],
        recap: [
          "Describe the steps to enter the data set 4, 7, 9, 9, 11 into your calculator's STAT mode and retrieve the mean. [3]",
          "A frequency table shows: value 2 (f=3), value 5 (f=6), value 8 (f=4), value 10 (f=2). Use STAT mode to find the mean and verify your answer by calculating Σfx / Σf manually. [4]",
          "Explain why you should check that the value of n displayed by the calculator matches Σf from your table. [1]",
          "State one advantage of using a calculator's STAT mode over the manual method for large data sets. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 128. Comparing Data Sets
  // ─────────────────────────────────────────────────────────────
  {
    number: 128,
    title: "Comparing Data Sets",
    section: "Statistics",
    topic: "Spread",
    intro: `Comparing two data sets requires commenting on both a measure of central tendency (mean or median) and a measure of spread (range or IQR). IGCSE comparison questions always require two separate statements in context — one about average, one about consistency — to earn full marks. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Comparing Data Sets",
        body: `When asked to **compare two data sets**, you must address two aspects:\n\n1. **Central tendency** (average): which group has a higher mean or median, and what does this mean in context?\n2. **Spread** (consistency): which group has a smaller range or IQR, and what does this mean about consistency?\n\n**Example:** two batsmen in cricket.\n- Batsman A: mean = 42, range = 60.\n- Batsman B: mean = 38, range = 15.\n\nComparison: "Batsman A scores more runs on average (mean 42 > 38), but Batsman B is more consistent (range 15 < 60)."\n\n**Choosing which average and spread to use:**\n- If data has outliers: use **median** and **IQR**.\n- If data is roughly symmetric: use **mean** and **range**.\n- If you have cumulative frequency graphs: read off median and IQR directly.\n\nComparisons must be **in context** — refer to what the data represents, not just numbers. Examiners deduct marks for statements like "A has a higher mean" with no reference to what A is measuring.`,
        groups: [
          {
            subTitle: "What to include in a comparison",
            bullets: [
              "**Average statement:** compare means or medians and state which is higher with a contextual interpretation.",
              "**Spread statement:** compare ranges or IQRs and state which is smaller, linking to consistency or variability.",
              "**Both are needed:** one statement alone earns only partial credit — always make two distinct comparative comments.",
              "**Use comparative language:** 'higher', 'lower', 'more consistent', 'less variable', 'greater spread'.",
              "**Name the groups explicitly:** 'Group A has a higher mean than Group B' rather than 'it is higher'.",
            ],
          },
          {
            subTitle: "Comparing from box plots",
            bullets: [
              "**Box plot:** displays minimum, Q1, median, Q3, and maximum as a diagram.",
              "**Median:** shown by the vertical line inside the box.",
              "**IQR:** shown by the width of the box (Q3 − Q1).",
              "**Range:** shown by the distance from whisker to whisker (maximum − minimum).",
              "**Comparison:** compare the median lines (average) and box widths (consistency) of two box plots drawn on the same scale.",
            ],
          },
          {
            subTitle: "Common comparison contexts in exams",
            bullets: [
              "**Test scores:** compare mean (overall performance) and range/IQR (consistency of performance).",
              "**Heights of groups:** compare median (typical height) and IQR (how spread the middle half is).",
              "**Journey times:** compare mean (average speed/reliability) and range (how predictable the journey is).",
              "**Before/after scenarios:** 'after training, the mean improved and the IQR decreased, showing both better performance and greater consistency'.",
            ],
          },
        ],
        examinerTips: [
          "IGCSE mark schemes typically award one mark for the average comparison and one mark for the spread comparison — both must be in context.",
          "Avoid vague words like 'better' without explaining what aspect is better — 'higher average score' is correct, 'better' alone is not.",
          "When reading from box plots on the same axis, always check the scale before estimating the median or IQR.",
          "If the question says 'make two comparisons', write them as two clearly numbered or separate sentences.",
        ],
        commonMistakes: [
          "Making only one comparison (e.g. only the mean) and missing the spread — always cover both central tendency and spread.",
          "Stating the values without comparing: 'Team A mean is 70, Team B mean is 65' — say 'Team A has a higher mean than Team B'.",
        ],
        recap: [
          "Team A exam scores: mean 65, IQR 20. Team B exam scores: mean 58, IQR 8. Write two comparisons in context. [2]",
          "Two box plots show that School X has a median of 72 and a box width of 15, while School Y has a median of 68 and a box width of 6. Compare the two schools' results. [2]",
          "Explain why comparing medians rather than means is more appropriate when one data set contains an outlier. [2]",
          "A runner's times (seconds) over 10 races: 55, 57, 54, 56, 58. A second runner's times: 50, 60, 52, 65, 48. Compare the two runners. [4]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 129. Stem & Leaf Diagrams
  // ─────────────────────────────────────────────────────────────
  {
    number: 129,
    title: "Stem & Leaf Diagrams",
    section: "Statistics",
    topic: "Statistical Diagrams",
    intro: `A stem-and-leaf diagram organises numerical data while preserving every individual value, making it easy to find the median, mode, and range directly from the diagram. Back-to-back versions allow two data sets to be compared on the same diagram. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Stem & Leaf Diagrams",
        body: `In a **stem-and-leaf diagram**, each data value is split into a **stem** (leading digit(s)) and a **leaf** (final digit). Values with the same stem are grouped in the same row.\n\n**Example:** data: 23, 25, 31, 34, 38, 41, 45, 46, 52.\n\nStem | Leaves\n2    | 3 5\n3    | 1 4 8\n4    | 1 5 6\n5    | 2\n\nA **key** must always be provided: e.g. '2 | 3 means 23'.\n\nLeaves are ordered within each row for the diagram to be useful.\n\n**Reading averages directly:**\n- **Mode:** the leaf that appears most often (if any repeats exist).\n- **Median:** count to the middle value — with 9 values, the 5th value is the median = 38.\n- **Range:** last leaf in last row − first leaf in first row = 52 − 23 = 29.\n\n**Back-to-back stem-and-leaf diagram:** two data sets share the same stem column, with one set's leaves reading left and the other reading right. This allows direct visual comparison.`,
        groups: [
          {
            subTitle: "Drawing a stem-and-leaf diagram",
            bullets: [
              "**Step 1:** identify the range and decide on stems (usually tens digits for two-digit data).",
              "**Step 2:** draw the stems in a vertical column in ascending order.",
              "**Step 3:** write each leaf (units digit) next to its stem in the order the data appears (unordered draft).",
              "**Step 4:** redraw with leaves in ascending order within each row.",
              "**Step 5:** write a key (e.g. '4 | 7 means 47') — a diagram without a key is incomplete.",
            ],
          },
          {
            subTitle: "Back-to-back stem-and-leaf diagrams",
            bullets: [
              "**Structure:** stems in the centre; Group A leaves extend left, Group B leaves extend right.",
              "**Reading Group A leaves:** read from the stem outward (right to left) — the value increases moving toward the stem.",
              "**Comparison:** compare the median and range of both groups directly from the diagram.",
              "**Example key:** '5 | 3 means 35 for Group A; 3 | 5 means 35 for Group B'.",
            ],
          },
          {
            subTitle: "Finding statistics from stem-and-leaf diagrams",
            bullets: [
              "**Counting values:** total number of leaves = total number of data values.",
              "**Median:** count to the middle leaf — for n values, median is at position (n+1)/2.",
              "**Range:** (largest stem + largest leaf) − (smallest stem + smallest leaf).",
              "**Mode:** the leaf (and therefore value) that appears most times across the whole diagram.",
            ],
          },
        ],
        examinerTips: [
          "Always include a key — a stem-and-leaf diagram without a key cannot be interpreted and will lose marks.",
          "For back-to-back diagrams, state which side is which group clearly; read Group A leaves from right to left (from stem outward).",
          "Order the leaves within each row; unordered leaves make it impossible to find the median reliably.",
          "In exam questions, the diagram is often pre-drawn and you are asked to find medians or compare the two groups — focus on reading accuracy.",
        ],
        commonMistakes: [
          "Forgetting to order the leaves within each row — the median and mode cannot be found reliably from an unordered diagram.",
          "Reading back-to-back leaves in the wrong direction — Group A leaves are read from the stem outward to the left.",
        ],
        recap: [
          "Draw a stem-and-leaf diagram for: 42, 47, 51, 55, 55, 58, 63, 67, 71. Include a key. [3]",
          "Using your diagram from question 1, find the median and the range. [2]",
          "A back-to-back stem-and-leaf diagram shows Group A: 3|4|7 and Group B: 6|4|2 for stems 4 and 5. Write down the values in both groups and find each group's median. [3]",
          "Explain one advantage of a stem-and-leaf diagram over a bar chart for displaying raw data. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 130. Tally Charts & Frequency Tables
  // ─────────────────────────────────────────────────────────────
  {
    number: 130,
    title: "Tally Charts & Frequency Tables",
    section: "Statistics",
    topic: "Statistical Diagrams",
    intro: `Tally charts and frequency tables are the standard methods for organising raw data into a compact summary. They form the basis for all further statistical diagrams and calculations, so constructing and reading them accurately is an essential foundation skill. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Tally Charts & Frequency Tables",
        body: `A **tally chart** records each data value as a tally mark. Marks are grouped in fives (four vertical marks and a diagonal fifth — the 'gate' pattern) to make counting easier.\n\nA **frequency table** converts the tallies into numerical frequencies. It has three columns: the data value (or class interval), the tally, and the frequency.\n\n**Example:** colour of 20 cars: red × 7, blue × 6, white × 4, black × 3.\n\n| Colour | Tally       | Frequency |\n|--------|-------------|-----------|\n| Red    | ||||‾ ||    | 7         |\n| Blue   | ||||‾ |     | 6         |\n| White  | ||||         | 4         |\n| Black  | |||          | 3         |\n| **Total** |          | **20**    |\n\nFor **grouped data**, class intervals are listed instead of individual values. The intervals should be equal-width and must cover all data with no overlap.\n\n**Relative frequency** = frequency / total frequency. It expresses each category's share as a proportion (or percentage) and is used to construct pie charts.`,
        groups: [
          {
            subTitle: "Constructing a tally chart",
            bullets: [
              "**Gate tally groups:** mark four strokes then cross diagonally — each gate represents 5, making counting fast.",
              "**Go through the data once:** work through the raw data list from start to finish, making one mark per value.",
              "**Transfer to frequency:** count the tallies for each row and write the numerical frequency.",
              "**Check the total:** sum all frequencies and verify it equals the number of data values given in the question.",
            ],
          },
          {
            subTitle: "Grouped frequency tables",
            bullets: [
              "**Equal class widths:** use intervals of the same width (e.g. all width 10) unless specified otherwise.",
              "**No overlap:** each data value must fit in exactly one class — use inequalities: 10 ≤ x < 20 (20 goes in the next class).",
              "**Choosing classes:** aim for 5–8 classes; too few loses detail, too many defeats the purpose of grouping.",
              "**Class width:** for 10 ≤ x < 20, the class width is 20 − 10 = 10.",
            ],
          },
          {
            subTitle: "Relative frequency",
            bullets: [
              "**Relative frequency = f / n:** where f is the class frequency and n is the total frequency.",
              "**Sum of all relative frequencies = 1 (or 100%):** use this as a check.",
              "**Use in pie charts:** relative frequency × 360° gives the sector angle for each category.",
              "**Probability link:** relative frequency estimates the probability of a randomly chosen item falling in that category.",
            ],
          },
        ],
        examinerTips: [
          "Always add a 'Total' row at the bottom of a frequency table and check it matches the total number of items given.",
          "When constructing a grouped table from raw data, scan through the entire data list systematically — do not try to group by memory.",
          "Class intervals for continuous data must use inequality notation to avoid ambiguity at the boundaries.",
          "Relative frequency questions often appear as 'complete the table' tasks — if one frequency is missing, subtract the known total from the overall total.",
        ],
        commonMistakes: [
          "Using overlapping class intervals (e.g. 0–10 and 10–20 with no inequality) so that the value 10 could fit in either class.",
          "Miscounting tally marks when transferring to frequency — always recount by grouping the gates (groups of 5) and adding remainders.",
        ],
        recap: [
          "A survey records the number of siblings of 20 students. The values are: 0,1,2,0,1,3,2,1,0,1,2,1,0,2,3,1,1,2,0,1. Construct a frequency table. [3]",
          "Using your table from question 1, find the mode and the median. [2]",
          "Design a suitable grouped frequency table for recording heights between 140 cm and 200 cm. [2]",
          "A frequency table shows: 20 red, 15 blue, 10 green, 5 yellow (total 50). Find the relative frequency of red. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 131. Bar Charts & Pictograms
  // ─────────────────────────────────────────────────────────────
  {
    number: 131,
    title: "Bar Charts & Pictograms",
    section: "Statistics",
    topic: "Statistical Diagrams",
    intro: `Bar charts and pictograms are the most basic statistical diagrams, used to display the frequencies of discrete or categorical data visually. IGCSE questions on these diagrams test construction, reading, and simple interpretation. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Bar Charts & Pictograms",
        body: `A **bar chart** (also called a **bar graph**) uses rectangular bars of equal width to represent the frequency of each category. The height (or length for horizontal charts) of each bar is proportional to the frequency.\n\n**Key features of a bar chart:**\n- Bars have equal width and are equally spaced (gaps between bars for discrete/categorical data).\n- The y-axis (frequency axis) must start at 0 and have a uniform scale.\n- Both axes must be labelled, and the chart must have a title.\n\n**Compound (grouped) bar charts** place two or more bars side by side for each category, allowing comparisons between groups.\n\n**Component (stacked) bar charts** stack the bars to show how a total is made up of parts.\n\nA **pictogram** (or pictograph) uses identical symbols or icons to represent data, with a **key** stating how many items each symbol represents. Partial symbols represent fractions of the key value.`,
        groups: [
          {
            subTitle: "Drawing a bar chart",
            bullets: [
              "**Equal-width bars:** all bars must have the same width — only the height varies to show frequency.",
              "**Gaps between bars:** for discrete or categorical data, leave equal gaps between bars (bars should not touch).",
              "**Y-axis from zero:** starting the y-axis at any value other than zero gives a misleading impression of differences.",
              "**Labels:** label both axes with units and give the chart a title.",
              "**Scale:** choose a scale that uses the full height of the chart and allows values to be read easily.",
            ],
          },
          {
            subTitle: "Reading and interpreting bar charts",
            bullets: [
              "**Reading frequency:** read the top of each bar against the y-axis scale.",
              "**Total frequency:** add all bar heights to find the total number of items.",
              "**Most/least common:** the tallest bar shows the mode (for discrete data).",
              "**Comparing groups:** in a compound bar chart, compare the bar heights within each category across the two (or more) groups.",
            ],
          },
          {
            subTitle: "Pictograms",
            bullets: [
              "**Key is essential:** every pictogram must have a key (e.g. '1 circle = 10 students') — without it the diagram is meaningless.",
              "**Partial symbols:** half a symbol represents half the key value; a quarter represents one quarter, etc.",
              "**Reading values:** count the symbols in each row (including fractions) and multiply by the key value.",
              "**Limitation:** pictograms are less precise than bar charts — fractions of symbols are difficult to draw and read accurately.",
            ],
          },
        ],
        examinerTips: [
          "In drawing questions, use a ruler for all bars and ensure bar widths are consistent — sloppy diagrams lose presentation marks.",
          "Always check the y-axis scale before reading values — some exam charts use a scale of 2 or 5 per grid square.",
          "For pictogram completion questions, check whether a partial symbol is needed and draw it carefully as a recognisable fraction.",
          "Title and axis labels are required for full marks on diagram-drawing questions — do not skip them under time pressure.",
        ],
        commonMistakes: [
          "Drawing bars of different widths — only the height should vary in a bar chart; widths must all be equal.",
          "Omitting the key on a pictogram — without the key, readers cannot interpret the diagram, and marks are lost.",
        ],
        recap: [
          "The frequencies of favourite sports are: football 12, basketball 8, tennis 5, swimming 7. Draw a bar chart for this data. [3]",
          "Using the bar chart from question 1, state the mode and find the total number of students surveyed. [2]",
          "A pictogram uses a star symbol where 1 star = 4 items. How many items are represented by 3.5 stars? [1]",
          "Explain one disadvantage of using a pictogram instead of a bar chart for a data set with values like 17 and 23. [1]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 132. Pie Charts
  // ─────────────────────────────────────────────────────────────
  {
    number: 132,
    title: "Pie Charts",
    section: "Statistics",
    topic: "Statistical Diagrams",
    intro: `A pie chart displays data as sectors of a circle, where each sector's angle is proportional to its frequency. Pie charts are ideal for showing the relative share of each category within a whole, but they do not display actual frequencies unless labelled. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Pie Charts",
        body: `In a **pie chart**, the whole circle represents the total frequency, and each category is shown as a sector. The **sector angle** is proportional to the category's frequency:\n\n**Sector angle = (frequency / total frequency) × 360°**\n\n**Example:** 60 students choose their favourite subject: Maths 20, Science 15, English 10, History 15.\n- Total = 60.\n- Maths: (20/60) × 360° = **120°**\n- Science: (15/60) × 360° = **90°**\n- English: (10/60) × 360° = **60°**\n- History: (15/60) × 360° = **90°**\n- Check: 120 + 90 + 60 + 90 = 360° ✓\n\n**Reading a pie chart:** to find the frequency from an angle:\nFrequency = (sector angle / 360°) × total frequency.\n\nAll sectors must be clearly labelled (or have a legend), and the chart should have a title.`,
        groups: [
          {
            subTitle: "Calculating sector angles",
            bullets: [
              "**Formula:** sector angle = (category frequency / total frequency) × 360°.",
              "**Always find the total first:** sum all frequencies before dividing.",
              "**Rounding:** if angles do not sum to exactly 360° due to rounding, adjust the largest sector.",
              "**Check:** sum all calculated angles — they must equal 360°.",
            ],
          },
          {
            subTitle: "Drawing a pie chart",
            bullets: [
              "**Draw a circle:** use a compass for a neat circle.",
              "**Mark a starting radius:** draw a line from the centre to the top (12 o'clock position) or any convenient direction.",
              "**Use a protractor:** measure and draw each sector angle in turn, using the previous sector's radius as the new baseline.",
              "**Label each sector:** write the category name (and angle or percentage if required) inside or alongside each sector.",
            ],
          },
          {
            subTitle: "Reading and interpreting pie charts",
            bullets: [
              "**Largest sector:** represents the most common category (the mode).",
              "**Finding frequency from angle:** frequency = (sector angle / 360°) × total.",
              "**Comparing two pie charts:** pie charts of different totals cannot be compared directly by eye — only proportions are comparable.",
              "**Percentage from angle:** percentage = (sector angle / 360°) × 100%.",
            ],
          },
        ],
        examinerTips: [
          "Always show the calculation for each sector angle in your working — the formula earns marks even if one angle is arithmetic wrong.",
          "After calculating all angles, sum them to verify they equal 360° before drawing — this check takes seconds and prevents errors.",
          "When reading a sector angle from a given pie chart, use a protractor carefully; angles that look like 90° may not be — always measure.",
          "For 'find the frequency' questions from a pie chart, you need both the angle and the total frequency — check the question provides both.",
        ],
        commonMistakes: [
          "Calculating the angle as (frequency / 360°) × total — the formula is reversed; divide the frequency by the total, then multiply by 360.",
          "Failing to check that angles sum to 360° — rounding errors accumulate and must be corrected before drawing.",
        ],
        recap: [
          "30 students chose their favourite colour: red 10, blue 9, green 6, yellow 5. Calculate the sector angle for each colour. [3]",
          "Draw a fully labelled pie chart for the data in question 1. [3]",
          "A pie chart shows a sector of 72° out of a total of 180 items. How many items does this sector represent? [2]",
          "Explain why two pie charts with different totals (100 items and 200 items respectively) cannot be directly compared by looking at sector sizes. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 133. Reading & Interpreting Statistical Diagrams
  // ─────────────────────────────────────────────────────────────
  {
    number: 133,
    title: "Reading & Interpreting Statistical Diagrams",
    section: "Statistics",
    topic: "Statistical Diagrams",
    intro: `Reading and interpreting statistical diagrams accurately is a core IGCSE skill tested in every paper. Questions may use bar charts, pie charts, stem-and-leaf diagrams, cumulative frequency graphs, histograms, and box plots — and always ask you to extract values, calculate statistics, or draw conclusions from them. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Reading & Interpreting Statistical Diagrams",
        body: `**Reading a diagram** means accurately extracting numerical values from the visual display. **Interpreting a diagram** means using those values to draw conclusions about the data or the real-world context.\n\n**Common diagram types and what to read:**\n- **Bar chart:** read bar heights against the frequency axis; identify the mode as the tallest bar.\n- **Pie chart:** measure or read sector angles; find frequencies using (angle/360°) × total.\n- **Stem-and-leaf:** read individual data values directly; find median by counting to the middle leaf.\n- **Cumulative frequency graph:** read frequencies at given values on the x-axis; read values at given cumulative frequencies on the y-axis (used to find median, Q1, Q3).\n- **Histogram:** frequency density = frequency / class width; area of bar = frequency.\n- **Box plot:** read minimum, Q1, median, Q3, and maximum directly from the diagram.\n\n**Interpretation** requires going beyond reading numbers: "The median journey time increased from 25 minutes in January to 32 minutes in June, suggesting that traffic worsened over the period."`,
        groups: [
          {
            subTitle: "Reading cumulative frequency graphs",
            bullets: [
              "**x-axis:** the data variable (e.g. height, time, score).",
              "**y-axis:** cumulative frequency — the running total of frequencies up to and including each x-value.",
              "**Reading procedure:** draw a horizontal line from the required cumulative frequency to the curve, then a vertical line down to the x-axis.",
              "**Median:** read across from n/2 (or (n+1)/2) on the y-axis.",
              "**IQR:** Q3 − Q1, found by reading from 3n/4 and n/4 on the y-axis.",
            ],
          },
          {
            subTitle: "Reading histograms",
            bullets: [
              "**Histograms display continuous grouped data:** bars have no gaps.",
              "**Frequency density = frequency / class width:** the y-axis is frequency density, not frequency.",
              "**Frequency = area of bar = frequency density × class width.**",
              "**Unequal class widths:** different-width classes will have bars of different widths; always use area to find frequency.",
              "**Modal class:** the class with the tallest bar (highest frequency density).",
            ],
          },
          {
            subTitle: "Interpreting diagrams in context",
            bullets: [
              "**Identify the trend:** describe what the diagram shows overall (e.g. 'scores generally increased').",
              "**Use data values:** support any statement with specific numbers from the diagram.",
              "**Compare groups:** when two data sets appear on the same diagram, refer to both explicitly.",
              "**Avoid over-interpretation:** only conclude what the data shows — do not infer causes unless the question asks you to.",
            ],
          },
        ],
        examinerTips: [
          "For cumulative frequency graphs, always draw clear construction lines on the diagram — horizontal from the y-axis, then vertical to the x-axis — and mark your reading points.",
          "In histogram questions, calculate the frequency density for each bar before drawing — never use raw frequency as the bar height.",
          "When reading a scale, identify the value of each small grid square before attempting to read a bar or point.",
          "Interpretation marks require context — 'the median is 42' earns a reading mark; 'the median height of 42 cm suggests the plants are still young' earns the interpretation mark.",
        ],
        commonMistakes: [
          "Reading cumulative frequency at a value instead of reading a value at a cumulative frequency — the two operations are reverses of each other.",
          "Using frequency instead of frequency density for the y-axis of a histogram — this produces a misleading diagram for unequal class widths.",
        ],
        recap: [
          "A cumulative frequency graph has n = 60. What cumulative frequency value should you read across from to find the median? [1]",
          "A histogram bar has frequency density 4 and class width 5. How many values fall in this class? [2]",
          "A cumulative frequency graph shows Q1 = 18 and Q3 = 34. Find the IQR and explain what it means in context. [3]",
          "A box plot shows: minimum 10, Q1 20, median 30, Q3 45, maximum 70. Find the range and IQR. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 134. Comparing Statistical Diagrams
  // ─────────────────────────────────────────────────────────────
  {
    number: 134,
    title: "Comparing Statistical Diagrams",
    section: "Statistics",
    topic: "Statistical Diagrams",
    intro: `Comparing two statistical diagrams involves reading values from both, calculating averages and spreads, and writing conclusions that address the specific context of the question. This is one of the highest-mark statistics skills in IGCSE papers and always requires both a central-tendency comparison and a spread comparison. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Comparing Statistical Diagrams",
        body: `Exam questions on comparing diagrams most commonly use:\n- **Two cumulative frequency graphs** on the same axes — compare medians and IQRs.\n- **Two box plots** on the same axis — compare medians and IQRs (or ranges).\n- **Two histograms** — compare modal classes, spread of data, and shape.\n- **Back-to-back stem-and-leaf diagrams** — compare medians and ranges.\n\n**Procedure:**\n1. Read the median from each diagram.\n2. Read Q1 and Q3 (or min/max for range) from each diagram.\n3. Calculate the IQR for each.\n4. Write two comparison statements in context — one for central tendency, one for spread.\n\n**Example (two box plots):**\n- Box plot A: median = 50, IQR = 20.\n- Box plot B: median = 45, IQR = 8.\n\n"Group A has a higher median score (50 > 45), suggesting higher performance on average. Group B has a smaller IQR (8 < 20), indicating more consistent scores."`,
        groups: [
          {
            subTitle: "Comparing cumulative frequency graphs",
            bullets: [
              "**Read both medians:** draw lines from n/2 on the y-axis for each curve and read the x-axis values.",
              "**Read both IQRs:** find Q1 and Q3 for each curve, then compute IQR = Q3 − Q1.",
              "**Compare in context:** 'Group A has a higher median time, suggesting their journey takes longer on average.'",
              "**Shape of the curve:** a steeper, narrower curve indicates data clustered more closely (smaller spread).",
            ],
          },
          {
            subTitle: "Comparing box plots",
            bullets: [
              "**Median line:** the vertical line inside the box — compare median positions.",
              "**Box width = IQR:** a narrower box means more consistent middle-50% data.",
              "**Whisker length:** longer whiskers indicate more extreme values or greater overall range.",
              "**Skew:** if the median is closer to Q1, the data is positively skewed; closer to Q3 means negatively skewed.",
            ],
          },
          {
            subTitle: "What to write in comparison answers",
            bullets: [
              "**Two distinct points:** one about average (median/mean) and one about spread (IQR/range).",
              "**Explicit comparison:** use comparative words — 'higher', 'lower', 'more consistent', 'greater spread'.",
              "**Name both groups:** 'Group X has a higher median than Group Y' — not just 'it is higher'.",
              "**Contextual language:** 'the higher median suggests students in Class A performed better overall'.",
            ],
          },
        ],
        examinerTips: [
          "Draw clear construction lines on the diagrams when reading medians and quartiles — examiners credit these lines as evidence of method.",
          "If two box plots overlap significantly, make sure to compare both the median and the IQR, not just one.",
          "For cumulative frequency comparisons, give the median values to 1 decimal place if the graph allows; this shows accuracy of reading.",
          "Never say one group is 'better' without specifying in what way — better average, more consistent, etc.",
        ],
        commonMistakes: [
          "Making only one comparison statement and missing the spread comparison — exam questions nearly always require both.",
          "Reading Q1 from the 25th cumulative frequency value instead of from 25% of the total — always use a percentage of the total n.",
        ],
        recap: [
          "Two cumulative frequency graphs show: Group A median = 55, IQR = 18; Group B median = 48, IQR = 12. Write two comparison statements in context. [2]",
          "Box plot X: Q1 = 20, Q3 = 50. Box plot Y: Q1 = 30, Q3 = 42. Find the IQR for each and compare the spread. [3]",
          "A back-to-back stem-and-leaf diagram shows Boys: median = 63, range = 40; Girls: median = 67, range = 25. Interpret these results in context. [2]",
          "Explain why comparing the ranges of two box plots gives less reliable information than comparing their IQRs. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 135. Scatter Graphs & Correlation
  // ─────────────────────────────────────────────────────────────
  {
    number: 135,
    title: "Scatter Graphs & Correlation",
    section: "Statistics",
    topic: "Scatter Graphs",
    intro: `A scatter graph plots two variables against each other to investigate whether a relationship exists between them. The strength and direction of that relationship is described as correlation. Recognising and describing correlation is a key skill for IGCSE statistics questions on both papers. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Scatter Graphs & Correlation",
        body: `A **scatter graph** (scatter diagram or scatter plot) uses a point for each data pair (x, y) on a coordinate grid. The x-axis shows one variable and the y-axis shows the other.\n\n**Correlation** describes the relationship between the two variables:\n\n- **Positive correlation:** as x increases, y increases. Points slope upward from left to right. Example: height and arm span.\n- **Negative correlation:** as x increases, y decreases. Points slope downward from left to right. Example: temperature and number of coats sold.\n- **No correlation:** no clear pattern — points are scattered randomly. Example: shoe size and exam score.\n\n**Strength of correlation:**\n- **Strong correlation:** points lie close to a straight line.\n- **Weak correlation:** points show a general trend but are widely scattered.\n- **Perfect correlation:** all points lie exactly on a straight line (rare in real data).\n\n**Correlation ≠ causation:** just because two variables are correlated does not mean one causes the other. Example: ice cream sales and drowning rates both increase in summer (they share a common cause — hot weather).`,
        groups: [
          {
            subTitle: "Drawing a scatter graph",
            bullets: [
              "**Plot each (x, y) pair:** for each data point, read across from the x-axis and up from the y-axis and mark a cross.",
              "**Label both axes:** include the variable name and units on each axis.",
              "**Consistent scales:** use a uniform scale on each axis; it does not need to start at zero but must be linear.",
              "**Title:** include a title that names both variables and the context.",
            ],
          },
          {
            subTitle: "Describing correlation",
            bullets: [
              "**Direction:** positive (upward trend), negative (downward trend), or no correlation.",
              "**Strength:** strong (points close to a line), moderate, or weak (points widely scattered).",
              "**Full description:** always give both direction and strength — 'strong positive correlation' or 'weak negative correlation'.",
              "**Numerical measure:** Pearson's correlation coefficient r ranges from −1 (perfect negative) to +1 (perfect positive); r = 0 means no linear correlation.",
            ],
          },
          {
            subTitle: "Correlation and causation",
            bullets: [
              "**Correlation does not imply causation:** a third variable (lurking variable) may explain the relationship.",
              "**Example:** a positive correlation between shoe size and reading ability in children is explained by age — older children have larger feet and better reading ability.",
              "**Exam phrasing:** 'does this graph show that more revision causes higher scores?' — answer: it shows a positive correlation, not necessarily causation.",
              "**Genuine causal relationships:** some correlations do reflect causation (e.g. temperature and expansion), but this requires scientific reasoning, not just the graph.",
            ],
          },
        ],
        examinerTips: [
          "When describing correlation, always give both strength and direction — 'positive correlation' alone may lose a mark if strength is asked for.",
          "Plotting points as small crosses (×) rather than large dots makes them easier to see and place accurately.",
          "For 'does the graph support the claim that…' questions, state whether the correlation is positive/negative/none, then say yes or no to the claim with justification.",
          "An outlier on a scatter graph is a point that does not follow the general pattern — identify it and consider whether it should affect the line of best fit.",
        ],
        commonMistakes: [
          "Describing direction without strength — 'positive correlation' should be 'strong positive correlation' or 'weak positive correlation' depending on the scatter.",
          "Confusing correlation with causation — a scatter graph can only show association, not cause-and-effect.",
        ],
        recap: [
          "A scatter graph shows that as the number of hours of sunshine increases, ice cream sales increase. Describe the type of correlation. [1]",
          "Plot the following points on a scatter graph and describe the correlation: (2,8), (4,6), (5,5), (7,4), (9,2), (10,1). [3]",
          "A student says: 'The scatter graph shows that more TV watching causes lower exam scores.' Explain why this conclusion may not be valid. [2]",
          "Describe the difference between strong and weak positive correlation. [2]",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 136. Lines of Best Fit
  // ─────────────────────────────────────────────────────────────
  {
    number: 136,
    title: "Lines of Best Fit",
    section: "Statistics",
    topic: "Scatter Graphs",
    intro: `A line of best fit is a straight line drawn through the middle of a scatter graph's points to represent the overall trend. It allows predictions to be made and is only meaningful when there is a clear correlation. IGCSE questions test drawing, reading, and interpreting lines of best fit. Cambridge IGCSE Mathematics (0580).`,
    subheadings: [
      {
        title: "Lines of Best Fit",
        body: `A **line of best fit** (trend line) is drawn so that it passes through the **mean point** (x̄, ȳ) of the data and has approximately equal numbers of data points above and below it.\n\n**Rules for drawing a line of best fit:**\n1. Only draw a line of best fit if there is clear correlation.\n2. The line should pass through or near the mean point (x̄, ȳ).\n3. Roughly equal numbers of points should lie above and below the line.\n4. The line does not have to pass through the origin (unless the data starts from zero and logic requires it).\n5. The line should extend across the full range of the data (or slightly beyond for predictions).\n\n**Using the line for predictions:**\n- **Interpolation:** predicting within the range of the data — this is reliable.\n- **Extrapolation:** predicting outside the range of the data — this is unreliable because the trend may not continue.\n\n**Example:** a line of best fit through data for revision hours (x) and exam score (y) has the equation y = 5x + 30. For 6 hours of revision: score ≈ 5(6) + 30 = **60**.`,
        groups: [
          {
            subTitle: "Drawing a line of best fit",
            bullets: [
              "**Calculate the mean point:** find x̄ (mean of x-values) and ȳ (mean of y-values); the line must pass through (x̄, ȳ).",
              "**Balance the points:** use a ruler and place the line so roughly half the points are above and half below.",
              "**Extend the line:** draw it across the full data range so predictions can be made within the range.",
              "**Single straight line:** a line of best fit is always a straight line — do not connect the dots or draw a curve.",
            ],
          },
          {
            subTitle: "Making predictions",
            bullets: [
              "**Interpolation:** reading a value within the x-range of the data — draw a vertical line from the x-value to the line, then horizontal to the y-axis.",
              "**Extrapolation:** predicting beyond the x-range — this is risky because the trend may change; always state that the prediction is unreliable.",
              "**Reading from the line:** when making a prediction, draw clear construction lines on the diagram and read the y-axis value.",
              "**Rounding predictions:** give predictions to the same degree of accuracy as the data or as asked by the question.",
            ],
          },
          {
            subTitle: "Equation of the line of best fit",
            bullets: [
              "**Form:** y = mx + c, where m is the gradient and c is the y-intercept.",
              "**Finding the gradient:** choose two points on the line (not data points) and calculate m = (y₂ − y₁)/(x₂ − x₁).",
              "**Finding the y-intercept:** read where the line crosses the y-axis (at x = 0), or substitute a known point and the gradient into y = mx + c.",
              "**Using the equation:** substitute the x-value into the equation to get the predicted y-value directly.",
            ],
          },
        ],
        examinerTips: [
          "Always calculate and plot the mean point (x̄, ȳ) before drawing the line — this is a required step and earns a method mark.",
          "Use a transparent ruler to adjust the line until it passes through the mean point with equal numbers of points on each side.",
          "When making a prediction, draw the construction lines on the diagram clearly — examiners credit the lines as evidence of method.",
          "If asked to comment on the reliability of a prediction, state whether it is interpolation or extrapolation and explain the implication.",
        ],
        commonMistakes: [
          "Connecting the scatter points dot-to-dot instead of drawing one straight trend line — a line of best fit is not a join-the-dots.",
          "Drawing the line without passing through the mean point (x̄, ȳ) — the mean point is the balance point of the line and must lie on it.",
          "Using extrapolation without noting the unreliability — always flag when a prediction goes beyond the data range.",
        ],
        recap: [
          "A scatter graph has a mean point at (5, 30). Explain how you would use this point when drawing a line of best fit. [1]",
          "A line of best fit is drawn for data on revision hours (x) and test scores (y). It passes through (2, 40) and (8, 70). Find the equation of the line in the form y = mx + c. [3]",
          "Using the equation from question 2, estimate the test score for 11 hours of revision. Comment on the reliability of this estimate. [3]",
          "Explain the difference between interpolation and extrapolation, and state which is more reliable for making predictions. [2]",
        ],
      },
    ],
  },
];
