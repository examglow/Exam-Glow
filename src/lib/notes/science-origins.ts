import type { Chapter } from "./types";

const IMG = "/notes/origins";

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

const alchemyArt = artPanel([
  {
    src: "origins-jabir-alchemy-workshop.webp",
    alt: "A clay alembic still set in a glowing brick furnace on a wooden bench beside two flasks of coloured liquid",
    caption: "Jabir's workshop: the elixir failed, the equipment stayed",
  },
]);

const aristotleArt = artPanel([
  {
    src: "origins-aristotle-seaside-study.webp",
    alt: "A bearded scholar in a cream toga kneeling beside a basket of sea creatures, holding a squid and a blank scroll",
    caption: "Aristotle with the lagoon catch: about 500 species named",
  },
]);

const lavoisierArt = artPanel([
  {
    src: "origins-lavoisier-balance.webp",
    alt: "An eighteenth-century scientist weighing a sealed flask on a brass balance while a woman records the reading",
    caption: "Lavoisier and Marie-Anne: weigh the sealed flask",
  },
]);

const microscopeArt = artPanel([
  {
    src: "origins-hooke-cork-microscope.webp",
    alt: "A brass seventeenth-century compound microscope with a candle lamp and a thin sliver of cork on the stage",
    caption: "Hooke's cork: dead walls, and the word cells",
  },
  {
    src: "origins-leeuwenhoek-droplet.webp",
    alt: "A small hand-held single-lens microscope over a droplet of pond water with tiny cartoon microbes inside",
    caption: "Leeuwenhoek's drop: animalcules in the 1670s",
  },
]);

const mendeleevArt = artPanel([
  {
    src: "origins-mendeleev-cards.webp",
    alt: "A bearded scientist laying blank square cards into rows and columns on a table, with three gaps left open",
    caption: "Mendeleev's cards, and the gaps left on purpose",
  },
]);

const darwinArt = artPanel([
  {
    src: "origins-darwin-finch-shore.webp",
    alt: "A Victorian naturalist crouching on a rocky shore with a blank notebook beside a small finch, a ship on the sea behind",
    caption: "Darwin on the shore: Beagle birds and a twenty-year doubt",
  },
]);

const helixArt = artPanel([
  {
    src: "origins-mendel-pea-garden.webp",
    alt: "A monk in a black robe kneeling among tall pea plants, holding one pod of round peas and one of wrinkled peas",
    caption: "Mendel's peas: seven traits, whole-number ratios",
  },
  {
    src: "origins-dna-double-helix.webp",
    alt: "A pastel DNA double helix model standing beside a dark X-ray plate showing a bright X-shaped diffraction pattern",
    caption: "Franklin's X, and the 1953 double helix",
  },
]);

// One closing chapter, shared by both subjects: the people behind the syllabus.
const origins: Omit<Chapter, "number"> = {
  title: "The Story Behind the Syllabus",
  intro: `Every chapter in this app is somebody's unfinished argument.

Chemistry and biology were not invented in one afternoon. They were built, one stubborn person at a time.

This closing chapter hands you the names, the tools and the odd mistakes, so the syllabus starts to read like a story.

Read it once for pleasure, then use the quick checks at the end of each section.`,
  subheadings: [
    {
      title: "Nobody Invented These Subjects",
      body: `### Two Roots, One Tree

Chemistry descends from **alchemy**, the medieval hunt for an elixir and for gold. Both quests failed.

The workshops did not. Alchemists built the furnace, the still and the flask, and they wrote down what they tried.

**Jabir ibn Hayyan**, an eighth-century alchemist often called the father of chemistry, pushed hard for careful experiment. Distillation, evaporation and crystallisation all matured in that tradition.

The word chemistry itself descends from al-kimiya, the Arabic name for the craft.

### Biology Starts with Curiosity

Biology starts earlier and closer to home: watching animals. The Greeks asked what lives where, and why a body suits its way of life.

So there is no single founder for either subject. There is a long queue of people who each fixed one piece.`,
      figure: alchemyArt,
      groups: [
        {
          subTitle: "What alchemy actually left behind",
          bullets: [
            "Furnace, still, flask and tripod: the lab hardware is alchemist hardware.",
            "Distillation, sublimation and crystallisation reach your syllabus from the same workshops.",
            "A habit of writing down failures, which is what turns secret recipes into science.",
            "The sulfur-mercury theory of metals: wrong for centuries, but genuinely testable.",
          ],
        },
      ],
      examinerTips: [
        "This chapter is background, not syllabus content. No IGCSE paper asks who founded chemistry.",
        "The names that do earn marks are Darwin and Wallace, in the biology evolution question.",
        "Use the history to hold the definitions: conservation of mass is Lavoisier's balance, in one picture.",
        "Retell this chapter to a friend in five minutes and the vocabulary sticks for free.",
      ],
      commonMistakes: [
        "Calling alchemy pure nonsense; it supplied the apparatus and the separations you still draw.",
        "Naming Newton or Einstein as a founder of either subject. Neither belongs in this story.",
        "Claiming one person invented chemistry. It was a queue, not a hero.",
      ],
      recap: [
        "Which craft does chemistry descend from, and what was that craft hunting for?",
        "Name the eighth-century alchemist behind careful experiment, and three processes that matured in his tradition.",
        "Where does the word chemistry come from?",
      ],
    },
    {
      title: "Aristotle Starts the Count",
      body: `### The First Field Biologist

**Aristotle (384-322 BC)** spent years on the shore of the Lesvos lagoon with a basket of sea creatures.

He named roughly **500 species** of bird, mammal, fish and insect, and described the anatomy of more than thirty animals.

He also split animals into those with blood and those without. That division still maps loosely onto vertebrates and invertebrates.

### A Method, and a Bad Call or Two

His rule was simple: look first, then explain. He thought the heart held intelligence and the brain merely cooled the blood.

He was also tutor to Alexander the Great, which is the one fact in this chapter with no marking scheme.`,
      figure: aristotleArt,
      groups: [
        {
          subTitle: "What he got right, and what he did not",
          bullets: [
            "**Observation before theory:** describe the animal, then decide what it means.",
            "**Nature does nothing in vain:** parts suit the way an animal lives, an early idea of adaptation.",
            "Wrong: the brain as a blood cooler, and some animals appearing from mud.",
            "Still standing: his accounts of octopus, squid and eel anatomy were reused for centuries.",
          ],
        },
      ],
      examinerTips: [
        "Biology opens by asking how living things are classified; Aristotle is the first serious attempt.",
        "Never present a historical scientist as simply wrong. Say what evidence he lacked.",
        "Use and disuse belongs to Lamarck, two thousand years later. Do not attach it to Aristotle.",
      ],
      commonMistakes: [
        "Saying Aristotle discovered cells. The microscope was not built yet.",
        "Treating his classification as modern taxonomy. Linnaeus fixed naming in 1735.",
        "Assuming ancient biology was only philosophy. Much of it was careful dissection.",
      ],
      recap: [
        "Give two habits of Aristotle's that a modern biologist still uses.",
        "What did he wrongly think the brain was for?",
      ],
    },
    {
      title: "Lavoisier Puts Chemistry on a Scale",
      body: `### Weigh Everything, Including the Gas

**Antoine-Laurent Lavoisier (1743-1794)** is the name usually given to the father of modern chemistry.

His move was almost boring: weigh the sealed flask before and after the reaction. Nothing escaped, so the mass never changed.

That single habit turned **conservation of mass** from a guess into a measurement, and it is why your equations must balance.

### Names Instead of Mysteries

He defeated **phlogiston**, the invented fire-substance that explained burning at the time, by showing that burning adds something from the air.

He recognised and named **oxygen** in 1778 and **hydrogen** in 1783, then rewrote the whole subject in plain names in his 1789 textbook.

His wife **Marie-Anne Paulze** translated the key papers, engraved the plates and kept the lab records. She was a colleague, not a helper.

The story ends badly: he was executed in 1794, at fifty-one.`,
      figure: lavoisierArt,
      groups: [
        {
          subTitle: "The chemical revolution in three moves",
          bullets: [
            "Weigh the closed system, not the open flame.",
            "Define an element as a substance you cannot decompose further, still the working school definition.",
            "Rename the substances so each name says what is inside it.",
            "Publish a textbook that makes the old vocabulary unusable.",
          ],
        },
      ],
      examinerTips: [
        "Conservation of mass is the reason symbols are balanced; that link earns marks in stoichiometry.",
        "For a why-did-the-mass-change question, decide first whether a gas escaped. The sealed flask is the trick.",
        "No balancing question asks his name, so spend the revision time on the method.",
      ],
      commonMistakes: [
        "Saying mass is created when a metal burns. It gains oxygen, so the mass rises.",
        "Confusing Priestley and Scheele, who isolated the gas first, with Lavoisier, who explained what it was.",
        "Giving Lavoisier the electron. That is a much later century.",
      ],
      recap: [
        "State the law the sealed-flask weighing established, and one place it earns marks in this course.",
        "What was phlogiston, and how did a balance defeat it?",
      ],
    },
    {
      title: "The Microscope Opens a Second World",
      body: `### Cork Boxes, Then Living Things

**Robert Hooke** published Micrographia in 1665, with a fine engraving of a cork slice.

He saw a honeycomb of little boxes and called them **cells**. He was looking at dead cell walls, and nothing more.

**Antonie van Leeuwenhoek**, a Delft draper with no university and no Latin, ground tiny single lenses far better than anyone else's.

Through them he watched **animalcules** swimming in a drop of pond water, and wrote to the Royal Society about it.

### The Idea Took a Century and a Half

Not until 1838-39 did **Schleiden and Schwann** argue that plants and animals are both made of cells.

**Rudolf Virchow** added the closing line in 1855: every cell comes from another cell.

That is cell theory, and it is why the biology course starts with a microscope.`,
      figure: microscopeArt,
      groups: [
        {
          subTitle: "Who saw what, and when",
          bullets: [
            "1665 - Hooke names cells in dead cork.",
            "1670s - Leeuwenhoek reports the first bacteria and protozoa.",
            "1838-39 - Schleiden and Schwann propose cell theory.",
            "1855 - Virchow: cells only ever come from other cells.",
          ],
        },
      ],
      examinerTips: [
        "Cell theory is examinable; the story behind it is not, but the dates make it memorable.",
        "Say Hooke saw cell walls. Calling them living cells costs the mark.",
        "For a microscope question, know coarse and fine focus before you know any history.",
      ],
      commonMistakes: [
        "Crediting Leeuwenhoek with inventing the compound microscope. His best instruments were single-lens.",
        "Saying Hooke found the nucleus or the bacterium.",
        "Writing that cells were only seen after electron microscopes. Light lenses did it in 1665.",
      ],
      recap: [
        "Who coined the word cell, and what were they actually looking at?",
        "Name the three people behind cell theory and say what each added.",
      ],
    },
    {
      title: "Mendeleev Leaves Room for the Missing",
      body: `### Cards on a Table

By 1869 about **sixty-three elements** were known, and several chemists had noticed they repeat in patterns.

**Dmitri Mendeleev** wrote each element on a card and laid the cards out by atomic weight and by matching properties.

John Newlands had arranged chemical octaves in Britain, and Lothar Meyer was close in Germany at the same time.

### The Move That Won

Mendeleev left **blank gaps** for elements nobody had found, then predicted their weights and properties anyway.

**Gallium**, discovered in 1875 by Lecoq de Boisbaudran, filled the gap called eka-aluminium almost number for number.

That prediction is what makes the table science rather than filing. A filing cabinet never predicts anything.

**Henry Moseley** sorted the awkward pairs in 1913, using proton number instead of weight.`,
      figure: mendeleevArt,
      groups: [
        {
          subTitle: "What the table gives you",
          bullets: [
            "Groups share outer-electron count, so they share chemistry.",
            "Periods run across a row as the next shell fills.",
            "A gap is information, not untidiness.",
            "Proton number, not mass, is the modern sort key.",
          ],
        },
      ],
      examinerTips: [
        "The syllabus asks what the table predicts, never who built it. Spend the marks on groups and periods.",
        "Ask why argon sits before potassium and the answer is proton number, which is Moseley's fix.",
        "To predict an unknown element, read down its group, not along its period.",
      ],
      commonMistakes: [
        "Sorting by relative atomic mass in a modern answer; the table runs on proton number.",
        "Claiming Mendeleev found the elements he predicted. He found none of them.",
        "Forgetting the noble gases had no gap at all, which is why they surprised everyone.",
      ],
      recap: [
        "What did Mendeleev leave in his table, and what did one of those gaps become in 1875?",
        "State the modern sort key and name the scientist who supplied it.",
      ],
    },
    {
      title: "Darwin and Wallace Race to the Same Idea",
      body: `### Two Notebooks, One Idea

**Charles Darwin** sailed on the Beagle from 1831 to 1836 and came back with birds, shells and a doubt.

He then spent twenty years gathering evidence before he wrote any of it up.

In 1858 **Alfred Russel Wallace**, ill in bed in the Malay Archipelago, worked out the same explanation and posted it to Darwin.

Both papers were read at the Linnean Society on **1 July 1858**, and On the Origin of Species followed in 1859.

### The Argument in Three Lines

Variation exists within a population. More offspring are born than can survive.

So the variants that suit their world better leave more young, and the population drifts that way over generations.

**Lamarck** had tried earlier with use and disuse, and inherited habits. The mechanism was wrong; the instinct was not.`,
      figure: darwinArt,
      groups: [
        {
          subTitle: "The idea, in exam order",
          bullets: [
            "**Variation:** individuals of a species differ from each other.",
            "**Competition:** more are born than the environment can carry.",
            "**Selection:** better-fitted survivors leave more offspring.",
            "**Time:** the advantage builds up over many generations.",
          ],
        },
      ],
      examinerTips: [
        "This is the one story in the chapter with marks attached: evolution by natural selection is examinable.",
        "Never write that an animal changed because it needed to. That is Lamarck, and it scores nothing.",
        "Antibiotic resistance is the modern version. Name the four steps in order and the question is full.",
      ],
      commonMistakes: [
        "Writing survival of the fittest and stopping. Fittest means best fitted to that environment, not strongest.",
        "Saying individuals evolve. Populations evolve; an individual never changes its own genes.",
        "Giving Darwin credit for inheritance. Mendel's paper sat unread on the shelf the whole time.",
      ],
      recap: [
        "Summarise natural selection in four linked sentences.",
        "Who sent Darwin the essay in 1858, and where were both papers read?",
      ],
    },
    {
      title: "From Peas to the Double Helix",
      body: `### Mendel Counts What Everyone Else Described

**Gregor Mendel**, an Augustinian monk in Brno, bred pea plants from 1856 to 1863 and counted every trait.

He tracked seven clear-cut features, such as round or wrinkled seed, and found whole-number ratios in the offspring.

That counting is why we still say **dominant** and **recessive**. He published in 1866, and almost nobody read it.

His work was rediscovered around **1900** by de Vries, Correns and Tschermak, separately and in the same year.

### Then Somebody Found the Molecule

DNA had already been isolated in 1869, under the name nuclein.

In 1953 **Watson and Crick** built the double-helix model using **Rosalind Franklin's** X-ray diffraction images, with Wilkins's data alongside.

The structure explained copying at once: two chains, each one a template for a new partner.

**Marie Curie** still holds the only pair of Nobel prizes in two different sciences, Physics in 1903 and Chemistry in 1911.`,
      figure: helixArt,
      groups: [
        {
          subTitle: "The inheritance timeline",
          bullets: [
            "1866 - Mendel's ratios published, and ignored.",
            "1900 - the rediscovery, by three separate workers.",
            "1909 - Johannsen coins the word gene.",
            "1953 - the double helix, and inheritance becomes chemistry.",
          ],
        },
      ],
      examinerTips: [
        "Genetics is examinable in both subjects; the vocabulary Mendel invented is where the marks sit.",
        "Draw the 3:1 square every time. It carries method marks even when a count slips.",
        "For DNA structure, name the sugar-phosphate backbone and the base pairs, not the history.",
      ],
      commonMistakes: [
        "Saying Watson and Crick discovered DNA. It had been isolated 84 years earlier.",
        "Leaving Franklin out of the account; her diffraction data made the model possible.",
        "Calling a 3:1 ratio proof of dominance without stating the parent genotypes first.",
      ],
      recap: [
        "What did Mendel count, and which two words came out of it?",
        "Whose X-ray evidence made the 1953 model possible, and what does the structure explain about copying?",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_13: Chapter = { number: 13, ...origins };

export const BIOLOGY_CHAPTER_22: Chapter = { number: 22, ...origins };
