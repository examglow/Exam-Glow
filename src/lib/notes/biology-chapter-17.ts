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

const inheritanceArt = artPanel([
  {
    src: "ch17-dna-helix.webp",
    alt: "Illustration of a DNA double helix winding up into a chromosome",
    caption: "DNA coiled into a chromosome",
  },
  {
    src: "ch17-inheritance-cats.webp",
    alt: "Illustration of cats of different coat colours across a family tree",
    caption: "Coat colour passed down a cat family",
  },
]);

const sexChromosomeArt = artPanel([
  {
    src: "ch17-sex-chromosomes.webp",
    alt: "Four chromosome pairs, the last one made of a large and a small differently shaped member",
    caption: "The XX and XY chromosome pairs",
  },
]);

const divisionArt = artPanel([
  {
    src: "ch17-mitosis-meiosis.webp",
    alt: "One cell dividing into two identical cells beside one dividing twice into four halved cells",
    caption: "Mitosis against meiosis",
  },
]);

/* ------------------------------------------------------------------ *
 * Diagrams
 * ------------------------------------------------------------------ */

const chromosomeDiagram = svgDiagram(
  "Chromosome to allele",
  `<text class="title" x="450" y="32" text-anchor="middle">Chromosomes carry genes; each gene has allele versions</text>
   ${box(30, 56, 250, 60, "Chromosome", "blue")}
   ${box(325, 56, 250, 60, "Gene (locus)", "main")}
   ${box(620, 56, 250, 60, "Alleles", "gold")}
   <path class="arrow" d="M281 86h43m245 0h43"/>
   ${tileRow(
     [
       {
         title: "One DNA molecule",
         body: "Coiled around\nhistone proteins\nFound in the\nnucleus",
         cls: "blue",
       },
       {
         title: "A length of DNA",
         body: "Codes for one\nprotein / character\nSits at a fixed\nposition",
         cls: "main",
       },
       {
         title: "Different forms",
         body: "Same gene,\nslightly different\nbase sequence\nE.g. tall T vs short t",
         cls: "gold",
       },
     ],
     138,
     { x: 30, w: 840, h: 168, gap: 14 },
   )}`,
  900,
  324,
);

const punnettSquare = svgDiagram(
  "Punnett square: Tt x Tt",
  `<text class="title" x="450" y="30" text-anchor="middle">Monohybrid cross of two heterozygous tall plants</text>
   <text class="accent" x="120" y="72" text-anchor="middle">Gametes</text>
   <text class="label" x="175" y="112" text-anchor="middle">T</text>
   <text class="label" x="300" y="112" text-anchor="middle">t</text>
   <text class="label" x="110" y="180" text-anchor="middle">T</text>
   <text class="label" x="110" y="300" text-anchor="middle">t</text>
   ${box(130, 130, 140, 100, "TT", "main")}
   ${box(270, 130, 140, 100, "Tt", "main")}
   ${box(130, 230, 140, 100, "Tt", "main")}
   ${box(270, 230, 140, 100, "tt", "pink")}
   ${box(30, 130, 60, 100, "", "panel")}
   ${box(30, 230, 60, 100, "", "panel")}
   ${box(130, 95, 140, 35, "", "panel")}
   ${box(270, 95, 140, 35, "", "panel")}
   ${labelledRows(
     [
       ["Offspring", "1 TT : 2 Tt : 1 tt"],
       ["Phenotype", "3 tall : 1 short"],
       ["Ratio", "75% tall, 25% short"],
       ["Recessive", "shows only as tt"],
     ],
     470,
     150,
     40,
   )}
   <text class="small" x="470" y="308">Each box is one equally likely fertilisation.</text>`,
  900,
  350,
);

const sexDiagram = svgDiagram(
  "Human sex determination",
  `<text class="title" x="450" y="30" text-anchor="middle">The father's gamete decides the sex of the child</text>
   ${box(40, 55, 200, 52, "Mother  XX", "pink")}
   ${box(350, 55, 200, 52, "Father  XY", "blue")}
   <path class="arrow" d="M140 108v28m0 0h0m210-28v28"/>
   ${box(60, 140, 160, 46, "egg: X only", "panel")}
   ${box(470, 135, 190, 46, "sperm: X or Y", "panel")}
   <text class="label" x="320" y="110" text-anchor="middle">x</text>
   ${tileRow(
     [
       {
         title: "XX",
         body: "girl\nfrom an\nX sperm",
         cls: "pink",
       },
       {
         title: "XY",
         body: "boy\nfrom a\nY sperm",
         cls: "blue",
       },
       {
         title: "Probability",
         body: "each birth\n50% boy\n50% girl",
         cls: "gold",
       },
     ],
     200,
     { x: 40, w: 820, h: 110, gap: 14 },
   )}`,
  900,
  320,
);

/* ------------------------------------------------------------------ *
 * Chapter
 * ------------------------------------------------------------------ */

const chapterSeventeen: Chapter = {
  number: 17,
  title: "Inheritance",
  intro: `Inheritance explains why offspring resemble their parents without being copies of them.\n\nThis chapter builds the vocabulary first: chromosomes, genes, alleles, homozygous and heterozygous.\n\nIt then puts that vocabulary to work on monohybrid crosses, Punnett squares and sex determination.\n\nIt finishes by separating the variation you are born with from the variation life gives you.`,
  subheadings: [
    {
      title: "Chromosomes, Genes and Alleles",
      body: `### The Storage System\nIn the nucleus of a human body cell there are **46 chromosomes, arranged as 23 homologous pairs** — one member of each pair from the mother, one from the father.\n\nGametes carry only one of each pair, so a sperm or an egg has 23 unpaired chromosomes.\n\n### Genes and Alleles\n\nA gene is a section of DNA that codes for a protein, and it sits at a fixed position (locus) on a chromosome.\n\nBecause chromosomes come in pairs, genes also come in pairs, and the two copies of a gene may be different versions of it.\n\nThose versions are alleles. Two alleles of the same gene have slightly different base sequences, which can change the coded protein and so change the phenotype.\n\n${chromosomeDiagram}`,
      figure: inheritanceArt + "\n\n" + divisionArt,
      groups: [
        {
          bullets: [
            "**Chromosome:** a single long DNA molecule coiled around proteins; it carries many genes.",
            "**Gene:** a length of DNA at a specific locus that codes for one character (for example, height in pea plants).",
            "**Allele:** one of the alternative forms of the same gene, usually written as a capital or lower-case letter (T and t).",
            "**Homologous pair:** two chromosomes of the same length with the same genes in the same order, one inherited from each parent.",
            "In a **diploid** cell chromosomes are paired (2n); in a **haploid** gamete there is one of each pair (n).",
          ],
        },
        {
          subTitle: "Notation to memorise",
          bullets: [
            "**Dominant allele** is written as a capital letter (T).",
            "**Recessive allele** is written as the same letter in lower case (t).",
            "The two alleles of a gene are **separated** when gametes form, so each gamete carries only one allele for each gene.",
          ],
        },
        {
          subTitle: "The vocabulary in context",
          bullets: [
            "**Locus:** the fixed position of a gene on a chromosome.",
            "**DNA:** the molecule that stores genetic information as a sequence of bases.",
            "**Histone:** the protein DNA is coiled around, which helps chromosomes fit inside the nucleus.",
            "**Character:** an inherited feature, such as seed shape or height, that a gene controls.",
          ],
        },
      ],
      examinerTips: [
        "Keep the three levels straight: the chromosome is the whole structure, the gene is one section of it, the allele is a version of that gene.",
        "When a question asks for a definition, state the location too — a gene is 'a section of a chromosome / length of DNA'.",
        "Always give the chromosome number with its cell type: 46 in body cells, 23 in gametes — a bare number rarely earns the mark.",
        "Say that one chromosome of every homologous pair is maternal and the other paternal; that wording answers many 'explain' marks.",
      ],
      commonMistakes: [
        "Using 'gene' and 'allele' as if they meant the same thing.",
        "Saying there are 46 pairs of chromosomes in a human cell — there are 23 pairs, 46 in total.",
        "Claiming both chromosomes in a homologous pair carry the same alleles; they carry the same genes but may carry different alleles.",
        "Saying chromosomes are paired inside a gamete; they are single until fertilisation restores the pairs.",
      ],
      recap: [
        "Define allele and gene, and explain the difference between them. [3]",
        "State the number of chromosomes and the number of homologous pairs in a human body cell. [2]",
        "Explain why a gamete carries only one allele for each gene. [2]",
        "Describe the relationship between a chromosome, a gene and an allele. [3]",
      ],
    },
    {
      title: "Dominant and Recessive Inheritance",
      body: `### How alleles behave\n\nA **dominant allele** produces its effect whenever it is present, even if only one copy is there.\n\nA **recessive allele** is only expressed when **both** alleles are the recessive form, so its effect is hidden in a heterozygote.\n\n### The three genotypes\n\nFor a gene with alleles T and t there are exactly three combinations: TT, Tt and tt.\n\nTT and Tt give the same phenotype, the dominant one, even though their genotypes differ.\n\ntt is the only genotype that shows the recessive phenotype. This pattern, in which one allele completely masks the other, is called **complete dominance**.\n\n### Why carriers matter\nA carrier is a heterozygote that holds a recessive allele without showing it. Masked recessive alleles are why an inherited condition can appear in the child of two unaffected parents.`,
      groups: [
        {
          bullets: [
            "**Homozygous:** the two alleles of a gene are the same — TT or tt.",
            "**Heterozygous:** the two alleles are different — Tt.",
            "TT and Tt show the **same phenotype** (the dominant one) but have **different genotypes**.",
            "tt is the only genotype that shows the recessive phenotype.",
            "This pattern, where one allele completely masks the other, is called **complete dominance**.",
          ],
        },
        {
          subTitle: "Why recessives skip a generation",
          bullets: [
            "Two parents with the dominant phenotype can both be heterozygous (Tt) and therefore **carry** the recessive allele without showing it.",
            "When two carriers have a child, the recessive allele can come from both sides at once, giving tt and a child who shows the trait.",
            "This is how inherited conditions such as cystic fibrosis can appear in a family with no previous affected individuals.",
          ],
        },
        {
          subTitle: "Dominance in practice",
          bullets: [
            "**Carrier:** a heterozygous individual in whose phenotype a recessive allele is hidden.",
            "**Masking:** the dominant allele covering the effect of the recessive allele in a heterozygote.",
            "**Genotype ratio:** the allele combinations from a heterozygote cross — 1 TT : 2 Tt : 1 tt.",
            "**Phenotype ratio:** the same cross counted by appearance — 3 dominant : 1 recessive, because TT and Tt look alike.",
          ],
        },
      ],
      examinerTips: [
        "In this syllabus a capital letter stands for the dominant allele; never assign the letters the other way round.",
        "To describe dominance in words: 'the dominant allele is expressed in both homozygous and heterozygous conditions, the recessive only when homozygous'.",
        "Use one letter per character and the same letter for both alleles; mixing letters such as T and d costs accuracy marks.",
        "Check whether the question asks for phenotype or genotype before you write — answering the wrong one scores nothing.",
      ],
      commonMistakes: [
        "Believing a dominant allele is more common in a population — dominance is about expression, not frequency.",
        "Thinking that if a trait does not appear in a parent it cannot appear in the child.",
        "Assuming a dominant phenotype proves a homozygous genotype; Tt is dominant too.",
        "Calling Tt 'heterozygous recessive' — a heterozygote shows the dominant phenotype.",
      ],
      recap: [
        "State the genotype(s) that produce the recessive phenotype. [1]",
        "Explain how two parents with the dominant phenotype can produce offspring with the recessive phenotype. [3]",
        "Distinguish between homozygous and heterozygous. [2]",
        "In peas, purple flowers (P) are dominant to white (p). Give the phenotype of a Pp plant and the genotype of a white-flowered plant. [2]",
      ],
    },
    {
      title: "Genotype and Phenotype",
      body: `### The two words examiners test\n**Genotype** is the allele combination an individual carries (Tt). **Phenotype** is what that combination looks like when combined with the environment (tall).\n\nThe phenotype is the expression of the genotype; the genotype is the genetic makeup behind it.\n\nA genotype cannot be read straight from a phenotype, because a recessive allele can hide inside a heterozygote.\n\n### Setting an answer out\n\nWhen a question names a tall pea plant, 'tall' is the phenotype and 'TT or Tt' is the possible genotype.\n\nNaming which is which is usually the first mark in a genetics answer.`,
      figure:
        "| Genotype | Term | Phenotype (pea height) |\n| --- | --- | --- |\n| TT | Homozygous dominant | Tall |\n| Tt | Heterozygous | Tall |\n| tt | Homozygous recessive | Short |",
      groups: [
        {
          bullets: [
            "**Genotype:** the alleles an organism has for a particular gene.",
            "**Phenotype:** the observable characteristic that results from the genotype.",
            "For a **test cross**, the individual showing the dominant phenotype is bred with a **homozygous recessive** partner.",
            "If any offspring show the recessive phenotype, the unknown parent must have been heterozygous (Tt); if all offspring show the dominant phenotype, it was most likely homozygous dominant (TT).",
          ],
        },
        {
          subTitle: "Genotype vocabulary",
          bullets: [
            "**Homozygous:** both alleles of a gene are the same — TT or tt.",
            "**Heterozygous:** the two alleles differ — Tt.",
            "**True-breeding:** a homozygous line that breeds true because no hidden recessive allele can appear.",
            "**Recessive carrier:** a heterozygote whose phenotype hides one copy of the recessive allele.",
            "**Allele pair:** the two copies of a gene in a diploid organism, one inherited from each parent.",
          ],
        },
        {
          subTitle: "Phenotype and the environment",
          bullets: [
            "**Environmental modification:** the same genotype producing different phenotypes under different conditions.",
            "**Acquired difference:** a change to phenotype that leaves the genotype untouched.",
            "**Reading rule:** phenotype answers are written in words, genotype answers in letters.",
            "**Hidden evidence:** a recessive phenotype in the offspring proves both parents carried the recessive allele.",
          ],
        },
      ],
      examinerTips: [
        "Answer 'genotype' questions with letters (Tt) and 'phenotype' questions with words (tall) — mixing them up loses the mark.",
        "For a test cross, name the known partner as homozygous recessive and give its genotype.",
        "Define the letters you use before writing any ratio; an undefined letter cannot be credited.",
        "Explain the value of a test cross: a recessive partner contributes only recessive alleles, so any hidden allele in the unknown parent shows up in the offspring.",
      ],
      commonMistakes: [
        "Writing 'tall' as a genotype or 'Tt' as a phenotype.",
        "Using a dominant-homozygous individual instead of a recessive one to set up a test cross.",
        "Concluding a dominant phenotype is homozygous just because all four offspring look dominant.",
        "Omitting the environment from the definition of phenotype when the question wants the full definition.",
      ],
      recap: [
        "Define genotype and phenotype. [2]",
        "A pea plant is tall but its genotype is unknown.\n\nDescribe a test cross that would reveal it and state the possible results. [4]",
        "Distinguish between a phenotypic ratio and a genotypic ratio, using a Tt x Tt cross as your example. [3]",
        "Two plants with the same genotype grow to very different heights.\n\nExplain why. [2]",
      ],
    },
    {
      title: "Monohybrid Crossing-Over and Punnett Squares",
      body: `### The monohybrid cross\nA **monohybrid cross** looks at the inheritance of a **single** character, such as seed shape on its own.\n\nAlways present the working in the standard layout: parental phenotypes, parental genotypes, gametes, then a Punnett square and the ratios.\n\n### What goes in the square\n\nThe gametes of one parent run along the top; the gametes of the other run down the side.\n\nEach box is one equally likely fertilisation, so the four boxes stand for four equally probable outcomes.\n\n### Reading the result\n\nCount the boxes to obtain a ratio, and simplify it if you can.\n\nA 3 : 1 phenotype ratio means each offspring has a 75% chance of showing the dominant form.\n\n### A second monohybrid to know\n\nRound seed (R) is dominant to wrinkled in peas, so an Rr x Rr cross gives 3 round : 1 wrinkled.\n\nThe letter changes; the method and the ratios do not.\n\n${punnettSquare}`,
      groups: [
        {
          subTitle: "Layout that earns the marks",
          bullets: [
            "Line 1 — phenotypes of the parents (tall x tall).",
            "Line 2 — genotypes of the parents (Tt x Tt).",
            "Line 3 — the gametes each parent can form (T and t).",
            "Line 4 — the Punnett square filled with the four offspring genotypes.",
            "Line 5 — state the **phenotype ratio** (3 : 1) and, when asked, the **genotype ratio** (1 : 2 : 1).",
          ],
        },
        {
          subTitle: "Other crosses to know",
          bullets: [
            "Tt x tt gives a **1 : 1** phenotypic ratio (the test cross).",
            "TT x tt gives all **Tt** offspring — 100% dominant phenotype.",
            "Ratios are **probabilities**. A 3 : 1 ratio means each child has a three-in-four chance of being tall, not that exactly three of four children will be.",
          ],
        },
        {
          subTitle: "Generations and terms",
          bullets: [
            "**P generation:** the parental pair that starts the cross.",
            "**F1 generation:** the first filial offspring produced by crossing the parents.",
            "**F2 generation:** the offspring bred from F1 individuals, where the recessive form reappears.",
            "**Dihybrid cross:** a second-generation extension tracking two characters at once; RrYy x RrYy gives a 9 : 3 : 3 : 1 phenotype ratio.",
            "**Independent events:** every fertilisation is a fresh draw, so earlier offspring do not change the odds for later ones.",
          ],
        },
      ],
      examinerTips: [
        "Always label what each letter stands for at the top of your working.",
        "Give the ratio as phenotypes unless the question specifically asks for genotypes.",
        "Show all four boxes of the square; a partial square usually costs a mark even if the ratio is right.",
        "When the question is vague about which ratio it wants, give both — genotypic 1 : 2 : 1 and phenotypic 3 : 1.",
      ],
      commonMistakes: [
        "Forgetting to list the gametes before the square.",
        "Writing the genotype ratio 1 : 2 : 1 as the phenotypic ratio, or 3 : 1 as the genotypic one.",
        "Treating a ratio as a certainty for a small number of offspring.",
        "Putting two alleles into one gamete, such as writing TT as a gamete instead of T.",
      ],
      recap: [
        "Draw a Punnett square for a cross between two heterozygous round-seeded pea plants (Rr) and state the phenotype ratio. [4]",
        "State the genotypic ratio from a Tt x Tt cross. [1]",
        "Explain why a 3 : 1 ratio may not be seen exactly in a family of four offspring. [2]",
        "In guinea pigs, black coat (B) is dominant to white (b). Use a genetic diagram to find the phenotype ratio of the offspring from two Bb animals. [4]",
      ],
    },
    {
      title: "Sex Determination",
      figure: sexChromosomeArt,
      body: `### The chromosomes that decide sex\nHumans have 22 pairs of **autosomes** plus one pair of **sex chromosomes**. Females are **XX**, males are **XY**.\n\nThe Y chromosome is much shorter than the X and carries few genes, so the two chromosomes of this pair are not fully homologous.\n\nA child's sex is fixed at fertilisation by whichever sex chromosome the sperm contributed.\n\n### Why the father decides\n\nAn egg can contribute only an X, because that is the only sex chromosome a mother has to give.\n\nA sperm contributes either an X or a Y, so it is the sperm that settles whether the zygote will be XX or XY.\n\n### A ratio of chances\n\nX-bearing and Y-bearing sperm are produced in equal numbers and fuse with eggs at random.\n\nEach pregnancy is therefore an independent 50 : 50 event, which is why individual families vary but whole populations average out to 1 : 1.\n\n${sexDiagram}`,
      groups: [
        {
          bullets: [
            "Eggs always carry an **X**; sperm carry either an **X or a Y**, in roughly equal numbers.",
            "An X sperm fertilising an egg gives **XX (female)**; a Y sperm gives **XY (male)**.",
            "Because the two sperm types are equally likely, the expected sex ratio is **1 : 1**.",
            "**Birds use the reverse system:** the male is ZZ and the female is ZW, so in birds it is the **egg** that determines the sex of the offspring.",
            "In **Drosophila** and mammals the system is XX/XY; in birds, some reptiles and butterflies it is ZZ/ZW.",
          ],
        },
        {
          subTitle: "Key terms",
          bullets: [
            "**Autosome:** any chromosome other than a sex chromosome; humans have 22 pairs of them.",
            "**Sex chromosome:** the X or Y pair whose combination decides maleness or femaleness.",
            "**Y chromosome:** the short, male-determining chromosome that carries few genes.",
            "**Heterogametic sex:** the sex that forms two kinds of gamete for the sex chromosome — human males, but female birds.",
            "**Sex-chromosome complement:** the full set as written in definitions: 44 autosomes plus XX in a female cell, 44 plus XY in a male.",
          ],
        },
        {
          subTitle: "Applying the diagram",
          bullets: [
            "**Genetic diagram:** parents' phenotypes and genotypes, both gamete types, the offspring boxes, and the stated 1 : 1 ratio.",
            "**Random fusion:** the words examiners want for how X- and Y-bearing sperm meet the egg.",
            "**Moment of determination:** sex is fixed at fertilisation, never during pregnancy.",
          ],
        },
      ],
      examinerTips: [
        "State that it is the father, through his sperm, that determines the sex in mammals — and back it up with the gametes.",
        "Use a genetic diagram (parents, gametes, offspring, ratio) rather than a sentence for a 'explain how sex is determined' question.",
        "Draw both offspring outcomes, XX and XY, and finish with the words 'probability 1 : 1' — each part is a separate mark.",
        "Include the word 'random' when describing the fusion of sperm and egg; many mark schemes require it.",
      ],
      commonMistakes: [
        "Blaming the mother for the sex of the child.",
        "Applying the human XX/XY system to birds.",
        "Claiming the egg decides sex; every egg carries X, so none of them can.",
        "Describing the Y chromosome as dominant or recessive; sex determination is not a dominance question.",
      ],
      recap: [
        "Use a genetic diagram to explain how the sex of a human child is determined. [4]",
        "Explain why the sex ratio in a population is expected to be about 1 : 1. [2]",
        "In birds the male is ZZ and the female is ZW. State which parent determines the sex of a chick and explain why. [3]",
        "Give the sex-chromosome complement of a human sperm, a human egg, and a fertilised egg that develops as a boy. [3]",
      ],
    },
    {
      title: "Inherited and Acquired Variation",
      body: `### Nature versus the environment\n\n**Inherited variation** is passed from parent to offspring through the genes in the gametes.\n\n**Acquired (environmental) variation** develops during a lifetime and involves no change to the DNA of the reproductive cells.\n\nThe key exam point is that acquired characteristics are **not** transmitted to the next generation.\n\n### The test to apply\nAsk one question: did this feature change the base sequence of the organism's gametes? If it did not, the trait cannot be inherited, however permanent it looks on the body.\n\n### Where the two mix\nMost features combine both influences. Adult height follows an inherited growth plan but depends on nutrition, and skin colour is inherited yet darkens in sunlight.\n\n### Why it matters later\nOnly inherited variation is passed down, so only it can be acted on by selection across generations. That idea carries straight into the next chapter.`,
      groups: [
        {
          bullets: [
            "**Inherited examples:** blood group, tongue-rolling, natural eye colour, the inherited component of height.",
            "**Acquired examples:** scars, tattoos, hair dyed or cut short, muscle built by exercise, a limp from an injury.",
            "Only changes to the **DNA in gametes** can be inherited; a change to somatic (body) cells affects the individual alone.",
            "Most features are a **mix** of both — adult height is genetically set but depends on nutrition, and skin colour is inherited but darkens in the sun.",
            "This distinction is why the old idea of inherited acquired characteristics is rejected: the instructions sent to the next generation are DNA, not the body's history.",
          ],
        },
        {
          subTitle: "Classifying quickly",
          bullets: [
            "**Present at birth:** a useful clue that a feature is inherited, though it is not proof on its own.",
            "**Caused afterwards:** injuries, training and tints are acquired in every mark scheme.",
            "**Gamete test:** if the DNA of the gametes was not changed, the offspring are unaffected.",
            "**Both influences:** features such as body mass are inherited in tendency but acquired in detail.",
          ],
        },
        {
          subTitle: "Wording that earns marks",
          bullets: [
            "**Because...:** follow every classification with 'because it does not change the DNA of the gametes'.",
            "**Environmental factor:** the syllabus phrase for what causes acquired variation.",
            "**Raw material:** inherited variation supplies the differences natural selection can act on.",
          ],
        },
      ],
      examinerTips: [
        "Justify the classification with the mechanism: 'acquired, because it does not change the DNA of the gametes, so the offspring are unaffected'.",
        "When asked to sort a list, look for whether the trait was present at birth or caused afterwards.",
        "Match the command word: 'state' needs a short phrase, 'explain' needs the gamete mechanism written out.",
        "For mixed features, credit both halves separately — name the inherited tendency and the environmental influence.",
      ],
      commonMistakes: [
        "Assuming anything visible must be genetic.",
        "Calling a tattoo inherited because the ink is permanent on that person.",
        "Choosing dyed hair as an inherited example just because the natural colour underneath is genetic.",
        "Thinking acquired means unimportant; height and mass are partly acquired yet still count as variation.",
      ],
      recap: [
        "Define inherited variation and acquired variation, giving one example of each. [4]",
        "Explain why a bodybuilder's large muscles are not passed on to their children. [2]",
        "Give one human feature influenced by both genes and environment and explain both influences. [3]",
        "A dog learns to catch a ball after birth. State and explain whether this is inherited or acquired variation. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_17: Chapter = chapterSeventeen;
