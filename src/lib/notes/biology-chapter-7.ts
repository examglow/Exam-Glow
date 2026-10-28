import type { Chapter } from "./types";
import { box, labelledRows, svgDiagram, tileRow } from "./diagram-kit";

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

const balancedPlateArt = artPanel([
  {
    src: "ch07-balanced-plate.webp",
    alt: "Food arranged as a balanced meal",
    caption: "A balanced plate of food",
  },
]);

const teethArt = artPanel([
  {
    src: "ch07-teeth.webp",
    alt: "An upper jaw of incisors, canine and molars with a molar cut open to show enamel and pulp",
    caption: "Human dentition and the structure of a tooth",
  },
]);

const vitaminSourcesArt = artPanel([
  {
    src: "ch07-vitamins.webp",
    alt: "Sunlight with milk, carrots, an orange, dark leaves and butter",
    caption: "Sources of the vitamins students must name",
  },
]);

const alimentaryCanalArt = artPanel([
  {
    src: "ch07-alimentary-canal.webp",
    alt: "Diagram of the human alimentary canal",
    caption: "The alimentary canal",
  },
]);

const gutJourney = svgDiagram(
  "Journey Along the Alimentary Canal",
  `<text class="title" x="450" y="32" text-anchor="middle">One tube, in sequence, from mouth to anus</text>
   ${box(40, 50, 180, 26, "mouth", "gold")}
   ${box(252, 50, 180, 26, "gullet", "blue")}
   ${box(465, 50, 180, 26, "stomach", "pink")}
   ${box(677, 50, 180, 26, "small intestine", "main")}
   <path class="arrow" d="M224 63 H248M436 63 H461M649 63 H673"/>
   ${tileRow(
     [
       {
         title: "1 Mouth",
         body: "teeth crush the food\nsalivary amylase starts\non starch in the bolus",
         cls: "gold",
       },
       {
         title: "2 Gullet",
         body: "peristalsis pushes the\nbolus down to the\nstomach in waves",
         cls: "blue",
       },
       {
         title: "3 Stomach",
         body: "acid plus pepsin;\nchurning makes a paste\nof partly digested food",
         cls: "pink",
       },
       {
         title: "4 Small intestine",
         body: "digestion finished, then\nabsorption across the\nvilli of the ileum",
         cls: "main",
       },
     ],
     94,
     { x: 24, w: 852, h: 192, gap: 12 },
   )}
   ${box(40, 306, 180, 26, "large intestine", "purple")}
   ${box(252, 306, 180, 26, "rectum", "panel")}
   ${box(465, 306, 180, 26, "anus", "panel")}
   <path class="arrow" d="M224 319 H248M436 319 H461"/>
   <text class="small" x="665" y="316">water is reabsorbed here,</text>
   <text class="small" x="665" y="334">then faeces are egested</text>`,
  900,
  360,
);

const digestiveJuices = svgDiagram(
  "The Four Juices That Meet Food in the Gut",
  tileRow(
    [
      {
        title: "Saliva",
        body: "from the salivary glands\ncontains amylase and mucus\nnear neutral in the mouth",
        cls: "blue",
      },
      {
        title: "Gastric juice",
        body: "from gastric glands in the\nstomach wall: hydrochloric\nacid and the protease pepsin",
        cls: "pink",
      },
      {
        title: "Bile",
        body: "made by liver, stored in the\ngall bladder; no enzyme;\nbreaks fat into tiny drops",
        cls: "gold",
      },
      {
        title: "Pancreatic juice",
        body: "amylase, lipase and the\nprotease trypsin;\nalkaline, so trypsin can work",
        cls: "purple",
      },
    ],
    70,
    { x: 24, w: 852, h: 196, gap: 12 },
  ) +
    `<text class="small" x="450" y="296" text-anchor="middle">The ileum also releases intestinal juice, and its wall secretes protective mucus.</text>`,
  900,
  326,
);

const villusStructure = svgDiagram(
  "Inside One Villus: Structure Paired with Advantage",
  `<text class="title" x="450" y="34" text-anchor="middle">Every feature of the wall shortens the journey of a nutrient</text>
   <rect class="main" x="40" y="62" width="240" height="216" rx="26"/>
   <ellipse class="pink" cx="160" cy="170" rx="26" ry="72"/>
   <circle class="blue" cx="88" cy="112" r="15"/>
   <circle class="blue" cx="236" cy="126" r="15"/>
   <circle class="blue" cx="92" cy="232" r="15"/>
   <circle class="blue" cx="232" cy="240" r="15"/>
   <path class="line" d="M40 96 H22M40 126 H22M40 156 H22M40 186 H22M40 216 H22"/>
   <text class="small" x="160" y="175" text-anchor="middle">lacteal</text>
   ${labelledRows(
     [
       ["Villi", "folds that multiply surface area"],
       ["Microvilli", "cell surface projections, area again"],
       ["Epithelium", "one cell thick: a short pathway"],
       ["Capillaries", "take up glucose and amino acids"],
       ["Lacteal", "carries off glycerol and fatty acids"],
       ["Mitochondria", "energy for active transport out of the gut"],
     ],
     310,
     78,
     34,
   )}
   <text class="small" x="450" y="316" text-anchor="middle">Digested food is absorbed into blood or lymph, then carried to the liver and the rest of the body.</text>`,
  900,
  340,
);

const humanNutritionChapter: Chapter = {
  number: 7,
  title: "Human Nutrition",
  intro:
    "A **balanced diet** supplies every nutrient the body cannot make for itself, in the amounts that person needs.\n\nThis chapter looks at the **major food classes** and what each one is for, the **deficiency diseases** that follow from missing them.\n\nIt also covers the value of **roughage**, and the long muscular tube — with its enzymes, acids, alkalis and folded walls — that turns a meal into molecules the body can use.",
  subheadings: [
    {
      title: "What a Balanced Diet Has to Contain",
      body: `A **balanced diet** supplies all the major food classes in the right proportions, with enough energy for the person and enough **fibre** to keep the gut moving.\n\nThe proportions shift with age, sex, body size, activity, and whether someone is growing, pregnant or breastfeeding.

### Why the diet has to be planned rather than assumed

| Component | Why it must be in the diet |
| --- | --- |
| Carbohydrate | the body's main and quickest source of energy; also spares protein from being burned |
| Protein | supplies the amino acids the body cannot make, for growth and repair |
| Lipid (fat) | a concentrated energy store, insulation, part of cell membranes, a carrier for fat-soluble vitamins |
| Fibre (roughage) | not digested, but keeps the gut moving and prevents constipation |
| Vitamins | needed in tiny amounts to run specific reactions; the body cannot synthesise most of them |
| Mineral ions | used in structures and in the control of reactions, such as calcium in bone and iron in haemoglobin |
| Water | the solvent and transport medium of every reaction in the body |`,
      figure: balancedPlateArt,
      groups: [
        {
          bullets: [
            "**Essential amino acids** have to come from food; the body can make the rest from other amino acids, but only if nitrogen is available.",
            "**Vitamins A, D, E and K are fat-soluble** and are stored in the liver and in body fat, so a shortage builds up slowly.",
            "**The B vitamins and vitamin C are water-soluble**; they are not stored to any great extent, so they must be taken regularly in the diet.",
            "A diet can be adequate in energy yet unbalanced in nutrients; the two questions — how much, and of what kind — are always answered separately.",
            "The body builds some molecules itself, but not all, so the diet must supply the rest.",
            "Energy intake is measured in **kilojoules**, and needs rise with activity and growth.",
            "**Vitamin D** can be made in the skin by sunlight, so it does not all have to come from food.",
          ],
        },
      ],
      examinerTips: [
        "Give the definition as three parts: all the food classes, in the correct proportions, with enough energy for the person's needs.",
        "When asked how a diet should change for a group such as teenagers, athletes or pregnant women, name the nutrient that increases and the reason.",
        "More protein for growth, more carbohydrate for the energy demanded, more iron for the extra red blood cells.",
        "Mention water and fibre; answers that list only carbohydrate, fat and protein are incomplete.",
        "Say 'all the food classes **in the correct proportions**' — the wording itself is a marked phrase.",
      ],
      commonMistakes: [
        "Treating 'balanced diet' as 'eating less'. It is about proportions, not quantity.",
        "Calling a vitamin an energy food. Vitamins regulate reactions; they are not burned for energy.",
        "Claiming the body stores vitamin C, so a week without it cannot matter.",
        "Forgetting water and fibre when listing what a balanced diet must contain.",
      ],
      recap: [
        "Define a balanced diet. [3]",
        "State why the energy needs of a builder differ from those of an office worker. [2]",
        "Name the food classes that must be present in a balanced diet. [6]",
        "Explain why a diet of butter and sugar alone cannot maintain health. [3]",
      ],
    },
    {
      title: "The Major Food Classes and Their Functions",
      body: `### Carbohydrate\nSugars and starches of carbon, hydrogen and oxygen — the body's main and quickest energy source.

### Lipid\nCarbon, hydrogen and oxygen with far less oxygen, so fat is the most concentrated fuel.

### Protein\nChains of amino acids that also contain nitrogen — the structural food for growth and repair.`,
      groups: [
        {
          subTitle: "Sources, elements and functions",
          bullets: [
            "**Carbohydrate:** **sugars** are soluble and give energy fast; **starches** are glucose chains, insoluble, and release energy slowly.",
            "Staple carbohydrates are bread, rice, pasta, potato, yam and cassava; fruit supplies the sugar **fructose**.",
            "**Lipid** stores energy, insulates under the skin, protects organs such as the kidneys, and dissolves vitamins A, D, E and K.",
            "Fat sources are butter, margarine, groundnut and palm oil, coconut milk, fatty meat, fish and nuts.",
            "**Protein** forms enzymes, some hormones such as **insulin**, **antibodies** and the **haemoglobin** of red cells.",
            "Animal foods — meat, fish, eggs, milk, cheese — give all the amino acids; plant proteins are often incomplete.",
            "Cereal plus beans, as in rice and beans, combines incomplete plant proteins into a full set.",
          ],
        },
        {
          subTitle: "Energy, side by side",
          bullets: [
            "**Carbohydrate:** about 17 kJ released per gram.",
            "**Protein:** about 17 kJ per gram, but it is spent on energy only when carbohydrate is short, because its proper job is growth and repair.",
            "**Lipid:** about 38 kJ per gram, the most concentrated fuel in the diet; this is why fatty foods sustain a person for longer per mouthful.",
            "Excess carbohydrate, protein or fat is stored as body fat, whatever the original food class.",
            "Fat holds **more than twice** the energy per gram of carbohydrate or protein.",
            "Enough carbohydrate **spares protein** from being burned for energy.",
            "A stored lipids layer also helps a mammal keep its body temperature.",
          ],
        },
        {
          subTitle: "Testing which class is in a food sample",
          bullets: [
            "**Starch:** iodine solution changes from brown to blue-black.",
            "**Reducing sugar such as glucose:** add Benedict's solution and heat in a water bath; the blue turns green, then yellow, then orange, then brick-red as the sugar concentration rises.",
            "**Protein:** add biuret solution (sodium hydroxide with a little copper sulfate); the mixture changes from blue to purple-lilac.",
            "**Fat:** crush the food, dissolve it in ethanol, then pour the solution into water; a cloudy white emulsion shows lipid is present.",
            "Each test must be repeated on known solutions of the same food classes, so the colour changes can be compared with a standard result.",
            "**Biuret** needs no heating; only **Benedict's** is warmed in a water-bath.",
            "The **ethanol emulsion** test is the one for fats, not for proteins.",
            "A **control** with a known food sample makes the colour result defensible.",
          ],
        },
      ],
      examinerTips: [
        "Match the answer to the wording of the question: 'state a function' is one sentence; 'explain' needs the reason attached.",
        "For the food tests, name the reagent, describe the procedure only where it is needed (heating for Benedict's) and give both the starting and final colour.",
        "Give the element that distinguishes protein from carbohydrate and fat — nitrogen — when asked why protein is needed for growth.",
        "Quote the energy value **38 kJ per gram** for fat and **17 kJ** for carbohydrate when a figure is asked for.",
      ],
      commonMistakes: [
        "Saying fat contains more oxygen than carbohydrate; it contains proportionally much less.",
        "Reporting a Benedict's result without heating, or heating the sample directly in a flame.",
        "Naming protein as the body's main energy source; that role belongs to carbohydrate.",
        "Listing fibre as a nutrient that is absorbed; it is not digested.",
      ],
      recap: [
        "State the function of carbohydrate, protein and fat in the diet. [3]",
        "Name the chemical element found in protein but not in carbohydrate or fat. [1]",
        "Describe the tests you would use to show that a food contains starch and protein. [4]",
        "Explain why a fatty food supplies more energy per gram than a starchy one. [2]",
        "Give two uses of protein in the body other than as a structural material. [2]",
      ],
    },
    {
      title: "Deficiency Diseases and the Role of Roughage",
      figure: vitaminSourcesArt,
      body: `A diet that lacks one nutrient produces a characteristic illness, and the illness disappears when that nutrient is supplied again.\n\nThese are the deficiencies examined at this level.

| Missing nutrient | Sources in food | Function | Deficiency disease or symptom |
| --- | --- | --- | --- |
| Vitamin A (retinol) | liver, milk, butter, eggs, carrots and other orange vegetables | needed for the light-sensitive pigment of the retina and for healthy skin | poor vision in dim light, known as night blindness; dry skin; greater susceptibility to infection |
| Vitamin B1 (thiamine) | whole wheat and other cereals, pork, beans, nuts | needed for the release of energy from carbohydrate and for normal nerve function | beriberi: weakness and wasting of the muscles, with nervous-system symptoms; loss of appetite |
| Vitamin C (ascorbic acid) | citrus fruit, blackcurrants, guava, green peppers, fresh leafy vegetables | needed for the making of collagen in connective tissue, and for healthy gums and wound healing | scurvy: swollen and bleeding gums, loose teeth, slow healing of cuts, tiredness |
| Vitamin D | oily fish, eggs, milk and milk products; also made in the skin when sunlight falls on it | helps calcium and phosphate be absorbed from the ileum and laid down in bone | rickets in children: soft, bent legs; in adults, bones that lose mineral and break easily |
| Calcium | milk, cheese, other dairy food, fish eaten with its bones, green leafy vegetables | builds bone and teeth; needed for blood clotting and for the contraction of muscles | poor formation of bones and teeth, rickets in the young, thin bones that fracture in later life |
| Iron | red meat, liver, eggs, green leafy vegetables, beans | part of the haemoglobin of red blood cells, so it carries oxygen | anaemia: less haemoglobin, paleness, breathlessness and tiredness |

Vitamin C is destroyed by prolonged cooking and by soaking food in water for a long time, so a diet of overcooked, refined or processed food is the classic route to scurvy.

### Roughage, or dietary fibre
Fibre is the **cellulose** of plant cell walls.\n\nHuman enzymes cannot break it down, so it travels through the gut largely unchanged.\n\nIt is still essential:

- it **absorbs water**, which softens the faeces and adds bulk to them;
- the bulk **stretches the wall of the gut and stimulates peristalsis**, so material is moved along and emptied regularly;
- that prevents **constipation** and the diverticular problems that come from straining;
- a fibre-rich diet, typically one high in whole grains, vegetables, fruit, beans and peas, is associated with a lower incidence of bowel disorders and slows the rise of sugar in the blood after a meal;
- diets short in fibre and high in soft, sticky sugars are linked to tooth decay as well as to constipation.`,
      groups: [
        {
          subTitle: "Naming a deficiency in an answer",
          bullets: [
            "Give the nutrient, the food sources, the job it does and the disease it prevents; four-part questions are marked four parts at a time.",
            "Night blindness, beriberi, scurvy and rickets are the four disease names to spell correctly, alongside anaemia for a lack of iron.",
            "A shortage of total food, rather than of one nutrient, leads to weight loss and to **kwashiorkor**, the swollen-abdomen disease of protein shortage in young children whose diet is mostly cereal.",
            "**Vitamin D** is made in the skin by **sunlight**, so little sun can cause rickets even with a decent diet.",
            "**Iron** builds **haemoglobin**; a shortage carries less oxygen and brings breathlessness on exertion.",
            "Vitamin A serves the **retina pigment** and keeps the **skin and cornea** healthy.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish the cause from the symptom: 'a lack of vitamin C causes scurvy, in which the gums bleed' — both halves are usually marked.",
        "Rickets is a failure to lay down calcium in bone, so answers credit either a lack of vitamin D or a lack of calcium; say which you mean.",
        "On a data table of diets, identify the missing food group first, then name the disease that group would have prevented.",
        "For fibre, always say that it is not digested; the marks come from 'adds bulk', 'stimulates peristalsis' and 'prevents constipation'.",
      ],
      commonMistakes: [
        "Attributing night blindness to vitamin B1, or beriberi to vitamin A.",
        "Saying iron is needed 'for energy' instead of for haemoglobin and oxygen transport.",
        "Claiming fibre is digested in the large intestine and absorbed as a nutrient.",
        "Naming kwashiorkor as a vitamin deficiency; it is a shortage of protein.",
      ],
      recap: [
        "Name the disease caused by a lack of vitamin C and describe two of its symptoms. [3]",
        "State which vitamin is needed for calcium to be absorbed, and name the disease of children who lack it. [2]",
        "Explain why a person with anaemia feels breathless during exercise. [3]",
        "Give two food sources of fibre and explain how fibre prevents constipation. [4]",
        "A child eats only rice and very little other food, and has a swollen belly. Identify the missing food class. [2]",
      ],
    },
    {
      title: "Structure of the Mammalian Digestive System",
      body: `The **alimentary canal** is one continuous muscular tube running from the mouth to the anus, with the digestive glands — the salivary glands, liver and pancreas — lying outside it and emptying into it by ducts.

${gutJourney}`,
      figure: alimentaryCanalArt,
      groups: [
        {
          subTitle: "The canal, organ by organ",
          bullets: [
            "**Mouth:** teeth cut, tear and crush the food into small pieces while the tongue shapes it into a bolus; the **salivary glands** secrete saliva, which contains water, mucus to lubricate, and salivary amylase.",
            "**Pharynx (swallowing):** the tongue pushes the bolus backward and the epiglottis and soft palate close over the windpipe, so food goes down the gullet rather than the trachea.",
            "**Oesophagus (gullet):** rings of muscle in the wall contract behind the bolus in waves of **peristalsis**, moving it to the stomach even if the animal is upside down.",
            "**Stomach:** a muscular sac whose churning wall produces **gastric juice** from gastric glands — hydrochloric acid, the protease pepsin and mucus that protects the lining.",
            "Sphincters at each end regulate the entry of food and the escape of the acidic paste, chyme, a little at a time.",
            "**Duodenum (first part of the small intestine):** the acidic chyme is neutralised by alkaline bile and pancreatic juice; the fat is emulsified by bile; digestion is completed here.",
            "**Ileum:** the long, coiled remainder of the small intestine, lined with villi, where the finished products of digestion are absorbed.",
            "**Large intestine (colon):** water and some dissolved mineral salts are reabsorbed from the material left, thickening it into faeces.",
            "**Rectum and anus:** the rectum stores the faeces, and the anus, controlled by a sphincter muscle, egests them.",
            "A **cardiac sphincter** guards the stomach entrance and a **pyloric sphincter** its exit.",
            "Muscle layers run the whole length of the canal, driving peristalsis.",
            "The **ileum** is the longest region and the main site of absorption.",
          ],
        },
        {
          subTitle: "The glands that feed into the tube",
          bullets: [
            "**Salivary glands** in the mouth cavity: secrete saliva into the mouth.",
            "**Liver:** makes **bile**, which is stored and concentrated in the **gall bladder** and released through a duct into the duodenum.",
            "**Pancreas:** secretes **pancreatic juice** into the duodenum, carrying the enzymes amylase, lipase and trypsin, and hydrogencarbonate to neutralise the acid.",
            "**Gastric glands** in the stomach wall and **intestinal glands** in the wall of the ileum complete the set.",
            "The **pancreas** is the only gland releasing three digestive enzymes at once.",
            "Bile from the liver reaches the duodenum along the **bile duct**.",
            "The **intestinal glands** release **maltase** to finish starch digestion.",
          ],
        },
      ],
      examinerTips: [
        "Label on a diagram with the exact terms: oesophagus, stomach, duodenum, ileum, pancreas, gall bladder, liver, colon, rectum, anus.",
        "State that the pancreas produces several enzymes at once, and that the liver produces bile rather than an enzyme; confusing those two glands is the single most common error on this diagram.",
        "Keep the words peristalsis for muscle movement and emulsification for the physical breaking up of fat — they are not interchangeable.",
        "Say the **liver makes** bile and the **gall bladder only stores** it; they are named separately on the mark scheme.",
      ],
      commonMistakes: [
        "Drawing bile as coming from the pancreas, or pancreatic juice from the gall bladder.",
        "Saying digestion is completed in the stomach.",
        "Calling the movement of food by peristalsis 'digestion'; it is only the transport of food.",
        "Describing the egestion of faeces as excretion; faeces never entered the cells of the body.",
      ],
      recap: [
        "List the parts of the alimentary canal in the correct order. [8]",
        "State two substances secreted by the pancreas and give the role of each. [4]",
        "Name the organ that makes bile and the organ in which bile is stored. [2]",
        "Describe how food is moved along the oesophagus. [2]",
        "Explain what happens to the material that reaches the large intestine. [3]",
      ],
    },
    {
      title: "Digestion: Enzymes, Acids and Bile at Work",
      figure: teethArt,
      body: `**Mechanical digestion** breaks food into smaller pieces physically, changing its size and surface area but not its chemistry.\n\n**Chemical digestion** is the enzyme action that splits large **insoluble** molecules into small **soluble** ones that can enter the blood.

${digestiveJuices}

| Enzyme | Substrate | Product | Where it works |
| --- | --- | --- | --- |
| salivary and pancreatic amylase | starch | maltose | mouth, then duodenum |
| maltase from intestinal juice | maltose | glucose | ileum |
| pepsin | protein | shorter peptide chains | stomach, at an acid pH |
| trypsin | protein and peptides | amino acids | duodenum and ileum, at an alkaline pH |
| lipase | fats | fatty acids and glycerol | duodenum and ileum |`,
      groups: [
        {
          subTitle: "Enzyme work in the ileum, step by step",
          bullets: [
            "**Starch pathway:** amylase converts starch to maltose, and maltase then converts maltose to glucose.",
            "**Protein pathway:** pepsin in the stomach makes peptides; trypsin in the intestine breaks those peptides to amino acids.",
            "**Fat pathway:** bile emulsifies the fat first, then lipase splits the droplets into fatty acids and glycerol.",
            "Sugars, amino acids, glycerol and fatty acids are all **soluble**, so they can be absorbed; starch, protein and fat are **insoluble**, so they cannot.",
            "Each digestive enzyme is a **hydrolase**, splitting bonds by adding water.",
            "Only **maltase** finishes the starch-to-glucose step; amylase stops at maltose.",
            "Trypsin works at an **alkaline pH**, so it cannot act in the acid stomach.",
          ],
        },
        {
          subTitle: "Demonstrating the conditions enzymes need",
          bullets: [
            "Protein digestion by pepsin is shown with a tube of pepsin in acid and a tube of pepsin neutralised with alkali.",
            "Only the acid tube digests the thread of egg white or coagulated albumen.",
            "The action of salivary amylase on starch is followed with iodine at intervals, and the effect of temperature is shown by keeping the tubes on ice, in a water-bath at body temperature, and in boiling water.",
            "Emulsification is demonstrated by shaking fat with bile and comparing the size and persistence of the droplets with fat shaken with water alone.",
            "A **boiled-enzyme control** shows a denatured enzyme no longer digests.",
            "Iodine turning **brown** means the starch has been digested away.",
            "**Buffers** hold each tube at a set pH so only one variable changes.",
          ],
        },
        {
          subTitle: "Hydrochloric acid and bile",
          bullets: [
            "**Hydrochloric acid** kills most of the bacteria swallowed with the food.",
            "It gives the low **pH** at which **pepsin** works best.",
            "It **denatures proteins**, so pepsin can attack their chains more easily.",
            "**Bile** is alkaline, so it neutralises the acidic chyme for the intestinal enzymes.",
            "**Bile emulsifies** fat into tiny droplets, raising the surface area for lipase.",
            "Bile holds **no enzyme**, so it does no chemical digestion of its own.",
          ],
        },
      ],
      examinerTips: [
        "Use 'emulsifies', never 'digests', about bile. A full answer adds the reason: smaller droplets mean a larger surface area for lipase.",
        "Name the product exactly: amylase gives maltose, not glucose. The maltose-to-glucose step belongs to maltase.",
        "Link the pH of each region to the enzyme that works there: acid in the stomach suits pepsin, alkaline in the duodenum suits trypsin.",
        "Give one clear reason for chewing: more surface area for the enzymes, so digestion is faster and more complete.",
      ],
      commonMistakes: [
        "Calling bile an enzyme, or saying it contains lipase.",
        "Saying amylase in the mouth digests protein or fat.",
        "Claiming hydrochloric acid digests food chemically; it kills bacteria, provides the pH and denatures proteins.",
        "Writing 'amino acids' as the product of amylase or 'glucose' as the product of pepsin.",
      ],
      recap: [
        "Explain the difference between mechanical and chemical digestion. [3]",
        "Complete the table of enzyme, substrate and product for amylase, protease and lipase. [6]",
        "State three functions of hydrochloric acid in the stomach. [3]",
        "Explain how bile helps the digestion of fat. [3]",
        "Suggest why pepsin does not digest protein in the duodenum. [2]",
      ],
    },
    {
      title: "Absorption in the Small Intestine",
      body: `By the time the gut contents reach the **ileum**, digestion is finished, so the wall now absorbs the soluble products into blood and lymph.\n\nIts inner surface carries millions of finger-like **villi**.

${villusStructure}

Glucose and amino acids enter the **blood capillaries**; glycerol and fatty acids enter the **lacteal** at the centre of each villus.`,
      groups: [
        {
          subTitle: "The five adaptations, each with its reason",
          bullets: [
            "**Villi and microvilli:** an enormous surface area, so the maximum amount of the digested food can be absorbed in the time it takes to pass along.",
            "**A wall one cell thick:** the shortest possible diffusion path from the gut cavity into a capillary.",
            "**A dense capillary network:** absorbed molecules are carried away immediately, which keeps the concentration gradient steep and diffusion fast.",
            "**A lacteal in each villus:** the route out for the products of fat digestion, which do not pass into the blood capillaries in the same way.",
            "**Many mitochondria in the surface cells:** the energy for active transport, so that nutrients still move in when their concentration in the gut is lower than in the cells.",
            "The **hepatic portal vein** carries absorbed sugars and amino acids straight to the liver.",
            "**Water** follows the absorbed solutes out of the gut by **osmosis**.",
            "The **ileum** is several metres long and coiled, so contact time is long.",
          ],
        },
        {
          subTitle: "Beyond absorption: assimilation",
          bullets: [
            "The absorbed nutrients are **assimilated** into the body's own substances; the liver is the main processing centre.",
            "The amino acids taken in are rebuilt into the body's own proteins, some of which are enzymes, some hormones, some antibodies, and some structural proteins.",
            "Excess glucose is converted into **glycogen** and stored in the liver and in the muscles; glycogen is later broken back down to glucose when the muscles need it.",
            "Surplus carbohydrate and fat may be laid down as body fat, and excess amino acids are broken down in the liver, with the nitrogen-containing part converted into **urea** for excretion by the kidney.",
            "**Glycogen** is broken back to glucose between meals to hold the blood sugar steady.",
            "The liver also **detoxifies** harmful substances such as alcohol carried in the blood.",
            "Surplus absorbed fat is re-made into the body's own lipids for membranes and storage.",
          ],
        },
        {
          subTitle: "How the gut contents move and mix",
          bullets: [
            "**Peristalsis** continues along the intestine, pushing the contents forward in slow waves.",
            "The wall also kneads and churns the contents, mixing them with bile, pancreatic juice and intestinal juice so that every particle meets enzymes.",
            "The time the food spends in the ileum matters: coeliac-type damage to the villi, or a diet that moves too quickly, both lower the amount absorbed.",
            "Peristaltic waves are **slow and involuntary**, driven by muscle in the wall.",
            "**Segmenting** contractions knead the contents so every particle meets enzyme.",
            "Fast transit, as in diarrhoea, leaves less time for absorption.",
          ],
        },
      ],
      examinerTips: [
        "For an 'adapted for absorption' question, write structure plus advantage as a single sentence each: 'the villi increase the surface area, so more glucose is absorbed in a shorter time'.",
        "Do not stop at the villus; the wall of the ileum also has a good blood supply that maintains the concentration gradient, and that is often a separate mark.",
        "Distinguish absorption from assimilation. Absorption is the entry into the blood or lacteal; assimilation is the use of the material by the body's cells.",
        "Name the hepatic portal vein when asked where the absorbed sugars are taken first.",
      ],
      commonMistakes: [
        "Saying the villi 'produce enzymes'. They absorb; the juices in the gut do the digesting.",
        "Giving 'large surface area' with no name for the structures that create it.",
        "Placing absorption mainly in the stomach; the stomach absorbs very little, and the ileum does the work.",
        "Claiming the products of fat digestion enter the blood capillaries directly; they enter the lacteal.",
      ],
      recap: [
        "Describe three features of the wall of the ileum that make absorption efficient. [6]",
        "State which products of digestion enter the capillaries and which enter the lacteal. [4]",
        "Explain why the capillary network keeps diffusion from the gut fast. [3]",
        "Name two products absorbed in the ileum that are moved by active transport, and give the reason energy is needed. [3]",
        "Explain the difference between absorption and assimilation. [2]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_7: Chapter = humanNutritionChapter;
