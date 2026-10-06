import type { SubjectNotes } from "./types";

export const CHEMISTRY: SubjectNotes = {
  id: "chemistry",
  name: "Chemistry",
  code: "0620",
  color: "bg-blue-500",
  chapters: [
    {
      number: 1,
      title: "The Particulate Nature of Matter",
      intro: "All matter is made of particles — atoms, molecules, or ions — that are in constant motion. The three states of matter (solid, liquid, gas) differ in the arrangement, spacing, and movement of these particles. Changes of state involve energy changes but no change in the chemical nature of the substance. Understanding particle theory allows chemists to explain physical properties such as density, compressibility, and the ability to diffuse.",
      subheadings: [
        {
          title: "Kinetic Particle Theory and States of Matter",
          body: "In a solid, particles are arranged in a regular lattice and vibrate about fixed positions. They are closely packed, so solids have high density, fixed shape, and fixed volume. They cannot be compressed because the particles are already touching. In a liquid, particles are still close together but have enough energy to move past each other. Liquids have a fixed volume but flow to take the shape of their container. In a gas, particles are far apart, move rapidly in random directions, and have almost no interactions between them. Gases have no fixed shape or volume, low density, and are highly compressible. As energy (heat) is supplied to a substance, particles move faster. At the melting point of a solid, the energy supplied breaks the forces holding particles in fixed positions without increasing the temperature — this energy is the latent heat of fusion. Similarly, at the boiling point, energy breaks the remaining attractive forces between liquid particles, converting them to gas — this is the latent heat of vaporisation. During melting and boiling, temperature remains constant even though energy is being absorbed, because the energy is used to overcome intermolecular forces rather than to increase kinetic energy.",
          groups: [
            {
              subTitle: "Properties of the three states",
              bullets: [
                "**Solid**: Particles in fixed positions, vibrate only. Definite shape and volume. Cannot be compressed. High density. Does not flow. Particles held by strong forces of attraction.",
                "**Liquid**: Particles move randomly but remain close together. Definite volume, no definite shape (takes shape of container). Cannot be compressed significantly. Slightly lower density than corresponding solid (except water). Can flow.",
                "**Gas**: Particles widely spaced, move rapidly and randomly, negligible forces between them. No definite shape or volume (fills its container). Highly compressible. Very low density. Diffuses rapidly."
              ]
            }
          ],
          recap: [
            "Describe the arrangement and movement of particles in a liquid. [2]",
            "Explain why the temperature of a melting solid remains constant even though energy is being supplied. [3]",
            "Explain why gases are much less dense than solids. [2]",
            "Predict and explain what happens to the rate of diffusion of a gas when the temperature is increased. [3]"
          ]
        },
        {
          title: "Diffusion in Gases and Liquids",
          body: "Diffusion is the net movement of particles from a region of high concentration to a region of low concentration due to random particle motion. In gases, diffusion is rapid because gas particles move quickly and the spaces between them are large. The rate of diffusion of a gas is inversely proportional to the square root of its relative molecular mass (Graham's Law) — lighter molecules diffuse faster. For example, hydrogen chloride (Mr = 36.5) and ammonia (Mr = 17) diffuse toward each other along a glass tube; ammonia molecules are lighter so they diffuse faster. Where they meet, they react to form a white ring of ammonium chloride. This ring forms closer to the HCl end, confirming ammonia diffused further. In liquids, diffusion is much slower because particles are closely spaced and movement is restricted by neighbouring particles. Diffusion of dissolved substances through water (such as ions in cells) is essential for cellular processes but is far slower than in gases. Both gas and liquid diffusion are temperature-dependent — higher temperatures increase kinetic energy, so diffusion is faster.",
          groups: [
            {
              subTitle: "The ammonia and HCl diffusion experiment",
              bullets: [
                "**Setup**: Soak cotton wool plugs in concentrated hydrochloric acid and ammonia solution respectively. Place each plug in opposite ends of a sealed glass tube.",
                "**What happens**: Ammonia gas (NH3) and hydrogen chloride gas (HCl) diffuse toward each other. Where they meet: NH3 + HCl → NH4Cl (white solid). A white ring of ammonium chloride forms.",
                "**Result interpretation**: The white ring forms closer to the HCl end. This shows ammonia diffused faster and travelled further. Ammonia (Mr = 17) is lighter than HCl (Mr = 36.5), confirming lighter molecules diffuse faster.",
                "**Quantitative prediction**: By Graham's Law, the ratio of distances is inversely proportional to the ratio of square roots of Mr values. Ammonia travels approximately 1.46 times as far as HCl."
              ]
            }
          ],
          recap: [
            "Describe and explain what is observed when cotton wool soaked in HCl and cotton wool soaked in ammonia solution are placed at opposite ends of a sealed glass tube. [5]",
            "Explain why gases diffuse faster than liquids at the same temperature. [2]",
            "State one factor that increases the rate of diffusion and explain why. [2]",
            "Predict whether nitrogen (Mr = 28) or oxygen (Mr = 32) will diffuse faster and explain your reasoning. [2]"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Experimental Techniques and Chemical Analysis",
      intro: "Practical chemistry requires accurate measurement, separation of mixtures, and identification of substances. The techniques in this chapter — filtration, evaporation, crystallisation, distillation, chromatography, and chemical tests — are used both in the laboratory and in industry. Understanding why each technique works requires knowledge of the physical and chemical properties of the substances being separated or identified. Accurate experimental technique directly affects the reliability and validity of results.",
      subheadings: [
        {
          title: "Separation Techniques",
          body: "Filtration separates an insoluble solid from a liquid. The mixture is poured through filter paper in a funnel; the paper has pores that allow liquid (filtrate) to pass through but retain solid particles (residue). Filtration works because of the difference in particle size. Evaporation removes solvent from a solution by heating; the solvent vapourises, leaving dissolved solute behind. It is used when the product is not damaged by heat — for example, evaporating salt solution to dryness leaves salt crystals. Crystallisation produces larger, purer crystals: the solution is heated to evaporate some solvent, then left to cool slowly. As it cools, solubility decreases and solute crystallises out in a regular lattice. Simple distillation separates a solvent from a solution (e.g. water from salt water) or two liquids with very different boiling points. The mixture is heated; the component with the lower boiling point boils off as vapour, is condensed in a cooled condenser, and collected as distillate. Fractional distillation separates mixtures of liquids with similar boiling points (such as crude oil fractions or ethanol and water) using a fractionating column that provides many condensation-evaporation steps. Paper chromatography separates mixtures of dissolved substances (such as dyes or amino acids) based on their differing solubilities in the mobile phase (solvent) and their different affinities for the stationary phase (paper). Components that are more soluble in the solvent travel further up the paper.",
          groups: [
            {
              subTitle: "Chromatography and Rf values",
              bullets: [
                "**Rf value calculation**: Rf = distance travelled by substance / distance travelled by solvent front. Rf values are between 0 and 1 and are characteristic of a substance under specific conditions (solvent, temperature, paper type).",
                "**Uses of chromatography**: Identifying dyes in food colouring, checking the purity of pharmaceutical products, identifying amino acids in protein hydrolysates (using ninhydrin spray to reveal colourless amino acids).",
                "**Two-way chromatography**: Used when substances have similar Rf values in one solvent. The paper is turned 90° and run in a second, different solvent, separating substances that comigrate in the first solvent.",
                "**Spotting technique**: The starting spot must be made with a pencil line (not pen — ink would run with the solvent). The spot must be small and concentrated. The solvent level must be below the starting line, otherwise the sample would dissolve into the solvent before running."
              ]
            }
          ],
          recap: [
            "Describe how to obtain pure dry salt from a solution of salt in water. Include all steps. [4]",
            "Explain how paper chromatography separates a mixture of dyes. [3]",
            "A chromatogram shows a spot that travelled 4.5 cm when the solvent front travelled 7.5 cm. Calculate the Rf value and show your working. [2]",
            "Explain why simple distillation cannot completely separate ethanol from water. [2]"
          ]
        },
        {
          title: "Identification of Ions and Gases",
          body: "Chemical tests allow identification of specific ions and gases. For cations (positive ions): sodium ions produce a persistent yellow flame in a flame test; potassium ions give a lilac flame; calcium ions give a brick-red flame; copper ions give a blue-green flame. For anions (negative ions): chloride ions produce a white precipitate of silver chloride when silver nitrate solution is added (acidified with dilute HNO3, which prevents interference from carbonate and sulfate ions). Sulfate ions produce a white precipitate of barium sulfate when barium chloride solution is added (acidified with dilute HCl). Carbonate ions produce carbon dioxide when acid is added; CO2 turns limewater milky. Aqueous solutions of metal cations form characteristic precipitates with sodium hydroxide solution: copper(II) ions form a blue precipitate; iron(II) ions form a green precipitate; iron(III) ions form a brown/rust precipitate; these precipitates are the insoluble metal hydroxides. For gases: hydrogen burns with a squeaky pop with a lighted splint; oxygen relights a glowing splint; carbon dioxide turns limewater milky; chlorine bleaches damp litmus paper; ammonia turns damp red litmus paper blue and has a characteristic pungent smell.",
          groups: [
            {
              subTitle: "Summary of key chemical tests",
              bullets: [
                "**Chloride ion**: Add dilute HNO3, then silver nitrate solution. White precipitate of AgCl forms. The precipitate is insoluble in dilute HNO3 (distinguishing from silver carbonate, which dissolves). AgCl also darkens on exposure to light.",
                "**Sulfate ion**: Add dilute HCl (to dissolve any carbonate that would interfere), then barium chloride solution. White precipitate of BaSO4 forms. BaSO4 is extremely insoluble — even in strong acid.",
                "**Carbonate ion**: Add dilute acid. Effervescence occurs (CO2 gas produced). Bubble the gas through limewater (calcium hydroxide solution) — it turns milky due to formation of calcium carbonate precipitate.",
                "**Metal hydroxide precipitates with NaOH**: Cu2+ = blue; Fe2+ = green; Fe3+ = brown/rust-orange; Zn2+ = white (redissolves in excess NaOH to give colourless solution — amphoteric); Al3+ = white (also redissolves in excess NaOH)."
              ]
            }
          ],
          recap: [
            "Describe how to test a solution to determine whether it contains sulfate ions. State the reagents, procedure, and result. [3]",
            "State the observations when excess sodium hydroxide solution is added to a solution containing iron(III) ions. [2]",
            "Describe the test for hydrogen gas and state the result. [2]",
            "A student tests an unknown solution with silver nitrate and obtains a white precipitate. The student concludes chloride ions are present. Explain why the student must first add dilute nitric acid before adding silver nitrate. [2]"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Atoms, Elements and Compounds",
      intro: "An atom is the smallest particle of an element that can take part in chemical reactions. Atoms are composed of a nucleus containing protons and neutrons, surrounded by electrons in shells. The atomic number (proton number) determines the identity of the element; the mass number tells us the total number of protons and neutrons. Elements in the same group of the Periodic Table have the same number of electrons in their outer shell, which determines their chemical properties. Understanding electron configuration enables prediction of how atoms bond and react.",
      subheadings: [
        {
          title: "Atomic Structure",
          body: "An atom consists of a very small, dense, positively charged nucleus surrounded by negatively charged electrons in energy levels (shells). The nucleus contains protons (relative charge +1, relative mass 1) and neutrons (relative charge 0, relative mass 1). Electrons have relative charge -1 and negligible relative mass (1/1836 that of a proton). A neutral atom has equal numbers of protons and electrons. The atomic number (Z) is the number of protons in the nucleus — it identifies the element. The mass number (A) is the total number of protons plus neutrons. The number of neutrons = A - Z. Electrons are arranged in shells: the first shell holds a maximum of 2 electrons; the second and third shells each hold a maximum of 8 electrons. For example, sodium (Z = 11) has configuration 2,8,1 — two electrons in the first shell, eight in the second, one in the outer shell. This outer shell electron is why sodium is in Group I and why it forms Na+ ions. Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons (and therefore different mass numbers). For example, carbon-12 (6 protons, 6 neutrons) and carbon-14 (6 protons, 8 neutrons) are both isotopes of carbon. Isotopes have identical chemical properties because they have the same electron configuration; they differ in physical properties such as density and rate of diffusion.",
          groups: [
            {
              subTitle: "Key sub-atomic particles",
              bullets: [
                "**Proton**: Relative mass = 1, relative charge = +1. Located in the nucleus. The number of protons (atomic number) defines which element the atom is.",
                "**Neutron**: Relative mass = 1, relative charge = 0. Located in the nucleus. The number of neutrons varies between isotopes of the same element.",
                "**Electron**: Relative mass ≈ 0 (negligible), relative charge = -1. Arranged in shells (energy levels) around the nucleus. The number of electrons in a neutral atom equals the number of protons.",
                "**Electron shells**: 1st shell: max 2 electrons; 2nd shell: max 8; 3rd shell: max 8 (at IGCSE level). The arrangement of electrons in shells (electron configuration) determines chemical reactivity."
              ]
            }
          ],
          recap: [
            "An atom of magnesium has atomic number 12 and mass number 24. State the number of protons, neutrons, and electrons in this atom. [3]",
            "Explain what is meant by the term isotope and give one example. [3]",
            "Write the electron configuration of a chlorine atom (atomic number 17). [1]",
            "Explain why isotopes of the same element have identical chemical properties but different physical properties. [3]"
          ]
        },
        {
          title: "Ionic and Covalent Bonding",
          body: "Ionic bonding involves the transfer of electrons from a metal atom to a non-metal atom. The metal loses electrons to form a positively charged cation; the non-metal gains electrons to form a negatively charged anion. Both ions achieve a full outer shell of electrons (the noble gas configuration). For example, sodium gives its one outer electron to chlorine: Na (2,8,1) → Na+ (2,8) + e- and Cl (2,8,7) + e- → Cl- (2,8,8). The oppositely charged ions are held together by strong electrostatic forces of attraction — ionic bonds. Ionic compounds form giant lattice structures with high melting and boiling points because many ionic bonds must be broken simultaneously. They conduct electricity when molten or dissolved in water (because ions become free to move) but not as solids (ions are fixed in the lattice). Covalent bonding involves the sharing of pairs of electrons between two non-metal atoms, with each atom contributing one electron to the shared pair. Both atoms achieve a stable full outer shell. For example, in water (H2O), each hydrogen atom shares its single electron with the oxygen atom's electrons; oxygen makes two single bonds. In a covalent bond, the shared electrons are attracted simultaneously to both nuclei, holding the atoms together. Simple molecular covalent compounds (H2, Cl2, H2O, CO2) have low melting and boiling points because the intermolecular forces between discrete molecules are weak (van der Waals forces); the strong covalent bonds within the molecule are not broken during melting.",
          groups: [
            {
              subTitle: "Giant covalent structures vs simple molecular",
              bullets: [
                "**Simple molecular covalent compounds** (H2O, CO2, CH4): Very low melting points. Poor conductors of electricity. Intermolecular forces (not covalent bonds) break during melting. Often gases or liquids at room temperature.",
                "**Giant covalent/atomic lattices** (diamond, graphite, silicon dioxide SiO2): Very high melting points because every atom is joined to many others by strong covalent bonds — an enormous number of bonds must be broken to melt the substance.",
                "**Diamond**: Each carbon bonded to 4 others tetrahedrally. Extremely hard. No free electrons — does not conduct electricity. Very high melting point (~3550°C).",
                "**Graphite**: Each carbon bonded to 3 others in flat hexagonal layers. One delocalised electron per carbon — conducts electricity. Layers held by weak forces — layers slide easily (good lubricant). High melting point."
              ]
            }
          ],
          recap: [
            "Describe what happens when sodium reacts with chlorine to form sodium chloride. Include electron transfer and resulting charges. [4]",
            "Explain why sodium chloride has a high melting point and conducts electricity when dissolved in water. [3]",
            "Draw a dot-and-cross diagram to show the covalent bonds in a molecule of water. [2]",
            "Explain why diamond and sodium chloride both have high melting points but for different reasons. [4]"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Stoichiometry",
      intro: "Stoichiometry is the quantitative study of the amounts of reactants and products in chemical reactions. The mole concept provides the bridge between the atomic scale (individual atoms and molecules) and the laboratory scale (grams that can be weighed). By balancing equations and using molar ratios, chemists can predict how much product will form from a given mass of reactant, calculate theoretical yields, and determine concentrations of solutions. These calculations are essential in industrial chemistry for minimising waste and cost.",
      subheadings: [
        {
          title: "The Mole and Molar Mass",
          body: "The mole (mol) is the SI unit for amount of substance. One mole of any substance contains 6.02 × 10^23 particles (Avogadro's number, NA). This number was chosen so that the mass of one mole of a substance in grams equals its relative atomic mass (Ar) or relative molecular mass (Mr). For example, one mole of carbon atoms (Ar = 12) has a mass of 12 g; one mole of water molecules (Mr = 18) has a mass of 18 g. The molar mass (M) is the mass in grams of one mole of a substance, expressed in g/mol. The relationship is: number of moles = mass (g) / molar mass (g/mol), or n = m/M. For example, to find the number of moles in 44 g of CO2 (Mr = 12 + 16 + 16 = 44): n = 44/44 = 1 mol. For gases at room temperature and pressure (rtp: 25°C, 101 kPa), one mole of any gas occupies approximately 24 dm3 (24,000 cm3) — the molar volume. Therefore, number of moles of gas = volume (dm3) / 24.",
          groups: [
            {
              subTitle: "Mole calculations — step by step",
              bullets: [
                "**Finding moles from mass**: n = m / M. Example: moles of NaCl in 5.85 g: M(NaCl) = 23 + 35.5 = 58.5 g/mol; n = 5.85/58.5 = 0.1 mol.",
                "**Finding mass from moles**: m = n × M. Example: mass of 0.25 mol of H2SO4: M = 2+32+64 = 98 g/mol; m = 0.25 × 98 = 24.5 g.",
                "**Moles of gas from volume**: n = V(dm3) / 24. Example: moles in 6 dm3 of CO2 at rtp: n = 6/24 = 0.25 mol.",
                "**Using balanced equations**: The ratio of moles in a balanced equation is the mole ratio of reactants and products. For 2H2 + O2 → 2H2O: 2 mol H2 reacts with 1 mol O2 to produce 2 mol H2O."
              ]
            }
          ],
          recap: [
            "Calculate the number of moles in 10 g of calcium carbonate (CaCO3). Show your working. [2]",
            "What volume (in dm3) does 0.5 mol of oxygen gas occupy at room temperature and pressure? [1]",
            "Calculate the mass of sodium hydroxide (NaOH) needed to make 250 cm3 of a 2 mol/dm3 solution. [3]",
            "In the reaction 2Mg + O2 → 2MgO, calculate the mass of magnesium oxide produced when 4.8 g of magnesium reacts completely. [3]"
          ]
        },
        {
          title: "Concentration and Titration Calculations",
          body: "Concentration measures how much solute is dissolved per unit volume of solution, expressed in mol/dm3 (also written as M or mol/L). The relationship is: concentration (mol/dm3) = moles of solute / volume of solution (dm3). To convert cm3 to dm3, divide by 1000. In a titration, a solution of known concentration (standard solution) is used to find the concentration of an unknown solution. A typical acid-base titration: the burette is filled with one solution (e.g. NaOH), and a measured volume of the other (e.g. HCl) is pipetted into a conical flask with a few drops of indicator. The NaOH is added slowly from the burette until the indicator changes colour at the equivalence point (end point). The volume used is the titre. From the titre and concentration of the standard solution, moles are calculated; using the mole ratio from the balanced equation, moles of the unknown are found; then concentration = moles / volume. Concordant titres (repeatable results within 0.10 cm3) are averaged for accuracy.",
          groups: [
            {
              subTitle: "Titration calculation example",
              bullets: [
                "**Example problem**: 25.0 cm3 of NaOH solution of unknown concentration requires 20.0 cm3 of 0.10 mol/dm3 HCl to reach the end point. The equation is: HCl + NaOH → NaCl + H2O.",
                "**Step 1 — moles of HCl**: n(HCl) = c × V = 0.10 × (20.0/1000) = 0.0020 mol.",
                "**Step 2 — moles of NaOH**: From the 1:1 mole ratio, n(NaOH) = 0.0020 mol.",
                "**Step 3 — concentration of NaOH**: c(NaOH) = n/V = 0.0020 / (25.0/1000) = 0.080 mol/dm3."
              ]
            }
          ],
          recap: [
            "Calculate the concentration of a solution made by dissolving 4.0 g of NaOH in 500 cm3 of water. [3]",
            "In a titration, 25.0 cm3 of H2SO4 of unknown concentration reacts with 30.0 cm3 of 0.2 mol/dm3 NaOH. The equation is: H2SO4 + 2NaOH → Na2SO4 + 2H2O. Calculate the concentration of the H2SO4. [4]",
            "Explain why it is important to obtain concordant titres in a titration experiment. [2]",
            "Describe the technique for performing a burette reading accurately to minimise experimental error. [2]"
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Electricity and Chemistry",
      intro: "Electrolysis is the decomposition of an ionic compound — either molten or in aqueous solution — by the passage of an electric current. It is used industrially to extract reactive metals (like aluminium and sodium) that cannot be obtained by reduction with carbon, to purify metals like copper, and to electroplate metal objects. Understanding electrolysis requires knowing how ions move in an electric field and which products form at each electrode based on the ions present and the relative discharge potentials.",
      subheadings: [
        {
          title: "Principles of Electrolysis",
          body: "An electrolyte is a substance that conducts electricity when molten or dissolved in water because its ions become mobile. When a direct current (dc) is passed through an electrolyte, cations (positive ions) migrate toward the cathode (negative electrode), where they gain electrons and are reduced to form neutral atoms or molecules. Anions (negative ions) migrate toward the anode (positive electrode), where they lose electrons and are oxidised to form neutral atoms or molecules. The cathode is always negative (connected to the negative terminal of the dc supply) and the anode is always positive (connected to the positive terminal). At the cathode: reduction occurs — cations gain electrons: Mⁿ⁺ + ne⁻ → M. At the anode: oxidation occurs — anions lose electrons: Xⁿ⁻ → X + ne⁻, or the anode metal dissolves if the anode is an impure metal (e.g. in copper purification). Memory aid: OILRIG — Oxidation Is Loss, Reduction Is Gain (of electrons); and the acronym ANOX/REDCAT — ANOde = OXidation; REDuction = CATHode.",
          groups: [
            {
              subTitle: "Electrolysis of aqueous solutions — discharge order",
              bullets: [
                "**At the cathode**: The less reactive metal ion is preferentially discharged. In copper sulfate solution, Cu2+ is discharged in preference to H+ (from water) — copper metal deposits. In dilute HCl or H2SO4, H+ is discharged — hydrogen gas is produced.",
                "**At the anode**: If the anode is an inert electrode (platinum or graphite), the anion that is discharged depends on concentration. Cl- is preferentially discharged over OH- (from water) in concentrated HCl — chlorine gas produced. In dilute HCl or sulfate solutions, OH- is discharged — oxygen gas produced.",
                "**In NaCl(aq)**: Cathode: H2 gas (H+ discharged in preference to Na+, as Na is more reactive). Anode: Cl2 gas (Cl- discharged in concentrated solution, O2 if dilute). Products are used industrially to make NaOH, Cl2, and H2 (chlor-alkali process).",
                "**In CuSO4(aq) with copper electrodes**: The copper anode dissolves (Cu → Cu2+ + 2e-) and copper deposits at the cathode. The overall concentration of CuSO4 stays roughly constant. This is the basis of copper refining — impure copper anode dissolves, pure copper deposits at cathode."
              ]
            }
          ],
          recap: [
            "Define the term electrolyte and explain why solid ionic compounds do not conduct electricity but molten ionic compounds do. [3]",
            "State what is produced at each electrode during the electrolysis of concentrated sodium chloride solution using inert electrodes. Write ionic half-equations for each electrode. [4]",
            "Explain how electrolysis is used to purify copper. [4]",
            "State the half-equation for the reaction at the cathode during the electrolysis of copper(II) sulfate solution. [2]"
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Chemical Energetics",
      intro: "Every chemical reaction involves a change in energy. Exothermic reactions release energy (usually as heat) to the surroundings, causing the temperature of the surroundings to rise. Endothermic reactions absorb energy from the surroundings, causing the temperature to fall. The enthalpy change of a reaction (H) is the heat energy absorbed or released at constant pressure. Bond breaking requires energy (endothermic); bond forming releases energy (exothermic). The net enthalpy change is determined by the balance between these two processes. Understanding energy changes is central to industrial chemistry — choosing reactions that maximise energy efficiency while maintaining reasonable reaction rates.",
      subheadings: [
        {
          title: "Exothermic and Endothermic Reactions",
          body: "In an exothermic reaction, the products have less energy than the reactants; the difference is released to the surroundings as heat (and sometimes light). The enthalpy change (ΔH) is negative for exothermic reactions. Examples include: combustion of fuels, neutralisation (acid + alkali), oxidation reactions, and displacement of metals. In everyday experience, exothermic reactions make the reaction container feel warm. In an endothermic reaction, the products have more energy than the reactants; energy is absorbed from the surroundings, so the surroundings cool down. ΔH is positive for endothermic reactions. Examples include: thermal decomposition of calcium carbonate, dissolving ammonium nitrate in water, and photosynthesis. In everyday experience, endothermic reactions make the container feel cold — hand warmers use exothermic reactions; cold packs used for sports injuries use endothermic reactions. Energy profile diagrams (reaction coordinate diagrams) show the energy of reactants and products. The activation energy (Ea) is the minimum energy that colliding particles must possess for a reaction to occur — it is the energy barrier that must be overcome. Catalysts provide an alternative reaction pathway with a lower activation energy, increasing the rate without being consumed.",
          groups: [
            {
              subTitle: "Bond energy calculations",
              bullets: [
                "**Principle**: Bond breaking requires energy (endothermic); bond making releases energy (exothermic). ΔH = energy required to break bonds in reactants - energy released when bonds form in products.",
                "**Example**: H2 + Cl2 → 2HCl. Bond energies: H-H = 436 kJ/mol; Cl-Cl = 242 kJ/mol; H-Cl = 432 kJ/mol.",
                "**Step 1 — bonds broken**: 1 × H-H (436) + 1 × Cl-Cl (242) = 678 kJ (energy in).",
                "**Step 2 — bonds formed**: 2 × H-Cl (2 × 432) = 864 kJ (energy out). ΔH = 678 - 864 = -186 kJ/mol. Negative sign confirms the reaction is exothermic."
              ]
            }
          ],
          recap: [
            "Explain the difference between an exothermic and an endothermic reaction in terms of energy change and temperature change. [3]",
            "Using bond energies provided, calculate the enthalpy change for the reaction CH4 + 2O2 → CO2 + 2H2O. Bond energies (kJ/mol): C-H = 413, O=O = 498, C=O = 805, O-H = 464. [4]",
            "Draw and label an energy profile diagram for an exothermic reaction, showing reactants, products, activation energy, and enthalpy change. [4]",
            "Explain how a catalyst increases the rate of a reaction using the concept of activation energy. [3]"
          ]
        }
      ]
    },
    {
      number: 7,
      title: "Chemical Reactions",
      intro: "Chemical reactions can be classified by the type of change that occurs: redox (simultaneous oxidation and reduction), precipitation, neutralisation, and decomposition. Reaction rates depend on the frequency and energy of successful collisions between reactant particles, which can be increased by raising temperature, increasing concentration, increasing surface area, or using a catalyst. Understanding how to control reaction rates is fundamental to safe and efficient industrial chemistry.",
      subheadings: [
        {
          title: "Rates of Reaction and Collision Theory",
          body: "The rate of a chemical reaction is the change in concentration of a reactant or product per unit time. According to collision theory, for a reaction to occur, reactant particles must collide with sufficient energy (at least equal to the activation energy) and with the correct orientation. Any factor that increases the frequency of successful collisions will increase the rate. Increasing concentration (in solution) or pressure (for gases) places more particles in the same volume, so collisions are more frequent. Increasing temperature increases both the frequency of collisions and, more importantly, the proportion of particles with energy equal to or greater than the activation energy (described by the Maxwell-Boltzmann distribution) — a 10°C rise roughly doubles the rate for many reactions. Increasing surface area by grinding a solid into smaller pieces exposes more particles at the surface, so more collisions with the other reactant can occur. A catalyst provides an alternative reaction pathway with a lower activation energy, meaning a greater proportion of collisions are successful at the same temperature. The catalyst is not consumed in the reaction and does not change the products or the overall enthalpy change.",
          groups: [
            {
              subTitle: "Investigating reaction rates — standard experiments",
              bullets: [
                "**Marble chips and HCl (measuring CO2 production)**: CaCO3(s) + 2HCl(aq) → CaCl2(aq) + H2O(l) + CO2(g). Measure the volume of CO2 collected over time. Compare rates at different temperatures, concentrations, or particle sizes by measuring the initial slope of the volume-vs-time graph.",
                "**Sodium thiosulfate and HCl (disappearing cross)**: Na2S2O3(aq) + 2HCl(aq) → 2NaCl(aq) + H2O(l) + SO2(g) + S(s). Yellow sulfur precipitate forms, making the solution go cloudy. Measure the time for a cross drawn under the flask to disappear. Rate ∝ 1/time.",
                "**Effect of a catalyst**: Hydrogen peroxide decomposes slowly: 2H2O2 → 2H2O + O2. Adding manganese(IV) oxide (MnO2) as a catalyst dramatically increases the rate — oxygen is given off rapidly. The MnO2 can be recovered unchanged at the end, confirming it is a catalyst.",
                "**Graphing rates**: The steeper the initial slope of a mass-lost or gas-produced graph, the faster the rate. When one reactant is used up completely (the limiting reagent), the graph becomes horizontal — no more product forms."
              ]
            }
          ],
          recap: [
            "Explain using collision theory why increasing temperature increases the rate of a reaction. [3]",
            "Describe an experiment to investigate the effect of concentration on the rate of reaction between sodium thiosulfate and hydrochloric acid. Include measurements taken and how rate is determined. [5]",
            "Explain why a catalyst increases the rate of a reaction without being consumed. [3]",
            "Explain why marble chips react faster with hydrochloric acid when powdered compared to large lumps, even if the same mass is used. [2]"
          ]
        },
        {
          title: "Redox Reactions",
          body: "Oxidation and reduction always occur simultaneously — when one substance is oxidised, another is reduced. In terms of electron transfer: oxidation is the loss of electrons and reduction is the gain of electrons (remembered by OILRIG). In terms of oxygen: oxidation is the gain of oxygen; reduction is the loss of oxygen. In terms of oxidation state: oxidation is an increase in oxidation state; reduction is a decrease. An oxidising agent causes oxidation of another substance and is itself reduced (gains electrons). A reducing agent causes reduction of another substance and is itself oxidised (loses electrons). Displacement reactions are redox reactions: a more reactive metal displaces a less reactive metal ion from solution because the more reactive metal is a stronger reducing agent. For example, zinc displaces copper from copper sulfate solution: Zn(s) + CuSO4(aq) → ZnSO4(aq) + Cu(s). Zinc is oxidised (Zn → Zn2+ + 2e-) and copper ions are reduced (Cu2+ + 2e- → Cu). The reactivity series ranks metals by their tendency to lose electrons (be oxidised): potassium, sodium, calcium, magnesium, aluminium, zinc, iron, tin, lead, copper, silver, gold.",
          groups: [
            {
              subTitle: "Oxidation state rules",
              bullets: [
                "**Rule 1**: Uncombined elements have oxidation state 0. e.g., O2, Mg, Fe all have oxidation state 0.",
                "**Rule 2**: Ions of single atoms have oxidation state equal to their charge. Na+ = +1; Cl- = -1; Fe3+ = +3.",
                "**Rule 3**: Oxygen usually has oxidation state -2 (except in peroxides where it is -1). Hydrogen is usually +1 (except in metal hydrides, where it is -1).",
                "**Rule 4**: The sum of oxidation states in a neutral compound = 0. In H2SO4: 2(+1) + S + 4(-2) = 0; S = +6. In a polyatomic ion, the sum equals the charge on the ion."
              ]
            }
          ],
          recap: [
            "Define oxidation and reduction in terms of electron transfer. [2]",
            "In the reaction Mg + 2HCl → MgCl2 + H2, identify which species is oxidised and which is reduced. Give the oxidation state changes. [4]",
            "Explain why displacement reactions are classified as redox reactions. Use the example of iron reacting with copper sulfate solution. [4]",
            "Determine the oxidation state of manganese in KMnO4. Show your working. [2]"
          ]
        }
      ]
    },
    {
      number: 8,
      title: "Acids, Bases and Salts",
      intro: "Acids, bases, and salts are three of the most important classes of compounds in chemistry. Acids release hydrogen ions (H+) in aqueous solution and have pH below 7. Bases are metal oxides and hydroxides that neutralise acids. Alkalis are soluble bases that release hydroxide ions (OH-) in aqueous solution. Neutralisation — the reaction of an acid with a base to form a salt and water — is one of the most important reaction types in chemistry, with applications from treating acid indigestion to industrial manufacturing of fertilisers.",
      subheadings: [
        {
          title: "Properties of Acids, Bases and the pH Scale",
          body: "An acid is a proton (H+) donor; in water, acids ionise to release H+ ions. Strong acids (hydrochloric, sulfuric, nitric) are fully ionised in aqueous solution, giving a high concentration of H+ ions and very low pH. Weak acids (ethanoic, carbonic) are only partially ionised, giving fewer H+ ions and a higher pH for the same concentration. The pH scale runs from 0 to 14: values below 7 are acidic; pH 7 is neutral; values above 7 are alkaline. Each unit change in pH represents a tenfold change in H+ ion concentration (because pH is a logarithmic scale). A base is a proton acceptor — a substance that reacts with H+ ions. Metal oxides (CuO, MgO), metal hydroxides (NaOH, Ca(OH)2), and carbonates (CaCO3) are all bases. An alkali is a base that dissolves in water to form OH- ions — sodium hydroxide, potassium hydroxide, calcium hydroxide, and aqueous ammonia are common alkalis. The pH of a solution can be measured using universal indicator (gives a range of colours), a pH probe/meter (gives a precise numerical value), or individual indicators such as litmus (red in acid, blue in alkali) or phenolphthalein (colourless in acid, pink in alkali).",
          groups: [
            {
              subTitle: "Reactions of acids — summary",
              bullets: [
                "**Acid + Metal**: acid + metal → salt + hydrogen. Example: 2HCl + Mg → MgCl2 + H2. The hydrogen gas produced burns with a squeaky pop. Not all metals react — noble metals (Cu, Ag, Au) do not react with dilute acids.",
                "**Acid + Metal oxide (base)**: acid + metal oxide → salt + water. Example: H2SO4 + CuO → CuSO4 + H2O. This is a neutralisation reaction. The black copper oxide dissolves as the blue copper sulfate solution forms.",
                "**Acid + Metal hydroxide (alkali)**: acid + alkali → salt + water. Example: HCl + NaOH → NaCl + H2O. The ionic equation for all strong acid-strong alkali neutralisations is: H+ + OH- → H2O.",
                "**Acid + Carbonate**: acid + carbonate → salt + water + carbon dioxide. Example: 2HCl + CaCO3 → CaCl2 + H2O + CO2. The CO2 causes effervescence; it turns limewater milky — used as a test for carbonate ions."
              ]
            }
          ],
          recap: [
            "Describe the reactions of dilute sulfuric acid with magnesium oxide and with magnesium carbonate. Write word equations for each reaction. [4]",
            "Explain the difference between a strong acid and a weak acid. [2]",
            "Explain why the pH of a solution of hydrochloric acid is lower than that of the same concentration of ethanoic acid. [3]",
            "Write the ionic equation for the neutralisation of a strong acid by a strong alkali. [2]"
          ]
        },
        {
          title: "Preparation of Salts",
          body: "Salts can be prepared by several methods depending on whether they are soluble or insoluble and whether the metal is reactive. Method 1 — Titration (for soluble salts from an alkali and acid): the acid and alkali are titrated to find the exact volumes needed for complete neutralisation (using indicator), then the same volumes are mixed without indicator and the solution is evaporated to crystallise the pure salt. Method 2 — Excess solid method (for soluble salts from an insoluble base/carbonate): excess base or carbonate (e.g. copper oxide or zinc carbonate) is added to a warm acid until no more dissolves (ensuring all the acid is used up), the excess solid is filtered off, and the filtrate is evaporated to crystallise the salt. The excess solid must be used to ensure all acid is consumed — if any acid remained, the salt would be contaminated. Method 3 — Precipitation (for insoluble salts): mix two soluble salt solutions whose ions combine to form the insoluble salt. For example, lead(II) iodide is made by mixing lead(II) nitrate solution with potassium iodide solution: Pb(NO3)2(aq) + 2KI(aq) → PbI2(s) + 2KNO3(aq). The precipitate is filtered, washed with distilled water to remove soluble impurities, and dried.",
          groups: [
            {
              subTitle: "Naming salts from acids",
              bullets: [
                "**Hydrochloric acid** → chloride salts. HCl + NaOH → NaCl (sodium chloride). HCl + CuO → CuCl2 (copper(II) chloride).",
                "**Sulfuric acid** → sulfate salts. H2SO4 + Mg → MgSO4 (magnesium sulfate). H2SO4 + 2NaOH → Na2SO4 (sodium sulfate).",
                "**Nitric acid** → nitrate salts. HNO3 + KOH → KNO3 (potassium nitrate). Note: most nitrates are soluble.",
                "**Solubility rules**: All nitrates soluble; all sodium, potassium, ammonium salts soluble; all chlorides soluble except AgCl and PbCl2; all sulfates soluble except BaSO4, PbSO4, and CaSO4; most carbonates insoluble except Na2CO3, K2CO3, (NH4)2CO3."
              ]
            }
          ],
          recap: [
            "Describe how you would prepare pure dry crystals of copper(II) sulfate starting from copper(II) oxide and dilute sulfuric acid. [5]",
            "Write the ionic equation for the precipitation of barium sulfate when barium chloride solution is added to sodium sulfate solution. [2]",
            "Explain why an excess of copper oxide is added when making copper sulfate crystals from the oxide and acid. [2]",
            "Name the salt produced when nitric acid reacts with calcium hydroxide and write a balanced equation. [2]"
          ]
        }
      ]
    }
  ]
};
