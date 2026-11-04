import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelCircuit = imagePanel(IMG, [
  {
    src: "cs2-truth-table-circuit.webp",
    alt: "A hand-drawn logic circuit on graph paper with two inputs entering from the left through gate shapes and a single output leaving on the right, beside a ruled empty truth-table grid of boxes",
    caption: "Three inputs, sixteen rows, one output",
  },
  {
    src: "cs2-circuit-board.webp",
    alt: "A macro photograph of a green printed circuit board crowded with small black integrated-circuit chips, thin copper tracks and tiny solder joints, lit from one side",
    caption: "Every gate on this board is made from transistors",
  },
]);

const panelCpu = imagePanel(IMG, [
  {
    src: "cs2-cpu-die.webp",
    alt: "An extreme close-up of a silicon processor die showing a dense geometric pattern of circuitry in cool metallic tones, with the square edge of the die and connecting pins visible at one corner",
    caption: "One chip: ALU, CU, registers and cache together",
  },
  {
    src: "cs2-fde-whiteboard.webp",
    alt: "A whiteboard covered in a four-step flow drawn in marker: numbered boxes connected by arrows running left to right then looping back to the start, with a few boxes shaded",
    caption: "Fetch, decode, execute — then the clock ticks and it repeats",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Logic Circuits and Hardware",
  intro: `Chapter 1 gave you the gates. This chapter assembles them: gates become circuits, circuits become a CPU, and a CPU needs somewhere to keep its data.

Topic 2 is the heaviest memorisation block in Component 1 because the register names are non-negotiable. Learn the eight registers and three buses by function, not by abbreviation, and the fetch-decode-execute answer writes itself.`,
  subheadings: [
    {
      title: "2.1 Logic circuits",
      body: `### What a circuit question is really asking

**2.1.1** — you can be handed any one of three things and asked to produce a circuit: a **problem statement** in words, a **logic expression** in symbols, or a **truth table**. Circuits are limited to **three inputs and one output**, and the instruction is always to build the circuit **for the statement given, without simplification**.

That last clause is a gift. Do not try to be clever with Boolean algebra; draw exactly what the expression says, gate for gate.

Reading an expression: \`A AND B\` is an AND gate with inputs A and B; \`NOT A\` is a NOT gate on A; \`X OR (Y AND Z)\` needs the brackets done first, so Y AND Z goes into an AND whose output joins X at an OR.

### Going from truth table to circuit

The standard method, and the one that scores every mark:
1. Write A, B, C down the left in binary counting order, 000 to 111 — **8 rows for 3 inputs**, 4 for 2.
2. Fill the output column from the problem statement.
3. Circle every row where the output is 1.
4. For each circled row write an AND term, using the plain letter when the input is 1 and the letter with NOT on it when the input is 0.
5. OR all those terms together.

For rows A=1, B=0, C=1 with output 1, the term is **A AND (NOT B) AND C**. Three circled rows give three AND gates feeding one OR gate.

### The other two directions

**2.1.2 completing a truth table** — work column by column, one gate at a time. Add a **working column** for each intermediate gate output, then the final column. That is how you avoid silly errors and it shows the examiner your method.

**2.1.3 writing a logic expression** — read the circuit left to right. Follow each wire and name the output of every gate as you go: if A and B enter an AND, and that output joins C at an OR, the expression is **(A AND B) OR C**. Use brackets wherever a wire carries the result of one gate into another.

Three inputs give 2³ = 8 rows; a truth table with 6 rows is an immediate sign you have missed one.`,
      figure: panelCircuit,
      groups: [
        {
          subTitle: "Rows in a truth table",
          bullets: [
            "2 inputs → 4 rows.",
            "3 inputs → 8 rows.",
            "Formula: rows = 2 to the power of the number of inputs.",
          ],
        },
        {
          subTitle: "The circuit-building checklist",
          bullets: [
            "Every input letter gets its own start point, and a NOT gate where the row needs 0.",
            "One AND term per row that outputs 1.",
            "One OR gate collecting all the terms.",
            "Exactly one output wire, leaving on the right.",
            "Gates drawn in the recognised shapes, not boxes.",
          ],
        },
      ],
      examinerTips: [
        "If the question says 'without simplification', an over-clever answer costs you the method marks. Draw the unsimplified circuit and stop.",
        "Label every gate output on your diagram. If a later part asks for the truth table, the labels are the working.",
        "A common 4-marker is 'complete the truth table for this circuit'. Fill the intermediate columns — marks are awarded for them even when the final column is wrong.",
      ],
      commonMistakes: [
        "Using a letter without NOT for a row where that input is 0.",
        "Wiring OR gates where the row needs AND, so the term fires on the wrong rows.",
        "Producing 6 or 7 rows instead of 8 for three inputs.",
        "Leaving an input wire floating — every gate input must connect to a letter or a gate output.",
      ],
      recap: [
        "Draw the logic circuit for (A AND NOT B) OR (C AND A) using recognised symbols.",
        "Complete the truth table for a circuit in which A and B enter an XOR and the output enters a NOR with C.",
        "Write the logic expression for a circuit with output 1 only on the rows 010 and 111.",
      ],
    },
    {
      title: "2.2 CPU architecture",
      body: `### The CPU and the microprocessor

**2.2.1** — the **central processing unit (CPU)** is the component that **fetches, decodes and executes instructions**, controlling and coordinating everything else in the computer. It performs the arithmetic and logic and it directs the flow of data.

**2.2.2** — a **microprocessor** is a CPU **manufactured as a single integrated circuit on one chip** of silicon, containing the processor's logic and registers together.

### The parts and what each one does

**2.2.3** — memorise these as one-sentence jobs. Registers live inside the CPU; buses are the wires between CPU and memory.

| Component | Job |
|---|---|
| ALU (arithmetic logic unit) | carries out the calculations and comparisons |
| CU (control unit) | decodes instructions and directs the other components |
| PC (program counter) | holds the address of the **next** instruction to fetch |
| MAR (memory address register) | holds the address in memory that is being used now |
| MDR (memory data register) | holds the **data** just read from, or about to be written to, memory |
| CIR (current instruction register) | holds the instruction **currently** being decoded and executed |
| ACC (accumulator) | holds the result of the ALU's calculation |
| Address bus | carries addresses from CPU to memory; its width sets how much memory is addressable |
| Data bus | carries the actual data both ways; its width sets how many bits travel at once |
| Control bus | carries control signals and timing, such as read and write commands |
| Cache | small, very fast memory inside or near the CPU holding likely-needed data |
| Cores | separate CPUs on the chip, each able to run its own instruction stream |
| Clock | generates regular pulses that set the pace at which instructions are processed |

Two pairs the exam loves to test: **MAR holds an address, MDR holds the data**; **PC holds the next address, CIR holds the current instruction**.

### von Neumann architecture

**2.2.4** — in the **von Neumann** design, **program instructions and data are stored together in the same RAM**, and the CPU fetches both from that single memory over a shared bus.

- The **CPU** fetches, decodes and executes, and holds the registers that track progress.
- The **RAM** holds both the program and the data it works on, and is directly addressable by the CPU.

The consequence worth stating: because instructions and data share one bus, only one can travel at a time, which limits speed — this is the **von Neumann bottleneck**.

### Fetch–decode–execute

**2.2.5** — write the cycle with the register named at each step. This is the classic 6-marker.

1. The **PC** copies its value (address of the next instruction) into the **MAR**.
2. The instruction at that address is fetched from memory into the **MDR**.
3. The **MDR** copies the instruction into the **CIR**.
4. The **PC** is incremented by 1 to point at the next instruction.
5. The **CU** decodes the instruction in the CIR and works out what is needed.
6. The instruction is **executed**: the ALU calculates if required and the result is stored in the **ACC**, or data is loaded or stored, or the PC is set to a new value for a jump.
7. The cycle repeats from step 1 until the program ends.

Step 4 can be placed anywhere after step 2 in most mark schemes; putting it early is the safest habit.

### Performance

**2.2.6** — three specifications, three mechanisms:
- **More cores** let several instructions or programs be processed at the same time, so multitasking and parallel work speed up. One single-threaded program gains little.
- **Larger cache** keeps more frequently used data and instructions close to the CPU, so fewer slow trips out to RAM.
- **Higher clock speed** means more ticks per second, so **more instructions are fetched and executed per second**. Measured in Hz or GHz.

**2.2.7** — an **instruction set** is the list of instructions that a particular CPU can understand and perform. It defines the vocabulary the translator must produce, which is why code compiled for one architecture will not run on another.`,
      figure: panelCpu,
      groups: [
        {
          subTitle: "Bus widths and what they limit",
          bullets: [
            "Address bus width n → 2ⁿ addressable memory locations.",
            "Data bus width → how many bits move in one go.",
            "Control bus → read/write signals and timing, not data.",
          ],
        },
        {
          subTitle: "Clock cycle vocabulary",
          bullets: [
            "Clock speed = ticks per second (Hz).",
            "Each tick advances instruction processing.",
            "A faster clock does more work per second and produces more heat.",
          ],
        },
      ],
      examinerTips: [
        "In a fetch-decode-execute question, name the **registers** — 'the PC is copied to the MAR' scores, 'the address is fetched' does not.",
        "For 'explain how cache improves performance', the mark is the word **fewer accesses to RAM**, not just 'it is faster'.",
        "If asked for a disadvantage of more cores, the honest answer is that programs must be written for parallelism to benefit, and heat and cost rise.",
      ],
      commonMistakes: [
        "Saying the PC holds the **current** instruction. It holds the **next** one; the CIR holds the current one.",
        "Confusing MDR with MAR — address versus data.",
        "Claiming the CU performs the calculations. The ALU calculates; the CU directs.",
        "Describing RAM as part of the CPU in a von Neumann answer; it is separate memory linked by buses.",
      ],
      recap: [
        "Name the register that holds the address of the next instruction, and the one that holds the instruction being decoded.",
        "Describe the fetch-decode-execute cycle, naming the CPU components involved at each stage.",
        "Explain how increasing cache size and clock speed each affect the performance of a laptop.",
      ],
    },
    {
      title: "2.3 Data storage",
      body: `### Primary storage

**2.3.1** — **primary storage** is memory the CPU can address **directly** and instantly. It holds the data and instructions currently in use.

- **RAM (random access memory)** — volatile, read/write, holds the programs and data currently running. Any location can be accessed in the same time regardless of position.
- **ROM (read only memory)** — non-volatile, holds the **startup program / bootstrap loader** and firmware that runs when the machine is switched on. Read-only in normal use.
- **Cache** — the fastest, smallest primary store, sitting between CPU and RAM, holding copies of likely-needed data and instructions.
- **Registers** — tiny, ultra-fast storage **inside the CPU** holding the values the CPU is working on this instant (PC, MAR, MDR, CIR, ACC).

**2.3.2 RAM versus ROM:**

| | RAM | ROM |
|---|---|---|
| Volatile? | yes, contents lost on power off | no, contents retained |
| Writable? | read and write in normal use | read-only in normal use |
| Contents | running programs and their data | startup program, firmware |
| Changeable | constantly | only by a deliberate flash update |
| Amount | large (GB) | small (MB or less) |

The similarity to state: both are **primary**, both are directly addressable by the CPU, and both hold binary data.

**2.3.4 primary versus secondary** — primary is directly accessible, fast, volatile (except ROM) and small; secondary is not directly addressable, slower, non-volatile and huge. Programs must be copied from secondary into RAM before the CPU can run them.

### Secondary storage

**2.3.3** — **secondary storage** holds data and programs **permanently**, when the machine is off, and in quantities primary storage could never contain. It is the archive: documents, photos, installed software, the operating system image.

**2.3.5–2.3.6** — the two technologies you must describe:

| | Magnetic (HDD) | Solid-state (SSD / USB / SD) |
|---|---|---|
| How data is kept | magnetised regions on a spinning platter | charge trapped in flash memory cells |
| Reading | read head senses the polarity of regions as the platter spins under it | controller applies a voltage and detects whether each cell conducts |
| Writing | an electromagnet sets the polarity of a region | a voltage is used to trap or release electrons in the cell |
| Moving parts | yes — platters and head arm | none |
| Speed | slower, seek time and latency | much faster, near-instant access |
| Robustness | vulnerable to shocks and wear | shock-resistant, silent |
| Cost and capacity | cheap per GB, very large capacities available | dearer per GB, limited write endurance |
| Battery / power | uses more | uses less, lighter |

Worth adding in an evaluate question: an SSD slows as it fills, and flash cells wear out after a large but finite number of write cycles; a hard drive tends to fail suddenly when a part wears out.

### Virtual memory

**2.3.7** — **virtual memory** is a region of **secondary storage used as though it were RAM**. The operating system takes pages of RAM that have not been used recently, writes them to a **page file / swap file** on disk, and marks those pages as no longer in memory. When the program needs them again, a **page fault** occurs and the OS swaps them back in, evicting something else if necessary.

**2.3.8 why it is necessary** — RAM is limited and expensive. Virtual memory lets a machine run programs, and support multiple tasks, whose combined needs exceed the physical RAM, prevents a program from being terminated merely because memory is full, and lets each program believe it owns a large, contiguous address space, which also simplifies memory protection.

The cost to mention: disk access is orders of magnitude slower than RAM, so over-reliance causes **thrashing** — constant swapping and a machine that appears to freeze.`,
      groups: [
        {
          subTitle: "Storage hierarchy, fastest to largest",
          bullets: [
            "Registers → cache → RAM → secondary storage (SSD/HDD) → offline or cloud archive.",
            "As speed rises: capacity falls and cost per bit rises.",
            "Only registers, cache and RAM are directly accessible by the CPU.",
          ],
        },
        {
          subTitle: "Volatile or not",
          bullets: [
            "Volatile: RAM, cache, registers.",
            "Non-volatile: ROM, all secondary storage, virtual memory on disk.",
          ],
        },
      ],
      examinerTips: [
        "'Explain why virtual memory is needed' wants the constraint named first: RAM is small and expensive, so some data must live on disk.",
        "For 'compare magnetic and solid-state storage', always include one point that favours magnetic — usually cost per gigabyte and available capacity — or you have only described, not compared.",
        "When describing how data is read, use the phrase 'the read head detects the magnetic polarity of the regions on the platter'. Vague answers about 'spinning' score nothing.",
      ],
      commonMistakes: [
        "Calling ROM 'read-only' and then saying it can never be changed; modern ROM is flash and can be rewritten deliberately.",
        "Saying a laptop uses virtual memory because RAM is volatile. It is about **capacity**, not volatility.",
        "Naming a USB stick or SSD as primary storage.",
        "Claiming an SSD has no moving parts and then attributing its slowness to seek time.",
      ],
      recap: [
        "State two differences between RAM and ROM and one feature they share.",
        "Describe how data is written to and read from a magnetic hard-disk drive.",
        "Explain what virtual memory is and why an operating system uses it.",
        "A photographer needs to carry 4 TB of raw files into the field on a laptop that must survive bumps. Recommend a storage type and justify it.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_2 = chapterTwo;
