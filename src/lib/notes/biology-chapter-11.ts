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

const lungsArt = artPanel([
  {
    src: "ch11-human-lungs.webp",
    alt: "Diagram of the lungs with airways and diaphragm",
    caption: "Lungs, airways and the diaphragm",
  },
  {
    src: "ch11-ribcage.webp",
    alt: "Rib cage with the intercostal muscles between the ribs",
    caption: "Rib cage and intercostal muscles",
  },
]);

const ventilationArt = artPanel([
  {
    src: "ch11-breathing-muscles.webp",
    alt: "Two rib cages, one with the ribs lifted and the diaphragm flat, one with the ribs lowered and the diaphragm domed",
    caption: "Inhalation and exhalation side by side",
  },
]);

const alveolusArt = artPanel([
  {
    src: "ch11-alveolus.webp",
    alt: "Close up of an air sac wrapped in a capillary",
    caption: "Air sac and its capillary",
  },
]);

/** One station of the airway: a labelled box with two short notes underneath. */
function airwayStation(
  x: number,
  w: number,
  title: string,
  note1: string,
  note2: string,
  cls: string,
) {
  const cx = x + w / 2;
  return (
    `<rect class="${cls}" x="${x}" y="76" width="${w}" height="56" rx="12"/>` +
    `<text class="label" x="${cx}" y="110" text-anchor="middle">${title}</text>` +
    `<text class="small" x="${cx}" y="156" text-anchor="middle">${note1}</text>` +
    `<text class="small" x="${cx}" y="176" text-anchor="middle">${note2}</text>`
  );
}

const breathingSystemDiagram = svgDiagram(
  "The breathing system: the route air takes",
  `<text class="title" x="450" y="34" text-anchor="middle">Air in order, from the nose to the air sacs</text>
    ${airwayStation(30, 150, "Nose and mouth", "warms and moistens", "mucus traps dust", "purple")}
    ${airwayStation(206, 140, "Trachea", "cartilage rings", "cilia and mucus", "blue")}
    ${airwayStation(372, 140, "Bronchi", "one to each lung", "cartilage still", "blue")}
    ${airwayStation(538, 150, "Bronchioles", "no cartilage", "narrow tubes", "gold")}
    ${airwayStation(714, 140, "Alveoli", "air sacs where", "gas is exchanged", "main")}
    <path class="arrow" d="M184 104h18 M350 104h20 M516 104h20 M692 104h20"/>
    <text class="small" x="450" y="212" text-anchor="middle">Only the alveoli exchange gas. Everything above them conducts, filters and conditions the air.</text>`,
  900,
  232,
);

const ventilationDiagram = svgDiagram(
  "Ventilation: inhalation versus exhalation",
  `<text class="title" x="450" y="34" text-anchor="middle">Two muscle actions, two pressure changes, one direction reversal</text>
    ${tileRow(
      [
        {
          title: "Breathing in (inhalation)",
          cls: "main",
          body: "external intercostals contract,\nribs move up and out\ndiaphragm contracts and flattens\nvolume rises, pressure falls, air enters",
        },
        {
          title: "Breathing out (at rest)",
          cls: "blue",
          body: "intercostals and diaphragm relax\nribs fall, diaphragm domes upward\nvolume falls, pressure rises\nair is pushed out of the lungs",
        },
      ],
      62,
      { x: 24, w: 852, h: 158, gap: 18 },
    )}
    <text class="small" x="450" y="248" text-anchor="middle">Air never moves because the body wills it: it moves only because lung pressure differs from atmospheric pressure.</text>`,
  900,
  268,
);

const alveolusDiagram = svgDiagram(
  "Alveolus adaptations, feature by feature",
  `<text class="title" x="450" y="34" text-anchor="middle">Four alveolar features that keep diffusion fast</text>
    <rect class="blue" x="40" y="66" width="200" height="96" rx="16"/>
    <text class="label" x="140" y="108" text-anchor="middle">Alveolus</text>
    <text class="small" x="140" y="134" text-anchor="middle">an air sac</text>
    <text class="small" x="140" y="186" text-anchor="middle">one of hundreds of millions</text>
    <text class="small" x="140" y="206" text-anchor="middle">at the end of a bronchiole</text>
    ${labelledRows(
      [
        ["Huge surface area", "the sacs pack an enormous area into the chest"],
        ["Very thin wall", "one flattened cell, so the diffusion route is short"],
        ["Moist lining", "gases have to dissolve before they can diffuse"],
        ["Steep gradient", "ventilation and capillary blood flow both refresh it"],
      ],
      280,
      108,
      34,
    )}
    <text class="small" x="280" y="252">Leave one feature out and diffusion slows, even if the other three are perfect.</text>`,
  900,
  274,
);

const chapterEleven: Chapter = {
  number: 11,
  title: "Gas Exchange in Humans",
  intro: `Your cells cannot reach the outside world, so the body builds a specialised surface for swapping gases and a pump to keep moving air across it.\n\nThis chapter follows the air down the breathing system, explains the muscle mechanics of **ventilation**, looks at the **alveolus** as a diffusion surface, then asks what smoking does to that surface — and finishes with the insect tracheal system and the fish gill as two very different solutions to the same problem.`,
  subheadings: [
    {
      title: "Structures of the Breathing System",
      body: `### The Airway in Order\nAir passes through the structures in a fixed sequence, and examiners ask for that order as well as the function of each part:\n\n**Nose and mouth → pharynx → larynx → trachea → bronchi → bronchioles → alveoli (gas exchange).**\n\n${breathingSystemDiagram}\n\nThe upper airway is a conditioning tunnel, not an exchange surface.\n\nIn the nose the air is warmed by the rich blood supply in the lining, moistened by mucus, and strained by hairs and mucus that trap dust and pollen.\n\nBreathing through the mouth skips all three steps, which is why mouth-breathing during hard exercise leaves the lower airways dry and irritated.\n\nThe trachea is reinforced by rings of cartilage.\n\nThe rings are **not complete circles**:\n\nThe gap at the back is filled with muscle and connective tissue, so the rigid tube cannot collapse when the pressure inside drops during inhalation, yet the flexible back wall still lets the oesophagus expand forwards when food is swallowed.\n\nThe trachea divides at the level of the first rib into the two bronchi, one for each lung, and the bronchi branch repeatedly into ever finer bronchioles, which have no cartilage at all.\n\nEach bronchiole ends in a cluster of alveoli, the only place in the system where gases actually cross into the blood.\n\n### The Switch That Keeps Food Out of the Airways\n\nSwallowing closes the airway twice over: the **epiglottis** covers the entrance to the larynx and breathing is briefly switched off at the brain stem.\n\nTalking, swallowing and breathing all share the pharynx, which is why food going down the wrong pipe makes a person cough.\n\n### Why the Lower Airways Have No Cartilage\n\nBronchioles are too narrow for cartilage to be useful, so their walls carry spirals of **smooth muscle** instead.\n\nThat muscle can constrict the tube in an asthma attack or in response to histamine, and the narrowing is what produces wheezing and the sharp fall in airflow.\n\n### What the Pleural Fluid Actually Does\n\nTwo membranes line the chest and cover each lung, with a thin film of fluid between them.\n\nThe fluid removes friction and makes the two surfaces stick together, so the lungs are pulled open the moment the chest wall moves outward.`,
      figure: lungsArt,
      groups: [
        {
          subTitle: "Structures and Their Functions",
          bullets: [
            "**Nasal cavity:** warms, moistens and filters incoming air; mucus and cilia here do the same job as in the trachea.",
            "**Pharynx:** the shared passage for air and food, behind the mouth and nasal cavity.",
            "**Larynx (voice box):** contains the vocal cords; sound is produced by air setting the cords vibrating.",
            "**Epiglottis:** a flap at the entrance to the larynx that closes over the trachea during swallowing so food enters the oesophagus instead.",
            "**Trachea:** keeps the airway open with incomplete cartilage rings; ciliated cells and mucus-secreting cells clean the air.",
            "**Bronchi:** the two branches into the lungs; cartilage continues, spirals of muscle allow the diameter to change.",
            "**Bronchioles:** narrow branches with no cartilage; smooth muscle in the wall can constrict them, as happens in an asthma attack.",
            "**Alveoli (air sacs):** the gas-exchange surface, each one surrounded by a network of capillaries.",
            "**Diaphragm and rib cage:** the muscular pump that ventilates the lungs; the ribs slope downwards at rest.",
            "**Pleural membranes:** two membranes lining the chest wall and covering each lung, with a film of fluid between them that reduces friction and helps the lungs expand.",
          ],
        },
        {
          subTitle: "Cleaning the Airway: The Mucus Escalator",
          bullets: [
            "Goblet cells in the tracheal and bronchial lining secrete **mucus**, which traps dust, pollen and pathogens.",
            "The **ciliated cells** beat their cilia in a coordinated wave, always upwards towards the throat.",
            "The trapped material is therefore swept out of the airways and swallowed or coughed out — the **ciliary elevator**.",
            "This only works if the lining stays moist and the cilia are alive, which is exactly the link to smoking in the section below.",
            "**Sneezing and coughing** are the same cleaning idea done by muscle instead of by cilia, triggered by irritants stimulating receptors in the lining.",
            "**Cough reflex:** receptors in the larynx, trachea and bronchi detect stimulation, and the response follows a short nerve pathway to the muscles of forced expiration.",
          ],
        },
      ],
      examinerTips: [
        "For an ordering question, learn the sequence as a single string of words. Marks are usually all-or-nothing on order, and a swapped pair costs the whole question.",
        "When asked why the cartilage rings are incomplete, name both consequences: the trachea stays open, and the oesophagus can expand behind it as food passes.",
        "State the function of a structure, not just its name. 'Alveoli' alone scores nothing; 'alveoli are the site of gas exchange' does.",
        "Answer a structure-and-function question in the order the air travels, one sentence per structure. A scrambled order costs the sequence marks even when every individual fact is correct.",
      ],
      commonMistakes: [
        "Placing the larynx after the trachea, or forgetting the bronchioles between the bronchi and the alveoli.",
        "Saying the alveoli 'breathe'. They exchange gases by diffusion; ventilation is a muscle-driven process in the whole chest.",
        "Calling the pleural fluid 'air in the chest'. It is a thin film of fluid between two membranes, not a space full of air.",
        "Describing the diaphragm as part of the lung or as a membrane. It is a sheet of muscle below the lungs that changes the volume of the cavity.",
      ],
      recap: [
        "Place these structures in the correct order as air enters the body: bronchioles, trachea, alveoli, bronchi, nasal cavity. [5]",
        "State the function of the cartilage rings in the trachea and explain why the rings are incomplete at the back. [3]",
        "Describe how mucus and cilia in the trachea protect the lungs. [3]",
        "State two ways in which the nasal cavity prepares air before it reaches the alveoli. [2]",
      ],
    },
    {
      title: "Ventilation: How Air Moves In and Out",
      figure: ventilationArt,
      body: `### Pressure Does the Work, Muscles Change the Pressure\n\n**Ventilation is the movement of air into and out of the lungs.\n\nIt is a mechanical process driven by one rule: a gas flows from a region of higher pressure to a region of lower pressure.\n\nAir therefore moves into the lungs only when the pressure inside the alveoli falls **below** atmospheric pressure, and it moves out only when the pressure inside rises **above** atmospheric pressure.\n\nThe body changes that pressure by changing the volume of the thoracic cavity, using the intercostal muscles and the diaphragm.\n\n${ventilationDiagram}\n\nDuring **inhalation** the external intercostal muscles contract, pulling the ribs upwards and outwards, and the diaphragm contracts so that its domed muscle flattens and moves downwards.\n\nBoth actions increase the volume of the thoracic cavity, the lungs are stretched open, the pressure of the air inside them drops below that of the atmosphere, and air rushes in.\n\nDuring quiet **exhalation** the reverse happens without any contraction at all:\n\nThe intercostal muscles and the diaphragm relax, the elastic recoil of the lungs and the weight of the ribs reduce the volume, pressure rises above atmospheric, and air is forced out.\n\nBecause normal exhalation is passive, it costs no energy at rest.\n\n**Forced exhalation** is active. The internal intercostal muscles pull the ribs down and in, and the abdominal muscles contract, pushing the abdominal organs upwards against the diaphragm.\n\nThis is the mechanism behind coughing, sneezing, blowing and singing.\n\n### The Chain That Carries the Marks\nWrite the sequence in one sentence:\n\n### The Chain That Carries the Marks\nMuscle state, then volume, then pressure, then air movement. 'The diaphragm contracts and flattens, so the volume of the cavity increases, so the pressure in the lungs falls below atmospheric, so air flows in' contains every mark a five-mark question offers.\n\n### Small Pressure Changes Move a Breath\n\nThe pressure inside the alveoli needs to differ from the atmosphere by only a little, because air flows easily through the wide, open airways.\n\nThe muscles are working mainly against the elastic pull of the lung tissue and the weight of the rib cage, not against any resistance from the air itself.\n\n### Why the Lungs Never Empty\n\nEven the hardest possible out-breath leaves air behind in the lungs, so the alveoli always contain some oxygen and diffusion into the blood continues between breaths.\n\nIt is also why stale air and fresh air mix in each inhalation, and why alveolar air is not the same thing as atmospheric air.`,
      groups: [
        {
          subTitle: "The Two Contrasting Actions",
          bullets: [
            "**Inhalation:** external intercostal muscles contract → ribs move up and out; diaphragm contracts → the dome flattens and moves down; thoracic volume increases; lung pressure decreases below atmospheric; air flows in.",
            "**Exhalation at rest:** intercostal muscles and diaphragm relax → ribs fall, diaphragm curves back into a dome; thoracic volume decreases; lung pressure increases above atmospheric; air flows out.",
            "**Forced exhalation:** internal intercostal muscles and abdominal muscles contract, giving a much bigger, faster decrease in volume.",
            "**Muscle state check:** the diaphragm is a muscle, so it can only pull by contracting. Contraction always means the dome flattens and descends.",
            "**Rib movement in detail:** the ribs swing upward and outward like the handles of a bucket, which increases the front-to-back and side-to-side diameters of the cage.",
            "**Volume is set by three walls:** the diaphragm below, the ribs at the sides and the sternum in front, so any one of them can enlarge the cavity.",
          ],
        },
        {
          subTitle: "Breathing, Ventilation, Gas Exchange, Respiration",
          bullets: [
            "**Breathing (ventilation):** the physical movement of air in and out of the lungs, powered by muscles.",
            "**Gas exchange:** the diffusion of oxygen and carbon dioxide across the alveolar and capillary walls, down their concentration gradients.",
            "**Respiration:** the chemical reactions inside cells that break down glucose and release energy.",
            "The three are linked in one chain: ventilation supplies the oxygen that respiration uses and removes the carbon dioxide that respiration produces.",
            "**Ventilation is physical, respiration is chemical:** one happens in the chest and the other inside mitochondria, and an answer that merges them cannot get both marks.",
          ],
        },
        {
          subTitle: "The Four Volumes an Examiner Names",
          bullets: [
            "**Tidal volume:** the air moved in or out during one normal breath at rest.",
            "**Vital capacity:** the greatest volume that can be breathed out after the deepest possible breath in, larger in a tall person and in a trained athlete.",
            "**Residual volume:** the air left after the hardest possible out-breath, which keeps the alveoli open and gas exchange running between breaths.",
            "**Ventilation per minute** is tidal volume multiplied by breathing rate, so slow deep breathing can move as much air as fast shallow breathing.",
          ],
        },
      ],
      examinerTips: [
        "Score the pressure mark every time. A description of muscles and ribs that never mentions **pressure** is incomplete: the exam wants volume change, then pressure change, then air movement.",
        "Never write 'the diaphragm pushes air out'. Muscles change volume and therefore pressure; the pressure difference moves the air.",
        "In a table-completion question, check the rib position against the muscle state: contracted diaphragm means flattened, which means larger volume, which means lower pressure, which means inhalation.",
        "If asked why breathing out at rest needs no energy, name the relaxation of the muscles plus the elastic recoil of the lung tissue.",
      ],
      commonMistakes: [
        "Saying the lungs 'suck air in'. Lungs are passive bags inside the chest; the chest wall and diaphragm enlarge the cavity and the air follows the pressure fall.",
        "Confusing the intercostal muscles: external intercostals contract in inhalation, internal intercostals contract in forced exhalation.",
        "Writing 'air goes into the lungs because we need oxygen'. Purpose language replaces mechanism and scores nothing.",
        "Describing the diaphragm as moving 'up' during inhalation — it contracts and flattens, moving downwards.",
      ],
      recap: [
        "Describe how the diaphragm and the intercostal muscles cause air to enter the lungs. [5]",
        "Explain why air rushes into the lungs when the volume of the thoracic cavity increases. [3]",
        "State two ways in which exhalation differs from inhalation in a person at rest. [2]",
        "A person at rest breathes 14 times a minute with a tidal volume of 0.5 dm³.",
        "Calculate the volume of air moved per minute, and describe how exercise would change the two values. [3]",
      ],
    },
    {
      title: "The Alveolus and Gas Exchange",
      body: `### A Diffusion Surface Built to Order\n\nEvery exchange surface in the syllabus obeys the same design rules: a **large surface area**, a **thin barrier**, a **moist surface**, a **good blood supply**, and **ventilation** to keep the gradient steep.\n\nThe alveolus is the model answer.\n\n${alveolusDiagram}\n\nOxygen moves from the alveolar air into the plasma and then into the red blood cells, where it combines with haemoglobin to form **oxyhaemoglobin**.\n\nCarbon dioxide travels the opposite way, from the blood into the alveolar air to be breathed out.\n\nBoth movements are **diffusion only** — no energy from respiration is used at the alveolus, because each gas simply travels down its own concentration gradient.\n\nBlood arriving at the lung has just returned from the respiring tissues, so it is low in oxygen and high in carbon dioxide;\n\nThe alveolar air has just been replaced by ventilation and is rich in oxygen and poor in carbon dioxide.\n\nBoth gradients point the correct way, and both are continuously renewed.\n\nRenewal is the reason ventilation matters.\n\nIf breathing stopped, the alveolar oxygen would be used up within moments, the gradient would collapse, and diffusion would halt — even though the membranes were still thin and the blood still flowing.\n\nThis is why a description of alveolar adaptation that omits ventilation or capillary flow loses marks: the structure alone is not enough, the flow of both media is part of the adaptation.\n\n### The Barrier in Terms of Cells\n\nThe alveolar wall and the capillary wall are each a single flattened cell pressed against the other, so the route from air to red cell is a fraction of the width of a hair.\n\nOn the way, a gas molecule also crosses a moist surface film and the plasma before it reaches the haemoglobin inside the red cell.\n\n### Surfactant and the Problem of Small Sacs\n\nThe fluid lining an alveolus pulls inward with a surface tension that would tend to collapse the smallest sacs.\n\nThe lining secretes **surfactant**, which lowers that tension, so the sacs stay inflated and the chest does not have to work excessively hard to reopen them with every breath.\n\n### Why the Blood Is the Other Half of the Story\n\nA stationary column of plasma next to a thin membrane would reach equilibrium with alveolar air within seconds and exchange would stop.\n\nContinuous flow of blood, carrying oxygen away and bringing carbon dioxide back, is therefore listed as an adaptation of the exchange surface rather than as a separate system.`,
      figure: alveolusArt,
      groups: [
        {
          subTitle: "Adaptations of the Alveolus, Fully Explained",
          bullets: [
            "**Large surface area:** hundreds of millions of separate sacs spread the air over a vast area, so many molecules can diffuse every second.",
            "**Walls one cell thick:** the epithelium and the capillary endothelium are each a single flattened cell, so the diffusion distance is tiny and the rate is high.",
            "**Moist lining:** oxygen and carbon dioxide must dissolve in the surface film before they can cross the membrane, so a dry alveolus exchanges nothing.",
            "**Dense capillary network:** each sac is wrapped in capillaries, which carries the absorbed oxygen away and brings carbon dioxide back, keeping the gradients steep.",
            "**Ventilation:** regular breathing replaces alveolar air, maintaining the high oxygen and low carbon dioxide concentrations that drive diffusion.",
            "**Elastic fibres:** the alveolar walls stretch during inhalation and recoil during exhalation, so the sacs empty and refill instead of remaining stagnant.",
            "**Sheer number of sacs:** each lung holds hundreds of millions of alveoli, so a vast exchange area is folded into a small volume of the chest.",
          ],
        },
        {
          subTitle: "The Route the Gases Take",
          bullets: [
            "**Oxygen in:** alveolar air → dissolved in the moisture → through alveolar epithelium → through capillary endothelium → plasma → into a red blood cell → combines with haemoglobin.",
            "**Carbon dioxide out:** blood (dissolved, and as hydrogencarbonate carried in the plasma) → through the capillary and alveolar walls → alveolar air → bronchioles → trachea → out through the nose or mouth.",
            "Both directions are passive diffusion, so a question that asks what drives them wants the words **concentration gradient**, never 'energy from respiration'.",
            "**One pigment, two jobs:** haemoglobin takes up oxygen where it is plentiful and releases it where it is scarce, which is why the same molecule loads in the lung and unloads in a respiring muscle.",
          ],
        },
        {
          subTitle: "What Keeps the Two Gradients Steep",
          bullets: [
            "**Ventilation** keeps the alveolar oxygen higher and its carbon dioxide lower than the blood arriving from the body, so both gradients point the right way.",
            "**Blood flow** carries the absorbed oxygen away and replaces it with deoxygenated blood from the tissues, so the capillary side never catches up with the alveolar side.",
            "**Diffusion alone would fail:** without renewal the two sides would equilibrate within seconds and exchange would stop even with perfect membranes.",
            "The driving difference is a **partial pressure** difference for each gas separately, which is why oxygen and carbon dioxide can move in opposite directions at the same moment.",
          ],
        },
      ],
      examinerTips: [
        "Give four adaptations as a matched set — surface area, thin moist wall, capillary network, ventilation. Questions on alveolar adaptation commonly offer four marks and students routinely supply two.",
        "Pair every feature with its effect: 'thin walls **so that** the diffusion distance is short and diffusion is faster'. Naming the structure without the effect is only half a mark.",
        "Say oxygen diffuses, not 'is absorbed by active transport'. The alveolus is a passive surface.",
        "For the exchange surface in general, expect to be asked to name one other example from the syllabus.",
        "The villi of the small intestine, the gill lamellae, or the flattened surface of a leaf.",
      ],
      commonMistakes: [
        "Describing gas exchange as 'the lungs take in oxygen and give out carbon dioxide'. The exchange happens between alveolar air and the blood, not between the person and the atmosphere.",
        "Claiming expired air is mostly carbon dioxide. It contains only a few per cent; most of it is still nitrogen and unused oxygen.",
        "Confusing oxyhaemoglobin with the air itself: oxygen is carried **in** the blood combined with haemoglobin.",
        "Saying the alveoli are 'surrounded by air'. They are filled with air and surrounded by **capillaries**.",
      ],
      recap: [
        "Explain how the structure of an alveolus makes gas exchange efficient. Refer to at least three features. [5]",
        "State how oxygen is carried from the lungs to the tissues, naming the pigment involved. [2]",
        "Explain why gas exchange would stop even if alveolar walls remained thin, if ventilation ceased. [3]",
        "State two features of an alveolus that make diffusion fast and explain the effect of each one. [4]",
      ],
    },
    {
      title: "Inspired and Expired Air, and Testing for Carbon Dioxide",
      body: `### Comparing the Two Air Streams\n\nThe composition of the air going in and the air coming out is a standard data-handling question, and the trick is knowing what does **not** change.\n\nNitrogen is not used by the body, so its percentage barely moves; oxygen falls but never disappears;\n\nCarbon dioxide rises about a hundred-fold; and the expired air is saturated with water vapour and warmer.\n\n| Component | Inspired (atmospheric) air | Expired air | What the difference shows |\n| --- | --- | --- | --- |\n| Oxygen | about 21% | about 16% | some oxygen diffused into the blood, but most is still breathed back out |\n| Carbon dioxide | about 0.04% | about 4% | carbon dioxide from respiration is being removed continuously |\n| Nitrogen | about 78% | about 78% | nitrogen is not taken up by the body |\n| Water vapour | variable, usually low | high, saturated | the respiratory surfaces lose water by evaporation with every breath |\n| Temperature | air temperature | warm, near body temperature | the respiratory tract transfers heat as well as moisture |\n\nThe comparison settles one favourite exam statement: **expired air is not 'used-up air'.\n\nIt still contains far more oxygen than carbon dioxide, which is exactly why mouth-to-mouth resuscitation can keep a person alive.\n\nBecause gas exchange keeps happening while you sleep, breathing rate falls and rises with the demand for respiration:\n\nExercise increases the rate of respiration in the cells, so more carbon dioxide must be cleared and more oxygen delivered, and the breathing rate and depth both rise.\n\n### Reading the Percentages Carefully\n\nThe figures are usually quoted for dry air, and expired air saturated with water vapour dilutes the other gases slightly, which is part of why different sources give slightly different values.\n\nIn any comparison you write, the percentages in each column should still add up to roughly one hundred per cent.\n\n### Why the Oxygen Value Is Not Zero\n\nOnly part of the oxygen present has time to diffuse across during the few seconds the blood lies against the alveolar wall.\n\nEach breath also mixes with a residual volume of air already in the lungs, so the alveolar air is never purely fresh.\n\n### Exercise Changes Rate and Depth Together\n\nWorking muscle respires faster, so more carbon dioxide must be cleared and more oxygen delivered, and both the breathing rate and the tidal volume rise.\n\nThe body detects the change mainly through the falling pH of the blood as extra carbon dioxide dissolves into it.`,
      groups: [
        {
          subTitle: "Two Tests You May Be Asked to Describe",
          bullets: [
            "**Limewater test:** carbon dioxide turns calcium hydroxide solution (limewater) **milky**, because an insoluble white precipitate of calcium carbonate forms. The greater the carbon dioxide concentration, the faster and cloudier the change.",
            "**Hydrogen carbonate indicator:** the solution is red/orange in normal air and turns **yellow** as carbon dioxide dissolves and makes the solution more acidic; it goes purple in air with very little carbon dioxide.",
            "**Comparing inhaled and exhaled air experiment:** bubble each air sample through an equal volume of limewater for an equal time; the expired air produces the heavier milkiness.",
            "**Water vapour:** breathe onto a dry mirror or glass surface and a mist of droplets appears, which the same surface does not gain from atmospheric air.",
            "**Cobalt chloride paper** is the third option: blue paper turns pink as it takes up water, so it demonstrates the moisture in expired air.",
            "**A control tube** of untreated limewater, or a tube through which air is pumped rather than breathed, shows that the change is caused by the air sample and not by the apparatus.",
          ],
        },
        {
          subTitle: "Running the Indicator Experiment Properly",
          bullets: [
            "**Equal volumes of indicator** go into two flasks, with inspired air bubbled through one and expired air through the other for the same time.",
            "**A pump or a bicycle pump** delivers the same volume of each air, so the comparison does not depend on how hard a person happens to blow.",
            "**Expected colours:** inspired air leaves the hydrogencarbonate indicator red or orange, expired air turns it yellow, and air from which the carbon dioxide has been removed turns it purple.",
            "**Soda lime or potassium hydroxide** absorbs carbon dioxide, so passing air through it first proves that this one gas causes the colour change.",
            "**Record a time, not just a colour:** how long each sample takes to produce a given change gives a rate, which is a far more convincing result.",
          ],
        },
        {
          subTitle: "Measuring Breathing in the Classroom",
          bullets: [
            "**Breathing rate:** count breaths per minute from the movement of the chest, at rest and after exercise, and repeat three times to give a mean.",
            "**Tidal volume:** collect a normal breath in a balloon or displace water from an inverted graduated jar, then average several readings.",
            "**Vital capacity:** breathe in as deeply as possible and then out as far as possible, measuring the same way; trained athletes and taller people score higher.",
            "**A spirometer trace** shows each breath as a wave, so exercise appears as bigger and more frequent peaks, and the volume per minute can be calculated from it.",
          ],
        },
      ],
      examinerTips: [
        "Quote values as percentages of the gases only, and keep the units identical in both columns. Questions often award a mark for stating that nitrogen is essentially unchanged.",
        "Name the reagent precisely: **limewater (calcium hydroxide solution)** and the observation **turns milky/cloudy**. 'Turns blue' is a wrong observation and cannot be scored.",
        "When asked why the oxygen percentage does not fall to zero, answer with the mechanism: only part of the oxygen diffuses across during the short contact time of each breath.",
        "If a table gives dry and saturated air values, mention that water vapour content changes with the weather and with the moisture added by the airways.",
      ],
      commonMistakes: [
        "Writing that expired air contains carbon monoxide as a normal product. It does not; carbon monoxide appears from incomplete combustion, for example in tobacco smoke or car exhaust.",
        "Saying oxygen is 'used up' in the lungs. Oxygen is used up in cells during respiration; the lungs only replenish the supply.",
        "Claiming the water vapour in expired air comes from drinking. It evaporates from the moist surfaces of the respiratory tract.",
        "Confusing the control in the limewater comparison: both samples must bubble through equal volumes of the same reagent for the same time.",
      ],
      recap: [
        "State two differences between inspired and expired air and explain each difference. [4]",
        "Describe and name the result of a test used to show that expired air contains more carbon dioxide than inspired air. [3]",
        "Suggest why expired air still contains about 16% oxygen. [2]",
        "Describe how you would use limewater to compare the carbon dioxide content of inspired and expired air, naming one control you would keep. [4]",
      ],
    },
    {
      title: "Smoking and the Air Sacs",
      body: `### Three Substances, Three Damaging Effects\n\nTobacco smoke is a mixture, and exam questions reward naming the individual component and its individual damage rather than a general statement that smoking is 'bad for the lungs'.\n\nThree components carry most of the marks.\n\n| Component of smoke | Effect on the gas-exchange system |\n| --- | --- |\n| Tar | a sticky brown liquid that coats the airway lining, paralyses and destroys cilia, and contains carcinogens that can cause cells of the bronchial lining to divide uncontrollably (lung cancer) |\n| Nicotine | an addictive alkaloid that speeds up the heart rate and raises blood pressure; it also makes the arteries narrow, which reduces blood flow and strains the circulation |\n| Carbon monoxide | a gas that binds to haemoglobin instead of oxygen, forming carboxyhaemoglobin, so less haemoglobin is free to carry oxygen to the respiring tissues |\n\nThe two chronic lung diseases built on that damage are **bronchitis** and **emphysema**, and they are different mechanisms, so they must be described differently.\n\nIn **bronchitis** the irritant chemicals stimulate the goblet cells to secrete far too much mucus while the cilia are damaged or destroyed.\n\nWith no working ciliary elevator, mucus and trapped dust accumulate in the bronchi and bronchioles, so the airways narrow, the smoker coughs violently to move the mucus by muscle force instead of cilia, and bacteria multiply in the stagnant mucus causing repeated chest infections.\n\nIn **emphysema** the damage is to the air sacs themselves. The fine walls between alveoli are broken down, so many small sacs merge into fewer, larger, permanently damaged air spaces.\n\nThe total surface area for gas exchange falls, the elastic recoil of the lung is lost so the sacs do not empty properly and stale air is trapped, and the capillary network around them is reduced.\n\nLess oxygen therefore diffuses into the blood each second and less carbon dioxide leaves it.\n\nBlood oxygen falls, so the heart and breathing rate rise to try to compensate, and the person is breathless on the slightest exertion.\n\nA pregnant smoker also passes carbon monoxide and nicotine across the placenta, which reduces the oxygen available to the developing fetus and is associated with low birth mass.\n\n### What Recovers After Quitting and What Does Not\n\nCilia regrow and mucus clearance improves within weeks of stopping, so chest infections become less frequent and the cough eases.\n\nWalls of alveoli that have been destroyed do not regrow, which is why the breathlessness of established emphysema is permanent.\n\n### The Phrasing That Gains the Marks\nWrite 'increases the risk of' rather than 'causes', and always pair a named component of smoke with the structure it damages. 'Tar causes cancer' is weaker than 'tar contains carcinogens that can make the cells of the bronchial lining divide uncontrollably'.`,
      groups: [
        {
          subTitle: "Linking Structure to Symptom, the Way Marks Are Awarded",
          bullets: [
            "**Damaged cilia → mucus builds up → coughing and infection.** Cilia cannot beat if they are paralyzed by smoke, so the airway is no longer cleaned.",
            "**Broken alveolar walls → smaller surface area → slower diffusion of oxygen → lower blood oxygen → breathlessness.**",
            "**Loss of elasticity → air trapped in the sacs → less fresh air reaches the remaining alveoli → the concentration gradient is not maintained.**",
            "**Carbon monoxide → less oxygen carried → cells respire anaerobically more often → lactic acid and fatigue during exercise.**",
            "**Tar carcinogens → uncontrolled division of lining cells → a tumour that can block a bronchus or spread to other organs.**",
            "**Lower blood oxygen → faster breathing and faster heart rate.** The body compensates, which is why a smoker is breathless at workloads a non-smoker handles easily.",
            "**Nicotine → narrower arteries and a higher heart rate.** Both effects raise blood pressure and add to the workload of the heart, linking smoking to coronary disease.",
          ],
        },
        {
          subTitle: "Other Effects Worth One Line",
          bullets: [
            "Smoking thickens the blood and narrows the arteries, raising the risk of coronary heart disease and stroke.",
            "Passive smoking exposes non-smokers to the same irritant gases and particles.",
            "The lungs of a smoker are physically grey-black because carbon particles are lodged in the tissue and in the lymph nodes of the thorax.",
            "**Reduced ciliary action also lets pathogens reach the alveoli**, so ordinary infections that a clear airway would have filtered out establish themselves.",
            "**Carbon monoxide binds haemoglobin far more readily than oxygen does**, so the blood of a smoker carries less oxygen even before any lung damage is counted.",
          ],
        },
        {
          subTitle: "How the Smoking Data Questions Are Built",
          bullets: [
            "**Epidemiological tables** give death rates per thousand for smokers and non-smokers; quote the two figures, then state the ratio or difference before drawing any conclusion.",
            "**Correlation is not proof of cause**, so a good answer says the data 'suggest an association' and then adds the mechanism that makes the association believable.",
            "**Two variables are never separated** in a self-selected group of smokers, so the standard criticism of such a study is that age, diet and work exposure were not controlled.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish bronchitis from emphysema by the site: bronchitis is a **disease of the airways and mucus**, emphysema is a **disease of the alveolar walls**. Mixing the two descriptions costs both sets of marks.",
        "Name the smoke component, then its target structure, then the physiological consequence. Three links, three marks.",
        "For carbon monoxide, always write the mechanism **haemoglobin + carbon monoxide → carboxyhaemoglobin, so less oxygen is transported**. Saying 'carbon monoxide is poisonous' earns nothing.",
        "Use 'increased risk of' rather than 'causes' for diseases, because a mark scheme is careful about certainty and examiners notice imprecise causal language.",
      ],
      commonMistakes: [
        "Claiming emphysema is caused by excess mucus. That is bronchitis; emphysema is the destruction of alveolar walls.",
        "Attributing lung cancer mainly to nicotine. Tar carries the carcinogens; nicotine is the addictive alkaloid.",
        "Saying carbon monoxide 'replaces the oxygen in the lungs'. It binds to haemoglobin in the **blood**, not in the alveoli.",
        "Describing smoker's cough as a ciliary reflex. It is a muscular response to mucus the cilia could not clear.",
      ],
      recap: [
        "Name the three harmful components of tobacco smoke and give one effect of each. [6]",
        "Explain how damage to the cilia of the trachea leads to chest infections in a smoker. [4]",
        "Explain why a person with emphysema becomes breathless on exercising. [4]",
        "Describe how carbon monoxide in smoke reduces the oxygen available to the muscles. [3]",
      ],
    },
    {
      title: "Gas Exchange in Insects and Fish",
      body: `### Two Other Answers to the Same Problem\n\nBoth animals face the identical challenge: get oxygen to respiring cells and remove carbon dioxide, while keeping a steep diffusion gradient.\n\nTheir answers differ because their mediums differ — air is light and rich in oxygen, water is heavy and holds only a small fraction of the oxygen an equal volume of air contains.\n\n### Insects: Air Delivered Straight to the Cells\n\n**Insects** use the **tracheal system**. Air enters through **spiracles**, which are paired openings along the thorax and abdomen fitted with valves that can open and close.\n\nSpiracles lead into **tracheae**, tubes reinforced with rings of chitin that keep them open, and the tracheae branch into fine **tracheoles** whose thin, moist walls press against individual cells.\n\nOxygen therefore diffuses all the way from the outside air to the respiring cytoplasm, so the insect's blood, the **haemolymph**, carries no oxygen at all, and carbon dioxide diffuses back out along the same route.\n\n### The Cost of an Internal Air System\n\nSpiracles close to limit water loss, and a resting insect can exchange gases by diffusion alone.\n\nA flying insect, however, pumps its abdominal muscles to ventilate the tracheae, because diffusion through tiny tubes cannot move air quickly enough for sustained flight.\n\n### Fish: Extracting Oxygen from a Poor Medium\n\n**Bony fish** use **gills**. Water is taken in through the mouth, passes over four **gill arches** on each side, and leaves through the **operculum**.\n\nEach arch carries numerous **gill filaments**, and each filament is covered in folded plates called **lamellae**, which hold the capillaries and provide the enormous surface area.\n\nLamellae are only a cell or two thick, so oxygen diffuses from the water into the blood while carbon dioxide diffuses out in the opposite direction.\n\n### Countercurrent Flow Explained\n\nFish face a gradient problem that lungs do not: as water flows past a surface, blood and water would quickly equalise and exchange would stop.\n\nThe solution is **countercurrent flow**, in which blood in the lamella travels in the **opposite direction** to the water flowing over it.\n\nThat arrangement means the blood always meets water holding more oxygen than itself, along the whole length of the lamella, so the gradient never reverses and a high proportion of the dissolved oxygen is extracted.\n\n### Why the Medium Sets the Design\n\nWater holds far less dissolved oxygen than air, is denser and more viscous, and pulls salts and water across the gill surface, so a fish processes enormous volumes of it and spends real energy doing so.\n\nAir solves those problems but creates the opposite one: an exchange surface exposed to air dries out, which is why the human lung folds its moist surface inside the chest.\n\nThe table below compares the three designs.

| Feature | Human lung | Insect tracheal system | Fish gill |
| --- | --- | --- | --- |
| Exchange medium | air | air | water |
| Exchange surface | alveoli | tracheoles | lamellae on the gill filaments |
| Ventilation | diaphragm and intercostal muscles | abdominal muscle movements, spiracle valves | mouth and operculum pumping |
| Oxygen carried in blood? | yes, by red blood cells | no, haemolymph is not the carrier | yes, in capillaries inside each lamella |
| How the gradient is kept | fresh air in, blood flowing away | air reaches the cells directly | water and blood flow in opposite directions |
| Main cost of the design | water evaporates from the moist surface | tube length limits body size | a dense, oxygen-poor medium costs energy |`,
      groups: [
        {
          subTitle: "Structures of the Insect System",
          bullets: [
            "**Spiracles:** the external openings, each valved so it can close to reduce water loss.",
            "**Tracheae:** the main tubes, strengthened internally with spirals of **chitin** so they cannot collapse.",
            "**Tracheoles:** the fine branches in contact with tissues.",
            "Their walls are thin and moist, and their tips contain fluid that is drawn back when the insect becomes active, shortening the air route to the cells.",
            "The trade-off: an internal air-filled system limits water loss but restricts body size, because diffusion through long tubes cannot supply a large animal.",
            "**Fluid in the tracheole tips** is drawn back into the surrounding tissue when an insect becomes active, shortening the air route exactly where demand is greatest.",
          ],
        },
        {
          subTitle: "Structures of the Fish Gill",
          bullets: [
            "**Mouth and operculum:** the pumping chambers that keep a one-way stream of water moving across the gills.",
            "**Gill arch:** the supporting bone; **filaments** project from it; **lamellae** cover each filament and carry the capillaries.",
            "Water enters the mouth, passes over the gills and exits through the opercular cavity, so the flow across the exchange surface is unidirectional.",
            "Countercurrent flow maintains the diffusion gradient along the entire length of the lamella, so oxygen uptake is far more efficient than if blood and water moved in the same direction.",
            "**The buccal pump:** lowering the floor of the mouth draws water in, and raising it shuts the mouth and drives water out through the opercular cavity, so flow over the lamellae stays one-way.",
          ],
        },
        {
          subTitle: "Water Versus Air as a Respiratory Medium",
          bullets: [
            "Water holds much less dissolved oxygen than air holds oxygen overall, so a fish must pass enormous volumes of it over the gills.",
            "Water is denser and more viscous, so ventilating gills costs a fish considerably more energy than ventilating lungs costs a mammal.",
            "Water also carries carbon dioxide away easily, and gills lose salts and water to the surroundings, a problem the land airway does not have.",
            "A gill lamella collapses out of water because there is nothing to hold the filaments apart, so the surface area available for diffusion falls sharply — this is why a fish suffocates in air even though air is richer in oxygen.",
            "**Moist surfaces cost water:** an animal that ventilates lungs loses water vapour with every breath, which is why the exchange surface is buried inside the body instead of left exposed as a gill is.",
          ],
        },
      ],
      examinerTips: [
        "If a question asks how an insect obtains oxygen, name the route in order: **spiracle → trachea → tracheole → cell**. Naming the blood as the carrier is a common zero.",
        "For gills, the two ideas that earn the marks are **lamellae give a large surface area with thin walls and a rich blood supply** and **countercurrent flow maintains the concentration gradient**. Give both.",
        "Say water and blood flow in **opposite directions**, and follow with the consequence: a gradient is maintained along the whole lamella rather than being equalised at one point.",
        "In a comparison question, contrast the medium (air versus water) and the ventilation method (muscular chest wall and diaphragm versus mouth and operculum) rather than only the structures.",
      ],
      commonMistakes: [
        "Describing spiracles as 'the insect's nose'. They are valved openings distributed along the body, not a single head structure.",
        "Saying insects have an open circulatory system, therefore they use blood for gas transport. The haemolymph largely does not carry oxygen.",
        "Writing 'countercurrent' without explaining it. The mark is for the opposite-direction flow plus the maintained gradient.",
        "Claiming fish pump water over the gills to move blood. The ventilation moves the **water**; the blood is pumped by the heart.",
      ],
      recap: [
        "Describe how oxygen reaches the cells of an insect, naming the structures in order. [4]",
        "Explain the advantage to a fish of countercurrent flow across the gill lamellae. [3]",
        "State two differences between gas exchange in a mammal and in a bony fish. [4]",
        "Suggest why a fish dies when removed from water, even though air contains more oxygen. [3]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_11: Chapter = chapterEleven;
