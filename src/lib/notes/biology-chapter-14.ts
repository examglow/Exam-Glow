import type { Chapter } from "./types";
import { labelledRows, svgDiagram, tileRow } from "./diagram-kit";

const IMG = "/notes/biology";

function artPanel(items: { src: string; alt: string; caption: string }[]) {
  const tiles = items
    .map((it, i) => {
      // An odd final tile takes the whole row; the artwork sits on the same cream it was
      // drawn on, so containing it loses nothing.
      const solo = items.length % 2 === 1 && i === items.length - 1;
      return `<figure class="m-0 min-w-0${solo ? " sm:col-span-2" : ""}">
        <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/${it.src}" alt="${it.alt}" loading="lazy" class="aspect-square w-full object-cover${solo ? " sm:aspect-[2/1] sm:object-contain" : ""}" /></div>
        <figcaption class="mt-2.5 text-center text-[13px] font-bold text-zinc-100">${it.caption}</figcaption>
      </figure>`;
    })
    .join("");
  return `:::raw
<div class="overflow-hidden rounded-2xl bg-[#1b1d1f] px-4 py-5 sm:px-8 sm:py-8">
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">${tiles}</div>
</div>
:::`;
}

const neuroneArt = artPanel([
  {
    src: "ch14-neurone.webp",
    alt: "Illustration of a motor neurone with dendrites, cell body, axon and myelin sheath",
    caption: "A motor neurone",
  },
]);

const eyeArt = artPanel([
  {
    src: "ch14-human-eye.webp",
    alt: "Horizontal section of a human eye showing cornea, iris, lens, retina and optic nerve",
    caption: "The structure of the human eye",
  },
]);

const glandArt = artPanel([
  {
    src: "ch14-hormone-glands.webp",
    alt: "A standing figure with the main endocrine glands marked on head, neck, waist and hips",
    caption: "Where the hormone glands sit",
  },
]);

const reflexArt = artPanel([
  {
    src: "ch14-reflex-hand.webp",
    alt: "Illustration of a hand snatching back from a hot pan as the reflex arc carries the signal",
    caption: "The reflex arc from a hot pan",
  },
]);

/** A motor neurone drawn from its parts, with a two-column key beneath. */
const neuroneDiagram = svgDiagram(
  "Structure of a motor neurone",
  `<text class="title" x="450" y="34" text-anchor="middle">Structure of a motor neurone</text>
    <path class="line" d="M92 138 L44 104 M90 150 L34 150 M92 164 L48 198 M64 120 L40 126 M66 180 L50 174"/>
    <circle class="main" cx="132" cy="150" r="40"/>
    <circle class="panel" cx="132" cy="150" r="15"/>
    <path class="line" d="M172 150 H628"/>
    <rect class="blue" x="212" y="128" width="78" height="44" rx="20"/>
    <rect class="blue" x="302" y="128" width="78" height="44" rx="20"/>
    <rect class="blue" x="392" y="128" width="78" height="44" rx="20"/>
    <rect class="blue" x="482" y="128" width="78" height="44" rx="20"/>
    <path class="line" d="M628 150 L690 118 M628 150 L702 150 M628 150 L690 182"/>
    <circle class="pink" cx="698" cy="114" r="9"/>
    <circle class="pink" cx="710" cy="150" r="9"/>
    <circle class="pink" cx="698" cy="186" r="9"/>
    ${labelledRows(
      [
        ["Dendrites", "Carry impulses into the cell body"],
        ["Cell body", "Holds the nucleus and keeps the cell alive"],
        ["Axon", "Long fibre that carries the impulse away"],
        ["Myelin sheath", "Insulating layer that speeds conduction"],
        ["Axon terminal", "Releases neurotransmitter at the synapse"],
      ],
      24,
      264,
      27,
    )}`,
  900,
  400,
);

/** The five stages of a reflex, drawn as a row of labelled tiles. */
const reflexArcDiagram = svgDiagram(
  "The reflex arc",
  `<text class="title" x="450" y="34" text-anchor="middle">The reflex arc, stage by stage</text>
    ${tileRow(
      [
        { title: "Receptor", body: "Detects the\nstimulus, e.g.\nheat on the skin", cls: "pink" },
        {
          title: "Sensory neurone",
          body: "Electrical impulse\ntravels toward\nthe CNS",
          cls: "main",
        },
        {
          title: "Relay neurone",
          body: "Inside the spinal\ncord; links the\ntwo neurones",
          cls: "blue",
        },
        { title: "Motor neurone", body: "Impulse travels\naway from the\nCNS", cls: "main" },
        { title: "Effector", body: "Muscle or gland\ncarries out the\nresponse", cls: "gold" },
      ],
      66,
      { x: 24, w: 852, h: 150, gap: 12 },
    )}
    <text class="small" x="450" y="248" text-anchor="middle">The signal passes the spinal cord, not the conscious brain, so the action is automatic and fast.</text>`,
  900,
  268,
);

/** How auxin redistributes to bend a shoot toward light and a root down. */
const auxinDiagram = svgDiagram(
  "Auxin and the growth response",
  `<text class="title" x="450" y="34" text-anchor="middle">One hormone, two opposite answers</text>
    ${tileRow(
      [
        {
          title: "Shoot tip in side light",
          body: "Auxin made at the tip\nmoves to the shaded side\nit speeds cell elongation\nthe shoot bends toward light\n= positive phototropism",
          cls: "main",
        },
        {
          title: "Root tip in the same field",
          body: "Auxin gathers on the lower side\nroots are far more sensitive\nhigh auxin slows that side\nthe root bends downward\n= positive geotropism",
          cls: "gold",
        },
      ],
      62,
      { x: 24, w: 852, h: 196, gap: 16 },
    )}`,
  900,
  280,
);

const ch14: Chapter = {
  number: 14,
  title: "Coordination and Response",
  intro:
    "A stimulus is a change in the environment that a receptor detects; a response is the action that follows.\n\nAnimals coordinate their responses with two systems, the fast **nervous system** and the slower **hormone (endocrine) system**, while plants respond by growing.\n\nThis chapter covers the neurone, the synapse and the reflex arc, plus adrenaline and the eye.\n\nIt then covers the homeostatic control of body temperature and blood glucose, and taxis and tropisms driven by auxin.",
  subheadings: [
    {
      title: "The Nervous System and the Neurone",
      body: `### Two coordination systems\n\nAnimals coordinate their responses with two systems.\n\nThe **nervous system** uses electrical impulses and is fast and precise; the **hormone system** uses chemicals carried in the blood and is slower but longer-lasting.\n\n### The divisions of the nervous system\nThe nervous system has two parts. The **central nervous system (CNS)**, made of the brain and spinal cord, receives information and coordinates the response.\n\nThe **peripheral nervous system (PNS)** is all the nerves, which are bundles of axons running to and from the CNS.\n\n### The three kinds of neurone\n**Sensory neurones** carry impulses from receptors to the CNS. **Motor neurones** carry impulses from the CNS to effectors, and **relay (connector) neurones** link the two inside the CNS.\n\n### The structure of a motor neurone\n\nA motor neurone has **dendrites** that carry impulses into the **cell body**, which holds the nucleus.\n\nA long **axon**, often insulated by a **myelin sheath**, carries the impulse away and ends in **axon terminals** that release neurotransmitter.\n\n### The nerve impulse itself\n\nAn impulse is a wave of electrical charge passing along the axon, and it is an **all-or-nothing** event.\n\n**Myelin** makes impulses travel faster, and a single neurone carries the impulse in only one direction, from dendrite to axon terminal.\n\n> A **receptor** detects a stimulus and an **effector**, a muscle or gland, produces the response; a nerve is many axons bundled together, not a single cell.`,
      figure: neuroneDiagram + "\n\n" + neuroneArt,
      groups: [
        {
          subTitle: "The Two Divisions",
          bullets: [
            "**Central nervous system (CNS):** the brain and spinal cord; it receives information and coordinates the response.",
            "**Peripheral nervous system (PNS):** all the nerves, which are bundles of axons with blood vessels and connective tissue.",
            "**Afferent** nerves carry impulses **toward** the CNS; **efferent** nerves carry impulses **away** from it.",
          ],
        },
        {
          subTitle: "The Three Neurone Types",
          bullets: [
            "**Sensory neurone:** carries impulses from a **receptor to the CNS**.",
            "**Motor neurone:** carries impulses from the **CNS to an effector**, a muscle or a gland.",
            "**Relay (connector) neurone:** lies wholly inside the CNS and links a sensory neurone to a motor neurone.",
            "**Receptor:** a cell that detects a stimulus and starts the impulse.",
            "**Effector:** a muscle or gland that carries out the response.",
          ],
        },
        {
          subTitle: "Structure and the Impulse",
          bullets: [
            "**Dendrites:** short branches carrying impulses **into** the cell body.",
            "**Cell body (cyton):** holds the nucleus and keeps the cell alive.",
            "**Axon:** the long fibre that conducts the impulse **away** from the cell body.",
            "**Myelin sheath:** fatty insulation that **speeds up** conduction along the axon.",
            "**Axon terminal:** the ending that releases **neurotransmitter** at a synapse.",
            "**All-or-nothing:** an impulse either fires fully or not at all, and travels **one way only**.",
          ],
        },
      ],
      examinerTips: [
        "Learn a pathway as an ordered chain: **receptor → sensory neurone → CNS → motor neurone → effector**. Marks are given for the correct sequence, not just the named parts.",
        "Say the impulse is **electrical along the neurone, chemical across the synapse** — that one sentence answers most transmission questions.",
        "When matching a neurone to its job, use the memory: **Sensory = carries toward the CNS, Motor = Moves to the effector**.",
        "State the function of the myelin sheath as **insulation that speeds conduction**, not as the part that carries the impulse itself.",
      ],
      commonMistakes: [
        "Confusing the direction of flow: sensory neurones go **toward** the CNS and motor neurones go **away** from it.",
        "Calling a single nerve fibre a neurone. A nerve is many axons bundled together with blood vessels and connective tissue.",
        "Saying the myelin sheath generates the impulse. It only **insulates and speeds** conduction; the axon carries the impulse.",
        "Placing relay neurones in the peripheral nervous system. Relay neurones lie **inside the CNS**.",
      ],
      recap: [
        "Name the two parts of the central nervous system. [2]",
        "Describe, in order, the pathway an impulse follows from stimulus to response in a voluntary action. [5]",
        "State the function of the myelin sheath. [1]",
        "Name the three types of neurone and state the role of each. [6]",
      ],
    },
    {
      title: "The Synapse and the Reflex Arc",
      body: `### The synapse, defined\n\nA **synapse** is the tiny gap between the axon terminal of one neurone and the dendrite of the next.\n\nThe electrical impulse cannot jump the gap, so the signal is re-started chemically.\n\n### How transmission across a synapse works\n\nWhen an impulse reaches the axon terminal, **vesicles** release a chemical **neurotransmitter** into the gap.\n\nThe transmitter **diffuses across the synaptic cleft** and binds to **receptor proteins** on the next cell, starting a new impulse there.\n\n### One-way and a little slower\n\nBecause transmitter only spills from the terminal onto the receptors of the next cell, synapses make impulses travel **one way only**.\n\nCrossing the gap takes a measurable fraction of a second, which is called **synaptic delay**.\n\n### The reflex arc\n\nThe **reflex arc** is the nerve pathway of a reflex, an automatic protective response that is not under conscious control.\n\nIt runs **receptor → sensory neurone → relay neurone → motor neurone → effector**.\n\n### Why reflexes are fast\n\nIn a reflex the centre of the response is the **spinal cord**, not the conscious brain, so the action happens before you are even aware of it.\n\nThe brain is informed only afterwards.\n\n> Reflexes are innate and protective: you do not have to learn them, and they cannot easily be stopped.`,
      figure: reflexArcDiagram + "\n\n" + reflexArt,
      groups: [
        {
          subTitle: "Transmission Across a Synapse",
          bullets: [
            "**Synaptic cleft:** the narrow fluid-filled gap between the two neurones.",
            "The impulse reaches the **axon terminal** and triggers **vesicles** to release a **neurotransmitter**.",
            "The neurotransmitter **diffuses across the cleft** to the membrane of the next cell.",
            "It binds to **receptor proteins** and starts a new electrical impulse there.",
            "**Synaptic delay:** the short pause while chemicals diffuse makes transmission across a gap slower than along an axon.",
            "**One-way only:** transmitter leaves the terminal and receptors sit on the far side, so the signal cannot go backwards.",
          ],
        },
        {
          subTitle: "The Reflex Arc in Order",
          bullets: [
            "**Receptor:** in the skin, detects the stimulus such as heat from a pan.",
            "**Sensory neurone:** carries the impulse to the spinal cord.",
            "**Relay neurone:** inside the spinal cord, links the sensory neurone to the motor neurone.",
            "**Motor neurone:** carries the impulse away from the spinal cord to the effector.",
            "**Effector:** a muscle contracts and the hand is snatched away.",
          ],
        },
        {
          subTitle: "Reflexes Versus Voluntary Actions",
          bullets: [
            "**Reflex:** automatic, very fast, coordinated in the **spinal cord**, and present from birth.",
            "**Voluntary action:** slower, decided by the **brain**, and can be changed consciously.",
            "Reflexes are **protective** because they happen before you think, such as withdrawing a hand or blinking.",
            "Examples: the knee-jerk reflex, the withdrawal reflex from a hot object, and the blinking reflex.",
          ],
        },
      ],
      examinerTips: [
        "When asked why a reflex is fast, credit the **short pathway** and the fact that it is processed in the **spinal cord**, not the thinking brain.",
        "Always list a reflex arc in the correct order and name **all five parts**, including the relay neurone; omitting it loses a mark.",
        "Say the impulse crosses the synapse **chemically by diffusion of a neurotransmitter**, never electrically.",
        "Name the neurotransmitter generically unless the question asks you to; accuracy about the **process** wins the marks.",
      ],
      commonMistakes: [
        "Saying the impulse crosses the synapse electrically. It crosses **chemically**, by diffusion of a neurotransmitter.",
        "Forgetting the relay neurone when drawing a reflex arc; a reflex uses **sensory + relay + motor** neurones.",
        "Claiming the brain controls a reflex. The **spinal cord** coordinates it; the brain only learns of it afterwards.",
        "Saying neurotransmitters travel back across the gap. They cross **one way only**, from terminal to receptor.",
      ],
      recap: [
        "Explain how an impulse is passed from one neurone to the next across a synapse. [4]",
        "Define the term reflex action. [2]",
        "State why a reflex response is faster than a voluntary response. [2]",
        "Name, in order, the five components of a reflex arc. [5]",
      ],
    },
    {
      title: "The Endocrine System and Adrenaline",
      body: `### Hormones versus nerves\n\nThe endocrine system coordinates the body using **hormones**, chemical messengers made in endocrine glands and secreted straight into the **blood**.\n\nCompared with nerves, hormones act **more slowly** but their effects are **wider and last longer**.\n\n### Endocrine glands are ductless\n\nAn **endocrine gland** is a group of cells that pours its hormone directly into the blood, not down a duct.\n\nEach hormone travels around the whole body yet acts only on its **target organ**, whose cells carry the matching receptors.\n\n### The master gland\n\nThe **pituitary gland** at the base of the brain is often called the 'master gland', because it releases hormones that control other endocrine glands.\n\nIt is itself controlled by the hypothalamus.\n\n### Adrenaline, the fight-or-flight hormone\n\n**Adrenaline** is released by the **adrenal glands**, which sit on top of the kidneys, when the brain senses fear, anger, stress or sudden exercise.\n\nIt prepares the body for a short burst of intense activity.\n\n### Its effects and their purpose\nAdrenaline **increases heart rate and breathing rate**, so more oxygen and glucose reach the muscles. It **raises blood glucose** by triggering the breakdown of glycogen in the liver.\n\nIt also **dilates the pupils and the air passages (bronchioles)** and sends more blood to the muscles and brain, priming the body to act.`,
      groups: [
        {
          subTitle: "Hormones and Endocrine Glands",
          bullets: [
            "**Endocrine gland:** a group of cells that secretes a hormone directly into the blood, with no duct.",
            "**Hormone:** a chemical messenger made at one point and carried in the blood to a **target organ** where it acts.",
            "**Target organ:** the organ a hormone acts on, because its cells carry the matching **receptors**.",
            "**Pituitary gland:** the 'master gland' in the brain; it controls other glands and is itself controlled by the hypothalamus.",
            "**Other named hormones:** thyroxine sets metabolic rate and insulin controls blood glucose, each with its own target.",
            "Hormones are slow, widespread and long-lasting, whereas nerves are fast, precise and short-lived.",
          ],
        },
        {
          subTitle: "Adrenaline and Fight-or-Flight",
          bullets: [
            "**Source:** the **adrenal glands**, which sit on top of the kidneys.",
            "**Trigger:** fear, anger, stress or sudden exercise, sensed by the brain.",
            "**Increases heart rate**, so blood moves faster around the body.",
            "**Increases breathing rate**, so more oxygen is taken in.",
            "**Raises blood glucose** by triggering the breakdown of glycogen in the liver.",
            "**Dilates the pupils and bronchioles** and sends more blood to the muscles and brain.",
            "**Overall purpose:** every change feeds the muscles and brain that are about to work hard.",
          ],
        },
      ],
      figure:
        "| Feature | Nervous system | Endocrine (hormone) system |\n| --- | --- | --- |\n| Signal | Electrical impulses | Chemical messengers in blood |\n| Speed | Very fast | Slower |\n| Duration | Short-lived | Longer-lasting |\n| Target | Precise (a muscle or gland) | Widespread (any organ with receptors) |" +
        "\n\n" +
        glandArt,
      examinerTips: [
        "Contrast nervous and hormonal coordination as **matched pairs**: fast against slow, brief against lasting, precise against widespread.",
        "For adrenaline, always **link each effect to a purpose** — more glucose and oxygen for the muscles about to work hard.",
        "Define a hormone as produced at one point and carried **in the blood** to a target; leaving out 'in the blood' costs a mark.",
        "State that endocrine glands are **ductless**; saying they secrete through ducts is the classic lost mark.",
      ],
      commonMistakes: [
        "Saying hormones travel along ducts. Endocrine glands are **ductless**; they pour hormones into the blood.",
        "Describing the 'master gland' as the adrenal gland. The **pituitary** is the master gland.",
        "Confusing adrenaline with insulin. Adrenaline **raises** blood glucose; insulin lowers it.",
        "Claiming a hormone affects every organ it passes. It acts only on its **target organ** carrying the right receptors.",
      ],
      recap: [
        "Define the terms hormone and endocrine gland. [4]",
        "Describe four effects of adrenaline on the body. [4]",
        "State two differences between nervous coordination and hormonal coordination. [4]",
        "Explain why the effects of adrenaline are useful in an emergency. [3]",
      ],
    },
    {
      title: "The Eye and Vision",
      figure: eyeArt,
      body: `### The eye as a sense organ\n\nThe eye is a sense organ that converts light into nerve impulses.\n\nLight passes through a series of structures before the **retina** detects it and the **optic nerve** carries the impulses to the brain.\n\n### The path of light\nLight first enters through the transparent **cornea**, which bends it inward. It then passes the **pupil**, the hole in the **iris**, and the **lens** before reaching the retina.\n\n### The iris and pupil\n\nThe **iris** is a ring of muscle that sets the size of the pupil and so controls how much light enters.\n\nIn bright light the pupil **constricts**; in dim light it **dilates**.\n\n### The retina, rods and cones\nThe **retina** is the light-sensitive layer carrying the photoreceptor cells. **Rods** detect dim light and give black-and-white vision, while **cones** need bright light and give **colour** and sharp detail.\n\n### Accommodation\n\n**Accommodation** is the change in lens shape that focuses an image on the retina.\n\nFor a near object the **ciliary muscles contract**, the **suspensory ligaments slacken**, and the lens becomes **thicker and more rounded**.\n\nFor a distant object the ciliary muscles relax, the ligaments tighten, and the lens becomes **thinner and flatter**.\n\n### The blind spot\nThe **blind spot** is where the optic nerve leaves the retina. It holds no light receptors, so an image falling there is not detected.`,
      groups: [
        {
          subTitle: "Parts of the Eye and Their Jobs",
          bullets: [
            "**Cornea:** transparent front layer that bends (refracts) light into the eye.",
            "**Iris:** coloured muscle that controls pupil size and so the amount of light entering.",
            "**Pupil:** the hole in the iris that lets light through.",
            "**Lens:** focuses light onto the retina by changing shape (accommodation).",
            "**Retina:** the light-sensitive layer containing the photoreceptor cells.",
            "**Optic nerve:** carries impulses from the retina to the brain.",
            "**Ciliary muscles and suspensory ligaments:** the structures that change the shape of the lens.",
          ],
        },
        {
          subTitle: "Rods, Cones and the Blind Spot",
          bullets: [
            "**Rods:** sensitive to **dim light**, give black-and-white vision, and dominate the edge of the retina.",
            "**Cones:** need **bright light**, give **colour vision** and sharp detail, and cluster at the fovea.",
            "**Blind spot:** where the optic nerve leaves the retina; it has no receptors, so images there are not detected.",
            "The brain fills in the missing information at the blind spot, so we are unaware of the gap.",
          ],
        },
        {
          subTitle: "Accommodation: Focusing",
          bullets: [
            "**Near object:** ciliary muscles **contract**, suspensory ligaments **slacken**, lens becomes **thicker and more rounded**.",
            "**Distant object:** ciliary muscles **relax**, suspensory ligaments **tighten**, lens becomes **thinner and flatter**.",
            "A more rounded lens **refracts light more strongly**, which brings a near object into focus.",
            "Accommodation keeps the image sharp on the retina as the distance of the object changes.",
          ],
        },
      ],
      examinerTips: [
        "Trace the path in order: **cornea → pupil → lens → retina → optic nerve → brain**. Marks follow the correct sequence.",
        "In an accommodation question, name **both** the ciliary muscles and the suspensory ligaments and say whether each contracts or relaxes.",
        "Keep the two jobs apart: the **iris and pupil** control light intensity, while the **lens** does the focusing.",
        "Contrast rods and cones on three points — light level, colour and detail — to secure all the marks.",
      ],
      commonMistakes: [
        "Saying the iris focuses the light. The iris controls **light intensity** via the pupil; the **lens** focuses.",
        "Swapping rods and cones. **Rods** = dim light, **Cones** = Colour and detail.",
        "Reversing accommodation: for a near object the ciliary muscles **contract**, they do not relax.",
        "Placing the blind spot on the cornea. It is the point on the **retina** where the optic nerve leaves.",
      ],
      recap: [
        "List, in order, the structures light passes through from the cornea to the optic nerve. [5]",
        "State the difference in function between rods and cones. [2]",
        "Explain how the eye focuses on a near object. [4]",
        "Explain why the blind spot does not normally disturb our vision. [2]",
      ],
    },
    {
      title: "Homeostasis: Body Temperature and Blood Glucose",
      body: `### What homeostasis means\n\n**Homeostasis** is the maintenance of a constant internal environment — steady temperature, water content, salt content and glucose concentration.\n\nIt is the reason your cells keep working whatever the weather outside.\n\n### Negative feedback is the mechanism\nHomeostasis is controlled by **negative feedback**. A change away from the set point is detected and corrected, and that correction then switches off the original stimulus.\n\n### Controlling body temperature\nThe **thermoregulatory centre in the hypothalamus of the brain** monitors blood temperature and coordinates the response. It acts on effectors in the skin, sweat glands and muscles.\n\nWhen you are **too hot**, sweat glands release sweat that **evaporates and removes heat**, and skin blood vessels **dilate (vasodilation)** so more heat radiates from the surface.\n\nWhen you are **too cold**, skin blood vessels **constrict (vasoconstriction)** to save heat, and skeletal muscles **shiver**, releasing extra heat from respiration.\n\n### Controlling blood glucose\nThe **pancreas** monitors and controls the glucose concentration of the blood using two hormones. It serves as both the sensor and the corrective gland.\n\nWhen glucose is **too high**, the pancreas releases **insulin**, which moves glucose into liver cells where it is converted to the storage carbohydrate **glycogen**.\n\nWhen glucose is **too low**, the pancreas releases **glucagon**, which converts glycogen back to glucose and raises the level.\n\n### Diabetes\n\nInsulin is made by the **islets of Langerhans** in the pancreas.\n\nA lack of insulin, or insensitivity to it, causes **diabetes**, which is managed by diet, exercise and, where needed, insulin injections.`,
      groups: [
        {
          subTitle: "Controlling Body Temperature",
          bullets: [
            "**Control centre:** the **thermoregulatory centre** in the hypothalamus of the brain.",
            "**Too hot:** sweat glands release sweat that **evaporates and removes heat** from the skin.",
            "**Too hot:** skin blood vessels **dilate (vasodilation)**, so more heat radiates and the skin flushes.",
            "**Too cold:** skin blood vessels **constrict (vasoconstriction)** to reduce heat loss.",
            "**Too cold:** skeletal muscles **shiver**, releasing extra heat from respiration.",
            "**Too cold:** body hairs stand erect to trap an insulating layer of air, and sweating stops.",
          ],
        },
        {
          subTitle: "Controlling Blood Glucose",
          bullets: [
            "**Control organ:** the **pancreas**, which both detects and corrects blood glucose.",
            "**Too high:** the pancreas releases **insulin**, which moves glucose into liver cells.",
            "**Insulin's effect:** the liver converts glucose to **glycogen**, so blood glucose falls.",
            "**Too low:** the pancreas releases **glucagon**, which converts glycogen back to glucose.",
            "**Glucagon's effect:** stored glycogen is broken down, so blood glucose rises.",
            "**Islets of Langerhans:** the patches of pancreas cells that produce these hormones.",
            "**Diabetes:** too little insulin, or insensitivity to it, leaves glucose high; managed by diet, exercise and injections.",
          ],
        },
      ],
      figure:
        "| Condition | Response | Effect on level |\n| --- | --- | --- |\n| Blood glucose too high | Pancreas releases insulin; liver converts glucose to glycogen | Glucose falls back to normal |\n| Blood glucose too low | Pancreas releases glucagon; liver breaks down glycogen | Glucose rises back to normal |\n| Body temperature too high | Vasodilation and sweating | Heat is lost |\n| Body temperature too low | Vasoconstriction and shivering | Heat is conserved and made |",
      examinerTips: [
        "Always name the organ that **detects** the change and the organ that **corrects** it, then state the direction of the correction.",
        "Use the phrase **negative feedback** and explain it: the response reverses the original change and so switches off the stimulus.",
        "For temperature, give the effector and its action together, such as **vasodilation means more heat lost**, not just the word 'dilate'.",
        "For glucose, keep insulin and glucagon opposite: insulin **lowers** by storing glycogen, glucagon **raises** by breaking it down.",
      ],
      commonMistakes: [
        "Confusing insulin and glucagon directions. Insulin **lowers** glucose; glucagon **raises** it.",
        "Saying sweating cools by the water itself. It cools by **evaporation**, which removes heat energy.",
        "Naming the skin as the control centre for temperature. The control centre is the **hypothalamus**; the skin is an effector.",
        "Saying glycogen circulates in the blood as a sugar. Glycogen is the **insoluble storage** carbohydrate held in the liver.",
      ],
      recap: [
        "Define homeostasis. [2]",
        "Describe how the body responds when its core temperature rises above normal. [4]",
        "Explain how insulin and glucagon keep blood glucose constant. [4]",
        "Explain why the control of body temperature is described as negative feedback. [3]",
      ],
    },
    {
      title: "Taxis and Tropisms in Plants",
      body: `### Hormones, not nerves\n\nPlants coordinate their responses with **hormones** rather than nerves, so their reactions are slower and often depend on growth.\n\nTwo kinds of directional response are examined: **taxis** in motile organisms and **tropism** in plants.\n\n### Taxis\nA **taxis** is a directional **movement of the whole organism** toward (positive) or away from (negative) a stimulus. It is seen in motile cells such as *Euglena* swimming toward light.\n\n### Tropism\nA **tropism** is a directional **growth response** of part of a plant to a one-sided stimulus. Because it is caused by growth, it cannot be reversed.\n\n### Naming the tropisms\nTropisms are named by their stimulus: **phototropism** (light), **geotropism or gravitropism** (gravity), **hydrotropism** (water) and **thigmotropism** (touch). Each may be positive (toward) or negative (away).\n\n### Auxin, the growth hormone\n**Auxin** is a growth hormone produced at the growing tips of shoots and roots. It moves away from light and collects on the shaded or lower side of an organ.\n\n### Different sensitivity in shoot and root\n\nIn a shoot, auxin **stimulates cell elongation**, so the side with more auxin grows faster.\n\nIn a root, the same concentration **inhibits elongation**, because roots are far more sensitive to auxin.\n\n### The resulting bends\n\nA one-sided stimulus makes auxin gather on one side, so the two sides grow at different rates and the organ **bends**.\n\nShoots bend toward light and away from gravity; roots bend toward gravity and away from light.`,
      groups: [
        {
          subTitle: "Taxis Versus Tropism",
          bullets: [
            "**Taxis:** directional movement of a **whole motile organism** toward or away from a stimulus.",
            "**Positive taxis** is toward the stimulus; **negative taxis** is away from it.",
            "**Example of taxis:** *Euglena* swimming toward light so it can photosynthesise.",
            "**Tropism:** a directional **growth response** of part of a plant to a one-sided stimulus.",
            "A tropism is **irreversible**, because it is caused by growth rather than movement.",
            "A plant fixed in soil cannot show a taxis; it can only grow directionally.",
          ],
        },
        {
          subTitle: "The Types of Tropism",
          bullets: [
            "**Phototropism:** growth response to **light**; shoots are positive, roots negative.",
            "**Geotropism / gravitropism:** growth response to **gravity**; shoots negative, roots positive.",
            "**Hydrotropism:** growth response to **water**; roots grow toward it.",
            "**Thigmotropism:** growth response to **touch**, seen in coiling tendrils.",
          ],
        },
        {
          subTitle: "How Auxin Causes the Bend",
          bullets: [
            "**Made at the tip:** auxin is produced in the growing tip of a shoot or root.",
            "**Redistributed:** one-sided light drives auxin to the **shaded side** of a shoot.",
            "**Shoot:** more auxin **speeds elongation** on the shaded side, so the shoot bends **toward the light**.",
            "**Root:** roots are more sensitive, so more auxin **slows elongation**, bending the root **downward with gravity**.",
            "The whole response is **slow**, because it depends on growth rather than on nerve impulses.",
          ],
        },
      ],
      figure: auxinDiagram,
      examinerTips: [
        "State where auxin is **made**, how it **redistributes**, and the effect on each side; then finish with 'bends' plus the direction.",
        "For roots, remember the reversal: the side with **more auxin grows less**, so the root bends toward gravity and away from light.",
        "Distinguish a **taxis** (a whole organism moves) from a **tropism** (part of a plant grows) before you answer.",
        "Name the stimulus inside the tropism word itself, and say whether the response is positive or negative.",
      ],
      commonMistakes: [
        "Calling a tropism a taxis. A plant fixed in the soil cannot move its whole body; it grows directionally.",
        "Saying the shoot bends because auxin is destroyed by light. It is **redistributed** to the shaded side.",
        "Giving the root the same response as the shoot. In roots, high auxin **inhibits** growth, which reverses the bend.",
        "Describing a plant response as fast. Growth responses are **slow**, because they rely on cell elongation, not nerves.",
      ],
      recap: [
        "Define the terms taxis and tropism. [4]",
        "Explain how auxin causes a shoot to bend toward a single light source. [4]",
        "State why a root bends downward into the soil. [2]",
        "Name the tropism shown by a shoot growing toward light and by a root growing toward water. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_14: Chapter = ch14;
