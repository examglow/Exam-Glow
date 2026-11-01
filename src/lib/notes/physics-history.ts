import type { Chapter } from "./types";

const IMG = "/notes/physics";

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

const haythamArt = artPanel([
  {
    src: "ph07-haytham-camera-obscura.webp",
    alt: "A scholar in a dim eleventh-century room watching an inverted image of a lit candle form on the far wall through a small hole in a shutter",
    caption: "Ibn al-Haytham and the camera obscura: light travels in straight lines",
  },
]);

const galileoNewtonArt = artPanel([
  {
    src: "ph07-galileo-incline-timing.webp",
    alt: "A grooved wooden ramp tilted at a shallow angle with a bronze ball rolling down it while a man marks the time with his pulse",
    caption: "Galileo slowed the fall to measure it",
  },
  {
    src: "ph07-newton-prism-principia.webp",
    alt: "A glass prism splitting a thin beam of daylight into a fan of colour on a desk beside a heavy leather-bound book",
    caption: "Newton: one prism, then the whole Principia",
  },
]);

const faradayMaxwellArt = artPanel([
  {
    src: "ph07-faraday-ring-coil.webp",
    alt: "A nineteenth-century experimenter winding wire around an iron ring and watching a galvanometer needle flick as a battery is connected",
    caption: "Faraday's iron ring: a current born only while another changes",
  },
  {
    src: "ph07-maxwell-hertz-spark.webp",
    alt: "Two metal loops with a bright spark leaping across one gap while a fainter spark answers across the other gap some distance away",
    caption: "Hertz's spark gaps caught the waves Maxwell had predicted",
  },
]);

const rutherfordEinsteinArt = artPanel([
  {
    src: "ph07-rutherford-gold-foil.webp",
    alt: "A circular screen dotted with tiny flashes of light surrounding a thin gold foil that a beam is aimed at from one side",
    caption: "Rutherford's foil: a few alpha particles bounced back",
  },
  {
    src: "ph07-einstein-photoelectric-plate.webp",
    alt: "A beam of light striking a metal plate inside a glass tube and nudging small glowing particles loose from its surface",
    caption: "Light as packets: the photoelectric effect Einstein explained",
  },
]);

const hubbleArt = artPanel([
  {
    src: "ph07-hubble-redshift-spectra.webp",
    alt: "A row of narrow spectra with dark lines, the lines sitting progressively further toward the red end as the galaxies recede",
    caption: "The lines slide red as the galaxies run away",
  },
]);

// One closing chapter for physics: the people behind the syllabus.
const origins: Omit<Chapter, "number"> = {
  title: "The Story Behind the Syllabus",
  intro: `Every equation in this book outlived the person who first wrote it down.

Physics was not invented in one afternoon. It was argued into shape, one stubborn observer at a time.

This closing chapter hands you the names, the tools and the famous mistakes, so the syllabus reads like a story.

Read it once for pleasure, then use the quick checks at the end of each section.`,
  subheadings: [
    {
      title: "Nobody Invented Physics",
      body: `### A Queue, Not a Hero

Physics is the attempt to describe matter, energy and motion with rules that survive being tested.

No single person founded it. There is a long queue, and each worker fixed one piece before passing it on.

**Aristotle (384-322 BC)** sat at the front of that queue and got a great deal wrong.

He argued that heavy things fall faster, and that a moving body needs a pusher to keep going.

Both ideas felt obvious, so they were taught for nearly two thousand years.

### Why the Wrong Answers Mattered

Aristotle's method was still the right one: look closely at nature before you explain it.

His error was trusting everyday impression over measurement, a habit the rest of this chapter undoes one experiment at a time.

So when you meet a law here, treat it as a claim that beat its rivals, not as a fact that fell from the sky.`,
      figure: haythamArt,
      groups: [
        {
          subTitle: "What this chapter is for",
          bullets: [
            "The history is background, not examinable content; the laws and their wording are what earn marks.",
            "Names still help you remember: conservation of mass has a balance, and motion has a ramp.",
            "Every hero below replaced a rule that had sounded obvious for centuries.",
            "The pattern repeats: observe, measure, then doubt your own instinct.",
          ],
        },
      ],
      examinerTips: [
        "No IGCSE paper asks who founded physics, so spend the revision time on the laws themselves.",
        "The one name that can appear is Newton, and only as the author of the three laws of motion.",
        "Use the stories to hold definitions in memory, never as answers in their own right.",
      ],
      commonMistakes: [
        "Naming Einstein or Newton as the sole founder of physics; it was a queue, not a hero.",
        "Treating Aristotle as a fool; his call to observe nature was the starting move of the whole subject.",
        "Writing a scientist's name where the question asked for the physics.",
      ],
      recap: [
        "State the two Aristotle claims about falling and motion that later physics overturned.",
        "Why is Aristotle's method still worth praising even when his answers were wrong?",
      ],
    },
    {
      title: "Ibn al-Haytham Sees How Vision Works",
      body: `### Light Comes In, It Does Not Go Out

For centuries the leading theory said the eye sends out rays to feel the world, like a hand in the dark.

**Ibn al-Haytham (Alhazen), c. 965-1040**, working in Cairo, tested the rival idea and settled it.

He argued that light enters the eye from objects, and that we see because of that incoming light.

His **Book of Optics**, written around 1011-1021, is the founding text of the study of light.

### The Camera Obscura Argument

A dark room with one small hole throws an inverted image of the lit world onto the far wall.

The image flips because light from the top of an object travels straight down through the hole, and light from the bottom travels up.

That single observation shows light moves in **straight lines**, and it underpins every ray diagram you will draw.

He insisted on testing with apparatus, which is why many call him an early father of the scientific method.`,
      groups: [
        {
          subTitle: "Optics ideas that reach your syllabus",
          bullets: [
            "**Rectilinear propagation:** light travels in straight lines, which is why images invert in a pinhole.",
            "Vision is passive: light enters the eye, it is not emitted by it.",
            "Reflection and refraction were later measured, but the straight-line ray picture starts here.",
            "Experiment decides between rival explanations, not authority or intuition.",
          ],
        },
      ],
      examinerTips: [
        "When you draw a ray diagram, the straight-line assumption is Ibn al-Haytham's, even though no mark names him.",
        "For a pinhole-image question, explain the inversion with straight lines crossing at the hole.",
        "Do not claim he discovered refraction; he set up the ray picture others later measured.",
      ],
      commonMistakes: [
        "Saying the eye emits light to see, the theory he disproved.",
        "Crediting him with the laws of reflection or the telescope; those came later and elsewhere.",
        "Confusing the camera obscura with a camera; there was no film, only a wall and a hole.",
      ],
      recap: [
        "Which older theory of vision did Ibn al-Haytham reject, and what did he replace it with?",
        "Explain what the camera obscura shows about the path of light.",
      ],
    },
    {
      title: "Galileo Slows the Fall Down",
      body: `### Measure It, Do Not Argue It

**Galileo Galilei (1564-1642)** refused to trust the bare hand and the naked eye.

Falling bodies move too fast to time, so he rolled bronze balls down a **shallow inclined plane** instead.

The ramp slowed the motion without changing its rule, and he could finally clock it against his pulse.

Distance grew as the **square of the time**, so speed grew steadily: a constant acceleration, not a constant push.

### The Tower Story, and the Telescope

The tale of balls dropped from the Leaning Tower of Pisa comes from a pupil's account and is probably a legend.

The inclined planes are the real, repeatable experiment.

In 1609 Galileo turned a telescope on the sky and saw **four moons orbiting Jupiter**.

Anything could orbit something other than the Earth, which weakened the old picture of the heavens.`,
      figure: galileoNewtonArt,
      groups: [
        {
          subTitle: "The moves that changed physics",
          bullets: [
            "**Time the motion:** slow it down until measurement is possible.",
            "**Constant acceleration:** falling speed grows by equal amounts in equal times.",
            "**Inertia in embryo:** a body on a level surface keeps moving without a pusher.",
            "**Look, then decide:** the telescope overruled a theory by what it revealed.",
          ],
        },
      ],
      examinerTips: [
        "Your s = ut + ½at² equations inherit Galileo's finding that distance grows with time squared.",
        "In a falling-object question, acceleration is constant and speed is not; that distinction is the mark.",
        "Say he used inclined planes to study falling, not the apocryphal tower drop.",
      ],
      commonMistakes: [
        "Believing Galileo proved heavy things fall faster; he showed the opposite once air resistance is small.",
        "Stating the Leaning Tower event as a firm fact.",
        "Claiming Galileo invented the telescope; he improved it and was first to use it for astronomy.",
      ],
      recap: [
        "Why did Galileo use a ramp instead of simply dropping objects?",
        "What did he conclude about the acceleration of a falling body?",
        "Name one thing Galileo saw through his telescope and why it mattered.",
      ],
    },
    {
      title: "Newton Writes the Rules",
      body: `### Three Laws and One Gravity

**Isaac Newton (1642-1727)** gathered the scattered results into a single system.

His **Principia** of **1687** stated the **three laws of motion** and the law of **universal gravitation**.

The same force that drops an apple holds the Moon in orbit; that unification is the famous move.

He built the first practical **reflecting telescope**, using a curved mirror instead of a lens.

### Light, and a Rival

Newton passed daylight through a prism and split it into a spectrum, then recombined it with a second prism.

His point was bold: white light is already a mixture of colours, and colour is a property of the light, not of the glass.

He published this in **Opticks** in 1704.

He also shared the credit for **calculus** with **Gottfried Wilhelm Leibniz**, who developed it separately; the priority quarrel was bitter and pointless.`,
      groups: [
        {
          subTitle: "What Newton supplied to your course",
          bullets: [
            "**First law:** motion persists unless a resultant force acts, the mature form of inertia.",
            "**Second law:** resultant force equals the rate of change of momentum, F = ma at constant mass.",
            "**Third law:** forces come in equal and opposite pairs acting on different bodies.",
            "**Universal gravitation:** one inverse-square force explains falling and orbiting alike.",
          ],
        },
      ],
      examinerTips: [
        "Newton's three laws are examinable by name and content; the biography is not.",
        "When you apply F = ma, subtract opposing forces first to get the resultant.",
        "For prism questions, the colours are already in white light; the prism only separates them.",
      ],
      commonMistakes: [
        "Saying Newton discovered gravity when an apple fell; the story is at best a late embellishment.",
        "Writing that the prism creates colour; it separates colours already present.",
        "Naming Newton alone as the inventor of calculus; Leibniz arrived at it independently.",
      ],
      recap: [
        "State Newton's three laws of motion in one line each.",
        "What did Newton claim about the composition of white light?",
        "Which two people are credited with inventing calculus?",
      ],
    },
    {
      title: "Faraday and Maxwell Join Two Forces",
      body: `### The Man Who Could Not Do the Algebra

**Michael Faraday (1791-1867)** rose from bookbinder's apprentice to the Royal Institution.

In **1831** he discovered **electromagnetic induction**: a changing current in one coil sparked a current in another.

That effect is the working principle behind the transformer and the generator in your syllabus.

Faraday pictured invisible **lines of force** filling space, because he trusted the experiment over the equation.

### Maxwell Turns Lines Into Numbers

**James Clerk Maxwell (1831-1879)** wrote Faraday's lines as equations and saw something startling.

His **1864** theory predicted travelling **electromagnetic waves** that move at the measured **speed of light**.

His conclusion: light itself is an electromagnetic wave. Electricity, magnetism and optics became one subject.

**Heinrich Hertz** generated and detected radio waves in **1887**, confirming the prediction years after Maxwell's death.`,
      figure: faradayMaxwellArt,
      groups: [
        {
          subTitle: "The chain from spark to spectrum",
          bullets: [
            "1820 - Oersted finds that a current deflects a compass needle.",
            "1831 - Faraday induces a current from a changing one.",
            "1864 - Maxwell predicts waves travelling at the speed of light.",
            "1887 - Hertz produces the waves; radio, TV and Wi-Fi follow.",
          ],
        },
      ],
      examinerTips: [
        "Induction is examinable: a conductor moving through a field, or a changing field, induces an e.m.f.",
        "For transformers, quote the turns ratio; Faraday's discovery is the reason it works at all.",
        "The electromagnetic spectrum in your syllabus is Maxwell's legacy: light is one band of it.",
      ],
      commonMistakes: [
        "Saying a steady current in one coil induces a steady current in another; only change induces.",
        "Crediting Hertz with the theory; he confirmed it experimentally.",
        "Treating electricity and magnetism as separate topics; Maxwell joined them.",
      ],
      recap: [
        "What did Faraday discover in 1831, and which two devices depend on it?",
        "State what Maxwell predicted and when Hertz confirmed it.",
      ],
    },
    {
      title: "Radioactivity Opens the Nucleus",
      body: `### A Glow Nobody Expected

In **1896 Henri Becquerel** found that a uranium salt fogged photographic plates with no sunlight at all.

**Marie Curie** pursued the effect, coined the word **radioactivity**, and in **1898** isolated **polonium** and **radium**.

She won the **1903 Nobel Prize in Physics**, then the **1911 Nobel Prize in Chemistry**, still the only pair in two sciences.

### The Atom Gets a Centre

**Ernest Rutherford** directed alpha particles at thin gold foil around **1909**; the screen lit up almost dead-centre behind it.

A few particles bounced almost straight back, which he compared to a shell recoiling from tissue paper.

In **1911** he proposed a tiny, massive, positively charged **nucleus** surrounded by mostly empty space.

**James Chadwick** completed the picture in **1932** by finding the **neutron**.

### And Light Turns Out to Be Granular

In his **1905** paper **Albert Einstein** explained the photoelectric effect by treating light as discrete packets.

His **1921 Nobel Prize** was awarded for that law, not for relativity.`,
      figure: rutherfordEinsteinArt,
      groups: [
        {
          subTitle: "Who found what, and when",
          bullets: [
            "1896 - Becquerel discovers radiation from uranium.",
            "1898 - the Curies name radioactivity and isolate two new elements.",
            "1911 - Rutherford's nuclear atom from the gold-foil scattering.",
            "1932 - Chadwick identifies the neutron.",
          ],
        },
      ],
      examinerTips: [
        "The nuclear model is examinable: most alpha particles pass through, a few deflect, showing empty space and a dense centre.",
        "For decay equations, balance the nucleon number and the proton number across the arrow.",
        "Name the three emissions by nature: alpha is a helium nucleus, beta is an electron, gamma is electromagnetic.",
      ],
      commonMistakes: [
        "Saying Rutherford discovered the electron; that was J J Thomson in 1897.",
        "Claiming Einstein's Nobel was for relativity; it was for the photoelectric effect.",
        "Describing the gold foil as showing atoms are solid; it showed they are mostly empty.",
      ],
      recap: [
        "What did the gold-foil experiment reveal about the atom's structure?",
        "Which two kinds of radiation did the Curies name and isolate?",
        "What did Einstein receive his Nobel Prize for?",
      ],
    },
    {
      title: "Hubble Watches the Universe Recede",
      body: `### The Lines Slide Red

From about **1912 Vesto Slipher** measured the spectra of spiral nebulae and found their lines shifted toward red.

A **redshift** means the source is moving away, because the travelling wave is stretched to a longer wavelength.

### Two Names, One Discovery

In **1927 Georges Lemaître**, a Belgian priest and physicist, argued the Universe is expanding and derived a velocity-distance relation.

In **1929 Edwin Hubble**, using Cepheid variables to measure distances, published the observational relation between distance and recession speed.

In 2018 the astronomical union renamed it the **Hubble-Lemaître law** to share the credit.

The farther a galaxy is, the faster it recedes, which is the direct evidence for a hot, dense beginning.`,
      figure: hubbleArt,
      groups: [
        {
          subTitle: "The evidence stack",
          bullets: [
            "**Redshift:** light from distant galaxies is stretched toward longer wavelengths.",
            "**Distance-speed link:** more distant galaxies recede faster.",
            "**Expansion:** space itself stretches, carrying the galaxies apart.",
            "**CMBR:** a faint microwave glow from every direction, the cooled afterglow of the early Universe.",
          ],
        },
      ],
      examinerTips: [
        "Redshift is examinable; the biography is not. Say wavelength increases and the source recedes.",
        "For a Hubble-law question, use v = H₀d and keep the units the question gives.",
        "Tie redshift and cosmic microwave background radiation together as the two pillars of the expansion answer.",
      ],
      commonMistakes: [
        "Saying galaxies move through space away from a central point; space itself is expanding.",
        "Calling redshift a change in the light the galaxy emits; it is the observed wavelength that stretches.",
        "Giving Hubble sole credit and erasing Lemaître's 1927 work.",
      ],
      recap: [
        "Define redshift and say what it tells us about a distant galaxy.",
        "Which two observations support the idea of an expanding Universe?",
      ],
    },
  ],
};

export const PHYSICS_CHAPTER_7: Chapter = { number: 7, ...origins };
