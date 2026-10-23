import type { SubjectNotes } from "./types";

export const COMPUTER_SCIENCE: SubjectNotes = {
  id: "computer-science",
  name: "Computer Science",
  code: "0478",
  color: "bg-cyan-600",
  chapters: [
    {
      number: 1,
      title: "Data Representation",
      intro: "All data processed by computers — numbers, text, images, sound — is ultimately stored and manipulated as binary (base-2) numbers using only the digits 0 and 1. Understanding how different types of data are represented in binary, how binary and hexadecimal relate to each other, and how computers perform binary arithmetic is the foundational knowledge underpinning all of computer science. These topics are heavily tested in Paper 1 and require both conceptual understanding and precise calculation.",
      subheadings: [
        {
          title: "Binary, Denary and Hexadecimal Number Systems",
          body: "The denary (decimal) system uses base 10 with digits 0-9; the value of each digit depends on its position as a power of 10. The binary system uses base 2 with only digits 0 and 1; each position represents a power of 2 (from right to left: 2^0=1, 2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32, 2^6=64, 2^7=128). To convert binary to denary: add up the place values where a 1 appears. For example, 10110011 = 128+32+16+2+1 = 179. To convert denary to binary: repeatedly divide by 2 and record the remainders, reading from bottom to top. Hexadecimal (hex) uses base 16 with digits 0-9 and A-F (A=10, B=11, C=12, D=13, E=14, F=15). Each hex digit represents exactly four binary digits (a nibble), making hex a compact shorthand for binary. To convert binary to hex: group the binary digits into groups of four from the right, then convert each group to its hex equivalent. For example, 10110011 = 1011 0011 = B3 in hex. Hex is widely used in computing for: memory addresses, colour codes in HTML (#FF5733), machine code, and error messages.",
          groups: [
            {
              subTitle: "Conversion methods and worked examples",
              bullets: [
                "**Denary to binary**: Convert 156 to binary. 156÷2=78 r0; 78÷2=39 r0; 39÷2=19 r1; 19÷2=9 r1; 9÷2=4 r1; 4÷2=2 r0; 2÷2=1 r0; 1÷2=0 r1. Reading remainders bottom to top: 10011100. Check: 128+16+8+4 = 156. Correct.",
                "**Binary to hex**: Convert 11010101 to hex. Group: 1101 0101. 1101 = D (13); 0101 = 5. Answer: D5. Verify: D5 in denary = 13×16 + 5 = 208+5 = 213. Binary check: 128+64+16+4+1 = 213. Correct.",
                "**Hex to denary**: Convert 2A to denary. 2×16 + A(10)×1 = 32 + 10 = 42.",
                "**Why hex is used**: An 8-bit binary number like 11111111 is hard to read; its hex equivalent FF is much shorter and less error-prone when typing memory addresses or machine code. A 32-bit address takes 32 binary digits but only 8 hex digits."
              ]
            }
          ],
          recap: [
            "Convert the denary number 203 to binary. Show your working. [2]",
            "Convert the binary number 11001010 to hexadecimal. [2]",
            "Convert 3F from hexadecimal to denary. [2]",
            "State two reasons why hexadecimal is used in computing rather than binary. [2]"
          ]
        },
        {
          title: "Binary Arithmetic and Two's Complement",
          body: "Binary addition follows the same rules as decimal addition but carries occur at 2 rather than 10. The rules are: 0+0=0; 0+1=1; 1+0=1; 1+1=0 carry 1; 1+1+1=1 carry 1. When the result has more bits than the word size, an overflow error occurs — the result cannot be represented correctly. Binary subtraction is performed by adding the two's complement. The two's complement of a binary number is found by: inverting all the bits (one's complement) then adding 1. For example, the two's complement of 00000011 (3): invert to get 11111100, add 1 to get 11111101. This represents -3 in two's complement notation. To subtract 3 from 7: add the two's complement of 3 to 7. In an 8-bit system, negative numbers use two's complement representation: the most significant bit (MSB) is the sign bit (0 = positive, 1 = negative). This allows the same hardware circuits for addition to also perform subtraction, simplifying CPU design. The range of an 8-bit two's complement number is -128 to +127.",
          groups: [
            {
              subTitle: "Two's complement worked examples",
              bullets: [
                "**Adding 45 + 28 in binary**: 00101101 + 00011100 = 01001001 = 64+8+1 = 73. Correct.",
                "**Subtraction using two's complement (9 - 5)**: Two's complement of 5 (00000101): invert = 11111010, add 1 = 11111011. Now add: 00001001 + 11111011 = 00000100 (with carry out of MSB discarded). 00000100 = 4. Correct: 9-5=4.",
                "**Overflow**: Adding two large positive 8-bit numbers may produce a result where the sign bit changes from 0 to 1, incorrectly suggesting a negative result. This is an overflow error — the result exceeds the range of the word size.",
                "**Range of two's complement**: For n bits: range is -2^(n-1) to 2^(n-1) - 1. For 8 bits: -128 to +127. For 16 bits: -32768 to +32767. The negative range is one larger because zero is counted on the positive side."
              ]
            }
          ],
          recap: [
            "Add the following 8-bit binary numbers and state whether an overflow occurs: 10110101 + 01100110. [3]",
            "Find the two's complement of 00010110 and explain how it is used to perform subtraction. [3]",
            "State the range of values that can be stored in an 8-bit two's complement number. [1]",
            "Explain what is meant by an overflow error in binary arithmetic. [2]"
          ]
        },
        {
          title: "Representing Text, Images and Sound",
          body: "Text is represented by assigning a unique binary code to each character. ASCII (American Standard Code for Information Interchange) uses 7 bits to represent 128 characters (letters, digits, punctuation, control characters). Extended ASCII uses 8 bits for 256 characters. Unicode uses 16 or 32 bits to represent over 1 million characters covering all world writing systems — it is essential for multilingual computing. The number of bits per character determines the character set size: more bits means more characters can be represented. Images are stored as a grid of pixels (picture elements), each pixel's colour represented as a binary value. Colour depth (bit depth) is the number of bits used to represent each pixel's colour. With n bits per pixel, 2^n different colours are possible. An 8-bit image can show 256 colours; a 24-bit image (8 bits each for red, green, blue — true colour) can show over 16 million colours. File size of an uncompressed image = image width (pixels) × image height (pixels) × colour depth (bits). Higher resolution (more pixels) and greater colour depth produce better quality images but much larger file sizes. Sound is represented by sampling the amplitude of the analogue sound wave at regular intervals. Sample rate is the number of samples taken per second (in Hz); sample resolution (bit depth) is the number of bits used to record each sample's amplitude. Higher sample rate and higher resolution produce more accurate sound reproduction but larger file sizes.",
          groups: [
            {
              subTitle: "Calculating file sizes",
              bullets: [
                "**Image file size**: A 1024×768 pixel image with 24-bit colour depth. Size = 1024 × 768 × 24 = 18,874,368 bits = 18,874,368 / 8 bytes = 2,359,296 bytes ≈ 2.25 MB.",
                "**Sound file size**: Sample rate 44,100 Hz, 16-bit resolution, stereo (2 channels), 3 minutes. Size = 44,100 × 16 × 2 × (3×60) = 44,100 × 16 × 2 × 180 = 254,016,000 bits / 8 = 31,752,000 bytes ≈ 30 MB.",
                "**Why compression is needed**: Uncompressed files are very large and slow to transmit. Lossless compression (e.g. PNG, FLAC, ZIP) reduces file size with no loss of quality — the original can be perfectly reconstructed. Lossy compression (e.g. JPEG, MP3) discards some data the human eye/ear is less sensitive to — much smaller files but original cannot be perfectly reconstructed.",
                "**ASCII vs Unicode**: ASCII: 7 or 8 bits, 128 or 256 characters, sufficient for English only. Unicode: 16-32 bits, 1 million+ characters, covers all world scripts. Unicode files are larger per character but essential for global applications."
              ]
            }
          ],
          recap: [
            "Calculate the file size in bytes of an image that is 800 pixels wide, 600 pixels high, with a colour depth of 16 bits. Show your working. [3]",
            "Explain what is meant by the term sample rate when representing sound as data. [2]",
            "State one advantage and one disadvantage of increasing the colour depth of an image. [2]",
            "Explain why Unicode is preferred over ASCII for modern software applications. [2]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Computer Architecture and Operating Systems",
      intro: "The central processing unit (CPU) is the brain of any computer — it fetches instructions from memory and executes them. Understanding the fetch-execute cycle, the roles of registers, and how CPU performance is measured allows students to explain why some computers are faster than others. The operating system is the essential layer of software that manages hardware resources and provides an interface between user applications and the hardware. Without an operating system, application software cannot run.",
      subheadings: [
        {
          title: "The CPU: Fetch-Execute Cycle and Performance",
          body: "The CPU consists of the Arithmetic and Logic Unit (ALU), the Control Unit (CU), and registers. The ALU performs all arithmetic operations (addition, subtraction, multiplication) and logical operations (AND, OR, NOT, comparisons). The Control Unit directs the operation of the processor — it decodes instructions, coordinates the fetch-execute cycle, and controls data flow between CPU components. Registers are small, extremely fast storage locations within the CPU: the Program Counter (PC) holds the address of the next instruction to be fetched; the Memory Address Register (MAR) holds the address of the memory location being read or written; the Memory Data Register (MDR) holds the data being read from or written to memory; the Accumulator (ACC) holds the result of ALU operations; the Current Instruction Register (CIR) holds the instruction currently being decoded and executed. The fetch-execute cycle: 1) The address in the PC is copied to the MAR; 2) The instruction at that address is fetched from main memory into the MDR; 3) The PC is incremented to point to the next instruction; 4) The instruction is copied from MDR to CIR and decoded by the CU; 5) The instruction is executed by the ALU or other components. CPU performance is determined by: clock speed (number of fetch-execute cycles per second, measured in GHz — more cycles per second means more instructions executed), number of cores (multiple cores can execute multiple instructions simultaneously), and cache memory size (small, very fast memory between CPU and RAM — reduces time waiting for data from slower RAM).",
          groups: [
            {
              subTitle: "Comparing factors affecting CPU performance",
              bullets: [
                "**Clock speed**: A 3 GHz CPU performs 3 billion fetch-execute cycles per second. Doubling clock speed approximately doubles performance, but also increases power consumption and heat generation. Modern processors use multiple lower-speed cores rather than a single very fast core.",
                "**Number of cores**: A quad-core processor can run four instruction streams simultaneously. Effective for multitasking and applications specifically written to use parallel processing (e.g. video rendering, simulations). Some applications are poorly parallelisable and benefit little from extra cores.",
                "**Cache memory**: Level 1 (L1) cache is the smallest and fastest (typically 32-256 KB per core), closest to the ALU. Level 2 (L2) is larger and slightly slower. Level 3 (L3) is shared among cores and larger still. Frequently accessed data stored in cache avoids slow RAM access, dramatically speeding up execution.",
                "**RAM size vs cache**: More RAM allows more applications and data to be held in memory simultaneously (less swapping to disk). More cache reduces the time the CPU waits for data — different bottlenecks at different system configurations."
              ]
            }
          ],
          recap: [
            "Describe the roles of the Program Counter and the Memory Address Register during the fetch stage of the fetch-execute cycle. [3]",
            "State three factors that affect the performance of a CPU and explain how each one affects performance. [6]",
            "Explain why cache memory improves the performance of a CPU. [2]",
            "Explain why a CPU with four cores running at 2 GHz may not be four times faster than a single-core CPU at 2 GHz. [2]"
          ]
        },
        {
          title: "Operating Systems and Memory Management",
          body: "An operating system (OS) is system software that manages computer hardware and software resources and provides common services for application programs. Without an OS, users would need to write machine code to interact with every piece of hardware — the OS provides a layer of abstraction. The OS manages the following: process management (scheduling which process uses the CPU at any time, using algorithms such as round-robin or priority scheduling); memory management (allocating RAM to processes, managing virtual memory — using disk space as an extension of RAM when physical RAM is insufficient); file management (organising files into a hierarchical directory structure, controlling read/write/execute permissions); device management (communicating with hardware devices through drivers); user interface (providing a command line interface (CLI) or graphical user interface (GUI)). Virtual memory allows the system to appear to have more RAM than physically installed by storing inactive pages of memory on the hard drive (in a page file or swap space). However, accessing the hard drive is much slower than RAM, so excessive use of virtual memory (thrashing) significantly slows performance. Modern operating systems are multitasking — they appear to run multiple applications simultaneously by rapidly switching the CPU between processes (context switching) so fast that users perceive concurrent execution.",
          groups: [
            {
              subTitle: "CLI vs GUI comparison",
              bullets: [
                "**Command Line Interface (CLI)**: User types text commands. Advantages: faster for experienced users, uses less memory and processing power, scriptable (commands can be automated in scripts), precise control. Disadvantages: steep learning curve, easy to make errors, no visual feedback.",
                "**Graphical User Interface (GUI)**: Uses windows, icons, menus, pointer (WIMP). Advantages: intuitive and easy to learn, visual feedback, accessible to non-technical users, supports multitasking visually. Disadvantages: requires more memory and CPU resources, can be slower for complex tasks than CLI, limited by available screen space.",
                "**Virtual memory operation**: When RAM is full, the OS identifies pages (chunks) of memory not recently used and writes them to disk (paging out). When that data is needed again, it is read back from disk (paging in), displacing other pages. This disk access can take 1000× longer than RAM access.",
                "**Process scheduling**: Round-robin gives each process a fixed time slice in turn. Priority scheduling runs high-priority processes first. The OS must balance fairness (no process starved of CPU time) against efficiency (CPU not wasted)."
              ]
            }
          ],
          recap: [
            "State four functions of an operating system. [4]",
            "Explain what is meant by virtual memory and describe one disadvantage of using it. [3]",
            "Compare a command line interface with a graphical user interface, giving one advantage of each. [2]",
            "Explain why an operating system is needed between application software and computer hardware. [2]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Programming and Problem Solving",
      intro: "Programming is the process of writing a sequence of instructions that a computer can execute to solve a problem. IGCSE Computer Science requires the ability to write, trace, and debug pseudocode and flowcharts, understand fundamental programming constructs (sequence, selection, iteration), work with arrays, and design algorithms from scratch. The ability to decompose problems, design before coding, and test systematically distinguishes a competent programmer from someone who merely types code.",
      subheadings: [
        {
          title: "Algorithms: Design and Representation",
          body: "An algorithm is a precise, step-by-step set of instructions for solving a problem or accomplishing a task. Every algorithm must: be finite (terminate after a finite number of steps), be precise (each step must be unambiguous), produce the correct output for all valid inputs, and handle edge cases (boundary conditions) gracefully. Algorithms are represented at design stage using pseudocode (structured English using programming-like syntax, not specific to any language) or flowcharts (diagrammatic representations using standard symbols: oval for start/end, rectangle for process, diamond for decision, parallelogram for input/output). Good algorithm design starts with identifying the inputs, outputs, and the logical steps needed to transform inputs to outputs. Decomposition means breaking a complex problem into smaller, more manageable sub-problems that can be solved individually. Abstraction means focusing only on the relevant details and ignoring irrelevant complexity — for example, a map abstracts the real world by showing only roads and places, not every blade of grass. Top-down design (stepwise refinement) starts with the overall problem and repeatedly breaks it into smaller sub-tasks until each is simple enough to code directly. This produces a structure diagram showing the hierarchy of tasks.",
          groups: [
            {
              subTitle: "Pseudocode conventions for IGCSE",
              bullets: [
                "**Assignment**: Use ← for assignment. e.g. total ← total + score. Do not use = (that is comparison in some languages).",
                "**Input/Output**: INPUT name; OUTPUT name or PRINT name.",
                "**Selection**: IF condition THEN ... ELSE ... ENDIF. Nested IF statements are allowed but increase complexity.",
                "**Count-controlled loop**: FOR counter ← start TO end ... NEXT counter. Use when number of iterations is known.",
                "**Condition-controlled loops**: WHILE condition DO ... ENDWHILE (tests before loop body); REPEAT ... UNTIL condition (tests after — always executes at least once). Choose based on whether the loop must always execute at least once."
              ]
            }
          ],
          recap: [
            "Write pseudocode for an algorithm that reads 10 numbers from a user, calculates their total and average, and outputs both values. [5]",
            "Explain the difference between a count-controlled loop and a condition-controlled loop. Give a situation where each is more appropriate. [4]",
            "Describe what is meant by decomposition in program design and explain why it is useful. [2]",
            "Trace through the following pseudocode with input values 5, 3, 8, -1 and state the final output. [3]"
          ]
        },
        {
          title: "Arrays, Searching and Sorting",
          body: "An array is a data structure that stores multiple values of the same data type under a single variable name, accessed using an index. In IGCSE pseudocode, arrays are declared as: DECLARE numbers : ARRAY[1:10] OF INTEGER. Array elements are accessed by index: numbers[1], numbers[2], etc. Arrays are essential for processing collections of related data — student marks, temperatures, names — without needing separate variables for each. The linear search algorithm searches through each element of a list one by one until the target is found or the list is exhausted. It works on both sorted and unsorted data but is slow for large datasets — in the worst case it checks every element (O(n) complexity). The binary search works only on sorted data. It repeatedly divides the search interval in half: compare the target with the middle element; if equal, found; if target is smaller, search the left half; if larger, search the right half. This is much faster — it halves the search space at each step (O(log n) complexity). The bubble sort algorithm repeatedly compares adjacent pairs of elements and swaps them if in the wrong order. After each pass, the largest unsorted element bubbles to the correct position. It requires at most n-1 passes for a list of n elements. Inefficient for large lists (O(n^2)) but simple to implement and understand.",
          groups: [
            {
              subTitle: "Tracing through a bubble sort",
              bullets: [
                "**Initial list**: [5, 3, 8, 1, 9]. Pass 1: Compare 5,3 → swap: [3,5,8,1,9]. Compare 5,8 → no swap. Compare 8,1 → swap: [3,5,1,8,9]. Compare 8,9 → no swap. After pass 1: [3,5,1,8,9]. The 9 is in correct position.",
                "**Pass 2**: [3,5,1,8,9] → [3,1,5,8,9]. The 8 is now in correct position. **Pass 3**: [1,3,5,8,9]. **Pass 4**: Already sorted. Total passes needed: n-1 = 4.",
                "**Binary search example**: Sorted list [2,5,8,12,16,23,38,45]. Search for 23. Mid = index 4 = 16. 23 > 16, search right half [23,38,45]. Mid = 38. 23 < 38, search left [23]. Found at first element.",
                "**Choosing between algorithms**: Linear search: use when list is unsorted or very short. Binary search: use when list is sorted and large — far more efficient. Bubble sort: simple to implement but very slow for large n; used mainly in teaching. More efficient sorts (merge sort, quicksort) are not required at IGCSE but are referenced in extension work."
              ]
            }
          ],
          recap: [
            "Write pseudocode for a linear search that finds a target value in an array of 20 integers and outputs its position or 'not found'. [5]",
            "Perform a trace of bubble sort on the list [7, 2, 9, 4, 6] and show the state of the list after each pass. [4]",
            "Explain why binary search is more efficient than linear search for a large sorted list. [3]",
            "State two advantages of using an array over separate variables for storing a set of exam marks. [2]"
          ]
        }
      ]
    }
  ]
};
