import type { Chapter } from "./types";
import { box, svgDiagram, tileRow } from "./diagram-kit";

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

const smokingAlcoholArt = artPanel([
  {
    src: "ch15-smoking-alcohol.webp",
    alt: "Illustration of the damage smoking and alcohol do to the organs of the body",
    caption: "What tobacco and alcohol do to the body",
  },
  {
    src: "ch15-alcohol-liver.webp",
    alt: "A healthy liver beside a swollen scarred one, with a glass of drink above it",
    caption: "Alcohol and the liver",
  },
  {
    src: "ch15-smoking-lungs.webp",
    alt: "Healthy pink lungs beside dark, shrunken lungs with a cigarette",
    caption: "Smoking and the lungs",
  },
]);

const medicinePlantsArt = artPanel([
  {
    src: "ch15-medicine-plants.webp",
    alt: "Illustration of plants that gave us their medicines, such as the opium poppy and willow",
    caption: "Medicines first taken from plants",
  },
]);

/** Three broad classes of drug and the effect each has on the nervous system. */
const drugClassesDiagram = svgDiagram(
  "Three classes of drug",
  `<text class="title" x="450" y="34" text-anchor="middle">Three ways a drug can change the body</text>
    ${tileRow(
      [
        {
          title: "Depressants",
          body: "Slow the nervous system\nAlcohol, some sleeping pills\nSlower reactions and\nlowered self-control",
          cls: "blue",
        },
        {
          title: "Stimulants",
          body: "Speed the nervous system\nCaffeine, nicotine, cocaine\nFaster heart rate and\nhigher alertness",
          cls: "pink",
        },
        {
          title: "Pain-killers",
          body: "Relieve pain\nAspirin, codeine, morphine\nLarge doses of the\nstronger types are addictive",
          cls: "gold",
        },
      ],
      62,
      { x: 24, w: 852, h: 170, gap: 12 },
    )}`,
  900,
  264,
);

/** A chain showing how repeated use can develop into dependence. */
const addictionDiagram = svgDiagram(
  "The road to dependence",
  `<text class="title" x="450" y="32" text-anchor="middle">How addiction develops</text>
    ${box(18, 92, 148, 62, "Regular use", "panel", "label")}
    ${box(198, 92, 148, 62, "Tolerance", "blue", "label")}
    ${box(378, 92, 148, 62, "Dependence", "pink", "label")}
    ${box(558, 92, 148, 62, "Withdrawal", "gold", "label")}
    ${box(738, 92, 148, 62, "Craving", "purple", "label")}
    <path class="arrow" d="M166 123h30"/>
    <path class="arrow" d="M346 123h30"/>
    <path class="arrow" d="M526 123h30"/>
    <path class="arrow" d="M706 123h30"/>
    <text class="small" x="450" y="196" text-anchor="middle">Tolerance means a larger dose is needed; without the drug the user feels withdrawal symptoms.</text>`,
  900,
  224,
);

/** The organs most damaged by the two most widely used legal drugs. */
const organDamageDiagram = svgDiagram(
  "Damage from tobacco and alcohol",
  `<text class="title" x="450" y="32" text-anchor="middle">Where tobacco and alcohol do the harm</text>
    ${tileRow(
      [
        {
          title: "Lungs",
          body: "Tar irritates the lining\nemphysema and bronchitis\nand a higher cancer risk",
          cls: "blue",
        },
        {
          title: "Heart and blood",
          body: "Nicotine raises heart rate\nCO binds to haemoglobin\nso less oxygen is carried",
          cls: "pink",
        },
        {
          title: "Liver",
          body: "Alcohol scars the tissue\nthis is cirrhosis\nblood flow is blocked",
          cls: "gold",
        },
        {
          title: "Brain",
          body: "Alcohol slows reactions\nspeech and judgement\nand dependence forms",
          cls: "purple",
        },
      ],
      60,
      { x: 24, w: 852, h: 168, gap: 12 },
    )}`,
  900,
  258,
);

const ch15: Chapter = {
  number: 15,
  title: "Drugs",
  intro:
    "A drug is any chemical taken into the body that changes its chemistry and so changes how the body works.\n\nMost drugs examined here act on the nervous system, either slowing it, speeding it up, or blocking pain.\n\nThis chapter looks at the main types of drug, at tobacco and alcohol as the two most widely used legal drugs, and at the risks of addiction and self-medication.",
  subheadings: [
    {
      title: "What Is a Drug?",
      body: `### The definition\n\nA **drug** is a chemical, not normally produced by the body and not a food, that when taken in changes the body's chemistry and so its **physiology**, the way its systems operate.\n\nThat single idea — a change in body chemistry — is the heart of every drug question.\n\n### Grouped by effect, not structure\n\nDrugs are grouped by the **effect they have on the body** rather than by their chemical structure.\n\nThe three broad classes examined are **depressants**, which slow the nervous system, **stimulants**, which speed it up, and **pain-killers (analgesics)**, which reduce the sense of pain.\n\n### Use versus misuse\nMany drugs have a genuine **medical use**, treating illness or relieving symptoms. The same chemicals can, however, be **misused** when taken for their effects rather than for treatment.\n\nWhether a drug helps or harms often depends on the **dose** and the reason it is taken.\n\n### Legal and illegal\n\nA drug is **legal** where its use is permitted by law and **illegal** where it is not.\n\nAlcohol, caffeine and nicotine are legal, while many recreational drugs are illegal, so legality describes the law, not safety.`,
      groups: [
        {
          subTitle: "Defining a Drug",
          bullets: [
            "**Drug:** a chemical taken into the body that changes its chemistry and so its functioning.",
            "**Physiology:** the way the body and its parts function; a drug alters this.",
            "Drugs are grouped by their **effect on the body**, not by their chemical structure.",
            "A drug is **not a food** and is not normally produced by the body itself.",
            "Many drugs have a **medical use**, but the same chemical can be **misused** for its effects.",
            "**Dose matters:** the same substance can be a medicine or a poison depending on how much is taken.",
          ],
        },
        {
          subTitle: "Legal, Illegal and the Three Classes",
          bullets: [
            "**Legal drug:** one whose use is permitted by law, such as **alcohol, caffeine and nicotine**.",
            "**Illegal drug:** one whose use is banned, such as **cocaine** or **heroin**.",
            "**Depressants** slow the nervous system; **stimulants** speed it up.",
            "**Analgesics (pain-killers)** reduce the perception of pain.",
            "**Recreational use** means taking a drug for pleasure rather than for treatment.",
            "Legality describes the **law**, not safety, because a legal drug can still be very harmful.",
          ],
        },
      ],
      figure: drugClassesDiagram,
      examinerTips: [
        "Give the definition as a chain: a chemical taken into the body that changes the body's **chemistry** and hence its **functioning**.",
        "Sort any named drug by its **effect** — slows, speeds, or kills pain — before you describe what it does.",
        "When asked for the classes, name **depressant, stimulant and analgesic**, and give one example of each.",
        "Separate 'legal' from 'safe': state that alcohol and tobacco are legal yet harmful, to show you understand the distinction.",
      ],
      commonMistakes: [
        "Defining a drug only as an illegal substance. Medicines, caffeine and alcohol are drugs too.",
        "Thinking a legal drug is harmless. Legality is about the law, not about safety.",
        "Confusing a drug with a food. A food supplies nutrients; a drug changes body chemistry.",
        "Grouping drugs by their chemical structure. In this syllabus they are grouped by their **effect on the body**.",
      ],
      recap: [
        "Define the term drug. [2]",
        "State the difference between a legal drug and an illegal drug. [2]",
        "Name the three main groups of drug by their effect on the body. [3]",
        "Explain why a legal drug is not necessarily a safe drug. [2]",
      ],
    },
    {
      title: "Depressants",
      body: `### What a depressant does\nA **depressant** slows the nervous system down, reducing how fast the body can react and how clearly a person can think. The change is one of **rate**, not of direction.\n\n### Alcohol, the most common depressant\n**Alcohol** is the best-known depressant. It slows reaction time, impairs judgement and coordination, and lowers self-control, which is why it is dangerous before driving.\n\n### Other depressants\nOther examples include some **sleeping pills and tranquillisers**, and the solvent **toluene** found in glue. Mixing several depressants is especially dangerous because their effects add up.\n\n### Why overdose is dangerous\n\nAt a high dose a depressant **slows the breathing centre in the brain**, so breathing becomes shallow and can stop.\n\nThis depression of breathing, not the slowing of reactions, is what makes an overdose potentially fatal.\n\n### A misleading first effect\nAt first a depressant can seem to 'lift' mood, because it removes inhibition. Its true physiological action, however, is still to **slow** the nervous system.`,
      groups: [
        {
          subTitle: "How Depressants Act",
          bullets: [
            "**Depressants** reduce the activity of the CNS, so reactions are slower and judgement poorer.",
            "They lower **self-control and coordination**, which is why they are unsafe before driving.",
            "The effect is a change in **rate**, not the emotional state of depression.",
            "At first a depressant may seem to lift mood because it removes inhibition.",
          ],
        },
        {
          subTitle: "Examples and Dangers",
          bullets: [
            "**Alcohol:** the most common depressant; slows reactions and impairs judgement.",
            "**Sleeping pills and tranquillisers:** prescribed depressants that can be misused.",
            "**Toluene (glue):** a solvent with depressant effects, abused by inhalation.",
            "**Mixing depressants** adds their effects together and greatly raises the risk.",
          ],
        },
        {
          subTitle: "Overdose and the Breathing Centre",
          bullets: [
            "A high dose **depresses the breathing centre** in the medulla of the brain.",
            "Breathing becomes slow and shallow and can stop altogether.",
            "**Depression of breathing**, not slowed reactions, is what makes an overdose fatal.",
            "Very high blood alcohol can cause unconsciousness and death from respiratory failure.",
          ],
        },
      ],
      examinerTips: [
        "Explain the effect as a **slowing**: slower reflexes, slower reactions, reduced coordination. This answers most 'effect on the body' marks.",
        "Mention that depression of the **breathing centre** is what makes an overdose dangerous.",
        "Give **alcohol** as your key example, plus one other such as a sleeping pill, to cover the examples mark.",
        "Avoid the trap: 'depressant' is a pharmacological term for slowing the CNS, not for causing the emotion of depression.",
      ],
      commonMistakes: [
        "Confusing a depressant with something that causes the emotional state of depression. The term means the drug **slows the nervous system**.",
        "Listing caffeine as a depressant. Caffeine is a **stimulant**.",
        "Saying a depressant speeds up reactions. It **slows** them.",
        "Thinking a depressant is safe because it is legal. Alcohol depresses breathing at a high dose.",
      ],
      recap: [
        "Define depressant and give one example. [2]",
        "Describe two effects of a depressant on the nervous system. [2]",
        "Explain why taking a large dose of a depressant can be dangerous. [2]",
        "Explain why a depressant can appear to lift mood at first. [2]",
      ],
    },
    {
      title: "Stimulants",
      body: `### What a stimulant does\n\nA **stimulant** speeds the nervous system up, raising **alertness, heart rate, breathing rate and blood pressure**.\n\nThe user feels more awake and keyed-up, but the boost is followed by a crash.\n\n### Everyday and illegal stimulants\n**Caffeine**, in tea, coffee and cola, and **nicotine**, in tobacco, are the most widely used legal stimulants. Illegal stimulants include **cocaine** and **ecstasy (MDMA)**.\n\n### The crash afterwards\nWhen the drug wears off there is often a **crash**, with tiredness, low mood and poor concentration. That unpleasant comedown can push the user to take more, which feeds dependence.\n\n### Why they are risky\n\nStimulants force the heart and breathing to work harder than the body needs, so heavy use strains the cardiovascular system.\n\nNicotine in particular is strongly **addictive**, making repeated use very hard to stop.`,
      groups: [
        {
          subTitle: "How Stimulants Act",
          bullets: [
            "**Stimulants** increase the activity of the CNS, raising alertness and attention.",
            "They **raise heart rate and breathing rate** and increase blood pressure.",
            "The user feels more awake and energetic for a short time.",
            "The effect is a change in **rate**, the opposite direction to a depressant.",
          ],
        },
        {
          subTitle: "Examples of Stimulants",
          bullets: [
            "**Caffeine:** in tea, coffee and cola; a mild legal stimulant.",
            "**Nicotine:** in tobacco; a legal stimulant that is strongly **addictive**.",
            "**Cocaine:** an illegal stimulant with powerful, short-lived effects.",
            "**Ecstasy (MDMA):** an illegal stimulant that can also raise body temperature dangerously.",
          ],
        },
        {
          subTitle: "The Crash and the Risks",
          bullets: [
            "After the drug wears off comes a **crash** of tiredness and low mood.",
            "The crash can drive the user to take more, beginning a cycle of dependence.",
            "Stimulants make the heart work harder, straining the cardiovascular system.",
            "Heavy use can cause anxiety, insomnia and persistently raised blood pressure.",
          ],
        },
      ],
      examinerTips: [
        "Pair each effect with a measurement: faster pulse, faster breathing, higher blood pressure. Examiners award marks for the specific changes.",
        "Link 'speeding up' to the class name — a stimulant **stimulates** the CNS.",
        "Name at least one legal example (caffeine or nicotine) and one illegal example (cocaine) when examples are asked for.",
        "Explain the **crash** as the comedown after the drug wears off, and link it to continued use.",
      ],
      commonMistakes: [
        "Saying a stimulant makes a person taller or stronger. It changes the **rate** of body systems, not their size.",
        "Naming alcohol as a stimulant. Alcohol is a **depressant**.",
        "Confusing stimulants with pain-killers. Pain-killers relieve pain; stimulants speed the CNS.",
        "Believing a stimulant has no downside. It strains the heart and can be addictive.",
      ],
      recap: [
        "Define stimulant and give two examples. [3]",
        "Describe two effects of a stimulant on the body. [2]",
        "Explain what is meant by the 'crash' after a stimulant wears off. [2]",
        "State why nicotine is difficult to stop using. [2]",
      ],
    },
    {
      title: "Pain-Killers (Analgesics)",
      body: `### What analgesics do\n**Pain-killers**, or **analgesics**, reduce the perception of pain without putting the user to sleep. They do not remove the cause of the pain, only the sensation of it.\n\n### Mild pain-killers\n**Aspirin** and **paracetamol** are mild pain-killers sold over the counter. They are used for everyday aches and also to reduce **fever**.\n\n### Strong pain-killers\n**Codeine** and **morphine** are stronger pain-killers derived from **opium**, which is obtained from the opium poppy. They are reserved for severe pain, for example after surgery or a serious injury.\n\n### The risks of the strong kinds\nStrong pain-killers also **depress the nervous system**, slowing breathing, and they become **addictive** when used repeatedly. That is why they are strictly controlled and issued only by a doctor.\n\n### Why dose matters\n\nTaking an **opioid** overdose slows breathing to a dangerous level, which can be fatal.\n\nThe narrow gap between a helpful dose and a harmful one is exactly why these drugs are carefully measured.`,
      figure: medicinePlantsArt,
      groups: [
        {
          subTitle: "Mild Pain-Killers",
          bullets: [
            "**Aspirin:** a mild, over-the-counter pain-killer that also reduces fever.",
            "**Paracetamol:** a mild pain-killer used for everyday aches and to lower fever.",
            "**Mild analgesics** do not cause dependence at normal doses.",
            "They relieve the **symptom** of pain, not the underlying cause of it.",
          ],
        },
        {
          subTitle: "Strong Pain-Killers from Opium",
          bullets: [
            "**Codeine and morphine:** strong pain-killers derived from **opium**.",
            "**Source:** opium is obtained from the **opium poppy**, a plant long used for medicine.",
            "They are used for **severe pain**, such as after surgery or serious injury.",
            "Strong pain-killers also **depress the nervous system** and slow breathing.",
          ],
        },
        {
          subTitle: "Control and Danger",
          bullets: [
            "Strong analgesics become **addictive** with repeated use, so doctors control them strictly.",
            "An **opioid overdose** slows breathing to a dangerous or fatal level.",
            "The gap between a safe dose and a harmful one is small, so the dose must be exact.",
            "They are supplied by prescription and monitored because of that risk.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish mild pain-killers (**aspirin, paracetamol**) from strong opium-derived ones (**codeine, morphine**) when addiction is asked about.",
        "Add the **side-effect**, not just the use: strong pain-killers depress breathing and are addictive.",
        "State that analgesics relieve the **symptom** of pain, not its cause, when a question asks what they actually do.",
        "Name **opium, from the opium poppy**, as the source of morphine and codeine to secure the origin mark.",
      ],
      commonMistakes: [
        "Saying pain-killers cure the cause of pain. They relieve the **symptom**; the underlying problem may remain.",
        "Treating all pain-killers as safe. The stronger kinds cause **dependence**.",
        "Placing morphine among the mild pain-killers. It is a **strong, opium-derived** analgesic.",
        "Saying strong pain-killers speed up the nervous system. They **depress** it and slow breathing.",
      ],
      recap: [
        "Name two mild pain-killers and two strong pain-killers. [4]",
        "State where morphine and codeine come from. [1]",
        "Explain why strong pain-killers are carefully controlled by doctors. [2]",
        "Explain how an opioid overdose can be fatal. [2]",
      ],
    },
    {
      title: "Tobacco and Alcohol as Legal Drugs",
      body: `### The two biggest legal drugs\n\nTobacco and alcohol are the two drugs most widely used in the world, and both are **legal** for adults.\n\nTheir medical and social costs are, however, very high, which is exactly why they are studied.\n\n### What is in tobacco smoke\nTobacco smoke is a mixture of harmful chemicals, and three carry most of the damage. These are **nicotine**, **tar** and **carbon monoxide**, each harming the body in its own way.\n\n### What alcohol does\nAlcohol is a **depressant**, so it slows the nervous system and impairs judgement and coordination. Heavy, long-term use damages the **liver**, and it is addictive.\n\n### Why they are studied together\nBoth are legal, both are addictive, and both cause disease that builds up slowly over years. That combination of easy access and hidden harm is why public health targets them.`,
      groups: [
        {
          subTitle: "The Chemicals in Tobacco Smoke",
          bullets: [
            "**Nicotine:** the addictive **stimulant** in tobacco; it raises heart rate and blood pressure.",
            "**Tar:** a brown coating and a **carcinogen** that damages the alveoli and paralyses the cilia.",
            "**Carbon monoxide:** binds strongly to **haemoglobin**, displacing oxygen so the body is starved of oxygen.",
            "**Tar and cilia:** tar destroys the cilia that sweep mucus and dirt from the airways.",
            "It is the **tar**, not the nicotine, that is the main carcinogen in smoke.",
          ],
        },
        {
          subTitle: "The Diseases Caused by Smoking",
          bullets: [
            "**Lung cancer:** caused mainly by the carcinogens in tar.",
            "**Emphysema:** the **alveoli are destroyed**, reducing the surface area for gas exchange.",
            "**Bronchitis:** inflamed airways that fill with mucus and cause a persistent cough.",
            "**Coronary heart disease:** narrowed arteries, raising the risk of a heart attack.",
            "**Foetal harm:** smoking during pregnancy lowers birth mass and endangers the developing baby.",
          ],
        },
        {
          subTitle: "Alcohol as a Legal Drug",
          bullets: [
            "**A depressant:** alcohol slows reactions and impairs judgement, speech, memory and coordination.",
            "**Cirrhosis:** long heavy use replaces liver cells with **scar tissue**, so the liver shrinks and fails.",
            "**Addictive:** regular use leads to dependence and also damages the brain, heart and gut lining.",
            "**Social harm:** accidents, violence and harm to an unborn child are part of why alcohol is regulated.",
          ],
        },
      ],
      figure: organDamageDiagram + "\n\n" + smokingAlcoholArt,
      examinerTips: [
        "Name the specific chemical and its specific damage — **nicotine = addiction, tar = cancer, carbon monoxide = less oxygen carried**.",
        "For alcohol, always give the **liver and cirrhosis** plus one effect on the brain or reactions, to secure both halves of a question.",
        "Define a **carcinogen** as a substance that causes cancer, and attach it to **tar**.",
        "Explain carbon monoxide by saying it **binds haemoglobin** and reduces oxygen transport, rather than calling it simply 'toxic'.",
      ],
      commonMistakes: [
        "Calling nicotine a carcinogen. **Tar** is the carcinogen; nicotine is the addictive stimulant.",
        "Saying carbon monoxide is toxic because it is acidic. It is harmful because it **binds haemoglobin** and stops oxygen being transported.",
        "Confusing emphysema with bronchitis. Emphysema **destroys the alveoli**; bronchitis **inflames the airways**.",
        "Saying cirrhosis is fat building up in the liver. It is the replacement of liver cells by **scar tissue**.",
      ],
      recap: [
        "State the harmful effect of tar, nicotine and carbon monoxide found in tobacco smoke. [3]",
        "Describe how carbon monoxide reduces the oxygen carried by the blood. [2]",
        "Explain how long-term alcohol use can lead to cirrhosis of the liver. [3]",
        "Explain why nicotine makes smoking difficult to give up. [2]",
      ],
    },
    {
      title: "Addiction and Self-Medication",
      body: `### What addiction is\nMany drugs change the chemistry of the brain enough that the body begins to **need** them. This **dependence** is what makes stopping so difficult.\n\n### Tolerance comes first\nWith repeated use the body adapts, so a **larger dose** is needed to get the same effect. This rising requirement is called **tolerance**.\n\n### Dependence and withdrawal\n\nOnce **dependence** forms, the person cannot function normally without the drug.\n\nStopping it brings **withdrawal symptoms** such as shaking, sweating, nausea and intense craving, which push the user to take more.\n\n### Physical and psychological\n\nAddiction can be **physical**, where the body has come to depend on the drug chemically.\n\nIt can also be **psychological**, where the user feels they need the drug to cope with everyday life.\n\n### Self-medication\n\n**Self-medication** is treating yourself with drugs without proper medical advice, including sharing prescription medicines or taking unlicensed substances.\n\nIts risks are a wrong drug or dose, masking a serious illness, dangerous interactions, and developing a dependence.`,
      groups: [
        {
          subTitle: "Tolerance and Dependence",
          bullets: [
            "**Addiction (dependence):** the body needs the drug to function normally and the user cannot easily stop.",
            "**Tolerance:** the body adapts, so a **larger dose** is needed for the same effect.",
            "**Withdrawal symptoms:** shaking, sweating, nausea and craving appear when the drug is stopped.",
            "**Physical dependence:** the body's chemistry has come to rely on the drug.",
            "**Psychological dependence:** the user feels they need the drug to cope.",
          ],
        },
        {
          subTitle: "The Cycle of Addiction",
          bullets: [
            "**Regular use** leads to **tolerance**, which in turn leads to **dependence**.",
            "Without the drug, **withdrawal** begins, so the user takes more just to feel normal again.",
            "**Craving** keeps the cycle going, which is why relapse is so common.",
          ],
        },
        {
          subTitle: "Self-Medication and Its Dangers",
          bullets: [
            "**Self-medication:** treating yourself without proper medical advice, including shared prescriptions.",
            "**Wrong drug or dose:** the user may take too much or the wrong medicine.",
            "**Masking illness:** a symptom is hidden while the real disease goes undiagnosed.",
            "**Dangerous interactions:** one drug can react badly with another being taken.",
            "**Risk of dependence:** easy access to a drug can quietly begin an addiction.",
          ],
        },
      ],
      figure: addictionDiagram,
      examinerTips: [
        "Define **tolerance** and **dependence** as separate points; questions often want one mark each.",
        "For the dangers of self-medication, name a **mechanism** — wrong dose, hidden illness, addiction — not just 'it is bad'.",
        "Describe the addiction cycle in order: **use → tolerance → dependence → withdrawal → craving**.",
        "Distinguish **physical** from **psychological** dependence when a question asks how addiction works.",
      ],
      commonMistakes: [
        "Equating tolerance with addiction. Tolerance is needing **more** drug; addiction is needing the drug **at all**.",
        "Assuming self-medication only means illegal drugs. Sharing or misusing prescribed medicines counts too.",
        "Saying withdrawal makes a person feel better. Withdrawal symptoms are the unpleasant effect of **stopping** the drug.",
        "Thinking only physical addiction exists. **Psychological** dependence matters just as much.",
      ],
      recap: [
        "Define the term addiction. [2]",
        "Explain how tolerance and withdrawal symptoms keep an addicted person taking a drug. [4]",
        "State three dangers of self-medication. [3]",
        "Distinguish between physical and psychological dependence. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_15: Chapter = ch15;
