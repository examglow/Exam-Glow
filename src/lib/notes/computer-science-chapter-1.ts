import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelGates = imagePanel(IMG, [
  {
    src: "cs1-gate-symbols.webp",
    alt: "Six logic gate shapes drawn as clean outline symbols on a light grid page, arranged in two rows of three, each with inputs entering at the left and one output leaving at the right",
    caption: "Six shapes you must draw from memory",
  },
  {
    src: "cs1-binary-taps.webp",
    alt: "A row of eight brass mechanical taps on a pipe, some open and some closed, with water flowing only through the open ones along a single channel",
    caption: "A gate is a switch: current flows only when the condition is met",
  },
]);

const panelMedia = imagePanel(IMG, [
  {
    src: "cs1-bitmap-grid.webp",
    alt: "A close-up of a tiny black-and-white pixel picture shown twice: once as a smooth square image and once beside it as an enlarged grid of coloured cells with thin gridlines",
    caption: "Every pixel is just a number in a grid",
  },
  {
    src: "cs1-sound-sampling.webp",
    alt: "A smooth analogue sound wave drawn in pencil above a stepped approximation of the same wave made of vertical sample bars, on graph paper",
    caption: "More bars, closer together: the stepped line hugs the curve",
  },
]);

const chapterOne: Chapter = {
  number: 1,
  title: "Data Representation and Logic Gates",
  intro: `Inside every computer there is only one idea: voltages are either high or low, and we call that 1 or 0. This chapter is the foundation the rest of the syllabus stands on, so the marks here are the cheapest ones you will get.

Nearly all of it is Component 1, and calculators are **not** allowed in that paper. Practise every conversion and every binary addition by hand until the working is boring.`,
  subheadings: [
    {
      title: "1.1 Number systems and logic gates",
      body: `### Binary is the only thing a computer knows

A **bit** (binary digit) is a single 0 or 1. Every number, letter, colour, note and instruction the machine handles is stored as a pattern of bits, because a bit is easy to build physically: a circuit is either on or off.

**1.1.1–1.1.2** — data is **converted to binary** on the way in, and the binary is processed by **logic gates**, which are the physical building blocks of the CPU. The chain to write in an exam is: real-world data → binary → logic gates → result → back to a human-readable form.

### The six gates

**1.1.3–1.1.4** — you must recognise the symbol, write the truth table and state the rule for each gate. The syllabus limits gates to **two inputs maximum**.

| Gate | Symbol shape | Rule | Truth table output |
|---|---|---|---|
| NOT | triangle with a small circle | inverts the input | A=0 gives 1, A=1 gives 0 |
| AND | D-shape | output 1 only if **both** inputs are 1 | 1 only when A=1 and B=1 |
| OR | curved shield | output 1 if **at least one** input is 1 | 0 only when A=0 and B=0 |
| NAND | D-shape with a circle | NOT of AND | 0 only when A=1 and B=1 |
| NOR | shield with a circle | NOT of OR | 1 only when A=0 and B=0 |
| XOR | shield with a double curve | output 1 if the inputs are **different** | 1 when A and B differ |

Three memory hooks that carry full marks:
- NAND and NOR are simply AND/OR with the output inverted — the **bubble on the symbol is the NOT**.
- XOR is not the same as OR. OR means "one or both", XOR means "one or the other but not both".
- NOT has one input and one output. If a question gives you a two-input gate you will never need it.

### How data is measured

**1.1.5–1.1.6** — the ladder of units is fixed and the steps are all ×1024, never ×1000.

| Unit | Equals | Roughly |
|---|---|---|
| bit | one 0 or 1 | — |
| nibble | 4 bits | one hex digit |
| byte | 8 bits | one character |
| kibibyte (KiB) | 1024 bytes | a short text file |
| mebibyte (MiB) | 1024 KiB | 1–2 minutes of MP3 |
| gibibyte (GiB) | 1024 MiB | a phone photo backup set |
| tebibyte (TiB) | 1024 GiB | a large external drive |

The **ibi** spelling is the giveaway: KiB/MiB/GiB/TiB use 1024, while KB/MB/GB use 1000. Cambridge now uses the 1024 versions, so divide by 1024 twice to go bytes → MiB.

### Converting between bases

**1.1.7** — denary is base 10, binary base 2, hexadecimal base 16. Hex uses the digits 0–9 then A, B, C, D, E, F, where A is 10 and F is 15.

Conversions are limited to **positive integers** and a **maximum of 12 bits**, and you must be able to go in both directions.

- **Denary → binary**: subtract the biggest place value that fits, write 1, carry on; write 0 for those that do not fit. 91 = 64 + 16 + 8 + 2 + 1 = \`01011011\`.
- **Binary → denary**: add up the place values under every 1. \`10110100\` = 128 + 32 + 16 + 4 = 180.
- **Binary → hex**: split into groups of 4 from the right, convert each nibble. \`11011100\` = \`1101 1100\` = D C = DC.
- **Hex → denary**: multiply each digit by 16 to its power. 2FA = 2×256 + 15×16 + 10 = 762.
- **Denary → hex**: divide by 16 repeatedly and read the remainders upwards. 205 ÷ 16 = 12 remainder 13, so CD.

The route you are rarely told but should know: to go **denary → hex**, pass through binary (denary → binary → group into nibbles → hex).

### Why hexadecimal exists

**1.1.9** — hex is used because it **compresses long binary into something a human can read and check**, and it converts to binary one nibble at a time with no arithmetic at all. A byte like \`10110100\` is easier to read as B4, and a long binary string is far easier to proof-read in hex.

Examples to quote: **MAC addresses**, **IPv6 addresses**, HTML colour codes such as FF0000, memory addresses, and error codes.

### Binary addition and overflow

**1.1.10–1.1.11** — add from the right, and 1 + 1 gives 0 carry 1.

**Overflow** is what happens when the answer needs more bits than the container holds. With 8-bit unsigned numbers the largest value is 255, so anything above that cannot be represented.

\`1100 1111\` (207) + \`0100 0001\` (65) = 272, which needs 9 bits. The 9th bit is lost and the machine reports \`0001 0000\` = 16. The tell-tale sign in an exam: **two positive numbers added give a smaller answer**.

Consequence of overflow: the result is wrong, and any program or control system that trusts it behaves incorrectly.

### Shifts

**1.1.12–1.1.15** — a shift moves every bit along and fills or empties the end.

| Shift | What happens | Effect on value |
|---|---|---|
| Logical left | bits move left, 0 fills the right, leftmost bit lost | × 2 |
| Logical right | bits move right, 0 fills the left, rightmost bit lost | ÷ 2, rounded down |
| Cyclic left (rotate) | leftmost bit wraps round to the right end | no bits lost |
| Cyclic right (rotate) | rightmost bit wraps round to the left end | no bits lost |

Two things examiners test:
- **Multiple places** means apply the shift again. Two logical left shifts on \`0000 0011\` (3) give \`0000 1100\` (12), i.e. ×4.
- A logical shift can **lose data**: a left shift can push the top bit off and cause overflow; a right shift throws away a 1 and the result rounds **down**, so it is not exact division.

A cyclic shift **never loses data** because the bit that drops off is fed back in at the other end. That is why rotates are used in encryption and checksum routines rather than for arithmetic.

### Two's complement

**1.1.16–1.1.17** — two's complement is how negative integers are stored. The **leftmost bit is the sign weight**: in 8 bits it counts as −128 instead of +128, so the range is **−128 to +127**.

To store a negative number: write the positive version, invert every bit, add 1.

−5 → 0000 0101 → 1111 1010 → 1111 1011.

To read one back: if the leftmost bit is 0 it is positive, read it normally. If it is 1, invert and add 1, then make it negative. \`1111 1011\` → invert \`0000 0100\` → +1 \`0000 0101\` → −5.

The shortcut worth knowing: adding a number and its two's complement gives \`0000 0000\` with a carry out that is discarded — that is precisely why the design was chosen, since the CPU needs only one adder circuit.`,
      figure: panelGates,
      groups: [
        {
          subTitle: "Gate rules in one line each",
          bullets: [
            "**NOT** — flip it.",
            "**AND** — 1 only if both are 1.",
            "**OR** — 1 if at least one is 1.",
            "**NAND** — 0 only if both are 1.",
            "**NOR** — 1 only if both are 0.",
            "**XOR** — 1 if the inputs differ.",
          ],
        },
        {
          subTitle: "Place values to memorise",
          bullets: [
            "Binary (8-bit): 128, 64, 32, 16, 8, 4, 2, 1.",
            "Two's complement: −128, 64, 32, 16, 8, 4, 2, 1.",
            "Hex: 16, 16² = 256, 16³ = 4096.",
            "Storage steps: 1024 bytes = 1 KiB, 1024 KiB = 1 MiB, 1024 MiB = 1 GiB.",
          ],
        },
      ],
      examinerTips: [
        "A truth-table question is worth marks for **columns**, so label every column with the input or gate name and fill every row. Four two-input gates means 16 rows — write them all.",
        "When asked to identify a gate from a truth table, look at the single special row first: one 1 among zeros points to AND; one 0 among ones points to NAND.",
        "For 'explain the advantage of hexadecimal', always add the second half of the answer: it is **shorter and easier for humans to read**, and it maps exactly onto 4-bit nibbles.",
      ],
      commonMistakes: [
        "Writing OR's output as 1 only when both inputs are 1. That is AND.",
        "Confusing XOR with OR — read the row where A = 1 and B = 1, and the two gates disagree there.",
        "Using 1000 instead of 1024 for KiB, then losing every mark in a file-size question.",
        "Forgetting to add the 1 at the end of the invert-and-add-1 step for two's complement.",
        "Claiming a cyclic shift doubles a number. Only a logical left shift is arithmetic.",
      ],
      recap: [
        "Draw the symbols for XOR and NOR and give each a two-input truth table.",
        "Convert 167 to binary, then to hexadecimal.",
        "Add `0110 1101` and `0011 0111` in 8-bit binary and state what error has occurred.",
        "Store −44 as an 8-bit two's complement number.",
        "State the range held by 8 bits in two's complement, and by 8 bits unsigned.",
      ],
    },
    {
      title: "1.2 Text, sound and images",
      body: `### Text and character sets

**1.2.1–1.2.3** — a computer stores characters as **binary numbers**. A **character set** is the list of characters together with the numeric code assigned to each one, and the **encoding** is the mapping rule that turns a character into a code point.

The three-step process to describe: the user types a character → the computer looks up that character's code in the character set → the code is stored as binary, usually one code per character in a string.

**1.2.4** — the two character sets you must be able to describe:

| | ASCII | Unicode |
|---|---|---|
| Bits per character | 7 (extended version uses 8) | 16 (and beyond, in UTF forms) |
| Number of characters | 128 | over 65,000 |
| Covers | A–Z, a–z, 0–9, punctuation, control codes | essentially every world script plus emoji and symbols |
| File size | small | larger, because more bits per character |

**1.2.5 advantages and disadvantages** — ASCII is small and fast, and every system understands it, but it cannot represent accented letters, non-Latin scripts or emoji. Unicode covers virtually all languages and symbols, but it costs more storage and more transmission time, and text must be encoded and decoded consistently or it appears as garbage.

### Sound

**1.2.6–1.2.7** — sound in the real world is an **analogue** wave: a smooth, continuous voltage. To store it, the wave is **sampled** at regular intervals and each sample's amplitude is rounded to a binary number. Two settings control the quality:

- **Sample rate** — how many samples are taken every second, measured in Hz.
- **Sample resolution** — how many bits are used for each sample, which decides how many distinct amplitude levels exist.

Effects, stated the way the mark scheme wants them:
- Raising the **sample rate** captures more points per second, so the rebuilt wave follows rapid changes better and the playback sounds closer to the original — at the cost of a bigger file.
- Raising the **sample resolution** gives more amplitude levels per sample, so quiet passages gain detail and the gap between the true curve and the rounded value shrinks.

**File size = sample rate × sample resolution × duration** (multiply by 2 for stereo).

Worked example, mono: 8000 Hz × 8 bits × 10 s = 640,000 bits = 80,000 bytes. Divide by 1024 twice to reach KiB: 80,000 ÷ 1024 ≈ 78.1 KiB.

### Images

**1.2.8** — a **bitmap** image is a grid of **pixels**, each holding the colour of one tiny square.

**1.2.9** — to store a bitmap the computer records two properties plus the pixel data:
- **Resolution** — the number of pixels, written width × height.
- **Colour depth** — the number of bits per pixel, which sets how many colours are available. Colour depth of n bits gives 2ⁿ colours.

**File size = width × height × colour depth** (in bits).

Worked example: 800 × 600 at 8-bit colour depth = 3,840,000 bits = 480,000 bytes ≈ 468.75 KiB. The same image at 24-bit true colour is 1,440,000 bytes ≈ 1.37 MiB — exactly three times bigger.

**1.2.10 effects** — more **resolution** means more pixels, so finer detail and sharper edges, but a bigger file. More **colour depth** means smoother gradients and fewer visible banding steps, but again a bigger file. Reducing either causes visible quality loss: low resolution gives blocky pixelation, low colour depth gives false-colour banding.

One detail that earns a mark: black and white needs only 1 bit per pixel, but "high colour depth" and "many colours" only look smooth if the resolution is also adequate.`,
      figure: panelMedia,
      groups: [
        {
          subTitle: "Three formulae to write before any calculation",
          bullets: [
            "Sound bits = sample rate × sample resolution × duration (× channels).",
            "Bitmap bits = width × height × colour depth.",
            "Bytes = bits ÷ 8, then KiB = bytes ÷ 1024.",
          ],
        },
        {
          subTitle: "Colour depth quick reference",
          bullets: [
            "1 bit → 2 colours (black and white).",
            "4 bits → 16 colours.",
            "8 bits → 256 colours.",
            "16 bits → 65,536 colours (high colour).",
            "24 bits → 16.7 million colours (true colour).",
          ],
        },
      ],
      examinerTips: [
        "In a 'describe how sound is stored' answer, name the steps in order: sample, measure amplitude, round to a binary number, store the sequence. Missing the rounding step is the most common lost mark.",
        "For ASCII versus Unicode questions, always give **one advantage and one disadvantage of each** rather than only praising Unicode — the question asks for both.",
        "If a calculation gives a huge number, state the unit you are reporting in. 3,840,000 with no unit is not a file size.",
      ],
      commonMistakes: [
        "Saying sample rate is measured in bits. It is measured in Hz; resolution is the bit measurement.",
        "Multiplying by 2 for stereo twice, or forgetting it entirely when the question says stereo.",
        "Confusing resolution (number of pixels) with colour depth (bits per pixel).",
        "Claiming Unicode 'has better quality text'. Characters are either correct or not; Unicode's advantage is coverage of scripts.",
      ],
      recap: [
        "Explain how an analogue sound wave is converted into a stored digital file, using the terms sample rate and sample resolution.",
        "A 1024 × 768 image uses 16-bit colour. Give the uncompressed file size in bytes and explain one visual effect of dropping to 4-bit colour.",
        "State two features of Unicode and one reason a system might still choose ASCII.",
      ],
    },
    {
      title: "1.3 Data compression",
      body: `### Why compress at all

**1.3.1–1.3.2** — **compression** reduces the number of bits needed to represent a file. The purpose is to make files smaller so they **take up less storage** and **transmit faster**.

Describe the impact in both directions, because the mark scheme splits the marks:
- **Transmission**: less bandwidth used, downloads and uploads finish sooner, streaming is smoother at the same connection speed, and less data crosses a congested network.
- **Storage**: more files fit on the same device, backups are smaller and quicker, and copying a library over a network costs less.
- **The cost**: compression and decompression need processing time and CPU effort, and lossy compression permanently removes data.

### Lossy compression

**1.3.3** — **lossy** compression throws away data that the human senses are unlikely to notice, so the file that comes back is **not identical** to the original — it is close enough.

How each medium is squeezed:
- **Images**: colours that are almost the same are merged, and fine detail in busy or flat areas is dropped. A JPEG image stores blocks of similar colour rather than every pixel exactly.
- **Sound**: frequencies outside the range of human hearing, and very quiet sounds masked by louder ones nearby, are deleted. MP3 relies on this.
- **Video**: all of the image tricks plus removal of **redundant frames** — if most of a scene is unchanged, only the parts that moved are stored.

### Lossless compression

**1.3.4** — **lossless** compression reduces size with **no data lost**, so decompression rebuilds the file exactly. The syllabus names two methods.

**Run Length Encoding (RLE)** replaces a run of identical values with the value plus how many times it repeats.

\`WWWWWWWWWBBBB\` becomes \`7W5B\` — 12 characters stored as 4. RLE works brilliantly on bitmaps with large flat areas and terribly on photographs, where long runs are rare.

**Huffman coding** assigns **short codes to frequent characters and long codes to rare ones**, based on the characters' frequencies in that particular file, so the average number of bits per character falls. You are **not** required to build or interpret a Huffman tree — just explain that a more common symbol gets a shorter code and the file therefore shrinks.

Text, images, video and sound can all use lossless methods, but only where an exact rebuild matters.

### Which to choose

**1.3.5** — the comparison table to learn:

| | Lossy | Lossless |
|---|---|---|
| Data after decompression | not identical to the original | identical |
| Size reduction | much larger | modest |
| Processing | quick to encode, cheap to decode | more work, dictionary or frequency pass |
| Best for | photos, music, video for streaming | code, spreadsheets, text, medical images |
| Risk | repeated re-saving compounds the quality loss | none, only smaller gains |

Choose **lossy** when the file is for human eyes or ears and a small quality loss is invisible: a photo on a website, a music stream. Choose **lossless** when every bit matters or the file will be re-saved many times: source code, a database, an X-ray, the original master of a recording.`,
      groups: [
        {
          subTitle: "Sentence-level answers that score",
          bullets: [
            "Lossy is used when the **removed data would not be noticed** by a human.",
            "Lossless is used when the file **must rebuild exactly**.",
            "RLE stores a **value and a count**.",
            "Huffman stores **short codes for common characters**.",
            "Compressed data still needs decompressing before use, which costs time.",
          ],
        },
      ],
      examinerTips: [
        "The phrase examiners want for lossy is that the file is 'smaller but the quality is reduced', and for lossless that 'the original can be fully reconstructed'. Use those words.",
        "If a scenario question asks which method to use, name the method **and** justify it from the scenario — 'lossless, because a spreadsheet must not lose cell values'.",
        "A common 3-marker is 'explain the impact of compression on transmission'. Give three consequences: size, speed, bandwidth — not just 'it is smaller'.",
      ],
      commonMistakes: [
        "Saying lossy compression 'removes unwanted data'. It removes data that may later be wanted — that is the trade-off.",
        "Applying RLE to a photograph and claiming big savings; RLE needs long runs.",
        "Describing a Huffman tree when the syllabus explicitly does not require one.",
        "Claiming lossless compression can make a file larger than lossy. Lossy always wins on size.",
      ],
      recap: [
        "A game texture pack is compressed with RLE. Explain why RLE suits textures but not screenshots of photographs.",
        "Compare lossy and lossless compression and justify one method for a heart-rate recording and one for a streaming video.",
        "Give two effects of compression on data transmission and one disadvantage of compressing during a live process.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_1 = chapterOne;
