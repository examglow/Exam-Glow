import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelSoftware = imagePanel(IMG, [
  {
    src: "cs5-os-layers.webp",
    alt: "A cross-section of five horizontal stacked bands like a layered cake, with the widest band at the bottom next to a metallic base and the narrowest at the top, arrows passing vertically through the layers",
    caption: "Applications never touch hardware; the OS sits in between",
  },
  {
    src: "cs5-translator-flow.webp",
    alt: "Three parallel flows drawn left to right on a pale card: a single wide arrow going straight from a document block to a machine block, a second flow with many small step arrows repeating, and a third short one-to-one flow",
    caption: "Compiler: whole file once. Interpreter: line by line, forever.",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Software",
  intro: `Topic 5 is the most reliably examined section of Component 1 after the CPU. Almost every series asks for the operating system's management jobs, and a large number ask you to trace what happens when an interrupt fires.

Learn the six management areas as headings. Under each heading, the syllabus already tells you exactly which sub-points to write.`,
  subheadings: [
    {
      title: "5.1 Types of software and interrupts",
    body: `### What an operating system is for

**5.1.1** — the **operating system (OS)** is the software layer that does three jobs at once: it **manages the system's resources** (processor, memory, storage, devices), it **provides a platform on which application software can run**, and it **gives users an interface** to the hardware. Without it, every program would need its own driver code for every device.

Sort the software types as you write: **system software** (the OS, device drivers, utilities, translators) keeps the machine running; **application software** (word processors, browsers, games) does the work the user came for.

### Managing user accounts and security

**5.1.2** — the OS **creates and maintains accounts**, stores each user's credentials, and **assigns access levels / permissions** to files, folders and programs so one user cannot read another's data. It enforces password policy, locks an account after failed attempts, records logins in an audit log, and applies security updates. Logging out **frees** the resources held by that session.

### Managing files

**5.1.3**
- A **file system** is the OS's method of organising data on a storage device: it tracks which clusters belong to which file, stores each file's name, size, type, location and permissions, and reclaims space when a file is deleted.
- **Directories** (folders) provide a hierarchy so files can be grouped and named without collisions, and they let the OS apply permissions to a whole branch at once. The OS resolves a path such as /shop/shoes by walking the directory tree one name at a time.

### Managing memory

**5.1.4** — five verbs, five marks:
- **Allocating memory to processes** — each running program is given a block of RAM sized to its needs, and the OS records who owns what so two programs cannot be given the same space.
- **Loading processes into RAM** — code held on secondary storage is copied into RAM before it can execute, because the CPU can only fetch from primary storage.
- **Paging** — memory is divided into fixed-size **pages** that can be stored in non-contiguous **frames**, which removes external fragmentation and lets parts of a program live out on disk.
- **Segmentation** — memory is divided by **logical units** such as code, data or a stack, each with its own length, which suits programs of very different section sizes.
- **Virtual memory** — rarely used pages are written to disk so the machine can run more, or larger, programs than its RAM alone would allow.
- **Memory protection** — the OS restricts each process to its own address range, so a buggy or hostile program cannot overwrite another's memory or the kernel.

### Managing processes

**5.1.5**
- **Scheduling** — with more runnable processes than cores, the OS decides which runs next and for how long. It gives each a **time slice**, switches rapidly between them so the machine feels multitasking, raises **priority** for interactive or real-time work, and removes deadlocked processes.
- **Inter-process communication** — the OS lets processes exchange data through **message passing, pipes or shared memory**, and it synchronises access so two of them cannot write the same location simultaneously.

### Peripherals and device drivers

**5.1.6** — the OS hides hardware differences behind a uniform interface. A **device driver** is the software that **knows one piece of hardware specifically**: it translates the OS's generic read, write and control commands into the exact signals that device expects, and reports status and errors back. Add a new printer and the OS needs its driver before anything works.

### Interrupts

**5.1.7** — an **interrupt** is a signal that makes the CPU stop what it is doing and deal with something more urgent.

| Cause | Examples of the condition |
|---|---|
| Hardware interrupt | a key press, mouse movement, data arriving from a network card, a printer reporting out of paper, a timer tick |
| Software interrupt | a program makes a system call asking the OS for a service, a program divides by zero or otherwise errors, a program ends normally |

How the OS handles it, in the order marks are given:
1. The current instruction finishes, then the CPU **saves the state of the running process** — the PC and the registers are pushed onto the stack and the process is flagged as paused.
2. The **Interrupt Service Routine (ISR)** for that interrupt is looked up in the interrupt vector and run. The ISR may set a flag, acknowledge the device or copy a character into a buffer.
3. The interrupt is **cleared**, so the same event does not fire again immediately.
4. The saved state is **restored**, which puts the PC back at the exact instruction after the one it was interrupted on, and the process resumes as though nothing happened.

Two consequences worth writing: the ISR is short, because a long handler makes the whole machine feel sluggish, and interrupts can **starve** a low-priority process if they arrive faster than they are handled.`,
      figure: panelSoftware,
      groups: [
        {
          subTitle: "The six OS management areas — use these as answer headings",
          bullets: [
            "User and security management.",
            "Memory management.",
            "Process management.",
            "File management.",
            "Peripheral / device management.",
            "Handling interrupts.",
          ],
        },
        {
          subTitle: "Paging versus segmentation",
          bullets: [
            "Paging uses **fixed-size** blocks and hides the boundaries from the programmer.",
            "Segmentation uses **variable-size logical** blocks that match the program's structure.",
          ],
        },
      ],
      examinerTips: [
        "'Describe how the OS ensures the interrupted process can later resume' is answered with **saving the PC and registers**, then restoring them. Do not talk about the ISR alone.",
        "If a question lists three OS jobs, answer in three separate labelled paragraphs. A single fluent block makes it hard for the marker to find each mark.",
        "Distinguish a **system call** (a deliberate software interrupt) from a **hardware interrupt** (an external device event) when both are offered in the same question.",
      ],
      commonMistakes: [
        "Saying the OS compiles programs. A translator is separate software the OS merely runs.",
        "Describing RAM as where the OS keeps files permanently.",
        "Claiming a device driver is hardware.",
        "Confusing scheduling with paging: scheduling decides **who runs next**, paging decides **where their memory sits**.",
        "Saying the interrupted process restarts from the beginning of the program.",
      ],
      recap: [
        "Describe the purpose of an operating system under three headings.",
        "Explain how the OS manages memory, naming paging, virtual memory and memory protection.",
        "State the difference between a hardware interrupt and a software interrupt, giving one example of each.",
        "Describe the steps the CPU takes when an interrupt occurs and how the original process is resumed.",
      ],
    },
    {
      title: "5.2 Programming languages, translators and IDEs",
      body: `### High-level and low-level

**5.2.1**
- A **high-level language** (Python, Java, C#) is **close to human language**: it uses words, arithmetic expressions and structures such as loops, and it is **independent of the machine** it will run on.
- A **low-level language** is **close to the hardware**. **Machine code** is pure binary, one instruction pattern per operation. **Assembly language** replaces those patterns with short mnemonics such as ADD and MOV and one-to-one maps onto machine code.
- **Syntax** is the set of rules governing how a statement must be written for the language to accept it — brackets, keywords, indentation, punctuation. Ignoring syntax produces a **syntax error**.

**5.2.2 advantages and disadvantages**

| | High-level | Low-level |
|---|---|---|
| Readability | easy for a person to read and maintain | cryptic, needs deep hardware knowledge |
| Portability | runs anywhere a translator exists | tied to one CPU architecture |
| Speed of development | fast, many built-in facilities | slow, every detail is your job |
| Control of hardware | indirect, through libraries | total control of registers and timing |
| Efficiency of output | translator may produce imperfect code | the programmer can hand-tune for size and speed |
| Errors | mostly logical, easier to find | easy to get wrong, hard to debug |

Low-level is still chosen when **every cycle or byte counts**: firmware, device drivers, real-time control, or an embedded controller with almost no memory.

### The three translators

**5.2.3** — all three convert source code into the machine code the CPU actually executes.

- **Compiler** — translates the **entire program in one go** and produces a separate object file or executable. The finished program runs standalone and quickly, and re-translating is only needed when the source changes.
- **Interpreter** — translates and runs **one statement at a time**, in a loop over the source. Nothing is left behind as an executable, so each run repeats the translation work, but errors stop exactly where they occur.
- **Assembler** — translates **assembly mnemonics into machine code**, essentially one instruction to one instruction.

**5.2.4 choosing between them**

| | Compiler | Interpreter |
|---|---|---|
| Speed of the final program | fast — translation done in advance | slower — translated every run |
| Error reporting | stops at first errors, reports many at once | runs until the error, so it points at the live problem |
| Memory | needs source, translator and object code | only needs source and translator |
| Distribution | a standalone executable, source not shipped | the translator must be present on the user's machine |
| Cross-platform | must be recompiled per architecture | the same source runs anywhere an interpreter exists |
| Best for | a finished product shipped to many users | development and testing, scripting, teaching |

The classic evaluation answer: **use an interpreter while developing** because errors surface immediately and no compile step slows each edit, then **use a compiler for the released version** because it runs faster and does not require the source.

### The IDE

**5.2.5** — an **integrated development environment** bundles everything a programmer needs into one application, so files are not shelled out to a dozen tools.

| Feature | What it does for the developer |
|---|---|
| Code editor | writing, viewing and editing the source in one window |
| Run-time environment | runs and tests the program without leaving the IDE |
| Translators | compiles or interprets the source when the run button is pressed |
| Error diagnostics | highlights syntax errors as they are typed and points at the line |
| Auto-completion | suggests identifiers and methods, which speeds typing and prevents misspellings |
| Prettyprint | re-indents and spaces code to a standard layout so it stays readable |
| AI assistance | suggests whole blocks, completes patterns, and explains or fixes errors |
| Debugger | steps through code, sets breakpoints and inspects variable values |

The purpose to state in one sentence: an IDE **increases both the speed of development and the quality of the code**, because mistakes are caught while typing and routine work is automated.`,
      groups: [
        {
          subTitle: "Sentence stems that always score",
          bullets: [
            "A compiler translates **the whole program before it runs**, producing an executable.",
            "An interpreter translates **each line as it executes**, so nothing is stored.",
            "An assembler translates **mnemonics to machine code one for one**.",
            "High-level languages are **portable**; low-level languages are **machine specific**.",
          ],
        },
      ],
      examinerTips: [
        "'Explain why an interpreter is useful during development' — the mark is **immediate error location** and **no separate translation step**, not 'it is easier'.",
        "For IDE questions, name the feature **and** say the benefit. 'Auto-completion reduces typing errors in long identifiers.'",
        "If asked to choose for a scenario, quote a detail from the scenario in your reason — a school teaching Python suits an interpreter because errors appear instantly.",
      ],
      commonMistakes: [
        "Saying an interpreter produces an object file.",
        "Saying a compiler is used to write assembly. That is the assembler.",
        "Claiming high-level languages run faster than low-level ones. Their **output** usually does not.",
        "Describing syntax as the meaning of a program. Meaning is semantics; syntax is the writing rules.",
      ],
      recap: [
        "State two differences between a high-level language and assembly language.",
        "Describe how a compiler and an interpreter each translate a program.",
        "A developer is testing a new game loop that changes every hour. Recommend a translator and justify it.",
        "Explain how any three features of an IDE help a programmer.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_5 = chapterFive;
