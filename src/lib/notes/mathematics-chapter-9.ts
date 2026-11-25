import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/mathematics";

const panelA = imagePanel(IMG, [
  {
    src: "math9-sorted-strips.webp",
    alt: "Thin paper strips of different lengths laid on a desk in ascending order, the middle strip lifted slightly and the shortest and longest marked with pins",
    caption: "Middle strip is the median, span is the range",
  },
  {
    src: "math9-tally-chart.webp",
    alt: "An exercise book open to a hand-drawn two-way table with columns of tally strokes in groups of five, a pencil resting on the total row",
    caption: "Tabulate before you calculate",
  },
]);

const panelB = imagePanel(IMG, [
  {
    src: "math9-pie-protractor.webp",
    alt: "A blank circle on white paper divided by fresh pencil radii into sectors, a clear protractor and a pair of compasses lying beside it",
    caption: "Angles, not percentages, draw the pie",
  },
  {
    src: "math9-stem-leaf-pegs.webp",
    alt: "A wooden display board with a vertical divider, tens digits fixed on the left as pegs and units digits on the right in untidy rows waiting to be ordered",
    caption: "Order the leaves and add the key",
  },
]);

const panelC = imagePanel(IMG, [
  {
    src: "math9-scatter-line.webp",
    alt: "Graph paper covered in small crosses that trend upward from left to right, with a single ruled line drawn through the middle of the cloud",
    caption: "Line of best fit: ruled, by eye, full span",
  },
  {
    src: "math9-histogram-bars.webp",
    alt: "A histogram drawn on squared paper with bars of clearly different widths and heights, the vertical axis column left blank for labelling",
    caption: "Width changes, so use density",
  },
]);

const chapterNine: Chapter = {
  number: 9,
  title: "Statistics",
  intro: `Statistics marks split three ways: **compute the measure**, **draw the diagram to convention**, and **say what the data does not allow you to conclude**.\n\nCore data is never grouped. Grouped means, quartiles, cumulative frequency and histograms are Extended.`,
  subheadings: [
    {
      title: "Averages and Measures of Spread",
      body: `### Choose the Average That Survives the Outlier

**Mean = total ÷ number of values.** **Median = middle value once ordered** (average the two middle values for an even count). **Mode = most frequent**. **Range = largest – smallest.**

For a **frequency table**, the mean is **Σ(fx) ÷ Σf** — multiply each value by its frequency, and do not just average the values column.

Extended adds **quartiles Q1 and Q3** and the **interquartile range = Q3 – Q1**, the **estimated mean for grouped data** using **midpoints × frequency**, and identifying the **modal class** (the class with the highest frequency, or the highest bar on a histogram).`,
      figure: panelA,
      groups: [
        {
          subTitle: "Comparing two data sets",
          bullets: [
            "Always compare **one measure of average and one measure of spread**, in context: 'B has a higher mean but a larger IQR, so it is better on average and less consistent.'",
            "The IQR is the fair comparison when an outlier is present, because the mean and range both move with it while the median and IQR do not.",
            "Restrictions on conclusions are a real mark: the sample may be **too small, biased, not random**, or the data may only support interpolation, **not prediction outside the range**.",
          ],
        },
      ],
    },
    {
      title: "Statistical Diagrams",
      body: `### Conventions Are the Marks

Draw and interpret **bar charts** (including **composite/stacked** and **dual/side-by-side**), **pie charts**, **pictograms**, **stem-and-leaf diagrams**, and **simple frequency distributions**.

A **stem-and-leaf must have ordered leaves and a key** — 4 | 2 meaning 42. Both requirements are separately marked.

For a **pie chart**, convert each frequency to a fraction of the total, multiply by **360°**, draw the angle with a protractor, and label the sectors. For a **pictogram**, choose a symbol that represents a stated frequency and use **whole and half symbols** only.`,
      figure: panelB,
      groups: [
        {
          subTitle: "Reading them back",
          bullets: [
            "Pictogram and bar-chart totals come from the **symbol key**, not the number of symbols counted — a common zero when the key says each symbol is 5000.",
            "From a pie chart, a sector angle of 54° out of 360° is **15%** of the total; recover the frequency by multiplying that fraction by the given total.",
            "A stem-and-leaf keeps the raw data, so the median and range can be read straight off it; a grouped frequency table cannot, which is why its mean is only an **estimate**.",
          ],
        },
      ],
    },
    {
      title: "Scatter, Cumulative Frequency and Histograms",
      body: `### Three Diagrams, Three Different Jobs

**Scatter diagrams**: mark points as small crosses, then describe the correlation as **positive, negative or zero** and say whether it is strong or weak. Draw the **line of best fit as a single ruled line by eye, extended across the full data set, with a roughly even spread of points on either side along its whole length** — it need not touch any point. Use it for interpolation and reading off values, never extrapolation.

**Cumulative frequency tables and diagrams** (Extended): add the running total, plot against the **upper boundary** of each class and join with a **smooth curve**. Estimate the **median at n/2, quartiles at n/4 and 3n/4, percentiles at np/100, and the IQR** by reading across from the vertical axis.

**Histograms** (Extended): the vertical axis is labelled **frequency density**, where **frequency density = frequency ÷ class width**.`,
      figure: panelC,
      groups: [
        {
          subTitle: "Exam traps that cost marks",
          bullets: [
            "Class boundaries, not class limits: continuous data grouped as 10–19 has upper boundary **19.5**, and cumulative frequency plots use those boundaries.",
            "On a histogram with unequal widths, drawing **frequency** instead of frequency density makes wide bars look over-represented — the mark is for dividing by the width.",
            "Correlation is not causation, and a question asking 'what can you conclude' about two variables wants the **strength and direction** stated plus a caution about outliers.",
            "A cumulative frequency curve is **never** read by going up from the x-axis first: start from the **frequency axis**, go across, then down.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_9 = chapterNine;
