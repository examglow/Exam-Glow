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
      intro: "All living organisms share seven fundamental life processes summarised by the acronym MRSGREN. Understanding these processes allows biologists to distinguish living from non-living matter and to appreciate why viruses occupy a controversial position. Classification organises the enormous diversity of life into a logical hierarchy based on shared structural features and, increasingly, DNA evidence. The binomial naming system gives every species a unique two-part Latin name that is recognised worldwide regardless of language.",
      subheadings: [
        {
          title: "The Seven Characteristics of Life (MRSGREN)",
          body: "Every living organism must carry out all seven processes to be considered alive. Movement is a change in position caused by the organism itself — this includes the slow bending of a plant shoot towards light (phototropism) as well as the rapid locomotion of animals. Respiration is the release of energy from organic molecules inside cells; it is not the same as breathing, which is merely the ventilation of lungs. Sensitivity means detecting stimuli such as light, touch, chemicals, or temperature and producing an appropriate response. Growth is a permanent increase in dry mass caused by an increase in cell number, cell size, or both — this is why dry mass rather than wet mass is used, because water content can fluctuate. Reproduction produces new individuals of the same species; without reproduction a species eventually becomes extinct. Excretion removes the toxic waste products of metabolism — carbon dioxide from respiration, urea from protein breakdown — and is distinct from egestion, which removes undigested food. Nutrition is the taking in and use of materials for energy, growth, and development, whether by photosynthesis (autotrophic) or ingestion and digestion (heterotrophic). Viruses show none of these processes independently and can only reproduce inside a host cell, which is why biologists do not classify them as living organisms.",
          groups: [
            {
              subTitle: "Key distinctions examiners test",
              bullets: [
                "**Respiration vs breathing**: Respiration is a chemical process in every living cell that releases energy from glucose. Breathing (ventilation) is a physical process of moving air in and out of the lungs. Candidates who write 'breathing' when asked about respiration will lose all marks.",
                "**Excretion vs egestion**: Excretion removes metabolic waste produced inside cells (CO2, urea, excess water). Egestion removes undigested material that was never absorbed into cells. Faeces is egested, not excreted.",
                "**Growth measured as dry mass**: Wet mass changes when an organism drinks water. Dry mass measures the actual increase in organic material, making it a more reliable indicator of true biological growth.",
                "**Viruses and living status**: Viruses have no cells, no cytoplasm, no ribosomes, and cannot carry out any life process independently. They are considered non-living because they depend entirely on a host cell's machinery to replicate."
              ]
            }
          ],
          recap: [
            "State four characteristics of living organisms. [4]",
            "Explain why viruses are not considered to be living organisms. [2]",
            "Distinguish between excretion and egestion. [2]",
            "Explain why dry mass rather than wet mass is used to measure growth in plants. [2]"
          ]
        },
        {
          title: "Classification: The Five Kingdoms",
          body: "Taxonomists arrange organisms into a hierarchy of groups from most inclusive (domain/kingdom) to least inclusive (species). The five kingdoms recognised at IGCSE are Animals, Plants, Fungi, Protoctists, and Prokaryotes (Bacteria). Animals are multicellular eukaryotes whose cells lack cell walls; they obtain nutrition heterotrophically by ingestion and have nervous coordination. Plants are multicellular eukaryotes with cellulose cell walls and chloroplasts containing chlorophyll; they make food autotrophically by photosynthesis. Fungi are mostly multicellular eukaryotes with chitin cell walls; they are saprotrophic, secreting digestive enzymes outside the body and absorbing the soluble products. Protoctists are eukaryotes that are mostly unicellular and include animal-like protozoa (e.g. Amoeba, Plasmodium) and plant-like algae (e.g. Chlorella, Spirogyra). Prokaryotes (Bacteria) are unicellular organisms with no true membrane-bound nucleus; their genetic material is a circular DNA molecule in the cytoplasm, and they have 70S ribosomes (smaller than eukaryotic 80S ribosomes). The taxonomic hierarchy from most inclusive to least is: Kingdom, Phylum, Class, Order, Family, Genus, Species.",
          groups: [
            {
              subTitle: "Comparing the five kingdoms",
              bullets: [
                "**Animals**: Multicellular, eukaryotic, no cell wall, no chloroplasts, heterotrophic by ingestion, coordinated by nervous system. Examples: mammals, insects, fish.",
                "**Plants**: Multicellular, eukaryotic, cellulose cell wall, chloroplasts present, autotrophic by photosynthesis, store carbohydrate as starch. Examples: flowering plants, ferns, mosses.",
                "**Fungi**: Mostly multicellular (hyphae forming mycelium), eukaryotic, chitin cell wall, no chloroplasts, saprotrophic nutrition, store carbohydrate as glycogen. Examples: mushrooms, Penicillium, yeast (unicellular fungus).",
                "**Protoctists**: Mostly unicellular, eukaryotic, diverse nutrition (some photosynthesise, some ingest). Protozoa include Amoeba and Plasmodium (malaria parasite); algae include Spirogyra.",
                "**Prokaryotes**: Unicellular, no true nucleus (nucleoid region), no membrane-bound organelles, circular DNA, 70S ribosomes, cell wall of murein. Examples: Escherichia coli, Lactobacillus."
              ]
            },
            {
              subTitle: "Vertebrate classes",
              bullets: [
                "**Fish**: Ectothermic (body temperature varies with environment), wet scales, gills for gas exchange, lay soft unshelled eggs in water, lateral line detects water pressure changes.",
                "**Amphibians**: Ectothermic, moist permeable skin used for gas exchange, gills as larvae then lungs as adults, jelly-covered eggs in water (no shell). Examples: frogs, toads, newts.",
                "**Reptiles**: Ectothermic, dry scaly skin, lungs only, leathery-shelled eggs on land, internal fertilisation. Examples: snakes, lizards, crocodiles.",
                "**Birds**: Endothermic (maintain constant body temperature), feathers, wings (forelimbs modified), hard-shelled eggs, beak with no teeth, air sacs for efficient gas exchange.",
                "**Mammals**: Endothermic, hair or fur, mammary glands produce milk to nourish young, viviparous (give birth to live young, except monotremes), diaphragm present, heterodont teeth."
              ]
            }
          ],
          recap: [
            "State three features that distinguish fungi from plants. [3]",
            "Explain why bacteria are classified as prokaryotes rather than eukaryotes. [3]",
            "List the features that all vertebrates share and name the five vertebrate classes. [5]",
            "A student says that a mushroom is a plant because it grows from the ground. Give two reasons why this is incorrect. [2]"
          ]
        },
        {
          title: "Binomial Nomenclature and Dichotomous Keys",
          body: "Every species is given a unique two-part scientific name consisting of the genus name (capitalised) followed by the species name (lower case), both written in italics when typed or underlined when handwritten. For example, modern humans are Homo sapiens. The system, devised by Carl Linnaeus in the 18th century, allows scientists worldwide to refer to the same organism unambiguously regardless of their native language. A dichotomous key is a tool for identifying unknown organisms by presenting a series of paired statements (or questions) at each step; the user selects the statement that best describes the organism and follows the branch until an identification is reached. Each pair of statements must describe features that are clearly observable and mutually exclusive, such as 'has wings / does not have wings'. Well-designed keys use characters that are unambiguous (quantitative measurements are better than subjective descriptors), present the most useful distinguishing features first, and never use the same pair of characters twice.",
          groups: [
            {
              subTitle: "Rules for writing binomial names",
              bullets: [
                "The genus name is written first with a capital initial letter: *Homo*. The species name is written second in lower case: *sapiens*. Together: *Homo sapiens*.",
                "Both words are italicised when typed or underlined when handwritten. After the full name has been written once in a passage, the genus may be abbreviated to its initial letter: *H. sapiens*.",
                "Scientific names are Latin or Latinised Greek, which allows international use. Common names like 'jaguar' are ambiguous — different animals may share a common name in different countries."
              ]
            }
          ],
          recap: [
            "A student writes the scientific name of a tiger as PANTHERA TIGRIS. Give two mistakes in this notation and write the name correctly. [3]",
            "Describe how to construct a dichotomous key for four different insects. [4]",
            "State two advantages of using binomial nomenclature rather than common names. [2]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Organisation of the Organism",
      intro: "All living organisms are composed of cells, the smallest units capable of carrying out life processes. In multicellular organisms, cells with the same structure and function group together to form tissues, tissues combine to form organs, and organs work in coordinated organ systems. Understanding cell ultrastructure — the detailed internal architecture visible under an electron microscope — is essential for explaining how cells carry out their specific functions. Both animal and plant cells share certain features, but plant cells have additional structures that reflect their autotrophic lifestyle.",
      subheadings: [
        {
          title: "Cell Ultrastructure: Animal and Plant Cells",
          body: "The cell membrane is a phospholipid bilayer with embedded proteins that controls the movement of substances into and out of the cell. The nucleus is surrounded by a double membrane (nuclear envelope) perforated by nuclear pores through which mRNA passes; it contains chromatin (DNA wound around histone proteins) and directs all cell activities by controlling protein synthesis. Mitochondria are the site of aerobic respiration — they have a double membrane, with the inner membrane folded into cristae that increase the surface area for the reactions of the electron transport chain; the fluid matrix contains enzymes for the Krebs cycle. Ribosomes are small organelles (80S in eukaryotes, 70S in prokaryotes) where polypeptide chains are assembled by translation of mRNA. Plant cells additionally possess a large central vacuole filled with cell sap (a concentrated solution of sugars and mineral salts) that maintains turgor pressure and supports the plant. Chloroplasts contain the green pigment chlorophyll in flattened membrane sacs called thylakoids, which are stacked into grana; the light-independent reactions occur in the stroma surrounding the grana. The cellulose cell wall outside the plant cell membrane provides structural support and prevents the cell from bursting by osmosis; it is fully permeable to water and solutes.",
          groups: [
            {
              subTitle: "Structures present in both animal and plant cells",
              bullets: [
                "**Cell membrane**: Phospholipid bilayer with protein channels and carrier proteins. Selectively permeable — controls entry and exit of molecules. Proteins act as receptors for hormones and as enzymes.",
                "**Nucleus**: Contains the genetic information (DNA) as chromatin. The nucleolus inside the nucleus manufactures ribosomal RNA. Controls which proteins the cell makes and therefore determines cell structure and function.",
                "**Cytoplasm**: Aqueous gel containing dissolved enzymes, glucose, amino acids, and organelles. Site of glycolysis (the first stage of respiration) and many other metabolic reactions.",
                "**Mitochondria**: Double membrane; inner membrane folded into cristae. Site of the Krebs cycle (matrix) and oxidative phosphorylation (inner membrane). Cells with high energy demands (muscle, sperm, kidney tubule cells) have more mitochondria.",
                "**Ribosomes**: Tiny organelles (no membrane) made of ribosomal RNA and protein. Site of protein synthesis. Free ribosomes make proteins for use in the cytoplasm; ribosomes on rough endoplasmic reticulum make proteins for export."
              ]
            },
            {
              subTitle: "Structures found only in plant cells",
              bullets: [
                "**Cell wall**: Made of cellulose microfibrils embedded in a polysaccharide matrix. Provides structural rigidity, prevents bursting during osmosis (limits swelling to produce turgor pressure). Fully permeable — does not control passage of molecules.",
                "**Chloroplasts**: Contain chlorophyll in thylakoid membranes (stacked as grana). Light reactions occur on thylakoid membranes; Calvin cycle occurs in stroma. Only present in green parts of the plant exposed to light.",
                "**Large central vacuole**: Filled with cell sap. Pushes cytoplasm against the cell wall, maintaining turgor. When the vacuole loses water, the cell becomes flaccid and the plant wilts.",
                "**Amyloplasts**: Colorless plastids that store starch granules. Found abundantly in storage organs like potato tubers and seeds."
              ]
            }
          ],
          recap: [
            "Describe the structure and function of mitochondria. [4]",
            "Explain why plant cells do not burst when placed in pure water, whereas animal cells do. [3]",
            "State three differences between a plant cell and an animal cell visible under a light microscope. [3]",
            "Explain why liver cells contain more mitochondria than skin cells. [2]"
          ]
        },
        {
          title: "Specialised Cells and Levels of Organisation",
          body: "A specialised cell is one that has a structure precisely adapted to carry out a particular function efficiently. Red blood cells (erythrocytes) are biconcave discs lacking a nucleus — the absence of a nucleus gives more room for haemoglobin (up to 280 million molecules per cell), and the biconcave shape increases the surface area to volume ratio so oxygen can diffuse in and out rapidly; the flexible membrane allows the cell to squeeze through narrow capillaries. Sperm cells have a streamlined head containing a haploid nucleus and an acrosome (containing enzymes to digest the egg's outer coating), a mid-piece packed with mitochondria to supply ATP for swimming, and a long flagellum for propulsion. Root hair cells have a greatly elongated projection that dramatically increases the surface area in contact with soil water, facilitating the uptake of water by osmosis and mineral ions by active transport; they have no chloroplasts because they are underground. Ciliated epithelial cells lining the trachea and bronchi bear hundreds of cilia that beat in coordinated waves to sweep mucus (trapping dust and pathogens) upward toward the pharynx. Tissues are groups of cells with the same structure performing the same function; organs contain several different tissues working together; organ systems contain multiple organs with a shared overall function.",
          groups: [
            {
              subTitle: "Adaptations of specialised cells",
              bullets: [
                "**Red blood cell**: No nucleus (more space for haemoglobin), biconcave shape (large SA:V ratio for rapid O2 diffusion), thin membrane (short diffusion distance), flexible (fits through capillaries 7 micrometres wide).",
                "**Sperm cell**: Streamlined head (reduces drag), acrosome (enzymes digest zona pellucida of egg), many mitochondria in mid-piece (provide ATP for flagellum movement), flagellum (propulsion through fluid).",
                "**Root hair cell**: Long thin extension (greatly increases SA for absorption), large vacuole (maintains water potential gradient for osmosis), no chloroplasts (underground — no light), many mitochondria (active transport of minerals).",
                "**Nerve cell (neurone)**: Long axon (transmits impulses over large distances), myelin sheath around axon (insulation, speeds up conduction by saltatory transmission), many mitochondria at synaptic terminals (ATP for neurotransmitter release)."
              ]
            }
          ],
          recap: [
            "Explain three ways in which a red blood cell is adapted for transporting oxygen. [3]",
            "Describe three adaptations of a root hair cell for the absorption of water and mineral ions. [3]",
            "Arrange the following in order from smallest to largest: organ system, cell, organism, tissue, organ. [1]",
            "Explain why sperm cells contain many mitochondria in their mid-piece region. [2]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Movement In and Out of Cells",
      intro: "Substances move across cell membranes by three processes: diffusion, osmosis, and active transport. Understanding each process requires knowing what drives the movement (concentration gradient, water potential gradient, or ATP), whether a membrane is required, and the direction of movement relative to the gradient. These processes underlie the absorption of digested food in the small intestine, gas exchange in the lungs and leaves, the uptake of water by plant roots, and the reabsorption of glucose in the kidney.",
      subheadings: [
        {
          title: "Diffusion",
          body: "Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, as a result of the random motion of particles. The word 'net' is important — particles move in both directions all the time, but there is an overall movement down the concentration gradient until equilibrium is reached. Diffusion requires no energy input from the cell (it is a passive process) and can occur in gases, liquids, and across cell membranes. The rate of diffusion is increased by: a steeper concentration gradient (greater difference in concentration), a higher temperature (particles have more kinetic energy), a larger surface area across which diffusion occurs, and a shorter diffusion distance (thinner membrane or tissue). In the lungs, oxygen diffuses from the alveolar air (high pO2) across the thin alveolar wall and capillary wall into the blood, while carbon dioxide diffuses in the opposite direction. The alveoli are adapted for rapid diffusion by having a very large total surface area (~70 m2), a one-cell-thick wall, a rich blood supply that maintains the concentration gradient, and a moist surface that allows gases to dissolve.",
          groups: [
            {
              subTitle: "Factors affecting the rate of diffusion",
              bullets: [
                "**Concentration gradient**: The steeper the gradient (greater difference in concentration on either side), the faster the rate of diffusion. This is why ventilation of the lungs is important — it continually replenishes O2 and removes CO2, maintaining a steep gradient.",
                "**Surface area**: A larger surface area provides more space for particles to cross simultaneously. Alveoli, villi, and microvilli are all adaptations that increase surface area to speed up diffusion.",
                "**Diffusion distance**: The shorter the path particles must travel, the faster diffusion occurs. Alveolar walls are only one cell thick (~0.2 micrometres) — this minimises diffusion distance.",
                "**Temperature**: Higher temperature gives particles more kinetic energy, so they move faster and diffuse more rapidly. At lower temperatures, diffusion slows significantly."
              ]
            }
          ],
          recap: [
            "Define diffusion. [2]",
            "Explain how the alveoli are adapted to maximise the rate of gas exchange. [4]",
            "State four factors that increase the rate of diffusion. [4]",
            "Explain why diffusion alone is insufficient to supply oxygen to all the cells in a large multicellular organism. [3]"
          ]
        },
        {
          title: "Osmosis",
          body: "Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential through a partially permeable membrane. Water potential is a measure of the tendency of water molecules to move — pure water has the highest water potential (0 kPa), and solutions have negative water potential values. When a solution is more concentrated (more solute dissolved), its water potential is lower (more negative). A partially permeable membrane has pores large enough for water molecules to pass through but not for most dissolved solute molecules. In plant cells, when placed in pure water, water enters by osmosis and the vacuole swells, pushing the cytoplasm against the cell wall — the cell becomes turgid. The cell wall resists further expansion, creating wall pressure, so plant cells cannot burst (lysis does not occur). When placed in a concentrated solution, water leaves by osmosis and the vacuole shrinks — the cytoplasm pulls away from the cell wall (plasmolysis) and the cell becomes flaccid. Animal cells have no cell wall, so when placed in pure water they take up water continuously until they burst (lysis); in a concentrated solution they shrink and become crenated (shrivelled). Osmosis is critical in plant support — turgid cells push against each other, making non-woody parts of the plant rigid.",
          groups: [
            {
              subTitle: "Osmosis in plant vs animal cells",
              bullets: [
                "**Plant cell in pure water**: Water enters by osmosis (high to low water potential). Vacuole swells, cell becomes turgid. Cell wall prevents bursting. Turgor pressure provides support to the plant.",
                "**Plant cell in concentrated solution**: Water leaves by osmosis. Vacuole and cytoplasm shrink. Cytoplasm pulls away from cell wall — this is called plasmolysis. The cell is plasmolysed and flaccid.",
                "**Animal cell in pure water**: Water enters by osmosis continuously. No cell wall to resist swelling — the cell bursts (lysis/haemolysis in red blood cells).",
                "**Animal cell in concentrated solution**: Water leaves by osmosis. Cell shrinks and becomes crenated (spiky appearance in red blood cells). Normal blood plasma is isotonic to red blood cells to prevent this."
              ]
            }
          ],
          recap: [
            "Define osmosis. [2]",
            "Explain what happens to a plant cell when it is placed in a concentrated sugar solution. Include the terms plasmolysis and flaccid. [4]",
            "A student places cylinders of potato in solutions of different concentrations and measures the change in mass. Predict and explain the results. [4]",
            "Explain why it would be dangerous to drink large quantities of seawater. [3]"
          ]
        },
        {
          title: "Active Transport",
          body: "Active transport is the movement of molecules or ions across a cell membrane from a region of lower concentration to a region of higher concentration — that is, against the concentration gradient — using energy from ATP. Because it works against the gradient, active transport requires carrier proteins in the membrane that act as pumps, and it is directly dependent on respiration. If a cell's respiration is inhibited (by cyanide, for example, or by lack of oxygen), active transport stops. Active transport is essential in many situations where substances must be accumulated against a gradient: mineral ions such as nitrates are absorbed by root hair cells from soil water (where their concentration is very low) into the cytoplasm (where their concentration is higher); glucose and amino acids are reabsorbed from the kidney tubule filtrate back into the blood even when their concentration in the blood is already high; and in the small intestine, glucose and amino acids are absorbed by epithelial cells even after their concentration in the blood exceeds that in the intestinal lumen.",
          groups: [
            {
              subTitle: "Comparing the three transport mechanisms",
              bullets: [
                "**Diffusion**: Passive (no ATP needed), down the concentration gradient, no carrier proteins required (for simple diffusion), can occur in any medium.",
                "**Osmosis**: Passive (no ATP needed), water only, down the water potential gradient, requires a partially permeable membrane.",
                "**Active transport**: Requires ATP from respiration, against the concentration gradient, requires specific carrier proteins, only across cell membranes.",
                "**Examiner note**: Questions often ask you to identify which process is occurring based on whether a substance moves with or against its concentration gradient. If it moves against the gradient, it must be active transport. If water moves through a membrane, it is osmosis."
              ]
            }
          ],
          recap: [
            "Explain why active transport requires energy but diffusion does not. [2]",
            "Describe how mineral ions are absorbed by root hair cells from the soil. [3]",
            "An experiment shows that adding a respiratory inhibitor to root cells stops the uptake of nitrate ions. Explain this observation. [3]",
            "Compare diffusion and active transport in terms of direction of movement, energy requirement, and the need for carrier proteins. [4]"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Biological Molecules",
      intro: "Living organisms are built from and fuelled by four main groups of biological molecules: carbohydrates, lipids, proteins, and nucleic acids. Each group has a characteristic monomer-polymer relationship — large complex molecules are built by joining smaller subunit molecules, a process called condensation, which releases water. Conversely, these polymers are broken down by hydrolysis, which adds water. Understanding the structure of each molecule type is essential for explaining its function, and the standard food tests allow identification of carbohydrates, lipids, and proteins in food samples.",
      subheadings: [
        {
          title: "Carbohydrates: Structure and Function",
          body: "Carbohydrates contain only carbon, hydrogen, and oxygen atoms, with the general formula (CH2O)n. The simplest carbohydrates are monosaccharides — single sugar units that cannot be hydrolysed further. Glucose (C6H12O6) is the primary fuel for cellular respiration; it exists as alpha and beta forms that differ only in the orientation of the -OH group on carbon 1. Two monosaccharides join by a condensation reaction to form a disaccharide with elimination of one water molecule, creating a glycosidic bond. Maltose (glucose + glucose) forms during starch digestion; sucrose (glucose + fructose) is the main transport sugar in plants. Polysaccharides are long chains of many monosaccharides. Starch consists of amylose (unbranched helical chains of alpha-glucose linked 1,4) and amylopectin (branched chains linked 1,4 and 1,6); its compact, insoluble, and osmotically inert structure makes it ideal for storage in plants. Glycogen in animals and fungi has the same monomers as amylopectin but is more heavily branched, allowing rapid enzymatic release of glucose during exercise. Cellulose chains of beta-glucose form hydrogen bonds between parallel chains, creating strong microfibrils that provide the tensile strength of plant cell walls.",
          groups: [
            {
              subTitle: "Food tests for carbohydrates",
              bullets: [
                "**Benedict's test for reducing sugars**: Add Benedict's reagent (blue) to the food sample and heat in a water bath for 5 minutes. A positive result shows a colour change from blue through green, yellow, orange, to a brick-red precipitate. All monosaccharides and most disaccharides (except sucrose) are reducing sugars.",
                "**Testing for non-reducing sugars (e.g. sucrose)**: First confirm the Benedict's test is negative (no colour change). Then add dilute hydrochloric acid and heat (to hydrolyse sucrose into glucose and fructose), neutralise with sodium hydrogen carbonate, then repeat the Benedict's test. A brick-red precipitate now confirms a non-reducing sugar was present.",
                "**Iodine test for starch**: Add iodine solution (brown/orange) to the sample. A positive result is a blue-black colour change. This is due to iodine molecules fitting inside the helical coil of amylose."
              ]
            }
          ],
          recap: [
            "Describe the chemical test for starch and state the result of a positive test. [2]",
            "Explain how sucrose can be tested for using Benedict's reagent. Include all steps. [4]",
            "Compare the structure of starch and cellulose and explain how their structures relate to their functions. [5]",
            "State two ways in which glucose is used by cells after it has been absorbed from the intestine. [2]"
          ]
        },
        {
          title: "Proteins: Structure and Function",
          body: "Proteins are composed of carbon, hydrogen, oxygen, nitrogen, and often sulfur. The monomers of proteins are amino acids, of which there are 20 different types used in living organisms, all sharing the same basic structure: a central carbon bonded to an amino group (-NH2), a carboxyl group (-COOH), a hydrogen atom, and a variable R-group (side chain) that gives each amino acid its unique chemical properties. Two amino acids join by a condensation reaction between the amino group of one and the carboxyl group of another, releasing water and forming a peptide bond; the resulting two-amino-acid chain is a dipeptide. Long chains of amino acids form polypeptides, and one or more polypeptide chains fold into the specific three-dimensional shape of a functional protein. The sequence of amino acids (primary structure) determines how the chain folds through hydrogen bonds and other interactions into secondary structures (alpha helices, beta pleated sheets) and ultimately into the precise tertiary structure that gives the protein its function. Proteins carry out an enormous variety of functions: enzymes catalyse metabolic reactions; structural proteins like collagen and keratin provide mechanical support; haemoglobin transports oxygen; antibodies provide immunity; hormones like insulin act as chemical messengers.",
          groups: [
            {
              subTitle: "The Biuret test for proteins",
              bullets: [
                "**Procedure**: Add sodium hydroxide solution to make the sample alkaline, then add a few drops of copper sulfate solution. A positive result is a purple/violet colour. The Biuret reagent detects peptide bonds — the copper ions coordinate with nitrogen atoms in adjacent peptide bonds to produce the colour.",
                "**Negative result**: The solution remains blue (the colour of copper sulfate). This indicates no protein is present.",
                "**Important**: Do NOT heat this test. Heating is required for Benedict's test but not for Biuret. Heating with NaOH would hydrolyse the peptide bonds and give a false negative."
              ]
            }
          ],
          recap: [
            "Describe the Biuret test for protein including reagents used, procedure, and positive result. [3]",
            "Explain how the primary structure of a protein determines its function. [3]",
            "Name the type of bond formed between two amino acids and describe the chemical reaction by which it forms. [2]",
            "State three different functions of proteins in the human body and give a named example of each. [3]"
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Enzymes",
      intro: "Enzymes are biological catalysts — protein molecules that speed up the rate of chemical reactions inside and outside living cells without being permanently altered or consumed in the reaction. They are essential for life because the chemical reactions of metabolism (respiration, digestion, photosynthesis, protein synthesis) would all proceed far too slowly at body temperature without them. Enzymes act on specific substrates and are therefore said to be specific — each enzyme catalyses only one reaction or a narrow range of similar reactions. Understanding how enzymes work and how their activity is affected by temperature, pH, and inhibitors is fundamental to Cambridge IGCSE Biology.",
      subheadings: [
        {
          title: "The Active Site and Enzyme-Substrate Specificity",
          body: "Every enzyme has an active site — a region with a specific three-dimensional shape that is complementary to the shape of the enzyme's substrate molecule. The substrate binds to the active site, forming an enzyme-substrate complex. During the reaction, the enzyme lowers the activation energy needed for the reaction, allowing it to proceed rapidly at body temperature. The products are released, and the enzyme is unchanged and free to bind another substrate molecule. The lock-and-key model describes the substrate fitting precisely into the rigid active site like a key into a lock. The induced fit model is more accurate: the active site is flexible and changes shape slightly when the substrate binds, optimising the fit and stressing chemical bonds in the substrate. The specificity of enzymes means that only substrates with the correct complementary shape can bind to a given enzyme — for example, sucrase only catalyses the hydrolysis of sucrose, not maltose or lactose. This specificity arises because the active site's precise shape is determined by the sequence of amino acids in the protein chain (primary structure) and the way they fold.",
          groups: [
            {
              subTitle: "Lock-and-key vs induced fit models",
              bullets: [
                "**Lock-and-key model**: The active site has a rigid, fixed shape exactly complementary to the substrate. The substrate fits like a key into the lock. This model explains specificity but not why the enzyme-substrate complex is more reactive.",
                "**Induced fit model**: The active site is flexible. When the substrate approaches, the enzyme changes shape slightly to achieve an optimum fit. This model better explains how the enzyme lowers activation energy by straining bonds in the substrate and optimising interactions at the active site.",
                "**Why enzymes are specific**: The active site's three-dimensional shape depends on the precise folding of the protein chain, which is determined by the amino acid sequence. Any substrate with a different shape cannot form effective interactions with the active site and will not bind. This is why each enzyme catalyses only specific reactions."
              ]
            }
          ],
          recap: [
            "Explain what is meant by the term 'active site' of an enzyme. [2]",
            "Explain why each enzyme is specific to one substrate or a small group of substrates. [3]",
            "Compare the lock-and-key model with the induced fit model of enzyme action. [3]",
            "Explain the term enzyme-substrate complex. [2]"
          ]
        },
        {
          title: "Effects of Temperature and pH on Enzyme Activity",
          body: "Enzyme activity is highly sensitive to both temperature and pH because both affect the shape of the active site. As temperature increases from 0°C, the rate of enzyme-catalysed reactions increases because both the enzyme and substrate molecules have more kinetic energy, so they collide more frequently and with more energy — more enzyme-substrate complexes form per unit time. However, above the optimum temperature (approximately 37-40°C for human enzymes), the rate drops sharply. High temperatures provide enough energy to break the hydrogen bonds and other weak interactions that maintain the enzyme's tertiary structure — the protein unfolds and the active site loses its specific shape. This irreversible process is called denaturation: the enzyme can no longer bind its substrate. pH also affects enzyme activity by altering the charge on amino acid R-groups in and around the active site. Each enzyme has an optimum pH; deviations in either direction change the ionic interactions that maintain the active site's shape, reducing activity. At extreme pH values, denaturation occurs as the protein structure is permanently disrupted. Pepsin (in the stomach) has an optimum pH of about 2; salivary amylase has an optimum of about 7; intestinal enzymes work best around pH 7-8.",
          groups: [
            {
              subTitle: "Describing enzyme denaturation correctly",
              bullets: [
                "**Denaturation definition**: The irreversible change in the tertiary (three-dimensional) structure of an enzyme due to breaking of hydrogen bonds and other weak interactions, resulting in a change in the shape of the active site so the substrate can no longer bind.",
                "**What denaturation is NOT**: The enzyme is not destroyed or dissolved — the peptide bonds in the primary structure remain intact. The protein chain still exists but is permanently unfolded.",
                "**Common exam error**: Many students write 'the enzyme is killed' or 'the enzyme is broken down'. Enzymes are not alive, so cannot be killed. The correct term is denatured. Always state that the active site changes shape and the substrate can no longer bind.",
                "**Effect of temperature on rate**: Below the optimum, the rate increases with temperature because of increased collision frequency. Above the optimum, the rate decreases because denaturation outweighs the benefit of increased kinetic energy. At the optimum, the rate is greatest."
              ]
            }
          ],
          recap: [
            "Explain why increasing temperature above 40°C causes a decrease in the rate of an enzyme-catalysed reaction. Use the terms denaturation and active site. [4]",
            "Explain why pepsin works most effectively in the stomach but not in the small intestine. [3]",
            "Sketch a graph of enzyme activity against temperature for a human enzyme, label the optimum temperature, and explain the shape of the curve. [4]",
            "Explain what happens to an enzyme molecule when it is denatured. [3]"
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Plant Nutrition",
      intro: "Plants are autotrophs — they manufacture their own organic molecules from inorganic raw materials using energy from sunlight. This process, photosynthesis, is the foundation of virtually every food chain on Earth. Carbon dioxide is fixed into glucose, which is then used for respiration, stored as starch, or converted into other organic molecules needed for growth. Mineral ions absorbed from the soil are also essential for the synthesis of specific molecules. Understanding the requirements, products, and limiting factors of photosynthesis allows farmers and horticulturalists to optimise crop yields.",
      subheadings: [
        {
          title: "Photosynthesis: Requirements, Products and the Equation",
          body: "Photosynthesis occurs in two stages: the light-dependent reactions (in the thylakoid membranes of chloroplasts) and the light-independent reactions, also known as the Calvin cycle (in the stroma). In the light-dependent reactions, chlorophyll absorbs light energy and uses it to split water molecules — a process called photolysis — releasing oxygen as a by-product and generating ATP and reduced NADP (a hydrogen carrier). In the light-independent reactions, ATP and reduced NADP are used to drive the fixation of carbon dioxide into organic molecules via the Calvin cycle; carbon dioxide reacts with a five-carbon acceptor molecule (RuBP) to eventually produce glucose. The overall word equation is: carbon dioxide + water → glucose + oxygen (using light energy and chlorophyll). The balanced symbol equation is: 6CO2 + 6H2O → C6H12O6 + 6O2. The process requires carbon dioxide as the carbon source for building organic molecules, water as a source of electrons and hydrogen for the light-dependent reactions, and light energy (absorbed by chlorophyll) to drive both stages.",
          groups: [
            {
              subTitle: "Investigating photosynthesis — key experiments",
              bullets: [
                "**Variegated leaf starch test**: A variegated leaf (green and white patches) is destarched in the dark, then left in light. The leaf is boiled in water (to kill cells and break down membranes), then in ethanol (to remove chlorophyll), then tested with iodine. Only the green regions turn blue-black — proving chlorophyll is needed.",
                "**Testing for light**: De-starched plant covered with foil except for a window; after several hours the starch test shows starch only where light reached — proving light is needed.",
                "**Testing for CO2**: De-starched plant placed in a sealed container with sodium hydroxide (which absorbs CO2). After time in light, starch test is negative — proving CO2 is needed.",
                "**Measuring the rate**: The rate of photosynthesis in aquatic plants (e.g. Elodea) is estimated by counting oxygen bubbles per minute or measuring their volume. As light intensity or CO2 concentration increases, the bubble rate increases up to the limiting factor."
              ]
            }
          ],
          recap: [
            "Write the word equation for photosynthesis. [2]",
            "Describe an experiment to show that chlorophyll is needed for photosynthesis using a variegated leaf. [5]",
            "State the two stages of photosynthesis, where each occurs in the chloroplast, and what each stage produces. [4]",
            "A student increases the CO2 concentration around a plant and finds the rate of photosynthesis does not increase further. Suggest why. [2]"
          ]
        },
        {
          title: "Limiting Factors of Photosynthesis",
          body: "A limiting factor is the factor present in the least favourable quantity that prevents the rate of a process from increasing further, even if other factors are optimal. For photosynthesis, the three main limiting factors are light intensity, carbon dioxide concentration, and temperature. At low light intensity, there is insufficient energy to drive the light-dependent reactions; increasing light intensity increases the rate. At high light intensity, if CO2 concentration is low, CO2 becomes limiting — there is not enough substrate for the Calvin cycle. Temperature affects the enzymes of the Calvin cycle (particularly RuBisCO); below the optimum, increasing temperature speeds the enzyme reactions; above the optimum (~25-35°C for most crop plants), denaturation reduces the rate. In a greenhouse, growers can control all three factors: artificial lighting extends the photoperiod; burning fuel or supplying CO2 tanks enriches the atmosphere; heating maintains optimal temperature. Understanding these interactions explains the shape of graphs showing rate of photosynthesis against light intensity at different CO2 concentrations or temperatures.",
          groups: [
            {
              subTitle: "Interpreting photosynthesis rate graphs",
              bullets: [
                "**At low light**: Rate increases linearly with light intensity — light is the limiting factor. Adding more CO2 or raising temperature has no effect at this point.",
                "**At the plateau**: Rate no longer increases with light intensity. CO2 or temperature is now limiting. If a higher CO2 line is drawn, it will plateau at a higher rate — CO2 was the limiting factor, not light.",
                "**Temperature effect**: Two curves at the same CO2 concentration but different temperatures will plateau at different rates. At the higher temperature, the Calvin cycle enzymes work faster, so the rate is higher until denaturation occurs.",
                "**Commercial application**: Tomato growers pipe CO2 from boiler exhaust into greenhouses, use supplemental LED lighting, and maintain ~25°C to push all three factors toward their optimum simultaneously."
              ]
            }
          ],
          recap: [
            "Define the term limiting factor and name three limiting factors for photosynthesis. [4]",
            "Explain why increasing light intensity beyond a certain point does not increase the rate of photosynthesis. [3]",
            "A grower adds a kerosene heater to a greenhouse. Explain two reasons why photosynthesis rate might increase. [2]",
            "Sketch a graph showing rate of photosynthesis against light intensity at two different CO2 concentrations. Annotate your graph to explain the results. [5]"
          ]
        }
      ]
    },
    {
      number: 7,
      title: "Human Nutrition",
      intro: "Humans are heterotrophic organisms that obtain energy and raw materials by ingesting and digesting complex organic molecules. The process of nutrition involves ingestion (taking food into the body), digestion (mechanical and chemical breakdown of food into small soluble molecules), absorption (passing these molecules from the gut into the blood), assimilation (using absorbed molecules for metabolism), and egestion (removing undigested material as faeces). Each nutrient class has specific roles in the body, and deficiencies of any essential nutrient lead to characteristic diseases. Digestion involves both physical breakdown (mastication, churning in the stomach) and chemical breakdown by specific digestive enzymes.",
      subheadings: [
        {
          title: "Nutrients and Their Functions",
          body: "Carbohydrates are the primary energy source; each gram provides about 17 kJ. Glucose is used directly in cellular respiration; excess glucose is stored as glycogen in the liver and muscles, and further excess is converted to fat. Fats (lipids) are concentrated energy stores (37 kJ per gram), provide insulation, protect organs, make up cell membranes, and are used to synthesise steroid hormones. Proteins provide the raw materials for growth and repair of tissues; they are broken down into amino acids, which are used to synthesise structural proteins (collagen, keratin), enzymes, hormones, antibodies, and haemoglobin. Vitamins are organic micronutrients needed in small amounts for specific metabolic functions. Vitamin C (ascorbic acid) is needed for the synthesis of collagen; deficiency causes scurvy (bleeding gums, poor wound healing). Vitamin D is needed for absorption of calcium from the gut and for bone mineralisation; deficiency causes rickets in children (soft, bending bones) and osteomalacia in adults. Mineral ions are inorganic micronutrients. Calcium is needed for bone and tooth formation and for muscle contraction and nerve impulse transmission. Iron is a component of haemoglobin (the oxygen-carrying protein in red blood cells); iron deficiency causes anaemia (insufficient haemoglobin, poor oxygen delivery). Water is needed as a solvent for metabolic reactions, as a transport medium in blood and lymph, as a reactant in hydrolysis and photosynthesis, and for temperature regulation (evaporation of sweat). Dietary fibre (cellulose) cannot be digested but provides bulk that stimulates peristalsis, preventing constipation and reducing risk of bowel cancer.",
          groups: [
            {
              subTitle: "Deficiency diseases and their causes",
              bullets: [
                "**Scurvy**: Caused by deficiency of vitamin C. Vitamin C is needed to hydroxylate proline and lysine residues in collagen. Without collagen, blood vessel walls weaken, causing bleeding gums, slow wound healing, and bruising easily.",
                "**Rickets (children) / Osteomalacia (adults)**: Caused by deficiency of vitamin D and/or calcium. Bones are insufficiently mineralised with calcium phosphate, causing softness, bowing of leg bones, and bone pain.",
                "**Anaemia**: Caused by iron deficiency. Iron is the central atom of the haem group in haemoglobin; insufficient iron means fewer or less effective haemoglobin molecules, reducing oxygen-carrying capacity. Symptoms: fatigue, pale skin, breathlessness.",
                "**Kwashiorkor**: Protein-energy malnutrition causing oedema (fluid accumulation in tissues), wasting of muscles, and impaired immune function. The swollen abdomen results from reduced plasma protein (albumin) production, lowering blood osmotic pressure so water moves from blood into tissues."
              ]
            }
          ],
          recap: [
            "State the role of iron in the body and explain what happens when iron is deficient. [3]",
            "Explain why dietary fibre is important even though it cannot be digested. [2]",
            "Explain how a deficiency of vitamin C leads to the symptoms of scurvy. [3]",
            "Compare the energy values per gram of carbohydrates and lipids and explain the advantage of storing energy as fat rather than glycogen. [3]"
          ]
        },
        {
          title: "Digestion and Absorption in the Alimentary Canal",
          body: "Digestion begins in the mouth, where teeth mechanically break food into smaller pieces, and salivary amylase begins the hydrolysis of starch into maltose. The food bolus travels down the oesophagus by peristalsis — coordinated waves of muscular contraction — to the stomach. In the stomach, hydrochloric acid (pH 1-2) denatures proteins and kills most ingested bacteria; pepsin (a protease) begins protein digestion by hydrolysing peptide bonds. Gastric glands secrete pepsinogen (inactive) which is converted to pepsin by the acidic pH. From the stomach, partially digested food (chyme) enters the small intestine. The pancreas secretes pancreatic juice containing pancreatic amylase (continues starch digestion), lipase (hydrolyses triglycerides to fatty acids and glycerol), and proteases (trypsin, chymotrypsin — continue protein digestion). Bile, produced by the liver and stored in the gallbladder, is secreted into the duodenum; bile salts emulsify fat — they break large fat droplets into many tiny droplets, dramatically increasing the surface area for lipase to act upon. In the ileum, final digestion occurs on the surface of the epithelial cells (brush border enzymes — maltase, sucrase, lactase). Absorption occurs mainly in the ileum, which is adapted with villi (finger-like projections) and microvilli (on each epithelial cell) to have an enormous surface area of ~6 m2. Each villus has a dense capillary network (for absorbing glucose, amino acids, minerals, and water-soluble vitamins into the blood) and a lacteal (a lymph vessel, for absorbing fatty acids and glycerol, which are reassembled into triglycerides and travel as chylomicrons in lymph before entering the blood).",
          groups: [
            {
              subTitle: "Summary of digestion by region",
              bullets: [
                "**Mouth**: Mechanical digestion by teeth. Salivary amylase hydrolyses starch to maltose. Neutral pH (~7). Tongue shapes food into bolus.",
                "**Stomach**: Muscular churning (mechanical digestion). HCl (pH 1-2) denatures proteins and kills bacteria. Pepsin hydrolyses proteins to polypeptides. Mucus protects stomach wall from autodigestion.",
                "**Small intestine (duodenum and ileum)**: Pancreatic amylase, lipase, proteases. Bile emulsifies fats. Brush border enzymes complete digestion to monosaccharides, amino acids, fatty acids, glycerol. Villi and microvilli for absorption.",
                "**Large intestine**: Absorbs water, mineral ions, and vitamins produced by gut bacteria. Compacts undigested material into faeces for egestion via the rectum and anus."
              ]
            }
          ],
          recap: [
            "Describe the role of bile in fat digestion. Include the terms emulsification and surface area. [3]",
            "Explain how the structure of the small intestine is adapted for efficient absorption. [5]",
            "State the products of complete digestion of proteins and carbohydrates. [2]",
            "Explain why the stomach secretes pepsinogen rather than pepsin directly. [2]"
          ]
        }
      ]
    },
    {
      number: 8,
      title: "Transport in Plants",
      intro: "Plants need to transport water, mineral ions, and organic solutes (sugars, amino acids) between different parts of the plant. Water and minerals move upward from roots to leaves through the xylem, driven primarily by transpiration. Organic solutes move in both directions through the phloem, from sources (where sugars are produced or stored) to sinks (where they are used or stored). The structure of xylem and phloem vessels is precisely adapted to their transport functions. Understanding these processes is essential for explaining how plants survive in different environments and why excessive transpiration can cause wilting.",
      subheadings: [
        {
          title: "Xylem: Structure and the Transpiration Stream",
          body: "Xylem vessels are dead hollow tubes formed from cells whose end walls have broken down, creating a continuous column. The cell walls are thickened with lignin, which prevents them from collapsing under the tension created during water transport and makes them impermeable (preventing water loss through the walls). Water moves through xylem from roots to leaves by the transpiration stream — a continuous column of water pulled upward by the evaporation of water from the leaf surfaces. In leaves, water evaporates from the mesophyll cell surfaces into the substomatal air spaces and then diffuses out through open stomata; this is transpiration. As water is lost from the leaf, more water is pulled up from below by cohesion-tension: water molecules are strongly attracted to each other by hydrogen bonds (cohesion), and to the xylem wall by adhesion, so as water evaporates from the top of the column, the tension pulls the entire column upward like a chain. At the root, water enters root hair cells by osmosis (soil water has a higher water potential than the root cell cytoplasm), moves across the cortex by osmosis from cell to cell, and enters the xylem. Root pressure — created by active transport of mineral ions into the xylem, which lowers water potential so water follows by osmosis — also contributes to pushing water upward, especially in short plants at night.",
          groups: [
            {
              subTitle: "Factors affecting the rate of transpiration",
              bullets: [
                "**Light intensity**: Stomata open in light (guard cells photosynthesize, produce glucose, become turgid, open stomata). More open stomata means faster transpiration. At night, stomata close, reducing transpiration.",
                "**Temperature**: Higher temperatures increase the kinetic energy of water molecules, speeding evaporation from mesophyll cells. Also reduces air humidity, steepening the water vapour concentration gradient.",
                "**Humidity**: High humidity reduces the water vapour concentration gradient between the leaf interior and the surrounding air, slowing diffusion of water vapour out of stomata.",
                "**Wind speed**: Moving air carries water vapour away from the leaf surface, maintaining a steep concentration gradient and therefore increasing the rate of transpiration.",
                "**Measuring transpiration**: A potometer measures the rate of water uptake (an approximation of transpiration rate) by tracking the movement of an air bubble in a capillary tube as the plant draws in water."
              ]
            }
          ],
          recap: [
            "Explain the mechanism by which water moves from roots to leaves in the xylem. Include the terms cohesion, tension, and transpiration. [5]",
            "Describe how you would use a potometer to compare the rate of transpiration under different conditions. [4]",
            "Explain why transpiration rate increases on a hot, windy day. [3]",
            "State two structural adaptations of xylem vessels for water transport. [2]"
          ]
        },
        {
          title: "Phloem and Translocation",
          body: "Phloem transports organic solutes — primarily sucrose (produced by photosynthesis in leaves), but also amino acids and other organic molecules — throughout the plant in a process called translocation. Unlike xylem, phloem consists of living cells: sieve tube elements are elongated cells with perforated end walls (sieve plates) through which sieve tubes communicate. They have very little cytoplasm (allowing flow through the tube) and are metabolically supported by companion cells connected via plasmodesmata; companion cells carry out active transport to load sucrose into the phloem at source tissues. Translocation moves solutes from source (leaves during active photosynthesis; storage organs during spring mobilisation) to sink (growing tips, roots, fruits, seeds, storage organs). The flow is driven by a pressure gradient created by the active loading of sucrose into the phloem at the source (by companion cells using ATP) and the active unloading at the sink. Loading sucrose at the source raises the solute concentration inside phloem, lowering its water potential; water enters from adjacent xylem by osmosis, increasing the turgor pressure. At the sink, sucrose is unloaded (or used), lowering the solute concentration; water leaves by osmosis, decreasing turgor. This pressure difference drives the mass flow of sap from source to sink. Evidence that translocation is active includes the fact that poisoning cells (and stopping respiration) with metabolic inhibitors stops translocation even though diffusion would not require respiration.",
          groups: [
            {
              subTitle: "Comparing xylem and phloem",
              bullets: [
                "**Xylem**: Dead cells, no cytoplasm, lignified walls, moves water and mineral ions only upward from roots to leaves, movement driven by transpiration (passive — no ATP required).",
                "**Phloem**: Living cells (sieve tube elements + companion cells), thin walls, moves organic solutes (mainly sucrose) in any direction from source to sink, movement driven by active loading (requires ATP).",
                "**Both**: Part of the vascular bundle found in leaves (vascular tissue in leaf veins), stems (vascular bundles — xylem toward centre in herbaceous stems), and roots. Together they form the plant's transport system."
              ]
            }
          ],
          recap: [
            "Explain the meaning of the terms source and sink in the context of translocation. Give one example of each. [3]",
            "Describe how sucrose is loaded into and transported through the phloem. [4]",
            "Compare the structure and function of xylem and phloem. [5]",
            "Explain why translocation stops when metabolic inhibitors are applied to phloem cells, but transpiration continues. [3]"
          ]
        }
      ]
    }
  ]
};
