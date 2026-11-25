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

const leisureArt = artPanel([
  {
    src: "pe04-leisure-recreation.webp",
    alt: "A group of people outdoors cycling, playing badminton, doing yoga and reading on a bench in the sunshine",
    caption: "Free time can be spent on many kinds of recreation",
  },
]);

const pyramidArt = artPanel([
  {
    src: "pe04-sports-development-pyramid.webp",
    alt: "A four-layer pyramid with a large crowd at the base and a single trophy-holding athlete at the top",
    caption: "Foundation at the base, elite at the peak",
  },
]);

const sponsorshipArt = artPanel([
  {
    src: "pe04-sponsorship-media.webp",
    alt: "An athlete in a blank-logo jersey standing before a television and a ring of camera lenses",
    caption: "Sponsorship funds the sport; the media broadcasts it",
  },
]);

const technologyArt = artPanel([
  {
    src: "pe04-technology-in-sport.webp",
    alt: "A tennis ball flying past a screen showing a slow-motion replay beside a photo-finish camera",
    caption: "Technology aids decisions, timing and performance",
  },
]);

const accessArt = artPanel([
  {
    src: "pe04-access-participation.webp",
    alt: "A diverse group entering a stadium through an open turnstile, including a wheelchair user on a ramp",
    caption: "Access removes barriers so more people can take part",
  },
  {
    src: "pe04-peds-testing.webp",
    alt: "An official holding a sealed sample bottle opposite a seated athlete, with a crossed-out pill icon",
    caption: "Drug testing protects fair play in sport",
  },
]);

const chapterFour: Chapter = {
  number: 4,
  title: "Social, Cultural and Ethical Influences",
  intro: `Sport never happens in a bubble; it sits inside society, money and media.

This chapter looks at leisure and recreation, the sports development pyramid, sponsorship, the media, hosting global events, technology, access and participation, drugs, sportsmanship, risk and injuries.

Cambridge rewards **balanced evaluation**: name both an advantage and a disadvantage for the same group.

Practise switching point of view, arguing the effect on the **performer, the sponsor, the sport and the spectator**.`,
  subheadings: [
    {
      title: "Leisure, Recreation and Growth in Sport",
      body: `### The Four Terms

**Leisure time** is free time left once work and daily duties are finished.

**Play** is activity done for its own enjoyment, usually unstructured and spontaneous.

**Recreation**, meaning physical recreation, is activity done in leisure time to refresh the body and mind.

**Sport** is a competitive, organised physical activity governed by agreed rules.

### What Shapes Our Choices

People choose recreation based on **age, interests, social circumstances, family, peer influence, the facilities available, and the local area**, including its geography, culture and tradition.

A child, a student and a retiree rarely want the same activities, and family habits steer a child early.

### Why Leisure Activities Grew

Leisure expanded because of **more free time, advances in technology, better healthcare and health awareness**.

It grew further through **more leisure facilities, cheaper equipment, better travel and wider media coverage**.

Television and the internet turned watching sport into a daily habit for millions.`,
      figure: leisureArt,
      groups: [
        {
          subTitle: "Leisure, Play, Recreation and Sport",
          bullets: [
            "**Leisure time:** free time after duties.",
            "**Play:** enjoyable, unstructured activity for its own sake.",
            "**Recreation:** activity in free time to refresh body and mind.",
            "**Sport:** competitive, organised, rule-governed activity.",
          ],
        },
        {
          subTitle: "Factors Behind the Growth of Leisure",
          bullets: [
            "More leisure time and advances in technology.",
            "Better healthcare and greater health awareness.",
            "More facilities and cheaper equipment.",
            "Improved travel and wider media coverage.",
          ],
        },
      ],
      examinerTips: [
        "Keep play, recreation and sport distinct; the difference is mainly organisation and competition.",
        "For growth, list several factors then explain one in depth with a real example.",
        "Tie each influencing factor to a personal choice to show application.",
      ],
      commonMistakes: [
        "Calling play the same as sport; play is unstructured and non-competitive.",
        "Listing only old factors like television when cheaper equipment and travel matter too.",
        "Defining leisure time as time spent at work.",
      ],
      recap: [
        "Define leisure time, play, recreation and sport. [4]",
        "Explain three factors that influence what a person does in their free time. [6]",
        "Give four reasons why participation in leisure activities has grown. [4]",
      ],
    },
    {
      title: "The Sports Development Pyramid",
      body: `### Four Levels, Base to Peak

The pyramid shows how a nation moves people from first contact with sport up to world-class performance.

The **foundation** level is the base: young people learning basic skills, often through school.

The **participation** level is the broad grassroots tier where people play regularly for fun and fitness.

The **performance** level is narrower: competently organised players representing clubs, counties or regions.

The **elite** level is the single peak: international performers who are fully dedicated.

### How the Levels Work Together

A wide foundation feeds talent upward, so a strong grassroots base is essential to producing elite performers.

Funding and coaching are concentrated at the top, while facilities and access drive the bottom.

The flow depends on **identification, support and progression** between each level.`,
      figure: pyramidArt,
      groups: [
        {
          subTitle: "Characteristics of Each Level",
          bullets: [
            "**Foundation (lowest):** basic skills learned, mainly by young people.",
            "**Participation:** regular recreational play for fun and health.",
            "**Performance:** organised competitive play representing a club or region.",
            "**Elite (highest):** full-time, international standard performance.",
          ],
        },
        {
          subTitle: "How the Pyramid Feeds Upward",
          bullets: [
            "A broad base supplies more talent to the levels above.",
            "Talent is identified and then supported as it rises.",
            "Facilities and access drive the lower levels.",
            "Funding and specialist coaching concentrate at the top.",
          ],
        },
      ],
      examinerTips: [
        "Name the four levels in the right order with elite at the top and foundation at the bottom.",
        "Describe the characteristics of each level, not just its name.",
        "For evaluation, argue why a weak foundation limits elite success.",
      ],
      commonMistakes: [
        "Placing participation above performance; performance is the higher, narrower tier.",
        "Treating the elite level as the largest; it is the smallest group.",
        "Forgetting that the foundation targets children and basic skills.",
      ],
      recap: [
        "Name and describe the four levels of the sports development pyramid. [6]",
        "Explain why the participation level matters for producing elite performers. [3]",
        "State one factor that helps a performer move up the pyramid. [2]",
      ],
    },
    {
      title: "Sponsorship and the Media",
      body: `### Three Types of Sponsorship

**Sponsorship** is a company supporting sport in exchange for publicity.

It can be **financial support**, **clothing, footwear or equipment**, or the **provision of specialist facilities**.

### Who Wins and Who Loses

For the **performer or team**, sponsorship brings money and kit, but the sponsor may demand results or clash with personal deals.

For the **sponsor**, brand exposure grows sales, but a bad reputation or a losing team brings negative publicity.

For the **sport or event**, funding raises standards and profile, yet money can bend the rules to suit the sponsor.

For the **spectator**, better facilities and free coverage are welcome, but excessive advertising can spoil the game.

### Media Coverage

Four kinds of media cover sport: **television, internet and social media, print** and **radio**.

For the **performer**, the media builds fame and income but invites harsh scrutiny and loss of privacy.

For the **sport**, coverage brings money and new fans, but can push rule changes to suit television schedules.

For the **spectator**, coverage gives free access and highlights, yet too much of it can commercialise the game.`,
      figure: sponsorshipArt,
      groups: [
        {
          subTitle: "Types of Sponsorship",
          bullets: [
            "**Financial support** paid to a team or event.",
            "**Clothing, footwear or equipment** supplied free.",
            "**Provision of specialist facilities** for training.",
          ],
        },
        {
          subTitle: "Balanced Evaluation Frame",
          bullets: [
            "Always weigh advantages against disadvantages.",
            "Then split by group: performer, sponsor, sport, spectator.",
            "**Media types:** television, internet and social media, print, radio.",
          ],
        },
      ],
      examinerTips: [
        "Match each advantage or disadvantage to the exact group the question names; do not drift to a different party.",
        "Give one advantage and one disadvantage for the same group to earn the evaluation marks.",
        "List the four media types, then evaluate their effect on one group deeply.",
      ],
      commonMistakes: [
        "Arguing only the benefits of sponsorship when the question asks for disadvantages too.",
        "Confusing sponsorship with the media; sponsorship funds, the media broadcasts.",
        "Attributing a disadvantage to the wrong group, such as blaming the spectator for a sponsor's loss.",
      ],
      recap: [
        "Describe three types of sponsorship. [3]",
        "Give one advantage and one disadvantage of sponsorship to the sponsor. [4]",
        "Assess the impact of television coverage on a performer. [4]",
      ],
    },
    {
      title: "Technology and the Professional Performer",
      body: `### Hosting a Global Event

Being a **host nation** brings several advantages worth listing.

It leaves **stadia and training facilities** and a **legacy**, plus better **infrastructure** such as roads and transport.

It brings **home advantage**, a lift in **national pride**, **improved tourism** and **increased employment**.

### Professional Against Amateur

A **professional** is paid to take part, while a traditional **amateur** plays unpaid, purely for love of the game.

The line has **blurred**, since many former 'amateur' events now quietly pay their competitors.

Both amateurs and professionals now compete at the **Olympic Games**, which ended the strict old divide.

### Technology in Sport

Technology serves three roles, and Cambridge wants all three examples.

It aids **decision-making by officials**, as in tennis, football and rugby with video review.

It **records time and distance** accurately, as in athletics timing and measurement.

It **enhances performance** through better equipment, as in aerodynamic cycling suits and bikes.

Each can help or harm: review aids fairness but slows the game, and rich teams gain from costly kit.`,
      figure: technologyArt,
      groups: [
        {
          subTitle: "Advantages of Being a Host Nation",
          bullets: [
            "New stadia, training facilities and a lasting legacy.",
            "Home advantage and a rise in national pride.",
            "Improved tourism and increased employment.",
            "Better transport and wider infrastructure.",
          ],
        },
        {
          subTitle: "Uses of Technology",
          bullets: [
            "**Decision-making** by officials in tennis, football, rugby.",
            "**Recording time and distance** in athletics.",
            "**Enhancing performance** through equipment, as in cycling.",
            "Impact can be positive or negative for officials, performers, spectators and the sport.",
          ],
        },
      ],
      examinerTips: [
        "List host-nation advantages with the key words 'legacy' and 'infrastructure', both credit points.",
        "For technology, name all three uses with one sport example beside each.",
        "On professional versus amateur, mention the blurring and the Olympics, since both are marked.",
      ],
      commonMistakes: [
        "Saying only amateurs compete at the Olympics; professionals now do too.",
        "Naming only video technology when timing and performance enhancement also count.",
        "Describing only the short-term gains of hosting and ignoring the legacy.",
      ],
      recap: [
        "Explain four advantages to a nation of hosting a major games. [4]",
        "Describe the difference between a professional and an amateur performer. [3]",
        "Give three uses of technology in sport, each with an example. [6]",
      ],
    },
    {
      title: "Access, Participation and Performance-Enhancing Drugs",
      body: `### What Blocks and Boosts Access

Four factors affect **access** to activity: **age, gender, disability, and social and cultural influences**.

Eight factors affect **participation**: **access, discrimination, education, environment and climate, family, financial cost, media coverage, role models, and time and work commitments**.

Strategies to raise participation work through **promotion, provision and access**, matching the barrier you are removing.

### Why Performers Use PEDs

Some performers take banned **performance-enhancing drugs** to **enhance performance**, to **keep up with the competition**, or for **fame and increased wealth**.

### The Types and Their Effects

**Anabolic steroids** increase muscle mass. **Beta blockers** reduce anxiety and steady the hand.

**Stimulants** increase alertness. **Diuretics** flush water to lose weight quickly.

**Blood doping** raises the red blood cell count, so more oxygen reaches the muscles and endurance improves.

The organizing bodies run **in- and out-of-competition testing** and **ban drugs** to protect fair play and health.

### The Cost of Doping

Disadvantages are severe: **health risks, financial penalty, public humiliation, disqualification or a ban**, and harm to **other competitors'** results.

Drugs scandals also damage the **image of the whole sport**, long after one athlete is punished.`,
      figure: accessArt,
      groups: [
        {
          subTitle: "Factors Affecting Access and Participation",
          bullets: [
            "**Access:** age, gender, disability, social and cultural influence.",
            "**Participation:** access, discrimination, education, environment, family, cost, media, role models, time.",
            "**Strategies:** promotion, provision and improved access.",
          ],
        },
        {
          subTitle: "PED Types and Their Effects",
          bullets: [
            "**Anabolic steroids:** greater muscle mass.",
            "**Beta blockers:** lower anxiety, steadier hands.",
            "**Stimulants:** higher alertness.",
            "**Diuretics:** rapid weight loss.",
            "**Blood doping:** more red cells, better endurance.",
          ],
        },
      ],
      examinerTips: [
        "Match each PED to its exact effect; beta blockers suit aiming sports, not weight loss.",
        "Separate the access factors from the participation factors, since the lists differ.",
        "For evaluation, always add a disadvantage of doping to a stated reason for using it.",
      ],
      commonMistakes: [
        "Saying anabolic steroids improve reaction time; they build muscle mass.",
        "Confusing diuretics (weight loss) with stimulants (alertness).",
        "Naming only barriers to access when the question also asks for participation factors.",
      ],
      recap: [
        "Explain four factors that reduce a person's participation in physical activity. [4]",
        "Describe two strategies that could raise participation in your local area. [4]",
        "Match each of the four named PED types to its main effect. [4]",
        "Give three disadvantages of using performance-enhancing drugs. [3]",
      ],
    },
    {
      title: "Sportsmanship, Risk and Injuries",
      body: `### Sportsmanship Against Gamesmanship

**Sportsmanship** is fair play and respect: helping an injured rival, admitting a foul, shaking hands.

**Gamesmanship** is bending the rules to win without openly breaking them, such as time-wasting or a dive.

Both sit inside the ethics of performance and are examinable as contrasting behaviours.

### Real Against Perceived Risk

**Real risk** is the actual danger present in an activity.

**Perceived risk** is the danger the participant believes exists, which may be higher or lower than the truth.

### Reducing Risk

Assess the risks in each environment: **sports halls, playing fields, swimming pools and artificial surfaces**.

Reduce them with **protective clothing, appropriate kit and footwear, safe lifting, hydration, warm-up and cool-down, following rules and a suitable level of competition**.

### Common Injuries and RICE

Know the causes and simple treatments for **winding, simple cuts or grazes and blisters**.

**Bruises, and muscle, tendon and ligament injuries** are treated with the **RICE** method.

**R**est the injured part, apply **Ice**, wrap with a **Compression** bandage and **Elevate** the limb.

Cooling a bruise narrows blood vessels, limiting swelling, while rest prevents further damage.`,
      groups: [
        {
          subTitle: "Ethics and Risk",
          bullets: [
            "**Sportsmanship:** fair play, respect for opponents and officials.",
            "**Gamesmanship:** gaining an edge without outright breaking the rules.",
            "**Real risk:** the actual danger; **perceived risk:** the danger felt.",
          ],
        },
        {
          subTitle: "Risk Reduction Strategies",
          bullets: [
            "Wear protective clothing and suitable footwear.",
            "Lift and carry equipment safely and stay hydrated.",
            "Warm up and cool down, follow the rules.",
            "Compete at a suitable level for the participants.",
          ],
        },
        {
          subTitle: "Treating Minor Injuries",
          bullets: [
            "**RICE:** Rest, Ice, Compression, Elevation for soft-tissue injuries.",
            "Ice and rest limit swelling and further damage.",
            "Know simple care for winding, cuts, grazes and blisters.",
          ],
        },
      ],
      examinerTips: [
        "Contrast sportsmanship with gamesmanship using one clear example of each.",
        "Spell out R, I, C and E and link Ice to narrowing vessels and less swelling.",
        "Distinguish real from perceived risk by using the words 'actual' and 'believed'.",
      ],
      commonMistakes: [
        "Calling a deliberate rule break gamesmanship; that is cheating, whereas gamesmanship only bends the rules.",
        "Applying heat, not ice, to a fresh sprain, which increases swelling.",
        "Defining perceived risk as the same as real risk.",
      ],
      recap: [
        "Define sportsmanship and gamesmanship, each with one example. [4]",
        "Explain the difference between real and perceived risk. [2]",
        "Describe the RICE method and explain why the part is iced. [4]",
      ],
    },
  ],
};

export const PE_CHAPTER_4: Chapter = chapterFour;
