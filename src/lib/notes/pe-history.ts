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

const ancientArt = artPanel([
  {
    src: "pe05-ancient-olympics.webp",
    alt: "A runner in a draped toga sprinting on dusty ground before marble columns and a laurel arch",
    caption: "Olympia, 776 BC: one race, and a four-year clock",
  },
]);

const gymnasiumArt = artPanel([
  {
    src: "pe05-guts-muths-turner.webp",
    alt: "People in old-fashioned dress doing gymnastics on wooden stall bars and beams in a grassy courtyard",
    caption: "The first school gyms: bars, ladders and a strict instructor",
  },
]);

const coubertinArt = artPanel([
  {
    src: "pe05-coubertin.webp",
    alt: "A gentleman in a formal suit standing beside interlocking rings on a pedestal with a stadium behind",
    caption: "Coubertin put the rings back on the map",
  },
]);

const hillArt = artPanel([
  {
    src: "pe05-av-hill.webp",
    alt: "A scientist in a lab coat beside a bicycle ergometer with a stylised muscle, an oxygen flask and a medal",
    caption: "Hill measured the heat and oxygen of working muscle",
  },
]);

const cooperArt = artPanel([
  {
    src: "pe05-kenneth-cooper.webp",
    alt: "A doctor in running kit jogging on a track beside a large heart and a stopwatch",
    caption: "Cooper turned running for health into a science",
  },
]);

const modernArt = artPanel([
  {
    src: "pe05-modern-pe.webp",
    alt: "Diverse children in PE kits playing football, doing a somersault, shooting a basketball and skipping",
    caption: "Where all these ideas end up: your PE lesson",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "The Story Behind the Syllabus",
  intro: `Physical education looks obvious now, but nobody drew up the first lesson plan.

It was built piece by piece: Greek racetracks, German gym fields, a British headmaster, a French baron and two scientists with stopwatches.

This closing chapter hands you the people and the dates behind the topics you have just studied.

Read it once for the story, then use the quick checks to keep the names straight.`,
  subheadings: [
    {
      title: "The Greeks Started the Clock",
      body: `### Olympia, 776 BC

The ancient Olympic Games were held at **Olympia**, the sanctuary of Zeus in Greece, every four years.

That four-year gap was called an **Olympiad**, and the Greeks even dated their history by it.

The Games are **traditionally dated to 776 BC**, though that year comes from early winner lists rather than proof.

They began with a single event, the **stadion** foot race, then grew over centuries to wrestling, boxing, the pentathlon, chariot racing and pankration.

### The Truce, and the End

Before the Games a truce, the **ekecheiria**, was declared so athletes and spectators could travel in safety.

It is often said to have stopped all wars, but it did not; Greece kept fighting, so treat that claim with care.

The Games faded under Christian Roman rule and are usually said to end around **393 AD**, though the exact year is disputed.`,
      figure: ancientArt,
      groups: [
        {
          subTitle: "What to Remember",
          bullets: [
            "Site: Olympia, honouring Zeus; held every four years.",
            "Founded traditionally in 776 BC, from winner lists.",
            "Grew from one foot race to many events.",
            "The truce protected travellers, not all of Greece.",
            "Ended around 393 AD, with the year still debated.",
          ],
        },
      ],
      examinerTips: [
        "This chapter is background; no paper asks for the founding year of the ancient Games.",
        "What does earn marks is linking the Olympics to the modern host-nation and legacy ideas in Chapter 4.",
        "Say 'traditionally dated' for 776 BC to show you know the evidence is thin.",
      ],
      commonMistakes: [
        "Claiming the truce ended all Greek wars; it only secured safe travel.",
        "Naming 393 AD as a certain end date when historians argue it.",
        "Confusing the ancient Games with the modern ones started in 1896.",
      ],
      recap: [
        "Where and how often were the ancient Games held?",
        "Why should the 776 BC date be treated carefully?",
        "What did the truce actually do?",
      ],
    },
    {
      title: "Germany and Sweden Build the School Gym",
      body: `### The First Textbook

**Johann Christoph Friedrich GutsMuths (1759-1839)** wrote **Gymnastics for Youth** in 1793, often called the first PE textbook.

He had taught physical training at the Philanthropinum school, where exercise joined lessons on purpose.

### Turnvater Jahn

**Friedrich Ludwig Jahn (1778-1852)**, nicknamed 'Turnvater' or father of gymnastics, founded the **Turnen** movement in Germany.

He opened the first outdoor gymnasium at the **Hasenheide** field near Berlin in **1811**.

He promoted the horizontal bar, parallel bars, the beam and rings, tying fitness to German pride against Napoleon.

### Spiess Makes It Compulsory

**Adolf Spiess (1810-1858)** pushed school gymnastics into the German curriculum and trained teachers at Darmstadt.

He wrote his own System of Gymnastics and, unusually for the time, introduced gymnastics for girls.

### Ling's Swedish System

In Sweden, **Pehr Henrik Ling (1776-1839)** created **Swedish gymnastics**: systematic, medical-style movement with less apparatus.

He founded the state-backed **Royal Central Institute of Gymnastics** in Stockholm in **1813**, and his methods spread to schools worldwide.`,
      figure: gymnasiumArt,
      groups: [
        {
          subTitle: "The Four Builders",
          bullets: [
            "**GutsMuths:** first PE textbook, 1793.",
            "**Jahn:** Turnen and the first outdoor gym, 1811.",
            "**Spiess:** made school gymnastics compulsory, trained teachers.",
            "**Ling:** Swedish gymnastics and a national institute, 1813.",
          ],
        },
        {
          subTitle: "Two Flavours of Gymnastics",
          bullets: [
            "German Turnen used heavy apparatus and national spirit.",
            "Swedish gymnastics used controlled, systematic, medical movement.",
            "Both became the ancestor of today's fitness and PE classes.",
          ],
        },
      ],
      examinerTips: [
        "No mark scheme asks these names, but they explain why schools have gym at all.",
        "Link Jahn's bars to the apparatus you meet in gymnastics categories in the coursework.",
        "Remember Ling for the word 'systematic', which is how modern warm-ups are built.",
      ],
      commonMistakes: [
        "Giving Ling the German apparatus; his Swedish system avoided heavy apparatus.",
        "Calling Jahn a Swede; he built the German Turnen movement.",
        "Crediting one person with inventing PE; this was four people, four ideas.",
      ],
      recap: [
        "Who wrote the first PE textbook, and in what year?",
        "What did Jahn open in 1811, and why did it matter?",
        "State one difference between German and Swedish gymnastics.",
      ],
    },
    {
      title: "A Headmaster Turns Sport Into Character",
      body: `### Thomas Arnold at Rugby

**Thomas Arnold (1795-1842)** was headmaster of **Rugby School** from 1828 to 1841.

He used **team games on purpose** to build character, self-discipline and leadership, not just fitness.

He organised inter-house matches and trusted older pupils as **prefects** to keep order on the field.

### One Phrase Worth Getting Right

The slogan **'muscular Christianity'** is often tied to Arnold, but the phrase actually belongs to **Thomas Hughes and Charles Kingsley** in the 1850s.

They popularised the Rugby ideal: a strong body could serve moral purpose.

So credit Arnold for the **practice** of sport-for-character, and the writers for the **label**.`,
      groups: [
        {
          subTitle: "Arnold's Idea in One Line",
          bullets: [
            "Team sport builds character, discipline and leadership.",
            "Prefects policed the games, teaching self-governance.",
            "The phrase 'muscular Christianity' came from Hughes and Kingsley, not Arnold.",
          ],
        },
      ],
      examinerTips: [
        "This connects straight to sportsmanship in Chapter 4; Arnold's teams were taught to play fair.",
        "No paper tests the phrase, but it shows how sport became a moral school subject.",
        "Say Arnold pioneered the idea; name the writers who coined the slogan.",
      ],
      commonMistakes: [
        "Having Arnold invent the term muscular Christianity; two novelists did.",
        "Thinking Arnold's reform was about medals; it was about character.",
      ],
      recap: [
        "How did Arnold use team games at Rugby School?",
        "Who really coined the phrase 'muscular Christianity'?",
      ],
    },
    {
      title: "Coubertin Brings the Games Back",
      body: `### A Baron With a Plan

**Pierre de Coubertin (1863-1937)** was a French educator who wanted sport in every school.

After studying Arnold's Rugby-style approach, he set out to revive the Olympic Games.

He founded the **International Olympic Committee** at a congress at the Sorbonne in **1894**.

The first modern Olympics were held in **Athens in 1896**, exactly where the ancient ones began.

### The Symbols He Left

Coubertin proposed the Olympic motto, **Citius, Altius, Fortius**, meaning faster, higher, stronger.

He also designed the **Olympic flag and five interlocking rings**, unveiled in 1920.

The rings stand for the unity of the five inhabited regions of the world.`,
      figure: coubertinArt,
      groups: [
        {
          subTitle: "Dates and Deeds",
          bullets: [
            "Founded the IOC at the Sorbonne, 1894.",
            "First modern Games in Athens, 1896.",
            "Proposed the motto Citius, Altius, Fortius.",
            "Designed the Olympic flag and rings, shown 1920.",
          ],
        },
      ],
      examinerTips: [
        "The modern Olympics link to the host-nation and global-events material in Chapter 4.",
        "You may meet the motto's meaning; faster, higher, stronger is worth knowing.",
        "Attach Coubertin to 'revival', since the Games had slept for about 1500 years.",
      ],
      commonMistakes: [
        "Saying Coubertin first held the Games in 1894; 1894 is the IOC, 1896 is Athens.",
        "Attributing the ancient Games to him; he revived the modern ones.",
      ],
      recap: [
        "What did Coubertin found in 1894, and where were the first modern Games?",
        "What do the five Olympic rings represent?",
      ],
    },
    {
      title: "A.V. Hill Weighs the Muscle",
      body: `### Sport Meets the Laboratory

**Archibald Vivian Hill (1886-1977)** was a physiologist who studied how muscles actually work.

He measured the **heat** muscles produce and the **oxygen** they consume during exercise.

That work on muscular heat and mechanical work won him the **Nobel Prize in 1922**, shared with Otto Meyerhof.

### Ideas Still in Your Syllabus

Hill pioneered the **oxygen debt** concept that Chapter 1 still calls EPOC.

He also developed the measurement of **VO2 max**, the oxygen-uptake figure from Chapter 2.

Later he advised Britain on physical education and fitness, linking pure science to school sport.`,
      figure: hillArt,
      groups: [
        {
          subTitle: "Hill's Lasting Terms",
          bullets: [
            "Nobel Prize 1922 for muscle heat and work.",
            "Pioneered the idea of oxygen debt, now EPOC.",
            "Developed VO2 max, the endurance measure.",
            "Advised national PE policy in later life.",
          ],
        },
      ],
      examinerTips: [
        "You are not tested on Hill, but his two terms, EPOC and VO2 max, appear on the syllabus.",
        "Read this as proof that Chapter 1's energy systems came from real laboratory work.",
        "Know the words oxygen debt and VO2 max cold; the history just helps you recall them.",
      ],
      commonMistakes: [
        "Giving Hill the lactic-acid name; he framed the oxygen debt around it.",
        "Saying he won the Nobel for coaching; it was for muscle physiology.",
      ],
      recap: [
        "What did Hill win the 1922 Nobel Prize for?",
        "Which two syllabus terms trace back to Hill's research?",
      ],
    },
    {
      title: "Kenneth Cooper and the Aerobic Age",
      body: `### A Doctor Starts Running

**Kenneth H. Cooper (born 1931)** was a US Air Force flight surgeon asking one question.

How could he measure and improve fitness without expensive laboratory gear?

### Aerobics and the Twelve-Minute Run

Cooper coined the word **aerobics** and his 1968 book **Aerobics** became a worldwide bestseller.

He invented the **12-minute run test**, the very **Cooper Test** named in Chapter 2 as a fitness protocol.

He worked with **NASA** on astronaut fitness and bone loss, then founded the Cooper Clinic and Institute in Dallas in 1970.

His message shaped how millions now jog, cycle and count their weekly activity.`,
      figure: cooperArt,
      groups: [
        {
          subTitle: "Cooper's Legacy",
          bullets: [
            "Coined the term aerobics; his 1968 book sold worldwide.",
            "Invented the 12-minute run, your syllabus's Cooper Test.",
            "Studied astronaut fitness and bone loss with NASA.",
            "Founded the Cooper Clinic and Institute in 1970.",
          ],
        },
      ],
      examinerTips: [
        "Cooper's test is examinable by name, so link the man to the 12-Minute Cooper Run.",
        "He shows why health-related fitness became a public obsession, tying into Chapter 2.",
        "The history is not marked; the test protocol and its results are.",
      ],
      commonMistakes: [
        "Calling Cooper the inventor of VO2 max; Hill laid that groundwork.",
        "Saying the Cooper Test is a strength test; it measures aerobic endurance.",
      ],
      recap: [
        "What word did Cooper give the fitness movement, and what book spread it?",
        "Which fitness test from Chapter 2 carries Cooper's name?",
      ],
    },
    {
      title: "Why Your PE Lesson Looks Like This",
      body: `### The Story Assembled

So the syllabus you have studied is a stack of inventions from different centuries.

The Greeks gave us the competitive festival; Jahn, Spiess and Ling gave us structured exercise.

Arnold gave sport a moral job; Coubertin gave it a global stage.

Hill and Cooper gave it the measurements, the pulse, the oxygen and the running test.

### Everything Is Still Connected

Modern PE blends all of it: skills, fitness testing, training theory and the social story around sport.

That is why this course moves from anatomy, through training and psychology, to society.

The next time you run a 12-minute test, remember: it is one man's question about fit pilots.`,
      figure: modernArt,
      groups: [
        {
          subTitle: "One Person, One Piece",
          bullets: [
            "Greece: the Olympic festival and the four-year clock.",
            "Jahn, Spiess, Ling: structured school gymnastics.",
            "Arnold: sport for character and fair play.",
            "Coubertin: the modern Olympics and their symbols.",
            "Hill: oxygen debt and VO2 max; Cooper: aerobics and his run test.",
          ],
        },
      ],
      examinerTips: [
        "Use this chapter to hold the syllabus together, not to memorise dates.",
        "The examinable links are the Cooper Test, EPOC and VO2 max, all from the last two figures.",
        "Retell the whole story to a friend in five minutes; it locks the vocabulary in for free.",
      ],
      commonMistakes: [
        "Treating PE as a modern invention; its bones are two centuries old.",
        "Mixing up Hill (muscle science) with Cooper (public fitness).",
      ],
      recap: [
        "Match each figure to the single idea they added to PE.",
        "Which two history figures supplied terms you must still know for the exam?",
      ],
    },
  ],
};

export const PE_CHAPTER_5: Chapter = chapterFive;
