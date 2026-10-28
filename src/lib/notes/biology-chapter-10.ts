import type { Chapter } from "./types";
import { labelledRows, box, svgDiagram, tileRow } from "./diagram-kit";

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

const defencesArt = artPanel([
  {
    src: "ch10-phagocytosis.webp",
    alt: "A white blood cell engulfing bacteria",
    caption: "A white blood cell engulfing bacteria",
  },
  {
    src: "ch10-skin-barrier.webp",
    alt: "Cross section of skin showing hair, sebaceous gland, sweat gland and the fat layer",
    caption: "Skin: the barrier that keeps pathogens out",
  },
]);

const antibodyArt = artPanel([
  {
    src: "ch10-antibodies.webp",
    alt: "Y-shaped antibodies linking several bacteria into a clump",
    caption: "Antibodies clumping pathogens together",
  },
]);

const malariaArt = artPanel([
  {
    src: "ch10-mosquito-malaria.webp",
    alt: "A mosquito passing the malaria parasite",
    caption: "A mosquito passing the malaria parasite",
  },
]);

/** Five kinds of pathogen, one tile each, with a named disease in the last line. */
const pathogenTypesDiagram = svgDiagram(
  "Five kinds of pathogen you must be able to name",
  `<text class="title" x="450" y="34" text-anchor="middle">Five kinds of pathogen</text>
  ${tileRow(
    [
      {
        title: "Bacteria",
        cls: "main",
        body: "single cell\nlives, divides\nsome make toxin\ncholera, TB",
      },
      {
        title: "Virus",
        cls: "blue",
        body: "not a cell\ninvades living\ntissue, replicates\nHIV, influenza",
      },
      {
        title: "Fungus",
        cls: "gold",
        body: "made of cells\nhyphae or yeast\ngrows on surface\nrose black spot",
      },
      {
        title: "Protoctist",
        cls: "purple",
        body: "one cell\nmoves by cilia\nor a flagellum\nPlasmodium",
      },
      {
        title: "Insect",
        cls: "pink",
        body: "an animal\na vector\ncarries pathogen\nmosquito, tsetse",
      },
    ],
    58,
    { h: 178 },
  )}
  <text class="small" x="450" y="262" text-anchor="middle">Bacteria, viruses, fungi, protoctists and insects each cause disease by a different route.</text>`,
  900,
  300,
);

/** The malaria cycle drawn as a two-box loop, with the key vocabulary below. */
const malariaCycleDiagram = svgDiagram(
  "Malaria cycles between human and mosquito",
  `<text class="title" x="450" y="34" text-anchor="middle">Malaria cycles between human and mosquito</text>
  ${box(40, 86, 240, 70, "Human host", "blue")}
  ${box(620, 86, 240, 70, "Mosquito vector", "pink")}
  <path class="arrow" d="M300 104h300"/>
  <text class="small" x="450" y="96" text-anchor="middle">gametocytes taken up in a blood meal</text>
  <path class="arrow" d="M600 150h-300"/>
  <text class="small" x="450" y="176" text-anchor="middle">sporozoites injected in saliva when it bites</text>
  ${labelledRows(
    [
      ["Plasmodium", "the protoctist parasite"],
      ["Anopheles", "the female mosquito vector"],
      ["Liver stage", "parasite multiplies, no symptoms"],
      ["Blood stage", "red cells burst in fever cycles"],
    ],
    40,
    232,
    32,
  )}
  <text class="small" x="450" y="360" text-anchor="middle">Only the female Anopheles mosquito transmits the disease; the Plasmodium parasite causes it.</text>`,
  900,
  380,
);

/** Phagocytosis as a four-step strip: find, engulf, digest, clear. */
const phagocytosisDiagram = svgDiagram(
  "Phagocytosis in four steps",
  `<text class="title" x="450" y="34" text-anchor="middle">How a phagocyte destroys a pathogen</text>
  ${tileRow(
    [
      {
        title: "1. Detection",
        cls: "panel",
        body: "moves toward the\ngerm, drawn by\nchemicals in the\ntissue fluid",
      },
      {
        title: "2. Engulfing",
        cls: "blue",
        body: "membrane flows\nround the pathogen\nand closes it in a\nvacuole",
      },
      {
        title: "3. Digesting",
        cls: "gold",
        body: "lysosomes fuse\nenzymes break the\ngerm down inside\nthe food vacuole",
      },
      {
        title: "4. Clearing",
        cls: "main",
        body: "fragments absorbed\nsome antigen shown\non the surface to\nalert lymphocytes",
      },
    ],
    58,
    { h: 178 },
  )}
  <text class="small" x="450" y="262" text-anchor="middle">This second line of defence is non-specific: the same cell engulfs any pathogen, whatever its antigen.</text>`,
  900,
  300,
);

/** Primary versus secondary response, showing the role of the memory cell. */
const immuneResponseDiagram = svgDiagram(
  "Primary and secondary immune responses",
  `<text class="title" x="450" y="34" text-anchor="middle">One exposure, then a faster second response</text>
  ${tileRow(
    [
      {
        title: "First infection",
        cls: "blue",
        body: "antigen shown to\nlymphocytes\nslow primary rise\nin antibody level",
      },
      {
        title: "Memory cells",
        cls: "purple",
        body: "a clone survives\nin blood and lymph\nfor years after the\ninfection is cleared",
      },
      {
        title: "Second infection",
        cls: "main",
        body: "memory cells act\nfaster and stronger\nmore antibody,\nno symptoms",
      },
    ],
    58,
    { h: 178 },
  )}
  <text class="small" x="450" y="262" text-anchor="middle">Vaccination works by creating the memory cells safely, so the real pathogen meets the secondary response.</text>`,
  900,
  300,
);

const chapterTen: Chapter = {
  number: 10,
  title: "Diseases and Immunity",
  intro: `A pathogen that enters the body and multiplies may or may not make the host ill, and the whole of this chapter hangs on that distinction.\n\nFirst you learn what the five kinds of pathogen are and the named diseases each one causes.\n\nThen you meet the body's answer:\n\nThree lines of defence, running from skin and stomach acid, through phagocytes that engulf anything that gets in, to lymphocytes that mount a specific attack and remember it.\n\nVaccination exploits that memory, and the same knowledge explains why antibiotics cure a bacterial infection but do nothing to a virus.\n\nThe chapter closes on the human cost, from lifestyle risk factors to the way HIV/AIDS and malaria burden whole societies.`,
  subheadings: [
    {
      title: "What Causes Disease",
      body: `### Disease, infection and pathogen are three different words
A **pathogen** is any microorganism or parasite that can cause disease.\n\n**Infection** means it has entered, is present and is multiplying;\n\n**disease** is the damage that upsets normal function so symptoms appear.

> Infection is the pathogen multiplying; disease is the damage it does.`,
      figure: pathogenTypesDiagram,
      groups: [
        {
          subTitle: "The Five Pathogen Groups",
          bullets: [
            "**Bacteria** are single cells that can live and reproduce independently of a human cell; some damage tissue directly and others release a toxin.",
            "**Viruses** are not cells and cannot respire or feed; they invade a living host cell and hijack it to make copies, damaging the cell as they burst out.",
            "**Fungi** cause surface diseases of skin, nails and leaves; **protoctists** such as *Plasmodium* are single-celled parasites often carried by a vector.",
            "**Insects and other animals** usually cause disease indirectly, as **vectors** that transfer a pathogen from one host to another.",
            "A vector is the carrier and the pathogen is the organism that causes the illness, so the two words are never the same answer.",
            "Fungal pathogens spread by **spores**, as in rose black spot and athlete's foot.",
            "*Plasmodium*, a **protoctist**, is passed into the blood by the *Anopheles* mosquito.",
            "A virus can only replicate **inside a living host cell**; outside it is inactive.",
          ],
        },
        {
          subTitle: "How a Pathogen Produces the Signs of Illness",
          bullets: [
            "**Direct damage to cells** as bacteria multiply or as viruses burst their host cells.",
            "**Toxin production:** some bacteria release toxins that poison a particular organ, as the cholera bacterium poisons the gut lining.",
            "The body's own **defensive response** produces many symptoms, including fever, inflammation and extra mucus.",
            "The symptoms match the route of entry, so gut infections give diarrhoea and lung infections give coughing.",
            "**Fever** is a sign made by the host's own response, not by the pathogen directly.",
            "Extra **mucus** and coughing help flush pathogens from the airways.",
            "Tissue damage and toxin together account for most of the feeling of being unwell.",
          ],
        },
        {
          subTitle: "Key Terms the Mark Scheme Separates",
          bullets: [
            "**Symptoms** are what the patient feels, such as headache and nausea.",
            "**Signs** are what an observer measures, such as a raised temperature or a rash.",
            "**Communicable** disease passes from host to host; **non-communicable** disease does not.",
            "Type 2 diabetes and most cancers are **non-communicable**, arising from genes, diet or lifestyle.",
            "A **carrier** is infected but shows no symptoms, and can still pass the pathogen on.",
          ],
        },
      ],
      examinerTips: [
        "Distinguish infection (pathogen present and multiplying) from disease (function damaged); a definition question often wants exactly this pair.",
        "Use **symptoms** for what is felt and **signs** for what is measured, because examiners award these as separate marks.",
        "When asked to name the pathogen, give the type (bacterium, virus, fungus, protoctist) unless a species name is required.",
        "Give one **sign** and one **symptom** as two separate points when both are asked; each earns its own mark.",
      ],
      commonMistakes: [
        "Calling a vector a pathogen: a mosquito is a vector, while the *Plasmodium* it carries is the pathogen.",
        "Treating every infectious microorganism as a bacterium, especially describing a virus as 'a very small bacterium'.",
        "Naming fever as a disease, when fever is a sign produced by the body's own response.",
        "Saying malaria is caused by a virus or bacterium; its pathogen *Plasmodium* is a **protoctist**.",
      ],
      recap: [
        "Define the term pathogen and explain the difference between infection and disease. [3]",
        "State two ways a pathogen can make its host ill other than damaging cells directly. [2]",
        "Classify cholera, influenza and malaria by naming the type of pathogen that causes each. [3]",
        "Distinguish a sign from a symptom and give one example of each. [2]",
      ],
    },
    {
      title: "Bacterial and Viral Diseases",
      body: `### A spread of named examples
The syllabus expects you to attach the correct pathogen, host, route of transmission and symptom to each named disease, so learn them as a matched set. Bacterial and viral diseases differ most usefully in treatment: bacterial ones often respond to **antibiotics**, while viral ones do not.

**Bacterial diseases**

| Disease | Pathogen | Host | Route of transmission | Key symptoms |
| --- | --- | --- | --- | --- |
| Salmonella food poisoning | *Salmonella* bacterium | human | contaminated food, especially undercooked meat and eggs, or faecal contamination | fever, abdominal cramps, vomiting, diarrhoea |
| Cholera | *Vibrio cholerae* | human | water or food contaminated with faeces | profuse watery diarrhoea, vomiting, dehydration |
| Tuberculosis (TB) | *Mycobacterium tuberculosis* | human and cattle | airborne droplets from coughing and sneezing | lung damage, coughing, fever, weight loss |
| Gonorrhoea | *Neisseria gonorrhoeae* | human | sexual contact with an infected person | pain on urination, discharge, inflammation |

**Viral diseases**

| Disease | Pathogen | Host | Route of transmission | Key symptoms |
| --- | --- | --- | --- | --- |
| Influenza | influenza virus | human | droplets from coughs and sneezes, and contact with contaminated surfaces | fever, headache, muscle pain, cough, fatigue |
| HIV and AIDS | HIV virus | human | sexual contact, infected blood or needles, mother to child before birth or in breast milk | destroys helper T lymphocytes; the immune system fails and opportunistic infections appear |
| Tobacco mosaic virus (TMV) | TMV virus | tobacco and other plants | direct contact between plants through wounds, spread by hands, tools and insects | yellow mosaic mottling of leaves, stunted growth |
| Ebola virus disease | Ebola virus | human | contact with the body fluids of an infected person or infected animals | fever, severe weakness, internal and external bleeding |`,
      groups: [
        {
          subTitle: "Reading the Tables Correctly",
          bullets: [
            "**Cholera** spreads by the faecal-oral route: faeces from a patient reach another person's drinking water, usually where sewage treatment is poor.",
            "**TB** is airborne, so crowding and poor ventilation help it spread; it mainly damages the lungs but can spread to other organs.",
            "**HIV** attacks the immune system itself, and **AIDS** is the late stage in which the body can no longer fight organisms that are normally harmless.",
            "**TMV** is the required plant-virus example: it infects plants, not people, and is spread by contact through a wound rather than through the air.",
            "**Salmonella** is a bacterium passed in undercooked meat and eggs contaminated with faeces.",
            "**Gonorrhoea** is a bacterial sexually transmitted infection spread by sexual contact.",
            "**Ebola** spreads through direct contact with body fluids, not through the air.",
          ],
        },
        {
          subTitle: "Bacteria Against Viruses in Practice",
          bullets: [
            "Bacterial diseases are frequently treatable with **antibiotics**; viral diseases are not, because antibiotics act on bacterial structures that viruses lack.",
            "Bacteria can often live and reproduce outside body cells, whereas a virus cannot reproduce at all outside a living host cell.",
            "Some bacterial symptoms are caused by a **toxin**, as cholera toxin drives the water loss, while viral symptoms come mostly from destroyed host cells and the immune response.",
            "Antibiotics attack bacterial **cell walls** or **ribosomes**, structures a virus does not have.",
            "Viral illness is eased by **rest and fluids** and prevented mainly by **vaccines**.",
            "New **antibiotic-resistant** bacterial strains can defeat drugs that once worked.",
          ],
        },
      ],
      examinerTips: [
        "Match disease to pathogen type, host, route and symptom, and answer only the column the question actually names.",
        "Tie every control measure to the route: clean water for cholera, covering coughs for TB and influenza, safe sex and screened blood for HIV.",
        "Say 'AIDS is caused by HIV'; the virus is HIV and the disease is AIDS, and naming them interchangeably is a common slip.",
        "Name the **route of transmission** before giving a control, so the measure is clearly justified.",
      ],
      commonMistakes: [
        "Listing HIV or Ebola as a bacterial disease and offering antibiotics as the treatment.",
        "Saying TMV infects humans or is spread by an insect vector.",
        "Claiming that a person who looks healthy cannot pass on an infection, when carriers do exactly that.",
        "Saying antibiotics cure a viral cold or flu; they have no effect on viruses.",
      ],
      recap: [
        "Complete the entry for cholera by naming the type of pathogen, its host and its route of transmission. [3]",
        "Explain why antibiotics can treat tuberculosis but not influenza. [3]",
        "Describe how tobacco mosaic virus is transmitted and state one symptom it causes. [2]",
        "Explain why cholera spreads fastest where sewage treatment is poor. [3]",
      ],
    },
    {
      title: "Fungal, Protozoan and Insect Diseases",
      body: `### The remaining pathogens and the malaria cycle

| Disease | Pathogen type | Host | Vector or route | Main effect |
| --- | --- | --- | --- | --- |
| Malaria | protoctist, *Plasmodium* | human; the female *Anopheles* mosquito is the vector | the mosquito bite injects the parasite | fever and sweating in cycles as red cells burst |
| Rose black spot | fungus | rose plants | spores spread by wind, water and contact | black spots on leaves, leaves yellow and fall |
| Athlete's foot | fungus | human skin of the foot | damp shared surfaces and direct contact | itchy, cracked, scaly skin between the toes |
| Sleeping sickness | protoctist, *Trypanosoma* | human and cattle | the tsetse fly vector | fever, then drowsiness and coma if untreated |

Malaria is the model vector-borne disease: *Plasmodium* passes part of its cycle in the human liver and blood and part inside the mosquito that takes it up in a blood meal. Only the **female *Anopheles*** transmits it, so control must attack the mosquito as well as the parasite.`,
      figure: malariaCycleDiagram + "\n\n" + malariaArt,
      groups: [
        {
          subTitle: "Controlling Malaria",
          bullets: [
            "Take **antimalarial tablets** before, during and after a visit to an affected area so the parasite cannot establish itself.",
            "Use **insecticide-treated bed nets** and repellents to prevent bites, especially at dusk and night when *Anopheles* feeds.",
            "**Drain or spray** stagnant water to kill the larvae and break the mosquito's breeding cycle.",
            "Screen blood donors and treat patients early, so the gametocyte stage is never taken up by a feeding mosquito.",
            "**Insecticide** kills adult mosquitoes; draining water kills the **larvae**.",
            "Screened doors and windows cut bites while people sleep.",
            "Clearing **standing water** removes the breeding sites entirely.",
          ],
        },
        {
          subTitle: "Fungi and Their Hosts",
          bullets: [
            "Fungal diseases grow on or in a surface and spread by **spores**, as rose black spot and athlete's foot both show.",
            "Fungi are treated with **antifungal** medicines rather than antibiotics, because the type of pathogen decides the drug.",
            "A **vector** is an organism, usually an arthropod, that carries a pathogen between hosts; the tsetse fly and the *Anopheles* mosquito are the two named examples.",
            "**Rose black spot** is a plant fungus; **athlete's foot** is a fungus of human skin.",
            "*Trypanosoma*, a **protoctist**, causes sleeping sickness via the **tsetse fly**.",
            "Fungal spores move by wind, water or direct contact with a host.",
          ],
        },
      ],
      examinerTips: [
        "For malaria, always name *Plasmodium* as the pathogen and *Anopheles* as the vector separately, and say the mosquito transmits rather than causes the disease.",
        "When asked for a control measure, state which stage it interrupts: draining water stops breeding, nets stop bites, tablets kill the parasite in the blood.",
        "Tell the two fungal examples apart: rose black spot affects plants and athlete's foot affects human skin.",
        "For fungal disease, credit **spores** as the spread and **antifungal drugs** as the treatment.",
      ],
      commonMistakes: [
        "Saying the mosquito 'causes' malaria, when the parasite causes it and the mosquito only spreads it.",
        "Describing malaria as a viral or bacterial disease.",
        "Confusing the tsetse fly, which spreads sleeping sickness, with the *Anopheles* mosquito, which spreads malaria.",
        "Calling athlete's foot a bacterial infection; it is a fungus treated with **antifungal** drugs.",
      ],
      recap: [
        "Name the pathogen and the vector of malaria. [2]",
        "Describe two ways of controlling malaria that act on the mosquito rather than on the parasite. [4]",
        "State the type of pathogen that causes rose black spot and describe one symptom. [2]",
        "Explain why reducing the mosquito population controls malaria as well as treating patients. [3]",
      ],
    },
    {
      title: "Human Defences Against Pathogens",
      body: `### Three lines of defence
The body stops pathogens in three stages:\n\n**barriers**, then **non-specific phagocytes**, then a **specific lymphocyte response**.

> Barriers keep pathogens out, phagocytes eat anything that gets in, and lymphocytes remember the one they are built to fight.`,
      figure: phagocytosisDiagram + "\n\n" + defencesArt,
      groups: [
        {
          subTitle: "The Barriers and What Each One Does",
          bullets: [
            "**Skin:** a physical barrier that pathogens can cross only through a cut or a burn.",
            "**Mucus:** a sticky layer that traps particles and microbes on the lining surfaces.",
            "**Cilia:** hair-like structures that beat in a coordinated wave to move mucus and trapped bacteria out of the airways.",
            "**Lysozyme:** an enzyme in tears, saliva and mucus that breaks down bacterial cell walls.",
            "**Stomach acid:** hydrochloric acid that destroys bacteria and other pathogens swallowed with food and water.",
            "**Mucous membranes** line the airways, gut and urogenital tract.",
            "These barriers are **non-specific** and present before any infection.",
            "A cut or a burn is the usual way the **first line** is breached.",
          ],
        },
        {
          subTitle: "Phagocytosis in Words",
          bullets: [
            "A **phagocyte** moves through the tissue fluid towards the chemicals released by the pathogen or the damaged cells.",
            "Its **cell membrane** flows around the pathogen and engulfs it into a **vacuole** inside the cytoplasm.",
            "**Lysosomes** fuse with the vacuole and release digestive **enzymes** that break the pathogen down.",
            "The digested fragments are absorbed, and some antigen is displayed to alert **lymphocytes**, linking the second line to the third.",
            "This second line is **non-specific**: the same cell engulfs any pathogen.",
            "The injured region becomes **inflamed and warm**, part of this non-specific response.",
            "It works on **any** pathogen, with no need for prior exposure.",
          ],
        },
        {
          subTitle: "The Specific Response",
          bullets: [
            "**Antibodies** are proteins made by lymphocytes; each one is specific to a single antigen and clumps pathogens or marks them for phagocytes.",
            "**Antitoxins** are made against a bacterial toxin and neutralise it.",
            "**Memory cells** survive after the infection is over, so a second encounter is answered faster and stronger.",
            "This third line is precisely what a **vaccine** trains, which is the next section.",
            "Each lymphocyte clone fits **one antigen**, so the response is specific.",
            "The third line takes time to build up at the **first exposure**.",
            "**Antibodies** attack the pathogen; **antitoxins** neutralise its toxin.",
          ],
        },
      ],
      examinerTips: [
        "Name the structure and its action as a pair, for example 'cilia, which sweep mucus and trapped bacteria out of the trachea'.",
        "For phagocytosis use the words **engulf**, **vacuole**, **enzymes** and **digest**; a description that only says 'kills the germ' misses the method marks.",
        "Keep phagocytes (non-specific, second line) and lymphocytes (specific, third line, make antibodies) clearly apart.",
        "Label which **line of defence** (first, second or third) each structure belongs to; the label is often a separate mark.",
      ],
      commonMistakes: [
        "Saying antibodies are made by phagocytes, when antibodies are produced by **lymphocytes**.",
        "Calling lysozyme an antibody or a hormone, when it is an enzyme present in the body's secretions.",
        "Describing skin as a specific defence, when skin is non-specific and always present.",
        "Placing phagocytosis in the third line; phagocytes are the **non-specific second line**.",
      ],
      recap: [
        "Describe the role of skin, mucus, cilia and lysozyme in preventing infection. [4]",
        "Explain, in order, how a phagocyte deals with a bacterium that has entered a wound. [4]",
        "Name the cell that produces antibodies and give one other product of the specific response. [2]",
        "State which line of defence each of these belongs to: skin, phagocyte, lymphocyte. [3]",
      ],
    },
    {
      title: "Vaccination and Immunity",
      body: `### Vaccination and the faster second response
A **vaccine** contains a harmless form of a pathogen or its antigen, so the lymphocytes mount a **primary response** and form ==memory cells== without the person suffering the disease. On a later infection those cells drive a **secondary response** that is **faster, stronger and longer-lasting**.`,
      figure: immuneResponseDiagram + "\n\n" + antibodyArt,
      groups: [
        {
          subTitle: "Why Antibiotics Fail Against Viruses",
          bullets: [
            "**Antibiotics** are chemicals that kill bacteria or stop them growing, usually by attacking a structure a virus does not have, such as a cell wall or a bacterial ribosome.",
            "A **virus** has no cell wall, no ribosomes and no metabolism of its own, so there is no target for an antibiotic to act upon.",
            "Fungal cells also differ from animal cells, which is why **antifungal** drugs, not antibiotics, are needed for fungal disease.",
            "Antibiotics spare human cells because they attack **bacterial** structures we do not have.",
            "A cold or flu is viral, so no antibiotic can shorten it.",
            "**Antifungal** drugs are needed for fungi; antibacterial antibiotics do not act on them.",
          ],
        },
        {
          subTitle: "How Antibiotic Resistance Rises",
          bullets: [
            "Within a bacterial population a few cells may carry a random **mutation** that makes them resistant to a particular antibiotic.",
            "The antibiotic kills the non-resistant bacteria, leaving the resistant ones with fewer competitors for food and space.",
            "The survivors **reproduce**, passing the resistance gene on, so the population soon consists largely of resistant bacteria.",
            "Over-prescribing, incomplete courses and use in animal feed all speed the process, which is why new antibiotics are constantly needed.",
            "Resistance begins as a **random mutation**, not the bacterium choosing to adapt.",
            "The antibiotic is the **selection pressure** that leaves the mutants to survive.",
            "An **incomplete course** lets the toughest survivors breed on.",
          ],
        },
        {
          subTitle: "How Vaccination Gives Immunity",
          bullets: [
            "A vaccine may hold a **dead or attenuated** pathogen or just fragments of it.",
            "The harmless **antigen** trains the lymphocytes without causing the illness.",
            "Vaccine immunity is **artificial active**: the body makes its own antibodies.",
            "A newborn gains **natural passive** immunity from the mother's antibodies.",
            "Maternal **antibodies cross the placenta** and reach the baby in breast milk.",
            "**Herd immunity** shields even the unvaccinated once most of a community is immune.",
          ],
        },
      ],
      examinerTips: [
        "Use **antigen** for the substance that triggers the response and **antibody** for the protein made in reply; mixing the two up costs the mark.",
        "For a vaccination answer include the words **memory cells**, **secondary response**, and the comparison **faster and stronger**.",
        "Explain resistance as a selection story, mutation then survival then reproduction, rather than the bacteria deciding to change.",
        "Name the exact type — **artificial active** for a vaccine, **natural passive** for the newborn — when a question asks you to classify immunity.",
      ],
      commonMistakes: [
        "Saying antibiotics kill viruses, or that taking them speeds recovery from a cold or flu.",
        "Claiming the body makes antibodies before it ever meets the antigen, when it is the first exposure that creates the clones.",
        "Attributing resistance to the person rather than to the bacterium that carries the resistance gene.",
        "Saying a vaccine gives you the disease; it exposes you to a harmless antigen, not the illness.",
      ],
      recap: [
        "Explain how vaccination protects a person without causing the disease. [4]",
        "Compare the primary and the secondary immune responses in speed and in strength. [3]",
        "Explain why antibiotics do not cure a viral disease such as influenza. [3]",
        "Describe how passive immunity protects a newborn and why it is only temporary. [3]",
      ],
    },
    {
      title: "Lifestyle, Disease and Global Impact",
      body: `### Communicable disease in a global context
**Communicable** disease passes from host to host by a pathogen;\n\n**non-communicable** disease does not and arises from genes, lifestyle or environment. The lifestyle risk factors and the global cost of **HIV/AIDS** and **malaria** are set out in the bullets below.`,
      groups: [
        {
          subTitle: "Risk Factors Are Not Causes",
          bullets: [
            "A **risk factor** raises the chance of developing a disease but does not guarantee it and is not passed on to another person.",
            "**Smoking** raises the risk of lung disease and coronary heart disease, while **excess alcohol** damages the liver and raises blood pressure.",
            "**Poor diet** and **physical inactivity** contribute to obesity, type 2 diabetes and high blood pressure.",
            "Because these are lifestyle diseases, changing the behaviour is the main form of prevention.",
            "A diet rich in **saturated fat, sugar and salt** raises heart and metabolic risk.",
            "**Smoking** damages the lungs and raises the risk of several cancers.",
            "Type 2 diabetes, coronary heart disease and some cancers are largely **non-communicable**.",
          ],
        },
        {
          subTitle: "The Cost of HIV/AIDS and Malaria",
          bullets: [
            "Both diseases strike working adults and children, so families lose **income** and **caregivers** and **health services** become overloaded.",
            "Orphan numbers and school drop-out rise, and farm and trade output fall as productive workers are lost.",
            "Treatment and prevention, meaning **antiretroviral drugs** for HIV and bed nets plus antimalarials for malaria, are costly and depend on clean water, education and reliable clinics.",
            "Stigma and weak public understanding of transmission slow control, so health education is a core part of any answer.",
            "Lost workers cut **farm output** and trade, slowing the whole economy.",
            "Treatment spending diverts funds from **schools and infrastructure**.",
            "**Antiretrovirals** must be taken for life, so the cost stays high.",
          ],
        },
      ],
      examinerTips: [
        "For an 'evaluate the impact' question give the social cost, such as orphans and stigma, and the economic cost, such as lost labour and treatment expense, then match a measure to each.",
        "Keep communicable and non-communicable apart: malaria is communicable through a vector, while type 2 diabetes is non-communicable.",
        "When asked how a country can reduce a disease, list practical syllabus measures such as clean water, bed nets, health education and vaccination.",
        "Write '**raises the risk of**', not 'causes', for a lifestyle factor, because a risk factor is only probabilistic.",
      ],
      commonMistakes: [
        "Calling type 2 diabetes an inherited disease when the syllabus treats it as largely related to lifestyle and body mass.",
        "Blaming mosquitoes for the economic burden, when the cost comes from the disease itself and its treatment.",
        "Confusing a lifestyle risk factor with a pathogen, or describing smoking as a communicable disease.",
        "Labelling HIV or malaria non-communicable; both spread from host to host, malaria via a vector.",
      ],
      recap: [
        "Define communicable and non-communicable disease and give one example of each. [3]",
        "Describe two lifestyle risk factors and the disease each one raises the risk of. [4]",
        "Explain two ways in which malaria affects the economy of an affected country. [4]",
        "Explain two ways in which HIV/AIDS reduces the output of an affected country. [4]",
      ],
    },
  ],
};

export const BIOLOGY_CHAPTER_10: Chapter = chapterTen;
