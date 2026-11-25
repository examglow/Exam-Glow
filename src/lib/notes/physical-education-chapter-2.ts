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

const healthArt = artPanel([
  {
    src: "pe02-health-wellbeing.webp",
    alt: "A figure surrounded by three soft icons representing a healthy body, a calm mind and friends",
    caption: "Health is physical, mental and social, not just no illness",
  },
]);

const dietArt = artPanel([
  {
    src: "pe02-balanced-diet.webp",
    alt: "A plate divided into portions of grains, vegetables, protein and fruit with a glass of water",
    caption: "A balanced diet matches energy in to energy out",
  },
]);

const componentsArt = artPanel([
  {
    src: "pe02-fitness-components.webp",
    alt: "A ring of small cartoon pictograms showing running, stretching, jumping, balancing and throwing",
    caption: "Ten components split into health-related and skill-related",
  },
]);

const testingArt = artPanel([
  {
    src: "pe02-fitness-testing.webp",
    alt: "A cartoon person running between two cones on a track while a coach times with a stopwatch",
    caption: "Every fitness component has its own test protocol",
  },
]);

const principlesArt = artPanel([
  {
    src: "pe02-training-principles.webp",
    alt: "A ladder climbing upward beside a calendar and a gauge, suggesting gradual steady overload",
    caption: "SPORT and FITT keep overload safe and steady",
  },
]);

const methodsArt = artPanel([
  {
    src: "pe02-continuous-training.webp",
    alt: "A steady cartoon runner on a looped path with no breaks marked along it",
    caption: "Continuous training is steady work with no rest intervals",
  },
  {
    src: "pe02-fartlek-interval.webp",
    alt: "A runner moving through alternating fast and slow zones over hilly ground",
    caption: "Fartlek and interval training vary the pace on purpose",
  },
]);

const warmupArt = artPanel([
  {
    src: "pe02-warmup-cooldown.webp",
    alt: "Two figures, one starting with a jog and stretches and one finishing with a slow walk and stretch",
    caption: "Warm-up raises the pulse; cool-down lowers it safely",
  },
]);

const chapterTwo: Chapter = {
  number: 2,
  title: "Health, Fitness and Training",
  intro: `Fitness is measurable, and training is how you build it on purpose.

This chapter defines health and fitness, links them to diet, lists the components and their tests, then sets out the training principles, the six training methods and altitude work.

Cambridge wants you to **apply** SPORT, FITT and the training methods to a named sport.

Every method comes with advantages, disadvantages and a safety point, so always give one of each.`,
  subheadings: [
    {
      title: "Health, Fitness and Well-Being",
      body: `### The WHO Definition of Health

The **World Health Organization** defines health as a state of complete physical, mental and social well-being.

It adds that health is **not merely the absence of disease or infirmity**.

Quote that second half; it is the part that earns the mark.

### The Three Kinds of Well-Being

**Physical** well-being means all body systems work well and you are free from illness or injury.

It also means being able to carry out everyday tasks without undue effort.

**Mental** well-being means coping with stress, controlling your emotions and feeling good about yourself.

**Social** well-being means having your human needs met, keeping friendships, feeling valued and mixing with others.

### What Fitness Means

**Fitness** is the ability to cope with, or meet, the demands of the environment.

In sport that usually means meeting the specific demands of an activity.

### Health and Fitness Are Not the Same

Poor health can lower fitness, because illness stops you training.

Yet someone can be **fit but unhealthy**, such as an athlete who smokes or eats badly but can still train.

The two pull apart in both directions, so do not treat them as one idea.

Live a healthy, active lifestyle, eat a balanced diet and hold a level of fitness to protect your health.`,
      figure: healthArt,
      groups: [
        {
          subTitle: "Physical, Mental and Social Health",
          bullets: [
            "**Physical:** systems work well, free from illness, able to manage daily tasks.",
            "**Mental:** copes with stress, controls emotions, has self-esteem.",
            "**Social:** needs met, friendships and support, valued by society, mixes well.",
          ],
        },
        {
          subTitle: "The Health-Fitness Relationship",
          bullets: [
            "Ill health can lower fitness because it prevents training.",
            "An unhealthy person can still be fit, such as a smoker with a strong heart.",
            "Fitness is the ability to meet the demands of the environment.",
            "Exercise improves physical, mental and social health together.",
          ],
        },
      ],
      examinerTips: [
        "Write the WHO phrase 'not merely the absence of disease' word for word in any health question.",
        "Give one example for each kind of well-being rather than three for one kind.",
        "For the health-fitness link, describe both directions: fitness lowered by illness and fitness held despite illness.",
      ],
      commonMistakes: [
        "Defining health as simply 'not being ill', which is exactly what the WHO definition rejects.",
        "Assuming a fit athlete must be healthy; the two ideas are separate.",
        "Listing only physical benefits when a question asks about well-being overall.",
      ],
      recap: [
        "Quote the WHO definition of health. [2]",
        "Describe one feature each of physical, mental and social well-being. [3]",
        "Explain how a person can be fit but not healthy. [3]",
      ],
    },
    {
      title: "Diet and Energy Sources",
      body: `### What Each Nutrient Does

**Carbohydrates** are the body's main quick energy source, found in bread, pasta and rice.

**Fats** provide concentrated long-term energy and insulation, found in butter, nuts and oils.

**Proteins** grow and repair tissue, found in meat, fish, eggs and beans.

**Water** carries substances around the body and controls temperature; it gives no energy itself.

### Where the Energy Comes From

Muscle cells release energy from **glucose** in the process of **respiration**.

Some glucose is converted to **glycogen** and stored in the muscles and liver for later use.

That stored glycogen is the fuel an endurance athlete tops up before a race.

### Energy Balance

Energy needed differs by performer: **males generally need more than females**, teenagers more than children.

An active lifestyle needs far more energy than a sedentary one.

Energy in should match energy out; eat too much and the **unused energy is stored as fat**, causing obesity.`,
      figure: dietArt,
      groups: [
        {
          subTitle: "Functions and Sources of Nutrients",
          bullets: [
            "**Carbohydrate:** quick energy; bread, pasta, rice.",
            "**Fat:** long-term energy and insulation; butter, nuts, oils.",
            "**Protein:** growth and repair; meat, fish, eggs, beans.",
            "**Water:** transport and temperature control; drinks, fruit, vegetables.",
          ],
        },
        {
          subTitle: "Energy Needs Across Performers",
          bullets: [
            "Males usually need more energy than females.",
            "Teenagers need more than younger children.",
            "Active people need more than sedentary people.",
            "Surplus energy is stored as fat, which can cause obesity.",
          ],
        },
      ],
      examinerTips: [
        "Match each nutrient to both its function and one named food source, since either half can be marked.",
        "Say unused energy is stored as fat rather than converted to muscle.",
        "Compare energy needs by naming the two groups and which is higher, as the question asks.",
      ],
      commonMistakes: [
        "Listing water as an energy-giving nutrient; it gives none.",
        "Saying protein is the main energy source; carbohydrate is.",
        "Claiming exercise turns fat into muscle; the two are different tissues.",
      ],
      recap: [
        "State the function of each of the four named nutrients. [4]",
        "Explain why an endurance runner stores carbohydrate before a race. [3]",
        "Suggest why a young active male needs more energy than a sedentary older adult. [3]",
      ],
    },
    {
      title: "The Components of Fitness",
      body: `### Ten Named Components

Cambridge splits fitness into **health-related** and **skill-related** components, and you must link each to performance.

The **health-related** set is **cardiovascular endurance (stamina), muscular endurance, flexibility, strength and power**.

The **skill-related** set is **agility, balance, coordination, reaction time and speed**.

**Balance** splits further into **static** (holding still) and **dynamic** (staying steady while moving).

### What Each Means

**Agility** is changing body position quickly and under control.

**Balance** is keeping the centre of mass over the base of support.

**Cardiovascular endurance** is how long the heart, lungs and blood keep supplying oxygen.

**Coordination** is using the senses and body parts together smoothly.

**Flexibility** is the range of movement at a joint.

**Muscular endurance** is how long a muscle works without tiring.

**Power** is strength applied quickly, that is force times speed.

**Reaction time** is how fast you respond to a stimulus.

**Speed** is how fast you cover a distance.

**Strength** is the force a muscle can exert against a resistance.`,
      figure: componentsArt,
      groups: [
        {
          subTitle: "Health-Related Components",
          bullets: [
            "**Cardiovascular endurance / stamina** for long aerobic effort.",
            "**Muscular endurance** for repeated muscle work.",
            "**Flexibility** for joint range of movement.",
            "**Strength** for maximal force.",
            "**Power** for force applied quickly.",
          ],
        },
        {
          subTitle: "Skill-Related Components",
          bullets: [
            "**Agility** for fast, controlled changes of direction.",
            "**Balance** as static and dynamic.",
            "**Coordination** for smooth multi-part movement.",
            "**Reaction time** for fast response to a cue.",
            "**Speed** for fast travel over a distance.",
          ],
        },
      ],
      examinerTips: [
        "Keep the two categories distinct; Cambridge often asks you to place a named component in the right one.",
        "Always name the component first, then its short definition in the same sentence.",
        "For 'balance', state whether you mean static or dynamic, since the general word alone is vague.",
      ],
      commonMistakes: [
        "Calling agility the same as speed; agility includes a change of direction.",
        "Confusing power with strength; power adds the speed of the contraction.",
        "Placing flexibility among the skill-related components; it is health-related.",
      ],
      recap: [
        "List the five health-related and five skill-related components of fitness. [10]",
        "Define power and give a sport where it matters most. [3]",
        "Explain the difference between static and dynamic balance. [2]",
      ],
    },
    {
      title: "Fitness Testing and VO2 Max",
      body: `### The Test Protocols

Each component has one named test the syllabus expects you to describe.

**Cardiovascular endurance** uses the **Multi-Stage Fitness Test** or the **12-Minute Cooper Run**.

**Flexibility** uses the **Sit and Reach Test**; **muscular endurance** uses the **Multi-Stage Abdominal Curl Conditioning Test**.

**Power** uses the **Vertical Jump Test**; **speed** uses the **30-Metre Sprint Test**.

**Strength** uses the **1 Rep Max Test** or the **Hand Grip Dynamometer Test**.

For the skill components: **agility** uses the **Illinois Agility Test**, **static balance** the **Standing Stork Test**, **coordination** the **Anderson Wall Toss Test**, **reaction time** the **Ruler Drop Test**.

### Why Test at All

Fitness tests check whether a test **suits** the activity being trained for.

They **identify strengths and weaknesses**, **monitor improvement** over time and **compare** a performer to others.

They **inform the design of a training programme** and give a performer **motivation** to improve.

### VO2 Max

**VO2 max** is the **maximum rate of oxygen uptake** during exercise, measured in ml per minute.

It is the best single measure of **cardiovascular endurance**.

Five factors set a person's level: **age, gender, genetics, lifestyle and training**.

VO2 max rises with training but falls with age, and men typically sit higher than women.`,
      figure: testingArt,
      groups: [
        {
          subTitle: "Match Each Component to Its Test",
          bullets: [
            "Cardiovascular endurance: MSFT / 12-Minute Cooper Run.",
            "Flexibility: Sit and Reach.",
            "Muscular endurance: MSACC.",
            "Power: Vertical Jump; speed: 30-Metre Sprint.",
            "Strength: 1 Rep Max / Hand Grip Dynamometer.",
            "Agility: Illinois; static balance: Standing Stork; coordination: Anderson Wall Toss; reaction time: Ruler Drop.",
          ],
        },
        {
          subTitle: "Reasons for Fitness Testing",
          bullets: [
            "To check suitability for a given activity.",
            "To identify strengths and weaknesses.",
            "To monitor improvement over time.",
            "To compare performers against each other.",
            "To inform a training programme and to motivate.",
          ],
        },
      ],
      examinerTips: [
        "Name the exact test title, since a vague 'run test' may not match the mark scheme's wording.",
        "For 'why test', give four reasons as four distinct marks rather than one reason restated.",
        "Define VO2 max as **maximum oxygen uptake**, then say it measures cardiovascular endurance.",
      ],
      commonMistakes: [
        "Using the vertical jump to test speed; it tests power, not raw speed.",
        "Listing age or diet as a reason for testing; the reasons are about what the result is used for.",
        "Calling VO2 max a measure of strength; it is the measure of aerobic endurance.",
      ],
      recap: [
        "Name the fitness test for each of: agility, flexibility and power. [3]",
        "Give four reasons why a coach carries out fitness testing. [4]",
        "Define VO2 max and list five factors that affect its level. [6]",
      ],
    },
    {
      title: "Principles of Training: SPORT and FITT",
      body: `### The SPORT Principles

**Specificity** means training the exact muscles and energy system the activity demands.

**Progression** means gradually making the training harder as the body adapts.

**Overload** means working the body beyond its normal level so it must adapt.

**Reversibility** warns that gains are lost when training stops, the 'use it or lose it' idea.

**Tedium** warns that a boring, repetitive programme kills motivation, so vary the methods.

### Overload Is Set With FITT

Overload is controlled through four variables, remembered as **FITT**.

**Frequency** is how often you train, usually counted in sessions per week.

**Intensity** is how hard each session is, such as a percentage of maximal heart rate.

**Time** is how long a session or each effort lasts.

**Type** is the method of training chosen for the goal.

### The Danger of Overtraining

Pushing overload too hard, or progressing too fast, causes **overtraining**.

The signs are falling performance, persistent fatigue, niggling injury and irritability.

Recovery is the only fix, which is exactly why rest days belong in a plan.`,
      figure: principlesArt,
      groups: [
        {
          subTitle: "The SPORT Principles",
          bullets: [
            "**Specificity:** train the muscles and system the sport uses.",
            "**Progression:** increase demand steadily over time.",
            "**Overload:** exceed the normal workload to force adaptation.",
            "**Reversibility:** fitness drops away when training stops.",
            "**Tedium:** avoid monotonous sessions that drain motivation.",
          ],
        },
        {
          subTitle: "The FITT Variables of Overload",
          bullets: [
            "**Frequency:** how often you train.",
            "**Intensity:** how hard each session is.",
            "**Time:** how long you train for.",
            "**Type:** which training method you use.",
          ],
        },
      ],
      examinerTips: [
        "Apply SPORT to the named sport; a definition with no sporting example earns only half the marks.",
        "For a FITT question, change a real figure such as 'three sessions to four' to prove the overload.",
        "Pair every principle with its sporting application when the command word is 'apply' or 'explain'.",
      ],
      commonMistakes: [
        "Confusing progression with overload; overload is the harder session, progression is the steady rise over weeks.",
        "Saying reversibility means rest; it means losing the gains you made.",
        "Listing 'Type' as a SPORT principle; it belongs to FITT.",
      ],
      recap: [
        "Explain each of the SPORT principles with a sporting example. [5]",
        "Describe how a runner could use FITT to overload a training week. [4]",
        "State two signs of overtraining. [2]",
      ],
    },
    {
      title: "Methods of Training",
      body: `### Six Methods to Know

Each method has a purpose, an advantage, a disadvantage and a safety point.

**Continuous training** is steady aerobic work such as running, swimming, cycling or rowing at **60 to 80 percent** of maximal heart rate.

It builds endurance but is time-consuming and can bore the performer; wear suitable footwear.

**Weight training** uses **isotonic** free weights, kettle bells or machines, with intensity set from a **one rep max**.

It builds strength and power but risks injury without a **spotter**.

**Fartlek** means 'speed play': vary the speed and terrain over running or cycling, with intensity judged on the **Borg scale**.

It suits intermittent sports but is hard to measure precisely; check your equipment first.

**Plyometric training** uses depth jumps and hurdle jumps to build **power**, but stresses the joints and needs good technique to prevent injury.

**Circuit training** strings stations, each targeting a different component, with work and rest periods you control.

It is flexible and motivating but can get crowded and needs the equipment checked.

**HIIT** alternates short hard efforts with rest; the rest lets waste products be removed, but the risk is **overexertion**.

### The Common Frame

Whichever method, always say the **aim**, one **advantage**, one **disadvantage** and one **safety point**.`,
      figure: methodsArt,
      groups: [
        {
          subTitle: "Method, Aim and Key Detail",
          bullets: [
            "**Continuous:** aerobic endurance at 60-80% max heart rate.",
            "**Weight:** strength and power, intensity from a one rep max.",
            "**Fartlek:** varying speed and terrain, intensity on the Borg scale.",
            "**Plyometric:** explosive power via depth and hurdle jumps.",
            "**Circuit:** stations for different components with set work/rest.",
            "**HIIT:** hard intervals with rest to clear waste products.",
          ],
        },
        {
          subTitle: "One Safety Point per Method",
          bullets: [
            "Continuous: wear appropriate running or cycling footwear.",
            "Weight: use a spotter and correct lifting technique.",
            "Fartlek: check equipment and route before starting.",
            "Plyometric: build gradually to protect joints from injury.",
            "Circuit: check that equipment is set up safely.",
            "HIIT: avoid overexertion by resting properly between efforts.",
          ],
        },
      ],
      examinerTips: [
        "Answer a training-method question in the fixed order: aim, description, advantage, disadvantage, safety.",
        "For continuous training, quote the 60 to 80 percent heart-rate range; it is a named mark.",
        "Say the rest interval in HIIT removes waste products, not that it lets you 'recover magic'.",
      ],
      commonMistakes: [
        "Confusing fartlek with interval training; fartlek varies pace naturally, intervals use set work and rest.",
        "Naming circuit training as only for strength; its stations can target any component.",
        "Forgetting that plyometrics load the joints, so calling them safe for beginners.",
      ],
      recap: [
        "Describe continuous training and state the heart-rate range it uses. [3]",
        "Explain why plyometric training improves power. [2]",
        "Compare circuit training with HIIT, giving one advantage of each. [4]",
        "State one safety point for weight training and one for HIIT. [2]",
      ],
    },
    {
      title: "Altitude Training, Warm-Up and Cool-Down",
      body: `### High-Altitude Training

At altitude the air holds less oxygen, so the body responds by raising its **red blood cell count**.

More red cells carry more oxygen, which benefits **endurance** activities when the athlete returns to sea level.

The drawback is real: thinner air makes the sessions themselves **harder to complete**, so training intensity drops.

That trade-off, better oxygen delivery against tougher workouts, is the whole answer.

### Why Warm Up

A **warm up** raises the heart rate and breathing rate, sends more blood to the muscles and lifts muscle temperature.

Psychologically it sharpens **concentration** and prepares the mind for performance.

It has **three phases**: a **pulse raiser**, then **stretches**, then **skill or familiarisation activities**.

A sprinter might jog, stretch the legs dynamically, then run a few build-up starts.

### Why Cool Down

A **cool down** lets the heart and breathing rates drop **gradually** rather than stopping at once.

It helps remove **waste products** such as lactic acid and reduces later **stiffness and soreness**.

It has **two phases**: a **gradual decrease in the pulse**, then **static stretches**.

The right warm-up and cool-down always reference the **specific activity** named in the question.`,
      figure: warmupArt,
      groups: [
        {
          subTitle: "Altitude Training",
          bullets: [
            "Reason: less oxygen in the air at height.",
            "Adaptation: the red blood cell count rises.",
            "Benefit: better oxygen delivery for endurance.",
            "Disadvantage: sessions are harder to complete at intensity.",
          ],
        },
        {
          subTitle: "Phases of Warm-Up and Cool-Down",
          bullets: [
            "**Warm up:** pulse raiser, stretches, then familiarisation or skill activities.",
            "**Cool down:** a gradual decrease in pulse, then stretches.",
            "Warm-up reason: raised heart rate, more muscle blood flow, better concentration.",
            "Cool-down reason: gradual heart-rate drop, waste removal, less stiffness.",
          ],
        },
      ],
      examinerTips: [
        "For altitude, give both sides: the benefit to endurance and the difficulty of completing the training.",
        "Name the phases in order and attach them to a specific sport the question sets.",
        "State the **physiological** reason and the **psychological** reason for a warm-up separately.",
      ],
      commonMistakes: [
        "Saying altitude increases the amount of oxygen per breath; the air is thinner, so it decreases.",
        "Cooling down by simply stopping and sitting; it should lower the pulse gradually.",
        "Skipping the skill phase of a warm-up when a sport needs technique rehearsal first.",
      ],
      recap: [
        "Explain why an endurance athlete trains at altitude and state one disadvantage. [4]",
        "Describe the three phases of a warm-up for a named sport. [3]",
        "Give two physiological reasons for cooling down after exercise. [2]",
      ],
    },
  ],
};

export const PE_CHAPTER_2: Chapter = chapterTwo;
