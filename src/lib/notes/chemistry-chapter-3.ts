import type { Chapter } from "./types";

const IMG = "/notes/chemistry";

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

const massesArt = artPanel([
  {
    src: "ch03-formula-mass-lab.webp",
    alt: "Top-pan balance with a weighing boat of pale blue crystals beside a beaker and spatula",
    caption: "Weighing out a known mass",
  },
  {
    src: "ch03-mole-balance.webp",
    alt: "Beam balance with white powder on one pan and identical spheres on the other, level",
    caption: "Mass balances against counted particles",
  },
]);

const formulaeArt = artPanel([
  {
    src: "ch03-burning-magnesium-crucible.webp",
    alt: "Crucible on a pipe-clay triangle over a bunsen flame with glowing magnesium inside",
    caption: "Burning magnesium to find its formula",
  },
  {
    src: "ch03-percentage-yield-crystals.webp",
    alt: "White crystals on folded filter paper in a funnel beside an evaporating dish",
    caption: "Collecting and drying the solid product",
  },
]);

const volumesArt = artPanel([
  {
    src: "ch03-gas-volume-magnesium.webp",
    alt: "Conical flask of fizzing acid and magnesium linked by delivery tube to a gas syringe",
    caption: "Measuring the volume of gas given off",
  },
  {
    src: "ch03-titration-setup.webp",
    alt: "Burette clamped above a conical flask of pale pink solution on a white tile",
    caption: "Measuring the volume of a solution",
  },
]);

/** Cover the quantity you want: the triangle shows how mass, moles and molar mass divide. */
/** A labelled schematic of the apparatus used for an acid-base titration. */
/** Yield and atom economy sit side by side, because industry judges them together. */
const chapterThree: Chapter = {
  number: 3,
  title: "Stoichiometry",
  intro: `Chemistry is counted in particles, but a balance only reads in grams.\n\nThe mole is the bridge between those two worlds, and a balanced equation turns it into a recipe you can weigh out.\n\nThis chapter builds the bridge from relative masses upward: the mole and molar mass, reacting masses and formulae, concentrations and titrations, gas volumes,\n\nand finally the yield and atom economy that judge a reaction's worth.`,
  subheadings: [
    {
      title: "Relative Masses: Ar, Mr and Formula Mass",
      figure: massesArt,
      body: `## Why Everything Is Relative\n\nAtoms are far too light to weigh in grams. A single carbon-12 atom has a mass of about 2 × 10⁻²² g.\n\nSo chemists compare atoms instead, setting carbon-12 at exactly 12.\n\n**Relative atomic mass (Ar)** is the average mass of one atom of an element compared with one-twelfth of a carbon-12 atom.\n\nThe word average matters: most elements are a mixture of isotopes, so Ar is weighted towards the commonest one.\n\n**Relative molecular mass (Mr)**, also called relative formula mass, is found by adding the Ar values of every atom shown in the formula.\n\nMr has no units, because it is only a comparison.\n\n## Reading Mr Straight From a Formula\n\nCount each atom first, including any inside brackets multiplied by the number after them.\n\nFor H₂SO₄, with Ar H = 1, S = 32, O = 16, add 2(1) + 32 + 4(16) = 98.\n\nFor Ca(OH)₂, with Ar Ca = 40, O = 16, H = 1, add 40 + 2(16 + 1) = 74.\n\nFor Al₂(SO₄)₃, add 2(27) + 3(32) + 12(16) = 342.\n\n## Hydrates and Water of Crystallisation\n\nA hydrate has water molecules locked into its crystals, written as ·xH₂O. CuSO₄·5H₂O means five water molecules join each formula unit.\n\nIts Mr is 159.5 + 5(18) = 249.5, using Ar Cu = 63.5.\n\nThat extra mass of water is why a hydrated salt weighs more than the dry salt it leaves behind.\n\nThe relative atomic mass is a weighted average across a naturally occurring mixture of isotopes.\n\nThis is why chlorine has Ar 35.5 rather than a whole number, mixing chlorine-35 and chlorine-37.`,
      groups: [
        {
          subTitle: "Rules for Adding Up Mr",
          bullets: [
            "List every element, then multiply each Ar by the number of its atoms before adding.",
            "A figure outside a bracket multiplies everything inside it, as in (NH₄)₂SO₄.",
            "Water of crystallisation counts fully, so add 18 for each H₂O after the dot.",
            "Mr is a pure number with no units; only molar mass carries grams per mole.",
            "Use the Ar values printed on the question paper, since they are sometimes rounded.",
          ],
        },
        {
          subTitle: "Worked Examples of Relative Mass",
          bullets: [
            "Mr of CO₂ = 12 + 2(16) = 44, taking Ar C = 12 and O = 16.",
            "Mr of Na₂CO₃ = 2(23) + 12 + 3(16) = 106.",
            "Mr of Mg(NO₃)₂ = 24 + 2(14) + 6(16) = 148.",
            "Mr of Fe₂O₃ = 2(56) + 3(16) = 160.",
            "Mr of CuSO₄·5H₂O = 63.5 + 32 + 64 + 5(18) = 249.5.",
          ],
        },
      ],
      examinerTips: [
        "Show the full addition line in the answer, not just the total; a slip in one term still earns method marks.",
        "When brackets appear, expand them before adding, and state each atom count clearly.",
        "For a hydrate, the mark scheme expects the water included; leaving it out changes every later mole answer.",
        "Carry the given Ar exactly as printed, even if it looks unusual, because the expected answer is built on it.",
      ],
      commonMistakes: [
        "Forgetting to multiply inside brackets, so Ca(OH)₂ becomes 40 + 16 + 1 instead of 74.",
        "Counting the subscript 2 in CuSO₄·5H₂O as two oxygens from the sulfate rather than from the water.",
        "Giving Ar or Mr units such as grams; relative masses have none.",
        "Using the mass number of one isotope instead of the listed average Ar.",
      ],
      recap: [
        "Calculate the Mr of Al₂O₃. (Ar: Al = 27, O = 16) [2]",
        "Calculate the Mr of (NH₄)₂SO₄. (Ar: N = 14, H = 1, S = 32, O = 16) [3]",
        "Calculate the Mr of hydrated sodium carbonate, Na₂CO₃·10H₂O. (Ar: Na = 23, C = 12, O = 16, H = 1) [3]",
        "Explain why the relative atomic mass of chlorine is 35.5 rather than a whole number. [2]",
      ],
    },
    {
      title: "The Mole, Avogadro's Constant and Molar Mass",
      body: `## What a Mole Actually Is\n\nA mole is simply a counting number, exactly as a dozen means twelve. One mole contains **6.02 × 10²³ particles**, the value called the Avogadro constant.\n\nThe particles must be named: one mole of copper atoms, or one mole of water molecules.\n\nThat number was chosen so that one mole of carbon-12 atoms weighs exactly 12 grams.\n\n## The Link to Molar Mass\n\nBecause of that choice, the mass of one mole equals the Mr in grams. This mass is the **molar mass**, written in g/mol.\n\nOne mole of CO₂ (Mr 44) therefore weighs 44 g, and one mole of NaCl (Mr 58.5) weighs 58.5 g.\n\n## Using the Triangle\n\nThe three quantities obey one equation, n = m ÷ M. To find moles from 22 g of CO₂: n = 22 ÷ 44 = 0.500 mol.\n\nTo find the mass of 0.25 mol of Na₂CO₃: m = 0.25 × 106 = 26.5 g.\n\n## Moving Between Particles and Moles\n\nParticles and moles swap by multiplying or dividing by 6.02 × 10²³. The number of molecules = number of moles × 6.02 × 10²³.\n\nEighteen grams of water is 1 mol, so it holds 6.02 × 10²³ molecules.\n\nHalf a mole of any gas contains 3.01 × 10²³ molecules, whatever the gas is.\n\nA mole of any substance carries a different mass, but always the same count of particles.\n\nOne mole of hydrogen molecules and one mole of lead atoms each hold 6.02 × 10²³ particles.\n\nThis is why chemists work in moles, since no balance could ever weigh a particle number directly.\n\nThe number 6.02 × 10²³ is huge, which is exactly what makes one mole a weighable amount.`,
      groups: [
        {
          subTitle: "The Three Conversion Lines",
          bullets: [
            "Moles from mass: n = m ÷ M, so 9.8 g of H₂SO₄ gives 9.8 ÷ 98 = 0.100 mol.",
            "Mass from moles: m = n × M, so 0.300 mol of CaCO₃ gives 0.300 × 100 = 30.0 g.",
            "Particles from moles: multiply by 6.02 × 10²³, so 2 mol holds 1.204 × 10²⁴ particles.",
            "Moles from particles: divide the count by 6.02 × 10²³, the reverse step.",
            "Always name the particle, since one mole of NaCl holds one mole of each ion.",
          ],
        },
        {
          subTitle: "Worked Particle and Mass Conversions",
          bullets: [
            "Moles in 27 g of Al: n = 27 ÷ 27 = 1.00 mol of atoms.",
            "Atoms in that sample: 1.00 × 6.02 × 10²³ = 6.02 × 10²³ atoms.",
            "Mass of 0.400 mol of O₂: m = 0.400 × 32 = 12.8 g.",
            "Moles in 12.04 × 10²³ molecules: n = 12.04 ÷ 6.02 = 2.00 mol.",
            "Molar mass links directly to Mr, so add the same numbers and only attach grams.",
          ],
        },
      ],
      examinerTips: [
        "Write the three symbols with units first, then substitute, because method marks are given for n = m ÷ M shown.",
        "Read the question for the particle type: atoms, molecules or ions each give a different count.",
        "Give answers to three significant figures unless told otherwise.",
        "If asked for particles from a mass, go through moles as an intermediate rather than jumping straight across.",
      ],
      commonMistakes: [
        "Saying a mole is a mass rather than a number of particles.",
        "Forgetting that O₂ is diatomic, so one mole of oxygen gas weighs 32 g not 16 g.",
        "Dividing by Avogadro's constant when the question asks for the number of particles.",
        "Confusing molar mass (g/mol) with relative formula mass, which has no units.",
      ],
      recap: [
        "Define the term mole and state the value of the Avogadro constant. [2]",
        "Calculate the number of moles in 5.6 g of nitrogen gas, N₂. (Ar: N = 14) [2]",
        "Calculate the mass of 0.150 mol of ethanol, C₂H₅OH. (Ar: C = 12, H = 1, O = 16) [3]",
        "How many molecules are present in 3.00 mol of carbon dioxide? [2]",
      ],
    },
    {
      title: "Reacting Masses, Formulae and Water of Crystallisation",
      body: `## From Equation to Mass\n\nA balanced equation gives the mole ratio, and moles convert straight to grams.\n\nFor 2Mg + O₂ → 2MgO, the ratio of Mg to MgO is 2 : 2, which is 1 : 1.\n\nSo the moles of magnesium used equal the moles of magnesium oxide made. The four-step method never changes. Step 1 is to write the balanced equation.\n\nStep 2 is to find the moles of the substance you were given, using n = m ÷ M.\n\nStep 3 is to use the mole ratio to find the moles of the substance you want.\n\nStep 4 is to convert those moles back to mass with m = n × M.\n\n## Worked Reacting Mass\n\nIron is extracted by Fe₂O₃ + 3CO → 2Fe + 3CO₂. Given 800 g of Fe₂O₃, first find n = 800 ÷ 160 = 5.00 mol.\n\nThe ratio Fe₂O₃ to Fe is 1 : 2, so n(Fe) = 5.00 × 2 = 10.0 mol.\n\nThen m(Fe) = 10.0 × 56 = 560 g of iron.\n\n## Empirical and Molecular Formulae\n\nThe empirical formula is the simplest whole-number ratio of atoms. The molecular formula is the real number of atoms in one molecule.\n\nFind the empirical formula by dividing each mass or percentage by its Ar, then dividing through by the smallest result.\n\nFor 40.0% C, 6.7% H and 53.3% O, the ratios are 3.33, 6.70 and 3.33, which reduce to 1 : 2 : 1.\n\nThat gives CH₂O, and glucose C₆H₁₂O₆ is six times the empirical unit. Percentage composition follows the same route, simply reading each percentage as grams.\n\nDivide each mass by the Ar, scale to the smallest value, and the ratio is the formula.`,
      figure: formulaeArt,
      groups: [
        {
          subTitle: "Finding Water of Crystallisation",
          bullets: [
            "Weigh the dry, clean crucible and lid and record the mass.",
            "Add hydrated copper(II) sulfate, weigh again, and heat the blue crystals strongly.",
            "The blue crystals turn white as the water of crystallisation is driven off as steam.",
            "Let it cool, weigh it, then reheat, cool and reweigh until one mass is constant.",
            "The mass lost is the water, and the mass remaining is the anhydrous CuSO₄.",
          ],
        },
        {
          subTitle: "Worked Hydrate Calculation",
          bullets: [
            "Suppose 12.5 g of hydrated salt leaves 8.00 g of anhydrous salt on heating.",
            "Mass of water lost = 12.5 − 8.00 = 4.50 g.",
            "n(CuSO₄) = 8.00 ÷ 159.5 = 0.0500 mol, and n(H₂O) = 4.50 ÷ 18 = 0.250 mol.",
            "Divide by the smaller value to get the ratio 1 : 5.",
            "The formula is therefore CuSO₄·5H₂O.",
          ],
        },
      ],
      examinerTips: [
        "For empirical formulas, keep one extra decimal in each ratio before rounding to a whole number.",
        "If a ratio lands near 1.5, multiply every term by 2, since the answer must be whole numbers.",
        "In the hydrate experiment, heat to constant mass to prove every water molecule has left.",
        "State the mole ratio explicitly, as examiners award marks for showing where ×2 or ÷2 came from.",
      ],
      commonMistakes: [
        "Weighing the crucible while hot, so convection currents give a drifting reading.",
        "Heating anhydrous CuSO₄ so strongly that it decomposes and the mass loss is too large.",
        "Using the mass of the whole sample instead of the mass of water lost in the ratio.",
        "Treating the empirical formula and molecular formula as always identical.",
      ],
      recap: [
        "In 2Mg + O₂ → 2MgO, calculate the mass of magnesium oxide from 4.80 g of magnesium. (Ar: Mg = 24, O = 16) [3]",
        "A compound is 20.0% hydrogen and 80.0% oxygen by mass. Find its empirical formula. (Ar: H = 1, O = 16) [3]",
        "On heating, 6.35 g of a hydrate loses 1.80 g of water. Find x in CuSO₄·xH₂O. (Mr CuSO₄ = 159.5) [4]",
        "Explain why the residue is cooled in a desiccator before it is reweighed. [2]",
      ],
    },
    {
      title: "Concentration of Solutions and Titration Calculations",
      body: `## Two Ways to State Concentration\n\nConcentration tells how much solute sits in each cubic decimetre of solution. In **g/dm³** it is the mass of solute divided by the volume of solution in dm³.\n\nIn **mol/dm³** it is the number of moles divided by the volume of solution in dm³.\n\nTo go from mol/dm³ to g/dm³, multiply the molar concentration by the molar mass. To go the other way, divide the mass concentration by the molar mass.\n\n## The Key Equation\n\nFor solutions the linking equation is n = c × V, with V in dm³. Convert any volume from cm³ to dm³ by dividing by 1000.\n\nA 25.0 cm³ pipette therefore delivers 0.0250 dm³. Titres of 20.0 cm³ equal 0.0200 dm³, a step where most marks are lost.\n\n## Reading the Titration Properly\n\nThe burette holds the standard solution of known concentration. The pipette delivers exactly 25.0 cm³ of the unknown into the conical flask.\n\nRun the titration to two concordant titres within 0.10 cm³, then average only those.\n\n## Worked Titration\n\nHydrochloric acid neutralises sodium hydroxide as HCl + NaOH → NaCl + H₂O, a 1 : 1 ratio.\n\nAn average titre of 18.5 cm³ of 0.100 mol/dm³ HCl is needed for 25.0 cm³ of NaOH. Find n(HCl) = 0.100 × 0.0185 = 0.00185 mol.\n\nThe ratio is 1 : 1, so n(NaOH) = 0.00185 mol in the pipette volume. Then c(NaOH) = 0.00185 ÷ 0.0250 = 0.0740 mol/dm³.\n\nPhenolphthalein fades from pink to colourless as the acid neutralises the alkali. Rough the titration first, then repeat until two titres agree to within 0.10 cm³.\n\nRinse the pipette with the solution it will measure, never with plain water.`,
      groups: [
        {
          subTitle: "Changing and Diluting Concentration",
          bullets: [
            "Convert mol/dm³ to g/dm³ by multiplying by Mr, as 0.100 mol/dm³ NaOH gives 4.00 g/dm³.",
            "Dilution keeps the moles fixed while the volume rises, so the concentration falls.",
            "Use c₁V₁ = c₂V₂, keeping both volumes in the same unit.",
            "Diluting 25.0 cm³ of 0.200 mol/dm³ to 100 cm³ gives 0.0500 mol/dm³.",
            "Adding water never changes the number of moles, only their concentration.",
          ],
        },
        {
          subTitle: "Worked Ratios Other Than One to One",
          bullets: [
            "For H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, the acid to base ratio is 1 : 2.",
            "32.0 cm³ of 0.200 mol/dm³ NaOH gives n(NaOH) = 0.200 × 0.0320 = 0.00640 mol.",
            "Halve it for the 1 : 2 ratio, so n(H₂SO₄) = 0.00320 mol.",
            "Divide by 0.0250 dm³ to give c(H₂SO₄) = 0.128 mol/dm³.",
            "For ethanoic acid and NaOH the ratio returns to 1 : 1, so no halving is needed.",
          ],
        },
      ],
      examinerTips: [
        "Circle the ratio from the balanced equation before calculating, since the 1 : 2 step is where answers go wrong.",
        "Record burette readings to 0.05 cm³, reading the bottom of the meniscus at eye level.",
        "Average only the concordant titres; exclude the rough trial even when it looks close.",
        "State each concentration with units mol/dm³, as a bare number cannot gain the final mark.",
      ],
      commonMistakes: [
        "Using the volume in cm³ directly in n = c × V instead of converting to dm³.",
        "Averaging the rough titre along with the concordant ones.",
        "Forgetting to halve the moles of a diprotic acid such as H₂SO₄.",
        "Rinsing the burette with water, which dilutes the standard solution and inflates the titre.",
      ],
      recap: [
        "Convert a concentration of 0.0500 mol/dm³ Na₂CO₃ into g/dm³. (Mr Na₂CO₃ = 106) [2]",
        "25.0 cm³ of KOH needs 20.5 cm³ of 0.100 mol/dm³ HNO₃. Find the concentration of the KOH. [4]",
        "Explain why concordant titres rather than one titre are used in a titration. [2]",
        "Describe how you would dilute 10.0 cm³ of 0.500 mol/dm³ acid to 0.100 mol/dm³. [3]",
      ],
    },
    {
      title: "Volumes of Gases and the Molar Gas Volume",
      body: `## Twenty-Four Cubic Decimetres per Mole\n\nAt room temperature and pressure, one mole of any gas occupies **24 dm³**. This fixed volume is the molar gas volume, and it holds for every gas alike.\n\nSo the moles of a gas are found by dividing its volume by 24. Written as n = V ÷ 24, with V measured in dm³.\n\nOne dm³ equals 1000 cm³, so 480 cm³ is 0.480 dm³. Using the equation, 0.480 ÷ 24 gives 0.0200 mol of gas.\n\n## Linking Gas Volume to Mass\n\nWhen a question gives a mass instead of a volume, pass through moles.\n\nFind the moles with n = m ÷ M, then multiply by 24 for the volume.\n\nFor 4.4 g of CO₂ (Mr 44), n = 4.4 ÷ 44 = 0.100 mol, so V = 0.100 × 24 = 2.40 dm³.\n\n## Gas Volumes in Reacting-Mass Problems\n\nMagnesium reacts with acid as Mg + 2HCl → MgCl₂ + H₂.\n\nThe ratio of Mg to H₂ is 1 : 1, so the moles of hydrogen equal the moles of magnesium.\n\nFor 0.480 g of Mg (Ar 24), n = 0.480 ÷ 24 = 0.0200 mol, giving V(H₂) = 0.0200 × 24 = 0.480 dm³.\n\nCalcium carbonate reacts as CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂.\n\nHere 100 g of CaCO₃ gives one mole, which is 24 dm³ of carbon dioxide at rtp.\n\nThe molar gas volume suits light helium and heavy carbon dioxide equally well. At one temperature and pressure, equal gas volumes hold equal numbers of molecules.\n\nThat is why a volume ratio from an equation can stand directly in for the mole ratio.`,
      figure: volumesArt,
      groups: [
        {
          subTitle: "Gas Volumes From a Balanced Equation",
          bullets: [
            "Always balance the equation first, since the ratio fixes the gas volume.",
            "In N₂ + 3H₂ → 2NH₃, one volume of nitrogen needs three volumes of hydrogen.",
            "Gas volume ratios equal mole ratios at the same temperature and pressure.",
            "Worked example: 2.40 g of Mg (Ar 24) gives n = 0.100 mol and 2.40 dm³ of H₂.",
            "Read gas volumes from a syringe at eye level, keeping the plunger free to move.",
          ],
        },
        {
          subTitle: "Collecting and Measuring the Gas",
          bullets: [
            "A gas syringe collects dry gas and reads the volume directly, avoiding water losses.",
            "Over water works for gases that do not dissolve, but soluble gases are lost to the water.",
            "Pushing the plunger back or a leaking bung both make the measured volume too small.",
            "Record the volume only after the flask returns to room temperature.",
            "Read the volume to 0.1 cm³ and give the final answer to three significant figures.",
          ],
        },
      ],
      examinerTips: [
        "Check the unit of volume the question gives, then convert cm³ to dm³ before dividing by 24.",
        "State molar gas volume as 24 dm³ at room temperature and pressure to gain the definition mark.",
        "In limiting questions, find which reactant runs out first, then use only that reactant's moles for the gas volume.",
        "Treat the 1 : 1 metal-to-hydrogen ratio as a shortcut, but show the working to keep the method marks.",
      ],
      commonMistakes: [
        "Using 24 cm³ instead of 24 dm³, so the answer is off by a factor of 1000.",
        "Applying the molar gas volume to a liquid or solid, which it never describes.",
        "Forgetting to balance the equation, which silently changes the mole and volume ratio.",
        "Reading the syringe while the gas is still hot, which gives too large a volume.",
      ],
      recap: [
        "State the volume occupied by one mole of any gas at room temperature and pressure. [1]",
        "Calculate the volume of 0.250 mol of oxygen gas at rtp. [2]",
        "What mass of CO₂ (Mr 44) occupies 6.00 dm³ at rtp? [3]",
        "Excess hydrochloric acid is added to 5.00 g of CaCO₃ (Mr 100). Find the volume of CO₂ released at rtp. [3]",
      ],
    },
    {
      title: "Percentage Yield and Atom Economy",
      body: `## Theoretical and Actual Yield\n\nThe theoretical yield is the mass the balanced equation predicts at best. The actual yield is the mass you really collect after filtering and drying.\n\nThe percentage yield compares them directly. It equals the actual yield divided by the theoretical yield, all times 100.\n\nIf 5.4 g of aspirin is expected but 3.8 g is obtained, the yield is 3.8 ÷ 5.4 × 100 = 70.4%.\n\n## Why Yields Fall Below One Hundred\n\nFew reactions finish completely, and reversible ones reach equilibrium early. Product clings to glassware or stays dissolved and is lost during transfer.\n\nSide reactions burn some reactant into unwanted products. Some product escapes with the gases, and filtering through paper always costs a little.\n\n## Atom Economy From the Equation\n\nAtom economy asks what fraction of every reactant atom ends up in the useful product.\n\nIt uses only the balanced equation, so it can be judged before any experiment.\n\nThe formula is the Mr of the wanted product divided by the total Mr of all products, times 100.\n\nFor a reaction making one product from everything, the atom economy is 100%. A reaction that also throws off a heavy by-product scores far lower.\n\n## Why the Two Are Judged Together\n\nA high yield of a process with poor atom economy still dumps tonnes of waste.\n\nA perfect atom economy means nothing if the yield is only a few per cent.\n\nIndustry needs both, so a route is chosen that is efficient and productive together.\n\nAtom economy is a property of the equation, so it is fixed before any lab work.\n\nA reaction with a 100 per cent atom economy leaves no unwanted by-product at all.`,
      groups: [
        {
          subTitle: "Worked Yield and Atom Economy",
          bullets: [
            "Yield example: 12.4 g collected against a 16.1 g theoretical gives 12.4 ÷ 16.1 × 100 = 77.0%.",
            "Atom economy for CaCO₃ → CaO + CO₂, wanting CaO, is 56 ÷ (56 + 44) × 100 = 56.0%.",
            "The total Mr of products equals the total Mr of reactants, so the bottom line balances.",
            "A addition reaction where two reactants form one product reaches 100% atom economy.",
            "Give both answers to three significant figures and always multiply by 100.",
          ],
        },
        {
          subTitle: "Choosing a Greener Route",
          bullets: [
            "High atom economy means less raw material buried as unwanted by-product.",
            "Waste is costly to remove and can pollute, so industry favours efficient routes.",
            "A reversible process often trades a high rate for a low yield, fixed by conditions.",
            "Recycling the by-product into another useful product lifts the overall efficiency.",
            "Atom economy says nothing about speed, temperature or cost, so it is only one factor.",
          ],
        },
      ],
      examinerTips: [
        "Put the actual yield over the theoretical yield, never the reverse, or the answer exceeds 100%.",
        "Calculate a theoretical yield from the equation first, then compare it with the mass given as obtained.",
        "For atom economy, use the whole balanced equation and include every product on the bottom line.",
        "When asked which route is better, quote both the yield and the atom economy, then justify with waste and cost.",
      ],
      commonMistakes: [
        "Reporting a percentage yield above 100, which usually means the product was still wet.",
        "Confusing atom economy with percentage yield, since one comes from the equation and one from experiment.",
        "Leaving out a gaseous by-product when totalling Mr for atom economy.",
        "Dividing by the mass of impure starting material instead of the correct theoretical yield.",
      ],
      recap: [
        "A reaction should give 16.1 g but produces 12.4 g. Calculate the percentage yield. [2]",
        "State two reasons why the actual yield is less than the theoretical yield. [2]",
        "Calculate the atom economy for making ethene from a reaction where Mr of product is 28 and total products 100. [2]",
        "Explain why industrial chemists consider both percentage yield and atom economy before choosing a route. [3]",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_3: Chapter = chapterThree;
