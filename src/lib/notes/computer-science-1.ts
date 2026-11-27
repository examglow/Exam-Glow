import type { Chapter } from "./types";

/**
 * Cambridge IGCSE Computer Science (0478) 2026–2028 Syllabus Notes
 * Part 1: Chapters 1–5 (Paper 1 Computer Systems)
 * - Chapter 1: Data Representation
 * - Chapter 2: Data Transmission
 * - Chapter 3: Hardware
 * - Chapter 4: Software
 * - Chapter 5: The Internet and its Uses
 */
export const COMPUTER_SCIENCE_PART1: Chapter[] = [
  {
    number: 1,
    title: "Data Representation",
    section: "Paper 1: Computer Systems",
    topic: "Number Systems, Text, Sound, Images, Data Storage, and Compression",
    intro:
      "All computer systems process and store data in binary format using electrical two-state switches (transistors). This chapter examines the denary, binary, and hexadecimal number systems, binary addition and shifts, two's complement signed representation, representation of text, sound, and bitmap images, data storage units (including IEC binary prefixes), and lossy versus lossless compression algorithms.",
    subheadings: [
      {
        title: "Number Systems: Denary, Binary and Hexadecimal",
        body:
          "**1. Why Computers Process Data in Binary:**\n" +
          "Computer processors (CPUs) are constructed from billions of microscopic silicon **transistors** that operate as electronic switches. A transistor can exist in only two distinct electrical voltage states: ON (conducting current, represented by binary digit **1**) or OFF (non-conducting, represented by binary digit **0**). Therefore, all software instructions, numbers, characters, images, and audio must be encoded as binary sequences.\n\n" +
          "**2. Number Bases and Conversions:**\n" +
          "- **Denary (Base 10):** Uses digits $0\\text{–}9$. Place values: $\\dots, 10^3=1000, 10^2=100, 10^1=10, 10^0=1$.\n" +
          "- **Binary (Base 2):** Uses digits $0$ and $1$. Place values for an 8-bit byte: $128, 64, 32, 16, 8, 4, 2, 1$.\n" +
          "  - *Conversion (Binary to Denary):* Sum the active place values (e.g. $10110010_2 = 128 + 32 + 16 + 2 = 178_{10}$).\n" +
          "  - *Conversion (Denary to Binary):* Successive subtraction of highest powers of 2, or repeated integer division by 2 recording remainders from bottom to top.\n" +
          "- **Hexadecimal (Base 16):** Uses 16 symbols: digits $0\\text{–}9$ and letters $A\\text{–}F$ ($A=10, B=11, C=12, D=13, E=14, F=15$).\n" +
          "  - Place values: $\\dots, 16^2=256, 16^1=16, 16^0=1$.\n" +
          "  - *Why Hexadecimal is Used by Computer Scientists:*\n" +
          "    1. Hexadecimal is much shorter and more compact than binary (each hex digit represents exactly a 4-bit nibble: $2^4 = 16$).\n" +
          "    2. Far easier for humans to read, write, memorize, and debug.\n" +
          "    3. Reduces transcription errors when writing memory addresses or binary machine code.\n" +
          "    4. **Computers DO NOT process hexadecimal directly; hex is converted to binary before execution by the CPU.**\n" +
          "  - *Common Uses of Hexadecimal:*\n" +
          "    - **MAC Addresses:** Media Access Control hardware addresses (e.g. `00:1A:2B:3C:4D:5E`).\n" +
          "    - **IPv6 Addresses:** 128-bit network addresses (e.g. `2001:0db8:85a3::8a2e:0370:7334`).\n" +
          "    - **HTML/CSS Colour Codes:** 24-bit RGB values (`#FF0000` for pure red, where each pair represents 8-bit colour intensity 0–255).\n" +
          "    - **Memory Dumps & Assembly Language:** Displaying the contents of RAM during program debugging.\n" +
          "    - **Error Codes:** Debugging kernel panic messages.",
        examinerTips: [
          "State clearly why humans use hexadecimal: it is more compact, easier to read, and reduces human transcription errors; never say 'computers use hex because it takes less memory' — computers only process binary!",
          "In conversion questions, always group binary numbers into 4-bit nibbles from RIGHT to LEFT before converting to hexadecimal."
        ],
        commonMistakes: [
          "Claiming that a computer CPU processes hexadecimal directly; hex is strictly an interface convenience for human programmers.",
          "Confusing hex letters: forgetting that A=10, B=11, C=12, D=13, E=14, F=15."
        ],
        recap: [
          "Computers use binary because transistors have two physical electrical states (ON/OFF).",
          "Hexadecimal (Base 16) uses 0–9 and A–F; one hex digit represents 4 binary bits (one nibble).",
          "Hex is used for MAC addresses, IPv6, HTML colour codes, and debugging memory dumps.",
          "Computers always convert hexadecimal to binary before processing."
        ]
      },
      {
        title: "Binary Arithmetic, Logical Shifts and Two's Complement",
        body:
          "**1. Binary Addition of Two Positive 8-bit Integers:**\n" +
          "- **Basic Rules:**\n" +
          "  - $0 + 0 = 0$\n" +
          "  - $0 + 1 = 1$\n" +
          "  - $1 + 1 = 0 \\text{ carry } 1$\n" +
          "  - $1 + 1 + 1 = 1 \\text{ carry } 1$\n" +
          "- **Overflow Error:**\n" +
          "  - Occurs when the sum of two 8-bit numbers exceeds the maximum value that can be represented in an 8-bit register ($255_{10}$ or $11111111_2$).\n" +
          "  - The 9th carry bit cannot fit into the 8-bit register and is lost or triggers an overflow flag.\n" +
          "  - *Consequence:* The computer calculates an incorrect, truncated value, leading to program crashes or arithmetic corruption.\n\n" +
          "**2. Logical Binary Shifts:**\n" +
          "- Moving all bits in a register left or right, with empty bit positions filled with zeros.\n" +
          "- **Logical Shift Left ($n$ places):**\n" +
          "  - Multiplies the integer by **$2^n$** (e.g. shift left by 1 multiplies by 2; shift left by 3 multiplies by 8).\n" +
          "  - *Overflow Warning:* If a '1' is shifted out of the most significant bit (MSB), an overflow error occurs and precision is lost.\n" +
          "- **Logical Shift Right ($n$ places):**\n" +
          "  - Divides the integer by **$2^n$** using integer division (fractional remainders are discarded as bits fall off the right).\n\n" +
          "**3. Two's Complement Representation of Signed Integers:**\n" +
          "- Used by modern computer hardware to store positive and negative integers in binary.\n" +
          "- In an 8-bit two's complement register, the Most Significant Bit (MSB, bit 7) represents **$-128$** (the negative sign and magnitude bit):\n" +
          "  - Bit weights: $-128, 64, 32, 16, 8, 4, 2, 1$.\n" +
          "  - Range of representable values: **$-128$ to $+127$** ($-2^{n-1}$ to $+2^{n-1}-1$).\n" +
          "- **Algorithm to Convert a Positive Denary Integer to Negative Two's Complement:**\n" +
          "  1. Write the positive integer as an 8-bit binary number (e.g. $+35 = 00100011_2$).\n" +
          "  2. Invert all bits (one's complement: flip $0 \\rightarrow 1$ and $1 \\rightarrow 0$ $\\rightarrow 11011100_2$).\n" +
          "  3. Add 1 to the result: $11011100 + 1 = 11011101_2 = -35$.\n" +
          "- *Verification:* $-128 + 64 + 16 + 8 + 4 + 1 = -35$.",
        examinerTips: [
          "Define 'overflow error' precisely: an error that occurs when the result of a binary addition exceeds the maximum numerical value that can be stored in the allocated register size.",
          "In logical shifts, always show the trailing zeros that fill the vacated positions; shifting left by 2 positions fills the rightmost two bits with 00."
        ],
        commonMistakes: [
          "Forgetting the carry bit when performing multi-column binary addition.",
          "Assuming the range of an 8-bit signed integer is -127 to +128; the correct range is -128 to +127."
        ],
        recap: [
          "Binary addition follows: 0+0=0, 0+1=1, 1+1=0 carry 1, 1+1+1=1 carry 1.",
          "Overflow error occurs when a result exceeds 255 in an 8-bit register.",
          "Logical shift left by n multiplies by 2^n; logical shift right divides by 2^n.",
          "Two's complement gives the MSB a negative value (-128 in 8-bit), allowing representation of -128 to +127."
        ]
      },
      {
        title: "Representation of Text, Sound and Images",
        body:
          "**1. Representation of Text:**\n" +
          "- Characters (letters, numerals, punctuation, control codes) are mapped to unique numeric binary values using character sets.\n" +
          "- **ASCII (American Standard Code for Information Interchange):**\n" +
          "  - Standard 7-bit code representing **$128$ characters** ($2^7 = 128$). Covers English alphabet, numbers, punctuation, and control codes (`Enter`, `Backspace`).\n" +
          "  - Extended ASCII uses 8 bits ($256$ characters) to include European accented characters.\n" +
          "- **Unicode:**\n" +
          "  - Uses 16 to 32 bits per character (representing over 1 million characters).\n" +
          "  - Universal standard covering all world languages (Mandarin, Arabic, Cyrillic, Hindi), mathematical symbols, and emojis.\n" +
          "  - Backward-compatible with standard ASCII (first 128 codes are identical).\n\n" +
          "**2. Representation of Sound:**\n" +
          "- Sound is an analogue, continuous acoustic pressure wave. To store sound digitally, an Analogue-to-Digital Converter (ADC) **samples** the sound wave at regular time intervals.\n" +
          "- **Sample Rate (Sampling Frequency):** The number of audio samples taken per second, measured in **Hertz (Hz)** (e.g. CD quality audio is $44.1\\text{ kHz} = 44,100\\text{ samples/sec}$). Higher sample rate produces a closer approximation of the original sound wave.\n" +
          "- **Sample Resolution (Bit Depth):** The number of bits allocated to represent the amplitude of each sample (e.g. 16-bit or 24-bit). Higher resolution captures greater dynamic range and reduces quantization noise.\n" +
          "- **File Size Formula for Audio:**\n" +
          "  $$\\text{File Size (bits)} = \\text{Sample Rate (Hz)} \\times \\text{Sample Resolution (bits)} \\times \\text{Duration (seconds)} \\times \\text{Number of Channels}$$\n\n" +
          "**3. Representation of Bitmap Images:**\n" +
          "- A bitmap image is composed of a 2D matrix of tiny picture elements called **pixels**.\n" +
          "- **Image Resolution:** The dimensions of the image measured as pixels wide $\\times$ pixels high (e.g. $1920 \\times 1080$).\n" +
          "- **Colour Depth (Bit Depth):** The number of bits used to represent the colour of each individual pixel:\n" +
          "  - $1\\text{-bit}: 2^1 = 2\\text{ colours}$ (monochrome black and white).\n" +
          "  - $8\\text{-bit}: 2^8 = 256\\text{ colours}$.\n" +
          "  - $24\\text{-bit True Colour}: 2^{24} = 16,777,216\\text{ colours}$ (8 bits each for Red, Green, Blue).\n" +
          "- **Metadata:** Supplementary non-pixel data stored within the image file header (e.g. image resolution, colour depth, camera model, date/time created, GPS coordinates).\n" +
          "- **File Size Formula for Bitmap Images:**\n" +
          "  $$\\text{File Size (bits)} = \\text{Width (pixels)} \\times \\text{Height (pixels)} \\times \\text{Colour Depth (bits)}$$",
        examinerTips: [
          "State the trade-offs clearly: Increasing sample rate or sample resolution increases audio fidelity/quality, but increases file size and transmission bandwidth requirements.",
          "When calculating file size in bytes, remember to divide the total bits by 8. If asked for KiB or MiB, divide by 1024."
        ],
        commonMistakes: [
          "Forgetting to multiply by the number of audio channels (e.g. multiplying by 2 for stereo sound).",
          "Confusing ASCII (limited to 128/256 characters) with Unicode (universal standard supporting all global writing systems)."
        ],
        recap: [
          "Text uses ASCII (7-bit, 128 characters) or Unicode (16/32-bit universal global character set).",
          "Digital sound requires sampling analogue waves: sample rate (Hz) and sample resolution (bits).",
          "Bitmap images are made of pixels: file size = width * height * colour depth.",
          "Metadata stores image dimensions, colour depth, and creation details."
        ]
      },
      {
        title: "Data Storage Measurement and Compression Methods",
        body:
          "**1. Measurement of Data Storage (Binary vs Denary Prefixes):**\n" +
          "- **Bit ($b$):** Single binary digit (0 or 1).\n" +
          "- **Nibble:** Group of 4 bits.\n" +
          "- **Byte ($B$):** Group of 8 bits.\n" +
          "- **IEC Binary Prefixes (Powers of 2 — Standard in Computer Science):**\n" +
          "  - **Kibibyte (KiB):** $2^{10} = 1,024\\text{ bytes}$\n" +
          "  - **Mebibyte (MiB):** $2^{20} = 1,024\\text{ KiB} = 1,048,576\\text{ bytes}$\n" +
          "  - **Gibibyte (GiB):** $2^{30} = 1,024\\text{ MiB}$\n" +
          "  - **Tebibyte (TiB):** $2^{40} = 1,024\\text{ GiB}$\n" +
          "- **SI Decimal Prefixes (Powers of 10):**\n" +
          "  - Kilobyte (kB) = $1,000\\text{ bytes}$; Megabyte (MB) = $1,000,000\\text{ bytes}$.\n\n" +
          "**2. Why Data Compression is Needed:**\n" +
          "- Reduces storage space required on hard drives and servers.\n" +
          "- Accelerates file upload and download transmission speeds across network connections.\n" +
          "- Reduces network bandwidth consumption and prevents network congestion.\n" +
          "- Enables streaming of high-definition video and audio without buffering.\n\n" +
          "**3. Lossy vs Lossless Compression:**\n" +
          "- **Lossy Compression:**\n" +
          "  - Permanently removes non-essential or redundant data that human sensory organs cannot perceive.\n" +
          "  - *Audio (MP3):* Removes sounds outside normal human hearing range ($20\\text{ Hz}\\,\\text{–}\\,20\\text{ kHz}$) and quieter sounds masked by louder adjacent frequencies (**perceptual acoustic masking**).\n" +
          "  - *Images (JPEG):* Combines pixels of subtle imperceptible shade differences into average blocks (**chroma subsampling**).\n" +
          "  - *Trade-off:* Achieves very high compression ratios (up to $90\\%$ reduction), but the original uncompressed file can **NEVER be reconstructed**.\n" +
          "- **Lossless Compression:**\n" +
          "  - Compresses data by identifying statistical redundancies and patterns without discarding any data.\n" +
          "  - The decompressed file is an **exact, bit-for-bit identical replica** of the original.\n" +
          "  - Essential for text documents, computer programs, executable files (.exe), and financial databases where even a single altered bit would corrupt the entire file.\n" +
          "  - *Technique: Run-Length Encoding (RLE):* Identifies consecutive sequences of identical data values (**runs**) and stores them as a single frequency count and value pair (e.g. `AAAAABBBCCCCCC` $\\rightarrow$ `5A 3B 6C`).",
        examinerTips: [
          "State clearly why lossless compression must be used for executable programs or text documents: any loss of data would alter code syntax and render the program inoperable.",
          "Distinguish between KiB (1024 bytes) and kB (1000 bytes); Cambridge IGCSE Computer Science specifically requires the use of 1024 for binary calculations."
        ],
        commonMistakes: [
          "Claiming that lossy compression can be reversed; lossy compression permanently deletes data.",
          "Applying Run-Length Encoding to data with no repeated adjacent characters; RLE can actually INCREASE file size if data has no repeating patterns."
        ],
        recap: [
          "Storage units follow powers of 2: 1 KiB = 1024 bytes; 1 MiB = 1024 KiB; 1 GiB = 1024 MiB.",
          "Compression reduces file size, saving storage and speeding network transmission.",
          "Lossy permanently discards imperceptible data (JPEG, MP3) for massive file reduction.",
          "Lossless retains all data (RLE, PNG, ZIP) allowing bit-for-bit perfect reconstruction."
        ]
      }
    ]
  },
  {
    number: 2,
    title: "Data Transmission",
    section: "Paper 1: Computer Systems",
    topic: "Packet Switching, Transmission Modes, USB, Error Detection, and Encryption",
    intro:
      "Modern networked society depends on the reliable, high-speed movement of digital data across physical and wireless channels. This chapter examines data packet structures, packet switching, serial versus parallel and simplex versus duplex transmission methods, USB interfaces, hardware and mathematical error detection techniques (parity, checksums, ARQ), and symmetric versus asymmetric encryption.",
    subheadings: [
      {
        title: "Data Packets and Packet Switching",
        body:
          "**1. Structure of a Data Packet:**\n" +
          "Data transmitted across networks (such as the Internet) is split into manageable small units called **packets**. Each packet comprises three distinct structural components:\n" +
          "- **Packet Header:**\n" +
          "  - **Source IP Address:** Identifies the sending computer.\n" +
          "  - **Destination IP Address:** Identifies the receiving device.\n" +
          "  - **Packet Sequence Number:** Ensures packets can be reassembled in the correct order at the destination.\n" +
          "  - **Packet Size:** Indicates the byte length of the payload.\n" +
          "  - **Protocol:** Defines rules for communication (e.g. TCP, UDP).\n" +
          "- **Payload:** The actual raw chunk of data or message being transmitted (typically 1 to 1.5 kilobytes).\n" +
          "- **Packet Trailer:**\n" +
          "  - **Checksum / Cyclic Redundancy Check (CRC):** Mathematical verification code to detect transmission corruption.\n" +
          "  - **End of Packet Marker:** Indicates the physical boundary of the packet.\n\n" +
          "**2. The Process of Packet Switching:**\n" +
          "1. The original message is decomposed into individual numbered data packets.\n" +
          "2. Each packet travels independently across the network through intermediate network devices called **routers**.\n" +
          "3. Routers inspect each packet's destination IP address and consult routing tables to forward the packet along the fastest, least congested path.\n" +
          "4. Packets may take completely different physical routes across the global telecommunication network and arrive at the destination out of chronological order.\n" +
          "5. At the destination computer, the packet sequence numbers are read, and the packets are reassembled into the original file.\n" +
          "6. If any packet is corrupted or missing, an Automatic Repeat Query (ARQ) is sent back to request retransmission.\n\n" +
          "**Advantages of Packet Switching:**\n" +
          "- Highly efficient bandwidth utilization; no dedicated physical circuit is reserved.\n" +
          "- High fault tolerance: if a router or line fails, packets are automatically rerouted around the failure.\n" +
          "- Packets can be rerouted dynamically around network bottlenecks.",
        examinerTips: [
          "List the key items contained in a packet header: sender IP address, receiver IP address, and packet sequence number.",
          "Explain why packets arrive out of order in packet switching: each packet travels independently along the most optimal, least congested path determined by routers."
        ],
        commonMistakes: [
          "Confusing packet switching (dynamic independent packet routing) with circuit switching (dedicated physical line established for the entire call).",
          "Stating that the packet header contains the payload; the payload is separate from the header."
        ],
        recap: [
          "Data packets consist of a Header (IP addresses, sequence number), Payload (data), and Trailer (checksum).",
          "Packet switching routes packets independently across network routers; packets take varied paths and are reassembled at the destination using sequence numbers.",
          "Packet switching is resilient, dynamic, and maximizes line utilization."
        ]
      },
      {
        title: "Transmission Methods, Directions and USB",
        body:
          "**1. Serial vs Parallel Data Transmission:**\n" +
          "- **Serial Transmission:**\n" +
          "  - Data bits are transmitted one at a time sequentially down a **single physical wire or channel**.\n" +
          "  - *Advantages:* Highly reliable over long distances; no risk of bits falling out of synchronization (**skewing**); cheaper cabling with minimal electromagnetic interference (**crosstalk**).\n" +
          "  - *Uses:* USB, SATA, Ethernet, fiber optic cables, long-distance telecommunications.\n" +
          "- **Parallel Transmission:**\n" +
          "  - Multiple bits (e.g. 8 bits / 1 byte) are sent simultaneously across **multiple parallel wires**.\n" +
          "  - *Disadvantages:* Over distances $> 2\\text{ metres}$, bits travel at slightly different speeds due to physical wire resistance, arriving at slightly different times (**data skew**), corrupting the byte; electromagnetic cross-talk between wires induces errors.\n" +
          "  - *Uses:* Short internal connections on motherboards (CPU data bus, RAM buses).\n\n" +
          "**2. Directional Transmission Modes:**\n" +
          "- **Simplex:** Data travels in **one direction only** (e.g. computer to monitor; keyboard to computer; radio broadcast).\n" +
          "- **Half-Duplex:** Data travels in **both directions, but only ONE direction at a time** (e.g. walkie-talkie radio where users must say 'over' before switching; push-to-talk communications).\n" +
          "- **Full-Duplex:** Data travels in **both directions simultaneously** on separate channels (e.g. telephone conversation, broadband internet connection).\n\n" +
          "**3. Universal Serial Bus (USB):**\n" +
          "- An industry-standard asynchronous serial transmission interface connecting peripherals to computers.\n" +
          "- Four-wire cable architecture: two wires carry differential serial data ($D+$ and $D-$), one wire provides $+5\\text{V}$ power, and one provides electrical ground.\n" +
          "- **Benefits of USB:**\n" +
          "  1. Automatically detects connected devices and downloads required device drivers (**Plug and Play**).\n" +
          "  2. Connectors are physically keyed, preventing incorrect orientation insertion.\n" +
          "  3. Carries dedicated direct electrical power, eliminating separate mains power bricks for small peripherals (mice, keyboards, flash drives).\n" +
          "  4. Supports backward compatibility across standard revisions (USB 2.0, 3.0, USB-C).\n" +
          "  5. Employs robust serial transmission with built-in error checking.",
        examinerTips: [
          "In questions contrasting serial and parallel transmission, explain 'data skew': in parallel transmission, bits travel along separate wires at slightly different speeds and arrive out of alignment, causing errors over long distances.",
          "Distinguish clearly between half-duplex (two-way, but only one direction at a time) and full-duplex (two-way simultaneously)."
        ],
        commonMistakes: [
          "Assuming parallel is always faster and better than serial; modern high-speed interfaces (USB 3.0, PCIe) use serial because it eliminates skew and cross-talk.",
          "Confusing simplex (one-way only) with half-duplex."
        ],
        recap: [
          "Serial sends bits sequentially along one wire (reliable, long distance, no skew).",
          "Parallel sends multiple bits simultaneously across multiple wires (short distance only due to data skew).",
          "Directional modes: Simplex (one direction), Half-duplex (both directions alternately), Full-duplex (both directions simultaneously).",
          "USB provides plug-and-play, power delivery, keyed connectors, and universal compatibility."
        ]
      },
      {
        title: "Methods of Error Detection: Parity, Checksum, Echo and ARQ",
        body:
          "During data transmission, electrical noise, power surges, or magnetic interference can flip binary bits ($0 \\rightarrow 1$ or $1 \\rightarrow 0$). Error detection mechanisms identify when transmitted data has been corrupted.\n\n" +
          "**1. Parity Checks (Odd and Even Parity):**\n" +
          "- An allocated 8th bit (**parity bit**) is appended to a 7-bit binary byte before transmission.\n" +
          "- **Even Parity:** The parity bit is set to 0 or 1 so that the total number of 1s in the 8-bit byte is **EVEN**.\n" +
          "  - *Example:* Data `1101001` has four 1s (already even); parity bit = `0` $\\rightarrow$ `01101001`.\n" +
          "- **Odd Parity:** The parity bit is set so that the total number of 1s is **ODD**.\n" +
          "  - *Example:* Data `1101001` has four 1s; parity bit = `1` $\\rightarrow$ `11101001` (five 1s).\n" +
          "- *The Parity Limitation:* If **two bits flip simultaneously** (e.g. two 0s become 1s), the total count of 1s retains the same parity, and the corruption passes **completely undetected**.\n" +
          "- **Parity Block / Parity Matrix:** Bytes are arranged in horizontal rows and vertical columns with both horizontal and vertical parity bits. By cross-referencing which row and column have parity errors, the receiver can identify the exact bit that flipped and **correct it automatically** without retransmission.\n\n" +
          "**2. Checksums:**\n" +
          "- A block of data is processed through a mathematical hashing algorithm before transmission, calculating a numerical checksum value (e.g. 16 or 32 bits).\n" +
          "- The checksum is appended to the data packet trailer.\n" +
          "- Upon receipt, the receiver runs the identical algorithm on the incoming data block and compares the generated checksum with the transmitted checksum.\n" +
          "- If the two checksum values match, the data is accepted; if they differ, corruption has occurred, and retransmission is requested.\n\n" +
          "**3. Check Digits:**\n" +
          "- A calculated final digit appended to numerical identification codes (e.g. ISBN book numbers, barcodes, account numbers).\n" +
          "- Detects human data-entry errors: incorrect digits, omitted digits, extra digits, or **transposition errors** (swapping two adjacent numbers, e.g. typing 43 instead of 34).\n" +
          "- Calculated using algorithms such as **Modulo 10** or **Modulo 11**.\n\n" +
          "**4. Automatic Repeat Query (ARQ):**\n" +
          "- An error control protocol that uses **acknowledgements** and **timeouts**:\n" +
          "  1. The sending computer transmits a data packet and simultaneously starts an internal **timeout countdown timer**.\n" +
          "  2. If the receiving computer receives the packet intact with no errors, it returns a **Positive Acknowledgement (ACK)**.\n" +
          "  3. If the receiver detects an error, it returns a **Negative Acknowledgement (NAK)**, prompting the sender to retransmit immediately.\n" +
          "  4. If the timer expires (**timeout**) before an ACK is received (e.g. the packet or ACK was lost in transit), the sender automatically retransmits the packet until an ACK arrives or a maximum retry limit is reached.",
        examinerTips: [
          "State the fundamental limitation of a simple parity check: if an even number of bits (e.g. 2 bits) flip during transmission, the parity remains correct and the error goes undetected.",
          "Explain the key components of an ARQ protocol: positive acknowledgement (ACK), negative acknowledgement (NAK), and timeout timer."
        ],
        commonMistakes: [
          "Confusing parity check (which detects errors) with parity block (which can both detect AND correct the single flipped bit).",
          "Believing a check digit is used during data transmission; check digits are specifically used to detect human data-entry errors on barcodes and ISBNs."
        ],
        recap: [
          "Parity checks add a bit to ensure an odd or even count of 1s (fails if 2 bits flip).",
          "Parity blocks use horizontal and vertical checks to pinpoint and correct flipped bits.",
          "Checksums run a mathematical algorithm on data blocks to verify integrity.",
          "Check digits detect human transcription/transposition errors on barcodes/ISBNs.",
          "ARQ uses acknowledgements (ACK/NAK) and timeouts to trigger automatic retransmission."
        ]
      },
      {
        title: "Symmetric and Asymmetric Encryption",
        body:
          "**1. What is Encryption?**\n" +
          "Encryption is the mathematical process of encoding plain readable text (**plaintext**) into an unreadable scrambled format (**ciphertext**) using an encryption algorithm and key, ensuring data confidentiality if intercepted.\n\n" +
          "**2. Symmetric Encryption:**\n" +
          "- Uses a **single, shared secret key** to both encrypt plaintext and decrypt ciphertext.\n" +
          "- *Advantage:* Highly efficient and computationally fast; ideal for encrypting large volumes of stored data (e.g. full-disk encryption with AES-256).\n" +
          "- *The Key Distribution Problem:* The secret key must be transferred between sender and receiver over a network. If an eavesdropper intercepts the key during transmission, they can decrypt all future intercepted messages.\n\n" +
          "**3. Asymmetric Encryption (Public-Key Cryptography):**\n" +
          "- Overcomes the key distribution problem by using a mathematically linked **key pair**:\n" +
          "  - **Public Key:** Freely published and accessible to anyone; used by senders to **encrypt** messages.\n" +
          "  - **Private Key:** Kept secret and secure by the receiver; used exclusively to **decrypt** messages.\n" +
          "- *The Asymmetric Process:*\n" +
          "  1. Sender obtains receiver's freely available **Public Key**.\n" +
          "  2. Sender encrypts plaintext using the receiver's Public Key, creating ciphertext.\n" +
          "  3. Once encrypted, the ciphertext **CANNOT be decrypted by the Public Key** (even by the sender who created it).\n" +
          "  4. The ciphertext travels across the insecure network.\n" +
          "  5. The receiver decrypts the ciphertext using their matching **Private Key**.\n" +
          "- *Uses:* SSL/TLS digital handshakes on HTTPS websites, digital signatures, SSH authentication.",
        examinerTips: [
          "Remember which key is used: to send a secret message to Sarah, you encrypt using SARAH'S PUBLIC KEY; only Sarah can decrypt it using HER PRIVATE KEY.",
          "Explain the key distribution problem of symmetric encryption: transferring the shared secret key over an insecure channel risks interception."
        ],
        commonMistakes: [
          "Claiming that the private key is shared between both parties; the private key is NEVER shared and stays on the owner's machine.",
          "Confusing plaintext (unencrypted readable text) with ciphertext (scrambled encrypted text)."
        ],
        recap: [
          "Encryption turns plaintext into scrambled ciphertext.",
          "Symmetric encryption uses one shared secret key for encryption and decryption (fast, but has key distribution risk).",
          "Asymmetric encryption uses a mathematically linked key pair: Public Key (encrypts) and Private Key (decrypts).",
          "Asymmetric encryption powers secure internet communications (SSL/TLS, HTTPS)."
        ]
      }
    ]
  },
  {
    number: 3,
    title: "Hardware",
    section: "Paper 1: Computer Systems",
    topic: "Computer Architecture, Von Neumann Model, Fetch-Decode-Execute Cycle, Input/Output, and Storage",
    intro:
      "Hardware comprises the physical electronic components and mechanical devices of a computer system. This chapter examines the Central Processing Unit (CPU) based on the Von Neumann architecture, registers, buses, the Fetch-Decode-Execute (FDE) cycle, core factors affecting CPU performance, input and output sensors/actuators, and magnetic, optical, and solid-state primary and secondary storage technologies.",
    subheadings: [
      {
        title: "The Von Neumann CPU Architecture and the FDE Cycle",
        body:
          "**1. The Von Neumann Architecture Model:**\n" +
          "The foundational design of modern digital computers, where both program instructions and data are stored together in the same shared read-write memory (**Main Memory / RAM**).\n" +
          "- **Core Internal Components of the CPU:**\n" +
          "  - **Control Unit (CU):** Directs and synchronizes all hardware operations; manages the Fetch-Decode-Execute cycle; sends control signals to buses.\n" +
          "  - **Arithmetic Logic Unit (ALU):** Performs mathematical arithmetic calculations ($+, -, \\times, \\div$) and logical decisions (Boolean `AND`, `OR`, `NOT`, and comparisons $<, >, =$).\n" +
          "  - **System Clock:** Generates continuous quartz crystal oscillating electrical pulses to synchronize CPU operations.\n" +
          "- **Special-Purpose CPU Registers (High-Speed On-Chip Memory):**\n" +
          "  - **Program Counter (PC):** Holds the memory address of the **next** instruction to be fetched from RAM.\n" +
          "  - **Memory Address Register (MAR):** Holds the address of the memory location currently being read from or written to.\n" +
          "  - **Memory Data Register (MDR):** Holds the data or instruction fetched from memory, or awaiting storage into memory.\n" +
          "  - **Current Instruction Register (CIR):** Holds the instruction currently being decoded and executed by the CU.\n" +
          "  - **Accumulator (ACC):** Temporarily stores the intermediate results of calculations performed by the ALU.\n\n" +
          "**2. The System Buses (Physical Connections):**\n" +
          "- **Address Bus:** Unidirectional; carries memory addresses from CPU to RAM.\n" +
          "- **Data Bus:** Bidirectional; carries data and instructions between CPU, RAM, and I/O devices.\n" +
          "- **Control Bus:** Bidirectional; carries control and timing signals (e.g. Memory Read, Memory Write, Bus Grant, Clock Pulses).\n\n" +
          "**3. The Fetch-Decode-Execute (FDE) Cycle:**\n" +
          "1. **Fetch:**\n" +
          "   - The address in the **PC** is copied into the **MAR** via the internal address bus.\n" +
          "   - The PC is incremented by 1 to point to the next instruction.\n" +
          "   - A 'Memory Read' signal is sent via the control bus.\n" +
          "   - The instruction at that address in RAM is transferred via the data bus into the **MDR**.\n" +
          "   - The instruction in the MDR is copied into the **CIR**.\n" +
          "2. **Decode:**\n" +
          "   - The Control Unit decodes the opcode and operands of the instruction held in the **CIR**.\n" +
          "3. **Execute:**\n" +
          "   - The decoded instruction is carried out (e.g. ALU executes arithmetic, data is loaded/stored, or branching occurs).\n\n" +
          "**4. Factors Affecting CPU Performance:**\n" +
          "- **Clock Speed (GHz):** Number of clock cycles per second. Higher clock speed = more FDE cycles executed per second.\n" +
          "- **Number of Cores:** Multiple independent CPUs on a single chip; enables parallel processing, but depends on software multithreading.\n" +
          "- **Cache Size:** Extremely fast SRAM located on CPU die; stores frequently used instructions, eliminating slow RAM fetch latency.",
        examinerTips: [
          "Memorize the exact register sequence of the fetch stage: PC -> MAR -> RAM -> MDR -> CIR, while PC increments by 1.",
          "State bus directions accurately: Address bus is UNIDIRECTIONAL (CPU to memory); Data bus and Control bus are BIDIRECTIONAL."
        ],
        commonMistakes: [
          "Confusing MAR (stores memory ADDRESS) with MDR (stores actual DATA/INSTRUCTION).",
          "Assuming doubling CPU cores automatically doubles computer speed; software must be written to support parallel multithreading, and cache contention creates overhead."
        ],
        recap: [
          "Von Neumann architecture stores instructions and data together in RAM.",
          "Registers: PC (next address), MAR (memory address), MDR (memory data), CIR (current instruction), ACC (calculation results).",
          "Buses: Address bus (unidirectional), Data bus (bidirectional), Control bus (bidirectional).",
          "FDE cycle: Fetch instruction from RAM, Decode in CU, Execute via ALU/control signals.",
          "Performance depends on clock speed, number of cores, and cache size."
        ]
      },
      {
        title: "Input Devices, Output Devices and Sensors",
        body:
          "**1. Input Devices:**\n" +
          "- **Barcode & QR Code Scanners:** Red LED/laser shines across alternating black/white modules; white bars reflect light, black bars absorb it; light sensors convert reflections into binary signals. QR codes hold significantly more data in a 2D matrix with built-in error correction.\n" +
          "- **Digital Cameras:** Light passes through a lens onto a Charge-Coupled Device (CCD) or CMOS sensor array containing millions of photodiodes; light intensity is converted into electrical charges, digitized by ADC into RGB pixel values.\n" +
          "- **Touchscreens:**\n" +
          "  - **Capacitive:** Glass screen with conductive transparent electrode layer; touching draws a minute electrical charge at the contact point; electrostatic sensors calculate coordinates; supports multi-touch, but requires bare skin or conductive stylus.\n" +
          "  - **Resistive:** Flexible upper polyester layer separated by micro-dots from a lower glass layer; finger pressure pushes layers together, completing an electrical circuit; cheap, works with gloves/stylus, but does not support multi-touch.\n\n" +
          "**2. Sensors and Automated Control Systems:**\n" +
          "- A sensor is a transducer that measures physical analogue environmental variables and converts them into proportional electrical signals (analogue signals are converted to digital via an **ADC**).\n" +
          "- **Common Sensors:** Temperature (thermistor), Light (LDR), Pressure (piezoelectric), Moisture/Humidity, pH, Motion (PIR), Acoustic (microphone), Proximity (ultrasonic).\n" +
          "- **Actuators:** Mechanical electromechanical output transducers (motors, solenoids, valves, relays, pumps) that produce physical motion based on digital control signals from the microprocessor.",
        examinerTips: [
          "In examination questions describing sensor control systems, remember to state that the sensor produces an ANALOGUE signal, which must be converted to DIGITAL by an ADC before the microprocessor can process it.",
          "Explain that the microprocessor compares sensor readings against stored parameter thresholds and signals an ACTUATOR to take physical action."
        ],
        commonMistakes: [
          "Stating that the sensor turns on the motor directly; the sensor only sends data to the microprocessor, which makes the decision and signals the actuator.",
          "Confusing capacitive touchscreens (requires conductive touch) with resistive touchscreens (relies on physical pressure)."
        ],
        recap: [
          "Input devices convert real-world data into digital signals (barcodes, cameras, touchscreens).",
          "Sensors measure analogue physical properties; an ADC converts them to digital data for the microprocessor.",
          "Microprocessors compare data to thresholds and trigger actuators (motors, valves) to perform physical actions."
        ]
      },
      {
        title: "Primary, Secondary and Virtual Storage",
        body:
          "**1. Primary Storage (Directly Accessible by the CPU):**\n" +
          "- **RAM (Random Access Memory):**\n" +
          "  - **Volatile:** Loses all contents instantly when electrical power is switched off.\n" +
          "  - Read and write memory; holds the currently running operating system, active applications, and user data.\n" +
          "  - Types: **DRAM (Dynamic RAM)** uses capacitors/transistors, requires constant refreshing; **SRAM (Static RAM)** uses flip-flops, faster, used for CPU cache.\n" +
          "- **ROM (Read Only Memory):**\n" +
          "  - **Non-volatile:** Retains contents permanently without electrical power.\n" +
          "  - Read-only; factory programmed; stores the **BIOS (Basic Input/Output System) / UEFI** and bootstrap loader that boots the computer.\n\n" +
          "**2. Secondary Storage (Non-Volatile Long-Term Storage):**\n" +
          "Not directly addressable by the CPU; stores files, programs, and OS permanently.\n" +
          "- **Magnetic Storage (Hard Disk Drives - HDD):**\n" +
          "  - Rotating platters coated in ferromagnetic material; read/write heads magnetize microscopic regions representing 1s and 0s.\n" +
          "  - *Pros/Cons:* High capacity at low cost; slow access times, vulnerable to mechanical shock/vibration damage from moving parts.\n" +
          "- **Solid-State Storage (SSD / Flash Drives):**\n" +
          "  - Uses **NAND flash memory** with floating-gate transistors; electrical charges trap electrons in floating gates to record binary states.\n" +
          "  - *Pros/Cons:* Extremely fast read/write speeds, silent, low power, highly robust with zero moving parts; higher cost per gigabyte, finite write-cycle lifespan.\n" +
          "- **Optical Storage (CD, DVD, Blu-ray):**\n" +
          "  - Polycarbonate disc with a single continuous spiral track of microscopic **pits and lands**.\n" +
          "  - Laser shines on track: lands reflect light into photodiode (1), pits scatter light (0).\n" +
          "  - Capacities: CD ($700\\text{ MB}$), DVD ($4.7\\text{ GB}$), Blu-ray ($25\\text{–}50\\text{ GB}$ using short-wavelength blue-violet laser).\n\n" +
          "**3. Virtual Memory:**\n" +
          "- When physical RAM becomes full, the operating system allocates a reserved section of the secondary storage (HDD/SSD) to act as temporary **Virtual Memory**.\n" +
          "- Inactive pages of memory are moved from RAM to virtual memory (**paging out**). When needed, they are swapped back into RAM (**paging in**).\n" +
          "- *Drawback (Disk Thrashing):* Secondary storage is thousands of times slower than physical RAM; excessive paging causes the system to freeze as it spends all CPU time swapping data between RAM and disk.",
        examinerTips: [
          "Memorize the distinction between RAM and ROM: RAM is volatile, read/write, and holds open programs; ROM is non-volatile, read-only, and holds bootstrap/BIOS instructions.",
          "Explain why SSDs are superior to HDDs in mobile laptops: SSDs have no moving parts, making them immune to mechanical shock, quieter, and faster with lower battery consumption."
        ],
        commonMistakes: [
          "Calling ROM 'secondary storage'; ROM is primary memory directly wired to the CPU address bus.",
          "Assuming virtual memory increases CPU speed; virtual memory prevents crashes when RAM is exhausted, but actually slows down performance."
        ],
        recap: [
          "Primary storage is directly accessible by the CPU: RAM (volatile read/write) and ROM (non-volatile bootstrap loader).",
          "Secondary storage: Magnetic (HDD, spinning platters), Solid-state (SSD, NAND flash, no moving parts), Optical (CD/DVD, laser pits/lands).",
          "Virtual memory uses secondary storage as overflow when RAM is full, but causes thrashing if overused."
        ]
      }
    ]
  },
  {
    number: 4,
    title: "Software",
    section: "Paper 1: Computer Systems",
    topic: "System Software, Operating Systems, Interrupts, and Language Translators",
    intro:
      "Software consists of the programs and instructions that command computer hardware to perform operations. This chapter examines the distinction between system software and application software, hardware interrupts, the multifaceted functions of modern operating systems, high-level versus low-level programming languages, and language translators (compilers, interpreters, and assemblers).",
    subheadings: [
      {
        title: "System Software, Application Software and Interrupts",
        body:
          "**1. System Software vs Application Software:**\n" +
          "- **System Software:**\n" +
          "  - Low-level programs designed to run, manage, maintain, and control computer hardware and core platform operations.\n" +
          "  - Operates in the background; transparent to general end-users.\n" +
          "  - *Examples:* Operating systems (Windows, Linux, macOS), device drivers, utility software (antivirus, disk defragmenter, backup tools), firmware.\n" +
          "- **Application Software:**\n" +
          "  - Programs designed to enable the end-user to perform specific functional, creative, or productive tasks.\n" +
          "  - Executes on top of system software.\n" +
          "  - *Examples:* Word processors, web browsers, database management systems, spreadsheet software, computer games, graphic design packages.\n\n" +
          "**2. Hardware and Software Interrupts:**\n" +
          "- An **interrupt** is an electrical hardware signal or software instruction sent to the CPU that temporarily suspends the current program execution to handle an urgent event.\n" +
          "- **Hardware Interrupts:** Generated by physical hardware devices (e.g. key pressed on keyboard; printer running out of paper; mouse moved; hardware clock tick).\n" +
          "- **Software Interrupts:** Generated by executing programs (e.g. division by zero error; array index out of bounds; request for I/O disk access).\n" +
          "- **The Interrupt Handling Sequence:**\n" +
          "  1. An interrupt signal is received by the CPU.\n" +
          "  2. The CPU completes its current FDE instruction cycle.\n" +
          "  3. The CPU checks the priority of the incoming interrupt against its current task.\n" +
          "  4. If higher priority: the current contents of all registers (PC, CIR, ACC) are saved onto the **system stack** in memory.\n" +
          "  5. The Program Counter is loaded with the memory address of the specific **Interrupt Service Routine (ISR)**.\n" +
          "  6. The CPU executes the ISR to service the event.\n" +
          "  7. Once the ISR finishes, the saved register states are restored from the stack back into the CPU registers.\n" +
          "  8. The CPU resumes executing the interrupted program exactly where it left off.",
        examinerTips: [
          "List the exact steps of interrupt handling: complete current instruction -> save register state to stack -> load ISR address into PC -> execute ISR -> restore registers from stack -> resume program.",
          "Distinguish clearly between system software (manages hardware, e.g. OS, drivers) and application software (enables user tasks, e.g. web browser, word processor)."
        ],
        commonMistakes: [
          "Assuming the CPU immediately stops mid-instruction when an interrupt arrives; the CPU always finishes the current instruction before branching to the ISR.",
          "Forgetting that register values must be saved to the stack so the CPU can resume the original program accurately."
        ],
        recap: [
          "System software manages hardware (OS, drivers, utilities); Application software performs user tasks.",
          "Interrupts signal the CPU to pause execution for urgent events (hardware signals or software exceptions).",
          "Interrupt handling: finish instruction -> save registers to stack -> execute ISR -> restore registers -> resume."
        ]
      },
      {
        title: "Functions of the Operating System",
        body:
          "The **Operating System (OS)** is the core system software suite that manages hardware resources and provides a platform for application software.\n\n" +
          "**Core Functions of an Operating System:**\n" +
          "1. **Human-Computer Interface (HCI):**\n" +
          "   - **Graphical User Interface (GUI):** Features WIMP elements (Windows, Icons, Menus, Pointers); visual, intuitive for non-technical users, but resource-intensive.\n" +
          "   - **Command Line Interface (CLI):** User types text commands; extremely fast, minimal memory footprint, allows powerful scripting, but requires memorizing complex syntax.\n" +
          "2. **Memory Management:** Allocates RAM blocks to running applications; tracks free memory; enforces memory protection so applications do not overwrite each other's data; manages virtual memory paging.\n" +
          "3. **Processor Scheduling / Multitasking:** Schedules which processes run on the CPU cores; allocates time slices to ensure fair CPU utilization; handles process priority queues.\n" +
          "4. **Peripheral and Device Driver Management:** Communicates with hardware peripherals via dedicated **device drivers** (software that translates generic OS commands into hardware-specific signals); manages print spoolers and input buffers.\n" +
          "5. **File Management:** Manages hierarchical folder structures on secondary storage; handles file permissions (read, write, execute); allocates storage clusters via file systems (NTFS, FAT32, ext4).\n" +
          "6. **Security and Access Control:** Manages user accounts, passwords, biometric logins, and file encryption; isolates processes to prevent unauthorized access.",
        examinerTips: [
          "Contrast GUI and CLI on speed, memory usage, and user expertise: CLI uses minimal memory and is faster for experts to script; GUI is intuitive for beginners but consumes significant RAM and GPU power.",
          "Define the role of a device driver: a specialized program that enables the operating system to communicate with and control a specific piece of hardware."
        ],
        commonMistakes: [
          "Confusing the operating system with the computer hardware or CPU.",
          "Believing multitasking means a single CPU core runs multiple instructions at the exact same picosecond; a single core rapidly switches between processes using time slices."
        ],
        recap: [
          "OS functions: User interface (GUI/CLI), memory management, processor scheduling, peripheral device driver management, file systems, and security.",
          "GUI uses WIMP; CLI uses typed commands.",
          "Device drivers translate OS commands into hardware-specific signals."
        ]
      },
      {
        title: "Programming Languages, Compilers, Interpreters and Assemblers",
        body:
          "**1. High-Level vs Low-Level Programming Languages:**\n" +
          "- **High-Level Languages (Python, Java, C++, Visual Basic):**\n" +
          "  - Use English-like keywords (`if`, `while`, `print`) and mathematical notation.\n" +
          "  - **Machine-independent:** Portable; runs on different CPU architectures without rewriting source code.\n" +
          "  - Fast and easy to write, debug, and maintain; features abstract data structures.\n" +
          "- **Low-Level Languages (Assembly Language and Machine Code):**\n" +
          "  - **Machine Code:** Raw binary instructions ($1$s and $0$s) directly executable by the CPU hardware; impossible for humans to read/debug effectively.\n" +
          "  - **Assembly Language:** Uses short mnemonic codes (`LDA`, `ADD`, `STO`, `INP`) representing specific machine code instructions.\n" +
          "  - **Machine-dependent:** Written specifically for a single processor architecture (ARM, x86).\n" +
          "  - *Uses:* Embedded systems, device drivers, real-time control where direct register manipulation and maximum execution speed are required.\n\n" +
          "**2. Language Translators:**\n" +
          "The CPU can ONLY execute raw binary machine code. All source code written in assembly or high-level languages must be translated.\n" +
          "- **Assembler:** Translates low-level **Assembly Language** source code directly into executable machine code (one assembly mnemonic typically maps to one machine code instruction).\n" +
          "- **Compiler:**\n" +
          "  - Translates the **entire high-level source code program in one go** into standalone executable machine code file (`.exe`).\n" +
          "  - Produces an error report listing all syntax errors after analyzing the whole file.\n" +
          "  - *Advantages:* Executable runs independently without needing the original source code or compiler; execution speed is very fast; intellectual property protected.\n" +
          "  - *Disadvantage:* Debugging is slower during development as the entire program must recompile after each fix.\n" +
          "- **Interpreter:**\n" +
          "  - Translates and executes high-level source code **line by line** in real time.\n" +
          "  - Halts execution immediately upon encountering the first syntax error, highlighting the exact offending line.\n" +
          "  - *Advantages:* Ideal for debugging and prototyping during software development.\n" +
          "  - *Disadvantages:* Slower execution because code must be re-translated every time it runs (e.g. loops re-interpreted on every iteration); requires the interpreter installed on the client machine; source code is exposed.",
        examinerTips: [
          "In examination comparison questions between compilers and interpreters, structure your points into: translation method, error reporting, execution speed, and distribution.",
          "State clearly that an assembler translates ASSEMBLY LANGUAGE into machine code, while compilers and interpreters translate HIGH-LEVEL LANGUAGES into machine code."
        ],
        commonMistakes: [
          "Calling an interpreter a compiler; compilers produce standalone .exe files, whereas interpreters translate and run line-by-line without saving an executable.",
          "Stating that high-level code executes faster than low-level code; low-level machine code executes faster because it requires no translation and directly manipulates hardware."
        ],
        recap: [
          "High-level languages are portable, English-like, and easy to maintain; Low-level languages (Assembly, Machine Code) are processor-specific and allow direct hardware manipulation.",
          "Assemblers translate Assembly mnemonics to machine code.",
          "Compilers translate entire programs into standalone .exe files (fast execution, error report at end).",
          "Interpreters translate line by line (slower execution, immediate error halts, ideal for debugging)."
        ]
      }
    ]
  },
  {
    number: 5,
    title: "The Internet and its Uses",
    section: "Paper 1: Computer Systems",
    topic: "Internet Architecture, Web Protocols, Digital Currency, and Cyber Security",
    intro:
      "The Internet is the global interconnection of computer networks, while the World Wide Web is an information service operating across this infrastructure. This chapter examines internet routing, IP and MAC addressing, URLs, DNS resolution, HTTP/HTTPS protocols, blockchain and digital currency, cyber security threats (malware, phishing, DoS, brute force), and automated software/hardware defence countermeasures.",
    subheadings: [
      {
        title: "Internet Infrastructure, Addressing and Protocols",
        body:
          "**1. The Internet vs The World Wide Web (WWW):**\n" +
          "- **The Internet:** The worldwide physical infrastructure of interconnected computer networks, undersea fiber-optic cables, routers, satellites, and telecommunication switches.\n" +
          "- **The World Wide Web (WWW):** A collection of multimedia web pages and digital documents stored on web servers accessible over the Internet using the **HTTP/HTTPS** protocol.\n\n" +
          "**2. IP Addresses vs MAC Addresses:**\n" +
          "- **IP Address (Internet Protocol Address):**\n" +
          "  - Logical network address assigned dynamically by a network router via DHCP or set statically.\n" +
          "  - Identifies a device's current location on a network; changes when moving to a different Wi-Fi network.\n" +
          "  - **IPv4:** 32-bit address written as four denary numbers ($0\\text{–}255$) separated by dots (e.g. `192.168.1.1`). Yields $2^{32} \\approx 4.3\\text{ billion}$ unique addresses (now exhausted).\n" +
          "  - **IPv6:** 128-bit address written as 8 groups of 4 hexadecimal digits separated by colons (e.g. `2001:0db8:85a3::8a2e:0370:7334`). Yields $2^{128}$ addresses, ensuring virtually unlimited global address space.\n" +
          "- **MAC Address (Media Access Control Address):**\n" +
          "  - Unique physical hardware address hardcoded into the device's **Network Interface Card (NIC)** during manufacturing.\n" +
          "  - Composed of 48 bits (6 pairs of hexadecimal digits, e.g. `00:1A:2B:3C:4D:5E`); first 3 pairs identify the manufacturer (OUI), second 3 pairs identify the unique serial number.\n" +
          "  - Permanent physical address that **never changes** regardless of network location.\n\n" +
          "**3. Uniform Resource Locators (URLs) and the Domain Name System (DNS):**\n" +
          "- **URL Structure (e.g. `https://www.cambridge.org/igcse/index.html`):**\n" +
          "  - **Protocol:** `https://` (Hypertext Transfer Protocol Secure).\n" +
          "  - **Domain Name:** `www.cambridge.org` (human-readable host address).\n" +
          "  - **Resource Path & Filename:** `/igcse/index.html` (location of file on web server).\n" +
          "- **The DNS Lookup Process:**\n" +
          "  1. User types domain name (`www.example.com`) into browser address bar.\n" +
          "  2. Browser queries local cache, then forwards request to a **DNS Server**.\n" +
          "  3. The DNS server searches its database mapping domain names to numerical IP addresses.\n" +
          "  4. If found, the DNS server returns the corresponding IP address (e.g. `93.184.216.34`) to the browser.\n" +
          "  5. The browser uses the IP address to connect directly to the destination web server via TCP/IP.\n\n" +
          "**4. HTTP and HTTPS (Hypertext Transfer Protocol Secure):**\n" +
          "- **HTTP:** Unencrypted protocol; data transmitted in clear text across the internet; vulnerable to interception by packet sniffers.\n" +
          "- **HTTPS:** Encrypts web traffic using **SSL (Secure Sockets Layer) / TLS (Transport Layer Security)**.\n" +
          "- *The SSL/TLS Handshake:*\n" +
          "  1. Browser requests secure connection to web server.\n" +
          "  2. Server returns its **Digital Certificate** containing its **Public Key** signed by a trusted Certificate Authority (CA).\n" +
          "  3. Browser validates the certificate authenticity.\n" +
          "  4. Browser generates a temporary symmetric session key, encrypts it with the server's public key, and sends it back.\n" +
          "  5. Server decrypts the session key using its secret **Private Key**.\n" +
          "  6. All subsequent web communication is encrypted using this fast symmetric session key.",
        examinerTips: [
          "Distinguish clearly between MAC addresses (physical, permanent, assigned by manufacturer) and IP addresses (logical, dynamic, assigned by network router).",
          "Explain the role of DNS: it translates human-friendly domain names into machine-readable IP addresses."
        ],
        commonMistakes: [
          "Believing the Internet and World Wide Web are synonyms; the Internet is the physical network infrastructure, while the Web is an application service running on it.",
          "Claiming an IP address is permanent; a device's IP address changes whenever it connects to a different network."
        ],
        recap: [
          "The Internet is the global network hardware; WWW is the hyperlinked multimedia service running on it.",
          "MAC addresses are permanent physical hardware IDs (48-bit hex); IP addresses are logical network addresses (IPv4 32-bit, IPv6 128-bit).",
          "DNS servers resolve domain names into numerical IP addresses.",
          "HTTPS encrypts data using SSL/TLS handshakes, authenticating servers with digital certificates."
        ]
      },
      {
        title: "Digital Currencies and Blockchain Technology",
        body:
          "**1. What is Digital Currency?**\n" +
          "A medium of exchange that exists exclusively in electronic digital format without physical banknotes or minted coins. Includes central bank digital currencies (CBDCs) and decentralized cryptocurrencies (e.g. Bitcoin, Ethereum).\n\n" +
          "**2. Blockchain Architecture:**\n" +
          "A decentralized, distributed, public digital ledger that chronologically records transactions across a peer-to-peer network of computers.\n" +
          "- **Structure of a Block in a Blockchain:**\n" +
          "  - **Transaction Data:** Sender, recipient, amount, timestamp.\n" +
          "  - **Hash Value:** A unique fixed-length cryptographic hash calculated from the block's contents (acting like a digital fingerprint).\n" +
          "  - **Previous Hash:** The cryptographic hash of the immediately preceding block in the chain.\n" +
          "- **Why Blockchain is Tamper-Proof and Immutable:**\n" +
          "  - Because each block contains the **hash of the previous block**, altering transaction data in one block instantly changes its hash.\n" +
          "  - This breaks the cryptographic link to all subsequent blocks in the chain, rendering them invalid.\n" +
          "  - A fraudulent transaction is rejected by the distributed consensus of peer nodes (**Proof of Work / Proof of Stake**).\n\n" +
          "**3. Advantages and Disadvantages of Digital Currency:**\n" +
          "- *Advantages:* Eliminates banking intermediary transaction fees; enables instantaneous cross-border remittances; protects against hyperinflation in unstable economies; impossible to physically counterfeit.\n" +
          "- *Disadvantages:* Extreme exchange price volatility; massive electrical energy consumption of Proof-of-Work mining; risk of total asset loss if private cryptographic wallet keys are lost; potential exploitation for illicit transactions or ransomware extortion.",
        examinerTips: [
          "Explain why blockchain records cannot be altered: each block contains the cryptographic hash of the previous block, so changing one block alters its hash and breaks the entire chain across the distributed network.",
          "Contrast centralized digital currencies (issued and regulated by a central government bank) with decentralized cryptocurrencies (peer-to-peer blockchain without central authority)."
        ],
        commonMistakes: [
          "Believing blockchain is only used for cryptocurrency; blockchain is used for supply chain tracking, medical records, smart contracts, and voting.",
          "Thinking cryptocurrency is anonymous; most public blockchains are pseudonymous, with all transaction histories publicly inspectable."
        ],
        recap: [
          "Digital currencies exist only electronically.",
          "Blockchain is a decentralized distributed ledger where each block contains transaction data, its own hash, and the previous block's hash.",
          "Immutability is ensured because tampering with one block invalidates all subsequent hashes across the distributed network.",
          "Benefits: low fees, fast global transfers; Drawbacks: price volatility, lost private keys, high mining energy."
        ]
      },
      {
        title: "Cyber Security Threats and Automated Countermeasures",
        body:
          "**1. Cyber Security Threats:**\n" +
          "- **Malware (Malicious Software):**\n" +
          "  - **Virus:** Replicates by attaching malicious code to legitimate host executable files; requires human action to execute.\n" +
          "  - **Worm:** Standalone self-replicating malware that spreads across networks automatically exploiting vulnerabilities without human intervention, consuming bandwidth.\n" +
          "  - **Trojan Horse:** Malware disguised as useful, legitimate software (e.g. a free game) that secretly installs backdoors.\n" +
          "  - **Spyware:** Secretly monitors user activity (web browsing history, credentials) without consent.\n" +
          "  - **Keylogger:** Hardware device or software logging every physical keystroke to steal passwords and credit card numbers.\n" +
          "  - **Ransomware:** Encrypts user files with military-grade encryption and demands cryptocurrency ransom payment for the private decryption key.\n" +
          "- **Social Engineering:**\n" +
          "  - **Phishing:** Fraudulent mass emails masquerading as reputable organizations (banks) directing victims to fake websites to harvest credentials.\n" +
          "  - **Pharming:** Malicious code installed on a user's computer or poisoning DNS servers, automatically redirecting legitimate URL requests to fraudulent impostor websites even when the user types the correct URL.\n" +
          "- **Network Attacks:**\n" +
          "  - **Denial of Service (DoS) & Distributed DoS (DDoS):** Flooding a web server with millions of fake service requests using a global network of infected computers (**botnet**), overwhelming server bandwidth/CPU, crashing the service.\n" +
          "  - **Brute-Force Attack:** Automated software systematically testing every possible password combination until the correct one is discovered.\n" +
          "\n" +
          "**2. Security Defences and Countermeasures:**\n" +
          "- **Firewalls (Hardware or Software):** Sits between a private network and the internet; monitors incoming and outgoing traffic, inspecting packet headers against pre-defined security rules to block unauthorized packets.\n" +
          "- **Proxy Servers:** Acts as an intermediary between client computers and external web servers; hides internal IP addresses; caches web pages; filters prohibited web content.\n" +
          "- **Anti-Malware / Antivirus Software:** Continuously scans files against known malware signature databases and uses heuristic behavioural analysis; isolates detected threats in quarantine.\n" +
          "- **Multi-Factor Authentication (MFA):** Requires users to verify identity across at least two independent authentication factors:\n" +
          "  1. *Something you know* (password, PIN).\n" +
          "  2. *Something you have* (smart card, one-time SMS/authenticator app code).\n" +
          "  3. *Something you are* (biometric fingerprint, facial recognition, iris scan).\n" +
          "- **Automated Patch Management:** Regularly updating OS and software to patch discovered security exploits (**zero-day vulnerabilities**).",
        examinerTips: [
          "Distinguish clearly between phishing (fraudulent emails with links) and pharming (manipulating DNS or host files to redirect users without their knowledge).",
          "Explain the three authentication factors in MFA: something you know (password), something you have (phone/token), and something you are (biometrics)."
        ],
        commonMistakes: [
          "Confusing viruses (requires human host file execution) with worms (self-replicating, spreads autonomously across networks).",
          "Assuming a firewall destroys malware; firewalls monitor and filter network traffic based on rules; antivirus software scans and destroys malware."
        ],
        recap: [
          "Malware includes viruses, self-propagating worms, trojans, spyware, keyloggers, and file-encrypting ransomware.",
          "Phishing uses fake emails; pharming redirects DNS traffic to spoofed websites.",
          "DDoS floods servers using botnets; brute-force guesses passwords systematically.",
          "Defences: firewalls (packet filtering), proxy servers (anonymity/cache), antivirus, MFA, and automated security patches."
        ]
      }
    ]
  }
];
