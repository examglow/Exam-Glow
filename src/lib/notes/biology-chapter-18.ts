import type { Chapter } from "./types";
import { svgDiagram, box, tileRow, labelledRows } from "./diagram-kit";

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

const selectionArt = artPanel([
  {
    src: "ch18-giraffe-selection.webp",
    alt: "Illustration of giraffes of different neck lengths reaching for leaves",
    caption: "Competition for food favours the longer neck",
  },
  {
    src: "ch18-resistant-bacteria.webp",
    alt: "Illustration of a bacterial colony where some cells survive an antibiotic",
    caption: "Resistance spreading through a bacterial colony",
  },
]);

const breedingArt = artPanel([
  {
    src: "ch18-selective-breeding-wheat.webp",
    alt: "A mixed wheat field, the two tallest plants set aside, then a uniform tall field",
    caption: "Four generations of selecting the tallest wheat",
  },
  {
    src: "ch18-dog-breeds.webp",
    alt: "Four very different dog breeds standing in a row",
    caption: "Artificial variation in dog breeds",
  },
]);

/* ------------------------------------------------------------------ *
 * Diagrams
 * ------------------------------------------------------------------ */

const variationDiagram = svgDiagram(
  "Continuous versus discontinuous variation",
  `<text class="title" x="450" y="30" text-anchor="middle">Two shapes of distribution</text>
   <text class="label" x="235" y="62" text-anchor="middle">Continuous</text>
   <text class="label" x="665" y="62" text-anchor="middle">Discontinuous</text>
   <path class="line" d="M70 300H400"/>
   <path class="line" d="M500 300H860"/>
   <path class="blue" style="stroke-width:4" d="M80 300C170 300 185 135 240 135C295 135 310 300 400 300"/>
   <rect class="pink" x="520" y="240" width="56" height="60" rx="6"/>
   <rect class="pink" x="596" y="180" width="56" height="120" rx="6"/>
   <rect class="pink" x="672" y="150" width="56" height="150" rx="6"/>
   <rect class="pink" x="748" y="225" width="56" height="75" rx="6"/>
   <text class="small" x="235" y="330" text-anchor="middle">one smooth bell-shaped curve</text>
   <text class="small" x="665" y="330" text-anchor="middle">separate bars, no intermediates</text>
   <text class="small" x="548" y="318" text-anchor="middle">A</text>
   <text class="small" x="624" y="318" text-anchor="middle">B</text>
   <text class="small" x="700" y="318" text-anchor="middle">AB</text>
   <text class="small" x="776" y="318" text-anchor="middle">O</text>`,
  900,
  356,
);

const causesDiagram = svgDiagram(
  "Sources of genetic variation",
  `<text class="title" x="450" y="30" text-anchor="middle">Three processes create the differences within a species</text>
   ${box(30, 60, 250, 74, "Mutation", "pink")}
   ${box(325, 60, 250, 74, "Meiosis", "blue")}
   ${box(620, 60, 250, 74, "Fertilisation", "gold")}
   ${tileRow(
     [
       {
         title: "New alleles",
         body: "A change in the\nbase sequence of\nDNA — the only\nsource of a brand-\nnew allele",
         cls: "pink",
       },
       {
         title: "New combinations",
         body: "Crossing over\nswaps alleles\nbetween\nhomologous\nchromosomes",
         cls: "blue",
       },
       {
         title: "New individuals",
         body: "Independent\nassortment plus\nrandom fusion of\ngametes shuffles\nthe alleles again",
         cls: "gold",
       },
     ],
     152,
     { x: 30, w: 840, h: 156, gap: 14 },
   )}
   <text class="accent" x="450" y="330" text-anchor="middle">Result: genetically unique offspring, the raw material for selection</text>`,
  900,
  352,
);

const speciationDiagram = svgDiagram(
  "Speciation by geographic isolation",
  `<text class="title" x="450" y="30" text-anchor="middle">One species becomes two</text>
   ${box(30, 60, 168, 62, "1. Split apart", "panel")}
   ${box(213, 60, 168, 62, "2. Isolation", "blue")}
   ${box(396, 60, 168, 62, "3. Selection", "gold")}
   ${box(579, 60, 168, 62, "4. Divergence", "purple")}
   ${box(762, 60, 108, 62, "5. Species", "main")}
   <path class="arrow" d="M199 91h13m169 0h13m169 0h13m169 0h13"/>
   ${labelledRows(
     [
       ["Isolation", "no gene flow between groups"],
       ["Selection", "each side faces its own pressures"],
       ["Divergence", "allele frequencies drift apart"],
       ["Barrier", "interbreeding becomes impossible"],
     ],
     60,
     178,
     40,
   )}
   <text class="small" x="450" y="322" text-anchor="middle">Reproductive isolation is complete when fertile offspring can no longer be formed.</text>`,
  900,
  348,
);

/* ------------------------------------------------------------------ *
 * Chapter
 * ------------------------------------------------------------------ */

const chapterEighteen: Chapter = {
  number: 18,
  title: "Variation and Selection",
  intro: `Variation is the difference between individuals of the same species, and without it there would be nothing for selection to act on.\n\nThis chapter sorts variation into continuous and discontinuous, traces its genetic causes to mutation and meiosis, then follows natural selection through to antibiotic resistance, selective breeding and the formation of new species.`,
  subheadings: [
    {
      title: "Continuous and Discontinuous Variation",
      body: `### Two kinds of difference\n**Continuous variation** shows a full range of intermediate values and is usually controlled by several genes plus the environment — height, mass, hand span.\n\n**Discontinuous variation** falls into distinct categories with no intermediates and is controlled by one or a few genes with little environmental influence — blood group, tongue-rolling, presence of a webbed toe.\n\n### How the data is presented\n\nContinuous data is grouped into intervals on a histogram, and a large sample produces the bell-shaped curve.\n\nDiscontinuous data is shown as a bar chart with gaps, because nothing lies between the categories.\n\n### The genetic explanation\n\nContinuous characters are **polygenic** — several genes each add a small effect, and the environment spreads the results further.\n\nDiscontinuous characters depend on one gene with clear-cut alleles, so the environment hardly shifts the outcome.\n\n### Choosing examples safely\nFor discontinuous examples, use ABO blood group, tongue-rolling, sex or attached earlobes. For continuous examples, use height, mass, hand span or chest circumference.\n\n${variationDiagram}`,
      groups: [
        {
          bullets: [
            "**Continuous:** measurable on a scale; plotted as a histogram that is often bell-shaped; controlled by many genes (polygenic) and affected by the environment.",
            "**Discontinuous:** sorted into named categories; plotted as a bar chart with gaps between bars; controlled by a single gene and largely unaffected by the environment.",
            "On a graph of continuous variation, most individuals cluster near the **mean** and few lie at the extremes.",
            "**Same species:** variation counts only between individuals of one species — differences between species are not the topic of this chapter.",
          ],
        },
        {
          subTitle: "Deciding which is which",
          bullets: [
            "If you can rank the whole population along a scale, it is continuous.",
            "If a person either has the feature or does not, it is discontinuous.",
            "**No middle value:** if nothing can lie between the categories, the variation is discontinuous.",
            "**Measured or named:** if only a number describes it, treat it as continuous.",
          ],
        },
        {
          subTitle: "Graph language",
          bullets: [
            "**Frequency:** the number of individuals in each category or interval.",
            "**Mean:** the middle of a continuous distribution, where most individuals cluster.",
            "**Bell-shaped curve:** the classic shape produced by continuous data from a large sample.",
            "**Gaps between bars:** the signature that tells examiners the data is discontinuous.",
            "**Polygenic:** control of one character by two or more genes, producing a continuous range.",
          ],
        },
      ],
      examinerTips: [
        "Name the graph shape: continuous gives a bell-shaped curve, discontinuous gives separate bars.",
        "Mention the genetic control as well as the data shape — continuous is polygenic, discontinuous is typically single-gene.",
        "For 'compare' questions, place the two types side by side: graph shape, genetic control, environmental effect.",
        "Use the exact phrase 'no intermediates' for discontinuous variation; mark schemes look for it.",
      ],
      commonMistakes: [
        "Calling eye colour discontinuous when the question presents it as a set of categories rather than a measured scale — answer with the categories given.",
        "Confusing a normal distribution with directional selection; one describes the spread, the other describes a shift over generations.",
        "Drawing a joined line graph for discontinuous categories; separate bars are required.",
        "Giving skin colour as a tidy discontinuous example; as a measured pigment it behaves continuously, so choose a safer case.",
      ],
      recap: [
        "Define variation and give two examples of continuous variation in humans. [3]",
        "Explain how the graphs of continuous and discontinuous variation differ. [3]",
        "State whether adult height is continuous or discontinuous and give a reason. [2]",
        "Give two examples of discontinuous variation in humans and explain why each is discontinuous. [4]",
      ],
    },
    {
      title: "Causes of Genetic Variation",
      body: `### Where new combinations come from\nMutations **create** new alleles; meiosis and fertilisation only **reshuffle** the alleles already present. All three together make each offspring genetically unique.\n\n### Mutation is the only new source\n\nA mutation changes the base sequence of a gene, and if it changes the coded protein it can change the phenotype.\n\nRecombination in meiosis cannot produce an allele that has never existed; it can only rearrange the ones already in the population.\n\n### Why variation matters\nWithout inherited variation there is nothing for natural selection to act on. A population with no genetic variation cannot adapt when its environment changes.\n\n${causesDiagram}`,
      groups: [
        {
          subTitle: "Mutation",
          bullets: [
            "**Mutation:** a change in the base sequence of DNA. It can alter the coded protein and so change the phenotype.",
            "Mutations can be **neutral** (most common), harmful, or occasionally beneficial in a given environment.",
            "Only mutations in cells that give rise to gametes can be passed on.",
            "**Mutagens:** agents such as some chemicals and radiation that raise the mutation rate.",
          ],
        },
        {
          subTitle: "Meiosis",
          bullets: [
            "**Crossing over:** homologous chromosomes exchange sections of chromatid, mixing maternal and paternal alleles onto one chromosome.",
            "**Independent assortment:** homologous pairs line up randomly, so each gamete receives a random mix of maternal and paternal chromosomes.",
            "**Random fertilisation:** any one of a huge number of sperm can fuse with any one egg.",
          ],
        },
        {
          subTitle: "Fertilisation and the numbers",
          bullets: [
            "**Huge mixing:** independent assortment alone lets one human produce over eight million chromosomally different gametes.",
            "**Haploid first:** gametes carry one chromosome of each pair, so fertilisation restores the pairs in a brand-new mix.",
            "**Restored diploid:** the zygote's chromosomes are half maternal, half paternal.",
            "**Genetically unique:** no two offspring, except identical twins, share the same combination of alleles.",
            "**New individual:** fertilisation combines two unique gametes, making an organism unlike either parent.",
          ],
        },
      ],
      examinerTips: [
        "Be precise about which meiotic event causes which kind of variation: crossing over shuffles alleles within a chromosome, independent assortment shuffles whole chromosomes.",
        "Use the word 'randomly' or 'independently' when describing the orientation of homologous pairs.",
        "Keep the three processes separate; do not describe fertilisation as part of meiosis.",
        "For 'how does meiosis cause variation', name crossing over and independent assortment separately, each with its own explanatory sentence.",
      ],
      commonMistakes: [
        "Saying meiosis produces new alleles — it only recombines existing ones; mutation is the only new-allele source.",
        "Describing crossing over as happening between non-homologous chromosomes.",
        "Claiming mutations occur because an organism needs them; they arise at random and selection decides later.",
        "Attributing all variation to the environment; the question on genetic causes wants meiosis and mutation only.",
      ],
      recap: [
        "State how mutation differs from meiosis as a source of variation. [2]",
        "Explain how crossing over during meiosis increases genetic variation. [3]",
        "Describe two ways in which meiosis produces genetically different gametes. [4]",
        "Explain why mutation is described as the only source of new alleles. [2]",
      ],
    },
    {
      title: "Natural Selection",
      body: `### The selection sequence\n\nNatural selection is the non-random survival and reproduction of individuals whose alleles suit the environment.\n\nIt needs variation, a selection pressure, and time — and it acts on the **phenotype**, while the **genotype** is what is passed on.\n\n### Selection pressure defined\n\nA **selection pressure** is any feature of the environment that affects who survives to breed — predators, climate, food, disease or light.\n\nIt decides which phenotypes are favoured and which are removed.\n\n### Adaptation is the outcome\n\nWhen a favourable allele rises in frequency over generations, the population becomes **adapted** to its environment.\n\nAn adaptation is an inherited feature that improves survival and reproduction, not something acquired during one lifetime.\n\n### Nothing changes inside one animal\nSelection sorts the variation that already exists between individuals. No individual changes its alleles because it needs to; the shift happens across generations in the population.`,
      figure: selectionArt,
      groups: [
        {
          subTitle: "Steps to write in an answer",
          bullets: [
            "Within a population there is **genetic variation** for the character.",
            "A **selection pressure** (predators, climate, food, disease, light) makes survival difficult.",
            "Individuals with a **favourable allele** survive and reproduce more successfully — they have a **survival advantage**.",
            "Those individuals pass the favourable allele to more of their offspring.",
            "Over many generations the **allele frequency** of the favourable form rises, so the population adapts. This is **evolution**.",
          ],
        },
        {
          subTitle: "The two classic examples",
          bullets: [
            "**Peppered moth:** before industrial soot, pale moths were camouflaged on lichen-covered bark and dark moths were eaten; on soot-blackened bark the advantage reversed and the dark form became common.",
            "**Antibiotic resistance** is the same logic in bacteria — see the next section.",
            "**Giraffe necks:** individuals with longer forelimbs and necks reached more leaves in a lean season, survived and bred more often.",
          ],
        },
        {
          subTitle: "Words that score",
          bullets: [
            "**Selection pressure:** the environmental factor that makes survival harder for some phenotypes.",
            "**Survival advantage:** the better chance of living and breeding that a favourable allele gives.",
            "**Allele frequency:** how common an allele is among all copies of that gene in the population.",
            "**Adaptation:** an inherited feature that increases survival and reproduction in one environment.",
            "**Evolution:** a change in the inherited characteristics of a population over generations.",
          ],
        },
      ],
      examinerTips: [
        "Never say 'the animal wanted to change' or 'it developed a darker colour during its life'. Selection acts on existing variation between individuals, not within one lifetime.",
        "Include the phrase 'survive and reproduce more often' — survival alone is not enough, because the mark is about passing on alleles.",
        "Link the end of the process to the population: 'so the favourable allele becomes more common in the gene pool'.",
        "Use comparative wording — 'more likely to survive', 'greater chance of breeding' — because absolute claims are wrong.",
      ],
      commonMistakes: [
        "Claiming individuals evolve. Populations evolve over generations; an individual's genotype is fixed.",
        "Confusing natural selection with 'survival of the strongest' — it is survival of the best-fitted to that particular environment.",
        "Saying a mutation happened because it was needed. Mutations arise at random; selection then filters them.",
        "Writing that an animal 'decided to adapt'; natural selection has no intention and no foresight.",
      ],
      recap: [
        "Describe how natural selection leads to adaptation in a population. [5]",
        "Explain the peppered moth example using the idea of camouflage and selection. [4]",
        "State why natural selection acts on phenotype but causes change in genotype frequency. [2]",
        "Explain how the advantage of dark-coloured moths changed when tree bark was first blackened by soot and later cleaned up. [4]",
      ],
    },
    {
      title: "Antibiotic Resistance",
      body: `### Evolution you can watch\nAntibiotics do not create resistance — they select for it. A random mutation in a small number of bacterial cells may make that cell insensitive to a drug.\n\nThose few survive a course of antibiotic and multiply, and because bacteria divide quickly the shift can show itself within days.\n\n### Resistance is not a response\nBacteria do not build up immunity as they meet a drug. A resistant cell is born resistant through mutation, and the antibiotic simply removes every non-resistant competitor around it.\n\n### Why overuse speeds it up\n\nEvery avoidable course of antibiotics is another round of selection on bacterial populations in patients and in farming.\n\nStrains such as MRSA have accumulated resistance to several drugs at once and are difficult to treat.`,
      groups: [
        {
          subTitle: "The mechanism",
          bullets: [
            "In a bacterial population a **random mutation** may code for an enzyme that breaks down the antibiotic, or alter the drug's target site.",
            "When the antibiotic is applied, the **non-resistant bacteria are killed** and the mutant survivors are not.",
            "The survivors **reproduce rapidly**, so the population soon consists mostly of resistant cells.",
            "Genes for resistance can also move **between bacteria**, which spreads the trait faster than mutation alone would.",
            "Repeated or incomplete courses of antibiotics strengthen the selection, which is why resistance rises with overuse.",
          ],
        },
        {
          subTitle: "Reducing the spread",
          bullets: [
            "Finish the prescribed course so that no partially resistant survivors are left to reproduce.",
            "Do not use antibiotics for viral infections, where they have no useful target.",
            "Restrict routine use in livestock farming, and develop newer antibiotics or alternatives.",
            "Use hand-washing and hygiene to limit transmission, so fewer infections need treating.",
            "**Slow new drugs:** resistance develops faster than new antibiotics can be created, so conserving existing drugs matters.",
          ],
        },
        {
          subTitle: "Bacterial detail",
          bullets: [
            "**Plasmid:** a small ring of DNA in bacteria that can carry resistance genes.",
            "**Gene transfer:** plasmids can pass between bacteria, spreading resistance through the population.",
            "**Generation time:** some bacteria divide about every 20 minutes, so the resistant line grows fast.",
            "**MRSA:** a bacterium resistant to several antibiotics at once, built up by repeated rounds of selection.",
          ],
        },
      ],
      examinerTips: [
        "Sequence the answer: mutation first, then selection by the antibiotic, then reproduction of survivors. Examiners look for 'random mutation' before treatment.",
        "State that resistance is **genetic** and already present in a few cells before the drug is used.",
        "Name the selection pressure explicitly — the antibiotic itself is what kills the non-resistant bacteria.",
        "Write 'resistant', never 'immune'; bacteria carry resistance alleles, and the wrong word can cost the mark.",
      ],
      commonMistakes: [
        "Saying the antibiotic caused the bacteria to mutate in order to resist it.",
        "Saying bacteria 'become immune' one by one during a single infection rather than a population shifting over generations.",
        "Treating antibiotic resistance as an acquired characteristic — it is inherited in the bacterial DNA.",
        "Saying the patient became resistant to the antibiotic; it is the bacterial population that becomes resistant.",
      ],
      recap: [
        "Explain, using natural selection, how a population of bacteria becomes resistant to an antibiotic. [5]",
        "State why it is important to complete a course of antibiotics. [2]",
        "Give two measures that slow the spread of antibiotic-resistant bacteria. [2]",
        "Explain how plasmids help spread antibiotic resistance through a bacterial population. [3]",
      ],
    },
    {
      title: "Selective Breeding",
      figure: breedingArt,
      body: `### Natural selection with a human selector\n\n**Selective (artificial) breeding** is natural selection directed by people: breeders choose which individuals reproduce so that a useful allele becomes more common.\n\nThe selection pressure is human preference rather than survival.\n\n### The same logic, a different selector\n\nEvery element of natural selection has a parallel here: the variation is inherited, and the individuals with favoured alleles are the ones that breed.\n\nOnly the choosing agent changes — from the environment to the human.\n\n### Faster, but narrower\n\nHuman choice is deliberate, so useful alleles rise quickly, far faster than most natural shifts.\n\nThe price is a smaller gene pool, because every discarded individual takes its alleles out of the population.\n\n### Breeding is not engineering\nSelective breeding still works by choosing parents with useful alleles. Genetic engineering, its modern cousin, alters the genotype directly instead of waiting on the variation already present.`,
      groups: [
        {
          subTitle: "The standard procedure",
          bullets: [
            "From a variable population, **select the individuals** that show the desired characteristic most strongly.",
            "**Breed** those selected individuals from one another.",
            "**Select the best** among their offspring and repeat the cycle over several generations.",
            "The result is a strain or breed with a high frequency of the favourable allele.",
          ],
        },
        {
          subTitle: "Examples",
          bullets: [
            "**Plants:** high crop yield, disease resistance, larger fruit, drought tolerance.",
            "**Animals:** more milk in cattle, faster growth, fine wool, temperament in dogs.",
            "Inbreeding within a selected line concentrates the desired alleles but also raises the chance of **harmful recessive** disorders and reduces the gene pool.",
          ],
        },
        {
          subTitle: "Pros and cons",
          bullets: [
            "**Faster than natural selection:** the breeder chooses deliberately, so the wanted allele rises quickly.",
            "**Predictable product:** uniform crops and livestock are easier to sell, feed and manage.",
            "**Small gene pool:** repeated discarding removes alleles, so the breed copes less well with new diseases or climate change.",
            "**Inbreeding depression:** health problems accumulate when only a few individuals are used as parents.",
            "**Welfare cost:** features prized by humans, such as extreme body shapes in dogs, can cause genuine suffering.",
          ],
        },
      ],
      examinerTips: [
        "Name the agent doing the selecting to separate artificial from natural selection.",
        "When giving advantages and disadvantages, pair the benefit (predictable quality) with the cost (narrow gene pool, health problems).",
        "Set out the method in order — select, breed, select offspring, repeat — because the marks follow the sequence.",
        "Keep 'selective breeding' and 'genetic engineering' apart in your wording; they are different techniques with different marks.",
      ],
      commonMistakes: [
        "Saying breeders create the desirable trait. They choose among variation that already exists.",
        "Ignoring that continued selection can fix unwanted recessive alleles alongside the wanted one.",
        "Calling a new breed a new species; dog breeds still interbreed, so they remain one species.",
        "Confusing selective breeding with genetic engineering; no DNA is inserted in conventional breeding.",
      ],
      recap: [
        "Describe the steps a farmer would take to breed a herd with higher milk yield. [4]",
        "State one difference between selective breeding and natural selection. [2]",
        "Give one disadvantage of inbreeding in a selected breed. [1]",
        "Give two examples of characteristics improved by selective breeding in crop plants. [2]",
      ],
    },
    {
      title: "Speciation",
      body: `### How new species form\nA **species** is a group that can interbreed to produce **fertile** offspring. **Speciation** is the process by which one species splits into two that can no longer do so.\n\nIt usually needs the population to be divided and then left to diverge, so the two halves stop sharing alleles.\n\n### The word that carries the marks\n**Gene flow** is the movement of alleles between populations through interbreeding. Speciation begins when gene flow stops and ends when even forced mating cannot produce fertile offspring.\n\n### Species is a test, not a look\nTwo groups that merely appear different are still one species if they can produce fertile young. The fertile-offspring test, not outward appearance, is what decides.\n\n${speciationDiagram}`,
      groups: [
        {
          subTitle: "Allopatric speciation, the syllabus version",
          bullets: [
            "A **geographic barrier** — a mountain range, a river, a stretch of sea, or a colonising group reaching an island — splits one population into two.",
            "**Gene flow stops:** the two groups can no longer interbreed, so alleles are no longer shared.",
            "Each group faces **different selection pressures**, so different alleles rise in frequency.",
            "Random events (a **founder effect** in a small group) and fresh **mutations** add further differences.",
            "Over many generations the gene pools diverge until mating no longer produces fertile offspring — **reproductive isolation** is complete and two species exist.",
          ],
        },
        {
          subTitle: "Isolating mechanisms",
          bullets: [
            "**Behavioural:** courtship or mating signals are no longer recognised.",
            "**Temporal:** breeding seasons or times of day no longer match.",
            "**Physical:** genital or floral structures no longer fit, or gametes fail to fuse.",
            "**Post-zygotic:** hybrids do not survive or are sterile, as with a mule.",
          ],
        },
        {
          subTitle: "Examples and evidence",
          bullets: [
            "**Darwin's finches:** island finch species differ in beak size, matching the food each species eats.",
            "**Founder effect:** a small colonising group carries only a sample of the mainland gene pool.",
            "**Mule:** the sterile horse-donkey hybrid shows horse and donkey are already separate species.",
            "**Test of completion:** if fertile offspring cannot be made, speciation has finished.",
          ],
        },
      ],
      examinerTips: [
        "Include all four marks: isolation, no gene flow, different selection, and the final reproductive barrier.",
        "Island examples reward you for naming the founder effect and the absence of interbreeding with the mainland.",
        "Use the fertile-offspring definition when stating that speciation has occurred.",
        "Work the long answer in time order and end at reproductive isolation; answers that stop at 'different environments' lose half the marks.",
      ],
      commonMistakes: [
        "Stopping at 'different environments' without closing the loop with reproductive isolation.",
        "Thinking a single mutant can create a new species; the change has to accumulate across generations and populations.",
        "Confusing adaptation (change within a species) with speciation (the split into separate species).",
        "Naming a hybrid such as a mule a new species; a species must be a fertile, interbreeding population.",
      ],
      recap: [
        "Explain how a population separated by a geographic barrier can give rise to two species. [6]",
        "Define species, using the idea of fertile offspring. [2]",
        "State why stopping gene flow is essential for speciation. [2]",
        "Give two isolating mechanisms that prevent interbreeding. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_18: Chapter = chapterEighteen;
