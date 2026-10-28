import type { SubjectNotes } from "./types";

export const PSYCHOLOGY: SubjectNotes = {
  id: "psychology",
  name: "Psychology",
  code: "0478",
  color: "bg-violet-500",
  chapters: [
    {
      number: 1,
      title: "Research Methods in Psychology",
      intro:
        " **What is this topic all about?** Psychology is the scientific study of behaviour and mental processes. Unlike common sense, psychology uses systematic, controlled methods to investigate questions about why people think, feel, and behave as they do. Understanding research methods is not just a topic in itself — it underpins everything else in the course, because every psychological finding rests on the quality of the study that produced it.",
      subheadings: [
        {
          title: "The Scientific Method in Psychology",
          body: "Psychology aims to be a science — using objective, replicable, and systematic methods to collect and analyse evidence. The scientific method provides a structured cycle from observation to theory to prediction to testing. ",
          groups: [
            {
              bullets: [
                "**Observation**: The research cycle begins with a curious observation — noticing a pattern of behaviour or an unexplained phenomenon in everyday life or previous research.",
                "**Hypothesis**: A testable, falsifiable prediction derived from a theory — written as an **operationalised** statement specifying exactly how variables will be measured. A null hypothesis (H₀) states no difference/relationship; an alternative/experimental hypothesis (H₁) predicts a specific difference or relationship.",
                "**Theory**: A well-substantiated explanation of a set of related observations — a broader framework supported by multiple studies. Theories generate testable hypotheses.",
                "**Replication**: Repeating a study to check whether the same results are obtained — essential for reliability. If a result cannot be replicated, it may be a false positive or context-specific.",
                "**Falsifiability (Popper)**: A cornerstone of science — a hypothesis must be capable of being proven wrong. Theories that can explain any outcome regardless of results are not scientific.",
                "**Peer review**: Research findings are evaluated by independent experts in the field before publication — guards against methodological flaws and fraudulent data.",
              ],
            },
            {
              subTitle:
                ' "The Scientific Method in Psychology" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "The Scientific Method in Psychology" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Research Methods — Experiments",
          body: "The experiment is the gold-standard method for establishing **cause and effect** in psychology. By manipulating an independent variable (IV) and measuring its effect on a dependent variable (DV) while controlling all other variables (CVs), the researcher can infer that IV changes *caused* DV changes. ",
          groups: [
            {
              subTitle: "Types of Experiment",
              bullets: [
                "**Laboratory experiment**: Conducted in a controlled, artificial environment; high control of extraneous variables; high internal validity; low ecological validity (may not reflect real-world behaviour); demand characteristics likely (participants know they are being studied).",
                "**Field experiment**: Conducted in the participant's natural environment; IV is still manipulated by the researcher; higher ecological validity; less control of extraneous variables; participants may not know they are in a study (reduces demand characteristics, raises ethical issues).",
                "**Natural / quasi-experiment**: The IV changes naturally or already exists (e.g. comparing children before and after a natural disaster) — the researcher does not manipulate the IV; no random allocation; cannot fully establish causation; high ecological validity; studies unusual or ethically impossible scenarios.",
              ],
            },
            {
              subTitle: "Key Variables and Controls",
              bullets: [
                "**Independent Variable (IV)**: The variable the researcher manipulates — the 'cause'. Must be operationalised (e.g. 'stress level' operationalised as 'number of maths problems under time pressure').",
                "**Dependent Variable (DV)**: The variable the researcher measures — the 'effect'. Must also be operationalised for reliability.",
                "**Extraneous variables (EVs)**: Any variable other than the IV that could affect the DV — must be controlled.",
                "**Confounding variable**: An EV that has systematically varied alongside the IV — makes it impossible to determine whether the IV or the confound caused changes in the DV.",
                "**Standardised procedures**: Identical instructions and conditions for all participants — reduces EVs and allows replication.",
                "**Counterbalancing (repeated measures)**: ABBA design or randomised order of conditions across participants — controls for order effects (practice, fatigue, boredom).",
              ],
            },
            {
              subTitle:
                ' "Research Methods — Experiments" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Research Methods — Experiments" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Non-Experimental Methods",
          body: "When experiments are unethical or impractical, psychologists use non-experimental methods. These sacrifice causal inference but gain ecological validity or access to variables that cannot be manipulated. ",
          groups: [
            {
              bullets: [
                "**Observation**: Watching and recording behaviour systematically. **Naturalistic**: In the real world without intervention (highest ecological validity); **Controlled**: In a structured setting; **Covert**: Participants unaware (reduces demand characteristics, raises ethics); **Overt**: Participants know they are observed.",
                "**Case study**: In-depth, detailed investigation of a single individual, group, or event — e.g. HM (Henry Molaison) for memory, Genie for language acquisition; rich qualitative data; cannot be generalised; unique; may be biased by researcher interpretation.",
                "**Self-report methods**: ",
                "**Interview**: Structured (fixed questions — reliable, comparable), semi-structured (fixed + follow-up probes — flexible), unstructured (free conversation — rich but unreliable); social desirability bias risk.",
                "**Questionnaire**: Written questions — Likert scale (1–5 agreement), open (qualitative, rich) or closed (quantitative, easy to analyse); cheap, quick, large samples; demand characteristics; social desirability.",
                "**Correlation**: Measures the strength and direction of a relationship between two variables (not manipulation — cannot establish causation). **Positive correlation**: Both variables increase together; **Negative correlation**: One increases as the other decreases; **Zero/No correlation**: No linear relationship. Measured by correlation coefficient $r$ (−1.00 to +1.00). Correlation ≠ causation — a third variable may cause both.",
              ],
            },
            {
              subTitle: ' "Non-Experimental Methods" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Non-Experimental Methods" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: " Chapter 1 Exam Mastery: Top Mistakes & How to Get Full Marks",
          body: 'Here is your cheat-sheet for Chapter 1: "Research Methods in Psychology". These are the exact pitfalls examiners point out in examiner reports year after year.',
          groups: [
            {
              subTitle: " The 3 Biggest Mistakes Students Make in This Chapter",
              bullets: [
                "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
                "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
                "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result.",
              ],
            },
            {
              subTitle: " Golden Rules for Full Marks",
              bullets: [
                "**Rule 1 — Use the exact keywords**: examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
                "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
                "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps).",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Memory — Models and Forgetting",
      intro:
        " **What is this topic all about?** Memory is not a single, monolithic ability — it is a collection of related processes: encoding (getting information in), storage (retaining it), and retrieval (getting it back out). Psychologists have proposed several influential models of how memory is structured and operates, and have identified systematic ways in which it fails.",
      subheadings: [
        {
          title: "The Multi-Store Model of Memory (Atkinson & Shiffrin, 1968)",
          body: "The Multi-Store Model (MSM) was the first major cognitive model of memory. It proposes three distinct memory stores with different capacities, durations, and encoding processes.\n\n![Memory stores — sensory, short-term, long-term model](/diagrams/quadratic-graph.svg) ",
          groups: [
            {
              subTitle: "Three Memory Stores",
              bullets: [
                "**Sensory Register (SR)**: All sensory information from the environment is briefly held — **duration**: less than 1 second (iconic/visual store); **capacity**: large but most information decays or is not attended to; **encoding**: modality-specific (visual, auditory, etc.).",
                "**Short-Term Memory (STM)**: Information attended to from the SR enters STM — **duration**: approximately 15–30 seconds without rehearsal (Peterson & Peterson, 1959); **capacity**: 7 ± 2 chunks (Miller, 1956); **encoding**: primarily **acoustic** (Conrad, 1964 — phonological similarity errors); information is lost by displacement or decay.",
                "**Long-Term Memory (LTM)**: Information transferred via rehearsal from STM to LTM — **duration**: potentially permanent; **capacity**: effectively unlimited; **encoding**: primarily **semantic** (meaning-based); **retrieval** requires a cue.",
                "**Rehearsal loop**: Maintenance rehearsal (repetition) keeps information in STM; elaborative rehearsal (linking to existing knowledge) transfers it to LTM.",
              ],
            },
            {
              subTitle: "Evaluation of the MSM",
              bullets: [
                "**Support — case study HM**: Patient Henry Molaison had hippocampus removed — could form no new LTM (anterograde amnesia) but STM was intact — supports the structural distinction between stores.",
                "**Support — serial position effect**: Primacy effect (first items recalled well → transferred to LTM); recency effect (last items recalled well → still in STM) — consistent with the two-store model.",
                "**Criticism — oversimplified LTM**: LTM is not unitary — Tulving (1985) distinguished episodic, semantic, and procedural memory; the MSM treats LTM as a single store.",
                "**Criticism — rehearsal not sufficient**: Depth of processing (Craik & Lockhart) matters more than amount of rehearsal — we remember deeply processed information better even without extended rehearsal.",
              ],
            },
            {
              subTitle:
                ' "The Multi-Store Model of Memory (Atkinson & Shiffrin, 1968)" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "The Multi-Store Model of Memory (Atkinson & Shiffrin, 1968)" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "The Working Memory Model (Baddeley & Hitch, 1974)",
          body: "Baddeley and Hitch replaced the unitary STM with a more complex, active working memory system. Working memory is not merely a passive store — it actively manipulates and processes information for cognitive tasks. ",
          groups: [
            {
              bullets: [
                "**Central Executive**: The supervisory component — allocates attentional resources, coordinates the slave systems, switches between tasks; limited capacity; most important component; not yet fully understood.",
                "**Phonological Loop**: Processes and temporarily stores verbal and acoustic information — subdivided into: **Phonological store** (inner ear — holds speech-based information for ~2 seconds) and **Articulatory control process** (inner voice — rehearses and refreshes the phonological store).",
                "**Visuo-spatial Sketchpad**: Processes and temporarily stores visual and spatial information — the 'inner eye'; used for mental imagery, navigation, and visualising objects.",
                "**Episodic Buffer (Baddeley, 2000)**: A later addition — a limited-capacity temporary store that integrates information from the phonological loop, visuo-spatial sketchpad, and LTM into a unified, multi-modal episode.",
              ],
            },
            {
              subTitle:
                ' "The Working Memory Model (Baddeley & Hitch, 1974)" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "The Working Memory Model (Baddeley & Hitch, 1974)" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Forgetting — Why Memory Fails",
          body: "Forgetting is not random — it is systematic and follows predictable patterns. Understanding *why* we forget has practical implications for study strategies, eyewitness testimony, and therapy. ",
          groups: [
            {
              bullets: [
                "**Trace decay (STM)**: Memory trace (engram) fades passively over time if not rehearsed — supported by Peterson & Peterson's trigram study showing rapid STM forgetting over 18 seconds.",
                "**Displacement (STM)**: New incoming information pushes older information out of limited-capacity STM — like replacing items in a full inbox.",
                "**Interference (LTM)**: Similar memories compete with each other — **proactive interference** (PI): older learning interferes with new — e.g. previously learned French vocabulary interferes with new Spanish; **retroactive interference** (RI): new learning interferes with old.",
                "**Retrieval failure / Encoding Specificity (LTM)**: Tulving's **Encoding Specificity Principle** — memories are stored with context; retrieval is best when context at recall matches context at encoding. **Context-dependent forgetting** (Godden & Baddeley, 1975 — divers): material learned underwater recalled better underwater. **State-dependent forgetting**: Mood or drug state at encoding affects retrieval.",
                "**Motivated forgetting (repression)**: Freud proposed that emotionally painful memories are pushed into the unconscious — controversial and not well supported by experimental evidence.",
              ],
            },
            {
              subTitle: ' "Forgetting — Why Memory Fails" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Forgetting — Why Memory Fails" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: " Chapter 2 Exam Mastery: Top Mistakes & How to Get Full Marks",
          body: 'Here is your cheat-sheet for Chapter 2: "Memory — Models and Forgetting". These are the exact pitfalls examiners point out in examiner reports year after year.',
          groups: [
            {
              subTitle: " The 3 Biggest Mistakes Students Make in This Chapter",
              bullets: [
                "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
                "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
                "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result.",
              ],
            },
            {
              subTitle: " Golden Rules for Full Marks",
              bullets: [
                "**Rule 1 — Use the exact keywords**: examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
                "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
                "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps).",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Development — Cognitive and Social Development",
      intro:
        " **What is this topic all about?** Developmental psychology studies how humans change throughout the lifespan — in thinking, social understanding, emotion, and behaviour. The two most influential developmental theories in the IGCSE syllabus are Piaget's theory of cognitive development and Vygotsky's sociocultural theory.",
      subheadings: [
        {
          title: "Piaget's Theory of Cognitive Development",
          body: "Jean Piaget (1896–1980) proposed that children's thinking develops through four qualitatively distinct stages, driven by the processes of assimilation, accommodation, and equilibration. ",
          groups: [
            {
              bullets: [
                "**Schemas**: Mental frameworks — organised units of knowledge; the building blocks of thought. A baby's sucking schema is gradually differentiated into schemas for different objects.",
                "**Assimilation**: New information is fitted into an existing schema — e.g. calling all men 'daddy'.",
                "**Accommodation**: A new schema is created or an existing one modified when new information cannot be assimilated — cognitive growth.",
                "**Equilibration**: The drive to balance assimilation and accommodation — disequilibrium (cognitive conflict) motivates learning.",
                "**Stage 1 — Sensorimotor (0–2 years)**: Learning through sensory experience and motor action; key achievement: **object permanence** — understanding that objects exist even when out of sight (Piaget — not before 8 months; Bower — earlier).",
                "**Stage 2 — Pre-operational (2–7 years)**: Language development; symbolic thinking; key limitations: **egocentrism** (cannot take others' perspective — Three Mountains Task); **centration** (focusing on one dimension only); **lack of conservation** (does not understand that quantity remains constant despite changes in appearance — Piaget's liquid conservation task).",
                "**Stage 3 — Concrete Operational (7–11 years)**: Logical thinking about concrete objects; achieves conservation; **class inclusion**; **seriation**; reduced egocentrism.",
                "**Stage 4 — Formal Operational (11+ years)**: Abstract reasoning, hypothetical-deductive thinking, systematic problem-solving.",
              ],
            },
            {
              subTitle:
                ' "Piaget\'s Theory of Cognitive Development" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Piaget\'s Theory of Cognitive Development" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Vygotsky's Sociocultural Theory",
          body: "Lev Vygotsky (1896–1934) emphasised the central role of social interaction and culture in cognitive development — a direct contrast to Piaget's view of the child as an independent discoverer. ",
          groups: [
            {
              bullets: [
                "**Zone of Proximal Development (ZPD)**: The gap between what a learner can do alone and what they can achieve with guidance from a more knowledgeable other (MKO) — e.g. a teacher, parent, or more capable peer.",
                "**Scaffolding (Wood, Bruner, Ross, 1976)**: Temporary, adjusted support provided by the MKO to help the learner complete a task within their ZPD — gradually withdrawn as the learner becomes competent (fading).",
                "**Inner speech**: Vygotsky proposed that language originally used for social communication becomes internalised as private speech and then inner speech — the tool of thought; children think in words.",
                "**Cultural tools**: Language, number systems, writing, mathematical symbols — culturally transmitted tools that mediate and shape cognition.",
              ],
            },
            {
              subTitle:
                ' "Vygotsky\'s Sociocultural Theory" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Vygotsky\'s Sociocultural Theory" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Social Development — Attachment Theory",
          body: "Attachment is a deep, enduring emotional bond that connects one person to another across time and space (Ainsworth). John Bowlby proposed that attachment is an evolutionary adaptation critical to survival and subsequent socio-emotional development. ",
          groups: [
            {
              bullets: [
                "**Bowlby's Attachment Theory (1969)**: Attachment is innate and evolutionarily adaptive — infants are pre-programmed to form attachments with caregivers who provide safety and food.",
                "**Monotropy**: Bowlby proposed that infants form one primary attachment (usually the mother) that is qualitatively different from others — the internal working model shapes all future relationships.",
                "**Internal Working Model**: A cognitive-emotional template of relationships derived from the primary attachment — affects expectations and behaviour in all subsequent relationships.",
                "**Ainsworth's Strange Situation (1970)**: A controlled procedure assessing attachment type in 12-18 month olds — mother leaves, stranger enters, mother returns in a fixed sequence; measures separation anxiety, stranger anxiety, and reunion behaviour.",
                "**Secure attachment (Type B)**: Uses the caregiver as a safe base; distressed on separation; easily comforted on reunion; 60–70% of Western samples.",
                "**Insecure-Avoidant (Type A)**: Little distress on separation; avoids caregiver on reunion; approximately 20% of samples.",
                "**Insecure-Resistant/Ambivalent (Type C)**: Very distressed on separation; not comforted on reunion — clingy but resistive; approximately 10–15% of samples.",
              ],
            },
            {
              subTitle:
                ' "Social Development — Attachment Theory" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Social Development — Attachment Theory" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: " Chapter 3 Exam Mastery: Top Mistakes & How to Get Full Marks",
          body: 'Here is your cheat-sheet for Chapter 3: "Development — Cognitive and Social Development". These are the exact pitfalls examiners point out in examiner reports year after year.',
          groups: [
            {
              subTitle: " The 3 Biggest Mistakes Students Make in This Chapter",
              bullets: [
                "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
                "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
                "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result.",
              ],
            },
            {
              subTitle: " Golden Rules for Full Marks",
              bullets: [
                "**Rule 1 — Use the exact keywords**: examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
                "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
                "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps).",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Social Influence — Conformity, Obedience, and Group Behaviour",
      intro:
        " **What is this topic all about?** We do not act in isolation — our behaviour is profoundly shaped by the presence, opinions, and actions of others. Social influence research investigates how individuals are affected by social groups and authority, often producing disturbing findings about human compliance with harmful norms.",
      subheadings: [
        {
          title: "Conformity — Asch's Line Studies",
          body: "Solomon Asch (1951) conducted a classic series of experiments demonstrating that people will publicly agree with an obviously incorrect group opinion, even when they can clearly see the truth for themselves. ",
          groups: [
            {
              bullets: [
                "**Procedure**: Participants judged which of three lines matched a standard line — a simple, unambiguous perceptual task. All other group members were confederates who gave unanimous wrong answers on 12 out of 18 trials.",
                "**Results**: Approximately 75% of real participants conformed on at least one critical trial; the overall conformity rate was 37% across critical trials. In a control condition (no confederates) the error rate was < 1%.",
                "**Types of conformity**: **Compliance** (public agreement while privately disagreeing); **Internalisation** (genuine change of both public and private views); **Identification** (conforming to a role or group identity).",
                "**Informational social influence (ISI)**: Conforming because we genuinely believe others know better — especially in ambiguous or novel situations.",
                "**Normative social influence (NSI)**: Conforming to fit in and be liked — social norms create powerful pressure to conform publicly even when privately disagreeing.",
                "**Factors affecting conformity**: Group size (plateaus at 3–4 people), unanimity (one ally dramatically reduces conformity — to 5%), task difficulty (more conformity on harder tasks), cultural factors.",
              ],
            },
            {
              subTitle:
                ' "Conformity — Asch\'s Line Studies" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Conformity — Asch\'s Line Studies" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Obedience — Milgram's Shock Experiments",
          body: "Stanley Milgram (1963) conducted the most famous and ethically controversial experiments in psychology's history, revealing the extraordinary power of authority figures to command obedience to destructive orders. ",
          groups: [
            {
              bullets: [
                "**Procedure**: Participants ('teachers') believed they were administering increasingly severe electric shocks (15V–450V, labelled up to 'Danger: Severe Shock XXX') to a 'learner' (confederate) for memory errors. An authority figure (experimenter in lab coat) issued standardised prods to continue.",
                "**Results**: 65% of participants administered the maximum 450V shock. All participants reached at least 300V. Prior to the study, psychiatrists predicted fewer than 1% would go to maximum voltage.",
                "**Explanations for obedience**: **Agentic shift** — participants transferred moral responsibility to the authority figure ('just following orders'); **Legitimate authority** — experimenter's lab coat and Yale location conferred authority; **Gradual commitment** (foot-in-the-door) — each shock level was only slightly higher than the last.",
                "**Situational factors reducing obedience**: Proximity (victim in same room) — 40% compliance; Remoteness (authority figure gives orders by phone) — 20.5% compliance; Peer rebels (two confederate teachers refuse) — 10% compliance.",
                "**Ethical issues**: Deception (participants believed shocks were real), psychological harm (extreme stress observed), no right to withdraw effectively communicated — Milgram's debriefing and follow-up studies showed most participants reported being glad to have participated and suffered no lasting harm.",
              ],
            },
            {
              subTitle:
                ' "Obedience — Milgram\'s Shock Experiments" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Obedience — Milgram\'s Shock Experiments" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Prejudice and Discrimination",
          body: "Prejudice is a negative attitude held toward members of a social group based solely on group membership. Discrimination is the behavioural expression of prejudice. Understanding their origins is critical for addressing social injustice. ",
          groups: [
            {
              bullets: [
                "**Social Identity Theory (Tajfel & Turner, 1979)**: People derive part of their self-concept from group membership (social identity) — the **in-group** (us) is favoured over the **out-group** (them) through in-group bias to enhance self-esteem. **Minimal group experiments** — even arbitrary group allocation (overestimators vs underestimators) produced in-group favouritism.",
                "**Realistic Conflict Theory (Sherif, 1954 — Robbers Cave)**: Prejudice arises from competition between groups for scarce resources — the Robbers Cave study demonstrated in-group solidarity, out-group hostility, and then reduction of hostility through **superordinate goals** (requiring both groups to cooperate).",
                "**Reducing prejudice**: Contact hypothesis (Allport, 1954) — equal-status contact between groups under supportive conditions reduces prejudice; Cooperative learning (jigsaw classroom, Aronson); Recategorisation — emphasising shared identity over group distinctions.",
              ],
            },
            {
              subTitle: ' "Prejudice and Discrimination" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Prejudice and Discrimination" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: " Chapter 4 Exam Mastery: Top Mistakes & How to Get Full Marks",
          body: 'Here is your cheat-sheet for Chapter 4: "Social Influence — Conformity, Obedience, and Group Behaviour". These are the exact pitfalls examiners point out in examiner reports year after year.',
          groups: [
            {
              subTitle: " The 3 Biggest Mistakes Students Make in This Chapter",
              bullets: [
                "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
                "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
                "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result.",
              ],
            },
            {
              subTitle: " Golden Rules for Full Marks",
              bullets: [
                "**Rule 1 — Use the exact keywords**: examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
                "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
                "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps).",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Biological Psychology — Brain, Genes, and Behaviour",
      intro:
        " **What is this topic all about?** The biological approach in psychology examines how the brain, nervous system, genes, and hormones influence behaviour. It provides a scientific, materialist account of mental life — our thoughts and feelings are ultimately the product of electrochemical processes in the brain.",
      subheadings: [
        {
          title: "The Brain and Behaviour",
          body: "Modern neuroscience, using brain scanning technologies and studying people with brain damage, has mapped many relationships between specific brain regions and specific psychological functions. ",
          groups: [
            {
              subTitle: "Key Brain Structures",
              bullets: [
                "**Cerebral cortex**: The outer layer of the cerebrum — responsible for higher cognitive functions; divided into four lobes per hemisphere: **Frontal** (reasoning, planning, personality, motor control — Broca's area for speech production), **Parietal** (sensory integration, spatial awareness), **Temporal** (hearing, language comprehension — Wernicke's area, memory), **Occipital** (visual processing).",
                "**Hippocampus**: Critical for forming new explicit (episodic and semantic) memories — lesions produce anterograde amnesia (HM case study); also involved in spatial navigation.",
                "**Amygdala**: The brain's emotional alarm centre — processes fear and emotional memories; involved in the fight-or-flight response; amygdala damage impairs fear conditioning.",
                "**Hypothalamus**: Regulates homeostasis — hunger, thirst, body temperature, sleep, circadian rhythms; controls the pituitary gland (endocrine system master gland).",
                "**Corpus callosum**: The bundle of nerve fibres connecting the two hemispheres — severing it (split-brain surgery) produces dramatic dissociation of the two hemispheres' functions.",
              ],
            },
            {
              subTitle: "Neurotransmitters and Behaviour",
              bullets: [
                "**Dopamine**: Associated with reward, motivation, and motor control; excess dopamine linked to schizophrenia (dopamine hypothesis); depleted in Parkinson's disease.",
                "**Serotonin**: Regulates mood, sleep, appetite, and social behaviour; low serotonin linked to depression and aggression — SSRIs (selective serotonin reuptake inhibitors) like fluoxetine increase synaptic serotonin levels.",
                "**Noradrenaline (norepinephrine)**: Stress response, alertness, attention; released in fight-or-flight.",
                "**GABA (gamma-aminobutyric acid)**: The primary inhibitory neurotransmitter — reduces neuronal excitability; benzodiazepines (e.g. diazepam) enhance GABA action → anxiolytic (anxiety-reducing) effect.",
              ],
            },
            {
              subTitle: ' "The Brain and Behaviour" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "The Brain and Behaviour" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Genetics and Behaviour",
          body: "Behavioural genetics investigates the relative contributions of genetic inheritance and environmental experience to individual differences in behaviour. The nature–nurture debate is central to this field. ",
          groups: [
            {
              bullets: [
                "**Twin studies**: Compare identical (monozygotic, MZ — 100% shared DNA) and fraternal (dizygotic, DZ — ~50% shared DNA) twins. If MZ twins are more concordant (both having a trait) than DZ twins, genetic factors are implicated. **Concordance**: The percentage of pairs in which both twins show the same characteristic.",
                "**Heritability estimate (h²)**: The proportion of variance in a trait within a population that can be attributed to genetic differences — NOT a fixed property of a trait; varies with environment. h² = 0 means no genetic influence; h² = 1 means entirely genetic.",
                "**Intelligence and heritability**: Meta-analyses suggest heritability of IQ in adults is approximately 0.5–0.8 — substantial genetic influence but environment (nutrition, education, stimulation) also significantly affects IQ.",
                "**Schizophrenia**: MZ concordance ~50%; DZ concordance ~15%; lifetime risk in general population ~1% — strong genetic component, but MZ concordance < 100% confirms environmental factors are also necessary.",
                "**Epigenetics**: Gene expression can be modified by environmental experiences (methylation, histone modification) without changing the DNA sequence — bridges the nature–nurture divide; trauma, diet, and stress can alter gene expression patterns that may be inherited.",
              ],
            },
            {
              subTitle: ' "Genetics and Behaviour" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Genetics and Behaviour" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Stress — Causes and Responses",
          body: "Stress is the physiological and psychological response to demands that exceed perceived coping resources. The transactional model (Lazarus & Folkman) sees stress not as a stimulus or a response but as a *transaction* between the person and the environment. ",
          groups: [
            {
              bullets: [
                "**The General Adaptation Syndrome (GAS — Selye, 1936)**: Three stages of the body's response to prolonged stress — **Alarm** (fight-or-flight: adrenaline release, raised heart rate, muscle tension); **Resistance** (body adapts and appears to cope but resources are depleted); **Exhaustion** (resources depleted — immune function collapses, disease vulnerability increases).",
                "**HPA axis**: Hypothalamic-Pituitary-Adrenocortical axis — hypothalamus releases CRH → pituitary releases ACTH → adrenal cortex releases **cortisol** (the primary stress hormone); cortisol mobilises glucose, suppresses the immune system, and impairs memory formation in the hippocampus under chronic stress.",
                "**SAM axis**: Sympathomedullary pathway — hypothalamus → sympathetic nervous system → adrenal medulla releases **adrenaline** — rapid-onset, short-duration stress response.",
                "**Sources of stress**: Life events (Holmes-Rahe Social Readjustment Rating Scale — major changes including positive ones), daily hassles (Kanner — accumulation of minor irritants), workplace stress (demand-control model — high demand + low control = most harmful).",
                "**Coping strategies**: **Problem-focused** (directly addressing the stressor — planning, problem-solving, information-seeking); **Emotion-focused** (managing the emotional response — exercise, social support, mindfulness, cognitive reappraisal).",
              ],
            },
            {
              subTitle: ' "Stress — Causes and Responses" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Stress — Causes and Responses" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: " Chapter 5 Exam Mastery: Top Mistakes & How to Get Full Marks",
          body: 'Here is your cheat-sheet for Chapter 5: "Biological Psychology — Brain, Genes, and Behaviour". These are the exact pitfalls examiners point out in examiner reports year after year.',
          groups: [
            {
              subTitle: " The 3 Biggest Mistakes Students Make in This Chapter",
              bullets: [
                "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
                "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
                "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result.",
              ],
            },
            {
              subTitle: " Golden Rules for Full Marks",
              bullets: [
                "**Rule 1 — Use the exact keywords**: examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
                "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
                "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps).",
              ],
            },
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Abnormal Psychology — Mental Health and Treatment",
      intro:
        " **What is this topic all about?** Abnormal psychology examines psychological disorders — their definition, classification, causes, and treatment. The definition of 'abnormal' is more complex than it first appears, and both the causes of disorders and the effectiveness of treatments are contested across different psychological approaches.",
      subheadings: [
        {
          title: "Defining and Classifying Abnormality",
          body: "There is no single agreed criterion for defining abnormal behaviour. IGCSE Psychology requires knowledge of four main approaches to definition. ",
          groups: [
            {
              bullets: [
                "**Statistical infrequency**: Behaviour is abnormal if it deviates significantly from the statistical norm (the average) — e.g. IQ below 70 is statistically rare. Problem: some rare behaviours are desirable (genius, perfect pitch); some common behaviours may be pathological (moderate depression is common).",
                "**Deviation from social norms**: Behaviour that violates the social rules and expectations of a particular culture — context-dependent. Problem: social norms change over time (homosexuality was classified as a disorder until 1973 — DSM-II); cross-cultural relativity (what is normal in one culture may be abnormal in another).",
                "**Failure to function adequately**: Inability to maintain normal daily activities — work, relationships, self-care. Rosenhan & Seligman proposed seven criteria for abnormality (distress, maladaptiveness, irrationality, unpredictability, observer discomfort, violation of moral standards, unconventionality). Problem: subjective judgment.",
                "**Deviation from ideal mental health (Jahoda, 1958)**: Six criteria for positive mental health — positive self-attitude, self-actualisation, autonomy, accurate perception of reality, environmental mastery, resistance to stress. Abnormality = failure to meet these criteria. Problem: very high standards — virtually everyone is 'abnormal'; culturally specific ideals.",
              ],
            },
            {
              subTitle:
                ' "Defining and Classifying Abnormality" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Defining and Classifying Abnormality" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Depression — Causes and Treatments",
          body: "Major depressive disorder (MDD) is characterised by persistent low mood, loss of interest or pleasure (anhedonia), fatigue, cognitive difficulties, sleep and appetite disturbance, and in severe cases, suicidal ideation. It is one of the most prevalent mental health conditions globally. ",
          groups: [
            {
              subTitle: "Explanations for Depression",
              bullets: [
                "**Biological**: Low levels of monoamine neurotransmitters (serotonin, noradrenaline, dopamine) — supported by the effectiveness of antidepressants that increase monoamine levels; genetic vulnerability (MZ concordance ~37% vs DZ ~20%).",
                "**Cognitive (Beck's Negative Triad, 1967)**: Negative automatic thoughts about the **self** ('I am worthless'), the **world** ('everything is hopeless'), and the **future** ('nothing will improve') — the cognitive triad; maintained by cognitive distortions (overgeneralisation, catastrophising, personalisation).",
                "**Behavioural (learned helplessness — Seligman)**: Following repeated uncontrollable aversive events, the organism learns that its actions have no effect — gives up trying; applies to humans experiencing repeated failure, loss, or abuse.",
              ],
            },
            {
              subTitle: "Treatments for Depression",
              bullets: [
                "**Antidepressants (SSRIs — fluoxetine/Prozac)**: Prevent reuptake of serotonin → increased synaptic serotonin; take 2–4 weeks for full effect; side effects (nausea, insomnia, sexual dysfunction); effective for moderate-severe depression.",
                "**Cognitive-Behavioural Therapy (CBT)**: Identifies and challenges negative automatic thoughts and core beliefs; develops coping strategies; behavioural activation (countering avoidance); as effective as medication for mild-moderate depression; lower relapse rates than medication alone.",
                "**Interpersonal Therapy (IPT)**: Focuses on improving the quality of interpersonal relationships and communication — effective where depression is linked to grief, role transitions, or interpersonal conflict.",
              ],
            },
            {
              subTitle:
                ' "Depression — Causes and Treatments" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Depression — Causes and Treatments" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: "Ethical Issues in Psychological Research",
          body: "Because psychology investigates sentient human beings, ethical considerations are paramount. The British Psychological Society (BPS) and American Psychological Association (APA) publish regularly updated ethical guidelines. ",
          groups: [
            {
              bullets: [
                "**Informed consent**: Participants must be given sufficient information about the study to make an autonomous decision to participate — difficult when full disclosure would alter behaviour (deception studies).",
                "**Deception**: Withholding or misrepresenting information to participants — permissible only when necessary and approved by an ethics committee; must be followed by thorough debriefing.",
                "**Right to withdraw**: Participants must be free to leave at any point and withdraw their data without penalty — Milgram's prods ('You must continue') arguably violated this right.",
                "**Confidentiality and anonymity**: Personal information must be protected; publication should not permit identification of participants without their explicit consent.",
                "**Protection from harm**: Researchers must take all reasonable steps to protect participants from physical and psychological harm; distress must not exceed everyday experiences; debriefing should restore well-being.",
                "**Debriefing**: A thorough explanation of the study's true aims after completion; opportunity to ask questions; restoration of any damage to self-esteem or well-being; withdrawal of data permitted.",
              ],
            },
            {
              subTitle:
                ' "Ethical Issues in Psychological Research" — Super Simple Breakdown & Memory Tricks',
              bullets: [
                '**The 1-Minute Rule**: If you had to explain "Ethical Issues in Psychological Research" to a 10-year-old, focus on the big idea first: what is changing, what causes it, and what happens at the end.',
                "**Step-by-Step Flow**: 1. Notice the starting condition → 2. Follow the process or formula → 3. State the final result clearly with proper units or terms.",
                "**Top Examiner Trap**: Examiners love asking 'Explain why' rather than just 'State what'. Always add the word 'because...' followed by the scientific or logical reason!",
              ],
            },
          ],
        },
        {
          title: " Chapter 6 Exam Mastery: Top Mistakes & How to Get Full Marks",
          body: 'Here is your cheat-sheet for Chapter 6: "Abnormal Psychology — Mental Health and Treatment". These are the exact pitfalls examiners point out in examiner reports year after year.',
          groups: [
            {
              subTitle: " The 3 Biggest Mistakes Students Make in This Chapter",
              bullets: [
                "**Mistake 1: Giving a partial definition**: Don't stop at half the sentence! Always include both the key keyword AND what it actually does.",
                "**Mistake 2: Forgetting units, labels, or conditions**: Whether it's scientific units (like m/s, g/cm³, °C), currency signs, or diagram labels, always double-check your final answer.",
                "**Mistake 3: Confusing causes with effects**: Clearly separate *why* something happens from *what* happens as a result.",
              ],
            },
            {
              subTitle: " Golden Rules for Full Marks",
              bullets: [
                "**Rule 1 — Use the exact keywords**: examiners look for specific syllabus words. When you use the correct term, you get the mark instantly.",
                "**Rule 2 — Structure long answers in bullet points or steps**: Writing in clean, numbered steps makes it impossible for the examiner to miss your points.",
                "**Rule 3 — Always re-read the question prompt**: Highlight command words like 'Describe' (say what you see), 'Explain' (give reasons why), or 'Calculate' (show all working steps).",
              ],
            },
          ],
        },
      ],
    },
  ],
};
