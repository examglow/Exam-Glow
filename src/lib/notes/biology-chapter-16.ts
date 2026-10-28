import type { Chapter } from "./types";
import { box, svgDiagram, tileRow } from "./diagram-kit";

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

const reproductionArt = artPanel([
  {
    src: "ch16-flower-cross-section.webp",
    alt: "Illustration of an insect-pollinated flower cut in cross section",
    caption: "A insect-pollinated flower in section",
  },
  {
    src: "ch16-fertilisation.webp",
    alt: "Illustration of sperm cells reaching the egg cell",
    caption: "Sperm reaching the egg",
  },
  {
    src: "ch16-pollen-pollination.webp",
    alt: "A bee carrying pollen between two flowers, dusting the sticky stigma",
    caption: "Insect pollination in action",
  },
]);

const uterusArt = artPanel([
  {
    src: "ch16-uterus-baby.webp",
    alt: "Cutaway of a uterus with a baby, the amniotic sac, the placenta and the umbilical cord",
    caption: "The fetus, placenta and umbilical cord",
  },
]);

/** Side-by-side comparison of the two human gametes. */
const gameteDiagram = svgDiagram(
  "Sperm cell compared with egg cell",
  `<text class="title" x="450" y="34" text-anchor="middle">The two human gametes</text>
    ${tileRow(
      [
        {
          title: "Sperm cell",
          body: "Made in the testes\nHead carries the nucleus\nand the enzyme acrosome\nMidpiece is full of mitochondria\nA tail (flagellum) swims\nCarries 23 chromosomes",
          cls: "blue",
        },
        {
          title: "Egg cell (ovum)",
          body: "Made in the ovaries\nMuch larger than a sperm\nNucleus carries 23 chromosomes\nCytoplasm holds food reserves\nCell membrane, no cell wall\nDoes not move by itself",
          cls: "pink",
        },
      ],
      60,
      { x: 24, w: 852, h: 210, gap: 16 },
    )}`,
  900,
  290,
);

/** From fertilisation in the oviduct to implantation and the placenta. */
const fertilisationDiagram = svgDiagram(
  "From fertilisation to implantation",
  `<text class="title" x="450" y="32" text-anchor="middle">Fertilisation to implantation</text>
    ${box(18, 96, 150, 64, "Fertilisation", "blue", "label")}
    ${box(198, 96, 150, 64, "Zygote", "main", "label")}
    ${box(378, 96, 150, 64, "Division", "main", "label")}
    ${box(558, 96, 150, 64, "Implantation", "pink", "label")}
    ${box(738, 96, 150, 64, "Placenta", "gold", "label")}
    <path class="arrow" d="M168 128h30"/>
    <path class="arrow" d="M348 128h30"/>
    <path class="arrow" d="M528 128h30"/>
    <path class="arrow" d="M708 128h30"/>
    <text class="small" x="93" y="180" text-anchor="middle">in the oviduct</text>
    <text class="small" x="273" y="180" text-anchor="middle">46 chromosomes</text>
    <text class="small" x="453" y="180" text-anchor="middle">early embryo</text>
    <text class="small" x="633" y="180" text-anchor="middle">into the uterine wall</text>
    <text class="small" x="813" y="180" text-anchor="middle">feeds the foetus</text>`,
  900,
  230,
);

/** The main events and hormones of one roughly 28-day cycle. */
const menstrualDiagram = svgDiagram(
  "The menstrual cycle",
  `<text class="title" x="450" y="34" text-anchor="middle">One cycle, about 28 days</text>
    ${tileRow(
      [
        {
          title: "Days 1-5",
          body: "Menstruation\nthe lining breaks down\nand is shed",
          cls: "pink",
        },
        {
          title: "Follicle phase",
          body: "FSH grows a follicle\nit releases oestrogen\nlining is rebuilt",
          cls: "blue",
        },
        {
          title: "Day about 14",
          body: "LH surge triggers\novulation; the egg\nis released",
          cls: "gold",
        },
        {
          title: "After ovulation",
          body: "Corpus luteum makes\nprogesterone; lining\nstays thick",
          cls: "main",
        },
        {
          title: "No pregnancy",
          body: "Hormones fall;\nlining breaks down\nand the cycle repeats",
          cls: "purple",
        },
      ],
      62,
      { x: 24, w: 852, h: 160, gap: 12 },
    )}`,
  900,
  268,
);

const ch16: Chapter = {
  number: 16,
  title: "Reproduction",
  intro:
    "Reproduction makes new individuals and so keeps a species from becoming extinct. This chapter compares sexual with asexual reproduction and describes the male and female systems and their gametes.\n\nIt then follows a human pregnancy from fertilisation and implantation through the menstrual cycle to birth. It finishes with contraception and with sexually transmitted infections, including HIV/AIDS.",
  subheadings: [
    {
      title: "Sexual and Asexual Reproduction",
      body: `### Sexual reproduction\n**Sexual reproduction** involves the **fusion of two gametes** to form a **zygote**. Because the offspring inherits a mix of genes from two parents, it is genetically **different** from either parent.\n\n### Asexual reproduction\n**Asexual reproduction** involves **no fusion of gametes** and no joining of sex cells. One parent produces offspring that are genetically **identical** clones.\n\n### Examples of asexual reproduction\nAsexual reproduction is seen in **bacteria dividing by binary fission**, potato plants growing from **tubers**, and simple animals such as **hydra** reproducing by **budding**.\n\n### The trade-off\n\nAsexual reproduction is **fast and needs no mate**, so a single organism can found a new population.\n\nSexual reproduction is slower and needs two parents, but it creates **variation**, which improves the chance of surviving a changed environment.`,
      groups: [
        {
          subTitle: "Sexual Reproduction",
          bullets: [
            "**Gametes fuse** to form a zygote, combining genetic material from two parents.",
            "Offspring are **genetically variable**, with none identical to a parent.",
            "Usually needs **two parents** and the production of gametes.",
            "**Variation** helps the species survive environmental change and disease.",
          ],
        },
        {
          subTitle: "Asexual Reproduction",
          bullets: [
            "**One parent only**, and no gametes are formed or fused.",
            "Offspring are **genetically identical clones** of the parent.",
            "**Binary fission:** the way a bacterium splits into two identical cells.",
            "**Tubers and budding:** potatoes regrow from tubers and hydra grow offspring by budding.",
            "It is **fast and needs no mate**, but the low variation can let one disease wipe out all.",
          ],
        },
        {
          subTitle: "Why Variation Matters",
          bullets: [
            "**Genetic variation** means some individuals may survive a new disease or climate.",
            "A clone population has **little variation**, so one threat can kill every member.",
            "Sexual reproduction shuffles the genes, which is the main source of this variation.",
          ],
        },
      ],
      figure:
        "| Feature | Sexual reproduction | Asexual reproduction |\n| --- | --- | --- |\n| Number of parents | Two | One |\n| Gametes involved | Yes, they fuse | No |\n| Offspring | Genetically different | Genetically identical |\n| Speed / energy | Slower; needs a mate | Fast; no mate needed |\n| Variation | High, so better chance of surviving change | Low, so a disease can wipe out all |" +
        "\n\n" +
        reproductionArt,
      examinerTips: [
        "Anchor the sexual definition on the words **'fusion of gametes'** and **'genetic variation'**.",
        "When comparing, give **matched pairs** (parents, gametes, offspring variation) rather than describing each in isolation.",
        "Name at least one real example of asexual reproduction, such as **binary fission in bacteria**, to secure the example mark.",
        "Link the advantage of sexual reproduction explicitly to **survival of the species** in a changing environment.",
      ],
      commonMistakes: [
        "Thinking asexual means no DNA is copied. It means **no gametes fuse**; the DNA is copied exactly.",
        "Naming any single-parent process as sexual. It is sexual only **if gametes fuse**.",
        "Saying asexual reproduction produces variation. It produces **identical clones**.",
        "Confusing asexual reproduction with fertilisation. Fertilisation is the fusion of gametes, which asexual reproduction never involves.",
      ],
      recap: [
        "Define asexual reproduction. [2]",
        "State two differences between sexual and asexual reproduction. [2]",
        "Explain why genetic variation from sexual reproduction can help a species survive a change of environment. [3]",
        "Name one example of asexual reproduction in each of a bacterium, a plant and a simple animal. [3]",
      ],
    },
    {
      title: "The Reproductive Systems and Gametes",
      body: `### The two systems\nThe **male system** produces sperm and delivers them into the female system. The **female system** produces eggs, receives the sperm, and houses the developing foetus.\n\n### The male organs\n\nThe **testes** produce sperm and the hormone **testosterone**, and they sit in the **scrotum**, which keeps them slightly below body temperature.\n\nMature sperm are stored in the **epididymis** and carried along the **sperm duct**.\n\n### Delivery in the male\nSperm leave through the **urethra**, the tube that also carries urine out of the body. **Semen** is the fluid sperm are carried in, made by the glands along the duct.\n\n### The female organs\nThe **ovaries** produce eggs (ova) and the hormones **oestrogen** and **progesterone**. The **oviduct (fallopian tube)** carries the egg toward the uterus and is where fertilisation normally happens.\n\n### The uterus and birth canal\n\nThe **uterus (womb)** houses the developing foetus, and its inner lining is the **endometrium**.\n\nThe **cervix** is the ring of muscle at the neck of the uterus, and the **vagina** is the birth canal where sperm are deposited.\n\n### The two gametes\n\nA **sperm** has a head carrying the nucleus and the enzyme-filled **acrosome**, a midpiece packed with **mitochondria**, and a **tail (flagellum)** for swimming.\n\nAn **egg** is a much larger cell with a nucleus, food reserves in its cytoplasm, and a membrane but no cell wall.`,
      groups: [
        {
          subTitle: "The Male System",
          bullets: [
            "**Testes:** produce **sperm** and the hormone **testosterone**.",
            "**Scrotum:** the sac holding the testes slightly **below body temperature**, which sperm production needs.",
            "**Epididymis:** stores and matures the sperm.",
            "**Sperm duct (vas deferens):** carries mature sperm toward the urethra.",
            "**Urethra:** the tube carrying sperm, and urine, out of the body.",
            "**Semen:** sperm plus the nutritive fluid made by the glands.",
          ],
        },
        {
          subTitle: "The Female System",
          bullets: [
            "**Ovaries:** produce eggs (ova) and the hormones **oestrogen** and **progesterone**.",
            "**Oviduct (fallopian tube):** carries the egg to the uterus and is the site of **fertilisation**.",
            "**Uterus (womb):** houses the developing foetus.",
            "**Endometrium:** the inner uterine lining that thickens and is shed each cycle.",
            "**Cervix:** the ring of muscle at the neck of the uterus.",
            "**Vagina:** the birth canal and the place sperm are deposited.",
          ],
        },
        {
          subTitle: "The Two Gametes",
          bullets: [
            "**Sperm head:** carries the **nucleus (23 chromosomes)** and the **acrosome** of digestive enzymes.",
            "**Sperm midpiece:** packed with **mitochondria** that release energy for swimming.",
            "**Sperm tail (flagellum):** propels the sperm toward the egg.",
            "**Egg (ovum):** a large cell with a **23-chromosome nucleus**, food reserves, and a membrane but **no cell wall**.",
          ],
        },
      ],
      figure: gameteDiagram,
      examinerTips: [
        "Label the sperm **head, midpiece and tail**, and name the **acrosome** and **mitochondria**, when structure is asked for.",
        "State the site of fertilisation as the **oviduct**, not the uterus; this is a very common mark.",
        "When listing the female organs, give **ovary, oviduct, uterus, cervix, vagina** in order with one function each.",
        "Explain that the **scrotum keeps the testes cooler** than body temperature, because sperm formation needs the lower temperature.",
      ],
      commonMistakes: [
        "Saying the scrotum keeps the testes warm. It keeps them slightly **cooler** than body temperature.",
        "Giving the egg a cell wall. Animal gametes have a **cell membrane and no wall**.",
        "Placing fertilisation in the uterus. It normally occurs in the **oviduct**.",
        "Confusing the sperm duct with the urethra. The **sperm duct** carries sperm from the testes; the **urethra** carries sperm out of the body.",
      ],
      recap: [
        "Name the organ where eggs are produced and the organ where sperm are produced. [2]",
        "Describe the structure of a sperm cell. [4]",
        "State the name of the uterine lining that is shed during menstruation. [1]",
        "Explain why the testes are held in the scrotum outside the body. [2]",
      ],
    },
    {
      title: "Fertilisation and Implantation",
      body: `### What fertilisation is\n**Fertilisation** is the fusion of the nucleus of a sperm with the nucleus of an egg cell to form a **zygote**. It normally occurs in the **oviduct**.\n\n### The chromosomes are restored\nEach gamete carries **23 chromosomes**, so when the nuclei fuse the zygote has the full **46**. This keeps the chromosome number constant from generation to generation.\n\n### Only one sperm wins\nA very large number of sperm are deposited, but usually only one fertilises the egg. Once one sperm enters, the egg's membrane **changes so no others can**.\n\n### From zygote to embryo\nThe zygote divides repeatedly as it travels down the oviduct, forming a ball of cells — the **early embryo**. This cell division uses the energy stored in the egg's cytoplasm.\n\n### Implantation\nAbout a week later the embryo reaches the uterus and **implants** into the thick, blood-rich **endometrium**. Implantation, not fertilisation, marks the true start of a pregnancy.\n\n### The placenta forms\n\nThe **placenta** then develops and exchanges nutrients, oxygen and waste between the mother's blood and the foetus's blood, without the two supplies mixing.\n\nIt also secretes hormones that maintain the pregnancy.\n\n### The supporting structures\nThe **umbilical cord** joins the foetus to the placenta, and the foetus grows inside the **amniotic sac**, whose fluid cushions it against knocks.`,
      groups: [
        {
          subTitle: "Fertilisation",
          bullets: [
            "**Definition:** the fusion of a sperm nucleus with an egg nucleus to form a zygote.",
            "**Site:** normally the **oviduct (fallopian tube)**.",
            "**Chromosome number:** 23 from the sperm plus 23 from the egg makes **46** in the zygote.",
            "**One sperm only:** once a sperm enters, the egg membrane changes to block the rest.",
            "Fertilisation restores the **diploid** number, keeping it constant across generations.",
          ],
        },
        {
          subTitle: "From Zygote to Embryo",
          bullets: [
            "The zygote **divides repeatedly** as it moves down the oviduct.",
            "It forms a ball of cells, the **early embryo**.",
            "The embryo **implants** into the thick, blood-rich **endometrium** about a week later.",
            "Implantation, not fertilisation, is the true start of a pregnancy.",
          ],
        },
        {
          subTitle: "The Placenta and Its Cord",
          bullets: [
            "**Placenta:** the organ of exchange between the mother and the foetus.",
            "**Oxygen and nutrients** pass from the mother to the foetus.",
            "**Carbon dioxide and urea** pass from the foetus to the mother for removal.",
            "The mother's and foetus's **blood supplies do not mix**; exchange is across a barrier.",
            "**Umbilical cord** joins the foetus to the placenta; the **amniotic sac** cushions it in fluid.",
          ],
        },
      ],
      figure: fertilisationDiagram,
      examinerTips: [
        "Keep **fertilisation (in the oviduct)** and **implantation (in the uterine wall)** as two distinct events with two distinct sites.",
        "For the placenta, say **'exchange'** and list what moves: oxygen and nutrients one way, carbon dioxide and urea the other.",
        "Always give the chromosome arithmetic: **23 + 23 = 46**, and name 46 as the diploid number.",
        "State that the two blood supplies **do not mix**, and that exchange happens across the placental barrier.",
      ],
      commonMistakes: [
        "Saying the zygote receives 46 chromosomes from each parent. It is **23 plus 23, giving 46 in total**.",
        "Claiming the mother's and baby's blood mix freely. They **do not**; exchange is across the placental barrier.",
        "Placing fertilisation in the uterus. Fertilisation is in the **oviduct**; only implantation is in the uterus.",
        "Calling the single-celled zygote a foetus. It becomes an embryo, then a foetus, after many divisions and implantation.",
      ],
      recap: [
        "Define fertilisation. [2]",
        "State where fertilisation normally happens in humans. [1]",
        "Explain how the chromosome number stays at 46 from one generation to the next. [3]",
        "Describe the role of the placenta. [4]",
      ],
    },
    {
      title: "The Menstrual Cycle",
      body: `### What the cycle is\n\nThe **menstrual cycle** is the roughly **28-day cycle** of events in the uterus and ovaries of a human female, from **puberty to the menopause**.\n\nIt prepares the body for a possible pregnancy each month.\n\n### Two organs, four hormones\nThe cycle is controlled by hormones from the **pituitary gland** and the **ovaries** working together. The four key hormones are **FSH, oestrogen, LH and progesterone**.\n\n### FSH and the follicle\n**FSH** from the pituitary makes a **follicle** in the ovary mature. As the follicle matures, its cells secrete **oestrogen**.\n\n### Oestrogen rebuilds the lining\n**Oestrogen** repairs and thickens the uterine lining after a period, and its rising level **triggers the LH surge**. This shows one hormone stimulating another gland.\n\n### LH and ovulation\nThe **LH** surge from the pituitary causes **ovulation**, the release of the egg from the follicle, around **day 14**, midway through the cycle.\n\n### Progesterone maintains the lining\nThe emptied follicle becomes the **corpus luteum**, which secretes **progesterone**. Progesterone **maintains the thick lining**, ready for an embryo to implant.\n\n### If no pregnancy occurs\n\nWithout pregnancy the hormone levels fall, the lining **breaks down and is shed** as menstruation, and a new cycle begins.\n\nThe fall in progesterone is what lets the lining break down.`,
      groups: [
        {
          subTitle: "The Four Hormones",
          bullets: [
            "**FSH (from the pituitary):** makes a follicle in the ovary mature.",
            "**Oestrogen (from the follicle):** rebuilds and thickens the uterine lining and triggers the LH surge.",
            "**LH (from the pituitary):** causes **ovulation**, the release of the egg, around day 14.",
            "**Progesterone (from the corpus luteum):** maintains the thick uterine lining ready for an embryo.",
            "Name every hormone with its **source organ** and its **single main action**.",
          ],
        },
        {
          subTitle: "The Cycle in the Uterus",
          bullets: [
            "**Days 1-5 (menstruation):** the lining breaks down and is shed.",
            "**Days 6-13:** under oestrogen the lining is rebuilt and thickens.",
            "**Day 14:** ovulation releases the egg into the oviduct.",
            "**Days 15-28:** progesterone keeps the lining thick and blood-rich.",
            "If no pregnancy follows, hormone levels fall and a new period begins.",
          ],
        },
        {
          subTitle: "The Cycle in the Ovary",
          bullets: [
            "**Follicle growth:** FSH drives a follicle to mature and its cells to make oestrogen.",
            "**Ovulation:** the LH surge makes the mature follicle burst and release its egg.",
            "**Corpus luteum:** the emptied follicle becomes this gland, which secretes progesterone.",
            "**If no implantation occurs,** the corpus luteum breaks down and progesterone falls.",
          ],
        },
      ],
      figure: menstrualDiagram,
      examinerTips: [
        "Name each hormone with its **source organ** and its **single main action**; this is exactly what these questions mark.",
        "Read cycle graphs for the hormone peaks and tie each to the event, such as the **LH peak matching ovulation on day 14**.",
        "Keep **oestrogen (rebuilds the lining)** and **progesterone (maintains the lining)** clearly separate in your answer.",
        "State the cycle length as **about 28 days** and place **ovulation at day 14**, not the start.",
      ],
      commonMistakes: [
        "Saying oestrogen maintains the lining throughout the cycle. **Progesterone** maintains it after ovulation.",
        "Placing ovulation at the start of the cycle. It is around **day 14**, midway.",
        "Attributing FSH to the ovary. **FSH comes from the pituitary** and acts on the ovary.",
        "Saying the corpus luteum makes FSH. It secretes **progesterone**.",
      ],
      recap: [
        "Name the hormone that causes ovulation and the organ that releases it. [2]",
        "Describe the role of progesterone in the menstrual cycle. [2]",
        "Explain what happens to the uterine lining if the egg is not fertilised. [3]",
        "Name the four hormones of the menstrual cycle and state the source organ of each. [4]",
      ],
    },
    {
      title: "Pregnancy and Pre-birth Development",
      figure: uterusArt,
      body: `### How long pregnancy lasts\n**Pregnancy** lasts about **nine months** in humans. The developing organism is called an **embryo** for the early weeks and a **foetus** thereafter.\n\n### The embryo stage\nIn the **embryo** stage the main organs and body systems form. This is the period most sensitive to harmful substances, because structures are being built.\n\n### The foetus stage\nIn the **foetus** stage the organs grow larger and mature while the body gains mass rapidly. The foetus is now recognisable as a miniature human.\n\n### Protection and supply\n\nThe foetus is cushioned in the **amniotic fluid** inside the **amniotic sac**.\n\nIt is fed and oxygenated through the **placenta and umbilical cord**, which link it to the mother's blood supply.\n\n### Caring for a pregnancy\nA balanced diet, rest and **folic-acid** supplements support the baby's development. The mother avoids **alcohol, smoking and recreational drugs**, because these can pass across the placenta and harm the foetus.\n\n### Infection and blood group\n\nSome infections, such as **rubella**, can cross the placenta and damage the foetus, which is why vaccination before pregnancy matters.\n\n**Anti-D** is given to a rhesus-negative mother to stop her blood reacting against a rhesus-positive baby.`,
      groups: [
        {
          subTitle: "Embryo and Foetus",
          bullets: [
            "**Embryo stage:** the early weeks, when the main organs and body systems form.",
            "**Foetus stage:** the later weeks, when the organs grow larger and mature.",
            "The **embryo stage is most vulnerable** to harmful substances, because structures are being built.",
            "Pregnancy lasts about **nine months** in total.",
          ],
        },
        {
          subTitle: "Structures That Protect and Feed",
          bullets: [
            "**Amniotic sac and fluid:** cushion the foetus against physical shocks.",
            "**Placenta:** the organ of exchange for oxygen, nutrients and waste.",
            "**Umbilical cord:** the vessel link joining the foetus to the placenta.",
            "The placenta also secretes **hormones** that maintain the pregnancy.",
          ],
        },
        {
          subTitle: "Caring for a Pregnancy",
          bullets: [
            "**Folic acid and a balanced diet** support healthy development of the baby.",
            "**Alcohol, smoking and drugs** cross the placenta and can cause low birth mass or damage.",
            "**Rubella and some infections** can harm the foetus, so vaccination before pregnancy matters.",
            "**Anti-D** protects a rhesus-negative mother from reacting against a rhesus-positive baby.",
          ],
        },
      ],
      examinerTips: [
        "Name the protective structures **together** — amniotic sac and fluid, placenta and umbilical cord — and say what each does.",
        "Justify a healthy-pregnancy point with a **mechanism**, such as alcohol reaching the foetus via the placenta.",
        "Keep **embryo** (organs forming) and **foetus** (organs growing and maturing) as two named stages.",
        "Link **folic acid** to development and **Anti-D** to rhesus blood-group protection when those details are asked.",
      ],
      commonMistakes: [
        "Calling everything a foetus from fertilisation. It is an **embryo first**, then a foetus.",
        "Saying drugs cannot reach the baby. Many **pass across the placenta**.",
        "Confusing the umbilical cord with the placenta. The **cord** is the connecting vessel; the **placenta** is the organ of exchange.",
        "Saying the amniotic fluid feeds the baby. It **cushions** the foetus; the placenta does the feeding.",
      ],
      recap: [
        "State the difference between an embryo and a foetus. [2]",
        "Describe two structures that protect or feed the developing foetus. [4]",
        "Explain why a pregnant woman is advised not to drink alcohol or smoke. [3]",
        "Explain the purpose of giving Anti-D to a rhesus-negative mother. [2]",
      ],
    },
    {
      title: "Contraception and Sexually Transmitted Infections",
      body: `### What contraception does\n**Contraception** prevents fertilisation or implantation, and so prevents pregnancy. Different methods act at different points in the reproductive process.\n\n### Barrier methods\n**Condoms**, male and female, **block sperm from reaching the egg**. They are the only common method that also **reduces the spread of STIs**, because they keep bodily fluids apart.\n\n### Hormonal and other methods\n**Hormonal methods** — the pill, implants or injections — **stop ovulation** and thicken the cervical mucus. An **intra-uterine device (IUD)** prevents an embryo from **implanting** in the uterus.\n\n### Permanent and natural methods\n**Sterilisation**, a vasectomy in males or blocking the oviducts in females, is a **permanent** method. **Fertility-awareness and withdrawal** are less reliable; **abstinence** prevents both pregnancy and STI spread.\n\n### What STIs are\n**Sexually transmitted infections (STIs)** spread through sexual contact, and they are not all stopped by the same method. Bacterial STIs can often be cured; viral STIs cannot.\n\n### HIV and AIDS\n**HIV** is a virus that attacks the body's **white blood cells**, so the person cannot fight off other infections. The late, severe stage of the infection is called **AIDS**.\n\n### Transmission and prevention\n\nHIV spreads by **unprotected sex, shared needles or contaminated blood, and from mother to child**. It is **not** spread by ordinary social contact.\n\nThere is no cure, but **antiretroviral drugs** control the virus and greatly prolong life.`,
      groups: [
        {
          subTitle: "Methods of Contraception",
          bullets: [
            "**Barrier methods** — condoms and female condoms — block sperm reaching the egg and also **reduce STI spread**.",
            "**Hormonal methods** — the pill, implants or injections — stop ovulation and thicken cervical mucus.",
            "**Intra-uterine devices (IUDs)** prevent implantation of an embryo in the uterus.",
            "**Sterilisation** — vasectomy in males, or blocking the oviducts in females — is a permanent method.",
            "**Fertility-awareness and withdrawal** are less reliable; **abstinence** prevents pregnancy and STIs.",
            "Only the **condom** works against both pregnancy and STIs at the same time.",
          ],
        },
        {
          subTitle: "STIs, Including HIV/AIDS",
          bullets: [
            "Bacterial STIs such as **gonorrhoea** and **chlamydia** can often be cured with **antibiotics**.",
            "Viral STIs such as **herpes** and **HIV** cannot be cured by antibiotics.",
            "**HIV** attacks the body's **white blood cells**, so the person cannot fight off other infections.",
            "**AIDS** is the late, severe stage of an untreated HIV infection.",
            "HIV spreads by **unprotected sex, shared needles or contaminated blood, and mother to child**.",
            "HIV is **not** spread by hugging, sharing toilets or insect bites.",
          ],
        },
      ],
      examinerTips: [
        "When asked which method stops STIs as well as pregnancy, name the **barrier method (condom)**; pills and IUDs do not.",
        "Give three real routes for HIV transmission and one clear 'not a route' to show you separate fact from myth.",
        "Keep **HIV (the virus)** and **AIDS (the disease stage)** as two distinct terms in any definition.",
        "State that antibiotics cure bacterial STIs but have **no effect** on viral STIs such as HIV.",
      ],
      commonMistakes: [
        "Confusing HIV with AIDS. HIV is the **virus**; AIDS is the **disease stage** the virus can cause.",
        "Claiming antibiotics cure all STIs. They do not work on **viral** STIs such as HIV.",
        "Believing HIV spreads through casual social contact. It does not.",
        "Saying the pill protects against STIs. Only **barrier methods** reduce their spread.",
      ],
      recap: [
        "Describe how a condom helps prevent pregnancy. [2]",
        "Explain why barrier methods are preferred when STI prevention matters. [2]",
        "State three ways HIV can be transmitted between people. [3]",
        "Explain the difference between HIV and AIDS. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_16: Chapter = ch16;
