import type { Chapter } from "./types";
import { box, labelledRows, svgDiagram, tileRow } from "./diagram-kit";

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

const biotechArt = artPanel([
  {
    src: "ch21-bioreactor.webp",
    alt: "Illustration of a sealed industrial fermenter with tubes and controls",
    caption: "A fermenter growing microorganisms",
  },
  {
    src: "ch21-gm-crop.webp",
    alt: "Illustration of a crop plant with a gene being added to it",
    caption: "A gene added to one crop plant",
  },
]);

const foodBiotechArt = artPanel([
  {
    src: "ch21-food-biotechnology.webp",
    alt: "A jar of yoghurt, a sliced loaf, a wedge of cheese and a bubbling flask",
    caption: "Foods made with microorganisms",
  },
]);

const plasmidArt = artPanel([
  {
    src: "ch21-gene-transfer-plasmid.webp",
    alt: "A plasmid cut open, foreign DNA dropped in, then a bacterium dividing with the plasmid copied",
    caption: "Cutting a gene into a plasmid",
  },
]);

const whyMicrobesDiagram = svgDiagram(
  "Why microorganisms are used",
  `<text class="title" x="450" y="30" text-anchor="middle">Why microorganisms are used</text>
    ${box(300, 44, 300, 40, "Microbial factories", "main")}
    ${labelledRows(
      [
        ["Fast growth", "they reproduce in minutes, not years"],
        ["Simple to keep", "they grow on cheap nutrient media"],
        ["Make useful products", "their respiration and enzymes yield the product"],
        ["Can be engineered", "their genes can be changed to make a product"],
        ["Few welfare issues", "raising microbes raises no animal-welfare objection"],
      ],
      70,
      116,
      38,
    )}`,
  900,
  300,
);

const breadYoghurtDiagram = svgDiagram(
  "Two microorganisms, two foods",
  `<text class="title" x="450" y="34" text-anchor="middle">Two microorganisms, two foods</text>
    ${tileRow(
      [
        {
          title: "Bread \u2014 yeast",
          body: "a fungus respires\nwithout oxygen and\nreleases CO\u2082 gas that\nraises the dough",
          cls: "main",
        },
        {
          title: "Yoghurt \u2014 Lactobacillus",
          body: "a bacterium turns\nlactose into lactic\nacid, which sets the\nmilk and tastes sour",
          cls: "blue",
        },
      ],
      64,
      { h: 195 },
    )}`,
  900,
  285,
);

const insulinDiagram = svgDiagram(
  "Making human insulin in a bacterium",
  `<text class="title" x="450" y="34" text-anchor="middle">Making human insulin in a bacterium</text>
    ${tileRow(
      [
        {
          title: "Step 1",
          body: "a restriction enzyme\ncuts the human\ninsulin gene out",
          cls: "blue",
        },
        { title: "Step 2", body: "the same enzyme\nopens a bacterial\nplasmid", cls: "purple" },
        {
          title: "Step 3",
          body: "DNA ligase seals\nthe gene in \u2014 this\nis recombinant DNA",
          cls: "gold",
        },
        {
          title: "Step 4",
          body: "the plasmid enters\nE. coli, which then\nmakes human insulin",
          cls: "main",
        },
      ],
      64,
      { h: 180 },
    )}`,
  900,
  270,
);

const chapter: Chapter = {
  number: 21,
  title: "Biotechnology and Genetic Modification",
  intro:
    "Biotechnology is the use of living organisms and their enzymes to make useful products, and humans have practised it for thousands of years through bread, yoghurt and brewing.\n\nThis chapter moves from those traditional uses, through industrial products such as antibiotics and mycoprotein, to modern genetic modification \u2014 the transfer of a gene from one organism to another.\n\nIt ends with the insulin-producing bacterium, genetically modified crop plants, and the arguments for and against the technology.",
  subheadings: [
    {
      title: "What Is Biotechnology? The Uses of Microorganisms",
      body: `### Living Organisms at Work\n\n**Biotechnology** is the use of living organisms, or the enzymes taken from them, to manufacture useful products or to bring about a desired change.\n\nMost of it relies on **microorganisms** \u2014 bacteria and fungi \u2014 because they can be grown in huge numbers and can be made to carry out specific chemical reactions.\n\n${whyMicrobesDiagram}\n\n### Enzymes Do the Manufacturing\n\nEvery product in this chapter is made by enzymes inside a microorganism.\n\nControlling the organism's conditions \u2014 food, oxygen, temperature and pH \u2014 is therefore the same as controlling the rate of the reaction that forms the product.\n\n### Old and New Side by Side\n\nTraditional processes used organisms exactly as nature left them; modern processes alter the organism's genes first.\n\nThat is why the same style of vessel can culture yeast for a loaf and an engineered bacterium for human insulin.`,
      figure: biotechArt,
      groups: [
        {
          subTitle: "Traditional and Modern Uses",
          bullets: [
            "**Traditional biotechnology** uses microorganisms as they are: yeast for bread and for alcoholic drinks such as beer and wine, and bacteria for yoghurt and cheese.",
            "These processes depend on **fermentation** and were known long before cells could be seen.",
            "**Modern biotechnology** changes the microorganism itself \u2014 genes are transferred so the organism makes a product it never made before, such as a human protein produced in a bacterium.",
            "**Fermenters** (bioreactors) are the equipment of industrial biotechnology.",
            "Sterile, controlled vessels in which a microorganism is grown on a nutrient supply at the right temperature and pH to produce a product on a large scale.",
            "**Aerobic or anaerobic:** a process run for a fermentation product such as ethanol works without oxygen, while one run for the organism's biomass or an oxygen-linked product works with air pumped in.",
            "**Scale transfers simply:** a microorganism cultured in a laboratory flask behaves the same way in a ten-thousand-litre fermenter, so recipes developed on a bench become factory production.",
          ],
        },
        {
          subTitle: "Products Made with Microorganisms",
          bullets: [
            "**Food:** bread, yoghurt, cheese and mycoprotein.",
            "**Drinks:** beer and wine by alcoholic fermentation.",
            "**Medicines:** antibiotics such as penicillin, and, through genetic modification, human insulin and vaccines.",
            "**Enzymes and fuels:** detergents, bioethanol and biogas.",
            "**Organic acids and solvents:** citric acid for foods and drinks, and industrial alcohols, are made by fungal or bacterial fermentation.",
            "**Biofortified and rebuilt diets:** fermentation of plant extracts supplies protein flavours and nutrients to bulk out staple foods.",
            "**Soil and waste:** nitrogen-fixing bacteria supply legumes with fertiliser-free nitrogen, and other cultures break down farm and domestic waste into useful material.",
          ],
        },
      ],
      examinerTips: [
        "Define biotechnology as 'the use of living organisms or their enzymes to make useful products'. Both the organism and the useful product must appear in the definition.",
        "Distinguish traditional from modern use when asked: traditional uses the organism as it is (fermentation), modern alters its genes (genetic modification).",
        "Read the question's list frame: 'two uses of microorganisms' expects two different categories such as food and medicine, not two foods from the same category.",
        "Learn one named organism per use \u2014 yeast for bread and bioethanol, _Lactobacillus_ for yoghurt, _Penicillium_ for penicillin, _Fusarium_ for mycoprotein \u2014 because genus names are often required marks.",
      ],
      commonMistakes: [
        "Calling only the genetically modified work 'biotechnology'. Bread-making and brewing are biotechnology too.",
        "Naming plants or animals as the organisms used in industrial biotechnology; the processes here rely on microorganisms, mainly bacteria and fungi.",
        "Confusing fermentation with general respiration. For these processes, describe anaerobic respiration in yeast giving ethanol and carbon dioxide.",
        "Claiming that every biotechnological process involves genetic modification. Bread, yoghurt and penicillin use unmodified organisms.",
      ],
      recap: [
        "Define biotechnology. [2]",
        "State three products made using microorganisms. [3]",
        "Explain why microorganisms are widely used in biotechnology. Give two reasons. [4]",
        "Distinguish traditional from modern biotechnology and give one example of each. [3]",
      ],
    },
    {
      title: "Microorganisms in Food Production: Bread and Yoghurt",
      body: `### Fermentation on the Plate\nTwo everyday foods show how the metabolism of microorganisms is turned into food. In both cases the useful change is the product of the organism's respiration.\n\n### Respiration Is the Engine\n\nBoth processes are anaerobic fermentations run at warm temperatures: yeast ferments glucose to ethanol and carbon dioxide, and _Lactobacillus_ ferments the milk sugar lactose to lactic acid.\n\nThe food is simply the harvest of the microbe's respiration.\n\n### Conditions Decide Success\nToo hot and the microorganism is killed or its enzymes denatured; too cold and it works too slowly to rise the dough or set the yoghurt before spoilage organisms take over.`,
      groups: [
        {
          subTitle: "Bread \u2014 Yeast Respiration",
          bullets: [
            "**Yeast**, a single-celled fungus, is mixed into dough with flour, water and sugar.",
            "Yeast respires; where oxygen is short it ferments the sugar (glucose) to **carbon dioxide and ethanol**.",
            "The **carbon dioxide** cannot escape and forms bubbles that are trapped in the elastic gluten network, so the dough **rises** and becomes light.",
            "During baking the heat sets the structure, kills the yeast, and drives off the ethanol, leaving the gas bubbles as the holes in the loaf.",
            "The initial aerobic respiration of yeast also produces carbon dioxide and helps the dough rise, but it is the carbon dioxide, from either route, that leavens the bread.",
            "**Sugar is the substrate:** sugars from the flour, or added sugar, feed the fermentation; a dough with no fermentable sugar stays flat however much yeast is used.",
            "**Kneading sets the trap:** kneading develops elastic gluten that holds the carbon dioxide bubbles evenly, giving the loaf a light, uniform crumb.",
          ],
        },
        {
          subTitle: "Yoghurt \u2014 Lactobacillus and Lactic Acid",
          bullets: [
            "Milk is first **boiled** to kill unwanted microorganisms, then **cooled** to a warm temperature that the added bacteria can survive.",
            "A **starter** containing the bacterium **_Lactobacillus_** is added, and the milk is incubated warm.",
            "_Lactobacillus_ ferments the milk sugar **lactose** to **lactic acid**.",
            "The lactic acid lowers the pH, which causes the milk protein to coagulate and set into the thick texture of yoghurt and gives it the characteristic sour taste.",
            "The acidity also discourages the growth of other, harmful bacteria, so the yoghurt keeps.",
            "**Warm incubation:** containers are held at the optimum for the starter, near body temperature; much cooler and the yoghurt sets too slowly to be safe.",
            "**Contamination control:** boiling, clean equipment and the falling pH together stop spoilage bacteria from outcompeting the starter culture.",
          ],
        },
      ],
      figure: breadYoghurtDiagram + "\n\n" + foodBiotechArt,
      examinerTips: [
        "For bread, name the gas and its role: carbon dioxide is released by yeast and expands the dough. Do not say the yeast 'makes the bread rise by heating it'.",
        "For yoghurt, always name **lactic acid** as the product and lactose as the sugar it is made from; 'acid' alone is too vague for the mark.",
        "When asked why milk is boiled first, say it is to **kill other microorganisms** so they do not spoil the yoghurt, and note the cooling step before the bacteria are added so the starter is not killed.",
        "If a question compares the two foods, organise your answer by organism, substrate, product and conditions \u2014 that structure guarantees a point on each side.",
      ],
      commonMistakes: [
        "Confusing the organisms: yeast (a fungus) makes bread, _Lactobacillus_ (a bacterium) makes yoghurt. Swapping them loses the marks.",
        "Saying ethanol raises the bread. The rising is the **carbon dioxide**; the ethanol is the other product and is mostly evaporated during baking.",
        "Claiming the bacteria in yoghurt produce carbon dioxide to set it. Setting is due to **lactic acid** lowering the pH.",
        "Attributing the rise of dough to the yeast multiplying. The bubbles are carbon dioxide released by fermentation of the dough's sugars, not growth itself.",
      ],
      recap: [
        "Name the microorganism used to make bread and the one used to make yoghurt. [2]",
        "Explain how yeast causes bread dough to rise. [4]",
        "Describe the role of _Lactobacillus_ in making yoghurt. [4]",
        "State why the milk is boiled and then cooled before the yoghurt bacteria are added. [2]",
      ],
    },
    {
      title: "Biotechnology in Industry: Antibiotics, Mycoprotein and Enzymes",
      body: `### Growing Products in a Fermenter\nIndustrial biotechnology grows microorganisms in large, sterile fermenters that supply nutrients, warmth and oxygen and keep conditions at the optimum, so a useful product can be made continuously and harvested.\n\n### Inside the Fermenter\n\nA fermenter holds a sterile nutrient broth with the microorganism, an agitator to mix it, air pipes supplying oxygen, cooling to remove waste heat, and probes keeping temperature and pH at the optimum.\n\nSterility is essential because any contaminant would compete for the nutrients or spoil the product.\n\n### Why Industry Pays for Control\n\nWild microbial growth is unpredictable.\n\nSupplying food, oxygen and constant conditions keeps the culture working at its maximum rate of production, so the quantity and quality of the product are reliable.`,
      groups: [
        {
          bullets: [
            "**Antibiotics (penicillin):** the mould **_Penicillium_** is grown in a fermenter and produces penicillin, which is extracted and used to treat bacterial infections. Antibiotics kill or inhibit bacteria but do **not** work against viruses.",
            "**Mycoprotein:** the fungus **_Fusarium_** is grown aerobically on a sugar (glucose) food source, often from maize starch, in a fermenter.",
            "Its protein-rich mycelium is harvested and processed into meat-substitute foods, providing protein with little fat.",
            "**Enzymes in detergents:** microorganisms are cultured to produce enzymes such as **protease** (breaks down protein stains) and **lipase** (breaks down fat and grease).",
            "These are added to washing powders so stains are digested even at low temperatures, saving energy.",
            "**Fermentation to fuels:** anaerobic fermentation by yeast produces **ethanol** (bioethanol fuel), and anaerobic digestion of plant and animal waste by bacteria produces **biogas (methane)** as a renewable fuel.",
            "**Antibiotic discipline:** antibiotics must be purified away from the culture medium and used only when needed, because overuse selects resistant bacteria.",
            "**Air and mixing:** sterilised air is bubbled through and the stirrer keeps organisms and nutrients evenly suspended, so no part of the vessel runs short of oxygen or food.",
            "**Harvesting:** the broth is filtered or centrifuged and the product is extracted and purified; for medicines the purification must remove every contaminant before use.",
            "**Continuous conditions:** nutrient solution, temperature and pH are held steady so the culture stays in its productive phase instead of starving and dying off.",
          ],
        },
        {
          subTitle: "Waste Treatment and Biofuels",
          bullets: [
            "**Sewage treatment stages:** screens and sedimentation tanks remove solids, aerobic bacteria in trickling beds oxidise the remaining dissolved organic matter, and the settled sludge is digested anaerobically.",
            "**Why treat sewage:** removing the organic matter before discharge stops the river's bacteria from multiplying and stripping the water of its dissolved oxygen.",
            "**Biogas digesters:** anaerobic bacteria ferment farm and sewage waste to methane, which is burned as a renewable fuel, leaving a mineral-rich residue for fields.",
            "**Bioethanol:** yeast ferments sugars from crops or plant waste, and the ethanol is blended with petrol as a transport fuel made from recently fixed carbon.",
          ],
        },
      ],
      examinerTips: [
        "Name the correct organism for each product: _Penicillium_ for penicillin and _Fusarium_ for mycoprotein. Examiners frequently require the genus.",
        "For enzymes in detergents, match the enzyme to the stain \u2014 protease for protein, lipase for fat \u2014 and add the benefit: they let washing be done at a lower temperature, which saves fuel.",
        "A common two-mark question is 'why use a fermenter?'. Answer with two controlled conditions, such as **temperature** and **pH**, kept at the optimum for the microorganism.",
        "'Why must a fermenter be sterile?' splits into two marks: contaminants would consume the nutrients and cut the yield, and they may destroy the culture or poison the product.",
      ],
      commonMistakes: [
        "Saying antibiotics kill viruses. They act on bacteria only.",
        "Describing mycoprotein as a plant protein or as animal meat. It is a fungal protein grown in a fermenter and used as a meat substitute.",
        "Naming chlorophyll instead of a microorganism as the source of an industrial enzyme.",
        "Confusing biogas with bioethanol: methane is made by anaerobic bacteria digesting waste, while ethanol is made by yeast fermenting sugars.",
      ],
      recap: [
        "Name the microorganism used to produce penicillin and the microorganism used to produce mycoprotein. [2]",
        "Describe how mycoprotein is produced on an industrial scale. [4]",
        "State two conditions that a fermenter controls for the microorganism. [2]",
        "Explain why protease and lipase are added to biological washing powders. [3]",
      ],
    },
    {
      title: "Genetic Modification: Transferring the Human Insulin Gene into Bacteria",
      body: `### Genetic Modification and the Insulin Gene\n\n**Genetic modification (GM)**, or **genetic engineering**, is the **transfer of a gene from one organism into the DNA of another organism**, so that the receiving organism \u2014 now called **transgenic** \u2014 produces the characteristic coded for by that gene.\n\nIt works because the **genetic code is universal**: a human gene read by a bacterium is read in exactly the same way and codes for the same amino acid sequence.\n\nThis lets bacteria manufacture **human insulin**, replacing the insulin formerly extracted from animal pancreases and reducing the allergic reactions it caused.\n\n### Three Tools\nThe whole transfer rests on three tools:\n\n### Three Tools\nA **restriction enzyme** that cuts DNA at a particular base sequence, a **plasmid** that carries the gene into the host as a vector, and **DNA ligase** that seals the joined molecule.\n\n### Why the Recipe Travels\n\nOnce the gene is inside the plasmid it is copied every time the bacterium divides.\n\nA single engineered cell therefore becomes a culture of millions of cells, each one making the same human protein.`,
      groups: [
        {
          subTitle: "The Steps of the Transfer",
          bullets: [
            "**1. Identify and cut out the gene:** the human insulin gene is located in the DNA of a human cell and is cut out using a **restriction enzyme**, which leaves short unpaired 'sticky ends'.",
            "**2. Prepare the vector:** a small ring of DNA called a **plasmid** is removed from a bacterium (such as _E.",
            "Coli_) and opened with the **same restriction enzyme**, so its sticky ends match those of the human gene.",
            "**3. Join the DNA:** the human gene is inserted into the plasmid and sealed by the enzyme **DNA ligase**, forming **recombinant DNA** \u2014 a plasmid carrying the human insulin gene.",
            "**4. Insert into the host:** the recombinant plasmid is placed back into a bacterium, which becomes transgenic.",
            "**5. Clone and harvest:** the transgenic bacterium is grown in a fermenter with a glucose and amino-acid supply.",
            "Because it reproduces very quickly it makes many identical cells, each copying the gene and producing human insulin, which is then extracted and purified.",
            "**Sticky ends pair up:** the matching ends left by the restriction enzyme allow the human gene to slot into the opened plasmid by base pairing before ligase seals the backbone.",
            "**Selection of successes:** plasmids carry a marker gene, often antibiotic resistance, so only the bacteria that really took up the recombinant plasmid survive the selective medium and can be grown on.",
          ],
        },
        {
          subTitle: "Why Bacteria Are the Host of Choice",
          bullets: [
            "They **reproduce rapidly**, so a large population of identical cells (a clone) is made in a short time.",
            "Their single, simple chromosome makes them easy to modify, and they take up plasmids readily.",
            "They **read the human gene using the same universal genetic code**, so they build the correct human insulin protein.",
            "They are cheap to grow on simple nutrient media in a fermenter.",
            "**Plasmids replicate independently:** the recombinant plasmid copies itself as the bacterium divides, so every daughter cell inherits the insulin gene.",
            "**A steady supply:** one running fermenter delivers insulin continuously, where the old route needed enormous numbers of pig or cow pancreases.",
            "**Safer for patients:** bacterial insulin is identical to the human hormone, so it triggered fewer of the allergic reactions that animal insulin caused.",
          ],
        },
      ],
      figure: insulinDiagram + "\n\n" + plasmidArt,
      examinerTips: [
        "Use the exact tool names: **restriction enzyme** cuts, **DNA ligase** joins, **plasmid** is the vector, and the product is **recombinant DNA**. Vague verbs such as 'cut' and 'stick' alone score less.",
        "Order matters. A five- or six-mark 'describe' answer must put the gene being cut out before it is joined to the plasmid, and the insertion into the bacterium before it is grown in the fermenter.",
        "When asked why the bacterium can make human insulin, say that **the genetic code is the same in all organisms**, so the human gene is read correctly and the same amino acids are assembled.",
        "Note the detail that earns the logic mark: the **same** restriction enzyme must open the plasmid and cut the gene, otherwise the sticky ends will not match.",
      ],
      commonMistakes: [
        "Saying the insulin gene is taken from the bacterium. The gene comes from **human** DNA; the bacterium is only the host that reads it.",
        "Naming DNA ligase as the enzyme that cuts, or a restriction enzyme as the one that joins. Restriction enzymes cut; ligase joins.",
        "Claiming the transgenic bacteria are used as food, or that the bacterium itself becomes human. Only the gene and the insulin product are human.",
        "Saying the plasmid 'becomes part of the bacterial chromosome'. In this procedure it stays a separate ring that replicates independently.",
      ],
      recap: [
        "Explain what is meant by genetic modification. [2]",
        "Describe, in order, how the human insulin gene is transferred into a bacterium. [6]",
        "State the names of the two enzymes used in gene transfer and what each one does. [4]",
        "Explain why a bacterium is able to produce a human protein. [2]",
      ],
    },
    {
      title: "Genetically Modified Crop Plants",
      body: `### Crops Engineered for a Purpose\nJust as bacteria can be given a human gene, a useful gene can be inserted into a crop plant to give it a new characteristic that breeding alone could not produce quickly or at all.\n\n| GM crop | Gene added | Advantage gained |\n| --- | --- | --- |\n| Bt cotton | _Bacillus thuringiensis_ toxin gene | insect larvae that feed on it are killed |\n| Bt maize | same Bt toxin gene | resistance to boring insects |\n| Herbicide-resistant soya | gene for weedkiller tolerance | weeds are killed while the crop survives |\n| Golden rice | beta-carotene genes | grain carries a vitamin A precursor |\n\n### Getting the Gene into a Plant\n\nThe usual route uses the soil bacterium _Agrobacterium tumefaciens_, whose plasmid naturally inserts DNA into plant cells.\n\nThe useful gene replaces the tumour genes in that plasmid, the bacterium infects the plant cells, and whole plants are regenerated from the modified cells by tissue culture.\n\n### What the Gene Buys the Farmer\nInsects and weeds account for a large share of every harvest a farmer loses. A gene that removes one of those losses raises yield without taking extra land into use.`,
      groups: [
        {
          bullets: [
            "**Insect resistance (Bt crops):** a gene from the bacterium **_Bacillus thuringiensis_** is put into crops such as cotton or maize so the plant produces a protein (Bt toxin) that kills the insect larvae that feed on it, reducing the amount of pesticide a farmer must spray.",
            "**Herbicide tolerance:** a gene that makes the crop resistant to a particular weedkiller is added, so the farmer can spray the field to kill weeds without harming the crop.",
            "**Improved nutrition (golden rice):** rice engineered with genes for the production of beta-carotene, which the body converts to vitamin A, to help prevent vitamin A deficiency in populations that rely on rice.",
            "**Longer shelf life and stress tolerance:** genes are used to delay fruit ripening so less food is wasted, and to try to give crops tolerance of drought or salty soils.",
            "**How Bt works:** the toxin activates only in the alkaline gut of a caterpillar that eats the plant, which is why it barely affects animals with acid guts, including humans.",
            "**Spraying instead of ploughing:** a herbicide-tolerant crop lets one spray kill the whole weed population, saving the labour and the soil disturbance of mechanical weeding.",
            "**Why vitamin A matters:** deficiency damages eyesight and raises child mortality in rice-dependent populations; golden rice delivers the beta-carotene their diet lacks.",
            "**Clean planting stock:** tissue culture of improved or modified cells produces disease-free cuttings for crops such as banana and potato.",
          ],
        },
        {
          subTitle: "Limits and Wider Uses",
          bullets: [
            "**Resistance management:** farmers sow non-Bt 'refuge' strips so insects that never met the toxin survive and dilute any resistance in the pest population.",
            "**Superweed selection:** repeated use of the same herbicide on tolerant crops weeds out the susceptible individuals and leaves resistant 'superweeds' behind.",
            "**Gene sources vary:** the added genes come from bacteria (Bt toxin), other plants (beta-carotene) or sometimes viruses, and each source is checked for safety before use.",
            "**Beyond the plate:** the same engineering produces GM microorganisms for insulin and vaccines, and research crops designed for fibre and biofuel feedstocks.",
          ],
        },
      ],
      examinerTips: [
        "Tie each crop to its gene source and its advantage in one sentence: 'Bt cotton carries a bacterial gene that makes an insecticide, so fewer pesticide sprays are needed'.",
        "Golden rice questions test the link between beta-carotene and vitamin A, so state that the body converts beta-carotene into vitamin A.",
        "'Outline how a gene is introduced into a crop' is answered in sequence.",
        "Isolate the gene, insert it into the _Agrobacterium_ plasmid, let the bacterium infect plant cells, then regenerate whole plants by tissue culture.",
        "For Bt questions the two usual marks are the plant making its own insecticide protein and the farmer therefore spraying less; give both halves.",
      ],
      commonMistakes: [
        "Saying Bt cotton 'kills all insects'. It affects the larvae that eat the plant, especially the target pests, not every insect that visits it.",
        "Confusing herbicide-resistant crops with pesticide-resistant ones. The tolerance is to a **weedkiller (herbicide)**, not to an insecticide.",
        "Claiming GM crops produce their own fertiliser. The changes affect pests, weeds and nutrition, not the plant's mineral supply.",
        "Writing that the plant 'becomes' _Bacillus thuringiensis_. A Bt crop carries one bacterial gene and remains cotton or maize.",
      ],
      recap: [
        "Describe one example of a genetically modified crop plant and the advantage it gives. [3]",
        "Explain why Bt cotton may reduce the amount of pesticide a farmer uses. [3]",
        "State the nutritional benefit of golden rice. [2]",
        "Outline how a new gene is introduced into a crop plant. [4]",
      ],
    },
    {
      title: "Arguments For and Against Genetic Modification",
      body: `### Weighing the Case\n\nGenetic modification divides opinion.\n\nStrong points exist on both sides, and exam questions ask you to present the benefits, the risks and the ethical objections, often linking them to the growing need for food.\n\n### The Frame Is Food Security\nMost questions ask you to weigh genetic modification against a growing human population: more food from the land already farmed, against risks to health, ecosystems and the independence of farmers.\n\n### Rules Are Part of the Argument\nMany countries test, approve and label GM food before it is sold. The debate therefore also covers the consumer's right to choose and whether small farmers can afford patented seed.`,
      groups: [
        {
          subTitle: "Arguments For",
          bullets: [
            "**More food, more reliably:** pest-resistant and higher-yielding crops can help feed a growing population.",
            "**Less pesticide sprayed:** Bt crops make their own insecticide, so fewer chemical sprays pass into the environment.",
            "**Better weed control with less soil disturbance:** herbicide-tolerant crops allow weeds to be killed by spraying instead of by ploughing, which reduces erosion.",
            "**Improved nutrition:** crops such as golden rice can deliver a vitamin or other nutrient that a poor diet lacks.",
            "**Hardier crops:** genes may give tolerance of drought or salinity, opening land that could not be farmed before.",
            "**Faster than breeding:** a single useful characteristic can be added in one generation rather than over many years of selective breeding.",
            "**Medicines ride with the technology:** the same methods produce insulin, vaccines and industrial enzymes, so the technique earns its place in medicine as well as farming.",
            "**Land sparing:** higher yield per hectare can reduce the pressure to clear forest for new farmland, linking GM crops to the previous chapter's deforestation argument.",
          ],
        },
        {
          subTitle: "Arguments Against",
          bullets: [
            "**Unknown long-term effects:** the health consequences of eating GM food over many years are not fully established, and a new protein could act as an allergen.",
            "**Harm to other species:** a pesticide made by the crop could damage non-target insects, including pollinators and natural predators.",
            "**Gene flow to wild relatives:** genes such as herbicide tolerance could cross into weeds, producing resistant 'superweeds'.",
            "**Threats to biodiversity:** large GM monocultures reduce habitat and the variety of species that a mixed farm supports.",
            "**Economic and ethical concerns:** expensive patented seed can place control of the food supply in the hands of a few companies and disadvantage small farmers, and many people object on ethical or religious grounds to genes being moved across species.",
            "**Loss of local varieties:** reliance on a few engineered lines can displace traditional varieties and the genes they hold for future breeding.",
            "**Cross-contamination:** pollen from a GM field can fertilise a neighbouring crop, drawing ordinary farmers into patent disputes or closing off export markets.",
          ],
        },
      ],
      examinerTips: [
        "For a 'discuss' or 'evaluate' question, give **one point for and one point against** rather than a one-sided answer; the marks are split between the two sides.",
        "Judge against the context you are given \u2014 a food-supply question rewards benefits, an environmental question rewards the risks \u2014 and end with a supported conclusion if one is asked for.",
        "Keep the argument biological: link each point to a real effect such as yield, pesticide use or biodiversity, not to vague opinion.",
        "A strong conclusion weighs size and reversibility, e.g. that yield gains justify adoption only where pest resistance can be managed with refuge crops.",
      ],
      commonMistakes: [
        "Writing personal feelings ('GM is just wrong') without a reason. An argument needs a mechanism, such as a possible allergen or harm to non-target insects.",
        "Repeating one idea twice to pad out both sides. The two sides must be genuinely different points.",
        "Claiming GM food definitely causes disease, or definitely cannot; the fair statement is that long-term effects are not yet fully established.",
        "Attacking points that are not about modification, such as fertiliser use or taste. The biological arguments concern allergens, gene flow and effects on other species.",
      ],
      recap: [
        "Give two arguments in favour of genetic modification. [2]",
        "Give two arguments against genetic modification. [2]",
        "Discuss whether genetic modification should be used to increase food production. Use the examples you know. [6]",
        "Explain one way in which a GM crop could affect an ecosystem negatively. [3]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_21: Chapter = chapter;
