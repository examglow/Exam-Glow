import type { Chapter } from "./types";

const IMG = "/notes/pe";

function artPanel(items: { src: string; alt: string; caption: string }[]) {
  const tiles = items
    .map((it, i) => {
      // An odd final tile takes the whole row. A panel holding one figure keeps its square
      // shape, because a 2:1 band would waste most of a square illustration.
      const solo = items.length % 2 === 1 && i === items.length - 1;
      const wide = solo && items.length > 1;
      return `<figure class="m-0 min-w-0${solo ? " sm:col-span-2" : ""}">
        <div class="overflow-hidden rounded-xl bg-[#f7f5f2]"><img src="${IMG}/${it.src}" alt="${it.alt}" loading="lazy" class="aspect-square w-full object-cover${wide ? " sm:aspect-[2/1]" : ""}${solo ? " sm:object-contain" : ""}" /></div>
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

const continuaArt = artPanel([
  {
    src: "pe03-skill-continua.webp",
    alt: "An athlete balancing on a beam while three vertical sliders sit beside the figure",
    caption: "Every skill can be placed along three continua",
  },
]);

const ipmArt = artPanel([
  {
    src: "pe03-information-processing.webp",
    alt: "A goalkeeper watching a ball, a head showing input then a deciding brain, an arrow to a dive and a feedback loop",
    caption: "Input, decision, output, then feedback round again",
  },
]);

const learningArt = artPanel([
  {
    src: "pe03-stages-of-learning.webp",
    alt: "Three swimmers in a row from clumsy splashing to a smooth gliding stroke",
    caption: "The cognitive, associative and autonomous stages",
  },
  {
    src: "pe03-feedback-guidance.webp",
    alt: "A coach guiding a young gymnast's arm while pointing at a demonstration on a clipboard",
    caption: "Feedback tells you what happened; guidance shows the way",
  },
]);

const goalArt = artPanel([
  {
    src: "pe03-goal-setting.webp",
    alt: "A runner breaking a finish tape beside a wall clock and a checklist clipboard",
    caption: "SMARTER goals turn a wish into a plan",
  },
]);

const arousalArt = artPanel([
  {
    src: "pe03-arousal-inverted-u.webp",
    alt: "An inverted U shaped hill with a sleepy athlete on the left, a balanced one at the top and a tense one on the right",
    caption: "Performance peaks at the optimal middle arousal",
  },
]);

const chapterThree: Chapter = {
  number: 3,
  title: "Skill Acquisition and Psychology",
  intro: `How does a beginner become brilliant, and why does a skilled player still choke under pressure?

This chapter covers what skill is, how the brain processes information, the three stages of learning, feedback, guidance, goal setting, motivation, arousal, anxiety and personality.

Cambridge loves the **links** here: which feedback suits which stage, which guidance suits which learner.

Always attach the theory to a **named skill**, because an applied answer scores far higher than a definition.`,
  subheadings: [
    {
      title: "Skill, Ability and the Continua",
      body: `### Skill Is Not Ability

**Skill** is the ability to achieve a result with **consistency, efficiency and minimum expenditure of energy**.

**Ability** is a more general, often innate trait, such as speed or hand-eye coordination, that underlies skill.

Ability is a building block; skill is the learned, sport-specific behaviour built on top of it.

### What a Skilled Performance Looks Like

Six traits mark a performer as skilled.

A skilled action is **fluent, aesthetically pleasing, consistent, accurate, goal-directed and coordinated**.

Use these words as the six points when a question asks you to describe skilled performance.

### What Makes Skill Level Vary

Eight factors shift how skilled a performer becomes: **age and maturity, culture, motivation, anxiety, arousal conditions, facilities, environment, and teaching and coaching**.

Name them and add one line of application, since a bare list of eight earns less than three well-explained.

### The Three Continua

A **continuum** places a skill on a scale rather than in a box.

The **basic to complex** scale runs from simple, easy-to-learn skills to highly intricate ones.

The **fine to gross** scale depends on muscle size: a golf putt uses fine muscles, a throw uses gross muscles.

The **open to closed** scale depends on the environment: a penalty kick in a calm stadium is closed, a tennis return against an opponent is open.

Place a named skill on each scale, then **justify** the position, as the syllabus asks.`,
      figure: continuaArt,
      groups: [
        {
          subTitle: "Characteristics of Skilled Performance",
          bullets: [
            "**Fluent:** the action flows without breaks or hesitation.",
            "**Consistent:** repeated to the same high standard.",
            "**Accurate:** reaching the intended target.",
            "**Goal-directed:** aimed at a clear outcome.",
            "**Coordinated and aesthetically pleasing:** parts work smoothly and look easy.",
          ],
        },
        {
          subTitle: "The Three Continua",
          bullets: [
            "**Basic - complex:** how simple or intricate the skill is.",
            "**Fine - gross:** small precise muscles versus large muscles.",
            "**Open - closed:** stable, predictable setting versus a changing, reacting one.",
            "A darts throw is closed, fine and relatively basic.",
          ],
        },
      ],
      examinerTips: [
        "Keep skill and ability separate in your answer; skill is learned, ability is a general trait.",
        "Give all six characteristics of skilled performance as named points, since each is markable.",
        "For a continuum question, place the skill **and** justify, matching the skill to the environment.",
      ],
      commonMistakes: [
        "Calling a closed skill one performed indoors; closed means predictable, not indoors.",
        "Saying a gymnast's routine is an open skill; it is self-paced and closed.",
        "Confusing ability with skill; a fast athlete can still be unskilled at a game.",
      ],
      recap: [
        "Define skill and explain how it differs from ability. [3]",
        "Describe six characteristics of a skilled performance. [6]",
        "Place a tennis serve on all three continua and justify each. [6]",
      ],
    },
    {
      title: "The Information Processing Model",
      body: `### The Four Stages in Order

A performer takes information in, decides, acts, and learns from the result.

The basic **information processing model** has four stages: **input, decision-making, output and feedback**.

**Input** is detected by the senses through the **stimuli** in the environment.

**Decision-making** happens in the brain, where the relevant information is chosen and a response is selected.

**Output** is the message sent to the muscles, producing the observable action.

**Feedback** tells the performer how well it worked, and it loops back into the next input.

### Memory: Short Term Against Long Term

**Short-term memory** holds a little information briefly, such as a name just heard.

**Long-term memory** stores information permanently, such as how to ride a bike.

The brain moves useful material from short-term to long-term storage with **rehearsal and practice**.

### Limited Channel Capacity

**Channel capacity** is the amount of information the brain can process at one time.

The **single-channel hypothesis** says only one piece of information can be handled properly at a moment.

This explains why a performer misses a cue when two things happen at once, or under heavy pressure.

More information to process means a **longer reaction time**, which is the key exam link.`,
      figure: ipmArt,
      groups: [
        {
          subTitle: "The Four Stages of the IPM",
          bullets: [
            "**Input:** stimuli are detected by the senses.",
            "**Decision-making:** the brain selects the response.",
            "**Output:** the muscles carry out the action.",
            "**Feedback:** information about the result loops back.",
          ],
        },
        {
          subTitle: "Memory and Channel Capacity",
          bullets: [
            "**Short-term memory:** limited and brief.",
            "**Long-term memory:** large and permanent.",
            "**Channel capacity:** the amount processed at one time.",
            "Too much input exceeds capacity, so reaction time lengthens.",
          ],
        },
      ],
      examinerTips: [
        "Draw the four stages as a loop with feedback returning to input, then apply each stage to the named sport.",
        "Use 'the goalkeeper sees the ball (input), picks to dive left (decision), dives (output), and knows the result (feedback)'.",
        "For channel capacity, always conclude with the effect on reaction time.",
      ],
      commonMistakes: [
        "Putting feedback at the very end as if the model stops there; it is a continuous loop.",
        "Confusing short-term and long-term memory by giving long-term storage as brief.",
        "Naming the senses as the 'output' when detection of stimuli is the input stage.",
      ],
      recap: [
        "Name and describe the four stages of the information processing model. [4]",
        "Explain the difference between short-term and long-term memory. [3]",
        "Define limited channel capacity and relate it to reaction time. [3]",
      ],
    },
    {
      title: "Stages of Learning, Feedback and Guidance",
      body: `### Three Stages of Learning

The **cognitive stage** is the start: the learner works out what to do, makes many errors and needs a lot of concentration.

The **associative stage** links the parts smoothly; errors fall and the learner begins to spot their own mistakes.

The **autonomous stage** is automatic: the skilled action runs with little thought and attention can turn to tactics.

### Feedback Suited to Each Stage

There are four types of feedback: **intrinsic, extrinsic, knowledge of performance (KP)** and **knowledge of results (KR)**.

**Intrinsic** comes from within, as the performer feels the movement. **Extrinsic** comes from outside, usually from a coach.

**KR** tells the performer the **outcome**, such as 'that shot missed'. **KP** tells them **how** the movement went.

A **cognitive** learner relies most on **extrinsic feedback** and **knowledge of results**, because they cannot yet judge their own action.

An **autonomous** performer uses **intrinsic feedback** and **knowledge of performance** well, since they can feel the movement.

Feedback matters because it corrects errors, drives learning and sustains **motivation**.

### Guidance Suited to Each Stage

There are three types of guidance: **visual, verbal** and **manual or mechanical**.

**Visual** guidance is watching a demonstration or a video model. **Verbal** guidance is spoken instruction.

**Manual** guidance is physically moving the learner's body into position, and mechanical uses aids like a harness.

A **cognitive** learner benefits most from **visual** guidance and lots of **verbal** instruction to build the mental picture.

An **autonomous** performer benefits from **verbal** cues only, and manual guidance could break an already-set pattern.`,
      figure: learningArt,
      groups: [
        {
          subTitle: "The Three Stages",
          bullets: [
            "**Cognitive:** what to do, many errors, high concentration.",
            "**Associative:** parts linked, fewer errors, self-correction starts.",
            "**Autonomous:** automatic, fluent, attention free for strategy.",
          ],
        },
        {
          subTitle: "Feedback Types and Stage Match",
          bullets: [
            "**Intrinsic** from within, **extrinsic** from a coach or video.",
            "**Knowledge of results:** the outcome; **knowledge of performance:** the movement quality.",
            "**Cognitive:** most use of extrinsic feedback and knowledge of results.",
            "**Autonomous:** can rely on intrinsic feedback and knowledge of performance.",
          ],
        },
        {
          subTitle: "Guidance Types and Stage Match",
          bullets: [
            "**Visual:** demonstration or model.",
            "**Verbal:** spoken instruction or cues.",
            "**Manual / mechanical:** physical help or a supportive aid.",
            "**Cognitive:** visual plus verbal builds the picture; **autonomous:** verbal only.",
          ],
        },
      ],
      examinerTips: [
        "The marks come from the link: name the stage, then say the feedback or guidance that fits it and why.",
        "Use the full phrase **knowledge of results** and **knowledge of performance**; abbreviations alone are risky.",
        "State a benefit of feedback: it corrects errors and motivates, both of which are credit points.",
      ],
      commonMistakes: [
        "Giving a beginner only intrinsic feedback when they cannot yet feel the correct action.",
        "Using manual guidance on a fully autonomous player, who needs to own the movement.",
        "Confusing knowledge of results (outcome) with knowledge of performance (technique).",
      ],
      recap: [
        "Describe the features of a performer at the cognitive stage of learning. [3]",
        "Explain which feedback type best suits a beginner and justify your choice. [4]",
        "Give an example of each type of guidance and name the stage it helps most. [6]",
      ],
    },
    {
      title: "Goal Setting and Motivation",
      body: `### SMARTER Goals

Effective targets follow the **SMARTER** principles.

**S**pecific, **M**easurable, **A**greed, **R**ealistic, **T**ime-phased, **E**xciting, **R**ecorded.

A vague goal fails; 'run faster' is not SMARTER, but 'shave one second off my 100 metres by June, timed each week' is.

**Agreed** means set with a coach, **Exciting** means it motivates, and **Recorded** means progress is written down.

Goal setting also **controls anxiety**, because a clear plan of action focuses the mind on the task, not the worry.

### Two Kinds of Motivation

**Intrinsic motivation** comes from within: the performer enjoys the activity and drives themselves.

**Extrinsic motivation** comes from outside: praise, medals, money or a coach's encouragement.

Intrinsic motivation is more lasting, but extrinsic rewards can start a beginner off and sustain hard training.

Say how each is used: a coach builds extrinsic rewards early, then nurtures intrinsic enjoyment for the long term.`,
      figure: goalArt,
      groups: [
        {
          subTitle: "The SMARTER Principles",
          bullets: [
            "**S**pecific, **M**easurable, **A**greed, **R**ealistic.",
            "**T**ime-phased, **E**xciting, **R**ecorded.",
            "Each letter is a separate credit point in a goal-setting question.",
            "Goal setting also lowers anxiety by focusing on the task.",
          ],
        },
        {
          subTitle: "Intrinsic Against Extrinsic Motivation",
          bullets: [
            "**Intrinsic:** from within, enjoyment, self-driven.",
            "**Extrinsic:** from outside, reward, praise, medals.",
            "Intrinsic tends to be more durable.",
            "Extrinsic helps beginners and hard training blocks.",
          ],
        },
      ],
      examinerTips: [
        "Spell out all seven SMARTER words, as each earns its own mark in a 'set a goal' question.",
        "Write a real example goal that proves every letter, rather than a general definition.",
        "Define motivation type by its source: inside the performer, or from outside.",
      ],
      commonMistakes: [
        "Setting a goal with no time limit, which breaks the Time-phased rule.",
        "Calling a coach's praise intrinsic motivation; it comes from outside, so it is extrinsic.",
        "Giving only three or four SMARTER letters when seven are asked for.",
      ],
      recap: [
        "Explain each letter of the SMARTER approach to goal setting. [7]",
        "Write one SMARTER goal for a swimmer and justify it. [4]",
        "Define intrinsic and extrinsic motivation with an example of each. [4]",
      ],
    },
    {
      title: "Arousal, Anxiety and Relaxation",
      body: `### Arousal and the Inverted-U

**Arousal** is a physiological and psychological state of being ready or energised.

The **Inverted-U theory**, the **Yerkes-Dodson law**, says performance rises with arousal to an **optimal point**, then falls as arousal becomes too high.

The graph is a hill: low arousal is under-stimulated, peak arousal is optimal, high arousal is anxious.

**Optimal arousal is not fixed**; it shifts with the task and the personality.

**Fine skills**, like a golf putt, need **lower arousal** than **gross skills**, like a rugby tackle.

At **under-arousal** attention drifts; at **over-arousal** muscles tense and concentration narrows badly.

### Two Kinds of Anxiety

**Cognitive anxiety** is mental: worrying thoughts and fear of failure.

**Somatic anxiety** is physical: a racing heart, butterflies and sweating.

Both can spike before a big performance, and the causes include high stakes, fear of judgment and low confidence.

### Relaxation Techniques

No single method controls both kinds of anxiety, so techniques are **combined**.

**Mental rehearsal** is practising the skill in the mind; **visualisation** is picturing a perfect performance.

**Deep breathing** slows the heart rate and calms the body's stress response.

Together they work by **increasing concentration, controlling breathing and reducing heart rate**.`,
      figure: arousalArt,
      groups: [
        {
          subTitle: "The Inverted-U Theory",
          bullets: [
            "Performance improves as arousal rises to the optimal point.",
            "Past that point, higher arousal makes performance fall.",
            "Fine skills need lower arousal; gross skills tolerate higher arousal.",
            "Under-arousal brings poor focus; over-arousal brings tension.",
          ],
        },
        {
          subTitle: "Anxiety and Relaxation",
          bullets: [
            "**Cognitive** anxiety is mental worry; **somatic** is physical tension.",
            "Techniques are combined, because one alone is not enough.",
            "**Mental rehearsal, visualisation and deep breathing** are the named methods.",
            "They raise concentration, control breathing and lower heart rate.",
          ],
        },
      ],
      examinerTips: [
        "Sketch the inverted-U and label the axes 'arousal' and 'performance', with the peak marked as optimal.",
        "For fine versus gross skills, always name a real example to justify the arousal shift.",
        "Distinguish cognitive from somatic anxiety by saying 'mental' and 'physical'.",
      ],
      commonMistakes: [
        "Drawing a straight upward line; the theory is a hill that turns downward after the peak.",
        "Saying high arousal always helps; past the optimum it damages performance.",
        "Calling butterflies cognitive anxiety when they are a physical, somatic symptom.",
      ],
      recap: [
        "Draw and explain the Inverted-U theory of arousal. [4]",
        "Explain why a golfer needs lower arousal than a rugby forward. [3]",
        "Describe the two types of anxiety and one relaxation technique that controls each. [4]",
      ],
    },
    {
      title: "Personality Types",
      body: `### Introvert Against Extrovert

A personality type is a consistent pattern of how a person behaves and reacts.

An **introvert** tends to be **quiet, thoughtful and less sociable**, and enjoys solitary or calm pursuits.

An **extrovert** tends to be **outgoing, sociable and lively**, and enjoys being around other people.

### The Sporting Fit

**Introverts** often gravitate toward **individual, low-stimulation** activities such as shooting, archery or distance running.

**Extroverts** often prefer **team, high-stimulation** activities such as football or rugby.

Personality also explains the differing **optimal arousal** on the Inverted-U: introverts reach their peak at **lower arousal**, extroverts at **higher arousal**.

That link between personality and arousal is a favourite two-part exam point.`,
      groups: [
        {
          subTitle: "Characteristics and Activities",
          bullets: [
            "**Introvert:** quiet, thoughtful, less sociable; prefers individual sports.",
            "**Extrovert:** outgoing, sociable, lively; prefers team sports.",
            "Introverts peak at lower arousal; extroverts at higher arousal.",
            "Most people mix both; the terms describe a tendency, not a rule.",
          ],
        },
      ],
      examinerTips: [
        "Describe traits and then suggest activities, since the question asks for both.",
        "Link personality to the Inverted-U to move the answer up a level.",
        "Say 'tend to' rather than 'always', because personality is a preference, not a law.",
      ],
      commonMistakes: [
        "Saying introverts cannot play team sports; it is a tendency, not a limit.",
        "Confusing shyness with being an ambivert, who sits in the middle of the scale.",
        "Giving only the traits and forgetting to suggest a matching activity.",
      ],
      recap: [
        "Describe the characteristics of an introvert and an extrovert. [4]",
        "Suggest two sports suited to each personality type. [4]",
        "Link personality type to optimal arousal on the Inverted-U. [3]",
      ],
    },
  ],
};

export const PE_CHAPTER_3: Chapter = chapterThree;
