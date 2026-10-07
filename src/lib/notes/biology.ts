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
      intro: "All living organisms — from the simplest bacterium to the most complex mammal — share seven fundamental life processes summarised by the acronym **MRSGREN**. These characteristics define what it means to be alive and allow biologists to make precise decisions about borderline cases such as viruses. Classification brings order to the overwhelming diversity of life by grouping organisms according to shared features and evolutionary relationships. The universal binomial naming system, devised by Linnaeus in the 18th century, ensures that scientists in any country can refer unambiguously to exactly the same organism.",
      subheadings: [
        {
          title: "The Seven Characteristics of Life (MRSGREN)",
          body: `Every living organism must carry out **all seven** life processes. If even one is missing, biologists classify the entity as non-living — which is exactly why viruses, despite appearing to reproduce, are not considered alive.

## M — Movement

**Definition:** An action by an organism or part of an organism causing a change in position or place.

Movement is far broader than just animals running or swimming. Consider:

- A plant shoot bending toward a light source over several hours — this is **phototropism**, driven by unequal distribution of the hormone auxin
- The swimming of sperm cells toward an egg, powered by a beating flagellum
- A white blood cell extending pseudopodia to engulf a bacterium — **amoeboid movement**
- Stomatal guard cells changing shape to open or close pores in a leaf

The critical distinction is that the **organism itself generates the movement** using its own energy. A rock rolling downhill moves, but it is not alive. The organism must be the cause of its own displacement.

## R — Respiration

**Definition:** The chemical reactions in every living cell that break down organic molecules — primarily glucose — to release energy in the form of ATP (adenosine triphosphate).

This is perhaps the most commonly confused characteristic because students confuse respiration with breathing. They are completely different:

- **Respiration** is a biochemical process occurring in the cytoplasm and mitochondria of every cell
- **Breathing (ventilation)** is the physical act of moving air in and out of lungs — it merely supplies raw materials for respiration

Respiration happens in every living cell — plant cells, fungal cells, bacterial cells — all the time, including at night when plants are not photosynthesising. The energy released as ATP powers every other life process: muscle contraction, active transport, protein synthesis, cell division, and nerve impulse transmission.

> **Examiner warning:** Writing "breathing" in place of "respiration" scores zero marks. Respiration is the chemical release of energy from organic molecules inside cells. This distinction is tested repeatedly across IGCSE papers.

## S — Sensitivity

**Definition:** The ability to detect or sense changes (stimuli) in the internal or external environment and produce an appropriate, coordinated response.

Every living organism, without exception, must respond to its environment to survive. The mechanisms differ vastly:

- Animals use specialised receptor cells: **photoreceptors** in the retina detect light; **mechanoreceptors** in skin detect pressure; **chemoreceptors** in the nose and tongue detect chemicals
- Plants use the hormone **auxin** to respond to the direction of light (phototropism), gravity (gravitropism), and touch
- Single-celled organisms like *Amoeba* detect chemical gradients by chemoreception and move toward food or away from toxins
- Bacteria detect chemical gradients and swim toward nutrients — a process called **chemotaxis**

The response must be **appropriate** — it must increase the organism's chances of survival. A plant bending toward light increases photosynthesis. A hand withdrawing from a hot object prevents tissue damage.

## G — Growth

**Definition:** A permanent increase in size and **dry mass** due to an increase in cell number, cell size, or both.

Three aspects of this definition are frequently tested:

**Why "permanent"?** A sponge absorbs water and temporarily becomes larger. A balloon inflated with air becomes larger. Neither has grown biologically because the increase is not permanent — it reverses when water is removed or the balloon is deflated. True biological growth is irreversible under normal conditions.

**Why "dry mass" not "wet mass"?** Water content fluctuates dramatically — an organism that drinks 2 litres of water temporarily increases its wet mass by 2 kg without growing at all. Dry mass is measured by heating a sample to constant mass in an oven at 80°C, driving off all water. The remaining mass represents actual organic material (proteins, carbohydrates, lipids, nucleic acids) and reflects genuine biological growth.

**How does growth occur?** Either cells divide (mitosis → more cells) or existing cells enlarge (cells take in more cytoplasm, synthesise more organelles and structural proteins) or both. In plants, cell enlargement after division is the main mechanism of growth.

## R — Reproduction

**Definition:** The biological process by which organisms produce new individuals of the same species, ensuring the continuation of the species over time.

Without reproduction, every species would become extinct when its current members died. There are two fundamentally different types:

**Sexual reproduction** involves the fusion of two haploid gametes (egg and sperm in animals; pollen and ovum in flowering plants) from two parents. The resulting zygote has a unique combination of genetic material → **genetically varied offspring** → better able to adapt to changing environments through natural selection.

**Asexual reproduction** involves a single parent, no gametes, and produces genetically identical offspring (clones). Examples include:
- Binary fission in bacteria (one cell splits into two identical daughter cells in 20 minutes under optimal conditions)
- Budding in yeast (a small bud forms on the parent cell, grows, and detaches)
- Runners (stolons) in strawberry plants
- Tubers (potato eyes), bulbs (onion scales), rhizomes (ginger)

## E — Excretion

**Definition:** The removal from organisms of the waste products of **metabolism** (chemical reactions in cells), toxic substances, and substances that are present in excess of requirements.

The word "metabolism" is key. Excretion removes substances produced *inside* the body's cells as a result of chemical reactions. This distinguishes it sharply from egestion:

| Process | Material removed | Origin of material | Example |
|---------|-----------------|-------------------|---------|
| **Excretion** | Metabolic waste products | Produced inside cells by biochemical reactions | CO₂ from respiration, urea from amino acid breakdown |
| **Egestion** | Undigested food | Was never absorbed into cells; passed through the gut | Faeces (cellulose, dead bacteria, bile pigments) |

> **Do not confuse excretion with egestion.** Faeces is egested — it was never part of the body's metabolic processes and is not metabolic waste. This distinction appears in at least one question on almost every IGCSE Biology paper.

In humans, the main excretory products are:
- **Carbon dioxide** — from respiration in all body cells; excreted via the lungs
- **Urea** — formed in the liver when excess amino acids are broken down (deamination: amino group removed → ammonia → urea); excreted via the kidneys in urine
- **Excess water and mineral salts** — excreted via kidneys (urine) and skin (sweat)
- **Bile pigments** — from the breakdown of haemoglobin in old red blood cells; excreted in bile into the intestine and eventually leave in faeces (giving faeces their characteristic brown colour)

## N — Nutrition

**Definition:** The taking in and use of nutrients — organic molecules and inorganic mineral ions — for energy, growth, and development.

There are two fundamentally different nutritional strategies in living organisms:

**Autotrophic nutrition:** The organism manufactures its own organic food from inorganic raw materials using an external energy source.
- **Photoautotrophs** (green plants, algae, cyanobacteria): use light energy to fix CO₂ into glucose via photosynthesis
- **Chemoautotrophs** (some bacteria, e.g. *Nitrosomonas*): use energy released from inorganic chemical reactions to fix CO₂

**Heterotrophic nutrition:** The organism cannot make its own food and must obtain organic molecules by consuming other organisms or their products.
- **Holozoic** (most animals): ingest solid food and digest it internally
- **Saprotrophic** (bacteria, fungi): secrete digestive enzymes externally onto dead organic matter and absorb the soluble products
- **Parasitic**: live inside or on a host organism and obtain nutrients from it, harming the host`,
          groups: [],
          recap: [
            "State all seven characteristics of living organisms (MRSGREN) and give one example of each in a named organism other than a human. [7]",
            "Explain the difference between respiration and breathing, stating precisely where each process occurs and what each produces. [4]",
            "Explain why dry mass rather than wet mass is used to measure growth in a plant over a period of several weeks. [2]",
            "Evaluate the claim that viruses are living organisms, referring to at least three characteristics of life in your answer. [5]",
            "Distinguish between excretion and egestion. Give one named substance produced by each process in a mammal and state the organ responsible. [4]"
          ]
        },
        {
          title: "Classification — The Five Kingdoms and Taxonomic Hierarchy",
          body: `Classification (taxonomy) is the science of grouping organisms into a hierarchy based on shared structural, biochemical, and evolutionary features. A good classification system serves three purposes:

1. It allows prediction — if you know one member of a group has a feature, you predict others do too
2. It enables unambiguous communication between scientists in different countries and languages
3. It reflects evolutionary relationships — ideally, members of a group share a common ancestor

## The Taxonomic Hierarchy

The hierarchy progresses from the **most inclusive** group (containing the most organisms) to the **least inclusive** (containing the fewest):

**Kingdom → Phylum → Class → Order → Family → Genus → Species**

Memory aid: ==**K**eep **P**ots **C**lean **O**r **F**ood **G**oes **S**ticky==

Each organism belongs to exactly one group at each level. As you move down the hierarchy, groups become smaller and members more closely related. A **species** is the fundamental biological unit — defined as a group of organisms that can interbreed under natural conditions to produce **fertile offspring**. This last word is critical: horses (Equus caballus) and donkeys (Equus asinus) can mate to produce mules, but mules are sterile — horses and donkeys are therefore classified as different species.

## The Five Kingdoms

Modern classification recognises five kingdoms, distinguished by cell type, cell wall composition, nutritional strategy, and cellular organisation:

### Kingdom Animalia (Animals)
- Multicellular eukaryotes — cells have a membrane-bound nucleus and membrane-bound organelles
- **No cell wall** — plasma membrane is the outermost boundary of each cell
- **No chloroplasts** — cannot photosynthesise
- **Heterotrophic** nutrition by **ingestion** — take in solid food and digest it internally
- **Nervous coordination** — respond rapidly to stimuli via electrical nerve impulses
- Examples: all vertebrates (fish, amphibians, reptiles, birds, mammals), all invertebrates (insects, worms, crabs, jellyfish)

### Kingdom Plantae (Plants)
- Multicellular eukaryotes
- Cell wall made of **cellulose** microfibrils
- Cells contain **chloroplasts** with the green pigment chlorophyll
- **Autotrophic** nutrition by **photosynthesis** — manufacture food from CO₂ and water using light energy
- Store carbohydrate as **starch**
- Examples: mosses, ferns, cone-bearing plants (conifers), flowering plants (angiosperms)

### Kingdom Fungi
- Eukaryotes, mostly multicellular — body is a **mycelium** made of thread-like **hyphae**
- Cell wall made of **chitin** — a nitrogen-containing polysaccharide (NOT cellulose)
- **No chloroplasts** — cannot photosynthesise
- **Saprotrophic** nutrition — secrete **extracellular digestive enzymes** onto dead organic matter, then absorb the soluble products through the hyphal wall
- Store carbohydrate as **glycogen** (like animals, not starch)
- Examples: mushrooms, toadstools, moulds (*Penicillium*, *Mucor*), yeast (unicellular fungus)

> **Common exam trap:** Students often classify fungi as plants because they are stationary and grow from the ground. The four key differences are: (1) chitin cell walls (not cellulose), (2) saprotrophic not photosynthetic, (3) glycogen storage not starch, (4) heterotrophic not autotrophic.

### Kingdom Protoctists
- Eukaryotes, mostly **unicellular** (though some are colonial or multicellular)
- Extremely diverse — a "catch-all" kingdom for eukaryotes that don't fit the other kingdoms
- Include animal-like **protozoa**: *Amoeba* (moves by pseudopodia), *Plasmodium* (malaria parasite), *Paramecium*
- Include plant-like **algae**: *Spirogyra* (ribbon chloroplasts), *Chlorella* (spherical, used in research), *Chlamydomonas* (has flagella and eyespot)

### Kingdom Prokaryotes (Bacteria)
- **Prokaryotic cells** — no true membrane-bound nucleus; no membrane-bound organelles
- Genetic material is a single circular **DNA loop** (nucleoid region) in the cytoplasm, often accompanied by smaller circular **plasmids**
- Cell wall of **peptidoglycan** (murein) — a glycoprotein unique to bacteria
- Ribosomes are **70S** (smaller than eukaryotic 80S ribosomes — this difference is exploited by antibiotics)
- Reproduce by **binary fission** — one cell splits into two identical daughter cells; can double every 20 minutes under ideal conditions
- Nutritional diversity: heterotrophic (saprotrophic, parasitic) or autotrophic (photosynthetic, chemosynthetic)

## Prokaryotes vs Eukaryotes — The Fundamental Divide

| Feature | Prokaryote | Eukaryote |
|---------|-----------|-----------|
| True membrane-bound nucleus | Absent | Present |
| DNA form | Circular, no histones | Linear chromosomes with histones |
| Ribosomes | 70S | 80S |
| Mitochondria | Absent | Present |
| Endoplasmic reticulum | Absent | Present |
| Cell wall material | Peptidoglycan | Cellulose (plants), chitin (fungi), absent (animals) |
| Size | Typically 1–10 μm | Typically 10–100 μm |

## The Five Vertebrate Classes

All vertebrates share a vertebral column (backbone), an endoskeleton made of bone or cartilage, bilateral symmetry, a closed circulatory system with a chambered heart, and a centralised nervous system. They are divided into five classes based on thermal regulation, skin covering, gas exchange, and reproduction:

| Class | Thermal regulation | Skin | Gas exchange | Eggs/young |
|-------|-------------------|------|--------------|------------|
| Fish | Ectothermic (cold-blooded) | Wet scales + mucus | Gills throughout life | Soft unshelled eggs in water |
| Amphibia | Ectothermic | Moist, thin, permeable | Gills (larvae), lungs + skin (adults) | Jelly-covered eggs in water |
| Reptilia | Ectothermic | Dry, keratinised scales | Lungs only | Leathery-shelled eggs on land |
| Aves (Birds) | Endothermic (warm-blooded) | Feathers; scales on legs | Lungs + air sacs | Hard calcium carbonate shells |
| Mammalia | Endothermic | Hair or fur | Lungs only | Live young (mostly); milk-fed |

**Ectothermic** organisms rely on external heat sources (sun) to raise body temperature. They are metabolically less expensive to maintain but less active in cold. **Endothermic** organisms generate body heat internally through high metabolic rate, maintaining constant body temperature independent of environment — a huge advantage in cold climates but energetically costly.

## Binomial Nomenclature

Every species has a unique two-part scientific name. The system was devised by **Carl Linnaeus** in 1753 and is still used worldwide:

- **First word = Genus** — always begins with a **capital letter**
- **Second word = species** — always begins with a **lower case letter**
- Both words must be **italicised** (when typed) or **underlined** (when handwritten)
- After the full name has been written once in a text, the genus may be abbreviated to its initial: *H. sapiens* for *Homo sapiens*

**Why use Latin?** Latin is a dead language — it doesn't evolve, so names remain stable. It allows scientists worldwide to communicate without ambiguity regardless of their native language. The tiger is called *Panthera tigris* in English, Spanish, Arabic, Chinese, and Japanese scientific papers — the same name, instantly understood everywhere.`,
          groups: [],
          recap: [
            "Name the five kingdoms of living organisms and for each kingdom state: (a) cell type — eukaryotic or prokaryotic, (b) nutritional strategy, (c) one named example. [10]",
            "Explain why fungi are placed in a separate kingdom from plants. Give four specific differences between fungi and plants. [4]",
            "A student writes the scientific name of the domestic cat as FELIS CATUS. State two errors and rewrite the name correctly. [3]",
            "State four features that all mammals share with birds, and two features that distinguish them. [6]",
            "Explain what is meant by a species, using a named example to illustrate your answer. [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Organisation of the Organism",
      intro: "Life is organised at multiple levels of increasing complexity: molecules → organelles → cells → tissues → organs → organ systems → organism. Each level possesses emergent properties absent from the level below. Understanding the **ultrastructure** of cells — their internal components visible only by electron microscopy — is the foundation for explaining how every cell function works at a molecular level. Specialised cells then group into tissues to divide labour, and tissues organise into organs, allowing multicellular organisms to carry out the complexity of life that single cells alone could never achieve.",
      subheadings: [
        {
          title: "Cell Ultrastructure — Animal and Plant Cells",
          body: `**Cell ultrastructure** refers to the detailed internal organisation of cells as revealed by the **transmission electron microscope (TEM)**, which can resolve structures as small as 0.1 nm — roughly 1,000 times better than the best light microscope.

:::svg[Comparative Ultrastructure — Animal Cell vs Plant Cell]
<svg viewBox="0 0 540 280" width="540" height="280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="540" height="280" fill="#f8fafc" rx="12"/>
  <text x="270" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Cell Ultrastructure — Key Organelles</text>
  <!-- ANIMAL CELL (left) -->
  <text x="135" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">ANIMAL CELL</text>
  <ellipse cx="135" cy="145" rx="118" ry="105" fill="#fefce8" stroke="#eab308" stroke-width="2" stroke-dasharray="5,3"/>
  <!-- Nucleus -->
  <ellipse cx="110" cy="125" rx="38" ry="30" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="110" y="121" text-anchor="middle" font-size="8.5" fill="#1d4ed8" font-weight="600">Nucleus</text>
  <text x="110" y="132" text-anchor="middle" font-size="7.5" fill="#1e40af">controls cell</text>
  <circle cx="104" cy="115" r="7" fill="#93c5fd" stroke="#2563eb" stroke-width="1"/>
  <text x="104" y="118" text-anchor="middle" font-size="6" fill="#1d4ed8">Nu</text>
  <!-- Mitochondria x2 -->
  <ellipse cx="175" cy="110" rx="22" ry="12" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="175" y="113" text-anchor="middle" font-size="7" fill="#15803d">Mito.</text>
  <ellipse cx="162" cy="155" rx="20" ry="11" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="162" y="158" text-anchor="middle" font-size="7" fill="#15803d">Mito.</text>
  <!-- Ribosomes -->
  <circle cx="90" cy="160" r="3.5" fill="#f97316"/><circle cx="102" cy="172" r="3.5" fill="#f97316"/>
  <circle cx="148" cy="175" r="3.5" fill="#f97316"/><circle cx="78" cy="180" r="3.5" fill="#f97316"/>
  <!-- Rough ER wiggly line -->
  <path d="M58 140 Q65 135 72 140 Q79 145 86 140 Q93 135 100 140" stroke="#a855f7" stroke-width="1.5" fill="none"/>
  <text x="68" y="132" text-anchor="middle" font-size="7" fill="#7c3aed">Rough ER</text>
  <!-- Label outer membrane -->
  <text x="240" y="145" font-size="8" fill="#b45309">Cell membrane</text>
  <line x1="235" y1="143" x2="220" y2="155" stroke="#b45309" stroke-width="1"/>

  <!-- PLANT CELL (right) -->
  <text x="405" y="36" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">PLANT CELL</text>
  <!-- Cell wall (solid rect outer) -->
  <rect x="290" y="50" width="235" height="195" rx="5" fill="none" stroke="#15803d" stroke-width="4"/>
  <text x="527" y="145" font-size="8.5" fill="#166534" transform="rotate(90,527,145)" text-anchor="middle">Cell wall (cellulose)</text>
  <!-- Cell membrane inside wall -->
  <rect x="296" y="56" width="223" height="183" rx="4" fill="#fefce8" stroke="#eab308" stroke-width="1.5" stroke-dasharray="4,2"/>
  <!-- Large vacuole -->
  <ellipse cx="405" cy="155" rx="78" ry="68" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
  <text x="405" y="152" text-anchor="middle" font-size="9.5" fill="#0369a1" font-weight="600">Vacuole</text>
  <text x="405" y="165" text-anchor="middle" font-size="8" fill="#0369a1">(cell sap)</text>
  <!-- Nucleus -->
  <ellipse cx="328" cy="95" rx="30" ry="24" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="328" y="99" text-anchor="middle" font-size="8.5" fill="#1d4ed8">Nucleus</text>
  <!-- Chloroplasts -->
  <ellipse cx="488" cy="88" rx="20" ry="11" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
  <text x="488" y="91" text-anchor="middle" font-size="7.5" fill="#15803d">Chloro.</text>
  <ellipse cx="494" cy="155" rx="20" ry="11" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
  <text x="494" y="158" text-anchor="middle" font-size="7.5" fill="#15803d">Chloro.</text>
  <!-- Mitochondria -->
  <ellipse cx="345" cy="175" rx="18" ry="10" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="345" y="178" text-anchor="middle" font-size="7" fill="#15803d">Mito.</text>
</svg>
:::

## Structures Present in ALL Eukaryotic Cells

### The Cell (Plasma) Membrane

The plasma membrane is a **phospholipid bilayer** approximately 7–8 nm thick — so thin that 10,000 of them stacked would equal the thickness of a single sheet of paper. Each phospholipid molecule has a hydrophilic (water-loving) phosphate "head" that faces the aqueous environments outside and inside the cell, and two hydrophobic (water-repelling) fatty acid "tails" that face inward, away from water. This arrangement is self-organising and forms spontaneously in water.

Embedded in the bilayer are **proteins** that serve multiple functions:

- **Channel proteins** — form pores of specific sizes and charges that allow certain ions and small molecules to pass by facilitated diffusion (e.g. aquaporins for water, potassium channels for K⁺ ions)
- **Carrier proteins** — bind to specific molecules and undergo shape changes to transport them across, used in both facilitated diffusion and active transport
- **Receptor proteins** — bind specific hormones or neurotransmitters (e.g. insulin receptors on liver and muscle cells), triggering a response inside the cell
- **Glycoproteins** — proteins with sugar chains attached; involved in cell-cell recognition, the immune system's ability to identify "self" versus "foreign", and communication between cells

The membrane is described as ==selectively permeable== — it controls which substances can enter and leave, maintaining the cell's specific internal composition against concentration gradients.

### The Nucleus

The nucleus is the control centre of the cell, containing the genetic instructions for making every protein the cell will ever produce. It is surrounded by the **nuclear envelope** — a double membrane (two lipid bilayers) perforated by **nuclear pores** (50–100 nm diameter) through which mRNA molecules exit to reach ribosomes in the cytoplasm.

Inside the nucleus, DNA is found as **chromatin** — long threads of DNA wrapped around globular **histone proteins** and condensed into chromosomes during cell division. The nucleus also contains the **nucleolus** — a dense region where ribosomal RNA (rRNA) is transcribed from DNA and ribosome subunits are assembled before export to the cytoplasm.

### Mitochondria

Mitochondria are the primary site of **aerobic respiration** — the process that produces the ATP used to power virtually every cellular activity. Each mitochondrion has a **double membrane system**:

- The **outer membrane** is smooth and acts as a boundary between the mitochondrion and the cytoplasm
- The **inner membrane** is extensively folded into projections called **cristae**, which dramatically increase the surface area available for the electron transport chain (the most productive stage of aerobic respiration, producing ~32 ATP per glucose molecule)
- The internal fluid enclosed by the inner membrane is the **matrix**, where the Krebs cycle enzymes are found

Cells with the highest energy demands have the most mitochondria per cell:

- Cardiac (heart) muscle cells — must beat continuously for a lifetime
- Slow-twitch skeletal muscle fibres — endurance activity
- Liver hepatocytes — metabolically the most active cells, performing over 500 distinct biochemical functions
- Sperm mid-piece — powers the flagellum for fertilisation

### Ribosomes

Ribosomes are the molecular machines that translate the genetic code in mRNA into polypeptide chains — the first step in making a protein. They consist of two subunits, each made of ribosomal RNA and proteins, and they work by moving along the mRNA molecule, reading three nucleotides (a codon) at a time and adding the corresponding amino acid to the growing chain.

Eukaryotic ribosomes are **80S** (the "S" stands for Svedberg units, a measure of how fast they sediment in a centrifuge). Prokaryotic ribosomes are **70S** — this size difference is medically important because antibiotics like streptomycin and erythromycin block 70S ribosomes selectively, killing bacteria without harming the patient's 80S ribosomes.

Free ribosomes in the cytoplasm make proteins for use within the cell. Ribosomes bound to the **rough endoplasmic reticulum** make proteins destined for export from the cell or insertion into membranes.

### Endoplasmic Reticulum (ER)

The ER is an extensive network of interconnected membrane-bound sacs and tubules extending from the outer nuclear envelope through the cytoplasm. Two distinct types:

**Rough ER (RER):** Studded with ribosomes on its outer surface, giving it the rough appearance in electron micrographs. Proteins made by RER-bound ribosomes enter the RER lumen, are modified (e.g. disulfide bonds formed, signal sequences cleaved), then packaged into vesicles and transported to the Golgi apparatus.

**Smooth ER (SER):** No ribosomes; found especially in liver cells and steroid-secreting cells. Functions include synthesis of lipids and steroid hormones, metabolism of carbohydrates, and detoxification of drugs and toxins (e.g. the SER of liver cells contains enzymes that oxidise many drugs and poisons to make them water-soluble for excretion).

### Golgi Apparatus

Named after Camillo Golgi who discovered it in 1898, the Golgi apparatus consists of stacks of flattened membrane sacs called **cisternae**. It functions as the cell's "post office":

- Receives vesicles (membrane-bound sacs) budding off the rough ER
- Modifies the proteins inside (e.g. adding or modifying carbohydrate side chains to form glycoproteins)
- Sorts proteins into three destinations: secretory vesicles (proteins exported from the cell by exocytosis), lysosomes (proteins for intracellular digestion), or the cell membrane itself (membrane proteins)

## Additional Structures in Plant Cells Only

### The Cell Wall

Outside the plasma membrane, plant cells have a cell wall made of **cellulose microfibrils** embedded in a polysaccharide and protein matrix. The cellulose microfibrils are laid down in different orientations in successive layers, creating a structure with remarkable tensile strength — comparable to steel wire for its weight.

Functions:
- Maintains the shape of the cell and the plant's overall form
- Resists the expansion of the cell when it takes up water by osmosis, creating **turgor pressure** that keeps non-woody plants rigid (like an inflated inner tube)
- Is **fully permeable** — unlike the plasma membrane, the cell wall does not control which substances pass through it; any molecule below a certain size can pass freely

### Chloroplasts

Chloroplasts are the sites of photosynthesis. Each chloroplast is enclosed by a **double membrane envelope**. Inside are:

- **Thylakoids** — flattened, disc-shaped membrane sacs containing chlorophyll and other photosynthetic pigments. Thylakoids are stacked into piles called **grana** (singular: granum). The light-dependent reactions of photosynthesis occur here.
- **Stroma** — the fluid surrounding the grana, containing enzymes of the Calvin cycle (light-independent reactions), along with the chloroplast's own circular DNA and 70S ribosomes (evidence for the endosymbiotic theory — chloroplasts evolved from ancient photosynthetic bacteria)

Chloroplasts are only found in cells exposed to light. Root cells lack them entirely. Stem and leaf cells have varying densities depending on their exposure to light.

### Large Central Vacuole

Plant cells typically have one large central vacuole that may occupy 80–90% of the cell's volume in mature cells. It is bounded by the **tonoplast** (vacuolar membrane) and filled with **cell sap** — a concentrated solution of sugars, amino acids, organic acids, and mineral ions.

When the cell absorbs water by osmosis, the vacuole swells and pushes the cytoplasm outward against the cell wall, creating **turgor pressure** — the internal pressure that keeps non-woody plant organs (leaves, young stems) firm. When the vacuole loses water, the cell becomes **flaccid** and the plant wilts.

The vacuole also stores:
- Pigments (anthocyanins in red and purple flowers and fruits)
- Waste products and secondary metabolites
- Enzymes that digest organelles during programmed cell death

## Summary Comparison

| Feature | Animal cell | Plant cell |
|---------|------------|------------|
| Cell membrane | ✓ | ✓ |
| Nucleus | ✓ | ✓ |
| Mitochondria | ✓ | ✓ |
| Ribosomes (80S) | ✓ | ✓ |
| Rough/smooth ER | ✓ | ✓ |
| Golgi apparatus | ✓ | ✓ |
| Cell wall (cellulose) | ✗ | ✓ |
| Chloroplasts | ✗ | ✓ (in green cells) |
| Large permanent vacuole | ✗ | ✓ |
| Centrioles | ✓ | ✗ (in higher plants) |`,
          groups: [],
          recap: [
            "Describe the structure of a mitochondrion and explain, in detail, how its structure is adapted to its function in aerobic respiration. [6]",
            "Explain why plant cells do not burst when placed in pure water, even though animal cells in the same conditions swell and burst (lysis). [4]",
            "A liver cell and a skin cell both contain a nucleus with the same DNA. Explain why the liver cell contains abundant smooth endoplasmic reticulum and many mitochondria, while the skin cell has relatively few of each. [4]",
            "Describe the route taken by a secretory protein from its synthesis on a ribosome to its release from the cell. Name all the organelles involved in order. [4]",
            "State three structures visible in a plant cell under a light microscope that would not be visible in an animal cell. [3]"
          ]
        },
        {
          title: "Specialised Cells, Tissues, Organs and Organ Systems",
          body: `During development, cells differentiate — they switch on certain genes and switch off others, developing a unique structure precisely adapted to one specific function. A specialised cell sacrifices generalist capabilities to be maximally efficient at its particular role.

## Red Blood Cell (Erythrocyte) — Transporting Oxygen

Function: Carry oxygen from lungs to respiring tissues, and assist in transporting carbon dioxide back to lungs.

Adaptation | How it serves the function
---|---
**Biconcave disc shape** | Compared to a sphere of the same volume, the biconcave shape increases the surface area by approximately 20–30%, giving O₂ molecules a shorter average diffusion distance to the cell's interior
**No nucleus** | Nucleus removed during maturation → ~280 million haemoglobin molecules fit in each cell instead (a cell with a nucleus holds significantly fewer)
**No mitochondria** | No cellular machinery to consume the O₂ being carried; cell obtains energy anaerobically from glycolysis → no O₂ wastage
**Thin, highly flexible membrane** | Red blood cells are ~8 μm diameter but must squeeze through capillaries as narrow as 5 μm — they deform dramatically without bursting, then spring back
**Haemoglobin** | The red oxygen-carrying pigment, each molecule carrying 4 O₂ (one per haem group); loads cooperatively at high pO₂ in lungs, unloads cooperatively at low pO₂ in tissues

## Sperm Cell — Delivering Genetic Material to Egg

The sperm cell is optimised for one purpose: swimming to and fertilising an egg cell.

- **Streamlined head** — reduces drag in reproductive tract fluids, allowing faster swimming
- **Acrosome** (enzyme-filled vesicle capping the head) — contains hyaluronidase and acrosin enzymes that digest the zona pellucida (glycoprotein coat) surrounding the egg, allowing the sperm nucleus to enter
- **Haploid nucleus** — contains 23 chromosomes (half the normal number) so that fertilisation restores the diploid number of 46
- **Mid-piece densely packed with mitochondria** — spiral arrangement around the axoneme (core of the flagellum); aerobic respiration in these mitochondria provides ATP continuously for the ATP-driven motor proteins (dyneins) that power flagellar beating; sperm must maintain motility for 24–72 hours after ejaculation
- **Long flagellum** — the flagellum is driven by dynein motor proteins sliding adjacent microtubules; its sinusoidal beating propels the sperm at approximately 5 mm per minute

## Root Hair Cell — Absorbing Water and Mineral Ions

Root hair cells extend from the outermost layer (epidermis) of roots into the soil, dramatically increasing the root surface in contact with soil water.

- **Long, thin hair-like extension** — a single root hair cell can be 1 mm or more long; the total surface area of root hair cells of a single rye plant was measured at over 400 m² — remarkable for a root system you could hold in your hand
- **No chloroplasts** — underground, completely dark; no point having machinery for photosynthesis. This also means no competition for resources (membrane space, enzymes) that aren't needed
- **Thin cell wall** — maximises water uptake by osmosis; thin walls offer less resistance to water movement
- **Large central vacuole** with high solute concentration — maintains a water potential gradient: soil water (higher water potential) → root hair cell cytoplasm (lower water potential); drives osmosis inward
- **Abundant mitochondria** — provide ATP for active transport of mineral ions (NO₃⁻, K⁺, Mg²⁺, PO₄³⁻) from soil water into the cell against their concentration gradients

## Ciliated Epithelial Cells — Removing Debris from Airways

These cells line the trachea and bronchi of the respiratory tract, working to remove the continuous stream of dust particles, pollen, bacteria, and other inhaled foreign material that gets trapped in mucus.

- **Hundreds of cilia** per cell on the apical (luminal) surface — each cilium is approximately 0.25 μm diameter and 5–10 μm long, containing the **9+2 arrangement** of microtubules
- **Coordinated metachronal beating** — cilia don't all beat together (that would create turbulence); instead they beat in waves, like a Mexican wave moving through a crowd, sweeping mucus efficiently upward toward the throat at approximately 1–2 cm per minute
- **Many mitochondria** — the dynein ATPase motors that drive cilia require constant ATP; ciliated cells contain 200–300 mitochondria per cell

## Levels of Organisation

Specialised cells are organised into increasingly complex structures:

**Cell → Tissue → Organ → Organ System → Organism**

- **Tissue**: Group of cells with the same structure and function working together. Examples: striated muscle tissue (parallel muscle fibres for contraction), xylem tissue (dead hollow tubes for water transport), adipose tissue (fat-storing cells for energy reserve and insulation)
- **Organ**: Structure containing several tissue types working together for a common purpose. Examples: the stomach contains muscular tissue (churning), epithelial tissue (lining and secreting), connective tissue (supporting), nervous tissue (coordinating); the leaf contains epidermis, palisade mesophyll, spongy mesophyll, vascular bundles, and guard cells
- **Organ system**: Group of organs with a shared overall function. Examples: digestive system, circulatory system, nervous system, reproductive system`,
          groups: [],
          recap: [
            "Explain three adaptations of a red blood cell to its function of carrying oxygen. For each adaptation, explain precisely how it improves oxygen transport. [6]",
            "Compare the function of mitochondria in a sperm cell and in a root hair cell. [4]",
            "Explain why a root hair cell has no chloroplasts but has many mitochondria. [4]",
            "A student says 'all cells in an organism contain the same DNA but different cells look completely different'. Explain how this is possible. [3]",
            "Place the following in order from smallest to largest: organ, organism, cell, organ system, tissue. Explain the relationship between consecutive levels. [3]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Movement In and Out of Cells",
      intro: "The survival of every cell depends on precise control over which substances enter and leave across the plasma membrane. Three mechanisms govern this movement: **diffusion** (passive, down a concentration gradient), **osmosis** (passive movement of water specifically), and **active transport** (energy-requiring movement against a gradient). Mastering these three processes in precise detail — including the exact conditions under which each operates, what drives each, and real biological examples — is among the most heavily tested areas in IGCSE Biology.",
      subheadings: [
        {
          title: "Diffusion — Passive Movement Down a Concentration Gradient",
          body: `## Definition and Core Principle

**Diffusion** is the ==net movement== of particles from a region of **higher concentration** to a region of **lower concentration**, as a result of the **random kinetic motion** of particles. It is a **passive process** — no energy (ATP) is required because the kinetic energy of the particles themselves drives the movement.

The word ==net== deserves careful attention. Particles do not stop moving once they reach the high-concentration region — they continue moving randomly in all directions. What changes is the **balance** of movement: when concentrations are unequal, more particles cross from high to low than from low to high in any given time interval, simply because there are more particles on the high-concentration side to start with. This statistical imbalance constitutes the net movement we call diffusion. When concentrations equalise (**equilibrium**), the same number of particles cross in each direction per second and there is no further net change.

## Why Diffusion Requires No Energy

The kinetic energy of particles at any temperature above absolute zero (0 K = −273°C) means they are always moving. Molecules in a gas at room temperature move at hundreds of metres per second and collide billions of times per second with each other and with container walls. Molecules in solution at room temperature, though slower due to surrounding water molecules, still move rapidly and collide constantly. This pre-existing kinetic energy — not ATP — is what drives diffusion. The cell doesn't need to "do" anything; diffusion happens automatically whenever a concentration gradient exists.

## Factors That Affect the Rate of Diffusion

The rate of diffusion can be increased by:

**1. Steeper concentration gradient**

The greater the difference in concentration between two regions, the greater the net movement per unit time. This is why the lungs are ventilated continuously — breathing constantly replenishes O₂ in the alveoli and removes CO₂, maintaining the steep gradients that drive rapid gas exchange. If ventilation stopped, the gradients would collapse and gas exchange would slow to near zero even with a perfect alveolar surface.

**2. Greater surface area**

More surface area provides more "space" for particles to cross simultaneously. This is why exchange surfaces in biology are always elaborately folded or extended:
- Alveoli provide ~70 m² of surface area in the lungs
- Intestinal villi and microvilli provide ~300 m² in the small intestine
- Root hair cells extend the root surface area by 400–600%

**3. Shorter diffusion distance**

By Fick's Law, the rate of diffusion is inversely proportional to the square of the diffusion distance. Halving the diffusion distance quadruples the rate. This is why exchange surfaces are always very thin:
- Alveolar walls are only ~0.2 μm thick (one cell layer)
- Capillary walls are one cell thick (~0.5 μm)
- Root hair cell walls are very thin

**4. Higher temperature**

Temperature is a direct measure of average kinetic energy. Higher temperature → particles move faster → more collisions → faster diffusion. This is also why fever accelerates metabolic processes: every 10°C rise approximately doubles the rate of most diffusion-dependent reactions.

**5. Smaller particle size (for gases)**

Lighter molecules move faster at the same temperature (Graham's Law). Hydrogen gas diffuses ~4× faster than oxygen; oxygen diffuses faster than carbon dioxide; small ions diffuse faster than large molecules.

## Fick's Law

$$\\text{Rate of diffusion} \\propto \\frac{\\text{Surface area} \\times \\text{Concentration difference}}{\\text{Diffusion distance}}$$

This equation, known as **Fick's Law of diffusion**, quantifies everything discussed above. Every biological exchange surface is a physical realisation of maximising this equation: maximise surface area, maximise concentration difference (by maintaining steep gradients), and minimise diffusion distance.

## The Alveolus — A Masterclass in Diffusion Adaptation

The alveoli of the lungs are the primary site of gas exchange in humans. They are so perfectly adapted for maximum diffusion rate that examining them is essentially a study of Fick's Law made biological:

- **Surface area:** ~700 million alveoli with a total surface area of 70–80 m² — roughly the area of a singles tennis court, folded into the volume of two fists
- **Diffusion distance:** The blood-gas barrier consists of the alveolar epithelium (0.1 μm), the basement membranes (0.05 μm), and the capillary endothelium (0.1 μm) — total ~0.2–0.5 μm
- **Concentration gradient maintained:** Ventilation constantly refreshes alveolar air (replacing O₂, removing CO₂); blood flow through pulmonary capillaries continuously carries O₂ away and delivers CO₂
- **Moist surface:** The alveolar lining fluid allows gases to dissolve before crossing the membrane (gases must be dissolved to diffuse across a membrane)

At rest, an adult exchanges approximately 250 mL of O₂ per minute across this surface. During maximum exercise, this rises to ~3,000 mL per minute — a 12-fold increase, achieved by opening additional capillaries (increasing perfusion surface area) and breathing more deeply (increasing gradient).

## Diffusion in Everyday Biology

Beyond the lungs, diffusion is the mechanism for:

- CO₂ and O₂ exchange at the gills of fish — same Fickian principles, thin lamellae with large surface area and counter-current blood flow
- CO₂ entry into leaves through stomata and O₂ exit during photosynthesis
- Glucose and amino acids moving from blood capillaries into tissue fluid and then into body cells
- Neurotransmitters crossing synaptic clefts (~20 nm wide — at this scale, diffusion takes only microseconds)`,
          groups: [],
          recap: [
            "Define diffusion and explain why it is described as a passive process. [3]",
            "Describe and explain four structural features of the alveolus that maximise the rate of gas exchange by diffusion. [8]",
            "Using Fick's Law, explain why the gut wall is folded into villi and microvilli. [3]",
            "A student places a crystal of potassium manganate(VII) in still water at 20°C. Describe what they observe over 24 hours and explain the observation. [4]",
            "Explain why diffusion alone could not supply sufficient oxygen to the cells deep inside the body of a large multicellular organism like a human. [3]"
          ]
        },
        {
          title: "Osmosis — Water Movement Across Membranes",
          body: `## Definition

**Osmosis** is the ==net movement== of **water molecules** from a region of ==higher water potential== to a region of ==lower water potential==, through a **partially permeable membrane**.

Every word of this definition is important and frequently tested:

**Net movement** — as with diffusion, water molecules move in both directions across any permeable membrane. Osmosis describes the direction of the imbalance, not unidirectional movement.

**Water molecules specifically** — osmosis refers only to the movement of water. Solutes (dissolved substances) do not move by osmosis; they might move by diffusion if the membrane is permeable to them, but the osmosis of water is a separate process driven by water potential difference.

**Water potential (Ψ, psi)** — a measure of the tendency of water molecules to move from one region to another. It is measured in pressure units (kilopascals, kPa) and follows these rules:

- **Pure water** has the highest possible water potential = **0 kPa**
- Any dissolved substance (solute) lowers the water potential → solutions always have **negative** water potential values
- The more concentrated the solution (more solute dissolved), the more negative the water potential
- Water always moves: from **less negative** to **more negative** water potential (i.e. from higher to lower Ψ)

**Partially permeable membrane** — a membrane with pores large enough for water molecules to pass through freely, but too small (or with the wrong charge or polarity) for most solute molecules. The plasma membrane of cells is partially permeable.

## Why Does Osmosis Happen?

In a solution, solute molecules are surrounded by shells of water molecules (hydration shells). This "ties up" some water molecules, reducing their freedom to move. The more concentrated the solution, the more water molecules are "tied up" and unavailable for movement — the lower (more negative) the water potential. When a partially permeable membrane separates a dilute solution (less "tied up" water) from a concentrated solution (more "tied up" water), there is a net movement of "free" water molecules from the dilute side to the concentrated side — this is osmosis.

## Osmosis in Plant Cells

Understanding what happens to a plant cell placed in solutions of different concentrations is one of the most commonly tested topics in IGCSE Biology.

**Scenario 1: Plant cell placed in pure water (or very dilute solution)**

The solution outside has higher water potential (less negative) than the cell contents. Water enters the cell by osmosis. The vacuole expands. The cytoplasm presses outward against the cell wall. The cell wall — being strong and elastic — resists this expansion, creating an inward force called **wall pressure** (or turgor pressure). The cell becomes **turgid** — firm and rigid. The plant cell does NOT burst because the cell wall prevents unlimited expansion. Eventually, the wall pressure equals the osmotic pressure driving water in, and net movement stops even if the water potential is still different.

**Scenario 2: Plant cell placed in concentrated solution (hypertonic solution)**

The solution outside has lower water potential (more negative) than the cell contents. Water leaves the cell by osmosis. The vacuole shrinks. The cytoplasm decreases in volume and eventually pulls away from the cell wall. This separation of the cytoplasm from the cell wall is called **plasmolysis**. The cell is now **plasmolysed** and **flaccid**. The point at which the cytoplasm just begins to pull away is called **incipient plasmolysis** — this is the point at which the cell's water potential equals that of the external solution.

**Scenario 3: Isotonic solution**

The external solution has the same water potential as the cell contents. No net movement of water. The cell maintains its original size.

| External solution | Water movement | Cell state | What happens |
|------------------|---------------|-----------|-------------|
| Hypotonic (more dilute) | INTO cell | Turgid | Vacuole swells, wall pressure builds, cell rigid |
| Isotonic (same concentration) | None (net) | No change | Cell unchanged |
| Hypertonic (more concentrated) | OUT of cell | Flaccid → plasmolysed | Vacuole shrinks, cytoplasm pulls from wall |

## Osmosis in Animal Cells

Animal cells have no cell wall. Therefore:

- **In hypotonic solution (e.g. pure water):** Water enters by osmosis → cell swells → no wall to resist → cell bursts (**lysis**). In red blood cells, this is called **haemolysis** — the cell membrane ruptures and haemoglobin leaks out.
- **In hypertonic solution:** Water leaves by osmosis → cell shrinks and shrivels → in red blood cells, the membrane buckles inward to produce a spiky appearance called **crenation**.
- **In isotonic solution (e.g. normal blood plasma, ~0.9% NaCl):** No net water movement → normal cell volume maintained. Blood plasma is maintained at a water potential that is isotonic to red blood cells — this is why saline drips given to patients are carefully made to the right concentration.

## Investigating Osmosis — The Potato Cylinder Experiment

This classic experiment measures osmosis directly by observing mass or length changes in potato tissue placed in solutions of different concentrations.

**Method:**

1. Cut potato cylinders of equal mass (e.g. 5.0 g each) from the same potato (to ensure the same starting water potential)
2. Blot surfaces dry and weigh each cylinder accurately (initial mass)
3. Place each cylinder in a different concentration of sucrose solution (e.g. 0, 0.2, 0.4, 0.6, 0.8, 1.0 mol/dm³) in a sealed container for 30 minutes
4. Remove, blot dry, re-weigh (final mass)
5. Calculate: **% change in mass** = (final − initial) / initial × 100

**Results pattern:**

- In very dilute solutions: mass **increases** (water enters, cell becomes turgid — net osmosis into cell)
- In very concentrated solutions: mass **decreases** (water leaves, cell becomes flaccid — net osmosis out of cell)
- At one specific concentration: **no change in mass** — this is the **isotonic point** and its water potential equals the water potential of the potato cell contents (typically around −600 to −800 kPa for potato)

**Why % change rather than absolute mass change?** Because if cylinders start at slightly different masses (despite attempts to cut them equally), the absolute mass change would be biased. Percentage change standardises for initial mass, making comparisons valid.`,
          groups: [],
          recap: [
            "Define osmosis precisely, including the terms water potential and partially permeable membrane. [3]",
            "Explain what happens to a plant cell at the cellular level when it is placed in a concentrated sucrose solution. Use the terms plasmolysis, flaccid, vacuole, and water potential in your answer. [6]",
            "A student places red blood cells in distilled water. Describe and explain what they observe. [3]",
            "A potato cylinder of mass 4.8 g is placed in a 0.6 mol/dm³ sucrose solution. After 30 minutes it has a mass of 4.2 g. Calculate the percentage change in mass and explain what this tells you about the potato cell water potential. [4]",
            "Explain why patients receiving saline (salt solution) drips in hospital are given 0.9% NaCl solution rather than pure water. [3]"
          ]
        },
        {
          title: "Active Transport — Moving Against the Gradient",
          body: `## Definition

**Active transport** is the movement of molecules or ions across a cell membrane from a region of **lower concentration** to a region of **higher concentration** — against the concentration gradient — using **energy from ATP** and **specific carrier protein pumps** embedded in the membrane.

This definition distinguishes active transport from diffusion and osmosis in three critical ways:

1. **Direction:** Against the concentration gradient (from low to high) — the opposite of diffusion
2. **Energy requirement:** Requires ATP produced by cellular respiration — if respiration is inhibited, active transport stops immediately
3. **Mechanism:** Uses specific carrier proteins that change shape when ATP binds, mechanically transporting molecules across

## The Mechanism in Detail

Each carrier protein that performs active transport is essentially a molecular pump. When ATP binds to the protein on the cytoplasmic side, the phosphate group is transferred to the protein (phosphorylation), causing a **conformational change** (a change in the 3D shape of the protein). This shape change moves the substrate molecule from the low-concentration side of the membrane to the high-concentration side and releases it. The phosphate group then detaches (dephosphorylation), the protein returns to its original shape, and the cycle can repeat. One cycle of this "pump" transports one or a small number of molecules and consumes one ATP.

The best-understood example is the **sodium-potassium pump (Na⁺/K⁺-ATPase)** found in animal cell membranes, which pumps 3 Na⁺ out and 2 K⁺ in per cycle, maintaining the ionic gradients essential for nerve impulses and muscle contraction.

## Evidence That Active Transport Requires Respiration

If you place root cells in anaerobic conditions (no oxygen) — or treat them with metabolic poisons like cyanide (which blocks the electron transport chain) or dinitrophenol (which uncouples ATP synthesis) — mineral ion uptake stops completely even though diffusion and osmosis continue normally. This is the standard experimental evidence that active transport, unlike passive transport, depends on aerobic respiration to provide ATP.

## Key Biological Examples of Active Transport

### Root hair cells — mineral ion uptake from soil

Soil water contains mineral ions (nitrate NO₃⁻, potassium K⁺, magnesium Mg²⁺, phosphate PO₄³⁻) at very **low concentrations** — often far lower than the concentration already inside the root cell cytoplasm. Diffusion would move these ions out of the root, not in. Active transport pumps ions from the soil water INTO root cells against their concentration gradients.

This is why waterlogged soils (anaerobic → no ATP production → no active transport) cause mineral deficiency in plants even when the mineral ions are present in the soil water.

### Small intestine — glucose absorption after a meal

After digestion, glucose is produced in the intestinal lumen. In the early stages of a meal, when glucose concentration in the lumen is high, glucose enters the enterocytes (intestinal epithelial cells) partly by diffusion. But as absorption proceeds, lumen concentration falls while blood glucose may still be high. Active transport in the apical membrane of enterocytes continues to absorb glucose against its gradient, ensuring near-complete absorption of all digested glucose — typically over 98% efficiency.

### Kidney tubules — glucose reabsorption from filtrate

The kidneys filter the blood, and glucose enters the tubule filtrate. All of this glucose is reabsorbed back into the blood by active transport in the proximal convoluted tubule — 100% recovery in healthy individuals. This is why glucose does not normally appear in urine. In uncontrolled Type 1 diabetes, blood glucose is so high that the tubular capacity for active reabsorption is exceeded → glucose "spills" into urine (glycosuria).

### Nerve cells — sodium-potassium pump

After a nerve impulse, Na⁺ ions have entered the axon and K⁺ ions have left, reversing the resting potential. The Na⁺/K⁺ pump actively restores the original ionic distribution (high K⁺ inside, high Na⁺ outside), pumping 3 Na⁺ out and 2 K⁺ in per cycle, consuming about 40% of the brain's total ATP supply.

## Comparing the Three Mechanisms

| Feature | Diffusion | Osmosis | Active transport |
|---------|-----------|---------|-----------------|
| Energy (ATP) required? | No | No | Yes |
| Direction | High → low concentration | High → low water potential | Low → high concentration |
| Membrane required? | Not always | Yes (partially permeable) | Yes |
| Substance moved | Any molecule/ion | Water only | Specific molecules/ions |
| Carrier protein required? | Sometimes (facilitated) | No | Yes (specific pumps) |
| Stops if respiration inhibited? | No | No | Yes |

> **The key diagnostic question in an exam:** If a substance moves against its concentration gradient, it MUST be active transport. If it moves with the gradient and no energy is needed, it is diffusion (or osmosis for water). No exceptions.`,
          groups: [],
          recap: [
            "Define active transport and explain why it requires energy from ATP but diffusion does not. [4]",
            "Explain why mineral ion absorption by root hair cells requires active transport rather than diffusion, even when the soil water contains mineral ions. [3]",
            "A student treats a section of root in a solution containing potassium ions. In experiment A, the root is well-oxygenated. In experiment B, the root is in anaerobic conditions. Predict and explain the results of both experiments. [5]",
            "Create a comparison table for diffusion, osmosis, and active transport covering: energy requirement, direction, whether a membrane is needed, and whether the process stops when respiration is blocked. [4]",
            "Explain why glucose does not normally appear in urine but may appear in the urine of a person with uncontrolled diabetes mellitus. [3]"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Biological Molecules",
      intro: "Living organisms are constructed from and fuelled by four major classes of organic molecules: **carbohydrates**, **lipids**, **proteins**, and **nucleic acids**. Each class is built from smaller subunit molecules (monomers) joined together by condensation reactions and broken apart by hydrolysis. Understanding the relationship between molecular structure and function — how the precise arrangement of atoms determines what a molecule can do — is the foundation for explaining digestion, enzyme action, cell membrane structure, energy storage, and genetic inheritance. Food tests allow rapid identification of these molecules in biological samples.",
      subheadings: [
        {
          title: "Carbohydrates — Monosaccharides, Disaccharides and Polysaccharides",
          body: `Carbohydrates contain only **carbon, hydrogen, and oxygen** atoms, with the general formula $(CH_2O)_n$ — hence the name "carbohydrate" (hydrated carbon). They range in complexity from single sugar units to enormous polymers containing thousands of glucose molecules.

## Monosaccharides — The Building Blocks

Monosaccharides are the simplest carbohydrates — single sugar units that cannot be broken down further by hydrolysis. They are soluble in water, sweet-tasting, and directly used as fuel for respiration.

The most important monosaccharide is **glucose** (C₆H₁₂O₆), the primary fuel for cellular respiration in virtually all living organisms. Glucose exists in two structural forms (**isomers**) that differ only in the orientation of the —OH group on carbon atom 1:

- **Alpha (α)-glucose:** The —OH group on carbon 1 points downward (same side as the —CH₂OH on carbon 6). When alpha-glucose molecules polymerise, they form **starch** and **glycogen** — coiled, compact storage polysaccharides.
- **Beta (β)-glucose:** The —OH group on carbon 1 points upward (opposite side from the —CH₂OH). When beta-glucose molecules polymerise, they form **cellulose** — straight, unbranched chains that hydrogen-bond to each other, forming rigid microfibrils.

This single difference — just one —OH group pointing in a different direction — produces completely different polymers with completely different properties and functions. This illustrates the profound importance of molecular geometry in biology.

Other monosaccharides include:
- **Fructose (C₆H₁₂O₆)** — found in fruit and honey; sweeter than glucose; combines with glucose to form sucrose
- **Galactose (C₆H₁₂O₆)** — found in milk (as part of lactose)
- **Ribose and deoxyribose (C₅H₁₀O₅ / C₅H₁₀O₄)** — 5-carbon sugars that form the backbone of RNA and DNA respectively

## Disaccharides — Two Monomers Joined

When two monosaccharides join together, a **condensation reaction** occurs: the —OH group of one molecule and the —H of another combine to release one molecule of water, and a **glycosidic bond** forms between the two sugar carbons. This bond requires specific enzymes to break.

The common disaccharides:

| Disaccharide | Composed of | Formed by | Where found/used |
|-------------|-------------|-----------|-----------------|
| **Maltose** | Glucose + Glucose | α-1,4 glycosidic bond | Germinating seeds; product of starch digestion by amylase |
| **Sucrose** | Glucose + Fructose | α,β-1,2 glycosidic bond | Plants: main form in which sugar is transported in phloem; table sugar |
| **Lactose** | Glucose + Galactose | β-1,4 glycosidic bond | Milk of all mammals; broken down by lactase enzyme |

**Hydrolysis** is the reverse reaction — adding a water molecule breaks the glycosidic bond, regenerating the two monosaccharides. Digestive enzymes in the small intestine (maltase, sucrase, lactase) perform hydrolysis of disaccharides.

## Polysaccharides — Many Monomers Joined

Polysaccharides are long chains of hundreds to thousands of monosaccharide units. They are generally insoluble in water (which makes them ideal for storage — they don't exert osmotic effects), tasteless, and large molecules with limited solubility.

### Starch — Energy Storage in Plants

Starch is the main energy storage polysaccharide in plants and a major component of human diet. It consists of two components:

- **Amylose** (~20–30% of starch): Unbranched chains of α-glucose units joined by α-1,4 glycosidic bonds. The chain coils into a helix — iodine molecules fit inside this helix, causing the characteristic **blue-black** colour of the iodine test for starch.
- **Amylopectin** (~70–80% of starch): Chains of α-glucose with α-1,4 bonds along the chain AND α-1,6 bonds at branch points approximately every 24–30 glucose units. The branching provides multiple "ends" where enzymes can attack simultaneously, allowing rapid hydrolysis to glucose when energy is needed.

Starch is ideal for storage because:
- It is **insoluble** — exerts no osmotic pressure, so it doesn't draw water into the cell
- It is **compact** — the helix and branching allow dense packing
- It can be rapidly hydrolysed to glucose on demand by amylase and debranching enzymes

### Glycogen — Energy Storage in Animals and Fungi

Glycogen has the same monomers as amylopectin (α-glucose) but is even more heavily branched — branch points approximately every 8–12 glucose units. This hyperbranchin creates an enormous number of chain ends that can be simultaneously attacked by glycogen phosphorylase during rapid mobilisation (e.g. during sprinting or fight-or-flight). Found predominantly in liver cells (main reservoir for blood glucose regulation) and muscle cells (for local energy use during contraction).

### Cellulose — Structural Support in Plant Cell Walls

Cellulose is composed of β-glucose units joined by β-1,4 glycosidic bonds. The β configuration means adjacent glucose molecules are rotated 180° relative to each other, producing perfectly straight, unbranched chains. These straight chains can lie precisely parallel to each other and form **hydrogen bonds** between —OH groups on adjacent chains — up to ~500 hydrogen bonds per cellulose chain, creating **microfibrils** with tensile strength comparable to steel wire for their cross-sectional area.

Cellulose microfibrils are laid down in crossing orientations in cell walls, creating a structure that resists expansion in all directions — the basis of plant rigidity.

## Food Tests for Carbohydrates

### Benedict's Test — Reducing Sugars

All monosaccharides and most disaccharides (except sucrose) are **reducing sugars** — they can donate electrons to reduce other molecules (in this case, Cu²⁺ ions in Benedict's reagent to Cu⁺).

**Procedure:**
1. Add an equal volume of Benedict's reagent (bright blue) to the test solution in a test tube
2. Heat the mixture in a boiling water bath for 5 minutes
3. Observe the colour change

**Results:**
- Negative (no reducing sugar): solution remains **blue**
- Trace amount: **green** precipitate
- Moderate amount: **yellow/orange** precipitate
- Large amount: **brick-red** precipitate

The colour change reflects the amount of Cu₂O (copper(I) oxide) precipitate formed — the more reducing sugar, the more Cu²⁺ is reduced to Cu⁺, the more precipitate forms.

### Testing for Non-Reducing Sugars (e.g. Sucrose)

Sucrose has no free reducing group — the bond between glucose and fructose uses both anomeric carbons, leaving no free —OH to act as a reducing agent. To test for sucrose:

1. First confirm the Benedict's test is **negative** (no reducing sugar present)
2. Add dilute hydrochloric acid and heat in a water bath for several minutes — this hydrolyses any sucrose into glucose + fructose (both reducing sugars)
3. Neutralise the acid by adding solid sodium hydrogen carbonate (NaHCO₃) — test with pH paper to confirm it is neutral or slightly alkaline
4. Repeat the Benedict's test on the neutralised solution — if sucrose was present, a **brick-red precipitate** now forms

### Iodine Test for Starch

Add a few drops of iodine solution (potassium iodide / iodine, orange-brown colour) to the sample.

- **Positive result:** The solution turns **blue-black** immediately
- **Negative result:** Remains orange-brown

The blue-black colour arises because iodine molecules (I₂) slip inside the helical coil of amylose and form a charge-transfer complex that absorbs light at a wavelength corresponding to visible orange-red light, reflecting blue-black. This is a test for the helix structure, not just for glucose polymers — glycogen gives a red-brown colour because its shorter chains form a less regular helix.`,
          groups: [],
          recap: [
            "Describe the chemical structure of starch and explain how this structure makes it well-suited to its role as an energy storage molecule in plant cells. [5]",
            "Explain how you would test a food sample to determine whether it contains a non-reducing sugar. Include all the steps, reagents, and expected results. [5]",
            "Compare the structures of cellulose and starch, and explain how the differences in structure lead to completely different functions. [6]",
            "A student dissolves a biscuit in water and tests it with Benedict's reagent: the solution stays blue. The student concludes there are no carbohydrates in the biscuit. Is this conclusion valid? Explain your answer and suggest a further test. [4]",
            "Explain what is meant by a glycosidic bond and describe how one is formed. [3]"
          ]
        },
        {
          title: "Proteins — Amino Acids, Structure and Function",
          body: `Proteins are the most structurally and functionally diverse class of biological molecules. They contain **carbon, hydrogen, oxygen, nitrogen**, and usually **sulfur**. They make up enzymes, structural components of cells, hormones, antibodies, transport molecules, and membrane channels — essentially, proteins carry out most of the work of living organisms.

## Amino Acids — The Monomers of Proteins

All proteins are built from combinations of the same 20 amino acids. Despite this, the variety of possible protein structures is effectively limitless — a chain of just 100 amino acids with 20 possible choices at each position gives 20¹⁰⁰ possible sequences (more than the number of atoms in the observable universe).

Every amino acid shares the same basic structure:
- A central **carbon atom** (the α-carbon)
- An **amino group** (–NH₂) on one side — this is the basic (alkaline) part of the molecule
- A **carboxyl group** (–COOH) on the other side — this is the acidic part
- A **hydrogen atom**
- A unique **R-group** (side chain) — this is what differs between the 20 amino acids and determines the chemical properties of each

The R-groups vary enormously: some are non-polar hydrocarbon chains (hydrophobic — tend to hide from water inside a protein); some are polar or charged (hydrophilic — tend to face the aqueous environment outside or inside the cell); some contain the sulfur needed for disulfide bonds; some are bulky rings that affect protein shape.

## Peptide Bond Formation — Condensation Reaction

Two amino acids join by a condensation reaction between the **–COOH group of one** and the **–NH₂ group of the other**, releasing one water molecule and forming a **peptide bond** (–CO–NH–). The resulting two-amino-acid unit is a **dipeptide**. Multiple amino acids joined = a **polypeptide** chain.

The peptide bond is a covalent bond with partial double-bond character, which means rotation around it is restricted — this forces the polypeptide backbone into preferred angles and is the basis for the regular secondary structures.

## The Four Levels of Protein Structure

### Primary Structure
The specific sequence of amino acids in the polypeptide chain — determined entirely by the sequence of bases in the DNA coding for that protein. This is the most fundamental level because it dictates everything else: the order of amino acids determines all the interactions between them, which in turn determines the 3D shape, which determines the function.

If even a single amino acid is changed (as in sickle-cell anaemia, where one glutamic acid in haemoglobin is replaced by valine), the protein's shape and function can change dramatically.

### Secondary Structure
Local regions of the polypeptide chain fold into regular, repeating structures stabilised by **hydrogen bonds** between the backbone –NH and –C=O groups (not between R-groups):

- **α-helix:** The chain coils into a right-handed helix with 3.6 amino acids per turn; hydrogen bonds run parallel to the helix axis; the R-groups point outward. Found in fibrous proteins (hair keratin is almost entirely α-helix) and as domains in globular proteins.
- **β-pleated sheet:** The chain folds back and forth on itself; hydrogen bonds run perpendicular to the chain direction; the resulting sheet is pleated. Found in silk fibroin, and as domains in many globular proteins (antibodies are largely β-sheet).

### Tertiary Structure
The overall three-dimensional shape formed when the whole polypeptide chain folds on itself. Held together by multiple types of bonds between R-groups:

- **Hydrogen bonds** (between polar R-groups) — individually weak, but there are many of them
- **Ionic bonds** (between oppositely charged R-groups at certain pH values)
- **Disulfide bonds** (–S–S– covalent bonds between cysteine R-groups containing –SH) — the strongest bonds stabilising tertiary structure; commonly found in extracellular proteins (antibodies, insulin) where conditions cannot be so precisely controlled
- **Hydrophobic interactions** (non-polar R-groups cluster together in the interior, away from water)

The tertiary structure determines the protein's function — particularly the shape of the active site in enzymes and the binding sites in receptors, antibodies, and membrane channels.

### Quaternary Structure
Many functional proteins consist of two or more polypeptide chains (subunits) associated together. The assembly is called the quaternary structure.

- **Haemoglobin:** 4 subunits (2 alpha chains + 2 beta chains), each with a haem group containing Fe²⁺. Cooperative binding of O₂ between subunits makes it a highly efficient oxygen transporter.
- **Collagen:** 3 polypeptide chains twisted around each other in a triple helix — the basic unit that self-assembles into collagen fibrils for mechanical strength in tendons and skin.

## Functions of Proteins

| Protein type | Function | Named example |
|-------------|----------|--------------|
| **Enzymes** | Catalyse metabolic reactions | Amylase, pepsin, catalase |
| **Structural** | Provide mechanical support | Collagen (tendons, skin, bone matrix), keratin (hair, nails, skin) |
| **Transport** | Carry molecules in blood | Haemoglobin (O₂), albumin (fatty acids, hormones) |
| **Hormones** | Chemical messengers | Insulin, glucagon, ADH |
| **Antibodies** | Specific immune response | Immunoglobulin G (IgG) |
| **Membrane channels** | Selective passage of ions | Aquaporins, voltage-gated Na⁺ channels |
| **Contractile** | Generate movement | Actin, myosin (muscle contraction) |
| **Receptor proteins** | Detect signals | Insulin receptor, rhodopsin (light detection in retina) |

## The Biuret Test for Proteins

The Biuret test detects the presence of peptide bonds (–CO–NH–) in a sample — any substance containing two or more peptide bonds gives a positive result.

**Procedure:**
1. Add the sample to a test tube
2. Add sodium hydroxide solution (NaOH) to make the solution strongly alkaline
3. Add a few drops of copper sulfate solution (CuSO₄, pale blue)
4. Mix gently — do NOT heat (heat is used in Benedict's test but NOT Biuret)

**Results:**
- **Positive (protein present):** Solution turns **purple/violet** — Cu²⁺ ions coordinate with the nitrogen atoms of four nearby peptide bonds, forming a complex that absorbs light in the yellow-orange range, appearing purple
- **Negative (no protein):** Solution remains pale blue (colour of CuSO₄)

The intensity of the purple colour can be used semi-quantitatively — deeper purple indicates more protein.`,
          groups: [],
          recap: [
            "Describe the Biuret test for proteins. State the reagents used, the correct procedure, and what you observe for a positive and a negative result. [4]",
            "Explain, using the concept of primary structure, why a single amino acid substitution in haemoglobin can cause sickle-cell anaemia. [4]",
            "Describe the four levels of protein structure, explaining what type of bond or interaction maintains each level. [6]",
            "A student tests a sample with Benedict's reagent (positive) and Biuret reagent (positive). What does this indicate about the sample composition? [2]",
            "State four different functions of proteins in the human body. For each, name a specific protein and explain how its structure relates to its function. [8]"
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Enzymes",
      intro: "Enzymes are globular proteins that function as biological catalysts, accelerating the rate of chemical reactions in living cells without being permanently altered or consumed. Without enzymes, the chemical reactions of metabolism — respiration, digestion, photosynthesis, DNA replication, protein synthesis — would proceed far too slowly to sustain life at the temperatures found in living organisms. A single enzyme molecule can catalyse thousands to millions of reactions per second. Understanding how enzymes work, why they are specific, and how temperature and pH affect their activity is among the most important and heavily examined topics in Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "Enzyme Action — Active Site, Specificity and Models",
          body: `## What is an Enzyme?

An enzyme is a **globular protein** that catalyses a specific biochemical reaction by lowering the **activation energy** — the minimum energy that reactant molecules must possess before the reaction can proceed. By lowering this energy barrier, a far greater proportion of reactant molecules have sufficient energy to react at any given moment, dramatically increasing the rate of reaction without raising the temperature.

Enzymes are described as:

- **Biological catalysts** — they speed up reactions without being permanently changed themselves
- **Globular proteins** — their complex 3D (tertiary) structure is critical to their function
- **Specific** — each enzyme catalyses one particular reaction or a narrow range of structurally similar reactions
- **Reusable** — because they are not permanently changed, one enzyme molecule can catalyse thousands to millions of reactions
- **Sensitive** — their activity is precisely controlled by temperature, pH, and the presence of inhibitors

## The Active Site

Every enzyme has a region called the **active site** — a three-dimensional cleft or pocket with a precise shape that is complementary to the shape of the enzyme's specific **substrate** (the molecule it acts upon). The active site is typically formed by only a small number of amino acids (typically 3–8) brought into close proximity by the folding of the much larger protein chain, and it makes up a tiny fraction of the enzyme's total surface area.

The shape and chemical properties of the active site are determined by:
- The precise sequence of amino acids (primary structure) in the enzyme
- The way that sequence folds into a specific 3D conformation (tertiary structure)
- The chemical character of the specific amino acid R-groups lining the active site (polar, non-polar, charged, able to form hydrogen bonds, etc.)

When the substrate binds to the active site, it forms an **enzyme-substrate complex**. During this interaction, the enzyme either:
- Breaks the substrate into smaller product molecules (**catabolic reaction**, e.g. sucrase breaking sucrose → glucose + fructose)
- Joins two substrate molecules together into one larger product molecule (**anabolic reaction**, e.g. DNA polymerase joining nucleotides → DNA strand)

After the reaction is complete, the **products** are released from the active site (they have a different shape from the substrate and no longer fit), and the enzyme is restored to its original state, ready to bind another substrate molecule.

## The Lock-and-Key Model (Fischer, 1894)

The earliest model of enzyme-substrate interaction, proposed by Emil Fischer, described the relationship as rigid complementarity:

- The **active site** is like a lock with a fixed, rigid shape
- The **substrate** is like a key that fits precisely into this lock
- Only the correct substrate (with the complementary shape) can fit the active site → explains specificity

**Strengths:** Explains enzyme specificity clearly and simply.

**Limitations:** Doesn't explain how the enzyme actually lowers activation energy. Treats proteins as rigid objects, but proteins are actually flexible. Doesn't explain why some substrates bind but are not converted (competitive inhibitors — they fit the lock but don't trigger the reaction). Doesn't explain allosteric regulation.

## The Induced Fit Model (Koshland, 1958)

The induced fit model is now the accepted description of enzyme action:

- The active site does **not** have a perfectly rigid, pre-formed shape complementary to the substrate
- When the substrate approaches and begins to bind, the enzyme undergoes a **conformational change** (a subtle change in its 3D shape)
- This conformational change optimises the fit between enzyme and substrate, creating the most effective enzyme-substrate complex
- The change in shape also **stresses bonds** in the substrate and optimally positions catalytic amino acid R-groups in the active site, lowering the activation energy for the specific reaction

Think of it like a hand (enzyme) fitting into a glove (substrate) — the hand changes shape slightly to fit perfectly into the glove, and the glove in turn moulds around the hand.

**Why induced fit explains more:**
- Explains how the enzyme can adjust to slightly different substrates (substrate analogues)
- Explains why the enzyme-substrate complex has different properties from the free enzyme
- Explains the mechanism of activation energy reduction — it's not just spatial complementarity but active strain of bonds and optimal catalytic positioning

## Enzyme Specificity — Why Enzymes Are So Selective

An enzyme is specific to its substrate because only a molecule with the **exact complementary shape, charge distribution, and hydrophobic/hydrophilic pattern** can induce the precise conformational change and bind effectively to the active site.

Real examples of extreme specificity:

- **Sucrase** hydrolyses sucrose (glucose-fructose) but has absolutely no effect on maltose (glucose-glucose) or lactose (glucose-galactose), even though all three are disaccharides
- **Amylase** cleaves the α-1,4 glycosidic bonds in starch but has no effect whatsoever on cellulose — even though cellulose is also a glucose polymer, the β-1,4 bonds have a completely different orientation, producing a different shape that doesn't match the amylase active site
- **DNA polymerase** adds only deoxyribonucleotides to a growing DNA strand; it will not incorporate ribonucleotides (the difference is a single —OH group on the sugar)

This extraordinary specificity allows thousands of different biochemical reactions to occur simultaneously in the same cell without interfering with each other — each enzyme acts only on its designated substrate.

## Turnover Number

The **turnover number** (kcat) is the number of substrate molecules converted to product per active site per second. Some examples:

- Carbonic anhydrase: ~1,000,000 per second (converts CO₂ + H₂O ↔ HCO₃⁻ + H⁺ in red blood cells)
- Catalase: ~40,000,000 per second (decomposing H₂O₂ → H₂O + O₂)
- DNA polymerase: ~1,000 per second (but with extreme accuracy — ~1 error per billion nucleotides added)
- Lysozyme: ~0.5 per second (slowly digests bacterial cell walls)`,
          groups: [],
          recap: [
            "Explain what is meant by the active site of an enzyme and explain, with reference to the induced fit model, how it catalyses a reaction. [5]",
            "Explain why amylase can digest starch but has no effect on cellulose, even though both are polymers of glucose. [4]",
            "Compare the lock-and-key model with the induced fit model of enzyme action, including one advantage of the induced fit model over the lock-and-key model. [4]",
            "Define activation energy and explain how an enzyme lowers the activation energy of a reaction. [3]",
            "Explain what would happen to enzyme activity if the enzyme's primary structure was altered by a mutation that changed one amino acid in the active site. [3]"
          ]
        },
        {
          title: "Effect of Temperature on Enzyme Activity",
          body: `Temperature has a profound and distinctive effect on enzyme-catalysed reactions, and understanding this effect — including the precise molecular mechanisms — is essential for IGCSE Biology.

## The Two Competing Effects of Temperature

Temperature affects enzyme activity through two competing mechanisms that operate simultaneously:

**Effect 1 — Increased kinetic energy (increases rate):**

As temperature rises from 0°C upward, all molecules — both enzyme and substrate — move faster. This has two consequences:
- Enzyme and substrate molecules collide **more frequently** (more collisions per unit time)
- A greater proportion of collisions have **sufficient energy** to overcome the (already lowered) activation energy barrier

For every 10°C rise in temperature, the rate of most enzyme-catalysed reactions approximately **doubles** (this relationship is expressed as Q₁₀ ≈ 2).

**Effect 2 — Denaturation of the enzyme (decreases rate):**

Protein structure is maintained by relatively weak forces: hydrogen bonds, ionic bonds, and hydrophobic interactions between R-groups. These bonds are not strong enough to withstand very high temperatures. As temperature rises above the enzyme's **optimum temperature**, increasing numbers of these bonds break:

- Hydrogen bonds holding the tertiary structure break
- The protein chain unfolds
- The precise 3D shape of the active site is lost
- The active site can no longer bind the substrate
- The enzyme loses catalytic activity → **denaturation**

Denaturation is essentially an **irreversible** change — unlike most other factors that reduce enzyme activity, denaturation cannot be reversed simply by lowering the temperature back down. The unfolded protein chain cannot spontaneously refold into its original precise conformation (at least not under physiological conditions). This is why cooking "sets" proteins — boiling an egg denatures the egg white proteins permanently.

> **Critical examiner note:** The most common error in IGCSE answers is writing that heat "kills" the enzyme or "destroys" it. Enzymes are not alive, so they cannot be killed. The correct statement is that the enzyme is **denatured** — its **tertiary structure is permanently altered**, the **active site changes shape**, and the **substrate can no longer fit** the active site. Always use these precise terms.

## The Optimum Temperature

The **optimum temperature** is the temperature at which the rate of an enzyme-catalysed reaction is maximal. It represents the point where the benefit of increased kinetic energy exactly maximises the reaction rate before denaturation begins to dominate.

For **human body enzymes**, the optimum is typically **37–40°C** — no coincidence that this matches body temperature. Body temperature is physiologically maintained at this range precisely to keep enzymes working near their optimum.

Other organisms have enzymes with very different optima:
- **Thermophilic bacteria** (e.g. *Thermus aquaticus*, the source of **Taq polymerase** used in PCR) have enzymes with optima of 70–80°C — their proteins have evolved additional stabilising bonds to resist high temperatures
- **Psychrophilic (cold-adapted) organisms** (e.g. Arctic fish) have enzymes with optima of 4–10°C — they work well at near-freezing temperatures where human enzymes would be nearly inactive

:::svg[Rate of Enzyme Activity vs Temperature — Annotated Graph]
<svg viewBox="0 0 440 220" width="440" height="220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="440" height="220" fill="#f8fafc" rx="12"/>
  <text x="220" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Enzyme Activity vs Temperature (human enzyme)</text>
  <line x1="50" y1="180" x2="420" y2="180" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="20" x2="50" y2="180" stroke="#334155" stroke-width="2"/>
  <text x="235" y="198" text-anchor="middle" font-size="10" fill="#475569">Temperature (°C) →</text>
  <text x="18" y="105" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,18,105)">Rate of reaction →</text>
  <!-- Tick marks -->
  <text x="90" y="192" text-anchor="middle" font-size="9" fill="#64748b">10</text>
  <text x="155" y="192" text-anchor="middle" font-size="9" fill="#64748b">20</text>
  <text x="215" y="192" text-anchor="middle" font-size="9" fill="#64748b">30</text>
  <text x="265" y="192" text-anchor="middle" font-size="9" fill="#64748b">37</text>
  <text x="310" y="192" text-anchor="middle" font-size="9" fill="#64748b">50</text>
  <text x="370" y="192" text-anchor="middle" font-size="9" fill="#64748b">70</text>
  <!-- Curve: rises gradually then sharply, peaks at ~37°C, falls steeply -->
  <path d="M55,175 Q90,168 130,145 Q175,115 215,78 Q240,55 265,42 Q280,38 290,42 Q310,60 330,100 Q355,145 390,170 Q410,178 430,180"
    stroke="#16a34a" stroke-width="3" fill="none"/>
  <!-- Optimum marker -->
  <line x1="265" y1="42" x2="265" y2="180" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="267" y="38" font-size="9.5" fill="#dc2626" font-weight="700">Optimum</text>
  <text x="267" y="50" font-size="9" fill="#dc2626">~37°C</text>
  <!-- Annotation: increasing rate -->
  <text x="158" y="125" font-size="8.5" fill="#15803d" text-anchor="middle">Rate increases:</text>
  <text x="158" y="137" font-size="8.5" fill="#15803d" text-anchor="middle">more kinetic energy</text>
  <text x="158" y="149" font-size="8.5" fill="#15803d" text-anchor="middle">→ more collisions</text>
  <!-- Annotation: decreasing rate -->
  <text x="355" y="110" font-size="8.5" fill="#dc2626" text-anchor="middle">Rate decreases:</text>
  <text x="355" y="122" font-size="8.5" fill="#dc2626" text-anchor="middle">denaturation —</text>
  <text x="355" y="134" font-size="8.5" fill="#dc2626" text-anchor="middle">active site</text>
  <text x="355" y="146" font-size="8.5" fill="#dc2626" text-anchor="middle">changes shape</text>
</svg>
:::

## What Happens at Each Stage of the Graph

**0°C → optimum (~37°C):** Both effects are operating, but the kinetic energy benefit dominates. The curve rises steeply — the rate approximately doubles for every 10°C rise. Near 0°C, the enzyme has an intact active site (denaturation hasn't occurred) but reactions are very slow due to low kinetic energy.

**At the optimum (~37°C):** The rate is at its maximum. The kinetic energy benefit and the beginning of denaturation effects are in perfect balance.

**Above the optimum (>37°C):** The denaturation effect now dominates. An increasing proportion of enzyme molecules have lost their active site shape. The rate falls rapidly. At 60–70°C for most human enzymes, denaturation is essentially complete and activity falls to near zero.

## Practical Investigation of Temperature

**Standard method:**
1. Set up water baths at different temperatures (e.g. 10°C, 20°C, 30°C, 37°C, 45°C, 60°C)
2. Allow both enzyme solution (e.g. amylase) and substrate solution (e.g. starch) to equilibrate at the test temperature for 5 minutes
3. Mix enzyme and substrate; start timing
4. Measure rate: e.g. take samples every 30 seconds and test with iodine on a spotting tile (blue-black = starch remains; orange = starch gone)
5. Time until all starch is digested = 1/time ∝ rate

**Controls:** Same enzyme concentration, same substrate concentration, same volumes at each temperature. Only temperature varies.`,
          groups: [],
          recap: [
            "Explain, with reference to molecular events, why increasing temperature from 10°C to 37°C increases the rate of an enzyme-catalysed reaction. [3]",
            "Explain why raising temperature above 40°C decreases the rate of enzyme activity. Include what happens to the enzyme structure and the consequence for substrate binding. [5]",
            "Sketch and fully annotate an enzyme activity vs temperature graph for a human enzyme. Your annotations must explain the shape of the curve at each stage. [5]",
            "A student investigating amylase activity finds that at 70°C the reaction is slower than at 37°C. The student then lowers the temperature to 37°C but the rate remains very low. Explain this result. [3]",
            "Suggest why the enzymes of bacteria living in hot springs have a much higher optimum temperature than human digestive enzymes. [2]"
          ]
        },
        {
          title: "Effect of pH on Enzyme Activity",
          body: `## How pH Affects Enzyme Activity

pH measures the concentration of hydrogen ions (H⁺) in a solution. The pH scale runs from 0 (most acidic, highest H⁺) to 14 (most alkaline, lowest H⁺), with 7 being neutral. Each unit change represents a **10-fold** change in H⁺ concentration (it is a logarithmic scale).

pH affects enzyme activity by altering the **ionic charge on amino acid R-groups** within and around the active site. Many R-groups can gain or lose protons (H⁺) depending on the surrounding pH:

- Acidic R-groups (e.g. aspartate, glutamate): lose H⁺ at higher pH, gaining a negative charge
- Basic R-groups (e.g. lysine, arginine): gain H⁺ at lower pH, acquiring a positive charge
- Histidine R-group: can be neutral or positively charged near physiological pH — making it a critical residue in many enzyme active sites

When pH changes:
- The charges on R-groups in the active site change
- This changes the **ionic interactions** within the active site
- The **precise shape** of the active site is altered
- The complementarity between active site and substrate is disrupted
- The rate of reaction decreases

At extreme pH values (strongly acidic or strongly alkaline), the changes are severe enough to permanently disrupt the tertiary structure of the enzyme — **denaturation** occurs, and activity is lost irreversibly.

## Every Enzyme Has an Optimum pH

Each enzyme has evolved to function best at the pH characteristic of its normal environment:

| Enzyme | Location | Optimum pH | Explanation |
|--------|---------|-----------|-------------|
| **Pepsin** | Stomach | ~1.5–2.0 | Stomach secretes HCl, creating strongly acidic conditions; pepsin evolved with active site shape optimal at pH ~2 |
| **Salivary amylase** | Mouth | ~6.8–7.0 | Saliva is slightly acidic to neutral; optimum at ~neutral pH |
| **Trypsin** | Small intestine | ~7.8–8.5 | Pancreatic juice is alkaline (pH 8); neutralises stomach acid entering duodenum; trypsin evolved for slightly alkaline pH |
| **Catalase** | Most body cells | ~7.0 | Cytoplasm is approximately neutral; catalase decomposing H₂O₂ functions best at neutral pH |
| **Arginase** | Liver | ~9.5 | An outlier — high optimum reflects the specific ionic environment of hepatocyte metabolism |

## Graphing pH vs Enzyme Activity

When rate is plotted against pH, each enzyme shows a characteristic **bell-shaped curve** with a clear peak at the optimum pH. The curve is:
- Relatively narrow for enzymes with very specific pH requirements (e.g. pepsin, very active at pH 2, nearly inactive at pH 6)
- Broader for enzymes that tolerate a wider pH range

Multiple enzymes from different organisms plotted on the same axes illustrate beautifully that there is no universally "correct" pH — the optimum is whatever the enzyme has evolved for.

## pH in Practical Investigations

**Investigating pH vs amylase activity:**
1. Prepare buffer solutions at different pH values (pH 4, 5, 6, 7, 8, 9) — buffers maintain a stable pH even when small amounts of acid/alkali are added
2. Mix amylase solution with starch solution in each buffer
3. Take samples every 30 seconds; test with iodine on a spotting tile
4. Record the time for starch to disappear (orange colour = no starch remaining)
5. Calculate rate = 1/time; plot rate vs pH

**Why use buffer solutions?** Without buffers, the addition of the enzyme solution or the products of the reaction would shift the pH of the mixture, making it impossible to maintain a known, constant pH. Buffers absorb both added H⁺ and OH⁻, keeping pH stable.

**Common error:** Not allowing enzyme and substrate solutions to equilibrate to the test pH before mixing. If you add enzyme at pH 7 to a buffer at pH 4, the enzyme may be at pH 5.5 when mixing begins — not a true pH 4 experiment.`,
          groups: [],
          recap: [
            "Explain, in terms of the active site, why pepsin works most effectively at pH 2 but has very little activity at pH 7. [4]",
            "A student investigates the effect of pH on trypsin activity. Explain why buffer solutions must be used in this investigation. [2]",
            "Explain what happens to the structure of an enzyme when it is placed in a very strongly acidic solution. [3]",
            "Sketch on the same axes the activity vs pH curves for (a) pepsin (optimum pH 2) and (b) trypsin (optimum pH 8). Label both curves and both axes. [4]",
            "Explain why salivary amylase, which begins digesting starch in the mouth at pH ~7, stops working once the food reaches the stomach (pH ~2). [3]"
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Plant Nutrition",
      intro: "Plants are **photoautotrophs** — they manufacture all their organic molecules from inorganic raw materials (CO₂ and H₂O) using energy captured from sunlight. This process, photosynthesis, is the foundation of virtually every food chain on Earth, producing the glucose that fuels plant metabolism and the oxygen that made aerobic life possible. Understanding photosynthesis in mechanistic detail — including its two stages, the role of chlorophyll, limiting factors, and mineral ion nutrition — is essential for Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "Photosynthesis — Equation, Stages and Requirements",
          body: `## The Overall Equation

Photosynthesis can be summarised in two forms:

**Word equation:**
carbon dioxide + water → glucose + oxygen (using light energy and chlorophyll)

**Balanced symbol equation:**
$$6CO_2 + 6H_2O \\xrightarrow{\\text{light energy, chlorophyll}} C_6H_{12}O_6 + 6O_2$$

Photosynthesis is essentially the reverse of aerobic respiration: where respiration oxidises glucose to release energy, photosynthesis uses energy to reduce CO₂ to build glucose. This is why photosynthesis is an endothermic process (requires energy input) while respiration is exothermic (releases energy).

## Two Stages of Photosynthesis

Photosynthesis occurs in **two distinct stages** that happen in different locations within the chloroplast:

### Stage 1: Light-Dependent Reactions (in the **thylakoid membranes**)

These reactions cannot occur without light — they directly use light energy.

What happens:
- Chlorophyll (and other accessory pigments) absorb **light energy**
- This energy is used to split water molecules in a process called **photolysis**: $2H_2O \\rightarrow 4H^+ + 4e^- + O_2$
- The **oxygen** produced is released as a by-product through stomata — this is the source of all atmospheric oxygen
- The hydrogen ions and electrons are used to produce two energy-carrying products: **ATP** (from ADP + inorganic phosphate, using light energy) and **reduced NADP** (a hydrogen carrier, produced when NADP accepts H⁺ and e⁻)
- ATP and reduced NADP pass to Stage 2

Key products leaving the light-dependent reactions:
- Oxygen (O₂) — released to atmosphere
- ATP — passes to stroma for Stage 2
- Reduced NADP — passes to stroma for Stage 2

### Stage 2: Light-Independent Reactions / Calvin Cycle (in the **stroma**)

These reactions don't directly require light — they use the ATP and reduced NADP from Stage 1. They are sometimes misleadingly called "dark reactions" but they occur in daylight too (the enzyme RuBisCO is only active when light is present and ATP/NADPH are available).

What happens:
- **CO₂** from the air diffuses into the chloroplast and enters the cycle
- CO₂ reacts with a 5-carbon acceptor molecule called **RuBP** (ribulose bisphosphate), catalysed by the enzyme **RuBisCO** (the most abundant enzyme on Earth)
- The 6-carbon intermediate immediately splits into two molecules of **GP** (glycerate-3-phosphate), a 3-carbon compound
- ATP and reduced NADP from Stage 1 are used to reduce GP to **G3P** (glyceraldehyde-3-phosphate), a triose phosphate
- G3P is used in two ways: some molecules are used to regenerate RuBP (so the cycle can continue); others are used to make glucose and other organic molecules (amino acids, fatty acids, starch)

Key requirements entering the Calvin cycle:
- CO₂ (carbon source for building glucose)
- ATP (provides energy for driving the reactions)
- Reduced NADP (provides reducing power — hydrogen atoms)

:::svg[Two Stages of Photosynthesis in the Chloroplast]
<svg viewBox="0 0 500 220" width="500" height="220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="500" height="220" fill="#f8fafc" rx="12"/>
  <text x="250" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Two Stages of Photosynthesis</text>
  <!-- Chloroplast outline -->
  <ellipse cx="250" cy="120" rx="235" ry="92" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <!-- Thylakoid (left box) -->
  <rect x="25" y="52" width="185" height="130" rx="12" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/>
  <text x="117" y="73" text-anchor="middle" font-size="11" font-weight="700" fill="#15803d">THYLAKOID MEMBRANE</text>
  <text x="117" y="87" text-anchor="middle" font-size="9.5" fill="#166534">Light-Dependent Reactions</text>
  <!-- Inputs thylakoid -->
  <text x="117" y="107" text-anchor="middle" font-size="9" fill="#0369a1">Inputs:</text>
  <text x="117" y="119" text-anchor="middle" font-size="9" fill="#0369a1">- Light energy</text>
  <text x="117" y="130" text-anchor="middle" font-size="9" fill="#0369a1">- H₂O (photolysis)</text>
  <!-- Outputs thylakoid -->
  <text x="117" y="148" text-anchor="middle" font-size="9" fill="#dc2626">Outputs:</text>
  <text x="117" y="160" text-anchor="middle" font-size="9" fill="#dc2626">- O₂ → released</text>
  <text x="117" y="172" text-anchor="middle" font-size="9" fill="#7c3aed">- ATP + Red. NADP</text>
  <!-- Arrow between stages -->
  <path d="M212 107 L288 107" stroke="#7c3aed" stroke-width="2.5" fill="none"/>
  <polygon points="288,103 300,107 288,111" fill="#7c3aed"/>
  <text x="250" y="100" text-anchor="middle" font-size="8.5" fill="#7c3aed">ATP</text>
  <text x="250" y="112" text-anchor="middle" font-size="8.5" fill="#7c3aed">Red. NADP</text>
  <!-- CO2 arrow into stroma -->
  <path d="M340 30 L370 55" stroke="#1d4ed8" stroke-width="2" fill="none"/>
  <polygon points="370,55 358,50 364,62" fill="#1d4ed8"/>
  <text x="330" y="28" font-size="9" fill="#1d4ed8">CO₂ enters</text>
  <!-- Stroma (right box) -->
  <rect x="300" y="52" width="178" height="130" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="389" y="73" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">STROMA</text>
  <text x="389" y="87" text-anchor="middle" font-size="9.5" fill="#1e40af">Calvin Cycle</text>
  <text x="389" y="100" text-anchor="middle" font-size="9" fill="#475569">(Light-Independent)</text>
  <text x="389" y="120" text-anchor="middle" font-size="9" fill="#0369a1">Inputs: CO₂ + ATP + Red.NADP</text>
  <text x="389" y="145" text-anchor="middle" font-size="9" fill="#15803d">Outputs:</text>
  <text x="389" y="157" text-anchor="middle" font-size="9" fill="#15803d">- Glucose (G3P)</text>
  <text x="389" y="169" text-anchor="middle" font-size="9" fill="#15803d">- RuBP regenerated</text>
</svg>
:::

## Investigating the Requirements for Photosynthesis

**To show light is required:**
1. Destarch a plant by keeping it in darkness for 48 hours (existing starch converted to sugar and transported away)
2. Cover part of one leaf with black paper or foil
3. Leave the plant in bright light for several hours
4. Test the leaf for starch: boil leaf in water (softens it), boil in ethanol (removes chlorophyll — leaf becomes cream/white coloured), wash in water (removes ethanol), flatten and add iodine solution
5. Result: Only the uncovered green part turns blue-black; the covered part remains orange-brown

**To show chlorophyll is required:**
1. Use a variegated leaf (has green patches containing chlorophyll and white/yellow patches lacking chlorophyll)
2. Destarch, expose to light, starch test as above
3. Result: Only the originally green patches turn blue-black — white patches (no chlorophyll) remain orange

**To show CO₂ is required:**
1. Destarch a plant; place in a sealed transparent container with a beaker of NaOH (which absorbs CO₂)
2. Expose to light for several hours (light present, CO₂ absent)
3. Starch test: No blue-black colour anywhere — no starch formed because CO₂ was unavailable`,
          groups: [],
          recap: [
            "Write the balanced symbol equation for photosynthesis and state where in the chloroplast each stage of photosynthesis occurs. [4]",
            "Explain why the oxygen produced during photosynthesis comes from water and not from CO₂. [2]",
            "Describe an experiment using a variegated leaf to show that chlorophyll is required for photosynthesis. Include the expected result and explain why this result supports the conclusion. [5]",
            "State the inputs and outputs of (a) the light-dependent reactions and (b) the Calvin cycle. [4]",
            "Explain why it is important to destarch the plant before doing any experiment on photosynthesis. [2]"
          ]
        },
        {
          title: "Limiting Factors of Photosynthesis",
          body: `## The Concept of Limiting Factors

**Blackman's Law of Limiting Factors (1905):** When a process is governed by a number of separate factors, the rate of that process is limited by the factor that is present at the most limiting level. Even if all other factors are optimised, the rate cannot increase further until the limiting factor is improved.

For photosynthesis, the three main limiting factors are:

- **Light intensity**
- **Carbon dioxide concentration**
- **Temperature**

Any one of these can be the factor that is preventing the rate from increasing at a given moment.

## Light Intensity as a Limiting Factor

At low light intensity, there is insufficient energy to drive the light-dependent reactions at maximum rate. The rate of photosynthesis increases linearly as light intensity increases — every photon absorbed increases the rate. This linear region is the phase where light is limiting.

As light intensity increases further, the rate begins to level off. At this plateau, light is no longer limiting — either CO₂ or temperature has become the limiting factor. Adding more light makes no further difference.

The light intensity at which the rate of photosynthesis exactly equals the rate of respiration (so the plant neither gains nor loses carbon) is called the **light compensation point**. Below this, the plant releases more CO₂ than it absorbs; above it, the plant is a net fixer of carbon.

## Carbon Dioxide Concentration as a Limiting Factor

CO₂ is the carbon source for the Calvin cycle — it is the substrate for RuBisCO, the enzyme that incorporates CO₂ into organic molecules. At low CO₂ concentration, even with abundant light and optimal temperature, the Calvin cycle is starved of substrate and runs slowly.

Atmospheric CO₂ is approximately 0.04% (420 ppm) — this is often the limiting factor for photosynthesis in many crop plants during warm, well-lit summer days. Raising CO₂ concentration to 0.1–0.3% can significantly increase crop yields.

## Temperature as a Limiting Factor

The Calvin cycle is driven by enzyme-catalysed reactions (primarily RuBisCO). As with all enzyme reactions, the rate increases with temperature up to the optimum (approximately 25–35°C for most crop plant enzymes) and then falls as denaturation begins. Note: the light-dependent reactions are largely physical processes (light absorption, electron transport) and are less temperature-sensitive than the Calvin cycle.

At low temperatures, even with abundant light and CO₂, the Calvin cycle enzymes are slow → photosynthesis is limited by temperature. As temperature rises, rate increases. Above ~40°C for most plants, denaturation of Calvin cycle enzymes reduces rate.

## Interpreting Rate-of-Photosynthesis Graphs

:::svg[Rate of Photosynthesis vs Light Intensity at Different CO₂/Temperature Conditions]
<svg viewBox="0 0 460 210" width="460" height="210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="460" height="210" fill="#f8fafc" rx="12"/>
  <text x="230" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Photosynthesis Rate vs Light Intensity</text>
  <line x1="45" y1="168" x2="440" y2="168" stroke="#334155" stroke-width="2"/>
  <line x1="45" y1="20" x2="45" y2="168" stroke="#334155" stroke-width="2"/>
  <text x="242" y="185" text-anchor="middle" font-size="10" fill="#475569">Light intensity →</text>
  <text x="14" y="97" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90,14,97)">Rate of photosynthesis →</text>
  <!-- Curve 1: Low CO2 — plateaus early and at low rate -->
  <path d="M48,166 Q110,140 170,118 Q210,108 240,106 Q300,103 440,102" stroke="#94a3b8" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
  <text x="350" y="98" font-size="8.5" fill="#64748b">Low CO₂ — CO₂ limiting</text>
  <!-- Curve 2: Higher CO2, low temperature -->
  <path d="M48,166 Q110,125 180,88 Q230,68 270,62 Q330,58 440,56" stroke="#2563eb" stroke-width="2.5" fill="none"/>
  <text x="360" y="52" font-size="8.5" fill="#1d4ed8">High CO₂, low T — T limiting</text>
  <!-- Curve 3: Higher CO2, higher temperature — steeper, higher plateau -->
  <path d="M48,166 Q110,110 185,65 Q240,40 285,32 Q350,27 440,26" stroke="#16a34a" stroke-width="2.5" fill="none"/>
  <text x="370" y="22" font-size="8.5" fill="#15803d">High CO₂, high T — optimal</text>
  <!-- Annotation: all three plateau for different reasons -->
  <text x="120" y="155" font-size="8.5" fill="#334155">All curves rise linearly:</text>
  <text x="120" y="167" font-size="8.5" fill="#334155">light is limiting here</text>
</svg>
:::

**Reading the graph:**
- Where curves rise steeply with light intensity: **light is the limiting factor** at these light intensities, regardless of CO₂ or temperature
- Where a curve plateaus: **CO₂ or temperature has become the new limiting factor** — adding more light now makes no difference
- The top curve (optimal CO₂ and temperature) plateaus at the highest rate and at the highest light intensity — all three factors are near-optimal so it takes more light to "saturate" the system

## Commercial Applications

Greenhouse growers use knowledge of limiting factors to maximise crop yield:

- **CO₂ enrichment:** Burn natural gas or propane inside greenhouses → releases CO₂ → can increase photosynthesis rate by 20–30%
- **Supplemental LED lighting:** Extends photoperiod beyond daylight hours; LED is energy-efficient and can be tuned to emit wavelengths absorbed by chlorophyll (red ~660 nm and blue ~430 nm)
- **Heating systems:** Maintain temperatures around 25°C year-round for maximum enzyme activity
- **Combined effect:** By controlling all three factors simultaneously, growers can operate at a rate of photosynthesis limited only by the fundamental biological maximum of the crop plant`,
          groups: [],
          recap: [
            "Define the term limiting factor and explain its importance in understanding photosynthesis. [3]",
            "Explain, with reference to the graph, why increasing light intensity beyond a certain point does not increase the rate of photosynthesis. Suggest what factor might be limiting at the plateau. [4]",
            "A grower adds a kerosene heater to a greenhouse during winter. Explain two ways in which this increases the rate of photosynthesis of the crop plants. [4]",
            "Sketch a rate vs light intensity graph showing three curves: (a) low CO₂, (b) high CO₂ at low temperature, (c) high CO₂ at high temperature. Label each curve and annotate to explain which factor is limiting at different points on each curve. [6]",
            "Explain why the rate of photosynthesis levels off at very high CO₂ concentrations even if light intensity and temperature are kept optimal. [3]"
          ]
        }
      ]
    },

    {
      number: 7,
      title: "Human Nutrition",
      intro: "Humans are heterotrophic organisms that obtain energy and all essential organic molecules by ingesting, digesting, absorbing, and assimilating food. The alimentary canal — a tube approximately 8 metres long from mouth to anus — processes food through mechanical and chemical digestion, breaking large insoluble molecules into small soluble ones that can be absorbed into blood. Understanding each nutrient class, every digestive enzyme, and the precise structural adaptations of the small intestine for absorption is central to Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "Nutrients and Their Roles",
          body: `A balanced diet contains all essential nutrients in appropriate proportions. Nutrients fall into two categories: **macronutrients** (needed in large quantities — carbohydrates, proteins, fats) and **micronutrients** (needed in small quantities — vitamins and minerals).

## Macronutrients

**Carbohydrates** are the primary energy source:
- Starch (from bread, rice, pasta, potatoes) is digested to glucose for immediate respiration
- Excess glucose is stored as glycogen in liver and muscle or converted to fat
- Dietary fibre (cellulose from vegetables and whole grains) cannot be digested but stimulates peristalsis, preventing constipation and reducing bowel cancer risk
- Energy value: approximately **17 kJ per gram**

**Proteins** are needed for:
- Growth and repair of tissues (structural proteins: collagen in skin/tendons, keratin in hair/nails)
- Enzymes (catalysing all metabolic reactions)
- Antibodies (immune defence)
- Hormones (insulin, glucagon, ADH)
- Haemoglobin (oxygen transport)
- Energy source of last resort (amino acids deaminated in liver → used in respiration)
- Energy value: approximately **17 kJ per gram**

**Lipids (fats and oils)** are needed for:
- Concentrated energy storage: **37 kJ per gram** — more than twice carbohydrates
- Thermal insulation (adipose tissue under skin)
- Organ protection (adipose cushions kidneys, eyes)
- Cell membrane phospholipids
- Fat-soluble vitamins A, D, E, K carrier
- Steroid hormone synthesis (oestrogen, testosterone, cortisol)

## Micronutrients

| Micronutrient | Role in body | Deficiency disease/consequence |
|-------------|-------------|-------------------------------|
| **Vitamin C (ascorbic acid)** | Required for hydroxylation of proline and lysine during collagen synthesis | Scurvy — bleeding gums, poor wound healing, bruising, tooth loss |
| **Vitamin D** | Required for absorption of Ca²⁺ from gut; promotes mineralisation of bone | Rickets (children — soft bowing leg bones); osteomalacia (adults — soft painful bones) |
| **Iron (Fe)** | Central atom of haem group in haemoglobin; also component of myoglobin and cytochromes | Iron-deficiency anaemia — insufficient haemoglobin, reduced oxygen transport, fatigue, pallor, breathlessness |
| **Calcium (Ca)** | Bone and tooth mineralisation (calcium phosphate, hydroxyapatite); muscle contraction; nerve impulse transmission; blood clotting | Rickets; osteoporosis (brittle bones in adults); muscle cramps |
| **Water** | Universal solvent for metabolic reactions; transport medium in blood and lymph; reactant in hydrolysis and photosynthesis; temperature regulation (evaporation of sweat) | Dehydration — impaired metabolism, reduced blood volume, heat stroke |`,
          groups: [],
          recap: [
            "Explain the role of vitamin C in the body and describe the symptoms of scurvy. [4]",
            "Compare the energy value per gram of lipids and carbohydrates and explain the advantage of storing energy as fat rather than glycogen. [3]",
            "Explain why dietary fibre is important even though it cannot be digested or absorbed. [2]",
            "A person has anaemia caused by iron deficiency. Explain how iron deficiency causes the symptoms of anaemia. [4]"
          ]
        },
        {
          title: "Digestion — Mechanical and Chemical Processes",
          body: `Digestion converts large, insoluble food molecules into small, soluble molecules that can be absorbed across the gut wall into the blood. Two processes work simultaneously:

**Mechanical digestion:** Physically breaks food into smaller pieces, increasing surface area for enzyme action. Occurs in:
- Mouth (chewing by teeth, shaping by tongue)
- Stomach (muscular churning — peristaltic contractions of the thick muscular wall mix food with gastric juice, producing semi-liquid chyme)

**Chemical digestion:** Enzymes hydrolyse specific bonds in large molecules:

## Digestion By Region

### Mouth
- Teeth cut and grind food into smaller pieces — incisors cut, premolars and molars grind
- Tongue shapes food into a **bolus** (ball) and mixes it with **saliva**
- Saliva contains:
  - **Salivary amylase** — hydrolyses starch → maltose (partial digestion; amylase has optimum pH ~7)
  - **Mucus** — lubricates the bolus for swallowing
  - **Lysozyme** — enzyme that kills bacteria (breaks cell walls)
- The bolus is swallowed and moves down the oesophagus by **peristalsis**

### Stomach
- Muscular walls churn food — powerful circular and longitudinal muscles
- **Gastric glands** in the stomach wall secrete **gastric juice** containing:
  - **Hydrochloric acid (HCl)** — creates strongly acidic pH (~1.5–2); denatures proteins in food; kills most ingested bacteria; activates pepsinogen
  - **Pepsinogen** (inactive proenzyme) — activated by HCl to form active **pepsin** (endopeptidase): hydrolyses peptide bonds in proteins → shorter polypeptides; optimum pH ~2
  - **Mucus** — protects the stomach lining from acid and pepsin (prevents autodigestion)
- Pepsin is secreted as inactive pepsinogen to prevent it from digesting the cells that make it — activated only when it reaches the acidic stomach lumen

### Small Intestine (Duodenum + Ileum)
The **pancreas** secretes **pancreatic juice** through the pancreatic duct into the duodenum:
- **Pancreatic amylase** — continues starch digestion → maltose
- **Pancreatic lipase** — hydrolyses triglycerides → fatty acids + glycerol
- **Trypsin and chymotrypsin** (endopeptidases) — hydrolyse peptide bonds in polypeptides → shorter peptides; secreted as inactive trypsinogen/chymotrypsinogen, activated in duodenum
- **Carboxypeptidases** (exopeptidases) — remove amino acids from the ends of peptide chains
- **Pancreatic juice is alkaline (pH ~8)** — neutralises acidic chyme from stomach, providing optimum pH for pancreatic enzymes

**Bile** (produced by liver, stored in gallbladder, secreted into duodenum via bile duct):
- Not an enzyme — does not digest chemically
- **Bile salts emulsify fats** — break large fat globules into millions of tiny droplets (emulsification), enormously increasing the surface area for lipase to act on; a crucial step without which fat digestion would be very slow
- Bile is alkaline — helps neutralise stomach acid

**Brush border enzymes** on microvilli of ileum epithelial cells complete digestion:
- **Maltase**: maltose → 2 glucose
- **Sucrase**: sucrose → glucose + fructose
- **Lactase**: lactose → glucose + galactose
- **Peptidases** (dipeptidases, aminopeptidases): dipeptides/tripeptides → amino acids

### Large Intestine (Colon → Rectum → Anus)
- Absorbs water from undigested material → concentrates waste into faeces
- Absorbs vitamins (K, B₁₂) produced by gut bacteria (commensals)
- Symbiotic bacteria also ferment some dietary fibre → short-chain fatty acids absorbed by colonocytes`,
          groups: [],
          recap: [
            "Explain why pepsin is secreted as inactive pepsinogen and then activated by HCl in the stomach. What would happen if pepsin were secreted in its active form? [4]",
            "Describe the role of bile in fat digestion. Explain why emulsification is important for efficient lipase action. [4]",
            "State the products of complete digestion of: (a) starch, (b) a protein, (c) a triglyceride (fat). [3]",
            "Explain why pancreatic juice is alkaline and why this is necessary for digestion in the small intestine. [3]"
          ]
        },
        {
          title: "Absorption in the Small Intestine",
          body: `The **ileum** (the longest section of the small intestine, approximately 6 m) is the primary site of absorption. The entire design of the ileum is optimised for absorbing the products of digestion with maximum efficiency.

## Structural Adaptations of the Ileum

**Villi (singular: villus):** Finger-like projections of the mucosa (inner lining) into the lumen, typically 0.5–1 mm tall. Each villus has:
- A core of **connective tissue** containing a network of blood capillaries and a central **lacteal** (lymph vessel)
- A single layer of **epithelial cells** on its surface — these cells directly contact the digested food
- The epithelial cells have their own projections called **microvilli**

**Microvilli (the "brush border"):** Each epithelial cell has approximately 3,000 microvilli on its luminal surface, each ~1 μm long. The combined effect of villi + microvilli increases the absorption surface area of the ileum to approximately **300 m²** — the area of a large tennis court, folded into a tube about 3 cm in diameter.

**Other adaptations:**
- **One-cell-thick epithelium** — short diffusion distance from lumen to capillary blood (~20 μm total)
- **Rich blood capillary network** in each villus — carries absorbed glucose and amino acids directly to the hepatic portal vein → liver → rest of body; blood flow constantly removes absorbed molecules, maintaining steep concentration gradients
- **Lacteals** in each villus — absorb fatty acids and glycerol after they are resynthesised into triglycerides and packaged as **chylomicrons** (lipid droplets coated in protein); chylomicrons travel in lymph → thoracic duct → bloodstream
- **Long ileum (~6 m)** — maximises contact time between digested food and absorption surface
- **Peristalsis** — keeps moving food slowly forward, ensuring contact with fresh absorptive surface

## What Gets Absorbed and How

| Nutrient | Mechanism | Route |
|---------|-----------|-------|
| Glucose | Active transport (sodium-glucose co-transporter) | Blood capillaries → hepatic portal vein |
| Amino acids | Active transport | Blood capillaries → hepatic portal vein |
| Fatty acids + glycerol | Diffusion → resynthesised to triglycerides → chylomicrons | Lacteals → lymph → bloodstream |
| Water | Osmosis | Blood capillaries |
| Vitamins (water-soluble: B, C) | Diffusion and active transport | Blood capillaries |
| Vitamins (fat-soluble: A, D, E, K) | With fat absorption via micelles | Lacteals |
| Mineral ions | Active transport | Blood capillaries |`,
          groups: [],
          recap: [
            "Describe five structural adaptations of the ileum that maximise absorption of digested food. For each adaptation, explain precisely how it increases the rate of absorption. [10]",
            "Explain why the products of fat digestion enter the lacteals rather than the blood capillaries directly. [3]",
            "A student says 'the villi increase the surface area of the small intestine'. How could this statement be made more precise? [2]",
            "Explain how glucose is absorbed across the epithelial cells of the ileum into the blood. State the transport mechanism and explain why it is this mechanism. [3]"
          ]
        }
      ]
    },
    {
      number: 8,
      title: "Transport in Plants",
      intro: "Plants need to transport water and mineral ions from roots to leaves (upward through xylem) and organic solutes — principally sucrose — throughout the plant in both directions (through phloem). The structure of xylem and phloem tissue is precisely adapted to these transport functions. Understanding the transpiration stream, the factors affecting transpiration rate, and the pressure-flow mechanism of translocation requires integrating knowledge of diffusion, osmosis, and active transport with plant anatomy.",
      subheadings: [
        {
          title: "Xylem — Water Transport and Transpiration",
          body: `## Structure of Xylem Vessels

Xylem vessels are formed by a developmental process:
1. A series of cells differentiates and begins depositing **lignin** (a complex polymer) on their inner walls
2. The cells die — their living contents disintegrate
3. The end walls between adjacent cells break down
4. The result is a long, continuous, hollow tube with **lignified walls**

The lignin provides two critical properties:
- **Structural support** — lignified walls are rigid and resist the negative pressure (tension) created during active transpiration without collapsing
- **Waterproofing** — lignin is hydrophobic, preventing water from leaking through the walls (though water can move laterally through unlignified pits)

Lignin is deposited in specific patterns — rings, spirals, or networks — that allow the vessel to stretch slightly as the plant grows.

## The Cohesion-Tension Mechanism (Transpiration Stream)

Water moves from soil → root → stem → leaves → atmosphere in a continuous stream driven primarily by **evaporation at the leaf surface**. The mechanism involves three physical properties of water:

**Step 1 — Transpiration at the leaf:**
- Water evaporates from the moist cell walls of mesophyll cells into the substomatal air spaces
- Water vapour diffuses out through open stomata (concentration gradient: humid air inside leaf → drier air outside)
- This evaporation removes water from the top of the xylem column

**Step 2 — Tension created:**
- As water evaporates, it pulls on the water column below it — creating **tension** (negative pressure) in the xylem
- This tension is transmitted all the way down the xylem to the roots

**Step 3 — Cohesion maintains the column:**
- Water molecules form **hydrogen bonds** with each other — this property is called **cohesion**
- These hydrogen bonds are strong enough to maintain the water column as a continuous thread even under tension, rather than breaking into gaps

**Step 4 — Adhesion to xylem walls:**
- Water molecules also form hydrogen bonds with the —OH groups on the xylem wall — this is **adhesion**
- Adhesion helps support the water column against gravity by creating a thin film along the xylem wall

**Step 5 — Water enters the xylem at the root:**
- As water is pulled up the xylem, the water potential in root xylem drops
- Water moves by osmosis from root cortex cells (higher water potential) into xylem (lower water potential)
- Water enters root hair cells from soil water by osmosis (soil water has higher water potential than root cytoplasm)

## Transpiration and Stomata

**Stomata** (singular: stoma) are pores in the leaf epidermis, each surrounded by a pair of **guard cells**. Guard cells control stomatal aperture (opening size):

- In **light**, guard cells photosynthesise → K⁺ ions actively transported into guard cells → water potential falls → water enters by osmosis → guard cells become turgid → the curved shape of guard cells means they bow outward → stomatal pore opens
- In **darkness**, K⁺ ions leave guard cells → water potential rises → water leaves → guard cells become flaccid → stomatal pore closes

Stomata are typically open during the day (to allow CO₂ in for photosynthesis) and closed at night.

## Factors Affecting Transpiration Rate

| Factor | Effect on transpiration | Mechanism |
|--------|------------------------|-----------|
| **Light intensity** | Increases transpiration | Stomata open wider; more evaporation |
| **Temperature** | Increases transpiration | Higher KE of water molecules → faster evaporation; lower relative humidity of air |
| **Humidity** | Decreases transpiration | Reduces the water vapour concentration gradient between leaf interior and outside air |
| **Wind speed** | Increases transpiration | Removes humid air from around leaf; maintains steep gradient |
| **Surface area of leaves** | Increases transpiration | More stomata; more surface for evaporation |

## Measuring Transpiration — The Potometer

A **potometer** measures the rate of water uptake by a plant shoot (a close approximation of transpiration rate, since most water taken up is lost by transpiration):
- A leafy shoot is cut underwater (to prevent air bubbles entering xylem) and inserted into the apparatus
- An air bubble is introduced into the capillary tube
- As the shoot transpires and takes up water, the air bubble moves toward the shoot
- The distance moved per minute = rate of water uptake`,
          groups: [],
          recap: [
            "Explain the cohesion-tension mechanism for the movement of water from roots to leaves. Your answer must include the terms cohesion, tension, transpiration, and osmosis. [6]",
            "Explain how guard cells open and close stomata in response to light. [4]",
            "State two structural features of xylem vessels and explain how each is related to its function. [4]",
            "Explain why transpiration rate increases on a hot, windy, dry day but decreases in humid conditions. [4]"
          ]
        },
        {
          title: "Phloem and Translocation",
          body: `## Structure of Phloem

Unlike xylem, phloem consists of **living cells**. The two main cell types are:

**Sieve tube elements:**
- Elongated cells with **sieve plates** (end walls with large pores) connecting adjacent cells, forming long sieve tubes
- Very little cytoplasm — few organelles, no nucleus in mature cells — to minimise resistance to mass flow of sap
- The lumen contains sieve tube sap rich in sucrose, amino acids, and other organic molecules

**Companion cells:**
- Closely associated with each sieve tube element, connected by numerous **plasmodesmata** (cytoplasmic channels through the cell wall)
- Companion cells are highly metabolically active — they contain a nucleus, abundant mitochondria, and ribosomes — and carry out the metabolic functions that the enucleate sieve tube elements cannot perform themselves
- Critically, companion cells perform the **active loading** of sucrose into sieve tubes at source tissues

## Translocation — The Pressure-Flow Hypothesis

**Translocation** is the transport of dissolved organic solutes (mainly sucrose, also amino acids, plant hormones, and other organic molecules) through the phloem sieve tubes from **sources** (where solutes enter the phloem) to **sinks** (where solutes leave the phloem and are used or stored).

**Source** = any tissue where sucrose is loaded INTO the phloem:
- Photosynthesising leaves (produce sucrose)
- Storage organs mobilising reserves (germinating seed cotyledons; spring bulbs releasing stored starch → sugars)

**Sink** = any tissue where sucrose is unloaded FROM the phloem:
- Growing meristems (shoot tips, root tips) — need glucose for cell division and growth
- Developing fruits and seeds — store glucose as starch, fats, and proteins
- Storage organs (potato tubers) — store surplus sucrose as starch
- All respiring cells — use glucose as fuel

The **pressure-flow hypothesis** explains how translocation works:

1. At the **source** (e.g. leaf), companion cells actively transport sucrose INTO sieve tubes using carrier proteins (requires ATP from respiration)
2. High sucrose concentration in sieve tubes lowers water potential → water enters from adjacent xylem by osmosis → **hydrostatic pressure** increases at the source end
3. At the **sink** (e.g. root tip), sucrose is unloaded (actively transported out or used in respiration) → sucrose concentration in sieve tubes falls → water potential rises → water leaves by osmosis back to xylem → **hydrostatic pressure** decreases at the sink end
4. The **pressure gradient** (high pressure at source → low pressure at sink) drives **mass flow** of phloem sap from source to sink

**Evidence for active loading:** Applying metabolic inhibitors (cyanide, which blocks ATP synthesis) stops translocation even when light (for photosynthesis) is still available. This confirms translocation requires ATP — it is an active process, unlike transpiration which is passive.

## Comparison of Xylem and Phloem

| Feature | Xylem | Phloem |
|---------|-------|--------|
| Cell type | Dead, empty tubes | Living sieve tube elements + companion cells |
| Cell walls | Heavily lignified | Thin, not lignified |
| Direction of transport | Upward only (roots → leaves) | Both directions (source → sink) |
| Substance transported | Water + mineral ions | Sucrose, amino acids, other organic molecules |
| Driving force | Transpiration (passive) | Active loading + osmosis creates pressure gradient |
| Energy required? | No | Yes (for active loading at source) |`,
          groups: [],
          recap: [
            "Explain the pressure-flow hypothesis of translocation. Your answer should include what happens at the source and at the sink, and explain what drives the movement of sap. [6]",
            "Explain why translocation stops when a metabolic inhibitor is applied to phloem tissue, but water transport in xylem continues unaffected. [3]",
            "Give one example of a source tissue and one example of a sink tissue in a tomato plant in summer. Explain your choices. [3]",
            "Compare the structure of xylem and phloem tissue, explaining how the structure of each is suited to its function. [6]"
          ]
        }
      ]
    },
    {
      number: 9,
      title: "Transport in Animals",
      intro: "Large multicellular animals cannot rely on diffusion alone to supply oxygen and remove carbon dioxide from deep tissues — the distances are too great and the rates too slow. The human circulatory system solves this by pumping blood in a closed system of vessels at high pressure, delivering oxygen and nutrients to every cell and removing waste products. Understanding the double circulation, heart structure and function, blood vessel types, and the composition of blood is fundamental to Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "The Double Circulatory System and the Heart",
          body: `## Why a Double Circulatory System?

In a **single circulatory system** (like fish), blood passes from heart → gills (gas exchange) → body → back to heart. After passing through the gill capillaries, blood pressure drops significantly — so blood arrives at body tissues at relatively low pressure.

In humans and all other mammals and birds, blood passes through the heart **twice** per complete circuit:

- **Pulmonary circuit:** Right ventricle → lungs → left atrium (blood oxygenated)
- **Systemic circuit:** Left ventricle → body → right atrium (blood deoxygenated)

**Advantages:**
- Blood is re-pressurised after passing through the lung capillaries before being sent to the body
- Oxygenated and deoxygenated blood are completely separated — no mixing
- The left ventricle can pump at much higher pressure than the right (the body needs stronger pressure than the nearby lungs), allowing efficient delivery to distant organs

## Structure of the Heart

The heart is a muscular double pump — four chambers with valves preventing backflow:

**Right atrium:** Receives deoxygenated blood from the body via the **vena cava** (superior + inferior). Thin walls — low pressure pumping.

**Right ventricle:** Pumps deoxygenated blood to lungs via the **pulmonary artery** at relatively low pressure (lungs are nearby; capillaries are delicate).

**Left atrium:** Receives oxygenated blood from lungs via the **pulmonary veins**. Thin walls.

**Left ventricle:** Pumps oxygenated blood to entire body via the **aorta** at HIGH pressure. Has the **thickest muscular wall** of the four chambers — must generate sufficient force to push blood to extremities (feet, hands) against gravity and friction.

**Valves (prevent backflow):**
- **Atrioventricular valves** (between atria and ventricles): Bicuspid (left) and tricuspid (right). Open when atria contract; closed when ventricles contract.
- **Semilunar valves** (between ventricles and arteries — aorta and pulmonary artery): Open when ventricles contract; close when ventricles relax, preventing backflow into the heart.

## The Cardiac Cycle

The heart beats approximately 70 times per minute at rest — about 2.5 billion times in a lifetime without stopping.

- **Systole:** Ventricles contract — high pressure → blood ejected into aorta and pulmonary artery; AV valves close (lub sound); semilunar valves open
- **Diastole:** Ventricles relax — pressure drops; semilunar valves close (dub sound); AV valves open as blood fills from atria
- The heart muscle is **myogenic** — it generates its own electrical impulses from the **sinoatrial node (SAN)** in the right atrial wall (the "pacemaker"). The SAN sets the rate; nerves and hormones (adrenaline) modify it.`,
          groups: [],
          recap: [
            "Explain why the left ventricle has a thicker muscular wall than the right ventricle. [3]",
            "Describe the path taken by a red blood cell from the right atrium of the heart to the left atrium. Name all the structures it passes through in order. [5]",
            "Explain the role of the atrioventricular valves and semilunar valves in ensuring one-directional blood flow. [4]",
            "Explain one advantage of the double circulatory system over a single circulatory system. [2]"
          ]
        },
        {
          title: "Blood Vessels and Blood Composition",
          body: `## The Three Types of Blood Vessel

**Arteries** carry blood away from the heart (mnemonic: **A**rtery = **A**way):
- Thick muscular walls with abundant elastic fibres — withstand and smooth the high-pressure pulsatile flow from the ventricles
- Narrow lumen relative to wall thickness
- No valves needed — pressure keeps blood moving forward

**Veins** carry blood toward the heart:
- Thin walls — blood pressure is low
- Wide lumen relative to wall thickness — reduces resistance
- **Valves** every few centimetres — prevent backflow; especially important in leg veins where blood must flow upward against gravity. Skeletal muscle contraction squeezes veins, pushing blood forward; valves prevent it flowing back.

**Capillaries** are the exchange vessels:
- Wall is only **one cell thick** (single endothelial cell layer) — minimises diffusion distance
- **Tiny lumen** (~8 μm diameter) — red blood cells must squeeze through one by one; this slows blood flow, maximising exchange time
- **Enormous number** — total capillary length in human body ~100,000 km; total surface area ~500 m²
- **Pores** between endothelial cells allow **plasma** to leak out as **tissue fluid** (filtered plasma minus large proteins), bathing all body cells directly

| Feature | Artery | Vein | Capillary |
|---------|--------|------|-----------|
| Wall thickness | Thick (muscle + elastic) | Thin | One cell |
| Lumen diameter | Narrow relative to wall | Wide relative to wall | Very narrow |
| Valves | None | Yes | None |
| Blood pressure | High, pulsatile | Low, smooth | Very low |
| Function | Carry blood from heart at high pressure | Return blood to heart | Exchange of materials with tissues |

## Blood Composition

Blood is a **connective tissue** consisting of a liquid matrix (plasma) and three types of cellular elements:

**Plasma (55% of blood volume):**
- Pale yellow liquid, ~90% water
- Transports: glucose, amino acids, fatty acids, CO₂ (as bicarbonate HCO₃⁻), hormones (insulin, adrenaline), urea, antibodies, clotting factors, plasma proteins (albumin — maintains blood osmotic pressure)

**Red blood cells / Erythrocytes (45% of blood volume):**
- Biconcave, no nucleus — detailed adaptations covered in Chapter 2
- 4–5 million per mm³; lifespan ~120 days; made in red bone marrow; destroyed in spleen and liver

**White blood cells / Leukocytes (< 1% of blood volume):**
- Two main types:
  - **Phagocytes** (neutrophils, macrophages) — engulf and destroy pathogens and debris by phagocytosis
  - **Lymphocytes** (B cells and T cells) — produce antibodies (B cells); directly kill infected cells (T cells); provide immunological memory

**Platelets / Thrombocytes:**
- Tiny cell fragments (no nucleus), 250,000 per mm³
- Trigger blood clotting when a vessel wall is damaged:
  1. Platelets aggregate at wound → plug forms
  2. Platelets + damaged tissue release clotting factors
  3. Clotting cascade converts prothrombin → thrombin (enzyme)
  4. Thrombin converts fibrinogen (soluble) → fibrin (insoluble threads)
  5. Fibrin mesh traps red blood cells → clot (scab) forms → seals wound, prevents blood loss and pathogen entry`,
          groups: [],
          recap: [
            "Compare the structure of arteries and veins and explain how each structure is adapted to its function. [6]",
            "Explain how capillaries are adapted for the exchange of substances between blood and body cells. [4]",
            "State the four components of blood and give the function of each. [4]",
            "Explain why veins have valves but arteries do not. [2]"
          ]
        }
      ]
    },
    {
      number: 10,
      title: "Diseases and Immunity",
      intro: "Pathogens — microorganisms that cause disease — constantly challenge the body. The immune system defends against them through multiple layers: physical and chemical barriers, non-specific phagocytosis, and the specific adaptive immune response involving lymphocytes and antibodies. Vaccination exploits immunological memory to provide protection before exposure. Understanding how the immune system works — and why it sometimes fails — is essential for Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "Pathogens, Transmission and Body Defences",
          body: `## What is a Pathogen?

A **pathogen** is a microorganism (or other agent) that causes disease in its host. Pathogens cause disease by:
- Producing **toxins** that damage tissues or disrupt body processes (e.g. *Clostridium botulinum* produces the most toxic substance known; *Vibrio cholerae* produces a toxin causing extreme fluid loss from intestinal cells)
- **Directly destroying cells** (e.g. HIV destroys T-helper lymphocytes; malaria parasite destroys red blood cells; influenza virus destroys airway epithelial cells)

## Types of Pathogens and Disease Examples

| Pathogen type | Disease | Transmission | Prevention |
|-------------|---------|--------------|-----------|
| Bacterium (*Vibrio cholerae*) | Cholera | Contaminated water/food | Clean water, sanitation, oral rehydration |
| Protoctist (*Plasmodium*) | Malaria | Female *Anopheles* mosquito bite (vector) | Mosquito nets, insecticides, antimalarials |
| Bacterium (*Mycobacterium tuberculosis*) | Tuberculosis | Airborne droplets (coughing) | BCG vaccine, antibiotics |
| Virus (HIV) | AIDS | Unprotected sex, shared needles, blood transfusion | Condoms, clean needles, antiretroviral drugs |
| Virus (influenza) | Flu | Airborne droplets | Annual vaccination |

## First-Line Defences (Non-Specific Physical/Chemical Barriers)

These defences prevent pathogens entering the body — they act against ALL pathogens regardless of type:

- **Skin:** Continuous physical barrier; dead keratinised outer layer resists penetration; sebaceous glands secrete **sebum** (slightly acidic — inhibits bacterial growth)
- **Mucus and cilia in airways:** Goblet cells secrete mucus that traps inhaled particles and pathogens; ciliated epithelial cells beat continuously to sweep the mucus escalator upward toward the throat where it is swallowed (and any pathogens are killed by stomach acid)
- **Stomach HCl:** pH ~1.5–2 kills most swallowed pathogens
- **Lysozyme in tears, saliva, and nasal secretions:** Enzyme that cleaves peptidoglycan in bacterial cell walls → kills many bacteria
- **Blood clotting:** Rapidly seals wounds to prevent pathogen entry`,
          groups: [],
          recap: [
            "Explain how malaria is transmitted, naming the pathogen and vector. Suggest two methods of reducing malaria transmission. [4]",
            "Describe three ways in which the body prevents pathogens from entering at the surface level. [3]",
            "Explain why it is important that cholera bacteria cause disease by producing toxins rather than by invading blood. What does this tell you about how oral rehydration therapy works? [4]"
          ]
        },
        {
          title: "The Specific Immune Response and Vaccination",
          body: `## The Specific Immune Response

When pathogens bypass the first-line defences, the adaptive immune system mounts a response targeted specifically at that pathogen based on its unique surface molecules called **antigens**.

### Phagocytosis (Second-Line, Non-Specific)

Phagocytes (neutrophils, macrophages) engulf pathogens:
1. Phagocyte detects chemical signals released by pathogens and damaged tissue (chemotaxis)
2. Phagocyte extends pseudopodia around the pathogen → engulfs it by endocytosis → forms a **phagosome** (membrane-bound vacuole)
3. Lysosomes fuse with the phagosome → release **digestive enzymes** (lysozyme, proteases, lipases) → destroy pathogen
4. Macrophages present fragments of the pathogen (antigens) on their surface → activate lymphocytes

### B Lymphocytes — Antibody Production

1. A specific antigen from the pathogen binds to the complementary **receptor** on one particular B cell (every B cell has a unique receptor)
2. Binding activates the B cell (with help from T-helper cells)
3. B cell divides rapidly by mitosis → **clonal expansion** → large population of identical B cells
4. Most become **plasma cells** — each secretes thousands of identical **antibody** molecules per second into blood and tissue fluid
5. A minority become **memory B cells** — long-lived cells that persist for years and allow rapid secondary response

### Antibodies — Structure and Function

Antibodies are **Y-shaped glycoproteins** (immunoglobulins) with:
- **Two identical binding sites** (the variable regions at the tips of the Y) — complementary to one specific antigen
- **Constant region** (the stem of the Y) — binds to receptors on phagocytes, flagging the pathogen for destruction

How antibodies neutralise pathogens:
- **Neutralisation:** Bind to surface proteins of viruses or toxin molecules → block their ability to enter cells or cause harm
- **Agglutination:** Antibodies crosslink pathogens into clumps → easier for phagocytes to engulf
- **Opsonisation:** Antibody coating signals "eat me" to phagocytes → enhanced phagocytosis

### T Lymphocytes

- **T-helper cells (CD4⁺):** Activated by antigen-presenting macrophages → release cytokines that activate B cells and cytotoxic T cells
- **Cytotoxic T cells (CD8⁺):** Kill body cells that are infected with viruses (they display viral antigens on their surface); also kill cancer cells
- **T-regulatory cells:** Dampen immune response once infection is cleared — prevent autoimmunity
- **T-memory cells:** Long-lived; provide rapid T cell response upon re-exposure

## Vaccination

A vaccine stimulates the immune system to produce memory cells **without causing disease** — it uses a non-dangerous form of the antigen:

Types of vaccine antigens:
- **Live attenuated (weakened) pathogen** — MMR vaccine (measles, mumps, rubella); BCG (tuberculosis)
- **Killed/inactivated pathogen** — flu injection; hepatitis A
- **Toxoid (inactivated toxin)** — tetanus, diphtheria
- **Subunit vaccine (protein fragment)** — hepatitis B surface protein; HPV
- **mRNA vaccine (new)** — COVID-19 vaccines: mRNA instructs cells to make spike protein → immune response → memory cells

**How vaccination provides protection:**
1. Vaccine antigen introduced into the body
2. Primary immune response — small, slow antibody production; memory B and T cells formed
3. On future exposure to actual pathogen: memory cells recognise antigen instantly
4. Rapid, massive secondary response — high antibody levels within hours → neutralise pathogen before disease develops

**Herd immunity:** When ≥80–95% of a population is immune, pathogen cannot spread even to unvaccinated individuals — the chain of transmission is broken. Critical for protecting those who cannot be vaccinated (newborns, immunocompromised individuals, people with vaccine allergies).`,
          groups: [],
          recap: [
            "Describe the process of phagocytosis, starting from detection of a bacterium to its destruction. [5]",
            "Explain how vaccination provides protection against a specific pathogen. Include the role of memory cells in your answer. [6]",
            "Explain what is meant by herd immunity and explain why it is important. [3]",
            "Distinguish between B lymphocytes and T lymphocytes in terms of their roles in the immune response. [4]"
          ]
        }
      ]
    },
    {
      number: 11,
      title: "Gas Exchange in Humans",
      intro: "Every living cell requires oxygen for aerobic respiration and must remove carbon dioxide. Gas exchange in humans occurs across the enormous, thin, moist surface of the alveoli in the lungs, where the steep concentration gradients maintained by ventilation and blood flow drive rapid diffusion of O₂ into blood and CO₂ out. Understanding the mechanism of ventilation, the structural adaptations of the gas exchange surface, and the composition of inhaled vs exhaled air is essential IGCSE content.",
      subheadings: [
        {
          title: "The Gas Exchange System and Alveolar Adaptations",
          body: `## Structure of the Human Gas Exchange System

**Pathway of air:** nasal passages → trachea → two bronchi → progressively smaller bronchioles → terminal bronchioles → alveolar ducts → alveoli

| Structure | Key feature | Function |
|---------|------------|---------|
| **Nasal passages** | Capillaries, mucus, hairs | Warm, moisten, filter inhaled air |
| **Trachea** | C-shaped cartilage rings (not complete — leaves gap for oesophagus to bulge when swallowing); ciliated epithelium + goblet cells | Supports open airway; mucus + cilia remove particles |
| **Bronchi** | Cartilage rings; ciliated epithelium | Conduct air to each lung |
| **Bronchioles** | Smooth muscle (no cartilage) | Can constrict (in asthma) or dilate to regulate airflow |
| **Alveoli** | One-cell-thick walls; dense capillaries; ~700 million | Gas exchange surface |

## Alveolar Adaptations for Gas Exchange

The alveoli represent the most perfect diffusion surface in the human body:

- **Enormous surface area:** ~700 million alveoli with total surface area of 70–80 m² (tennis court sized) — compared to only ~0.5 m² if the lung surface were smooth
- **Ultra-thin walls:** The alveolar epithelium (type I pneumocytes) is only ~0.1–0.2 μm thick — the thinnest cell sheets in the body; combined blood-gas barrier (including capillary endothelium) is ~0.5 μm total
- **Rich capillary network:** Every alveolus is almost entirely wrapped in capillaries; blood is exposed to alveolar air over a huge surface; blood flow continuously carries O₂ away from alveolus and delivers fresh CO₂ — maintaining steep gradients
- **Moist surface:** Alveolar walls are lined with a thin film of fluid containing **surfactant** (produced by type II pneumocytes) — reduces surface tension, prevents alveoli collapsing; gas molecules dissolve in this fluid before crossing the epithelium
- **Ventilation:** Breathing continuously refreshes alveolar air, replenishing O₂ and removing CO₂

## Ventilation Mechanism

Breathing is driven by changes in thoracic volume, which create pressure changes:

**Inspiration (breathing in):**
- External intercostal muscles contract → ribs move up and out
- Diaphragm muscles contract → diaphragm flattens (moves down)
- Thoracic volume increases → pressure inside falls below atmospheric pressure
- Air flows in (high pressure outside → low pressure inside)

**Expiration (breathing out — at rest is passive):**
- External intercostal muscles relax → ribs fall under gravity
- Diaphragm relaxes → returns to dome shape
- Elastic recoil of lungs
- Thoracic volume decreases → pressure rises above atmospheric
- Air flows out

## Inhaled vs Exhaled Air

| Gas | Inhaled air | Exhaled air | Why different |
|-----|------------|-------------|---------------|
| Oxygen (O₂) | ~21% | ~16% | O₂ absorbed into blood at alveoli |
| Carbon dioxide (CO₂) | ~0.04% | ~4% | CO₂ released from blood into alveoli |
| Nitrogen (N₂) | ~78% | ~78% | Not used by body |
| Water vapour | Variable | ~100% saturated | Water evaporates from moist alveolar surfaces |`,
          groups: [],
          recap: [
            "Describe five structural features of the alveolus and explain how each maximises the rate of gas exchange. [10]",
            "Explain the mechanism of inspiration, including the role of the diaphragm and intercostal muscles. [4]",
            "State the differences in composition between inhaled and exhaled air for oxygen, carbon dioxide, and water vapour. Explain each difference. [6]",
            "A patient with emphysema has many of their alveolar walls broken down. Explain why this causes breathlessness. [3]"
          ]
        }
      ]
    },
    {
      number: 12,
      title: "Respiration",
      intro: "Respiration is the process by which living cells release chemical energy from organic molecules to produce ATP — the universal energy currency used to power every cellular activity. Aerobic respiration produces ~36–38 ATP per glucose and requires oxygen; anaerobic respiration produces only 2 ATP and can proceed without oxygen. Understanding both pathways, their locations in the cell, their equations, and the applications of anaerobic respiration in biotechnology is essential Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "Aerobic Respiration",
          body: `## Overview and Equation

**Aerobic respiration** is the complete oxidation of glucose to CO₂ and water in the presence of oxygen, releasing a large amount of energy as ATP.

**Word equation:**
glucose + oxygen → carbon dioxide + water (+ energy released as ATP)

**Balanced symbol equation:**
$$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{~36 ATP}$$

## Stages of Aerobic Respiration

Aerobic respiration occurs in two main locations:

**Stage 1 — Glycolysis (in the cytoplasm):**
- Glucose (6 carbons) is phosphorylated and split into two molecules of pyruvate (3 carbons each)
- Net yield: **2 ATP** and 2 reduced NAD
- Requires no oxygen — this stage can proceed anaerobically
- Occurs in every living cell

**Stage 2 — Link Reaction (in mitochondrial matrix):**
- Pyruvate → acetyl CoA (2 carbons) + CO₂
- Reduced NAD produced

**Stage 3 — Krebs Cycle (in mitochondrial matrix):**
- Acetyl CoA enters a cyclic series of reactions
- CO₂ released; reduced NAD and reduced FAD produced; 2 ATP per cycle (one per pyruvate)
- Generates the hydrogen carriers that feed into Stage 4

**Stage 4 — Electron Transport Chain / Oxidative Phosphorylation (on inner mitochondrial membrane — cristae):**
- Reduced NAD and reduced FAD donate electrons to protein complexes in the inner membrane
- Electrons pass down an energy gradient through carrier proteins
- Energy released pumps H⁺ ions across the inner membrane → creates a gradient
- H⁺ flows back through ATP synthase → drives synthesis of ATP (by chemiosmosis)
- Oxygen is the final electron acceptor: O₂ + 4e⁻ + 4H⁺ → 2H₂O
- Yields approximately **32–34 ATP** (the bulk of aerobic respiration's ATP)

**Total ATP yield per glucose:** approximately **36–38 ATP** (compared to just 2 from glycolysis alone)

The mitochondrion's extensive **cristae** (inner membrane folds) provide the enormous surface area needed for the electron transport chain. This is why cells with high energy demands have mitochondria with exceptionally dense cristae.`,
          groups: [],
          recap: [
            "Write the balanced symbol equation for aerobic respiration. [2]",
            "State where in the cell glycolysis and the Krebs cycle occur. [2]",
            "Explain why the inner mitochondrial membrane is extensively folded into cristae. [2]",
            "Compare the ATP yield of aerobic and anaerobic respiration and explain why this difference exists. [4]"
          ]
        },
        {
          title: "Anaerobic Respiration",
          body: `## Definition and Conditions

**Anaerobic respiration** is the release of energy from organic molecules without the use of oxygen. Only glycolysis is used, producing just **2 ATP per glucose** — compared to 36–38 from aerobic respiration.

Anaerobic respiration occurs when:
- Oxygen supply to cells is insufficient for the rate of demand (e.g. intense exercise — muscle cells respire faster than the cardiovascular system can deliver O₂)
- An organism lives in an oxygen-poor environment (anaerobic bacteria in deep soil, intestinal bacteria, yeast in fermenting dough)

## In Humans and Animals — Lactic Acid Fermentation

$$\\text{glucose} \\rightarrow \\text{lactic acid} + \\text{small amount of ATP}$$

In animal cells during intense exercise, when O₂ delivery is insufficient:
- Glycolysis produces pyruvate + 2 ATP
- Pyruvate is reduced to **lactic acid (lactate)** using reduced NAD → regenerates NAD so glycolysis can continue
- Without this regeneration of NAD, glycolysis would stop (it needs NAD as a hydrogen acceptor)

**Consequences of lactic acid accumulation:**
- Lactic acid lowers pH in muscle cells → inhibits enzyme activity → muscle fatigue and the familiar "burn"
- After exercise: **oxygen debt** — extra O₂ is consumed to oxidise accumulated lactic acid back to pyruvate → enters Krebs cycle → fully oxidised; breathing rate remains elevated after exercise to repay this debt

## In Yeast and Plants — Alcoholic Fermentation

$$\\text{glucose} \\rightarrow \\text{ethanol} + CO_2 + \\text{small amount of ATP}$$

Yeast and plant cells in anaerobic conditions convert pyruvate to:
1. Ethanal (acetaldehyde) + CO₂ (CO₂ causes bread to rise)
2. Ethanal is reduced to **ethanol** using reduced NAD → regenerates NAD for glycolysis

This process is called **fermentation** and is the basis of:
- **Brewing and winemaking:** Yeast ferments sugar in grape juice / grain → ethanol + CO₂ → alcoholic drinks
- **Bread making:** Yeast ferments sugars in dough → CO₂ causes dough to rise; alcohol evaporates during baking
- **Biofuel production:** Fermentation of plant biomass (corn, sugarcane) → ethanol used as fuel (bioethanol); a renewable, lower-carbon alternative to fossil fuels

## Comparison

| Feature | Aerobic | Anaerobic (animals) | Anaerobic (yeast) |
|---------|---------|--------------------|--------------------|
| O₂ required? | Yes | No | No |
| End products | CO₂ + H₂O | Lactic acid | Ethanol + CO₂ |
| ATP yield | ~36–38 | 2 | 2 |
| Location | Cytoplasm + mitochondria | Cytoplasm only | Cytoplasm only |`,
          groups: [],
          recap: [
            "Write the word equation for anaerobic respiration in (a) human muscle cells during intense exercise and (b) yeast in anaerobic conditions. [2]",
            "Explain why lactic acid accumulates in muscle cells during intense exercise and explain the concept of oxygen debt. [4]",
            "Describe two commercial applications of anaerobic respiration in yeast. For each, explain the role of both the ethanol and the CO₂ produced. [4]",
            "A student claims anaerobic respiration is 'less efficient' than aerobic respiration. Explain what this means in terms of ATP yield and why the difference exists. [4]"
          ]
        }
      ]
    },
    {
      number: 13,
      title: "Excretion in Humans",
      intro: "Excretion removes metabolic waste products that would be toxic if allowed to accumulate. In humans, the kidney is the central excretory organ — filtering blood, reabsorbing useful substances, and producing urine. The kidney also plays the crucial role of osmoregulation — maintaining the water potential of the blood within narrow limits essential for cell function. The hormone ADH provides fine control of water reabsorption.",
      subheadings: [
        {
          title: "The Kidney — Ultrafiltration and Selective Reabsorption",
          body: `## Overview of Kidney Function

Each kidney contains approximately **1 million nephrons** — the functional units of the kidney. Each nephron performs three processes:

1. **Ultrafiltration** — forces small molecules out of blood into the tubule
2. **Selective reabsorption** — reclaims useful molecules back into blood
3. **Secretion** — some substances actively secreted into the tubule from blood

The final product — **urine** — contains water, urea, uric acid, excess mineral ions, and any foreign substances (drugs, toxins) — but NO glucose, NO amino acids, and NO large proteins (if the kidneys are healthy).

## Stage 1 — Ultrafiltration (Glomerulus + Bowman's Capsule)

The **glomerulus** is a tight knot of capillaries inside the cup-shaped **Bowman's capsule**:
- Blood is delivered to the glomerulus at HIGH pressure via the **afferent arteriole** (wider diameter than efferent arteriole — creates back pressure)
- This high hydrostatic pressure forces small molecules out of blood through:
  - Pores in capillary endothelium
  - Basement membrane (acts as molecular sieve)
  - Podocyte foot processes (pores between them)

**What enters the filtrate:**
- Water, glucose, amino acids, urea, uric acid, creatinine, mineral ions (Na⁺, K⁺, Cl⁻, HCO₃⁻), drugs — anything small

**What stays in blood:**
- Red blood cells (too large), white blood cells (too large), platelets (too large), plasma proteins like albumin (Mr ~69,000 — too large to pass through basement membrane)

## Stage 2 — Selective Reabsorption (Proximal Convoluted Tubule and Loop of Henle)

Not everything in the filtrate should be lost in urine:

**In the proximal convoluted tubule (PCT):**
- **All glucose** and **all amino acids** → actively transported back into blood by carrier proteins (requires ATP); healthy urine contains NO glucose
- **~80% of water** → follows by osmosis as solutes are reabsorbed
- **~80% of Na⁺ and Cl⁻** → actively and passively reabsorbed
- Most HCO₃⁻ (bicarbonate) → reabsorbed

**In the loop of Henle:**
- Creates a high solute concentration in the medulla of the kidney — this is used to drive water reabsorption from the collecting duct (controlled by ADH)

**In the distal convoluted tubule (DCT) and collecting duct:**
- Fine adjustment of Na⁺, K⁺, and H⁺ under hormonal control
- Water reabsorption controlled by **ADH** (see next section)

## Stage 3 — What Remains as Urine

| Substance | In blood plasma | In glomerular filtrate | In urine |
|----------|----------------|----------------------|---------|
| Glucose | Present | Present | Absent (100% reabsorbed) |
| Amino acids | Present | Present | Absent (100% reabsorbed) |
| Urea | Present (~5 mmol/L) | Present | Present (concentrated: ~200 mmol/L) |
| Na⁺ | Present | Present | Present (regulated) |
| Water | Present | Present | Present (variable volume) |
| Proteins | Present | Absent (too large) | Absent |
| Red blood cells | Present | Absent | Absent |`,
          groups: [],
          recap: [
            "Explain the process of ultrafiltration in the kidney. Include the forces driving it and state what enters the filtrate and what remains in the blood. [5]",
            "Explain why glucose is present in the glomerular filtrate but absent from normal urine. [3]",
            "State three differences between blood plasma and the fluid in the Bowman's capsule (filtrate). [3]",
            "Explain why glucose appears in the urine of a person with poorly controlled Type 1 diabetes mellitus. [2]"
          ]
        },
        {
          title: "Osmoregulation and ADH",
          body: `## What is Osmoregulation?

**Osmoregulation** is the control of water potential of the blood and body fluids, keeping it within a narrow range. This is critical because:
- If blood water potential is too high (too dilute) — cells absorb too much water → swell → can lyse
- If blood water potential is too low (too concentrated) — cells lose water → shrink → cannot function

The kidney regulates blood water potential by controlling how much water is reabsorbed from the collecting duct. This is controlled by the hormone **ADH (antidiuretic hormone / vasopressin)**.

## How ADH Works — Negative Feedback Loop

**When blood water potential FALLS** (e.g. after sweating, not drinking enough water):

1. **Osmoreceptors** (specialised receptor neurons) in the **hypothalamus** detect the fall in blood water potential (the blood is too concentrated)
2. Hypothalamus signals the **posterior pituitary gland** to release **more ADH** into the blood
3. ADH travels to the **collecting duct** of the kidneys
4. ADH binds to receptors on collecting duct cells → triggers insertion of **aquaporins** (water channel proteins) into the cell membrane
5. More aquaporins → collecting duct becomes **more permeable to water**
6. Water is reabsorbed by osmosis from the collecting duct into the surrounding tissue fluid and then into blood capillaries
7. The blood is diluted (water potential rises back toward normal)
8. **Small volume** of **concentrated** (dark yellow) urine produced

**When blood water potential RISES** (e.g. after drinking a lot of water):

1. Osmoreceptors detect rise in blood water potential (blood is too dilute)
2. Hypothalamus signals posterior pituitary to release **less ADH**
3. Fewer aquaporins in collecting duct → duct less permeable to water
4. Less water reabsorbed
5. **Large volume** of **dilute** (pale yellow/clear) urine produced

This is a classic **negative feedback** system: the response (changing urine output) opposes the change that triggered it (change in blood water potential).

## Alcohol, Caffeine, and ADH

- **Alcohol** inhibits ADH release → collecting duct becomes less permeable → large volumes of dilute urine produced → dehydration → hangover headache
- **Caffeine** has a mild diuretic effect (increases urine output) through a different mechanism`,
          groups: [],
          recap: [
            "Describe how ADH controls water reabsorption in the kidney when blood water potential falls. Your answer must form a complete negative feedback loop. [6]",
            "Explain why a person produces a larger volume of more dilute urine after drinking 2 litres of water than after drinking nothing for 6 hours. [4]",
            "Explain the mechanism by which ADH increases water reabsorption from the collecting duct at the cellular level. [3]",
            "Explain why alcohol consumption leads to dehydration. [3]"
          ]
        }
      ]
    },
    {
      number: 14,
      title: "Coordination and Response",
      intro: "The nervous system and endocrine system coordinate the body's responses to internal and external stimuli, maintaining homeostasis. The nervous system transmits rapid electrical impulses along neurones; the endocrine system uses hormones carried in blood for slower, longer-lasting effects. Together they control everything from the instant withdrawal of a hand from a hot object to the gradual regulation of blood glucose over hours.",
      subheadings: [
        {
          title: "The Nervous System — Neurones, Reflexes and Synapses",
          body: `## Organisation of the Nervous System

- **Central nervous system (CNS):** Brain + spinal cord — integration, processing, decision-making
- **Peripheral nervous system (PNS):** All nerves outside the CNS — carry impulses between body and CNS

**Sensory neurones** carry impulses from receptors (sense organs) → CNS
**Relay neurones (interneurones)** connect sensory to motor neurones within the CNS
**Motor neurones** carry impulses from CNS → effectors (muscles or glands)

## Reflex Arcs

A **reflex** is a rapid, automatic, involuntary response to a stimulus that does not require conscious thought. Reflexes are processed in the **spinal cord**, bypassing the brain — this is why the response happens faster than the conscious awareness of pain.

**Sequence for withdrawal reflex (touching a hot object):**

1. Receptor (pain/heat receptor in skin) → detects stimulus
2. Sensory neurone → carries impulse to spinal cord
3. Relay neurone in spinal cord → passes impulse across synapses
4. Motor neurone → carries impulse away from spinal cord
5. Effector (bicep muscle) → contracts → arm withdraws

Simultaneously, impulses travel up the spinal cord to the brain → conscious awareness of pain (but after the reflex has already protected the hand).

**Why reflexes are protective:** The fastest reflex arc in humans takes ~20–30 ms. Voluntary responses via the brain take ~150–200 ms. Those extra milliseconds of protection prevent serious tissue damage.

## The Synapse

A **synapse** is the junction between two neurones (or between a neurone and a muscle — neuromuscular junction). Nerve impulses travel as electrical signals along the axon, but cross the synapse **chemically**:

1. Electrical impulse arrives at the **pre-synaptic terminal** → depolarises the membrane
2. Voltage-gated Ca²⁺ channels open → Ca²⁺ ions enter the terminal
3. Ca²⁺ triggers **synaptic vesicles** to fuse with the pre-synaptic membrane
4. **Neurotransmitter** (e.g. **acetylcholine** at neuromuscular junctions and many CNS synapses) is released by exocytosis into the **synaptic cleft** (~20 nm wide)
5. Neurotransmitter diffuses across the cleft (takes only microseconds over 20 nm)
6. Neurotransmitter binds to **complementary receptor proteins** on the **post-synaptic membrane**
7. Receptor channels open → ions flow → new electrical impulse generated in post-synaptic neurone
8. **Acetylcholinesterase** enzyme rapidly breaks down acetylcholine → choline + acetate → reabsorbed by pre-synaptic terminal → recycled

**Why impulses travel in one direction across a synapse:** Vesicles are only in the pre-synaptic terminal; receptors are only on the post-synaptic membrane. This anatomical asymmetry ensures one-way transmission.`,
          groups: [],
          recap: [
            "State the sequence of structures involved in a withdrawal reflex arc, starting with the receptor. [4]",
            "Explain the advantage of reflex actions compared to voluntary responses processed by the brain. [2]",
            "Describe what happens at a synapse when a nerve impulse arrives at the pre-synaptic terminal. [5]",
            "Explain why nerve impulses can only travel in one direction across a synapse. [2]"
          ]
        },
        {
          title: "Hormones and Homeostasis",
          body: `## Hormones and the Endocrine System

**Hormones** are chemical messengers produced by **endocrine glands**, secreted directly into the blood, and carried to **target organs** where they cause a specific response. Only cells with the specific receptor protein for a hormone will respond to it.

| Feature | Nervous system | Endocrine system |
|---------|---------------|-----------------|
| Signal type | Electrical impulse | Chemical (hormone) |
| Speed of response | Very fast (milliseconds) | Slow (seconds to hours) |
| Duration of effect | Brief (stops when impulse stops) | Long-lasting (until hormone broken down) |
| Target | Specific (the neurone it connects to) | Widespread (any cell with receptor) |

## Key Hormones

| Hormone | Produced by | Target | Effect |
|---------|-----------|--------|--------|
| **Insulin** | β-cells of islets of Langerhans (pancreas) | Liver, muscle, adipose | Lowers blood glucose: promotes glycogen synthesis + cellular glucose uptake |
| **Glucagon** | α-cells of islets of Langerhans (pancreas) | Liver | Raises blood glucose: promotes glycogenolysis (glycogen → glucose) |
| **Adrenaline** | Adrenal medulla | Heart, liver, muscles, bronchioles | Fight-or-flight: ↑ heart rate, ↑ blood glucose, ↑ breathing rate, dilates pupils |
| **ADH** | Hypothalamus/posterior pituitary | Kidney collecting duct | Increases water reabsorption (see Chapter 13) |
| **Oestrogen** | Ovaries | Uterus, pituitary | Female puberty; thickens uterine lining; regulates menstrual cycle |
| **Testosterone** | Testes | Many tissues | Male puberty; sperm production; secondary sexual characteristics |
| **Thyroxine** | Thyroid gland | All cells | Increases metabolic rate; growth and development |

## Blood Glucose Regulation — Negative Feedback

The concentration of glucose in blood is maintained at approximately **90 mg/100 cm³** by a negative feedback system involving insulin and glucagon:

**After a carbohydrate-rich meal (blood glucose rises above normal):**
1. β-cells of pancreas detect high blood glucose
2. β-cells secrete **insulin** into blood
3. Insulin acts on liver and muscle cells:
   - Activates enzymes for **glycogenesis** (glucose → glycogen stored in liver and muscle)
   - Increases rate of glucose uptake by cells for respiration
   - In adipose tissue, promotes conversion of glucose → fat
4. Blood glucose falls back toward normal
5. As blood glucose normalises, insulin secretion decreases

**Between meals / during exercise (blood glucose falls below normal):**
1. α-cells of pancreas detect low blood glucose
2. α-cells secrete **glucagon** into blood
3. Glucagon acts on liver:
   - Activates enzymes for **glycogenolysis** (glycogen → glucose released into blood)
   - In prolonged fasting: promotes **gluconeogenesis** (making new glucose from amino acids and lactate)
4. Blood glucose rises back toward normal
5. As blood glucose normalises, glucagon secretion decreases

**Type 1 Diabetes Mellitus:**
- Autoimmune destruction of β-cells → no insulin produced
- Blood glucose remains dangerously high after meals (**hyperglycaemia**)
- Glucose appears in urine (when blood glucose exceeds reabsorption capacity of kidneys)
- Treatment: insulin injections before meals + carbohydrate monitoring

**Type 2 Diabetes Mellitus:**
- Cells become insensitive to insulin (insulin resistance) — often associated with obesity, lack of exercise, genetic factors
- Pancreas initially compensates by producing more insulin, but eventually β-cells become exhausted
- Treatment: diet control, exercise, oral medications (e.g. metformin), and sometimes insulin`,
          groups: [],
          recap: [
            "Compare the nervous system and endocrine system in terms of type of signal, speed of response, and duration of effect. [4]",
            "Describe the negative feedback mechanism that regulates blood glucose concentration after a meal. [6]",
            "Explain the difference between Type 1 and Type 2 diabetes mellitus in terms of the underlying cause and treatment. [4]",
            "Explain why adrenaline is released in a frightening situation and describe three physiological effects it produces. [5]"
          ]
        }
      ]
    },
    {
      number: 15,
      title: "Drugs",
      intro: "Drugs are chemical substances that alter the normal physiological function of the body. Medicines are beneficial drugs that treat or prevent disease; recreational drugs are used for their psychological effects; performance-enhancing drugs give unfair advantages in sport. Understanding how different drug classes affect the nervous system and body — and the serious health consequences of misuse — is important scientific literacy as well as IGCSE content.",
      subheadings: [
        {
          title: "Drug Types and Their Effects",
          body: `## Depressants — Slowing the CNS

Depressants reduce CNS activity by enhancing inhibitory neurotransmission or blocking excitatory neurotransmitters.

**Alcohol (ethanol):**
- Absorbed from stomach and small intestine into blood → crosses blood-brain barrier
- Enhances GABA (inhibitory neurotransmitter) action → reduces CNS activity
- Effects: impaired judgement, slower reaction time, reduced coordination, blurred vision, lowered inhibitions
- **Long-term heavy use:**
  - **Liver cirrhosis:** Chronic alcohol metabolism produces acetaldehyde → inflammation → liver cells die and are replaced by scar tissue → liver failure
  - **Brain damage:** Shrinkage of cerebral cortex; memory impairment
  - **Addiction:** Physical and psychological dependence
  - **Foetal alcohol syndrome:** Alcohol crosses placenta → damages developing foetal brain → intellectual disability, facial abnormalities

## Stimulants — Speeding the CNS

Stimulants increase CNS activity by enhancing excitatory neurotransmission.

**Nicotine** (in tobacco):
- Binds to nicotinic acetylcholine receptors in brain → triggers dopamine release → reinforces use → **addiction**
- Does not directly cause most smoking-related diseases but causes the addiction that drives continued smoking

**Effects of tobacco smoke components:**
- **Tar:** Carcinogenic chemicals settle in lung airways → DNA mutations → lung cancer; also irritates airways → chronic bronchitis; paralyses cilia → mucus accumulates → "smoker's cough"
- **Carbon monoxide (CO):** Binds to haemoglobin with ~250× greater affinity than O₂ → forms **carboxyhaemoglobin** → reduces O₂-carrying capacity of blood → cardiovascular strain; particularly dangerous in pregnancy (foetus deprived of O₂)
- **Nicotine:** Increases platelet aggregation → thrombosis → heart attack and stroke; raises blood pressure and heart rate

## Antibiotics — Killing Bacteria

Antibiotics kill bacteria or inhibit their growth without (ideally) harming host cells:
- **Penicillin:** Inhibits bacterial cell wall synthesis (blocks peptidoglycan cross-linking)
- **Streptomycin:** Blocks bacterial 70S ribosomes (no effect on human 80S ribosomes)
- **Tetracycline:** Blocks bacterial ribosome function

**Antibiotics have NO effect on viruses** — viruses use the host cell's own ribosomes and don't have cell walls; there is nothing unique to target without harming the host.

**Antibiotic resistance — a growing crisis:**
1. Random mutations give some bacteria resistance to an antibiotic
2. When antibiotic is prescribed, sensitive bacteria are killed; resistant bacteria survive and reproduce
3. Population of bacteria becomes increasingly resistant
4. **MRSA** (methicillin-resistant *Staphylococcus aureus*) causes difficult-to-treat hospital infections

**How to slow resistance:**
- Complete the full antibiotic course (don't stop when you feel better — remaining bacteria may be less sensitive)
- Never take antibiotics for viral infections (cold, flu)
- Don't share antibiotics`,
          groups: [],
          recap: [
            "Explain how carbon monoxide in tobacco smoke reduces the oxygen-carrying capacity of blood. Include the name of the compound formed. [3]",
            "Explain why antibiotics are effective against bacterial infections but have no effect on viral infections. [3]",
            "Explain, using natural selection, how a population of bacteria can become resistant to an antibiotic over time. [5]",
            "State three long-term health effects of heavy alcohol consumption. [3]"
          ]
        }
      ]
    },
    {
      number: 16,
      title: "Reproduction",
      intro: "Reproduction ensures the continuity of species. Sexual reproduction, involving the fusion of gametes from two parents, produces genetically varied offspring essential for adaptation and evolution. Asexual reproduction produces genetically identical offspring rapidly from one parent. In humans, a complex hormonal system regulates the menstrual cycle, fertilisation, and pregnancy, with the placenta serving as the essential interface between mother and foetus.",
      subheadings: [
        {
          title: "Sexual and Asexual Reproduction",
          body: `## Comparing Reproduction Strategies

| Feature | Sexual reproduction | Asexual reproduction |
|---------|--------------------|--------------------|
| Parents required | Two (usually) | One |
| Gametes required | Yes (haploid gametes fuse) | No |
| Genetic variation | Yes — meiosis + random fertilisation | No — offspring are clones |
| Speed | Slower (finding mate, courtship) | Faster |
| Energy cost | High | Low |
| Evolutionary advantage | Variation → natural selection → adaptation | Rapid colonisation of stable, favourable environment |

## Asexual Reproduction Examples

- **Binary fission** (bacteria): Single cell replicates its circular DNA → pinches in two → two identical daughter cells; can repeat every 20 minutes under optimal conditions
- **Budding** (yeast): Outgrowth forms on parent cell → grows → detaches as independent organism
- **Runners/stolons** (strawberry, spider plant): Horizontal stems grow out from the parent → new plants form at nodes → become independent when runner dies
- **Vegetative propagation** (many plants): potato tubers (buds on tuber grow into new plant), bulbs (onion, tulip), corms (crocus), rhizomes (ginger, mint)`,
          groups: [],
          recap: [
            "Explain two disadvantages of asexual reproduction compared with sexual reproduction in a changing environment. [2]",
            "Describe three examples of asexual reproduction in plants. For one example, explain the mechanism. [4]",
            "Explain why sexual reproduction produces more genetic variation than asexual reproduction. [3]"
          ]
        },
        {
          title: "Human Reproduction — Hormones, Fertilisation and Development",
          body: `## The Menstrual Cycle

The menstrual cycle averages 28 days and is controlled by four hormones in a coordinated feedback system:

| Hormone | Source | Days active | Effect |
|---------|--------|------------|--------|
| **FSH** (follicle-stimulating hormone) | Anterior pituitary | Days 1–13 | Stimulates follicle development in ovary; stimulates oestrogen production |
| **Oestrogen** | Growing follicle in ovary | Days 7–14 | Thickens uterine lining (endometrium); at high levels triggers LH surge |
| **LH** (luteinising hormone) | Anterior pituitary | Day 14 (surge) | Triggers **ovulation** (release of secondary oocyte from follicle) |
| **Progesterone** | Corpus luteum (remains of follicle after ovulation) | Days 14–28 | Maintains thickened uterine lining ready for implantation; suppresses FSH and LH |

If no fertilisation:
- Corpus luteum degenerates → progesterone levels fall
- Uterine lining breaks down → menstruation (Day 1 of new cycle)
- FSH rises again → new cycle begins

If fertilisation occurs:
- Embryo implants → produces HCG (human chorionic gonadotrophin) → maintains corpus luteum → progesterone remains high → no menstruation → pregnancy

## Fertilisation

- Ovulation releases a secondary oocyte into the fallopian (uterine) tube
- Sperm deposited in vagina swim through cervix, uterus, into fallopian tube
- Acrosome reaction: sperm binds zona pellucida → acrosomal enzymes digest zona pellucida → sperm membrane fuses with oocyte membrane → sperm nucleus enters
- Oocyte completes meiosis II → egg nucleus formed
- Sperm + egg nuclei fuse → **zygote** (46 chromosomes, diploid)
- Zygote divides repeatedly by mitosis as it travels down the fallopian tube → **blastocyst** by Day 5–6 → implants in endometrium ~Day 7

## The Placenta

The placenta develops at the site of implantation and is fully functional by week 10–12. It is the essential interface between mother and foetus:

**What crosses from mother to foetus:**
- Oxygen (by diffusion)
- Glucose, amino acids, fatty acids (by diffusion and transport)
- Antibodies (maternal IgG — provides passive immunity to newborn)
- Some hormones
- Unfortunately: alcohol, some drugs (e.g. thalidomide), some viruses (rubella, HIV, CMV), carbon monoxide

**What crosses from foetus to mother:**
- Carbon dioxide (by diffusion)
- Urea and other waste products

**What does NOT cross:**
- Red blood cells (the two circulations are separate — foetal and maternal blood never mix directly)
- Most large pathogens

**Why blood doesn't mix:** The foetal blood in chorionic villi is separated from the maternal blood in the intervillous space by the trophoblast layer — a thin barrier across which exchange occurs by diffusion and transport, without mixing the two bloodstreams (which might have different blood groups → immune reaction)`,
          groups: [],
          recap: [
            "Describe the roles of FSH, oestrogen, LH, and progesterone in the menstrual cycle. [8]",
            "Explain three functions of the placenta during pregnancy. [3]",
            "Explain why maternal blood and foetal blood do not mix in the placenta, yet substances are exchanged efficiently between them. [3]",
            "Explain what happens to progesterone levels if fertilisation does not occur. What is the consequence of this? [3]"
          ]
        }
      ]
    },
    {
      number: 17,
      title: "Inheritance",
      intro: "Inheritance is the transmission of genetic information from parents to offspring through gametes. Mendel's laws, derived from pea plant experiments in the 1860s, describe how alleles separate and assort independently. Understanding genes, alleles, dominance, Punnett squares, and sex-linked inheritance allows prediction of phenotype ratios in offspring — skills heavily tested in IGCSE Biology.",
      subheadings: [
        {
          title: "Key Genetic Terms and Monohybrid Crosses",
          body: `## Essential Definitions

**Gene:** A section of DNA at a specific location (locus) on a chromosome that codes for a specific polypeptide (and thus a characteristic).

**Allele:** One of two or more alternative versions of a gene. Each person carries two alleles for most genes (one on each homologous chromosome).

**Dominant allele:** Expressed in the phenotype when one OR two copies are present. Written as a capital letter (e.g. **T** for tall).

**Recessive allele:** Only expressed when two copies are present (homozygous recessive). Written as lower case (e.g. **t** for short).

**Homozygous:** Both alleles for a gene are identical: **TT** (homozygous dominant) or **tt** (homozygous recessive).

**Heterozygous:** The two alleles differ: **Tt**.

**Genotype:** The actual alleles an organism carries (e.g. Tt).

**Phenotype:** The observable physical characteristics resulting from the genotype AND environmental influences (e.g. tall).

## Monohybrid Cross — Worked Example

In garden peas, **tall (T)** is dominant over **short (t)**.

**Cross: Heterozygous tall × Homozygous short (Tt × tt)**

| | **T** | **t** |
|---|---|---|
| **t** | **Tt** | **tt** |
| **t** | **Tt** | **tt** |

Genotype ratio: 2 Tt : 2 tt = **1:1**
Phenotype ratio: 2 tall : 2 short = **1:1**

**Cross: Heterozygous × Heterozygous (Tt × Tt)**

| | **T** | **t** |
|---|---|---|
| **T** | **TT** | **Tt** |
| **t** | **Tt** | **tt** |

Genotype ratio: 1 TT : 2 Tt : 1 tt
Phenotype ratio: **3 tall : 1 short**

> The **3:1 phenotype ratio** from a heterozygous × heterozygous cross is the classic indicator of Mendelian dominance. Examiners frequently test your ability to work backwards from a 3:1 ratio to deduce that both parents are heterozygous.

## Codominance

In codominance, both alleles are expressed in the heterozygote — neither is dominant over the other. Codominant alleles are represented by a capital letter with superscripts.

**Example: ABO Blood Groups**

The ABO blood group gene has three alleles: **Iᴬ** (produces A antigen on red blood cells), **I^B** (produces B antigen), and **i** (produces no antigen). Iᴬ and I^B are codominant; both are dominant over i.

| Genotype | Blood group (phenotype) |
|----------|------------------------|
| IᴬIᴬ or Iᴬi | A |
| I^BI^B or I^Bi | B |
| IᴬI^B | AB (both A and B antigens — codominance) |
| ii | O |

**Example: Sickle-cell anaemia**

Normal haemoglobin allele: **H^A**; Sickle-cell allele: **H^S**

- H^AH^A: Normal — no disease
- H^AH^S: Sickle-cell trait (carrier) — both normal and sickle haemoglobin present; mild symptoms; provides some protection against malaria
- H^SH^S: Sickle-cell anaemia — only sickle haemoglobin; red blood cells sickle at low O₂ → block capillaries → tissue damage`,
          groups: [],
          recap: [
            "In guinea pigs, black coat (B) is dominant to white coat (b). Cross two heterozygous parents. Draw a Punnett square and state the expected genotype and phenotype ratios of offspring. [4]",
            "Explain the difference between genotype and phenotype, using a specific example. [2]",
            "Explain what is meant by codominance. Use the ABO blood group system as an example. [3]",
            "A pea plant with purple flowers (Pp) is crossed with a white-flowered plant (pp). State the phenotype ratio of the offspring. Explain how you determined this. [3]"
          ]
        },
        {
          title: "Sex Determination and Sex-Linked Inheritance",
          body: `## Sex Determination

Humans have 46 chromosomes in 23 pairs. Pairs 1–22 are **autosomes** (non-sex chromosomes). Pair 23 are the **sex chromosomes**:

- **Females: XX** — two X chromosomes; all eggs contain X
- **Males: XY** — one X and one Y; sperm contain either X (50%) or Y (50%)

Sex is determined by which sperm fertilises the egg — an X-bearing sperm → girl; Y-bearing sperm → boy.

**Cross (sex determination):**

| | X (egg) | X (egg) |
|---|---|---|
| **X** (sperm) | XX (girl) | XX (girl) |
| **Y** (sperm) | XY (boy) | XY (boy) |

Expected ratio: 1 girl : 1 boy (50:50)

## Sex-Linked Inheritance

Genes located on the **X chromosome** are described as **sex-linked**. The Y chromosome is much smaller and carries very few genes.

Key point: Males have only ONE X chromosome — they are **hemizygous** for X-linked genes. Therefore, a male only needs ONE copy of a recessive allele to express it, whereas a female needs TWO copies.

**Example: Red-green colour blindness (X-linked recessive)**

Allele symbols: **X^N** = normal colour vision; **X^n** = colour blind

| Genotype | Sex | Phenotype |
|----------|-----|-----------|
| X^N X^N | Female | Normal vision |
| X^N X^n | Female | Normal vision (carrier) |
| X^n X^n | Female | Colour blind |
| X^N Y | Male | Normal vision |
| X^n Y | Male | Colour blind |

**Why males are more commonly affected:** Males only need one X^n allele (no "backup" normal allele on Y). Females need two X^n alleles. Probability of a female receiving X^n from both parents is much lower than a male receiving just one X^n from his mother.

**Cross: Carrier female × normal male (X^N X^n × X^N Y)**

| | **X^N** | **X^n** |
|---|---|---|
| **X^N** | X^N X^N (normal female) | X^N X^n (carrier female) |
| **Y** | X^N Y (normal male) | X^n Y (colour blind male) |

Results: 25% normal female, 25% carrier female, 25% normal male, 25% colour-blind male

**Example: Haemophilia A (X-linked recessive)** — factor VIII gene on X chromosome; affected individuals cannot form blood clots → dangerous bleeding from minor injuries. Historical significance: Queen Victoria was a carrier; the trait spread through European royal families.`,
          groups: [],
          recap: [
            "Explain why males are more likely than females to suffer from X-linked recessive conditions such as colour blindness. [3]",
            "A woman who is a carrier for colour blindness (X^N X^n) has children with a man who has normal vision (X^N Y). Draw a Punnett square and state the probability that their son will be colour blind. [4]",
            "Explain how the sex of a baby is determined at fertilisation. [2]",
            "Explain why haemophilia affected more male members of European royal families in the 19th century than female members. [3]"
          ]
        }
      ]
    },
    {
      number: 18,
      title: "Variation and Selection",
      intro: "Variation — differences between individuals of the same species — is the raw material for evolution. Genetic variation arises through mutation and sexual reproduction (meiosis + random fertilisation). Natural selection acts on heritable variation, increasing the frequency of alleles that improve survival and reproduction, driving evolution over generations. Artificial selection applies the same principle deliberately to breed organisms with desired characteristics.",
      subheadings: [
        {
          title: "Types of Variation and Their Causes",
          body: `## Continuous vs Discontinuous Variation

**Continuous variation:** Characteristics that show a range of values with no distinct categories, forming a normal distribution (bell curve) when plotted.

Examples:
- Height, mass, foot size, skin colour, intelligence quotient
- Caused by the additive effects of **many genes** (polygenic inheritance) PLUS **environmental factors** (nutrition, exercise, health, education)
- Both genetic and environmental contributions are significant

**Discontinuous variation:** Characteristics that fall into distinct, separate categories with no intermediates.

Examples:
- ABO blood group (A, B, AB, or O — no intermediates)
- Tongue-rolling (can roll or cannot)
- Presence/absence of attached earlobes
- Sex (male or female)
- Caused by **one or a few genes**; environmental influence is minimal
- Plotted as a bar chart, not a histogram

| Feature | Continuous | Discontinuous |
|---------|-----------|--------------|
| Graph type | Normal distribution (histogram) | Bar chart (distinct categories) |
| Number of genes | Many (polygenic) | One or few |
| Environmental influence | Significant | Minimal |
| Example | Height | Blood group |

## Sources of Genetic Variation

**Mutation:** A spontaneous random change in the base sequence of DNA. Mutations are the ultimate source of all new alleles.

Types:
- **Gene mutation** (point mutation) — change in one or a few base pairs; can be neutral, harmful, or rarely beneficial (e.g. the sickle-cell allele is harmful in homozygotes but beneficial in heterozygotes in malaria regions)
- **Chromosome mutation** — change in chromosome number or structure (e.g. trisomy 21 = Down syndrome)

Mutations are increased by **mutagens**:
- UV radiation (from sun → skin cancer)
- X-rays and gamma rays
- Certain chemicals (tobacco tar carcinogens, aflatoxins)
- Some viruses

**Meiosis:** Produces genetically unique gametes through two mechanisms:
1. **Independent assortment:** In meiosis I, homologous chromosome pairs separate randomly to each daughter cell. With 23 pairs in humans, there are 2²³ = ~8 million possible combinations per gamete.
2. **Crossing over:** During meiosis I, homologous chromosomes pair up and exchange segments (chiasmata form), creating new combinations of alleles on chromosomes that did not exist in either parent.

**Random fertilisation:** Any one of ~8 million genetically distinct sperm can fertilise any one of ~8 million genetically distinct eggs → 8 million × 8 million = ~64 trillion possible genetic combinations in each human child.`,
          groups: [],
          recap: [
            "Distinguish between continuous and discontinuous variation with one example of each. Explain why height shows continuous variation while blood group shows discontinuous variation. [5]",
            "Explain two mechanisms by which meiosis generates genetic variation. [4]",
            "State two environmental factors that can cause mutations and explain how mutations contribute to variation within a species. [3]",
            "Explain why identical twins can show different phenotypes for continuous characteristics such as body weight as they grow older. [3]"
          ]
        },
        {
          title: "Natural Selection and Evolution",
          body: `## Darwin's Theory of Natural Selection (1859)

Charles Darwin's mechanism of evolution by natural selection has four components:

1. **Overproduction (struggle for existence):** Organisms produce far more offspring than can possibly survive to reproduce (e.g. one female cod can produce millions of eggs; one dandelion can produce hundreds of seeds). Resources (food, water, territory, mates) are limited → competition is intense.

2. **Heritable variation:** Individuals within a population show variation in their characteristics, and much of this variation is inherited by offspring (has a genetic basis).

3. **Differential survival and reproduction (survival of the fittest):** Individuals with characteristics that make them better adapted to their environment — better at finding food, avoiding predators, surviving disease, tolerating temperature extremes — are more likely to survive to reproductive age and produce more offspring.

4. **Evolution (change in allele frequencies):** Better-adapted individuals pass their advantageous alleles to more offspring. Over many generations, the frequency of advantageous alleles increases in the population → the population's characteristics change → **evolution**.

## Worked Example — Antibiotic Resistance

This is the clearest modern example of natural selection in real time:

1. A large population of bacteria in an infected patient. Due to random mutations, a tiny fraction (~1 in 10 million) carry an allele that confers resistance to an antibiotic.
2. Antibiotic is administered → acts as **selection pressure** → kills all non-resistant bacteria
3. The resistant bacteria survive (naturally selected) → reproduce rapidly (binary fission every 20 minutes)
4. Within days to weeks, the entire bacterial population may be resistant
5. No new variation was created — selection simply changed the frequency of existing alleles

## Artificial Selection (Selective Breeding)

Humans have been deliberately selecting organisms with desirable traits for ~10,000 years:

**Method:**
1. Identify individuals with desired traits (e.g. highest milk yield in cattle; most disease-resistant wheat plants)
2. Allow only those individuals to breed
3. From offspring, again select those with the best expression of desired traits
4. Repeat over many generations

**Examples:**
- **Dairy cattle** selected for milk yield → modern Holstein cows produce ~10,000 L/year (ancestral aurochs ~1,000 L/year)
- **Dogs** domesticated from wolves ~15,000 years ago → 400+ breeds with extreme variation in size, shape, behaviour
- **Wheat** selected for increased grain yield, shorter stems (reducing wind-lodging), disease resistance
- **Antibiotic-producing *Penicillium* strains** selected for maximum penicillin yield

The same principle — selection on heritable variation causes heritable change in the population — operates in both natural and artificial selection. The key difference is the selecting agent: environment in natural selection; human choice in artificial selection.`,
          groups: [],
          recap: [
            "Describe Darwin's theory of natural selection using the four key components. [5]",
            "Explain, using natural selection, how a population of bacteria became resistant to an antibiotic in a hospital setting. [5]",
            "Explain what is meant by artificial selection. Describe how artificial selection has been used to improve crop yield in wheat. [4]",
            "Explain one difference and one similarity between natural and artificial selection. [2]"
          ]
        }
      ]
    },
    {
      number: 19,
      title: "Organisms and Their Environment",
      intro: "Ecology studies the interactions between organisms and their environment — how energy flows through ecosystems, how nutrients cycle between living and non-living components, and how populations interact through feeding relationships. Understanding food chains, food webs, energy losses between trophic levels, and the carbon and nitrogen cycles is fundamental to grasping why sustainable agriculture and conservation matter.",
      subheadings: [
        {
          title: "Food Chains, Food Webs and Energy Flow",
          body: `## Key Ecological Definitions

**Producer:** An autotrophic organism (usually a green plant, alga, or cyanobacterium) that manufactures organic molecules from inorganic substances using light energy. All food chains begin with a producer.

**Consumer:** A heterotrophic organism that obtains energy by feeding on other organisms:
- **Primary consumer (herbivore):** eats plants directly
- **Secondary consumer (carnivore/omnivore):** eats primary consumers
- **Tertiary consumer:** eats secondary consumers
- **Apex predator:** top of the food chain; not eaten by others

**Decomposer:** Organisms (mainly bacteria and fungi) that break down dead organic matter (bodies, faeces, shed materials) by secreting extracellular enzymes and absorbing the products. They return inorganic molecules to the soil/water for use by producers — without decomposers, nutrients would remain locked in dead matter and ecosystems would collapse.

**Detritivore:** Animals (earthworms, woodlice, millipedes, dung beetles) that feed on dead organic matter (detritus), breaking it into smaller pieces and increasing surface area for decomposer bacteria and fungi.

## Why Food Chains Are Short

Energy is lost at every trophic level:

- **Respiration:** Most chemical energy in food is converted to heat during respiration — not stored as biomass
- **Movement:** Kinetic energy dissipated as heat
- **Excretion:** Energy in urine and other wastes
- **Indigestible material:** Cellulose in plant cell walls, bones, hair — cannot be digested; passes out as faeces; energy unavailable to the consumer
- **Uneaten parts:** Much of an organism may not be consumed

**Typical efficiency:** Only about **10%** of energy at one trophic level passes to the next. After 4–5 links, so little energy remains that supporting another predator is not viable.

**Ecological consequence:** Feeding at a lower trophic level is more energy-efficient. 1 hectare of crops can support ~10× more people eating the crops directly than eating animals raised on those crops. This is why vegetarian/vegan diets have a lower ecological footprint.

## Pyramids of Numbers and Biomass

**Pyramid of numbers:** Shows the number of organisms at each trophic level. Can be inverted — one oak tree supports thousands of caterpillars supports hundreds of birds.

**Pyramid of biomass:** Shows the total dry mass at each trophic level. Almost always a true pyramid shape (decreasing upward) because only ~10% of biomass is transferred between levels. The occasional inverted biomass pyramid occurs in aquatic ecosystems where phytoplankton have very short lifespans.

**Pyramid of energy:** Always a true pyramid — shows the flow of energy (kJ m⁻² yr⁻¹) through trophic levels; always decreases upward because energy is always lost at each stage.`,
          groups: [],
          recap: [
            "Explain why food chains rarely contain more than four or five links. [3]",
            "Describe the role of decomposers in an ecosystem. Explain why ecosystems would eventually cease to function without decomposers. [4]",
            "Explain why a pyramid of biomass is almost always a true pyramid shape but a pyramid of numbers can be inverted. [4]",
            "Explain why it is more efficient in terms of energy use for humans to eat plants than to eat animals that have been fed on plants. [4]"
          ]
        },
        {
          title: "The Carbon Cycle and the Nitrogen Cycle",
          body: `## The Carbon Cycle

Carbon is continuously recycled between the atmosphere (as CO₂) and living organisms. The key processes:

**Removing CO₂ from atmosphere:**
- **Photosynthesis** — plants, algae, cyanobacteria fix CO₂ into organic molecules (glucose, etc.)
- **Dissolving in oceans** — CO₂ dissolves in seawater; marine organisms incorporate carbon into calcium carbonate shells

**Returning CO₂ to atmosphere:**
- **Respiration** — all living organisms release CO₂ by oxidising organic molecules
- **Decomposition** — decomposer bacteria and fungi respire dead organic matter → CO₂ released
- **Combustion** — burning fossil fuels and biomass releases CO₂ rapidly
- **Volcanic eruptions** — release CO₂ from Earth's crust

**Locked carbon (slow cycle):**
- **Fossil fuels** — formed from incompletely decomposed organic matter over millions of years (coal from plants; oil and gas from marine organisms); burning releases ancient carbon rapidly
- **Calcium carbonate (limestone)** — formed from marine organism shells; very slow decomposition

> Human combustion of fossil fuels is adding CO₂ to the atmosphere approximately 100× faster than it was being added before the industrial revolution — this is the root cause of enhanced greenhouse effect and climate change.

## The Nitrogen Cycle

Plants need nitrogen to synthesise amino acids, proteins, chlorophyll, and nucleic acids. They absorb nitrogen from the soil as **nitrate ions (NO₃⁻)**, not as N₂ gas. The nitrogen cycle converts between different nitrogen forms:

| Process | Organisms responsible | Transformation |
|---------|----------------------|----------------|
| **Nitrogen fixation** | *Rhizobium* (in root nodules of legumes — peas, beans, clover); free-living *Azotobacter*; lightning | N₂ → NH₄⁺ (ammonium) |
| **Nitrification** | Nitrifying bacteria (*Nitrosomonas*: NH₄⁺ → NO₂⁻; *Nitrobacter*: NO₂⁻ → NO₃⁻) | NH₄⁺ → NO₂⁻ → NO₃⁻ (requires aerobic conditions) |
| **Decomposition (ammonification)** | Decomposer bacteria and fungi | Proteins in dead organisms → NH₄⁺ |
| **Denitrification** | Denitrifying bacteria (anaerobic, in waterlogged soils) | NO₃⁻ → N₂ (returns to atmosphere) |
| **Uptake by plants** | All plants (by active transport) | NO₃⁻ → amino acids → proteins |

**Why legumes are valuable in agriculture:** Root nodules containing *Rhizobium* bacteria fix atmospheric N₂ → enrich soil with ammonium/nitrate → improve soil fertility → rotating crops with legumes (crop rotation) reduces the need for synthetic nitrogen fertiliser.

**Why waterlogged soil is nitrogen-poor:** Denitrifying bacteria thrive in anaerobic (oxygen-poor) conditions → convert NO₃⁻ → N₂ → nitrogen lost to atmosphere → low soil nitrate → poor plant growth.`,
          groups: [],
          recap: [
            "Describe the role of bacteria in the nitrogen cycle. Name the process and the type of bacteria involved in each step. [6]",
            "Explain why waterlogged soils are deficient in nitrates even when they have abundant decomposing organic matter. [3]",
            "Describe three ways in which carbon dioxide is returned to the atmosphere from organic matter. [3]",
            "Explain how the burning of fossil fuels disrupts the natural carbon cycle. [3]"
          ]
        }
      ]
    },
    {
      number: 20,
      title: "Human Influences on Ecosystems",
      intro: "Human population growth, industrialisation, and changing land use have fundamentally altered ecosystems at a scale unprecedented in Earth's history. Pollution, deforestation, overfishing, and greenhouse gas emissions are the dominant drivers of environmental change today. Understanding these impacts and the conservation strategies used to mitigate them — including both in-situ and ex-situ approaches — is essential both for IGCSE Biology and for informed citizenship.",
      subheadings: [
        {
          title: "Pollution and Its Environmental Effects",
          body: `## Eutrophication — Nutrient Pollution of Water

**Eutrophication** is the over-enrichment of a water body with nutrients (primarily nitrates NO₃⁻ and phosphates PO₄³⁻), typically from agricultural fertiliser run-off or sewage discharge. The sequence of events:

1. **Nutrient enrichment:** Nitrates and phosphates enter a lake/river from fertilised fields or sewage
2. **Algal bloom:** Rapid multiplication of algae → dense green surface mat (may also include toxic cyanobacteria)
3. **Light blocked:** Dense algae at surface block sunlight from reaching aquatic plants deeper down → submerged plants cannot photosynthesise → die
4. **Decomposer explosion:** Aerobic bacteria decompose the dead algae and plants → bacterial population grows massively
5. **Oxygen depletion (hypoxia/anoxia):** Bacteria consume dissolved O₂ faster than it can be replenished → dissolved O₂ falls to near zero
6. **Fish kill:** Fish, invertebrates, and other aerobic organisms asphyxiate → "dead zone"

## Air Pollution

| Pollutant | Source | Effect |
|----------|--------|--------|
| **CO₂** (greenhouse gas) | Combustion of fossil fuels, deforestation | Enhanced greenhouse effect → global warming, climate change, ocean acidification |
| **CH₄** (greenhouse gas) | Livestock digestion, rice paddies, landfill, permafrost thawing | 25× more potent greenhouse gas than CO₂ |
| **SO₂** | Burning sulfur-containing coal and oil (power stations) | Dissolves in rainwater → H₂SO₃/H₂SO₄ → acid rain |
| **NOₓ** | High-temperature combustion in vehicle engines (N₂ + O₂ react) | Acid rain; photochemical smog; ground-level ozone |

**Effects of acid rain:**
- Lowers pH of lakes and rivers → kills fish (especially salmon, trout eggs sensitive to acidification), macroinvertebrates, disrupts entire aquatic food webs
- Damages leaf cuticles → impairs photosynthesis → kills forests (spruce and fir trees in European mountains)
- Dissolves Ca²⁺ and Mg²⁺ from soil → mineral deficiency in trees
- Leaches Al³⁺ from soil → toxic to plant roots and fish gills
- Corrodes limestone/marble buildings and statues (CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂)

## Deforestation

Clearance of forests for agriculture, logging, mining, and urban expansion causes:
- **Reduced CO₂ fixation** — fewer trees absorb CO₂ from atmosphere → atmospheric CO₂ rises
- **Carbon release** — burning/decomposition of cleared forest releases stored carbon → major contributor to greenhouse gas emissions
- **Loss of biodiversity** — tropical rainforests contain ~50% of all species while covering only ~6% of land area; destruction is irreversible on human timescales
- **Soil erosion** — tree roots bind soil; removal → soil washes away in rain → infertile bare land; sedimentation of rivers
- **Disruption of water cycle** — reduced transpiration → less water evaporated → less rainfall → desertification in some regions`,
          groups: [],
          recap: [
            "Describe the sequence of events that leads from the application of excess fertiliser to a farm field to the death of fish in a nearby river. [5]",
            "Explain two ways in which deforestation contributes to global warming. [4]",
            "Explain how acid rain damages freshwater ecosystems. [3]",
            "State two environmental consequences of increased atmospheric methane concentration. [2]"
          ]
        },
        {
          title: "Conservation and Sustainable Development",
          body: `## Why Conserve Biodiversity?

**Ecological reasons:**
- Diverse ecosystems are more **stable and resilient** — if one species is lost, others can fill the role; simplified ecosystems collapse more easily
- Keystone species have disproportionate effects: removing a top predator allows prey to overpopulate → overgraze → habitat loss → cascade of extinctions

**Economic reasons:**
- **Medicines:** >50% of modern pharmaceutical drugs are derived from or inspired by natural compounds (penicillin from *Penicillium*; aspirin from willow bark; paclitaxel from yew trees for cancer; artemisinin from *Artemisia* for malaria)
- **Agriculture:** Wild relatives of crop plants carry genes for disease resistance, drought tolerance, pest resistance — invaluable for breeding improved crops
- **Ecotourism:** Wildlife tourism generates billions of dollars annually in Kenya, Costa Rica, and elsewhere

**Ethical reasons:**
- All species have intrinsic value independent of their use to humans
- Humans have a moral responsibility not to drive other species to extinction

## In-Situ Conservation (in the natural habitat)

Conservation in the wild — protecting habitats while allowing species to continue natural behaviours and evolutionary processes:

- **National parks and nature reserves:** Legal protection of entire habitat areas; management to maintain ecological conditions; ranger patrol against poaching
- **Marine Protected Areas (MPAs):** No-fishing or restricted-fishing zones protecting spawning grounds, coral reefs, and seagrass beds
- **Wildlife corridors:** Strips of habitat connecting isolated reserves — allows gene flow between populations, prevents inbreeding
- **CITES** (Convention on International Trade in Endangered Species): International treaty restricting trade in 38,000+ species of plants and animals

## Ex-Situ Conservation (off-site)

Conservation of species away from their natural habitat — a safety net for species on the brink:

- **Zoological parks and aquaria:** Captive breeding programmes for critically endangered species (Arabian oryx, California condor, black-footed ferret — all brought back from near-extinction by captive breeding + reintroduction)
- **Seed banks:** Seeds stored at −18°C and 15% humidity in secure vaults (Svalbard Global Seed Vault, Norway — holds 1.3 million seed samples from ~5,000 species); insurance against crop failures and extinction events
- **Cryobanks:** Frozen sperm, eggs, embryos, and cell cultures of endangered species

## Sustainable Development

**Sustainable development** meets the needs of the present generation without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987).

**Sustainable fishing:**
- **Fishing quotas:** Annual limits on total catch per species per fleet, set at levels that allow populations to maintain themselves
- **Minimum net mesh size regulations:** Ensures juvenile fish escape and reach reproductive age before being caught — maintains breeding population
- **Seasonal closed seasons:** No fishing during breeding season
- **Marine Protected Areas:** "No-take zones" provide refuges where populations can recover

> If fish are caught faster than they can reproduce, stocks collapse — as happened with North Sea cod in the 1990s. Rebuilding collapsed stocks takes decades even with complete cessation of fishing.`,
          groups: [],
          recap: [
            "Explain two economic reasons and one ethical reason why it is important to conserve biodiversity. [3]",
            "Distinguish between in-situ and ex-situ conservation, giving one example of each and explaining why both approaches are needed. [4]",
            "Explain how fishing quotas and minimum net mesh size regulations contribute to sustainable fisheries management. [4]",
            "Explain what is meant by sustainable development in the context of forestry management. [3]"
          ]
        }
      ]
    },
    {
      number: 21,
      title: "Biotechnology and Genetic Modification",
      intro: "Biotechnology uses living organisms or their components to develop useful products and processes. Modern genetic technology — recombinant DNA, genetic engineering, and gene editing — allows precise manipulation of genetic material in ways that would be impossible by conventional breeding. These powerful technologies are revolutionising medicine, agriculture, and industrial chemistry, while raising important ethical questions that society must address.",
      subheadings: [
        {
          title: "Genetic Engineering — Producing Insulin and Beyond",
          body: `## What is Genetic Engineering?

**Genetic engineering** (recombinant DNA technology) is the deliberate modification of an organism's genetic material by inserting, deleting, or altering specific DNA sequences. The core technique involves:
1. Isolating a gene of interest from one organism
2. Inserting it into the genome of another organism (the host)
3. Having the host express the gene and produce the desired protein

## Producing Human Insulin — Step-by-Step

Before genetic engineering, diabetics used insulin extracted from pig or cattle pancreases — slightly different from human insulin, causing immune reactions in some patients. Genetic engineering allows production of **authentic human insulin** in bacteria.

**Step 1 — Obtain the insulin gene:**
The human insulin gene is isolated from human pancreatic mRNA. Because the gene contains introns (non-coding sequences) that bacteria cannot process, **reverse transcriptase** enzyme is used to make complementary DNA (cDNA) from the mRNA — cDNA contains only the coding sequence (no introns) and can be expressed by bacteria.

**Step 2 — Cut the cDNA with restriction endonucleases:**
**Restriction endonucleases** (restriction enzymes) recognise specific short DNA sequences (restriction sites) and cut both strands of the DNA at that site, creating **sticky ends** — short single-stranded overhangs complementary to the ends they create.

**Step 3 — Prepare the vector:**
A bacterial **plasmid** (small circular DNA molecule separate from the bacterial chromosome) is cut with the **same restriction enzyme** → creates complementary sticky ends that will base-pair with the insulin cDNA.

**Step 4 — Ligate gene into plasmid:**
The insulin cDNA and the cut plasmid are mixed together. Complementary sticky ends base-pair → **DNA ligase** enzyme forms covalent phosphodiester bonds → seals the cDNA permanently into the plasmid → creates a **recombinant plasmid** containing the human insulin gene.

**Step 5 — Transform bacteria:**
The recombinant plasmid is introduced into *E. coli* bacteria by **heat shock** (brief heating → pores form in cell membrane → plasmid enters) or electroporation (brief electrical pulse → temporary pores → plasmid enters). Only a small fraction of bacteria take up the plasmid.

**Step 6 — Select successfully transformed bacteria:**
The plasmid contains a **selectable marker** (usually an antibiotic resistance gene). Bacteria are grown on medium containing the antibiotic — only bacteria containing the plasmid (and thus the resistance gene) survive. These are the transformed bacteria containing the insulin gene.

**Step 7 — Grow at industrial scale and harvest insulin:**
Selected bacteria are grown in large **fermenters** (bioreactors) under optimised conditions (temperature, pH, nutrients). They express the insulin gene → produce human insulin protein. Insulin is extracted, purified, and distributed to diabetic patients.

**Advantages of GM insulin:**
- Chemically identical to human insulin → no immune reactions
- Unlimited production capacity
- No ethical concerns about animal slaughter
- Consistent quality and purity
- Cheaper than animal-derived insulin at scale

## Other Applications

| Application | Gene introduced | Host | Purpose |
|------------|----------------|------|---------|
| **Golden Rice** | Beta-carotene synthesis genes (from daffodil + bacterium) | Rice | Prevents vitamin A deficiency in developing countries |
| **Bt crops** (corn, cotton, soybean) | Bt toxin gene from *Bacillus thuringiensis* | Crop plants | Toxic to insect pests → reduces pesticide use |
| **Factor VIII** | Human clotting factor VIII gene | Sheep, hamster cells | Treatment of haemophilia A |
| **Chymosin (vegetarian rennet)** | Calf chymosin gene | Yeast | Cheese-making without animal slaughter |
| **GM salmon** | Growth hormone gene from Pacific salmon + antifreeze gene promoter | Atlantic salmon | Grows year-round to full size in ~18 months vs 3 years |`,
          groups: [],
          recap: [
            "Describe the role of restriction endonucleases and DNA ligase in the production of recombinant DNA. [4]",
            "Explain why cDNA (made from mRNA using reverse transcriptase) rather than the gene directly from human DNA is used when expressing human insulin in bacteria. [3]",
            "Describe the steps involved in producing human insulin using genetically engineered bacteria. [6]",
            "State two advantages of producing insulin by genetic engineering compared to extracting it from animal pancreases. [2]"
          ]
        },
        {
          title: "Cloning, Gene Therapy and Ethical Issues",
          body: `## Cloning

**Cloning** produces genetically identical copies of an organism.

### Micropropagation (Plant Tissue Culture)

Used to rapidly produce large numbers of genetically identical plants from a high-value parent:

1. Remove a small **explant** (piece of tissue — leaf fragment, stem section, meristem) from the desired plant under sterile conditions
2. Place on **nutrient agar** containing **auxin** (stimulates cell division → forms undifferentiated **callus** tissue) and **cytokinin** (promotes cell division and shoot formation)
3. Callus divides → when shoot-forming hormone ratio adjusted → **shoots** differentiate
4. Transfer to medium with high auxin:cytokinin ratio → **roots** form
5. Transfer to compost → **plantlets** grow → identical to parent

Applications:
- Rapidly multiply disease-free elite crop varieties (banana, orchid, oil palm)
- Conserve rare endangered plant species
- Produce genetically uniform research material

### Somatic Cell Nuclear Transfer (Animal Cloning)

Demonstrated by **Dolly the sheep** (1996, Roslin Institute, Edinburgh):

1. **Donor cell:** Mammary gland cell taken from an adult sheep (Finn Dorset breed) — nucleus contains complete diploid genome
2. **Enucleated egg:** Egg cell from another sheep (Scottish Blackface); nucleus removed by micropipette
3. **Fusion:** Donor nucleus inserted into enucleated egg by electrical pulse (electrofusion) → triggers cell division
4. Developing embryo implanted into a **surrogate mother** (Scottish Blackface)
5. Dolly born — genetically identical to the Finn Dorset donor (not the surrogate mother)

Why remarkable: It proved that a specialised adult somatic cell nucleus can be reprogrammed to direct complete development — the nucleus still contains all the genetic information needed to build an entire organism.

## Gene Therapy

**Gene therapy** introduces functional copies of mutated/absent genes into a patient's cells to treat a genetic disease.

### Example: Cystic Fibrosis

CF is caused by mutations in the **CFTR gene** (chromosome 7) → non-functional or absent CFTR protein → defective chloride ion channel in epithelial cell membranes → abnormally thick, sticky mucus in lungs → chronic infection → lung damage.

**Somatic gene therapy approach:**
1. A functional copy of the CFTR gene is prepared
2. The gene is packaged into a **vector** — a modified harmless virus (adenovirus, which naturally infects airway cells) or **liposomes** (lipid vesicles that fuse with cell membranes)
3. The vector is inhaled as an aerosol → delivers the functional CFTR gene into airway epithelial cells
4. The functional CFTR gene is expressed → functional chloride channels produced → mucus becomes less viscous → lung function improves

**Somatic vs germline gene therapy:**
- **Somatic gene therapy:** Target body cells only — changes affect the patient but are NOT inherited by their children. Currently the only approved approach in humans.
- **Germline gene therapy:** Target embryonic cells or gametes — changes would be inherited by all future generations. Technically possible (demonstrated controversially by He Jiankui in 2018 with CRISPR-edited babies). Currently banned in most countries due to ethical concerns.

## Ethical Issues in Biotechnology

| Technology | Ethical concern | Counter-argument |
|-----------|----------------|-----------------|
| GM crops | Unknown ecological effects; potential loss of biodiversity; corporate monopoly on food supply | Reduce pesticide use; improve yields; prevent vitamin deficiency |
| Animal cloning | Animal welfare (low success rates; abnormalities); should animals be cloned for human benefit? | Medical and agricultural advances; conservation of endangered species |
| Germline gene therapy | Heritable changes; "designer babies"; lack of consent from future generations | Could eliminate devastating genetic diseases permanently |
| Antibiotic-resistant GM crops | Resistance gene might spread to soil bacteria | Low probability; regulatory oversight |`,
          groups: [],
          recap: [
            "Describe the process of micropropagation (plant tissue culture) and state two advantages of this technique. [5]",
            "Explain the principle of somatic cell nuclear transfer used to produce Dolly the sheep. [5]",
            "Describe how somatic gene therapy could be used to treat cystic fibrosis. Include the vector used and the expected outcome. [5]",
            "Explain the difference between somatic gene therapy and germline gene therapy. State one ethical concern associated with germline gene therapy. [4]"
          ]
        }
      ]
    }
  ]
};
