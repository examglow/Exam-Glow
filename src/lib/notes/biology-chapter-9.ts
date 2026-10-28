import type { Chapter } from "./types";
import { svgDiagram, box, tileRow, labelledRows, colors } from "./diagram-kit";

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

const heartArt = artPanel([
  { src: "ch09-human-heart.webp", alt: "Model of a human heart", caption: "The mammalian heart" },
]);

const bloodCellsArt = artPanel([
  {
    src: "ch09-blood-cells.webp",
    alt: "Red and white blood cells inside a vessel",
    caption: "Blood cells inside a vessel",
  },
  {
    src: "ch09-blood-clot.webp",
    alt: "A torn vessel wall with platelets and a fibrin mesh trapping red cells",
    caption: "How a clot seals a cut",
  },
]);

const vesselsArt = artPanel([
  {
    src: "ch09-artery-vein.webp",
    alt: "Artery and vein shown side by side in cross section",
    caption: "Artery and vein in cross section",
  },
]);

const circulationDiagram = svgDiagram(
  "Double circulation: two circuits from one heart",
  `<text class="title" x="450" y="34" text-anchor="middle">Every complete lap of the blood crosses the heart twice</text>
  ${box(210, 66, 480, 54, "Lungs (gas exchange)", "purple")}
  ${box(190, 168, 220, 72, "Right side (RA + RV)", "blue")}
  ${box(490, 168, 220, 72, "Left side (LA + LV)", "pink")}
  ${box(210, 300, 480, 54, "Body tissues (respiring cells)", "gold")}
  <path d="M300 164v-38" fill="none" stroke="${colors.blue}" stroke-width="4" marker-end="url(#ah)"/>
  <path d="M600 126v38" fill="none" stroke="${colors.pink}" stroke-width="4" marker-end="url(#ah)"/>
  <path d="M600 244v52" fill="none" stroke="${colors.pink}" stroke-width="4" marker-end="url(#ah)"/>
  <path d="M300 296v-52" fill="none" stroke="${colors.blue}" stroke-width="4" marker-end="url(#ah)"/>
  <text class="small" x="288" y="146" text-anchor="end">pulmonary artery</text>
  <text class="small" x="612" y="146">pulmonary vein</text>
  <text class="small" x="612" y="274">aorta</text>
  <text class="small" x="288" y="274" text-anchor="end">vena cava</text>
  <text class="small" x="450" y="384" text-anchor="middle">The pulmonary circuit to the lungs and the systemic circuit to the body run at the same time, in parallel.</text>
  <text class="small" x="450" y="408" text-anchor="middle">Blood is kept separate on the two sides, so oxygenated blood never returns to the lungs for a second pass.</text>`,
  900,
  430,
);

const vesselsDiagram = svgDiagram(
  "Arteries, veins and capillaries",
  `<text class="title" x="450" y="36" text-anchor="middle">Structure follows the pressure each vessel carries</text>
  ${tileRow(
    [
      {
        title: "Artery",
        cls: "pink",
        body:
          "Carries blood away from the heart\n" +
          "High pressure, pulsatile flow\n" +
          "Thick muscular, elastic wall\n" +
          "Narrow, round lumen\n" +
          "No valves\n" +
          "Aorta and pulmonary artery are the\nlargest examples",
      },
      {
        title: "Vein",
        cls: "blue",
        body:
          "Carries blood back to the heart\n" +
          "Low pressure, slow steady flow\n" +
          "Thin wall, wide lumen\n" +
          "One-way valves prevent backflow\n" +
          "Returned by muscle contraction\n" +
          "and by narrow arteries beside them",
      },
      {
        title: "Capillary",
        cls: "gold",
        body:
          "Exchange surface in the tissues\n" +
          "One cell thick, just endothelium\n" +
          "Very small lumen: cells pass singly\n" +
          "Slow flow, long exchange time\n" +
          "Pores between cells let fluid out\n" +
          "Networks surround every cell",
      },
    ],
    62,
    { x: 24, w: 852, h: 232, gap: 16 },
  )}`,
  900,
  322,
);

const tissueFluidDiagram = svgDiagram(
  "From plasma to tissue fluid to lymph",
  `<text class="title" x="450" y="34" text-anchor="middle">One fluid, three names, three compartments</text>
  ${tileRow(
    [
      {
        title: "Blood plasma",
        cls: "blue",
        body:
          "Water with proteins and cells\n" +
          "Under pressure in the capillary\n" +
          "Small molecules filter outward\n" +
          "Cells and proteins stay inside",
      },
      {
        title: "Tissue fluid",
        cls: "gold",
        body:
          "Plasma that has left the vessel\n" +
          "Bathes the surrounding cells\n" +
          "No red cells, few proteins\n" +
          "Delivers oxygen and removes waste",
      },
      {
        title: "Lymph",
        cls: "purple",
        body:
          "Tissue fluid that has drained away\n" +
          "Into closed lymphatic vessels\n" +
          "Filtered in nodes, adds lymphocytes\n" +
          "Empties back into a vein at the neck",
      },
    ],
    60,
    { x: 24, w: 852, h: 178, gap: 14 },
  )}
  <path class="arrow" d="M318 150h34m190 0h34"/>
  ${labelledRows(
    [
      [
        "Arterial end",
        "hydrostatic pressure exceeds the water potential of the tissue, so fluid leaves",
      ],
      ["Filtered substances", "water, glucose, amino acids, fatty acids, salts, oxygen and urea"],
      [
        "Retained in the capillary",
        "red cells, most proteins and other large molecules cannot pass the wall",
      ],
      [
        "Venule end",
        "plasma proteins left behind lower the water potential, so water returns by osmosis",
      ],
      [
        "Leftover about 10 per cent",
        "does not return to blood; it drains into lymph capillaries as lymph",
      ],
      [
        "Blockage or leak",
        "fluid builds up in the tissue and the region swells, an effect called oedema",
      ],
    ],
    30,
    268,
    32,
  )}`,
  900,
  470,
);

const chapterNine: Chapter = {
  number: 9,
  title: "Transport in Animals",
  intro: `Large, active animals cannot wait for diffusion, so they run a mass transport system: a pump, a set of pipes and a fluid that is circulated and recharged at the exchange surfaces.\n\nIn mammals that system is **closed** and **double**, and the organ that makes it work is a four-chambered muscular pump with valves, its own blood supply and its own rhythm.\n\nThis chapter takes the system in the order examiners test it:\n\nThe general plan, the heart, the three vessel types, the blood, the fluid that leaks out of it, and what happens when the heart's own arteries fail.`,
  subheadings: [
    {
      title: "A Closed System with Two Circuits",
      body: `### The three parts of any mass transport system\n\nEvery circulatory system contains the same trio:\n\nA **fluid** that carries the materials, **vessels** (or body cavities) through which the fluid moves, and a **pump** that supplies the energy to keep it moving.\n\nIn humans the fluid is blood, the vessels are arteries, capillaries, arterioles and veins, and the pump is the heart.\n\nDiffusion alone would be far too slow over the distances involved in a human body, so the system short-circuits it by constantly bringing a moving supply of fresh medium close to every cell.\n\n### Closed versus open\nIn a **closed system** the blood stays inside vessels and is pumped by a heart; it is only separated from the tissue fluid by the capillary wall. Vertebrates have one.\n\nIn an **open system**, found in many insects and other arthropods, the fluid, called haemolymph, is pumped from a dorsal vessel into a body cavity and bathes the organs directly, with no continuous set of vessels.\n\nA closed system can maintain high, localised pressure and can direct flow to particular organs by vasoconstriction, which is why it suits an active endotherm.\n\n### Why the mammalian system is called double\n\nBlood passes through the heart **twice** for each complete lap of the body.\n\nThe **pulmonary circuit** runs right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium and is short, low-pressure and delicate, because the alveolar capillaries are thin and are exposed to air pressure.\n\nThe **systemic circuit** runs left ventricle → aorta → body → vena cava → right atrium;\n\nIt is long, high-pressure and has to push blood against gravity to the head and through kilometres of branching vessels.\n\n### The Two Sides Are Kept Apart on Purpose\nKeeping the two sides of the heart separate with a **septum** means oxygenated and deoxygenated blood never mix, so the tissues receive blood with a high oxygen content, and the lungs are protected from the systemic pressure.\n\n### Single Circulation for Contrast\nFish, by contrast, have a single circulation with one atrium and one ventricle:\n\n### Single Circulation for Contrast\nAll their blood passes through the gill capillaries and loses pressure there, so the whole body receives slow, low-pressure flow.\n\n### Pressure Is Only Regained at the Pump\n\nBlood loses pressure along a circuit as friction converts its energy to heat, and it is re-pressurised only when it returns to the heart.\n\nThat is why a capillary bed rather than a vein is the low-pressure exchange region, and why a cut vein bleeds steadily instead of spurting.\n\n### One System, Several Jobs\n\nThe circulation also distributes the heat made by respiring muscle, carries hormones from glands to their targets and returns tissue fluid to the blood.\n\nA transport system therefore serves the whole body, not the lungs alone.\n\n${circulationDiagram}`,
      groups: [
        {
          subTitle: "Definitions Worth Writing Exactly",
          bullets: [
            "**Circulatory system:** the system of organs and vessels that transports substances around the body.",
            "**Mass transport system:** the general term for a system that carries many substances together in a moving fluid; in mammals it is the circulatory system.",
            "**Double circulation:** a system in which the blood passes through the heart twice during one complete circuit of the body.",
            "**Pulmonary circulation:** the circuit between the heart and the lungs.",
            "**Systemic circulation:** the circuit between the heart and the rest of the body.",
            "**Closed system:** the blood stays inside vessels the whole time, so a high localised pressure can be maintained and flow can be redirected by vasoconstriction.",
            "**Open system:** haemolymph is pumped from a dorsal vessel into body cavities and bathes the organs directly, as in most insects and other arthropods.",
          ],
        },
        {
          subTitle: "What Travels in the Blood",
          bullets: [
            "**Respiratory gases:** oxygen mostly as oxyhaemoglobin, carbon dioxide as hydrogencarbonate ions, some dissolved and some on haemoglobin.",
            "**Nutrients:** glucose, amino acids, fatty acids and glycerol from digestion to cells and storage sites.",
            "**Excretory products:** urea to the kidneys, carbon dioxide to the lungs, excess water and salts to the kidneys and skin.",
            "**Chemical messengers:** hormones from endocrine glands to their target organs.",
            "**Defensive components:** white cells, antibodies and the clotting proteins, plus heat distributed from active muscles.",
            "**Dissolved gases:** a little oxygen and a good deal of carbon dioxide travel in solution in the plasma, alongside the haemoglobin route.",
            "**Heat:** metabolic warmth is moved from liver and muscle to the skin, which is why circulation is part of temperature control as well as transport.",
          ],
        },
      ],
      examinerTips: [
        "The word **twice** is the mark in a double-circulation definition. Say where each pass happens: from the heart to the lungs and back, then from the heart to the body and back.",
        "When asked why two separate circulations are advantageous, name both pressures.",
        "The systemic circuit works at high pressure for rapid flow, while the pulmonary circuit is protected from that pressure by thin vessel walls.",
        "Do not describe the pulmonary vein as carrying deoxygenated blood because it goes towards the heart. Veins are defined by direction of flow, not by oxygen content.",
        "When asked why a mammal needs a mass transport system at all, contrast distances.",
        "Diffusion is effective over a fraction of a millimetre but hopeless over a human body, and the surface area to volume ratio is far too small for the skin to supply every cell.",
      ],
      commonMistakes: [
        "Defining an artery as 'a vessel carrying oxygenated blood'. The pulmonary artery carries deoxygenated blood; the definition is direction of flow away from the heart.",
        "Claiming that blood passes through the heart twice per minute rather than twice per complete circuit of the blood.",
        "Thinking a closed system means no fluid ever leaves the vessels; tissue fluid formation at capillaries is exactly the exception.",
        "Sketching a single circulation for a mammal, with blood flowing heart → gills → body. Mammals have two circuits and no gills at any stage of life.",
      ],
      recap: [
        "Define double circulation. [2]",
        "State two ways in which a closed circulatory system differs from an open one. [2]",
        "Explain the advantage to a mammal of having the pulmonary and systemic circuits kept separate. [3]",
        "Name the two vessels that carry blood to and from the lungs, and state the oxygen content of the blood in each. [4]",
      ],
    },
    {
      title: "The Heart: Structure and the Cardiac Cycle",
      body: `### Position, wall and chambers\n\nThe heart sits in the thorax between the lungs, just above the diaphragm, with its apex pointing slightly to the left.\n\nIt is enclosed in the **pericardial sac**, whose fluid reduces friction as the heart beats.\n\nEach side is a pump of two chambers: an **atrium** receiving blood under low pressure, and a **ventricle** ejecting it.\n\nThe two sides are divided by the **septum**, so the four chambers are right atrium, right ventricle, left atrium and left ventricle.\n\nThe wall thickness maps directly onto the work demanded. The atrial walls are thin, because they only push blood a short distance into the ventricle below.\n\nThe **left ventricle wall is much thicker than the right**, because it must generate the high pressure needed to drive blood through the whole systemic circuit;\n\nThe right ventricle only sends blood the short way to the lungs.\n\nThe left ventricle also forms the apex of the heart and wraps around the crescent-shaped right ventricle, which is why its contraction produces the stronger thrust felt as the pulse.\n\n### Valves: four sets, no backflow\n\nBetween atrium and ventricle on the right is the **tricuspid valve**; on the left it is the **bicuspid valve**, also called the mitral valve.\n\nEach has tough, flexible cusps tethered by **chordae tendineae** to **papillary muscles** on the ventricle wall, which stop the cusps being forced upward into the atrium during contraction.\n\nAt the exits, the **semilunar valves** sit at the base of the pulmonary artery and of the aorta;\n\nThey are pocket-shaped and snap shut when the ventricle relaxes and blood tries to flow back.\n\nValves are the only reason the blood moves in one direction, and the closing of the atrioventricular valves produces the first heart sound, with the semilunar valves producing the second.\n\n### Blood's own supply\n\nHeart muscle cannot extract enough oxygen from the blood it contains, because the interior is under too much pressure for exchange.\n\nThe myocardium is therefore fed by its own **coronary arteries** branching from the start of the aorta, with coronary veins returning blood to the right atrium through the coronary sinus.\n\nAnything that narrows those arteries starves the heart muscle itself, which is the subject of the final section of this chapter.\n\n### The cardiac cycle\n\nThe heartbeat is **myogenic**: it starts inside the heart muscle rather than arriving from a nerve.\n\nA region of specialised cells in the right atrial wall, the **sinoatrial node**, sets the rhythm by firing a wave of electrical excitation that spreads across both atria.\n\nThe wave reaches the **atrioventricular node**, is delayed briefly there so the atria can finish emptying, then travels down fibre bundles in the septum to the ventricle walls, causing them to contract from the apex upward so blood is squeezed towards the arteries.\n\nOne cycle has three phases:\n\n1. **Atrial systole**, about one tenth of a second: the atria contract and top up the ventricles with blood.\n\n2. **Ventricular systole**, about three tenths of a second:\n\nThe ventricles contract sharply, the atrioventricular valves slam shut, the semilunar valves are forced open and blood is ejected into the pulmonary artery and aorta.\n\nArterial pressure peaks here, and the elastic walls of the arteries recoil to produce the pulse that can be felt at the wrist or neck.\n3.\n\n**Diastole**, the longest phase, about four tenths of a second:\n\nThe muscle relaxes, arterial pressure falls, the semilunar valves close, the atrioventricular valves open and the chambers refill passively while the atria gather returning blood.\n\nThe rate is adjusted, not caused, by nerves:\n\nAccelerator fibres from the medulla increase it during exercise, fear or a rise in carbon dioxide, and the vagus nerve with parasympathetic fibres slows it at rest.\n\nHormones such as adrenaline prolong and strengthen the effect.\n\n### The Pump in Numbers\n\nAt rest the left ventricle ejects roughly seventy cubic centimetres per beat at a rate near seventy beats per minute, giving a cardiac output of about five cubic decimetres per minute.\n\nDuring hard exercise both the stroke volume and the rate rise, and the extra output is what delivers the additional oxygen that working muscle demands.\n\n### Sounds, Pulse and the Electrocardiogram\n\nThe first heart sound comes from the atrioventricular valves closing at the start of ventricular systole, and the second from the semilunar valves closing as the ventricles relax.\n\nAn electrocardiogram records the electrical waves rather than the muscle pull, so a trace exposes an abnormal rhythm before the patient notices anything at all.\n\n### Why Arterial Pressure Never Reaches Zero\n\nElastic artery walls are stretched by each ejection and then recoil, keeping a positive pressure on the blood between beats.\n\nThe pulse you feel at the wrist is that wave of stretching travelling outward, and it is not the same thing as the ventricle contracting at that moment.`,
      figure: heartArt,
      groups: [
        {
          subTitle: "Structure Table You Should Be Able to Reproduce",
          bullets: [
            "| Part | Where it is | What it does |\n| --- | --- | --- |\n| Right atrium | Receives from the vena cava | Collects deoxygenated blood returning from the body |\n| Right ventricle | Below the right atrium | Pumps deoxygenated blood to the lungs through the pulmonary artery |\n| Left atrium | Receives from the pulmonary vein | Collects oxygenated blood from the lungs |\n| Left ventricle | Below the left atrium | Pumps oxygenated blood to the body through the aorta |\n| Septum | Between the two sides | Prevents oxygenated and deoxygenated blood from mixing |\n| Tricuspid valve | Right atrium to right ventricle | Stops backflow into the atrium during ventricular systole |\n| Bicuspid valve | Left atrium to left ventricle | Stops backflow into the atrium during ventricular systole |\n| Semilunar valves | Exits to pulmonary artery and aorta | Stop blood running back into the relaxed ventricles |\n| Coronary arteries | From the base of the aorta over the muscle | Supply the heart wall with oxygen and glucose |\n| Sinoatrial node | Wall of the right atrium | Initiates the electrical impulse that sets the heart rate |",
          ],
        },
        {
          subTitle: "Reading a Graph of the Cycle",
          bullets: [
            "**Pressure in the ventricle** rises steeply during systole and falls during diastole; the peak in the left ventricle is far higher than in the right.",
            "**Volume of blood in the ventricle** falls during systole as blood is ejected, then rises as it refills; maximum volume occurs just before atrial systole ends.",
            "**Arterial pressure** never falls to zero, because elastic arteries keep pushing; that maintained pressure is what sustains flow between beats.",
            "**Valve state:** atrioventricular valves are closed while semilunar valves are open, and the reverse is true during diastole.",
            "Both sets are briefly closed at the very start of ventricular systole, when pressure rises with the chamber full and closed.",
            "**Cardiac output** equals stroke volume multiplied by heart rate, so a trace showing rate can be turned into a volume per minute with one multiplication.",
            "**Reading a trace:** identify the phase from the pressure curve and the volume curve together, because a rising ventricular pressure with a falling volume can only be ventricular systole.",
          ],
        },
        {
          subTitle: "Conducting System and Nervous Control",
          bullets: [
            "**Sinoatrial node:** a patch of specialised muscle in the right atrial wall that fires the wave and sets the rate, so the heartbeat is **myogenic**.",
            "**Atrioventricular node:** receives the wave and delays it briefly, giving the atria time to empty before the ventricles contract.",
            "**Bundle fibres in the septum:** carry the excitation to the ventricle walls from the apex upward, so blood is squeezed towards the arteries rather than trapped at the base.",
            "**Autonomic nerves adjust the rate only:** accelerator fibres from the medulla speed it during exercise or fear, the vagus nerve slows it at rest, and adrenaline prolongs the effect.",
          ],
        },
        {
          subTitle: "Which Vessel Meets Which Chamber",
          bullets: [
            "**Vena cava:** returns deoxygenated blood from the body to the right atrium, with one large vein from the upper body and one from the lower body.",
            "**Pulmonary artery:** carries deoxygenated blood away from the right ventricle and divides to each lung, the only artery in the body carrying deoxygenated blood.",
            "**Pulmonary vein:** returns oxygenated blood from the lungs to the left atrium, the only vein carrying oxygenated blood.",
            "**Aorta:** leaves the left ventricle and arches to serve the systemic circuit; the coronary arteries branch from its very first part, above the semilunar valves.",
          ],
        },
      ],
      examinerTips: [
        "In a diagram question, label the chambers and vessels exactly: 'left' and 'right' refer to the **patient's** side, so on a front-facing diagram the left ventricle is on your right.",
        "Draw the heart as it would be in the body, not mirrored.",
        "On a drawing, show the wall thickness difference and be ready to explain it.",
        "The left ventricle wall is visibly thicker than the right because it pumps the whole systemic circuit, so more force and higher pressure are needed.",
        "Examiners often allocate a mark for the thicker wall alone.",
        "When describing the cardiac cycle, name the phases with the words **atrial systole**, **ventricular systole** and **diastole** and link each to valve state and blood movement, rather than simply saying 'the heart contracts and relaxes'.",
        "If asked what makes the heart beat, credit the **sinoatrial node** and the myogenic nature of the rhythm; nerves only change the rate.",
      ],
      commonMistakes: [
        "Naming the pulmonary artery and pulmonary vein on the wrong side. The pulmonary artery leaves the right ventricle; the pulmonary vein enters the left atrium.",
        "Saying valves 'push' blood along. They only prevent backflow; the pressure comes from the ventricle and from the elastic recoil of arteries.",
        "Confusing the chordae tendineae with the semilunar valves, or calling the bicuspid valve the tricuspid valve.",
        "Describing the heartbeat as controlled by the brain alone. Without any nerve supply an excised heart keeps beating, because the pacemaker is inside the muscle.",
      ],
      recap: [
        "Name the chambers and valves that blood passes through on its way from the vena cava to the aorta, in order. [6]",
        "Explain why the wall of the left ventricle is thicker than the wall of the right ventricle. [3]",
        "Describe the role of the sinoatrial node in the cardiac cycle, and explain how the ventricles are made to contract after the atria. [4]",
        "State what happens to the two sets of valves during ventricular systole and explain why. [4]",
      ],
    },
    {
      title: "Arteries, Veins and Capillaries",
      figure: vesselsArt,
      body: `### The three vessel types, and the logic behind them\n\nA vessel's structure tells you what pressure it carries and what job it does.\n\nArteries take blood **away from the heart** at high pressure, so they need thick walls with plenty of elastic fibre and smooth muscle, and a small, round lumen that keeps the blood moving under pressure.\n\nVeins return blood **to the heart** at low pressure after most of the energy has been lost through the capillaries, so their walls are thin, their lumen is wide and flat, and their one-way valves, together with the squeezing action of skeletal muscles, are what move the blood upward against gravity.\n\nCapillaries are the exchange vessels: only endothelium, one cell thick, with gaps between cells, so their whole design is about minimising diffusion distance and maximising time in contact.\n\n${vesselsDiagram}\n\n### The route blood takes\n\nVentricle → **artery** → **arteriole** (a narrower branch with more muscle, used to redirect flow to particular organs) → **capillary bed** (an exchange network between a small artery and a small vein) → **venule** → **vein** → atrium.\n\nBlood pressure is highest in the aorta during ventricular systole and lowest in the vena cava as it enters the heart.\n\nFlow velocity is fastest in the arteries and slowest in the capillaries, because the total cross-sectional area of all the capillaries together is far larger than that of an artery of the same generation.\n\n### Reading the pressure and flow graphs\n| Measurement | Where it is highest | Why |\n| --- | --- | --- |\n| Blood pressure | Aorta and large arteries | Directly driven by ventricular systole; falls along the circuit as energy is lost |\n| Total cross-sectional area | Capillaries | Vast numbers of tiny vessels add up |\n| Velocity of flow | Aorta | Same volume of blood forced through a small total area |\n| Slowest flow | Capillaries | Largest total area, giving maximum time for diffusion |\n\n### Tissue-level control\n\nArterioles in a region can dilate while others constrict, so exercising muscle receives more flow and the gut receives less.\n\nVeins hold the majority of the blood volume at any moment and act as a reserve that can be mobilised by vasoconstriction when blood is needed elsewhere, for example during exercise or blood loss.\n\n### Capillary Beds Are Gates, Not Plain Pipes\n\nEach bed is fed through a **pre-capillary sphincter**, a ring of muscle that relaxes or contracts according to the local demand for oxygen and nutrients.\n\nSphincters in an active muscle open and its bed fills, while those in a quiet region stay closed, so flow follows need rather than anatomy.\n\n### The Special Cases to Name\n\nThe **renal artery and vein** serve the kidney, where a second capillary network lies between the glomerulus and the nephron, so blood passes through two sets of capillaries before returning to the heart.\n\nThe **hepatic portal vein** is the other favourite exception:\n\nIt carries blood from the gut to the liver rather than to the heart, so nutrients absorbed at the intestine are taken to that organ first.\n\n### Why Standing Still Makes the Feet Swell\n\nBlood in the leg veins must climb back to the heart against gravity at a pressure far too low to push it up by itself.\n\nWith no calf muscle action to squeeze the veins, fluid filters out of the capillaries faster than the lymph can drain it, and the ankles puff up.`,
      groups: [
        {
          subTitle: "Structural Differences, Examined One by One",
          bullets: [
            "**Wall thickness:** artery thick, vein thin, capillary one cell thick with no wall in the muscular sense.",
            "**Lumen:** artery narrow and circular, vein wide and often irregular, capillary just wide enough for red cells in single file.",
            "**Elastic and muscle fibre:** abundant in arteries, sparse in veins, absent in capillaries.",
            "**Valves:** present in veins, absent in arteries and capillaries.",
            "**Blood pressure:** high in arteries, low in veins, minimal in capillaries by the venous end.",
            "**Direction of flow:** arteries away, veins towards, capillaries connecting the two.",
            "**Wall layers:** an artery shows three distinct coats with a tough outer one, a vein a thinner wall with the widest coat outermost, and a capillary a single layer of cells.",
            "**Where the exceptions are:** the pulmonary vessels reverse the oxygen content, and **arteries are the only vessels in which a pulse can be felt**, because the stretch wave is absorbed before the capillaries.",
          ],
        },
        {
          subTitle: "Adaptations of Capillaries to Exchange",
          bullets: [
            "**One cell thick endothelium** gives an extremely short diffusion distance.",
            "**Microscopic diameter with pores between cells** allows water and small solutes to filter out and return.",
            "**Extensive branching networks** place exchange surfaces close to almost every cell, keeping diffusion distances small throughout the body.",
            "**Very slow blood flow** in the vast total cross-sectional area lengthens the time available for diffusion.",
            "**Narrow lumen** forces red cells into single file, pressing them near the wall and speeding oxygen release.",
          ],
        },
        {
          subTitle: "Pressure, Bleeding and Common Vessel Problems",
          bullets: [
            "**Arterial bleeding** is bright red and spurts in time with the pulse, while **venous bleeding** is darker red and flows steadily, because the two pressures differ so much.",
            "**Varicose veins** form when valve cusps fail, usually in the leg, so blood falls back and the vein distends; the wall is thin, so the swelling is soft and bluish.",
            "**Arterioles are the resistance vessels:** their smooth muscle sets how hard the heart must work to push blood on, which is why a sustained rise in arteriole tone means high blood pressure.",
          ],
        },
      ],
      examinerTips: [
        "Always give the difference as a **matched pair**: 'arteries have thick muscular walls, veins have thin walls'. A one-sided description earns half the mark at best.",
        "The word **elastic** matters for arteries: it explains both the pulse and the maintained pressure between beats. Say 'stretchy' only if you also say what it achieves.",
        "Capillary adaptation questions expect at least two of: one cell thick, very small diameter, numerous and highly branched, slow flow. Four distinct, correct points usually fills a four-mark answer.",
        "If a question asks about a vein in the leg, include both mechanisms of return: valves and the contraction of skeletal muscles squeezing the vein.",
      ],
      commonMistakes: [
        "Stating that arteries always carry oxygenated blood and veins always deoxygenated blood; the pulmonary vessels reverse this.",
        "Claiming valves are present in arteries.",
        "Saying blood flow is fastest in capillaries because they are narrow. It is slowest, because there are so many of them.",
        "Describing capillaries as having 'no walls'. They have a wall of one layer of cells.",
      ],
      recap: [
        "State three differences between the structure of an artery and that of a vein. [3]",
        "Explain how capillaries are adapted to their function in exchange. [4]",
        "Name the vessels that carry deoxygenated blood in a mammal and the vessels that carry oxygenated blood, other than the pulmonary ones. [2]",
        "Explain how blood in the veins of the leg is returned to the heart against gravity. [3]",
      ],
    },
    {
      title: "Blood: Plasma, Cells and Platelets",
      body: `Blood is a **connective tissue** made of cells suspended in a liquid matrix.\n\nAfter a sample is centrifuged it separates into layers: pale yellow **plasma** on top, a thin whitish band of **white cells and platelets**, and dark red **packed red cells** below.\n\nThe red cell fraction is the haematocrit, and it rises when a person is dehydrated or living at altitude.\n\n### Plasma\n\nPlasma is about nine parts water to one part dissolved substance.\n\nIt carries the proteins albumin, the clotting protein fibrinogen and the antibodies, plus nutrients absorbed from the intestine, waste products from tissues, respiratory gases, hormones, and the heat generated by metabolism.\n\nBecause it can be donated as plasma, group by group, it is the blood component used most often in burns treatment.\n\n### Red cells (erythrocytes)\nRed cells are the transport specialists, and their adaptations are among the most reliably examined in this chapter:\n\n### Red cells (erythrocytes)\nNo nucleus, no mitochondria and no other organelles, so nothing competes for space or consumes the oxygen being carried;\n\n### Red cells (erythrocytes)\nA biconcave disc giving a large surface area to volume ratio for fast diffusion;\n\n### Red cells (erythrocytes)\nA flexible, tough membrane that can squeeze through narrow capillaries;\n\n### Red cells (erythrocytes)\nAnd cytoplasm packed with the iron-containing pigment **haemoglobin**, which combines reversibly with oxygen to form oxyhaemoglobin in the lungs and releases it where the partial pressure of oxygen is low.\n\n### White cells (leucocytes)\n\nThe two groups taught at this level are **phagocytes** and **lymphocytes**.\n\nPhagocytes have a lobed or irregular nucleus and granular cytoplasm; they engulf pathogens by **phagocytosis**, digest them with enzymes, and also clear away dead cells and debris.\n\nLymphocytes have a large, round nucleus and little cytoplasm; some of them make **antibodies** against specific antigens, and others become the memory cells that respond to a second encounter.\n\nBoth kinds leave the blood to work in the tissues, squeezing through capillary walls.\n\n### Platelets\n\nPlatelets are not cells but fragments of cytoplasm from large bone-marrow cells.\n\nThey carry the enzymes and protein factors needed for the clotting cascade:\n\nWhen a vessel is damaged they aggregate at the site, stick to exposed fibres and initiate the conversion of soluble **fibrinogen** into insoluble **fibrin**, whose mesh traps blood cells and forms the clot, sealing the wound while the dissolved substances inside the blood stay in the circulation.\n\n### Reading a Centrifuged Tube\n\nA spun sample shows three bands whose heights are used as evidence: plasma on top, a thin whitish layer of white cells and platelets, and packed red cells below.\n\nThe red cell fraction is the haematocrit, and it is higher in a dehydrated person or in one living at altitude.\n\n### All the Cells Come From One Tissue\n\nThe blood cells develop from dividing cells in **red bone marrow**, and a maturing red cell loses its nucleus as it does so.\n\nA marrow damaged by radiation therefore stops replacing all three cell types at once, which is why such a patient becomes anaemic, infection-prone and unable to clot.\n\n### Differential Counts and What They Suggest\n\nA blood film reports the proportions of each white cell type, and a raised count of phagocytes points to an acute bacterial infection while a raised lymphocyte count suggests a viral one.\n\nThe haemoglobin estimate is the routine screening value for anaemia, and a low one explains tiredness and breathlessness.\n\n### Plasma as a Donation\nPlasma can be frozen and kept far longer than whole blood, and because its antibodies are not tied to a cell type it is used for burns, for shock and for patients missing a clotting factor.\n\n| Component | Made in | Key structural feature | Main functions |\n| --- | --- | --- | --- |\n| Plasma | the liquid matrix of blood | water with proteins, solutes and wastes | transports nutrients, hormones, urea, CO2, antibodies, heat; maintains blood volume |\n| Red cell | red bone marrow | no nucleus, no mitochondria, biconcave, full of haemoglobin | transports oxygen; carries some carbon dioxide |\n| Phagocyte | red bone marrow | flexible shape, lobed nucleus, digestive enzymes | engulfs and digests pathogens and debris |\n| Lymphocyte | red bone marrow and lymph nodes | large round nucleus, minimal cytoplasm | produces antibodies; forms memory cells |\n| Platelet | bone marrow fragments | small, no nucleus | releases enzymes for blood clotting |`,
      figure: bloodCellsArt,
      groups: [
        {
          subTitle: "Haemoglobin and Gas Transport",
          bullets: [
            "**Oxygen:** haemoglobin plus oxygen forms oxyhaemoglobin in the lungs, where the oxygen is released again in tissues with a lower partial pressure of oxygen.",
            "Carbon monoxide binds far more strongly and blocks the site, which is why it poisons transport.",
            "**Carbon dioxide:** the majority is carried as hydrogencarbonate ions formed inside red cells with the enzyme carbonic anhydrase; some binds to haemoglobin and a small amount dissolves in plasma.",
            "**Adaptations to altitude or training:** red cell count and haemoglobin content rise when oxygen availability is low, which is also why a diver or long-distance runner may have a raised haematocrit.",
            "**Iron deficiency** produces fewer or paler red cells, anaemia, with reduced oxygen transport and hence tiredness and breathlessness.",
            "**Biconcave shape:** flattening the disc raises the surface area to volume ratio, so oxygen crosses the membrane faster and also escapes faster at the far end.",
            "**Four oxygen molecules per haemoglobin,** one at each iron-containing haem group, and the binding is reversible so the pigment can be reused thousands of times.",
          ],
        },
        {
          subTitle: "Plasma, Tissue Fluid and Lymph Side by Side",
          bullets: [
            "**Plasma:** water, dissolved solutes, proteins, cells and platelets; the highest protein content of the three.",
            "**Tissue fluid:** water and the same small solutes as plasma, but no red cells and very little protein; it has filtered out of a capillary.",
            "**Lymph:** the same in kind as tissue fluid, and moves slowly through lymphatic vessels before rejoining the bloodstream.",
            "**Albumin:** the plasma protein chiefly responsible for the osmotic pull that returns water to the capillary, so a shortage of it causes swelling.",
            "**Fibrinogen and antibodies are plasma proteins too:** the first builds the clot and the second provides defence, so plasma is a solution with jobs, not just a solvent.",
          ],
        },
        {
          subTitle: "The Clotting Sequence in the Order Marks Are Given",
          bullets: [
            "**A damaged vessel** exposes rough fibres, and platelets stick to them and aggregate at the wound.",
            "**Platelets release enzymes** that start a cascade converting soluble fibrinogen into insoluble fibrin.",
            "**A mesh of fibrin** traps red cells and builds the clot, and the drying scab that follows keeps microbes out while the tissue beneath repairs.",
          ],
        },
      ],
      examinerTips: [
        "For 'explain how a red cell is adapted to its function', give the feature and the consequence in the same sentence. 'No nucleus, so there is more space for haemoglobin' is a complete mark; 'no nucleus' is not.",
        "Add 'no mitochondria, so the cell does not use the oxygen it transports' as a separate point: it is a distinct adaptation with its own consequence.",
        "Do not write that a red cell has no cell membrane. It has one; it lacks a nucleus and most other organelles.",
        "When a question contrasts phagocytes and lymphocytes, the two answers expected are engulfment versus antibody production. Name the nucleus shapes only if structure is asked for.",
      ],
      commonMistakes: [
        "Saying red cells carry carbon dioxide as their main job; oxygen is the primary cargo, and most carbon dioxide travels as hydrogencarbonate in plasma.",
        "Describing platelets as cells that divide, or as white cells that engulf pathogens.",
        "Listing 'nucleus' as a red cell feature; a mature mammalian red cell has none.",
        "Naming plasma proteins the same thing as antibodies: antibodies are one class of plasma protein, while albumin and fibrinogen are others.",
      ],
      recap: [
        "Name the four main components of blood and state one function of each. [8]",
        "Describe three adaptations of the red blood cell to oxygen transport, explaining the advantage of each. [6]",
        "State the difference in structure and in function between a phagocyte and a lymphocyte. [4]",
        "Explain the role of platelets when a blood vessel is cut. [3]",
      ],
    },
    {
      title: "Tissue Fluid and the Lymphatic System",
      body: `### Where exchange actually happens\n\nBlood never touches the cells it feeds.\n\nAt a capillary the plasma is under pressure from the heart, and water together with the small dissolved molecules squeezes through the pores between the endothelial cells into the spaces around the tissue cells.\n\nThis filtered fluid is **tissue fluid**, and it is the medium through which oxygen, glucose, amino acids, fatty acids, salts and hormones reach cells, and through which carbon dioxide, urea and excess water leave them.\n\nSo tissue fluid is the **connection between the mass transport system and diffusion at the cell surface**.\n\n### How it forms and how it returns\n\nTwo pressures decide the direction of movement.\n\nAt the arterial end of a capillary, the hydrostatic pressure of the blood is higher than the pull produced by the plasma proteins, so net movement is outward and tissue fluid is formed.\n\nProteins, being too large to pass, stay behind and concentrate in the remaining plasma, so by the venous end the water potential of the blood plasma is lower than that of the surrounding tissue fluid, and water returns into the capillary by **osmosis**.\n\nRoughly nine tenths of the fluid that left reappears at the venous end;\n\nThe remaining tenth, together with any leaked protein and the fat absorbed from the intestine, drains into nearby **lymphatic capillaries** and becomes **lymph**.\n\n### The lymphatic route\n\nLymphatic vessels are thin-walled and valved like veins, and they begin as closed ends in the tissues rather than arising from a hole in a capillary.\n\nLymph is moved slowly by the contraction of the vessels' own walls and by surrounding muscles, and it passes through **lymph nodes** on the way.\n\nNodes are small swellings of lymphoid tissue that filter the fluid, trap debris and pathogens, and house the lymphocytes that multiply there when an infection is present, which is why the nodes of the neck, armpit and groin often become enlarged and tender when a person is ill.\n\nLymph from the lower body and the left side of the head and arm is collected into the **thoracic duct**, and lymph from the right side of the head, arm and chest enters another duct;\n\nBoth empty into the veins beneath the collarbone, so the fluid and its proteins are returned to the bloodstream.\n\n${tissueFluidDiagram}\n\n### When the balance goes wrong\n\nAnything that raises capillary pressure, lowers the protein content of plasma, or blocks lymphatic drainage tips the balance towards fluid accumulating in the tissues, and the visible result is swelling, called **oedema**.\n\nExamples used at this level include a blocked lymphatic vessel after surgery or parasite damage, a diet too poor in protein reducing plasma protein and therefore the osmotic pull back into capillaries, and the mild ankle swelling of standing still in hot weather.\n\n### The Fat Route That Bypasses the Blood\n\nMost digested fat leaves the intestine wall in droplets too large to enter a blood capillary, so it is collected instead by **lacteals**, blind-ended lymph vessels in the centre of each villus.\n\nThat fat reaches the bloodstream only where the lymphatic ducts empty into the veins beneath the collarbone.\n\n### Nodes Are Checkpoints, Not Pumps\n\nAs lymph passes a node it is filtered, and lymphocytes that meet an antigen there divide to form the clone that answers a later infection.\n\nNodes also remove cell debris and stray cells, so the fluid is cleaned before it rejoins the blood.`,
      groups: [
        {
          subTitle: "The Vocabulary Chain for a Full-Marks Answer",
          bullets: [
            "**Hydrostatic pressure** at the arterial end of the capillary forces fluid out through the pores between endothelial cells.",
            "**Plasma proteins remain in the capillary**, so the water potential of the plasma at the venous end is lower than that of the tissue fluid.",
            "**Water therefore re-enters the capillary by osmosis** at the venous end.",
            "**The remaining fluid drains into a lymphatic capillary and becomes lymph**, which is returned to the blood through the lymphatic duct.",
            "**Tissue fluid, lymph and plasma are the same kind of solution**, differing mainly in the protein present and in where they are found.",
            "**The pores between endothelial cells** are the exit route, so only water and small solutes are filtered while cells and proteins are kept inside the vessel.",
            "**Constant turnover:** tissue fluid is formed and drained every minute of a healthy life, which is why its volume stays steady instead of creeping upward.",
          ],
        },
        {
          subTitle: "Why the Lymphatic System Matters Beyond Transport",
          bullets: [
            "It returns leaked **protein** to the blood; without it the blood would lose its proteins and plasma volume would fall.",
            "It carries the products of fat digestion from the small intestine villi into the bloodstream, bypassing the blood capillaries.",
            "Its nodes filter pathogens and provide the site where lymphocytes multiply, so it forms part of the body's defence.",
            "It collects the excess fluid that would otherwise swell the tissues, keeping the volume of tissue fluid constant.",
            "It returns the **antibodies and white cells** that left with the fluid, so defence is recycled rather than lost.",
          ],
        },
        {
          subTitle: "Three Mechanisms of Swelling Worth Naming",
          bullets: [
            "**A blocked lymph vessel**, for example after surgery or through parasite damage, stops drainage, so fluid accumulates and the limb enlarges.",
            "**Too little protein in the diet** lowers the plasma protein concentration, so less water is drawn back at the venous end by osmosis and the tissue fluid builds up.",
            "**Raised capillary pressure**, as in the legs of someone standing motionless in the heat, forces fluid out faster than the lymph can remove it.",
          ],
        },
      ],
      examinerTips: [
        "Say tissue fluid is formed from **blood plasma**, not from red cells or from whole blood; the standard answer includes the phrase 'filtration through the capillary wall'.",
        "For the return of fluid, use the word **osmosis**, and credit the plasma proteins as the reason. Answers that say 'it diffuses back' generally lose the mark.",
        "A question comparing tissue fluid and lymph usually wants one similarity, in composition, and one difference, in location or in the route taken.",
        "If the paper asks for a cause of swelling, give a mechanism that increases outward movement or decreases drainage and complete it: raised capillary pressure, reduced plasma protein, or a blocked lymph vessel.",
      ],
      commonMistakes: [
        "Claiming tissue fluid contains red cells. It does not; red cells are too large to leave the capillary except when a vessel is damaged.",
        "Saying lymph is pumped by the heart. Lymph has no pump of its own and relies on vessel contraction, muscle movement and valves.",
        "Calling a lymph node a lymphocyte, or describing lymph nodes as making red blood cells.",
        "Confusing a lymphatic capillary, a closed-ended vessel that collects fluid, with a blood capillary, an open tube joining an arteriole to a venule.",
      ],
      recap: [
        "Describe how tissue fluid is formed at the arterial end of a capillary and how most of it returns at the venous end. [6]",
        "State two ways in which tissue fluid differs in composition from blood plasma. [2]",
        "Explain the role of the lymphatic system in returning fluid to the blood. [3]",
        "Suggest and explain one cause of swelling in the tissues of a person whose lymphatic vessels are blocked. [3]",
      ],
    },
    {
      title: "Coronary Heart Disease and Lifestyle",
      body: `### Why the heart can fail from its own supply\n\nCardiac muscle contracts continuously and has one of the highest oxygen demands in the body, yet it is fed by arteries only about the width of a drinking straw that arise from the base of the aorta and run over the surface of the muscle before branching into it.\n\nIf those **coronary arteries** narrow, the muscle downstream is starved of oxygen, and because heart muscle has very little capacity to regenerate, damaged areas are replaced by non-contractile scar tissue.\n\n### What atherosclerosis does\n\n**Coronary heart disease** is the result of **atherosclerosis**:\n\nFatty material, chiefly cholesterol together with fibrous tissue and sometimes calcium, builds up inside the wall of a coronary artery to form an **atheromatous plaque**.\n\nThe plaque thickens and hardens the wall, narrows the lumen and reduces blood flow, so the oxygen supply cannot rise to meet demand. Two events follow.\n\nWhen the reduction in flow is partial, especially during exertion when the heart's demand is greatest, the muscle respires anaerobically and lactic acid and other metabolites accumulate, producing the squeezing chest pain called **angina**.\n\nWhen a clot forms on a damaged plaque and blocks the artery completely, the muscle beyond it is deprived of oxygen entirely, its cells die, and the person suffers a **myocardial infarction**, a heart attack.\n\nBecause the left ventricle works at the highest pressure, it is the region most often damaged, and a large enough area of dead muscle means the heart can no longer pump effectively, which is heart failure.\n\nA detached clot from elsewhere that lodges in a coronary artery is called a coronary embolism.\n\n### Lifestyle and non-lifestyle factors\n| Factor | How it raises risk |\n| --- | --- |\n| Smoking | Carbon monoxide binds haemoglobin and reduces oxygen carriage; other chemicals damage the endothelium and make clotting more likely; nicotine raises heart rate and blood pressure |\n| A diet high in saturated fat and cholesterol | Provides the material and the stimulus for plaque formation and raises blood lipid levels |\n| A diet high in salt | Raises blood pressure, which stresses artery walls and speeds damage to them |\n| Little physical activity | Allows weight gain, weakens the heart muscle and circulation, and does not help clear lipids or lower blood pressure |\n| Being overweight | Increases blood pressure, the workload of the heart and the likelihood of type 2 diabetes |\n| Excess alcohol | Raises blood pressure and can damage heart muscle |\n| Stress | Sustained adrenaline and noradrenaline output raises heart rate and blood pressure |\n| Age, sex and inherited tendency | Risk rises with age, is higher in men before the menopause-equivalent age, and runs in families; none of these can be changed |\n| Diabetes | High blood glucose damages small vessels, including the coronaries |\n\n### Treatment and prevention\nManagement is matched to severity. Lifestyle change is always the first step: stop smoking, cut saturated fat and salt, take regular exercise, reduce alcohol, and control body mass.\n\nDrugs widen or protect the circulation:\n\nAnti-platelet agents such as aspirin reduce clot formation, statins lower blood cholesterol, nitrates and other vasodilators dilate coronary arteries and lower the heart's workload, and beta-blockers slow the heart and reduce blood pressure.\n\nWhere a vessel is critically narrowed, a catheter-borne balloon is used to compress the plaque and a **stent**, a small mesh tube, is left inside to hold the artery open;\n\nAlternatively a **coronary bypass** grafts a healthy vessel from the leg or chest wall so blood travels around the blockage.\n\nIn advanced failure, an artificial device supports the ventricle, and heart transplantation is the last resort.\n\nBecause a narrowed artery is a lifelong structural change, treatment relieves and slows disease far more often than it reverses it.\n\n### The related condition worth naming\nThe same process in a systemic artery can cause a **stroke** when a cerebral artery is blocked or bursts, so atherosclerosis is described as a disease of the whole arterial tree, of which the heart is the most examined example.\n\n### How the Fatty Material Gets There\n\nCholesterol carried in the blood collects beneath the damaged lining of the artery, where it attracts white cells and forms a **fatty streak**.\n\nOver years the streak gains fibrous tissue, sometimes calcium, and a soft lipid core, so the wall thickens while the lumen narrows.\n\n### Why a Plaque Is Dangerous Beyond Its Size\n\nA raised plaque makes the inner surface rough, and a rough surface is where platelets aggregate and a clot starts.\n\nThe final obstruction is therefore usually a clot on top of the plaque rather than the plaque alone, which is why anti-platelet drugs are part of the treatment.\n\n### Reading a Risk Table\n\nData questions give percentages for several groups; quote the figures, name the trend, then state that a correlation between a habit and a disease is not by itself proof of cause.\n\nA study that follows many people for years is stronger evidence than one that measures a single group once.`,
      groups: [
        {
          subTitle: "Cause-and-Effect Chains That Score Full Marks",
          bullets: [
            "Saturated fat in the diet → higher blood cholesterol → fatty material deposited in the artery wall → narrowed lumen → reduced blood flow → less oxygen to the cardiac muscle.",
            "Reduced oxygen during exertion → anaerobic respiration in the muscle → lactic acid accumulates → the metabolites stimulate pain endings → angina.",
            "Plaque surface damaged → clot forms in the narrowed artery → blood flow stops completely → muscle cells die → myocardial infarction.",
            "Smoke inhaled → carbon monoxide combines with haemoglobin → less oxygen carried by the blood, while chemicals damage the endothelium → both raise the chance of a blockage.",
            "Area of muscle dies → replaced by scar tissue that cannot contract → the heart pumps less blood per beat → cardiac output falls → breathlessness and fluid back up in the lungs.",
            "Left ventricle fails → blood backs up into the lungs → fluid leaks into the air spaces → diffusion of oxygen falls → the person is breathless even at rest.",
          ],
        },
        {
          subTitle: "Distinguish These Terms",
          bullets: [
            "**Atherosclerosis:** the fatty thickening of an artery wall; a process, not an event.",
            "**Angina:** the chest pain of a temporarily insufficient oxygen supply, usually brought on by exertion and relieved by rest.",
            "**Myocardial infarction:** death of a region of heart muscle after its blood supply is cut off; the pain is not relieved by rest.",
            "**Heart failure:** the heart cannot pump enough blood to meet the body's demands; it is not a stopped heart.",
            "**Arrest:** the mechanical pumping stops, often because the rhythm has gone into ventricular fibrillation; a different condition entirely.",
            "**Embolus:** a clot or bubble that travels in the blood until it wedges in a narrower vessel, cutting off the supply beyond it.",
          ],
        },
        {
          subTitle: "Anatomy and Treatment Details That Earn Marks",
          bullets: [
            "**Coronary arteries** arise from the base of the aorta, just above the semilunar valves, and run in the fat on the surface of the muscle before penetrating it.",
            "**A stent** is a small mesh tube left inside a narrowed artery to hold the wall open, usually placed after a balloon has compressed the plaque.",
            "**A bypass graft** takes a healthy vessel from the leg or chest wall so blood travels around the blockage instead of through it.",
            "**Statins** lower blood cholesterol and **aspirin** reduces platelet aggregation, so the two drugs act at different points in the disease story.",
          ],
        },
      ],
      examinerTips: [
        "Never write that the heart gets its blood 'from the blood inside it'. A coronary artery branch coming off the aorta is the expected starting point of the description.",
        "For a five- or six-mark question on atherosclerosis and heart attack, the marks are almost always distributed along a chain.",
        "Plaque named and located, lumen narrowed, oxygen supply reduced, anaerobic respiration, cells die. Write all five links.",
        "Where the question asks about a lifestyle factor, state the factor and its mechanism; 'smoking is bad' gains little, but 'carbon monoxide reduces the oxygen-carrying capacity of the blood' gains the mark.",
        "Distinguish angina from a heart attack explicitly: in angina the muscle is short of oxygen but alive, in infarction the supply has stopped and the muscle dies.",
      ],
      commonMistakes: [
        "Saying a heart attack means the heart stops beating. It means part of the muscle dies; the heart may go on beating, sometimes fatally irregularly.",
        "Attributing the disease to cholesterol 'blocking the inside of the vein'; it is an arterial disease, and veins are not involved.",
        "Naming the aorta as the vessel that feeds the heart muscle without mentioning the coronary arteries that branch from it.",
        "Claiming that dead heart muscle is replaced by new heart muscle. It is replaced by scar tissue, which is why the damage is permanent.",
      ],
      recap: [
        "Name the vessels that supply the heart muscle with oxygen and state where they arise from the circulation. [2]",
        "Describe how a buildup of fatty material in a coronary artery can lead to a heart attack. [5]",
        "Explain how the differences between angina and a myocardial infarction can be recognised in a patient. [3]",
        "Discuss two lifestyle factors that increase the risk of coronary heart disease, and explain the mechanism for each. [6]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_9: Chapter = chapterNine;
