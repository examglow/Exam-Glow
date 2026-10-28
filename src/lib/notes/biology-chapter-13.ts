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

const urinarySystemArt = artPanel([
  {
    src: "ch13-urinary-system.webp",
    alt: "Illustration of the human urinary system: kidneys, ureters, bladder and urethra",
    caption: "The urinary system",
  },
  {
    src: "ch13-kidney-section.webp",
    alt: "Cutaway of a kidney showing the cortex, medulla pyramids, pelvis and ureter",
    caption: "The structure of a kidney in section",
  },
]);

const dialysisArt = artPanel([
  {
    src: "ch13-dialysis.webp",
    alt: "A dialysis machine with coiled tubing in a fluid tank linked to a patient's arm",
    caption: "What a dialysis machine does for a failed kidney",
  },
]);

const nephronArt = artPanel([
  {
    src: "ch13-nephron.webp",
    alt: "Illustration of one nephron in the kidney with its collecting duct",
    caption: "One nephron and its collecting duct",
  },
]);

/** The four organs urine passes through, drawn as a labelled flow. */
const urinarySystemDiagram = svgDiagram(
  "The urinary system and the pathway urine travels",
  `<text class="title" x="450" y="34" text-anchor="middle">The urinary system, from kidney to exit</text>
  ${box(20, 70, 156, 56, "Kidney", "main")}
  ${box(200, 70, 156, 56, "Ureter", "blue")}
  ${box(380, 70, 156, 56, "Bladder", "gold")}
  ${box(560, 70, 156, 56, "Urethra", "pink")}
  <path class="arrow" d="M176 98 L200 98 M356 98 L380 98 M536 98 L560 98"/>
  <text class="small" x="98" y="146" text-anchor="middle">filters blood, makes urine</text>
  <text class="small" x="278" y="146" text-anchor="middle">tube down to bladder</text>
  <text class="small" x="458" y="146" text-anchor="middle">stores the urine</text>
  <text class="small" x="638" y="146" text-anchor="middle">urine passes out</text>
  <text class="muted" x="98" y="176" text-anchor="middle">renal artery in, renal vein out</text>
  <text class="small" x="450" y="214" text-anchor="middle">Two kidneys, each about the size of a fist, and each packed with roughly a million filtering units.</text>
  <text class="accent" x="450" y="246" text-anchor="middle">The kidneys do two jobs at once: remove urea, and keep water and salts balanced.</text>`,
  900,
  270,
);

/** A stylised nephron with a key naming each region and its role. */
const nephronDiagram = svgDiagram(
  "Structure of a nephron",
  `<text class="title" x="450" y="34" text-anchor="middle">One nephron: filter first, then decide what to keep</text>
  <circle class="main" cx="95" cy="110" r="40"/>
  <circle class="pink" cx="95" cy="110" r="20"/>
  <path class="arrow" d="M26 88 L58 100"/>
  <path class="arrow" d="M116 88 L150 66"/>
  <path class="line" d="M128 138 C150 158 168 120 196 138 C224 156 242 120 270 138"/>
  <path class="line" d="M270 138 L286 138 L286 200 Q286 224 306 224 Q326 224 326 200 L326 150 L342 150"/>
  <path class="line" d="M342 150 C362 132 376 168 396 150"/>
  <path class="arrow" d="M396 150 L414 158 L414 214"/>
  <text class="muted" x="150" y="96" text-anchor="middle">blood in / out</text>
  <text class="muted" x="430" y="214" text-anchor="middle">urine</text>
  ${labelledRows(
    [
      ["Glomerulus", "capillaries under high pressure"],
      ["Bowman capsule", "collects the filtered fluid"],
      ["Proximal tubule", "takes back all the glucose"],
      ["Loop of Henle", "sets how much water leaves"],
      ["Distal tubule", "adjusts salts as needed"],
      ["Collecting duct", "ADH controls water loss"],
    ],
    470,
    76,
    28,
  )}`,
  900,
  258,
);

/** Filtrate against urine: what passes, what is kept, what leaves. */
const filtrationVsReabsorptionDiagram = svgDiagram(
  "Ultrafiltration and selective reabsorption compared",
  `<text class="title" x="450" y="34" text-anchor="middle">Same fluid, two opposite processes</text>
  ${tileRow(
    [
      {
        title: "Filtered into capsule",
        cls: "main",
        body: "water\nurea\nglucose\nsalts\nsmall molecules only",
      },
      {
        title: "Left in the blood",
        cls: "pink",
        body: "blood cells\nlarge proteins\ntoo big to pass\nthe capillary wall",
      },
      {
        title: "Reabsorbed back",
        cls: "blue",
        body: "all the glucose\nmuch of the water\nuseful salts\nkept as needed",
      },
    ],
    58,
    { x: 24, w: 852, h: 172, gap: 16 },
  )}
  <text class="accent" x="450" y="256" text-anchor="middle">Ultrafiltration is non-selective; selective reabsorption is what turns filtrate into urine.</text>`,
  900,
  274,
);

/** The ADH negative-feedback loop drawn as a self-correcting chain. */
const adhLoopDiagram = svgDiagram(
  "ADH and the negative feedback that controls water loss",
  `<text class="title" x="450" y="34" text-anchor="middle">Water too low: how the body corrects itself</text>
  ${box(20, 70, 156, 56, "Dehydrated", "gold")}
  ${box(200, 70, 156, 56, "Hypothalamus", "blue")}
  ${box(380, 70, 156, 56, "Pituitary", "purple")}
  ${box(560, 70, 156, 56, "Collecting duct", "main")}
  ${box(740, 70, 156, 56, "Water reabsorbed", "pink")}
  <path class="arrow" d="M176 98 L200 98 M356 98 L380 98 M536 98 L560 98 M716 98 L740 98"/>
  <text class="small" x="98" y="146" text-anchor="middle">blood concentrated</text>
  <text class="small" x="278" y="146" text-anchor="middle">osmoreceptors fire</text>
  <text class="small" x="458" y="146" text-anchor="middle">releases more ADH</text>
  <text class="small" x="638" y="146" text-anchor="middle">duct turns permeable</text>
  <text class="small" x="818" y="146" text-anchor="middle">small dark urine</text>
  <path class="arrow" d="M818 126 L818 182 L98 182 L98 126"/>
  <text class="accent" x="458" y="208" text-anchor="middle">negative feedback: restoring balance switches the response back off</text>
  <text class="small" x="450" y="234" text-anchor="middle">Drinking too much reverses every step: less ADH, less water kept, a large volume of pale urine.</text>`,
  900,
  254,
);

/** Which organ removes which waste product. */
const excretoryOrgansDiagram = svgDiagram(
  "Four organs, four different jobs",
  `<text class="title" x="450" y="34" text-anchor="middle">Which organ removes what</text>
  ${tileRow(
    [
      { title: "Kidney", cls: "main", body: "urea, excess water\nand salts, as urine" },
      { title: "Lungs", cls: "blue", body: "carbon dioxide\nand water vapour" },
      {
        title: "Skin",
        cls: "gold",
        body: "water, salt and a\nlittle urea in sweat;\nevaporation cools",
      },
      { title: "Liver", cls: "pink", body: "makes the urea by\ndeamination; breaks\ndown alcohol" },
    ],
    60,
    { x: 24, w: 852, h: 168, gap: 16 },
  )}
  <text class="accent" x="450" y="256" text-anchor="middle">The liver makes urea but does not excrete it; the kidney is the organ that removes it.</text>`,
  900,
  274,
);

const chapterThirteen: Chapter = {
  number: 13,
  title: "Excretion in Humans",
  intro: `Your cells never stop doing chemistry, and chemistry leaves rubbish behind.\n\nEvery time a muscle fibre respires it makes **carbon dioxide**;\n\nEvery time you eat more protein than you need, the surplus amino acids have to be dismantled, and their nitrogen is turned into toxic **urea**.\n\nLeft in the blood, these products would poison you, so the body runs a waste-removal service.\n\nThis chapter is about that service:\n\nWhat **excretion** really means and how it differs from egestion and secretion, the **kidney** and its microscopic filter the **nephron**, the clever trick of filtering everything then reabsorbing what you want, and the **hormone ADH** that fine-tunes your water balance by **negative feedback**.\n\nIt closes with the organs that help (skin, lungs, liver), and with what happens when the kidneys fail.\n\nRead each part as an answer to a question: what waste must leave, which organ removes it, and how does the body keep the amounts just right?`,
  subheadings: [
    {
      title: "What the Kidneys Do",
      body: `### Excretion, defined\n\n**Excretion is the removal from the body of the toxic waste products made by the chemical reactions in cells.\n\nIt is not the same as getting rid of faeces, and that difference carries marks.\n\n### Egestion and secretion\n\n**Egestion** is the removal of undigested food as faeces; that material never entered a cell, so it was never a product of your metabolism.\n\n**Secretion** is the release of useful substances a cell has deliberately made, such as enzymes from a gland or hormones from an endocrine cell.\n\nExcretion throws away waste; secretion delivers something the body wants.\n\n### The three things that must be removed\n\nRespiration constantly produces **carbon dioxide**, which the lungs exhale.\n\nThe breakdown of excess amino acids in the liver produces **urea**, a nitrogenous waste carried in the blood and removed mainly by the kidneys.\n\n### Water and salts\nBecause you drink and eat salts unevenly, the body must also shed **excess water and excess salts** to keep the blood at a constant concentration. ==The kidneys handle urea and this water-and-salt balance at the same time.==\n\n### The kidney's two jobs\n\nEvery day the kidneys filter the entire volume of your blood many times over.\n\nThey do two related things: they **excrete** urea and excess salts into urine, and they **regulate** the water content of the blood, a process called **osmoregulation**.\n\n### Osmoregulation in one line\n\n**Osmoregulation is the control of the water content of the blood so its concentration stays constant.\n\nThe kidney does this by varying how much water is returned to the blood instead of lost in urine.\n\n### Blood in, blood out\n\nBlood reaches each kidney through the **renal artery** and leaves through the **renal vein**.\n\nBecause the nephrons strip out urea along the way, blood in the renal vein holds far less urea than blood in the renal artery.\n\n${urinarySystemDiagram}`,
      figure: urinarySystemArt,
      groups: [
        {
          subTitle: "The Urinary System, Part by Part",
          bullets: [
            "**Kidney (two of them):** removes urea and controls water and salt levels; blood arrives through the **renal artery** and leaves, cleaned, through the **renal vein**.",
            "**Ureter:** the muscular tube carrying urine from one kidney down to the bladder.",
            "**Bladder:** a muscular sac that **stores urine** until it is released; it makes no waste, so it is not itself an excretory organ.",
            "**Urethra:** the tube along which urine leaves the body during urination.",
            "**Renal artery:** carries blood **toward** the kidney under high pressure, rich in urea.",
            "**Renal vein:** carries blood **away** from the kidney with noticeably **less urea**, the simplest proof that the kidney excretes it.",
            "**Pelvis of the kidney:** the funnel that collects urine from the collecting ducts and passes it into the ureter.",
          ],
        },
        {
          subTitle: "The Waste Products and Where They Come From",
          bullets: [
            "**Carbon dioxide:** made during respiration in every cell; removed by the **lungs**.",
            "**Urea:** made in the **liver** when excess amino acids are broken down; removed by the **kidneys** in urine.",
            "**Excess water:** not a metabolic waste itself, but removed by the kidneys so the blood does not become too dilute.",
            "**Excess salts (ions):** taken in with food and removed by the kidneys, and a little in the sweat from the skin.",
            "**Osmoregulation:** the balancing act that keeps the blood's water and salt concentration constant.",
            "**Definition check:** excretion removes substances **made inside** the body; egestion removes material that only ever passed along the gut.",
            "The body has no safe store for urea, so it must be removed steadily from the blood.",
          ],
        },
      ],
      examinerTips: [
        "When asked to define excretion, name it as the removal of **waste products made by chemical reactions in the body**, and name the substances.",
        "**carbon dioxide** and **urea**. Saying 'removal of faeces' scores zero.",
        "For the three products, state each one **with its source**.",
        "Carbon dioxide from respiration, urea from deamination of excess amino acids, plus excess water and salts. Naming the source is often the second mark.",
        "If a question asks whether the bladder excretes urine, answer carefully: the bladder **stores** urine, the kidney **produces** it. Use those two verbs precisely.",
        "To prove the kidney excretes urea, compare the **renal artery (more urea)** with the **renal vein (less urea)**; the fall across the organ is the evidence examiners want.",
      ],
      commonMistakes: [
        "Calling faeces a waste product of excretion. Faeces is undigested food removed by egestion, and it never entered the body's cells.",
        "Saying the kidney makes urea. Urea is made in the **liver**; the kidney only removes it from the blood.",
        "Confusing the renal artery and renal vein. The **artery** brings blood with urea to be filtered; the **vein** carries blood away with less urea.",
        "Equating excretion with urination. Urination releases stored urine; excretion is the whole removal of metabolic waste, which begins in the nephron.",
      ],
      recap: [
        "Define excretion and name two substances that are excreted by the human body. [3]",
        "Explain why the removal of faeces is not excretion. [2]",
        "State the function of each of these parts of the urinary system: kidney, ureter, bladder, urethra. [4]",
        "Compare the urea concentration of the blood in the renal artery with that in the renal vein, and explain the difference. [3]",
      ],
    },
    {
      title: "The Nephron and Ultrafiltration",
      body: `### The filter unit\n\nEach kidney holds about **one million nephrons**, and a nephron is the tiny tube where urine actually begins.\n\nIts parts, in the order the fluid passes them, are the **glomerulus**, the **Bowman's capsule**, the **proximal convoluted tubule**, the **loop of Henle**, the **distal convoluted tubule** and the **collecting duct**.\n\n### A knot of capillaries\n\nThe glomerulus is a dense ball of capillaries fed by a wide arteriole and drained by a narrow one.\n\nThe Bowman's capsule is a cup of specialized cells that fits tightly around the glomerulus and catches whatever is filtered.\n\n### Ultrafiltration, step by step\n\nBlood enters the glomerulus at **high pressure**, because it arrives through a wide vessel and leaves through a much narrower one.\n\nThat pressure drives filtration, and the capillary wall together with the capsule wall acts as a **filter**: small molecules are forced through while large ones are held back.\n\n### What the filtrate is\n\nThe fluid that collects in the capsule is **blood plasma with no large protein molecules in it**.\n\nIt is not yet urine; it is the **filtrate**, and every step that follows reshapes it.\n\n> Filtration is by **size alone**, so it is non-selective: it lets every small molecule through whether or not the body needs it.\n\n${nephronDiagram}`,
      figure: nephronArt,
      groups: [
        {
          subTitle: "What Passes and What Stays",
          bullets: [
            "**Forced into the Bowman's capsule:** water, **urea**, **glucose**, salts (mineral ions) and amino acids, all dissolved.",
            "**Kept in the blood:** **red blood cells** and other blood cells, and **large protein molecules**, because they are too big to pass the filter walls.",
            "**The filter works on size alone**, so it is **non-selective**; it does not 'choose' useful molecules, it simply lets every small one through.",
            "**Glucose and amino acids** are small enough to filter freely, which is why they are lost from the blood at this stage.",
            "That is why a healthy person loses no glucose or protein permanently: the useful small molecules are taken back later by reabsorption.",
            "**Protein in the urine** points to a damaged filter; **glucose in the urine** points to diabetes rather than to filtration.",
          ],
        },
        {
          subTitle: "The Pressure That Makes It Happen",
          bullets: [
            "The blood supply to the glomerulus enters and leaves through **arterioles**; the incoming one is wider than the outgoing one, so pressure rises inside the capillary knot.",
            "The **high hydrostatic pressure** squeezes water and small solutes out of the plasma and into the capsule.",
            "The capillary walls are **thin and perforated**, giving a short pathway and a large surface area for the filtrate to escape through.",
            "**Filtration is passive**, driven by blood pressure, so it costs the nephron no energy of its own.",
            "The narrow outgoing arteriole keeps blood backed up in the glomerulus, sustaining the pressure that forces filtration.",
            "Because it runs on pressure, damage to the blood vessels of the kidney directly weakens ultrafiltration.",
          ],
        },
      ],
      examinerTips: [
        "For 'how is urine formed at the glomerulus', give the words the scheme wants: **high pressure**, **filtration through the capillary and capsule walls**, and the named products that pass (**water, urea, glucose, salts**).",
        "Always state what does **not** get filtered: **blood cells and large proteins**. A description of ultrafiltration that omits these loses the mark.",
        "Name the correct process word for each stage: **ultrafiltration** at the glomerulus, **selective reabsorption** in the tubule. Using one for the other costs marks.",
        "When listing the nephron parts, give them **in order** and name the arterioles too; a wider incoming than outgoing arteriole is the reason pressure is high.",
      ],
      commonMistakes: [
        "Saying the glomerulus filters blood using energy from respiration. Filtration is passive, driven by **blood pressure**.",
        "Claiming glucose is reabsorbed at the glomerulus. At the glomerulus glucose simply **passes into the filtrate**; it is taken back later in the proximal convoluted tubule.",
        "Writing that proteins are filtered out because they are toxic. They stay in the blood because they are **too large to pass**, not because they are harmful.",
        "Calling the filtrate 'urine'. The fluid in the Bowman's capsule is **filtrate**; urine is only what leaves after reabsorption.",
      ],
      recap: [
        "Name the six parts of a nephron in the order the filtrate passes through them. [6]",
        "Describe how ultrafiltration takes place at the glomerulus. [4]",
        "State which substances are normally filtered out of the blood at the glomerulus and which are not. [4]",
        "Explain why the blood in the glomerulus is under high pressure, and why that pressure is important. [3]",
      ],
    },
    {
      title: "Selective Reabsorption",
      body: `### Filtering everything, then choosing\n\nUltrafiltration is wasteful on purpose: the nephron dumps water, glucose and salts into the capsule whether or not the body needs them.\n\nThe saving happens next, because the tubule takes back the useful substances, a process called **selective reabsorption**.\n\n### Where reabsorption goes\nWhatever is reabsorbed crosses the tubule wall and passes straight into the **blood capillaries** wrapped tightly around the tubule. Those capillaries then carry the reclaimed substances back into the circulation.\n\n### Glucose is the priority\n\nGlucose is a valuable fuel, so the body does not want to lose any of it.\n\nIn the **proximal convoluted tubule**, essentially **all the glucose is reabsorbed** back into the blood by **active transport**, which uses energy.\n\n### When the limit is passed\n\nIf the blood carries more glucose than the tubule can reclaim, such as in uncontrolled diabetes mellitus, the surplus escapes and **glucose appears in the urine**.\n\nReabsorption therefore has a maximum rate, set by the transport proteins available.\n\n### Water and salts follow need, not set amounts\n\nThe **loop of Henle** and the **collecting duct** decide how much water and salt to keep, and they change that answer from hour to hour under the control of the hormone **ADH**.\n\nBy the time the fluid leaves as urine it has no glucose, far more concentrated urea, and only the water and salts the body can spare.\n\n${filtrationVsReabsorptionDiagram}`,
      groups: [
        {
          subTitle: "What Happens in Each Region",
          bullets: [
            "**Proximal convoluted tubule:** all the **glucose** is reabsorbed, together with some **amino acids**, some **salts** and some **water**.",
            "**Loop of Henle:** reabsorbs **salts**, which raises the concentration of the surrounding tissue fluid and makes it harder for water to leave later.",
            "**Distal convoluted tubule:** fine-tunes the amount of **salt** returned to the blood.",
            "**Collecting duct:** the volume of **water** that stays in the duct, and so leaves as urine, is set by **ADH**; more water reabsorbed means less urine.",
            "**Glucose reabsorption** is by **active transport**, so it needs energy from respiration.",
            "**Water reabsorption** is always by **osmosis**, so it only happens where a membrane lets water through, which is exactly what ADH controls.",
          ],
        },
        {
          subTitle: "Filtrate Compared With Urine",
          bullets: [
            "The table below summarises the change from the fluid at the start of the nephron to the fluid at the end.",
            "| Substance | Fluid in Bowman's capsule (filtrate) | Urine |\n| --- | --- | --- |\n| Water | High volume, dilute | Variable volume, concentrated |\n| Glucose | Present | Absent (fully reabsorbed) |\n| Urea | Present, dilute | Present, highly concentrated |\n| Salts | Present | Present, excess only |\n| Proteins | Absent | Absent |\n| Blood cells | Absent | Absent |",
            "**The key differences:** urine has **no glucose**, a **much higher concentration of urea**, and a **variable amount of water and salts** that reflects what the body needed to get rid of.",
            "**Urea is not reabsorbed** much, so removing water concentrates it sharply in the urine.",
            "A normal adult produces about **1 to 2 litres of urine a day**, but the volume can swing widely with fluid intake, temperature and exercise.",
            "**Selective** means the tubule keeps the useful solutes and only as much water and salt as the body requires.",
          ],
        },
      ],
      examinerTips: [
        "For a 'compare filtrate and urine' question, give at least two named differences.",
        "**glucose present in filtrate but absent from urine**, and **urea far more concentrated in urine**. Quote the word **reabsorbed** to explain why.",
        "When a question asks how glucose normally disappears, the correct chain is.",
        "Filtered into the capsule, then **reabsorbed back into the blood in the proximal convoluted tubule**. Do not say it is 'not filtered'.",
        "If asked why reabsorption is called **selective**, say the tubule takes back **useful substances and only the amounts needed**, unlike filtration which is by size alone.",
        "Match process to place precisely: **all glucose** in the proximal convoluted tubule, **salts** in the loop of Henle, **water under ADH** in the collecting duct.",
      ],
      commonMistakes: [
        "Saying glucose is prevented from entering the filtrate at the glomerulus. It **does** enter; it is later **reabsorbed**. The distinction is worth a mark.",
        "Thinking water is reabsorbed by active transport. Water always moves by **osmosis**; the solutes are what get pumped.",
        "Believing the amount of water reabsorbed is fixed. It varies with the body's water balance, which is why urine concentration changes.",
        "Naming the wrong tubule region for glucose. **All glucose is reclaimed in the proximal convoluted tubule**, not the loop of Henle.",
      ],
      recap: [
        "Where in the nephron is glucose reabsorbed, and by what process? [2]",
        "State two differences between the composition of the fluid in the Bowman's capsule and the composition of urine. [4]",
        "Explain why reabsorption in the tubule is described as selective. [2]",
        "Explain why a person with uncontrolled diabetes mellitus can have glucose in the urine. [3]",
      ],
    },
    {
      title: "Urine, ADH and Osmoregulation",
      body: `### The system being controlled\n\n**Osmoregulation is the control of the water content of the blood.\n\nThe variable held steady is the concentration of the blood, and the hormone that adjusts it is **ADH (antidiuretic hormone)**.\n\n### Where ADH comes from\n\nADH is **made in the hypothalamus** and **released into the blood by the pituitary gland**.\n\nLike every hormone it travels in the blood and acts on a specific **target**, which is the wall of the **collecting duct** and distal tubule.\n\n### Too concentrated: the dehydration branch\nWhen you have not drunk enough, sweat heavily, or eat very salty food, the blood becomes too concentrated. **Osmoreceptors** in the **hypothalamus** detect the rise in concentration.\n\nThe hypothalamus triggers **thirst** so you drink, and the **pituitary releases more ADH**.\n\nMore ADH makes the **collecting duct more permeable to water**, so **more water is reabsorbed** back into the blood by osmosis.\n\nThe result is a **small volume of concentrated, dark-yellow urine**, and the blood returns to normal concentration.\n\n### Too dilute: the over-hydration branch\n\nDrink a lot of water and the reverse happens: the blood is too dilute, **less ADH** is released, and the collecting duct stays **less permeable**.\n\nLittle water is reabsorbed, so you produce a **large volume of dilute, pale urine**.\n\n### Why this is negative feedback\n\nBecause the response reverses the original change, the whole control is **negative feedback**.\n\nEach correction removes the stimulus that started it, so ADH release falls again once the blood is normal.\n\n${adhLoopDiagram}\n\n### When the kidneys cannot do it: dialysis\nIf the kidneys fail, urea and excess water and salts pile up in the blood, which is poisonous and fatal unless removed. A **dialysis machine** does the filter's job.\n\nBlood is taken from an artery and passed through a **partially permeable membrane** bathed in **dialysis fluid**.\n\nThe dialysis fluid is matched to normal blood in its **glucose and salt concentration** but contains **no urea**.\n\nSo urea and excess salts diffuse down their concentration gradients **out of the blood** and into the dialysis fluid.\n\nUseful glucose and the correct amount of salts stay, because there is no gradient pulling them out.\n\nExcess water leaves by osmosis, the blood is warmed, and it is returned to a vein. ==A patient typically needs dialysis about three times a week, for several hours each session.==`,
      groups: [
        {
          subTitle: "The ADH Pathway, In Order",
          bullets: [
            "**Stimulus:** the blood becomes **too concentrated** because it holds too little water.",
            "**Detected by:** **osmoreceptors** in the **hypothalamus**, sensitive to blood concentration.",
            "**Coordinated by:** the hypothalamus, which also triggers **thirst** so the person drinks.",
            "**Hormone released:** **ADH** from the **pituitary gland**, carried to the kidneys in the blood.",
            "**Effector and response:** the **collecting duct** becomes **more permeable to water**, so **more water is reabsorbed** into the blood by osmosis.",
            "**Result:** a **smaller volume** of **more concentrated (darker) urine**, and the blood concentration falls back to normal.",
          ],
        },
        {
          subTitle: "Over-Hydration and Negative Feedback",
          bullets: [
            "**Stimulus reversed:** drinking a lot makes the blood **too dilute**.",
            "**Less ADH** is released, so the collecting duct stays **less permeable to water**.",
            "**Little water is reabsorbed**, producing a **large volume of pale, dilute urine**.",
            "**Negative feedback:** once the blood returns to normal concentration the trigger stops and ADH release falls again.",
            "Dehydration and over-hydration are opposite branches run by the same hormone.",
          ],
        },
        {
          subTitle: "Dialysis Versus a Working Kidney",
          bullets: [
            "Both remove **urea and excess water and salts** and both use a **partially permeable membrane**.",
            "Dialysis works by **diffusion along concentration gradients**, with the dialysis fluid constantly renewed so the gradient for urea is maintained.",
            "The **glucose and salt concentrations of the dialysis fluid equal those of normal blood**, so those substances are not lost from the patient.",
            "**No urea in the dialysis fluid** keeps a steep urea gradient, so urea keeps leaving the blood.",
            "Dialysis is only a substitute, not a cure: it must be repeated and does not restore the kidney's hormone functions.",
          ],
        },
      ],
      examinerTips: [
        "For an ADH question, always run the chain in order and name each part.",
        "**stimulus → receptor (osmoreceptor in hypothalamus) → coordination (hypothalamus) → hormone (ADH from pituitary) → effector (collecting duct) → response (more water reabsorbed) → normalised blood.**.",
        "Missing **ADH** or naming the wrong hormone loses marks.",
        "Explain that more ADH produces a **smaller volume of more concentrated urine**, and give the reason: the collecting duct is more permeable, so more water leaves by osmosis. Both halves earn marks.",
        "For dialysis, the key point is **why urea leaves but glucose does not**.",
        "The dialysis fluid contains no urea (so it diffuses out) but is matched to blood in glucose (so no net loss). Name the **partially permeable membrane**.",
        "Define **negative feedback** in your answer: the response reverses the original change and so switches the stimulus off. Examiners look for exactly that logic.",
      ],
      commonMistakes: [
        "Saying ADH is produced by the pituitary. It is **made in the hypothalamus** and **released by the pituitary**.",
        "Claiming ADH controls how much water is **filtered**. It controls how much is **reabsorbed**; filtration depends on blood pressure.",
        "Thinking more ADH gives more dilute urine. More ADH means **more water reabsorbed**, so the urine is **less in volume and more concentrated**.",
        "Saying the dialysis fluid contains urea to draw urea out. It contains **no urea**, which is exactly why urea diffuses from the blood into it.",
      ],
      recap: [
        "Describe how the body responds when the blood becomes too concentrated, naming the hormone involved. [6]",
        "Explain the effect of more ADH on the volume and concentration of the urine. [3]",
        "A patient's kidneys have failed. Explain how a dialysis machine keeps the blood free of urea without removing glucose. [5]",
        "Explain why the control of blood water by ADH is described as negative feedback. [3]",
      ],
    },
    {
      title: "Skin, Lungs and Liver as Excretory Organs",
      body: `### The kidneys are not the only exit\nAlthough the kidneys are the main excretory organs, three other structures also remove substances, and each uses different chemistry.\n\n> Remember: an organ is only 'excreting' if it removes something the body has **made** or has in **surplus**.\n\nThat rule separates real excretion (carbon dioxide, urea, excess water) from egestion.\n\n### The skin\n\nSweat glands release **sweat**, which is mostly **water and salt** with a little **urea**, so sweating is genuinely excretory.\n\nIts bigger role is **cooling**: as the water in sweat evaporates it carries heat away from the skin.\n\nOn a hot day, or during exercise, you sweat more, so both the excretion and the cooling rise.\n\n### The lungs\n\nEvery breath removes **carbon dioxide**, the waste of respiration, and with it **water vapour**, so the lungs excrete a gas and lose water.\n\nThe faster you respire, the more carbon dioxide you must blow out.\n\nThis is why breathing quickens during exercise, when the respiration rate is highest.\n\n### The liver\n\nThe liver is where **urea is made**, not where it leaves the body.\n\nExcess amino acids that cannot be stored are stripped of their nitrogen in a reaction called **deamination**, and that nitrogen is converted to urea.\n\nThe urea enters the blood and is carried to the kidney for removal.\n\nThe liver also **breaks down alcohol and many drugs** into harmless substances and recycles old red blood cells.\n\n### Deamination, named\n\n**Deamination** is the specific word for removing the amino group from an excess amino acid, and it happens **only in the liver**.\n\nIt is why a high-protein diet raises the urea load carried to the kidneys.\n\n${excretoryOrgansDiagram}`,
      groups: [
        {
          subTitle: "Each Organ and Its Products",
          bullets: [
            "**Kidney:** removes **urea, excess water and excess salts** as urine, and regulates blood water concentration.",
            "**Lung:** removes **carbon dioxide** and **water vapour** on exhalation; the rate is set by how fast the body respires.",
            "**Skin:** removes **water, salt and a small amount of urea** as sweat, and **cools the body** as that sweat evaporates.",
            "**Liver:** **makes urea by deamination** of excess amino acids and **breaks down toxic substances** including alcohol; it does not itself excrete the urea.",
            "**Deamination** occurs **only in the liver**, and its nitrogen product becomes urea.",
            "The **energy release** of respiration is what makes the carbon dioxide the lungs must remove.",
          ],
        },
        {
          subTitle: "How Exercise Changes All of Them",
          bullets: [
            "Muscles respire faster, so **more carbon dioxide** is produced and the **lungs** exhale it more quickly.",
            "Respiration releases more heat, so **body temperature rises** and the **skin sweats more** to lose that heat by evaporation.",
            "Sweating removes water and salt, which raises the blood concentration and triggers the **ADH** response to conserve water.",
            "Faster metabolism means more amino acids are processed, so the **liver** produces urea at a higher rate for the **kidneys** to remove.",
            "Heavy breathing also loses more **water vapour**, adding to the fall in blood water during hard exercise.",
          ],
        },
        {
          subTitle: "Sweat, Cooling and Homeostasis",
          bullets: [
            "**Evaporation removes heat:** turning liquid water into vapour takes energy from the skin, lowering its temperature.",
            "**Salt balance:** sweat contains salt, so heavy sweating removes ions as well as water.",
            "**Both roles matter:** sweating is excretory (removes water, salt, urea) and regulatory (controls temperature).",
          ],
        },
      ],
      examinerTips: [
        "If asked to name other excretory organs besides the kidney, give the **lungs** (carbon dioxide and water) and the **skin** (water, salts, some urea).",
        "Naming the liver as excretory is only safe if you say it **makes** urea, not that it removes it.",
        "For a question about sweating, state **both** functions to earn full marks: it removes **water and salts** and its **evaporation cools the body**.",
        "Define **deamination** precisely as the breakdown of excess amino acids in the liver to form **urea**; a vague 'breaking down protein' often only scores one mark.",
        "Link exercise to every organ: faster respiration gives more carbon dioxide for the lungs, more heat gives more sweat, and more amino-acid breakdown gives more urea for the kidneys.",
      ],
      commonMistakes: [
        "Saying the liver excretes urea. The liver **produces** urea; the **kidney excretes** it.",
        "Calling sweat 'mostly water and salt' only, and forgetting it also carries **some urea**, so it does count as excretion.",
        "Thinking the lungs only exchange gases and remove nothing else. The lungs also lose **water vapour** with every breath.",
        "Saying sweat cools because it is cold. It cools by **evaporation**, which removes heat energy from the skin.",
      ],
      recap: [
        "Name three organs, other than the kidney, that remove substances from the body, and state what each removes. [6]",
        "Explain the role of the liver in the production of urea. [3]",
        "Describe how sweating both excretes waste and helps control body temperature. [3]",
        "Define deamination and state where it takes place. [2]",
      ],
    },
    {
      title: "Lifestyle, Health and Kidney Failure",
      figure: dialysisArt,
      body: `### Why kidneys fail\nThe kidneys are full of tiny blood vessels, so anything that damages blood vessels damages them. The three causes examiners expect are **high blood pressure (hypertension)**, **diabetes** and **infection**.\n\nHigh blood pressure strains and scars the delicate capillaries of the nephrons.\n\nDiabetes injures the filtering vessels when blood glucose stays high for years, and infection can scar the kidney tissue.\n\nA blocked ureter or kidney stones can also stop urine draining, but the classic triad is pressure, sugar and infection.\n\n### The two treatments\n\nWhen both kidneys can no longer clean the blood, there are two options.\n\n**Dialysis** substitutes for the kidney: the patient is linked to a machine for several hours, typically **about three times a week**, for the rest of their life.\n\nA **kidney transplant** replaces the organ with a working one.\n\nOne healthy kidney is enough for normal life, so a **living donor** (often a relative giving one of their two) or a **deceased donor** can supply it.\n\n### Matching and rejection\n\nA transplanted kidney carries proteins the recipient's immune system may recognise as **foreign**, so it will be **attacked and rejected**.\n\nTo prevent this, the tissues are matched as closely as possible by **blood group and tissue type**.\n\nAfter the operation the patient takes **immunosuppressant drugs** every day for life.\n\nThese **dampen the immune response** so the kidney survives, but the same dampening leaves the patient **far more vulnerable to infections**, the major long-term risk.\n\n### Protecting the organs\nThe kidneys, liver and heart share the same lifestyle enemies. A diet too rich in **salt and fat** encourages high blood pressure, which strains the kidneys.\n\nToo much **sugar** and an overweight body raise the risk of type 2 diabetes and its damage to nephrons.\n\nHeavy **alcohol** overloads the liver, whose cells are destroyed and replaced by scar tissue in **cirrhosis**.\n\n==A balanced diet, moderate to no alcohol, staying hydrated and not smoking all reduce the load on these organs.==`,
      groups: [
        {
          subTitle: "Causes and Consequences of Kidney Disease",
          bullets: [
            "**High blood pressure** damages the small arteries in the kidney, lowering the filtering capacity of the nephrons.",
            "**Diabetes** (especially type 2) exposes the kidney vessels to high glucose over years, damaging the filter.",
            "**Infection** of the urinary tract can spread to the kidney and scar the tissue.",
            "As filtration falls, **urea and excess salts and water build up** in the blood, and the patient must have dialysis or a transplant.",
            "Damage to the filter can also let **protein** leak into the urine, which is why protein in a urine sample is a diagnostic warning sign.",
            "**Kidney stones** or a blocked ureter stop urine draining and can raise pressure that damages the kidney.",
          ],
        },
        {
          subTitle: "Dialysis Versus Transplant",
          bullets: [
            "**Dialysis:** no donor needed and available immediately, but the patient is tied to a machine roughly three times a week for several hours.",
            "**Transplant:** restores near-normal kidney function and freedom from the machine, but requires a donor and major surgery.",
            "**Donor source:** a **living donor** who still has one kidney left, or a **deceased donor**, with a persistent shortage of available kidneys.",
            "**Matching:** blood group and tissue type are matched as closely as possible to reduce rejection.",
            "**Immunosuppressants:** taken for life to stop white blood cells rejecting the organ; their side effect is a much higher risk of infection.",
          ],
        },
        {
          subTitle: "Lifestyle and Long-term Risk",
          bullets: [
            "**Salt and saturated fat** raise blood pressure, which slowly injures the nephron vessels.",
            "**Excess sugar** and being overweight drive type 2 diabetes, the leading cause of kidney failure.",
            "**Heavy alcohol** causes liver cirrhosis, so the liver can no longer detoxify the blood or make urea safely.",
            "**Smoking** narrows and damages blood vessels, reducing the blood supply the kidneys depend on.",
          ],
        },
      ],
      examinerTips: [
        "For 'name causes of kidney failure', give the expected set: **high blood pressure, diabetes and infection**. Adding 'blocked ureter' is fine but is usually the less-credited answer.",
        "For a transplant question, you nearly always need **two** linked ideas: **tissue/blood-group matching** and **immunosuppressant drugs** to prevent rejection. Mentioning only one loses the second mark.",
        "When a question links lifestyle to the liver or kidneys, name the **substance and the organ**: too much **alcohol** scars the **liver**.",
        "Too much **salt/fat** raises blood pressure and damages the **kidney**; too much **sugar** drives type 2 diabetes and kidney damage.",
        "To compare the treatments, weigh both sides: dialysis is available now but machine-bound, transplant is freeing but donor-limited and needs lifelong drugs. One clear advantage each earns the marks.",
      ],
      commonMistakes: [
        "Saying a patient can stop the immunosuppressant drugs once the new kidney works. They are taken **for life**, because rejection continues whenever the drugs are withdrawn.",
        "Confusing immunosuppressant with antibiotic. Immunosuppressants **lower** the immune response (raising infection risk); antibiotics fight bacteria.",
        "Thinking one donated kidney is not enough for the recipient. A single healthy kidney is sufficient to filter the blood normally.",
        "Believing dialysis cures kidney failure. It only **replaces the filtering** function and must be repeated.",
      ],
      recap: [
        "State three factors that can lead to kidney failure. [3]",
        "Compare dialysis and a kidney transplant as treatments, giving one advantage of each. [4]",
        "Explain why a transplant patient must take immunosuppressant drugs and what risk those drugs create. [3]",
        "Explain how high blood pressure and diabetes each damage the kidney. [4]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_13: Chapter = chapterThirteen;
