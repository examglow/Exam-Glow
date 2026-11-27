import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Information and Communication Technology (0417) 2026–2028 Syllabus Notes
 * Part 3: Chapters 15–21 (Proofing, Charts, Practical Applications - Docs, Databases, Presentations, Spreadsheets, Website Authoring)
 */
export const ICT_PART3: Chapter[] = [
  {
    number: 15,
    title: "Proofing",
    section: "15. Proofing",
    topic: "Software Proofing Tools, Manual Verification and Typographical Layout Errors",
    intro:
      "A document can be grammatically correct and spell-checked by automated software, yet still contain disastrous factual and layout errors. Cambridge examinations evaluate both software-based proofing tools and human manual verification, including detecting typographical layout flaws like widows, orphans, and split tables.",
    subheadings: [
      {
        title: "Software Proofing Tools vs. Manual Human Verification",
        body:
          "**Automated Software Proofing Tools:**\n" +
          "- **Automated Spell-Checkers:**\n" +
          "  - Compares every typed word against an internal electronic dictionary.\n" +
          "  - Flags unrecognized words with a red wavy underline, offering suggested corrections.\n" +
          "  - **Severe Limitations of Spell-Checkers:**\n" +
          "    1. **Homophones:** If a word is spelled correctly but used in the wrong context, the spell-checker will NOT flag it (e.g. typing *'their'* instead of *'there'*, *'weather'* instead of *'whether'*, or *'from'* instead of *'form'*).\n" +
          "    2. **Proper Nouns & Specialized Vocabulary:** Geographical locations, scientific terms, and people's surnames are frequently flagged as errors even when correctly spelled.\n" +
          "    3. **Language Dictionary Discrepancies:** American English vs. British English spelling differences (e.g. *color* vs *colour*, *organize* vs *organise*).\n" +
          "- **Automated Grammar Checkers:**\n" +
          "  - Highlights potential punctuation errors, sentence fragments, passive voice, and subject-verb disagreements (e.g. *'They is going'*).\n" +
          "  - Frequently misinterprets complex sentences, technical prose, and poetry.\n\n" +
          "**Manual Human Proofreading:**\n" +
          "- The meticulous human process of reading through a document to ensure overall semantic meaning, factual accuracy, numerical correctness, and stylistic consistency.\n" +
          "- **Why Human Proofreading is Indispensable:**\n" +
          "  - Checks that facts, statistics, phone numbers, and financial dates make logical sense (software cannot verify if an invoice total of $50,000 should actually be $5,000).\n" +
          "  - Checks that text flows logically and conveys the intended tone to the target audience.\n" +
          "  - Ensures that diagrams, image captions, and tables match the textual narrative.",
        examinerTips: [
          "In 4-mark or 6-mark questions on spell-checkers, always explain why spell-checkers miss errors: give a clear example of homophones (e.g. 'here' vs 'hear', 'to' vs 'too') and proper nouns not in the software dictionary.",
          "State clearly that manual verification by a human is the only way to detect factual or contextual errors.",
        ],
        commonMistakes: [
          "Assuming a spell-checker guarantees zero errors. A spell-checker only verifies if a word exists in its dictionary, not if it is the correct word in context.",
        ],
        recap: [
          "Explain two reasons why an automated spell-checker might fail to detect an error in a word-processed document.",
          "Describe why manual human proofreading is necessary even after running an automated spell-check.",
        ],
      },
      {
        title: "Typographical Layout Errors in Document Production",
        body:
          "**Common Layout and Typographical Errors Checked in Paper 2:**\n" +
          "- In Cambridge practical examinations, candidates lose marks for poor document presentation and typographical flaws:\n" +
          "  1. **Widows and Orphans:**\n" +
          "     - **Orphan:** The first line of a paragraph appearing completely alone at the very bottom of a page, with the rest of the paragraph continuing on the next page.\n" +
          "     - **Widow:** The final line of a paragraph appearing completely alone at the very top of a new page.\n" +
          "     - **Correction:** Enable 'Widow/Orphan control' in paragraph pagination settings, or insert a manual page break before the paragraph.\n" +
          "  2. **Split Tables Across Pages:**\n" +
          "     - A table that splits awkwardly across a page boundary, leaving one or two rows dangling on the next page without header labels.\n" +
          "     - **Correction:** Enable 'Repeat as header row at top of each page', adjust row heights/margins, or insert a page break to keep the entire table intact on one page.\n" +
          "  3. **Split Lists:**\n" +
          "     - A bulleted or numbered list where the introductory sentence is at the bottom of one page and the bullet points appear on the next.\n" +
          "  4. **Orphan Headings:**\n" +
          "     - A section heading sitting isolated at the bottom of a page with its corresponding body text starting on the next page.\n" +
          "     - **Correction:** Enable 'Keep with next' paragraph formatting on all heading styles.\n" +
          "  5. **Overlapping Text and Image Frames:**\n" +
          "     - Images covering body text or tables extending beyond page margins.\n" +
          "  6. **Inconsistent Line and Paragraph Spacing:**\n" +
          "     - Random blank lines, irregular paragraph spacing, or varying line heights throughout the document.\n" +
          "  7. **Blank Pages at End of Document:**\n" +
          "     - Unintended blank trailing pages caused by extra Enter keystrokes at the end of the text.",
        examinerTips: [
          "Memorize the definitions: An Orphan is at the BOTTOM of a page (abandoned); a Widow is at the TOP of a page (left alone).",
          "Before printing in Paper 2, always switch to Print Preview to check for trailing blank pages, isolated headings, and split tables.",
        ],
        commonMistakes: [
          "Confusing a widow and an orphan. Orphan = first line at bottom of page; Widow = last line at top of page.",
        ],
        recap: [
          "Define the terms 'widow' and 'orphan' in document typography.",
          "List three layout checks a candidate must perform before printing their final document in a practical exam.",
        ],
      },
    ],
  },
  {
    number: 16,
    title: "Graphs and charts",
    section: "16. Graphs and charts",
    topic: "Chart Types, Visual Representation, Axes, Scales and Data Labels",
    intro:
      "Data presented in raw numerical tables is difficult to interpret quickly. Charts and graphs transform complex datasets into visual representations that reveal trends, comparisons, and proportions. This chapter details chart selection criteria and formatting standards tested in practical examinations.",
    subheadings: [
      {
        title: "Chart Selection and Visual Representation",
        body:
          "**Selecting the Appropriate Chart Type:**\n" +
          "- Cambridge practical exams require candidates to select and generate the correct chart type based on the underlying data characteristics:\n" +
          "- **1. Bar Chart / Column Chart:**\n" +
          "  - Uses rectangular bars whose heights or lengths are proportional to the values they represent.\n" +
          "  - **Best Used For:** Comparing discrete categories of data (e.g. sales figures across 5 different branch stores, or rainfall across 12 months).\n" +
          "  - **Variants:** Comparative / Clustered Bar Charts (comparing two data series side-by-side) and Stacked Bar Charts (showing the composition of a total across categories).\n" +
          "- **2. Line Graph:**\n" +
          "  - Points plotted on a Cartesian coordinate plane connected by straight continuous line segments.\n" +
          "  - **Best Used For:** Displaying continuous data and tracking changes or trends over time (e.g. temperature change over 24 hours, stock market fluctuations over 5 years).\n" +
          "- **3. Pie Chart:**\n" +
          "  - A circular statistical graphic divided into proportional slices or sectors.\n" +
          "  - **Best Used For:** Showing the percentage breakdown or proportional composition of a whole (100%) across a small number of categories (typically 3 to 7 categories).\n" +
          "  - **Sector Pull-Out (Exploded Pie Chart):** Extracting or emphasizing one specific slice slightly away from the center to draw attention to a key finding (e.g. the market leader).\n" +
          "- **4. Scatter Plot (XY Graph):**\n" +
          "  - Displays the mathematical relationship (correlation) between two independent continuous numeric variables.",
        examinerTips: [
          "Always justify chart selection: Use a Line Graph for continuous time-series data; a Bar Chart for comparing separate discrete categories; a Pie Chart for proportions/percentages of a whole totaling 100%.",
          "Never use a pie chart if there are more than 7 categories, as the slices become too thin and illegible.",
        ],
        commonMistakes: [
          "Using a line graph for discrete data (e.g. comparing sales of apples, oranges, and bananas). Discrete categories must be shown using a bar chart, not connected lines.",
        ],
        recap: [
          "State which chart type is most suitable for: (a) showing changes in temperature over 24 hours; (b) showing market share percentages of smartphone brands.",
          "Describe what an exploded pie chart is and why a presenter would use one.",
        ],
      },
      {
        title: "Chart Formatting and Elements in Practical Exams",
        body:
          "**Mandatory Elements of a Fully Credited Chart:**\n" +
          "- In Cambridge examinations, creating a chart without complete, fully visible labeling will forfeit substantial marks. Every chart must include:\n" +
          "  1. **Meaningful Chart Title:** A clear, concise title placed above the chart describing what the data represents (e.g. *'Annual Car Sales by Region (2025–2028)'*).\n" +
          "  2. **Category Axis (X-Axis) Title:** Explicitly labeling the horizontal axis (e.g. *'Quarter'* or *'Country'*).\n" +
          "  3. **Value Axis (Y-Axis) Title with Units:** Explicitly labeling the vertical axis including measurement units (e.g. *'Revenue in Thousands of Dollars ($000)'* or *'Temperature (°C)'*).\n" +
          "  4. **Value Axis Scale & Intervals:** Setting minimum value, maximum value, and major/minor tick mark unit increments as specified in the exam paper (e.g. Minimum: 0, Maximum: 500, Major Unit: 50).\n" +
          "  5. **Data Labels:** Numeric values, percentages, or category labels displayed directly on or above individual bars, line data points, or pie slices for immediate readability without squinting at the axis.\n" +
          "  6. **Legend / Key:** Required when two or more data series are plotted on the same chart (e.g. Series 1 = Projected Sales, Series 2 = Actual Sales). If only one single data series is plotted, the legend is redundant and should be deleted to maximize chart display area.\n" +
          "  7. **Gridlines:** Subtle horizontal gridlines assisting the eye in mapping bar heights to the value axis.\n" +
          "  8. **No Truncation:** Ensure all text, category labels, and numbers are fully visible without overlapping, truncating, or wrapping awkwardly.",
        examinerTips: [
          "In Practical Papers, if a chart has only ONE data series, delete the legend! Cambridge mark schemes routinely penalize candidates who leave a redundant 'Series 1' legend on single-series charts.",
          "Ensure units of measurement (e.g. $, kg, %) are explicitly stated in the axis title.",
        ],
        commonMistakes: [
          "Forgetting to add axis titles or letting long category labels overlap on the X-axis. Rotate category labels or adjust chart width to ensure 100% clarity.",
        ],
        recap: [
          "List four essential labeling components that must be present on a fully formatted bar chart.",
          "When should a legend be included on a chart, and when should it be omitted?",
        ],
      },
    ],
  },
  {
    number: 17,
    title: "Document production",
    section: "17. Document production",
    topic: "Mail Merge, Document Assembly, Layout Integrity and Final Quality Checks",
    intro:
      "Document production integrates word processing, formatting, typography, image manipulation, and automated mass-communication via mail merge. This chapter details mail merge architecture, merge fields, conditional selection rules, and document finalization in Cambridge Paper 2.",
    subheadings: [
      {
        title: "Mail Merge Architecture and Field Insertion",
        body:
          "**What is Mail Merge?**\n" +
          "- An automated document production technique that merges a standardized **Master Document** with a structured **Data Source** to produce a batch of personalized output documents (e.g. letters, address labels, invoices, examination admission slips).\n\n" +
          "**The Core Components of Mail Merge:**\n" +
          "- **1. The Master Document:**\n" +
          "  - The template file containing fixed, unchanging body text, corporate logos, headers, footers, and placeholders called **Merge Fields**.\n" +
          "- **2. The Data Source:**\n" +
          "  - A structured file (usually a `.csv`, spreadsheet `.xlsx`, or database table) containing the individual recipient records organized into fields (e.g. `First_Name`, `Last_Name`, `Street`, `Balance_Due`).\n" +
          "- **3. The Merged Documents:**\n" +
          "  - The final output generated when the software replaces each merge field placeholder with the actual data from each record, producing individualized letters.\n\n" +
          "**Practical Mail Merge Execution (Paper 2):**\n" +
          "- **Inserting Merge Fields:**\n" +
          "  - Merge fields are inserted with precise chevron brackets: e.g. `<<Title>> <<First_Name>> <<Last_Name>>`.\n" +
          "  - **Punctuation and Spacing Rule:** Ensure proper spacing and punctuation are maintained around merge fields (e.g. leaving a single space between `<<First_Name>>` and `<<Last_Name>>`, and placing a comma after `Dear <<Title>> <<Last_Name>>,`).\n" +
          "- **Filtering and Selecting Recipient Subsets:**\n" +
          "  - Exam papers frequently require merging only a specific subset of records that meet explicit criteria (e.g. *'Select only recipients where Country is \"Canada\" AND Balance_Due is greater than 500'*).\n" +
          "  - Applied using query filter dialogs within the mail merge manager.\n" +
          "- **Sorting Merge Records:** Sorting records alphabetically by `Last_Name` or numerically by `Account_Number` before merging.\n" +
          "- **Conditional Merge Fields (IF-THEN-ELSE):**\n" +
          "  - Dynamically inserting different text depending on a field value: e.g. *IF `Balance_Due` > 0 THEN \"Please remit payment immediately.\" ELSE \"Your account is fully paid. Thank you!\"*.",
        examinerTips: [
          "In Paper 2, candidates must print BOTH: (1) A screenshot or printout of the master document showing the MERGE FIELDS (e.g. `<<First_Name>>`), and (2) The final merged letters showing real recipient data.",
          "Watch your spaces! A common mistake is forgetting the space between `<<First_Name>>` and `<<Last_Name>>`, resulting in merged letters with names like 'JohnSmith'.",
        ],
        commonMistakes: [
          "Typing chevron characters `<<` and `>>` manually on the keyboard. Merge fields must be inserted using the word processor's 'Insert Merge Field' button.",
        ],
        recap: [
          "Define the roles of the master document and the data source in a mail merge operation.",
          "Describe how a filter is applied to a data source during mail merge to select specific recipients.",
        ],
      },
      {
        title: "Document Assembly and Final Quality Checks",
        body:
          "**Integrating External Data into Documents:**\n" +
          "- Practical exams require assembling diverse media into a cohesive report:\n" +
          "  - Importing unformatted text from `.txt` or `.rtf` files into specific sections of the master layout.\n" +
          "  - Embedding database report extracts or spreadsheet tables into the document body.\n" +
          "  - Inserting, cropping, resizing, and wrapping images neatly adjacent to referenced paragraphs.\n\n" +
          "**Final Quality Inspection Checklist (Before Printing):**\n" +
          "- Before submitting or printing in Paper 2, candidates must systematically verify:\n" +
          "  1. **Consistent Styles:** Check that defined styles (`Title`, `Heading`, `Body`) have been applied consistently to every heading and paragraph without manual overrides.\n" +
          "  2. **Page and Column Balance:** Ensure the two or three columns on multi-column pages are visually balanced at the end of the document.\n" +
          "  3. **No Spacing Irregularities:** Ensure no double blank lines exist between paragraphs; vertical spacing should be controlled exclusively by paragraph styles.\n" +
          "  4. **Table Integrity:** Check that table borders are complete, all text is visible without truncation, no column data wraps awkwardly, and the table does not split across pages.\n" +
          "  5. **Header and Footer Visibility:** Check that candidate name, centre number, and candidate number appear on every single page; verify page numbers are dynamic field codes.\n" +
          "  6. **Image Alignment:** Check that images are aligned flush to the margin and paragraph text wraps cleanly with locked aspect ratios.",
        examinerTips: [
          "Always perform a full zoom-out print preview to spot layout defects, blank trailing pages, or dangling table rows before creating your final PDF.",
          "Ensure candidate details (Name, Centre Number, Candidate Number) are present on every printed page — work without candidate details cannot be credited.",
        ],
        commonMistakes: [
          "Submitting a document with an image that overflows into the page margin. Images must align flush with margins or columns.",
        ],
        recap: [
          "List five quality checks that should be completed before finalizing a word-processed report.",
          "Why must document columns be balanced at the end of a multi-column section?",
        ],
      },
    ],
  },
  {
    number: 18,
    title: "Databases",
    section: "18. Databases",
    topic: "Relational Structures, Data Types, Queries, Forms and Professional Reports",
    intro:
      "A database is an organized, structured collection of persistent data designed for rapid search, retrieval, updating, and analysis. In Cambridge IGCSE ICT Paper 2, database mastery comprises table creation, primary/foreign key relationships, validation rules, multi-criteria queries with wildcards and calculated fields, and professional reports.",
    subheadings: [
      {
        title: "Database Structures, Field Types & Relationships",
        body:
          "**Flat-File vs. Relational Databases:**\n" +
          "- **Flat-File Database:** Stores all data in a single, two-dimensional table of rows and columns (e.g. a spreadsheet or CSV). **Fatal Limitations:** Massive data redundancy (re-typing customer names and addresses for every order), data inconsistency (a customer update in one row is missed in another), and large file sizes.\n" +
          "- **Relational Database:** Organizes data into multiple specialized, interconnected tables linked together by common key fields. **Advantages:** Eliminates redundant data duplication; ensures data integrity; updates to a customer record in one table automatically reflect across all linked order records; saves storage space.\n\n" +
          "**Tables, Records, and Fields:**\n" +
          "- **Field:** A single unit of data within a record representing an attribute (e.g. `Product_Name`, `Unit_Price`). Forms a vertical column.\n" +
          "- **Record:** A complete collection of related fields representing a single entity (e.g. one specific customer or one product). Forms a horizontal row.\n" +
          "- **Table:** A collection of related records.\n\n" +
          "**Field Data Types in Database Design:**\n" +
          "  - **Text / Alphanumeric / Short Text:** Alphanumeric characters, punctuation, and numbers not used in calculations (e.g. Telephone number, Postal code, Product code).\n" +
          "  - **Number / Integer / Decimal:** Numerical values used in mathematical calculations (e.g. `Quantity_In_Stock`, `Discount_Rate`).\n" +
          "  - **Currency:** Numeric values formatted automatically with currency symbols ($, £, €) and fixed decimal places (usually 2 decimal places).\n" +
          "  - **Date / Time:** Stores dates and times formatted consistently (e.g. `DD/MM/YYYY` or `HH:MM:SS`).\n" +
          "  - **Boolean / Logical (Yes/No):** Stores binary data containing only one of two states (e.g. `In_Stock`, `Discount_Eligible`).\n\n" +
          "**Keys and Entity Relationships:**\n" +
          "- **Primary Key:** A unique field in a database table that uniquely identifies each individual record (e.g. `Student_ID`, `National_Insurance_Number`, `ISBN`). Cannot contain duplicate values or null (empty) entries.\n" +
          "- **Foreign Key:** A primary key from one table that is placed into another table to establish a relational link between them.\n" +
          "- **One-to-Many Relationship (1:M):** The most common relationship, where one record in the primary table relates to multiple records in the foreign table (e.g. One `Customer` can place many `Orders`; One `School` has many `Students`).\n" +
          "- **Referential Integrity:** A database rule ensuring that foreign key values in a child table must match a valid, existing primary key in the parent table, preventing orphaned records.",
        examinerTips: [
          "Always store telephone numbers and postal codes as TEXT/Alphanumeric, NOT numbers! Telephone numbers start with a leading zero (which numeric fields delete) and postal codes contain letters and spaces.",
          "When defining a primary key in Paper 2, state that it is a unique identifier for each record in a table.",
        ],
        commonMistakes: [
          "Setting a telephone number field to 'Number'. A phone number like 0123456789 will lose its leading zero and become 123456789.",
        ],
        recap: [
          "State two advantages of a relational database over a flat-file database.",
          "Explain the difference between a primary key and a foreign key.",
        ],
      },
      {
        title: "Queries, Search Criteria & Calculated Fields",
        body:
          "**Constructing Database Queries:**\n" +
          "- A query searches, filters, and extracts a specific subset of records from one or more tables that satisfy defined criteria.\n" +
          "- **Comparison Operators Used in Queries:**\n" +
          "  - `=` (Equal to), `<>` (Not equal to)\n" +
          "  - `>` (Greater than), `<` (Less than)\n" +
          "  - `>=` (Greater than or equal to), `<=` (Less than or equal to)\n" +
          "- **Logical Operators (AND / OR):**\n" +
          "  - **AND:** Both criteria must be true on the same record (entered on the same `Criteria` row in query design grid; narrows the search).\n" +
          "  - **OR:** Either criterion can be true (entered on separate `or` rows in query design grid; broadens the search).\n" +
          "- **Wildcard Searches (`*` and `?`):**\n" +
          "  - `*` represents any number of characters (e.g. `Like \"Sm*\"` finds Smith, Smythe, Small).\n" +
          "  - `*text*` finds records containing the string anywhere within the field (e.g. `Like \"*port*\"` finds Airport, Passport, Portable).\n" +
          "  - `?` represents a single character.\n" +
          "- **Date Criteria:** Dates must be enclosed in hashes in Microsoft Access (e.g. `>=#01/01/2026#`).\n\n" +
          "**Calculated Fields at Run-Time:**\n" +
          "- A virtual field in a query that performs a mathematical calculation on existing field values rather than storing the result statically in the table.\n" +
          "- **Syntax in Access Query Design:** `NewFieldName: [Field1] * [Field2]`\n" +
          "- *Example:* `Total_Cost: [Unit_Price] * [Quantity_Ordered] * 1.2` (calculating total price including 20% sales tax).\n" +
          "- **Formatting Calculated Fields:** Setting the property sheet of the calculated field to Currency ($) or fixed decimal places as specified in the exam paper.\n\n" +
          "**Multi-Level Sorting:**\n" +
          "- Sorting records on multiple keys in sequence: primary sort ascending on `Country`, and secondary sort descending on `Sales_Revenue`.",
        examinerTips: [
          "In calculated fields, field names must be enclosed in square brackets: `[Unit_Price] * [Quantity]`. Do not use curly braces or quotation marks.",
          "In wildcard searches, use `*` at both ends (`*word*`) if the exam specifies 'contains the word'. If it specifies 'starts with', use `word*`.",
        ],
        commonMistakes: [
          "Entering criteria on separate rows when an 'AND' condition is required. Placing criteria on separate rows performs an 'OR' search.",
        ],
        recap: [
          "Write the query criteria to find all records where Price is greater than or equal to 50 AND Country is either \"France\" or \"Germany\".",
          "Explain what a calculated field is in a database query and give an example of its syntax.",
        ],
      },
      {
        title: "Data Presentation: Professional Forms and Reports",
        body:
          "**Data Entry Forms:**\n" +
          "- A user-friendly graphical interface designed to make data entry, modification, and navigation intuitive and error-free:\n" +
          "  - Clear text box inputs with descriptive, non-technical labels.\n" +
          "  - Drop-down combo boxes and list boxes restricting choices to valid entries, preventing typographical errors.\n" +
          "  - Radio buttons and checkboxes for boolean (Yes/No) fields.\n" +
          "  - Navigation action buttons: Add New Record, Delete Record, Save, Next, Previous.\n\n" +
          "**Database Reports in Practical Exams (Paper 2):**\n" +
          "- A formatted, printable presentation of query data designed for business management.\n" +
          "- **Anatomy of a Database Report:**\n" +
          "  1. **Report Header:** Appears once at the very top of the first page (contains report title).\n" +
          "  2. **Page Header:** Appears at the top of every page (contains column headings).\n" +
          "  3. **Group Header:** Appears at the start of each grouped category (e.g. grouping records by `Department` or `Region`).\n" +
          "  4. **Detail Section:** The repeated rows displaying individual record data.\n" +
          "  5. **Group Footer:** Appears at the end of each group; displays group subtotals or record counts (e.g. `=Sum([Salary])` or `=Count([Employee_ID])`).\n" +
          "  6. **Report Footer:** Appears once at the end of the entire report; displays grand totals, averages, and statistical summaries.\n" +
          "  7. **Page Footer:** Appears at the bottom of every page; contains automated page numbering and candidate details.\n\n" +
          "**Strict Exam Formatting Requirements:**\n" +
          "- **Fit to Single Page Wide:** The report must fit across the specified width (1 page wide) in Portrait or Landscape orientation.\n" +
          "- **Zero Data Truncation:** Ensure all labels, dates, currencies, and text fields are widened so no data is truncated (e.g. seeing `###` or cut-off text loses marks).\n" +
          "- **Field Order:** Ensure fields appear in the exact left-to-right order specified in the question paper.",
        examinerTips: [
          "If a numeric or currency field displays `###` on your report, it means the column width is too narrow! Switch to Layout View and widen the box immediately.",
          "Check whether the exam paper specifies Landscape or Portrait orientation, and ensure the report fits on ONE page wide.",
        ],
        commonMistakes: [
          "Placing summary calculations in the Page Footer instead of the Report Footer. Page footers cannot compute `=Sum()`; summary functions belong in Report or Group footers.",
        ],
        recap: [
          "Describe three design features that make a data entry form user-friendly.",
          "Explain the difference between a Group Footer and a Report Footer in a database report.",
        ],
      },
    ],
  },
  {
    number: 19,
    title: "Presentations",
    section: "19. Presentations",
    topic: "Slide Master Architecture, Consistency, Animations and Audience Delivery",
    intro:
      "Multimedia presentations communicate structured messages to live audiences. In Cambridge IGCSE Paper 2, candidates must demonstrate technical command of Slide Masters, consistent visual layouts, transitions, custom animations, and presenter output formats.",
    subheadings: [
      {
        title: "Slide Master Architecture and Visual Consistency",
        body:
          "**The Role of the Slide Master:**\n" +
          "- The Slide Master is the top-level master template in the presentation hierarchy that controls the global design parameters for all slides in the deck.\n" +
          "- Any formatting applied to the Slide Master automatically ripples through and updates every individual slide in the presentation simultaneously.\n" +
          "- **Elements Configured on the Slide Master:**\n" +
          "  1. **Consistent Backgrounds:** Setting solid colors, gradients, or subtle graphics.\n" +
          "  2. **Corporate Branding:** Positioning company logos in an identical header/corner position across all slides.\n" +
          "  3. **Typography & Font Schemes:** Specifying exact font families, sizes, colors, and line spacing for slide titles and bulleted body levels.\n" +
          "  4. **Automated Footer Fields:** Placing candidate details (Name, Centre Number, Candidate Number), automated slide numbering, and dynamic date fields.\n" +
          "  5. **Bullet Formatting:** Customizing bullet glyphs or numbering styles.\n\n" +
          "**Slide Layouts and Hierarchy:**\n" +
          "- **Title Slide:** Prominent title, subtitle, author name, and date.\n" +
          "- **Content Slide:** Title heading at top with a single bulleted text frame.\n" +
          "- **Two-Column / Comparison Slide:** Splitting content into two parallel columns for text, tables, or charts.\n" +
          "- **Media Slide:** Incorporating video, audio clips, or high-resolution diagrams.",
        examinerTips: [
          "In Paper 2, NEVER format slides individually one by one. Always make global changes (logos, candidate details, line styles) directly on the SLIDE MASTER.",
          "Ensure that slide master elements (logos, decorative lines, footer text) do NOT overlap or obscure any slide title or body text on any individual slide.",
        ],
        commonMistakes: [
          "Editing slide 1 instead of entering the Slide Master view. Changes made to slide 1 do not apply to subsequent slides.",
        ],
        recap: [
          "What is the function of a Slide Master in presentation software?",
          "State three elements that should be placed on a Slide Master to maintain corporate consistency.",
        ],
      },
      {
        title: "Animations, Transitions and Audience Delivery Modes",
        body:
          "**Motion and Visual Dynamics:**\n" +
          "- **Slide Transitions:**\n" +
          "  - The visual motion effect that occurs when advancing from one slide to the next during a slideshow (e.g. Fade, Push, Wipe).\n" +
          "  - **Professional Best Practice:** Transitions should be consistent, subtle, and unobtrusive across all slides to avoid distracting the audience from the content.\n" +
          "- **Custom Object Animations:**\n" +
          "  - Motion effects applied to individual visual elements on a slide (titles, bullet points, images, charts):\n" +
          "  - **Entrance Effects:** How objects enter the slide (e.g. Appear, Fly In).\n" +
          "  - **Emphasis Effects:** Drawing attention to an element currently on screen (e.g. Pulse, Spin).\n" +
          "  - **Exit Effects:** How objects leave the screen.\n" +
          "  - **Progressive Disclosure:** Setting bullet points to appear one-by-one upon mouse click. This prevents audience members from reading ahead, keeping attention focused on the speaker's current talking point.\n\n" +
          "**Presenter Notes and Output Formats:**\n" +
          "- **Presenter / Speaker Notes:** A dedicated text frame visible only to the speaker on their private laptop screen (in Presenter View) while the audience sees only the clean slide on the main projector screen. Contains detailed talking points, statistics, and references.\n" +
          "- **Audience Handouts:** Printing multiple reduced-size slide thumbnails per page (e.g. 2, 3, or 6 slides per page) with blank lines for audience note-taking.\n" +
          "- **Full-Page Slides:** Printing each slide individually filling the full page.",
        examinerTips: [
          "Distinguish clearly between transitions (movement between different slides) and animations (movement of individual objects on a single slide).",
          "When printing in Paper 2, read the print instructions carefully: examiners often specify printing as 'Handouts with 6 slides per page' or 'Slide with presenter notes'.",
        ],
        commonMistakes: [
          "Printing 1 slide per page when the exam instructions explicitly state 'Print handouts showing 6 slides per page'. This wastes paper and loses marks.",
        ],
        recap: [
          "Explain the difference between a slide transition and an object animation.",
          "Why would a speaker use progressive disclosure for bullet points during a presentation?",
        ],
      },
    ],
  },
  {
    number: 20,
    title: "Spreadsheets",
    section: "20. Spreadsheets",
    topic: "Formulas, Advanced Lookup Functions, Data Manipulation and Display Views",
    intro:
      "Spreadsheets are powerful computational modeling grids used for financial analysis, statistical calculation, and data manipulation. In Cambridge IGCSE ICT Paper 3, spreadsheet proficiency requires absolute command of relative/absolute cell referencing, named ranges, core functions, advanced lookups (VLOOKUP, XLOOKUP), nested IF statements, conditional formatting, and formula auditing.",
    subheadings: [
      {
        title: "Cell Referencing, Formulas and Core Statistical Functions",
        body:
          "**Formulas vs. Functions:**\n" +
          "- **Formula:** A mathematical expression written by the user using cell coordinates and standard arithmetic operators (`+`, `-`, `*`, `/`, `^`): e.g. `=A1*(B1+C1)`.\n" +
          "- **Function:** A built-in, pre-programmed mathematical or statistical routine identified by a keyword and accepting arguments within parentheses: e.g. `=SUM(A1:A50)`.\n\n" +
          "**Cell Referencing Mechanics:**\n" +
          "- **1. Relative Cell Referencing (e.g. `A1`):**\n" +
          "  - When a formula is replicated (copied down a column or across a row), the cell references shift relatively to match their new position.\n" +
          "  - *Example:* If `=A1*B1` in cell `C1` is dragged down to `C2`, it automatically updates to `=A2*B2`.\n" +
          "- **2. Absolute Cell Referencing (e.g. `$A$1`):**\n" +
          "  - Using dollar signs (`$`) locks the column and/or row coordinate so it remains completely fixed and constant when replicated.\n" +
          "  - *Example:* If `=A1*$B$1` is dragged down, `A1` updates to `A2`, but `$B$1` remains permanently locked to cell `B1` (vital when multiplying prices by a single fixed VAT tax rate in cell `B1`).\n" +
          "- **3. Named Cells and Named Ranges:**\n" +
          "  - Assigning a descriptive textual name to an individual cell or range of cells (e.g. cell `B1` named `TaxRate`, range `A1:B20` named `ProductTable`).\n" +
          "  - **Advantages:** Formulas become self-explanatory (e.g. `=Price*TaxRate`); named ranges function as automatic absolute references without needing dollar signs.\n\n" +
          "**Core Mathematical and Statistical Functions:**\n" +
          "- `=SUM(range)`: Calculates the total arithmetic sum of numeric values in a range.\n" +
          "- `=AVERAGE(range)`: Calculates the arithmetic mean.\n" +
          "- `=MAX(range)` / `=MIN(range)`: Finds the highest or lowest numerical value.\n" +
          "- `=INT(number)`: Rounds a number down to the nearest integer.\n" +
          "- `=ROUND(number, num_digits)`: Rounds a numeric value to a specified number of decimal places (e.g. `=ROUND(14.786, 2)` returns `14.79`).\n" +
          "- `=COUNT(range)`: Counts the number of cells in a range that contain NUMBERS only.\n" +
          "- `=COUNTA(range)`: Counts all non-blank cells (both numbers and text).\n" +
          "- `=COUNTBLANK(range)`: Counts empty cells.\n" +
          "- `=COUNTIF(range, criteria)`: Counts cells satisfying a specific condition: e.g. `=COUNTIF(D2:D50, \">100\")` or `=COUNTIF(E2:E50, \"Pass\")`.\n" +
          "- `=SUMIF(range, criteria, [sum_range])`: Adds values in cells that satisfy a condition: e.g. `=SUMIF(A2:A50, \"North\", B2:B50)`.",
        examinerTips: [
          "Remember: `=COUNT()` counts numbers only; `=COUNTA()` counts all non-empty cells (numbers, text, symbols). Using `COUNT` on a column of names returns 0!",
          "Always lock external reference cells with absolute referencing (`$`) or named ranges when replicating formulas down multiple rows.",
        ],
        commonMistakes: [
          "Using `=SUM(A1+A2+A3)` instead of `=SUM(A1:A3)` or `=A1+A2+A3`. Mixing `SUM` and `+` inside parentheses is redundant and poor practice.",
        ],
        recap: [
          "Explain the difference between relative and absolute cell referencing with a clear example.",
          "State the difference between the functions COUNT, COUNTA, and COUNTIF.",
        ],
      },
      {
        title: "Lookup Functions, Logical Functions & Error Diagnosis",
        body:
          "**Lookup Functions in Paper 3:**\n" +
          "- **1. VLOOKUP (Vertical Lookup):**\n" +
          "  - Searches vertically down the first column of an external table array and retrieves a corresponding value from the same row in a specified column index.\n" +
          "  - **Syntax:** `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`\n" +
          "  - **Crucial Rule:** The fourth parameter `range_lookup` should almost always be set to `FALSE` (or `0`) in IGCSE exams to force an **EXACT match**. If omitted or set to `TRUE`, the function performs an approximate match and requires the lookup table to be sorted in ascending order.\n" +
          "  - *Example:* `=VLOOKUP(A2, $D$2:$F$50, 3, FALSE)`\n" +
          "- **2. HLOOKUP (Horizontal Lookup):**\n" +
          "  - Searches horizontally across the first row of a table array and retrieves a value from a specified row index.\n" +
          "  - **Syntax:** `=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])`\n" +
          "- **3. XLOOKUP:**\n" +
          "  - Modern, flexible lookup function capable of searching both vertically and horizontally without column index numbers, defaulting to exact matches.\n" +
          "  - **Syntax:** `=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])`\n\n" +
          "**Logical Functions (IF & Nested IF):**\n" +
          "- **Single IF Statement:**\n" +
          "  - **Syntax:** `=IF(logical_test, value_if_true, value_if_false)`\n" +
          "  - *Example:* `=IF(B2>=50, \"Pass\", \"Fail\")`\n" +
          "- **Nested IF Statements:**\n" +
          "  - Embedding one IF function inside another to evaluate three or more conditions.\n" +
          "  - *Example:* Awarding grades: `=IF(B2>=80, \"Distinction\", IF(B2>=60, \"Merit\", IF(B2>=40, \"Pass\", \"Fail\")))`\n" +
          "  - Note: Ensure every opening parenthesis has a matching closing parenthesis at the end.\n\n" +
          "**Diagnosing Common Spreadsheet Error Values:**\n" +
          "- `#####`: The column is too narrow to display the numerical/date value, or a date is negative. **Fix:** Widen the column.\n" +
          "- `#DIV/0!`: The formula is attempting to divide by zero or by an empty cell.\n" +
          "- `#N/A`: 'Value Not Available' — a lookup function cannot find the lookup value (common when `FALSE` is used and the code does not exist in the table).\n" +
          "- `#NAME?`: Unrecognized text in formula — usually a misspelled function name (e.g. `=VLOKUP`) or unquoted text.\n" +
          "- `#REF!`: 'Invalid Cell Reference' — a cell referenced in the formula has been deleted.",
        examinerTips: [
          "In VLOOKUP formulas, ALWAYS include `FALSE` as the final parameter for exact matching, and ALWAYS lock the table array with dollar signs: `=VLOOKUP(A2, $E$2:$G$20, 2, FALSE)`.",
          "When nesting IF functions, count the opening parentheses to ensure an equal number of closing parentheses are placed at the end.",
        ],
        commonMistakes: [
          "Leaving out the fourth parameter `FALSE` in VLOOKUP, causing incorrect values to be returned when the lookup table is not sorted alphabetically.",
        ],
        recap: [
          "Explain the purpose of each parameter in `=VLOOKUP(B2, $H$4:$K$25, 3, FALSE)`.",
          "State what causes the following spreadsheet errors: (a) `#####`; (b) `#DIV/0!`; (c) `#NAME?`.",
        ],
      },
      {
        title: "Data Manipulation, Formatting & Formula Auditing",
        body:
          "**Data Manipulation Operations:**\n" +
          "- **Sorting Data:** Sorting spreadsheet tables on single or multiple columns in ascending (A to Z, 0 to 9) or descending order. **Critical Rule:** Always highlight the entire table before sorting to prevent rows from detaching from their corresponding data.\n" +
          "- **Filtering Data:** Applying auto-filters to isolate subsets of data meeting specific criteria (e.g. show only employees in 'Sales' with salaries over $40,000).\n\n" +
          "**Cell Formatting Requirements:**\n" +
          "- **Numeric Formatting:** Formatting numbers as Currency (with specified currency symbol £/$/€ and exact decimal places), Percentages (%), or Fixed Decimals.\n" +
          "- **Text Wrapping:** Enabling 'Wrap Text' on long column headers so text wraps across multiple lines inside a cell without being cut off.\n" +
          "- **Gridlines and Borders:** Enabling printable gridlines; applying thick outer borders and thin inner borders.\n" +
          "- **Conditional Formatting:** Automatically changing the visual appearance of a cell (e.g. red fill with dark red text) if its value satisfies a condition (e.g. `< 0` or `\"Overdue\"`).\n\n" +
          "**Formula Auditing & Practical Examination Printouts:**\n" +
          "- In Cambridge Paper 3, candidates are required to produce **TWO distinct printouts** of their spreadsheet:\n" +
          "  1. **Printout 1: Values View:**\n" +
          "     - Shows the calculated values and results.\n" +
          "     - Must fit on a single page wide; all data, labels, and currency formatting must be fully visible without truncation.\n" +
          "  2. **Printout 2: Formulae View:**\n" +
          "     - Displays the actual underlying formulas and functions typed into the cells (toggled using keyboard shortcut `Ctrl + ~` or *Formulas > Show Formulas*).\n" +
          "     - **Mandatory Requirements:** Row and Column headings (Row numbers 1, 2, 3... and Column letters A, B, C...) **must be visible**; gridlines **must be displayed**; all columns must be widened so **every formula is fully visible in its entirety without truncation**.",
        examinerTips: [
          "On the Formula View printout, you MUST ensure Row and Column headings (A, B, C... 1, 2, 3...) and Gridlines are checked in Page Setup. Forgetting these costs automatic marks.",
          "Ensure no formula is truncated! Widen every column before printing formulas so the examiner can read the entire formula.",
        ],
        commonMistakes: [
          "Printing formulas with truncated ends (e.g. seeing `=VLOOKUP(A2,$B$2:$...`). Always double-click column boundary dividers to expand all columns fully.",
        ],
        recap: [
          "How do you display formulas instead of values in spreadsheet software?",
          "State three mandatory requirements for a Formula View printout in Cambridge Paper 3.",
        ],
      },
    ],
  },
  {
    number: 21,
    title: "Website authoring",
    section: "21. Website authoring",
    topic: "Web Architecture, HTML Structure, CSS Stylesheets and Multimedia Integration",
    intro:
      "Website authoring combines structured markup and presentation styling to deliver accessible web pages across browsers. In Cambridge IGCSE ICT Paper 3, website authoring tests the three-layer web architecture, HTML head/body structuring, table layouts, hyperlinks/bookmarks, and Cascading Style Sheets (CSS).",
    subheadings: [
      {
        title: "The Three Web Layers & Basic HTML Structure",
        body:
          "**The Three-Layer Web Architecture:**\n" +
          "  1. **Content Layer (HTML):** Defines the structural skeleton, text content, tables, and multimedia objects embedded in the web page using Hypertext Markup Language (`.html`).\n" +
          "  2. **Presentation Layer (CSS):** Defines the visual appearance, color palettes, fonts, margins, borders, and layout styling using Cascading Style Sheets (`.css`).\n" +
          "  3. **Behavior Layer (JavaScript):** Adds dynamic client-side interactivity, form validation, animations, and responsive reactions to user events.\n" +
          "- **Separation of Concerns:** Keeping content (HTML) and presentation (CSS) strictly separated allows developers to redesign the entire appearance of thousands of web pages by editing a single external stylesheet.\n\n" +
          "**Anatomy of an HTML Document:**\n" +
          "- Every compliant HTML5 web page consists of two fundamental sections inside the root `<html>` tag:\n" +
          "  - **1. The `<head>` Section:**\n" +
          "    - Contains metadata and configuration instructions for the browser and search engines; **not rendered visually** on the main web canvas:\n" +
          "    - `<title>Page Title</title>`: Displays on the browser tab.\n" +
          "    - `<meta charset=\"UTF-8\">`: Defines the character encoding standard.\n" +
          "    - `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`: Configures responsive display across mobile devices.\n" +
          "    - `<meta name=\"keywords\" content=\"...\">` / `<meta name=\"description\" content=\"...\">`: Search Engine Optimization (SEO).\n" +
          "    - `<meta name=\"author\" content=\"...\">`: Author metadata.\n" +
          "    - `<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">`: Attaches an external CSS stylesheet.\n" +
          "    - `<base target=\"_blank\">`: Sets the default target window for all hyperlinks on the page.\n" +
          "  - **2. The `<body>` Section:**\n" +
          "    - Contains all visible content displayed in the browser viewport: headings (`<h1>` to `<h6>`), paragraphs (`<p>`), tables, images, and audio/video objects.",
        examinerTips: [
          "In Paper 3, always place metatags, page titles, and external stylesheet links inside the `<head>` section, NEVER inside the `<body>`.",
          "Remember the three layers of web design: Content (HTML), Presentation (CSS), and Behavior (JavaScript).",
        ],
        commonMistakes: [
          "Placing visible content like `<h1>` or `<table>` inside the `<head>` section.",
        ],
        recap: [
          "Name and describe the three layers of web design.",
          "State three elements that belong exclusively in the <head> section of an HTML document.",
        ],
      },
      {
        title: "HTML Content: Tables, Hyperlinks & Multimedia",
        body:
          "**Table Construction in HTML:**\n" +
          "- Tables are widely used to structure and align content blocks on web pages:\n" +
          "- `<table> ... </table>`: Encloses the table structure.\n" +
          "- `<tr> ... </tr>`: Defines a table row.\n" +
          "- `<th> ... </th>`: Defines a table header cell (bold, centered text by default).\n" +
          "- `<td> ... </td>`: Defines a standard table data cell.\n" +
          "- **Cell Spanning Attributes:**\n" +
          "  - `colspan=\"2\"`: Merges cells horizontally across two or more columns.\n" +
          "  - `rowspan=\"3\"`: Merges cells vertically down three or more rows.\n" +
          "- **Table Dimensions:** Width specified in pixels (`width: 600px;` - fixed) or percentage (`width: 100%;` - fluid/responsive).\n\n" +
          "**Hyperlinks and Bookmarks:**\n" +
          "- **Hyperlinks (`<a>` tag):**\n" +
          "  - External Link: `<a href=\"https://www.example.com\">Visit Site</a>`\n" +
          "  - Relative Local Link: `<a href=\"contact.html\">Contact Us</a>`\n" +
          "  - Email Link: `<a href=\"mailto:info@school.org?subject=Inquiry\">Email Us</a>`\n" +
          "- **Target Windows (`target=\"...\"`):**\n" +
          "  - `target=\"_blank\"`: Opens the destination page in a **new browser tab or window**.\n" +
          "  - `target=\"_self\"`: Opens in the same frame/window (default).\n" +
          "- **Bookmarks / Named Anchors:**\n" +
          "  - Linking to a specific location within the same web page:\n" +
          "  - Create the target anchor: `<h2 id=\"top\">Top of Page</h2>`\n" +
          "  - Link to the anchor: `<a href=\"#top\">Back to Top</a>`\n\n" +
          "**Embedding Media Objects:**\n" +
          "- **Images:** `<img src=\"banner.jpg\" alt=\"School Banner\" width=\"800\" height=\"200\">`\n" +
          "  - **The `alt` attribute:** Mandatory alternative text displayed if the image fails to load and read aloud by screen readers for visually impaired users.\n" +
          "- **Video:** `<video controls autoplay loop><source src=\"movie.mp4\" type=\"video/mp4\">Your browser does not support HTML5 video.</video>`",
        examinerTips: [
          "The `alt` attribute on `<img>` tags is mandatory in Paper 3 mark schemes! Always write descriptive alternative text: `alt=\"Company Logo\"`.",
          "Remember that relative file paths (e.g. `images/logo.png`) must be used for all local files, NEVER absolute drive paths (e.g. `C:/Users/...`).",
        ],
        commonMistakes: [
          "Using backslashes `\\` in HTML file paths. HTML requires forward slashes `/` (e.g. `images/photo.jpg`).",
        ],
        recap: [
          "Write the HTML code to create a hyperlink that opens \"page2.html\" in a new browser tab.",
          "Explain the purpose of the `colspan` attribute in an HTML table.",
        ],
      },
      {
        title: "Cascading Style Sheets (CSS) Mastery",
        body:
          "**CSS Types and Specificity Hierarchy:**\n" +
          "  1. **External Stylesheet:** Stored in a separate `.css` file and attached via `<link>` in the `<head>` of HTML pages. Highest reusability; controls global website styling.\n" +
          "  2. **Internal / Embedded CSS:** Placed inside `<style> ... </style>` tags within the `<head>` section of an individual HTML document.\n" +
          "  3. **Inline Styles:** Applied directly to a specific HTML element using the `style` attribute: e.g. `<h1 style=\"color: red;\">`.\n" +
          "- **The Cascade Hierarchy:** If conflicting rules exist, **Inline styles override Internal styles, which override External styles** (the closest rule to the element takes priority).\n\n" +
          "**CSS Syntax: Selectors, Properties & Values:**\n" +
          "```css\n" +
          "/* Selector { Property: Value; } */\n" +
          "h1 {\n" +
          "  color: #FF0000;\n" +
          "  font-family: Arial, Helvetica, sans-serif;\n" +
          "  font-size: 24pt;\n" +
          "  text-align: center;\n" +
          "}\n" +
          "```\n\n" +
          "**Key CSS Properties Tested in Paper 3:**\n" +
          "- **Font Hierarchy (`font-family`):** Specifying fallback font choices separated by commas: `font-family: \"Times New Roman\", Georgia, serif;` (quotes required around multi-word font names; generic family at end).\n" +
          "- **Hexadecimal Colors (`#RRGGBB`):** 6-digit hex code representing Red, Green, Blue components from `00` (zero intensity) to `FF` (maximum intensity 255):\n" +
          "  - Pure Red: `#FF0000`; Pure Green: `#00FF00`; Pure Blue: `#0000FF`\n" +
          "  - White: `#FFFFFF`; Black: `#000000`\n" +
          "- **Background Properties:**\n" +
          "  - `background-color: #F0F0F0;`\n" +
          "  - `background-image: url('wallpaper.png');`\n" +
          "  - `background-repeat: no-repeat;` (or `repeat-x`, `repeat-y`)\n" +
          "  - `background-position: top right;`\n" +
          "- **Table Borders and Collapsing:**\n" +
          "  - `border: 1px solid #000000;`\n" +
          "  - `border-collapse: collapse;`: Collapses separate adjacent cell borders into a single clean border line.\n" +
          "  - `padding: 10px;`: Sets internal spacing between cell content and cell borders.\n" +
          "- **Classes vs. Tag Selectors:**\n" +
          "  - Tag selector formats all instances of that HTML tag: `p { color: blue; }`\n" +
          "  - Class selector formats only elements assigned that class: `.highlight { color: yellow; }` applied as `<p class=\"highlight\">`.",
        examinerTips: [
          "Always put quotation marks around font names containing spaces (e.g. `\"Trebuchet MS\"`, Arial, sans-serif) and end the list with a generic font family (`serif` or `sans-serif`).",
          "Remember hexadecimal color format: `#RRGGBB`. When asked for a background color with 50% green and no red or blue, calculate the hex values accordingly.",
        ],
        commonMistakes: [
          "Forgetting semicolons `;` at the end of CSS property declarations, which invalidates all subsequent CSS rules in the stylesheet.",
        ],
        recap: [
          "Explain the difference between a class selector and a tag selector in CSS.",
          "Write the CSS code to collapse table borders and set cell padding to 8 pixels.",
        ],
      },
    ],
  },
];
