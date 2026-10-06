import type { SubjectNotes } from "./types";

export const BIOLOGY: SubjectNotes = {
  id: "biology",
  name: "Biology",
  code: "0610",
  color: "bg-emerald-500",
  chapters: [
    {
      number: 1,
      title: "Characteristics and Classification of Living Organisms",
      intro: "All living organisms share seven fundamental life processes summarised by the acronym **MRSGREN**. These characteristics distinguish living things from non-living matter. Classification brings order to biodiversity by grouping organisms according to shared features and evolutionary relationships. The universal binomial naming system ensures that scientists worldwide refer unambiguously to the same organism.",
      subheadings: [
        {
          title: "The Seven Characteristics of Life (MRSGREN)",
          body: `Every organism must perform **all seven** life processes to be classified as living. Missing even one disqualifies an entity — which is why viruses, despite reproducing, are not considered alive.

## M — Movement
An action by an organism causing a change in position or place. This includes not only animal locomotion but also plant tropisms (bending toward light), the swimming of sperm cells, and the sliding of white blood cells toward bacteria. The key distinction: the organism *itself* generates the movement.

## R — Respiration
The chemical reactions in **every living cell** that break down organic molecules (principally glucose) to release usable energy as ATP. Respiration is **not** breathing — breathing (ventilation) is the physical act of moving air; respiration is a cellular biochemical process.

> **Examiner trap:** Writing "breathing" instead of "respiration" scores zero. Respiration happens in every cell of every living thing, including plants, fungi, and bacteria.

## S — Sensitivity
The ability to detect or sense stimuli in the internal or external environment and produce an appropriate, coordinated response. Animals use specialised receptor cells (photoreceptors, mechanoreceptors); plants use phytohormones such as auxin for phototropism and gibberellins for germination.

## G — Growth
A ==permanent== increase in size and **dry mass** due to an increase in cell number, cell size, or both. We measure **dry mass** (after removing all water by drying to constant mass in an oven) because wet mass fluctuates with hydration state. A sponge absorbing water gets larger but has not grown biologically.

## R — Reproduction
The production of new organisms of the same species. **Sexual reproduction** involves fusion of gametes from two parents → genetically varied offspring. **Asexual reproduction** involves one parent, no gametes → genetically identical clones (e.g. binary fission in bacteria, budding in yeast, runners in strawberries).

## E — Excretion
The removal from organisms of the **waste products of metabolism**, toxic substances, and substances in excess of requirements. Key metabolic wastes: CO₂ (from respiration), urea (from amino acid breakdown in the liver), excess water and salts (via kidneys and sweat glands).

| Process | What is removed | From where |
|---------|----------------|------------|
| **Excretion** | CO₂, urea, excess water/salts | Produced *inside* cells by metabolism |
| **Egestion** | Undigested food, dead bacteria, bile pigments (faeces) | Was never absorbed into cells |

> **Do not confuse excretion with egestion.** Faeces is egested material — it was never part of the body's cells and is not metabolic waste.

## N — Nutrition
The taking in of nutrients (organic molecules and mineral ions) for energy, growth, and development. **Autotrophic nutrition** (plants, algae): make food from inorganic sources using light energy (photosynthesis). **Heterotrophic nutrition** (animals, fungi, most bacteria): obtain organic molecules by consuming other organisms or their products.`,
          groups: [],
          recap: [
            "State all seven characteristics of living organisms, using the acronym MRSGREN. [7]",
            "Explain the difference between respiration and breathing, stating where each process occurs. [4]",
            "Explain why dry mass rather than wet mass is used to measure growth in plants. [2]",
            "A student claims viruses are living because they can reproduce inside host cells. Evaluate this claim, referring to the characteristics of living organisms. [4]",
            "Distinguish between excretion and egestion. Give one example of a substance produced by each process in a mammal. [4]"
          ]
        },
        {
          title: "Classification — Kingdoms, Classes and Binomial Nomenclature",
          body: `Classification groups organisms to reflect evolutionary relationships, allow predictions about shared features, and enable unambiguous communication between scientists worldwide.

## The Taxonomic Hierarchy

Groups nest inside one another from most inclusive (Kingdom) to least inclusive (Species):

**Kingdom → Phylum → Class → Order → Family → Genus → Species**

Memory aid: ==**K**eep **P**ots **C**lean **O**r **F**ood **G**oes **S**ticky==

A **species** is the fundamental unit — a group of organisms that can interbreed to produce *fertile* offspring. Horses and donkeys can mate to produce mules, but mules are sterile → they are different species.

## The Five Kingdoms

| Kingdom | Cell type | Cell wall | Nutrition | Example |
|---------|-----------|-----------|-----------|---------|
| **Animalia** | Eukaryotic | Absent | Heterotrophic (ingestion) | Lion |
| **Plantae** | Eukaryotic | Cellulose | Autotrophic (photosynthesis) | Oak tree |
| **Fungi** | Eukaryotic | **Chitin** | Saprotrophic (absorption after external digestion) | Mushroom |
| **Protoctists** | Eukaryotic | Varies | Varied | *Amoeba*, *Plasmodium* |
| **Prokaryotes** | Prokaryotic | Peptidoglycan (murein) | Varied | *E. coli* |

### Why Fungi ≠ Plants (a very common exam mistake)
1. Cell wall of **chitin** not cellulose
2. **Saprotrophic** (secrete enzymes externally, absorb products) — not photosynthetic
3. Store energy as **glycogen** not starch
4. Mostly made of **hyphae** forming a mycelium — no leaves, roots, or stems
5. **Heterotrophic** — cannot make their own food

## The Five Vertebrate Classes

All vertebrates share: vertebral column, endoskeleton, bilateral symmetry, closed circulatory system.

| Class | Temp. regulation | Skin | Gas exchange | Reproduction | Example |
|-------|-----------------|------|--------------|-------------|---------|
| **Fish** | Ectothermic | Wet scales | Gills | Soft unshelled eggs in water | Salmon |
| **Amphibia** | Ectothermic | Moist, permeable | Gills (larva) → lungs + skin (adult) | Jelly-covered eggs in water | Frog |
| **Reptilia** | Ectothermic | Dry scales | Lungs | Leathery-shelled eggs on land | Lizard |
| **Aves (Birds)** | Endothermic | Feathers | Lungs + air sacs | Hard-shelled eggs | Eagle |
| **Mammalia** | Endothermic | Hair/fur | Lungs | Live birth (mostly); suckle young | Human |

## Arthropod Groups

| Group | Leg pairs | Body segments | Antennae | Example |
|-------|-----------|--------------|----------|---------|
| Insects | 3 | 3 (head, thorax, abdomen) | 1 pair | Bee |
| Arachnids | 4 | 2 (cephalothorax, abdomen) | None | Spider |
| Crustaceans | 5+ | 2 + chalky exoskeleton | 2 pairs | Crab |
| Myriapods | Many | Many | 1 pair | Centipede |

## Binomial Nomenclature
Every species has a unique two-part Latin name: **Genus species** (e.g. *Homo sapiens*). Rules:
1. Genus starts with a **capital letter**
2. Species starts with a **lower case letter**
3. Both words are **italicised** (typed) or **underlined** (handwritten)
4. After first use, genus may be abbreviated: *H. sapiens*`,
          groups: [],
          recap: [
            "Name the five kingdoms of living organisms and state one distinguishing feature of each. [5]",
            "Give three differences between fungi and plants that explain why they are classified in separate kingdoms. [3]",
            "State four features that distinguish mammals from reptiles. [4]",
            "A student writes the scientific name of a lion as PANTHERA LEO. State two errors and rewrite the name correctly. [3]",
            "Explain why endothermy gives birds and mammals an advantage over ectothermic animals in cold environments. [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Organisation of the Organism",
      intro: "Life is organised hierarchically: organelles → cells → tissues → organs → organ systems → organism. Each level possesses emergent properties absent from the level below. Understanding the ultrastructure of animal and plant cells — their internal components visible only by electron microscopy — is essential for explaining cell function, and for understanding how specialised cells are uniquely adapted to their roles.",
      subheadings: [
        {
          title: "Cell Ultrastructure — Animal and Plant Cells",
          body: `Cell **ultrastructure** describes the detailed internal organisation of cells as revealed by the **electron microscope** (resolution ~0.2 nm, compared to ~200 nm for light microscopes).

## Structures in ALL Eukaryotic Cells

### Cell (Plasma) Membrane
A **phospholipid bilayer** ~7–8 nm thick with embedded proteins. The hydrophilic phosphate heads face the aqueous cytoplasm and extracellular fluid; the hydrophobic fatty acid tails face inward. Embedded proteins function as:
- **Transport channels** (facilitated diffusion of ions, glucose)
- **Carrier proteins** (active transport — require ATP)
- **Receptor proteins** (for hormones, e.g. insulin receptors on liver cells)
- **Glycoproteins** (cell recognition and signalling)

The membrane is ==selectively permeable== — it allows some substances through but not others, giving the cell control over its internal composition.

### Nucleus
The control centre of the cell. Contains **chromatin** (DNA wrapped around histone proteins). Surrounded by the **nuclear envelope** (double membrane) perforated by **nuclear pores** (~80–100 nm diameter) through which mRNA exits to ribosomes. Inside, the **nucleolus** manufactures ribosomal RNA and assembles ribosome subunits.

### Mitochondria
The site of **aerobic respiration**. Have a **double membrane** — outer membrane is smooth; inner membrane is deeply folded into **cristae** (greatly increasing surface area for the electron transport chain). The internal fluid is the **matrix**, where the **Krebs cycle** runs. Cells needing the most energy (muscle fibres, sperm mid-piece, kidney tubule cells, liver hepatocytes) contain the most mitochondria.

### Ribosomes
Sites of **protein synthesis**. Composed of ribosomal RNA + protein. Eukaryotic ribosomes are **80S** (larger); prokaryotic ribosomes are **70S** (smaller — this difference is exploited by antibiotics like streptomycin which block 70S without affecting human 80S ribosomes). Free ribosomes make cytoplasmic proteins; ribosomes on rough ER make proteins for export or membrane insertion.

### Endoplasmic Reticulum (ER)
- **Rough ER**: Studded with ribosomes; synthesises and transports proteins
- **Smooth ER**: No ribosomes; synthesises lipids, detoxifies drugs (very abundant in liver cells)

### Golgi Apparatus
Stacks of flattened membrane sacs. Receives vesicles from rough ER, modifies and packages proteins (adds carbohydrate chains → glycoproteins), and directs them to their destination (secretion, lysosomes, or membrane insertion).

## Additional Structures in PLANT Cells Only

### Cell Wall
Made of **cellulose microfibrils** in a polysaccharide matrix. Functions:
- Provides structural rigidity (maintains cell shape)
- Prevents bursting during osmosis (creates **turgor pressure**)
- **Fully permeable** — does not restrict movement of molecules

### Chloroplasts
Contain the **thylakoid membrane system** — thylakoids stacked into **grana**. Chlorophyll and other photosynthetic pigments sit in thylakoid membranes (light-dependent reactions). The **stroma** (fluid) surrounds the grana (Calvin cycle / light-independent reactions). Only in green, illuminated cells.

### Large Central Vacuole
Filled with **cell sap** (concentrated solution of sugars, amino acids, mineral ions). When full, pushes cytoplasm outward against wall → **turgor pressure** → plant rigidity. When depleted of water → **flaccid cell** → wilting.

## Comparison Table

| Feature | Animal cell | Plant cell |
|---------|------------|------------|
| Cell membrane | ✓ | ✓ |
| Nucleus | ✓ | ✓ |
| Mitochondria | ✓ | ✓ |
| Ribosomes | ✓ | ✓ |
| Cell wall | ✗ | ✓ (cellulose) |
| Chloroplasts | ✗ | ✓ (in green parts) |
| Large central vacuole | ✗ (small temporary) | ✓ |
| Centrioles | ✓ | ✗ |`,
          groups: [
            {
              subTitle: "Levels of organisation",
              bullets: [
                "**Cell**: Smallest unit of life that can carry out all life processes independently. Examples: red blood cell, neurone, root hair cell.",
                "**Tissue**: Group of similar cells performing the same function. Examples: muscle tissue (muscle fibres), nervous tissue (neurones + glial cells), epithelial tissue (lining cells).",
                "**Organ**: Structure made of several tissues working together. Examples: heart (muscle, connective, epithelial, nervous tissue), leaf (epidermis, mesophyll, vascular tissue), kidney.",
                "**Organ system**: Group of organs with a shared overall function. Examples: digestive system (mouth, oesophagus, stomach, intestines, liver, pancreas), circulatory system (heart, blood vessels, blood)."
              ]
            }
          ],
          recap: [
            "Describe the structure and function of mitochondria, explaining how their structure relates to their function. [5]",
            "Explain why plant cells placed in pure water do not burst, whereas animal cells in the same conditions do burst. [4]",
            "State three structures visible under a light microscope that would distinguish a plant cell from an animal cell. [3]",
            "Explain why liver cells (hepatocytes) contain abundant smooth endoplasmic reticulum and many mitochondria. [4]",
            "Describe the role of the Golgi apparatus in the production and secretion of a glycoprotein. [4]"
          ]
        },
        {
          title: "Specialised Cells and Their Adaptations",
          body: `A **specialised cell** has a structure precisely tailored to one specific function. Specialisation (differentiation) means that a cell expresses only a subset of its genes, developing unique features that make it maximally efficient at its role but unable to perform other functions.

## Red Blood Cell (Erythrocyte)
**Function:** Transport oxygen from lungs to respiring cells.

**Adaptations:**
- **Biconcave disc shape** → increases surface area : volume ratio → faster O₂ diffusion in and out
- **No nucleus** → more space for haemoglobin (~280 million Hb molecules per cell)
- **No mitochondria** → does not consume the O₂ it carries; uses anaerobic respiration
- **Thin, flexible cell membrane** → can squeeze through capillaries as narrow as 5 μm
- **Haemoglobin** → binds O₂ reversibly (loads at high pO₂ in lungs; unloads at low pO₂ in tissues)

## Sperm Cell
**Function:** Deliver haploid male genetic material to the egg cell.

**Adaptations:**
- **Streamlined head** → reduces drag in viscous reproductive tract fluid
- **Acrosome** (enzyme-filled vesicle at tip) → digests zona pellucida of egg to allow entry
- **Large nucleus** with condensed haploid DNA
- **Mid-piece packed with mitochondria** → aerobic respiration provides ATP for flagellum movement
- **Long flagellum** (tail) → propulsion toward egg over long distances

## Root Hair Cell
**Function:** Absorption of water and mineral ions from soil.

**Adaptations:**
- **Long, thin hair-like extension** → dramatically increases surface area in contact with soil water
- **Large central vacuole** → maintains low water potential → drives osmosis of water inward
- **No chloroplasts** → underground, no light available
- **Many mitochondria** → provide ATP for active transport of mineral ions against concentration gradient

## Ciliated Epithelial Cell
**Function:** Move mucus (with trapped pathogens and dust) up the trachea toward the pharynx.

**Adaptations:**
- **Hundreds of cilia** on apical surface → each beats in a coordinated wave pattern (metachronal rhythm)
- **Many mitochondria** → provide ATP for cilia movement (powered by dynein motor proteins)
- **Goblet cells** interspersed among ciliated cells → secrete mucus to trap particles`,
          groups: [],
          recap: [
            "Explain three ways in which a red blood cell is structurally adapted to transport oxygen efficiently. [3]",
            "Describe three adaptations of a root hair cell for the absorption of water and mineral ions from the soil. [3]",
            "Explain why sperm cells have many mitochondria in their mid-piece region. [2]",
            "Describe the role of ciliated epithelial cells in protecting the lungs from pathogens. [4]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Movement In and Out of Cells",
      intro: "Three mechanisms govern the movement of substances across cell membranes: diffusion, osmosis, and active transport. Each has specific energy requirements, direction, and governing rules. Mastering these mechanisms explains how organisms absorb nutrients, exchange gases, regulate water balance, and maintain the precise internal chemical composition needed for life.",
      subheadings: [
        {
          title: "Diffusion",
          body: `**Definition:** Diffusion is the ==net movement== of particles from a region of **higher concentration** to a region of **lower concentration**, due to the random kinetic motion of particles. It is a **passive process** — no energy (ATP) is required.

The word ==net== is critical. Particles move in both directions continuously, but statistical probability ensures more particles move from the crowded (high-concentration) side to the empty (low-concentration) side than vice versa. Net movement continues until **equilibrium** — equal concentrations on both sides — at which point movement in both directions is equal and there is no further net change.

## Factors Affecting the Rate of Diffusion

1. **Concentration gradient** — Steeper gradient = faster net movement. Maintaining a steep gradient (e.g. by ventilation in lungs) accelerates diffusion.
2. **Surface area** — More area = more simultaneous diffusion events. Alveoli, villi, and microvilli are all adaptations to increase surface area.
3. **Diffusion distance (thickness)** — Shorter path = faster diffusion. Alveolar walls are only ~0.2 μm thick (one cell).
4. **Temperature** — Higher temperature = more kinetic energy = faster movement.
5. **Molecular/particle size** — Smaller molecules diffuse faster (fewer collisions, faster movement).

## Gas Exchange at the Alveolus — A Perfect Example

The alveoli demonstrate every factor that maximises diffusion:

| Adaptation | How it speeds diffusion |
|-----------|------------------------|
| ~700 million alveoli (total SA ~70 m²) | Maximises surface area |
| Wall is 1 cell thick (~0.2 μm) | Minimises diffusion distance |
| Dense capillary network | Removes O₂ from blood constantly, maintains steep gradient |
| Continuous ventilation | Replenishes alveolar O₂, removes CO₂ |
| Moist inner surface | Gases dissolve before crossing membrane |`,
          groups: [],
          recap: [
            "Define diffusion, using the terms net movement and concentration gradient. [2]",
            "Explain how the structure of the alveolus is adapted to maximise the rate of gas exchange. State and explain four adaptations. [8]",
            "Explain why increasing the temperature increases the rate of diffusion of a gas. [2]",
            "Explain why diffusion is insufficient as the sole oxygen supply mechanism for a large multicellular organism. [3]"
          ]
        },
        {
          title: "Osmosis",
          body: `**Definition:** Osmosis is the ==net movement== of **water molecules** from a region of ==higher water potential== to a region of ==lower water potential==, through a **partially permeable membrane**.

## Key Concepts

- **Water potential (Ψ)**: Tendency of water to move. Pure water = 0 kPa (highest possible). Solutions have *negative* Ψ values.
- **More concentrated solution** = more solute = **lower (more negative) water potential**
- Water always moves: **less negative → more negative** (high Ψ → low Ψ)
- The partially permeable membrane has pores that allow water molecules through but block most dissolved solutes

## Effects on Plant Cells

**In pure water (dilute solution — higher Ψ than cell):**
Water enters by osmosis → vacuole swells → cytoplasm pushed against cell wall → cell becomes **turgid**. The cell wall provides resistance (wall pressure / turgor pressure). Plant cells do NOT burst because the cellulose wall is rigid.

**In concentrated solution (lower Ψ than cell):**
Water leaves by osmosis → vacuole shrinks → cytoplasm pulls away from cell wall → **plasmolysis**. The cell is now **flaccid** (and if severe, plasmolysed — the membrane detaches from the wall). This causes wilting.

## Effects on Animal Cells

Animal cells have no cell wall, so:
- **In pure water:** water enters → cell swells → **bursts** (lysis; red blood cells = haemolysis)
- **In concentrated solution:** water leaves → cell shrinks → **crenation** (spiky appearance)
- **In isotonic solution:** no net movement → normal volume maintained

| Solution | Plant cell | Animal cell |
|----------|-----------|------------|
| Dilute (high Ψ) | Turgid, firm | Bursts (lysis) |
| Isotonic | No change | No change |
| Concentrated (low Ψ) | Plasmolysed, flaccid | Crenated, shrivelled |`,
          groups: [],
          recap: [
            "Define osmosis, including the terms water potential and partially permeable membrane. [3]",
            "Explain what happens, using particle theory, when a plant cell is placed in a concentrated sucrose solution. Use the terms plasmolysis, flaccid, and water potential. [5]",
            "A student places potato cylinders in solutions of increasing concentration and measures mass change. The cylinder in one solution shows no mass change. Explain what this indicates about the potato cell contents. [3]",
            "Explain why drinking seawater increases dehydration rather than relieving it. [4]"
          ]
        },
        {
          title: "Active Transport",
          body: `**Definition:** Active transport is the movement of molecules or ions across a membrane from a region of **lower concentration** to a region of **higher concentration** (against the concentration gradient), using **energy from ATP** and **specific carrier proteins** (pumps).

## Mechanism
ATP binds to a carrier protein embedded in the membrane → causes a **conformational change** (shape change) → the ion or molecule is moved from the low-concentration side to the high-concentration side and released → the protein reverts to its original shape. When respiration is inhibited (no oxygen, or presence of metabolic poisons like cyanide), ATP production stops and active transport ceases immediately.

## Where Active Transport Is Essential

**Root hair cells — mineral ion uptake:**
Soil water contains mineral ions (NO₃⁻, K⁺, PO₄³⁻) at very low concentrations — often lower than already inside root cells. Active transport pumps ions FROM the soil INTO root cells against the gradient. Evidence: placing roots in anaerobic conditions (no O₂) stops ion uptake, confirming dependence on aerobic respiration.

**Small intestine — glucose absorption:**
After digestion, when lumen glucose is lower than blood glucose, active transport continues absorbing glucose into blood. Without active transport, absorption would stop when concentrations equalize, leaving much glucose unabsorbed.

**Kidney tubules — glucose reabsorption:**
All filtered glucose is reabsorbed by active transport (100% recovery in healthy individuals) — even when blood glucose exceeds filtrate glucose.

## Comparison of All Three Mechanisms

| Feature | Diffusion | Osmosis | Active Transport |
|---------|-----------|---------|-----------------|
| Energy (ATP) needed? | No | No | Yes |
| Direction | High → low concentration | High → low water potential | Low → high concentration |
| Substance(s) | Any | Water only | Specific ions/molecules |
| Carrier protein needed? | Sometimes | No | Yes |
| Membrane needed? | Sometimes | Yes (partially permeable) | Yes |`,
          groups: [],
          recap: [
            "Define active transport and explain why it requires ATP. [3]",
            "Explain why mineral ion uptake by root hair cells requires active transport rather than diffusion. [3]",
            "A student adds a respiratory inhibitor to root cells and observes that mineral uptake stops, but water uptake continues. Explain these observations. [4]",
            "Compare active transport with diffusion in terms of (i) energy requirement, (ii) direction of movement, (iii) need for carrier proteins. [6]"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Biological Molecules",
      intro: "Living organisms are built from and fuelled by four main classes of biological molecules: carbohydrates, lipids (fats and oils), proteins, and nucleic acids. Each is built from smaller subunits (monomers) joined by condensation reactions and broken apart by hydrolysis. Understanding their structures is inseparable from understanding their functions — and the standard food tests allow identification of these molecules in any biological sample.",
      subheadings: [
        {
          title: "Carbohydrates — Structure and Function",
          body: `Carbohydrates contain **carbon, hydrogen, and oxygen** only, with the general formula $(CH_2O)_n$. They are classified by the number of sugar units:

## Monosaccharides (single sugar units)
The simplest carbohydrates — cannot be hydrolysed further. The most important is **glucose** (C₆H₁₂O₆), the primary fuel for cellular respiration. Glucose exists as two forms: **alpha (α)-glucose** and **beta (β)-glucose**, differing only in the orientation of the -OH group on carbon 1. This small structural difference has enormous functional consequences (α → starch/glycogen; β → cellulose).

**Other monosaccharides:** fructose (fruit sugar), galactose (in milk sugar).

## Disaccharides (two sugar units joined by condensation)
A **condensation reaction** joins two monosaccharides with elimination of one water molecule, forming a **glycosidic bond**:

- **Maltose** = glucose + glucose (formed during starch digestion; intermediate product)
- **Sucrose** = glucose + fructose (main transport sugar in plants; table sugar)
- **Lactose** = glucose + galactose (milk sugar; lactase enzyme breaks it down)

Hydrolysis (adding water) breaks the glycosidic bond, regenerating monosaccharides.

## Polysaccharides (many sugar units — polymers)
Long chains of monosaccharides joined by condensation.

| Polysaccharide | Monomer | Bond | Branching | Function |
|--------------|---------|------|-----------|----------|
| **Starch** (amylose) | α-glucose | 1,4 | None (helix) | Energy storage in plants |
| **Starch** (amylopectin) | α-glucose | 1,4 and 1,6 | Yes | Energy storage in plants |
| **Glycogen** | α-glucose | 1,4 and 1,6 | Heavily branched | Energy storage in animals/fungi |
| **Cellulose** | β-glucose | 1,4 | None (straight chains) | Structural — plant cell walls |

> **Why starch/glycogen are good storage molecules:** Insoluble (no osmotic effect), compact, can be quickly hydrolysed to glucose when energy is needed.

> **Why cellulose provides structural strength:** β-glucose chains run in parallel and form hydrogen bonds between chains → microfibrils → enormous tensile strength.

## Food Tests for Carbohydrates

**Benedict's test — reducing sugars** (all monosaccharides + most disaccharides except sucrose):
Add Benedict's reagent (blue) → heat in water bath 5 min. Positive: colour change blue → green → yellow → orange → **brick-red precipitate**. The Cu²⁺ ions are reduced to Cu⁺ (precipitate of Cu₂O).

**Test for non-reducing sugars (e.g. sucrose):**
1. Confirm Benedict's test is negative
2. Add dilute HCl → heat (hydrolyses sucrose to glucose + fructose)
3. Neutralise with sodium hydrogen carbonate solution
4. Repeat Benedict's test → brick-red precipitate confirms non-reducing sugar was present

**Iodine test for starch:**
Add iodine solution (yellow-brown) → positive result: **blue-black colour**. Iodine molecules fit inside the helical coil of amylose, causing the colour change.`,
          groups: [],
          recap: [
            "Describe the chemical test for starch. State the reagent used and the colour change indicating a positive result. [2]",
            "Explain how you would test a food sample for the presence of a non-reducing sugar. Include all steps in order. [4]",
            "Compare the structures of starch and cellulose and explain how their structural differences relate to their different functions. [5]",
            "Explain what happens chemically when two glucose molecules join together to form maltose. Name the type of reaction and the bond formed. [3]"
          ]
        },
        {
          title: "Proteins — Structure, Function and Food Test",
          body: `Proteins contain **carbon, hydrogen, oxygen, nitrogen**, and often **sulfur**. They are built from **amino acids** (monomers), of which there are 20 types in living organisms.

## Amino Acid Structure
Every amino acid has the same backbone:
- A central **carbon atom**
- An **amino group** (-NH₂)
- A **carboxyl group** (-COOH)
- A **hydrogen atom**
- A unique **R-group** (side chain) — this is what differs between the 20 amino acids and gives each its unique chemical properties

## Peptide Bond Formation
Two amino acids join by a **condensation reaction** between the amino group of one and the carboxyl group of the other, releasing water and forming a **peptide bond** (-CO-NH-). The result is a dipeptide. Many amino acids joined = a **polypeptide**.

## Levels of Protein Structure
1. **Primary structure:** The sequence of amino acids in the polypeptide chain (determined by DNA sequence)
2. **Secondary structure:** Local folding into α-helices or β-pleated sheets, held by hydrogen bonds between backbone groups
3. **Tertiary structure:** The overall 3D shape, held by hydrogen bonds, disulfide bonds, ionic bonds, and hydrophobic interactions between R-groups
4. **Quaternary structure:** Multiple polypeptide chains associated together (e.g. haemoglobin = 4 subunits)

The **tertiary structure** determines the protein's function — if this shape is disrupted (denaturation), the protein loses its function.

## Protein Functions

| Function | Example | Why protein is ideal |
|----------|---------|---------------------|
| **Enzymes** | Amylase, pepsin, catalase | Precise 3D active site complementary to substrate |
| **Structural** | Collagen (tendons, skin), keratin (hair, nails) | Long fibrous chains → strong, insoluble |
| **Transport** | Haemoglobin (O₂), albumin (fatty acids) | Specific binding sites |
| **Hormones** | Insulin, glucagon | Specific receptor binding |
| **Antibodies** | Immunoglobulins | Variable regions complementary to specific antigens |
| **Membrane channels/pumps** | Na⁺/K⁺ ATPase | Specific shape allows selective transport |

## Biuret Test for Proteins
Add **sodium hydroxide** solution (alkaline conditions) then a few drops of **copper sulfate** solution.
- **Positive result:** Solution turns **purple/violet** — copper ions coordinate with nitrogen atoms in adjacent peptide bonds
- **Negative result:** Remains blue
- Do NOT heat (unlike Benedict's test)`,
          groups: [],
          recap: [
            "Describe the Biuret test for protein. State the reagents, the procedure, and the positive result. [3]",
            "Explain how the primary structure of a protein determines its tertiary structure and therefore its function. [4]",
            "Name the type of bond formed between amino acids. Describe the chemical reaction by which it forms. [3]",
            "Explain why a protein loses its function when denatured, using the terms tertiary structure and active site. [3]"
          ]
        },
        {
          title: "Lipids — Structure, Function and Food Test",
          body: `Lipids contain **carbon, hydrogen, and oxygen** only, but have a much lower proportion of oxygen than carbohydrates. They are **non-polar** (hydrophobic) — they do not dissolve in water but do dissolve in organic solvents like ethanol.

## Triglyceride Structure
A triglyceride consists of one **glycerol** molecule and **three fatty acid** molecules joined by **ester bonds** (condensation × 3, releasing 3 water molecules).

**Saturated fatty acids:** No C=C double bonds in the hydrocarbon chain. Straight chains pack closely → solid at room temperature (e.g. animal fats, butter). Linked to cardiovascular disease risk.

**Unsaturated fatty acids:** One or more C=C double bonds → kinks in the chain → cannot pack as closely → liquid at room temperature (e.g. vegetable oils, fish oils).

## Functions of Lipids
- **Energy storage:** 37 kJ per gram (carbohydrates = 17 kJ/g) — more than twice as energy-dense. Also yield metabolic water when oxidised.
- **Thermal insulation:** Adipose tissue under skin reduces heat loss
- **Physical protection:** Adipose cushions organs (kidneys, eyes)
- **Cell membrane components:** Phospholipids form the bilayer; cholesterol regulates membrane fluidity
- **Hormones:** Steroid hormones (oestrogen, testosterone, cortisol) are lipid-derived
- **Fat-soluble vitamins:** A, D, E, K are carried dissolved in lipids

## Emulsion (Ethanol) Test for Fats
1. Dissolve sample in **ethanol** (mix thoroughly)
2. Pour the ethanol solution into a tube of **cold water**
3. **Positive result:** Cloudy white **emulsion** forms — fat droplets come out of solution as tiny droplets that scatter light`,
          groups: [],
          recap: [
            "Describe the emulsion test for fats. State the reagents, procedure, and positive result. [3]",
            "Explain why fats provide more energy per gram than carbohydrates. [2]",
            "Compare the structures of saturated and unsaturated fatty acids and explain why this structural difference affects their physical state at room temperature. [4]",
            "State three functions of lipids in the human body, other than energy storage. [3]"
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Enzymes",
      intro: "Enzymes are globular proteins that act as biological catalysts — they accelerate the rate of chemical reactions in living cells without being permanently altered or consumed. Without enzymes, metabolic reactions such as respiration, digestion, photosynthesis, and DNA replication would proceed far too slowly to sustain life at body temperature. Enzymes are highly specific, and their activity is exquisitely sensitive to temperature and pH.",
      subheadings: [
        {
          title: "Enzyme Action — Active Site, Lock-and-Key and Induced Fit",
          body: `## What is an Enzyme?
A biological catalyst: increases reaction rate by lowering the **activation energy** — the minimum energy that colliding molecules must possess for a reaction to occur. By lowering this energy barrier, more molecules have sufficient energy to react at any given temperature, so the reaction proceeds faster.

Enzymes are:
- **Globular proteins** with a precise 3D tertiary structure
- **Specific** — each enzyme acts on one substrate or a narrow group of similar substrates
- **Reusable** — they are not permanently changed by the reaction
- **Sensitive** to temperature and pH (because these affect protein structure)

## The Active Site
The **active site** is a specific region of the enzyme with a precise three-dimensional shape that is **complementary** to the shape of the substrate molecule. The substrate binds to the active site, forming an **enzyme-substrate complex**. After the reaction, the **products** are released, and the enzyme returns to its original state, ready for the next substrate molecule.

## Lock-and-Key Model vs Induced Fit Model

**Lock-and-Key Model (Fischer, 1894):**
The active site is rigid and fixed — it fits the substrate like a key fits a lock. Explains specificity but does not explain how the enzyme actually lowers activation energy.

**Induced Fit Model (Koshland, 1958 — more accurate):**
The active site is *flexible*. When the substrate approaches, the enzyme changes shape slightly to achieve an optimal fit, placing stress on bonds in the substrate and optimising interactions. This better explains how enzymes lower activation energy and why substrate analogues can sometimes fit but not be processed.

> At IGCSE level, you need to know the lock-and-key model. The induced fit model provides a more complete explanation but is usually extension content.

## Enzyme Specificity
Each enzyme is specific to its substrate because:
1. The active site has a precise **three-dimensional shape** determined by the enzyme's amino acid sequence (primary structure) and folding (tertiary structure)
2. Only a substrate with a **complementary shape** can bind and form an effective enzyme-substrate complex
3. Any other molecule with a different shape will not fit, so no reaction occurs

**Examples of enzyme specificity:**
- **Sucrase** acts only on sucrose (not maltose, not lactose)
- **Amylase** acts on starch (α-1,4 glycosidic bonds) but not cellulose (β-1,4 bonds) — tiny structural difference, completely different specificity
- **Pepsin** digests proteins in the acidic stomach — it has no effect on starch or fats`,
          groups: [],
          recap: [
            "Explain what is meant by the active site of an enzyme and explain why each enzyme is specific to one substrate. [4]",
            "Describe the lock-and-key model of enzyme action. State one limitation of this model. [3]",
            "Explain how an enzyme lowers the activation energy of a reaction. [3]",
            "Amylase digests starch but not cellulose, even though both are made of glucose. Explain why. [3]"
          ]
        },
        {
          title: "Effect of Temperature on Enzyme Activity",
          body: `## How Temperature Affects Enzyme Activity

As temperature **increases from 0°C to the optimum:**
- Molecules have more **kinetic energy** → move faster → collide more frequently → more enzyme-substrate complexes form per unit time
- Reaction rate increases
- For many human enzymes, the optimum is ~37–40°C

Above the **optimum temperature:**
- Energy is sufficient to break the **hydrogen bonds and other weak interactions** that maintain the enzyme's tertiary structure
- The enzyme **unfolds** — its active site changes shape
- This is ==denaturation== — an **irreversible** process
- The substrate can no longer fit the distorted active site → reaction rate falls to zero

> **Critical examiner point:** ==Denaturation== is the permanent change in tertiary structure. Do NOT write "the enzyme is killed" (enzymes are not alive) or "the enzyme is destroyed" (peptide bonds in the primary structure remain intact — only the 3D folding is lost). Always state that the **active site changes shape** and the **substrate can no longer bind**.

## Graphing Enzyme Activity vs Temperature

:::svg[Enzyme Activity vs Temperature Graph]
<svg viewBox="0 0 420 220" width="420" height="220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="420" height="220" fill="#f8fafc" rx="12"/>
  <text x="210" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Enzyme Activity vs Temperature</text>
  <!-- Axes -->
  <line x1="50" y1="180" x2="390" y2="180" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="180" stroke="#334155" stroke-width="2"/>
  <!-- Axis labels -->
  <text x="220" y="198" text-anchor="middle" font-size="10" fill="#475569">Temperature (°C) →</text>
  <text x="15" y="105" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,15,105)">Rate of reaction →</text>
  <!-- Temperature markers -->
  <text x="90" y="192" text-anchor="middle" font-size="9" fill="#64748b">10</text>
  <text x="160" y="192" text-anchor="middle" font-size="9" fill="#64748b">20</text>
  <text x="220" y="192" text-anchor="middle" font-size="9" fill="#64748b">37</text>
  <text x="270" y="192" text-anchor="middle" font-size="9" fill="#64748b">50</text>
  <text x="330" y="192" text-anchor="middle" font-size="9" fill="#64748b">70</text>
  <!-- Curve: rises, peaks at 37°C (~220px), falls steeply -->
  <path d="M55,175 Q90,165 130,140 Q165,110 220,50 Q255,30 270,50 Q295,90 330,160 Q355,175 390,178"
    stroke="#16a34a" stroke-width="3" fill="none"/>
  <!-- Optimum marker -->
  <line x1="220" y1="50" x2="220" y2="180" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="222" y="48" font-size="9.5" fill="#dc2626" font-weight="700">Optimum</text>
  <text x="222" y="60" font-size="9" fill="#dc2626">~37°C</text>
  <!-- Annotations -->
  <text x="130" y="130" font-size="8.5" fill="#15803d">Rate increases:</text>
  <text x="130" y="142" font-size="8.5" fill="#15803d">more KE, more</text>
  <text x="130" y="154" font-size="8.5" fill="#15803d">collisions</text>
  <text x="295" y="110" font-size="8.5" fill="#dc2626">Rate falls:</text>
  <text x="295" y="122" font-size="8.5" fill="#dc2626">denaturation</text>
  <text x="295" y="134" font-size="8.5" fill="#dc2626">active site</text>
  <text x="295" y="146" font-size="8.5" fill="#dc2626">changes shape</text>
</svg>
:::`,
          groups: [],
          recap: [
            "Explain why increasing temperature from 10°C to 37°C increases the rate of an enzyme-catalysed reaction. [3]",
            "Explain why raising the temperature above 40°C causes the rate of an enzyme-catalysed reaction to decrease. Use the terms denaturation and active site. [4]",
            "Sketch and annotate a graph showing enzyme activity against temperature for a human enzyme. [4]",
            "Explain what is meant by denaturation. Explain why denaturation is irreversible. [4]"
          ]
        },
        {
          title: "Effect of pH on Enzyme Activity",
          body: `## How pH Affects Enzyme Activity

pH affects enzyme activity by altering the **ionic charges on amino acid R-groups** in and around the active site. Hydrogen ions (H⁺) and hydroxide ions (OH⁻) interact with these charges, changing the shape of the active site.

Each enzyme has an **optimum pH** — the pH at which its active site has the optimal charge distribution for maximum substrate binding and catalysis.

**At the optimum pH:** Maximum activity — the active site shape is optimal.

**Deviations from the optimum:** Activity decreases as the active site distorts.

**Extreme pH values:** Denaturation — the tertiary structure is permanently disrupted.

## Examples of Enzyme Optimum pH

| Enzyme | Location | Optimum pH | Reason |
|--------|---------|-----------|--------|
| **Pepsin** | Stomach | ~2 (strongly acidic) | Stomach secretes HCl → pH ~2; pepsin evolved to function here |
| **Salivary amylase** | Mouth | ~7 (neutral) | Saliva is approximately neutral |
| **Trypsin** | Small intestine | ~8 (slightly alkaline) | Pancreatic juice is alkaline (neutralises stomach acid) |
| **Catalase** | Most body cells | ~7 (neutral) | Intracellular environment is approximately neutral |

:::svg[Enzyme Activity vs pH — Different Enzymes]
<svg viewBox="0 0 420 200" width="420" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="420" height="200" fill="#f8fafc" rx="12"/>
  <text x="210" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Enzyme Activity vs pH for Three Enzymes</text>
  <line x1="50" y1="165" x2="390" y2="165" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="25" x2="50" y2="165" stroke="#334155" stroke-width="2"/>
  <text x="220" y="182" text-anchor="middle" font-size="10" fill="#475569">pH →</text>
  <text x="16" y="97" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,16,97)">Activity →</text>
  <!-- pH markers 1-14 -->
  <text x="70" y="175" text-anchor="middle" font-size="8" fill="#64748b">1</text>
  <text x="120" y="175" text-anchor="middle" font-size="8" fill="#64748b">3</text>
  <text x="170" y="175" text-anchor="middle" font-size="8" fill="#64748b">5</text>
  <text x="220" y="175" text-anchor="middle" font-size="8" fill="#64748b">7</text>
  <text x="270" y="175" text-anchor="middle" font-size="8" fill="#64748b">9</text>
  <text x="320" y="175" text-anchor="middle" font-size="8" fill="#64748b">11</text>
  <text x="370" y="175" text-anchor="middle" font-size="8" fill="#64748b">13</text>
  <!-- Pepsin curve (peaks at pH 2) -->
  <path d="M55,162 Q70,130 80,50 Q90,30 95,28 Q105,35 115,80 Q125,130 145,162"
    stroke="#dc2626" stroke-width="2.5" fill="none"/>
  <text x="95" y="24" text-anchor="middle" font-size="8.5" fill="#dc2626" font-weight="600">Pepsin (opt. pH 2)</text>
  <!-- Amylase curve (peaks at pH 7) -->
  <path d="M140,162 Q175,140 200,80 Q220,40 230,35 Q245,42 265,80 Q290,140 315,162"
    stroke="#2563eb" stroke-width="2.5" fill="none"/>
  <text x="230" y="30" text-anchor="middle" font-size="8.5" fill="#2563eb" font-weight="600">Amylase (opt. pH 7)</text>
  <!-- Trypsin curve (peaks at pH 8) -->
  <path d="M200,162 Q235,140 255,90 Q265,50 275,42 Q285,50 295,90 Q310,135 340,162"
    stroke="#16a34a" stroke-width="2.5" fill="none"/>
  <text x="310" y="55" text-anchor="start" font-size="8.5" fill="#15803d" font-weight="600">Trypsin (opt. pH 8)</text>
</svg>
:::`,
          groups: [],
          recap: [
            "Explain why pepsin works optimally at pH 2 but trypsin works optimally at pH 8. [4]",
            "Explain, using the concept of enzyme structure, why extreme pH values denature enzymes. [4]",
            "Draw and annotate a graph showing how the rate of reaction of an enzyme varies with pH. [4]",
            "A student adds pepsin to a protein solution at pH 8. Predict the result and explain your prediction. [3]"
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Plant Nutrition",
      intro: "Plants are autotrophs — they manufacture all the organic molecules they need from inorganic raw materials (CO₂, water, mineral ions) using sunlight. This process, photosynthesis, produces glucose that is used for respiration, growth, and storage. Understanding the two stages of photosynthesis, the role of mineral ions, and the factors that limit the rate of photosynthesis allows us to explain both natural plant growth and how farmers and horticulturalists maximise crop yields.",
      subheadings: [
        {
          title: "Photosynthesis — Equation, Requirements and Stages",
          body: `## The Overall Equation

$$6CO_2 + 6H_2O \\xrightarrow{\\text{light energy, chlorophyll}} C_6H_{12}O_6 + 6O_2$$

Word equation: carbon dioxide + water → glucose + oxygen (in the presence of light energy and chlorophyll)

## Two Stages of Photosynthesis

### Stage 1: Light-Dependent Reactions (in thylakoid membranes)
- Chlorophyll absorbs light energy
- **Photolysis of water:** Light energy splits water molecules: $2H_2O → 4H^+ + 4e^- + O_2$ — oxygen is released as a by-product
- ATP is produced using the light energy
- Reduced NADP (hydrogen carrier) is produced from H⁺ ions
- Products: **ATP, reduced NADP, O₂** (released)

### Stage 2: Light-Independent Reactions — Calvin Cycle (in stroma)
- CO₂ is fixed (combined with a 5-carbon acceptor molecule, RuBP)
- ATP and reduced NADP from Stage 1 drive the reactions
- Glucose (and other organic molecules) are produced
- RuBP is regenerated for the next cycle
- Products: **Glucose** (and other organic molecules)

:::svg[Two Stages of Photosynthesis in the Chloroplast]
<svg viewBox="0 0 480 220" width="480" height="220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="480" height="220" fill="#f8fafc" rx="12"/>
  <text x="240" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Photosynthesis — Two Stages in the Chloroplast</text>
  <!-- Chloroplast outline -->
  <ellipse cx="240" cy="120" rx="220" ry="90" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="240" y="205" text-anchor="middle" font-size="9" fill="#15803d">Chloroplast</text>
  <!-- Thylakoid (left side) -->
  <rect x="50" y="70" width="160" height="100" rx="12" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
  <text x="130" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="#15803d">THYLAKOID</text>
  <text x="130" y="105" text-anchor="middle" font-size="8.5" fill="#166534">Light-Dependent</text>
  <text x="130" y="116" text-anchor="middle" font-size="8.5" fill="#166534">Reactions</text>
  <!-- Inputs thylakoid -->
  <text x="55" y="145" font-size="8.5" fill="#0369a1">Light energy</text>
  <text x="55" y="157" font-size="8.5" fill="#0369a1">H₂O (photolysis)</text>
  <!-- Outputs thylakoid -->
  <text x="55" y="170" font-size="8.5" fill="#dc2626">→ O₂ (released)</text>
  <text x="55" y="182" font-size="8.5" fill="#7c3aed">→ ATP + Reduced NADP</text>
  <!-- Arrow to stroma -->
  <path d="M210 120 L270 120" stroke="#7c3aed" stroke-width="2.5" fill="none"/>
  <polygon points="270,116 282,120 270,124" fill="#7c3aed"/>
  <text x="243" y="114" text-anchor="middle" font-size="8" fill="#7c3aed">ATP</text>
  <text x="243" y="125" text-anchor="middle" font-size="8" fill="#7c3aed">Red.NADP</text>
  <!-- CO2 arrow -->
  <path d="M295 60 L310 80" stroke="#1d4ed8" stroke-width="1.5" fill="none"/>
  <polygon points="310,80 306,68 318,72" fill="#1d4ed8"/>
  <text x="295" y="57" font-size="8.5" fill="#1d4ed8">CO₂ (fixed)</text>
  <!-- Stroma (right side) -->
  <rect x="280" y="70" width="160" height="100" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="360" y="92" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">STROMA</text>
  <text x="360" y="105" text-anchor="middle" font-size="8.5" fill="#1e40af">Calvin Cycle</text>
  <text x="360" y="116" text-anchor="middle" font-size="8.5" fill="#1e40af">(Light-Independent)</text>
  <text x="360" y="140" font-size="8.5" fill="#15803d">→ Glucose produced</text>
  <text x="360" y="152" font-size="8.5" fill="#15803d">→ RuBP regenerated</text>
</svg>
:::

## Investigating the Requirements for Photosynthesis

**To show light is needed:** Destarch plant (24h dark), cover part of leaf with foil, expose to light, test with iodine. Only uncovered areas turn blue-black.

**To show chlorophyll is needed:** Use a variegated leaf (green and white patches). After light exposure, iodine test shows only green areas contain starch.

**To show CO₂ is needed:** Place destached plant in sealed container with NaOH (absorbs CO₂). Even in bright light, no starch forms.`,
          groups: [],
          recap: [
            "Write the balanced symbol equation for photosynthesis. [2]",
            "State where in the chloroplast each stage of photosynthesis occurs and the main products of each stage. [4]",
            "Describe an experiment to show that light is required for photosynthesis. Include the technique used to test for the product. [5]",
            "Explain why the oxygen produced in photosynthesis comes from water, not from carbon dioxide. [2]"
          ]
        },
        {
          title: "Limiting Factors of Photosynthesis",
          body: `A **limiting factor** is the factor present at the lowest favourable level that prevents the rate of a process from increasing even when other conditions are optimised.

## The Three Main Limiting Factors

### 1. Light Intensity
At low light intensity, there is insufficient energy to drive the light-dependent reactions at maximum rate → rate is low. As light intensity increases, rate increases proportionally. Above a certain light intensity, another factor (CO₂ or temperature) becomes limiting — rate plateaus.

### 2. CO₂ Concentration
CO₂ is the raw material for the Calvin cycle. Low CO₂ → fewer substrate molecules for RuBisCO enzyme → slower rate. Increasing CO₂ increases rate until light or temperature becomes limiting.

### 3. Temperature
Temperature affects the **enzymes of the Calvin cycle** (e.g. RuBisCO). Low temperature → enzyme molecules have low kinetic energy → slow Calvin cycle → low rate. Higher temperature speeds the enzymes up to the optimum (~25–35°C for most crop plants). Above the optimum → denaturation → rate drops.

:::svg[Photosynthesis Rate vs Light Intensity — Effect of CO₂ and Temperature]
<svg viewBox="0 0 450 210" width="450" height="210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="450" height="210" fill="#f8fafc" rx="12"/>
  <text x="225" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Rate of Photosynthesis vs Light Intensity</text>
  <line x1="50" y1="170" x2="430" y2="170" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="170" stroke="#334155" stroke-width="2"/>
  <text x="240" y="187" text-anchor="middle" font-size="10" fill="#475569">Light intensity →</text>
  <text x="15" y="98" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,15,98)">Rate of photosynthesis →</text>
  <!-- Curve 1: Low CO2 -->
  <path d="M55,168 Q120,140 180,110 Q220,95 250,93 Q310,91 420,90" stroke="#94a3b8" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
  <text x="330" y="86" font-size="8.5" fill="#64748b">Low CO₂ — plateaus early</text>
  <!-- Curve 2: High CO2, low temp -->
  <path d="M55,168 Q120,125 190,80 Q240,55 280,50 Q340,48 420,47" stroke="#2563eb" stroke-width="2.5" fill="none"/>
  <text x="350" y="43" font-size="8.5" fill="#1d4ed8">Higher CO₂ (low T)</text>
  <!-- Curve 3: High CO2, high temp -->
  <path d="M55,168 Q120,115 200,60 Q250,35 300,28 Q360,25 420,24" stroke="#16a34a" stroke-width="2.5" fill="none"/>
  <text x="350" y="20" font-size="8.5" fill="#15803d">Higher CO₂, higher T</text>
  <!-- Compensation point marker -->
  <line x1="75" y1="170" x2="75" y2="20" stroke="#f97316" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="77" y="165" font-size="8" fill="#ea580c">Comp.</text>
  <text x="77" y="175" font-size="8" fill="#ea580c">point</text>
</svg>
:::

## Commercial Applications
Greenhouse growers manipulate all three factors:
- **CO₂ enrichment:** Burn natural gas inside greenhouse → releases CO₂ → increases rate
- **Supplemental LED lighting:** Extends the photoperiod beyond daylight hours
- **Temperature control:** Heating systems maintain optimal temperature (~25°C)
- **Result:** Year-round maximum crop yield`,
          groups: [],
          recap: [
            "Define the term limiting factor in the context of photosynthesis. [2]",
            "A grower increases the CO₂ concentration in a greenhouse but finds no increase in photosynthesis rate. Suggest two reasons why. [2]",
            "Explain why the rate of photosynthesis levels off (plateaus) on a rate vs light intensity graph. [3]",
            "A grower adds a kerosene heater to a greenhouse. Explain two reasons why this increases the rate of photosynthesis. [2]"
          ]
        },
        {
          title: "Mineral Ion Requirements of Plants",
          body: `Plants absorb inorganic mineral ions from the soil through root hair cells by **active transport**. Different ions are needed for specific purposes:

| Mineral ion | Role | Deficiency symptom |
|------------|------|-------------------|
| **Nitrate (NO₃⁻)** | Source of nitrogen for making amino acids, proteins, and nucleic acids | Stunted growth; yellowing of older leaves (chlorosis) |
| **Magnesium (Mg²⁺)** | Central atom of chlorophyll molecule | Yellowing of leaves (chlorosis) — cannot make chlorophyll |
| **Phosphate (PO₄³⁻)** | Component of ATP, DNA, RNA, and phospholipids | Poor root development; purple-tinged leaves |
| **Potassium (K⁺)** | Helps enzyme function; involved in stomatal opening | Yellow/brown leaf edges |

> **Exam note:** Nitrogen deficiency and magnesium deficiency both cause yellowing (chlorosis), but for different reasons: N deficiency → cannot make amino acids → cannot make chlorophyll protein; Mg deficiency → cannot make the chlorophyll molecule itself (Mg is the central metal ion of the porphyrin ring in chlorophyll).`,
          groups: [],
          recap: [
            "Explain why plants need nitrate ions from the soil. [2]",
            "A farmer notices yellowing of leaves in a crop. Suggest two mineral ion deficiencies that could cause this and explain the reason for yellowing in each case. [4]",
            "Explain why plants absorb mineral ions by active transport rather than diffusion. [2]"
          ]
        }
      ]
    },
    {
      number: 7,
      title: "Human Nutrition",
      intro: "Humans are heterotrophs — we obtain energy and raw materials by ingesting, digesting, absorbing, and assimilating food. The alimentary canal (gut) processes food from mouth to anus, breaking down large insoluble molecules into small soluble ones that can be absorbed into the blood. Understanding each component of a balanced diet, the role of each digestive enzyme, and how the small intestine is adapted for absorption is central to IGCSE Biology.",
      subheadings: [
        {
          title: "Components of a Balanced Diet",
          body: `A balanced diet contains all the necessary nutrients in the correct proportions for the individual's age, sex, and level of activity. The main nutrient groups are:

| Nutrient | Main function | Source | Deficiency disease |
|---------|--------------|--------|-------------------|
| **Carbohydrates** | Primary energy source (17 kJ/g) | Bread, rice, pasta, potatoes | Rare in developed countries; energy deficiency |
| **Proteins** | Growth, repair, enzymes, antibodies, hormones | Meat, fish, eggs, legumes | Kwashiorkor (protein deficiency); marasmus (energy + protein) |
| **Lipids (fats/oils)** | Energy storage (37 kJ/g), insulation, cell membranes, fat-soluble vitamins | Butter, oils, nuts, fatty fish | Rare in isolation |
| **Vitamin C** | Synthesis of collagen (connective tissue protein) | Citrus fruit, vegetables | Scurvy (bleeding gums, poor wound healing) |
| **Vitamin D** | Absorption of calcium from gut; bone mineralisation | Sunlight synthesis, oily fish, fortified foods | Rickets (children — soft bones), osteomalacia (adults) |
| **Iron** | Component of haemoglobin (O₂ transport) | Red meat, spinach, lentils | Anaemia (insufficient haemoglobin → fatigue, pallor) |
| **Calcium** | Bone and tooth formation; muscle contraction; nerve impulse | Dairy, leafy greens | Rickets, osteoporosis |
| **Water** | Solvent, transport, temperature regulation, reactant | Drinks, fruit, vegetables | Dehydration |
| **Dietary fibre** | Stimulates peristalsis; prevents constipation | Vegetables, whole grains | Constipation, diverticular disease, ↑ bowel cancer risk |

> **Key distinction:** Vitamins and minerals are needed in tiny amounts (micronutrients) but their absence causes specific deficiency diseases. Carbohydrates, fats, and proteins are needed in large amounts (macronutrients) for energy and raw materials.`,
          groups: [],
          recap: [
            "State the role of vitamin C in the body. Describe the symptoms of vitamin C deficiency. [3]",
            "Explain why iron is an essential component of the diet. Describe the condition that results from iron deficiency. [3]",
            "Explain why dietary fibre is important even though it cannot be digested. [2]",
            "Compare the energy content per gram of carbohydrates and lipids. Explain the advantage of storing energy as fat rather than glycogen. [3]"
          ]
        },
        {
          title: "Digestion — Mechanical and Chemical",
          body: `Digestion prepares food for absorption by breaking large, insoluble molecules into small, soluble ones. Two types occur simultaneously:

- **Mechanical (physical) digestion:** Breaks food into smaller pieces → increases surface area for enzymes. Occurs in mouth (chewing/mastication) and stomach (churning by muscular wall).
- **Chemical digestion:** Enzymes hydrolyse large molecules into their monomers.

## Digestion by Region

### Mouth
- **Mechanical:** Teeth cut and grind food into a bolus; tongue mixes it with saliva
- **Salivary amylase** (in saliva): Starch → maltose (partial digestion; begins in the mouth)
- **Mucus** in saliva: Lubricates bolus for swallowing
- **pH ~7** — optimum for salivary amylase

### Oesophagus
- **Peristalsis:** Wave-like muscular contractions (circular muscle contracts behind bolus; longitudinal muscle contracts ahead) propel food to the stomach
- No digestive enzymes here

### Stomach
- **Mechanical:** Muscular walls churn food into **chyme**
- **Gastric glands** secrete:
  - **HCl** (hydrochloric acid) → pH ~1–2 → denatures dietary proteins → kills most ingested bacteria → activates pepsinogen → optimum pH for pepsin
  - **Pepsin** (protease): Proteins → polypeptides. Secreted as inactive **pepsinogen** (activated by HCl) — this prevents the stomach from digesting itself
  - **Mucus** → protects stomach wall from acid and pepsin

### Small Intestine (Duodenum → Ileum)
The pancreas secretes **pancreatic juice** into the duodenum via the pancreatic duct:
- **Pancreatic amylase:** Starch → maltose
- **Lipase:** Triglycerides → fatty acids + glycerol
- **Trypsin** (endopeptidase): Polypeptides → shorter peptides
- **Chymotrypsin:** Further protein digestion
- **Pancreatic juice is alkaline (pH ~8):** Neutralises acid chyme from stomach → optimum for pancreatic enzymes

**Bile** (produced by liver, stored in gallbladder, secreted into duodenum):
- **Bile salts emulsify fats:** Break large fat droplets into tiny droplets → increases surface area for lipase enormously
- Bile is alkaline → helps neutralise stomach acid
- Bile contains bile pigments (bilirubin from broken-down haemoglobin) — gives faeces their brown colour

**Brush border enzymes** on the surface of ileum epithelial cells complete digestion:
- **Maltase:** Maltose → 2 glucose
- **Sucrase:** Sucrose → glucose + fructose
- **Lactase:** Lactose → glucose + galactose
- **Peptidases:** Peptides → amino acids

### Large Intestine (Colon → Rectum)
- Absorbs water from undigested material (makes it more solid)
- Absorbs vitamins produced by gut bacteria (e.g. vitamin K, some B vitamins)
- Compacts material into faeces for egestion`,
          groups: [],
          recap: [
            "Describe the role of bile in fat digestion. Explain why emulsification is important. [3]",
            "Explain why the stomach secretes pepsinogen rather than pepsin directly. [2]",
            "State the products of complete digestion of (a) starch, (b) proteins, (c) fats. [3]",
            "A patient has their gallbladder removed. Explain why they might have difficulty digesting fatty meals. [3]",
            "Explain why the pH of duodenal contents is higher than the pH of stomach contents, and why this matters. [3]"
          ]
        },
        {
          title: "Absorption in the Small Intestine",
          body: `The **ileum** (final section of small intestine, ~6 m long) is the main site of absorption. It is exquisitely adapted to maximise absorption surface area and efficiency.

## Adaptations of the Ileum

| Structural feature | How it aids absorption |
|-------------------|----------------------|
| **Villi** (finger-like folds of mucosa) | Increase surface area ~10-fold compared to a flat tube |
| **Microvilli** (brush border on each epithelial cell) | Each cell has ~3,000 microvilli → increase surface area ~20-fold further |
| **Total SA ≈ 300 m²** | Enormous surface area for absorption |
| **Rich blood capillary network inside each villus** | Carries absorbed glucose and amino acids directly to hepatic portal vein → liver |
| **Lacteal (lymph vessel) inside each villus** | Carries absorbed fatty acids and glycerol (resynthesised to triglycerides → chylomicrons) in lymph |
| **One-cell thick epithelium** | Short diffusion distance |
| **Long length (~6 m)** | Long contact time with digested food |

## What Gets Absorbed Where

| Nutrient | Mechanism | Destination |
|---------|-----------|-------------|
| Glucose | Active transport + facilitated diffusion | Blood capillaries → hepatic portal vein |
| Amino acids | Active transport | Blood capillaries → hepatic portal vein |
| Fatty acids + glycerol | Diffusion (reassembled → triglycerides → chylomicrons) | Lacteals → lymph → bloodstream |
| Water | Osmosis | Blood capillaries |
| Minerals, vitamins | Active transport or diffusion | Blood capillaries |`,
          groups: [],
          recap: [
            "Explain how the structure of the ileum is adapted for efficient absorption of digested food. Include five structural features. [5]",
            "Explain why the products of fat digestion enter the lacteals rather than the blood capillaries. [3]",
            "Compare the mechanism by which glucose and fatty acids are absorbed in the small intestine. [4]"
          ]
        }
      ]
    },
    {
      number: 8,
      title: "Transport in Plants",
      intro: "Plants need to transport water and mineral ions from roots to leaves (upward through xylem) and organic solutes — mainly sucrose — between sources and sinks in all directions (through phloem). The structure of xylem and phloem is precisely adapted to these functions. Understanding the transpiration stream and the pressure-flow model of translocation explains how plants distribute resources efficiently throughout their bodies.",
      subheadings: [
        {
          title: "Xylem — Structure and the Transpiration Stream",
          body: `**Xylem** transports water and dissolved mineral ions upward from roots to all parts of the plant.

## Structure of Xylem Vessels
Xylem vessels are formed by a series of cells that:
1. Develop thick, lignified walls (lignin = waterproof polymer)
2. Die and lose their cell contents
3. Their end walls break down → forming a continuous hollow tube

The lignin provides:
- **Structural support** (prevents xylem from collapsing under tension)
- **Waterproofing** (prevents water leaking out through walls)

## The Transpiration Stream
Water moves from roots through xylem to leaves by the **cohesion-tension mechanism**:

1. **Evaporation** from mesophyll cells into air spaces and out through stomata (transpiration) removes water from top of xylem column
2. **Tension** is created — the water column is pulled upward (like a column being pulled by a rope)
3. **Cohesion** — water molecules stick together by hydrogen bonds, so the entire column moves as one
4. **Adhesion** — water sticks to xylem walls, helping support the column
5. At the root: water enters root hair cells by **osmosis** (soil water has higher water potential than root cell contents) → moves across cortex to xylem

## Transpiration
**Definition:** The loss of water vapour from the aerial parts of a plant, mainly through stomata.

**Factors that increase transpiration rate:**
- Higher temperature (more evaporation)
- Lower humidity (steeper water vapour concentration gradient)
- Higher wind speed (removes humid air from leaf surface)
- More light (stomata open wider)

## Measuring Transpiration — The Potometer
A **potometer** measures the rate of water uptake (which approximates transpiration rate). An air bubble in a capillary tube moves as the plant draws water in. The speed of bubble movement indicates transpiration rate.`,
          groups: [],
          recap: [
            "Explain the cohesion-tension mechanism by which water moves from roots to leaves. [5]",
            "State two structural features of xylem vessels and explain how each is related to its function. [4]",
            "Explain why transpiration rate increases on a hot, dry, windy day. [4]",
            "Describe how a potometer can be used to compare transpiration rates under different conditions. [4]"
          ]
        },
        {
          title: "Phloem — Structure and Translocation",
          body: `**Phloem** transports dissolved organic solutes — mainly sucrose — throughout the plant. Unlike xylem, phloem consists of **living cells** and can transport in **both directions** (up and down).

## Structure of Phloem
- **Sieve tube elements:** Long cells with **sieve plates** (perforated end walls) allowing solutes to pass. Have very little cytoplasm (allows mass flow through lumen).
- **Companion cells:** Closely associated with sieve tubes via plasmodesmata. Carry out metabolic functions (including active loading) that the sieve tubes cannot — sieve tubes have no nucleus.

## Translocation — Pressure-Flow Model
**Translocation** is the movement of sucrose and other organic solutes through phloem.

**Source:** Where sucrose is produced or released into phloem (e.g. photosynthesising leaf; germinating seed mobilising stored starch)

**Sink:** Where sucrose is used or stored (e.g. growing shoot tips, fruits, roots, storage organs)

**Mechanism:**
1. At the **source**, companion cells actively load sucrose into sieve tubes (requires ATP → active transport)
2. This lowers the water potential in the sieve tube → water enters by osmosis from xylem → increases hydrostatic pressure
3. At the **sink**, sucrose is unloaded (used or stored) → water potential rises → water leaves → pressure falls
4. The pressure difference drives mass flow of sap from source to sink

**Evidence that translocation requires energy:** Metabolic inhibitors (e.g. cyanide, which blocks respiration) stop translocation but do not stop transpiration — confirming that translocation (but not transpiration) requires ATP.

| Feature | Xylem | Phloem |
|---------|-------|--------|
| Cell type | Dead, empty tubes | Living sieve tubes + companion cells |
| Cell walls | Heavily lignified | Thin, not lignified |
| Direction | Upward only (roots → leaves) | Both directions (source → sink) |
| Substance | Water + mineral ions | Sucrose, amino acids, other organic molecules |
| Energy needed? | No (passive — transpiration drives it) | Yes (active loading at source) |`,
          groups: [],
          recap: [
            "Explain the pressure-flow model of translocation. [5]",
            "Explain the terms source and sink in the context of translocation. Give one example of each. [3]",
            "Compare the structure and function of xylem and phloem in a table. [5]",
            "Explain why translocation stops when a metabolic inhibitor is applied to the phloem, but water transport in xylem continues. [3]"
          ]
        }
      ]
    },
    {
      number: 9,
      title: "Transport in Animals",
      intro: "Large multicellular animals cannot rely on diffusion alone to supply oxygen and nutrients to deep tissues — the distances are too great. A mass-flow transport system (the circulatory system) solves this by pumping blood rapidly through a network of vessels. The human double circulatory system separates oxygenated and deoxygenated blood, maintaining efficient pressure in both circuits. Blood is a complex tissue containing red cells, white cells, platelets, and plasma, each with specific transport and defence roles.",
      subheadings: [
        {
          title: "The Human Circulatory System — Double Circulation",
          body: `Humans have a **double circulatory system**: blood passes through the heart **twice** for each complete circuit of the body.

:::svg[Human Double Circulatory System]
<svg viewBox="0 0 460 260" width="460" height="260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="460" height="260" fill="#f8fafc" rx="12"/>
  <text x="230" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Human Double Circulatory System</text>
  <!-- Lungs -->
  <rect x="155" y="28" width="150" height="50" rx="10" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="230" y="52" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">LUNGS</text>
  <text x="230" y="65" text-anchor="middle" font-size="9" fill="#1e40af">O₂ absorbed, CO₂ released</text>
  <!-- Heart (centre) -->
  <rect x="175" y="105" width="110" height="80" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2.5"/>
  <text x="230" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">HEART</text>
  <line x1="230" y1="105" x2="230" y2="185" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="193" y="155" text-anchor="middle" font-size="8.5" fill="#dc2626">Right</text>
  <text x="267" y="155" text-anchor="middle" font-size="8.5" fill="#dc2626">Left</text>
  <text x="193" y="167" text-anchor="middle" font-size="8" fill="#64748b">de-O₂</text>
  <text x="267" y="167" text-anchor="middle" font-size="8" fill="#64748b">O₂</text>
  <!-- Body organs -->
  <rect x="155" y="205" width="150" height="45" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
  <text x="230" y="228" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">BODY ORGANS</text>
  <text x="230" y="241" text-anchor="middle" font-size="9" fill="#065f46">O₂ delivered, CO₂ collected</text>
  <!-- Pulmonary circuit arrows (left side) -->
  <path d="M175 145 Q80 145 80 53 Q80 28 155 28" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <polygon points="155,24 165,28 155,32" fill="#94a3b8"/>
  <text x="65" y="90" text-anchor="middle" font-size="8.5" fill="#64748b" transform="rotate(-90,65,90)">Pulmonary artery (de-O₂)</text>
  <path d="M305 28 Q380 28 380 145 Q380 185 285 185" stroke="#3b82f6" stroke-width="2" fill="none"/>
  <polygon points="285,181 275,185 285,189" fill="#3b82f6"/>
  <text x="395" y="90" text-anchor="middle" font-size="8.5" fill="#1d4ed8" transform="rotate(90,395,90)">Pulmonary vein (O₂)</text>
  <!-- Systemic circuit arrows -->
  <path d="M285 185 Q380 185 380 228 Q380 250 305 250" stroke="#3b82f6" stroke-width="2" fill="none"/>
  <polygon points="305,246 295,250 305,254" fill="#3b82f6"/>
  <path d="M155 250 Q80 250 80 185 Q80 145 175 145" stroke="#94a3b8" stroke-width="2" fill="none"/>
  <polygon points="175,141 185,145 175,149" fill="#94a3b8"/>
  <!-- Labels -->
  <text x="230" y="93" text-anchor="middle" font-size="8.5" fill="#7c3aed">PULMONARY CIRCUIT</text>
  <text x="230" y="196" text-anchor="middle" font-size="8.5" fill="#7c3aed">SYSTEMIC CIRCUIT</text>
</svg>
:::

**Pulmonary circuit:** Right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium (blood becomes oxygenated)

**Systemic circuit:** Left ventricle → aorta → body organs → vena cava → right atrium (blood becomes deoxygenated)

**Why double circulation is advantageous:** After gas exchange in the lungs, oxygenated blood returns to the left side of the heart to be pumped at HIGH pressure to the body. A single circuit would deliver blood to the body at low pressure after passing through lung capillaries.

## The Heart

The heart is a muscular pump with four chambers:
- **Right atrium** — receives deoxygenated blood from vena cava
- **Right ventricle** — pumps deoxygenated blood to lungs (low pressure)
- **Left atrium** — receives oxygenated blood from pulmonary veins
- **Left ventricle** — pumps oxygenated blood to body (HIGH pressure; thickest muscular wall)

**Valves** prevent backflow:
- **Atrioventricular (AV) valves** (bicuspid left; tricuspid right): between atria and ventricles
- **Semilunar valves:** between ventricles and arteries (aorta/pulmonary artery)`,
          groups: [],
          recap: [
            "Explain why the left ventricle has a thicker muscular wall than the right ventricle. [2]",
            "Describe the double circulatory system of humans, naming the vessels entering and leaving the heart on each side. [5]",
            "Explain the role of valves in the heart. [3]",
            "State one advantage of a double circulatory system over a single circulatory system. [2]"
          ]
        },
        {
          title: "Blood Vessels — Arteries, Veins and Capillaries",
          body: `Three types of blood vessel are adapted to their specific functions:

| Feature | Artery | Vein | Capillary |
|---------|--------|------|-----------|
| **Function** | Carry blood AWAY from heart | Carry blood TOWARD heart | Exchange of substances with tissues |
| **Pressure** | High | Low | Very low |
| **Wall thickness** | Thick (withstands pressure) | Thin | One cell thick |
| **Muscle/elastic tissue** | Abundant (both layers) | Little | None |
| **Lumen size** | Narrow relative to wall | Wide relative to wall | Very narrow (one RBC at a time) |
| **Valves** | None | Yes (prevent backflow) | None |
| **Blood flow** | Pulsatile (spurts) | Smooth, continuous | Slow (maximises exchange time) |

> Arteries carry blood **away** from the heart. Memory: **A**rtery = **A**way.

## Capillaries and Exchange
Capillaries are the site of exchange between blood and tissue fluid. Their adaptations:
- **Wall is one cell thick** → very short diffusion distance
- **Very narrow lumen** → RBCs must squeeze through → slows flow → more time for exchange
- **Enormous number** → total SA of capillaries = ~500 m² in humans
- **Plasma** leaks out through capillary walls under pressure → becomes **tissue fluid** that bathes cells

## Blood Composition

| Component | Structure | Function |
|----------|-----------|----------|
| **Plasma** (55% of blood) | Pale yellow liquid, mostly water | Transport: glucose, amino acids, CO₂, hormones, urea, proteins |
| **Red blood cells** | Biconcave, no nucleus, contain haemoglobin | Carry O₂ as oxyhaemoglobin |
| **White blood cells** | Nucleated; two main types | Phagocytes (engulf pathogens); lymphocytes (produce antibodies) |
| **Platelets** | Cell fragments, no nucleus | Blood clotting (together with fibrinogen → fibrin) |`,
          groups: [],
          recap: [
            "Compare the structure of an artery and a vein and explain how each structure is adapted to its function. [6]",
            "Explain how capillaries are adapted for the exchange of substances with tissues. [4]",
            "State the four main components of blood and give the function of each. [4]",
            "Explain why veins have valves but arteries do not. [2]"
          ]
        }
      ]
    },
    {
      number: 10,
      title: "Diseases and Immunity",
      intro: "Pathogens — disease-causing microorganisms — constantly threaten the body's homeostasis. The body defends itself through a multilayered immune system: physical and chemical barriers prevent entry; phagocytosis destroys invading pathogens; and the specific immune response — involving B and T lymphocytes — produces antibodies and immunological memory. Vaccination exploits immunological memory to provide protection before exposure to a dangerous pathogen.",
      subheadings: [
        {
          title: "Pathogens and Disease Transmission",
          body: `A **pathogen** is a microorganism (or other agent) that causes disease. Pathogens include bacteria, viruses, fungi, and protoctists. They cause disease by:
- **Producing toxins** that damage tissues or disrupt body processes (e.g. *Clostridium botulinum* produces botulinum toxin; *Vibrio cholerae* produces a toxin causing severe diarrhoea)
- **Directly damaging/destroying cells** (e.g. malaria parasite destroys red blood cells; HIV destroys T-helper lymphocytes)

## Common Pathogens and Their Transmission

| Disease | Pathogen type | Transmission route | Preventive measure |
|---------|-------------|-------------------|-------------------|
| **Cholera** | Bacterium (*V. cholerae*) | Contaminated water/food | Clean water supply, sanitation |
| **Malaria** | Protoctist (*Plasmodium*) | Vector (female *Anopheles* mosquito bite) | Mosquito nets, insecticides, antimalarial drugs |
| **Tuberculosis (TB)** | Bacterium (*Mycobacterium*) | Airborne droplets (coughing) | BCG vaccine, antibiotic treatment |
| **HIV/AIDS** | Virus (HIV) | Unprotected sex, shared needles, blood contact | Condoms, sterile needles, antiretroviral drugs |
| **Influenza** | Virus | Airborne droplets | Annual vaccination (antigen changes yearly) |

## Body Defences — First Line (Non-specific)
- **Skin:** Physical barrier; sebaceous glands secrete acidic sebum (inhibits bacterial growth)
- **Mucus and cilia in airways:** Mucus traps pathogens; cilia sweep mucus up toward pharynx
- **Stomach HCl:** pH ~2 kills most ingested pathogens
- **Tears and saliva:** Contain **lysozyme** — enzyme that digests bacterial cell walls
- **Blood clotting:** Seals wounds to prevent pathogen entry`,
          groups: [],
          recap: [
            "Explain how cholera bacteria cause the symptoms of the disease. [3]",
            "Describe two ways in which the body prevents pathogens from entering. [4]",
            "Explain why a female Anopheles mosquito (not a male) is the vector for malaria. [2]",
            "State two differences between how bacteria and viruses cause disease. [2]"
          ]
        },
        {
          title: "The Specific Immune Response and Vaccination",
          body: `When pathogens breach the first-line defences, the **specific immune response** is activated. It targets specific pathogens by recognising their unique surface molecules (**antigens**).

## Phagocytosis (Non-specific second line)
**Phagocytes** (mainly neutrophils and macrophages) engulf and digest pathogens:
1. Phagocyte detects chemical signals from pathogen/damaged tissue (chemotaxis)
2. Phagocyte engulfs pathogen by **endocytosis** → forming a **phagosome**
3. Lysosomes fuse with phagosome → release digestive enzymes → destroy pathogen
4. Products are digested or expelled

## B and T Lymphocytes — The Specific Response

**B lymphocytes** produce **antibodies** (specific immune response):
1. Antigen from pathogen binds to a specific B cell with complementary receptor
2. B cell is activated (helped by T-helper cells)
3. B cell proliferates → **clonal expansion** → army of identical B cells
4. **Plasma cells** (effector B cells) secrete thousands of antibody molecules per second
5. **Memory B cells** persist long-term — responsible for immunological memory

**T lymphocytes:**
- **T-helper cells (CD4⁺):** Activate B cells and cytotoxic T cells; secrete cytokines
- **Cytotoxic T cells (CD8⁺):** Kill body cells infected with virus (recognise viral antigens on cell surface)
- **T-memory cells:** Long-lived; respond rapidly upon re-exposure

## Antibodies
Antibodies are **Y-shaped glycoproteins** (immunoglobulins) produced by plasma cells. Each antibody has:
- **Constant region** (Fc): Same in all antibodies of the same class; binds to phagocytes
- **Variable region** (Fab): Unique to each antibody; has a binding site complementary to one specific antigen

**How antibodies neutralise pathogens:**
- **Agglutination:** Antibodies crosslink pathogens → clump → easier to phagocytose
- **Neutralisation:** Block pathogen surface proteins → prevent cell entry or toxin activity
- **Opsonisation:** Coat pathogens → make them more recognisable to phagocytes

## Vaccination
A vaccine stimulates the immune system to produce memory cells **without causing disease**.

**How vaccines work:**
1. Antigen (from killed/weakened pathogen, inactivated toxin, or pathogen component) is introduced
2. Small, mild immune response → some antibody production
3. **Memory B and T cells** are produced
4. Upon future exposure to real pathogen: memory cells respond **rapidly and massively** → neutralise pathogen before disease develops

**Types of vaccines:** Live attenuated (MMR, BCG), inactivated/killed (flu injection), subunit/toxoid (hepatitis B, tetanus)

> **Herd immunity:** When a high enough proportion of a population is immune (through vaccination or previous infection), the pathogen cannot spread even to unvaccinated individuals — the chain of transmission is broken.`,
          groups: [],
          recap: [
            "Describe the process of phagocytosis. Include all steps from detection of pathogen to destruction. [5]",
            "Explain how vaccination protects an individual from a specific pathogen. [5]",
            "Explain the role of memory cells in the secondary immune response. [4]",
            "Explain what is meant by herd immunity and explain why it is important for protecting individuals who cannot be vaccinated. [4]"
          ]
        }
      ]
    },
    {
      number: 11,
      title: "Gas Exchange in Humans",
      intro: "Every living cell requires oxygen for aerobic respiration and must remove carbon dioxide, a toxic waste product. In large animals, diffusion alone cannot supply these gases fast enough — a specialised gas exchange surface (the lungs) coupled with a ventilation mechanism and transport system is essential. The human respiratory system delivers air to the alveoli, where gas exchange with blood occurs by diffusion, exploiting an enormous surface area, minimal diffusion distance, and steep concentration gradients.",
      subheadings: [
        {
          title: "The Human Gas Exchange System",
          body: `The pathway of air: **nose/mouth → trachea → bronchi → bronchioles → alveoli**

## Structure and Function of Components

| Structure | Structural features | Function |
|----------|-------------------|----------|
| **Nasal passages** | Hairs, mucus, capillaries | Filter, warm, moisten air |
| **Trachea** | C-shaped cartilage rings, ciliated epithelium, goblet cells | Supported open; mucus traps particles; cilia sweep mucus up |
| **Bronchi** | Same as trachea, but narrower | Conduct air to lungs |
| **Bronchioles** | Smooth muscle (no cartilage) | Can constrict (asthma) or dilate to control airflow |
| **Alveoli** | One-cell thick walls, dense capillaries, ~700 million present | Gas exchange surface |

## Why the Alveoli are Adapted for Gas Exchange
- **Large total surface area** (~70 m²) — many millions of alveoli
- **Very thin walls** (~0.2 μm, one cell layer) — minimises diffusion distance
- **Rich capillary network** — blood continuously carries O₂ away and delivers CO₂, maintaining steep gradients
- **Moist surface** — gases dissolve before crossing membrane
- **Ventilation (breathing)** — constantly refreshes air → keeps concentration gradient steep

## Ventilation (Breathing)

**Inspiration (breathing in):**
1. Diaphragm contracts → flattens (moves down)
2. External intercostal muscles contract → ribs move up and out
3. Volume of thorax increases → pressure falls below atmospheric → air flows in

**Expiration (breathing out):**
1. Diaphragm relaxes → returns to dome shape
2. Internal intercostal muscles (and elastic recoil of lungs) → ribs move down and in
3. Volume decreases → pressure rises above atmospheric → air flows out

> Breathing is driven by pressure differences — air moves from high pressure to low pressure.`,
          groups: [],
          recap: [
            "Explain how the alveolus is adapted for efficient gas exchange by diffusion. [5]",
            "Describe the mechanism of inspiration (breathing in). State the role of the diaphragm and intercostal muscles. [4]",
            "State the differences in composition between inhaled and exhaled air (in terms of O₂, CO₂, water vapour, and nitrogen). [4]",
            "Explain why a person with emphysema (destroyed alveolar walls) cannot exercise as well as a healthy person. [3]"
          ]
        }
      ]
    },
    {
      number: 12,
      title: "Respiration",
      intro: "Respiration is the process by which living cells release energy from organic molecules (primarily glucose) to produce ATP — the universal energy currency. Aerobic respiration (with oxygen) is far more efficient than anaerobic respiration (without oxygen). Understanding both pathways, their equations, and where in the cell they occur is fundamental for explaining energy usage in muscles, fermentation in industry, and the physiological responses to exercise.",
      subheadings: [
        {
          title: "Aerobic Respiration",
          body: `**Definition:** Aerobic respiration is the process by which glucose is completely oxidised to CO₂ and water using oxygen, releasing a large amount of energy as ATP.

**Overall equation:**

$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{ATP}$$

**Word equation:** glucose + oxygen → carbon dioxide + water + energy (ATP)

## Stages of Aerobic Respiration

| Stage | Location | Reactants | Products |
|-------|---------|-----------|---------|
| **Glycolysis** | Cytoplasm | Glucose | Pyruvate + 2 ATP + reduced NAD |
| **Link reaction** | Mitochondrial matrix | Pyruvate | Acetyl CoA + CO₂ |
| **Krebs cycle** | Mitochondrial matrix | Acetyl CoA | CO₂ + reduced NAD/FAD + ATP |
| **Electron transport chain** | Inner mitochondrial membrane (cristae) | Reduced NAD/FAD + O₂ | H₂O + ~34 ATP |

**Net ATP yield:** approximately **36–38 ATP** per glucose molecule in aerobic respiration.

> The mitochondria are the site of the Krebs cycle and electron transport chain. Their folded cristae increase the surface area for ATP synthesis. This is why active cells (muscle fibres, sperm mid-piece, liver cells) have many mitochondria.`,
          groups: [],
          recap: [
            "Write the word equation and balanced symbol equation for aerobic respiration. [3]",
            "State where in the cell glycolysis and the Krebs cycle occur. [2]",
            "Explain why cells carrying out aerobic respiration need both glucose and oxygen. [3]",
            "Explain why mitochondria have a folded inner membrane (cristae). [2]"
          ]
        },
        {
          title: "Anaerobic Respiration",
          body: `**Definition:** Anaerobic respiration is the release of energy from glucose **without oxygen**. It produces far less ATP than aerobic respiration (only 2 ATP per glucose) and produces different end-products depending on the organism.

## In Animals and Humans (during intense exercise)
$$\\text{glucose} \\rightarrow \\text{lactic acid} + \\text{small amount of ATP}$$

When muscle cells run out of oxygen during vigorous exercise:
- Glycolysis continues (only stage that doesn't need O₂)
- Pyruvate is reduced to **lactic acid** (lactate) to regenerate NAD so glycolysis can keep running
- Lactic acid accumulates → muscle fatigue, burning sensation, cramps
- After exercise: **oxygen debt** — extra O₂ is consumed to oxidise lactic acid back to CO₂ and water (or glucose), repaying the "debt"

## In Yeast (Fermentation)
$$\\text{glucose} \\rightarrow \\text{ethanol} + CO_2 + \\text{small amount of ATP}$$

- Used in **bread making:** CO₂ causes dough to rise; alcohol evaporates during baking
- Used in **brewing/winemaking:** Yeast ferments sugars in grape juice → alcohol
- Used in **bioethanol production:** Yeast ferments biomass → ethanol as fuel

## Comparison

| Feature | Aerobic respiration | Anaerobic respiration |
|---------|--------------------|-----------------------|
| Oxygen needed | Yes | No |
| End products (human) | CO₂ + H₂O | Lactic acid |
| End products (yeast) | CO₂ + H₂O | Ethanol + CO₂ |
| ATP yield | ~36–38 per glucose | ~2 per glucose |
| Location | Cytoplasm + mitochondria | Cytoplasm only |`,
          groups: [],
          recap: [
            "Write the word equations for anaerobic respiration in (a) human muscle cells, (b) yeast. [2]",
            "Explain why lactic acid accumulates in muscles during intense exercise. [3]",
            "Explain what is meant by oxygen debt and how it is repaid after exercise. [3]",
            "Describe two industrial uses of anaerobic respiration in yeast. [4]"
          ]
        }
      ]
    },
    {
      number: 13,
      title: "Excretion in Humans",
      intro: "Excretion is the removal from the body of the toxic waste products of metabolism. In humans, the main excretory products are carbon dioxide (from respiration, excreted via lungs), urea (from amino acid deamination in the liver, excreted via kidneys), and excess water and salts (excreted via kidneys and skin). The kidney is the master regulator of blood composition — controlling water balance (osmoregulation) and salt balance while removing urea.",
      subheadings: [
        {
          title: "The Kidney — Structure and Urine Formation",
          body: `Each kidney contains approximately **1 million nephrons** — the functional units of the kidney. Each nephron performs ultrafiltration followed by selective reabsorption.

## Stages of Urine Formation

### 1. Ultrafiltration (in the Bowman's capsule / glomerulus)
- The **glomerulus** is a knot of capillaries inside the **Bowman's capsule**
- Blood is delivered at HIGH pressure via the **afferent arteriole** (wider than the efferent arteriole)
- This pressure forces small molecules out of the blood into the Bowman's capsule through tiny pores in the capillary walls and basement membrane
- **Filtrate contains:** water, glucose, urea, amino acids, mineral ions, creatinine — anything with Mr < ~68,000
- **Stays in blood:** red blood cells, white blood cells, platelets, large proteins (albumin) — too large to pass through

### 2. Selective Reabsorption (in the proximal convoluted tubule and loop of Henle)
Not all filtrate should be excreted — the body must reclaim useful molecules:

| Substance | Where reabsorbed | Mechanism | How much |
|----------|-----------------|-----------|----------|
| Glucose | Proximal convoluted tubule (PCT) | Active transport | 100% (in healthy person) |
| Amino acids | PCT | Active transport | 100% |
| Water | PCT + Loop of Henle + DCT + collecting duct | Osmosis | Varies (ADH-controlled) |
| Mineral ions | PCT + DCT | Active transport + diffusion | Regulated by hormones |
| Urea | Some passive reabsorption | Diffusion | ~50% reabsorbed; rest excreted |

## Osmoregulation — ADH and Water Balance
The hormone **ADH (antidiuretic hormone)** is produced by the hypothalamus and released by the posterior pituitary gland. It controls water reabsorption in the collecting duct.

**Dehydration (blood water potential falls):**
1. Osmoreceptors in hypothalamus detect fall in blood water potential
2. Hypothalamus → posterior pituitary releases more ADH
3. ADH makes collecting duct **more permeable** to water
4. More water is reabsorbed by osmosis into blood
5. Small volume of **concentrated urine** is produced
6. Blood water potential returns to normal

**Overhydration (blood water potential rises):**
1. Less ADH released
2. Collecting duct less permeable
3. Less water reabsorbed
4. Large volume of **dilute urine** produced`,
          groups: [],
          recap: [
            "Describe the process of ultrafiltration in the kidney, including the forces involved and what enters the filtrate. [4]",
            "Explain why glucose is present in the filtrate but not normally in urine. [3]",
            "Explain how ADH regulates water balance when a person is dehydrated. [5]",
            "State three differences between blood plasma and the filtrate in the Bowman's capsule. [3]"
          ]
        }
      ]
    },
    {
      number: 14,
      title: "Coordination and Response",
      intro: "The nervous system and endocrine (hormonal) system coordinate the body's responses to internal and external stimuli. The nervous system acts rapidly via electrical impulses along neurones; the endocrine system acts more slowly via hormones carried in blood but produces longer-lasting effects. Together, they maintain homeostasis — the stable internal environment essential for enzyme function, cell activity, and survival.",
      subheadings: [
        {
          title: "The Nervous System — Neurones and Reflex Arcs",
          body: `The nervous system has two main divisions:
- **Central Nervous System (CNS):** Brain + spinal cord — integration and processing
- **Peripheral Nervous System (PNS):** All nerves outside the CNS — sensory (afferent) and motor (efferent) neurones

## Types of Neurone

| Type | Function | Direction |
|------|----------|-----------|
| **Sensory neurone** | Carries impulses FROM receptors TO CNS | Receptor → CNS |
| **Relay (interneurone)** | Connects sensory to motor within CNS | Within CNS |
| **Motor neurone** | Carries impulses FROM CNS TO effectors | CNS → muscle/gland |

## The Reflex Arc
A **reflex** is a rapid, automatic, involuntary response to a stimulus that does not require conscious thought. Reflex arcs are rapid because they bypass the brain (processed in spinal cord).

**Example — withdrawal reflex (hand touching hot object):**

Receptor (pain receptor in skin) → Sensory neurone → Spinal cord relay neurone → Motor neurone → Effector (bicep muscle) → Response (withdrawing hand)

Simultaneously, impulses travel up to the brain via sensory pathways → conscious awareness of pain (but after the reflex has already occurred).

## The Synapse
A **synapse** is a junction between two neurones (or a neurone and an effector). Nerve impulses are **electrical** along neurones but are transmitted **chemically** across synapses.

**Process of synaptic transmission:**
1. Electrical impulse reaches pre-synaptic terminal → depolarises membrane
2. Ca²⁺ ions enter pre-synaptic terminal
3. Vesicles containing **neurotransmitter** (e.g. acetylcholine) fuse with membrane
4. Neurotransmitter released into **synaptic cleft** by exocytosis
5. Neurotransmitter diffuses across the gap (~20 nm)
6. Binds to specific receptors on post-synaptic membrane → generates new impulse
7. Neurotransmitter is broken down by enzymes (e.g. acetylcholinesterase) → reabsorbed by pre-synaptic terminal

> **Why synapses ensure one-way transmission:** Vesicles are only in the pre-synaptic terminal; receptors are only on the post-synaptic membrane. The impulse can only travel in one direction.`,
          groups: [],
          recap: [
            "State the sequence of structures in a simple reflex arc. [4]",
            "Explain the advantage of reflex actions over voluntary responses. [2]",
            "Describe what happens at a cholinergic synapse when a nerve impulse arrives. [5]",
            "Explain why nerve impulses can only travel in one direction across a synapse. [2]"
          ]
        },
        {
          title: "Hormones and the Endocrine System",
          body: `**Hormones** are chemical messengers produced by **endocrine glands** and secreted directly into the blood. They travel to **target organs** where they produce a response.

| Feature | Nervous system | Endocrine system |
|---------|---------------|-----------------|
| Signal type | Electrical impulse | Chemical (hormone) |
| Speed | Very fast (milliseconds) | Slow (seconds to hours) |
| Duration | Brief | Long-lasting |
| Target | Specific cell/organ (nerve supplies) | Widespread (any cell with receptor) |

## Key Hormones

| Hormone | Produced by | Target | Effect |
|---------|-----------|--------|--------|
| **Insulin** | Pancreas (β-cells) | Liver, muscle | Lowers blood glucose: promotes glycogen synthesis + cellular uptake of glucose |
| **Glucagon** | Pancreas (α-cells) | Liver | Raises blood glucose: promotes glycogen → glucose (glycogenolysis) |
| **Adrenaline** | Adrenal medulla | Heart, liver, muscles | Fight-or-flight: ↑ heart rate, ↑ blood glucose, ↑ blood flow to muscles |
| **ADH** | Hypothalamus/pituitary | Kidney collecting duct | ↑ water reabsorption → concentrated urine |
| **Oestrogen** | Ovary | Uterus, pituitary | Female puberty; regulates menstrual cycle; thickens uterine lining |
| **Testosterone** | Testes | Many tissues | Male puberty; sperm production; secondary sexual characteristics |
| **Thyroxine** | Thyroid | All cells | ↑ metabolic rate; growth and development |

## Blood Glucose Regulation — Negative Feedback

**After a meal (blood glucose rises):**
- Pancreatic β-cells detect rise → secrete **insulin**
- Insulin acts on liver and muscle cells → **glycogenesis** (glucose → glycogen stored)
- Also promotes glucose uptake by cells for respiration
- Blood glucose returns to normal → insulin secretion falls

**Between meals (blood glucose falls):**
- Pancreatic α-cells detect fall → secrete **glucagon**
- Glucagon acts on liver → **glycogenolysis** (glycogen → glucose released into blood)
- Blood glucose rises → glucagon secretion falls

This is a **negative feedback** system: the response opposes the change that triggered it.

**Diabetes:**
- **Type 1:** Autoimmune destruction of β-cells → no insulin produced → blood glucose uncontrolled → treated with insulin injections
- **Type 2:** Cells become insensitive to insulin → treated with diet, exercise, oral medication`,
          groups: [],
          recap: [
            "Compare the nervous system and endocrine system in terms of speed, duration, and type of signal. [4]",
            "Explain how blood glucose concentration is regulated after a high-carbohydrate meal. [5]",
            "Explain the difference between Type 1 and Type 2 diabetes. [4]",
            "Explain what is meant by negative feedback. Give blood glucose regulation as an example. [4]"
          ]
        }
      ]
    },
    {
      number: 15,
      title: "Drugs",
      intro: "Drugs are chemical substances that alter the normal functioning of the body. Some are medicines (treating disease), others are narcotics or stimulants used recreationally, and some are performance-enhancing substances in sport. Understanding how different categories of drugs affect the nervous system and body physiology — and the serious health consequences of drug misuse — is essential content for Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "Categories of Drugs and Their Effects",
          body: `## Depressants
Slow down activity of the CNS by enhancing inhibitory neurotransmission or reducing excitatory neurotransmission.

**Alcohol (ethanol):**
- Impairs judgement, slows reaction times, reduces coordination and balance
- Long-term heavy use: liver cirrhosis (liver cells destroyed by chronic alcohol metabolism → replaced by fibrous scar tissue → liver fails to function)
- Alcohol is a **teratogen** — causes foetal alcohol syndrome if consumed during pregnancy

**Other depressants:** Barbiturates (sedatives), benzodiazepines (e.g. diazepam/Valium)

## Stimulants
Increase CNS activity by enhancing excitatory neurotransmission.

**Caffeine:** Found in coffee, tea, energy drinks. Blocks adenosine receptors → increased alertness. Mild and legal.

**Nicotine** (in tobacco smoke):
- Acts on acetylcholine receptors in brain → releases dopamine → addictive
- Raises heart rate and blood pressure
- Does not directly cause cancer, but causes addiction that leads to continued smoking

**Other effects of tobacco smoking:**
- **Tar** (in cigarette smoke): Settles in lung passages → carcinogens → lung cancer; irritates airways → bronchitis
- **Carbon monoxide:** Binds irreversibly to haemoglobin (forming carboxyhaemoglobin) with 250× greater affinity than O₂ → reduces O₂-carrying capacity → cardiovascular disease; especially dangerous in pregnancy (reduces O₂ to foetus)
- **Nicotine itself:** Increases platelet stickiness → thrombosis risk → heart attack and stroke

## Antibiotics
Drugs that kill bacteria or inhibit their growth. They **do not affect viruses** (viruses use the host cell's own machinery, which antibiotics target differently).

Examples: penicillin (inhibits bacterial cell wall synthesis), streptomycin (blocks 70S ribosomes), tetracycline.

**Antibiotic resistance:**
- Random mutations in bacteria can give resistance to an antibiotic
- If antibiotic is present, sensitive bacteria die; resistant bacteria survive and reproduce
- Eventually the bacterial population is dominated by resistant strains (natural selection)
- **MRSA** (*Methicillin-resistant Staphylococcus aureus*) is a major healthcare problem

**Preventing resistance:** Complete the full course of antibiotics; do not take antibiotics for viral infections; do not share antibiotics.`,
          groups: [],
          recap: [
            "Explain how carbon monoxide in tobacco smoke affects the oxygen-carrying capacity of blood. [3]",
            "Explain why antibiotics are effective against bacterial infections but not against viral infections. [3]",
            "Explain, using natural selection, how a bacterial population can become resistant to an antibiotic over time. [5]",
            "State two long-term effects of heavy alcohol consumption on the liver. [2]"
          ]
        }
      ]
    },
    {
      number: 16,
      title: "Reproduction",
      intro: "Reproduction is the biological process by which organisms produce offspring, ensuring species survival. Sexual reproduction involves the fusion of gametes from two parents, producing genetically varied offspring — crucial for evolutionary adaptation. Asexual reproduction produces genetically identical clones rapidly from one parent. Understanding human reproductive anatomy, the menstrual cycle, fertilisation, and the development of the embryo is central to this chapter.",
      subheadings: [
        {
          title: "Sexual and Asexual Reproduction — Comparison",
          body: `| Feature | Sexual reproduction | Asexual reproduction |
|---------|--------------------|--------------------|
| Parents needed | Two (usually) | One |
| Gametes | Yes (haploid gametes fuse) | No |
| Genetic variation in offspring | Yes (meiosis + random fertilisation) | No (offspring = clones of parent) |
| Speed of reproduction | Slower | Faster |
| Energy cost | High (finding mate, courtship) | Low |
| Advantage | Variation → adaptation to changing environments | Rapid colonisation of stable environments |
| Disadvantage | Complex; requires finding mate | No variation → vulnerable if environment changes |

**Examples of asexual reproduction:**
- **Binary fission:** Bacteria divide into two identical daughter cells
- **Budding:** Yeast; Hydra
- **Runners/stolons:** Strawberry plants send out runners that root → new genetically identical plants
- **Vegetative propagation:** Potatoes grow from buds (eyes) on tubers; bulbs in onions; rhizomes in ginger

**Examples of sexual reproduction:**
- All animals (including humans)
- Most plants (via flowers, pollen, seeds)
- Some fungi and protoctists`,
          groups: [],
          recap: [
            "State two advantages of sexual reproduction over asexual reproduction. [2]",
            "Explain why asexual reproduction is advantageous in a stable, predictable environment. [2]",
            "Give three examples of asexual reproduction in plants and explain the mechanism in one example. [4]"
          ]
        },
        {
          title: "Human Reproduction — Fertilisation, Development and Birth",
          body: `## The Menstrual Cycle

The average menstrual cycle is **28 days** and is regulated by hormones:

| Hormone | Produced by | Days | Effect |
|---------|-----------|------|--------|
| **FSH** (follicle-stimulating hormone) | Anterior pituitary | Days 1–13 | Stimulates follicle development in ovary; stimulates oestrogen secretion |
| **Oestrogen** | Ovary (developing follicle) | Days 7–14 | Rebuilds uterine lining (endometrium); inhibits FSH; triggers LH surge |
| **LH** (luteinising hormone) | Anterior pituitary | Day 14 (surge) | Triggers ovulation (release of egg) |
| **Progesterone** | Corpus luteum | Days 14–28 | Maintains uterine lining; inhibits FSH and LH; drops if no fertilisation → menstruation |

**Ovulation:** Release of a mature egg (secondary oocyte) from the ovary, triggered by the LH surge, on approximately day 14.

## Fertilisation
Sperm are deposited in the vagina → swim through cervix and uterus into fallopian tubes → one sperm penetrates the secondary oocyte in the fallopian tube → nuclei fuse → **zygote** formed (diploid, 46 chromosomes in humans).

## Implantation and Development
The zygote divides by mitosis as it travels down the fallopian tube → becomes a **blastocyst** → implants in the **endometrium** (uterine lining) at approximately day 6.

The **placenta** develops at the implantation site. It:
- Allows exchange of oxygen, glucose, amino acids, vitamins, antibodies from mother to foetus
- Allows CO₂ and urea to pass from foetus to mother
- Acts as a barrier to most pathogens (but not all — rubella virus, HIV can cross)
- Produces progesterone (after week 12) to maintain the pregnancy
- Does NOT allow maternal blood to mix with foetal blood (separate circulations)

**Amniotic fluid** (in the amniotic sac) surrounds and cushions the foetus, provides thermal insulation, and allows free foetal movement.

**Gestation** (pregnancy) in humans: ~40 weeks (9 months).`,
          groups: [],
          recap: [
            "Describe the roles of FSH, oestrogen, and LH in the menstrual cycle. [6]",
            "Explain three functions of the placenta during pregnancy. [3]",
            "Explain why the mother's blood does not mix directly with the foetal blood at the placenta, yet substances can still be exchanged. [3]",
            "Explain why progesterone levels must remain high throughout pregnancy. [2]"
          ]
        }
      ]
    },
    {
      number: 17,
      title: "Inheritance",
      intro: "Inheritance is the transmission of genetic information from parents to offspring. The work of Gregor Mendel in the 19th century revealed that traits are controlled by discrete heritable units (now called genes), that each organism carries two copies of each gene (alleles), and that one allele from each parent is passed randomly to offspring. Understanding genes, alleles, dominance, and the mechanics of monohybrid crosses is essential — and these principles explain patterns of inheritance in both plants and humans.",
      subheadings: [
        {
          title: "Key Genetic Terms and Monohybrid Inheritance",
          body: `## Essential Definitions

- **Gene:** A section of DNA on a chromosome that codes for a specific protein (and thus a specific characteristic)
- **Allele:** A particular version of a gene. Most genes have two or more alleles (e.g. the gene for blood group has three alleles: A, B, O)
- **Locus:** The specific position of a gene on a chromosome
- **Dominant allele:** An allele whose effect is expressed in the phenotype even when only one copy is present. Written in CAPITAL letters (e.g. T)
- **Recessive allele:** An allele whose effect is only expressed when two copies are present (homozygous). Written in lower case (e.g. t)
- **Homozygous:** Having two identical alleles for a gene (TT or tt)
- **Heterozygous:** Having two different alleles for a gene (Tt)
- **Genotype:** The alleles an organism carries (e.g. Tt)
- **Phenotype:** The observable characteristics resulting from the genotype and environment (e.g. tall)

## Monohybrid Cross — Example: Seed Colour in Peas
Yellow (Y) is dominant over green (y).

**Cross:** Heterozygous yellow × homozygous green

|  | Y | y |
|--|---|---|
| **y** | Yy | yy |
| **y** | Yy | yy |

**Genotype ratio:** 2 Yy : 2 yy = 1:1
**Phenotype ratio:** 2 yellow : 2 green = 1:1

**Cross:** Heterozygous × Heterozygous (Yy × Yy)

|  | Y | y |
|--|---|---|
| **Y** | YY | Yy |
| **y** | Yy | yy |

**Genotype ratio:** 1 YY : 2 Yy : 1 yy
**Phenotype ratio:** 3 yellow : 1 green (3:1)

> The 3:1 ratio in a monohybrid cross between two heterozygotes is a diagnostic indicator of Mendelian inheritance with one dominant and one recessive allele.

## Codominance
Both alleles are expressed in the heterozygote — neither is dominant. Example: ABO blood groups (in the context of A and B alleles — both A and B are codominant; O is recessive to both).

**Sickle cell anaemia — codominance:**
- HᴬHᴬ: Normal haemoglobin, no disease
- HᴬHˢ: Both types of haemoglobin produced — **sickle cell trait** (carrier — some protection against malaria)
- HˢHˢ: Only sickle cell haemoglobin — **sickle cell anaemia** (severe disease)`,
          groups: [],
          recap: [
            "Explain the difference between genotype and phenotype. [2]",
            "In guinea pigs, black coat (B) is dominant to white coat (b). Two heterozygous guinea pigs are crossed. Draw a genetic diagram and state the expected phenotype ratio of offspring. [4]",
            "Explain what is meant by codominance. Give one example. [3]",
            "A person has blood type AB. State their genotype and explain whether each allele is dominant or recessive. [3]"
          ]
        },
        {
          title: "Sex Determination and Sex-Linked Inheritance",
          body: `## Sex Determination in Humans
Humans have 23 pairs of chromosomes. 22 pairs are **autosomes** (non-sex chromosomes). Pair 23 are the **sex chromosomes**:
- **Female:** XX (homozygous — two copies of all X-linked genes)
- **Male:** XY (hemizygous for X-linked genes — only one copy on X)

**Sex determination cross:**
All eggs carry X. Sperm carry either X or Y (50/50). Therefore, sex is determined by which sperm fertilises the egg.

## Sex-Linked Inheritance
Genes located on the X chromosome are **sex-linked**. Because males only have one X chromosome, they only need ONE recessive allele to express the trait — they cannot be "carriers" like females.

**Example: Red-green colour blindness (X-linked recessive)**

Let Xᴺ = normal vision; Xⁿ = colour blind

| Genotype | Phenotype |
|----------|-----------|
| Xᴺ Xᴺ | Female, normal vision |
| Xᴺ Xⁿ | Female, normal vision but **carrier** |
| Xⁿ Xⁿ | Female, colour blind |
| Xᴺ Y | Male, normal vision |
| Xⁿ Y | Male, **colour blind** |

**Why males are more commonly affected:** Males only need one copy of the recessive allele (on their single X) to express the trait. Females need two copies (on both X chromosomes).

**Example cross:** Carrier female × normal male

|  | Xᴺ | Xⁿ |
|--|---|---|
| **Xᴺ** | XᴺXᴺ | XᴺXⁿ |
| **Y** | XᴺY | XⁿY |

Probability of a colour-blind son = 1/4 (25%); probability of a carrier daughter = 1/4 (25%).`,
          groups: [],
          recap: [
            "Explain why males are more likely to be colour blind than females. [3]",
            "A woman who is a carrier for colour blindness has children with a normal-vision man. Draw a genetic diagram to show the possible genotypes and phenotypes of their children. [5]",
            "Explain what is meant by sex-linked inheritance. [2]"
          ]
        }
      ]
    },
    {
      number: 18,
      title: "Variation and Selection",
      intro: "Variation — differences between individuals of the same species — arises from genetic differences and environmental influences. Natural selection acts on heritable variation, causing the frequency of advantageous alleles to increase in a population over time, leading to evolution. Understanding the mechanisms of variation and natural selection explains the enormous diversity of life and the process by which new species arise.",
      subheadings: [
        {
          title: "Types of Variation",
          body: `Variation within a species can be:

## Continuous Variation
Characteristics that show a range of values with no distinct categories. Examples: height, mass, foot size, skin colour, intelligence.
- Caused by multiple genes (polygenic inheritance) + environmental factors
- Forms a **normal distribution** (bell curve) when plotted
- Environmentally influenced significantly

## Discontinuous Variation
Characteristics that fall into distinct, non-overlapping categories. Examples: blood group (A, B, AB, O), tongue-rolling, attached or free earlobes, sex.
- Controlled by one or a few genes
- Environmental effects are minimal
- Shows no intermediates

| Feature | Continuous | Discontinuous |
|---------|-----------|--------------|
| Categories | No distinct categories — gradual range | Distinct categories, no intermediates |
| Graph | Normal distribution (bell curve) | Bar chart (distinct bars) |
| Genes involved | Many (polygenic) | Usually one or few |
| Environmental influence | Significant | Minimal |
| Example | Height | Blood group |

## Sources of Genetic Variation
1. **Mutation:** Random change in DNA sequence. Can be induced by mutagens (UV radiation, X-rays, certain chemicals, radioactivity). Most mutations are neutral or harmful; rarely beneficial.
2. **Meiosis:** Produces genetically unique gametes through:
   - **Independent assortment:** Homologous pairs separate randomly → 2²³ possible combinations per gamete in humans
   - **Crossing over:** Homologous chromosomes exchange segments → new combinations of alleles
3. **Random fertilisation:** Any sperm can fertilise any egg → enormous genetic variation in offspring`,
          groups: [],
          recap: [
            "Distinguish between continuous and discontinuous variation with an example of each. [4]",
            "Explain two ways in which meiosis produces genetic variation. [4]",
            "Explain why continuous variation produces a normal distribution curve. [3]",
            "State two environmental factors that can cause mutation. [2]"
          ]
        },
        {
          title: "Natural Selection and Evolution",
          body: `## Darwin's Theory of Natural Selection

Charles Darwin proposed that evolution occurs by **natural selection**. The mechanism has four components:

1. **Overproduction:** Organisms produce far more offspring than can survive (e.g. a cod fish produces millions of eggs per year)
2. **Variation:** Individuals within a population show heritable variation in their characteristics
3. **Competition (struggle for existence):** Limited resources (food, water, mates, space) mean that not all offspring can survive and reproduce
4. **Differential survival and reproduction:** Individuals with characteristics better suited to their environment are more likely to survive, reproduce, and pass their advantageous alleles to offspring
5. Over many generations: the frequency of advantageous alleles increases in the population → **evolution**

## Worked Example — Antibiotic Resistance
1. A population of bacteria has random mutations → some have an allele conferring resistance to an antibiotic
2. Antibiotic is introduced → most bacteria (non-resistant) are killed → strong selection pressure
3. Resistant bacteria survive and reproduce rapidly
4. Within a few days/weeks, the entire population may be resistant
5. This is natural selection operating on a bacterial timescale — visible evidence that evolution occurs

## Artificial Selection (Selective Breeding)
Humans deliberately breed organisms with desirable traits:
- **Dairy cattle:** Selected for high milk yield
- **Wheat:** Selected for disease resistance + high grain yield
- **Dogs:** Selective breeding from wolves for size, temperament, tasks
- **Process:** Select parents with desired traits → breed → select from offspring → repeat over generations

> Artificial selection demonstrates that selection on variation causes heritable change — the same principle as natural selection.

## Speciation
**Species** = group of organisms that can interbreed to produce fertile offspring.

When populations of the same species become **geographically isolated**:
1. Each population accumulates different mutations
2. Natural selection in different environments favours different alleles
3. The populations diverge genetically
4. Eventually they can no longer interbreed successfully → two new species have formed (**allopatric speciation**)`,
          groups: [],
          recap: [
            "Describe Darwin's theory of natural selection. [5]",
            "Explain, using natural selection, how a population of bacteria can become resistant to an antibiotic in a short time. [5]",
            "Explain what is meant by speciation and describe the conditions that lead to allopatric speciation. [4]",
            "Explain one difference between natural selection and artificial selection. [2]"
          ]
        }
      ]
    },
    {
      number: 19,
      title: "Organisms and Their Environment",
      intro: "Ecology studies the interactions between organisms and their environment. Energy flows through ecosystems in one direction (from sun through producers to consumers to decomposers), while nutrients cycle continuously. Food webs map the feeding relationships in a community; population sizes are regulated by biotic and abiotic factors; and decomposers play a vital role in returning nutrients to the soil for re-use by producers.",
      subheadings: [
        {
          title: "Food Chains, Food Webs and Energy Flow",
          body: `## Key Terms

- **Producer:** Autotrophic organism (usually a green plant or alga) that manufactures organic molecules from inorganic sources using light energy (photosynthesis). **All food chains start with a producer.**
- **Consumer:** Heterotrophic organism that feeds on other organisms
  - **Primary consumer (herbivore):** Eats plants
  - **Secondary consumer:** Eats primary consumers
  - **Tertiary consumer:** Eats secondary consumers
- **Decomposer:** Organism (bacteria and fungi) that breaks down dead organic matter into inorganic molecules — returns nutrients to soil
- **Food chain:** Linear sequence showing direction of energy flow between organisms (arrow means "is eaten by" or "energy passes to")
- **Food web:** Network of interconnected food chains in an ecosystem

## Energy Flow Through Ecosystems

Not all energy is transferred between trophic levels — most is lost:

| Energy lost as | Why |
|--------------|-----|
| Heat (respiration) | All living organisms respire; most energy from food is released as heat |
| Uneaten biomass | Not all of an organism is consumed |
| Indigestible material (faeces) | Cellulose, bones, shells cannot be digested |
| Movement | Kinetic energy dissipated as heat |

**Typical efficiency:** Only ~10% of energy at one trophic level passes to the next.

This is why:
- Food chains are short (rarely more than 4–5 links — too little energy remains)
- Feeding at lower trophic levels (vegetarian diet) is more energy-efficient — supports more humans per unit of land

## Pyramids of Biomass and Numbers

**Pyramid of numbers:** Number of organisms at each trophic level. Can be inverted (e.g. one tree supports thousands of insects).

**Pyramid of biomass:** Total dry mass at each trophic level. Almost always a true pyramid shape (decreases at each level due to energy losses). More meaningful than numbers.`,
          groups: [],
          recap: [
            "Explain why food chains rarely have more than four or five links. [3]",
            "Describe the role of decomposers in an ecosystem. [3]",
            "Explain why a pyramid of biomass is almost always pyramid-shaped but a pyramid of numbers may be inverted. [4]",
            "Explain why a vegetarian diet can support more people per unit area of farmland than a diet based on beef. [4]"
          ]
        },
        {
          title: "The Carbon Cycle and the Nitrogen Cycle",
          body: `## The Carbon Cycle

Carbon moves between the atmosphere (as CO₂) and living organisms in a continuous cycle:

| Process | Direction | Mechanism |
|---------|-----------|-----------|
| **Photosynthesis** | Atmosphere → plant | CO₂ fixed into organic molecules |
| **Respiration** | All organisms → atmosphere | Organic molecules oxidised → CO₂ released |
| **Feeding** | Plant → consumer | Organic carbon transferred up food chain |
| **Death + decomposition** | All organisms → atmosphere | Decomposers respire dead organic matter → CO₂ |
| **Fossilisation** | Dead organisms → fossil fuels | Over millions of years, incomplete decomposition |
| **Combustion** | Fossil fuels → atmosphere | Burning releases CO₂ rapidly |

> **Human impact:** Burning fossil fuels and deforestation are releasing CO₂ faster than it can be reabsorbed → enhanced greenhouse effect → climate change.

## The Nitrogen Cycle

Plants need nitrogen to make amino acids, proteins, and nucleic acids. They absorb it as **nitrate ions (NO₃⁻)** from the soil. The nitrogen cycle converts between forms:

| Process | Organisms involved | Reaction |
|---------|------------------|----------|
| **Nitrogen fixation** | *Rhizobium* bacteria (root nodules); lightning | N₂ → NH₄⁺ (ammonium) → soil nitrate |
| **Nitrification** | Nitrifying bacteria (*Nitrosomonas*, *Nitrobacter*) | NH₄⁺ → NO₂⁻ → NO₃⁻ (nitrification — in aerobic soil) |
| **Decomposition (ammonification)** | Decomposer bacteria and fungi | Proteins in dead organisms → NH₄⁺ |
| **Denitrification** | Denitrifying bacteria (in *anaerobic* soil) | NO₃⁻ → N₂ (returns nitrogen to atmosphere) |
| **Absorption by plants** | Plant roots | NO₃⁻ absorbed by active transport |`,
          groups: [],
          recap: [
            "Describe the role of bacteria in the nitrogen cycle. Name the processes and types of bacteria involved. [6]",
            "Explain why waterlogged soil is low in nitrates but denitrifying bacteria are active. [3]",
            "Describe three ways in which carbon dioxide is released into the atmosphere. [3]",
            "Explain how nitrogen in the atmosphere eventually becomes part of a human protein. [5]"
          ]
        }
      ]
    },
    {
      number: 20,
      title: "Human Influences on Ecosystems",
      intro: "Human population growth and industrialisation have dramatically altered natural ecosystems. Pollution of air, water, and land; habitat destruction through deforestation and urbanisation; overexploitation of fish stocks; and climate change driven by greenhouse gas emissions all threaten biodiversity. Understanding these impacts and the conservation strategies used to mitigate them is a major focus of Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "Pollution and Its Effects",
          body: `## Water Pollution — Eutrophication

**Eutrophication** is the excessive enrichment of water with nutrients (nitrates and phosphates from agricultural fertilisers and sewage), causing algal blooms and oxygen depletion:

1. Excess nitrates/phosphates enter rivers/lakes (from fertiliser run-off, sewage effluent)
2. **Algal bloom:** Rapid growth of algae → dense surface layer
3. **Light blocked:** Aquatic plants below surface cannot photosynthesise → die
4. **Decomposers** (aerobic bacteria) break down dead plants → population of bacteria explodes
5. Bacteria use up dissolved **oxygen** (BOD — biochemical oxygen demand increases)
6. **Oxygen depletion (hypoxia):** Fish and other aerobic organisms die
7. The ecosystem shifts from a biodiverse community to a dead zone

## Air Pollution

| Pollutant | Source | Environmental effect |
|----------|--------|---------------------|
| **CO₂** | Combustion of fossil fuels | Enhanced greenhouse effect → global warming |
| **SO₂** | Burning sulfur-containing coal and oil | Acid rain (SO₂ + H₂O → H₂SO₃) → damages leaves, acidifies lakes |
| **NO_x** | Vehicle engines (high temperature combustion) | Acid rain; photochemical smog |
| **Methane (CH₄)** | Livestock (enteric fermentation), rice paddies, landfill | Potent greenhouse gas (25× CO₂) |
| **CFCs** | Refrigerants, aerosol propellants (now banned) | Catalytic destruction of ozone layer |

## Deforestation
Removal of forests for agriculture, logging, or urbanisation:
- Reduces carbon fixation (fewer trees absorb CO₂) → increases atmospheric CO₂
- Releases stored carbon (burning/decomposition of cleared trees) → CO₂
- Destroys habitats → biodiversity loss
- Increases soil erosion (roots no longer bind soil)
- Disrupts water cycle (less transpiration → local climate changes)`,
          groups: [],
          recap: [
            "Describe the sequence of events that leads to oxygen depletion in a river following heavy application of fertiliser to nearby farmland. [5]",
            "Explain two ways in which deforestation contributes to climate change. [4]",
            "Explain how acid rain damages lake ecosystems. [3]",
            "State two environmental effects of releasing methane into the atmosphere. [2]"
          ]
        },
        {
          title: "Conservation and Sustainability",
          body: `## Why Conserve Biodiversity?
- **Ecological stability:** Diverse ecosystems are more stable and resilient to change
- **Economic value:** Many medicines derived from natural organisms (aspirin from willow bark; penicillin from *Penicillium* mould); ecotourism revenue
- **Ethical responsibility:** Humans share the planet with millions of other species; moral obligation not to cause extinction
- **Future resources:** Unknown potential uses of undiscovered species

## Conservation Strategies

### In-situ Conservation (on-site — in the natural habitat)
- **National parks and nature reserves:** Protect habitats and species in place
- **Marine protected areas (MPAs):** Protect coral reefs, fish nurseries, spawning grounds
- **Conservation laws:** CITES (Convention on International Trade in Endangered Species) — restricts trade in endangered organisms and products
- **Reforestation:** Planting trees in deforested areas

### Ex-situ Conservation (off-site)
- **Zoos and aquaria:** Captive breeding of endangered species; education; research
- **Seed banks:** Freeze and store seeds of plant species (e.g. Svalbard Global Seed Vault)
- **Tissue culture:** Propagate rare plants from tiny samples; preserve genetic material

## Sustainable Development
Using natural resources at rates that allow them to be replenished, so future generations can also meet their needs.

**Sustainable fishing:**
- **Fishing quotas:** Limit the total catch of each species per year
- **Net mesh size regulations:** Minimum mesh size ensures juveniles escape and can reproduce
- **Seasonal bans:** No fishing during spawning seasons

> If fish are caught faster than they can reproduce, the stock collapses irreversibly. Sustainable fishing maintains the breeding population above the critical minimum.`,
          groups: [],
          recap: [
            "Explain two reasons why it is important to maintain biodiversity. [4]",
            "Distinguish between in-situ and ex-situ conservation. Give one example of each. [4]",
            "Explain how fishing quotas and minimum net mesh sizes contribute to sustainable fishing. [4]",
            "Explain what is meant by sustainable development in the context of forestry. [3]"
          ]
        }
      ]
    },
    {
      number: 21,
      title: "Biotechnology and Genetic Modification",
      intro: "Biotechnology uses living organisms or their products to develop useful applications. Modern genetic technology — including recombinant DNA, genetic engineering, cloning, and gene therapy — allows precise manipulation of the genetic material of organisms. These powerful technologies have enormous potential in medicine, agriculture, and industry, but also raise important ethical questions.",
      subheadings: [
        {
          title: "Genetic Engineering and Recombinant DNA",
          body: `**Genetic engineering** (recombinant DNA technology) involves isolating a gene from one organism and inserting it into another organism's genome, so that the recipient organism expresses the protein coded by that gene.

## The Process — Example: Insulin Production from Bacteria

1. **Identify and isolate the human insulin gene** from human pancreatic cell mRNA, using reverse transcriptase to make complementary DNA (cDNA) — this has no introns, making it suitable for bacterial expression

2. **Cut the gene** from the DNA using **restriction endonucleases** (restriction enzymes) — these cut DNA at specific recognition sequences, creating **sticky ends** (short single-stranded overhangs)

3. **Cut the bacterial plasmid** (small circular DNA in bacteria) with the **same restriction enzyme** → creates complementary sticky ends

4. **Join gene into plasmid** using **DNA ligase** enzyme — ligase joins (ligates) the cDNA insert into the plasmid via phosphodiester bonds. The result is a **recombinant plasmid**

5. **Transform bacteria:** Recombinant plasmid inserted into bacteria (*E. coli*) by heat shock or electroporation

6. **Select transformed bacteria:** Use antibiotic resistance genes or fluorescent markers in the plasmid to identify bacteria that have taken up the recombinant plasmid

7. **Grow bacteria in fermenters** → produce large quantities of human insulin → purify → package → distribute to diabetic patients

**Advantages of GM insulin:**
- Chemically identical to human insulin (not from pigs/cows — fewer allergic reactions)
- Produced in unlimited quantities
- No ethical concerns about animal slaughter
- Consistent quality

## Other Applications of Genetic Engineering

| Application | Gene/product | Organism |
|------------|-------------|---------|
| **Golden Rice** | Beta-carotene synthesis genes | Rice plant (helps prevent vitamin A deficiency in developing countries) |
| **Bt crops** | Bt toxin gene from *Bacillus thuringiensis* | Crop plants — toxic to insect pests, reducing pesticide use |
| **Chymosin** | Calf chymosin gene | Yeast — enzyme for cheese-making (vegetarian rennet) |
| **Factor VIII** | Human clotting factor gene | Sheep or bacteria — for haemophilia treatment |
| **GM salmon** | Growth hormone gene | Salmon — grows twice as fast to market size |`,
          groups: [],
          recap: [
            "Describe the steps involved in using genetic engineering to produce human insulin in bacteria. [6]",
            "Explain the roles of restriction endonucleases and DNA ligase in producing recombinant DNA. [4]",
            "Explain why cDNA (from mRNA via reverse transcriptase) is used rather than the gene directly from the human genome when expressing human proteins in bacteria. [3]",
            "State two advantages of using genetically engineered human insulin compared to insulin extracted from pig pancreases. [2]"
          ]
        },
        {
          title: "Cloning, Tissue Culture and Gene Therapy",
          body: `## Cloning
**Cloning** produces genetically identical copies of an organism.

### Micropropagation (Plant Tissue Culture)
1. Remove a small explant (piece of tissue) from a desirable plant
2. Sterilise to remove microorganisms
3. Place on **nutrient agar** containing growth hormones (auxin, cytokinin) → callus tissue forms (unspecialised dividing cells)
4. Transfer callus to different hormone concentrations → differentiate into shoots and roots
5. Transfer plantlets to soil → identical plants

**Advantages:** Rapid mass production of identical plants from one high-value parent; disease-free starting material; preserves rare species.

### Somatic Cell Nuclear Transfer (Animal Cloning)
**Dolly the Sheep (1996)** — first mammal cloned from an adult somatic cell:
1. Enucleate an egg cell (remove nucleus)
2. Insert nucleus from an adult somatic cell (e.g. mammary gland cell)
3. Use electrical stimulus to fuse nucleus with enucleated egg and trigger cell division
4. Implant developing embryo into surrogate mother
5. Offspring is genetically identical to the nucleus donor

## Gene Therapy
**Gene therapy** aims to treat genetic diseases by introducing a functional copy of a faulty gene into a patient's cells.

**Example — Cystic Fibrosis:**
- CF is caused by mutations in the CFTR gene → defective chloride ion channels → thick, sticky mucus in lungs
- A functional CFTR gene is delivered to lung cells using a **viral vector** (modified harmless virus) or liposomes (lipid vesicles)
- The functional gene is expressed → functional CFTR protein produced → symptoms reduced

**Somatic gene therapy:** Target body cells (not germline) — effects are not inherited.
**Germline gene therapy:** Target egg/sperm or fertilised egg — changes inherited by all descendant cells. Highly controversial ethically.

## Ethical Issues in Biotechnology

| Technology | Ethical concern |
|-----------|----------------|
| GM crops | Unknown effects on ecosystems; loss of biodiversity if wild plants cross-pollinate; corporate control of food supply |
| Animal cloning | Animal welfare (high failure rates, abnormalities); should animals be cloned for human benefit? |
| Germline gene therapy | Heritable changes to human genome; designer babies; consent of future generations |
| GM insulin/pharmaceuticals | Generally accepted (high benefit, contained production) |`,
          groups: [],
          recap: [
            "Describe the process of micropropagation (plant tissue culture). [4]",
            "Explain the principle of somatic cell nuclear transfer used to clone Dolly the sheep. [5]",
            "Explain what is meant by gene therapy and describe how somatic gene therapy could be used to treat cystic fibrosis. [5]",
            "Discuss one ethical concern associated with germline gene therapy in humans. [3]"
          ]
        }
      ]
    }
  ]
};
