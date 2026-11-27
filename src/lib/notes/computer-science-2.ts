import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Computer Science (0478) 2026–2028 Syllabus Notes
 * Part 2: Chapters 6–10
 * - Chapter 6: Automated and Emerging Technologies
 * - Chapter 7: Algorithm Design and Problem-Solving
 * - Chapter 8: Programming
 * - Chapter 9: Databases
 * - Chapter 10: Boolean Logic
 */
export const COMPUTER_SCIENCE_PART2: Chapter[] = [
  {
    number: 6,
    title: "Automated and Emerging Technologies",
    section: "Paper 1: Computer Systems",
    topic: "Automated Systems, Industrial Robotics, and Artificial Intelligence",
    intro:
      "Automated and emerging technologies are reshaping industry, transportation, healthcare, and daily life. This chapter examines automated control feedback loops, sensors and actuators, industrial robotics (characteristics, end-effectors, economic impacts), and artificial intelligence (narrow vs general AI, machine learning training methods, and ethical implications).",
    subheadings: [
      {
        title: "Automated Systems and Feedback Control Loops",
        body:
          "**1. What is an Automated System?**\n" +
          "A hardware and software combination designed to operate independently without continuous direct human intervention, using sensors, microprocessors, and actuators to monitor and control processes.\n\n" +
          "**2. Closed-Loop Feedback Control Systems:**\n" +
          "- In a closed-loop system, output variables are continuously monitored and fed back to adjust control inputs, maintaining desired parameter thresholds.\n" +
          "- **The Standard Control Loop Execution Cycle:**\n" +
          "  1. Sensors continuously measure physical analogue variables (e.g. ambient temperature in an automated greenhouse).\n" +
          "  2. An **Analogue-to-Digital Converter (ADC)** converts analogue electrical voltages into binary digital data.\n" +
          "  3. The digital values are transmitted to the **microprocessor**.\n" +
          "  4. The microprocessor compares incoming sensor data against **pre-set programmed threshold values** stored in memory:\n" +
          "     - If measured temperature is below threshold: microprocessor sends a digital signal to an **actuator** (via DAC if required) to open heating valves.\n" +
          "     - If measured temperature is above threshold: microprocessor signals actuator to close heating valves and open motorized roof ventilation windows.\n" +
          "  5. The loop repeats continuously in a real-time cycle.\n\n" +
          "**3. Advantages and Disadvantages of Automated Systems:**\n" +
          "- *Advantages:* Unbroken 24/7/365 operation without fatigue; rapid microsecond response times; eliminates human error; operates safely in hazardous environments (nuclear reactors, chemical processing); highly consistent process quality.\n" +
          "- *Disadvantages:* High initial capital installation and maintenance costs; automated system failure or sensor drift can cause catastrophic industrial disasters; vulnerability to cyber attacks/malware; displacement of human manual labor.",
        examinerTips: [
          "Always write the complete control sequence in order: Sensor measures -> ADC converts -> Microprocessor compares to threshold -> Decision made -> Actuator triggered -> Loop repeats.",
          "State clearly that the sensor DOES NOT decide or activate anything; the microprocessor does the computation and commands the actuator."
        ],
        commonMistakes: [
          "Claiming that a sensor opens a valve or turns on a heater; actuators perform physical movement, commanded by the microprocessor.",
          "Omitting the ADC when describing analogue sensors connected to digital microprocessors."
        ],
        recap: [
          "Automated systems operate independently using sensors, microprocessors, and actuators.",
          "Closed-loop feedback continuously measures variables, compares to thresholds, and commands actuators.",
          "Benefits: continuous operation, fast response, consistency, safety in hazards.",
          "Drawbacks: high capital cost, software failure risk, worker displacement."
        ]
      },
      {
        title: "Industrial Robotics",
        body:
          "**1. What is a Robot?**\n" +
          "A programmable mechanical device capable of carrying out a complex series of physical actions autonomously or semi-autonomously.\n\n" +
          "**2. The Three Defining Characteristics of a Robot:**\n" +
          "1. **Electrical / Electronic Components:** Microprocessors, printed circuit boards, sensors, and power supplies.\n" +
          "2. **Mechanical Structure:** Physical framework consisting of links, joints (rotary or linear), and gears giving physical degrees of freedom.\n" +
          "3. **Programmable Controller:** Software instructions stored in memory dictating precise mechanical movements and sensor responses.\n\n" +
          "**3. End-Effectors and Industrial Applications:**\n" +
          "- An **end-effector** is the specialized tool, gripper, or instrument attached to the end of a robotic manipulator arm to interact with its environment.\n" +
          "- *Examples of End-Effectors:* Pneumatic grippers, suction cups, laser cutting heads, arc welding torches, paint spray nozzles, surgical scalpels.\n" +
          "- *Industrial Uses:* Automotive manufacturing (welding, painting car bodies), automated logistics warehouses (sorting packages), electronic circuit board surface-mount assembly, hazardous bomb disposal, space exploration rovers.\n\n" +
          "**4. Economic and Societal Impacts:**\n" +
          "- **Benefits to Industry:** Tremendous productivity gains, sub-millimeter precision, zero fatigue, reduced workplace accidents.\n" +
          "- **Impacts on Workforce:** Loss of low-skilled manufacturing assembly jobs, necessity for workforce retraining into robotic maintenance, engineering, and software programming.",
        examinerTips: [
          "Memorize the three defining characteristics of a robot: electrical components, mechanical structure, and a programmable controller.",
          "Define 'end-effector': the physical tool or gripper attached to the wrist of a robotic arm to perform a task."
        ],
        commonMistakes: [
          "Confusing an automated system (e.g. a central heating system with no physical movement) with a robot (which possesses a physical mechanical moving structure).",
          "Believing robots have human-like appearances (humanoids); the overwhelming majority of industrial robots are stationary articulated arms."
        ],
        recap: [
          "Robots have 3 characteristics: electrical components, mechanical structure, and a programmable controller.",
          "End-effectors are specialized tools attached to robotic arms (welders, grippers, sprayers).",
          "Robotics increases manufacturing speed, accuracy, and safety, but causes blue-collar job displacement."
        ]
      },
      {
        title: "Artificial Intelligence and Machine Learning",
        body:
          "**1. What is Artificial Intelligence (AI)?**\n" +
          "The branch of computer science dedicated to engineering computer systems capable of simulating human cognitive capabilities, such as problem-solving, pattern recognition, learning from experience, language comprehension, and logical reasoning.\n\n" +
          "**2. Categories of AI:**\n" +
          "- **Narrow AI (Weak AI):** AI systems engineered and trained to excel at a single specific, bounded task (e.g. facial recognition, chess engines, autonomous driving lane detection, voice assistants like Siri/Alexa). All modern existing AI is Narrow AI.\n" +
          "- **General AI (Strong AI / AGI):** Hypothetical future AI possessing human-equivalent or superior intellectual capability across all cognitive domains, able to generalize knowledge and self-improve autonomously.\n\n" +
          "**3. Machine Learning (ML):**\n" +
          "A subset of AI where computer algorithms automatically improve their performance at a task through statistical data exposure (**training**) without being explicitly hardcoded with rules.\n" +
          "- **Supervised Learning:** The algorithm is trained on a massive **labelled dataset** where both inputs and correct target outputs are provided (e.g. thousands of images labelled 'cat' or 'dog'); algorithm adjusts internal neural weights to minimize classification error.\n" +
          "- **Unsupervised Learning:** The algorithm is given unlabelled raw data and discovers hidden inherent patterns, anomalies, or cluster groupings on its own (e.g. customer market segmentation, fraud detection).\n" +
          "- **Reinforcement Learning:** An autonomous agent learns optimal decision policies through trial-and-error interaction with a dynamic environment, receiving numerical **rewards** for successful actions and **penalties** for errors (e.g. AlphaGo mastering board games).\n\n" +
          "**4. Ethical and Societal Considerations of AI:**\n" +
          "- **Algorithmic Bias:** If training datasets contain historical human prejudices or unrepresentative demographic data, the AI replicates and amplifies systemic discrimination in hiring, policing, or loan approvals.\n" +
          "- **Autonomous Accountability & The 'Black Box' Problem:** Deep neural networks make decisions through billions of mathematical parameters that human engineers cannot interpret or explain; creates liability dilemmas in autonomous vehicle fatalities.\n" +
          "- **Deepfakes & Misinformation:** AI generation of hyper-realistic fraudulent video and audio impersonations undermines democratic trust.\n" +
          "- **Intellectual Property & Copyright:** AI models trained on copyrighted human artwork and text without attribution or compensation.",
        examinerTips: [
          "Distinguish clearly between Narrow AI (handles one specific task, e.g. chess) and General AI (human-level cross-domain intelligence).",
          "Contrast supervised learning (labelled training data) with unsupervised learning (unlabelled data pattern discovery)."
        ],
        commonMistakes: [
          "Assuming AI is 'thinking' or conscious; modern AI is statistical pattern recognition and mathematical matrix optimization.",
          "Confusing Machine Learning with standard procedural programming; ML algorithms learn weights from data rather than following static hardcoded rules."
        ],
        recap: [
          "AI simulates human cognitive functions (learning, reasoning, pattern recognition).",
          "Narrow AI specializes in one task; General AI is hypothetical human-equivalent intelligence.",
          "Machine learning includes Supervised (labelled data), Unsupervised (pattern clustering), and Reinforcement learning (reward/penalty).",
          "Ethical issues: algorithmic bias, explainability, deepfakes, copyright, and employment disruption."
        ]
      }
    ]
  },
  {
    number: 7,
    title: "Algorithm Design and Problem-Solving",
    section: "Paper 2: Algorithms, Programming and Logic",
    topic: "Program Development Life Cycle, Decomposition, Structure Diagrams, Pseudocode, and Trace Tables",
    intro:
      "Problem-solving is the systematic process of designing computational algorithms to solve real-world problems. This chapter explores the Program Development Life Cycle (PDLC), computational thinking (decomposition, abstraction), structure diagrams, pseudocode syntax conventions, standard algorithm patterns, dry-run trace tables, and test data strategies.",
    subheadings: [
      {
        title: "The Program Development Life Cycle and Computational Thinking",
        body:
          "**1. The Program Development Life Cycle (PDLC):**\n" +
          "A structured five-phase framework for software engineering:\n" +
          "1. **Analysis:** Deconstructing the client's problem; collecting requirements via interviews and observation; creating data flow diagrams and determining input/output specifications.\n" +
          "2. **Design:** Designing algorithms, user interfaces (mockups), data structures, structure diagrams, pseudocode, and flowcharts.\n" +
          "3. **Coding / Implementation:** Translating designed algorithms into high-level programming language code; modular unit testing.\n" +
          "4. **Testing:** Executing the software with rigorous test data (Normal, Boundary, Erroneous) to identify and eradicate syntax, runtime, and logic errors.\n" +
          "5. **Evaluation / Maintenance:** Verifying software against original client specifications; releasing bug fixes and updates.\n\n" +
          "**2. Core Pillars of Computational Thinking:**\n" +
          "- **Decomposition:** Breaking down a complex problem or system into smaller, more manageable sub-problems that can be analyzed, designed, and programmed independently.\n" +
          "- **Abstraction:** Filtering out unnecessary details and focusing exclusively on the essential characteristics required to solve the problem (e.g. the London Underground map shows station connections, ignoring real geographical curves).\n" +
          "- **Pattern Recognition:** Identifying common recurring patterns or structures across different problems to reuse proven algorithmic solutions.\n" +
          "- **Algorithm Design:** Developing a step-by-step sequence of unambiguous instructions to solve the problem.\n\n" +
          "**3. Structure Diagrams:**\n" +
          "- A top-down hierarchical graphical representation of a decomposed system.\n" +
          "- The main problem sits at the top root, subdivided into component subsystems beneath, linked by lines showing hierarchical decomposition.",
        examinerTips: [
          "List the five stages of the PDLC in order: Analysis -> Design -> Coding -> Testing -> Maintenance.",
          "Define decomposition and abstraction with precision: decomposition is breaking a complex problem into smaller parts; abstraction is removing non-essential details."
        ],
        commonMistakes: [
          "Confusing abstraction (removing irrelevant detail) with decomposition (breaking into sub-components).",
          "Believing testing happens only after a project is completely finished; testing occurs iteratively throughout implementation."
        ],
        recap: [
          "PDLC stages: Analysis, Design, Coding, Testing, and Evaluation/Maintenance.",
          "Computational thinking: Decomposition, Abstraction, Pattern Recognition, and Algorithm Design.",
          "Structure diagrams represent top-down problem decomposition visually."
        ]
      },
      {
        title: "Pseudocode, Flowcharts and Standard Algorithms",
        body:
          "**1. Standard Cambridge IGCSE Pseudocode Constructs:**\n" +
          "- **Variables and Constants:**\n" +
          "  - `DECLARE Age : INTEGER`\n" +
          "  - `CONSTANT MaxScore = 100`\n" +
          "  - `Score <- 85` (assignment uses left-pointing arrow `<-`)\n" +
          "- **Input and Output:**\n" +
          "  - `INPUT UserInput`\n" +
          "  - `OUTPUT \"Hello \", UserName`\n" +
          "- **Conditional Selection:**\n" +
          "  - `IF Condition THEN ... ELSE ... ENDIF`\n" +
          "  - `CASE OF Variable ... 1: ... 2: ... OTHERWISE: ... ENDCASE`\n" +
          "- **Iteration (Loops):**\n" +
          "  - **Count-Controlled:** `FOR Counter <- 1 TO 10 ... NEXT Counter` (used when number of iterations is known in advance).\n" +
          "  - **Pre-Condition Loop:** `WHILE Condition DO ... ENDWHILE` (condition evaluated BEFORE body; body may execute 0 times).\n" +
          "  - **Post-Condition Loop:** `REPEAT ... UNTIL Condition` (condition evaluated AFTER body; executes at least ONCE).\n\n" +
          "**2. Standard Algorithm Implementations:**\n" +
          "- **Totalling and Counting:**\n" +
          "  ```\n" +
          "  Total <- 0\n" +
          "  Count <- 0\n" +
          "  FOR i <- 1 TO 10\n" +
          "    INPUT Num\n" +
          "    Total <- Total + Num\n" +
          "    Count <- Count + 1\n" +
          "  NEXT i\n" +
          "  Average <- Total / Count\n" +
          "  ```\n" +
          "- **Finding Maximum and Minimum:**\n" +
          "  ```\n" +
          "  INPUT FirstNum\n" +
          "  Max <- FirstNum\n" +
          "  Min <- FirstNum\n" +
          "  FOR i <- 2 TO 10\n" +
          "    INPUT Num\n" +
          "    IF Num > Max THEN Max <- Num ENDIF\n" +
          "    IF Num < Min THEN Min <- Num ENDIF\n" +
          "  NEXT i\n" +
          "  ```\n" +
          "- **Linear Search:**\n" +
          "  Iterating sequentially through an array from index 1 to $N$, comparing each element against a search target.\n" +
          "- **Bubble Sort:**\n" +
          "  Multiple passes through an array, comparing adjacent pairs and swapping them if out of order, repeating until a full pass completes with zero swaps.",
        examinerTips: [
          "Use the official Cambridge assignment operator '<-' in pseudocode; never write '=' for assignment in pseudocode.",
          "Know when to select loop types: FOR loop for known iterations; WHILE loop when loop might not execute at all; REPEAT-UNTIL when it must execute at least once."
        ],
        commonMistakes: [
          "Writing 'FOR i = 1 TO 10' instead of 'FOR i <- 1 TO 10'.",
          "Initializing Min to 0 when searching through lists that may contain negative or large numbers; initialize Max and Min to the first input value."
        ],
        recap: [
          "Pseudocode uses DECLARE, '<-' for assignment, IF-THEN-ELSE, CASE-OF.",
          "Loops: FOR-TO-NEXT (count-controlled), WHILE-DO (pre-condition), REPEAT-UNTIL (post-condition).",
          "Standard algorithms: Totalling, Counting, Average, Min/Max tracking, Linear Search, Bubble Sort."
        ]
      },
      {
        title: "Trace Tables and Verification Testing",
        body:
          "**1. Dry-Running and Trace Tables:**\n" +
          "- A trace table is a structured matrix used to manually simulate and track algorithm execution step by step without a computer.\n" +
          "- **Rules for Completing Trace Tables:**\n" +
          "  - Columns represent individual variables, loop counters, conditions, and output displays.\n" +
          "  - Each row corresponds to a state change during execution.\n" +
          "  - **Record a new variable value ONLY when it changes**; do not re-write unchanged values across rows.\n" +
          "  - Output must be recorded exactly as printed in the dedicated output column.\n\n" +
          "**2. Test Data Categories:**\n" +
          "To thoroughly test an algorithm with a valid range (e.g. percentages $0\\text{–}100$):\n" +
          "- **Normal Test Data:** Typical, valid values within acceptable boundaries (e.g. $45, 78$). Should be accepted and processed correctly.\n" +
          "- **Boundary / Extreme Test Data:** Values at the exact outer limits of valid ranges (e.g. $0$ and $100$). Tests whether conditional operators ($<$ vs $\\le$) are coded correctly.\n" +
          "- **Erroneous / Abnormal Test Data:** Values outside the valid range or of the incorrect data type (e.g. $-5, 105, \\text{\"cat\"}$). Should be rejected with an informative error message.\n\n" +
          "**3. Validation vs Verification:**\n" +
          "- **Validation:** Automated software checks ensuring entered data is sensible, reasonable, and conforms to format rules before processing (checks include: Range check, Type check, Length check, Presence check, Format check, Check digit). **Validation does NOT verify that data is true/accurate.**\n" +
          "- **Verification:** Checking that data entered matches the original source document without copying errors (methods include: **Double Entry** where two users type data and system checks match, and **Visual Check** where user proofreads typed data against source document).",
        examinerTips: [
          "Distinguish clearly between validation (checks if data is reasonable/valid) and verification (checks if data matches original source).",
          "When completing trace tables, do NOT overwrite or re-write values on rows where that variable did not change."
        ],
        commonMistakes: [
          "Calling a spell-checker or validation check 'verification'; validation checks format/reasonableness, NOT factual accuracy.",
          "Failing to test boundary values when designing a test plan."
        ],
        recap: [
          "Trace tables track variable values line by line during algorithm dry runs.",
          "Test data types: Normal (typical valid), Boundary (extreme limits), Erroneous (invalid).",
          "Validation checks reasonableness (range, type, length, presence); Verification checks copy accuracy (double entry, visual check)."
        ]
      }
    ]
  },
  {
    number: 8,
    title: "Programming",
    section: "Paper 2: Algorithms, Programming and Logic",
    topic: "Data Types, Arrays, String Manipulation, File Handling, and Modular Programming",
    intro:
      "Programming is the implementation of algorithms into executable code using a high-level programming language (Python, VB.NET, or Java). This chapter covers primitive data types, 1D and 2D arrays, string slicing and manipulation, file reading and writing operations, and modular programming with procedures, functions, parameters, and variable scope.",
    subheadings: [
      {
        title: "Primitive Data Types and Variables",
        body:
          "**1. Core Primitive Data Types:**\n" +
          "- **INTEGER:** Whole positive or negative numbers without fractional/decimal components (e.g. `-15, 0, 42`).\n" +
          "- **REAL / FLOAT:** Numbers containing fractional decimal points (e.g. `3.14159, -0.75`).\n" +
          "- **CHAR:** A single alphanumeric character, symbol, or punctuation mark enclosed in quotes (e.g. `'A', '$', '9'`).\n" +
          "- **STRING:** A sequence of zero or more characters enclosed in quotation marks (e.g. `\"Cambridge IGCSE\"`).\n" +
          "- **BOOLEAN:** A logical data type that can only store one of two states: `TRUE` or `FALSE`.\n\n" +
          "**2. Mathematical Operators in Programming:**\n" +
          "- Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`).\n" +
          "- **DIV (Integer Division):** Returns the integer quotient of division, discarding the remainder (e.g. `14 DIV 4 = 3`).\n" +
          "- **MOD (Modulo):** Returns the integer remainder after division (e.g. `14 MOD 4 = 2`). Essential for checking even/odd numbers (`Num MOD 2 = 0`).",
        examinerTips: [
          "Use DIV for integer quotient and MOD for integer remainder in algorithm questions.",
          "Choose appropriate data types: phone numbers and postal codes must be stored as STRING, never INTEGER, to preserve leading zeros."
        ],
        commonMistakes: [
          "Storing telephone numbers as integers; integer variables strip leading zeros (e.g. 01234 becomes 1234).",
          "Confusing Real numbers (decimal) with Integers (whole numbers)."
        ],
        recap: [
          "Primitive data types: Integer, Real, Char, String, Boolean.",
          "DIV gives integer quotient; MOD gives integer remainder.",
          "Store numbers with leading zeros (phone numbers) as strings."
        ]
      },
      {
        title: "One-Dimensional and Two-Dimensional Arrays",
        body:
          "**1. What is an Array?**\n" +
          "A static, contiguous, indexed data structure that stores a collection of elements of the **same data type** under a single identifier.\n\n" +
          "**2. One-Dimensional (1D) Arrays:**\n" +
          "- **Declaration in Pseudocode:** `DECLARE StudentNames : ARRAY[1:30] OF STRING`\n" +
          "- **Accessing Elements:** Elements are referenced by an integer index: `StudentNames[1] <- \"Alice\"`.\n" +
          "- **Traversing a 1D Array:**\n" +
          "  ```\n" +
          "  FOR i <- 1 TO 30\n" +
          "    OUTPUT StudentNames[i]\n" +
          "  NEXT i\n" +
          "  ```\n\n" +
          "**3. Two-Dimensional (2D) Arrays:**\n" +
          "- A matrix organized into horizontal rows and vertical columns.\n" +
          "- **Declaration:** `DECLARE SeatingPlan : ARRAY[1:10, 1:5] OF STRING` (10 rows, 5 columns).\n" +
          "- **Accessing Elements:** `SeatingPlan[Row, Col] <- \"Bob\"`.\n" +
          "- **Nested Loops for 2D Array Traversal:**\n" +
          "  ```\n" +
          "  FOR Row <- 1 TO 10\n" +
          "    FOR Col <- 1 TO 5\n" +
          "      OUTPUT SeatingPlan[Row, Col]\n" +
          "    NEXT Col\n" +
          "  NEXT Row\n" +
          "  ```",
        examinerTips: [
          "Remember that array indices in Cambridge pseudocode start at 1 by default: ARRAY[1:N].",
          "Use nested FOR loops to traverse 2D arrays: outer loop for rows, inner loop for columns."
        ],
        commonMistakes: [
          "Storing different data types in the same array; arrays can only hold elements of the identical data type.",
          "Array index out of bounds error: attempting to access index 0 or index N+1."
        ],
        recap: [
          "Arrays store collections of the same data type under one identifier.",
          "1D arrays use a single index [i]; 2D arrays use two indices [row, col].",
          "Traverse 1D arrays with one loop; traverse 2D arrays with nested loops."
        ]
      },
      {
        title: "Procedures, Functions and File Handling",
        body:
          "**1. Subroutines: Procedures vs Functions:**\n" +
          "- A subroutine is a named, self-contained block of code designed to perform a specific task, promoting code reusability and modularity.\n" +
          "- **Procedures:** A subroutine that executes a sequence of instructions but **DOES NOT return a value** to the calling code.\n" +
          "  - Called as a standalone statement: `CALL PrintHeader()`.\n" +
          "- **Functions:** A subroutine that executes code and **RETURNS A SINGLE VALUE** of a specified data type to the calling program.\n" +
          "  - Called as part of an expression: `Area <- CalculateArea(Length, Width)`.\n\n" +
          "**2. Parameters and Variable Scope:**\n" +
          "- **Parameters:** Variables declared in the subroutine header that receive values (**arguments**) passed into it when called.\n" +
          "  - *Pass by Value (BYVAL):* A local copy of the argument is passed; modifications inside the subroutine do not alter the caller's original variable.\n" +
          "  - *Pass by Reference (BYREF):* The memory address of the argument is passed; changes made inside the subroutine directly modify the caller's variable.\n" +
          "- **Local Variables:** Declared inside a subroutine; accessible only within that subroutine; destroyed when the subroutine terminates.\n" +
          "- **Global Variables:** Declared in the main program; accessible by any subroutine across the entire program.\n\n" +
          "**3. File Handling Operations:**\n" +
          "- Programs must read from and write to external text files for permanent data persistence on secondary storage.\n" +
          "- **Core Pseudocode File Operations:**\n" +
          "  - `OPENFILE \"Data.txt\" FOR READ / WRITE / APPEND`\n" +
          "  - `READFILE \"Data.txt\", RecordString`\n" +
          "  - `WRITEFILE \"Data.txt\", RecordString`\n" +
          "  - `CLOSEFILE \"Data.txt\"`\n" +
          "  - `EOF(\"Data.txt\")`: Returns TRUE when the End of File marker is reached.",
        examinerTips: [
          "Define the crucial difference between a function and a procedure: a function ALWAYS returns a value to the caller, whereas a procedure does not.",
          "Always remember to CLOSE a file after opening it in pseudocode (CLOSEFILE) to ensure buffers flush and prevent file locking."
        ],
        commonMistakes: [
          "Attempting to assign the result of a procedure call to a variable; procedures do not return values.",
          "Reading past the end of a file without checking EOF(filename), causing runtime crashes."
        ],
        recap: [
          "Procedures execute actions without returning a value (CALL).",
          "Functions execute and return a single value.",
          "Local variables exist only within their subroutine; global variables exist across the program.",
          "File handling requires OPENFILE (READ/WRITE/APPEND), READFILE/WRITEFILE, and CLOSEFILE."
        ]
      }
    ]
  },
  {
    number: 9,
    title: "Databases",
    section: "Paper 2: Algorithms, Programming and Logic",
    topic: "Relational Database Concepts, Primary Keys, and Structured Query Language (SQL)",
    intro:
      "Databases provide structured, persistent data management for applications ranging from student record systems to e-commerce inventories. This chapter examines database terminology (fields, records, tables), primary keys, and Structured Query Language (SQL) query commands (SELECT, FROM, WHERE, ORDER BY, SUM, COUNT, AVG).",
    subheadings: [
      {
        title: "Single-Table Database Concepts and Primary Keys",
        body:
          "**1. Core Database Architecture:**\n" +
          "- **Table (Relation):** A structured 2D grid containing information about a single real-world entity (e.g. `Students`, `Products`).\n" +
          "- **Field (Attribute / Column):** A single category of data stored for every entity (e.g. `StudentID`, `LastName`, `DateOfBirth`). Has a strict defined data type.\n" +
          "- **Record (Tuple / Row):** A complete collection of all related fields pertaining to one single individual instance of an entity (e.g. all data for student 'Alice Smith').\n\n" +
          "**2. The Primary Key:**\n" +
          "- A field (or combination of fields) that **uniquely identifies** each individual record in a database table.\n" +
          "- *Properties:* Must contain unique values for every record; cannot contain null (empty) values.\n" +
          "- *Examples:* `StudentID`, `NationalInsuranceNumber`, `ProductSKU`, `VehicleVIN`.\n" +
          "- **Composite Primary Key:** A primary key formed by combining two or more fields together when no single field is unique on its own.",
        examinerTips: [
          "Define 'primary key' precisely: a field that uniquely identifies each individual record in a database table.",
          "Give a real-world example of an unsuitable primary key: student surname (because multiple students can have the same surname 'Smith')."
        ],
        commonMistakes: [
          "Suggesting a person's name as a primary key; names are not unique.",
          "Confusing a field (column) with a record (row)."
        ],
        recap: [
          "Databases organize data into Tables, Fields (columns/attributes), and Records (rows/tuples).",
          "A primary key uniquely identifies every record in a table.",
          "Names are unsuitable primary keys; unique alphanumeric IDs must be used."
        ]
      },
      {
        title: "Structured Query Language (SQL)",
        body:
          "**1. What is SQL?**\n" +
          "A standardized declarative query language used to create, search, filter, sort, and extract data from databases.\n\n" +
          "**2. Core SQL Query Syntax:**\n" +
          "```sql\n" +
          "SELECT Field1, Field2, ...\n" +
          "FROM TableName\n" +
          "WHERE Condition\n" +
          "ORDER BY Field1 [ASC | DESC];\n" +
          "```\n" +
          "- **SELECT:** Specifies the fields to display. Use `SELECT *` to display ALL fields.\n" +
          "- **FROM:** Specifies the table name.\n" +
          "- **WHERE:** Filters records based on logical criteria (`=, <, >, <=, >=, <>, AND, OR, NOT`).\n" +
          "- **ORDER BY:** Sorts output records in ascending (`ASC`, default) or descending (`DESC`) order.\n\n" +
          "**3. SQL Aggregate Functions:**\n" +
          "- `COUNT(Field)`: Counts total number of records matching criteria.\n" +
          "- `SUM(Field)`: Calculates arithmetic sum of numerical values.\n" +
          "- `AVG(Field)`: Calculates arithmetic mean of numerical values.\n" +
          "- `MIN(Field)` / `MAX(Field)`: Finds lowest / highest value in a field.",
        examinerTips: [
          "In Cambridge exam SQL questions, write SQL clauses in the standard order: SELECT -> FROM -> WHERE -> ORDER BY.",
          "Use quotes for text strings in WHERE clauses (e.g. WHERE Subject = 'Computer Science') and bare numbers for numeric fields (e.g. WHERE Score >= 80)."
        ],
        commonMistakes: [
          "Writing 'WHERE' before 'FROM'; SQL statements must strictly follow SELECT ... FROM ... WHERE.",
          "Using '==' for equality in SQL; standard SQL uses a single '=' for comparison."
        ],
        recap: [
          "SQL extracts and manipulates database records.",
          "Core query structure: SELECT fields FROM table WHERE condition ORDER BY field ASC/DESC.",
          "SELECT * retrieves all fields; Aggregate functions include COUNT, SUM, AVG, MIN, MAX."
        ]
      }
    ]
  },
  {
    number: 10,
    title: "Boolean Logic",
    section: "Paper 2: Algorithms, Programming and Logic",
    topic: "Logic Gates, Truth Tables, Logic Circuits, and Boolean Expressions",
    intro:
      "Boolean logic underpins all digital electronic circuit design and computer processors. This chapter examines the standard logic gates (NOT, AND, OR, NAND, NOR, XOR), their graphical symbols and truth tables, constructing multi-gate logic circuits from problem statements, deriving Boolean logic expressions, and evaluating truth table outputs.",
    subheadings: [
      {
        title: "Standard Logic Gates and Truth Tables",
        body:
          "**1. The Six Standard Logic Gates:**\n" +
          "- **NOT Gate (Inverter):**\n" +
          "  - Single input $A$. Inverts the input signal: $X = \\text{NOT } A$ (or $\\overline{A}$).\n" +
          "  - Output is 1 if input is 0; output is 0 if input is 1.\n" +
          "- **AND Gate:**\n" +
          "  - Two inputs $A, B$. $X = A \\text{ AND } B$ (or $A \\cdot B$).\n" +
          "  - Output is 1 **ONLY IF BOTH** inputs are 1; otherwise 0.\n" +
          "- **OR Gate:**\n" +
          "  - Two inputs $A, B$. $X = A \\text{ OR } B$ (or $A + B$).\n" +
          "  - Output is 1 if **AT LEAST ONE** input is 1; output is 0 only if both inputs are 0.\n" +
          "- **NAND Gate (NOT-AND):**\n" +
          "  - Two inputs $A, B$. $X = \\text{NOT }(A \\text{ AND } B)$.\n" +
          "  - Inverted AND: Output is 0 ONLY if both inputs are 1; otherwise output is 1.\n" +
          "- **NOR Gate (NOT-OR):**\n" +
          "  - Two inputs $A, B$. $X = \\text{NOT }(A \\text{ OR } B)$.\n" +
          "  - Inverted OR: Output is 1 ONLY if both inputs are 0; otherwise output is 0.\n" +
          "- **XOR Gate (Exclusive-OR):**\n" +
          "  - Two inputs $A, B$. $X = A \\text{ XOR } B$ (or $A \\oplus B$).\n" +
          "  - Output is 1 if **EXACTLY ONE** input is 1 (inputs are different); output is 0 if inputs are identical ($0,0$ or $1,1$).\n\n" +
          "**2. Complete Reference Truth Table:**\n" +
          "| A | B | NOT A | A AND B | A OR B | A NAND B | A NOR B | A XOR B |\n" +
          "|---|---|-------|---------|--------|----------|---------|---------|\n" +
          "| 0 | 0 |   1   |    0    |   0    |    1     |    1    |    0    |\n" +
          "| 0 | 1 |   1   |    0    |   1    |    1     |    0    |    1    |\n" +
          "| 1 | 0 |   0   |    0    |   1    |    1     |    0    |    1    |\n" +
          "| 1 | 1 |   0   |    1    |   1    |    0     |    0    |    0    |",
        examinerTips: [
          "Remember the rule for XOR: output is 1 if the inputs are DIFFERENT (one is 1, the other is 0).",
          "NAND and NOR are inverted versions of AND and OR: simply take the AND/OR result and flip the bits."
        ],
        commonMistakes: [
          "Confusing OR with XOR; for inputs 1 and 1, OR outputs 1, but XOR outputs 0.",
          "Drawing NOT gate without the inversion circle (bubble) at the pointed tip."
        ],
        recap: [
          "NOT inverts a single input.",
          "AND outputs 1 only when both inputs are 1.",
          "OR outputs 1 when at least one input is 1.",
          "NAND and NOR invert AND and OR outputs.",
          "XOR outputs 1 only when inputs are different."
        ]
      },
      {
        title: "Logic Circuits, Boolean Expressions and Truth Tables",
        body:
          "**1. Constructing Logic Circuits from Problem Statements:**\n" +
          "- Identify the input conditions (e.g. $S$: Sensor active, $T$: Temperature high, $M$: Motor running).\n" +
          "- Identify logical operators connecting conditions (e.g. 'Alarm sounds if Temperature is high AND NOT Sensor active, OR Motor running').\n" +
          "- Formulate Boolean expression: $X = (T \\text{ AND } \\text{NOT } S) \\text{ OR } M$.\n" +
          "- Draw gates in sequence: connect NOT gate to $S$; feed $T$ and $\\text{NOT } S$ into AND gate; feed AND output and $M$ into final OR gate.\n\n" +
          "**2. Evaluating Truth Tables for 3-Input Circuits:**\n" +
          "- A circuit with $n$ inputs requires **$2^n$ rows** in its truth table (e.g. 3 inputs $A, B, C$ requires $2^3 = 8\\text{ rows}$).\n" +
          "- Standard binary counting order for 3 inputs:\n" +
          "  `000, 001, 010, 011, 100, 101, 110, 111`.\n" +
          "- Evaluate intermediate gate outputs step by step across table columns before writing the final output column.",
        examinerTips: [
          "When drawing truth tables for 3 inputs, always write the input rows in binary order: 000, 001, 010, 011, 100, 101, 110, 111.",
          "Add intermediate columns in your rough work for intermediate gate outputs; this prevents mental calculation errors across complex circuits."
        ],
        commonMistakes: [
          "Writing truth table input combinations in random disorder, which often results in omitted combinations.",
          "Forgetting parentheses in Boolean expressions, which alters operator precedence."
        ],
        recap: [
          "Translate written criteria into Boolean expressions using NOT, AND, OR, XOR.",
          "3-input truth tables have 8 rows in standard binary order (000 to 111).",
          "Evaluate intermediate outputs systematically to determine the final output."
        ]
      }
    ]
  }
];
