import type { Chapter } from "./types";

const IMG = "/notes/agriculture";

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

const geneticsArt = artPanel([
  {
    src: "ag09-chromosomes-alleles.webp",
    alt: "A pair of homologous chromosomes lying side by side, with one locus marked at the same position on each and the alleles T and t labelled there",
    caption: "One locus, two alleles, one on each homologue",
  },
  {
    src: "ag09-punnett-square.webp",
    alt: "A 2 by 2 Punnett square for a cross between two heterozygous tall parents, showing the genotypes TT, Tt, Tt and tt and a 3 to 1 tall to short outcome",
    caption: "Tt × Tt: three tall to one short",
  },
]);

const breedingArt = artPanel([
  {
    src: "ag09-selective-breeding.webp",
    alt: "A high-yielding dairy cow standing with her calf in a clean paddock, with a broad, deep-bodied pedigree bull in the background",
    caption: "Keep the cow, choose the bull, judge the calf",
  },
  {
    src: "ag09-artificial-insemination.webp",
    alt: "An AI technician holding a thawed semen straw in an insemination gun beside a liquid-nitrogen flask, with a cow held in a crush behind",
    caption: "Frozen semen at −196 °C, one straw per cow",
  },
]);

const modificationArt = artPanel([
  {
    src: "ag09-variety-trial.webp",
    alt: "Two adjacent plots of the same crop, one tall with large ears and clean leaves, the other short with small ears and rust spots on the leaves",
    caption: "Same field, same season, different genotypes",
  },
  {
    src: "ag09-gm-gene-transfer.webp",
    alt: "A scientist transferring a gene into a plant cell under a microscope, with a fenced trial plot of maize visible through the laboratory window",
    caption: "A gene inserted by biotechnology, then tested in the field",
  },
]);

const chapterNine: Chapter = {
  number: 9,
  title: "Livestock and Crop Breeding",
  intro: `Breeding is genetics with a purpose: the farmer decides which animals and plants pass on their genes.\n\nThat decision rests on **chromosomes**, **genes** and **alleles**, and on the ratios that follow from a simple cross.\n\nA **monohybrid cross** predicts offspring in a 3:1 or 1:1 ratio, and those ratios are the working language of livestock and crop improvement.\n\nSelective breeding then applies the same logic over many generations, while **artificial insemination** lets one proven sire reach thousands of cows.\n\n**Genetic modification** adds a different tool, because it moves a gene between species rather than choosing among alleles that already exist.`,
  subheadings: [
    {
      title: "Chromosomes, Genes and Alleles",
      body: `### Where the Information Sits

Every cell of a cow, a maize plant or a hen carries its instructions in the **nucleus**.

Those instructions are written in **DNA**, a long molecule that stores the code.

DNA is wound into **chromosomes**, which shorten and become visible when a cell divides.

A **gene** is a short length of DNA that codes for one protein, and so influences one characteristic.

The fixed position of a gene along a chromosome is its **locus**.

### Chromosome Number

Body cells are **diploid**, which means their chromosomes come in pairs.

One chromosome of each pair came from the sire and one from the dam.

Cattle have 60 chromosomes, that is 30 pairs; sheep have 54, pigs 38 and maize 20.

The two partners of a pair are **homologous**: same length, same shape, same sequence of loci.

Gametes are **haploid** and carry one chromosome of each pair, so a bull's sperm has 30.

At fertilisation, 30 + 30 restores 60 in the calf.

### Genes and Alleles

A gene occupies one locus and may exist in several versions.

Each version is an **allele**, and a diploid cell carries two alleles at each locus.

If the two alleles are the same, the individual is **homozygous** for that gene.

If the two alleles differ, the individual is **heterozygous**.

A homozygous animal is also called **pure-breeding**, because it passes the same allele to every gamete.

### Dominant and Recessive

A **dominant** allele produces its effect even when a single copy is present.

A **recessive** allele produces its effect only when both copies are recessive.

By convention the dominant allele is a capital letter and the recessive the same letter in lower case.

So T might stand for the tall allele and t for the short allele.

TT and Tt are tall, and only tt is short.

### Genotype and Phenotype

The **genotype** is the pair of alleles present, written as TT, Tt or tt.

The **phenotype** is the observable result: height, coat colour, yield or disease score.

Genotype is what the animal carries; phenotype is what the farmer sees and records.

Two animals can share a phenotype, tall, while carrying different genotypes, TT and Tt.

### Single-Gene and Quantitative Traits

**Single-gene traits** have clear-cut phenotypes: polled or horned, black or red, tall or short.

**Quantitative traits** such as milk yield, growth rate and grain yield are controlled by many genes.

Each of those genes adds a small effect, and the environment adds more variation.

That is why yield figures overlap between genotypes, and why records matter so much.

### Real Examples on the Farm

In cattle, **polled** P is dominant to horned p, so a Pp animal is hornless.

In Aberdeen Angus, black B is dominant to red b, so every red animal is bb.

In maize, starchy grain is dominant to sweet, and in tomato red fruit is dominant to yellow.

Each of these is a single locus with two common alleles.

### Alleles in a Herd

A breed or herd contains a **gene pool**, the sum of all the alleles present.

A rare recessive allele can stay hidden in heterozygotes for many generations.

That is why a defect can appear suddenly in a herd where no animal ever showed it.

Breeders speak of **allele frequency**, the proportion of each allele in that pool.

Selection changes allele frequencies slowly, one generation at a time.

### Where New Alleles Come From

**Mutation** changes the DNA sequence and creates a new allele, but it is rare and usually harmful.

**Meiosis** reshuffles existing alleles by independent assortment and crossing over.

**Fertilisation** then combines two different sets of alleles in the offspring.

The result is the variation that selection works on, which is the subject of the rest of this chapter.

### Worked Example: Chromosome Arithmetic

A bull's skin cell contains 60 chromosomes.

Sperm are formed by meiosis, so each carries half the number: 60 ÷ 2 = 30.

An egg also carries 30, so the zygote has 30 + 30 = 60 chromosomes.

The diploid number is restored, and the calf is genetically unique.

### Why the Vocabulary Earns Marks

Define each term in one line, using gene, allele and chromosome correctly.

Never use gene and allele as synonyms: a gene is the locus, an allele is a version.

Never write dominant gene when you mean dominant allele.

Written precisely, these six definitions are quick marks in Paper 1 and Paper 2.`,
      groups: [
        {
          subTitle: "The Six Definitions",
          bullets: [
            "**Chromosome:** a thread of DNA carrying many genes; body cells hold them in pairs.",
            "**Gene:** a length of DNA at a fixed locus that codes for a protein.",
            "**Allele:** one version of a gene; a diploid cell carries two per locus.",
            "**Homozygous or heterozygous:** two identical alleles, or two different alleles.",
            "**Dominant or recessive:** expressed with one copy present, or only with two.",
          ],
        },
        {
          subTitle: "Numbers Worth Remembering",
          bullets: [
            "**Cattle:** 60 chromosomes, that is 30 pairs, so 30 per gamete.",
            "**Sheep:** 54 chromosomes; **pig:** 38; **maize:** 20.",
            "**Diploid** body cells hold pairs; **haploid** gametes hold one of each pair.",
            "**One locus, two alleles:** one inherited from each parent.",
          ],
        },
        {
          subTitle: "Traits You Can Follow",
          bullets: [
            "**Polled and horned** cattle: polled P dominant to horned p.",
            "**Black and red** coat in Angus: black B dominant to red b.",
            "**Tall and short** stems in peas and maize: tall T dominant to short t.",
            "**Quantitative traits:** milk yield, growth rate, yield and resistance involve many genes.",
            "**Environment** shifts quantitative phenotypes far more than single-gene ones.",
          ],
        },
      ],
      examinerTips: [
        "Learn the six definitions word for word, then use them in the answer rather than describing them.",
        "Write allele, not gene, whenever you mean one version at a locus.",
        "State that gametes are haploid and carry one allele per locus when explaining a ratio.",
        "For chromosome numbers, give the diploid figure and the pair count, since both are asked.",
        "Link genotype to the letters and phenotype to the visible trait in every example you give.",
      ],
      commonMistakes: [
        "Calling a dominant allele a stronger gene; dominance describes expression, not strength.",
        "Writing that a heterozygous animal is pure-breeding; only homozygotes breed true.",
        "Giving 60 chromosomes for a sperm cell; meiosis halves the number to 30.",
        "Treating milk yield as a single-gene trait, which ignores the many genes and the environment.",
        "Saying a recessive allele is absent in a heterozygote; it is present but not expressed.",
      ],
      recap: [
        "Define chromosome, gene and allele. [3]",
        "Distinguish between homozygous and heterozygous, using an example. [2]",
        "A cow has 60 chromosomes in a body cell. State the number in an egg cell and explain. [2]",
        "Explain why a recessive allele can remain hidden in a herd for many generations. [3]",
        "Explain why milk yield is described as a quantitative trait rather than a single-gene trait. [2]",
      ],
    },
    {
      title: "Monohybrid Crosses: 1:1 and 3:1",
      body: `### Setting Out a Monohybrid Cross

A **monohybrid cross** follows one gene with two alleles.

Write the parental genotypes first, then the gametes each parent can produce.

Every gamete carries one allele of the pair, never both.

A 2×2 grid, the **Punnett square**, then combines each gamete of one parent with each gamete of the other.

### Gametes and Segregation

The two alleles separate at meiosis, and that separation is called **segregation**.

A Tt parent makes half T gametes and half t gametes.

A TT parent makes only T gametes, and a tt parent only t gametes.

Equal numbers of gametes mean every cell of the square is equally likely.

### The 2×2 Square for Tt × Tt

Take tall T dominant to short t, and cross two heterozygous tall plants.

Each parent is Tt, so each contributes T or t.

Combine them cell by cell:

T × T = TT

T × t = Tt

t × T = Tt

t × t = tt

That is the complete square: TT, Tt, Tt and tt.

### Reading the 3:1 Ratio

Count genotypes first: 1 TT : 2 Tt : 1 tt.

Count phenotypes second: three tall and one short, so 3 : 1.

As probabilities, each offspring has a 75% chance of being tall and a 25% chance of being short.

One offspring in four is expected to be **homozygous short**, tt.

Among the tall offspring, one third are expected TT and two thirds Tt.

### Why Tall Is the Phenotype

T is dominant, so TT and Tt both look tall and cannot be separated by eye.

The word tall describes the **phenotype**; the letters TT and Tt describe the **genotype**.

A Tt plant is tall but still carries t, which it can pass to its own offspring.

That hidden allele is why two tall parents can produce a short offspring.

### The 1:1 Cross: Tt × tt

Now cross a heterozygous tall plant with a homozygous short one.

The gametes are T and t from the first parent and t only from the second.

T × t = Tt

t × t = tt

The result is 1 Tt : 1 tt, that is one tall to one short.

The probabilities are 50% tall, all of them heterozygous, and 50% short.

### Worked Example: Numbers in a Calf Crop

A herd is expected to produce 240 calves from Tt × Tt matings.

Tall expected = 3 ÷ 4 × 240 = 180.

Short expected = 1 ÷ 4 × 240 = 60.

Of the 180 tall, one third, 60, are expected TT and two thirds, 120, are Tt.

### The Test Cross

A tall animal may be TT or Tt, and its phenotype cannot decide which.

Cross it with a **homozygous recessive**, tt, and read the offspring.

If every offspring is tall, the parent is probably TT.

If about half are short, the parent must be Tt, because only Tt can supply a t.

### Chance and Small Numbers

A ratio is an expectation, not a guarantee, and small families scatter widely.

A Tt × tt pair could produce four tall offspring in a row with probability (½)⁴ = 1 ÷ 16.

With six offspring, the chance of that false result falls to (½)⁶ = 1 ÷ 64.

So judge a test cross on several offspring, or on a DNA test, never on one.

### When a Ratio Looks Wrong

**Lethal alleles** kill one genotype before birth and shift the ratio, often to 2:1.

**Incomplete dominance** makes heterozygotes intermediate, giving 1:2:1 phenotypes.

**Sex-linked** genes sit on the sex chromosomes and give different ratios in males and females.

**Mis-scoring** and mixed parentage also spoil ratios, so check the records first.

### A Second Example: Polled Cattle

Polled P is dominant to horned p.

A heterozygous polled bull, Pp, is mated to horned cows, all pp.

Pp × pp gives Pp and pp in equal numbers, so 1 polled : 1 horned.

Of 60 calves, expect 30 polled and 30 horned.

Every horned calf proves the bull carries p, and every polled calf is a carrier too.

### Using the Square in an Answer

Write the parental genotypes and the gametes before drawing anything.

Head the columns with one parent's gametes and the rows with the other's.

Fill each cell with one allele from its column and one from its row, capital letter first.

Then state the genotype ratio and the phenotype ratio, each with its numbers.

### Ratio Summary

Tt × Tt gives 1 TT : 2 Tt : 1 tt, which is 3 tall : 1 short.

Tt × tt gives 1 Tt : 1 tt, which is 1 tall : 1 short.

TT × tt gives all Tt, so 100% tall and all heterozygous.

TT × TT gives all TT, and tt × tt gives all tt.`,
      figure: geneticsArt,
      groups: [
        {
          subTitle: "Ratio Results to Learn",
          bullets: [
            "**Tt × Tt:** 1 TT : 2 Tt : 1 tt, so 3 tall : 1 short, or 75% to 25%.",
            "**Tt × tt:** 1 Tt : 1 tt, so 1 tall : 1 short, or 50% to 50%.",
            "**TT × tt:** all Tt, so every offspring is tall and heterozygous.",
            "**Test cross:** unknown tall × tt, giving all tall for TT and 1:1 for Tt.",
            "**Probabilities:** each offspring is independent, so ratios describe large numbers only.",
          ],
        },
        {
          subTitle: "Setting Out the Square",
          bullets: [
            "**Parents:** write both genotypes and say which phenotype each has.",
            "**Gametes:** list them separately, one allele per gamete.",
            "**Square:** head columns and rows with gametes, then combine.",
            "**Ratios:** give genotype ratio first, then phenotype ratio, with numbers.",
          ],
        },
        {
          subTitle: "Why Real Ratios Drift",
          bullets: [
            "**Small samples** scatter around the expected ratio by chance.",
            "**Lethal alleles** remove a genotype and change 3:1 into 2:1.",
            "**Incomplete dominance** makes the heterozygote visible, giving 1:2:1.",
            "**Sex linkage** produces different ratios in male and female offspring.",
            "**Recording errors** and mixed paternity mimic odd ratios, so check the data.",
          ],
        },
      ],
      examinerTips: [
        "Show the gametes, the square and both ratios; each step carries its own mark.",
        "Write the phenotype beside each genotype in the square, so the 3:1 is visible.",
        "Use one letter only per gene, capital for dominant and lower case for recessive.",
        "When asked for a probability, answer as a fraction, a percentage or a ratio, and be consistent.",
        "For a test cross, state that the recessive parent must be homozygous, otherwise the test fails.",
      ],
      commonMistakes: [
        "Drawing a 4×4 square for one gene; a monohybrid cross needs only 2×2.",
        "Putting two alleles into a gamete, which doubles the chromosome number.",
        "Counting genotypes as phenotypes and reporting a 1:2:1 answer to a phenotype question.",
        "Forgetting that Tt looks tall, then calling 2 Tt short.",
        "Treating 3:1 as exact in a family of four; it is an average over many offspring.",
      ],
      recap: [
        "In cattle, black coat B is dominant to red b. Two heterozygous black animals are mated. Draw the cross and give the phenotype ratio. [4]",
        "Explain why a Tt × Tt cross gives a 3:1 ratio but a 1:2:1 genotype ratio. [2]",
        "A tall plant is crossed with a short plant and about half the offspring are short. Deduce the genotype of the tall parent. [2]",
        "Describe how a test cross is carried out and how the result is interpreted. [4]",
        "Two heterozygous parents produce 200 offspring. Calculate the expected number of homozygous short offspring. [2]",
      ],
    },
    {
      title: "Genotype, Phenotype and Selection",
      body: `### Two Words, Two Jobs

The **genotype** is the genetic constitution of an organism, at one locus or across the whole genome.

The **phenotype** is the characteristic that can be seen, measured or scored.

The relationship is often summarised as phenotype = genotype + environment.

Both words are needed because a breeder selects on phenotype but transmits genotype.

### Why the Phenotype Misleads

Two bulls may both weigh 600 kg at 18 months.

One may carry genes for rapid growth, while the other was simply fed better.

Keeping the second bull passes on management, not breeding value, to the next generation.

Only comparable records, and where possible genotypes, separate the two.

### Carriers and Hidden Alleles

A **carrier** is a heterozygote that shows the dominant phenotype but carries a recessive allele.

A black cow Bb looks exactly like a black cow BB.

Mated to a red bull bb, the Bb cow can produce a red calf, and the BB cow cannot.

Carriers therefore keep a recessive allele circulating in a herd while showing no sign of it.

### Recessive Defects in Livestock

Many inherited defects are recessive, so an animal is affected only as bb or aa.

Examples include some forms of **double muscling** and several recessive malformations recorded in Holsteins.

An affected calf proves that both parents carried the allele.

Culling affected animals, and tested carriers, lowers the allele frequency in later generations.

### Incomplete Dominance and Codominance

With **incomplete dominance**, the heterozygote is intermediate, as when red and white snapdragons give pink.

With **codominance**, both alleles show at once, as in roan cattle with a mixture of red and white hairs.

In both cases the heterozygote can be told apart, so the genotype can be read from the phenotype.

The familiar 3:1 ratio then becomes 1:2:1, which is a favourite exam trap.

### Genotypes in Breeding Decisions

Knowing genotypes lets a breeder plan matings instead of guessing.

Never mate two known carriers when a healthy calf is wanted, because one quarter of the offspring are expected affected.

Mate a carrier to a tested clear animal, and no affected offspring are expected.

In crops, genotype decides the parents of an F1 hybrid and the purity of the seed sold.

### Progeny Testing and DNA Tests

**Progeny testing** judges a sire by the performance of his offspring, which reveals his genotype indirectly.

**DNA testing** reads the alleles at a locus directly from a hair, blood or tissue sample.

DNA tests are fast and certain for single-gene traits, but they cannot predict milk yield, which involves many genes.

Progeny testing remains the tool for quantitative traits, and it takes years to complete.

### Environment and the Phenotype

The same genotype gives different phenotypes under different management.

A heifer of high genetic merit reared on poor pasture never reaches her potential.

A **variety trial** therefore grows all entries together, in the same field and season, with replicates.

Only then does a difference in phenotype reflect a difference in genotype.

### Worked Example: A Carrier Sire

A polled bull is known from a DNA test to be Pp.

He is mated to 40 horned cows, all pp.

Expected polled calves = 1 ÷ 2 × 40 = 20, and expected horned calves = 20.

Every polled calf is Pp, so it carries the horned allele and should not be kept as a breeding bull without testing.

That is the hidden cost of a carrier sire, even for a harmless allele.

### Worked Example: Two Carriers

Two animals heterozygous for a recessive defect, Aa × Aa, are mated.

The expected ratio is 1 AA : 2 Aa : 1 aa.

So one quarter of conceptions, 25%, are expected to be affected.

Of the three quarters that are healthy, two thirds are carriers, which is 50% of all offspring.

That arithmetic explains why carriers are so hard to remove on phenotype alone.

### Why Records Are Part of Genetics

A genotype is fixed at conception, but a record is made by the farmer.

Weigh animals at the same age, on the same feed, and record the date.

Correct identification of sire and dam is as important as the measurement itself.

Without records, selection is guesswork dressed up as breeding.`,
      groups: [
        {
          subTitle: "Genotype or Phenotype",
          bullets: [
            "**Genotype:** the alleles carried, written with letters, invisible to the eye.",
            "**Phenotype:** the observable trait, produced by genotype plus environment.",
            "**Single-gene traits** let phenotype reveal genotype, with dominance exceptions.",
            "**Quantitative traits** need records, because environment blurs the genotype.",
          ],
        },
        {
          subTitle: "Patterns of Dominance",
          bullets: [
            "**Complete dominance:** Tt looks identical to TT, so 3:1 phenotypes.",
            "**Incomplete dominance:** the heterozygote is intermediate, so 1:2:1 phenotypes.",
            "**Codominance:** both alleles appear together, as in roan coat colour.",
            "**Lethal recessives:** one genotype dies, shifting a 3:1 ratio towards 2:1.",
          ],
        },
        {
          subTitle: "Tools for Reading a Genotype",
          bullets: [
            "**Test cross:** mate to a homozygous recessive and count the offspring.",
            "**Progeny test:** average many offspring to estimate breeding value.",
            "**DNA test:** read the alleles at a locus from a tissue sample.",
            "**Records:** identify sire and dam and measure the trait under equal conditions.",
          ],
        },
      ],
      examinerTips: [
        "Use genotype for letters and phenotype for appearance, and never swap the words.",
        "When a phenotype is dominant, say that the genotype is unknown until tested.",
        "Explain a carrier as a heterozygote showing the dominant trait but passing the recessive allele.",
        "For a defect, calculate the expected affected fraction before discussing culling.",
        "Link each breeding decision to the genotype it keeps or removes from the herd.",
      ],
      commonMistakes: [
        "Assuming a black animal is BB because black is dominant; it may be Bb.",
        "Saying a carrier shows the recessive trait, which defines an affected homozygote.",
        "Blaming genotype for a low yield that comes from poor feed and water.",
        "Forgetting incomplete dominance and reporting 3:1 where 1:2:1 is correct.",
        "Ignoring the sire when recording, which makes progeny testing worthless.",
      ],
      recap: [
        "Distinguish between genotype and phenotype, using coat colour in cattle as an example. [3]",
        "Explain why a heterozygous black bull can produce red calves. [2]",
        "Two heterozygous animals for a recessive defect are mated. Calculate the percentage of offspring expected to be affected. [2]",
        "Explain why a DNA test is useful to a breeder of pedigree cattle. [3]",
        "Explain why a variety trial must grow all varieties in the same field and season. [2]",
      ],
    },
    {
      title: "Selective Breeding in Livestock and Crops",
      body: `### What Artificial Selection Is

**Artificial selection** is the choice of which individuals breed, so that wanted traits become commoner.

The farmer replaces natural survival with a stated breeding objective.

It works only on **heritable variation** already present in the gene pool.

No new gene is created; the frequencies of existing alleles change.

### The Breeding Cycle

State the objective in measurable terms, such as litres of milk per lactation.

Select the best animals or plants from a large pool, using records.

Mate the selected parents and then evaluate their offspring.

Keep the best offspring as parents, cull or sell the rest, and repeat for many generations.

### Traits Breeders Target

**Yield:** milk, meat, eggs, grain, tuber weight and wool.

**Disease resistance:** to rusts, blights, viruses, ticks and internal parasites.

**Hardiness:** tolerance of drought, heat, cold, poor soil and rough handling.

**Appearance and quality:** coat colour, conformation, fruit shape, grain colour and butterfat.

**Efficiency:** feed conversion, early maturity, calving ease and longevity.

### Livestock Varieties of Economic Importance

**Holstein-Friesian** cattle give the highest milk yield, often 8000 L or more per lactation.

**Jersey** cattle give less milk but richer milk, with high butterfat and protein.

**Aberdeen Angus** is a polled beef breed known for hardiness and carcase quality.

**Brahman** cattle bring heat and tick tolerance to tropical farms.

**Large White** and **Landrace** pigs are selected for litter size and lean growth.

Broilers are selected for feed conversion, and layers for the number of eggs per year.

### Crop Varieties of Economic Importance

Wheat varieties with **rust resistance** and short, stiff straw yield well with fertiliser and resist lodging.

Hybrid **maize** gives uniform, high-yielding plants, and the seed must be bought fresh each season.

**Cassava** varieties bred for mosaic disease resistance protect a staple crop across Africa.

Potato varieties with **blight resistance** cut fungicide costs, and tomato varieties are bred for uniform fruit.

Rice varieties with short stature and early maturity allow two crops in a year.

### Records and the Selection Differential

Selection is only as good as the records behind it.

Weigh, measure and record the trait on every candidate under comparable conditions.

The gap between the selected group's average and the herd average is the **selection differential**.

A large differential and a short generation interval give faster progress.

### Time and Cost

A new animal breed takes many generations, often 20 years or more.

A new crop variety takes 8 to 15 years of crossing, selection and official trials.

Costs include recording, testing, land and the income lost from culled animals.

That is why breeding companies, rather than individual farmers, run the long programmes.

### Limits: Inbreeding and Trade-offs

Breeding from a narrow group raises **inbreeding**, which lowers fertility and vigour.

Traits are often negatively correlated, so heavy selection for yield can reduce fertility or resistance.

A closed gene pool eventually runs out of variation and progress slows.

Outcrossing, or bringing in unrelated stock, restores some of that variation.

### Worked Example: Selecting Dairy Cows

A herd averages 6000 L per lactation, and the farmer keeps the top 20 cows, averaging 7000 L.

The selection differential is 7000 − 6000 = 1000 L.

Only part of that gap is inherited, because feed and management caused some of it; suppose one third.

Expected genetic gain = 1000 ÷ 3 ≈ 333 L per generation.

The herd mean should then move towards 6000 + 333 = 6333 L, given the same management.

### Worked Example: Choosing a Bull

Two bulls are offered at the same price.

One is by a famous sire but has no milking daughters yet; the other has 500 daughters averaging 400 L above their herd means.

The second figure is already an estimate of the bull's transmitting ability.

Choosing the proven bull is the lower-risk decision, which is the reasoning behind progeny testing.

### Improving Appearance Without Losing Yield

Breeders also select for **conformation**, the shape and structure of an animal.

Good legs and feet and a sound udder keep a high-yielding cow in the herd longer.

In crops, uniformity of height and ripening makes harvesting and marketing easier.

Appearance alone never feeds a herd, so it is judged alongside yield and health.`,
      figure: breedingArt,
      groups: [
        {
          subTitle: "The Selection Cycle",
          bullets: [
            "**Objective:** state the trait and the unit, such as litres per lactation.",
            "**Select:** choose the best from a large pool, using records not impressions.",
            "**Mate and evaluate:** breed, then measure the offspring under equal conditions.",
            "**Repeat:** keep the best, cull the rest, and continue for many generations.",
          ],
        },
        {
          subTitle: "Named Varieties to Quote",
          bullets: [
            "**Holstein-Friesian:** highest milk yield; **Jersey:** richest milk.",
            "**Aberdeen Angus:** hardy, polled beef; **Brahman:** heat and tick tolerance.",
            "**Large White and Landrace:** pig litter size and lean growth.",
            "**Hybrid maize:** uniform yield, with fresh seed bought each season.",
            "**Rust-resistant wheat** and **mosaic-resistant cassava** protect yield.",
          ],
        },
        {
          subTitle: "What Limits Progress",
          bullets: [
            "**Heritability:** the share of a trait's variation that is genetic.",
            "**Generation interval:** cattle are slow, poultry and crops are faster.",
            "**Inbreeding:** narrow parentage lowers fertility and vigour.",
            "**Trade-offs:** yield against fertility, or yield against quality.",
            "**Records:** poor identification and uneven feeding hide the genotype.",
          ],
        },
      ],
      examinerTips: [
        "Name the trait, the unit and the selection criterion, rather than saying better animals.",
        "Give a named breed or variety for each improvement you claim.",
        "Explain artificial selection as choosing among existing variation, not creating new genes.",
        "Quote the selection differential as selected mean minus population mean.",
        "For hardiness or resistance, state the specific stress or disease, not just stronger plants.",
      ],
      commonMistakes: [
        "Saying selective breeding creates new genes; it changes allele frequencies.",
        "Selecting only on appearance when yield and health are the real objectives.",
        "Ignoring the environment and crediting all of a yield difference to genetics.",
        "Breeding from one outstanding animal repeatedly, which raises inbreeding.",
        "Claiming a new crop variety can be produced in one or two seasons.",
      ],
      recap: [
        "Define artificial selection and state what it acts on. [2]",
        "Describe the steps a breeder follows to improve milk yield in a dairy herd. [4]",
        "Name two livestock breeds and state the trait each is selected for. [2]",
        "A herd averages 5000 L and the selected cows average 6200 L. Calculate the selection differential. [2]",
        "Explain two reasons why selective breeding in cattle is slow. [2]",
      ],
    },
    {
      title: "Artificial Insemination",
      body: `### What Artificial Insemination Is

**Artificial insemination (AI)** places semen collected from a sire into the reproductive tract of a female without natural mating.

The semen is **extended** with a diluent that feeds and protects the sperm.

It is then frozen in small plastic **straws** and stored at about −196 °C in **liquid nitrogen**.

Each straw holds one insemination dose and is thawed immediately before use.

### Collecting and Processing Semen

Semen is collected from a bull with an artificial vagina, or from the vagina of a teaser cow.

The sample is checked for volume, concentration and the proportion of motile sperm.

It is diluted so that one collection yields several hundred doses.

Each batch is numbered, recorded and traced back to the bull and the collection date.

### The Insemination Procedure

The technician detects **oestrus** and inseminates at the correct time, often about 12 hours after standing heat begins.

The cow is restrained in a crush and the vulva is cleaned.

A sterile insemination gun is passed through the cervix, and the semen is deposited in the uterus.

The date, straw number and bull are recorded, and pregnancy is checked about six weeks later.

### Why AI Spreads a Proven Bull's Genes

Natural mating limits one bull to roughly 30 to 50 cows a year.

AI allows one collection to produce several hundred straws, and a bull can be collected many times.

A single proven sire can therefore father thousands of calves across many farms and countries in one year.

His genes spread far faster than any bull could walk, and they reach herds that could never buy him.

### Benefits on the Farm

**No bull to keep:** no bull housing, extra fencing or dangerous animal, and no bull injuries to staff or cows.

**Proven sires:** breeding value is known from many daughters, so the risk of a poor choice falls.

**Dead or distant sires:** frozen straws stay usable long after a bull dies, or while he stands on another continent.

**Access for small farms:** a farmer with five cows can use the same elite bull as a large estate.

**Disease control:** a sterile gun and a new straw for every cow remove the venereal route of infection.

**Records and planning:** every calf has a known sire, so matings can be planned and inbreeding avoided.

### Disease Control in Detail

Natural mating can pass **trichomoniasis**, **campylobacteriosis** and brucellosis between animals.

AI uses a sterile gun and a fresh straw each time, which breaks that chain.

Bulls are kept in licensed centres and tested for disease before semen is sold.

Frozen semen is also easier to regulate than the movement of live animals across borders.

### Limits and Risks

AI depends on accurate **heat detection**; a missed heat wastes the straw and delays calving by three weeks.

It needs a trained technician, a reliable nitrogen supply and disciplined records.

One popular bull used too widely can narrow the gene pool and raise inbreeding across a region.

AI cannot correct poor feed, poor housing or disease, so it never replaces management.

There is also a charge per service, whether or not the cow conceives.

### Worked Example: Cost per Pregnancy

A straw costs $20 and the technician charges $10, so each service costs $30.

At a conception rate of 60%, the cost per pregnancy = 30 ÷ 0.60 = $50.

At 50% the same service costs 30 ÷ 0.50 = $60, which shows why heat detection matters.

A bull bought for $3000 that sires 40 calves a year for four years costs 3000 ÷ 160 = $18.75 per calf, before feed and housing.

So a bull can be cheaper per calf on a large farm, while AI usually wins on genetic quality and on small herds.

### Worked Example: Straws to Order

A 120-cow herd is inseminated twice per cow on average.

Straws needed = 120 × 2 = 240.

At 20 straws per goblet, that is 240 ÷ 20 = 12 goblets.

Add 10% for breakage and repeats: 240 × 1.10 = 264 straws, which is 14 goblets.

### AI in Crops and in Other Livestock

The same principle is used in pigs, sheep, goats and horses, with species-specific equipment.

In poultry, **artificial insemination** allows one elite cockerel to fertilise many hens.

In crops, the equivalent is **hand pollination** and controlled crossing, not semen transfer.

The common idea is the same: one selected parent is used far more widely than nature allows.`,
      groups: [
        {
          subTitle: "The AI Chain",
          bullets: [
            "**Collect:** semen from a proven sire at a licensed centre.",
            "**Extend and check:** dilute, then test concentration and motility.",
            "**Freeze and store:** straws at about −196 °C in liquid nitrogen.",
            "**Thaw and inseminate:** at oestrus, through the cervix, with a sterile gun.",
            "**Record:** straw, bull, date and later pregnancy check.",
          ],
        },
        {
          subTitle: "Why Farmers Use AI",
          bullets: [
            "**Wide gene spread:** one bull can sire thousands of calves a year.",
            "**Safety:** no dangerous bull on the farm and fewer injuries.",
            "**Disease control:** no venereal transmission and tested donor bulls.",
            "**Frozen semen:** dead or distant sires remain available.",
            "**Small herds:** elite genetics without buying a bull.",
          ],
        },
        {
          subTitle: "Requirements and Risks",
          bullets: [
            "**Heat detection** must be accurate or the straw is wasted.",
            "**Cold chain:** liquid nitrogen must be topped up and monitored.",
            "**Trained technician** and clean handling are essential.",
            "**Overuse** of one bull narrows the gene pool and raises inbreeding.",
            "**Cost per service** is paid whether or not conception occurs.",
          ],
        },
      ],
      examinerTips: [
        "Say AI places semen in the reproductive tract, not that it fertilises the egg directly.",
        "Give named benefits with the mechanism, such as no bull means no bull injuries.",
        "Quote the storage temperature, close to −196 °C, and the word liquid nitrogen.",
        "Explain wide gene spread with numbers, comparing natural service with straws.",
        "Balance the answer with at least one limitation, since the command word may be evaluate.",
      ],
      commonMistakes: [
        "Writing that AI guarantees pregnancy; conception still depends on timing and fertility.",
        "Confusing AI with embryo transfer, which moves an embryo rather than semen.",
        "Forgetting heat detection, then blaming the bull for failure.",
        "Claiming AI removes all disease risk; hygiene and testing still matter.",
        "Saying frozen semen can be stored in a domestic freezer at −18 °C.",
      ],
      recap: [
        "Describe how semen is collected, stored and used in artificial insemination. [4]",
        "State three benefits of AI to a small dairy farmer. [3]",
        "Explain how AI allows a dead bull to continue siring calves. [2]",
        "A straw costs $18 and the technician charges $12. At a 60% conception rate, calculate the cost per pregnancy. [3]",
        "Explain two risks of using one popular bull very widely. [2]",
      ],
    },
    {
      title: "Selective Breeding versus Genetic Modification",
      body: `### What Selective Breeding Can Do

Selective breeding rearranges alleles that already exist in the species or breed.

It can improve yield, resistance, hardiness and appearance steadily over generations.

It cannot move a gene from an unrelated species into a crop.

Its speed depends on variation, heritability and the length of the generation interval.

### What Genetic Modification Is

**Genetic modification (GM)** uses biotechnology to insert a chosen gene into an organism's DNA.

The gene may come from the same species, from a bacterium, or from another plant or animal.

A **vector**, often the bacterium Agrobacterium tumefaciens, carries the gene into a plant cell.

The cell is grown in **tissue culture** into a plantlet, which is tested and then multiplied.

The result is a **transgenic** organism, also called a genetically modified organism.

### Bt Crops

**Bt maize** and **Bt cotton** carry a gene from the soil bacterium Bacillus thuringiensis.

The plant makes a protein that is toxic to the larvae of moths and butterflies, such as stem borers and bollworms.

The larva stops feeding and dies, so the farmer sprays far less insecticide.

On many farms Bt cotton has cut sprays from eight or more per season to two or three.

### Other GM Traits

**Herbicide tolerance** lets a farmer spray a broad-spectrum herbicide over the crop without killing it.

**Golden rice** produces beta-carotene, a precursor of vitamin A, in the grain.

**Drought tolerance** and **salt tolerance** genes are being tested in maize, rice and wheat.

**Virus resistance** in papaya saved the Hawaiian industry from ringspot virus.

### Comparing the Two: Source of the Gene

Selective breeding uses genes from the same species, or from a relative that can cross naturally.

GM can move a gene across the species barrier, from a bacterium to a plant, in one step.

That is the clearest single difference, and it is the one examiners want.

### Comparing the Two: Speed and Precision

Selective breeding is slow and drags many unwanted genes along with the wanted one.

GM inserts a known gene, usually with a marker, so the change is precise and quick to make.

Even so, a GM variety still needs years of glasshouse and field trials before release.

### Comparing the Two: Cost and Control

Selective breeding can be done by any farmer with seed, stock and patience.

GM needs laboratories, patents and regulatory approval, so it is dominated by large companies and institutes.

GM seed usually has to be bought every season, which raises the farmer's recurrent cost.

### Arguments For GM

Higher yield and lower pesticide use on Bt crops.

Nutritional improvement, as in golden rice.

Tolerance of drought and salinity, which matters as climates change.

A single gene can solve a problem that conventional breeding cannot reach, such as a new virus.

### Concerns About GM

**Gene flow** can carry the gene into neighbouring crops or wild relatives.

Pests can evolve **resistance** to Bt, just as they do to sprays.

Seed cost and patents can tie smallholders to one supplier.

Consumer acceptance, labelling rules and organic certification remain contested.

Effects on non-target insects and on soil life are still being studied.

### Coexistence and Regulation

Most countries require trials, risk assessment and labelling before GM release.

Isolation distances and buffer strips separate GM and non-GM crops to limit gene flow.

Refuges of non-Bt crop are planted to slow resistance in pests.

Both technologies continue, and one farm may grow improved conventional varieties beside GM varieties.

### Worked Example: Spray Reduction

A conventional cotton field receives 8 insecticide sprays per season.

A Bt field receives 2 sprays.

Reduction = 8 − 2 = 6 sprays, which is 6 ÷ 8 × 100 = 75%.

At $25 per spray per hectare, the saving is 6 × 25 = $150 per hectare.

Against a seed premium of $90 per hectare, the net saving is $60 per hectare.

### Choosing Between the Two

Selective breeding suits traits that already vary within the crop and can be scored in the field.

GM suits a single clear trait, such as resistance to one insect or one herbicide.

Neither is faster than the other in the farmer's field; both need testing in local conditions.

The decision is agronomic, economic and often political, not simply scientific.`,
      figure: modificationArt,
      groups: [
        {
          subTitle: "Selective Breeding against GM",
          bullets: [
            "**Gene source:** same species or a crossable relative, against any species at all.",
            "**Method:** choosing parents over generations, against laboratory gene transfer.",
            "**Speed:** slow and imprecise, against a single precise insertion.",
            "**Regulation:** none beyond seed rules, against trials, approval and labelling.",
            "**Ownership:** saved seed and farm stock, against patented seed bought each season.",
          ],
        },
        {
          subTitle: "GM Traits in Use",
          bullets: [
            "**Bt maize and cotton:** a bacterial gene gives insect resistance.",
            "**Herbicide tolerance:** the crop survives a broad-spectrum spray.",
            "**Golden rice:** beta-carotene in the grain for vitamin A.",
            "**Virus resistance:** papaya saved from ringspot virus.",
            "**Drought and salt tolerance:** still under trial in cereals.",
          ],
        },
        {
          subTitle: "Points of Concern",
          bullets: [
            "**Gene flow** into neighbouring crops and wild relatives.",
            "**Resistance** evolving in the target pest.",
            "**Cost and patents** tying farmers to a supplier.",
            "**Consumer acceptance** and labelling requirements.",
            "**Non-target effects** on insects and soil organisms.",
          ],
        },
      ],
      examinerTips: [
        "Put the species barrier at the centre of any comparison, since it defines GM.",
        "Name the donor organism for a GM trait, such as Bacillus thuringiensis for Bt.",
        "Describe selective breeding as acting on existing variation, not as mixing species.",
        "Give one benefit and one concern when asked to evaluate, then reach a judgement.",
        "Use the phrase genetically modified organism correctly, and do not call it a hybrid.",
      ],
      commonMistakes: [
        "Calling an F1 hybrid a GM crop; hybridisation crosses within a species.",
        "Saying GM creates a new species, which it does not.",
        "Claiming GM crops need no trials because the gene is known.",
        "Writing that selective breeding can introduce a bacterial gene.",
        "Ignoring gene flow, which is the main biological concern in a comparison answer.",
      ],
      recap: [
        "Define genetic modification and state how it differs from selective breeding. [3]",
        "Describe how a gene is transferred into a plant cell. [3]",
        "Explain two benefits of Bt cotton to a farmer. [2]",
        "A conventional field needs 7 sprays and a Bt field needs 2. Calculate the percentage reduction. [2]",
        "Discuss one advantage and one concern of growing GM crops. [3]",
      ],
    },
  ],
};

export const AGRICULTURE_CHAPTER_9: Chapter = chapterNine;
