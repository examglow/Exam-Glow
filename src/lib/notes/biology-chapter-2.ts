import type { Chapter } from "./types";
import { labelledRows, svgDiagram, tileRow } from "./diagram-kit";

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

const cellIllustrations = artPanel([
  {
    src: "ch02-animal-cell.webp",
    alt: "Illustration of an animal cell showing its membrane, cytoplasm and nucleus",
    caption: "Animal cell",
  },
  {
    src: "ch02-plant-cell.webp",
    alt: "Illustration of a plant cell showing its wall, chloroplasts and vacuole",
    caption: "Plant cell",
  },
]);

const microscopeArt = artPanel([
  {
    src: "ch02-light-microscope.webp",
    alt: "A compound light microscope with eyepiece, objective lenses and stage",
    caption: "The compound light microscope",
  },
]);

const tissueTypesArt = artPanel([
  {
    src: "ch02-tissues.webp",
    alt: "Four micrographs: epithelium, muscle fibre, xylem vessels and a neurone",
    caption: "Four tissues: epithelium, muscle, xylem and a neurone",
  },
]);

/** Cell, tissue, organ, system, organism — one tile per level, animal example then plant example. */
const levelsOfOrganisationDiagram = svgDiagram(
  "Levels of organisation in an organism",
  `<text class="title" x="450" y="32" text-anchor="middle">From one cell to a whole organism</text>
  ${tileRow(
    [
      { title: "Cell", cls: "main", body: "smallest unit\nmuscle cell\nguard cell" },
      { title: "Tissue", cls: "blue", body: "one cell type\nmuscle tissue\nxylem tissue" },
      { title: "Organ", cls: "gold", body: "tissues together\nheart, stomach\nleaf, root" },
      { title: "System", cls: "pink", body: "organs in a task\ncirculatory\nnot in plants" },
      { title: "Organism", cls: "purple", body: "all parts working\na human\na sunflower" },
    ],
    52,
    { h: 168 },
  )}
  <text class="small" x="450" y="248" text-anchor="middle">Two examples in each tile: an animal example first, then a plant example.</text>`,
  900,
  275,
);

/** Two annotation columns: structures every cell has, structures only plant cells have. */
const cellPartsDiagram = svgDiagram(
  "Parts found in both cells and parts found only in plant cells",
  `<text class="title" x="450" y="32" text-anchor="middle">Animal cell and plant cell at a glance</text>
  <text class="label" x="24" y="66">In both</text>
  ${labelledRows(
    [
      ["Membrane", "controls what enters"],
      ["Cytoplasm", "reactions happen here"],
      ["Nucleus", "holds the DNA"],
      ["Mitochondrion", "releases energy"],
      ["Ribosome", "assembles protein"],
    ],
    24,
    100,
    32,
  )}
  <path class="line" d="M448 58V252"/>
  <text class="label" x="474" y="66">Plant only</text>
  ${labelledRows(
    [
      ["Cell wall", "rigid, of cellulose"],
      ["Chloroplast", "traps light energy"],
      ["Vacuole", "large and permanent"],
      ["Cell sap", "sugars and salts"],
    ],
    474,
    100,
    32,
  )}
  <text class="small" x="24" y="276">An animal cell has no wall, no chloroplast and at most a small, temporary vacuole.</text>`,
  900,
  300,
);

/** The three rearrangements of the magnification relationship, plus the two unit rules. */
const magnificationDiagram = svgDiagram(
  "Magnification, image size and actual size",
  `<text class="title" x="450" y="32" text-anchor="middle">Cover the letter you want to find</text>
  ${tileRow(
    [
      {
        title: "m = i divided by a",
        cls: "gold",
        body: "finds magnification\nimage over actual\nwrite it as times",
      },
      {
        title: "a = i divided by m",
        cls: "blue",
        body: "finds actual size\nmeasure the image\nreport the answer in micrometres",
      },
      {
        title: "i = a multiplied by m",
        cls: "main",
        body: "finds image size\nreal size scaled up\nthe drawing measurement",
      },
    ],
    52,
    { h: 152 },
  )}
  ${tileRow(
    [
      { title: "Units", cls: "panel", body: "1 mm = 1000 micrometres\nconvert before dividing" },
      {
        title: "Total power",
        cls: "panel",
        body: "eyepiece times objective\nten and forty give four hundred",
      },
    ],
    214,
    { h: 96 },
  )}`,
  900,
  328,
);

const chapterTwo: Chapter = {
  number: 2,
  title: "Organisation of the Organism",
  intro: `Every organism is built in layers: cells group into tissues, tissues build organs, organs run systems, and the systems make one living individual.\n\nThis chapter fixes that ladder in order, then looks at the machinery inside the cell: which parts animal and plant cells share, which only plants have, and what each organelle actually does.\n\nIt finishes with the light microscope, and how it turns an invisible cell into a measurable image.`,
  subheadings: [
    {
      title: "Levels of Organisation",
      body: `### The Order You Must Be Able to Write Out\nA **cell** is the smallest unit that carries out all the processes of life.\n\nEverything above it is built by grouping cells and giving the group a job.\n\n| Level | Definition | Animal example | Plant example |\n| --- | --- | --- | --- |\n| Cell | the basic structural and functional unit of life | muscle cell, gland cell, red blood cell | guard cell, mesophyll cell, root hair cell |\n| Tissue | a group of similar cells with the same structure and the same function | muscle tissue, ciliated epithelium, nerve tissue | xylem, phloem, epidermis, cambium |\n| Organ | a group of different tissues working together to perform one function | heart, stomach, lung, brain, small intestine | leaf, flower, root, stem |\n| System | a group of organs that cooperate to carry out one overall process | digestive, circulatory, respiratory, nervous | not used — plants stop at organ level |\n| Organism | one individual, whose systems interact to keep it functioning | a human, a grasshopper | a sunflower, a fern |`,
      figure: levelsOfOrganisationDiagram,
      groups: [
        {
          bullets: [
            "**Tissue:** identified by one cell type doing one job, so cardiac muscle and plain muscle are different tissues even though both contract.",
            "**Organ:** must contain more than one tissue type; a leaf holds epidermis, mesophyll, xylem and phloem, which is why it counts as an organ.",
            "**System:** organs only, arranged to complete one process such as digestion or circulation.",
            "**Organism:** the level at which all the systems interact and the individual can live independently.",
            "**Stomach as an organ:** smooth muscle, glandular tissue and inner epithelium sit together in one wall.",
            "**Glandular tissue** lines the stomach and small intestine and secretes the enzymes and mucus of digestion.",
            "**Villi** are folds of the epithelial tissue of the small intestine, not organs in their own right.",
          ],
        },
        {
          subTitle: "The Single-Celled Exception",
          bullets: [
            "*Amoeba* and *Chlamydomonas* are one cell that is also one whole organism, so that cell performs feeding, excretion, sensitivity and reproduction by itself.",
            "Because a unicellular organism has no groups of cells, the terms **tissue** and **organ** do not apply to it.",
            "Multicellular organisms gain from division of labour: specialised cells do their own job well, but no single cell can survive alone.",
            "*Chlamydomonas* has a cell wall, a chloroplast and a flagellum, so one cell photosynthesises, moves and reproduces.",
            "*Amoeba* feeds and moves using **pseudopodia**, temporary extensions of the cytoplasm.",
            "If one cell of a unicellular organism fails a life process there is no other cell to take over, so the organism dies.",
          ],
        },
      ],
      examinerTips: [
        "When asked to 'name the levels of organisation', write all five in order and attach an example to each; a bare list usually scores fewer marks than a list with examples.",
        "Keep tissue and organ apart in your wording: a tissue is one kind of cell, an organ is several kinds of tissue in one structure.",
        "For 'give an example of a tissue', name the tissue and say where it is found; cardiac muscle in the heart wall is safer than the single word muscle.",
        "A named system should come with its organs: heart, blood and vessels for the circulatory system, not just the words blood system.",
      ],
      commonMistakes: [
        "Inventing a plant system. There is no 'plant digestive system'; roots, stems and leaves are organs, and the transport work is done by the tissues xylem and phloem.",
        "Describing blood as an organ. It is a fluid connective tissue — cells suspended in plasma.",
        "Using 'system' for a group of cells. A system is built from organs, never directly from cells.",
        "Writing cell → tissue → organ → organism and dropping the system level; for an animal the sequence has all five stages.",
      ],
      recap: [
        "Define the terms tissue, organ and system. [3]",
        "Name the levels of organisation in order, starting from cell. [5]",
        "Give one plant tissue and one plant organ, and state where each is found. [2]",
        "Explain why *Amoeba* is described as having no tissues or organs. [2]",
      ],
    },
    {
      title: "Animal and Plant Cell Structure",
      body: `### What Is Common and What Is Extra\nAnimal and plant cells are both **eukaryotic**, with their DNA enclosed in a nucleus. Plant cells then add a cellulose wall, chloroplasts and a large permanent vacuole.\n\n| Structure | Animal cell | Plant cell | Job it does |\n| --- | --- | --- | --- |\n| Cell membrane | present | present, inside the wall | partially permeable barrier; controls what enters and leaves |\n| Cytoplasm | present | present | gel-like medium in which the cell's chemical reactions occur |\n| Nucleus | present in most cells | present | carries the DNA and directs the cell's activities |\n| Mitochondria | present | present | site of aerobic respiration, releasing energy for the cell |\n| Ribosomes | present | present | make proteins from amino acids |\n| Cell wall | absent | present, made of cellulose | rigid framework that gives shape and stops the cell bursting |\n| Chloroplasts | absent | present in green parts | contain chlorophyll and carry out photosynthesis |\n| Vacuole | small and temporary, often absent | one large permanent vacuole | holds cell sap and helps keep the cell firm |`,
      figure: cellPartsDiagram + "\n\n" + cellIllustrations,
      groups: [
        {
          subTitle: "Reading the Wall Correctly",
          bullets: [
            "**The wall is freely permeable.** Dissolved substances pass through it without being screened, so it never controls what enters the cell — that is the membrane's job.",
            "**The wall is built of cellulose**, a carbohydrate; naming the substance rather than saying 'hard layer' is what earns the mark.",
            "**The wall produces turgor.** When water enters the vacuole, the wall resists the swelling and the pressure generated firms the cell.",
            "**Plant cells keep their shape; animal cells change theirs.** White blood cells and muscle cells can alter form because no wall constrains them.",
            "The membrane is **partially permeable**, the exact phrase mark schemes accept; it screens what crosses, the wall does not.",
            "Adjacent walls are cemented together by the **middle lamella**, a thin pectin layer between the cells.",
            "**Plasmodesmata** are cytoplasmic channels through the wall that connect one plant cell to the next.",
          ],
        },
        {
          subTitle: "Structures That Only Some Cells Show",
          bullets: [
            "**Chloroplasts** occur in cells of leaves and green stems only. Roots, petals and every animal cell have none.",
            "**A mature mammalian red blood cell has no nucleus**, and a xylem vessel is dead at maturity, so 'every cell contains a nucleus' is false.",
            "**Bacterial cells** are prokaryotic: wall, membrane, cytoplasm, ribosomes and free DNA, with no nucleus and no mitochondria; some carry plasmids.",
            "**Onion bulb epidermis** has walls and vacuoles but no chloroplasts, because the bulb grows underground.",
            "Fungal walls are made of **chitin**, not cellulose, so a wall alone does not prove a cell is a plant cell.",
            "A **guard cell** is the one epidermal cell with chloroplasts; the surrounding cells usually lack them.",
          ],
        },
      ],
      examinerTips: [
        "Label only what the picture actually shows. Drawing chloroplasts onto a cell that has none and then calling it a plant cell contradicts your own diagram.",
        "If a question asks what the wall is made of, answer cellulose. 'Carbohydrate' or 'fibre' is too vague to score.",
        "For a compare question, give one shared feature and one differing feature and keep the two statements clearly separate.",
        "To identify a cell from a photograph, name two structures you can actually see, such as a wall and a vacuole, before calling it a plant cell.",
      ],
      commonMistakes: [
        "Attributing control of movement to the cell wall instead of the cell membrane.",
        "Placing chloroplasts in a root cell, or drawing a large vacuole in an animal cell.",
        "Saying plant cells have a nucleus and animal cells do not; both are eukaryotic.",
        "Swapping the jobs of the chloroplast and the vacuole; the chloroplast photosynthesises and the vacuole stores cell sap.",
      ],
      recap: [
        "State three structures present in a plant cell but absent from an animal cell. [3]",
        "Name the substance found in plant cell walls. [1]",
        "Give two differences between the vacuoles of animal and plant cells. [2]",
        "Explain why a root hair cell contains no chloroplasts. [2]",
      ],
    },
    {
      title: "Cell Differentiation and Specialisation",
      body: `### Structure Explains Function\n**Differentiation** is the process by which a cell becomes structurally suited to the function it carries out. Division multiplies cells; differentiation makes them different.\n\n| Specialised cell | Adaptation you should name | Function the adaptation serves |\n| --- | --- | --- |\n| Sperm | long flagellum; many mitochondria in the middle piece; acrosome carrying enzymes; haploid nucleus | swims to the egg and fuses with it |\n| Nerve cell (neurone) | a long axon, branched dendrites, an insulating sheath | carries impulses quickly over a distance |\n| Ciliated epithelial cell | numerous cilia on the free surface and many mitochondria | sweeps mucus and trapped particles along a duct |\n| Red blood cell | no nucleus, biconcave shape, packed with haemoglobin | short diffusion distance and a large surface area for carrying oxygen |\n| Muscle cell | elongated, packed with contractible protein fibres and mitochondria | contracts to produce movement |\n| Root hair cell | thin wall and one long cytoplasmic extension into the soil | greatly increases surface area for absorbing water and mineral ions |\n| Xylem vessel | dead, hollow tubes with thickened, lignin-strengthened walls and no cross-walls | supports the plant and carries water and dissolved minerals |\n| Phloem sieve tube | living cells joined end to end with perforated cross-walls and few organelles | carries sucrose from leaves to growing and storage regions |\n| Guard cell | kidney shape with unevenly thickened walls | changes shape to open and close the stoma |`,
      groups: [
        {
          subTitle: "Writing a Specialisation Answer",
          bullets: [
            "**Name the feature, then name the consequence.** 'Many mitochondria, so it can release more energy for the movement of the flagellum' is a complete mark; 'many mitochondria' on its own usually is not.",
            "**Keep the cell and its function matched.** Examiners check that the adaptation belongs to the cell named in that part of the answer.",
            "**Use 'surface area' precisely.** Root hair cells and red blood cells are both surface-area answers, but for different purposes — absorption versus gas uptake.",
            "**Nerve cell:** the long axon carries the impulse and the myelin sheath insulates it, so conduction stays fast over a distance.",
            "**Red blood cell:** losing the nucleus leaves more room for haemoglobin and the biconcave disc shortens the diffusion path.",
            "**Ciliated cell:** the cilia beat in one coordinated direction, so mucus and trapped dust move up the trachea.",
          ],
        },
        {
          subTitle: "Where Differentiation Happens",
          bullets: [
            "In animals, cells differentiate during development, and some tissues retain the ability to replace worn cells.",
            "In plants, differentiation is concentrated in the growing regions, where cells produced by division mature into xylem, phloem, epidermis and mesophyll.",
            "A specialised cell that has lost its ability to divide, such as a red blood cell, is a product of differentiation, not of division.",
            "**Meristem** cells at root and shoot tips stay undifferentiated and keep dividing for the whole life of the plant.",
            "In animals, **stem cells** in the bone marrow keep dividing and differentiate into red cells, white cells and platelets.",
            "A differentiated cell switches on only the genes it needs for its job, so all cells hold the same DNA but look different.",
          ],
        },
      ],
      examinerTips: [
        "Read the command word. 'Describe' wants what you see; 'explain' wants the reason the structure suits the job.",
        "For plant support questions, name lignin and say it strengthens the wall — turgor alone only explains the support in soft, young tissue.",
        "Match the marks: a [4] 'how are two cells specialised' wants one named feature plus its function for each cell.",
        "For a sperm cell, name the acrosome and say its enzymes digest the outer coating of the egg; that pairing is a frequent mark.",
      ],
      commonMistakes: [
        "Confusing differentiation with cell division; one produces variety, the other produces quantity.",
        "Attributing a function to the wrong cell, for example saying a sperm cell carries oxygen.",
        "Describing a root hair cell as a tissue. It is one cell; many of them together with the epidermis form a tissue.",
        "Saying the dendrites insulate the axon; the myelin sheath insulates and the dendrites receive impulses.",
      ],
      recap: [
        "Define differentiation. [2]",
        "Describe two ways in which a sperm cell is specialised for its function. [4]",
        "Explain how a root hair cell is adapted to absorb water. [3]",
        "Give one way in which a xylem vessel and a phloem sieve tube differ in structure. [2]",
      ],
    },
    {
      title: "The Light Microscope and Magnification",
      body: `### Turning a Lens Formula into Marks\nA light microscope magnifies twice, by the **objective lens** and then the **eyepiece lens**, so total magnification is their **product**: ×10 with ×40 gives ×400.\n\n**magnification = image size ÷ actual size**, so with *i* for image size, *a* for actual size and *m* for magnification:\n\n- *m = i ÷ a*\n- *a = i ÷ m*\n- *i = a × m*`,
      figure: magnificationDiagram + "\n\n" + microscopeArt,
      groups: [
        {
          subTitle: "Working the Instrument",
          bullets: [
            "**Start on the lowest-power objective.** It shows the widest area, so the specimen can be found and centred before you zoom in.",
            "**Coarse adjustment knob** moves the stage quickly and is used under low power only; under high power it can drive the objective into the slide.",
            "**Fine adjustment knob** sharpens the image and is the only focus control used on high power.",
            "**Diaphragm and lamp or mirror** control brightness; more magnification spreads the same light over a larger image, so opening the diaphragm is the first fix when the view darkens.",
            "**Squash slides and thin sections** let light through; a specimen that is too thick gives an opaque, unlabelable image.",
            "**Affects the field of view.** Raising the magnification shows fewer cells, each larger, so recentre before zooming.",
            "**Focus with the side in view.** Raise the stage under the objective while watching from the side, to stop the slide being crushed.",
            "**Clean the lenses with lens paper;** grease on an objective blurs the entire image.",
          ],
        },
        {
          subTitle: "Magnification Against Resolution",
          bullets: [
            "**Magnification** makes an image larger. **Resolution** is the ability to distinguish two close points as separate structures.",
            "A light microscope resolves about 0.2 µm, enough for nuclei and chloroplasts but not for membranes and ribosomes; those need an electron microscope.",
            "An electron microscope uses a beam of electrons instead of light, giving far greater resolution, but the specimen must be dead, dried and very thin, so living processes cannot be observed.",
            "**Resolution limit of a light microscope is about 0.2 µm,** set by the wavelength of visible light.",
            "Extra magnification past the resolution limit only enlarges a blur; this **empty magnification** reveals no new detail.",
          ],
        },
        {
          subTitle: "Three Calculations in Full",
          bullets: [
            "**Finding magnification:** a nucleus of actual size 5 µm is drawn 20 mm wide. 20 mm = 20 000 µm, so m = 20 000 ÷ 5 = **×4000**.",
            "**Finding actual size:** an image measures 30 mm at ×1500. 30 mm = 30 000 µm, so a = 30 000 ÷ 1500 = **20 µm**.",
            "**Using a scale bar:** a bar labelled 2 µm measures 40 mm on the page. m = 40 000 ÷ 2 = **×20 000**.",
            "Recalculate from the bar whenever a printed magnification may belong to an image that has been resized.",
            "**Image size** is what you measure on the diagram or photograph, in millimetres; **actual size** is the real size of the specimen, in micrometres.",
            "**1 mm = 1000 µm.** Convert before dividing, or the answer is wrong by a factor of 1000.",
            "**Magnification is a ratio with no units,** written ×400 rather than 400 mm.",
          ],
        },
      ],
      examinerTips: [
        "Write the formula, then the substitution with units visible, then the answer. Method marks are awarded even when the final number is wrong, so never give only an answer.",
        "Put the conversion 1 mm = 1000 µm on a line of its own; that line is frequently a marked step.",
        "Check the reasonableness of your answer: cell organelles are counted in µm, and magnifications used in school micrographs run from about ×40 to a few thousand.",
        "For a total-power question write 'eyepiece × objective' as the method line before substituting the numbers.",
      ],
      commonMistakes: [
        "Adding the two lens magnifications instead of multiplying them, so ×10 with ×40 becomes ×50.",
        "Dividing millimetres by micrometres without converting, which shrinks the answer by a factor of 1000.",
        "Writing magnification with units. It is a ratio, so the units cancel and the answer is a bare number.",
        "Measuring the border of the photograph rather than the specimen inside it.",
      ],
      recap: [
        "A cell is 8 µm wide and appears 40 mm wide in a photograph. Calculate the magnification and show your working. [3]",
        "A chloroplast measures 26 mm in a drawing made at ×400. Calculate its actual length in µm. [3]",
        "State the total magnification produced by a ×10 eyepiece with a ×40 objective. [1]",
        "Explain the difference between magnification and resolution. [2]",
        "Why must a specimen be thin enough for a light microscope to be useful? [2]",
      ],
    },
    {
      title: "Functions of the Cell Parts",
      body: `### Match the Part to Its Job\n\nMost cell questions are answered with a function, and each function has a preferred phrasing.\n\nLearn these pairings and you can answer almost any 'what is the role of' question in the paper.\n\n| Part | Function worth writing |\n| --- | --- |\n| Nucleus | contains the DNA that controls the cell's activities and directs the making of proteins |\n| Cytoplasm | the gel-like medium in which the cell's chemical reactions take place |\n| Cell membrane | partially permeable layer that controls the movement of substances in and out of the cell |\n| Mitochondrion | carries out aerobic respiration, releasing energy the cell can use |\n| Ribosome | assembles proteins by joining amino acids together |\n| Chloroplast | contains chlorophyll and is the site of photosynthesis |\n| Vacuole | stores cell sap, a solution of sugars and salts, and helps keep the cell turgid |\n| Cell wall | cellulose framework that strengthens the cell and prevents it from bursting |\n| Plasmid | a small loop of extra DNA, found in many bacteria and often carrying resistance genes |`,
      groups: [
        {
          subTitle: "Structures Students Leave Out",
          bullets: [
            "**Ribosomes** are not decorative dots; they are the protein-making sites, and cells that export protein — gland cells, the lining cells of the small intestine — carry very many of them.",
            "**The mitochondrion is where respiration happens**, not where digestion happens; the wording 'releases energy from glucose' links it to the respiration equation.",
            "**The vacuole of a plant cell is a storage and pressure organ**, holding water plus dissolved sugars and salts.",
            "In a freshwater protoctist such as *Amoeba* a contractile vacuole expels the surplus water that keeps entering by osmosis.",
            "**Chlorophyll** is the green pigment inside the chloroplast that absorbs light energy; the chloroplast is the organelle.",
            "**Cell sap** is a dilute solution of sugars, salts and organic acids, so the vacuole is a storage compartment.",
            "The nucleus also contains the **nucleolus**, where the parts of ribosomes are assembled.",
          ],
        },
        {
          subTitle: "Which Cells Need Which Organelle Most",
          bullets: [
            "**Muscle and liver cells** are densely packed with mitochondria because their respiration rate is high.",
            "**Palisade mesophyll cells** hold the most chloroplasts of any plant cell, which is why the upper surface of a leaf is the greener side.",
            "**Cells making mucus or digestive enzyme** show abundant ribosomes, since both products are proteins.",
            "**Sperm cells** pack mitochondria into the middle piece to power the movement of the flagellum.",
            "**Root hair cells** carry many mitochondria because mineral ions enter them by active transport.",
            "**Palisade mesophyll** cells hold the most chloroplasts, so the upper leaf surface is the greener side.",
          ],
        },
      ],
      examinerTips: [
        "Say what the organelle does, not what it looks like. 'Round structure with a membrane' earns nothing where 'controls the cell's activities' earns the mark.",
        "Use 'aerobic respiration' rather than 'breathing' when describing the mitochondrion, and never place respiration in the nucleus.",
        "For a vacuole function give both halves: it stores cell sap and it keeps the cell turgid by pressing on the wall.",
        "When a question asks where a reaction happens, answer with the organelle: mitochondrion for aerobic respiration, chloroplast for photosynthesis.",
      ],
      commonMistakes: [
        "Putting photosynthesis in the mitochondrion or respiration in the chloroplast.",
        "Claiming that the vacuole stores genetic material.",
        "Describing the cell membrane as fully permeable, or the cell wall as selectively controlling entry.",
        "Naming chlorophyll as an organelle; it is a pigment inside the chloroplast.",
      ],
      recap: [
        "State the function of the cell membrane. [2]",
        "Name the part of a plant cell that contains chlorophyll and say what it does. [2]",
        "Give the function of the ribosome and of the mitochondrion. [2]",
        "Explain how the vacuole and the cell wall together keep a herbaceous plant upright. [3]",
      ],
    },
    {
      title: "Tissues, Organs and Systems in Plants",
      figure: tissueTypesArt,
      body: `### The Plant Has Its Own Ladder\n\nPlant tissues are grouped by what they do: covering, filling, supporting and transporting.\n\nBecause a leaf, root, stem or flower combines several tissues, plants are examined only as far as the organ level.\n\n| Tissue | Where it is found | Function |\n| --- | --- | --- |\n| Epidermis, with a waxy cuticle | outer layer of leaf, stem and root | protection and control of water loss |\n| Palisade mesophyll | upper part of the leaf | photosynthesis, packed with chloroplasts |\n| Spongy mesophyll | lower part of the leaf | gas exchange across moist air spaces |\n| Xylem | root, stem, leaf veins | carries water and dissolved minerals; lignin strengthens |\n| Phloem | root, stem, leaf veins | carries sucrose from sources to growing and storage regions |\n| Meristem | growing tips of shoots and roots, and the cambium band inside a stem | cell division, producing new cells that then differentiate |`,
      groups: [
        {
          subTitle: "How the Plant Organs Connect",
          bullets: [
            "**Root, stem and leaves form the body of a flowering plant**, and xylem and phloem run continuously through all three, so water taken in by the root can reach a leaf vein.",
            "**A leaf is an organ** because epidermis, mesophyll and vascular tissue (the vein) work together in it.",
            "**The flower is treated as an organ too**, since it is a reproductive structure built from several tissues.",
            "**Root anchors and absorbs, stem supports and transports, leaf photosynthesises, flower reproduces** — one line each organ.",
            "**Veins** in a leaf are vascular tissue; their presence is a reason the leaf is an organ, not a tissue.",
            "**Epidermis with its waxy cuticle** is the covering tissue of every plant organ.",
          ],
        },
        {
          subTitle: "The Animal Systems You Should Be Able to Name",
          bullets: [
            "**Digestive system:** mouth, stomach, small and large intestines, liver and pancreas — breaking food down and absorbing it.",
            "**Circulatory system:** heart, blood and blood vessels — carrying oxygen, nutrients and waste.",
            "**Respiratory system:** trachea, lungs and associated muscles — gas exchange with the air.",
            "**Nervous system:** brain, spinal cord and nerves — detecting and coordinating responses.",
            "**Respiratory system:** trachea, bronchi, lungs and the rib and diaphragm muscles — gas exchange with the air.",
            "**Skeletal system:** bones, cartilage and joints — support, movement and protection of the organs.",
            "**Excretory system:** kidneys, ureters and bladder — removing urea and controlling water balance.",
          ],
        },
      ],
      examinerTips: [
        "Ask whether the structure contains more than one tissue. A vein and a leaf both do, so both are part of organs; xylem on its own is a tissue.",
        "For plant transport, name the tissue and what it carries. Xylem carries water and dissolved minerals upward from the root.",
        "Phloem carries sucrose both ways, from leaves to where the plant grows or stores.",
        "Name a system and list at least two of its organs; the system's name alone usually scores only half.",
        "Keep the tissue and function paired: palisade for photosynthesis, spongy for gas exchange. Swapping them loses both marks.",
      ],
      commonMistakes: [
        "Calling xylem and phloem organs. They are tissues; the organs are root, stem and leaf.",
        "Describing a plant as having a circulatory system. The transport tissues do the work, and no plant system is examined.",
        "Saying phloem transports water.",
        "Calling a leaf a system. It is an organ, and plants are not examined at system level.",
      ],
      recap: [
        "Name three tissues found in a leaf and give the function of each. [3]",
        "Explain why a leaf is described as an organ. [2]",
        "State one difference between the substances moved by xylem and by phloem. [2]",
        "Give two levels of organisation present in a plant but not applicable to it in the same way as in a mammal. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_2: Chapter = chapterTwo;
