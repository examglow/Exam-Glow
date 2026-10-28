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

const alloysArt = artPanel([
  {
    src: "ch09-alloy-structure.webp",
    alt: "Two panels of atom spheres, one an even grid and one disturbed by different-sized atoms",
    caption: "Even layers versus a distorted alloy",
  },
  {
    src: "ch09-galvanising-coating.webp",
    alt: "Cross-section of a steel sheet under a zinc coating with a scratch that stays protected",
    caption: "Zinc coating a steel sheet",
  },
]);

const extractionArt = artPanel([
  {
    src: "ch09-blast-furnace.webp",
    alt: "A tall tapered furnace with a hopper of ore at the top and molten metal tapping from the base",
    caption: "The blast furnace for iron",
  },
  {
    src: "ch09-aluminium-electrolysis.webp",
    alt: "A lined steel electrolysis bath with carbon rods dipping in and molten metal below",
    caption: "Electrolysis cell for aluminium",
  },
]);

const corrosionArt = artPanel([
  {
    src: "ch09-rusting-nail-tubes.webp",
    alt: "Three test tubes with iron nails: one dry, one under boiled water and oil, one half in water and rusted",
    caption: "The three-tube rusting test",
  },
  {
    src: "ch09-sacrificial-protection.webp",
    alt: "A pitted metal block bolted to a clean boat hull below the waterline",
    caption: "A sacrificial block on a hull",
  },
]);

const chapterNine: Chapter = {
  number: 9,
  title: "Metals",
  intro: `Metals are the materials of industry, and almost everything about them follows from one idea: reactivity.\n\nThis chapter links the everyday uses of metals and their alloys to their properties, then builds the reactivity series from real reactions.\n\nIt shows how that series decides the method used to extract each metal, why metals corrode, how corrosion is prevented,\n\nand why a finite supply makes recycling essential.`,
  subheadings: [
    {
      title: "Uses, Properties and Alloys",
      body: `## Property Decides the Job\n\nA metal's use follows directly from its properties. Good answers name the property, not just the use.\n\nAluminium is used in aircraft bodies because it is strong yet low in density.\n\nThe same metal makes cooking foil because it is unreactive and does not taint food. Copper is drawn into electrical wiring because it is a very good conductor.\n\nCopper also serves in plumbing because it does not react with water. Zinc coats iron in galvanising because it reacts with oxygen to seal the surface.\n\nLead is dense and soft, so it once lined pipes and radiation shields.\n\nSteel, an alloy of iron, is far stronger than pure iron and builds girders and bridges.\n\n## What an Alloy Is\n\nAn alloy is a metal mixed with one or more other elements. The added element is usually another metal or carbon. Brass is copper mixed with zinc.\n\nBronze is copper mixed with tin. Steel is iron mixed with a small amount of carbon.\n\n## Why Alloys Are Harder\n\nIn a pure metal the atoms are all the same size. They pack into neat, even layers that slide over each other.\n\nThis easy sliding is why pure metals are soft. Adding atoms of a different size distorts those regular layers.\n\nThe distorted layers can no longer slide, so the alloy is much harder. The pictures here show the two structures side by side, plus zinc protecting steel.`,
      figure: `${alloysArt}`,
      groups: [
        {
          subTitle: "Uses Follow Properties",
          bullets: [
            "**Aluminium:** strong, low density and unreactive, so it suits aircraft bodies and cooking foil.",
            "**Copper:** a good conductor that does not react with water, so it is used in wiring and plumbing.",
            "**Zinc:** reacts with oxygen to seal a surface, so it is used to galvanise iron.",
            "**Lead:** dense and soft, so it was once used for pipes and radiation shielding.",
            "**Steel:** stronger than pure iron, so it is used for girders, cars and bridges.",
          ],
        },
        {
          subTitle: "Alloys and Their Compositions",
          bullets: [
            "An alloy is a metal mixed with one or more other elements to change its properties.",
            "Brass is copper plus zinc, and bronze is copper plus tin.",
            "Steel is iron plus a small amount of carbon.",
            "Alloys are harder than pure metals because different-sized atoms stop the layers sliding.",
          ],
        },
        {
          subTitle: "Structure of a Pure Metal",
          bullets: [
            "Pure metal atoms are all the same size and pack into regular layers.",
            "The layers slide easily over each other, which makes pure metals soft.",
            "Distorting the layers with a different-sized atom makes sliding much harder.",
          ],
        },
      ],
      examinerTips: [
        "Always link a use to the property that causes it; naming only the use scores nothing.",
        "Give each alloy's composition exactly: brass is copper and zinc, bronze is copper and tin, steel is iron and carbon.",
        "Explain hardness in terms of layers: different-sized atoms distort the layers so they can no longer slide.",
      ],
      commonMistakes: [
        "Saying alloys are harder because they are 'heavier' or 'denser'; the real reason is the distorted layers.",
        "Confusing brass and bronze: brass contains zinc, whereas bronze contains tin.",
        "Calling steel a pure metal, when it is an alloy of iron and carbon.",
      ],
      recap: [
        "State one property of aluminium that makes it suitable for aircraft bodies. [1]",
        "Name the two metals present in brass. [2]",
        "Explain, in terms of structure, why an alloy is harder than its pure metal. [3]",
        "Give one use of copper and the property it depends on. [2]",
      ],
    },
    {
      title: "Occurrence and the Reactivity Series",
      body: `## Where Metals Come From\n\nMost metals are too reactive to exist free in the ground. They are found combined in ores, usually as oxides or carbonates.\n\nIron(III) oxide and calcium carbonate are common examples. Only the least reactive metals, such as gold and silver, are found free.\n\n## The Series in Order\n\nThe reactivity series lists metals from most reactive to least reactive. The order runs potassium, sodium, calcium, magnesium, aluminium, carbon, zinc, iron, lead, hydrogen, copper, silver, gold.\n\nCarbon and hydrogen are not metals, but they sit in the series as reference points. Learn the order in sequence, because each zone of it implies a different extraction method.\n\n## How the Order Is Found\n\nThe position of a metal is decided by watching its reactions. Reaction with cold water, with steam and with dilute acid each give clues.\n\nA metal that displaces another metal from its salt solution is the more reactive of the two.\n\nA metal oxide reduced by carbon shows that metal is less reactive than carbon. These tests are repeated with pairs until the whole order is fixed.\n\n## Reduction and What It Proves\n\nPassing a metal oxide over hot carbon can strip the oxygen away. If carbon takes the oxygen, the metal is less reactive than carbon.\n\nIf carbon cannot take the oxygen, the metal is more reactive than carbon. This one result splits the series at carbon and fixes the extraction method.`,
      groups: [
        {
          subTitle: "The Series from Most to Least Reactive",
          bullets: [
            "The order is potassium, sodium, calcium, magnesium, aluminium, carbon, zinc, iron, lead, hydrogen, copper, silver, gold.",
            "Carbon and hydrogen are non-metals placed in the series only as reference points.",
            "Metals above carbon are more reactive than carbon; metals below it are less reactive.",
            "Only the least reactive metals, such as gold, are found free in the ground.",
          ],
        },
        {
          subTitle: "Establishing the Order",
          bullets: [
            "Reaction with cold water identifies the most reactive metals, such as sodium.",
            "Reaction with steam separates middle metals such as zinc and iron.",
            "Reaction with dilute acid gives a further measure of reactivity.",
            "Displacement of one metal from another's salt solution ranks a pair directly.",
          ],
        },
        {
          subTitle: "Reduction with Carbon",
          bullets: [
            "Carbon can remove oxygen from the oxides of metals below it in the series.",
            "If carbon reduces an oxide, that metal is less reactive than carbon.",
            "If carbon cannot reduce an oxide, that metal is more reactive than carbon.",
            "This single test fixes the position of carbon within the series.",
          ],
        },
      ],
      examinerTips: [
        "Learn the series as one ordered string; sequence questions are usually all-or-nothing.",
        "Remember carbon and hydrogen are non-metals placed in the series only as reference points.",
        "For displacement use the exact phrase: a more reactive metal displaces a less reactive metal from its compound.",
      ],
      commonMistakes: [
        "Placing carbon below the metals; carbon sits between aluminium and zinc.",
        "Claiming gold reacts readily, when gold is the least reactive metal and is found free.",
        "Saying a metal 'steals' oxygen loosely instead of stating it is more reactive than carbon.",
      ],
      recap: [
        "Place these in order of reactivity, most first: copper, zinc, magnesium, iron. [4]",
        "Describe how you would use displacement to show zinc is more reactive than copper. [3]",
        "Explain what a reaction between an oxide and hot carbon proves about reactivity. [2]",
      ],
    },
    {
      title: "Extracting Metals",
      body: `## Reactivity Decides the Method\n\nA metal sits in one of three zones, and each zone has its own method. Metals above carbon are extracted by electrolysis of their molten compounds.\n\nMetals below carbon are extracted by reducing their oxides with carbon. Metals at the very bottom are found free and need no chemical extraction.\n\n## Iron in the Blast Furnace\n\nIron is made by reducing iron(III) oxide with carbon monoxide. Three raw materials enter at the top: iron ore, coke and limestone.\n\nHot air is blasted in at the base, so the coke burns: C + O₂ → CO₂.\n\nThat carbon dioxide reacts with more hot coke to form carbon monoxide: CO₂ + C → 2CO.\n\nThe carbon monoxide then reduces the ore: Fe₂O₃ + 3CO → 2Fe + 3CO₂. The limestone breaks down on heating: CaCO₃ → CaO + CO₂.\n\nThe quicklime reacts with sandy impurities to form slag: CaO + SiO₂ → CaSiO₃.\n\nDense molten iron sinks and is tapped off, while the lighter slag floats and runs off separately.\n\n## Aluminium by Electrolysis\n\nAluminium comes from purified aluminium oxide dissolved in molten cryolite. The cryolite dissolves the oxide and lowers the melting temperature, saving energy. Graphite rods act as the electrodes.\n\nAt the cathode aluminium ions gain electrons: Al³⁺ + 3e⁻ → Al. At the anode oxide ions lose electrons: 2O²⁻ → O₂ + 4e⁻.\n\nThe oxygen burns away the carbon anodes, so the anodes must be replaced. The overall change is 2Al₂O₃ → 4Al + 3O₂.\n\nThe huge current makes this expensive, which is a strong reason to recycle aluminium.`,
      figure: `${extractionArt}`,
      groups: [
        {
          subTitle: "Method Chosen by Position",
          bullets: [
            "Metals above carbon are extracted by electrolysis of their molten compounds.",
            "Metals below carbon are extracted by reduction of their oxides with carbon.",
            "Metals at the bottom of the series are found free and need no reduction.",
          ],
        },
        {
          subTitle: "The Blast Furnace",
          bullets: [
            "Iron ore, coke and limestone are fed in at the top of the furnace.",
            "Hot air blasted at the base burns the coke to carbon dioxide.",
            "Carbon monoxide, made from that carbon dioxide, is the actual reducing agent.",
            "Limestone forms slag with sandy impurities, which floats and is run off.",
            "Molten iron sinks to the bottom and is tapped off separately from the slag.",
          ],
        },
        {
          subTitle: "Electrolysis of Aluminium",
          bullets: [
            "Purified aluminium oxide is dissolved in molten cryolite to lower the melting point.",
            "At the cathode, aluminium ions gain electrons to form molten aluminium.",
            "At the anode, oxide ions lose electrons to form oxygen gas.",
            "The oxygen burns the carbon anodes away, so the anodes must be replaced.",
            "The large electricity demand makes extraction expensive and recycling worthwhile.",
          ],
        },
      ],
      examinerTips: [
        "Match the method to the position: electrolysis above carbon, reduction with carbon below it, free at the bottom.",
        "In the blast furnace, name carbon monoxide as the reducing agent, not carbon itself.",
        "For aluminium, state that cryolite lowers the melting point and so saves energy.",
      ],
      commonMistakes: [
        "Writing that carbon reduces the iron ore directly; it is carbon monoxide that does the reduction.",
        "Forgetting that the anodes are carbon and burn away, so they must be replaced.",
        "Confusing slag (calcium silicate) with iron; the slag floats on top and is the waste.",
      ],
      recap: [
        "State how iron(III) oxide is reduced to iron in the blast furnace, with an equation. [3]",
        "Explain the role of limestone in the blast furnace. [2]",
        "Explain why cryolite is added during the electrolysis of aluminium oxide. [2]",
        "Explain why the carbon anodes in aluminium extraction must be replaced regularly. [2]",
      ],
    },
    {
      title: "Corrosion of Metals",
      body: `## What Rusting Actually Is\n\nRusting is the corrosion of iron. The brown flaky solid is hydrated iron(III) oxide, Fe₂O₃·xH₂O. Rust is porous and flakes away, exposing fresh iron underneath.\n\nIt never protects the metal the way aluminium oxide protects aluminium.\n\n## The Two Conditions\n\nRust forms only when water and oxygen are present together. The classic experiment stands an iron nail in each of three test tubes.\n\nA dry nail in a tube with a cotton plug does not rust, because there is no water.\n\nA nail in boiled water sealed under a layer of oil does not rust, because there is no oxygen.\n\nA nail half in ordinary water rusts fastest at the waterline, where both are present. Salt speeds rusting up, because salt water carries ions and helps the reaction.\n\n## Preventing Rust\n\nRust is prevented by keeping water and oxygen away from the iron. Paint and oil form a barrier coating on bridges and gates.\n\nPlating with a less reactive metal, such as tin, gives a barrier but fails once scratched.\n\nGalvanising coats the iron with zinc, which acts as a barrier and protects even at a scratch.\n\nSacrificial protection fixes a block of a more reactive metal, such as magnesium or zinc, to the structure.\n\nThe more reactive metal corrodes in place of the iron, protecting ships' hulls and buried pipelines. When the sacrificial block is eaten away it is simply replaced.`,
      figure: corrosionArt,
      groups: [
        {
          subTitle: "The Conditions for Rusting",
          bullets: [
            "Rust is hydrated iron(III) oxide, and it needs both water and oxygen.",
            "A dry nail does not rust, showing that water is required.",
            "A nail in boiled water under oil does not rust, showing oxygen is required.",
            "A nail half in water rusts fastest at the waterline.",
            "Salt speeds rusting because salt water conducts electricity and carries the reaction.",
          ],
        },
        {
          subTitle: "Prevention Methods",
          bullets: [
            "Paint and oil form a barrier that keeps out water and oxygen.",
            "Tin plating gives a barrier but rusts quickly once the coating is scratched.",
            "Galvanising coats iron with zinc, which protects even at a scratch.",
            "A more reactive metal such as magnesium corrodes in place of the iron.",
            "Sacrificial blocks protect ships' hulls and buried underground pipelines.",
          ],
        },
      ],
      examinerTips: [
        "Name both conditions for rusting, water and oxygen; giving only one loses the mark.",
        "Explain galvanising as both a barrier and sacrificial protection at a scratch.",
        "For sacrificial protection, always say the attached metal is more reactive than iron.",
      ],
      commonMistakes: [
        "Saying rust protects iron the way aluminium oxide protects aluminium; rust is porous and flakes away.",
        "Thinking salt prevents rusting, when salt speeds it up.",
        "Calling tin plating sacrificial; tin is less reactive than iron and only acts as a barrier.",
      ],
      recap: [
        "State the two conditions needed for iron to rust. [2]",
        "Describe the nail-in-three-tubes experiment and its conclusions. [4]",
        "Explain how a magnesium block protects a steel ship's hull. [3]",
      ],
    },
    {
      title: "Reactions of Metals",
      body: `## Metals and Oxygen\n\nHeating or burning a metal in oxygen gives its metal oxide. Magnesium burns with a bright white flame: 2Mg + O₂ → 2MgO.\n\nThe oxides of reactive metals are basic and dissolve in water to give alkaline solutions.\n\n## Metals and Water\n\nVery reactive metals such as sodium react with cold water to give a hydroxide and hydrogen. 2Na + 2H₂O → 2NaOH + H₂.\n\nMagnesium reacts only slowly with cold water but burns in steam: Mg + H₂O → MgO + H₂.\n\nZinc and iron react with steam but not with cold water: 3Fe + 4H₂O → Fe₃O₄ + 4H₂. Copper does not react with water or steam at all.\n\n## Metals and Dilute Acids\n\nMost metals above hydrogen react with dilute acids to give a salt and hydrogen. With dilute hydrochloric acid: Zn + 2HCl → ZnCl₂ + H₂.\n\nWith dilute sulfuric acid: Mg + H₂SO₄ → MgSO₄ + H₂. Iron gives iron(II) salts: Fe + H₂SO₄ → FeSO₄ + H₂.\n\nCopper, being below hydrogen, does not react with these dilute acids.\n\n## The Test for Hydrogen\n\nHydrogen is collected in a test tube or a gas syringe. A lighted splint at the mouth gives a characteristic squeaky pop.\n\nThat pop confirms the gas is hydrogen.\n\n## Displacement\n\nA more reactive metal displaces a less reactive metal from its compound. Iron in copper(II) sulfate solution coats with copper: Fe + CuSO₄ → FeSO₄ + Cu.\n\nThe blue solution fades as copper is removed from it.`,
      groups: [
        {
          subTitle: "With Oxygen",
          bullets: [
            "Heating or burning a metal in oxygen produces its metal oxide.",
            "Magnesium burns with a bright white flame to give magnesium oxide.",
            "The balanced equation is 2Mg + O₂ → 2MgO.",
          ],
        },
        {
          subTitle: "With Water and Steam",
          bullets: [
            "Sodium reacts with cold water to give sodium hydroxide and hydrogen.",
            "Magnesium burns in steam to give magnesium oxide and hydrogen.",
            "Iron and zinc react with steam but not with cold water.",
            "Copper does not react with water or steam at all.",
          ],
        },
        {
          subTitle: "With Dilute Acids",
          bullets: [
            "Metals above hydrogen react with dilute acids to give a salt and hydrogen.",
            "Zinc with dilute hydrochloric acid gives zinc chloride and hydrogen.",
            "Magnesium with dilute sulfuric acid gives magnesium sulfate and hydrogen.",
            "Copper does not react with dilute hydrochloric or sulfuric acid.",
          ],
        },
        {
          subTitle: "Testing Hydrogen and Displacement",
          bullets: [
            "Hydrogen is confirmed by a lighted splint giving a squeaky pop.",
            "A more reactive metal displaces a less reactive metal from its salt solution.",
            "Iron displaces copper from copper(II) sulfate, fading the blue colour.",
          ],
        },
      ],
      examinerTips: [
        "Balance every equation, and add state symbols only when the question asks for them.",
        "Use the exact wording 'a squeaky pop' for the test for hydrogen.",
        "For displacement, decide whether a reaction happens using the series before writing an equation.",
      ],
      commonMistakes: [
        "Writing iron(III) salts from reactions with dilute acids; these reactions give iron(II) salts.",
        "Saying copper reacts with dilute acid, when copper is below hydrogen and does not.",
        "Forgetting that hydrogen gas is the other product when a metal reacts with an acid.",
      ],
      recap: [
        "Write a balanced equation for magnesium burning in oxygen. [2]",
        "Describe the test for hydrogen gas and the result. [2]",
        "Predict and balance the reaction: zinc + copper(II) sulfate. [2]",
        "Name one metal that reacts with cold water and write its equation. [2]",
      ],
    },
    {
      title: "Metals as a Finite Resource",
      body: `## Metals Are Finite\n\nMetal ores are non-renewable and will eventually run out. Recycling conserves the remaining ore supplies for the future.\n\nEvery ton of metal recycled saves the mining of fresh ore.\n\n## Why Recycling Saves Energy\n\nExtracting a metal from its ore needs large amounts of energy. This is especially true for aluminium, which is made by electrolysis.\n\nRecycling aluminium uses only a small fraction of that energy, because the metal needs no reduction.\n\nLess energy used means fewer fossil fuels burned and less carbon dioxide released. This is why recycling drinks cans is so valuable.\n\n## Consequences of Mining\n\nMining removes vegetation and soil and destroys habitats. It scarifies large areas of land and leaves noisy, dusty spoil heaps.\n\nThese heaps and their run-off can pollute nearby rivers. Recycling cuts the demand for fresh ore, so it lessens every one of these effects.\n\n## Using Metals Sustainably\n\nSustainable use means meeting today's needs without using up the resources of the future.\n\nWe achieve it by recycling, by designing products to last, and by recovering scrap from demolition.\n\nBecause the supply of every metal is limited, careful use is a duty rather than a choice.`,
      groups: [
        {
          subTitle: "Why Metals Are Finite",
          bullets: [
            "Metal ores are non-renewable and will eventually be used up.",
            "Recycling conserves the limited supplies of ore still in the ground.",
            "Every recycled ton of metal saves the mining of fresh ore.",
          ],
        },
        {
          subTitle: "Energy and Environmental Benefits",
          bullets: [
            "Extracting metals from ores consumes large amounts of energy.",
            "Recycling aluminium uses far less energy than extracting it by electrolysis.",
            "Less energy used means fewer fossil fuels burned and less carbon dioxide.",
            "Recycling reduces habitat loss, spoil heaps and river pollution from mining.",
          ],
        },
        {
          subTitle: "Sustainable Use",
          bullets: [
            "Sustainable use meets present needs without exhausting resources for the future.",
            "Designing durable products and recovering scrap both cut the demand for new metal.",
            "Recycling slows the depletion of a finite supply rather than making metals renewable.",
          ],
        },
      ],
      examinerTips: [
        "Give two distinct reasons for recycling: it saves energy and it conserves finite ore.",
        "Link recycling aluminium to the high energy cost of electrolysis for full marks.",
        "Name a specific environmental consequence of mining, such as habitat loss or river pollution.",
      ],
      commonMistakes: [
        "Saying recycling makes metals renewable; metals stay finite and recycling only slows their use.",
        "Claiming recycling produces more pollution than mining, when it generally uses far less energy.",
      ],
      recap: [
        "Explain why recycling aluminium saves a large amount of energy. [3]",
        "State two effects of mining metal ores on the environment. [2]",
        "Explain what is meant by using a finite metal resource sustainably. [2]",
      ],
    },
  ],
};

export const CHEMISTRY_CHAPTER_9: Chapter = chapterNine;
