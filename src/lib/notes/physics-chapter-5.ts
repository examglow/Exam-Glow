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

const alphaScatteringArt = artPanel([
  {
    src: "ph05-alpha-scattering.webp",
    alt: "A beam of alpha particles aimed at a thin gold foil with most passing straight through and a few bending aside",
    caption: "Most alpha particles pass straight through the foil",
  },
  {
    src: "ph05-alpha-rebound.webp",
    alt: "A single alpha particle rebounding backward after striking a tiny dense glowing nucleus",
    caption: "A rare rebound reveals the small positive nucleus",
  },
]);

const geigerArt = artPanel([
  {
    src: "ph05-geiger-counter.webp",
    alt: "A hand holding a Geiger-Muller tube probe over a small radioactive source joined by a cable to a counter display",
    caption: "A Geiger-Muller tube and its counter",
  },
  {
    src: "ph05-background-radiation.webp",
    alt: "A domestic scene with stone walls, a glass of water, food and rays from the sky all marked as radiation sources",
    caption: "Everyday sources of background radiation",
  },
]);

const decayCurveArt = artPanel([
  {
    src: "ph05-decay-curve.webp",
    alt: "A smoothly falling count-rate curve with dashed marks halving the value at each equal time step",
    caption: "The count rate halves over each half-life",
  },
  {
    src: "ph05-half-life-blocks.webp",
    alt: "Rows of glowing blocks shrinking from sixteen to eight to four to two to one",
    caption: "Half the remaining nuclei decay each half-life",
  },
]);

const chapterFive: Chapter = {
  number: 5,
  title: "Nuclear Physics",
  intro: `Atoms are mostly empty space, yet a tiny dense nucleus holds almost all their mass.\n\nThis chapter builds that **nuclear model**, then shows how unstable nuclei **decay** and emit radiation.\n\nWe learn **nuclide notation**, detect radiation with a **Geiger-Muller tube**, and compare alpha, beta and gamma.\n\nFinally we use **half-life** to choose isotopes for real jobs and keep radiation **safe**.`,
  subheadings: [
    {
      title: "The Atom: Nucleus, Electrons and Ions",
      body: `### The Structure of an Atom

An **atom** has a tiny, positively charged **nucleus** at its centre.

Around the nucleus, negatively charged **electrons** move in orbits.

The nucleus is positive because it contains protons, while electrons carry negative charge.

A whole atom is electrically **neutral**, since its protons and electrons are equal in number.

### Forming Positive and Negative Ions

A neutral atom can gain or lose electrons to become an **ion**.

Losing electrons leaves more protons than electrons, so a **positive ion** forms.

Gaining electrons gives more electrons than protons, so a **negative ion** forms.

Only electrons move during charging; the protons in the nucleus stay fixed.

### Why the Model Matters

The arrangement of electrons sets the chemical behaviour of the atom.

The nucleus sets its identity and almost all of its mass.

This split between a heavy positive core and light orbiting electrons is the **nuclear model**.`,
      groups: [
        {
          subTitle: "The Nuclear Model in One View",
          bullets: [
            "The **nucleus** is small, dense and positively charged at the atom's centre.",
            "**Electrons** are negatively charged and orbit the nucleus at large distances.",
            "A complete atom is **neutral**, with equal numbers of protons and electrons.",
            "Almost all the atom's mass sits in the nucleus; the rest is empty space.",
          ],
        },
        {
          subTitle: "Ions by Losing or Gaining Electrons",
          bullets: [
            "Losing electrons gives a **positive ion**, with more protons than electrons.",
            "Gaining electrons gives a **negative ion**, with more electrons than protons.",
            "Charging transfers only electrons, never protons.",
            "The nucleus is unchanged when an atom becomes an ion.",
          ],
        },
      ],
      examinerTips: [
        "Always say the nucleus is **positively charged** and electrons **orbit** it, as mark schemes phrase it.",
        "For an ion, state the charge and give the reason in terms of electrons gained or lost.",
        "Note a whole atom is **neutral** because protons and electrons are equal in number.",
        "Never claim protons move when forming an ion; only electrons are transferred.",
      ],
      commonMistakes: [
        "Saying electrons are positively charged or that the nucleus is negative.",
        "Thinking a positive ion is made by adding protons, rather than losing electrons.",
        "Describing electrons as fixed in place instead of orbiting the nucleus.",
        "Believing an atom is charged overall, when it is electrically neutral.",
      ],
      recap: [
        "Describe the structure of an atom in terms of its nucleus and electrons. [3]",
        "State the charge of the nucleus and of an electron. [2]",
        "Explain how a neutral atom forms a positive ion. [2]",
        "Explain how a neutral atom forms a negative ion. [2]",
      ],
    },
    {
      title: "Alpha-Particle Scattering: Evidence for the Nucleus",
      body: `### The Scattering Experiment

A beam of **alpha particles** is fired at a very thin sheet of gold **metal foil**.

Most alpha particles pass straight through the foil with little or no deflection.

A few are deflected through large angles, and a very small number rebound almost straight back.

The foil is thin so that each particle meets at most one layer of atoms.

### What the Evidence Proves

That most particles pass through shows the atom is **mostly empty space**.

The large-angle deflections show a nucleus that is **very small and very massive**.

Because positive alpha particles are repelled and turned back, the nucleus must be **positively charged**.

The tiny fraction that rebound proves the nucleus occupies a **very small volume**.

### The Conclusion

The experiment gave the first clear evidence for a **tiny, massive, positive nucleus**.

Every property of the nuclear model is supported by one of these observations.`,
      figure: alphaScatteringArt,
      groups: [
        {
          subTitle: "Observation Matched to Conclusion",
          bullets: [
            "**Most pass through**, so the atom is mostly **empty space**.",
            "**Large deflection** shows a nucleus that is **very small and contains most of the mass**.",
            "**Rebound back** shows a **positively charged** nucleus repelling the alpha particles.",
            "Few particles are affected, so the nucleus is tiny beside the whole atom.",
          ],
        },
        {
          subTitle: "Why Alpha Particles Are Used",
          bullets: [
            "Alpha particles are **heavy and positively charged**, so a nucleus repels them strongly.",
            "Only a compact, massive nucleus can reverse a fast, heavy alpha particle.",
            "Their size makes any deflection easy to detect on the screen.",
          ],
        },
      ],
      examinerTips: [
        "Link each observation directly to its conclusion, since marks are given for the pairing.",
        "Use the words **small**, **massive** and **positively charged** to describe the nucleus.",
        "Mention the foil is **thin**, so a particle meets at most one nucleus.",
        "State that most empty space explains why most particles pass straight through.",
      ],
      commonMistakes: [
        "Saying scattering proves electrons orbit the nucleus, when it evidences the nucleus itself.",
        "Claiming most alpha particles are deflected, when most actually pass straight through.",
        "Forgetting that the rebound shows the nucleus is positively charged.",
        "Describing the nucleus as large, when the experiment shows it is very small.",
      ],
      recap: [
        "Describe how alpha particles scatter when fired at thin gold foil. [3]",
        "State the three conclusions about the nucleus drawn from the experiment. [3]",
        "Explain why most alpha particles pass straight through the foil. [2]",
        "Explain why the rebound of a few alpha particles shows a positive nucleus. [2]",
      ],
    },
    {
      title: "Protons, Neutrons, Nuclide Notation and Isotopes",
      body: `### The Contents of the Nucleus

The **nucleus** is made of **protons** and **neutrons**, together called **nucleons**.

Protons have relative charge **+1**, neutrons **0**, and electrons **–1**.

The **proton number** Z is the number of protons in the nucleus.

The **nucleon number** A is the total number of protons plus neutrons.

The number of neutrons is found by subtracting, giving **A minus Z**.

### Reading Nuclide Notation

A nuclide is written as symbol X with **A above Z** beside it.

The upper number A is the nucleon number; the lower number Z is the proton number.

The **proton number equals the nuclear charge**, since each proton adds one positive charge.

The **nucleon number gives the relative mass** of the nucleus.

### Isotopes

**Isotopes** are atoms of the same element with the same Z but different A.

They differ only in their number of **neutrons**, so their masses differ.

Because Z is unchanged, isotopes share the same chemical behaviour.

An element often has **more than one isotope**, some stable and some radioactive.`,
      groups: [
        {
          subTitle: "The Three Particles and Their Charges",
          bullets: [
            "**Proton**: relative charge **+1**, found in the nucleus.",
            "**Neutron**: relative charge **0**, found in the nucleus.",
            "**Electron**: relative charge **–1**, orbiting outside the nucleus.",
            "The nucleus's positive charge comes from its protons alone.",
          ],
        },
        {
          subTitle: "Reading Nuclide Notation",
          bullets: [
            "Write the symbol X with **A above Z** at the side.",
            "**A** is the nucleon number, the total of protons plus neutrons.",
            "**Z** is the proton number, the number of protons.",
            "Neutrons equal **A – Z**.",
            "Z sets the nuclear charge; A sets the relative mass of the nucleus.",
          ],
        },
        {
          subTitle: "Isotopes Explained",
          bullets: [
            "Isotopes have the **same Z** but a **different A**.",
            "They contain the same number of protons but different neutrons.",
            "Carbon-12 and carbon-14 are isotopes, both with Z equals 6.",
            "Isotopes behave the same chemically but differ in mass and stability.",
          ],
        },
      ],
      examinerTips: [
        "Define **proton number** and **nucleon number** precisely, as these terms are marked separately.",
        "Find neutrons by A minus Z every time and show the subtraction.",
        "Place A on top and Z below in notation, since reversing them loses marks.",
        "For isotopes always say 'same proton number, different neutron number'.",
      ],
      commonMistakes: [
        "Calculating neutrons as A plus Z instead of A minus Z.",
        "Swapping the positions of A and Z in nuclide notation.",
        "Saying isotopes differ in proton number, when only neutrons differ.",
        "Confusing the nucleon number with the number of neutrons alone.",
      ],
      recap: [
        "State the relative charges of the proton, neutron and electron. [3]",
        "An atom has A equals 23 and Z equals 11. Find its number of neutrons. [1]",
        "Write nuclide notation for a nucleus with 6 protons and 8 neutrons. [2]",
        "Define an isotope and give one example. [3]",
      ],
    },
    {
      title: "Nuclear Fission and Fusion",
      body: `### Nuclear Fission

**Fission** is the **splitting** of a heavy nucleus into two lighter nuclei.

A slow neutron strikes a uranium nucleus, which splits into two smaller nuclei.

The split releases extra **neutrons**, which can trigger further fissions in a chain reaction.

The products have slightly **less total mass** than the original nucleus.

That lost mass is released as a large amount of **energy**.

### Nuclear Fusion

**Fusion** is the **joining** of light nuclei to form a heavier nucleus.

In the Sun, hydrogen nuclei fuse together to make helium nuclei.

The new nucleus has slightly **less mass** than the nuclei that formed it.

The missing mass again appears as a vast quantity of **energy**.

### Balancing the Nuclide Equation

Both processes are shown with **nuclide equations** that balance on each side.

The sum of the **nucleon numbers A** is equal on both sides.

The sum of the **proton numbers Z** is equal on both sides.

Free neutrons are written with A equals 1 and Z equals 0.`,
      groups: [
        {
          subTitle: "Fission Versus Fusion",
          bullets: [
            "**Fission** splits a heavy nucleus into two lighter ones and releases neutrons.",
            "**Fusion** joins light nuclei into one heavier nucleus.",
            "Fission powers nuclear reactors; fusion powers the Sun and stars.",
            "Both release energy because the products have slightly less mass.",
          ],
        },
        {
          subTitle: "Mass and Energy Changes",
          bullets: [
            "Product mass is **less** than the starting mass in both reactions.",
            "The 'missing' mass is converted into **energy**.",
            "The energy released is huge compared with a chemical reaction.",
            "Only the qualitative mass decrease is needed, with no values.",
          ],
        },
        {
          subTitle: "Balancing the Nuclide Equation",
          bullets: [
            "Total **A** must be the same on both sides of the arrow.",
            "Total **Z** must be the same on both sides of the arrow.",
            "A free neutron carries A equals 1 and Z equals 0.",
            "Count nucleons and protons separately to check your balance.",
          ],
        },
      ],
      examinerTips: [
        "State that A balances and Z balances separately when completing a nuclide equation.",
        "Describe fission as splitting and fusion as joining; use those exact verbs.",
        "Say the total mass decreases and the difference is released as energy.",
        "Give a real source for each, fission in reactors and fusion in stars.",
      ],
      commonMistakes: [
        "Confusing fission with fusion, or describing fusion as splitting.",
        "Saying mass is destroyed rather than converted into energy.",
        "Leaving A and Z unbalanced across the reaction arrow.",
        "Thinking fusion uses heavy nuclei, when it joins light ones.",
      ],
      recap: [
        "Describe nuclear fission as a splitting process. [2]",
        "Describe nuclear fusion as a joining process. [2]",
        "Complete a nuclide equation so that A and Z both balance. [2]",
        "Explain the mass and energy change common to both processes. [3]",
      ],
    },
    {
      title: "Detecting Radiation: Background and Count Rate",
      body: `### Background Radiation

**Background radiation** is the low-level ionising radiation present around us constantly.

It comes from **radon gas** from the ground and from **rocks and buildings**.

It also comes from **food and drink**, which contain tiny amounts of radioactive material.

**Cosmic rays** from space add to it, and its level varies with location.

### Measuring Radiation

Radiation is detected with a **detector** linked to an electronic **counter**.

The usual detector is a **Geiger-Muller tube**, which registers each particle it detects.

Its reading is a **count rate**, the number of counts recorded each second.

Count rate is measured in **counts per second**.

### Corrected Count Rate

The detector records background radiation as well as the source.

The **corrected count rate** removes this constant background from the reading.

It is found by subtracting: corrected count rate equals measured count rate minus background count rate.

This gives the count rate due to the source alone.`,
      figure: geigerArt,
      groups: [
        {
          subTitle: "Sources of Background Radiation",
          bullets: [
            "**Radon gas** released from the ground and from building materials.",
            "**Rocks and buildings**, especially those containing radioactive minerals.",
            "**Food and drink**, which naturally hold small amounts of radioactivity.",
            "**Cosmic rays** arriving from the Sun and deep space.",
          ],
        },
        {
          subTitle: "The Detector and Its Reading",
          bullets: [
            "A **detector** linked to a **counter** registers the incoming radiation.",
            "The **Geiger-Muller tube** is the standard detector used in schools.",
            "**Count rate** is the number of counts recorded per second.",
            "Measure the background with no source, then the source, then subtract.",
          ],
        },
        {
          subTitle: "Corrected Count Rate",
          bullets: [
            "**Corrected count rate** equals measured count rate minus background count rate.",
            "The background is recorded before any source is brought near.",
            "Subtraction removes the constant background so only the source remains.",
            "Report the corrected result in **counts per second**.",
          ],
        },
      ],
      examinerTips: [
        "List at least four background sources: radon, rocks and buildings, food and drink, cosmic rays.",
        "Name both parts of the equipment, the **detector** and the **counter**.",
        "State the subtraction formula for corrected count rate explicitly.",
        "Record the background with no source present before measuring the source.",
      ],
      commonMistakes: [
        "Forgetting to subtract the background, so the count rate reads too high.",
        "Giving one background source instead of the full range required.",
        "Calling count rate a total count rather than a rate per second.",
        "Saying the counter detects radiation alone, ignoring the detector tube.",
      ],
      recap: [
        "State four sources of background radiation. [4]",
        "Describe how a detector and counter are used to measure radiation. [2]",
        "A measured count rate is 320 counts per second and the background is 40. Find the corrected count rate. [2]",
        "Give the unit of count rate. [1]",
      ],
    },
    {
      title: "Alpha, Beta and Gamma: Nature and Penetration",
      body: `### Radiation Is Spontaneous and Random

Radioactive decay is **spontaneous**: it is unaffected by temperature, pressure or chemical state.

It is also **random**, since any single nucleus decays at an unpredictable moment.

Large numbers of nuclei decay at a steady average rate we can measure.

Three emissions are released: **alpha, beta and gamma**.

### The Nature of Each Emission

An **alpha particle** is a **helium nucleus**, made of two protons and two neutrons.

A **beta particle** is a fast-moving **electron** ejected from the nucleus.

**Gamma radiation** is **electromagnetic** radiation of very high frequency.

### Ionising and Penetrating Power

**Alpha** ionises most and penetrates least, stopped by a sheet of paper.

**Beta** ionises moderately and is stopped by a few millimetres of aluminium.

**Gamma** ionises least and penetrates most, reduced by thick lead or concrete.

Alpha ionises most because it is **large, slow and strongly charged**.

### Deflection in Fields

In an **electric field**, alpha and beta bend in **opposite directions**.

**Gamma is not deflected**, since it carries no charge.

In a **magnetic field**, alpha and beta again deflect, gamma does not.

Alpha deflects least because it is far **more massive** than beta.`,
      groups: [
        {
          subTitle: "The Three Emissions Compared",
          bullets: [
            "**Alpha**: helium nucleus, charge +2, strong ioniser, weak penetration, stopped by paper.",
            "**Beta**: electron, charge –1, medium ioniser, stopped by a few millimetres of aluminium.",
            "**Gamma**: electromagnetic wave, no charge, weak ioniser, very penetrating, reduced by thick lead.",
          ],
        },
        {
          subTitle: "Why Alpha Is the Strongest Ioniser",
          bullets: [
            "An alpha particle is **large and heavy**, so it interacts strongly with matter.",
            "It moves **slowly**, spending longer near each atom it passes.",
            "Its strong charge **pulls electrons off** many atoms in a short path.",
            "Beta, being lighter and faster, ionises far less per unit distance.",
          ],
        },
        {
          subTitle: "Behaviour in Fields",
          bullets: [
            "In an electric field, **alpha and beta deflect in opposite directions**.",
            "**Gamma is not deflected** at all, because it is neutral.",
            "In a magnetic field, alpha and beta deflect and gamma does not.",
            "Alpha deflects less than beta, being far **more massive**.",
          ],
        },
      ],
      examinerTips: [
        "Give the nature of each as **helium nucleus, electron, electromagnetic**, since this trio is marked.",
        "Rank ionising and penetrating power in opposite orders and state both clearly.",
        "Explain alpha's strong ionisation by its charge, size and slow speed.",
        "State that gamma is undeflected because it carries no charge.",
      ],
      commonMistakes: [
        "Calling an alpha particle a helium atom rather than a helium nucleus.",
        "Thinking beta electrons come from orbitals, when they come from the nucleus.",
        "Ranking gamma as the most ionising, when it is the least.",
        "Showing alpha and beta deflecting the same way in a field.",
      ],
      recap: [
        "State what is meant by radioactive decay being spontaneous and random. [2]",
        "Give the nature and charge of alpha, beta and gamma radiation. [3]",
        "Compare the ionising and penetrating abilities of the three emissions. [4]",
        "Explain why alpha particles are deflected less than beta particles in a field. [2]",
      ],
    },
    {
      title: "Radioactive Decay and Half-Life",
      body: `### How Decay Changes a Nucleus

Radioactive decay occurs when an **unstable nucleus** releases energy to become more stable.

It can emit an **alpha particle, a beta particle or gamma radiation**.

Emitting **alpha or beta** changes the proton number, so a **different element** forms.

Emitting only **gamma** leaves the same element, since charge and mass are unchanged.

### Balancing Decay Equations

Decay equations use **nuclide notation**, with A above Z for each nuclide.

The **total A** and the **total Z** must be equal on both sides.

In **alpha decay**, A falls by four and Z falls by two.

In **beta minus decay**, a neutron turns into a proton plus an electron.

The electron leaves as the beta particle, so A is unchanged and Z rises by one.

### Half-Life Defined

The **half-life** is the time taken for half the nuclei in a sample to decay.

It is also the time for the **corrected count rate to halve**.

Each half-life halves what remains, so after two a quarter is left.

### Reading Half-Life from Data

From a **table**, keep halving the corrected count rate for each half-life.

From a **decay curve**, read the time for the count rate to halve from any value.`,
      figure: decayCurveArt,
      groups: [
        {
          subTitle: "Alpha and Beta Decay at the Nucleus",
          bullets: [
            "**Alpha decay**: A falls by 4 and Z falls by 2, forming a new element.",
            "**Beta minus decay**: a neutron becomes a proton plus an electron.",
            "The emitted electron is the beta particle, so Z rises by 1 and A is unchanged.",
            "**Gamma emission**: A and Z unchanged, so the element stays the same.",
          ],
        },
        {
          subTitle: "Balancing Rules",
          bullets: [
            "Total **nucleon number A** balances across the arrow.",
            "Total **proton number Z** balances across the arrow.",
            "The alpha particle is written with A over Z as 4 over 2.",
            "Recount A and Z after placing the missing nuclide.",
          ],
        },
        {
          subTitle: "Using Half-Life",
          bullets: [
            "Half-life is the time for **half the nuclei** to decay.",
            "After one half-life half remains, after two a quarter, after three an eighth.",
            "Read one half-life as the time for a halving of the count rate.",
            "Use the corrected count rate, never the raw reading.",
          ],
        },
      ],
      examinerTips: [
        "State that both A and Z balance for every decay equation and show the arithmetic.",
        "Remember beta minus raises Z by one while A stays unchanged.",
        "For half-life tables, keep halving the corrected count rate for each step.",
        "Choose any two points a half-drop apart when reading the decay curve.",
      ],
      commonMistakes: [
        "Forgetting that alpha decay lowers Z, so a new element forms.",
        "Writing beta decay as lowering Z, when it raises Z by one.",
        "Thinking all nuclei decay after one half-life, when only half do.",
        "Reading the decay curve from the wrong starting count rate.",
      ],
      recap: [
        "Explain how alpha and beta decay each produce a different element. [2]",
        "Describe the change in a nucleus that emits a beta particle. [2]",
        "Balance a given alpha decay equation in nuclide notation. [2]",
        "A sample has a half-life of 4 hours and starts at 800 counts per second. Find the corrected count rate after 12 hours. [3]",
      ],
    },
    {
      title: "Uses of Radioactivity and Radiation Safety",
      body: `### Choosing a Suitable Isotope

The right **radiation type** and **half-life** decide which isotope is used.

A **smoke alarm** uses an **alpha** source with a **long half-life** to ionise air steadily.

Alpha's strong ionising power and low penetration make it safe outside the alarm.

A long half-life means the source needs changing only rarely.

### Uses in Industry and Medicine

Gamma rays **irradiate food**, killing bacteria to extend shelf life.

Gamma **sterilises surgical equipment** without heat, so it suits sealed packs.

A beta source controls the **thickness of paper or foil** by monitoring transmission.

Gamma is used in **cancer diagnosis and treatment**, aimed at tumours with precision.

### Hazards of Ionising Radiation

Ionising radiation can **damage living cells** by disrupting their structure.

Damage may cause **cell death**, a **mutation**, or the later growth of **cancer**.

Alpha is least dangerous outside the body but very dangerous if inhaled or swallowed.

### Safe Handling and the Three Rules

Sources are **moved with tongs**, kept in **lead-lined boxes** and never pointed at people.

To reduce dose: **reduce exposure time**, **increase distance**, and **use shielding**.

Greater distance lets the body receive far less radiation.

Shielding absorbs the radiation before it reaches the user.`,
      groups: [
        {
          subTitle: "Matching Isotope to Job",
          bullets: [
            "**Smoke alarm**: alpha source with a long half-life, contained and safe.",
            "**Food irradiation and sterilising**: gamma, very penetrating, kills microbes without heat.",
            "**Thickness control**: beta, whose transmission changes with material thickness.",
            "**Cancer diagnosis and treatment**: gamma, focused on the tumour while healthy tissue is shielded.",
          ],
        },
        {
          subTitle: "Biological Damage",
          bullets: [
            "Radiation **kills cells**, so high doses damage living tissue.",
            "It can **mutate** cells, which may develop into **cancer**.",
            "**Gamma** penetrates deep, risking whole-body and internal harm.",
            "**Alpha** is most dangerous when it enters the body.",
          ],
        },
        {
          subTitle: "The Three Safety Rules",
          bullets: [
            "**Reduce time**: spend as little time near a source as possible.",
            "**Increase distance**: stand far away and use long-handled tools.",
            "**Use shielding**: store and handle sources in lead-lined containers.",
            "Move sources with tongs and never aim one at anyone.",
          ],
        },
      ],
      examinerTips: [
        "For each use name the radiation type, its ionising or penetrating property and the half-life.",
        "Explain the smoke alarm by alpha's strong ionisation, long half-life and poor penetration.",
        "Give the three rules as time, distance and shielding in those exact words.",
        "State cell death, mutation and cancer as the three harms of radiation.",
      ],
      commonMistakes: [
        "Choosing gamma for a smoke alarm, when alpha's ionising power is required.",
        "Using a short half-life in a smoke alarm, which would need constant replacing.",
        "Saying alpha is the most dangerous outside the body, when gamma is.",
        "Handling a source directly instead of with tongs and shielding.",
      ],
      recap: [
        "Explain why an alpha source with a long half-life is used in a smoke alarm. [3]",
        "State why gamma radiation is used to sterilise surgical equipment. [2]",
        "Describe three ways ionising radiation can damage living tissue. [3]",
        "State the three rules that reduce a person's exposure to radiation. [3]",
      ],
    },
  ],
};

export const PHYSICS_CHAPTER_5: Chapter = chapterFive;
