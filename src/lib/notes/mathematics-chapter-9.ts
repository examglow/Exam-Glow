import type { Chapter } from "./types";

const chapterNine: Chapter = {
  number: 9,
  title: "Statistics",
  intro: `Statistics is about **collecting**, **displaying** and **interpreting** data. The examiner splits the marks three ways: computing a measure (an average or a spread), drawing a diagram to convention, and saying what the data does **not** allow you to conclude.\n\nCore work uses raw lists and simple tables; grouped data, quartiles and histograms push into Extended territory, but the habit of ordering data first never changes.`,
  subheadings: [
    {
      title: "Discrete and Continuous Data",
      body: `**Discrete data** can only take specific, separate values, such as the number of goals scored or shoe sizes. **Continuous data** can take any value in a range, limited only by the precision of the measurement, such as height, temperature or time. Deciding which type you have determines which diagram is appropriate and how the class boundaries work.`,
      groups: [
        {
          subTitle: "Telling the Two Apart",
          bullets: [
            "**Discrete data:** counted, not measured; the values come in steps, so there are gaps between them (number of children, goals, badges, shoes).",
            "**Continuous data:** measured on a scale; any value in the interval is possible (height, mass, time, temperature), so no two values are truly separated.",
            "**Why the gap matters:** the answer decides the diagram — a bar chart with gaps for discrete data, a histogram with touching bars for grouped continuous data.",
            "**Boundaries follow type:** continuous classes like 10 ≤ h < 20 share a boundary cleanly; discrete classes like 10–19 have an upper class boundary of 19.5.",
            "**Qualitative (categorical) data** is discrete in effect: it describes a label (favourite colour, sport) and suits pie charts, pictograms and mode, never a mean.",
            "**Rounding hides continuity:** a height recorded as 172 cm is really somewhere in the interval 171.5–172.5, which is why grouped continuous data uses boundaries.",
            "**Test yourself with the question 'can it be halved forever?':** goals cannot, time can — that single test settles the type.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Calling money 'continuous' because it feels like a quantity — coins and notes come in steps, so an amount of money is discrete.",
            "Drawing a histogram with gaps between the bars for continuous data; the bars must touch because the boundaries are shared.",
            "Writing the class boundary of 10–19 as 19 instead of 19.5 when the data is discrete values counted up to 19.",
          ],
        },
      ],
    },
    {
      title: "Mean, Median, Mode",
      body: `The three **averages** each summarise a data set with a single value. The **mode** is the most frequent value, the **median** is the middle value once the data is ordered, and the **mean** is the total divided by how many values there are. Choosing the right one depends on the data type and on whether outliers pull the answer about.`,
      groups: [
        {
          subTitle: "Computing Each One",
          bullets: [
            "**Mode:** the value that occurs most often; there can be more than one (bimodal) or none at all if every value is unique.",
            "**Median:** order the data first, then take the middle value; for an even count n, average the two middle values at positions n/2 and n/2 + 1.",
            "**Position formula:** the median of n values sits at position (n + 1) ÷ 2, so find that position after ordering — never before.",
            "**Mean:** add every value and divide by the count; use it when the data is fairly symmetric and has no dominant outlier.",
            "**Outlier sense check:** one extreme value drags the mean but leaves the median almost untouched, which is why the median suits skewed data.",
            "**Categorical data:** only the mode exists for it — there is no 'middle colour' ordering and no total to divide.",
          ],
        },
        {
          subTitle: "When to Use Which",
          bullets: [
            "**Categorical data:** mode only, because labels cannot be added or ranked meaningfully.",
            "**Skewed distribution or outliers:** median, because it is resistant to extreme values.",
            "**Symmetric data:** mean, because it uses every value and is the one needed for further calculation work.",
            "**Selling a claim:** a manufacturer quotes whichever average flatters the product — a classic comparison question is spotting which average was used and why.",
            "**Stating the choice earns the mark:** in a comparison answer, name the average you are using, not just the number.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Finding the median of unordered data. Always order first — the middle of the raw list is meaningless.",
            "Forgetting the even-count rule: with 8 values the median is the average of the 4th and 5th, not one of them.",
            "Giving the frequency instead of the value: the mode of the data is the data value that repeats, not how many times it repeats.",
          ],
        },
      ],
    },
    {
      title: "Calculations with the Mean",
      body: `The mean links three quantities: **total = mean × count**. Rearranging that single relationship solves every reverse question, from finding a missing value to updating a mean after a new value joins the set. Treat it as a formula, not a coincidence of one calculation.`,
      groups: [
        {
          subTitle: "Working Backwards",
          bullets: [
            "**Total = mean × count:** if the mean of 5 values is 14, the total is 70, whatever the individual values are.",
            "**Missing value:** subtract the known values from the total; the remainder is the one the question hides.",
            "**Adding a value:** new mean = (old total + new value) ÷ (count + 1); the new count is what students forget.",
            "**Removing a value:** new total = old total − removed value, new count = old count − 1, then divide.",
            "**Combined groups:** total = mean₁ × n₁ + mean₂ × n₂, then divide by n₁ + n₂; never average the two means directly.",
            "**Check by re-averaging:** after finding the missing value, recompute the mean and confirm it matches the one given.",
            "**Same logic for frequency tables:** Σfx must equal mean × Σf, so a missing frequency can be found the same way.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Averaging two means directly. A class mean of 60 for 20 pupils and 70 for 10 pupils gives (1200 + 700) ÷ 30 ≈ 63.3, not 65.",
            "Using the old count after adding a value — the new person is in the new total and the new count.",
            "Rounding the mean too early in a multi-step question; keep exact fractions until the final line.",
          ],
        },
      ],
    },
    {
      title: "Range",
      body: `The **range = largest value − smallest value**. It is a measure of **spread**, not of centre, so it never tells you what a typical value is. A larger range means the data is more spread out, and because it uses only the two extreme values, a single outlier can inflate it dramatically.`,
      groups: [
        {
          subTitle: "Using It Properly",
          bullets: [
            "**Range = max − min:** order the data and take the difference of the extremes; everything in between is ignored.",
            "**Spread, not centre:** a range of 40 says nothing about the mean — quote an average and the range together in any comparison.",
            "**Consistency:** a smaller range means values cluster closer together, so the outcome is more consistent or predictable.",
            "**Outlier sensitivity:** one extreme value stretches the range while the middle of the data barely moves — the reason the IQR exists.",
            "**Units:** the range carries the data's units (cm, kg, seconds) and can never be negative.",
            "**Median–range pairing:** in a quick comparison, 'higher median, smaller range' is the classic full-mark sentence.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Quoting the largest and smallest values as 'the range' — the range is their difference, a single number.",
            "Saying a bigger range means the data is bigger on average; the mean could be identical with very different ranges.",
            "Comparing two sets with the range alone and never mentioning an average, which loses the comparison mark.",
          ],
        },
      ],
    },
    {
      title: "Quartiles and Interquartile Range",
      body: `The **lower quartile Q₁** is the median of the lower half of the data and the **upper quartile Q₃** is the median of the upper half. The **interquartile range = Q₃ − Q₁** measures the spread of the middle 50% of values. Because it ignores the bottom quarter and the top quarter, it is **resistant to outliers** in a way the plain range never is.`,
      groups: [
        {
          subTitle: "Finding Them",
          bullets: [
            "**Order first:** quartiles only make sense in an ordered list, so sort the data before anything else.",
            "**Q₁:** find the median of the values below the median; **Q₃**: median of the values above it.",
            "**Median first:** split the data into two halves around the median; when n is odd, most conventions leave the median out of both halves.",
            "**IQR = Q₃ − Q₁:** subtract, never 'add the quartiles' or quote them as a pair.",
            "**Reading from a list:** the position of Q₁ is roughly n ÷ 4 and of Q₃ roughly 3n ÷ 4; your syllabus convention decides exact rounding.",
            "**From a cumulative frequency curve:** read across from n/4 and 3n/4 on the vertical axis, then subtract the two x-values you land on.",
          ],
        },
        {
          subTitle: "Why the IQR Beats the Range",
          bullets: [
            "**Outlier resistance:** the extreme 25% on each side is discarded, so one wild value cannot inflate the IQR.",
            "**Middle 50%:** the IQR spans the central half of the data, which is exactly where the typical values live.",
            "**Comparison standard:** when one data set has an outlier, compare IQRs rather than ranges or the spread conclusion will be wrong.",
            "**Box plots** display the five-number summary (min, Q₁, median, Q₃, max), with the IQR as the box length.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Calculating Q₃ − Q₁ as (max − min) ÷ 2; the quartiles are medians of halves, not fractions of the range.",
            "Including the median in both halves when n is odd, which shifts both quartiles by one position.",
            "Leaving the answer as 'Q₁ = 12, Q₃ = 20' when the question asked for the interquartile range — it wants the single number 8.",
          ],
        },
      ],
    },
    {
      title: "Averages from Tables",
      body: `Tables compress data, so the averages come from **frequency-weighted** working. For a frequency table, **mean = Σ(x × f) ÷ Σf**; for grouped data, use the **midpoint** of each class in place of x. The **modal class** is the class with the highest frequency and the **median class** is the one containing the middle value.`,
      groups: [
        {
          subTitle: "Frequency Tables",
          bullets: [
            "**Add an fx column:** multiply each value by its frequency, add the column, and divide by Σf — never average the x column alone.",
            "**Median from a table:** find the position (Σf + 1) ÷ 2 and run a **cumulative frequency** column until you reach it; the value in that row is the median.",
            "**Modal value:** the x with the largest frequency, read straight off the table.",
            "**Total check:** Σf must equal the number of data values, so an fx column that does not fit the count signals an arithmetic slip.",
            "**Estimate language:** a grouped mean uses midpoints, so the answer is always an **estimate** — the word is a mark.",
          ],
        },
        {
          subTitle: "Grouped Frequency Tables",
          bullets: [
            "**Midpoints:** the midpoint of 0 ≤ h < 10 is 5; of 40 ≤ h < 50 is 45 — write the midpoint column before any multiplication.",
            "**Estimated mean = Σ(m × f) ÷ Σf**, where m is each class midpoint; the true mean could differ because values within a class are not all at the midpoint.",
            "**Modal class:** the class with the highest frequency; if two tie, both are modal and that must be stated.",
            "**Median class:** the class whose cumulative frequency first reaches or passes Σf ÷ 2; state the class, not a value.",
            "**Class width:** upper boundary − lower boundary, needed for frequency density when the same table feeds a histogram.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Averaging the class midpoints directly instead of weighting by frequency — the tall classes must count more.",
            "Writing the median as a single number from grouped data; only the class can be identified, because the raw values were lost.",
            "Using the class's lower boundary as its midpoint, which drags every grouped mean down.",
          ],
        },
      ],
    },
    {
      title: "Using Calculators to Find Averages",
      body: `A scientific calculator computes the mean, median, quartiles and **standard deviation** from an entered data list. The skill is clerical as much as mathematical: enter the data correctly in **statistical table mode**, then call the right result. Know your own calculator's keys before the exam, not during it.`,
      groups: [
        {
          subTitle: "The Routine",
          bullets: [
            "**Table/statistics mode:** enter data as a list, or as value–frequency pairs when working from a table; check the count n the calculator reports before trusting anything else.",
            "**Clearing previous data:** statistics memory persists between questions, so clear the list before starting or the n will be wrong.",
            "**One-variable results:** mean x̄, median, Q₁, Q₃ and the sample standard deviation are all in the same results menu.",
            "**Frequency column:** in table mode, toggle the frequency option on; without it, entering (3, 7) as a pair silently stores the wrong data.",
            "**Written working:** exam papers still expect to see the method — write mean = Σfx ÷ Σf and the numbers, so a calculator slip does not zero the whole question.",
            "**Standard deviation on the display:** if σ shows a tiny value from a stale list, the data was never cleared.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Rounding the calculator's mean to two decimal places when the question wants three significant figures — read the instruction's exact wording.",
            "Typing frequencies as data values, which double-counts and inflates n.",
            "Assuming every calculator shares the same key layout; practise on the model you will actually bring.",
          ],
        },
      ],
    },
    {
      title: "Comparing Data Sets",
      body: `A comparison needs **two things said in context**: a measure of **average** (mean or median) for the centre, and a measure of **spread** (range or IQR) for consistency. A higher mean with a higher range means **better on average but less reliable**. Numbers alone are not a comparison — the words linking them are.`,
      groups: [
        {
          subTitle: "The Structure of a Full-Mark Answer",
          bullets: [
            "**Average first:** state which one you are using, quote both sets' values, and say which is higher in context ('Class B scored more on average').",
            "**Spread second:** quote range or IQR for both, and translate: smaller spread means more consistent, larger spread means more variable.",
            "**Link the two:** 'A has a higher mean but a larger range, so A is better on average though less consistent' is the sentence examiners look for.",
            "**Outlier check:** if one set has an outlier, switch to median and IQR for the comparison and say why.",
            "**Reference the data:** every claim must carry the numbers — 'better' with no value earns nothing.",
            "**Limit the conclusion:** small or biased samples, or a difference tiny relative to the spread, weaken any claim that one set is genuinely better.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Comparing only the means and never mentioning spread — the consistency mark is the one being tested.",
            "Writing 'B is better because 24.1 > 23.8' with no context; say better **at what**.",
            "Claiming one set 'wins' from a mean difference far smaller than either range — the distributions overlap heavily.",
          ],
        },
      ],
    },
    {
      title: "Stem and Leaf Diagrams",
      body: `A **stem-and-leaf diagram** orders data by splitting each value into a **stem** (the tens digit) and a **leaf** (the units digit). It shows the shape of a distribution while keeping every raw value, so the median, mode and range can be read straight off it. A **key** is compulsory, e.g. '3 | 7 means 37'.`,
      groups: [
        {
          subTitle: "Drawing One",
          bullets: [
            "**Stems:** the tens digits, written once in a vertical column in ascending order, including empty stems between the extremes.",
            "**Leaves:** the units digits, one per value, placed on the row of its stem — and always in ascending order along the row.",
            "**Key:** give it every time, such as '2 | 4 means 24'; without a key the diagram is ambiguous and loses the mark.",
            "**Back-to-back:** two sets share one stem column with one set's leaves going left and the other's right — a side-by-side comparison in one diagram.",
            "**Count check:** the total number of leaves must equal n; a missing leaf is the classic slip.",
            "**Rows align:** keep leaves in single vertical columns so gaps and clusters are visible.",
          ],
        },
        {
          subTitle: "Reading One",
          bullets: [
            "**Rebuild the values:** stem 4 with leaves 1, 5, 8 means 41, 45, 48; each leaf is a raw data point, so nothing is lost.",
            "**Median:** count n leaves, find the middle position (or average the two middle values) working across the rows in order.",
            "**Mode:** the leaf value that repeats most within a row, read back together with its stem.",
            "**Range:** highest (stem in the last row) minus lowest (first leaf of the first row).",
            "**Comparison from back-to-back:** comment on the average and spread of each set, using the shared stems as the reference.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Leaves not ordered within their row — the ordering mark is lost even if every value is present.",
            "Omitting the key, or writing it the wrong way round ('7 | 3 means 37' when the stem is written first).",
            "Losing a value: a leaf like 0 must still appear (stem 3, leaf 0 is the value 30), and stems with no values are sometimes needed for completeness.",
          ],
        },
      ],
    },
    {
      title: "Tally Charts and Frequency Tables",
      body: `A **tally chart** records data as it is collected, using tally marks grouped in **fives** so they can be counted at a glance. The **frequency table** is its finished form: data value, tally, frequency. Two derived columns matter later — **relative frequency** (frequency ÷ total) and **cumulative frequency** (running total).`,
      groups: [
        {
          subTitle: "Building and Using Them",
          bullets: [
            "**Tally in fives:** four vertical strokes and a diagonal cross through them makes 5; a raw count of ungrouped strokes is where counting errors breed.",
            "**Three columns:** value, tally, frequency — the tally is crossed out or totalled once collection stops, and frequency is the number.",
            "**Relative frequency = frequency ÷ total:** it behaves like an experimental probability and lets samples of different sizes be compared.",
            "**Relative frequencies sum to 1:** a quick check that no category was missed.",
            "**Cumulative frequency:** add each frequency to the running total as you go down; the final cumulative value must equal Σf.",
            "**From cumulative to median:** the row where the running total first reaches (n + 1) ÷ 2 holds the median.",
            "**Grouping destroys detail:** once tallied into classes, the raw values are gone, which is why grouped means are estimates.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Counting a group of five tally marks as four, or counting the diagonal as a separate mark.",
            "Cumulative column that reuses the frequency instead of adding — the last entry must be the grand total.",
            "Dividing frequency by the number of categories instead of the total frequency when finding relative frequency.",
          ],
        },
      ],
    },
    {
      title: "Bar Charts and Pictograms",
      body: `A **bar chart** uses bars of **equal width** whose height is the frequency, with **gaps** between bars for discrete data. A **pictogram** uses a symbol to stand for a fixed number of items, stated in a **key**. **Comparative bar charts** place two sets' bars side by side for a direct visual comparison.`,
      groups: [
        {
          subTitle: "Bar Charts",
          bullets: [
            "**Equal width:** all bars the same width, because the eye reads area; a widened bar exaggerates its category.",
            "**Height = frequency:** the vertical axis must start at 0 and be labelled, or the chart misleads.",
            "**Gaps for discrete data:** the gaps say the categories are separate; a histogram's touching bars mean the opposite.",
            "**Comparative (dual) bar charts:** paired bars side by side, one per data set, with a legend identifying which is which.",
            "**Composite (stacked) bar charts:** segments stack within one bar, useful for totals with a breakdown; read segment heights off the axis, not by eye.",
            "**Vertical axis tricks:** a truncated axis that starts at 20 makes small differences look huge — a reading question may ask you to spot exactly that.",
          ],
        },
        {
          subTitle: "Pictograms",
          bullets: [
            "**Key is compulsory:** 'each symbol represents 5000' — the total comes from the key, never from counting symbols.",
            "**Part symbols:** half a symbol is half the key value; a quarter symbol a quarter, and any other fraction drawn to scale.",
            "**Awkward keys:** if the key value does not divide a frequency, the diagram needs part symbols — a badly chosen key is a design flaw examiners highlight.",
            "**Alignment:** symbols in neat rows and columns, because an untidy pictogram cannot be read.",
            "**Totals:** multiply symbols by the key value and add the parts; this is where the 5000-type zero slips in.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Counting pictogram symbols and treating that as the frequency when the key says each one is worth 5000.",
            "Reading a part-symbol as one item (a half-crowd symbol ≠ 1) instead of half the key value.",
            "Drawing bars of different widths, or leaving the gaps out for discrete data, in a 'draw a bar chart' question.",
          ],
        },
      ],
    },
    {
      title: "Pie Charts",
      body: `A **pie chart** shows categorical data as proportions of a circle. Each sector's angle is **(frequency ÷ total) × 360°**, drawn with a protractor from a starting radius. The sectors must total exactly **360°**, and the chart suits proportions rather than exact values.`,
      groups: [
        {
          subTitle: "Constructing One",
          bullets: [
            "**Angle = (frequency ÷ total) × 360°:** compute every angle before drawing, as a table of category, frequency, angle.",
            "**Angles sum to 360°:** check the column's total; a 359° chart means a rounding slip in one sector.",
            "**Draw with a protractor:** mark each angle from the same starting radius, working round in order.",
            "**Label the sectors:** with the category name or a key; an unlabelled pie chart cannot be interpreted.",
            "**Percentages instead:** × 100 rather than × 360 gives each sector's percentage of the total.",
          ],
        },
        {
          subTitle: "Reading One Back",
          bullets: [
            "**Frequency from angle:** frequency = (angle ÷ 360) × total, so a 54° sector is 15% of the data.",
            "**Total needed:** the angle alone gives only a fraction; you need the total frequency to recover actual counts.",
            "**Comparing sectors:** twice the angle means twice the frequency — the proportions, not the absolute sizes, carry the meaning.",
            "**Multiple pie charts:** a bigger-looking sector in a second pie may be a smaller share if that pie's total is bigger; compare fractions, not drawn sizes.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Measuring the last sector instead of calculating it — it is 360° minus the others, drawn to close the circle exactly.",
            "Mixing up the fraction of the circle with the fraction of a single category when comparing two sectors.",
            "Forgetting that a pie chart needs the total frequency somewhere on or beside it to yield actual values.",
          ],
        },
      ],
    },
    {
      title: "Reading and Interpreting Statistical Diagrams",
      body: `Reading a diagram means taking values off its **scales** carefully, including the axis start value and the step size. For histograms, the reading rule is **frequency density = frequency ÷ class width**; never confuse frequency with frequency density. Interpretation then asks what the diagram shows, and what it does not.`,
      groups: [
        {
          subTitle: "Reading Accurately",
          bullets: [
            "**Read the scales first:** check the axis start (does it begin at 0?) and the divisions before quoting any value.",
            "**Truncated axes:** a bar chart starting at 40 exaggerates differences; noting this is often the whole point of the question.",
            "**Bar heights vs totals:** in a composite bar, a segment's size is its own height, not the bar's top.",
            "**Stem-and-leaf and tables preserve raw data**, so exact medians and ranges are available; grouped diagrams only allow estimates.",
            "**Interpolate the axis:** when a value falls between gridlines, judge the fraction across the small division rather than snapping to the nearest line.",
          ],
        },
        {
          subTitle: "Histograms and Frequency Density",
          bullets: [
            "**Frequency density = frequency ÷ class width:** the vertical axis of a histogram, so **frequency = density × width**, the area of the bar.",
            "**Unequal widths:** comparing bar heights directly over-represents wide classes; only areas compare fairly.",
            "**Equal widths:** density is proportional to frequency, so heights can be compared — this is the one case where height reading is safe.",
            "**Touching bars:** no gaps, because the classes share boundaries on a continuous scale.",
            "**Estimating counts in a sub-range:** area of the part-bar gives the frequency within a portion of a class.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Reading frequency off a histogram's vertical axis; that axis is frequency density, and you must multiply by the class width.",
            "Using class limits (e.g. 10 and 19) instead of boundaries (9.5 and 19.5) when widths feed the density.",
            "Quoting a read-off value without checking where the axis starts, especially on a comparison question.",
          ],
        },
      ],
    },
    {
      title: "Comparing Statistical Diagrams",
      body: `When a question puts two diagrams side by side, it wants a structured comparison, not an impression. Comment on **an average** — what is typical in each — and on **the spread** — how consistent each is. Every claim should reference specific values taken from the diagrams.`,
      groups: [
        {
          subTitle: "The Method",
          bullets: [
            "**Extract first:** read an average from each diagram (a mean from a table, a median from a stem-and-leaf or cumulative frequency curve) and write both values down before comparing.",
            "**Extract a spread:** range, IQR or visible spread, one from each diagram, again with numbers.",
            "**Average sentence:** 'the median of A is 34 against 29 for B, so A is typically higher' — type, values, direction, context.",
            "**Spread sentence:** 'A's IQR of 8 against B's 15 makes B more varied', linking the number to the word consistent or spread.",
            "**Reference values:** quoting 'about 30 and 29' is weaker than the exact figures; the marks sit on precise reads.",
            "**Conclude with caution:** note small samples, missing data, or averaging differences (mean vs median) that make the comparison unreliable.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Describing what each diagram looks like separately without ever saying which set is higher or more consistent.",
            "Comparing a mean from one diagram with a median from the other — use the same measure on both.",
            "Vague comparatives ('B is a bit bigger') with no values drawn from the diagrams.",
          ],
        },
      ],
    },
    {
      title: "Scatter Graphs and Correlation",
      body: `A **scatter graph** plots pairs of values as points, one variable on each axis. **Correlation** describes the relationship: **positive** (both rise together), **negative** (one rises as the other falls) or **zero** (no pattern). The strength is judged by how close the points sit to a straight line.`,
      groups: [
        {
          subTitle: "Describing Correlation",
          bullets: [
            "**Positive correlation:** as the x-variable increases, the y-variable increases too; the cloud drifts up to the right.",
            "**Negative correlation:** as x increases, y decreases; the cloud drifts down to the right.",
            "**No correlation:** the points show no directional pattern; the variables are not linearly related.",
            "**Strong vs weak:** strong means points hug an imaginary line tightly, weak means a loose cloud — always state both direction **and** strength.",
            "**Correlation ≠ causation:** a link between two variables does not prove one causes the other; a third factor may drive both.",
            "**Plotting:** use small crosses for points so exact positions survive; a dot smudges.",
            "**Outliers:** a point far off the trend can be named; mention it rather than letting it silently distort your line.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Saying 'the graph goes up so temperature causes sales' — correlation never proves causation.",
            "Forgetting to state the strength; 'positive correlation' alone is half the description.",
            "Judging correlation from two or three points; with so few, any pattern is meaningless.",
          ],
        },
      ],
    },
    {
      title: "Lines of Best Fit",
      body: `A **line of best fit** is a straight line through the middle of a scatter graph, with roughly equal numbers of points on each side. It is used to **predict** values: **interpolation** inside the data range is reliable, **extrapolation** beyond it is not. The line always passes through the **mean point (x̄, ȳ)**.`,
      groups: [
        {
          subTitle: "Drawing It",
          bullets: [
            "**Single ruled line, by eye:** one straight line through the cloud, roughly balancing points above and below along its whole length.",
            "**Full data span:** extend the line across the whole range of the data, not just the middle of the cloud.",
            "**It need not touch points:** forcing it through the first and last points is wrong when they are outliers.",
            "**Through the mean point:** the line must pass through (x̄, ȳ), a useful anchor when placing it.",
            "**Steady hand, ruler:** an unruled or wobbly line loses the drawing mark; use a sharp pencil and a ruler.",
          ],
        },
        {
          subTitle: "Using It",
          bullets: [
            "**Interpolation:** reading a prediction between the smallest and largest data values — reliable because the trend is supported by data on both sides.",
            "**Extrapolation:** reading outside the data range — unreliable, because the trend may not continue and the answer should be treated with caution.",
            "**Read along then up:** from the x-value on the axis, vertically to the line, then across to the y-axis; do the reverse to predict x from y.",
            "**State the reliability:** a question asking 'is this prediction sensible?' wants the interpolation/extrapolation distinction named.",
            "**Context limits:** even interpolation assumes nothing else changed; say 'based on this data' when giving the prediction.",
          ],
        },
        {
          subTitle: "Exam traps",
          bullets: [
            "Joining the first and last points with a ruler and calling it a line of best fit; the line follows the trend, not the extremes.",
            "Extrapolating confidently to a far-off value without flagging it as unreliable.",
            "Drawing a curve through the points — the exam asks for a straight line of best fit unless it says otherwise.",
          ],
        },
      ],
    },
  ],
};

export const MATHEMATICS_CHAPTER_9 = chapterNine;
