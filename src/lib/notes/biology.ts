import type { SubjectNotes } from "./types";

export const BIOLOGY: SubjectNotes = {
  id: "biology",
  name: "Biology",
  code: "0610",
  color: "bg-emerald-500",
  chapters: [
    {
      number: 1,
      title: "Living Systems, Cells and Microscopes",
      intro:
        "**What is this topic all about?** Biology is the study of living things, and the first question it answers is deceptively hard: what makes something alive at all? A rock grows when mineral is added to it, a car 'consumes' fuel and 'releases' waste, and a flame 'reproduces' when it spreads. None of them are alive. Examiners therefore do not ask you to describe a vague feeling of life — they ask for seven testable functions that every living organism performs, and they ask you to apply them to unfamiliar examples. The second half of this chapter moves from 'what is alive' to 'what is alive made of': the cell. Every structure in your body, from a neuron to the surface of your tongue, is built from cells, and the difference between a plant cell and an animal cell explains things as ordinary as why a tree stands upright without bones and why you go soft and floppy when you are dehydrated. Finally, you meet the instrument that made all of this visible: the light microscope, with its magnification arithmetic. Learn each part as an answer to a question. What does a living thing do that a non-living thing cannot? What is the smallest unit that can do those things? What does that unit need in order to stay alive? Those three questions are this whole chapter.",
      subheadings: [
        {
          title: "The Seven Life Processes",
          body:
            "Biologists use the word **nutrition, respiration, excretion, response, growth, reproduction and movement** as a checklist. If an entity performs all seven, it is alive. If it performs only some of them, it is not. The memory aid **MRS GREN** (Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition) is the version most textbooks use, and 'sensitivity' is simply another word for response.\n\nTwo of these seven cause more lost marks than the other five put together, because their everyday meanings are wrong in biology. The first is **respiration**. In ordinary speech respiration means breathing — the physical movement of air into and out of the lungs. In biology respiration is a **chemical reaction inside the cell**: the breakdown of glucose to release energy, carried out in the mitochondria. Breathing exists only to supply the oxygen that respiration consumes; the two are related but are not the same process, and an answer that says 'respiration is breathing' scores zero. The second is **excretion**. People confuse it with egestion. Excretion is the removal of the **waste products of the chemical reactions that keep you alive** — carbon dioxide from respiration, and urea made in the liver from spare amino acids. Egestion (defecation) is the removal of **food you never digested or absorbed at all**, such as fibre. Because faeces never entered your cells, passing them is not excretion.\n\nThe remaining five are more intuitive once you state them precisely. **Nutrition** is taking in material for energy and growth — photosynthesis in a plant is nutrition, not 'making food' as a separate idea. **Growth** in biology means a permanent increase in dry mass (mass with the water removed), which is why a swelling ankle is not growth. **Reproduction** is producing new individuals of the same species — and note that an individual worker bee or mule that cannot reproduce is still alive, because reproduction is needed for the **species**, not for the individual. **Response** is detecting a change in the environment (a stimulus) and reacting to it. **Movement** is an action causing a change of position; in animals this is obvious, but a plant shoot turning towards a light window is also movement.",
          groups: [
            {
              subTitle: "Each Process, Stated the Way Examiners Want It",
              bullets: [
                "**Movement:** an action that causes a change of position or location in an organism. In animals it is usually obvious; in plants it is slow growth-curvature, such as a shoot bending towards light.",
                "**Respiration:** the chemical reactions in cells that break down nutrient molecules (mainly glucose) to release energy for the processes of life. It happens inside every living cell, not in the lungs.",
                "**Sensitivity (response):** the ability to detect or sense changes in the environment (stimuli) and to make responses to them — a mimosa leaf folding when touched, a pupil narrowing in bright light.",
                "**Growth:** a permanent, irreversible increase in dry mass, size or amount of an organism. Measured as dry mass so that taking in water is not mistaken for growing.",
                "**Reproduction:** the process that produces new individuals of the same kind, sexually (two parents, genetic mixing) or asexually (one parent, genetically identical offspring).",
                "**Excretion:** the removal from the body of toxic materials, waste products of the chemical reactions taking place in the body (carbon dioxide from respiration, urea from breakdown of excess protein) — never undigested food.",
                "**Nutrition:** the taking in of materials for energy, growth and development. Plants are **holophytic** (build their own organic molecules from carbon dioxide and water); animals are **holozoic** (ingest organic material and digest it)."
              ]
            },
            {
              subTitle: "The Four Confusions That Cost the Most Marks",
              bullets: [
                "**Respiration is not breathing.** Breathing is the ventilation of the gas-exchange surface; respiration is the intracellular reaction C6H12O6 + 6O2 → 6CO2 + 6H2O (glucose plus oxygen yields carbon dioxide, water and energy). Say 'release of energy from glucose' and you are safe.",
                "**Excretion is not egestion.** Excretion = waste made by the body's own chemistry (CO2, urea, excess water and salts). Egestion = undigested material that never entered a cell, mostly fibre, expelled through the anus.",
                "**Growth is not swelling or fattening.** A permanent increase in dry mass only. A balloon of water gained by drinking is not growth, and a plant that wilts and stands up again has not grown.",
                "**Reproduction is not required by the individual.** A sterile worker ant is alive because it performs the other six processes; reproduction is a property of the species."
              ]
            },
            {
              subTitle: "Applying the Test to Tricky Examples",
              bullets: [
                "**A mule** (offspring of a horse and a donkey) is sterile. It still carries out all the other life processes, so it is alive — reproduction is the one process an individual can skip.",
                "**A germinating seed** respires vigorously before it can photosynthesise, using the energy stored in the cotyledon. It is therefore alive and growing even though it looks motionless.",
                "**A virus** cannot respire, feed, excrete or reproduce on its own; it has to hijack a host cell. This is why viruses are usually described as being on the edge of living and non-living, and why 'is a virus alive?' is a discussion question, not a one-word answer.",
                "**A falling leaf** shows movement but not growth; a **candle flame** 'uses fuel', 'grows', 'moves' and 'reproduces' but does not excrete, is not sensitive in a biological sense and has no cells — so it fails the test."
              ]
            }
          ],
          examinerTips: [
            "When a question asks 'state the life process shown by this organism', name only the process being demonstrated — do not list all seven. If the plant bends towards light, the answer is **response (sensitivity)**, not 'growth and response'.",
            "Define respiration as 'the chemical reactions in cells that break down nutrient molecules to release energy'. Examiners look for the words **cells**, **breakdown of nutrient/glucose** and **release of energy**. Writing 'breathing' earns nothing.",
            "For excretion questions, always name the actual substances: **carbon dioxide** (from respiration) and **urea** (from deamination of excess amino acids in the liver). Naming sweat or faeces as the answer is a common zero.",
            "If a structured question gives you an unfamiliar organism — say a deep-sea vent bacterium — work through MRS GREN one item at a time and write one short observation for each. This is exactly what the mark scheme is built from.",
            "Use the word **permanent** when defining growth and **dry mass** if the question mentions water. Those two qualifiers are frequently the whole mark."
          ],
          commonMistakes: [
            "**Writing 'respiration = breathing'.** Students learn the two words together in everyday English, so the biological meaning feels like a technicality. Fix it by always writing the word **cellular** in front of respiration in your notes until it is automatic.",
            "**Listing faeces as a waste product of excretion.** Faeces never entered the body's cells, so it cannot be a product of their chemistry. Ask yourself 'was this made by a reaction inside a cell?' before writing 'excreted'.",
            "**Calling a growing crystal or a stalactite 'growth'.** These add material on the outside; biological growth adds material from inside by making new cells, and it is permanent.",
            "**Saying a plant 'sleeps at night' because it does not move.** Plants do show movement (growth curves towards light and away from gravity); slow movement is still movement.",
            "**Answering 'it needs food' for why something is alive.** Nutrition is one of seven processes; the mark asks for the process name, not a general statement about hunger."
          ],
          recap: [
            "List the seven life processes and give a one-line definition of each that an examiner would accept. [7]",
            "Explain why a mule is alive even though it cannot reproduce. [2]",
            "A student writes: 'Respiration is the process by which organisms breathe in oxygen and breathe out carbon dioxide.' Explain why this definition would gain no marks. [3]",
            "State, with a reason, whether passing faeces is excretion. [2]",
            "A plant seedling is placed in a dark cupboard and its shoot lengthens. Name two life processes demonstrated here and explain why lengthening in the dark still counts as one of them. [4]"
          ]
        },
        {
          title: "Cell Structure: Animal Cells, Plant Cells and Bacteria",
          body:
            "All living things are made of cells, and the **cell is the smallest unit of life** — nothing smaller can carry out all seven life processes on its own. Your body contains roughly 30 trillion of them, each one a self-contained chemical factory enclosed by a membrane.\n\nEvery cell, whether it belongs to an amoeba or to a human, needs to do the same handful of jobs: control its chemistry, make proteins, release energy from glucose, build new material and get rid of waste. The structures that do these jobs are why animal cells, plant cells and bacterial cells all share some parts — the **cell membrane, cytoplasm, ribosomes and genetic material** — and differ on the parts that suit a particular way of life.\n\nThe key difference between an animal cell and a plant cell is not that plants have 'extra bits'. It is that a plant cell has to make its own food and has to stand up without a skeleton. That explains the three structures animal cells lack: the **chloroplast** for photosynthesis, the **permanent cellulose wall** for rigidity, and the **large central vacuole** filled with cell sap that presses outward against the wall. When that internal pressure — **turgor** — is high the plant is firm; when water leaves the vacuole the pressure drops and the plant wilts. An animal cell has no wall to push against, so it neither gains support nor loses it the same way.\n\nBacteria are different again. They are **unicellular prokaryotes**: 'pro' = before, 'karyon' = kernel/nucleus, so a prokaryote is a cell with **no nucleus**. Their DNA floats as a single circular chromosome in the cytoplasm, and they have no membrane-bound organelles at all — no mitochondria, no chloroplasts, no endoplasmic reticulum. Many also carry small extra rings of DNA called **plasmids**, which frequently hold the genes that make a bacterium resistant to an antibiotic. Because bacteria are so structurally simple, they are the smallest cells you will examine, and the only ones whose size is measured in a few **micrometres (µm)** rather than tens.",
          groups: [
            {
              subTitle: "The Organelles and What Each One Is For",
              bullets: [
                "**Cell (surface) membrane:** a selectively permeable barrier of phospholipids and proteins that controls which substances enter and leave. Present in every cell. If you destroy it, the cell dies.",
                "**Cytoplasm:** the watery gel in which all the chemical reactions of the cell take place and where the organelles are suspended. It is not an empty filling — respiration begins here.",
                "**Nucleus:** contains the chromosomes (DNA) that carry the instructions for making proteins; it controls the cell's activities by switching those instructions on and off. Only in eukaryotic cells.",
                "**Ribosomes:** the tiny granules where amino acids are joined together to build proteins. Found in every living cell, including bacteria — a good reminder that protein synthesis is universal.",
                "**Mitochondria:** the site of aerobic respiration, where glucose is broken down with oxygen to release usable energy. Cells that work hard have more of them: a muscle cell has hundreds, a skin cell far fewer.",
                "**Chloroplast (plants only):** contains the green pigment **chlorophyll** and is the site of photosynthesis. It is the plant cell's food-making factory.",
                "**Cell wall (plants, fungi, bacteria):** a rigid outer layer outside the membrane. In plants it is made of **cellulose**, it is fully permeable, and its job is support and preventing the cell from bursting.",
                "**Permanent vacuole (plants only):** a large fluid-filled sac of **cell sap** (water, dissolved sugars, salts and pigments). It maintains turgor pressure against the wall; in petals its pigments colour the flower."
              ]
            },
            {
              subTitle: "Plant Cell Versus Animal Cell — The Exam Table",
              bullets: [
                "**Nucleus:** present in animal cells, present in plant cells, absent in bacterial cells (which have a single circular chromosome instead).",
                "**Cell wall:** absent in animal cells; present and made of cellulose in plant cells; present in bacteria but made of a different chemical (not cellulose).",
                "**Chloroplasts:** absent in animal cells; present in plant cells that are exposed to light. Root cells are plant cells with no chloroplasts — there is no light underground to use them in.",
                "**Vacuoles:** animal cells have none, or only small temporary ones; plant cells have one large permanent vacuole.",
                "**Glycogen versus starch:** animal cells store glucose as **glycogen** (mainly in liver and muscle); plant cells store it as **starch**. Bacteria store it as a different polymer again."
              ]
            },
            {
              subTitle: "Specialised Cells: Structure Follows Function",
              bullets: [
                "**Ciliated epithelial cell (trachea):** has hair-like cilia that beat in a coordinated wave to sweep mucus, with trapped dust and bacteria, up and away from the lungs. Many mitochondria power that continuous beating.",
                "**Sperm cell:** a head carrying 23 chromosomes and a great many mitochondria in the **midpiece** to power the **flagellum**'s movement; the acrosome at the front releases enzymes that let it enter the egg. It is the only cell in the body that is built for travel.",
                "**Muscle cell (fibred, elongated):** long and containing protein fibres that can contract; many mitochondria for the energy contraction needs; stores oxygen-carrying pigment.",
                "**Neuron (nerve cell):** very long cytoplasmic fibre with branches (dendrites) at one end to receive impulses and a terminal at the other to pass them on — a cell shaped to carry a message over a distance.",
                "**Root hair cell:** a columnar epidermal cell with a long extension into the soil, giving a huge surface area for absorbing water and mineral ions, and a thin wall so water passes easily.",
                "**Red blood cell:** a biconcave disc **with no nucleus** and no mitochondria. Losing the nucleus creates more room for haemoglobin and gives the flattened disc shape a large surface-area-to-volume ratio for fast diffusion; lacking mitochondria means it does not consume any of the oxygen it is carrying.",
                "**Palisade mesophyll cell:** packed with chloroplasts and arranged vertically just under the upper leaf surface, where light is strongest — the leaf's main photosynthetic layer."
              ]
            },
            {
              subTitle: "Organisation: From Cell to Organism",
              bullets: [
                "**Cell → tissue → organ → system → organism.** Learn the order in this direction; questions ask you to place examples in it.",
                "**Tissue:** a group of similar cells with the same structure performing the same function — examples: muscular tissue, glandular tissue, xylem tissue, epidermal tissue.",
                "**Organ:** a group of different tissues working together to carry out a function — the stomach contains muscular tissue (churning), glandular tissue (enzyme secretion) and epithelial tissue (lining and protection).",
                "**System:** organs that work together for one overall job — the digestive system, the circulatory system.",
                "**Emergent property:** the organism shows functions that no single cell could perform alone. This is why multicellular life can specialise: a single-celled organism must do everything itself, so it cannot afford a cell that only pumps."
              ]
            }
          ],
          examinerTips: [
            "When asked to name a structure 'present in plant cells but not animal cells', give **three**: cell wall, chloroplast, permanent vacuole. Giving only the wall loses two of the available marks, and students overwhelmingly forget the vacuole.",
            "Always state the chemical of the plant cell wall — **cellulose**. 'Wall made of carbohydrate' is not the mark; 'cellulose' is.",
            "For a question about why a specific cell looks the way it does, use the pattern **'has [structure], which increases [property], so that it can [function]'**. For example: 'the root hair increases surface area so that more water can be absorbed by osmosis per second.' Examiners award the mark for the function, so never stop at the structure.",
            "If asked why bacteria are not plants, do not say 'they are smaller'. The structural answer is **no nucleus and no membrane-bound organelles**.",
            "Expect a diagram-label question. Practise writing the labels with a straight ruler line that touches the structure, and never put a label inside a shaded organelle."
          ],
          commonMistakes: [
            "**Saying the cell membrane controls what enters and leaves the cell wall.** The wall is freely permeable and does not choose; the **membrane** is the selective barrier. Mixing these two up is the single most common structural error.",
            "**Claiming all plant cells have chloroplasts.** Onion epidermis cells and root hair cells are plant cells without them. Say 'plant cells that are exposed to light'.",
            "**Calling a bacterium a cell with a nucleus.** It has genetic material but no nuclear membrane — that is the definition of prokaryotic.",
            "**Describing cytoplasm as 'where the organelles sit'.** Add that it is where the cell's chemical reactions occur; otherwise you have described a container, not a function.",
            "**Confusing a tissue with an organ.** Blood is a tissue (connective); a heart is an organ (several tissues). If your example contains more than one cell type doing different jobs, it is an organ."
          ],
          recap: [
            "Name three structures found in a palisade mesophyll cell but not in a liver cell, and give the function of each. [6]",
            "Explain why a red blood cell has no nucleus and no mitochondria. [4]",
            "A student says 'a bacterium is just a very small animal cell'. Identify two ways in which this is wrong. [4]",
            "Place the following in the correct order of organisation: smooth muscle, stomach, muscle tissue, digestive system, gastric epithelium. [4]",
            "Explain how the structure of a sperm cell is adapted to its function, referring to at least three named parts. [5]"
          ]
        },
        {
          title: "Microscopes, Magnification and Measuring Cells",
          body:
            "Cells are small, and 'small' has a specific meaning that you must be able to calculate with. Most animal and plant cells are between **10 and 100 micrometres (µm)** across; a typical bacterium is about **1–2 µm**; a human hair is roughly 80 µm wide. Because the numbers are so small, every calculation in this section depends on converting fluently between millimetres and micrometres — and that conversion, not the biology, is where marks are lost.\n\nA **light microscope** uses a beam of visible light passed through the specimen and two glass lenses: the **objective lens** (near the specimen) produces a magnified real image, and the **eyepiece (ocular) lens** magnifies that image further. Total magnification is the **product** of the two, not their sum. Light microscopes can reach about ×1500 and resolve objects roughly **0.2 µm** apart — enough to see nuclei, chloroplasts and the outline of bacteria, but not the internal detail of membranes or ribosomes. For those you need an **electron microscope**, which uses a beam of electrons with a far shorter wavelength, reaching magnifications over ×1,000,000 and resolving about **0.0002 µm (0.2 nanometres)**. The trade-off is that electron microscopy requires a vacuum and dead, dried, chemically fixed specimens, so it cannot show living processes.\n\nThe formula that carries most of the marks in this chapter is:\n\n**I = A × M**\n\nwhere **I** = the size of the **Image** (what you measure on the photograph or drawing, usually in mm), **A** = the actual size of the **Actual** specimen (its real size, usually in µm), and **M** = **Magnification** (a pure number written as ×100, with no units).\n\nRearranged three ways:\n- Magnification: **M = I ÷ A**\n- Actual size: **A = I ÷ M**\n- Image size: **I = A × M**\n\nBecause I is normally measured in **millimetres** and A must be reported in **micrometres**, you must convert before dividing: **1 mm = 1000 µm**. The safest method is to convert both measurements to the same unit first, then divide, so that the units cancel and M is left as a bare number.",
          groups: [
            {
              subTitle: "Worked Example 1 — Finding Magnification",
              bullets: [
                "**Question:** A photograph of a cell shows the cell as 40 mm wide. The actual width of the cell is 8 µm. What is the magnification?\n\n**Step 1 — write the formula:** M = I ÷ A\n\n**Step 2 — put both numbers in the same unit.** I = 40 mm = 40 × 1000 = **40 000 µm**. A = 8 µm (already in µm).\n\n**Step 3 — substitute:** M = 40 000 µm ÷ 8 µm\n\n**Step 4 — divide and cancel the units:** M = **5000**\n\n**Answer:** ×5000.\n\n**Why each step matters:** if you divide 40 by 8 you get 5, and ×5 is not a magnification any microscope produces — the mismatch between mm and µm is what caused it. Always convert first."
              ]
            },
            {
              subTitle: "Worked Example 2 — Finding Actual Size",
              bullets: [
                "**Question:** In a drawing made at ×400, a chloroplast measures 26 mm across. What is its actual diameter in µm?\n\n**Step 1 — formula:** A = I ÷ M\n\n**Step 2 — convert the image size to µm:** 26 mm = 26 000 µm\n\n**Step 3 — substitute:** A = 26 000 ÷ 400\n\n**Step 4 — calculate:** A = **65 µm**\n\n**Sanity check:** a chloroplast really is tens of µm long, so 65 µm is a believable answer. If your arithmetic had given 65 mm (the width of a beetle), the biology would have told you the sum was wrong before the teacher did."
              ]
            },
            {
              subTitle: "Worked Example 3 — Using a Scale Bar",
              bullets: [
                "**Question:** An electron micrograph carries a scale bar labelled 2 µm. You measure the bar with a ruler and find it is 30 mm long. A bacterium in the same image measures 45 mm. Find (a) the magnification and (b) the actual length of the bacterium.\n\n**(a)** The scale bar is the one place where image and actual size are both given: I = 30 mm = 30 000 µm, A = 2 µm. So M = 30 000 ÷ 2 = **×15 000**.\n\n**(b)** A = I ÷ M = 45 000 µm ÷ 15 000 = **3 µm**.\n\n**The rule this teaches:** never trust the magnification printed on a micrograph after the picture has been enlarged in a textbook — always recalculate M from the scale bar, because the bar changes size with the photograph."
              ]
            },
            {
              subTitle: "Parts of the Microscope and What You Adjust",
              bullets: [
                "**Ocular/eyepiece lens:** the lens you look through; commonly ×10. Total magnification = objective magnification × eyepiece magnification.",
                "**Objective lenses (×4, ×10, ×40):** on a rotating nosepiece; the **low power** objective gives a larger field of view and is where you always start, because high power shows so little area that you cannot find the specimen.",
                "**Coarse adjustment knob:** moves the stage rapidly for focusing under low power only. Using it under high power can drive the objective into the slide and break both.",
                "**Fine adjustment knob:** small movements for a sharp image, and the only knob you use on high power.",
                "**Diaphragm and light source/mirror:** control how much light passes through; more magnification needs more light, so opening the diaphragm is the usual first move when an image goes dark on switching to high power.",
                "**Stage and clips:** hold the slide flat over the aperture."
              ]
            },
            {
              subTitle: "Drawing Biological Specimens Correctly",
              bullets: [
                "Use a **sharp HB pencil**; never use ink, shading or colour in a scientific drawing.",
                "Draw **single clear lines** of even thickness; do not sketch, feint or go over a line repeatedly.",
                "No shading or stippling to show depth — the drawing records shape and position only.",
                "Label with **straight, unbroken ruler lines** that do not cross each other, with the writing at the end of the line, on the same side where possible.",
                "Give the whole drawing a **title** and state the **magnification** used.",
                "If a scale bar is required, draw it as a line with a label such as 'scale bar = 10 µm' and calculate it from I = A × M so that it is correct."
              ]
            }
          ],
          examinerTips: [
            "Write the formula **I = A × M** on your rough paper the moment a calculation question starts, then circle which two values you have been given. Examiners often award a **method mark** even when the final number is wrong, so always show the division, not just the answer.",
            "Convert mm to µm by multiplying by 1000 **before** you divide. State the conversion on its own line — that line is frequently a marked step.",
            "Give magnification as **×400** or '400 times', never '400 mm'. Magnification has no units because the units cancel.",
            "If the question says 'give your answer in µm to 2 significant figures', do both: the unit and the rounding. Rounding errors are marked separately from arithmetic errors, so you can lose one and still gain the other.",
            "When asked to compare light and electron microscopes, offer the pair that earns both marks: **electron microscopes have much higher resolution** (not just 'magnification') and **cannot be used on living specimens**."
          ],
          commonMistakes: [
            "**Adding the two lens magnifications instead of multiplying them.** A ×10 eyepiece with a ×40 objective gives ×400, not ×50. This error alone can make a whole calculation question worthless.",
            "**Forgetting the ×1000 conversion** between mm and µm, then reporting an actual cell size of 0.03 mm as '0.03 µm'. A 0.03 µm object is smaller than most viruses and cannot be a cell.",
            "**Measuring from the edge of the photograph instead of from the edge of the specimen.** Run the ruler under the object you are measuring and read the two ends, not the frame.",
            "**Using the printed magnification on a reproduced micrograph.** If a textbook has enlarged the image, the stated magnification is wrong; the scale bar is the only trustworthy route.",
            "**Shading a biological drawing.** Examiners explicitly deduct for shading, colour and sketchy multiple lines; a clean outline scores better than a pretty picture.",
            "**Confusing resolution with magnification.** Magnification makes an image bigger; resolution is the ability to distinguish two close points as separate. Blowing up a blurry photograph increases magnification without increasing resolution."
          ],
          recap: [
            "An insect is 5 mm long and its photograph is 15 cm long. Calculate the magnification, showing your working. [3]",
            "A cell viewed at ×600 has an image width of 24 mm. Calculate its actual width in µm. [3]",
            "Explain why you must locate a specimen under low power before using the high-power objective. [2]",
            "A micrograph has a scale bar representing 1 µm drawn 20 mm long. Determine the magnification of the image. [2]",
            "State two differences between the images produced by a light microscope and an electron microscope, and one limitation of electron microscopy. [5]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Movement Into and Out of Cells",
      intro:
        "**What is this topic all about?** A cell is a bag of chemistry sealed by a membrane, and it survives only if materials keep crossing that membrane: oxygen in, carbon dioxide out, glucose in, urea out, water in and out. This chapter is about the three ways those crossings happen — **diffusion, osmosis and active transport** — and about the one idea that governs all of them: as an object gets bigger, its volume grows faster than its surface area, so a large organism cannot simply let chemicals drift into its cells and must build a transport system instead. Examiners love this chapter because it combines a definition, a direction of travel, and a calculation. The direction of travel is the part students get wrong: in diffusion and osmosis, movement is always **down a concentration gradient**, from where there is more to where there is less of the substance that is moving. Active transport is the exception, and the exception is worth marks precisely because it is the opposite.",
      subheadings: [
        {
          title: "Diffusion",
          body:
            "**Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, down a concentration gradient, as a result of the random movement of the particles themselves.** Three words in that definition carry marks. *Net* — the particles are not marching one way; each one jiggles randomly, but more leave the crowded region than enter it, so the overall effect is a flow from crowded to sparse. *Concentration gradient* — the difference in concentration between two places, and the steeper the difference, the faster the diffusion. *Random movement* — diffusion needs no energy from the cell; it is powered by the kinetic energy the particles already have, which is why it is called a **passive** process.\n\nDiffusion happens in gases and liquids, not through solids, because particles must be free to move. It is how oxygen passes from the air in your alveoli into the blood, how carbon dioxide leaves the leaf for the air between the spongy mesophyll cells, and how the smell of cooking crosses a room.\n\nFour factors change the rate, and a question will usually ask about one of them. **Temperature** — heating gives particles more kinetic energy so they move faster, so diffusion speeds up. **The steepness of the concentration gradient** — the greater the difference, the faster the flow; this is why a badly ventilated room slows the diffusion of oxygen into the blood. **The surface area across which diffusion occurs** — more area means more particles can cross at once. **The distance (thickness of the surface)** — a thinner barrier means a shorter journey, so diffusion is faster. The last two combine into the single most useful idea in the chapter: a **large surface-area-to-volume ratio** makes exchange fast, and every exchange surface in the body is built to maximise it.",
          groups: [
            {
              subTitle: "Exchange Surfaces Built for Fast Diffusion",
              bullets: [
                "**Alveoli (lungs):** millions of small air sacs, each one wall one cell thick, wrapped in a dense network of capillaries, ventilated by breathing to keep the oxygen gradient steep. Together they present a surface area of roughly 70 square metres inside an adult.",
                "**Villi (small intestine):** finger-like projections of the wall, each containing a lacteal and capillaries, giving an absorptive area of hundreds of square metres for digested food.",
                "**Root hair (plant):** a single epidermal cell extended into a long tube, multiplying surface area for water uptake without adding volume.",
                "**Gills (fish):** thin filaments carrying lamellae, kept perfused by water, with **countercurrent flow** — blood and water travel in opposite directions so a diffusion gradient is maintained along the whole length of the lamella rather than equalising at one point.",
                "**Flatworm and other small organisms:** no specialised surface at all is needed, because their whole body is thin enough for diffusion to reach every cell directly."
              ]
            },
            {
              subTitle: "Worked Calculation — Surface Area, Volume and the Ratio",
              bullets: [
                "**Question:** A cube-shaped cell has sides of 2 mm. Find its surface area, its volume, and its surface-area-to-volume ratio. Then find the ratio for a cube of side 4 mm and explain what happens to the cell's ability to exchange material.\n\n**Step 1 — formulas.** For a cube of side **s**: surface area **SA = 6s²** (six faces, each of area s²); volume **V = s³**; ratio **SA : V = 6s² ÷ s³ = 6 ÷ s**.\n\n**Step 2 — side 2 mm.** SA = 6 × 2² = 6 × 4 = **24 mm²**. V = 2³ = **8 mm³**. Ratio = 24 ÷ 8 = **3 : 1**.\n\n**Step 3 — side 4 mm.** SA = 6 × 16 = **96 mm²**. V = 4³ = **64 mm³**. Ratio = 96 ÷ 64 = **1.5 : 1**.\n\n**Step 4 — interpret.** Doubling the side **halved** the ratio. The volume — the amount of cytoplasm that needs oxygen and must dispose of carbon dioxide — grew eight-fold, while the membrane available to serve it grew only four-fold. The cell now has too little surface for its own volume, so the centre starves and poisons itself. **This is why cells are microscopic, and why large organisms are multicellular rather than a single giant cell.**"
              ]
            },
            {
              subTitle: "The Three Factors, Tested the Way Questions Ask",
              bullets: [
                "**Temperature:** agar cubes containing phenolphthalein are placed in dilute hydrochloric acid at different temperatures; the acid diffuses in and decolourises the agar, and the cubes in the warm acid go colourless fastest because the particles have more kinetic energy.",
                "**Concentration gradient:** the same agar cubes in acid of different strengths decolourise faster in the stronger acid, because the difference in concentration between outside and inside is greater.",
                "**Surface area to volume:** agar cubes of 1 cm, 2 cm and 3 cm side in the same acid at the same time go colourless in that order — smallest first — because the smaller cube has the larger SA:V ratio.",
                "**Diffusion distance:** a thin exchange surface (one cell thick) allows rapid diffusion; a thickened one, as in the wall of an alveolus in a smoker or an inflamed lung, slows it and reduces oxygen uptake."
              ]
            }
          ],
          examinerTips: [
            "Write the definition with all four elements — **net movement**, **higher to lower concentration**, **concentration gradient**, **random movement** — and do not mention a membrane. Diffusion does not require a membrane; osmosis does. Saying 'diffusion is the movement of particles through a semi-permeable membrane' loses the mark.",
            "When a question asks about a factor affecting diffusion, answer with the factor **and the mechanism**: 'the temperature is higher, so the particles have more kinetic energy and move faster, so diffusion is faster'. Naming 'temperature' alone is usually only the first half of the mark.",
            "For alveoli, learn the four adaptations as a set: **large surface area**, **moist thin walls (one cell thick)**, **dense capillary network**, and **ventilation maintaining the concentration gradient**. Four marks are very often available and students typically supply two.",
            "If you are asked to calculate an SA:V ratio, write the answer as a ratio (3 : 1) or as the number 3, and include units for area (mm²) and volume (mm³) separately. Never write the ratio itself with units."
          ],
          commonMistakes: [
            "**Saying particles diffuse 'because the cell needs them'.** Diffusion is passive and blind; it is random motion plus statistics, not intent. Purpose language loses marks in every exchange question.",
            "**Confusing surface area with surface-area-to-volume ratio.** A large cell has more surface area than a small one but a *smaller ratio*, and it is the ratio that governs exchange. This is the most common single error in the practical question.",
            "**Claiming diffusion stops once concentrations are equal.** Movement continues, but the net movement becomes zero — the two directions balance. Write 'no net movement' rather than 'no movement'.",
            "**Describing gas exchange in fish as 'water contains more oxygen than blood'.** What matters is the gradient maintained by flow in opposite directions, not a general statement about water.",
            "**Adding 'energy' to a description of diffusion.** If you write that diffusion requires energy from respiration you have described active transport and contradicted yourself."
          ],
          recap: [
            "Define diffusion. [3]",
            "A cube of side 3 mm: calculate its surface area, volume and SA:V ratio. [3]",
            "Explain why a single-celled organism does not need a transport system but an elephant does. [4]",
            "Describe how the structure of an alveolus increases the rate of diffusion of oxygen into the blood. [4]",
            "Two identical agar cubes are placed in acid, one at 10 °C and one at 40 °C. Predict and explain the result. [3]"
          ]
        },
        {
          title: "Osmosis and Active Transport",
          body:
            "**Osmosis is the net movement of water molecules from a region of higher water potential (dilute solution) to a region of lower water potential (concentrated solution), across a partially permeable membrane.** Read that twice. Osmosis is about **water only**, it needs a **membrane**, and the direction is set by how concentrated the *solution* is — water moves towards the more concentrated solution, which is the opposite way round from what most people guess.\n\nThe reason water moves at all is that dissolved solute particles occupy space at the surface and bind water molecules, so a concentrated solution has fewer free water molecules per unit volume than a dilute one. More water molecules therefore strike the membrane from the dilute side than from the concentrated side, and the net flow is dilute → concentrated. The flow continues until the pressure difference stops it.\n\nThe correct modern term is **water potential**, written **Ψ** and measured in kilopascals (kPa). Pure water has the **highest** water potential, defined as **0 kPa**, and adding solute makes water potential **negative**. Water always moves from **higher (less negative) Ψ to lower (more negative) Ψ**. If a question uses 'concentration of water', answer with water potential and you will be safe in both wordings.\n\nPlant cells behave differently from animal cells because of the wall. Put a plant cell in pure water and water enters by osmosis, the vacuole swells and presses the cytoplasm against the wall; the wall pushes back and the cell becomes **firm (turgid)**. The internal pressure is **turgor pressure**, and it is what keeps a herbaceous plant upright. Put the same cell into strong salt or sugar solution and water leaves, the vacuole shrinks, and the cell surface peels away from the wall — **plasmolysis** — and the plant wilts (**flaccid**). Animal cells have no wall: in dilute solution they swell and can burst (**lyse**, as in a red blood cell placed in pure water), and in concentrated solution they shrivel and the membrane becomes wrinkled (**crenation**, in a shrivelled red blood cell).",
          groups: [
            {
              subTitle: "The Three External Solutions and Their Effects",
              bullets: [
                "**Hypotonic (dilute) solution — higher water potential outside than inside the cell.** Water enters. Animal cell: swells and may burst (haemolysis in red blood cells). Plant cell: becomes turgid; wall prevents bursting; this is the normal, healthy state for most plant cells.",
                "**Isotonic solution — equal water potential either side.** Water moves in and out at the same rate, so no net movement. Animal cell: normal. Plant cell: flaccid, and the plant begins to droop.",
                "**Hypertonic (concentrated) solution — lower water potential outside.** Water leaves. Animal cell: shrivels (crenation). Plant cell: plasmolysed — the cytoplasm and membrane pull away from the wall, and the wall itself stays in place because it is rigid.",
                "**Remember which way the prefix points:** hypo- means the *outside* is more dilute; hyper- means the *outside* is more concentrated."
              ]
            },
            {
              subTitle: "Worked Calculation — Change in Mass by Osmosis",
              bullets: [
                "**Question:** A cylinder of potato of initial mass 5.0 g is left in sucrose solution for 30 minutes, then blotted dry and re-weighed at 4.4 g. Calculate the percentage change in mass and state whether the solution was hypertonic or hypotonic to the potato cells.\n\n**Step 1 — formula:** percentage change = (final mass − initial mass) ÷ initial mass × 100\n\n**Step 2 — substitute:** (4.4 − 5.0) ÷ 5.0 × 100\n\n**Step 3 — work the bracket first:** 4.4 − 5.0 = **−0.6** (the minus is essential; mass was lost)\n\n**Step 4 — divide and scale:** −0.6 ÷ 5.0 = −0.12; −0.12 × 100 = **−12 %**\n\n**Step 5 — interpret:** the cells lost water, so water moved out, so the solution had the lower water potential — it was **hypertonic** to the potato cells.\n\n**Where students lose the mark:** writing 12 % without the minus sign. A positive percentage means the tissue gained water, which is the opposite conclusion, and the second mark then goes wrong with it."
              ]
            },
            {
              subTitle: "Worked Calculation — Finding the Isotonic Point From a Graph",
              bullets: [
                "**Question:** Potato cylinders are placed in sucrose solutions of 0.0, 0.2, 0.4, 0.6 and 0.8 mol/dm³ and their percentage mass changes plotted. The line crosses 0 % at 0.3 mol/dm³. What does this tell you about the cell sap?\n\n**Step 1 — recognise what 0 % means.** No net water movement, so the water potential outside equals the water potential inside the cells: the solutions are **isotonic**.\n\n**Step 2 — read the crossing value.** That happens at 0.3 mol/dm³.\n\n**Step 3 — conclude.** The cell sap of these potato cells has the same water potential as a 0.3 mol/dm³ sucrose solution.\n\n**Step 4 — extend if asked.** Below 0.3 mol/dm³ the cylinders gain mass (water enters, solution hypotonic); above 0.3 they lose mass (water leaves, solution hypertonic)."
              ]
            },
            {
              subTitle: "Active Transport — The Opposite Case",
              bullets: [
                "**Definition:** the movement of ions or small molecules across a cell membrane **against a concentration gradient**, from lower to higher concentration, using **energy released from respiration (ATP)** and carried out by **carrier proteins** in the membrane.",
                "It differs from diffusion and osmosis in two ways that are worth both marks: the direction is **up** the gradient, and it **requires energy from respiration**.",
                "**Root hair cells** use active transport to take in nitrate ions, phosphate ions, potassium and other mineral ions from the soil, where they may be far more dilute than in the cell sap. Without active transport a plant could not concentrate nitrates, could not make amino acids, and would show stunted growth and yellowing older leaves.",
                "**Gut epithelial cells** use active transport to absorb glucose from the intestine into the blood even when blood glucose is already higher.",
                "Because it depends on respiration, active transport is **poisoned by lack of oxygen, by low temperature, and by respiratory inhibitors** — a classic exam graph or comparison question."
              ]
            },
            {
              subTitle: "The Three Processes Side by Side",
              bullets: [
                "**What moves:** diffusion — any particle (gas or solute); osmosis — water molecules only; active transport — specific ions and molecules.",
                "**Direction:** diffusion and osmosis go **down** the gradient; active transport goes **against** it.",
                "**Membrane needed?** Diffusion — no; osmosis — yes, partially permeable; active transport — yes, with a carrier protein.",
                "**Energy from respiration?** Diffusion — no; osmosis — no; active transport — yes.",
                "**Stops when:** diffusion and osmosis reach equilibrium or balance with pressure; active transport continues as long as the cell has ATP and a steeper gradient can be built."
              ]
            }
          ],
          examinerTips: [
            "Define osmosis with **water molecules**, **partially permeable membrane** and **higher to lower water potential**. If the mark scheme uses 'dilute to concentrated solution', add the words 'of water' so it is unambiguous which substance is moving.",
            "Never say 'the water moved to the weaker solution'. Water moves to the **more concentrated** solution. Read the sentence back and check the direction; this single reversal is the most common loss in the paper.",
            "When comparing plant and animal cells in solutions, name the animal-cell fates precisely: **lysis/haemolysis** in dilute solution and **crenation** in concentrated solution. Plant terms are **turgid**, **flaccid** and **plasmolysed**.",
            "For a question about why plant cells do not burst, the mark is the **rigid cellulose wall** and the pressure it exerts (turgor/wall pressure) — mention both.",
            "In a practical question on osmosis, always include **blotting the pieces dry before weighing** (surface water would inflate the mass) and **using pieces from the same potato/same cylinder** to control the starting concentration.",
            "If asked why active transport stops when a poison is added, answer: the poison stops **respiration**, so no **ATP** is released, and the carrier proteins can no longer move ions against the gradient."
          ],
          commonMistakes: [
            "**Saying osmosis is the diffusion of the solute.** It is the diffusion of **water**. If your sentence names sugar or salt as what moves across the membrane, rewrite it.",
            "**Omitting the membrane.** Diffusion of water through air is not osmosis; the partially permeable membrane is part of the definition.",
            "**Describing plasmolysis as 'the cell wall shrinks'.** The wall is rigid and barely changes; it is the **vacuole and cytoplasm** that contract and pull away from the wall.",
            "**Using 'active diffusion' as a term.** It does not exist; the process is active transport and it is mechanistically different (carrier proteins plus ATP).",
            "**Forgetting the sign in percentage change**, then drawing the wrong conclusion about tonicity from a positive number.",
            "**Claiming root hairs absorb mineral ions by osmosis.** Osmosis moves water only; mineral uptake is active transport (with some ions entering by diffusion when a gradient allows)."
          ],
          recap: [
            "Define osmosis. [3]",
            "A red blood cell is placed in distilled water. Describe and explain what happens to it. [3]",
            "Explain why a plant cell placed in concentrated salt solution becomes plasmolysed but does not collapse. [3]",
            "List two differences between osmosis and active transport. [2]",
            "A onion epidermis strip is measured at 8.0 g and after 20 minutes in glucose solution at 7.6 g. Calculate the percentage change in mass and describe the solution relative to the cell sap. [3]",
            "Explain why a farmer who floods a field with pure water for days may lose the crop. [3]"
          ]
        }
      ]
    },
    // ── Chapters 3+ continue the IGCSE 0610 syllabus in the same format ──
  ]
};
