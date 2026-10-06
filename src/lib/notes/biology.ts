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
      intro: "All living organisms share seven fundamental life processes summarised by the acronym **MRSGREN**. These characteristics distinguish living things from non-living matter and allow biologists to make precise claims about borderline cases such as viruses. Classification — the science of grouping organisms by shared features — brings order to the enormous diversity of life on Earth, and the universal binomial naming system means a scientist in any country can refer to exactly the same organism without ambiguity.",
      subheadings: [
        {
          title: "The Seven Characteristics of Life — MRSGREN",
          body: `Every living organism must carry out **all seven** life processes. If even one is missing, biologists classify the entity as non-living. Let's examine each one in full detail.

:::svg[The Seven Characteristics of Life — MRSGREN]
<svg viewBox="0 0 520 280" width="520" height="280" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="520" height="280" fill="#f8fafc" rx="12"/>
  <!-- Title -->
  <text x="260" y="26" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">MRSGREN — Seven Characteristics of Life</text>
  <!-- 7 boxes in a circle-like arrangement -->
  <!-- M -->
  <rect x="20" y="45" width="100" height="52" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="70" y="65" text-anchor="middle" font-size="14" font-weight="800" fill="#15803d">M</text>
  <text x="70" y="80" text-anchor="middle" font-size="9.5" fill="#15803d">Movement</text>
  <text x="70" y="92" text-anchor="middle" font-size="8.5" fill="#166534">Change in position</text>
  <!-- R -->
  <rect x="135" y="45" width="100" height="52" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="185" y="65" text-anchor="middle" font-size="14" font-weight="800" fill="#1d4ed8">R</text>
  <text x="185" y="80" text-anchor="middle" font-size="9.5" fill="#1d4ed8">Respiration</text>
  <text x="185" y="92" text-anchor="middle" font-size="8.5" fill="#1e40af">Energy from food</text>
  <!-- S -->
  <rect x="250" y="45" width="100" height="52" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="300" y="65" text-anchor="middle" font-size="14" font-weight="800" fill="#b45309">S</text>
  <text x="300" y="80" text-anchor="middle" font-size="9.5" fill="#b45309">Sensitivity</text>
  <text x="300" y="92" text-anchor="middle" font-size="8.5" fill="#92400e">Detect stimuli</text>
  <!-- G -->
  <rect x="365" y="45" width="100" height="52" rx="8" fill="#fce7f3" stroke="#db2777" stroke-width="1.5"/>
  <text x="415" y="65" text-anchor="middle" font-size="14" font-weight="800" fill="#be185d">G</text>
  <text x="415" y="80" text-anchor="middle" font-size="9.5" fill="#be185d">Growth</text>
  <text x="415" y="92" text-anchor="middle" font-size="8.5" fill="#9d174d">Increase in dry mass</text>
  <!-- R -->
  <rect x="20" y="115" width="100" height="52" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="70" y="135" text-anchor="middle" font-size="14" font-weight="800" fill="#6d28d9">R</text>
  <text x="70" y="150" text-anchor="middle" font-size="9.5" fill="#6d28d9">Reproduction</text>
  <text x="70" y="162" text-anchor="middle" font-size="8.5" fill="#5b21b6">Produce offspring</text>
  <!-- E -->
  <rect x="135" y="115" width="100" height="52" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5"/>
  <text x="185" y="135" text-anchor="middle" font-size="14" font-weight="800" fill="#c2410c">E</text>
  <text x="185" y="150" text-anchor="middle" font-size="9.5" fill="#c2410c">Excretion</text>
  <text x="185" y="162" text-anchor="middle" font-size="8.5" fill="#9a3412">Remove metabolic waste</text>
  <!-- N -->
  <rect x="250" y="115" width="100" height="52" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
  <text x="300" y="135" text-anchor="middle" font-size="14" font-weight="800" fill="#047857">N</text>
  <text x="300" y="150" text-anchor="middle" font-size="9.5" fill="#047857">Nutrition</text>
  <text x="300" y="162" text-anchor="middle" font-size="8.5" fill="#065f46">Take in energy sources</text>
  <!-- Key distinctions -->
  <rect x="20" y="185" width="480" height="82" rx="10" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
  <text x="30" y="203" font-size="10" font-weight="700" fill="#334155">Key Distinctions Examiners Test:</text>
  <text x="30" y="219" font-size="9.5" fill="#475569">Respiration ≠ Breathing. Respiration = chemical release of energy in cells. Breathing = physical ventilation of lungs.</text>
  <text x="30" y="233" font-size="9.5" fill="#475569">Excretion ≠ Egestion. Excretion = removal of metabolic waste (CO₂, urea). Egestion = removal of undigested food (faeces).</text>
  <text x="30" y="247" font-size="9.5" fill="#475569">Growth measured as DRY MASS (not wet mass) — water content fluctuates; dry mass measures actual organic increase.</text>
  <text x="30" y="261" font-size="9.5" fill="#475569">Viruses: no cytoplasm, no ribosomes, no independent respiration → classified as non-living.</text>
</svg>
:::

## Movement
**Definition:** An action by an organism causing a change in position or place.

This includes the obvious — a cheetah running — and the less obvious. A plant slowly bending its shoot toward light (**phototropism**) is also movement. A white blood cell moving toward a bacterium is movement. The key point is that the organism *itself* generates the movement, distinguishing it from a rock rolling downhill.

> **Examiner note:** Do not say organisms "move." Say they "carry out movement" — the precise phrasing scores marks. Also note that not all parts of every organism move at all times; the *ability* to move is what counts.

## Respiration
**Definition:** The chemical reactions in cells that break down organic molecules (especially glucose) to release energy for metabolism.

Respiration is **not breathing**. Breathing (ventilation) is the physical act of moving air in and out of the lungs. Respiration is a cellular chemical process — it happens in every living cell, including plant cells, fungal cells, and bacteria. The energy released is used to drive all other life processes: muscle contraction, active transport, protein synthesis, cell division.

Aerobic respiration (with oxygen): glucose + oxygen → carbon dioxide + water + **ATP energy**

Anaerobic respiration (without oxygen): glucose → lactic acid + **less ATP** (in animals); glucose → ethanol + CO₂ + **less ATP** (in yeast/plants)

## Sensitivity
**Definition:** The ability to detect or sense stimuli in the internal or external environment and produce an appropriate response.

All organisms detect stimuli, though the mechanisms vary greatly. Animals use specialised receptor cells (photoreceptors in the eye, mechanoreceptors in the skin). Plants use phytohormones — **auxin** causes phototropism; **gibberellins** regulate germination. Even single-celled amoebae detect chemical gradients and move toward food.

## Growth
**Definition:** A permanent increase in size and **dry mass** due to an increase in cell number, cell size, or both.

The word "permanent" is critical — a sponge absorbing water temporarily becomes larger, but this is not growth. We measure **dry mass** (after removing all water by drying to constant mass) because wet mass changes with hydration. An organism's dry mass genuinely increases only when new organic molecules are synthesised.

## Reproduction
**Definition:** The biological process by which more organisms of the same kind are produced, ensuring species survival.

**Sexual reproduction** involves two parents, the fusion of gametes, and produces genetically varied offspring. **Asexual reproduction** involves one parent, no gametes, and produces genetically identical clones (e.g. bacteria dividing, strawberry runners, budding in yeast).

## Excretion
**Definition:** The removal from organisms of the **waste products of metabolism**, toxic substances, and substances in excess.

Excretion specifically concerns metabolic waste — CO₂ from respiration, urea from amino acid breakdown (in mammals), excess salts and water. **Egestion** is the passing out of undigested food (faeces) — this material was never *inside* the body's cells and is not metabolic waste.

| Process | What is removed | Source |
|---------|----------------|--------|
| Excretion | CO₂, urea, excess water, excess salts | Metabolism inside cells |
| Egestion | Undigested food, dead bacteria, bile pigments | Food that was never absorbed |

## Nutrition
**Definition:** The taking in and use of nutrients (organic molecules and mineral ions) for energy, growth, and development.

- **Autotrophic nutrition:** Organisms make their own food from inorganic sources using light energy (photosynthesis in green plants, algae) or chemical energy (chemosynthesis in some bacteria).
- **Heterotrophic nutrition:** Organisms obtain organic molecules by consuming other organisms (animals, fungi, most bacteria).`,
          groups: [],
          recap: [
            "State the seven characteristics of living organisms using the acronym MRSGREN. [7]",
            "Explain the difference between respiration and breathing, giving the location of each process. [4]",
            "Explain why dry mass rather than wet mass is used to measure growth in organisms. [2]",
            "A student claims viruses are living because they reproduce. Explain why viruses are not considered living organisms. [3]",
            "Distinguish between excretion and egestion. Give one example of a substance produced by each process in a mammal. [4]"
          ]
        },
        {
          title: "Classification: Kingdoms, Phyla and Species",
          body: `Classification is the science of grouping organisms based on shared characteristics. A good classification system reflects evolutionary relationships and allows prediction — if you know one member of a group has a feature, you can predict others do too.

## The Taxonomic Hierarchy

Organisms are arranged in a nested series of groups from most inclusive to least inclusive:

:::svg[The Taxonomic Hierarchy — Kingdom to Species]
<svg viewBox="0 0 480 220" width="480" height="220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="480" height="220" fill="#f8fafc" rx="12"/>
  <text x="240" y="22" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Taxonomic Hierarchy (Most → Least Inclusive)</text>
  <!-- Pyramid bars -->
  <rect x="170" y="32" width="140" height="22" rx="5" fill="#7c3aed"/>
  <text x="240" y="47" text-anchor="middle" font-size="11" fill="white" font-weight="600">KINGDOM</text>
  <rect x="155" y="58" width="170" height="22" rx="5" fill="#2563eb"/>
  <text x="240" y="73" text-anchor="middle" font-size="11" fill="white" font-weight="600">PHYLUM</text>
  <rect x="140" y="84" width="200" height="22" rx="5" fill="#0891b2"/>
  <text x="240" y="99" text-anchor="middle" font-size="11" fill="white" font-weight="600">CLASS</text>
  <rect x="125" y="110" width="230" height="22" rx="5" fill="#059669"/>
  <text x="240" y="125" text-anchor="middle" font-size="11" fill="white" font-weight="600">ORDER</text>
  <rect x="110" y="136" width="260" height="22" rx="5" fill="#ca8a04"/>
  <text x="240" y="151" text-anchor="middle" font-size="11" fill="white" font-weight="600">FAMILY</text>
  <rect x="95" y="162" width="290" height="22" rx="5" fill="#dc2626"/>
  <text x="240" y="177" text-anchor="middle" font-size="11" fill="white" font-weight="600">GENUS</text>
  <rect x="80" y="188" width="320" height="22" rx="5" fill="#be185d"/>
  <text x="240" y="203" text-anchor="middle" font-size="11" fill="white" font-weight="600">SPECIES</text>
  <!-- Mnemonic -->
  <text x="10" y="210" font-size="9.5" fill="#64748b">Mnemonic: Kings Play Chess On Fine Green Silk</text>
</svg>
:::

> **Memory trick:** "**K**ings **P**lay **C**hess **O**n **F**ine **G**reen **S**ilk" — Kingdom, Phylum, Class, Order, Family, Genus, Species.

A **species** is a group of organisms that can interbreed to produce *fertile* offspring. Horses and donkeys can mate and produce mules, but mules are sterile — horses and donkeys are therefore different species.

## The Five Kingdoms

| Kingdom | Key Features | Nutrition | Example |
|---------|-------------|-----------|---------|
| **Animalia** | Multicellular eukaryote, no cell wall, no chloroplasts | Heterotrophic (ingestion) | Lion (*Panthera leo*) |
| **Plantae** | Multicellular eukaryote, cellulose cell wall, chloroplasts | Autotrophic (photosynthesis) | Oak tree (*Quercus robur*) |
| **Fungi** | Eukaryote (mostly multicellular), **chitin** cell wall | Saprotrophic (absorption) | *Agaricus bisporus* (mushroom) |
| **Protoctists** | Eukaryote, mostly unicellular | Varied | *Amoeba*, *Plasmodium* |
| **Prokaryotes** | No true nucleus, circular DNA, 70S ribosomes | Varied | *E. coli*, *Lactobacillus* |

### Fungi in Detail
Students often mistakenly classify fungi as plants. The differences are fundamental:
1. Fungi have **chitin** cell walls (plants have cellulose)
2. Fungi are **saprotrophic** — they secrete digestive enzymes *outside* the body and absorb the soluble products (plants photosynthesise)
3. Fungi store energy as **glycogen** (plants store starch)
4. Fungi are **heterotrophic** (plants are autotrophic)
5. Most fungi are **multicellular with hyphae** forming a mycelium (most plants have differentiated organs)

### Prokaryotes vs Eukaryotes
The distinction between prokaryotic and eukaryotic cells is the most fundamental divide in biology:

| Feature | Prokaryote | Eukaryote |
|---------|-----------|-----------|
| True nucleus | Absent (nucleoid region) | Present (membrane-bound) |
| DNA form | Circular, no histones | Linear chromosomes with histones |
| Ribosomes | 70S | 80S |
| Membrane-bound organelles | Absent | Present (mitochondria, ER, etc.) |
| Cell wall | Peptidoglycan (murein) | Cellulose (plants), chitin (fungi), absent (animals) |
| Size | 1–10 μm | 10–100 μm |

## Vertebrate Classes

All vertebrates have a vertebral column (backbone), an endoskeleton, and a closed circulatory system. They are divided into five classes:

:::svg[Vertebrate Classes — Key Features Comparison]
<svg viewBox="0 0 520 200" width="520" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="520" height="200" fill="#f8fafc" rx="12"/>
  <text x="260" y="20" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Five Vertebrate Classes</text>
  <!-- Fish -->
  <rect x="10" y="30" width="90" height="115" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="55" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#1d4ed8">Fish</text>
  <text x="55" y="62" text-anchor="middle" font-size="8.5" fill="#1e40af">Ectothermic</text>
  <text x="55" y="74" text-anchor="middle" font-size="8.5" fill="#1e40af">Wet scales</text>
  <text x="55" y="86" text-anchor="middle" font-size="8.5" fill="#1e40af">Gills</text>
  <text x="55" y="98" text-anchor="middle" font-size="8.5" fill="#1e40af">Soft eggs in water</text>
  <text x="55" y="110" text-anchor="middle" font-size="8.5" fill="#1e40af">Lateral line</text>
  <text x="55" y="138" text-anchor="middle" font-size="8" fill="#3b82f6">e.g. salmon</text>
  <!-- Amphibia -->
  <rect x="110" y="30" width="90" height="115" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
  <text x="155" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">Amphibia</text>
  <text x="155" y="62" text-anchor="middle" font-size="8.5" fill="#065f46">Ectothermic</text>
  <text x="155" y="74" text-anchor="middle" font-size="8.5" fill="#065f46">Moist skin</text>
  <text x="155" y="86" text-anchor="middle" font-size="8.5" fill="#065f46">Gills→Lungs</text>
  <text x="155" y="98" text-anchor="middle" font-size="8.5" fill="#065f46">Jelly eggs (water)</text>
  <text x="155" y="138" text-anchor="middle" font-size="8" fill="#10b981">e.g. frog</text>
  <!-- Reptiles -->
  <rect x="210" y="30" width="90" height="115" rx="8" fill="#fef9c3" stroke="#eab308" stroke-width="1.5"/>
  <text x="255" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#854d0e">Reptiles</text>
  <text x="255" y="62" text-anchor="middle" font-size="8.5" fill="#713f12">Ectothermic</text>
  <text x="255" y="74" text-anchor="middle" font-size="8.5" fill="#713f12">Dry scales</text>
  <text x="255" y="86" text-anchor="middle" font-size="8.5" fill="#713f12">Lungs</text>
  <text x="255" y="98" text-anchor="middle" font-size="8.5" fill="#713f12">Leathery eggs (land)</text>
  <text x="255" y="138" text-anchor="middle" font-size="8" fill="#eab308">e.g. lizard</text>
  <!-- Birds -->
  <rect x="310" y="30" width="90" height="115" rx="8" fill="#fce7f3" stroke="#ec4899" stroke-width="1.5"/>
  <text x="355" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#be185d">Birds</text>
  <text x="355" y="62" text-anchor="middle" font-size="8.5" fill="#9d174d">Endothermic</text>
  <text x="355" y="74" text-anchor="middle" font-size="8.5" fill="#9d174d">Feathers</text>
  <text x="355" y="86" text-anchor="middle" font-size="8.5" fill="#9d174d">Wings + Lungs</text>
  <text x="355" y="98" text-anchor="middle" font-size="8.5" fill="#9d174d">Hard-shelled eggs</text>
  <text x="355" y="110" text-anchor="middle" font-size="8.5" fill="#9d174d">Beak, no teeth</text>
  <text x="355" y="138" text-anchor="middle" font-size="8" fill="#ec4899">e.g. eagle</text>
  <!-- Mammals -->
  <rect x="410" y="30" width="100" height="115" rx="8" fill="#ede9fe" stroke="#8b5cf6" stroke-width="1.5"/>
  <text x="460" y="48" text-anchor="middle" font-size="11" font-weight="700" fill="#6d28d9">Mammals</text>
  <text x="460" y="62" text-anchor="middle" font-size="8.5" fill="#5b21b6">Endothermic</text>
  <text x="460" y="74" text-anchor="middle" font-size="8.5" fill="#5b21b6">Hair/fur</text>
  <text x="460" y="86" text-anchor="middle" font-size="8.5" fill="#5b21b6">Mammary glands</text>
  <text x="460" y="98" text-anchor="middle" font-size="8.5" fill="#5b21b6">Live birth</text>
  <text x="460" y="110" text-anchor="middle" font-size="8.5" fill="#5b21b6">Diaphragm</text>
  <text x="460" y="138" text-anchor="middle" font-size="8" fill="#8b5cf6">e.g. human</text>
  <!-- Legend -->
  <rect x="10" y="155" width="100" height="16" rx="4" fill="#fef3c7"/>
  <text x="60" y="166" text-anchor="middle" font-size="8.5" fill="#92400e">Ectothermic = cold-blooded</text>
  <rect x="120" y="155" width="100" height="16" rx="4" fill="#ecfdf5"/>
  <text x="170" y="166" text-anchor="middle" font-size="8.5" fill="#065f46">Endothermic = warm-blooded</text>
</svg>
:::`,
          groups: [
            {
              subTitle: "Arthropod Groups — a common exam topic",
              bullets: [
                "**Insects** (3 pairs of legs, 3 body segments — head/thorax/abdomen, 1 pair antennae, compound eyes, usually wings): bees, flies, beetles, butterflies. Largest animal class on Earth.",
                "**Arachnids** (4 pairs of legs, 2 body segments — cephalothorax/abdomen, no antennae, chelicerae/fangs): spiders, scorpions, ticks, mites.",
                "**Crustaceans** (5+ pairs of legs, hard chalky exoskeleton, 2 pairs of antennae, cephalothorax + abdomen): crabs, lobsters, shrimps, woodlice.",
                "**Myriapods** (many legs, elongated segmented body, 1 pair of antennae): **Centipedes** — 1 pair of legs per segment, carnivorous; **Millipedes** — 2 pairs per segment, herbivorous/detritivores."
              ]
            }
          ],
          recap: [
            "Name the five kingdoms of life and state one distinguishing feature of each. [5]",
            "Explain why fungi are classified separately from plants, giving three differences. [3]",
            "State four features that distinguish mammals from reptiles. [4]",
            "Explain the difference between ectothermic and endothermic, giving one advantage of endothermy. [3]",
            "Using the example of Homo sapiens, explain the rules for writing a binomial name correctly. [3]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Organisation of the Organism",
      intro: "Life is organised at multiple scales — from the atom, through molecules, organelles, cells, tissues, organs, organ systems, to the whole organism. Each level adds a new property that the level below does not possess alone. Understanding cell ultrastructure is essential: the specific components of a cell directly explain its function, and specialisation of cells into tissues and organs enables the division of labour that makes complex multicellular life possible.",
      subheadings: [
        {
          title: "Cell Ultrastructure — Animal and Plant Cells",
          body: `Cell ultrastructure refers to the detailed internal organisation of cells visible under an **electron microscope** (which has far greater resolution than a light microscope). Every structure has a function, and you must be able to link each one to what it does.

:::svg[Animal Cell and Plant Cell — Ultrastructure Comparison]
<svg viewBox="0 0 540 260" width="540" height="260" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="540" height="260" fill="#f8fafc" rx="12"/>
  <text x="270" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Eukaryotic Cell Ultrastructure</text>

  <!-- ANIMAL CELL -->
  <text x="130" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d4ed8">ANIMAL CELL</text>
  <!-- Cell membrane -->
  <ellipse cx="130" cy="130" rx="110" ry="90" fill="#fef9c3" stroke="#eab308" stroke-width="2" stroke-dasharray="4,2"/>
  <!-- Nucleus -->
  <ellipse cx="105" cy="115" rx="35" ry="28" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="105" y="111" text-anchor="middle" font-size="8" fill="#1d4ed8">Nucleus</text>
  <text x="105" y="121" text-anchor="middle" font-size="7" fill="#1e40af">(controls cell)</text>
  <!-- Nucleolus -->
  <circle cx="100" cy="108" r="6" fill="#93c5fd" stroke="#2563eb" stroke-width="1"/>
  <text x="100" y="111" text-anchor="middle" font-size="6" fill="#1d4ed8">Nu</text>
  <!-- Mitochondria -->
  <ellipse cx="165" cy="105" rx="20" ry="11" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="165" y="108" text-anchor="middle" font-size="7" fill="#15803d">Mito.</text>
  <ellipse cx="155" cy="145" rx="18" ry="10" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="155" y="148" text-anchor="middle" font-size="7" fill="#15803d">Mito.</text>
  <!-- Ribosome dots -->
  <circle cx="80" cy="145" r="3" fill="#f97316"/>
  <circle cx="90" cy="155" r="3" fill="#f97316"/>
  <circle cx="130" cy="160" r="3" fill="#f97316"/>
  <text x="75" y="170" text-anchor="start" font-size="7" fill="#c2410c">Ribosomes</text>
  <!-- Labels -->
  <text x="245" y="78" font-size="8.5" fill="#854d0e">Cell membrane</text>
  <line x1="240" y1="76" x2="200" y2="95" stroke="#854d0e" stroke-width="1"/>

  <!-- PLANT CELL -->
  <text x="400" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">PLANT CELL</text>
  <!-- Cell wall -->
  <rect x="295" y="50" width="210" height="170" rx="4" fill="none" stroke="#166534" stroke-width="3"/>
  <!-- Cell membrane inside wall -->
  <rect x="300" y="55" width="200" height="160" rx="3" fill="#fef9c3" stroke="#eab308" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- Vacuole -->
  <ellipse cx="400" cy="145" rx="70" ry="55" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
  <text x="400" y="140" text-anchor="middle" font-size="9" fill="#0369a1">Large</text>
  <text x="400" y="152" text-anchor="middle" font-size="9" fill="#0369a1">Vacuole</text>
  <!-- Nucleus -->
  <ellipse cx="330" cy="90" rx="28" ry="22" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="330" y="93" text-anchor="middle" font-size="8" fill="#1d4ed8">Nucleus</text>
  <!-- Chloroplasts -->
  <ellipse cx="480" cy="90" rx="18" ry="10" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
  <text x="480" y="93" text-anchor="middle" font-size="7" fill="#15803d">Chloro.</text>
  <ellipse cx="490" cy="140" rx="18" ry="10" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
  <text x="490" y="143" text-anchor="middle" font-size="7" fill="#15803d">Chloro.</text>
  <!-- Mitochondria -->
  <ellipse cx="350" cy="165" rx="16" ry="9" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <text x="350" y="168" text-anchor="middle" font-size="7" fill="#15803d">Mito.</text>
  <!-- Labels right -->
  <text x="510" y="55" font-size="8" fill="#166534">Cell wall</text>
  <text x="510" y="67" font-size="7" fill="#166534">(cellulose)</text>
</svg>
:::

## Structures Present in ALL Eukaryotic Cells

### Cell Membrane
The **plasma membrane** is a **phospholipid bilayer** 7–8 nm thick. Phospholipid molecules have a hydrophilic (water-loving) phosphate head and two hydrophobic (water-repelling) fatty acid tails. They spontaneously arrange into a bilayer with heads facing the aqueous environments on each side.

Embedded **proteins** serve as:
- Transport channels (facilitated diffusion of ions, glucose)
- Carrier proteins (active transport)
- Receptor proteins (for hormones, neurotransmitters)
- Enzymes (on inner surfaces)

The membrane is **selectively permeable** — it controls which substances enter and leave.

### Nucleus
The nucleus is the control centre, containing the cell's genetic instructions (DNA) as **chromatin** (DNA wound around histone proteins). It is surrounded by the **double nuclear envelope** (two lipid bilayers) perforated by **nuclear pores** (50–100 nm wide) through which mRNA exits during protein synthesis.

Inside the nucleus, the **nucleolus** synthesises ribosomal RNA and assembles ribosome subunits.

> The nucleus is analogous to the cell's "instruction manual" — it contains all the plans for making every protein in the cell, and it decides which plans are used at any given time.

### Mitochondria
Mitochondria (singular: mitochondrion) are the "powerhouses" of the cell. They have a **double membrane** — the **outer membrane** is smooth; the **inner membrane** is extensively folded into **cristae**, which dramatically increase the surface area for the reactions of the **electron transport chain** (the final stage of aerobic respiration that produces most ATP).

The fluid-filled interior is the **matrix**, where the **Krebs cycle** occurs.

Cells with high energy demands have abundant mitochondria:
- Muscle cells (for contraction)
- Sperm cells (for swimming)
- Kidney tubule cells (for active reabsorption)
- Liver cells (for metabolic reactions)

### Ribosomes
Ribosomes are the sites of **protein synthesis** (translation of mRNA into polypeptide chains). They consist of two subunits of ribosomal RNA and protein. Eukaryotic ribosomes are **80S** (larger); prokaryotic ribosomes are **70S** (smaller) — this difference is exploited by antibiotics like streptomycin which block 70S ribosomes without affecting human 80S ribosomes.

## Structures in Plant Cells Only

### Cell Wall
Made of **cellulose microfibrils** embedded in a polysaccharide matrix. Provides:
- Structural rigidity (keeps shape)
- Prevents bursting (resists expansion during osmosis, creating **turgor pressure**)
- **Fully permeable** (unlike the membrane — does not control passage of substances)

### Chloroplasts
Chloroplasts contain the **thylakoid membrane system** — flattened membrane-bound sacs (thylakoids) stacked into **grana** (singular: granum). Chlorophyll and other photosynthetic pigments are embedded in the thylakoid membranes. The light-dependent reactions of photosynthesis occur here.

The **stroma** (fluid surrounding grana) is where the **Calvin cycle** (light-independent reactions) occurs.

### Large Central Vacuole
The vacuole is filled with **cell sap** — a concentrated solution of sugars, amino acids, and inorganic ions. When full of water, it pushes the cytoplasm outward against the cell wall, creating **turgor pressure** that keeps non-woody plants rigid. Plants wilt when the vacuole loses water and the cells become **flaccid**.`,
          groups: [
            {
              subTitle: "Comparing plant and animal cells — exam summary",
              bullets: [
                "**Present in BOTH**: Cell membrane, nucleus, mitochondria, ribosomes, cytoplasm, endoplasmic reticulum.",
                "**Plant cells ONLY**: Cell wall (cellulose), chloroplasts, large permanent central vacuole, amyloplasts (starch-storing plastids in non-green cells).",
                "**Animal cells ONLY** (and absent in plants): Centrioles (involved in cell division); animal cells may have small temporary vacuoles but not the large permanent one.",
                "**Examiner trap**: Students often say 'cell wall' when they mean 'cell membrane'. The cell wall is the rigid outer layer (plants only). The cell membrane is the flexible selectively permeable layer present in ALL cells."
              ]
            }
          ],
          recap: [
            "Describe the structure of a mitochondrion and explain how its structure is related to its function. [5]",
            "Explain why plant cells do not burst when placed in pure water, but animal cells do. [4]",
            "State three differences visible between a plant cell and an animal cell under a light microscope. [3]",
            "Explain why liver cells contain more mitochondria than skin cells. [2]",
            "Describe the role of the nucleus in protein synthesis. [3]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Movement In and Out of Cells",
      intro: "The survival of every cell depends on the constant movement of substances across its membrane — nutrients in, waste products out, water balanced correctly. Three mechanisms govern this movement: **diffusion**, **osmosis**, and **active transport**. Each has different energy requirements, direction, and rules. Understanding them in precise detail explains how organisms absorb food, exchange gases, balance water, and maintain the internal conditions necessary for life.",
      subheadings: [
        {
          title: "Diffusion — Passive Movement Down a Gradient",
          body: `**Definition:** Diffusion is the ==net movement== of particles from a region of **higher concentration** to a region of **lower concentration**, due to the random kinetic motion of particles.

The word ==net== is essential — particles move in *both* directions continuously. However, more particles move from high to low than from low to high (simply because there are more particles on the high-concentration side to start moving). This creates a net overall movement down the gradient until **equilibrium** is reached.

:::svg[Diffusion — Net Movement Down Concentration Gradient]
<svg viewBox="0 0 480 180" width="480" height="180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="480" height="180" fill="#f8fafc" rx="12"/>
  <text x="240" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Diffusion: Net Movement Down Concentration Gradient</text>
  <!-- Left chamber high concentration -->
  <rect x="20" y="30" width="170" height="120" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="105" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">HIGH Concentration</text>
  <!-- Particles (many) -->
  <circle cx="50" cy="80" r="6" fill="#dc2626" opacity="0.8"/><circle cx="75" cy="65" r="6" fill="#dc2626" opacity="0.8"/>
  <circle cx="100" cy="90" r="6" fill="#dc2626" opacity="0.8"/><circle cx="130" cy="70" r="6" fill="#dc2626" opacity="0.8"/>
  <circle cx="55" cy="110" r="6" fill="#dc2626" opacity="0.8"/><circle cx="85" cy="125" r="6" fill="#dc2626" opacity="0.8"/>
  <circle cx="145" cy="100" r="6" fill="#dc2626" opacity="0.8"/><circle cx="165" cy="125" r="6" fill="#dc2626" opacity="0.8"/>
  <circle cx="40" cy="130" r="6" fill="#dc2626" opacity="0.6"/><circle cx="115" cy="115" r="6" fill="#dc2626" opacity="0.6"/>
  <!-- Membrane in middle -->
  <rect x="195" y="30" width="12" height="120" rx="3" fill="#94a3b8"/>
  <text x="201" y="170" text-anchor="middle" font-size="8" fill="#64748b">membrane</text>
  <!-- Arrows showing net movement -->
  <path d="M195 75 L230 75" stroke="#16a34a" stroke-width="3" fill="none" marker-end="url(#arrowGreen)"/>
  <path d="M220 100 L195 100" stroke="#ef4444" stroke-width="1.5" fill="none" marker-end="url(#arrowRed)" opacity="0.5"/>
  <defs>
    <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/>
    </marker>
    <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#ef4444"/>
    </marker>
  </defs>
  <text x="230" y="72" font-size="9" fill="#15803d" font-weight="600">Net movement</text>
  <!-- Right chamber low concentration -->
  <rect x="210" y="30" width="250" height="120" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
  <text x="335" y="50" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">LOW Concentration</text>
  <circle cx="250" cy="90" r="6" fill="#16a34a" opacity="0.7"/><circle cx="310" cy="70" r="6" fill="#16a34a" opacity="0.7"/>
  <circle cx="380" cy="100" r="6" fill="#16a34a" opacity="0.7"/>
</svg>
:::

## Why Diffusion is Passive
Diffusion requires **no energy input** from the cell. The kinetic energy of the particles themselves drives the process — particles are in constant random motion, and this randomness statistically guarantees net movement down a concentration gradient.

## Factors Affecting Rate of Diffusion

1. **Concentration gradient** — The steeper the gradient (bigger difference between two regions), the faster the net movement. Ventilation maintains a steep O₂ gradient in the lungs.

2. **Surface area** — More area = more simultaneous diffusion events. This explains adaptations like alveoli, villi, and microvilli.

3. **Diffusion distance** — Shorter distance = faster diffusion. Alveolar walls are only ~0.2 μm thick (one cell thick) to minimise distance.

4. **Temperature** — Higher temperature gives particles more kinetic energy, so they move faster and diffuse more rapidly.

5. **Molecular size** — Smaller molecules diffuse faster. O₂ (32 g/mol) diffuses faster than proteins (>10,000 g/mol).

## The Alveoli — Adapted for Maximum Diffusion
The alveoli demonstrate every factor that maximises diffusion rate:

| Adaptation | Factor it affects |
|-----------|-------------------|
| ~700 million alveoli (total SA ~70 m²) | Surface area maximised |
| Wall is one cell thick (~0.2 μm) | Diffusion distance minimised |
| Dense capillary network surrounds each alveolus | Concentration gradient maintained (blood carries O₂ away) |
| Constant ventilation (breathing) | O₂ in alveolar air replenished, CO₂ removed |
| Moist alveolar surfaces | Gases dissolve to diffuse across membrane |`,
          groups: [
            {
              subTitle: "Worked example — calculating diffusion rate effect",
              bullets: [
                "**Scenario**: A student compares O₂ diffusion in experiment A (20 °C) versus experiment B (40 °C). At 40°C, particles have roughly 2× the kinetic energy. **Prediction**: The rate of diffusion in B is significantly faster because more particles have sufficient energy to move, and they move faster between collisions.",
                "**Example — gas exchange at alveolus**: Blood arriving at the alveolus capillary has O₂ partial pressure ~5 kPa (O₂ used by respiring tissues). Alveolar air has O₂ partial pressure ~13 kPa. The steep gradient (13 vs 5 kPa) drives rapid diffusion of O₂ into blood. CO₂ gradient is reversed: blood CO₂ ~6 kPa, alveolar CO₂ ~5.3 kPa — CO₂ diffuses outward.",
                "**Why diffusion alone cannot supply O₂ to all body cells**: At the distances involved (mm to cm from blood vessels), diffusion would take hours — far too slow. A mass-flow transport system (the circulatory system) is needed to carry O₂ rapidly in bulk from lungs to tissues."
              ]
            }
          ],
          recap: [
            "Define diffusion and explain why it requires no energy from the cell. [3]",
            "Describe how the alveolus is adapted to maximise the rate of gas exchange by diffusion. State four adaptations and explain each one. [8]",
            "A student places a crystal of potassium manganate(VII) in a beaker of still water. Describe and explain what they observe over 24 hours. [3]",
            "Explain why increasing temperature increases the rate of diffusion. [2]",
            "Explain why diffusion alone is not sufficient to supply oxygen to all cells in a large organism like a human. [3]"
          ]
        },
        {
          title: "Osmosis — Water Movement Across a Membrane",
          body: `**Definition:** Osmosis is the ==net movement== of **water molecules** from a region of ==higher water potential== to a region of ==lower water potential==, through a **partially permeable membrane**.

## Understanding Water Potential

**Water potential (Ψ)** measures the tendency of water molecules to move. It is always measured relative to pure water:
- **Pure water** has the highest water potential: **Ψ = 0 kPa**
- **Solutions** have **negative** water potential values (e.g. Ψ = -300 kPa)
- The **more solute** dissolved, the **lower (more negative)** the water potential
- Water always moves from **less negative → more negative** (i.e. from high Ψ to low Ψ)

:::svg[Osmosis — Water Movement Through Partially Permeable Membrane]
<svg viewBox="0 0 500 200" width="500" height="200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="500" height="200" fill="#f8fafc" rx="12"/>
  <text x="250" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Osmosis Through Partially Permeable Membrane</text>
  <!-- Pure water side -->
  <rect x="15" y="30" width="170" height="140" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="52" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">Pure Water</text>
  <text x="100" y="66" text-anchor="middle" font-size="9" fill="#1e40af">Ψ = 0 kPa</text>
  <!-- Water molecule symbols (small circles) -->
  <circle cx="45" cy="95" r="7" fill="#93c5fd"/><circle cx="65" cy="80" r="7" fill="#93c5fd"/>
  <circle cx="85" cy="105" r="7" fill="#93c5fd"/><circle cx="105" cy="85" r="7" fill="#93c5fd"/>
  <circle cx="130" cy="100" r="7" fill="#93c5fd"/><circle cx="150" cy="80" r="7" fill="#93c5fd"/>
  <circle cx="55" cy="130" r="7" fill="#93c5fd"/><circle cx="120" cy="130" r="7" fill="#93c5fd"/>
  <circle cx="160" cy="120" r="7" fill="#93c5fd"/><circle cx="80" cy="145" r="7" fill="#93c5fd"/>
  <!-- Membrane -->
  <rect x="190" y="30" width="14" height="140" rx="4" fill="#64748b"/>
  <text x="197" y="184" text-anchor="middle" font-size="7.5" fill="#475569">partially</text>
  <text x="197" y="194" text-anchor="middle" font-size="7.5" fill="#475569">permeable</text>
  <!-- Pores in membrane (small gaps) -->
  <circle cx="197" cy="70" r="3" fill="#f8fafc"/>
  <circle cx="197" cy="95" r="3" fill="#f8fafc"/>
  <circle cx="197" cy="120" r="3" fill="#f8fafc"/>
  <circle cx="197" cy="145" r="3" fill="#f8fafc"/>
  <!-- Solution side -->
  <rect x="210" y="30" width="270" height="140" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="345" y="52" text-anchor="middle" font-size="10" font-weight="700" fill="#b45309">Sugar Solution</text>
  <text x="345" y="66" text-anchor="middle" font-size="9" fill="#92400e">Ψ = -800 kPa (lower)</text>
  <!-- Water molecules (fewer, because diluted by solute) -->
  <circle cx="240" cy="95" r="7" fill="#fde68a"/><circle cx="280" cy="75" r="7" fill="#fde68a"/>
  <circle cx="320" cy="110" r="7" fill="#fde68a"/><circle cx="370" cy="85" r="7" fill="#fde68a"/>
  <circle cx="420" cy="100" r="7" fill="#fde68a"/>
  <!-- Solute molecules (large squares) -->
  <rect x="255" y="95" width="14" height="14" rx="2" fill="#f97316"/><rect x="295" y="115" width="14" height="14" rx="2" fill="#f97316"/>
  <rect x="340" y="90" width="14" height="14" rx="2" fill="#f97316"/><rect x="385" y="115" width="14" height="14" rx="2" fill="#f97316"/>
  <rect x="435" y="85" width="14" height="14" rx="2" fill="#f97316"/>
  <!-- Net movement arrow -->
  <path d="M190 95 L215 95" stroke="#1d4ed8" stroke-width="3.5" fill="none"/>
  <polygon points="215,90 225,95 215,100" fill="#1d4ed8"/>
  <text x="207" y="90" text-anchor="middle" font-size="8" fill="#1d4ed8" font-weight="700">Net flow</text>
  <text x="207" y="100" text-anchor="middle" font-size="7.5" fill="#1d4ed8">of water</text>
  <!-- Legend -->
  <circle cx="230" cy="175" r="7" fill="#93c5fd"/>
  <text x="244" y="178" font-size="8.5" fill="#1e40af">Water molecule</text>
  <rect x="310" y="168" width="12" height="12" rx="2" fill="#f97316"/>
  <text x="328" y="178" font-size="8.5" fill="#c2410c">Solute molecule (too large for pores)</text>
</svg>
:::

## Osmosis in Plant Cells — Turgor and Plasmolysis

### Turgid Cell (in pure water or dilute solution)
1. Water potential outside cell > water potential inside vacuole
2. Water enters by osmosis → vacuole expands → pushes cytoplasm against cell wall
3. Cell wall resists expansion → **wall pressure** (turgor pressure) builds up
4. Cell becomes **turgid** — firm and rigid
5. Cell does **not burst** because the rigid cellulose wall prevents further swelling

### Flaccid / Plasmolysed Cell (in concentrated solution)
1. Water potential outside < water potential inside vacuole
2. Water leaves by osmosis → vacuole shrinks
3. If enough water leaves, cytoplasm pulls away from cell wall → **plasmolysis**
4. Cell becomes **flaccid** → wilting in plants

### Osmosis in Animal Cells
Animal cells have **no cell wall**, so:
- In **pure water**: water enters → cell swells → **lysis** (bursting/haemolysis in red blood cells)
- In **concentrated solution**: water leaves → cell shrinks → **crenation** (spiky appearance in RBCs)
- In **isotonic solution** (same water potential): no net movement, normal shape maintained

| Solution | Plant cell result | Animal cell result |
|----------|------------------|-------------------|
| Pure water (hypotonic) | Turgid — firm, pressure against wall | Bursts (lysis) |
| Isotonic solution | No change | No change |
| Concentrated solution (hypertonic) | Plasmolysis — flaccid | Crenation — shrivelled |

> **Key examiner point:** A plant cell becomes **turgid** in pure water, NOT "burst" — because the cell wall prevents bursting. An animal cell in the same conditions will BURST. This difference is the cell wall.`,
          groups: [
            {
              subTitle: "Investigating osmosis — potato cylinder experiment",
              bullets: [
                "**Method**: Cut cylinders of potato of equal length and mass. Place each in a different concentration of sucrose solution (e.g. 0%, 0.2 M, 0.4 M, 0.6 M, 0.8 M, 1.0 M). Leave for 30 minutes. Re-measure mass and length.",
                "**Results**: In dilute solutions (< cell water potential): cylinder gains mass and length (water enters by osmosis — turgid). In solutions equal to cell water potential: no change in mass — this concentration is **isotonic** to potato cells. In concentrated solutions (> cell water potential): cylinder loses mass and length (water leaves — flaccid).",
                "**Calculating % change in mass**: % change = (final mass - initial mass) / initial mass × 100. This controls for different starting masses. Plot % change vs concentration. Where the line crosses 0% change is the water potential of potato cell contents.",
                "**Sources of error**: Surface water on cylinders must be blotted dry before measuring. All cylinders must come from the same potato (genetic variation). Temperature must be controlled. Timing must be consistent."
              ]
            }
          ],
          recap: [
            "Define osmosis precisely, including the terms water potential and partially permeable membrane. [3]",
            "Explain what happens to a plant cell when it is placed in a concentrated sucrose solution. Use the terms plasmolysis, flaccid, and water potential. [5]",
            "A student places potato cylinders in solutions of different concentrations and finds one solution causes no change in mass. Explain what this result tells us about the potato cell contents. [3]",
            "Explain why a patient who drinks large quantities of seawater would become dangerously dehydrated. [4]",
            "Explain why it is dangerous to drink large volumes of pure water very rapidly. Include what happens to red blood cells. [3]"
          ]
        },
        {
          title: "Active Transport — Moving Against the Gradient",
          body: `**Definition:** Active transport is the movement of molecules or ions across a cell membrane from a region of **lower concentration** to a region of **higher concentration** — against the concentration gradient — requiring **energy from ATP** and **specific carrier proteins**.

## How Active Transport Works

:::svg[Active Transport — Carrier Protein Mechanism]
<svg viewBox="0 0 480 180" width="480" height="180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect width="480" height="180" fill="#f8fafc" rx="12"/>
  <text x="240" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">Active Transport: ATP-Powered Carrier Protein</text>
  <!-- Membrane bilayer -->
  <rect x="30" y="60" width="420" height="60" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
  <text x="240" y="78" text-anchor="middle" font-size="9" fill="#0369a1">Phospholipid Bilayer</text>
  <!-- Carrier protein (before) -->
  <rect x="80" y="52" width="50" height="76" rx="8" fill="#a5f3fc" stroke="#0e7490" stroke-width="2"/>
  <text x="105" y="82" text-anchor="middle" font-size="8.5" fill="#0e7490">Carrier</text>
  <text x="105" y="93" text-anchor="middle" font-size="8.5" fill="#0e7490">Protein</text>
  <!-- Ion binding site -->
  <circle cx="105" cy="48" r="8" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
  <text x="105" y="52" text-anchor="middle" font-size="7.5" fill="#92400e">Ion</text>
  <!-- Arrow + ATP -->
  <text x="170" y="85" text-anchor="middle" font-size="14" fill="#7c3aed">→</text>
  <text x="170" y="100" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="600">ATP</text>
  <text x="170" y="112" text-anchor="middle" font-size="7.5" fill="#6d28d9">energy</text>
  <!-- Carrier protein (after - conformation change) -->
  <rect x="210" y="52" width="50" height="76" rx="8" fill="#a5f3fc" stroke="#0e7490" stroke-width="2" transform="rotate(15, 235, 90)"/>
  <text x="237" y="83" text-anchor="middle" font-size="8" fill="#0e7490">Carrier</text>
  <text x="237" y="95" text-anchor="middle" font-size="8" fill="#0e7490">Protein</text>
  <text x="237" y="107" text-anchor="middle" font-size="7.5" fill="#0e7490">(changed</text>
  <text x="237" y="118" text-anchor="middle" font-size="7.5" fill="#0e7490">shape)</text>
  <!-- Ion released on other side -->
  <circle cx="240" cy="145" r="8" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
  <text x="240" y="149" text-anchor="middle" font-size="7.5" fill="#92400e">Ion</text>
  <!-- Labels -->
  <text x="105" y="35" text-anchor="middle" font-size="9" fill="#374151">LOW concentration side</text>
  <text x="340" y="148" text-anchor="middle" font-size="9" fill="#374151">HIGH concentration side</text>
  <!-- Concentration labels -->
  <text x="380" y="50" font-size="9.5" fill="#7c3aed" font-weight="600">Against gradient</text>
  <text x="380" y="62" font-size="9" fill="#6d28d9">(requires ATP)</text>
  <text x="380" y="74" font-size="9" fill="#6d28d9">= Active transport</text>
</svg>
:::

When ATP binds to a carrier protein, it changes the protein's **conformation** (shape). This shape change moves the ion or molecule from the low-concentration side to the high-concentration side, then releases it. The protein then reverts to its original shape, ready for the next molecule. This is why active transport stops immediately when respiration is inhibited — no ATP = no carrier protein function.

## Where Active Transport Is Essential

### 1. Root Hair Cells — Mineral Ion Uptake
Soil water contains mineral ions (nitrate NO₃⁻, phosphate PO₄³⁻, potassium K⁺) at very low concentrations — often lower than the concentration already inside root cells. Active transport pumps ions from soil water INTO root cells against the gradient.

Evidence: When roots are deprived of oxygen (anaerobic conditions, or treated with respiratory inhibitors), mineral ion uptake drops dramatically — confirming it requires aerobic respiration to provide ATP.

### 2. Small Intestine — Glucose and Amino Acid Absorption
After digestion, glucose concentrations in the intestinal lumen may be LOW (most has been absorbed) while blood glucose is HIGH. Epithelial cells of the villi use active transport to continue absorbing glucose against its concentration gradient — ensuring maximum absorption.

### 3. Kidney — Glucose Reabsorption
Glucose filtered into the kidney tubule is actively transported back into blood (100% recovery in healthy individuals) even when blood glucose exceeds filtrate glucose.

## Comparing All Three Transport Mechanisms

| Feature | Diffusion | Osmosis | Active Transport |
|---------|-----------|---------|----------------|
| Energy required? | No (passive) | No (passive) | Yes (ATP) |
| Direction | High → low concentration | High → low water potential | Low → high concentration |
| Membrane needed? | No (in gases); yes (across membranes) | Yes (partially permeable) | Yes |
| Substances | Any dissolved/gaseous | Water only | Specific ions/molecules |
| Carrier proteins needed? | Sometimes (facilitated diffusion) | No | Yes (specific pumps) |

> **Examiner tip:** If a substance moves **against** its concentration gradient, it MUST be active transport. If it moves **with** the gradient and no energy is used, it is diffusion (or osmosis for water).`,
          groups: [],
          recap: [
            "Define active transport and explain why it requires energy. [3]",
            "Explain why mineral ion uptake by root hair cells requires active transport, not diffusion. [3]",
            "An experiment adds cyanide (a respiratory inhibitor) to root cells. Explain why mineral ion uptake stops, using your knowledge of active transport. [4]",
            "Compare active transport with diffusion in terms of energy requirement, direction of movement, and need for carrier proteins. [6]",
            "Explain why the small intestine can continue absorbing glucose even when blood glucose concentration is higher than lumen glucose concentration. [3]"
          ]
        }
      ]
    }
  ]
};
