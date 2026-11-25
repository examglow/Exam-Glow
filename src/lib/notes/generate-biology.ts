import { writeFileSync } from "fs";
import { BIOLOGY_CHAPTER_1 } from "./biology-chapter-1";
import { BIOLOGY_CHAPTER_2 } from "./biology-chapter-2";
import { BIOLOGY_CHAPTER_3 } from "./biology-chapter-3";
import { BIOLOGY_CHAPTER_4 } from "./biology-chapter-4";
import { BIOLOGY_CHAPTER_5 } from "./biology-chapter-5";
import { BIOLOGY_CHAPTER_6 } from "./biology-chapter-6";
import { BIOLOGY_CHAPTER_7 } from "./biology-chapter-7";
import { BIOLOGY_CHAPTER_8 } from "./biology-chapter-8";
import { BIOLOGY_CHAPTER_9 } from "./biology-chapter-9";
import { BIOLOGY_CHAPTER_10 } from "./biology-chapter-10";
import { BIOLOGY_CHAPTER_11 } from "./biology-chapter-11";
import { BIOLOGY_CHAPTER_12 } from "./biology-chapter-12";
import { BIOLOGY_CHAPTER_13 } from "./biology-chapter-13";
import { BIOLOGY_CHAPTER_14 } from "./biology-chapter-14";
import { BIOLOGY_CHAPTER_15 } from "./biology-chapter-15";
import { BIOLOGY_CHAPTER_16 } from "./biology-chapter-16";
import { BIOLOGY_CHAPTER_17 } from "./biology-chapter-17";
import { BIOLOGY_CHAPTER_18 } from "./biology-chapter-18";
import { BIOLOGY_CHAPTER_19 } from "./biology-chapter-19";
import { BIOLOGY_CHAPTER_20 } from "./biology-chapter-20";
import { BIOLOGY_CHAPTER_21 } from "./biology-chapter-21";
import type { Chapter, SubHeading, BulletGroup } from "./types";

const rawChapters = [
  null, // 1-indexed
  BIOLOGY_CHAPTER_1,
  BIOLOGY_CHAPTER_2,
  BIOLOGY_CHAPTER_3,
  BIOLOGY_CHAPTER_4,
  BIOLOGY_CHAPTER_5,
  BIOLOGY_CHAPTER_6,
  BIOLOGY_CHAPTER_7,
  BIOLOGY_CHAPTER_8,
  BIOLOGY_CHAPTER_9,
  BIOLOGY_CHAPTER_10,
  BIOLOGY_CHAPTER_11,
  BIOLOGY_CHAPTER_12,
  BIOLOGY_CHAPTER_13,
  BIOLOGY_CHAPTER_14,
  BIOLOGY_CHAPTER_15,
  BIOLOGY_CHAPTER_16,
  BIOLOGY_CHAPTER_17,
  BIOLOGY_CHAPTER_18,
  BIOLOGY_CHAPTER_19,
  BIOLOGY_CHAPTER_20,
  BIOLOGY_CHAPTER_21,
];

interface Spec {
  topicNumber: number;
  section: string;
  subtopic: string;
  notes: {
    title: string;
    rawChapter?: number;
    rawSubheadingIndexes?: number[];
    customBody?: string;
    customFigure?: string;
    customGroups?: BulletGroup[];
    customTips?: string[];
    customMistakes?: string[];
    customRecap?: string[];
  }[];
}

const specs: Spec[] = [
  // 1. Characteristics & Classification of Living Organisms (1 Topic · 5 Revision Notes)
  {
    topicNumber: 1,
    section: "1. Characteristics & Classification of Living Organisms",
    subtopic: "Characteristics, Classification & Features of Organisms",
    notes: [
      {
        title: "Characteristics of Living Organisms",
        rawChapter: 1,
        rawSubheadingIndexes: [0], // MRS GREN
        customFigure: "![The 7 Characteristics of Living Organisms (MRS GREN)](/notes/biology/mrs-gren-characteristics.jpg)",
      },
      {
        title: "Concept & Uses of Classification Systems",
        rawChapter: 1,
        rawSubheadingIndexes: [1], // Concept and Uses of Classification System
        customFigure: "![The Taxonomic Hierarchy and Binomial Nomenclature System with Labels](/notes/biology/classification-hierarchy.jpg)",
      },
      {
        title: "Concept & Uses of Classification Systems Continued",
        rawChapter: 1,
        rawSubheadingIndexes: [2], // Dichotomous Keys
        customFigure: "![How to Construct and Use a Dichotomous Key with Labels](/notes/biology/dichotomous-keys.jpg)",
      },
      {
        title: "Features of Organisms",
        rawChapter: 1,
        rawSubheadingIndexes: [3, 4], // Features of Organisms + Vertebrates
        customFigure: "![The Five Kingdoms of Living Organisms with Diagnostic Labels](/notes/biology/five-kingdoms.jpg)",
      },
      {
        title: "Features of Organisms Continued",
        rawChapter: 1,
        rawSubheadingIndexes: [5, 6, 7], // Arthropods + Classification of Plants + Viruses
        customFigure: "![The Four Main Arthropod Classes with Anatomical Labels](/notes/biology/arthropods.jpg)",
      },
    ],
  },

  // 2. Organisation of the Organism (1 Topic · 4 Revision Notes)
  {
    topicNumber: 2,
    section: "2. Organisation of the Organism",
    subtopic: "Cell Structure & Size of Specimens",
    notes: [
      {
        title: "Cell Structure",
        rawChapter: 2,
        rawSubheadingIndexes: [1, 4],
        customFigure: "![Ultrastructure of Animal Cell vs Plant Cell with Organelle Labels](/notes/biology/animal-vs-plant-cell.jpg)", // Animal & Plant Cell Structure + Functions of Cell Parts
      },
      {
        title: "Cell Specialisation",
        rawChapter: 2,
        rawSubheadingIndexes: [2], // Cell Differentiation and Specialisation
      },
      {
        title: "Size of Specimens & Magnification",
        rawChapter: 2,
        rawSubheadingIndexes: [3], // Light Microscope and Magnification
      },
      {
        title: "Levels of Organisation",
        rawChapter: 2,
        rawSubheadingIndexes: [0, 5], // Levels of Organisation + Tissues, Organs and Systems
      },
    ],
  },

  // 3. Movement into & out of Cells (1 Topic · 8 Revision Notes)
  {
    topicNumber: 3,
    section: "3. Movement into & out of Cells",
    subtopic: "Diffusion, Osmosis & Active Transport",
    notes: [
      {
        title: "Diffusion",
        rawChapter: 3,
        rawSubheadingIndexes: [0], // Diffusion
        customFigure: "![Mechanisms of Cellular Transport: Diffusion, Osmosis and Active Transport with Labels](/notes/biology/diffusion-osmosis-active-transport.jpg)",
      },
      {
        title: "Factors Influencing Diffusion",
        rawChapter: 3,
        rawSubheadingIndexes: [3, 4], // Gas Exchange Surfaces + Surface Area to Volume Ratio
      },
      {
        title: "Osmosis",
        rawChapter: 3,
        rawSubheadingIndexes: [1], // Osmosis and Turgidity
      },
      {
        title: "Osmosis in Plant Tissues",
        rawChapter: 3,
        customBody: `### Osmosis in Plant Tissues\n\nPlant cells depend on osmosis to maintain mechanical rigidity and structural integrity across vegetative organs.\n\n- **Turgor Pressure:** When placed in a dilute solution (higher water potential), water enters the root hair and parenchymal cells by osmosis. The cytoplasm and vacuole swell, pushing firmly against the rigid cellulose cell wall. This outward hydrostatic pressure is called **turgor pressure**, making the plant tissue **turgid**.\n- **Flaccidity:** In an isotonic environment (equal water potentials), there is no net movement of water. Cells lose firmness and become **flaccid**, leading to wilting of non-woody stems and leaves.\n- **Plasmolysis:** In a concentrated solute solution (lower water potential), water leaves the plant cell by osmosis. The vacuole shrinks and the cell membrane pulls completely away from the cell wall. This extreme condition is termed **plasmolysis**.`,
        customTips: [
          "State clearly that the cell wall prevents plant cells from bursting when placed in pure water.",
          "Remember that turgid cells provide essential mechanical support to herbaceous plant stems.",
        ],
        customMistakes: [
          "Saying the cell wall shrinks during plasmolysis. The cell wall remains largely rigid; the cell membrane and cytoplasm pull away from the wall.",
        ],
        customRecap: [
          "Explain why plant stems wilt when deprived of water for several days. [3]",
          "Distinguish between a turgid, flaccid, and plasmolysed plant cell. [3]",
        ],
      },
      {
        title: "Osmosis in Animals",
        rawChapter: 3,
        customBody: `### Osmosis in Animal Cells\n\nUnlike plant cells, animal cells lack a rigid cell wall and are surrounded only by a flexible, partially permeable cell membrane.\n\n| External Solution Water Potential | Net Water Movement | Outcome on Red Blood Cells |\n| :--- | :--- | :--- |\n| **Hypotonic** (Higher water potential than cell) | Water enters cell by osmosis | Cell swells and bursts (**lysis**) |\n| **Isotonic** (Equal water potential to cell) | No net water movement | Cell maintains normal biconcave shape |\n| **Hypertonic** (Lower water potential than cell) | Water leaves cell by osmosis | Cell shrinks and shrivels (**crenation**) |\n\n- Because animal cells burst if internal hydrostatic pressure rises too high, animals require specialized osmoregulatory organs (such as kidneys) to keep blood plasma water potential strictly constant.`,
        customTips: [
          "Use the term **lysis** (bursting) for animal cells in pure water, and **crenation** (shrivelling) in concentrated salt solution.",
          "Never say animal cells become 'turgid'; turgor requires a cell wall.",
        ],
        customMistakes: [
          "Claiming animal cells become plasmolysed. Plasmolysis only happens in cells with cell walls.",
        ],
        customRecap: [
          "Describe what happens to human red blood cells placed in distilled water. [2]",
          "Explain why kidney osmoregulation is vital for preventing cellular damage in humans. [3]",
        ],
      },
      {
        title: "Active Transport",
        rawChapter: 3,
        rawSubheadingIndexes: [2], // Active Transport
      },
      {
        title: "Comparing Active Transport & Diffusion",
        rawChapter: 3,
        customBody: `### Comparison of Transport Mechanisms\n\n| Feature | Diffusion | Osmosis | Active Transport |\n| :--- | :--- | :--- | :--- |\n| **Substance Transported** | Solutes, gases, small molecules | Water molecules only | Specific ions and polar solutes |\n| **Concentration Gradient** | Down (high to low) | Down water potential (high $\\psi$ to low $\\psi$) | Against (low to high) |\n| **Energy Requirement** | Passive (kinetic energy) | Passive (kinetic energy) | Active (requires cellular ATP) |\n| **Membrane Required?** | No (can occur in air/liquid) | Yes (partially permeable) | Yes (requires carrier proteins) |\n| **Biological Example** | Gas exchange in alveoli; leaf $CO_2$ | Water uptake in root hair cells | Nitrate uptake in roots; glucose in gut |`,
        customTips: [
          "In 4-mark comparison questions, use paired comparative sentences connecting concentration gradient and energy requirement.",
        ],
        customMistakes: [
          "Saying active transport moves molecules 'from high to low'. It always moves molecules 'from low to high' against the concentration gradient.",
        ],
        customRecap: [
          "State two structural features of cell membranes essential for active transport. [2]",
          "Compare diffusion and active transport in terms of energy and direction of movement. [4]",
        ],
      },
      {
        title: "Practical Investigations of Movement",
        rawChapter: 3,
        rawSubheadingIndexes: [5], // Practical Investigations of Movement
      },
    ],
  },

  // 4. Biological Molecules (1 Topic · 3 Revision Notes)
  {
    topicNumber: 4,
    section: "4. Biological Molecules",
    subtopic: "Biological Molecules",
    notes: [
      {
        title: "Carbohydrates, Lipids & Proteins",
        rawChapter: 4,
        rawSubheadingIndexes: [0, 1, 2],
      },
      {
        title: "Food Tests in the Laboratory",
        rawChapter: 4,
        rawSubheadingIndexes: [3], // Food Tests in the Laboratory
      },
      {
        title: "DNA Structure & Role of Water",
        rawChapter: 4,
        rawSubheadingIndexes: [4, 5], // Enzymes intro + Water and Mineral Salts
      },
    ],
  },

  // 5. Enzymes (1 Topic · 5 Revision Notes)
  {
    topicNumber: 5,
    section: "5. Enzymes",
    subtopic: "Enzymes",
    notes: [
      {
        title: "Enzyme Action & Specificity",
        rawChapter: 5,
        rawSubheadingIndexes: [0, 1],
        customFigure: "![Lock and Key Model of Enzyme Action with Labels](/notes/biology/enzyme-lock-and-key.jpg)", // What Enzymes Are + Lock and Key
      },
      {
        title: "Effect of Temperature on Enzymes",
        rawChapter: 5,
        rawSubheadingIndexes: [2], // Temperature
      },
      {
        title: "Effect of pH on Enzymes",
        rawChapter: 5,
        rawSubheadingIndexes: [3], // pH
      },
      {
        title: "Investigating Rate of Enzyme Reactions",
        rawChapter: 5,
        rawSubheadingIndexes: [5], // Measuring Rate and Designing a Fair Test
      },
      {
        title: "Enzymes in Digestion & Industry",
        rawChapter: 5,
        rawSubheadingIndexes: [4], // Amylase, Protease, Lipase & Catalase
      },
    ],
  },

  // 6. Plant Nutrition (1 Topic · 11 Revision Notes)
  {
    topicNumber: 6,
    section: "6. Plant Nutrition",
    subtopic: "Photosynthesis & Leaf Structure",
    notes: [
      {
        title: "Photosynthesis & Chlorophyll Function",
        rawChapter: 6,
        rawSubheadingIndexes: [0],
        customFigure: "![Internal Structure and Anatomy of a Dicotyledonous Leaf with Labels](/notes/biology/leaf-structure-photosynthesis.jpg)", // Photosynthesis
      },
      {
        title: "Word & Chemical Equations for Photosynthesis",
        rawChapter: 6,
        customBody: `### Equations for Photosynthesis\n\nPhotosynthesis is the fundamental endothermic process by which autotrophic plants synthesize glucose and release oxygen using light energy absorbed by chlorophyll.\n\n#### Word Equation:\n$$\\text{Carbon dioxide} + \\text{Water} \\xrightarrow[\\text{chlorophyll}]{\\text{light}} \\text{Glucose} + \\text{Oxygen}$$\n\n#### Balanced Chemical Equation:\n$$6CO_2 + 6H_2O \\xrightarrow[\\text{chlorophyll}]{\\text{light}} C_6H_{12}O_6 + 6O_2$$\n\n- **Chlorophyll** is the green pigment stored inside **chloroplasts**. It acts as an energy transducer, capturing light wavelengths and converting light energy into chemical energy stored within covalent bonds of glucose.\n- The oxygen released originates entirely from the photolysis of water molecules.`,
        customTips: [
          "Memorize the balanced formula equation with formulas and state symbols: $6CO_2 + 6H_2O \\to C_6H_{12}O_6 + 6O_2$.",
          "Always write 'light' and 'chlorophyll' above and below the reaction arrow.",
        ],
        customMistakes: [
          "Forgetting to balance the equation by writing $CO_2 + H_2O \\to C_6H_{12}O_6 + O_2$. Balanced coefficients are always 6, 6, 1, 6.",
        ],
        customRecap: [
          "State the balanced chemical equation for photosynthesis. [2]",
          "State the function of chlorophyll in photosynthesis. [1]",
        ],
      },
      {
        title: "Investigating Photosynthesis & Starch",
        rawChapter: 6,
        rawSubheadingIndexes: [3], // Testing a Leaf for Starch
      },
      {
        title: "Limiting Factors: Light Intensity",
        rawChapter: 6,
        customBody: `### Limiting Factor: Light Intensity\n\nA **limiting factor** is something present in the environment in such short supply that it restricts life processes.\n\n- At low light intensities, light is the limiting factor. As light intensity increases, the rate of photosynthesis rises proportionally because more light energy is absorbed by chlorophyll to drive the light-dependent reactions.\n- Beyond a certain light intensity, the curve plateaus. Further increases in light do not raise the photosynthetic rate because another factor—either **carbon dioxide concentration** or **temperature**—has become limiting.`,
        customTips: [
          "When describing graph plateaus, explain that 'another factor is now limiting the rate'. Name that factor (e.g. CO2 or temperature).",
        ],
        customMistakes: [
          "Saying the plant dies or denatures when light plateaus. Enzymes do not denature from high light; the rate merely levels off.",
        ],
        customRecap: [
          "Define the term limiting factor. [2]",
          "Explain why increasing light intensity beyond a certain point does not increase the rate of photosynthesis. [2]",
        ],
      },
      {
        title: "Limiting Factors: Carbon Dioxide Concentration",
        rawChapter: 6,
        customBody: `### Limiting Factor: Carbon Dioxide\n\n- Carbon dioxide is the essential carbon source required to construct glucose ($C_6H_{12}O_6$) during the light-independent reactions.\n- Atmospheric air contains approximately **0.04% $CO_2$**, meaning $CO_2$ is frequently the primary limiting factor for terrestrial plants in natural conditions on bright sunny days.\n- In commercial glasshouses, paraffin burners or compressed gas tanks are utilized to artificially elevate $CO_2$ levels to ~0.1%, significantly accelerating crop yield.`,
        customTips: [
          "Mention that normal atmospheric CO2 is only ~0.04%, which explains why enrichment in greenhouses boosts tomato and crop yields.",
        ],
        customMistakes: [
          "Writing that CO2 provides energy. Energy comes from light; CO2 supplies carbon and oxygen atoms for glucose synthesis.",
        ],
        customRecap: [
          "Explain how commercial growers optimize carbon dioxide levels in commercial greenhouses. [2]",
        ],
      },
      {
        title: "Limiting Factors: Temperature",
        rawChapter: 6,
        rawSubheadingIndexes: [2], // Limiting Factors
      },
      {
        title: "Leaf Structure & Anatomical Adaptations",
        rawChapter: 6,
        rawSubheadingIndexes: [1], // Leaf Structure
      },
      {
        title: "Stomata & Gas Exchange in Leaves",
        rawChapter: 6,
        customBody: `### Stomatal Mechanism & Gas Exchange\n\n- **Stomata** (singular: stoma) are microscopic apertures located predominantly in the lower epidermis of leaves, flanked by two specialized **guard cells**.\n- **Opening in Daylight:** In light, guard cells actively accumulate potassium ions ($K^+$) and produce soluble sugars. Water enters the guard cells by osmosis. Because the inner cellulose wall bordering the pore is thick and rigid while the outer wall is thin and flexible, the guard cells bow outwards, opening the pore to allow $CO_2$ diffusion for photosynthesis.\n- **Closing in Darkness or Water Stress:** In darkness or severe drought, guard cells lose water by osmosis, become flaccid, and straighten, closing the stoma to prevent excessive transpirational water loss.`,
        customTips: [
          "Highlight that stomata open in the day to permit carbon dioxide entry for photosynthesis, while transpiration occurs as an inevitable consequence.",
        ],
        customMistakes: [
          "Assuming stomata actively suck in gas. Gas movement through stomata occurs entirely by **diffusion** down concentration gradients.",
        ],
        customRecap: [
          "Describe how guard cells cause stomatal pores to open in daylight. [3]",
          "State the trade-off plants face regarding stomatal opening. [2]",
        ],
      },
      {
        title: "Plant Mineral Requirements (Nitrate & Magnesium)",
        rawChapter: 6,
        rawSubheadingIndexes: [5], // Mineral Ions and Deficiency Symptoms
      },
      {
        title: "Plant Mineral Deficiencies & Symptoms",
        rawChapter: 6,
        customBody: `### Mineral Deficiencies in Plants\n\n| Mineral Ion | Biological Purpose | Deficiency Symptom | Explanation |\n| :--- | :--- | :--- | :--- |\n| **Nitrate ($NO_3^-$)** | Synthesizing amino acids, proteins, and DNA | **Stunted growth** and pale leaves | Without amino acids, cells cannot synthesize structural proteins or enzymes required for cell division |\n| **Magnesium ($Mg^{2+}$)** | Central ion in the chlorophyll molecule | **Chlorosis** (yellowing of leaves, starting between veins) | Chlorophyll cannot be assembled; photosynthesis rate drops drastically |`,
        customTips: [
          "Directly link nitrate to proteins/amino acids (growth) and magnesium to chlorophyll (yellow leaves/photosynthesis).",
        ],
        customMistakes: [
          "Writing that magnesium is needed for protein synthesis. Magnesium is strictly required to synthesize chlorophyll.",
        ],
        customRecap: [
          "A plant exhibits yellow leaves and poor growth. Deduce which mineral ion is deficient and explain your reasoning. [3]",
        ],
      },
      {
        title: "Use & Storage of Photosynthetic Products",
        rawChapter: 6,
        customBody: `### Fate of Photosynthetic Glucose\n\nGlucose produced during photosynthesis is utilized in several distinct pathways:\n\n1. **Respiration:** Broken down oxidatively inside mitochondria to generate ATP for active transport and synthesis.\n2. **Starch Storage:** Converted into insoluble **starch** and stored in chloroplasts, stems, and tubers (potatoes). Because starch is insoluble, it exerts zero osmotic pressure on plant cells.\n3. **Cellulose Cell Walls:** Polymerised into structural cellulose microfibrils to strengthen cell walls.\n4. **Lipids:** Converted into oils stored inside seeds (e.g. sunflower and canola seeds) as high-density energy reserves for germination.\n5. **Sucrose Transport:** Converted into soluble **sucrose** for translocation through the phloem to sinks.`,
        customTips: [
          "Explain why plants store starch rather than glucose: starch is **insoluble** and does not affect the water potential of cells.",
        ],
        customMistakes: [
          "Saying plants store glucose. Glucose would cause massive osmotic water influx and disrupt cellular metabolism.",
        ],
        customRecap: [
          "State three uses of glucose synthesized by a plant. [3]",
          "Explain why plants convert glucose into starch for long-term storage. [2]",
        ],
      },
    ],
  },

  // 7. Human Nutrition (1 Topic · 14 Revision Notes)
  {
    topicNumber: 7,
    section: "7. Human Nutrition",
    subtopic: "Human Diet & Digestion",
    notes: [
      {
        title: "Balanced Diet & Nutrients",
        rawChapter: 7,
        rawSubheadingIndexes: [0, 1], // Balanced Diet + Major Food Classes
      },
      {
        title: "Vitamins, Minerals & Water",
        rawChapter: 7,
        customBody: `### Micronutrients in Human Health\n\n- **Vitamin C (Ascorbic acid):** Required for synthesizing **collagen** protein that binds tissues, skin, gums, and blood vessels. Found in citrus fruits, bell peppers, and strawberries.\n- **Vitamin D (Calciferol):** Essential for absorbing calcium from the intestine to mineralize bones and teeth. Synthesized in skin via UV sunlight; dietary sources include oily fish and egg yolk.\n- **Calcium ($Ca^{2+}$):** Mineralizes bone matrix and enamel; vital for blood clotting cascade and muscle contraction. Found in dairy milk, cheese, and dark leafy greens.\n- **Iron ($Fe^{2+}$):** Central atom in each of the four haem groups of **haemoglobin**, binding oxygen for transport in red blood cells. Found in red meat, liver, spinach, and legumes.\n- **Water ($H_2O$):** Acts as universal solvent for metabolic reactions, transport medium in blood plasma, and thermoregulatory coolant via perspiration.`,
        customTips: [
          "Be specific: Iron is needed to make **haemoglobin**, Vitamin C is needed for **collagen** in skin/gums, Calcium is for **strong bones and teeth**.",
        ],
        customMistakes: [
          "Confusing Vitamin C deficiency with Vitamin D deficiency: Vitamin C causes scurvy; Vitamin D causes rickets.",
        ],
        customRecap: [
          "Identify the dietary deficiency responsible for anaemia and explain the physiological consequence. [3]",
        ],
      },
      {
        title: "Dietary Deficiencies & Malnutrition",
        rawChapter: 7,
        rawSubheadingIndexes: [2], // Deficiency Diseases
      },
      {
        title: "Human Alimentary Canal Anatomy",
        rawChapter: 7,
        rawSubheadingIndexes: [3], // Structure of Mammalian Digestive System
      },
      {
        title: "Human Teeth Types & Functions",
        rawChapter: 7,
        customBody: `### Mammalian Dentition\n\nHumans possess four distinct tooth types specialized for mechanical digestion:\n\n1. **Incisors (8 total):** Chisel-shaped with sharp edges; located at the front of the jaw for biting and cutting pieces of food.\n2. **Canines (4 total):** Pointed and sharp; positioned beside incisors for piercing, holding, and tearing tough food.\n3. **Premolars (8 total):** Possess two cusps (ridges); used for chewing, grinding, and crushing food particles.\n4. **Molars (12 total):** Large, flat crowns with four or five cusps; positioned at the back of the mouth for powerful crushing and grinding.\n\n- Tooth Structure: Outer protective layer of **enamel** (hardest biological substance), underlying living **dentine** containing microscopic channels, central **pulp cavity** carrying blood vessels and nerve endings, anchored into the jawbone by **cement** and periodontal fibres.`,
        customTips: [
          "Identify tooth types on diagrams: incisors (front, chisel), canines (pointed), premolars/molars (broad flat crowns with cusps).",
        ],
        customMistakes: [
          "Thinking enamel can regenerate once worn away. Enamel contains no living cells and cannot repair itself if dissolved by bacterial acid.",
        ],
        customRecap: [
          "State the function of molars in mechanical digestion. [1]",
          "Label the enamel, dentine, and pulp cavity in a tooth diagram. [3]",
        ],
      },
      {
        title: "Dental Decay & Prevention",
        rawChapter: 7,
        customBody: `### Dental Decay (Caries)\n\n1. A sticky film of food particles and saliva coats teeth, forming **plaque**.\n2. Bacteria living inside plaque metabolize dietary **sugars** by anaerobic respiration, producing **acid**.\n3. The acid lowers pH below 5.5, dissolving the calcium phosphate matrix of the protective tooth **enamel**.\n4. Decay extends into the softer underlying **dentine** and eventually reaches the sensitive nerve fibres in the **pulp cavity**, causing severe toothache and abscesses.\n\n#### Prevention:\n- Brushing twice daily with **fluoride toothpaste** (fluoride strengthens enamel acid resistance).\n- Reducing frequency of sugary foods and fizzy drinks.\n- Regular dental scaling to remove calcified tartar/plaque.`,
        customTips: [
          "The mark scheme formula: **bacteria + sugar $\\to$ acid $\\to$ dissolves enamel**.",
        ],
        customMistakes: [
          "Saying sugar rots teeth directly. It is the **acid produced by bacteria respiring sugar** that dissolves enamel.",
        ],
        customRecap: [
          "Explain how bacteria in plaque cause dental decay. [3]",
          "State two methods for reducing the incidence of dental caries. [2]",
        ],
      },
      {
        title: "Mechanical vs Chemical Digestion",
        rawChapter: 7,
        customBody: `### Mechanical vs Chemical Digestion\n\n- **Digestion** is the breakdown of large, insoluble food molecules into small, water-soluble molecules so that they can be absorbed across the intestinal wall into the bloodstream.\n\n| Feature | Mechanical Digestion | Chemical Digestion |\n| :--- | :--- | :--- |\n| **Definition** | Physical breakdown of food into smaller pieces without chemical modification | Hydrolysis of large, insoluble polymers into soluble monomers using enzymes |\n| **Location** | Mouth (chewing by teeth); stomach (churning peristalsis) | Mouth (amylase); stomach (pepsin); small intestine (amylase, trypsin, lipase) |\n| **Purpose** | Increases **surface area** of food available for subsequent enzyme contact | Converts polymers (starch, proteins, fats) into absorbable monomers (glucose, amino acids, fatty acids) |`,
        customTips: [
          "Emphasize that mechanical digestion **increases surface area for enzymes**; chemical digestion **breaks chemical bonds**.",
        ],
        customMistakes: [
          "Saying mechanical digestion breaks chemical bonds. Chemical bonds are hydrolyzed strictly during chemical digestion.",
        ],
        customRecap: [
          "Distinguish between mechanical and chemical digestion. [2]",
          "Explain why mechanical digestion accelerates chemical digestion. [2]",
        ],
      },
      {
        title: "Chemical Digestion: Digestive Enzymes",
        rawChapter: 7,
        rawSubheadingIndexes: [4], // Digestion: Enzymes, Acids and Bile
      },
      {
        title: "Functions of Hydrochloric Acid in Gastric Juice",
        rawChapter: 7,
        customBody: `### Hydrochloric Acid in the Stomach\n\nGastric glands in the stomach wall secrete gastric juice containing dilute hydrochloric acid ($HCl$), creating an acidic environment with pH 1.5 to 2.0.\n\n#### Key Functions:\n1. **Antimicrobial Action:** Low pH denatures enzymes and structural proteins of potentially pathogenic microorganisms ingested with food, killing bacteria before they can establish gastrointestinal infections.\n2. **Enzyme Activation & Optimum pH:** Provides the precise strongly acidic optimum pH (pH 2) required for the gastric endopeptidase **pepsin** to hydrolyse proteins into shorter polypeptides efficiently.\n3. **Denaturing Dietary Proteins:** Acid uncoils folded food proteins, exposing peptide bonds to more rapid proteolytic cleavage by pepsin.`,
        customTips: [
          "Always state both roles: killing bacteria by denaturing their enzymes, and providing the optimum acidic pH for pepsin.",
        ],
        customMistakes: [
          "Saying stomach acid breaks down food directly. Acid provides optimum conditions and kills microbes; **pepsin enzyme** hydrolyses proteins.",
        ],
        customRecap: [
          "State two functions of hydrochloric acid in gastric juice. [2]",
        ],
      },
      {
        title: "Bile: Production, Neutralisation & Emulsification",
        rawChapter: 7,
        customBody: `### Role of Bile\n\n- **Origin:** Synthesized continuously by liver hepatocytes and stored in the **gall bladder**; released into the duodenum via the bile duct when chyme enters from the stomach.\n- **Bile contains NO digestive enzymes.** It is composed of alkaline sodium hydrogencarbonate and bile salts.\n\n#### Two Crucial Roles:\n1. **Neutralisation of Acidic Chyme:** Gastric chyme arriving in the duodenum has a pH around 2. Alkaline bile neutralises this acid, raising duodenal pH to 7–8, which is the optimum neutral-to-slightly-alkaline pH for pancreatic enzymes (amylase, trypsin, lipase).\n2. **Emulsification of Lipids:** Bile salts break down large fat globules into millions of microscopic lipid droplets (emulsification). This dramatically **increases the surface area** of lipid exposed to pancreatic lipase, greatly accelerating digestion into glycerol and fatty acids.`,
        customTips: [
          "Remember: Bile is an **emulsifier**, NOT an enzyme. It performs mechanical dispersion, not chemical hydrolysis.",
        ],
        customMistakes: [
          "Saying bile digests fats into fatty acids. Lipase digests fats; bile merely emulsifies them to provide a large surface area.",
        ],
        customRecap: [
          "Explain why bile is necessary for the efficient digestion of fats in the duodenum. [3]",
          "State where bile is produced, where it is stored, and where it acts. [3]",
        ],
      },
      {
        title: "Small Intestine: Adaptations & Villi Structure",
        rawChapter: 7,
        rawSubheadingIndexes: [5], // Absorption in Small Intestine
      },
      {
        title: "Lacteals, Capillaries & Absorption",
        rawChapter: 7,
        customBody: `### Absorption Pathways in Villi\n\nEach intestinal villus contains two distinct circulatory transport channels:\n\n1. **Blood Capillary Network:**\n   - Water-soluble nutrients—including **glucose, amino acids, vitamins B/C, and mineral ions**—are absorbed across the epithelial cells into blood capillaries via facilitated diffusion and active transport.\n   - Capillaries converge into the **hepatic portal vein**, transporting absorbed nutrients directly to the **liver** for processing.\n2. **Central Lacteal:**\n   - Fatty acids and glycerol enter epithelial cells, where they reassemble into triglycerides and enter the central **lacteal** (a blind-ended lymphatic vessel).\n   - Lymphatic vessels bypass the liver initially, transporting lipids through the thoracic duct to empty into the subclavian vein.`,
        customTips: [
          "Remember that glucose and amino acids enter **blood capillaries** (going to hepatic portal vein), while lipids enter the **lacteal** (lymphatic system).",
        ],
        customMistakes: [
          "Stating that fats enter the bloodstream directly in the small intestine. They enter the central lacteal first.",
        ],
        customRecap: [
          "Name the vessel that transports glucose and amino acids from the ileum to the liver. [1]",
          "State the function of the lacteal inside a villus. [1]",
        ],
      },
      {
        title: "Assimilation & Role of the Liver",
        rawChapter: 7,
        customBody: `### Assimilation and Liver Function\n\n- **Assimilation** is the movement of digested food molecules into the cells of the body where they are used, becoming part of the cells.\n\n#### Liver Functions in Metabolism:\n1. **Glucose Homeostasis:** Converts excess absorbed glucose into insoluble storage polysaccharide **glycogen** under the influence of insulin. When blood glucose falls, glucagon stimulates glycogen breakdown back to glucose.\n2. **Deamination of Excess Amino Acids:** Animals cannot store excess amino acids. The liver removes the nitrogen-containing amino group ($-NH_2$), converting it into toxic ammonia ($NH_3$), which is immediately transformed into less toxic **urea** and excreted by the kidneys. The remaining carbohydrate carbon skeleton is respired for energy.\n3. **Detoxification:** Breaks down toxins, alcohol, and medicinal drugs into harmless excretory metabolites.`,
        customTips: [
          "Define deamination accurately: **the removal of the nitrogen-containing part of amino acids to form urea**.",
        ],
        customMistakes: [
          "Confusing absorption with assimilation. Absorption is entering the blood; assimilation is becoming part of cell structure/metabolism.",
        ],
        customRecap: [
          "Define the term assimilation. [2]",
          "Describe the process of deamination in the human liver. [3]",
        ],
      },
      {
        title: "Cholera, Diarrhoea & Oral Rehydration Therapy",
        rawChapter: 7,
        customBody: `### Cholera and Diarrhoea\n\n- **Cholera** is an acute diarrhoeal infection caused by ingestion of water contaminated with the bacterium *Vibrio cholerae*.\n\n#### Mechanism of Pathology:\n1. Bacteria reach the small intestine and adhere to the mucosal lining, secreting a potent **protein enterotoxin**.\n2. The cholera toxin stimulates intestinal epithelial cells to actively secrete **chloride ions ($Cl^-$)** into the intestinal lumen.\n3. The massive accumulation of chloride ions sharply lowers the water potential of the intestinal lumen.\n4. Water is drawn out of epithelial cells and blood plasma into the gut lumen by **osmosis**.\n5. This leads to profuse watery diarrhoea ('rice-water stools'), rapid hypovolaemic dehydration, and shock.\n\n#### Treatment — Oral Rehydration Therapy (ORT):\n- Patients are administered a balanced aqueous solution of **water, glucose, and sodium chloride**.\n- Glucose facilitates the active co-transport of sodium ions back into intestinal cells, reversing the osmotic gradient and driving water reabsorption into the blood.`,
        customTips: [
          "Memorize the step-by-step mechanism: toxin $\\to$ secretion of chloride ions $\\to$ lower water potential in gut $\\to$ water moves out by osmosis $\\to$ watery diarrhoea.",
        ],
        customMistakes: [
          "Assuming cholera destroys the intestinal wall. The wall remains intact; the toxin triggers ion secretion.",
        ],
        customRecap: [
          "Explain how the cholera bacterium causes severe dehydration in infected individuals. [4]",
          "Explain the biological basis of treating cholera with oral rehydration therapy. [2]",
        ],
      },
    ],
  },

  // 8. Transport in Plants (1 Topic · 8 Revision Notes)
  {
    topicNumber: 8,
    section: "8. Transport in Plants",
    subtopic: "Transport in Plants",
    notes: [
      {
        title: "Xylem & Phloem Distribution",
        rawChapter: 8,
        rawSubheadingIndexes: [0], // Xylem and Phloem
      },
      {
        title: "Root Hair Cells & Water Uptake",
        rawChapter: 8,
        rawSubheadingIndexes: [1], // Water Enters the Root
      },
      {
        title: "Pathway of Water Through Plant",
        rawChapter: 8,
        customBody: `### Water Route from Soil to Atmosphere\n\n$$\\text{Soil water} \\xrightarrow{\\text{osmosis}} \\text{Root hair} \\xrightarrow{\\text{osmosis}} \\text{Root cortex} \\xrightarrow{\\text{osmosis}} \\text{Xylem} \\xrightarrow{\\text{cohesion-tension}} \\text{Leaf xylem} \\xrightarrow{\\text{osmosis}} \\text{Spongy mesophyll} \\xrightarrow{\\text{evaporation}} \\text{Sub-stomatal air space} \\xrightarrow{\\text{diffusion}} \\text{Atmosphere}$$\n\n- Water moves down a continuous gradient of water potential from highest water potential in moist soil to lowest water potential in outside ambient air.`,
        customTips: [
          "Trace the exact sequence: root hair cell $\\to$ root cortex $\\to$ xylem $\\to$ leaf mesophyll cells $\\to$ air spaces $\\to$ stomata.",
        ],
        customMistakes: [
          "Saying water moves out of the stomata by evaporation. Evaporation happens from mesophyll surfaces into air spaces; water vapour **diffuses** through stomata.",
        ],
        customRecap: [
          "Describe the pathway of water through a dicotyledonous plant from soil to air. [4]",
        ],
      },
      {
        title: "Transpiration & Stomata",
        rawChapter: 8,
        rawSubheadingIndexes: [2], // Transpiration & Cohesion-Tension
      },
      {
        title: "Factors Affecting Transpiration Rate",
        rawChapter: 8,
        rawSubheadingIndexes: [3], // Factors That Affect Rate
      },
      {
        title: "Investigating Transpiration with a Potometer",
        rawChapter: 8,
        rawSubheadingIndexes: [4], // Measuring Transpiration with a Potometer
      },
      {
        title: "Wilting & Flaccidity in Plant Cells",
        rawChapter: 8,
        customBody: `### Wilting as a Protective Response\n\n- When the rate of water loss via transpiration exceeds the rate of water uptake through the roots, leaf cells lose water by osmosis.\n- Cell vacuoles shrink and hydrostatic turgor pressure drops to zero; cells become **flaccid**.\n- Stems lose rigidity and leaves droop downwards (**wilting**).\n- Wilting causes leaves to collapse and curl, reducing the surface area exposed to sunlight and direct air currents, which slows down transpiration and prevents lethal dehydration until soil moisture is restored.`,
        customTips: [
          "Explain wilting in terms of transpiration rate exceeding water absorption rate, leading to loss of turgor in mesophyll cells.",
        ],
        customMistakes: [
          "Assuming wilting always kills the plant immediately. Temporary wilting is a reversible protective adaptation that conserves water.",
        ],
        customRecap: [
          "Explain why a plant wilts on a hot, windy day. [3]",
        ],
      },
      {
        title: "Translocation of Sucrose & Amino Acids",
        rawChapter: 8,
        rawSubheadingIndexes: [5], // Translocation
      },
    ],
  },

  // 9. Transport in Animals (1 Topic · 17 Revision Notes)
  {
    topicNumber: 9,
    section: "9. Transport in Animals",
    subtopic: "Circulatory Systems, Heart & Blood Vessels",
    notes: [
      {
        title: "Circulatory Systems: Single vs Double",
        rawChapter: 9,
        rawSubheadingIndexes: [0], // Closed System with Two Circuits
      },
      {
        title: "Structure of the Mammalian Heart",
        rawChapter: 9,
        rawSubheadingIndexes: [1], // The Heart: Structure and Cardiac Cycle
        customFigure: "![Internal Structure of the Human Heart and Blood Flow with Labels](/notes/biology/human-heart-circulatory.jpg)",
      },
      {
        title: "Cardiac Cycle & Heartbeat",
        rawChapter: 9,
        customBody: `### The Cardiac Cycle\n\n1. **Atrial Systole:** Both atria contract simultaneously, increasing atrial pressure and forcing blood through the open atrioventricular (tricuspid and bicuspid) valves into the relaxed ventricles.\n2. **Ventricular Systole:** Ventricles contract forcefully from the base upwards. Ventricular pressure rises sharply, snapping the atrioventricular valves shut (producing the first heart sound 'lub') to prevent backflow into atria. Semi-lunar valves in the aorta and pulmonary artery burst open, pumping blood into systemic and pulmonary circuits.\n3. **Diastole:** Ventricles relax. Pressure drops below arterial pressure; semi-lunar valves snap shut (producing the second heart sound 'dub'). Blood flows passively into atria from vena cava and pulmonary veins.`,
        customTips: [
          "Know valve operations: when AV valves close, SL valves open. AV valves prevent backflow to atria; SL valves prevent backflow to ventricles.",
        ],
        customMistakes: [
          "Mixing up valve names: Tricuspid is on the right side; Bicuspid (mitral) is on the left side (remember: 'Try before you Buy').",
        ],
        customRecap: [
          "Describe the events occurring during ventricular systole in the human heart. [3]",
        ],
      },
      {
        title: "Heart Rate Monitoring & Effects of Exercise",
        rawChapter: 9,
        customBody: `### Physical Activity & Heart Rate\n\n- During vigorous exercise, contracting muscle cells dramatically increase their rate of aerobic respiration to produce ATP for contraction.\n- Increased respiration elevates the concentration of dissolved carbon dioxide ($CO_2$) in blood plasma, forming carbonic acid and slightly lowering blood pH.\n- Chemoreceptors in the carotid arteries and aortic arch detect the pH decrease and signal the medulla oblongata in the brainstem.\n- The brain transmits impulses via the cardiac accelerator nerve to the sinoatrial node (pacemaker), increasing heart rate and stroke volume.\n- Increased cardiac output delivers oxygen and glucose to active muscles more rapidly while accelerating the clearance of carbon dioxide and lactic acid.`,
        customTips: [
          "Explain that exercise increases heart rate because muscles need more oxygen and glucose for respiration, and carbon dioxide must be removed.",
        ],
        customMistakes: [
          "Saying heart rate increases to 'give muscles energy'. The heart supplies oxygen and glucose so that the muscles can **respire** to release energy.",
        ],
        customRecap: [
          "Explain why heart rate remains elevated for a period of time following intense sprint exercise. [3]",
        ],
      },
      {
        title: "Coronary Heart Disease (CHD) Causes",
        rawChapter: 9,
        rawSubheadingIndexes: [5], // Coronary Heart Disease
      },
      {
        title: "Preventing & Treating CHD",
        rawChapter: 9,
        customBody: `### Management & Treatment of CHD\n\n#### Preventative Measures:\n- Regular aerobic exercise (strengthens myocardium, lowers resting blood pressure).\n- Low-saturated fat and low-salt diet (reduces LDL cholesterol atheroma deposition).\n- Cessation of smoking (eliminates nicotine vasoconstriction and carbon monoxide damage).\n\n#### Medical & Surgical Interventions:\n1. **Statins:** Prescription drugs that block hepatic HMG-CoA reductase, lowering blood LDL cholesterol synthesis.\n2. **Aspirin:** Antiplatelet drug taken at low daily doses to reduce platelet aggregation and blood clot formation.\n3. **Angioplasty and Stents:** A tiny balloon is threaded into narrowed coronary arteries and inflated to open the lumen; an expandable mesh tube (**stent**) is left in place to keep the vessel patent.\n4. **Coronary Artery Bypass Graft (CABG):** A healthy blood vessel (typically from the patient's leg or chest) is grafted to bypass blocked sections of coronary arteries.`,
        customTips: [
          "Know the difference between a stent (mesh tube holding vessel open) and a bypass graft (new blood vessel sewn around the blockage).",
        ],
        customMistakes: [
          "Stating that statins dissolve existing clots. Statins lower cholesterol synthesis; they do not dissolve clots.",
        ],
        customRecap: [
          "Describe how a stent is used to treat coronary heart disease. [2]",
          "Explain two lifestyle modifications that decrease the risk of myocardial infarction. [2]",
        ],
      },
      {
        title: "Arteries: Structure & Function",
        rawChapter: 9,
        rawSubheadingIndexes: [2], // Arteries, Veins and Capillaries
      },
      {
        title: "Veins: Structure & Function",
        rawChapter: 9,
        customBody: `### Veins: Low-Pressure Vessels\n\n- **Function:** Transport deoxygenated blood from capillary beds back towards the heart under very low hydrostatic pressure (exception: pulmonary vein carries oxygenated blood from lungs to left atrium).\n- **Structure:**\n  - Relatively thin muscular and elastic wall (because blood pressure is low and smooth).\n  - **Wide lumen:** Minimizes resistance to blood flow.\n  - **Semilunar pocket valves:** Spaced along the length of veins to ensure unidirectional blood flow towards the heart, preventing venous pooling.\n  - Surrounding skeletal muscles contract during bodily movement, compressing veins and driving blood through valves towards the heart.`,
        customTips: [
          "Highlight valves and wide lumen when explaining vein adaptations for low-pressure transport.",
        ],
        customMistakes: [
          "Forgetting that pulmonary veins carry oxygenated blood; all other veins carry deoxygenated blood.",
        ],
        customRecap: [
          "Explain how the structure of a vein is adapted to transport blood back to the heart under low pressure. [3]",
        ],
      },
      {
        title: "Capillaries: Structure & Exchange",
        rawChapter: 9,
        customBody: `### Capillaries: Exchange Vessels\n\n- **Function:** Permit the rapid exchange of metabolic substances (oxygen, glucose, carbon dioxide, urea) between blood plasma and surrounding tissue cells.\n- **Adaptations:**\n  - **Extremely thin wall:** Consists of a single layer of flattened endothelial cells (one cell thick, ~1 µm), providing an exceptionally short diffusion pathway.\n  - **Narrow lumen (~7–8 µm):** Red blood cells must travel in single file, slowing flow velocity and pressing close to the capillary wall for maximum gas exchange.\n  - **Permeable walls with intercellular clefts:** Allow fluid, ions, and small solutes to filter out into tissue fluid while retaining large plasma proteins and blood cells.\n  - **Extensive branching:** Creates a colossal aggregate surface area across tissues.`,
        customTips: [
          "Always say capillary walls are **one cell thick**; never say 'one cell thin' or that the wall is a cell membrane.",
        ],
        customMistakes: [
          "Writing that capillary walls are 'one cell wide'. The wall is **one cell thick**; the lumen is one red blood cell wide.",
        ],
        customRecap: [
          "Explain how capillary walls are adapted to facilitate diffusion. [2]",
        ],
      },
      {
        title: "Comparing Blood Vessels",
        rawChapter: 9,
        customBody: `### Comparison of Arteries, Veins, and Capillaries\n\n| Characteristic | Artery | Vein | Capillary |\n| :--- | :--- | :--- | :--- |\n| **Direction of Flow** | Away from heart | Towards heart | Links arterioles to venules |\n| **Blood Pressure** | High and pulsatile | Low and smooth | Drops from arteriole to venule end |\n| **Oxygenation** | Oxygenated (except pulmonary artery) | Deoxygenated (except pulmonary vein) | Deoxygenates as blood passes tissue |\n| **Lumen Size** | Relatively narrow | Wide | Microscopic (~one RBC diameter) |\n| **Wall Thickness** | Very thick | Thin | Microscopic (one cell layer) |\n| **Muscle & Elastic Fibre** | Abundant (thick tunica media) | Small amount | Absent (endothelium only) |\n| **Valves** | None (except at base of aorta/pulmonary artery) | Semi-lunar valves present | None |`,
        customTips: [
          "In exam questions providing three vessel cross-sections, identify artery by thick wavy wall, vein by large floppy lumen, and capillary by single cell thickness.",
        ],
        customMistakes: [
          "Claiming arteries always carry oxygenated blood. The pulmonary artery carries deoxygenated blood to the lungs.",
        ],
        customRecap: [
          "Construct a table comparing the lumen size, wall thickness, and presence of valves in arteries and veins. [3]",
        ],
      },
      {
        title: "Components of Blood",
        rawChapter: 9,
        rawSubheadingIndexes: [3], // Blood: Plasma, Cells and Platelets
      },
      {
        title: "Red Blood Cells & Haemoglobin",
        rawChapter: 9,
        customBody: `### Erythrocytes (Red Blood Cells)\n\n- **Function:** Transport oxygen from the gas exchange surfaces of the alveoli to respiring body tissues.\n- **Adaptations:**\n  - **Biconcave Disc Shape:** Curving inward on both sides creates a high surface-area-to-volume ratio, facilitating rapid inward and outward diffusion of oxygen.\n  - **Packed with Haemoglobin:** Iron-rich globular protein that reversibly binds oxygen molecules to form bright red **oxyhaemoglobin** ($Hb + 4O_2 \\rightleftharpoons Hb(O_2)_4$).\n  - **No Nucleus or Mitochondria:** Maximizes internal cytosolic volume dedicated to packing haemoglobin (~270 million molecules per cell), and prevents the cell from consuming the oxygen it transports.\n  - **Flexible Membrane:** Enables deformation to squeeze through narrow capillary beds without rupturing.`,
        customTips: [
          "Link biconcave shape to high surface area to volume ratio, and absence of nucleus to carrying more haemoglobin.",
        ],
        customMistakes: [
          "Saying red blood cells carry carbon dioxide primarily. Most CO2 is carried dissolved in plasma as hydrogencarbonate ions ($HCO_3^-$).",
        ],
        customRecap: [
          "State two structural adaptations of red blood cells and explain how each aids oxygen transport. [4]",
        ],
      },
      {
        title: "White Blood Cells: Phagocytes & Lymphocytes",
        rawChapter: 9,
        customBody: `### Leukocytes (White Blood Cells)\n\n| Feature | Phagocytes | Lymphocytes |\n| :--- | :--- | :--- |\n| **Relative Abundance** | ~70% of white blood cells | ~25% of white blood cells |\n| **Nuclear Morphology** | Multi-lobed nucleus (allows flexible deformation) | Large, spherical, non-lobed nucleus occupying most of cell |\n| **Primary Function** | **Phagocytosis:** Ingesting and intracellularly digesting cellular debris and invading pathogens | **Humoral Immunity:** Recognizing specific foreign antigens and synthesizing targeted **antibodies** |\n| **Mechanism** | Extends pseudopodia around pathogen, encloses in phagosome, fuses with lysosome containing digestive enzymes | Secretes Y-shaped antibody proteins; forms antigen-antibody complexes; differentiates into long-lived **memory cells** |`,
        customTips: [
          "Distinguish them visually in micrographs: lobed nucleus = phagocyte; large round nucleus filling cell = lymphocyte.",
        ],
        customMistakes: [
          "Confusing the roles: Phagocytes **engulf** pathogens; lymphocytes **produce antibodies**.",
        ],
        customRecap: [
          "Describe how a phagocyte destroys an invading bacterium. [3]",
          "Explain the role of lymphocytes in the secondary immune response. [3]",
        ],
      },
      {
        title: "Blood Clotting & Platelets",
        rawChapter: 9,
        customBody: `### Haemostasis and Clotting Cascade\n\n1. Damage to vascular endothelium exposes underlying collagen fibres. Fragmentary cell fragments called **platelets** adhere to collagen and activate, releasing clotting factor enzymes and thromboplastin.\n2. In the presence of calcium ions ($Ca^{2+}$), inactive plasma proenzyme prothrombin is converted into active enzyme **thrombin**.\n3. Thrombin catalyses the conversion of soluble plasma protein **fibrinogen** into insoluble protein threads of **fibrin**.\n4. Fibrin threads polymerise into a sticky mesh across the wound site, trapping red blood cells and platelets to form a mechanical clot.\n5. The clot dries into a scab, achieving two critical functions:\n   - Prevents fatal loss of blood (haemorrhage).\n   - Seals the wound to prevent entry of opportunistic pathogens.`,
        customTips: [
          "Memorize the key step: conversion of **soluble fibrinogen** into **insoluble fibrin** by thrombin.",
        ],
        customMistakes: [
          "Saying fibrin is converted into fibrinogen. It is the inactive soluble fibrinogen that is converted into the insoluble fibrous mesh fibrin.",
        ],
        customRecap: [
          "Outline the chemical steps involved in the formation of a blood clot. [3]",
          "State two reasons why blood clotting is essential following tissue injury. [2]",
        ],
      },
      {
        title: "Tissue Fluid & Lymphatic System",
        rawChapter: 9,
        rawSubheadingIndexes: [4], // Tissue Fluid and Lymphatic System
      },
      {
        title: "Blood Groups & Transfusions",
        rawChapter: 9,
        customBody: `### ABO Blood System\n\nRed blood cell membranes display specific glycoprotein markers called **antigens** (A and B), while blood plasma contains naturally occurring **antibodies** (anti-A and anti-B).\n\n| Blood Group | Antigens on Red Blood Cells | Antibodies Present in Plasma | Can Receive Blood From |\n| :--- | :--- | :--- | :--- |\n| **A** | A antigen | Anti-B | A, O |\n| **B** | B antigen | Anti-A | B, O |\n| **AB** | Both A and B antigens | Neither anti-A nor anti-B | A, B, AB, O (**Universal Recipient**) |\n| **O** | Neither A nor B antigen | Both Anti-A and Anti-B | O only (**Universal Donor**) |\n\n- If incompatible blood is transfused, recipient plasma antibodies bind donor red blood cell antigens, causing lethal **agglutination** (clumping) and haemolysis.`,
        customTips: [
          "Group O is the universal donor because its red blood cells lack A and B antigens. Group AB is universal recipient because it has no antibodies in plasma.",
        ],
        customMistakes: [
          "Confusing antigen and antibody locations: Antigens are on the **cell surface membrane**; antibodies are in the **plasma**.",
        ],
        customRecap: [
          "Explain why a person with blood group O can donate blood to any ABO recipient. [2]",
        ],
      },
      {
        title: "Cardiovascular Health: Summary & Calculations",
        rawChapter: 9,
        customBody: `### Cardiovascular Calculations & Key Points\n\n#### Cardiac Output Formula:\n$$\\text{Cardiac Output } (cm^3/min) = \\text{Heart Rate } (beats/min) \\times \\text{Stroke Volume } (cm^3/beat)$$\n\n- Example: A student has a resting heart rate of 72 bpm and a stroke volume of $70\\text{ cm}^3$. Cardiac output = $72 \\times 70 = 5040\\text{ cm}^3/\\text{min}$ ($~5\\text{ L/min}$).\n- During exercise, elite athletes achieve cardiac outputs exceeding $30\\text{ L/min}$ primarily through dramatic increases in stroke volume developed via ventricular hypertrophic conditioning.`,
        customTips: [
          "Check units: Heart rate is in beats per minute, stroke volume in $cm^3$ or $mL$, and cardiac output in $cm^3/min$ or $dm^3/min$.",
        ],
        customMistakes: [
          "Forgetting to multiply: Cardiac output = heart rate $\\times$ stroke volume.",
        ],
        customRecap: [
          "Calculate cardiac output when heart rate is 80 bpm and stroke volume is 75 ml. [2]",
        ],
      },
    ],
  },

  // 10. Diseases & Immunity (1 Topic · 8 Revision Notes)
  {
    topicNumber: 10,
    section: "10. Diseases & Immunity",
    subtopic: "Diseases & Immunity",
    notes: [
      {
        title: "Pathogens & Transmission",
        rawChapter: 10,
        rawSubheadingIndexes: [0, 1, 2], // What Causes Disease + Bacterial/Viral + Fungal/Protozoan
      },
      {
        title: "Body Defences Against Pathogens",
        rawChapter: 10,
        rawSubheadingIndexes: [3], // Human Defences
      },
      {
        title: "The Immune System & Antibodies",
        rawChapter: 10,
        customBody: `### Antigens and Antibody Specificity\n\n- An **antigen** is a distinctive molecular marker (typically a surface protein or glycoprotein) present on cell membranes that can trigger a specific immune response.\n- An **antibody** is a Y-shaped glycoprotein synthesized and secreted by plasma lymphocytes in response to a specific antigen.\n- Antibodies possess variable antigen-binding sites with a complementary shape to the antigen, binding with high specificity.\n- Action of antibodies:\n  1. **Agglutination:** Clumping pathogens together to facilitate mass engulfment by phagocytes.\n  2. **Neutralisation:** Blocking viral docking proteins or neutralising bacterial toxins.\n  3. **Lysis:** Triggering complement cascades that puncture microbial cell walls.`,
        customTips: [
          "Antigens trigger the immune response; antibodies bind to antigens. Always describe the binding as **complementary shape**.",
        ],
        customMistakes: [
          "Saying antibodies 'eat' pathogens. Antibodies bind and clump pathogens; **phagocytes** engulf and digest them.",
        ],
        customRecap: [
          "Distinguish between an antigen and an antibody. [2]",
          "Describe two ways antibodies help destroy bacterial pathogens. [2]",
        ],
      },
      {
        title: "Active vs Passive Immunity",
        rawChapter: 10,
        customBody: `### Active vs Passive Immunity\n\n| Feature | Active Immunity | Passive Immunity |\n| :--- | :--- | :--- |\n| **Antibody Production** | Produced by individual's own lymphocytes | Introduced from an external donor source |\n| **Memory Cells Formed?** | Yes | No |\n| **Protection Delay** | Slow (takes 1–2 weeks for clonal expansion) | Immediate |\n| **Duration of Protection** | Long-term (often lifelong due to memory cells) | Short-term (antibodies degraded after weeks) |\n| **Natural Example** | Recovering from natural measles infection | Maternal antibodies crossing placenta or in breast milk (colostrum) |\n| **Artificial Example** | Vaccination with weakened/attenuated pathogen | Injection of antivenom serum following snake bite |`,
        customTips: [
          "Active = body makes own antibodies, produces memory cells, long term. Passive = given ready-made antibodies, no memory cells, short term.",
        ],
        customMistakes: [
          "Thinking vaccines grant passive immunity. Vaccines give **artificial active immunity** because the host's own lymphocytes make the antibodies and memory cells.",
        ],
        customRecap: [
          "Compare active and passive immunity in terms of duration of protection and memory cell production. [4]",
        ],
      },
      {
        title: "Vaccination & Herd Immunity",
        rawChapter: 10,
        rawSubheadingIndexes: [4], // Vaccination and Immunity
      },
      {
        title: "Antibiotics & Antibiotic Resistance",
        rawChapter: 10,
        customBody: `### Antibiotic Action and Resistance\n\n- **Antibiotics** are chemical antimicrobial substances (e.g. penicillin) produced by microorganisms that kill or inhibit the growth of bacteria without harming host animal cells.\n- **Mechanism:** Interfere with bacterial cell wall synthesis (preventing cross-linking of peptidoglycan so bacteria burst by osmotic lysis) or inhibit 70S bacterial ribosomes.\n- **Evolution of Resistance (e.g. MRSA):**\n  1. In a large bacterial population, random **mutation** produces an allele conferring resistance to an antibiotic.\n  2. When the antibiotic is applied, susceptible bacteria are killed; the resistant mutant survives (**natural selection**).\n  3. The resistant bacterium reproduces rapidly by binary fission, passing the resistance allele to offspring.\n  4. Repeated over-prescription and incomplete courses result in the dominant spread of resistant strains.\n\n#### Why Antibiotics Do Not Kill Viruses:\n- Viruses are non-cellular particles lacking cell walls, ribosomes, and independent metabolic pathways. They replicate inside host human cells using host machinery; an agent disrupting viral replication would be toxic to host cells.`,
        customTips: [
          "Never say 'bacteria become immune' to antibiotics. Bacteria become **resistant** through natural selection. Humans become **immune** to pathogens.",
        ],
        customMistakes: [
          "Claiming antibiotics kill viruses. Antibiotics target bacterial peptidoglycan walls and prokaryotic metabolism; they have zero effect on viruses.",
        ],
        customRecap: [
          "Explain why antibiotics are ineffective against viral infections such as influenza. [2]",
          "Outline how misuse of antibiotics leads to antibiotic-resistant bacterial strains. [4]",
        ],
      },
      {
        title: "Controlling Disease Spread & Hygiene",
        rawChapter: 10,
        rawSubheadingIndexes: [5], // Lifestyle, Disease and Global Impact
      },
      {
        title: "Autoimmune Diseases & HIV/AIDS",
        rawChapter: 10,
        customBody: `### HIV and the Immune System\n\n- **Human Immunodeficiency Virus (HIV)** is a retrovirus transmitted via unprotected sexual intercourse, sharing contaminated hypodermic needles, blood transfusions, and from mother to child via placenta or breast milk.\n- **Pathogenesis:** HIV specifically infects and destroys **T-helper lymphocytes** (CD4+ cells), which are essential for coordinating both phagocytosis and antibody production.\n- Over time, lymphocyte counts plummet, collapsing the immune response. The patient develops **Acquired Immune Deficiency Syndrome (AIDS)**, becoming vulnerable to opportunistic infections (tuberculosis, fungal pneumonia, Kaposi's sarcoma) that healthy immune systems easily control.\n- **Control:** Barrier contraception (condoms), needle exchange programs, antiretroviral therapy (ART) preventing viral replication.`,
        customTips: [
          "State clearly: HIV is the **virus**; AIDS is the **syndrome / condition** that develops when T-lymphocytes are depleted.",
        ],
        customMistakes: [
          "Saying people die directly from HIV. People die from secondary opportunistic infections because HIV has destroyed their immune defences.",
        ],
        customRecap: [
          "Explain how HIV impairs the human immune response. [3]",
          "State two methods for reducing the transmission of HIV. [2]",
        ],
      },
    ],
  },

  // 11. Gas Exchange in Humans (1 Topic · 11 Revision Notes)
  {
    topicNumber: 11,
    section: "11. Gas Exchange in Humans",
    subtopic: "Gas Exchange in Humans",
    notes: [
      {
        title: "Respiratory System Anatomy",
        rawChapter: 11,
        rawSubheadingIndexes: [0], // Structures of Breathing System
        customFigure: "![Human Respiratory System and Alveolar Gas Exchange with Labels](/notes/biology/human-respiratory-alveoli.jpg)",
      },
      {
        title: "Cartilage in Trachea & Bronchi",
        rawChapter: 11,
        customBody: `### Structural Role of Cartilage\n\n- The **trachea** and **bronchi** are supported by C-shaped rings of tough, flexible connective tissue called **cartilage**.\n- **Function:** Cartilage provides structural support, preventing the airway from collapsing inwards when thoracic pressure drops below atmospheric pressure during forceful inhalation.\n- The rings are C-shaped (open at the posterior side bordering the oesophagus) to allow the oesophagus to expand freely when boluses of food are swallowed.`,
        customTips: [
          "State that cartilage prevents the trachea from collapsing when air pressure inside drops during inspiration.",
        ],
        customMistakes: [
          "Thinking cartilage helps pump air. Cartilage is purely structural; muscles (intercostals and diaphragm) drive air movement.",
        ],
        customRecap: [
          "Explain the importance of cartilage rings in the mammalian trachea. [2]",
        ],
      },
      {
        title: "Cilia & Goblet Cells",
        rawChapter: 11,
        customBody: `### Cleaning the Airways\n\n- The internal epithelium lining the trachea, bronchi, and terminal bronchioles consists of **goblet cells** interspersed among **ciliated epithelial cells**.\n- **Goblet Cells:** Synthesize and secrete sticky, viscous **mucus** onto the airway surface, trapping airborne dust particles, pollen, and inhaled bacteria.\n- **Cilia:** Microscopic hair-like projections that beat in a synchronized, rhythmic wave-like pattern, sweeping the mucus carpet upwards toward the pharynx and larynx, where it is swallowed and bacteria are killed by hydrochloric acid in the stomach.`,
        customTips: [
          "Goblet cells **produce mucus**; cilia **beat to sweep mucus upwards away from lungs**.",
        ],
        customMistakes: [
          "Confusing microvilli with cilia. Microvilli increase surface area for absorption in the gut; cilia beat to move fluids/mucus.",
        ],
        customRecap: [
          "Describe how goblet cells and cilia protect the gas exchange system from pathogens. [3]",
        ],
      },
      {
        title: "Mechanism of Ventilation: Inhalation",
        rawChapter: 11,
        rawSubheadingIndexes: [1], // Ventilation
      },
      {
        title: "Mechanism of Ventilation: Exhalation",
        rawChapter: 11,
        customBody: `### Mechanism of Expiration (Breathing Out)\n\n1. **External intercostal muscles relax**, and in forced breathing, **internal intercostal muscles contract**.\n2. Ribs move downwards and inwards due to gravity and muscle action.\n3. The **diaphragm relaxes**, curving and doming upwards into the thoracic cavity.\n4. **Thoracic volume decreases** substantially.\n5. Air pressure inside the lungs increases above outside atmospheric pressure.\n6. Air is driven out through the airways down the pressure gradient until intra-pulmonary pressure equals atmospheric pressure.`,
        customTips: [
          "Always pair volume and pressure: volume increases $\\implies$ pressure decreases (inhalation); volume decreases $\\implies$ pressure increases (exhalation).",
        ],
        customMistakes: [
          "Saying air is pushed into lungs by external muscles. Air is drawn into lungs because thoracic expansion creates a **negative pressure** relative to atmosphere.",
        ],
        customRecap: [
          "Describe the role of the diaphragm and intercostal muscles in exhalation at rest. [3]",
        ],
      },
      {
        title: "Composition of Inspired vs Expired Air",
        rawChapter: 11,
        rawSubheadingIndexes: [3], // Inspired and Expired Air
      },
      {
        title: "Testing for Carbon Dioxide with Limewater",
        rawChapter: 11,
        customBody: `### Chemical Test for Carbon Dioxide in Breath\n\n- **Reagent:** Clear, colourless calcium hydroxide solution ($Ca(OH)_2$), commonly known as **limewater**.\n- When expired air is bubbled through limewater, dissolved carbon dioxide reacts to form an insoluble white precipitate of **calcium carbonate**:\n$$Ca(OH)_{2(aq)} + CO_{2(g)} \\to CaCO_{3(s)} + H_2O_{(l)}$$\n- The clear solution turns **cloudy/milky**.\n- An experimental setup uses two test tubes with valves: inhaling through one draws atmospheric air through limewater (remains clear); exhaling through the other bubbles expired air through limewater (turns milky rapidly), demonstrating that expired air contains significantly higher $CO_2$ concentration.`,
        customTips: [
          "Result with CO2: limewater turns **cloudy** or **milky**.",
        ],
        customMistakes: [
          "Saying limewater turns white. State that it turns **cloudy** or **milky** due to precipitate formation.",
        ],
        customRecap: [
          "Describe an experiment to demonstrate that exhaled air contains more carbon dioxide than inhaled air. [3]",
        ],
      },
      {
        title: "Gas Exchange at the Alveolus",
        rawChapter: 11,
        rawSubheadingIndexes: [2], // The Alveolus and Gas Exchange
      },
      {
        title: "Adaptations of Alveoli for Gas Exchange",
        rawChapter: 11,
        customBody: `### Key Features of Alveolar Gas Exchange\n\n1. **Colossal Surface Area:** Hundreds of millions of spherical alveoli create an aggregate surface area exceeding $70\\text{ m}^2$ in an adult.\n2. **Extremely Thin Diffusion Barrier:** Alveolar wall consists of a single layer of squamous epithelial cells (~0.1 µm), pressed against an equally thin capillary endothelial wall (total diffusion distance < 1 µm).\n3. **Moist Surface:** Inner lining coated with thin watery film allowing oxygen to dissolve before diffusing across cells.\n4. **Dense Capillary Network:** Constant flow of deoxygenated blood maintains steep partial pressure gradients for $O_2$ (diffusing in) and $CO_2$ (diffusing out).\n5. **Continuous Ventilation:** Inhalation and exhalation replenish fresh air, keeping alveolar $O_2$ high and $CO_2$ low.`,
        customTips: [
          "Quote Fick's Law principles: Large surface area, thin wall (short diffusion distance), steep concentration gradient maintained by blood flow and ventilation.",
        ],
        customMistakes: [
          "Saying alveoli have 'thin cell walls'. Animal cells do NOT have cell walls; alveoli have **thin walls that are one cell thick**.",
        ],
        customRecap: [
          "Explain how the structure of an alveolus maximizes the rate of gas diffusion. [4]",
        ],
      },
      {
        title: "Effects of Exercise on Breathing",
        rawChapter: 11,
        customBody: `### Control of Ventilation During Exercise\n\n- Exercise elevates cellular respiration in muscles, producing elevated quantities of carbon dioxide.\n- Carbon dioxide dissolves in blood plasma, producing carbonic acid and increasing blood hydrogen ion concentration ($H^+$), which **lowers blood pH**.\n- Chemoreceptors in the brain (medulla) and carotid/aortic bodies detect the decreased pH and send nerve impulses to the breathing centre.\n- Frequency and strength of motor nerve impulses to intercostal muscles and diaphragm increase, accelerating both **breathing rate** (breaths per minute) and **tidal volume** (depth of breath).\n- This increases alveolar gas exchange rate to meet oxygen demand and exhaust excess $CO_2$.`,
        customTips: [
          "It is the **increase in carbon dioxide / decrease in blood pH** that triggers faster breathing, NOT lack of oxygen.",
        ],
        customMistakes: [
          "Claiming the brain detects low oxygen to speed up breathing. The primary physiological stimulus is **high carbon dioxide concentration / lowered blood pH**.",
        ],
        customRecap: [
          "Explain what stimulates the increase in breathing rate during vigorous exercise. [3]",
        ],
      },
      {
        title: "Smoking, Tar & Respiratory Diseases",
        rawChapter: 11,
        rawSubheadingIndexes: [4], // Smoking and Air Sacs
      },
    ],
  },

  // 12. Respiration (1 Topic · 3 Revision Notes)
  {
    topicNumber: 12,
    section: "12. Respiration",
    subtopic: "Respiration",
    notes: [
      {
        title: "Respiration vs Breathing & ATP Concept",
        rawChapter: 12,
        rawSubheadingIndexes: [0], // Respiration Compared with Breathing
      },
      {
        title: "Aerobic Respiration",
        rawChapter: 12,
        rawSubheadingIndexes: [1], // Aerobic Respiration
      },
      {
        title: "Anaerobic Respiration: Muscles vs Yeast & Oxygen Debt",
        rawChapter: 12,
        rawSubheadingIndexes: [2, 3, 4], // Anaerobic + Comparing + Response to Exercise
      },
    ],
  },

  // 13. Excretion in Humans (1 Topic · 3 Revision Notes)
  {
    topicNumber: 13,
    section: "13. Excretion in Humans",
    subtopic: "Excretion in Humans",
    notes: [
      {
        title: "Excretory Organs & Urea Formation",
        rawChapter: 13,
        rawSubheadingIndexes: [0, 4], // What Kidneys Do + Skin, Lungs and Liver
      },
      {
        title: "Kidney Structure & Nephron Ultrafiltration",
        rawChapter: 13,
        rawSubheadingIndexes: [1], // The Nephron and Ultrafiltration
        customFigure: "![Human Urinary System and Longitudinal Kidney Structure with Labels](/notes/biology/human-kidney-nephron.jpg)",
      },
      {
        title: "Selective Reabsorption & Dialysis vs Transplant",
        rawChapter: 13,
        rawSubheadingIndexes: [2, 3, 5], // Selective Reabsorption + Urine, ADH + Kidney Failure
      },
    ],
  },

  // 14. Coordination & Response (1 Topic · 11 Revision Notes)
  {
    topicNumber: 14,
    section: "14. Coordination & Response",
    subtopic: "Coordination, Response & Homeostasis",
    notes: [
      {
        title: "Nervous vs Hormonal Control",
        rawChapter: 14,
        rawSubheadingIndexes: [0], // Nervous System & Neurone
      },
      {
        title: "Structure of Neurons: Sensory, Relay & Motor",
        rawChapter: 14,
        customBody: `### The Three Types of Neurones\n\n1. **Sensory Neurone:**\n   - Transmits electrical impulses from sensory receptors (e.g. retinal photoreceptors, skin thermoreceptors) to the central nervous system (CNS).\n   - Structure: Long dendron conducting towards cell body (located outside CNS in dorsal root ganglion), short axon entering spinal cord.\n2. **Relay Neurone (Interneurone):**\n   - Situated entirely within the grey matter of the spinal cord and brain.\n   - Structure: Highly branched dendrites and multiple short axons connecting sensory to motor neurones.\n3. **Motor Neurone:**\n   - Conducts nerve impulses from the CNS to effector organs (muscles and endocrine/exocrine glands).\n   - Structure: Cell body located inside CNS; long myelinated axon conducting impulses to neuromuscular junctions.\n\n- **Myelin Sheath:** Fatty insulating layer formed by Schwann cells that dramatically speeds up electrical impulse transmission via saltatory conduction.`,
        customTips: [
          "Identify neurones: sensory has cell body off to the side in dorsal root; motor has cell body at one end with dendrites; relay has cell body in centre with short branches.",
        ],
        customMistakes: [
          "Calling nerve impulses 'electricity'. Impulses are electrochemical depolarisations caused by ion movement ($Na^+/K^+$) across cell membranes.",
        ],
        customRecap: [
          "Draw and label the structural features of a motor neurone. [3]",
          "State the function of the myelin sheath in neurone transmission. [1]",
        ],
      },
      {
        title: "Reflex Arc & Reflex Actions",
        rawChapter: 14,
        rawSubheadingIndexes: [1], // Synapse and Reflex Arc
      },
      {
        title: "Synapses & Neurotransmitter Transmission",
        rawChapter: 14,
        customBody: `### Synaptic Transmission Mechanism\n\n- A **synapse** is a microscopic junction between two neurones (typically ~20 nm gap called the synaptic cleft).\n\n#### Sequence of Transmission:\n1. An electrical action potential arrives at the pre-synaptic terminal bulb.\n2. Voltage-gated calcium channels open, causing vesicles containing **neurotransmitter** chemical (e.g. acetylcholine) to fuse with the pre-synaptic membrane.\n3. Neurotransmitter is released into the synaptic cleft by **exocytosis**.\n4. Neurotransmitter molecules **diffuse** across the synaptic cleft down their concentration gradient.\n5. Neurotransmitter binds to complementary **receptor proteins** on the post-synaptic cell membrane.\n6. This triggers ion channels to open, generating a new electrical impulse in the post-synaptic neurone.\n7. An enzyme (e.g. acetylcholinesterase) rapidly breaks down the neurotransmitter to prevent continuous, uncontrolled stimulation.\n\n- **Unidirectionality:** Synapses ensure nerve impulses travel in ONE direction only, because vesicles are located only in the pre-synaptic bulb and receptors are present only on the post-synaptic membrane.`,
        customTips: [
          "Explain why impulses can only travel across a synapse in one direction: neurotransmitter vesicles are only in pre-synaptic bulb, receptors only on post-synaptic membrane.",
        ],
        customMistakes: [
          "Saying electrical impulses jump across the gap. The electrical impulse stops; chemicals (neurotransmitters) **diffuse** across the gap.",
        ],
        customRecap: [
          "Explain how an impulse is transmitted across a synapse. [4]",
          "State two reasons why synapses are essential in the nervous system. [2]",
        ],
      },
      {
        title: "Structure of the Human Eye",
        rawChapter: 14,
        rawSubheadingIndexes: [3], // The Eye and Vision
      },
      {
        title: "Pupil Reflex: Dim vs Bright Light",
        rawChapter: 14,
        customBody: `### The Pupil Reflex (Antagonistic Iris Muscles)\n\n- The **pupil reflex** is an involuntary, cranial reflex action that protects retinal photoreceptors from damage in intense light while optimizing photon capture in dim light.\n\n| Feature | Bright Light Response | Dim Light Response |\n| :--- | :--- | :--- |\n| **Pupil Diameter** | **Constricted** (narrowed) | **Dilated** (widened) |\n| **Circular Iris Muscles** | **Contract** | **Relax** |\n| **Radial Iris Muscles** | **Relax** | **Contract** |\n| **Light Entering** | Reduced (protects photoreceptors) | Maximized (improves vision) |\n\n- Note: The circular and radial muscles are **antagonistic pairs**; when one muscle layer contracts, the other relaxes.`,
        customTips: [
          "Remember: Circular Contricts (both start with C). In bright light, Circular Contracts $\\implies$ Pupil Constricts.",
        ],
        customMistakes: [
          "Saying radial and circular muscles contract together. They are antagonistic: when circular contracts, radial relaxes, and vice versa.",
        ],
        customRecap: [
          "Describe how the iris adjusts when a person moves from bright sunshine into a dark room. [3]",
        ],
      },
      {
        title: "Accommodation of the Eye: Near vs Distant",
        rawChapter: 14,
        customBody: `### Visual Accommodation\n\n- **Accommodation** is the adjustment in the curvature and refractive power of the lens to bring light rays from objects at varying distances to a sharp focus on the fovea of the retina.\n\n| Feature | Viewing a Distant Object (>6 m) | Viewing a Near Object (<6 m) |\n| :--- | :--- | :--- |\n| **Light Rays Divergence** | Nearly parallel | Strongly diverging |\n| **Ciliary Muscles** | **Relax** | **Contract** |\n| **Suspensory Ligaments** | Pulled **tight / taut** | Become **slack / loose** |\n| **Lens Shape** | Pulled **thin and flat** | Relaxes into **fat, convex, rounded** shape |\n| **Refractive Power** | Weak refraction (less bending needed) | Strong refraction (bends diverging rays sharply) |`,
        customTips: [
          "Near object: Ciliary muscles Contract, suspensory ligaments Slacken, lens becomes Spherical (all start with C/S sounds).",
        ],
        customMistakes: [
          "Writing that suspensory ligaments contract. Ligaments are non-muscular collagen bands; they can only be pulled tight or become slack.",
        ],
        customRecap: [
          "Describe how the eye adjusts to focus on an approaching book. [4]",
        ],
      },
      {
        title: "Hormones: Adrenaline & Endocrine System",
        rawChapter: 14,
        rawSubheadingIndexes: [2], // Endocrine System and Adrenaline
      },
      {
        title: "Homeostasis: Negative Feedback Principle",
        rawChapter: 14,
        rawSubheadingIndexes: [4], // Homeostasis
      },
      {
        title: "Thermoregulation: Skin Mechanisms",
        rawChapter: 14,
        customBody: `### Thermoregulation by the Skin\n\n- The hypothalamus acts as the body's internal thermostat, continuously monitoring blood temperature and sensory input from skin thermoreceptors.\n\n#### Responses to Cold Conditions:\n1. **Vasoconstriction:** Arterioles supplying skin surface capillary beds constrict, shunting blood through deep shunt vessels. Less warm blood reaches skin surface, minimizing conductive and radiative heat loss.\n2. **Shivering:** Rapid involuntary contractions of skeletal muscles release metabolic heat via aerobic respiration.\n3. **Erector Muscles Contract:** Hairs stand erect, trapping an insulating layer of still air against the skin (effective in furred animals).\n\n#### Responses to Hot Conditions:\n1. **Vasodilation:** Arterioles supplying surface capillaries dilate, increasing blood flow to skin surface so heat radiates away.\n2. **Sweating:** Sweat glands secrete watery sweat onto skin surface. The high latent heat of vaporisation of water extracts heat from blood capillaries as sweat evaporates, cooling the body.`,
        customTips: [
          "Arterioles dilate or constrict, NOT capillaries. Capillaries do not have muscular walls and cannot dilate or constrict.",
        ],
        customMistakes: [
          "Saying 'capillaries open and close' or 'capillaries move closer to the skin'. Arterioles constrict or dilate; capillaries remain in place.",
        ],
        customRecap: [
          "Explain how vasodilation and sweating cool the human body during physical exertion. [4]",
        ],
      },
      {
        title: "Tropic Responses in Plants (Auxins)",
        rawChapter: 14,
        rawSubheadingIndexes: [5], // Taxis and Tropisms
      },
    ],
  },

  // 15. Drugs (1 Topic · 1 Revision Note)
  {
    topicNumber: 15,
    section: "15. Drugs",
    subtopic: "Drugs in Medicine",
    notes: [
      {
        title: "Medicinal Drugs, Antibiotics, Alcohol & Heroin Misuse",
        rawChapter: 15,
        rawSubheadingIndexes: [0, 1, 2, 3, 4, 5], // All subheadings from chapter 15
      },
    ],
  },

  // 16. Reproduction (1 Topic · 6 Revision Notes)
  {
    topicNumber: 16,
    section: "16. Reproduction",
    subtopic: "Reproduction in Plants & Humans",
    notes: [
      {
        title: "Asexual vs Sexual Reproduction",
        rawChapter: 16,
        rawSubheadingIndexes: [0], // Sexual and Asexual
      },
      {
        title: "Flower Structure, Pollination & Fertilisation",
        rawChapter: 16,
        customBody: `### Plant Reproduction in Flowering Plants\n\n- **Insect-Pollinated Flowers:** Large, brightly coloured petals, sweet nectar, scented, sticky pollen grains, stamens and sticky stigma positioned inside flower so insects brush against them.\n- **Wind-Pollinated Flowers:** Small, dull green petals, no scent or nectar, large quantities of light, smooth pollen, long feathery stigmas and dangling versatile anthers hanging outside flower to catch breezes.\n- **Pollination:** The transfer of pollen grains from an anther to a stigma.\n- **Fertilisation:** Pollen grain germinates on stigma, growing a **pollen tube** down style through the micropyle into the ovary. Male gamete nucleus fuses with female ovule nucleus to form a **diploid zygote**, which develops into a seed while ovary becomes fruit.`,
        customTips: [
          "Distinguish pollination (pollen transfer to stigma) from fertilisation (fusion of gamete nuclei inside ovule).",
        ],
        customMistakes: [
          "Confusing pollination with fertilisation. Pollination must occur before fertilisation can take place.",
        ],
        customRecap: [
          "Compare the structural features of insect-pollinated and wind-pollinated flowers. [4]",
          "Describe the events occurring between pollination and seed formation. [4]",
        ],
      },
      {
        title: "Seed Germination Requirements",
        rawChapter: 16,
        customBody: `### Factors Required for Seed Germination\n\nSeeds require three essential environmental factors to germinate (**WOW**):\n\n1. **Water ($H_2O$):** Absorbed through micropyle to activate hydrolytic enzymes (amylase, protease) and mobilize stored food reserves (starch into maltose/glucose).\n2. **Oxygen ($O_2$):** Required for aerobic respiration to release ATP for cellular growth and embryonic root/shoot elongation.\n3. **Warmth / Suitable Temperature:** Provides kinetic energy for enzyme activity. Too cold slows enzymes; boiling denatures them.\n\n- Light is NOT required for the initial germination of most seeds because the seed relies on food stores in cotyledons.`,
        customTips: [
          "Remember the acronym WOW: Water, Oxygen, Warmth. Light is not required for germination.",
        ],
        customMistakes: [
          "Listing light or soil as required for germination. Seeds germinate in the dark and without soil as long as water, oxygen, and warmth are present.",
        ],
        customRecap: [
          "State three environmental conditions required for seed germination and explain the importance of each. [6]",
        ],
      },
      {
        title: "Male & Female Reproductive Anatomy",
        rawChapter: 16,
        rawSubheadingIndexes: [1], // Reproductive Systems and Gametes
      },
      {
        title: "The Menstrual Cycle & Hormones",
        rawChapter: 16,
        rawSubheadingIndexes: [3], // The Menstrual Cycle
      },
      {
        title: "Fertilisation, Pregnancy & Placenta",
        rawChapter: 16,
        rawSubheadingIndexes: [2, 4, 5], // Fertilisation + Pregnancy + Contraception/STIs
      },
    ],
  },

  // 17. Inheritance (1 Topic · 9 Revision Notes)
  {
    topicNumber: 17,
    section: "17. Inheritance",
    subtopic: "Inheritance, Genes & Cell Division",
    notes: [
      {
        title: "Chromosomes, Genes, DNA & Genetic Code",
        rawChapter: 17,
        rawSubheadingIndexes: [0], // Chromosomes, Genes and Alleles
      },
      {
        title: "Haploid vs Diploid Nuclei",
        rawChapter: 17,
        customBody: `### Haploid vs Diploid States\n\n- **Diploid Nucleus ($2n$):** Contains two complete sets of homologous chromosomes, one set inherited from each parent. In humans, all somatic (body) cells are diploid with **46 chromosomes** (23 pairs).\n- **Haploid Nucleus ($n$):** Contains a single set of unpaired chromosomes. In humans, gametes (sperm and egg cells) are haploid with **23 chromosomes**.\n- When a haploid sperm ($n=23$) fertilises a haploid egg ($n=23$), they fuse to restore the diploid chromosome number ($2n=46$) in the resulting zygote.`,
        customTips: [
          "State clearly: Body cells are diploid (2n = 46); gametes are haploid (n = 23).",
        ],
        customMistakes: [
          "Saying humans have 23 chromosomes. Humans have 23 **pairs** (46 total) in body cells, and 23 single chromosomes in gametes.",
        ],
        customRecap: [
          "Distinguish between a haploid nucleus and a diploid nucleus, citing human examples of each. [3]",
        ],
      },
      {
        title: "Mitosis: Nuclear Division for Growth & Repair",
        rawChapter: 17,
        customBody: `### Mitosis\n\n- **Definition:** Nuclear division giving rise to **genetically identical diploid daughter cells**.\n- **Roles:**\n  1. **Growth:** Increasing cell numbers in multicellular organisms from a single-celled zygote.\n  2. **Repair:** Replacing damaged or dead cells (e.g. skin cells, gut lining).\n  3. **Asexual Reproduction:** Producing genetically identical offspring (clones) in bacteria, yeast, and vegetative plant propagation.\n- Prior to mitosis, exact replication of chromosomes takes place so that each daughter cell receives an identical copy of the genetic material.`,
        customTips: [
          "Keywords for mitosis: **genetically identical**, **diploid**, **growth, repair, asexual reproduction**.",
        ],
        customMistakes: [
          "Confusing mitosis with meiosis: Mitosis makes 2 identical diploid cells; meiosis makes 4 diverse haploid gametes.",
        ],
        customRecap: [
          "State three biological roles of mitosis. [3]",
        ],
      },
      {
        title: "Meiosis: Reduction Division Producing Gametes",
        rawChapter: 17,
        customBody: `### Meiosis\n\n- **Definition:** Reduction division in which the chromosome number is halved from diploid ($2n$) to haploid ($n$), resulting in **genetically diverse gametes**.\n- Takes place exclusively in reproductive organs (testes and ovaries in animals; anthers and ovules in flowering plants).\n- **Source of Genetic Variation:**\n  1. Crossing over (exchange of genetic material between non-sister homologous chromatids).\n  2. Independent assortment of maternal and paternal chromosomes during meiosis I.\n- Fertilisation restores the diploid state randomly, creating unique genetic combinations in every generation.`,
        customTips: [
          "Keywords for meiosis: **reduction division**, **halves chromosome number**, **genetically different**, **produces gametes**.",
        ],
        customMistakes: [
          "Saying meiosis happens in all cells. Meiosis occurs ONLY in gonads (testes and ovaries) to form gametes.",
        ],
        customRecap: [
          "Compare mitosis and meiosis in terms of location, number of daughter cells, chromosome number, and genetic variation. [4]",
        ],
      },
      {
        title: "Monohybrid Crosses & Punnett Squares",
        rawChapter: 17,
        rawSubheadingIndexes: [3], // Monohybrid Crossing-Over and Punnett Squares
      },
      {
        title: "Genotype, Phenotype, Alleles & Dominance",
        rawChapter: 17,
        rawSubheadingIndexes: [1, 2], // Dominant/Recessive + Genotype/Phenotype
      },
      {
        title: "Codominance & ABO Blood Groups",
        rawChapter: 17,
        customBody: `### Codominance\n\n- **Codominance:** A situation in which both alleles in a heterozygous organism contribute to the phenotype, producing a blended or dual characteristic.\n\n#### ABO Blood Group Inheritance:\n- Governed by a single gene with three alleles: $I^A$, $I^B$, and $I^O$.\n- $I^A$ and $I^B$ are **codominant** with each other, and both are **dominant** to recessive $I^O$.\n\n| Blood Group Phenotype | Possible Genotypes |\n| :--- | :--- |\n| **A** | $I^A I^A$ (homozygous) or $I^A I^O$ (heterozygous) |\n| **B** | $I^B I^B$ (homozygous) or $I^B I^O$ (heterozygous) |\n| **AB** | $I^A I^B$ (codominant) |\n| **O** | $I^O I^O$ (homozygous recessive) |`,
        customTips: [
          "Always write blood group genotypes with superscript notation: $I^A, I^B, I^O$.",
        ],
        customMistakes: [
          "Writing blood alleles as plain A, B, O. Must use immunoglobulin gene notation: $I^A, I^B, I^O$.",
        ],
        customRecap: [
          "A mother of blood group A and a father of blood group B have a child of blood group O. Deduce the genotypes of the parents and child. [3]",
        ],
      },
      {
        title: "Sex Determination (XX vs XY)",
        rawChapter: 17,
        rawSubheadingIndexes: [4], // Sex Determination
      },
      {
        title: "Sex-Linked Characteristics",
        rawChapter: 17,
        customBody: `### Sex-Linkage\n\n- A **sex-linked characteristic** is one in which the gene responsible is located on a sex chromosome (almost always the non-homologous region of the **X chromosome**), making it more common in one sex than the other.\n- Examples: **Red-green colour blindness** and **haemophilia**.\n- Because males have only one X chromosome ($X^Y$), if they inherit a single recessive mutant allele on the X chromosome, they invariably express the condition. Females ($X^X$) require two copies of the recessive allele to express it; heterozygous females are unaffected **carriers** ($X^B X^b$).`,
        customTips: [
          "Write sex-linked genetic crosses showing both sex chromosomes and alleles: e.g. $X^B X^b \\times X^B Y$.",
        ],
        customMistakes: [
          "Putting alleles on the Y chromosome. The Y chromosome is much smaller and lacks the corresponding gene locus.",
        ],
        customRecap: [
          "Explain why red-green colour blindness is significantly more prevalent in human males than females. [3]",
        ],
      },
    ],
  },

  // 18. Variation & Selection (1 Topic · 5 Revision Notes)
  {
    topicNumber: 18,
    section: "18. Variation & Selection",
    subtopic: "Variation & Natural Selection",
    notes: [
      {
        title: "Continuous vs Discontinuous Variation",
        rawChapter: 18,
        rawSubheadingIndexes: [0], // Continuous and Discontinuous Variation
      },
      {
        title: "Sources of Genetic Variation (Mutation & Meiosis)",
        rawChapter: 18,
        rawSubheadingIndexes: [1], // Causes of Genetic Variation
      },
      {
        title: "Adaptive Features: Hydrophytes & Xerophytes",
        rawChapter: 18,
        customBody: `### Adaptations of Hydrophytes and Xerophytes\n\n- An **adaptive feature** is an inherited feature that helps an organism survive and reproduce in its environment.\n\n| Feature | Xerophytes (Desert plants, e.g. Cacti, Marram grass) | Hydrophytes (Water plants, e.g. Water lilies) |\n| :--- | :--- | :--- |\n| **Cuticle** | Very thick waxy cuticle on leaves to prevent cuticular transpiration | Very thin or absent waxy cuticle (no danger of drying out) |\n| **Stomata** | Sunken in pits, sheltered by hairs; closed during daylight | Confined strictly to upper leaf surface to facilitate gas exchange with air |\n| **Leaves** | Reduced to spines (cacti) or tightly rolled (marram grass) to trap humid micro-climate | Broad, flat leaves floating on surface to maximize light capture |\n| **Roots** | Extremely deep taproots to reach groundwater, or wide shallow network | Reduced root system; water and minerals absorbed directly across whole surface |\n| **Aerenchyma** | Minimal air spaces | Extensive spongy aerenchyma tissue providing buoyancy and gas diffusion to submerged parts |`,
        customTips: [
          "Remember: Hydrophyte stomata are on the UPPER epidermis so they can reach the air; xerophytes have sunken stomata on LOWER surface.",
        ],
        customMistakes: [
          "Saying cacti have no leaves. Cactus spines ARE modified leaves that minimize surface area.",
        ],
        customRecap: [
          "State two adaptations of xerophytes that reduce water loss. [2]",
          "Explain why water lilies have stomata on the upper epidermis of their leaves. [2]",
        ],
      },
      {
        title: "Natural Selection & Survival of the Fittest",
        rawChapter: 18,
        rawSubheadingIndexes: [2], // Natural Selection
      },
      {
        title: "Selective Breeding & Antibiotic Resistance",
        rawChapter: 18,
        rawSubheadingIndexes: [3, 4, 5], // Antibiotic Resistance + Selective Breeding + Speciation
      },
    ],
  },

  // 19. Organisms & Their Environment (1 Topic · 6 Revision Notes)
  {
    topicNumber: 19,
    section: "19. Organisms & Their Environment",
    subtopic: "Energy & Feeding Relationships",
    notes: [
      {
        title: "Ecology Concepts: Population, Community & Habitat",
        rawChapter: 19,
        rawSubheadingIndexes: [0, 1], // Ecosystem Basics + Producers, Consumers, Decomposers
      },
      {
        title: "Food Chains, Webs & Trophic Levels",
        rawChapter: 19,
        rawSubheadingIndexes: [2], // Food Chains, Webs and Trophic Levels
      },
      {
        title: "Pyramids of Numbers, Biomass & Energy Transfer",
        rawChapter: 19,
        rawSubheadingIndexes: [3], // Energy Transfer Between Trophic Levels
      },
      {
        title: "The Carbon Cycle",
        rawChapter: 19,
        rawSubheadingIndexes: [4], // Carbon and Water Cycles
      },
      {
        title: "The Nitrogen & Water Cycles",
        rawChapter: 19,
        customBody: `### The Nitrogen Cycle\n\n- Nitrogen is vital for synthesizing amino acids, proteins, and nucleic acids, but atmospheric $N_2$ gas is unreactive.\n\n#### Four Key Bacterial Groups in the Cycle:\n1. **Nitrogen-fixing Bacteria (e.g. *Rhizobium* in root nodules of legumes, and free-living *Azotobacter* in soil):** Convert atmospheric $N_2$ gas directly into ammonium ions ($NH_4^+$).\n2. **Decomposers (bacteria and fungi):** Break down nitrogenous animal waste (urea, faeces) and dead organisms, releasing ammonium ions into soil (**ammonification**).\n3. **Nitrifying Bacteria (e.g. *Nitrosomonas* and *Nitrobacter*):** Convert ammonium ions into nitrite ions ($NO_2^-$) and then into **nitrate ions ($NO_3^-$)** under aerobic conditions. Nitrates are absorbed by plant roots via active transport.\n4. **Denitrifying Bacteria (e.g. *Pseudomonas*):** In anaerobic, waterlogged soils, break down nitrates back into atmospheric $N_2$ gas, reducing soil fertility.`,
        customTips: [
          "Nitrifying bacteria make nitrates (good for soil); denitrifying bacteria destroy nitrates (bad for soil, happens in waterlogged soils).",
        ],
        customMistakes: [
          "Confusing nitrogen-fixing with nitrifying. Nitrogen-fixing turns $N_2$ gas into ammonium; nitrifying turns ammonium into nitrates.",
        ],
        customRecap: [
          "Outline the roles of nitrifying and denitrifying bacteria in the nitrogen cycle. [4]",
        ],
      },
      {
        title: "Population Growth Curves & Limiting Factors",
        rawChapter: 19,
        rawSubheadingIndexes: [5], // Sampling a Habitat
      },
    ],
  },

  // 20. Human Influences on Ecosystems (1 Topic · 7 Revision Notes)
  {
    topicNumber: 20,
    section: "20. Human Influences on Ecosystems",
    subtopic: "Human Impact: Biodiversity, Pollution & Conservation",
    notes: [
      {
        title: "Food Production: Agriculture & Monoculture",
        rawChapter: 20,
        rawSubheadingIndexes: [0, 1], // Food Production Systems + Feeding World Population
      },
      {
        title: "Deforestation: Causes, Soil Erosion & CO2 Balance",
        rawChapter: 20,
        rawSubheadingIndexes: [2, 3], // Deforestation: Reasons + Effects
      },
      {
        title: "Water Pollution & Eutrophication",
        rawChapter: 20,
        rawSubheadingIndexes: [5], // Pollution of Ecosystems
      },
      {
        title: "Plastic Pollution & Non-Biodegradable Waste",
        rawChapter: 20,
        customBody: `### Non-Biodegradable Plastic Waste\n\n- Plastics are synthetic synthetic polymers held by durable covalent bonds that cannot be hydrolysed by natural decomposer enzymes (non-biodegradable).\n- Accumulates in terrestrial landfills and marine gyres.\n- **Impacts on Marine Wildlife:**\n  1. Entanglement of marine mammals, turtles, and seabirds causing suffocation and restricted locomotion.\n  2. Ingestion: Plastic bags mistaken for jellyfish block the digestive tract of sea turtles, causing starvation.\n  3. **Microplastics & Bioaccumulation:** Plastics break down into microscopic fragments that adsorb toxic hydrophobic chemicals. Ingested by zooplankton and small fish, these toxins bioaccumulate and biomagnify up the trophic levels to top predators and humans.`,
        customTips: [
          "State two dangers of plastic waste: blocks digestive tracts of animals causing starvation, and breaks into microplastics that biomagnify.",
        ],
        customMistakes: [
          "Saying plastics decompose slowly. Non-biodegradable plastics do NOT decompose biologically; they photodegrade into toxic microplastics.",
        ],
        customRecap: [
          "Explain the environmental impacts of non-biodegradable plastic waste in marine ecosystems. [3]",
        ],
      },
      {
        title: "Air Pollution: Acid Rain & Greenhouse Gases",
        rawChapter: 20,
        customBody: `### Atmospheric Pollutants\n\n#### Acid Rain:\n- Combustion of fossil fuels containing sulfur impurities produces **sulfur dioxide ($SO_2$)**; high-temperature car engines oxidize nitrogen to produce **nitrogen oxides ($NO_x$)**.\n- These acidic gases dissolve in atmospheric water vapour to form dilute sulfurous, sulfuric, and nitric acids ($H_2SO_4$, $HNO_3$), precipitating as acid rain (pH < 4.5).\n- **Consequences:** Leaches essential mineral ions ($Mg^{2+}, Ca^{2+}$) from soils; releases toxic soluble aluminium ($Al^{3+}$) ions that wash into lakes, clogging fish gills; erodes limestone buildings and statues.\n\n#### Greenhouse Gases:\n- Principal gases: **Carbon dioxide ($CO_2$)**, **methane ($CH_4$)**, water vapour, and nitrous oxides.\n- Human activities (fossil fuel combustion, cattle farming, rice paddy fields) increase atmospheric concentrations, enhancing the greenhouse effect.`,
        customTips: [
          "Name the gases causing acid rain: sulfur dioxide and oxides of nitrogen. Do NOT say carbon dioxide causes acid rain (CO2 causes greenhouse effect).",
        ],
        customMistakes: [
          "Confusing acid rain with ozone depletion or greenhouse effect. Keep the pollutants and their distinct effects separate.",
        ],
        customRecap: [
          "State the origin of sulfur dioxide pollution and explain two damaging effects of acid rain. [3]",
        ],
      },
      {
        title: "Global Climate Change & Enhanced Greenhouse Effect",
        rawChapter: 20,
        customBody: `### The Enhanced Greenhouse Effect\n\n1. High-energy, short-wavelength solar radiation passes freely through the Earth's atmosphere.\n2. The Earth's surface absorbs this radiation and warms up.\n3. The warm surface re-emits lower-energy, long-wavelength **infrared radiation** back towards space.\n4. Greenhouse gases ($CO_2, CH_4$) absorb much of this outgoing infrared radiation and re-radiate it in all directions, including back toward the Earth's surface.\n5. Anthropogenic increases in greenhouse gases trap excess thermal energy, driving **global warming**.\n\n#### Consequences:\n- Thermal expansion of oceans and melting of polar ice sheets causing sea level rise and coastal inundation.\n- Increased frequency and intensity of extreme weather events (droughts, cyclones).\n- Coral bleaching from elevated marine temperatures.\n- Habitat shifts causing species extinction.`,
        customTips: [
          "Explain the greenhouse mechanism: short-wavelength solar radiation passes through; surface warms and emits long-wavelength infrared; greenhouse gases absorb and re-emit infrared.",
        ],
        customMistakes: [
          "Saying the greenhouse effect is caused by a hole in the ozone layer. The greenhouse effect is thermal infrared trapping; ozone depletion is UV shielding.",
        ],
        customRecap: [
          "Describe how greenhouse gases warm the Earth's atmosphere. [4]",
        ],
      },
      {
        title: "Conservation of Species: Seed Banks & CITES",
        rawChapter: 20,
        rawSubheadingIndexes: [4], // Habitat Destruction and Loss of Biodiversity
      },
    ],
  },

  // 21. Biotechnology & Genetic Modification (1 Topic · 3 Revision Notes)
  {
    topicNumber: 21,
    section: "21. Biotechnology & Genetic Modification",
    subtopic: "Biotechnology & Genetic Modification",
    notes: [
      {
        title: "Biotechnology Fundamentals: Yeast & Biofuels",
        rawChapter: 21,
        rawSubheadingIndexes: [0, 1], // What Is Biotechnology + Food Production
      },
      {
        title: "Industrial Fermenters & Enzyme Applications",
        rawChapter: 21,
        rawSubheadingIndexes: [2], // Biotechnology in Industry
      },
      {
        title: "Genetic Engineering: Recombinant DNA & Insulin",
        rawChapter: 21,
        rawSubheadingIndexes: [3, 4, 5], // Genetic Modification + GM Crops + Arguments
      },
    ],
  },

  // 22. Exam Skills (3 Topics · 13 Revision Notes)
  {
    topicNumber: 22,
    section: "22. Exam Skills",
    subtopic: "Exam Technique",
    notes: [
      {
        title: "Command Words: State, Describe, Explain, Compare, Calculate",
        customBody: `### Deciphering Cambridge IGCSE Command Words\n\nUnderstanding the exact cognitive demand of command words is the single highest-yield skill for scoring grade 9/A*:\n\n- **State / Name:** Give a concise fact, definition, or label with no explanatory reasoning required [1 mark].\n- **Describe:** State the features or what happens in step-by-step chronological order ('what you see or measure') without explaining *why* [2–3 marks].\n- **Explain:** Set out reasons or causes; say *why* or *how* something happens using scientific principles and mechanisms [2–4 marks].\n- **Compare:** Identify both similarities AND differences between two biological items or datasets [2–4 marks].\n- **Calculate:** Perform a mathematical calculation showing working and appropriate SI units [2–3 marks].\n- **Suggest:** Apply biological principles to a novel, unfamiliar scenario not directly listed in syllabus.`,
        customTips: [
          "In an 'Explain' question, every sentence must contain a linking causal word like 'because', 'therefore', 'so that', or 'leading to'.",
        ],
        customMistakes: [
          "Giving an explanation when the question only asks to describe. Save time by answering strictly what the command word demands.",
        ],
        customRecap: [
          "Explain the difference between 'Describe the effect of temperature on amylase' and 'Explain the effect of temperature on amylase'. [3]",
        ],
      },
      {
        title: "Structuring High-Mark Extended Answers",
        customBody: `### Securing Maximum Marks on 4–6 Mark Questions\n\n1. **Underline Key Spec Terms:** Mark schemes award marks for specific keywords (e.g. 'partially permeable membrane', 'denatured', 'active site', 'turgor pressure').\n2. **Bullet-Point Structure:** Write in clear, standalone bullet points rather than dense rambling paragraphs. Each bullet point should earn one distinct marking point.\n3. **Follow Causal Chains:** Foundation $\\to$ Mechanism $\\to$ Consequence. For example: High temperature $\\implies$ enzymes gain kinetic energy and vibrate $\\implies$ hydrogen bonds break $\\implies$ active site changes complementary shape $\\implies$ substrate cannot bind $\\implies$ enzyme is denatured.`,
        customTips: [
          "Examiners mark using checklists of marking points. Bullet points make your marking points stand out clearly.",
        ],
        customMistakes: [
          "Contradicting yourself. If you write one correct statement and one contradictory incorrect statement on the same point, zero marks are awarded (list rule).",
        ],
        customRecap: [
          "State three golden rules for writing high-scoring answers in extended IGCSE Biology questions. [3]",
        ],
      },
      {
        title: "Common Examiner Traps & Lost Mark Prevention",
        customBody: `### The Top 5 Cambridge Traps to Avoid\n\n1. **Respiration $\\ne$ Breathing:** Respiration is an intracellular biochemical reaction releasing energy; ventilation/breathing is muscular air movement.\n2. **Excretion $\\ne$ Egestion:** Excretion is removal of metabolic waste; egestion is elimination of undigested faeces that never entered cells.\n3. **Denaturation $\\ne$ Killing:** Enzymes are non-living protein molecules; they cannot 'die'. They **denature**.\n4. **Cell Wall in Animal Cells:** Animal cells NEVER have cell walls. Mentioning a cell wall in an animal context loses all structural marks.\n5. **Active Transport Direction:** Always state 'against the concentration gradient, from lower to higher concentration'.`,
        customTips: [
          "Double check your definitions: respiration vs breathing, excretion vs egestion, antibody vs antigen.",
        ],
        customMistakes: [
          "Writing that enzymes 'die' at high temperatures. Enzymes are not alive; they denature.",
        ],
        customRecap: [
          "Identify and correct the biological error in: 'At 70°C, the bacteria enzymes died, preventing respiration from breathing in oxygen.' [3]",
        ],
      },
      {
        title: "Pacing & Strategy for Paper 2, Paper 4 and Paper 6",
        customBody: `### Paper-by-Paper Time Management\n\n- **Paper 2 (Multiple Choice — 45 minutes, 40 marks):**\n  - Pacing: ~1 minute per question, leaving 5 minutes for review.\n  - Strategy: Read every option carefully; eliminate obviously wrong options; underline negative words ('NOT', 'EXCEPT').\n- **Paper 4 (Theory Extended — 1 hour 15 minutes, 80 marks):**\n  - Pacing: ~0.9 minutes per mark. A 6-mark question should take no longer than 5.5 minutes.\n  - Strategy: Read graphs carefully before answering; check axis labels and units; check mark allocations indicated in brackets [ ].\n- **Paper 6 (Alternative to Practical — 1 hour, 40 marks):**\n  - Pacing: 1.5 minutes per mark.\n  - Strategy: Precision in ruler measurements; complete table headings with units; write controlled variables explicitly.`,
        customTips: [
          "On Paper 4, the number of marks in brackets [3] indicates how many distinct points you must make.",
        ],
        customMistakes: [
          "Spending 15 minutes on a 3-mark calculation and running out of time on the final 8-mark question.",
        ],
        customRecap: [
          "Calculate the average time available per mark on Paper 4 Extended. [1]",
        ],
      },
    ],
  },
  {
    topicNumber: 22,
    section: "22. Exam Skills",
    subtopic: "Handling Data & Maths Skills",
    notes: [
      {
        title: "Magnification Formula (M = I / A) & Unit Conversions",
        customBody: `### Magnification Formula and Calculations\n\n$$\\text{Magnification } (M) = \\frac{\\text{Image Size } (I)}{\\text{Actual Size } (A)}$$\n\n$$\\text{Actual Size } (A) = \\frac{\\text{Image Size } (I)}{\\text{Magnification } (M)}$$\n\n$$\\text{Image Size } (I) = \\text{Actual Size } (A) \\times \\text{Magnification } (M)$$\n\n#### Crucial Unit Conversions:\n$$1\\text{ metre (m)} = 100\\text{ centimetres (cm)} = 1000\\text{ millimetres (mm)}$$\n$$1\\text{ millimetre (mm)} = 1000\\text{ micrometres (µm)}$$\n\n- **Standard Protocol in Exams:**\n  1. Measure the image line with your clear ruler in **millimetres (mm)**.\n  2. If the actual size is given in **micrometres (µm)**, convert your image measurement into µm by **multiplying by 1000**.\n  3. Divide $I$ by $A$ to calculate magnification. Magnification has NO units (write $\\times 400$).`,
        customTips: [
          "Always convert Image and Actual sizes to the **same units** before dividing. 1 mm = 1000 µm.",
        ],
        customMistakes: [
          "Forgetting to convert units: dividing image in mm by actual in µm without multiplying by 1000.",
        ],
        customRecap: [
          "A specimen has an actual length of 25 µm. The image measured with a ruler is 50 mm. Calculate magnification. [2]",
        ],
      },
      {
        title: "Calculating Percentage Change, Ratios & Rates",
        customBody: `### Key Mathematical Formulas in Biology\n\n#### 1. Percentage Change:\n$$\\text{\\% Change} = \\frac{\\text{Final Value} - \\text{Initial Value}}{\\text{Initial Value}} \\times 100$$\n- Always indicate whether the change is positive ($+$ for gain in mass) or negative ($-$ for loss in mass).\n\n#### 2. Rate of Reaction:\n$$\\text{Rate} = \\frac{1}{\\text{Time Taken } (s)} \\quad \\text{or} \\quad \\text{Rate} = \\frac{\\text{Volume of Gas Produced } (cm^3)}{\\text{Time } (min)}$$\n\n#### 3. Ratios:\n- Express ratios in their simplest whole number form (e.g. $3:1$) or $X:1$.`,
        customTips: [
          "Always divide by the **Initial Value** when calculating percentage change, not the final value.",
        ],
        customMistakes: [
          "Dividing by the final value instead of the original value when calculating percentage increase or decrease.",
        ],
        customRecap: [
          "A potato cylinder increases in mass from 2.50 g to 2.85 g. Calculate percentage change in mass. [2]",
        ],
      },
      {
        title: "Graph Plotting Rules: Axes, Scales, Points & Best-Fit",
        customBody: `### The SLAP Rules for Biological Graph Plotting\n\n- **S — Scale:** Linear scale occupying at least 50% (preferably 70%+) of the grid area in both directions. Use sensible increments (1, 2, 5, 10); never use awkward multiples like 3 or 7.\n- **L — Line:** Clean, sharp line drawn with a sharp pencil. For biological experimental data with uncertainty, draw a smooth best-fit curve or ruled point-to-point lines as instructed. Do not extrapolate beyond the measured range.\n- **A — Axes:** Independent variable on the x-axis; dependent variable on the y-axis. Full labels matching the table heading, including units separated by a slash (e.g. 'Temperature / °C', 'Time / s').\n- **P — Points:** Plot data points precisely with a small neat 'x' or a circled dot. Points must be within $\\pm 0.5$ small square of accuracy.`,
        customTips: [
          "Remember SLAP: Scale, Line, Axes, Points. Make sure the graph fills over half the provided grid.",
        ],
        customMistakes: [
          "Plotting points with huge fuzzy blobs. Use a sharp pencil to draw a crisp small cross 'x'.",
        ],
        customRecap: [
          "State four rules required to earn full marks on a 5-mark graph question. [4]",
        ],
      },
      {
        title: "Interpreting Tables, Error Bars & Assessing Reliability",
        customBody: `### Data Evaluation & Reliability\n\n- **Anomalous Results:** A data value that does not fit the general trend. Anomalies must be identified, excluded from mean averages, and repeated.\n- **Mean Average:** Calculated by summing concordant repeat values and dividing by the number of repeats (excluding anomalies).\n- **Reliability:** Assessed by the degree of concordance between repeat trials. If repeats are closely grouped, reliability is high.\n- **Error Bars:** Vertical bars extending above and below a data point showing spread of repeat measurements or standard deviation. Overlapping error bars indicate that differences between treatments may not be statistically significant.`,
        customTips: [
          "Always identify and circle anomalies. Never include anomalies when calculating the mean.",
        ],
        customMistakes: [
          "Including an anomalous result when calculating the mean average of an experimental trial.",
        ],
        customRecap: [
          "Explain why repeating an investigation three times improves the reliability of the conclusions. [2]",
        ],
      },
    ],
  },
  {
    topicNumber: 22,
    section: "22. Exam Skills",
    subtopic: "Practical & Investigative Skills",
    notes: [
      {
        title: "Planning Controlled Investigations & Variables",
        customBody: `### Designing a Valid Scientific Investigation (CORMS)\n\nUse the **CORMS** framework for 6-mark practical planning questions in Paper 4 and Paper 6:\n\n- **C — Change (Independent Variable):** What will you change across a minimum of 5 distinct values (e.g. temperatures: 20°C, 30°C, 40°C, 50°C, 60°C)?\n- **O — Organism:** What biological material will be used? Specify species, age, mass, or surface area to ensure standardized tissue.\n- **R — Repeat:** How many times will each trial be repeated (minimum 3 repeats to calculate a mean average and identify anomalies)?\n- **M1 — Measure (Dependent Variable 1):** What exact quantity will you measure (e.g. volume of gas in $cm^3$)?\n- **M2 — Measure (Dependent Variable 2):** Over what specific time period will measurements be recorded (e.g. recorded every 60 seconds for 10 minutes)?\n- **S — Standardise (Controlled Variables):** Name at least two specific variables kept strictly constant, and state the exact equipment used to control them (e.g. 'pH controlled at 7.0 using buffer solution', 'temperature kept at 37°C using thermostatically controlled water bath').`,
        customTips: [
          "Never write vague phrases like 'keep everything else the same'. Name TWO specific variables (e.g. pH, volume, concentration) and say HOW you control them.",
        ],
        customMistakes: [
          "Listing 'amount' as a variable. Use precise scientific terms: **volume**, **mass**, or **concentration**.",
        ],
        customRecap: [
          "Outline an experimental plan using CORMS to investigate the effect of light intensity on the rate of photosynthesis in pondweed. [6]",
        ],
      },
      {
        title: "Food Tests Protocols (Benedict's, Iodine, Biuret, Ethanol)",
        customBody: `### Comprehensive Food Testing Protocol\n\n| Nutrient | Reagent / Test | Protocol & Conditions | Positive Result | Negative Result |\n| :--- | :--- | :--- | :--- | :--- |\n| **Reducing Sugars** | Benedict's solution | Add equal volume of Benedict's, heat in water bath at **80–100°C for 5 min** | Blue $\\to$ Green $\\to$ Yellow $\\to$ Orange $\\to$ **Brick-red precipitate** | Remains **blue** |\n| **Starch** | Iodine solution | Add 2–3 drops of aqueous iodine in potassium iodide | Yellow-brown $\\to$ **Blue-black** | Remains **yellow-brown** |\n| **Proteins** | Biuret reagent | Add equal volume of dilute potassium hydroxide, then 1% copper(II) sulfate | Blue $\\to$ **Purple / Lilac / Violet** | Remains **blue** |\n| **Lipids (Emulsion)** | Ethanol & Water | Dissolve sample in pure ethanol, shake, decant into cold water | Clear $\\to$ **Milky-white emulsion** | Remains **clear / colourless** |\n| **Vitamin C** | DCPIP | Add DCPIP dropwise to sample until colour disappears | Blue $\\to$ **Decolorised / Colourless** | Remains **blue** |`,
        customTips: [
          "Benedict's is the ONLY test requiring heating. Always state: **heat in a boiling water bath at 80°C or above**.",
        ],
        customMistakes: [
          "Forgetting to heat Benedict's reagent. Without heat, Benedict's test will not change colour even with high glucose concentration.",
        ],
        customRecap: [
          "Describe how you would test a food sample for the presence of reducing sugar, protein, and lipid. [6]",
        ],
      },
      {
        title: "Enzyme & Photosynthesis Experimental Setup Mastery",
        customBody: `### Common Practical Setups & Controls\n\n#### 1. Photosynthesis with Aquatic Pondweed (*Elodea*):\n- Submerge pondweed under dilute sodium hydrogencarbonate solution ($NaHCO_3$ provides surplus $CO_2$).\n- Position lamp at measured distances (10 cm, 20 cm, 30 cm, 40 cm, 50 cm) using a meter rule.\n- Allow 5 minutes equilibration time at each distance.\n- Count bubbles released per minute, or collect gas volume in inverted gas syringe/measuring cylinder.\n- **Control Setup:** LED lamp or glass water tank between lamp and beaker to absorb heat, keeping temperature constant.\n\n#### 2. Enzyme Rate Practical (Amylase & Starch):\n- Mix amylase and starch solutions buffered at specific pH.\n- At 30-second intervals, remove a drop of mixture using a pipette and place into a spot of iodine on a dimple tile.\n- Record the time when iodine remains orange-brown (starch completely hydrolysed).\n- Calculate rate as $1 / \\text{time taken}$.`,
        customTips: [
          "Always mention the heat shield (water tank) when using filament lamps to prevent temperature acting as a confounding variable.",
        ],
        customMistakes: [
          "Assuming gas bubbles from pondweed are 100% pure oxygen. They contain dissolved air and nitrogen; collect volume for higher precision.",
        ],
        customRecap: [
          "Explain the purpose of placing a transparent glass tank of water between the lamp and pondweed beaker. [2]",
        ],
      },
      {
        title: "Osmosis Investigations: Potato Cylinder Protocol",
        customBody: `### Osmosis in Plant Tissue (Potato Cylinders)\n\n1. Use a **cork borer** to cut uniform cylinders of potato tissue from the same tuber.\n2. Cut cylinders to identical lengths (e.g. 50 mm) using a ruler and scalpel on a white tile; peel away outer skin to ensure uniform surface permeability.\n3. Gently blot cylinders with paper towel to remove surface moisture, then measure initial mass on a digital balance to 2 decimal places.\n4. Immerse cylinders into test tubes containing at least 5 concentrations of sucrose solution (0.0, 0.2, 0.4, 0.6, 0.8, 1.0 mol/dm³) for 60 minutes.\n5. Remove, blot surface moisture again, and record final mass.\n6. Calculate **percentage change in mass**:\n$$\\text{\\% Change in Mass} = \\frac{\\text{Final Mass} - \\text{Initial Mass}}{\\text{Initial Mass}} \\times 100$$\n7. Plot percentage change in mass against sucrose concentration.\n8. **Finding Incipient Plasmolysis / Isotonic Point:** The point where the curve crosses the x-axis (0% change in mass) equals the internal water potential of the potato cell sap.`,
        customTips: [
          "Blotting removes excess surface water without squeezing cells. Initial mass varies; calculating percentage change allows fair comparison.",
        ],
        customMistakes: [
          "Plotting raw change in mass instead of percentage change. Because initial cylinder masses vary, raw change is not comparable.",
        ],
        customRecap: [
          "Explain why potato cylinders must be blotted with paper towel before measuring mass. [2]",
          "How can the water potential of potato cells be determined from a graph of percentage change in mass? [2]",
        ],
      },
      {
        title: "Biological Drawings Standards: Outlines & Proportions",
        customBody: `### Cambridge Biological Drawing Criteria\n\nBiological specimens (leaves, flowers, insect wings, cell cross-sections) must be drawn according to strict exam specifications:\n\n1. **Outline Quality:** Use a sharp HB pencil to draw **clear, single, continuous lines**. Never use sketchy, feathered, or jagged lines.\n2. **No Shading:** Absolutely NO shading, stippling, or cross-hatching of any kind. Delineate boundaries with clear outlines.\n3. **Scale & Proportion:** The drawing must be large, occupying **more than 50%** of the provided answer space, with relative proportions matching the specimen.\n4. **Labelling Lines:**\n   - Drawn with a ruler and pencil, completely straight and horizontal.\n   - Label lines must end exactly on the structure being identified, without arrowheads.\n   - Never cross label lines over one another.\n5. **Magnification & Scale Bar:** Indicate linear dimensions or magnification calculated accurately.`,
        customTips: [
          "Never shade a biological drawing. Use single, continuous, firm pencil lines.",
        ],
        customMistakes: [
          "Adding artistic shading or cross-hatching. In biological drawing examinations, shading immediately incurs mark deductions.",
        ],
        customRecap: [
          "State three rules that must be followed when producing a biological specimen drawing. [3]",
        ],
      },
    ],
  },
];

console.log("Total specs defined:", specs.length);
let totalNotesCount = 0;
specs.forEach((s) => {
  totalNotesCount += s.notes.length;
});
console.log("Total notes count:", totalNotesCount);

// Build chapters
const generatedChapters: Chapter[] = [];
let noteCounter = 1;

for (const spec of specs) {
  for (const noteSpec of spec.notes) {
    const rawCh = noteSpec.rawChapter ? rawChapters[noteSpec.rawChapter] : null;

    let subheadings: SubHeading[] = [];

    if (rawCh && noteSpec.rawSubheadingIndexes && noteSpec.rawSubheadingIndexes.length > 0) {
      for (const idx of noteSpec.rawSubheadingIndexes) {
        if (rawCh.subheadings[idx]) {
          subheadings.push(rawCh.subheadings[idx]);
        }
      }
    }

    if (noteSpec.customFigure) {
      if (subheadings.length > 0) {
        subheadings[0]!.figure = noteSpec.customFigure;
      }
    }

    if (noteSpec.customBody) {
      subheadings.push({
        title: noteSpec.title,
        body: noteSpec.customBody,
        groups: noteSpec.customGroups || [],
        examinerTips: noteSpec.customTips || [],
        commonMistakes: noteSpec.customMistakes || [],
        recap: noteSpec.customRecap || [],
      });
    }

    if (subheadings.length === 0) {
      subheadings.push({
        title: noteSpec.title,
        body: `### ${noteSpec.title}\n\nHigh-yield syllabus revision notes, key biological definitions, and exam checkpoints for **${noteSpec.title}** under **${spec.subtopic}**.`,
        groups: [],
        examinerTips: [
          `Pay close attention to key definitions and exam question phrasing when studying ${noteSpec.title}.`,
        ],
        commonMistakes: [
          `Confusing terminology or omitting exact units required by Cambridge mark schemes.`,
        ],
        recap: [
          `State the key biological principles underlying ${noteSpec.title}. [3]`,
        ],
      });
    }

    const chapterObj: Chapter = {
      number: noteCounter++,
      title: noteSpec.title,
      section: spec.section,
      topic: spec.subtopic,
      intro: `Revision notes for **${noteSpec.title}** under **${spec.subtopic}** (${spec.section}). Cambridge IGCSE Biology (0610/0970).`,
      subheadings,
    };

    generatedChapters.push(chapterObj);
  }
}

console.log("Generated chapters count:", generatedChapters.length);

const outContent = `import type { SubjectNotes, Chapter } from "./types";

export const BIOLOGY_CHAPTERS: Chapter[] = ${JSON.stringify(generatedChapters, null, 2)};

export const BIOLOGY: SubjectNotes = {
  id: "biology",
  name: "Biology",
  code: "0610/0970",
  color: "bg-emerald-500",
  chapters: BIOLOGY_CHAPTERS,
};
`;

writeFileSync("src/lib/notes/biology.ts", outContent, "utf-8");
console.log("Successfully wrote src/lib/notes/biology.ts!");
