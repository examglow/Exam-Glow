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

const foodIllustrations = artPanel([
  {
    src: "ch04-food-molecules.webp",
    alt: "Everyday foods arranged beside the main molecules each one contains",
    caption: "Foods and their main molecules",
  },
  {
    src: "ch04-food-tests.webp",
    alt: "Test tubes and reagents used to carry out the four food tests",
    caption: "Testing food for the major molecules",
  },
]);

const lipidProteinArt = artPanel([
  {
    src: "ch04-fat-molecule.webp",
    alt: "A glycerol head joined to three fatty acid tails",
    caption: "One triglyceride: glycerol plus three fatty acids",
  },
  {
    src: "ch04-protein-chain.webp",
    alt: "A chain of many different amino acids folded into a protein",
    caption: "A protein is a folded amino-acid chain",
  },
]);

/** The four families of biomolecules: elements, building blocks, examples and the test that finds them. */
const biomoleculeOverviewDiagram = svgDiagram(
  "The four classes of biological molecules",
  `<text class="title" x="450" y="32" text-anchor="middle">What each class is built from</text>
  ${tileRow(
    [
      {
        title: "Carbohydrates",
        cls: "main",
        body: "carbon, hydrogen,\noxygen only\nsugar, starch,\ncellulose",
      },
      {
        title: "Lipids",
        cls: "gold",
        body: "carbon, hydrogen,\noxygen only\nfatty acids and\nglycerol",
      },
      {
        title: "Proteins",
        cls: "pink",
        body: "carbon, hydrogen,\noxygen and nitrogen\nbuilt from\namino acids",
      },
      {
        title: "Nucleic acids",
        cls: "purple",
        body: "carbon, hydrogen,\noxygen, nitrogen,\nphosphorus\nin DNA and RNA",
      },
    ],
    54,
    { h: 164 },
  )}
  ${box(24, 234, 852, 44, "Carbohydrates and lipids supply energy, proteins build and catalyse, nucleic acids carry instructions", "panel", "small")}`,
  900,
  302,
);

/** The four food tests in the order a laboratory answer should give them. */
const foodTestsDiagram = svgDiagram(
  "Four food tests and their positive results",
  `<text class="title" x="450" y="32" text-anchor="middle">Reagent, colour change, and what it proves</text>
  ${tileRow(
    [
      {
        title: "Iodine",
        cls: "main",
        body: "tests for starch\nbrown-yellow to\nblue-black\nno heating needed",
      },
      {
        title: "Benedict's",
        cls: "gold",
        body: "reducing sugar\nblue to green, yellow,\norange or brick-red\nheat in a water bath",
      },
      {
        title: "Biuret",
        cls: "pink",
        body: "tests for protein\nblue to lilac or\npurple after shaking\nno heating needed",
      },
      {
        title: "Ethanol",
        cls: "blue",
        body: "tests for lipid\ndissolve, then add\nwater: cloudy white\nemulsion forms",
      },
    ],
    54,
    { h: 164 },
  )}
  ${box(24, 234, 852, 44, "Set a known positive and a known negative tube beside your sample: that pair is the control", "panel", "small")}`,
  900,
  302,
);

/** Enzyme action in three steps, then the three temperature and pH regimes an answer has to distinguish. */
const enzymeDiagram = svgDiagram(
  "How an enzyme works, and what stops it working",
  `<text class="title" x="450" y="30" text-anchor="middle">One active site, one substrate, and the conditions that change it</text>
  ${tileRow(
    [
      {
        title: "1. Specific fit",
        cls: "main",
        body: "the substrate enters the\nactive site of the enzyme\nshape and charge must match",
      },
      {
        title: "2. Catalysis",
        cls: "blue",
        body: "bonds in the substrate\nare strained and broken\nactivation energy is lowered",
      },
      {
        title: "3. Release",
        cls: "gold",
        body: "products leave the site\nthe enzyme is unchanged\nand is used again",
      },
    ],
    52,
    { h: 150 },
  )}
  ${tileRow(
    [
      {
        title: "Too cold",
        cls: "purple",
        body: "few collisions between\nenzyme and substrate\nslow, but the site still fits",
      },
      {
        title: "Optimum",
        cls: "main",
        body: "one temperature and\none pH give the fastest\nrate for each enzyme",
      },
      {
        title: "Denatured",
        cls: "pink",
        body: "excess heat or wrong pH\nalters the active site\nso the substrate no longer fits",
      },
    ],
    212,
    { h: 150 },
  )}
  ${box(24, 372, 852, 44, "An enzyme is a catalyst: it speeds up a reaction without being used up by it", "panel", "small")}`,
  900,
  440,
);

const chapterFour: Chapter = {
  number: 4,
  title: "Biological Molecules",
  intro: `Living material is a small set of carbon-based families: **carbohydrates**, **lipids**, **proteins** and **nucleic acids**, with water and dissolved mineral ions holding the mixture together.\n\nThis chapter covers what each family is built from and what it is used for, plus the four laboratory tests that identify them.\n\nIt then covers the enzymes that run the cell's chemistry, and the water and mineral salts a plant must take from the soil because it cannot make them itself.`,
  subheadings: [
    {
      title: "The Four Classes of Biological Molecules",
      body: `### Elements First, Then Jobs\nA **biological molecule** is a molecule made by a living organism.\n\nFour classes are examined, and each is recognised by its elements, its building blocks and the reagent that detects it.\n\n| Class | Elements | Building blocks | Main roles | Test |\n| --- | --- | --- | --- | --- |\n| Carbohydrate | carbon, hydrogen, oxygen | simple sugars (monosaccharides) | immediate energy, storage as starch or glycogen, structure as cellulose | iodine for starch, Benedict's for reducing sugar |\n| Lipid | carbon, hydrogen, oxygen (far less oxygen than a carbohydrate) | fatty acids and glycerol | long-term energy store, insulation, waterproofing, cell membranes | ethanol emulsion |\n| Protein | carbon, hydrogen, oxygen, nitrogen; often sulfur too | amino acids | enzymes, hormones, antibodies, structure, transport | biuret |\n| Nucleic acid | carbon, hydrogen, oxygen, nitrogen, phosphorus | nucleotides | hold the inherited instructions as DNA and RNA | not a food test |`,
      figure: biomoleculeOverviewDiagram,
      groups: [
        {
          subTitle: "Energy, Structure or Control",
          bullets: [
            "**Carbohydrate is the quick fuel.** Glucose is the molecule respired in the cell, and it is the unit that starch, glycogen and cellulose are all assembled from.",
            "**Lipid is the stored fuel.** It is the compact long-term reserve and also the waterproofing and insulating material of both plants and animals.",
            "**Protein is the working material.** Almost every structure and reaction in a cell depends on proteins, and they are the only one of the three food classes that supplies nitrogen.",
            "**Nucleic acids are the instructions**, holding the information that decides which proteins a cell makes.",
            "The food molecules share a pattern: a **large insoluble molecule built from many small units**, released again in digestion.",
            "Carbohydrates and lipids hold **no nitrogen**, so a plant must absorb nitrates before making any protein.",
            "Nucleic acids alone add **phosphorus** to the element set of the four classes.",
          ],
        },
        {
          subTitle: "Organic Against Inorganic",
          bullets: [
            "Carbohydrates, lipids, proteins and nucleic acids are **organic compounds**: carbon-based, built by organisms.",
            "Water and the mineral ions dissolved in it are **inorganic**; they are no less essential, but they contain no carbon skeleton.",
            "Carbon dioxide and water are taken in by a plant and used to manufacture carbohydrate, so the carbon of every food molecule on Earth entered the living world through photosynthesis.",
            "Water and mineral ions are **inorganic** yet essential, so inorganic does not mean unimportant.",
            "Glucose, starch and cellulose share one unit yet do three jobs: fuel, storage and structure.",
            "Benedict's, iodine, biuret and ethanol are the four reagents that detect the three food classes.",
          ],
        },
      ],
      examinerTips: [
        "Answer an 'elements' question with the full list. 'Carbon and hydrogen' misses the mark that 'oxygen' earns, and protein needs nitrogen named.",
        "Keep the building block paired with its class: amino acids belong to proteins, fatty acids and glycerol to lipids, sugars to carbohydrates.",
        "Match building block to class precisely; nucleotides build nucleic acids and monosaccharides build carbohydrates.",
        "State that enzymes are proteins, since that fact is what makes the later denaturation marks available.",
      ],
      commonMistakes: [
        "Calling a lipid a polymer of fatty acids in the same way starch is a polymer of glucose; lipids are made from fatty acids and glycerol and are not long repeating chains.",
        "Saying proteins are the body's main immediate energy source. Carbohydrate is; protein is used for energy only when carbohydrate supplies run out.",
        "Writing that carbohydrates contain nitrogen.",
        "Naming sulfur as the key element of every protein; nitrogen is the essential extra, sulfur only in some.",
      ],
      recap: [
        "Name the chemical elements found in carbohydrates and in proteins. [4]",
        "State the building blocks of proteins and of carbohydrates. [2]",
        "Give one function each for a carbohydrate, a lipid and a protein. [3]",
        "Explain why a plant cannot make protein without absorbing nitrates. [2]",
      ],
    },
    {
      title: "Carbohydrates: Sugars, Starch and Cellulose",
      body: `### One Molecule, Four Roles\n\nAll carbohydrates contain **carbon, hydrogen and oxygen**, with hydrogen and oxygen present in roughly the 2:1 ratio found in water, which is where the name carbohydrate comes from.\n\nThey divide into three groups according to how many sugar units they contain.\n\n| Type | Composition | Examples | Properties and uses |\n| --- | --- | --- | --- |\n| Monosaccharide | one sugar unit | glucose, fructose, galactose | soluble in water, sweet, used directly in respiration or transport |\n| Disaccharide | two sugar units joined together | sucrose (glucose plus fructose), maltose (two glucose), lactose (glucose plus galactose) | soluble, transported in phloem as sucrose, broken down before absorption |\n| Polysaccharide: starch | many glucose units | starch grains in potato, cereal grains and the storage organs of plants | insoluble, compact storage that can be broken down back to glucose |\n| Polysaccharide: glycogen | many glucose units | liver and muscle of animals | the animal storage form, rapidly mobilised when blood glucose falls |\n| Polysaccharide: cellulose | many glucose units arranged in long, straight fibres | cell walls of every plant cell | insoluble and strong; the dietary fibre of plant foods |`,
      groups: [
        {
          subTitle: "Structure Matched to Function",
          bullets: [
            "**Glucose** is the respiratory substrate; a typical blood and cell-sugar concentration question is really a glucose question.",
            "**Sucrose** is the transport carbohydrate of plants, moved in the phloem from leaves to growing and storage regions.",
            "**Starch** is the storage carbohydrate of plants, and its insolubility means it does not disturb the water balance of the cell storing it.",
            "**Cellulose** builds the cell wall, and its fibres give the tensile strength that lets a plant resist the internal pressure of turgor.",
            "**Glycogen** is the animal storage carbohydrate, made in the liver when blood glucose is high and broken down when it falls.",
            "**Solubility is the key idea:** sugars dissolve, so they travel in blood and phloem and are respired directly.",
            "Starch and cellulose do not dissolve, so glucose is stored without changing water potential and drawing in excess water.",
          ],
        },
        {
          subTitle: "Carbohydrate in the Diet",
          bullets: [
            "Starchy food is broken down to glucose during digestion, so bread, potato, rice and maize all give the same respiratory fuel.",
            "Sugars eaten in excess contribute to dental caries and to stored fat, since surplus glucose is converted to lipid.",
            "Cellulose passes through the gut largely undigested as fibre, which adds bulk and helps movement along the intestine.",
            "Fibre supplies no energy but prevents constipation by keeping the gut contents moving.",
            "Surplus glucose beyond the storage limit is converted to fat and stored in adipose tissue.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish the three storage forms cleanly: starch in plants, glycogen in animals, lipid in both but as the long-term store.",
        "Where a question asks why starch is a good storage molecule, give both halves.",
        "It is insoluble, so it does not affect water potential, and it is compact and can be broken down again.",
        "If the word 'fibre' appears in a diet question, the molecule meant is cellulose.",
        "To name a monosaccharide, glucose is the safest; starch never counts as a sugar.",
      ],
      commonMistakes: [
        "Calling starch a sugar. It is a polysaccharide and gives no colour with Benedict's reagent until it has been broken down.",
        "Confusing cellulose with starch as the plant's storage carbohydrate; cellulose is structural.",
        "Saying glucose is stored in the liver as glucose; it is stored as glycogen.",
        "Calling sucrose a reducing sugar; it is non-reducing and must be hydrolysed before Benedict's responds.",
      ],
      recap: [
        "Name the type of carbohydrate that glucose belongs to and give two other monosaccharides. [3]",
        "State which disaccharide is transported in the phloem and name the two monosaccharides it is made from. [3]",
        "Give two ways in which the structure of cellulose suits its function in the plant cell wall. [2]",
        "Explain why storing glucose as starch is better for a cell than keeping it dissolved as glucose. [3]",
      ],
    },
    {
      title: "Lipids and Proteins",
      figure: lipidProteinArt,
      body: `### Storage Fat and Working Protein\n**Lipids** contain carbon, hydrogen and oxygen with far less oxygen than a carbohydrate, are built from **fatty acids joined to glycerol**, and are insoluble in water but soluble in ethanol.\n\n| Lipid | Features | Roles |\n| --- | --- | --- |\n| Saturated fat | animal origin at room temperature, solid, fatty acid chains with no double bonds between carbons | energy store in adipose tissue, insulation, protection |\n| Unsaturated fat | mainly plant and fish origin, liquid oil, one or more double bonds in the chains | energy store, membrane components |\n| Waxes | very water-insoluble lipids | the waterproof cuticle of a leaf, waterproofing of feathers and fur |\n| Membrane lipids | form the lipid layer of all cell membranes | build the barrier the membrane's transport processes depend on |\n\n**Proteins** contain carbon, hydrogen, oxygen and **nitrogen**, often sulfur, and are built from **amino acids** folded into a precise three-dimensional shape.\n\n| Protein type | Examples | Function |\n| --- | --- | --- |\n| Enzymes | amylase, protease, lipase, catalase | biological catalysts, each specific to one reaction |\n| Hormones | insulin and other protein hormones | chemical messengers carried in blood |\n| Antibodies | the proteins made in response to infection | combine with pathogens to neutralise them |\n| Structural | collagen in skin, bone, cartilage and blood-vessel walls; keratin in hair and nails; the contractile proteins of muscle | strength, elasticity and movement |\n| Transport | haemoglobin in red blood cells | carries oxygen in the blood |`,
      groups: [
        {
          subTitle: "Why the Two Classes Behave Differently",
          bullets: [
            "**Lipids release more energy per gram than carbohydrate**, so they are the dense long-term store; because they are also insoluble, they are stored without carrying extra water.",
            "**Lipid is a poor transport molecule** compared with glucose, since it does not dissolve in the blood; fatty acids are therefore carried in association with proteins.",
            "**A protein only works if its shape is right.**.",
            "The folded shape of an enzyme's active site, of haemoglobin and of collagen all determine function, and heating or a change of pH can destroy a protein's shape permanently.",
            "Lipids store more energy per gram than carbohydrate, so they are the dense long-term reserve.",
            "Being insoluble, lipid is stored without carrying extra water with it.",
            "**Amino acids are reassembled**, not stored: the body builds its own proteins from digested supply.",
          ],
        },
        {
          subTitle: "Protein in the Diet",
          bullets: [
            "Protein is required for growth and repair, so its demand is highest in childhood, pregnancy and after injury or surgery.",
            "A diet short of protein gives poor growth and a weakened resistance to infection, and the body cannot store nitrogen the way it stores carbohydrate and fat.",
            "Cereal foods are lower in some amino acids than meat, fish, eggs and pulses, so a mixed plant diet is planned to complement them.",
            "Plants build every amino acid from glucose plus **nitrate ions absorbed from the soil**.",
            "Animals must digest dietary protein to amino acids, since they cannot make some of them at all.",
            "The body cannot store protein the way it stores fat, so a daily intake is needed for growth.",
          ],
        },
      ],
      examinerTips: [
        "For a lipid question, say 'insoluble in water' and 'energy store'; the emulsion test is the identification you name if a test is asked for.",
        "When a question asks what proteins are made of, the mark is 'amino acids', and the follow-up mark is usually 'contain nitrogen'.",
        "Give collagen and keratin as structural proteins rather than vaguely saying 'protein in muscles'; named examples secure the mark.",
        "Name an example protein beside each function; 'transport' alone scores less than 'haemoglobin carries oxygen'.",
      ],
      commonMistakes: [
        "Claiming that lipids contain nitrogen.",
        "Saying enzymes are made of lipid or carbohydrate; enzymes are proteins, so they are denatured by heat like any protein.",
        "Describing amino acids as the products of protein digestion but then saying the body stores them as such — they are reassembled into the animal's own proteins.",
        "Naming a wax as an energy store; waxes are waterproofing, not fuel.",
      ],
      recap: [
        "State the elements present in a protein. [4]",
        "Name the building blocks of lipids. [2]",
        "Give four different functions of proteins in the body, each with an example. [4]",
        "Explain why an animal must eat protein while a plant does not. [3]",
        "Describe the emulsion test for lipid. [3]",
      ],
    },
    {
      title: "Food Tests in the Laboratory",
      body: `### Reagent, Colour Change, and Nothing Else\n\nFour core tests carry almost every mark in this section, with two staining or dye tests appearing as alternatives.\n\nThe answer format is always **reagent plus observed colour change**, and the marks are split between the two halves, so 'it turns red' scores nothing.\n\n| Nutrient | Reagent and procedure | Positive result | Negative result |\n| --- | --- | --- | --- |\n| Starch | iodine solution, added to the sample on a spotting tile and observed at once | blue-black or black | stays brown-yellow |\n| Reducing sugar | Benedict's reagent added, then the tube heated in a hot water bath for a few minutes | blue to green, then yellow, orange and finally brick-red precipitate | stays blue |\n| Protein | biuret reagent added and the tube shaken and left for a few minutes | blue to lilac or purple | stays blue |\n| Lipid | sample shaken with ethanol, then this liquid poured into water | cloudy white emulsion forms | solution stays clear |\n| Lipid, by staining | Sudan III or Sudan IV solution added, left, then rinsed off | orange-red droplets of stained fat | dye spreads evenly with no separate droplets |\n| Vitamin C | DCPIP solution, a blue dye, added dropwise from a syringe | blue turns colourless at the endpoint | colour stays blue |`,
      figure: foodTestsDiagram + "\n\n" + foodIllustrations,
      groups: [
        {
          subTitle: "Controls and Safety",
          bullets: [
            "**Run a positive control** (a known starch, sugar, protein or lipid) and a **negative control** (water) beside your samples, so the colour changes you compare against are real.",
            "**Use a water bath rather than a naked flame**, particularly for ethanol, which is highly flammable, and for Benedict's heating.",
            "**Wear eye protection** with the alkaline reagents, and rinse any skin contact with the copper or sodium hydroxide solutions.",
            "**Clean and reuse apparatus between samples** so a residue of one food does not give a false positive in the next tube.",
            "**Benedict's is the only test needing heat;** shake biuret and wait, and read iodine at once.",
            "The Benedict's colour is **graded**: green means a little reducing sugar, brick-red means a lot.",
            "The lipid test is a **transfer**: lipid dissolves in ethanol, then clouds when that ethanol is diluted with water.",
          ],
        },
        {
          subTitle: "The Extended Version Some Papers Ask For",
          bullets: [
            "**Sucrose is a non-reducing sugar**, so it gives no colour with Benedict's reagent as it stands.",
            "To test for it, first hydrolyse it by boiling with dilute hydrochloric acid, then neutralise the acid with sodium hydrogen carbonate solution before adding Benedict's and reheating.",
            "**A quantitative comparison** of reducing sugar concentration is done by timing or by comparing colour depth against a series of known concentrations.",
            "**Food energy** is measured separately by burning a dry sample under a boiling tube of water and calculating the temperature rise, with drafts shielded and the mass of food burnt recorded.",
            "If the question offers a **Sudan stain**, report orange-red droplets, not the ethanol cloudiness.",
            "DCPIP is the reagent for **vitamin C**; the blue dye goes colourless at the endpoint.",
          ],
        },
      ],
      examinerTips: [
        "Copy the reagent name exactly, including the apostrophe in Benedict's, and pair it with the colour change, not with the nutrient it proves. 'Benedict's means glucose is present' is safer than 'it turns red'.",
        "Mention the water bath whenever Benedict's is described; the heating step is commonly a separate mark.",
        "For the emulsion test, name both liquids and the order: ethanol first, then water.",
        "If the question names a Sudan stain instead, answer with orange-red stained fat droplets; do not describe the ethanol test you did not use.",
        "If a question gives you results, quote the observed colours as evidence before naming the nutrient.",
      ],
      commonMistakes: [
        "Using iodine for sugar or Benedict's for starch.",
        "Forgetting to heat Benedict's and then reporting that no sugar is present.",
        "Saying the biuret test turns red; lilac or purple is the positive result.",
        "Describing the lipid test as 'adding iodine solution' or expecting a colour change in the water layer rather than a cloudy white emulsion.",
        "Reporting a green Benedict's result as 'no sugar present'; green means a small amount of reducing sugar is there.",
      ],
      recap: [
        "Describe how you would test a food sample for starch, giving the reagent and the positive result. [3]",
        "Name the reagent used to test for a reducing sugar and state the heating step needed. [2]",
        "A food sample gives a blue result with biuret reagent and a cloudy white emulsion with ethanol. State what the sample contains and what it does not contain. [2]",
        "Explain why sucrose can give a negative Benedict's test even though it is a sugar. [2]",
        "State the purpose of running a known glucose solution beside your unknown samples. [2]",
        "Name a reagent that stains lipid and describe the result it gives. [2]",
      ],
    },
    {
      title: "Enzymes as Biological Catalysts",
      body: `### Specific, Catalytic and Very Sensitive to Conditions\n\nAn **enzyme is a protein produced by living cells that acts as a biological catalyst**, speeding up one specific reaction without being used up.\n\nEnzymes work by **lowering the activation energy**, the energy needed to start a reaction, so reactions run quickly at the mild temperatures and pH a cell tolerates.\n\n| Enzyme | Substrate | Product | Where it acts |\n| --- | --- | --- | --- |\n| Amylase | starch | maltose | mouth and small intestine; also made by plants and fungi |\n| Maltase | maltose | glucose | small intestine |\n| Protease | protein | amino acids | stomach and small intestine |\n| Lipase | lipid | fatty acids and glycerol | small intestine |\n| Catalase | hydrogen peroxide | water and oxygen | almost all living cells, including yeast and potato |`,
      figure: enzymeDiagram,
      groups: [
        {
          subTitle: "The Three Factors on a Rate Graph",
          bullets: [
            "**Temperature:** as temperature rises, molecules gain kinetic energy and collide more often, so the rate rises; past the optimum the enzyme **denatures**, the active site changes shape, and the rate falls steeply.",
            "**pH:** each enzyme has an optimum pH; moving away from it alters the charges on the active site and the reaction slows, and extreme pH denatures the enzyme.",
            "**Substrate concentration:** at low concentration the rate rises as more active sites are occupied, then **levels off** because every active site is already busy and adding more substrate only makes molecules queue.",
            "More enzyme at that point raises the plateau.",
            "**Active site:** a region of fixed shape and charge that accepts only the matching **substrate**.",
            "**Lock and key:** one substrate fits one site, though the site molds slightly as it binds.",
            "Some enzymes act inside the cell that made them; digestive enzymes are secreted to act **outside** the cell.",
          ],
        },
        {
          subTitle: "Investigating Enzyme Action",
          bullets: [
            "**Catalase practical:** add potato or yeast to hydrogen peroxide and collect the oxygen released in a syringe or over water.",
            "Measuring the volume for a fixed time gives the rate, and a boiled enzyme preparation gives no gas, showing the protein has been denatured.",
            "**Amylase and pH:** samples of amylase with starch are withdrawn at intervals and tested with iodine on a spotting tile.",
            "The time until the iodine no longer turns blue-black shows how fast the starch has been digested, and repeating at different pH values shows the optimum.",
            "**Fair test points:** keep the volume and concentration of each solution, the temperature by using a water bath, the pH by a buffer, and the timing consistent between tubes; repeat and average.",
            "A **boiled control** shows no reaction because the enzyme has been denatured.",
            "Rate is **product formed or substrate used per unit time**, so state the time as well as the amount.",
          ],
        },
      ],
      examinerTips: [
        "Always state that an enzyme is a protein and that it is not used up; those two clauses earn marks independently.",
        "Use the exact verbs: substrate **fits** or **combines with** the active site, products are **released**, and the enzyme is **denatured**, not 'killed' or 'destroyed by heat' in the casual sense.",
        "When explaining the fall in a rate curve after the optimum, name the shape change of the active site and the loss of complementarity; 'the enzyme died' scores nothing.",
        "For the plateau on a substrate-concentration graph, say 'all the active sites are occupied', not 'the enzyme is full of sugar'.",
      ],
      commonMistakes: [
        "Describing enzymes as being used up in the reaction or as providing the energy for it.",
        "Saying high temperature 'kills' an enzyme or that enzymes work only inside cells.",
        "Naming the wrong product for an enzyme, such as amino acids from amylase or glycerol alone from lipase.",
        "Claiming denaturation is reversible when the structure has been permanently altered.",
      ],
      recap: [
        "Define an enzyme and state what it is made of. [2]",
        "Explain what is meant by the term activation energy and how an enzyme affects it. [2]",
        "Describe the effect of increasing temperature on the rate of an enzyme-controlled reaction. [4]",
        "Explain why an enzyme works at only one pH and what happens when the pH is far from the optimum. [3]",
        "State the substrates and products of amylase, protease and lipase. [3]",
        "A boiled enzyme preparation produces no oxygen with hydrogen peroxide. Explain why. [2]",
      ],
    },
    {
      title: "Water and Mineral Salts in Plants",
      body: `### The Two Things a Leaf Cannot Make\nA plant makes its own carbohydrate but must take **water** and **mineral ions** from the soil; both are inorganic and essential.\n\n**Water** enters by **osmosis** through root hairs, rises in the xylem, and leaves by evaporation through the stomata. Its functions are:\n\n| Function of water | Why the plant cannot do without it |\n| --- | --- |\n| Solvent for mineral ions | ions in the soil can only enter a root dissolved in water, and only move about inside the plant in solution |\n| Raw material for photosynthesis | water supplies the hydrogen that ends up in carbohydrate, and its splitting releases the oxygen given off |\n| Maintenance of turgor | water pressure in the vacuole holds the cell firm and keeps soft, herbaceous plants upright |\n| Transport medium | the xylem and phloem streams are largely water, carrying dissolved substances to every part |\n| Cooling | as water evaporates from the leaf surface it removes heat and stops the leaf scorching |\n| Cytoplasm and reactions | the cytoplasm is mostly water, so the cell's reactions take place in it |\n\n**Mineral ions** enter by **active transport** from dilute soil water into the concentrated cell sap of the root hair.\n\n| Ion | Needed for | Deficiency symptoms |\n| --- | --- | --- |\n| Nitrate ions | making amino acids, therefore proteins, therefore growth | stunted growth, and older leaves turning yellow first as protein is withdrawn from them |\n| Magnesium ions | making chlorophyll | chlorosis: yellowing between the veins of the younger leaves, which slows photosynthesis |\n| Other ions, for example potassium and calcium | enzymes, healthy leaves, strong cell walls and growing tips | poor growth and discoloured or weakened tissues |`,
      groups: [
        {
          subTitle: "Testing for Water Itself",
          bullets: [
            "**Anhydrous copper sulfate** is white and turns **blue** when water is added — the standard laboratory test for the presence of water.",
            "**Cobalt chloride paper** is blue and turns **pink** in the presence of water; it is the quick way of showing that a leaf surface gives off moisture.",
            "Neither test tells you how much water is present; they only show whether it is there.",
            "The oxygen released in photosynthesis comes from the splitting of water.",
            "**Transpiration** is the loss of water vapour from the leaf, mostly through the stomata.",
          ],
        },
        {
          subTitle: "How the Ions Move Once Inside",
          bullets: [
            "Water with its dissolved minerals travels from root hair to root cortex, into the **xylem** and up the stem to the leaves.",
            "Most of that water is lost by evaporation from the mesophyll and out of the stomata, and the loss is the pull that moves the column.",
            "Only a small proportion is used in photosynthesis.",
            "Magnesium and nitrate taken up by the root are **not** left in the leaf: nitrate is built into amino acids and magnesium is held in the chlorophyll molecule itself.",
            "**Fertilisers** replace the ions removed when crops are harvested from exhausted soil.",
            "**Legumes** such as peas and beans host nitrogen-fixing bacteria in their root nodules.",
            "Those bacteria convert nitrogen gas into nitrates, so growing legumes restores a soil's nitrate supply.",
          ],
        },
      ],
      examinerTips: [
        "Match the deficiency to the ion precisely: yellowing with stunted growth is nitrate, yellowing between the veins is magnesium. Quoting 'yellow leaves' for both will be treated as a guess.",
        "Name the process for mineral uptake as active transport and give its energy source as respiration; name osmosis for water and do not interchange them.",
        "If a question offers a growth experiment with fertilised and unfertilised soil, answer with the control: same species, same light, same water, only the mineral supply differing.",
        "For magnesium deficiency use the word chlorosis; nitrate deficiency also gives stunted growth, so name both symptoms to separate them.",
      ],
      commonMistakes: [
        "Saying plants absorb water for photosynthesis only; the transport, turgor and cooling roles are equally creditable.",
        "Claiming nitrates are needed for chlorophyll. Nitrate is for amino acids and proteins; magnesium is for chlorophyll.",
        "Describing mineral ions as being absorbed by diffusion from the soil.",
        "Confusing a fertiliser with a food source for the plant; the plant manufactures its own carbohydrate, and the fertiliser only restores ions.",
      ],
      recap: [
        "List four uses of water in a plant. [4]",
        "Name the ion needed for chlorophyll formation and state the symptom of its deficiency. [2]",
        "Explain how a root hair cell absorbs nitrate ions from dilute soil water. [3]",
        "Describe one way water is lost from a leaf and state how the loss helps the plant. [2]",
        "Explain why farmers add fertiliser to soil that has been cropped for many seasons. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_4: Chapter = chapterFour;
