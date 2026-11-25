import type { Chapter } from "./types";
import { imagePanel } from "./image-panel";

const IMG = "/notes/computer-science";

const panelAI = imagePanel(IMG, [
  {
    src: "cs7-neural-layers.webp",
    alt: "A schematic neural network drawn as three vertical columns of small nodes joined by a dense web of thin lines, the left column labelled only by position, the middle column wider, and the right column narrowing to two nodes",
    caption: "Input layer, hidden layer(s), output layer",
  },
  {
    src: "cs7-recommender-screen.webp",
    alt: "A tablet screen showing a grid of thumbnail cards under a heading band, with one card glowing slightly larger as if selected by the system while the rest are dimmer",
    caption: "Recommendation systems rank what you are likely to pick next",
  },
]);

const panelQuantum = imagePanel(IMG, [
  {
    src: "cs7-qubit-vs-bit.webp",
    alt: "Two comparison sketches side by side: on the left a row of ordinary light switches all set firmly up or down, on the right a set of spinning discs tilted at intermediate angles between up and down",
    caption: "A bit is set; a qubit is suspended between both until measured",
  },
  {
    src: "cs7-quantum-cryostat.webp",
    alt: "A tall gold and copper cylindrical research apparatus suspended inside a laboratory, with many insulated cables entering from the top and a technician standing beside it for scale",
    caption: "Quantum hardware is kept cold, and it shows in the cost",
  },
]);

const chapterSeven: Chapter = {
  number: 7,
  title: "Emerging Technologies",
  intro: `Topic 7 is the syllabus's future-facing section, and it is examined almost entirely through AO2 and AO3: apply, then evaluate.

The factual load is light — five features of AI, five applications, three neural-network layers, one qubit-versus-bit table. The marks are in the evaluation paragraphs, so budget your writing time accordingly.`,
  subheadings: [
    {
      title: "7.1 Artificial intelligence",
      body: `### Definition

**7.1.1** — **artificial intelligence (AI)** is the branch of computer science concerned with **simulating intelligent behaviour in a machine**: systems that perceive, reason, learn and act in ways that would be described as intelligent if a person did them.

### The five features

**7.1.2** — write all five, each with one explanatory clause.

| Feature | What it means in practice |
|---|---|
| Collection of data | the system is fed large amounts of examples, text, images or measurements to work from |
| Rules for using that data | defined procedures, weights or logic that decide how data is interpreted and combined |
| Processing large data sets | it can examine volumes far beyond a person's capacity and find patterns inside them |
| Ability to reason | it draws conclusions from what it knows, e.g. a game engine ruling out losing moves |
| Ability to learn and adapt | its behaviour changes as it gains experience instead of staying as first written |

The three learning types, in the words the mark scheme expects:
- **Supervised learning** — the system is trained on **labelled** data, where each example already has the correct answer, and learns the mapping from input to output. Spam filtering is the standard example.
- **Unsupervised learning** — the system is given **unlabelled** data and must find **structure or groups** in it by itself, such as clustering customers by buying pattern.
- **Reinforcement learning** — the system **acts, is rewarded or penalised, and adjusts** its policy to maximise reward over many attempts, as a game-playing agent does.

### Applications

**7.1.3** — the five the syllabus names.

- **Recommendation systems** — compare what this user does with what similar users did, then rank what to show next. Streaming services, shops and news feeds all use them.
- **Natural language processing and large language models (LLMs)** — understanding and producing human text: translation, chatbots, summarising, code completion. An LLM is trained on enormous text corpora to predict the next word, which produces fluent output.
- **Generative AI** — creating **new** content — text, images, music and video — from what it has learned, rather than retrieving an existing file.
- **Computer vision** — extracting meaning from images and video: face unlocking, reading number plates, inspecting parts on a line, and guiding robots. This is the link the syllabus draws to **robotics and automated systems**, since a robot that can see can react to unstructured environments.
- **Predictive analytics** — using patterns in historical data to forecast what happens next: equipment failing, demand rising, a loan defaulting.

**7.1.6** — to "identify different ways AI can be used in a given context", name the **technique, the data it needs and the decision it supports**. For a hospital: triage from scans (vision), staffing forecasts from past admissions (predictive analytics), and transcription of notes (NLP).

### Neural networks

**7.1.4–7.1.5** — a **neural network** is a model made of many simple connected units, loosely suggested by neurons in a brain. It has three kinds of layer:
- The **input layer** receives the raw data — the pixel values, or the measurement of each feature. Each node holds one number.
- One or more **hidden layers** apply the learned weights and transformations. They detect intermediate features, and stacking more of them allows more abstract patterns.
- The **output layer** gives the result — one node per class whose value is the network's confidence.

The **purpose of machine learning** is to let a system improve at a task **without being explicitly programmed for every case**. Training works by showing examples, comparing the output layer's answer with the correct one, and **adjusting the weights** so the next similar input lands closer.

Why this matters: some problems — recognising a face, understanding a sentence — are too complex to write rules for. Learning the rules from data is the only practical route.

### Fairness, bias and ethics

**7.1.7 evaluate fairness and bias** — an AI system inherits the assumptions in its data:
- **Bias in the data**: if a hiring model is trained on ten years of decisions from a department that mostly promoted one group, it learns that pattern and repeats it.
- **Unrepresentative samples**: a vision system trained mostly on one skin tone or one accent performs worse for everyone else.
- **Proxy variables**: excluding a protected attribute is not enough if postcode or device type carries the same information.
- **Feedback loops**: a recommendation system shows more of what was already clicked, which narrows what users see and strengthens the pattern.
- **Opacity**: a deep network cannot explain itself, so a rejected application or a mis-diagnosis is hard to appeal.
- Controls to name: audit the training data for representation, test accuracy **per group** rather than overall, keep a human decision-maker in the loop, and record why a system decided what it did.

**7.1.8 ethical and societal considerations** — accountability when an autonomous system harms someone; consent and privacy around collecting personal data; deepfakes and generated content eroding trust in evidence; job displacement and who is retrained; the concentration of AI capability in a few organisations; algorithmic decisions in policing, benefits and credit, which affect the vulnerable most; and the environmental cost of training large models.

**7.1.9 implications**
- **Employment**: routine analysis and data entry are automated away, while prompt engineering, data labelling, model auditing and AI-assisted roles appear. The shift is fastest in jobs that are pattern-matching rather than manual.
- **Safety**: AI can watch for hazards continuously and never tire, but an autonomous vehicle or weapon depends on sensors that can be fooled, and a confidently wrong decision is more dangerous than no decision.
- **Environmental sustainability**: optimising energy grids and logistics saves real energy, but training frontier models consumes large amounts of electricity and water, so the net effect depends entirely on the application chosen.`,
      figure: panelAI,
      groups: [
        {
          subTitle: "Supervised, unsupervised, reinforcement — the one-line test",
          bullets: [
            "Are the training examples **labelled**? Then supervised.",
            "Is the system **finding groups** on its own? Then unsupervised.",
            "Does it learn from **rewards after acting**? Then reinforcement.",
          ],
        },
      ],
      examinerTips: [
        "'Describe the structure of a neural network' is 3 marks for the three layers **with their function**. Naming the layers alone is worth less than half.",
        "For an evaluate question on bias, always give a **concrete consequence** — a rejected loan, a mis-scan — not only the abstract word 'unfair'.",
        "If asked whether AI should be used in a scenario, end with a judgement and a condition: 'yes, for initial screening, provided a clinician reviews every case'.",
      ],
      commonMistakes: [
        "Treating AI and machine learning as the same word. ML is one route to AI.",
        "Saying a neural network 'thinks like a human'. It performs arithmetic on weighted inputs.",
        "Claiming AI is unbiased because it is a computer. It reflects its training data.",
        "Confusing generative AI with a search engine; generative systems produce new content, they do not retrieve files.",
      ],
      recap: [
        "Define artificial intelligence and describe three of its main features.",
        "State the difference between supervised and unsupervised learning, giving one application of each.",
        "Describe the structure of a neural network, naming each layer and its role.",
        "Explain how bias can enter an AI system and describe two ways of reducing it.",
        "Evaluate the use of AI for deciding who is interviewed for a job.",
      ],
    },
    {
      title: "7.2 Quantum computers",
      body: `### Classical against quantum

**7.2.1** — the comparison is to be written using the five listed terms. You are **not** required to explain quantum theory.

| Aspect | Classical computer | Quantum computer |
|---|---|---|
| Basic unit | the **bit**, which is firmly 0 or 1 | the **qubit**, which can hold a combination of both states at once until it is measured |
| Physical carrier | transistors switching electric charge | properties of individual **electrons or photons** |
| Number system | **binary** processing, one value per bit per instant | many states represented simultaneously, so a wide space is explored together |
| Instructions | fixed **logic gates** such as AND, OR, NOT | gate-like operations manipulate the qubits' states, and the answer appears only when measured |
| Result | exact and repeatable every time | probabilistic, so a program may need running several times |

**Where a classical computer tests 1,000 possibilities one after another, a quantum machine represents many at once and the measurement is designed to make the right answer the likely one.** That is the whole claim a candidate needs to be able to make.

### Advantages and disadvantages

**7.2.2**

| Advantages | Disadvantages |
|---|---|
| Certain problems — searching huge spaces, simulating molecules and materials, some optimisation — become far faster | Useless for ordinary work: browsing, spreadsheets and word processing gain nothing |
| Could break current public-key cryptography by factoring large numbers efficiently | Requires temperatures near absolute zero and heavy specialised infrastructure, so cost is extreme |
| Qubits interact, so one operation covers a vast combination space | Qubits are fragile; noise from the environment destroys the computation (**decoherence**), so errors are constant |
| Research payoff in chemistry, drug design and logistics is potentially enormous | Programs need entirely new algorithms; there is no software ecosystem to build on |
| Error-corrected machines would enable secure communication methods | Scaling to large numbers of reliable qubits is still unsolved |

The sentence examiners want: a quantum computer is **not a faster classical computer**; it is a different machine for a narrow class of problems.`,
      figure: panelQuantum,
      groups: [
        {
          subTitle: "Terms you must use in the answer",
          bullets: [
            "**bit** versus **qubit**.",
            "**Binary** values versus a qubit's combined states.",
            "**Electrons or photons** as the physical carrier.",
            "**Logic gates** as the classical instruction set.",
            "**Measurement** as the moment a qubit settles to one answer.",
          ],
        },
      ],
      examinerTips: [
        "Keep to the comparison terms given in the question. If it lists bit, qubit and logic gates, use those three words explicitly.",
        "For 'state the disadvantages', the two safest marks are **extreme cost and cooling requirements** and **susceptibility to interference / error rates**.",
        "Do not attempt quantum theory. The syllabus excludes it, and a confused explanation costs the marks a plain comparison would have earned.",
      ],
      commonMistakes: [
        "Saying a qubit is 'both 0 and 1' and stopping — add that measurement returns a single value.",
        "Claiming quantum computers are simply faster at everything.",
        "Confusing a quantum computer with a supercomputer made of many classical cores.",
        "Saying quantum computers store data in bytes. They manipulate qubits, and results are read out as ordinary bits.",
      ],
      recap: [
        "Describe two differences between a quantum computer and a classical computer, using the terms bit and qubit.",
        "Explain why a quantum computer is not a replacement for a laptop.",
        "State one advantage and two disadvantages of using quantum computers instead of classical machines.",
      ],
    },
  ],
};

export const COMPUTER_SCIENCE_CHAPTER_7 = chapterSeven;
