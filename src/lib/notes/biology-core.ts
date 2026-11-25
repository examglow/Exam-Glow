import type { SubjectNotes } from "./types";

/**
 * Cambridge IGCSE Biology 0610 Core (2026–2028), Topics 1–21 (Complete Core Syllabus).
 * Supplement-only statements deliberately stay in the 161-chapter Extended course.
 */
export const BIOLOGY_CORE: SubjectNotes = {
  id: "biology",
  name: "Biology",
  code: "0610/0970 Core",
  color: "bg-emerald-500",
  chapters: [
    {
      number: 1,
      title: "Characteristics and Classification of Living Organisms",
      section: "1. Characteristics and Classification of Living Organisms",
      topic: "Core Topic 1",
      intro: "Core revision notes for **Topic 1: Characteristics and Classification of Living Organisms**. Cambridge IGCSE Biology (0610/0970), covering the seven life processes, species, binomial names, dichotomous keys and the features used to classify animals and plants.",
      subheadings: [
        {
          title: "The Seven Characteristics of Living Organisms",
          body: "All living organisms carry out seven life processes. The memory aid **MRS GREN** helps you recall them, but examination answers must give the full process and, when asked, its precise meaning.",
          groups: [
            {
              bullets: [
                "**Movement:** an action by an organism or part of an organism causing a change of position or place.",
                "**Respiration:** the chemical reactions in cells that break down nutrient molecules and release energy for metabolism.",
                "**Sensitivity:** the ability to detect or sense stimuli in the internal or external environment and to make appropriate responses.",
                "**Growth:** a permanent increase in size and dry mass by an increase in cell number or cell size or both.",
                "**Reproduction:** the processes that make more of the same kind of organism.",
                "**Excretion:** removal from organisms of the waste products of metabolism, toxic materials, and substances in excess of requirements.",
                "**Nutrition:** taking in materials for energy, growth and development; plants make food by photosynthesis and animals take in ready-made organic food.",
              ],
            },
          ],
          examinerTips: [
            "Do not define respiration as breathing. Breathing ventilates the lungs; respiration is a set of chemical reactions in cells.",
            "In an unfamiliar-example question, name the life process and quote the evidence from the example.",
          ],
          commonMistakes: [
            "Confusing excretion with egestion. Undigested food leaves by egestion and is not a waste product of metabolism.",
            "Saying that any temporary swelling is growth. Growth is permanent and includes an increase in dry mass.",
          ],
          recap: [
            "State the seven characteristics of living organisms. [7]",
            "A plant shoot grows towards light. Name and explain two life processes shown. [4]",
            "Explain why a car is not living even though it can move and use fuel. [3]",
          ],
        },
        {
          title: "Classification, Species and Binomial Names",
          body: "Classification places organisms into groups according to the features they share. The main sequence is **kingdom → phylum → class → order → family → genus → species**. A **species** is a group of organisms that can reproduce to produce fertile offspring.\n\nThe **binomial system** gives every species an internationally agreed two-part scientific name: the **genus** followed by the **species**. For example, *Homo sapiens* has genus *Homo* and species *sapiens*.",
          figure: "![Core classification diagram showing the seven life processes, classification sequence and correct binomial-name format](/notes/biology-core/core-01-classification.svg)",
          groups: [
            {
              subTitle: "Writing scientific names correctly",
              bullets: [
                "Begin the genus with a **capital letter** and the species with a **lower-case letter**.",
                "Use *italics* when typing; underline the two words separately when handwriting.",
                "Use observable, shared features to place an organism in a group rather than relying only on where it lives.",
              ],
            },
          ],
          examinerTips: [
            "A species definition must include **fertile offspring**. Offspring that cannot reproduce do not satisfy the definition.",
            "When classifying an unfamiliar organism, link each conclusion to a visible feature in the photograph or drawing.",
          ],
          commonMistakes: [
            "Capitalising both parts of a binomial name or reversing the genus and species.",
            "Assuming organisms belong to the same species merely because they look similar.",
          ],
          recap: [
            "Define the term species. [2]",
            "Describe the binomial system of naming species. [3]",
            "The scientific name of a lion is *Panthera leo*. Identify its genus and species. [2]",
          ],
        },
        {
          title: "Constructing and Using Dichotomous Keys",
          body: "A **dichotomous key** identifies organisms through a series of paired, contrasting statements based on identifiable features. *Dichotomous* means divided into two branches.",
          groups: [
            {
              subTitle: "Using a key",
              bullets: [
                "Begin at the first pair and choose the statement that matches the specimen.",
                "Follow the indicated branch to another pair or to the organism's name.",
                "Continue until only one identification remains; do not skip a stage because the organism looks familiar.",
              ],
            },
            {
              subTitle: "Constructing a key",
              bullets: [
                "Use features that can be observed, such as number of legs, presence of wings or leaf shape.",
                "Make each pair mutually exclusive: **wings present / wings absent**, not **wings present / six legs**.",
                "Use the same feature in each contrasting pair and avoid vague descriptions such as large or small unless measured.",
              ],
            },
          ],
          examinerTips: [
            "A good pair divides the remaining organisms cleanly into two groups with no organism fitting both statements.",
          ],
          commonMistakes: [
            "Using two unrelated characteristics in one pair.",
            "Using colour alone when lighting or natural variation could make the feature unreliable.",
          ],
          recap: [
            "State what is meant by a dichotomous key. [2]",
            "Give three rules for constructing a useful dichotomous key. [3]",
            "Explain why ‘has wings / has six legs’ is not a suitable contrasting pair. [2]",
          ],
        },
        {
          title: "Features Used to Classify Animals",
          body: "Animals are multicellular organisms that obtain organic nutrients by feeding on other organisms. Core classification focuses on the five vertebrate groups and four arthropod groups.\n\n| Vertebrate group | Main identifying features |\n| --- | --- |\n| Mammals | hair or fur; mammary glands; usually give birth to live young |\n| Birds | feathers; beak; wings; hard-shelled eggs |\n| Reptiles | dry scaly skin; usually four limbs; eggs with a soft or leathery shell |\n| Amphibians | moist, smooth skin without scales; adults usually have four limbs; aquatic larvae usually have gills |\n| Fish | scales; gills; fins; live in water |\n\nAll arthropods have an **exoskeleton**, a **segmented body** and **jointed limbs**.\n\n| Arthropod group | Body regions | Pairs of legs | Antennae |\n| --- | --- | --- | --- |\n| Insects | head, thorax and abdomen | 3 | 1 pair |\n| Arachnids | cephalothorax and abdomen | 4 | none |\n| Crustaceans | usually cephalothorax and abdomen | 5 or more | 2 pairs |\n| Myriapods | head and many similar segments | many | 1 pair |",
          groups: [],
          examinerTips: [
            "Describe anatomical features, not habitat. ‘Lives in water’ is not enough to identify a fish.",
            "Count pairs of legs carefully: three pairs means an insect and four pairs means an arachnid.",
          ],
          commonMistakes: [
            "Calling a spider an insect.",
            "Saying that all mammals give birth to live young without allowing for exceptions.",
          ],
          recap: [
            "State two features used to distinguish birds from reptiles. [2]",
            "An arthropod has two body regions, four pairs of legs and no antennae. Identify its group. [1]",
            "Describe three features shared by all arthropods. [3]",
          ],
        },
        {
          title: "Features Used to Classify Plants",
          body: "Plants are multicellular organisms with cells that usually have **cellulose cell walls** and **chloroplasts**. They make organic nutrients by **photosynthesis**. When using a plant in a key, rely on visible features such as the presence of flowers, the shape and arrangement of leaves, and the type of veins.",
          groups: [
            {
              bullets: [
                "Identify plants from several consistent features rather than one feature alone.",
                "A plant lacking green parts may still be a plant; not every plant cell contains chloroplasts.",
                "Root cells normally have no chloroplasts because they are underground and receive no light.",
              ],
            },
          ],
          examinerTips: [
            "When asked to justify a kingdom, give at least two features and link them to the specimen.",
          ],
          commonMistakes: [
            "Assuming every cell of a plant contains chloroplasts.",
            "Using the size of a whole plant as the only classification feature.",
          ],
          recap: [
            "State three features that can be used to identify an organism as a plant. [3]",
            "Explain why a root cell can belong to a plant even though it has no chloroplasts. [2]",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Organisation of the Organism",
      section: "2. Organisation of the Organism",
      topic: "Core Topic 2",
      intro: "Core revision notes for **Topic 2: Organisation of the Organism**. Learn cell structures and their functions, bacterial cells, specialised cells, magnification and the levels of organisation.",
      subheadings: [
        {
          title: "Plant and Animal Cells",
          body: "Plant and animal cells are **eukaryotic**: their genetic material is enclosed in a nucleus. They share many structures, while plant cells also have a cellulose cell wall, chloroplasts in photosynthetic cells and a large permanent vacuole.\n\n| Structure | Function |\n| --- | --- |\n| Cell membrane | partially permeable barrier that controls movement of substances into and out of the cell |\n| Cytoplasm | site of many chemical reactions |\n| Nucleus | contains genetic material and controls the activities of the cell |\n| Mitochondria | site of aerobic respiration, releasing energy for cell activities |\n| Ribosomes | sites of protein synthesis |\n| Cell wall | cellulose layer that strengthens and supports a plant cell |\n| Chloroplasts | contain chlorophyll and are the sites of photosynthesis |\n| Permanent vacuole | contains cell sap and helps maintain turgor in a plant cell |",
          figure: "![Labelled comparison of a generalised plant cell, animal cell and bacterial cell](/notes/biology-core/core-02-cell-organisation.svg)",
          groups: [
            {
              subTitle: "Important comparisons",
              bullets: [
                "The **cell wall is freely permeable**; the cell membrane controls what enters and leaves.",
                "The plant cell wall is made of **cellulose** and prevents excessive bursting when water enters.",
                "Plant cells may have small vacuoles when immature, but a mature plant cell usually has one large permanent vacuole.",
                "Root cells and other non-photosynthetic plant cells do not contain chloroplasts.",
              ],
            },
          ],
          examinerTips: [
            "Identify structures only when they are visible in the supplied diagram or micrograph.",
            "For a function question, state the structure's precise role rather than only its location.",
          ],
          commonMistakes: [
            "Saying that the cell wall controls movement into a plant cell.",
            "Claiming that every cell has a nucleus; mature mammalian red blood cells and bacterial cells do not.",
          ],
          recap: [
            "State three structures present in plant cells but absent from animal cells. [3]",
            "State the functions of the nucleus, ribosomes and mitochondria. [3]",
            "Explain how the cell wall and vacuole help support a plant cell. [3]",
          ],
        },
        {
          title: "Bacterial Cells",
          body: "Bacteria are **prokaryotic cells**. They have a cell wall, cell membrane, cytoplasm and ribosomes, but no nucleus. Their genetic material is **circular DNA** lying free in the cytoplasm, and many also contain small DNA loops called **plasmids**.",
          groups: [
            {
              bullets: [
                "Bacteria have no mitochondria or chloroplasts.",
                "The circular DNA carries the cell's main genetic instructions; plasmids carry additional genes.",
                "A bacterial cell wall is not made of cellulose.",
              ],
            },
          ],
          examinerTips: [
            "Do not describe bacterial DNA as being inside a nucleus or as linear chromosomes.",
          ],
          commonMistakes: [
            "Drawing a nucleus in a bacterium.",
            "Saying that a bacterium is not a cell because it has no nucleus.",
          ],
          recap: [
            "List five structures found in a bacterial cell. [5]",
            "State two differences between the genetic material of a bacterium and a plant cell. [2]",
          ],
        },
        {
          title: "Specialised Cells and New Cells",
          body: "New cells are produced by division of existing cells. During development, cells become **specialised**: their structure is adapted for a particular function. Specialised cells with similar structures and functions form tissues.",
          groups: [
            {
              bullets: [
                "**Root hair cell:** a long projection gives a large surface area for absorbing water and mineral ions; no chloroplasts because it is underground.",
                "**Palisade mesophyll cell:** many chloroplasts near the upper surface absorb light efficiently for photosynthesis.",
                "**Red blood cell:** contains haemoglobin to transport oxygen; no nucleus leaves more space for haemoglobin; biconcave shape gives a large surface area.",
                "**Sperm cell:** flagellum for movement, many mitochondria to release energy and enzymes to help enter the egg.",
                "**Nerve cell:** long fibre carries electrical impulses over long distances; branched endings connect with other cells.",
                "**Xylem vessel:** long hollow tubes with lignified walls transport water and mineral ions and provide support.",
              ],
            },
          ],
          examinerTips: [
            "For each adaptation, give both the structural feature and how it improves the cell's function.",
          ],
          commonMistakes: [
            "Listing a feature without explaining its advantage when the command word is ‘explain’.",
            "Giving a root hair cell chloroplasts.",
          ],
          recap: [
            "Describe three adaptations of a sperm cell. [3]",
            "Explain how a palisade mesophyll cell is adapted for photosynthesis. [3]",
            "Explain how a red blood cell is adapted to transport oxygen. [4]",
          ],
        },
        {
          title: "Size of Specimens and Magnification",
          body: "**Magnification = image size ÷ actual size**. Use the same units for image and actual size before calculating. The formula can be rearranged to **actual size = image size ÷ magnification** and **image size = actual size × magnification**.\n\nA millimetre is 1000 micrometres: **1 mm = 1000 µm**. Magnification is a ratio and has no units.",
          groups: [
            {
              subTitle: "Worked example",
              bullets: [
                "A cell image is 30 mm wide and the actual cell is 60 µm wide.",
                "Convert: 30 mm = 30 000 µm.",
                "Magnification = 30 000 ÷ 60 = **×500**.",
              ],
            },
          ],
          examinerTips: [
            "Write the formula, convert units, substitute values and then calculate. This preserves method marks.",
          ],
          commonMistakes: [
            "Dividing millimetres by micrometres without converting.",
            "Writing units after the magnification value.",
          ],
          recap: [
            "An image is 45 mm long and the actual specimen is 90 µm. Calculate the magnification. [3]",
            "A drawing made at ×400 shows a structure 24 mm long. Calculate its actual length in micrometres. [3]",
          ],
        },
        {
          title: "Levels of Organisation",
          body: "Multicellular organisms are organised as **cells → tissues → organs → organ systems → organisms**.\n\n| Level | Definition | Example |\n| --- | --- | --- |\n| Cell | basic structural and functional unit of a living organism | palisade mesophyll cell |\n| Tissue | group of cells with similar structures working together for a shared function | xylem, muscle tissue |\n| Organ | structure made of different tissues working together for particular functions | leaf, heart |\n| Organ system | group of organs with related functions working together | digestive system, circulatory system |\n| Organism | individual living thing | sunflower, human |",
          groups: [
            {
              bullets: [
                "A leaf is an organ because it contains epidermis, mesophyll, xylem and phloem working together.",
                "Xylem is a tissue, not an organ; the heart is an organ, not an organ system.",
                "Unicellular organisms carry out all life processes within one cell and do not have tissues or organs.",
              ],
            },
          ],
          examinerTips: [
            "When asked to classify a structure, justify your answer by naming the cells, tissues or organs it contains.",
          ],
          commonMistakes: [
            "Leaving organ system out of the sequence.",
            "Calling blood an organ; blood is a tissue.",
          ],
          recap: [
            "Define tissue and organ. [4]",
            "Place cell, organism, organ system, organ and tissue in order of increasing complexity. [5]",
            "Explain why a leaf is an organ but xylem is a tissue. [3]",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "Movement In and Out of Cells",
      section: "3. Movement In and Out of Cells",
      topic: "Core Topic 3",
      intro: "Core revision notes for **Topic 3: Movement In and Out of Cells**. Understand diffusion, osmosis and active transport, their gradients, energy requirements and biological examples.",
      subheadings: [
        {
          title: "Diffusion",
          body: "**Diffusion is the net movement of particles from a region of their higher concentration to a region of their lower concentration, down a concentration gradient, as a result of their random movement.**\n\nParticles move randomly in both directions. More particles initially move from the higher concentration, so the overall or **net** movement is down the gradient. At equal concentrations, random movement continues but there is no net movement.",
          figure: "![Labelled comparison of diffusion, osmosis and active transport across a cell membrane](/notes/biology-core/core-03-membrane-transport.svg)",
          groups: [
            {
              subTitle: "Biological examples",
              bullets: [
                "Oxygen diffuses from alveolar air into blood, where its concentration is lower.",
                "Carbon dioxide diffuses from respiring cells into the blood.",
                "Carbon dioxide enters a photosynthesising leaf through stomata and diffuses to mesophyll cells.",
              ],
            },
          ],
          examinerTips: [
            "Include **net movement**, **higher to lower concentration** and **random movement** in a full definition.",
            "Diffusion does not require a membrane and does not use energy released by respiration.",
          ],
          commonMistakes: [
            "Saying that all particle movement stops at equilibrium.",
            "Calling diffusion active because particles have kinetic energy; the cell does not supply respiratory energy for diffusion.",
          ],
          recap: [
            "Define diffusion. [3]",
            "Explain the direction of oxygen movement between an alveolus and a blood capillary. [3]",
            "Describe particle movement when two regions have reached equal concentration. [2]",
          ],
        },
        {
          title: "Factors Affecting the Rate of Diffusion",
          body: "The rate of diffusion changes when the gradient, particle movement or exchange surface changes.",
          groups: [
            {
              bullets: [
                "**Concentration gradient:** a steeper gradient gives faster net movement.",
                "**Temperature:** higher temperature gives particles more kinetic energy, so they move faster.",
                "**Surface area:** a larger area allows more particles to cross in the same time.",
                "**Diffusion distance:** a shorter distance, such as a thin membrane, gives faster diffusion.",
              ],
            },
            {
              subTitle: "Adaptations of exchange surfaces",
              bullets: [
                "Alveoli provide a large surface area and thin walls, with ventilation and blood flow maintaining gradients.",
                "Villi and microvilli increase the surface area for absorption in the small intestine.",
                "Spongy mesophyll air spaces and stomata provide pathways for gas diffusion in leaves.",
              ],
            },
          ],
          examinerTips: [
            "When a factor is worth two marks, name it and explain how it changes particle movement or the number crossing per unit time.",
          ],
          commonMistakes: [
            "Saying that a thicker membrane speeds diffusion.",
            "Confusing ventilation with diffusion; ventilation moves air, while diffusion moves particles down a gradient.",
          ],
          recap: [
            "State four factors that affect diffusion rate. [4]",
            "Explain why the rate of diffusion increases with temperature. [2]",
            "Explain how two alveolar adaptations increase oxygen uptake. [4]",
          ],
        },
        {
          title: "Osmosis and Water Potential",
          body: "**Osmosis is the net movement of water molecules from a region of higher water potential (a dilute solution) to a region of lower water potential (a concentrated solution) through a partially permeable membrane.**\n\nPure water has the highest water potential. Adding solute lowers water potential. A partially permeable membrane allows water through but restricts many solute particles.",
          groups: [
            {
              subTitle: "Effects on cells",
              bullets: [
                "**Plant cell in a dilute solution:** water enters, the vacuole expands and the cell becomes turgid; the wall prevents bursting.",
                "**Plant cell in a concentrated solution:** water leaves, the vacuole shrinks and the membrane may pull away from the wall; the cell is plasmolysed.",
                "**Animal cell in a dilute solution:** water enters and the cell may swell and burst because it has no cell wall.",
                "**Animal cell in a concentrated solution:** water leaves and the cell shrinks.",
                "**Equal water potential:** no net water movement, although water molecules still cross in both directions.",
              ],
            },
          ],
          examinerTips: [
            "Always refer to **water potential** or clearly identify the dilute and concentrated solutions; do not say water moves from high to low solute concentration without explaining.",
            "Use ‘turgid’ and ‘plasmolysed’ for plant cells, not for animal cells.",
          ],
          commonMistakes: [
            "Saying that salt or sugar moves by osmosis; osmosis refers to water only.",
            "Forgetting that osmosis requires a partially permeable membrane.",
          ],
          recap: [
            "Define osmosis. [4]",
            "Explain what happens to a plant cell placed in pure water. [4]",
            "Explain why an animal cell may burst in pure water but a plant cell usually does not. [3]",
          ],
        },
        {
          title: "Investigating Osmosis in Plant Tissue",
          body: "Equal-sized potato cylinders can be placed in a range of sucrose concentrations. Measure their initial masses, leave them for the same time, blot and reweigh them. Water entering cells increases mass; water leaving decreases mass.",
          groups: [
            {
              subTitle: "Method and variables",
              bullets: [
                "Use the same potato, cylinder diameter and length, solution volume, temperature and immersion time.",
                "Blot each cylinder in a consistent way before weighing to remove surface solution.",
                "Calculate **percentage change in mass = change in mass ÷ initial mass × 100%**.",
                "Repeat at each concentration and calculate a mean to improve reliability.",
              ],
            },
            {
              subTitle: "Interpreting results",
              bullets: [
                "A positive percentage change means the external solution had higher water potential than the tissue.",
                "A negative change means the external solution had lower water potential.",
                "The concentration at zero percentage change estimates where external solution and cell sap have equal water potential.",
              ],
            },
          ],
          examinerTips: [
            "Use percentage change rather than mass change alone so cylinders with slightly different starting masses can be compared fairly.",
          ],
          commonMistakes: [
            "Forgetting to blot cylinders before measuring final mass.",
            "Changing both temperature and sucrose concentration, so the cause of the result is unclear.",
          ],
          recap: [
            "Describe how to investigate the effect of sucrose concentration on potato tissue. [6]",
            "A cylinder gains 0.30 g from an initial mass of 3.00 g. Calculate its percentage change in mass. [2]",
            "Explain the meaning of zero percentage change in mass. [2]",
          ],
        },
        {
          title: "Active Transport",
          body: "**Active transport is the movement of particles through a cell membrane from a region of lower concentration to a region of higher concentration, against a concentration gradient, using energy released by respiration.** Carrier proteins in the membrane move specific particles.",
          groups: [
            {
              subTitle: "Required examples",
              bullets: [
                "Root hair cells absorb mineral ions such as nitrate from soil even when the ion concentration is higher inside the cell.",
                "Epithelial cells of the small intestine can absorb glucose when its concentration is higher in the blood than in the intestine.",
                "Cells carrying out active transport often contain many mitochondria to release energy by aerobic respiration.",
              ],
            },
          ],
          examinerTips: [
            "State both **against the concentration gradient** and **energy released by respiration**.",
            "Water uptake by roots is osmosis; mineral-ion uptake can be active transport.",
          ],
          commonMistakes: [
            "Describing active transport as movement from high to low concentration.",
            "Saying that energy comes directly from sunlight or food rather than respiration.",
          ],
          recap: [
            "Define active transport. [4]",
            "Explain how a root hair cell absorbs nitrate ions from very dilute soil water. [3]",
            "Compare diffusion and active transport in terms of gradient and energy. [4]",
          ],
        },
      ],
    },
    {
      number: 4,
      title: "Biological Molecules",
      section: "4. Biological Molecules",
      topic: "Core Topic 4",
      intro: "Core revision notes for **Topic 4: Biological Molecules**. Learn the elements, smaller units and functions of carbohydrates, lipids and proteins, together with the required food tests.",
      subheadings: [
        {
          title: "Elements and Smaller Units",
          body: "Biological molecules are built from smaller chemical units. Knowing the elements and building blocks helps explain their properties and the results of food tests.\n\n| Molecule group | Chemical elements | Smaller units |\n| --- | --- | --- |\n| Carbohydrates | carbon, hydrogen and oxygen | simple sugars such as glucose |\n| Lipids (fats and oils) | carbon, hydrogen and oxygen | fatty acids and glycerol |\n| Proteins | carbon, hydrogen, oxygen and nitrogen; some also contain sulfur | amino acids |",
          figure: "![Labelled biological molecules diagram showing glucose units, a lipid and a folded amino-acid chain](/notes/biology-core/core-04-biological-molecules.svg)",
          groups: [
            {
              bullets: [
                "Large carbohydrates such as starch, glycogen and cellulose are made from many glucose units.",
                "A lipid contains one glycerol molecule joined to fatty acids; it is not a long repeating chain.",
                "A protein is a chain of amino acids folded into a specific three-dimensional shape.",
              ],
            },
          ],
          examinerTips: [
            "Nitrogen is the essential extra element in proteins; sulfur occurs only in some proteins.",
          ],
          commonMistakes: [
            "Including nitrogen in every carbohydrate or lipid.",
            "Calling fatty acids and glycerol the building blocks of protein.",
          ],
          recap: [
            "State the elements found in carbohydrates and proteins. [5]",
            "Name the smaller units that make lipids and proteins. [3]",
            "Explain why plants need nitrate ions to make proteins. [2]",
          ],
        },
        {
          title: "Carbohydrates",
          body: "Carbohydrates include **simple sugars**, **disaccharides** and **polysaccharides**. Glucose is an important respiratory substrate. Sucrose transports carbohydrate in plants. Starch and glycogen are storage molecules, while cellulose strengthens plant cell walls.",
          groups: [
            {
              bullets: [
                "**Glucose:** used in respiration to release energy.",
                "**Starch:** insoluble storage carbohydrate in plants; its insolubility prevents it affecting water potential.",
                "**Glycogen:** storage carbohydrate in animals, especially in liver and muscle.",
                "**Cellulose:** forms strong fibres in plant cell walls and provides dietary fibre.",
                "**Sucrose:** soluble transport sugar moved through phloem.",
              ],
            },
          ],
          examinerTips: [
            "For a storage-molecule question, link insolubility with no effect on osmosis or water potential.",
          ],
          commonMistakes: [
            "Calling starch a simple sugar.",
            "Giving cellulose as the plant's main energy store instead of starch.",
          ],
          recap: [
            "State two functions of glucose in a plant. [2]",
            "Explain why starch is a suitable storage molecule. [3]",
            "Compare the roles of starch and cellulose. [2]",
          ],
        },
        {
          title: "Lipids and Proteins",
          body: "Lipids are insoluble in water and provide a concentrated energy store, insulation and waterproofing. Proteins have structural and functional roles determined by their amino-acid sequence and folded shape.",
          groups: [
            {
              subTitle: "Functions of lipids",
              bullets: [
                "Long-term energy storage in adipose tissue and seeds.",
                "Insulation beneath the skin and around some organs.",
                "Waterproofing in waxy plant cuticles.",
                "Formation of cell membranes.",
              ],
            },
            {
              subTitle: "Functions of proteins",
              bullets: [
                "**Enzymes** catalyse metabolic reactions; **antibodies** help defend against pathogens.",
                "**Haemoglobin** transports oxygen; **collagen** provides structural strength.",
                "Proteins are needed for growth and repair and can act as hormones or membrane carriers.",
              ],
            },
          ],
          examinerTips: [
            "Use named protein examples with their functions rather than writing ‘protein is used for cells’.",
          ],
          commonMistakes: [
            "Saying that lipid is soluble in water.",
            "Assuming that proteins are only used for growth; enzymes, antibodies and haemoglobin have other roles.",
          ],
          recap: [
            "State three functions of lipids. [3]",
            "Give four functions of proteins with one named example for each. [4]",
            "Explain why a protein's shape is important to its function. [2]",
          ],
        },
        {
          title: "Food Tests",
          body: "Food tests use a specific reagent and observation. Always state both the **positive result** and any essential conditions.\n\n| Substance | Method | Positive result |\n| --- | --- | --- |\n| Reducing sugar | add Benedict's solution and heat in a water bath | blue becomes green, yellow, orange or brick-red precipitate depending on concentration |\n| Starch | add iodine solution | brown/yellow becomes blue-black |\n| Protein | add biuret reagent | blue becomes purple/lilac |\n| Lipid | mix with ethanol, then add to water | cloudy white emulsion forms |\n| Vitamin C | add food sample to blue DCPIP solution | DCPIP changes from blue to colourless |",
          groups: [
            {
              subTitle: "Safe and reliable testing",
              bullets: [
                "Use a water bath for Benedict's test rather than heating the tube directly with a flame.",
                "Ethanol is flammable: keep it away from naked flames and use a water bath when warming is required.",
                "Include a control with water or a sample known not to contain the substance for comparison.",
                "Use equal sample and reagent volumes when comparing different foods.",
              ],
            },
          ],
          examinerTips: [
            "‘Benedict's turns red’ is incomplete without heating and the presence of a reducing sugar.",
            "For the lipid test, the white emulsion appears after the ethanol mixture is added to water.",
          ],
          commonMistakes: [
            "Confusing iodine with Benedict's solution.",
            "Reporting biuret as blue for a positive protein result; blue is the negative result.",
          ],
          recap: [
            "Describe how to test a food sample for reducing sugar. [4]",
            "State the positive result for starch, protein and lipid tests. [3]",
            "Describe how DCPIP is used to compare vitamin C concentration in two fruit juices. [4]",
          ],
        },
      ],
    },
    {
      number: 5,
      title: "Enzymes",
      section: "5. Enzymes",
      topic: "Core Topic 5",
      intro: "Core revision notes for **Topic 5: Enzymes** for Cambridge IGCSE Biology (0610/0970). Enzymes are biological catalysts composed of proteins that speed up metabolic reactions necessary to sustain life without being changed by the reaction.",
      subheadings: [
        {
          title: "Catalysts and Enzymes as Biological Catalysts",
          body: "A **catalyst** is a substance that increases the rate of a chemical reaction and is not changed by the reaction. **Enzymes** are proteins that function as biological catalysts involved in all metabolic reactions.\n\nWithout enzymes, metabolic reactions in living organisms would occur far too slowly to sustain life. Enzymes provide a reaction rate fast enough to support living processes at body temperatures.",
          figure: "![Core enzymes diagram showing biological catalyst action, active site lock-and-key model, and temperature and pH effects](/notes/biology-core/core-05-enzymes.svg)",
          groups: [
            {
              subTitle: "Key definitions for enzymes",
              bullets: [
                "**Catalyst:** a substance that increases the rate of a chemical reaction and is not changed by the reaction.",
                "**Enzyme:** a protein that functions as a biological catalyst in metabolic reactions.",
                "**Importance to life:** ensures reactions occur fast enough to sustain life without needing damaging high temperatures.",
                "Enzymes are specific: each enzyme catalyses only one particular chemical reaction.",
              ],
            },
          ],
          examinerTips: [
            "Always mention both parts of the catalyst definition: increases reaction rate AND remains unchanged at the end.",
            "State that enzymes are proteins if asked what group of biological molecules they belong to.",
          ],
          commonMistakes: [
            "Saying enzymes are living organisms or cells. Enzymes are protein molecules.",
            "Saying enzymes get 'used up' or 'killed'. They are not consumed in the reaction and cannot be killed because they are not alive.",
          ],
          recap: [
            "Define the term catalyst. [2]",
            "Describe what an enzyme is and state what type of biological molecule it is. [2]",
            "Explain why enzymes are essential for living organisms. [2]",
          ],
        },
        {
          title: "Enzyme Action and the Active Site",
          body: "Enzyme action depends on the shape of the enzyme's **active site** being **complementary** to its **substrate**.\n\nThe substrate enters the active site of the enzyme, forming an enzyme–substrate complex. The reaction takes place, converting the substrate into **products**, which are then released from the active site, leaving the enzyme unchanged and ready to bind another substrate molecule.",
          groups: [
            {
              subTitle: "Lock-and-key model of enzyme action",
              bullets: [
                "The **substrate** has a specific 3D shape that is complementary to the enzyme's **active site**.",
                "The substrate fits into the active site like a key into a lock, forming an **enzyme-substrate complex**.",
                "The reaction occurs and converts the substrate into **products**.",
                "The products leave the active site, and the enzyme is free to catalyse further reactions.",
              ],
            },
          ],
          examinerTips: [
            "Use the term **complementary shape** rather than saying the substrate and active site have the 'same' shape.",
            "Clearly distinguish between substrate (reactant entering) and products (substances produced).",
          ],
          commonMistakes: [
            "Stating that the substrate and active site have the identical shape. They fit together like a key in a lock, so their shapes are complementary, not identical.",
            "Confusing the enzyme with the substrate.",
          ],
          recap: [
            "Describe how an enzyme converts a substrate into products with reference to the active site. [3]",
            "Explain why an enzyme can only act on one specific substrate. [2]",
          ],
        },
        {
          title: "Effects of Temperature and pH on Enzyme Activity",
          body: "Enzyme activity is influenced by **temperature** and **pH**.\n\nAs temperature increases towards the **optimum temperature**, enzyme and substrate molecules gain kinetic energy, move faster, and collide more frequently, increasing the reaction rate. Beyond the optimum temperature (typically around 37 °C in humans), heat causes the enzyme protein to lose its 3D shape—the active site changes shape so the substrate can no longer fit. The enzyme is **denatured**.\n\nEach enzyme also has an **optimum pH** (e.g. pH 2 for stomach protease pepsin, pH 7 for salivary amylase). Extreme changes in pH away from the optimum alter the shape of the active site and cause **denaturation**.",
          groups: [
            {
              subTitle: "Temperature effects",
              bullets: [
                "**Low temperatures:** low kinetic energy, fewer collisions, slow reaction rate (enzymes are inactive but not denatured).",
                "**Increasing temperature:** molecules gain kinetic energy and collide more frequently, increasing reaction rate.",
                "**Optimum temperature:** the temperature at which the enzyme works fastest (approx. 37 °C for human enzymes).",
                "**High temperatures (above optimum):** shape of the active site changes permanently so substrate cannot bind; the enzyme is **denatured**.",
              ],
            },
            {
              subTitle: "pH effects",
              bullets: [
                "**Optimum pH:** the pH at which enzyme activity is at its highest.",
                "**Deviation from optimum pH:** active site shape changes, reducing activity; extreme pH leads to permanent denaturation.",
              ],
            },
          ],
          examinerTips: [
            "Never write that an enzyme 'dies' or is 'killed' at high temperatures or extreme pH. Always use the term **denatured** and explain that the active site has changed shape.",
            "When describing a graph, quote values with units for the optimum point and state the direction of change before and after.",
          ],
          commonMistakes: [
            "Saying that enzymes denature at low temperatures. At 0 °C enzymes are just inactive due to low kinetic energy; denaturation occurs at high temperatures.",
            "Writing that the enzyme dissolves or melts.",
          ],
          recap: [
            "Define the term optimum temperature. [1]",
            "Describe what happens to an enzyme when it is heated beyond its optimum temperature. [3]",
            "Explain why salivary amylase stops working when it reaches the stomach. [2]",
          ],
        },
      ],
    },
    {
      number: 6,
      title: "Plant Nutrition",
      section: "6. Plant Nutrition",
      topic: "Core Topic 6",
      intro: "Core revision notes for **Topic 6: Plant Nutrition** for Cambridge IGCSE Biology (0610/0970). Green plants are autotrophic organisms that make their own food through photosynthesis, trapping light energy using chlorophyll and using carbohydrates for energy, structural support, and storage.",
      subheadings: [
        {
          title: "Photosynthesis and the Word Equation",
          body: "**Photosynthesis** is the process by which plants synthesise carbohydrates from raw materials using energy from light.\n\nPlants absorb carbon dioxide from the air and water from the soil. In the presence of sunlight and **chlorophyll**, these raw materials are converted into glucose and oxygen.",
          figure: "![Core plant nutrition diagram showing photosynthesis word equation, chloroplast, and carbohydrate storage and uses](/notes/biology-core/core-06-plant-nutrition.svg)",
          groups: [
            {
              subTitle: "The word equation for photosynthesis",
              bullets: [
                "**carbon dioxide + water → glucose + oxygen** (in the presence of **light** and **chlorophyll**).",
                "Raw materials: **carbon dioxide** (diffuses into leaves via stomata) and **water** (absorbed by roots from soil).",
                "Products: **glucose** (carbohydrate used for energy and synthesis) and **oxygen** (released as a by-product or used in respiration).",
              ],
            },
            {
              subTitle: "Role of chlorophyll",
              bullets: [
                "Chlorophyll is a **green pigment** found inside **chloroplasts** in plant cells.",
                "Chlorophyll **transfers energy from light into energy in chemicals**, for the synthesis of carbohydrates.",
              ],
            },
          ],
          examinerTips: [
            "For Core papers, write the exact **word equation**: do not write chemical formulas unless specifically asked, and ensure you include light and chlorophyll over/under the arrow.",
            "State clearly that chlorophyll absorbs light energy and transfers it into chemical energy stored in glucose.",
          ],
          commonMistakes: [
            "Writing sunlight or heat as a reactant rather than a form of energy trapped by chlorophyll.",
            "Confusing chloroplasts (organelles) with chlorophyll (the green pigment inside them).",
          ],
          recap: [
            "Define photosynthesis. [2]",
            "State the word equation for photosynthesis. [2]",
            "State the location and function of chlorophyll in a plant leaf. [2]",
          ],
        },
        {
          title: "Subsequent Use and Storage of Carbohydrates",
          body: "The glucose produced in photosynthesis has several vital uses and fates in the plant:\n\n- **Starch:** glucose is converted into insoluble starch and stored in leaves, roots, tubers, and seeds.\n- **Cellulose:** used to build strong plant cell walls.\n- **Glucose:** used directly in cellular respiration to release energy.\n- **Sucrose:** converted into soluble sucrose for transport through the phloem to other parts of the plant.\n- **Nectar:** sweet sugar solution secreted in flowers to attract insects for pollination.",
          groups: [
            {
              subTitle: "Summary of the 5 carbohydrate fates",
              bullets: [
                "**(a) Starch:** stored as an insoluble energy store; being insoluble, it does not affect the water potential of cells.",
                "**(b) Cellulose:** polymer of glucose that forms tough microfibrils in plant cell walls for structural support.",
                "**(c) Glucose:** broken down in respiration in mitochondria to release energy for metabolic processes.",
                "**(d) Sucrose:** transport form of sugar moved through phloem sieve tubes to growing points and storage organs.",
                "**(e) Nectar:** sugary liquid produced in nectaries to attract pollinating insects like bees and butterflies.",
              ],
            },
          ],
          examinerTips: [
            "Remember the 5 specific uses listed in the syllabus: starch, cellulose, glucose, sucrose, and nectar.",
            "Explain why plants store starch rather than glucose: starch is insoluble so it does not draw water into cells by osmosis.",
          ],
          commonMistakes: [
            "Stating that sucrose is stored in large amounts instead of starch.",
            "Claiming that plants only respire at night; plants respire all the time using glucose.",
          ],
          recap: [
            "List four uses of the carbohydrates produced during photosynthesis. [4]",
            "Explain why glucose is converted to starch for storage in plant cells. [2]",
            "Name the carbohydrate transported in phloem and the carbohydrate in cell walls. [2]",
          ],
        },
        {
          title: "Mineral Requirements: Nitrate and Magnesium Ions",
          body: "In addition to carbon dioxide and water, plants need mineral ions absorbed by root hair cells from the soil solution for healthy growth.\n\n- **Nitrate ions:** needed for making **amino acids**, which are joined together to form **proteins** for cell growth and repair. Deficiency causes stunted growth and yellow leaves.\n- **Magnesium ions:** needed for making **chlorophyll**. Deficiency causes leaves to turn yellow (chlorosis), severely reducing photosynthesis.",
          groups: [
            {
              subTitle: "Essential plant mineral ions",
              bullets: [
                "**Nitrate ions:** provide nitrogen needed to synthesise amino acids and proteins; deficiency leads to stunted growth.",
                "**Magnesium ions:** form the central atom of the chlorophyll molecule; deficiency causes yellowing between leaf veins (chlorosis) and reduced photosynthesis.",
                "Both ions are absorbed by active transport and diffusion through root hair cells.",
              ],
            },
          ],
          examinerTips: [
            "Link nitrate directly to amino acids / proteins and growth; link magnesium directly to chlorophyll and photosynthesis.",
            "State the visible symptom of deficiency if asked: yellow leaves for magnesium deficiency.",
          ],
          commonMistakes: [
            "Confusing the roles of magnesium and nitrate ions.",
            "Saying nitrate is used to make carbohydrates (carbohydrates only contain carbon, hydrogen and oxygen).",
          ],
          recap: [
            "Explain why plants require nitrate ions. [2]",
            "Describe the symptom shown by a plant grown in a culture solution lacking magnesium ions. [2]",
          ],
        },
      ],
    },
    {
      number: 7,
      title: "Human Nutrition",
      section: "7. Human Nutrition",
      topic: "Core Topic 7",
      intro: "Core revision notes for **Topic 7: Human Nutrition** for Cambridge IGCSE Biology (0610/0970), covering balanced diet, the human digestive system, physical digestion and teeth, chemical digestion by enzymes, and nutrient and water absorption.",
      subheadings: [
        {
          title: "Diet and Balanced Nutrition",
          body: "A **balanced diet** contains all seven dietary nutrients in the correct proportions to maintain health and support energy needs, growth, and repair.\n\nThe principal dietary nutrients are:\n- **Carbohydrates:** principal energy source (e.g. rice, bread, potatoes, pasta).\n- **Fats and oils (lipids):** long-term energy store, thermal insulation beneath skin, cell membranes (e.g. butter, oil, nuts).\n- **Proteins:** needed for growth and tissue repair, making enzymes and antibodies (e.g. meat, fish, eggs, beans).\n- **Vitamins:**\n  - **Vitamin C:** maintains healthy skin, blood vessels and gums; deficiency causes **scurvy** (bleeding gums, slow wound healing). Sources: citrus fruits, fresh vegetables.\n  - **Vitamin D:** helps absorb calcium for strong bones and teeth; deficiency causes **rickets** (soft, deformed bones). Sources: oily fish, egg yolk, dairy, sunlight on skin.\n- **Mineral ions:**\n  - **Calcium:** needed for strong bones and teeth, and blood clotting (e.g. milk, cheese). Deficiency also leads to rickets.\n  - **Iron:** needed to make **haemoglobin** in red blood cells to transport oxygen (e.g. red meat, liver, spinach). Deficiency causes anaemia (fatigue, lack of energy).\n- **Fibre (roughage):** indigestible plant material (cellulose) that provides bulk for the muscles of the alimentary canal to push against during peristalsis, preventing constipation (e.g. wholemeal bread, fruit, vegetables).\n- **Water:** solvent for chemical reactions, transport medium for blood and urine, and temperature regulation through sweating.",
          figure: "![Core human nutrition diagram showing alimentary canal, tooth structure, tooth types, and chemical digestion enzymes](/notes/biology-core/core-07-human-nutrition.svg)",
          groups: [
            {
              subTitle: "Causes of dietary deficiency diseases",
              bullets: [
                "**Scurvy:** caused by severe lack of **vitamin C** in the diet; symptoms include bleeding gums and poor wound healing.",
                "**Rickets:** caused by lack of **vitamin D** or **calcium**; symptoms include soft, weak bones that bend under body weight.",
              ],
            },
          ],
          examinerTips: [
            "Define a balanced diet as providing the correct proportions of ALL necessary nutrients, not just 'eating healthy food'.",
            "Learn the exact deficiency disease linked to vitamin C (scurvy) and vitamin D/calcium (rickets).",
          ],
          commonMistakes: [
            "Stating that fibre is digested or absorbed; fibre passes through the gut undigested to provide bulk.",
            "Confusing iron (for haemoglobin) with calcium (for bones and teeth).",
          ],
          recap: [
            "Define the term balanced diet. [2]",
            "State the dietary importance and one food source of vitamin C, vitamin D, calcium and iron. [8]",
            "Name the deficiency diseases caused by a lack of vitamin C and vitamin D. [2]",
          ],
        },
        {
          title: "The Digestive System and its Organs",
          body: "The digestive system consists of the **alimentary canal** (a continuous tube from mouth to anus) and **associated organs**.\n\n- **Alimentary canal:** mouth, oesophagus, stomach, small intestine (duodenum and ileum), and large intestine (colon, rectum, anus).\n- **Associated organs:** salivary glands, pancreas, liver, and gall bladder.\n\nFive primary processes take place along the digestive tract:\n1. **Ingestion:** taking substances (e.g. food and drink) into the body through the mouth.\n2. **Digestion:** the breakdown of food into smaller pieces (physical) and insoluble molecules into soluble ones (chemical).\n3. **Absorption:** the movement of nutrients from the intestines into the blood.\n4. **Assimilation:** the uptake and use of nutrients by cells for energy, growth and repair.\n5. **Egestion:** the removal of undigested food from the body as faeces through the anus.",
          groups: [
            {
              subTitle: "Main organs of the digestive system",
              bullets: [
                "**Mouth:** ingestion, mechanical breakdown by teeth, chemical digestion of starch by salivary amylase.",
                "**Oesophagus:** muscular tube connecting mouth to stomach by peristalsis.",
                "**Stomach:** muscular bag containing hydrochloric acid (pH 1–2) and protease enzymes.",
                "**Small intestine:** divided into **duodenum** (first section, receives bile and pancreatic juice) and **ileum** (absorption of digested food).",
                "**Large intestine:** divided into **colon** (water absorption), **rectum** (stores faeces), and **anus** (sphincter for egestion).",
                "**Salivary glands:** secrete saliva containing amylase and mucus into mouth.",
                "**Liver:** produces bile; stores glycogen.",
                "**Gall bladder:** stores and concentrates bile before releasing it into the duodenum.",
                "**Pancreas:** secretes pancreatic juice containing amylase, protease, and lipase into the duodenum.",
              ],
            },
          ],
          examinerTips: [
            "Carefully distinguish between **ingestion** (eating), **absorption** (into blood), **assimilation** (use by cells), and **egestion** (faeces out).",
            "Never confuse egestion (expelling undigested dietary fibre) with excretion (removing metabolic waste products like urea and CO2).",
          ],
          commonMistakes: [
            "Listing the gall bladder or liver as part of the alimentary canal. Food does not pass through them; they are associated organs.",
            "Confusing egestion with excretion.",
          ],
          recap: [
            "Identify the sequence of organs food passes through from ingestion to egestion. [4]",
            "Define ingestion, absorption, assimilation, and egestion. [4]",
          ],
        },
        {
          title: "Physical Digestion and Human Teeth",
          body: "**Physical digestion** is the breakdown of food into smaller pieces without chemical change to the food molecules.\n\nIts primary function is to **increase the surface area** of food for the action of enzymes during chemical digestion.\n\nHumans have four types of teeth:\n- **Incisors (front):** chisel-shaped with sharp edges for biting and cutting food.\n- **Canines (sides):** pointed and sharp for tearing and piercing food.\n- **Premolars:** broad crown with ridges for crushing and grinding food.\n- **Molars (back):** large, broad crowns with multiple cusps for heavy crushing and grinding food.",
          groups: [
            {
              subTitle: "Structure of a human tooth",
              bullets: [
                "**Enamel:** the hard outer layer of the crown; hardest substance in the human body, protects against wear and tooth decay.",
                "**Dentine:** bone-like tissue beneath enamel, softer than enamel and surrounds the pulp cavity.",
                "**Pulp cavity:** central chamber containing living tissues, blood vessels (supply oxygen and nutrients) and nerves (detect temperature and pain).",
                "**Cement:** bone-like layer covering the root, anchoring the tooth into the jawbone.",
                "**Gums:** soft tissue covering the jawbone and sealing the neck of the tooth.",
                "**Jawbone and periodontal fibres:** anchor the tooth firmly in place.",
              ],
            },
          ],
          examinerTips: [
            "State that physical digestion increases surface area: this allows enzymes to collide with and chemically break down food molecules much faster.",
            "Label the tooth layers in order from outside in: enamel → dentine → pulp cavity.",
          ],
          commonMistakes: [
            "Saying that chewing breaks chemical bonds. Chewing only breaks food into smaller pieces (physical change).",
            "Forgetting that molars have broader surfaces than premolars.",
          ],
          recap: [
            "Define physical digestion and explain its purpose in relation to enzymes. [3]",
            "Name the four types of human teeth and state the function of each. [4]",
            "Describe the structure and functions of enamel, dentine and the pulp cavity. [3]",
          ],
        },
        {
          title: "Chemical Digestion and Digestive Enzymes",
          body: "**Chemical digestion** is the breakdown of large, insoluble molecules into small, soluble molecules so they can be absorbed through the wall of the small intestine into the bloodstream.\n\nThree main classes of digestive enzymes catalyse these reactions:\n- **Amylase:** breaks down **starch** into **simple reducing sugars** (maltose/glucose).\n  - Secreted by: **salivary glands** and **pancreas**.\n  - Acts in: **mouth** and **duodenum**.\n- **Protease:** breaks down **proteins** into **amino acids**.\n  - Secreted by: **stomach** (as pepsin) and **pancreas** (as trypsin).\n  - Acts in: **stomach** and **duodenum**.\n- **Lipase:** breaks down **fats and oils** into **fatty acids and glycerol**.\n  - Secreted by: **pancreas**.\n  - Acts in: **duodenum**.\n\n**Role of Hydrochloric Acid in Gastric Juice:**\nThe stomach produces gastric juice containing hydrochloric acid (HCl), giving a pH of 1 to 2. Its functions are:\n1. **Killing harmful microorganisms** (bacteria) in swallowed food.\n2. **Providing an acidic optimum pH** for gastric protease (pepsin) activity.",
          groups: [
            {
              subTitle: "Summary table of digestive enzymes",
              bullets: [
                "**Amylase:** Starch → Simple reducing sugars | Secreted by salivary glands & pancreas | Acts in mouth & duodenum.",
                "**Protease:** Protein → Amino acids | Secreted by stomach & pancreas | Acts in stomach & duodenum.",
                "**Lipase:** Fats & oils → Fatty acids & glycerol | Secreted by pancreas | Acts in duodenum.",
              ],
            },
          ],
          examinerTips: [
            "State both functions of hydrochloric acid in the stomach: kills bacteria AND provides the optimum acidic pH for pepsin.",
            "Memorise the exact substrate and products for amylase, protease, and lipase.",
          ],
          commonMistakes: [
            "Saying lipase acts in the stomach; lipase acts in the duodenum (small intestine).",
            "Stating that acid in the stomach breaks down food directly; it provides the correct pH for enzyme action.",
          ],
          recap: [
            "Define chemical digestion and explain why it is necessary. [3]",
            "Complete a table stating the substrate, products, site of secretion and site of action for amylase, protease and lipase. [6]",
            "State two functions of hydrochloric acid in gastric juice. [2]",
          ],
        },
        {
          title: "Absorption in the Alimentary Canal",
          body: "**Absorption** is the movement of nutrients from the lumen of the intestines across the epithelial lining into the bloodstream.\n\n- The **small intestine** is the primary region for the absorption of digested nutrients (glucose, amino acids, fatty acids, glycerol, vitamins and minerals).\n- **Water absorption:** water is absorbed from both the **small intestine** and the **colon**, but **most water in the alimentary canal is absorbed in the small intestine**.",
          groups: [
            {
              subTitle: "Core absorption facts",
              bullets: [
                "The small intestine absorbs digested food molecules by diffusion and active transport.",
                "Water is absorbed by osmosis in the small intestine and colon.",
                "Most water (around 80–90%) is absorbed in the small intestine before reaching the colon.",
              ],
            },
          ],
          examinerTips: [
            "A frequent multiple-choice and short-answer question asks where MOST water is absorbed: the answer is the **small intestine**, not the colon.",
            "The colon absorbs remaining water, converting undigested matter into solid faeces.",
          ],
          commonMistakes: [
            "Assuming all water is absorbed in the large intestine; the majority is absorbed in the small intestine.",
            "Confusing absorption with assimilation.",
          ],
          recap: [
            "Name the region of the alimentary canal where most absorption of digested food takes place. [1]",
            "State the two regions of the alimentary canal where water is absorbed, and identify which absorbs the most water. [3]",
          ],
        },
      ],
    },
    {
      number: 8,
      title: "Transport in Plants",
      section: "8. Transport in Plants",
      topic: "Core Topic 8",
      intro: "Core revision notes for **Topic 8: Transport in Plants** for Cambridge IGCSE Biology (0610/0970). Plants possess specialized vascular tissues—xylem and phloem—to transport water, mineral ions, sucrose, and amino acids throughout roots, stems, and leaves.",
      subheadings: [
        {
          title: "Plant Transport Systems: Xylem and Phloem",
          body: "Plants have two distinct transport tissues located in vascular bundles:\n\n- **Xylem:** transports **water and mineral ions** upwards from roots to stems and leaves, and provides **structural support** to the plant.\n- **Phloem:** transports **sucrose and amino acids** from leaves to other parts of the plant (such as growing shoots and storage roots).\n\n**Distribution of Xylem and Phloem:**\n- **Root (dicot):** xylem forms a central star/cross shape ('X'); phloem is located between the arms of the star.\n- **Stem (dicot):** vascular bundles arranged in an outer ring around the periphery; xylem on the inner side, phloem on the outer side.\n- **Leaf (dicot midrib):** vascular bundle in the midrib vein with xylem on the upper side (towards upper surface) and phloem on the lower side.",
          figure: "![Core plant transport diagram showing xylem and phloem distribution, water uptake pathway by root hair cells, and transpiration](/notes/biology-core/core-08-plant-transport.svg)",
          groups: [
            {
              subTitle: "Functions and positions comparison",
              bullets: [
                "**Xylem function:** transports water and dissolved mineral ions; provides mechanical support.",
                "**Phloem function:** transports sucrose and amino acids (soluble nutrients).",
                "**Root:** central xylem star with phloem between the arms.",
                "**Stem:** vascular bundles arranged in a ring; xylem inside, phloem outside.",
                "**Leaf:** xylem upper side of midrib, phloem lower side of midrib.",
              ],
            },
          ],
          examinerTips: [
            "In stem sections, remember that xylem is always located on the **inside** of the bundle and phloem is on the **outside**.",
            "In leaves, xylem is on the **upper** surface side and phloem is on the **lower** surface side.",
          ],
          commonMistakes: [
            "Swapping the positions of xylem and phloem in stem and leaf diagrams.",
            "Saying phloem transports glucose; phloem transports **sucrose**.",
          ],
          recap: [
            "State two functions of xylem tissue. [2]",
            "State the substances transported by phloem tissue. [2]",
            "Describe the arrangement of xylem and phloem in a dicotyledonous root and stem. [4]",
          ],
        },
        {
          title: "Water Uptake and Pathway through the Plant",
          body: "Water enters plants through **root hair cells** located near the tips of roots.\n\nRoot hair cells have a long, slender extension (the root hair) that provides a **large surface area** to increase the uptake of water and mineral ions from the soil solution.\n\n**Pathway of water through the plant:**\nSoil solution → **Root hair cells** → **Root cortex cells** → **Xylem of root** → **Xylem of stem** → **Xylem of leaf** → **Mesophyll cells** of leaf.",
          groups: [
            {
              subTitle: "The step-by-step water pathway",
              bullets: [
                "**1. Root hair cells:** absorb water by osmosis down a water potential gradient; large surface area speeds up uptake.",
                "**2. Root cortex cells:** water moves across root cortex cells towards the centre of the root.",
                "**3. Root xylem:** water enters xylem vessels in the root vascular cylinder.",
                "**4. Stem xylem:** water travels upwards through hollow xylem tubes into stems and branches.",
                "**5. Leaf xylem:** water enters the leaf veins through xylem vessels.",
                "**6. Mesophyll cells:** water leaves xylem vessels and enters spongy and palisade mesophyll cells.",
              ],
            },
          ],
          examinerTips: [
            "Memorise the exact 6-step pathway from the syllabus: root hair cells → root cortex cells → xylem of root → xylem of stem → xylem of leaf → mesophyll cells.",
            "Explain that the root hair's large surface area increases the rate of water absorption by osmosis.",
          ],
          commonMistakes: [
            "Omitting the root cortex cells from the pathway sequence.",
            "Confusing water uptake (osmosis) with mineral ion uptake (diffusion / active transport).",
          ],
          recap: [
            "Describe the function of root hair cells and explain how their structure is adapted for this function. [3]",
            "State the pathway taken by water from the soil to the mesophyll cells of a leaf. [6]",
          ],
        },
        {
          title: "Transpiration and Environmental Factors",
          body: "**Transpiration** is the loss of water vapour from leaves.\n\n**Mechanism of transpiration:**\n1. Water evaporates from the moist cell walls of the **mesophyll cells** into the internal air spaces within the leaf.\n2. The water vapour builds up and then **diffuses out of the leaf through the stomata** into the surrounding atmosphere down a concentration gradient.\n\n**Factors affecting transpiration rate:**\n- **Temperature:** higher temperature increases the kinetic energy of water molecules, causing faster evaporation and diffusion, which **increases transpiration rate**.\n- **Wind speed (air movement):** moving air blows away water vapour accumulating around the leaf surface, maintaining a steep concentration gradient between inside and outside, which **increases transpiration rate**.",
          groups: [
            {
              subTitle: "Investigating transpiration factors",
              bullets: [
                "**Increased temperature:** increases rate of transpiration (more kinetic energy, faster evaporation).",
                "**Increased wind speed:** increases rate of transpiration (removes boundary layer of humid air, steeper concentration gradient).",
                "**Decreased temperature / still air:** decreases rate of transpiration.",
              ],
            },
          ],
          examinerTips: [
            "State the definition of transpiration precisely: the **loss of water vapour from leaves**.",
            "Explain that water evaporates from mesophyll cells into air spaces, and diffuses through stomata as vapour.",
          ],
          commonMistakes: [
            "Defining transpiration as the loss of liquid water from leaves. It is the loss of **water vapour**.",
            "Saying wind blows water out of the stomata; wind removes water vapour from the leaf surface outside the stomata.",
          ],
          recap: [
            "Define transpiration. [2]",
            "Describe how water evaporates and leaves a plant leaf. [3]",
            "Describe and explain the effect of increasing temperature and wind speed on the rate of transpiration. [4]",
          ],
        },
      ],
    },
    {
      number: 9,
      title: "Transport in Animals",
      section: "9. Transport in Animals",
      topic: "Core Topic 9",
      intro: "Core revision notes for **Topic 9: Transport in Animals** for Cambridge IGCSE Biology (0610/0970). Mammals have a circulatory system composed of blood vessels, a muscular heart as a pump, and one-way valves that maintain unidirectional blood flow to supply tissues with oxygen and nutrients and remove metabolic wastes.",
      subheadings: [
        {
          title: "The Circulatory System and the Mammalian Heart",
          body: "The **circulatory system** is a system of blood vessels with a pump (the heart) and valves to ensure **one-way flow** of blood.\n\nBlood is pumped **away from the heart in arteries** and returns **to the heart in veins**.\n\n**Structure of the Mammalian Heart:**\n- **Four chambers:** two upper **atria** (right atrium and left atrium) that receive blood, and two lower **ventricles** (right ventricle and left ventricle) that pump blood out.\n- **Muscular wall:** thick cardiac muscle; the **left ventricle wall is thicker** than the right ventricle wall because it must pump blood at higher pressure all around the body.\n- **Septum:** a central muscular dividing wall that separates oxygenated blood on the left side from deoxygenated blood on the right side.\n- **One-way valves:** atrioventricular and semilunar valves prevent the backflow of blood during heartbeats.\n- **Coronary arteries:** branch from the aorta to supply the heart muscle tissue with oxygen and glucose.",
          figure: "![Core animal transport diagram showing mammalian heart anatomy, blood vessel comparison, and blood components](/notes/biology-core/core-09-animal-transport.svg)",
          groups: [
            {
              subTitle: "Heartbeat mechanism and monitoring",
              bullets: [
                "**Contraction of atria:** pushes blood through open valves into relaxed ventricles.",
                "**Contraction of ventricles:** pushes blood into arteries; valves close to prevent backflow into atria.",
                "**Heart monitoring methods:**\n  - **Electrocardiogram (ECG):** records electrical activity of heart muscle.\n  - **Pulse rate:** measures expansion of artery walls as blood is pumped through (e.g. at wrist or neck).\n  - **Listening to valve sounds (stethoscope):** 'lub-dub' sounds produced by closing valves.",
              ],
            },
          ],
          examinerTips: [
            "Remember the left side of the heart is drawn on the right side of the diagram (anatomical view).",
            "The left ventricle has a thicker muscular wall than the right ventricle because it pumps blood further (to the whole body, not just the lungs).",
          ],
          commonMistakes: [
            "Confusing left and right sides of the heart in diagrams.",
            "Saying arteries have valves; only veins (and the heart) have valves to prevent backflow.",
          ],
          recap: [
            "Describe the circulatory system and state why valves are needed. [2]",
            "Identify the four chambers of the heart and explain why the left ventricle wall is thicker than the right. [4]",
            "List three ways heart activity can be monitored. [3]",
          ],
        },
        {
          title: "Heart Rate, Physical Activity, and Coronary Heart Disease",
          body: "During physical activity, muscle cells require more energy for contraction and therefore respire faster. To supply more oxygen and glucose and remove extra carbon dioxide, **heart rate increases**.\n\n**Coronary Heart Disease (CHD):**\nCHD occurs when **coronary arteries become blocked** by fatty deposits (atheroma/cholesterol plaques), reducing blood flow to cardiac muscle cells. This deprives the heart muscle of oxygen and glucose, leading to chest pain (angina) or a heart attack.\n\n**Risk factors for CHD:**\n- **Diet:** high intake of saturated fats and cholesterol.\n- **Lack of exercise:** leading to higher blood pressure and weight gain.\n- **Stress:** raises blood pressure.\n- **Smoking:** nicotine raises blood pressure and damages artery walls.\n- **Genetic predisposition:** family history of CHD.\n- **Age:** risk increases with age.\n- **Sex:** males are statistically at higher risk than pre-menopausal females.\n\n**Preventing CHD:** regular aerobic exercise and a balanced diet low in saturated fats and salt reduce the risk.",
          groups: [
            {
              subTitle: "Summary of CHD risk factors and prevention",
              bullets: [
                "**Blockage mechanism:** cholesterol plaques narrow coronary arteries, reducing oxygen delivery to heart muscle.",
                "**Uncontrollable risk factors:** age, sex, genetic predisposition.",
                "**Controllable risk factors:** diet, physical inactivity, smoking, stress.",
                "**Role of diet:** eating less saturated animal fat and more fruit/vegetables prevents cholesterol buildup.",
                "**Role of exercise:** strengthens heart muscle, lowers resting blood pressure, and helps maintain healthy body mass.",
              ],
            },
          ],
          examinerTips: [
            "Distinguish between controllable risk factors (diet, smoking, exercise) and uncontrollable ones (genes, age, sex).",
            "When explaining why heart rate increases during exercise, always state: muscles need more energy → more aerobic respiration → need more oxygen and glucose.",
          ],
          commonMistakes: [
            "Saying exercise gives you oxygen; exercise increases the heart rate and breathing rate to deliver oxygen to muscles.",
            "Confusing coronary arteries (supply heart muscle) with main arteries (supply other organs).",
          ],
          recap: [
            "Explain why heart rate increases during physical activity. [3]",
            "Describe what causes coronary heart disease. [2]",
            "List four risk factors for coronary heart disease and discuss how diet and exercise reduce the risk. [6]",
          ],
        },
        {
          title: "Blood Vessels: Arteries, Veins, and Capillaries",
          body: "Blood travels through three main types of blood vessels, each adapted to its function:\n\n- **Arteries:** carry blood **away from the heart** at **high pressure**.\n  - Thick muscular and elastic wall to withstand and maintain high pressure; narrow lumen.\n- **Veins:** carry blood **back towards the heart** at **low pressure**.\n  - Thinner wall with less muscle and elastic tissue; wide lumen to offer low resistance; **valves present** to prevent backflow of blood.\n- **Capillaries:** microscopic vessels running through tissues for exchange of substances.\n  - Very thin walls (**one cell thick**) providing a short diffusion distance; narrow lumen.",
          groups: [
            {
              subTitle: "Main blood vessels connected to organs",
              bullets: [
                "**Heart:** **Vena cava** brings deoxygenated blood from body into right atrium; **Aorta** carries oxygenated blood from left ventricle to body; **Pulmonary artery** carries deoxygenated blood from right ventricle to lungs; **Pulmonary vein** brings oxygenated blood from lungs into left atrium.",
                "**Lungs:** **Pulmonary artery** brings blood to lungs; **Pulmonary vein** takes blood away from lungs.",
                "**Kidneys:** **Renal artery** carries blood containing oxygen and urea to kidney; **Renal vein** carries filtered blood away from kidney.",
              ],
            },
          ],
          examinerTips: [
            "Remember the mnemonic: **A**rtery = **A**way from heart; **V**ein = returns to heart (**in**).",
            "The pulmonary artery is the only artery carrying deoxygenated blood; the pulmonary vein is the only vein carrying oxygenated blood.",
          ],
          commonMistakes: [
            "Saying capillary walls are 'thin-celled' or made of cell walls. Capillaries have walls that are **one cell thick** made of endothelial cells.",
            "Confusing renal vessels (kidneys) with pulmonary vessels (lungs).",
          ],
          recap: [
            "Compare the structure of an artery and a vein in terms of wall thickness, lumen size and valves. [3]",
            "Explain how the structure of a capillary is adapted for exchange of materials with tissues. [2]",
            "Name the blood vessels that carry blood to and from the heart, lungs and kidneys. [6]",
          ],
        },
        {
          title: "Components and Functions of Blood",
          body: "Blood is a liquid tissue made up of four main components:\n\n1. **Red blood cells (erythrocytes):** biconcave discs with no nucleus; contain **haemoglobin**, a protein containing iron that binds oxygen to transport it from lungs to respiring tissues.\n2. **White blood cells (leukocytes):** larger cells with a nucleus; defend the body against pathogens by **phagocytosis** (engulfing and digesting pathogens) and **antibody production** (producing antibodies that bind to specific pathogens).\n3. **Platelets:** small cell fragments that trigger **blood clotting** at wound sites.\n4. **Plasma:** pale yellow liquid that transports blood cells, ions, soluble nutrients (glucose, amino acids), hormones, and carbon dioxide.\n\n**Roles of Blood Clotting:**\nBlood clotting is essential when blood vessels are damaged:\n- **Prevents blood loss** from the body.\n- **Prevents entry of pathogens** (bacteria and viruses) through the open wound.",
          groups: [
            {
              subTitle: "Blood components summary",
              bullets: [
                "**Red blood cells:** transport oxygen; contain haemoglobin; biconcave shape and no nucleus maximise oxygen-carrying capacity.",
                "**White blood cells:** immune defence; phagocytosis (ingesting bacteria) and antibody synthesis.",
                "**Platelets:** cell fragments involved in clotting to seal wounds.",
                "**Plasma:** liquid medium carrying blood cells, glucose, amino acids, ions, hormones, urea and CO2.",
              ],
            },
            {
              subTitle: "Importance of blood clotting",
              bullets: [
                "Forms a temporary plug and scab at wound sites.",
                "Prevents excessive blood loss and haemorrhage.",
                "Forms a physical barrier against pathogen entry, preventing infection.",
              ],
            },
          ],
          examinerTips: [
            "For Core papers, detailed chemical steps of clotting (fibrinogen to fibrin) are NOT required; state the functions: preventing blood loss and preventing pathogen entry.",
            "Identify red blood cells (numerous, biconcave, no nucleus) vs white blood cells (larger, fewer, have nucleus) in microscope diagrams.",
          ],
          commonMistakes: [
            "Stating that red blood cells fight disease or white blood cells carry oxygen.",
            "Saying platelets are complete cells; they are cell fragments.",
          ],
          recap: [
            "Name the four main components of blood and state the function of each. [8]",
            "Describe the adaptations of red blood cells for transporting oxygen. [3]",
            "State two reasons why blood clotting is important when a blood vessel is cut. [2]",
          ],
        },
      ],
    },
    {
      number: 10,
      title: "Diseases and Immunity",
      section: "10. Diseases and Immunity",
      topic: "Core Topic 10",
      intro: "Core revision notes for **Topic 10: Diseases and Immunity** for Cambridge IGCSE Biology (0610/0970). A pathogen is a disease-causing organism, and transmissible diseases can be passed from host to host directly or indirectly. The body uses physical and chemical barriers and white blood cells for defence, and hygiene, clean water, and waste control are essential to limit disease spread.",
      subheadings: [
        {
          title: "Pathogens and Transmissible Diseases",
          body: "A **pathogen** is a disease-causing organism (such as bacteria, viruses, fungi, and protoctists).\n\nA **transmissible disease** is a disease in which the pathogen can be passed from one host to another.\n\nPathogens can be transmitted between hosts in two primary ways:\n- **Direct contact:** transmission through direct physical contact, including through blood and other body fluids (e.g. sharing needles, sexual contact, direct skin-to-skin touch).\n- **Indirect transmission:** transmission without direct physical contact, including from contaminated surfaces, contaminated food and drinking water, animal vectors (such as houseflies or mosquitoes), and airborne droplets in the air (e.g. sneezing and coughing).",
          groups: [
            {
              subTitle: "Key definitions and modes of transmission",
              bullets: [
                "**Pathogen:** a disease-causing organism.",
                "**Transmissible disease:** a disease in which the pathogen can be passed from one host to another.",
                "**Direct transmission:** transfer of pathogens directly through blood or other body fluids.",
                "**Indirect transmission:** transfer via contaminated surfaces, contaminated food/water, animals/vectors, or airborne droplets.",
              ],
            },
          ],
          examinerTips: [
            "Always use the exact syllabus definition: a pathogen is a **disease-causing organism**.",
            "Distinguish direct contact (blood/body fluids) from indirect contact (air droplets, surfaces, food, water).",
          ],
          commonMistakes: [
            "Defining a pathogen as 'a disease'. A pathogen is the *organism* that causes the disease.",
            "Thinking airborne sneezing is direct contact. Sneezing into air is *indirect* transmission via droplets.",
          ],
          recap: [
            "Define the term pathogen. [1]",
            "Describe what is meant by a transmissible disease. [1]",
            "State two ways a pathogen can be transmitted directly and two ways indirectly. [4]",
          ],
        },
        {
          title: "Body Defences Against Pathogens",
          body: "The human body possesses mechanical, chemical, and cellular defences against pathogens:\n\n- **Skin:** physical outer barrier that covers the body and prevents pathogen entry; damaged skin is rapidly sealed by blood clots.\n- **Hairs in the nose:** mechanical trap that filters large dust particles and airborne microbes from entering the respiratory tract.\n- **Mucus:** sticky fluid produced by goblet cells in airways and digestive tracts to trap dust, pollen, and microorganisms.\n- **Stomach acid (hydrochloric acid):** low pH (pH 1–2) destroys and kills most swallowed bacteria and pathogens in food and drink.\n- **White blood cells:** cellular defence against pathogens that have entered the body, operating by **phagocytosis** (engulfing and digesting pathogens) and **antibody production** (producing antibodies that target and neutralise pathogens).",
          groups: [
            {
              subTitle: "Summary of body defences",
              bullets: [
                "**Skin:** unbroken physical barrier preventing entry.",
                "**Nose hairs:** trap airborne particles and microbes.",
                "**Mucus:** traps pathogens in the respiratory tract.",
                "**Stomach acid:** kills ingested bacteria.",
                "**White blood cells:** engulf pathogens (phagocytosis) and produce antibodies.",
              ],
            },
          ],
          examinerTips: [
            "Name the specific defence and state how it protects: e.g. stomach acid *kills* bacteria, nose hairs *trap* dust/microbes.",
            "For Core papers, describe white blood cells simply as carrying out phagocytosis and antibody production.",
          ],
          commonMistakes: [
            "Writing that stomach acid 'digests' bacteria. The acid kills them by denaturing their enzymes.",
            "Saying white blood cells 'eat' bacteria; use the term **phagocytosis** or **engulf**.",
          ],
          recap: [
            "Describe how the skin, nose hairs, and stomach acid protect the body against pathogens. [3]",
            "State two ways white blood cells defend the body against infection. [2]",
          ],
        },
        {
          title: "Controlling the Spread of Disease",
          body: "Controlling pathogen transmission requires systematic hygiene and public health measures:\n\n- **Clean water supply:** ensures drinking and cooking water is free from pathogens (such as the cholera bacterium); achieved by chlorination, filtration, and boiling.\n- **Hygienic food preparation:** keeping raw and cooked food separate, cooking meat thoroughly to kill bacteria, storing food in refrigerators to slow bacterial reproduction, and washing hands before handling food.\n- **Good personal hygiene:** regular hand washing with soap (especially after using the toilet), brushing teeth, and bathing to remove accumulated sweat, oils, and bacteria.\n- **Waste disposal:** disposing of domestic rubbish in sealed bins to prevent flies and vermin (vectors) from multiplying and carrying pathogens.\n- **Sewage treatment:** treating human waste and wastewater to remove pathogens and organic matter before discharging water safely into rivers or oceans.",
          groups: [
            {
              subTitle: "Public health and hygiene measures",
              bullets: [
                "**Clean water supply:** prevents waterborne disease outbreaks.",
                "**Hygienic food preparation:** prevents food poisoning and contamination.",
                "**Good personal hygiene:** prevents direct and indirect transfer of microbes.",
                "**Waste disposal:** removes breeding grounds for vectors like flies and rats.",
                "**Sewage treatment:** removes pathogens from domestic sewage (details of treatment stages not required).",
              ],
            },
          ],
          examinerTips: [
            "Remember: details of the biological or mechanical stages of sewage treatment are **not required** for Core candidates.",
            "Link each hygiene practice directly to reducing the spread or transmission of pathogens.",
          ],
          commonMistakes: [
            "Giving vague answers like 'keep clean'; specify washing hands with soap or boiling drinking water.",
            "Wasting exam time writing detailed descriptions of trickling filters or activated sludge in sewage treatment.",
          ],
          recap: [
            "Explain why a clean water supply and proper sewage treatment are important in controlling disease outbreaks. [4]",
            "State three rules of hygienic food preparation and explain how each prevents food poisoning. [3]",
          ],
        },
      ],
    },
    {
      number: 11,
      title: "Gas Exchange in Humans",
      section: "11. Gas Exchange in Humans",
      topic: "Core Topic 11",
      intro: "Core revision notes for **Topic 11: Gas Exchange in Humans** for Cambridge IGCSE Biology (0610/0970). Gas exchange occurs across the alveoli in the lungs by diffusion, inspired and expired air have distinct compositions tested with limewater, and physical activity increases the rate and depth of breathing.",
      subheadings: [
        {
          title: "Features of Gas Exchange Surfaces and Breathing System Anatomy",
          body: "The human lungs contain millions of microscopic air sacs called **alveoli**, which form the gas exchange surface where oxygen diffuses into blood and carbon dioxide diffuses out.\n\n**Features of Gas Exchange Surfaces:**\n1. **Large surface area:** millions of alveoli create a huge total surface area for diffusion.\n2. **Thin surface:** alveoli walls and capillary walls are each one cell thick, providing a very short diffusion pathway.\n3. **Good blood supply:** extensive network of capillaries constantly brings deoxygenated blood and takes away oxygenated blood, maintaining steep concentration gradients.\n4. **Good ventilation with air:** breathing in and out brings fresh oxygen-rich air and removes carbon dioxide, maintaining steep concentration gradients.\n\n**Parts of the Breathing System:**\n- **Larynx (voice box):** upper airway structure containing vocal cords.\n- **Trachea (windpipe):** airway leading down from throat, kept open by C-shaped cartilage rings.\n- **Bronchi (left and right bronchus):** two branches of trachea leading into each lung.\n- **Bronchioles:** smaller branching tubes within lungs delivering air to alveoli.\n- **Alveoli:** tiny air sacs where gas exchange occurs.\n- **Lungs:** pair of spongy organs enclosed in the thorax.\n- **Ribs:** bone cage protecting the lungs and heart.\n- **Intercostal muscles:** muscles between ribs that move the ribcage during breathing.\n- **Diaphragm:** muscular sheet separating thorax from abdomen, moves down during inspiration.",
          groups: [
            {
              subTitle: "Essential features of gas exchange surfaces",
              bullets: [
                "**Large surface area:** increases the total rate of gas diffusion.",
                "**Thin surface (one cell thick):** minimises diffusion distance.",
                "**Good blood supply:** maintains steep concentration gradients of O2 and CO2.",
                "**Good ventilation:** continually replenishes oxygen and removes carbon dioxide.",
              ],
            },
          ],
          examinerTips: [
            "State the 4 features clearly: large surface area, thin surface, good blood supply, and good ventilation.",
            "Trace the pathway of air: larynx → trachea → bronchi → bronchioles → alveoli.",
          ],
          commonMistakes: [
            "Saying alveoli have 'cell walls'. Alveoli are made of animal epithelial cells; they have cell membranes, not cell walls.",
            "Confusing bronchi (large branches) with bronchioles (tiny branches).",
          ],
          recap: [
            "State four features of gas exchange surfaces in humans. [4]",
            "List the structures through which inspired air travels to reach the gas exchange surface. [5]",
          ],
        },
        {
          title: "Composition of Inspired and Expired Air",
          body: "The air we breathe in (**inspired air**) differs from the air we breathe out (**expired air**) because gas exchange occurs in the alveoli:\n\n- **Oxygen:** inspired air contains ~21%, expired air contains ~16% (oxygen diffuses into blood for aerobic respiration).\n- **Carbon dioxide:** inspired air contains ~0.04%, expired air contains ~4% (carbon dioxide produced in respiration diffuses from blood into alveoli).\n- **Water vapour:** inspired air contains variable amounts, expired air is saturated with water vapour (evaporates from moist alveolar surfaces).\n\n**Testing for Carbon Dioxide using Limewater:**\nWhen air is bubbled through **limewater** (calcium hydroxide solution), carbon dioxide reacts with it to form calcium carbonate precipitate, turning the clear limewater **milky/cloudy**.\n- When expired air is bubbled through limewater, it turns milky very rapidly.\n- Inspired air takes much longer to show any change due to its much lower CO2 concentration.",
          groups: [
            {
              subTitle: "Comparison of inspired and expired air",
              bullets: [
                "**Oxygen:** 21% in inspired air → 16% in expired air (decreases).",
                "**Carbon dioxide:** 0.04% in inspired air → 4% in expired air (increases 100-fold).",
                "**Water vapour:** variable in inspired air → saturated in expired air (increases).",
                "**Nitrogen:** ~78% in both (unchanged because not used by the body).",
              ],
            },
            {
              subTitle: "Investigating CO2 with limewater",
              bullets: [
                "**Reagent:** clear colourless limewater.",
                "**Positive result:** turns cloudy/milky.",
                "Expired air turns limewater milky much more rapidly than inspired air.",
              ],
            },
          ],
          examinerTips: [
            "Learn the percentages for oxygen (21% to 16%) and carbon dioxide (0.04% to 4%).",
            "The test for carbon dioxide is bubbling through **limewater**, observing a change from **colourless to cloudy/milky**.",
          ],
          commonMistakes: [
            "Writing that expired air contains no oxygen; expired air still contains ~16% oxygen.",
            "Saying nitrogen is completely removed; nitrogen percentage remains unchanged at ~78%.",
          ],
          recap: [
            "Compare the composition of inspired and expired air for oxygen, carbon dioxide and water vapour. [3]",
            "Describe an experiment using limewater to show that expired air contains more carbon dioxide than inspired air. [4]",
          ],
        },
        {
          title: "Effect of Physical Activity on Rate and Depth of Breathing",
          body: "During physical activity, muscle cells contract more frequently and vigorously, requiring more energy.\n\nTo meet this demand:\n1. Muscle cells respire aerobically at a faster rate, consuming more oxygen and producing more carbon dioxide.\n2. Both the **rate of breathing** (breaths per minute) and the **depth of breathing** (volume per breath) increase significantly.\n3. Increased breathing rate and depth brings more oxygen into the blood and removes excess carbon dioxide faster.",
          groups: [
            {
              subTitle: "Effects of exercise on breathing",
              bullets: [
                "**Breathing rate increases:** more breaths taken each minute.",
                "**Breathing depth increases:** each breath is deeper, taking in and expelling larger volumes of air.",
                "**Biological reason:** supplies additional oxygen needed for faster respiration in active muscles, and removes excess carbon dioxide produced.",
              ],
            },
          ],
          examinerTips: [
            "Mention both **rate** (frequency) AND **depth** (volume per breath) when asked about changes in breathing during exercise.",
            "Link increased breathing directly to higher energy demand → increased aerobic respiration in muscles.",
          ],
          commonMistakes: [
            "Only mentioning rate and forgetting depth.",
            "Saying that breathing increases to give energy; breathing brings oxygen for respiration, which releases energy.",
          ],
          recap: [
            "Describe the effects of physical activity on breathing. [2]",
            "Explain why both the rate and depth of breathing increase during exercise. [3]",
          ],
        },
      ],
    },
    {
      number: 12,
      title: "Respiration",
      section: "12. Respiration",
      topic: "Core Topic 12",
      intro: "Core revision notes for **Topic 12: Respiration** for Cambridge IGCSE Biology (0610/0970). Respiration is the cellular release of energy from nutrient molecules; aerobic respiration requires oxygen and releases much more energy, while anaerobic respiration occurs without oxygen producing lactic acid in muscles or alcohol and CO2 in yeast.",
      subheadings: [
        {
          title: "Uses of Energy and the Effect of Temperature on Respiration in Yeast",
          body: "**Respiration** is the chemical process in cells that breaks down nutrient molecules (such as glucose) to release energy for metabolism.\n\n**Uses of Energy in Living Organisms:**\n- **Muscle contraction:** for movement and locomotion.\n- **Protein synthesis:** joining amino acids to build proteins.\n- **Cell division:** producing new cells for growth and repair.\n- **Active transport:** moving molecules and ions against concentration gradients.\n- **Growth:** increasing size and cell numbers.\n- **Passage of nerve impulses:** electrical transmission along neurones.\n- **Maintenance of a constant body temperature:** keeping core body temperature stable in mammals and birds.\n\n**Investigating Temperature on Respiration in Yeast:**\nYeast cells respire using enzymes. As temperature increases towards the optimum (around 35–40 °C), respiration rate increases because molecules have greater kinetic energy. Above the optimum, enzymes denature and respiration stops.",
          groups: [
            {
              subTitle: "Seven vital uses of energy in organisms",
              bullets: [
                "**Muscle contraction:** allows movement and heart pumping.",
                "**Protein synthesis:** builds enzymes, structural proteins, and antibodies.",
                "**Cell division:** mitosis for growth and tissue repair.",
                "**Active transport:** uptake of ions and nutrients against gradients.",
                "**Growth:** building new biomass.",
                "**Nerve impulse transmission:** coordinating rapid responses.",
                "**Maintaining body temperature:** generating metabolic heat in endotherms.",
              ],
            },
            {
              subTitle: "Temperature effect on yeast respiration",
              bullets: [
                "Measured by counting gas bubbles (CO2) released per minute from yeast in glucose solution.",
                "Rate rises with temperature up to the optimum due to increased enzyme-substrate collisions.",
                "Rate falls sharply above optimum as respiratory enzymes denature.",
              ],
            },
          ],
          examinerTips: [
            "Memorise at least four specific uses of energy: muscle contraction, active transport, protein synthesis, cell division.",
            "Never confuse respiration with breathing. Respiration happens inside every living cell.",
          ],
          commonMistakes: [
            "Saying respiration 'creates' energy. Energy is *released* or *transferred*, never created.",
            "Stating that yeast respiration increases indefinitely with temperature; it drops when enzymes denature.",
          ],
          recap: [
            "State four uses of energy in living organisms. [4]",
            "Describe how the effect of temperature on yeast respiration can be investigated. [4]",
          ],
        },
        {
          title: "Aerobic Respiration",
          body: "**Aerobic respiration** is the chemical reactions in cells that use oxygen to break down nutrient molecules to release energy.\n\nIt takes place in the **mitochondria** of eukaryotic cells and releases a large amount of energy per glucose molecule.\n\n**Word Equation for Aerobic Respiration:**\n**glucose + oxygen → carbon dioxide + water**",
          groups: [
            {
              subTitle: "Core facts about aerobic respiration",
              bullets: [
                "**Definition:** chemical reactions in cells that use oxygen to break down nutrient molecules to release energy.",
                "**Word equation:** glucose + oxygen → carbon dioxide + water.",
                "**Site:** occurs largely inside mitochondria.",
                "**Energy yield:** releases a large amount of energy per molecule of glucose.",
              ],
            },
          ],
          examinerTips: [
            "Write the exact word equation: glucose + oxygen → carbon dioxide + water.",
            "Note that chemical formulas are not required for Core candidates; write the chemical names in words.",
          ],
          commonMistakes: [
            "Writing energy as a chemical substance in the equation.",
            "Confusing aerobic respiration with photosynthesis (they have opposite overall chemical directions).",
          ],
          recap: [
            "Define aerobic respiration. [2]",
            "State the word equation for aerobic respiration. [2]",
          ],
        },
        {
          title: "Anaerobic Respiration",
          body: "**Anaerobic respiration** is the chemical reactions in cells that break down nutrient molecules to release energy **without using oxygen**.\n\n- It releases **much less energy per glucose molecule** than aerobic respiration because glucose is only partially broken down.\n\n**Anaerobic Respiration in Yeast (Alcoholic Fermentation):**\n**glucose → alcohol + carbon dioxide**\n- Used in baking (CO2 causes bread dough to rise) and brewing (alcohol production).\n\n**Anaerobic Respiration in Muscles during Vigorous Exercise:**\n**glucose → lactic acid**\n- Occurs when oxygen cannot be supplied fast enough to working muscles.",
          groups: [
            {
              subTitle: "Equations for anaerobic respiration",
              bullets: [
                "**In yeast (microorganisms):** glucose → alcohol + carbon dioxide.",
                "**In muscles (human):** glucose → lactic acid.",
                "**Energy comparison:** anaerobic respiration releases much less energy per glucose molecule than aerobic respiration.",
              ],
            },
          ],
          examinerTips: [
            "Do NOT include carbon dioxide in the muscle anaerobic equation; human muscle anaerobic respiration makes ONLY lactic acid.",
            "State that anaerobic respiration releases much less energy than aerobic respiration.",
          ],
          commonMistakes: [
            "Writing 'carbon dioxide' as a product of anaerobic respiration in muscles. Carbon dioxide is produced by yeast, NOT muscles.",
            "Confusing the products of yeast fermentation (alcohol + CO2) with human muscle anaerobic respiration (lactic acid).",
          ],
          recap: [
            "Define anaerobic respiration. [2]",
            "State the word equation for anaerobic respiration in yeast. [2]",
            "State the word equation for anaerobic respiration in muscles during vigorous exercise. [1]",
            "Compare the energy released per glucose molecule in aerobic vs anaerobic respiration. [1]",
          ],
        },
      ],
    },
    {
      number: 13,
      title: "Excretion in Humans",
      section: "13. Excretion in Humans",
      topic: "Core Topic 13",
      intro: "Core revision notes for **Topic 13: Excretion in Humans** for Cambridge IGCSE Biology (0610/0970). Excretion is the removal of metabolic waste products, toxic substances, and substances in excess of requirements from the body; the lungs excrete carbon dioxide, and the kidneys excrete urea and excess water and ions.",
      subheadings: [
        {
          title: "Excretion Organs and Excretory Products",
          body: "**Excretion** is the removal of the waste products of metabolism, toxic substances, and substances in excess of requirements from an organism.\n\n**Major Excretory Organs and Products:**\n- **Lungs:** excrete **carbon dioxide** (waste product of cellular respiration) and water vapour in expired air.\n- **Kidneys:** excrete **urea**, **excess water**, and **excess ions** in the form of **urine**.\n  - Urea is produced in the liver from excess amino acids.\n  - Excess mineral salts (ions) and excess water are filtered from blood by the kidneys to maintain fluid balance.",
          groups: [
            {
              subTitle: "Excretory organs and their wastes",
              bullets: [
                "**Lungs:** excrete carbon dioxide and water vapour during exhalation.",
                "**Kidneys:** excrete urea, excess water, and excess mineral ions as urine.",
                "Metabolic waste comes from chemical reactions inside body cells.",
              ],
            },
          ],
          examinerTips: [
            "Distinguish excretion (removal of metabolic waste products like urea and CO2) from egestion (expelling undigested dietary fibre as faeces).",
            "Name both excretory organs required by Core: lungs (carbon dioxide) and kidneys (urea, excess water and ions).",
          ],
          commonMistakes: [
            "Calling faeces an excretory product. Faeces is undigested food expelled by egestion.",
            "Forgetting that carbon dioxide is an excretory product.",
          ],
          recap: [
            "Define excretion. [2]",
            "Name the substance excreted by the lungs. [1]",
            "Name three substances excreted by the kidneys. [3]",
          ],
        },
        {
          title: "The Urinary System",
          body: "The human urinary system consists of four primary organs:\n\n1. **Kidneys (pair):** bean-shaped organs at the back of the abdominal cavity that filter blood, removing urea, excess water, and excess ions to produce urine.\n2. **Ureters (pair):** narrow muscular tubes that carry urine from each kidney down to the bladder.\n3. **Bladder:** muscular sac that stores urine temporarily before urination.\n4. **Urethra:** single tube leading from the bladder to the exterior of the body through which urine is discharged.",
          groups: [
            {
              subTitle: "The four organs of the urinary system",
              bullets: [
                "**Kidneys:** filter blood and form urine.",
                "**Ureters:** tubes connecting kidneys to the bladder.",
                "**Bladder:** stores urine.",
                "**Urethra:** tube that carries urine from bladder out of the body.",
              ],
            },
          ],
          examinerTips: [
            "Do not confuse **ureter** with **urethra**! Ureter connects kidney to bladder; urethra carries urine out from bladder.",
            "Trace the correct sequence: Kidney → Ureter → Bladder → Urethra.",
          ],
          commonMistakes: [
            "Mixing up the spellings or positions of ureter and urethra.",
            "Placing the bladder between the kidney and ureter.",
          ],
          recap: [
            "Identify the four main organs of the urinary system and state the function of each. [4]",
            "State the pathway taken by urine from its formation to its release from the body. [4]",
          ],
        },
      ],
    },
    {
      number: 14,
      title: "Coordination and Response",
      section: "14. Coordination and Response",
      topic: "Core Topic 14",
      intro: "Core revision notes for **Topic 14: Coordination and Response** for Cambridge IGCSE Biology (0610/0970). Coordination allows organisms to detect stimuli and produce responses; it includes the nervous system (neurones, reflex arcs, sense organs, eye structure and pupil reflex), endocrine system (hormones, adrenaline, insulin), homeostasis, and plant tropic responses (phototropism and gravitropism).",
      subheadings: [
        {
          title: "The Mammalian Nervous System and Reflex Arcs",
          body: "The nervous system coordinates and regulates body functions through rapid electrical communication.\n\n- **Electrical impulses** travel along specialized cells called **neurones**.\n- **Mammalian Nervous System:**\n  - **Central Nervous System (CNS):** consisting of the **brain** and the **spinal cord**.\n  - **Peripheral Nervous System (PNS):** consisting of the **nerves outside of the brain and spinal cord**.\n\n**Three Types of Neurones:**\n1. **Sensory neurone:** transmits impulses from sensory receptors to the CNS.\n2. **Relay neurone (connector/interneurone):** transmits impulses within the CNS between sensory and motor neurones.\n3. **Motor neurone:** transmits impulses from the CNS to effectors (muscles and glands).\n\n**Reflex Arc and Reflex Actions:**\nA **reflex action** is a means of automatically and rapidly integrating and coordinating stimuli with the responses of effectors (muscles and glands), protecting the body from harm.\n\n**Sequence in a simple reflex arc:**\n**Receptor → Sensory neurone → Relay neurone → Motor neurone → Effector**\n\n**Synapses:**\nA **synapse** is a **junction between two neurones**.",
          groups: [
            {
              subTitle: "Key structural and functional sequence",
              bullets: [
                "**Electrical impulses:** rapid signals moving along neurones.",
                "**CNS:** brain and spinal cord; coordinates responses.",
                "**PNS:** peripheral nerves connecting CNS to the rest of the body.",
                "**Reflex arc pathway:** Receptor → Sensory neurone → Relay neurone → Motor neurone → Effector.",
                "**Synapse:** junction between two adjacent neurones.",
              ],
            },
          ],
          examinerTips: [
            "Memorise the 5 components of a reflex arc in order: receptor, sensory neurone, relay neurone, motor neurone, effector.",
            "Define a reflex action as **automatic**, **rapid**, and protective.",
          ],
          commonMistakes: [
            "Reversing the sensory and motor neurone in the pathway.",
            "Confusing the receptor (detects stimulus) with the effector (muscle or gland carrying out response).",
          ],
          recap: [
            "State the components of the central and peripheral nervous systems. [2]",
            "List the five parts of a simple reflex arc in order. [5]",
            "Define the terms reflex action and synapse. [3]",
          ],
        },
        {
          title: "Sense Organs, the Eye, and the Pupil Reflex",
          body: "**Sense organs** are groups of receptor cells responding to specific stimuli: **light**, **sound**, **touch**, **temperature**, and **chemicals** (taste and smell).\n\n**Structure and Function of the Eye:**\n- **Cornea:** transparent front layer that **refracts light** as it enters the eye.\n- **Iris:** coloured ring of muscle that **controls how much light enters the pupil**.\n- **Pupil:** central hole in iris through which light passes.\n- **Lens:** transparent, flexible structure that **focuses light onto the retina**.\n- **Retina:** inner lining containing **light receptors**, some sensitive to light of different colours.\n- **Optic nerve:** **carries electrical impulses to the brain** for image interpretation.\n- **Blind spot:** point where the optic nerve leaves the retina, lacking light receptor cells.\n\n**The Pupil Reflex:**\nAn automatic reflex protecting the retina from damage and adjusting vision in different light levels:\n- **In bright light:** the pupil **constricts** (diameter decreases) to reduce the amount of light entering and protect receptor cells.\n- **In dim light:** the pupil **dilates** (diameter increases) to allow more light to enter and improve vision.",
          groups: [
            {
              subTitle: "Parts of the eye and their functions",
              bullets: [
                "**Cornea:** refracts light rays.",
                "**Iris:** controls pupil diameter and light intake.",
                "**Lens:** focuses light onto the retina.",
                "**Retina:** detects light and colour with receptor cells.",
                "**Optic nerve:** carries nerve impulses from retina to brain.",
              ],
            },
            {
              subTitle: "Pupil reflex summary",
              bullets: [
                "**Bright light:** pupil constricts (smaller diameter) to protect retina.",
                "**Dim light:** pupil dilates (larger diameter) to capture maximum light.",
              ],
            },
          ],
          examinerTips: [
            "State the exact functions: cornea *refracts light*; iris *controls how much light enters pupil*; lens *focuses light*.",
            "For Core candidates, explain pupil reflex in terms of **light intensity and pupil diameter** (constriction in bright light, dilation in dim light).",
          ],
          commonMistakes: [
            "Saying the pupil contracts or relaxes; the **iris** muscles contract/relax, changing the **diameter** of the pupil.",
            "Saying the optic nerve carries images; it carries **electrical impulses**.",
          ],
          recap: [
            "State the function of the cornea, iris, lens, retina and optic nerve. [5]",
            "Describe what happens to the pupil in bright light and dim light, and explain the importance of this reflex. [4]",
          ],
        },
        {
          title: "Hormones, Endocrine Glands, and Adrenaline",
          body: "A **hormone** is a chemical substance, produced by a gland and carried by the blood, which alters the activity of one or more specific **target organs**.\n\n**Endocrine Glands and their Hormones:**\n- **Adrenal glands:** secrete **adrenaline**.\n- **Pancreas:** secretes **insulin**.\n- **Testes:** secrete **testosterone**.\n- **Ovaries:** secrete **oestrogen**.\n\n**Adrenaline ('Fight or Flight' Hormone):**\nSecreted by the adrenal glands in situations of fear, danger, or excitement to prepare the body for emergency action:\n- **Increased breathing rate:** supplies more oxygen for respiration.\n- **Increased heart rate:** delivers oxygen and glucose faster to brain and muscles.\n- **Increased pupil diameter (dilation):** allows more light into eyes to improve visual sensitivity in danger.\n\n**Comparing Nervous and Hormonal Control:**\n- **Speed of action:** nervous system is very rapid; hormonal system is slower.\n- **Duration of effect:** nervous system response is short-lived; hormonal response is longer-lasting.\n- **Transmission:** nervous signals travel as electrical impulses along neurones; hormones travel chemically in blood plasma.",
          groups: [
            {
              subTitle: "Four core endocrine glands and hormones",
              bullets: [
                "**Adrenal glands:** secrete adrenaline for fight or flight.",
                "**Pancreas:** secretes insulin to regulate blood glucose.",
                "**Testes:** secrete testosterone.",
                "**Ovaries:** secrete oestrogen.",
              ],
            },
            {
              subTitle: "Comparison: Nervous vs Hormonal system",
              bullets: [
                "**Speed:** nervous is very fast (milliseconds); hormonal is slower (seconds to hours).",
                "**Duration:** nervous is brief/transient; hormonal is long-lasting.",
                "**Path:** nervous via neurones; hormonal via bloodstream.",
              ],
            },
          ],
          examinerTips: [
            "Memorise the definition of a hormone: chemical substance, produced by a gland, carried by blood, alters target organ activity.",
            "Know the 3 effects of adrenaline: increased breathing rate, increased heart rate, increased pupil diameter.",
          ],
          commonMistakes: [
            "Saying hormones travel in nerves. Hormones travel dissolved in **blood plasma**.",
            "Confusing speed and duration in comparison questions.",
          ],
          recap: [
            "Define the term hormone. [3]",
            "Name four endocrine glands and the hormone secreted by each. [4]",
            "State three effects of adrenaline in a 'fight or flight' situation. [3]",
            "Compare nervous and hormonal control in terms of speed and duration. [2]",
          ],
        },
        {
          title: "Homeostasis and Tropic Responses",
          body: "**Homeostasis** is the maintenance of a constant internal environment.\n- It ensures optimal conditions (such as body temperature, water levels, and blood glucose concentration) for cellular metabolism and enzyme activity.\n- **Insulin and Blood Glucose:** the pancreas secretes **insulin**, which **decreases blood glucose concentration** when it rises too high (by stimulating cells to take up glucose and convert it into glycogen in the liver).\n\n**Tropic Responses in Plants:**\nPlants respond to directional environmental stimuli through growth responses called **tropisms**:\n- **Gravitropism (geotropism):** a response in which parts of a plant grow towards or away from **gravity**.\n  - Roots show **positive gravitropism** (grow towards gravity, downwards into soil for anchorage and water).\n  - Shoots show **negative gravitropism** (grow away from gravity, upwards towards light).\n- **Phototropism:** a response in which parts of a plant grow towards or away from the direction of a **light source**.\n  - Shoots show **positive phototropism** (grow towards light to maximise photosynthesis).\n  - Roots show negative phototropism (grow away from light).",
          groups: [
            {
              subTitle: "Homeostasis and insulin",
              bullets: [
                "**Homeostasis:** maintenance of a constant internal environment.",
                "**Insulin:** hormone secreted by pancreas that decreases blood glucose concentration.",
              ],
            },
            {
              subTitle: "Gravitropism and phototropism summary",
              bullets: [
                "**Gravitropism:** plant growth response to gravity (roots grow towards, shoots grow away).",
                "**Phototropism:** plant growth response to light (shoots grow towards, roots grow away).",
              ],
            },
          ],
          examinerTips: [
            "Define homeostasis precisely: **maintenance of a constant internal environment**.",
            "Remember: shoots grow **towards light** (positive phototropism) and **away from gravity** (negative gravitropism); roots grow **towards gravity** (positive gravitropism).",
          ],
          commonMistakes: [
            "Saying insulin increases blood glucose; insulin **decreases** blood glucose.",
            "Confusing positive (towards) and negative (away from) tropisms.",
          ],
          recap: [
            "Define homeostasis. [1]",
            "State the effect of insulin on blood glucose concentration. [1]",
            "Define gravitropism and phototropism. [2]",
            "Describe the response of plant shoots and roots to light and gravity. [4]",
          ],
        },
      ],
    },
    {
      number: 15,
      title: "Drugs",
      section: "15. Drugs",
      topic: "Core Topic 15",
      intro: "Core revision notes for **Topic 15: Drugs** for Cambridge IGCSE Biology (0610/0970). A drug is a substance that modifies chemical reactions in the body; antibiotics are used to treat bacterial infections by killing bacteria, but do not affect viruses, and antibiotic resistance poses a major clinical challenge.",
      subheadings: [
        {
          title: "Definition of Drugs and Antibiotic Action",
          body: "A **drug** is any substance taken into the body that modifies or affects chemical reactions in the body.\n\n**Antibiotics:**\nAntibiotics are medicines used for the **treatment of bacterial infections**.\n- Antibiotics work by disrupting the cell walls, cell membranes, or metabolic pathways of bacteria, killing them or preventing them from reproducing.\n- **Antibiotics kill bacteria but do NOT affect viruses.** Viruses do not have cell walls or their own metabolic machinery (they reproduce inside host cells), so antibiotics have no effect on viral infections such as colds, influenza, or HIV.\n\n**Antibiotic Resistance:**\n- Some bacteria mutate and develop **resistance to antibiotics**.\n- When resistant bacteria survive antibiotic treatment, they reproduce and spread, reducing the effectiveness of antibiotics.\n- Overuse and unnecessary use of antibiotics (e.g. taking them for viral infections or not finishing prescribed courses) increases the development of antibiotic-resistant strains.",
          groups: [
            {
              subTitle: "Key facts about drugs and antibiotics",
              bullets: [
                "**Drug:** any substance taken into the body that modifies or affects chemical reactions in the body.",
                "**Antibiotics:** medicines used to treat bacterial infections.",
                "**Bacteria vs Viruses:** antibiotics kill bacteria but have NO effect on viruses.",
                "**Resistance:** resistant bacteria survive treatment, reducing antibiotic effectiveness.",
              ],
            },
          ],
          examinerTips: [
            "Memorise the definition of a drug: any substance taken into the body that modifies or affects chemical reactions in the body.",
            "Always emphasize that **antibiotics do NOT affect viruses**; prescribe them only for bacterial infections.",
          ],
          commonMistakes: [
            "Believing that antibiotics cure colds or flu. Colds and flu are caused by viruses, so antibiotics are ineffective.",
            "Saying human bodies become resistant to antibiotics; it is the **bacteria** that become resistant, not the patient.",
          ],
          recap: [
            "Define the term drug. [2]",
            "Explain why antibiotics are used to treat bacterial infections but cannot treat viral infections. [2]",
            "Explain why the development of antibiotic resistance in bacteria is a serious medical problem. [2]",
          ],
        },
      ],
    },
    {
      number: 16,
      title: "Reproduction",
      section: "16. Reproduction",
      topic: "Core Topic 16",
      intro: "Core revision notes for **Topic 16: Reproduction** (16.1–16.4 Core) for Cambridge IGCSE Biology (0610/0970). Reproduction produces offspring through asexual reproduction (one parent, genetically identical) or sexual reproduction (two gametes fuse, genetically different); covers insect- and wind-pollinated flowers, seed germination conditions, and human reproductive anatomy, gamete adaptations, and fetal development.",
      subheadings: [
        {
          title: "Asexual and Sexual Reproduction",
          body: "**Asexual reproduction** is a process resulting in the production of **genetically identical offspring from one parent**.\n- Occurs without gametes or fertilisation; examples include binary fission in bacteria, budding in yeast, and runners/tubers in plants (potatoes, strawberries).\n\n**Sexual reproduction** is a process involving the **fusion of the nuclei of two gametes to form a zygote** and the production of offspring that are **genetically different** from each other.\n- **Fertilisation** is the fusion of the nuclei of gametes.",
          groups: [
            {
              subTitle: "Comparison of asexual and sexual reproduction",
              bullets: [
                "**Asexual reproduction:** one parent, no gametes, offspring genetically identical (clones).",
                "**Sexual reproduction:** two gametes, fusion of nuclei to form zygote, offspring genetically different.",
                "**Fertilisation:** fusion of the nuclei of male and female gametes.",
              ],
            },
          ],
          examinerTips: [
            "State clearly that fertilisation is the **fusion of the nuclei** of gametes, not just the 'joining of cells'.",
            "Note that asexual reproduction produces genetically identical offspring, while sexual reproduction produces genetic variation.",
          ],
          commonMistakes: [
            "Omitting the word 'nuclei' from the definition of fertilisation.",
            "Assuming plants only reproduce sexually; many reproduce both asexually and sexually.",
          ],
          recap: [
            "Define asexual reproduction and give two examples. [3]",
            "Define sexual reproduction and fertilisation. [3]",
          ],
        },
        {
          title: "Sexual Reproduction in Plants and Seed Germination",
          body: "Flowering plants reproduce sexually through flowers adapted for insect or wind pollination.\n\n**Parts of an Insect-Pollinated Flower:**\n- **Sepals:** protect the flower bud before it opens.\n- **Petals:** large, brightly coloured to attract insects.\n- **Stamens (male organ):** consisting of the **anther** (produces pollen grains) and **filament** (stalk supporting the anther).\n- **Carpel (female organ):** consisting of the **stigma** (sticky surface receiving pollen), **style** (stalk connecting stigma to ovary), and **ovary** containing **ovules** (contain female gamete nuclei).\n\n**Insect-Pollinated vs Wind-Pollinated Flowers:**\n- **Insect-pollinated:** large bright petals, scented, nectar present, enclosed anthers and sticky stigma, small numbers of large spiky/sticky pollen grains.\n- **Wind-pollinated:** small dull green petals, no scent or nectar, exposed hanging anthers that shake pollen into wind, large feathery stigmas hanging outside to trap air-blown pollen, huge numbers of light smooth pollen grains.\n\n**Pollination and Fertilisation:**\n- **Pollination:** the transfer of pollen grains from an **anther to a stigma**.\n- **Fertilisation:** occurs when a **pollen nucleus fuses with a nucleus in an ovule**.\n\n**Environmental Conditions for Seed Germination (WOW):**\n1. **Water:** activates enzymes and hydrates cells to initiate metabolism.\n2. **Oxygen:** required for aerobic respiration to release energy for growth.\n3. **Suitable temperature:** provides optimal kinetic energy for enzyme-controlled germination reactions.",
          groups: [
            {
              subTitle: "Flower adaptations summary",
              bullets: [
                "**Insect-pollinated:** bright large petals, scented, nectar, sticky pollen, internal stamens/stigma.",
                "**Wind-pollinated:** small green petals, no scent/nectar, feathery external stigmas, hanging anthers, light smooth pollen.",
              ],
            },
            {
              subTitle: "Three germination conditions",
              bullets: [
                "**Water:** enzyme activation and swelling of seed coat.",
                "**Oxygen:** cellular respiration to supply energy.",
                "**Suitable temperature:** optimum enzyme activity (warmth, but not boiling).",
                "Light is NOT typically required for seed germination.",
              ],
            },
          ],
          examinerTips: [
            "Distinguish clearly between pollination (transfer of pollen from anther to stigma) and fertilisation (fusion of pollen nucleus with ovule nucleus).",
            "Remember the three germination conditions using **WOW**: Water, Oxygen, Warmth (suitable temperature). Light is NOT needed.",
          ],
          commonMistakes: [
            "Claiming seeds need light to germinate; seeds germinate underground without light.",
            "Confusing pollination with fertilisation.",
          ],
          recap: [
            "Identify the male and female parts of an insect-pollinated flower. [4]",
            "Distinguish between pollination and fertilisation in plants. [3]",
            "Compare insect-pollinated and wind-pollinated flowers in terms of petals, anthers, stigmas and pollen. [4]",
            "State the three environmental conditions necessary for seed germination and explain the role of each. [6]",
          ],
        },
        {
          title: "Sexual Reproduction in Humans and Fetal Development",
          body: "**Human Reproductive Systems:**\n- **Male Reproductive System:**\n  - **Testes:** produce sperm and testosterone.\n  - **Scrotum:** sac holding testes outside abdominal cavity at slightly lower temperature for optimal sperm production.\n  - **Sperm ducts (vas deferens):** tubes carrying sperm from testes towards urethra.\n  - **Prostate gland:** secretes seminal fluid to nourish sperm and form semen.\n  - **Urethra:** carries semen (and urine at different times) through penis.\n  - **Penis:** deposits semen into the vagina during intercourse.\n- **Female Reproductive System:**\n  - **Ovaries:** produce egg cells (ova) and oestrogen.\n  - **Oviducts (fallopian tubes):** carry egg from ovary to uterus; site of fertilisation.\n  - **Uterus (womb):** muscular organ where embryo implants and fetus develops.\n  - **Cervix:** muscular ring separating uterus from vagina.\n  - **Vagina:** muscular canal receiving penis during intercourse; birth canal.\n\n**Gametes and Fertilisation:**\n- **Fertilisation:** fusion of the nuclei of a male gamete (**sperm**) and female gamete (**egg cell**), forming a diploid zygote in the oviduct.\n- **Adaptive features of sperm:**\n  - **Flagellum (tail):** provides motility to swim to egg.\n  - **Mitochondria:** concentrated in midpiece to release energy for swimming.\n  - **Enzymes in acrosome:** break down jelly coat around egg to allow penetration.\n- **Adaptive features of egg cell:**\n  - **Energy stores (yolk/cytoplasm):** nourishes early embryo.\n  - **Jelly coat:** changes after fertilisation to prevent other sperm from entering.\n- **Comparison:** sperm are tiny, numerous, and motile; eggs are large, released one at a time, and non-motile.\n\n**Fetal Development in the Uterus:**\n- The zygote divides into an **embryo** (ball of cells) and implants into the uterus lining.\n- **Placenta:** disc-shaped organ embedded in uterus wall allowing diffusion of oxygen and nutrients from maternal blood to fetal blood, and removal of urea and CO2 from fetal blood to maternal blood.\n- **Umbilical cord:** connects fetus to placenta, carrying blood vessels.\n- **Amniotic sac:** membrane enclosing the fetus and amniotic fluid.\n- **Amniotic fluid:** cushions the fetus against mechanical shocks and pressure.",
          groups: [
            {
              subTitle: "Male and female reproductive organs",
              bullets: [
                "**Male:** testes (sperm production), scrotum (temperature regulation), sperm ducts, prostate gland (seminal fluid), urethra, penis.",
                "**Female:** ovaries (egg release), oviducts (fertilisation site), uterus (embryo development), cervix, vagina.",
              ],
            },
            {
              subTitle: "Gamete adaptations and comparison",
              bullets: [
                "**Sperm:** flagellum (motility), mitochondria (energy), acrosome enzymes (digests egg coat); microscopic, produced in millions.",
                "**Egg:** large cytoplasm with energy stores, jelly coat that hardens after one sperm enters; produced singly.",
              ],
            },
            {
              subTitle: "Fetal support structures",
              bullets: [
                "**Placenta:** exchange of gases, nutrients, and wastes between maternal and fetal blood.",
                "**Umbilical cord:** connects fetus to placenta.",
                "**Amniotic sac and fluid:** protects and cushions developing fetus against physical damage.",
              ],
            },
          ],
          examinerTips: [
            "State where fertilisation occurs: in the **oviduct** (fallopian tube), not the uterus.",
            "Explain that the placenta allows diffusion without direct mixing of maternal and fetal blood.",
          ],
          commonMistakes: [
            "Saying fertilisation occurs in the uterus; implantation occurs in the uterus, fertilisation occurs in the oviduct.",
            "Stating maternal and fetal blood mix directly. They are separated by thin placental membranes.",
          ],
          recap: [
            "Name the parts of the male and female reproductive systems and state their functions. [8]",
            "Describe the adaptations of sperm and egg cells. [4]",
            "Compare sperm and egg cells in terms of size, motility, structure and numbers. [4]",
            "State the functions of the placenta, umbilical cord, amniotic sac and amniotic fluid. [4]",
          ],
        },
        {
          title: "Sex Hormones in Humans and the Menstrual Cycle (16.5)",
          body: "During puberty, sex hormones stimulate the development of **secondary sexual characteristics** in males and females:\n\n- **Testosterone (males):** secreted by the testes; stimulates sperm production, growth of facial, underarm, and pubic hair, deepening of the voice, enlargement of the penis and testes, and increased muscle development.\n- **Oestrogen (females):** secreted by the ovaries; stimulates breast development, widening of the hips, growth of underarm and pubic hair, and the start of the menstrual cycle.\n\n**The Menstrual Cycle:**\nThe menstrual cycle lasts approximately 28 days and involves coordinated changes in the **ovaries** and the **lining of the uterus**:\n1. **Days 1–5 (Menstruation):** the thick lining of the uterus breaks down and is shed through the vagina as menstrual blood if no fertilised egg has implanted.\n2. **Days 6–13 (Repair and thickening):** the ovary matures an egg cell inside a follicle, and oestrogen stimulates the uterus lining to rebuild and thicken with blood vessels to prepare for a possible embryo.\n3. **Day 14 (Ovulation):** the mature egg cell is released from an ovary follicle into the oviduct.\n4. **Days 15–28 (Maintenance and preparation):** the uterus lining remains thick and spongy with a rich blood supply; if fertilisation does not occur, hormone levels drop, the lining breaks down, and the cycle repeats.",
          groups: [
            {
              subTitle: "Secondary sexual characteristics",
              bullets: [
                "**Testosterone:** facial hair, voice deepening, muscle mass growth, sperm production.",
                "**Oestrogen:** breast development, hip widening, menstrual cycle initiation.",
              ],
            },
            {
              subTitle: "Key events in the 28-day menstrual cycle",
              bullets: [
                "**Days 1–5:** menstruation (shedding of uterus lining).",
                "**Days 6–13:** uterus lining thickens and egg matures in ovary.",
                "**Day 14:** ovulation (release of egg from ovary into oviduct).",
                "**Days 15–28:** lining maintained for implantation; breaks down if no pregnancy occurs.",
              ],
            },
          ],
          examinerTips: [
            "Remember that day 14 of a standard 28-day cycle is when **ovulation** takes place.",
            "Describe changes in BOTH the uterus (lining shed, rebuilt, maintained) and the ovaries (egg matures, egg released).",
          ],
          commonMistakes: [
            "Saying ovulation occurs during menstruation. Menstruation occurs at days 1–5; ovulation occurs around day 14.",
            "Confusing the role of testosterone with insulin or adrenaline.",
          ],
          recap: [
            "Describe two secondary sexual characteristics stimulated by testosterone in males and two by oestrogen in females. [4]",
            "Describe the changes that occur in the uterus lining and in the ovaries during the menstrual cycle. [5]",
          ],
        },
        {
          title: "Sexually Transmitted Infections and HIV (16.6)",
          body: "A **sexually transmitted infection (STI)** is an infection that is transmitted through sexual contact.\n\n**Human Immunodeficiency Virus (HIV):**\n- HIV is a pathogen (a virus) that causes an STI.\n- HIV infection attacks and destroys white blood cells (lymphocytes), severely weakening the immune system.\n- **HIV infection may lead to AIDS** (Acquired Immune Deficiency Syndrome), a condition where the immune system can no longer defend against opportunistic infections and diseases.\n\n**Methods of Transmission of HIV:**\n- **Unprotected sexual contact** with an infected person (direct contact with body fluids).\n- **Sharing hypodermic needles** among intravenous drug users.\n- **Blood transfusions** with contaminated, unscreened blood.\n- **From mother to fetus** across the placenta during pregnancy, during childbirth, or via breast milk.\n\n**Controlling the Spread of STIs:**\n- Using **barrier contraception** (such as condoms) during sexual activity.\n- Limiting sexual partners or abstinence.\n- Screening donated blood before transfusions.\n- Using sterile, single-use disposable needles for medical procedures and needle exchange programs.\n- Educating the public about safe sex and transmission routes.",
          groups: [
            {
              subTitle: "HIV and AIDS key facts",
              bullets: [
                "**Pathogen:** Human Immunodeficiency Virus (HIV).",
                "**Consequence:** HIV destroys white blood cells and can lead to AIDS.",
                "**Transmission:** unprotected sexual intercourse, sharing needles, unscreened blood transfusions, mother to baby.",
                "**Control:** condoms, sterile needles, blood screening, and public education.",
              ],
            },
          ],
          examinerTips: [
            "Clearly state that HIV is the **virus / pathogen** and AIDS is the resulting **condition / syndrome**.",
            "Always state that condoms (barrier method) reduce STI spread, whereas hormonal pills do NOT protect against STIs.",
          ],
          commonMistakes: [
            "Using the terms HIV and AIDS interchangeably as if they are the exact same thing.",
            "Claiming that HIV can be transmitted through casual touch, sharing cups, or toilet seats (it cannot).",
          ],
          recap: [
            "Define a sexually transmitted infection. [1]",
            "Name the pathogen that causes AIDS and state four ways it can be transmitted. [5]",
            "Explain how the spread of sexually transmitted infections can be controlled. [3]",
          ],
        },
      ],
    },
    {
      number: 17,
      title: "Inheritance",
      section: "17. Inheritance",
      topic: "Core Topic 17",
      intro: "Core revision notes for **Topic 17: Inheritance** for Cambridge IGCSE Biology (0610/0970). Inheritance is the transmission of genetic information from generation to generation; covers chromosomes, genes, sex determination (XX and XY), mitosis, meiosis, monohybrid crosses, and Punnett squares.",
      subheadings: [
        {
          title: "Chromosomes, Genes, Alleles and Sex Determination",
          body: "Inside the nucleus of every eukaryotic cell, genetic information is organised into structures called chromosomes:\n\n- **Chromosomes** are made of **DNA**, which contains genetic information in the form of **genes**.\n- A **gene** is a length of DNA that codes for a protein.\n- An **allele** is an **alternative form of a gene** (for example, alleles for blue eyes or brown eyes).\n\n**Haploid and Diploid Nuclei:**\n- A **haploid nucleus** contains a **single set of chromosomes** (e.g. human gametes contain 23 chromosomes, represented as n).\n- A **diploid nucleus** contains **two sets of chromosomes** (e.g. human body cells contain 23 pairs, or 46 chromosomes, represented as 2n).\n- In a diploid cell, there is a pair of each type of chromosome; in humans, there are 23 pairs.\n\n**Inheritance of Sex in Humans:**\nHuman sex is determined by the 23rd pair of chromosomes (the sex chromosomes):\n- Human females have two **X chromosomes (XX)**.\n- Human males have one **X and one Y chromosome (XY)**.\n- All egg cells contain an X chromosome; 50% of sperm cells carry an X chromosome and 50% carry a Y chromosome.\n- Fertilisation results in an equal **1 : 1 (50% : 50%) probability** of producing a female (XX) or male (XY) child.",
          groups: [
            {
              subTitle: "Core genetic terms",
              bullets: [
                "**Chromosome:** structure made of DNA carrying genetic information in genes.",
                "**Gene:** a length of DNA that codes for a protein.",
                "**Allele:** an alternative form of a gene.",
                "**Haploid:** single set of unpaired chromosomes (gametes: 23 in humans).",
                "**Diploid:** two complete sets of chromosomes in pairs (body cells: 46 in humans).",
              ],
            },
            {
              subTitle: "Sex determination summary",
              bullets: [
                "**Female:** XX sex chromosomes.",
                "**Male:** XY sex chromosomes.",
                "Father's sperm determines the biological sex of the offspring (50% X, 50% Y).",
              ],
            },
          ],
          examinerTips: [
            "Memorise the exact definitions: a gene is a **length of DNA that codes for a protein**; an allele is an **alternative form of a gene**.",
            "Draw a Punnett square for sex determination: parents XX × XY yields 2 XX : 2 XY (1:1 ratio).",
          ],
          commonMistakes: [
            "Stating that the mother's egg determines the sex of the baby; all eggs carry X chromosomes, sperm carries X or Y.",
            "Confusing haploid (single set) with diploid (two sets).",
          ],
          recap: [
            "Define the terms gene and allele. [2]",
            "Distinguish between a haploid and a diploid nucleus. [2]",
            "Explain how sex is inherited in humans using a genetic diagram. [4]",
          ],
        },
        {
          title: "Mitosis and Stem Cells",
          body: "**Mitosis** is nuclear division giving rise to **genetically identical cells**.\n\n**Key Roles of Mitosis in Living Organisms:**\n1. **Growth:** increasing the number of cells in an organism.\n2. **Repair:** repairing damaged tissues by generating new cells.\n3. **Replacement:** replacing worn-out or dead cells (e.g. skin cells and red blood cells).\n4. **Asexual reproduction:** producing identical offspring in unicellular organisms, plants, and budding animals.\n\n**How Mitosis Maintains Chromosome Number:**\n- **Exact replication of chromosomes occurs before mitosis begins**.\n- During mitosis, the copies of chromosomes separate, ensuring each daughter cell receives an identical set of chromosomes, maintaining the diploid chromosome number.\n\n**Stem Cells:**\n- **Stem cells** are **unspecialised cells** that divide by mitosis to produce daughter cells that can become specialised for specific functions (such as muscle, nerve, or red blood cells).",
          groups: [
            {
              subTitle: "Mitosis facts",
              bullets: [
                "**Definition:** nuclear division producing genetically identical cells (details of stages not required).",
                "**Chromosome duplication:** exact replication takes place before division.",
                "**Result:** two genetically identical diploid daughter cells.",
                "**Functions:** growth, tissue repair, cell replacement, and asexual reproduction.",
                "**Stem cells:** unspecialised cells dividing by mitosis to form specialised cell types.",
              ],
            },
          ],
          examinerTips: [
            "Do NOT describe phases like prophase, metaphase, etc. for Core papers—the syllabus explicitly states details of stages are not required.",
            "Remember that chromosome replication occurs **before** mitosis begins.",
          ],
          commonMistakes: [
            "Saying mitosis halves chromosome number; mitosis maintains identical chromosome numbers.",
            "Confusing mitosis (identical body cells) with meiosis (gametes with half the chromosome number).",
          ],
          recap: [
            "Define mitosis and state four roles of mitosis in living organisms. [5]",
            "Explain how the chromosome number is kept constant during mitosis. [2]",
            "Describe what a stem cell is. [2]",
          ],
        },
        {
          title: "Meiosis and Gamete Production",
          body: "**Meiosis** is a specialised form of cell division involved in the **production of gametes** (sperm and egg cells in animals; pollen and ovule nuclei in plants).\n\n**Characteristics of Meiosis:**\n- It is a **reduction division** in which the chromosome number is **halved from diploid (2n) to haploid (n)**.\n- It produces cells that are **genetically different** from each other and from the parent cell.\n- When two haploid gametes fuse at fertilisation, the resulting zygote restores the full diploid number of chromosomes.",
          groups: [
            {
              subTitle: "Meiosis vs Mitosis comparison",
              bullets: [
                "**Meiosis:** produces 4 genetically different haploid gametes; halves chromosome number.",
                "**Mitosis:** produces 2 genetically identical diploid body cells; maintains chromosome number.",
              ],
            },
          ],
          examinerTips: [
            "Define meiosis as a **reduction division** that halves the chromosome number from diploid to haploid.",
            "State that meiosis produces **genetically different cells** for sexual reproduction.",
          ],
          commonMistakes: [
            "Saying meiosis produces body cells; meiosis produces gametes.",
            "Thinking daughter cells from meiosis are genetically identical.",
          ],
          recap: [
            "Define meiosis and state where it occurs in humans. [3]",
            "State two differences between mitosis and meiosis. [2]",
          ],
        },
        {
          title: "Monohybrid Inheritance and Punnett Squares",
          body: "**Monohybrid inheritance** is the study of the inheritance of a single gene characteristic:\n\n- **Genotype:** the genetic make-up of an organism in terms of the alleles present (e.g. $BB$, $Bb$, $bb$).\n- **Phenotype:** the observable physical features of an organism (e.g. brown eyes, albino fur).\n- **Homozygous:** having **two identical alleles** of a particular gene (e.g. $BB$ or $bb$). Two identical homozygous individuals that breed together will be **pure-breeding**.\n- **Heterozygous:** having **two different alleles** of a particular gene (e.g. $Bb$). A heterozygous individual will **not be pure-breeding**.\n- **Dominant allele:** an allele that is expressed if it is present in the genotype (e.g. $B$).\n- **Recessive allele:** an allele that is only expressed when there is **no dominant allele** present (e.g. $bb$).\n\n**Predicting Crosses with Punnett Squares:**\n- Heterozygous $\\times$ Heterozygous ($Bb \\times Bb$): produces genotypes $1\\,BB : 2\\,Bb : 1\\,bb$, giving a **3 : 1 phenotypic ratio** (dominant : recessive).\n- Heterozygous $\\times$ Homozygous recessive ($Bb \\times bb$): produces genotypes $1\\,Bb : 1\\,bb$, giving a **1 : 1 phenotypic ratio**.",
          groups: [
            {
              subTitle: "Key genetic symbols and terms",
              bullets: [
                "**Dominant allele:** capital letter (e.g. $T$ for tall).",
                "**Recessive allele:** lower-case letter (e.g. $t$ for dwarf).",
                "**Homozygous dominant:** $TT$ (tall, pure-breeding).",
                "**Heterozygous:** $Tt$ (tall, not pure-breeding).",
                "**Homozygous recessive:** $tt$ (dwarf, pure-breeding).",
              ],
            },
            {
              subTitle: "Pedigree diagrams",
              bullets: [
                "Circles represent females, squares represent males.",
                "Horizontal lines connect mating pairs; vertical lines connect to offspring.",
                "Shaded shapes indicate individuals expressing the condition or phenotype.",
              ],
            },
          ],
          examinerTips: [
            "In genetic crosses, always show: Parental phenotypes, Parental genotypes, Gametes, Punnett square, Offspring genotypes, and Offspring phenotypes with ratios.",
            "Remember that homozygous individuals are pure-breeding because all their gametes carry the exact same allele.",
          ],
          commonMistakes: [
            "Writing alleles for a gamete as a pair; gametes are haploid and contain only ONE allele for each gene.",
            "Confusing genotype (allele letters) with phenotype (physical description).",
          ],
          recap: [
            "Define genotype, phenotype, homozygous, and heterozygous. [4]",
            "A heterozygous tall pea plant (Tt) is crossed with a short pea plant (tt). Use a Punnett square to determine the phenotypic ratio of the offspring. [4]",
            "Explain why two brown-eyed parents can have a blue-eyed child. [3]",
          ],
        },
      ],
    },
    {
      number: 18,
      title: "Variation and Selection",
      section: "18. Variation and Selection",
      topic: "Core Topic 18",
      intro: "Core revision notes for **Topic 18: Variation and Selection** for Cambridge IGCSE Biology (0610/0970). Variation describes differences between individuals of the same species; natural selection allows well-adapted organisms to survive and pass on alleles, while selective breeding is used by humans to develop useful crop plants and domestic animals.",
      subheadings: [
        {
          title: "Continuous and Discontinuous Variation and Mutation",
          body: "**Variation** is the differences between individuals of the same species.\n\n**Two Types of Variation:**\n1. **Continuous variation:** results in a **range of phenotypes between two extremes** without distinct categories.\n   - Examples: human height, body mass, body length, hand span.\n   - Cause: caused by **both genes and the environment** (e.g. nutrition and genetics affect height).\n   - Represented by a smooth bell-shaped curve (normal distribution).\n2. **Discontinuous variation:** results in a **limited number of distinct phenotypes with no intermediates**.\n   - Examples: human ABO blood groups (A, B, AB, O), presence of ear lobes, seed shape (round or wrinkled) in peas, seed colour in peas.\n   - Cause: caused by **genes only**; environment has no effect.\n   - Represented by separate discrete bars in a bar chart.\n\n**Mutation:**\n- A **mutation** is a **genetic change**.\n- Mutation is the primary process by which **new alleles are formed**.\n- Rate of mutation is increased by exposure to **ionising radiation** (such as ultraviolet rays, X-rays, and gamma rays) and **certain chemicals** (such as tobacco tar and mustard gas).",
          groups: [
            {
              subTitle: "Comparison of continuous and discontinuous variation",
              bullets: [
                "**Continuous:** unbroken range between extremes; influenced by genes AND environment; e.g. height and body mass.",
                "**Discontinuous:** distinct discrete categories; influenced by genes ONLY; e.g. ABO blood groups.",
              ],
            },
            {
              subTitle: "Mutations",
              bullets: [
                "**Definition:** genetic change.",
                "**Importance:** generates new alleles and increases genetic variation.",
                "**Mutagens:** ionising radiation (UV, X-rays) and toxic mutagenic chemicals.",
              ],
            },
          ],
          examinerTips: [
            "State whether an example is continuous or discontinuous: if it can be measured on a continuous scale (height, mass), it is continuous; if it fits into distinct boxes (blood type), it is discontinuous.",
            "State that discontinuous variation is caused by genes only, whereas continuous variation is caused by genes and the environment.",
          ],
          commonMistakes: [
            "Claiming that blood group can be changed by diet or environment.",
            "Thinking that mutations only occur from radiation; spontaneous mutations can also occur naturally.",
          ],
          recap: [
            "Define variation. [1]",
            "Compare continuous and discontinuous variation, including causes and two examples of each. [6]",
            "Define mutation and state two factors that increase the rate of mutation. [3]",
          ],
        },
        {
          title: "Adaptive Features",
          body: "An **adaptive feature** is an **inherited feature that helps an organism to survive and reproduce in its environment**.\n\n- Adaptive features evolve over many generations through natural selection.\n- Examples of adaptive features:\n  - **Camouflage colouration:** helps predators ambush prey, or protects prey from being spotted by predators.\n  - **Thick fur and blubber layer:** provides thermal insulation for animals living in polar climates (e.g. polar bears, seals).\n  - **Large ears with blood vessels:** helps desert animals (e.g. fennec fox) radiate excess heat to cool down.\n  - **Streamlined body and fins:** reduces drag and facilitates efficient swimming in aquatic organisms (e.g. sharks, dolphins).",
          groups: [
            {
              subTitle: "Core adaptation concept",
              bullets: [
                "**Adaptive feature:** inherited characteristic aiding survival and reproduction.",
                "Enables organisms to compete successfully for food, water, light, mates, and territory.",
              ],
            },
          ],
          examinerTips: [
            "Define an adaptive feature as helping an organism to **survive AND reproduce**.",
            "In questions with unfamiliar animal or plant images, identify the feature and link it directly to its survival advantage.",
          ],
          commonMistakes: [
            "Saying an animal 'decided' to adapt. Adaptations arise through inherited genetic variation and selection, not conscious choice.",
          ],
          recap: [
            "Define the term adaptive feature. [2]",
            "Suggest two adaptive features of a camel living in a hot, arid desert environment and explain how each aids survival. [4]",
          ],
        },
        {
          title: "Natural Selection and Selective Breeding",
          body: "**Natural Selection:**\nNatural selection is the mechanism driving evolutionary change in living populations. It proceeds through five key steps:\n1. **Genetic variation:** there is natural genetic variation within populations due to different alleles.\n2. **Overproduction of offspring:** organisms produce many offspring, exceeding available environmental resources.\n3. **Struggle for survival:** competition arises for limited resources (food, water, shelter, mates) and evasion of predators and disease.\n4. **Survival of the fittest:** individuals possessing advantageous adaptive features are better suited to their environment and have a greater chance of surviving and reproducing.\n5. **Passing on alleles:** surviving individuals reproduce and pass on their advantageous alleles to the next generation, increasing the frequency of the adaptive trait over time.\n\n**Selective Breeding (Artificial Selection):**\nSelective breeding is carried out by humans to improve domesticated animals and agricultural crops:\n1. **Selection by humans** of individuals with desirable features (e.g. high milk yield in cows, drought tolerance in wheat).\n2. **Crossing** these selected individuals to produce the next generation.\n3. **Selection of offspring** that show the desirable features.\n4. Repeating this process over **many generations** until all individuals exhibit the improved trait.",
          groups: [
            {
              subTitle: "Natural selection 5-step framework",
              bullets: [
                "**1. Variation:** genetic differences exist in population.",
                "**2. Overproduction:** many offspring produced.",
                "**3. Competition:** struggle for survival with limited resources.",
                "**4. Differential survival:** best-adapted individuals survive and reproduce.",
                "**5. Inheritance:** advantageous alleles passed to subsequent generations.",
              ],
            },
            {
              subTitle: "Selective breeding summary",
              bullets: [
                "Controlled by **humans**, selecting desirable traits.",
                "Breeding best individuals over many generations.",
                "Examples: domestic dogs from wolves, disease-resistant crops, high-yield dairy cows.",
              ],
            },
          ],
          examinerTips: [
            "When explaining natural selection, always mention that surviving individuals pass on their **alleles** to offspring.",
            "In selective breeding questions, remember to state that the selection and breeding process is repeated over **many generations**.",
          ],
          commonMistakes: [
            "Saying organisms adapt 'in order to survive'; individuals with existing advantageous mutations survive better.",
            "Confusing selective breeding (human-directed) with natural selection (nature-directed).",
          ],
          recap: [
            "Describe the process of natural selection. [5]",
            "Describe how selective breeding is carried out to produce sheep with thicker wool. [4]",
            "State two differences between natural selection and selective breeding. [2]",
          ],
        },
      ],
    },
    {
      number: 19,
      title: "Organisms and their Environment",
      section: "19. Organisms and their Environment",
      topic: "Core Topic 19",
      intro: "Core revision notes for **Topic 19: Organisms and their Environment** for Cambridge IGCSE Biology (0610/0970). Explores energy flow from the Sun, food chains and food webs, ecological pyramids, the carbon cycle, and factors controlling population growth.",
      subheadings: [
        {
          title: "Energy Flow, Food Chains, and Food Webs",
          body: "The **Sun is the principal source of energy input** to biological systems:\n- Light energy from the Sun is captured by green plants through photosynthesis and converted into **chemical energy** stored in organic molecules.\n- This chemical energy flows through living organisms when consumers feed on producers and other consumers.\n- Energy is eventually lost to the environment as heat from cellular respiration, meaning energy flows **unidirectionally** through ecosystems and is not recycled.\n\n**Feeding Roles:**\n- **Food chain:** shows the transfer of energy from one organism to the next, beginning with a producer.\n- **Food web:** a network of interconnected food chains.\n- **Producer:** an organism that makes its own organic nutrients, usually using sunlight through photosynthesis.\n- **Consumer:** an organism that gets its energy by feeding on other organisms.\n- **Trophic levels:** producers $\\rightarrow$ primary consumers (herbivores) $\\rightarrow$ secondary consumers (carnivores) $\\rightarrow$ tertiary consumers $\\rightarrow$ quaternary consumers.\n- **Herbivore:** animal that gets energy by eating plants.\n- **Carnivore:** animal that gets energy by eating other animals.\n- **Decomposer:** organism that gets energy from dead or waste organic material (e.g. bacteria and fungi).\n\n**Human Impact on Food Webs:**\n- **Overharvesting:** removing excessive numbers of a predator or prey species disrupts populations of other species in the food web.\n- **Introducing foreign (invasive) species:** non-native species compete with native species for food and shelter, often lacking natural predators and causing native populations to decline.",
          groups: [
            {
              subTitle: "Feeding definitions",
              bullets: [
                "**Producer:** makes own organic food using sunlight via photosynthesis.",
                "**Primary consumer:** herbivore eating producers.",
                "**Secondary consumer:** carnivore eating primary consumers.",
                "**Tertiary consumer:** carnivore eating secondary consumers.",
                "**Decomposer:** breaks down dead organic matter and animal wastes.",
              ],
            },
          ],
          examinerTips: [
            "In a food chain, arrows indicate the **direction of energy transfer** (from organism eaten to organism eating), NOT who eats whom.",
            "Always begin a food chain with a **producer** (green plant or algae).",
          ],
          commonMistakes: [
            "Drawing food chain arrows backwards.",
            "Omitting the Sun when asked about the principal energy source of an ecosystem.",
          ],
          recap: [
            "State the principal source of energy input to biological systems. [1]",
            "Define producer, consumer, herbivore, carnivore, and decomposer. [5]",
            "Describe the impact of overharvesting a top predator on the rest of the food web. [3]",
          ],
        },
        {
          title: "Ecological Pyramids and Trophic Levels",
          body: "A **trophic level** is the **position of an organism in a food chain, food web, or ecological pyramid**:\n\n**Pyramids of Numbers:**\n- Shows the **number of individual organisms** at each trophic level in a food chain.\n- Often pyramid-shaped, but can be inverted or irregular (e.g. one huge oak tree supporting thousands of caterpillars).\n\n**Pyramids of Biomass:**\n- Shows the **total dry mass of biological material** at each trophic level at a particular time.\n- Pyramids of biomass are almost always **true pyramid shapes** (widest at base, tapering towards top) because biomass decreases at each successive trophic level.\n\n**Advantage of Pyramids of Biomass:**\n- A pyramid of biomass is a more accurate representation of a food chain than a pyramid of numbers because it accounts for the actual size and mass of organisms rather than just their quantity.",
          groups: [
            {
              subTitle: "Trophic level hierarchy",
              bullets: [
                "**Trophic level 1:** Producers (green plants).",
                "**Trophic level 2:** Primary consumers (herbivores).",
                "**Trophic level 3:** Secondary consumers (carnivores).",
                "**Trophic level 4:** Tertiary consumers (top carnivores).",
              ],
            },
          ],
          examinerTips: [
            "Draw ecological pyramids with horizontal rectangular bars symmetrical around a central vertical axis.",
            "Explain that pyramids of biomass account for organism size, making them more reliable than pyramids of numbers.",
          ],
          commonMistakes: [
            "Drawing pyramids as smooth triangles rather than stepped rectangular bars.",
            "Placing consumers at the bottom of the pyramid; producers must always be at the base.",
          ],
          recap: [
            "Define the term trophic level. [1]",
            "Explain why a pyramid of numbers can be inverted while a pyramid of biomass is typically pyramid-shaped. [3]",
            "State one advantage of using a pyramid of biomass instead of a pyramid of numbers. [1]",
          ],
        },
        {
          title: "The Carbon Cycle",
          body: "Carbon is cycled continuously between living organisms and the atmosphere:\n\n1. **Photosynthesis:** green plants absorb carbon dioxide from the atmosphere and fix it into organic carbohydrates (glucose and starch).\n2. **Respiration:** all living organisms (plants, animals, decomposers) break down glucose, releasing carbon dioxide back into the atmosphere.\n3. **Feeding:** carbon compounds pass along food chains when animals consume plants and other animals.\n4. **Decomposition:** when organisms die and produce waste, decomposers (bacteria and fungi) feed on dead organic matter and respire, releasing carbon dioxide.\n5. **Formation of fossil fuels:** over millions of years, dead plant and animal remains compressed under high heat and pressure without oxygen form fossil fuels (coal, oil, natural gas).\n6. **Combustion:** burning fossil fuels and wood in power stations, vehicles, and factories releases stored carbon as carbon dioxide into the atmosphere.",
          groups: [
            {
              subTitle: "Carbon cycle processes",
              bullets: [
                "**Processes removing CO2 from air:** Photosynthesis ONLY.",
                "**Processes returning CO2 to air:** Respiration, Decomposition, and Combustion.",
                "**Fossil fuel formation:** stores carbon underground over millions of years.",
              ],
            },
          ],
          examinerTips: [
            "Note that photosynthesis is the ONLY natural process in the carbon cycle that removes carbon dioxide from the atmosphere.",
            "Clearly show combustion releasing carbon dioxide from burning fossil fuels.",
          ],
          commonMistakes: [
            "Claiming that plants only respire at night; plants respire day and night.",
            "Confusing respiration (which releases CO2) with breathing.",
          ],
          recap: [
            "Name the only process in the carbon cycle that removes carbon dioxide from the atmosphere. [1]",
            "Describe how carbon is recycled through photosynthesis, feeding, respiration, decomposition, and combustion. [6]",
          ],
        },
        {
          title: "Populations and Population Growth",
          body: "**Ecological Terms:**\n- **Population:** a group of organisms of **one species**, living in the **same area**, at the **same time**.\n- **Community:** all of the populations of **different species** in an ecosystem.\n- **Ecosystem:** a unit containing the community of organisms and their physical environment, interacting together.\n\n**Factors Affecting Population Growth Rate:**\n- **Food supply:** abundance increases reproduction; scarcity slows growth.\n- **Competition:** competition for territory, food, and mates limits population size.\n- **Predation:** predators control prey numbers.\n- **Disease:** pathogens spread faster in dense populations, increasing death rate.\n\n**The Sigmoid (S-shaped) Population Growth Curve:**\nWhen a population grows in an environment with limited resources, it exhibits four phases:\n1. **Lag phase:** slow initial population increase while organisms adapt and mature.\n2. **Exponential (log) phase:** rapid rapid growth where birth rate far exceeds death rate due to abundant food, space, and lack of competition.\n3. **Stationary phase:** population plateaus; birth rate equals death rate as limiting factors (food, space, disease) prevent further growth.\n4. **Death phase:** population declines; death rate exceeds birth rate due to exhaustion of resources or accumulation of toxic wastes.",
          groups: [
            {
              subTitle: "The four phases of a sigmoid population curve",
              bullets: [
                "**1. Lag phase:** slow increase, adapting to environment.",
                "**2. Exponential (log) phase:** rapid doubling of population, resources plentiful.",
                "**3. Stationary phase:** birth rate = death rate, carrying capacity reached.",
                "**4. Death phase:** death rate > birth rate, resources depleted.",
              ],
            },
          ],
          examinerTips: [
            "Memorise the four phases in order: lag phase, exponential/log phase, stationary phase, death phase.",
            "In the stationary phase, state clearly that **birth rate equals death rate**.",
          ],
          commonMistakes: [
            "Writing that reproduction stops in the stationary phase; births still occur, but equal deaths.",
            "Confusing population (one species) with community (all species).",
          ],
          recap: [
            "Define population, community, and ecosystem. [3]",
            "State four factors that affect the rate of population growth. [4]",
            "Describe the four phases of a sigmoid curve of population growth in a limited environment. [4]",
          ],
        },
      ],
    },
    {
      number: 20,
      title: "Human Influences on Ecosystems",
      section: "20. Human Influences on Ecosystems",
      topic: "Core Topic 20",
      intro: "Core revision notes for **Topic 20: Human Influences on Ecosystems** for Cambridge IGCSE Biology (0610/0970). Explores the methods and consequences of intensive food production, habitat destruction and deforestation, aquatic and air pollution, greenhouse effect, and conservation of endangered species.",
      subheadings: [
        {
          title: "Food Supply and Agricultural Practices",
          body: "Human population growth has required enormous increases in global food production:\n\n**Methods Used to Increase Food Production:**\n- **Agricultural machinery:** tractors and combine harvesters enable cultivation of vast areas of land with greater speed and efficiency.\n- **Chemical fertilisers:** supply essential mineral ions (nitrates, phosphates, potassium) to crops to boost growth and crop yields.\n- **Insecticides:** chemical sprays that kill insect pests, preventing crop damage and improving yield and quality.\n- **Herbicides:** chemicals that kill weeds, reducing competition with crops for water, light, space, and mineral ions.\n- **Selective breeding:** breeding crop varieties and livestock with desirable traits (e.g. pest resistance, high grain yield, high milk production).\n\n**Large-scale Monocultures of Crops:**\n- **Monoculture:** growing large areas of a single crop species.\n- **Advantages:** high yield, efficient mechanized planting and harvesting, reduced labour costs.\n- **Disadvantages:** drastically reduces biodiversity, promotes massive pest outbreaks requiring heavy pesticide use, and depletes specific soil nutrients.\n\n**Intensive Livestock Production:**\n- **Advantages:** high yield of meat, milk, and eggs in a small land area; animals protected from predators and weather.\n- **Disadvantages:** ethical concerns regarding animal confinement; rapid spread of infectious diseases requiring antibiotics; large amounts of manure causing water pollution.",
          groups: [
            {
              subTitle: "Agricultural methods summary",
              bullets: [
                "**Machinery:** large scale cultivation and harvesting.",
                "**Fertilisers:** supply nitrates and minerals to enhance growth.",
                "**Insecticides:** eliminate insect pests eating crops.",
                "**Herbicides:** eliminate weed competition.",
                "**Selective breeding:** produces higher yielding varieties.",
              ],
            },
          ],
          examinerTips: [
            "State the difference between insecticides (kill insect pests) and herbicides (kill competing weeds).",
            "Be prepared to balance both advantages and disadvantages of monocultures and intensive farming.",
          ],
          commonMistakes: [
            "Saying fertilisers kill weeds; fertilisers provide mineral nutrients to plants.",
            "Confusing intensive farming with extensive farming.",
          ],
          recap: [
            "Describe five ways humans have increased food production. [5]",
            "Explain two advantages and two disadvantages of large-scale monocultures. [4]",
            "Describe the advantages and disadvantages of intensive livestock production. [4]",
          ],
        },
        {
          title: "Habitat Destruction and Deforestation",
          body: "**Biodiversity** is the **number of different species that live in an area**.\n\n**Reasons for Habitat Destruction:**\n- Clearing land for **housing and human settlements** due to human population growth.\n- Clearing land for **crop plant production and livestock grazing**.\n- **Extraction of natural resources** (mining, quarrying, logging for timber).\n- **Freshwater and marine pollution** destroying aquatic habitats.\n\n**Undesirable Effects of Deforestation:**\nDeforestation is the permanent clearing of forests by humans:\n1. **Reducing biodiversity and extinction:** animals and plants lose their natural habitats and food sources, leading to extinction.\n2. **Soil erosion and loss of soil:** without tree roots to bind the soil, topsoil is washed away by rain, leaving infertile bedrock.\n3. **Flooding:** without trees to absorb rainwater and slow surface runoff, rainwater flows rapidly into rivers, causing flash flooding.\n4. **Increase of carbon dioxide in the atmosphere:** fewer trees mean less photosynthesis to absorb CO2; furthermore, burning cleared trees or decomposing timber releases additional CO2, enhancing global warming.",
          groups: [
            {
              subTitle: "Consequences of deforestation",
              bullets: [
                "**Loss of biodiversity:** species loss and extinction.",
                "**Soil erosion:** washing away of topsoil by rain and wind.",
                "**Flooding:** rapid runoff into rivers.",
                "**Increased atmospheric CO2:** reduced photosynthesis and burning of wood.",
              ],
            },
          ],
          examinerTips: [
            "Define biodiversity as the **number of different species that live in an area**.",
            "Name at least four distinct effects of deforestation: habitat loss/extinction, soil erosion, flooding, increased atmospheric CO2.",
          ],
          commonMistakes: [
            "Saying deforestation reduces oxygen in the atmosphere to toxic levels. The primary atmospheric impact is the increase in **carbon dioxide**.",
          ],
          recap: [
            "Define biodiversity. [1]",
            "State three human activities that lead to habitat destruction. [3]",
            "Explain the undesirable environmental effects of deforestation. [5]",
          ],
        },
        {
          title: "Pollution of Water and Air",
          body: "**Water Pollution:**\n- **Untreated sewage and excess fertiliser:** when sewage and agricultural fertilisers wash into rivers and lakes, they cause rapid overgrowth of algae (algal blooms). When algae die, decomposers (aerobic bacteria) multiply and consume dissolved oxygen through respiration, causing the water to become deoxygenated, resulting in the death of fish and other aquatic organisms.\n- **Non-biodegradable plastics:** plastics cannot be broken down by decomposers. They persist for centuries in both aquatic and terrestrial ecosystems, causing wildlife to choke, swallow plastic thinking it is food, or become entangled, and accumulate in watercourses causing blockages.\n\n**Air Pollution, Greenhouse Gases, and Climate Change:**\n- **Carbon dioxide ($CO_2$):** released by burning fossil fuels (coal, oil, natural gas) and deforestation.\n- **Methane ($CH_4$):** released from livestock farming (cattle digestion), rice paddy fields, and decomposing landfill waste.\n- **The Enhanced Greenhouse Effect:** increased greenhouse gases trap more thermal energy in the atmosphere, leading to **global warming** and **climate change** (rising sea levels, melting ice caps, extreme droughts and storms).",
          groups: [
            {
              subTitle: "Major pollutants",
              bullets: [
                "**Untreated sewage / fertiliser:** deoxygenates water, killing fish.",
                "**Non-biodegradable plastics:** persist, choke animals, block drains.",
                "**CO2 and Methane:** greenhouse gases driving global warming and climate change.",
              ],
            },
          ],
          examinerTips: [
            "Explain that fertilisers and sewage cause decomposers to use up dissolved oxygen in water, suffocating fish.",
            "Name the two primary greenhouse gases: carbon dioxide and methane.",
          ],
          commonMistakes: [
            "Confusing the greenhouse effect (global warming) with ozone layer depletion.",
            "Saying plastics dissolve or decompose naturally in water.",
          ],
          recap: [
            "Describe the effects of untreated sewage and excess fertiliser on an aquatic ecosystem. [4]",
            "Describe the environmental problems caused by non-biodegradable plastics. [3]",
            "Name two greenhouse gases and describe their role in climate change. [3]",
          ],
        },
        {
          title: "Conservation and Sustainable Management",
          body: "A **sustainable resource** is one which is **produced as rapidly as it is removed from the environment so that it does not run out**.\n\n- Resources that can be conserved and managed sustainably include **forests** (by replanting and selective felling) and **fish stocks** (by fishing quotas and net mesh restrictions).\n\n**Why Organisms Become Endangered or Extinct:**\n- **Climate change:** altered temperatures and rainfall patterns make habitats unsuitable.\n- **Habitat destruction:** clearing land for human development.\n- **Hunting and poaching:** killing animals for meat, fur, tusks, or sport.\n- **Overharvesting:** taking wild species faster than they can reproduce.\n- **Pollution:** toxic waste and chemicals degrading habitats.\n- **Introduced species:** invasive species outcompeting native wildlife or introducing new diseases.\n\n**Methods of Conserving Endangered Species:**\n- **Monitoring and protecting species and habitats:** creating protected national parks and nature reserves.\n- **Education:** educating the public and local communities on the importance of wildlife conservation.\n- **Captive breeding programmes:** breeding endangered species in zoos and wildlife sanctuaries for eventual reintroduction into the wild.\n- **Seed banks:** preserving seeds of endangered plant species under cold, dry conditions to protect genetic diversity.",
          groups: [
            {
              subTitle: "Core conservation methods",
              bullets: [
                "**Protected habitats:** national parks and reserves.",
                "**Education:** raising awareness about biodiversity.",
                "**Captive breeding:** breeding rare animals in zoos for reintroduction.",
                "**Seed banks:** storing plant genetic diversity for the future.",
              ],
            },
          ],
          examinerTips: [
            "Memorise the definition of a sustainable resource: **produced as rapidly as it is removed from the environment so that it does not run out**.",
            "State four methods of conserving endangered species: protecting habitats, education, captive breeding, and seed banks.",
          ],
          commonMistakes: [
            "Defining a sustainable resource as simply 'a resource that never finishes' without mentioning the balance between removal and production.",
          ],
          recap: [
            "Define the term sustainable resource. [2]",
            "State six reasons why organisms may become endangered or extinct. [6]",
            "Describe four ways in which endangered species can be conserved. [4]",
          ],
        },
      ],
    },
    {
      number: 21,
      title: "Biotechnology and Genetic Modification",
      section: "21. Biotechnology and Genetic Modification",
      topic: "Core Topic 21",
      intro: "Core revision notes for **Topic 21: Biotechnology and Genetic Modification** for Cambridge IGCSE Biology (0610/0970). Explores the use of microorganisms in industrial biotechnology (biofuels, bread-making, pectinase, biological detergents) and the principles and applications of genetic modification in bacteria and crops.",
      subheadings: [
        {
          title: "Role of Bacteria and Microorganisms in Biotechnology",
          body: "**Biotechnology** is the application of biological organisms, systems, or processes to manufacturing and service industries.\n\n**Why Bacteria are Useful in Biotechnology and Genetic Modification:**\n1. **Rapid reproduction rate:** bacteria reproduce very quickly under optimal conditions, producing millions of cells in a short period.\n2. **Ability to make complex molecules:** bacteria possess the metabolic machinery to synthesise complex organic molecules (such as enzymes and human proteins).\n\n**Industrial Applications of Microorganisms:**\n- **Anaerobic respiration in yeast for biofuel:**\n  - Yeast is grown in sugar solutions (from maize, sugar cane, or waste plant material).\n  - Yeast respires anaerobically: $\\text{glucose} \\rightarrow \\text{alcohol (ethanol)} + \\text{carbon dioxide}$.\n  - The ethanol is extracted by distillation and used as a renewable biofuel for motor vehicles.\n- **Anaerobic respiration in yeast for bread-making:**\n  - Yeast is mixed with flour, water, and sugar to make bread dough.\n  - Yeast breaks down sugar anaerobically, producing bubbles of **carbon dioxide** gas.\n  - The trapped carbon dioxide bubbles expand, causing the dough to rise and giving bread its spongy texture.\n  - Any ethanol produced evaporates during baking.\n- **Use of pectinase in fruit juice production:**\n  - Fruit cell walls contain a substance called **pectin** that makes fruit pulp sticky and juice cloudy.\n  - The enzyme **pectinase** breaks down pectin, releasing more juice (higher yield) and making the juice clear.\n- **Biological washing powders:**\n  - Contain digestive enzymes (such as **proteases** to break down protein stains like blood and egg, and **lipases** to break down grease and oil stains).\n  - They work effectively at lower wash temperatures (30–40 °C), saving energy and money.",
          groups: [
            {
              subTitle: "Why bacteria are useful",
              bullets: [
                "Rapid reproduction rate (doubling every 20 minutes under ideal conditions).",
                "Ability to produce complex proteins and metabolic compounds.",
              ],
            },
            {
              subTitle: "Key biotechnology applications",
              bullets: [
                "**Biofuel:** yeast ferments sugar to ethanol fuel.",
                "**Bread-making:** CO2 bubbles from yeast make dough rise.",
                "**Pectinase:** breaks down plant pectin to clarify fruit juice.",
                "**Biological washing powders:** proteases and lipases digest protein and fat stains.",
              ],
            },
          ],
          examinerTips: [
            "For bread-making, state clearly that it is **carbon dioxide** that causes the dough to rise, and that alcohol evaporates.",
            "For biological detergents, name the enzymes involved: proteases for protein stains, lipases for fat/oil stains.",
          ],
          commonMistakes: [
            "Saying yeast makes oxygen in bread dough; yeast respires anaerobically producing carbon dioxide.",
            "Using biological washing powders in boiling water; boiling water denatures the enzymes.",
          ],
          recap: [
            "State two reasons why bacteria are useful in biotechnology and genetic modification. [2]",
            "Describe the role of yeast in the production of ethanol for biofuels and in bread-making. [4]",
            "Explain the use of pectinase in fruit juice production and enzymes in biological washing powders. [4]",
          ],
        },
        {
          title: "Genetic Modification",
          body: "**Genetic modification** is **changing the genetic material of an organism by removing, changing, or inserting individual genes**.\n\n**Core Examples of Genetic Modification:**\n1. **Insertion of human genes into bacteria to produce human proteins:**\n   - The human gene for **insulin** is inserted into bacterial plasmids.\n   - The genetically modified bacteria multiply in fermenters and produce large quantities of pure human insulin to treat people with diabetes.\n2. **Insertion of genes into crop plants to confer resistance to herbicides:**\n   - Crops are modified to resist specific weedkillers.\n   - Farmers can spray fields with herbicides to kill competing weeds without harming the crop plants, increasing harvest yield.\n3. **Insertion of genes into crop plants to confer resistance to insect pests:**\n   - Genes from a bacterium that produce a natural insect toxin (e.g. Bt crops) are inserted into plants (like maize and cotton).\n   - Insects that eat the crop are killed by the toxin, reducing crop damage and the need for chemical insecticides.\n4. **Insertion of genes into crop plants to improve nutritional qualities:**\n   - Crops can be genetically engineered to contain higher levels of essential vitamins and minerals.\n   - Example: Golden Rice has been engineered to produce beta-carotene (which the human body converts to **vitamin A**), preventing blindness and deficiency diseases in developing countries.",
          groups: [
            {
              subTitle: "Definition and examples",
              bullets: [
                "**Genetic modification:** changing the genetic material of an organism by removing, changing, or inserting individual genes.",
                "**Human insulin in bacteria:** treats diabetes.",
                "**Herbicide-resistant crops:** allows weed spraying without damaging crops.",
                "**Insect-resistant crops:** plant produces own toxin to kill insect pests.",
                "**Nutritional enhancement:** crops enriched with vitamins (e.g. Golden Rice with vitamin A).",
              ],
            },
          ],
          examinerTips: [
            "Memorise the definition of genetic modification word-for-word: **changing the genetic material of an organism by removing, changing or inserting individual genes**.",
            "Learn the four core examples: human proteins in bacteria, herbicide resistance, insect pest resistance, and improved nutritional quality.",
          ],
          commonMistakes: [
            "Confusing genetic modification (inserting genes directly) with selective breeding (crossing whole organisms).",
            "Saying genetic modification changes whole species overnight; it alters specific genes in organisms.",
          ],
          recap: [
            "Define the term genetic modification. [2]",
            "Outline four examples of genetic modification in bacteria and crop plants. [4]",
            "Explain the advantage to farmers of growing crops genetically modified to be resistant to herbicides. [2]",
          ],
        },
      ],
    },
  ],
};
