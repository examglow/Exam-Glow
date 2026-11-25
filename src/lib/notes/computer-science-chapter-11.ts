import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelDatabase = imagePanel(IMG, [
  {
    src: "cs11-two-table-keys.webp",
    alt: "Two rectangular tables drawn side by side on pale card, each with a header row shaded darker, and a single curved arrow connecting one column in the left table to the matching column in the right table",
    caption: "The arrow is the foreign key reaching for the primary key",
  },
  {
    src: "cs11-join-result.webp",
    alt: "A third table appearing beneath two smaller tables, formed by matching rows, with one pair of rows highlighted in the same colour across all three tables and a couple of rows left unshaded",
    caption: "INNER JOIN keeps only the rows that match",
  },
]);

const chapterEleven: Chapter = {
  number: 11,
  title: "Databases and Structured Query Language",
  intro: `The last topic of the syllabus is the most mechanical: define the tables, name the keys, write the query. Marks are lost on spelling, missing commas and a forgotten WHERE.

Everything here can appear in the 15-mark scenario question, usually as "write an SQL statement that returns…" or "define the tables needed for…".`,
  subheadings: [
    {
      title: "11.1 Databases",
      body: `### One table from a set of requirements

**11.1.1** — a **database** is an organised collection of data held electronically so it can be searched, sorted and updated. The vocabulary is fixed: a **field** is one attribute of a record — one **column**, such as surname; a **record** is one complete set of fields for a single item — one **row**.

To define a single-table database from a storage requirement, list for each field its **name**, its **data type**, its **size**, and the **validation** that will be applied — plus which field is the primary key.

A one-table design for a school library:

| Field | Data type | Size | Validation |
|---|---|---|---|
| book_id | integer | 5 | presence, range 1 to 99999 |
| title | text | 60 | presence, length check |
| author | text | 40 | presence |
| isbn | character | 13 | format check, check digit |
| year_published | date | 8 | range check |
| on_loan | Boolean | 1 | type check |

**11.1.3 the data types you may use** — **text** for any length of characters, **character** for a fixed number of them, **Boolean** for yes/no or true/false, **integer** for whole numbers, **decimal** for numbers with a fractional part, **date** for a calendar date, **time** for a clock time, **currency** for a money amount.

Choosing them is marked on reasoning: a price is **currency**, not text, so it can be totalled; a postcode is **character**, because leading zeros must survive; yes/no is **Boolean**, so only two values are possible.

**11.1.4 purpose of a primary key** — a **primary key** **uniquely identifies each record**, cannot be empty and cannot be duplicated. It gives the database a reliable way to find, update or delete exactly one row, and it is the anchor that other tables link to.

**11.1.5 choosing one** — a suitable primary key is something **guaranteed unique and stable**: book_id, student_number, order_reference. Two rules that decide most exam answers: **avoid names**, because two pupils can be called the same; **avoid anything that changes**, because a phone number or an email can be reassigned. Sometimes several fields together form a unique **composite key** when no single field is enough.

### Two tables that relate

**11.1.2** — storing the same details again and again in one table is **duplication**, which wastes space and lets the copies disagree. The fix is to split the data into two tables and connect them.

**books** (book_id, title, author, isbn, publisher_id) and **publishers** (publisher_id, publisher_name, address). Each publisher's address is stored once, not once per book.

**11.1.6 purpose of a foreign key** — a **foreign key** is a field in one table that **points to the primary key of another table**. It **establishes the link** between the tables and is the field used in a **join**, so the rows belonging together can be read as one result.

**11.1.7 identifying one** — the foreign key is the column whose values are drawn from the other table's primary key: in books, \`publisher_id\` is the foreign key referencing publishers. A foreign key value must exist in the parent table, or be empty.

**11.1.8 joining two tables** — the join matches each child row's foreign key against the parent row's primary key and glues the two rows into one output row. A book with publisher_id 3 appears alongside the publisher whose publisher_id is 3. Any book whose publisher_id matches nothing is **left out of an inner join** — that is the detail examiners test with a "state the result" question.`,
      figure: panelDatabase,
      groups: [
        {
          subTitle: "Primary key versus foreign key",
          bullets: [
            "Primary key: unique, not null, identifies rows **in its own table**.",
            "Foreign key: copies another table's primary key, and may repeat.",
            "The foreign key is the arrow; the primary key is where it points.",
            "A link in one direction needs exactly one pair: primary key in the parent, foreign key in the child.",
          ],
        },
        {
          subTitle: "Why split into two tables",
          bullets: [
            "Removes duplicated data, so the file stays smaller.",
            "One place to update, so the data cannot become inconsistent.",
            "Adding a new publisher needs no books yet entered.",
          ],
        },
      ],
      examinerTips: [
        "When asked to define a database, write the **field list with a data type for each** and mark the primary key explicitly. Prose about tables without field details scores badly.",
        "Identify the primary key with a reason: 'student_id, because it is unique to each student and never changes'.",
        "If a scenario mentions 'each order can contain many products', that wording is the signal for **two tables**, not one.",
      ],
      commonMistakes: [
        "Naming a name, an address or an ISBN-with-repeats as the primary key when the question already offers an ID field.",
        "Saying a primary key can be blank for a new record.",
        "Confusing a foreign key with a secondary index — the foreign key is a data field, not a sorting device.",
        "Duplicating publisher details in the books table and calling it a relational design.",
      ],
      recap: [
        "Define the terms field, record, primary key and foreign key.",
        "From a given set of requirements for a sports club, define one table with its fields, data types and validations.",
        "Explain why a two-table design is better than repeating member details in every booking record.",
        "Identify the primary key and the foreign key in the books and publishers tables, and describe how they are joined.",
      ],
    },
    {
      title: "11.2 SQL",
      body: `### The pattern of a query

**11.2.1** — SQL reads almost as a sentence: **which fields, from which table, under which condition, in which order**. Every statement you are asked to write is built from that skeleton.

\`\`\`sql
SELECT title, author
FROM books
WHERE year_published >= 2020;
\`\`\`

- \`SELECT\` lists the fields to return, separated by commas; an asterisk means every field.
- \`FROM\` names the table.
- \`WHERE\` applies one or more conditions; text values are wrapped in single quotes, numbers are not.
- \`ORDER BY\` sorts the result, \`ASC\` for ascending (the default) and \`DESC\` for descending.

Conditions combine with \`AND\` (both must hold) and \`OR\` (either holds). \`AND\` binds more tightly, so brackets are used when both appear.

### Reading and writing results

**11.2.3** — know what each statement produces.

| Statement | What it does |
|---|---|
| \`SELECT name, mark FROM results WHERE mark > 30;\` | returns only the rows whose mark exceeds 30 |
| \`INSERT INTO books (book_id, title) VALUES (21, 'Dune');\` | adds one new record; unlisted fields are left empty |
| \`SELECT * FROM books ORDER BY title ASC;\` | every field, sorted A to Z |
| \`SELECT * FROM books ORDER BY year_published DESC;\` | every field, newest first |
| \`SELECT SUM(price) FROM books;\` | one value: the total of the price column |
| \`SELECT COUNT(*) FROM books;\` | one value: how many rows there are |
| \`SELECT COUNT(publisher_id) FROM books;\` | how many rows have a publisher_id entered |
| \`... WHERE on_loan = True AND year_published > 2015;\` | both conditions must be satisfied |
| \`... WHERE author = 'Asimov' OR author = 'Butler';\` | either author qualifies |

Two results to be able to explain in words: **SUM** adds a numeric column across the selected rows and returns a single number; **COUNT** returns how many rows match, and \`COUNT(*)\` counts rows while \`COUNT(field)\` counts only the rows where that field is filled.

### Joins in SQL

The two-table query, and the pattern to reproduce under exam pressure:

\`\`\`sql
SELECT books.title, publishers.publisher_name
FROM books
INNER JOIN publishers
ON books.publisher_id = publishers.publisher_id
WHERE books.year_published >= 2020
ORDER BY books.title ASC;
\`\`\`

**INNER JOIN … ON** glues the two tables together on the matching key pair, and the join **keeps only rows with a match on both sides**. That is why a book whose publisher_id has no matching publisher row disappears from the output, even though it exists in the books table.

Prefix each field with its table name whenever a field name exists in both tables. It is also what makes a multi-table answer readable to the marker.

### Correcting SQL

**11.2.2** — the errors examiners insert, and the fix for each:

| Broken | Problem | Correct |
|---|---|---|
| \`SELEC title FROM books;\` | keyword spelt wrongly | \`SELECT\` |
| \`SELECT title, author FROM books\` | nothing wrong here, unless a semicolon was asked for | end with a semicolon |
| \`SELECT * WHERE author = 'Asimov' FROM books;\` | FROM and WHERE out of order | \`FROM\` comes before \`WHERE\` |
| \`SELECT * FROM books WHERE author = Asimov;\` | text not quoted | \`'Asimov'\` |
| \`SELECT * FROM books WHERE mark > 30 ORDER DESC;\` | ORDER BY needs the field | \`ORDER BY mark DESC\` |
| \`SELECT title author FROM books;\` | missing comma between fields | \`title, author\` |
| \`INSERT INTO books VALUES (21) WHERE book_id = 21;\` | INSERT takes VALUES, not a condition | \`INSERT INTO books (book_id) VALUES (21)\` |

The order that must never be disturbed is **SELECT, FROM, WHERE, ORDER BY**. Missing single quotes around text, and a missing comma, account for most lost marks in this topic.`,
      groups: [
        {
          subTitle: "Punctuation rules that are marked",
          bullets: [
            "Text values inside single quotes; numbers bare.",
            "Fields separated by commas, with no comma after the last one.",
            "Statement ends with a semicolon.",
            "DESC and ASC come after the field name in ORDER BY.",
            "AND and OR are written between complete conditions, each with its own comparison.",
          ],
        },
      ],
      examinerTips: [
        "Copy the **exact field and table names** from the question. An answer using book_title when the field is called title is not correct, however good the syntax.",
        "For 'explain the result of this statement', give the rows it returns, the fields shown and the order — then the count if the numbers are given.",
        "When a scenario says 'list all books and the name of their publisher', that phrasing demands an INNER JOIN; a single-table SELECT cannot score it.",
        "Write the whole statement, then re-read it for quotes and commas. One missing quote mark costs the marks for the entire statement.",
      ],
      commonMistakes: [
        "Using WHERE for sorting instead of ORDER BY.",
        "Writing `ORDER BY DESC price` — the field comes first.",
        "Putting AND in place of OR for a question that says 'either'.",
        "Thinking COUNT adds values; SUM adds values and COUNT counts rows.",
        "Forgetting that an INNER JOIN drops unmatched rows, so a book with an invalid publisher_id vanishes from the answer.",
      ],
      recap: [
        "Write an SQL statement that returns the name and mark of every student scoring above 30, ordered from the highest mark down.",
        "Write a statement that adds a new record to a table of books, naming two fields.",
        "Explain what `SELECT SUM(price) FROM books WHERE on_loan = True;` returns.",
        "Write a query using INNER JOIN and ON to show each book with its publisher's name.",
        "Correct a broken SQL statement given with a missing quote, a wrong clause order and a missing comma.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_11 = chapterEleven;
